import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A metric actively restricted in creating the report. */
	export interface ActiveMetricRestriction {

		/** The name of the restricted metric. */
		metricName?: string | null;

		/** The reason for this metric's restriction. */
		restrictedMetricTypes?: Array<string>;
	}

	/** A metric actively restricted in creating the report. */
	export interface ActiveMetricRestrictionFormProperties {

		/** The name of the restricted metric. */
		metricName: FormControl<string | null | undefined>,
	}
	export function CreateActiveMetricRestrictionFormGroup() {
		return new FormGroup<ActiveMetricRestrictionFormProperties>({
			metricName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An audience export is a list of users in an audience at the time of the list's creation. One audience may have multiple audience exports created for different days. */
	export interface AudienceExport {

		/** Required. The audience resource name. This resource name identifies the audience being listed and is shared between the Analytics Data & Admin APIs. Format: `properties/{property}/audiences/{audience}` */
		audience?: string | null;

		/** Output only. The descriptive display name for this audience. For example, "Purchasers". */
		audienceDisplayName?: string | null;

		/** Output only. The time when CreateAudienceExport was called and the AudienceExport began the `CREATING` state. */
		beginCreatingTime?: string | null;

		/** Output only. The total quota tokens charged during creation of the AudienceExport. Because this token count is based on activity from the `CREATING` state, this tokens charged will be fixed once an AudienceExport enters the `ACTIVE` or `FAILED` states. */
		creationQuotaTokensCharged?: number | null;

		/** Required. The dimensions requested and displayed in the query response. */
		dimensions?: Array<V1betaAudienceDimension>;

		/** Output only. Error message is populated when an audience export fails during creation. A common reason for such a failure is quota exhaustion. */
		errorMessage?: string | null;

		/** Output only. Identifier. The audience export resource name assigned during creation. This resource name identifies this `AudienceExport`. Format: `properties/{property}/audienceExports/{audience_export}` */
		name?: string | null;

		/** Output only. The percentage completed for this audience export ranging between 0 to 100. */
		percentageCompleted?: number | null;

		/** Output only. The total number of rows in the AudienceExport result. */
		rowCount?: number | null;

		/** Output only. The current state for this AudienceExport. */
		state?: AudienceExportState | null;
	}

	/** An audience export is a list of users in an audience at the time of the list's creation. One audience may have multiple audience exports created for different days. */
	export interface AudienceExportFormProperties {

		/** Required. The audience resource name. This resource name identifies the audience being listed and is shared between the Analytics Data & Admin APIs. Format: `properties/{property}/audiences/{audience}` */
		audience: FormControl<string | null | undefined>,

		/** Output only. The descriptive display name for this audience. For example, "Purchasers". */
		audienceDisplayName: FormControl<string | null | undefined>,

		/** Output only. The time when CreateAudienceExport was called and the AudienceExport began the `CREATING` state. */
		beginCreatingTime: FormControl<string | null | undefined>,

		/** Output only. The total quota tokens charged during creation of the AudienceExport. Because this token count is based on activity from the `CREATING` state, this tokens charged will be fixed once an AudienceExport enters the `ACTIVE` or `FAILED` states. */
		creationQuotaTokensCharged: FormControl<number | null | undefined>,

		/** Output only. Error message is populated when an audience export fails during creation. A common reason for such a failure is quota exhaustion. */
		errorMessage: FormControl<string | null | undefined>,

		/** Output only. Identifier. The audience export resource name assigned during creation. This resource name identifies this `AudienceExport`. Format: `properties/{property}/audienceExports/{audience_export}` */
		name: FormControl<string | null | undefined>,

		/** Output only. The percentage completed for this audience export ranging between 0 to 100. */
		percentageCompleted: FormControl<number | null | undefined>,

		/** Output only. The total number of rows in the AudienceExport result. */
		rowCount: FormControl<number | null | undefined>,

		/** Output only. The current state for this AudienceExport. */
		state: FormControl<AudienceExportState | null | undefined>,
	}
	export function CreateAudienceExportFormGroup() {
		return new FormGroup<AudienceExportFormProperties>({
			audience: new FormControl<string | null | undefined>(undefined),
			audienceDisplayName: new FormControl<string | null | undefined>(undefined),
			beginCreatingTime: new FormControl<string | null | undefined>(undefined),
			creationQuotaTokensCharged: new FormControl<number | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			percentageCompleted: new FormControl<number | null | undefined>(undefined),
			rowCount: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<AudienceExportState | null | undefined>(undefined),
		});

	}


	/** An audience dimension is a user attribute. Specific user attributed are requested and then later returned in the `QueryAudienceExportResponse`. */
	export interface V1betaAudienceDimension {

		/** Optional. The API name of the dimension. See the [API Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/audience-list-api-schema#dimensions) for the list of dimension names. */
		dimensionName?: string | null;
	}

	/** An audience dimension is a user attribute. Specific user attributed are requested and then later returned in the `QueryAudienceExportResponse`. */
	export interface V1betaAudienceDimensionFormProperties {

		/** Optional. The API name of the dimension. See the [API Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/audience-list-api-schema#dimensions) for the list of dimension names. */
		dimensionName: FormControl<string | null | undefined>,
	}
	export function CreateV1betaAudienceDimensionFormGroup() {
		return new FormGroup<V1betaAudienceDimensionFormProperties>({
			dimensionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AudienceExportState { STATE_UNSPECIFIED = 0, CREATING = 1, ACTIVE = 2, FAILED = 3 }


	/** This metadata is currently blank. */
	export interface AudienceListMetadata {
	}

	/** This metadata is currently blank. */
	export interface AudienceListMetadataFormProperties {
	}
	export function CreateAudienceListMetadataFormGroup() {
		return new FormGroup<AudienceListMetadataFormProperties>({
		});

	}


	/** The batch request containing multiple pivot report requests. */
	export interface BatchRunPivotReportsRequest {

		/** Individual requests. Each request has a separate pivot report response. Each batch request is allowed up to 5 requests. */
		requests?: Array<RunPivotReportRequest>;
	}

	/** The batch request containing multiple pivot report requests. */
	export interface BatchRunPivotReportsRequestFormProperties {
	}
	export function CreateBatchRunPivotReportsRequestFormGroup() {
		return new FormGroup<BatchRunPivotReportsRequestFormProperties>({
		});

	}


	/** The request to generate a pivot report. */
	export interface RunPivotReportRequest {

		/** The specification of cohorts for a cohort report. Cohort reports create a time series of user retention for the cohort. For example, you could select the cohort of users that were acquired in the first week of September and follow that cohort for the next six weeks. Selecting the users acquired in the first week of September cohort is specified in the `cohort` object. Following that cohort for the next six weeks is specified in the `cohortsRange` object. For examples, see [Cohort Report Examples](https://developers.google.com/analytics/devguides/reporting/data/v1/advanced#cohort_report_examples). The report response could show a weekly time series where say your app has retained 60% of this cohort after three weeks and 25% of this cohort after six weeks. These two percentages can be calculated by the metric `cohortActiveUsers/cohortTotalUsers` and will be separate rows in the report. */
		cohortSpec?: CohortSpec;

		/** A currency code in ISO4217 format, such as "AED", "USD", "JPY". If the field is empty, the report uses the property's default currency. */
		currencyCode?: string | null;

		/** The date range to retrieve event data for the report. If multiple date ranges are specified, event data from each date range is used in the report. A special dimension with field name "dateRange" can be included in a Pivot's field names; if included, the report compares between date ranges. In a cohort request, this `dateRanges` must be unspecified. */
		dateRanges?: Array<DateRange>;

		/** To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics. */
		dimensionFilter?: FilterExpression;

		/** The dimensions requested. All defined dimensions must be used by one of the following: dimension_expression, dimension_filter, pivots, order_bys. */
		dimensions?: Array<Dimension>;

		/** If false or unspecified, each row with all metrics equal to 0 will not be returned. If true, these rows will be returned if they are not separately removed by a filter. Regardless of this `keep_empty_rows` setting, only data recorded by the Google Analytics (GA4) property can be displayed in a report. For example if a property never logs a `purchase` event, then a query for the `eventName` dimension and `eventCount` metric will not have a row eventName: "purchase" and eventCount: 0. */
		keepEmptyRows?: boolean | null;

		/** To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics. */
		metricFilter?: FilterExpression;

		/** The metrics requested, at least one metric needs to be specified. All defined metrics must be used by one of the following: metric_expression, metric_filter, order_bys. */
		metrics?: Array<Metric>;

		/** Describes the visual format of the report's dimensions in columns or rows. The union of the fieldNames (dimension names) in all pivots must be a subset of dimension names defined in Dimensions. No two pivots can share a dimension. A dimension is only visible if it appears in a pivot. */
		pivots?: Array<Pivot>;

		/** A Google Analytics GA4 property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Within a batch request, this property should either be unspecified or consistent with the batch-level property. Example: properties/1234 */
		property?: string | null;

		/** Toggles whether to return the current state of this Analytics Property's quota. Quota is returned in [PropertyQuota](#PropertyQuota). */
		returnPropertyQuota?: boolean | null;
	}

	/** The request to generate a pivot report. */
	export interface RunPivotReportRequestFormProperties {

		/** A currency code in ISO4217 format, such as "AED", "USD", "JPY". If the field is empty, the report uses the property's default currency. */
		currencyCode: FormControl<string | null | undefined>,

		/** If false or unspecified, each row with all metrics equal to 0 will not be returned. If true, these rows will be returned if they are not separately removed by a filter. Regardless of this `keep_empty_rows` setting, only data recorded by the Google Analytics (GA4) property can be displayed in a report. For example if a property never logs a `purchase` event, then a query for the `eventName` dimension and `eventCount` metric will not have a row eventName: "purchase" and eventCount: 0. */
		keepEmptyRows: FormControl<boolean | null | undefined>,

		/** A Google Analytics GA4 property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Within a batch request, this property should either be unspecified or consistent with the batch-level property. Example: properties/1234 */
		property: FormControl<string | null | undefined>,

		/** Toggles whether to return the current state of this Analytics Property's quota. Quota is returned in [PropertyQuota](#PropertyQuota). */
		returnPropertyQuota: FormControl<boolean | null | undefined>,
	}
	export function CreateRunPivotReportRequestFormGroup() {
		return new FormGroup<RunPivotReportRequestFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			keepEmptyRows: new FormControl<boolean | null | undefined>(undefined),
			property: new FormControl<string | null | undefined>(undefined),
			returnPropertyQuota: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The specification of cohorts for a cohort report. Cohort reports create a time series of user retention for the cohort. For example, you could select the cohort of users that were acquired in the first week of September and follow that cohort for the next six weeks. Selecting the users acquired in the first week of September cohort is specified in the `cohort` object. Following that cohort for the next six weeks is specified in the `cohortsRange` object. For examples, see [Cohort Report Examples](https://developers.google.com/analytics/devguides/reporting/data/v1/advanced#cohort_report_examples). The report response could show a weekly time series where say your app has retained 60% of this cohort after three weeks and 25% of this cohort after six weeks. These two percentages can be calculated by the metric `cohortActiveUsers/cohortTotalUsers` and will be separate rows in the report. */
	export interface CohortSpec {

		/** Optional settings of a cohort report. */
		cohortReportSettings?: CohortReportSettings;

		/** Defines the selection criteria to group users into cohorts. Most cohort reports define only a single cohort. If multiple cohorts are specified, each cohort can be recognized in the report by their name. */
		cohorts?: Array<Cohort>;

		/** Configures the extended reporting date range for a cohort report. Specifies an offset duration to follow the cohorts over. */
		cohortsRange?: CohortsRange;
	}

	/** The specification of cohorts for a cohort report. Cohort reports create a time series of user retention for the cohort. For example, you could select the cohort of users that were acquired in the first week of September and follow that cohort for the next six weeks. Selecting the users acquired in the first week of September cohort is specified in the `cohort` object. Following that cohort for the next six weeks is specified in the `cohortsRange` object. For examples, see [Cohort Report Examples](https://developers.google.com/analytics/devguides/reporting/data/v1/advanced#cohort_report_examples). The report response could show a weekly time series where say your app has retained 60% of this cohort after three weeks and 25% of this cohort after six weeks. These two percentages can be calculated by the metric `cohortActiveUsers/cohortTotalUsers` and will be separate rows in the report. */
	export interface CohortSpecFormProperties {
	}
	export function CreateCohortSpecFormGroup() {
		return new FormGroup<CohortSpecFormProperties>({
		});

	}


	/** Optional settings of a cohort report. */
	export interface CohortReportSettings {

		/** If true, accumulates the result from first touch day to the end day. Not supported in `RunReportRequest`. */
		accumulate?: boolean | null;
	}

	/** Optional settings of a cohort report. */
	export interface CohortReportSettingsFormProperties {

		/** If true, accumulates the result from first touch day to the end day. Not supported in `RunReportRequest`. */
		accumulate: FormControl<boolean | null | undefined>,
	}
	export function CreateCohortReportSettingsFormGroup() {
		return new FormGroup<CohortReportSettingsFormProperties>({
			accumulate: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Defines a cohort selection criteria. A cohort is a group of users who share a common characteristic. For example, users with the same `firstSessionDate` belong to the same cohort. */
	export interface Cohort {

		/** A contiguous set of days: `startDate`, `startDate + 1`, ..., `endDate`. Requests are allowed up to 4 date ranges. */
		dateRange?: DateRange;

		/** Dimension used by the cohort. Required and only supports `firstSessionDate`. */
		dimension?: string | null;

		/** Assigns a name to this cohort. The dimension `cohort` is valued to this name in a report response. If set, cannot begin with `cohort_` or `RESERVED_`. If not set, cohorts are named by their zero based index `cohort_0`, `cohort_1`, etc. */
		name?: string | null;
	}

	/** Defines a cohort selection criteria. A cohort is a group of users who share a common characteristic. For example, users with the same `firstSessionDate` belong to the same cohort. */
	export interface CohortFormProperties {

		/** Dimension used by the cohort. Required and only supports `firstSessionDate`. */
		dimension: FormControl<string | null | undefined>,

		/** Assigns a name to this cohort. The dimension `cohort` is valued to this name in a report response. If set, cannot begin with `cohort_` or `RESERVED_`. If not set, cohorts are named by their zero based index `cohort_0`, `cohort_1`, etc. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCohortFormGroup() {
		return new FormGroup<CohortFormProperties>({
			dimension: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A contiguous set of days: `startDate`, `startDate + 1`, ..., `endDate`. Requests are allowed up to 4 date ranges. */
	export interface DateRange {

		/** The inclusive end date for the query in the format `YYYY-MM-DD`. Cannot be before `start_date`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the property's reporting time zone. */
		endDate?: string | null;

		/** Assigns a name to this date range. The dimension `dateRange` is valued to this name in a report response. If set, cannot begin with `date_range_` or `RESERVED_`. If not set, date ranges are named by their zero based index in the request: `date_range_0`, `date_range_1`, etc. */
		name?: string | null;

		/** The inclusive start date for the query in the format `YYYY-MM-DD`. Cannot be after `end_date`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the property's reporting time zone. */
		startDate?: string | null;
	}

	/** A contiguous set of days: `startDate`, `startDate + 1`, ..., `endDate`. Requests are allowed up to 4 date ranges. */
	export interface DateRangeFormProperties {

		/** The inclusive end date for the query in the format `YYYY-MM-DD`. Cannot be before `start_date`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the property's reporting time zone. */
		endDate: FormControl<string | null | undefined>,

		/** Assigns a name to this date range. The dimension `dateRange` is valued to this name in a report response. If set, cannot begin with `date_range_` or `RESERVED_`. If not set, date ranges are named by their zero based index in the request: `date_range_0`, `date_range_1`, etc. */
		name: FormControl<string | null | undefined>,

		/** The inclusive start date for the query in the format `YYYY-MM-DD`. Cannot be after `end_date`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the property's reporting time zone. */
		startDate: FormControl<string | null | undefined>,
	}
	export function CreateDateRangeFormGroup() {
		return new FormGroup<DateRangeFormProperties>({
			endDate: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configures the extended reporting date range for a cohort report. Specifies an offset duration to follow the cohorts over. */
	export interface CohortsRange {

		/** Required. `endOffset` specifies the end date of the extended reporting date range for a cohort report. `endOffset` can be any positive integer but is commonly set to 5 to 10 so that reports contain data on the cohort for the next several granularity time periods. If `granularity` is `DAILY`, the `endDate` of the extended reporting date range is `endDate` of the cohort plus `endOffset` days. If `granularity` is `WEEKLY`, the `endDate` of the extended reporting date range is `endDate` of the cohort plus `endOffset * 7` days. If `granularity` is `MONTHLY`, the `endDate` of the extended reporting date range is `endDate` of the cohort plus `endOffset * 30` days. */
		endOffset?: number | null;

		/** Required. The granularity used to interpret the `startOffset` and `endOffset` for the extended reporting date range for a cohort report. */
		granularity?: CohortsRangeGranularity | null;

		/** `startOffset` specifies the start date of the extended reporting date range for a cohort report. `startOffset` is commonly set to 0 so that reports contain data from the acquisition of the cohort forward. If `granularity` is `DAILY`, the `startDate` of the extended reporting date range is `startDate` of the cohort plus `startOffset` days. If `granularity` is `WEEKLY`, the `startDate` of the extended reporting date range is `startDate` of the cohort plus `startOffset * 7` days. If `granularity` is `MONTHLY`, the `startDate` of the extended reporting date range is `startDate` of the cohort plus `startOffset * 30` days. */
		startOffset?: number | null;
	}

	/** Configures the extended reporting date range for a cohort report. Specifies an offset duration to follow the cohorts over. */
	export interface CohortsRangeFormProperties {

		/** Required. `endOffset` specifies the end date of the extended reporting date range for a cohort report. `endOffset` can be any positive integer but is commonly set to 5 to 10 so that reports contain data on the cohort for the next several granularity time periods. If `granularity` is `DAILY`, the `endDate` of the extended reporting date range is `endDate` of the cohort plus `endOffset` days. If `granularity` is `WEEKLY`, the `endDate` of the extended reporting date range is `endDate` of the cohort plus `endOffset * 7` days. If `granularity` is `MONTHLY`, the `endDate` of the extended reporting date range is `endDate` of the cohort plus `endOffset * 30` days. */
		endOffset: FormControl<number | null | undefined>,

		/** Required. The granularity used to interpret the `startOffset` and `endOffset` for the extended reporting date range for a cohort report. */
		granularity: FormControl<CohortsRangeGranularity | null | undefined>,

		/** `startOffset` specifies the start date of the extended reporting date range for a cohort report. `startOffset` is commonly set to 0 so that reports contain data from the acquisition of the cohort forward. If `granularity` is `DAILY`, the `startDate` of the extended reporting date range is `startDate` of the cohort plus `startOffset` days. If `granularity` is `WEEKLY`, the `startDate` of the extended reporting date range is `startDate` of the cohort plus `startOffset * 7` days. If `granularity` is `MONTHLY`, the `startDate` of the extended reporting date range is `startDate` of the cohort plus `startOffset * 30` days. */
		startOffset: FormControl<number | null | undefined>,
	}
	export function CreateCohortsRangeFormGroup() {
		return new FormGroup<CohortsRangeFormProperties>({
			endOffset: new FormControl<number | null | undefined>(undefined),
			granularity: new FormControl<CohortsRangeGranularity | null | undefined>(undefined),
			startOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CohortsRangeGranularity { GRANULARITY_UNSPECIFIED = 0, DAILY = 1, WEEKLY = 2, MONTHLY = 3 }


	/** To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics. */
	export interface FilterExpression {

		/** A list of filter expressions. */
		andGroup?: FilterExpressionList;

		/** An expression to filter dimension or metric values. */
		filter?: Filter;

		/** To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics. */
		notExpression?: FilterExpression;

		/** A list of filter expressions. */
		orGroup?: FilterExpressionList;
	}

	/** To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics. */
	export interface FilterExpressionFormProperties {
	}
	export function CreateFilterExpressionFormGroup() {
		return new FormGroup<FilterExpressionFormProperties>({
		});

	}


	/** A list of filter expressions. */
	export interface FilterExpressionList {

		/** A list of filter expressions. */
		expressions?: Array<FilterExpression>;
	}

	/** A list of filter expressions. */
	export interface FilterExpressionListFormProperties {
	}
	export function CreateFilterExpressionListFormGroup() {
		return new FormGroup<FilterExpressionListFormProperties>({
		});

	}


	/** An expression to filter dimension or metric values. */
	export interface Filter {

		/** To express that the result needs to be between two numbers (inclusive). */
		betweenFilter?: BetweenFilter;

		/** The dimension name or metric name. In most methods, dimensions & metrics can be used for the first time in this field. However in a RunPivotReportRequest, this field must be additionally specified by name in the RunPivotReportRequest's dimensions or metrics. */
		fieldName?: string | null;

		/** The result needs to be in a list of string values. */
		inListFilter?: InListFilter;

		/** Filters for numeric or date values. */
		numericFilter?: NumericFilter;

		/** The filter for string */
		stringFilter?: StringFilter;
	}

	/** An expression to filter dimension or metric values. */
	export interface FilterFormProperties {

		/** The dimension name or metric name. In most methods, dimensions & metrics can be used for the first time in this field. However in a RunPivotReportRequest, this field must be additionally specified by name in the RunPivotReportRequest's dimensions or metrics. */
		fieldName: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			fieldName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** To express that the result needs to be between two numbers (inclusive). */
	export interface BetweenFilter {

		/** To represent a number. */
		fromValue?: NumericValue;

		/** To represent a number. */
		toValue?: NumericValue;
	}

	/** To express that the result needs to be between two numbers (inclusive). */
	export interface BetweenFilterFormProperties {
	}
	export function CreateBetweenFilterFormGroup() {
		return new FormGroup<BetweenFilterFormProperties>({
		});

	}


	/** To represent a number. */
	export interface NumericValue {

		/** Double value */
		doubleValue?: number | null;

		/** Integer value */
		int64Value?: string | null;
	}

	/** To represent a number. */
	export interface NumericValueFormProperties {

		/** Double value */
		doubleValue: FormControl<number | null | undefined>,

		/** Integer value */
		int64Value: FormControl<string | null | undefined>,
	}
	export function CreateNumericValueFormGroup() {
		return new FormGroup<NumericValueFormProperties>({
			doubleValue: new FormControl<number | null | undefined>(undefined),
			int64Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result needs to be in a list of string values. */
	export interface InListFilter {

		/** If true, the string value is case sensitive. */
		caseSensitive?: boolean | null;

		/** The list of string values. Must be non-empty. */
		values?: Array<string>;
	}

	/** The result needs to be in a list of string values. */
	export interface InListFilterFormProperties {

		/** If true, the string value is case sensitive. */
		caseSensitive: FormControl<boolean | null | undefined>,
	}
	export function CreateInListFilterFormGroup() {
		return new FormGroup<InListFilterFormProperties>({
			caseSensitive: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Filters for numeric or date values. */
	export interface NumericFilter {

		/** The operation type for this filter. */
		operation?: NumericFilterOperation | null;

		/** To represent a number. */
		value?: NumericValue;
	}

	/** Filters for numeric or date values. */
	export interface NumericFilterFormProperties {

		/** The operation type for this filter. */
		operation: FormControl<NumericFilterOperation | null | undefined>,
	}
	export function CreateNumericFilterFormGroup() {
		return new FormGroup<NumericFilterFormProperties>({
			operation: new FormControl<NumericFilterOperation | null | undefined>(undefined),
		});

	}

	export enum NumericFilterOperation { OPERATION_UNSPECIFIED = 0, EQUAL = 1, LESS_THAN = 2, LESS_THAN_OR_EQUAL = 3, GREATER_THAN = 4, GREATER_THAN_OR_EQUAL = 5 }


	/** The filter for string */
	export interface StringFilter {

		/** If true, the string value is case sensitive. */
		caseSensitive?: boolean | null;

		/** The match type for this filter. */
		matchType?: StringFilterMatchType | null;

		/** The string value used for the matching. */
		value?: string | null;
	}

	/** The filter for string */
	export interface StringFilterFormProperties {

		/** If true, the string value is case sensitive. */
		caseSensitive: FormControl<boolean | null | undefined>,

		/** The match type for this filter. */
		matchType: FormControl<StringFilterMatchType | null | undefined>,

		/** The string value used for the matching. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateStringFilterFormGroup() {
		return new FormGroup<StringFilterFormProperties>({
			caseSensitive: new FormControl<boolean | null | undefined>(undefined),
			matchType: new FormControl<StringFilterMatchType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StringFilterMatchType { MATCH_TYPE_UNSPECIFIED = 0, EXACT = 1, BEGINS_WITH = 2, ENDS_WITH = 3, CONTAINS = 4, FULL_REGEXP = 5, PARTIAL_REGEXP = 6 }


	/** Dimensions are attributes of your data. For example, the dimension city indicates the city from which an event originates. Dimension values in report responses are strings; for example, the city could be "Paris" or "New York". Requests are allowed up to 9 dimensions. */
	export interface Dimension {

		/** Used to express a dimension which is the result of a formula of multiple dimensions. Example usages: 1) lower_case(dimension) 2) concatenate(dimension1, symbol, dimension2). */
		dimensionExpression?: DimensionExpression;

		/** The name of the dimension. See the [API Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#dimensions) for the list of dimension names supported by core reporting methods such as `runReport` and `batchRunReports`. See [Realtime Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-api-schema#dimensions) for the list of dimension names supported by the `runRealtimeReport` method. See [Funnel Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/exploration-api-schema#dimensions) for the list of dimension names supported by the `runFunnelReport` method. If `dimensionExpression` is specified, `name` can be any string that you would like within the allowed character set. For example if a `dimensionExpression` concatenates `country` and `city`, you could call that dimension `countryAndCity`. Dimension names that you choose must match the regular expression `^[a-zA-Z0-9_]$`. Dimensions are referenced by `name` in `dimensionFilter`, `orderBys`, `dimensionExpression`, and `pivots`. */
		name?: string | null;
	}

	/** Dimensions are attributes of your data. For example, the dimension city indicates the city from which an event originates. Dimension values in report responses are strings; for example, the city could be "Paris" or "New York". Requests are allowed up to 9 dimensions. */
	export interface DimensionFormProperties {

		/** The name of the dimension. See the [API Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#dimensions) for the list of dimension names supported by core reporting methods such as `runReport` and `batchRunReports`. See [Realtime Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-api-schema#dimensions) for the list of dimension names supported by the `runRealtimeReport` method. See [Funnel Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/exploration-api-schema#dimensions) for the list of dimension names supported by the `runFunnelReport` method. If `dimensionExpression` is specified, `name` can be any string that you would like within the allowed character set. For example if a `dimensionExpression` concatenates `country` and `city`, you could call that dimension `countryAndCity`. Dimension names that you choose must match the regular expression `^[a-zA-Z0-9_]$`. Dimensions are referenced by `name` in `dimensionFilter`, `orderBys`, `dimensionExpression`, and `pivots`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDimensionFormGroup() {
		return new FormGroup<DimensionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used to express a dimension which is the result of a formula of multiple dimensions. Example usages: 1) lower_case(dimension) 2) concatenate(dimension1, symbol, dimension2). */
	export interface DimensionExpression {

		/** Used to combine dimension values to a single dimension. */
		concatenate?: ConcatenateExpression;

		/** Used to convert a dimension value to a single case. */
		lowerCase?: CaseExpression;

		/** Used to convert a dimension value to a single case. */
		upperCase?: CaseExpression;
	}

	/** Used to express a dimension which is the result of a formula of multiple dimensions. Example usages: 1) lower_case(dimension) 2) concatenate(dimension1, symbol, dimension2). */
	export interface DimensionExpressionFormProperties {
	}
	export function CreateDimensionExpressionFormGroup() {
		return new FormGroup<DimensionExpressionFormProperties>({
		});

	}


	/** Used to combine dimension values to a single dimension. */
	export interface ConcatenateExpression {

		/** The delimiter placed between dimension names. Delimiters are often single characters such as "|" or "," but can be longer strings. If a dimension value contains the delimiter, both will be present in response with no distinction. For example if dimension 1 value = "US,FR", dimension 2 value = "JP", and delimiter = ",", then the response will contain "US,FR,JP". */
		delimiter?: string | null;

		/** Names of dimensions. The names must refer back to names in the dimensions field of the request. */
		dimensionNames?: Array<string>;
	}

	/** Used to combine dimension values to a single dimension. */
	export interface ConcatenateExpressionFormProperties {

		/** The delimiter placed between dimension names. Delimiters are often single characters such as "|" or "," but can be longer strings. If a dimension value contains the delimiter, both will be present in response with no distinction. For example if dimension 1 value = "US,FR", dimension 2 value = "JP", and delimiter = ",", then the response will contain "US,FR,JP". */
		delimiter: FormControl<string | null | undefined>,
	}
	export function CreateConcatenateExpressionFormGroup() {
		return new FormGroup<ConcatenateExpressionFormProperties>({
			delimiter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used to convert a dimension value to a single case. */
	export interface CaseExpression {

		/** Name of a dimension. The name must refer back to a name in dimensions field of the request. */
		dimensionName?: string | null;
	}

	/** Used to convert a dimension value to a single case. */
	export interface CaseExpressionFormProperties {

		/** Name of a dimension. The name must refer back to a name in dimensions field of the request. */
		dimensionName: FormControl<string | null | undefined>,
	}
	export function CreateCaseExpressionFormGroup() {
		return new FormGroup<CaseExpressionFormProperties>({
			dimensionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The quantitative measurements of a report. For example, the metric `eventCount` is the total number of events. Requests are allowed up to 10 metrics. */
	export interface Metric {

		/** A mathematical expression for derived metrics. For example, the metric Event count per user is `eventCount/totalUsers`. */
		expression?: string | null;

		/** Indicates if a metric is invisible in the report response. If a metric is invisible, the metric will not produce a column in the response, but can be used in `metricFilter`, `orderBys`, or a metric `expression`. */
		invisible?: boolean | null;

		/** The name of the metric. See the [API Metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#metrics) for the list of metric names supported by core reporting methods such as `runReport` and `batchRunReports`. See [Realtime Metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-api-schema#metrics) for the list of metric names supported by the `runRealtimeReport` method. See [Funnel Metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/exploration-api-schema#metrics) for the list of metric names supported by the `runFunnelReport` method. If `expression` is specified, `name` can be any string that you would like within the allowed character set. For example if `expression` is `screenPageViews/sessions`, you could call that metric's name = `viewsPerSession`. Metric names that you choose must match the regular expression `^[a-zA-Z0-9_]$`. Metrics are referenced by `name` in `metricFilter`, `orderBys`, and metric `expression`. */
		name?: string | null;
	}

	/** The quantitative measurements of a report. For example, the metric `eventCount` is the total number of events. Requests are allowed up to 10 metrics. */
	export interface MetricFormProperties {

		/** A mathematical expression for derived metrics. For example, the metric Event count per user is `eventCount/totalUsers`. */
		expression: FormControl<string | null | undefined>,

		/** Indicates if a metric is invisible in the report response. If a metric is invisible, the metric will not produce a column in the response, but can be used in `metricFilter`, `orderBys`, or a metric `expression`. */
		invisible: FormControl<boolean | null | undefined>,

		/** The name of the metric. See the [API Metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#metrics) for the list of metric names supported by core reporting methods such as `runReport` and `batchRunReports`. See [Realtime Metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-api-schema#metrics) for the list of metric names supported by the `runRealtimeReport` method. See [Funnel Metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/exploration-api-schema#metrics) for the list of metric names supported by the `runFunnelReport` method. If `expression` is specified, `name` can be any string that you would like within the allowed character set. For example if `expression` is `screenPageViews/sessions`, you could call that metric's name = `viewsPerSession`. Metric names that you choose must match the regular expression `^[a-zA-Z0-9_]$`. Metrics are referenced by `name` in `metricFilter`, `orderBys`, and metric `expression`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateMetricFormGroup() {
		return new FormGroup<MetricFormProperties>({
			expression: new FormControl<string | null | undefined>(undefined),
			invisible: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the visible dimension columns and rows in the report response. */
	export interface Pivot {

		/** Dimension names for visible columns in the report response. Including "dateRange" produces a date range column; for each row in the response, dimension values in the date range column will indicate the corresponding date range from the request. */
		fieldNames?: Array<string>;

		/** The number of unique combinations of dimension values to return in this pivot. The `limit` parameter is required. A `limit` of 10,000 is common for single pivot requests. The product of the `limit` for each `pivot` in a `RunPivotReportRequest` must not exceed 250,000. For example, a two pivot request with `limit: 1000` in each pivot will fail because the product is `1,000,000`. */
		limit?: string | null;

		/** Aggregate the metrics by dimensions in this pivot using the specified metric_aggregations. */
		metricAggregations?: Array<string>;

		/** The row count of the start row. The first row is counted as row 0. */
		offset?: string | null;

		/** Specifies how dimensions are ordered in the pivot. In the first Pivot, the OrderBys determine Row and PivotDimensionHeader ordering; in subsequent Pivots, the OrderBys determine only PivotDimensionHeader ordering. Dimensions specified in these OrderBys must be a subset of Pivot.field_names. */
		orderBys?: Array<OrderBy>;
	}

	/** Describes the visible dimension columns and rows in the report response. */
	export interface PivotFormProperties {

		/** The number of unique combinations of dimension values to return in this pivot. The `limit` parameter is required. A `limit` of 10,000 is common for single pivot requests. The product of the `limit` for each `pivot` in a `RunPivotReportRequest` must not exceed 250,000. For example, a two pivot request with `limit: 1000` in each pivot will fail because the product is `1,000,000`. */
		limit: FormControl<string | null | undefined>,

		/** The row count of the start row. The first row is counted as row 0. */
		offset: FormControl<string | null | undefined>,
	}
	export function CreatePivotFormGroup() {
		return new FormGroup<PivotFormProperties>({
			limit: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Order bys define how rows will be sorted in the response. For example, ordering rows by descending event count is one ordering, and ordering rows by the event name string is a different ordering. */
	export interface OrderBy {

		/** If true, sorts by descending order. */
		desc?: boolean | null;

		/** Sorts by dimension values. */
		dimension?: DimensionOrderBy;

		/** Sorts by metric values. */
		metric?: MetricOrderBy;

		/** Sorts by a pivot column group. */
		pivot?: PivotOrderBy;
	}

	/** Order bys define how rows will be sorted in the response. For example, ordering rows by descending event count is one ordering, and ordering rows by the event name string is a different ordering. */
	export interface OrderByFormProperties {

		/** If true, sorts by descending order. */
		desc: FormControl<boolean | null | undefined>,
	}
	export function CreateOrderByFormGroup() {
		return new FormGroup<OrderByFormProperties>({
			desc: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Sorts by dimension values. */
	export interface DimensionOrderBy {

		/** A dimension name in the request to order by. */
		dimensionName?: string | null;

		/** Controls the rule for dimension value ordering. */
		orderType?: DimensionOrderByOrderType | null;
	}

	/** Sorts by dimension values. */
	export interface DimensionOrderByFormProperties {

		/** A dimension name in the request to order by. */
		dimensionName: FormControl<string | null | undefined>,

		/** Controls the rule for dimension value ordering. */
		orderType: FormControl<DimensionOrderByOrderType | null | undefined>,
	}
	export function CreateDimensionOrderByFormGroup() {
		return new FormGroup<DimensionOrderByFormProperties>({
			dimensionName: new FormControl<string | null | undefined>(undefined),
			orderType: new FormControl<DimensionOrderByOrderType | null | undefined>(undefined),
		});

	}

	export enum DimensionOrderByOrderType { ORDER_TYPE_UNSPECIFIED = 0, ALPHANUMERIC = 1, CASE_INSENSITIVE_ALPHANUMERIC = 2, NUMERIC = 3 }


	/** Sorts by metric values. */
	export interface MetricOrderBy {

		/** A metric name in the request to order by. */
		metricName?: string | null;
	}

	/** Sorts by metric values. */
	export interface MetricOrderByFormProperties {

		/** A metric name in the request to order by. */
		metricName: FormControl<string | null | undefined>,
	}
	export function CreateMetricOrderByFormGroup() {
		return new FormGroup<MetricOrderByFormProperties>({
			metricName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sorts by a pivot column group. */
	export interface PivotOrderBy {

		/** In the response to order by, order rows by this column. Must be a metric name from the request. */
		metricName?: string | null;

		/** Used to select a dimension name and value pivot. If multiple pivot selections are given, the sort occurs on rows where all pivot selection dimension name and value pairs match the row's dimension name and value pair. */
		pivotSelections?: Array<PivotSelection>;
	}

	/** Sorts by a pivot column group. */
	export interface PivotOrderByFormProperties {

		/** In the response to order by, order rows by this column. Must be a metric name from the request. */
		metricName: FormControl<string | null | undefined>,
	}
	export function CreatePivotOrderByFormGroup() {
		return new FormGroup<PivotOrderByFormProperties>({
			metricName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A pair of dimension names and values. Rows with this dimension pivot pair are ordered by the metric's value. For example if pivots = {{"browser", "Chrome"}} and metric_name = "Sessions", then the rows will be sorted based on Sessions in Chrome. ---------|----------|----------------|----------|---------------- | Chrome | Chrome | Safari | Safari ---------|----------|----------------|----------|---------------- Country | Sessions | Pages/Sessions | Sessions | Pages/Sessions ---------|----------|----------------|----------|---------------- US | 2 | 2 | 3 | 1 ---------|----------|----------------|----------|---------------- Canada | 3 | 1 | 4 | 1 ---------|----------|----------------|----------|---------------- */
	export interface PivotSelection {

		/** Must be a dimension name from the request. */
		dimensionName?: string | null;

		/** Order by only when the named dimension is this value. */
		dimensionValue?: string | null;
	}

	/** A pair of dimension names and values. Rows with this dimension pivot pair are ordered by the metric's value. For example if pivots = {{"browser", "Chrome"}} and metric_name = "Sessions", then the rows will be sorted based on Sessions in Chrome. ---------|----------|----------------|----------|---------------- | Chrome | Chrome | Safari | Safari ---------|----------|----------------|----------|---------------- Country | Sessions | Pages/Sessions | Sessions | Pages/Sessions ---------|----------|----------------|----------|---------------- US | 2 | 2 | 3 | 1 ---------|----------|----------------|----------|---------------- Canada | 3 | 1 | 4 | 1 ---------|----------|----------------|----------|---------------- */
	export interface PivotSelectionFormProperties {

		/** Must be a dimension name from the request. */
		dimensionName: FormControl<string | null | undefined>,

		/** Order by only when the named dimension is this value. */
		dimensionValue: FormControl<string | null | undefined>,
	}
	export function CreatePivotSelectionFormGroup() {
		return new FormGroup<PivotSelectionFormProperties>({
			dimensionName: new FormControl<string | null | undefined>(undefined),
			dimensionValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The batch response containing multiple pivot reports. */
	export interface BatchRunPivotReportsResponse {

		/** Identifies what kind of resource this message is. This `kind` is always the fixed string "analyticsData#batchRunPivotReports". Useful to distinguish between response types in JSON. */
		kind?: string | null;

		/** Individual responses. Each response has a separate pivot report request. */
		pivotReports?: Array<RunPivotReportResponse>;
	}

	/** The batch response containing multiple pivot reports. */
	export interface BatchRunPivotReportsResponseFormProperties {

		/** Identifies what kind of resource this message is. This `kind` is always the fixed string "analyticsData#batchRunPivotReports". Useful to distinguish between response types in JSON. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateBatchRunPivotReportsResponseFormGroup() {
		return new FormGroup<BatchRunPivotReportsResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response pivot report table corresponding to a pivot request. */
	export interface RunPivotReportResponse {

		/** Aggregation of metric values. Can be totals, minimums, or maximums. The returned aggregations are controlled by the metric_aggregations in the pivot. The type of aggregation returned in each row is shown by the dimension_values which are set to "RESERVED_". */
		aggregates?: Array<Row>;

		/** Describes dimension columns. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows. */
		dimensionHeaders?: Array<DimensionHeader>;

		/** Identifies what kind of resource this message is. This `kind` is always the fixed string "analyticsData#runPivotReport". Useful to distinguish between response types in JSON. */
		kind?: string | null;

		/** Response's metadata carrying additional information about the report content. */
		metadata?: ResponseMetaData;

		/** Describes metric columns. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows. */
		metricHeaders?: Array<MetricHeader>;

		/** Summarizes the columns and rows created by a pivot. Each pivot in the request produces one header in the response. If we have a request like this: "pivots": [{ "fieldNames": ["country", "city"] }, { "fieldNames": "eventName" }] We will have the following `pivotHeaders` in the response: "pivotHeaders" : [{ "dimensionHeaders": [{ "dimensionValues": [ { "value": "United Kingdom" }, { "value": "London" } ] }, { "dimensionValues": [ { "value": "Japan" }, { "value": "Osaka" } ] }] }, { "dimensionHeaders": [{ "dimensionValues": [{ "value": "session_start" }] }, { "dimensionValues": [{ "value": "scroll" }] }] }] */
		pivotHeaders?: Array<PivotHeader>;

		/** Current state of all quotas for this Analytics Property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors. */
		propertyQuota?: PropertyQuota;

		/** Rows of dimension value combinations and metric values in the report. */
		rows?: Array<Row>;
	}

	/** The response pivot report table corresponding to a pivot request. */
	export interface RunPivotReportResponseFormProperties {

		/** Identifies what kind of resource this message is. This `kind` is always the fixed string "analyticsData#runPivotReport". Useful to distinguish between response types in JSON. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateRunPivotReportResponseFormGroup() {
		return new FormGroup<RunPivotReportResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Report data for each row. For example if RunReportRequest contains: ```none "dimensions": [ { "name": "eventName" }, { "name": "countryId" } ], "metrics": [ { "name": "eventCount" } ] ``` One row with 'in_app_purchase' as the eventName, 'JP' as the countryId, and 15 as the eventCount, would be: ```none "dimensionValues": [ { "value": "in_app_purchase" }, { "value": "JP" } ], "metricValues": [ { "value": "15" } ] ``` */
	export interface Row {

		/** List of requested dimension values. In a PivotReport, dimension_values are only listed for dimensions included in a pivot. */
		dimensionValues?: Array<DimensionValue>;

		/** List of requested visible metric values. */
		metricValues?: Array<MetricValue>;
	}

	/** Report data for each row. For example if RunReportRequest contains: ```none "dimensions": [ { "name": "eventName" }, { "name": "countryId" } ], "metrics": [ { "name": "eventCount" } ] ``` One row with 'in_app_purchase' as the eventName, 'JP' as the countryId, and 15 as the eventCount, would be: ```none "dimensionValues": [ { "value": "in_app_purchase" }, { "value": "JP" } ], "metricValues": [ { "value": "15" } ] ``` */
	export interface RowFormProperties {
	}
	export function CreateRowFormGroup() {
		return new FormGroup<RowFormProperties>({
		});

	}


	/** The value of a dimension. */
	export interface DimensionValue {

		/** Value as a string if the dimension type is a string. */
		value?: string | null;
	}

	/** The value of a dimension. */
	export interface DimensionValueFormProperties {

		/** Value as a string if the dimension type is a string. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDimensionValueFormGroup() {
		return new FormGroup<DimensionValueFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The value of a metric. */
	export interface MetricValue {

		/** Measurement value. See MetricHeader for type. */
		value?: string | null;
	}

	/** The value of a metric. */
	export interface MetricValueFormProperties {

		/** Measurement value. See MetricHeader for type. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateMetricValueFormGroup() {
		return new FormGroup<MetricValueFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a dimension column in the report. Dimensions requested in a report produce column entries within rows and DimensionHeaders. However, dimensions used exclusively within filters or expressions do not produce columns in a report; correspondingly, those dimensions do not produce headers. */
	export interface DimensionHeader {

		/** The dimension's name. */
		name?: string | null;
	}

	/** Describes a dimension column in the report. Dimensions requested in a report produce column entries within rows and DimensionHeaders. However, dimensions used exclusively within filters or expressions do not produce columns in a report; correspondingly, those dimensions do not produce headers. */
	export interface DimensionHeaderFormProperties {

		/** The dimension's name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDimensionHeaderFormGroup() {
		return new FormGroup<DimensionHeaderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response's metadata carrying additional information about the report content. */
	export interface ResponseMetaData {

		/** The currency code used in this report. Intended to be used in formatting currency metrics like `purchaseRevenue` for visualization. If currency_code was specified in the request, this response parameter will echo the request parameter; otherwise, this response parameter is the property's current currency_code. Currency codes are string encodings of currency types from the ISO 4217 standard (https://en.wikipedia.org/wiki/ISO_4217); for example "USD", "EUR", "JPY". To learn more, see https://support.google.com/analytics/answer/9796179. */
		currencyCode?: string | null;

		/** If true, indicates some buckets of dimension combinations are rolled into "(other)" row. This can happen for high cardinality reports. The metadata parameter dataLossFromOtherRow is populated based on the aggregated data table used in the report. The parameter will be accurately populated regardless of the filters and limits in the report. For example, the (other) row could be dropped from the report because the request contains a filter on sessionSource = google. This parameter will still be populated if data loss from other row was present in the input aggregate data used to generate this report. To learn more, see [About the (other) row and data sampling](https://support.google.com/analytics/answer/13208658#reports). */
		dataLossFromOtherRow?: boolean | null;

		/** If empty reason is specified, the report is empty for this reason. */
		emptyReason?: string | null;

		/** If this report results is [sampled](https://support.google.com/analytics/answer/13331292), this describes the percentage of events used in this report. One `samplingMetadatas` is populated for each date range. Each `samplingMetadatas` corresponds to a date range in order that date ranges were specified in the request. However if the results are not sampled, this field will not be defined. */
		samplingMetadatas?: Array<SamplingMetadata>;

		/** The schema restrictions actively enforced in creating this report. To learn more, see [Access and data-restriction management](https://support.google.com/analytics/answer/10851388). */
		schemaRestrictionResponse?: SchemaRestrictionResponse;

		/** If `subjectToThresholding` is true, this report is subject to thresholding and only returns data that meets the minimum aggregation thresholds. It is possible for a request to be subject to thresholding thresholding and no data is absent from the report, and this happens when all data is above the thresholds. To learn more, see [Data thresholds](https://support.google.com/analytics/answer/9383630). */
		subjectToThresholding?: boolean | null;

		/** The property's current timezone. Intended to be used to interpret time-based dimensions like `hour` and `minute`. Formatted as strings from the IANA Time Zone database (https://www.iana.org/time-zones); for example "America/New_York" or "Asia/Tokyo". */
		timeZone?: string | null;
	}

	/** Response's metadata carrying additional information about the report content. */
	export interface ResponseMetaDataFormProperties {

		/** The currency code used in this report. Intended to be used in formatting currency metrics like `purchaseRevenue` for visualization. If currency_code was specified in the request, this response parameter will echo the request parameter; otherwise, this response parameter is the property's current currency_code. Currency codes are string encodings of currency types from the ISO 4217 standard (https://en.wikipedia.org/wiki/ISO_4217); for example "USD", "EUR", "JPY". To learn more, see https://support.google.com/analytics/answer/9796179. */
		currencyCode: FormControl<string | null | undefined>,

		/** If true, indicates some buckets of dimension combinations are rolled into "(other)" row. This can happen for high cardinality reports. The metadata parameter dataLossFromOtherRow is populated based on the aggregated data table used in the report. The parameter will be accurately populated regardless of the filters and limits in the report. For example, the (other) row could be dropped from the report because the request contains a filter on sessionSource = google. This parameter will still be populated if data loss from other row was present in the input aggregate data used to generate this report. To learn more, see [About the (other) row and data sampling](https://support.google.com/analytics/answer/13208658#reports). */
		dataLossFromOtherRow: FormControl<boolean | null | undefined>,

		/** If empty reason is specified, the report is empty for this reason. */
		emptyReason: FormControl<string | null | undefined>,

		/** If `subjectToThresholding` is true, this report is subject to thresholding and only returns data that meets the minimum aggregation thresholds. It is possible for a request to be subject to thresholding thresholding and no data is absent from the report, and this happens when all data is above the thresholds. To learn more, see [Data thresholds](https://support.google.com/analytics/answer/9383630). */
		subjectToThresholding: FormControl<boolean | null | undefined>,

		/** The property's current timezone. Intended to be used to interpret time-based dimensions like `hour` and `minute`. Formatted as strings from the IANA Time Zone database (https://www.iana.org/time-zones); for example "America/New_York" or "Asia/Tokyo". */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateResponseMetaDataFormGroup() {
		return new FormGroup<ResponseMetaDataFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			dataLossFromOtherRow: new FormControl<boolean | null | undefined>(undefined),
			emptyReason: new FormControl<string | null | undefined>(undefined),
			subjectToThresholding: new FormControl<boolean | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** If this report results is [sampled](https://support.google.com/analytics/answer/13331292), this describes the percentage of events used in this report. Sampling is the practice of analyzing a subset of all data in order to uncover the meaningful information in the larger data set. */
	export interface SamplingMetadata {

		/** The total number of events read in this sampled report for a date range. This is the size of the subset this property's data that was analyzed in this report. */
		samplesReadCount?: string | null;

		/** The total number of events present in this property's data that could have been analyzed in this report for a date range. Sampling uncovers the meaningful information about the larger data set, and this is the size of the larger data set. To calculate the percentage of available data that was used in this report, compute `samplesReadCount/samplingSpaceSize`. */
		samplingSpaceSize?: string | null;
	}

	/** If this report results is [sampled](https://support.google.com/analytics/answer/13331292), this describes the percentage of events used in this report. Sampling is the practice of analyzing a subset of all data in order to uncover the meaningful information in the larger data set. */
	export interface SamplingMetadataFormProperties {

		/** The total number of events read in this sampled report for a date range. This is the size of the subset this property's data that was analyzed in this report. */
		samplesReadCount: FormControl<string | null | undefined>,

		/** The total number of events present in this property's data that could have been analyzed in this report for a date range. Sampling uncovers the meaningful information about the larger data set, and this is the size of the larger data set. To calculate the percentage of available data that was used in this report, compute `samplesReadCount/samplingSpaceSize`. */
		samplingSpaceSize: FormControl<string | null | undefined>,
	}
	export function CreateSamplingMetadataFormGroup() {
		return new FormGroup<SamplingMetadataFormProperties>({
			samplesReadCount: new FormControl<string | null | undefined>(undefined),
			samplingSpaceSize: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The schema restrictions actively enforced in creating this report. To learn more, see [Access and data-restriction management](https://support.google.com/analytics/answer/10851388). */
	export interface SchemaRestrictionResponse {

		/** All restrictions actively enforced in creating the report. For example, `purchaseRevenue` always has the restriction type `REVENUE_DATA`. However, this active response restriction is only populated if the user's custom role disallows access to `REVENUE_DATA`. */
		activeMetricRestrictions?: Array<ActiveMetricRestriction>;
	}

	/** The schema restrictions actively enforced in creating this report. To learn more, see [Access and data-restriction management](https://support.google.com/analytics/answer/10851388). */
	export interface SchemaRestrictionResponseFormProperties {
	}
	export function CreateSchemaRestrictionResponseFormGroup() {
		return new FormGroup<SchemaRestrictionResponseFormProperties>({
		});

	}


	/** Describes a metric column in the report. Visible metrics requested in a report produce column entries within rows and MetricHeaders. However, metrics used exclusively within filters or expressions do not produce columns in a report; correspondingly, those metrics do not produce headers. */
	export interface MetricHeader {

		/** The metric's name. */
		name?: string | null;

		/** The metric's data type. */
		type?: MetricHeaderType | null;
	}

	/** Describes a metric column in the report. Visible metrics requested in a report produce column entries within rows and MetricHeaders. However, metrics used exclusively within filters or expressions do not produce columns in a report; correspondingly, those metrics do not produce headers. */
	export interface MetricHeaderFormProperties {

		/** The metric's name. */
		name: FormControl<string | null | undefined>,

		/** The metric's data type. */
		type: FormControl<MetricHeaderType | null | undefined>,
	}
	export function CreateMetricHeaderFormGroup() {
		return new FormGroup<MetricHeaderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<MetricHeaderType | null | undefined>(undefined),
		});

	}

	export enum MetricHeaderType { METRIC_TYPE_UNSPECIFIED = 0, TYPE_INTEGER = 1, TYPE_FLOAT = 2, TYPE_SECONDS = 3, TYPE_MILLISECONDS = 4, TYPE_MINUTES = 5, TYPE_HOURS = 6, TYPE_STANDARD = 7, TYPE_CURRENCY = 8, TYPE_FEET = 9, TYPE_MILES = 10, TYPE_METERS = 11, TYPE_KILOMETERS = 12 }


	/** Dimensions' values in a single pivot. */
	export interface PivotHeader {

		/** The size is the same as the cardinality of the corresponding dimension combinations. */
		pivotDimensionHeaders?: Array<PivotDimensionHeader>;

		/** The cardinality of the pivot. The total number of rows for this pivot's fields regardless of how the parameters `offset` and `limit` are specified in the request. */
		rowCount?: number | null;
	}

	/** Dimensions' values in a single pivot. */
	export interface PivotHeaderFormProperties {

		/** The cardinality of the pivot. The total number of rows for this pivot's fields regardless of how the parameters `offset` and `limit` are specified in the request. */
		rowCount: FormControl<number | null | undefined>,
	}
	export function CreatePivotHeaderFormGroup() {
		return new FormGroup<PivotHeaderFormProperties>({
			rowCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Summarizes dimension values from a row for this pivot. */
	export interface PivotDimensionHeader {

		/** Values of multiple dimensions in a pivot. */
		dimensionValues?: Array<DimensionValue>;
	}

	/** Summarizes dimension values from a row for this pivot. */
	export interface PivotDimensionHeaderFormProperties {
	}
	export function CreatePivotDimensionHeaderFormGroup() {
		return new FormGroup<PivotDimensionHeaderFormProperties>({
		});

	}


	/** Current state of all quotas for this Analytics Property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors. */
	export interface PropertyQuota {

		/** Current state for a particular quota group. */
		concurrentRequests?: QuotaStatus;

		/** Current state for a particular quota group. */
		potentiallyThresholdedRequestsPerHour?: QuotaStatus;

		/** Current state for a particular quota group. */
		serverErrorsPerProjectPerHour?: QuotaStatus;

		/** Current state for a particular quota group. */
		tokensPerDay?: QuotaStatus;

		/** Current state for a particular quota group. */
		tokensPerHour?: QuotaStatus;

		/** Current state for a particular quota group. */
		tokensPerProjectPerHour?: QuotaStatus;
	}

	/** Current state of all quotas for this Analytics Property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors. */
	export interface PropertyQuotaFormProperties {
	}
	export function CreatePropertyQuotaFormGroup() {
		return new FormGroup<PropertyQuotaFormProperties>({
		});

	}


	/** Current state for a particular quota group. */
	export interface QuotaStatus {

		/** Quota consumed by this request. */
		consumed?: number | null;

		/** Quota remaining after this request. */
		remaining?: number | null;
	}

	/** Current state for a particular quota group. */
	export interface QuotaStatusFormProperties {

		/** Quota consumed by this request. */
		consumed: FormControl<number | null | undefined>,

		/** Quota remaining after this request. */
		remaining: FormControl<number | null | undefined>,
	}
	export function CreateQuotaStatusFormGroup() {
		return new FormGroup<QuotaStatusFormProperties>({
			consumed: new FormControl<number | null | undefined>(undefined),
			remaining: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The batch request containing multiple report requests. */
	export interface BatchRunReportsRequest {

		/** Individual requests. Each request has a separate report response. Each batch request is allowed up to 5 requests. */
		requests?: Array<RunReportRequest>;
	}

	/** The batch request containing multiple report requests. */
	export interface BatchRunReportsRequestFormProperties {
	}
	export function CreateBatchRunReportsRequestFormGroup() {
		return new FormGroup<BatchRunReportsRequestFormProperties>({
		});

	}


	/** The request to generate a report. */
	export interface RunReportRequest {

		/** The specification of cohorts for a cohort report. Cohort reports create a time series of user retention for the cohort. For example, you could select the cohort of users that were acquired in the first week of September and follow that cohort for the next six weeks. Selecting the users acquired in the first week of September cohort is specified in the `cohort` object. Following that cohort for the next six weeks is specified in the `cohortsRange` object. For examples, see [Cohort Report Examples](https://developers.google.com/analytics/devguides/reporting/data/v1/advanced#cohort_report_examples). The report response could show a weekly time series where say your app has retained 60% of this cohort after three weeks and 25% of this cohort after six weeks. These two percentages can be calculated by the metric `cohortActiveUsers/cohortTotalUsers` and will be separate rows in the report. */
		cohortSpec?: CohortSpec;

		/** A currency code in ISO4217 format, such as "AED", "USD", "JPY". If the field is empty, the report uses the property's default currency. */
		currencyCode?: string | null;

		/** Date ranges of data to read. If multiple date ranges are requested, each response row will contain a zero based date range index. If two date ranges overlap, the event data for the overlapping days is included in the response rows for both date ranges. In a cohort request, this `dateRanges` must be unspecified. */
		dateRanges?: Array<DateRange>;

		/** To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics. */
		dimensionFilter?: FilterExpression;

		/** The dimensions requested and displayed. */
		dimensions?: Array<Dimension>;

		/** If false or unspecified, each row with all metrics equal to 0 will not be returned. If true, these rows will be returned if they are not separately removed by a filter. Regardless of this `keep_empty_rows` setting, only data recorded by the Google Analytics (GA4) property can be displayed in a report. For example if a property never logs a `purchase` event, then a query for the `eventName` dimension and `eventCount` metric will not have a row eventName: "purchase" and eventCount: 0. */
		keepEmptyRows?: boolean | null;

		/** The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 250,000 rows per request, no matter how many you ask for. `limit` must be positive. The API can also return fewer rows than the requested `limit`, if there aren't as many dimension values as the `limit`. For instance, there are fewer than 300 possible values for the dimension `country`, so when reporting on only `country`, you can't get more than 300 rows, even if you set `limit` to a higher value. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). */
		limit?: string | null;

		/** Aggregation of metrics. Aggregated metric values will be shown in rows where the dimension_values are set to "RESERVED_(MetricAggregation)". */
		metricAggregations?: Array<string>;

		/** To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics. */
		metricFilter?: FilterExpression;

		/** The metrics requested and displayed. */
		metrics?: Array<Metric>;

		/** The row count of the start row. The first row is counted as row 0. When paging, the first request does not specify offset; or equivalently, sets offset to 0; the first request returns the first `limit` of rows. The second request sets offset to the `limit` of the first request; the second request returns the second `limit` of rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). */
		offset?: string | null;

		/** Specifies how rows are ordered in the response. */
		orderBys?: Array<OrderBy>;

		/** A Google Analytics GA4 property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Within a batch request, this property should either be unspecified or consistent with the batch-level property. Example: properties/1234 */
		property?: string | null;

		/** Toggles whether to return the current state of this Analytics Property's quota. Quota is returned in [PropertyQuota](#PropertyQuota). */
		returnPropertyQuota?: boolean | null;
	}

	/** The request to generate a report. */
	export interface RunReportRequestFormProperties {

		/** A currency code in ISO4217 format, such as "AED", "USD", "JPY". If the field is empty, the report uses the property's default currency. */
		currencyCode: FormControl<string | null | undefined>,

		/** If false or unspecified, each row with all metrics equal to 0 will not be returned. If true, these rows will be returned if they are not separately removed by a filter. Regardless of this `keep_empty_rows` setting, only data recorded by the Google Analytics (GA4) property can be displayed in a report. For example if a property never logs a `purchase` event, then a query for the `eventName` dimension and `eventCount` metric will not have a row eventName: "purchase" and eventCount: 0. */
		keepEmptyRows: FormControl<boolean | null | undefined>,

		/** The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 250,000 rows per request, no matter how many you ask for. `limit` must be positive. The API can also return fewer rows than the requested `limit`, if there aren't as many dimension values as the `limit`. For instance, there are fewer than 300 possible values for the dimension `country`, so when reporting on only `country`, you can't get more than 300 rows, even if you set `limit` to a higher value. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). */
		limit: FormControl<string | null | undefined>,

		/** The row count of the start row. The first row is counted as row 0. When paging, the first request does not specify offset; or equivalently, sets offset to 0; the first request returns the first `limit` of rows. The second request sets offset to the `limit` of the first request; the second request returns the second `limit` of rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). */
		offset: FormControl<string | null | undefined>,

		/** A Google Analytics GA4 property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Within a batch request, this property should either be unspecified or consistent with the batch-level property. Example: properties/1234 */
		property: FormControl<string | null | undefined>,

		/** Toggles whether to return the current state of this Analytics Property's quota. Quota is returned in [PropertyQuota](#PropertyQuota). */
		returnPropertyQuota: FormControl<boolean | null | undefined>,
	}
	export function CreateRunReportRequestFormGroup() {
		return new FormGroup<RunReportRequestFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			keepEmptyRows: new FormControl<boolean | null | undefined>(undefined),
			limit: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<string | null | undefined>(undefined),
			property: new FormControl<string | null | undefined>(undefined),
			returnPropertyQuota: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The batch response containing multiple reports. */
	export interface BatchRunReportsResponse {

		/** Identifies what kind of resource this message is. This `kind` is always the fixed string "analyticsData#batchRunReports". Useful to distinguish between response types in JSON. */
		kind?: string | null;

		/** Individual responses. Each response has a separate report request. */
		reports?: Array<RunReportResponse>;
	}

	/** The batch response containing multiple reports. */
	export interface BatchRunReportsResponseFormProperties {

		/** Identifies what kind of resource this message is. This `kind` is always the fixed string "analyticsData#batchRunReports". Useful to distinguish between response types in JSON. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateBatchRunReportsResponseFormGroup() {
		return new FormGroup<BatchRunReportsResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response report table corresponding to a request. */
	export interface RunReportResponse {

		/** Describes dimension columns. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows. */
		dimensionHeaders?: Array<DimensionHeader>;

		/** Identifies what kind of resource this message is. This `kind` is always the fixed string "analyticsData#runReport". Useful to distinguish between response types in JSON. */
		kind?: string | null;

		/** If requested, the maximum values of metrics. */
		maximums?: Array<Row>;

		/** Response's metadata carrying additional information about the report content. */
		metadata?: ResponseMetaData;

		/** Describes metric columns. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows. */
		metricHeaders?: Array<MetricHeader>;

		/** If requested, the minimum values of metrics. */
		minimums?: Array<Row>;

		/** Current state of all quotas for this Analytics Property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors. */
		propertyQuota?: PropertyQuota;

		/** The total number of rows in the query result. `rowCount` is independent of the number of rows returned in the response, the `limit` request parameter, and the `offset` request parameter. For example if a query returns 175 rows and includes `limit` of 50 in the API request, the response will contain `rowCount` of 175 but only 50 rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). */
		rowCount?: number | null;

		/** Rows of dimension value combinations and metric values in the report. */
		rows?: Array<Row>;

		/** If requested, the totaled values of metrics. */
		totals?: Array<Row>;
	}

	/** The response report table corresponding to a request. */
	export interface RunReportResponseFormProperties {

		/** Identifies what kind of resource this message is. This `kind` is always the fixed string "analyticsData#runReport". Useful to distinguish between response types in JSON. */
		kind: FormControl<string | null | undefined>,

		/** The total number of rows in the query result. `rowCount` is independent of the number of rows returned in the response, the `limit` request parameter, and the `offset` request parameter. For example if a query returns 175 rows and includes `limit` of 50 in the API request, the response will contain `rowCount` of 175 but only 50 rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). */
		rowCount: FormControl<number | null | undefined>,
	}
	export function CreateRunReportResponseFormGroup() {
		return new FormGroup<RunReportResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			rowCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The request for compatibility information for a report's dimensions and metrics. Check compatibility provides a preview of the compatibility of a report; fields shared with the `runReport` request should be the same values as in your `runReport` request. */
	export interface CheckCompatibilityRequest {

		/** Filters the dimensions and metrics in the response to just this compatibility. Commonly used as `”compatibilityFilter”: “COMPATIBLE”` to only return compatible dimensions & metrics. */
		compatibilityFilter?: CheckCompatibilityRequestCompatibilityFilter | null;

		/** To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics. */
		dimensionFilter?: FilterExpression;

		/** The dimensions in this report. `dimensions` should be the same value as in your `runReport` request. */
		dimensions?: Array<Dimension>;

		/** To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics. */
		metricFilter?: FilterExpression;

		/** The metrics in this report. `metrics` should be the same value as in your `runReport` request. */
		metrics?: Array<Metric>;
	}

	/** The request for compatibility information for a report's dimensions and metrics. Check compatibility provides a preview of the compatibility of a report; fields shared with the `runReport` request should be the same values as in your `runReport` request. */
	export interface CheckCompatibilityRequestFormProperties {

		/** Filters the dimensions and metrics in the response to just this compatibility. Commonly used as `”compatibilityFilter”: “COMPATIBLE”` to only return compatible dimensions & metrics. */
		compatibilityFilter: FormControl<CheckCompatibilityRequestCompatibilityFilter | null | undefined>,
	}
	export function CreateCheckCompatibilityRequestFormGroup() {
		return new FormGroup<CheckCompatibilityRequestFormProperties>({
			compatibilityFilter: new FormControl<CheckCompatibilityRequestCompatibilityFilter | null | undefined>(undefined),
		});

	}

	export enum CheckCompatibilityRequestCompatibilityFilter { COMPATIBILITY_UNSPECIFIED = 0, COMPATIBLE = 1, INCOMPATIBLE = 2 }


	/** The compatibility response with the compatibility of each dimension & metric. */
	export interface CheckCompatibilityResponse {

		/** The compatibility of each dimension. */
		dimensionCompatibilities?: Array<DimensionCompatibility>;

		/** The compatibility of each metric. */
		metricCompatibilities?: Array<MetricCompatibility>;
	}

	/** The compatibility response with the compatibility of each dimension & metric. */
	export interface CheckCompatibilityResponseFormProperties {
	}
	export function CreateCheckCompatibilityResponseFormGroup() {
		return new FormGroup<CheckCompatibilityResponseFormProperties>({
		});

	}


	/** The compatibility for a single dimension. */
	export interface DimensionCompatibility {

		/** The compatibility of this dimension. If the compatibility is COMPATIBLE, this dimension can be successfully added to the report. */
		compatibility?: CheckCompatibilityRequestCompatibilityFilter | null;

		/** Explains a dimension. */
		dimensionMetadata?: DimensionMetadata;
	}

	/** The compatibility for a single dimension. */
	export interface DimensionCompatibilityFormProperties {

		/** The compatibility of this dimension. If the compatibility is COMPATIBLE, this dimension can be successfully added to the report. */
		compatibility: FormControl<CheckCompatibilityRequestCompatibilityFilter | null | undefined>,
	}
	export function CreateDimensionCompatibilityFormGroup() {
		return new FormGroup<DimensionCompatibilityFormProperties>({
			compatibility: new FormControl<CheckCompatibilityRequestCompatibilityFilter | null | undefined>(undefined),
		});

	}


	/** Explains a dimension. */
	export interface DimensionMetadata {

		/** This dimension's name. Useable in [Dimension](#Dimension)'s `name`. For example, `eventName`. */
		apiName?: string | null;

		/** The display name of the category that this dimension belongs to. Similar dimensions and metrics are categorized together. */
		category?: string | null;

		/** True if the dimension is a custom dimension for this property. */
		customDefinition?: boolean | null;

		/** Still usable but deprecated names for this dimension. If populated, this dimension is available by either `apiName` or one of `deprecatedApiNames` for a period of time. After the deprecation period, the dimension will be available only by `apiName`. */
		deprecatedApiNames?: Array<string>;

		/** Description of how this dimension is used and calculated. */
		description?: string | null;

		/** This dimension's name within the Google Analytics user interface. For example, `Event name`. */
		uiName?: string | null;
	}

	/** Explains a dimension. */
	export interface DimensionMetadataFormProperties {

		/** This dimension's name. Useable in [Dimension](#Dimension)'s `name`. For example, `eventName`. */
		apiName: FormControl<string | null | undefined>,

		/** The display name of the category that this dimension belongs to. Similar dimensions and metrics are categorized together. */
		category: FormControl<string | null | undefined>,

		/** True if the dimension is a custom dimension for this property. */
		customDefinition: FormControl<boolean | null | undefined>,

		/** Description of how this dimension is used and calculated. */
		description: FormControl<string | null | undefined>,

		/** This dimension's name within the Google Analytics user interface. For example, `Event name`. */
		uiName: FormControl<string | null | undefined>,
	}
	export function CreateDimensionMetadataFormGroup() {
		return new FormGroup<DimensionMetadataFormProperties>({
			apiName: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			customDefinition: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			uiName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The compatibility for a single metric. */
	export interface MetricCompatibility {

		/** The compatibility of this metric. If the compatibility is COMPATIBLE, this metric can be successfully added to the report. */
		compatibility?: CheckCompatibilityRequestCompatibilityFilter | null;

		/** Explains a metric. */
		metricMetadata?: MetricMetadata;
	}

	/** The compatibility for a single metric. */
	export interface MetricCompatibilityFormProperties {

		/** The compatibility of this metric. If the compatibility is COMPATIBLE, this metric can be successfully added to the report. */
		compatibility: FormControl<CheckCompatibilityRequestCompatibilityFilter | null | undefined>,
	}
	export function CreateMetricCompatibilityFormGroup() {
		return new FormGroup<MetricCompatibilityFormProperties>({
			compatibility: new FormControl<CheckCompatibilityRequestCompatibilityFilter | null | undefined>(undefined),
		});

	}


	/** Explains a metric. */
	export interface MetricMetadata {

		/** A metric name. Useable in [Metric](#Metric)'s `name`. For example, `eventCount`. */
		apiName?: string | null;

		/** If reasons are specified, your access is blocked to this metric for this property. API requests from you to this property for this metric will succeed; however, the report will contain only zeros for this metric. API requests with metric filters on blocked metrics will fail. If reasons are empty, you have access to this metric. To learn more, see [Access and data-restriction management](https://support.google.com/analytics/answer/10851388). */
		blockedReasons?: Array<string>;

		/** The display name of the category that this metrics belongs to. Similar dimensions and metrics are categorized together. */
		category?: string | null;

		/** True if the metric is a custom metric for this property. */
		customDefinition?: boolean | null;

		/** Still usable but deprecated names for this metric. If populated, this metric is available by either `apiName` or one of `deprecatedApiNames` for a period of time. After the deprecation period, the metric will be available only by `apiName`. */
		deprecatedApiNames?: Array<string>;

		/** Description of how this metric is used and calculated. */
		description?: string | null;

		/** The mathematical expression for this derived metric. Can be used in [Metric](#Metric)'s `expression` field for equivalent reports. Most metrics are not expressions, and for non-expressions, this field is empty. */
		expression?: string | null;

		/** The type of this metric. */
		type?: MetricHeaderType | null;

		/** This metric's name within the Google Analytics user interface. For example, `Event count`. */
		uiName?: string | null;
	}

	/** Explains a metric. */
	export interface MetricMetadataFormProperties {

		/** A metric name. Useable in [Metric](#Metric)'s `name`. For example, `eventCount`. */
		apiName: FormControl<string | null | undefined>,

		/** The display name of the category that this metrics belongs to. Similar dimensions and metrics are categorized together. */
		category: FormControl<string | null | undefined>,

		/** True if the metric is a custom metric for this property. */
		customDefinition: FormControl<boolean | null | undefined>,

		/** Description of how this metric is used and calculated. */
		description: FormControl<string | null | undefined>,

		/** The mathematical expression for this derived metric. Can be used in [Metric](#Metric)'s `expression` field for equivalent reports. Most metrics are not expressions, and for non-expressions, this field is empty. */
		expression: FormControl<string | null | undefined>,

		/** The type of this metric. */
		type: FormControl<MetricHeaderType | null | undefined>,

		/** This metric's name within the Google Analytics user interface. For example, `Event count`. */
		uiName: FormControl<string | null | undefined>,
	}
	export function CreateMetricMetadataFormGroup() {
		return new FormGroup<MetricMetadataFormProperties>({
			apiName: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			customDefinition: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<MetricHeaderType | null | undefined>(undefined),
			uiName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of all audience exports for a property. */
	export interface ListAudienceExportsResponse {

		/** Each audience export for a property. */
		audienceExports?: Array<AudienceExport>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** A list of all audience exports for a property. */
	export interface ListAudienceExportsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAudienceExportsResponseFormGroup() {
		return new FormGroup<ListAudienceExportsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The dimensions, metrics and comparisons currently accepted in reporting methods. */
	export interface Metadata {

		/** The dimension descriptions. */
		dimensions?: Array<DimensionMetadata>;

		/** The metric descriptions. */
		metrics?: Array<MetricMetadata>;

		/** Resource name of this metadata. */
		name?: string | null;
	}

	/** The dimensions, metrics and comparisons currently accepted in reporting methods. */
	export interface MetadataFormProperties {

		/** Resource name of this metadata. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateMetadataFormGroup() {
		return new FormGroup<MetadataFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A contiguous set of minutes: `startMinutesAgo`, `startMinutesAgo + 1`, ..., `endMinutesAgo`. Requests are allowed up to 2 minute ranges. */
	export interface MinuteRange {

		/** The inclusive end minute for the query as a number of minutes before now. Cannot be before `startMinutesAgo`. For example, `"endMinutesAgo": 15` specifies the report should include event data from prior to 15 minutes ago. If unspecified, `endMinutesAgo` is defaulted to 0. Standard Analytics properties can request any minute in the last 30 minutes of event data (`endMinutesAgo <= 29`), and 360 Analytics properties can request any minute in the last 60 minutes of event data (`endMinutesAgo <= 59`). */
		endMinutesAgo?: number | null;

		/** Assigns a name to this minute range. The dimension `dateRange` is valued to this name in a report response. If set, cannot begin with `date_range_` or `RESERVED_`. If not set, minute ranges are named by their zero based index in the request: `date_range_0`, `date_range_1`, etc. */
		name?: string | null;

		/** The inclusive start minute for the query as a number of minutes before now. For example, `"startMinutesAgo": 29` specifies the report should include event data from 29 minutes ago and after. Cannot be after `endMinutesAgo`. If unspecified, `startMinutesAgo` is defaulted to 29. Standard Analytics properties can request up to the last 30 minutes of event data (`startMinutesAgo <= 29`), and 360 Analytics properties can request up to the last 60 minutes of event data (`startMinutesAgo <= 59`). */
		startMinutesAgo?: number | null;
	}

	/** A contiguous set of minutes: `startMinutesAgo`, `startMinutesAgo + 1`, ..., `endMinutesAgo`. Requests are allowed up to 2 minute ranges. */
	export interface MinuteRangeFormProperties {

		/** The inclusive end minute for the query as a number of minutes before now. Cannot be before `startMinutesAgo`. For example, `"endMinutesAgo": 15` specifies the report should include event data from prior to 15 minutes ago. If unspecified, `endMinutesAgo` is defaulted to 0. Standard Analytics properties can request any minute in the last 30 minutes of event data (`endMinutesAgo <= 29`), and 360 Analytics properties can request any minute in the last 60 minutes of event data (`endMinutesAgo <= 59`). */
		endMinutesAgo: FormControl<number | null | undefined>,

		/** Assigns a name to this minute range. The dimension `dateRange` is valued to this name in a report response. If set, cannot begin with `date_range_` or `RESERVED_`. If not set, minute ranges are named by their zero based index in the request: `date_range_0`, `date_range_1`, etc. */
		name: FormControl<string | null | undefined>,

		/** The inclusive start minute for the query as a number of minutes before now. For example, `"startMinutesAgo": 29` specifies the report should include event data from 29 minutes ago and after. Cannot be after `endMinutesAgo`. If unspecified, `startMinutesAgo` is defaulted to 29. Standard Analytics properties can request up to the last 30 minutes of event data (`startMinutesAgo <= 29`), and 360 Analytics properties can request up to the last 60 minutes of event data (`startMinutesAgo <= 59`). */
		startMinutesAgo: FormControl<number | null | undefined>,
	}
	export function CreateMinuteRangeFormGroup() {
		return new FormGroup<MinuteRangeFormProperties>({
			endMinutesAgo: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startMinutesAgo: new FormControl<number | null | undefined>(undefined),
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


	/** A request to list users in an audience export. */
	export interface QueryAudienceExportRequest {

		/** Optional. The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 250,000 rows per request, no matter how many you ask for. `limit` must be positive. The API can also return fewer rows than the requested `limit`, if there aren't as many dimension values as the `limit`. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). */
		limit?: string | null;

		/** Optional. The row count of the start row. The first row is counted as row 0. When paging, the first request does not specify offset; or equivalently, sets offset to 0; the first request returns the first `limit` of rows. The second request sets offset to the `limit` of the first request; the second request returns the second `limit` of rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). */
		offset?: string | null;
	}

	/** A request to list users in an audience export. */
	export interface QueryAudienceExportRequestFormProperties {

		/** Optional. The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 250,000 rows per request, no matter how many you ask for. `limit` must be positive. The API can also return fewer rows than the requested `limit`, if there aren't as many dimension values as the `limit`. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). */
		limit: FormControl<string | null | undefined>,

		/** Optional. The row count of the start row. The first row is counted as row 0. When paging, the first request does not specify offset; or equivalently, sets offset to 0; the first request returns the first `limit` of rows. The second request sets offset to the `limit` of the first request; the second request returns the second `limit` of rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). */
		offset: FormControl<string | null | undefined>,
	}
	export function CreateQueryAudienceExportRequestFormGroup() {
		return new FormGroup<QueryAudienceExportRequestFormProperties>({
			limit: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of users in an audience export. */
	export interface QueryAudienceExportResponse {

		/** An audience export is a list of users in an audience at the time of the list's creation. One audience may have multiple audience exports created for different days. */
		audienceExport?: AudienceExport;

		/** Rows for each user in an audience export. The number of rows in this response will be less than or equal to request's page size. */
		audienceRows?: Array<V1betaAudienceRow>;

		/** The total number of rows in the AudienceExport result. `rowCount` is independent of the number of rows returned in the response, the `limit` request parameter, and the `offset` request parameter. For example if a query returns 175 rows and includes `limit` of 50 in the API request, the response will contain `rowCount` of 175 but only 50 rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). */
		rowCount?: number | null;
	}

	/** A list of users in an audience export. */
	export interface QueryAudienceExportResponseFormProperties {

		/** The total number of rows in the AudienceExport result. `rowCount` is independent of the number of rows returned in the response, the `limit` request parameter, and the `offset` request parameter. For example if a query returns 175 rows and includes `limit` of 50 in the API request, the response will contain `rowCount` of 175 but only 50 rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). */
		rowCount: FormControl<number | null | undefined>,
	}
	export function CreateQueryAudienceExportResponseFormGroup() {
		return new FormGroup<QueryAudienceExportResponseFormProperties>({
			rowCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Dimension value attributes for the audience user row. */
	export interface V1betaAudienceRow {

		/** Each dimension value attribute for an audience user. One dimension value will be added for each dimension column requested. */
		dimensionValues?: Array<V1betaAudienceDimensionValue>;
	}

	/** Dimension value attributes for the audience user row. */
	export interface V1betaAudienceRowFormProperties {
	}
	export function CreateV1betaAudienceRowFormGroup() {
		return new FormGroup<V1betaAudienceRowFormProperties>({
		});

	}


	/** The value of a dimension. */
	export interface V1betaAudienceDimensionValue {

		/** Value as a string if the dimension type is a string. */
		value?: string | null;
	}

	/** The value of a dimension. */
	export interface V1betaAudienceDimensionValueFormProperties {

		/** Value as a string if the dimension type is a string. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateV1betaAudienceDimensionValueFormGroup() {
		return new FormGroup<V1betaAudienceDimensionValueFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request to generate a realtime report. */
	export interface RunRealtimeReportRequest {

		/** To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics. */
		dimensionFilter?: FilterExpression;

		/** The dimensions requested and displayed. */
		dimensions?: Array<Dimension>;

		/** The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 250,000 rows per request, no matter how many you ask for. `limit` must be positive. The API can also return fewer rows than the requested `limit`, if there aren't as many dimension values as the `limit`. For instance, there are fewer than 300 possible values for the dimension `country`, so when reporting on only `country`, you can't get more than 300 rows, even if you set `limit` to a higher value. */
		limit?: string | null;

		/** Aggregation of metrics. Aggregated metric values will be shown in rows where the dimension_values are set to "RESERVED_(MetricAggregation)". */
		metricAggregations?: Array<string>;

		/** To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics. */
		metricFilter?: FilterExpression;

		/** The metrics requested and displayed. */
		metrics?: Array<Metric>;

		/** The minute ranges of event data to read. If unspecified, one minute range for the last 30 minutes will be used. If multiple minute ranges are requested, each response row will contain a zero based minute range index. If two minute ranges overlap, the event data for the overlapping minutes is included in the response rows for both minute ranges. */
		minuteRanges?: Array<MinuteRange>;

		/** Specifies how rows are ordered in the response. */
		orderBys?: Array<OrderBy>;

		/** Toggles whether to return the current state of this Analytics Property's Realtime quota. Quota is returned in [PropertyQuota](#PropertyQuota). */
		returnPropertyQuota?: boolean | null;
	}

	/** The request to generate a realtime report. */
	export interface RunRealtimeReportRequestFormProperties {

		/** The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 250,000 rows per request, no matter how many you ask for. `limit` must be positive. The API can also return fewer rows than the requested `limit`, if there aren't as many dimension values as the `limit`. For instance, there are fewer than 300 possible values for the dimension `country`, so when reporting on only `country`, you can't get more than 300 rows, even if you set `limit` to a higher value. */
		limit: FormControl<string | null | undefined>,

		/** Toggles whether to return the current state of this Analytics Property's Realtime quota. Quota is returned in [PropertyQuota](#PropertyQuota). */
		returnPropertyQuota: FormControl<boolean | null | undefined>,
	}
	export function CreateRunRealtimeReportRequestFormGroup() {
		return new FormGroup<RunRealtimeReportRequestFormProperties>({
			limit: new FormControl<string | null | undefined>(undefined),
			returnPropertyQuota: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The response realtime report table corresponding to a request. */
	export interface RunRealtimeReportResponse {

		/** Describes dimension columns. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows. */
		dimensionHeaders?: Array<DimensionHeader>;

		/** Identifies what kind of resource this message is. This `kind` is always the fixed string "analyticsData#runRealtimeReport". Useful to distinguish between response types in JSON. */
		kind?: string | null;

		/** If requested, the maximum values of metrics. */
		maximums?: Array<Row>;

		/** Describes metric columns. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows. */
		metricHeaders?: Array<MetricHeader>;

		/** If requested, the minimum values of metrics. */
		minimums?: Array<Row>;

		/** Current state of all quotas for this Analytics Property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors. */
		propertyQuota?: PropertyQuota;

		/** The total number of rows in the query result. `rowCount` is independent of the number of rows returned in the response and the `limit` request parameter. For example if a query returns 175 rows and includes `limit` of 50 in the API request, the response will contain `rowCount` of 175 but only 50 rows. */
		rowCount?: number | null;

		/** Rows of dimension value combinations and metric values in the report. */
		rows?: Array<Row>;

		/** If requested, the totaled values of metrics. */
		totals?: Array<Row>;
	}

	/** The response realtime report table corresponding to a request. */
	export interface RunRealtimeReportResponseFormProperties {

		/** Identifies what kind of resource this message is. This `kind` is always the fixed string "analyticsData#runRealtimeReport". Useful to distinguish between response types in JSON. */
		kind: FormControl<string | null | undefined>,

		/** The total number of rows in the query result. `rowCount` is independent of the number of rows returned in the response and the `limit` request parameter. For example if a query returns 175 rows and includes `limit` of 50 in the API request, the response will contain `rowCount` of 175 but only 50 rows. */
		rowCount: FormControl<number | null | undefined>,
	}
	export function CreateRunRealtimeReportResponseFormGroup() {
		return new FormGroup<RunRealtimeReportResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			rowCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets configuration metadata about a specific audience export. This method can be used to understand an audience export after it has been created. See [Creating an Audience Export](https://developers.google.com/analytics/devguides/reporting/data/v1/audience-list-basics) for an introduction to Audience Exports with examples. Audience Export APIs have some methods at alpha and other methods at beta stability. The intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on this API, complete the [Google Analytics Audience Export API Feedback](https://forms.gle/EeA5u5LW6PEggtCEA) form.
		 * Get v1beta/{name}
		 * @param {string} name Required. The audience export resource name. Format: `properties/{property}/audienceExports/{audience_export}`
		 * @return {AudienceExport} Successful response
		 */
		Analyticsdata_properties_audienceExports_get(name: string): Observable<AudienceExport> {
			return this.http.get<AudienceExport>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Retrieves an audience export of users. After creating an audience, the users are not immediately available for exporting. First, a request to `CreateAudienceExport` is necessary to create an audience export of users, and then second, this method is used to retrieve the users in the audience export. See [Creating an Audience Export](https://developers.google.com/analytics/devguides/reporting/data/v1/audience-list-basics) for an introduction to Audience Exports with examples. Audiences in Google Analytics 4 allow you to segment your users in the ways that are important to your business. To learn more, see https://support.google.com/analytics/answer/9267572. Audience Export APIs have some methods at alpha and other methods at beta stability. The intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on this API, complete the [Google Analytics Audience Export API Feedback](https://forms.gle/EeA5u5LW6PEggtCEA) form.
		 * Post v1beta/{name}:query
		 * @param {string} name Required. The name of the audience export to retrieve users from. Format: `properties/{property}/audienceExports/{audience_export}`
		 * @return {QueryAudienceExportResponse} Successful response
		 */
		Analyticsdata_properties_audienceExports_query(name: string, requestBody: QueryAudienceExportRequest): Observable<QueryAudienceExportResponse> {
			return this.http.post<QueryAudienceExportResponse>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + ':query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all audience exports for a property. This method can be used for you to find and reuse existing audience exports rather than creating unnecessary new audience exports. The same audience can have multiple audience exports that represent the export of users that were in an audience on different days. See [Creating an Audience Export](https://developers.google.com/analytics/devguides/reporting/data/v1/audience-list-basics) for an introduction to Audience Exports with examples. Audience Export APIs have some methods at alpha and other methods at beta stability. The intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on this API, complete the [Google Analytics Audience Export API Feedback](https://forms.gle/EeA5u5LW6PEggtCEA) form.
		 * Get v1beta/{parent}/audienceExports
		 * @param {string} parent Required. All audience exports for this property will be listed in the response. Format: `properties/{property}`
		 * @param {number} pageSize Optional. The maximum number of audience exports to return. The service may return fewer than this value. If unspecified, at most 200 audience exports will be returned. The maximum value is 1000 (higher values will be coerced to the maximum).
		 * @param {string} pageToken Optional. A page token, received from a previous `ListAudienceExports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAudienceExports` must match the call that provided the page token.
		 * @return {ListAudienceExportsResponse} Successful response
		 */
		Analyticsdata_properties_audienceExports_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAudienceExportsResponse> {
			return this.http.get<ListAudienceExportsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/audienceExports&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an audience export for later retrieval. This method quickly returns the audience export's resource name and initiates a long running asynchronous request to form an audience export. To export the users in an audience export, first create the audience export through this method and then send the audience resource name to the `QueryAudienceExport` method. See [Creating an Audience Export](https://developers.google.com/analytics/devguides/reporting/data/v1/audience-list-basics) for an introduction to Audience Exports with examples. An audience export is a snapshot of the users currently in the audience at the time of audience export creation. Creating audience exports for one audience on different days will return different results as users enter and exit the audience. Audiences in Google Analytics 4 allow you to segment your users in the ways that are important to your business. To learn more, see https://support.google.com/analytics/answer/9267572. Audience exports contain the users in each audience. Audience Export APIs have some methods at alpha and other methods at beta stability. The intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on this API, complete the [Google Analytics Audience Export API Feedback](https://forms.gle/EeA5u5LW6PEggtCEA) form.
		 * Post v1beta/{parent}/audienceExports
		 * @param {string} parent Required. The parent resource where this audience export will be created. Format: `properties/{property}`
		 * @return {Operation} Successful response
		 */
		Analyticsdata_properties_audienceExports_create(parent: string, requestBody: AudienceExport): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/audienceExports', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns multiple pivot reports in a batch. All reports must be for the same GA4 Property.
		 * Post v1beta/{property}:batchRunPivotReports
		 * @param {string} property A Google Analytics GA4 property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). This property must be specified for the batch. The property within RunPivotReportRequest may either be unspecified or consistent with this property. Example: properties/1234
		 * @return {BatchRunPivotReportsResponse} Successful response
		 */
		Analyticsdata_properties_batchRunPivotReports(property: string, requestBody: BatchRunPivotReportsRequest): Observable<BatchRunPivotReportsResponse> {
			return this.http.post<BatchRunPivotReportsResponse>(this.baseUri + 'v1beta/' + (property == null ? '' : encodeURIComponent(property)) + ':batchRunPivotReports', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns multiple reports in a batch. All reports must be for the same GA4 Property.
		 * Post v1beta/{property}:batchRunReports
		 * @param {string} property A Google Analytics GA4 property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). This property must be specified for the batch. The property within RunReportRequest may either be unspecified or consistent with this property. Example: properties/1234
		 * @return {BatchRunReportsResponse} Successful response
		 */
		Analyticsdata_properties_batchRunReports(property: string, requestBody: BatchRunReportsRequest): Observable<BatchRunReportsResponse> {
			return this.http.post<BatchRunReportsResponse>(this.baseUri + 'v1beta/' + (property == null ? '' : encodeURIComponent(property)) + ':batchRunReports', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This compatibility method lists dimensions and metrics that can be added to a report request and maintain compatibility. This method fails if the request's dimensions and metrics are incompatible. In Google Analytics, reports fail if they request incompatible dimensions and/or metrics; in that case, you will need to remove dimensions and/or metrics from the incompatible report until the report is compatible. The Realtime and Core reports have different compatibility rules. This method checks compatibility for Core reports.
		 * Post v1beta/{property}:checkCompatibility
		 * @param {string} property A Google Analytics GA4 property identifier whose events are tracked. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). `property` should be the same value as in your `runReport` request. Example: properties/1234
		 * @return {CheckCompatibilityResponse} Successful response
		 */
		Analyticsdata_properties_checkCompatibility(property: string, requestBody: CheckCompatibilityRequest): Observable<CheckCompatibilityResponse> {
			return this.http.post<CheckCompatibilityResponse>(this.baseUri + 'v1beta/' + (property == null ? '' : encodeURIComponent(property)) + ':checkCompatibility', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in a pivot. Multiple pivots can be specified to further dissect your data.
		 * Post v1beta/{property}:runPivotReport
		 * @param {string} property A Google Analytics GA4 property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Within a batch request, this property should either be unspecified or consistent with the batch-level property. Example: properties/1234
		 * @return {RunPivotReportResponse} Successful response
		 */
		Analyticsdata_properties_runPivotReport(property: string, requestBody: RunPivotReportRequest): Observable<RunPivotReportResponse> {
			return this.http.post<RunPivotReportResponse>(this.baseUri + 'v1beta/' + (property == null ? '' : encodeURIComponent(property)) + ':runPivotReport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a customized report of realtime event data for your property. Events appear in realtime reports seconds after they have been sent to the Google Analytics. Realtime reports show events and usage data for the periods of time ranging from the present moment to 30 minutes ago (up to 60 minutes for Google Analytics 360 properties). For a guide to constructing realtime requests & understanding responses, see [Creating a Realtime Report](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-basics).
		 * Post v1beta/{property}:runRealtimeReport
		 * @param {string} property A Google Analytics GA4 property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Example: properties/1234
		 * @return {RunRealtimeReportResponse} Successful response
		 */
		Analyticsdata_properties_runRealtimeReport(property: string, requestBody: RunRealtimeReportRequest): Observable<RunRealtimeReportResponse> {
			return this.http.post<RunRealtimeReportResponse>(this.baseUri + 'v1beta/' + (property == null ? '' : encodeURIComponent(property)) + ':runRealtimeReport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for the requested dimensions and metrics. Metrics are individual measurements of user activity on your property, such as active users or event count. Dimensions break down metrics across some common criteria, such as country or event name. For a guide to constructing requests & understanding responses, see [Creating a Report](https://developers.google.com/analytics/devguides/reporting/data/v1/basics).
		 * Post v1beta/{property}:runReport
		 * @param {string} property A Google Analytics GA4 property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Within a batch request, this property should either be unspecified or consistent with the batch-level property. Example: properties/1234
		 * @return {RunReportResponse} Successful response
		 */
		Analyticsdata_properties_runReport(property: string, requestBody: RunReportRequest): Observable<RunReportResponse> {
			return this.http.post<RunReportResponse>(this.baseUri + 'v1beta/' + (property == null ? '' : encodeURIComponent(property)) + ':runReport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

