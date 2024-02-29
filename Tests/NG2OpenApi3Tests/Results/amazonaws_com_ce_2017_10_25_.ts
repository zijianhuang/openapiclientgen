import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateAnomalyMonitorResponse {

		/** Required */
		MonitorArn: string;
	}
	export interface CreateAnomalyMonitorResponseFormProperties {

		/** Required */
		MonitorArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAnomalyMonitorResponseFormGroup() {
		return new FormGroup<CreateAnomalyMonitorResponseFormProperties>({
			MonitorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAnomalyMonitorRequest {

		/** Required */
		AnomalyMonitor: AnomalyMonitor;
		ResourceTags?: Array<ResourceTag>;
	}
	export interface CreateAnomalyMonitorRequestFormProperties {
	}
	export function CreateCreateAnomalyMonitorRequestFormGroup() {
		return new FormGroup<CreateAnomalyMonitorRequestFormProperties>({
		});

	}


	/** This object continuously inspects your account's cost data for anomalies. It's based on <code>MonitorType</code> and <code>MonitorSpecification</code>. The content consists of detailed metadata and the current status of the monitor object.  */
	export interface AnomalyMonitor {
		MonitorArn?: string;

		/** Required */
		MonitorName: string;
		CreationDate?: string;
		LastUpdatedDate?: string;
		LastEvaluatedDate?: string;

		/** Required */
		MonitorType: MonitorType;
		MonitorDimension?: MonitorDimension;

		/** <p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with "a".</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note> */
		MonitorSpecification?: Expression;
		DimensionalValueCount?: number | null;
	}

	/** This object continuously inspects your account's cost data for anomalies. It's based on <code>MonitorType</code> and <code>MonitorSpecification</code>. The content consists of detailed metadata and the current status of the monitor object.  */
	export interface AnomalyMonitorFormProperties {
		MonitorArn: FormControl<string | null | undefined>,

		/** Required */
		MonitorName: FormControl<string | null | undefined>,
		CreationDate: FormControl<string | null | undefined>,
		LastUpdatedDate: FormControl<string | null | undefined>,
		LastEvaluatedDate: FormControl<string | null | undefined>,

		/** Required */
		MonitorType: FormControl<MonitorType | null | undefined>,
		MonitorDimension: FormControl<MonitorDimension | null | undefined>,
		DimensionalValueCount: FormControl<number | null | undefined>,
	}
	export function CreateAnomalyMonitorFormGroup() {
		return new FormGroup<AnomalyMonitorFormProperties>({
			MonitorArn: new FormControl<string | null | undefined>(undefined),
			MonitorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationDate: new FormControl<string | null | undefined>(undefined),
			LastUpdatedDate: new FormControl<string | null | undefined>(undefined),
			LastEvaluatedDate: new FormControl<string | null | undefined>(undefined),
			MonitorType: new FormControl<MonitorType | null | undefined>(undefined, [Validators.required]),
			MonitorDimension: new FormControl<MonitorDimension | null | undefined>(undefined),
			DimensionalValueCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum MonitorType { DIMENSIONAL = 'DIMENSIONAL', CUSTOM = 'CUSTOM' }

	export enum MonitorDimension { SERVICE = 'SERVICE' }


	/** <p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with "a".</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note> */
	export interface Expression {
		Or?: Array<Expression>;
		And?: Array<Expression>;
		Not?: Expression;
		Dimensions?: DimensionValues;
		Tags?: TagValues;
		CostCategories?: CostCategoryValues;
	}

	/** <p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with "a".</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note> */
	export interface ExpressionFormProperties {
	}
	export function CreateExpressionFormGroup() {
		return new FormGroup<ExpressionFormProperties>({
		});

	}


	/** The metadata that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values. */
	export interface DimensionValues {
		Key?: Dimension;
		Values?: Array<string>;
		MatchOptions?: Array<MatchOption>;
	}

	/** The metadata that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values. */
	export interface DimensionValuesFormProperties {
		Key: FormControl<Dimension | null | undefined>,
	}
	export function CreateDimensionValuesFormGroup() {
		return new FormGroup<DimensionValuesFormProperties>({
			Key: new FormControl<Dimension | null | undefined>(undefined),
		});

	}

	export enum Dimension { AZ = 'AZ', INSTANCE_TYPE = 'INSTANCE_TYPE', LINKED_ACCOUNT = 'LINKED_ACCOUNT', LINKED_ACCOUNT_NAME = 'LINKED_ACCOUNT_NAME', OPERATION = 'OPERATION', PURCHASE_TYPE = 'PURCHASE_TYPE', REGION = 'REGION', SERVICE = 'SERVICE', SERVICE_CODE = 'SERVICE_CODE', USAGE_TYPE = 'USAGE_TYPE', USAGE_TYPE_GROUP = 'USAGE_TYPE_GROUP', RECORD_TYPE = 'RECORD_TYPE', OPERATING_SYSTEM = 'OPERATING_SYSTEM', TENANCY = 'TENANCY', SCOPE = 'SCOPE', PLATFORM = 'PLATFORM', SUBSCRIPTION_ID = 'SUBSCRIPTION_ID', LEGAL_ENTITY_NAME = 'LEGAL_ENTITY_NAME', DEPLOYMENT_OPTION = 'DEPLOYMENT_OPTION', DATABASE_ENGINE = 'DATABASE_ENGINE', CACHE_ENGINE = 'CACHE_ENGINE', INSTANCE_TYPE_FAMILY = 'INSTANCE_TYPE_FAMILY', BILLING_ENTITY = 'BILLING_ENTITY', RESERVATION_ID = 'RESERVATION_ID', RESOURCE_ID = 'RESOURCE_ID', RIGHTSIZING_TYPE = 'RIGHTSIZING_TYPE', SAVINGS_PLANS_TYPE = 'SAVINGS_PLANS_TYPE', SAVINGS_PLAN_ARN = 'SAVINGS_PLAN_ARN', PAYMENT_OPTION = 'PAYMENT_OPTION', AGREEMENT_END_DATE_TIME_AFTER = 'AGREEMENT_END_DATE_TIME_AFTER', AGREEMENT_END_DATE_TIME_BEFORE = 'AGREEMENT_END_DATE_TIME_BEFORE', INVOICING_ENTITY = 'INVOICING_ENTITY', ANOMALY_TOTAL_IMPACT_ABSOLUTE = 'ANOMALY_TOTAL_IMPACT_ABSOLUTE', ANOMALY_TOTAL_IMPACT_PERCENTAGE = 'ANOMALY_TOTAL_IMPACT_PERCENTAGE' }

	export enum MatchOption { EQUALS = 'EQUALS', ABSENT = 'ABSENT', STARTS_WITH = 'STARTS_WITH', ENDS_WITH = 'ENDS_WITH', CONTAINS = 'CONTAINS', CASE_SENSITIVE = 'CASE_SENSITIVE', CASE_INSENSITIVE = 'CASE_INSENSITIVE', GREATER_THAN_OR_EQUAL = 'GREATER_THAN_OR_EQUAL' }


	/** <p>The values that are available for a tag.</p> <p>If <code>Values</code> and <code>Key</code> aren't specified, the <code>ABSENT</code> <code>MatchOption</code> is applied to all tags. That is, it's filtered on resources with no tags.</p> <p>If <code>Key</code> is provided and <code>Values</code> isn't specified, the <code>ABSENT</code> <code>MatchOption</code> is applied to the tag <code>Key</code> only. That is, it's filtered on resources without the given tag key.</p> */
	export interface TagValues {
		Key?: string;
		Values?: Array<string>;
		MatchOptions?: Array<MatchOption>;
	}

	/** <p>The values that are available for a tag.</p> <p>If <code>Values</code> and <code>Key</code> aren't specified, the <code>ABSENT</code> <code>MatchOption</code> is applied to all tags. That is, it's filtered on resources with no tags.</p> <p>If <code>Key</code> is provided and <code>Values</code> isn't specified, the <code>ABSENT</code> <code>MatchOption</code> is applied to the tag <code>Key</code> only. That is, it's filtered on resources without the given tag key.</p> */
	export interface TagValuesFormProperties {
		Key: FormControl<string | null | undefined>,
	}
	export function CreateTagValuesFormGroup() {
		return new FormGroup<TagValuesFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The Cost Categories values used for filtering the costs.</p> <p>If <code>Values</code> and <code>Key</code> are not specified, the <code>ABSENT</code> <code>MatchOption</code> is applied to all Cost Categories. That is, it filters on resources that aren't mapped to any Cost Categories.</p> <p>If <code>Values</code> is provided and <code>Key</code> isn't specified, the <code>ABSENT</code> <code>MatchOption</code> is applied to the Cost Categories <code>Key</code> only. That is, it filters on resources without the given Cost Categories key.</p> */
	export interface CostCategoryValues {

		/**
		 * The unique name of the Cost Category.
		 * Min length: 1
		 * Max length: 50
		 */
		Key?: string | null;
		Values?: Array<string>;
		MatchOptions?: Array<MatchOption>;
	}

	/** <p>The Cost Categories values used for filtering the costs.</p> <p>If <code>Values</code> and <code>Key</code> are not specified, the <code>ABSENT</code> <code>MatchOption</code> is applied to all Cost Categories. That is, it filters on resources that aren't mapped to any Cost Categories.</p> <p>If <code>Values</code> is provided and <code>Key</code> isn't specified, the <code>ABSENT</code> <code>MatchOption</code> is applied to the Cost Categories <code>Key</code> only. That is, it filters on resources without the given Cost Categories key.</p> */
	export interface CostCategoryValuesFormProperties {

		/**
		 * The unique name of the Cost Category.
		 * Min length: 1
		 * Max length: 50
		 */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateCostCategoryValuesFormGroup() {
		return new FormGroup<CostCategoryValuesFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
		});

	}


	/** <p>The tag structure that contains a tag key and value. </p> <note> <p>Tagging is supported only for the following Cost Explorer resource types: <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalyMonitor.html"> <code>AnomalyMonitor</code> </a>, <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalySubscription.html"> <code>AnomalySubscription</code> </a>, <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategory.html"> <code>CostCategory</code> </a>.</p> </note> */
	export interface ResourceTag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** <p>The tag structure that contains a tag key and value. </p> <note> <p>Tagging is supported only for the following Cost Explorer resource types: <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalyMonitor.html"> <code>AnomalyMonitor</code> </a>, <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalySubscription.html"> <code>AnomalySubscription</code> </a>, <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategory.html"> <code>CostCategory</code> </a>.</p> </note> */
	export interface ResourceTagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateResourceTagFormGroup() {
		return new FormGroup<ResourceTagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateAnomalySubscriptionResponse {

		/** Required */
		SubscriptionArn: string;
	}
	export interface CreateAnomalySubscriptionResponseFormProperties {

		/** Required */
		SubscriptionArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAnomalySubscriptionResponseFormGroup() {
		return new FormGroup<CreateAnomalySubscriptionResponseFormProperties>({
			SubscriptionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAnomalySubscriptionRequest {

		/** Required */
		AnomalySubscription: AnomalySubscription;
		ResourceTags?: Array<ResourceTag>;
	}
	export interface CreateAnomalySubscriptionRequestFormProperties {
	}
	export function CreateCreateAnomalySubscriptionRequestFormGroup() {
		return new FormGroup<CreateAnomalySubscriptionRequestFormProperties>({
		});

	}


	/** <p>An <code>AnomalySubscription</code> resource (also referred to as an alert subscription) sends notifications about specific anomalies that meet an alerting criteria defined by you.</p> <p>You can specify the frequency of the alerts and the subscribers to notify.</p> <p>Anomaly subscriptions can be associated with one or more <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalyMonitor.html"> <code>AnomalyMonitor</code> </a> resources, and they only send notifications about anomalies detected by those associated monitors. You can also configure a threshold to further control which anomalies are included in the notifications.</p> <p>Anomalies that don’t exceed the chosen threshold and therefore don’t trigger notifications from an anomaly subscription will still be available on the console and from the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAnomalies.html"> <code>GetAnomalies</code> </a> API.</p> */
	export interface AnomalySubscription {
		SubscriptionArn?: string;
		AccountId?: string;

		/** Required */
		MonitorArnList: Array<string>;

		/** Required */
		Subscribers: Array<Subscriber>;
		Threshold?: number | null;

		/** Required */
		Frequency: AnomalySubscriptionFrequency;

		/** Required */
		SubscriptionName: string;
		ThresholdExpression?: Expression;
	}

	/** <p>An <code>AnomalySubscription</code> resource (also referred to as an alert subscription) sends notifications about specific anomalies that meet an alerting criteria defined by you.</p> <p>You can specify the frequency of the alerts and the subscribers to notify.</p> <p>Anomaly subscriptions can be associated with one or more <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalyMonitor.html"> <code>AnomalyMonitor</code> </a> resources, and they only send notifications about anomalies detected by those associated monitors. You can also configure a threshold to further control which anomalies are included in the notifications.</p> <p>Anomalies that don’t exceed the chosen threshold and therefore don’t trigger notifications from an anomaly subscription will still be available on the console and from the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAnomalies.html"> <code>GetAnomalies</code> </a> API.</p> */
	export interface AnomalySubscriptionFormProperties {
		SubscriptionArn: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		Threshold: FormControl<number | null | undefined>,

		/** Required */
		Frequency: FormControl<AnomalySubscriptionFrequency | null | undefined>,

		/** Required */
		SubscriptionName: FormControl<string | null | undefined>,
	}
	export function CreateAnomalySubscriptionFormGroup() {
		return new FormGroup<AnomalySubscriptionFormProperties>({
			SubscriptionArn: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			Threshold: new FormControl<number | null | undefined>(undefined),
			Frequency: new FormControl<AnomalySubscriptionFrequency | null | undefined>(undefined, [Validators.required]),
			SubscriptionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The recipient of <code>AnomalySubscription</code> notifications.  */
	export interface Subscriber {
		Address?: string;
		Type?: SubscriberType;
		Status?: SubscriberStatus;
	}

	/** The recipient of <code>AnomalySubscription</code> notifications.  */
	export interface SubscriberFormProperties {
		Address: FormControl<string | null | undefined>,
		Type: FormControl<SubscriberType | null | undefined>,
		Status: FormControl<SubscriberStatus | null | undefined>,
	}
	export function CreateSubscriberFormGroup() {
		return new FormGroup<SubscriberFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<SubscriberType | null | undefined>(undefined),
			Status: new FormControl<SubscriberStatus | null | undefined>(undefined),
		});

	}

	export enum SubscriberType { EMAIL = 'EMAIL', SNS = 'SNS' }

	export enum SubscriberStatus { CONFIRMED = 'CONFIRMED', DECLINED = 'DECLINED' }

	export enum AnomalySubscriptionFrequency { DAILY = 'DAILY', IMMEDIATE = 'IMMEDIATE', WEEKLY = 'WEEKLY' }

	export interface UnknownMonitorException {
	}
	export interface UnknownMonitorExceptionFormProperties {
	}
	export function CreateUnknownMonitorExceptionFormGroup() {
		return new FormGroup<UnknownMonitorExceptionFormProperties>({
		});

	}

	export interface CreateCostCategoryDefinitionResponse {
		CostCategoryArn?: string;
		EffectiveStart?: string;
	}
	export interface CreateCostCategoryDefinitionResponseFormProperties {
		CostCategoryArn: FormControl<string | null | undefined>,
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
		 * Min length: 1
		 * Max length: 50
		 */
		Name: string;
		EffectiveStart?: string;

		/**
		 * The rule schema version in this particular Cost Category.
		 * Required
		 */
		RuleVersion: CreateCostCategoryDefinitionRequestRuleVersion;

		/** Required */
		Rules: Array<CostCategoryRule>;

		/**
		 * The default value for the cost category.
		 * Min length: 1
		 * Max length: 50
		 */
		DefaultValue?: string | null;
		SplitChargeRules?: Array<CostCategorySplitChargeRule>;
		ResourceTags?: Array<ResourceTag>;
	}
	export interface CreateCostCategoryDefinitionRequestFormProperties {

		/**
		 * The unique name of the Cost Category.
		 * Required
		 * Min length: 1
		 * Max length: 50
		 */
		Name: FormControl<string | null | undefined>,
		EffectiveStart: FormControl<string | null | undefined>,

		/**
		 * The rule schema version in this particular Cost Category.
		 * Required
		 */
		RuleVersion: FormControl<CreateCostCategoryDefinitionRequestRuleVersion | null | undefined>,

		/**
		 * The default value for the cost category.
		 * Min length: 1
		 * Max length: 50
		 */
		DefaultValue: FormControl<string | null | undefined>,
	}
	export function CreateCreateCostCategoryDefinitionRequestFormGroup() {
		return new FormGroup<CreateCostCategoryDefinitionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
			EffectiveStart: new FormControl<string | null | undefined>(undefined),
			RuleVersion: new FormControl<CreateCostCategoryDefinitionRequestRuleVersion | null | undefined>(undefined, [Validators.required]),
			DefaultValue: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
		});

	}

	export enum CreateCostCategoryDefinitionRequestRuleVersion { 'CostCategoryExpression.v1' = 'CostCategoryExpression.v1' }


	/** Rules are processed in order. If there are multiple rules that match the line item, then the first rule to match is used to determine that Cost Category value. */
	export interface CostCategoryRule {

		/**
		 * The default value for the cost category.
		 * Min length: 1
		 * Max length: 50
		 */
		Value?: string | null;
		Rule?: Expression;
		InheritedValue?: CostCategoryInheritedValueDimension;
		Type?: CostCategoryRuleType;
	}

	/** Rules are processed in order. If there are multiple rules that match the line item, then the first rule to match is used to determine that Cost Category value. */
	export interface CostCategoryRuleFormProperties {

		/**
		 * The default value for the cost category.
		 * Min length: 1
		 * Max length: 50
		 */
		Value: FormControl<string | null | undefined>,
		Type: FormControl<CostCategoryRuleType | null | undefined>,
	}
	export function CreateCostCategoryRuleFormGroup() {
		return new FormGroup<CostCategoryRuleFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			Type: new FormControl<CostCategoryRuleType | null | undefined>(undefined),
		});

	}


	/** When you create or update a cost category, you can define the <code>CostCategoryRule</code> rule type as <code>INHERITED_VALUE</code>. This rule type adds the flexibility to define a rule that dynamically inherits the cost category value from the dimension value that's defined by <code>CostCategoryInheritedValueDimension</code>. For example, suppose that you want to dynamically group costs that are based on the value of a specific tag key. First, choose an inherited value rule type, and then choose the tag dimension and specify the tag key to use. */
	export interface CostCategoryInheritedValueDimension {
		DimensionName?: CostCategoryInheritedValueDimensionName;
		DimensionKey?: string;
	}

	/** When you create or update a cost category, you can define the <code>CostCategoryRule</code> rule type as <code>INHERITED_VALUE</code>. This rule type adds the flexibility to define a rule that dynamically inherits the cost category value from the dimension value that's defined by <code>CostCategoryInheritedValueDimension</code>. For example, suppose that you want to dynamically group costs that are based on the value of a specific tag key. First, choose an inherited value rule type, and then choose the tag dimension and specify the tag key to use. */
	export interface CostCategoryInheritedValueDimensionFormProperties {
		DimensionName: FormControl<CostCategoryInheritedValueDimensionName | null | undefined>,
		DimensionKey: FormControl<string | null | undefined>,
	}
	export function CreateCostCategoryInheritedValueDimensionFormGroup() {
		return new FormGroup<CostCategoryInheritedValueDimensionFormProperties>({
			DimensionName: new FormControl<CostCategoryInheritedValueDimensionName | null | undefined>(undefined),
			DimensionKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CostCategoryInheritedValueDimensionName { LINKED_ACCOUNT_NAME = 'LINKED_ACCOUNT_NAME', TAG = 'TAG' }

	export enum CostCategoryRuleType { REGULAR = 'REGULAR', INHERITED_VALUE = 'INHERITED_VALUE' }


	/** Use the split charge rule to split the cost of one Cost Category value across several other target values.  */
	export interface CostCategorySplitChargeRule {

		/** Required */
		Source: string;

		/** Required */
		Targets: Array<string>;

		/** Required */
		Method: CostCategorySplitChargeMethod;
		Parameters?: Array<CostCategorySplitChargeRuleParameter>;
	}

	/** Use the split charge rule to split the cost of one Cost Category value across several other target values.  */
	export interface CostCategorySplitChargeRuleFormProperties {

		/** Required */
		Source: FormControl<string | null | undefined>,

		/** Required */
		Method: FormControl<CostCategorySplitChargeMethod | null | undefined>,
	}
	export function CreateCostCategorySplitChargeRuleFormGroup() {
		return new FormGroup<CostCategorySplitChargeRuleFormProperties>({
			Source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Method: new FormControl<CostCategorySplitChargeMethod | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CostCategorySplitChargeMethod { FIXED = 'FIXED', PROPORTIONAL = 'PROPORTIONAL', EVEN = 'EVEN' }


	/** The parameters for a split charge method.  */
	export interface CostCategorySplitChargeRuleParameter {

		/** Required */
		Type: CostCategorySplitChargeRuleParameterType;

		/** Required */
		Values: Array<string>;
	}

	/** The parameters for a split charge method.  */
	export interface CostCategorySplitChargeRuleParameterFormProperties {

		/** Required */
		Type: FormControl<CostCategorySplitChargeRuleParameterType | null | undefined>,
	}
	export function CreateCostCategorySplitChargeRuleParameterFormGroup() {
		return new FormGroup<CostCategorySplitChargeRuleParameterFormProperties>({
			Type: new FormControl<CostCategorySplitChargeRuleParameterType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CostCategorySplitChargeRuleParameterType { ALLOCATION_PERCENTAGES = 'ALLOCATION_PERCENTAGES' }

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface DeleteAnomalyMonitorResponse {
	}
	export interface DeleteAnomalyMonitorResponseFormProperties {
	}
	export function CreateDeleteAnomalyMonitorResponseFormGroup() {
		return new FormGroup<DeleteAnomalyMonitorResponseFormProperties>({
		});

	}

	export interface DeleteAnomalyMonitorRequest {

		/** Required */
		MonitorArn: string;
	}
	export interface DeleteAnomalyMonitorRequestFormProperties {

		/** Required */
		MonitorArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAnomalyMonitorRequestFormGroup() {
		return new FormGroup<DeleteAnomalyMonitorRequestFormProperties>({
			MonitorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAnomalySubscriptionResponse {
	}
	export interface DeleteAnomalySubscriptionResponseFormProperties {
	}
	export function CreateDeleteAnomalySubscriptionResponseFormGroup() {
		return new FormGroup<DeleteAnomalySubscriptionResponseFormProperties>({
		});

	}

	export interface DeleteAnomalySubscriptionRequest {

		/** Required */
		SubscriptionArn: string;
	}
	export interface DeleteAnomalySubscriptionRequestFormProperties {

		/** Required */
		SubscriptionArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAnomalySubscriptionRequestFormGroup() {
		return new FormGroup<DeleteAnomalySubscriptionRequestFormProperties>({
			SubscriptionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UnknownSubscriptionException {
	}
	export interface UnknownSubscriptionExceptionFormProperties {
	}
	export function CreateUnknownSubscriptionExceptionFormGroup() {
		return new FormGroup<UnknownSubscriptionExceptionFormProperties>({
		});

	}

	export interface DeleteCostCategoryDefinitionResponse {
		CostCategoryArn?: string;
		EffectiveEnd?: string;
	}
	export interface DeleteCostCategoryDefinitionResponseFormProperties {
		CostCategoryArn: FormControl<string | null | undefined>,
		EffectiveEnd: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCostCategoryDefinitionResponseFormGroup() {
		return new FormGroup<DeleteCostCategoryDefinitionResponseFormProperties>({
			CostCategoryArn: new FormControl<string | null | undefined>(undefined),
			EffectiveEnd: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteCostCategoryDefinitionRequest {

		/** Required */
		CostCategoryArn: string;
	}
	export interface DeleteCostCategoryDefinitionRequestFormProperties {

		/** Required */
		CostCategoryArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCostCategoryDefinitionRequestFormGroup() {
		return new FormGroup<DeleteCostCategoryDefinitionRequestFormProperties>({
			CostCategoryArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		CostCategoryArn: string;

		/** Required */
		EffectiveStart: string;
		EffectiveEnd?: string;

		/**
		 * The unique name of the Cost Category.
		 * Required
		 * Min length: 1
		 * Max length: 50
		 */
		Name: string;

		/**
		 * The rule schema version in this particular Cost Category.
		 * Required
		 */
		RuleVersion: CreateCostCategoryDefinitionRequestRuleVersion;

		/** Required */
		Rules: Array<CostCategoryRule>;
		SplitChargeRules?: Array<CostCategorySplitChargeRule>;
		ProcessingStatus?: Array<CostCategoryProcessingStatus>;

		/**
		 * The default value for the cost category.
		 * Min length: 1
		 * Max length: 50
		 */
		DefaultValue?: string | null;
	}

	/** The structure of Cost Categories. This includes detailed metadata and the set of rules for the <code>CostCategory</code> object. */
	export interface CostCategoryFormProperties {

		/** Required */
		CostCategoryArn: FormControl<string | null | undefined>,

		/** Required */
		EffectiveStart: FormControl<string | null | undefined>,
		EffectiveEnd: FormControl<string | null | undefined>,

		/**
		 * The unique name of the Cost Category.
		 * Required
		 * Min length: 1
		 * Max length: 50
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The rule schema version in this particular Cost Category.
		 * Required
		 */
		RuleVersion: FormControl<CreateCostCategoryDefinitionRequestRuleVersion | null | undefined>,

		/**
		 * The default value for the cost category.
		 * Min length: 1
		 * Max length: 50
		 */
		DefaultValue: FormControl<string | null | undefined>,
	}
	export function CreateCostCategoryFormGroup() {
		return new FormGroup<CostCategoryFormProperties>({
			CostCategoryArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EffectiveStart: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EffectiveEnd: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
			RuleVersion: new FormControl<CreateCostCategoryDefinitionRequestRuleVersion | null | undefined>(undefined, [Validators.required]),
			DefaultValue: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
		});

	}


	/** The list of processing statuses for Cost Management products for a specific cost category.  */
	export interface CostCategoryProcessingStatus {
		Component?: CostCategoryStatusComponent;
		Status?: CostCategoryStatus;
	}

	/** The list of processing statuses for Cost Management products for a specific cost category.  */
	export interface CostCategoryProcessingStatusFormProperties {
		Component: FormControl<CostCategoryStatusComponent | null | undefined>,
		Status: FormControl<CostCategoryStatus | null | undefined>,
	}
	export function CreateCostCategoryProcessingStatusFormGroup() {
		return new FormGroup<CostCategoryProcessingStatusFormProperties>({
			Component: new FormControl<CostCategoryStatusComponent | null | undefined>(undefined),
			Status: new FormControl<CostCategoryStatus | null | undefined>(undefined),
		});

	}

	export enum CostCategoryStatusComponent { COST_EXPLORER = 'COST_EXPLORER' }

	export enum CostCategoryStatus { PROCESSING = 'PROCESSING', APPLIED = 'APPLIED' }

	export interface DescribeCostCategoryDefinitionRequest {

		/** Required */
		CostCategoryArn: string;
		EffectiveOn?: string;
	}
	export interface DescribeCostCategoryDefinitionRequestFormProperties {

		/** Required */
		CostCategoryArn: FormControl<string | null | undefined>,
		EffectiveOn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCostCategoryDefinitionRequestFormGroup() {
		return new FormGroup<DescribeCostCategoryDefinitionRequestFormProperties>({
			CostCategoryArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EffectiveOn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAnomaliesResponse {

		/** Required */
		Anomalies: Array<Anomaly>;
		NextPageToken?: string;
	}
	export interface GetAnomaliesResponseFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAnomaliesResponseFormGroup() {
		return new FormGroup<GetAnomaliesResponseFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An unusual cost pattern. This consists of the detailed metadata and the current status of the anomaly object.  */
	export interface Anomaly {

		/** Required */
		AnomalyId: string;
		AnomalyStartDate?: string;
		AnomalyEndDate?: string;
		DimensionValue?: string;
		RootCauses?: Array<RootCause>;

		/** Required */
		AnomalyScore: AnomalyScore;

		/** Required */
		Impact: Impact;

		/** Required */
		MonitorArn: string;
		Feedback?: AnomalyFeedbackType;
	}

	/** An unusual cost pattern. This consists of the detailed metadata and the current status of the anomaly object.  */
	export interface AnomalyFormProperties {

		/** Required */
		AnomalyId: FormControl<string | null | undefined>,
		AnomalyStartDate: FormControl<string | null | undefined>,
		AnomalyEndDate: FormControl<string | null | undefined>,
		DimensionValue: FormControl<string | null | undefined>,

		/** Required */
		MonitorArn: FormControl<string | null | undefined>,
		Feedback: FormControl<AnomalyFeedbackType | null | undefined>,
	}
	export function CreateAnomalyFormGroup() {
		return new FormGroup<AnomalyFormProperties>({
			AnomalyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AnomalyStartDate: new FormControl<string | null | undefined>(undefined),
			AnomalyEndDate: new FormControl<string | null | undefined>(undefined),
			DimensionValue: new FormControl<string | null | undefined>(undefined),
			MonitorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Feedback: new FormControl<AnomalyFeedbackType | null | undefined>(undefined),
		});

	}


	/** The combination of Amazon Web Service, linked account, linked account name, Region, and usage type where a cost anomaly is observed. The linked account name will only be available when the account name can be identified. */
	export interface RootCause {
		Service?: string;
		Region?: string;
		LinkedAccount?: string;
		UsageType?: string;
		LinkedAccountName?: string;
	}

	/** The combination of Amazon Web Service, linked account, linked account name, Region, and usage type where a cost anomaly is observed. The linked account name will only be available when the account name can be identified. */
	export interface RootCauseFormProperties {
		Service: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		LinkedAccount: FormControl<string | null | undefined>,
		UsageType: FormControl<string | null | undefined>,
		LinkedAccountName: FormControl<string | null | undefined>,
	}
	export function CreateRootCauseFormGroup() {
		return new FormGroup<RootCauseFormProperties>({
			Service: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			LinkedAccount: new FormControl<string | null | undefined>(undefined),
			UsageType: new FormControl<string | null | undefined>(undefined),
			LinkedAccountName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Quantifies the anomaly. The higher score means that it's more anomalous.  */
	export interface AnomalyScore {

		/** Required */
		MaxScore: number;

		/** Required */
		CurrentScore: number;
	}

	/** Quantifies the anomaly. The higher score means that it's more anomalous.  */
	export interface AnomalyScoreFormProperties {

		/** Required */
		MaxScore: FormControl<number | null | undefined>,

		/** Required */
		CurrentScore: FormControl<number | null | undefined>,
	}
	export function CreateAnomalyScoreFormGroup() {
		return new FormGroup<AnomalyScoreFormProperties>({
			MaxScore: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			CurrentScore: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The dollar value of the anomaly.  */
	export interface Impact {

		/** Required */
		MaxImpact: number;
		TotalImpact?: number | null;
		TotalActualSpend?: number | null;
		TotalExpectedSpend?: number | null;
		TotalImpactPercentage?: number | null;
	}

	/** The dollar value of the anomaly.  */
	export interface ImpactFormProperties {

		/** Required */
		MaxImpact: FormControl<number | null | undefined>,
		TotalImpact: FormControl<number | null | undefined>,
		TotalActualSpend: FormControl<number | null | undefined>,
		TotalExpectedSpend: FormControl<number | null | undefined>,
		TotalImpactPercentage: FormControl<number | null | undefined>,
	}
	export function CreateImpactFormGroup() {
		return new FormGroup<ImpactFormProperties>({
			MaxImpact: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TotalImpact: new FormControl<number | null | undefined>(undefined),
			TotalActualSpend: new FormControl<number | null | undefined>(undefined),
			TotalExpectedSpend: new FormControl<number | null | undefined>(undefined),
			TotalImpactPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AnomalyFeedbackType { YES = 'YES', NO = 'NO', PLANNED_ACTIVITY = 'PLANNED_ACTIVITY' }

	export interface GetAnomaliesRequest {
		MonitorArn?: string;

		/** Required */
		DateInterval: AnomalyDateInterval;
		Feedback?: AnomalyFeedbackType;
		TotalImpact?: TotalImpactFilter;
		NextPageToken?: string;
		MaxResults?: number | null;
	}
	export interface GetAnomaliesRequestFormProperties {
		MonitorArn: FormControl<string | null | undefined>,
		Feedback: FormControl<AnomalyFeedbackType | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetAnomaliesRequestFormGroup() {
		return new FormGroup<GetAnomaliesRequestFormProperties>({
			MonitorArn: new FormControl<string | null | undefined>(undefined),
			Feedback: new FormControl<AnomalyFeedbackType | null | undefined>(undefined),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The time period for an anomaly.  */
	export interface AnomalyDateInterval {

		/** Required */
		StartDate: string;
		EndDate?: string;
	}

	/** The time period for an anomaly.  */
	export interface AnomalyDateIntervalFormProperties {

		/** Required */
		StartDate: FormControl<string | null | undefined>,
		EndDate: FormControl<string | null | undefined>,
	}
	export function CreateAnomalyDateIntervalFormGroup() {
		return new FormGroup<AnomalyDateIntervalFormProperties>({
			StartDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EndDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters cost anomalies based on the total impact.  */
	export interface TotalImpactFilter {

		/** Required */
		NumericOperator: NumericOperator;

		/** Required */
		StartValue: number;
		EndValue?: number | null;
	}

	/** Filters cost anomalies based on the total impact.  */
	export interface TotalImpactFilterFormProperties {

		/** Required */
		NumericOperator: FormControl<NumericOperator | null | undefined>,

		/** Required */
		StartValue: FormControl<number | null | undefined>,
		EndValue: FormControl<number | null | undefined>,
	}
	export function CreateTotalImpactFilterFormGroup() {
		return new FormGroup<TotalImpactFilterFormProperties>({
			NumericOperator: new FormControl<NumericOperator | null | undefined>(undefined, [Validators.required]),
			StartValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			EndValue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum NumericOperator { EQUAL = 'EQUAL', GREATER_THAN_OR_EQUAL = 'GREATER_THAN_OR_EQUAL', LESS_THAN_OR_EQUAL = 'LESS_THAN_OR_EQUAL', GREATER_THAN = 'GREATER_THAN', LESS_THAN = 'LESS_THAN', BETWEEN = 'BETWEEN' }

	export interface InvalidNextTokenException {
	}
	export interface InvalidNextTokenExceptionFormProperties {
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
		});

	}

	export interface GetAnomalyMonitorsResponse {

		/** Required */
		AnomalyMonitors: Array<AnomalyMonitor>;
		NextPageToken?: string;
	}
	export interface GetAnomalyMonitorsResponseFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAnomalyMonitorsResponseFormGroup() {
		return new FormGroup<GetAnomalyMonitorsResponseFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAnomalyMonitorsRequest {
		MonitorArnList?: Array<string>;
		NextPageToken?: string;
		MaxResults?: number | null;
	}
	export interface GetAnomalyMonitorsRequestFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetAnomalyMonitorsRequestFormGroup() {
		return new FormGroup<GetAnomalyMonitorsRequestFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAnomalySubscriptionsResponse {

		/** Required */
		AnomalySubscriptions: Array<AnomalySubscription>;
		NextPageToken?: string;
	}
	export interface GetAnomalySubscriptionsResponseFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAnomalySubscriptionsResponseFormGroup() {
		return new FormGroup<GetAnomalySubscriptionsResponseFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAnomalySubscriptionsRequest {
		SubscriptionArnList?: Array<string>;
		MonitorArn?: string;
		NextPageToken?: string;
		MaxResults?: number | null;
	}
	export interface GetAnomalySubscriptionsRequestFormProperties {
		MonitorArn: FormControl<string | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetAnomalySubscriptionsRequestFormGroup() {
		return new FormGroup<GetAnomalySubscriptionsRequestFormProperties>({
			MonitorArn: new FormControl<string | null | undefined>(undefined),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetCostAndUsageResponse {
		NextPageToken?: string;
		GroupDefinitions?: Array<GroupDefinition>;
		ResultsByTime?: Array<ResultByTime>;
		DimensionValueAttributes?: Array<DimensionValuesWithAttributes>;
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
		Type?: GroupDefinitionType;
		Key?: string;
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

	export enum GroupDefinitionType { DIMENSION = 'DIMENSION', TAG = 'TAG', COST_CATEGORY = 'COST_CATEGORY' }


	/** The result that's associated with a time period. */
	export interface ResultByTime {
		TimePeriod?: DateInterval;
		Total?: Metrics;
		Groups?: Array<Group>;
		Estimated?: boolean | null;
	}

	/** The result that's associated with a time period. */
	export interface ResultByTimeFormProperties {
		Estimated: FormControl<boolean | null | undefined>,
	}
	export function CreateResultByTimeFormGroup() {
		return new FormGroup<ResultByTimeFormProperties>({
			Estimated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The time period of the request.  */
	export interface DateInterval {

		/** Required */
		Start: string;

		/** Required */
		End: string;
	}

	/** The time period of the request.  */
	export interface DateIntervalFormProperties {

		/** Required */
		Start: FormControl<string | null | undefined>,

		/** Required */
		End: FormControl<string | null | undefined>,
	}
	export function CreateDateIntervalFormGroup() {
		return new FormGroup<DateIntervalFormProperties>({
			Start: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			End: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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


	/** The metadata of a specific type that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values. */
	export interface DimensionValuesWithAttributes {
		Value?: string;
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

	export interface GetCostAndUsageRequest {

		/** Required */
		TimePeriod: DateInterval;

		/** Required */
		Granularity: Granularity;
		Filter?: Expression;

		/** Required */
		Metrics: Array<string>;
		GroupBy?: Array<GroupDefinition>;
		NextPageToken?: string;
	}
	export interface GetCostAndUsageRequestFormProperties {

		/** Required */
		Granularity: FormControl<Granularity | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCostAndUsageRequestFormGroup() {
		return new FormGroup<GetCostAndUsageRequestFormProperties>({
			Granularity: new FormControl<Granularity | null | undefined>(undefined, [Validators.required]),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Granularity { DAILY = 'DAILY', MONTHLY = 'MONTHLY', HOURLY = 'HOURLY' }

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

	export interface RequestChangedException {
	}
	export interface RequestChangedExceptionFormProperties {
	}
	export function CreateRequestChangedExceptionFormGroup() {
		return new FormGroup<RequestChangedExceptionFormProperties>({
		});

	}

	export interface GetCostAndUsageWithResourcesResponse {
		NextPageToken?: string;
		GroupDefinitions?: Array<GroupDefinition>;
		ResultsByTime?: Array<ResultByTime>;
		DimensionValueAttributes?: Array<DimensionValuesWithAttributes>;
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

		/** Required */
		TimePeriod: DateInterval;

		/** Required */
		Granularity: Granularity;

		/** Required */
		Filter: Expression;
		Metrics?: Array<string>;
		GroupBy?: Array<GroupDefinition>;
		NextPageToken?: string;
	}
	export interface GetCostAndUsageWithResourcesRequestFormProperties {

		/** Required */
		Granularity: FormControl<Granularity | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCostAndUsageWithResourcesRequestFormGroup() {
		return new FormGroup<GetCostAndUsageWithResourcesRequestFormProperties>({
			Granularity: new FormControl<Granularity | null | undefined>(undefined, [Validators.required]),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCostCategoriesResponse {
		NextPageToken?: string;
		CostCategoryNames?: Array<string>;
		CostCategoryValues?: Array<string>;

		/** Required */
		ReturnSize: number;

		/** Required */
		TotalSize: number;
	}
	export interface GetCostCategoriesResponseFormProperties {
		NextPageToken: FormControl<string | null | undefined>,

		/** Required */
		ReturnSize: FormControl<number | null | undefined>,

		/** Required */
		TotalSize: FormControl<number | null | undefined>,
	}
	export function CreateGetCostCategoriesResponseFormGroup() {
		return new FormGroup<GetCostCategoriesResponseFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
			ReturnSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TotalSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCostCategoriesRequest {
		SearchString?: string;

		/**
		 * The time period of the request.
		 * Required
		 */
		TimePeriod: DateInterval;

		/**
		 * The unique name of the Cost Category.
		 * Min length: 1
		 * Max length: 50
		 */
		CostCategoryName?: string | null;

		/** <p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with "a".</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note> */
		Filter?: Expression;
		SortBy?: Array<SortDefinition>;
		MaxResults?: number | null;
		NextPageToken?: string;
	}
	export interface GetCostCategoriesRequestFormProperties {
		SearchString: FormControl<string | null | undefined>,

		/**
		 * The unique name of the Cost Category.
		 * Min length: 1
		 * Max length: 50
		 */
		CostCategoryName: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCostCategoriesRequestFormGroup() {
		return new FormGroup<GetCostCategoriesRequestFormProperties>({
			SearchString: new FormControl<string | null | undefined>(undefined),
			CostCategoryName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details for how to sort the data. */
	export interface SortDefinition {

		/** Required */
		Key: string;
		SortOrder?: SortOrder;
	}

	/** The details for how to sort the data. */
	export interface SortDefinitionFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,
		SortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateSortDefinitionFormGroup() {
		return new FormGroup<SortDefinitionFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export enum SortOrder { ASCENDING = 'ASCENDING', DESCENDING = 'DESCENDING' }

	export interface GetCostForecastResponse {
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
		Amount?: string;
		Unit?: string;
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


	/** The forecast that's created for your query. */
	export interface ForecastResult {
		TimePeriod?: DateInterval;
		MeanValue?: string;
		PredictionIntervalLowerBound?: string;
		PredictionIntervalUpperBound?: string;
	}

	/** The forecast that's created for your query. */
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

		/** Required */
		TimePeriod: DateInterval;

		/** Required */
		Metric: Metric;

		/** Required */
		Granularity: Granularity;
		Filter?: Expression;
		PredictionIntervalLevel?: number | null;
	}
	export interface GetCostForecastRequestFormProperties {

		/** Required */
		Metric: FormControl<Metric | null | undefined>,

		/** Required */
		Granularity: FormControl<Granularity | null | undefined>,
		PredictionIntervalLevel: FormControl<number | null | undefined>,
	}
	export function CreateGetCostForecastRequestFormGroup() {
		return new FormGroup<GetCostForecastRequestFormProperties>({
			Metric: new FormControl<Metric | null | undefined>(undefined, [Validators.required]),
			Granularity: new FormControl<Granularity | null | undefined>(undefined, [Validators.required]),
			PredictionIntervalLevel: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Metric { BLENDED_COST = 'BLENDED_COST', UNBLENDED_COST = 'UNBLENDED_COST', AMORTIZED_COST = 'AMORTIZED_COST', NET_UNBLENDED_COST = 'NET_UNBLENDED_COST', NET_AMORTIZED_COST = 'NET_AMORTIZED_COST', USAGE_QUANTITY = 'USAGE_QUANTITY', NORMALIZED_USAGE_AMOUNT = 'NORMALIZED_USAGE_AMOUNT' }

	export interface GetDimensionValuesResponse {

		/** Required */
		DimensionValues: Array<DimensionValuesWithAttributes>;

		/** Required */
		ReturnSize: number;

		/** Required */
		TotalSize: number;
		NextPageToken?: string;
	}
	export interface GetDimensionValuesResponseFormProperties {

		/** Required */
		ReturnSize: FormControl<number | null | undefined>,

		/** Required */
		TotalSize: FormControl<number | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDimensionValuesResponseFormGroup() {
		return new FormGroup<GetDimensionValuesResponseFormProperties>({
			ReturnSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TotalSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDimensionValuesRequest {
		SearchString?: string;

		/** Required */
		TimePeriod: DateInterval;

		/** Required */
		Dimension: Dimension;
		Context?: Context;

		/** <p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with "a".</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note> */
		Filter?: Expression;
		SortBy?: Array<SortDefinition>;
		MaxResults?: number | null;
		NextPageToken?: string;
	}
	export interface GetDimensionValuesRequestFormProperties {
		SearchString: FormControl<string | null | undefined>,

		/** Required */
		Dimension: FormControl<Dimension | null | undefined>,
		Context: FormControl<Context | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDimensionValuesRequestFormGroup() {
		return new FormGroup<GetDimensionValuesRequestFormProperties>({
			SearchString: new FormControl<string | null | undefined>(undefined),
			Dimension: new FormControl<Dimension | null | undefined>(undefined, [Validators.required]),
			Context: new FormControl<Context | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Context { COST_AND_USAGE = 'COST_AND_USAGE', RESERVATIONS = 'RESERVATIONS', SAVINGS_PLANS = 'SAVINGS_PLANS' }

	export interface GetReservationCoverageResponse {

		/** Required */
		CoveragesByTime: Array<CoverageByTime>;
		Total?: Coverage;
		NextPageToken?: string;
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
		TimePeriod?: DateInterval;
		Groups?: Array<ReservationCoverageGroup>;
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
		CoverageHours?: CoverageHours;
		CoverageNormalizedUnits?: CoverageNormalizedUnits;
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
		OnDemandHours?: string;
		ReservedHours?: string;
		TotalRunningHours?: string;
		CoverageHoursPercentage?: string;
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


	/** <p>The amount of instance usage, in normalized units. You can use normalized units to see your EC2 usage for multiple sizes of instances in a uniform way. For example, suppose that you run an xlarge instance and a 2xlarge instance. If you run both instances for the same amount of time, the 2xlarge instance uses twice as much of your reservation as the xlarge instance, even though both instances show only one instance-hour. When you use normalized units instead of instance-hours, the xlarge instance used 8 normalized units, and the 2xlarge instance used 16 normalized units.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html">Modifying Reserved Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide for Linux Instances</i>.</p> */
	export interface CoverageNormalizedUnits {
		OnDemandNormalizedUnits?: string;
		ReservedNormalizedUnits?: string;
		TotalRunningNormalizedUnits?: string;
		CoverageNormalizedUnitsPercentage?: string;
	}

	/** <p>The amount of instance usage, in normalized units. You can use normalized units to see your EC2 usage for multiple sizes of instances in a uniform way. For example, suppose that you run an xlarge instance and a 2xlarge instance. If you run both instances for the same amount of time, the 2xlarge instance uses twice as much of your reservation as the xlarge instance, even though both instances show only one instance-hour. When you use normalized units instead of instance-hours, the xlarge instance used 8 normalized units, and the 2xlarge instance used 16 normalized units.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html">Modifying Reserved Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide for Linux Instances</i>.</p> */
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
		OnDemandCost?: string;
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

		/** Required */
		TimePeriod: DateInterval;
		GroupBy?: Array<GroupDefinition>;
		Granularity?: Granularity;
		Filter?: Expression;
		Metrics?: Array<string>;
		NextPageToken?: string;
		SortBy?: SortDefinition;
		MaxResults?: number | null;
	}

	/** You can use the following request parameters to query for how much of your instance usage a reservation covered. */
	export interface GetReservationCoverageRequestFormProperties {
		Granularity: FormControl<Granularity | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetReservationCoverageRequestFormGroup() {
		return new FormGroup<GetReservationCoverageRequestFormProperties>({
			Granularity: new FormControl<Granularity | null | undefined>(undefined),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetReservationPurchaseRecommendationResponse {
		Metadata?: ReservationPurchaseRecommendationMetadata;
		Recommendations?: Array<ReservationPurchaseRecommendation>;
		NextPageToken?: string;
	}
	export interface GetReservationPurchaseRecommendationResponseFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetReservationPurchaseRecommendationResponseFormGroup() {
		return new FormGroup<GetReservationPurchaseRecommendationResponseFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about this specific recommendation, such as the timestamp for when Amazon Web Services made a specific recommendation. */
	export interface ReservationPurchaseRecommendationMetadata {
		RecommendationId?: string;
		GenerationTimestamp?: string;
	}

	/** Information about this specific recommendation, such as the timestamp for when Amazon Web Services made a specific recommendation. */
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


	/** A specific reservation that Amazon Web Services recommends for purchase. */
	export interface ReservationPurchaseRecommendation {
		AccountScope?: AccountScope;
		LookbackPeriodInDays?: LookbackPeriodInDays;
		TermInYears?: TermInYears;
		PaymentOption?: PaymentOption;
		ServiceSpecification?: ServiceSpecification;
		RecommendationDetails?: Array<ReservationPurchaseRecommendationDetail>;
		RecommendationSummary?: ReservationPurchaseRecommendationSummary;
	}

	/** A specific reservation that Amazon Web Services recommends for purchase. */
	export interface ReservationPurchaseRecommendationFormProperties {
		AccountScope: FormControl<AccountScope | null | undefined>,
		LookbackPeriodInDays: FormControl<LookbackPeriodInDays | null | undefined>,
		TermInYears: FormControl<TermInYears | null | undefined>,
		PaymentOption: FormControl<PaymentOption | null | undefined>,
	}
	export function CreateReservationPurchaseRecommendationFormGroup() {
		return new FormGroup<ReservationPurchaseRecommendationFormProperties>({
			AccountScope: new FormControl<AccountScope | null | undefined>(undefined),
			LookbackPeriodInDays: new FormControl<LookbackPeriodInDays | null | undefined>(undefined),
			TermInYears: new FormControl<TermInYears | null | undefined>(undefined),
			PaymentOption: new FormControl<PaymentOption | null | undefined>(undefined),
		});

	}

	export enum AccountScope { PAYER = 'PAYER', LINKED = 'LINKED' }

	export enum LookbackPeriodInDays { SEVEN_DAYS = 'SEVEN_DAYS', THIRTY_DAYS = 'THIRTY_DAYS', SIXTY_DAYS = 'SIXTY_DAYS' }

	export enum TermInYears { ONE_YEAR = 'ONE_YEAR', THREE_YEARS = 'THREE_YEARS' }

	export enum PaymentOption { NO_UPFRONT = 'NO_UPFRONT', PARTIAL_UPFRONT = 'PARTIAL_UPFRONT', ALL_UPFRONT = 'ALL_UPFRONT', LIGHT_UTILIZATION = 'LIGHT_UTILIZATION', MEDIUM_UTILIZATION = 'MEDIUM_UTILIZATION', HEAVY_UTILIZATION = 'HEAVY_UTILIZATION' }


	/** Hardware specifications for the service that you want recommendations for. */
	export interface ServiceSpecification {
		EC2Specification?: EC2Specification;
	}

	/** Hardware specifications for the service that you want recommendations for. */
	export interface ServiceSpecificationFormProperties {
	}
	export function CreateServiceSpecificationFormGroup() {
		return new FormGroup<ServiceSpecificationFormProperties>({
		});

	}


	/** The Amazon EC2 hardware specifications that you want Amazon Web Services to provide recommendations for. */
	export interface EC2Specification {
		OfferingClass?: OfferingClass;
	}

	/** The Amazon EC2 hardware specifications that you want Amazon Web Services to provide recommendations for. */
	export interface EC2SpecificationFormProperties {
		OfferingClass: FormControl<OfferingClass | null | undefined>,
	}
	export function CreateEC2SpecificationFormGroup() {
		return new FormGroup<EC2SpecificationFormProperties>({
			OfferingClass: new FormControl<OfferingClass | null | undefined>(undefined),
		});

	}

	export enum OfferingClass { STANDARD = 'STANDARD', CONVERTIBLE = 'CONVERTIBLE' }


	/** Details about your recommended reservation purchase. */
	export interface ReservationPurchaseRecommendationDetail {
		AccountId?: string;
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


	/** Details about the instances that Amazon Web Services recommends that you purchase. */
	export interface InstanceDetails {
		EC2InstanceDetails?: EC2InstanceDetails;
		RDSInstanceDetails?: RDSInstanceDetails;
		RedshiftInstanceDetails?: RedshiftInstanceDetails;
		ElastiCacheInstanceDetails?: ElastiCacheInstanceDetails;
		ESInstanceDetails?: ESInstanceDetails;
	}

	/** Details about the instances that Amazon Web Services recommends that you purchase. */
	export interface InstanceDetailsFormProperties {
	}
	export function CreateInstanceDetailsFormGroup() {
		return new FormGroup<InstanceDetailsFormProperties>({
		});

	}


	/** Details about the Amazon EC2 instances that Amazon Web Services recommends that you purchase. */
	export interface EC2InstanceDetails {
		Family?: string;
		InstanceType?: string;
		Region?: string;
		AvailabilityZone?: string;
		Platform?: string;
		Tenancy?: string;
		CurrentGeneration?: boolean | null;
		SizeFlexEligible?: boolean | null;
	}

	/** Details about the Amazon EC2 instances that Amazon Web Services recommends that you purchase. */
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


	/** Details about the Amazon RDS instances that Amazon Web Services recommends that you purchase. */
	export interface RDSInstanceDetails {
		Family?: string;
		InstanceType?: string;
		Region?: string;
		DatabaseEngine?: string;
		DatabaseEdition?: string;
		DeploymentOption?: string;
		LicenseModel?: string;
		CurrentGeneration?: boolean | null;
		SizeFlexEligible?: boolean | null;
	}

	/** Details about the Amazon RDS instances that Amazon Web Services recommends that you purchase. */
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


	/** Details about the Amazon Redshift instances that Amazon Web Services recommends that you purchase. */
	export interface RedshiftInstanceDetails {
		Family?: string;
		NodeType?: string;
		Region?: string;
		CurrentGeneration?: boolean | null;
		SizeFlexEligible?: boolean | null;
	}

	/** Details about the Amazon Redshift instances that Amazon Web Services recommends that you purchase. */
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


	/** Details about the Amazon ElastiCache instances that Amazon Web Services recommends that you purchase. */
	export interface ElastiCacheInstanceDetails {
		Family?: string;
		NodeType?: string;
		Region?: string;
		ProductDescription?: string;
		CurrentGeneration?: boolean | null;
		SizeFlexEligible?: boolean | null;
	}

	/** Details about the Amazon ElastiCache instances that Amazon Web Services recommends that you purchase. */
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


	/** Details about the Amazon OpenSearch Service instances that Amazon Web Services recommends that you purchase. */
	export interface ESInstanceDetails {
		InstanceClass?: string;
		InstanceSize?: string;
		Region?: string;
		CurrentGeneration?: boolean | null;
		SizeFlexEligible?: boolean | null;
	}

	/** Details about the Amazon OpenSearch Service instances that Amazon Web Services recommends that you purchase. */
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


	/** A summary about this recommendation, such as the currency code, the amount that Amazon Web Services estimates that you could save, and the total amount of reservation to purchase. */
	export interface ReservationPurchaseRecommendationSummary {
		TotalEstimatedMonthlySavingsAmount?: string;
		TotalEstimatedMonthlySavingsPercentage?: string;
		CurrencyCode?: string;
	}

	/** A summary about this recommendation, such as the currency code, the amount that Amazon Web Services estimates that you could save, and the total amount of reservation to purchase. */
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
		AccountId?: string;

		/** Required */
		Service: string;

		/** <p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with "a".</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note> */
		Filter?: Expression;
		AccountScope?: AccountScope;
		LookbackPeriodInDays?: LookbackPeriodInDays;
		TermInYears?: TermInYears;
		PaymentOption?: PaymentOption;
		ServiceSpecification?: ServiceSpecification;
		PageSize?: number | null;
		NextPageToken?: string;
	}
	export interface GetReservationPurchaseRecommendationRequestFormProperties {
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		Service: FormControl<string | null | undefined>,
		AccountScope: FormControl<AccountScope | null | undefined>,
		LookbackPeriodInDays: FormControl<LookbackPeriodInDays | null | undefined>,
		TermInYears: FormControl<TermInYears | null | undefined>,
		PaymentOption: FormControl<PaymentOption | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetReservationPurchaseRecommendationRequestFormGroup() {
		return new FormGroup<GetReservationPurchaseRecommendationRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			Service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccountScope: new FormControl<AccountScope | null | undefined>(undefined),
			LookbackPeriodInDays: new FormControl<LookbackPeriodInDays | null | undefined>(undefined),
			TermInYears: new FormControl<TermInYears | null | undefined>(undefined),
			PaymentOption: new FormControl<PaymentOption | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetReservationUtilizationResponse {

		/** Required */
		UtilizationsByTime: Array<UtilizationByTime>;
		Total?: ReservationAggregates;
		NextPageToken?: string;
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
		TimePeriod?: DateInterval;
		Groups?: Array<ReservationUtilizationGroup>;
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
		Key?: string;
		Value?: string;
		Attributes?: Attributes;
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
		RICostForUnusedHours?: string;
		RealizedSavings?: string;
		UnrealizedSavings?: string;
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
		RICostForUnusedHours: FormControl<string | null | undefined>,
		RealizedSavings: FormControl<string | null | undefined>,
		UnrealizedSavings: FormControl<string | null | undefined>,
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
			RICostForUnusedHours: new FormControl<string | null | undefined>(undefined),
			RealizedSavings: new FormControl<string | null | undefined>(undefined),
			UnrealizedSavings: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetReservationUtilizationRequest {

		/** Required */
		TimePeriod: DateInterval;
		GroupBy?: Array<GroupDefinition>;
		Granularity?: Granularity;
		Filter?: Expression;
		SortBy?: SortDefinition;
		NextPageToken?: string;
		MaxResults?: number | null;
	}
	export interface GetReservationUtilizationRequestFormProperties {
		Granularity: FormControl<Granularity | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetReservationUtilizationRequestFormGroup() {
		return new FormGroup<GetReservationUtilizationRequestFormProperties>({
			Granularity: new FormControl<Granularity | null | undefined>(undefined),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetRightsizingRecommendationResponse {
		Metadata?: RightsizingRecommendationMetadata;
		Summary?: RightsizingRecommendationSummary;
		RightsizingRecommendations?: Array<RightsizingRecommendation>;
		NextPageToken?: string;
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
		RecommendationId?: string;
		GenerationTimestamp?: string;
		LookbackPeriodInDays?: LookbackPeriodInDays;
		AdditionalMetadata?: string;
	}

	/** Metadata for this recommendation set. */
	export interface RightsizingRecommendationMetadataFormProperties {
		RecommendationId: FormControl<string | null | undefined>,
		GenerationTimestamp: FormControl<string | null | undefined>,
		LookbackPeriodInDays: FormControl<LookbackPeriodInDays | null | undefined>,
		AdditionalMetadata: FormControl<string | null | undefined>,
	}
	export function CreateRightsizingRecommendationMetadataFormGroup() {
		return new FormGroup<RightsizingRecommendationMetadataFormProperties>({
			RecommendationId: new FormControl<string | null | undefined>(undefined),
			GenerationTimestamp: new FormControl<string | null | undefined>(undefined),
			LookbackPeriodInDays: new FormControl<LookbackPeriodInDays | null | undefined>(undefined),
			AdditionalMetadata: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of rightsizing recommendations  */
	export interface RightsizingRecommendationSummary {
		TotalRecommendationCount?: string;
		EstimatedTotalMonthlySavingsAmount?: string;
		SavingsCurrencyCode?: string;
		SavingsPercentage?: string;
	}

	/** The summary of rightsizing recommendations  */
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
		AccountId?: string;
		CurrentInstance?: CurrentInstance;
		RightsizingType?: RightsizingType;
		ModifyRecommendationDetail?: ModifyRecommendationDetail;
		TerminateRecommendationDetail?: TerminateRecommendationDetail;
		FindingReasonCodes?: Array<FindingReasonCode>;
	}

	/** Recommendations to rightsize resources. */
	export interface RightsizingRecommendationFormProperties {
		AccountId: FormControl<string | null | undefined>,
		RightsizingType: FormControl<RightsizingType | null | undefined>,
	}
	export function CreateRightsizingRecommendationFormGroup() {
		return new FormGroup<RightsizingRecommendationFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			RightsizingType: new FormControl<RightsizingType | null | undefined>(undefined),
		});

	}


	/** Context about the current instance. */
	export interface CurrentInstance {
		ResourceId?: string;
		InstanceName?: string;
		Tags?: Array<TagValues>;
		ResourceDetails?: ResourceDetails;
		ResourceUtilization?: ResourceUtilization;
		ReservationCoveredHoursInLookbackPeriod?: string;
		SavingsPlansCoveredHoursInLookbackPeriod?: string;
		OnDemandHoursInLookbackPeriod?: string;
		TotalRunningHoursInLookbackPeriod?: string;
		MonthlyCost?: string;
		CurrencyCode?: string;
	}

	/** Context about the current instance. */
	export interface CurrentInstanceFormProperties {
		ResourceId: FormControl<string | null | undefined>,
		InstanceName: FormControl<string | null | undefined>,
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
			InstanceName: new FormControl<string | null | undefined>(undefined),
			ReservationCoveredHoursInLookbackPeriod: new FormControl<string | null | undefined>(undefined),
			SavingsPlansCoveredHoursInLookbackPeriod: new FormControl<string | null | undefined>(undefined),
			OnDemandHoursInLookbackPeriod: new FormControl<string | null | undefined>(undefined),
			TotalRunningHoursInLookbackPeriod: new FormControl<string | null | undefined>(undefined),
			MonthlyCost: new FormControl<string | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for the resource. */
	export interface ResourceDetails {
		EC2ResourceDetails?: EC2ResourceDetails;
	}

	/** Details for the resource. */
	export interface ResourceDetailsFormProperties {
	}
	export function CreateResourceDetailsFormGroup() {
		return new FormGroup<ResourceDetailsFormProperties>({
		});

	}


	/** Details on the Amazon EC2 Resource. */
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

	/** Details on the Amazon EC2 Resource. */
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
		EC2ResourceUtilization?: EC2ResourceUtilization;
	}

	/** Resource utilization of current resource.  */
	export interface ResourceUtilizationFormProperties {
	}
	export function CreateResourceUtilizationFormGroup() {
		return new FormGroup<ResourceUtilizationFormProperties>({
		});

	}


	/** Utilization metrics for the instance.  */
	export interface EC2ResourceUtilization {
		MaxCpuUtilizationPercentage?: string;
		MaxMemoryUtilizationPercentage?: string;
		MaxStorageUtilizationPercentage?: string;
		EBSResourceUtilization?: EBSResourceUtilization;
		DiskResourceUtilization?: DiskResourceUtilization;
		NetworkResourceUtilization?: NetworkResourceUtilization;
	}

	/** Utilization metrics for the instance.  */
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


	/** The EBS field that contains a list of EBS metrics that are associated with the current instance.  */
	export interface EBSResourceUtilization {
		EbsReadOpsPerSecond?: string;
		EbsWriteOpsPerSecond?: string;
		EbsReadBytesPerSecond?: string;
		EbsWriteBytesPerSecond?: string;
	}

	/** The EBS field that contains a list of EBS metrics that are associated with the current instance.  */
	export interface EBSResourceUtilizationFormProperties {
		EbsReadOpsPerSecond: FormControl<string | null | undefined>,
		EbsWriteOpsPerSecond: FormControl<string | null | undefined>,
		EbsReadBytesPerSecond: FormControl<string | null | undefined>,
		EbsWriteBytesPerSecond: FormControl<string | null | undefined>,
	}
	export function CreateEBSResourceUtilizationFormGroup() {
		return new FormGroup<EBSResourceUtilizationFormProperties>({
			EbsReadOpsPerSecond: new FormControl<string | null | undefined>(undefined),
			EbsWriteOpsPerSecond: new FormControl<string | null | undefined>(undefined),
			EbsReadBytesPerSecond: new FormControl<string | null | undefined>(undefined),
			EbsWriteBytesPerSecond: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The field that contains a list of disk (local storage) metrics that are associated with the current instance.  */
	export interface DiskResourceUtilization {
		DiskReadOpsPerSecond?: string;
		DiskWriteOpsPerSecond?: string;
		DiskReadBytesPerSecond?: string;
		DiskWriteBytesPerSecond?: string;
	}

	/** The field that contains a list of disk (local storage) metrics that are associated with the current instance.  */
	export interface DiskResourceUtilizationFormProperties {
		DiskReadOpsPerSecond: FormControl<string | null | undefined>,
		DiskWriteOpsPerSecond: FormControl<string | null | undefined>,
		DiskReadBytesPerSecond: FormControl<string | null | undefined>,
		DiskWriteBytesPerSecond: FormControl<string | null | undefined>,
	}
	export function CreateDiskResourceUtilizationFormGroup() {
		return new FormGroup<DiskResourceUtilizationFormProperties>({
			DiskReadOpsPerSecond: new FormControl<string | null | undefined>(undefined),
			DiskWriteOpsPerSecond: new FormControl<string | null | undefined>(undefined),
			DiskReadBytesPerSecond: new FormControl<string | null | undefined>(undefined),
			DiskWriteBytesPerSecond: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The network field that contains a list of network metrics that are associated with the current instance.  */
	export interface NetworkResourceUtilization {
		NetworkInBytesPerSecond?: string;
		NetworkOutBytesPerSecond?: string;
		NetworkPacketsInPerSecond?: string;
		NetworkPacketsOutPerSecond?: string;
	}

	/** The network field that contains a list of network metrics that are associated with the current instance.  */
	export interface NetworkResourceUtilizationFormProperties {
		NetworkInBytesPerSecond: FormControl<string | null | undefined>,
		NetworkOutBytesPerSecond: FormControl<string | null | undefined>,
		NetworkPacketsInPerSecond: FormControl<string | null | undefined>,
		NetworkPacketsOutPerSecond: FormControl<string | null | undefined>,
	}
	export function CreateNetworkResourceUtilizationFormGroup() {
		return new FormGroup<NetworkResourceUtilizationFormProperties>({
			NetworkInBytesPerSecond: new FormControl<string | null | undefined>(undefined),
			NetworkOutBytesPerSecond: new FormControl<string | null | undefined>(undefined),
			NetworkPacketsInPerSecond: new FormControl<string | null | undefined>(undefined),
			NetworkPacketsOutPerSecond: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RightsizingType { TERMINATE = 'TERMINATE', MODIFY = 'MODIFY' }


	/** Details for the modification recommendation. */
	export interface ModifyRecommendationDetail {
		TargetInstances?: Array<TargetInstance>;
	}

	/** Details for the modification recommendation. */
	export interface ModifyRecommendationDetailFormProperties {
	}
	export function CreateModifyRecommendationDetailFormGroup() {
		return new FormGroup<ModifyRecommendationDetailFormProperties>({
		});

	}


	/** Details on recommended instance. */
	export interface TargetInstance {
		EstimatedMonthlyCost?: string;
		EstimatedMonthlySavings?: string;
		CurrencyCode?: string;
		DefaultTargetInstance?: boolean | null;
		ResourceDetails?: ResourceDetails;
		ExpectedResourceUtilization?: ResourceUtilization;
		PlatformDifferences?: Array<PlatformDifference>;
	}

	/** Details on recommended instance. */
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

	export enum PlatformDifference { HYPERVISOR = 'HYPERVISOR', NETWORK_INTERFACE = 'NETWORK_INTERFACE', STORAGE_INTERFACE = 'STORAGE_INTERFACE', INSTANCE_STORE_AVAILABILITY = 'INSTANCE_STORE_AVAILABILITY', VIRTUALIZATION_TYPE = 'VIRTUALIZATION_TYPE' }


	/** Details on termination recommendation.  */
	export interface TerminateRecommendationDetail {
		EstimatedMonthlySavings?: string;
		CurrencyCode?: string;
	}

	/** Details on termination recommendation.  */
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

	export enum FindingReasonCode { CPU_OVER_PROVISIONED = 'CPU_OVER_PROVISIONED', CPU_UNDER_PROVISIONED = 'CPU_UNDER_PROVISIONED', MEMORY_OVER_PROVISIONED = 'MEMORY_OVER_PROVISIONED', MEMORY_UNDER_PROVISIONED = 'MEMORY_UNDER_PROVISIONED', EBS_THROUGHPUT_OVER_PROVISIONED = 'EBS_THROUGHPUT_OVER_PROVISIONED', EBS_THROUGHPUT_UNDER_PROVISIONED = 'EBS_THROUGHPUT_UNDER_PROVISIONED', EBS_IOPS_OVER_PROVISIONED = 'EBS_IOPS_OVER_PROVISIONED', EBS_IOPS_UNDER_PROVISIONED = 'EBS_IOPS_UNDER_PROVISIONED', NETWORK_BANDWIDTH_OVER_PROVISIONED = 'NETWORK_BANDWIDTH_OVER_PROVISIONED', NETWORK_BANDWIDTH_UNDER_PROVISIONED = 'NETWORK_BANDWIDTH_UNDER_PROVISIONED', NETWORK_PPS_OVER_PROVISIONED = 'NETWORK_PPS_OVER_PROVISIONED', NETWORK_PPS_UNDER_PROVISIONED = 'NETWORK_PPS_UNDER_PROVISIONED', DISK_IOPS_OVER_PROVISIONED = 'DISK_IOPS_OVER_PROVISIONED', DISK_IOPS_UNDER_PROVISIONED = 'DISK_IOPS_UNDER_PROVISIONED', DISK_THROUGHPUT_OVER_PROVISIONED = 'DISK_THROUGHPUT_OVER_PROVISIONED', DISK_THROUGHPUT_UNDER_PROVISIONED = 'DISK_THROUGHPUT_UNDER_PROVISIONED' }


	/** You can use <code>RightsizingRecommendationConfiguration</code> to customize recommendations across two attributes. You can choose to view recommendations for instances within the same instance families or across different instance families. You can also choose to view your estimated savings that are associated with recommendations with consideration of existing Savings Plans or Reserved Instance (RI) benefits, or neither.  */
	export interface RightsizingRecommendationConfiguration {

		/** Required */
		RecommendationTarget: RecommendationTarget;

		/** Required */
		BenefitsConsidered: boolean;
	}

	/** You can use <code>RightsizingRecommendationConfiguration</code> to customize recommendations across two attributes. You can choose to view recommendations for instances within the same instance families or across different instance families. You can also choose to view your estimated savings that are associated with recommendations with consideration of existing Savings Plans or Reserved Instance (RI) benefits, or neither.  */
	export interface RightsizingRecommendationConfigurationFormProperties {

		/** Required */
		RecommendationTarget: FormControl<RecommendationTarget | null | undefined>,

		/** Required */
		BenefitsConsidered: FormControl<boolean | null | undefined>,
	}
	export function CreateRightsizingRecommendationConfigurationFormGroup() {
		return new FormGroup<RightsizingRecommendationConfigurationFormProperties>({
			RecommendationTarget: new FormControl<RecommendationTarget | null | undefined>(undefined, [Validators.required]),
			BenefitsConsidered: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RecommendationTarget { SAME_INSTANCE_FAMILY = 'SAME_INSTANCE_FAMILY', CROSS_INSTANCE_FAMILY = 'CROSS_INSTANCE_FAMILY' }

	export interface GetRightsizingRecommendationRequest {

		/** <p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with "a".</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note> */
		Filter?: Expression;
		Configuration?: RightsizingRecommendationConfiguration;

		/** Required */
		Service: string;
		PageSize?: number | null;
		NextPageToken?: string;
	}
	export interface GetRightsizingRecommendationRequestFormProperties {

		/** Required */
		Service: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetRightsizingRecommendationRequestFormGroup() {
		return new FormGroup<GetRightsizingRecommendationRequestFormProperties>({
			Service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PageSize: new FormControl<number | null | undefined>(undefined),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSavingsPlanPurchaseRecommendationDetailsResponse {
		RecommendationDetailId?: string;
		RecommendationDetailData?: RecommendationDetailData;
	}
	export interface GetSavingsPlanPurchaseRecommendationDetailsResponseFormProperties {
		RecommendationDetailId: FormControl<string | null | undefined>,
	}
	export function CreateGetSavingsPlanPurchaseRecommendationDetailsResponseFormGroup() {
		return new FormGroup<GetSavingsPlanPurchaseRecommendationDetailsResponseFormProperties>({
			RecommendationDetailId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details and metrics for the given recommendation. */
	export interface RecommendationDetailData {
		AccountScope?: AccountScope;
		LookbackPeriodInDays?: LookbackPeriodInDays;
		SavingsPlansType?: SupportedSavingsPlansType;
		TermInYears?: TermInYears;
		PaymentOption?: PaymentOption;
		AccountId?: string;
		CurrencyCode?: string;
		InstanceFamily?: string;
		Region?: string;
		OfferingId?: string;

		/**
		 * The period of time that you want the usage and costs for.
		 * Min length: 20
		 * Max length: 25
		 */
		GenerationTimestamp?: string | null;

		/**
		 * The period of time that you want the usage and costs for.
		 * Min length: 20
		 * Max length: 25
		 */
		LatestUsageTimestamp?: string | null;
		CurrentAverageHourlyOnDemandSpend?: string;
		CurrentMaximumHourlyOnDemandSpend?: string;
		CurrentMinimumHourlyOnDemandSpend?: string;
		EstimatedAverageUtilization?: string;
		EstimatedMonthlySavingsAmount?: string;
		EstimatedOnDemandCost?: string;
		EstimatedOnDemandCostWithCurrentCommitment?: string;
		EstimatedROI?: string;
		EstimatedSPCost?: string;
		EstimatedSavingsAmount?: string;
		EstimatedSavingsPercentage?: string;
		ExistingHourlyCommitment?: string;
		HourlyCommitmentToPurchase?: string;
		UpfrontCost?: string;
		CurrentAverageCoverage?: string;
		EstimatedAverageCoverage?: string;
		MetricsOverLookbackPeriod?: Array<RecommendationDetailHourlyMetrics>;
	}

	/** The details and metrics for the given recommendation. */
	export interface RecommendationDetailDataFormProperties {
		AccountScope: FormControl<AccountScope | null | undefined>,
		LookbackPeriodInDays: FormControl<LookbackPeriodInDays | null | undefined>,
		SavingsPlansType: FormControl<SupportedSavingsPlansType | null | undefined>,
		TermInYears: FormControl<TermInYears | null | undefined>,
		PaymentOption: FormControl<PaymentOption | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		CurrencyCode: FormControl<string | null | undefined>,
		InstanceFamily: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		OfferingId: FormControl<string | null | undefined>,

		/**
		 * The period of time that you want the usage and costs for.
		 * Min length: 20
		 * Max length: 25
		 */
		GenerationTimestamp: FormControl<string | null | undefined>,

		/**
		 * The period of time that you want the usage and costs for.
		 * Min length: 20
		 * Max length: 25
		 */
		LatestUsageTimestamp: FormControl<string | null | undefined>,
		CurrentAverageHourlyOnDemandSpend: FormControl<string | null | undefined>,
		CurrentMaximumHourlyOnDemandSpend: FormControl<string | null | undefined>,
		CurrentMinimumHourlyOnDemandSpend: FormControl<string | null | undefined>,
		EstimatedAverageUtilization: FormControl<string | null | undefined>,
		EstimatedMonthlySavingsAmount: FormControl<string | null | undefined>,
		EstimatedOnDemandCost: FormControl<string | null | undefined>,
		EstimatedOnDemandCostWithCurrentCommitment: FormControl<string | null | undefined>,
		EstimatedROI: FormControl<string | null | undefined>,
		EstimatedSPCost: FormControl<string | null | undefined>,
		EstimatedSavingsAmount: FormControl<string | null | undefined>,
		EstimatedSavingsPercentage: FormControl<string | null | undefined>,
		ExistingHourlyCommitment: FormControl<string | null | undefined>,
		HourlyCommitmentToPurchase: FormControl<string | null | undefined>,
		UpfrontCost: FormControl<string | null | undefined>,
		CurrentAverageCoverage: FormControl<string | null | undefined>,
		EstimatedAverageCoverage: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationDetailDataFormGroup() {
		return new FormGroup<RecommendationDetailDataFormProperties>({
			AccountScope: new FormControl<AccountScope | null | undefined>(undefined),
			LookbackPeriodInDays: new FormControl<LookbackPeriodInDays | null | undefined>(undefined),
			SavingsPlansType: new FormControl<SupportedSavingsPlansType | null | undefined>(undefined),
			TermInYears: new FormControl<TermInYears | null | undefined>(undefined),
			PaymentOption: new FormControl<PaymentOption | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			InstanceFamily: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			OfferingId: new FormControl<string | null | undefined>(undefined),
			GenerationTimestamp: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(25), Validators.pattern('^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$')]),
			LatestUsageTimestamp: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(25), Validators.pattern('^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$')]),
			CurrentAverageHourlyOnDemandSpend: new FormControl<string | null | undefined>(undefined),
			CurrentMaximumHourlyOnDemandSpend: new FormControl<string | null | undefined>(undefined),
			CurrentMinimumHourlyOnDemandSpend: new FormControl<string | null | undefined>(undefined),
			EstimatedAverageUtilization: new FormControl<string | null | undefined>(undefined),
			EstimatedMonthlySavingsAmount: new FormControl<string | null | undefined>(undefined),
			EstimatedOnDemandCost: new FormControl<string | null | undefined>(undefined),
			EstimatedOnDemandCostWithCurrentCommitment: new FormControl<string | null | undefined>(undefined),
			EstimatedROI: new FormControl<string | null | undefined>(undefined),
			EstimatedSPCost: new FormControl<string | null | undefined>(undefined),
			EstimatedSavingsAmount: new FormControl<string | null | undefined>(undefined),
			EstimatedSavingsPercentage: new FormControl<string | null | undefined>(undefined),
			ExistingHourlyCommitment: new FormControl<string | null | undefined>(undefined),
			HourlyCommitmentToPurchase: new FormControl<string | null | undefined>(undefined),
			UpfrontCost: new FormControl<string | null | undefined>(undefined),
			CurrentAverageCoverage: new FormControl<string | null | undefined>(undefined),
			EstimatedAverageCoverage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SupportedSavingsPlansType { COMPUTE_SP = 'COMPUTE_SP', EC2_INSTANCE_SP = 'EC2_INSTANCE_SP', SAGEMAKER_SP = 'SAGEMAKER_SP' }


	/** Contains the hourly metrics for the given recommendation over the lookback period.  */
	export interface RecommendationDetailHourlyMetrics {

		/**
		 * The period of time that you want the usage and costs for.
		 * Min length: 20
		 * Max length: 25
		 */
		StartTime?: string | null;
		EstimatedOnDemandCost?: string;
		CurrentCoverage?: string;
		EstimatedCoverage?: string;
		EstimatedNewCommitmentUtilization?: string;
	}

	/** Contains the hourly metrics for the given recommendation over the lookback period.  */
	export interface RecommendationDetailHourlyMetricsFormProperties {

		/**
		 * The period of time that you want the usage and costs for.
		 * Min length: 20
		 * Max length: 25
		 */
		StartTime: FormControl<string | null | undefined>,
		EstimatedOnDemandCost: FormControl<string | null | undefined>,
		CurrentCoverage: FormControl<string | null | undefined>,
		EstimatedCoverage: FormControl<string | null | undefined>,
		EstimatedNewCommitmentUtilization: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationDetailHourlyMetricsFormGroup() {
		return new FormGroup<RecommendationDetailHourlyMetricsFormProperties>({
			StartTime: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(25), Validators.pattern('^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$')]),
			EstimatedOnDemandCost: new FormControl<string | null | undefined>(undefined),
			CurrentCoverage: new FormControl<string | null | undefined>(undefined),
			EstimatedCoverage: new FormControl<string | null | undefined>(undefined),
			EstimatedNewCommitmentUtilization: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSavingsPlanPurchaseRecommendationDetailsRequest {

		/** Required */
		RecommendationDetailId: string;
	}
	export interface GetSavingsPlanPurchaseRecommendationDetailsRequestFormProperties {

		/** Required */
		RecommendationDetailId: FormControl<string | null | undefined>,
	}
	export function CreateGetSavingsPlanPurchaseRecommendationDetailsRequestFormGroup() {
		return new FormGroup<GetSavingsPlanPurchaseRecommendationDetailsRequestFormProperties>({
			RecommendationDetailId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSavingsPlansCoverageResponse {

		/** Required */
		SavingsPlansCoverages: Array<SavingsPlansCoverage>;
		NextToken?: string;
	}
	export interface GetSavingsPlansCoverageResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetSavingsPlansCoverageResponseFormGroup() {
		return new FormGroup<GetSavingsPlansCoverageResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The amount of Savings Plans eligible usage that's covered by Savings Plans. All calculations consider the On-Demand equivalent of your Savings Plans usage. */
	export interface SavingsPlansCoverage {
		Attributes?: Attributes;
		Coverage?: SavingsPlansCoverageData;

		/** The time period of the request. */
		TimePeriod?: DateInterval;
	}

	/** The amount of Savings Plans eligible usage that's covered by Savings Plans. All calculations consider the On-Demand equivalent of your Savings Plans usage. */
	export interface SavingsPlansCoverageFormProperties {
	}
	export function CreateSavingsPlansCoverageFormGroup() {
		return new FormGroup<SavingsPlansCoverageFormProperties>({
		});

	}


	/** Specific coverage percentage, On-Demand costs, and spend covered by Savings Plans, and total Savings Plans costs for an account. */
	export interface SavingsPlansCoverageData {
		SpendCoveredBySavingsPlans?: string;
		OnDemandCost?: string;
		TotalCost?: string;
		CoveragePercentage?: string;
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

		/** Required */
		TimePeriod: DateInterval;
		GroupBy?: Array<GroupDefinition>;
		Granularity?: Granularity;
		Filter?: Expression;
		Metrics?: Array<string>;
		NextToken?: string;
		MaxResults?: number | null;
		SortBy?: SortDefinition;
	}
	export interface GetSavingsPlansCoverageRequestFormProperties {
		Granularity: FormControl<Granularity | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetSavingsPlansCoverageRequestFormGroup() {
		return new FormGroup<GetSavingsPlansCoverageRequestFormProperties>({
			Granularity: new FormControl<Granularity | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetSavingsPlansPurchaseRecommendationResponse {
		Metadata?: SavingsPlansPurchaseRecommendationMetadata;
		SavingsPlansPurchaseRecommendation?: SavingsPlansPurchaseRecommendation;
		NextPageToken?: string;
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
		RecommendationId?: string;
		GenerationTimestamp?: string;
		AdditionalMetadata?: string;
	}

	/** Metadata about your Savings Plans Purchase Recommendations. */
	export interface SavingsPlansPurchaseRecommendationMetadataFormProperties {
		RecommendationId: FormControl<string | null | undefined>,
		GenerationTimestamp: FormControl<string | null | undefined>,
		AdditionalMetadata: FormControl<string | null | undefined>,
	}
	export function CreateSavingsPlansPurchaseRecommendationMetadataFormGroup() {
		return new FormGroup<SavingsPlansPurchaseRecommendationMetadataFormProperties>({
			RecommendationId: new FormControl<string | null | undefined>(undefined),
			GenerationTimestamp: new FormControl<string | null | undefined>(undefined),
			AdditionalMetadata: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains your request parameters, Savings Plan Recommendations Summary, and Details. */
	export interface SavingsPlansPurchaseRecommendation {
		AccountScope?: AccountScope;
		SavingsPlansType?: SupportedSavingsPlansType;
		TermInYears?: TermInYears;
		PaymentOption?: PaymentOption;
		LookbackPeriodInDays?: LookbackPeriodInDays;
		SavingsPlansPurchaseRecommendationDetails?: Array<SavingsPlansPurchaseRecommendationDetail>;
		SavingsPlansPurchaseRecommendationSummary?: SavingsPlansPurchaseRecommendationSummary;
	}

	/** Contains your request parameters, Savings Plan Recommendations Summary, and Details. */
	export interface SavingsPlansPurchaseRecommendationFormProperties {
		AccountScope: FormControl<AccountScope | null | undefined>,
		SavingsPlansType: FormControl<SupportedSavingsPlansType | null | undefined>,
		TermInYears: FormControl<TermInYears | null | undefined>,
		PaymentOption: FormControl<PaymentOption | null | undefined>,
		LookbackPeriodInDays: FormControl<LookbackPeriodInDays | null | undefined>,
	}
	export function CreateSavingsPlansPurchaseRecommendationFormGroup() {
		return new FormGroup<SavingsPlansPurchaseRecommendationFormProperties>({
			AccountScope: new FormControl<AccountScope | null | undefined>(undefined),
			SavingsPlansType: new FormControl<SupportedSavingsPlansType | null | undefined>(undefined),
			TermInYears: new FormControl<TermInYears | null | undefined>(undefined),
			PaymentOption: new FormControl<PaymentOption | null | undefined>(undefined),
			LookbackPeriodInDays: new FormControl<LookbackPeriodInDays | null | undefined>(undefined),
		});

	}


	/** Details for your recommended Savings Plans. */
	export interface SavingsPlansPurchaseRecommendationDetail {
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
		RecommendationDetailId?: string;
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
		RecommendationDetailId: FormControl<string | null | undefined>,
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
			RecommendationDetailId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The attribute details on a specific Savings Plan. */
	export interface SavingsPlansDetails {
		Region?: string;
		InstanceFamily?: string;
		OfferingId?: string;
	}

	/** The attribute details on a specific Savings Plan. */
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

		/** Required */
		SavingsPlansType: SupportedSavingsPlansType;

		/** Required */
		TermInYears: TermInYears;

		/** Required */
		PaymentOption: PaymentOption;
		AccountScope?: AccountScope;
		NextPageToken?: string;
		PageSize?: number | null;

		/** Required */
		LookbackPeriodInDays: LookbackPeriodInDays;
		Filter?: Expression;
	}
	export interface GetSavingsPlansPurchaseRecommendationRequestFormProperties {

		/** Required */
		SavingsPlansType: FormControl<SupportedSavingsPlansType | null | undefined>,

		/** Required */
		TermInYears: FormControl<TermInYears | null | undefined>,

		/** Required */
		PaymentOption: FormControl<PaymentOption | null | undefined>,
		AccountScope: FormControl<AccountScope | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,

		/** Required */
		LookbackPeriodInDays: FormControl<LookbackPeriodInDays | null | undefined>,
	}
	export function CreateGetSavingsPlansPurchaseRecommendationRequestFormGroup() {
		return new FormGroup<GetSavingsPlansPurchaseRecommendationRequestFormProperties>({
			SavingsPlansType: new FormControl<SupportedSavingsPlansType | null | undefined>(undefined, [Validators.required]),
			TermInYears: new FormControl<TermInYears | null | undefined>(undefined, [Validators.required]),
			PaymentOption: new FormControl<PaymentOption | null | undefined>(undefined, [Validators.required]),
			AccountScope: new FormControl<AccountScope | null | undefined>(undefined),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			LookbackPeriodInDays: new FormControl<LookbackPeriodInDays | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSavingsPlansUtilizationResponse {
		SavingsPlansUtilizationsByTime?: Array<SavingsPlansUtilizationByTime>;

		/** Required */
		Total: SavingsPlansUtilizationAggregates;
	}
	export interface GetSavingsPlansUtilizationResponseFormProperties {
	}
	export function CreateGetSavingsPlansUtilizationResponseFormGroup() {
		return new FormGroup<GetSavingsPlansUtilizationResponseFormProperties>({
		});

	}


	/** The amount of Savings Plans utilization (in hours). */
	export interface SavingsPlansUtilizationByTime {

		/**
		 * The time period of the request.
		 * Required
		 */
		TimePeriod: DateInterval;

		/** Required */
		Utilization: SavingsPlansUtilization;
		Savings?: SavingsPlansSavings;
		AmortizedCommitment?: SavingsPlansAmortizedCommitment;
	}

	/** The amount of Savings Plans utilization (in hours). */
	export interface SavingsPlansUtilizationByTimeFormProperties {
	}
	export function CreateSavingsPlansUtilizationByTimeFormGroup() {
		return new FormGroup<SavingsPlansUtilizationByTimeFormProperties>({
		});

	}


	/** The measurement of how well you're using your existing Savings Plans. */
	export interface SavingsPlansUtilization {
		TotalCommitment?: string;
		UsedCommitment?: string;
		UnusedCommitment?: string;
		UtilizationPercentage?: string;
	}

	/** The measurement of how well you're using your existing Savings Plans. */
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


	/** The amount of savings that you're accumulating, against the public On-Demand rate of the usage accrued in an account. */
	export interface SavingsPlansSavings {
		NetSavings?: string;
		OnDemandCostEquivalent?: string;
	}

	/** The amount of savings that you're accumulating, against the public On-Demand rate of the usage accrued in an account. */
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
		AmortizedRecurringCommitment?: string;
		AmortizedUpfrontCommitment?: string;
		TotalAmortizedCommitment?: string;
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

		/** Required */
		Utilization: SavingsPlansUtilization;
		Savings?: SavingsPlansSavings;
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

		/** Required */
		TimePeriod: DateInterval;
		Granularity?: Granularity;
		Filter?: Expression;
		SortBy?: SortDefinition;
	}
	export interface GetSavingsPlansUtilizationRequestFormProperties {
		Granularity: FormControl<Granularity | null | undefined>,
	}
	export function CreateGetSavingsPlansUtilizationRequestFormGroup() {
		return new FormGroup<GetSavingsPlansUtilizationRequestFormProperties>({
			Granularity: new FormControl<Granularity | null | undefined>(undefined),
		});

	}

	export interface GetSavingsPlansUtilizationDetailsResponse {

		/** Required */
		SavingsPlansUtilizationDetails: Array<SavingsPlansUtilizationDetail>;
		Total?: SavingsPlansUtilizationAggregates;

		/**
		 * The time period of the request.
		 * Required
		 */
		TimePeriod: DateInterval;
		NextToken?: string;
	}
	export interface GetSavingsPlansUtilizationDetailsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetSavingsPlansUtilizationDetailsResponseFormGroup() {
		return new FormGroup<GetSavingsPlansUtilizationDetailsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single daily or monthly Savings Plans utilization rate and details for your account. A management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> to determine the possible dimension values.  */
	export interface SavingsPlansUtilizationDetail {
		SavingsPlanArn?: string;
		Attributes?: Attributes;
		Utilization?: SavingsPlansUtilization;
		Savings?: SavingsPlansSavings;
		AmortizedCommitment?: SavingsPlansAmortizedCommitment;
	}

	/** A single daily or monthly Savings Plans utilization rate and details for your account. A management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> to determine the possible dimension values.  */
	export interface SavingsPlansUtilizationDetailFormProperties {
		SavingsPlanArn: FormControl<string | null | undefined>,
	}
	export function CreateSavingsPlansUtilizationDetailFormGroup() {
		return new FormGroup<SavingsPlansUtilizationDetailFormProperties>({
			SavingsPlanArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSavingsPlansUtilizationDetailsRequest {

		/** Required */
		TimePeriod: DateInterval;
		Filter?: Expression;
		DataType?: Array<SavingsPlansDataType>;
		NextToken?: string;
		MaxResults?: number | null;
		SortBy?: SortDefinition;
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

	export enum SavingsPlansDataType { ATTRIBUTES = 'ATTRIBUTES', UTILIZATION = 'UTILIZATION', AMORTIZED_COMMITMENT = 'AMORTIZED_COMMITMENT', SAVINGS = 'SAVINGS' }

	export interface GetTagsResponse {
		NextPageToken?: string;

		/** Required */
		Tags: Array<string>;

		/** Required */
		ReturnSize: number;

		/** Required */
		TotalSize: number;
	}
	export interface GetTagsResponseFormProperties {
		NextPageToken: FormControl<string | null | undefined>,

		/** Required */
		ReturnSize: FormControl<number | null | undefined>,

		/** Required */
		TotalSize: FormControl<number | null | undefined>,
	}
	export function CreateGetTagsResponseFormGroup() {
		return new FormGroup<GetTagsResponseFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
			ReturnSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TotalSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTagsRequest {
		SearchString?: string;

		/** Required */
		TimePeriod: DateInterval;
		TagKey?: string;

		/** <p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with "a".</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note> */
		Filter?: Expression;
		SortBy?: Array<SortDefinition>;
		MaxResults?: number | null;
		NextPageToken?: string;
	}
	export interface GetTagsRequestFormProperties {
		SearchString: FormControl<string | null | undefined>,
		TagKey: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTagsRequestFormGroup() {
		return new FormGroup<GetTagsRequestFormProperties>({
			SearchString: new FormControl<string | null | undefined>(undefined),
			TagKey: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetUsageForecastResponse {
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

		/** Required */
		TimePeriod: DateInterval;

		/** Required */
		Metric: Metric;

		/** Required */
		Granularity: Granularity;
		Filter?: Expression;
		PredictionIntervalLevel?: number | null;
	}
	export interface GetUsageForecastRequestFormProperties {

		/** Required */
		Metric: FormControl<Metric | null | undefined>,

		/** Required */
		Granularity: FormControl<Granularity | null | undefined>,
		PredictionIntervalLevel: FormControl<number | null | undefined>,
	}
	export function CreateGetUsageForecastRequestFormGroup() {
		return new FormGroup<GetUsageForecastRequestFormProperties>({
			Metric: new FormControl<Metric | null | undefined>(undefined, [Validators.required]),
			Granularity: new FormControl<Granularity | null | undefined>(undefined, [Validators.required]),
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

	export interface ListCostAllocationTagsResponse {
		CostAllocationTags?: Array<CostAllocationTag>;
		NextToken?: string;
	}
	export interface ListCostAllocationTagsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCostAllocationTagsResponseFormGroup() {
		return new FormGroup<ListCostAllocationTagsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The cost allocation tag structure. This includes detailed metadata for the <code>CostAllocationTag</code> object.  */
	export interface CostAllocationTag {

		/** Required */
		TagKey: string;

		/** Required */
		Type: CostAllocationTagType;

		/** Required */
		Status: CostAllocationTagStatus;
	}

	/** The cost allocation tag structure. This includes detailed metadata for the <code>CostAllocationTag</code> object.  */
	export interface CostAllocationTagFormProperties {

		/** Required */
		TagKey: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<CostAllocationTagType | null | undefined>,

		/** Required */
		Status: FormControl<CostAllocationTagStatus | null | undefined>,
	}
	export function CreateCostAllocationTagFormGroup() {
		return new FormGroup<CostAllocationTagFormProperties>({
			TagKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<CostAllocationTagType | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<CostAllocationTagStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CostAllocationTagType { AWSGenerated = 'AWSGenerated', UserDefined = 'UserDefined' }

	export enum CostAllocationTagStatus { Active = 'Active', Inactive = 'Inactive' }

	export interface ListCostAllocationTagsRequest {
		Status?: CostAllocationTagStatus;
		TagKeys?: Array<string>;
		Type?: CostAllocationTagType;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListCostAllocationTagsRequestFormProperties {
		Status: FormControl<CostAllocationTagStatus | null | undefined>,
		Type: FormControl<CostAllocationTagType | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListCostAllocationTagsRequestFormGroup() {
		return new FormGroup<ListCostAllocationTagsRequestFormProperties>({
			Status: new FormControl<CostAllocationTagStatus | null | undefined>(undefined),
			Type: new FormControl<CostAllocationTagType | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListCostCategoryDefinitionsResponse {
		CostCategoryReferences?: Array<CostCategoryReference>;
		NextToken?: string;
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
		CostCategoryArn?: string;

		/**
		 * The unique name of the Cost Category.
		 * Min length: 1
		 * Max length: 50
		 */
		Name?: string | null;
		EffectiveStart?: string;
		EffectiveEnd?: string;
		NumberOfRules?: number | null;
		ProcessingStatus?: Array<CostCategoryProcessingStatus>;
		Values?: Array<string>;

		/**
		 * The default value for the cost category.
		 * Min length: 1
		 * Max length: 50
		 */
		DefaultValue?: string | null;
	}

	/** <p>A reference to a Cost Category containing only enough information to identify the Cost Category.</p> <p>You can use this information to retrieve the full Cost Category information using <code>DescribeCostCategory</code>.</p> */
	export interface CostCategoryReferenceFormProperties {
		CostCategoryArn: FormControl<string | null | undefined>,

		/**
		 * The unique name of the Cost Category.
		 * Min length: 1
		 * Max length: 50
		 */
		Name: FormControl<string | null | undefined>,
		EffectiveStart: FormControl<string | null | undefined>,
		EffectiveEnd: FormControl<string | null | undefined>,
		NumberOfRules: FormControl<number | null | undefined>,

		/**
		 * The default value for the cost category.
		 * Min length: 1
		 * Max length: 50
		 */
		DefaultValue: FormControl<string | null | undefined>,
	}
	export function CreateCostCategoryReferenceFormGroup() {
		return new FormGroup<CostCategoryReferenceFormProperties>({
			CostCategoryArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			EffectiveStart: new FormControl<string | null | undefined>(undefined),
			EffectiveEnd: new FormControl<string | null | undefined>(undefined),
			NumberOfRules: new FormControl<number | null | undefined>(undefined),
			DefaultValue: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
		});

	}

	export interface ListCostCategoryDefinitionsRequest {
		EffectiveOn?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListCostCategoryDefinitionsRequestFormProperties {
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

	export interface ListSavingsPlansPurchaseRecommendationGenerationResponse {
		GenerationSummaryList?: Array<GenerationSummary>;
		NextPageToken?: string;
	}
	export interface ListSavingsPlansPurchaseRecommendationGenerationResponseFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSavingsPlansPurchaseRecommendationGenerationResponseFormGroup() {
		return new FormGroup<ListSavingsPlansPurchaseRecommendationGenerationResponseFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the Savings Plans recommendation generation. */
	export interface GenerationSummary {
		RecommendationId?: string;
		GenerationStatus?: GenerationStatus;
		GenerationStartedTime?: string;
		GenerationCompletionTime?: string;
		EstimatedCompletionTime?: string;
	}

	/** The summary of the Savings Plans recommendation generation. */
	export interface GenerationSummaryFormProperties {
		RecommendationId: FormControl<string | null | undefined>,
		GenerationStatus: FormControl<GenerationStatus | null | undefined>,
		GenerationStartedTime: FormControl<string | null | undefined>,
		GenerationCompletionTime: FormControl<string | null | undefined>,
		EstimatedCompletionTime: FormControl<string | null | undefined>,
	}
	export function CreateGenerationSummaryFormGroup() {
		return new FormGroup<GenerationSummaryFormProperties>({
			RecommendationId: new FormControl<string | null | undefined>(undefined),
			GenerationStatus: new FormControl<GenerationStatus | null | undefined>(undefined),
			GenerationStartedTime: new FormControl<string | null | undefined>(undefined),
			GenerationCompletionTime: new FormControl<string | null | undefined>(undefined),
			EstimatedCompletionTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GenerationStatus { SUCCEEDED = 'SUCCEEDED', PROCESSING = 'PROCESSING', FAILED = 'FAILED' }

	export interface ListSavingsPlansPurchaseRecommendationGenerationRequest {
		GenerationStatus?: GenerationStatus;
		RecommendationIds?: Array<string>;
		PageSize?: number | null;
		NextPageToken?: string;
	}
	export interface ListSavingsPlansPurchaseRecommendationGenerationRequestFormProperties {
		GenerationStatus: FormControl<GenerationStatus | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSavingsPlansPurchaseRecommendationGenerationRequestFormGroup() {
		return new FormGroup<ListSavingsPlansPurchaseRecommendationGenerationRequestFormProperties>({
			GenerationStatus: new FormControl<GenerationStatus | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		ResourceTags?: Array<ResourceTag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProvideAnomalyFeedbackResponse {

		/** Required */
		AnomalyId: string;
	}
	export interface ProvideAnomalyFeedbackResponseFormProperties {

		/** Required */
		AnomalyId: FormControl<string | null | undefined>,
	}
	export function CreateProvideAnomalyFeedbackResponseFormGroup() {
		return new FormGroup<ProvideAnomalyFeedbackResponseFormProperties>({
			AnomalyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProvideAnomalyFeedbackRequest {

		/** Required */
		AnomalyId: string;

		/** Required */
		Feedback: AnomalyFeedbackType;
	}
	export interface ProvideAnomalyFeedbackRequestFormProperties {

		/** Required */
		AnomalyId: FormControl<string | null | undefined>,

		/** Required */
		Feedback: FormControl<AnomalyFeedbackType | null | undefined>,
	}
	export function CreateProvideAnomalyFeedbackRequestFormGroup() {
		return new FormGroup<ProvideAnomalyFeedbackRequestFormProperties>({
			AnomalyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Feedback: new FormControl<AnomalyFeedbackType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartSavingsPlansPurchaseRecommendationGenerationResponse {
		RecommendationId?: string;
		GenerationStartedTime?: string;
		EstimatedCompletionTime?: string;
	}
	export interface StartSavingsPlansPurchaseRecommendationGenerationResponseFormProperties {
		RecommendationId: FormControl<string | null | undefined>,
		GenerationStartedTime: FormControl<string | null | undefined>,
		EstimatedCompletionTime: FormControl<string | null | undefined>,
	}
	export function CreateStartSavingsPlansPurchaseRecommendationGenerationResponseFormGroup() {
		return new FormGroup<StartSavingsPlansPurchaseRecommendationGenerationResponseFormProperties>({
			RecommendationId: new FormControl<string | null | undefined>(undefined),
			GenerationStartedTime: new FormControl<string | null | undefined>(undefined),
			EstimatedCompletionTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartSavingsPlansPurchaseRecommendationGenerationRequest {
	}
	export interface StartSavingsPlansPurchaseRecommendationGenerationRequestFormProperties {
	}
	export function CreateStartSavingsPlansPurchaseRecommendationGenerationRequestFormGroup() {
		return new FormGroup<StartSavingsPlansPurchaseRecommendationGenerationRequestFormProperties>({
		});

	}

	export interface GenerationExistsException {
	}
	export interface GenerationExistsExceptionFormProperties {
	}
	export function CreateGenerationExistsExceptionFormGroup() {
		return new FormGroup<GenerationExistsExceptionFormProperties>({
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		ResourceTags: Array<ResourceTag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		ResourceTagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAnomalyMonitorResponse {

		/** Required */
		MonitorArn: string;
	}
	export interface UpdateAnomalyMonitorResponseFormProperties {

		/** Required */
		MonitorArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAnomalyMonitorResponseFormGroup() {
		return new FormGroup<UpdateAnomalyMonitorResponseFormProperties>({
			MonitorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAnomalyMonitorRequest {

		/** Required */
		MonitorArn: string;
		MonitorName?: string;
	}
	export interface UpdateAnomalyMonitorRequestFormProperties {

		/** Required */
		MonitorArn: FormControl<string | null | undefined>,
		MonitorName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAnomalyMonitorRequestFormGroup() {
		return new FormGroup<UpdateAnomalyMonitorRequestFormProperties>({
			MonitorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MonitorName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAnomalySubscriptionResponse {

		/** Required */
		SubscriptionArn: string;
	}
	export interface UpdateAnomalySubscriptionResponseFormProperties {

		/** Required */
		SubscriptionArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAnomalySubscriptionResponseFormGroup() {
		return new FormGroup<UpdateAnomalySubscriptionResponseFormProperties>({
			SubscriptionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAnomalySubscriptionRequest {

		/** Required */
		SubscriptionArn: string;
		Threshold?: number | null;
		Frequency?: AnomalySubscriptionFrequency;
		MonitorArnList?: Array<string>;
		Subscribers?: Array<Subscriber>;
		SubscriptionName?: string;
		ThresholdExpression?: Expression;
	}
	export interface UpdateAnomalySubscriptionRequestFormProperties {

		/** Required */
		SubscriptionArn: FormControl<string | null | undefined>,
		Threshold: FormControl<number | null | undefined>,
		Frequency: FormControl<AnomalySubscriptionFrequency | null | undefined>,
		SubscriptionName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAnomalySubscriptionRequestFormGroup() {
		return new FormGroup<UpdateAnomalySubscriptionRequestFormProperties>({
			SubscriptionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Threshold: new FormControl<number | null | undefined>(undefined),
			Frequency: new FormControl<AnomalySubscriptionFrequency | null | undefined>(undefined),
			SubscriptionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCostAllocationTagsStatusResponse {
		Errors?: Array<UpdateCostAllocationTagsStatusError>;
	}
	export interface UpdateCostAllocationTagsStatusResponseFormProperties {
	}
	export function CreateUpdateCostAllocationTagsStatusResponseFormGroup() {
		return new FormGroup<UpdateCostAllocationTagsStatusResponseFormProperties>({
		});

	}


	/** Gives a detailed description of the result of an action. It's on each cost allocation tag entry in the request.  */
	export interface UpdateCostAllocationTagsStatusError {
		TagKey?: string;
		Code?: string;
		Message?: string;
	}

	/** Gives a detailed description of the result of an action. It's on each cost allocation tag entry in the request.  */
	export interface UpdateCostAllocationTagsStatusErrorFormProperties {
		TagKey: FormControl<string | null | undefined>,
		Code: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCostAllocationTagsStatusErrorFormGroup() {
		return new FormGroup<UpdateCostAllocationTagsStatusErrorFormProperties>({
			TagKey: new FormControl<string | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCostAllocationTagsStatusRequest {

		/** Required */
		CostAllocationTagsStatus: Array<CostAllocationTagStatusEntry>;
	}
	export interface UpdateCostAllocationTagsStatusRequestFormProperties {
	}
	export function CreateUpdateCostAllocationTagsStatusRequestFormGroup() {
		return new FormGroup<UpdateCostAllocationTagsStatusRequestFormProperties>({
		});

	}


	/** The cost allocation tag status. The status of a key can either be active or inactive.  */
	export interface CostAllocationTagStatusEntry {

		/** Required */
		TagKey: string;

		/** Required */
		Status: CostAllocationTagStatus;
	}

	/** The cost allocation tag status. The status of a key can either be active or inactive.  */
	export interface CostAllocationTagStatusEntryFormProperties {

		/** Required */
		TagKey: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<CostAllocationTagStatus | null | undefined>,
	}
	export function CreateCostAllocationTagStatusEntryFormGroup() {
		return new FormGroup<CostAllocationTagStatusEntryFormProperties>({
			TagKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<CostAllocationTagStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateCostCategoryDefinitionResponse {
		CostCategoryArn?: string;
		EffectiveStart?: string;
	}
	export interface UpdateCostCategoryDefinitionResponseFormProperties {
		CostCategoryArn: FormControl<string | null | undefined>,
		EffectiveStart: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCostCategoryDefinitionResponseFormGroup() {
		return new FormGroup<UpdateCostCategoryDefinitionResponseFormProperties>({
			CostCategoryArn: new FormControl<string | null | undefined>(undefined),
			EffectiveStart: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCostCategoryDefinitionRequest {

		/** Required */
		CostCategoryArn: string;
		EffectiveStart?: string;

		/**
		 * The rule schema version in this particular Cost Category.
		 * Required
		 */
		RuleVersion: CreateCostCategoryDefinitionRequestRuleVersion;

		/** Required */
		Rules: Array<CostCategoryRule>;

		/**
		 * The default value for the cost category.
		 * Min length: 1
		 * Max length: 50
		 */
		DefaultValue?: string | null;
		SplitChargeRules?: Array<CostCategorySplitChargeRule>;
	}
	export interface UpdateCostCategoryDefinitionRequestFormProperties {

		/** Required */
		CostCategoryArn: FormControl<string | null | undefined>,
		EffectiveStart: FormControl<string | null | undefined>,

		/**
		 * The rule schema version in this particular Cost Category.
		 * Required
		 */
		RuleVersion: FormControl<CreateCostCategoryDefinitionRequestRuleVersion | null | undefined>,

		/**
		 * The default value for the cost category.
		 * Min length: 1
		 * Max length: 50
		 */
		DefaultValue: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCostCategoryDefinitionRequestFormGroup() {
		return new FormGroup<UpdateCostCategoryDefinitionRequestFormProperties>({
			CostCategoryArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EffectiveStart: new FormControl<string | null | undefined>(undefined),
			RuleVersion: new FormControl<CreateCostCategoryDefinitionRequestRuleVersion | null | undefined>(undefined, [Validators.required]),
			DefaultValue: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
		});

	}


	/** The rule schema version in this particular Cost Category. */
	export enum CostCategoryRuleVersion { 'CostCategoryExpression.v1' = 'CostCategoryExpression.v1' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a new cost anomaly detection monitor with the requested type and monitor specification.
		 * Post #X-Amz-Target=AWSInsightsIndexService.CreateAnomalyMonitor
		 * @return {CreateAnomalyMonitorResponse} Success
		 */
		CreateAnomalyMonitor(requestBody: CreateAnomalyMonitorRequest): Observable<CreateAnomalyMonitorResponse> {
			return this.http.post<CreateAnomalyMonitorResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.CreateAnomalyMonitor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds an alert subscription to a cost anomaly detection monitor. You can use each subscription to define subscribers with email or SNS notifications. Email subscribers can set an absolute or percentage threshold and a time frequency for receiving notifications.
		 * Post #X-Amz-Target=AWSInsightsIndexService.CreateAnomalySubscription
		 * @return {CreateAnomalySubscriptionResponse} Success
		 */
		CreateAnomalySubscription(requestBody: CreateAnomalySubscriptionRequest): Observable<CreateAnomalySubscriptionResponse> {
			return this.http.post<CreateAnomalySubscriptionResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.CreateAnomalySubscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Deletes a cost anomaly monitor.
		 * Post #X-Amz-Target=AWSInsightsIndexService.DeleteAnomalyMonitor
		 * @return {DeleteAnomalyMonitorResponse} Success
		 */
		DeleteAnomalyMonitor(requestBody: DeleteAnomalyMonitorRequest): Observable<DeleteAnomalyMonitorResponse> {
			return this.http.post<DeleteAnomalyMonitorResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalyMonitor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a cost anomaly subscription.
		 * Post #X-Amz-Target=AWSInsightsIndexService.DeleteAnomalySubscription
		 * @return {DeleteAnomalySubscriptionResponse} Success
		 */
		DeleteAnomalySubscription(requestBody: DeleteAnomalySubscriptionRequest): Observable<DeleteAnomalySubscriptionResponse> {
			return this.http.post<DeleteAnomalySubscriptionResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalySubscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Returns the name, Amazon Resource Name (ARN), rules, definition, and effective dates of a Cost Category that's defined in the account.</p> <p>You have the option to use <code>EffectiveOn</code> to return a Cost Category that's active on a specific date. If there's no <code>EffectiveOn</code> specified, you see a Cost Category that's effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. </p>
		 * Post #X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition
		 * @return {DescribeCostCategoryDefinitionResponse} Success
		 */
		DescribeCostCategoryDefinition(requestBody: DescribeCostCategoryDefinitionRequest): Observable<DescribeCostCategoryDefinitionResponse> {
			return this.http.post<DescribeCostCategoryDefinitionResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves all of the cost anomalies detected on your account during the time period that's specified by the <code>DateInterval</code> object. Anomalies are available for up to 90 days.
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetAnomalies
		 * @return {GetAnomaliesResponse} Success
		 */
		GetAnomalies(requestBody: GetAnomaliesRequest): Observable<GetAnomaliesResponse> {
			return this.http.post<GetAnomaliesResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetAnomalies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the cost anomaly monitor definitions for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs).
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetAnomalyMonitors
		 * @return {GetAnomalyMonitorsResponse} Success
		 */
		GetAnomalyMonitors(requestBody: GetAnomalyMonitorsRequest): Observable<GetAnomalyMonitorsResponse> {
			return this.http.post<GetAnomalyMonitorsResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetAnomalyMonitors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the cost anomaly subscription objects for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs).
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetAnomalySubscriptions
		 * @return {GetAnomalySubscriptionsResponse} Success
		 */
		GetAnomalySubscriptions(requestBody: GetAnomalySubscriptionsRequest): Observable<GetAnomalySubscriptionsResponse> {
			return this.http.post<GetAnomalySubscriptionsResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetAnomalySubscriptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric that you want the request to return. For example, you can specify <code>BlendedCosts</code> or <code>UsageQuantity</code>. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts.</p> <p>For information about filter limitations, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-limits.html">Quotas and restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p>
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage
		 * @return {GetCostAndUsageResponse} Success
		 */
		GetCostAndUsage(requestBody: GetCostAndUsageRequest): Observable<GetCostAndUsageResponse> {
			return this.http.post<GetCostAndUsageResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves cost and usage metrics with resources for your account. You can specify which cost and usage-related metric, such as <code>BlendedCosts</code> or <code>UsageQuantity</code>, that you want the request to return. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts. This API is currently available for the Amazon Elastic Compute Cloud – Compute service only.</p> <note> <p>This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information about how to access the Settings page, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-access.html">Controlling Access for Cost Explorer</a> in the <i>Billing and Cost Management User Guide</i>.</p> </note>
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources
		 * @return {GetCostAndUsageWithResourcesResponse} Success
		 */
		GetCostAndUsageWithResources(requestBody: GetCostAndUsageWithResourcesRequest): Observable<GetCostAndUsageWithResourcesResponse> {
			return this.http.post<GetCostAndUsageWithResourcesResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves an array of Cost Category names and values incurred cost.</p> <note> <p>If some Cost Category names and values are not associated with any cost, they will not be returned by this API.</p> </note>
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetCostCategories
		 * @return {GetCostCategoriesResponse} Success
		 */
		GetCostCategories(requestBody: GetCostCategoriesRequest): Observable<GetCostCategoriesResponse> {
			return this.http.post<GetCostCategoriesResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetCostCategories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Retrieves the reservation coverage for your account, which you can use to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data about reservation usage by the following dimensions:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>SERVICE</p> </li> <li> <p>TAG</p> </li> <li> <p>TENANCY</p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation. </p>
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage
		 * @return {GetReservationCoverageResponse} Success
		 */
		GetReservationCoverage(requestBody: GetReservationCoverageRequest): Observable<GetReservationCoverageResponse> {
			return this.http.post<GetReservationCoverageResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets recommendations for reservation purchases. These recommendations might help you to reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing.</p> <p>Amazon Web Services generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After Amazon Web Services has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of Reserved Instance (RI) to purchase to maximize your estimated savings. </p> <p>For example, Amazon Web Services automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. Amazon Web Services recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible Reserved Instance (RI). Amazon Web Services also shows the equal number of normalized units. This way, you can purchase any instance size that you want. For this example, your RI recommendation is for <code>c4.large</code> because that is the smallest size instance in the c4 instance family.</p>
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation
		 * @return {GetReservationPurchaseRecommendationResponse} Success
		 */
		GetReservationPurchaseRecommendation(requestBody: GetReservationPurchaseRecommendationRequest): Observable<GetReservationPurchaseRecommendationResponse> {
			return this.http.post<GetReservationPurchaseRecommendationResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the reservation utilization for your account. Management account in an organization have access to member accounts. You can filter data by dimensions in a time period. You can use <code>GetDimensionValues</code> to determine the possible dimension values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>.
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization
		 * @return {GetReservationUtilizationResponse} Success
		 */
		GetReservationUtilization(requestBody: GetReservationUtilizationRequest): Observable<GetReservationUtilizationResponse> {
			return this.http.post<GetReservationUtilizationResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates recommendations that help you save cost by identifying idle and underutilized Amazon EC2 instances.</p> <p>Recommendations are generated to either downsize or terminate instances, along with providing savings detail and metrics. For more information about calculation and function, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-rightsizing.html">Optimizing Your Cost with Rightsizing Recommendations</a> in the <i>Billing and Cost Management User Guide</i>.</p>
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation
		 * @return {GetRightsizingRecommendationResponse} Success
		 */
		GetRightsizingRecommendation(requestBody: GetRightsizingRecommendationRequest): Observable<GetRightsizingRecommendationResponse> {
			return this.http.post<GetRightsizingRecommendationResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the details for a Savings Plan recommendation. These details include the hourly data-points that construct the new cost, coverage, and utilization charts.
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetSavingsPlanPurchaseRecommendationDetails
		 * @return {GetSavingsPlanPurchaseRecommendationDetailsResponse} Success
		 */
		GetSavingsPlanPurchaseRecommendationDetails(requestBody: GetSavingsPlanPurchaseRecommendationDetailsRequest): Observable<GetSavingsPlanPurchaseRecommendationDetailsResponse> {
			return this.http.post<GetSavingsPlanPurchaseRecommendationDetailsResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlanPurchaseRecommendationDetails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization’s management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data for Savings Plans usage with the following dimensions:</p> <ul> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>SERVICE</code> </p> </li> <li> <p> <code>INSTANCE_FAMILY</code> </p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation.</p>
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetSavingsPlansCoverageResponse} Success
		 */
		GetSavingsPlansCoverage(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetSavingsPlansCoverageRequest): Observable<GetSavingsPlansCoverageResponse> {
			return this.http.post<GetSavingsPlansCoverageResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the Savings Plans recommendations for your account. First use <code>StartSavingsPlansPurchaseRecommendationGeneration</code> to generate a new set of recommendations, and then use <code>GetSavingsPlansPurchaseRecommendation</code> to retrieve them.
		 * Post #X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation
		 * @return {GetSavingsPlansPurchaseRecommendationResponse} Success
		 */
		GetSavingsPlansPurchaseRecommendation(requestBody: GetSavingsPlansPurchaseRecommendationRequest): Observable<GetSavingsPlansPurchaseRecommendationResponse> {
			return this.http.post<GetSavingsPlansPurchaseRecommendationResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p>You can't group by any dimension values for <code>GetSavingsPlansUtilization</code>.</p> </note>
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
		 * Get a list of cost allocation tags. All inputs in the API are optional and serve as filters. By default, all cost allocation tags are returned.
		 * Post #X-Amz-Target=AWSInsightsIndexService.ListCostAllocationTags
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCostAllocationTagsResponse} Success
		 */
		ListCostAllocationTags(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCostAllocationTagsRequest): Observable<ListCostAllocationTagsResponse> {
			return this.http.post<ListCostAllocationTagsResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.ListCostAllocationTags?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the name, Amazon Resource Name (ARN), <code>NumberOfRules</code> and effective dates of all Cost Categories defined in the account. You have the option to use <code>EffectiveOn</code> to return a list of Cost Categories that were active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see Cost Categories that are effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. <code>ListCostCategoryDefinitions</code> supports pagination. The request can have a <code>MaxResults</code> range up to 100.
		 * Post #X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCostCategoryDefinitionsResponse} Success
		 */
		ListCostCategoryDefinitions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCostCategoryDefinitionsRequest): Observable<ListCostCategoryDefinitionsResponse> {
			return this.http.post<ListCostCategoryDefinitionsResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of your historical recommendation generations within the past 30 days.
		 * Post #X-Amz-Target=AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration
		 * @return {ListSavingsPlansPurchaseRecommendationGenerationResponse} Success
		 */
		ListSavingsPlansPurchaseRecommendationGeneration(requestBody: ListSavingsPlansPurchaseRecommendationGenerationRequest): Observable<ListSavingsPlansPurchaseRecommendationGenerationResponse> {
			return this.http.post<ListSavingsPlansPurchaseRecommendationGenerationResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of resource tags associated with the resource specified by the Amazon Resource Name (ARN).
		 * Post #X-Amz-Target=AWSInsightsIndexService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the feedback property of a given cost anomaly.
		 * Post #X-Amz-Target=AWSInsightsIndexService.ProvideAnomalyFeedback
		 * @return {ProvideAnomalyFeedbackResponse} Success
		 */
		ProvideAnomalyFeedback(requestBody: ProvideAnomalyFeedbackRequest): Observable<ProvideAnomalyFeedbackResponse> {
			return this.http.post<ProvideAnomalyFeedbackResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.ProvideAnomalyFeedback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Requests a Savings Plans recommendation generation. This enables you to calculate a fresh set of Savings Plans recommendations that takes your latest usage data and current Savings Plans inventory into account. You can refresh Savings Plans recommendations up to three times daily for a consolidated billing family.</p> <note> <p> <code>StartSavingsPlansPurchaseRecommendationGeneration</code> has no request syntax because no input parameters are needed to support this operation.</p> </note>
		 * Post #X-Amz-Target=AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration
		 * @return {StartSavingsPlansPurchaseRecommendationGenerationResponse} Success
		 */
		StartSavingsPlansPurchaseRecommendationGeneration(requestBody: StartSavingsPlansPurchaseRecommendationGenerationRequest): Observable<StartSavingsPlansPurchaseRecommendationGenerationResponse> {
			return this.http.post<StartSavingsPlansPurchaseRecommendationGenerationResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>An API operation for adding one or more tags (key-value pairs) to a resource.</p> <p>You can use the <code>TagResource</code> operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value you specify replaces the previous value for that tag.</p> <p>Although the maximum number of array members is 200, user-tag maximum is 50. The remaining are reserved for Amazon Web Services use.</p>
		 * Post #X-Amz-Target=AWSInsightsIndexService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from a resource. Specify only tag keys in your request. Don't specify the value.
		 * Post #X-Amz-Target=AWSInsightsIndexService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing cost anomaly monitor. The changes made are applied going forward, and doesn't change anomalies detected in the past.
		 * Post #X-Amz-Target=AWSInsightsIndexService.UpdateAnomalyMonitor
		 * @return {UpdateAnomalyMonitorResponse} Success
		 */
		UpdateAnomalyMonitor(requestBody: UpdateAnomalyMonitorRequest): Observable<UpdateAnomalyMonitorResponse> {
			return this.http.post<UpdateAnomalyMonitorResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalyMonitor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates an existing cost anomaly subscription. Specify the fields that you want to update. Omitted fields are unchanged.</p> <note> <p>The JSON below describes the generic construct for each type. See <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_UpdateAnomalySubscription.html#API_UpdateAnomalySubscription_RequestParameters">Request Parameters</a> for possible values as they apply to <code>AnomalySubscription</code>.</p> </note>
		 * Post #X-Amz-Target=AWSInsightsIndexService.UpdateAnomalySubscription
		 * @return {UpdateAnomalySubscriptionResponse} Success
		 */
		UpdateAnomalySubscription(requestBody: UpdateAnomalySubscriptionRequest): Observable<UpdateAnomalySubscriptionResponse> {
			return this.http.post<UpdateAnomalySubscriptionResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalySubscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates status for cost allocation tags in bulk, with maximum batch size of 20. If the tag status that's updated is the same as the existing tag status, the request doesn't fail. Instead, it doesn't have any effect on the tag status (for example, activating the active tag).
		 * Post #X-Amz-Target=AWSInsightsIndexService.UpdateCostAllocationTagsStatus
		 * @return {UpdateCostAllocationTagsStatusResponse} Success
		 */
		UpdateCostAllocationTagsStatus(requestBody: UpdateCostAllocationTagsStatusRequest): Observable<UpdateCostAllocationTagsStatusResponse> {
			return this.http.post<UpdateCostAllocationTagsStatusResponse>(this.baseUri + '#X-Amz-Target=AWSInsightsIndexService.UpdateCostAllocationTagsStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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

	export enum CreateAnomalyMonitorX_Amz_Target { 'AWSInsightsIndexService.CreateAnomalyMonitor' = 'AWSInsightsIndexService.CreateAnomalyMonitor' }

	export enum CreateAnomalySubscriptionX_Amz_Target { 'AWSInsightsIndexService.CreateAnomalySubscription' = 'AWSInsightsIndexService.CreateAnomalySubscription' }

	export enum CreateCostCategoryDefinitionX_Amz_Target { 'AWSInsightsIndexService.CreateCostCategoryDefinition' = 'AWSInsightsIndexService.CreateCostCategoryDefinition' }

	export enum DeleteAnomalyMonitorX_Amz_Target { 'AWSInsightsIndexService.DeleteAnomalyMonitor' = 'AWSInsightsIndexService.DeleteAnomalyMonitor' }

	export enum DeleteAnomalySubscriptionX_Amz_Target { 'AWSInsightsIndexService.DeleteAnomalySubscription' = 'AWSInsightsIndexService.DeleteAnomalySubscription' }

	export enum DeleteCostCategoryDefinitionX_Amz_Target { 'AWSInsightsIndexService.DeleteCostCategoryDefinition' = 'AWSInsightsIndexService.DeleteCostCategoryDefinition' }

	export enum DescribeCostCategoryDefinitionX_Amz_Target { 'AWSInsightsIndexService.DescribeCostCategoryDefinition' = 'AWSInsightsIndexService.DescribeCostCategoryDefinition' }

	export enum GetAnomaliesX_Amz_Target { 'AWSInsightsIndexService.GetAnomalies' = 'AWSInsightsIndexService.GetAnomalies' }

	export enum GetAnomalyMonitorsX_Amz_Target { 'AWSInsightsIndexService.GetAnomalyMonitors' = 'AWSInsightsIndexService.GetAnomalyMonitors' }

	export enum GetAnomalySubscriptionsX_Amz_Target { 'AWSInsightsIndexService.GetAnomalySubscriptions' = 'AWSInsightsIndexService.GetAnomalySubscriptions' }

	export enum GetCostAndUsageX_Amz_Target { 'AWSInsightsIndexService.GetCostAndUsage' = 'AWSInsightsIndexService.GetCostAndUsage' }

	export enum GetCostAndUsageWithResourcesX_Amz_Target { 'AWSInsightsIndexService.GetCostAndUsageWithResources' = 'AWSInsightsIndexService.GetCostAndUsageWithResources' }

	export enum GetCostCategoriesX_Amz_Target { 'AWSInsightsIndexService.GetCostCategories' = 'AWSInsightsIndexService.GetCostCategories' }

	export enum GetCostForecastX_Amz_Target { 'AWSInsightsIndexService.GetCostForecast' = 'AWSInsightsIndexService.GetCostForecast' }

	export enum GetDimensionValuesX_Amz_Target { 'AWSInsightsIndexService.GetDimensionValues' = 'AWSInsightsIndexService.GetDimensionValues' }

	export enum GetReservationCoverageX_Amz_Target { 'AWSInsightsIndexService.GetReservationCoverage' = 'AWSInsightsIndexService.GetReservationCoverage' }

	export enum GetReservationPurchaseRecommendationX_Amz_Target { 'AWSInsightsIndexService.GetReservationPurchaseRecommendation' = 'AWSInsightsIndexService.GetReservationPurchaseRecommendation' }

	export enum GetReservationUtilizationX_Amz_Target { 'AWSInsightsIndexService.GetReservationUtilization' = 'AWSInsightsIndexService.GetReservationUtilization' }

	export enum GetRightsizingRecommendationX_Amz_Target { 'AWSInsightsIndexService.GetRightsizingRecommendation' = 'AWSInsightsIndexService.GetRightsizingRecommendation' }

	export enum GetSavingsPlanPurchaseRecommendationDetailsX_Amz_Target { 'AWSInsightsIndexService.GetSavingsPlanPurchaseRecommendationDetails' = 'AWSInsightsIndexService.GetSavingsPlanPurchaseRecommendationDetails' }

	export enum GetSavingsPlansCoverageX_Amz_Target { 'AWSInsightsIndexService.GetSavingsPlansCoverage' = 'AWSInsightsIndexService.GetSavingsPlansCoverage' }

	export enum GetSavingsPlansPurchaseRecommendationX_Amz_Target { 'AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation' = 'AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation' }

	export enum GetSavingsPlansUtilizationX_Amz_Target { 'AWSInsightsIndexService.GetSavingsPlansUtilization' = 'AWSInsightsIndexService.GetSavingsPlansUtilization' }

	export enum GetSavingsPlansUtilizationDetailsX_Amz_Target { 'AWSInsightsIndexService.GetSavingsPlansUtilizationDetails' = 'AWSInsightsIndexService.GetSavingsPlansUtilizationDetails' }

	export enum GetTagsX_Amz_Target { 'AWSInsightsIndexService.GetTags' = 'AWSInsightsIndexService.GetTags' }

	export enum GetUsageForecastX_Amz_Target { 'AWSInsightsIndexService.GetUsageForecast' = 'AWSInsightsIndexService.GetUsageForecast' }

	export enum ListCostAllocationTagsX_Amz_Target { 'AWSInsightsIndexService.ListCostAllocationTags' = 'AWSInsightsIndexService.ListCostAllocationTags' }

	export enum ListCostCategoryDefinitionsX_Amz_Target { 'AWSInsightsIndexService.ListCostCategoryDefinitions' = 'AWSInsightsIndexService.ListCostCategoryDefinitions' }

	export enum ListSavingsPlansPurchaseRecommendationGenerationX_Amz_Target { 'AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration' = 'AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration' }

	export enum ListTagsForResourceX_Amz_Target { 'AWSInsightsIndexService.ListTagsForResource' = 'AWSInsightsIndexService.ListTagsForResource' }

	export enum ProvideAnomalyFeedbackX_Amz_Target { 'AWSInsightsIndexService.ProvideAnomalyFeedback' = 'AWSInsightsIndexService.ProvideAnomalyFeedback' }

	export enum StartSavingsPlansPurchaseRecommendationGenerationX_Amz_Target { 'AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration' = 'AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration' }

	export enum TagResourceX_Amz_Target { 'AWSInsightsIndexService.TagResource' = 'AWSInsightsIndexService.TagResource' }

	export enum UntagResourceX_Amz_Target { 'AWSInsightsIndexService.UntagResource' = 'AWSInsightsIndexService.UntagResource' }

	export enum UpdateAnomalyMonitorX_Amz_Target { 'AWSInsightsIndexService.UpdateAnomalyMonitor' = 'AWSInsightsIndexService.UpdateAnomalyMonitor' }

	export enum UpdateAnomalySubscriptionX_Amz_Target { 'AWSInsightsIndexService.UpdateAnomalySubscription' = 'AWSInsightsIndexService.UpdateAnomalySubscription' }

	export enum UpdateCostAllocationTagsStatusX_Amz_Target { 'AWSInsightsIndexService.UpdateCostAllocationTagsStatus' = 'AWSInsightsIndexService.UpdateCostAllocationTagsStatus' }

	export enum UpdateCostCategoryDefinitionX_Amz_Target { 'AWSInsightsIndexService.UpdateCostCategoryDefinition' = 'AWSInsightsIndexService.UpdateCostCategoryDefinition' }

}

