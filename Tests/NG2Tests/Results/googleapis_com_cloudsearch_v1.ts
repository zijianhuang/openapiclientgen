import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/**
	 * Used to provide a search operator for boolean properties. This is
	 * optional. Search operators let users restrict the query to specific fields
	 * relevant to the type of item being searched.
	 */
	export interface BooleanOperatorOptions {

		/**
		 * Indicates the operator name required in the query in order to isolate the
		 * boolean property. For example, if operatorName is *closed* and the
		 * property's name is *isClosed*, then queries like
		 * *closed:&lt;value&gt;* show results only where the value of the
		 * property named *isClosed* matches *&lt;value&gt;*. By contrast, a
		 * search that uses the same *&lt;value&gt;* without an operator returns
		 * all items where *&lt;value&gt;* matches the value of any
		 * String properties or text within the content field for the item.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		operatorName?: string | null;
	}

	/**
	 * Used to provide a search operator for boolean properties. This is
	 * optional. Search operators let users restrict the query to specific fields
	 * relevant to the type of item being searched.
	 */
	export interface BooleanOperatorOptionsFormProperties {

		/**
		 * Indicates the operator name required in the query in order to isolate the
		 * boolean property. For example, if operatorName is *closed* and the
		 * property's name is *isClosed*, then queries like
		 * *closed:&lt;value&gt;* show results only where the value of the
		 * property named *isClosed* matches *&lt;value&gt;*. By contrast, a
		 * search that uses the same *&lt;value&gt;* without an operator returns
		 * all items where *&lt;value&gt;* matches the value of any
		 * String properties or text within the content field for the item.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		operatorName: FormControl<string | null | undefined>,
	}
	export function CreateBooleanOperatorOptionsFormGroup() {
		return new FormGroup<BooleanOperatorOptionsFormProperties>({
			operatorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options for boolean properties. */
	export interface BooleanPropertyOptions {

		/**
		 * Used to provide a search operator for boolean properties. This is
		 * optional. Search operators let users restrict the query to specific fields
		 * relevant to the type of item being searched.
		 */
		operatorOptions?: BooleanOperatorOptions;
	}

	/** Options for boolean properties. */
	export interface BooleanPropertyOptionsFormProperties {
	}
	export function CreateBooleanPropertyOptionsFormGroup() {
		return new FormGroup<BooleanPropertyOptionsFormProperties>({
		});

	}

	export interface CheckAccessResponse {

		/** Returns true if principal has access.  Returns false otherwise. */
		hasAccess?: boolean | null;
	}
	export interface CheckAccessResponseFormProperties {

		/** Returns true if principal has access.  Returns false otherwise. */
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

	export enum CompositeFilterLogicOperator { AND = 0, OR = 1, NOT = 2 }


	/**
	 * A generic way of expressing filters in a query, which supports two
	 * approaches: <br/><br/>
	 * **1. Setting a ValueFilter.** The name must match an operator_name defined in
	 * the schema for your data source.
	 * <br/>
	 * **2. Setting a CompositeFilter.** The filters are evaluated
	 * using the logical operator. The top-level operators can only be either an AND
	 * or a NOT. AND can appear only at the top-most level. OR can appear only under
	 * a top-level AND.
	 */
	export interface Filter {
		compositeFilter?: CompositeFilter;
		valueFilter?: ValueFilter;
	}

	/**
	 * A generic way of expressing filters in a query, which supports two
	 * approaches: <br/><br/>
	 * **1. Setting a ValueFilter.** The name must match an operator_name defined in
	 * the schema for your data source.
	 * <br/>
	 * **2. Setting a CompositeFilter.** The filters are evaluated
	 * using the logical operator. The top-level operators can only be either an AND
	 * or a NOT. AND can appear only at the top-most level. OR can appear only under
	 * a top-level AND.
	 */
	export interface FilterFormProperties {
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
		});

	}

	export interface ValueFilter {

		/**
		 * The `operator_name` applied to the query, such as *price_greater_than*.
		 * The filter can work against both types of filters defined in the schema
		 * for your data source:
		 * <br/><br/>
		 * 1. `operator_name`, where the query filters results by the property
		 * that matches the value.
		 * <br/>
		 * 2. `greater_than_operator_name` or `less_than_operator_name` in your
		 * schema. The query filters the results for the property values that are
		 * greater than or less than  the supplied value in the query.
		 */
		operatorName?: string | null;

		/** Definition of a single value with generic type. */
		value?: Value;
	}
	export interface ValueFilterFormProperties {

		/**
		 * The `operator_name` applied to the query, such as *price_greater_than*.
		 * The filter can work against both types of filters defined in the schema
		 * for your data source:
		 * <br/><br/>
		 * 1. `operator_name`, where the query filters results by the property
		 * that matches the value.
		 * <br/>
		 * 2. `greater_than_operator_name` or `less_than_operator_name` in your
		 * schema. The query filters the results for the property values that are
		 * greater than or less than  the supplied value in the query.
		 */
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

		/** Status of the items. */
		statusCode?: ItemCountByStatusStatusCode | null;
	}
	export interface ItemCountByStatusFormProperties {

		/** Number of items matching the status code. */
		count: FormControl<string | null | undefined>,

		/** Status of the items. */
		statusCode: FormControl<ItemCountByStatusStatusCode | null | undefined>,
	}
	export function CreateItemCountByStatusFormGroup() {
		return new FormGroup<ItemCountByStatusFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<ItemCountByStatusStatusCode | null | undefined>(undefined),
		});

	}

	export enum ItemCountByStatusStatusCode { CODE_UNSPECIFIED = 0, ERROR = 1, MODIFIED = 2, NEW_ITEM = 3, ACCEPTED = 4 }

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


	/**
	 * Datasource is a logical namespace for items to be indexed.
	 * All items must belong to a datasource.  This is the prerequisite before
	 * items can be indexed into Cloud Search.
	 */
	export interface DataSource {

		/**
		 * If true, Indexing API rejects any modification calls to this datasource
		 * such as create, update, and delete.
		 * Disabling this does not imply halting process of previously
		 * accepted data.
		 */
		disableModifications?: boolean | null;

		/** Disable serving any search or assist results. */
		disableServing?: boolean | null;

		/**
		 * Required. Display name of the datasource
		 * The maximum length is 300 characters.
		 */
		displayName?: string | null;

		/** List of service accounts that have indexing access. */
		indexingServiceAccounts?: Array<string>;

		/**
		 * This field restricts visibility to items at the datasource level. Items
		 * within the datasource are restricted to the union of users and groups
		 * included in this field. Note that, this does not ensure access to a
		 * specific item, as users need to have ACL permissions on the contained
		 * items. This ensures a high level access on the entire datasource, and
		 * that the individual items are not shared outside this visibility.
		 */
		itemsVisibility?: Array<GSuitePrincipal>;

		/**
		 * Name of the datasource resource.
		 * Format: datasources/{source_id}.
		 * <br />The name is ignored when creating a datasource.
		 */
		name?: string | null;

		/**
		 * IDs of the Long Running Operations (LROs) currently running for this
		 * schema.
		 */
		operationIds?: Array<string>;

		/**
		 * A short name or alias for the source.  This value will be used to match the
		 * 'source' operator. For example, if the short name is *&lt;value&gt;* then
		 * queries like *source:&lt;value&gt;* will only return results for this
		 * source. The value must be unique across all datasources. The value must
		 * only contain alphanumeric characters (a-zA-Z0-9). The value cannot start
		 * with 'google' and cannot be one of the following: mail, gmail, docs, drive,
		 * groups, sites, calendar, hangouts, gplus, keep, people, teams.
		 * Its maximum length is 32 characters.
		 */
		shortName?: string | null;
	}

	/**
	 * Datasource is a logical namespace for items to be indexed.
	 * All items must belong to a datasource.  This is the prerequisite before
	 * items can be indexed into Cloud Search.
	 */
	export interface DataSourceFormProperties {

		/**
		 * If true, Indexing API rejects any modification calls to this datasource
		 * such as create, update, and delete.
		 * Disabling this does not imply halting process of previously
		 * accepted data.
		 */
		disableModifications: FormControl<boolean | null | undefined>,

		/** Disable serving any search or assist results. */
		disableServing: FormControl<boolean | null | undefined>,

		/**
		 * Required. Display name of the datasource
		 * The maximum length is 300 characters.
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Name of the datasource resource.
		 * Format: datasources/{source_id}.
		 * <br />The name is ignored when creating a datasource.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A short name or alias for the source.  This value will be used to match the
		 * 'source' operator. For example, if the short name is *&lt;value&gt;* then
		 * queries like *source:&lt;value&gt;* will only return results for this
		 * source. The value must be unique across all datasources. The value must
		 * only contain alphanumeric characters (a-zA-Z0-9). The value cannot start
		 * with 'google' and cannot be one of the following: mail, gmail, docs, drive,
		 * groups, sites, calendar, hangouts, gplus, keep, people, teams.
		 * Its maximum length is 32 characters.
		 */
		shortName: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceFormGroup() {
		return new FormGroup<DataSourceFormProperties>({
			disableModifications: new FormControl<boolean | null | undefined>(undefined),
			disableServing: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			shortName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GSuitePrincipal {

		/**
		 * This principal represents all users of the G Suite domain of the
		 * customer.
		 */
		gsuiteDomain?: boolean | null;

		/** This principal references a G Suite group account */
		gsuiteGroupEmail?: string | null;

		/** This principal references a G Suite user account */
		gsuiteUserEmail?: string | null;
	}
	export interface GSuitePrincipalFormProperties {

		/**
		 * This principal represents all users of the G Suite domain of the
		 * customer.
		 */
		gsuiteDomain: FormControl<boolean | null | undefined>,

		/** This principal references a G Suite group account */
		gsuiteGroupEmail: FormControl<string | null | undefined>,

		/** This principal references a G Suite user account */
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

		/**
		 * Filter options restricting the results. If multiple filters
		 * are present, they are grouped by object type before joining.
		 * Filters with the same object type are joined conjunctively, then
		 * the resulting expressions are joined disjunctively.
		 * The maximum number of elements is 20.
		 * NOTE: Suggest API supports only few filters at the moment:
		 * "objecttype", "type" and "mimetype".
		 * For now, schema specific filters cannot be used to filter suggestions.
		 */
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

		/**
		 * A generic way of expressing filters in a query, which supports two
		 * approaches: <br/><br/>
		 * **1. Setting a ValueFilter.** The name must match an operator_name defined in
		 * the schema for your data source.
		 * <br/>
		 * **2. Setting a CompositeFilter.** The filters are evaluated
		 * using the logical operator. The top-level operators can only be either an AND
		 * or a NOT. AND can appear only at the top-most level. OR can appear only under
		 * a top-level AND.
		 */
		filter?: Filter;

		/**
		 * If object_type is set, only objects of that type are returned. This should
		 * correspond to the name of the object that was registered within the
		 * definition of schema. The maximum length is 256 characters.
		 */
		objectType?: string | null;
	}

	/** Filter options to be applied on query. */
	export interface FilterOptionsFormProperties {

		/**
		 * If object_type is set, only objects of that type are returned. This should
		 * correspond to the name of the object that was registered within the
		 * definition of schema. The maximum length is 256 characters.
		 */
		objectType: FormControl<string | null | undefined>,
	}
	export function CreateFilterOptionsFormGroup() {
		return new FormGroup<FilterOptionsFormProperties>({
			objectType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines sources for the suggest/search APIs. */
	export interface Source {

		/**
		 * Source name for content indexed by the
		 * Indexing API.
		 */
		name?: string | null;

		/** Predefined content source for Google Apps. */
		predefinedSource?: SourcePredefinedSource | null;
	}

	/** Defines sources for the suggest/search APIs. */
	export interface SourceFormProperties {

		/**
		 * Source name for content indexed by the
		 * Indexing API.
		 */
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

	export enum SourcePredefinedSource { NONE = 0, QUERY_HISTORY = 1, PERSON = 2, GOOGLE_DRIVE = 3, GOOGLE_GMAIL = 4, GOOGLE_SITES = 5, GOOGLE_GROUPS = 6, GOOGLE_CALENDAR = 7, GOOGLE_KEEP = 8 }


	/**
	 * Optional. Provides a search operator for date properties.
	 * Search operators let users restrict the query to specific fields relevant
	 * to the type of item being searched.
	 */
	export interface DateOperatorOptions {

		/**
		 * Indicates the operator name required in the query in order to isolate the
		 * date property using the greater-than operator. For example, if
		 * greaterThanOperatorName is *closedafter* and the property's name is
		 * *closeDate*, then queries like *closedafter:&lt;value&gt;*
		 * show results only where the value of the property named *closeDate* is
		 * later than *&lt;value&gt;*.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		greaterThanOperatorName?: string | null;

		/**
		 * Indicates the operator name required in the query in order to isolate the
		 * date property using the less-than operator. For example, if
		 * lessThanOperatorName is *closedbefore* and the property's name is
		 * *closeDate*, then queries like *closedbefore:&lt;value&gt;*
		 * show results only where the value of the property named *closeDate* is
		 * earlier than *&lt;value&gt;*.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		lessThanOperatorName?: string | null;

		/**
		 * Indicates the actual string required in the query in order to isolate the
		 * date property. For example, suppose an issue tracking schema object
		 * has a property named *closeDate* that specifies an operator with an
		 * operatorName of *closedon*. For searches on that data, queries like
		 * *closedon:&lt;value&gt;* show results only where the value of the
		 * *closeDate* property matches *&lt;value&gt;*. By contrast, a
		 * search that uses the same *&lt;value&gt;* without an operator returns
		 * all items where *&lt;value&gt;* matches the value of any String
		 * properties or text within the content field for the indexed datasource.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		operatorName?: string | null;
	}

	/**
	 * Optional. Provides a search operator for date properties.
	 * Search operators let users restrict the query to specific fields relevant
	 * to the type of item being searched.
	 */
	export interface DateOperatorOptionsFormProperties {

		/**
		 * Indicates the operator name required in the query in order to isolate the
		 * date property using the greater-than operator. For example, if
		 * greaterThanOperatorName is *closedafter* and the property's name is
		 * *closeDate*, then queries like *closedafter:&lt;value&gt;*
		 * show results only where the value of the property named *closeDate* is
		 * later than *&lt;value&gt;*.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		greaterThanOperatorName: FormControl<string | null | undefined>,

		/**
		 * Indicates the operator name required in the query in order to isolate the
		 * date property using the less-than operator. For example, if
		 * lessThanOperatorName is *closedbefore* and the property's name is
		 * *closeDate*, then queries like *closedbefore:&lt;value&gt;*
		 * show results only where the value of the property named *closeDate* is
		 * earlier than *&lt;value&gt;*.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		lessThanOperatorName: FormControl<string | null | undefined>,

		/**
		 * Indicates the actual string required in the query in order to isolate the
		 * date property. For example, suppose an issue tracking schema object
		 * has a property named *closeDate* that specifies an operator with an
		 * operatorName of *closedon*. For searches on that data, queries like
		 * *closedon:&lt;value&gt;* show results only where the value of the
		 * *closeDate* property matches *&lt;value&gt;*. By contrast, a
		 * search that uses the same *&lt;value&gt;* without an operator returns
		 * all items where *&lt;value&gt;* matches the value of any String
		 * properties or text within the content field for the indexed datasource.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		operatorName: FormControl<string | null | undefined>,
	}
	export function CreateDateOperatorOptionsFormGroup() {
		return new FormGroup<DateOperatorOptionsFormProperties>({
			greaterThanOperatorName: new FormControl<string | null | undefined>(undefined),
			lessThanOperatorName: new FormControl<string | null | undefined>(undefined),
			operatorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options for date properties. */
	export interface DatePropertyOptions {

		/**
		 * Optional. Provides a search operator for date properties.
		 * Search operators let users restrict the query to specific fields relevant
		 * to the type of item being searched.
		 */
		operatorOptions?: DateOperatorOptions;
	}

	/** Options for date properties. */
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

		/**
		 * If you are asked by Google to help with debugging, set this field.
		 * Otherwise, ignore this field.
		 */
		enableDebugging?: boolean | null;
	}

	/** Shared request debug options for all cloudsearch RPC methods. */
	export interface DebugOptionsFormProperties {

		/**
		 * If you are asked by Google to help with debugging, set this field.
		 * Otherwise, ignore this field.
		 */
		enableDebugging: FormControl<boolean | null | undefined>,
	}
	export function CreateDebugOptionsFormGroup() {
		return new FormGroup<DebugOptionsFormProperties>({
			enableDebugging: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteQueueItemsRequest {

		/**
		 * Name of connector making this call.
		 * <br />Format: datasources/{source_id}/connectors/{ID}
		 */
		connectorName?: string | null;

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions;

		/** Name of a queue to delete items from. */
		queue?: string | null;
	}
	export interface DeleteQueueItemsRequestFormProperties {

		/**
		 * Name of connector making this call.
		 * <br />Format: datasources/{source_id}/connectors/{ID}
		 */
		connectorName: FormControl<string | null | undefined>,

		/** Name of a queue to delete items from. */
		queue: FormControl<string | null | undefined>,
	}
	export function CreateDeleteQueueItemsRequestFormGroup() {
		return new FormGroup<DeleteQueueItemsRequestFormProperties>({
			connectorName: new FormControl<string | null | undefined>(undefined),
			queue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A reference to a top-level property within the object that should be
	 * displayed in search results. The values of the chosen properties is
	 * displayed in the search results along with the
	 * display label
	 * for that property if one is specified. If a display label is not specified,
	 * only the values is shown.
	 */
	export interface DisplayedProperty {

		/**
		 * The name of the top-level property as defined in a property definition
		 * for the object. If the name is not a defined property in the schema, an
		 * error is given when attempting to update the schema.
		 */
		propertyName?: string | null;
	}

	/**
	 * A reference to a top-level property within the object that should be
	 * displayed in search results. The values of the chosen properties is
	 * displayed in the search results along with the
	 * display label
	 * for that property if one is specified. If a display label is not specified,
	 * only the values is shown.
	 */
	export interface DisplayedPropertyFormProperties {

		/**
		 * The name of the top-level property as defined in a property definition
		 * for the object. If the name is not a defined property in the schema, an
		 * error is given when attempting to update the schema.
		 */
		propertyName: FormControl<string | null | undefined>,
	}
	export function CreateDisplayedPropertyFormGroup() {
		return new FormGroup<DisplayedPropertyFormProperties>({
			propertyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Used to provide a search operator for double properties. This is
	 * optional. Search operators let users restrict the query to specific fields
	 * relevant to the type of item being searched.
	 */
	export interface DoubleOperatorOptions {

		/**
		 * Indicates the operator name required in the query in order to use the
		 * double property in sorting or as a facet.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		operatorName?: string | null;
	}

	/**
	 * Used to provide a search operator for double properties. This is
	 * optional. Search operators let users restrict the query to specific fields
	 * relevant to the type of item being searched.
	 */
	export interface DoubleOperatorOptionsFormProperties {

		/**
		 * Indicates the operator name required in the query in order to use the
		 * double property in sorting or as a facet.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		operatorName: FormControl<string | null | undefined>,
	}
	export function CreateDoubleOperatorOptionsFormGroup() {
		return new FormGroup<DoubleOperatorOptionsFormProperties>({
			operatorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options for double properties. */
	export interface DoublePropertyOptions {

		/**
		 * Used to provide a search operator for double properties. This is
		 * optional. Search operators let users restrict the query to specific fields
		 * relevant to the type of item being searched.
		 */
		operatorOptions?: DoubleOperatorOptions;
	}

	/** Options for double properties. */
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

	export enum DriveFollowUpRestrictType { UNSPECIFIED = 0, FOLLOWUP_SUGGESTIONS = 1, FOLLOWUP_ACTION_ITEMS = 2 }


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

	export enum DriveLocationRestrictType { UNSPECIFIED = 0, TRASHED = 1, STARRED = 2 }


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

	export enum DriveMimeTypeRestrictType { UNSPECIFIED = 0, PDF = 1, DOCUMENT = 2, PRESENTATION = 3, SPREADSHEET = 4, FORM = 5, DRAWING = 6, SCRIPT = 7, MAP = 8, IMAGE = 9, AUDIO = 10, VIDEO = 11, FOLDER = 12, ARCHIVE = 13, SITE = 14 }


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

	export enum DriveTimeSpanRestrictType { UNSPECIFIED = 0, TODAY = 1, YESTERDAY = 2, LAST_7_DAYS = 3, LAST_30_DAYS = 4, LAST_90_DAYS = 5 }


	/** A person's email address. */
	export interface EmailAddress {

		/** The email address. */
		emailAddress?: string | null;
	}

	/** A person's email address. */
	export interface EmailAddressFormProperties {

		/** The email address. */
		emailAddress: FormControl<string | null | undefined>,
	}
	export function CreateEmailAddressFormGroup() {
		return new FormGroup<EmailAddressFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Used to provide a search operator for enum properties. This is
	 * optional. Search operators let users restrict the query to specific fields
	 * relevant to the type of item being searched. For example, if you provide no
	 * operator for a *priority* enum property with possible values *p0* and *p1*,
	 * a query that contains the term *p0* returns items that have *p0* as the
	 * value of the *priority* property, as well as any items that contain the
	 * string *p0* in other fields. If you provide an operator name for the enum,
	 * such as *priority*, then search users can use that operator to refine
	 * results to only items that have *p0* as this property's value, with the
	 * query *priority:p0*.
	 */
	export interface EnumOperatorOptions {

		/**
		 * Indicates the operator name required in the query in order to isolate the
		 * enum property. For example, if operatorName is *priority* and the
		 * property's name is *priorityVal*, then queries like
		 * *priority:&lt;value&gt;* show results only where the value of the
		 * property named *priorityVal* matches *&lt;value&gt;*. By contrast, a
		 * search that uses the same *&lt;value&gt;* without an operator returns
		 * all items where *&lt;value&gt;* matches the value of any String
		 * properties or text within the content field for the item.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		operatorName?: string | null;
	}

	/**
	 * Used to provide a search operator for enum properties. This is
	 * optional. Search operators let users restrict the query to specific fields
	 * relevant to the type of item being searched. For example, if you provide no
	 * operator for a *priority* enum property with possible values *p0* and *p1*,
	 * a query that contains the term *p0* returns items that have *p0* as the
	 * value of the *priority* property, as well as any items that contain the
	 * string *p0* in other fields. If you provide an operator name for the enum,
	 * such as *priority*, then search users can use that operator to refine
	 * results to only items that have *p0* as this property's value, with the
	 * query *priority:p0*.
	 */
	export interface EnumOperatorOptionsFormProperties {

		/**
		 * Indicates the operator name required in the query in order to isolate the
		 * enum property. For example, if operatorName is *priority* and the
		 * property's name is *priorityVal*, then queries like
		 * *priority:&lt;value&gt;* show results only where the value of the
		 * property named *priorityVal* matches *&lt;value&gt;*. By contrast, a
		 * search that uses the same *&lt;value&gt;* without an operator returns
		 * all items where *&lt;value&gt;* matches the value of any String
		 * properties or text within the content field for the item.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		operatorName: FormControl<string | null | undefined>,
	}
	export function CreateEnumOperatorOptionsFormGroup() {
		return new FormGroup<EnumOperatorOptionsFormProperties>({
			operatorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Options for enum properties, which allow you to define a restricted set of
	 * strings to match user queries, set rankings for those string values, and
	 * define an operator name to be paired with those strings so that users can
	 * narrow results to only items with a specific value. For example, for items in
	 * a request tracking system with priority information, you could define *p0* as
	 * an allowable enum value and tie this enum to the operator name *priority* so
	 * that search users could add *priority:p0* to their query to restrict the set
	 * of results to only those items indexed with the value *p0*.
	 */
	export interface EnumPropertyOptions {

		/**
		 * Used to provide a search operator for enum properties. This is
		 * optional. Search operators let users restrict the query to specific fields
		 * relevant to the type of item being searched. For example, if you provide no
		 * operator for a *priority* enum property with possible values *p0* and *p1*,
		 * a query that contains the term *p0* returns items that have *p0* as the
		 * value of the *priority* property, as well as any items that contain the
		 * string *p0* in other fields. If you provide an operator name for the enum,
		 * such as *priority*, then search users can use that operator to refine
		 * results to only items that have *p0* as this property's value, with the
		 * query *priority:p0*.
		 */
		operatorOptions?: EnumOperatorOptions;

		/**
		 * Used to specify the ordered ranking for the enumeration that determines how
		 * the integer values provided in the possible EnumValuePairs are used to rank
		 * results. If specified, integer values must be provided for all possible
		 * EnumValuePair values given for this property. Can only be used if
		 * isRepeatable
		 * is false.
		 */
		orderedRanking?: EnumPropertyOptionsOrderedRanking | null;

		/**
		 * The list of possible values for the enumeration property. All
		 * EnumValuePairs must provide a string value. If you specify an integer value
		 * for one EnumValuePair, then all possible EnumValuePairs must provide an
		 * integer value. Both the string value and integer value must be unique over
		 * all possible values. Once set, possible values cannot be removed or
		 * modified. If you supply an ordered ranking and think you might insert
		 * additional enum values in the future, leave gaps in the initial integer
		 * values to allow adding a value in between previously registered values.
		 * The maximum number of elements is 100.
		 */
		possibleValues?: Array<EnumValuePair>;
	}

	/**
	 * Options for enum properties, which allow you to define a restricted set of
	 * strings to match user queries, set rankings for those string values, and
	 * define an operator name to be paired with those strings so that users can
	 * narrow results to only items with a specific value. For example, for items in
	 * a request tracking system with priority information, you could define *p0* as
	 * an allowable enum value and tie this enum to the operator name *priority* so
	 * that search users could add *priority:p0* to their query to restrict the set
	 * of results to only those items indexed with the value *p0*.
	 */
	export interface EnumPropertyOptionsFormProperties {

		/**
		 * Used to specify the ordered ranking for the enumeration that determines how
		 * the integer values provided in the possible EnumValuePairs are used to rank
		 * results. If specified, integer values must be provided for all possible
		 * EnumValuePair values given for this property. Can only be used if
		 * isRepeatable
		 * is false.
		 */
		orderedRanking: FormControl<EnumPropertyOptionsOrderedRanking | null | undefined>,
	}
	export function CreateEnumPropertyOptionsFormGroup() {
		return new FormGroup<EnumPropertyOptionsFormProperties>({
			orderedRanking: new FormControl<EnumPropertyOptionsOrderedRanking | null | undefined>(undefined),
		});

	}

	export enum EnumPropertyOptionsOrderedRanking { NO_ORDER = 0, ASCENDING = 1, DESCENDING = 2 }


	/**
	 * The enumeration value pair defines two things: a required string value and
	 * an optional integer value. The string value defines the necessary query
	 * term required to retrieve that item, such as *p0* for a priority item.
	 * The integer value determines the ranking of that string value relative
	 * to other enumerated values for the same property. For example, you might
	 * associate *p0* with *0* and define another enum pair such as *p1* and *1*.
	 * You must use the integer value in combination with
	 * ordered
	 * ranking to
	 * set the ranking of a given value relative to other enumerated values for
	 * the same property name. Here, a ranking order of DESCENDING for *priority*
	 * properties results in a ranking boost for items indexed with a value of
	 * *p0* compared to items indexed with a value of *p1*. Without a specified
	 * ranking order, the integer value has no effect on item ranking.
	 */
	export interface EnumValuePair {

		/**
		 * The integer value of the EnumValuePair which must be non-negative.
		 * Optional.
		 */
		integerValue?: number | null;

		/**
		 * The string value of the EnumValuePair.
		 * The maximum length is 32 characters.
		 */
		stringValue?: string | null;
	}

	/**
	 * The enumeration value pair defines two things: a required string value and
	 * an optional integer value. The string value defines the necessary query
	 * term required to retrieve that item, such as *p0* for a priority item.
	 * The integer value determines the ranking of that string value relative
	 * to other enumerated values for the same property. For example, you might
	 * associate *p0* with *0* and define another enum pair such as *p1* and *1*.
	 * You must use the integer value in combination with
	 * ordered
	 * ranking to
	 * set the ranking of a given value relative to other enumerated values for
	 * the same property name. Here, a ranking order of DESCENDING for *priority*
	 * properties results in a ranking boost for items indexed with a value of
	 * *p0* compared to items indexed with a value of *p1*. Without a specified
	 * ranking order, the integer value has no effect on item ranking.
	 */
	export interface EnumValuePairFormProperties {

		/**
		 * The integer value of the EnumValuePair which must be non-negative.
		 * Optional.
		 */
		integerValue: FormControl<number | null | undefined>,

		/**
		 * The string value of the EnumValuePair.
		 * The maximum length is 32 characters.
		 */
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


	/**
	 * A bucket in a facet is the basic unit of operation. A bucket can comprise
	 * either a single value OR a contiguous range of values, depending on the
	 * type of the field bucketed.
	 * FacetBucket is currently used only for returning the response object.
	 */
	export interface FacetBucket {

		/**
		 * Number of results that match the bucket value. Counts are only returned
		 * for searches when count accuracy is ensured. Can be empty.
		 */
		count?: number | null;

		/**
		 * Percent of results that match the bucket value. This value is between
		 * (0-100]. Percentages are returned for all searches, but are an estimate.
		 * Because percentages are always returned, you should render percentages
		 * instead of counts.
		 */
		percentage?: number | null;

		/** Definition of a single value with generic type. */
		value?: Value;
	}

	/**
	 * A bucket in a facet is the basic unit of operation. A bucket can comprise
	 * either a single value OR a contiguous range of values, depending on the
	 * type of the field bucketed.
	 * FacetBucket is currently used only for returning the response object.
	 */
	export interface FacetBucketFormProperties {

		/**
		 * Number of results that match the bucket value. Counts are only returned
		 * for searches when count accuracy is ensured. Can be empty.
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Percent of results that match the bucket value. This value is between
		 * (0-100]. Percentages are returned for all searches, but are an estimate.
		 * Because percentages are always returned, you should render percentages
		 * instead of counts.
		 */
		percentage: FormControl<number | null | undefined>,
	}
	export function CreateFacetBucketFormGroup() {
		return new FormGroup<FacetBucketFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * Specifies operators to return facet results for. There will be one
	 * FacetResult for every source_name/object_type/operator_name combination.
	 */
	export interface FacetOptions {

		/**
		 * Maximum number of facet buckets that should be returned for this facet.
		 * Defaults to 10.
		 * Maximum value is 100.
		 */
		numFacetBuckets?: number | null;

		/**
		 * If object_type is set, only those objects of that type will be used to
		 * compute facets. If empty, then all objects will be used to compute facets.
		 */
		objectType?: string | null;

		/**
		 * Name of the operator chosen for faceting. @see
		 * cloudsearch.SchemaPropertyOptions
		 */
		operatorName?: string | null;

		/**
		 * Source name to facet on. Format: datasources/{source_id}
		 * If empty, all data sources will be used.
		 */
		sourceName?: string | null;
	}

	/**
	 * Specifies operators to return facet results for. There will be one
	 * FacetResult for every source_name/object_type/operator_name combination.
	 */
	export interface FacetOptionsFormProperties {

		/**
		 * Maximum number of facet buckets that should be returned for this facet.
		 * Defaults to 10.
		 * Maximum value is 100.
		 */
		numFacetBuckets: FormControl<number | null | undefined>,

		/**
		 * If object_type is set, only those objects of that type will be used to
		 * compute facets. If empty, then all objects will be used to compute facets.
		 */
		objectType: FormControl<string | null | undefined>,

		/**
		 * Name of the operator chosen for faceting. @see
		 * cloudsearch.SchemaPropertyOptions
		 */
		operatorName: FormControl<string | null | undefined>,

		/**
		 * Source name to facet on. Format: datasources/{source_id}
		 * If empty, all data sources will be used.
		 */
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


	/** Source specific facet response */
	export interface FacetResult {

		/** FacetBuckets for values in response containing at least a single result. */
		buckets?: Array<FacetBucket>;

		/** Object type for which facet results are returned. Can be empty. */
		objectType?: string | null;

		/**
		 * Name of the operator chosen for faceting. @see
		 * cloudsearch.SchemaPropertyOptions
		 */
		operatorName?: string | null;

		/** Source name for which facet results are returned. Will not be empty. */
		sourceName?: string | null;
	}

	/** Source specific facet response */
	export interface FacetResultFormProperties {

		/** Object type for which facet results are returned. Can be empty. */
		objectType: FormControl<string | null | undefined>,

		/**
		 * Name of the operator chosen for faceting. @see
		 * cloudsearch.SchemaPropertyOptions
		 */
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

		/** Description of the error. */
		description?: string | null;

		/** Path of field with violation. */
		field?: string | null;
	}
	export interface FieldViolationFormProperties {

		/** Description of the error. */
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


	/**
	 * Indicates which freshness property to use when adjusting search ranking for
	 * an item. Fresher, more recent dates indicate higher quality. Use the
	 * freshness option property that best works with your data. For fileshare
	 * documents, last modified time is most relevant. For calendar event data,
	 * the time when the event occurs is a more relevant freshness indicator. In
	 * this way, calendar events that occur closer to the time of the search query
	 * are considered higher quality and ranked accordingly.
	 */
	export interface FreshnessOptions {

		/**
		 * The duration after which an object should be considered
		 * stale. The default value is 180 days (in seconds).
		 */
		freshnessDuration?: string | null;

		/**
		 * This property indicates the freshness level of the object in the index.
		 * If set, this property must be a top-level property within the
		 * property definitions
		 * and it must be a
		 * timestamp type
		 * or
		 * date type.
		 * Otherwise, the Indexing API uses
		 * updateTime
		 * as the freshness indicator.
		 * The maximum length is 256 characters.
		 * When a property is used to calculate freshness, the value defaults
		 * to 2 years from the current time.
		 */
		freshnessProperty?: string | null;
	}

	/**
	 * Indicates which freshness property to use when adjusting search ranking for
	 * an item. Fresher, more recent dates indicate higher quality. Use the
	 * freshness option property that best works with your data. For fileshare
	 * documents, last modified time is most relevant. For calendar event data,
	 * the time when the event occurs is a more relevant freshness indicator. In
	 * this way, calendar events that occur closer to the time of the search query
	 * are considered higher quality and ranked accordingly.
	 */
	export interface FreshnessOptionsFormProperties {

		/**
		 * The duration after which an object should be considered
		 * stale. The default value is 180 days (in seconds).
		 */
		freshnessDuration: FormControl<string | null | undefined>,

		/**
		 * This property indicates the freshness level of the object in the index.
		 * If set, this property must be a top-level property within the
		 * property definitions
		 * and it must be a
		 * timestamp type
		 * or
		 * date type.
		 * Otherwise, the Indexing API uses
		 * updateTime
		 * as the freshness indicator.
		 * The maximum length is 256 characters.
		 * When a property is used to calculate freshness, the value defaults
		 * to 2 years from the current time.
		 */
		freshnessProperty: FormControl<string | null | undefined>,
	}
	export function CreateFreshnessOptionsFormGroup() {
		return new FormGroup<FreshnessOptionsFormProperties>({
			freshnessDuration: new FormControl<string | null | undefined>(undefined),
			freshnessProperty: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCustomerIndexStatsResponse {

		/** Summary of indexed item counts, one for each day in the requested range. */
		stats?: Array<CustomerIndexStats>;
	}
	export interface GetCustomerIndexStatsResponseFormProperties {
	}
	export function CreateGetCustomerIndexStatsResponseFormGroup() {
		return new FormGroup<GetCustomerIndexStatsResponseFormProperties>({
		});

	}

	export interface GetCustomerQueryStatsResponse {
		stats?: Array<CustomerQueryStats>;
	}
	export interface GetCustomerQueryStatsResponseFormProperties {
	}
	export function CreateGetCustomerQueryStatsResponseFormGroup() {
		return new FormGroup<GetCustomerQueryStatsResponseFormProperties>({
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

		/** Summary of indexed item counts, one for each day in the requested range. */
		stats?: Array<DataSourceIndexStats>;
	}
	export interface GetDataSourceIndexStatsResponseFormProperties {
	}
	export function CreateGetDataSourceIndexStatsResponseFormGroup() {
		return new FormGroup<GetDataSourceIndexStatsResponseFormProperties>({
		});

	}

	export interface GetSearchApplicationQueryStatsResponse {
		stats?: Array<SearchApplicationQueryStats>;
	}
	export interface GetSearchApplicationQueryStatsResponseFormProperties {
	}
	export function CreateGetSearchApplicationQueryStatsResponseFormGroup() {
		return new FormGroup<GetSearchApplicationQueryStatsResponseFormProperties>({
		});

	}

	export interface SearchApplicationQueryStats {

		/** Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999. */
		date?: Date;
		queryCountByStatus?: Array<QueryCountByStatus>;
	}
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


	/**
	 * Used to provide a search operator for html properties. This is optional.
	 * Search operators let users restrict the query to specific fields relevant
	 * to the type of item being searched.
	 */
	export interface HtmlOperatorOptions {

		/**
		 * Indicates the operator name required in the query in order to isolate the
		 * html property. For example, if operatorName is *subject* and the
		 * property's name is *subjectLine*, then queries like
		 * *subject:&lt;value&gt;* show results only where the value of the
		 * property named *subjectLine* matches *&lt;value&gt;*. By contrast, a
		 * search that uses the same *&lt;value&gt;* without an operator return
		 * all items where *&lt;value&gt;* matches the value of any
		 * html properties or text within the content field for the item.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		operatorName?: string | null;
	}

	/**
	 * Used to provide a search operator for html properties. This is optional.
	 * Search operators let users restrict the query to specific fields relevant
	 * to the type of item being searched.
	 */
	export interface HtmlOperatorOptionsFormProperties {

		/**
		 * Indicates the operator name required in the query in order to isolate the
		 * html property. For example, if operatorName is *subject* and the
		 * property's name is *subjectLine*, then queries like
		 * *subject:&lt;value&gt;* show results only where the value of the
		 * property named *subjectLine* matches *&lt;value&gt;*. By contrast, a
		 * search that uses the same *&lt;value&gt;* without an operator return
		 * all items where *&lt;value&gt;* matches the value of any
		 * html properties or text within the content field for the item.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		operatorName: FormControl<string | null | undefined>,
	}
	export function CreateHtmlOperatorOptionsFormGroup() {
		return new FormGroup<HtmlOperatorOptionsFormProperties>({
			operatorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options for html properties. */
	export interface HtmlPropertyOptions {

		/**
		 * Used to provide a search operator for html properties. This is optional.
		 * Search operators let users restrict the query to specific fields relevant
		 * to the type of item being searched.
		 */
		operatorOptions?: HtmlOperatorOptions;
		retrievalImportance?: RetrievalImportance;
	}

	/** Options for html properties. */
	export interface HtmlPropertyOptionsFormProperties {
	}
	export function CreateHtmlPropertyOptionsFormGroup() {
		return new FormGroup<HtmlPropertyOptionsFormProperties>({
		});

	}

	export interface RetrievalImportance {

		/**
		 * Indicates the ranking importance given to property when it is matched
		 * during retrieval. Once set, the token importance of a property cannot be
		 * changed.
		 */
		importance?: RetrievalImportanceImportance | null;
	}
	export interface RetrievalImportanceFormProperties {

		/**
		 * Indicates the ranking importance given to property when it is matched
		 * during retrieval. Once set, the token importance of a property cannot be
		 * changed.
		 */
		importance: FormControl<RetrievalImportanceImportance | null | undefined>,
	}
	export function CreateRetrievalImportanceFormGroup() {
		return new FormGroup<RetrievalImportanceFormProperties>({
			importance: new FormControl<RetrievalImportanceImportance | null | undefined>(undefined),
		});

	}

	export enum RetrievalImportanceImportance { DEFAULT = 0, HIGHEST = 1, HIGH = 2, LOW = 3, NONE = 4 }


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

		/**
		 * Specifies if the index request should allow gsuite principals that do not
		 * exist or are deleted in the index request.
		 */
		allowUnknownGsuitePrincipals?: boolean | null;
	}
	export interface IndexItemOptionsFormProperties {

		/**
		 * Specifies if the index request should allow gsuite principals that do not
		 * exist or are deleted in the index request.
		 */
		allowUnknownGsuitePrincipals: FormControl<boolean | null | undefined>,
	}
	export function CreateIndexItemOptionsFormGroup() {
		return new FormGroup<IndexItemOptionsFormProperties>({
			allowUnknownGsuitePrincipals: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface IndexItemRequest {

		/**
		 * Name of connector making this call.
		 * <br />Format: datasources/{source_id}/connectors/{ID}
		 */
		connectorName?: string | null;

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions;
		indexItemOptions?: IndexItemOptions;

		/**
		 * Represents a single object that is an item in the search index, such as a
		 * file, folder, or a database record.
		 */
		item?: Item;

		/** Required. The RequestMode for this request. */
		mode?: IndexItemRequestMode | null;
	}
	export interface IndexItemRequestFormProperties {

		/**
		 * Name of connector making this call.
		 * <br />Format: datasources/{source_id}/connectors/{ID}
		 */
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


	/**
	 * Represents a single object that is an item in the search index, such as a
	 * file, folder, or a database record.
	 */
	export interface Item {

		/**
		 * Access control list information for the item. For more information see
		 * https://developers.google.com/cloud-search/docs/guides/index-your-data#acls
		 */
		acl?: ItemAcl;

		/** Content of an item to be indexed and surfaced by Cloud Search. */
		content?: ItemContent;

		/** Type for this item. */
		itemType?: ItemItemType | null;

		/** Available metadata fields for the item. */
		metadata?: ItemMetadata;

		/**
		 * Name of the Item. Format:
		 * datasources/{source_id}/items/{item_id}
		 * <br />This is a required field.
		 * The maximum length is 1536 characters.
		 */
		name?: string | null;

		/**
		 * Additional state connector can store for this item.
		 * The maximum length is 10000 bytes.
		 */
		payload?: string | null;

		/**
		 * Queue this item belongs to.
		 * The maximum length is 100 characters.
		 */
		queue?: string | null;

		/** This contains item's status and any errors. */
		status?: ItemStatus;

		/** Available structured data fields for the item. */
		structuredData?: ItemStructuredData;

		/**
		 * Required. The indexing system stores the version from the datasource as a
		 * byte string and compares the Item version in the index
		 * to the version of the queued Item using lexical ordering.
		 * <br /><br />
		 * Cloud Search Indexing won't index or delete any queued item with
		 * a version value that is less than or equal to the version of the
		 * currently indexed item.
		 * The maximum length for this field is 1024 bytes.
		 */
		version?: string | null;
	}

	/**
	 * Represents a single object that is an item in the search index, such as a
	 * file, folder, or a database record.
	 */
	export interface ItemFormProperties {

		/** Type for this item. */
		itemType: FormControl<ItemItemType | null | undefined>,

		/**
		 * Name of the Item. Format:
		 * datasources/{source_id}/items/{item_id}
		 * <br />This is a required field.
		 * The maximum length is 1536 characters.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Additional state connector can store for this item.
		 * The maximum length is 10000 bytes.
		 */
		payload: FormControl<string | null | undefined>,

		/**
		 * Queue this item belongs to.
		 * The maximum length is 100 characters.
		 */
		queue: FormControl<string | null | undefined>,

		/**
		 * Required. The indexing system stores the version from the datasource as a
		 * byte string and compares the Item version in the index
		 * to the version of the queued Item using lexical ordering.
		 * <br /><br />
		 * Cloud Search Indexing won't index or delete any queued item with
		 * a version value that is less than or equal to the version of the
		 * currently indexed item.
		 * The maximum length for this field is 1024 bytes.
		 */
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


	/**
	 * Access control list information for the item. For more information see
	 * https://developers.google.com/cloud-search/docs/guides/index-your-data#acls
	 */
	export interface ItemAcl {

		/**
		 * Sets the type of access rules to apply when an item inherits its ACL from a
		 * parent. This should always be set in tandem with the
		 * inheritAclFrom
		 * field. Also, when the
		 * inheritAclFrom field
		 * is set, this field should be set to a valid AclInheritanceType.
		 */
		aclInheritanceType?: ItemAclAclInheritanceType | null;

		/**
		 * List of principals who are explicitly denied access to the item in search
		 * results. While principals are denied access by default, use denied readers
		 * to handle exceptions and override the list allowed readers.
		 * The maximum number of elements is 100.
		 */
		deniedReaders?: Array<Principal>;

		/**
		 * Name of the item to inherit the Access Permission List (ACL) from.
		 * Note: ACL inheritance *only* provides access permissions
		 * to child items and does not define structural relationships, nor does it
		 * provide convenient ways to delete large groups of items.
		 * Deleting an ACL parent from the index only alters the access permissions of
		 * child items that reference the parent in the
		 * inheritAclFrom
		 * field. The item is still in the index, but may not
		 * visible in search results. By contrast, deletion of a container item
		 * also deletes all items that reference the container via the
		 * containerName
		 * field.
		 * The maximum length for this field is 1536 characters.
		 */
		inheritAclFrom?: string | null;

		/**
		 * Optional. List of owners for the item. This field has no bearing on
		 * document access permissions. It does, however, offer
		 * a slight ranking boosts items where the querying user is an owner.
		 * The maximum number of elements is 5.
		 */
		owners?: Array<Principal>;

		/**
		 * List of principals who are allowed to see the item in search results.
		 * Optional if inheriting permissions from another item or if the item
		 * is not intended to be visible, such as
		 * virtual
		 * containers.
		 * The maximum number of elements is 1000.
		 */
		readers?: Array<Principal>;
	}

	/**
	 * Access control list information for the item. For more information see
	 * https://developers.google.com/cloud-search/docs/guides/index-your-data#acls
	 */
	export interface ItemAclFormProperties {

		/**
		 * Sets the type of access rules to apply when an item inherits its ACL from a
		 * parent. This should always be set in tandem with the
		 * inheritAclFrom
		 * field. Also, when the
		 * inheritAclFrom field
		 * is set, this field should be set to a valid AclInheritanceType.
		 */
		aclInheritanceType: FormControl<ItemAclAclInheritanceType | null | undefined>,

		/**
		 * Name of the item to inherit the Access Permission List (ACL) from.
		 * Note: ACL inheritance *only* provides access permissions
		 * to child items and does not define structural relationships, nor does it
		 * provide convenient ways to delete large groups of items.
		 * Deleting an ACL parent from the index only alters the access permissions of
		 * child items that reference the parent in the
		 * inheritAclFrom
		 * field. The item is still in the index, but may not
		 * visible in search results. By contrast, deletion of a container item
		 * also deletes all items that reference the container via the
		 * containerName
		 * field.
		 * The maximum length for this field is 1536 characters.
		 */
		inheritAclFrom: FormControl<string | null | undefined>,
	}
	export function CreateItemAclFormGroup() {
		return new FormGroup<ItemAclFormProperties>({
			aclInheritanceType: new FormControl<ItemAclAclInheritanceType | null | undefined>(undefined),
			inheritAclFrom: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ItemAclAclInheritanceType { NOT_APPLICABLE = 0, CHILD_OVERRIDE = 1, PARENT_OVERRIDE = 2, BOTH_PERMIT = 3 }


	/** Reference to a user, group, or domain. */
	export interface Principal {

		/**
		 * This principal is a group identified using an external identity.
		 * The name field must specify the group resource name with this format:
		 * identitysources/{source_id}/groups/{ID}
		 */
		groupResourceName?: string | null;
		gsuitePrincipal?: GSuitePrincipal;

		/**
		 * This principal is a user identified using an external identity.
		 * The name field must specify the user resource name with this format:
		 * identitysources/{source_id}/users/{ID}
		 */
		userResourceName?: string | null;
	}

	/** Reference to a user, group, or domain. */
	export interface PrincipalFormProperties {

		/**
		 * This principal is a group identified using an external identity.
		 * The name field must specify the group resource name with this format:
		 * identitysources/{source_id}/groups/{ID}
		 */
		groupResourceName: FormControl<string | null | undefined>,

		/**
		 * This principal is a user identified using an external identity.
		 * The name field must specify the user resource name with this format:
		 * identitysources/{source_id}/users/{ID}
		 */
		userResourceName: FormControl<string | null | undefined>,
	}
	export function CreatePrincipalFormGroup() {
		return new FormGroup<PrincipalFormProperties>({
			groupResourceName: new FormControl<string | null | undefined>(undefined),
			userResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Content of an item to be indexed and surfaced by Cloud Search. */
	export interface ItemContent {

		/**
		 * Represents an upload session reference.
		 * This reference is created via upload
		 * method.
		 * Updating of item content may refer to this uploaded content via
		 * contentDataRef.
		 */
		contentDataRef?: UploadItemRef;
		contentFormat?: ItemContentContentFormat | null;

		/**
		 * Hashing info calculated and provided by the API client for content.
		 * Can be used with the items.push method to calculate modified state.
		 * The maximum length is 2048 characters.
		 */
		hash?: string | null;

		/**
		 * Content that is supplied inlined within the update method.
		 * The maximum length is 102400 bytes (100 KiB).
		 */
		inlineContent?: string | null;
	}

	/** Content of an item to be indexed and surfaced by Cloud Search. */
	export interface ItemContentFormProperties {
		contentFormat: FormControl<ItemContentContentFormat | null | undefined>,

		/**
		 * Hashing info calculated and provided by the API client for content.
		 * Can be used with the items.push method to calculate modified state.
		 * The maximum length is 2048 characters.
		 */
		hash: FormControl<string | null | undefined>,

		/**
		 * Content that is supplied inlined within the update method.
		 * The maximum length is 102400 bytes (100 KiB).
		 */
		inlineContent: FormControl<string | null | undefined>,
	}
	export function CreateItemContentFormGroup() {
		return new FormGroup<ItemContentFormProperties>({
			contentFormat: new FormControl<ItemContentContentFormat | null | undefined>(undefined),
			hash: new FormControl<string | null | undefined>(undefined),
			inlineContent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Represents an upload session reference.
	 * This reference is created via upload
	 * method.
	 * Updating of item content may refer to this uploaded content via
	 * contentDataRef.
	 */
	export interface UploadItemRef {

		/**
		 * Name of the content reference.
		 * The maximum length is 2048 characters.
		 */
		name?: string | null;
	}

	/**
	 * Represents an upload session reference.
	 * This reference is created via upload
	 * method.
	 * Updating of item content may refer to this uploaded content via
	 * contentDataRef.
	 */
	export interface UploadItemRefFormProperties {

		/**
		 * Name of the content reference.
		 * The maximum length is 2048 characters.
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUploadItemRefFormGroup() {
		return new FormGroup<UploadItemRefFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ItemContentContentFormat { UNSPECIFIED = 0, HTML = 1, TEXT = 2, RAW = 3 }

	export enum ItemItemType { UNSPECIFIED = 0, CONTENT_ITEM = 1, CONTAINER_ITEM = 2, VIRTUAL_CONTAINER_ITEM = 3 }


	/** Available metadata fields for the item. */
	export interface ItemMetadata {

		/**
		 * The name of the container for this item.
		 * Deletion of the container item leads to automatic deletion of this
		 * item.  Note: ACLs are not inherited from a container item.
		 * To provide ACL inheritance for an item, use the
		 * inheritAclFrom
		 * field. The maximum length is 1536 characters.
		 */
		containerName?: string | null;

		/**
		 * The BCP-47 language code for the item, such as "en-US" or "sr-Latn". For
		 * more information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 * The maximum length is 32 characters.
		 */
		contentLanguage?: string | null;

		/** The time when the item was created in the source repository. */
		createTime?: string | null;

		/**
		 * Hashing value provided by the API caller.
		 * This can be used with the
		 * items.push
		 * method to calculate modified state.
		 * The maximum length is 2048 characters.
		 */
		hash?: string | null;

		/**
		 * A list of interactions for the item.  Interactions are used to improve
		 * Search quality, but are not exposed to end users.
		 * The maximum number of elements is 1000.
		 */
		interactions?: Array<Interaction>;

		/**
		 * Additional keywords or phrases that should match the item.
		 * Used internally for user generated content.
		 * The maximum number of elements is 100.
		 * The maximum length is 8192 characters.
		 */
		keywords?: Array<string>;

		/**
		 * The original mime-type of
		 * ItemContent.content
		 * in the source repository.
		 * The maximum length is 256 characters.
		 */
		mimeType?: string | null;

		/**
		 * The type of the item.  This should correspond to the name of an object
		 * definition in the schema registered for the data source.  For example, if
		 * the schema for the data source contains an object definition with name
		 * 'document', then item indexing requests for objects of that type should set
		 * objectType to 'document'.
		 * The maximum length is 256 characters.
		 */
		objectType?: string | null;

		/** Additional search quality metadata of the item. */
		searchQualityMetadata?: SearchQualityMetadata;

		/**
		 * Link to the source repository serving the data.  &#83;earch results apply
		 * this link to the title.
		 * Whitespace or special characters may cause Cloud &#83;earch result links to
		 * trigger a redirect notice; to avoid this, encode the URL.
		 * The maximum length is 2048 characters.
		 */
		sourceRepositoryUrl?: string | null;

		/**
		 * The title of the item.  If given, this will be the displayed title of the
		 * Search result.
		 * The maximum length is 2048 characters.
		 */
		title?: string | null;

		/** The time when the item was last modified in the source repository. */
		updateTime?: string | null;
	}

	/** Available metadata fields for the item. */
	export interface ItemMetadataFormProperties {

		/**
		 * The name of the container for this item.
		 * Deletion of the container item leads to automatic deletion of this
		 * item.  Note: ACLs are not inherited from a container item.
		 * To provide ACL inheritance for an item, use the
		 * inheritAclFrom
		 * field. The maximum length is 1536 characters.
		 */
		containerName: FormControl<string | null | undefined>,

		/**
		 * The BCP-47 language code for the item, such as "en-US" or "sr-Latn". For
		 * more information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 * The maximum length is 32 characters.
		 */
		contentLanguage: FormControl<string | null | undefined>,

		/** The time when the item was created in the source repository. */
		createTime: FormControl<string | null | undefined>,

		/**
		 * Hashing value provided by the API caller.
		 * This can be used with the
		 * items.push
		 * method to calculate modified state.
		 * The maximum length is 2048 characters.
		 */
		hash: FormControl<string | null | undefined>,

		/**
		 * The original mime-type of
		 * ItemContent.content
		 * in the source repository.
		 * The maximum length is 256 characters.
		 */
		mimeType: FormControl<string | null | undefined>,

		/**
		 * The type of the item.  This should correspond to the name of an object
		 * definition in the schema registered for the data source.  For example, if
		 * the schema for the data source contains an object definition with name
		 * 'document', then item indexing requests for objects of that type should set
		 * objectType to 'document'.
		 * The maximum length is 256 characters.
		 */
		objectType: FormControl<string | null | undefined>,

		/**
		 * Link to the source repository serving the data.  &#83;earch results apply
		 * this link to the title.
		 * Whitespace or special characters may cause Cloud &#83;earch result links to
		 * trigger a redirect notice; to avoid this, encode the URL.
		 * The maximum length is 2048 characters.
		 */
		sourceRepositoryUrl: FormControl<string | null | undefined>,

		/**
		 * The title of the item.  If given, this will be the displayed title of the
		 * Search result.
		 * The maximum length is 2048 characters.
		 */
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

		/**
		 * The time when the user acted on the item.  If multiple actions of the same
		 * type exist for a single user, only the most recent action is recorded.
		 */
		interactionTime?: string | null;

		/** Reference to a user, group, or domain. */
		principal?: Principal;
		type?: InteractionType | null;
	}

	/** Represents an interaction between a user and an item. */
	export interface InteractionFormProperties {

		/**
		 * The time when the user acted on the item.  If multiple actions of the same
		 * type exist for a single user, only the most recent action is recorded.
		 */
		interactionTime: FormControl<string | null | undefined>,
		type: FormControl<InteractionType | null | undefined>,
	}
	export function CreateInteractionFormGroup() {
		return new FormGroup<InteractionFormProperties>({
			interactionTime: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<InteractionType | null | undefined>(undefined),
		});

	}

	export enum InteractionType { UNSPECIFIED = 0, VIEW = 1, EDIT = 2 }


	/** Additional search quality metadata of the item. */
	export interface SearchQualityMetadata {

		/**
		 * An indication of the quality of the item, used to influence search quality.
		 * Value should be between 0.0 (lowest quality) and 1.0 (highest quality). The
		 * default value is 0.0.
		 */
		quality?: number | null;
	}

	/** Additional search quality metadata of the item. */
	export interface SearchQualityMetadataFormProperties {

		/**
		 * An indication of the quality of the item, used to influence search quality.
		 * Value should be between 0.0 (lowest quality) and 1.0 (highest quality). The
		 * default value is 0.0.
		 */
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

		/** Description of the error. */
		errorMessage?: string | null;

		/**
		 * In case the item fields are invalid, this field contains the details
		 * about the validation errors.
		 */
		fieldViolations?: Array<FieldViolation>;
	}
	export interface ProcessingErrorFormProperties {

		/** Error code indicating the nature of the error. */
		code: FormControl<ProcessingErrorCode | null | undefined>,

		/** Description of the error. */
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateProcessingErrorFormGroup() {
		return new FormGroup<ProcessingErrorFormProperties>({
			code: new FormControl<ProcessingErrorCode | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProcessingErrorCode { PROCESSING_ERROR_CODE_UNSPECIFIED = 0, MALFORMED_REQUEST = 1, UNSUPPORTED_CONTENT_FORMAT = 2, INDIRECT_BROKEN_ACL = 3, ACL_CYCLE = 4 }


	/** Errors when the connector is communicating to the source repository. */
	export interface RepositoryError {

		/**
		 * Message that describes the error. The maximum allowable length
		 * of the message is 8192 characters.
		 */
		errorMessage?: string | null;

		/** Error codes.  Matches the definition of HTTP status codes. */
		httpStatusCode?: number | null;

		/** Type of error. */
		type?: RepositoryErrorType | null;
	}

	/** Errors when the connector is communicating to the source repository. */
	export interface RepositoryErrorFormProperties {

		/**
		 * Message that describes the error. The maximum allowable length
		 * of the message is 8192 characters.
		 */
		errorMessage: FormControl<string | null | undefined>,

		/** Error codes.  Matches the definition of HTTP status codes. */
		httpStatusCode: FormControl<number | null | undefined>,

		/** Type of error. */
		type: FormControl<RepositoryErrorType | null | undefined>,
	}
	export function CreateRepositoryErrorFormGroup() {
		return new FormGroup<RepositoryErrorFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
			httpStatusCode: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<RepositoryErrorType | null | undefined>(undefined),
		});

	}

	export enum RepositoryErrorType { UNKNOWN = 0, NETWORK_ERROR = 1, DNS_ERROR = 2, CONNECTION_ERROR = 3, AUTHENTICATION_ERROR = 4, AUTHORIZATION_ERROR = 5, SERVER_ERROR = 6, QUOTA_EXCEEDED = 7, SERVICE_UNAVAILABLE = 8, CLIENT_ERROR = 9 }


	/** Available structured data fields for the item. */
	export interface ItemStructuredData {

		/**
		 * Hashing value provided by the API caller.
		 * This can be used with the
		 * items.push
		 * method to calculate modified state.
		 * The maximum length is 2048 characters.
		 */
		hash?: string | null;

		/** A structured data object consisting of named properties. */
		object?: StructuredDataObject;
	}

	/** Available structured data fields for the item. */
	export interface ItemStructuredDataFormProperties {

		/**
		 * Hashing value provided by the API caller.
		 * This can be used with the
		 * items.push
		 * method to calculate modified state.
		 * The maximum length is 2048 characters.
		 */
		hash: FormControl<string | null | undefined>,
	}
	export function CreateItemStructuredDataFormGroup() {
		return new FormGroup<ItemStructuredDataFormProperties>({
			hash: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structured data object consisting of named properties. */
	export interface StructuredDataObject {

		/**
		 * The properties for the object.
		 * The maximum number of elements is 1000.
		 */
		properties?: Array<NamedProperty>;
	}

	/** A structured data object consisting of named properties. */
	export interface StructuredDataObjectFormProperties {
	}
	export function CreateStructuredDataObjectFormGroup() {
		return new FormGroup<StructuredDataObjectFormProperties>({
		});

	}


	/**
	 * A typed name-value pair for structured data.  The type of the value should
	 * be the same as the registered type for the `name` property in the object
	 * definition of `objectType`.
	 */
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

		/**
		 * The name of the property.  This name should correspond to the name of the
		 * property that was registered for object definition in the schema.
		 * The maximum allowable length for this property is 256 characters.
		 */
		name?: string | null;

		/** List of object values. */
		objectValues?: ObjectValues;

		/** List of text values. */
		textValues?: TextValues;

		/** List of timestamp values. */
		timestampValues?: TimestampValues;
	}

	/**
	 * A typed name-value pair for structured data.  The type of the value should
	 * be the same as the registered type for the `name` property in the object
	 * definition of `objectType`.
	 */
	export interface NamedPropertyFormProperties {
		booleanValue: FormControl<boolean | null | undefined>,

		/**
		 * The name of the property.  This name should correspond to the name of the
		 * property that was registered for object definition in the schema.
		 * The maximum allowable length for this property is 256 characters.
		 */
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

	export enum IndexItemRequestMode { UNSPECIFIED = 0, SYNCHRONOUS = 1, ASYNCHRONOUS = 2 }


	/**
	 * Used to provide a search operator for integer properties. This is
	 * optional. Search operators let users restrict the query to specific fields
	 * relevant to the type of item being searched.
	 */
	export interface IntegerOperatorOptions {

		/**
		 * Indicates the operator name required in the query in order to isolate the
		 * integer property using the greater-than operator. For example, if
		 * greaterThanOperatorName is *priorityabove* and the property's name is
		 * *priorityVal*, then queries like *priorityabove:&lt;value&gt;*
		 * show results only where the value of the property named *priorityVal* is
		 * greater than *&lt;value&gt;*.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		greaterThanOperatorName?: string | null;

		/**
		 * Indicates the operator name required in the query in order to isolate the
		 * integer property using the less-than operator. For example, if
		 * lessThanOperatorName is *prioritybelow* and the property's name is
		 * *priorityVal*, then queries like *prioritybelow:&lt;value&gt;*
		 * show results only where the value of the property named *priorityVal* is
		 * less than *&lt;value&gt;*.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		lessThanOperatorName?: string | null;

		/**
		 * Indicates the operator name required in the query in order to isolate the
		 * integer property. For example, if operatorName is *priority* and the
		 * property's name is *priorityVal*, then queries like
		 * *priority:&lt;value&gt;* show results only where the value of the
		 * property named *priorityVal* matches *&lt;value&gt;*. By contrast, a
		 * search that uses the same *&lt;value&gt;* without an operator returns
		 * all items where *&lt;value&gt;* matches the value of any String
		 * properties or text within the content field for the item.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		operatorName?: string | null;
	}

	/**
	 * Used to provide a search operator for integer properties. This is
	 * optional. Search operators let users restrict the query to specific fields
	 * relevant to the type of item being searched.
	 */
	export interface IntegerOperatorOptionsFormProperties {

		/**
		 * Indicates the operator name required in the query in order to isolate the
		 * integer property using the greater-than operator. For example, if
		 * greaterThanOperatorName is *priorityabove* and the property's name is
		 * *priorityVal*, then queries like *priorityabove:&lt;value&gt;*
		 * show results only where the value of the property named *priorityVal* is
		 * greater than *&lt;value&gt;*.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		greaterThanOperatorName: FormControl<string | null | undefined>,

		/**
		 * Indicates the operator name required in the query in order to isolate the
		 * integer property using the less-than operator. For example, if
		 * lessThanOperatorName is *prioritybelow* and the property's name is
		 * *priorityVal*, then queries like *prioritybelow:&lt;value&gt;*
		 * show results only where the value of the property named *priorityVal* is
		 * less than *&lt;value&gt;*.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		lessThanOperatorName: FormControl<string | null | undefined>,

		/**
		 * Indicates the operator name required in the query in order to isolate the
		 * integer property. For example, if operatorName is *priority* and the
		 * property's name is *priorityVal*, then queries like
		 * *priority:&lt;value&gt;* show results only where the value of the
		 * property named *priorityVal* matches *&lt;value&gt;*. By contrast, a
		 * search that uses the same *&lt;value&gt;* without an operator returns
		 * all items where *&lt;value&gt;* matches the value of any String
		 * properties or text within the content field for the item.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		operatorName: FormControl<string | null | undefined>,
	}
	export function CreateIntegerOperatorOptionsFormGroup() {
		return new FormGroup<IntegerOperatorOptionsFormProperties>({
			greaterThanOperatorName: new FormControl<string | null | undefined>(undefined),
			lessThanOperatorName: new FormControl<string | null | undefined>(undefined),
			operatorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options for integer properties. */
	export interface IntegerPropertyOptions {

		/**
		 * The maximum value of the property. The minimum and maximum values for the
		 * property are used to rank results according to the
		 * ordered ranking.
		 * Indexing requests with values greater than the maximum are accepted and
		 * ranked with the same weight as items indexed with the maximum value.
		 */
		maximumValue?: string | null;

		/**
		 * The minimum value of the property. The minimum and maximum values for the
		 * property are used to rank results according to the
		 * ordered ranking.
		 * Indexing requests with values less than the minimum are accepted and
		 * ranked with the same weight as items indexed with the minimum value.
		 */
		minimumValue?: string | null;

		/**
		 * Used to provide a search operator for integer properties. This is
		 * optional. Search operators let users restrict the query to specific fields
		 * relevant to the type of item being searched.
		 */
		operatorOptions?: IntegerOperatorOptions;

		/**
		 * Used to specify the ordered ranking for the integer. Can only be used if
		 * isRepeatable
		 * is false.
		 */
		orderedRanking?: EnumPropertyOptionsOrderedRanking | null;
	}

	/** Options for integer properties. */
	export interface IntegerPropertyOptionsFormProperties {

		/**
		 * The maximum value of the property. The minimum and maximum values for the
		 * property are used to rank results according to the
		 * ordered ranking.
		 * Indexing requests with values greater than the maximum are accepted and
		 * ranked with the same weight as items indexed with the maximum value.
		 */
		maximumValue: FormControl<string | null | undefined>,

		/**
		 * The minimum value of the property. The minimum and maximum values for the
		 * property are used to rank results according to the
		 * ordered ranking.
		 * Indexing requests with values less than the minimum are accepted and
		 * ranked with the same weight as items indexed with the minimum value.
		 */
		minimumValue: FormControl<string | null | undefined>,

		/**
		 * Used to specify the ordered ranking for the integer. Can only be used if
		 * isRepeatable
		 * is false.
		 */
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

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken?: string | null;
		sources?: Array<DataSource>;
	}
	export interface ListDataSourceResponseFormProperties {

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataSourceResponseFormGroup() {
		return new FormGroup<ListDataSourceResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListItemNamesForUnmappedIdentityResponse {
		itemNames?: Array<string>;

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken?: string | null;
	}
	export interface ListItemNamesForUnmappedIdentityResponseFormProperties {

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListItemNamesForUnmappedIdentityResponseFormGroup() {
		return new FormGroup<ListItemNamesForUnmappedIdentityResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListItemsResponse {
		items?: Array<Item>;

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken?: string | null;
	}
	export interface ListItemsResponseFormProperties {

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListItemsResponseFormGroup() {
		return new FormGroup<ListItemsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
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

		/**
		 * A short name or alias for the source.  This value can be used with the
		 * 'source' operator.
		 */
		shortName?: string | null;

		/** Defines sources for the suggest/search APIs. */
		source?: Source;
	}

	/** List of sources that the user can search using the query API. */
	export interface QuerySourceFormProperties {

		/** Display name of the data source. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * A short name or alias for the source.  This value can be used with the
		 * 'source' operator.
		 */
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

		/**
		 * Potential list of values for the opeatror field. This field is only filled
		 * when we can safely enumerate all the possible values of this operator.
		 */
		enumValues?: Array<string>;

		/**
		 * Indicates the operator name that can be used to  isolate the property using
		 * the greater-than operator.
		 */
		greaterThanOperatorName?: string | null;

		/** Can this operator be used to get facets. */
		isFacetable?: boolean | null;

		/** Indicates if multiple values can be set for this property. */
		isRepeatable?: boolean | null;

		/**
		 * Will the property associated with this facet be returned as part of search
		 * results.
		 */
		isReturnable?: boolean | null;

		/** Can this operator be used to sort results. */
		isSortable?: boolean | null;

		/** Can get suggestions for this field. */
		isSuggestable?: boolean | null;

		/**
		 * Indicates the operator name that can be used to  isolate the property using
		 * the less-than operator.
		 */
		lessThanOperatorName?: string | null;

		/**
		 * Name of the object corresponding to the operator. This field is only filled
		 * for schema-specific operators, and is unset for common operators.
		 */
		objectType?: string | null;

		/** The name of the operator. */
		operatorName?: string | null;

		/** Type of the operator. */
		type?: QueryOperatorType | null;
	}

	/** The definition of a operator that can be used in a Search/Suggest request. */
	export interface QueryOperatorFormProperties {

		/** Display name of the operator */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Indicates the operator name that can be used to  isolate the property using
		 * the greater-than operator.
		 */
		greaterThanOperatorName: FormControl<string | null | undefined>,

		/** Can this operator be used to get facets. */
		isFacetable: FormControl<boolean | null | undefined>,

		/** Indicates if multiple values can be set for this property. */
		isRepeatable: FormControl<boolean | null | undefined>,

		/**
		 * Will the property associated with this facet be returned as part of search
		 * results.
		 */
		isReturnable: FormControl<boolean | null | undefined>,

		/** Can this operator be used to sort results. */
		isSortable: FormControl<boolean | null | undefined>,

		/** Can get suggestions for this field. */
		isSuggestable: FormControl<boolean | null | undefined>,

		/**
		 * Indicates the operator name that can be used to  isolate the property using
		 * the less-than operator.
		 */
		lessThanOperatorName: FormControl<string | null | undefined>,

		/**
		 * Name of the object corresponding to the operator. This field is only filled
		 * for schema-specific operators, and is unset for common operators.
		 */
		objectType: FormControl<string | null | undefined>,

		/** The name of the operator. */
		operatorName: FormControl<string | null | undefined>,

		/** Type of the operator. */
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

	export enum QueryOperatorType { UNKNOWN = 0, INTEGER = 1, DOUBLE = 2, TIMESTAMP = 3, BOOLEAN = 4, ENUM = 5, DATE = 6, TEXT = 7, HTML = 8 }

	export interface ListSearchApplicationsResponse {

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken?: string | null;
		searchApplications?: Array<SearchApplication>;
	}
	export interface ListSearchApplicationsResponseFormProperties {

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSearchApplicationsResponseFormGroup() {
		return new FormGroup<ListSearchApplicationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SearchApplication */
	export interface SearchApplication {

		/**
		 * Retrictions applied to the configurations.
		 * The maximum number of elements is 10.
		 */
		dataSourceRestrictions?: Array<DataSourceRestriction>;

		/**
		 * The default fields for returning facet results.
		 * The sources specified here also have been included in
		 * data_source_restrictions
		 * above.
		 */
		defaultFacetOptions?: Array<FacetOptions>;
		defaultSortOptions?: SortOptions;

		/**
		 * Display name of the Search Application.
		 * The maximum length is 300 characters.
		 */
		displayName?: string | null;

		/**
		 * Name of the Search Application.
		 * <br />Format: searchapplications/{application_id}.
		 */
		name?: string | null;

		/**
		 * IDs of the Long Running Operations (LROs) currently running for this
		 * schema. Output only field.
		 */
		operationIds?: Array<string>;

		/**
		 * Scoring configurations for a source while processing a
		 * Search or
		 * Suggest request.
		 */
		scoringConfig?: ScoringConfig;

		/** Configuration for a sources specified in data_source_restrictions. */
		sourceConfig?: Array<SourceConfig>;
	}

	/** SearchApplication */
	export interface SearchApplicationFormProperties {

		/**
		 * Display name of the Search Application.
		 * The maximum length is 300 characters.
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Name of the Search Application.
		 * <br />Format: searchapplications/{application_id}.
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSearchApplicationFormGroup() {
		return new FormGroup<SearchApplicationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SortOptions {

		/**
		 * Name of the operator corresponding to the field to sort on.
		 * The corresponding property must be marked as
		 * sortable.
		 */
		operatorName?: string | null;

		/** Ascending is the default sort order */
		sortOrder?: SortOptionsSortOrder | null;
	}
	export interface SortOptionsFormProperties {

		/**
		 * Name of the operator corresponding to the field to sort on.
		 * The corresponding property must be marked as
		 * sortable.
		 */
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

	export enum SortOptionsSortOrder { ASCENDING = 0, DESCENDING = 1 }


	/**
	 * Scoring configurations for a source while processing a
	 * Search or
	 * Suggest request.
	 */
	export interface ScoringConfig {

		/**
		 * Whether to use freshness as a ranking signal. By default, freshness is used
		 * as a ranking signal. Note that this setting is not available in the Admin
		 * UI.
		 */
		disableFreshness?: boolean | null;

		/**
		 * Whether to personalize the results. By default, personal signals will
		 * be used to boost results.
		 */
		disablePersonalization?: boolean | null;
	}

	/**
	 * Scoring configurations for a source while processing a
	 * Search or
	 * Suggest request.
	 */
	export interface ScoringConfigFormProperties {

		/**
		 * Whether to use freshness as a ranking signal. By default, freshness is used
		 * as a ranking signal. Note that this setting is not available in the Admin
		 * UI.
		 */
		disableFreshness: FormControl<boolean | null | undefined>,

		/**
		 * Whether to personalize the results. By default, personal signals will
		 * be used to boost results.
		 */
		disablePersonalization: FormControl<boolean | null | undefined>,
	}
	export function CreateScoringConfigFormGroup() {
		return new FormGroup<ScoringConfigFormProperties>({
			disableFreshness: new FormControl<boolean | null | undefined>(undefined),
			disablePersonalization: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**
	 * Configurations for a source while processing a
	 * Search or
	 * Suggest request.
	 */
	export interface SourceConfig {

		/**
		 * Set search results crowding limits. Crowding is a situation in which
		 * multiple results from the same source or host "crowd out" other results,
		 * diminishing the quality of search for users. To foster better search quality
		 * and source diversity in search results, you can set a condition to reduce
		 * repetitive results by source.
		 */
		crowdingConfig?: SourceCrowdingConfig;

		/**
		 * Set the scoring configuration. This allows modifying the ranking of results
		 * for a source.
		 */
		scoringConfig?: SourceScoringConfig;

		/** Defines sources for the suggest/search APIs. */
		source?: Source;
	}

	/**
	 * Configurations for a source while processing a
	 * Search or
	 * Suggest request.
	 */
	export interface SourceConfigFormProperties {
	}
	export function CreateSourceConfigFormGroup() {
		return new FormGroup<SourceConfigFormProperties>({
		});

	}


	/**
	 * Set search results crowding limits. Crowding is a situation in which
	 * multiple results from the same source or host "crowd out" other results,
	 * diminishing the quality of search for users. To foster better search quality
	 * and source diversity in search results, you can set a condition to reduce
	 * repetitive results by source.
	 */
	export interface SourceCrowdingConfig {

		/**
		 * Maximum number of results allowed from a source.
		 * No limits will be set on results if this value is less than or equal to 0.
		 */
		numResults?: number | null;

		/**
		 * Maximum number of suggestions allowed from a source.
		 * No limits will be set on results if this value is less than or equal to 0.
		 */
		numSuggestions?: number | null;
	}

	/**
	 * Set search results crowding limits. Crowding is a situation in which
	 * multiple results from the same source or host "crowd out" other results,
	 * diminishing the quality of search for users. To foster better search quality
	 * and source diversity in search results, you can set a condition to reduce
	 * repetitive results by source.
	 */
	export interface SourceCrowdingConfigFormProperties {

		/**
		 * Maximum number of results allowed from a source.
		 * No limits will be set on results if this value is less than or equal to 0.
		 */
		numResults: FormControl<number | null | undefined>,

		/**
		 * Maximum number of suggestions allowed from a source.
		 * No limits will be set on results if this value is less than or equal to 0.
		 */
		numSuggestions: FormControl<number | null | undefined>,
	}
	export function CreateSourceCrowdingConfigFormGroup() {
		return new FormGroup<SourceCrowdingConfigFormProperties>({
			numResults: new FormControl<number | null | undefined>(undefined),
			numSuggestions: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * Set the scoring configuration. This allows modifying the ranking of results
	 * for a source.
	 */
	export interface SourceScoringConfig {

		/** Importance of the source. */
		sourceImportance?: SourceScoringConfigSourceImportance | null;
	}

	/**
	 * Set the scoring configuration. This allows modifying the ranking of results
	 * for a source.
	 */
	export interface SourceScoringConfigFormProperties {

		/** Importance of the source. */
		sourceImportance: FormControl<SourceScoringConfigSourceImportance | null | undefined>,
	}
	export function CreateSourceScoringConfigFormGroup() {
		return new FormGroup<SourceScoringConfigFormProperties>({
			sourceImportance: new FormControl<SourceScoringConfigSourceImportance | null | undefined>(undefined),
		});

	}

	export enum SourceScoringConfigSourceImportance { DEFAULT = 0, LOW = 1, HIGH = 2 }

	export interface ListUnmappedIdentitiesResponse {

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken?: string | null;
		unmappedIdentities?: Array<UnmappedIdentity>;
	}
	export interface ListUnmappedIdentitiesResponseFormProperties {

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
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

	export enum UnmappedIdentityResolutionStatusCode { CODE_UNSPECIFIED = 0, NOT_FOUND = 1, IDENTITY_SOURCE_NOT_FOUND = 2, IDENTITY_SOURCE_MISCONFIGURED = 3, TOO_MANY_MAPPINGS_FOUND = 4, INTERNAL_ERROR = 5 }


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

		/**
		 * The last modified date for the object in the search result. If not
		 * set in the item, the value returned here is empty. When
		 * `updateTime` is used for calculating freshness and is not set, this
		 * value defaults to 2 years from the current time.
		 */
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

		/**
		 * The last modified date for the object in the search result. If not
		 * set in the item, the value returned here is empty. When
		 * `updateTime` is used for calculating freshness and is not set, this
		 * value defaults to 2 years from the current time.
		 */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateMetadataFormGroup() {
		return new FormGroup<MetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			objectType: new FormControl<string | null | undefined>(undefined),
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

		/**
		 * A typed name-value pair for structured data.  The type of the value should
		 * be the same as the registered type for the `name` property in the object
		 * definition of `objectType`.
		 */
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

		/**
		 * The resource name of the person to provide information about.
		 * See <a href="https://developers.google.com/people/api/rest/v1/people/get">
		 * People.get</a> from Google People API.
		 */
		name?: string | null;

		/** Obfuscated ID of a person. */
		obfuscatedId?: string | null;

		/** The person's name */
		personNames?: Array<Name>;

		/**
		 * A person's read-only photo. A picture shown next to the person's name to
		 * help others recognize the person in search results.
		 */
		photos?: Array<Photo>;
	}

	/** Object to represent a person. */
	export interface PersonFormProperties {

		/**
		 * The resource name of the person to provide information about.
		 * See <a href="https://developers.google.com/people/api/rest/v1/people/get">
		 * People.get</a> from Google People API.
		 */
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

		/**
		 * The read-only display name formatted according to the locale specified by
		 * the viewer's account or the <code>Accept-Language</code> HTTP header.
		 */
		displayName?: string | null;
	}

	/** A person's name. */
	export interface NameFormProperties {

		/**
		 * The read-only display name formatted according to the locale specified by
		 * the viewer's account or the <code>Accept-Language</code> HTTP header.
		 */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateNameFormGroup() {
		return new FormGroup<NameFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


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


	/**
	 * A metaline is a list of properties that are displayed along with the search
	 * result to provide context.
	 */
	export interface Metaline {

		/**
		 * The list of displayed properties for the metaline. The maximum number of
		 * properties is 5.
		 */
		properties?: Array<DisplayedProperty>;
	}

	/**
	 * A metaline is a list of properties that are displayed along with the search
	 * result to provide context.
	 */
	export interface MetalineFormProperties {
	}
	export function CreateMetalineFormGroup() {
		return new FormGroup<MetalineFormProperties>({
		});

	}


	/** The definition for an object within a data source. */
	export interface ObjectDefinition {

		/**
		 * Name for the object, which then defines its type. Item indexing requests
		 * should set the
		 * objectType field
		 * equal to this value. For example, if *name* is *Document*, then indexing
		 * requests for items of type Document should set
		 * objectType equal to
		 * *Document*. Each object definition must be uniquely named within a schema.
		 * The name must start with a letter and can only contain letters (A-Z, a-z)
		 * or numbers (0-9).
		 * The maximum length is 256 characters.
		 */
		name?: string | null;

		/** The options for an object. */
		options?: ObjectOptions;

		/**
		 * The property definitions for the object.
		 * The maximum number of elements is 1000.
		 */
		propertyDefinitions?: Array<PropertyDefinition>;
	}

	/** The definition for an object within a data source. */
	export interface ObjectDefinitionFormProperties {

		/**
		 * Name for the object, which then defines its type. Item indexing requests
		 * should set the
		 * objectType field
		 * equal to this value. For example, if *name* is *Document*, then indexing
		 * requests for items of type Document should set
		 * objectType equal to
		 * *Document*. Each object definition must be uniquely named within a schema.
		 * The name must start with a letter and can only contain letters (A-Z, a-z)
		 * or numbers (0-9).
		 * The maximum length is 256 characters.
		 */
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

		/**
		 * Indicates which freshness property to use when adjusting search ranking for
		 * an item. Fresher, more recent dates indicate higher quality. Use the
		 * freshness option property that best works with your data. For fileshare
		 * documents, last modified time is most relevant. For calendar event data,
		 * the time when the event occurs is a more relevant freshness indicator. In
		 * this way, calendar events that occur closer to the time of the search query
		 * are considered higher quality and ranked accordingly.
		 */
		freshnessOptions?: FreshnessOptions;
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

		/**
		 * Defines the properties that are displayed in the metalines of the
		 * search results. The property values are displayed in the order given
		 * here. If a property holds multiple values, all of the values are
		 * displayed before the next properties. For this reason, it is a good
		 * practice to specify singular properties before repeated properties in this
		 * list. All of the properties must set
		 * is_returnable
		 * to true. The maximum number of metalines is 3.
		 */
		metalines?: Array<Metaline>;

		/**
		 * The user friendly label to display in the search result to indicate the
		 * type of the item. This is OPTIONAL; if not provided, an object label isn't
		 * displayed on the context line of the search results. The maximum length
		 * is 32 characters.
		 */
		objectDisplayLabel?: string | null;
	}

	/** The display options for an object. */
	export interface ObjectDisplayOptionsFormProperties {

		/**
		 * The user friendly label to display in the search result to indicate the
		 * type of the item. This is OPTIONAL; if not provided, an object label isn't
		 * displayed on the context line of the search results. The maximum length
		 * is 32 characters.
		 */
		objectDisplayLabel: FormControl<string | null | undefined>,
	}
	export function CreateObjectDisplayOptionsFormGroup() {
		return new FormGroup<ObjectDisplayOptionsFormProperties>({
			objectDisplayLabel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The definition of a property within an object. */
	export interface PropertyDefinition {

		/** Options for boolean properties. */
		booleanPropertyOptions?: BooleanPropertyOptions;

		/** Options for date properties. */
		datePropertyOptions?: DatePropertyOptions;

		/** The display options for a property. */
		displayOptions?: PropertyDisplayOptions;

		/** Options for double properties. */
		doublePropertyOptions?: DoublePropertyOptions;

		/**
		 * Options for enum properties, which allow you to define a restricted set of
		 * strings to match user queries, set rankings for those string values, and
		 * define an operator name to be paired with those strings so that users can
		 * narrow results to only items with a specific value. For example, for items in
		 * a request tracking system with priority information, you could define *p0* as
		 * an allowable enum value and tie this enum to the operator name *priority* so
		 * that search users could add *priority:p0* to their query to restrict the set
		 * of results to only those items indexed with the value *p0*.
		 */
		enumPropertyOptions?: EnumPropertyOptions;

		/** Options for html properties. */
		htmlPropertyOptions?: HtmlPropertyOptions;

		/** Options for integer properties. */
		integerPropertyOptions?: IntegerPropertyOptions;

		/**
		 * Indicates that the property can be used for generating facets. Cannot be
		 * true for properties whose type is object. IsReturnable must be true to set
		 * this option.
		 * Only supported for Boolean, Enum, and Text properties.
		 */
		isFacetable?: boolean | null;

		/**
		 * Indicates that multiple values are allowed for the property. For example, a
		 * document only has one description but can have multiple comments. Cannot be
		 * true for properties whose type is a boolean.
		 * If set to false, properties that contain more than one value cause the
		 * indexing request for that item to be rejected.
		 */
		isRepeatable?: boolean | null;

		/**
		 * Indicates that the property identifies data that should be returned in
		 * search results via the Query API. If set to *true*, indicates that Query
		 * API users can use matching property fields in results. However, storing
		 * fields requires more space allocation and uses more bandwidth for search
		 * queries, which impacts performance over large datasets. Set to *true* here
		 * only if the field is needed for search results. Cannot be true for
		 * properties whose type is an object.
		 */
		isReturnable?: boolean | null;

		/**
		 * Indicates that the property can be used for sorting. Cannot be true for
		 * properties that are repeatable. Cannot be true for properties whose type
		 * is object or user identifier. IsReturnable must be true to set this option.
		 * Only supported for Boolean, Date, Double, Integer, and Timestamp
		 * properties.
		 */
		isSortable?: boolean | null;

		/** Indicates that the property can be used for generating query suggestions. */
		isSuggestable?: boolean | null;

		/**
		 * Indicates that users can perform wildcard search for this
		 * property. Only supported for Text properties. IsReturnable must be true to
		 * set this option. In a given datasource maximum of 5 properties can be
		 * marked as is_wildcard_searchable.
		 */
		isWildcardSearchable?: boolean | null;

		/**
		 * The name of the property. Item indexing requests sent to the Indexing API
		 * should set the property name
		 * equal to this value. For example, if name is *subject_line*, then indexing
		 * requests for document items with subject fields should set the
		 * name for that field equal to
		 * *subject_line*. Use the name as the identifier for the object property.
		 * Once registered as a property for an object, you cannot re-use this name
		 * for another property within that object.
		 * The name must start with a letter and can only contain letters (A-Z, a-z)
		 * or numbers (0-9).
		 * The maximum length is 256 characters.
		 */
		name?: string | null;

		/** Options for object properties. */
		objectPropertyOptions?: ObjectPropertyOptions;

		/** Options for text properties. */
		textPropertyOptions?: TextPropertyOptions;

		/** Options for timestamp properties. */
		timestampPropertyOptions?: TimestampPropertyOptions;
	}

	/** The definition of a property within an object. */
	export interface PropertyDefinitionFormProperties {

		/**
		 * Indicates that the property can be used for generating facets. Cannot be
		 * true for properties whose type is object. IsReturnable must be true to set
		 * this option.
		 * Only supported for Boolean, Enum, and Text properties.
		 */
		isFacetable: FormControl<boolean | null | undefined>,

		/**
		 * Indicates that multiple values are allowed for the property. For example, a
		 * document only has one description but can have multiple comments. Cannot be
		 * true for properties whose type is a boolean.
		 * If set to false, properties that contain more than one value cause the
		 * indexing request for that item to be rejected.
		 */
		isRepeatable: FormControl<boolean | null | undefined>,

		/**
		 * Indicates that the property identifies data that should be returned in
		 * search results via the Query API. If set to *true*, indicates that Query
		 * API users can use matching property fields in results. However, storing
		 * fields requires more space allocation and uses more bandwidth for search
		 * queries, which impacts performance over large datasets. Set to *true* here
		 * only if the field is needed for search results. Cannot be true for
		 * properties whose type is an object.
		 */
		isReturnable: FormControl<boolean | null | undefined>,

		/**
		 * Indicates that the property can be used for sorting. Cannot be true for
		 * properties that are repeatable. Cannot be true for properties whose type
		 * is object or user identifier. IsReturnable must be true to set this option.
		 * Only supported for Boolean, Date, Double, Integer, and Timestamp
		 * properties.
		 */
		isSortable: FormControl<boolean | null | undefined>,

		/** Indicates that the property can be used for generating query suggestions. */
		isSuggestable: FormControl<boolean | null | undefined>,

		/**
		 * Indicates that users can perform wildcard search for this
		 * property. Only supported for Text properties. IsReturnable must be true to
		 * set this option. In a given datasource maximum of 5 properties can be
		 * marked as is_wildcard_searchable.
		 */
		isWildcardSearchable: FormControl<boolean | null | undefined>,

		/**
		 * The name of the property. Item indexing requests sent to the Indexing API
		 * should set the property name
		 * equal to this value. For example, if name is *subject_line*, then indexing
		 * requests for document items with subject fields should set the
		 * name for that field equal to
		 * *subject_line*. Use the name as the identifier for the object property.
		 * Once registered as a property for an object, you cannot re-use this name
		 * for another property within that object.
		 * The name must start with a letter and can only contain letters (A-Z, a-z)
		 * or numbers (0-9).
		 * The maximum length is 256 characters.
		 */
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

		/**
		 * The user friendly label for the property that is used if the property
		 * is specified to be displayed in ObjectDisplayOptions. If provided, the
		 * display label is shown in front of the property values when the property is
		 * part of the object display options. For example, if the property value is
		 * '1', the value by itself may not be useful context for the user. If the
		 * display name given was 'priority', then the user sees 'priority : 1' in
		 * the search results which provides clear context to search users. This is
		 * OPTIONAL; if not given, only the property values are displayed.
		 * The maximum length is 32 characters.
		 */
		displayLabel?: string | null;
	}

	/** The display options for a property. */
	export interface PropertyDisplayOptionsFormProperties {

		/**
		 * The user friendly label for the property that is used if the property
		 * is specified to be displayed in ObjectDisplayOptions. If provided, the
		 * display label is shown in front of the property values when the property is
		 * part of the object display options. For example, if the property value is
		 * '1', the value by itself may not be useful context for the user. If the
		 * display name given was 'priority', then the user sees 'priority : 1' in
		 * the search results which provides clear context to search users. This is
		 * OPTIONAL; if not given, only the property values are displayed.
		 * The maximum length is 32 characters.
		 */
		displayLabel: FormControl<string | null | undefined>,
	}
	export function CreatePropertyDisplayOptionsFormGroup() {
		return new FormGroup<PropertyDisplayOptionsFormProperties>({
			displayLabel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options for object properties. */
	export interface ObjectPropertyOptions {

		/**
		 * The properties of the sub-object. These properties represent a nested
		 * object. For example, if this property represents a postal address, the
		 * subobjectProperties might be named *street*, *city*, and *state*.
		 * The maximum number of elements is 1000.
		 */
		subobjectProperties?: Array<PropertyDefinition>;
	}

	/** Options for object properties. */
	export interface ObjectPropertyOptionsFormProperties {
	}
	export function CreateObjectPropertyOptionsFormGroup() {
		return new FormGroup<ObjectPropertyOptionsFormProperties>({
		});

	}


	/** Options for text properties. */
	export interface TextPropertyOptions {

		/**
		 * Used to provide a search operator for text properties. This is optional.
		 * Search operators let users restrict the query to specific fields relevant
		 * to the type of item being searched.
		 */
		operatorOptions?: TextOperatorOptions;
		retrievalImportance?: RetrievalImportance;
	}

	/** Options for text properties. */
	export interface TextPropertyOptionsFormProperties {
	}
	export function CreateTextPropertyOptionsFormGroup() {
		return new FormGroup<TextPropertyOptionsFormProperties>({
		});

	}


	/**
	 * Used to provide a search operator for text properties. This is optional.
	 * Search operators let users restrict the query to specific fields relevant
	 * to the type of item being searched.
	 */
	export interface TextOperatorOptions {

		/**
		 * If true, the text value is tokenized as one atomic value in
		 * operator searches and facet matches. For example, if the operator name is
		 * "genre" and the value is "science-fiction" the query restrictions
		 * "genre:science" and "genre:fiction" doesn't match the item;
		 * "genre:science-fiction" does. Value matching is case-sensitive
		 * and does not remove special characters.
		 * If false, the text is tokenized. For example, if the value is
		 * "science-fiction" the queries "genre:science" and "genre:fiction"
		 * matches the item.
		 */
		exactMatchWithOperator?: boolean | null;

		/**
		 * Indicates the operator name required in the query in order to isolate the
		 * text property. For example, if operatorName is *subject* and the
		 * property's name is *subjectLine*, then queries like
		 * *subject:&lt;value&gt;* show results only where the value of the
		 * property named *subjectLine* matches *&lt;value&gt;*. By contrast, a
		 * search that uses the same *&lt;value&gt;* without an operator returns
		 * all items where *&lt;value&gt;* matches the value of any
		 * text properties or text within the content field for the item.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		operatorName?: string | null;
	}

	/**
	 * Used to provide a search operator for text properties. This is optional.
	 * Search operators let users restrict the query to specific fields relevant
	 * to the type of item being searched.
	 */
	export interface TextOperatorOptionsFormProperties {

		/**
		 * If true, the text value is tokenized as one atomic value in
		 * operator searches and facet matches. For example, if the operator name is
		 * "genre" and the value is "science-fiction" the query restrictions
		 * "genre:science" and "genre:fiction" doesn't match the item;
		 * "genre:science-fiction" does. Value matching is case-sensitive
		 * and does not remove special characters.
		 * If false, the text is tokenized. For example, if the value is
		 * "science-fiction" the queries "genre:science" and "genre:fiction"
		 * matches the item.
		 */
		exactMatchWithOperator: FormControl<boolean | null | undefined>,

		/**
		 * Indicates the operator name required in the query in order to isolate the
		 * text property. For example, if operatorName is *subject* and the
		 * property's name is *subjectLine*, then queries like
		 * *subject:&lt;value&gt;* show results only where the value of the
		 * property named *subjectLine* matches *&lt;value&gt;*. By contrast, a
		 * search that uses the same *&lt;value&gt;* without an operator returns
		 * all items where *&lt;value&gt;* matches the value of any
		 * text properties or text within the content field for the item.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		operatorName: FormControl<string | null | undefined>,
	}
	export function CreateTextOperatorOptionsFormGroup() {
		return new FormGroup<TextOperatorOptionsFormProperties>({
			exactMatchWithOperator: new FormControl<boolean | null | undefined>(undefined),
			operatorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options for timestamp properties. */
	export interface TimestampPropertyOptions {

		/**
		 * Used to provide a search operator for timestamp properties. This is
		 * optional. Search operators let users restrict the query to specific fields
		 * relevant to the type of item being searched.
		 */
		operatorOptions?: TimestampOperatorOptions;
	}

	/** Options for timestamp properties. */
	export interface TimestampPropertyOptionsFormProperties {
	}
	export function CreateTimestampPropertyOptionsFormGroup() {
		return new FormGroup<TimestampPropertyOptionsFormProperties>({
		});

	}


	/**
	 * Used to provide a search operator for timestamp properties. This is
	 * optional. Search operators let users restrict the query to specific fields
	 * relevant to the type of item being searched.
	 */
	export interface TimestampOperatorOptions {

		/**
		 * Indicates the operator name required in the query in order to isolate the
		 * timestamp property using the greater-than operator. For example, if
		 * greaterThanOperatorName is *closedafter* and the property's name is
		 * *closeDate*, then queries like *closedafter:&lt;value&gt;*
		 * show results only where the value of the property named *closeDate* is
		 * later than *&lt;value&gt;*.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		greaterThanOperatorName?: string | null;

		/**
		 * Indicates the operator name required in the query in order to isolate the
		 * timestamp property using the less-than operator. For example, if
		 * lessThanOperatorName is *closedbefore* and the property's name is
		 * *closeDate*, then queries like *closedbefore:&lt;value&gt;*
		 * show results only where the value of the property named *closeDate* is
		 * earlier than *&lt;value&gt;*.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		lessThanOperatorName?: string | null;

		/**
		 * Indicates the operator name required in the query in order to isolate the
		 * timestamp property. For example, if operatorName is *closedon* and the
		 * property's name is *closeDate*, then queries like
		 * *closedon:&lt;value&gt;* show results only where the value of the
		 * property named *closeDate* matches *&lt;value&gt;*. By contrast, a
		 * search that uses the same *&lt;value&gt;* without an operator returns
		 * all items where *&lt;value&gt;* matches the value of any String
		 * properties or text within the content field for the item. The operator
		 * name can only contain lowercase letters (a-z). The maximum length is 32
		 * characters.
		 */
		operatorName?: string | null;
	}

	/**
	 * Used to provide a search operator for timestamp properties. This is
	 * optional. Search operators let users restrict the query to specific fields
	 * relevant to the type of item being searched.
	 */
	export interface TimestampOperatorOptionsFormProperties {

		/**
		 * Indicates the operator name required in the query in order to isolate the
		 * timestamp property using the greater-than operator. For example, if
		 * greaterThanOperatorName is *closedafter* and the property's name is
		 * *closeDate*, then queries like *closedafter:&lt;value&gt;*
		 * show results only where the value of the property named *closeDate* is
		 * later than *&lt;value&gt;*.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		greaterThanOperatorName: FormControl<string | null | undefined>,

		/**
		 * Indicates the operator name required in the query in order to isolate the
		 * timestamp property using the less-than operator. For example, if
		 * lessThanOperatorName is *closedbefore* and the property's name is
		 * *closeDate*, then queries like *closedbefore:&lt;value&gt;*
		 * show results only where the value of the property named *closeDate* is
		 * earlier than *&lt;value&gt;*.
		 * The operator name can only contain lowercase letters (a-z).
		 * The maximum length is 32 characters.
		 */
		lessThanOperatorName: FormControl<string | null | undefined>,

		/**
		 * Indicates the operator name required in the query in order to isolate the
		 * timestamp property. For example, if operatorName is *closedon* and the
		 * property's name is *closeDate*, then queries like
		 * *closedon:&lt;value&gt;* show results only where the value of the
		 * property named *closeDate* matches *&lt;value&gt;*. By contrast, a
		 * search that uses the same *&lt;value&gt;* without an operator returns
		 * all items where *&lt;value&gt;* matches the value of any String
		 * properties or text within the content field for the item. The operator
		 * name can only contain lowercase letters (a-z). The maximum length is 32
		 * characters.
		 */
		operatorName: FormControl<string | null | undefined>,
	}
	export function CreateTimestampOperatorOptionsFormGroup() {
		return new FormGroup<TimestampOperatorOptionsFormProperties>({
			greaterThanOperatorName: new FormControl<string | null | undefined>(undefined),
			lessThanOperatorName: new FormControl<string | null | undefined>(undefined),
			operatorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * This resource represents a long-running operation that is the result of a
	 * network API call.
	 */
	export interface Operation {

		/**
		 * If the value is `false`, it means the operation is still in progress.
		 * If `true`, the operation is completed, and either `error` or `response` is
		 * available.
		 */
		done?: boolean | null;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status;

		/**
		 * Service-specific metadata associated with the operation.  It typically
		 * contains progress information and common metadata such as create time.
		 * Some services might not provide such metadata.  Any method that returns a
		 * long-running operation should document the metadata type, if any.
		 */
		metadata?: {[id: string]: any };

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name?: string | null;

		/**
		 * The normal response of the operation in case of success.  If the original
		 * method returns no data on success, such as `Delete`, the response is
		 * `google.protobuf.Empty`.  If the original method is standard
		 * `Get`/`Create`/`Update`, the response should be the resource.  For other
		 * methods, the response should have the type `XxxResponse`, where `Xxx`
		 * is the original method name.  For example, if the original method name
		 * is `TakeSnapshot()`, the inferred response type is
		 * `TakeSnapshotResponse`.
		 */
		response?: {[id: string]: any };
	}

	/**
	 * This resource represents a long-running operation that is the result of a
	 * network API call.
	 */
	export interface OperationFormProperties {

		/**
		 * If the value is `false`, it means the operation is still in progress.
		 * If `true`, the operation is completed, and either `error` or `response` is
		 * available.
		 */
		done: FormControl<boolean | null | undefined>,

		/**
		 * Service-specific metadata associated with the operation.  It typically
		 * contains progress information and common metadata such as create time.
		 * Some services might not provide such metadata.  Any method that returns a
		 * long-running operation should document the metadata type, if any.
		 */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The normal response of the operation in case of success.  If the original
		 * method returns no data on success, such as `Delete`, the response is
		 * `google.protobuf.Empty`.  If the original method is standard
		 * `Get`/`Create`/`Update`, the response should be the resource.  For other
		 * methods, the response should have the type `XxxResponse`, where `Xxx`
		 * is the original method name.  For example, if the original method name
		 * is `TakeSnapshot()`, the inferred response type is
		 * `TakeSnapshotResponse`.
		 */
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


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string>;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string | null;
	}

	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
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

		/**
		 * Name of connector making this call.
		 * <br />Format: datasources/{source_id}/connectors/{ID}
		 */
		connectorName?: string | null;

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions;

		/**
		 * Maximum number of items to return.
		 * <br />The maximum value is 100 and the default value is 20.
		 */
		limit?: number | null;

		/**
		 * Queue name to fetch items from.  If unspecified, PollItems will
		 * fetch from 'default' queue.
		 * The maximum length is 100 characters.
		 */
		queue?: string | null;

		/** Limit the items polled to the ones with these statuses. */
		statusCodes?: Array<ItemCountByStatusStatusCode>;
	}
	export interface PollItemsRequestFormProperties {

		/**
		 * Name of connector making this call.
		 * <br />Format: datasources/{source_id}/connectors/{ID}
		 */
		connectorName: FormControl<string | null | undefined>,

		/**
		 * Maximum number of items to return.
		 * <br />The maximum value is 100 and the default value is 20.
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * Queue name to fetch items from.  If unspecified, PollItems will
		 * fetch from 'default' queue.
		 * The maximum length is 100 characters.
		 */
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

		/**
		 * Set of items from the queue available for connector to process.
		 * <br />These items have the following subset of fields populated: <br />
		 * <br />version
		 * <br />metadata.hash
		 * <br />structured_data.hash
		 * <br />content.hash
		 * <br />payload
		 * <br />status
		 * <br />queue
		 */
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

		/**
		 * Content hash of the item according to the repository. If specified, this is
		 * used to determine how to modify this
		 * item's status. Setting this field and the
		 * type field results in argument
		 * error.
		 * The maximum length is 2048 characters.
		 */
		contentHash?: string | null;

		/**
		 * Metadata hash of the item according to the repository. If specified, this
		 * is used to determine how to modify this
		 * item's status. Setting this field and the
		 * type field results in argument
		 * error.
		 * The maximum length is 2048 characters.
		 */
		metadataHash?: string | null;

		/**
		 * Provides additional document state information for the connector,
		 * such as an alternate repository ID and other metadata.
		 * The maximum length is 8192 bytes.
		 */
		payload?: string | null;

		/**
		 * Queue to which this item belongs to.  The <code>default</code> queue is
		 * chosen if this field is not specified. The maximum length is
		 * 512 characters.
		 */
		queue?: string | null;

		/** Errors when the connector is communicating to the source repository. */
		repositoryError?: RepositoryError;

		/**
		 * Structured data hash of the item according to the repository. If specified,
		 * this is used to determine how to modify this item's status. Setting this
		 * field and the type field
		 * results in argument error.
		 * The maximum length is 2048 characters.
		 */
		structuredDataHash?: string | null;

		/** The type of the push operation that defines the push behavior. */
		type?: PushItemType | null;
	}

	/** Represents an item to be pushed to the indexing queue. */
	export interface PushItemFormProperties {

		/**
		 * Content hash of the item according to the repository. If specified, this is
		 * used to determine how to modify this
		 * item's status. Setting this field and the
		 * type field results in argument
		 * error.
		 * The maximum length is 2048 characters.
		 */
		contentHash: FormControl<string | null | undefined>,

		/**
		 * Metadata hash of the item according to the repository. If specified, this
		 * is used to determine how to modify this
		 * item's status. Setting this field and the
		 * type field results in argument
		 * error.
		 * The maximum length is 2048 characters.
		 */
		metadataHash: FormControl<string | null | undefined>,

		/**
		 * Provides additional document state information for the connector,
		 * such as an alternate repository ID and other metadata.
		 * The maximum length is 8192 bytes.
		 */
		payload: FormControl<string | null | undefined>,

		/**
		 * Queue to which this item belongs to.  The <code>default</code> queue is
		 * chosen if this field is not specified. The maximum length is
		 * 512 characters.
		 */
		queue: FormControl<string | null | undefined>,

		/**
		 * Structured data hash of the item according to the repository. If specified,
		 * this is used to determine how to modify this item's status. Setting this
		 * field and the type field
		 * results in argument error.
		 * The maximum length is 2048 characters.
		 */
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

	export enum PushItemType { UNSPECIFIED = 0, MODIFIED = 1, NOT_MODIFIED = 2, REPOSITORY_ERROR = 3, REQUEUE = 4 }

	export interface PushItemRequest {

		/**
		 * Name of connector making this call.
		 * <br />Format: datasources/{source_id}/connectors/{ID}
		 */
		connectorName?: string | null;

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions;

		/** Represents an item to be pushed to the indexing queue. */
		item?: PushItem;
	}
	export interface PushItemRequestFormProperties {

		/**
		 * Name of connector making this call.
		 * <br />Format: datasources/{source_id}/connectors/{ID}
		 */
		connectorName: FormControl<string | null | undefined>,
	}
	export function CreatePushItemRequestFormGroup() {
		return new FormGroup<PushItemRequestFormProperties>({
			connectorName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryInterpretation {
		interpretationType?: QueryInterpretationInterpretationType | null;

		/**
		 * The interpretation of the query used in search. For example, queries with
		 * natural language intent like "email from john" will be interpreted as
		 * "from:john source:mail". This field will not be filled when the reason is
		 * NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY.
		 */
		interpretedQuery?: string | null;

		/**
		 * The reason for interpretation of the query. This field will not be
		 * UNSPECIFIED if the interpretation type is not NONE.
		 */
		reason?: QueryInterpretationReason | null;
	}
	export interface QueryInterpretationFormProperties {
		interpretationType: FormControl<QueryInterpretationInterpretationType | null | undefined>,

		/**
		 * The interpretation of the query used in search. For example, queries with
		 * natural language intent like "email from john" will be interpreted as
		 * "from:john source:mail". This field will not be filled when the reason is
		 * NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY.
		 */
		interpretedQuery: FormControl<string | null | undefined>,

		/**
		 * The reason for interpretation of the query. This field will not be
		 * UNSPECIFIED if the interpretation type is not NONE.
		 */
		reason: FormControl<QueryInterpretationReason | null | undefined>,
	}
	export function CreateQueryInterpretationFormGroup() {
		return new FormGroup<QueryInterpretationFormProperties>({
			interpretationType: new FormControl<QueryInterpretationInterpretationType | null | undefined>(undefined),
			interpretedQuery: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<QueryInterpretationReason | null | undefined>(undefined),
		});

	}

	export enum QueryInterpretationInterpretationType { NONE = 0, BLEND = 1, REPLACE = 2 }

	export enum QueryInterpretationReason { UNSPECIFIED = 0, QUERY_HAS_NATURAL_LANGUAGE_INTENT = 1, NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY = 2 }


	/** Options to interpret user query. */
	export interface QueryInterpretationOptions {

		/**
		 * Flag to disable natural language (NL) interpretation of queries. Default is
		 * false, Set to true to disable natural language interpretation. NL
		 * interpretation only applies to predefined datasources.
		 */
		disableNlInterpretation?: boolean | null;

		/**
		 * Enable this flag to turn off all internal optimizations like natural
		 * language (NL) interpretation of queries, supplemental result retrieval,
		 * and usage of synonyms including custom ones.
		 * Nl interpretation will be disabled if either one of the two flags is true.
		 */
		enableVerbatimMode?: boolean | null;
	}

	/** Options to interpret user query. */
	export interface QueryInterpretationOptionsFormProperties {

		/**
		 * Flag to disable natural language (NL) interpretation of queries. Default is
		 * false, Set to true to disable natural language interpretation. NL
		 * interpretation only applies to predefined datasources.
		 */
		disableNlInterpretation: FormControl<boolean | null | undefined>,

		/**
		 * Enable this flag to turn off all internal optimizations like natural
		 * language (NL) interpretation of queries, supplemental result retrieval,
		 * and usage of synonyms including custom ones.
		 * Nl interpretation will be disabled if either one of the two flags is true.
		 */
		enableVerbatimMode: FormControl<boolean | null | undefined>,
	}
	export function CreateQueryInterpretationOptionsFormGroup() {
		return new FormGroup<QueryInterpretationOptionsFormProperties>({
			disableNlInterpretation: new FormControl<boolean | null | undefined>(undefined),
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


	/**
	 * This field does not contain anything as of now and is just used as an
	 * indicator that the suggest result was a phrase completion.
	 */
	export interface QuerySuggestion {
	}

	/**
	 * This field does not contain anything as of now and is just used as an
	 * indicator that the suggest result was a phrase completion.
	 */
	export interface QuerySuggestionFormProperties {
	}
	export function CreateQuerySuggestionFormGroup() {
		return new FormGroup<QuerySuggestionFormProperties>({
		});

	}


	/** Shared request options for all RPC methods. */
	export interface RequestOptions {

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions;

		/**
		 * The BCP-47 language code, such as "en-US" or "sr-Latn".
		 * For more information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 * For translations.
		 * Set this field using the language set in browser or for the page. In the
		 * event that the user's language preference is known, set this field to the
		 * known user language.
		 * When specified, the documents in search results are biased towards the
		 * specified language.
		 * The suggest API does not use this parameter. Instead, suggest autocompletes
		 * only based on characters in the query.
		 */
		languageCode?: string | null;

		/** Id of the application created using SearchApplicationsService. */
		searchApplicationId?: string | null;

		/**
		 * Current user's time zone id, such as "America/Los_Angeles" or
		 * "Australia/Sydney". These IDs are defined by
		 * [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/)
		 * project, and currently available in the file
		 * [timezone.xml](http://unicode.org/repos/cldr/trunk/common/bcp47/timezone.xml).
		 * This field is used to correctly interpret date and time queries.
		 * If this field is not specified, the default time zone (UTC) is used.
		 */
		timeZone?: string | null;
	}

	/** Shared request options for all RPC methods. */
	export interface RequestOptionsFormProperties {

		/**
		 * The BCP-47 language code, such as "en-US" or "sr-Latn".
		 * For more information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 * For translations.
		 * Set this field using the language set in browser or for the page. In the
		 * event that the user's language preference is known, set this field to the
		 * known user language.
		 * When specified, the documents in search results are biased towards the
		 * specified language.
		 * The suggest API does not use this parameter. Instead, suggest autocompletes
		 * only based on characters in the query.
		 */
		languageCode: FormControl<string | null | undefined>,

		/** Id of the application created using SearchApplicationsService. */
		searchApplicationId: FormControl<string | null | undefined>,

		/**
		 * Current user's time zone id, such as "America/Los_Angeles" or
		 * "Australia/Sydney". These IDs are defined by
		 * [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/)
		 * project, and currently available in the file
		 * [timezone.xml](http://unicode.org/repos/cldr/trunk/common/bcp47/timezone.xml).
		 * This field is used to correctly interpret date and time queries.
		 * If this field is not specified, the default time zone (UTC) is used.
		 */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateRequestOptionsFormGroup() {
		return new FormGroup<RequestOptionsFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			searchApplicationId: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
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


	/**
	 * Information relevant only to a restrict entry.
	 * NextId: 12
	 */
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

	/**
	 * Information relevant only to a restrict entry.
	 * NextId: 12
	 */
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

		/**
		 * The list of top-level objects for the data source.
		 * The maximum number of elements is 10.
		 */
		objectDefinitions?: Array<ObjectDefinition>;

		/**
		 * IDs of the Long Running Operations (LROs) currently running for this
		 * schema. After modifying the schema, wait for operations to complete
		 * before indexing additional content.
		 */
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

		/**
		 * Specify the full view URL to find the corresponding item.
		 * The maximum length is 2048 characters.
		 */
		viewUrl?: string | null;
	}
	export interface SearchItemsByViewUrlRequestFormProperties {

		/** The next_page_token value returned from a previous request, if any. */
		pageToken: FormControl<string | null | undefined>,

		/**
		 * Specify the full view URL to find the corresponding item.
		 * The maximum length is 2048 characters.
		 */
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

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken?: string | null;
	}
	export interface SearchItemsByViewUrlResponseFormProperties {

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchItemsByViewUrlResponseFormGroup() {
		return new FormGroup<SearchItemsByViewUrlResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The search API request. */
	export interface SearchRequest {

		/**
		 * The sources to use for querying. If not specified, all data sources
		 * from the current search application are used.
		 */
		dataSourceRestrictions?: Array<DataSourceRestriction>;
		facetOptions?: Array<FacetOptions>;

		/**
		 * Maximum number of search results to return in one page.
		 * Valid values are between 1 and 100, inclusive.
		 * Default value is 10.
		 */
		pageSize?: number | null;

		/**
		 * The raw query string.
		 * See supported search operators in the [Cloud search
		 * Cheat
		 * Sheet](https://gsuite.google.com/learning-center/products/cloudsearch/cheat-sheet/)
		 */
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

		/**
		 * Maximum number of search results to return in one page.
		 * Valid values are between 1 and 100, inclusive.
		 * Default value is 10.
		 */
		pageSize: FormControl<number | null | undefined>,

		/**
		 * The raw query string.
		 * See supported search operators in the [Cloud search
		 * Cheat
		 * Sheet](https://gsuite.google.com/learning-center/products/cloudsearch/cheat-sheet/)
		 */
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

		/**
		 * Structured results for the user query. These results are not counted
		 * against the page_size.
		 */
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

		/**
		 * If source is clustered, provide list of clustered results. There will only
		 * be one level of clustered results. If current source is not enabled for
		 * clustering, this field will be empty.
		 */
		clusteredResults?: Array<SearchResult>;

		/** Debugging information about the result. */
		debugInfo?: ResultDebugInfo;

		/** Metadata of a matched search result. */
		metadata?: Metadata;

		/**
		 * Snippet of the search result, which summarizes the content of the resulting
		 * page.
		 */
		snippet?: Snippet;

		/** Title of the search result. */
		title?: string | null;

		/**
		 * The URL of the search result. The URL contains a Google redirect to the
		 * actual item. This URL is signed and shouldn't be changed.
		 */
		url?: string | null;
	}

	/** Results containing indexed information for a document. */
	export interface SearchResultFormProperties {

		/** Title of the search result. */
		title: FormControl<string | null | undefined>,

		/**
		 * The URL of the search result. The URL contains a Google redirect to the
		 * actual item. This URL is signed and shouldn't be changed.
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSearchResultFormGroup() {
		return new FormGroup<SearchResultFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Snippet of the search result, which summarizes the content of the resulting
	 * page.
	 */
	export interface Snippet {

		/** The matched ranges in the snippet. */
		matchRanges?: Array<MatchRange>;

		/**
		 * The snippet of the document.
		 * The snippet of the document. May contain escaped HTML character that
		 * should be unescaped prior to rendering.
		 */
		snippet?: string | null;
	}

	/**
	 * Snippet of the search result, which summarizes the content of the resulting
	 * page.
	 */
	export interface SnippetFormProperties {

		/**
		 * The snippet of the document.
		 * The snippet of the document. May contain escaped HTML character that
		 * should be unescaped prior to rendering.
		 */
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
	}
	export interface SpellResultFormProperties {

		/** The suggested spelling of the query. */
		suggestedQuery: FormControl<string | null | undefined>,
	}
	export function CreateSpellResultFormGroup() {
		return new FormGroup<SpellResultFormProperties>({
			suggestedQuery: new FormControl<string | null | undefined>(undefined),
		});

	}


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

		/**
		 * Name of connector making this call.
		 * <br />Format: datasources/{source_id}/connectors/{ID}
		 */
		connectorName?: string | null;

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions;
	}

	/** Start upload file request. */
	export interface StartUploadItemRequestFormProperties {

		/**
		 * Name of connector making this call.
		 * <br />Format: datasources/{source_id}/connectors/{ID}
		 */
		connectorName: FormControl<string | null | undefined>,
	}
	export function CreateStartUploadItemRequestFormGroup() {
		return new FormGroup<StartUploadItemRequestFormProperties>({
			connectorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request of suggest API. */
	export interface SuggestRequest {

		/**
		 * The sources to use for suggestions. If not specified, the data sources
		 * are taken from the current search application.
		 * NOTE: Suggestions are supported only for third party data sources and
		 * people (i.e. PredefinedSource.PERSON).
		 */
		dataSourceRestrictions?: Array<DataSourceRestriction>;

		/**
		 * Partial query for which autocomplete suggestions will be shown.
		 * For example, if the query is "sea", then the server might return
		 * "season", "search", "seagull" and so on.
		 */
		query?: string | null;

		/** Shared request options for all RPC methods. */
		requestOptions?: RequestOptions;
	}

	/** Request of suggest API. */
	export interface SuggestRequestFormProperties {

		/**
		 * Partial query for which autocomplete suggestions will be shown.
		 * For example, if the query is "sea", then the server might return
		 * "season", "search", "seagull" and so on.
		 */
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

		/**
		 * This field does not contain anything as of now and is just used as an
		 * indicator that the suggest result was a phrase completion.
		 */
		querySuggestion?: QuerySuggestion;

		/** Defines sources for the suggest/search APIs. */
		source?: Source;

		/**
		 * The suggested query that will be used for search, when the user
		 * clicks on the suggestion
		 */
		suggestedQuery?: string | null;
	}

	/** One suggestion result. */
	export interface SuggestResultFormProperties {

		/**
		 * The suggested query that will be used for search, when the user
		 * clicks on the suggestion
		 */
		suggestedQuery: FormControl<string | null | undefined>,
	}
	export function CreateSuggestResultFormGroup() {
		return new FormGroup<SuggestResultFormProperties>({
			suggestedQuery: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnreserveItemsRequest {

		/**
		 * Name of connector making this call.
		 * <br />Format: datasources/{source_id}/connectors/{ID}
		 */
		connectorName?: string | null;

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions;

		/** Name of a queue to unreserve items from. */
		queue?: string | null;
	}
	export interface UnreserveItemsRequestFormProperties {

		/**
		 * Name of connector making this call.
		 * <br />Format: datasources/{source_id}/connectors/{ID}
		 */
		connectorName: FormControl<string | null | undefined>,

		/** Name of a queue to unreserve items from. */
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

		/**
		 * Datasource is a logical namespace for items to be indexed.
		 * All items must belong to a datasource.  This is the prerequisite before
		 * items can be indexed into Cloud Search.
		 */
		source?: DataSource;
	}
	export interface UpdateDataSourceRequestFormProperties {
	}
	export function CreateUpdateDataSourceRequestFormGroup() {
		return new FormGroup<UpdateDataSourceRequestFormProperties>({
		});

	}

	export interface UpdateSchemaRequest {

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions;

		/** The schema definition for a data source. */
		schema?: Schema;

		/**
		 * If true, the schema will be checked for validity,
		 * but will not be registered with the data source, even if valid.
		 */
		validateOnly?: boolean | null;
	}
	export interface UpdateSchemaRequestFormProperties {

		/**
		 * If true, the schema will be checked for validity,
		 * but will not be registered with the data source, even if valid.
		 */
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
		 * Fetches the item whose viewUrl exactly matches that of the URL provided
		 * in the request.
		 * **Note:** This API requires an admin account to execute.
		 * Post v1/debug/{name}/items:searchByViewUrl
		 * @param {string} name Source name, format:
		 * datasources/{source_id}
		 * @return {void} Successful response
		 */
		Cloudsearch_debug_datasources_items_searchByViewUrl(name: string, requestBody: SearchItemsByViewUrlRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/debug/' + (name == null ? '' : encodeURIComponent(name)) + '/items:searchByViewUrl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks whether an item is accessible by specified principal.
		 * **Note:** This API requires an admin account to execute.
		 * Post v1/debug/{name}:checkAccess
		 * @param {string} name Item name, format:
		 * datasources/{source_id}/items/{item_id}
		 * @param {boolean} debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field.
		 * Otherwise, ignore this field.
		 * @return {void} Successful response
		 */
		Cloudsearch_debug_datasources_items_checkAccess(name: string, debugOptions_enableDebugging: boolean | null | undefined, requestBody: Principal): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/debug/' + (name == null ? '' : encodeURIComponent(name)) + ':checkAccess&debugOptions_enableDebugging=' + debugOptions_enableDebugging, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists names of items associated with an unmapped identity.
		 * **Note:** This API requires an admin account to execute.
		 * Get v1/debug/{parent}/items:forunmappedidentity
		 * @param {string} parent The name of the identity source, in the following format:
		 * identitysources/{source_id}}
		 * @param {boolean} debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field.
		 * Otherwise, ignore this field.
		 * @param {number} pageSize Maximum number of items to fetch in a request.
		 * Defaults to 100.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {void} Successful response
		 */
		Cloudsearch_debug_identitysources_items_listForunmappedidentity(parent: string, debugOptions_enableDebugging: boolean | null | undefined, groupResourceName: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, userResourceName: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/debug/' + (parent == null ? '' : encodeURIComponent(parent)) + '/items:forunmappedidentity&debugOptions_enableDebugging=' + debugOptions_enableDebugging + '&groupResourceName=' + (groupResourceName == null ? '' : encodeURIComponent(groupResourceName)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&userResourceName=' + (userResourceName == null ? '' : encodeURIComponent(userResourceName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists unmapped user identities for an identity source.
		 * **Note:** This API requires an admin account to execute.
		 * Get v1/debug/{parent}/unmappedids
		 * @param {string} parent The name of the identity source, in the following format:
		 * identitysources/{source_id}
		 * @param {boolean} debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field.
		 * Otherwise, ignore this field.
		 * @param {number} pageSize Maximum number of items to fetch in a request.
		 * Defaults to 100.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @param {UnmappedIdentityResolutionStatusCode} resolutionStatusCode Limit users selection to this status.
		 * @return {void} Successful response
		 */
		Cloudsearch_debug_identitysources_unmappedids_list(parent: string, debugOptions_enableDebugging: boolean | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, resolutionStatusCode: UnmappedIdentityResolutionStatusCode | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/debug/' + (parent == null ? '' : encodeURIComponent(parent)) + '/unmappedids&debugOptions_enableDebugging=' + debugOptions_enableDebugging + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&resolutionStatusCode=' + resolutionStatusCode, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes Item resource for the
		 * specified resource name. This API requires an admin or service account
		 * to execute. The service account used is the one whitelisted in the
		 * corresponding data source.
		 * Delete v1/indexing/{name}
		 * @param {string} name Required. Name of the item to delete.
		 * Format: datasources/{source_id}/items/{item_id}
		 * @param {string} connectorName Name of connector making this call.
		 * <br />Format: datasources/{source_id}/connectors/{ID}
		 * @param {boolean} debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field.
		 * Otherwise, ignore this field.
		 * @param {IndexItemRequestMode} mode Required. The RequestMode for this request.
		 * @param {string} version Required. The incremented version of the item to delete from the index.
		 * The indexing system stores the version from the datasource as a
		 * byte string and compares the Item version in the index
		 * to the version of the queued Item using lexical ordering.
		 * <br /><br />
		 * Cloud Search Indexing won't delete any queued item with
		 * a version value that is less than or equal to
		 * the version of the currently indexed item.
		 * The maximum length for this field is 1024 bytes.
		 * @return {void} Successful response
		 */
		Cloudsearch_indexing_datasources_items_delete(name: string, connectorName: string | null | undefined, debugOptions_enableDebugging: boolean | null | undefined, mode: IndexItemRequestMode | null | undefined, version: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/indexing/' + (name == null ? '' : encodeURIComponent(name)) + '&connectorName=' + (connectorName == null ? '' : encodeURIComponent(connectorName)) + '&debugOptions_enableDebugging=' + debugOptions_enableDebugging + '&mode=' + mode + '&version=' + (version == null ? '' : encodeURIComponent(version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets Item resource by item name.
		 * This API requires an admin or service account to execute.  The service
		 * account used is the one whitelisted in the corresponding data source.
		 * Get v1/indexing/{name}
		 * @param {string} name Name of the item to get info.
		 * Format: datasources/{source_id}/items/{item_id}
		 * @param {string} connectorName Name of connector making this call.
		 * <br />Format: datasources/{source_id}/connectors/{ID}
		 * @param {boolean} debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field.
		 * Otherwise, ignore this field.
		 * @return {void} Successful response
		 */
		Cloudsearch_indexing_datasources_items_get(name: string, connectorName: string | null | undefined, debugOptions_enableDebugging: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/indexing/' + (name == null ? '' : encodeURIComponent(name)) + '&connectorName=' + (connectorName == null ? '' : encodeURIComponent(connectorName)) + '&debugOptions_enableDebugging=' + debugOptions_enableDebugging, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all or a subset of Item resources.
		 * This API requires an admin or service account to execute. The service
		 * account used is the one whitelisted in the corresponding data source.
		 * Get v1/indexing/{name}/items
		 * @param {string} name Name of the Data Source to list Items.  Format:
		 * datasources/{source_id}
		 * @param {boolean} brief When set to true, the indexing system only populates the following fields:
		 * name,
		 * version,
		 * queue.
		 * metadata.hash,
		 * metadata.title,
		 * metadata.sourceRepositoryURL,
		 * metadata.objectType,
		 * metadata.createTime,
		 * metadata.updateTime,
		 * metadata.contentLanguage,
		 * metadata.mimeType,
		 * structured_data.hash,
		 * content.hash,
		 * itemType,
		 * itemStatus.code,
		 * itemStatus.processingError.code,
		 * itemStatus.repositoryError.type,
		 * <br />If this value is false, then all the fields are populated in Item.
		 * @param {string} connectorName Name of connector making this call.
		 * <br />Format: datasources/{source_id}/connectors/{ID}
		 * @param {boolean} debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field.
		 * Otherwise, ignore this field.
		 * @param {number} pageSize Maximum number of items to fetch in a request.
		 * The max value is 1000 when brief is true.  The max value is 10 if brief
		 * is false.
		 * <br />The default value is 10
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {void} Successful response
		 */
		Cloudsearch_indexing_datasources_items_list(name: string, brief: boolean | null | undefined, connectorName: string | null | undefined, debugOptions_enableDebugging: boolean | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/indexing/' + (name == null ? '' : encodeURIComponent(name)) + '/items&brief=' + brief + '&connectorName=' + (connectorName == null ? '' : encodeURIComponent(connectorName)) + '&debugOptions_enableDebugging=' + debugOptions_enableDebugging + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes all items in a queue. This method is useful for deleting stale
		 * items.
		 * This API requires an admin or service account to execute. The service
		 * account used is the one whitelisted in the corresponding data source.
		 * Post v1/indexing/{name}/items:deleteQueueItems
		 * @param {string} name Name of the Data Source to delete items in a queue.
		 * Format: datasources/{source_id}
		 * @return {void} Successful response
		 */
		Cloudsearch_indexing_datasources_items_deleteQueueItems(name: string, requestBody: DeleteQueueItemsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/indexing/' + (name == null ? '' : encodeURIComponent(name)) + '/items:deleteQueueItems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Polls for unreserved items from the indexing queue and marks a
		 * set as reserved, starting with items that have
		 * the oldest timestamp from the highest priority
		 * ItemStatus.
		 * The priority order is as follows: <br />
		 * ERROR
		 * <br />
		 * MODIFIED
		 * <br />
		 * NEW_ITEM
		 * <br />
		 * ACCEPTED
		 * <br />
		 * Reserving items ensures that polling from other threads
		 * cannot create overlapping sets.
		 * After handling the reserved items, the client should put items back
		 * into the unreserved state, either by calling
		 * index,
		 * or by calling
		 * push with
		 * the type REQUEUE.
		 * Items automatically become available (unreserved) after 4 hours even if no
		 * update or push method is called.
		 * This API requires an admin or service account to execute. The service
		 * account used is the one whitelisted in the corresponding data source.
		 * Post v1/indexing/{name}/items:poll
		 * @param {string} name Name of the Data Source to poll items.
		 * Format: datasources/{source_id}
		 * @return {void} Successful response
		 */
		Cloudsearch_indexing_datasources_items_poll(name: string, requestBody: PollItemsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/indexing/' + (name == null ? '' : encodeURIComponent(name)) + '/items:poll', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unreserves all items from a queue, making them all eligible to be
		 * polled.  This method is useful for resetting the indexing queue
		 * after a connector has been restarted.
		 * This API requires an admin or service account to execute. The service
		 * account used is the one whitelisted in the corresponding data source.
		 * Post v1/indexing/{name}/items:unreserve
		 * @param {string} name Name of the Data Source to unreserve all items.
		 * Format: datasources/{source_id}
		 * @return {void} Successful response
		 */
		Cloudsearch_indexing_datasources_items_unreserve(name: string, requestBody: UnreserveItemsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/indexing/' + (name == null ? '' : encodeURIComponent(name)) + '/items:unreserve', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the schema of a data source.
		 * **Note:** This API requires an admin or service account to execute.
		 * Delete v1/indexing/{name}/schema
		 * @param {string} name Name of the data source to delete Schema.  Format:
		 * datasources/{source_id}
		 * @param {boolean} debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field.
		 * Otherwise, ignore this field.
		 * @return {void} Successful response
		 */
		Cloudsearch_indexing_datasources_deleteSchema(name: string, debugOptions_enableDebugging: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/indexing/' + (name == null ? '' : encodeURIComponent(name)) + '/schema&debugOptions_enableDebugging=' + debugOptions_enableDebugging, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the schema of a data source.
		 * **Note:** This API requires an admin or service account to execute.
		 * Get v1/indexing/{name}/schema
		 * @param {string} name Name of the data source to get Schema.  Format:
		 * datasources/{source_id}
		 * @param {boolean} debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field.
		 * Otherwise, ignore this field.
		 * @return {void} Successful response
		 */
		Cloudsearch_indexing_datasources_getSchema(name: string, debugOptions_enableDebugging: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/indexing/' + (name == null ? '' : encodeURIComponent(name)) + '/schema&debugOptions_enableDebugging=' + debugOptions_enableDebugging, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the schema of a data source. This method does not perform
		 * incremental updates to the schema. Instead, this method updates the schema
		 * by overwriting the entire schema.
		 * **Note:** This API requires an admin or service account to execute.
		 * Put v1/indexing/{name}/schema
		 * @param {string} name Name of the data source to update Schema.  Format:
		 * datasources/{source_id}
		 * @return {void} Successful response
		 */
		Cloudsearch_indexing_datasources_updateSchema(name: string, requestBody: UpdateSchemaRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/indexing/' + (name == null ? '' : encodeURIComponent(name)) + '/schema', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates Item ACL, metadata, and
		 * content. It will insert the Item if it
		 * does not exist.
		 * This method does not support partial updates.  Fields with no provided
		 * values are cleared out in the Cloud Search index.
		 * This API requires an admin or service account to execute. The service
		 * account used is the one whitelisted in the corresponding data source.
		 * Post v1/indexing/{name}:index
		 * @param {string} name Name of the Item. Format:
		 * datasources/{source_id}/items/{item_id}
		 * <br />This is a required field.
		 * The maximum length is 1536 characters.
		 * @return {void} Successful response
		 */
		Cloudsearch_indexing_datasources_items_index(name: string, requestBody: IndexItemRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/indexing/' + (name == null ? '' : encodeURIComponent(name)) + ':index', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Pushes an item onto a queue for later polling and updating.
		 * This API requires an admin or service account to execute. The service
		 * account used is the one whitelisted in the corresponding data source.
		 * Post v1/indexing/{name}:push
		 * @param {string} name Name of the item to
		 * push into the indexing queue.<br />
		 * Format: datasources/{source_id}/items/{ID}
		 * <br />This is a required field.
		 * The maximum length is 1536 characters.
		 * @return {void} Successful response
		 */
		Cloudsearch_indexing_datasources_items_push(name: string, requestBody: PushItemRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/indexing/' + (name == null ? '' : encodeURIComponent(name)) + ':push', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an upload session for uploading item content. For items smaller
		 * than 100 KB, it's easier to embed the content
		 * inline within
		 * an index request.
		 * This API requires an admin or service account to execute. The service
		 * account used is the one whitelisted in the corresponding data source.
		 * Post v1/indexing/{name}:upload
		 * @param {string} name Name of the Item to start a resumable upload.
		 * Format: datasources/{source_id}/items/{item_id}.
		 * The maximum length is 1536 bytes.
		 * @return {void} Successful response
		 */
		Cloudsearch_indexing_datasources_items_upload(name: string, requestBody: StartUploadItemRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/indexing/' + (name == null ? '' : encodeURIComponent(name)) + ':upload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * The Cloud Search Query API provides the search method, which returns
		 * the most relevant results from a user query.  The results can come from
		 * G Suite Apps, such as Gmail or Google Drive, or they can come from data
		 * that you have indexed from a third party.
		 * **Note:** This API requires a standard end user account to execute.
		 * A service account can't perform Query API requests directly; to use a
		 * service account to perform queries, set up [G Suite domain-wide delegation
		 * of
		 * authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
		 * Post v1/query/search
		 * @return {void} Successful response
		 */
		Cloudsearch_query_search(requestBody: SearchRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/query/search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns list of sources that user can use for Search and Suggest APIs.
		 * **Note:** This API requires a standard end user account to execute.
		 * A service account can't perform Query API requests directly; to use a
		 * service account to perform queries, set up [G Suite domain-wide delegation
		 * of
		 * authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
		 * Get v1/query/sources
		 * @param {string} pageToken Number of sources to return in the response.
		 * @param {boolean} requestOptions_debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field.
		 * Otherwise, ignore this field.
		 * @param {string} requestOptions_languageCode The BCP-47 language code, such as "en-US" or "sr-Latn".
		 * For more information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 * For translations.
		 * Set this field using the language set in browser or for the page. In the
		 * event that the user's language preference is known, set this field to the
		 * known user language.
		 * When specified, the documents in search results are biased towards the
		 * specified language.
		 * The suggest API does not use this parameter. Instead, suggest autocompletes
		 * only based on characters in the query.
		 * @param {string} requestOptions_searchApplicationId Id of the application created using SearchApplicationsService.
		 * @param {string} requestOptions_timeZone Current user's time zone id, such as "America/Los_Angeles" or
		 * "Australia/Sydney". These IDs are defined by
		 * [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/)
		 * project, and currently available in the file
		 * [timezone.xml](http://unicode.org/repos/cldr/trunk/common/bcp47/timezone.xml).
		 * This field is used to correctly interpret date and time queries.
		 * If this field is not specified, the default time zone (UTC) is used.
		 * @return {void} Successful response
		 */
		Cloudsearch_query_sources_list(pageToken: string | null | undefined, requestOptions_debugOptions_enableDebugging: boolean | null | undefined, requestOptions_languageCode: string | null | undefined, requestOptions_searchApplicationId: string | null | undefined, requestOptions_timeZone: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/query/sources?pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&requestOptions_debugOptions_enableDebugging=' + requestOptions_debugOptions_enableDebugging + '&requestOptions_languageCode=' + (requestOptions_languageCode == null ? '' : encodeURIComponent(requestOptions_languageCode)) + '&requestOptions_searchApplicationId=' + (requestOptions_searchApplicationId == null ? '' : encodeURIComponent(requestOptions_searchApplicationId)) + '&requestOptions_timeZone=' + (requestOptions_timeZone == null ? '' : encodeURIComponent(requestOptions_timeZone)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Provides suggestions for autocompleting the query.
		 * **Note:** This API requires a standard end user account to execute.
		 * A service account can't perform Query API requests directly; to use a
		 * service account to perform queries, set up [G Suite domain-wide delegation
		 * of
		 * authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
		 * Post v1/query/suggest
		 * @return {void} Successful response
		 */
		Cloudsearch_query_suggest(requestBody: SuggestRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/query/suggest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists datasources.
		 * **Note:** This API requires an admin account to execute.
		 * Get v1/settings/datasources
		 * @param {boolean} debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field.
		 * Otherwise, ignore this field.
		 * @param {number} pageSize Maximum number of datasources to fetch in a request.
		 * The max value is 100.
		 * <br />The default value is 10
		 * @param {string} pageToken Starting index of the results.
		 * @return {void} Successful response
		 */
		Cloudsearch_settings_datasources_list(debugOptions_enableDebugging: boolean | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/settings/datasources?debugOptions_enableDebugging=' + debugOptions_enableDebugging + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a datasource.
		 * **Note:** This API requires an admin account to execute.
		 * Post v1/settings/datasources
		 * @return {void} Successful response
		 */
		Cloudsearch_settings_datasources_create(requestBody: DataSource): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/settings/datasources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all search applications.
		 * **Note:** This API requires an admin account to execute.
		 * Get v1/settings/searchapplications
		 * @param {boolean} debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field.
		 * Otherwise, ignore this field.
		 * @param {number} pageSize The maximum number of items to return.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * <br/> The default value is 10
		 * @return {void} Successful response
		 */
		Cloudsearch_settings_searchapplications_list(debugOptions_enableDebugging: boolean | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/settings/searchapplications?debugOptions_enableDebugging=' + debugOptions_enableDebugging + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a search application.
		 * **Note:** This API requires an admin account to execute.
		 * Post v1/settings/searchapplications
		 * @return {void} Successful response
		 */
		Cloudsearch_settings_searchapplications_create(requestBody: SearchApplication): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/settings/searchapplications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a datasource.
		 * **Note:** This API requires an admin account to execute.
		 * Delete v1/settings/{name}
		 * @param {string} name Name of the datasource.
		 * Format: datasources/{source_id}.
		 * @param {boolean} debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field.
		 * Otherwise, ignore this field.
		 * @return {void} Successful response
		 */
		Cloudsearch_settings_datasources_delete(name: string, debugOptions_enableDebugging: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/settings/' + (name == null ? '' : encodeURIComponent(name)) + '&debugOptions_enableDebugging=' + debugOptions_enableDebugging, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a datasource.
		 * **Note:** This API requires an admin account to execute.
		 * Get v1/settings/{name}
		 * @param {string} name Name of the datasource resource.
		 * Format: datasources/{source_id}.
		 * @param {boolean} debugOptions_enableDebugging If you are asked by Google to help with debugging, set this field.
		 * Otherwise, ignore this field.
		 * @return {void} Successful response
		 */
		Cloudsearch_settings_datasources_get(name: string, debugOptions_enableDebugging: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/settings/' + (name == null ? '' : encodeURIComponent(name)) + '&debugOptions_enableDebugging=' + debugOptions_enableDebugging, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a datasource.
		 * **Note:** This API requires an admin account to execute.
		 * Put v1/settings/{name}
		 * @param {string} name Name of the datasource resource.
		 * Format: datasources/{source_id}.
		 * <br />The name is ignored when creating a datasource.
		 * @return {void} Successful response
		 */
		Cloudsearch_settings_datasources_update(name: string, requestBody: UpdateDataSourceRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/settings/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Resets a search application to default settings. This will return an empty
		 * response.
		 * **Note:** This API requires an admin account to execute.
		 * Post v1/settings/{name}:reset
		 * @param {string} name The name of the search application to be reset.
		 * <br />Format: applications/{application_id}.
		 * @return {void} Successful response
		 */
		Cloudsearch_settings_searchapplications_reset(name: string, requestBody: ResetSearchApplicationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/settings/' + (name == null ? '' : encodeURIComponent(name)) + ':reset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets indexed item statistics aggreggated across all data sources. This
		 * API only returns statistics for previous dates; it doesn't return
		 * statistics for the current day.
		 * **Note:** This API requires a standard end user account to execute.
		 * Get v1/stats/index
		 * @param {number} fromDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} fromDate_month Month of date. Must be from 1 to 12.
		 * @param {number} fromDate_year Year of date. Must be from 1 to 9999.
		 * @param {number} toDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} toDate_month Month of date. Must be from 1 to 12.
		 * @param {number} toDate_year Year of date. Must be from 1 to 9999.
		 * @return {void} Successful response
		 */
		Cloudsearch_stats_getIndex(fromDate_day: number | null | undefined, fromDate_month: number | null | undefined, fromDate_year: number | null | undefined, toDate_day: number | null | undefined, toDate_month: number | null | undefined, toDate_year: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/stats/index?fromDate_day=' + fromDate_day + '&fromDate_month=' + fromDate_month + '&fromDate_year=' + fromDate_year + '&toDate_day=' + toDate_day + '&toDate_month=' + toDate_month + '&toDate_year=' + toDate_year, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets indexed item statistics for a single data source.
		 * **Note:** This API requires a standard end user account to execute.
		 * Get v1/stats/index/{name}
		 * @param {string} name The resource id of the data source to retrieve statistics for,
		 * in the following format: "datasources/{source_id}"
		 * @param {number} fromDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} fromDate_month Month of date. Must be from 1 to 12.
		 * @param {number} fromDate_year Year of date. Must be from 1 to 9999.
		 * @param {number} toDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} toDate_month Month of date. Must be from 1 to 12.
		 * @param {number} toDate_year Year of date. Must be from 1 to 9999.
		 * @return {void} Successful response
		 */
		Cloudsearch_stats_index_datasources_get(name: string, fromDate_day: number | null | undefined, fromDate_month: number | null | undefined, fromDate_year: number | null | undefined, toDate_day: number | null | undefined, toDate_month: number | null | undefined, toDate_year: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/stats/index/' + (name == null ? '' : encodeURIComponent(name)) + '&fromDate_day=' + fromDate_day + '&fromDate_month=' + fromDate_month + '&fromDate_year=' + fromDate_year + '&toDate_day=' + toDate_day + '&toDate_month=' + toDate_month + '&toDate_year=' + toDate_year, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the query statistics for customer.
		 * **Note:** This API requires a standard end user account to execute.
		 * Get v1/stats/query
		 * @param {number} fromDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} fromDate_month Month of date. Must be from 1 to 12.
		 * @param {number} fromDate_year Year of date. Must be from 1 to 9999.
		 * @param {number} toDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} toDate_month Month of date. Must be from 1 to 12.
		 * @param {number} toDate_year Year of date. Must be from 1 to 9999.
		 * @return {void} Successful response
		 */
		Cloudsearch_stats_getQuery(fromDate_day: number | null | undefined, fromDate_month: number | null | undefined, fromDate_year: number | null | undefined, toDate_day: number | null | undefined, toDate_month: number | null | undefined, toDate_year: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/stats/query?fromDate_day=' + fromDate_day + '&fromDate_month=' + fromDate_month + '&fromDate_year=' + fromDate_year + '&toDate_day=' + toDate_day + '&toDate_month=' + toDate_month + '&toDate_year=' + toDate_year, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the query statistics for search application.
		 * **Note:** This API requires a standard end user account to execute.
		 * Get v1/stats/query/{name}
		 * @param {string} name The resource id of the search application query stats, in the following
		 * format: searchapplications/{application_id}
		 * @param {number} fromDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} fromDate_month Month of date. Must be from 1 to 12.
		 * @param {number} fromDate_year Year of date. Must be from 1 to 9999.
		 * @param {number} toDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} toDate_month Month of date. Must be from 1 to 12.
		 * @param {number} toDate_year Year of date. Must be from 1 to 9999.
		 * @return {void} Successful response
		 */
		Cloudsearch_stats_query_searchapplications_get(name: string, fromDate_day: number | null | undefined, fromDate_month: number | null | undefined, fromDate_year: number | null | undefined, toDate_day: number | null | undefined, toDate_month: number | null | undefined, toDate_year: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/stats/query/' + (name == null ? '' : encodeURIComponent(name)) + '&fromDate_day=' + fromDate_day + '&fromDate_month=' + fromDate_month + '&fromDate_year=' + fromDate_year + '&toDate_day=' + toDate_day + '&toDate_month=' + toDate_month + '&toDate_year=' + toDate_year, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the # of search sessions, % of successful sessions with a click query
		 * statistics for customer.
		 * **Note:** This API requires a standard end user account to execute.
		 * Get v1/stats/session
		 * @param {number} fromDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} fromDate_month Month of date. Must be from 1 to 12.
		 * @param {number} fromDate_year Year of date. Must be from 1 to 9999.
		 * @param {number} toDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} toDate_month Month of date. Must be from 1 to 12.
		 * @param {number} toDate_year Year of date. Must be from 1 to 9999.
		 * @return {void} Successful response
		 */
		Cloudsearch_stats_getSession(fromDate_day: number | null | undefined, fromDate_month: number | null | undefined, fromDate_year: number | null | undefined, toDate_day: number | null | undefined, toDate_month: number | null | undefined, toDate_year: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/stats/session?fromDate_day=' + fromDate_day + '&fromDate_month=' + fromDate_month + '&fromDate_year=' + fromDate_year + '&toDate_day=' + toDate_day + '&toDate_month=' + toDate_month + '&toDate_year=' + toDate_year, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the # of search sessions, % of successful sessions with a click query
		 * statistics for search application.
		 * **Note:** This API requires a standard end user account to execute.
		 * Get v1/stats/session/{name}
		 * @param {string} name The resource id of the search application session stats, in the following
		 * format: searchapplications/{application_id}
		 * @param {number} fromDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} fromDate_month Month of date. Must be from 1 to 12.
		 * @param {number} fromDate_year Year of date. Must be from 1 to 9999.
		 * @param {number} toDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} toDate_month Month of date. Must be from 1 to 12.
		 * @param {number} toDate_year Year of date. Must be from 1 to 9999.
		 * @return {void} Successful response
		 */
		Cloudsearch_stats_session_searchapplications_get(name: string, fromDate_day: number | null | undefined, fromDate_month: number | null | undefined, fromDate_year: number | null | undefined, toDate_day: number | null | undefined, toDate_month: number | null | undefined, toDate_year: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/stats/session/' + (name == null ? '' : encodeURIComponent(name)) + '&fromDate_day=' + fromDate_day + '&fromDate_month=' + fromDate_month + '&fromDate_year=' + fromDate_year + '&toDate_day=' + toDate_day + '&toDate_month=' + toDate_month + '&toDate_year=' + toDate_year, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the users statistics for customer.
		 * **Note:** This API requires a standard end user account to execute.
		 * Get v1/stats/user
		 * @param {number} fromDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} fromDate_month Month of date. Must be from 1 to 12.
		 * @param {number} fromDate_year Year of date. Must be from 1 to 9999.
		 * @param {number} toDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} toDate_month Month of date. Must be from 1 to 12.
		 * @param {number} toDate_year Year of date. Must be from 1 to 9999.
		 * @return {void} Successful response
		 */
		Cloudsearch_stats_getUser(fromDate_day: number | null | undefined, fromDate_month: number | null | undefined, fromDate_year: number | null | undefined, toDate_day: number | null | undefined, toDate_month: number | null | undefined, toDate_year: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/stats/user?fromDate_day=' + fromDate_day + '&fromDate_month=' + fromDate_month + '&fromDate_year=' + fromDate_year + '&toDate_day=' + toDate_day + '&toDate_month=' + toDate_month + '&toDate_year=' + toDate_year, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the users statistics for search application.
		 * **Note:** This API requires a standard end user account to execute.
		 * Get v1/stats/user/{name}
		 * @param {string} name The resource id of the search application session stats, in the following
		 * format: searchapplications/{application_id}
		 * @param {number} fromDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} fromDate_month Month of date. Must be from 1 to 12.
		 * @param {number} fromDate_year Year of date. Must be from 1 to 9999.
		 * @param {number} toDate_day Day of month. Must be from 1 to 31 and valid for the year and month.
		 * @param {number} toDate_month Month of date. Must be from 1 to 12.
		 * @param {number} toDate_year Year of date. Must be from 1 to 9999.
		 * @return {void} Successful response
		 */
		Cloudsearch_stats_user_searchapplications_get(name: string, fromDate_day: number | null | undefined, fromDate_month: number | null | undefined, fromDate_year: number | null | undefined, toDate_day: number | null | undefined, toDate_month: number | null | undefined, toDate_year: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/stats/user/' + (name == null ? '' : encodeURIComponent(name)) + '&fromDate_day=' + fromDate_day + '&fromDate_month=' + fromDate_month + '&fromDate_year=' + fromDate_year + '&toDate_day=' + toDate_day + '&toDate_month=' + toDate_month + '&toDate_year=' + toDate_year, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the latest state of a long-running operation.  Clients can use this
		 * method to poll the operation result at intervals as recommended by the API
		 * service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {void} Successful response
		 */
		Cloudsearch_operations_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}
	}

}

