import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Criterion for dynamic threshold. */
	export interface DynamicMetricCriteria {

		/**
		 * The extent of deviation required to trigger an alert. This will affect how tight the threshold is to the metric series pattern.
		 * Required
		 */
		alertSensitivity: DynamicMetricCriteriaAlertSensitivity;

		/**
		 * The minimum number of violations required within the selected lookback time window required to raise an alert.
		 * Required
		 */
		failingPeriods: DynamicThresholdFailingPeriods;

		/** Use this option to set the date from which to start learning the metric historical data and calculate the dynamic thresholds (in ISO8601 format) */
		ignoreDataBefore?: Date | null;

		/**
		 * The operator used to compare the metric value against the threshold.
		 * Required
		 */
		operator: DynamicMetricCriteriaOperator;
	}

	/** Criterion for dynamic threshold. */
	export interface DynamicMetricCriteriaFormProperties {

		/**
		 * The extent of deviation required to trigger an alert. This will affect how tight the threshold is to the metric series pattern.
		 * Required
		 */
		alertSensitivity: FormControl<DynamicMetricCriteriaAlertSensitivity | null | undefined>,

		/** Use this option to set the date from which to start learning the metric historical data and calculate the dynamic thresholds (in ISO8601 format) */
		ignoreDataBefore: FormControl<Date | null | undefined>,

		/**
		 * The operator used to compare the metric value against the threshold.
		 * Required
		 */
		operator: FormControl<DynamicMetricCriteriaOperator | null | undefined>,
	}
	export function CreateDynamicMetricCriteriaFormGroup() {
		return new FormGroup<DynamicMetricCriteriaFormProperties>({
			alertSensitivity: new FormControl<DynamicMetricCriteriaAlertSensitivity | null | undefined>(undefined, [Validators.required]),
			ignoreDataBefore: new FormControl<Date | null | undefined>(undefined),
			operator: new FormControl<DynamicMetricCriteriaOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DynamicMetricCriteriaAlertSensitivity { Low = 0, Medium = 1, High = 2 }

	export enum DynamicMetricCriteriaOperator { GreaterThan = 0, LessThan = 1, GreaterOrLessThan = 2 }


	/** The minimum number of violations required within the selected lookback time window required to raise an alert. */
	export interface DynamicThresholdFailingPeriods {

		/**
		 * The number of violations to trigger an alert. Should be smaller or equal to numberOfEvaluationPeriods.
		 * Required
		 */
		minFailingPeriodsToAlert: number;

		/**
		 * The number of aggregated lookback points. The lookback time window is calculated based on the aggregation granularity (windowSize) and the selected number of aggregated points.
		 * Required
		 */
		numberOfEvaluationPeriods: number;
	}

	/** The minimum number of violations required within the selected lookback time window required to raise an alert. */
	export interface DynamicThresholdFailingPeriodsFormProperties {

		/**
		 * The number of violations to trigger an alert. Should be smaller or equal to numberOfEvaluationPeriods.
		 * Required
		 */
		minFailingPeriodsToAlert: FormControl<number | null | undefined>,

		/**
		 * The number of aggregated lookback points. The lookback time window is calculated based on the aggregation granularity (windowSize) and the selected number of aggregated points.
		 * Required
		 */
		numberOfEvaluationPeriods: FormControl<number | null | undefined>,
	}
	export function CreateDynamicThresholdFailingPeriodsFormGroup() {
		return new FormGroup<DynamicThresholdFailingPeriodsFormProperties>({
			minFailingPeriodsToAlert: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			numberOfEvaluationPeriods: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An alert action. */
	export interface MetricAlertAction {

		/** the id of the action group to use. */
		actionGroupId?: string | null;

		/** The properties of a webhook object. */
		webhookProperties?: {[id: string]: string };
	}

	/** An alert action. */
	export interface MetricAlertActionFormProperties {

		/** the id of the action group to use. */
		actionGroupId: FormControl<string | null | undefined>,

		/** The properties of a webhook object. */
		webhookProperties: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateMetricAlertActionFormGroup() {
		return new FormGroup<MetricAlertActionFormProperties>({
			actionGroupId: new FormControl<string | null | undefined>(undefined),
			webhookProperties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The rule criteria that defines the conditions of the alert rule. */
	export interface MetricAlertCriteria {

		/**
		 * specifies the type of the alert criteria.
		 * Required
		 */
		'odata.type': MetricAlertCriteriaOdata_type;
	}

	/** The rule criteria that defines the conditions of the alert rule. */
	export interface MetricAlertCriteriaFormProperties {

		/**
		 * specifies the type of the alert criteria.
		 * Required
		 */
		'odata.type': FormControl<MetricAlertCriteriaOdata_type | null | undefined>,
	}
	export function CreateMetricAlertCriteriaFormGroup() {
		return new FormGroup<MetricAlertCriteriaFormProperties>({
			'odata.type': new FormControl<MetricAlertCriteriaOdata_type | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MetricAlertCriteriaOdata_type { 'Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria' = 0, 'Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria' = 1 }


	/** Specifies the metric alert criteria for multiple resource that has multiple metric criteria. */
	export interface MetricAlertMultipleResourceMultipleMetricCriteria {

		/** the list of multiple metric criteria for this 'all of' operation. */
		allOf?: Array<MultiMetricCriteria>;
	}

	/** Specifies the metric alert criteria for multiple resource that has multiple metric criteria. */
	export interface MetricAlertMultipleResourceMultipleMetricCriteriaFormProperties {
	}
	export function CreateMetricAlertMultipleResourceMultipleMetricCriteriaFormGroup() {
		return new FormGroup<MetricAlertMultipleResourceMultipleMetricCriteriaFormProperties>({
		});

	}


	/** The types of conditions for a multi resource alert. */
	export interface MultiMetricCriteria {

		/**
		 * Specifies the type of threshold criteria
		 * Required
		 */
		criterionType: MultiMetricCriteriaCriterionType;

		/** List of dimension conditions. */
		dimensions?: Array<MetricDimension>;

		/**
		 * Name of the metric.
		 * Required
		 */
		metricName: string;

		/** Namespace of the metric. */
		metricNamespace?: string | null;

		/**
		 * Name of the criteria.
		 * Required
		 */
		name: string;

		/**
		 * the criteria time aggregation types.
		 * Required
		 */
		timeAggregation: MultiMetricCriteriaTimeAggregation;
	}

	/** The types of conditions for a multi resource alert. */
	export interface MultiMetricCriteriaFormProperties {

		/**
		 * Specifies the type of threshold criteria
		 * Required
		 */
		criterionType: FormControl<MultiMetricCriteriaCriterionType | null | undefined>,

		/**
		 * Name of the metric.
		 * Required
		 */
		metricName: FormControl<string | null | undefined>,

		/** Namespace of the metric. */
		metricNamespace: FormControl<string | null | undefined>,

		/**
		 * Name of the criteria.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * the criteria time aggregation types.
		 * Required
		 */
		timeAggregation: FormControl<MultiMetricCriteriaTimeAggregation | null | undefined>,
	}
	export function CreateMultiMetricCriteriaFormGroup() {
		return new FormGroup<MultiMetricCriteriaFormProperties>({
			criterionType: new FormControl<MultiMetricCriteriaCriterionType | null | undefined>(undefined, [Validators.required]),
			metricName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metricNamespace: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeAggregation: new FormControl<MultiMetricCriteriaTimeAggregation | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MultiMetricCriteriaCriterionType { StaticThresholdCriterion = 0, DynamicThresholdCriterion = 1 }


	/** Specifies a metric dimension. */
	export interface MetricDimension {

		/**
		 * Name of the dimension.
		 * Required
		 */
		name: string;

		/**
		 * the dimension operator. Only 'Include' and 'Exclude' are supported
		 * Required
		 */
		operator: string;

		/**
		 * list of dimension values.
		 * Required
		 */
		values: Array<string>;
	}

	/** Specifies a metric dimension. */
	export interface MetricDimensionFormProperties {

		/**
		 * Name of the dimension.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * the dimension operator. Only 'Include' and 'Exclude' are supported
		 * Required
		 */
		operator: FormControl<string | null | undefined>,
	}
	export function CreateMetricDimensionFormGroup() {
		return new FormGroup<MetricDimensionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operator: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MultiMetricCriteriaTimeAggregation { Average = 0, Minimum = 1, Maximum = 2, Total = 3 }


	/** An alert rule. */
	export interface MetricAlertProperties {

		/** the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved. */
		actions?: Array<MetricAlertAction>;

		/** the flag that indicates whether the alert should be auto resolved or not. */
		autoMitigate?: boolean | null;

		/**
		 * The rule criteria that defines the conditions of the alert rule.
		 * Required
		 */
		criteria: MetricAlertCriteria;

		/**
		 * the description of the metric alert that will be included in the alert email.
		 * Required
		 */
		description: string;

		/**
		 * the flag that indicates whether the metric alert is enabled.
		 * Required
		 */
		enabled: boolean;

		/**
		 * how often the metric alert is evaluated represented in ISO 8601 duration format.
		 * Required
		 */
		evaluationFrequency: string;

		/** Last time the rule was updated in ISO8601 format. */
		lastUpdatedTime?: Date | null;

		/** the list of resource id's that this metric alert is scoped to. */
		scopes?: Array<string>;

		/**
		 * Alert severity {0, 1, 2, 3, 4}
		 * Required
		 */
		severity: number;

		/** the region of the target resource(s) on which the alert is created/updated. Mandatory for MultipleResourceMultipleMetricCriteria. */
		targetResourceRegion?: string | null;

		/** the resource type of the target resource(s) on which the alert is created/updated. Mandatory for MultipleResourceMultipleMetricCriteria. */
		targetResourceType?: string | null;

		/**
		 * the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold.
		 * Required
		 */
		windowSize: string;
	}

	/** An alert rule. */
	export interface MetricAlertPropertiesFormProperties {

		/** the flag that indicates whether the alert should be auto resolved or not. */
		autoMitigate: FormControl<boolean | null | undefined>,

		/**
		 * the description of the metric alert that will be included in the alert email.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * the flag that indicates whether the metric alert is enabled.
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * how often the metric alert is evaluated represented in ISO 8601 duration format.
		 * Required
		 */
		evaluationFrequency: FormControl<string | null | undefined>,

		/** Last time the rule was updated in ISO8601 format. */
		lastUpdatedTime: FormControl<Date | null | undefined>,

		/**
		 * Alert severity {0, 1, 2, 3, 4}
		 * Required
		 */
		severity: FormControl<number | null | undefined>,

		/** the region of the target resource(s) on which the alert is created/updated. Mandatory for MultipleResourceMultipleMetricCriteria. */
		targetResourceRegion: FormControl<string | null | undefined>,

		/** the resource type of the target resource(s) on which the alert is created/updated. Mandatory for MultipleResourceMultipleMetricCriteria. */
		targetResourceType: FormControl<string | null | undefined>,

		/**
		 * the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold.
		 * Required
		 */
		windowSize: FormControl<string | null | undefined>,
	}
	export function CreateMetricAlertPropertiesFormGroup() {
		return new FormGroup<MetricAlertPropertiesFormProperties>({
			autoMitigate: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			evaluationFrequency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			severity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			targetResourceRegion: new FormControl<string | null | undefined>(undefined),
			targetResourceType: new FormControl<string | null | undefined>(undefined),
			windowSize: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The metric alert resource. */
	export interface MetricAlertResource {

		/**
		 * An alert rule.
		 * Required
		 */
		properties: MetricAlertProperties;
	}

	/** The metric alert resource. */
	export interface MetricAlertResourceFormProperties {
	}
	export function CreateMetricAlertResourceFormGroup() {
		return new FormGroup<MetricAlertResourceFormProperties>({
		});

	}


	/** Represents a collection of alert rule resources. */
	export interface MetricAlertResourceCollection {

		/** the values for the alert rule resources. */
		value?: Array<MetricAlertResource>;
	}

	/** Represents a collection of alert rule resources. */
	export interface MetricAlertResourceCollectionFormProperties {
	}
	export function CreateMetricAlertResourceCollectionFormGroup() {
		return new FormGroup<MetricAlertResourceCollectionFormProperties>({
		});

	}


	/** The metric alert resource for patch operations. */
	export interface MetricAlertResourcePatch {

		/** An alert rule. */
		properties?: MetricAlertProperties;

		/** Resource tags */
		tags?: any;
	}

	/** The metric alert resource for patch operations. */
	export interface MetricAlertResourcePatchFormProperties {

		/** Resource tags */
		tags: FormControl<any | null | undefined>,
	}
	export function CreateMetricAlertResourcePatchFormGroup() {
		return new FormGroup<MetricAlertResourcePatchFormProperties>({
			tags: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Specifies the metric alert criteria for a single resource that has multiple metric criteria. */
	export interface MetricAlertSingleResourceMultipleMetricCriteria {

		/** The list of metric criteria for this 'all of' operation. */
		allOf?: Array<MetricCriteria>;
	}

	/** Specifies the metric alert criteria for a single resource that has multiple metric criteria. */
	export interface MetricAlertSingleResourceMultipleMetricCriteriaFormProperties {
	}
	export function CreateMetricAlertSingleResourceMultipleMetricCriteriaFormGroup() {
		return new FormGroup<MetricAlertSingleResourceMultipleMetricCriteriaFormProperties>({
		});

	}


	/** Criterion to filter metrics. */
	export interface MetricCriteria {

		/**
		 * the criteria operator.
		 * Required
		 */
		operator: MetricCriteriaOperator;

		/**
		 * the criteria threshold value that activates the alert.
		 * Required
		 */
		threshold: number;
	}

	/** Criterion to filter metrics. */
	export interface MetricCriteriaFormProperties {

		/**
		 * the criteria operator.
		 * Required
		 */
		operator: FormControl<MetricCriteriaOperator | null | undefined>,

		/**
		 * the criteria threshold value that activates the alert.
		 * Required
		 */
		threshold: FormControl<number | null | undefined>,
	}
	export function CreateMetricCriteriaFormGroup() {
		return new FormGroup<MetricCriteriaFormProperties>({
			operator: new FormControl<MetricCriteriaOperator | null | undefined>(undefined, [Validators.required]),
			threshold: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MetricCriteriaOperator { Equals = 0, NotEquals = 1, GreaterThan = 2, GreaterThanOrEqual = 3, LessThan = 4, LessThanOrEqual = 5 }


	/** An alert status. */
	export interface MetricAlertStatus {

		/** The alert rule arm id. */
		id?: string | null;

		/** The status name. */
		name?: string | null;

		/** An alert status properties. */
		properties?: MetricAlertStatusProperties;

		/** The extended resource type name. */
		type?: string | null;
	}

	/** An alert status. */
	export interface MetricAlertStatusFormProperties {

		/** The alert rule arm id. */
		id: FormControl<string | null | undefined>,

		/** The status name. */
		name: FormControl<string | null | undefined>,

		/** The extended resource type name. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMetricAlertStatusFormGroup() {
		return new FormGroup<MetricAlertStatusFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a collection of alert rule resources. */
	export interface MetricAlertStatusCollection {

		/** the values for the alert rule resources. */
		value?: Array<MetricAlertStatus>;
	}

	/** Represents a collection of alert rule resources. */
	export interface MetricAlertStatusCollectionFormProperties {
	}
	export function CreateMetricAlertStatusCollectionFormGroup() {
		return new FormGroup<MetricAlertStatusCollectionFormProperties>({
		});

	}


	/** An alert status properties. */
	export interface MetricAlertStatusProperties {

		/** An object describing the type of the dimensions. */
		dimensions?: {[id: string]: string };

		/** status value */
		status?: string | null;

		/** UTC time when the status was checked. */
		timestamp?: Date | null;
	}

	/** An alert status properties. */
	export interface MetricAlertStatusPropertiesFormProperties {

		/** An object describing the type of the dimensions. */
		dimensions: FormControl<{[id: string]: string } | null | undefined>,

		/** status value */
		status: FormControl<string | null | undefined>,

		/** UTC time when the status was checked. */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateMetricAlertStatusPropertiesFormGroup() {
		return new FormGroup<MetricAlertStatusPropertiesFormProperties>({
			dimensions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** An azure resource object */
	export interface Resource {

		/** Azure resource Id */
		id?: string | null;

		/**
		 * Resource location
		 * Required
		 */
		location: string;

		/** Azure resource name */
		name?: string | null;

		/** Resource tags */
		tags?: any;

		/** Azure resource type */
		type?: string | null;
	}

	/** An azure resource object */
	export interface ResourceFormProperties {

		/** Azure resource Id */
		id: FormControl<string | null | undefined>,

		/**
		 * Resource location
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Azure resource name */
		name: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<any | null | undefined>,

		/** Azure resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve alert rule definitions in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Insights/metricAlerts
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} api_version Client Api Version.
		 * @return {MetricAlertResourceCollection} Successful request for a list of metric alerts
		 */
		MetricAlerts_ListBySubscription(subscriptionId: string, api_version: string): Observable<MetricAlertResourceCollection> {
			return this.http.get<MetricAlertResourceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Insights/metricAlerts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve alert rule definitions in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client Api Version.
		 * @return {MetricAlertResourceCollection} Successful request for a list of metric alerts
		 */
		MetricAlerts_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<MetricAlertResourceCollection> {
			return this.http.get<MetricAlertResourceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Insights/metricAlerts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve an alert rule definition.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts/{ruleName}
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ruleName The name of the rule.
		 * @param {string} api_version Client Api Version.
		 * @return {MetricAlertResource} Successful request for a list of metric alerts
		 */
		MetricAlerts_Get(subscriptionId: string, resourceGroupName: string, ruleName: string, api_version: string): Observable<MetricAlertResource> {
			return this.http.get<MetricAlertResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Insights/metricAlerts/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update an metric alert definition.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts/{ruleName}
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ruleName The name of the rule.
		 * @param {string} api_version Client Api Version.
		 * @param {MetricAlertResource} requestBody The parameters of the rule to create or update.
		 * @return {MetricAlertResource} OK
		 */
		MetricAlerts_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, ruleName: string, api_version: string, requestBody: MetricAlertResource): Observable<MetricAlertResource> {
			return this.http.put<MetricAlertResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Insights/metricAlerts/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an alert rule definition.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts/{ruleName}
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ruleName The name of the rule.
		 * @param {string} api_version Client Api Version.
		 * @return {void} Successful request to delete an metric alert rule
		 */
		MetricAlerts_Delete(subscriptionId: string, resourceGroupName: string, ruleName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Insights/metricAlerts/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an metric alert definition.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts/{ruleName}
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ruleName The name of the rule.
		 * @param {string} api_version Client Api Version.
		 * @param {MetricAlertResourcePatch} requestBody The parameters of the rule to update.
		 * @return {MetricAlertResource} OK
		 */
		MetricAlerts_Update(subscriptionId: string, resourceGroupName: string, ruleName: string, api_version: string, requestBody: MetricAlertResourcePatch): Observable<MetricAlertResource> {
			return this.http.patch<MetricAlertResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Insights/metricAlerts/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve an alert rule status.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts/{ruleName}/status
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ruleName The name of the rule.
		 * @param {string} api_version Client Api Version.
		 * @return {MetricAlertStatusCollection} Successful request for a list of metric alerts
		 */
		MetricAlertsStatus_List(subscriptionId: string, resourceGroupName: string, ruleName: string, api_version: string): Observable<MetricAlertStatusCollection> {
			return this.http.get<MetricAlertStatusCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Insights/metricAlerts/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '/status&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve an alert rule status.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts/{ruleName}/status/{statusName}
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ruleName The name of the rule.
		 * @param {string} statusName The name of the status.
		 * @param {string} api_version Client Api Version.
		 * @return {MetricAlertStatusCollection} Successful request for a list of metric alerts
		 */
		MetricAlertsStatus_ListByName(subscriptionId: string, resourceGroupName: string, ruleName: string, statusName: string, api_version: string): Observable<MetricAlertStatusCollection> {
			return this.http.get<MetricAlertStatusCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Insights/metricAlerts/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '/status/' + (statusName == null ? '' : encodeURIComponent(statusName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

