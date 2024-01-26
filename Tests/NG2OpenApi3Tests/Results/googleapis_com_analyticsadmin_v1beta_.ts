import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** To express that the result needs to be between two numbers (inclusive). */
	export interface GoogleAnalyticsAdminV1betaAccessBetweenFilter {

		/** To represent a number. */
		fromValue?: GoogleAnalyticsAdminV1betaNumericValue;

		/** To represent a number. */
		toValue?: GoogleAnalyticsAdminV1betaNumericValue;
	}

	/** To express that the result needs to be between two numbers (inclusive). */
	export interface GoogleAnalyticsAdminV1betaAccessBetweenFilterFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1betaAccessBetweenFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaAccessBetweenFilterFormProperties>({
		});

	}


	/** To represent a number. */
	export interface GoogleAnalyticsAdminV1betaNumericValue {

		/** Double value */
		doubleValue?: number | null;

		/** Integer value */
		int64Value?: string | null;
	}

	/** To represent a number. */
	export interface GoogleAnalyticsAdminV1betaNumericValueFormProperties {

		/** Double value */
		doubleValue: FormControl<number | null | undefined>,

		/** Integer value */
		int64Value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaNumericValueFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaNumericValueFormProperties>({
			doubleValue: new FormControl<number | null | undefined>(undefined),
			int64Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A contiguous range of days: startDate, startDate + 1, ..., endDate. */
	export interface GoogleAnalyticsAdminV1betaAccessDateRange {

		/** The inclusive end date for the query in the format `YYYY-MM-DD`. Cannot be before `startDate`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the current time in the request's time zone. */
		endDate?: string | null;

		/** The inclusive start date for the query in the format `YYYY-MM-DD`. Cannot be after `endDate`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the current time in the request's time zone. */
		startDate?: string | null;
	}

	/** A contiguous range of days: startDate, startDate + 1, ..., endDate. */
	export interface GoogleAnalyticsAdminV1betaAccessDateRangeFormProperties {

		/** The inclusive end date for the query in the format `YYYY-MM-DD`. Cannot be before `startDate`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the current time in the request's time zone. */
		endDate: FormControl<string | null | undefined>,

		/** The inclusive start date for the query in the format `YYYY-MM-DD`. Cannot be after `endDate`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the current time in the request's time zone. */
		startDate: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaAccessDateRangeFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaAccessDateRangeFormProperties>({
			endDate: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dimensions are attributes of your data. For example, the dimension `userEmail` indicates the email of the user that accessed reporting data. Dimension values in report responses are strings. */
	export interface GoogleAnalyticsAdminV1betaAccessDimension {

		/** The API name of the dimension. See [Data Access Schema](https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema) for the list of dimensions supported in this API. Dimensions are referenced by name in `dimensionFilter` and `orderBys`. */
		dimensionName?: string | null;
	}

	/** Dimensions are attributes of your data. For example, the dimension `userEmail` indicates the email of the user that accessed reporting data. Dimension values in report responses are strings. */
	export interface GoogleAnalyticsAdminV1betaAccessDimensionFormProperties {

		/** The API name of the dimension. See [Data Access Schema](https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema) for the list of dimensions supported in this API. Dimensions are referenced by name in `dimensionFilter` and `orderBys`. */
		dimensionName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaAccessDimensionFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaAccessDimensionFormProperties>({
			dimensionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a dimension column in the report. Dimensions requested in a report produce column entries within rows and DimensionHeaders. However, dimensions used exclusively within filters or expressions do not produce columns in a report; correspondingly, those dimensions do not produce headers. */
	export interface GoogleAnalyticsAdminV1betaAccessDimensionHeader {

		/** The dimension's name; for example 'userEmail'. */
		dimensionName?: string | null;
	}

	/** Describes a dimension column in the report. Dimensions requested in a report produce column entries within rows and DimensionHeaders. However, dimensions used exclusively within filters or expressions do not produce columns in a report; correspondingly, those dimensions do not produce headers. */
	export interface GoogleAnalyticsAdminV1betaAccessDimensionHeaderFormProperties {

		/** The dimension's name; for example 'userEmail'. */
		dimensionName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaAccessDimensionHeaderFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaAccessDimensionHeaderFormProperties>({
			dimensionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The value of a dimension. */
	export interface GoogleAnalyticsAdminV1betaAccessDimensionValue {

		/** The dimension value. For example, this value may be 'France' for the 'country' dimension. */
		value?: string | null;
	}

	/** The value of a dimension. */
	export interface GoogleAnalyticsAdminV1betaAccessDimensionValueFormProperties {

		/** The dimension value. For example, this value may be 'France' for the 'country' dimension. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaAccessDimensionValueFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaAccessDimensionValueFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An expression to filter dimension or metric values. */
	export interface GoogleAnalyticsAdminV1betaAccessFilter {

		/** To express that the result needs to be between two numbers (inclusive). */
		betweenFilter?: GoogleAnalyticsAdminV1betaAccessBetweenFilter;

		/** The dimension name or metric name. */
		fieldName?: string | null;

		/** The result needs to be in a list of string values. */
		inListFilter?: GoogleAnalyticsAdminV1betaAccessInListFilter;

		/** Filters for numeric or date values. */
		numericFilter?: GoogleAnalyticsAdminV1betaAccessNumericFilter;

		/** The filter for strings. */
		stringFilter?: GoogleAnalyticsAdminV1betaAccessStringFilter;
	}

	/** An expression to filter dimension or metric values. */
	export interface GoogleAnalyticsAdminV1betaAccessFilterFormProperties {

		/** The dimension name or metric name. */
		fieldName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaAccessFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaAccessFilterFormProperties>({
			fieldName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result needs to be in a list of string values. */
	export interface GoogleAnalyticsAdminV1betaAccessInListFilter {

		/** If true, the string value is case sensitive. */
		caseSensitive?: boolean | null;

		/** The list of string values. Must be non-empty. */
		values?: Array<string>;
	}

	/** The result needs to be in a list of string values. */
	export interface GoogleAnalyticsAdminV1betaAccessInListFilterFormProperties {

		/** If true, the string value is case sensitive. */
		caseSensitive: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaAccessInListFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaAccessInListFilterFormProperties>({
			caseSensitive: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Filters for numeric or date values. */
	export interface GoogleAnalyticsAdminV1betaAccessNumericFilter {

		/** The operation type for this filter. */
		operation?: GoogleAnalyticsAdminV1betaAccessNumericFilterOperation | null;

		/** To represent a number. */
		value?: GoogleAnalyticsAdminV1betaNumericValue;
	}

	/** Filters for numeric or date values. */
	export interface GoogleAnalyticsAdminV1betaAccessNumericFilterFormProperties {

		/** The operation type for this filter. */
		operation: FormControl<GoogleAnalyticsAdminV1betaAccessNumericFilterOperation | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaAccessNumericFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaAccessNumericFilterFormProperties>({
			operation: new FormControl<GoogleAnalyticsAdminV1betaAccessNumericFilterOperation | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1betaAccessNumericFilterOperation { OPERATION_UNSPECIFIED = 0, EQUAL = 1, LESS_THAN = 2, LESS_THAN_OR_EQUAL = 3, GREATER_THAN = 4, GREATER_THAN_OR_EQUAL = 5 }


	/** The filter for strings. */
	export interface GoogleAnalyticsAdminV1betaAccessStringFilter {

		/** If true, the string value is case sensitive. */
		caseSensitive?: boolean | null;

		/** The match type for this filter. */
		matchType?: GoogleAnalyticsAdminV1betaAccessStringFilterMatchType | null;

		/** The string value used for the matching. */
		value?: string | null;
	}

	/** The filter for strings. */
	export interface GoogleAnalyticsAdminV1betaAccessStringFilterFormProperties {

		/** If true, the string value is case sensitive. */
		caseSensitive: FormControl<boolean | null | undefined>,

		/** The match type for this filter. */
		matchType: FormControl<GoogleAnalyticsAdminV1betaAccessStringFilterMatchType | null | undefined>,

		/** The string value used for the matching. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaAccessStringFilterFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaAccessStringFilterFormProperties>({
			caseSensitive: new FormControl<boolean | null | undefined>(undefined),
			matchType: new FormControl<GoogleAnalyticsAdminV1betaAccessStringFilterMatchType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1betaAccessStringFilterMatchType { MATCH_TYPE_UNSPECIFIED = 0, EXACT = 1, BEGINS_WITH = 2, ENDS_WITH = 3, CONTAINS = 4, FULL_REGEXP = 5, PARTIAL_REGEXP = 6 }


	/** Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics. */
	export interface GoogleAnalyticsAdminV1betaAccessFilterExpression {

		/** An expression to filter dimension or metric values. */
		accessFilter?: GoogleAnalyticsAdminV1betaAccessFilter;

		/** A list of filter expressions. */
		andGroup?: GoogleAnalyticsAdminV1betaAccessFilterExpressionList;

		/** Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics. */
		notExpression?: GoogleAnalyticsAdminV1betaAccessFilterExpression;

		/** A list of filter expressions. */
		orGroup?: GoogleAnalyticsAdminV1betaAccessFilterExpressionList;
	}

	/** Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics. */
	export interface GoogleAnalyticsAdminV1betaAccessFilterExpressionFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1betaAccessFilterExpressionFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaAccessFilterExpressionFormProperties>({
		});

	}


	/** A list of filter expressions. */
	export interface GoogleAnalyticsAdminV1betaAccessFilterExpressionList {

		/** A list of filter expressions. */
		expressions?: Array<GoogleAnalyticsAdminV1betaAccessFilterExpression>;
	}

	/** A list of filter expressions. */
	export interface GoogleAnalyticsAdminV1betaAccessFilterExpressionListFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1betaAccessFilterExpressionListFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaAccessFilterExpressionListFormProperties>({
		});

	}


	/** The quantitative measurements of a report. For example, the metric `accessCount` is the total number of data access records. */
	export interface GoogleAnalyticsAdminV1betaAccessMetric {

		/** The API name of the metric. See [Data Access Schema](https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema) for the list of metrics supported in this API. Metrics are referenced by name in `metricFilter` & `orderBys`. */
		metricName?: string | null;
	}

	/** The quantitative measurements of a report. For example, the metric `accessCount` is the total number of data access records. */
	export interface GoogleAnalyticsAdminV1betaAccessMetricFormProperties {

		/** The API name of the metric. See [Data Access Schema](https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema) for the list of metrics supported in this API. Metrics are referenced by name in `metricFilter` & `orderBys`. */
		metricName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaAccessMetricFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaAccessMetricFormProperties>({
			metricName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a metric column in the report. Visible metrics requested in a report produce column entries within rows and MetricHeaders. However, metrics used exclusively within filters or expressions do not produce columns in a report; correspondingly, those metrics do not produce headers. */
	export interface GoogleAnalyticsAdminV1betaAccessMetricHeader {

		/** The metric's name; for example 'accessCount'. */
		metricName?: string | null;
	}

	/** Describes a metric column in the report. Visible metrics requested in a report produce column entries within rows and MetricHeaders. However, metrics used exclusively within filters or expressions do not produce columns in a report; correspondingly, those metrics do not produce headers. */
	export interface GoogleAnalyticsAdminV1betaAccessMetricHeaderFormProperties {

		/** The metric's name; for example 'accessCount'. */
		metricName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaAccessMetricHeaderFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaAccessMetricHeaderFormProperties>({
			metricName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The value of a metric. */
	export interface GoogleAnalyticsAdminV1betaAccessMetricValue {

		/** The measurement value. For example, this value may be '13'. */
		value?: string | null;
	}

	/** The value of a metric. */
	export interface GoogleAnalyticsAdminV1betaAccessMetricValueFormProperties {

		/** The measurement value. For example, this value may be '13'. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaAccessMetricValueFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaAccessMetricValueFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Order bys define how rows will be sorted in the response. For example, ordering rows by descending access count is one ordering, and ordering rows by the country string is a different ordering. */
	export interface GoogleAnalyticsAdminV1betaAccessOrderBy {

		/** If true, sorts by descending order. If false or unspecified, sorts in ascending order. */
		desc?: boolean | null;

		/** Sorts by dimension values. */
		dimension?: GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy;

		/** Sorts by metric values. */
		metric?: GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderBy;
	}

	/** Order bys define how rows will be sorted in the response. For example, ordering rows by descending access count is one ordering, and ordering rows by the country string is a different ordering. */
	export interface GoogleAnalyticsAdminV1betaAccessOrderByFormProperties {

		/** If true, sorts by descending order. If false or unspecified, sorts in ascending order. */
		desc: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaAccessOrderByFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaAccessOrderByFormProperties>({
			desc: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Sorts by dimension values. */
	export interface GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy {

		/** A dimension name in the request to order by. */
		dimensionName?: string | null;

		/** Controls the rule for dimension value ordering. */
		orderType?: GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderByOrderType | null;
	}

	/** Sorts by dimension values. */
	export interface GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderByFormProperties {

		/** A dimension name in the request to order by. */
		dimensionName: FormControl<string | null | undefined>,

		/** Controls the rule for dimension value ordering. */
		orderType: FormControl<GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderByOrderType | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderByFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderByFormProperties>({
			dimensionName: new FormControl<string | null | undefined>(undefined),
			orderType: new FormControl<GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderByOrderType | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderByOrderType { ORDER_TYPE_UNSPECIFIED = 0, ALPHANUMERIC = 1, CASE_INSENSITIVE_ALPHANUMERIC = 2, NUMERIC = 3 }


	/** Sorts by metric values. */
	export interface GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderBy {

		/** A metric name in the request to order by. */
		metricName?: string | null;
	}

	/** Sorts by metric values. */
	export interface GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderByFormProperties {

		/** A metric name in the request to order by. */
		metricName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaAccessOrderByMetricOrderByFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderByFormProperties>({
			metricName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Current state of all quotas for this Analytics property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors. */
	export interface GoogleAnalyticsAdminV1betaAccessQuota {

		/** Current state for a particular quota group. */
		concurrentRequests?: GoogleAnalyticsAdminV1betaAccessQuotaStatus;

		/** Current state for a particular quota group. */
		serverErrorsPerProjectPerHour?: GoogleAnalyticsAdminV1betaAccessQuotaStatus;

		/** Current state for a particular quota group. */
		tokensPerDay?: GoogleAnalyticsAdminV1betaAccessQuotaStatus;

		/** Current state for a particular quota group. */
		tokensPerHour?: GoogleAnalyticsAdminV1betaAccessQuotaStatus;

		/** Current state for a particular quota group. */
		tokensPerProjectPerHour?: GoogleAnalyticsAdminV1betaAccessQuotaStatus;
	}

	/** Current state of all quotas for this Analytics property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors. */
	export interface GoogleAnalyticsAdminV1betaAccessQuotaFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1betaAccessQuotaFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaAccessQuotaFormProperties>({
		});

	}


	/** Current state for a particular quota group. */
	export interface GoogleAnalyticsAdminV1betaAccessQuotaStatus {

		/** Quota consumed by this request. */
		consumed?: number | null;

		/** Quota remaining after this request. */
		remaining?: number | null;
	}

	/** Current state for a particular quota group. */
	export interface GoogleAnalyticsAdminV1betaAccessQuotaStatusFormProperties {

		/** Quota consumed by this request. */
		consumed: FormControl<number | null | undefined>,

		/** Quota remaining after this request. */
		remaining: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaAccessQuotaStatusFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaAccessQuotaStatusFormProperties>({
			consumed: new FormControl<number | null | undefined>(undefined),
			remaining: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Access report data for each row. */
	export interface GoogleAnalyticsAdminV1betaAccessRow {

		/** List of dimension values. These values are in the same order as specified in the request. */
		dimensionValues?: Array<GoogleAnalyticsAdminV1betaAccessDimensionValue>;

		/** List of metric values. These values are in the same order as specified in the request. */
		metricValues?: Array<GoogleAnalyticsAdminV1betaAccessMetricValue>;
	}

	/** Access report data for each row. */
	export interface GoogleAnalyticsAdminV1betaAccessRowFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1betaAccessRowFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaAccessRowFormProperties>({
		});

	}


	/** A resource message representing a Google Analytics account. */
	export interface GoogleAnalyticsAdminV1betaAccount {

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
	export interface GoogleAnalyticsAdminV1betaAccountFormProperties {

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
	export function CreateGoogleAnalyticsAdminV1betaAccountFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaAccountFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A virtual resource representing an overview of an account and all its child GA4 properties. */
	export interface GoogleAnalyticsAdminV1betaAccountSummary {

		/** Resource name of account referred to by this account summary Format: accounts/{account_id} Example: "accounts/1000" */
		account?: string | null;

		/** Display name for the account referred to in this account summary. */
		displayName?: string | null;

		/** Resource name for this account summary. Format: accountSummaries/{account_id} Example: "accountSummaries/1000" */
		name?: string | null;

		/** List of summaries for child accounts of this account. */
		propertySummaries?: Array<GoogleAnalyticsAdminV1betaPropertySummary>;
	}

	/** A virtual resource representing an overview of an account and all its child GA4 properties. */
	export interface GoogleAnalyticsAdminV1betaAccountSummaryFormProperties {

		/** Resource name of account referred to by this account summary Format: accounts/{account_id} Example: "accounts/1000" */
		account: FormControl<string | null | undefined>,

		/** Display name for the account referred to in this account summary. */
		displayName: FormControl<string | null | undefined>,

		/** Resource name for this account summary. Format: accountSummaries/{account_id} Example: "accountSummaries/1000" */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaAccountSummaryFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaAccountSummaryFormProperties>({
			account: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A virtual resource representing metadata for a GA4 property. */
	export interface GoogleAnalyticsAdminV1betaPropertySummary {

		/** Display name for the property referred to in this property summary. */
		displayName?: string | null;

		/** Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account}, properties/{property} Example: "accounts/100", "properties/200" */
		parent?: string | null;

		/** Resource name of property referred to by this property summary Format: properties/{property_id} Example: "properties/1000" */
		property?: string | null;

		/** The property's property type. */
		propertyType?: GoogleAnalyticsAdminV1betaPropertySummaryPropertyType | null;
	}

	/** A virtual resource representing metadata for a GA4 property. */
	export interface GoogleAnalyticsAdminV1betaPropertySummaryFormProperties {

		/** Display name for the property referred to in this property summary. */
		displayName: FormControl<string | null | undefined>,

		/** Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account}, properties/{property} Example: "accounts/100", "properties/200" */
		parent: FormControl<string | null | undefined>,

		/** Resource name of property referred to by this property summary Format: properties/{property_id} Example: "properties/1000" */
		property: FormControl<string | null | undefined>,

		/** The property's property type. */
		propertyType: FormControl<GoogleAnalyticsAdminV1betaPropertySummaryPropertyType | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaPropertySummaryFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaPropertySummaryFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			property: new FormControl<string | null | undefined>(undefined),
			propertyType: new FormControl<GoogleAnalyticsAdminV1betaPropertySummaryPropertyType | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1betaPropertySummaryPropertyType { PROPERTY_TYPE_UNSPECIFIED = 0, PROPERTY_TYPE_ORDINARY = 1, PROPERTY_TYPE_SUBPROPERTY = 2, PROPERTY_TYPE_ROLLUP = 3 }


	/** Request message for AcknowledgeUserDataCollection RPC. */
	export interface GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest {

		/** Required. An acknowledgement that the caller of this method understands the terms of user data collection. This field must contain the exact value: "I acknowledge that I have the necessary privacy disclosures and rights from my end users for the collection and processing of their data, including the association of such data with the visitation information Google Analytics collects from my site and/or app property." */
		acknowledgement?: string | null;
	}

	/** Request message for AcknowledgeUserDataCollection RPC. */
	export interface GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequestFormProperties {

		/** Required. An acknowledgement that the caller of this method understands the terms of user data collection. This field must contain the exact value: "I acknowledge that I have the necessary privacy disclosures and rights from my end users for the collection and processing of their data, including the association of such data with the visitation information Google Analytics collects from my site and/or app property." */
		acknowledgement: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequestFormProperties>({
			acknowledgement: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for AcknowledgeUserDataCollection RPC. */
	export interface GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse {
	}

	/** Response message for AcknowledgeUserDataCollection RPC. */
	export interface GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponseFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponseFormProperties>({
		});

	}


	/** Request message for ArchiveCustomDimension RPC. */
	export interface GoogleAnalyticsAdminV1betaArchiveCustomDimensionRequest {
	}

	/** Request message for ArchiveCustomDimension RPC. */
	export interface GoogleAnalyticsAdminV1betaArchiveCustomDimensionRequestFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1betaArchiveCustomDimensionRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaArchiveCustomDimensionRequestFormProperties>({
		});

	}


	/** Request message for ArchiveCustomMetric RPC. */
	export interface GoogleAnalyticsAdminV1betaArchiveCustomMetricRequest {
	}

	/** Request message for ArchiveCustomMetric RPC. */
	export interface GoogleAnalyticsAdminV1betaArchiveCustomMetricRequestFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1betaArchiveCustomMetricRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaArchiveCustomMetricRequestFormProperties>({
		});

	}


	/** A description of a change to a single Google Analytics resource. */
	export interface GoogleAnalyticsAdminV1betaChangeHistoryChange {

		/** The type of action that changed this resource. */
		action?: GoogleAnalyticsAdminV1betaChangeHistoryChangeAction | null;

		/** Resource name of the resource whose changes are described by this entry. */
		resource?: string | null;

		/** A snapshot of a resource as before or after the result of a change in change history. */
		resourceAfterChange?: GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource;

		/** A snapshot of a resource as before or after the result of a change in change history. */
		resourceBeforeChange?: GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource;
	}

	/** A description of a change to a single Google Analytics resource. */
	export interface GoogleAnalyticsAdminV1betaChangeHistoryChangeFormProperties {

		/** The type of action that changed this resource. */
		action: FormControl<GoogleAnalyticsAdminV1betaChangeHistoryChangeAction | null | undefined>,

		/** Resource name of the resource whose changes are described by this entry. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaChangeHistoryChangeFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaChangeHistoryChangeFormProperties>({
			action: new FormControl<GoogleAnalyticsAdminV1betaChangeHistoryChangeAction | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1betaChangeHistoryChangeAction { ACTION_TYPE_UNSPECIFIED = 0, CREATED = 1, UPDATED = 2, DELETED = 3 }


	/** A snapshot of a resource as before or after the result of a change in change history. */
	export interface GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource {

		/** A resource message representing a Google Analytics account. */
		account?: GoogleAnalyticsAdminV1betaAccount;

		/** A conversion event in a Google Analytics property. */
		conversionEvent?: GoogleAnalyticsAdminV1betaConversionEvent;

		/** Settings values for data retention. This is a singleton resource. */
		dataRetentionSettings?: GoogleAnalyticsAdminV1betaDataRetentionSettings;

		/** A resource message representing a data stream. */
		dataStream?: GoogleAnalyticsAdminV1betaDataStream;

		/** A link between a GA4 property and a Firebase project. */
		firebaseLink?: GoogleAnalyticsAdminV1betaFirebaseLink;

		/** A link between a GA4 property and a Google Ads account. */
		googleAdsLink?: GoogleAnalyticsAdminV1betaGoogleAdsLink;

		/** A secret value used for sending hits to Measurement Protocol. */
		measurementProtocolSecret?: GoogleAnalyticsAdminV1betaMeasurementProtocolSecret;

		/** A resource message representing a Google Analytics GA4 property. */
		property?: GoogleAnalyticsAdminV1betaProperty;
	}

	/** A snapshot of a resource as before or after the result of a change in change history. */
	export interface GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResourceFormProperties {
	}
	export function CreateGoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResourceFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResourceFormProperties>({
		});

	}


	/** A conversion event in a Google Analytics property. */
	export interface GoogleAnalyticsAdminV1betaConversionEvent {

		/** Optional. The method by which conversions will be counted across multiple events within a session. If this value is not provided, it will be set to `ONCE_PER_EVENT`. */
		countingMethod?: GoogleAnalyticsAdminV1betaConversionEventCountingMethod | null;

		/** Output only. Time when this conversion event was created in the property. */
		createTime?: string | null;

		/** Output only. If set to true, this conversion event refers to a custom event. If set to false, this conversion event refers to a default event in GA. Default events typically have special meaning in GA. Default events are usually created for you by the GA system, but in some cases can be created by property admins. Custom events count towards the maximum number of custom conversion events that may be created per property. */
		custom?: boolean | null;

		/** Defines a default value/currency for a conversion event. Both value and currency must be provided. */
		defaultConversionValue?: GoogleAnalyticsAdminV1betaConversionEventDefaultConversionValue;

		/** Output only. If set, this event can currently be deleted with DeleteConversionEvent. */
		deletable?: boolean | null;

		/** Immutable. The event name for this conversion event. Examples: 'click', 'purchase' */
		eventName?: string | null;

		/** Output only. Resource name of this conversion event. Format: properties/{property}/conversionEvents/{conversion_event} */
		name?: string | null;
	}

	/** A conversion event in a Google Analytics property. */
	export interface GoogleAnalyticsAdminV1betaConversionEventFormProperties {

		/** Optional. The method by which conversions will be counted across multiple events within a session. If this value is not provided, it will be set to `ONCE_PER_EVENT`. */
		countingMethod: FormControl<GoogleAnalyticsAdminV1betaConversionEventCountingMethod | null | undefined>,

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
	export function CreateGoogleAnalyticsAdminV1betaConversionEventFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaConversionEventFormProperties>({
			countingMethod: new FormControl<GoogleAnalyticsAdminV1betaConversionEventCountingMethod | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			custom: new FormControl<boolean | null | undefined>(undefined),
			deletable: new FormControl<boolean | null | undefined>(undefined),
			eventName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1betaConversionEventCountingMethod { CONVERSION_COUNTING_METHOD_UNSPECIFIED = 0, ONCE_PER_EVENT = 1, ONCE_PER_SESSION = 2 }


	/** Defines a default value/currency for a conversion event. Both value and currency must be provided. */
	export interface GoogleAnalyticsAdminV1betaConversionEventDefaultConversionValue {

		/** When a conversion event for this event_name has no set currency, this currency will be applied as the default. Must be in ISO 4217 currency code format. See https://en.wikipedia.org/wiki/ISO_4217 for more information. */
		currencyCode?: string | null;

		/** This value will be used to populate the value for all conversions of the specified event_name where the event "value" parameter is unset. */
		value?: number | null;
	}

	/** Defines a default value/currency for a conversion event. Both value and currency must be provided. */
	export interface GoogleAnalyticsAdminV1betaConversionEventDefaultConversionValueFormProperties {

		/** When a conversion event for this event_name has no set currency, this currency will be applied as the default. Must be in ISO 4217 currency code format. See https://en.wikipedia.org/wiki/ISO_4217 for more information. */
		currencyCode: FormControl<string | null | undefined>,

		/** This value will be used to populate the value for all conversions of the specified event_name where the event "value" parameter is unset. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaConversionEventDefaultConversionValueFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaConversionEventDefaultConversionValueFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Settings values for data retention. This is a singleton resource. */
	export interface GoogleAnalyticsAdminV1betaDataRetentionSettings {

		/** The length of time that event-level data is retained. */
		eventDataRetention?: GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetention | null;

		/** Output only. Resource name for this DataRetentionSetting resource. Format: properties/{property}/dataRetentionSettings */
		name?: string | null;

		/** If true, reset the retention period for the user identifier with every event from that user. */
		resetUserDataOnNewActivity?: boolean | null;
	}

	/** Settings values for data retention. This is a singleton resource. */
	export interface GoogleAnalyticsAdminV1betaDataRetentionSettingsFormProperties {

		/** The length of time that event-level data is retained. */
		eventDataRetention: FormControl<GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetention | null | undefined>,

		/** Output only. Resource name for this DataRetentionSetting resource. Format: properties/{property}/dataRetentionSettings */
		name: FormControl<string | null | undefined>,

		/** If true, reset the retention period for the user identifier with every event from that user. */
		resetUserDataOnNewActivity: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaDataRetentionSettingsFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaDataRetentionSettingsFormProperties>({
			eventDataRetention: new FormControl<GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetention | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resetUserDataOnNewActivity: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetention { RETENTION_DURATION_UNSPECIFIED = 0, TWO_MONTHS = 1, FOURTEEN_MONTHS = 2, TWENTY_SIX_MONTHS = 3, THIRTY_EIGHT_MONTHS = 4, FIFTY_MONTHS = 5 }


	/** A resource message representing a data stream. */
	export interface GoogleAnalyticsAdminV1betaDataStream {

		/** Data specific to Android app streams. */
		androidAppStreamData?: GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData;

		/** Output only. Time when this stream was originally created. */
		createTime?: string | null;

		/** Human-readable display name for the Data Stream. Required for web data streams. The max allowed display name length is 255 UTF-16 code units. */
		displayName?: string | null;

		/** Data specific to iOS app streams. */
		iosAppStreamData?: GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData;

		/** Output only. Resource name of this Data Stream. Format: properties/{property_id}/dataStreams/{stream_id} Example: "properties/1000/dataStreams/2000" */
		name?: string | null;

		/** Required. Immutable. The type of this DataStream resource. */
		type?: GoogleAnalyticsAdminV1betaDataStreamType | null;

		/** Output only. Time when stream payload fields were last updated. */
		updateTime?: string | null;

		/** Data specific to web streams. */
		webStreamData?: GoogleAnalyticsAdminV1betaDataStreamWebStreamData;
	}

	/** A resource message representing a data stream. */
	export interface GoogleAnalyticsAdminV1betaDataStreamFormProperties {

		/** Output only. Time when this stream was originally created. */
		createTime: FormControl<string | null | undefined>,

		/** Human-readable display name for the Data Stream. Required for web data streams. The max allowed display name length is 255 UTF-16 code units. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Resource name of this Data Stream. Format: properties/{property_id}/dataStreams/{stream_id} Example: "properties/1000/dataStreams/2000" */
		name: FormControl<string | null | undefined>,

		/** Required. Immutable. The type of this DataStream resource. */
		type: FormControl<GoogleAnalyticsAdminV1betaDataStreamType | null | undefined>,

		/** Output only. Time when stream payload fields were last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaDataStreamFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaDataStreamFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleAnalyticsAdminV1betaDataStreamType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data specific to Android app streams. */
	export interface GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData {

		/** Output only. ID of the corresponding Android app in Firebase, if any. This ID can change if the Android app is deleted and recreated. */
		firebaseAppId?: string | null;

		/** Immutable. The package name for the app being measured. Example: "com.example.myandroidapp" */
		packageName?: string | null;
	}

	/** Data specific to Android app streams. */
	export interface GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataFormProperties {

		/** Output only. ID of the corresponding Android app in Firebase, if any. This ID can change if the Android app is deleted and recreated. */
		firebaseAppId: FormControl<string | null | undefined>,

		/** Immutable. The package name for the app being measured. Example: "com.example.myandroidapp" */
		packageName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataFormProperties>({
			firebaseAppId: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data specific to iOS app streams. */
	export interface GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData {

		/** Required. Immutable. The Apple App Store Bundle ID for the app Example: "com.example.myiosapp" */
		bundleId?: string | null;

		/** Output only. ID of the corresponding iOS app in Firebase, if any. This ID can change if the iOS app is deleted and recreated. */
		firebaseAppId?: string | null;
	}

	/** Data specific to iOS app streams. */
	export interface GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataFormProperties {

		/** Required. Immutable. The Apple App Store Bundle ID for the app Example: "com.example.myiosapp" */
		bundleId: FormControl<string | null | undefined>,

		/** Output only. ID of the corresponding iOS app in Firebase, if any. This ID can change if the iOS app is deleted and recreated. */
		firebaseAppId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataFormProperties>({
			bundleId: new FormControl<string | null | undefined>(undefined),
			firebaseAppId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1betaDataStreamType { DATA_STREAM_TYPE_UNSPECIFIED = 0, WEB_DATA_STREAM = 1, ANDROID_APP_DATA_STREAM = 2, IOS_APP_DATA_STREAM = 3 }


	/** Data specific to web streams. */
	export interface GoogleAnalyticsAdminV1betaDataStreamWebStreamData {

		/** Domain name of the web app being measured, or empty. Example: "http://www.google.com", "https://www.google.com" */
		defaultUri?: string | null;

		/** Output only. ID of the corresponding web app in Firebase, if any. This ID can change if the web app is deleted and recreated. */
		firebaseAppId?: string | null;

		/** Output only. Analytics Measurement ID. Example: "G-1A2BCD345E" */
		measurementId?: string | null;
	}

	/** Data specific to web streams. */
	export interface GoogleAnalyticsAdminV1betaDataStreamWebStreamDataFormProperties {

		/** Domain name of the web app being measured, or empty. Example: "http://www.google.com", "https://www.google.com" */
		defaultUri: FormControl<string | null | undefined>,

		/** Output only. ID of the corresponding web app in Firebase, if any. This ID can change if the web app is deleted and recreated. */
		firebaseAppId: FormControl<string | null | undefined>,

		/** Output only. Analytics Measurement ID. Example: "G-1A2BCD345E" */
		measurementId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaDataStreamWebStreamDataFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaDataStreamWebStreamDataFormProperties>({
			defaultUri: new FormControl<string | null | undefined>(undefined),
			firebaseAppId: new FormControl<string | null | undefined>(undefined),
			measurementId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A link between a GA4 property and a Firebase project. */
	export interface GoogleAnalyticsAdminV1betaFirebaseLink {

		/** Output only. Time when this FirebaseLink was originally created. */
		createTime?: string | null;

		/** Output only. Example format: properties/1234/firebaseLinks/5678 */
		name?: string | null;

		/** Immutable. Firebase project resource name. When creating a FirebaseLink, you may provide this resource name using either a project number or project ID. Once this resource has been created, returned FirebaseLinks will always have a project_name that contains a project number. Format: 'projects/{project number}' Example: 'projects/1234' */
		project?: string | null;
	}

	/** A link between a GA4 property and a Firebase project. */
	export interface GoogleAnalyticsAdminV1betaFirebaseLinkFormProperties {

		/** Output only. Time when this FirebaseLink was originally created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Example format: properties/1234/firebaseLinks/5678 */
		name: FormControl<string | null | undefined>,

		/** Immutable. Firebase project resource name. When creating a FirebaseLink, you may provide this resource name using either a project number or project ID. Once this resource has been created, returned FirebaseLinks will always have a project_name that contains a project number. Format: 'projects/{project number}' Example: 'projects/1234' */
		project: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaFirebaseLinkFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaFirebaseLinkFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A link between a GA4 property and a Google Ads account. */
	export interface GoogleAnalyticsAdminV1betaGoogleAdsLink {

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
	export interface GoogleAnalyticsAdminV1betaGoogleAdsLinkFormProperties {

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
	export function CreateGoogleAnalyticsAdminV1betaGoogleAdsLinkFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaGoogleAdsLinkFormProperties>({
			adsPersonalizationEnabled: new FormControl<boolean | null | undefined>(undefined),
			canManageClients: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			creatorEmailAddress: new FormControl<string | null | undefined>(undefined),
			customerId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A secret value used for sending hits to Measurement Protocol. */
	export interface GoogleAnalyticsAdminV1betaMeasurementProtocolSecret {

		/** Required. Human-readable display name for this secret. */
		displayName?: string | null;

		/** Output only. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret} */
		name?: string | null;

		/** Output only. The measurement protocol secret value. Pass this value to the api_secret field of the Measurement Protocol API when sending hits to this secret's parent property. */
		secretValue?: string | null;
	}

	/** A secret value used for sending hits to Measurement Protocol. */
	export interface GoogleAnalyticsAdminV1betaMeasurementProtocolSecretFormProperties {

		/** Required. Human-readable display name for this secret. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret} */
		name: FormControl<string | null | undefined>,

		/** Output only. The measurement protocol secret value. Pass this value to the api_secret field of the Measurement Protocol API when sending hits to this secret's parent property. */
		secretValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaMeasurementProtocolSecretFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaMeasurementProtocolSecretFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			secretValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource message representing a Google Analytics GA4 property. */
	export interface GoogleAnalyticsAdminV1betaProperty {

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
		industryCategory?: GoogleAnalyticsAdminV1betaPropertyIndustryCategory | null;

		/** Output only. Resource name of this property. Format: properties/{property_id} Example: "properties/1000" */
		name?: string | null;

		/** Immutable. Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account}, properties/{property} Example: "accounts/100", "properties/101" */
		parent?: string | null;

		/** Immutable. The property type for this Property resource. When creating a property, if the type is "PROPERTY_TYPE_UNSPECIFIED", then "ORDINARY_PROPERTY" will be implied. */
		propertyType?: GoogleAnalyticsAdminV1betaPropertySummaryPropertyType | null;

		/** Output only. The Google Analytics service level that applies to this property. */
		serviceLevel?: GoogleAnalyticsAdminV1betaPropertyServiceLevel | null;

		/** Required. Reporting Time Zone, used as the day boundary for reports, regardless of where the data originates. If the time zone honors DST, Analytics will automatically adjust for the changes. NOTE: Changing the time zone only affects data going forward, and is not applied retroactively. Format: https://www.iana.org/time-zones Example: "America/Los_Angeles" */
		timeZone?: string | null;

		/** Output only. Time when entity payload fields were last updated. */
		updateTime?: string | null;
	}

	/** A resource message representing a Google Analytics GA4 property. */
	export interface GoogleAnalyticsAdminV1betaPropertyFormProperties {

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
		industryCategory: FormControl<GoogleAnalyticsAdminV1betaPropertyIndustryCategory | null | undefined>,

		/** Output only. Resource name of this property. Format: properties/{property_id} Example: "properties/1000" */
		name: FormControl<string | null | undefined>,

		/** Immutable. Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account}, properties/{property} Example: "accounts/100", "properties/101" */
		parent: FormControl<string | null | undefined>,

		/** Immutable. The property type for this Property resource. When creating a property, if the type is "PROPERTY_TYPE_UNSPECIFIED", then "ORDINARY_PROPERTY" will be implied. */
		propertyType: FormControl<GoogleAnalyticsAdminV1betaPropertySummaryPropertyType | null | undefined>,

		/** Output only. The Google Analytics service level that applies to this property. */
		serviceLevel: FormControl<GoogleAnalyticsAdminV1betaPropertyServiceLevel | null | undefined>,

		/** Required. Reporting Time Zone, used as the day boundary for reports, regardless of where the data originates. If the time zone honors DST, Analytics will automatically adjust for the changes. NOTE: Changing the time zone only affects data going forward, and is not applied retroactively. Format: https://www.iana.org/time-zones Example: "America/Los_Angeles" */
		timeZone: FormControl<string | null | undefined>,

		/** Output only. Time when entity payload fields were last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaPropertyFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaPropertyFormProperties>({
			account: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			industryCategory: new FormControl<GoogleAnalyticsAdminV1betaPropertyIndustryCategory | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			propertyType: new FormControl<GoogleAnalyticsAdminV1betaPropertySummaryPropertyType | null | undefined>(undefined),
			serviceLevel: new FormControl<GoogleAnalyticsAdminV1betaPropertyServiceLevel | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1betaPropertyIndustryCategory { INDUSTRY_CATEGORY_UNSPECIFIED = 0, AUTOMOTIVE = 1, BUSINESS_AND_INDUSTRIAL_MARKETS = 2, FINANCE = 3, HEALTHCARE = 4, TECHNOLOGY = 5, TRAVEL = 6, OTHER = 7, ARTS_AND_ENTERTAINMENT = 8, BEAUTY_AND_FITNESS = 9, BOOKS_AND_LITERATURE = 10, FOOD_AND_DRINK = 11, GAMES = 12, HOBBIES_AND_LEISURE = 13, HOME_AND_GARDEN = 14, INTERNET_AND_TELECOM = 15, LAW_AND_GOVERNMENT = 16, NEWS = 17, ONLINE_COMMUNITIES = 18, PEOPLE_AND_SOCIETY = 19, PETS_AND_ANIMALS = 20, REAL_ESTATE = 21, REFERENCE = 22, SCIENCE = 23, SPORTS = 24, JOBS_AND_EDUCATION = 25, SHOPPING = 26 }

	export enum GoogleAnalyticsAdminV1betaPropertyServiceLevel { SERVICE_LEVEL_UNSPECIFIED = 0, GOOGLE_ANALYTICS_STANDARD = 1, GOOGLE_ANALYTICS_360 = 2 }


	/** A set of changes within a Google Analytics account or its child properties that resulted from the same cause. Common causes would be updates made in the Google Analytics UI, changes from customer support, or automatic Google Analytics system changes. */
	export interface GoogleAnalyticsAdminV1betaChangeHistoryEvent {

		/** The type of actor that made this change. */
		actorType?: GoogleAnalyticsAdminV1betaChangeHistoryEventActorType | null;

		/** Time when change was made. */
		changeTime?: string | null;

		/** A list of changes made in this change history event that fit the filters specified in SearchChangeHistoryEventsRequest. */
		changes?: Array<GoogleAnalyticsAdminV1betaChangeHistoryChange>;

		/** If true, then the list of changes returned was filtered, and does not represent all changes that occurred in this event. */
		changesFiltered?: boolean | null;

		/** ID of this change history event. This ID is unique across Google Analytics. */
		id?: string | null;

		/** Email address of the Google account that made the change. This will be a valid email address if the actor field is set to USER, and empty otherwise. Google accounts that have been deleted will cause an error. */
		userActorEmail?: string | null;
	}

	/** A set of changes within a Google Analytics account or its child properties that resulted from the same cause. Common causes would be updates made in the Google Analytics UI, changes from customer support, or automatic Google Analytics system changes. */
	export interface GoogleAnalyticsAdminV1betaChangeHistoryEventFormProperties {

		/** The type of actor that made this change. */
		actorType: FormControl<GoogleAnalyticsAdminV1betaChangeHistoryEventActorType | null | undefined>,

		/** Time when change was made. */
		changeTime: FormControl<string | null | undefined>,

		/** If true, then the list of changes returned was filtered, and does not represent all changes that occurred in this event. */
		changesFiltered: FormControl<boolean | null | undefined>,

		/** ID of this change history event. This ID is unique across Google Analytics. */
		id: FormControl<string | null | undefined>,

		/** Email address of the Google account that made the change. This will be a valid email address if the actor field is set to USER, and empty otherwise. Google accounts that have been deleted will cause an error. */
		userActorEmail: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaChangeHistoryEventFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaChangeHistoryEventFormProperties>({
			actorType: new FormControl<GoogleAnalyticsAdminV1betaChangeHistoryEventActorType | null | undefined>(undefined),
			changeTime: new FormControl<string | null | undefined>(undefined),
			changesFiltered: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			userActorEmail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1betaChangeHistoryEventActorType { ACTOR_TYPE_UNSPECIFIED = 0, USER = 1, SYSTEM = 2, SUPPORT = 3 }


	/** A definition for a CustomDimension. */
	export interface GoogleAnalyticsAdminV1betaCustomDimension {

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
		scope?: GoogleAnalyticsAdminV1betaCustomDimensionScope | null;
	}

	/** A definition for a CustomDimension. */
	export interface GoogleAnalyticsAdminV1betaCustomDimensionFormProperties {

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
		scope: FormControl<GoogleAnalyticsAdminV1betaCustomDimensionScope | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaCustomDimensionFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaCustomDimensionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			disallowAdsPersonalization: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parameterName: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<GoogleAnalyticsAdminV1betaCustomDimensionScope | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1betaCustomDimensionScope { DIMENSION_SCOPE_UNSPECIFIED = 0, EVENT = 1, USER = 2, ITEM = 3 }


	/** A definition for a custom metric. */
	export interface GoogleAnalyticsAdminV1betaCustomMetric {

		/** Optional. Description for this custom dimension. Max length of 150 characters. */
		description?: string | null;

		/** Required. Display name for this custom metric as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets. */
		displayName?: string | null;

		/** Required. The type for the custom metric's value. */
		measurementUnit?: GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnit | null;

		/** Output only. Resource name for this CustomMetric resource. Format: properties/{property}/customMetrics/{customMetric} */
		name?: string | null;

		/** Required. Immutable. Tagging name for this custom metric. If this is an event-scoped metric, then this is the event parameter name. May only contain alphanumeric and underscore charactes, starting with a letter. Max length of 40 characters for event-scoped metrics. */
		parameterName?: string | null;

		/** Optional. Types of restricted data that this metric may contain. Required for metrics with CURRENCY measurement unit. Must be empty for metrics with a non-CURRENCY measurement unit. */
		restrictedMetricType?: Array<string>;

		/** Required. Immutable. The scope of this custom metric. */
		scope?: GoogleAnalyticsAdminV1betaCustomMetricScope | null;
	}

	/** A definition for a custom metric. */
	export interface GoogleAnalyticsAdminV1betaCustomMetricFormProperties {

		/** Optional. Description for this custom dimension. Max length of 150 characters. */
		description: FormControl<string | null | undefined>,

		/** Required. Display name for this custom metric as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets. */
		displayName: FormControl<string | null | undefined>,

		/** Required. The type for the custom metric's value. */
		measurementUnit: FormControl<GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnit | null | undefined>,

		/** Output only. Resource name for this CustomMetric resource. Format: properties/{property}/customMetrics/{customMetric} */
		name: FormControl<string | null | undefined>,

		/** Required. Immutable. Tagging name for this custom metric. If this is an event-scoped metric, then this is the event parameter name. May only contain alphanumeric and underscore charactes, starting with a letter. Max length of 40 characters for event-scoped metrics. */
		parameterName: FormControl<string | null | undefined>,

		/** Required. Immutable. The scope of this custom metric. */
		scope: FormControl<GoogleAnalyticsAdminV1betaCustomMetricScope | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaCustomMetricFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaCustomMetricFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			measurementUnit: new FormControl<GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnit | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parameterName: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<GoogleAnalyticsAdminV1betaCustomMetricScope | null | undefined>(undefined),
		});

	}

	export enum GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnit { MEASUREMENT_UNIT_UNSPECIFIED = 0, STANDARD = 1, CURRENCY = 2, FEET = 3, METERS = 4, KILOMETERS = 5, MILES = 6, MILLISECONDS = 7, SECONDS = 8, MINUTES = 9, HOURS = 10 }

	export enum GoogleAnalyticsAdminV1betaCustomMetricScope { METRIC_SCOPE_UNSPECIFIED = 0, EVENT = 1 }


	/** A resource message representing data sharing settings of a Google Analytics account. */
	export interface GoogleAnalyticsAdminV1betaDataSharingSettings {

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
	export interface GoogleAnalyticsAdminV1betaDataSharingSettingsFormProperties {

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
	export function CreateGoogleAnalyticsAdminV1betaDataSharingSettingsFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaDataSharingSettingsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			sharingWithGoogleAnySalesEnabled: new FormControl<boolean | null | undefined>(undefined),
			sharingWithGoogleAssignedSalesEnabled: new FormControl<boolean | null | undefined>(undefined),
			sharingWithGoogleProductsEnabled: new FormControl<boolean | null | undefined>(undefined),
			sharingWithGoogleSupportEnabled: new FormControl<boolean | null | undefined>(undefined),
			sharingWithOthersEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response message for ListAccountSummaries RPC. */
	export interface GoogleAnalyticsAdminV1betaListAccountSummariesResponse {

		/** Account summaries of all accounts the caller has access to. */
		accountSummaries?: Array<GoogleAnalyticsAdminV1betaAccountSummary>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListAccountSummaries RPC. */
	export interface GoogleAnalyticsAdminV1betaListAccountSummariesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaListAccountSummariesResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaListAccountSummariesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for ListAccounts RPC. */
	export interface GoogleAnalyticsAdminV1betaListAccountsResponse {

		/** Results that were accessible to the caller. */
		accounts?: Array<GoogleAnalyticsAdminV1betaAccount>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Request message for ListAccounts RPC. */
	export interface GoogleAnalyticsAdminV1betaListAccountsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaListAccountsResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaListAccountsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListConversionEvents RPC. */
	export interface GoogleAnalyticsAdminV1betaListConversionEventsResponse {

		/** The requested conversion events */
		conversionEvents?: Array<GoogleAnalyticsAdminV1betaConversionEvent>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListConversionEvents RPC. */
	export interface GoogleAnalyticsAdminV1betaListConversionEventsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaListConversionEventsResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaListConversionEventsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListCustomDimensions RPC. */
	export interface GoogleAnalyticsAdminV1betaListCustomDimensionsResponse {

		/** List of CustomDimensions. */
		customDimensions?: Array<GoogleAnalyticsAdminV1betaCustomDimension>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListCustomDimensions RPC. */
	export interface GoogleAnalyticsAdminV1betaListCustomDimensionsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaListCustomDimensionsResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaListCustomDimensionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListCustomMetrics RPC. */
	export interface GoogleAnalyticsAdminV1betaListCustomMetricsResponse {

		/** List of CustomMetrics. */
		customMetrics?: Array<GoogleAnalyticsAdminV1betaCustomMetric>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListCustomMetrics RPC. */
	export interface GoogleAnalyticsAdminV1betaListCustomMetricsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaListCustomMetricsResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaListCustomMetricsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListDataStreams RPC. */
	export interface GoogleAnalyticsAdminV1betaListDataStreamsResponse {

		/** List of DataStreams. */
		dataStreams?: Array<GoogleAnalyticsAdminV1betaDataStream>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListDataStreams RPC. */
	export interface GoogleAnalyticsAdminV1betaListDataStreamsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaListDataStreamsResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaListDataStreamsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListFirebaseLinks RPC */
	export interface GoogleAnalyticsAdminV1betaListFirebaseLinksResponse {

		/** List of FirebaseLinks. This will have at most one value. */
		firebaseLinks?: Array<GoogleAnalyticsAdminV1betaFirebaseLink>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. Currently, Google Analytics supports only one FirebaseLink per property, so this will never be populated. */
		nextPageToken?: string | null;
	}

	/** Response message for ListFirebaseLinks RPC */
	export interface GoogleAnalyticsAdminV1betaListFirebaseLinksResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. Currently, Google Analytics supports only one FirebaseLink per property, so this will never be populated. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaListFirebaseLinksResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaListFirebaseLinksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListGoogleAdsLinks RPC. */
	export interface GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse {

		/** List of GoogleAdsLinks. */
		googleAdsLinks?: Array<GoogleAnalyticsAdminV1betaGoogleAdsLink>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListGoogleAdsLinks RPC. */
	export interface GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaListGoogleAdsLinksResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListMeasurementProtocolSecret RPC */
	export interface GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse {

		/** A list of secrets for the parent stream specified in the request. */
		measurementProtocolSecrets?: Array<GoogleAnalyticsAdminV1betaMeasurementProtocolSecret>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListMeasurementProtocolSecret RPC */
	export interface GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListProperties RPC. */
	export interface GoogleAnalyticsAdminV1betaListPropertiesResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Results that matched the filter criteria and were accessible to the caller. */
		properties?: Array<GoogleAnalyticsAdminV1betaProperty>;
	}

	/** Response message for ListProperties RPC. */
	export interface GoogleAnalyticsAdminV1betaListPropertiesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaListPropertiesResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaListPropertiesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for ProvisionAccountTicket RPC. */
	export interface GoogleAnalyticsAdminV1betaProvisionAccountTicketRequest {

		/** A resource message representing a Google Analytics account. */
		account?: GoogleAnalyticsAdminV1betaAccount;

		/** Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in Cloud Console as a Redirect URI. */
		redirectUri?: string | null;
	}

	/** Request message for ProvisionAccountTicket RPC. */
	export interface GoogleAnalyticsAdminV1betaProvisionAccountTicketRequestFormProperties {

		/** Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in Cloud Console as a Redirect URI. */
		redirectUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaProvisionAccountTicketRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaProvisionAccountTicketRequestFormProperties>({
			redirectUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ProvisionAccountTicket RPC. */
	export interface GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse {

		/** The param to be passed in the ToS link. */
		accountTicketId?: string | null;
	}

	/** Response message for ProvisionAccountTicket RPC. */
	export interface GoogleAnalyticsAdminV1betaProvisionAccountTicketResponseFormProperties {

		/** The param to be passed in the ToS link. */
		accountTicketId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaProvisionAccountTicketResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaProvisionAccountTicketResponseFormProperties>({
			accountTicketId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for a Data Access Record Report. */
	export interface GoogleAnalyticsAdminV1betaRunAccessReportRequest {

		/** Date ranges of access records to read. If multiple date ranges are requested, each response row will contain a zero based date range index. If two date ranges overlap, the access records for the overlapping days is included in the response rows for both date ranges. Requests are allowed up to 2 date ranges. */
		dateRanges?: Array<GoogleAnalyticsAdminV1betaAccessDateRange>;

		/** Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics. */
		dimensionFilter?: GoogleAnalyticsAdminV1betaAccessFilterExpression;

		/** The dimensions requested and displayed in the response. Requests are allowed up to 9 dimensions. */
		dimensions?: Array<GoogleAnalyticsAdminV1betaAccessDimension>;

		/** Optional. Decides whether to return the users within user groups. This field works only when include_all_users is set to true. If true, it will return all users with access to the specified property or account. If false, only the users with direct access will be returned. */
		expandGroups?: boolean | null;

		/** Optional. Determines whether to include users who have never made an API call in the response. If true, all users with access to the specified property or account are included in the response, regardless of whether they have made an API call or not. If false, only the users who have made an API call will be included. */
		includeAllUsers?: boolean | null;

		/** The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 100,000 rows per request, no matter how many you ask for. `limit` must be positive. The API may return fewer rows than the requested `limit`, if there aren't as many remaining rows as the `limit`. For instance, there are fewer than 300 possible values for the dimension `country`, so when reporting on only `country`, you can't get more than 300 rows, even if you set `limit` to a higher value. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). */
		limit?: string | null;

		/** Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics. */
		metricFilter?: GoogleAnalyticsAdminV1betaAccessFilterExpression;

		/** The metrics requested and displayed in the response. Requests are allowed up to 10 metrics. */
		metrics?: Array<GoogleAnalyticsAdminV1betaAccessMetric>;

		/** The row count of the start row. The first row is counted as row 0. If offset is unspecified, it is treated as 0. If offset is zero, then this method will return the first page of results with `limit` entries. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). */
		offset?: string | null;

		/** Specifies how rows are ordered in the response. */
		orderBys?: Array<GoogleAnalyticsAdminV1betaAccessOrderBy>;

		/** Toggles whether to return the current state of this Analytics Property's quota. Quota is returned in [AccessQuota](#AccessQuota). For account-level requests, this field must be false. */
		returnEntityQuota?: boolean | null;

		/** This request's time zone if specified. If unspecified, the property's time zone is used. The request's time zone is used to interpret the start & end dates of the report. Formatted as strings from the IANA Time Zone database (https://www.iana.org/time-zones); for example "America/New_York" or "Asia/Tokyo". */
		timeZone?: string | null;
	}

	/** The request for a Data Access Record Report. */
	export interface GoogleAnalyticsAdminV1betaRunAccessReportRequestFormProperties {

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
	export function CreateGoogleAnalyticsAdminV1betaRunAccessReportRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaRunAccessReportRequestFormProperties>({
			expandGroups: new FormControl<boolean | null | undefined>(undefined),
			includeAllUsers: new FormControl<boolean | null | undefined>(undefined),
			limit: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<string | null | undefined>(undefined),
			returnEntityQuota: new FormControl<boolean | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The customized Data Access Record Report response. */
	export interface GoogleAnalyticsAdminV1betaRunAccessReportResponse {

		/** The header for a column in the report that corresponds to a specific dimension. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows. */
		dimensionHeaders?: Array<GoogleAnalyticsAdminV1betaAccessDimensionHeader>;

		/** The header for a column in the report that corresponds to a specific metric. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows. */
		metricHeaders?: Array<GoogleAnalyticsAdminV1betaAccessMetricHeader>;

		/** Current state of all quotas for this Analytics property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors. */
		quota?: GoogleAnalyticsAdminV1betaAccessQuota;

		/** The total number of rows in the query result. `rowCount` is independent of the number of rows returned in the response, the `limit` request parameter, and the `offset` request parameter. For example if a query returns 175 rows and includes `limit` of 50 in the API request, the response will contain `rowCount` of 175 but only 50 rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). */
		rowCount?: number | null;

		/** Rows of dimension value combinations and metric values in the report. */
		rows?: Array<GoogleAnalyticsAdminV1betaAccessRow>;
	}

	/** The customized Data Access Record Report response. */
	export interface GoogleAnalyticsAdminV1betaRunAccessReportResponseFormProperties {

		/** The total number of rows in the query result. `rowCount` is independent of the number of rows returned in the response, the `limit` request parameter, and the `offset` request parameter. For example if a query returns 175 rows and includes `limit` of 50 in the API request, the response will contain `rowCount` of 175 but only 50 rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). */
		rowCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaRunAccessReportResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaRunAccessReportResponseFormProperties>({
			rowCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request message for SearchChangeHistoryEvents RPC. */
	export interface GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest {

		/** Optional. If set, only return changes that match one or more of these types of actions. */
		action?: Array<GoogleAnalyticsAdminV1betaChangeHistoryChangeAction>;

		/** Optional. If set, only return changes if they are made by a user in this list. */
		actorEmail?: Array<string>;

		/** Optional. If set, only return changes made after this time (inclusive). */
		earliestChangeTime?: string | null;

		/** Optional. If set, only return changes made before this time (inclusive). */
		latestChangeTime?: string | null;

		/** Optional. The maximum number of ChangeHistoryEvent items to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 items will be returned. The maximum value is 200 (higher values will be coerced to the maximum). */
		pageSize?: number | null;

		/** Optional. A page token, received from a previous `SearchChangeHistoryEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchChangeHistoryEvents` must match the call that provided the page token. */
		pageToken?: string | null;

		/** Optional. Resource name for a child property. If set, only return changes made to this property or its child resources. Format: properties/{propertyId} Example: "properties/100" */
		property?: string | null;

		/** Optional. If set, only return changes if they are for a resource that matches at least one of these types. */
		resourceType?: Array<string>;
	}

	/** Request message for SearchChangeHistoryEvents RPC. */
	export interface GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestFormProperties {

		/** Optional. If set, only return changes made after this time (inclusive). */
		earliestChangeTime: FormControl<string | null | undefined>,

		/** Optional. If set, only return changes made before this time (inclusive). */
		latestChangeTime: FormControl<string | null | undefined>,

		/** Optional. The maximum number of ChangeHistoryEvent items to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 items will be returned. The maximum value is 200 (higher values will be coerced to the maximum). */
		pageSize: FormControl<number | null | undefined>,

		/** Optional. A page token, received from a previous `SearchChangeHistoryEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchChangeHistoryEvents` must match the call that provided the page token. */
		pageToken: FormControl<string | null | undefined>,

		/** Optional. Resource name for a child property. If set, only return changes made to this property or its child resources. Format: properties/{propertyId} Example: "properties/100" */
		property: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestFormProperties>({
			earliestChangeTime: new FormControl<string | null | undefined>(undefined),
			latestChangeTime: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			property: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for SearchAccounts RPC. */
	export interface GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse {

		/** Results that were accessible to the caller. */
		changeHistoryEvents?: Array<GoogleAnalyticsAdminV1betaChangeHistoryEvent>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for SearchAccounts RPC. */
	export interface GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponseFormGroup() {
		return new FormGroup<GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
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
		 * Get v1beta/accountSummaries
		 * @param {number} pageSize The maximum number of AccountSummary resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
		 * @param {string} pageToken A page token, received from a previous `ListAccountSummaries` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountSummaries` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1betaListAccountSummariesResponse} Successful response
		 */
		Analyticsadmin_accountSummaries_list(pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1betaListAccountSummariesResponse> {
			return this.http.get<GoogleAnalyticsAdminV1betaListAccountSummariesResponse>(this.baseUri + 'v1beta/accountSummaries?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.
		 * Get v1beta/accounts
		 * @param {number} pageSize The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
		 * @param {string} pageToken A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token.
		 * @param {boolean} showDeleted Whether to include soft-deleted (ie: "trashed") Accounts in the results. Accounts can be inspected to determine whether they are deleted or not.
		 * @return {GoogleAnalyticsAdminV1betaListAccountsResponse} Successful response
		 */
		Analyticsadmin_accounts_list(pageSize: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined): Observable<GoogleAnalyticsAdminV1betaListAccountsResponse> {
			return this.http.get<GoogleAnalyticsAdminV1betaListAccountsResponse>(this.baseUri + 'v1beta/accounts?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted, {});
		}

		/**
		 * Requests a ticket for creating an account.
		 * Post v1beta/accounts:provisionAccountTicket
		 * @return {GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse} Successful response
		 */
		Analyticsadmin_accounts_provisionAccountTicket(requestBody: GoogleAnalyticsAdminV1betaProvisionAccountTicketRequest): Observable<GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse> {
			return this.http.post<GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse>(this.baseUri + 'v1beta/accounts:provisionAccountTicket', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
		 * Get v1beta/properties
		 * @param {string} filter Required. An expression for filtering the results of the request. Fields eligible for filtering are: `parent:`(The resource name of the parent account/property) or `ancestor:`(The resource name of the parent account) or `firebase_project:`(The id or number of the linked firebase project). Some examples of filters: ``` | Filter | Description | |-----------------------------|-------------------------------------------| | parent:accounts/123 | The account with account id: 123. | | parent:properties/123 | The property with property id: 123. | | ancestor:accounts/123 | The account with account id: 123. | | firebase_project:project-id | The firebase project with id: project-id. | | firebase_project:123 | The firebase project with number: 123. | ```
		 * @param {number} pageSize The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
		 * @param {string} pageToken A page token, received from a previous `ListProperties` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProperties` must match the call that provided the page token.
		 * @param {boolean} showDeleted Whether to include soft-deleted (ie: "trashed") Properties in the results. Properties can be inspected to determine whether they are deleted or not.
		 * @return {GoogleAnalyticsAdminV1betaListPropertiesResponse} Successful response
		 */
		Analyticsadmin_properties_list(filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined): Observable<GoogleAnalyticsAdminV1betaListPropertiesResponse> {
			return this.http.get<GoogleAnalyticsAdminV1betaListPropertiesResponse>(this.baseUri + 'v1beta/properties?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted, {});
		}

		/**
		 * Creates an "GA4" property with the specified location and attributes.
		 * Post v1beta/properties
		 * @return {GoogleAnalyticsAdminV1betaProperty} Successful response
		 */
		Analyticsadmin_properties_create(requestBody: GoogleAnalyticsAdminV1betaProperty): Observable<GoogleAnalyticsAdminV1betaProperty> {
			return this.http.post<GoogleAnalyticsAdminV1betaProperty>(this.baseUri + 'v1beta/properties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches through all changes to an account or its children given the specified set of filters.
		 * Post v1beta/{account}:searchChangeHistoryEvents
		 * @param {string} account Required. The account resource for which to return change history resources. Format: accounts/{account} Example: "accounts/100"
		 * @return {GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse} Successful response
		 */
		Analyticsadmin_accounts_searchChangeHistoryEvents(account: string, requestBody: GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest): Observable<GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse> {
			return this.http.post<GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse>(this.baseUri + 'v1beta/' + (account == null ? '' : encodeURIComponent(account)) + ':searchChangeHistoryEvents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).
		 * Post v1beta/{entity}:runAccessReport
		 * @param {string} entity The Data Access Report supports requesting at the property level or account level. If requested at the account level, Data Access Reports include all access for all properties under that account. To request at the property level, entity should be for example 'properties/123' if "123" is your GA4 property ID. To request at the account level, entity should be for example 'accounts/1234' if "1234" is your GA4 Account ID.
		 * @return {GoogleAnalyticsAdminV1betaRunAccessReportResponse} Successful response
		 */
		Analyticsadmin_properties_runAccessReport(entity: string, requestBody: GoogleAnalyticsAdminV1betaRunAccessReportRequest): Observable<GoogleAnalyticsAdminV1betaRunAccessReportResponse> {
			return this.http.post<GoogleAnalyticsAdminV1betaRunAccessReportResponse>(this.baseUri + 'v1beta/' + (entity == null ? '' : encodeURIComponent(entity)) + ':runAccessReport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a GoogleAdsLink on a property
		 * Delete v1beta/{name}
		 * @param {string} name Required. Example format: properties/1234/googleAdsLinks/5678
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Analyticsadmin_properties_googleAdsLinks_delete(name: string): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Lookup for a single "GA4" MeasurementProtocolSecret.
		 * Get v1beta/{name}
		 * @param {string} name Required. The name of the measurement protocol secret to lookup. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret}
		 * @return {GoogleAnalyticsAdminV1betaMeasurementProtocolSecret} Successful response
		 */
		Analyticsadmin_properties_dataStreams_measurementProtocolSecrets_get(name: string): Observable<GoogleAnalyticsAdminV1betaMeasurementProtocolSecret> {
			return this.http.get<GoogleAnalyticsAdminV1betaMeasurementProtocolSecret>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a GoogleAdsLink on a property
		 * Patch v1beta/{name}
		 * @param {string} name Output only. Format: properties/{propertyId}/googleAdsLinks/{googleAdsLinkId} Note: googleAdsLinkId is not the Google Ads customer ID.
		 * @param {string} updateMask Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
		 * @return {GoogleAnalyticsAdminV1betaGoogleAdsLink} Successful response
		 */
		Analyticsadmin_properties_googleAdsLinks_patch(name: string, updateMask: string | null | undefined, requestBody: GoogleAnalyticsAdminV1betaGoogleAdsLink): Observable<GoogleAnalyticsAdminV1betaGoogleAdsLink> {
			return this.http.patch<GoogleAnalyticsAdminV1betaGoogleAdsLink>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Archives a CustomMetric on a property.
		 * Post v1beta/{name}:archive
		 * @param {string} name Required. The name of the CustomMetric to archive. Example format: properties/1234/customMetrics/5678
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Analyticsadmin_properties_customMetrics_archive(name: string, requestBody: GoogleAnalyticsAdminV1betaArchiveCustomMetricRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + ':archive', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
		 * Get v1beta/{parent}/conversionEvents
		 * @param {string} parent Required. The resource name of the parent property. Example: 'properties/123'
		 * @param {number} pageSize The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
		 * @param {string} pageToken A page token, received from a previous `ListConversionEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConversionEvents` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1betaListConversionEventsResponse} Successful response
		 */
		Analyticsadmin_properties_conversionEvents_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1betaListConversionEventsResponse> {
			return this.http.get<GoogleAnalyticsAdminV1betaListConversionEventsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/conversionEvents&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a conversion event with the specified attributes.
		 * Post v1beta/{parent}/conversionEvents
		 * @param {string} parent Required. The resource name of the parent property where this conversion event will be created. Format: properties/123
		 * @return {GoogleAnalyticsAdminV1betaConversionEvent} Successful response
		 */
		Analyticsadmin_properties_conversionEvents_create(parent: string, requestBody: GoogleAnalyticsAdminV1betaConversionEvent): Observable<GoogleAnalyticsAdminV1betaConversionEvent> {
			return this.http.post<GoogleAnalyticsAdminV1betaConversionEvent>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/conversionEvents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists CustomDimensions on a property.
		 * Get v1beta/{parent}/customDimensions
		 * @param {string} parent Required. Example format: properties/1234
		 * @param {number} pageSize The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
		 * @param {string} pageToken A page token, received from a previous `ListCustomDimensions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomDimensions` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1betaListCustomDimensionsResponse} Successful response
		 */
		Analyticsadmin_properties_customDimensions_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1betaListCustomDimensionsResponse> {
			return this.http.get<GoogleAnalyticsAdminV1betaListCustomDimensionsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customDimensions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a CustomDimension.
		 * Post v1beta/{parent}/customDimensions
		 * @param {string} parent Required. Example format: properties/1234
		 * @return {GoogleAnalyticsAdminV1betaCustomDimension} Successful response
		 */
		Analyticsadmin_properties_customDimensions_create(parent: string, requestBody: GoogleAnalyticsAdminV1betaCustomDimension): Observable<GoogleAnalyticsAdminV1betaCustomDimension> {
			return this.http.post<GoogleAnalyticsAdminV1betaCustomDimension>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customDimensions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists CustomMetrics on a property.
		 * Get v1beta/{parent}/customMetrics
		 * @param {string} parent Required. Example format: properties/1234
		 * @param {number} pageSize The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
		 * @param {string} pageToken A page token, received from a previous `ListCustomMetrics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomMetrics` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1betaListCustomMetricsResponse} Successful response
		 */
		Analyticsadmin_properties_customMetrics_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1betaListCustomMetricsResponse> {
			return this.http.get<GoogleAnalyticsAdminV1betaListCustomMetricsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customMetrics&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a CustomMetric.
		 * Post v1beta/{parent}/customMetrics
		 * @param {string} parent Required. Example format: properties/1234
		 * @return {GoogleAnalyticsAdminV1betaCustomMetric} Successful response
		 */
		Analyticsadmin_properties_customMetrics_create(parent: string, requestBody: GoogleAnalyticsAdminV1betaCustomMetric): Observable<GoogleAnalyticsAdminV1betaCustomMetric> {
			return this.http.post<GoogleAnalyticsAdminV1betaCustomMetric>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customMetrics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists DataStreams on a property.
		 * Get v1beta/{parent}/dataStreams
		 * @param {string} parent Required. Example format: properties/1234
		 * @param {number} pageSize The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
		 * @param {string} pageToken A page token, received from a previous `ListDataStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDataStreams` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1betaListDataStreamsResponse} Successful response
		 */
		Analyticsadmin_properties_dataStreams_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1betaListDataStreamsResponse> {
			return this.http.get<GoogleAnalyticsAdminV1betaListDataStreamsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dataStreams&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a DataStream.
		 * Post v1beta/{parent}/dataStreams
		 * @param {string} parent Required. Example format: properties/1234
		 * @return {GoogleAnalyticsAdminV1betaDataStream} Successful response
		 */
		Analyticsadmin_properties_dataStreams_create(parent: string, requestBody: GoogleAnalyticsAdminV1betaDataStream): Observable<GoogleAnalyticsAdminV1betaDataStream> {
			return this.http.post<GoogleAnalyticsAdminV1betaDataStream>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dataStreams', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
		 * Get v1beta/{parent}/firebaseLinks
		 * @param {string} parent Required. Format: properties/{property_id} Example: properties/1234
		 * @param {number} pageSize The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
		 * @param {string} pageToken A page token, received from a previous `ListFirebaseLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFirebaseLinks` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1betaListFirebaseLinksResponse} Successful response
		 */
		Analyticsadmin_properties_firebaseLinks_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1betaListFirebaseLinksResponse> {
			return this.http.get<GoogleAnalyticsAdminV1betaListFirebaseLinksResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/firebaseLinks&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a FirebaseLink. Properties can have at most one FirebaseLink.
		 * Post v1beta/{parent}/firebaseLinks
		 * @param {string} parent Required. Format: properties/{property_id} Example: properties/1234
		 * @return {GoogleAnalyticsAdminV1betaFirebaseLink} Successful response
		 */
		Analyticsadmin_properties_firebaseLinks_create(parent: string, requestBody: GoogleAnalyticsAdminV1betaFirebaseLink): Observable<GoogleAnalyticsAdminV1betaFirebaseLink> {
			return this.http.post<GoogleAnalyticsAdminV1betaFirebaseLink>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/firebaseLinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists GoogleAdsLinks on a property.
		 * Get v1beta/{parent}/googleAdsLinks
		 * @param {string} parent Required. Example format: properties/1234
		 * @param {number} pageSize The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
		 * @param {string} pageToken A page token, received from a previous `ListGoogleAdsLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGoogleAdsLinks` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse} Successful response
		 */
		Analyticsadmin_properties_googleAdsLinks_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse> {
			return this.http.get<GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/googleAdsLinks&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a GoogleAdsLink.
		 * Post v1beta/{parent}/googleAdsLinks
		 * @param {string} parent Required. Example format: properties/1234
		 * @return {GoogleAnalyticsAdminV1betaGoogleAdsLink} Successful response
		 */
		Analyticsadmin_properties_googleAdsLinks_create(parent: string, requestBody: GoogleAnalyticsAdminV1betaGoogleAdsLink): Observable<GoogleAnalyticsAdminV1betaGoogleAdsLink> {
			return this.http.post<GoogleAnalyticsAdminV1betaGoogleAdsLink>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/googleAdsLinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns child MeasurementProtocolSecrets under the specified parent Property.
		 * Get v1beta/{parent}/measurementProtocolSecrets
		 * @param {string} parent Required. The resource name of the parent stream. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets
		 * @param {number} pageSize The maximum number of resources to return. If unspecified, at most 10 resources will be returned. The maximum value is 10. Higher values will be coerced to the maximum.
		 * @param {string} pageToken A page token, received from a previous `ListMeasurementProtocolSecrets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMeasurementProtocolSecrets` must match the call that provided the page token.
		 * @return {GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse} Successful response
		 */
		Analyticsadmin_properties_dataStreams_measurementProtocolSecrets_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse> {
			return this.http.get<GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/measurementProtocolSecrets&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a measurement protocol secret.
		 * Post v1beta/{parent}/measurementProtocolSecrets
		 * @param {string} parent Required. The parent resource where this secret will be created. Format: properties/{property}/dataStreams/{dataStream}
		 * @return {GoogleAnalyticsAdminV1betaMeasurementProtocolSecret} Successful response
		 */
		Analyticsadmin_properties_dataStreams_measurementProtocolSecrets_create(parent: string, requestBody: GoogleAnalyticsAdminV1betaMeasurementProtocolSecret): Observable<GoogleAnalyticsAdminV1betaMeasurementProtocolSecret> {
			return this.http.post<GoogleAnalyticsAdminV1betaMeasurementProtocolSecret>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/measurementProtocolSecrets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.
		 * Post v1beta/{property}:acknowledgeUserDataCollection
		 * @param {string} property Required. The property for which to acknowledge user data collection.
		 * @return {GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse} Successful response
		 */
		Analyticsadmin_properties_acknowledgeUserDataCollection(property: string, requestBody: GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest): Observable<GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse> {
			return this.http.post<GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse>(this.baseUri + 'v1beta/' + (property == null ? '' : encodeURIComponent(property)) + ':acknowledgeUserDataCollection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

