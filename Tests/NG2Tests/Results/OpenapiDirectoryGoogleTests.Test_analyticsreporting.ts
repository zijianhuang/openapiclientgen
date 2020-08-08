import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * An Activity represents data for an activity of a user. Note that an
	 * Activity is different from a hit.
	 * A hit might result in multiple Activity's. For example, if a hit
	 * includes a transaction and a goal completion, there will be two
	 * Activity protos for this hit, one for ECOMMERCE and one for GOAL.
	 * Conversely, multiple hits can also construct one Activity. In classic
	 * e-commerce, data for one transaction might be sent through multiple hits.
	 * These hits will be merged into one ECOMMERCE Activity.
	 */
	export interface Activity {

		/**
		 * Timestamp of the activity. If activities for a visit cross midnight and
		 * occur in two separate dates, then two sessions (one per date)
		 * share the session identifier.
		 * For example, say session ID 113472 has activity within 2019-08-20, and
		 * session ID 243742 has activity within 2019-08-25 and 2019-08-26. Session ID
		 * 113472 is one session, and session ID 243742 is two sessions.
		 */
		activityTime?: string;

		/** Type of this activity. */
		activityType?: ActivityActivityType;
		appview?: ScreenviewData;

		/**
		 * For manual campaign tracking, it is the value of the utm_campaign campaign
		 * tracking parameter. For AdWords autotagging, it is the name(s) of the
		 * online ad campaign(s) you use for the property. If you use neither, its
		 * value is (not set).
		 */
		campaign?: string;

		/**
		 * The Channel Group associated with an end user's session for this View
		 * (defined by the View's Channel Groupings).
		 */
		channelGrouping?: string;

		/** A list of all custom dimensions associated with this activity. */
		customDimension?: Array<CustomDimension>;

		/** E-commerce details associated with the user activity. */
		ecommerce?: EcommerceData;

		/** Represents all the details pertaining to an event. */
		event?: EventData;

		/** Represents a set of goals that were reached in an activity. */
		goals?: GoalSetData;

		/** The hostname from which the tracking request was made. */
		hostname?: string;

		/**
		 * For manual campaign tracking, it is the value of the utm_term campaign
		 * tracking parameter. For AdWords traffic, it contains the best matching
		 * targeting criteria. For the display network, where multiple targeting
		 * criteria could have caused the ad to show up, it returns the best matching
		 * targeting criteria as selected by Ads. This could be display_keyword, site
		 * placement, boomuserlist, user_interest, age, or gender. Otherwise its value
		 * is (not set).
		 */
		keyword?: string;

		/** The first page in users' sessions, or the landing page. */
		landingPagePath?: string;

		/**
		 * The type of referrals. For manual campaign tracking, it is the value of the
		 * utm_medium campaign tracking parameter. For AdWords autotagging, it is cpc.
		 * If users came from a search engine detected by Google Analytics, it is
		 * organic. If the referrer is not a search engine, it is referral. If users
		 * came directly to the property and document.referrer is empty, its value is
		 * (none).
		 */
		medium?: string;

		/** Represents details collected when the visitor views a page. */
		pageview?: PageviewData;

		/**
		 * The source of referrals. For manual campaign tracking, it is the value of
		 * the utm_source campaign tracking parameter. For AdWords autotagging, it is
		 * google. If you use neither, it is the domain of the source
		 * (e.g., document.referrer) referring the users. It may also contain a port
		 * address. If users arrived without a referrer, its value is (direct).
		 */
		source?: string;
	}

	export enum ActivityActivityType { ACTIVITY_TYPE_UNSPECIFIED = 0, PAGEVIEW = 1, SCREENVIEW = 2, GOAL = 3, ECOMMERCE = 4, EVENT = 5 }

	export interface ScreenviewData {

		/** The application name. */
		appName?: string;

		/** Mobile manufacturer or branded name. Eg: "Google", "Apple" etc. */
		mobileDeviceBranding?: string;

		/** Mobile device model. Eg: "Pixel", "iPhone" etc. */
		mobileDeviceModel?: string;

		/** The name of the screen. */
		screenName?: string;
	}


	/** Custom dimension. */
	export interface CustomDimension {

		/** Slot number of custom dimension. */
		index?: number;

		/**
		 * Value of the custom dimension. Default value (i.e. empty string) indicates
		 * clearing sesion/visitor scope custom dimension value.
		 */
		value?: string;
	}


	/** E-commerce details associated with the user activity. */
	export interface EcommerceData {

		/** Action associated with this e-commerce action. */
		actionType?: EcommerceDataActionType;

		/** The type of this e-commerce activity. */
		ecommerceType?: EcommerceDataEcommerceType;

		/** Details of the products in this transaction. */
		products?: Array<ProductData>;

		/**
		 * Represents details collected when the visitor performs a transaction on the
		 * page.
		 */
		transaction?: TransactionData;
	}

	export enum EcommerceDataActionType { UNKNOWN = 0, CLICK = 1, DETAILS_VIEW = 2, ADD_TO_CART = 3, REMOVE_FROM_CART = 4, CHECKOUT = 5, PAYMENT = 6, REFUND = 7, CHECKOUT_OPTION = 8 }

	export enum EcommerceDataEcommerceType { ECOMMERCE_TYPE_UNSPECIFIED = 0, CLASSIC = 1, ENHANCED = 2 }


	/** Details of the products in an e-commerce transaction. */
	export interface ProductData {

		/** The total revenue from purchased product items. */
		itemRevenue?: number;

		/**
		 * The product name, supplied by the e-commerce tracking application, for
		 * the purchased items.
		 */
		productName?: string;

		/** Total number of this product units in the transaction. */
		productQuantity?: string;

		/** Unique code that represents the product. */
		productSku?: string;
	}


	/**
	 * Represents details collected when the visitor performs a transaction on the
	 * page.
	 */
	export interface TransactionData {

		/**
		 * The transaction ID, supplied by the e-commerce tracking method, for the
		 * purchase in the shopping cart.
		 */
		transactionId?: string;

		/** The total sale revenue (excluding shipping and tax) of the transaction. */
		transactionRevenue?: number;

		/** Total cost of shipping. */
		transactionShipping?: number;

		/** Total tax for the transaction. */
		transactionTax?: number;
	}


	/** Represents all the details pertaining to an event. */
	export interface EventData {

		/** Type of interaction with the object. Eg: 'play'. */
		eventAction?: string;

		/** The object on the page that was interacted with. Eg: 'Video'. */
		eventCategory?: string;

		/** Number of such events in this activity. */
		eventCount?: string;

		/** Label attached with the event. */
		eventLabel?: string;

		/** Numeric value associated with the event. */
		eventValue?: string;
	}


	/** Represents a set of goals that were reached in an activity. */
	export interface GoalSetData {

		/** All the goals that were reached in the current activity. */
		goals?: Array<GoalData>;
	}


	/** Represents all the details pertaining to a goal. */
	export interface GoalData {

		/** URL of the page where this goal was completed. */
		goalCompletionLocation?: string;

		/** Total number of goal completions in this activity. */
		goalCompletions?: string;

		/** This identifies the goal as configured for the profile. */
		goalIndex?: number;

		/** Name of the goal. */
		goalName?: string;

		/** URL of the page one step prior to the goal completion. */
		goalPreviousStep1?: string;

		/** URL of the page two steps prior to the goal completion. */
		goalPreviousStep2?: string;

		/** URL of the page three steps prior to the goal completion. */
		goalPreviousStep3?: string;

		/** Value in this goal. */
		goalValue?: number;
	}


	/** Represents details collected when the visitor views a page. */
	export interface PageviewData {

		/** The URL of the page that the visitor viewed. */
		pagePath?: string;

		/** The title of the page that the visitor viewed. */
		pageTitle?: string;
	}


	/**
	 * Defines a cohort. A cohort is a group of users who share a common
	 * characteristic. For example, all users with the same acquisition date
	 * belong to the same cohort.
	 */
	export interface Cohort {

		/**
		 * A contiguous set of days: startDate, startDate + 1 day, ..., endDate.
		 * The start and end dates are specified in
		 * [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) date format `YYYY-MM-DD`.
		 */
		dateRange?: DateRange;

		/**
		 * A unique name for the cohort. If not defined name will be auto-generated
		 * with values cohort_[1234...].
		 */
		name?: string;

		/**
		 * Type of the cohort. The only supported type as of now is
		 * `FIRST_VISIT_DATE`. If this field is unspecified the cohort is treated
		 * as `FIRST_VISIT_DATE` type cohort.
		 */
		type?: CohortType;
	}


	/**
	 * A contiguous set of days: startDate, startDate + 1 day, ..., endDate.
	 * The start and end dates are specified in
	 * [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) date format `YYYY-MM-DD`.
	 */
	export interface DateRange {

		/** The end date for the query in the format `YYYY-MM-DD`. */
		endDate?: string;

		/** The start date for the query in the format `YYYY-MM-DD`. */
		startDate?: string;
	}

	export enum CohortType { UNSPECIFIED_COHORT_TYPE = 0, FIRST_VISIT_DATE = 1 }


	/**
	 * Defines a cohort group.
	 * For example:
	 *     "cohortGroup": {
	 *       "cohorts": [{
	 *         "name": "cohort 1",
	 *         "type": "FIRST_VISIT_DATE",
	 *         "dateRange": { "startDate": "2015-08-01", "endDate": "2015-08-01" }
	 *       },{
	 *         "name": "cohort 2"
	 *          "type": "FIRST_VISIT_DATE"
	 *          "dateRange": { "startDate": "2015-07-01", "endDate": "2015-07-01" }
	 *       }]
	 *     }
	 */
	export interface CohortGroup {

		/** The definition for the cohort. */
		cohorts?: Array<Cohort>;

		/**
		 * Enable Life Time Value (LTV).  LTV measures lifetime value for users
		 * acquired through different channels.
		 * Please see:
		 * [Cohort Analysis](https://support.google.com/analytics/answer/6074676) and
		 * [Lifetime Value](https://support.google.com/analytics/answer/6182550)
		 * If the value of lifetimeValue is false:
		 * - The metric values are similar to the values in the web interface cohort
		 * report.
		 * - The cohort definition date ranges must be aligned to the calendar week
		 * and month. i.e. while requesting `ga:cohortNthWeek` the `startDate` in
		 * the cohort definition should be a Sunday and the `endDate` should be the
		 * following Saturday, and for `ga:cohortNthMonth`, the `startDate`
		 * should be the 1st of the month and `endDate` should be the last day
		 * of the month.
		 * When the lifetimeValue is true:
		 * - The metric values will correspond to the values in the web interface
		 * LifeTime value report.
		 * - The Lifetime Value report shows you how user value (Revenue) and
		 * engagement (Appviews, Goal Completions, Sessions, and Session Duration)
		 * grow during the 90 days after a user is acquired.
		 * - The metrics are calculated as a cumulative average per user per the time
		 * increment.
		 * - The cohort definition date ranges need not be aligned to the calendar
		 * week and month boundaries.
		 * - The `viewId` must be an
		 * [app view
		 * ID](https://support.google.com/analytics/answer/2649553#WebVersusAppViews)
		 */
		lifetimeValue?: boolean;
	}


	/** Column headers. */
	export interface ColumnHeader {

		/** The dimension names in the response. */
		dimensions?: Array<string>;

		/** The headers for the metrics. */
		metricHeader?: MetricHeader;
	}


	/** The headers for the metrics. */
	export interface MetricHeader {

		/** Headers for the metrics in the response. */
		metricHeaderEntries?: Array<MetricHeaderEntry>;

		/** Headers for the pivots in the response. */
		pivotHeaders?: Array<PivotHeader>;
	}


	/** Header for the metrics. */
	export interface MetricHeaderEntry {

		/** The name of the header. */
		name?: string;

		/** The type of the metric, for example `INTEGER`. */
		type?: MetricHeaderEntryType;
	}

	export enum MetricHeaderEntryType { METRIC_TYPE_UNSPECIFIED = 0, INTEGER = 1, FLOAT = 2, CURRENCY = 3, PERCENT = 4, TIME = 5 }


	/** The headers for each of the pivot sections defined in the request. */
	export interface PivotHeader {

		/** A single pivot section header. */
		pivotHeaderEntries?: Array<PivotHeaderEntry>;

		/** The total number of groups for this pivot. */
		totalPivotGroupsCount?: number;
	}


	/**
	 * The headers for the each of the metric column corresponding to the metrics
	 * requested in the pivots section of the response.
	 */
	export interface PivotHeaderEntry {

		/** The name of the dimensions in the pivot response. */
		dimensionNames?: Array<string>;

		/** The values for the dimensions in the pivot. */
		dimensionValues?: Array<string>;

		/** Header for the metrics. */
		metric?: MetricHeaderEntry;
	}


	/**
	 * Used to return a list of metrics for a single DateRange / dimension
	 * combination
	 */
	export interface DateRangeValues {

		/** The values of each pivot region. */
		pivotValueRegions?: Array<PivotValueRegion>;

		/** Each value corresponds to each Metric in the request. */
		values?: Array<string>;
	}


	/** The metric values in the pivot region. */
	export interface PivotValueRegion {

		/** The values of the metrics in each of the pivot regions. */
		values?: Array<string>;
	}


	/**
	 * [Dimensions](https://support.google.com/analytics/answer/1033861)
	 * are attributes of your data. For example, the dimension `ga:city`
	 * indicates the city, for example, "Paris" or "New York", from which
	 * a session originates.
	 */
	export interface Dimension {

		/**
		 * If non-empty, we place dimension values into buckets after string to
		 * int64. Dimension values that are not the string representation of an
		 * integral value will be converted to zero.  The bucket values have to be in
		 * increasing order.  Each bucket is closed on the lower end, and open on the
		 * upper end. The "first" bucket includes all values less than the first
		 * boundary, the "last" bucket includes all values up to infinity. Dimension
		 * values that fall in a bucket get transformed to a new dimension value. For
		 * example, if one gives a list of "0, 1, 3, 4, 7", then we return the
		 * following buckets:
		 * - bucket #1: values < 0, dimension value "<0"
		 * - bucket #2: values in [0,1), dimension value "0"
		 * - bucket #3: values in [1,3), dimension value "1-2"
		 * - bucket #4: values in [3,4), dimension value "3"
		 * - bucket #5: values in [4,7), dimension value "4-6"
		 * - bucket #6: values >= 7, dimension value "7+"
		 * NOTE: If you are applying histogram mutation on any dimension, and using
		 * that dimension in sort, you will want to use the sort type
		 * `HISTOGRAM_BUCKET` for that purpose. Without that the dimension values
		 * will be sorted according to dictionary
		 * (lexicographic) order. For example the ascending dictionary order is:
		 * "<50", "1001+", "121-1000", "50-120"
		 * And the ascending `HISTOGRAM_BUCKET` order is:
		 * "<50", "50-120", "121-1000", "1001+"
		 * The client has to explicitly request `"orderType": "HISTOGRAM_BUCKET"`
		 * for a histogram-mutated dimension.
		 */
		histogramBuckets?: Array<string>;

		/** Name of the dimension to fetch, for example `ga:browser`. */
		name?: string;
	}


	/** Dimension filter specifies the filtering options on a dimension. */
	export interface DimensionFilter {

		/** Should the match be case sensitive? Default is false. */
		caseSensitive?: boolean;

		/** The dimension to filter on. A DimensionFilter must contain a dimension. */
		dimensionName?: string;

		/**
		 * Strings or regular expression to match against. Only the first value of
		 * the list is used for comparison unless the operator is `IN_LIST`.
		 * If `IN_LIST` operator, then the entire list is used to filter the
		 * dimensions as explained in the description of the `IN_LIST` operator.
		 */
		expressions?: Array<string>;

		/**
		 * Logical `NOT` operator. If this boolean is set to true, then the matching
		 * dimension values will be excluded in the report. The default is false.
		 */
		not?: boolean;

		/** How to match the dimension to the expression. The default is REGEXP. */
		operator?: DimensionFilterOperator;
	}

	export enum DimensionFilterOperator { OPERATOR_UNSPECIFIED = 0, REGEXP = 1, BEGINS_WITH = 2, ENDS_WITH = 3, PARTIAL = 4, EXACT = 5, NUMERIC_EQUAL = 6, NUMERIC_GREATER_THAN = 7, NUMERIC_LESS_THAN = 8, IN_LIST = 9 }


	/**
	 * A group of dimension filters. Set the operator value to specify how
	 * the filters are logically combined.
	 */
	export interface DimensionFilterClause {

		/**
		 * The repeated set of filters. They are logically combined based on the
		 * operator specified.
		 */
		filters?: Array<DimensionFilter>;

		/**
		 * The operator for combining multiple dimension filters. If unspecified, it
		 * is treated as an `OR`.
		 */
		operator?: DimensionFilterClauseOperator;
	}

	export enum DimensionFilterClauseOperator { OPERATOR_UNSPECIFIED = 0, OR = 1, AND = 2 }


	/**
	 * Dynamic segment definition for defining the segment within the request.
	 * A segment can select users, sessions or both.
	 */
	export interface DynamicSegment {

		/** The name of the dynamic segment. */
		name?: string;

		/**
		 * SegmentDefinition defines the segment to be a set of SegmentFilters which
		 * are combined together with a logical `AND` operation.
		 */
		sessionSegment?: SegmentDefinition;

		/**
		 * SegmentDefinition defines the segment to be a set of SegmentFilters which
		 * are combined together with a logical `AND` operation.
		 */
		userSegment?: SegmentDefinition;
	}


	/**
	 * SegmentDefinition defines the segment to be a set of SegmentFilters which
	 * are combined together with a logical `AND` operation.
	 */
	export interface SegmentDefinition {

		/**
		 * A segment is defined by a set of segment filters which are combined
		 * together with a logical `AND` operation.
		 */
		segmentFilters?: Array<SegmentFilter>;
	}


	/**
	 * SegmentFilter defines the segment to be either a simple or a sequence
	 * segment. A simple segment condition contains dimension and metric conditions
	 * to select the sessions or users. A sequence segment condition can be used to
	 * select users or sessions based on sequential conditions.
	 */
	export interface SegmentFilter {

		/**
		 * If true, match the complement of simple or sequence segment.
		 * For example, to match all visits not from "New York", we can define the
		 * segment as follows:
		 * "sessionSegment": {
		 * "segmentFilters": [{
		 * "simpleSegment" :{
		 * "orFiltersForSegment": [{
		 * "segmentFilterClauses":[{
		 * "dimensionFilter": {
		 * "dimensionName": "ga:city",
		 * "expressions": ["New York"]
		 * }
		 * }]
		 * }]
		 * },
		 * "not": "True"
		 * }]
		 * },
		 */
		not?: boolean;

		/**
		 * Sequence conditions consist of one or more steps, where each step is defined
		 * by one or more dimension/metric conditions. Multiple steps can be combined
		 * with special sequence operators.
		 */
		sequenceSegment?: SequenceSegment;

		/**
		 * A Simple segment conditions consist of one or more dimension/metric
		 * conditions that can be combined.
		 */
		simpleSegment?: SimpleSegment;
	}


	/**
	 * Sequence conditions consist of one or more steps, where each step is defined
	 * by one or more dimension/metric conditions. Multiple steps can be combined
	 * with special sequence operators.
	 */
	export interface SequenceSegment {

		/**
		 * If set, first step condition must match the first hit of the visitor (in
		 * the date range).
		 */
		firstStepShouldMatchFirstHit?: boolean;

		/** The list of steps in the sequence. */
		segmentSequenceSteps?: Array<SegmentSequenceStep>;
	}


	/** A segment sequence definition. */
	export interface SegmentSequenceStep {

		/**
		 * Specifies if the step immediately precedes or can be any time before the
		 * next step.
		 */
		matchType?: SegmentSequenceStepMatchType;

		/**
		 * A sequence is specified with a list of Or grouped filters which are
		 * combined with `AND` operator.
		 */
		orFiltersForSegment?: Array<OrFiltersForSegment>;
	}

	export enum SegmentSequenceStepMatchType { UNSPECIFIED_MATCH_TYPE = 0, PRECEDES = 1, IMMEDIATELY_PRECEDES = 2 }


	/**
	 * A list of segment filters in the `OR` group are combined with the logical OR
	 * operator.
	 */
	export interface OrFiltersForSegment {

		/** List of segment filters to be combined with a `OR` operator. */
		segmentFilterClauses?: Array<SegmentFilterClause>;
	}


	/**
	 * Filter Clause to be used in a segment definition, can be wither a metric or
	 * a dimension filter.
	 */
	export interface SegmentFilterClause {

		/** Dimension filter specifies the filtering options on a dimension. */
		dimensionFilter?: SegmentDimensionFilter;

		/** Metric filter to be used in a segment filter clause. */
		metricFilter?: SegmentMetricFilter;

		/** Matches the complement (`!`) of the filter. */
		not?: boolean;
	}


	/** Dimension filter specifies the filtering options on a dimension. */
	export interface SegmentDimensionFilter {

		/** Should the match be case sensitive, ignored for `IN_LIST` operator. */
		caseSensitive?: boolean;

		/** Name of the dimension for which the filter is being applied. */
		dimensionName?: string;

		/** The list of expressions, only the first element is used for all operators */
		expressions?: Array<string>;

		/** Maximum comparison values for `BETWEEN` match type. */
		maxComparisonValue?: string;

		/** Minimum comparison values for `BETWEEN` match type. */
		minComparisonValue?: string;

		/** The operator to use to match the dimension with the expressions. */
		operator?: SegmentDimensionFilterOperator;
	}

	export enum SegmentDimensionFilterOperator { OPERATOR_UNSPECIFIED = 0, REGEXP = 1, BEGINS_WITH = 2, ENDS_WITH = 3, PARTIAL = 4, EXACT = 5, IN_LIST = 6, NUMERIC_LESS_THAN = 7, NUMERIC_GREATER_THAN = 8, NUMERIC_BETWEEN = 9 }


	/** Metric filter to be used in a segment filter clause. */
	export interface SegmentMetricFilter {

		/**
		 * The value to compare against. If the operator is `BETWEEN`, this value is
		 * treated as minimum comparison value.
		 */
		comparisonValue?: string;

		/** Max comparison value is only used for `BETWEEN` operator. */
		maxComparisonValue?: string;

		/**
		 * The metric that will be filtered on. A `metricFilter` must contain a
		 * metric name.
		 */
		metricName?: string;

		/**
		 * Specifies is the operation to perform to compare the metric. The default
		 * is `EQUAL`.
		 */
		operator?: SegmentMetricFilterOperator;

		/**
		 * Scope for a metric defines the level at which that metric is defined.  The
		 * specified metric scope must be equal to or greater than its primary scope
		 * as defined in the data model. The primary scope is defined by if the
		 * segment is selecting users or sessions.
		 */
		scope?: SegmentMetricFilterScope;
	}

	export enum SegmentMetricFilterOperator { UNSPECIFIED_OPERATOR = 0, LESS_THAN = 1, GREATER_THAN = 2, EQUAL = 3, BETWEEN = 4 }

	export enum SegmentMetricFilterScope { UNSPECIFIED_SCOPE = 0, PRODUCT = 1, HIT = 2, SESSION = 3, USER = 4 }


	/**
	 * A Simple segment conditions consist of one or more dimension/metric
	 * conditions that can be combined.
	 */
	export interface SimpleSegment {

		/**
		 * A list of segment filters groups which are combined with logical `AND`
		 * operator.
		 */
		orFiltersForSegment?: Array<OrFiltersForSegment>;
	}


	/** The batch request containing multiple report request. */
	export interface GetReportsRequest {

		/**
		 * Requests, each request will have a separate response.
		 * There can be a maximum of 5 requests. All requests should have the same
		 * `dateRanges`, `viewId`, `segments`, `samplingLevel`, and `cohortGroup`.
		 */
		reportRequests?: Array<ReportRequest>;

		/**
		 * Enables
		 * [resource based
		 * quotas](/analytics/devguides/reporting/core/v4/limits-quotas#analytics_reporting_api_v4),
		 * (defaults to `False`). If this field is set to `True` the
		 * per view (profile) quotas are governed by the computational
		 * cost of the request. Note that using cost based quotas will
		 * higher enable sampling rates. (10 Million for `SMALL`,
		 * 100M for `LARGE`. See the
		 * [limits and quotas
		 * documentation](/analytics/devguides/reporting/core/v4/limits-quotas#analytics_reporting_api_v4)
		 * for details.
		 */
		useResourceQuotas?: boolean;
	}


	/** The main request class which specifies the Reporting API request. */
	export interface ReportRequest {

		/**
		 * Defines a cohort group.
		 * For example:
		 * "cohortGroup": {
		 * "cohorts": [{
		 * "name": "cohort 1",
		 * "type": "FIRST_VISIT_DATE",
		 * "dateRange": { "startDate": "2015-08-01", "endDate": "2015-08-01" }
		 * },{
		 * "name": "cohort 2"
		 * "type": "FIRST_VISIT_DATE"
		 * "dateRange": { "startDate": "2015-07-01", "endDate": "2015-07-01" }
		 * }]
		 * }
		 */
		cohortGroup?: CohortGroup;

		/**
		 * Date ranges in the request. The request can have a maximum of 2 date
		 * ranges. The response will contain a set of metric values for each
		 * combination of the dimensions for each date range in the request. So, if
		 * there are two date ranges, there will be two set of metric values, one for
		 * the original date range and one for the second date range.
		 * The `reportRequest.dateRanges` field should not be specified for cohorts
		 * or Lifetime value requests.
		 * If a date range is not provided, the default date range is (startDate:
		 * current date - 7 days, endDate: current date - 1 day). Every
		 * [ReportRequest](#ReportRequest) within a `batchGet` method must
		 * contain the same `dateRanges` definition.
		 */
		dateRanges?: Array<DateRange>;

		/**
		 * The dimension filter clauses for filtering Dimension Values. They are
		 * logically combined with the `AND` operator. Note that filtering occurs
		 * before any dimensions are aggregated, so that the returned metrics
		 * represent the total for only the relevant dimensions.
		 */
		dimensionFilterClauses?: Array<DimensionFilterClause>;

		/**
		 * The dimensions requested.
		 * Requests can have a total of 9 dimensions.
		 */
		dimensions?: Array<Dimension>;

		/**
		 * Dimension or metric filters that restrict the data returned for your
		 * request. To use the `filtersExpression`, supply a dimension or metric on
		 * which to filter, followed by the filter expression. For example, the
		 * following expression selects `ga:browser` dimension which starts with
		 * Firefox; `ga:browser=~^Firefox`. For more information on dimensions
		 * and metric filters, see
		 * [Filters
		 * reference](https://developers.google.com/analytics/devguides/reporting/core/v3/reference#filters).
		 */
		filtersExpression?: string;

		/**
		 * If set to true, hides the total of all metrics for all the matching rows,
		 * for every date range. The default false and will return the totals.
		 */
		hideTotals?: boolean;

		/**
		 * If set to true, hides the minimum and maximum across all matching rows.
		 * The default is false and the value ranges are returned.
		 */
		hideValueRanges?: boolean;

		/**
		 * If set to false, the response does not include rows if all the retrieved
		 * metrics are equal to zero. The default is false which will exclude these
		 * rows.
		 */
		includeEmptyRows?: boolean;

		/**
		 * The metric filter clauses. They are logically combined with the `AND`
		 * operator.  Metric filters look at only the first date range and not the
		 * comparing date range. Note that filtering on metrics occurs after the
		 * metrics are aggregated.
		 */
		metricFilterClauses?: Array<MetricFilterClause>;

		/**
		 * The metrics requested.
		 * Requests must specify at least one metric. Requests can have a
		 * total of 10 metrics.
		 */
		metrics?: Array<Metric>;

		/**
		 * Sort order on output rows. To compare two rows, the elements of the
		 * following are applied in order until a difference is found.  All date
		 * ranges in the output get the same row order.
		 */
		orderBys?: Array<OrderBy>;

		/**
		 * Page size is for paging and specifies the maximum number of returned rows.
		 * Page size should be >= 0. A query returns the default of 1,000 rows.
		 * The Analytics Core Reporting API returns a maximum of 100,000 rows per
		 * request, no matter how many you ask for. It can also return fewer rows
		 * than requested, if there aren't as many dimension segments as you expect.
		 * For instance, there are fewer than 300 possible values for `ga:country`,
		 * so when segmenting only by country, you can't get more than 300 rows,
		 * even if you set `pageSize` to a higher value.
		 */
		pageSize?: number;

		/**
		 * A continuation token to get the next page of the results. Adding this to
		 * the request will return the rows after the pageToken. The pageToken should
		 * be the value returned in the nextPageToken parameter in the response to
		 * the GetReports request.
		 */
		pageToken?: string;

		/** The pivot definitions. Requests can have a maximum of 2 pivots. */
		pivots?: Array<Pivot>;

		/**
		 * The desired report
		 * [sample](https://support.google.com/analytics/answer/2637192) size.
		 * If the the `samplingLevel` field is unspecified the `DEFAULT` sampling
		 * level is used. Every [ReportRequest](#ReportRequest) within a
		 * `batchGet` method must contain the same `samplingLevel` definition. See
		 * [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling)
		 * for details.
		 */
		samplingLevel?: ReportRequestSamplingLevel;

		/**
		 * Segment the data returned for the request. A segment definition helps look
		 * at a subset of the segment request. A request can contain up to four
		 * segments. Every [ReportRequest](#ReportRequest) within a
		 * `batchGet` method must contain the same `segments` definition. Requests
		 * with segments must have the `ga:segment` dimension.
		 */
		segments?: Array<Segment>;

		/**
		 * The Analytics
		 * [view ID](https://support.google.com/analytics/answer/1009618)
		 * from which to retrieve data. Every [ReportRequest](#ReportRequest)
		 * within a `batchGet` method must contain the same `viewId`.
		 */
		viewId?: string;
	}


	/**
	 * Represents a group of metric filters.
	 * Set the operator value to specify how the filters are logically combined.
	 */
	export interface MetricFilterClause {

		/**
		 * The repeated set of filters. They are logically combined based on the
		 * operator specified.
		 */
		filters?: Array<MetricFilter>;

		/**
		 * The operator for combining multiple metric filters. If unspecified, it is
		 * treated as an `OR`.
		 */
		operator?: DimensionFilterClauseOperator;
	}


	/** MetricFilter specifies the filter on a metric. */
	export interface MetricFilter {

		/** The value to compare against. */
		comparisonValue?: string;

		/**
		 * The metric that will be filtered on. A metricFilter must contain a metric
		 * name. A metric name can be an alias earlier defined as a metric or it can
		 * also be a metric expression.
		 */
		metricName?: string;

		/**
		 * Logical `NOT` operator. If this boolean is set to true, then the matching
		 * metric values will be excluded in the report. The default is false.
		 */
		not?: boolean;

		/**
		 * Is the metric `EQUAL`, `LESS_THAN` or `GREATER_THAN` the
		 * comparisonValue, the default is `EQUAL`. If the operator is
		 * `IS_MISSING`, checks if the metric is missing and would ignore the
		 * comparisonValue.
		 */
		operator?: MetricFilterOperator;
	}

	export enum MetricFilterOperator { OPERATOR_UNSPECIFIED = 0, EQUAL = 1, LESS_THAN = 2, GREATER_THAN = 3, IS_MISSING = 4 }


	/**
	 * [Metrics](https://support.google.com/analytics/answer/1033861)
	 * are the quantitative measurements. For example, the metric `ga:users`
	 * indicates the total number of users for the requested time period.
	 */
	export interface Metric {

		/**
		 * An alias for the metric expression is an alternate name for the
		 * expression. The alias can be used for filtering and sorting. This field
		 * is optional and is useful if the expression is not a single metric but
		 * a complex expression which cannot be used in filtering and sorting.
		 * The alias is also used in the response column header.
		 */
		alias?: string;

		/**
		 * A metric expression in the request. An expression is constructed from one
		 * or more metrics and numbers. Accepted operators include: Plus (+), Minus
		 * (-), Negation (Unary -), Divided by (/), Multiplied by (*), Parenthesis,
		 * Positive cardinal numbers (0-9), can include decimals and is limited to
		 * 1024 characters. Example `ga:totalRefunds/ga:users`, in most cases the
		 * metric expression is just a single metric name like `ga:users`.
		 * Adding mixed `MetricType` (E.g., `CURRENCY` + `PERCENTAGE`) metrics
		 * will result in unexpected results.
		 */
		expression?: string;

		/**
		 * Specifies how the metric expression should be formatted, for example
		 * `INTEGER`.
		 */
		formattingType?: MetricHeaderEntryType;
	}


	/** Specifies the sorting options. */
	export interface OrderBy {

		/**
		 * The field which to sort by. The default sort order is ascending. Example:
		 * `ga:browser`.
		 * Note, that you can only specify one field for sort here. For example,
		 * `ga:browser, ga:city` is not valid.
		 */
		fieldName?: string;

		/** The order type. The default orderType is `VALUE`. */
		orderType?: OrderByOrderType;

		/** The sorting order for the field. */
		sortOrder?: OrderBySortOrder;
	}

	export enum OrderByOrderType { ORDER_TYPE_UNSPECIFIED = 0, VALUE = 1, DELTA = 2, SMART = 3, HISTOGRAM_BUCKET = 4, DIMENSION_AS_INTEGER = 5 }

	export enum OrderBySortOrder { SORT_ORDER_UNSPECIFIED = 0, ASCENDING = 1, DESCENDING = 2 }


	/**
	 * The Pivot describes the pivot section in the request.
	 * The Pivot helps rearrange the information in the table for certain reports
	 * by pivoting your data on a second dimension.
	 */
	export interface Pivot {

		/**
		 * DimensionFilterClauses are logically combined with an `AND` operator: only
		 * data that is included by all these DimensionFilterClauses contributes to
		 * the values in this pivot region. Dimension filters can be used to restrict
		 * the columns shown in the pivot region. For example if you have
		 * `ga:browser` as the requested dimension in the pivot region, and you
		 * specify key filters to restrict `ga:browser` to only "IE" or "Firefox",
		 * then only those two browsers would show up as columns.
		 */
		dimensionFilterClauses?: Array<DimensionFilterClause>;

		/**
		 * A list of dimensions to show as pivot columns. A Pivot can have a maximum
		 * of 4 dimensions. Pivot dimensions are part of the restriction on the
		 * total number of dimensions allowed in the request.
		 */
		dimensions?: Array<Dimension>;

		/**
		 * Specifies the maximum number of groups to return.
		 * The default value is 10, also the maximum value is 1,000.
		 */
		maxGroupCount?: number;

		/**
		 * The pivot metrics. Pivot metrics are part of the
		 * restriction on total number of metrics allowed in the request.
		 */
		metrics?: Array<Metric>;

		/**
		 * If k metrics were requested, then the response will contain some
		 * data-dependent multiple of k columns in the report.  E.g., if you pivoted
		 * on the dimension `ga:browser` then you'd get k columns for "Firefox", k
		 * columns for "IE", k columns for "Chrome", etc. The ordering of the groups
		 * of columns is determined by descending order of "total" for the first of
		 * the k values.  Ties are broken by lexicographic ordering of the first
		 * pivot dimension, then lexicographic ordering of the second pivot
		 * dimension, and so on.  E.g., if the totals for the first value for
		 * Firefox, IE, and Chrome were 8, 2, 8, respectively, the order of columns
		 * would be Chrome, Firefox, IE.
		 * The following let you choose which of the groups of k columns are
		 * included in the response.
		 */
		startGroup?: number;
	}

	export enum ReportRequestSamplingLevel { SAMPLING_UNSPECIFIED = 0, DEFAULT = 1, SMALL = 2, LARGE = 3 }


	/**
	 * The segment definition, if the report needs to be segmented.
	 * A Segment is a subset of the Analytics data. For example, of the entire
	 * set of users, one Segment might be users from a particular country or city.
	 */
	export interface Segment {

		/**
		 * Dynamic segment definition for defining the segment within the request.
		 * A segment can select users, sessions or both.
		 */
		dynamicSegment?: DynamicSegment;

		/** The segment ID of a built-in or custom segment, for example `gaid::-3`. */
		segmentId?: string;
	}


	/**
	 * The main response class which holds the reports from the Reporting API
	 * `batchGet` call.
	 */
	export interface GetReportsResponse {

		/**
		 * The amount of resource quota tokens deducted to execute the query. Includes
		 * all responses.
		 */
		queryCost?: number;

		/** Responses corresponding to each of the request. */
		reports?: Array<Report>;

		/**
		 * The resource quota tokens remaining for the property after the request is
		 * completed.
		 */
		resourceQuotasRemaining?: ResourceQuotasRemaining;
	}


	/** The data response corresponding to the request. */
	export interface Report {

		/** Column headers. */
		columnHeader?: ColumnHeader;

		/** The data part of the report. */
		data?: ReportData;

		/** Page token to retrieve the next page of results in the list. */
		nextPageToken?: string;
	}


	/** The data part of the report. */
	export interface ReportData {

		/**
		 * The last time the data in the report was refreshed. All the hits received
		 * before this timestamp are included in the calculation of the report.
		 */
		dataLastRefreshed?: string;

		/**
		 * Indicates if response to this request is golden or not. Data is
		 * golden when the exact same request will not produce any new results if
		 * asked at a later point in time.
		 */
		isDataGolden?: boolean;

		/**
		 * Minimum and maximum values seen over all matching rows. These are both
		 * empty when `hideValueRanges` in the request is false, or when
		 * rowCount is zero.
		 */
		maximums?: Array<DateRangeValues>;

		/**
		 * Minimum and maximum values seen over all matching rows. These are both
		 * empty when `hideValueRanges` in the request is false, or when
		 * rowCount is zero.
		 */
		minimums?: Array<DateRangeValues>;

		/** Total number of matching rows for this query. */
		rowCount?: number;

		/** There's one ReportRow for every unique combination of dimensions. */
		rows?: Array<ReportRow>;

		/**
		 * If the results are
		 * [sampled](https://support.google.com/analytics/answer/2637192),
		 * this returns the total number of samples read, one entry per date range.
		 * If the results are not sampled this field will not be defined. See
		 * [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling)
		 * for details.
		 */
		samplesReadCounts?: Array<string>;

		/**
		 * If the results are
		 * [sampled](https://support.google.com/analytics/answer/2637192),
		 * this returns the total number of
		 * samples present, one entry per date range. If the results are not sampled
		 * this field will not be defined. See
		 * [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling)
		 * for details.
		 */
		samplingSpaceSizes?: Array<string>;

		/**
		 * For each requested date range, for the set of all rows that match
		 * the query, every requested value format gets a total. The total
		 * for a value format is computed by first totaling the metrics
		 * mentioned in the value format and then evaluating the value
		 * format as a scalar expression.  E.g., The "totals" for
		 * `3 / (ga:sessions + 2)` we compute
		 * `3 / ((sum of all relevant ga:sessions) + 2)`.
		 * Totals are computed before pagination.
		 */
		totals?: Array<DateRangeValues>;
	}


	/** A row in the report. */
	export interface ReportRow {

		/** List of requested dimensions. */
		dimensions?: Array<string>;

		/** List of metrics for each requested DateRange. */
		metrics?: Array<DateRangeValues>;
	}


	/**
	 * The resource quota tokens remaining for the property after the request is
	 * completed.
	 */
	export interface ResourceQuotasRemaining {

		/** Daily resource quota remaining remaining. */
		dailyQuotaTokensRemaining?: number;

		/** Hourly resource quota tokens remaining. */
		hourlyQuotaTokensRemaining?: number;
	}


	/** The request to fetch User Report from Reporting API `userActivity:get` call. */
	export interface SearchUserActivityRequest {

		/**
		 * Set of all activity types being requested. Only acvities matching these
		 * types will be returned in the response. If empty, all activies will be
		 * returned.
		 */
		activityTypes?: Array<ActivityActivityType>;

		/**
		 * A contiguous set of days: startDate, startDate + 1 day, ..., endDate.
		 * The start and end dates are specified in
		 * [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) date format `YYYY-MM-DD`.
		 */
		dateRange?: DateRange;

		/**
		 * Page size is for paging and specifies the maximum number of returned rows.
		 * Page size should be > 0. If the value is 0 or if the field isn't specified,
		 * the request returns the default of 1000 rows per page.
		 */
		pageSize?: number;

		/**
		 * A continuation token to get the next page of the results. Adding this to
		 * the request will return the rows after the pageToken. The pageToken should
		 * be the value returned in the nextPageToken parameter in the response to
		 * the [SearchUserActivityRequest](#SearchUserActivityRequest) request.
		 */
		pageToken?: string;

		/** Contains information to identify a particular user uniquely. */
		user?: User;

		/**
		 * Required. The Analytics
		 * [view ID](https://support.google.com/analytics/answer/1009618)
		 * from which to retrieve data. Every
		 * [SearchUserActivityRequest](#SearchUserActivityRequest) must contain the
		 * `viewId`.
		 */
		viewId?: string;
	}


	/** Contains information to identify a particular user uniquely. */
	export interface User {

		/**
		 * Type of the user in the request. The field `userId` is associated with this
		 * type.
		 */
		type?: UserType;

		/** Unique Id of the user for which the data is being requested. */
		userId?: string;
	}

	export enum UserType { USER_ID_TYPE_UNSPECIFIED = 0, USER_ID = 1, CLIENT_ID = 2 }


	/** The response from `userActivity:get` call. */
	export interface SearchUserActivityResponse {

		/**
		 * This token should be passed to
		 * [SearchUserActivityRequest](#SearchUserActivityRequest) to retrieve the
		 * next page.
		 */
		nextPageToken?: string;

		/**
		 * This field represents the
		 * [sampling rate](https://support.google.com/analytics/answer/2637192) for
		 * the given request and is a number between 0.0 to 1.0. See
		 * [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling)
		 * for details.
		 */
		sampleRate?: number;

		/** Each record represents a session (device details, duration, etc). */
		sessions?: Array<UserActivitySession>;

		/** Total rows returned by this query (across different pages). */
		totalRows?: number;
	}


	/**
	 * This represents a user session performed on a specific device at a certain
	 * time over a period of time.
	 */
	export interface UserActivitySession {

		/** Represents a detailed view into each of the activity in this session. */
		activities?: Array<Activity>;

		/**
		 * The data source of a hit. By default, hits sent from analytics.js are
		 * reported as "web" and hits sent from the mobile SDKs are reported as "app".
		 * These values can be overridden in the Measurement Protocol.
		 */
		dataSource?: string;

		/** The type of device used: "mobile", "tablet" etc. */
		deviceCategory?: string;

		/** Platform on which the activity happened: "android", "ios" etc. */
		platform?: string;

		/** Date of this session in ISO-8601 format. */
		sessionDate?: string;

		/** Unique ID of the session. */
		sessionId?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the Analytics data.
		 * Post v4/reports:batchGet
		 * @return {void} Successful response
		 */
		Analyticsreporting_reports_batchGet(requestBody: GetReportsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/reports:batchGet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns User Activity data.
		 * Post v4/userActivity:search
		 * @return {void} Successful response
		 */
		Analyticsreporting_userActivity_search(requestBody: SearchUserActivityRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/userActivity:search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

