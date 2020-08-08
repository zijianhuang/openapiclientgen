import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateCostCategoryDefinitionResponse {
		CostCategoryArn?: string;

		/**
		 * The time period that you want the usage and costs for.
		 * Max length: 25
		 * Min length: 20
		 * Pattern: ^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$
		 */
		EffectiveStart?: string;
	}

	export interface CreateCostCategoryDefinitionRequest {

		/**
		 * The unique name of the Cost Category.
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/** The rule schema version in this particular Cost Category. */
		RuleVersion: CreateCostCategoryDefinitionRequestRuleVersion;
		Rules: Array<CostCategoryRule>;
	}

	export enum CreateCostCategoryDefinitionRequestRuleVersion { CostCategoryExpression_v1 = 0 }


	/** Rules are processed in order. If there are multiple rules that match the line item, then the first rule to match is used to determine that Cost Category value. */
	export interface CostCategoryRule {

		/**
		 * The value a line item will be categorized as, if it matches the rule.
		 * Max length: 255
		 * Min length: 1
		 */
		Value: string;

		/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
		Rule: Expression;
	}


	/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
	export interface Expression {
		Or?: Array<Expression>;
		And?: Array<Expression>;

		/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
		Not?: Expression;

		/** The metadata that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values. */
		Dimensions?: DimensionValues;

		/** The values that are available for a tag. */
		Tags?: TagValues;

		/** The Cost Categories values used for filtering the costs. */
		CostCategories?: CostCategoryValues;
	}


	/** The metadata that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values. */
	export interface DimensionValues {
		Key?: DimensionValuesKey;
		Values?: Array<string>;
		MatchOptions?: Array<MatchOption>;
	}

	export enum DimensionValuesKey { AZ = 0, INSTANCE_TYPE = 1, LINKED_ACCOUNT = 2, LINKED_ACCOUNT_NAME = 3, OPERATION = 4, PURCHASE_TYPE = 5, REGION = 6, SERVICE = 7, SERVICE_CODE = 8, USAGE_TYPE = 9, USAGE_TYPE_GROUP = 10, RECORD_TYPE = 11, OPERATING_SYSTEM = 12, TENANCY = 13, SCOPE = 14, PLATFORM = 15, SUBSCRIPTION_ID = 16, LEGAL_ENTITY_NAME = 17, DEPLOYMENT_OPTION = 18, DATABASE_ENGINE = 19, CACHE_ENGINE = 20, INSTANCE_TYPE_FAMILY = 21, BILLING_ENTITY = 22, RESERVATION_ID = 23, RESOURCE_ID = 24, RIGHTSIZING_TYPE = 25, SAVINGS_PLANS_TYPE = 26, SAVINGS_PLAN_ARN = 27, PAYMENT_OPTION = 28 }

	export enum MatchOption { EQUALS = 0, STARTS_WITH = 1, ENDS_WITH = 2, CONTAINS = 3, CASE_SENSITIVE = 4, CASE_INSENSITIVE = 5 }


	/** The values that are available for a tag. */
	export interface TagValues {
		Key?: string;
		Values?: Array<string>;
		MatchOptions?: Array<MatchOption>;
	}


	/** The Cost Categories values used for filtering the costs. */
	export interface CostCategoryValues {

		/**
		 * The unique name of the Cost Category.
		 * Max length: 255
		 * Min length: 1
		 */
		Key?: string;
		Values?: Array<string>;
	}

	export interface ServiceQuotaExceededException {
	}

	export interface LimitExceededException {
	}

	export interface DeleteCostCategoryDefinitionResponse {
		CostCategoryArn?: string;

		/**
		 * The time period that you want the usage and costs for.
		 * Max length: 25
		 * Min length: 20
		 * Pattern: ^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$
		 */
		EffectiveEnd?: string;
	}

	export interface DeleteCostCategoryDefinitionRequest {
		CostCategoryArn: string;
	}

	export interface ResourceNotFoundException {
	}

	export interface DescribeCostCategoryDefinitionResponse {

		/** The structure of Cost Categories. This includes detailed metadata and the set of rules for the <code>CostCategory</code> object. */
		CostCategory?: CostCategory;
	}


	/** The structure of Cost Categories. This includes detailed metadata and the set of rules for the <code>CostCategory</code> object. */
	export interface CostCategory {
		CostCategoryArn: string;

		/**
		 * The time period that you want the usage and costs for.
		 * Max length: 25
		 * Min length: 20
		 * Pattern: ^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$
		 */
		EffectiveStart: string;

		/**
		 * The time period that you want the usage and costs for.
		 * Max length: 25
		 * Min length: 20
		 * Pattern: ^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$
		 */
		EffectiveEnd?: string;

		/**
		 * The unique name of the Cost Category.
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/** The rule schema version in this particular Cost Category. */
		RuleVersion: CostCategoryRuleVersion;
		Rules: Array<CostCategoryRule>;
	}

	export enum CostCategoryRuleVersion { CostCategoryExpression_v1 = 0 }

	export interface DescribeCostCategoryDefinitionRequest {
		CostCategoryArn: string;

		/**
		 * The time period that you want the usage and costs for.
		 * Max length: 25
		 * Min length: 20
		 * Pattern: ^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$
		 */
		EffectiveOn?: string;
	}

	export interface GetCostAndUsageResponse {
		NextPageToken?: string;
		GroupDefinitions?: Array<GroupDefinition>;
		ResultsByTime?: Array<ResultByTime>;
	}


	/** Represents a group when you specify a group by criteria or in the response to a query with a specific grouping. */
	export interface GroupDefinition {
		Type?: GroupDefinitionType;
		Key?: string;
	}

	export enum GroupDefinitionType { DIMENSION = 0, TAG = 1, COST_CATEGORY = 2 }


	/** The result that is associated with a time period. */
	export interface ResultByTime {

		/** The time period that you want the usage and costs for. */
		TimePeriod?: DateInterval;
		Total?: Metrics;
		Groups?: Array<Group>;
		Estimated?: boolean;
	}


	/** The time period that you want the usage and costs for.  */
	export interface DateInterval {
		Start: string;
		End: string;
	}

	export interface Metrics {
	}


	/** One level of grouped data in the results. */
	export interface Group {
		Keys?: Array<string>;
		Metrics?: Metrics;
	}

	export interface GetCostAndUsageRequest {

		/** The time period that you want the usage and costs for. */
		TimePeriod: DateInterval;
		Granularity?: GetCostAndUsageRequestGranularity;

		/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
		Filter?: Expression;
		Metrics?: Array<string>;
		GroupBy?: Array<GroupDefinition>;
		NextPageToken?: string;
	}

	export enum GetCostAndUsageRequestGranularity { DAILY = 0, MONTHLY = 1, HOURLY = 2 }

	export interface BillExpirationException {
	}

	export interface DataUnavailableException {
	}

	export interface InvalidNextTokenException {
	}

	export interface RequestChangedException {
	}

	export interface GetCostAndUsageWithResourcesResponse {
		NextPageToken?: string;
		GroupDefinitions?: Array<GroupDefinition>;
		ResultsByTime?: Array<ResultByTime>;
	}

	export interface GetCostAndUsageWithResourcesRequest {

		/** The time period that you want the usage and costs for. */
		TimePeriod: DateInterval;
		Granularity?: GetCostAndUsageRequestGranularity;

		/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
		Filter?: Expression;
		Metrics?: Array<string>;
		GroupBy?: Array<GroupDefinition>;
		NextPageToken?: string;
	}

	export interface GetCostForecastResponse {

		/** The aggregated value for a metric. */
		Total?: MetricValue;
		ForecastResultsByTime?: Array<ForecastResult>;
	}


	/** The aggregated value for a metric. */
	export interface MetricValue {
		Amount?: string;
		Unit?: string;
	}


	/** The forecast created for your query. */
	export interface ForecastResult {

		/** The time period that you want the usage and costs for. */
		TimePeriod?: DateInterval;
		MeanValue?: string;
		PredictionIntervalLowerBound?: string;
		PredictionIntervalUpperBound?: string;
	}

	export interface GetCostForecastRequest {

		/** The time period that you want the usage and costs for. */
		TimePeriod: DateInterval;
		Metric: GetCostForecastRequestMetric;
		Granularity: GetCostAndUsageRequestGranularity;

		/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
		Filter?: Expression;
		PredictionIntervalLevel?: number;
	}

	export enum GetCostForecastRequestMetric { BLENDED_COST = 0, UNBLENDED_COST = 1, AMORTIZED_COST = 2, NET_UNBLENDED_COST = 3, NET_AMORTIZED_COST = 4, USAGE_QUANTITY = 5, NORMALIZED_USAGE_AMOUNT = 6 }

	export interface GetDimensionValuesResponse {
		DimensionValues: Array<DimensionValuesWithAttributes>;
		ReturnSize: number;
		TotalSize: number;
		NextPageToken?: string;
	}


	/** The metadata of a specific type that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values. */
	export interface DimensionValuesWithAttributes {
		Value?: string;
		Attributes?: Attributes;
	}

	export interface Attributes {
	}

	export interface GetDimensionValuesRequest {
		SearchString?: string;

		/** The time period that you want the usage and costs for. */
		TimePeriod: DateInterval;
		Dimension: DimensionValuesKey;
		Context?: GetDimensionValuesRequestContext;
		NextPageToken?: string;
	}

	export enum GetDimensionValuesRequestContext { COST_AND_USAGE = 0, RESERVATIONS = 1, SAVINGS_PLANS = 2 }

	export interface GetReservationCoverageResponse {
		CoveragesByTime: Array<CoverageByTime>;

		/** The amount of instance usage that a reservation covered. */
		Total?: Coverage;
		NextPageToken?: string;
	}


	/** Reservation coverage for a specified period, in hours. */
	export interface CoverageByTime {

		/** The time period that you want the usage and costs for. */
		TimePeriod?: DateInterval;
		Groups?: Array<ReservationCoverageGroup>;

		/** The amount of instance usage that a reservation covered. */
		Total?: Coverage;
	}


	/** A group of reservations that share a set of attributes. */
	export interface ReservationCoverageGroup {
		Attributes?: Attributes;

		/** The amount of instance usage that a reservation covered. */
		Coverage?: Coverage;
	}


	/** The amount of instance usage that a reservation covered. */
	export interface Coverage {

		/** How long a running instance either used a reservation or was On-Demand. */
		CoverageHours?: CoverageHours;

		/** <p>The amount of instance usage, in normalized units. Normalized units enable you to see your EC2 usage for multiple sizes of instances in a uniform way. For example, suppose you run an xlarge instance and a 2xlarge instance. If you run both instances for the same amount of time, the 2xlarge instance uses twice as much of your reservation as the xlarge instance, even though both instances show only one instance-hour. Using normalized units instead of instance-hours, the xlarge instance used 8 normalized units, and the 2xlarge instance used 16 normalized units.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html">Modifying Reserved Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide for Linux Instances</i>.</p> */
		CoverageNormalizedUnits?: CoverageNormalizedUnits;

		/** How much it costs to run an instance. */
		CoverageCost?: CoverageCost;
	}


	/** How long a running instance either used a reservation or was On-Demand. */
	export interface CoverageHours {
		OnDemandHours?: string;
		ReservedHours?: string;
		TotalRunningHours?: string;
		CoverageHoursPercentage?: string;
	}


	/** <p>The amount of instance usage, in normalized units. Normalized units enable you to see your EC2 usage for multiple sizes of instances in a uniform way. For example, suppose you run an xlarge instance and a 2xlarge instance. If you run both instances for the same amount of time, the 2xlarge instance uses twice as much of your reservation as the xlarge instance, even though both instances show only one instance-hour. Using normalized units instead of instance-hours, the xlarge instance used 8 normalized units, and the 2xlarge instance used 16 normalized units.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html">Modifying Reserved Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide for Linux Instances</i>.</p> */
	export interface CoverageNormalizedUnits {
		OnDemandNormalizedUnits?: string;
		ReservedNormalizedUnits?: string;
		TotalRunningNormalizedUnits?: string;
		CoverageNormalizedUnitsPercentage?: string;
	}


	/** How much it costs to run an instance. */
	export interface CoverageCost {
		OnDemandCost?: string;
	}


	/** You can use the following request parameters to query for how much of your instance usage a reservation covered. */
	export interface GetReservationCoverageRequest {

		/** The time period that you want the usage and costs for. */
		TimePeriod: DateInterval;
		GroupBy?: Array<GroupDefinition>;
		Granularity?: GetCostAndUsageRequestGranularity;

		/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
		Filter?: Expression;
		Metrics?: Array<string>;
		NextPageToken?: string;
	}

	export interface GetReservationPurchaseRecommendationResponse {

		/** Information about this specific recommendation, such as the timestamp for when AWS made a specific recommendation. */
		Metadata?: ReservationPurchaseRecommendationMetadata;
		Recommendations?: Array<ReservationPurchaseRecommendation>;
		NextPageToken?: string;
	}


	/** Information about this specific recommendation, such as the timestamp for when AWS made a specific recommendation. */
	export interface ReservationPurchaseRecommendationMetadata {
		RecommendationId?: string;
		GenerationTimestamp?: string;
	}


	/** A specific reservation that AWS recommends for purchase. */
	export interface ReservationPurchaseRecommendation {
		AccountScope?: ReservationPurchaseRecommendationAccountScope;
		LookbackPeriodInDays?: ReservationPurchaseRecommendationLookbackPeriodInDays;
		TermInYears?: ReservationPurchaseRecommendationTermInYears;
		PaymentOption?: ReservationPurchaseRecommendationPaymentOption;

		/** Hardware specifications for the service that you want recommendations for. */
		ServiceSpecification?: ServiceSpecification;
		RecommendationDetails?: Array<ReservationPurchaseRecommendationDetail>;

		/** A summary about this recommendation, such as the currency code, the amount that AWS estimates that you could save, and the total amount of reservation to purchase. */
		RecommendationSummary?: ReservationPurchaseRecommendationSummary;
	}

	export enum ReservationPurchaseRecommendationAccountScope { PAYER = 0, LINKED = 1 }

	export enum ReservationPurchaseRecommendationLookbackPeriodInDays { SEVEN_DAYS = 0, THIRTY_DAYS = 1, SIXTY_DAYS = 2 }

	export enum ReservationPurchaseRecommendationTermInYears { ONE_YEAR = 0, THREE_YEARS = 1 }

	export enum ReservationPurchaseRecommendationPaymentOption { NO_UPFRONT = 0, PARTIAL_UPFRONT = 1, ALL_UPFRONT = 2, LIGHT_UTILIZATION = 3, MEDIUM_UTILIZATION = 4, HEAVY_UTILIZATION = 5 }


	/** Hardware specifications for the service that you want recommendations for. */
	export interface ServiceSpecification {

		/** The Amazon EC2 hardware specifications that you want AWS to provide recommendations for. */
		EC2Specification?: EC2Specification;
	}


	/** The Amazon EC2 hardware specifications that you want AWS to provide recommendations for. */
	export interface EC2Specification {
		OfferingClass?: EC2SpecificationOfferingClass;
	}

	export enum EC2SpecificationOfferingClass { STANDARD = 0, CONVERTIBLE = 1 }


	/** Details about your recommended reservation purchase. */
	export interface ReservationPurchaseRecommendationDetail {
		AccountId?: string;

		/** Details about the instances that AWS recommends that you purchase. */
		InstanceDetails?: InstanceDetails;
		RecommendedNumberOfInstancesToPurchase?: string;
		RecommendedNormalizedUnitsToPurchase?: string;
		MinimumNumberOfInstancesUsedPerHour?: string;
		MinimumNormalizedUnitsUsedPerHour?: string;
		MaximumNumberOfInstancesUsedPerHour?: string;
		MaximumNormalizedUnitsUsedPerHour?: string;
		AverageNumberOfInstancesUsedPerHour?: string;
		AverageNormalizedUnitsUsedPerHour?: string;
		AverageUtilization?: string;
		EstimatedBreakEvenInMonths?: string;
		CurrencyCode?: string;
		EstimatedMonthlySavingsAmount?: string;
		EstimatedMonthlySavingsPercentage?: string;
		EstimatedMonthlyOnDemandCost?: string;
		EstimatedReservationCostForLookbackPeriod?: string;
		UpfrontCost?: string;
		RecurringStandardMonthlyCost?: string;
	}


	/** Details about the instances that AWS recommends that you purchase. */
	export interface InstanceDetails {

		/** Details about the Amazon EC2 instances that AWS recommends that you purchase. */
		EC2InstanceDetails?: EC2InstanceDetails;

		/** Details about the Amazon RDS instances that AWS recommends that you purchase. */
		RDSInstanceDetails?: RDSInstanceDetails;

		/** Details about the Amazon Redshift instances that AWS recommends that you purchase. */
		RedshiftInstanceDetails?: RedshiftInstanceDetails;

		/** Details about the Amazon ElastiCache instances that AWS recommends that you purchase. */
		ElastiCacheInstanceDetails?: ElastiCacheInstanceDetails;

		/** Details about the Amazon ES instances that AWS recommends that you purchase. */
		ESInstanceDetails?: ESInstanceDetails;
	}


	/** Details about the Amazon EC2 instances that AWS recommends that you purchase. */
	export interface EC2InstanceDetails {
		Family?: string;
		InstanceType?: string;
		Region?: string;
		AvailabilityZone?: string;
		Platform?: string;
		Tenancy?: string;
		CurrentGeneration?: boolean;
		SizeFlexEligible?: boolean;
	}


	/** Details about the Amazon RDS instances that AWS recommends that you purchase. */
	export interface RDSInstanceDetails {
		Family?: string;
		InstanceType?: string;
		Region?: string;
		DatabaseEngine?: string;
		DatabaseEdition?: string;
		DeploymentOption?: string;
		LicenseModel?: string;
		CurrentGeneration?: boolean;
		SizeFlexEligible?: boolean;
	}


	/** Details about the Amazon Redshift instances that AWS recommends that you purchase. */
	export interface RedshiftInstanceDetails {
		Family?: string;
		NodeType?: string;
		Region?: string;
		CurrentGeneration?: boolean;
		SizeFlexEligible?: boolean;
	}


	/** Details about the Amazon ElastiCache instances that AWS recommends that you purchase. */
	export interface ElastiCacheInstanceDetails {
		Family?: string;
		NodeType?: string;
		Region?: string;
		ProductDescription?: string;
		CurrentGeneration?: boolean;
		SizeFlexEligible?: boolean;
	}


	/** Details about the Amazon ES instances that AWS recommends that you purchase. */
	export interface ESInstanceDetails {
		InstanceClass?: string;
		InstanceSize?: string;
		Region?: string;
		CurrentGeneration?: boolean;
		SizeFlexEligible?: boolean;
	}


	/** A summary about this recommendation, such as the currency code, the amount that AWS estimates that you could save, and the total amount of reservation to purchase. */
	export interface ReservationPurchaseRecommendationSummary {
		TotalEstimatedMonthlySavingsAmount?: string;
		TotalEstimatedMonthlySavingsPercentage?: string;
		CurrencyCode?: string;
	}

	export interface GetReservationPurchaseRecommendationRequest {
		AccountId?: string;
		Service: string;
		AccountScope?: ReservationPurchaseRecommendationAccountScope;
		LookbackPeriodInDays?: ReservationPurchaseRecommendationLookbackPeriodInDays;
		TermInYears?: ReservationPurchaseRecommendationTermInYears;
		PaymentOption?: ReservationPurchaseRecommendationPaymentOption;

		/** Hardware specifications for the service that you want recommendations for. */
		ServiceSpecification?: ServiceSpecification;
		PageSize?: number;
		NextPageToken?: string;
	}

	export interface GetReservationUtilizationResponse {
		UtilizationsByTime: Array<UtilizationByTime>;

		/** The aggregated numbers for your reservation usage. */
		Total?: ReservationAggregates;
		NextPageToken?: string;
	}


	/** The amount of utilization, in hours. */
	export interface UtilizationByTime {

		/** The time period that you want the usage and costs for. */
		TimePeriod?: DateInterval;
		Groups?: Array<ReservationUtilizationGroup>;

		/** The aggregated numbers for your reservation usage. */
		Total?: ReservationAggregates;
	}


	/** A group of reservations that share a set of attributes. */
	export interface ReservationUtilizationGroup {
		Key?: string;
		Value?: string;
		Attributes?: Attributes;

		/** The aggregated numbers for your reservation usage. */
		Utilization?: ReservationAggregates;
	}


	/** The aggregated numbers for your reservation usage. */
	export interface ReservationAggregates {
		UtilizationPercentage?: string;
		UtilizationPercentageInUnits?: string;
		PurchasedHours?: string;
		PurchasedUnits?: string;
		TotalActualHours?: string;
		TotalActualUnits?: string;
		UnusedHours?: string;
		UnusedUnits?: string;
		OnDemandCostOfRIHoursUsed?: string;
		NetRISavings?: string;
		TotalPotentialRISavings?: string;
		AmortizedUpfrontFee?: string;
		AmortizedRecurringFee?: string;
		TotalAmortizedFee?: string;
	}

	export interface GetReservationUtilizationRequest {

		/** The time period that you want the usage and costs for. */
		TimePeriod: DateInterval;
		GroupBy?: Array<GroupDefinition>;
		Granularity?: GetCostAndUsageRequestGranularity;

		/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
		Filter?: Expression;
		NextPageToken?: string;
	}

	export interface GetRightsizingRecommendationResponse {

		/** Metadata for this recommendation set. */
		Metadata?: RightsizingRecommendationMetadata;

		/** Summary of rightsizing recommendations */
		Summary?: RightsizingRecommendationSummary;
		RightsizingRecommendations?: Array<RightsizingRecommendation>;
		NextPageToken?: string;

		/** Enables you to customize recommendations across two attributes. You can choose to view recommendations for instances within the same instance families or across different instance families. You can also choose to view your estimated savings associated with recommendations with consideration of existing Savings Plans or RI benefits, or niether. */
		Configuration?: RightsizingRecommendationConfiguration;
	}


	/** Metadata for this recommendation set. */
	export interface RightsizingRecommendationMetadata {
		RecommendationId?: string;
		GenerationTimestamp?: string;
		LookbackPeriodInDays?: ReservationPurchaseRecommendationLookbackPeriodInDays;
	}


	/**  Summary of rightsizing recommendations  */
	export interface RightsizingRecommendationSummary {
		TotalRecommendationCount?: string;
		EstimatedTotalMonthlySavingsAmount?: string;
		SavingsCurrencyCode?: string;
		SavingsPercentage?: string;
	}


	/** Recommendations to rightsize resources. */
	export interface RightsizingRecommendation {
		AccountId?: string;

		/** Context about the current instance. */
		CurrentInstance?: CurrentInstance;
		RightsizingType?: RightsizingRecommendationRightsizingType;

		/** Details on the modification recommendation. */
		ModifyRecommendationDetail?: ModifyRecommendationDetail;

		/** Details on termination recommendation. */
		TerminateRecommendationDetail?: TerminateRecommendationDetail;
	}


	/** Context about the current instance. */
	export interface CurrentInstance {
		ResourceId?: string;
		Tags?: Array<TagValues>;

		/** Details on the resource. */
		ResourceDetails?: ResourceDetails;

		/** Resource utilization of current resource. */
		ResourceUtilization?: ResourceUtilization;
		ReservationCoveredHoursInLookbackPeriod?: string;
		SavingsPlansCoveredHoursInLookbackPeriod?: string;
		OnDemandHoursInLookbackPeriod?: string;
		TotalRunningHoursInLookbackPeriod?: string;
		MonthlyCost?: string;
		CurrencyCode?: string;
	}


	/** Details on the resource. */
	export interface ResourceDetails {

		/** Details on the Amazon EC2 Resource. */
		EC2ResourceDetails?: EC2ResourceDetails;
	}


	/**  Details on the Amazon EC2 Resource. */
	export interface EC2ResourceDetails {
		HourlyOnDemandRate?: string;
		InstanceType?: string;
		Platform?: string;
		Region?: string;
		Sku?: string;
		Memory?: string;
		NetworkPerformance?: string;
		Storage?: string;
		Vcpu?: string;
	}


	/** Resource utilization of current resource.  */
	export interface ResourceUtilization {

		/** Utilization metrics of the instance. */
		EC2ResourceUtilization?: EC2ResourceUtilization;
	}


	/**  Utilization metrics of the instance.  */
	export interface EC2ResourceUtilization {
		MaxCpuUtilizationPercentage?: string;
		MaxMemoryUtilizationPercentage?: string;
		MaxStorageUtilizationPercentage?: string;
	}

	export enum RightsizingRecommendationRightsizingType { TERMINATE = 0, MODIFY = 1 }


	/**  Details on the modification recommendation. */
	export interface ModifyRecommendationDetail {
		TargetInstances?: Array<TargetInstance>;
	}


	/**  Details on recommended instance. */
	export interface TargetInstance {
		EstimatedMonthlyCost?: string;
		EstimatedMonthlySavings?: string;
		CurrencyCode?: string;
		DefaultTargetInstance?: boolean;

		/** Details on the resource. */
		ResourceDetails?: ResourceDetails;

		/** Resource utilization of current resource. */
		ExpectedResourceUtilization?: ResourceUtilization;
	}


	/**  Details on termination recommendation.  */
	export interface TerminateRecommendationDetail {
		EstimatedMonthlySavings?: string;
		CurrencyCode?: string;
	}


	/**  Enables you to customize recommendations across two attributes. You can choose to view recommendations for instances within the same instance families or across different instance families. You can also choose to view your estimated savings associated with recommendations with consideration of existing Savings Plans or RI benefits, or niether.  */
	export interface RightsizingRecommendationConfiguration {
		RecommendationTarget: RightsizingRecommendationConfigurationRecommendationTarget;
		BenefitsConsidered: boolean;
	}

	export enum RightsizingRecommendationConfigurationRecommendationTarget { SAME_INSTANCE_FAMILY = 0, CROSS_INSTANCE_FAMILY = 1 }

	export interface GetRightsizingRecommendationRequest {

		/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
		Filter?: Expression;

		/** Enables you to customize recommendations across two attributes. You can choose to view recommendations for instances within the same instance families or across different instance families. You can also choose to view your estimated savings associated with recommendations with consideration of existing Savings Plans or RI benefits, or niether. */
		Configuration?: RightsizingRecommendationConfiguration;
		Service: string;
		PageSize?: number;
		NextPageToken?: string;
	}

	export interface GetSavingsPlansCoverageResponse {
		SavingsPlansCoverages: Array<SavingsPlansCoverage>;
		NextToken?: string;
	}


	/** The amount of Savings Plans eligible usage that is covered by Savings Plans. All calculations consider the On-Demand equivalent of your Savings Plans usage. */
	export interface SavingsPlansCoverage {
		Attributes?: Attributes;

		/** Specific coverage percentage, On-Demand costs, and spend covered by Savings Plans, and total Savings Plans costs for an account. */
		Coverage?: SavingsPlansCoverageData;

		/** The time period that you want the usage and costs for. */
		TimePeriod?: DateInterval;
	}


	/** Specific coverage percentage, On-Demand costs, and spend covered by Savings Plans, and total Savings Plans costs for an account. */
	export interface SavingsPlansCoverageData {
		SpendCoveredBySavingsPlans?: string;
		OnDemandCost?: string;
		TotalCost?: string;
		CoveragePercentage?: string;
	}

	export interface GetSavingsPlansCoverageRequest {

		/** The time period that you want the usage and costs for. */
		TimePeriod: DateInterval;
		GroupBy?: Array<GroupDefinition>;
		Granularity?: GetCostAndUsageRequestGranularity;

		/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
		Filter?: Expression;
		Metrics?: Array<string>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface GetSavingsPlansPurchaseRecommendationResponse {

		/** Metadata about your Savings Plans Purchase Recommendations. */
		Metadata?: SavingsPlansPurchaseRecommendationMetadata;

		/** Contains your request parameters, Savings Plan Recommendations Summary, and Details. */
		SavingsPlansPurchaseRecommendation?: SavingsPlansPurchaseRecommendation;
		NextPageToken?: string;
	}


	/** Metadata about your Savings Plans Purchase Recommendations. */
	export interface SavingsPlansPurchaseRecommendationMetadata {
		RecommendationId?: string;
		GenerationTimestamp?: string;
	}


	/** Contains your request parameters, Savings Plan Recommendations Summary, and Details. */
	export interface SavingsPlansPurchaseRecommendation {
		AccountScope?: ReservationPurchaseRecommendationAccountScope;
		SavingsPlansType?: SavingsPlansPurchaseRecommendationSavingsPlansType;
		TermInYears?: ReservationPurchaseRecommendationTermInYears;
		PaymentOption?: ReservationPurchaseRecommendationPaymentOption;
		LookbackPeriodInDays?: ReservationPurchaseRecommendationLookbackPeriodInDays;
		SavingsPlansPurchaseRecommendationDetails?: Array<SavingsPlansPurchaseRecommendationDetail>;

		/** Summary metrics for your Savings Plans Purchase Recommendations. */
		SavingsPlansPurchaseRecommendationSummary?: SavingsPlansPurchaseRecommendationSummary;
	}

	export enum SavingsPlansPurchaseRecommendationSavingsPlansType { COMPUTE_SP = 0, EC2_INSTANCE_SP = 1 }


	/** Details for your recommended Savings Plans. */
	export interface SavingsPlansPurchaseRecommendationDetail {

		/** Attribute details on a specific Savings Plan. */
		SavingsPlansDetails?: SavingsPlansDetails;
		AccountId?: string;
		UpfrontCost?: string;
		EstimatedROI?: string;
		CurrencyCode?: string;
		EstimatedSPCost?: string;
		EstimatedOnDemandCost?: string;
		EstimatedOnDemandCostWithCurrentCommitment?: string;
		EstimatedSavingsAmount?: string;
		EstimatedSavingsPercentage?: string;
		HourlyCommitmentToPurchase?: string;
		EstimatedAverageUtilization?: string;
		EstimatedMonthlySavingsAmount?: string;
		CurrentMinimumHourlyOnDemandSpend?: string;
		CurrentMaximumHourlyOnDemandSpend?: string;
		CurrentAverageHourlyOnDemandSpend?: string;
	}


	/** Attribute details on a specific Savings Plan. */
	export interface SavingsPlansDetails {
		Region?: string;
		InstanceFamily?: string;
		OfferingId?: string;
	}


	/** Summary metrics for your Savings Plans Purchase Recommendations. */
	export interface SavingsPlansPurchaseRecommendationSummary {
		EstimatedROI?: string;
		CurrencyCode?: string;
		EstimatedTotalCost?: string;
		CurrentOnDemandSpend?: string;
		EstimatedSavingsAmount?: string;
		TotalRecommendationCount?: string;
		DailyCommitmentToPurchase?: string;
		HourlyCommitmentToPurchase?: string;
		EstimatedSavingsPercentage?: string;
		EstimatedMonthlySavingsAmount?: string;
		EstimatedOnDemandCostWithCurrentCommitment?: string;
	}

	export interface GetSavingsPlansPurchaseRecommendationRequest {
		SavingsPlansType: SavingsPlansPurchaseRecommendationSavingsPlansType;
		TermInYears: ReservationPurchaseRecommendationTermInYears;
		PaymentOption: ReservationPurchaseRecommendationPaymentOption;
		AccountScope?: ReservationPurchaseRecommendationAccountScope;
		NextPageToken?: string;
		PageSize?: number;
		LookbackPeriodInDays: ReservationPurchaseRecommendationLookbackPeriodInDays;

		/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
		Filter?: Expression;
	}

	export interface GetSavingsPlansUtilizationResponse {
		SavingsPlansUtilizationsByTime?: Array<SavingsPlansUtilizationByTime>;

		/** The aggregated utilization metrics for your Savings Plans usage. */
		Total: SavingsPlansUtilizationAggregates;
	}


	/** The amount of Savings Plans utilization, in hours. */
	export interface SavingsPlansUtilizationByTime {

		/** The time period that you want the usage and costs for. */
		TimePeriod: DateInterval;

		/** The measurement of how well you are using your existing Savings Plans. */
		Utilization: SavingsPlansUtilization;

		/** The amount of savings you're accumulating, against the public On-Demand rate of the usage accrued in an account. */
		Savings?: SavingsPlansSavings;

		/** The amortized amount of Savings Plans purchased in a specific account during a specific time interval. */
		AmortizedCommitment?: SavingsPlansAmortizedCommitment;
	}


	/** The measurement of how well you are using your existing Savings Plans. */
	export interface SavingsPlansUtilization {
		TotalCommitment?: string;
		UsedCommitment?: string;
		UnusedCommitment?: string;
		UtilizationPercentage?: string;
	}


	/** The amount of savings you're accumulating, against the public On-Demand rate of the usage accrued in an account. */
	export interface SavingsPlansSavings {
		NetSavings?: string;
		OnDemandCostEquivalent?: string;
	}


	/** The amortized amount of Savings Plans purchased in a specific account during a specific time interval. */
	export interface SavingsPlansAmortizedCommitment {
		AmortizedRecurringCommitment?: string;
		AmortizedUpfrontCommitment?: string;
		TotalAmortizedCommitment?: string;
	}


	/** The aggregated utilization metrics for your Savings Plans usage. */
	export interface SavingsPlansUtilizationAggregates {

		/** The measurement of how well you are using your existing Savings Plans. */
		Utilization: SavingsPlansUtilization;

		/** The amount of savings you're accumulating, against the public On-Demand rate of the usage accrued in an account. */
		Savings?: SavingsPlansSavings;

		/** The amortized amount of Savings Plans purchased in a specific account during a specific time interval. */
		AmortizedCommitment?: SavingsPlansAmortizedCommitment;
	}

	export interface GetSavingsPlansUtilizationRequest {

		/** The time period that you want the usage and costs for. */
		TimePeriod: DateInterval;
		Granularity?: GetCostAndUsageRequestGranularity;

		/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
		Filter?: Expression;
	}

	export interface GetSavingsPlansUtilizationDetailsResponse {
		SavingsPlansUtilizationDetails: Array<SavingsPlansUtilizationDetail>;

		/** The aggregated utilization metrics for your Savings Plans usage. */
		Total?: SavingsPlansUtilizationAggregates;

		/** The time period that you want the usage and costs for. */
		TimePeriod: DateInterval;
		NextToken?: string;
	}


	/** A single daily or monthly Savings Plans utilization rate, and details for your account. Master accounts in an organization have access to member accounts. You can use <code>GetDimensionValues</code> to determine the possible dimension values.  */
	export interface SavingsPlansUtilizationDetail {
		SavingsPlanArn?: string;
		Attributes?: Attributes;

		/** The measurement of how well you are using your existing Savings Plans. */
		Utilization?: SavingsPlansUtilization;

		/** The amount of savings you're accumulating, against the public On-Demand rate of the usage accrued in an account. */
		Savings?: SavingsPlansSavings;

		/** The amortized amount of Savings Plans purchased in a specific account during a specific time interval. */
		AmortizedCommitment?: SavingsPlansAmortizedCommitment;
	}

	export interface GetSavingsPlansUtilizationDetailsRequest {

		/** The time period that you want the usage and costs for. */
		TimePeriod: DateInterval;

		/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
		Filter?: Expression;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface GetTagsResponse {
		NextPageToken?: string;
		Tags: Array<string>;
		ReturnSize: number;
		TotalSize: number;
	}

	export interface GetTagsRequest {
		SearchString?: string;

		/** The time period that you want the usage and costs for. */
		TimePeriod: DateInterval;
		TagKey?: string;
		NextPageToken?: string;
	}

	export interface GetUsageForecastResponse {

		/** The aggregated value for a metric. */
		Total?: MetricValue;
		ForecastResultsByTime?: Array<ForecastResult>;
	}

	export interface GetUsageForecastRequest {

		/** The time period that you want the usage and costs for. */
		TimePeriod: DateInterval;
		Metric: GetCostForecastRequestMetric;
		Granularity: GetCostAndUsageRequestGranularity;

		/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
		Filter?: Expression;
		PredictionIntervalLevel?: number;
	}

	export interface UnresolvableUsageUnitException {
	}

	export interface ListCostCategoryDefinitionsResponse {
		CostCategoryReferences?: Array<CostCategoryReference>;
		NextToken?: string;
	}


	/** <p>A reference to a Cost Category containing only enough information to identify the Cost Category.</p> <p>You can use this information to retrieve the full Cost Category information using <code>DescribeCostCategory</code>.</p> */
	export interface CostCategoryReference {
		CostCategoryArn?: string;

		/**
		 * The unique name of the Cost Category.
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string;

		/**
		 * The time period that you want the usage and costs for.
		 * Max length: 25
		 * Min length: 20
		 * Pattern: ^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$
		 */
		EffectiveStart?: string;

		/**
		 * The time period that you want the usage and costs for.
		 * Max length: 25
		 * Min length: 20
		 * Pattern: ^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$
		 */
		EffectiveEnd?: string;
		NumberOfRules?: number;
	}

	export interface ListCostCategoryDefinitionsRequest {

		/**
		 * The time period that you want the usage and costs for.
		 * Max length: 25
		 * Min length: 20
		 * Pattern: ^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$
		 */
		EffectiveOn?: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface UpdateCostCategoryDefinitionResponse {
		CostCategoryArn?: string;

		/**
		 * The time period that you want the usage and costs for.
		 * Max length: 25
		 * Min length: 20
		 * Pattern: ^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$
		 */
		EffectiveStart?: string;
	}

	export interface UpdateCostCategoryDefinitionRequest {
		CostCategoryArn: string;

		/** The rule schema version in this particular Cost Category. */
		RuleVersion: UpdateCostCategoryDefinitionRequestRuleVersion;
		Rules: Array<CostCategoryRule>;
	}

	export enum UpdateCostCategoryDefinitionRequestRuleVersion { CostCategoryExpression_v1 = 0 }

	export enum AccountScope { PAYER = 0, LINKED = 1 }

	export enum Context { COST_AND_USAGE = 0, RESERVATIONS = 1, SAVINGS_PLANS = 2 }

	export enum Dimension { AZ = 0, INSTANCE_TYPE = 1, LINKED_ACCOUNT = 2, LINKED_ACCOUNT_NAME = 3, OPERATION = 4, PURCHASE_TYPE = 5, REGION = 6, SERVICE = 7, SERVICE_CODE = 8, USAGE_TYPE = 9, USAGE_TYPE_GROUP = 10, RECORD_TYPE = 11, OPERATING_SYSTEM = 12, TENANCY = 13, SCOPE = 14, PLATFORM = 15, SUBSCRIPTION_ID = 16, LEGAL_ENTITY_NAME = 17, DEPLOYMENT_OPTION = 18, DATABASE_ENGINE = 19, CACHE_ENGINE = 20, INSTANCE_TYPE_FAMILY = 21, BILLING_ENTITY = 22, RESERVATION_ID = 23, RESOURCE_ID = 24, RIGHTSIZING_TYPE = 25, SAVINGS_PLANS_TYPE = 26, SAVINGS_PLAN_ARN = 27, PAYMENT_OPTION = 28 }

	export enum OfferingClass { STANDARD = 0, CONVERTIBLE = 1 }

	export enum Granularity { DAILY = 0, MONTHLY = 1, HOURLY = 2 }

	export enum Metric { BLENDED_COST = 0, UNBLENDED_COST = 1, AMORTIZED_COST = 2, NET_UNBLENDED_COST = 3, NET_AMORTIZED_COST = 4, USAGE_QUANTITY = 5, NORMALIZED_USAGE_AMOUNT = 6 }

	export enum LookbackPeriodInDays { SEVEN_DAYS = 0, THIRTY_DAYS = 1, SIXTY_DAYS = 2 }

	export enum TermInYears { ONE_YEAR = 0, THREE_YEARS = 1 }

	export enum PaymentOption { NO_UPFRONT = 0, PARTIAL_UPFRONT = 1, ALL_UPFRONT = 2, LIGHT_UTILIZATION = 3, MEDIUM_UTILIZATION = 4, HEAVY_UTILIZATION = 5 }

	export enum SupportedSavingsPlansType { COMPUTE_SP = 0, EC2_INSTANCE_SP = 1 }

	export enum RecommendationTarget { SAME_INSTANCE_FAMILY = 0, CROSS_INSTANCE_FAMILY = 1 }

	export enum RightsizingType { TERMINATE = 0, MODIFY = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a new Cost Category with the requested name and rules.
		 * Post #X-Amz-Target=AWSInsightsIndexService.CreateCostCategoryDefinition
		 * @return {CreateCostCategoryDefinitionResponse} Success
		 */
		CreateCostCategoryDefinition(requestBody: CreateCostCategoryDefinitionRequest): Observable<CreateCostCategoryDefinitionResponse> {
			return this.http.post<CreateCostCategoryDefinitionResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.CreateCostCategoryDefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Cost Category. Expenses from this month going forward will no longer be categorized with this Cost Category.
		 * Post #X-Amz-Target=AWSInsightsIndexService.DeleteCostCategoryDefinition
		 * @return {DeleteCostCategoryDefinitionResponse} Success
		 */
		DeleteCostCategoryDefinition(requestBody: DeleteCostCategoryDefinitionRequest): Observable<DeleteCostCategoryDefinitionResponse> {
			return this.http.post<DeleteCostCategoryDefinitionResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.DeleteCostCategoryDefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the name, ARN, rules, definition, and effective dates of a Cost Category that's defined in the account.</p> <p>You have the option to use <code>EffectiveOn</code> to return a Cost Category that is active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see a Cost Category that is effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. </p>
		 * Post #X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition
		 * @return {DescribeCostCategoryDefinitionResponse} Success
		 */
		DescribeCostCategoryDefinition(requestBody: DescribeCostCategoryDefinitionRequest): Observable<DescribeCostCategoryDefinitionResponse> {
			return this.http.post<DescribeCostCategoryDefinitionResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric, such as <code>BlendedCosts</code> or <code>UsageQuantity</code>, that you want the request to return. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Master accounts in an organization in AWS Organizations have access to all member accounts.
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage
		 * @return {GetCostAndUsageResponse} Success
		 */
		GetCostAndUsage(requestBody: GetCostAndUsageRequest): Observable<GetCostAndUsageResponse> {
			return this.http.post<GetCostAndUsageResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves cost and usage metrics with resources for your account. You can specify which cost and usage-related metric, such as <code>BlendedCosts</code> or <code>UsageQuantity</code>, that you want the request to return. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Master accounts in an organization in AWS Organizations have access to all member accounts. This API is currently available for the Amazon Elastic Compute Cloud – Compute service only.</p> <note> <p>This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information on how to access the Settings page, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-access.html">Controlling Access for Cost Explorer</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p> </note>
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources
		 * @return {GetCostAndUsageWithResourcesResponse} Success
		 */
		GetCostAndUsageWithResources(requestBody: GetCostAndUsageWithResourcesRequest): Observable<GetCostAndUsageWithResourcesResponse> {
			return this.http.post<GetCostAndUsageWithResourcesResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs.
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetCostForecast
		 * @return {GetCostForecastResponse} Success
		 */
		GetCostForecast(requestBody: GetCostForecastRequest): Observable<GetCostForecastResponse> {
			return this.http.post<GetCostForecastResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetCostForecast', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string.
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetDimensionValues
		 * @return {GetDimensionValuesResponse} Success
		 */
		GetDimensionValues(requestBody: GetDimensionValuesRequest): Observable<GetDimensionValuesResponse> {
			return this.http.post<GetDimensionValuesResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetDimensionValues', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the reservation coverage for your account. This enables you to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's master account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data about reservation usage by the following dimensions:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>SERVICE</p> </li> <li> <p>TAG</p> </li> <li> <p>TENANCY</p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation. </p>
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage
		 * @return {GetReservationCoverageResponse} Success
		 */
		GetReservationCoverage(requestBody: GetReservationCoverageRequest): Observable<GetReservationCoverageResponse> {
			return this.http.post<GetReservationCoverageResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets recommendations for which reservations to purchase. These recommendations could help you reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing.</p> <p>AWS generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After AWS has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of RI to purchase to maximize your estimated savings. </p> <p>For example, AWS automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. AWS recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible RI. AWS also shows the equal number of normalized units so that you can purchase any instance size that you want. For this example, your RI recommendation would be for <code>c4.large</code> because that is the smallest size instance in the c4 instance family.</p>
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation
		 * @return {GetReservationPurchaseRecommendationResponse} Success
		 */
		GetReservationPurchaseRecommendation(requestBody: GetReservationPurchaseRecommendationRequest): Observable<GetReservationPurchaseRecommendationResponse> {
			return this.http.post<GetReservationPurchaseRecommendationResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the reservation utilization for your account. Master accounts in an organization have access to member accounts. You can filter data by dimensions in a time period. You can use <code>GetDimensionValues</code> to determine the possible dimension values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>.
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization
		 * @return {GetReservationUtilizationResponse} Success
		 */
		GetReservationUtilization(requestBody: GetReservationUtilizationRequest): Observable<GetReservationUtilizationResponse> {
			return this.http.post<GetReservationUtilizationResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates recommendations that helps you save cost by identifying idle and underutilized Amazon EC2 instances.</p> <p>Recommendations are generated to either downsize or terminate instances, along with providing savings detail and metrics. For details on calculation and function, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html">Optimizing Your Cost with Rightsizing Recommendations</a>.</p>
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation
		 * @return {GetRightsizingRecommendationResponse} Success
		 */
		GetRightsizingRecommendation(requestBody: GetRightsizingRecommendationRequest): Observable<GetRightsizingRecommendationResponse> {
			return this.http.post<GetRightsizingRecommendationResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization’s master account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data for Savings Plans usage with the following dimensions:</p> <ul> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>SERVICE</code> </p> </li> <li> <p> <code>INSTANCE_FAMILY</code> </p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation.</p>
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetSavingsPlansCoverageResponse} Success
		 */
		GetSavingsPlansCoverage(MaxResults: string, NextToken: string, requestBody: GetSavingsPlansCoverageRequest): Observable<GetSavingsPlansCoverageResponse> {
			return this.http.post<GetSavingsPlansCoverageResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves your request parameters, Savings Plan Recommendations Summary and Details.
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation
		 * @return {GetSavingsPlansPurchaseRecommendationResponse} Success
		 */
		GetSavingsPlansPurchaseRecommendation(requestBody: GetSavingsPlansPurchaseRecommendationRequest): Observable<GetSavingsPlansPurchaseRecommendationResponse> {
			return this.http.post<GetSavingsPlansPurchaseRecommendationResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Master accounts in an organization have access to member accounts. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p>You cannot group by any dimension values for <code>GetSavingsPlansUtilization</code>.</p> </note>
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilization
		 * @return {GetSavingsPlansUtilizationResponse} Success
		 */
		GetSavingsPlansUtilization(requestBody: GetSavingsPlansUtilizationRequest): Observable<GetSavingsPlansUtilizationResponse> {
			return this.http.post<GetSavingsPlansUtilizationResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves attribute data along with aggregate utilization and savings data for a given time period. This doesn't support granular or grouped data (daily/monthly) in response. You can't retrieve data by dates in a single response similar to <code>GetSavingsPlanUtilization</code>, but you have the option to make multiple calls to <code>GetSavingsPlanUtilizationDetails</code> by providing individual dates. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p> <code>GetSavingsPlanUtilizationDetails</code> internally groups data by <code>SavingsPlansArn</code>.</p> </note>
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilizationDetails
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetSavingsPlansUtilizationDetailsResponse} Success
		 */
		GetSavingsPlansUtilizationDetails(MaxResults: string, NextToken: string, requestBody: GetSavingsPlansUtilizationDetailsRequest): Observable<GetSavingsPlansUtilizationDetailsResponse> {
			return this.http.post<GetSavingsPlansUtilizationDetailsResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilizationDetails?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string.
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetTags
		 * @return {GetTagsResponse} Success
		 */
		GetTags(requestBody: GetTagsRequest): Observable<GetTagsResponse> {
			return this.http.post<GetTagsResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage.
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetUsageForecast
		 * @return {GetUsageForecastResponse} Success
		 */
		GetUsageForecast(requestBody: GetUsageForecastRequest): Observable<GetUsageForecastResponse> {
			return this.http.post<GetUsageForecastResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetUsageForecast', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the name, ARN, <code>NumberOfRules</code> and effective dates of all Cost Categories defined in the account. You have the option to use <code>EffectiveOn</code> to return a list of Cost Categories that were active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see Cost Categories that are effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. <code>ListCostCategoryDefinitions</code> supports pagination. The request can have a <code>MaxResults</code> range up to 100.
		 * Post #X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCostCategoryDefinitionsResponse} Success
		 */
		ListCostCategoryDefinitions(MaxResults: string, NextToken: string, requestBody: ListCostCategoryDefinitionsRequest): Observable<ListCostCategoryDefinitionsResponse> {
			return this.http.post<ListCostCategoryDefinitionsResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing Cost Category. Changes made to the Cost Category rules will be used to categorize the current month’s expenses and future expenses. This won’t change categorization for the previous months.
		 * Post #X-Amz-Target=AWSInsightsIndexService.UpdateCostCategoryDefinition
		 * @return {UpdateCostCategoryDefinitionResponse} Success
		 */
		UpdateCostCategoryDefinition(requestBody: UpdateCostCategoryDefinitionRequest): Observable<UpdateCostCategoryDefinitionResponse> {
			return this.http.post<UpdateCostCategoryDefinitionResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.UpdateCostCategoryDefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateCostCategoryDefinitionX_Amz_Target { AWSInsightsIndexService_CreateCostCategoryDefinition = 0 }

	export enum DeleteCostCategoryDefinitionX_Amz_Target { AWSInsightsIndexService_DeleteCostCategoryDefinition = 0 }

	export enum DescribeCostCategoryDefinitionX_Amz_Target { AWSInsightsIndexService_DescribeCostCategoryDefinition = 0 }

	export enum GetCostAndUsageX_Amz_Target { AWSInsightsIndexService_GetCostAndUsage = 0 }

	export enum GetCostAndUsageWithResourcesX_Amz_Target { AWSInsightsIndexService_GetCostAndUsageWithResources = 0 }

	export enum GetCostForecastX_Amz_Target { AWSInsightsIndexService_GetCostForecast = 0 }

	export enum GetDimensionValuesX_Amz_Target { AWSInsightsIndexService_GetDimensionValues = 0 }

	export enum GetReservationCoverageX_Amz_Target { AWSInsightsIndexService_GetReservationCoverage = 0 }

	export enum GetReservationPurchaseRecommendationX_Amz_Target { AWSInsightsIndexService_GetReservationPurchaseRecommendation = 0 }

	export enum GetReservationUtilizationX_Amz_Target { AWSInsightsIndexService_GetReservationUtilization = 0 }

	export enum GetRightsizingRecommendationX_Amz_Target { AWSInsightsIndexService_GetRightsizingRecommendation = 0 }

	export enum GetSavingsPlansCoverageX_Amz_Target { AWSInsightsIndexService_GetSavingsPlansCoverage = 0 }

	export enum GetSavingsPlansPurchaseRecommendationX_Amz_Target { AWSInsightsIndexService_GetSavingsPlansPurchaseRecommendation = 0 }

	export enum GetSavingsPlansUtilizationX_Amz_Target { AWSInsightsIndexService_GetSavingsPlansUtilization = 0 }

	export enum GetSavingsPlansUtilizationDetailsX_Amz_Target { AWSInsightsIndexService_GetSavingsPlansUtilizationDetails = 0 }

	export enum GetTagsX_Amz_Target { AWSInsightsIndexService_GetTags = 0 }

	export enum GetUsageForecastX_Amz_Target { AWSInsightsIndexService_GetUsageForecast = 0 }

	export enum ListCostCategoryDefinitionsX_Amz_Target { AWSInsightsIndexService_ListCostCategoryDefinitions = 0 }

	export enum UpdateCostCategoryDefinitionX_Amz_Target { AWSInsightsIndexService_UpdateCostCategoryDefinition = 0 }

}

