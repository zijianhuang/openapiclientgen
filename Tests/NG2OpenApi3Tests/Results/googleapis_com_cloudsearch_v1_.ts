import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Action {

		/** [Required] Title of the action. */
		title?: string | null;

		/** [Optional] Url of the action. */
		url?: string | null;
	}
	export interface ActionFormProperties {

		/** [Required] Title of the action. */
		title: FormControl<string | null | undefined>,

		/** [Optional] Url of the action. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the settings for Cloud audit logging */
	export interface AuditLoggingSettings {

		/** Indicates whether audit logging is on/off for admin activity read APIs i.e. Get/List DataSources, Get/List SearchApplications etc. */
		logAdminReadActions?: boolean | null;

		/** Indicates whether audit logging is on/off for data access read APIs i.e. ListItems, GetItem etc. */
		logDataReadActions?: boolean | null;

		/** Indicates whether audit logging is on/off for data access write APIs i.e. IndexItem etc. */
		logDataWriteActions?: boolean | null;

		/** The resource name of the GCP Project to store audit logs. Cloud audit logging will be enabled after project_name has been updated through CustomerService. Format: projects/{project_id} */
		project?: string | null;
	}

	/** Represents the settings for Cloud audit logging */
	export interface AuditLoggingSettingsFormProperties {

		/** Indicates whether audit logging is on/off for admin activity read APIs i.e. Get/List DataSources, Get/List SearchApplications etc. */
		logAdminReadActions: FormControl<boolean | null | undefined>,

		/** Indicates whether audit logging is on/off for data access read APIs i.e. ListItems, GetItem etc. */
		logDataReadActions: FormControl<boolean | null | undefined>,

		/** Indicates whether audit logging is on/off for data access write APIs i.e. IndexItem etc. */
		logDataWriteActions: FormControl<boolean | null | undefined>,

		/** The resource name of the GCP Project to store audit logs. Cloud audit logging will be enabled after project_name has been updated through CustomerService. Format: projects/{project_id} */
		project: FormControl<string | null | undefined>,
	}
	export function CreateAuditLoggingSettingsFormGroup() {
		return new FormGroup<AuditLoggingSettingsFormProperties>({
			logAdminReadActions: new FormControl<boolean | null | undefined>(undefined),
			logDataReadActions: new FormControl<boolean | null | undefined>(undefined),
			logDataWriteActions: new FormControl<boolean | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BackgroundColoredText {

		/** [Optional] Color of the background. The text color can change depending on the selected background color, and the client does not have control over this. If missing, the background will be WHITE. */
		backgroundColor?: BackgroundColoredTextBackgroundColor | null;

		/** [Required] The text to display. */
		text?: string | null;
	}
	export interface BackgroundColoredTextFormProperties {

		/** [Optional] Color of the background. The text color can change depending on the selected background color, and the client does not have control over this. If missing, the background will be WHITE. */
		backgroundColor: FormControl<BackgroundColoredTextBackgroundColor | null | undefined>,

		/** [Required] The text to display. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateBackgroundColoredTextFormGroup() {
		return new FormGroup<BackgroundColoredTextFormProperties>({
			backgroundColor: new FormControl<BackgroundColoredTextBackgroundColor | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BackgroundColoredTextBackgroundColor { UNKNOWN_COLOR = 'UNKNOWN_COLOR', WHITE = 'WHITE', YELLOW = 'YELLOW', ORANGE = 'ORANGE', GREEN = 'GREEN', BLUE = 'BLUE', GREY = 'GREY' }


	/** Used to provide a search operator for boolean properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. */
	export interface BooleanOperatorOptions {

		/** Indicates the operator name required in the query in order to isolate the boolean property. For example, if operatorName is *closed* and the property's name is *isClosed*, then queries like *closed:<value>* show results only where the value of the property named *isClosed* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		operatorName?: string | null;
	}

	/** Used to provide a search operator for boolean properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. */
	export interface BooleanOperatorOptionsFormProperties {

		/** Indicates the operator name required in the query in order to isolate the boolean property. For example, if operatorName is *closed* and the property's name is *isClosed*, then queries like *closed:<value>* show results only where the value of the property named *isClosed* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		operatorName: FormControl<string | null | undefined>,
	}
	export function CreateBooleanOperatorOptionsFormGroup() {
		return new FormGroup<BooleanOperatorOptionsFormProperties>({
			operatorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The options for boolean properties. */
	export interface BooleanPropertyOptions {

		/** Used to provide a search operator for boolean properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. */
		operatorOptions?: BooleanOperatorOptions;
	}

	/** The options for boolean properties. */
	export interface BooleanPropertyOptionsFormProperties {
	}
	export function CreateBooleanPropertyOptionsFormGroup() {
		return new FormGroup<BooleanPropertyOptionsFormProperties>({
		});

	}

	export interface CheckAccessResponse {

		/** Returns true if principal has access. Returns false otherwise. */
		hasAccess?: boolean | null;
	}
	export interface CheckAccessResponseFormProperties {

		/** Returns true if principal has access. Returns false otherwise. */
		hasAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateCheckAccessResponseFormGroup() {
		return new FormGroup<CheckAccessResponseFormProperties>({
			hasAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CompositeFilter {

		/** The logic operator of the sub filter. */
		logicOperator?: CompositeFilterLogicOperator | null;

		/** Sub filters. */
		subFilters?: Array<Filter>;
	}
	export interface CompositeFilterFormProperties {

		/** The logic operator of the sub filter. */
		logicOperator: FormControl<CompositeFilterLogicOperator | null | undefined>,
	}
	export function CreateCompositeFilterFormGroup() {
		return new FormGroup<CompositeFilterFormProperties>({
			logicOperator: new FormControl<CompositeFilterLogicOperator | null | undefined>(undefined),
		});

	}

	export enum CompositeFilterLogicOperator { AND = 'AND', OR = 'OR', NOT = 'NOT' }


	/** A generic way of expressing filters in a query, which supports two approaches: **1. Setting a ValueFilter.** The name must match an operator_name defined in the schema for your data source. **2. Setting a CompositeFilter.** The filters are evaluated using the logical operator. The top-level operators can only be either an AND or a NOT. AND can appear only at the top-most level. OR can appear only under a top-level AND. */
	export interface Filter {
		compositeFilter?: CompositeFilter;
		valueFilter?: ValueFilter;
	}

	/** A generic way of expressing filters in a query, which supports two approaches: **1. Setting a ValueFilter.** The name must match an operator_name defined in the schema for your data source. **2. Setting a CompositeFilter.** The filters are evaluated using the logical operator. The top-level operators can only be either an AND or a NOT. AND can appear only at the top-most level. OR can appear only under a top-level AND. */
	export interface FilterFormProperties {
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
		});

	}

	export interface ValueFilter {

		/** The `operator_name` applied to the query, such as *price_greater_than*. The filter can work against both types of filters defined in the schema for your data source: 1. `operator_name`, where the query filters results by the property that matches the value. 2. `greater_than_operator_name` or `less_than_operator_name` in your schema. The query filters the results for the property values that are greater than or less than the supplied value in the query. */
		operatorName?: string | null;

		/** Definition of a single value with generic type. */
		value?: Value;
	}
	export interface ValueFilterFormProperties {

		/** The `operator_name` applied to the query, such as *price_greater_than*. The filter can work against both types of filters defined in the schema for your data source: 1. `operator_name`, where the query filters results by the property that matches the value. 2. `greater_than_operator_name` or `less_than_operator_name` in your schema. The query filters the results for the property values that are greater than or less than the supplied value in the query. */
		operatorName: FormControl<string | null | undefined>,
	}
	export function CreateValueFilterFormGroup() {
		return new FormGroup<ValueFilterFormProperties>({
			operatorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of a single value with generic type. */
	export interface Value {
		booleanValue?: boolean | null;

		/** Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999. */
		dateValue?: Date;
		doubleValue?: number | null;
		integerValue?: string | null;
		stringValue?: string | null;
		timestampValue?: string | null;
	}

	/** Definition of a single value with generic type. */
	export interface ValueFormProperties {
		booleanValue: FormControl<boolean | null | undefined>,
		doubleValue: FormControl<number | null | undefined>,
		integerValue: FormControl<string | null | undefined>,
		stringValue: FormControl<string | null | undefined>,
		timestampValue: FormControl<string | null | undefined>,
	}
	export function CreateValueFormGroup() {
		return new FormGroup<ValueFormProperties>({
			booleanValue: new FormControl<boolean | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
			integerValue: new FormControl<string | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
			timestampValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999. */
	export interface Date {

		/** Day of month. Must be from 1 to 31 and valid for the year and month. */
		day?: number | null;

		/** Month of date. Must be from 1 to 12. */
		month?: number | null;

		/** Year of date. Must be from 1 to 9999. */
		year?: number | null;
	}

	/** Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999. */
	export interface DateFormProperties {

		/** Day of month. Must be from 1 to 31 and valid for the year and month. */
		day: FormControl<number | null | undefined>,

		/** Month of date. Must be from 1 to 12. */
		month: FormControl<number | null | undefined>,

		/** Year of date. Must be from 1 to 9999. */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDateFormGroup() {
		return new FormGroup<DateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Content {

		/** [Optional] Actions for this card. */
		actions?: Array<Action>;

		/** IMPORTANT: It is unsafe to accept this message from an untrusted source, since it's trivial for an attacker to forge serialized messages that don't fulfill the type's safety contract -- for example, it could contain attacker controlled script. A system which receives a SafeHtmlProto implicitly trusts the producer of the SafeHtmlProto. So, it's generally safe to return this message in RPC responses, but generally unsafe to accept it in RPC requests. */
		description?: SafeHtmlProto;
		subtitle?: BackgroundColoredText;
		title?: BackgroundColoredText;
	}
	export interface ContentFormProperties {
	}
	export function CreateContentFormGroup() {
		return new FormGroup<ContentFormProperties>({
		});

	}


	/** IMPORTANT: It is unsafe to accept this message from an untrusted source, since it's trivial for an attacker to forge serialized messages that don't fulfill the type's safety contract -- for example, it could contain attacker controlled script. A system which receives a SafeHtmlProto implicitly trusts the producer of the SafeHtmlProto. So, it's generally safe to return this message in RPC responses, but generally unsafe to accept it in RPC requests. */
	export interface SafeHtmlProto {

		/** IMPORTANT: Never set or read this field, even from tests, it is private. See documentation at the top of .proto file for programming language packages with which to create or read this message. */
		privateDoNotAccessOrElseSafeHtmlWrappedValue?: string | null;
	}

	/** IMPORTANT: It is unsafe to accept this message from an untrusted source, since it's trivial for an attacker to forge serialized messages that don't fulfill the type's safety contract -- for example, it could contain attacker controlled script. A system which receives a SafeHtmlProto implicitly trusts the producer of the SafeHtmlProto. So, it's generally safe to return this message in RPC responses, but generally unsafe to accept it in RPC requests. */
	export interface SafeHtmlProtoFormProperties {

		/** IMPORTANT: Never set or read this field, even from tests, it is private. See documentation at the top of .proto file for programming language packages with which to create or read this message. */
		privateDoNotAccessOrElseSafeHtmlWrappedValue: FormControl<string | null | undefined>,
	}
	export function CreateSafeHtmlProtoFormGroup() {
		return new FormGroup<SafeHtmlProtoFormProperties>({
			privateDoNotAccessOrElseSafeHtmlWrappedValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Context {

		/** [Optional] App where the card should be shown. If missing, the card will be shown in TOPAZ. */
		app?: Array<string>;

		/** [Optional] Day of week when the card should be shown, where 0 is Monday. */
		dayOfWeek?: Array<number>;

		/** [Optional] Date (in seconds since epoch) when the card should stop being shown. If missing, end_date_sec will be set to Jan 1st, 2100. */
		endDateSec?: string | null;

		/** [Optional] End time in seconds, within a day, when the card should stop being shown if it's within [start_date_sec, end_date_sec]. If missing, this is set to 86400 (24 hours x 3600 sec/hour), i.e., midnight next day. */
		endDayOffsetSec?: string | null;

		/** [Optional] The locales for which the card should be triggered (e.g., en_US and en_CA). If missing, the card is going to show to clients regardless of their locale. */
		locale?: Array<string>;

		/** [Optional] Text-free locations where the card should be shown. This is expected to match the user's location in focus. If no location is specified, the card will be shown for any location. */
		location?: Array<string>;

		/** [Required only for Answer and RHS cards - will be ignored for Homepage] cards. It's the exact case-insensitive queries that will trigger the Answer or RHS card. */
		query?: Array<string>;

		/** [Optional] Date (in seconds since epoch) when the card should start being shown. If missing, start_date_sec will be Jan 1st, 1970 UTC. */
		startDateSec?: string | null;

		/** [Optional] Start time in seconds, within a day, when the card should be shown if it's within [start_date_sec, end_date_sec]. If 0, the card will be shown from 12:00am on. */
		startDayOffsetSec?: string | null;

		/** [Optional] Surface where the card should be shown in. If missing, the card will be shown in any surface. */
		surface?: Array<string>;

		/** [Required] Type of the card (homepage, Answer or RHS). */
		type?: Array<string>;
	}
	export interface ContextFormProperties {

		/** [Optional] Date (in seconds since epoch) when the card should stop being shown. If missing, end_date_sec will be set to Jan 1st, 2100. */
		endDateSec: FormControl<string | null | undefined>,

		/** [Optional] End time in seconds, within a day, when the card should stop being shown if it's within [start_date_sec, end_date_sec]. If missing, this is set to 86400 (24 hours x 3600 sec/hour), i.e., midnight next day. */
		endDayOffsetSec: FormControl<string | null | undefined>,

		/** [Optional] Date (in seconds since epoch) when the card should start being shown. If missing, start_date_sec will be Jan 1st, 1970 UTC. */
		startDateSec: FormControl<string | null | undefined>,

		/** [Optional] Start time in seconds, within a day, when the card should be shown if it's within [start_date_sec, end_date_sec]. If 0, the card will be shown from 12:00am on. */
		startDayOffsetSec: FormControl<string | null | undefined>,
	}
	export function CreateContextFormGroup() {
		return new FormGroup<ContextFormProperties>({
			endDateSec: new FormControl<string | null | undefined>(undefined),
			endDayOffsetSec: new FormControl<string | null | undefined>(undefined),
			startDateSec: new FormControl<string | null | undefined>(undefined),
			startDayOffsetSec: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A named attribute associated with an item which can be used for influencing the ranking of the item based on the context in the request. */
	export interface ContextAttribute {

		/** The name of the attribute. It should not be empty. The maximum length is 32 characters. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The name will be normalized (lower-cased) before being matched. */
		name?: string | null;

		/** Text values of the attribute. The maximum number of elements is 10. The maximum length of an element in the array is 32 characters. The value will be normalized (lower-cased) before being matched. */
		values?: Array<string>;
	}

	/** A named attribute associated with an item which can be used for influencing the ranking of the item based on the context in the request. */
	export interface ContextAttributeFormProperties {

		/** The name of the attribute. It should not be empty. The maximum length is 32 characters. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The name will be normalized (lower-cased) before being matched. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateContextAttributeFormGroup() {
		return new FormGroup<ContextAttributeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Aggregation of items by status code as of the specified date. */
	export interface CustomerIndexStats {

		/** Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999. */
		date?: Date;

		/** Number of items aggregrated by status code. */
		itemCountByStatus?: Array<ItemCountByStatus>;
	}

	/** Aggregation of items by status code as of the specified date. */
	export interface CustomerIndexStatsFormProperties {
	}
	export function CreateCustomerIndexStatsFormGroup() {
		return new FormGroup<CustomerIndexStatsFormProperties>({
		});

	}

	export interface ItemCountByStatus {

		/** Number of items matching the status code. */
		count?: string | null;

		/** Number of items matching the status code for which billing is done. This excludes virtual container items from the total count. This count would not be applicable for items with ERROR or NEW_ITEM status code. */
		indexedItemsCount?: string | null;

		/** Status of the items. */
		statusCode?: ItemCountByStatusStatusCode | null;
	}
	export interface ItemCountByStatusFormProperties {

		/** Number of items matching the status code. */
		count: FormControl<string | null | undefined>,

		/** Number of items matching the status code for which billing is done. This excludes virtual container items from the total count. This count would not be applicable for items with ERROR or NEW_ITEM status code. */
		indexedItemsCount: FormControl<string | null | undefined>,

		/** Status of the items. */
		statusCode: FormControl<ItemCountByStatusStatusCode | null | undefined>,
	}
	export function CreateItemCountByStatusFormGroup() {
		return new FormGroup<ItemCountByStatusFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			indexedItemsCount: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<ItemCountByStatusStatusCode | null | undefined>(undefined),
		});

	}

	export enum ItemCountByStatusStatusCode { CODE_UNSPECIFIED = 'CODE_UNSPECIFIED', ERROR = 'ERROR', MODIFIED = 'MODIFIED', NEW_ITEM = 'NEW_ITEM', ACCEPTED = 'ACCEPTED' }

	export interface CustomerQueryStats {

		/** Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999. */
		date?: Date;
		queryCountByStatus?: Array<QueryCountByStatus>;
	}
	export interface CustomerQueryStatsFormProperties {
	}
	export function CreateCustomerQueryStatsFormGroup() {
		return new FormGroup<CustomerQueryStatsFormProperties>({
		});

	}

	export interface QueryCountByStatus {
		count?: string | null;

		/** This represents the http status code. */
		statusCode?: number | null;
	}
	export interface QueryCountByStatusFormProperties {
		count: FormControl<string | null | undefined>,

		/** This represents the http status code. */
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateQueryCountByStatusFormGroup() {
		return new FormGroup<QueryCountByStatusFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Search application stats for a customer for the given date. */
	export interface CustomerSearchApplicationStats {

		/** The count of search applications for the date. */
		count?: string | null;

		/** Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999. */
		date?: Date;
	}

	/** Search application stats for a customer for the given date. */
	export interface CustomerSearchApplicationStatsFormProperties {

		/** The count of search applications for the date. */
		count: FormControl<string | null | undefined>,
	}
	export function CreateCustomerSearchApplicationStatsFormGroup() {
		return new FormGroup<CustomerSearchApplicationStatsFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerSessionStats {

		/** Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999. */
		date?: Date;

		/** The count of search sessions on the day */
		searchSessionsCount?: string | null;
	}
	export interface CustomerSessionStatsFormProperties {

		/** The count of search sessions on the day */
		searchSessionsCount: FormControl<string | null | undefined>,
	}
	export function CreateCustomerSessionStatsFormGroup() {
		return new FormGroup<CustomerSessionStatsFormProperties>({
			searchSessionsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents settings at a customer level. */
	export interface CustomerSettings {

		/** Represents the settings for Cloud audit logging */
		auditLoggingSettings?: AuditLoggingSettings;
		vpcSettings?: VPCSettings;
	}

	/** Represents settings at a customer level. */
	export interface CustomerSettingsFormProperties {
	}
	export function CreateCustomerSettingsFormGroup() {
		return new FormGroup<CustomerSettingsFormProperties>({
		});

	}

	export interface VPCSettings {

		/** The resource name of the GCP Project to be used for VPC SC policy check. VPC security settings on this project will be honored for Cloud Search APIs after project_name has been updated through CustomerService. Format: projects/{project_id} */
		project?: string | null;
	}
	export interface VPCSettingsFormProperties {

		/** The resource name of the GCP Project to be used for VPC SC policy check. VPC security settings on this project will be honored for Cloud Search APIs after project_name has been updated through CustomerService. Format: projects/{project_id} */
		project: FormControl<string | null | undefined>,
	}
	export function CreateVPCSettingsFormGroup() {
		return new FormGroup<VPCSettingsFormProperties>({
			project: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerUserStats {

		/** Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999. */
		date?: Date;

		/** The count of unique active users in the past one day */
		oneDayActiveUsersCount?: string | null;

		/** The count of unique active users in the past seven days */
		sevenDaysActiveUsersCount?: string | null;

		/** The count of unique active users in the past thirty days */
		thirtyDaysActiveUsersCount?: string | null;
	}
	export interface CustomerUserStatsFormProperties {

		/** The count of unique active users in the past one day */
		oneDayActiveUsersCount: FormControl<string | null | undefined>,

		/** The count of unique active users in the past seven days */
		sevenDaysActiveUsersCount: FormControl<string | null | undefined>,

		/** The count of unique active users in the past thirty days */
		thirtyDaysActiveUsersCount: FormControl<string | null | undefined>,
	}
	export function CreateCustomerUserStatsFormGroup() {
		return new FormGroup<CustomerUserStatsFormProperties>({
			oneDayActiveUsersCount: new FormControl<string | null | undefined>(undefined),
			sevenDaysActiveUsersCount: new FormControl<string | null | undefined>(undefined),
			thirtyDaysActiveUsersCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Datasource is a logical namespace for items to be indexed. All items must belong to a datasource. This is the prerequisite before items can be indexed into Cloud Search.  */
	export interface DataSource {

		/** If true, sets the datasource to read-only mode. In read-only mode, the Indexing API rejects any requests to index or delete items in this source. Enabling read-only mode does not stop the processing of previously accepted data. */
		disableModifications?: boolean | null;

		/** Disable serving any search or assist results. */
		disableServing?: boolean | null;

		/** Required. Display name of the datasource The maximum length is 300 characters. */
		displayName?: string | null;

		/** List of service accounts that have indexing access. */
		indexingServiceAccounts?: Array<string>;

		/** This field restricts visibility to items at the datasource level. Items within the datasource are restricted to the union of users and groups included in this field. Note that, this does not ensure access to a specific item, as users need to have ACL permissions on the contained items. This ensures a high level access on the entire datasource, and that the individual items are not shared outside this visibility. */
		itemsVisibility?: Array<GSuitePrincipal>;

		/** The name of the datasource resource. Format: datasources/{source_id}. The name is ignored when creating a datasource. */
		name?: string | null;

		/** IDs of the Long Running Operations (LROs) currently running for this schema. */
		operationIds?: Array<string>;

		/** Can a user request to get thumbnail URI for Items indexed in this data source. */
		returnThumbnailUrls?: boolean | null;

		/** A short name or alias for the source. This value will be used to match the 'source' operator. For example, if the short name is *<value>* then queries like *source:<value>* will only return results for this source. The value must be unique across all datasources. The value must only contain alphanumeric characters (a-zA-Z0-9). The value cannot start with 'google' and cannot be one of the following: mail, gmail, docs, drive, groups, sites, calendar, hangouts, gplus, keep, people, teams. Its maximum length is 32 characters. */
		shortName?: string | null;
	}

	/** Datasource is a logical namespace for items to be indexed. All items must belong to a datasource. This is the prerequisite before items can be indexed into Cloud Search.  */
	export interface DataSourceFormProperties {

		/** If true, sets the datasource to read-only mode. In read-only mode, the Indexing API rejects any requests to index or delete items in this source. Enabling read-only mode does not stop the processing of previously accepted data. */
		disableModifications: FormControl<boolean | null | undefined>,

		/** Disable serving any search or assist results. */
		disableServing: FormControl<boolean | null | undefined>,

		/** Required. Display name of the datasource The maximum length is 300 characters. */
		displayName: FormControl<string | null | undefined>,

		/** The name of the datasource resource. Format: datasources/{source_id}. The name is ignored when creating a datasource. */
		name: FormControl<string | null | undefined>,

		/** Can a user request to get thumbnail URI for Items indexed in this data source. */
		returnThumbnailUrls: FormControl<boolean | null | undefined>,

		/** A short name or alias for the source. This value will be used to match the 'source' operator. For example, if the short name is *<value>* then queries like *source:<value>* will only return results for this source. The value must be unique across all datasources. The value must only contain alphanumeric characters (a-zA-Z0-9). The value cannot start with 'google' and cannot be one of the following: mail, gmail, docs, drive, groups, sites, calendar, hangouts, gplus, keep, people, teams. Its maximum length is 32 characters. */
		shortName: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceFormGroup() {
		return new FormGroup<DataSourceFormProperties>({
			disableModifications: new FormControl<boolean | null | undefined>(undefined),
			disableServing: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			returnThumbnailUrls: new FormControl<boolean | null | undefined>(undefined),
			shortName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GSuitePrincipal {

		/** This principal represents all users of the Google Workspace domain of the customer. */
		gsuiteDomain?: boolean | null;

		/** This principal references a Google Workspace group name. */
		gsuiteGroupEmail?: string | null;

		/** This principal references a Google Workspace user account. */
		gsuiteUserEmail?: string | null;
	}
	export interface GSuitePrincipalFormProperties {

		/** This principal represents all users of the Google Workspace domain of the customer. */
		gsuiteDomain: FormControl<boolean | null | undefined>,

		/** This principal references a Google Workspace group name. */
		gsuiteGroupEmail: FormControl<string | null | undefined>,

		/** This principal references a Google Workspace user account. */
		gsuiteUserEmail: FormControl<string | null | undefined>,
	}
	export function CreateGSuitePrincipalFormGroup() {
		return new FormGroup<GSuitePrincipalFormProperties>({
			gsuiteDomain: new FormControl<boolean | null | undefined>(undefined),
			gsuiteGroupEmail: new FormControl<string | null | undefined>(undefined),
			gsuiteUserEmail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Aggregation of items by status code as of the specified date. */
	export interface DataSourceIndexStats {

		/** Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999. */
		date?: Date;

		/** Number of items aggregrated by status code. */
		itemCountByStatus?: Array<ItemCountByStatus>;
	}

	/** Aggregation of items by status code as of the specified date. */
	export interface DataSourceIndexStatsFormProperties {
	}
	export function CreateDataSourceIndexStatsFormGroup() {
		return new FormGroup<DataSourceIndexStatsFormProperties>({
		});

	}


	/** Restriction on Datasource. */
	export interface DataSourceRestriction {

		/** Filter options restricting the results. If multiple filters are present, they are grouped by object type before joining. Filters with the same object type are joined conjunctively, then the resulting expressions are joined disjunctively. The maximum number of elements is 20. NOTE: Suggest API supports only few filters at the moment: "objecttype", "type" and "mimetype". For now, schema specific filters cannot be used to filter suggestions. */
		filterOptions?: Array<FilterOptions>;

		/** Defines sources for the suggest/search APIs. */
		source?: Source;
	}

	/** Restriction on Datasource. */
	export interface DataSourceRestrictionFormProperties {
	}
	export function CreateDataSourceRestrictionFormGroup() {
		return new FormGroup<DataSourceRestrictionFormProperties>({
		});

	}


	/** Filter options to be applied on query. */
	export interface FilterOptions {

		/** A generic way of expressing filters in a query, which supports two approaches: **1. Setting a ValueFilter.** The name must match an operator_name defined in the schema for your data source. **2. Setting a CompositeFilter.** The filters are evaluated using the logical operator. The top-level operators can only be either an AND or a NOT. AND can appear only at the top-most level. OR can appear only under a top-level AND. */
		filter?: Filter;

		/** If object_type is set, only objects of that type are returned. This should correspond to the name of the object that was registered within the definition of schema. The maximum length is 256 characters. */
		objectType?: string | null;
	}

	/** Filter options to be applied on query. */
	export interface FilterOptionsFormProperties {

		/** If object_type is set, only objects of that type are returned. This should correspond to the name of the object that was registered within the definition of schema. The maximum length is 256 characters. */
		objectType: FormControl<string | null | undefined>,
	}
	export function CreateFilterOptionsFormGroup() {
		return new FormGroup<FilterOptionsFormProperties>({
			objectType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines sources for the suggest/search APIs. */
	export interface Source {

		/** Source name for content indexed by the Indexing API. */
		name?: string | null;

		/** Predefined content source for Google Apps. */
		predefinedSource?: SourcePredefinedSource | null;
	}

	/** Defines sources for the suggest/search APIs. */
	export interface SourceFormProperties {

		/** Source name for content indexed by the Indexing API. */
		name: FormControl<string | null | undefined>,

		/** Predefined content source for Google Apps. */
		predefinedSource: FormControl<SourcePredefinedSource | null | undefined>,
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			predefinedSource: new FormControl<SourcePredefinedSource | null | undefined>(undefined),
		});

	}

	export enum SourcePredefinedSource { NONE = 'NONE', QUERY_HISTORY = 'QUERY_HISTORY', PERSON = 'PERSON', GOOGLE_DRIVE = 'GOOGLE_DRIVE', GOOGLE_GMAIL = 'GOOGLE_GMAIL', GOOGLE_SITES = 'GOOGLE_SITES', GOOGLE_GROUPS = 'GOOGLE_GROUPS', GOOGLE_CALENDAR = 'GOOGLE_CALENDAR', GOOGLE_KEEP = 'GOOGLE_KEEP' }


	/** Optional. Provides a search operator for date properties. Search operators let users restrict the query to specific fields relevant to the type of item being searched. */
	export interface DateOperatorOptions {

		/** Indicates the operator name required in the query in order to isolate the date property using the greater-than operator. For example, if greaterThanOperatorName is *closedafter* and the property's name is *closeDate*, then queries like *closedafter:<value>* show results only where the value of the property named *closeDate* is later than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		greaterThanOperatorName?: string | null;

		/** Indicates the operator name required in the query in order to isolate the date property using the less-than operator. For example, if lessThanOperatorName is *closedbefore* and the property's name is *closeDate*, then queries like *closedbefore:<value>* show results only where the value of the property named *closeDate* is earlier than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		lessThanOperatorName?: string | null;

		/** Indicates the actual string required in the query in order to isolate the date property. For example, suppose an issue tracking schema object has a property named *closeDate* that specifies an operator with an operatorName of *closedon*. For searches on that data, queries like *closedon:<value>* show results only where the value of the *closeDate* property matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any String properties or text within the content field for the indexed datasource. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		operatorName?: string | null;
	}

	/** Optional. Provides a search operator for date properties. Search operators let users restrict the query to specific fields relevant to the type of item being searched. */
	export interface DateOperatorOptionsFormProperties {

		/** Indicates the operator name required in the query in order to isolate the date property using the greater-than operator. For example, if greaterThanOperatorName is *closedafter* and the property's name is *closeDate*, then queries like *closedafter:<value>* show results only where the value of the property named *closeDate* is later than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		greaterThanOperatorName: FormControl<string | null | undefined>,

		/** Indicates the operator name required in the query in order to isolate the date property using the less-than operator. For example, if lessThanOperatorName is *closedbefore* and the property's name is *closeDate*, then queries like *closedbefore:<value>* show results only where the value of the property named *closeDate* is earlier than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		lessThanOperatorName: FormControl<string | null | undefined>,

		/** Indicates the actual string required in the query in order to isolate the date property. For example, suppose an issue tracking schema object has a property named *closeDate* that specifies an operator with an operatorName of *closedon*. For searches on that data, queries like *closedon:<value>* show results only where the value of the *closeDate* property matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any String properties or text within the content field for the indexed datasource. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		operatorName: FormControl<string | null | undefined>,
	}
	export function CreateDateOperatorOptionsFormGroup() {
		return new FormGroup<DateOperatorOptionsFormProperties>({
			greaterThanOperatorName: new FormControl<string | null | undefined>(undefined),
			lessThanOperatorName: new FormControl<string | null | undefined>(undefined),
			operatorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The options for date properties. */
	export interface DatePropertyOptions {

		/** Optional. Provides a search operator for date properties. Search operators let users restrict the query to specific fields relevant to the type of item being searched. */
		operatorOptions?: DateOperatorOptions;
	}

	/** The options for date properties. */
	export interface DatePropertyOptionsFormProperties {
	}
	export function CreateDatePropertyOptionsFormGroup() {
		return new FormGroup<DatePropertyOptionsFormProperties>({
		});

	}


	/** List of date values. */
	export interface DateValues {
		values?: Array<Date>;
	}

	/** List of date values. */
	export interface DateValuesFormProperties {
	}
	export function CreateDateValuesFormGroup() {
		return new FormGroup<DateValuesFormProperties>({
		});

	}


	/** Shared request debug options for all cloudsearch RPC methods. */
	export interface DebugOptions {

		/** If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. */
		enableDebugging?: boolean | null;
	}

	/** Shared request debug options for all cloudsearch RPC methods. */
	export interface DebugOptionsFormProperties {

		/** If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. */
		enableDebugging: FormControl<boolean | null | undefined>,
	}
	export function CreateDebugOptionsFormGroup() {
		return new FormGroup<DebugOptionsFormProperties>({
			enableDebugging: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteQueueItemsRequest {

		/** The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} */
		connectorName?: string | null;

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions;

		/** The name of a queue to delete items from. */
		queue?: string | null;
	}
	export interface DeleteQueueItemsRequestFormProperties {

		/** The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} */
		connectorName: FormControl<string | null | undefined>,

		/** The name of a queue to delete items from. */
		queue: FormControl<string | null | undefined>,
	}
	export function CreateDeleteQueueItemsRequestFormGroup() {
		return new FormGroup<DeleteQueueItemsRequestFormProperties>({
			connectorName: new FormControl<string | null | undefined>(undefined),
			queue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A reference to a top-level property within the object that should be displayed in search results. The values of the chosen properties is displayed in the search results along with the display label for that property if one is specified. If a display label is not specified, only the values is shown. */
	export interface DisplayedProperty {

		/** The name of the top-level property as defined in a property definition for the object. If the name is not a defined property in the schema, an error is given when attempting to update the schema. */
		propertyName?: string | null;
	}

	/** A reference to a top-level property within the object that should be displayed in search results. The values of the chosen properties is displayed in the search results along with the display label for that property if one is specified. If a display label is not specified, only the values is shown. */
	export interface DisplayedPropertyFormProperties {

		/** The name of the top-level property as defined in a property definition for the object. If the name is not a defined property in the schema, an error is given when attempting to update the schema. */
		propertyName: FormControl<string | null | undefined>,
	}
	export function CreateDisplayedPropertyFormGroup() {
		return new FormGroup<DisplayedPropertyFormProperties>({
			propertyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used to provide a search operator for double properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. */
	export interface DoubleOperatorOptions {

		/** Indicates the operator name required in the query in order to use the double property in sorting or as a facet. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		operatorName?: string | null;
	}

	/** Used to provide a search operator for double properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. */
	export interface DoubleOperatorOptionsFormProperties {

		/** Indicates the operator name required in the query in order to use the double property in sorting or as a facet. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		operatorName: FormControl<string | null | undefined>,
	}
	export function CreateDoubleOperatorOptionsFormGroup() {
		return new FormGroup<DoubleOperatorOptionsFormProperties>({
			operatorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The options for double properties. */
	export interface DoublePropertyOptions {

		/** Used to provide a search operator for double properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. */
		operatorOptions?: DoubleOperatorOptions;
	}

	/** The options for double properties. */
	export interface DoublePropertyOptionsFormProperties {
	}
	export function CreateDoublePropertyOptionsFormGroup() {
		return new FormGroup<DoublePropertyOptionsFormProperties>({
		});

	}


	/** List of double values. */
	export interface DoubleValues {
		values?: Array<number>;
	}

	/** List of double values. */
	export interface DoubleValuesFormProperties {
	}
	export function CreateDoubleValuesFormGroup() {
		return new FormGroup<DoubleValuesFormProperties>({
		});

	}


	/** Drive follow-up search restricts (e.g. "followup:suggestions"). */
	export interface DriveFollowUpRestrict {
		type?: DriveFollowUpRestrictType | null;
	}

	/** Drive follow-up search restricts (e.g. "followup:suggestions"). */
	export interface DriveFollowUpRestrictFormProperties {
		type: FormControl<DriveFollowUpRestrictType | null | undefined>,
	}
	export function CreateDriveFollowUpRestrictFormGroup() {
		return new FormGroup<DriveFollowUpRestrictFormProperties>({
			type: new FormControl<DriveFollowUpRestrictType | null | undefined>(undefined),
		});

	}

	export enum DriveFollowUpRestrictType { UNSPECIFIED = 'UNSPECIFIED', FOLLOWUP_SUGGESTIONS = 'FOLLOWUP_SUGGESTIONS', FOLLOWUP_ACTION_ITEMS = 'FOLLOWUP_ACTION_ITEMS' }


	/** Drive location search restricts (e.g. "is:starred"). */
	export interface DriveLocationRestrict {
		type?: DriveLocationRestrictType | null;
	}

	/** Drive location search restricts (e.g. "is:starred"). */
	export interface DriveLocationRestrictFormProperties {
		type: FormControl<DriveLocationRestrictType | null | undefined>,
	}
	export function CreateDriveLocationRestrictFormGroup() {
		return new FormGroup<DriveLocationRestrictFormProperties>({
			type: new FormControl<DriveLocationRestrictType | null | undefined>(undefined),
		});

	}

	export enum DriveLocationRestrictType { UNSPECIFIED = 'UNSPECIFIED', TRASHED = 'TRASHED', STARRED = 'STARRED' }


	/** Drive mime-type search restricts (e.g. "type:pdf"). */
	export interface DriveMimeTypeRestrict {
		type?: DriveMimeTypeRestrictType | null;
	}

	/** Drive mime-type search restricts (e.g. "type:pdf"). */
	export interface DriveMimeTypeRestrictFormProperties {
		type: FormControl<DriveMimeTypeRestrictType | null | undefined>,
	}
	export function CreateDriveMimeTypeRestrictFormGroup() {
		return new FormGroup<DriveMimeTypeRestrictFormProperties>({
			type: new FormControl<DriveMimeTypeRestrictType | null | undefined>(undefined),
		});

	}

	export enum DriveMimeTypeRestrictType { UNSPECIFIED = 'UNSPECIFIED', PDF = 'PDF', DOCUMENT = 'DOCUMENT', PRESENTATION = 'PRESENTATION', SPREADSHEET = 'SPREADSHEET', FORM = 'FORM', DRAWING = 'DRAWING', SCRIPT = 'SCRIPT', MAP = 'MAP', IMAGE = 'IMAGE', AUDIO = 'AUDIO', VIDEO = 'VIDEO', FOLDER = 'FOLDER', ARCHIVE = 'ARCHIVE', SITE = 'SITE' }


	/** The time span search restrict (e.g. "after:2017-09-11 before:2017-09-12"). */
	export interface DriveTimeSpanRestrict {
		type?: DriveTimeSpanRestrictType | null;
	}

	/** The time span search restrict (e.g. "after:2017-09-11 before:2017-09-12"). */
	export interface DriveTimeSpanRestrictFormProperties {
		type: FormControl<DriveTimeSpanRestrictType | null | undefined>,
	}
	export function CreateDriveTimeSpanRestrictFormGroup() {
		return new FormGroup<DriveTimeSpanRestrictFormProperties>({
			type: new FormControl<DriveTimeSpanRestrictType | null | undefined>(undefined),
		});

	}

	export enum DriveTimeSpanRestrictType { UNSPECIFIED = 'UNSPECIFIED', TODAY = 'TODAY', YESTERDAY = 'YESTERDAY', LAST_7_DAYS = 'LAST_7_DAYS', LAST_30_DAYS = 'LAST_30_DAYS', LAST_90_DAYS = 'LAST_90_DAYS' }


	/** A person's email address. */
	export interface EmailAddress {

		/** If the value of type is custom, this property contains the custom type string. */
		customType?: string | null;

		/** The email address. */
		emailAddress?: string | null;

		/** The URL to send email. */
		emailUrl?: string | null;

		/** Indicates if this is the user's primary email. Only one entry can be marked as primary. */
		primary?: boolean | null;

		/** The type of the email account. Acceptable values are: "custom", "home", "other", "work". */
		type?: string | null;
	}

	/** A person's email address. */
	export interface EmailAddressFormProperties {

		/** If the value of type is custom, this property contains the custom type string. */
		customType: FormControl<string | null | undefined>,

		/** The email address. */
		emailAddress: FormControl<string | null | undefined>,

		/** The URL to send email. */
		emailUrl: FormControl<string | null | undefined>,

		/** Indicates if this is the user's primary email. Only one entry can be marked as primary. */
		primary: FormControl<boolean | null | undefined>,

		/** The type of the email account. Acceptable values are: "custom", "home", "other", "work". */
		type: FormControl<string | null | undefined>,
	}
	export function CreateEmailAddressFormGroup() {
		return new FormGroup<EmailAddressFormProperties>({
			customType: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			emailUrl: new FormControl<string | null | undefined>(undefined),
			primary: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterpriseTopazFrontendTeamsLink {

		/** The identifying link type */
		type?: string | null;

		/** Message containing a string that is safe to use in URL contexts in DOM APIs and HTML documents, where the URL context does not refer to a resource that loads code. */
		url?: SafeUrlProto;
	}
	export interface EnterpriseTopazFrontendTeamsLinkFormProperties {

		/** The identifying link type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseTopazFrontendTeamsLinkFormGroup() {
		return new FormGroup<EnterpriseTopazFrontendTeamsLinkFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message containing a string that is safe to use in URL contexts in DOM APIs and HTML documents, where the URL context does not refer to a resource that loads code. */
	export interface SafeUrlProto {

		/** IMPORTANT: Never set or read this field, even from tests, it is private. See documentation at the top of .proto file for programming language packages with which to create or read this message. */
		privateDoNotAccessOrElseSafeUrlWrappedValue?: string | null;
	}

	/** Message containing a string that is safe to use in URL contexts in DOM APIs and HTML documents, where the URL context does not refer to a resource that loads code. */
	export interface SafeUrlProtoFormProperties {

		/** IMPORTANT: Never set or read this field, even from tests, it is private. See documentation at the top of .proto file for programming language packages with which to create or read this message. */
		privateDoNotAccessOrElseSafeUrlWrappedValue: FormControl<string | null | undefined>,
	}
	export function CreateSafeUrlProtoFormGroup() {
		return new FormGroup<SafeUrlProtoFormProperties>({
			privateDoNotAccessOrElseSafeUrlWrappedValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterpriseTopazFrontendTeamsPersonCorePhoneNumber {

		/** Phone number in no particular format (as comes from the Focus profile). */
		phoneNumber?: string | null;

		/** Message containing a string that is safe to use in URL contexts in DOM APIs and HTML documents, where the URL context does not refer to a resource that loads code. */
		phoneUrl?: SafeUrlProto;
		type?: EnterpriseTopazFrontendTeamsPersonCorePhoneNumberType | null;
	}
	export interface EnterpriseTopazFrontendTeamsPersonCorePhoneNumberFormProperties {

		/** Phone number in no particular format (as comes from the Focus profile). */
		phoneNumber: FormControl<string | null | undefined>,
		type: FormControl<EnterpriseTopazFrontendTeamsPersonCorePhoneNumberType | null | undefined>,
	}
	export function CreateEnterpriseTopazFrontendTeamsPersonCorePhoneNumberFormGroup() {
		return new FormGroup<EnterpriseTopazFrontendTeamsPersonCorePhoneNumberFormProperties>({
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EnterpriseTopazFrontendTeamsPersonCorePhoneNumberType | null | undefined>(undefined),
		});

	}

	export enum EnterpriseTopazFrontendTeamsPersonCorePhoneNumberType { UNKNOWN = 'UNKNOWN', MOBILE = 'MOBILE', OFFICE = 'OFFICE', OTHER = 'OTHER' }


	/** An AgendaEntry, e.g., a Calendar Event. */
	export interface EnterpriseTopazSidekickAgendaEntry {

		/** URL of the agenda item. */
		agendaItemUrl?: string | null;

		/** The chronology from the present. */
		chronology?: EnterpriseTopazSidekickAgendaEntryChronology | null;

		/** Person. */
		creator?: EnterpriseTopazSidekickPerson;

		/** Attendance status for the current user making the request. This is a convenience data member in order to avoid figuring out the same by iterating the invitee list above on the caller side. */
		currentUserAttendingStatus?: EnterpriseTopazSidekickPersonAttendingStatus | null;

		/** Description of the agenda item (i.e., typically, summary in calendar event). */
		description?: string | null;

		/** Items related to the current AgendaEntry. E.g., related drive/mail/groups documents. */
		document?: Array<EnterpriseTopazSidekickCommonDocument>;

		/** End date "Friday, August 26" in the user's timezone. */
		endDate?: string | null;

		/** End time (HH:mm) in the user's timezone. */
		endTime?: string | null;

		/** End time in milliseconds */
		endTimeMs?: string | null;

		/** Event id provided by Calendar API. */
		eventId?: string | null;

		/** Whether the guests can invite other guests. */
		guestsCanInviteOthers?: boolean | null;

		/** Whether the guests can modify the event. */
		guestsCanModify?: boolean | null;

		/** Whether the guests of the event can be seen. If false, the user is going to be reported as the only attendee to the meeting, even though there may be more attendees. */
		guestsCanSeeGuests?: boolean | null;

		/** Hangout meeting identifier. */
		hangoutId?: string | null;

		/** Absolute URL for the Hangout meeting. */
		hangoutUrl?: string | null;

		/** People attending the meeting. */
		invitee?: Array<EnterpriseTopazSidekickPerson>;

		/** Whether the entry lasts all day. */
		isAllDay?: boolean | null;

		/** Last time the event was modified. */
		lastModificationTimeMs?: string | null;

		/** Agenda item location. */
		location?: string | null;

		/** Whether this should be notified to the user. */
		notifyToUser?: boolean | null;

		/** Whether guest list is not returned because number of attendees is too large. */
		otherAttendeesExcluded?: boolean | null;

		/** Whether the requester is the owner of the agenda entry. */
		requesterIsOwner?: boolean | null;

		/** Whether the details of this entry should be displayed to the user. */
		showFullEventDetailsToUse?: boolean | null;

		/** Start date "Friday, August 26" in the user's timezone. */
		startDate?: string | null;

		/** Start time (HH:mm) in the user's timezone. */
		startTime?: string | null;

		/** Start time in milliseconds. */
		startTimeMs?: string | null;

		/** User's calendar timezone; */
		timeZone?: string | null;

		/** Title of the agenda item. */
		title?: string | null;
	}

	/** An AgendaEntry, e.g., a Calendar Event. */
	export interface EnterpriseTopazSidekickAgendaEntryFormProperties {

		/** URL of the agenda item. */
		agendaItemUrl: FormControl<string | null | undefined>,

		/** The chronology from the present. */
		chronology: FormControl<EnterpriseTopazSidekickAgendaEntryChronology | null | undefined>,

		/** Attendance status for the current user making the request. This is a convenience data member in order to avoid figuring out the same by iterating the invitee list above on the caller side. */
		currentUserAttendingStatus: FormControl<EnterpriseTopazSidekickPersonAttendingStatus | null | undefined>,

		/** Description of the agenda item (i.e., typically, summary in calendar event). */
		description: FormControl<string | null | undefined>,

		/** End date "Friday, August 26" in the user's timezone. */
		endDate: FormControl<string | null | undefined>,

		/** End time (HH:mm) in the user's timezone. */
		endTime: FormControl<string | null | undefined>,

		/** End time in milliseconds */
		endTimeMs: FormControl<string | null | undefined>,

		/** Event id provided by Calendar API. */
		eventId: FormControl<string | null | undefined>,

		/** Whether the guests can invite other guests. */
		guestsCanInviteOthers: FormControl<boolean | null | undefined>,

		/** Whether the guests can modify the event. */
		guestsCanModify: FormControl<boolean | null | undefined>,

		/** Whether the guests of the event can be seen. If false, the user is going to be reported as the only attendee to the meeting, even though there may be more attendees. */
		guestsCanSeeGuests: FormControl<boolean | null | undefined>,

		/** Hangout meeting identifier. */
		hangoutId: FormControl<string | null | undefined>,

		/** Absolute URL for the Hangout meeting. */
		hangoutUrl: FormControl<string | null | undefined>,

		/** Whether the entry lasts all day. */
		isAllDay: FormControl<boolean | null | undefined>,

		/** Last time the event was modified. */
		lastModificationTimeMs: FormControl<string | null | undefined>,

		/** Agenda item location. */
		location: FormControl<string | null | undefined>,

		/** Whether this should be notified to the user. */
		notifyToUser: FormControl<boolean | null | undefined>,

		/** Whether guest list is not returned because number of attendees is too large. */
		otherAttendeesExcluded: FormControl<boolean | null | undefined>,

		/** Whether the requester is the owner of the agenda entry. */
		requesterIsOwner: FormControl<boolean | null | undefined>,

		/** Whether the details of this entry should be displayed to the user. */
		showFullEventDetailsToUse: FormControl<boolean | null | undefined>,

		/** Start date "Friday, August 26" in the user's timezone. */
		startDate: FormControl<string | null | undefined>,

		/** Start time (HH:mm) in the user's timezone. */
		startTime: FormControl<string | null | undefined>,

		/** Start time in milliseconds. */
		startTimeMs: FormControl<string | null | undefined>,

		/** User's calendar timezone; */
		timeZone: FormControl<string | null | undefined>,

		/** Title of the agenda item. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickAgendaEntryFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickAgendaEntryFormProperties>({
			agendaItemUrl: new FormControl<string | null | undefined>(undefined),
			chronology: new FormControl<EnterpriseTopazSidekickAgendaEntryChronology | null | undefined>(undefined),
			currentUserAttendingStatus: new FormControl<EnterpriseTopazSidekickPersonAttendingStatus | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			endTimeMs: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			guestsCanInviteOthers: new FormControl<boolean | null | undefined>(undefined),
			guestsCanModify: new FormControl<boolean | null | undefined>(undefined),
			guestsCanSeeGuests: new FormControl<boolean | null | undefined>(undefined),
			hangoutId: new FormControl<string | null | undefined>(undefined),
			hangoutUrl: new FormControl<string | null | undefined>(undefined),
			isAllDay: new FormControl<boolean | null | undefined>(undefined),
			lastModificationTimeMs: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			notifyToUser: new FormControl<boolean | null | undefined>(undefined),
			otherAttendeesExcluded: new FormControl<boolean | null | undefined>(undefined),
			requesterIsOwner: new FormControl<boolean | null | undefined>(undefined),
			showFullEventDetailsToUse: new FormControl<boolean | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			startTimeMs: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnterpriseTopazSidekickAgendaEntryChronology { STALE = 'STALE', ALL_DAY = 'ALL_DAY', PAST = 'PAST', RECENTLY_PAST = 'RECENTLY_PAST', PRESENT = 'PRESENT', NEAR_FUTURE = 'NEAR_FUTURE', FUTURE = 'FUTURE' }


	/** Person. */
	export interface EnterpriseTopazSidekickPerson {

		/** The level of affinity this person has with the requesting user. */
		affinityLevel?: EnterpriseTopazSidekickPersonAffinityLevel | null;

		/** Attendance status of the person when included in a meeting event. */
		attendingStatus?: EnterpriseTopazSidekickPersonAttendingStatus | null;

		/** Email. */
		email?: string | null;

		/** Gaia id. */
		gaiaId?: string | null;

		/** Whether the invitee is a group. */
		isGroup?: boolean | null;

		/** Name. */
		name?: string | null;

		/** Obfuscated Gaia id. */
		obfuscatedGaiaId?: string | null;

		/** Absolute URL to the profile photo of the person. */
		photoUrl?: string | null;
	}

	/** Person. */
	export interface EnterpriseTopazSidekickPersonFormProperties {

		/** The level of affinity this person has with the requesting user. */
		affinityLevel: FormControl<EnterpriseTopazSidekickPersonAffinityLevel | null | undefined>,

		/** Attendance status of the person when included in a meeting event. */
		attendingStatus: FormControl<EnterpriseTopazSidekickPersonAttendingStatus | null | undefined>,

		/** Email. */
		email: FormControl<string | null | undefined>,

		/** Gaia id. */
		gaiaId: FormControl<string | null | undefined>,

		/** Whether the invitee is a group. */
		isGroup: FormControl<boolean | null | undefined>,

		/** Name. */
		name: FormControl<string | null | undefined>,

		/** Obfuscated Gaia id. */
		obfuscatedGaiaId: FormControl<string | null | undefined>,

		/** Absolute URL to the profile photo of the person. */
		photoUrl: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickPersonFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickPersonFormProperties>({
			affinityLevel: new FormControl<EnterpriseTopazSidekickPersonAffinityLevel | null | undefined>(undefined),
			attendingStatus: new FormControl<EnterpriseTopazSidekickPersonAttendingStatus | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			gaiaId: new FormControl<string | null | undefined>(undefined),
			isGroup: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			obfuscatedGaiaId: new FormControl<string | null | undefined>(undefined),
			photoUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnterpriseTopazSidekickPersonAffinityLevel { UNKNOWN = 'UNKNOWN', LOW = 'LOW', MEDIUM = 'MEDIUM', HIGH = 'HIGH' }

	export enum EnterpriseTopazSidekickPersonAttendingStatus { AWAITING = 'AWAITING', YES = 'YES', NO = 'NO', MAYBE = 'MAYBE' }


	/** Representation of a document. NEXT_TAG: 15 */
	export interface EnterpriseTopazSidekickCommonDocument {

		/** Access type, i.e., whether the user has access to the document or not. */
		accessType?: EnterpriseTopazSidekickCommonDocumentAccessType | null;

		/** Container of debugging information in all object levels. Extend as needed. */
		debugInfo?: EnterpriseTopazSidekickCommonDebugInfo;

		/** Document id. */
		documentId?: string | null;

		/** Meta data for drive documents. */
		driveDocumentMetadata?: EnterpriseTopazSidekickCommonDocumentDriveDocumentMetadata;

		/** Generic Drive-based url in the format of drive.google.com/open to be used for deeplink */
		genericUrl?: string | null;

		/** Justification of why we are reporting the document. */
		justification?: EnterpriseTopazSidekickCommonDocumentJustification;

		/** MIME type */
		mimeType?: string | null;

		/** Document provenance. */
		provenance?: EnterpriseTopazSidekickCommonDocumentProvenance | null;

		/** Justification of why this document is being returned. */
		reason?: EnterpriseTopazSidekickCommonDocumentJustificationReason | null;

		/** A sampling of the text from the document. */
		snippet?: string | null;

		/** Thumbnail URL. */
		thumbnailUrl?: string | null;

		/** Title of the document. */
		title?: string | null;

		/** Type of the document. */
		type?: EnterpriseTopazSidekickCommonDocumentType | null;

		/** Absolute URL of the document. */
		url?: string | null;
	}

	/** Representation of a document. NEXT_TAG: 15 */
	export interface EnterpriseTopazSidekickCommonDocumentFormProperties {

		/** Access type, i.e., whether the user has access to the document or not. */
		accessType: FormControl<EnterpriseTopazSidekickCommonDocumentAccessType | null | undefined>,

		/** Document id. */
		documentId: FormControl<string | null | undefined>,

		/** Generic Drive-based url in the format of drive.google.com/open to be used for deeplink */
		genericUrl: FormControl<string | null | undefined>,

		/** MIME type */
		mimeType: FormControl<string | null | undefined>,

		/** Document provenance. */
		provenance: FormControl<EnterpriseTopazSidekickCommonDocumentProvenance | null | undefined>,

		/** Justification of why this document is being returned. */
		reason: FormControl<EnterpriseTopazSidekickCommonDocumentJustificationReason | null | undefined>,

		/** A sampling of the text from the document. */
		snippet: FormControl<string | null | undefined>,

		/** Thumbnail URL. */
		thumbnailUrl: FormControl<string | null | undefined>,

		/** Title of the document. */
		title: FormControl<string | null | undefined>,

		/** Type of the document. */
		type: FormControl<EnterpriseTopazSidekickCommonDocumentType | null | undefined>,

		/** Absolute URL of the document. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickCommonDocumentFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickCommonDocumentFormProperties>({
			accessType: new FormControl<EnterpriseTopazSidekickCommonDocumentAccessType | null | undefined>(undefined),
			documentId: new FormControl<string | null | undefined>(undefined),
			genericUrl: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			provenance: new FormControl<EnterpriseTopazSidekickCommonDocumentProvenance | null | undefined>(undefined),
			reason: new FormControl<EnterpriseTopazSidekickCommonDocumentJustificationReason | null | undefined>(undefined),
			snippet: new FormControl<string | null | undefined>(undefined),
			thumbnailUrl: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EnterpriseTopazSidekickCommonDocumentType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnterpriseTopazSidekickCommonDocumentAccessType { UNKNOWN_ACCESS = 'UNKNOWN_ACCESS', ALLOWED = 'ALLOWED', NOT_ALLOWED = 'NOT_ALLOWED' }


	/** Container of debugging information in all object levels. Extend as needed. */
	export interface EnterpriseTopazSidekickCommonDebugInfo {

		/** Debug message. */
		message?: string | null;
	}

	/** Container of debugging information in all object levels. Extend as needed. */
	export interface EnterpriseTopazSidekickCommonDebugInfoFormProperties {

		/** Debug message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickCommonDebugInfoFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickCommonDebugInfoFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Meta data for drive documents. */
	export interface EnterpriseTopazSidekickCommonDocumentDriveDocumentMetadata {

		/** The drive document cosmo id. Client could use the id to build a URL to open a document. Please use Document.document_id. */
		documentId?: string | null;

		/** Additional field to identify whether a document is private since scope set to LIMITED can mean both that the doc is private or that it's shared with others. is_private indicates whether the doc is not shared with anyone except for the owner. */
		isPrivate?: boolean | null;

		/** Timestamp of the most recent comment added to the document in milliseconds since epoch. */
		lastCommentTimeMs?: string | null;

		/** Timestamp of the most recent edit from the current user in milliseconds since epoch. */
		lastEditTimeMs?: string | null;

		/** Last modification time of the document (independent of the user that modified it). */
		lastModificationTimeMillis?: string | null;

		/** Timestamp of the last updated time of the document in milliseconds since epoch. */
		lastUpdatedTimeMs?: string | null;

		/** Timestamp of the most recent view from the current user in milliseconds since epoch. */
		lastViewTimeMs?: string | null;

		/** Common representation of a person. */
		owner?: EnterpriseTopazSidekickCommonPerson;

		/** ACL scope of the document which identifies the sharing status of the doc (e.g., limited, shared with link, team drive, ...). */
		scope?: EnterpriseTopazSidekickCommonDocumentDriveDocumentMetadataScope | null;
	}

	/** Meta data for drive documents. */
	export interface EnterpriseTopazSidekickCommonDocumentDriveDocumentMetadataFormProperties {

		/** The drive document cosmo id. Client could use the id to build a URL to open a document. Please use Document.document_id. */
		documentId: FormControl<string | null | undefined>,

		/** Additional field to identify whether a document is private since scope set to LIMITED can mean both that the doc is private or that it's shared with others. is_private indicates whether the doc is not shared with anyone except for the owner. */
		isPrivate: FormControl<boolean | null | undefined>,

		/** Timestamp of the most recent comment added to the document in milliseconds since epoch. */
		lastCommentTimeMs: FormControl<string | null | undefined>,

		/** Timestamp of the most recent edit from the current user in milliseconds since epoch. */
		lastEditTimeMs: FormControl<string | null | undefined>,

		/** Last modification time of the document (independent of the user that modified it). */
		lastModificationTimeMillis: FormControl<string | null | undefined>,

		/** Timestamp of the last updated time of the document in milliseconds since epoch. */
		lastUpdatedTimeMs: FormControl<string | null | undefined>,

		/** Timestamp of the most recent view from the current user in milliseconds since epoch. */
		lastViewTimeMs: FormControl<string | null | undefined>,

		/** ACL scope of the document which identifies the sharing status of the doc (e.g., limited, shared with link, team drive, ...). */
		scope: FormControl<EnterpriseTopazSidekickCommonDocumentDriveDocumentMetadataScope | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickCommonDocumentDriveDocumentMetadataFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickCommonDocumentDriveDocumentMetadataFormProperties>({
			documentId: new FormControl<string | null | undefined>(undefined),
			isPrivate: new FormControl<boolean | null | undefined>(undefined),
			lastCommentTimeMs: new FormControl<string | null | undefined>(undefined),
			lastEditTimeMs: new FormControl<string | null | undefined>(undefined),
			lastModificationTimeMillis: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTimeMs: new FormControl<string | null | undefined>(undefined),
			lastViewTimeMs: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<EnterpriseTopazSidekickCommonDocumentDriveDocumentMetadataScope | null | undefined>(undefined),
		});

	}


	/** Common representation of a person. */
	export interface EnterpriseTopazSidekickCommonPerson {
		birthday?: EnterpriseTopazSidekickCommonPersonBirthday;

		/** Cell phone number. */
		cellPhone?: string | null;

		/** The department the person works in (e.g. Engineering). */
		department?: string | null;

		/** Desk location (e.g. US-MTV-PR55-5-5B1I). */
		deskLocation?: string | null;

		/** Work desk phone number. */
		deskPhone?: string | null;

		/** The full name. */
		displayName?: string | null;

		/** Email. */
		email?: string | null;

		/** The last name. */
		familyName?: string | null;

		/** The fully formatted address (e.g. 1255 Pear Avenue, Mountain View 94043, United States). */
		fullAddress?: string | null;

		/** This field is deprecated. The obfuscated_id should be used instead. */
		gaiaId?: string | null;

		/** The first name. */
		givenName?: string | null;

		/** The person's job title (e.g. Software Engineer). */
		jobTitle?: string | null;

		/** Common representation of a person. */
		manager?: EnterpriseTopazSidekickCommonPerson;

		/** The obfuscated GAIA ID. */
		obfuscatedId?: string | null;

		/** The URL for the Focus profile picture. */
		photoUrl?: string | null;

		/** The street address (e.g. 1255 Pear Avenue). */
		streetAddress?: string | null;
	}

	/** Common representation of a person. */
	export interface EnterpriseTopazSidekickCommonPersonFormProperties {

		/** Cell phone number. */
		cellPhone: FormControl<string | null | undefined>,

		/** The department the person works in (e.g. Engineering). */
		department: FormControl<string | null | undefined>,

		/** Desk location (e.g. US-MTV-PR55-5-5B1I). */
		deskLocation: FormControl<string | null | undefined>,

		/** Work desk phone number. */
		deskPhone: FormControl<string | null | undefined>,

		/** The full name. */
		displayName: FormControl<string | null | undefined>,

		/** Email. */
		email: FormControl<string | null | undefined>,

		/** The last name. */
		familyName: FormControl<string | null | undefined>,

		/** The fully formatted address (e.g. 1255 Pear Avenue, Mountain View 94043, United States). */
		fullAddress: FormControl<string | null | undefined>,

		/** This field is deprecated. The obfuscated_id should be used instead. */
		gaiaId: FormControl<string | null | undefined>,

		/** The first name. */
		givenName: FormControl<string | null | undefined>,

		/** The person's job title (e.g. Software Engineer). */
		jobTitle: FormControl<string | null | undefined>,

		/** The obfuscated GAIA ID. */
		obfuscatedId: FormControl<string | null | undefined>,

		/** The URL for the Focus profile picture. */
		photoUrl: FormControl<string | null | undefined>,

		/** The street address (e.g. 1255 Pear Avenue). */
		streetAddress: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickCommonPersonFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickCommonPersonFormProperties>({
			cellPhone: new FormControl<string | null | undefined>(undefined),
			department: new FormControl<string | null | undefined>(undefined),
			deskLocation: new FormControl<string | null | undefined>(undefined),
			deskPhone: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			familyName: new FormControl<string | null | undefined>(undefined),
			fullAddress: new FormControl<string | null | undefined>(undefined),
			gaiaId: new FormControl<string | null | undefined>(undefined),
			givenName: new FormControl<string | null | undefined>(undefined),
			jobTitle: new FormControl<string | null | undefined>(undefined),
			obfuscatedId: new FormControl<string | null | undefined>(undefined),
			photoUrl: new FormControl<string | null | undefined>(undefined),
			streetAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterpriseTopazSidekickCommonPersonBirthday {

		/** Unstructured birthday. */
		value?: string | null;
	}
	export interface EnterpriseTopazSidekickCommonPersonBirthdayFormProperties {

		/** Unstructured birthday. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickCommonPersonBirthdayFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickCommonPersonBirthdayFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnterpriseTopazSidekickCommonDocumentDriveDocumentMetadataScope { UNKNOWN_DOCUMENT_SCOPE = 'UNKNOWN_DOCUMENT_SCOPE', LIMITED = 'LIMITED', DASHER_DOMAIN_WITH_LINK = 'DASHER_DOMAIN_WITH_LINK', DASHER_DOMAIN = 'DASHER_DOMAIN', PUBLIC_WITH_LINK = 'PUBLIC_WITH_LINK', PUBLIC = 'PUBLIC', TEAM_DRIVE = 'TEAM_DRIVE' }


	/** Justification of why we are reporting the document. */
	export interface EnterpriseTopazSidekickCommonDocumentJustification {

		/** A locale aware message that explains why this document was selected. */
		justification?: string | null;

		/** Reason on why the document is selected. Populate for trending documents. */
		reason?: EnterpriseTopazSidekickCommonDocumentJustificationReason | null;
	}

	/** Justification of why we are reporting the document. */
	export interface EnterpriseTopazSidekickCommonDocumentJustificationFormProperties {

		/** A locale aware message that explains why this document was selected. */
		justification: FormControl<string | null | undefined>,

		/** Reason on why the document is selected. Populate for trending documents. */
		reason: FormControl<EnterpriseTopazSidekickCommonDocumentJustificationReason | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickCommonDocumentJustificationFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickCommonDocumentJustificationFormProperties>({
			justification: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<EnterpriseTopazSidekickCommonDocumentJustificationReason | null | undefined>(undefined),
		});

	}

	export enum EnterpriseTopazSidekickCommonDocumentJustificationReason { UNKNOWN = 'UNKNOWN', TRENDING_IN_COLLABORATORS = 'TRENDING_IN_COLLABORATORS', TRENDING_IN_DOMAIN = 'TRENDING_IN_DOMAIN', FREQUENTLY_VIEWED = 'FREQUENTLY_VIEWED', FREQUENTLY_EDITED = 'FREQUENTLY_EDITED', NEW_UPDATES = 'NEW_UPDATES', NEW_COMMENTS = 'NEW_COMMENTS', EVENT_DESCRIPTION = 'EVENT_DESCRIPTION', EVENT_ATTACHMENT = 'EVENT_ATTACHMENT', EVENT_METADATA_ATTACHMENT = 'EVENT_METADATA_ATTACHMENT', MINED_DOCUMENT = 'MINED_DOCUMENT', NEW_MENTIONS = 'NEW_MENTIONS', NEW_SHARES = 'NEW_SHARES' }

	export enum EnterpriseTopazSidekickCommonDocumentProvenance { UNKNOWN_PROVENANCE = 'UNKNOWN_PROVENANCE', CALENDAR_DESCRIPTION = 'CALENDAR_DESCRIPTION', CALENDAR_ATTACHMENT = 'CALENDAR_ATTACHMENT', MINED = 'MINED', CALENDAR_ASSIST_ATTACHMENT = 'CALENDAR_ASSIST_ATTACHMENT' }

	export enum EnterpriseTopazSidekickCommonDocumentType { UNKNOWN = 'UNKNOWN', DOCUMENT = 'DOCUMENT', PRESENTATION = 'PRESENTATION', SPREADSHEET = 'SPREADSHEET', PDF = 'PDF', IMAGE = 'IMAGE', BINARY_BLOB = 'BINARY_BLOB', FUSION_TABLE = 'FUSION_TABLE', FOLDER = 'FOLDER', DRAWING = 'DRAWING', VIDEO = 'VIDEO', FORM = 'FORM', LINK_URL = 'LINK_URL', LINK_GO = 'LINK_GO', LINK_GOO_GL = 'LINK_GOO_GL', LINK_BIT_LY = 'LINK_BIT_LY', LINK_GMAIL = 'LINK_GMAIL', LINK_MAILTO = 'LINK_MAILTO', VIDEO_YOUTUBE = 'VIDEO_YOUTUBE', VIDEO_LIVE = 'VIDEO_LIVE', GROUPS = 'GROUPS', NEWS = 'NEWS', SITES = 'SITES', HANGOUT = 'HANGOUT', AUDIO = 'AUDIO', MS_WORD = 'MS_WORD', MS_POWERPOINT = 'MS_POWERPOINT', MS_EXCEL = 'MS_EXCEL', MS_OUTLOOK = 'MS_OUTLOOK' }

	export interface EnterpriseTopazSidekickAgendaGroupCardProto {
		agendaItem?: Array<EnterpriseTopazSidekickAgendaItem>;

		/** The context that resulted in the generation of the card. */
		context?: EnterpriseTopazSidekickAgendaGroupCardProtoContext;
		currentAgendaItem?: EnterpriseTopazSidekickAgendaItem;
	}
	export interface EnterpriseTopazSidekickAgendaGroupCardProtoFormProperties {
	}
	export function CreateEnterpriseTopazSidekickAgendaGroupCardProtoFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickAgendaGroupCardProtoFormProperties>({
		});

	}

	export interface EnterpriseTopazSidekickAgendaItem {

		/** Conflicting meetings card proto. */
		conflictedGroup?: EnterpriseTopazSidekickConflictingEventsCardProto;
		gapBefore?: EnterpriseTopazSidekickGap;

		/** An AgendaEntry, e.g., a Calendar Event. */
		meeting?: EnterpriseTopazSidekickAgendaEntry;
	}
	export interface EnterpriseTopazSidekickAgendaItemFormProperties {
	}
	export function CreateEnterpriseTopazSidekickAgendaItemFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickAgendaItemFormProperties>({
		});

	}


	/** Conflicting meetings card proto. */
	export interface EnterpriseTopazSidekickConflictingEventsCardProto {

		/** All the events that conflict with main_event. */
		conflictingEvent?: Array<EnterpriseTopazSidekickAgendaEntry>;

		/** An AgendaEntry, e.g., a Calendar Event. */
		mainEvent?: EnterpriseTopazSidekickAgendaEntry;
	}

	/** Conflicting meetings card proto. */
	export interface EnterpriseTopazSidekickConflictingEventsCardProtoFormProperties {
	}
	export function CreateEnterpriseTopazSidekickConflictingEventsCardProtoFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickConflictingEventsCardProtoFormProperties>({
		});

	}

	export interface EnterpriseTopazSidekickGap {

		/** Localized time string in the format: 1 hour 15 minutes */
		displayRemainingTime?: string | null;

		/** Localized time string in the format:(Locale CZ) 8:30 odp. */
		endTime?: string | null;
		endTimeMs?: string | null;
		remainingTime?: string | null;

		/** Localized time string in the format:(Locale CZ) 8:30 odp. */
		startTime?: string | null;
		startTimeMs?: string | null;
	}
	export interface EnterpriseTopazSidekickGapFormProperties {

		/** Localized time string in the format: 1 hour 15 minutes */
		displayRemainingTime: FormControl<string | null | undefined>,

		/** Localized time string in the format:(Locale CZ) 8:30 odp. */
		endTime: FormControl<string | null | undefined>,
		endTimeMs: FormControl<string | null | undefined>,
		remainingTime: FormControl<string | null | undefined>,

		/** Localized time string in the format:(Locale CZ) 8:30 odp. */
		startTime: FormControl<string | null | undefined>,
		startTimeMs: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickGapFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickGapFormProperties>({
			displayRemainingTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			endTimeMs: new FormControl<string | null | undefined>(undefined),
			remainingTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			startTimeMs: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The context that resulted in the generation of the card. */
	export interface EnterpriseTopazSidekickAgendaGroupCardProtoContext {

		/** User friendly free text that describes the context of the card (e.g. "Next meeting with Bob"). This is largely only applicable when the card is generated from a query. */
		context?: string | null;

		/** Localized free text that describes the dates represented by the card. Currently, the card will only represent a single day. */
		date?: string | null;

		/** Represents restrictions applied to the events requested in the user's query. */
		eventsRestrict?: EnterpriseTopazSidekickAgendaGroupCardProtoContextEventsRestrict | null;
	}

	/** The context that resulted in the generation of the card. */
	export interface EnterpriseTopazSidekickAgendaGroupCardProtoContextFormProperties {

		/** User friendly free text that describes the context of the card (e.g. "Next meeting with Bob"). This is largely only applicable when the card is generated from a query. */
		context: FormControl<string | null | undefined>,

		/** Localized free text that describes the dates represented by the card. Currently, the card will only represent a single day. */
		date: FormControl<string | null | undefined>,

		/** Represents restrictions applied to the events requested in the user's query. */
		eventsRestrict: FormControl<EnterpriseTopazSidekickAgendaGroupCardProtoContextEventsRestrict | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickAgendaGroupCardProtoContextFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickAgendaGroupCardProtoContextFormProperties>({
			context: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			eventsRestrict: new FormControl<EnterpriseTopazSidekickAgendaGroupCardProtoContextEventsRestrict | null | undefined>(undefined),
		});

	}

	export enum EnterpriseTopazSidekickAgendaGroupCardProtoContextEventsRestrict { NONE = 'NONE', NEXT_MEETING = 'NEXT_MEETING' }


	/** A list of answers represented as free text. */
	export interface EnterpriseTopazSidekickAnswerAnswerList {

		/** Answers that have a corresponding label. */
		labeledAnswer?: Array<EnterpriseTopazSidekickAnswerAnswerListLabeledAnswer>;

		/** Answer type. */
		type?: EnterpriseTopazSidekickAnswerAnswerListType | null;
	}

	/** A list of answers represented as free text. */
	export interface EnterpriseTopazSidekickAnswerAnswerListFormProperties {

		/** Answer type. */
		type: FormControl<EnterpriseTopazSidekickAnswerAnswerListType | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickAnswerAnswerListFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickAnswerAnswerListFormProperties>({
			type: new FormControl<EnterpriseTopazSidekickAnswerAnswerListType | null | undefined>(undefined),
		});

	}


	/** An answer with a corresponding label. */
	export interface EnterpriseTopazSidekickAnswerAnswerListLabeledAnswer {

		/** The free text answer. */
		answer?: string | null;

		/** A localized label for the answer (e.g. "Cell phone" vs "Desk phone"). */
		label?: string | null;
	}

	/** An answer with a corresponding label. */
	export interface EnterpriseTopazSidekickAnswerAnswerListLabeledAnswerFormProperties {

		/** The free text answer. */
		answer: FormControl<string | null | undefined>,

		/** A localized label for the answer (e.g. "Cell phone" vs "Desk phone"). */
		label: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickAnswerAnswerListLabeledAnswerFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickAnswerAnswerListLabeledAnswerFormProperties>({
			answer: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnterpriseTopazSidekickAnswerAnswerListType { UNKNOWN = 'UNKNOWN', PERSON_ADDRESS = 'PERSON_ADDRESS', PERSON_BIRTHDAY = 'PERSON_BIRTHDAY', PERSON_DEPARTMENT = 'PERSON_DEPARTMENT', PERSON_DESK_LOCATION = 'PERSON_DESK_LOCATION', PERSON_EMAIL = 'PERSON_EMAIL', PERSON_JOB_TITLE = 'PERSON_JOB_TITLE', PERSON_PHONE = 'PERSON_PHONE' }


	/** Contains a list of suggested queries. Allows the user to determine what natural language queries they can ask Cloud Search (e.g. "what can I search for?"). */
	export interface EnterpriseTopazSidekickAnswerSuggestedQueryAnswerCard {

		/** A list of queries to suggest. */
		suggestedQueryCategory?: Array<EnterpriseTopazSidekickAnswerSuggestedQueryCategory>;
	}

	/** Contains a list of suggested queries. Allows the user to determine what natural language queries they can ask Cloud Search (e.g. "what can I search for?"). */
	export interface EnterpriseTopazSidekickAnswerSuggestedQueryAnswerCardFormProperties {
	}
	export function CreateEnterpriseTopazSidekickAnswerSuggestedQueryAnswerCardFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickAnswerSuggestedQueryAnswerCardFormProperties>({
		});

	}


	/** Contains a list of suggested queries for a single category. */
	export interface EnterpriseTopazSidekickAnswerSuggestedQueryCategory {

		/** The query list category. */
		category?: EnterpriseTopazSidekickAnswerSuggestedQueryCategoryCategory | null;

		/** Whether this category is enabled. */
		isEnabled?: boolean | null;

		/** List of suggested queries to show the user. */
		query?: Array<string>;
	}

	/** Contains a list of suggested queries for a single category. */
	export interface EnterpriseTopazSidekickAnswerSuggestedQueryCategoryFormProperties {

		/** The query list category. */
		category: FormControl<EnterpriseTopazSidekickAnswerSuggestedQueryCategoryCategory | null | undefined>,

		/** Whether this category is enabled. */
		isEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickAnswerSuggestedQueryCategoryFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickAnswerSuggestedQueryCategoryFormProperties>({
			category: new FormControl<EnterpriseTopazSidekickAnswerSuggestedQueryCategoryCategory | null | undefined>(undefined),
			isEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum EnterpriseTopazSidekickAnswerSuggestedQueryCategoryCategory { UNKNOWN = 'UNKNOWN', CALENDAR = 'CALENDAR', DOCUMENT = 'DOCUMENT', PEOPLE = 'PEOPLE' }


	/** Wrapper proto for the Assist cards. */
	export interface EnterpriseTopazSidekickAssistCardProto {
		agendaGroupCardProto?: EnterpriseTopazSidekickAgendaGroupCardProto;

		/** Card metadata. */
		cardMetadata?: EnterpriseTopazSidekickCardMetadata;

		/** Card type. */
		cardType?: EnterpriseTopazSidekickAssistCardProtoCardType | null;

		/** Conflicting meetings card proto. */
		conflictingMeetingsCard?: EnterpriseTopazSidekickConflictingEventsCardProto;
		documentListCard?: EnterpriseTopazSidekickDocumentPerCategoryList;
		documentsWithMentions?: EnterpriseTopazSidekickDocumentPerCategoryList;

		/** Response to find meeting time among a set of people. */
		findMeetingTimeCard?: EnterpriseTopazSidekickFindMeetingTimeCardProto;
		genericAnswerCard?: EnterpriseTopazSidekickGenericAnswerCard;

		/** Get and keep ahead card */
		getAndKeepAheadCard?: EnterpriseTopazSidekickGetAndKeepAheadCardProto;

		/** An AgendaEntry, e.g., a Calendar Event. */
		meeting?: EnterpriseTopazSidekickAgendaEntry;

		/** Information about the meeting notes created. */
		meetingNotesCard?: EnterpriseTopazSidekickMeetingNotesCardProto;

		/** Meeting notes card request. */
		meetingNotesCardRequest?: EnterpriseTopazSidekickMeetingNotesCardRequest;
		peopleDisambiguationCard?: EnterpriseTopazSidekickPeopleDisambiguationCard;
		peoplePromotionCard?: PeoplePromotionCard;

		/** An answer card for a single person. */
		personAnswerCard?: EnterpriseTopazSidekickPeopleAnswerPersonAnswerCard;
		personProfileCard?: EnterpriseTopazSidekickPersonProfileCard;

		/** Personalized docs card proto. */
		personalizedDocsCard?: EnterpriseTopazSidekickPersonalizedDocsCardProto;

		/** An answer card for a list of people that are related to the subject of the query. */
		relatedPeopleAnswerCard?: EnterpriseTopazSidekickPeopleAnswerRelatedPeopleAnswerCard;

		/** Share meeting docs card proto. */
		shareMeetingDocsCard?: EnterpriseTopazSidekickShareMeetingDocsCardProto;
		sharedDocuments?: EnterpriseTopazSidekickDocumentPerCategoryList;

		/** Contains a list of suggested queries. Allows the user to determine what natural language queries they can ask Cloud Search (e.g. "what can I search for?"). */
		suggestedQueryAnswerCard?: EnterpriseTopazSidekickAnswerSuggestedQueryAnswerCard;
		thirdPartyAnswerCard?: ThirdPartyGenericCard;
		workInProgressCardProto?: EnterpriseTopazSidekickRecentDocumentsCardProto;
	}

	/** Wrapper proto for the Assist cards. */
	export interface EnterpriseTopazSidekickAssistCardProtoFormProperties {

		/** Card type. */
		cardType: FormControl<EnterpriseTopazSidekickAssistCardProtoCardType | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickAssistCardProtoFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickAssistCardProtoFormProperties>({
			cardType: new FormControl<EnterpriseTopazSidekickAssistCardProtoCardType | null | undefined>(undefined),
		});

	}


	/** Card metadata. */
	export interface EnterpriseTopazSidekickCardMetadata {

		/** Declares a preference for how this card should be packed in MSCR. All cards in a response must correspond to a single category. As a result, cards may be dropped from the response if this field is set. Any card that does not match the category of the card with the highest priority in the response will be dropped. */
		cardCategory?: EnterpriseTopazSidekickCardMetadataCardCategory | null;

		/** An ID to identify the card and match actions to it. Be thoughtful of new card IDs since actions will be associated to that ID. E.g., if two card IDs collide, the system will think that the actions have been applied to the same card. Similarly, if EAS can return multiple cards of the same type (e.g., Meetings), ensure that the card_id identifies a given instance of the card so that, e.g., dismissals only affect the dismissed card as opposed to affecting all meeting cards. */
		cardId?: string | null;

		/** Chronology. */
		chronology?: EnterpriseTopazSidekickCardMetadataChronology | null;

		/** Debug info (only reported if request's debug_level > 0). */
		debugInfo?: string | null;

		/** Metadata about the NLP interpretation of the query. */
		nlpMetadata?: EnterpriseTopazSidekickNlpMetadata;

		/** Ranking params. */
		rankingParams?: EnterpriseTopazSidekickRankingParams;

		/** Render mode. */
		renderMode?: EnterpriseTopazSidekickCardMetadataRenderMode | null;
	}

	/** Card metadata. */
	export interface EnterpriseTopazSidekickCardMetadataFormProperties {

		/** Declares a preference for how this card should be packed in MSCR. All cards in a response must correspond to a single category. As a result, cards may be dropped from the response if this field is set. Any card that does not match the category of the card with the highest priority in the response will be dropped. */
		cardCategory: FormControl<EnterpriseTopazSidekickCardMetadataCardCategory | null | undefined>,

		/** An ID to identify the card and match actions to it. Be thoughtful of new card IDs since actions will be associated to that ID. E.g., if two card IDs collide, the system will think that the actions have been applied to the same card. Similarly, if EAS can return multiple cards of the same type (e.g., Meetings), ensure that the card_id identifies a given instance of the card so that, e.g., dismissals only affect the dismissed card as opposed to affecting all meeting cards. */
		cardId: FormControl<string | null | undefined>,

		/** Chronology. */
		chronology: FormControl<EnterpriseTopazSidekickCardMetadataChronology | null | undefined>,

		/** Debug info (only reported if request's debug_level > 0). */
		debugInfo: FormControl<string | null | undefined>,

		/** Render mode. */
		renderMode: FormControl<EnterpriseTopazSidekickCardMetadataRenderMode | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickCardMetadataFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickCardMetadataFormProperties>({
			cardCategory: new FormControl<EnterpriseTopazSidekickCardMetadataCardCategory | null | undefined>(undefined),
			cardId: new FormControl<string | null | undefined>(undefined),
			chronology: new FormControl<EnterpriseTopazSidekickCardMetadataChronology | null | undefined>(undefined),
			debugInfo: new FormControl<string | null | undefined>(undefined),
			renderMode: new FormControl<EnterpriseTopazSidekickCardMetadataRenderMode | null | undefined>(undefined),
		});

	}

	export enum EnterpriseTopazSidekickCardMetadataCardCategory { DEFAULT = 'DEFAULT', ANSWER = 'ANSWER', KNOWLEDGE = 'KNOWLEDGE', HOMEPAGE = 'HOMEPAGE' }

	export enum EnterpriseTopazSidekickCardMetadataChronology { UNKNOWN = 'UNKNOWN', PAST = 'PAST', RECENTLY_PAST = 'RECENTLY_PAST', PRESENT = 'PRESENT', NEAR_FUTURE = 'NEAR_FUTURE', FUTURE = 'FUTURE' }


	/** Metadata about the NLP interpretation of the query. */
	export interface EnterpriseTopazSidekickNlpMetadata {

		/** Confidence of the interpretation that generated this card. */
		confidence?: number | null;
	}

	/** Metadata about the NLP interpretation of the query. */
	export interface EnterpriseTopazSidekickNlpMetadataFormProperties {

		/** Confidence of the interpretation that generated this card. */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickNlpMetadataFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickNlpMetadataFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Ranking params. */
	export interface EnterpriseTopazSidekickRankingParams {

		/** The end-time that this object will expect to occur. If the type is marked as FIXED, then this end-time will persist after bidding. If the type is marked as FLEXIBLE, this field is NOT expected to be filled and will be filled in after it has won a bid. Expected to be set when type is set to FIXED. */
		endTimeMs?: string | null;

		/** The priority to determine between objects that have the same start_time_ms The lower-value of priority == ranked higher. Max-priority = 0. Expected to be set for all types. */
		priority?: EnterpriseTopazSidekickRankingParamsPriority | null;

		/** The score of the card to be used to break priority-ties */
		score?: number | null;

		/** The span that this card will take in the stream Expected to be set when type is set to FLEXIBLE. */
		spanMs?: string | null;

		/** The start-time that this object will bid-for If the type is marked as FIXED, then this start-time will persist after bidding. If the type is marked as FLEXIBLE, then it will occur at the given time or sometime after the requested time. Expected to be set for all types. */
		startTimeMs?: string | null;

		/** The packing type of this object. */
		type?: EnterpriseTopazSidekickRankingParamsType | null;
	}

	/** Ranking params. */
	export interface EnterpriseTopazSidekickRankingParamsFormProperties {

		/** The end-time that this object will expect to occur. If the type is marked as FIXED, then this end-time will persist after bidding. If the type is marked as FLEXIBLE, this field is NOT expected to be filled and will be filled in after it has won a bid. Expected to be set when type is set to FIXED. */
		endTimeMs: FormControl<string | null | undefined>,

		/** The priority to determine between objects that have the same start_time_ms The lower-value of priority == ranked higher. Max-priority = 0. Expected to be set for all types. */
		priority: FormControl<EnterpriseTopazSidekickRankingParamsPriority | null | undefined>,

		/** The score of the card to be used to break priority-ties */
		score: FormControl<number | null | undefined>,

		/** The span that this card will take in the stream Expected to be set when type is set to FLEXIBLE. */
		spanMs: FormControl<string | null | undefined>,

		/** The start-time that this object will bid-for If the type is marked as FIXED, then this start-time will persist after bidding. If the type is marked as FLEXIBLE, then it will occur at the given time or sometime after the requested time. Expected to be set for all types. */
		startTimeMs: FormControl<string | null | undefined>,

		/** The packing type of this object. */
		type: FormControl<EnterpriseTopazSidekickRankingParamsType | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickRankingParamsFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickRankingParamsFormProperties>({
			endTimeMs: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<EnterpriseTopazSidekickRankingParamsPriority | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			spanMs: new FormControl<string | null | undefined>(undefined),
			startTimeMs: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EnterpriseTopazSidekickRankingParamsType | null | undefined>(undefined),
		});

	}

	export enum EnterpriseTopazSidekickRankingParamsPriority { UNKNOWN = 'UNKNOWN', CRITICAL = 'CRITICAL', IMPORTANT = 'IMPORTANT', HIGH = 'HIGH', NORMAL = 'NORMAL', BEST_EFFORT = 'BEST_EFFORT' }

	export enum EnterpriseTopazSidekickRankingParamsType { FIXED = 'FIXED', FLEXIBLE = 'FLEXIBLE' }

	export enum EnterpriseTopazSidekickCardMetadataRenderMode { UNKNOWN_RENDER = 'UNKNOWN_RENDER', COLLAPSED = 'COLLAPSED', EXPANDED = 'EXPANDED' }

	export enum EnterpriseTopazSidekickAssistCardProtoCardType { UNKNOWN_TYPE = 'UNKNOWN_TYPE', AGENDA = 'AGENDA', CHANGELISTS = 'CHANGELISTS', CONFLICTING_MEETINGS = 'CONFLICTING_MEETINGS', CREATE_NOTES_FOR_MEETING = 'CREATE_NOTES_FOR_MEETING', CREATE_NOTES_FOR_MEETING_REQUEST = 'CREATE_NOTES_FOR_MEETING_REQUEST', CUSTOMER_NEWS = 'CUSTOMER_NEWS', FIND_MEETING_TIME = 'FIND_MEETING_TIME', NEXT_MEETING = 'NEXT_MEETING', PERSONALIZED_DOCS = 'PERSONALIZED_DOCS', TRENDING_DOCS = 'TRENDING_DOCS', UPCOMING_TRIP = 'UPCOMING_TRIP', SUMMARY = 'SUMMARY', MEETINGS = 'MEETINGS', HOMEPAGE = 'HOMEPAGE', SHARE_MEETING_DOCS = 'SHARE_MEETING_DOCS', DISCOVER_PEOPLE = 'DISCOVER_PEOPLE', HOMEPAGE_V3 = 'HOMEPAGE_V3', AGENDA_GROUP = 'AGENDA_GROUP', WORK_IN_PROGRESS = 'WORK_IN_PROGRESS', GET_AND_KEEP_AHEAD = 'GET_AND_KEEP_AHEAD', GENERIC_ANSWER_CARD = 'GENERIC_ANSWER_CARD', THIRD_PARTY_ANSWER_CARD = 'THIRD_PARTY_ANSWER_CARD', DOMAIN_TRENDING_DOCS = 'DOMAIN_TRENDING_DOCS', TEAM_TRENDING_DOCS = 'TEAM_TRENDING_DOCS', DOCUMENT_LIST_ANSWER_CARD = 'DOCUMENT_LIST_ANSWER_CARD', SUGGESTED_QUERY_ANSWER_CARD = 'SUGGESTED_QUERY_ANSWER_CARD', PERSON_ANSWER_CARD = 'PERSON_ANSWER_CARD', RELATED_PEOPLE_ANSWER_CARD = 'RELATED_PEOPLE_ANSWER_CARD', PERSON_KNOWLEDGE_CARD = 'PERSON_KNOWLEDGE_CARD', PEOPLE_SEARCH_PROMOTION_CARD = 'PEOPLE_SEARCH_PROMOTION_CARD' }

	export interface EnterpriseTopazSidekickDocumentPerCategoryList {
		documents?: Array<EnterpriseTopazSidekickDocumentPerCategoryListDocumentPerCategoryListEntry>;

		/** Localized message explaining how the documents were derived (e.g. from the last 30 days activity). This field is optional. */
		helpMessage?: string | null;
		listType?: EnterpriseTopazSidekickDocumentPerCategoryListListType | null;

		/** Description of the types of documents present in the list. */
		listTypeDescription?: string | null;

		/** Response message in case no documents are present in the card. */
		responseMessage?: string | null;
	}
	export interface EnterpriseTopazSidekickDocumentPerCategoryListFormProperties {

		/** Localized message explaining how the documents were derived (e.g. from the last 30 days activity). This field is optional. */
		helpMessage: FormControl<string | null | undefined>,
		listType: FormControl<EnterpriseTopazSidekickDocumentPerCategoryListListType | null | undefined>,

		/** Description of the types of documents present in the list. */
		listTypeDescription: FormControl<string | null | undefined>,

		/** Response message in case no documents are present in the card. */
		responseMessage: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickDocumentPerCategoryListFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickDocumentPerCategoryListFormProperties>({
			helpMessage: new FormControl<string | null | undefined>(undefined),
			listType: new FormControl<EnterpriseTopazSidekickDocumentPerCategoryListListType | null | undefined>(undefined),
			listTypeDescription: new FormControl<string | null | undefined>(undefined),
			responseMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterpriseTopazSidekickDocumentPerCategoryListDocumentPerCategoryListEntry {
		category?: EnterpriseTopazSidekickDocumentPerCategoryListDocumentPerCategoryListEntryCategory | null;

		/** Representation of a document. NEXT_TAG: 15 */
		document?: EnterpriseTopazSidekickCommonDocument;

		/** Reason this document was selected. */
		rationale?: string | null;
	}
	export interface EnterpriseTopazSidekickDocumentPerCategoryListDocumentPerCategoryListEntryFormProperties {
		category: FormControl<EnterpriseTopazSidekickDocumentPerCategoryListDocumentPerCategoryListEntryCategory | null | undefined>,

		/** Reason this document was selected. */
		rationale: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickDocumentPerCategoryListDocumentPerCategoryListEntryFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickDocumentPerCategoryListDocumentPerCategoryListEntryFormProperties>({
			category: new FormControl<EnterpriseTopazSidekickDocumentPerCategoryListDocumentPerCategoryListEntryCategory | null | undefined>(undefined),
			rationale: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnterpriseTopazSidekickDocumentPerCategoryListDocumentPerCategoryListEntryCategory { UNKNOWN_DOCUMENT = 'UNKNOWN_DOCUMENT', ACTIONABLE = 'ACTIONABLE', VIEWED = 'VIEWED', REPLIED = 'REPLIED', MENTION_VIEWED = 'MENTION_VIEWED', MENTION_REPLIED = 'MENTION_REPLIED', MENTION_NOT_VIEWED = 'MENTION_NOT_VIEWED', SHARED_AND_VIEWED = 'SHARED_AND_VIEWED', SHARED_NOT_VIEWED = 'SHARED_NOT_VIEWED', EDITED = 'EDITED' }

	export enum EnterpriseTopazSidekickDocumentPerCategoryListListType { UNKNOWN_LIST_TYPE = 'UNKNOWN_LIST_TYPE', MENTIONS = 'MENTIONS', SHARES = 'SHARES', NEEDS_ATTENTION = 'NEEDS_ATTENTION', VIEWS = 'VIEWS', EDITS = 'EDITS' }


	/** Response to find meeting time among a set of people. */
	export interface EnterpriseTopazSidekickFindMeetingTimeCardProto {

		/** Slots when all attendees have availability. */
		commonAvailableTimeSlots?: Array<EnterpriseTopazSidekickTimeSlot>;

		/** Invitees to the event. */
		invitees?: Array<EnterpriseTopazSidekickPerson>;

		/** Person. */
		requester?: EnterpriseTopazSidekickPerson;

		/** Details about scheduled meetings. */
		scheduledMeeting?: EnterpriseTopazSidekickScheduledMeeting;

		/** Invitees that have been skipped in the computation, most likely because they are groups. */
		skippedInvitees?: Array<EnterpriseTopazSidekickPerson>;

		/** Slot of time. */
		timeBoundaries?: EnterpriseTopazSidekickTimeSlot;

		/** Timezone ID. */
		timezoneId?: string | null;
	}

	/** Response to find meeting time among a set of people. */
	export interface EnterpriseTopazSidekickFindMeetingTimeCardProtoFormProperties {

		/** Timezone ID. */
		timezoneId: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickFindMeetingTimeCardProtoFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickFindMeetingTimeCardProtoFormProperties>({
			timezoneId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Slot of time. */
	export interface EnterpriseTopazSidekickTimeSlot {

		/** Day end time at the user's timezone. */
		endTimeDay?: string | null;

		/** Hour and minute of the end time at the user's timezone. */
		endTimeHourAndMinute?: string | null;

		/** End time in milliseconds. */
		endTimeInMillis?: string | null;

		/** Day start time at user's timezone. */
		startTimeDay?: string | null;

		/** Hour and minute of the start time at the user's timezone. */
		startTimeHourAndMinute?: string | null;

		/** Start time in milliseconds. */
		startTimeInMillis?: string | null;
	}

	/** Slot of time. */
	export interface EnterpriseTopazSidekickTimeSlotFormProperties {

		/** Day end time at the user's timezone. */
		endTimeDay: FormControl<string | null | undefined>,

		/** Hour and minute of the end time at the user's timezone. */
		endTimeHourAndMinute: FormControl<string | null | undefined>,

		/** End time in milliseconds. */
		endTimeInMillis: FormControl<string | null | undefined>,

		/** Day start time at user's timezone. */
		startTimeDay: FormControl<string | null | undefined>,

		/** Hour and minute of the start time at the user's timezone. */
		startTimeHourAndMinute: FormControl<string | null | undefined>,

		/** Start time in milliseconds. */
		startTimeInMillis: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickTimeSlotFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickTimeSlotFormProperties>({
			endTimeDay: new FormControl<string | null | undefined>(undefined),
			endTimeHourAndMinute: new FormControl<string | null | undefined>(undefined),
			endTimeInMillis: new FormControl<string | null | undefined>(undefined),
			startTimeDay: new FormControl<string | null | undefined>(undefined),
			startTimeHourAndMinute: new FormControl<string | null | undefined>(undefined),
			startTimeInMillis: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about scheduled meetings. */
	export interface EnterpriseTopazSidekickScheduledMeeting {

		/** The meeting location. */
		meetingLocation?: string | null;

		/** Slot of time. */
		meetingTime?: EnterpriseTopazSidekickTimeSlot;

		/** The meeting title. */
		meetingTitle?: string | null;
	}

	/** Details about scheduled meetings. */
	export interface EnterpriseTopazSidekickScheduledMeetingFormProperties {

		/** The meeting location. */
		meetingLocation: FormControl<string | null | undefined>,

		/** The meeting title. */
		meetingTitle: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickScheduledMeetingFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickScheduledMeetingFormProperties>({
			meetingLocation: new FormControl<string | null | undefined>(undefined),
			meetingTitle: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterpriseTopazSidekickGenericAnswerCard {

		/** The answer. */
		answer?: string | null;

		/** Title or header of the card. */
		title?: string | null;
	}
	export interface EnterpriseTopazSidekickGenericAnswerCardFormProperties {

		/** The answer. */
		answer: FormControl<string | null | undefined>,

		/** Title or header of the card. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickGenericAnswerCardFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickGenericAnswerCardFormProperties>({
			answer: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Get and keep ahead card */
	export interface EnterpriseTopazSidekickGetAndKeepAheadCardProto {

		/** A list of events where all guests declined. */
		declinedEvents?: EnterpriseTopazSidekickGetAndKeepAheadCardProtoDeclinedEvents;
		mentionedDocuments?: EnterpriseTopazSidekickDocumentPerCategoryList;
		sharedDocuments?: EnterpriseTopazSidekickDocumentPerCategoryList;
	}

	/** Get and keep ahead card */
	export interface EnterpriseTopazSidekickGetAndKeepAheadCardProtoFormProperties {
	}
	export function CreateEnterpriseTopazSidekickGetAndKeepAheadCardProtoFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickGetAndKeepAheadCardProtoFormProperties>({
		});

	}


	/** A list of events where all guests declined. */
	export interface EnterpriseTopazSidekickGetAndKeepAheadCardProtoDeclinedEvents {
		events?: Array<EnterpriseTopazSidekickAgendaEntry>;
	}

	/** A list of events where all guests declined. */
	export interface EnterpriseTopazSidekickGetAndKeepAheadCardProtoDeclinedEventsFormProperties {
	}
	export function CreateEnterpriseTopazSidekickGetAndKeepAheadCardProtoDeclinedEventsFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickGetAndKeepAheadCardProtoDeclinedEventsFormProperties>({
		});

	}


	/** Information about the meeting notes created. */
	export interface EnterpriseTopazSidekickMeetingNotesCardProto {

		/** An AgendaEntry, e.g., a Calendar Event. */
		event?: EnterpriseTopazSidekickAgendaEntry;

		/** Google Drive ID (a.k.a. resource ID) of the file. */
		fileId?: string | null;

		/** Title we want to show for meeting notes in the answer card */
		title?: string | null;

		/** New URL. */
		url?: string | null;
	}

	/** Information about the meeting notes created. */
	export interface EnterpriseTopazSidekickMeetingNotesCardProtoFormProperties {

		/** Google Drive ID (a.k.a. resource ID) of the file. */
		fileId: FormControl<string | null | undefined>,

		/** Title we want to show for meeting notes in the answer card */
		title: FormControl<string | null | undefined>,

		/** New URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickMeetingNotesCardProtoFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickMeetingNotesCardProtoFormProperties>({
			fileId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Meeting notes card request. */
	export interface EnterpriseTopazSidekickMeetingNotesCardRequest {

		/** Who are the meeting notes created for. */
		canCreateFor?: Array<string>;

		/** Errors in the creation of meeting notes. */
		error?: EnterpriseTopazSidekickMeetingNotesCardError;

		/** An AgendaEntry, e.g., a Calendar Event. */
		event?: EnterpriseTopazSidekickAgendaEntry;
	}

	/** Meeting notes card request. */
	export interface EnterpriseTopazSidekickMeetingNotesCardRequestFormProperties {
	}
	export function CreateEnterpriseTopazSidekickMeetingNotesCardRequestFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickMeetingNotesCardRequestFormProperties>({
		});

	}


	/** Errors in the creation of meeting notes. */
	export interface EnterpriseTopazSidekickMeetingNotesCardError {

		/** The description of the reason why create-meeting-notes failed. */
		description?: string | null;

		/** An AgendaEntry, e.g., a Calendar Event. */
		event?: EnterpriseTopazSidekickAgendaEntry;

		/** The reason why create-meeting-notes failed. */
		reason?: EnterpriseTopazSidekickMeetingNotesCardErrorReason | null;
	}

	/** Errors in the creation of meeting notes. */
	export interface EnterpriseTopazSidekickMeetingNotesCardErrorFormProperties {

		/** The description of the reason why create-meeting-notes failed. */
		description: FormControl<string | null | undefined>,

		/** The reason why create-meeting-notes failed. */
		reason: FormControl<EnterpriseTopazSidekickMeetingNotesCardErrorReason | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickMeetingNotesCardErrorFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickMeetingNotesCardErrorFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<EnterpriseTopazSidekickMeetingNotesCardErrorReason | null | undefined>(undefined),
		});

	}

	export enum EnterpriseTopazSidekickMeetingNotesCardErrorReason { NONE = 'NONE', NOT_OWNER = 'NOT_OWNER', UNKNOWN = 'UNKNOWN' }

	export interface EnterpriseTopazSidekickPeopleDisambiguationCard {

		/** Candidate persons for the query. */
		person?: Array<EnterpriseTopazSidekickCommonPerson>;
	}
	export interface EnterpriseTopazSidekickPeopleDisambiguationCardFormProperties {
	}
	export function CreateEnterpriseTopazSidekickPeopleDisambiguationCardFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickPeopleDisambiguationCardFormProperties>({
		});

	}

	export interface PeoplePromotionCard {
		people?: Array<PersonCore>;
	}
	export interface PeoplePromotionCardFormProperties {
	}
	export function CreatePeoplePromotionCardFormGroup() {
		return new FormGroup<PeoplePromotionCardFormProperties>({
		});

	}


	/** Information for rendering a person. NEXT ID: 37 */
	export interface PersonCore {

		/** Instructions for how to address this person (e.g. custom pronouns). For google.com this is a set of pronouns from a defined list of options. */
		addressMeAs?: string | null;

		/** People the profile owner is an admin to. Note that not all fields of these PersonCores will be set, in particular, relationships will be empty. */
		adminTo?: Array<PersonCore>;

		/** The profile owner's admins in no particular order. Note that not all fields of these PersonCores will be set, in particular, relationships will be empty. */
		admins?: Array<PersonCore>;
		availabilityStatus?: PersonCoreAvailabilityStatus | null;

		/** Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999. */
		birthday?: Date;

		/** Message containing a string that is safe to use in URL contexts in DOM APIs and HTML documents, where the URL context does not refer to a resource that loads code. */
		calendarUrl?: SafeUrlProto;

		/** Message containing a string that is safe to use in URL contexts in DOM APIs and HTML documents, where the URL context does not refer to a resource that loads code. */
		chatUrl?: SafeUrlProto;

		/** Person's cost center as a string, e.g. "926: Googler Apps". */
		costCenter?: string | null;

		/** The person's Organization department, e.g. "People Operations". For google.com this is usually called "area". */
		department?: string | null;

		/** A subset of the profile owner's direct reports. The number of entities here may be less than total_direct_reports_count, because typically ProfileResponse does not include all the person's reports, if there are too many to retrieve efficiently. Note that not all fields of these PersonCores will be set, in particular, relationships will be empty. */
		directReports?: Array<PersonCore>;

		/** The profile owner's direct dotted line managers in no particular order. Note that not all fields of these PersonCores will be set, in particular, relationships will be empty. */
		dottedLineManagers?: Array<PersonCore>;

		/** A subset of the profile owner's dotted-line reports. The number of entities here may be less than total_dlr_count. Note that not all fields of these PersonCores will be set, in particular, relationships will be empty. */
		dottedLineReports?: Array<PersonCore>;

		/** E-mail addresses of the person. The primary or preferred email should be first. */
		emails?: Array<string>;

		/** Person's employee number (external ID of type "organization") For google.com this is the badge number (e.g. 2 for Larry Page). */
		employeeId?: string | null;

		/** A fingerprint used by PAPI to reliably determine if a resource has changed Externally it is used as part of the etag. */
		fingerprint?: string | null;

		/** Full-time equivalent (in ‰) (e.g. 800 for a person who's working 80%). */
		ftePermille?: string | null;

		/** Geo information used for rendering a map that shows the user's work location. */
		geoLocation?: MapInfo;
		gmailUrl?: string | null;

		/** Profile owner's job title (e.g. "Software Engineer"). For google.com this is the Workday preferred job title. */
		jobTitle?: string | null;

		/** List of keys to use from the map 'keywords'. */
		keywordTypes?: Array<string>;

		/** Custom keywords the domain admin has added. */
		keywords?: {[id: string]: string };

		/** Custom links the profile owner has added. */
		links?: Array<EnterpriseTopazFrontendTeamsLink>;

		/** Detailed desk location within the company. For google.com this is the desk location code (e.g. "DE-MUC-ARP-6T2-6T2C0C") if the person has a desk. */
		location?: string | null;

		/** The profile owner's management chain from top to bottom, where managers[0] is the CEO, manager[N-2] is the person's manager's manager and managers[N-1] is the person's direct manager. Note that not all fields of these PersonCores will be set, in particular, relationships will be empty. */
		managers?: Array<PersonCore>;

		/** Custom mission statement the profile owner has added. */
		mission?: string | null;

		/** Human-readable Unicode display name. */
		name?: string | null;

		/** Office/building identifier within the company. For google.com this is the office code (e.g. "DE-MUC-ARP"). */
		officeLocation?: string | null;

		/** The person's obfuscated Gaia ID. */
		personId?: string | null;
		phoneNumbers?: Array<EnterpriseTopazFrontendTeamsPersonCorePhoneNumber>;

		/** Message containing a string that is safe to use in URL contexts in DOM APIs and HTML documents, where the URL context does not refer to a resource that loads code. */
		photoUrl?: SafeUrlProto;

		/** Postal address of office/building. */
		postalAddress?: string | null;

		/** Total count of the profile owner's direct reports. */
		totalDirectReportsCount?: number | null;

		/** Total count of the profile owner's dotted-line reports. */
		totalDlrCount?: number | null;

		/** The sum of all profile owner's reports and their own full-time-equivalents in ‰ (e.g. 1800 if one report is working 80% and profile owner 100%). */
		totalFteCount?: string | null;

		/** External ID of type "login_id" for the profile. For google.com this is the username/LDAP. */
		username?: string | null;
		waldoComeBackTime?: string | null;
	}

	/** Information for rendering a person. NEXT ID: 37 */
	export interface PersonCoreFormProperties {

		/** Instructions for how to address this person (e.g. custom pronouns). For google.com this is a set of pronouns from a defined list of options. */
		addressMeAs: FormControl<string | null | undefined>,
		availabilityStatus: FormControl<PersonCoreAvailabilityStatus | null | undefined>,

		/** Person's cost center as a string, e.g. "926: Googler Apps". */
		costCenter: FormControl<string | null | undefined>,

		/** The person's Organization department, e.g. "People Operations". For google.com this is usually called "area". */
		department: FormControl<string | null | undefined>,

		/** Person's employee number (external ID of type "organization") For google.com this is the badge number (e.g. 2 for Larry Page). */
		employeeId: FormControl<string | null | undefined>,

		/** A fingerprint used by PAPI to reliably determine if a resource has changed Externally it is used as part of the etag. */
		fingerprint: FormControl<string | null | undefined>,

		/** Full-time equivalent (in ‰) (e.g. 800 for a person who's working 80%). */
		ftePermille: FormControl<string | null | undefined>,
		gmailUrl: FormControl<string | null | undefined>,

		/** Profile owner's job title (e.g. "Software Engineer"). For google.com this is the Workday preferred job title. */
		jobTitle: FormControl<string | null | undefined>,

		/** Custom keywords the domain admin has added. */
		keywords: FormControl<{[id: string]: string } | null | undefined>,

		/** Detailed desk location within the company. For google.com this is the desk location code (e.g. "DE-MUC-ARP-6T2-6T2C0C") if the person has a desk. */
		location: FormControl<string | null | undefined>,

		/** Custom mission statement the profile owner has added. */
		mission: FormControl<string | null | undefined>,

		/** Human-readable Unicode display name. */
		name: FormControl<string | null | undefined>,

		/** Office/building identifier within the company. For google.com this is the office code (e.g. "DE-MUC-ARP"). */
		officeLocation: FormControl<string | null | undefined>,

		/** The person's obfuscated Gaia ID. */
		personId: FormControl<string | null | undefined>,

		/** Postal address of office/building. */
		postalAddress: FormControl<string | null | undefined>,

		/** Total count of the profile owner's direct reports. */
		totalDirectReportsCount: FormControl<number | null | undefined>,

		/** Total count of the profile owner's dotted-line reports. */
		totalDlrCount: FormControl<number | null | undefined>,

		/** The sum of all profile owner's reports and their own full-time-equivalents in ‰ (e.g. 1800 if one report is working 80% and profile owner 100%). */
		totalFteCount: FormControl<string | null | undefined>,

		/** External ID of type "login_id" for the profile. For google.com this is the username/LDAP. */
		username: FormControl<string | null | undefined>,
		waldoComeBackTime: FormControl<string | null | undefined>,
	}
	export function CreatePersonCoreFormGroup() {
		return new FormGroup<PersonCoreFormProperties>({
			addressMeAs: new FormControl<string | null | undefined>(undefined),
			availabilityStatus: new FormControl<PersonCoreAvailabilityStatus | null | undefined>(undefined),
			costCenter: new FormControl<string | null | undefined>(undefined),
			department: new FormControl<string | null | undefined>(undefined),
			employeeId: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			ftePermille: new FormControl<string | null | undefined>(undefined),
			gmailUrl: new FormControl<string | null | undefined>(undefined),
			jobTitle: new FormControl<string | null | undefined>(undefined),
			keywords: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			mission: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			officeLocation: new FormControl<string | null | undefined>(undefined),
			personId: new FormControl<string | null | undefined>(undefined),
			postalAddress: new FormControl<string | null | undefined>(undefined),
			totalDirectReportsCount: new FormControl<number | null | undefined>(undefined),
			totalDlrCount: new FormControl<number | null | undefined>(undefined),
			totalFteCount: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			waldoComeBackTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PersonCoreAvailabilityStatus { UNKNOWN = 'UNKNOWN', OUT_OF_OFFICE = 'OUT_OF_OFFICE', OUTSIDE_WORKING_HOURS = 'OUTSIDE_WORKING_HOURS', AVAILABLE = 'AVAILABLE' }


	/** Geo information used for rendering a map that shows the user's work location. */
	export interface MapInfo {

		/** Latitude in degrees */
		lat?: number | null;

		/** Message containing a string that is safe to use in URL contexts in DOM APIs and HTML documents, where the URL context does not refer to a resource that loads code. */
		locationUrl?: SafeUrlProto;

		/** Longitude in degrees */
		long?: number | null;

		/** MapTiles for the area around a user's work location */
		mapTile?: Array<MapTile>;

		/** The zoom level of the map. A constant zoom value of 18 is used for now to match the zoom of the map shown on a Moma Teams Profile page */
		zoom?: number | null;
	}

	/** Geo information used for rendering a map that shows the user's work location. */
	export interface MapInfoFormProperties {

		/** Latitude in degrees */
		lat: FormControl<number | null | undefined>,

		/** Longitude in degrees */
		long: FormControl<number | null | undefined>,

		/** The zoom level of the map. A constant zoom value of 18 is used for now to match the zoom of the map shown on a Moma Teams Profile page */
		zoom: FormControl<number | null | undefined>,
	}
	export function CreateMapInfoFormGroup() {
		return new FormGroup<MapInfoFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined),
			long: new FormControl<number | null | undefined>(undefined),
			zoom: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information used to render a map tile image in the proper location on a map. */
	export interface MapTile {

		/** Message containing a string that is safe to use in URL contexts in DOM APIs and HTML documents, where the URL context does not refer to a resource that loads code. */
		imageUrl?: SafeUrlProto;

		/** Map tile x coordinate */
		tileX?: number | null;

		/** Map tile y coordinate */
		tileY?: number | null;
	}

	/** Information used to render a map tile image in the proper location on a map. */
	export interface MapTileFormProperties {

		/** Map tile x coordinate */
		tileX: FormControl<number | null | undefined>,

		/** Map tile y coordinate */
		tileY: FormControl<number | null | undefined>,
	}
	export function CreateMapTileFormGroup() {
		return new FormGroup<MapTileFormProperties>({
			tileX: new FormControl<number | null | undefined>(undefined),
			tileY: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An answer card for a single person. */
	export interface EnterpriseTopazSidekickPeopleAnswerPersonAnswerCard {

		/** List of answers. */
		answer?: Array<SafeHtmlProto>;

		/** A list of answers represented as free text. */
		answerText?: EnterpriseTopazSidekickAnswerAnswerList;

		/** Metadata for disambiguation. */
		disambiguationInfo?: EnterpriseTopazSidekickPeopleAnswerDisambiguationInfo;

		/** Recommended header to display for the card. */
		header?: EnterpriseTopazSidekickPeopleAnswerPeopleAnswerCardHeader;

		/** The response status. */
		responseStatus?: EnterpriseTopazSidekickPeopleAnswerPersonAnswerCardResponseStatus | null;

		/** Localized user friendly message to display to the user in the case of missing data or an error. */
		statusMessage?: string | null;

		/** Common representation of a person. */
		subject?: EnterpriseTopazSidekickCommonPerson;
	}

	/** An answer card for a single person. */
	export interface EnterpriseTopazSidekickPeopleAnswerPersonAnswerCardFormProperties {

		/** The response status. */
		responseStatus: FormControl<EnterpriseTopazSidekickPeopleAnswerPersonAnswerCardResponseStatus | null | undefined>,

		/** Localized user friendly message to display to the user in the case of missing data or an error. */
		statusMessage: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickPeopleAnswerPersonAnswerCardFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickPeopleAnswerPersonAnswerCardFormProperties>({
			responseStatus: new FormControl<EnterpriseTopazSidekickPeopleAnswerPersonAnswerCardResponseStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for disambiguation. */
	export interface EnterpriseTopazSidekickPeopleAnswerDisambiguationInfo {

		/** A list of people that also matched the query. This list is not complete. */
		disambiguation?: Array<EnterpriseTopazSidekickPeopleAnswerDisambiguationInfoDisambiguationPerson>;

		/** The name that was extracted from the query. This may be in the form of the given name, last name, full name, LDAP, or email address. This name can be considered suitable for displaying to the user and can largely be considered to be normalized (e.g. "Bob's" -> "Bob"). */
		name?: string | null;
	}

	/** Metadata for disambiguation. */
	export interface EnterpriseTopazSidekickPeopleAnswerDisambiguationInfoFormProperties {

		/** The name that was extracted from the query. This may be in the form of the given name, last name, full name, LDAP, or email address. This name can be considered suitable for displaying to the user and can largely be considered to be normalized (e.g. "Bob's" -> "Bob"). */
		name: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickPeopleAnswerDisambiguationInfoFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickPeopleAnswerDisambiguationInfoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A person that also matches the query, but was not selected due to a lower affinity with the requesting user. */
	export interface EnterpriseTopazSidekickPeopleAnswerDisambiguationInfoDisambiguationPerson {

		/** Common representation of a person. */
		person?: EnterpriseTopazSidekickCommonPerson;

		/** The query that can be used to produce an answer card with the same attribute, but for this person. */
		query?: string | null;
	}

	/** A person that also matches the query, but was not selected due to a lower affinity with the requesting user. */
	export interface EnterpriseTopazSidekickPeopleAnswerDisambiguationInfoDisambiguationPersonFormProperties {

		/** The query that can be used to produce an answer card with the same attribute, but for this person. */
		query: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickPeopleAnswerDisambiguationInfoDisambiguationPersonFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickPeopleAnswerDisambiguationInfoDisambiguationPersonFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Recommended header to display for the card. */
	export interface EnterpriseTopazSidekickPeopleAnswerPeopleAnswerCardHeader {

		/** The suggested title to display. This defaults to the user's query. */
		title?: string | null;
	}

	/** Recommended header to display for the card. */
	export interface EnterpriseTopazSidekickPeopleAnswerPeopleAnswerCardHeaderFormProperties {

		/** The suggested title to display. This defaults to the user's query. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickPeopleAnswerPeopleAnswerCardHeaderFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickPeopleAnswerPeopleAnswerCardHeaderFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnterpriseTopazSidekickPeopleAnswerPersonAnswerCardResponseStatus { UNKNOWN = 'UNKNOWN', SUCCESS = 'SUCCESS', MISSING_PERSON = 'MISSING_PERSON', MISSING_DATA = 'MISSING_DATA' }

	export interface EnterpriseTopazSidekickPersonProfileCard {
		relatedPeople?: Array<EnterpriseTopazSidekickPersonProfileCardRelatedPeople>;

		/** Common representation of a person. */
		subject?: EnterpriseTopazSidekickCommonPerson;
	}
	export interface EnterpriseTopazSidekickPersonProfileCardFormProperties {
	}
	export function CreateEnterpriseTopazSidekickPersonProfileCardFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickPersonProfileCardFormProperties>({
		});

	}

	export interface EnterpriseTopazSidekickPersonProfileCardRelatedPeople {

		/** Related people. */
		relatedPerson?: Array<EnterpriseTopazSidekickCommonPerson>;

		/** Relation type. */
		relation?: EnterpriseTopazSidekickPersonProfileCardRelatedPeopleRelation | null;
	}
	export interface EnterpriseTopazSidekickPersonProfileCardRelatedPeopleFormProperties {

		/** Relation type. */
		relation: FormControl<EnterpriseTopazSidekickPersonProfileCardRelatedPeopleRelation | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickPersonProfileCardRelatedPeopleFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickPersonProfileCardRelatedPeopleFormProperties>({
			relation: new FormControl<EnterpriseTopazSidekickPersonProfileCardRelatedPeopleRelation | null | undefined>(undefined),
		});

	}

	export enum EnterpriseTopazSidekickPersonProfileCardRelatedPeopleRelation { UNKNOWN = 'UNKNOWN', MANAGER = 'MANAGER', DIRECT_REPORT = 'DIRECT_REPORT' }


	/** Personalized docs card proto. */
	export interface EnterpriseTopazSidekickPersonalizedDocsCardProto {

		/** Document group. */
		documentGroup?: Array<EnterpriseTopazSidekickDocumentGroup>;
	}

	/** Personalized docs card proto. */
	export interface EnterpriseTopazSidekickPersonalizedDocsCardProtoFormProperties {
	}
	export function CreateEnterpriseTopazSidekickPersonalizedDocsCardProtoFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickPersonalizedDocsCardProtoFormProperties>({
		});

	}


	/** Represents a mapping between a document type and its corresponding documents. Use for Work in Progress card in v1 homepage. */
	export interface EnterpriseTopazSidekickDocumentGroup {

		/** Document group type */
		groupType?: EnterpriseTopazSidekickDocumentGroupGroupType | null;

		/** The list of corresponding documents. */
		personalizedDocument?: Array<EnterpriseTopazSidekickCommonDocument>;
	}

	/** Represents a mapping between a document type and its corresponding documents. Use for Work in Progress card in v1 homepage. */
	export interface EnterpriseTopazSidekickDocumentGroupFormProperties {

		/** Document group type */
		groupType: FormControl<EnterpriseTopazSidekickDocumentGroupGroupType | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickDocumentGroupFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickDocumentGroupFormProperties>({
			groupType: new FormControl<EnterpriseTopazSidekickDocumentGroupGroupType | null | undefined>(undefined),
		});

	}

	export enum EnterpriseTopazSidekickDocumentGroupGroupType { UNKNOWN_TYPE = 'UNKNOWN_TYPE', ALL = 'ALL' }


	/** An answer card for a list of people that are related to the subject of the query. */
	export interface EnterpriseTopazSidekickPeopleAnswerRelatedPeopleAnswerCard {

		/** Metadata for disambiguation. */
		disambiguationInfo?: EnterpriseTopazSidekickPeopleAnswerDisambiguationInfo;

		/** Recommended header to display for the card. */
		header?: EnterpriseTopazSidekickPeopleAnswerPeopleAnswerCardHeader;

		/** A list of people that are related to the query subject. */
		relatedPeople?: Array<EnterpriseTopazSidekickCommonPerson>;

		/** Defines the type of relation the list of people have with the subject of the card. */
		relationType?: EnterpriseTopazSidekickPeopleAnswerRelatedPeopleAnswerCardRelationType | null;

		/** The response status. */
		responseStatus?: EnterpriseTopazSidekickPeopleAnswerPersonAnswerCardResponseStatus | null;

		/** Localized user friendly message to display to the user in the case of missing data or an error. */
		statusMessage?: string | null;

		/** Common representation of a person. */
		subject?: EnterpriseTopazSidekickCommonPerson;
	}

	/** An answer card for a list of people that are related to the subject of the query. */
	export interface EnterpriseTopazSidekickPeopleAnswerRelatedPeopleAnswerCardFormProperties {

		/** Defines the type of relation the list of people have with the subject of the card. */
		relationType: FormControl<EnterpriseTopazSidekickPeopleAnswerRelatedPeopleAnswerCardRelationType | null | undefined>,

		/** The response status. */
		responseStatus: FormControl<EnterpriseTopazSidekickPeopleAnswerPersonAnswerCardResponseStatus | null | undefined>,

		/** Localized user friendly message to display to the user in the case of missing data or an error. */
		statusMessage: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseTopazSidekickPeopleAnswerRelatedPeopleAnswerCardFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickPeopleAnswerRelatedPeopleAnswerCardFormProperties>({
			relationType: new FormControl<EnterpriseTopazSidekickPeopleAnswerRelatedPeopleAnswerCardRelationType | null | undefined>(undefined),
			responseStatus: new FormControl<EnterpriseTopazSidekickPeopleAnswerPersonAnswerCardResponseStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnterpriseTopazSidekickPeopleAnswerRelatedPeopleAnswerCardRelationType { UNKNOWN = 'UNKNOWN', DIRECT_REPORTS = 'DIRECT_REPORTS', MANAGER = 'MANAGER', PEERS = 'PEERS' }


	/** Share meeting docs card proto. */
	export interface EnterpriseTopazSidekickShareMeetingDocsCardProto {

		/** Documents to share for the given meeting. */
		document?: Array<EnterpriseTopazSidekickCommonDocument>;

		/** An AgendaEntry, e.g., a Calendar Event. */
		event?: EnterpriseTopazSidekickAgendaEntry;
	}

	/** Share meeting docs card proto. */
	export interface EnterpriseTopazSidekickShareMeetingDocsCardProtoFormProperties {
	}
	export function CreateEnterpriseTopazSidekickShareMeetingDocsCardProtoFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickShareMeetingDocsCardProtoFormProperties>({
		});

	}

	export interface ThirdPartyGenericCard {

		/** Unique identifier for the card. */
		cardId?: string | null;

		/** Category that the card belongs to. */
		category?: string | null;
		content?: Content;
		context?: Context;

		/** Whether the card can be dismissed. */
		isDismissible?: boolean | null;

		/** Priority of the card, where 0 is the highest priority. */
		priority?: number | null;
	}
	export interface ThirdPartyGenericCardFormProperties {

		/** Unique identifier for the card. */
		cardId: FormControl<string | null | undefined>,

		/** Category that the card belongs to. */
		category: FormControl<string | null | undefined>,

		/** Whether the card can be dismissed. */
		isDismissible: FormControl<boolean | null | undefined>,

		/** Priority of the card, where 0 is the highest priority. */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateThirdPartyGenericCardFormGroup() {
		return new FormGroup<ThirdPartyGenericCardFormProperties>({
			cardId: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			isDismissible: new FormControl<boolean | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EnterpriseTopazSidekickRecentDocumentsCardProto {
		document?: Array<EnterpriseTopazSidekickCommonDocument>;
	}
	export interface EnterpriseTopazSidekickRecentDocumentsCardProtoFormProperties {
	}
	export function CreateEnterpriseTopazSidekickRecentDocumentsCardProtoFormGroup() {
		return new FormGroup<EnterpriseTopazSidekickRecentDocumentsCardProtoFormProperties>({
		});

	}


	/** Used to provide a search operator for enum properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. For example, if you provide no operator for a *priority* enum property with possible values *p0* and *p1*, a query that contains the term *p0* returns items that have *p0* as the value of the *priority* property, as well as any items that contain the string *p0* in other fields. If you provide an operator name for the enum, such as *priority*, then search users can use that operator to refine results to only items that have *p0* as this property's value, with the query *priority:p0*. */
	export interface EnumOperatorOptions {

		/** Indicates the operator name required in the query in order to isolate the enum property. For example, if operatorName is *priority* and the property's name is *priorityVal*, then queries like *priority:<value>* show results only where the value of the property named *priorityVal* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		operatorName?: string | null;
	}

	/** Used to provide a search operator for enum properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. For example, if you provide no operator for a *priority* enum property with possible values *p0* and *p1*, a query that contains the term *p0* returns items that have *p0* as the value of the *priority* property, as well as any items that contain the string *p0* in other fields. If you provide an operator name for the enum, such as *priority*, then search users can use that operator to refine results to only items that have *p0* as this property's value, with the query *priority:p0*. */
	export interface EnumOperatorOptionsFormProperties {

		/** Indicates the operator name required in the query in order to isolate the enum property. For example, if operatorName is *priority* and the property's name is *priorityVal*, then queries like *priority:<value>* show results only where the value of the property named *priorityVal* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		operatorName: FormControl<string | null | undefined>,
	}
	export function CreateEnumOperatorOptionsFormGroup() {
		return new FormGroup<EnumOperatorOptionsFormProperties>({
			operatorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The options for enum properties, which allow you to define a restricted set of strings to match user queries, set rankings for those string values, and define an operator name to be paired with those strings so that users can narrow results to only items with a specific value. For example, for items in a request tracking system with priority information, you could define *p0* as an allowable enum value and tie this enum to the operator name *priority* so that search users could add *priority:p0* to their query to restrict the set of results to only those items indexed with the value *p0*. */
	export interface EnumPropertyOptions {

		/** Used to provide a search operator for enum properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. For example, if you provide no operator for a *priority* enum property with possible values *p0* and *p1*, a query that contains the term *p0* returns items that have *p0* as the value of the *priority* property, as well as any items that contain the string *p0* in other fields. If you provide an operator name for the enum, such as *priority*, then search users can use that operator to refine results to only items that have *p0* as this property's value, with the query *priority:p0*. */
		operatorOptions?: EnumOperatorOptions;

		/** Used to specify the ordered ranking for the enumeration that determines how the integer values provided in the possible EnumValuePairs are used to rank results. If specified, integer values must be provided for all possible EnumValuePair values given for this property. Can only be used if isRepeatable is false. */
		orderedRanking?: EnumPropertyOptionsOrderedRanking | null;

		/** The list of possible values for the enumeration property. All EnumValuePairs must provide a string value. If you specify an integer value for one EnumValuePair, then all possible EnumValuePairs must provide an integer value. Both the string value and integer value must be unique over all possible values. Once set, possible values cannot be removed or modified. If you supply an ordered ranking and think you might insert additional enum values in the future, leave gaps in the initial integer values to allow adding a value in between previously registered values. The maximum number of elements is 100. */
		possibleValues?: Array<EnumValuePair>;
	}

	/** The options for enum properties, which allow you to define a restricted set of strings to match user queries, set rankings for those string values, and define an operator name to be paired with those strings so that users can narrow results to only items with a specific value. For example, for items in a request tracking system with priority information, you could define *p0* as an allowable enum value and tie this enum to the operator name *priority* so that search users could add *priority:p0* to their query to restrict the set of results to only those items indexed with the value *p0*. */
	export interface EnumPropertyOptionsFormProperties {

		/** Used to specify the ordered ranking for the enumeration that determines how the integer values provided in the possible EnumValuePairs are used to rank results. If specified, integer values must be provided for all possible EnumValuePair values given for this property. Can only be used if isRepeatable is false. */
		orderedRanking: FormControl<EnumPropertyOptionsOrderedRanking | null | undefined>,
	}
	export function CreateEnumPropertyOptionsFormGroup() {
		return new FormGroup<EnumPropertyOptionsFormProperties>({
			orderedRanking: new FormControl<EnumPropertyOptionsOrderedRanking | null | undefined>(undefined),
		});

	}

	export enum EnumPropertyOptionsOrderedRanking { NO_ORDER = 'NO_ORDER', ASCENDING = 'ASCENDING', DESCENDING = 'DESCENDING' }


	/** The enumeration value pair defines two things: a required string value and an optional integer value. The string value defines the necessary query term required to retrieve that item, such as *p0* for a priority item. The integer value determines the ranking of that string value relative to other enumerated values for the same property. For example, you might associate *p0* with *0* and define another enum pair such as *p1* and *1*. You must use the integer value in combination with ordered ranking to set the ranking of a given value relative to other enumerated values for the same property name. Here, a ranking order of DESCENDING for *priority* properties results in a ranking boost for items indexed with a value of *p0* compared to items indexed with a value of *p1*. Without a specified ranking order, the integer value has no effect on item ranking. */
	export interface EnumValuePair {

		/** The integer value of the EnumValuePair which must be non-negative. Optional. */
		integerValue?: number | null;

		/** The string value of the EnumValuePair. The maximum length is 32 characters. */
		stringValue?: string | null;
	}

	/** The enumeration value pair defines two things: a required string value and an optional integer value. The string value defines the necessary query term required to retrieve that item, such as *p0* for a priority item. The integer value determines the ranking of that string value relative to other enumerated values for the same property. For example, you might associate *p0* with *0* and define another enum pair such as *p1* and *1*. You must use the integer value in combination with ordered ranking to set the ranking of a given value relative to other enumerated values for the same property name. Here, a ranking order of DESCENDING for *priority* properties results in a ranking boost for items indexed with a value of *p0* compared to items indexed with a value of *p1*. Without a specified ranking order, the integer value has no effect on item ranking. */
	export interface EnumValuePairFormProperties {

		/** The integer value of the EnumValuePair which must be non-negative. Optional. */
		integerValue: FormControl<number | null | undefined>,

		/** The string value of the EnumValuePair. The maximum length is 32 characters. */
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateEnumValuePairFormGroup() {
		return new FormGroup<EnumValuePairFormProperties>({
			integerValue: new FormControl<number | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of enum values. */
	export interface EnumValues {

		/** The maximum allowable length for string values is 32 characters. */
		values?: Array<string>;
	}

	/** List of enum values. */
	export interface EnumValuesFormProperties {
	}
	export function CreateEnumValuesFormGroup() {
		return new FormGroup<EnumValuesFormProperties>({
		});

	}


	/** Error information about the response. */
	export interface ErrorInfo {
		errorMessages?: Array<ErrorMessage>;
	}

	/** Error information about the response. */
	export interface ErrorInfoFormProperties {
	}
	export function CreateErrorInfoFormGroup() {
		return new FormGroup<ErrorInfoFormProperties>({
		});

	}


	/** Error message per source response. */
	export interface ErrorMessage {
		errorMessage?: string | null;

		/** Defines sources for the suggest/search APIs. */
		source?: Source;
	}

	/** Error message per source response. */
	export interface ErrorMessageFormProperties {
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateErrorMessageFormGroup() {
		return new FormGroup<ErrorMessageFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A bucket in a facet is the basic unit of operation. A bucket can comprise either a single value OR a contiguous range of values, depending on the type of the field bucketed. FacetBucket is currently used only for returning the response object. */
	export interface FacetBucket {

		/** Number of results that match the bucket value. Counts are only returned for searches when count accuracy is ensured. Cloud Search does not guarantee facet counts for any query and facet counts might be present only intermittently, even for identical queries. Do not build dependencies on facet count existence; instead use facet ount percentages which are always returned. */
		count?: number | null;

		/** A generic way of expressing filters in a query, which supports two approaches: **1. Setting a ValueFilter.** The name must match an operator_name defined in the schema for your data source. **2. Setting a CompositeFilter.** The filters are evaluated using the logical operator. The top-level operators can only be either an AND or a NOT. AND can appear only at the top-most level. OR can appear only under a top-level AND. */
		filter?: Filter;

		/** Percent of results that match the bucket value. The returned value is between (0-100], and is rounded down to an integer if fractional. If the value is not explicitly returned, it represents a percentage value that rounds to 0. Percentages are returned for all searches, but are an estimate. Because percentages are always returned, you should render percentages instead of counts. */
		percentage?: number | null;

		/** Definition of a single value with generic type. */
		value?: Value;
	}

	/** A bucket in a facet is the basic unit of operation. A bucket can comprise either a single value OR a contiguous range of values, depending on the type of the field bucketed. FacetBucket is currently used only for returning the response object. */
	export interface FacetBucketFormProperties {

		/** Number of results that match the bucket value. Counts are only returned for searches when count accuracy is ensured. Cloud Search does not guarantee facet counts for any query and facet counts might be present only intermittently, even for identical queries. Do not build dependencies on facet count existence; instead use facet ount percentages which are always returned. */
		count: FormControl<number | null | undefined>,

		/** Percent of results that match the bucket value. The returned value is between (0-100], and is rounded down to an integer if fractional. If the value is not explicitly returned, it represents a percentage value that rounds to 0. Percentages are returned for all searches, but are an estimate. Because percentages are always returned, you should render percentages instead of counts. */
		percentage: FormControl<number | null | undefined>,
	}
	export function CreateFacetBucketFormGroup() {
		return new FormGroup<FacetBucketFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies operators to return facet results for. There will be one FacetResult for every source_name/object_type/operator_name combination. */
	export interface FacetOptions {

		/** Used to specify integer faceting options. */
		integerFacetingOptions?: IntegerFacetingOptions;

		/** Maximum number of facet buckets that should be returned for this facet. Defaults to 10. Maximum value is 100. */
		numFacetBuckets?: number | null;

		/** If object_type is set, only those objects of that type will be used to compute facets. If empty, then all objects will be used to compute facets. */
		objectType?: string | null;

		/** The name of the operator chosen for faceting. @see cloudsearch.SchemaPropertyOptions */
		operatorName?: string | null;

		/** Source name to facet on. Format: datasources/{source_id} If empty, all data sources will be used. */
		sourceName?: string | null;
	}

	/** Specifies operators to return facet results for. There will be one FacetResult for every source_name/object_type/operator_name combination. */
	export interface FacetOptionsFormProperties {

		/** Maximum number of facet buckets that should be returned for this facet. Defaults to 10. Maximum value is 100. */
		numFacetBuckets: FormControl<number | null | undefined>,

		/** If object_type is set, only those objects of that type will be used to compute facets. If empty, then all objects will be used to compute facets. */
		objectType: FormControl<string | null | undefined>,

		/** The name of the operator chosen for faceting. @see cloudsearch.SchemaPropertyOptions */
		operatorName: FormControl<string | null | undefined>,

		/** Source name to facet on. Format: datasources/{source_id} If empty, all data sources will be used. */
		sourceName: FormControl<string | null | undefined>,
	}
	export function CreateFacetOptionsFormGroup() {
		return new FormGroup<FacetOptionsFormProperties>({
			numFacetBuckets: new FormControl<number | null | undefined>(undefined),
			objectType: new FormControl<string | null | undefined>(undefined),
			operatorName: new FormControl<string | null | undefined>(undefined),
			sourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used to specify integer faceting options. */
	export interface IntegerFacetingOptions {

		/** Buckets for given integer values should be in strictly ascending order. For example, if values supplied are (1,5,10,100), the following facet buckets will be formed {<1, [1,5), [5-10), [10-100), >=100}. */
		integerBuckets?: Array<string>;
	}

	/** Used to specify integer faceting options. */
	export interface IntegerFacetingOptionsFormProperties {
	}
	export function CreateIntegerFacetingOptionsFormGroup() {
		return new FormGroup<IntegerFacetingOptionsFormProperties>({
		});

	}


	/** Source specific facet response */
	export interface FacetResult {

		/** FacetBuckets for values in response containing at least a single result with the corresponding filter. */
		buckets?: Array<FacetBucket>;

		/** Object type for which facet results are returned. Can be empty. */
		objectType?: string | null;

		/** The name of the operator chosen for faceting. @see cloudsearch.SchemaPropertyOptions */
		operatorName?: string | null;

		/** Source name for which facet results are returned. Will not be empty. */
		sourceName?: string | null;
	}

	/** Source specific facet response */
	export interface FacetResultFormProperties {

		/** Object type for which facet results are returned. Can be empty. */
		objectType: FormControl<string | null | undefined>,

		/** The name of the operator chosen for faceting. @see cloudsearch.SchemaPropertyOptions */
		operatorName: FormControl<string | null | undefined>,

		/** Source name for which facet results are returned. Will not be empty. */
		sourceName: FormControl<string | null | undefined>,
	}
	export function CreateFacetResultFormGroup() {
		return new FormGroup<FacetResultFormProperties>({
			objectType: new FormControl<string | null | undefined>(undefined),
			operatorName: new FormControl<string | null | undefined>(undefined),
			sourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FieldViolation {

		/** The description of the error. */
		description?: string | null;

		/** Path of field with violation. */
		field?: string | null;
	}
	export interface FieldViolationFormProperties {

		/** The description of the error. */
		description: FormControl<string | null | undefined>,

		/** Path of field with violation. */
		field: FormControl<string | null | undefined>,
	}
	export function CreateFieldViolationFormGroup() {
		return new FormGroup<FieldViolationFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicates which freshness property to use when adjusting search ranking for an item. Fresher, more recent dates indicate higher quality. Use the freshness option property that best works with your data. For fileshare documents, last modified time is most relevant. For calendar event data, the time when the event occurs is a more relevant freshness indicator. In this way, calendar events that occur closer to the time of the search query are considered higher quality and ranked accordingly. */
	export interface FreshnessOptions {

		/** The duration after which an object should be considered stale. The default value is 180 days (in seconds). */
		freshnessDuration?: string | null;

		/** This property indicates the freshness level of the object in the index. If set, this property must be a top-level property within the property definitions and it must be a timestamp type or date type. Otherwise, the Indexing API uses updateTime as the freshness indicator. The maximum length is 256 characters. When a property is used to calculate freshness, the value defaults to 2 years from the current time. */
		freshnessProperty?: string | null;
	}

	/** Indicates which freshness property to use when adjusting search ranking for an item. Fresher, more recent dates indicate higher quality. Use the freshness option property that best works with your data. For fileshare documents, last modified time is most relevant. For calendar event data, the time when the event occurs is a more relevant freshness indicator. In this way, calendar events that occur closer to the time of the search query are considered higher quality and ranked accordingly. */
	export interface FreshnessOptionsFormProperties {

		/** The duration after which an object should be considered stale. The default value is 180 days (in seconds). */
		freshnessDuration: FormControl<string | null | undefined>,

		/** This property indicates the freshness level of the object in the index. If set, this property must be a top-level property within the property definitions and it must be a timestamp type or date type. Otherwise, the Indexing API uses updateTime as the freshness indicator. The maximum length is 256 characters. When a property is used to calculate freshness, the value defaults to 2 years from the current time. */
		freshnessProperty: FormControl<string | null | undefined>,
	}
	export function CreateFreshnessOptionsFormGroup() {
		return new FormGroup<FreshnessOptionsFormProperties>({
			freshnessDuration: new FormControl<string | null | undefined>(undefined),
			freshnessProperty: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCustomerIndexStatsResponse {

		/** Average item count for the given date range for which billing is done. */
		averageIndexedItemCount?: string | null;

		/** Summary of indexed item counts, one for each day in the requested range. */
		stats?: Array<CustomerIndexStats>;
	}
	export interface GetCustomerIndexStatsResponseFormProperties {

		/** Average item count for the given date range for which billing is done. */
		averageIndexedItemCount: FormControl<string | null | undefined>,
	}
	export function CreateGetCustomerIndexStatsResponseFormGroup() {
		return new FormGroup<GetCustomerIndexStatsResponseFormProperties>({
			averageIndexedItemCount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCustomerQueryStatsResponse {
		stats?: Array<CustomerQueryStats>;

		/** Total successful query count (status code 200) for the given date range. */
		totalQueryCount?: string | null;
	}
	export interface GetCustomerQueryStatsResponseFormProperties {

		/** Total successful query count (status code 200) for the given date range. */
		totalQueryCount: FormControl<string | null | undefined>,
	}
	export function CreateGetCustomerQueryStatsResponseFormGroup() {
		return new FormGroup<GetCustomerQueryStatsResponseFormProperties>({
			totalQueryCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response format for search application stats for a customer. */
	export interface GetCustomerSearchApplicationStatsResponse {

		/** Average search application count for the given date range. */
		averageSearchApplicationCount?: string | null;

		/** Search application stats by date. */
		stats?: Array<CustomerSearchApplicationStats>;
	}

	/** Response format for search application stats for a customer. */
	export interface GetCustomerSearchApplicationStatsResponseFormProperties {

		/** Average search application count for the given date range. */
		averageSearchApplicationCount: FormControl<string | null | undefined>,
	}
	export function CreateGetCustomerSearchApplicationStatsResponseFormGroup() {
		return new FormGroup<GetCustomerSearchApplicationStatsResponseFormProperties>({
			averageSearchApplicationCount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCustomerSessionStatsResponse {
		stats?: Array<CustomerSessionStats>;
	}
	export interface GetCustomerSessionStatsResponseFormProperties {
	}
	export function CreateGetCustomerSessionStatsResponseFormGroup() {
		return new FormGroup<GetCustomerSessionStatsResponseFormProperties>({
		});

	}

	export interface GetCustomerUserStatsResponse {
		stats?: Array<CustomerUserStats>;
	}
	export interface GetCustomerUserStatsResponseFormProperties {
	}
	export function CreateGetCustomerUserStatsResponseFormGroup() {
		return new FormGroup<GetCustomerUserStatsResponseFormProperties>({
		});

	}

	export interface GetDataSourceIndexStatsResponse {

		/** Average item count for the given date range for which billing is done. */
		averageIndexedItemCount?: string | null;

		/** Summary of indexed item counts, one for each day in the requested range. */
		stats?: Array<DataSourceIndexStats>;
	}
	export interface GetDataSourceIndexStatsResponseFormProperties {

		/** Average item count for the given date range for which billing is done. */
		averageIndexedItemCount: FormControl<string | null | undefined>,
	}
	export function CreateGetDataSourceIndexStatsResponseFormGroup() {
		return new FormGroup<GetDataSourceIndexStatsResponseFormProperties>({
			averageIndexedItemCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response format for getting query stats for a search application between given dates. */
	export interface GetSearchApplicationQueryStatsResponse {

		/** Query stats per date for a search application. */
		stats?: Array<SearchApplicationQueryStats>;

		/** Total successful query count (status code 200) for the given date range. */
		totalQueryCount?: string | null;
	}

	/** Response format for getting query stats for a search application between given dates. */
	export interface GetSearchApplicationQueryStatsResponseFormProperties {

		/** Total successful query count (status code 200) for the given date range. */
		totalQueryCount: FormControl<string | null | undefined>,
	}
	export function CreateGetSearchApplicationQueryStatsResponseFormGroup() {
		return new FormGroup<GetSearchApplicationQueryStatsResponseFormProperties>({
			totalQueryCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Search application level query stats per date */
	export interface SearchApplicationQueryStats {

		/** Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999. */
		date?: Date;
		queryCountByStatus?: Array<QueryCountByStatus>;
	}

	/** Search application level query stats per date */
	export interface SearchApplicationQueryStatsFormProperties {
	}
	export function CreateSearchApplicationQueryStatsFormGroup() {
		return new FormGroup<SearchApplicationQueryStatsFormProperties>({
		});

	}

	export interface GetSearchApplicationSessionStatsResponse {
		stats?: Array<SearchApplicationSessionStats>;
	}
	export interface GetSearchApplicationSessionStatsResponseFormProperties {
	}
	export function CreateGetSearchApplicationSessionStatsResponseFormGroup() {
		return new FormGroup<GetSearchApplicationSessionStatsResponseFormProperties>({
		});

	}

	export interface SearchApplicationSessionStats {

		/** Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999. */
		date?: Date;

		/** The count of search sessions on the day */
		searchSessionsCount?: string | null;
	}
	export interface SearchApplicationSessionStatsFormProperties {

		/** The count of search sessions on the day */
		searchSessionsCount: FormControl<string | null | undefined>,
	}
	export function CreateSearchApplicationSessionStatsFormGroup() {
		return new FormGroup<SearchApplicationSessionStatsFormProperties>({
			searchSessionsCount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSearchApplicationUserStatsResponse {
		stats?: Array<SearchApplicationUserStats>;
	}
	export interface GetSearchApplicationUserStatsResponseFormProperties {
	}
	export function CreateGetSearchApplicationUserStatsResponseFormGroup() {
		return new FormGroup<GetSearchApplicationUserStatsResponseFormProperties>({
		});

	}

	export interface SearchApplicationUserStats {

		/** Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999. */
		date?: Date;

		/** The count of unique active users in the past one day */
		oneDayActiveUsersCount?: string | null;

		/** The count of unique active users in the past seven days */
		sevenDaysActiveUsersCount?: string | null;

		/** The count of unique active users in the past thirty days */
		thirtyDaysActiveUsersCount?: string | null;
	}
	export interface SearchApplicationUserStatsFormProperties {

		/** The count of unique active users in the past one day */
		oneDayActiveUsersCount: FormControl<string | null | undefined>,

		/** The count of unique active users in the past seven days */
		sevenDaysActiveUsersCount: FormControl<string | null | undefined>,

		/** The count of unique active users in the past thirty days */
		thirtyDaysActiveUsersCount: FormControl<string | null | undefined>,
	}
	export function CreateSearchApplicationUserStatsFormGroup() {
		return new FormGroup<SearchApplicationUserStatsFormProperties>({
			oneDayActiveUsersCount: new FormControl<string | null | undefined>(undefined),
			sevenDaysActiveUsersCount: new FormControl<string | null | undefined>(undefined),
			thirtyDaysActiveUsersCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used to provide a search operator for html properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. */
	export interface HtmlOperatorOptions {

		/** Indicates the operator name required in the query in order to isolate the html property. For example, if operatorName is *subject* and the property's name is *subjectLine*, then queries like *subject:<value>* show results only where the value of the property named *subjectLine* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator return all items where *<value>* matches the value of any html properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		operatorName?: string | null;
	}

	/** Used to provide a search operator for html properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. */
	export interface HtmlOperatorOptionsFormProperties {

		/** Indicates the operator name required in the query in order to isolate the html property. For example, if operatorName is *subject* and the property's name is *subjectLine*, then queries like *subject:<value>* show results only where the value of the property named *subjectLine* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator return all items where *<value>* matches the value of any html properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		operatorName: FormControl<string | null | undefined>,
	}
	export function CreateHtmlOperatorOptionsFormGroup() {
		return new FormGroup<HtmlOperatorOptionsFormProperties>({
			operatorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The options for html properties. */
	export interface HtmlPropertyOptions {

		/** Used to provide a search operator for html properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. */
		operatorOptions?: HtmlOperatorOptions;
		retrievalImportance?: RetrievalImportance;
	}

	/** The options for html properties. */
	export interface HtmlPropertyOptionsFormProperties {
	}
	export function CreateHtmlPropertyOptionsFormGroup() {
		return new FormGroup<HtmlPropertyOptionsFormProperties>({
		});

	}

	export interface RetrievalImportance {

		/** Indicates the ranking importance given to property when it is matched during retrieval. Once set, the token importance of a property cannot be changed. */
		importance?: RetrievalImportanceImportance | null;
	}
	export interface RetrievalImportanceFormProperties {

		/** Indicates the ranking importance given to property when it is matched during retrieval. Once set, the token importance of a property cannot be changed. */
		importance: FormControl<RetrievalImportanceImportance | null | undefined>,
	}
	export function CreateRetrievalImportanceFormGroup() {
		return new FormGroup<RetrievalImportanceFormProperties>({
			importance: new FormControl<RetrievalImportanceImportance | null | undefined>(undefined),
		});

	}

	export enum RetrievalImportanceImportance { DEFAULT = 'DEFAULT', HIGHEST = 'HIGHEST', HIGH = 'HIGH', LOW = 'LOW', NONE = 'NONE' }


	/** List of html values. */
	export interface HtmlValues {

		/** The maximum allowable length for html values is 2048 characters. */
		values?: Array<string>;
	}

	/** List of html values. */
	export interface HtmlValuesFormProperties {
	}
	export function CreateHtmlValuesFormGroup() {
		return new FormGroup<HtmlValuesFormProperties>({
		});

	}

	export interface IndexItemOptions {

		/** Specifies if the index request should allow Google Workspace principals that do not exist or are deleted. */
		allowUnknownGsuitePrincipals?: boolean | null;
	}
	export interface IndexItemOptionsFormProperties {

		/** Specifies if the index request should allow Google Workspace principals that do not exist or are deleted. */
		allowUnknownGsuitePrincipals: FormControl<boolean | null | undefined>,
	}
	export function CreateIndexItemOptionsFormGroup() {
		return new FormGroup<IndexItemOptionsFormProperties>({
			allowUnknownGsuitePrincipals: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface IndexItemRequest {

		/** The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} */
		connectorName?: string | null;

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions;
		indexItemOptions?: IndexItemOptions;

		/** Represents a single object that is an item in the search index, such as a file, folder, or a database record. */
		item?: Item;

		/** Required. The RequestMode for this request. */
		mode?: IndexItemRequestMode | null;
	}
	export interface IndexItemRequestFormProperties {

		/** The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} */
		connectorName: FormControl<string | null | undefined>,

		/** Required. The RequestMode for this request. */
		mode: FormControl<IndexItemRequestMode | null | undefined>,
	}
	export function CreateIndexItemRequestFormGroup() {
		return new FormGroup<IndexItemRequestFormProperties>({
			connectorName: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<IndexItemRequestMode | null | undefined>(undefined),
		});

	}


	/** Represents a single object that is an item in the search index, such as a file, folder, or a database record. */
	export interface Item {

		/** Access control list information for the item. For more information see [Map ACLs](https://developers.google.com/cloud-search/docs/guides/acls). */
		acl?: ItemAcl;

		/** Content of an item to be indexed and surfaced by Cloud Search. Only UTF-8 encoded strings are allowed as inlineContent. If the content is uploaded and not binary, it must be UTF-8 encoded. */
		content?: ItemContent;

		/** The type for this item. */
		itemType?: ItemItemType | null;

		/** Available metadata fields for the item. */
		metadata?: ItemMetadata;

		/** The name of the Item. Format: datasources/{source_id}/items/{item_id} This is a required field. The maximum length is 1536 characters. */
		name?: string | null;

		/** Additional state connector can store for this item. The maximum length is 10000 bytes. */
		payload?: string | null;

		/** Queue this item belongs to. The maximum length is 100 characters. */
		queue?: string | null;

		/** This contains item's status and any errors. */
		status?: ItemStatus;

		/** Available structured data fields for the item. */
		structuredData?: ItemStructuredData;

		/** Required. The indexing system stores the version from the datasource as a byte string and compares the Item version in the index to the version of the queued Item using lexical ordering. Cloud Search Indexing won't index or delete any queued item with a version value that is less than or equal to the version of the currently indexed item. The maximum length for this field is 1024 bytes. For information on how item version affects the deletion process, refer to [Handle revisions after manual deletes](https://developers.google.com/cloud-search/docs/guides/operations). */
		version?: string | null;
	}

	/** Represents a single object that is an item in the search index, such as a file, folder, or a database record. */
	export interface ItemFormProperties {

		/** The type for this item. */
		itemType: FormControl<ItemItemType | null | undefined>,

		/** The name of the Item. Format: datasources/{source_id}/items/{item_id} This is a required field. The maximum length is 1536 characters. */
		name: FormControl<string | null | undefined>,

		/** Additional state connector can store for this item. The maximum length is 10000 bytes. */
		payload: FormControl<string | null | undefined>,

		/** Queue this item belongs to. The maximum length is 100 characters. */
		queue: FormControl<string | null | undefined>,

		/** Required. The indexing system stores the version from the datasource as a byte string and compares the Item version in the index to the version of the queued Item using lexical ordering. Cloud Search Indexing won't index or delete any queued item with a version value that is less than or equal to the version of the currently indexed item. The maximum length for this field is 1024 bytes. For information on how item version affects the deletion process, refer to [Handle revisions after manual deletes](https://developers.google.com/cloud-search/docs/guides/operations). */
		version: FormControl<string | null | undefined>,
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			itemType: new FormControl<ItemItemType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			payload: new FormControl<string | null | undefined>(undefined),
			queue: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Access control list information for the item. For more information see [Map ACLs](https://developers.google.com/cloud-search/docs/guides/acls). */
	export interface ItemAcl {

		/** Sets the type of access rules to apply when an item inherits its ACL from a parent. This should always be set in tandem with the inheritAclFrom field. Also, when the inheritAclFrom field is set, this field should be set to a valid AclInheritanceType. */
		aclInheritanceType?: ItemAclAclInheritanceType | null;

		/** List of principals who are explicitly denied access to the item in search results. While principals are denied access by default, use denied readers to handle exceptions and override the list allowed readers. The maximum number of elements is 100. */
		deniedReaders?: Array<Principal>;

		/** The name of the item to inherit the Access Permission List (ACL) from. Note: ACL inheritance *only* provides access permissions to child items and does not define structural relationships, nor does it provide convenient ways to delete large groups of items. Deleting an ACL parent from the index only alters the access permissions of child items that reference the parent in the inheritAclFrom field. The item is still in the index, but may not visible in search results. By contrast, deletion of a container item also deletes all items that reference the container via the containerName field. The maximum length for this field is 1536 characters. */
		inheritAclFrom?: string | null;

		/** Optional. List of owners for the item. This field has no bearing on document access permissions. It does, however, offer a slight ranking boosts items where the querying user is an owner. The maximum number of elements is 5. */
		owners?: Array<Principal>;

		/** List of principals who are allowed to see the item in search results. Optional if inheriting permissions from another item or if the item is not intended to be visible, such as virtual containers. The maximum number of elements is 1000. */
		readers?: Array<Principal>;
	}

	/** Access control list information for the item. For more information see [Map ACLs](https://developers.google.com/cloud-search/docs/guides/acls). */
	export interface ItemAclFormProperties {

		/** Sets the type of access rules to apply when an item inherits its ACL from a parent. This should always be set in tandem with the inheritAclFrom field. Also, when the inheritAclFrom field is set, this field should be set to a valid AclInheritanceType. */
		aclInheritanceType: FormControl<ItemAclAclInheritanceType | null | undefined>,

		/** The name of the item to inherit the Access Permission List (ACL) from. Note: ACL inheritance *only* provides access permissions to child items and does not define structural relationships, nor does it provide convenient ways to delete large groups of items. Deleting an ACL parent from the index only alters the access permissions of child items that reference the parent in the inheritAclFrom field. The item is still in the index, but may not visible in search results. By contrast, deletion of a container item also deletes all items that reference the container via the containerName field. The maximum length for this field is 1536 characters. */
		inheritAclFrom: FormControl<string | null | undefined>,
	}
	export function CreateItemAclFormGroup() {
		return new FormGroup<ItemAclFormProperties>({
			aclInheritanceType: new FormControl<ItemAclAclInheritanceType | null | undefined>(undefined),
			inheritAclFrom: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ItemAclAclInheritanceType { NOT_APPLICABLE = 'NOT_APPLICABLE', CHILD_OVERRIDE = 'CHILD_OVERRIDE', PARENT_OVERRIDE = 'PARENT_OVERRIDE', BOTH_PERMIT = 'BOTH_PERMIT' }


	/** Reference to a user, group, or domain. */
	export interface Principal {

		/** This principal is a group identified using an external identity. The name field must specify the group resource name with this format: identitysources/{source_id}/groups/{ID} */
		groupResourceName?: string | null;
		gsuitePrincipal?: GSuitePrincipal;

		/** This principal is a user identified using an external identity. The name field must specify the user resource name with this format: identitysources/{source_id}/users/{ID} */
		userResourceName?: string | null;
	}

	/** Reference to a user, group, or domain. */
	export interface PrincipalFormProperties {

		/** This principal is a group identified using an external identity. The name field must specify the group resource name with this format: identitysources/{source_id}/groups/{ID} */
		groupResourceName: FormControl<string | null | undefined>,

		/** This principal is a user identified using an external identity. The name field must specify the user resource name with this format: identitysources/{source_id}/users/{ID} */
		userResourceName: FormControl<string | null | undefined>,
	}
	export function CreatePrincipalFormGroup() {
		return new FormGroup<PrincipalFormProperties>({
			groupResourceName: new FormControl<string | null | undefined>(undefined),
			userResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Content of an item to be indexed and surfaced by Cloud Search. Only UTF-8 encoded strings are allowed as inlineContent. If the content is uploaded and not binary, it must be UTF-8 encoded. */
	export interface ItemContent {

		/** Represents an upload session reference. This reference is created via upload method. This reference is valid for 30 days after its creation. Updating of item content may refer to this uploaded content via contentDataRef. */
		contentDataRef?: UploadItemRef;
		contentFormat?: ItemContentContentFormat | null;

		/** Hashing info calculated and provided by the API client for content. Can be used with the items.push method to calculate modified state. The maximum length is 2048 characters. */
		hash?: string | null;

		/** Content that is supplied inlined within the update method. The maximum length is 102400 bytes (100 KiB). */
		inlineContent?: string | null;
	}

	/** Content of an item to be indexed and surfaced by Cloud Search. Only UTF-8 encoded strings are allowed as inlineContent. If the content is uploaded and not binary, it must be UTF-8 encoded. */
	export interface ItemContentFormProperties {
		contentFormat: FormControl<ItemContentContentFormat | null | undefined>,

		/** Hashing info calculated and provided by the API client for content. Can be used with the items.push method to calculate modified state. The maximum length is 2048 characters. */
		hash: FormControl<string | null | undefined>,

		/** Content that is supplied inlined within the update method. The maximum length is 102400 bytes (100 KiB). */
		inlineContent: FormControl<string | null | undefined>,
	}
	export function CreateItemContentFormGroup() {
		return new FormGroup<ItemContentFormProperties>({
			contentFormat: new FormControl<ItemContentContentFormat | null | undefined>(undefined),
			hash: new FormControl<string | null | undefined>(undefined),
			inlineContent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an upload session reference. This reference is created via upload method. This reference is valid for 30 days after its creation. Updating of item content may refer to this uploaded content via contentDataRef. */
	export interface UploadItemRef {

		/** The name of the content reference. The maximum length is 2048 characters. */
		name?: string | null;
	}

	/** Represents an upload session reference. This reference is created via upload method. This reference is valid for 30 days after its creation. Updating of item content may refer to this uploaded content via contentDataRef. */
	export interface UploadItemRefFormProperties {

		/** The name of the content reference. The maximum length is 2048 characters. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUploadItemRefFormGroup() {
		return new FormGroup<UploadItemRefFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ItemContentContentFormat { UNSPECIFIED = 'UNSPECIFIED', HTML = 'HTML', TEXT = 'TEXT', RAW = 'RAW' }

	export enum ItemItemType { UNSPECIFIED = 'UNSPECIFIED', CONTENT_ITEM = 'CONTENT_ITEM', CONTAINER_ITEM = 'CONTAINER_ITEM', VIRTUAL_CONTAINER_ITEM = 'VIRTUAL_CONTAINER_ITEM' }


	/** Available metadata fields for the item. */
	export interface ItemMetadata {

		/** The name of the container for this item. Deletion of the container item leads to automatic deletion of this item. Note: ACLs are not inherited from a container item. To provide ACL inheritance for an item, use the inheritAclFrom field. The maximum length is 1536 characters. */
		containerName?: string | null;

		/** The BCP-47 language code for the item, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. The maximum length is 32 characters. */
		contentLanguage?: string | null;

		/** A set of named attributes associated with the item. This can be used for influencing the ranking of the item based on the context in the request. The maximum number of elements is 10. */
		contextAttributes?: Array<ContextAttribute>;

		/** The time when the item was created in the source repository. */
		createTime?: string | null;

		/** Hashing value provided by the API caller. This can be used with the items.push method to calculate modified state. The maximum length is 2048 characters. */
		hash?: string | null;

		/** A list of interactions for the item. Interactions are used to improve Search quality, but are not exposed to end users. The maximum number of elements is 1000. */
		interactions?: Array<Interaction>;

		/** Additional keywords or phrases that should match the item. Used internally for user generated content. The maximum number of elements is 100. The maximum length is 8192 characters. */
		keywords?: Array<string>;

		/** The original mime-type of ItemContent.content in the source repository. The maximum length is 256 characters. */
		mimeType?: string | null;

		/** The type of the item. This should correspond to the name of an object definition in the schema registered for the data source. For example, if the schema for the data source contains an object definition with name 'document', then item indexing requests for objects of that type should set objectType to 'document'. The maximum length is 256 characters. */
		objectType?: string | null;

		/** Additional search quality metadata of the item. */
		searchQualityMetadata?: SearchQualityMetadata;

		/** Link to the source repository serving the data. Seach results apply this link to the title. Whitespace or special characters may cause Cloud Seach result links to trigger a redirect notice; to avoid this, encode the URL. The maximum length is 2048 characters. */
		sourceRepositoryUrl?: string | null;

		/** The title of the item. If given, this will be the displayed title of the Search result. The maximum length is 2048 characters. */
		title?: string | null;

		/** The time when the item was last modified in the source repository. */
		updateTime?: string | null;
	}

	/** Available metadata fields for the item. */
	export interface ItemMetadataFormProperties {

		/** The name of the container for this item. Deletion of the container item leads to automatic deletion of this item. Note: ACLs are not inherited from a container item. To provide ACL inheritance for an item, use the inheritAclFrom field. The maximum length is 1536 characters. */
		containerName: FormControl<string | null | undefined>,

		/** The BCP-47 language code for the item, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. The maximum length is 32 characters. */
		contentLanguage: FormControl<string | null | undefined>,

		/** The time when the item was created in the source repository. */
		createTime: FormControl<string | null | undefined>,

		/** Hashing value provided by the API caller. This can be used with the items.push method to calculate modified state. The maximum length is 2048 characters. */
		hash: FormControl<string | null | undefined>,

		/** The original mime-type of ItemContent.content in the source repository. The maximum length is 256 characters. */
		mimeType: FormControl<string | null | undefined>,

		/** The type of the item. This should correspond to the name of an object definition in the schema registered for the data source. For example, if the schema for the data source contains an object definition with name 'document', then item indexing requests for objects of that type should set objectType to 'document'. The maximum length is 256 characters. */
		objectType: FormControl<string | null | undefined>,

		/** Link to the source repository serving the data. Seach results apply this link to the title. Whitespace or special characters may cause Cloud Seach result links to trigger a redirect notice; to avoid this, encode the URL. The maximum length is 2048 characters. */
		sourceRepositoryUrl: FormControl<string | null | undefined>,

		/** The title of the item. If given, this will be the displayed title of the Search result. The maximum length is 2048 characters. */
		title: FormControl<string | null | undefined>,

		/** The time when the item was last modified in the source repository. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateItemMetadataFormGroup() {
		return new FormGroup<ItemMetadataFormProperties>({
			containerName: new FormControl<string | null | undefined>(undefined),
			contentLanguage: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			hash: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			objectType: new FormControl<string | null | undefined>(undefined),
			sourceRepositoryUrl: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an interaction between a user and an item. */
	export interface Interaction {

		/** The time when the user acted on the item. If multiple actions of the same type exist for a single user, only the most recent action is recorded. */
		interactionTime?: string | null;

		/** Reference to a user, group, or domain. */
		principal?: Principal;
		type?: InteractionType | null;
	}

	/** Represents an interaction between a user and an item. */
	export interface InteractionFormProperties {

		/** The time when the user acted on the item. If multiple actions of the same type exist for a single user, only the most recent action is recorded. */
		interactionTime: FormControl<string | null | undefined>,
		type: FormControl<InteractionType | null | undefined>,
	}
	export function CreateInteractionFormGroup() {
		return new FormGroup<InteractionFormProperties>({
			interactionTime: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<InteractionType | null | undefined>(undefined),
		});

	}

	export enum InteractionType { UNSPECIFIED = 'UNSPECIFIED', VIEW = 'VIEW', EDIT = 'EDIT' }


	/** Additional search quality metadata of the item. */
	export interface SearchQualityMetadata {

		/** An indication of the quality of the item, used to influence search quality. Value should be between 0.0 (lowest quality) and 1.0 (highest quality). The default value is 0.0. */
		quality?: number | null;
	}

	/** Additional search quality metadata of the item. */
	export interface SearchQualityMetadataFormProperties {

		/** An indication of the quality of the item, used to influence search quality. Value should be between 0.0 (lowest quality) and 1.0 (highest quality). The default value is 0.0. */
		quality: FormControl<number | null | undefined>,
	}
	export function CreateSearchQualityMetadataFormGroup() {
		return new FormGroup<SearchQualityMetadataFormProperties>({
			quality: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This contains item's status and any errors. */
	export interface ItemStatus {

		/** Status code. */
		code?: ItemCountByStatusStatusCode | null;

		/** Error details in case the item is in ERROR state. */
		processingErrors?: Array<ProcessingError>;

		/** Repository error reported by connector. */
		repositoryErrors?: Array<RepositoryError>;
	}

	/** This contains item's status and any errors. */
	export interface ItemStatusFormProperties {

		/** Status code. */
		code: FormControl<ItemCountByStatusStatusCode | null | undefined>,
	}
	export function CreateItemStatusFormGroup() {
		return new FormGroup<ItemStatusFormProperties>({
			code: new FormControl<ItemCountByStatusStatusCode | null | undefined>(undefined),
		});

	}

	export interface ProcessingError {

		/** Error code indicating the nature of the error. */
		code?: ProcessingErrorCode | null;

		/** The description of the error. */
		errorMessage?: string | null;

		/** In case the item fields are invalid, this field contains the details about the validation errors. */
		fieldViolations?: Array<FieldViolation>;
	}
	export interface ProcessingErrorFormProperties {

		/** Error code indicating the nature of the error. */
		code: FormControl<ProcessingErrorCode | null | undefined>,

		/** The description of the error. */
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateProcessingErrorFormGroup() {
		return new FormGroup<ProcessingErrorFormProperties>({
			code: new FormControl<ProcessingErrorCode | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProcessingErrorCode { PROCESSING_ERROR_CODE_UNSPECIFIED = 'PROCESSING_ERROR_CODE_UNSPECIFIED', MALFORMED_REQUEST = 'MALFORMED_REQUEST', UNSUPPORTED_CONTENT_FORMAT = 'UNSUPPORTED_CONTENT_FORMAT', INDIRECT_BROKEN_ACL = 'INDIRECT_BROKEN_ACL', ACL_CYCLE = 'ACL_CYCLE' }


	/** Errors when the connector is communicating to the source repository. */
	export interface RepositoryError {

		/** Message that describes the error. The maximum allowable length of the message is 8192 characters. */
		errorMessage?: string | null;

		/** Error codes. Matches the definition of HTTP status codes. */
		httpStatusCode?: number | null;

		/** The type of error. */
		type?: RepositoryErrorType | null;
	}

	/** Errors when the connector is communicating to the source repository. */
	export interface RepositoryErrorFormProperties {

		/** Message that describes the error. The maximum allowable length of the message is 8192 characters. */
		errorMessage: FormControl<string | null | undefined>,

		/** Error codes. Matches the definition of HTTP status codes. */
		httpStatusCode: FormControl<number | null | undefined>,

		/** The type of error. */
		type: FormControl<RepositoryErrorType | null | undefined>,
	}
	export function CreateRepositoryErrorFormGroup() {
		return new FormGroup<RepositoryErrorFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
			httpStatusCode: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<RepositoryErrorType | null | undefined>(undefined),
		});

	}

	export enum RepositoryErrorType { UNKNOWN = 'UNKNOWN', NETWORK_ERROR = 'NETWORK_ERROR', DNS_ERROR = 'DNS_ERROR', CONNECTION_ERROR = 'CONNECTION_ERROR', AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR', AUTHORIZATION_ERROR = 'AUTHORIZATION_ERROR', SERVER_ERROR = 'SERVER_ERROR', QUOTA_EXCEEDED = 'QUOTA_EXCEEDED', SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE', CLIENT_ERROR = 'CLIENT_ERROR' }


	/** Available structured data fields for the item. */
	export interface ItemStructuredData {

		/** Hashing value provided by the API caller. This can be used with the items.push method to calculate modified state. The maximum length is 2048 characters. */
		hash?: string | null;

		/** A structured data object consisting of named properties. */
		object?: StructuredDataObject;
	}

	/** Available structured data fields for the item. */
	export interface ItemStructuredDataFormProperties {

		/** Hashing value provided by the API caller. This can be used with the items.push method to calculate modified state. The maximum length is 2048 characters. */
		hash: FormControl<string | null | undefined>,
	}
	export function CreateItemStructuredDataFormGroup() {
		return new FormGroup<ItemStructuredDataFormProperties>({
			hash: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structured data object consisting of named properties. */
	export interface StructuredDataObject {

		/** The properties for the object. The maximum number of elements is 1000. */
		properties?: Array<NamedProperty>;
	}

	/** A structured data object consisting of named properties. */
	export interface StructuredDataObjectFormProperties {
	}
	export function CreateStructuredDataObjectFormGroup() {
		return new FormGroup<StructuredDataObjectFormProperties>({
		});

	}


	/** A typed name-value pair for structured data. The type of the value should be the same as the registered type for the `name` property in the object definition of `objectType`. */
	export interface NamedProperty {
		booleanValue?: boolean | null;

		/** List of date values. */
		dateValues?: DateValues;

		/** List of double values. */
		doubleValues?: DoubleValues;

		/** List of enum values. */
		enumValues?: EnumValues;

		/** List of html values. */
		htmlValues?: HtmlValues;

		/** List of integer values. */
		integerValues?: IntegerValues;

		/** The name of the property. This name should correspond to the name of the property that was registered for object definition in the schema. The maximum allowable length for this property is 256 characters. */
		name?: string | null;

		/** List of object values. */
		objectValues?: ObjectValues;

		/** List of text values. */
		textValues?: TextValues;

		/** List of timestamp values. */
		timestampValues?: TimestampValues;
	}

	/** A typed name-value pair for structured data. The type of the value should be the same as the registered type for the `name` property in the object definition of `objectType`. */
	export interface NamedPropertyFormProperties {
		booleanValue: FormControl<boolean | null | undefined>,

		/** The name of the property. This name should correspond to the name of the property that was registered for object definition in the schema. The maximum allowable length for this property is 256 characters. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateNamedPropertyFormGroup() {
		return new FormGroup<NamedPropertyFormProperties>({
			booleanValue: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of integer values. */
	export interface IntegerValues {
		values?: Array<string>;
	}

	/** List of integer values. */
	export interface IntegerValuesFormProperties {
	}
	export function CreateIntegerValuesFormGroup() {
		return new FormGroup<IntegerValuesFormProperties>({
		});

	}


	/** List of object values. */
	export interface ObjectValues {
		values?: Array<StructuredDataObject>;
	}

	/** List of object values. */
	export interface ObjectValuesFormProperties {
	}
	export function CreateObjectValuesFormGroup() {
		return new FormGroup<ObjectValuesFormProperties>({
		});

	}


	/** List of text values. */
	export interface TextValues {

		/** The maximum allowable length for text values is 2048 characters. */
		values?: Array<string>;
	}

	/** List of text values. */
	export interface TextValuesFormProperties {
	}
	export function CreateTextValuesFormGroup() {
		return new FormGroup<TextValuesFormProperties>({
		});

	}


	/** List of timestamp values. */
	export interface TimestampValues {
		values?: Array<string>;
	}

	/** List of timestamp values. */
	export interface TimestampValuesFormProperties {
	}
	export function CreateTimestampValuesFormGroup() {
		return new FormGroup<TimestampValuesFormProperties>({
		});

	}

	export enum IndexItemRequestMode { UNSPECIFIED = 'UNSPECIFIED', SYNCHRONOUS = 'SYNCHRONOUS', ASYNCHRONOUS = 'ASYNCHRONOUS' }


	/** Request message for `InitializeCustomer` method. */
	export interface InitializeCustomerRequest {
	}

	/** Request message for `InitializeCustomer` method. */
	export interface InitializeCustomerRequestFormProperties {
	}
	export function CreateInitializeCustomerRequestFormGroup() {
		return new FormGroup<InitializeCustomerRequestFormProperties>({
		});

	}


	/** Used to provide a search operator for integer properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. */
	export interface IntegerOperatorOptions {

		/** Indicates the operator name required in the query in order to isolate the integer property using the greater-than operator. For example, if greaterThanOperatorName is *priorityabove* and the property's name is *priorityVal*, then queries like *priorityabove:<value>* show results only where the value of the property named *priorityVal* is greater than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		greaterThanOperatorName?: string | null;

		/** Indicates the operator name required in the query in order to isolate the integer property using the less-than operator. For example, if lessThanOperatorName is *prioritybelow* and the property's name is *priorityVal*, then queries like *prioritybelow:<value>* show results only where the value of the property named *priorityVal* is less than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		lessThanOperatorName?: string | null;

		/** Indicates the operator name required in the query in order to isolate the integer property. For example, if operatorName is *priority* and the property's name is *priorityVal*, then queries like *priority:<value>* show results only where the value of the property named *priorityVal* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		operatorName?: string | null;
	}

	/** Used to provide a search operator for integer properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. */
	export interface IntegerOperatorOptionsFormProperties {

		/** Indicates the operator name required in the query in order to isolate the integer property using the greater-than operator. For example, if greaterThanOperatorName is *priorityabove* and the property's name is *priorityVal*, then queries like *priorityabove:<value>* show results only where the value of the property named *priorityVal* is greater than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		greaterThanOperatorName: FormControl<string | null | undefined>,

		/** Indicates the operator name required in the query in order to isolate the integer property using the less-than operator. For example, if lessThanOperatorName is *prioritybelow* and the property's name is *priorityVal*, then queries like *prioritybelow:<value>* show results only where the value of the property named *priorityVal* is less than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		lessThanOperatorName: FormControl<string | null | undefined>,

		/** Indicates the operator name required in the query in order to isolate the integer property. For example, if operatorName is *priority* and the property's name is *priorityVal*, then queries like *priority:<value>* show results only where the value of the property named *priorityVal* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		operatorName: FormControl<string | null | undefined>,
	}
	export function CreateIntegerOperatorOptionsFormGroup() {
		return new FormGroup<IntegerOperatorOptionsFormProperties>({
			greaterThanOperatorName: new FormControl<string | null | undefined>(undefined),
			lessThanOperatorName: new FormControl<string | null | undefined>(undefined),
			operatorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The options for integer properties. */
	export interface IntegerPropertyOptions {

		/** Used to specify integer faceting options. */
		integerFacetingOptions?: IntegerFacetingOptions;

		/** The maximum value of the property. The minimum and maximum values for the property are used to rank results according to the ordered ranking. Indexing requests with values greater than the maximum are accepted and ranked with the same weight as items indexed with the maximum value. */
		maximumValue?: string | null;

		/** The minimum value of the property. The minimum and maximum values for the property are used to rank results according to the ordered ranking. Indexing requests with values less than the minimum are accepted and ranked with the same weight as items indexed with the minimum value. */
		minimumValue?: string | null;

		/** Used to provide a search operator for integer properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. */
		operatorOptions?: IntegerOperatorOptions;

		/** Used to specify the ordered ranking for the integer. Can only be used if isRepeatable is false. */
		orderedRanking?: EnumPropertyOptionsOrderedRanking | null;
	}

	/** The options for integer properties. */
	export interface IntegerPropertyOptionsFormProperties {

		/** The maximum value of the property. The minimum and maximum values for the property are used to rank results according to the ordered ranking. Indexing requests with values greater than the maximum are accepted and ranked with the same weight as items indexed with the maximum value. */
		maximumValue: FormControl<string | null | undefined>,

		/** The minimum value of the property. The minimum and maximum values for the property are used to rank results according to the ordered ranking. Indexing requests with values less than the minimum are accepted and ranked with the same weight as items indexed with the minimum value. */
		minimumValue: FormControl<string | null | undefined>,

		/** Used to specify the ordered ranking for the integer. Can only be used if isRepeatable is false. */
		orderedRanking: FormControl<EnumPropertyOptionsOrderedRanking | null | undefined>,
	}
	export function CreateIntegerPropertyOptionsFormGroup() {
		return new FormGroup<IntegerPropertyOptionsFormProperties>({
			maximumValue: new FormControl<string | null | undefined>(undefined),
			minimumValue: new FormControl<string | null | undefined>(undefined),
			orderedRanking: new FormControl<EnumPropertyOptionsOrderedRanking | null | undefined>(undefined),
		});

	}

	export interface ListDataSourceResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
		sources?: Array<DataSource>;
	}
	export interface ListDataSourceResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataSourceResponseFormGroup() {
		return new FormGroup<ListDataSourceResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListItemNamesForUnmappedIdentityResponse {
		itemNames?: Array<string>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}
	export interface ListItemNamesForUnmappedIdentityResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListItemNamesForUnmappedIdentityResponseFormGroup() {
		return new FormGroup<ListItemNamesForUnmappedIdentityResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListItemsResponse {
		items?: Array<Item>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}
	export interface ListItemsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListItemsResponseFormGroup() {
		return new FormGroup<ListItemsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
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


	/** List sources response. */
	export interface ListQuerySourcesResponse {
		nextPageToken?: string | null;
		sources?: Array<QuerySource>;
	}

	/** List sources response. */
	export interface ListQuerySourcesResponseFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListQuerySourcesResponseFormGroup() {
		return new FormGroup<ListQuerySourcesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of sources that the user can search using the query API. */
	export interface QuerySource {

		/** Display name of the data source. */
		displayName?: string | null;

		/** List of all operators applicable for this source. */
		operators?: Array<QueryOperator>;

		/** A short name or alias for the source. This value can be used with the 'source' operator. */
		shortName?: string | null;

		/** Defines sources for the suggest/search APIs. */
		source?: Source;
	}

	/** List of sources that the user can search using the query API. */
	export interface QuerySourceFormProperties {

		/** Display name of the data source. */
		displayName: FormControl<string | null | undefined>,

		/** A short name or alias for the source. This value can be used with the 'source' operator. */
		shortName: FormControl<string | null | undefined>,
	}
	export function CreateQuerySourceFormGroup() {
		return new FormGroup<QuerySourceFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			shortName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The definition of a operator that can be used in a Search/Suggest request. */
	export interface QueryOperator {

		/** Display name of the operator */
		displayName?: string | null;

		/** Potential list of values for the opeatror field. This field is only filled when we can safely enumerate all the possible values of this operator. */
		enumValues?: Array<string>;

		/** Indicates the operator name that can be used to isolate the property using the greater-than operator. */
		greaterThanOperatorName?: string | null;

		/** Can this operator be used to get facets. */
		isFacetable?: boolean | null;

		/** Indicates if multiple values can be set for this property. */
		isRepeatable?: boolean | null;

		/** Will the property associated with this facet be returned as part of search results. */
		isReturnable?: boolean | null;

		/** Can this operator be used to sort results. */
		isSortable?: boolean | null;

		/** Can get suggestions for this field. */
		isSuggestable?: boolean | null;

		/** Indicates the operator name that can be used to isolate the property using the less-than operator. */
		lessThanOperatorName?: string | null;

		/** The name of the object corresponding to the operator. This field is only filled for schema-specific operators, and is unset for common operators. */
		objectType?: string | null;

		/** The name of the operator. */
		operatorName?: string | null;

		/** The type of the operator. */
		type?: QueryOperatorType | null;
	}

	/** The definition of a operator that can be used in a Search/Suggest request. */
	export interface QueryOperatorFormProperties {

		/** Display name of the operator */
		displayName: FormControl<string | null | undefined>,

		/** Indicates the operator name that can be used to isolate the property using the greater-than operator. */
		greaterThanOperatorName: FormControl<string | null | undefined>,

		/** Can this operator be used to get facets. */
		isFacetable: FormControl<boolean | null | undefined>,

		/** Indicates if multiple values can be set for this property. */
		isRepeatable: FormControl<boolean | null | undefined>,

		/** Will the property associated with this facet be returned as part of search results. */
		isReturnable: FormControl<boolean | null | undefined>,

		/** Can this operator be used to sort results. */
		isSortable: FormControl<boolean | null | undefined>,

		/** Can get suggestions for this field. */
		isSuggestable: FormControl<boolean | null | undefined>,

		/** Indicates the operator name that can be used to isolate the property using the less-than operator. */
		lessThanOperatorName: FormControl<string | null | undefined>,

		/** The name of the object corresponding to the operator. This field is only filled for schema-specific operators, and is unset for common operators. */
		objectType: FormControl<string | null | undefined>,

		/** The name of the operator. */
		operatorName: FormControl<string | null | undefined>,

		/** The type of the operator. */
		type: FormControl<QueryOperatorType | null | undefined>,
	}
	export function CreateQueryOperatorFormGroup() {
		return new FormGroup<QueryOperatorFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			greaterThanOperatorName: new FormControl<string | null | undefined>(undefined),
			isFacetable: new FormControl<boolean | null | undefined>(undefined),
			isRepeatable: new FormControl<boolean | null | undefined>(undefined),
			isReturnable: new FormControl<boolean | null | undefined>(undefined),
			isSortable: new FormControl<boolean | null | undefined>(undefined),
			isSuggestable: new FormControl<boolean | null | undefined>(undefined),
			lessThanOperatorName: new FormControl<string | null | undefined>(undefined),
			objectType: new FormControl<string | null | undefined>(undefined),
			operatorName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<QueryOperatorType | null | undefined>(undefined),
		});

	}

	export enum QueryOperatorType { UNKNOWN = 'UNKNOWN', INTEGER = 'INTEGER', DOUBLE = 'DOUBLE', TIMESTAMP = 'TIMESTAMP', BOOLEAN = 'BOOLEAN', ENUM = 'ENUM', DATE = 'DATE', TEXT = 'TEXT', HTML = 'HTML' }

	export interface ListSearchApplicationsResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
		searchApplications?: Array<SearchApplication>;
	}
	export interface ListSearchApplicationsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSearchApplicationsResponseFormGroup() {
		return new FormGroup<ListSearchApplicationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SearchApplication */
	export interface SearchApplication {

		/** Retrictions applied to the configurations. The maximum number of elements is 10. */
		dataSourceRestrictions?: Array<DataSourceRestriction>;

		/** The default fields for returning facet results. The sources specified here also have been included in data_source_restrictions above. */
		defaultFacetOptions?: Array<FacetOptions>;
		defaultSortOptions?: SortOptions;

		/** Display name of the Search Application. The maximum length is 300 characters. */
		displayName?: string | null;

		/** Indicates whether audit logging is on/off for requests made for the search application in query APIs. */
		enableAuditLog?: boolean | null;

		/** The name of the Search Application. Format: searchapplications/{application_id}. */
		name?: string | null;

		/** Output only. IDs of the Long Running Operations (LROs) currently running for this schema. Output only field. */
		operationIds?: Array<string>;

		/** Default options to interpret user query. */
		queryInterpretationConfig?: QueryInterpretationConfig;

		/** With each result we should return the URI for its thumbnail (when applicable) */
		returnResultThumbnailUrls?: boolean | null;

		/** Scoring configurations for a source while processing a Search or Suggest request. */
		scoringConfig?: ScoringConfig;

		/** Configuration for a sources specified in data_source_restrictions. */
		sourceConfig?: Array<SourceConfig>;
	}

	/** SearchApplication */
	export interface SearchApplicationFormProperties {

		/** Display name of the Search Application. The maximum length is 300 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Indicates whether audit logging is on/off for requests made for the search application in query APIs. */
		enableAuditLog: FormControl<boolean | null | undefined>,

		/** The name of the Search Application. Format: searchapplications/{application_id}. */
		name: FormControl<string | null | undefined>,

		/** With each result we should return the URI for its thumbnail (when applicable) */
		returnResultThumbnailUrls: FormControl<boolean | null | undefined>,
	}
	export function CreateSearchApplicationFormGroup() {
		return new FormGroup<SearchApplicationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			enableAuditLog: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			returnResultThumbnailUrls: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SortOptions {

		/** The name of the operator corresponding to the field to sort on. The corresponding property must be marked as sortable. */
		operatorName?: string | null;

		/** Ascending is the default sort order */
		sortOrder?: SortOptionsSortOrder | null;
	}
	export interface SortOptionsFormProperties {

		/** The name of the operator corresponding to the field to sort on. The corresponding property must be marked as sortable. */
		operatorName: FormControl<string | null | undefined>,

		/** Ascending is the default sort order */
		sortOrder: FormControl<SortOptionsSortOrder | null | undefined>,
	}
	export function CreateSortOptionsFormGroup() {
		return new FormGroup<SortOptionsFormProperties>({
			operatorName: new FormControl<string | null | undefined>(undefined),
			sortOrder: new FormControl<SortOptionsSortOrder | null | undefined>(undefined),
		});

	}

	export enum SortOptionsSortOrder { ASCENDING = 'ASCENDING', DESCENDING = 'DESCENDING' }


	/** Default options to interpret user query. */
	export interface QueryInterpretationConfig {

		/** Set this flag to disable supplemental results retrieval, setting a flag here will not retrieve supplemental results for queries associated with a given search application. If this flag is set to True, it will take precedence over the option set at Query level. For the default value of False, query level flag will set the correct interpretation for supplemental results. */
		forceDisableSupplementalResults?: boolean | null;

		/** Enable this flag to turn off all internal optimizations like natural language (NL) interpretation of queries, supplemental results retrieval, and usage of synonyms including custom ones. If this flag is set to True, it will take precedence over the option set at Query level. For the default value of False, query level flag will set the correct interpretation for verbatim mode. */
		forceVerbatimMode?: boolean | null;
	}

	/** Default options to interpret user query. */
	export interface QueryInterpretationConfigFormProperties {

		/** Set this flag to disable supplemental results retrieval, setting a flag here will not retrieve supplemental results for queries associated with a given search application. If this flag is set to True, it will take precedence over the option set at Query level. For the default value of False, query level flag will set the correct interpretation for supplemental results. */
		forceDisableSupplementalResults: FormControl<boolean | null | undefined>,

		/** Enable this flag to turn off all internal optimizations like natural language (NL) interpretation of queries, supplemental results retrieval, and usage of synonyms including custom ones. If this flag is set to True, it will take precedence over the option set at Query level. For the default value of False, query level flag will set the correct interpretation for verbatim mode. */
		forceVerbatimMode: FormControl<boolean | null | undefined>,
	}
	export function CreateQueryInterpretationConfigFormGroup() {
		return new FormGroup<QueryInterpretationConfigFormProperties>({
			forceDisableSupplementalResults: new FormControl<boolean | null | undefined>(undefined),
			forceVerbatimMode: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Scoring configurations for a source while processing a Search or Suggest request. */
	export interface ScoringConfig {

		/** Whether to use freshness as a ranking signal. By default, freshness is used as a ranking signal. Note that this setting is not available in the Admin UI. */
		disableFreshness?: boolean | null;

		/** Whether to personalize the results. By default, personal signals will be used to boost results. */
		disablePersonalization?: boolean | null;
	}

	/** Scoring configurations for a source while processing a Search or Suggest request. */
	export interface ScoringConfigFormProperties {

		/** Whether to use freshness as a ranking signal. By default, freshness is used as a ranking signal. Note that this setting is not available in the Admin UI. */
		disableFreshness: FormControl<boolean | null | undefined>,

		/** Whether to personalize the results. By default, personal signals will be used to boost results. */
		disablePersonalization: FormControl<boolean | null | undefined>,
	}
	export function CreateScoringConfigFormGroup() {
		return new FormGroup<ScoringConfigFormProperties>({
			disableFreshness: new FormControl<boolean | null | undefined>(undefined),
			disablePersonalization: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configurations for a source while processing a Search or Suggest request. */
	export interface SourceConfig {

		/** Set search results crowding limits. Crowding is a situation in which multiple results from the same source or host "crowd out" other results, diminishing the quality of search for users. To foster better search quality and source diversity in search results, you can set a condition to reduce repetitive results by source. */
		crowdingConfig?: SourceCrowdingConfig;

		/** Set the scoring configuration. This allows modifying the ranking of results for a source. */
		scoringConfig?: SourceScoringConfig;

		/** Defines sources for the suggest/search APIs. */
		source?: Source;
	}

	/** Configurations for a source while processing a Search or Suggest request. */
	export interface SourceConfigFormProperties {
	}
	export function CreateSourceConfigFormGroup() {
		return new FormGroup<SourceConfigFormProperties>({
		});

	}


	/** Set search results crowding limits. Crowding is a situation in which multiple results from the same source or host "crowd out" other results, diminishing the quality of search for users. To foster better search quality and source diversity in search results, you can set a condition to reduce repetitive results by source. */
	export interface SourceCrowdingConfig {

		/** Maximum number of results allowed from a datasource in a result page as long as results from other sources are not exhausted. Value specified must not be negative. A default value is used if this value is equal to 0. To disable crowding, set the value greater than 100. */
		numResults?: number | null;

		/** Maximum number of suggestions allowed from a source. No limits will be set on results if this value is less than or equal to 0. */
		numSuggestions?: number | null;
	}

	/** Set search results crowding limits. Crowding is a situation in which multiple results from the same source or host "crowd out" other results, diminishing the quality of search for users. To foster better search quality and source diversity in search results, you can set a condition to reduce repetitive results by source. */
	export interface SourceCrowdingConfigFormProperties {

		/** Maximum number of results allowed from a datasource in a result page as long as results from other sources are not exhausted. Value specified must not be negative. A default value is used if this value is equal to 0. To disable crowding, set the value greater than 100. */
		numResults: FormControl<number | null | undefined>,

		/** Maximum number of suggestions allowed from a source. No limits will be set on results if this value is less than or equal to 0. */
		numSuggestions: FormControl<number | null | undefined>,
	}
	export function CreateSourceCrowdingConfigFormGroup() {
		return new FormGroup<SourceCrowdingConfigFormProperties>({
			numResults: new FormControl<number | null | undefined>(undefined),
			numSuggestions: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Set the scoring configuration. This allows modifying the ranking of results for a source. */
	export interface SourceScoringConfig {

		/** Importance of the source. */
		sourceImportance?: SourceScoringConfigSourceImportance | null;
	}

	/** Set the scoring configuration. This allows modifying the ranking of results for a source. */
	export interface SourceScoringConfigFormProperties {

		/** Importance of the source. */
		sourceImportance: FormControl<SourceScoringConfigSourceImportance | null | undefined>,
	}
	export function CreateSourceScoringConfigFormGroup() {
		return new FormGroup<SourceScoringConfigFormProperties>({
			sourceImportance: new FormControl<SourceScoringConfigSourceImportance | null | undefined>(undefined),
		});

	}

	export enum SourceScoringConfigSourceImportance { DEFAULT = 'DEFAULT', LOW = 'LOW', HIGH = 'HIGH' }

	export interface ListUnmappedIdentitiesResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
		unmappedIdentities?: Array<UnmappedIdentity>;
	}
	export interface ListUnmappedIdentitiesResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListUnmappedIdentitiesResponseFormGroup() {
		return new FormGroup<ListUnmappedIdentitiesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnmappedIdentity {

		/** Reference to a user, group, or domain. */
		externalIdentity?: Principal;

		/** The resolution status for the external identity. */
		resolutionStatusCode?: UnmappedIdentityResolutionStatusCode | null;
	}
	export interface UnmappedIdentityFormProperties {

		/** The resolution status for the external identity. */
		resolutionStatusCode: FormControl<UnmappedIdentityResolutionStatusCode | null | undefined>,
	}
	export function CreateUnmappedIdentityFormGroup() {
		return new FormGroup<UnmappedIdentityFormProperties>({
			resolutionStatusCode: new FormControl<UnmappedIdentityResolutionStatusCode | null | undefined>(undefined),
		});

	}

	export enum UnmappedIdentityResolutionStatusCode { CODE_UNSPECIFIED = 'CODE_UNSPECIFIED', NOT_FOUND = 'NOT_FOUND', IDENTITY_SOURCE_NOT_FOUND = 'IDENTITY_SOURCE_NOT_FOUND', IDENTITY_SOURCE_MISCONFIGURED = 'IDENTITY_SOURCE_MISCONFIGURED', TOO_MANY_MAPPINGS_FOUND = 'TOO_MANY_MAPPINGS_FOUND', INTERNAL_ERROR = 'INTERNAL_ERROR' }


	/** Matched range of a snippet [start, end). */
	export interface MatchRange {

		/** End of the match in the snippet. */
		end?: number | null;

		/** Starting position of the match in the snippet. */
		start?: number | null;
	}

	/** Matched range of a snippet [start, end). */
	export interface MatchRangeFormProperties {

		/** End of the match in the snippet. */
		end: FormControl<number | null | undefined>,

		/** Starting position of the match in the snippet. */
		start: FormControl<number | null | undefined>,
	}
	export function CreateMatchRangeFormGroup() {
		return new FormGroup<MatchRangeFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Media resource. */
	export interface Media {

		/** Name of the media resource. */
		resourceName?: string | null;
	}

	/** Media resource. */
	export interface MediaFormProperties {

		/** Name of the media resource. */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateMediaFormGroup() {
		return new FormGroup<MediaFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata of a matched search result. */
	export interface Metadata {

		/** The creation time for this document or object in the search result. */
		createTime?: string | null;
		displayOptions?: ResultDisplayMetadata;

		/** Indexed fields in structured data, returned as a generic named property. */
		fields?: Array<NamedProperty>;

		/** Mime type of the search result. */
		mimeType?: string | null;

		/** Object type of the search result. */
		objectType?: string | null;

		/** Object to represent a person. */
		owner?: Person;

		/** Defines sources for the suggest/search APIs. */
		source?: Source;

		/** The thumbnail URL of the result. */
		thumbnailUrl?: string | null;

		/** The last modified date for the object in the search result. If not set in the item, the value returned here is empty. When `updateTime` is used for calculating freshness and is not set, this value defaults to 2 years from the current time. */
		updateTime?: string | null;
	}

	/** Metadata of a matched search result. */
	export interface MetadataFormProperties {

		/** The creation time for this document or object in the search result. */
		createTime: FormControl<string | null | undefined>,

		/** Mime type of the search result. */
		mimeType: FormControl<string | null | undefined>,

		/** Object type of the search result. */
		objectType: FormControl<string | null | undefined>,

		/** The thumbnail URL of the result. */
		thumbnailUrl: FormControl<string | null | undefined>,

		/** The last modified date for the object in the search result. If not set in the item, the value returned here is empty. When `updateTime` is used for calculating freshness and is not set, this value defaults to 2 years from the current time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateMetadataFormGroup() {
		return new FormGroup<MetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			objectType: new FormControl<string | null | undefined>(undefined),
			thumbnailUrl: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResultDisplayMetadata {

		/** The metalines content to be displayed with the result. */
		metalines?: Array<ResultDisplayLine>;

		/** The display label for the object. */
		objectTypeLabel?: string | null;
	}
	export interface ResultDisplayMetadataFormProperties {

		/** The display label for the object. */
		objectTypeLabel: FormControl<string | null | undefined>,
	}
	export function CreateResultDisplayMetadataFormGroup() {
		return new FormGroup<ResultDisplayMetadataFormProperties>({
			objectTypeLabel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The collection of fields that make up a displayed line */
	export interface ResultDisplayLine {
		fields?: Array<ResultDisplayField>;
	}

	/** The collection of fields that make up a displayed line */
	export interface ResultDisplayLineFormProperties {
	}
	export function CreateResultDisplayLineFormGroup() {
		return new FormGroup<ResultDisplayLineFormProperties>({
		});

	}


	/** Display Fields for Search Results */
	export interface ResultDisplayField {

		/** The display label for the property. */
		label?: string | null;

		/** The operator name of the property. */
		operatorName?: string | null;

		/** A typed name-value pair for structured data. The type of the value should be the same as the registered type for the `name` property in the object definition of `objectType`. */
		property?: NamedProperty;
	}

	/** Display Fields for Search Results */
	export interface ResultDisplayFieldFormProperties {

		/** The display label for the property. */
		label: FormControl<string | null | undefined>,

		/** The operator name of the property. */
		operatorName: FormControl<string | null | undefined>,
	}
	export function CreateResultDisplayFieldFormGroup() {
		return new FormGroup<ResultDisplayFieldFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			operatorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object to represent a person. */
	export interface Person {

		/** The person's email addresses */
		emailAddresses?: Array<EmailAddress>;

		/** The resource name of the person to provide information about. See [`People.get`](https://developers.google.com/people/api/rest/v1/people/get) from the Google People API. */
		name?: string | null;

		/** Obfuscated ID of a person. */
		obfuscatedId?: string | null;

		/** The person's name */
		personNames?: Array<Name>;

		/** The person's phone numbers */
		phoneNumbers?: Array<PhoneNumber>;

		/** A person's read-only photo. A picture shown next to the person's name to help others recognize the person in search results. */
		photos?: Array<Photo>;
	}

	/** Object to represent a person. */
	export interface PersonFormProperties {

		/** The resource name of the person to provide information about. See [`People.get`](https://developers.google.com/people/api/rest/v1/people/get) from the Google People API. */
		name: FormControl<string | null | undefined>,

		/** Obfuscated ID of a person. */
		obfuscatedId: FormControl<string | null | undefined>,
	}
	export function CreatePersonFormGroup() {
		return new FormGroup<PersonFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			obfuscatedId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A person's name. */
	export interface Name {

		/** The read-only display name formatted according to the locale specified by the viewer's account or the `Accept-Language` HTTP header. */
		displayName?: string | null;
	}

	/** A person's name. */
	export interface NameFormProperties {

		/** The read-only display name formatted according to the locale specified by the viewer's account or the `Accept-Language` HTTP header. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateNameFormGroup() {
		return new FormGroup<NameFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A person's Phone Number */
	export interface PhoneNumber {

		/** The phone number of the person. */
		phoneNumber?: string | null;
		type?: PhoneNumberType | null;
	}

	/** A person's Phone Number */
	export interface PhoneNumberFormProperties {

		/** The phone number of the person. */
		phoneNumber: FormControl<string | null | undefined>,
		type: FormControl<PhoneNumberType | null | undefined>,
	}
	export function CreatePhoneNumberFormGroup() {
		return new FormGroup<PhoneNumberFormProperties>({
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PhoneNumberType | null | undefined>(undefined),
		});

	}

	export enum PhoneNumberType { OTHER = 'OTHER', MOBILE = 'MOBILE', OFFICE = 'OFFICE' }


	/** A person's photo. */
	export interface Photo {

		/** The URL of the photo. */
		url?: string | null;
	}

	/** A person's photo. */
	export interface PhotoFormProperties {

		/** The URL of the photo. */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePhotoFormGroup() {
		return new FormGroup<PhotoFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A metaline is a list of properties that are displayed along with the search result to provide context. */
	export interface Metaline {

		/** The list of displayed properties for the metaline. The maximum number of properties is 5. */
		properties?: Array<DisplayedProperty>;
	}

	/** A metaline is a list of properties that are displayed along with the search result to provide context. */
	export interface MetalineFormProperties {
	}
	export function CreateMetalineFormGroup() {
		return new FormGroup<MetalineFormProperties>({
		});

	}


	/** The definition for an object within a data source. */
	export interface ObjectDefinition {

		/** The name for the object, which then defines its type. Item indexing requests should set the objectType field equal to this value. For example, if *name* is *Document*, then indexing requests for items of type Document should set objectType equal to *Document*. Each object definition must be uniquely named within a schema. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The maximum length is 256 characters. */
		name?: string | null;

		/** The options for an object. */
		options?: ObjectOptions;

		/** The property definitions for the object. The maximum number of elements is 1000. */
		propertyDefinitions?: Array<PropertyDefinition>;
	}

	/** The definition for an object within a data source. */
	export interface ObjectDefinitionFormProperties {

		/** The name for the object, which then defines its type. Item indexing requests should set the objectType field equal to this value. For example, if *name* is *Document*, then indexing requests for items of type Document should set objectType equal to *Document*. Each object definition must be uniquely named within a schema. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The maximum length is 256 characters. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateObjectDefinitionFormGroup() {
		return new FormGroup<ObjectDefinitionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The options for an object. */
	export interface ObjectOptions {

		/** The display options for an object. */
		displayOptions?: ObjectDisplayOptions;

		/** Indicates which freshness property to use when adjusting search ranking for an item. Fresher, more recent dates indicate higher quality. Use the freshness option property that best works with your data. For fileshare documents, last modified time is most relevant. For calendar event data, the time when the event occurs is a more relevant freshness indicator. In this way, calendar events that occur closer to the time of the search query are considered higher quality and ranked accordingly. */
		freshnessOptions?: FreshnessOptions;

		/** Operators that can be used to filter suggestions. For Suggest API, only operators mentioned here will be honored in the FilterOptions. Only TEXT and ENUM operators are supported. NOTE: "objecttype", "type" and "mimetype" are already supported. This property is to configure schema specific operators. Even though this is an array, only one operator can be specified. This is an array for future extensibility. Operators mapping to multiple properties within the same object are not supported. If the operator spans across different object types, this option has to be set once for each object definition. */
		suggestionFilteringOperators?: Array<string>;
	}

	/** The options for an object. */
	export interface ObjectOptionsFormProperties {
	}
	export function CreateObjectOptionsFormGroup() {
		return new FormGroup<ObjectOptionsFormProperties>({
		});

	}


	/** The display options for an object. */
	export interface ObjectDisplayOptions {

		/** Defines the properties that are displayed in the metalines of the search results. The property values are displayed in the order given here. If a property holds multiple values, all of the values are displayed before the next properties. For this reason, it is a good practice to specify singular properties before repeated properties in this list. All of the properties must set is_returnable to true. The maximum number of metalines is 3. */
		metalines?: Array<Metaline>;

		/** The user friendly label to display in the search result to indicate the type of the item. This is OPTIONAL; if not provided, an object label isn't displayed on the context line of the search results. The maximum length is 64 characters. */
		objectDisplayLabel?: string | null;
	}

	/** The display options for an object. */
	export interface ObjectDisplayOptionsFormProperties {

		/** The user friendly label to display in the search result to indicate the type of the item. This is OPTIONAL; if not provided, an object label isn't displayed on the context line of the search results. The maximum length is 64 characters. */
		objectDisplayLabel: FormControl<string | null | undefined>,
	}
	export function CreateObjectDisplayOptionsFormGroup() {
		return new FormGroup<ObjectDisplayOptionsFormProperties>({
			objectDisplayLabel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The definition of a property within an object. */
	export interface PropertyDefinition {

		/** The options for boolean properties. */
		booleanPropertyOptions?: BooleanPropertyOptions;

		/** The options for date properties. */
		datePropertyOptions?: DatePropertyOptions;

		/** The display options for a property. */
		displayOptions?: PropertyDisplayOptions;

		/** The options for double properties. */
		doublePropertyOptions?: DoublePropertyOptions;

		/** The options for enum properties, which allow you to define a restricted set of strings to match user queries, set rankings for those string values, and define an operator name to be paired with those strings so that users can narrow results to only items with a specific value. For example, for items in a request tracking system with priority information, you could define *p0* as an allowable enum value and tie this enum to the operator name *priority* so that search users could add *priority:p0* to their query to restrict the set of results to only those items indexed with the value *p0*. */
		enumPropertyOptions?: EnumPropertyOptions;

		/** The options for html properties. */
		htmlPropertyOptions?: HtmlPropertyOptions;

		/** The options for integer properties. */
		integerPropertyOptions?: IntegerPropertyOptions;

		/** Indicates that the property can be used for generating facets. Cannot be true for properties whose type is object. IsReturnable must be true to set this option. Only supported for boolean, enum, integer, and text properties. */
		isFacetable?: boolean | null;

		/** Indicates that multiple values are allowed for the property. For example, a document only has one description but can have multiple comments. Cannot be true for properties whose type is a boolean. If set to false, properties that contain more than one value cause the indexing request for that item to be rejected. */
		isRepeatable?: boolean | null;

		/** Indicates that the property identifies data that should be returned in search results via the Query API. If set to *true*, indicates that Query API users can use matching property fields in results. However, storing fields requires more space allocation and uses more bandwidth for search queries, which impacts performance over large datasets. Set to *true* here only if the field is needed for search results. Cannot be true for properties whose type is an object. */
		isReturnable?: boolean | null;

		/** Indicates that the property can be used for sorting. Cannot be true for properties that are repeatable. Cannot be true for properties whose type is object. IsReturnable must be true to set this option. Only supported for boolean, date, double, integer, and timestamp properties. */
		isSortable?: boolean | null;

		/** Indicates that the property can be used for generating query suggestions. */
		isSuggestable?: boolean | null;

		/** Indicates that users can perform wildcard search for this property. Only supported for Text properties. IsReturnable must be true to set this option. In a given datasource maximum of 5 properties can be marked as is_wildcard_searchable. For more details, see [Define object properties](https://developers.google.com/cloud-search/docs/guides/schema-guide#properties) */
		isWildcardSearchable?: boolean | null;

		/** The name of the property. Item indexing requests sent to the Indexing API should set the property name equal to this value. For example, if name is *subject_line*, then indexing requests for document items with subject fields should set the name for that field equal to *subject_line*. Use the name as the identifier for the object property. Once registered as a property for an object, you cannot re-use this name for another property within that object. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The maximum length is 256 characters. */
		name?: string | null;

		/** The options for object properties. */
		objectPropertyOptions?: ObjectPropertyOptions;

		/** The options for text properties. */
		textPropertyOptions?: TextPropertyOptions;

		/** The options for timestamp properties. */
		timestampPropertyOptions?: TimestampPropertyOptions;
	}

	/** The definition of a property within an object. */
	export interface PropertyDefinitionFormProperties {

		/** Indicates that the property can be used for generating facets. Cannot be true for properties whose type is object. IsReturnable must be true to set this option. Only supported for boolean, enum, integer, and text properties. */
		isFacetable: FormControl<boolean | null | undefined>,

		/** Indicates that multiple values are allowed for the property. For example, a document only has one description but can have multiple comments. Cannot be true for properties whose type is a boolean. If set to false, properties that contain more than one value cause the indexing request for that item to be rejected. */
		isRepeatable: FormControl<boolean | null | undefined>,

		/** Indicates that the property identifies data that should be returned in search results via the Query API. If set to *true*, indicates that Query API users can use matching property fields in results. However, storing fields requires more space allocation and uses more bandwidth for search queries, which impacts performance over large datasets. Set to *true* here only if the field is needed for search results. Cannot be true for properties whose type is an object. */
		isReturnable: FormControl<boolean | null | undefined>,

		/** Indicates that the property can be used for sorting. Cannot be true for properties that are repeatable. Cannot be true for properties whose type is object. IsReturnable must be true to set this option. Only supported for boolean, date, double, integer, and timestamp properties. */
		isSortable: FormControl<boolean | null | undefined>,

		/** Indicates that the property can be used for generating query suggestions. */
		isSuggestable: FormControl<boolean | null | undefined>,

		/** Indicates that users can perform wildcard search for this property. Only supported for Text properties. IsReturnable must be true to set this option. In a given datasource maximum of 5 properties can be marked as is_wildcard_searchable. For more details, see [Define object properties](https://developers.google.com/cloud-search/docs/guides/schema-guide#properties) */
		isWildcardSearchable: FormControl<boolean | null | undefined>,

		/** The name of the property. Item indexing requests sent to the Indexing API should set the property name equal to this value. For example, if name is *subject_line*, then indexing requests for document items with subject fields should set the name for that field equal to *subject_line*. Use the name as the identifier for the object property. Once registered as a property for an object, you cannot re-use this name for another property within that object. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The maximum length is 256 characters. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePropertyDefinitionFormGroup() {
		return new FormGroup<PropertyDefinitionFormProperties>({
			isFacetable: new FormControl<boolean | null | undefined>(undefined),
			isRepeatable: new FormControl<boolean | null | undefined>(undefined),
			isReturnable: new FormControl<boolean | null | undefined>(undefined),
			isSortable: new FormControl<boolean | null | undefined>(undefined),
			isSuggestable: new FormControl<boolean | null | undefined>(undefined),
			isWildcardSearchable: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The display options for a property. */
	export interface PropertyDisplayOptions {

		/** The user friendly label for the property that is used if the property is specified to be displayed in ObjectDisplayOptions. If provided, the display label is shown in front of the property values when the property is part of the object display options. For example, if the property value is '1', the value by itself may not be useful context for the user. If the display name given was 'priority', then the user sees 'priority : 1' in the search results which provides clear context to search users. This is OPTIONAL; if not given, only the property values are displayed. The maximum length is 64 characters. */
		displayLabel?: string | null;
	}

	/** The display options for a property. */
	export interface PropertyDisplayOptionsFormProperties {

		/** The user friendly label for the property that is used if the property is specified to be displayed in ObjectDisplayOptions. If provided, the display label is shown in front of the property values when the property is part of the object display options. For example, if the property value is '1', the value by itself may not be useful context for the user. If the display name given was 'priority', then the user sees 'priority : 1' in the search results which provides clear context to search users. This is OPTIONAL; if not given, only the property values are displayed. The maximum length is 64 characters. */
		displayLabel: FormControl<string | null | undefined>,
	}
	export function CreatePropertyDisplayOptionsFormGroup() {
		return new FormGroup<PropertyDisplayOptionsFormProperties>({
			displayLabel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The options for object properties. */
	export interface ObjectPropertyOptions {

		/** The properties of the sub-object. These properties represent a nested object. For example, if this property represents a postal address, the subobjectProperties might be named *street*, *city*, and *state*. The maximum number of elements is 1000. */
		subobjectProperties?: Array<PropertyDefinition>;
	}

	/** The options for object properties. */
	export interface ObjectPropertyOptionsFormProperties {
	}
	export function CreateObjectPropertyOptionsFormGroup() {
		return new FormGroup<ObjectPropertyOptionsFormProperties>({
		});

	}


	/** The options for text properties. */
	export interface TextPropertyOptions {

		/** Used to provide a search operator for text properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. */
		operatorOptions?: TextOperatorOptions;
		retrievalImportance?: RetrievalImportance;
	}

	/** The options for text properties. */
	export interface TextPropertyOptionsFormProperties {
	}
	export function CreateTextPropertyOptionsFormGroup() {
		return new FormGroup<TextPropertyOptionsFormProperties>({
		});

	}


	/** Used to provide a search operator for text properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. */
	export interface TextOperatorOptions {

		/** If true, the text value is tokenized as one atomic value in operator searches and facet matches. For example, if the operator name is "genre" and the value is "science-fiction" the query restrictions "genre:science" and "genre:fiction" doesn't match the item; "genre:science-fiction" does. Text value matching is case-sensitive and does not remove special characters. If false, the text is tokenized. For example, if the value is "science-fiction" the queries "genre:science" and "genre:fiction" matches the item. */
		exactMatchWithOperator?: boolean | null;

		/** Indicates the operator name required in the query in order to isolate the text property. For example, if operatorName is *subject* and the property's name is *subjectLine*, then queries like *subject:<value>* show results only where the value of the property named *subjectLine* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any text properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		operatorName?: string | null;
	}

	/** Used to provide a search operator for text properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. */
	export interface TextOperatorOptionsFormProperties {

		/** If true, the text value is tokenized as one atomic value in operator searches and facet matches. For example, if the operator name is "genre" and the value is "science-fiction" the query restrictions "genre:science" and "genre:fiction" doesn't match the item; "genre:science-fiction" does. Text value matching is case-sensitive and does not remove special characters. If false, the text is tokenized. For example, if the value is "science-fiction" the queries "genre:science" and "genre:fiction" matches the item. */
		exactMatchWithOperator: FormControl<boolean | null | undefined>,

		/** Indicates the operator name required in the query in order to isolate the text property. For example, if operatorName is *subject* and the property's name is *subjectLine*, then queries like *subject:<value>* show results only where the value of the property named *subjectLine* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any text properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		operatorName: FormControl<string | null | undefined>,
	}
	export function CreateTextOperatorOptionsFormGroup() {
		return new FormGroup<TextOperatorOptionsFormProperties>({
			exactMatchWithOperator: new FormControl<boolean | null | undefined>(undefined),
			operatorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The options for timestamp properties. */
	export interface TimestampPropertyOptions {

		/** Used to provide a search operator for timestamp properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. */
		operatorOptions?: TimestampOperatorOptions;
	}

	/** The options for timestamp properties. */
	export interface TimestampPropertyOptionsFormProperties {
	}
	export function CreateTimestampPropertyOptionsFormGroup() {
		return new FormGroup<TimestampPropertyOptionsFormProperties>({
		});

	}


	/** Used to provide a search operator for timestamp properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. */
	export interface TimestampOperatorOptions {

		/** Indicates the operator name required in the query in order to isolate the timestamp property using the greater-than operator. For example, if greaterThanOperatorName is *closedafter* and the property's name is *closeDate*, then queries like *closedafter:<value>* show results only where the value of the property named *closeDate* is later than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		greaterThanOperatorName?: string | null;

		/** Indicates the operator name required in the query in order to isolate the timestamp property using the less-than operator. For example, if lessThanOperatorName is *closedbefore* and the property's name is *closeDate*, then queries like *closedbefore:<value>* show results only where the value of the property named *closeDate* is earlier than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		lessThanOperatorName?: string | null;

		/** Indicates the operator name required in the query in order to isolate the timestamp property. For example, if operatorName is *closedon* and the property's name is *closeDate*, then queries like *closedon:<value>* show results only where the value of the property named *closeDate* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		operatorName?: string | null;
	}

	/** Used to provide a search operator for timestamp properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. */
	export interface TimestampOperatorOptionsFormProperties {

		/** Indicates the operator name required in the query in order to isolate the timestamp property using the greater-than operator. For example, if greaterThanOperatorName is *closedafter* and the property's name is *closeDate*, then queries like *closedafter:<value>* show results only where the value of the property named *closeDate* is later than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		greaterThanOperatorName: FormControl<string | null | undefined>,

		/** Indicates the operator name required in the query in order to isolate the timestamp property using the less-than operator. For example, if lessThanOperatorName is *closedbefore* and the property's name is *closeDate*, then queries like *closedbefore:<value>* show results only where the value of the property named *closeDate* is earlier than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		lessThanOperatorName: FormControl<string | null | undefined>,

		/** Indicates the operator name required in the query in order to isolate the timestamp property. For example, if operatorName is *closedon* and the property's name is *closeDate*, then queries like *closedon:<value>* show results only where the value of the property named *closeDate* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters. */
		operatorName: FormControl<string | null | undefined>,
	}
	export function CreateTimestampOperatorOptionsFormGroup() {
		return new FormGroup<TimestampOperatorOptionsFormProperties>({
			greaterThanOperatorName: new FormControl<string | null | undefined>(undefined),
			lessThanOperatorName: new FormControl<string | null | undefined>(undefined),
			operatorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This field contains information about the person being suggested. */
	export interface PeopleSuggestion {

		/** Object to represent a person. */
		person?: Person;
	}

	/** This field contains information about the person being suggested. */
	export interface PeopleSuggestionFormProperties {
	}
	export function CreatePeopleSuggestionFormGroup() {
		return new FormGroup<PeopleSuggestionFormProperties>({
		});

	}

	export interface PollItemsRequest {

		/** The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} */
		connectorName?: string | null;

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions;

		/** Maximum number of items to return. The maximum value is 100 and the default value is 20. */
		limit?: number | null;

		/** Queue name to fetch items from. If unspecified, PollItems will fetch from 'default' queue. The maximum length is 100 characters. */
		queue?: string | null;

		/** Limit the items polled to the ones with these statuses. */
		statusCodes?: Array<ItemCountByStatusStatusCode>;
	}
	export interface PollItemsRequestFormProperties {

		/** The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} */
		connectorName: FormControl<string | null | undefined>,

		/** Maximum number of items to return. The maximum value is 100 and the default value is 20. */
		limit: FormControl<number | null | undefined>,

		/** Queue name to fetch items from. If unspecified, PollItems will fetch from 'default' queue. The maximum length is 100 characters. */
		queue: FormControl<string | null | undefined>,
	}
	export function CreatePollItemsRequestFormGroup() {
		return new FormGroup<PollItemsRequestFormProperties>({
			connectorName: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			queue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PollItemsResponse {

		/** Set of items from the queue available for connector to process. These items have the following subset of fields populated: version metadata.hash structured_data.hash content.hash payload status queue */
		items?: Array<Item>;
	}
	export interface PollItemsResponseFormProperties {
	}
	export function CreatePollItemsResponseFormGroup() {
		return new FormGroup<PollItemsResponseFormProperties>({
		});

	}


	/** Represents an item to be pushed to the indexing queue. */
	export interface PushItem {

		/** Content hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the type field results in argument error. The maximum length is 2048 characters. */
		contentHash?: string | null;

		/** The metadata hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the type field results in argument error. The maximum length is 2048 characters. */
		metadataHash?: string | null;

		/** Provides additional document state information for the connector, such as an alternate repository ID and other metadata. The maximum length is 8192 bytes. */
		payload?: string | null;

		/** Queue to which this item belongs. The `default` queue is chosen if this field is not specified. The maximum length is 512 characters. */
		queue?: string | null;

		/** Errors when the connector is communicating to the source repository. */
		repositoryError?: RepositoryError;

		/** Structured data hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the type field results in argument error. The maximum length is 2048 characters. */
		structuredDataHash?: string | null;

		/** The type of the push operation that defines the push behavior. */
		type?: PushItemType | null;
	}

	/** Represents an item to be pushed to the indexing queue. */
	export interface PushItemFormProperties {

		/** Content hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the type field results in argument error. The maximum length is 2048 characters. */
		contentHash: FormControl<string | null | undefined>,

		/** The metadata hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the type field results in argument error. The maximum length is 2048 characters. */
		metadataHash: FormControl<string | null | undefined>,

		/** Provides additional document state information for the connector, such as an alternate repository ID and other metadata. The maximum length is 8192 bytes. */
		payload: FormControl<string | null | undefined>,

		/** Queue to which this item belongs. The `default` queue is chosen if this field is not specified. The maximum length is 512 characters. */
		queue: FormControl<string | null | undefined>,

		/** Structured data hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the type field results in argument error. The maximum length is 2048 characters. */
		structuredDataHash: FormControl<string | null | undefined>,

		/** The type of the push operation that defines the push behavior. */
		type: FormControl<PushItemType | null | undefined>,
	}
	export function CreatePushItemFormGroup() {
		return new FormGroup<PushItemFormProperties>({
			contentHash: new FormControl<string | null | undefined>(undefined),
			metadataHash: new FormControl<string | null | undefined>(undefined),
			payload: new FormControl<string | null | undefined>(undefined),
			queue: new FormControl<string | null | undefined>(undefined),
			structuredDataHash: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PushItemType | null | undefined>(undefined),
		});

	}

	export enum PushItemType { UNSPECIFIED = 'UNSPECIFIED', MODIFIED = 'MODIFIED', NOT_MODIFIED = 'NOT_MODIFIED', REPOSITORY_ERROR = 'REPOSITORY_ERROR', REQUEUE = 'REQUEUE' }

	export interface PushItemRequest {

		/** The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} */
		connectorName?: string | null;

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions;

		/** Represents an item to be pushed to the indexing queue. */
		item?: PushItem;
	}
	export interface PushItemRequestFormProperties {

		/** The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} */
		connectorName: FormControl<string | null | undefined>,
	}
	export function CreatePushItemRequestFormGroup() {
		return new FormGroup<PushItemRequestFormProperties>({
			connectorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a user's query activity. */
	export interface QueryActivity {

		/** User input query to be logged/removed. */
		query?: string | null;
	}

	/** Details about a user's query activity. */
	export interface QueryActivityFormProperties {

		/** User input query to be logged/removed. */
		query: FormControl<string | null | undefined>,
	}
	export function CreateQueryActivityFormGroup() {
		return new FormGroup<QueryActivityFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryInterpretation {
		interpretationType?: QueryInterpretationInterpretationType | null;

		/** The interpretation of the query used in search. For example, queries with natural language intent like "email from john" will be interpreted as "from:john source:mail". This field will not be filled when the reason is NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY. */
		interpretedQuery?: string | null;

		/** The reason for interpretation of the query. This field will not be UNSPECIFIED if the interpretation type is not NONE. */
		reason?: QueryInterpretationReason | null;
	}
	export interface QueryInterpretationFormProperties {
		interpretationType: FormControl<QueryInterpretationInterpretationType | null | undefined>,

		/** The interpretation of the query used in search. For example, queries with natural language intent like "email from john" will be interpreted as "from:john source:mail". This field will not be filled when the reason is NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY. */
		interpretedQuery: FormControl<string | null | undefined>,

		/** The reason for interpretation of the query. This field will not be UNSPECIFIED if the interpretation type is not NONE. */
		reason: FormControl<QueryInterpretationReason | null | undefined>,
	}
	export function CreateQueryInterpretationFormGroup() {
		return new FormGroup<QueryInterpretationFormProperties>({
			interpretationType: new FormControl<QueryInterpretationInterpretationType | null | undefined>(undefined),
			interpretedQuery: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<QueryInterpretationReason | null | undefined>(undefined),
		});

	}

	export enum QueryInterpretationInterpretationType { NONE = 'NONE', BLEND = 'BLEND', REPLACE = 'REPLACE' }

	export enum QueryInterpretationReason { UNSPECIFIED = 'UNSPECIFIED', QUERY_HAS_NATURAL_LANGUAGE_INTENT = 'QUERY_HAS_NATURAL_LANGUAGE_INTENT', NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY = 'NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY' }


	/** Options to interpret user query. */
	export interface QueryInterpretationOptions {

		/** Flag to disable natural language (NL) interpretation of queries. Default is false, Set to true to disable natural language interpretation. NL interpretation only applies to predefined datasources. */
		disableNlInterpretation?: boolean | null;

		/** Use this flag to disable supplemental results for a query. Supplemental results setting chosen at SearchApplication level will take precedence if set to True. */
		disableSupplementalResults?: boolean | null;

		/** Enable this flag to turn off all internal optimizations like natural language (NL) interpretation of queries, supplemental result retrieval, and usage of synonyms including custom ones. Nl interpretation will be disabled if either one of the two flags is true. */
		enableVerbatimMode?: boolean | null;
	}

	/** Options to interpret user query. */
	export interface QueryInterpretationOptionsFormProperties {

		/** Flag to disable natural language (NL) interpretation of queries. Default is false, Set to true to disable natural language interpretation. NL interpretation only applies to predefined datasources. */
		disableNlInterpretation: FormControl<boolean | null | undefined>,

		/** Use this flag to disable supplemental results for a query. Supplemental results setting chosen at SearchApplication level will take precedence if set to True. */
		disableSupplementalResults: FormControl<boolean | null | undefined>,

		/** Enable this flag to turn off all internal optimizations like natural language (NL) interpretation of queries, supplemental result retrieval, and usage of synonyms including custom ones. Nl interpretation will be disabled if either one of the two flags is true. */
		enableVerbatimMode: FormControl<boolean | null | undefined>,
	}
	export function CreateQueryInterpretationOptionsFormGroup() {
		return new FormGroup<QueryInterpretationOptionsFormProperties>({
			disableNlInterpretation: new FormControl<boolean | null | undefined>(undefined),
			disableSupplementalResults: new FormControl<boolean | null | undefined>(undefined),
			enableVerbatimMode: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information relevant only to a query entry. */
	export interface QueryItem {

		/** True if the text was generated by means other than a previous user search. */
		isSynthetic?: boolean | null;
	}

	/** Information relevant only to a query entry. */
	export interface QueryItemFormProperties {

		/** True if the text was generated by means other than a previous user search. */
		isSynthetic: FormControl<boolean | null | undefined>,
	}
	export function CreateQueryItemFormGroup() {
		return new FormGroup<QueryItemFormProperties>({
			isSynthetic: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** This field does not contain anything as of now and is just used as an indicator that the suggest result was a phrase completion. */
	export interface QuerySuggestion {
	}

	/** This field does not contain anything as of now and is just used as an indicator that the suggest result was a phrase completion. */
	export interface QuerySuggestionFormProperties {
	}
	export function CreateQuerySuggestionFormGroup() {
		return new FormGroup<QuerySuggestionFormProperties>({
		});

	}


	/** Remove Logged Activity Request. */
	export interface RemoveActivityRequest {

		/** Shared request options for all RPC methods. */
		requestOptions?: RequestOptions;

		/** User's single or bulk query activity. This can be a logging query or deletion query. */
		userActivity?: UserActivity;
	}

	/** Remove Logged Activity Request. */
	export interface RemoveActivityRequestFormProperties {
	}
	export function CreateRemoveActivityRequestFormGroup() {
		return new FormGroup<RemoveActivityRequestFormProperties>({
		});

	}


	/** Shared request options for all RPC methods. */
	export interface RequestOptions {

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions;

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. For translations. Set this field using the language set in browser or for the page. In the event that the user's language preference is known, set this field to the known user language. When specified, the documents in search results are biased towards the specified language. The Suggest API uses this field as a hint to make better third-party autocomplete predictions. */
		languageCode?: string | null;

		/** The ID generated when you create a search application using the [admin console](https://support.google.com/a/answer/9043922). */
		searchApplicationId?: string | null;

		/** Current user's time zone id, such as "America/Los_Angeles" or "Australia/Sydney". These IDs are defined by [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/) project, and currently available in the file [timezone.xml](http://unicode.org/repos/cldr/trunk/common/bcp47/timezone.xml). This field is used to correctly interpret date and time queries. If this field is not specified, the default time zone (UTC) is used. */
		timeZone?: string | null;
	}

	/** Shared request options for all RPC methods. */
	export interface RequestOptionsFormProperties {

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. For translations. Set this field using the language set in browser or for the page. In the event that the user's language preference is known, set this field to the known user language. When specified, the documents in search results are biased towards the specified language. The Suggest API uses this field as a hint to make better third-party autocomplete predictions. */
		languageCode: FormControl<string | null | undefined>,

		/** The ID generated when you create a search application using the [admin console](https://support.google.com/a/answer/9043922). */
		searchApplicationId: FormControl<string | null | undefined>,

		/** Current user's time zone id, such as "America/Los_Angeles" or "Australia/Sydney". These IDs are defined by [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/) project, and currently available in the file [timezone.xml](http://unicode.org/repos/cldr/trunk/common/bcp47/timezone.xml). This field is used to correctly interpret date and time queries. If this field is not specified, the default time zone (UTC) is used. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateRequestOptionsFormGroup() {
		return new FormGroup<RequestOptionsFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			searchApplicationId: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** User's single or bulk query activity. This can be a logging query or deletion query. */
	export interface UserActivity {

		/** Details about a user's query activity. */
		queryActivity?: QueryActivity;
	}

	/** User's single or bulk query activity. This can be a logging query or deletion query. */
	export interface UserActivityFormProperties {
	}
	export function CreateUserActivityFormGroup() {
		return new FormGroup<UserActivityFormProperties>({
		});

	}


	/** Remove Logged Activity Response. will return an empty response for now. Will be revisited in later phases. */
	export interface RemoveActivityResponse {
	}

	/** Remove Logged Activity Response. will return an empty response for now. Will be revisited in later phases. */
	export interface RemoveActivityResponseFormProperties {
	}
	export function CreateRemoveActivityResponseFormGroup() {
		return new FormGroup<RemoveActivityResponseFormProperties>({
		});

	}

	export interface ResetSearchApplicationRequest {

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions;
	}
	export interface ResetSearchApplicationRequestFormProperties {
	}
	export function CreateResetSearchApplicationRequestFormGroup() {
		return new FormGroup<ResetSearchApplicationRequestFormProperties>({
		});

	}


	/** Debugging information about the response. */
	export interface ResponseDebugInfo {

		/** General debug info formatted for display. */
		formattedDebugInfo?: string | null;
	}

	/** Debugging information about the response. */
	export interface ResponseDebugInfoFormProperties {

		/** General debug info formatted for display. */
		formattedDebugInfo: FormControl<string | null | undefined>,
	}
	export function CreateResponseDebugInfoFormGroup() {
		return new FormGroup<ResponseDebugInfoFormProperties>({
			formattedDebugInfo: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information relevant only to a restrict entry. NextId: 12 */
	export interface RestrictItem {

		/** Drive follow-up search restricts (e.g. "followup:suggestions"). */
		driveFollowUpRestrict?: DriveFollowUpRestrict;

		/** Drive location search restricts (e.g. "is:starred"). */
		driveLocationRestrict?: DriveLocationRestrict;

		/** Drive mime-type search restricts (e.g. "type:pdf"). */
		driveMimeTypeRestrict?: DriveMimeTypeRestrict;

		/** The time span search restrict (e.g. "after:2017-09-11 before:2017-09-12"). */
		driveTimeSpanRestrict?: DriveTimeSpanRestrict;

		/** The search restrict (e.g. "after:2017-09-11 before:2017-09-12"). */
		searchOperator?: string | null;
	}

	/** Information relevant only to a restrict entry. NextId: 12 */
	export interface RestrictItemFormProperties {

		/** The search restrict (e.g. "after:2017-09-11 before:2017-09-12"). */
		searchOperator: FormControl<string | null | undefined>,
	}
	export function CreateRestrictItemFormGroup() {
		return new FormGroup<RestrictItemFormProperties>({
			searchOperator: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result count information */
	export interface ResultCounts {

		/** Result count information for each source with results. */
		sourceResultCounts?: Array<SourceResultCount>;
	}

	/** Result count information */
	export interface ResultCountsFormProperties {
	}
	export function CreateResultCountsFormGroup() {
		return new FormGroup<ResultCountsFormProperties>({
		});

	}


	/** Per source result count information. */
	export interface SourceResultCount {

		/** Whether there are more search results for this source. */
		hasMoreResults?: boolean | null;

		/** The estimated result count for this source. */
		resultCountEstimate?: string | null;

		/** The exact result count for this source. */
		resultCountExact?: string | null;

		/** Defines sources for the suggest/search APIs. */
		source?: Source;
	}

	/** Per source result count information. */
	export interface SourceResultCountFormProperties {

		/** Whether there are more search results for this source. */
		hasMoreResults: FormControl<boolean | null | undefined>,

		/** The estimated result count for this source. */
		resultCountEstimate: FormControl<string | null | undefined>,

		/** The exact result count for this source. */
		resultCountExact: FormControl<string | null | undefined>,
	}
	export function CreateSourceResultCountFormGroup() {
		return new FormGroup<SourceResultCountFormProperties>({
			hasMoreResults: new FormControl<boolean | null | undefined>(undefined),
			resultCountEstimate: new FormControl<string | null | undefined>(undefined),
			resultCountExact: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Debugging information about the result. */
	export interface ResultDebugInfo {

		/** General debug info formatted for display. */
		formattedDebugInfo?: string | null;
	}

	/** Debugging information about the result. */
	export interface ResultDebugInfoFormProperties {

		/** General debug info formatted for display. */
		formattedDebugInfo: FormControl<string | null | undefined>,
	}
	export function CreateResultDebugInfoFormGroup() {
		return new FormGroup<ResultDebugInfoFormProperties>({
			formattedDebugInfo: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The schema definition for a data source. */
	export interface Schema {

		/** The list of top-level objects for the data source. The maximum number of elements is 10. */
		objectDefinitions?: Array<ObjectDefinition>;

		/** IDs of the Long Running Operations (LROs) currently running for this schema. After modifying the schema, wait for operations to complete before indexing additional content. */
		operationIds?: Array<string>;
	}

	/** The schema definition for a data source. */
	export interface SchemaFormProperties {
	}
	export function CreateSchemaFormGroup() {
		return new FormGroup<SchemaFormProperties>({
		});

	}

	export interface SearchItemsByViewUrlRequest {

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions;

		/** The next_page_token value returned from a previous request, if any. */
		pageToken?: string | null;

		/** Specify the full view URL to find the corresponding item. The maximum length is 2048 characters. */
		viewUrl?: string | null;
	}
	export interface SearchItemsByViewUrlRequestFormProperties {

		/** The next_page_token value returned from a previous request, if any. */
		pageToken: FormControl<string | null | undefined>,

		/** Specify the full view URL to find the corresponding item. The maximum length is 2048 characters. */
		viewUrl: FormControl<string | null | undefined>,
	}
	export function CreateSearchItemsByViewUrlRequestFormGroup() {
		return new FormGroup<SearchItemsByViewUrlRequestFormProperties>({
			pageToken: new FormControl<string | null | undefined>(undefined),
			viewUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchItemsByViewUrlResponse {
		items?: Array<Item>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}
	export interface SearchItemsByViewUrlResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchItemsByViewUrlResponseFormGroup() {
		return new FormGroup<SearchItemsByViewUrlResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The search API request. */
	export interface SearchRequest {

		/** Context attributes for the request which will be used to adjust ranking of search results. The maximum number of elements is 10. */
		contextAttributes?: Array<ContextAttribute>;

		/** The sources to use for querying. If not specified, all data sources from the current search application are used. */
		dataSourceRestrictions?: Array<DataSourceRestriction>;
		facetOptions?: Array<FacetOptions>;

		/** Maximum number of search results to return in one page. Valid values are between 1 and 100, inclusive. Default value is 10. Minimum value is 50 when results beyond 2000 are requested. */
		pageSize?: number | null;

		/** The raw query string. See supported search operators in the [Narrow your search with operators](https://support.google.com/cloudsearch/answer/6172299) */
		query?: string | null;

		/** Options to interpret user query. */
		queryInterpretationOptions?: QueryInterpretationOptions;

		/** Shared request options for all RPC methods. */
		requestOptions?: RequestOptions;
		sortOptions?: SortOptions;

		/** Starting index of the results. */
		start?: number | null;
	}

	/** The search API request. */
	export interface SearchRequestFormProperties {

		/** Maximum number of search results to return in one page. Valid values are between 1 and 100, inclusive. Default value is 10. Minimum value is 50 when results beyond 2000 are requested. */
		pageSize: FormControl<number | null | undefined>,

		/** The raw query string. See supported search operators in the [Narrow your search with operators](https://support.google.com/cloudsearch/answer/6172299) */
		query: FormControl<string | null | undefined>,

		/** Starting index of the results. */
		start: FormControl<number | null | undefined>,
	}
	export function CreateSearchRequestFormGroup() {
		return new FormGroup<SearchRequestFormProperties>({
			pageSize: new FormControl<number | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The search API response. */
	export interface SearchResponse {

		/** Debugging information about the response. */
		debugInfo?: ResponseDebugInfo;

		/** Error information about the response. */
		errorInfo?: ErrorInfo;

		/** Repeated facet results. */
		facetResults?: Array<FacetResult>;

		/** Whether there are more search results matching the query. */
		hasMoreResults?: boolean | null;
		queryInterpretation?: QueryInterpretation;

		/** The estimated result count for this query. */
		resultCountEstimate?: string | null;

		/** The exact result count for this query. */
		resultCountExact?: string | null;

		/** Result count information */
		resultCounts?: ResultCounts;

		/** Results from a search query. */
		results?: Array<SearchResult>;

		/** Suggested spelling for the query. */
		spellResults?: Array<SpellResult>;

		/** Structured results for the user query. These results are not counted against the page_size. */
		structuredResults?: Array<StructuredResult>;
	}

	/** The search API response. */
	export interface SearchResponseFormProperties {

		/** Whether there are more search results matching the query. */
		hasMoreResults: FormControl<boolean | null | undefined>,

		/** The estimated result count for this query. */
		resultCountEstimate: FormControl<string | null | undefined>,

		/** The exact result count for this query. */
		resultCountExact: FormControl<string | null | undefined>,
	}
	export function CreateSearchResponseFormGroup() {
		return new FormGroup<SearchResponseFormProperties>({
			hasMoreResults: new FormControl<boolean | null | undefined>(undefined),
			resultCountEstimate: new FormControl<string | null | undefined>(undefined),
			resultCountExact: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Results containing indexed information for a document. */
	export interface SearchResult {

		/** If source is clustered, provide list of clustered results. There will only be one level of clustered results. If current source is not enabled for clustering, this field will be empty. */
		clusteredResults?: Array<SearchResult>;

		/** Debugging information about the result. */
		debugInfo?: ResultDebugInfo;

		/** Metadata of a matched search result. */
		metadata?: Metadata;

		/** Snippet of the search result, which summarizes the content of the resulting page. */
		snippet?: Snippet;

		/** Title of the search result. */
		title?: string | null;

		/** The URL of the search result. The URL contains a Google redirect to the actual item. This URL is signed and shouldn't be changed. */
		url?: string | null;
	}

	/** Results containing indexed information for a document. */
	export interface SearchResultFormProperties {

		/** Title of the search result. */
		title: FormControl<string | null | undefined>,

		/** The URL of the search result. The URL contains a Google redirect to the actual item. This URL is signed and shouldn't be changed. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSearchResultFormGroup() {
		return new FormGroup<SearchResultFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Snippet of the search result, which summarizes the content of the resulting page. */
	export interface Snippet {

		/** The matched ranges in the snippet. */
		matchRanges?: Array<MatchRange>;

		/** The snippet of the document. May contain escaped HTML character that should be unescaped prior to rendering. */
		snippet?: string | null;
	}

	/** Snippet of the search result, which summarizes the content of the resulting page. */
	export interface SnippetFormProperties {

		/** The snippet of the document. May contain escaped HTML character that should be unescaped prior to rendering. */
		snippet: FormControl<string | null | undefined>,
	}
	export function CreateSnippetFormGroup() {
		return new FormGroup<SnippetFormProperties>({
			snippet: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SpellResult {

		/** The suggested spelling of the query. */
		suggestedQuery?: string | null;

		/** IMPORTANT: It is unsafe to accept this message from an untrusted source, since it's trivial for an attacker to forge serialized messages that don't fulfill the type's safety contract -- for example, it could contain attacker controlled script. A system which receives a SafeHtmlProto implicitly trusts the producer of the SafeHtmlProto. So, it's generally safe to return this message in RPC responses, but generally unsafe to accept it in RPC requests. */
		suggestedQueryHtml?: SafeHtmlProto;

		/** Suggestion triggered for the current query. */
		suggestionType?: SpellResultSuggestionType | null;
	}
	export interface SpellResultFormProperties {

		/** The suggested spelling of the query. */
		suggestedQuery: FormControl<string | null | undefined>,

		/** Suggestion triggered for the current query. */
		suggestionType: FormControl<SpellResultSuggestionType | null | undefined>,
	}
	export function CreateSpellResultFormGroup() {
		return new FormGroup<SpellResultFormProperties>({
			suggestedQuery: new FormControl<string | null | undefined>(undefined),
			suggestionType: new FormControl<SpellResultSuggestionType | null | undefined>(undefined),
		});

	}

	export enum SpellResultSuggestionType { SUGGESTION_TYPE_UNSPECIFIED = 'SUGGESTION_TYPE_UNSPECIFIED', NON_EMPTY_RESULTS_SPELL_SUGGESTION = 'NON_EMPTY_RESULTS_SPELL_SUGGESTION', ZERO_RESULTS_FULL_PAGE_REPLACEMENT = 'ZERO_RESULTS_FULL_PAGE_REPLACEMENT' }


	/** Structured results that are returned as part of search request. */
	export interface StructuredResult {

		/** Object to represent a person. */
		person?: Person;
	}

	/** Structured results that are returned as part of search request. */
	export interface StructuredResultFormProperties {
	}
	export function CreateStructuredResultFormGroup() {
		return new FormGroup<StructuredResultFormProperties>({
		});

	}


	/** Start upload file request. */
	export interface StartUploadItemRequest {

		/** The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} */
		connectorName?: string | null;

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions;
	}

	/** Start upload file request. */
	export interface StartUploadItemRequestFormProperties {

		/** The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} */
		connectorName: FormControl<string | null | undefined>,
	}
	export function CreateStartUploadItemRequestFormGroup() {
		return new FormGroup<StartUploadItemRequestFormProperties>({
			connectorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request of suggest API. */
	export interface SuggestRequest {

		/** The sources to use for suggestions. If not specified, the data sources are taken from the current search application. NOTE: Suggestions are only supported for the following sources: * Third-party data sources * PredefinedSource.PERSON * PredefinedSource.GOOGLE_DRIVE */
		dataSourceRestrictions?: Array<DataSourceRestriction>;

		/** Partial query for which autocomplete suggestions will be shown. For example, if the query is "sea", then the server might return "season", "search", "seagull" and so on. */
		query?: string | null;

		/** Shared request options for all RPC methods. */
		requestOptions?: RequestOptions;
	}

	/** Request of suggest API. */
	export interface SuggestRequestFormProperties {

		/** Partial query for which autocomplete suggestions will be shown. For example, if the query is "sea", then the server might return "season", "search", "seagull" and so on. */
		query: FormControl<string | null | undefined>,
	}
	export function CreateSuggestRequestFormGroup() {
		return new FormGroup<SuggestRequestFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the suggest API. */
	export interface SuggestResponse {

		/** List of suggestions. */
		suggestResults?: Array<SuggestResult>;
	}

	/** Response of the suggest API. */
	export interface SuggestResponseFormProperties {
	}
	export function CreateSuggestResponseFormGroup() {
		return new FormGroup<SuggestResponseFormProperties>({
		});

	}


	/** One suggestion result. */
	export interface SuggestResult {

		/** This field contains information about the person being suggested. */
		peopleSuggestion?: PeopleSuggestion;

		/** This field does not contain anything as of now and is just used as an indicator that the suggest result was a phrase completion. */
		querySuggestion?: QuerySuggestion;

		/** Defines sources for the suggest/search APIs. */
		source?: Source;

		/** The suggested query that will be used for search, when the user clicks on the suggestion */
		suggestedQuery?: string | null;
	}

	/** One suggestion result. */
	export interface SuggestResultFormProperties {

		/** The suggested query that will be used for search, when the user clicks on the suggestion */
		suggestedQuery: FormControl<string | null | undefined>,
	}
	export function CreateSuggestResultFormGroup() {
		return new FormGroup<SuggestResultFormProperties>({
			suggestedQuery: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnreserveItemsRequest {

		/** The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} */
		connectorName?: string | null;

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions;

		/** The name of a queue to unreserve items from. */
		queue?: string | null;
	}
	export interface UnreserveItemsRequestFormProperties {

		/** The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} */
		connectorName: FormControl<string | null | undefined>,

		/** The name of a queue to unreserve items from. */
		queue: FormControl<string | null | undefined>,
	}
	export function CreateUnreserveItemsRequestFormGroup() {
		return new FormGroup<UnreserveItemsRequestFormProperties>({
			connectorName: new FormControl<string | null | undefined>(undefined),
			queue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDataSourceRequest {

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions;

		/** Datasource is a logical namespace for items to be indexed. All items must belong to a datasource. This is the prerequisite before items can be indexed into Cloud Search. */
		source?: DataSource;

		/** Only applies to [`settings.datasources.patch`](https://developers.google.com/cloud-search/docs/reference/rest/v1/settings.datasources/patch). Update mask to control which fields to update. Example field paths: `name`, `displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the source, that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated. */
		updateMask?: string | null;
	}
	export interface UpdateDataSourceRequestFormProperties {

		/** Only applies to [`settings.datasources.patch`](https://developers.google.com/cloud-search/docs/reference/rest/v1/settings.datasources/patch). Update mask to control which fields to update. Example field paths: `name`, `displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the source, that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataSourceRequestFormGroup() {
		return new FormGroup<UpdateDataSourceRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSchemaRequest {

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions;

		/** The schema definition for a data source. */
		schema?: Schema;

		/** If true, the schema will be checked for validity, but will not be registered with the data source, even if valid. */
		validateOnly?: boolean | null;
	}
	export interface UpdateSchemaRequestFormProperties {

		/** If true, the schema will be checked for validity, but will not be registered with the data source, even if valid. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateSchemaRequestFormGroup() {
		return new FormGroup<UpdateSchemaRequestFormProperties>({
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute.
		 * Post v1/debug/{name}/items:searchByViewUrl
		 * @param {string} name Source name, format: datasources/{source_id}
		 * @return {SearchItemsByViewUrlResponse} Successful response
		 */
		Cloudsearch_debug_datasources_items_searchByViewUrl(name: string, requestBody: SearchItemsByViewUrlRequest): Observable<SearchItemsByViewUrlResponse> {
			return this.http.post<SearchItemsByViewUrlResponse>(this.baseUri + 'v1/debug/' + (name == null ? '' : encodeURIComponent(name)) + '/items:searchByViewUrl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Checks whether an item is accessible by specified principal. Principal must be a user; groups and domain values aren't supported. **Note:** This API requires an admin account to execute.
		 * Post v1/debug/{name}:checkAccess
		 * @param {string} name Item name, format: datasources/{source_id}/items/{item_id}
		 * @param {boolean} debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
		 * @return {CheckAccessResponse} Successful response
		 */
		Cloudsearch_debug_datasources_items_checkAccess(name: string, debugOptions_enableDebugging: boolean | null | undefined, requestBody: Principal): Observable<CheckAccessResponse> {
			return this.http.post<CheckAccessResponse>(this.baseUri + 'v1/debug/' + (name == null ? '' : encodeURIComponent(name)) + ':checkAccess&debugOptions_enableDebugging=' + debugOptions_enableDebugging, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute.
		 * Get v1/debug/{parent}/items:forunmappedidentity
		 * @param {string} parent The name of the identity source, in the following format: identitysources/{source_id}}
		 * @param {boolean} debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
		 * @param {number} pageSize Maximum number of items to fetch in a request. Defaults to 100.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {ListItemNamesForUnmappedIdentityResponse} Successful response
		 */
		Cloudsearch_debug_identitysources_items_listForunmappedidentity(parent: string, debugOptions_enableDebugging: boolean | null | undefined, groupResourceName: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, userResourceName: string | null | undefined): Observable<ListItemNamesForUnmappedIdentityResponse> {
			return this.http.get<ListItemNamesForUnmappedIdentityResponse>(this.baseUri + 'v1/debug/' + (parent == null ? '' : encodeURIComponent(parent)) + '/items:forunmappedidentity&debugOptions_enableDebugging=' + debugOptions_enableDebugging + '&groupResourceName=' + (groupResourceName == null ? '' : encodeURIComponent(groupResourceName)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&userResourceName=' + (userResourceName == null ? '' : encodeURIComponent(userResourceName)), {});
		}

		/**
		 * Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute.
		 * Get v1/debug/{parent}/unmappedids
		 * @param {string} parent The name of the identity source, in the following format: identitysources/{source_id}
		 * @param {boolean} debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
		 * @param {number} pageSize Maximum number of items to fetch in a request. Defaults to 100.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @param {UnmappedIdentityResolutionStatusCode} resolutionStatusCode Limit users selection to this status.
		 * @return {ListUnmappedIdentitiesResponse} Successful response
		 */
		Cloudsearch_debug_identitysources_unmappedids_list(parent: string, debugOptions_enableDebugging: boolean | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, resolutionStatusCode: UnmappedIdentityResolutionStatusCode | null | undefined): Observable<ListUnmappedIdentitiesResponse> {
			return this.http.get<ListUnmappedIdentitiesResponse>(this.baseUri + 'v1/debug/' + (parent == null ? '' : encodeURIComponent(parent)) + '/unmappedids&debugOptions_enableDebugging=' + debugOptions_enableDebugging + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&resolutionStatusCode=' + resolutionStatusCode, {});
		}

		/**
		 * Deletes Item resource for the specified resource name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
		 * Delete v1/indexing/{name}
		 * @param {string} name Required. The name of the item to delete. Format: datasources/{source_id}/items/{item_id}
		 * @param {string} connectorName The name of connector making this call. Format: datasources/{source_id}/connectors/{ID}
		 * @param {boolean} debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
		 * @param {IndexItemRequestMode} mode Required. The RequestMode for this request.
		 * @param {string} version Required. The incremented version of the item to delete from the index. The indexing system stores the version from the datasource as a byte string and compares the Item version in the index to the version of the queued Item using lexical ordering. Cloud Search Indexing won't delete any queued item with a version value that is less than or equal to the version of the currently indexed item. The maximum length for this field is 1024 bytes. For information on how item version affects the deletion process, refer to [Handle revisions after manual deletes](https://developers.google.com/cloud-search/docs/guides/operations).
		 * @return {Operation} Successful response
		 */
		Cloudsearch_indexing_datasources_items_delete(name: string, connectorName: string | null | undefined, debugOptions_enableDebugging: boolean | null | undefined, mode: IndexItemRequestMode | null | undefined, version: string | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/indexing/' + (name == null ? '' : encodeURIComponent(name)) + '&connectorName=' + (connectorName == null ? '' : encodeURIComponent(connectorName)) + '&debugOptions_enableDebugging=' + debugOptions_enableDebugging + '&mode=' + mode + '&version=' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * Gets Item resource by item name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
		 * Get v1/indexing/{name}
		 * @param {string} name The name of the item to get info. Format: datasources/{source_id}/items/{item_id}
		 * @param {string} connectorName The name of connector making this call. Format: datasources/{source_id}/connectors/{ID}
		 * @param {boolean} debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
		 * @return {Item} Successful response
		 */
		Cloudsearch_indexing_datasources_items_get(name: string, connectorName: string | null | undefined, debugOptions_enableDebugging: boolean | null | undefined): Observable<Item> {
			return this.http.get<Item>(this.baseUri + 'v1/indexing/' + (name == null ? '' : encodeURIComponent(name)) + '&connectorName=' + (connectorName == null ? '' : encodeURIComponent(connectorName)) + '&debugOptions_enableDebugging=' + debugOptions_enableDebugging, {});
		}

		/**
		 * Lists all or a subset of Item resources. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
		 * Get v1/indexing/{name}/items
		 * @param {string} name The name of the Data Source to list Items. Format: datasources/{source_id}
		 * @param {boolean} brief When set to true, the indexing system only populates the following fields: name, version, queue. metadata.hash, metadata.title, metadata.sourceRepositoryURL, metadata.objectType, metadata.createTime, metadata.updateTime, metadata.contentLanguage, metadata.mimeType, structured_data.hash, content.hash, itemType, itemStatus.code, itemStatus.processingError.code, itemStatus.repositoryError.type, If this value is false, then all the fields are populated in Item.
		 * @param {string} connectorName The name of connector making this call. Format: datasources/{source_id}/connectors/{ID}
		 * @param {boolean} debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
		 * @param {number} pageSize Maximum number of items to fetch in a request. The max value is 1000 when brief is true. The max value is 10 if brief is false. The default value is 10
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {ListItemsResponse} Successful response
		 */
		Cloudsearch_indexing_datasources_items_list(name: string, brief: boolean | null | undefined, connectorName: string | null | undefined, debugOptions_enableDebugging: boolean | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListItemsResponse> {
			return this.http.get<ListItemsResponse>(this.baseUri + 'v1/indexing/' + (name == null ? '' : encodeURIComponent(name)) + '/items&brief=' + brief + '&connectorName=' + (connectorName == null ? '' : encodeURIComponent(connectorName)) + '&debugOptions_enableDebugging=' + debugOptions_enableDebugging + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Deletes all items in a queue. This method is useful for deleting stale items. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
		 * Post v1/indexing/{name}/items:deleteQueueItems
		 * @param {string} name The name of the Data Source to delete items in a queue. Format: datasources/{source_id}
		 * @return {Operation} Successful response
		 */
		Cloudsearch_indexing_datasources_items_deleteQueueItems(name: string, requestBody: DeleteQueueItemsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/indexing/' + (name == null ? '' : encodeURIComponent(name)) + '/items:deleteQueueItems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Polls for unreserved items from the indexing queue and marks a set as reserved, starting with items that have the oldest timestamp from the highest priority ItemStatus. The priority order is as follows: ERROR MODIFIED NEW_ITEM ACCEPTED Reserving items ensures that polling from other threads cannot create overlapping sets. After handling the reserved items, the client should put items back into the unreserved state, either by calling index, or by calling push with the type REQUEUE. Items automatically become available (unreserved) after 4 hours even if no update or push method is called. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
		 * Post v1/indexing/{name}/items:poll
		 * @param {string} name The name of the Data Source to poll items. Format: datasources/{source_id}
		 * @return {PollItemsResponse} Successful response
		 */
		Cloudsearch_indexing_datasources_items_poll(name: string, requestBody: PollItemsRequest): Observable<PollItemsResponse> {
			return this.http.post<PollItemsResponse>(this.baseUri + 'v1/indexing/' + (name == null ? '' : encodeURIComponent(name)) + '/items:poll', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unreserves all items from a queue, making them all eligible to be polled. This method is useful for resetting the indexing queue after a connector has been restarted. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
		 * Post v1/indexing/{name}/items:unreserve
		 * @param {string} name The name of the Data Source to unreserve all items. Format: datasources/{source_id}
		 * @return {Operation} Successful response
		 */
		Cloudsearch_indexing_datasources_items_unreserve(name: string, requestBody: UnreserveItemsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/indexing/' + (name == null ? '' : encodeURIComponent(name)) + '/items:unreserve', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the schema of a data source. **Note:** This API requires an admin or service account to execute.
		 * Delete v1/indexing/{name}/schema
		 * @param {string} name The name of the data source to delete Schema. Format: datasources/{source_id}
		 * @param {boolean} debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
		 * @return {Operation} Successful response
		 */
		Cloudsearch_indexing_datasources_deleteSchema(name: string, debugOptions_enableDebugging: boolean | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/indexing/' + (name == null ? '' : encodeURIComponent(name)) + '/schema&debugOptions_enableDebugging=' + debugOptions_enableDebugging, {});
		}

		/**
		 * Gets the schema of a data source. **Note:** This API requires an admin or service account to execute.
		 * Get v1/indexing/{name}/schema
		 * @param {string} name The name of the data source to get Schema. Format: datasources/{source_id}
		 * @param {boolean} debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
		 * @return {Schema} Successful response
		 */
		Cloudsearch_indexing_datasources_getSchema(name: string, debugOptions_enableDebugging: boolean | null | undefined): Observable<Schema> {
			return this.http.get<Schema>(this.baseUri + 'v1/indexing/' + (name == null ? '' : encodeURIComponent(name)) + '/schema&debugOptions_enableDebugging=' + debugOptions_enableDebugging, {});
		}

		/**
		 * Updates the schema of a data source. This method does not perform incremental updates to the schema. Instead, this method updates the schema by overwriting the entire schema. **Note:** This API requires an admin or service account to execute.
		 * Put v1/indexing/{name}/schema
		 * @param {string} name The name of the data source to update Schema. Format: datasources/{source_id}
		 * @return {Operation} Successful response
		 */
		Cloudsearch_indexing_datasources_updateSchema(name: string, requestBody: UpdateSchemaRequest): Observable<Operation> {
			return this.http.put<Operation>(this.baseUri + 'v1/indexing/' + (name == null ? '' : encodeURIComponent(name)) + '/schema', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates Item ACL, metadata, and content. It will insert the Item if it does not exist. This method does not support partial updates. Fields with no provided values are cleared out in the Cloud Search index. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
		 * Post v1/indexing/{name}:index
		 * @param {string} name The name of the Item. Format: datasources/{source_id}/items/{item_id} This is a required field. The maximum length is 1536 characters.
		 * @return {Operation} Successful response
		 */
		Cloudsearch_indexing_datasources_items_index(name: string, requestBody: IndexItemRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/indexing/' + (name == null ? '' : encodeURIComponent(name)) + ':index', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Pushes an item onto a queue for later polling and updating. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
		 * Post v1/indexing/{name}:push
		 * @param {string} name The name of the item to push into the indexing queue. Format: datasources/{source_id}/items/{ID} This is a required field. The maximum length is 1536 characters.
		 * @return {Item} Successful response
		 */
		Cloudsearch_indexing_datasources_items_push(name: string, requestBody: PushItemRequest): Observable<Item> {
			return this.http.post<Item>(this.baseUri + 'v1/indexing/' + (name == null ? '' : encodeURIComponent(name)) + ':push', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an upload session for uploading item content. For items smaller than 100 KB, it's easier to embed the content inline within an index request. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
		 * Post v1/indexing/{name}:upload
		 * @param {string} name The name of the Item to start a resumable upload. Format: datasources/{source_id}/items/{item_id}. The maximum length is 1536 bytes.
		 * @return {UploadItemRef} Successful response
		 */
		Cloudsearch_indexing_datasources_items_upload(name: string, requestBody: StartUploadItemRequest): Observable<UploadItemRef> {
			return this.http.post<UploadItemRef>(this.baseUri + 'v1/indexing/' + (name == null ? '' : encodeURIComponent(name)) + ':upload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The Cloud Search Query API provides the search method, which returns the most relevant results from a user query. The results can come from Google Workspace apps, such as Gmail or Google Drive, or they can come from data that you have indexed from a third party. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
		 * Post v1/query/search
		 * @return {SearchResponse} Successful response
		 */
		Cloudsearch_query_search(requestBody: SearchRequest): Observable<SearchResponse> {
			return this.http.post<SearchResponse>(this.baseUri + 'v1/query/search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns list of sources that user can use for Search and Suggest APIs. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
		 * Get v1/query/sources
		 * @param {string} pageToken Number of sources to return in the response.
		 * @param {boolean} requestOptions_debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
		 * @param {string} requestOptions_languageCode The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. For translations. Set this field using the language set in browser or for the page. In the event that the user's language preference is known, set this field to the known user language. When specified, the documents in search results are biased towards the specified language. The Suggest API uses this field as a hint to make better third-party autocomplete predictions.
		 * @param {string} requestOptions_searchApplicationId The ID generated when you create a search application using the [admin console](https://support.google.com/a/answer/9043922).
		 * @param {string} requestOptions_timeZone Current user's time zone id, such as "America/Los_Angeles" or "Australia/Sydney". These IDs are defined by [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/) project, and currently available in the file [timezone.xml](http://unicode.org/repos/cldr/trunk/common/bcp47/timezone.xml). This field is used to correctly interpret date and time queries. If this field is not specified, the default time zone (UTC) is used.
		 * @return {ListQuerySourcesResponse} Successful response
		 */
		Cloudsearch_query_sources_list(pageToken: string | null | undefined, requestOptions_debugOptions_enableDebugging: boolean | null | undefined, requestOptions_languageCode: string | null | undefined, requestOptions_searchApplicationId: string | null | undefined, requestOptions_timeZone: string | null | undefined): Observable<ListQuerySourcesResponse> {
			return this.http.get<ListQuerySourcesResponse>(this.baseUri + 'v1/query/sources?pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&requestOptions_debugOptions_enableDebugging=' + requestOptions_debugOptions_enableDebugging + '&requestOptions_languageCode=' + (requestOptions_languageCode == null ? '' : encodeURIComponent(requestOptions_languageCode)) + '&requestOptions_searchApplicationId=' + (requestOptions_searchApplicationId == null ? '' : encodeURIComponent(requestOptions_searchApplicationId)) + '&requestOptions_timeZone=' + (requestOptions_timeZone == null ? '' : encodeURIComponent(requestOptions_timeZone)), {});
		}

		/**
		 * Provides suggestions for autocompleting the query. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
		 * Post v1/query/suggest
		 * @return {SuggestResponse} Successful response
		 */
		Cloudsearch_query_suggest(requestBody: SuggestRequest): Observable<SuggestResponse> {
			return this.http.post<SuggestResponse>(this.baseUri + 'v1/query/suggest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides functionality to remove logged activity for a user. Currently to be used only for Chat 1p clients **Note:** This API requires a standard end user account to execute. A service account can't perform Remove Activity requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
		 * Post v1/query:removeActivity
		 * @return {RemoveActivityResponse} Successful response
		 */
		Cloudsearch_query_removeActivity(requestBody: RemoveActivityRequest): Observable<RemoveActivityResponse> {
			return this.http.post<RemoveActivityResponse>(this.baseUri + 'v1/query:removeActivity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get customer settings. **Note:** This API requires an admin account to execute.
		 * Get v1/settings/customer
		 * @return {CustomerSettings} Successful response
		 */
		Cloudsearch_settings_getCustomer(): Observable<CustomerSettings> {
			return this.http.get<CustomerSettings>(this.baseUri + 'v1/settings/customer', {});
		}

		/**
		 * Update customer settings. **Note:** This API requires an admin account to execute.
		 * Patch v1/settings/customer
		 * @param {string} updateMask Update mask to control which fields get updated. If you specify a field in the update_mask but don't specify its value here, that field will be cleared. If the mask is not present or empty, all fields will be updated. Currently supported field paths: vpc_settings and audit_logging_settings
		 * @return {Operation} Successful response
		 */
		Cloudsearch_settings_updateCustomer(updateMask: string | null | undefined, requestBody: CustomerSettings): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/settings/customer?updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists datasources. **Note:** This API requires an admin account to execute.
		 * Get v1/settings/datasources
		 * @param {boolean} debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
		 * @param {number} pageSize Maximum number of datasources to fetch in a request. The max value is 1000. The default value is 1000.
		 * @param {string} pageToken Starting index of the results.
		 * @return {ListDataSourceResponse} Successful response
		 */
		Cloudsearch_settings_datasources_list(debugOptions_enableDebugging: boolean | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDataSourceResponse> {
			return this.http.get<ListDataSourceResponse>(this.baseUri + 'v1/settings/datasources?debugOptions_enableDebugging=' + debugOptions_enableDebugging + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a datasource. **Note:** This API requires an admin account to execute.
		 * Post v1/settings/datasources
		 * @return {Operation} Successful response
		 */
		Cloudsearch_settings_datasources_create(requestBody: DataSource): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/settings/datasources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all search applications. **Note:** This API requires an admin account to execute.
		 * Get v1/settings/searchapplications
		 * @param {boolean} debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
		 * @param {number} pageSize The maximum number of items to return.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any. The default value is 10
		 * @return {ListSearchApplicationsResponse} Successful response
		 */
		Cloudsearch_settings_searchapplications_list(debugOptions_enableDebugging: boolean | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSearchApplicationsResponse> {
			return this.http.get<ListSearchApplicationsResponse>(this.baseUri + 'v1/settings/searchapplications?debugOptions_enableDebugging=' + debugOptions_enableDebugging + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a search application. **Note:** This API requires an admin account to execute.
		 * Post v1/settings/searchapplications
		 * @return {Operation} Successful response
		 */
		Cloudsearch_settings_searchapplications_create(requestBody: SearchApplication): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/settings/searchapplications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a search application. **Note:** This API requires an admin account to execute.
		 * Delete v1/settings/{name}
		 * @param {string} name The name of the search application to be deleted. Format: applications/{application_id}.
		 * @param {boolean} debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
		 * @return {Operation} Successful response
		 */
		Cloudsearch_settings_searchapplications_delete(name: string, debugOptions_enableDebugging: boolean | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/settings/' + (name == null ? '' : encodeURIComponent(name)) + '&debugOptions_enableDebugging=' + debugOptions_enableDebugging, {});
		}

		/**
		 * Gets the specified search application. **Note:** This API requires an admin account to execute.
		 * Get v1/settings/{name}
		 * @param {string} name The name of the search application. Format: searchapplications/{application_id}.
		 * @param {boolean} debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
		 * @return {SearchApplication} Successful response
		 */
		Cloudsearch_settings_searchapplications_get(name: string, debugOptions_enableDebugging: boolean | null | undefined): Observable<SearchApplication> {
			return this.http.get<SearchApplication>(this.baseUri + 'v1/settings/' + (name == null ? '' : encodeURIComponent(name)) + '&debugOptions_enableDebugging=' + debugOptions_enableDebugging, {});
		}

		/**
		 * Updates a search application. **Note:** This API requires an admin account to execute.
		 * Patch v1/settings/{name}
		 * @param {string} name The name of the Search Application. Format: searchapplications/{application_id}.
		 * @param {string} updateMask Only applies to [`settings.searchapplications.patch`](https://developers.google.com/cloud-search/docs/reference/rest/v1/settings.searchapplications/patch). Update mask to control which fields to update. Example field paths: `search_application.name`, `search_application.displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the `search_application`, then that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated.
		 * @return {Operation} Successful response
		 */
		Cloudsearch_settings_searchapplications_patch(name: string, updateMask: string | null | undefined, requestBody: SearchApplication): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/settings/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a search application. **Note:** This API requires an admin account to execute.
		 * Put v1/settings/{name}
		 * @param {string} name The name of the Search Application. Format: searchapplications/{application_id}.
		 * @param {string} updateMask Only applies to [`settings.searchapplications.patch`](https://developers.google.com/cloud-search/docs/reference/rest/v1/settings.searchapplications/patch). Update mask to control which fields to update. Example field paths: `search_application.name`, `search_application.displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the `search_application`, then that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated.
		 * @return {Operation} Successful response
		 */
		Cloudsearch_settings_searchapplications_update(name: string, updateMask: string | null | undefined, requestBody: SearchApplication): Observable<Operation> {
			return this.http.put<Operation>(this.baseUri + 'v1/settings/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resets a search application to default settings. This will return an empty response. **Note:** This API requires an admin account to execute.
		 * Post v1/settings/{name}:reset
		 * @param {string} name The name of the search application to be reset. Format: applications/{application_id}.
		 * @return {Operation} Successful response
		 */
		Cloudsearch_settings_searchapplications_reset(name: string, requestBody: ResetSearchApplicationRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/settings/' + (name == null ? '' : encodeURIComponent(name)) + ':reset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets indexed item statistics aggreggated across all data sources. This API only returns statistics for previous dates; it doesn't return statistics for the current day. **Note:** This API requires a standard end user account to execute.
		 * Get v1/stats/index
		 * @param {number} fromDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} fromDate_month Month of date. Must be from 1 to 12.
		 * @param {number} fromDate_year Year of date. Must be from 1 to 9999.
		 * @param {number} toDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} toDate_month Month of date. Must be from 1 to 12.
		 * @param {number} toDate_year Year of date. Must be from 1 to 9999.
		 * @return {GetCustomerIndexStatsResponse} Successful response
		 */
		Cloudsearch_stats_getIndex(fromDate_day: number | null | undefined, fromDate_month: number | null | undefined, fromDate_year: number | null | undefined, toDate_day: number | null | undefined, toDate_month: number | null | undefined, toDate_year: number | null | undefined): Observable<GetCustomerIndexStatsResponse> {
			return this.http.get<GetCustomerIndexStatsResponse>(this.baseUri + 'v1/stats/index?fromDate_day=' + fromDate_day + '&fromDate_month=' + fromDate_month + '&fromDate_year=' + fromDate_year + '&toDate_day=' + toDate_day + '&toDate_month=' + toDate_month + '&toDate_year=' + toDate_year, {});
		}

		/**
		 * Gets indexed item statistics for a single data source. **Note:** This API requires a standard end user account to execute.
		 * Get v1/stats/index/{name}
		 * @param {string} name The resource id of the data source to retrieve statistics for, in the following format: "datasources/{source_id}"
		 * @param {number} fromDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} fromDate_month Month of date. Must be from 1 to 12.
		 * @param {number} fromDate_year Year of date. Must be from 1 to 9999.
		 * @param {number} toDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} toDate_month Month of date. Must be from 1 to 12.
		 * @param {number} toDate_year Year of date. Must be from 1 to 9999.
		 * @return {GetDataSourceIndexStatsResponse} Successful response
		 */
		Cloudsearch_stats_index_datasources_get(name: string, fromDate_day: number | null | undefined, fromDate_month: number | null | undefined, fromDate_year: number | null | undefined, toDate_day: number | null | undefined, toDate_month: number | null | undefined, toDate_year: number | null | undefined): Observable<GetDataSourceIndexStatsResponse> {
			return this.http.get<GetDataSourceIndexStatsResponse>(this.baseUri + 'v1/stats/index/' + (name == null ? '' : encodeURIComponent(name)) + '&fromDate_day=' + fromDate_day + '&fromDate_month=' + fromDate_month + '&fromDate_year=' + fromDate_year + '&toDate_day=' + toDate_day + '&toDate_month=' + toDate_month + '&toDate_year=' + toDate_year, {});
		}

		/**
		 * Get the query statistics for customer. **Note:** This API requires a standard end user account to execute.
		 * Get v1/stats/query
		 * @param {number} fromDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} fromDate_month Month of date. Must be from 1 to 12.
		 * @param {number} fromDate_year Year of date. Must be from 1 to 9999.
		 * @param {number} toDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} toDate_month Month of date. Must be from 1 to 12.
		 * @param {number} toDate_year Year of date. Must be from 1 to 9999.
		 * @return {GetCustomerQueryStatsResponse} Successful response
		 */
		Cloudsearch_stats_getQuery(fromDate_day: number | null | undefined, fromDate_month: number | null | undefined, fromDate_year: number | null | undefined, toDate_day: number | null | undefined, toDate_month: number | null | undefined, toDate_year: number | null | undefined): Observable<GetCustomerQueryStatsResponse> {
			return this.http.get<GetCustomerQueryStatsResponse>(this.baseUri + 'v1/stats/query?fromDate_day=' + fromDate_day + '&fromDate_month=' + fromDate_month + '&fromDate_year=' + fromDate_year + '&toDate_day=' + toDate_day + '&toDate_month=' + toDate_month + '&toDate_year=' + toDate_year, {});
		}

		/**
		 * Get the query statistics for search application. **Note:** This API requires a standard end user account to execute.
		 * Get v1/stats/query/{name}
		 * @param {string} name The resource id of the search application query stats, in the following format: searchapplications/{application_id}
		 * @param {number} fromDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} fromDate_month Month of date. Must be from 1 to 12.
		 * @param {number} fromDate_year Year of date. Must be from 1 to 9999.
		 * @param {number} toDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} toDate_month Month of date. Must be from 1 to 12.
		 * @param {number} toDate_year Year of date. Must be from 1 to 9999.
		 * @return {GetSearchApplicationQueryStatsResponse} Successful response
		 */
		Cloudsearch_stats_query_searchapplications_get(name: string, fromDate_day: number | null | undefined, fromDate_month: number | null | undefined, fromDate_year: number | null | undefined, toDate_day: number | null | undefined, toDate_month: number | null | undefined, toDate_year: number | null | undefined): Observable<GetSearchApplicationQueryStatsResponse> {
			return this.http.get<GetSearchApplicationQueryStatsResponse>(this.baseUri + 'v1/stats/query/' + (name == null ? '' : encodeURIComponent(name)) + '&fromDate_day=' + fromDate_day + '&fromDate_month=' + fromDate_month + '&fromDate_year=' + fromDate_year + '&toDate_day=' + toDate_day + '&toDate_month=' + toDate_month + '&toDate_year=' + toDate_year, {});
		}

		/**
		 * Get search application stats for customer. **Note:** This API requires a standard end user account to execute.
		 * Get v1/stats/searchapplication
		 * @param {number} endDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} endDate_month Month of date. Must be from 1 to 12.
		 * @param {number} endDate_year Year of date. Must be from 1 to 9999.
		 * @param {number} startDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} startDate_month Month of date. Must be from 1 to 12.
		 * @param {number} startDate_year Year of date. Must be from 1 to 9999.
		 * @return {GetCustomerSearchApplicationStatsResponse} Successful response
		 */
		Cloudsearch_stats_getSearchapplication(endDate_day: number | null | undefined, endDate_month: number | null | undefined, endDate_year: number | null | undefined, startDate_day: number | null | undefined, startDate_month: number | null | undefined, startDate_year: number | null | undefined): Observable<GetCustomerSearchApplicationStatsResponse> {
			return this.http.get<GetCustomerSearchApplicationStatsResponse>(this.baseUri + 'v1/stats/searchapplication?endDate_day=' + endDate_day + '&endDate_month=' + endDate_month + '&endDate_year=' + endDate_year + '&startDate_day=' + startDate_day + '&startDate_month=' + startDate_month + '&startDate_year=' + startDate_year, {});
		}

		/**
		 * Get the # of search sessions, % of successful sessions with a click query statistics for customer. **Note:** This API requires a standard end user account to execute.
		 * Get v1/stats/session
		 * @param {number} fromDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} fromDate_month Month of date. Must be from 1 to 12.
		 * @param {number} fromDate_year Year of date. Must be from 1 to 9999.
		 * @param {number} toDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} toDate_month Month of date. Must be from 1 to 12.
		 * @param {number} toDate_year Year of date. Must be from 1 to 9999.
		 * @return {GetCustomerSessionStatsResponse} Successful response
		 */
		Cloudsearch_stats_getSession(fromDate_day: number | null | undefined, fromDate_month: number | null | undefined, fromDate_year: number | null | undefined, toDate_day: number | null | undefined, toDate_month: number | null | undefined, toDate_year: number | null | undefined): Observable<GetCustomerSessionStatsResponse> {
			return this.http.get<GetCustomerSessionStatsResponse>(this.baseUri + 'v1/stats/session?fromDate_day=' + fromDate_day + '&fromDate_month=' + fromDate_month + '&fromDate_year=' + fromDate_year + '&toDate_day=' + toDate_day + '&toDate_month=' + toDate_month + '&toDate_year=' + toDate_year, {});
		}

		/**
		 * Get the # of search sessions, % of successful sessions with a click query statistics for search application. **Note:** This API requires a standard end user account to execute.
		 * Get v1/stats/session/{name}
		 * @param {string} name The resource id of the search application session stats, in the following format: searchapplications/{application_id}
		 * @param {number} fromDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} fromDate_month Month of date. Must be from 1 to 12.
		 * @param {number} fromDate_year Year of date. Must be from 1 to 9999.
		 * @param {number} toDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} toDate_month Month of date. Must be from 1 to 12.
		 * @param {number} toDate_year Year of date. Must be from 1 to 9999.
		 * @return {GetSearchApplicationSessionStatsResponse} Successful response
		 */
		Cloudsearch_stats_session_searchapplications_get(name: string, fromDate_day: number | null | undefined, fromDate_month: number | null | undefined, fromDate_year: number | null | undefined, toDate_day: number | null | undefined, toDate_month: number | null | undefined, toDate_year: number | null | undefined): Observable<GetSearchApplicationSessionStatsResponse> {
			return this.http.get<GetSearchApplicationSessionStatsResponse>(this.baseUri + 'v1/stats/session/' + (name == null ? '' : encodeURIComponent(name)) + '&fromDate_day=' + fromDate_day + '&fromDate_month=' + fromDate_month + '&fromDate_year=' + fromDate_year + '&toDate_day=' + toDate_day + '&toDate_month=' + toDate_month + '&toDate_year=' + toDate_year, {});
		}

		/**
		 * Get the users statistics for customer. **Note:** This API requires a standard end user account to execute.
		 * Get v1/stats/user
		 * @param {number} fromDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} fromDate_month Month of date. Must be from 1 to 12.
		 * @param {number} fromDate_year Year of date. Must be from 1 to 9999.
		 * @param {number} toDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} toDate_month Month of date. Must be from 1 to 12.
		 * @param {number} toDate_year Year of date. Must be from 1 to 9999.
		 * @return {GetCustomerUserStatsResponse} Successful response
		 */
		Cloudsearch_stats_getUser(fromDate_day: number | null | undefined, fromDate_month: number | null | undefined, fromDate_year: number | null | undefined, toDate_day: number | null | undefined, toDate_month: number | null | undefined, toDate_year: number | null | undefined): Observable<GetCustomerUserStatsResponse> {
			return this.http.get<GetCustomerUserStatsResponse>(this.baseUri + 'v1/stats/user?fromDate_day=' + fromDate_day + '&fromDate_month=' + fromDate_month + '&fromDate_year=' + fromDate_year + '&toDate_day=' + toDate_day + '&toDate_month=' + toDate_month + '&toDate_year=' + toDate_year, {});
		}

		/**
		 * Get the users statistics for search application. **Note:** This API requires a standard end user account to execute.
		 * Get v1/stats/user/{name}
		 * @param {string} name The resource id of the search application session stats, in the following format: searchapplications/{application_id}
		 * @param {number} fromDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} fromDate_month Month of date. Must be from 1 to 12.
		 * @param {number} fromDate_year Year of date. Must be from 1 to 9999.
		 * @param {number} toDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} toDate_month Month of date. Must be from 1 to 12.
		 * @param {number} toDate_year Year of date. Must be from 1 to 9999.
		 * @return {GetSearchApplicationUserStatsResponse} Successful response
		 */
		Cloudsearch_stats_user_searchapplications_get(name: string, fromDate_day: number | null | undefined, fromDate_month: number | null | undefined, fromDate_year: number | null | undefined, toDate_day: number | null | undefined, toDate_month: number | null | undefined, toDate_year: number | null | undefined): Observable<GetSearchApplicationUserStatsResponse> {
			return this.http.get<GetSearchApplicationUserStatsResponse>(this.baseUri + 'v1/stats/user/' + (name == null ? '' : encodeURIComponent(name)) + '&fromDate_day=' + fromDate_day + '&fromDate_month=' + fromDate_month + '&fromDate_year=' + fromDate_year + '&toDate_day=' + toDate_day + '&toDate_month=' + toDate_month + '&toDate_year=' + toDate_year, {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Cloudsearch_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/lro
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Cloudsearch_operations_lro_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/lro&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Enables `third party` support in Google Cloud Search. **Note:** This API requires an admin account to execute.
		 * Post v1:initializeCustomer
		 * @return {Operation} Successful response
		 */
		Cloudsearch_initializeCustomer(requestBody: InitializeCustomerRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1:initializeCustomer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

