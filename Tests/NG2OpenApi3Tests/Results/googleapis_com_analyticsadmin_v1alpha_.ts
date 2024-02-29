import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** To express that the result needs to be between two numbers (inclusive). */
	export interface GoogleAnalyticsAdminV1alphaAccessBetweenFilter {

		/** To represent a number. */
		fromValue?: GoogleAnalyticsAdminV1alphaNumericValue;

		/** To represent a number. */
		toValue?: GoogleAnalyticsAdminV1alphaNumericValue;
	}

	/** To express that the result needs to be between two numbers (inclusive). */
	export interface GoogleAnalyticsAdminV1alphaAccessBetweenFilterFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaAccessBetweenFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAccessBetweenFilterFormProperties>({
		});

	}


	/** To represent a number. */
	export interface GoogleAnalyticsAdminV1alphaNumericValue {

		/**
		 * Double value
		 * Type: double
		 */
		doubleValue?: number | null;

		/** Integer value */
		int64Value?: string | null;
	}

	/** To represent a number. */
	export interface GoogleAnalyticsAdminV1alphaNumericValueFormProperties {

		/**
		 * Double value
		 * Type: double
		 */
		doubleValue: FormControl<number | null | undefined>,

		/** Integer value */
		int64Value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaNumericValueFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaNumericValueFormProperties>({
			doubleValue: new FormControl<number | null | undefined>(undefined),
			int64Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A binding of a user to a set of roles. */
	export interface GoogleAnalyticsAdminV1alphaAccessBinding {

		/** Output only. Resource name of this binding. Format: accounts/{account}/accessBindings/{access_binding} or properties/{property}/accessBindings/{access_binding} Example: "accounts/100/accessBindings/200" */
		name?: string | null;

		/** A list of roles for to grant to the parent resource. Valid values: predefinedRoles/viewer predefinedRoles/analyst predefinedRoles/editor predefinedRoles/admin predefinedRoles/no-cost-data predefinedRoles/no-revenue-data For users, if an empty list of roles is set, this AccessBinding will be deleted. */
		roles?: Array<string>;

		/** If set, the email address of the user to set roles for. Format: "someuser@gmail.com" */
		user?: string | null;
	}

	/** A binding of a user to a set of roles. */
	export interface GoogleAnalyticsAdminV1alphaAccessBindingFormProperties {

		/** Output only. Resource name of this binding. Format: accounts/{account}/accessBindings/{access_binding} or properties/{property}/accessBindings/{access_binding} Example: "accounts/100/accessBindings/200" */
		name: FormControl<string | null | undefined>,

		/** If set, the email address of the user to set roles for. Format: "someuser@gmail.com" */
		user: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAccessBindingFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAccessBindingFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A contiguous range of days: startDate, startDate + 1, ..., endDate. */
	export interface GoogleAnalyticsAdminV1alphaAccessDateRange {

		/** The inclusive end date for the query in the format `YYYY-MM-DD`. Cannot be before `startDate`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the current time in the request's time zone. */
		endDate?: string | null;

		/** The inclusive start date for the query in the format `YYYY-MM-DD`. Cannot be after `endDate`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the current time in the request's time zone. */
		startDate?: string | null;
	}

	/** A contiguous range of days: startDate, startDate + 1, ..., endDate. */
	export interface GoogleAnalyticsAdminV1alphaAccessDateRangeFormProperties {

		/** The inclusive end date for the query in the format `YYYY-MM-DD`. Cannot be before `startDate`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the current time in the request's time zone. */
		endDate: FormControl<string | null | undefined>,

		/** The inclusive start date for the query in the format `YYYY-MM-DD`. Cannot be after `endDate`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the current time in the request's time zone. */
		startDate: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAccessDateRangeFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAccessDateRangeFormProperties>({
			endDate: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dimensions are attributes of your data. For example, the dimension `userEmail` indicates the email of the user that accessed reporting data. Dimension values in report responses are strings. */
	export interface GoogleAnalyticsAdminV1alphaAccessDimension {

		/** The API name of the dimension. See [Data Access Schema](https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema) for the list of dimensions supported in this API. Dimensions are referenced by name in `dimensionFilter` and `orderBys`. */
		dimensionName?: string | null;
	}

	/** Dimensions are attributes of your data. For example, the dimension `userEmail` indicates the email of the user that accessed reporting data. Dimension values in report responses are strings. */
	export interface GoogleAnalyticsAdminV1alphaAccessDimensionFormProperties {

		/** The API name of the dimension. See [Data Access Schema](https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema) for the list of dimensions supported in this API. Dimensions are referenced by name in `dimensionFilter` and `orderBys`. */
		dimensionName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAccessDimensionFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAccessDimensionFormProperties>({
			dimensionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a dimension column in the report. Dimensions requested in a report produce column entries within rows and DimensionHeaders. However, dimensions used exclusively within filters or expressions do not produce columns in a report; correspondingly, those dimensions do not produce headers. */
	export interface GoogleAnalyticsAdminV1alphaAccessDimensionHeader {

		/** The dimension's name; for example 'userEmail'. */
		dimensionName?: string | null;
	}

	/** Describes a dimension column in the report. Dimensions requested in a report produce column entries within rows and DimensionHeaders. However, dimensions used exclusively within filters or expressions do not produce columns in a report; correspondingly, those dimensions do not produce headers. */
	export interface GoogleAnalyticsAdminV1alphaAccessDimensionHeaderFormProperties {

		/** The dimension's name; for example 'userEmail'. */
		dimensionName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAccessDimensionHeaderFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAccessDimensionHeaderFormProperties>({
			dimensionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The value of a dimension. */
	export interface GoogleAnalyticsAdminV1alphaAccessDimensionValue {

		/** The dimension value. For example, this value may be 'France' for the 'country' dimension. */
		value?: string | null;
	}

	/** The value of a dimension. */
	export interface GoogleAnalyticsAdminV1alphaAccessDimensionValueFormProperties {

		/** The dimension value. For example, this value may be 'France' for the 'country' dimension. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAccessDimensionValueFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAccessDimensionValueFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An expression to filter dimension or metric values. */
	export interface GoogleAnalyticsAdminV1alphaAccessFilter {

		/** To express that the result needs to be between two numbers (inclusive). */
		betweenFilter?: GoogleAnalyticsAdminV1alphaAccessBetweenFilter;

		/** The dimension name or metric name. */
		fieldName?: string | null;

		/** The result needs to be in a list of string values. */
		inListFilter?: GoogleAnalyticsAdminV1alphaAccessInListFilter;

		/** Filters for numeric or date values. */
		numericFilter?: GoogleAnalyticsAdminV1alphaAccessNumericFilter;

		/** The filter for strings. */
		stringFilter?: GoogleAnalyticsAdminV1alphaAccessStringFilter;
	}

	/** An expression to filter dimension or metric values. */
	export interface GoogleAnalyticsAdminV1alphaAccessFilterFormProperties {

		/** The dimension name or metric name. */
		fieldName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAccessFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAccessFilterFormProperties>({
			fieldName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result needs to be in a list of string values. */
	export interface GoogleAnalyticsAdminV1alphaAccessInListFilter {

		/** If true, the string value is case sensitive. */
		caseSensitive?: boolean | null;

		/** The list of string values. Must be non-empty. */
		values?: Array<string>;
	}

	/** The result needs to be in a list of string values. */
	export interface GoogleAnalyticsAdminV1alphaAccessInListFilterFormProperties {

		/** If true, the string value is case sensitive. */
		caseSensitive: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAccessInListFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAccessInListFilterFormProperties>({
			caseSensitive: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Filters for numeric or date values. */
	export interface GoogleAnalyticsAdminV1alphaAccessNumericFilter {

		/** The operation type for this filter. */
		operation?: GoogleAnalyticsAdminV1alphaAccessNumericFilterOperation | null;

		/** To represent a number. */
		value?: GoogleAnalyticsAdminV1alphaNumericValue;
	}

	/** Filters for numeric or date values. */
	export interface GoogleAnalyticsAdminV1alphaAccessNumericFilterFormProperties {

		/** The operation type for this filter. */
		operation: FormControl<GoogleAnalyticsAdminV1alphaAccessNumericFilterOperation | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAccessNumericFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAccessNumericFilterFormProperties>({
			operation: new FormControl<GoogleAnalyticsAdminV1alphaAccessNumericFilterOperation | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1alphaAccessNumericFilterOperation { OPERATION_UNSPECIFIED = 'OPERATION_UNSPECIFIED', EQUAL = 'EQUAL', LESS_THAN = 'LESS_THAN', LESS_THAN_OR_EQUAL = 'LESS_THAN_OR_EQUAL', GREATER_THAN = 'GREATER_THAN', GREATER_THAN_OR_EQUAL = 'GREATER_THAN_OR_EQUAL' }


	/** The filter for strings. */
	export interface GoogleAnalyticsAdminV1alphaAccessStringFilter {

		/** If true, the string value is case sensitive. */
		caseSensitive?: boolean | null;

		/** The match type for this filter. */
		matchType?: GoogleAnalyticsAdminV1alphaAccessStringFilterMatchType | null;

		/** The string value used for the matching. */
		value?: string | null;
	}

	/** The filter for strings. */
	export interface GoogleAnalyticsAdminV1alphaAccessStringFilterFormProperties {

		/** If true, the string value is case sensitive. */
		caseSensitive: FormControl<boolean | null | undefined>,

		/** The match type for this filter. */
		matchType: FormControl<GoogleAnalyticsAdminV1alphaAccessStringFilterMatchType | null | undefined>,

		/** The string value used for the matching. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAccessStringFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAccessStringFilterFormProperties>({
			caseSensitive: new FormControl<boolean | null | undefined>(undefined),
			matchType: new FormControl<GoogleAnalyticsAdminV1alphaAccessStringFilterMatchType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1alphaAccessStringFilterMatchType { MATCH_TYPE_UNSPECIFIED = 'MATCH_TYPE_UNSPECIFIED', EXACT = 'EXACT', BEGINS_WITH = 'BEGINS_WITH', ENDS_WITH = 'ENDS_WITH', CONTAINS = 'CONTAINS', FULL_REGEXP = 'FULL_REGEXP', PARTIAL_REGEXP = 'PARTIAL_REGEXP' }


	/** Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics. */
	export interface GoogleAnalyticsAdminV1alphaAccessFilterExpression {

		/** An expression to filter dimension or metric values. */
		accessFilter?: GoogleAnalyticsAdminV1alphaAccessFilter;

		/** A list of filter expressions. */
		andGroup?: GoogleAnalyticsAdminV1alphaAccessFilterExpressionList;

		/** Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics. */
		notExpression?: GoogleAnalyticsAdminV1alphaAccessFilterExpression;

		/** A list of filter expressions. */
		orGroup?: GoogleAnalyticsAdminV1alphaAccessFilterExpressionList;
	}

	/** Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics. */
	export interface GoogleAnalyticsAdminV1alphaAccessFilterExpressionFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaAccessFilterExpressionFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAccessFilterExpressionFormProperties>({
		});

	}


	/** A list of filter expressions. */
	export interface GoogleAnalyticsAdminV1alphaAccessFilterExpressionList {

		/** A list of filter expressions. */
		expressions?: Array<GoogleAnalyticsAdminV1alphaAccessFilterExpression>;
	}

	/** A list of filter expressions. */
	export interface GoogleAnalyticsAdminV1alphaAccessFilterExpressionListFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaAccessFilterExpressionListFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAccessFilterExpressionListFormProperties>({
		});

	}


	/** The quantitative measurements of a report. For example, the metric `accessCount` is the total number of data access records. */
	export interface GoogleAnalyticsAdminV1alphaAccessMetric {

		/** The API name of the metric. See [Data Access Schema](https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema) for the list of metrics supported in this API. Metrics are referenced by name in `metricFilter` & `orderBys`. */
		metricName?: string | null;
	}

	/** The quantitative measurements of a report. For example, the metric `accessCount` is the total number of data access records. */
	export interface GoogleAnalyticsAdminV1alphaAccessMetricFormProperties {

		/** The API name of the metric. See [Data Access Schema](https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema) for the list of metrics supported in this API. Metrics are referenced by name in `metricFilter` & `orderBys`. */
		metricName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAccessMetricFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAccessMetricFormProperties>({
			metricName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a metric column in the report. Visible metrics requested in a report produce column entries within rows and MetricHeaders. However, metrics used exclusively within filters or expressions do not produce columns in a report; correspondingly, those metrics do not produce headers. */
	export interface GoogleAnalyticsAdminV1alphaAccessMetricHeader {

		/** The metric's name; for example 'accessCount'. */
		metricName?: string | null;
	}

	/** Describes a metric column in the report. Visible metrics requested in a report produce column entries within rows and MetricHeaders. However, metrics used exclusively within filters or expressions do not produce columns in a report; correspondingly, those metrics do not produce headers. */
	export interface GoogleAnalyticsAdminV1alphaAccessMetricHeaderFormProperties {

		/** The metric's name; for example 'accessCount'. */
		metricName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAccessMetricHeaderFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAccessMetricHeaderFormProperties>({
			metricName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The value of a metric. */
	export interface GoogleAnalyticsAdminV1alphaAccessMetricValue {

		/** The measurement value. For example, this value may be '13'. */
		value?: string | null;
	}

	/** The value of a metric. */
	export interface GoogleAnalyticsAdminV1alphaAccessMetricValueFormProperties {

		/** The measurement value. For example, this value may be '13'. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAccessMetricValueFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAccessMetricValueFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Order bys define how rows will be sorted in the response. For example, ordering rows by descending access count is one ordering, and ordering rows by the country string is a different ordering. */
	export interface GoogleAnalyticsAdminV1alphaAccessOrderBy {

		/** If true, sorts by descending order. If false or unspecified, sorts in ascending order. */
		desc?: boolean | null;

		/** Sorts by dimension values. */
		dimension?: GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy;

		/** Sorts by metric values. */
		metric?: GoogleAnalyticsAdminV1alphaAccessOrderByMetricOrderBy;
	}

	/** Order bys define how rows will be sorted in the response. For example, ordering rows by descending access count is one ordering, and ordering rows by the country string is a different ordering. */
	export interface GoogleAnalyticsAdminV1alphaAccessOrderByFormProperties {

		/** If true, sorts by descending order. If false or unspecified, sorts in ascending order. */
		desc: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAccessOrderByFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAccessOrderByFormProperties>({
			desc: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Sorts by dimension values. */
	export interface GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy {

		/** A dimension name in the request to order by. */
		dimensionName?: string | null;

		/** Controls the rule for dimension value ordering. */
		orderType?: GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderType | null;
	}

	/** Sorts by dimension values. */
	export interface GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByFormProperties {

		/** A dimension name in the request to order by. */
		dimensionName: FormControl<string | null | undefined>,

		/** Controls the rule for dimension value ordering. */
		orderType: FormControl<GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderType | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByFormProperties>({
			dimensionName: new FormControl<string | null | undefined>(undefined),
			orderType: new FormControl<GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderType | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderType { ORDER_TYPE_UNSPECIFIED = 'ORDER_TYPE_UNSPECIFIED', ALPHANUMERIC = 'ALPHANUMERIC', CASE_INSENSITIVE_ALPHANUMERIC = 'CASE_INSENSITIVE_ALPHANUMERIC', NUMERIC = 'NUMERIC' }


	/** Sorts by metric values. */
	export interface GoogleAnalyticsAdminV1alphaAccessOrderByMetricOrderBy {

		/** A metric name in the request to order by. */
		metricName?: string | null;
	}

	/** Sorts by metric values. */
	export interface GoogleAnalyticsAdminV1alphaAccessOrderByMetricOrderByFormProperties {

		/** A metric name in the request to order by. */
		metricName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAccessOrderByMetricOrderByFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAccessOrderByMetricOrderByFormProperties>({
			metricName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Current state of all quotas for this Analytics property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors. */
	export interface GoogleAnalyticsAdminV1alphaAccessQuota {

		/** Current state for a particular quota group. */
		concurrentRequests?: GoogleAnalyticsAdminV1alphaAccessQuotaStatus;

		/** Current state for a particular quota group. */
		serverErrorsPerProjectPerHour?: GoogleAnalyticsAdminV1alphaAccessQuotaStatus;

		/** Current state for a particular quota group. */
		tokensPerDay?: GoogleAnalyticsAdminV1alphaAccessQuotaStatus;

		/** Current state for a particular quota group. */
		tokensPerHour?: GoogleAnalyticsAdminV1alphaAccessQuotaStatus;

		/** Current state for a particular quota group. */
		tokensPerProjectPerHour?: GoogleAnalyticsAdminV1alphaAccessQuotaStatus;
	}

	/** Current state of all quotas for this Analytics property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors. */
	export interface GoogleAnalyticsAdminV1alphaAccessQuotaFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaAccessQuotaFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAccessQuotaFormProperties>({
		});

	}


	/** Current state for a particular quota group. */
	export interface GoogleAnalyticsAdminV1alphaAccessQuotaStatus {

		/**
		 * Quota consumed by this request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		consumed?: number | null;

		/**
		 * Quota remaining after this request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		remaining?: number | null;
	}

	/** Current state for a particular quota group. */
	export interface GoogleAnalyticsAdminV1alphaAccessQuotaStatusFormProperties {

		/**
		 * Quota consumed by this request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		consumed: FormControl<number | null | undefined>,

		/**
		 * Quota remaining after this request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		remaining: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAccessQuotaStatusFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAccessQuotaStatusFormProperties>({
			consumed: new FormControl<number | null | undefined>(undefined),
			remaining: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Access report data for each row. */
	export interface GoogleAnalyticsAdminV1alphaAccessRow {

		/** List of dimension values. These values are in the same order as specified in the request. */
		dimensionValues?: Array<GoogleAnalyticsAdminV1alphaAccessDimensionValue>;

		/** List of metric values. These values are in the same order as specified in the request. */
		metricValues?: Array<GoogleAnalyticsAdminV1alphaAccessMetricValue>;
	}

	/** Access report data for each row. */
	export interface GoogleAnalyticsAdminV1alphaAccessRowFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaAccessRowFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAccessRowFormProperties>({
		});

	}


	/** A resource message representing a Google Analytics account. */
	export interface GoogleAnalyticsAdminV1alphaAccount {

		/** Output only. Time when this account was originally created. */
		createTime?: string | null;

		/** Output only. Indicates whether this Account is soft-deleted or not. Deleted accounts are excluded from List results unless specifically requested. */
		deleted?: boolean | null;

		/** Required. Human-readable display name for this account. */
		displayName?: string | null;

		/** Output only. Resource name of this account. Format: accounts/{account} Example: "accounts/100" */
		name?: string | null;

		/** Country of business. Must be a Unicode CLDR region code. */
		regionCode?: string | null;

		/** Output only. Time when account payload fields were last updated. */
		updateTime?: string | null;
	}

	/** A resource message representing a Google Analytics account. */
	export interface GoogleAnalyticsAdminV1alphaAccountFormProperties {

		/** Output only. Time when this account was originally created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Indicates whether this Account is soft-deleted or not. Deleted accounts are excluded from List results unless specifically requested. */
		deleted: FormControl<boolean | null | undefined>,

		/** Required. Human-readable display name for this account. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Resource name of this account. Format: accounts/{account} Example: "accounts/100" */
		name: FormControl<string | null | undefined>,

		/** Country of business. Must be a Unicode CLDR region code. */
		regionCode: FormControl<string | null | undefined>,

		/** Output only. Time when account payload fields were last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAccountFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAccountFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A virtual resource representing an overview of an account and all its child GA4 properties. */
	export interface GoogleAnalyticsAdminV1alphaAccountSummary {

		/** Resource name of account referred to by this account summary Format: accounts/{account_id} Example: "accounts/1000" */
		account?: string | null;

		/** Display name for the account referred to in this account summary. */
		displayName?: string | null;

		/** Resource name for this account summary. Format: accountSummaries/{account_id} Example: "accountSummaries/1000" */
		name?: string | null;

		/** List of summaries for child accounts of this account. */
		propertySummaries?: Array<GoogleAnalyticsAdminV1alphaPropertySummary>;
	}

	/** A virtual resource representing an overview of an account and all its child GA4 properties. */
	export interface GoogleAnalyticsAdminV1alphaAccountSummaryFormProperties {

		/** Resource name of account referred to by this account summary Format: accounts/{account_id} Example: "accounts/1000" */
		account: FormControl<string | null | undefined>,

		/** Display name for the account referred to in this account summary. */
		displayName: FormControl<string | null | undefined>,

		/** Resource name for this account summary. Format: accountSummaries/{account_id} Example: "accountSummaries/1000" */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAccountSummaryFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAccountSummaryFormProperties>({
			account: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A virtual resource representing metadata for a GA4 property. */
	export interface GoogleAnalyticsAdminV1alphaPropertySummary {

		/** Display name for the property referred to in this property summary. */
		displayName?: string | null;

		/** Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account}, properties/{property} Example: "accounts/100", "properties/200" */
		parent?: string | null;

		/** Resource name of property referred to by this property summary Format: properties/{property_id} Example: "properties/1000" */
		property?: string | null;

		/** The property's property type. */
		propertyType?: GoogleAnalyticsAdminV1alphaPropertySummaryPropertyType | null;
	}

	/** A virtual resource representing metadata for a GA4 property. */
	export interface GoogleAnalyticsAdminV1alphaPropertySummaryFormProperties {

		/** Display name for the property referred to in this property summary. */
		displayName: FormControl<string | null | undefined>,

		/** Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account}, properties/{property} Example: "accounts/100", "properties/200" */
		parent: FormControl<string | null | undefined>,

		/** Resource name of property referred to by this property summary Format: properties/{property_id} Example: "properties/1000" */
		property: FormControl<string | null | undefined>,

		/** The property's property type. */
		propertyType: FormControl<GoogleAnalyticsAdminV1alphaPropertySummaryPropertyType | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaPropertySummaryFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaPropertySummaryFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			property: new FormControl<string | null | undefined>(undefined),
			propertyType: new FormControl<GoogleAnalyticsAdminV1alphaPropertySummaryPropertyType | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1alphaPropertySummaryPropertyType { PROPERTY_TYPE_UNSPECIFIED = 'PROPERTY_TYPE_UNSPECIFIED', PROPERTY_TYPE_ORDINARY = 'PROPERTY_TYPE_ORDINARY', PROPERTY_TYPE_SUBPROPERTY = 'PROPERTY_TYPE_SUBPROPERTY', PROPERTY_TYPE_ROLLUP = 'PROPERTY_TYPE_ROLLUP' }


	/** Request message for AcknowledgeUserDataCollection RPC. */
	export interface GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionRequest {

		/** Required. An acknowledgement that the caller of this method understands the terms of user data collection. This field must contain the exact value: "I acknowledge that I have the necessary privacy disclosures and rights from my end users for the collection and processing of their data, including the association of such data with the visitation information Google Analytics collects from my site and/or app property." */
		acknowledgement?: string | null;
	}

	/** Request message for AcknowledgeUserDataCollection RPC. */
	export interface GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionRequestFormProperties {

		/** Required. An acknowledgement that the caller of this method understands the terms of user data collection. This field must contain the exact value: "I acknowledge that I have the necessary privacy disclosures and rights from my end users for the collection and processing of their data, including the association of such data with the visitation information Google Analytics collects from my site and/or app property." */
		acknowledgement: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionRequestFormProperties>({
			acknowledgement: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for AcknowledgeUserDataCollection RPC. */
	export interface GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionResponse {
	}

	/** Response message for AcknowledgeUserDataCollection RPC. */
	export interface GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionResponseFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionResponseFormProperties>({
		});

	}


	/** A link between a GA4 Property and an AdSense for Content ad client. */
	export interface GoogleAnalyticsAdminV1alphaAdSenseLink {

		/** Immutable. The AdSense ad client code that the GA4 property is linked to. Example format: "ca-pub-1234567890" */
		adClientCode?: string | null;

		/** Output only. The resource name for this AdSense Link resource. Format: properties/{propertyId}/adSenseLinks/{linkId} Example: properties/1234/adSenseLinks/6789 */
		name?: string | null;
	}

	/** A link between a GA4 Property and an AdSense for Content ad client. */
	export interface GoogleAnalyticsAdminV1alphaAdSenseLinkFormProperties {

		/** Immutable. The AdSense ad client code that the GA4 property is linked to. Example format: "ca-pub-1234567890" */
		adClientCode: FormControl<string | null | undefined>,

		/** Output only. The resource name for this AdSense Link resource. Format: properties/{propertyId}/adSenseLinks/{linkId} Example: properties/1234/adSenseLinks/6789 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAdSenseLinkFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAdSenseLinkFormProperties>({
			adClientCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for ApproveDisplayVideo360AdvertiserLinkProposal RPC. */
	export interface GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalRequest {
	}

	/** Request message for ApproveDisplayVideo360AdvertiserLinkProposal RPC. */
	export interface GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalRequestFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalRequestFormProperties>({
		});

	}


	/** Response message for ApproveDisplayVideo360AdvertiserLinkProposal RPC. */
	export interface GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse {

		/** A link between a GA4 property and a Display & Video 360 advertiser. */
		displayVideo360AdvertiserLink?: GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink;
	}

	/** Response message for ApproveDisplayVideo360AdvertiserLinkProposal RPC. */
	export interface GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponseFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponseFormProperties>({
		});

	}


	/** A link between a GA4 property and a Display & Video 360 advertiser. */
	export interface GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink {

		/** Enables personalized advertising features with this integration. If this field is not set on create/update, it will be defaulted to true. */
		adsPersonalizationEnabled?: boolean | null;

		/** Output only. The display name of the Display & Video 360 Advertiser. */
		advertiserDisplayName?: string | null;

		/** Immutable. The Display & Video 360 Advertiser's advertiser ID. */
		advertiserId?: string | null;

		/** Immutable. Enables the import of campaign data from Display & Video 360 into the GA4 property. After link creation, this can only be updated from the Display & Video 360 product. If this field is not set on create, it will be defaulted to true. */
		campaignDataSharingEnabled?: boolean | null;

		/** Immutable. Enables the import of cost data from Display & Video 360 into the GA4 property. This can only be enabled if campaign_data_sharing_enabled is enabled. After link creation, this can only be updated from the Display & Video 360 product. If this field is not set on create, it will be defaulted to true. */
		costDataSharingEnabled?: boolean | null;

		/** Output only. The resource name for this DisplayVideo360AdvertiserLink resource. Format: properties/{propertyId}/displayVideo360AdvertiserLinks/{linkId} Note: linkId is not the Display & Video 360 Advertiser ID */
		name?: string | null;
	}

	/** A link between a GA4 property and a Display & Video 360 advertiser. */
	export interface GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkFormProperties {

		/** Enables personalized advertising features with this integration. If this field is not set on create/update, it will be defaulted to true. */
		adsPersonalizationEnabled: FormControl<boolean | null | undefined>,

		/** Output only. The display name of the Display & Video 360 Advertiser. */
		advertiserDisplayName: FormControl<string | null | undefined>,

		/** Immutable. The Display & Video 360 Advertiser's advertiser ID. */
		advertiserId: FormControl<string | null | undefined>,

		/** Immutable. Enables the import of campaign data from Display & Video 360 into the GA4 property. After link creation, this can only be updated from the Display & Video 360 product. If this field is not set on create, it will be defaulted to true. */
		campaignDataSharingEnabled: FormControl<boolean | null | undefined>,

		/** Immutable. Enables the import of cost data from Display & Video 360 into the GA4 property. This can only be enabled if campaign_data_sharing_enabled is enabled. After link creation, this can only be updated from the Display & Video 360 product. If this field is not set on create, it will be defaulted to true. */
		costDataSharingEnabled: FormControl<boolean | null | undefined>,

		/** Output only. The resource name for this DisplayVideo360AdvertiserLink resource. Format: properties/{propertyId}/displayVideo360AdvertiserLinks/{linkId} Note: linkId is not the Display & Video 360 Advertiser ID */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkFormProperties>({
			adsPersonalizationEnabled: new FormControl<boolean | null | undefined>(undefined),
			advertiserDisplayName: new FormControl<string | null | undefined>(undefined),
			advertiserId: new FormControl<string | null | undefined>(undefined),
			campaignDataSharingEnabled: new FormControl<boolean | null | undefined>(undefined),
			costDataSharingEnabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for ArchiveAudience RPC. */
	export interface GoogleAnalyticsAdminV1alphaArchiveAudienceRequest {
	}

	/** Request message for ArchiveAudience RPC. */
	export interface GoogleAnalyticsAdminV1alphaArchiveAudienceRequestFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaArchiveAudienceRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaArchiveAudienceRequestFormProperties>({
		});

	}


	/** Request message for ArchiveCustomDimension RPC. */
	export interface GoogleAnalyticsAdminV1alphaArchiveCustomDimensionRequest {
	}

	/** Request message for ArchiveCustomDimension RPC. */
	export interface GoogleAnalyticsAdminV1alphaArchiveCustomDimensionRequestFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaArchiveCustomDimensionRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaArchiveCustomDimensionRequestFormProperties>({
		});

	}


	/** Request message for ArchiveCustomMetric RPC. */
	export interface GoogleAnalyticsAdminV1alphaArchiveCustomMetricRequest {
	}

	/** Request message for ArchiveCustomMetric RPC. */
	export interface GoogleAnalyticsAdminV1alphaArchiveCustomMetricRequestFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaArchiveCustomMetricRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaArchiveCustomMetricRequestFormProperties>({
		});

	}


	/** The attribution settings used for a given property. This is a singleton resource. */
	export interface GoogleAnalyticsAdminV1alphaAttributionSettings {

		/** Required. The lookback window configuration for acquisition conversion events. The default window size is 30 days. */
		acquisitionConversionEventLookbackWindow?: GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindow | null;

		/** Required. The Conversion Export Scope for data exported to linked Ads Accounts. */
		adsWebConversionDataExportScope?: GoogleAnalyticsAdminV1alphaAttributionSettingsAdsWebConversionDataExportScope | null;

		/** Output only. Resource name of this attribution settings resource. Format: properties/{property_id}/attributionSettings Example: "properties/1000/attributionSettings" */
		name?: string | null;

		/** Required. The lookback window for all other, non-acquisition conversion events. The default window size is 90 days. */
		otherConversionEventLookbackWindow?: GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindow | null;

		/** Required. The reporting attribution model used to calculate conversion credit in this property's reports. Changing the attribution model will apply to both historical and future data. These changes will be reflected in reports with conversion and revenue data. User and session data will be unaffected. */
		reportingAttributionModel?: GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModel | null;
	}

	/** The attribution settings used for a given property. This is a singleton resource. */
	export interface GoogleAnalyticsAdminV1alphaAttributionSettingsFormProperties {

		/** Required. The lookback window configuration for acquisition conversion events. The default window size is 30 days. */
		acquisitionConversionEventLookbackWindow: FormControl<GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindow | null | undefined>,

		/** Required. The Conversion Export Scope for data exported to linked Ads Accounts. */
		adsWebConversionDataExportScope: FormControl<GoogleAnalyticsAdminV1alphaAttributionSettingsAdsWebConversionDataExportScope | null | undefined>,

		/** Output only. Resource name of this attribution settings resource. Format: properties/{property_id}/attributionSettings Example: "properties/1000/attributionSettings" */
		name: FormControl<string | null | undefined>,

		/** Required. The lookback window for all other, non-acquisition conversion events. The default window size is 90 days. */
		otherConversionEventLookbackWindow: FormControl<GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindow | null | undefined>,

		/** Required. The reporting attribution model used to calculate conversion credit in this property's reports. Changing the attribution model will apply to both historical and future data. These changes will be reflected in reports with conversion and revenue data. User and session data will be unaffected. */
		reportingAttributionModel: FormControl<GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModel | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAttributionSettingsFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAttributionSettingsFormProperties>({
			acquisitionConversionEventLookbackWindow: new FormControl<GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindow | null | undefined>(undefined),
			adsWebConversionDataExportScope: new FormControl<GoogleAnalyticsAdminV1alphaAttributionSettingsAdsWebConversionDataExportScope | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			otherConversionEventLookbackWindow: new FormControl<GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindow | null | undefined>(undefined),
			reportingAttributionModel: new FormControl<GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModel | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindow { ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_UNSPECIFIED = 'ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_UNSPECIFIED', ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_7_DAYS = 'ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_7_DAYS', ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_30_DAYS = 'ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_30_DAYS' }

	export enum GoogleAnalyticsAdminV1alphaAttributionSettingsAdsWebConversionDataExportScope { ADS_WEB_CONVERSION_DATA_EXPORT_SCOPE_UNSPECIFIED = 'ADS_WEB_CONVERSION_DATA_EXPORT_SCOPE_UNSPECIFIED', NOT_SELECTED_YET = 'NOT_SELECTED_YET', PAID_AND_ORGANIC_CHANNELS = 'PAID_AND_ORGANIC_CHANNELS', GOOGLE_PAID_CHANNELS = 'GOOGLE_PAID_CHANNELS' }

	export enum GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindow { OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_UNSPECIFIED = 'OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_UNSPECIFIED', OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_30_DAYS = 'OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_30_DAYS', OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_60_DAYS = 'OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_60_DAYS', OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_90_DAYS = 'OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_90_DAYS' }

	export enum GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModel { REPORTING_ATTRIBUTION_MODEL_UNSPECIFIED = 'REPORTING_ATTRIBUTION_MODEL_UNSPECIFIED', PAID_AND_ORGANIC_CHANNELS_DATA_DRIVEN = 'PAID_AND_ORGANIC_CHANNELS_DATA_DRIVEN', PAID_AND_ORGANIC_CHANNELS_LAST_CLICK = 'PAID_AND_ORGANIC_CHANNELS_LAST_CLICK', GOOGLE_PAID_CHANNELS_LAST_CLICK = 'GOOGLE_PAID_CHANNELS_LAST_CLICK' }


	/** A resource message representing a GA4 Audience. */
	export interface GoogleAnalyticsAdminV1alphaAudience {

		/** Output only. It is automatically set by GA to false if this is an NPA Audience and is excluded from ads personalization. */
		adsPersonalizationEnabled?: boolean | null;

		/** Required. The description of the Audience. */
		description?: string | null;

		/** Required. The display name of the Audience. */
		displayName?: string | null;

		/** Specifies an event to log when a user joins the Audience. */
		eventTrigger?: GoogleAnalyticsAdminV1alphaAudienceEventTrigger;

		/** Immutable. Specifies how long an exclusion lasts for users that meet the exclusion filter. It is applied to all EXCLUDE filter clauses and is ignored when there is no EXCLUDE filter clause in the Audience. */
		exclusionDurationMode?: GoogleAnalyticsAdminV1alphaAudienceExclusionDurationMode | null;

		/** Required. Immutable. Unordered list. Filter clauses that define the Audience. All clauses will be AND’ed together. */
		filterClauses?: Array<GoogleAnalyticsAdminV1alphaAudienceFilterClause>;

		/**
		 * Required. Immutable. The duration a user should stay in an Audience. It cannot be set to more than 540 days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		membershipDurationDays?: number | null;

		/** Output only. The resource name for this Audience resource. Format: properties/{propertyId}/audiences/{audienceId} */
		name?: string | null;
	}

	/** A resource message representing a GA4 Audience. */
	export interface GoogleAnalyticsAdminV1alphaAudienceFormProperties {

		/** Output only. It is automatically set by GA to false if this is an NPA Audience and is excluded from ads personalization. */
		adsPersonalizationEnabled: FormControl<boolean | null | undefined>,

		/** Required. The description of the Audience. */
		description: FormControl<string | null | undefined>,

		/** Required. The display name of the Audience. */
		displayName: FormControl<string | null | undefined>,

		/** Immutable. Specifies how long an exclusion lasts for users that meet the exclusion filter. It is applied to all EXCLUDE filter clauses and is ignored when there is no EXCLUDE filter clause in the Audience. */
		exclusionDurationMode: FormControl<GoogleAnalyticsAdminV1alphaAudienceExclusionDurationMode | null | undefined>,

		/**
		 * Required. Immutable. The duration a user should stay in an Audience. It cannot be set to more than 540 days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		membershipDurationDays: FormControl<number | null | undefined>,

		/** Output only. The resource name for this Audience resource. Format: properties/{propertyId}/audiences/{audienceId} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAudienceFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAudienceFormProperties>({
			adsPersonalizationEnabled: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			exclusionDurationMode: new FormControl<GoogleAnalyticsAdminV1alphaAudienceExclusionDurationMode | null | undefined>(undefined),
			membershipDurationDays: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies an event to log when a user joins the Audience. */
	export interface GoogleAnalyticsAdminV1alphaAudienceEventTrigger {

		/** Required. The event name that will be logged. */
		eventName?: string | null;

		/** Required. When to log the event. */
		logCondition?: GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogCondition | null;
	}

	/** Specifies an event to log when a user joins the Audience. */
	export interface GoogleAnalyticsAdminV1alphaAudienceEventTriggerFormProperties {

		/** Required. The event name that will be logged. */
		eventName: FormControl<string | null | undefined>,

		/** Required. When to log the event. */
		logCondition: FormControl<GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogCondition | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAudienceEventTriggerFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAudienceEventTriggerFormProperties>({
			eventName: new FormControl<string | null | undefined>(undefined),
			logCondition: new FormControl<GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogCondition | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogCondition { LOG_CONDITION_UNSPECIFIED = 'LOG_CONDITION_UNSPECIFIED', AUDIENCE_JOINED = 'AUDIENCE_JOINED', AUDIENCE_MEMBERSHIP_RENEWED = 'AUDIENCE_MEMBERSHIP_RENEWED' }

	export enum GoogleAnalyticsAdminV1alphaAudienceExclusionDurationMode { AUDIENCE_EXCLUSION_DURATION_MODE_UNSPECIFIED = 'AUDIENCE_EXCLUSION_DURATION_MODE_UNSPECIFIED', EXCLUDE_TEMPORARILY = 'EXCLUDE_TEMPORARILY', EXCLUDE_PERMANENTLY = 'EXCLUDE_PERMANENTLY' }


	/** A clause for defining either a simple or sequence filter. A filter can be inclusive (For example, users satisfying the filter clause are included in the Audience) or exclusive (For example, users satisfying the filter clause are excluded from the Audience). */
	export interface GoogleAnalyticsAdminV1alphaAudienceFilterClause {

		/** Required. Specifies whether this is an include or exclude filter clause. */
		clauseType?: GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseType | null;

		/** Defines filters that must occur in a specific order for the user to be a member of the Audience. */
		sequenceFilter?: GoogleAnalyticsAdminV1alphaAudienceSequenceFilter;

		/** Defines a simple filter that a user must satisfy to be a member of the Audience. */
		simpleFilter?: GoogleAnalyticsAdminV1alphaAudienceSimpleFilter;
	}

	/** A clause for defining either a simple or sequence filter. A filter can be inclusive (For example, users satisfying the filter clause are included in the Audience) or exclusive (For example, users satisfying the filter clause are excluded from the Audience). */
	export interface GoogleAnalyticsAdminV1alphaAudienceFilterClauseFormProperties {

		/** Required. Specifies whether this is an include or exclude filter clause. */
		clauseType: FormControl<GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseType | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAudienceFilterClauseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAudienceFilterClauseFormProperties>({
			clauseType: new FormControl<GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseType | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseType { AUDIENCE_CLAUSE_TYPE_UNSPECIFIED = 'AUDIENCE_CLAUSE_TYPE_UNSPECIFIED', INCLUDE = 'INCLUDE', EXCLUDE = 'EXCLUDE' }


	/** Defines filters that must occur in a specific order for the user to be a member of the Audience. */
	export interface GoogleAnalyticsAdminV1alphaAudienceSequenceFilter {

		/** Required. Immutable. Specifies the scope for this filter. */
		scope?: GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScope | null;

		/** Optional. Defines the time period in which the whole sequence must occur. */
		sequenceMaximumDuration?: string | null;

		/** Required. An ordered sequence of steps. A user must complete each step in order to join the sequence filter. */
		sequenceSteps?: Array<GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep>;
	}

	/** Defines filters that must occur in a specific order for the user to be a member of the Audience. */
	export interface GoogleAnalyticsAdminV1alphaAudienceSequenceFilterFormProperties {

		/** Required. Immutable. Specifies the scope for this filter. */
		scope: FormControl<GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScope | null | undefined>,

		/** Optional. Defines the time period in which the whole sequence must occur. */
		sequenceMaximumDuration: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAudienceSequenceFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAudienceSequenceFilterFormProperties>({
			scope: new FormControl<GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScope | null | undefined>(undefined),
			sequenceMaximumDuration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScope { AUDIENCE_FILTER_SCOPE_UNSPECIFIED = 'AUDIENCE_FILTER_SCOPE_UNSPECIFIED', AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT = 'AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT', AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION = 'AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION', AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS = 'AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS' }


	/** A condition that must occur in the specified step order for this user to match the sequence. */
	export interface GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep {

		/** Optional. When set, this step must be satisfied within the constraint_duration of the previous step (For example, t[i] - t[i-1] <= constraint_duration). If not set, there is no duration requirement (the duration is effectively unlimited). It is ignored for the first step. */
		constraintDuration?: string | null;

		/** A logical expression of Audience dimension, metric, or event filters. */
		filterExpression?: GoogleAnalyticsAdminV1alphaAudienceFilterExpression;

		/** Optional. If true, the event satisfying this step must be the very next event after the event satisfying the last step. If unset or false, this step indirectly follows the prior step; for example, there may be events between the prior step and this step. It is ignored for the first step. */
		immediatelyFollows?: boolean | null;

		/** Required. Immutable. Specifies the scope for this step. */
		scope?: GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScope | null;
	}

	/** A condition that must occur in the specified step order for this user to match the sequence. */
	export interface GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepFormProperties {

		/** Optional. When set, this step must be satisfied within the constraint_duration of the previous step (For example, t[i] - t[i-1] <= constraint_duration). If not set, there is no duration requirement (the duration is effectively unlimited). It is ignored for the first step. */
		constraintDuration: FormControl<string | null | undefined>,

		/** Optional. If true, the event satisfying this step must be the very next event after the event satisfying the last step. If unset or false, this step indirectly follows the prior step; for example, there may be events between the prior step and this step. It is ignored for the first step. */
		immediatelyFollows: FormControl<boolean | null | undefined>,

		/** Required. Immutable. Specifies the scope for this step. */
		scope: FormControl<GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScope | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepFormProperties>({
			constraintDuration: new FormControl<string | null | undefined>(undefined),
			immediatelyFollows: new FormControl<boolean | null | undefined>(undefined),
			scope: new FormControl<GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScope | null | undefined>(undefined),
		});

	}


	/** A logical expression of Audience dimension, metric, or event filters. */
	export interface GoogleAnalyticsAdminV1alphaAudienceFilterExpression {

		/** A list of Audience filter expressions. */
		andGroup?: GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList;

		/** A specific filter for a single dimension or metric. */
		dimensionOrMetricFilter?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter;

		/** A filter that matches events of a single event name. If an event parameter is specified, only the subset of events that match both the single event name and the parameter filter expressions match this event filter. */
		eventFilter?: GoogleAnalyticsAdminV1alphaAudienceEventFilter;

		/** A logical expression of Audience dimension, metric, or event filters. */
		notExpression?: GoogleAnalyticsAdminV1alphaAudienceFilterExpression;

		/** A list of Audience filter expressions. */
		orGroup?: GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList;
	}

	/** A logical expression of Audience dimension, metric, or event filters. */
	export interface GoogleAnalyticsAdminV1alphaAudienceFilterExpressionFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaAudienceFilterExpressionFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAudienceFilterExpressionFormProperties>({
		});

	}


	/** A list of Audience filter expressions. */
	export interface GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList {

		/** A list of Audience filter expressions. */
		filterExpressions?: Array<GoogleAnalyticsAdminV1alphaAudienceFilterExpression>;
	}

	/** A list of Audience filter expressions. */
	export interface GoogleAnalyticsAdminV1alphaAudienceFilterExpressionListFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaAudienceFilterExpressionListFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAudienceFilterExpressionListFormProperties>({
		});

	}


	/** A specific filter for a single dimension or metric. */
	export interface GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter {

		/** Optional. Indicates whether this filter needs dynamic evaluation or not. If set to true, users join the Audience if they ever met the condition (static evaluation). If unset or set to false, user evaluation for an Audience is dynamic; users are added to an Audience when they meet the conditions and then removed when they no longer meet them. This can only be set when Audience scope is ACROSS_ALL_SESSIONS. */
		atAnyPointInTime?: boolean | null;

		/** A filter for numeric or date values between certain values on a dimension or metric. */
		betweenFilter?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter;

		/** Required. Immutable. The dimension name or metric name to filter. If the field name refers to a custom dimension or metric, a scope prefix will be added to the front of the custom dimensions or metric name. For more on scope prefixes or custom dimensions/metrics, reference the [Google Analytics Data API documentation] (https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#custom_dimensions). */
		fieldName?: string | null;

		/**
		 * Optional. If set, specifies the time window for which to evaluate data in number of days. If not set, then audience data is evaluated against lifetime data (For example, infinite time window). For example, if set to 1 day, only the current day's data is evaluated. The reference point is the current day when at_any_point_in_time is unset or false. It can only be set when Audience scope is ACROSS_ALL_SESSIONS and cannot be greater than 60 days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		inAnyNDayPeriod?: number | null;

		/** A filter for a string dimension that matches a particular list of options. */
		inListFilter?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter;

		/** A filter for numeric or date values on a dimension or metric. */
		numericFilter?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter;

		/** A filter for a string-type dimension that matches a particular pattern. */
		stringFilter?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter;
	}

	/** A specific filter for a single dimension or metric. */
	export interface GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterFormProperties {

		/** Optional. Indicates whether this filter needs dynamic evaluation or not. If set to true, users join the Audience if they ever met the condition (static evaluation). If unset or set to false, user evaluation for an Audience is dynamic; users are added to an Audience when they meet the conditions and then removed when they no longer meet them. This can only be set when Audience scope is ACROSS_ALL_SESSIONS. */
		atAnyPointInTime: FormControl<boolean | null | undefined>,

		/** Required. Immutable. The dimension name or metric name to filter. If the field name refers to a custom dimension or metric, a scope prefix will be added to the front of the custom dimensions or metric name. For more on scope prefixes or custom dimensions/metrics, reference the [Google Analytics Data API documentation] (https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#custom_dimensions). */
		fieldName: FormControl<string | null | undefined>,

		/**
		 * Optional. If set, specifies the time window for which to evaluate data in number of days. If not set, then audience data is evaluated against lifetime data (For example, infinite time window). For example, if set to 1 day, only the current day's data is evaluated. The reference point is the current day when at_any_point_in_time is unset or false. It can only be set when Audience scope is ACROSS_ALL_SESSIONS and cannot be greater than 60 days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		inAnyNDayPeriod: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterFormProperties>({
			atAnyPointInTime: new FormControl<boolean | null | undefined>(undefined),
			fieldName: new FormControl<string | null | undefined>(undefined),
			inAnyNDayPeriod: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A filter for numeric or date values between certain values on a dimension or metric. */
	export interface GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter {

		/** To represent a number. */
		fromValue?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue;

		/** To represent a number. */
		toValue?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue;
	}

	/** A filter for numeric or date values between certain values on a dimension or metric. */
	export interface GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilterFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilterFormProperties>({
		});

	}


	/** To represent a number. */
	export interface GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue {

		/**
		 * Double value.
		 * Type: double
		 */
		doubleValue?: number | null;

		/** Integer value. */
		int64Value?: string | null;
	}

	/** To represent a number. */
	export interface GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValueFormProperties {

		/**
		 * Double value.
		 * Type: double
		 */
		doubleValue: FormControl<number | null | undefined>,

		/** Integer value. */
		int64Value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValueFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValueFormProperties>({
			doubleValue: new FormControl<number | null | undefined>(undefined),
			int64Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A filter for a string dimension that matches a particular list of options. */
	export interface GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter {

		/** Optional. If true, the match is case-sensitive. If false, the match is case-insensitive. */
		caseSensitive?: boolean | null;

		/** Required. The list of possible string values to match against. Must be non-empty. */
		values?: Array<string>;
	}

	/** A filter for a string dimension that matches a particular list of options. */
	export interface GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilterFormProperties {

		/** Optional. If true, the match is case-sensitive. If false, the match is case-insensitive. */
		caseSensitive: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilterFormProperties>({
			caseSensitive: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A filter for numeric or date values on a dimension or metric. */
	export interface GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter {

		/** Required. The operation applied to a numeric filter. */
		operation?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperation | null;

		/** To represent a number. */
		value?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue;
	}

	/** A filter for numeric or date values on a dimension or metric. */
	export interface GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterFormProperties {

		/** Required. The operation applied to a numeric filter. */
		operation: FormControl<GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperation | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterFormProperties>({
			operation: new FormControl<GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperation | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperation { OPERATION_UNSPECIFIED = 'OPERATION_UNSPECIFIED', EQUAL = 'EQUAL', LESS_THAN = 'LESS_THAN', GREATER_THAN = 'GREATER_THAN' }


	/** A filter for a string-type dimension that matches a particular pattern. */
	export interface GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter {

		/** Optional. If true, the match is case-sensitive. If false, the match is case-insensitive. */
		caseSensitive?: boolean | null;

		/** Required. The match type for the string filter. */
		matchType?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchType | null;

		/** Required. The string value to be matched against. */
		value?: string | null;
	}

	/** A filter for a string-type dimension that matches a particular pattern. */
	export interface GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterFormProperties {

		/** Optional. If true, the match is case-sensitive. If false, the match is case-insensitive. */
		caseSensitive: FormControl<boolean | null | undefined>,

		/** Required. The match type for the string filter. */
		matchType: FormControl<GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchType | null | undefined>,

		/** Required. The string value to be matched against. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterFormProperties>({
			caseSensitive: new FormControl<boolean | null | undefined>(undefined),
			matchType: new FormControl<GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchType { MATCH_TYPE_UNSPECIFIED = 'MATCH_TYPE_UNSPECIFIED', EXACT = 'EXACT', BEGINS_WITH = 'BEGINS_WITH', ENDS_WITH = 'ENDS_WITH', CONTAINS = 'CONTAINS', FULL_REGEXP = 'FULL_REGEXP' }


	/** A filter that matches events of a single event name. If an event parameter is specified, only the subset of events that match both the single event name and the parameter filter expressions match this event filter. */
	export interface GoogleAnalyticsAdminV1alphaAudienceEventFilter {

		/** Required. Immutable. The name of the event to match against. */
		eventName?: string | null;

		/** A logical expression of Audience dimension, metric, or event filters. */
		eventParameterFilterExpression?: GoogleAnalyticsAdminV1alphaAudienceFilterExpression;
	}

	/** A filter that matches events of a single event name. If an event parameter is specified, only the subset of events that match both the single event name and the parameter filter expressions match this event filter. */
	export interface GoogleAnalyticsAdminV1alphaAudienceEventFilterFormProperties {

		/** Required. Immutable. The name of the event to match against. */
		eventName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAudienceEventFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAudienceEventFilterFormProperties>({
			eventName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a simple filter that a user must satisfy to be a member of the Audience. */
	export interface GoogleAnalyticsAdminV1alphaAudienceSimpleFilter {

		/** A logical expression of Audience dimension, metric, or event filters. */
		filterExpression?: GoogleAnalyticsAdminV1alphaAudienceFilterExpression;

		/** Required. Immutable. Specifies the scope for this filter. */
		scope?: GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScope | null;
	}

	/** Defines a simple filter that a user must satisfy to be a member of the Audience. */
	export interface GoogleAnalyticsAdminV1alphaAudienceSimpleFilterFormProperties {

		/** Required. Immutable. Specifies the scope for this filter. */
		scope: FormControl<GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScope | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaAudienceSimpleFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaAudienceSimpleFilterFormProperties>({
			scope: new FormControl<GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScope | null | undefined>(undefined),
		});

	}


	/** Request message for BatchCreateAccessBindings RPC. */
	export interface GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsRequest {

		/** Required. The requests specifying the access bindings to create. A maximum of 1000 access bindings can be created in a batch. */
		requests?: Array<GoogleAnalyticsAdminV1alphaCreateAccessBindingRequest>;
	}

	/** Request message for BatchCreateAccessBindings RPC. */
	export interface GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsRequestFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsRequestFormProperties>({
		});

	}


	/** Request message for CreateAccessBinding RPC. */
	export interface GoogleAnalyticsAdminV1alphaCreateAccessBindingRequest {

		/** A binding of a user to a set of roles. */
		accessBinding?: GoogleAnalyticsAdminV1alphaAccessBinding;

		/** Required. Formats: - accounts/{account} - properties/{property} */
		parent?: string | null;
	}

	/** Request message for CreateAccessBinding RPC. */
	export interface GoogleAnalyticsAdminV1alphaCreateAccessBindingRequestFormProperties {

		/** Required. Formats: - accounts/{account} - properties/{property} */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaCreateAccessBindingRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaCreateAccessBindingRequestFormProperties>({
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for BatchCreateAccessBindings RPC. */
	export interface GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse {

		/** The access bindings created. */
		accessBindings?: Array<GoogleAnalyticsAdminV1alphaAccessBinding>;
	}

	/** Response message for BatchCreateAccessBindings RPC. */
	export interface GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponseFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponseFormProperties>({
		});

	}


	/** Request message for BatchDeleteAccessBindings RPC. */
	export interface GoogleAnalyticsAdminV1alphaBatchDeleteAccessBindingsRequest {

		/** Required. The requests specifying the access bindings to delete. A maximum of 1000 access bindings can be deleted in a batch. */
		requests?: Array<GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest>;
	}

	/** Request message for BatchDeleteAccessBindings RPC. */
	export interface GoogleAnalyticsAdminV1alphaBatchDeleteAccessBindingsRequestFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaBatchDeleteAccessBindingsRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaBatchDeleteAccessBindingsRequestFormProperties>({
		});

	}


	/** Request message for DeleteAccessBinding RPC. */
	export interface GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest {

		/** Required. Formats: - accounts/{account}/accessBindings/{accessBinding} - properties/{property}/accessBindings/{accessBinding} */
		name?: string | null;
	}

	/** Request message for DeleteAccessBinding RPC. */
	export interface GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequestFormProperties {

		/** Required. Formats: - accounts/{account}/accessBindings/{accessBinding} - properties/{property}/accessBindings/{accessBinding} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaDeleteAccessBindingRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for BatchGetAccessBindings RPC. */
	export interface GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse {

		/** The requested access bindings. */
		accessBindings?: Array<GoogleAnalyticsAdminV1alphaAccessBinding>;
	}

	/** Response message for BatchGetAccessBindings RPC. */
	export interface GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponseFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponseFormProperties>({
		});

	}


	/** Request message for BatchUpdateAccessBindings RPC. */
	export interface GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequest {

		/** Required. The requests specifying the access bindings to update. A maximum of 1000 access bindings can be updated in a batch. */
		requests?: Array<GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequest>;
	}

	/** Request message for BatchUpdateAccessBindings RPC. */
	export interface GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequestFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequestFormProperties>({
		});

	}


	/** Request message for UpdateAccessBinding RPC. */
	export interface GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequest {

		/** A binding of a user to a set of roles. */
		accessBinding?: GoogleAnalyticsAdminV1alphaAccessBinding;
	}

	/** Request message for UpdateAccessBinding RPC. */
	export interface GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequestFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaUpdateAccessBindingRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequestFormProperties>({
		});

	}


	/** Response message for BatchUpdateAccessBindings RPC. */
	export interface GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse {

		/** The access bindings updated. */
		accessBindings?: Array<GoogleAnalyticsAdminV1alphaAccessBinding>;
	}

	/** Response message for BatchUpdateAccessBindings RPC. */
	export interface GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponseFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponseFormProperties>({
		});

	}


	/** A link between a GA4 Property and BigQuery project. */
	export interface GoogleAnalyticsAdminV1alphaBigQueryLink {

		/** Output only. Time when the link was created. */
		createTime?: string | null;

		/** If set true, enables daily data export to the linked Google Cloud project. */
		dailyExportEnabled?: boolean | null;

		/** The list of event names that will be excluded from exports. */
		excludedEvents?: Array<string>;

		/** The list of streams under the parent property for which data will be exported. Format: properties/{property_id}/dataStreams/{stream_id} Example: ['properties/1000/dataStreams/2000'] */
		exportStreams?: Array<string>;

		/** If set true, enables fresh daily export to the linked Google Cloud project. */
		freshDailyExportEnabled?: boolean | null;

		/** If set true, exported data will include advertising identifiers for mobile app streams. */
		includeAdvertisingId?: boolean | null;

		/** Output only. Resource name of this BigQuery link. Format: 'properties/{property_id}/bigQueryLinks/{bigquery_link_id}' Format: 'properties/1234/bigQueryLinks/abc567' */
		name?: string | null;

		/** Immutable. The linked Google Cloud project. When creating a BigQueryLink, you may provide this resource name using either a project number or project ID. Once this resource has been created, the returned project will always have a project that contains a project number. Format: 'projects/{project number}' Example: 'projects/1234' */
		project?: string | null;

		/** If set true, enables streaming export to the linked Google Cloud project. */
		streamingExportEnabled?: boolean | null;
	}

	/** A link between a GA4 Property and BigQuery project. */
	export interface GoogleAnalyticsAdminV1alphaBigQueryLinkFormProperties {

		/** Output only. Time when the link was created. */
		createTime: FormControl<string | null | undefined>,

		/** If set true, enables daily data export to the linked Google Cloud project. */
		dailyExportEnabled: FormControl<boolean | null | undefined>,

		/** If set true, enables fresh daily export to the linked Google Cloud project. */
		freshDailyExportEnabled: FormControl<boolean | null | undefined>,

		/** If set true, exported data will include advertising identifiers for mobile app streams. */
		includeAdvertisingId: FormControl<boolean | null | undefined>,

		/** Output only. Resource name of this BigQuery link. Format: 'properties/{property_id}/bigQueryLinks/{bigquery_link_id}' Format: 'properties/1234/bigQueryLinks/abc567' */
		name: FormControl<string | null | undefined>,

		/** Immutable. The linked Google Cloud project. When creating a BigQueryLink, you may provide this resource name using either a project number or project ID. Once this resource has been created, the returned project will always have a project that contains a project number. Format: 'projects/{project number}' Example: 'projects/1234' */
		project: FormControl<string | null | undefined>,

		/** If set true, enables streaming export to the linked Google Cloud project. */
		streamingExportEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaBigQueryLinkFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaBigQueryLinkFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			dailyExportEnabled: new FormControl<boolean | null | undefined>(undefined),
			freshDailyExportEnabled: new FormControl<boolean | null | undefined>(undefined),
			includeAdvertisingId: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			streamingExportEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request message for CancelDisplayVideo360AdvertiserLinkProposal RPC. */
	export interface GoogleAnalyticsAdminV1alphaCancelDisplayVideo360AdvertiserLinkProposalRequest {
	}

	/** Request message for CancelDisplayVideo360AdvertiserLinkProposal RPC. */
	export interface GoogleAnalyticsAdminV1alphaCancelDisplayVideo360AdvertiserLinkProposalRequestFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaCancelDisplayVideo360AdvertiserLinkProposalRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaCancelDisplayVideo360AdvertiserLinkProposalRequestFormProperties>({
		});

	}


	/** A description of a change to a single Google Analytics resource. */
	export interface GoogleAnalyticsAdminV1alphaChangeHistoryChange {

		/** The type of action that changed this resource. */
		action?: GoogleAnalyticsAdminV1alphaChangeHistoryChangeAction | null;

		/** Resource name of the resource whose changes are described by this entry. */
		resource?: string | null;

		/** A snapshot of a resource as before or after the result of a change in change history. */
		resourceAfterChange?: GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource;

		/** A snapshot of a resource as before or after the result of a change in change history. */
		resourceBeforeChange?: GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource;
	}

	/** A description of a change to a single Google Analytics resource. */
	export interface GoogleAnalyticsAdminV1alphaChangeHistoryChangeFormProperties {

		/** The type of action that changed this resource. */
		action: FormControl<GoogleAnalyticsAdminV1alphaChangeHistoryChangeAction | null | undefined>,

		/** Resource name of the resource whose changes are described by this entry. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaChangeHistoryChangeFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaChangeHistoryChangeFormProperties>({
			action: new FormControl<GoogleAnalyticsAdminV1alphaChangeHistoryChangeAction | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1alphaChangeHistoryChangeAction { ACTION_TYPE_UNSPECIFIED = 'ACTION_TYPE_UNSPECIFIED', CREATED = 'CREATED', UPDATED = 'UPDATED', DELETED = 'DELETED' }


	/** A snapshot of a resource as before or after the result of a change in change history. */
	export interface GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource {

		/** A resource message representing a Google Analytics account. */
		account?: GoogleAnalyticsAdminV1alphaAccount;

		/** A link between a GA4 Property and an AdSense for Content ad client. */
		adsenseLink?: GoogleAnalyticsAdminV1alphaAdSenseLink;

		/** The attribution settings used for a given property. This is a singleton resource. */
		attributionSettings?: GoogleAnalyticsAdminV1alphaAttributionSettings;

		/** A resource message representing a GA4 Audience. */
		audience?: GoogleAnalyticsAdminV1alphaAudience;

		/** A link between a GA4 Property and BigQuery project. */
		bigqueryLink?: GoogleAnalyticsAdminV1alphaBigQueryLink;

		/** A resource message representing a Channel Group. */
		channelGroup?: GoogleAnalyticsAdminV1alphaChannelGroup;

		/** A conversion event in a Google Analytics property. */
		conversionEvent?: GoogleAnalyticsAdminV1alphaConversionEvent;

		/** A definition for a CustomDimension. */
		customDimension?: GoogleAnalyticsAdminV1alphaCustomDimension;

		/** A definition for a custom metric. */
		customMetric?: GoogleAnalyticsAdminV1alphaCustomMetric;

		/** Settings for client-side data redaction. Singleton resource under a Web Stream. */
		dataRedactionSettings?: GoogleAnalyticsAdminV1alphaDataRedactionSettings;

		/** Settings values for data retention. This is a singleton resource. */
		dataRetentionSettings?: GoogleAnalyticsAdminV1alphaDataRetentionSettings;

		/** A resource message representing a data stream. */
		dataStream?: GoogleAnalyticsAdminV1alphaDataStream;

		/** A link between a GA4 property and a Display & Video 360 advertiser. */
		displayVideo360AdvertiserLink?: GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink;

		/** A proposal for a link between a GA4 property and a Display & Video 360 advertiser. A proposal is converted to a DisplayVideo360AdvertiserLink once approved. Google Analytics admins approve inbound proposals while Display & Video 360 admins approve outbound proposals. */
		displayVideo360AdvertiserLinkProposal?: GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal;

		/** Singleton resource under a web DataStream, configuring measurement of additional site interactions and content. */
		enhancedMeasurementSettings?: GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings;

		/** An Event Create Rule defines conditions that will trigger the creation of an entirely new event based upon matched criteria of a source event. Additional mutations of the parameters from the source event can be defined. Unlike Event Edit rules, Event Creation Rules have no defined order. They will all be run independently. Event Edit and Event Create rules can't be used to modify an event created from an Event Create rule. */
		eventCreateRule?: GoogleAnalyticsAdminV1alphaEventCreateRule;

		/** A resource message representing a GA4 ExpandedDataSet. */
		expandedDataSet?: GoogleAnalyticsAdminV1alphaExpandedDataSet;

		/** A link between a GA4 property and a Firebase project. */
		firebaseLink?: GoogleAnalyticsAdminV1alphaFirebaseLink;

		/** A link between a GA4 property and a Google Ads account. */
		googleAdsLink?: GoogleAnalyticsAdminV1alphaGoogleAdsLink;

		/** Settings values for Google Signals. This is a singleton resource. */
		googleSignalsSettings?: GoogleAnalyticsAdminV1alphaGoogleSignalsSettings;

		/** A secret value used for sending hits to Measurement Protocol. */
		measurementProtocolSecret?: GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret;

		/** A resource message representing a Google Analytics GA4 property. */
		property?: GoogleAnalyticsAdminV1alphaProperty;

		/** A link between a GA4 property and a Search Ads 360 entity. */
		searchAds360Link?: GoogleAnalyticsAdminV1alphaSearchAds360Link;

		/** SKAdNetwork conversion value schema of an iOS stream. */
		skadnetworkConversionValueSchema?: GoogleAnalyticsAdminV1alphaSKAdNetworkConversionValueSchema;
	}

	/** A snapshot of a resource as before or after the result of a change in change history. */
	export interface GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResourceFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResourceFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResourceFormProperties>({
		});

	}


	/** A resource message representing a Channel Group. */
	export interface GoogleAnalyticsAdminV1alphaChannelGroup {

		/** The description of the Channel Group. Max length of 256 characters. */
		description?: string | null;

		/** Required. The display name of the Channel Group. Max length of 80 characters. */
		displayName?: string | null;

		/** Required. The grouping rules of channels. Maximum number of rules is 50. */
		groupingRule?: Array<GoogleAnalyticsAdminV1alphaGroupingRule>;

		/** Output only. The resource name for this Channel Group resource. Format: properties/{property}/channelGroups/{channel_group} */
		name?: string | null;

		/** Output only. If true, then this channel group is the Default Channel Group predefined by Google Analytics. Display name and grouping rules cannot be updated for this channel group. */
		systemDefined?: boolean | null;
	}

	/** A resource message representing a Channel Group. */
	export interface GoogleAnalyticsAdminV1alphaChannelGroupFormProperties {

		/** The description of the Channel Group. Max length of 256 characters. */
		description: FormControl<string | null | undefined>,

		/** Required. The display name of the Channel Group. Max length of 80 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The resource name for this Channel Group resource. Format: properties/{property}/channelGroups/{channel_group} */
		name: FormControl<string | null | undefined>,

		/** Output only. If true, then this channel group is the Default Channel Group predefined by Google Analytics. Display name and grouping rules cannot be updated for this channel group. */
		systemDefined: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaChannelGroupFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaChannelGroupFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			systemDefined: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The rules that govern how traffic is grouped into one channel. */
	export interface GoogleAnalyticsAdminV1alphaGroupingRule {

		/** Required. Customer defined display name for the channel. */
		displayName?: string | null;

		/** A logical expression of Channel Group dimension filters. */
		expression?: GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression;
	}

	/** The rules that govern how traffic is grouped into one channel. */
	export interface GoogleAnalyticsAdminV1alphaGroupingRuleFormProperties {

		/** Required. Customer defined display name for the channel. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaGroupingRuleFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaGroupingRuleFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A logical expression of Channel Group dimension filters. */
	export interface GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression {

		/** A list of Channel Group filter expressions. */
		andGroup?: GoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionList;

		/** A specific filter for a single dimension. */
		filter?: GoogleAnalyticsAdminV1alphaChannelGroupFilter;

		/** A logical expression of Channel Group dimension filters. */
		notExpression?: GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression;

		/** A list of Channel Group filter expressions. */
		orGroup?: GoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionList;
	}

	/** A logical expression of Channel Group dimension filters. */
	export interface GoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionFormProperties>({
		});

	}


	/** A list of Channel Group filter expressions. */
	export interface GoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionList {

		/** A list of Channel Group filter expressions. */
		filterExpressions?: Array<GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression>;
	}

	/** A list of Channel Group filter expressions. */
	export interface GoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionListFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionListFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionListFormProperties>({
		});

	}


	/** A specific filter for a single dimension. */
	export interface GoogleAnalyticsAdminV1alphaChannelGroupFilter {

		/** Required. Immutable. The dimension name to filter. */
		fieldName?: string | null;

		/** A filter for a string dimension that matches a particular list of options. The match is case insensitive. */
		inListFilter?: GoogleAnalyticsAdminV1alphaChannelGroupFilterInListFilter;

		/** Filter where the field value is a String. The match is case insensitive. */
		stringFilter?: GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilter;
	}

	/** A specific filter for a single dimension. */
	export interface GoogleAnalyticsAdminV1alphaChannelGroupFilterFormProperties {

		/** Required. Immutable. The dimension name to filter. */
		fieldName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaChannelGroupFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaChannelGroupFilterFormProperties>({
			fieldName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A filter for a string dimension that matches a particular list of options. The match is case insensitive. */
	export interface GoogleAnalyticsAdminV1alphaChannelGroupFilterInListFilter {

		/** Required. The list of possible string values to match against. Must be non-empty. */
		values?: Array<string>;
	}

	/** A filter for a string dimension that matches a particular list of options. The match is case insensitive. */
	export interface GoogleAnalyticsAdminV1alphaChannelGroupFilterInListFilterFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaChannelGroupFilterInListFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaChannelGroupFilterInListFilterFormProperties>({
		});

	}


	/** Filter where the field value is a String. The match is case insensitive. */
	export interface GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilter {

		/** Required. The match type for the string filter. */
		matchType?: GoogleAnalyticsAdminV1alphaAccessStringFilterMatchType | null;

		/** Required. The string value to be matched against. */
		value?: string | null;
	}

	/** Filter where the field value is a String. The match is case insensitive. */
	export interface GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilterFormProperties {

		/** Required. The match type for the string filter. */
		matchType: FormControl<GoogleAnalyticsAdminV1alphaAccessStringFilterMatchType | null | undefined>,

		/** Required. The string value to be matched against. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilterFormProperties>({
			matchType: new FormControl<GoogleAnalyticsAdminV1alphaAccessStringFilterMatchType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A conversion event in a Google Analytics property. */
	export interface GoogleAnalyticsAdminV1alphaConversionEvent {

		/** Optional. The method by which conversions will be counted across multiple events within a session. If this value is not provided, it will be set to `ONCE_PER_EVENT`. */
		countingMethod?: GoogleAnalyticsAdminV1alphaConversionEventCountingMethod | null;

		/** Output only. Time when this conversion event was created in the property. */
		createTime?: string | null;

		/** Output only. If set to true, this conversion event refers to a custom event. If set to false, this conversion event refers to a default event in GA. Default events typically have special meaning in GA. Default events are usually created for you by the GA system, but in some cases can be created by property admins. Custom events count towards the maximum number of custom conversion events that may be created per property. */
		custom?: boolean | null;

		/** Defines a default value/currency for a conversion event. Both value and currency must be provided. */
		defaultConversionValue?: GoogleAnalyticsAdminV1alphaConversionEventDefaultConversionValue;

		/** Output only. If set, this event can currently be deleted with DeleteConversionEvent. */
		deletable?: boolean | null;

		/** Immutable. The event name for this conversion event. Examples: 'click', 'purchase' */
		eventName?: string | null;

		/** Output only. Resource name of this conversion event. Format: properties/{property}/conversionEvents/{conversion_event} */
		name?: string | null;
	}

	/** A conversion event in a Google Analytics property. */
	export interface GoogleAnalyticsAdminV1alphaConversionEventFormProperties {

		/** Optional. The method by which conversions will be counted across multiple events within a session. If this value is not provided, it will be set to `ONCE_PER_EVENT`. */
		countingMethod: FormControl<GoogleAnalyticsAdminV1alphaConversionEventCountingMethod | null | undefined>,

		/** Output only. Time when this conversion event was created in the property. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. If set to true, this conversion event refers to a custom event. If set to false, this conversion event refers to a default event in GA. Default events typically have special meaning in GA. Default events are usually created for you by the GA system, but in some cases can be created by property admins. Custom events count towards the maximum number of custom conversion events that may be created per property. */
		custom: FormControl<boolean | null | undefined>,

		/** Output only. If set, this event can currently be deleted with DeleteConversionEvent. */
		deletable: FormControl<boolean | null | undefined>,

		/** Immutable. The event name for this conversion event. Examples: 'click', 'purchase' */
		eventName: FormControl<string | null | undefined>,

		/** Output only. Resource name of this conversion event. Format: properties/{property}/conversionEvents/{conversion_event} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaConversionEventFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaConversionEventFormProperties>({
			countingMethod: new FormControl<GoogleAnalyticsAdminV1alphaConversionEventCountingMethod | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			custom: new FormControl<boolean | null | undefined>(undefined),
			deletable: new FormControl<boolean | null | undefined>(undefined),
			eventName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1alphaConversionEventCountingMethod { CONVERSION_COUNTING_METHOD_UNSPECIFIED = 'CONVERSION_COUNTING_METHOD_UNSPECIFIED', ONCE_PER_EVENT = 'ONCE_PER_EVENT', ONCE_PER_SESSION = 'ONCE_PER_SESSION' }


	/** Defines a default value/currency for a conversion event. Both value and currency must be provided. */
	export interface GoogleAnalyticsAdminV1alphaConversionEventDefaultConversionValue {

		/** When a conversion event for this event_name has no set currency, this currency will be applied as the default. Must be in ISO 4217 currency code format. See https://en.wikipedia.org/wiki/ISO_4217 for more information. */
		currencyCode?: string | null;

		/**
		 * This value will be used to populate the value for all conversions of the specified event_name where the event "value" parameter is unset.
		 * Type: double
		 */
		value?: number | null;
	}

	/** Defines a default value/currency for a conversion event. Both value and currency must be provided. */
	export interface GoogleAnalyticsAdminV1alphaConversionEventDefaultConversionValueFormProperties {

		/** When a conversion event for this event_name has no set currency, this currency will be applied as the default. Must be in ISO 4217 currency code format. See https://en.wikipedia.org/wiki/ISO_4217 for more information. */
		currencyCode: FormControl<string | null | undefined>,

		/**
		 * This value will be used to populate the value for all conversions of the specified event_name where the event "value" parameter is unset.
		 * Type: double
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaConversionEventDefaultConversionValueFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaConversionEventDefaultConversionValueFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A definition for a CustomDimension. */
	export interface GoogleAnalyticsAdminV1alphaCustomDimension {

		/** Optional. Description for this custom dimension. Max length of 150 characters. */
		description?: string | null;

		/** Optional. If set to true, sets this dimension as NPA and excludes it from ads personalization. This is currently only supported by user-scoped custom dimensions. */
		disallowAdsPersonalization?: boolean | null;

		/** Required. Display name for this custom dimension as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets. */
		displayName?: string | null;

		/** Output only. Resource name for this CustomDimension resource. Format: properties/{property}/customDimensions/{customDimension} */
		name?: string | null;

		/** Required. Immutable. Tagging parameter name for this custom dimension. If this is a user-scoped dimension, then this is the user property name. If this is an event-scoped dimension, then this is the event parameter name. If this is an item-scoped dimension, then this is the parameter name found in the eCommerce items array. May only contain alphanumeric and underscore characters, starting with a letter. Max length of 24 characters for user-scoped dimensions, 40 characters for event-scoped dimensions. */
		parameterName?: string | null;

		/** Required. Immutable. The scope of this dimension. */
		scope?: GoogleAnalyticsAdminV1alphaCustomDimensionScope | null;
	}

	/** A definition for a CustomDimension. */
	export interface GoogleAnalyticsAdminV1alphaCustomDimensionFormProperties {

		/** Optional. Description for this custom dimension. Max length of 150 characters. */
		description: FormControl<string | null | undefined>,

		/** Optional. If set to true, sets this dimension as NPA and excludes it from ads personalization. This is currently only supported by user-scoped custom dimensions. */
		disallowAdsPersonalization: FormControl<boolean | null | undefined>,

		/** Required. Display name for this custom dimension as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Resource name for this CustomDimension resource. Format: properties/{property}/customDimensions/{customDimension} */
		name: FormControl<string | null | undefined>,

		/** Required. Immutable. Tagging parameter name for this custom dimension. If this is a user-scoped dimension, then this is the user property name. If this is an event-scoped dimension, then this is the event parameter name. If this is an item-scoped dimension, then this is the parameter name found in the eCommerce items array. May only contain alphanumeric and underscore characters, starting with a letter. Max length of 24 characters for user-scoped dimensions, 40 characters for event-scoped dimensions. */
		parameterName: FormControl<string | null | undefined>,

		/** Required. Immutable. The scope of this dimension. */
		scope: FormControl<GoogleAnalyticsAdminV1alphaCustomDimensionScope | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaCustomDimensionFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaCustomDimensionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			disallowAdsPersonalization: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parameterName: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<GoogleAnalyticsAdminV1alphaCustomDimensionScope | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1alphaCustomDimensionScope { DIMENSION_SCOPE_UNSPECIFIED = 'DIMENSION_SCOPE_UNSPECIFIED', EVENT = 'EVENT', USER = 'USER', ITEM = 'ITEM' }


	/** A definition for a custom metric. */
	export interface GoogleAnalyticsAdminV1alphaCustomMetric {

		/** Optional. Description for this custom dimension. Max length of 150 characters. */
		description?: string | null;

		/** Required. Display name for this custom metric as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets. */
		displayName?: string | null;

		/** Required. The type for the custom metric's value. */
		measurementUnit?: GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnit | null;

		/** Output only. Resource name for this CustomMetric resource. Format: properties/{property}/customMetrics/{customMetric} */
		name?: string | null;

		/** Required. Immutable. Tagging name for this custom metric. If this is an event-scoped metric, then this is the event parameter name. May only contain alphanumeric and underscore charactes, starting with a letter. Max length of 40 characters for event-scoped metrics. */
		parameterName?: string | null;

		/** Optional. Types of restricted data that this metric may contain. Required for metrics with CURRENCY measurement unit. Must be empty for metrics with a non-CURRENCY measurement unit. */
		restrictedMetricType?: Array<string>;

		/** Required. Immutable. The scope of this custom metric. */
		scope?: GoogleAnalyticsAdminV1alphaCustomMetricScope | null;
	}

	/** A definition for a custom metric. */
	export interface GoogleAnalyticsAdminV1alphaCustomMetricFormProperties {

		/** Optional. Description for this custom dimension. Max length of 150 characters. */
		description: FormControl<string | null | undefined>,

		/** Required. Display name for this custom metric as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets. */
		displayName: FormControl<string | null | undefined>,

		/** Required. The type for the custom metric's value. */
		measurementUnit: FormControl<GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnit | null | undefined>,

		/** Output only. Resource name for this CustomMetric resource. Format: properties/{property}/customMetrics/{customMetric} */
		name: FormControl<string | null | undefined>,

		/** Required. Immutable. Tagging name for this custom metric. If this is an event-scoped metric, then this is the event parameter name. May only contain alphanumeric and underscore charactes, starting with a letter. Max length of 40 characters for event-scoped metrics. */
		parameterName: FormControl<string | null | undefined>,

		/** Required. Immutable. The scope of this custom metric. */
		scope: FormControl<GoogleAnalyticsAdminV1alphaCustomMetricScope | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaCustomMetricFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaCustomMetricFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			measurementUnit: new FormControl<GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnit | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parameterName: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<GoogleAnalyticsAdminV1alphaCustomMetricScope | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnit { MEASUREMENT_UNIT_UNSPECIFIED = 'MEASUREMENT_UNIT_UNSPECIFIED', STANDARD = 'STANDARD', CURRENCY = 'CURRENCY', FEET = 'FEET', METERS = 'METERS', KILOMETERS = 'KILOMETERS', MILES = 'MILES', MILLISECONDS = 'MILLISECONDS', SECONDS = 'SECONDS', MINUTES = 'MINUTES', HOURS = 'HOURS' }

	export enum GoogleAnalyticsAdminV1alphaCustomMetricScope { METRIC_SCOPE_UNSPECIFIED = 'METRIC_SCOPE_UNSPECIFIED', EVENT = 'EVENT' }


	/** Settings for client-side data redaction. Singleton resource under a Web Stream. */
	export interface GoogleAnalyticsAdminV1alphaDataRedactionSettings {

		/** If enabled, any event parameter or user property values that look like an email will be redacted. */
		emailRedactionEnabled?: boolean | null;

		/** Output only. Name of this Data Redaction Settings resource. Format: properties/{property_id}/dataStreams/{data_stream}/dataRedactionSettings Example: "properties/1000/dataStreams/2000/dataRedactionSettings" */
		name?: string | null;

		/** The query parameter keys to apply redaction logic to if present in the URL. Query parameter matching is case-insensitive. Must contain at least one element if query_parameter_replacement_enabled is true. Keys cannot contain commas. */
		queryParameterKeys?: Array<string>;

		/** Query Parameter redaction removes the key and value portions of a query parameter if it is in the configured set of query parameters. If enabled, URL query replacement logic will be run for the Stream. Any query parameters defined in query_parameter_keys will be redacted. */
		queryParameterRedactionEnabled?: boolean | null;
	}

	/** Settings for client-side data redaction. Singleton resource under a Web Stream. */
	export interface GoogleAnalyticsAdminV1alphaDataRedactionSettingsFormProperties {

		/** If enabled, any event parameter or user property values that look like an email will be redacted. */
		emailRedactionEnabled: FormControl<boolean | null | undefined>,

		/** Output only. Name of this Data Redaction Settings resource. Format: properties/{property_id}/dataStreams/{data_stream}/dataRedactionSettings Example: "properties/1000/dataStreams/2000/dataRedactionSettings" */
		name: FormControl<string | null | undefined>,

		/** Query Parameter redaction removes the key and value portions of a query parameter if it is in the configured set of query parameters. If enabled, URL query replacement logic will be run for the Stream. Any query parameters defined in query_parameter_keys will be redacted. */
		queryParameterRedactionEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaDataRedactionSettingsFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaDataRedactionSettingsFormProperties>({
			emailRedactionEnabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			queryParameterRedactionEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Settings values for data retention. This is a singleton resource. */
	export interface GoogleAnalyticsAdminV1alphaDataRetentionSettings {

		/** The length of time that event-level data is retained. */
		eventDataRetention?: GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetention | null;

		/** Output only. Resource name for this DataRetentionSetting resource. Format: properties/{property}/dataRetentionSettings */
		name?: string | null;

		/** If true, reset the retention period for the user identifier with every event from that user. */
		resetUserDataOnNewActivity?: boolean | null;
	}

	/** Settings values for data retention. This is a singleton resource. */
	export interface GoogleAnalyticsAdminV1alphaDataRetentionSettingsFormProperties {

		/** The length of time that event-level data is retained. */
		eventDataRetention: FormControl<GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetention | null | undefined>,

		/** Output only. Resource name for this DataRetentionSetting resource. Format: properties/{property}/dataRetentionSettings */
		name: FormControl<string | null | undefined>,

		/** If true, reset the retention period for the user identifier with every event from that user. */
		resetUserDataOnNewActivity: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaDataRetentionSettingsFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaDataRetentionSettingsFormProperties>({
			eventDataRetention: new FormControl<GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetention | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resetUserDataOnNewActivity: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetention { RETENTION_DURATION_UNSPECIFIED = 'RETENTION_DURATION_UNSPECIFIED', TWO_MONTHS = 'TWO_MONTHS', FOURTEEN_MONTHS = 'FOURTEEN_MONTHS', TWENTY_SIX_MONTHS = 'TWENTY_SIX_MONTHS', THIRTY_EIGHT_MONTHS = 'THIRTY_EIGHT_MONTHS', FIFTY_MONTHS = 'FIFTY_MONTHS' }


	/** A resource message representing a data stream. */
	export interface GoogleAnalyticsAdminV1alphaDataStream {

		/** Data specific to Android app streams. */
		androidAppStreamData?: GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData;

		/** Output only. Time when this stream was originally created. */
		createTime?: string | null;

		/** Human-readable display name for the Data Stream. Required for web data streams. The max allowed display name length is 255 UTF-16 code units. */
		displayName?: string | null;

		/** Data specific to iOS app streams. */
		iosAppStreamData?: GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData;

		/** Output only. Resource name of this Data Stream. Format: properties/{property_id}/dataStreams/{stream_id} Example: "properties/1000/dataStreams/2000" */
		name?: string | null;

		/** Required. Immutable. The type of this DataStream resource. */
		type?: GoogleAnalyticsAdminV1alphaDataStreamType | null;

		/** Output only. Time when stream payload fields were last updated. */
		updateTime?: string | null;

		/** Data specific to web streams. */
		webStreamData?: GoogleAnalyticsAdminV1alphaDataStreamWebStreamData;
	}

	/** A resource message representing a data stream. */
	export interface GoogleAnalyticsAdminV1alphaDataStreamFormProperties {

		/** Output only. Time when this stream was originally created. */
		createTime: FormControl<string | null | undefined>,

		/** Human-readable display name for the Data Stream. Required for web data streams. The max allowed display name length is 255 UTF-16 code units. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Resource name of this Data Stream. Format: properties/{property_id}/dataStreams/{stream_id} Example: "properties/1000/dataStreams/2000" */
		name: FormControl<string | null | undefined>,

		/** Required. Immutable. The type of this DataStream resource. */
		type: FormControl<GoogleAnalyticsAdminV1alphaDataStreamType | null | undefined>,

		/** Output only. Time when stream payload fields were last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaDataStreamFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaDataStreamFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleAnalyticsAdminV1alphaDataStreamType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data specific to Android app streams. */
	export interface GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData {

		/** Output only. ID of the corresponding Android app in Firebase, if any. This ID can change if the Android app is deleted and recreated. */
		firebaseAppId?: string | null;

		/** Immutable. The package name for the app being measured. Example: "com.example.myandroidapp" */
		packageName?: string | null;
	}

	/** Data specific to Android app streams. */
	export interface GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamDataFormProperties {

		/** Output only. ID of the corresponding Android app in Firebase, if any. This ID can change if the Android app is deleted and recreated. */
		firebaseAppId: FormControl<string | null | undefined>,

		/** Immutable. The package name for the app being measured. Example: "com.example.myandroidapp" */
		packageName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamDataFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamDataFormProperties>({
			firebaseAppId: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data specific to iOS app streams. */
	export interface GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData {

		/** Required. Immutable. The Apple App Store Bundle ID for the app Example: "com.example.myiosapp" */
		bundleId?: string | null;

		/** Output only. ID of the corresponding iOS app in Firebase, if any. This ID can change if the iOS app is deleted and recreated. */
		firebaseAppId?: string | null;
	}

	/** Data specific to iOS app streams. */
	export interface GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamDataFormProperties {

		/** Required. Immutable. The Apple App Store Bundle ID for the app Example: "com.example.myiosapp" */
		bundleId: FormControl<string | null | undefined>,

		/** Output only. ID of the corresponding iOS app in Firebase, if any. This ID can change if the iOS app is deleted and recreated. */
		firebaseAppId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaDataStreamIosAppStreamDataFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamDataFormProperties>({
			bundleId: new FormControl<string | null | undefined>(undefined),
			firebaseAppId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1alphaDataStreamType { DATA_STREAM_TYPE_UNSPECIFIED = 'DATA_STREAM_TYPE_UNSPECIFIED', WEB_DATA_STREAM = 'WEB_DATA_STREAM', ANDROID_APP_DATA_STREAM = 'ANDROID_APP_DATA_STREAM', IOS_APP_DATA_STREAM = 'IOS_APP_DATA_STREAM' }


	/** Data specific to web streams. */
	export interface GoogleAnalyticsAdminV1alphaDataStreamWebStreamData {

		/** Domain name of the web app being measured, or empty. Example: "http://www.google.com", "https://www.google.com" */
		defaultUri?: string | null;

		/** Output only. ID of the corresponding web app in Firebase, if any. This ID can change if the web app is deleted and recreated. */
		firebaseAppId?: string | null;

		/** Output only. Analytics Measurement ID. Example: "G-1A2BCD345E" */
		measurementId?: string | null;
	}

	/** Data specific to web streams. */
	export interface GoogleAnalyticsAdminV1alphaDataStreamWebStreamDataFormProperties {

		/** Domain name of the web app being measured, or empty. Example: "http://www.google.com", "https://www.google.com" */
		defaultUri: FormControl<string | null | undefined>,

		/** Output only. ID of the corresponding web app in Firebase, if any. This ID can change if the web app is deleted and recreated. */
		firebaseAppId: FormControl<string | null | undefined>,

		/** Output only. Analytics Measurement ID. Example: "G-1A2BCD345E" */
		measurementId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaDataStreamWebStreamDataFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaDataStreamWebStreamDataFormProperties>({
			defaultUri: new FormControl<string | null | undefined>(undefined),
			firebaseAppId: new FormControl<string | null | undefined>(undefined),
			measurementId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A proposal for a link between a GA4 property and a Display & Video 360 advertiser. A proposal is converted to a DisplayVideo360AdvertiserLink once approved. Google Analytics admins approve inbound proposals while Display & Video 360 admins approve outbound proposals. */
	export interface GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal {

		/** Immutable. Enables personalized advertising features with this integration. If this field is not set on create, it will be defaulted to true. */
		adsPersonalizationEnabled?: boolean | null;

		/** Output only. The display name of the Display & Video Advertiser. Only populated for proposals that originated from Display & Video 360. */
		advertiserDisplayName?: string | null;

		/** Immutable. The Display & Video 360 Advertiser's advertiser ID. */
		advertiserId?: string | null;

		/** Immutable. Enables the import of campaign data from Display & Video 360. If this field is not set on create, it will be defaulted to true. */
		campaignDataSharingEnabled?: boolean | null;

		/** Immutable. Enables the import of cost data from Display & Video 360. This can only be enabled if campaign_data_sharing_enabled is enabled. If this field is not set on create, it will be defaulted to true. */
		costDataSharingEnabled?: boolean | null;

		/** Status information for a link proposal. */
		linkProposalStatusDetails?: GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails;

		/** Output only. The resource name for this DisplayVideo360AdvertiserLinkProposal resource. Format: properties/{propertyId}/displayVideo360AdvertiserLinkProposals/{proposalId} Note: proposalId is not the Display & Video 360 Advertiser ID */
		name?: string | null;

		/** Input only. On a proposal being sent to Display & Video 360, this field must be set to the email address of an admin on the target advertiser. This is used to verify that the Google Analytics admin is aware of at least one admin on the Display & Video 360 Advertiser. This does not restrict approval of the proposal to a single user. Any admin on the Display & Video 360 Advertiser may approve the proposal. */
		validationEmail?: string | null;
	}

	/** A proposal for a link between a GA4 property and a Display & Video 360 advertiser. A proposal is converted to a DisplayVideo360AdvertiserLink once approved. Google Analytics admins approve inbound proposals while Display & Video 360 admins approve outbound proposals. */
	export interface GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalFormProperties {

		/** Immutable. Enables personalized advertising features with this integration. If this field is not set on create, it will be defaulted to true. */
		adsPersonalizationEnabled: FormControl<boolean | null | undefined>,

		/** Output only. The display name of the Display & Video Advertiser. Only populated for proposals that originated from Display & Video 360. */
		advertiserDisplayName: FormControl<string | null | undefined>,

		/** Immutable. The Display & Video 360 Advertiser's advertiser ID. */
		advertiserId: FormControl<string | null | undefined>,

		/** Immutable. Enables the import of campaign data from Display & Video 360. If this field is not set on create, it will be defaulted to true. */
		campaignDataSharingEnabled: FormControl<boolean | null | undefined>,

		/** Immutable. Enables the import of cost data from Display & Video 360. This can only be enabled if campaign_data_sharing_enabled is enabled. If this field is not set on create, it will be defaulted to true. */
		costDataSharingEnabled: FormControl<boolean | null | undefined>,

		/** Output only. The resource name for this DisplayVideo360AdvertiserLinkProposal resource. Format: properties/{propertyId}/displayVideo360AdvertiserLinkProposals/{proposalId} Note: proposalId is not the Display & Video 360 Advertiser ID */
		name: FormControl<string | null | undefined>,

		/** Input only. On a proposal being sent to Display & Video 360, this field must be set to the email address of an admin on the target advertiser. This is used to verify that the Google Analytics admin is aware of at least one admin on the Display & Video 360 Advertiser. This does not restrict approval of the proposal to a single user. Any admin on the Display & Video 360 Advertiser may approve the proposal. */
		validationEmail: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalFormProperties>({
			adsPersonalizationEnabled: new FormControl<boolean | null | undefined>(undefined),
			advertiserDisplayName: new FormControl<string | null | undefined>(undefined),
			advertiserId: new FormControl<string | null | undefined>(undefined),
			campaignDataSharingEnabled: new FormControl<boolean | null | undefined>(undefined),
			costDataSharingEnabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			validationEmail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status information for a link proposal. */
	export interface GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails {

		/** Output only. The source of this proposal. */
		linkProposalInitiatingProduct?: GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProduct | null;

		/** Output only. The state of this proposal. */
		linkProposalState?: GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalState | null;

		/** Output only. The email address of the user that proposed this linkage. */
		requestorEmail?: string | null;
	}

	/** Status information for a link proposal. */
	export interface GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsFormProperties {

		/** Output only. The source of this proposal. */
		linkProposalInitiatingProduct: FormControl<GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProduct | null | undefined>,

		/** Output only. The state of this proposal. */
		linkProposalState: FormControl<GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalState | null | undefined>,

		/** Output only. The email address of the user that proposed this linkage. */
		requestorEmail: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsFormProperties>({
			linkProposalInitiatingProduct: new FormControl<GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProduct | null | undefined>(undefined),
			linkProposalState: new FormControl<GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalState | null | undefined>(undefined),
			requestorEmail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProduct { LINK_PROPOSAL_INITIATING_PRODUCT_UNSPECIFIED = 'LINK_PROPOSAL_INITIATING_PRODUCT_UNSPECIFIED', GOOGLE_ANALYTICS = 'GOOGLE_ANALYTICS', LINKED_PRODUCT = 'LINKED_PRODUCT' }

	export enum GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalState { LINK_PROPOSAL_STATE_UNSPECIFIED = 'LINK_PROPOSAL_STATE_UNSPECIFIED', AWAITING_REVIEW_FROM_GOOGLE_ANALYTICS = 'AWAITING_REVIEW_FROM_GOOGLE_ANALYTICS', AWAITING_REVIEW_FROM_LINKED_PRODUCT = 'AWAITING_REVIEW_FROM_LINKED_PRODUCT', WITHDRAWN = 'WITHDRAWN', DECLINED = 'DECLINED', EXPIRED = 'EXPIRED', OBSOLETE = 'OBSOLETE' }


	/** Singleton resource under a web DataStream, configuring measurement of additional site interactions and content. */
	export interface GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings {

		/** If enabled, capture a file download event each time a link is clicked with a common document, compressed file, application, video, or audio extension. */
		fileDownloadsEnabled?: boolean | null;

		/** If enabled, capture a form interaction event each time a visitor interacts with a form on your website. False by default. */
		formInteractionsEnabled?: boolean | null;

		/** Output only. Resource name of the Enhanced Measurement Settings. Format: properties/{property_id}/dataStreams/{data_stream}/enhancedMeasurementSettings Example: "properties/1000/dataStreams/2000/enhancedMeasurementSettings" */
		name?: string | null;

		/** If enabled, capture an outbound click event each time a visitor clicks a link that leads them away from your domain. */
		outboundClicksEnabled?: boolean | null;

		/** If enabled, capture a page view event each time the website changes the browser history state. */
		pageChangesEnabled?: boolean | null;

		/** If enabled, capture scroll events each time a visitor gets to the bottom of a page. */
		scrollsEnabled?: boolean | null;

		/** Required. URL query parameters to interpret as site search parameters. Max length is 1024 characters. Must not be empty. */
		searchQueryParameter?: string | null;

		/** If enabled, capture a view search results event each time a visitor performs a search on your site (based on a query parameter). */
		siteSearchEnabled?: boolean | null;

		/** Indicates whether Enhanced Measurement Settings will be used to automatically measure interactions and content on this web stream. Changing this value does not affect the settings themselves, but determines whether they are respected. */
		streamEnabled?: boolean | null;

		/** Additional URL query parameters. Max length is 1024 characters. */
		uriQueryParameter?: string | null;

		/** If enabled, capture video play, progress, and complete events as visitors view embedded videos on your site. */
		videoEngagementEnabled?: boolean | null;
	}

	/** Singleton resource under a web DataStream, configuring measurement of additional site interactions and content. */
	export interface GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettingsFormProperties {

		/** If enabled, capture a file download event each time a link is clicked with a common document, compressed file, application, video, or audio extension. */
		fileDownloadsEnabled: FormControl<boolean | null | undefined>,

		/** If enabled, capture a form interaction event each time a visitor interacts with a form on your website. False by default. */
		formInteractionsEnabled: FormControl<boolean | null | undefined>,

		/** Output only. Resource name of the Enhanced Measurement Settings. Format: properties/{property_id}/dataStreams/{data_stream}/enhancedMeasurementSettings Example: "properties/1000/dataStreams/2000/enhancedMeasurementSettings" */
		name: FormControl<string | null | undefined>,

		/** If enabled, capture an outbound click event each time a visitor clicks a link that leads them away from your domain. */
		outboundClicksEnabled: FormControl<boolean | null | undefined>,

		/** If enabled, capture a page view event each time the website changes the browser history state. */
		pageChangesEnabled: FormControl<boolean | null | undefined>,

		/** If enabled, capture scroll events each time a visitor gets to the bottom of a page. */
		scrollsEnabled: FormControl<boolean | null | undefined>,

		/** Required. URL query parameters to interpret as site search parameters. Max length is 1024 characters. Must not be empty. */
		searchQueryParameter: FormControl<string | null | undefined>,

		/** If enabled, capture a view search results event each time a visitor performs a search on your site (based on a query parameter). */
		siteSearchEnabled: FormControl<boolean | null | undefined>,

		/** Indicates whether Enhanced Measurement Settings will be used to automatically measure interactions and content on this web stream. Changing this value does not affect the settings themselves, but determines whether they are respected. */
		streamEnabled: FormControl<boolean | null | undefined>,

		/** Additional URL query parameters. Max length is 1024 characters. */
		uriQueryParameter: FormControl<string | null | undefined>,

		/** If enabled, capture video play, progress, and complete events as visitors view embedded videos on your site. */
		videoEngagementEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaEnhancedMeasurementSettingsFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettingsFormProperties>({
			fileDownloadsEnabled: new FormControl<boolean | null | undefined>(undefined),
			formInteractionsEnabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			outboundClicksEnabled: new FormControl<boolean | null | undefined>(undefined),
			pageChangesEnabled: new FormControl<boolean | null | undefined>(undefined),
			scrollsEnabled: new FormControl<boolean | null | undefined>(undefined),
			searchQueryParameter: new FormControl<string | null | undefined>(undefined),
			siteSearchEnabled: new FormControl<boolean | null | undefined>(undefined),
			streamEnabled: new FormControl<boolean | null | undefined>(undefined),
			uriQueryParameter: new FormControl<string | null | undefined>(undefined),
			videoEngagementEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An Event Create Rule defines conditions that will trigger the creation of an entirely new event based upon matched criteria of a source event. Additional mutations of the parameters from the source event can be defined. Unlike Event Edit rules, Event Creation Rules have no defined order. They will all be run independently. Event Edit and Event Create rules can't be used to modify an event created from an Event Create rule. */
	export interface GoogleAnalyticsAdminV1alphaEventCreateRule {

		/** Required. The name of the new event to be created. This value must: * be less than 40 characters * consist only of letters, digits or _ (underscores) * start with a letter */
		destinationEvent?: string | null;

		/** Required. Must have at least one condition, and can have up to 10 max. Conditions on the source event must match for this rule to be applied. */
		eventConditions?: Array<GoogleAnalyticsAdminV1alphaMatchingCondition>;

		/** Output only. Resource name for this EventCreateRule resource. Format: properties/{property}/dataStreams/{data_stream}/eventCreateRules/{event_create_rule} */
		name?: string | null;

		/** Parameter mutations define parameter behavior on the new event, and are applied in order. A maximum of 20 mutations can be applied. */
		parameterMutations?: Array<GoogleAnalyticsAdminV1alphaParameterMutation>;

		/** If true, the source parameters are copied to the new event. If false, or unset, all non-internal parameters are not copied from the source event. Parameter mutations are applied after the parameters have been copied. */
		sourceCopyParameters?: boolean | null;
	}

	/** An Event Create Rule defines conditions that will trigger the creation of an entirely new event based upon matched criteria of a source event. Additional mutations of the parameters from the source event can be defined. Unlike Event Edit rules, Event Creation Rules have no defined order. They will all be run independently. Event Edit and Event Create rules can't be used to modify an event created from an Event Create rule. */
	export interface GoogleAnalyticsAdminV1alphaEventCreateRuleFormProperties {

		/** Required. The name of the new event to be created. This value must: * be less than 40 characters * consist only of letters, digits or _ (underscores) * start with a letter */
		destinationEvent: FormControl<string | null | undefined>,

		/** Output only. Resource name for this EventCreateRule resource. Format: properties/{property}/dataStreams/{data_stream}/eventCreateRules/{event_create_rule} */
		name: FormControl<string | null | undefined>,

		/** If true, the source parameters are copied to the new event. If false, or unset, all non-internal parameters are not copied from the source event. Parameter mutations are applied after the parameters have been copied. */
		sourceCopyParameters: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaEventCreateRuleFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaEventCreateRuleFormProperties>({
			destinationEvent: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sourceCopyParameters: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Defines a condition for when an Event Edit or Event Creation rule applies to an event. */
	export interface GoogleAnalyticsAdminV1alphaMatchingCondition {

		/** Required. The type of comparison to be applied to the value. */
		comparisonType?: GoogleAnalyticsAdminV1alphaMatchingConditionComparisonType | null;

		/** Required. The name of the field that is compared against for the condition. If 'event_name' is specified this condition will apply to the name of the event. Otherwise the condition will apply to a parameter with the specified name. This value cannot contain spaces. */
		field?: string | null;

		/** Whether or not the result of the comparison should be negated. For example, if `negated` is true, then 'equals' comparisons would function as 'not equals'. */
		negated?: boolean | null;

		/** Required. The value being compared against for this condition. The runtime implementation may perform type coercion of this value to evaluate this condition based on the type of the parameter value. */
		value?: string | null;
	}

	/** Defines a condition for when an Event Edit or Event Creation rule applies to an event. */
	export interface GoogleAnalyticsAdminV1alphaMatchingConditionFormProperties {

		/** Required. The type of comparison to be applied to the value. */
		comparisonType: FormControl<GoogleAnalyticsAdminV1alphaMatchingConditionComparisonType | null | undefined>,

		/** Required. The name of the field that is compared against for the condition. If 'event_name' is specified this condition will apply to the name of the event. Otherwise the condition will apply to a parameter with the specified name. This value cannot contain spaces. */
		field: FormControl<string | null | undefined>,

		/** Whether or not the result of the comparison should be negated. For example, if `negated` is true, then 'equals' comparisons would function as 'not equals'. */
		negated: FormControl<boolean | null | undefined>,

		/** Required. The value being compared against for this condition. The runtime implementation may perform type coercion of this value to evaluate this condition based on the type of the parameter value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaMatchingConditionFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaMatchingConditionFormProperties>({
			comparisonType: new FormControl<GoogleAnalyticsAdminV1alphaMatchingConditionComparisonType | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			negated: new FormControl<boolean | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1alphaMatchingConditionComparisonType { COMPARISON_TYPE_UNSPECIFIED = 'COMPARISON_TYPE_UNSPECIFIED', EQUALS = 'EQUALS', EQUALS_CASE_INSENSITIVE = 'EQUALS_CASE_INSENSITIVE', CONTAINS = 'CONTAINS', CONTAINS_CASE_INSENSITIVE = 'CONTAINS_CASE_INSENSITIVE', STARTS_WITH = 'STARTS_WITH', STARTS_WITH_CASE_INSENSITIVE = 'STARTS_WITH_CASE_INSENSITIVE', ENDS_WITH = 'ENDS_WITH', ENDS_WITH_CASE_INSENSITIVE = 'ENDS_WITH_CASE_INSENSITIVE', GREATER_THAN = 'GREATER_THAN', GREATER_THAN_OR_EQUAL = 'GREATER_THAN_OR_EQUAL', LESS_THAN = 'LESS_THAN', LESS_THAN_OR_EQUAL = 'LESS_THAN_OR_EQUAL', REGULAR_EXPRESSION = 'REGULAR_EXPRESSION', REGULAR_EXPRESSION_CASE_INSENSITIVE = 'REGULAR_EXPRESSION_CASE_INSENSITIVE' }


	/** Defines an event parameter to mutate. */
	export interface GoogleAnalyticsAdminV1alphaParameterMutation {

		/** Required. The name of the parameter to mutate. This value must: * be less than 40 characters. * be unique across across all mutations within the rule * consist only of letters, digits or _ (underscores) For event edit rules, the name may also be set to 'event_name' to modify the event_name in place. */
		parameter?: string | null;

		/** Required. The value mutation to perform. * Must be less than 100 characters. * To specify a constant value for the param, use the value's string. * To copy value from another parameter, use syntax like "[[other_parameter]]" For more details, see this [help center article](https://support.google.com/analytics/answer/10085872#modify-an-event&zippy=%2Cin-this-article%2Cmodify-parameters). */
		parameterValue?: string | null;
	}

	/** Defines an event parameter to mutate. */
	export interface GoogleAnalyticsAdminV1alphaParameterMutationFormProperties {

		/** Required. The name of the parameter to mutate. This value must: * be less than 40 characters. * be unique across across all mutations within the rule * consist only of letters, digits or _ (underscores) For event edit rules, the name may also be set to 'event_name' to modify the event_name in place. */
		parameter: FormControl<string | null | undefined>,

		/** Required. The value mutation to perform. * Must be less than 100 characters. * To specify a constant value for the param, use the value's string. * To copy value from another parameter, use syntax like "[[other_parameter]]" For more details, see this [help center article](https://support.google.com/analytics/answer/10085872#modify-an-event&zippy=%2Cin-this-article%2Cmodify-parameters). */
		parameterValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaParameterMutationFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaParameterMutationFormProperties>({
			parameter: new FormControl<string | null | undefined>(undefined),
			parameterValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource message representing a GA4 ExpandedDataSet. */
	export interface GoogleAnalyticsAdminV1alphaExpandedDataSet {

		/** Output only. Time when expanded data set began (or will begin) collecing data. */
		dataCollectionStartTime?: string | null;

		/** Optional. The description of the ExpandedDataSet. Max 50 chars. */
		description?: string | null;

		/** A logical expression of EnhancedDataSet dimension filters. */
		dimensionFilterExpression?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression;

		/** Immutable. The list of dimensions included in the ExpandedDataSet. See the [API Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#dimensions) for the list of dimension names. */
		dimensionNames?: Array<string>;

		/** Required. The display name of the ExpandedDataSet. Max 200 chars. */
		displayName?: string | null;

		/** Immutable. The list of metrics included in the ExpandedDataSet. See the [API Metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#metrics) for the list of dimension names. */
		metricNames?: Array<string>;

		/** Output only. The resource name for this ExpandedDataSet resource. Format: properties/{property_id}/expandedDataSets/{expanded_data_set} */
		name?: string | null;
	}

	/** A resource message representing a GA4 ExpandedDataSet. */
	export interface GoogleAnalyticsAdminV1alphaExpandedDataSetFormProperties {

		/** Output only. Time when expanded data set began (or will begin) collecing data. */
		dataCollectionStartTime: FormControl<string | null | undefined>,

		/** Optional. The description of the ExpandedDataSet. Max 50 chars. */
		description: FormControl<string | null | undefined>,

		/** Required. The display name of the ExpandedDataSet. Max 200 chars. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The resource name for this ExpandedDataSet resource. Format: properties/{property_id}/expandedDataSets/{expanded_data_set} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaExpandedDataSetFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaExpandedDataSetFormProperties>({
			dataCollectionStartTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A logical expression of EnhancedDataSet dimension filters. */
	export interface GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression {

		/** A list of ExpandedDataSet filter expressions. */
		andGroup?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList;

		/** A specific filter for a single dimension */
		filter?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilter;

		/** A logical expression of EnhancedDataSet dimension filters. */
		notExpression?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression;
	}

	/** A logical expression of EnhancedDataSet dimension filters. */
	export interface GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionFormProperties>({
		});

	}


	/** A list of ExpandedDataSet filter expressions. */
	export interface GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList {

		/** A list of ExpandedDataSet filter expressions. */
		filterExpressions?: Array<GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression>;
	}

	/** A list of ExpandedDataSet filter expressions. */
	export interface GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionListFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionListFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionListFormProperties>({
		});

	}


	/** A specific filter for a single dimension */
	export interface GoogleAnalyticsAdminV1alphaExpandedDataSetFilter {

		/** Required. The dimension name to filter. */
		fieldName?: string | null;

		/** A filter for a string dimension that matches a particular list of options. */
		inListFilter?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter;

		/** A filter for a string-type dimension that matches a particular pattern. */
		stringFilter?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter;
	}

	/** A specific filter for a single dimension */
	export interface GoogleAnalyticsAdminV1alphaExpandedDataSetFilterFormProperties {

		/** Required. The dimension name to filter. */
		fieldName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaExpandedDataSetFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaExpandedDataSetFilterFormProperties>({
			fieldName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A filter for a string dimension that matches a particular list of options. */
	export interface GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter {

		/** Optional. If true, the match is case-sensitive. If false, the match is case-insensitive. Must be true. */
		caseSensitive?: boolean | null;

		/** Required. The list of possible string values to match against. Must be non-empty. */
		values?: Array<string>;
	}

	/** A filter for a string dimension that matches a particular list of options. */
	export interface GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilterFormProperties {

		/** Optional. If true, the match is case-sensitive. If false, the match is case-insensitive. Must be true. */
		caseSensitive: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilterFormProperties>({
			caseSensitive: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A filter for a string-type dimension that matches a particular pattern. */
	export interface GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter {

		/** Optional. If true, the match is case-sensitive. If false, the match is case-insensitive. Must be true when match_type is EXACT. Must be false when match_type is CONTAINS. */
		caseSensitive?: boolean | null;

		/** Required. The match type for the string filter. */
		matchType?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchType | null;

		/** Required. The string value to be matched against. */
		value?: string | null;
	}

	/** A filter for a string-type dimension that matches a particular pattern. */
	export interface GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterFormProperties {

		/** Optional. If true, the match is case-sensitive. If false, the match is case-insensitive. Must be true when match_type is EXACT. Must be false when match_type is CONTAINS. */
		caseSensitive: FormControl<boolean | null | undefined>,

		/** Required. The match type for the string filter. */
		matchType: FormControl<GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchType | null | undefined>,

		/** Required. The string value to be matched against. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterFormProperties>({
			caseSensitive: new FormControl<boolean | null | undefined>(undefined),
			matchType: new FormControl<GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchType { MATCH_TYPE_UNSPECIFIED = 'MATCH_TYPE_UNSPECIFIED', EXACT = 'EXACT', CONTAINS = 'CONTAINS' }


	/** A link between a GA4 property and a Firebase project. */
	export interface GoogleAnalyticsAdminV1alphaFirebaseLink {

		/** Output only. Time when this FirebaseLink was originally created. */
		createTime?: string | null;

		/** Output only. Example format: properties/1234/firebaseLinks/5678 */
		name?: string | null;

		/** Immutable. Firebase project resource name. When creating a FirebaseLink, you may provide this resource name using either a project number or project ID. Once this resource has been created, returned FirebaseLinks will always have a project_name that contains a project number. Format: 'projects/{project number}' Example: 'projects/1234' */
		project?: string | null;
	}

	/** A link between a GA4 property and a Firebase project. */
	export interface GoogleAnalyticsAdminV1alphaFirebaseLinkFormProperties {

		/** Output only. Time when this FirebaseLink was originally created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Example format: properties/1234/firebaseLinks/5678 */
		name: FormControl<string | null | undefined>,

		/** Immutable. Firebase project resource name. When creating a FirebaseLink, you may provide this resource name using either a project number or project ID. Once this resource has been created, returned FirebaseLinks will always have a project_name that contains a project number. Format: 'projects/{project number}' Example: 'projects/1234' */
		project: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaFirebaseLinkFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaFirebaseLinkFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A link between a GA4 property and a Google Ads account. */
	export interface GoogleAnalyticsAdminV1alphaGoogleAdsLink {

		/** Enable personalized advertising features with this integration. Automatically publish my Google Analytics audience lists and Google Analytics remarketing events/parameters to the linked Google Ads account. If this field is not set on create/update, it will be defaulted to true. */
		adsPersonalizationEnabled?: boolean | null;

		/** Output only. If true, this link is for a Google Ads manager account. */
		canManageClients?: boolean | null;

		/** Output only. Time when this link was originally created. */
		createTime?: string | null;

		/** Output only. Email address of the user that created the link. An empty string will be returned if the email address can't be retrieved. */
		creatorEmailAddress?: string | null;

		/** Immutable. Google Ads customer ID. */
		customerId?: string | null;

		/** Output only. Format: properties/{propertyId}/googleAdsLinks/{googleAdsLinkId} Note: googleAdsLinkId is not the Google Ads customer ID. */
		name?: string | null;

		/** Output only. Time when this link was last updated. */
		updateTime?: string | null;
	}

	/** A link between a GA4 property and a Google Ads account. */
	export interface GoogleAnalyticsAdminV1alphaGoogleAdsLinkFormProperties {

		/** Enable personalized advertising features with this integration. Automatically publish my Google Analytics audience lists and Google Analytics remarketing events/parameters to the linked Google Ads account. If this field is not set on create/update, it will be defaulted to true. */
		adsPersonalizationEnabled: FormControl<boolean | null | undefined>,

		/** Output only. If true, this link is for a Google Ads manager account. */
		canManageClients: FormControl<boolean | null | undefined>,

		/** Output only. Time when this link was originally created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Email address of the user that created the link. An empty string will be returned if the email address can't be retrieved. */
		creatorEmailAddress: FormControl<string | null | undefined>,

		/** Immutable. Google Ads customer ID. */
		customerId: FormControl<string | null | undefined>,

		/** Output only. Format: properties/{propertyId}/googleAdsLinks/{googleAdsLinkId} Note: googleAdsLinkId is not the Google Ads customer ID. */
		name: FormControl<string | null | undefined>,

		/** Output only. Time when this link was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaGoogleAdsLinkFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaGoogleAdsLinkFormProperties>({
			adsPersonalizationEnabled: new FormControl<boolean | null | undefined>(undefined),
			canManageClients: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			creatorEmailAddress: new FormControl<string | null | undefined>(undefined),
			customerId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings values for Google Signals. This is a singleton resource. */
	export interface GoogleAnalyticsAdminV1alphaGoogleSignalsSettings {

		/** Output only. Terms of Service acceptance. */
		consent?: GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsent | null;

		/** Output only. Resource name of this setting. Format: properties/{property_id}/googleSignalsSettings Example: "properties/1000/googleSignalsSettings" */
		name?: string | null;

		/** Status of this setting. */
		state?: GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsState | null;
	}

	/** Settings values for Google Signals. This is a singleton resource. */
	export interface GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsFormProperties {

		/** Output only. Terms of Service acceptance. */
		consent: FormControl<GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsent | null | undefined>,

		/** Output only. Resource name of this setting. Format: properties/{property_id}/googleSignalsSettings Example: "properties/1000/googleSignalsSettings" */
		name: FormControl<string | null | undefined>,

		/** Status of this setting. */
		state: FormControl<GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsState | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaGoogleSignalsSettingsFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsFormProperties>({
			consent: new FormControl<GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsent | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsState | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsConsent { GOOGLE_SIGNALS_CONSENT_UNSPECIFIED = 'GOOGLE_SIGNALS_CONSENT_UNSPECIFIED', GOOGLE_SIGNALS_CONSENT_CONSENTED = 'GOOGLE_SIGNALS_CONSENT_CONSENTED', GOOGLE_SIGNALS_CONSENT_NOT_CONSENTED = 'GOOGLE_SIGNALS_CONSENT_NOT_CONSENTED' }

	export enum GoogleAnalyticsAdminV1alphaGoogleSignalsSettingsState { GOOGLE_SIGNALS_STATE_UNSPECIFIED = 'GOOGLE_SIGNALS_STATE_UNSPECIFIED', GOOGLE_SIGNALS_ENABLED = 'GOOGLE_SIGNALS_ENABLED', GOOGLE_SIGNALS_DISABLED = 'GOOGLE_SIGNALS_DISABLED' }


	/** A secret value used for sending hits to Measurement Protocol. */
	export interface GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret {

		/** Required. Human-readable display name for this secret. */
		displayName?: string | null;

		/** Output only. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret} */
		name?: string | null;

		/** Output only. The measurement protocol secret value. Pass this value to the api_secret field of the Measurement Protocol API when sending hits to this secret's parent property. */
		secretValue?: string | null;
	}

	/** A secret value used for sending hits to Measurement Protocol. */
	export interface GoogleAnalyticsAdminV1alphaMeasurementProtocolSecretFormProperties {

		/** Required. Human-readable display name for this secret. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret} */
		name: FormControl<string | null | undefined>,

		/** Output only. The measurement protocol secret value. Pass this value to the api_secret field of the Measurement Protocol API when sending hits to this secret's parent property. */
		secretValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaMeasurementProtocolSecretFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaMeasurementProtocolSecretFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			secretValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource message representing a Google Analytics GA4 property. */
	export interface GoogleAnalyticsAdminV1alphaProperty {

		/** Immutable. The resource name of the parent account Format: accounts/{account_id} Example: "accounts/123" */
		account?: string | null;

		/** Output only. Time when the entity was originally created. */
		createTime?: string | null;

		/** The currency type used in reports involving monetary values. Format: https://en.wikipedia.org/wiki/ISO_4217 Examples: "USD", "EUR", "JPY" */
		currencyCode?: string | null;

		/** Output only. If set, the time at which this property was trashed. If not set, then this property is not currently in the trash can. */
		deleteTime?: string | null;

		/** Required. Human-readable display name for this property. The max allowed display name length is 100 UTF-16 code units. */
		displayName?: string | null;

		/** Output only. If set, the time at which this trashed property will be permanently deleted. If not set, then this property is not currently in the trash can and is not slated to be deleted. */
		expireTime?: string | null;

		/** Industry associated with this property Example: AUTOMOTIVE, FOOD_AND_DRINK */
		industryCategory?: GoogleAnalyticsAdminV1alphaPropertyIndustryCategory | null;

		/** Output only. Resource name of this property. Format: properties/{property_id} Example: "properties/1000" */
		name?: string | null;

		/** Immutable. Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account}, properties/{property} Example: "accounts/100", "properties/101" */
		parent?: string | null;

		/** Immutable. The property type for this Property resource. When creating a property, if the type is "PROPERTY_TYPE_UNSPECIFIED", then "ORDINARY_PROPERTY" will be implied. */
		propertyType?: GoogleAnalyticsAdminV1alphaPropertySummaryPropertyType | null;

		/** Output only. The Google Analytics service level that applies to this property. */
		serviceLevel?: GoogleAnalyticsAdminV1alphaPropertyServiceLevel | null;

		/** Required. Reporting Time Zone, used as the day boundary for reports, regardless of where the data originates. If the time zone honors DST, Analytics will automatically adjust for the changes. NOTE: Changing the time zone only affects data going forward, and is not applied retroactively. Format: https://www.iana.org/time-zones Example: "America/Los_Angeles" */
		timeZone?: string | null;

		/** Output only. Time when entity payload fields were last updated. */
		updateTime?: string | null;
	}

	/** A resource message representing a Google Analytics GA4 property. */
	export interface GoogleAnalyticsAdminV1alphaPropertyFormProperties {

		/** Immutable. The resource name of the parent account Format: accounts/{account_id} Example: "accounts/123" */
		account: FormControl<string | null | undefined>,

		/** Output only. Time when the entity was originally created. */
		createTime: FormControl<string | null | undefined>,

		/** The currency type used in reports involving monetary values. Format: https://en.wikipedia.org/wiki/ISO_4217 Examples: "USD", "EUR", "JPY" */
		currencyCode: FormControl<string | null | undefined>,

		/** Output only. If set, the time at which this property was trashed. If not set, then this property is not currently in the trash can. */
		deleteTime: FormControl<string | null | undefined>,

		/** Required. Human-readable display name for this property. The max allowed display name length is 100 UTF-16 code units. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. If set, the time at which this trashed property will be permanently deleted. If not set, then this property is not currently in the trash can and is not slated to be deleted. */
		expireTime: FormControl<string | null | undefined>,

		/** Industry associated with this property Example: AUTOMOTIVE, FOOD_AND_DRINK */
		industryCategory: FormControl<GoogleAnalyticsAdminV1alphaPropertyIndustryCategory | null | undefined>,

		/** Output only. Resource name of this property. Format: properties/{property_id} Example: "properties/1000" */
		name: FormControl<string | null | undefined>,

		/** Immutable. Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account}, properties/{property} Example: "accounts/100", "properties/101" */
		parent: FormControl<string | null | undefined>,

		/** Immutable. The property type for this Property resource. When creating a property, if the type is "PROPERTY_TYPE_UNSPECIFIED", then "ORDINARY_PROPERTY" will be implied. */
		propertyType: FormControl<GoogleAnalyticsAdminV1alphaPropertySummaryPropertyType | null | undefined>,

		/** Output only. The Google Analytics service level that applies to this property. */
		serviceLevel: FormControl<GoogleAnalyticsAdminV1alphaPropertyServiceLevel | null | undefined>,

		/** Required. Reporting Time Zone, used as the day boundary for reports, regardless of where the data originates. If the time zone honors DST, Analytics will automatically adjust for the changes. NOTE: Changing the time zone only affects data going forward, and is not applied retroactively. Format: https://www.iana.org/time-zones Example: "America/Los_Angeles" */
		timeZone: FormControl<string | null | undefined>,

		/** Output only. Time when entity payload fields were last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaPropertyFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaPropertyFormProperties>({
			account: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			industryCategory: new FormControl<GoogleAnalyticsAdminV1alphaPropertyIndustryCategory | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			propertyType: new FormControl<GoogleAnalyticsAdminV1alphaPropertySummaryPropertyType | null | undefined>(undefined),
			serviceLevel: new FormControl<GoogleAnalyticsAdminV1alphaPropertyServiceLevel | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1alphaPropertyIndustryCategory { INDUSTRY_CATEGORY_UNSPECIFIED = 'INDUSTRY_CATEGORY_UNSPECIFIED', AUTOMOTIVE = 'AUTOMOTIVE', BUSINESS_AND_INDUSTRIAL_MARKETS = 'BUSINESS_AND_INDUSTRIAL_MARKETS', FINANCE = 'FINANCE', HEALTHCARE = 'HEALTHCARE', TECHNOLOGY = 'TECHNOLOGY', TRAVEL = 'TRAVEL', OTHER = 'OTHER', ARTS_AND_ENTERTAINMENT = 'ARTS_AND_ENTERTAINMENT', BEAUTY_AND_FITNESS = 'BEAUTY_AND_FITNESS', BOOKS_AND_LITERATURE = 'BOOKS_AND_LITERATURE', FOOD_AND_DRINK = 'FOOD_AND_DRINK', GAMES = 'GAMES', HOBBIES_AND_LEISURE = 'HOBBIES_AND_LEISURE', HOME_AND_GARDEN = 'HOME_AND_GARDEN', INTERNET_AND_TELECOM = 'INTERNET_AND_TELECOM', LAW_AND_GOVERNMENT = 'LAW_AND_GOVERNMENT', NEWS = 'NEWS', ONLINE_COMMUNITIES = 'ONLINE_COMMUNITIES', PEOPLE_AND_SOCIETY = 'PEOPLE_AND_SOCIETY', PETS_AND_ANIMALS = 'PETS_AND_ANIMALS', REAL_ESTATE = 'REAL_ESTATE', REFERENCE = 'REFERENCE', SCIENCE = 'SCIENCE', SPORTS = 'SPORTS', JOBS_AND_EDUCATION = 'JOBS_AND_EDUCATION', SHOPPING = 'SHOPPING' }

	export enum GoogleAnalyticsAdminV1alphaPropertyServiceLevel { SERVICE_LEVEL_UNSPECIFIED = 'SERVICE_LEVEL_UNSPECIFIED', GOOGLE_ANALYTICS_STANDARD = 'GOOGLE_ANALYTICS_STANDARD', GOOGLE_ANALYTICS_360 = 'GOOGLE_ANALYTICS_360' }


	/** A link between a GA4 property and a Search Ads 360 entity. */
	export interface GoogleAnalyticsAdminV1alphaSearchAds360Link {

		/** Enables personalized advertising features with this integration. If this field is not set on create, it will be defaulted to true. */
		adsPersonalizationEnabled?: boolean | null;

		/** Output only. The display name of the Search Ads 360 Advertiser. Allows users to easily identify the linked resource. */
		advertiserDisplayName?: string | null;

		/** Immutable. This field represents the Advertiser ID of the Search Ads 360 Advertiser. that has been linked. */
		advertiserId?: string | null;

		/** Immutable. Enables the import of campaign data from Search Ads 360 into the GA4 property. After link creation, this can only be updated from the Search Ads 360 product. If this field is not set on create, it will be defaulted to true. */
		campaignDataSharingEnabled?: boolean | null;

		/** Immutable. Enables the import of cost data from Search Ads 360 to the GA4 property. This can only be enabled if campaign_data_sharing_enabled is enabled. After link creation, this can only be updated from the Search Ads 360 product. If this field is not set on create, it will be defaulted to true. */
		costDataSharingEnabled?: boolean | null;

		/** Output only. The resource name for this SearchAds360Link resource. Format: properties/{propertyId}/searchAds360Links/{linkId} Note: linkId is not the Search Ads 360 advertiser ID */
		name?: string | null;

		/** Enables export of site stats with this integration. If this field is not set on create, it will be defaulted to true. */
		siteStatsSharingEnabled?: boolean | null;
	}

	/** A link between a GA4 property and a Search Ads 360 entity. */
	export interface GoogleAnalyticsAdminV1alphaSearchAds360LinkFormProperties {

		/** Enables personalized advertising features with this integration. If this field is not set on create, it will be defaulted to true. */
		adsPersonalizationEnabled: FormControl<boolean | null | undefined>,

		/** Output only. The display name of the Search Ads 360 Advertiser. Allows users to easily identify the linked resource. */
		advertiserDisplayName: FormControl<string | null | undefined>,

		/** Immutable. This field represents the Advertiser ID of the Search Ads 360 Advertiser. that has been linked. */
		advertiserId: FormControl<string | null | undefined>,

		/** Immutable. Enables the import of campaign data from Search Ads 360 into the GA4 property. After link creation, this can only be updated from the Search Ads 360 product. If this field is not set on create, it will be defaulted to true. */
		campaignDataSharingEnabled: FormControl<boolean | null | undefined>,

		/** Immutable. Enables the import of cost data from Search Ads 360 to the GA4 property. This can only be enabled if campaign_data_sharing_enabled is enabled. After link creation, this can only be updated from the Search Ads 360 product. If this field is not set on create, it will be defaulted to true. */
		costDataSharingEnabled: FormControl<boolean | null | undefined>,

		/** Output only. The resource name for this SearchAds360Link resource. Format: properties/{propertyId}/searchAds360Links/{linkId} Note: linkId is not the Search Ads 360 advertiser ID */
		name: FormControl<string | null | undefined>,

		/** Enables export of site stats with this integration. If this field is not set on create, it will be defaulted to true. */
		siteStatsSharingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaSearchAds360LinkFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaSearchAds360LinkFormProperties>({
			adsPersonalizationEnabled: new FormControl<boolean | null | undefined>(undefined),
			advertiserDisplayName: new FormControl<string | null | undefined>(undefined),
			advertiserId: new FormControl<string | null | undefined>(undefined),
			campaignDataSharingEnabled: new FormControl<boolean | null | undefined>(undefined),
			costDataSharingEnabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			siteStatsSharingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** SKAdNetwork conversion value schema of an iOS stream. */
	export interface GoogleAnalyticsAdminV1alphaSKAdNetworkConversionValueSchema {

		/** If enabled, the GA SDK will set conversion values using this schema definition, and schema will be exported to any Google Ads accounts linked to this property. If disabled, the GA SDK will not automatically set conversion values, and also the schema will not be exported to Ads. */
		applyConversionValues?: boolean | null;

		/** Output only. Resource name of the schema. This will be child of ONLY an iOS stream, and there can be at most one such child under an iOS stream. Format: properties/{property}/dataStreams/{dataStream}/sKAdNetworkConversionValueSchema */
		name?: string | null;

		/** Settings for a SKAdNetwork conversion postback window. */
		postbackWindowOne?: GoogleAnalyticsAdminV1alphaPostbackWindow;

		/** Settings for a SKAdNetwork conversion postback window. */
		postbackWindowThree?: GoogleAnalyticsAdminV1alphaPostbackWindow;

		/** Settings for a SKAdNetwork conversion postback window. */
		postbackWindowTwo?: GoogleAnalyticsAdminV1alphaPostbackWindow;
	}

	/** SKAdNetwork conversion value schema of an iOS stream. */
	export interface GoogleAnalyticsAdminV1alphaSKAdNetworkConversionValueSchemaFormProperties {

		/** If enabled, the GA SDK will set conversion values using this schema definition, and schema will be exported to any Google Ads accounts linked to this property. If disabled, the GA SDK will not automatically set conversion values, and also the schema will not be exported to Ads. */
		applyConversionValues: FormControl<boolean | null | undefined>,

		/** Output only. Resource name of the schema. This will be child of ONLY an iOS stream, and there can be at most one such child under an iOS stream. Format: properties/{property}/dataStreams/{dataStream}/sKAdNetworkConversionValueSchema */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaSKAdNetworkConversionValueSchemaFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaSKAdNetworkConversionValueSchemaFormProperties>({
			applyConversionValues: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings for a SKAdNetwork conversion postback window. */
	export interface GoogleAnalyticsAdminV1alphaPostbackWindow {

		/** Ordering of the repeated field will be used to prioritize the conversion value settings. Lower indexed entries are prioritized higher. The first conversion value setting that evaluates to true will be selected. It must have at least one entry if enable_postback_window_settings is set to true. It can have maximum of 128 entries. */
		conversionValues?: Array<GoogleAnalyticsAdminV1alphaConversionValues>;

		/** If enable_postback_window_settings is true, conversion_values must be populated and will be used for determining when and how to set the Conversion Value on a client device and exporting schema to linked Ads accounts. If false, the settings are not used, but are retained in case they may be used in the future. This must always be true for postback_window_one. */
		postbackWindowSettingsEnabled?: boolean | null;
	}

	/** Settings for a SKAdNetwork conversion postback window. */
	export interface GoogleAnalyticsAdminV1alphaPostbackWindowFormProperties {

		/** If enable_postback_window_settings is true, conversion_values must be populated and will be used for determining when and how to set the Conversion Value on a client device and exporting schema to linked Ads accounts. If false, the settings are not used, but are retained in case they may be used in the future. This must always be true for postback_window_one. */
		postbackWindowSettingsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaPostbackWindowFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaPostbackWindowFormProperties>({
			postbackWindowSettingsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Conversion value settings for a postback window for SKAdNetwork conversion value schema. */
	export interface GoogleAnalyticsAdminV1alphaConversionValues {

		/** Required. A coarse grained conversion value. This value is not guaranteed to be unique. */
		coarseValue?: GoogleAnalyticsAdminV1alphaConversionValuesCoarseValue | null;

		/** Display name of the SKAdNetwork conversion value. The max allowed display name length is 50 UTF-16 code units. */
		displayName?: string | null;

		/** Event conditions that must be met for this Conversion Value to be achieved. The conditions in this list are ANDed together. It must have minimum of 1 entry and maximum of 3 entries, if the postback window is enabled. */
		eventMappings?: Array<GoogleAnalyticsAdminV1alphaEventMapping>;

		/**
		 * The fine-grained conversion value. This is applicable only to the first postback window. Its valid values are [0,63], both inclusive. It must be set for postback window 1, and must not be set for postback window 2 & 3. This value is not guaranteed to be unique. If the configuration for the first postback window is re-used for second or third postback windows this field has no effect.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fineValue?: number | null;

		/** If true, the SDK should lock to this conversion value for the current postback window. */
		lockEnabled?: boolean | null;
	}

	/** Conversion value settings for a postback window for SKAdNetwork conversion value schema. */
	export interface GoogleAnalyticsAdminV1alphaConversionValuesFormProperties {

		/** Required. A coarse grained conversion value. This value is not guaranteed to be unique. */
		coarseValue: FormControl<GoogleAnalyticsAdminV1alphaConversionValuesCoarseValue | null | undefined>,

		/** Display name of the SKAdNetwork conversion value. The max allowed display name length is 50 UTF-16 code units. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * The fine-grained conversion value. This is applicable only to the first postback window. Its valid values are [0,63], both inclusive. It must be set for postback window 1, and must not be set for postback window 2 & 3. This value is not guaranteed to be unique. If the configuration for the first postback window is re-used for second or third postback windows this field has no effect.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fineValue: FormControl<number | null | undefined>,

		/** If true, the SDK should lock to this conversion value for the current postback window. */
		lockEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaConversionValuesFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaConversionValuesFormProperties>({
			coarseValue: new FormControl<GoogleAnalyticsAdminV1alphaConversionValuesCoarseValue | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			fineValue: new FormControl<number | null | undefined>(undefined),
			lockEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1alphaConversionValuesCoarseValue { COARSE_VALUE_UNSPECIFIED = 'COARSE_VALUE_UNSPECIFIED', COARSE_VALUE_LOW = 'COARSE_VALUE_LOW', COARSE_VALUE_MEDIUM = 'COARSE_VALUE_MEDIUM', COARSE_VALUE_HIGH = 'COARSE_VALUE_HIGH' }


	/** Event setting conditions to match an event. */
	export interface GoogleAnalyticsAdminV1alphaEventMapping {

		/** Required. Name of the GA4 event. It must always be set. The max allowed display name length is 40 UTF-16 code units. */
		eventName?: string | null;

		/** The maximum number of times the event occurred. If not set, maximum event count won't be checked. */
		maxEventCount?: string | null;

		/**
		 * The maximum revenue generated due to the event. Revenue currency will be defined at the property level. If not set, maximum event value won't be checked.
		 * Type: double
		 */
		maxEventValue?: number | null;

		/** At least one of the following four min/max values must be set. The values set will be ANDed together to qualify an event. The minimum number of times the event occurred. If not set, minimum event count won't be checked. */
		minEventCount?: string | null;

		/**
		 * The minimum revenue generated due to the event. Revenue currency will be defined at the property level. If not set, minimum event value won't be checked.
		 * Type: double
		 */
		minEventValue?: number | null;
	}

	/** Event setting conditions to match an event. */
	export interface GoogleAnalyticsAdminV1alphaEventMappingFormProperties {

		/** Required. Name of the GA4 event. It must always be set. The max allowed display name length is 40 UTF-16 code units. */
		eventName: FormControl<string | null | undefined>,

		/** The maximum number of times the event occurred. If not set, maximum event count won't be checked. */
		maxEventCount: FormControl<string | null | undefined>,

		/**
		 * The maximum revenue generated due to the event. Revenue currency will be defined at the property level. If not set, maximum event value won't be checked.
		 * Type: double
		 */
		maxEventValue: FormControl<number | null | undefined>,

		/** At least one of the following four min/max values must be set. The values set will be ANDed together to qualify an event. The minimum number of times the event occurred. If not set, minimum event count won't be checked. */
		minEventCount: FormControl<string | null | undefined>,

		/**
		 * The minimum revenue generated due to the event. Revenue currency will be defined at the property level. If not set, minimum event value won't be checked.
		 * Type: double
		 */
		minEventValue: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaEventMappingFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaEventMappingFormProperties>({
			eventName: new FormControl<string | null | undefined>(undefined),
			maxEventCount: new FormControl<string | null | undefined>(undefined),
			maxEventValue: new FormControl<number | null | undefined>(undefined),
			minEventCount: new FormControl<string | null | undefined>(undefined),
			minEventValue: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A set of changes within a Google Analytics account or its child properties that resulted from the same cause. Common causes would be updates made in the Google Analytics UI, changes from customer support, or automatic Google Analytics system changes. */
	export interface GoogleAnalyticsAdminV1alphaChangeHistoryEvent {

		/** The type of actor that made this change. */
		actorType?: GoogleAnalyticsAdminV1alphaChangeHistoryEventActorType | null;

		/** Time when change was made. */
		changeTime?: string | null;

		/** A list of changes made in this change history event that fit the filters specified in SearchChangeHistoryEventsRequest. */
		changes?: Array<GoogleAnalyticsAdminV1alphaChangeHistoryChange>;

		/** If true, then the list of changes returned was filtered, and does not represent all changes that occurred in this event. */
		changesFiltered?: boolean | null;

		/** ID of this change history event. This ID is unique across Google Analytics. */
		id?: string | null;

		/** Email address of the Google account that made the change. This will be a valid email address if the actor field is set to USER, and empty otherwise. Google accounts that have been deleted will cause an error. */
		userActorEmail?: string | null;
	}

	/** A set of changes within a Google Analytics account or its child properties that resulted from the same cause. Common causes would be updates made in the Google Analytics UI, changes from customer support, or automatic Google Analytics system changes. */
	export interface GoogleAnalyticsAdminV1alphaChangeHistoryEventFormProperties {

		/** The type of actor that made this change. */
		actorType: FormControl<GoogleAnalyticsAdminV1alphaChangeHistoryEventActorType | null | undefined>,

		/** Time when change was made. */
		changeTime: FormControl<string | null | undefined>,

		/** If true, then the list of changes returned was filtered, and does not represent all changes that occurred in this event. */
		changesFiltered: FormControl<boolean | null | undefined>,

		/** ID of this change history event. This ID is unique across Google Analytics. */
		id: FormControl<string | null | undefined>,

		/** Email address of the Google account that made the change. This will be a valid email address if the actor field is set to USER, and empty otherwise. Google accounts that have been deleted will cause an error. */
		userActorEmail: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaChangeHistoryEventFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaChangeHistoryEventFormProperties>({
			actorType: new FormControl<GoogleAnalyticsAdminV1alphaChangeHistoryEventActorType | null | undefined>(undefined),
			changeTime: new FormControl<string | null | undefined>(undefined),
			changesFiltered: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			userActorEmail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1alphaChangeHistoryEventActorType { ACTOR_TYPE_UNSPECIFIED = 'ACTOR_TYPE_UNSPECIFIED', USER = 'USER', SYSTEM = 'SYSTEM', SUPPORT = 'SUPPORT' }


	/** Configuration for a specific Connected Site Tag. */
	export interface GoogleAnalyticsAdminV1alphaConnectedSiteTag {

		/** Required. User-provided display name for the connected site tag. Must be less than 256 characters. */
		displayName?: string | null;

		/** Required. "Tag ID to forward events to. Also known as the Measurement ID, or the "G-ID" (For example: G-12345). */
		tagId?: string | null;
	}

	/** Configuration for a specific Connected Site Tag. */
	export interface GoogleAnalyticsAdminV1alphaConnectedSiteTagFormProperties {

		/** Required. User-provided display name for the connected site tag. Must be less than 256 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Required. "Tag ID to forward events to. Also known as the Measurement ID, or the "G-ID" (For example: G-12345). */
		tagId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaConnectedSiteTagFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaConnectedSiteTagFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			tagId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CreateConnectedSiteTag RPC. */
	export interface GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagRequest {

		/** Configuration for a specific Connected Site Tag. */
		connectedSiteTag?: GoogleAnalyticsAdminV1alphaConnectedSiteTag;

		/** The Universal Analytics property to create connected site tags for. This API does not support GA4 properties. Format: properties/{universalAnalyticsPropertyId} Example: properties/1234 */
		property?: string | null;
	}

	/** Request message for CreateConnectedSiteTag RPC. */
	export interface GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagRequestFormProperties {

		/** The Universal Analytics property to create connected site tags for. This API does not support GA4 properties. Format: properties/{universalAnalyticsPropertyId} Example: properties/1234 */
		property: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaCreateConnectedSiteTagRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagRequestFormProperties>({
			property: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for CreateConnectedSiteTag RPC. */
	export interface GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagResponse {
	}

	/** Response message for CreateConnectedSiteTag RPC. */
	export interface GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagResponseFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaCreateConnectedSiteTagResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagResponseFormProperties>({
		});

	}


	/** Request message for CreateRollupProperty RPC. */
	export interface GoogleAnalyticsAdminV1alphaCreateRollupPropertyRequest {

		/** A resource message representing a Google Analytics GA4 property. */
		rollupProperty?: GoogleAnalyticsAdminV1alphaProperty;

		/** Optional. The resource names of properties that will be sources to the created roll-up property. */
		sourceProperties?: Array<string>;
	}

	/** Request message for CreateRollupProperty RPC. */
	export interface GoogleAnalyticsAdminV1alphaCreateRollupPropertyRequestFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaCreateRollupPropertyRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaCreateRollupPropertyRequestFormProperties>({
		});

	}


	/** Response message for CreateRollupProperty RPC. */
	export interface GoogleAnalyticsAdminV1alphaCreateRollupPropertyResponse {

		/** A resource message representing a Google Analytics GA4 property. */
		rollupProperty?: GoogleAnalyticsAdminV1alphaProperty;

		/** The created roll-up property source links. */
		rollupPropertySourceLinks?: Array<GoogleAnalyticsAdminV1alphaRollupPropertySourceLink>;
	}

	/** Response message for CreateRollupProperty RPC. */
	export interface GoogleAnalyticsAdminV1alphaCreateRollupPropertyResponseFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaCreateRollupPropertyResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaCreateRollupPropertyResponseFormProperties>({
		});

	}


	/** A link that references a source property under the parent rollup property. */
	export interface GoogleAnalyticsAdminV1alphaRollupPropertySourceLink {

		/** Output only. Resource name of this RollupPropertySourceLink. Format: 'properties/{property_id}/rollupPropertySourceLinks/{rollup_property_source_link}' Format: 'properties/123/rollupPropertySourceLinks/456' */
		name?: string | null;

		/** Immutable. Resource name of the source property. Format: properties/{property_id} Example: "properties/789" */
		sourceProperty?: string | null;
	}

	/** A link that references a source property under the parent rollup property. */
	export interface GoogleAnalyticsAdminV1alphaRollupPropertySourceLinkFormProperties {

		/** Output only. Resource name of this RollupPropertySourceLink. Format: 'properties/{property_id}/rollupPropertySourceLinks/{rollup_property_source_link}' Format: 'properties/123/rollupPropertySourceLinks/456' */
		name: FormControl<string | null | undefined>,

		/** Immutable. Resource name of the source property. Format: properties/{property_id} Example: "properties/789" */
		sourceProperty: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaRollupPropertySourceLinkFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaRollupPropertySourceLinkFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			sourceProperty: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CreateSubproperty RPC. */
	export interface GoogleAnalyticsAdminV1alphaCreateSubpropertyRequest {

		/** Required. The ordinary property for which to create a subproperty. Format: properties/property_id Example: properties/123 */
		parent?: string | null;

		/** A resource message representing a Google Analytics GA4 property. */
		subproperty?: GoogleAnalyticsAdminV1alphaProperty;

		/** A resource message representing a GA4 Subproperty event filter. */
		subpropertyEventFilter?: GoogleAnalyticsAdminV1alphaSubpropertyEventFilter;
	}

	/** Request message for CreateSubproperty RPC. */
	export interface GoogleAnalyticsAdminV1alphaCreateSubpropertyRequestFormProperties {

		/** Required. The ordinary property for which to create a subproperty. Format: properties/property_id Example: properties/123 */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaCreateSubpropertyRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaCreateSubpropertyRequestFormProperties>({
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource message representing a GA4 Subproperty event filter. */
	export interface GoogleAnalyticsAdminV1alphaSubpropertyEventFilter {

		/** Immutable. Resource name of the Subproperty that uses this filter. */
		applyToProperty?: string | null;

		/** Required. Unordered list. Filter clauses that define the SubpropertyEventFilter. All clauses are AND'ed together to determine what data is sent to the subproperty. */
		filterClauses?: Array<GoogleAnalyticsAdminV1alphaSubpropertyEventFilterClause>;

		/** Output only. Format: properties/{ordinary_property_id}/subpropertyEventFilters/{sub_property_event_filter} Example: properties/1234/subpropertyEventFilters/5678 */
		name?: string | null;
	}

	/** A resource message representing a GA4 Subproperty event filter. */
	export interface GoogleAnalyticsAdminV1alphaSubpropertyEventFilterFormProperties {

		/** Immutable. Resource name of the Subproperty that uses this filter. */
		applyToProperty: FormControl<string | null | undefined>,

		/** Output only. Format: properties/{ordinary_property_id}/subpropertyEventFilters/{sub_property_event_filter} Example: properties/1234/subpropertyEventFilters/5678 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaSubpropertyEventFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaSubpropertyEventFilterFormProperties>({
			applyToProperty: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A clause for defining a filter. A filter may be inclusive (events satisfying the filter clause are included in the subproperty's data) or exclusive (events satisfying the filter clause are excluded from the subproperty's data). */
	export interface GoogleAnalyticsAdminV1alphaSubpropertyEventFilterClause {

		/** Required. The type for the filter clause. */
		filterClauseType?: GoogleAnalyticsAdminV1alphaSubpropertyEventFilterClauseFilterClauseType | null;

		/** A logical expression of Subproperty event filters. */
		filterExpression?: GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpression;
	}

	/** A clause for defining a filter. A filter may be inclusive (events satisfying the filter clause are included in the subproperty's data) or exclusive (events satisfying the filter clause are excluded from the subproperty's data). */
	export interface GoogleAnalyticsAdminV1alphaSubpropertyEventFilterClauseFormProperties {

		/** Required. The type for the filter clause. */
		filterClauseType: FormControl<GoogleAnalyticsAdminV1alphaSubpropertyEventFilterClauseFilterClauseType | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaSubpropertyEventFilterClauseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaSubpropertyEventFilterClauseFormProperties>({
			filterClauseType: new FormControl<GoogleAnalyticsAdminV1alphaSubpropertyEventFilterClauseFilterClauseType | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1alphaSubpropertyEventFilterClauseFilterClauseType { FILTER_CLAUSE_TYPE_UNSPECIFIED = 'FILTER_CLAUSE_TYPE_UNSPECIFIED', INCLUDE = 'INCLUDE', EXCLUDE = 'EXCLUDE' }


	/** A logical expression of Subproperty event filters. */
	export interface GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpression {

		/** A specific filter expression */
		filterCondition?: GoogleAnalyticsAdminV1alphaSubpropertyEventFilterCondition;

		/** A logical expression of Subproperty event filters. */
		notExpression?: GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpression;

		/** A list of Subproperty event filter expressions. */
		orGroup?: GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpressionList;
	}

	/** A logical expression of Subproperty event filters. */
	export interface GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpressionFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpressionFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpressionFormProperties>({
		});

	}


	/** A specific filter expression */
	export interface GoogleAnalyticsAdminV1alphaSubpropertyEventFilterCondition {

		/** Required. The field that is being filtered. */
		fieldName?: string | null;

		/** A filter for null values. */
		nullFilter?: boolean | null;

		/** A filter for a string-type dimension that matches a particular pattern. */
		stringFilter?: GoogleAnalyticsAdminV1alphaSubpropertyEventFilterConditionStringFilter;
	}

	/** A specific filter expression */
	export interface GoogleAnalyticsAdminV1alphaSubpropertyEventFilterConditionFormProperties {

		/** Required. The field that is being filtered. */
		fieldName: FormControl<string | null | undefined>,

		/** A filter for null values. */
		nullFilter: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaSubpropertyEventFilterConditionFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaSubpropertyEventFilterConditionFormProperties>({
			fieldName: new FormControl<string | null | undefined>(undefined),
			nullFilter: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A filter for a string-type dimension that matches a particular pattern. */
	export interface GoogleAnalyticsAdminV1alphaSubpropertyEventFilterConditionStringFilter {

		/** Optional. If true, the string value is case sensitive. If false, the match is case-insensitive. */
		caseSensitive?: boolean | null;

		/** Required. The match type for the string filter. */
		matchType?: GoogleAnalyticsAdminV1alphaAccessStringFilterMatchType | null;

		/** Required. The string value used for the matching. */
		value?: string | null;
	}

	/** A filter for a string-type dimension that matches a particular pattern. */
	export interface GoogleAnalyticsAdminV1alphaSubpropertyEventFilterConditionStringFilterFormProperties {

		/** Optional. If true, the string value is case sensitive. If false, the match is case-insensitive. */
		caseSensitive: FormControl<boolean | null | undefined>,

		/** Required. The match type for the string filter. */
		matchType: FormControl<GoogleAnalyticsAdminV1alphaAccessStringFilterMatchType | null | undefined>,

		/** Required. The string value used for the matching. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaSubpropertyEventFilterConditionStringFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaSubpropertyEventFilterConditionStringFilterFormProperties>({
			caseSensitive: new FormControl<boolean | null | undefined>(undefined),
			matchType: new FormControl<GoogleAnalyticsAdminV1alphaAccessStringFilterMatchType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of Subproperty event filter expressions. */
	export interface GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpressionList {

		/** Required. Unordered list. A list of Subproperty event filter expressions */
		filterExpressions?: Array<GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpression>;
	}

	/** A list of Subproperty event filter expressions. */
	export interface GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpressionListFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpressionListFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpressionListFormProperties>({
		});

	}


	/** Response message for CreateSubproperty RPC. */
	export interface GoogleAnalyticsAdminV1alphaCreateSubpropertyResponse {

		/** A resource message representing a Google Analytics GA4 property. */
		subproperty?: GoogleAnalyticsAdminV1alphaProperty;

		/** A resource message representing a GA4 Subproperty event filter. */
		subpropertyEventFilter?: GoogleAnalyticsAdminV1alphaSubpropertyEventFilter;
	}

	/** Response message for CreateSubproperty RPC. */
	export interface GoogleAnalyticsAdminV1alphaCreateSubpropertyResponseFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaCreateSubpropertyResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaCreateSubpropertyResponseFormProperties>({
		});

	}


	/** A resource message representing data sharing settings of a Google Analytics account. */
	export interface GoogleAnalyticsAdminV1alphaDataSharingSettings {

		/** Output only. Resource name. Format: accounts/{account}/dataSharingSettings Example: "accounts/1000/dataSharingSettings" */
		name?: string | null;

		/** Allows any of Google sales to access the data in order to suggest configuration changes to improve results. */
		sharingWithGoogleAnySalesEnabled?: boolean | null;

		/** Allows Google sales teams that are assigned to the customer to access the data in order to suggest configuration changes to improve results. Sales team restrictions still apply when enabled. */
		sharingWithGoogleAssignedSalesEnabled?: boolean | null;

		/** Allows Google to use the data to improve other Google products or services. */
		sharingWithGoogleProductsEnabled?: boolean | null;

		/** Allows Google support to access the data in order to help troubleshoot issues. */
		sharingWithGoogleSupportEnabled?: boolean | null;

		/** Allows Google to share the data anonymously in aggregate form with others. */
		sharingWithOthersEnabled?: boolean | null;
	}

	/** A resource message representing data sharing settings of a Google Analytics account. */
	export interface GoogleAnalyticsAdminV1alphaDataSharingSettingsFormProperties {

		/** Output only. Resource name. Format: accounts/{account}/dataSharingSettings Example: "accounts/1000/dataSharingSettings" */
		name: FormControl<string | null | undefined>,

		/** Allows any of Google sales to access the data in order to suggest configuration changes to improve results. */
		sharingWithGoogleAnySalesEnabled: FormControl<boolean | null | undefined>,

		/** Allows Google sales teams that are assigned to the customer to access the data in order to suggest configuration changes to improve results. Sales team restrictions still apply when enabled. */
		sharingWithGoogleAssignedSalesEnabled: FormControl<boolean | null | undefined>,

		/** Allows Google to use the data to improve other Google products or services. */
		sharingWithGoogleProductsEnabled: FormControl<boolean | null | undefined>,

		/** Allows Google support to access the data in order to help troubleshoot issues. */
		sharingWithGoogleSupportEnabled: FormControl<boolean | null | undefined>,

		/** Allows Google to share the data anonymously in aggregate form with others. */
		sharingWithOthersEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaDataSharingSettingsFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaDataSharingSettingsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			sharingWithGoogleAnySalesEnabled: new FormControl<boolean | null | undefined>(undefined),
			sharingWithGoogleAssignedSalesEnabled: new FormControl<boolean | null | undefined>(undefined),
			sharingWithGoogleProductsEnabled: new FormControl<boolean | null | undefined>(undefined),
			sharingWithGoogleSupportEnabled: new FormControl<boolean | null | undefined>(undefined),
			sharingWithOthersEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request message for DeleteConnectedSiteTag RPC. */
	export interface GoogleAnalyticsAdminV1alphaDeleteConnectedSiteTagRequest {

		/** The Universal Analytics property to delete connected site tags for. This API does not support GA4 properties. Format: properties/{universalAnalyticsPropertyId} Example: properties/1234 */
		property?: string | null;

		/** Tag ID to forward events to. Also known as the Measurement ID, or the "G-ID" (For example: G-12345). */
		tagId?: string | null;
	}

	/** Request message for DeleteConnectedSiteTag RPC. */
	export interface GoogleAnalyticsAdminV1alphaDeleteConnectedSiteTagRequestFormProperties {

		/** The Universal Analytics property to delete connected site tags for. This API does not support GA4 properties. Format: properties/{universalAnalyticsPropertyId} Example: properties/1234 */
		property: FormControl<string | null | undefined>,

		/** Tag ID to forward events to. Also known as the Measurement ID, or the "G-ID" (For example: G-12345). */
		tagId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaDeleteConnectedSiteTagRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaDeleteConnectedSiteTagRequestFormProperties>({
			property: new FormControl<string | null | undefined>(undefined),
			tagId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for fetching the opt out status for the automated GA4 setup process. */
	export interface GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutRequest {

		/** Required. The UA property to get the opt out status. Note this request uses the internal property ID, not the tracking ID of the form UA-XXXXXX-YY. Format: properties/{internalWebPropertyId} Example: properties/1234 */
		property?: string | null;
	}

	/** Request for fetching the opt out status for the automated GA4 setup process. */
	export interface GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutRequestFormProperties {

		/** Required. The UA property to get the opt out status. Note this request uses the internal property ID, not the tracking ID of the form UA-XXXXXX-YY. Format: properties/{internalWebPropertyId} Example: properties/1234 */
		property: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutRequestFormProperties>({
			property: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for fetching the opt out status for the automated GA4 setup process. */
	export interface GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse {

		/** The opt out status for the UA property. */
		optOut?: boolean | null;
	}

	/** Response message for fetching the opt out status for the automated GA4 setup process. */
	export interface GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponseFormProperties {

		/** The opt out status for the UA property. */
		optOut: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponseFormProperties>({
			optOut: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response for looking up GA4 property connected to a UA property. */
	export interface GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse {

		/** The GA4 property connected to the UA property. An empty string is returned when there is no connected GA4 property. Format: properties/{property_id} Example: properties/1234 */
		property?: string | null;
	}

	/** Response for looking up GA4 property connected to a UA property. */
	export interface GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponseFormProperties {

		/** The GA4 property connected to the UA property. An empty string is returned when there is no connected GA4 property. Format: properties/{property_id} Example: properties/1234 */
		property: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponseFormProperties>({
			property: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Read-only resource with the tag for sending data from a website to a DataStream. Only present for web DataStream resources. */
	export interface GoogleAnalyticsAdminV1alphaGlobalSiteTag {

		/** Output only. Resource name for this GlobalSiteTag resource. Format: properties/{property_id}/dataStreams/{stream_id}/globalSiteTag Example: "properties/123/dataStreams/456/globalSiteTag" */
		name?: string | null;

		/** Immutable. JavaScript code snippet to be pasted as the first item into the head tag of every webpage to measure. */
		snippet?: string | null;
	}

	/** Read-only resource with the tag for sending data from a website to a DataStream. Only present for web DataStream resources. */
	export interface GoogleAnalyticsAdminV1alphaGlobalSiteTagFormProperties {

		/** Output only. Resource name for this GlobalSiteTag resource. Format: properties/{property_id}/dataStreams/{stream_id}/globalSiteTag Example: "properties/123/dataStreams/456/globalSiteTag" */
		name: FormControl<string | null | undefined>,

		/** Immutable. JavaScript code snippet to be pasted as the first item into the head tag of every webpage to measure. */
		snippet: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaGlobalSiteTagFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaGlobalSiteTagFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			snippet: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListAccessBindings RPC. */
	export interface GoogleAnalyticsAdminV1alphaListAccessBindingsResponse {

		/** List of AccessBindings. These will be ordered stably, but in an arbitrary order. */
		accessBindings?: Array<GoogleAnalyticsAdminV1alphaAccessBinding>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListAccessBindings RPC. */
	export interface GoogleAnalyticsAdminV1alphaListAccessBindingsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaListAccessBindingsResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaListAccessBindingsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListAccountSummaries RPC. */
	export interface GoogleAnalyticsAdminV1alphaListAccountSummariesResponse {

		/** Account summaries of all accounts the caller has access to. */
		accountSummaries?: Array<GoogleAnalyticsAdminV1alphaAccountSummary>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListAccountSummaries RPC. */
	export interface GoogleAnalyticsAdminV1alphaListAccountSummariesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaListAccountSummariesResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaListAccountSummariesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for ListAccounts RPC. */
	export interface GoogleAnalyticsAdminV1alphaListAccountsResponse {

		/** Results that were accessible to the caller. */
		accounts?: Array<GoogleAnalyticsAdminV1alphaAccount>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Request message for ListAccounts RPC. */
	export interface GoogleAnalyticsAdminV1alphaListAccountsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaListAccountsResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaListAccountsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListAdSenseLinks method. */
	export interface GoogleAnalyticsAdminV1alphaListAdSenseLinksResponse {

		/** List of AdSenseLinks. */
		adsenseLinks?: Array<GoogleAnalyticsAdminV1alphaAdSenseLink>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListAdSenseLinks method. */
	export interface GoogleAnalyticsAdminV1alphaListAdSenseLinksResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaListAdSenseLinksResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaListAdSenseLinksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListAudiences RPC. */
	export interface GoogleAnalyticsAdminV1alphaListAudiencesResponse {

		/** List of Audiences. */
		audiences?: Array<GoogleAnalyticsAdminV1alphaAudience>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListAudiences RPC. */
	export interface GoogleAnalyticsAdminV1alphaListAudiencesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaListAudiencesResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaListAudiencesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListBigQueryLinks RPC */
	export interface GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse {

		/** List of BigQueryLinks. */
		bigqueryLinks?: Array<GoogleAnalyticsAdminV1alphaBigQueryLink>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListBigQueryLinks RPC */
	export interface GoogleAnalyticsAdminV1alphaListBigQueryLinksResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaListBigQueryLinksResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaListBigQueryLinksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListChannelGroups RPC. */
	export interface GoogleAnalyticsAdminV1alphaListChannelGroupsResponse {

		/** List of ChannelGroup. These will be ordered stably, but in an arbitrary order. */
		channelGroups?: Array<GoogleAnalyticsAdminV1alphaChannelGroup>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListChannelGroups RPC. */
	export interface GoogleAnalyticsAdminV1alphaListChannelGroupsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaListChannelGroupsResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaListChannelGroupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for ListConnectedSiteTags RPC. */
	export interface GoogleAnalyticsAdminV1alphaListConnectedSiteTagsRequest {

		/** The Universal Analytics property to fetch connected site tags for. This does not work on GA4 properties. A maximum of 20 connected site tags will be returned. Example Format: `properties/1234` */
		property?: string | null;
	}

	/** Request message for ListConnectedSiteTags RPC. */
	export interface GoogleAnalyticsAdminV1alphaListConnectedSiteTagsRequestFormProperties {

		/** The Universal Analytics property to fetch connected site tags for. This does not work on GA4 properties. A maximum of 20 connected site tags will be returned. Example Format: `properties/1234` */
		property: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaListConnectedSiteTagsRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaListConnectedSiteTagsRequestFormProperties>({
			property: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListConnectedSiteTags RPC. */
	export interface GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponse {

		/** The site tags for the Universal Analytics property. A maximum of 20 connected site tags will be returned. */
		connectedSiteTags?: Array<GoogleAnalyticsAdminV1alphaConnectedSiteTag>;
	}

	/** Response message for ListConnectedSiteTags RPC. */
	export interface GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponseFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponseFormProperties>({
		});

	}


	/** Response message for ListConversionEvents RPC. */
	export interface GoogleAnalyticsAdminV1alphaListConversionEventsResponse {

		/** The requested conversion events */
		conversionEvents?: Array<GoogleAnalyticsAdminV1alphaConversionEvent>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListConversionEvents RPC. */
	export interface GoogleAnalyticsAdminV1alphaListConversionEventsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaListConversionEventsResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaListConversionEventsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListCustomDimensions RPC. */
	export interface GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse {

		/** List of CustomDimensions. */
		customDimensions?: Array<GoogleAnalyticsAdminV1alphaCustomDimension>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListCustomDimensions RPC. */
	export interface GoogleAnalyticsAdminV1alphaListCustomDimensionsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaListCustomDimensionsResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaListCustomDimensionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListCustomMetrics RPC. */
	export interface GoogleAnalyticsAdminV1alphaListCustomMetricsResponse {

		/** List of CustomMetrics. */
		customMetrics?: Array<GoogleAnalyticsAdminV1alphaCustomMetric>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListCustomMetrics RPC. */
	export interface GoogleAnalyticsAdminV1alphaListCustomMetricsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaListCustomMetricsResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaListCustomMetricsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListDataStreams RPC. */
	export interface GoogleAnalyticsAdminV1alphaListDataStreamsResponse {

		/** List of DataStreams. */
		dataStreams?: Array<GoogleAnalyticsAdminV1alphaDataStream>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListDataStreams RPC. */
	export interface GoogleAnalyticsAdminV1alphaListDataStreamsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaListDataStreamsResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaListDataStreamsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListDisplayVideo360AdvertiserLinkProposals RPC. */
	export interface GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse {

		/** List of DisplayVideo360AdvertiserLinkProposals. */
		displayVideo360AdvertiserLinkProposals?: Array<GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListDisplayVideo360AdvertiserLinkProposals RPC. */
	export interface GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListDisplayVideo360AdvertiserLinks RPC. */
	export interface GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse {

		/** List of DisplayVideo360AdvertiserLinks. */
		displayVideo360AdvertiserLinks?: Array<GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListDisplayVideo360AdvertiserLinks RPC. */
	export interface GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListEventCreateRules RPC. */
	export interface GoogleAnalyticsAdminV1alphaListEventCreateRulesResponse {

		/** List of EventCreateRules. These will be ordered stably, but in an arbitrary order. */
		eventCreateRules?: Array<GoogleAnalyticsAdminV1alphaEventCreateRule>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListEventCreateRules RPC. */
	export interface GoogleAnalyticsAdminV1alphaListEventCreateRulesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaListEventCreateRulesResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaListEventCreateRulesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListExpandedDataSets RPC. */
	export interface GoogleAnalyticsAdminV1alphaListExpandedDataSetsResponse {

		/** List of ExpandedDataSet. These will be ordered stably, but in an arbitrary order. */
		expandedDataSets?: Array<GoogleAnalyticsAdminV1alphaExpandedDataSet>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListExpandedDataSets RPC. */
	export interface GoogleAnalyticsAdminV1alphaListExpandedDataSetsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaListExpandedDataSetsResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaListExpandedDataSetsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListFirebaseLinks RPC */
	export interface GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse {

		/** List of FirebaseLinks. This will have at most one value. */
		firebaseLinks?: Array<GoogleAnalyticsAdminV1alphaFirebaseLink>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. Currently, Google Analytics supports only one FirebaseLink per property, so this will never be populated. */
		nextPageToken?: string | null;
	}

	/** Response message for ListFirebaseLinks RPC */
	export interface GoogleAnalyticsAdminV1alphaListFirebaseLinksResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. Currently, Google Analytics supports only one FirebaseLink per property, so this will never be populated. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaListFirebaseLinksResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaListFirebaseLinksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListGoogleAdsLinks RPC. */
	export interface GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse {

		/** List of GoogleAdsLinks. */
		googleAdsLinks?: Array<GoogleAnalyticsAdminV1alphaGoogleAdsLink>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListGoogleAdsLinks RPC. */
	export interface GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListMeasurementProtocolSecret RPC */
	export interface GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse {

		/** A list of secrets for the parent stream specified in the request. */
		measurementProtocolSecrets?: Array<GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListMeasurementProtocolSecret RPC */
	export interface GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListProperties RPC. */
	export interface GoogleAnalyticsAdminV1alphaListPropertiesResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Results that matched the filter criteria and were accessible to the caller. */
		properties?: Array<GoogleAnalyticsAdminV1alphaProperty>;
	}

	/** Response message for ListProperties RPC. */
	export interface GoogleAnalyticsAdminV1alphaListPropertiesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaListPropertiesResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaListPropertiesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListRollupPropertySourceLinks RPC. */
	export interface GoogleAnalyticsAdminV1alphaListRollupPropertySourceLinksResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** List of RollupPropertySourceLinks. */
		rollupPropertySourceLinks?: Array<GoogleAnalyticsAdminV1alphaRollupPropertySourceLink>;
	}

	/** Response message for ListRollupPropertySourceLinks RPC. */
	export interface GoogleAnalyticsAdminV1alphaListRollupPropertySourceLinksResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaListRollupPropertySourceLinksResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaListRollupPropertySourceLinksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListSKAdNetworkConversionValueSchemas RPC */
	export interface GoogleAnalyticsAdminV1alphaListSKAdNetworkConversionValueSchemasResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. Currently, Google Analytics supports only one SKAdNetworkConversionValueSchema per dataStream, so this will never be populated. */
		nextPageToken?: string | null;

		/** List of SKAdNetworkConversionValueSchemas. This will have at most one value. */
		skadnetworkConversionValueSchemas?: Array<GoogleAnalyticsAdminV1alphaSKAdNetworkConversionValueSchema>;
	}

	/** Response message for ListSKAdNetworkConversionValueSchemas RPC */
	export interface GoogleAnalyticsAdminV1alphaListSKAdNetworkConversionValueSchemasResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. Currently, Google Analytics supports only one SKAdNetworkConversionValueSchema per dataStream, so this will never be populated. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaListSKAdNetworkConversionValueSchemasResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaListSKAdNetworkConversionValueSchemasResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListSearchAds360Links RPC. */
	export interface GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** List of SearchAds360Links. */
		searchAds360Links?: Array<GoogleAnalyticsAdminV1alphaSearchAds360Link>;
	}

	/** Response message for ListSearchAds360Links RPC. */
	export interface GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaListSearchAds360LinksResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListSubpropertyEventFilter RPC. */
	export interface GoogleAnalyticsAdminV1alphaListSubpropertyEventFiltersResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** List of subproperty event filters. */
		subpropertyEventFilters?: Array<GoogleAnalyticsAdminV1alphaSubpropertyEventFilter>;
	}

	/** Response message for ListSubpropertyEventFilter RPC. */
	export interface GoogleAnalyticsAdminV1alphaListSubpropertyEventFiltersResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaListSubpropertyEventFiltersResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaListSubpropertyEventFiltersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for ProvisionAccountTicket RPC. */
	export interface GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest {

		/** A resource message representing a Google Analytics account. */
		account?: GoogleAnalyticsAdminV1alphaAccount;

		/** Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in Cloud Console as a Redirect URI. */
		redirectUri?: string | null;
	}

	/** Request message for ProvisionAccountTicket RPC. */
	export interface GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequestFormProperties {

		/** Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in Cloud Console as a Redirect URI. */
		redirectUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaProvisionAccountTicketRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequestFormProperties>({
			redirectUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ProvisionAccountTicket RPC. */
	export interface GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse {

		/** The param to be passed in the ToS link. */
		accountTicketId?: string | null;
	}

	/** Response message for ProvisionAccountTicket RPC. */
	export interface GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponseFormProperties {

		/** The param to be passed in the ToS link. */
		accountTicketId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaProvisionAccountTicketResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponseFormProperties>({
			accountTicketId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for a Data Access Record Report. */
	export interface GoogleAnalyticsAdminV1alphaRunAccessReportRequest {

		/** Date ranges of access records to read. If multiple date ranges are requested, each response row will contain a zero based date range index. If two date ranges overlap, the access records for the overlapping days is included in the response rows for both date ranges. Requests are allowed up to 2 date ranges. */
		dateRanges?: Array<GoogleAnalyticsAdminV1alphaAccessDateRange>;

		/** Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics. */
		dimensionFilter?: GoogleAnalyticsAdminV1alphaAccessFilterExpression;

		/** The dimensions requested and displayed in the response. Requests are allowed up to 9 dimensions. */
		dimensions?: Array<GoogleAnalyticsAdminV1alphaAccessDimension>;

		/** Optional. Decides whether to return the users within user groups. This field works only when include_all_users is set to true. If true, it will return all users with access to the specified property or account. If false, only the users with direct access will be returned. */
		expandGroups?: boolean | null;

		/** Optional. Determines whether to include users who have never made an API call in the response. If true, all users with access to the specified property or account are included in the response, regardless of whether they have made an API call or not. If false, only the users who have made an API call will be included. */
		includeAllUsers?: boolean | null;

		/** The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 100,000 rows per request, no matter how many you ask for. `limit` must be positive. The API may return fewer rows than the requested `limit`, if there aren't as many remaining rows as the `limit`. For instance, there are fewer than 300 possible values for the dimension `country`, so when reporting on only `country`, you can't get more than 300 rows, even if you set `limit` to a higher value. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). */
		limit?: string | null;

		/** Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics. */
		metricFilter?: GoogleAnalyticsAdminV1alphaAccessFilterExpression;

		/** The metrics requested and displayed in the response. Requests are allowed up to 10 metrics. */
		metrics?: Array<GoogleAnalyticsAdminV1alphaAccessMetric>;

		/** The row count of the start row. The first row is counted as row 0. If offset is unspecified, it is treated as 0. If offset is zero, then this method will return the first page of results with `limit` entries. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). */
		offset?: string | null;

		/** Specifies how rows are ordered in the response. */
		orderBys?: Array<GoogleAnalyticsAdminV1alphaAccessOrderBy>;

		/** Toggles whether to return the current state of this Analytics Property's quota. Quota is returned in [AccessQuota](#AccessQuota). For account-level requests, this field must be false. */
		returnEntityQuota?: boolean | null;

		/** This request's time zone if specified. If unspecified, the property's time zone is used. The request's time zone is used to interpret the start & end dates of the report. Formatted as strings from the IANA Time Zone database (https://www.iana.org/time-zones); for example "America/New_York" or "Asia/Tokyo". */
		timeZone?: string | null;
	}

	/** The request for a Data Access Record Report. */
	export interface GoogleAnalyticsAdminV1alphaRunAccessReportRequestFormProperties {

		/** Optional. Decides whether to return the users within user groups. This field works only when include_all_users is set to true. If true, it will return all users with access to the specified property or account. If false, only the users with direct access will be returned. */
		expandGroups: FormControl<boolean | null | undefined>,

		/** Optional. Determines whether to include users who have never made an API call in the response. If true, all users with access to the specified property or account are included in the response, regardless of whether they have made an API call or not. If false, only the users who have made an API call will be included. */
		includeAllUsers: FormControl<boolean | null | undefined>,

		/** The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 100,000 rows per request, no matter how many you ask for. `limit` must be positive. The API may return fewer rows than the requested `limit`, if there aren't as many remaining rows as the `limit`. For instance, there are fewer than 300 possible values for the dimension `country`, so when reporting on only `country`, you can't get more than 300 rows, even if you set `limit` to a higher value. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). */
		limit: FormControl<string | null | undefined>,

		/** The row count of the start row. The first row is counted as row 0. If offset is unspecified, it is treated as 0. If offset is zero, then this method will return the first page of results with `limit` entries. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). */
		offset: FormControl<string | null | undefined>,

		/** Toggles whether to return the current state of this Analytics Property's quota. Quota is returned in [AccessQuota](#AccessQuota). For account-level requests, this field must be false. */
		returnEntityQuota: FormControl<boolean | null | undefined>,

		/** This request's time zone if specified. If unspecified, the property's time zone is used. The request's time zone is used to interpret the start & end dates of the report. Formatted as strings from the IANA Time Zone database (https://www.iana.org/time-zones); for example "America/New_York" or "Asia/Tokyo". */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaRunAccessReportRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaRunAccessReportRequestFormProperties>({
			expandGroups: new FormControl<boolean | null | undefined>(undefined),
			includeAllUsers: new FormControl<boolean | null | undefined>(undefined),
			limit: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<string | null | undefined>(undefined),
			returnEntityQuota: new FormControl<boolean | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The customized Data Access Record Report response. */
	export interface GoogleAnalyticsAdminV1alphaRunAccessReportResponse {

		/** The header for a column in the report that corresponds to a specific dimension. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows. */
		dimensionHeaders?: Array<GoogleAnalyticsAdminV1alphaAccessDimensionHeader>;

		/** The header for a column in the report that corresponds to a specific metric. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows. */
		metricHeaders?: Array<GoogleAnalyticsAdminV1alphaAccessMetricHeader>;

		/** Current state of all quotas for this Analytics property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors. */
		quota?: GoogleAnalyticsAdminV1alphaAccessQuota;

		/**
		 * The total number of rows in the query result. `rowCount` is independent of the number of rows returned in the response, the `limit` request parameter, and the `offset` request parameter. For example if a query returns 175 rows and includes `limit` of 50 in the API request, the response will contain `rowCount` of 175 but only 50 rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rowCount?: number | null;

		/** Rows of dimension value combinations and metric values in the report. */
		rows?: Array<GoogleAnalyticsAdminV1alphaAccessRow>;
	}

	/** The customized Data Access Record Report response. */
	export interface GoogleAnalyticsAdminV1alphaRunAccessReportResponseFormProperties {

		/**
		 * The total number of rows in the query result. `rowCount` is independent of the number of rows returned in the response, the `limit` request parameter, and the `offset` request parameter. For example if a query returns 175 rows and includes `limit` of 50 in the API request, the response will contain `rowCount` of 175 but only 50 rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rowCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaRunAccessReportResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaRunAccessReportResponseFormProperties>({
			rowCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request message for SearchChangeHistoryEvents RPC. */
	export interface GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest {

		/** Optional. If set, only return changes that match one or more of these types of actions. */
		action?: Array<GoogleAnalyticsAdminV1alphaChangeHistoryChangeAction>;

		/** Optional. If set, only return changes if they are made by a user in this list. */
		actorEmail?: Array<string>;

		/** Optional. If set, only return changes made after this time (inclusive). */
		earliestChangeTime?: string | null;

		/** Optional. If set, only return changes made before this time (inclusive). */
		latestChangeTime?: string | null;

		/**
		 * Optional. The maximum number of ChangeHistoryEvent items to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 items will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize?: number | null;

		/** Optional. A page token, received from a previous `SearchChangeHistoryEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchChangeHistoryEvents` must match the call that provided the page token. */
		pageToken?: string | null;

		/** Optional. Resource name for a child property. If set, only return changes made to this property or its child resources. Format: properties/{propertyId} Example: "properties/100" */
		property?: string | null;

		/** Optional. If set, only return changes if they are for a resource that matches at least one of these types. */
		resourceType?: Array<string>;
	}

	/** Request message for SearchChangeHistoryEvents RPC. */
	export interface GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestFormProperties {

		/** Optional. If set, only return changes made after this time (inclusive). */
		earliestChangeTime: FormControl<string | null | undefined>,

		/** Optional. If set, only return changes made before this time (inclusive). */
		latestChangeTime: FormControl<string | null | undefined>,

		/**
		 * Optional. The maximum number of ChangeHistoryEvent items to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 items will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize: FormControl<number | null | undefined>,

		/** Optional. A page token, received from a previous `SearchChangeHistoryEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchChangeHistoryEvents` must match the call that provided the page token. */
		pageToken: FormControl<string | null | undefined>,

		/** Optional. Resource name for a child property. If set, only return changes made to this property or its child resources. Format: properties/{propertyId} Example: "properties/100" */
		property: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestFormProperties>({
			earliestChangeTime: new FormControl<string | null | undefined>(undefined),
			latestChangeTime: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			property: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for SearchAccounts RPC. */
	export interface GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse {

		/** Results that were accessible to the caller. */
		changeHistoryEvents?: Array<GoogleAnalyticsAdminV1alphaChangeHistoryEvent>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for SearchAccounts RPC. */
	export interface GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for setting the opt out status for the automated GA4 setup process. */
	export interface GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutRequest {

		/** The status to set. */
		optOut?: boolean | null;

		/** Required. The UA property to set the opt out status. Note this request uses the internal property ID, not the tracking ID of the form UA-XXXXXX-YY. Format: properties/{internalWebPropertyId} Example: properties/1234 */
		property?: string | null;
	}

	/** Request for setting the opt out status for the automated GA4 setup process. */
	export interface GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutRequestFormProperties {

		/** The status to set. */
		optOut: FormControl<boolean | null | undefined>,

		/** Required. The UA property to set the opt out status. Note this request uses the internal property ID, not the tracking ID of the form UA-XXXXXX-YY. Format: properties/{internalWebPropertyId} Example: properties/1234 */
		property: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutRequestFormProperties>({
			optOut: new FormControl<boolean | null | undefined>(undefined),
			property: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for setting the opt out status for the automated GA4 setup process. */
	export interface GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutResponse {
	}

	/** Response message for setting the opt out status for the automated GA4 setup process. */
	export interface GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutResponseFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutResponseFormProperties>({
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmpty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmptyFormProperties {
	}
	export function CreateGoogleProtobufEmptyFormGroup() {
		return new FormGroup<GoogleProtobufEmptyFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns summaries of all accounts accessible by the caller.
		 * Get v1alpha/accountSummaries
		 * @param {number} pageSize The maximum number of AccountSummary resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListAccountSummaries` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountSummaries` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1alphaListAccountSummariesResponse} Successful response
		 */
		Analyticsadmin_accountSummaries_list(pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1alphaListAccountSummariesResponse> {
			return this.http.get<GoogleAnalyticsAdminV1alphaListAccountSummariesResponse>(this.baseUri + 'v1alpha/accountSummaries?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.
		 * Get v1alpha/accounts
		 * @param {number} pageSize The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token.
		 * @param {boolean} showDeleted Whether to include soft-deleted (ie: "trashed") Accounts in the results. Accounts can be inspected to determine whether they are deleted or not.
		 * @return {GoogleAnalyticsAdminV1alphaListAccountsResponse} Successful response
		 */
		Analyticsadmin_accounts_list(pageSize: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined): Observable<GoogleAnalyticsAdminV1alphaListAccountsResponse> {
			return this.http.get<GoogleAnalyticsAdminV1alphaListAccountsResponse>(this.baseUri + 'v1alpha/accounts?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted, {});
		}

		/**
		 * Requests a ticket for creating an account.
		 * Post v1alpha/accounts:provisionAccountTicket
		 * @return {GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse} Successful response
		 */
		Analyticsadmin_accounts_provisionAccountTicket(requestBody: GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest): Observable<GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse> {
			return this.http.post<GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse>(this.baseUri + 'v1alpha/accounts:provisionAccountTicket', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
		 * Get v1alpha/properties
		 * @param {string} filter Required. An expression for filtering the results of the request. Fields eligible for filtering are: `parent:`(The resource name of the parent account/property) or `ancestor:`(The resource name of the parent account) or `firebase_project:`(The id or number of the linked firebase project). Some examples of filters: ``` | Filter | Description | |-----------------------------|-------------------------------------------| | parent:accounts/123 | The account with account id: 123. | | parent:properties/123 | The property with property id: 123. | | ancestor:accounts/123 | The account with account id: 123. | | firebase_project:project-id | The firebase project with id: project-id. | | firebase_project:123 | The firebase project with number: 123. | ```
		 * @param {number} pageSize The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListProperties` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProperties` must match the call that provided the page token.
		 * @param {boolean} showDeleted Whether to include soft-deleted (ie: "trashed") Properties in the results. Properties can be inspected to determine whether they are deleted or not.
		 * @return {GoogleAnalyticsAdminV1alphaListPropertiesResponse} Successful response
		 */
		Analyticsadmin_properties_list(filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined): Observable<GoogleAnalyticsAdminV1alphaListPropertiesResponse> {
			return this.http.get<GoogleAnalyticsAdminV1alphaListPropertiesResponse>(this.baseUri + 'v1alpha/properties?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted, {});
		}

		/**
		 * Creates an "GA4" property with the specified location and attributes.
		 * Post v1alpha/properties
		 * @return {GoogleAnalyticsAdminV1alphaProperty} Successful response
		 */
		Analyticsadmin_properties_create(requestBody: GoogleAnalyticsAdminV1alphaProperty): Observable<GoogleAnalyticsAdminV1alphaProperty> {
			return this.http.post<GoogleAnalyticsAdminV1alphaProperty>(this.baseUri + 'v1alpha/properties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a connected site tag for a Universal Analytics property. You can create a maximum of 20 connected site tags per property. Note: This API cannot be used on GA4 properties.
		 * Post v1alpha/properties:createConnectedSiteTag
		 * @return {GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagResponse} Successful response
		 */
		Analyticsadmin_properties_createConnectedSiteTag(requestBody: GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagRequest): Observable<GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagResponse> {
			return this.http.post<GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagResponse>(this.baseUri + 'v1alpha/properties:createConnectedSiteTag', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a roll-up property and all roll-up property source links.
		 * Post v1alpha/properties:createRollupProperty
		 * @return {GoogleAnalyticsAdminV1alphaCreateRollupPropertyResponse} Successful response
		 */
		Analyticsadmin_properties_createRollupProperty(requestBody: GoogleAnalyticsAdminV1alphaCreateRollupPropertyRequest): Observable<GoogleAnalyticsAdminV1alphaCreateRollupPropertyResponse> {
			return this.http.post<GoogleAnalyticsAdminV1alphaCreateRollupPropertyResponse>(this.baseUri + 'v1alpha/properties:createRollupProperty', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a subproperty and a subproperty event filter that applies to the created subproperty.
		 * Post v1alpha/properties:createSubproperty
		 * @return {GoogleAnalyticsAdminV1alphaCreateSubpropertyResponse} Successful response
		 */
		Analyticsadmin_properties_createSubproperty(requestBody: GoogleAnalyticsAdminV1alphaCreateSubpropertyRequest): Observable<GoogleAnalyticsAdminV1alphaCreateSubpropertyResponse> {
			return this.http.post<GoogleAnalyticsAdminV1alphaCreateSubpropertyResponse>(this.baseUri + 'v1alpha/properties:createSubproperty', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a connected site tag for a Universal Analytics property. Note: this has no effect on GA4 properties.
		 * Post v1alpha/properties:deleteConnectedSiteTag
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Analyticsadmin_properties_deleteConnectedSiteTag(requestBody: GoogleAnalyticsAdminV1alphaDeleteConnectedSiteTagRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v1alpha/properties:deleteConnectedSiteTag', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetches the opt out status for the automated GA4 setup process for a UA property. Note: this has no effect on GA4 property.
		 * Post v1alpha/properties:fetchAutomatedGa4ConfigurationOptOut
		 * @return {GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse} Successful response
		 */
		Analyticsadmin_properties_fetchAutomatedGa4ConfigurationOptOut(requestBody: GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutRequest): Observable<GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse> {
			return this.http.post<GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse>(this.baseUri + 'v1alpha/properties:fetchAutomatedGa4ConfigurationOptOut', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Given a specified UA property, looks up the GA4 property connected to it. Note: this cannot be used with GA4 properties.
		 * Get v1alpha/properties:fetchConnectedGa4Property
		 * @param {string} property Required. The UA property for which to look up the connected GA4 property. Note this request uses the internal property ID, not the tracking ID of the form UA-XXXXXX-YY. Format: properties/{internal_web_property_id} Example: properties/1234
		 * @return {GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse} Successful response
		 */
		Analyticsadmin_properties_fetchConnectedGa4Property(property: string | null | undefined): Observable<GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse> {
			return this.http.get<GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse>(this.baseUri + 'v1alpha/properties:fetchConnectedGa4Property?property=' + (property == null ? '' : encodeURIComponent(property)), {});
		}

		/**
		 * Lists the connected site tags for a Universal Analytics property. A maximum of 20 connected site tags will be returned. Note: this has no effect on GA4 property.
		 * Post v1alpha/properties:listConnectedSiteTags
		 * @return {GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponse} Successful response
		 */
		Analyticsadmin_properties_listConnectedSiteTags(requestBody: GoogleAnalyticsAdminV1alphaListConnectedSiteTagsRequest): Observable<GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponse> {
			return this.http.post<GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponse>(this.baseUri + 'v1alpha/properties:listConnectedSiteTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the opt out status for the automated GA4 setup process for a UA property. Note: this has no effect on GA4 property.
		 * Post v1alpha/properties:setAutomatedGa4ConfigurationOptOut
		 * @return {GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutResponse} Successful response
		 */
		Analyticsadmin_properties_setAutomatedGa4ConfigurationOptOut(requestBody: GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutRequest): Observable<GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutResponse> {
			return this.http.post<GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutResponse>(this.baseUri + 'v1alpha/properties:setAutomatedGa4ConfigurationOptOut', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches through all changes to an account or its children given the specified set of filters.
		 * Post v1alpha/{account}:searchChangeHistoryEvents
		 * @param {string} account Required. The account resource for which to return change history resources. Format: accounts/{account} Example: "accounts/100"
		 * @return {GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse} Successful response
		 */
		Analyticsadmin_accounts_searchChangeHistoryEvents(account: string, requestBody: GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest): Observable<GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse> {
			return this.http.post<GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse>(this.baseUri + 'v1alpha/' + (account == null ? '' : encodeURIComponent(account)) + ':searchChangeHistoryEvents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).
		 * Post v1alpha/{entity}:runAccessReport
		 * @param {string} entity The Data Access Report supports requesting at the property level or account level. If requested at the account level, Data Access Reports include all access for all properties under that account. To request at the property level, entity should be for example 'properties/123' if "123" is your GA4 property ID. To request at the account level, entity should be for example 'accounts/1234' if "1234" is your GA4 Account ID.
		 * @return {GoogleAnalyticsAdminV1alphaRunAccessReportResponse} Successful response
		 */
		Analyticsadmin_properties_runAccessReport(entity: string, requestBody: GoogleAnalyticsAdminV1alphaRunAccessReportRequest): Observable<GoogleAnalyticsAdminV1alphaRunAccessReportResponse> {
			return this.http.post<GoogleAnalyticsAdminV1alphaRunAccessReportResponse>(this.baseUri + 'v1alpha/' + (entity == null ? '' : encodeURIComponent(entity)) + ':runAccessReport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a subproperty event filter.
		 * Delete v1alpha/{name}
		 * @param {string} name Required. Resource name of the subproperty event filter to delete. Format: properties/property_id/subpropertyEventFilters/subproperty_event_filter Example: properties/123/subpropertyEventFilters/456
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Analyticsadmin_properties_subpropertyEventFilters_delete(name: string): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Lookup for a single subproperty Event Filter.
		 * Get v1alpha/{name}
		 * @param {string} name Required. Resource name of the subproperty event filter to lookup. Format: properties/property_id/subpropertyEventFilters/subproperty_event_filter Example: properties/123/subpropertyEventFilters/456
		 * @return {GoogleAnalyticsAdminV1alphaSubpropertyEventFilter} Successful response
		 */
		Analyticsadmin_properties_subpropertyEventFilters_get(name: string): Observable<GoogleAnalyticsAdminV1alphaSubpropertyEventFilter> {
			return this.http.get<GoogleAnalyticsAdminV1alphaSubpropertyEventFilter>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a subproperty Event Filter.
		 * Patch v1alpha/{name}
		 * @param {string} name Output only. Format: properties/{ordinary_property_id}/subpropertyEventFilters/{sub_property_event_filter} Example: properties/1234/subpropertyEventFilters/5678
		 * @param {string} updateMask Required. The list of fields to update. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
		 * @return {GoogleAnalyticsAdminV1alphaSubpropertyEventFilter} Successful response
		 */
		Analyticsadmin_properties_subpropertyEventFilters_patch(name: string, updateMask: string | null | undefined, requestBody: GoogleAnalyticsAdminV1alphaSubpropertyEventFilter): Observable<GoogleAnalyticsAdminV1alphaSubpropertyEventFilter> {
			return this.http.patch<GoogleAnalyticsAdminV1alphaSubpropertyEventFilter>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Approves a DisplayVideo360AdvertiserLinkProposal. The DisplayVideo360AdvertiserLinkProposal will be deleted and a new DisplayVideo360AdvertiserLink will be created.
		 * Post v1alpha/{name}:approve
		 * @param {string} name Required. The name of the DisplayVideo360AdvertiserLinkProposal to approve. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
		 * @return {GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse} Successful response
		 */
		Analyticsadmin_properties_displayVideo360AdvertiserLinkProposals_approve(name: string, requestBody: GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalRequest): Observable<GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse> {
			return this.http.post<GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + ':approve', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Archives a CustomMetric on a property.
		 * Post v1alpha/{name}:archive
		 * @param {string} name Required. The name of the CustomMetric to archive. Example format: properties/1234/customMetrics/5678
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Analyticsadmin_properties_customMetrics_archive(name: string, requestBody: GoogleAnalyticsAdminV1alphaArchiveCustomMetricRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + ':archive', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels a DisplayVideo360AdvertiserLinkProposal. Cancelling can mean either: - Declining a proposal initiated from Display & Video 360 - Withdrawing a proposal initiated from Google Analytics After being cancelled, a proposal will eventually be deleted automatically.
		 * Post v1alpha/{name}:cancel
		 * @param {string} name Required. The name of the DisplayVideo360AdvertiserLinkProposal to cancel. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
		 * @return {GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal} Successful response
		 */
		Analyticsadmin_properties_displayVideo360AdvertiserLinkProposals_cancel(name: string, requestBody: GoogleAnalyticsAdminV1alphaCancelDisplayVideo360AdvertiserLinkProposalRequest): Observable<GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal> {
			return this.http.post<GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all access bindings on an account or property.
		 * Get v1alpha/{parent}/accessBindings
		 * @param {string} parent Required. Formats: - accounts/{account} - properties/{property}
		 * @param {number} pageSize The maximum number of access bindings to return. The service may return fewer than this value. If unspecified, at most 200 access bindings will be returned. The maximum value is 500; values above 500 will be coerced to 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListAccessBindings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccessBindings` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1alphaListAccessBindingsResponse} Successful response
		 */
		Analyticsadmin_properties_accessBindings_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1alphaListAccessBindingsResponse> {
			return this.http.get<GoogleAnalyticsAdminV1alphaListAccessBindingsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/accessBindings&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an access binding on an account or property.
		 * Post v1alpha/{parent}/accessBindings
		 * @param {string} parent Required. Formats: - accounts/{account} - properties/{property}
		 * @return {GoogleAnalyticsAdminV1alphaAccessBinding} Successful response
		 */
		Analyticsadmin_properties_accessBindings_create(parent: string, requestBody: GoogleAnalyticsAdminV1alphaAccessBinding): Observable<GoogleAnalyticsAdminV1alphaAccessBinding> {
			return this.http.post<GoogleAnalyticsAdminV1alphaAccessBinding>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/accessBindings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates information about multiple access bindings to an account or property. This method is transactional. If any AccessBinding cannot be created, none of the AccessBindings will be created.
		 * Post v1alpha/{parent}/accessBindings:batchCreate
		 * @param {string} parent Required. The account or property that owns the access bindings. The parent field in the CreateAccessBindingRequest messages must either be empty or match this field. Formats: - accounts/{account} - properties/{property}
		 * @return {GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse} Successful response
		 */
		Analyticsadmin_properties_accessBindings_batchCreate(parent: string, requestBody: GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsRequest): Observable<GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse> {
			return this.http.post<GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/accessBindings:batchCreate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes information about multiple users' links to an account or property.
		 * Post v1alpha/{parent}/accessBindings:batchDelete
		 * @param {string} parent Required. The account or property that owns the access bindings. The parent of all provided values for the 'names' field in DeleteAccessBindingRequest messages must match this field. Formats: - accounts/{account} - properties/{property}
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Analyticsadmin_properties_accessBindings_batchDelete(parent: string, requestBody: GoogleAnalyticsAdminV1alphaBatchDeleteAccessBindingsRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/accessBindings:batchDelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about multiple access bindings to an account or property.
		 * Get v1alpha/{parent}/accessBindings:batchGet
		 * @param {string} parent Required. The account or property that owns the access bindings. The parent of all provided values for the 'names' field must match this field. Formats: - accounts/{account} - properties/{property}
		 * @param {Array<string>} names Required. The names of the access bindings to retrieve. A maximum of 1000 access bindings can be retrieved in a batch. Formats: - accounts/{account}/accessBindings/{accessBinding} - properties/{property}/accessBindings/{accessBinding}
		 * @return {GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse} Successful response
		 */
		Analyticsadmin_properties_accessBindings_batchGet(parent: string, names: Array<string> | null | undefined): Observable<GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse> {
			return this.http.get<GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/accessBindings:batchGet&' + names?.map(z => `names=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates information about multiple access bindings to an account or property.
		 * Post v1alpha/{parent}/accessBindings:batchUpdate
		 * @param {string} parent Required. The account or property that owns the access bindings. The parent of all provided AccessBinding in UpdateAccessBindingRequest messages must match this field. Formats: - accounts/{account} - properties/{property}
		 * @return {GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse} Successful response
		 */
		Analyticsadmin_properties_accessBindings_batchUpdate(parent: string, requestBody: GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequest): Observable<GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse> {
			return this.http.post<GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/accessBindings:batchUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists AdSenseLinks on a property.
		 * Get v1alpha/{parent}/adSenseLinks
		 * @param {string} parent Required. Resource name of the parent property. Format: properties/{propertyId} Example: properties/1234
		 * @param {number} pageSize The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token received from a previous `ListAdSenseLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAdSenseLinks` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1alphaListAdSenseLinksResponse} Successful response
		 */
		Analyticsadmin_properties_adSenseLinks_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1alphaListAdSenseLinksResponse> {
			return this.http.get<GoogleAnalyticsAdminV1alphaListAdSenseLinksResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/adSenseLinks&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an AdSenseLink.
		 * Post v1alpha/{parent}/adSenseLinks
		 * @param {string} parent Required. The property for which to create an AdSense Link. Format: properties/{propertyId} Example: properties/1234
		 * @return {GoogleAnalyticsAdminV1alphaAdSenseLink} Successful response
		 */
		Analyticsadmin_properties_adSenseLinks_create(parent: string, requestBody: GoogleAnalyticsAdminV1alphaAdSenseLink): Observable<GoogleAnalyticsAdminV1alphaAdSenseLink> {
			return this.http.post<GoogleAnalyticsAdminV1alphaAdSenseLink>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/adSenseLinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Audiences on a property. Audiences created before 2020 may not be supported. Default audiences will not show filter definitions.
		 * Get v1alpha/{parent}/audiences
		 * @param {string} parent Required. Example format: properties/1234
		 * @param {number} pageSize The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListAudiences` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAudiences` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1alphaListAudiencesResponse} Successful response
		 */
		Analyticsadmin_properties_audiences_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1alphaListAudiencesResponse> {
			return this.http.get<GoogleAnalyticsAdminV1alphaListAudiencesResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/audiences&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an Audience.
		 * Post v1alpha/{parent}/audiences
		 * @param {string} parent Required. Example format: properties/1234
		 * @return {GoogleAnalyticsAdminV1alphaAudience} Successful response
		 */
		Analyticsadmin_properties_audiences_create(parent: string, requestBody: GoogleAnalyticsAdminV1alphaAudience): Observable<GoogleAnalyticsAdminV1alphaAudience> {
			return this.http.post<GoogleAnalyticsAdminV1alphaAudience>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/audiences', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists BigQuery Links on a property.
		 * Get v1alpha/{parent}/bigQueryLinks
		 * @param {string} parent Required. The name of the property to list BigQuery links under. Format: properties/{property_id} Example: properties/1234
		 * @param {number} pageSize The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListBigQueryLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBigQueryLinks` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse} Successful response
		 */
		Analyticsadmin_properties_bigQueryLinks_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse> {
			return this.http.get<GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/bigQueryLinks&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists ChannelGroups on a property.
		 * Get v1alpha/{parent}/channelGroups
		 * @param {string} parent Required. The property for which to list ChannelGroups. Example format: properties/1234
		 * @param {number} pageSize The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListChannelGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListChannelGroups` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1alphaListChannelGroupsResponse} Successful response
		 */
		Analyticsadmin_properties_channelGroups_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1alphaListChannelGroupsResponse> {
			return this.http.get<GoogleAnalyticsAdminV1alphaListChannelGroupsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/channelGroups&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a ChannelGroup.
		 * Post v1alpha/{parent}/channelGroups
		 * @param {string} parent Required. The property for which to create a ChannelGroup. Example format: properties/1234
		 * @return {GoogleAnalyticsAdminV1alphaChannelGroup} Successful response
		 */
		Analyticsadmin_properties_channelGroups_create(parent: string, requestBody: GoogleAnalyticsAdminV1alphaChannelGroup): Observable<GoogleAnalyticsAdminV1alphaChannelGroup> {
			return this.http.post<GoogleAnalyticsAdminV1alphaChannelGroup>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/channelGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
		 * Get v1alpha/{parent}/conversionEvents
		 * @param {string} parent Required. The resource name of the parent property. Example: 'properties/123'
		 * @param {number} pageSize The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListConversionEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConversionEvents` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1alphaListConversionEventsResponse} Successful response
		 */
		Analyticsadmin_properties_conversionEvents_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1alphaListConversionEventsResponse> {
			return this.http.get<GoogleAnalyticsAdminV1alphaListConversionEventsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/conversionEvents&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a conversion event with the specified attributes.
		 * Post v1alpha/{parent}/conversionEvents
		 * @param {string} parent Required. The resource name of the parent property where this conversion event will be created. Format: properties/123
		 * @return {GoogleAnalyticsAdminV1alphaConversionEvent} Successful response
		 */
		Analyticsadmin_properties_conversionEvents_create(parent: string, requestBody: GoogleAnalyticsAdminV1alphaConversionEvent): Observable<GoogleAnalyticsAdminV1alphaConversionEvent> {
			return this.http.post<GoogleAnalyticsAdminV1alphaConversionEvent>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/conversionEvents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists CustomDimensions on a property.
		 * Get v1alpha/{parent}/customDimensions
		 * @param {string} parent Required. Example format: properties/1234
		 * @param {number} pageSize The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListCustomDimensions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomDimensions` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse} Successful response
		 */
		Analyticsadmin_properties_customDimensions_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse> {
			return this.http.get<GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customDimensions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a CustomDimension.
		 * Post v1alpha/{parent}/customDimensions
		 * @param {string} parent Required. Example format: properties/1234
		 * @return {GoogleAnalyticsAdminV1alphaCustomDimension} Successful response
		 */
		Analyticsadmin_properties_customDimensions_create(parent: string, requestBody: GoogleAnalyticsAdminV1alphaCustomDimension): Observable<GoogleAnalyticsAdminV1alphaCustomDimension> {
			return this.http.post<GoogleAnalyticsAdminV1alphaCustomDimension>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customDimensions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists CustomMetrics on a property.
		 * Get v1alpha/{parent}/customMetrics
		 * @param {string} parent Required. Example format: properties/1234
		 * @param {number} pageSize The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListCustomMetrics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomMetrics` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1alphaListCustomMetricsResponse} Successful response
		 */
		Analyticsadmin_properties_customMetrics_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1alphaListCustomMetricsResponse> {
			return this.http.get<GoogleAnalyticsAdminV1alphaListCustomMetricsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customMetrics&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a CustomMetric.
		 * Post v1alpha/{parent}/customMetrics
		 * @param {string} parent Required. Example format: properties/1234
		 * @return {GoogleAnalyticsAdminV1alphaCustomMetric} Successful response
		 */
		Analyticsadmin_properties_customMetrics_create(parent: string, requestBody: GoogleAnalyticsAdminV1alphaCustomMetric): Observable<GoogleAnalyticsAdminV1alphaCustomMetric> {
			return this.http.post<GoogleAnalyticsAdminV1alphaCustomMetric>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customMetrics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists DataStreams on a property.
		 * Get v1alpha/{parent}/dataStreams
		 * @param {string} parent Required. Example format: properties/1234
		 * @param {number} pageSize The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListDataStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDataStreams` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1alphaListDataStreamsResponse} Successful response
		 */
		Analyticsadmin_properties_dataStreams_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1alphaListDataStreamsResponse> {
			return this.http.get<GoogleAnalyticsAdminV1alphaListDataStreamsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dataStreams&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a DataStream.
		 * Post v1alpha/{parent}/dataStreams
		 * @param {string} parent Required. Example format: properties/1234
		 * @return {GoogleAnalyticsAdminV1alphaDataStream} Successful response
		 */
		Analyticsadmin_properties_dataStreams_create(parent: string, requestBody: GoogleAnalyticsAdminV1alphaDataStream): Observable<GoogleAnalyticsAdminV1alphaDataStream> {
			return this.http.post<GoogleAnalyticsAdminV1alphaDataStream>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dataStreams', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists DisplayVideo360AdvertiserLinkProposals on a property.
		 * Get v1alpha/{parent}/displayVideo360AdvertiserLinkProposals
		 * @param {string} parent Required. Example format: properties/1234
		 * @param {number} pageSize The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListDisplayVideo360AdvertiserLinkProposals` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDisplayVideo360AdvertiserLinkProposals` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse} Successful response
		 */
		Analyticsadmin_properties_displayVideo360AdvertiserLinkProposals_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse> {
			return this.http.get<GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/displayVideo360AdvertiserLinkProposals&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a DisplayVideo360AdvertiserLinkProposal.
		 * Post v1alpha/{parent}/displayVideo360AdvertiserLinkProposals
		 * @param {string} parent Required. Example format: properties/1234
		 * @return {GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal} Successful response
		 */
		Analyticsadmin_properties_displayVideo360AdvertiserLinkProposals_create(parent: string, requestBody: GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal): Observable<GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal> {
			return this.http.post<GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/displayVideo360AdvertiserLinkProposals', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all DisplayVideo360AdvertiserLinks on a property.
		 * Get v1alpha/{parent}/displayVideo360AdvertiserLinks
		 * @param {string} parent Required. Example format: properties/1234
		 * @param {number} pageSize The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListDisplayVideo360AdvertiserLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDisplayVideo360AdvertiserLinks` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse} Successful response
		 */
		Analyticsadmin_properties_displayVideo360AdvertiserLinks_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse> {
			return this.http.get<GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/displayVideo360AdvertiserLinks&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a DisplayVideo360AdvertiserLink. This can only be utilized by users who have proper authorization both on the Google Analytics property and on the Display & Video 360 advertiser. Users who do not have access to the Display & Video 360 advertiser should instead seek to create a DisplayVideo360LinkProposal.
		 * Post v1alpha/{parent}/displayVideo360AdvertiserLinks
		 * @param {string} parent Required. Example format: properties/1234
		 * @return {GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink} Successful response
		 */
		Analyticsadmin_properties_displayVideo360AdvertiserLinks_create(parent: string, requestBody: GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink): Observable<GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink> {
			return this.http.post<GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/displayVideo360AdvertiserLinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists EventCreateRules on a web data stream.
		 * Get v1alpha/{parent}/eventCreateRules
		 * @param {string} parent Required. Example format: properties/123/dataStreams/456
		 * @param {number} pageSize The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListEventCreateRules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEventCreateRules` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1alphaListEventCreateRulesResponse} Successful response
		 */
		Analyticsadmin_properties_dataStreams_eventCreateRules_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1alphaListEventCreateRulesResponse> {
			return this.http.get<GoogleAnalyticsAdminV1alphaListEventCreateRulesResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/eventCreateRules&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an EventCreateRule.
		 * Post v1alpha/{parent}/eventCreateRules
		 * @param {string} parent Required. Example format: properties/123/dataStreams/456
		 * @return {GoogleAnalyticsAdminV1alphaEventCreateRule} Successful response
		 */
		Analyticsadmin_properties_dataStreams_eventCreateRules_create(parent: string, requestBody: GoogleAnalyticsAdminV1alphaEventCreateRule): Observable<GoogleAnalyticsAdminV1alphaEventCreateRule> {
			return this.http.post<GoogleAnalyticsAdminV1alphaEventCreateRule>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/eventCreateRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists ExpandedDataSets on a property.
		 * Get v1alpha/{parent}/expandedDataSets
		 * @param {string} parent Required. Example format: properties/1234
		 * @param {number} pageSize The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListExpandedDataSets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExpandedDataSet` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1alphaListExpandedDataSetsResponse} Successful response
		 */
		Analyticsadmin_properties_expandedDataSets_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1alphaListExpandedDataSetsResponse> {
			return this.http.get<GoogleAnalyticsAdminV1alphaListExpandedDataSetsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/expandedDataSets&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a ExpandedDataSet.
		 * Post v1alpha/{parent}/expandedDataSets
		 * @param {string} parent Required. Example format: properties/1234
		 * @return {GoogleAnalyticsAdminV1alphaExpandedDataSet} Successful response
		 */
		Analyticsadmin_properties_expandedDataSets_create(parent: string, requestBody: GoogleAnalyticsAdminV1alphaExpandedDataSet): Observable<GoogleAnalyticsAdminV1alphaExpandedDataSet> {
			return this.http.post<GoogleAnalyticsAdminV1alphaExpandedDataSet>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/expandedDataSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
		 * Get v1alpha/{parent}/firebaseLinks
		 * @param {string} parent Required. Format: properties/{property_id} Example: properties/1234
		 * @param {number} pageSize The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListFirebaseLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFirebaseLinks` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse} Successful response
		 */
		Analyticsadmin_properties_firebaseLinks_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse> {
			return this.http.get<GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/firebaseLinks&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a FirebaseLink. Properties can have at most one FirebaseLink.
		 * Post v1alpha/{parent}/firebaseLinks
		 * @param {string} parent Required. Format: properties/{property_id} Example: properties/1234
		 * @return {GoogleAnalyticsAdminV1alphaFirebaseLink} Successful response
		 */
		Analyticsadmin_properties_firebaseLinks_create(parent: string, requestBody: GoogleAnalyticsAdminV1alphaFirebaseLink): Observable<GoogleAnalyticsAdminV1alphaFirebaseLink> {
			return this.http.post<GoogleAnalyticsAdminV1alphaFirebaseLink>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/firebaseLinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists GoogleAdsLinks on a property.
		 * Get v1alpha/{parent}/googleAdsLinks
		 * @param {string} parent Required. Example format: properties/1234
		 * @param {number} pageSize The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListGoogleAdsLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGoogleAdsLinks` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse} Successful response
		 */
		Analyticsadmin_properties_googleAdsLinks_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse> {
			return this.http.get<GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/googleAdsLinks&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a GoogleAdsLink.
		 * Post v1alpha/{parent}/googleAdsLinks
		 * @param {string} parent Required. Example format: properties/1234
		 * @return {GoogleAnalyticsAdminV1alphaGoogleAdsLink} Successful response
		 */
		Analyticsadmin_properties_googleAdsLinks_create(parent: string, requestBody: GoogleAnalyticsAdminV1alphaGoogleAdsLink): Observable<GoogleAnalyticsAdminV1alphaGoogleAdsLink> {
			return this.http.post<GoogleAnalyticsAdminV1alphaGoogleAdsLink>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/googleAdsLinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns child MeasurementProtocolSecrets under the specified parent Property.
		 * Get v1alpha/{parent}/measurementProtocolSecrets
		 * @param {string} parent Required. The resource name of the parent stream. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets
		 * @param {number} pageSize The maximum number of resources to return. If unspecified, at most 10 resources will be returned. The maximum value is 10. Higher values will be coerced to the maximum.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListMeasurementProtocolSecrets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMeasurementProtocolSecrets` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse} Successful response
		 */
		Analyticsadmin_properties_dataStreams_measurementProtocolSecrets_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse> {
			return this.http.get<GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/measurementProtocolSecrets&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a measurement protocol secret.
		 * Post v1alpha/{parent}/measurementProtocolSecrets
		 * @param {string} parent Required. The parent resource where this secret will be created. Format: properties/{property}/dataStreams/{dataStream}
		 * @return {GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret} Successful response
		 */
		Analyticsadmin_properties_dataStreams_measurementProtocolSecrets_create(parent: string, requestBody: GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret): Observable<GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret> {
			return this.http.post<GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/measurementProtocolSecrets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists roll-up property source Links on a property. Only roll-up properties can have source links, so this method will throw an error if used on other types of properties.
		 * Get v1alpha/{parent}/rollupPropertySourceLinks
		 * @param {string} parent Required. The name of the roll-up property to list roll-up property source links under. Format: properties/{property_id} Example: properties/1234
		 * @param {number} pageSize Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A page token, received from a previous `ListRollupPropertySourceLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRollupPropertySourceLinks` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1alphaListRollupPropertySourceLinksResponse} Successful response
		 */
		Analyticsadmin_properties_rollupPropertySourceLinks_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1alphaListRollupPropertySourceLinksResponse> {
			return this.http.get<GoogleAnalyticsAdminV1alphaListRollupPropertySourceLinksResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/rollupPropertySourceLinks&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a roll-up property source link. Only roll-up properties can have source links, so this method will throw an error if used on other types of properties.
		 * Post v1alpha/{parent}/rollupPropertySourceLinks
		 * @param {string} parent Required. Format: properties/{property_id} Example: properties/1234
		 * @return {GoogleAnalyticsAdminV1alphaRollupPropertySourceLink} Successful response
		 */
		Analyticsadmin_properties_rollupPropertySourceLinks_create(parent: string, requestBody: GoogleAnalyticsAdminV1alphaRollupPropertySourceLink): Observable<GoogleAnalyticsAdminV1alphaRollupPropertySourceLink> {
			return this.http.post<GoogleAnalyticsAdminV1alphaRollupPropertySourceLink>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/rollupPropertySourceLinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists SKAdNetworkConversionValueSchema on a stream. Properties can have at most one SKAdNetworkConversionValueSchema.
		 * Get v1alpha/{parent}/sKAdNetworkConversionValueSchema
		 * @param {string} parent Required. The DataStream resource to list schemas for. Format: properties/{property_id}/dataStreams/{dataStream} Example: properties/1234/dataStreams/5678
		 * @param {number} pageSize The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListSKAdNetworkConversionValueSchemas` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSKAdNetworkConversionValueSchema` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1alphaListSKAdNetworkConversionValueSchemasResponse} Successful response
		 */
		Analyticsadmin_properties_dataStreams_sKAdNetworkConversionValueSchema_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1alphaListSKAdNetworkConversionValueSchemasResponse> {
			return this.http.get<GoogleAnalyticsAdminV1alphaListSKAdNetworkConversionValueSchemasResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sKAdNetworkConversionValueSchema&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a SKAdNetworkConversionValueSchema.
		 * Post v1alpha/{parent}/sKAdNetworkConversionValueSchema
		 * @param {string} parent Required. The parent resource where this schema will be created. Format: properties/{property}/dataStreams/{dataStream}
		 * @return {GoogleAnalyticsAdminV1alphaSKAdNetworkConversionValueSchema} Successful response
		 */
		Analyticsadmin_properties_dataStreams_sKAdNetworkConversionValueSchema_create(parent: string, requestBody: GoogleAnalyticsAdminV1alphaSKAdNetworkConversionValueSchema): Observable<GoogleAnalyticsAdminV1alphaSKAdNetworkConversionValueSchema> {
			return this.http.post<GoogleAnalyticsAdminV1alphaSKAdNetworkConversionValueSchema>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sKAdNetworkConversionValueSchema', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all SearchAds360Links on a property.
		 * Get v1alpha/{parent}/searchAds360Links
		 * @param {string} parent Required. Example format: properties/1234
		 * @param {number} pageSize The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListSearchAds360Links` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSearchAds360Links` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse} Successful response
		 */
		Analyticsadmin_properties_searchAds360Links_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse> {
			return this.http.get<GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/searchAds360Links&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a SearchAds360Link.
		 * Post v1alpha/{parent}/searchAds360Links
		 * @param {string} parent Required. Example format: properties/1234
		 * @return {GoogleAnalyticsAdminV1alphaSearchAds360Link} Successful response
		 */
		Analyticsadmin_properties_searchAds360Links_create(parent: string, requestBody: GoogleAnalyticsAdminV1alphaSearchAds360Link): Observable<GoogleAnalyticsAdminV1alphaSearchAds360Link> {
			return this.http.post<GoogleAnalyticsAdminV1alphaSearchAds360Link>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/searchAds360Links', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all subproperty Event Filters on a property.
		 * Get v1alpha/{parent}/subpropertyEventFilters
		 * @param {string} parent Required. Resource name of the ordinary property. Format: properties/property_id Example: properties/123
		 * @param {number} pageSize Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A page token, received from a previous `ListSubpropertyEventFilters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubpropertyEventFilters` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1alphaListSubpropertyEventFiltersResponse} Successful response
		 */
		Analyticsadmin_properties_subpropertyEventFilters_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1alphaListSubpropertyEventFiltersResponse> {
			return this.http.get<GoogleAnalyticsAdminV1alphaListSubpropertyEventFiltersResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/subpropertyEventFilters&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a subproperty Event Filter.
		 * Post v1alpha/{parent}/subpropertyEventFilters
		 * @param {string} parent Required. The ordinary property for which to create a subproperty event filter. Format: properties/property_id Example: properties/123
		 * @return {GoogleAnalyticsAdminV1alphaSubpropertyEventFilter} Successful response
		 */
		Analyticsadmin_properties_subpropertyEventFilters_create(parent: string, requestBody: GoogleAnalyticsAdminV1alphaSubpropertyEventFilter): Observable<GoogleAnalyticsAdminV1alphaSubpropertyEventFilter> {
			return this.http.post<GoogleAnalyticsAdminV1alphaSubpropertyEventFilter>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/subpropertyEventFilters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.
		 * Post v1alpha/{property}:acknowledgeUserDataCollection
		 * @param {string} property Required. The property for which to acknowledge user data collection.
		 * @return {GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionResponse} Successful response
		 */
		Analyticsadmin_properties_acknowledgeUserDataCollection(property: string, requestBody: GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionRequest): Observable<GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionResponse> {
			return this.http.post<GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionResponse>(this.baseUri + 'v1alpha/' + (property == null ? '' : encodeURIComponent(property)) + ':acknowledgeUserDataCollection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

