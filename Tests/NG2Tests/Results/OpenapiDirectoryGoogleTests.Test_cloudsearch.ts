import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
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


	/** Options for boolean properties. */
	export interface BooleanPropertyOptions {

		/**
		 * Used to provide a search operator for boolean properties. This is
		 * optional. Search operators let users restrict the query to specific fields
		 * relevant to the type of item being searched.
		 */
		operatorOptions?: BooleanOperatorOptions | null;
	}

	export interface CheckAccessResponse {

		/** Returns true if principal has access.  Returns false otherwise. */
		hasAccess?: boolean | null;
	}

	export interface CompositeFilter {

		/** The logic operator of the sub filter. */
		logicOperator?: CompositeFilterLogicOperator | null;

		/** Sub filters. */
		subFilters?: Array<Filter> | null;
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
		compositeFilter?: CompositeFilter | null;
		valueFilter?: ValueFilter | null;
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
		value?: Value | null;
	}


	/** Definition of a single value with generic type. */
	export interface Value {
		booleanValue?: boolean | null;

		/** Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999. */
		dateValue?: Date | null;
		doubleValue?: number | null;
		integerValue?: string | null;
		stringValue?: string | null;
		timestampValue?: string | null;
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


	/** Aggregation of items by status code as of the specified date. */
	export interface CustomerIndexStats {

		/** Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999. */
		date?: Date | null;

		/** Number of items aggregrated by status code. */
		itemCountByStatus?: Array<ItemCountByStatus> | null;
	}

	export interface ItemCountByStatus {

		/** Number of items matching the status code. */
		count?: string | null;

		/** Status of the items. */
		statusCode?: ItemCountByStatusStatusCode | null;
	}

	export enum ItemCountByStatusStatusCode { CODE_UNSPECIFIED = 0, ERROR = 1, MODIFIED = 2, NEW_ITEM = 3, ACCEPTED = 4 }

	export interface CustomerQueryStats {

		/** Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999. */
		date?: Date | null;
		queryCountByStatus?: Array<QueryCountByStatus> | null;
	}

	export interface QueryCountByStatus {
		count?: string | null;

		/** This represents the http status code. */
		statusCode?: number | null;
	}

	export interface CustomerSessionStats {

		/** Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999. */
		date?: Date | null;

		/** The count of search sessions on the day */
		searchSessionsCount?: string | null;
	}

	export interface CustomerUserStats {

		/** Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999. */
		date?: Date | null;

		/** The count of unique active users in the past one day */
		oneDayActiveUsersCount?: string | null;

		/** The count of unique active users in the past seven days */
		sevenDaysActiveUsersCount?: string | null;

		/** The count of unique active users in the past thirty days */
		thirtyDaysActiveUsersCount?: string | null;
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
		indexingServiceAccounts?: Array<string> | null;

		/**
		 * This field restricts visibility to items at the datasource level. Items
		 * within the datasource are restricted to the union of users and groups
		 * included in this field. Note that, this does not ensure access to a
		 * specific item, as users need to have ACL permissions on the contained
		 * items. This ensures a high level access on the entire datasource, and
		 * that the individual items are not shared outside this visibility.
		 */
		itemsVisibility?: Array<GSuitePrincipal> | null;

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
		operationIds?: Array<string> | null;

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


	/** Aggregation of items by status code as of the specified date. */
	export interface DataSourceIndexStats {

		/** Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999. */
		date?: Date | null;

		/** Number of items aggregrated by status code. */
		itemCountByStatus?: Array<ItemCountByStatus> | null;
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
		filterOptions?: Array<FilterOptions> | null;

		/** Defines sources for the suggest/search APIs. */
		source?: Source | null;
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
		filter?: Filter | null;

		/**
		 * If object_type is set, only objects of that type are returned. This should
		 * correspond to the name of the object that was registered within the
		 * definition of schema. The maximum length is 256 characters.
		 */
		objectType?: string | null;
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


	/** Options for date properties. */
	export interface DatePropertyOptions {

		/**
		 * Optional. Provides a search operator for date properties.
		 * Search operators let users restrict the query to specific fields relevant
		 * to the type of item being searched.
		 */
		operatorOptions?: DateOperatorOptions | null;
	}


	/** List of date values. */
	export interface DateValues {
		values?: Array<Date> | null;
	}


	/** Shared request debug options for all cloudsearch RPC methods. */
	export interface DebugOptions {

		/**
		 * If you are asked by Google to help with debugging, set this field.
		 * Otherwise, ignore this field.
		 */
		enableDebugging?: boolean | null;
	}

	export interface DeleteQueueItemsRequest {

		/**
		 * Name of connector making this call.
		 * <br />Format: datasources/{source_id}/connectors/{ID}
		 */
		connectorName?: string | null;

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions | null;

		/** Name of a queue to delete items from. */
		queue?: string | null;
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


	/** Options for double properties. */
	export interface DoublePropertyOptions {

		/**
		 * Used to provide a search operator for double properties. This is
		 * optional. Search operators let users restrict the query to specific fields
		 * relevant to the type of item being searched.
		 */
		operatorOptions?: DoubleOperatorOptions | null;
	}


	/** List of double values. */
	export interface DoubleValues {
		values?: Array<number> | null;
	}


	/** Drive follow-up search restricts (e.g. "followup:suggestions"). */
	export interface DriveFollowUpRestrict {
		type?: DriveFollowUpRestrictType | null;
	}

	export enum DriveFollowUpRestrictType { UNSPECIFIED = 0, FOLLOWUP_SUGGESTIONS = 1, FOLLOWUP_ACTION_ITEMS = 2 }


	/** Drive location search restricts (e.g. "is:starred"). */
	export interface DriveLocationRestrict {
		type?: DriveLocationRestrictType | null;
	}

	export enum DriveLocationRestrictType { UNSPECIFIED = 0, TRASHED = 1, STARRED = 2 }


	/** Drive mime-type search restricts (e.g. "type:pdf"). */
	export interface DriveMimeTypeRestrict {
		type?: DriveMimeTypeRestrictType | null;
	}

	export enum DriveMimeTypeRestrictType { UNSPECIFIED = 0, PDF = 1, DOCUMENT = 2, PRESENTATION = 3, SPREADSHEET = 4, FORM = 5, DRAWING = 6, SCRIPT = 7, MAP = 8, IMAGE = 9, AUDIO = 10, VIDEO = 11, FOLDER = 12, ARCHIVE = 13, SITE = 14 }


	/** The time span search restrict (e.g. "after:2017-09-11 before:2017-09-12"). */
	export interface DriveTimeSpanRestrict {
		type?: DriveTimeSpanRestrictType | null;
	}

	export enum DriveTimeSpanRestrictType { UNSPECIFIED = 0, TODAY = 1, YESTERDAY = 2, LAST_7_DAYS = 3, LAST_30_DAYS = 4, LAST_90_DAYS = 5 }


	/** A person's email address. */
	export interface EmailAddress {

		/** The email address. */
		emailAddress?: string | null;
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
		operatorOptions?: EnumOperatorOptions | null;

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
		possibleValues?: Array<EnumValuePair> | null;
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


	/** List of enum values. */
	export interface EnumValues {

		/** The maximum allowable length for string values is 32 characters. */
		values?: Array<string> | null;
	}


	/** Error information about the response. */
	export interface ErrorInfo {
		errorMessages?: Array<ErrorMessage> | null;
	}


	/** Error message per source response. */
	export interface ErrorMessage {
		errorMessage?: string | null;

		/** Defines sources for the suggest/search APIs. */
		source?: Source | null;
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
		value?: Value | null;
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


	/** Source specific facet response */
	export interface FacetResult {

		/** FacetBuckets for values in response containing at least a single result. */
		buckets?: Array<FacetBucket> | null;

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

	export interface FieldViolation {

		/** Description of the error. */
		description?: string | null;

		/** Path of field with violation. */
		field?: string | null;
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

	export interface GetCustomerIndexStatsResponse {

		/** Summary of indexed item counts, one for each day in the requested range. */
		stats?: Array<CustomerIndexStats> | null;
	}

	export interface GetCustomerQueryStatsResponse {
		stats?: Array<CustomerQueryStats> | null;
	}

	export interface GetCustomerSessionStatsResponse {
		stats?: Array<CustomerSessionStats> | null;
	}

	export interface GetCustomerUserStatsResponse {
		stats?: Array<CustomerUserStats> | null;
	}

	export interface GetDataSourceIndexStatsResponse {

		/** Summary of indexed item counts, one for each day in the requested range. */
		stats?: Array<DataSourceIndexStats> | null;
	}

	export interface GetSearchApplicationQueryStatsResponse {
		stats?: Array<SearchApplicationQueryStats> | null;
	}

	export interface SearchApplicationQueryStats {

		/** Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999. */
		date?: Date | null;
		queryCountByStatus?: Array<QueryCountByStatus> | null;
	}

	export interface GetSearchApplicationSessionStatsResponse {
		stats?: Array<SearchApplicationSessionStats> | null;
	}

	export interface SearchApplicationSessionStats {

		/** Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999. */
		date?: Date | null;

		/** The count of search sessions on the day */
		searchSessionsCount?: string | null;
	}

	export interface GetSearchApplicationUserStatsResponse {
		stats?: Array<SearchApplicationUserStats> | null;
	}

	export interface SearchApplicationUserStats {

		/** Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999. */
		date?: Date | null;

		/** The count of unique active users in the past one day */
		oneDayActiveUsersCount?: string | null;

		/** The count of unique active users in the past seven days */
		sevenDaysActiveUsersCount?: string | null;

		/** The count of unique active users in the past thirty days */
		thirtyDaysActiveUsersCount?: string | null;
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


	/** Options for html properties. */
	export interface HtmlPropertyOptions {

		/**
		 * Used to provide a search operator for html properties. This is optional.
		 * Search operators let users restrict the query to specific fields relevant
		 * to the type of item being searched.
		 */
		operatorOptions?: HtmlOperatorOptions | null;
		retrievalImportance?: RetrievalImportance | null;
	}

	export interface RetrievalImportance {

		/**
		 * Indicates the ranking importance given to property when it is matched
		 * during retrieval. Once set, the token importance of a property cannot be
		 * changed.
		 */
		importance?: RetrievalImportanceImportance | null;
	}

	export enum RetrievalImportanceImportance { DEFAULT = 0, HIGHEST = 1, HIGH = 2, LOW = 3, NONE = 4 }


	/** List of html values. */
	export interface HtmlValues {

		/** The maximum allowable length for html values is 2048 characters. */
		values?: Array<string> | null;
	}

	export interface IndexItemOptions {

		/**
		 * Specifies if the index request should allow gsuite principals that do not
		 * exist or are deleted in the index request.
		 */
		allowUnknownGsuitePrincipals?: boolean | null;
	}

	export interface IndexItemRequest {

		/**
		 * Name of connector making this call.
		 * <br />Format: datasources/{source_id}/connectors/{ID}
		 */
		connectorName?: string | null;

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions | null;
		indexItemOptions?: IndexItemOptions | null;

		/**
		 * Represents a single object that is an item in the search index, such as a
		 * file, folder, or a database record.
		 */
		item?: Item | null;

		/** Required. The RequestMode for this request. */
		mode?: IndexItemRequestMode | null;
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
		acl?: ItemAcl | null;

		/** Content of an item to be indexed and surfaced by Cloud Search. */
		content?: ItemContent | null;

		/** Type for this item. */
		itemType?: ItemItemType | null;

		/** Available metadata fields for the item. */
		metadata?: ItemMetadata | null;

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
		status?: ItemStatus | null;

		/** Available structured data fields for the item. */
		structuredData?: ItemStructuredData | null;

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
		deniedReaders?: Array<Principal> | null;

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
		owners?: Array<Principal> | null;

		/**
		 * List of principals who are allowed to see the item in search results.
		 * Optional if inheriting permissions from another item or if the item
		 * is not intended to be visible, such as
		 * virtual
		 * containers.
		 * The maximum number of elements is 1000.
		 */
		readers?: Array<Principal> | null;
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
		gsuitePrincipal?: GSuitePrincipal | null;

		/**
		 * This principal is a user identified using an external identity.
		 * The name field must specify the user resource name with this format:
		 * identitysources/{source_id}/users/{ID}
		 */
		userResourceName?: string | null;
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
		contentDataRef?: UploadItemRef | null;
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
		interactions?: Array<Interaction> | null;

		/**
		 * Additional keywords or phrases that should match the item.
		 * Used internally for user generated content.
		 * The maximum number of elements is 100.
		 * The maximum length is 8192 characters.
		 */
		keywords?: Array<string> | null;

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
		searchQualityMetadata?: SearchQualityMetadata | null;

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


	/** Represents an interaction between a user and an item. */
	export interface Interaction {

		/**
		 * The time when the user acted on the item.  If multiple actions of the same
		 * type exist for a single user, only the most recent action is recorded.
		 */
		interactionTime?: string | null;

		/** Reference to a user, group, or domain. */
		principal?: Principal | null;
		type?: InteractionType | null;
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


	/** This contains item's status and any errors. */
	export interface ItemStatus {

		/** Status code. */
		code?: ItemCountByStatusStatusCode | null;

		/** Error details in case the item is in ERROR state. */
		processingErrors?: Array<ProcessingError> | null;

		/** Repository error reported by connector. */
		repositoryErrors?: Array<RepositoryError> | null;
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
		fieldViolations?: Array<FieldViolation> | null;
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
		object?: StructuredDataObject | null;
	}


	/** A structured data object consisting of named properties. */
	export interface StructuredDataObject {

		/**
		 * The properties for the object.
		 * The maximum number of elements is 1000.
		 */
		properties?: Array<NamedProperty> | null;
	}


	/**
	 * A typed name-value pair for structured data.  The type of the value should
	 * be the same as the registered type for the `name` property in the object
	 * definition of `objectType`.
	 */
	export interface NamedProperty {
		booleanValue?: boolean | null;

		/** List of date values. */
		dateValues?: DateValues | null;

		/** List of double values. */
		doubleValues?: DoubleValues | null;

		/** List of enum values. */
		enumValues?: EnumValues | null;

		/** List of html values. */
		htmlValues?: HtmlValues | null;

		/** List of integer values. */
		integerValues?: IntegerValues | null;

		/**
		 * The name of the property.  This name should correspond to the name of the
		 * property that was registered for object definition in the schema.
		 * The maximum allowable length for this property is 256 characters.
		 */
		name?: string | null;

		/** List of object values. */
		objectValues?: ObjectValues | null;

		/** List of text values. */
		textValues?: TextValues | null;

		/** List of timestamp values. */
		timestampValues?: TimestampValues | null;
	}


	/** List of integer values. */
	export interface IntegerValues {
		values?: Array<string> | null;
	}


	/** List of object values. */
	export interface ObjectValues {
		values?: Array<StructuredDataObject> | null;
	}


	/** List of text values. */
	export interface TextValues {

		/** The maximum allowable length for text values is 2048 characters. */
		values?: Array<string> | null;
	}


	/** List of timestamp values. */
	export interface TimestampValues {
		values?: Array<string> | null;
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
		operatorOptions?: IntegerOperatorOptions | null;

		/**
		 * Used to specify the ordered ranking for the integer. Can only be used if
		 * isRepeatable
		 * is false.
		 */
		orderedRanking?: EnumPropertyOptionsOrderedRanking | null;
	}

	export interface ListDataSourceResponse {

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken?: string | null;
		sources?: Array<DataSource> | null;
	}

	export interface ListItemNamesForUnmappedIdentityResponse {
		itemNames?: Array<string> | null;

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken?: string | null;
	}

	export interface ListItemsResponse {
		items?: Array<Item> | null;

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken?: string | null;
	}


	/** List sources response. */
	export interface ListQuerySourcesResponse {
		nextPageToken?: string | null;
		sources?: Array<QuerySource> | null;
	}


	/** List of sources that the user can search using the query API. */
	export interface QuerySource {

		/** Display name of the data source. */
		displayName?: string | null;

		/** List of all operators applicable for this source. */
		operators?: Array<QueryOperator> | null;

		/**
		 * A short name or alias for the source.  This value can be used with the
		 * 'source' operator.
		 */
		shortName?: string | null;

		/** Defines sources for the suggest/search APIs. */
		source?: Source | null;
	}


	/** The definition of a operator that can be used in a Search/Suggest request. */
	export interface QueryOperator {

		/** Display name of the operator */
		displayName?: string | null;

		/**
		 * Potential list of values for the opeatror field. This field is only filled
		 * when we can safely enumerate all the possible values of this operator.
		 */
		enumValues?: Array<string> | null;

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

	export enum QueryOperatorType { UNKNOWN = 0, INTEGER = 1, DOUBLE = 2, TIMESTAMP = 3, BOOLEAN = 4, ENUM = 5, DATE = 6, TEXT = 7, HTML = 8 }

	export interface ListSearchApplicationsResponse {

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken?: string | null;
		searchApplications?: Array<SearchApplication> | null;
	}


	/** SearchApplication */
	export interface SearchApplication {

		/**
		 * Retrictions applied to the configurations.
		 * The maximum number of elements is 10.
		 */
		dataSourceRestrictions?: Array<DataSourceRestriction> | null;

		/**
		 * The default fields for returning facet results.
		 * The sources specified here also have been included in
		 * data_source_restrictions
		 * above.
		 */
		defaultFacetOptions?: Array<FacetOptions> | null;
		defaultSortOptions?: SortOptions | null;

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
		operationIds?: Array<string> | null;

		/**
		 * Scoring configurations for a source while processing a
		 * Search or
		 * Suggest request.
		 */
		scoringConfig?: ScoringConfig | null;

		/** Configuration for a sources specified in data_source_restrictions. */
		sourceConfig?: Array<SourceConfig> | null;
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
		crowdingConfig?: SourceCrowdingConfig | null;

		/**
		 * Set the scoring configuration. This allows modifying the ranking of results
		 * for a source.
		 */
		scoringConfig?: SourceScoringConfig | null;

		/** Defines sources for the suggest/search APIs. */
		source?: Source | null;
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
	 * Set the scoring configuration. This allows modifying the ranking of results
	 * for a source.
	 */
	export interface SourceScoringConfig {

		/** Importance of the source. */
		sourceImportance?: SourceScoringConfigSourceImportance | null;
	}

	export enum SourceScoringConfigSourceImportance { DEFAULT = 0, LOW = 1, HIGH = 2 }

	export interface ListUnmappedIdentitiesResponse {

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken?: string | null;
		unmappedIdentities?: Array<UnmappedIdentity> | null;
	}

	export interface UnmappedIdentity {

		/** Reference to a user, group, or domain. */
		externalIdentity?: Principal | null;

		/** The resolution status for the external identity. */
		resolutionStatusCode?: UnmappedIdentityResolutionStatusCode | null;
	}

	export enum UnmappedIdentityResolutionStatusCode { CODE_UNSPECIFIED = 0, NOT_FOUND = 1, IDENTITY_SOURCE_NOT_FOUND = 2, IDENTITY_SOURCE_MISCONFIGURED = 3, TOO_MANY_MAPPINGS_FOUND = 4, INTERNAL_ERROR = 5 }


	/** Matched range of a snippet [start, end). */
	export interface MatchRange {

		/** End of the match in the snippet. */
		end?: number | null;

		/** Starting position of the match in the snippet. */
		start?: number | null;
	}


	/** Media resource. */
	export interface Media {

		/** Name of the media resource. */
		resourceName?: string | null;
	}


	/** Metadata of a matched search result. */
	export interface Metadata {

		/** The creation time for this document or object in the search result. */
		createTime?: string | null;
		displayOptions?: ResultDisplayMetadata | null;

		/** Indexed fields in structured data, returned as a generic named property. */
		fields?: Array<NamedProperty> | null;

		/** Mime type of the search result. */
		mimeType?: string | null;

		/** Object type of the search result. */
		objectType?: string | null;

		/** Object to represent a person. */
		owner?: Person | null;

		/** Defines sources for the suggest/search APIs. */
		source?: Source | null;

		/**
		 * The last modified date for the object in the search result. If not
		 * set in the item, the value returned here is empty. When
		 * `updateTime` is used for calculating freshness and is not set, this
		 * value defaults to 2 years from the current time.
		 */
		updateTime?: string | null;
	}

	export interface ResultDisplayMetadata {

		/** The metalines content to be displayed with the result. */
		metalines?: Array<ResultDisplayLine> | null;

		/** The display label for the object. */
		objectTypeLabel?: string | null;
	}


	/** The collection of fields that make up a displayed line */
	export interface ResultDisplayLine {
		fields?: Array<ResultDisplayField> | null;
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
		property?: NamedProperty | null;
	}


	/** Object to represent a person. */
	export interface Person {

		/** The person's email addresses */
		emailAddresses?: Array<EmailAddress> | null;

		/**
		 * The resource name of the person to provide information about.
		 * See <a href="https://developers.google.com/people/api/rest/v1/people/get">
		 * People.get</a> from Google People API.
		 */
		name?: string | null;

		/** Obfuscated ID of a person. */
		obfuscatedId?: string | null;

		/** The person's name */
		personNames?: Array<Name> | null;

		/**
		 * A person's read-only photo. A picture shown next to the person's name to
		 * help others recognize the person in search results.
		 */
		photos?: Array<Photo> | null;
	}


	/** A person's name. */
	export interface Name {

		/**
		 * The read-only display name formatted according to the locale specified by
		 * the viewer's account or the <code>Accept-Language</code> HTTP header.
		 */
		displayName?: string | null;
	}


	/** A person's photo. */
	export interface Photo {

		/** The URL of the photo. */
		url?: string | null;
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
		properties?: Array<DisplayedProperty> | null;
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
		options?: ObjectOptions | null;

		/**
		 * The property definitions for the object.
		 * The maximum number of elements is 1000.
		 */
		propertyDefinitions?: Array<PropertyDefinition> | null;
	}


	/** The options for an object. */
	export interface ObjectOptions {

		/** The display options for an object. */
		displayOptions?: ObjectDisplayOptions | null;

		/**
		 * Indicates which freshness property to use when adjusting search ranking for
		 * an item. Fresher, more recent dates indicate higher quality. Use the
		 * freshness option property that best works with your data. For fileshare
		 * documents, last modified time is most relevant. For calendar event data,
		 * the time when the event occurs is a more relevant freshness indicator. In
		 * this way, calendar events that occur closer to the time of the search query
		 * are considered higher quality and ranked accordingly.
		 */
		freshnessOptions?: FreshnessOptions | null;
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
		metalines?: Array<Metaline> | null;

		/**
		 * The user friendly label to display in the search result to indicate the
		 * type of the item. This is OPTIONAL; if not provided, an object label isn't
		 * displayed on the context line of the search results. The maximum length
		 * is 32 characters.
		 */
		objectDisplayLabel?: string | null;
	}


	/** The definition of a property within an object. */
	export interface PropertyDefinition {

		/** Options for boolean properties. */
		booleanPropertyOptions?: BooleanPropertyOptions | null;

		/** Options for date properties. */
		datePropertyOptions?: DatePropertyOptions | null;

		/** The display options for a property. */
		displayOptions?: PropertyDisplayOptions | null;

		/** Options for double properties. */
		doublePropertyOptions?: DoublePropertyOptions | null;

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
		enumPropertyOptions?: EnumPropertyOptions | null;

		/** Options for html properties. */
		htmlPropertyOptions?: HtmlPropertyOptions | null;

		/** Options for integer properties. */
		integerPropertyOptions?: IntegerPropertyOptions | null;

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
		objectPropertyOptions?: ObjectPropertyOptions | null;

		/** Options for text properties. */
		textPropertyOptions?: TextPropertyOptions | null;

		/** Options for timestamp properties. */
		timestampPropertyOptions?: TimestampPropertyOptions | null;
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


	/** Options for object properties. */
	export interface ObjectPropertyOptions {

		/**
		 * The properties of the sub-object. These properties represent a nested
		 * object. For example, if this property represents a postal address, the
		 * subobjectProperties might be named *street*, *city*, and *state*.
		 * The maximum number of elements is 1000.
		 */
		subobjectProperties?: Array<PropertyDefinition> | null;
	}


	/** Options for text properties. */
	export interface TextPropertyOptions {

		/**
		 * Used to provide a search operator for text properties. This is optional.
		 * Search operators let users restrict the query to specific fields relevant
		 * to the type of item being searched.
		 */
		operatorOptions?: TextOperatorOptions | null;
		retrievalImportance?: RetrievalImportance | null;
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


	/** Options for timestamp properties. */
	export interface TimestampPropertyOptions {

		/**
		 * Used to provide a search operator for timestamp properties. This is
		 * optional. Search operators let users restrict the query to specific fields
		 * relevant to the type of item being searched.
		 */
		operatorOptions?: TimestampOperatorOptions | null;
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
		error?: Status | null;

		/**
		 * Service-specific metadata associated with the operation.  It typically
		 * contains progress information and common metadata such as create time.
		 * Some services might not provide such metadata.  Any method that returns a
		 * long-running operation should document the metadata type, if any.
		 */
		metadata?: {[id: string]: any } | null;

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
		response?: {[id: string]: any } | null;
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
		details?: Array<string> | null;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string | null;
	}


	/** This field contains information about the person being suggested. */
	export interface PeopleSuggestion {

		/** Object to represent a person. */
		person?: Person | null;
	}

	export interface PollItemsRequest {

		/**
		 * Name of connector making this call.
		 * <br />Format: datasources/{source_id}/connectors/{ID}
		 */
		connectorName?: string | null;

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions | null;

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
		statusCodes?: Array<ItemCountByStatusStatusCode> | null;
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
		items?: Array<Item> | null;
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
		repositoryError?: RepositoryError | null;

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

	export enum PushItemType { UNSPECIFIED = 0, MODIFIED = 1, NOT_MODIFIED = 2, REPOSITORY_ERROR = 3, REQUEUE = 4 }

	export interface PushItemRequest {

		/**
		 * Name of connector making this call.
		 * <br />Format: datasources/{source_id}/connectors/{ID}
		 */
		connectorName?: string | null;

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions | null;

		/** Represents an item to be pushed to the indexing queue. */
		item?: PushItem | null;
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


	/** Information relevant only to a query entry. */
	export interface QueryItem {

		/** True if the text was generated by means other than a previous user search. */
		isSynthetic?: boolean | null;
	}


	/**
	 * This field does not contain anything as of now and is just used as an
	 * indicator that the suggest result was a phrase completion.
	 */
	export interface QuerySuggestion {
	}


	/** Shared request options for all RPC methods. */
	export interface RequestOptions {

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions | null;

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

	export interface ResetSearchApplicationRequest {

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions | null;
	}


	/** Debugging information about the response. */
	export interface ResponseDebugInfo {

		/** General debug info formatted for display. */
		formattedDebugInfo?: string | null;
	}


	/**
	 * Information relevant only to a restrict entry.
	 * NextId: 12
	 */
	export interface RestrictItem {

		/** Drive follow-up search restricts (e.g. "followup:suggestions"). */
		driveFollowUpRestrict?: DriveFollowUpRestrict | null;

		/** Drive location search restricts (e.g. "is:starred"). */
		driveLocationRestrict?: DriveLocationRestrict | null;

		/** Drive mime-type search restricts (e.g. "type:pdf"). */
		driveMimeTypeRestrict?: DriveMimeTypeRestrict | null;

		/** The time span search restrict (e.g. "after:2017-09-11 before:2017-09-12"). */
		driveTimeSpanRestrict?: DriveTimeSpanRestrict | null;

		/** The search restrict (e.g. "after:2017-09-11 before:2017-09-12"). */
		searchOperator?: string | null;
	}


	/** Result count information */
	export interface ResultCounts {

		/** Result count information for each source with results. */
		sourceResultCounts?: Array<SourceResultCount> | null;
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
		source?: Source | null;
	}


	/** Debugging information about the result. */
	export interface ResultDebugInfo {

		/** General debug info formatted for display. */
		formattedDebugInfo?: string | null;
	}


	/** The schema definition for a data source. */
	export interface Schema {

		/**
		 * The list of top-level objects for the data source.
		 * The maximum number of elements is 10.
		 */
		objectDefinitions?: Array<ObjectDefinition> | null;

		/**
		 * IDs of the Long Running Operations (LROs) currently running for this
		 * schema. After modifying the schema, wait for operations to complete
		 * before indexing additional content.
		 */
		operationIds?: Array<string> | null;
	}

	export interface SearchItemsByViewUrlRequest {

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions | null;

		/** The next_page_token value returned from a previous request, if any. */
		pageToken?: string | null;

		/**
		 * Specify the full view URL to find the corresponding item.
		 * The maximum length is 2048 characters.
		 */
		viewUrl?: string | null;
	}

	export interface SearchItemsByViewUrlResponse {
		items?: Array<Item> | null;

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken?: string | null;
	}


	/** The search API request. */
	export interface SearchRequest {

		/**
		 * The sources to use for querying. If not specified, all data sources
		 * from the current search application are used.
		 */
		dataSourceRestrictions?: Array<DataSourceRestriction> | null;
		facetOptions?: Array<FacetOptions> | null;

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
		queryInterpretationOptions?: QueryInterpretationOptions | null;

		/** Shared request options for all RPC methods. */
		requestOptions?: RequestOptions | null;
		sortOptions?: SortOptions | null;

		/** Starting index of the results. */
		start?: number | null;
	}


	/** The search API response. */
	export interface SearchResponse {

		/** Debugging information about the response. */
		debugInfo?: ResponseDebugInfo | null;

		/** Error information about the response. */
		errorInfo?: ErrorInfo | null;

		/** Repeated facet results. */
		facetResults?: Array<FacetResult> | null;

		/** Whether there are more search results matching the query. */
		hasMoreResults?: boolean | null;
		queryInterpretation?: QueryInterpretation | null;

		/** The estimated result count for this query. */
		resultCountEstimate?: string | null;

		/** The exact result count for this query. */
		resultCountExact?: string | null;

		/** Result count information */
		resultCounts?: ResultCounts | null;

		/** Results from a search query. */
		results?: Array<SearchResult> | null;

		/** Suggested spelling for the query. */
		spellResults?: Array<SpellResult> | null;

		/**
		 * Structured results for the user query. These results are not counted
		 * against the page_size.
		 */
		structuredResults?: Array<StructuredResult> | null;
	}


	/** Results containing indexed information for a document. */
	export interface SearchResult {

		/**
		 * If source is clustered, provide list of clustered results. There will only
		 * be one level of clustered results. If current source is not enabled for
		 * clustering, this field will be empty.
		 */
		clusteredResults?: Array<SearchResult> | null;

		/** Debugging information about the result. */
		debugInfo?: ResultDebugInfo | null;

		/** Metadata of a matched search result. */
		metadata?: Metadata | null;

		/**
		 * Snippet of the search result, which summarizes the content of the resulting
		 * page.
		 */
		snippet?: Snippet | null;

		/** Title of the search result. */
		title?: string | null;

		/**
		 * The URL of the search result. The URL contains a Google redirect to the
		 * actual item. This URL is signed and shouldn't be changed.
		 */
		url?: string | null;
	}


	/**
	 * Snippet of the search result, which summarizes the content of the resulting
	 * page.
	 */
	export interface Snippet {

		/** The matched ranges in the snippet. */
		matchRanges?: Array<MatchRange> | null;

		/**
		 * The snippet of the document.
		 * The snippet of the document. May contain escaped HTML character that
		 * should be unescaped prior to rendering.
		 */
		snippet?: string | null;
	}

	export interface SpellResult {

		/** The suggested spelling of the query. */
		suggestedQuery?: string | null;
	}


	/** Structured results that are returned as part of search request. */
	export interface StructuredResult {

		/** Object to represent a person. */
		person?: Person | null;
	}


	/** Start upload file request. */
	export interface StartUploadItemRequest {

		/**
		 * Name of connector making this call.
		 * <br />Format: datasources/{source_id}/connectors/{ID}
		 */
		connectorName?: string | null;

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions | null;
	}


	/** Request of suggest API. */
	export interface SuggestRequest {

		/**
		 * The sources to use for suggestions. If not specified, the data sources
		 * are taken from the current search application.
		 * NOTE: Suggestions are supported only for third party data sources and
		 * people (i.e. PredefinedSource.PERSON).
		 */
		dataSourceRestrictions?: Array<DataSourceRestriction> | null;

		/**
		 * Partial query for which autocomplete suggestions will be shown.
		 * For example, if the query is "sea", then the server might return
		 * "season", "search", "seagull" and so on.
		 */
		query?: string | null;

		/** Shared request options for all RPC methods. */
		requestOptions?: RequestOptions | null;
	}


	/** Response of the suggest API. */
	export interface SuggestResponse {

		/** List of suggestions. */
		suggestResults?: Array<SuggestResult> | null;
	}


	/** One suggestion result. */
	export interface SuggestResult {

		/** This field contains information about the person being suggested. */
		peopleSuggestion?: PeopleSuggestion | null;

		/**
		 * This field does not contain anything as of now and is just used as an
		 * indicator that the suggest result was a phrase completion.
		 */
		querySuggestion?: QuerySuggestion | null;

		/** Defines sources for the suggest/search APIs. */
		source?: Source | null;

		/**
		 * The suggested query that will be used for search, when the user
		 * clicks on the suggestion
		 */
		suggestedQuery?: string | null;
	}

	export interface UnreserveItemsRequest {

		/**
		 * Name of connector making this call.
		 * <br />Format: datasources/{source_id}/connectors/{ID}
		 */
		connectorName?: string | null;

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions | null;

		/** Name of a queue to unreserve items from. */
		queue?: string | null;
	}

	export interface UpdateDataSourceRequest {

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions | null;

		/**
		 * Datasource is a logical namespace for items to be indexed.
		 * All items must belong to a datasource.  This is the prerequisite before
		 * items can be indexed into Cloud Search.
		 */
		source?: DataSource | null;
	}

	export interface UpdateSchemaRequest {

		/** Shared request debug options for all cloudsearch RPC methods. */
		debugOptions?: DebugOptions | null;

		/** The schema definition for a data source. */
		schema?: Schema | null;

		/**
		 * If true, the schema will be checked for validity,
		 * but will not be registered with the data source, even if valid.
		 */
		validateOnly?: boolean | null;
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
		Cloudsearch_debug_datasources_items_checkAccess(name: string, debugOptions_enableDebugging: boolean, requestBody: Principal): Observable<HttpResponse<string>> {
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
		Cloudsearch_debug_identitysources_items_listForunmappedidentity(parent: string, debugOptions_enableDebugging: boolean, groupResourceName: string, pageSize: number, pageToken: string, userResourceName: string): Observable<HttpResponse<string>> {
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
		Cloudsearch_debug_identitysources_unmappedids_list(parent: string, debugOptions_enableDebugging: boolean, pageSize: number, pageToken: string, resolutionStatusCode: UnmappedIdentityResolutionStatusCode): Observable<HttpResponse<string>> {
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
		Cloudsearch_indexing_datasources_items_delete(name: string, connectorName: string, debugOptions_enableDebugging: boolean, mode: IndexItemRequestMode, version: string): Observable<HttpResponse<string>> {
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
		Cloudsearch_indexing_datasources_items_get(name: string, connectorName: string, debugOptions_enableDebugging: boolean): Observable<HttpResponse<string>> {
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
		Cloudsearch_indexing_datasources_items_list(name: string, brief: boolean, connectorName: string, debugOptions_enableDebugging: boolean, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
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
		Cloudsearch_indexing_datasources_deleteSchema(name: string, debugOptions_enableDebugging: boolean): Observable<HttpResponse<string>> {
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
		Cloudsearch_indexing_datasources_getSchema(name: string, debugOptions_enableDebugging: boolean): Observable<HttpResponse<string>> {
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
		Cloudsearch_query_sources_list(pageToken: string, requestOptions_debugOptions_enableDebugging: boolean, requestOptions_languageCode: string, requestOptions_searchApplicationId: string, requestOptions_timeZone: string): Observable<HttpResponse<string>> {
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
		Cloudsearch_settings_datasources_list(debugOptions_enableDebugging: boolean, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
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
		Cloudsearch_settings_searchapplications_list(debugOptions_enableDebugging: boolean, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
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
		Cloudsearch_settings_datasources_delete(name: string, debugOptions_enableDebugging: boolean): Observable<HttpResponse<string>> {
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
		Cloudsearch_settings_datasources_get(name: string, debugOptions_enableDebugging: boolean): Observable<HttpResponse<string>> {
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
		Cloudsearch_stats_getIndex(fromDate_day: number, fromDate_month: number, fromDate_year: number, toDate_day: number, toDate_month: number, toDate_year: number): Observable<HttpResponse<string>> {
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
		Cloudsearch_stats_index_datasources_get(name: string, fromDate_day: number, fromDate_month: number, fromDate_year: number, toDate_day: number, toDate_month: number, toDate_year: number): Observable<HttpResponse<string>> {
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
		Cloudsearch_stats_getQuery(fromDate_day: number, fromDate_month: number, fromDate_year: number, toDate_day: number, toDate_month: number, toDate_year: number): Observable<HttpResponse<string>> {
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
		Cloudsearch_stats_query_searchapplications_get(name: string, fromDate_day: number, fromDate_month: number, fromDate_year: number, toDate_day: number, toDate_month: number, toDate_year: number): Observable<HttpResponse<string>> {
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
		Cloudsearch_stats_getSession(fromDate_day: number, fromDate_month: number, fromDate_year: number, toDate_day: number, toDate_month: number, toDate_year: number): Observable<HttpResponse<string>> {
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
		Cloudsearch_stats_session_searchapplications_get(name: string, fromDate_day: number, fromDate_month: number, fromDate_year: number, toDate_day: number, toDate_month: number, toDate_year: number): Observable<HttpResponse<string>> {
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
		Cloudsearch_stats_getUser(fromDate_day: number, fromDate_month: number, fromDate_year: number, toDate_day: number, toDate_month: number, toDate_year: number): Observable<HttpResponse<string>> {
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
		Cloudsearch_stats_user_searchapplications_get(name: string, fromDate_day: number, fromDate_month: number, fromDate_year: number, toDate_day: number, toDate_month: number, toDate_year: number): Observable<HttpResponse<string>> {
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

