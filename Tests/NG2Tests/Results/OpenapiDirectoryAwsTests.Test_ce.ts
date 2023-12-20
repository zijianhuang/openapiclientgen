import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateCostCategoryDefinitionResponse {
		CostCategoryArn?: string | null;

		/**
		 * The time period that you want the usage and costs for.
		 * Max length: 25
		 * Min length: 20
		 * Pattern: ^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$
		 */
		EffectiveStart?: string | null;
	}
	export interface CreateCostCategoryDefinitionResponseFormProperties {
		CostCategoryArn: FormControl<string | null | undefined>,

		/**
		 * The time period that you want the usage and costs for.
		 * Max length: 25
		 * Min length: 20
		 * Pattern: ^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$
		 */
		EffectiveStart: FormControl<string | null | undefined>,
	}
	export function CreateCreateCostCategoryDefinitionResponseFormGroup() {
		return new FormGroup<CreateCostCategoryDefinitionResponseFormProperties>({
			CostCategoryArn: new FormControl<string | null | undefined>(undefined),
			EffectiveStart: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCostCategoryDefinitionRequest {

		/**
		 * The unique name of the Cost Category.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The rule schema version in this particular Cost Category.
		 * Required
		 */
		RuleVersion: CreateCostCategoryDefinitionRequestRuleVersion;
		Rules: Array<CostCategoryRule>;
	}
	export interface CreateCostCategoryDefinitionRequestFormProperties {

		/**
		 * The unique name of the Cost Category.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The rule schema version in this particular Cost Category.
		 * Required
		 */
		RuleVersion: FormControl<CreateCostCategoryDefinitionRequestRuleVersion | null | undefined>,
	}
	export function CreateCreateCostCategoryDefinitionRequestFormGroup() {
		return new FormGroup<CreateCostCategoryDefinitionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			RuleVersion: new FormControl<CreateCostCategoryDefinitionRequestRuleVersion | null | undefined>(undefined),
		});

	}

	export enum CreateCostCategoryDefinitionRequestRuleVersion { CostCategoryExpression_v1 = 0 }


	/** Rules are processed in order. If there are multiple rules that match the line item, then the first rule to match is used to determine that Cost Category value. */
	export interface CostCategoryRule {

		/**
		 * The value a line item will be categorized as, if it matches the rule.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Value: string;

		/**
		 * <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note>
		 * Required
		 */
		Rule: Expression;
	}

	/** Rules are processed in order. If there are multiple rules that match the line item, then the first rule to match is used to determine that Cost Category value. */
	export interface CostCategoryRuleFormProperties {

		/**
		 * The value a line item will be categorized as, if it matches the rule.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateCostCategoryRuleFormGroup() {
		return new FormGroup<CostCategoryRuleFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
		});

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

	/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
	export interface ExpressionFormProperties {
	}
	export function CreateExpressionFormGroup() {
		return new FormGroup<ExpressionFormProperties>({
		});

	}


	/** The metadata that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values. */
	export interface DimensionValues {
		Key?: DimensionValuesKey | null;
		Values?: Array<string>;
		MatchOptions?: Array<MatchOption>;
	}

	/** The metadata that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values. */
	export interface DimensionValuesFormProperties {
		Key: FormControl<DimensionValuesKey | null | undefined>,
	}
	export function CreateDimensionValuesFormGroup() {
		return new FormGroup<DimensionValuesFormProperties>({
			Key: new FormControl<DimensionValuesKey | null | undefined>(undefined),
		});

	}

	export enum DimensionValuesKey { AZ = 0, INSTANCE_TYPE = 1, LINKED_ACCOUNT = 2, LINKED_ACCOUNT_NAME = 3, OPERATION = 4, PURCHASE_TYPE = 5, REGION = 6, SERVICE = 7, SERVICE_CODE = 8, USAGE_TYPE = 9, USAGE_TYPE_GROUP = 10, RECORD_TYPE = 11, OPERATING_SYSTEM = 12, TENANCY = 13, SCOPE = 14, PLATFORM = 15, SUBSCRIPTION_ID = 16, LEGAL_ENTITY_NAME = 17, DEPLOYMENT_OPTION = 18, DATABASE_ENGINE = 19, CACHE_ENGINE = 20, INSTANCE_TYPE_FAMILY = 21, BILLING_ENTITY = 22, RESERVATION_ID = 23, RESOURCE_ID = 24, RIGHTSIZING_TYPE = 25, SAVINGS_PLANS_TYPE = 26, SAVINGS_PLAN_ARN = 27, PAYMENT_OPTION = 28 }

	export enum MatchOption { EQUALS = 0, STARTS_WITH = 1, ENDS_WITH = 2, CONTAINS = 3, CASE_SENSITIVE = 4, CASE_INSENSITIVE = 5 }


	/** The values that are available for a tag. */
	export interface TagValues {
		Key?: string | null;
		Values?: Array<string>;
		MatchOptions?: Array<MatchOption>;
	}

	/** The values that are available for a tag. */
	export interface TagValuesFormProperties {
		Key: FormControl<string | null | undefined>,
	}
	export function CreateTagValuesFormGroup() {
		return new FormGroup<TagValuesFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Cost Categories values used for filtering the costs. */
	export interface CostCategoryValues {

		/**
		 * The unique name of the Cost Category.
		 * Max length: 255
		 * Min length: 1
		 */
		Key?: string | null;
		Values?: Array<string>;
	}

	/** The Cost Categories values used for filtering the costs. */
	export interface CostCategoryValuesFormProperties {

		/**
		 * The unique name of the Cost Category.
		 * Max length: 255
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateCostCategoryValuesFormGroup() {
		return new FormGroup<CostCategoryValuesFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface DeleteCostCategoryDefinitionResponse {
		CostCategoryArn?: string | null;

		/**
		 * The time period that you want the usage and costs for.
		 * Max length: 25
		 * Min length: 20
		 * Pattern: ^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$
		 */
		EffectiveEnd?: string | null;
	}
	export interface DeleteCostCategoryDefinitionResponseFormProperties {
		CostCategoryArn: FormControl<string | null | undefined>,

		/**
		 * The time period that you want the usage and costs for.
		 * Max length: 25
		 * Min length: 20
		 * Pattern: ^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$
		 */
		EffectiveEnd: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCostCategoryDefinitionResponseFormGroup() {
		return new FormGroup<DeleteCostCategoryDefinitionResponseFormProperties>({
			CostCategoryArn: new FormControl<string | null | undefined>(undefined),
			EffectiveEnd: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteCostCategoryDefinitionRequest {
		CostCategoryArn: string;
	}
	export interface DeleteCostCategoryDefinitionRequestFormProperties {
		CostCategoryArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCostCategoryDefinitionRequestFormGroup() {
		return new FormGroup<DeleteCostCategoryDefinitionRequestFormProperties>({
			CostCategoryArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface DescribeCostCategoryDefinitionResponse {

		/** The structure of Cost Categories. This includes detailed metadata and the set of rules for the <code>CostCategory</code> object. */
		CostCategory?: CostCategory;
	}
	export interface DescribeCostCategoryDefinitionResponseFormProperties {
	}
	export function CreateDescribeCostCategoryDefinitionResponseFormGroup() {
		return new FormGroup<DescribeCostCategoryDefinitionResponseFormProperties>({
		});

	}


	/** The structure of Cost Categories. This includes detailed metadata and the set of rules for the <code>CostCategory</code> object. */
	export interface CostCategory {
		CostCategoryArn: string;

		/**
		 * The time period that you want the usage and costs for.
		 * Required
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
		EffectiveEnd?: string | null;

		/**
		 * The unique name of the Cost Category.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The rule schema version in this particular Cost Category.
		 * Required
		 */
		RuleVersion: CostCategoryRuleVersion;
		Rules: Array<CostCategoryRule>;
	}

	/** The structure of Cost Categories. This includes detailed metadata and the set of rules for the <code>CostCategory</code> object. */
	export interface CostCategoryFormProperties {
		CostCategoryArn: FormControl<string | null | undefined>,

		/**
		 * The time period that you want the usage and costs for.
		 * Required
		 * Max length: 25
		 * Min length: 20
		 * Pattern: ^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$
		 */
		EffectiveStart: FormControl<string | null | undefined>,

		/**
		 * The time period that you want the usage and costs for.
		 * Max length: 25
		 * Min length: 20
		 * Pattern: ^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$
		 */
		EffectiveEnd: FormControl<string | null | undefined>,

		/**
		 * The unique name of the Cost Category.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The rule schema version in this particular Cost Category.
		 * Required
		 */
		RuleVersion: FormControl<CostCategoryRuleVersion | null | undefined>,
	}
	export function CreateCostCategoryFormGroup() {
		return new FormGroup<CostCategoryFormProperties>({
			CostCategoryArn: new FormControl<string | null | undefined>(undefined),
			EffectiveStart: new FormControl<string | null | undefined>(undefined),
			EffectiveEnd: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RuleVersion: new FormControl<CostCategoryRuleVersion | null | undefined>(undefined),
		});

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
		EffectiveOn?: string | null;
	}
	export interface DescribeCostCategoryDefinitionRequestFormProperties {
		CostCategoryArn: FormControl<string | null | undefined>,

		/**
		 * The time period that you want the usage and costs for.
		 * Max length: 25
		 * Min length: 20
		 * Pattern: ^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$
		 */
		EffectiveOn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCostCategoryDefinitionRequestFormGroup() {
		return new FormGroup<DescribeCostCategoryDefinitionRequestFormProperties>({
			CostCategoryArn: new FormControl<string | null | undefined>(undefined),
			EffectiveOn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCostAndUsageResponse {
		NextPageToken?: string | null;
		GroupDefinitions?: Array<GroupDefinition>;
		ResultsByTime?: Array<ResultByTime>;
	}
	export interface GetCostAndUsageResponseFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCostAndUsageResponseFormGroup() {
		return new FormGroup<GetCostAndUsageResponseFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a group when you specify a group by criteria or in the response to a query with a specific grouping. */
	export interface GroupDefinition {
		Type?: GroupDefinitionType | null;
		Key?: string | null;
	}

	/** Represents a group when you specify a group by criteria or in the response to a query with a specific grouping. */
	export interface GroupDefinitionFormProperties {
		Type: FormControl<GroupDefinitionType | null | undefined>,
		Key: FormControl<string | null | undefined>,
	}
	export function CreateGroupDefinitionFormGroup() {
		return new FormGroup<GroupDefinitionFormProperties>({
			Type: new FormControl<GroupDefinitionType | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GroupDefinitionType { DIMENSION = 0, TAG = 1, COST_CATEGORY = 2 }


	/** The result that is associated with a time period. */
	export interface ResultByTime {

		/** The time period that you want the usage and costs for. */
		TimePeriod?: DateInterval;
		Total?: Metrics;
		Groups?: Array<Group>;
		Estimated?: boolean | null;
	}

	/** The result that is associated with a time period. */
	export interface ResultByTimeFormProperties {
		Estimated: FormControl<boolean | null | undefined>,
	}
	export function CreateResultByTimeFormGroup() {
		return new FormGroup<ResultByTimeFormProperties>({
			Estimated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The time period that you want the usage and costs for.  */
	export interface DateInterval {
		Start: string;
		End: string;
	}

	/** The time period that you want the usage and costs for.  */
	export interface DateIntervalFormProperties {
		Start: FormControl<string | null | undefined>,
		End: FormControl<string | null | undefined>,
	}
	export function CreateDateIntervalFormGroup() {
		return new FormGroup<DateIntervalFormProperties>({
			Start: new FormControl<string | null | undefined>(undefined),
			End: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Metrics {
	}
	export interface MetricsFormProperties {
	}
	export function CreateMetricsFormGroup() {
		return new FormGroup<MetricsFormProperties>({
		});

	}


	/** One level of grouped data in the results. */
	export interface Group {
		Keys?: Array<string>;
		Metrics?: Metrics;
	}

	/** One level of grouped data in the results. */
	export interface GroupFormProperties {
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
		});

	}

	export interface GetCostAndUsageRequest {

		/**
		 * The time period that you want the usage and costs for.
		 * Required
		 */
		TimePeriod: DateInterval;
		Granularity?: GetCostAndUsageRequestGranularity | null;

		/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
		Filter?: Expression;
		Metrics?: Array<string>;
		GroupBy?: Array<GroupDefinition>;
		NextPageToken?: string | null;
	}
	export interface GetCostAndUsageRequestFormProperties {
		Granularity: FormControl<GetCostAndUsageRequestGranularity | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCostAndUsageRequestFormGroup() {
		return new FormGroup<GetCostAndUsageRequestFormProperties>({
			Granularity: new FormControl<GetCostAndUsageRequestGranularity | null | undefined>(undefined),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetCostAndUsageRequestGranularity { DAILY = 0, MONTHLY = 1, HOURLY = 2 }

	export interface BillExpirationException {
	}
	export interface BillExpirationExceptionFormProperties {
	}
	export function CreateBillExpirationExceptionFormGroup() {
		return new FormGroup<BillExpirationExceptionFormProperties>({
		});

	}

	export interface DataUnavailableException {
	}
	export interface DataUnavailableExceptionFormProperties {
	}
	export function CreateDataUnavailableExceptionFormGroup() {
		return new FormGroup<DataUnavailableExceptionFormProperties>({
		});

	}

	export interface InvalidNextTokenException {
	}
	export interface InvalidNextTokenExceptionFormProperties {
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
		});

	}

	export interface RequestChangedException {
	}
	export interface RequestChangedExceptionFormProperties {
	}
	export function CreateRequestChangedExceptionFormGroup() {
		return new FormGroup<RequestChangedExceptionFormProperties>({
		});

	}

	export interface GetCostAndUsageWithResourcesResponse {
		NextPageToken?: string | null;
		GroupDefinitions?: Array<GroupDefinition>;
		ResultsByTime?: Array<ResultByTime>;
	}
	export interface GetCostAndUsageWithResourcesResponseFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCostAndUsageWithResourcesResponseFormGroup() {
		return new FormGroup<GetCostAndUsageWithResourcesResponseFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCostAndUsageWithResourcesRequest {

		/**
		 * The time period that you want the usage and costs for.
		 * Required
		 */
		TimePeriod: DateInterval;
		Granularity?: GetCostAndUsageRequestGranularity | null;

		/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
		Filter?: Expression;
		Metrics?: Array<string>;
		GroupBy?: Array<GroupDefinition>;
		NextPageToken?: string | null;
	}
	export interface GetCostAndUsageWithResourcesRequestFormProperties {
		Granularity: FormControl<GetCostAndUsageRequestGranularity | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCostAndUsageWithResourcesRequestFormGroup() {
		return new FormGroup<GetCostAndUsageWithResourcesRequestFormProperties>({
			Granularity: new FormControl<GetCostAndUsageRequestGranularity | null | undefined>(undefined),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCostForecastResponse {

		/** The aggregated value for a metric. */
		Total?: MetricValue;
		ForecastResultsByTime?: Array<ForecastResult>;
	}
	export interface GetCostForecastResponseFormProperties {
	}
	export function CreateGetCostForecastResponseFormGroup() {
		return new FormGroup<GetCostForecastResponseFormProperties>({
		});

	}


	/** The aggregated value for a metric. */
	export interface MetricValue {
		Amount?: string | null;
		Unit?: string | null;
	}

	/** The aggregated value for a metric. */
	export interface MetricValueFormProperties {
		Amount: FormControl<string | null | undefined>,
		Unit: FormControl<string | null | undefined>,
	}
	export function CreateMetricValueFormGroup() {
		return new FormGroup<MetricValueFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined),
			Unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The forecast created for your query. */
	export interface ForecastResult {

		/** The time period that you want the usage and costs for. */
		TimePeriod?: DateInterval;
		MeanValue?: string | null;
		PredictionIntervalLowerBound?: string | null;
		PredictionIntervalUpperBound?: string | null;
	}

	/** The forecast created for your query. */
	export interface ForecastResultFormProperties {
		MeanValue: FormControl<string | null | undefined>,
		PredictionIntervalLowerBound: FormControl<string | null | undefined>,
		PredictionIntervalUpperBound: FormControl<string | null | undefined>,
	}
	export function CreateForecastResultFormGroup() {
		return new FormGroup<ForecastResultFormProperties>({
			MeanValue: new FormControl<string | null | undefined>(undefined),
			PredictionIntervalLowerBound: new FormControl<string | null | undefined>(undefined),
			PredictionIntervalUpperBound: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCostForecastRequest {

		/**
		 * The time period that you want the usage and costs for.
		 * Required
		 */
		TimePeriod: DateInterval;
		Metric: GetCostForecastRequestMetric;
		Granularity: GetCostAndUsageRequestGranularity;

		/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
		Filter?: Expression;
		PredictionIntervalLevel?: number | null;
	}
	export interface GetCostForecastRequestFormProperties {
		Metric: FormControl<GetCostForecastRequestMetric | null | undefined>,
		Granularity: FormControl<GetCostAndUsageRequestGranularity | null | undefined>,
		PredictionIntervalLevel: FormControl<number | null | undefined>,
	}
	export function CreateGetCostForecastRequestFormGroup() {
		return new FormGroup<GetCostForecastRequestFormProperties>({
			Metric: new FormControl<GetCostForecastRequestMetric | null | undefined>(undefined),
			Granularity: new FormControl<GetCostAndUsageRequestGranularity | null | undefined>(undefined),
			PredictionIntervalLevel: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GetCostForecastRequestMetric { BLENDED_COST = 0, UNBLENDED_COST = 1, AMORTIZED_COST = 2, NET_UNBLENDED_COST = 3, NET_AMORTIZED_COST = 4, USAGE_QUANTITY = 5, NORMALIZED_USAGE_AMOUNT = 6 }

	export interface GetDimensionValuesResponse {
		DimensionValues: Array<DimensionValuesWithAttributes>;
		ReturnSize: number;
		TotalSize: number;
		NextPageToken?: string | null;
	}
	export interface GetDimensionValuesResponseFormProperties {
		ReturnSize: FormControl<number | null | undefined>,
		TotalSize: FormControl<number | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDimensionValuesResponseFormGroup() {
		return new FormGroup<GetDimensionValuesResponseFormProperties>({
			ReturnSize: new FormControl<number | null | undefined>(undefined),
			TotalSize: new FormControl<number | null | undefined>(undefined),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata of a specific type that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values. */
	export interface DimensionValuesWithAttributes {
		Value?: string | null;
		Attributes?: Attributes;
	}

	/** The metadata of a specific type that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values. */
	export interface DimensionValuesWithAttributesFormProperties {
		Value: FormControl<string | null | undefined>,
	}
	export function CreateDimensionValuesWithAttributesFormGroup() {
		return new FormGroup<DimensionValuesWithAttributesFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Attributes {
	}
	export interface AttributesFormProperties {
	}
	export function CreateAttributesFormGroup() {
		return new FormGroup<AttributesFormProperties>({
		});

	}

	export interface GetDimensionValuesRequest {
		SearchString?: string | null;

		/**
		 * The time period that you want the usage and costs for.
		 * Required
		 */
		TimePeriod: DateInterval;
		Dimension: DimensionValuesKey;
		Context?: GetDimensionValuesRequestContext | null;
		NextPageToken?: string | null;
	}
	export interface GetDimensionValuesRequestFormProperties {
		SearchString: FormControl<string | null | undefined>,
		Dimension: FormControl<DimensionValuesKey | null | undefined>,
		Context: FormControl<GetDimensionValuesRequestContext | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDimensionValuesRequestFormGroup() {
		return new FormGroup<GetDimensionValuesRequestFormProperties>({
			SearchString: new FormControl<string | null | undefined>(undefined),
			Dimension: new FormControl<DimensionValuesKey | null | undefined>(undefined),
			Context: new FormControl<GetDimensionValuesRequestContext | null | undefined>(undefined),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetDimensionValuesRequestContext { COST_AND_USAGE = 0, RESERVATIONS = 1, SAVINGS_PLANS = 2 }

	export interface GetReservationCoverageResponse {
		CoveragesByTime: Array<CoverageByTime>;

		/** The amount of instance usage that a reservation covered. */
		Total?: Coverage;
		NextPageToken?: string | null;
	}
	export interface GetReservationCoverageResponseFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetReservationCoverageResponseFormGroup() {
		return new FormGroup<GetReservationCoverageResponseFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reservation coverage for a specified period, in hours. */
	export interface CoverageByTime {

		/** The time period that you want the usage and costs for. */
		TimePeriod?: DateInterval;
		Groups?: Array<ReservationCoverageGroup>;

		/** The amount of instance usage that a reservation covered. */
		Total?: Coverage;
	}

	/** Reservation coverage for a specified period, in hours. */
	export interface CoverageByTimeFormProperties {
	}
	export function CreateCoverageByTimeFormGroup() {
		return new FormGroup<CoverageByTimeFormProperties>({
		});

	}


	/** A group of reservations that share a set of attributes. */
	export interface ReservationCoverageGroup {
		Attributes?: Attributes;

		/** The amount of instance usage that a reservation covered. */
		Coverage?: Coverage;
	}

	/** A group of reservations that share a set of attributes. */
	export interface ReservationCoverageGroupFormProperties {
	}
	export function CreateReservationCoverageGroupFormGroup() {
		return new FormGroup<ReservationCoverageGroupFormProperties>({
		});

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

	/** The amount of instance usage that a reservation covered. */
	export interface CoverageFormProperties {
	}
	export function CreateCoverageFormGroup() {
		return new FormGroup<CoverageFormProperties>({
		});

	}


	/** How long a running instance either used a reservation or was On-Demand. */
	export interface CoverageHours {
		OnDemandHours?: string | null;
		ReservedHours?: string | null;
		TotalRunningHours?: string | null;
		CoverageHoursPercentage?: string | null;
	}

	/** How long a running instance either used a reservation or was On-Demand. */
	export interface CoverageHoursFormProperties {
		OnDemandHours: FormControl<string | null | undefined>,
		ReservedHours: FormControl<string | null | undefined>,
		TotalRunningHours: FormControl<string | null | undefined>,
		CoverageHoursPercentage: FormControl<string | null | undefined>,
	}
	export function CreateCoverageHoursFormGroup() {
		return new FormGroup<CoverageHoursFormProperties>({
			OnDemandHours: new FormControl<string | null | undefined>(undefined),
			ReservedHours: new FormControl<string | null | undefined>(undefined),
			TotalRunningHours: new FormControl<string | null | undefined>(undefined),
			CoverageHoursPercentage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The amount of instance usage, in normalized units. Normalized units enable you to see your EC2 usage for multiple sizes of instances in a uniform way. For example, suppose you run an xlarge instance and a 2xlarge instance. If you run both instances for the same amount of time, the 2xlarge instance uses twice as much of your reservation as the xlarge instance, even though both instances show only one instance-hour. Using normalized units instead of instance-hours, the xlarge instance used 8 normalized units, and the 2xlarge instance used 16 normalized units.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html">Modifying Reserved Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide for Linux Instances</i>.</p> */
	export interface CoverageNormalizedUnits {
		OnDemandNormalizedUnits?: string | null;
		ReservedNormalizedUnits?: string | null;
		TotalRunningNormalizedUnits?: string | null;
		CoverageNormalizedUnitsPercentage?: string | null;
	}

	/** <p>The amount of instance usage, in normalized units. Normalized units enable you to see your EC2 usage for multiple sizes of instances in a uniform way. For example, suppose you run an xlarge instance and a 2xlarge instance. If you run both instances for the same amount of time, the 2xlarge instance uses twice as much of your reservation as the xlarge instance, even though both instances show only one instance-hour. Using normalized units instead of instance-hours, the xlarge instance used 8 normalized units, and the 2xlarge instance used 16 normalized units.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html">Modifying Reserved Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide for Linux Instances</i>.</p> */
	export interface CoverageNormalizedUnitsFormProperties {
		OnDemandNormalizedUnits: FormControl<string | null | undefined>,
		ReservedNormalizedUnits: FormControl<string | null | undefined>,
		TotalRunningNormalizedUnits: FormControl<string | null | undefined>,
		CoverageNormalizedUnitsPercentage: FormControl<string | null | undefined>,
	}
	export function CreateCoverageNormalizedUnitsFormGroup() {
		return new FormGroup<CoverageNormalizedUnitsFormProperties>({
			OnDemandNormalizedUnits: new FormControl<string | null | undefined>(undefined),
			ReservedNormalizedUnits: new FormControl<string | null | undefined>(undefined),
			TotalRunningNormalizedUnits: new FormControl<string | null | undefined>(undefined),
			CoverageNormalizedUnitsPercentage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** How much it costs to run an instance. */
	export interface CoverageCost {
		OnDemandCost?: string | null;
	}

	/** How much it costs to run an instance. */
	export interface CoverageCostFormProperties {
		OnDemandCost: FormControl<string | null | undefined>,
	}
	export function CreateCoverageCostFormGroup() {
		return new FormGroup<CoverageCostFormProperties>({
			OnDemandCost: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** You can use the following request parameters to query for how much of your instance usage a reservation covered. */
	export interface GetReservationCoverageRequest {

		/**
		 * The time period that you want the usage and costs for.
		 * Required
		 */
		TimePeriod: DateInterval;
		GroupBy?: Array<GroupDefinition>;
		Granularity?: GetCostAndUsageRequestGranularity | null;

		/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
		Filter?: Expression;
		Metrics?: Array<string>;
		NextPageToken?: string | null;
	}

	/** You can use the following request parameters to query for how much of your instance usage a reservation covered. */
	export interface GetReservationCoverageRequestFormProperties {
		Granularity: FormControl<GetCostAndUsageRequestGranularity | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetReservationCoverageRequestFormGroup() {
		return new FormGroup<GetReservationCoverageRequestFormProperties>({
			Granularity: new FormControl<GetCostAndUsageRequestGranularity | null | undefined>(undefined),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetReservationPurchaseRecommendationResponse {

		/** Information about this specific recommendation, such as the timestamp for when AWS made a specific recommendation. */
		Metadata?: ReservationPurchaseRecommendationMetadata;
		Recommendations?: Array<ReservationPurchaseRecommendation>;
		NextPageToken?: string | null;
	}
	export interface GetReservationPurchaseRecommendationResponseFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetReservationPurchaseRecommendationResponseFormGroup() {
		return new FormGroup<GetReservationPurchaseRecommendationResponseFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about this specific recommendation, such as the timestamp for when AWS made a specific recommendation. */
	export interface ReservationPurchaseRecommendationMetadata {
		RecommendationId?: string | null;
		GenerationTimestamp?: string | null;
	}

	/** Information about this specific recommendation, such as the timestamp for when AWS made a specific recommendation. */
	export interface ReservationPurchaseRecommendationMetadataFormProperties {
		RecommendationId: FormControl<string | null | undefined>,
		GenerationTimestamp: FormControl<string | null | undefined>,
	}
	export function CreateReservationPurchaseRecommendationMetadataFormGroup() {
		return new FormGroup<ReservationPurchaseRecommendationMetadataFormProperties>({
			RecommendationId: new FormControl<string | null | undefined>(undefined),
			GenerationTimestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A specific reservation that AWS recommends for purchase. */
	export interface ReservationPurchaseRecommendation {
		AccountScope?: ReservationPurchaseRecommendationAccountScope | null;
		LookbackPeriodInDays?: ReservationPurchaseRecommendationLookbackPeriodInDays | null;
		TermInYears?: ReservationPurchaseRecommendationTermInYears | null;
		PaymentOption?: ReservationPurchaseRecommendationPaymentOption | null;

		/** Hardware specifications for the service that you want recommendations for. */
		ServiceSpecification?: ServiceSpecification;
		RecommendationDetails?: Array<ReservationPurchaseRecommendationDetail>;

		/** A summary about this recommendation, such as the currency code, the amount that AWS estimates that you could save, and the total amount of reservation to purchase. */
		RecommendationSummary?: ReservationPurchaseRecommendationSummary;
	}

	/** A specific reservation that AWS recommends for purchase. */
	export interface ReservationPurchaseRecommendationFormProperties {
		AccountScope: FormControl<ReservationPurchaseRecommendationAccountScope | null | undefined>,
		LookbackPeriodInDays: FormControl<ReservationPurchaseRecommendationLookbackPeriodInDays | null | undefined>,
		TermInYears: FormControl<ReservationPurchaseRecommendationTermInYears | null | undefined>,
		PaymentOption: FormControl<ReservationPurchaseRecommendationPaymentOption | null | undefined>,
	}
	export function CreateReservationPurchaseRecommendationFormGroup() {
		return new FormGroup<ReservationPurchaseRecommendationFormProperties>({
			AccountScope: new FormControl<ReservationPurchaseRecommendationAccountScope | null | undefined>(undefined),
			LookbackPeriodInDays: new FormControl<ReservationPurchaseRecommendationLookbackPeriodInDays | null | undefined>(undefined),
			TermInYears: new FormControl<ReservationPurchaseRecommendationTermInYears | null | undefined>(undefined),
			PaymentOption: new FormControl<ReservationPurchaseRecommendationPaymentOption | null | undefined>(undefined),
		});

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

	/** Hardware specifications for the service that you want recommendations for. */
	export interface ServiceSpecificationFormProperties {
	}
	export function CreateServiceSpecificationFormGroup() {
		return new FormGroup<ServiceSpecificationFormProperties>({
		});

	}


	/** The Amazon EC2 hardware specifications that you want AWS to provide recommendations for. */
	export interface EC2Specification {
		OfferingClass?: EC2SpecificationOfferingClass | null;
	}

	/** The Amazon EC2 hardware specifications that you want AWS to provide recommendations for. */
	export interface EC2SpecificationFormProperties {
		OfferingClass: FormControl<EC2SpecificationOfferingClass | null | undefined>,
	}
	export function CreateEC2SpecificationFormGroup() {
		return new FormGroup<EC2SpecificationFormProperties>({
			OfferingClass: new FormControl<EC2SpecificationOfferingClass | null | undefined>(undefined),
		});

	}

	export enum EC2SpecificationOfferingClass { STANDARD = 0, CONVERTIBLE = 1 }


	/** Details about your recommended reservation purchase. */
	export interface ReservationPurchaseRecommendationDetail {
		AccountId?: string | null;

		/** Details about the instances that AWS recommends that you purchase. */
		InstanceDetails?: InstanceDetails;
		RecommendedNumberOfInstancesToPurchase?: string | null;
		RecommendedNormalizedUnitsToPurchase?: string | null;
		MinimumNumberOfInstancesUsedPerHour?: string | null;
		MinimumNormalizedUnitsUsedPerHour?: string | null;
		MaximumNumberOfInstancesUsedPerHour?: string | null;
		MaximumNormalizedUnitsUsedPerHour?: string | null;
		AverageNumberOfInstancesUsedPerHour?: string | null;
		AverageNormalizedUnitsUsedPerHour?: string | null;
		AverageUtilization?: string | null;
		EstimatedBreakEvenInMonths?: string | null;
		CurrencyCode?: string | null;
		EstimatedMonthlySavingsAmount?: string | null;
		EstimatedMonthlySavingsPercentage?: string | null;
		EstimatedMonthlyOnDemandCost?: string | null;
		EstimatedReservationCostForLookbackPeriod?: string | null;
		UpfrontCost?: string | null;
		RecurringStandardMonthlyCost?: string | null;
	}

	/** Details about your recommended reservation purchase. */
	export interface ReservationPurchaseRecommendationDetailFormProperties {
		AccountId: FormControl<string | null | undefined>,
		RecommendedNumberOfInstancesToPurchase: FormControl<string | null | undefined>,
		RecommendedNormalizedUnitsToPurchase: FormControl<string | null | undefined>,
		MinimumNumberOfInstancesUsedPerHour: FormControl<string | null | undefined>,
		MinimumNormalizedUnitsUsedPerHour: FormControl<string | null | undefined>,
		MaximumNumberOfInstancesUsedPerHour: FormControl<string | null | undefined>,
		MaximumNormalizedUnitsUsedPerHour: FormControl<string | null | undefined>,
		AverageNumberOfInstancesUsedPerHour: FormControl<string | null | undefined>,
		AverageNormalizedUnitsUsedPerHour: FormControl<string | null | undefined>,
		AverageUtilization: FormControl<string | null | undefined>,
		EstimatedBreakEvenInMonths: FormControl<string | null | undefined>,
		CurrencyCode: FormControl<string | null | undefined>,
		EstimatedMonthlySavingsAmount: FormControl<string | null | undefined>,
		EstimatedMonthlySavingsPercentage: FormControl<string | null | undefined>,
		EstimatedMonthlyOnDemandCost: FormControl<string | null | undefined>,
		EstimatedReservationCostForLookbackPeriod: FormControl<string | null | undefined>,
		UpfrontCost: FormControl<string | null | undefined>,
		RecurringStandardMonthlyCost: FormControl<string | null | undefined>,
	}
	export function CreateReservationPurchaseRecommendationDetailFormGroup() {
		return new FormGroup<ReservationPurchaseRecommendationDetailFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			RecommendedNumberOfInstancesToPurchase: new FormControl<string | null | undefined>(undefined),
			RecommendedNormalizedUnitsToPurchase: new FormControl<string | null | undefined>(undefined),
			MinimumNumberOfInstancesUsedPerHour: new FormControl<string | null | undefined>(undefined),
			MinimumNormalizedUnitsUsedPerHour: new FormControl<string | null | undefined>(undefined),
			MaximumNumberOfInstancesUsedPerHour: new FormControl<string | null | undefined>(undefined),
			MaximumNormalizedUnitsUsedPerHour: new FormControl<string | null | undefined>(undefined),
			AverageNumberOfInstancesUsedPerHour: new FormControl<string | null | undefined>(undefined),
			AverageNormalizedUnitsUsedPerHour: new FormControl<string | null | undefined>(undefined),
			AverageUtilization: new FormControl<string | null | undefined>(undefined),
			EstimatedBreakEvenInMonths: new FormControl<string | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			EstimatedMonthlySavingsAmount: new FormControl<string | null | undefined>(undefined),
			EstimatedMonthlySavingsPercentage: new FormControl<string | null | undefined>(undefined),
			EstimatedMonthlyOnDemandCost: new FormControl<string | null | undefined>(undefined),
			EstimatedReservationCostForLookbackPeriod: new FormControl<string | null | undefined>(undefined),
			UpfrontCost: new FormControl<string | null | undefined>(undefined),
			RecurringStandardMonthlyCost: new FormControl<string | null | undefined>(undefined),
		});

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

	/** Details about the instances that AWS recommends that you purchase. */
	export interface InstanceDetailsFormProperties {
	}
	export function CreateInstanceDetailsFormGroup() {
		return new FormGroup<InstanceDetailsFormProperties>({
		});

	}


	/** Details about the Amazon EC2 instances that AWS recommends that you purchase. */
	export interface EC2InstanceDetails {
		Family?: string | null;
		InstanceType?: string | null;
		Region?: string | null;
		AvailabilityZone?: string | null;
		Platform?: string | null;
		Tenancy?: string | null;
		CurrentGeneration?: boolean | null;
		SizeFlexEligible?: boolean | null;
	}

	/** Details about the Amazon EC2 instances that AWS recommends that you purchase. */
	export interface EC2InstanceDetailsFormProperties {
		Family: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		Platform: FormControl<string | null | undefined>,
		Tenancy: FormControl<string | null | undefined>,
		CurrentGeneration: FormControl<boolean | null | undefined>,
		SizeFlexEligible: FormControl<boolean | null | undefined>,
	}
	export function CreateEC2InstanceDetailsFormGroup() {
		return new FormGroup<EC2InstanceDetailsFormProperties>({
			Family: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			Platform: new FormControl<string | null | undefined>(undefined),
			Tenancy: new FormControl<string | null | undefined>(undefined),
			CurrentGeneration: new FormControl<boolean | null | undefined>(undefined),
			SizeFlexEligible: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Details about the Amazon RDS instances that AWS recommends that you purchase. */
	export interface RDSInstanceDetails {
		Family?: string | null;
		InstanceType?: string | null;
		Region?: string | null;
		DatabaseEngine?: string | null;
		DatabaseEdition?: string | null;
		DeploymentOption?: string | null;
		LicenseModel?: string | null;
		CurrentGeneration?: boolean | null;
		SizeFlexEligible?: boolean | null;
	}

	/** Details about the Amazon RDS instances that AWS recommends that you purchase. */
	export interface RDSInstanceDetailsFormProperties {
		Family: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		DatabaseEngine: FormControl<string | null | undefined>,
		DatabaseEdition: FormControl<string | null | undefined>,
		DeploymentOption: FormControl<string | null | undefined>,
		LicenseModel: FormControl<string | null | undefined>,
		CurrentGeneration: FormControl<boolean | null | undefined>,
		SizeFlexEligible: FormControl<boolean | null | undefined>,
	}
	export function CreateRDSInstanceDetailsFormGroup() {
		return new FormGroup<RDSInstanceDetailsFormProperties>({
			Family: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			DatabaseEngine: new FormControl<string | null | undefined>(undefined),
			DatabaseEdition: new FormControl<string | null | undefined>(undefined),
			DeploymentOption: new FormControl<string | null | undefined>(undefined),
			LicenseModel: new FormControl<string | null | undefined>(undefined),
			CurrentGeneration: new FormControl<boolean | null | undefined>(undefined),
			SizeFlexEligible: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Details about the Amazon Redshift instances that AWS recommends that you purchase. */
	export interface RedshiftInstanceDetails {
		Family?: string | null;
		NodeType?: string | null;
		Region?: string | null;
		CurrentGeneration?: boolean | null;
		SizeFlexEligible?: boolean | null;
	}

	/** Details about the Amazon Redshift instances that AWS recommends that you purchase. */
	export interface RedshiftInstanceDetailsFormProperties {
		Family: FormControl<string | null | undefined>,
		NodeType: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		CurrentGeneration: FormControl<boolean | null | undefined>,
		SizeFlexEligible: FormControl<boolean | null | undefined>,
	}
	export function CreateRedshiftInstanceDetailsFormGroup() {
		return new FormGroup<RedshiftInstanceDetailsFormProperties>({
			Family: new FormControl<string | null | undefined>(undefined),
			NodeType: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			CurrentGeneration: new FormControl<boolean | null | undefined>(undefined),
			SizeFlexEligible: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Details about the Amazon ElastiCache instances that AWS recommends that you purchase. */
	export interface ElastiCacheInstanceDetails {
		Family?: string | null;
		NodeType?: string | null;
		Region?: string | null;
		ProductDescription?: string | null;
		CurrentGeneration?: boolean | null;
		SizeFlexEligible?: boolean | null;
	}

	/** Details about the Amazon ElastiCache instances that AWS recommends that you purchase. */
	export interface ElastiCacheInstanceDetailsFormProperties {
		Family: FormControl<string | null | undefined>,
		NodeType: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		ProductDescription: FormControl<string | null | undefined>,
		CurrentGeneration: FormControl<boolean | null | undefined>,
		SizeFlexEligible: FormControl<boolean | null | undefined>,
	}
	export function CreateElastiCacheInstanceDetailsFormGroup() {
		return new FormGroup<ElastiCacheInstanceDetailsFormProperties>({
			Family: new FormControl<string | null | undefined>(undefined),
			NodeType: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			ProductDescription: new FormControl<string | null | undefined>(undefined),
			CurrentGeneration: new FormControl<boolean | null | undefined>(undefined),
			SizeFlexEligible: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Details about the Amazon ES instances that AWS recommends that you purchase. */
	export interface ESInstanceDetails {
		InstanceClass?: string | null;
		InstanceSize?: string | null;
		Region?: string | null;
		CurrentGeneration?: boolean | null;
		SizeFlexEligible?: boolean | null;
	}

	/** Details about the Amazon ES instances that AWS recommends that you purchase. */
	export interface ESInstanceDetailsFormProperties {
		InstanceClass: FormControl<string | null | undefined>,
		InstanceSize: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		CurrentGeneration: FormControl<boolean | null | undefined>,
		SizeFlexEligible: FormControl<boolean | null | undefined>,
	}
	export function CreateESInstanceDetailsFormGroup() {
		return new FormGroup<ESInstanceDetailsFormProperties>({
			InstanceClass: new FormControl<string | null | undefined>(undefined),
			InstanceSize: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			CurrentGeneration: new FormControl<boolean | null | undefined>(undefined),
			SizeFlexEligible: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A summary about this recommendation, such as the currency code, the amount that AWS estimates that you could save, and the total amount of reservation to purchase. */
	export interface ReservationPurchaseRecommendationSummary {
		TotalEstimatedMonthlySavingsAmount?: string | null;
		TotalEstimatedMonthlySavingsPercentage?: string | null;
		CurrencyCode?: string | null;
	}

	/** A summary about this recommendation, such as the currency code, the amount that AWS estimates that you could save, and the total amount of reservation to purchase. */
	export interface ReservationPurchaseRecommendationSummaryFormProperties {
		TotalEstimatedMonthlySavingsAmount: FormControl<string | null | undefined>,
		TotalEstimatedMonthlySavingsPercentage: FormControl<string | null | undefined>,
		CurrencyCode: FormControl<string | null | undefined>,
	}
	export function CreateReservationPurchaseRecommendationSummaryFormGroup() {
		return new FormGroup<ReservationPurchaseRecommendationSummaryFormProperties>({
			TotalEstimatedMonthlySavingsAmount: new FormControl<string | null | undefined>(undefined),
			TotalEstimatedMonthlySavingsPercentage: new FormControl<string | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetReservationPurchaseRecommendationRequest {
		AccountId?: string | null;
		Service: string;
		AccountScope?: ReservationPurchaseRecommendationAccountScope | null;
		LookbackPeriodInDays?: ReservationPurchaseRecommendationLookbackPeriodInDays | null;
		TermInYears?: ReservationPurchaseRecommendationTermInYears | null;
		PaymentOption?: ReservationPurchaseRecommendationPaymentOption | null;

		/** Hardware specifications for the service that you want recommendations for. */
		ServiceSpecification?: ServiceSpecification;
		PageSize?: number | null;
		NextPageToken?: string | null;
	}
	export interface GetReservationPurchaseRecommendationRequestFormProperties {
		AccountId: FormControl<string | null | undefined>,
		Service: FormControl<string | null | undefined>,
		AccountScope: FormControl<ReservationPurchaseRecommendationAccountScope | null | undefined>,
		LookbackPeriodInDays: FormControl<ReservationPurchaseRecommendationLookbackPeriodInDays | null | undefined>,
		TermInYears: FormControl<ReservationPurchaseRecommendationTermInYears | null | undefined>,
		PaymentOption: FormControl<ReservationPurchaseRecommendationPaymentOption | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetReservationPurchaseRecommendationRequestFormGroup() {
		return new FormGroup<GetReservationPurchaseRecommendationRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			Service: new FormControl<string | null | undefined>(undefined),
			AccountScope: new FormControl<ReservationPurchaseRecommendationAccountScope | null | undefined>(undefined),
			LookbackPeriodInDays: new FormControl<ReservationPurchaseRecommendationLookbackPeriodInDays | null | undefined>(undefined),
			TermInYears: new FormControl<ReservationPurchaseRecommendationTermInYears | null | undefined>(undefined),
			PaymentOption: new FormControl<ReservationPurchaseRecommendationPaymentOption | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetReservationUtilizationResponse {
		UtilizationsByTime: Array<UtilizationByTime>;

		/** The aggregated numbers for your reservation usage. */
		Total?: ReservationAggregates;
		NextPageToken?: string | null;
	}
	export interface GetReservationUtilizationResponseFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetReservationUtilizationResponseFormGroup() {
		return new FormGroup<GetReservationUtilizationResponseFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The amount of utilization, in hours. */
	export interface UtilizationByTime {

		/** The time period that you want the usage and costs for. */
		TimePeriod?: DateInterval;
		Groups?: Array<ReservationUtilizationGroup>;

		/** The aggregated numbers for your reservation usage. */
		Total?: ReservationAggregates;
	}

	/** The amount of utilization, in hours. */
	export interface UtilizationByTimeFormProperties {
	}
	export function CreateUtilizationByTimeFormGroup() {
		return new FormGroup<UtilizationByTimeFormProperties>({
		});

	}


	/** A group of reservations that share a set of attributes. */
	export interface ReservationUtilizationGroup {
		Key?: string | null;
		Value?: string | null;
		Attributes?: Attributes;

		/** The aggregated numbers for your reservation usage. */
		Utilization?: ReservationAggregates;
	}

	/** A group of reservations that share a set of attributes. */
	export interface ReservationUtilizationGroupFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateReservationUtilizationGroupFormGroup() {
		return new FormGroup<ReservationUtilizationGroupFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The aggregated numbers for your reservation usage. */
	export interface ReservationAggregates {
		UtilizationPercentage?: string | null;
		UtilizationPercentageInUnits?: string | null;
		PurchasedHours?: string | null;
		PurchasedUnits?: string | null;
		TotalActualHours?: string | null;
		TotalActualUnits?: string | null;
		UnusedHours?: string | null;
		UnusedUnits?: string | null;
		OnDemandCostOfRIHoursUsed?: string | null;
		NetRISavings?: string | null;
		TotalPotentialRISavings?: string | null;
		AmortizedUpfrontFee?: string | null;
		AmortizedRecurringFee?: string | null;
		TotalAmortizedFee?: string | null;
	}

	/** The aggregated numbers for your reservation usage. */
	export interface ReservationAggregatesFormProperties {
		UtilizationPercentage: FormControl<string | null | undefined>,
		UtilizationPercentageInUnits: FormControl<string | null | undefined>,
		PurchasedHours: FormControl<string | null | undefined>,
		PurchasedUnits: FormControl<string | null | undefined>,
		TotalActualHours: FormControl<string | null | undefined>,
		TotalActualUnits: FormControl<string | null | undefined>,
		UnusedHours: FormControl<string | null | undefined>,
		UnusedUnits: FormControl<string | null | undefined>,
		OnDemandCostOfRIHoursUsed: FormControl<string | null | undefined>,
		NetRISavings: FormControl<string | null | undefined>,
		TotalPotentialRISavings: FormControl<string | null | undefined>,
		AmortizedUpfrontFee: FormControl<string | null | undefined>,
		AmortizedRecurringFee: FormControl<string | null | undefined>,
		TotalAmortizedFee: FormControl<string | null | undefined>,
	}
	export function CreateReservationAggregatesFormGroup() {
		return new FormGroup<ReservationAggregatesFormProperties>({
			UtilizationPercentage: new FormControl<string | null | undefined>(undefined),
			UtilizationPercentageInUnits: new FormControl<string | null | undefined>(undefined),
			PurchasedHours: new FormControl<string | null | undefined>(undefined),
			PurchasedUnits: new FormControl<string | null | undefined>(undefined),
			TotalActualHours: new FormControl<string | null | undefined>(undefined),
			TotalActualUnits: new FormControl<string | null | undefined>(undefined),
			UnusedHours: new FormControl<string | null | undefined>(undefined),
			UnusedUnits: new FormControl<string | null | undefined>(undefined),
			OnDemandCostOfRIHoursUsed: new FormControl<string | null | undefined>(undefined),
			NetRISavings: new FormControl<string | null | undefined>(undefined),
			TotalPotentialRISavings: new FormControl<string | null | undefined>(undefined),
			AmortizedUpfrontFee: new FormControl<string | null | undefined>(undefined),
			AmortizedRecurringFee: new FormControl<string | null | undefined>(undefined),
			TotalAmortizedFee: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetReservationUtilizationRequest {

		/**
		 * The time period that you want the usage and costs for.
		 * Required
		 */
		TimePeriod: DateInterval;
		GroupBy?: Array<GroupDefinition>;
		Granularity?: GetCostAndUsageRequestGranularity | null;

		/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
		Filter?: Expression;
		NextPageToken?: string | null;
	}
	export interface GetReservationUtilizationRequestFormProperties {
		Granularity: FormControl<GetCostAndUsageRequestGranularity | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetReservationUtilizationRequestFormGroup() {
		return new FormGroup<GetReservationUtilizationRequestFormProperties>({
			Granularity: new FormControl<GetCostAndUsageRequestGranularity | null | undefined>(undefined),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRightsizingRecommendationResponse {

		/** Metadata for this recommendation set. */
		Metadata?: RightsizingRecommendationMetadata;

		/** Summary of rightsizing recommendations */
		Summary?: RightsizingRecommendationSummary;
		RightsizingRecommendations?: Array<RightsizingRecommendation>;
		NextPageToken?: string | null;

		/** Enables you to customize recommendations across two attributes. You can choose to view recommendations for instances within the same instance families or across different instance families. You can also choose to view your estimated savings associated with recommendations with consideration of existing Savings Plans or RI benefits, or niether. */
		Configuration?: RightsizingRecommendationConfiguration;
	}
	export interface GetRightsizingRecommendationResponseFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetRightsizingRecommendationResponseFormGroup() {
		return new FormGroup<GetRightsizingRecommendationResponseFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for this recommendation set. */
	export interface RightsizingRecommendationMetadata {
		RecommendationId?: string | null;
		GenerationTimestamp?: string | null;
		LookbackPeriodInDays?: ReservationPurchaseRecommendationLookbackPeriodInDays | null;
	}

	/** Metadata for this recommendation set. */
	export interface RightsizingRecommendationMetadataFormProperties {
		RecommendationId: FormControl<string | null | undefined>,
		GenerationTimestamp: FormControl<string | null | undefined>,
		LookbackPeriodInDays: FormControl<ReservationPurchaseRecommendationLookbackPeriodInDays | null | undefined>,
	}
	export function CreateRightsizingRecommendationMetadataFormGroup() {
		return new FormGroup<RightsizingRecommendationMetadataFormProperties>({
			RecommendationId: new FormControl<string | null | undefined>(undefined),
			GenerationTimestamp: new FormControl<string | null | undefined>(undefined),
			LookbackPeriodInDays: new FormControl<ReservationPurchaseRecommendationLookbackPeriodInDays | null | undefined>(undefined),
		});

	}


	/**  Summary of rightsizing recommendations  */
	export interface RightsizingRecommendationSummary {
		TotalRecommendationCount?: string | null;
		EstimatedTotalMonthlySavingsAmount?: string | null;
		SavingsCurrencyCode?: string | null;
		SavingsPercentage?: string | null;
	}

	/**  Summary of rightsizing recommendations  */
	export interface RightsizingRecommendationSummaryFormProperties {
		TotalRecommendationCount: FormControl<string | null | undefined>,
		EstimatedTotalMonthlySavingsAmount: FormControl<string | null | undefined>,
		SavingsCurrencyCode: FormControl<string | null | undefined>,
		SavingsPercentage: FormControl<string | null | undefined>,
	}
	export function CreateRightsizingRecommendationSummaryFormGroup() {
		return new FormGroup<RightsizingRecommendationSummaryFormProperties>({
			TotalRecommendationCount: new FormControl<string | null | undefined>(undefined),
			EstimatedTotalMonthlySavingsAmount: new FormControl<string | null | undefined>(undefined),
			SavingsCurrencyCode: new FormControl<string | null | undefined>(undefined),
			SavingsPercentage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Recommendations to rightsize resources. */
	export interface RightsizingRecommendation {
		AccountId?: string | null;

		/** Context about the current instance. */
		CurrentInstance?: CurrentInstance;
		RightsizingType?: RightsizingRecommendationRightsizingType | null;

		/** Details on the modification recommendation. */
		ModifyRecommendationDetail?: ModifyRecommendationDetail;

		/** Details on termination recommendation. */
		TerminateRecommendationDetail?: TerminateRecommendationDetail;
	}

	/** Recommendations to rightsize resources. */
	export interface RightsizingRecommendationFormProperties {
		AccountId: FormControl<string | null | undefined>,
		RightsizingType: FormControl<RightsizingRecommendationRightsizingType | null | undefined>,
	}
	export function CreateRightsizingRecommendationFormGroup() {
		return new FormGroup<RightsizingRecommendationFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			RightsizingType: new FormControl<RightsizingRecommendationRightsizingType | null | undefined>(undefined),
		});

	}


	/** Context about the current instance. */
	export interface CurrentInstance {
		ResourceId?: string | null;
		Tags?: Array<TagValues>;

		/** Details on the resource. */
		ResourceDetails?: ResourceDetails;

		/** Resource utilization of current resource. */
		ResourceUtilization?: ResourceUtilization;
		ReservationCoveredHoursInLookbackPeriod?: string | null;
		SavingsPlansCoveredHoursInLookbackPeriod?: string | null;
		OnDemandHoursInLookbackPeriod?: string | null;
		TotalRunningHoursInLookbackPeriod?: string | null;
		MonthlyCost?: string | null;
		CurrencyCode?: string | null;
	}

	/** Context about the current instance. */
	export interface CurrentInstanceFormProperties {
		ResourceId: FormControl<string | null | undefined>,
		ReservationCoveredHoursInLookbackPeriod: FormControl<string | null | undefined>,
		SavingsPlansCoveredHoursInLookbackPeriod: FormControl<string | null | undefined>,
		OnDemandHoursInLookbackPeriod: FormControl<string | null | undefined>,
		TotalRunningHoursInLookbackPeriod: FormControl<string | null | undefined>,
		MonthlyCost: FormControl<string | null | undefined>,
		CurrencyCode: FormControl<string | null | undefined>,
	}
	export function CreateCurrentInstanceFormGroup() {
		return new FormGroup<CurrentInstanceFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ReservationCoveredHoursInLookbackPeriod: new FormControl<string | null | undefined>(undefined),
			SavingsPlansCoveredHoursInLookbackPeriod: new FormControl<string | null | undefined>(undefined),
			OnDemandHoursInLookbackPeriod: new FormControl<string | null | undefined>(undefined),
			TotalRunningHoursInLookbackPeriod: new FormControl<string | null | undefined>(undefined),
			MonthlyCost: new FormControl<string | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details on the resource. */
	export interface ResourceDetails {

		/** Details on the Amazon EC2 Resource. */
		EC2ResourceDetails?: EC2ResourceDetails;
	}

	/** Details on the resource. */
	export interface ResourceDetailsFormProperties {
	}
	export function CreateResourceDetailsFormGroup() {
		return new FormGroup<ResourceDetailsFormProperties>({
		});

	}


	/**  Details on the Amazon EC2 Resource. */
	export interface EC2ResourceDetails {
		HourlyOnDemandRate?: string | null;
		InstanceType?: string | null;
		Platform?: string | null;
		Region?: string | null;
		Sku?: string | null;
		Memory?: string | null;
		NetworkPerformance?: string | null;
		Storage?: string | null;
		Vcpu?: string | null;
	}

	/**  Details on the Amazon EC2 Resource. */
	export interface EC2ResourceDetailsFormProperties {
		HourlyOnDemandRate: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		Platform: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		Sku: FormControl<string | null | undefined>,
		Memory: FormControl<string | null | undefined>,
		NetworkPerformance: FormControl<string | null | undefined>,
		Storage: FormControl<string | null | undefined>,
		Vcpu: FormControl<string | null | undefined>,
	}
	export function CreateEC2ResourceDetailsFormGroup() {
		return new FormGroup<EC2ResourceDetailsFormProperties>({
			HourlyOnDemandRate: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			Platform: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			Sku: new FormControl<string | null | undefined>(undefined),
			Memory: new FormControl<string | null | undefined>(undefined),
			NetworkPerformance: new FormControl<string | null | undefined>(undefined),
			Storage: new FormControl<string | null | undefined>(undefined),
			Vcpu: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource utilization of current resource.  */
	export interface ResourceUtilization {

		/** Utilization metrics of the instance. */
		EC2ResourceUtilization?: EC2ResourceUtilization;
	}

	/** Resource utilization of current resource.  */
	export interface ResourceUtilizationFormProperties {
	}
	export function CreateResourceUtilizationFormGroup() {
		return new FormGroup<ResourceUtilizationFormProperties>({
		});

	}


	/**  Utilization metrics of the instance.  */
	export interface EC2ResourceUtilization {
		MaxCpuUtilizationPercentage?: string | null;
		MaxMemoryUtilizationPercentage?: string | null;
		MaxStorageUtilizationPercentage?: string | null;
	}

	/**  Utilization metrics of the instance.  */
	export interface EC2ResourceUtilizationFormProperties {
		MaxCpuUtilizationPercentage: FormControl<string | null | undefined>,
		MaxMemoryUtilizationPercentage: FormControl<string | null | undefined>,
		MaxStorageUtilizationPercentage: FormControl<string | null | undefined>,
	}
	export function CreateEC2ResourceUtilizationFormGroup() {
		return new FormGroup<EC2ResourceUtilizationFormProperties>({
			MaxCpuUtilizationPercentage: new FormControl<string | null | undefined>(undefined),
			MaxMemoryUtilizationPercentage: new FormControl<string | null | undefined>(undefined),
			MaxStorageUtilizationPercentage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RightsizingRecommendationRightsizingType { TERMINATE = 0, MODIFY = 1 }


	/**  Details on the modification recommendation. */
	export interface ModifyRecommendationDetail {
		TargetInstances?: Array<TargetInstance>;
	}

	/**  Details on the modification recommendation. */
	export interface ModifyRecommendationDetailFormProperties {
	}
	export function CreateModifyRecommendationDetailFormGroup() {
		return new FormGroup<ModifyRecommendationDetailFormProperties>({
		});

	}


	/**  Details on recommended instance. */
	export interface TargetInstance {
		EstimatedMonthlyCost?: string | null;
		EstimatedMonthlySavings?: string | null;
		CurrencyCode?: string | null;
		DefaultTargetInstance?: boolean | null;

		/** Details on the resource. */
		ResourceDetails?: ResourceDetails;

		/** Resource utilization of current resource. */
		ExpectedResourceUtilization?: ResourceUtilization;
	}

	/**  Details on recommended instance. */
	export interface TargetInstanceFormProperties {
		EstimatedMonthlyCost: FormControl<string | null | undefined>,
		EstimatedMonthlySavings: FormControl<string | null | undefined>,
		CurrencyCode: FormControl<string | null | undefined>,
		DefaultTargetInstance: FormControl<boolean | null | undefined>,
	}
	export function CreateTargetInstanceFormGroup() {
		return new FormGroup<TargetInstanceFormProperties>({
			EstimatedMonthlyCost: new FormControl<string | null | undefined>(undefined),
			EstimatedMonthlySavings: new FormControl<string | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			DefaultTargetInstance: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  Details on termination recommendation.  */
	export interface TerminateRecommendationDetail {
		EstimatedMonthlySavings?: string | null;
		CurrencyCode?: string | null;
	}

	/**  Details on termination recommendation.  */
	export interface TerminateRecommendationDetailFormProperties {
		EstimatedMonthlySavings: FormControl<string | null | undefined>,
		CurrencyCode: FormControl<string | null | undefined>,
	}
	export function CreateTerminateRecommendationDetailFormGroup() {
		return new FormGroup<TerminateRecommendationDetailFormProperties>({
			EstimatedMonthlySavings: new FormControl<string | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Enables you to customize recommendations across two attributes. You can choose to view recommendations for instances within the same instance families or across different instance families. You can also choose to view your estimated savings associated with recommendations with consideration of existing Savings Plans or RI benefits, or niether.  */
	export interface RightsizingRecommendationConfiguration {
		RecommendationTarget: RightsizingRecommendationConfigurationRecommendationTarget;
		BenefitsConsidered: boolean;
	}

	/**  Enables you to customize recommendations across two attributes. You can choose to view recommendations for instances within the same instance families or across different instance families. You can also choose to view your estimated savings associated with recommendations with consideration of existing Savings Plans or RI benefits, or niether.  */
	export interface RightsizingRecommendationConfigurationFormProperties {
		RecommendationTarget: FormControl<RightsizingRecommendationConfigurationRecommendationTarget | null | undefined>,
		BenefitsConsidered: FormControl<boolean | null | undefined>,
	}
	export function CreateRightsizingRecommendationConfigurationFormGroup() {
		return new FormGroup<RightsizingRecommendationConfigurationFormProperties>({
			RecommendationTarget: new FormControl<RightsizingRecommendationConfigurationRecommendationTarget | null | undefined>(undefined),
			BenefitsConsidered: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum RightsizingRecommendationConfigurationRecommendationTarget { SAME_INSTANCE_FAMILY = 0, CROSS_INSTANCE_FAMILY = 1 }

	export interface GetRightsizingRecommendationRequest {

		/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
		Filter?: Expression;

		/** Enables you to customize recommendations across two attributes. You can choose to view recommendations for instances within the same instance families or across different instance families. You can also choose to view your estimated savings associated with recommendations with consideration of existing Savings Plans or RI benefits, or niether. */
		Configuration?: RightsizingRecommendationConfiguration;
		Service: string;
		PageSize?: number | null;
		NextPageToken?: string | null;
	}
	export interface GetRightsizingRecommendationRequestFormProperties {
		Service: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetRightsizingRecommendationRequestFormGroup() {
		return new FormGroup<GetRightsizingRecommendationRequestFormProperties>({
			Service: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSavingsPlansCoverageResponse {
		SavingsPlansCoverages: Array<SavingsPlansCoverage>;
		NextToken?: string | null;
	}
	export interface GetSavingsPlansCoverageResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetSavingsPlansCoverageResponseFormGroup() {
		return new FormGroup<GetSavingsPlansCoverageResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The amount of Savings Plans eligible usage that is covered by Savings Plans. All calculations consider the On-Demand equivalent of your Savings Plans usage. */
	export interface SavingsPlansCoverage {
		Attributes?: Attributes;

		/** Specific coverage percentage, On-Demand costs, and spend covered by Savings Plans, and total Savings Plans costs for an account. */
		Coverage?: SavingsPlansCoverageData;

		/** The time period that you want the usage and costs for. */
		TimePeriod?: DateInterval;
	}

	/** The amount of Savings Plans eligible usage that is covered by Savings Plans. All calculations consider the On-Demand equivalent of your Savings Plans usage. */
	export interface SavingsPlansCoverageFormProperties {
	}
	export function CreateSavingsPlansCoverageFormGroup() {
		return new FormGroup<SavingsPlansCoverageFormProperties>({
		});

	}


	/** Specific coverage percentage, On-Demand costs, and spend covered by Savings Plans, and total Savings Plans costs for an account. */
	export interface SavingsPlansCoverageData {
		SpendCoveredBySavingsPlans?: string | null;
		OnDemandCost?: string | null;
		TotalCost?: string | null;
		CoveragePercentage?: string | null;
	}

	/** Specific coverage percentage, On-Demand costs, and spend covered by Savings Plans, and total Savings Plans costs for an account. */
	export interface SavingsPlansCoverageDataFormProperties {
		SpendCoveredBySavingsPlans: FormControl<string | null | undefined>,
		OnDemandCost: FormControl<string | null | undefined>,
		TotalCost: FormControl<string | null | undefined>,
		CoveragePercentage: FormControl<string | null | undefined>,
	}
	export function CreateSavingsPlansCoverageDataFormGroup() {
		return new FormGroup<SavingsPlansCoverageDataFormProperties>({
			SpendCoveredBySavingsPlans: new FormControl<string | null | undefined>(undefined),
			OnDemandCost: new FormControl<string | null | undefined>(undefined),
			TotalCost: new FormControl<string | null | undefined>(undefined),
			CoveragePercentage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSavingsPlansCoverageRequest {

		/**
		 * The time period that you want the usage and costs for.
		 * Required
		 */
		TimePeriod: DateInterval;
		GroupBy?: Array<GroupDefinition>;
		Granularity?: GetCostAndUsageRequestGranularity | null;

		/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
		Filter?: Expression;
		Metrics?: Array<string>;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface GetSavingsPlansCoverageRequestFormProperties {
		Granularity: FormControl<GetCostAndUsageRequestGranularity | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetSavingsPlansCoverageRequestFormGroup() {
		return new FormGroup<GetSavingsPlansCoverageRequestFormProperties>({
			Granularity: new FormControl<GetCostAndUsageRequestGranularity | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetSavingsPlansPurchaseRecommendationResponse {

		/** Metadata about your Savings Plans Purchase Recommendations. */
		Metadata?: SavingsPlansPurchaseRecommendationMetadata;

		/** Contains your request parameters, Savings Plan Recommendations Summary, and Details. */
		SavingsPlansPurchaseRecommendation?: SavingsPlansPurchaseRecommendation;
		NextPageToken?: string | null;
	}
	export interface GetSavingsPlansPurchaseRecommendationResponseFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetSavingsPlansPurchaseRecommendationResponseFormGroup() {
		return new FormGroup<GetSavingsPlansPurchaseRecommendationResponseFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata about your Savings Plans Purchase Recommendations. */
	export interface SavingsPlansPurchaseRecommendationMetadata {
		RecommendationId?: string | null;
		GenerationTimestamp?: string | null;
	}

	/** Metadata about your Savings Plans Purchase Recommendations. */
	export interface SavingsPlansPurchaseRecommendationMetadataFormProperties {
		RecommendationId: FormControl<string | null | undefined>,
		GenerationTimestamp: FormControl<string | null | undefined>,
	}
	export function CreateSavingsPlansPurchaseRecommendationMetadataFormGroup() {
		return new FormGroup<SavingsPlansPurchaseRecommendationMetadataFormProperties>({
			RecommendationId: new FormControl<string | null | undefined>(undefined),
			GenerationTimestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains your request parameters, Savings Plan Recommendations Summary, and Details. */
	export interface SavingsPlansPurchaseRecommendation {
		AccountScope?: ReservationPurchaseRecommendationAccountScope | null;
		SavingsPlansType?: SavingsPlansPurchaseRecommendationSavingsPlansType | null;
		TermInYears?: ReservationPurchaseRecommendationTermInYears | null;
		PaymentOption?: ReservationPurchaseRecommendationPaymentOption | null;
		LookbackPeriodInDays?: ReservationPurchaseRecommendationLookbackPeriodInDays | null;
		SavingsPlansPurchaseRecommendationDetails?: Array<SavingsPlansPurchaseRecommendationDetail>;

		/** Summary metrics for your Savings Plans Purchase Recommendations. */
		SavingsPlansPurchaseRecommendationSummary?: SavingsPlansPurchaseRecommendationSummary;
	}

	/** Contains your request parameters, Savings Plan Recommendations Summary, and Details. */
	export interface SavingsPlansPurchaseRecommendationFormProperties {
		AccountScope: FormControl<ReservationPurchaseRecommendationAccountScope | null | undefined>,
		SavingsPlansType: FormControl<SavingsPlansPurchaseRecommendationSavingsPlansType | null | undefined>,
		TermInYears: FormControl<ReservationPurchaseRecommendationTermInYears | null | undefined>,
		PaymentOption: FormControl<ReservationPurchaseRecommendationPaymentOption | null | undefined>,
		LookbackPeriodInDays: FormControl<ReservationPurchaseRecommendationLookbackPeriodInDays | null | undefined>,
	}
	export function CreateSavingsPlansPurchaseRecommendationFormGroup() {
		return new FormGroup<SavingsPlansPurchaseRecommendationFormProperties>({
			AccountScope: new FormControl<ReservationPurchaseRecommendationAccountScope | null | undefined>(undefined),
			SavingsPlansType: new FormControl<SavingsPlansPurchaseRecommendationSavingsPlansType | null | undefined>(undefined),
			TermInYears: new FormControl<ReservationPurchaseRecommendationTermInYears | null | undefined>(undefined),
			PaymentOption: new FormControl<ReservationPurchaseRecommendationPaymentOption | null | undefined>(undefined),
			LookbackPeriodInDays: new FormControl<ReservationPurchaseRecommendationLookbackPeriodInDays | null | undefined>(undefined),
		});

	}

	export enum SavingsPlansPurchaseRecommendationSavingsPlansType { COMPUTE_SP = 0, EC2_INSTANCE_SP = 1 }


	/** Details for your recommended Savings Plans. */
	export interface SavingsPlansPurchaseRecommendationDetail {

		/** Attribute details on a specific Savings Plan. */
		SavingsPlansDetails?: SavingsPlansDetails;
		AccountId?: string | null;
		UpfrontCost?: string | null;
		EstimatedROI?: string | null;
		CurrencyCode?: string | null;
		EstimatedSPCost?: string | null;
		EstimatedOnDemandCost?: string | null;
		EstimatedOnDemandCostWithCurrentCommitment?: string | null;
		EstimatedSavingsAmount?: string | null;
		EstimatedSavingsPercentage?: string | null;
		HourlyCommitmentToPurchase?: string | null;
		EstimatedAverageUtilization?: string | null;
		EstimatedMonthlySavingsAmount?: string | null;
		CurrentMinimumHourlyOnDemandSpend?: string | null;
		CurrentMaximumHourlyOnDemandSpend?: string | null;
		CurrentAverageHourlyOnDemandSpend?: string | null;
	}

	/** Details for your recommended Savings Plans. */
	export interface SavingsPlansPurchaseRecommendationDetailFormProperties {
		AccountId: FormControl<string | null | undefined>,
		UpfrontCost: FormControl<string | null | undefined>,
		EstimatedROI: FormControl<string | null | undefined>,
		CurrencyCode: FormControl<string | null | undefined>,
		EstimatedSPCost: FormControl<string | null | undefined>,
		EstimatedOnDemandCost: FormControl<string | null | undefined>,
		EstimatedOnDemandCostWithCurrentCommitment: FormControl<string | null | undefined>,
		EstimatedSavingsAmount: FormControl<string | null | undefined>,
		EstimatedSavingsPercentage: FormControl<string | null | undefined>,
		HourlyCommitmentToPurchase: FormControl<string | null | undefined>,
		EstimatedAverageUtilization: FormControl<string | null | undefined>,
		EstimatedMonthlySavingsAmount: FormControl<string | null | undefined>,
		CurrentMinimumHourlyOnDemandSpend: FormControl<string | null | undefined>,
		CurrentMaximumHourlyOnDemandSpend: FormControl<string | null | undefined>,
		CurrentAverageHourlyOnDemandSpend: FormControl<string | null | undefined>,
	}
	export function CreateSavingsPlansPurchaseRecommendationDetailFormGroup() {
		return new FormGroup<SavingsPlansPurchaseRecommendationDetailFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			UpfrontCost: new FormControl<string | null | undefined>(undefined),
			EstimatedROI: new FormControl<string | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			EstimatedSPCost: new FormControl<string | null | undefined>(undefined),
			EstimatedOnDemandCost: new FormControl<string | null | undefined>(undefined),
			EstimatedOnDemandCostWithCurrentCommitment: new FormControl<string | null | undefined>(undefined),
			EstimatedSavingsAmount: new FormControl<string | null | undefined>(undefined),
			EstimatedSavingsPercentage: new FormControl<string | null | undefined>(undefined),
			HourlyCommitmentToPurchase: new FormControl<string | null | undefined>(undefined),
			EstimatedAverageUtilization: new FormControl<string | null | undefined>(undefined),
			EstimatedMonthlySavingsAmount: new FormControl<string | null | undefined>(undefined),
			CurrentMinimumHourlyOnDemandSpend: new FormControl<string | null | undefined>(undefined),
			CurrentMaximumHourlyOnDemandSpend: new FormControl<string | null | undefined>(undefined),
			CurrentAverageHourlyOnDemandSpend: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Attribute details on a specific Savings Plan. */
	export interface SavingsPlansDetails {
		Region?: string | null;
		InstanceFamily?: string | null;
		OfferingId?: string | null;
	}

	/** Attribute details on a specific Savings Plan. */
	export interface SavingsPlansDetailsFormProperties {
		Region: FormControl<string | null | undefined>,
		InstanceFamily: FormControl<string | null | undefined>,
		OfferingId: FormControl<string | null | undefined>,
	}
	export function CreateSavingsPlansDetailsFormGroup() {
		return new FormGroup<SavingsPlansDetailsFormProperties>({
			Region: new FormControl<string | null | undefined>(undefined),
			InstanceFamily: new FormControl<string | null | undefined>(undefined),
			OfferingId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary metrics for your Savings Plans Purchase Recommendations. */
	export interface SavingsPlansPurchaseRecommendationSummary {
		EstimatedROI?: string | null;
		CurrencyCode?: string | null;
		EstimatedTotalCost?: string | null;
		CurrentOnDemandSpend?: string | null;
		EstimatedSavingsAmount?: string | null;
		TotalRecommendationCount?: string | null;
		DailyCommitmentToPurchase?: string | null;
		HourlyCommitmentToPurchase?: string | null;
		EstimatedSavingsPercentage?: string | null;
		EstimatedMonthlySavingsAmount?: string | null;
		EstimatedOnDemandCostWithCurrentCommitment?: string | null;
	}

	/** Summary metrics for your Savings Plans Purchase Recommendations. */
	export interface SavingsPlansPurchaseRecommendationSummaryFormProperties {
		EstimatedROI: FormControl<string | null | undefined>,
		CurrencyCode: FormControl<string | null | undefined>,
		EstimatedTotalCost: FormControl<string | null | undefined>,
		CurrentOnDemandSpend: FormControl<string | null | undefined>,
		EstimatedSavingsAmount: FormControl<string | null | undefined>,
		TotalRecommendationCount: FormControl<string | null | undefined>,
		DailyCommitmentToPurchase: FormControl<string | null | undefined>,
		HourlyCommitmentToPurchase: FormControl<string | null | undefined>,
		EstimatedSavingsPercentage: FormControl<string | null | undefined>,
		EstimatedMonthlySavingsAmount: FormControl<string | null | undefined>,
		EstimatedOnDemandCostWithCurrentCommitment: FormControl<string | null | undefined>,
	}
	export function CreateSavingsPlansPurchaseRecommendationSummaryFormGroup() {
		return new FormGroup<SavingsPlansPurchaseRecommendationSummaryFormProperties>({
			EstimatedROI: new FormControl<string | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			EstimatedTotalCost: new FormControl<string | null | undefined>(undefined),
			CurrentOnDemandSpend: new FormControl<string | null | undefined>(undefined),
			EstimatedSavingsAmount: new FormControl<string | null | undefined>(undefined),
			TotalRecommendationCount: new FormControl<string | null | undefined>(undefined),
			DailyCommitmentToPurchase: new FormControl<string | null | undefined>(undefined),
			HourlyCommitmentToPurchase: new FormControl<string | null | undefined>(undefined),
			EstimatedSavingsPercentage: new FormControl<string | null | undefined>(undefined),
			EstimatedMonthlySavingsAmount: new FormControl<string | null | undefined>(undefined),
			EstimatedOnDemandCostWithCurrentCommitment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSavingsPlansPurchaseRecommendationRequest {
		SavingsPlansType: SavingsPlansPurchaseRecommendationSavingsPlansType;
		TermInYears: ReservationPurchaseRecommendationTermInYears;
		PaymentOption: ReservationPurchaseRecommendationPaymentOption;
		AccountScope?: ReservationPurchaseRecommendationAccountScope | null;
		NextPageToken?: string | null;
		PageSize?: number | null;
		LookbackPeriodInDays: ReservationPurchaseRecommendationLookbackPeriodInDays;

		/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
		Filter?: Expression;
	}
	export interface GetSavingsPlansPurchaseRecommendationRequestFormProperties {
		SavingsPlansType: FormControl<SavingsPlansPurchaseRecommendationSavingsPlansType | null | undefined>,
		TermInYears: FormControl<ReservationPurchaseRecommendationTermInYears | null | undefined>,
		PaymentOption: FormControl<ReservationPurchaseRecommendationPaymentOption | null | undefined>,
		AccountScope: FormControl<ReservationPurchaseRecommendationAccountScope | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
		LookbackPeriodInDays: FormControl<ReservationPurchaseRecommendationLookbackPeriodInDays | null | undefined>,
	}
	export function CreateGetSavingsPlansPurchaseRecommendationRequestFormGroup() {
		return new FormGroup<GetSavingsPlansPurchaseRecommendationRequestFormProperties>({
			SavingsPlansType: new FormControl<SavingsPlansPurchaseRecommendationSavingsPlansType | null | undefined>(undefined),
			TermInYears: new FormControl<ReservationPurchaseRecommendationTermInYears | null | undefined>(undefined),
			PaymentOption: new FormControl<ReservationPurchaseRecommendationPaymentOption | null | undefined>(undefined),
			AccountScope: new FormControl<ReservationPurchaseRecommendationAccountScope | null | undefined>(undefined),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			LookbackPeriodInDays: new FormControl<ReservationPurchaseRecommendationLookbackPeriodInDays | null | undefined>(undefined),
		});

	}

	export interface GetSavingsPlansUtilizationResponse {
		SavingsPlansUtilizationsByTime?: Array<SavingsPlansUtilizationByTime>;

		/**
		 * The aggregated utilization metrics for your Savings Plans usage.
		 * Required
		 */
		Total: SavingsPlansUtilizationAggregates;
	}
	export interface GetSavingsPlansUtilizationResponseFormProperties {
	}
	export function CreateGetSavingsPlansUtilizationResponseFormGroup() {
		return new FormGroup<GetSavingsPlansUtilizationResponseFormProperties>({
		});

	}


	/** The amount of Savings Plans utilization, in hours. */
	export interface SavingsPlansUtilizationByTime {

		/**
		 * The time period that you want the usage and costs for.
		 * Required
		 */
		TimePeriod: DateInterval;

		/**
		 * The measurement of how well you are using your existing Savings Plans.
		 * Required
		 */
		Utilization: SavingsPlansUtilization;

		/** The amount of savings you're accumulating, against the public On-Demand rate of the usage accrued in an account. */
		Savings?: SavingsPlansSavings;

		/** The amortized amount of Savings Plans purchased in a specific account during a specific time interval. */
		AmortizedCommitment?: SavingsPlansAmortizedCommitment;
	}

	/** The amount of Savings Plans utilization, in hours. */
	export interface SavingsPlansUtilizationByTimeFormProperties {
	}
	export function CreateSavingsPlansUtilizationByTimeFormGroup() {
		return new FormGroup<SavingsPlansUtilizationByTimeFormProperties>({
		});

	}


	/** The measurement of how well you are using your existing Savings Plans. */
	export interface SavingsPlansUtilization {
		TotalCommitment?: string | null;
		UsedCommitment?: string | null;
		UnusedCommitment?: string | null;
		UtilizationPercentage?: string | null;
	}

	/** The measurement of how well you are using your existing Savings Plans. */
	export interface SavingsPlansUtilizationFormProperties {
		TotalCommitment: FormControl<string | null | undefined>,
		UsedCommitment: FormControl<string | null | undefined>,
		UnusedCommitment: FormControl<string | null | undefined>,
		UtilizationPercentage: FormControl<string | null | undefined>,
	}
	export function CreateSavingsPlansUtilizationFormGroup() {
		return new FormGroup<SavingsPlansUtilizationFormProperties>({
			TotalCommitment: new FormControl<string | null | undefined>(undefined),
			UsedCommitment: new FormControl<string | null | undefined>(undefined),
			UnusedCommitment: new FormControl<string | null | undefined>(undefined),
			UtilizationPercentage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The amount of savings you're accumulating, against the public On-Demand rate of the usage accrued in an account. */
	export interface SavingsPlansSavings {
		NetSavings?: string | null;
		OnDemandCostEquivalent?: string | null;
	}

	/** The amount of savings you're accumulating, against the public On-Demand rate of the usage accrued in an account. */
	export interface SavingsPlansSavingsFormProperties {
		NetSavings: FormControl<string | null | undefined>,
		OnDemandCostEquivalent: FormControl<string | null | undefined>,
	}
	export function CreateSavingsPlansSavingsFormGroup() {
		return new FormGroup<SavingsPlansSavingsFormProperties>({
			NetSavings: new FormControl<string | null | undefined>(undefined),
			OnDemandCostEquivalent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The amortized amount of Savings Plans purchased in a specific account during a specific time interval. */
	export interface SavingsPlansAmortizedCommitment {
		AmortizedRecurringCommitment?: string | null;
		AmortizedUpfrontCommitment?: string | null;
		TotalAmortizedCommitment?: string | null;
	}

	/** The amortized amount of Savings Plans purchased in a specific account during a specific time interval. */
	export interface SavingsPlansAmortizedCommitmentFormProperties {
		AmortizedRecurringCommitment: FormControl<string | null | undefined>,
		AmortizedUpfrontCommitment: FormControl<string | null | undefined>,
		TotalAmortizedCommitment: FormControl<string | null | undefined>,
	}
	export function CreateSavingsPlansAmortizedCommitmentFormGroup() {
		return new FormGroup<SavingsPlansAmortizedCommitmentFormProperties>({
			AmortizedRecurringCommitment: new FormControl<string | null | undefined>(undefined),
			AmortizedUpfrontCommitment: new FormControl<string | null | undefined>(undefined),
			TotalAmortizedCommitment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The aggregated utilization metrics for your Savings Plans usage. */
	export interface SavingsPlansUtilizationAggregates {

		/**
		 * The measurement of how well you are using your existing Savings Plans.
		 * Required
		 */
		Utilization: SavingsPlansUtilization;

		/** The amount of savings you're accumulating, against the public On-Demand rate of the usage accrued in an account. */
		Savings?: SavingsPlansSavings;

		/** The amortized amount of Savings Plans purchased in a specific account during a specific time interval. */
		AmortizedCommitment?: SavingsPlansAmortizedCommitment;
	}

	/** The aggregated utilization metrics for your Savings Plans usage. */
	export interface SavingsPlansUtilizationAggregatesFormProperties {
	}
	export function CreateSavingsPlansUtilizationAggregatesFormGroup() {
		return new FormGroup<SavingsPlansUtilizationAggregatesFormProperties>({
		});

	}

	export interface GetSavingsPlansUtilizationRequest {

		/**
		 * The time period that you want the usage and costs for.
		 * Required
		 */
		TimePeriod: DateInterval;
		Granularity?: GetCostAndUsageRequestGranularity | null;

		/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
		Filter?: Expression;
	}
	export interface GetSavingsPlansUtilizationRequestFormProperties {
		Granularity: FormControl<GetCostAndUsageRequestGranularity | null | undefined>,
	}
	export function CreateGetSavingsPlansUtilizationRequestFormGroup() {
		return new FormGroup<GetSavingsPlansUtilizationRequestFormProperties>({
			Granularity: new FormControl<GetCostAndUsageRequestGranularity | null | undefined>(undefined),
		});

	}

	export interface GetSavingsPlansUtilizationDetailsResponse {
		SavingsPlansUtilizationDetails: Array<SavingsPlansUtilizationDetail>;

		/** The aggregated utilization metrics for your Savings Plans usage. */
		Total?: SavingsPlansUtilizationAggregates;

		/**
		 * The time period that you want the usage and costs for.
		 * Required
		 */
		TimePeriod: DateInterval;
		NextToken?: string | null;
	}
	export interface GetSavingsPlansUtilizationDetailsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetSavingsPlansUtilizationDetailsResponseFormGroup() {
		return new FormGroup<GetSavingsPlansUtilizationDetailsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single daily or monthly Savings Plans utilization rate, and details for your account. Master accounts in an organization have access to member accounts. You can use <code>GetDimensionValues</code> to determine the possible dimension values.  */
	export interface SavingsPlansUtilizationDetail {
		SavingsPlanArn?: string | null;
		Attributes?: Attributes;

		/** The measurement of how well you are using your existing Savings Plans. */
		Utilization?: SavingsPlansUtilization;

		/** The amount of savings you're accumulating, against the public On-Demand rate of the usage accrued in an account. */
		Savings?: SavingsPlansSavings;

		/** The amortized amount of Savings Plans purchased in a specific account during a specific time interval. */
		AmortizedCommitment?: SavingsPlansAmortizedCommitment;
	}

	/** A single daily or monthly Savings Plans utilization rate, and details for your account. Master accounts in an organization have access to member accounts. You can use <code>GetDimensionValues</code> to determine the possible dimension values.  */
	export interface SavingsPlansUtilizationDetailFormProperties {
		SavingsPlanArn: FormControl<string | null | undefined>,
	}
	export function CreateSavingsPlansUtilizationDetailFormGroup() {
		return new FormGroup<SavingsPlansUtilizationDetailFormProperties>({
			SavingsPlanArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSavingsPlansUtilizationDetailsRequest {

		/**
		 * The time period that you want the usage and costs for.
		 * Required
		 */
		TimePeriod: DateInterval;

		/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
		Filter?: Expression;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface GetSavingsPlansUtilizationDetailsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetSavingsPlansUtilizationDetailsRequestFormGroup() {
		return new FormGroup<GetSavingsPlansUtilizationDetailsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTagsResponse {
		NextPageToken?: string | null;
		Tags: Array<string>;
		ReturnSize: number;
		TotalSize: number;
	}
	export interface GetTagsResponseFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
		ReturnSize: FormControl<number | null | undefined>,
		TotalSize: FormControl<number | null | undefined>,
	}
	export function CreateGetTagsResponseFormGroup() {
		return new FormGroup<GetTagsResponseFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
			ReturnSize: new FormControl<number | null | undefined>(undefined),
			TotalSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTagsRequest {
		SearchString?: string | null;

		/**
		 * The time period that you want the usage and costs for.
		 * Required
		 */
		TimePeriod: DateInterval;
		TagKey?: string | null;
		NextPageToken?: string | null;
	}
	export interface GetTagsRequestFormProperties {
		SearchString: FormControl<string | null | undefined>,
		TagKey: FormControl<string | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTagsRequestFormGroup() {
		return new FormGroup<GetTagsRequestFormProperties>({
			SearchString: new FormControl<string | null | undefined>(undefined),
			TagKey: new FormControl<string | null | undefined>(undefined),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetUsageForecastResponse {

		/** The aggregated value for a metric. */
		Total?: MetricValue;
		ForecastResultsByTime?: Array<ForecastResult>;
	}
	export interface GetUsageForecastResponseFormProperties {
	}
	export function CreateGetUsageForecastResponseFormGroup() {
		return new FormGroup<GetUsageForecastResponseFormProperties>({
		});

	}

	export interface GetUsageForecastRequest {

		/**
		 * The time period that you want the usage and costs for.
		 * Required
		 */
		TimePeriod: DateInterval;
		Metric: GetCostForecastRequestMetric;
		Granularity: GetCostAndUsageRequestGranularity;

		/** <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note> */
		Filter?: Expression;
		PredictionIntervalLevel?: number | null;
	}
	export interface GetUsageForecastRequestFormProperties {
		Metric: FormControl<GetCostForecastRequestMetric | null | undefined>,
		Granularity: FormControl<GetCostAndUsageRequestGranularity | null | undefined>,
		PredictionIntervalLevel: FormControl<number | null | undefined>,
	}
	export function CreateGetUsageForecastRequestFormGroup() {
		return new FormGroup<GetUsageForecastRequestFormProperties>({
			Metric: new FormControl<GetCostForecastRequestMetric | null | undefined>(undefined),
			Granularity: new FormControl<GetCostAndUsageRequestGranularity | null | undefined>(undefined),
			PredictionIntervalLevel: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UnresolvableUsageUnitException {
	}
	export interface UnresolvableUsageUnitExceptionFormProperties {
	}
	export function CreateUnresolvableUsageUnitExceptionFormGroup() {
		return new FormGroup<UnresolvableUsageUnitExceptionFormProperties>({
		});

	}

	export interface ListCostCategoryDefinitionsResponse {
		CostCategoryReferences?: Array<CostCategoryReference>;
		NextToken?: string | null;
	}
	export interface ListCostCategoryDefinitionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCostCategoryDefinitionsResponseFormGroup() {
		return new FormGroup<ListCostCategoryDefinitionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A reference to a Cost Category containing only enough information to identify the Cost Category.</p> <p>You can use this information to retrieve the full Cost Category information using <code>DescribeCostCategory</code>.</p> */
	export interface CostCategoryReference {
		CostCategoryArn?: string | null;

		/**
		 * The unique name of the Cost Category.
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * The time period that you want the usage and costs for.
		 * Max length: 25
		 * Min length: 20
		 * Pattern: ^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$
		 */
		EffectiveStart?: string | null;

		/**
		 * The time period that you want the usage and costs for.
		 * Max length: 25
		 * Min length: 20
		 * Pattern: ^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$
		 */
		EffectiveEnd?: string | null;
		NumberOfRules?: number | null;
	}

	/** <p>A reference to a Cost Category containing only enough information to identify the Cost Category.</p> <p>You can use this information to retrieve the full Cost Category information using <code>DescribeCostCategory</code>.</p> */
	export interface CostCategoryReferenceFormProperties {
		CostCategoryArn: FormControl<string | null | undefined>,

		/**
		 * The unique name of the Cost Category.
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The time period that you want the usage and costs for.
		 * Max length: 25
		 * Min length: 20
		 * Pattern: ^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$
		 */
		EffectiveStart: FormControl<string | null | undefined>,

		/**
		 * The time period that you want the usage and costs for.
		 * Max length: 25
		 * Min length: 20
		 * Pattern: ^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$
		 */
		EffectiveEnd: FormControl<string | null | undefined>,
		NumberOfRules: FormControl<number | null | undefined>,
	}
	export function CreateCostCategoryReferenceFormGroup() {
		return new FormGroup<CostCategoryReferenceFormProperties>({
			CostCategoryArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			EffectiveStart: new FormControl<string | null | undefined>(undefined),
			EffectiveEnd: new FormControl<string | null | undefined>(undefined),
			NumberOfRules: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListCostCategoryDefinitionsRequest {

		/**
		 * The time period that you want the usage and costs for.
		 * Max length: 25
		 * Min length: 20
		 * Pattern: ^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$
		 */
		EffectiveOn?: string | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListCostCategoryDefinitionsRequestFormProperties {

		/**
		 * The time period that you want the usage and costs for.
		 * Max length: 25
		 * Min length: 20
		 * Pattern: ^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$
		 */
		EffectiveOn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListCostCategoryDefinitionsRequestFormGroup() {
		return new FormGroup<ListCostCategoryDefinitionsRequestFormProperties>({
			EffectiveOn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateCostCategoryDefinitionResponse {
		CostCategoryArn?: string | null;

		/**
		 * The time period that you want the usage and costs for.
		 * Max length: 25
		 * Min length: 20
		 * Pattern: ^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$
		 */
		EffectiveStart?: string | null;
	}
	export interface UpdateCostCategoryDefinitionResponseFormProperties {
		CostCategoryArn: FormControl<string | null | undefined>,

		/**
		 * The time period that you want the usage and costs for.
		 * Max length: 25
		 * Min length: 20
		 * Pattern: ^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$
		 */
		EffectiveStart: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCostCategoryDefinitionResponseFormGroup() {
		return new FormGroup<UpdateCostCategoryDefinitionResponseFormProperties>({
			CostCategoryArn: new FormControl<string | null | undefined>(undefined),
			EffectiveStart: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCostCategoryDefinitionRequest {
		CostCategoryArn: string;

		/**
		 * The rule schema version in this particular Cost Category.
		 * Required
		 */
		RuleVersion: UpdateCostCategoryDefinitionRequestRuleVersion;
		Rules: Array<CostCategoryRule>;
	}
	export interface UpdateCostCategoryDefinitionRequestFormProperties {
		CostCategoryArn: FormControl<string | null | undefined>,

		/**
		 * The rule schema version in this particular Cost Category.
		 * Required
		 */
		RuleVersion: FormControl<UpdateCostCategoryDefinitionRequestRuleVersion | null | undefined>,
	}
	export function CreateUpdateCostCategoryDefinitionRequestFormGroup() {
		return new FormGroup<UpdateCostCategoryDefinitionRequestFormProperties>({
			CostCategoryArn: new FormControl<string | null | undefined>(undefined),
			RuleVersion: new FormControl<UpdateCostCategoryDefinitionRequestRuleVersion | null | undefined>(undefined),
		});

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
		GetSavingsPlansCoverage(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetSavingsPlansCoverageRequest): Observable<GetSavingsPlansCoverageResponse> {
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
		GetSavingsPlansUtilizationDetails(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetSavingsPlansUtilizationDetailsRequest): Observable<GetSavingsPlansUtilizationDetailsResponse> {
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
		ListCostCategoryDefinitions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCostCategoryDefinitionsRequest): Observable<ListCostCategoryDefinitionsResponse> {
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

