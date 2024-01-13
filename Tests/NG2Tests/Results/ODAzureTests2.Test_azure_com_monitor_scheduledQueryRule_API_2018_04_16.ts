import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Action descriptor. */
	export interface Action {

		/**
		 * Specifies the action. Supported values - AlertingAction, LogToMetricAction
		 * Required
		 */
		'odata.type': string;
	}

	/** Action descriptor. */
	export interface ActionFormProperties {

		/**
		 * Specifies the action. Supported values - AlertingAction, LogToMetricAction
		 * Required
		 */
		'odata.type': FormControl<string | null | undefined>,
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
			'odata.type': new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Severity Level of Alert */
	export enum AlertSeverity { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4 }


	/** Specify action need to be taken when rule type is Alert */
	export interface AlertingAction {

		/** Azure action group */
		aznsAction?: AzNsActionGroup;

		/**
		 * Severity Level of Alert
		 * Required
		 */
		severity: AlertSeverity;

		/** time (in minutes) for which Alerts should be throttled or suppressed. */
		throttlingInMin?: number | null;

		/**
		 * The condition that results in the Log Search rule.
		 * Required
		 */
		trigger: TriggerCondition;
	}

	/** Specify action need to be taken when rule type is Alert */
	export interface AlertingActionFormProperties {

		/**
		 * Severity Level of Alert
		 * Required
		 */
		severity: FormControl<AlertSeverity | null | undefined>,

		/** time (in minutes) for which Alerts should be throttled or suppressed. */
		throttlingInMin: FormControl<number | null | undefined>,
	}
	export function CreateAlertingActionFormGroup() {
		return new FormGroup<AlertingActionFormProperties>({
			severity: new FormControl<AlertSeverity | null | undefined>(undefined, [Validators.required]),
			throttlingInMin: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Azure action group */
	export interface AzNsActionGroup {

		/** Azure Action Group reference. */
		actionGroup?: Array<string>;

		/** Custom payload to be sent for all webhook URI in Azure action group */
		customWebhookPayload?: string | null;

		/** Custom subject override for all email ids in Azure action group */
		emailSubject?: string | null;
	}

	/** Azure action group */
	export interface AzNsActionGroupFormProperties {

		/** Custom payload to be sent for all webhook URI in Azure action group */
		customWebhookPayload: FormControl<string | null | undefined>,

		/** Custom subject override for all email ids in Azure action group */
		emailSubject: FormControl<string | null | undefined>,
	}
	export function CreateAzNsActionGroupFormGroup() {
		return new FormGroup<AzNsActionGroupFormProperties>({
			customWebhookPayload: new FormControl<string | null | undefined>(undefined),
			emailSubject: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The condition that results in the Log Search rule. */
	export interface TriggerCondition {

		/** A log metrics trigger descriptor. */
		metricTrigger?: LogMetricTrigger;

		/**
		 * Result or count threshold based on which rule should be triggered.
		 * Required
		 */
		threshold: number;

		/**
		 * Result Condition Evaluation criteria. Supported Values - 'GreaterThan' or 'LessThan' or 'Equal'.
		 * Required
		 */
		thresholdOperator: LogMetricTriggerThresholdOperator;
	}

	/** The condition that results in the Log Search rule. */
	export interface TriggerConditionFormProperties {

		/**
		 * Result or count threshold based on which rule should be triggered.
		 * Required
		 */
		threshold: FormControl<number | null | undefined>,

		/**
		 * Result Condition Evaluation criteria. Supported Values - 'GreaterThan' or 'LessThan' or 'Equal'.
		 * Required
		 */
		thresholdOperator: FormControl<LogMetricTriggerThresholdOperator | null | undefined>,
	}
	export function CreateTriggerConditionFormGroup() {
		return new FormGroup<TriggerConditionFormProperties>({
			threshold: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			thresholdOperator: new FormControl<LogMetricTriggerThresholdOperator | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A log metrics trigger descriptor. */
	export interface LogMetricTrigger {

		/** Evaluation of metric on a particular column */
		metricColumn?: string | null;

		/** Metric Trigger Evaluation Type */
		metricTriggerType?: LogMetricTriggerMetricTriggerType | null;

		/** The threshold of the metric trigger. */
		threshold?: number | null;

		/** Result Condition Evaluation criteria. Supported Values - 'GreaterThan' or 'LessThan' or 'Equal'. */
		thresholdOperator?: LogMetricTriggerThresholdOperator | null;
	}

	/** A log metrics trigger descriptor. */
	export interface LogMetricTriggerFormProperties {

		/** Evaluation of metric on a particular column */
		metricColumn: FormControl<string | null | undefined>,

		/** Metric Trigger Evaluation Type */
		metricTriggerType: FormControl<LogMetricTriggerMetricTriggerType | null | undefined>,

		/** The threshold of the metric trigger. */
		threshold: FormControl<number | null | undefined>,

		/** Result Condition Evaluation criteria. Supported Values - 'GreaterThan' or 'LessThan' or 'Equal'. */
		thresholdOperator: FormControl<LogMetricTriggerThresholdOperator | null | undefined>,
	}
	export function CreateLogMetricTriggerFormGroup() {
		return new FormGroup<LogMetricTriggerFormProperties>({
			metricColumn: new FormControl<string | null | undefined>(undefined),
			metricTriggerType: new FormControl<LogMetricTriggerMetricTriggerType | null | undefined>(undefined),
			threshold: new FormControl<number | null | undefined>(undefined),
			thresholdOperator: new FormControl<LogMetricTriggerThresholdOperator | null | undefined>(undefined),
		});

	}

	export enum LogMetricTriggerMetricTriggerType { Consecutive = 0, Total = 1 }

	export enum LogMetricTriggerThresholdOperator { GreaterThan = 0, LessThan = 1, Equal = 2 }


	/** Result Condition Evaluation criteria. Supported Values - 'GreaterThan' or 'LessThan' or 'Equal'. */
	export enum ConditionalOperator { GreaterThan = 0, LessThan = 1, Equal = 2 }


	/** Specifies the criteria for converting log to metric. */
	export interface Criteria {

		/** List of Dimensions for creating metric */
		dimensions?: Array<Dimension>;

		/**
		 * Name of the metric
		 * Required
		 */
		metricName: string;
	}

	/** Specifies the criteria for converting log to metric. */
	export interface CriteriaFormProperties {

		/**
		 * Name of the metric
		 * Required
		 */
		metricName: FormControl<string | null | undefined>,
	}
	export function CreateCriteriaFormGroup() {
		return new FormGroup<CriteriaFormProperties>({
			metricName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the criteria for converting log to metric. */
	export interface Dimension {

		/**
		 * Name of the dimension
		 * Required
		 */
		name: string;

		/**
		 * Operator for dimension values
		 * Required
		 */
		operator: DimensionOperator;

		/**
		 * List of dimension values
		 * Required
		 */
		values: Array<string>;
	}

	/** Specifies the criteria for converting log to metric. */
	export interface DimensionFormProperties {

		/**
		 * Name of the dimension
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Operator for dimension values
		 * Required
		 */
		operator: FormControl<DimensionOperator | null | undefined>,
	}
	export function CreateDimensionFormGroup() {
		return new FormGroup<DimensionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operator: new FormControl<DimensionOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DimensionOperator { Include = 0 }


	/** Describes the format of Error response. */
	export interface ErrorResponse {

		/** Error code */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}

	/** Describes the format of Error response. */
	export interface ErrorResponseFormProperties {

		/** Error code */
		code: FormControl<string | null | undefined>,

		/** Error message indicating why the operation failed. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Log Search Rule Definition */
	export interface LogSearchRule {

		/**
		 * Action descriptor.
		 * Required
		 */
		action: Action;

		/** The description of the Log Search rule. */
		description?: string | null;

		/** The flag which indicates whether the Log Search rule is enabled. Value should be true or false */
		enabled?: LogSearchRuleEnabled | null;

		/** Last time the rule was updated in IS08601 format. */
		lastUpdatedTime?: Date | null;

		/** Provisioning state of the scheduled query rule */
		provisioningState?: LogSearchRuleProvisioningState | null;

		/** Defines how often to run the search and the time interval. */
		schedule?: Schedule;

		/**
		 * Specifies the log search query.
		 * Required
		 */
		source: Source;
	}

	/** Log Search Rule Definition */
	export interface LogSearchRuleFormProperties {

		/** The description of the Log Search rule. */
		description: FormControl<string | null | undefined>,

		/** The flag which indicates whether the Log Search rule is enabled. Value should be true or false */
		enabled: FormControl<LogSearchRuleEnabled | null | undefined>,

		/** Last time the rule was updated in IS08601 format. */
		lastUpdatedTime: FormControl<Date | null | undefined>,

		/** Provisioning state of the scheduled query rule */
		provisioningState: FormControl<LogSearchRuleProvisioningState | null | undefined>,
	}
	export function CreateLogSearchRuleFormGroup() {
		return new FormGroup<LogSearchRuleFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<LogSearchRuleEnabled | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<LogSearchRuleProvisioningState | null | undefined>(undefined),
		});

	}

	export enum LogSearchRuleEnabled { true = 0, false = 1 }

	export enum LogSearchRuleProvisioningState { Succeeded = 0, Deploying = 1, Canceled = 2, Failed = 3 }


	/** Defines how often to run the search and the time interval. */
	export interface Schedule {

		/**
		 * frequency (in minutes) at which rule condition should be evaluated.
		 * Required
		 */
		frequencyInMinutes: number;

		/**
		 * Time window for which data needs to be fetched for query (should be greater than or equal to frequencyInMinutes).
		 * Required
		 */
		timeWindowInMinutes: number;
	}

	/** Defines how often to run the search and the time interval. */
	export interface ScheduleFormProperties {

		/**
		 * frequency (in minutes) at which rule condition should be evaluated.
		 * Required
		 */
		frequencyInMinutes: FormControl<number | null | undefined>,

		/**
		 * Time window for which data needs to be fetched for query (should be greater than or equal to frequencyInMinutes).
		 * Required
		 */
		timeWindowInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
			frequencyInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timeWindowInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the log search query. */
	export interface Source {

		/** List of  Resource referred into query */
		authorizedResources?: Array<string>;

		/**
		 * The resource uri over which log search query is to be run.
		 * Required
		 */
		dataSourceId: string;

		/** Log search query. Required for action type - AlertingAction */
		query?: string | null;

		/** Set value to 'ResultAccount' */
		queryType?: SourceQueryType | null;
	}

	/** Specifies the log search query. */
	export interface SourceFormProperties {

		/**
		 * The resource uri over which log search query is to be run.
		 * Required
		 */
		dataSourceId: FormControl<string | null | undefined>,

		/** Log search query. Required for action type - AlertingAction */
		query: FormControl<string | null | undefined>,

		/** Set value to 'ResultAccount' */
		queryType: FormControl<SourceQueryType | null | undefined>,
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
			dataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			query: new FormControl<string | null | undefined>(undefined),
			queryType: new FormControl<SourceQueryType | null | undefined>(undefined),
		});

	}

	export enum SourceQueryType { ResultCount = 0 }


	/** Log Search Rule Definition for Patching */
	export interface LogSearchRulePatch {

		/** The flag which indicates whether the Log Search rule is enabled. Value should be true or false */
		enabled?: LogSearchRuleEnabled | null;
	}

	/** Log Search Rule Definition for Patching */
	export interface LogSearchRulePatchFormProperties {

		/** The flag which indicates whether the Log Search rule is enabled. Value should be true or false */
		enabled: FormControl<LogSearchRuleEnabled | null | undefined>,
	}
	export function CreateLogSearchRulePatchFormGroup() {
		return new FormGroup<LogSearchRulePatchFormProperties>({
			enabled: new FormControl<LogSearchRuleEnabled | null | undefined>(undefined),
		});

	}


	/** The Log Search Rule resource. */
	export interface LogSearchRuleResource {

		/**
		 * Log Search Rule Definition
		 * Required
		 */
		properties: LogSearchRule;
	}

	/** The Log Search Rule resource. */
	export interface LogSearchRuleResourceFormProperties {
	}
	export function CreateLogSearchRuleResourceFormGroup() {
		return new FormGroup<LogSearchRuleResourceFormProperties>({
		});

	}


	/** Represents a collection of Log Search rule resources. */
	export interface LogSearchRuleResourceCollection {

		/** The values for the Log Search Rule resources. */
		value?: Array<LogSearchRuleResource>;
	}

	/** Represents a collection of Log Search rule resources. */
	export interface LogSearchRuleResourceCollectionFormProperties {
	}
	export function CreateLogSearchRuleResourceCollectionFormGroup() {
		return new FormGroup<LogSearchRuleResourceCollectionFormProperties>({
		});

	}


	/** The log search rule resource for patch operations. */
	export interface LogSearchRuleResourcePatch {

		/** Log Search Rule Definition for Patching */
		properties?: LogSearchRulePatch;

		/** Resource tags */
		tags?: any;
	}

	/** The log search rule resource for patch operations. */
	export interface LogSearchRuleResourcePatchFormProperties {

		/** Resource tags */
		tags: FormControl<any | null | undefined>,
	}
	export function CreateLogSearchRuleResourcePatchFormGroup() {
		return new FormGroup<LogSearchRuleResourcePatchFormProperties>({
			tags: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Specify action need to be taken when rule type is converting log to metric */
	export interface LogToMetricAction {

		/**
		 * Criteria of Metric
		 * Required
		 */
		criteria: Array<Criteria>;
	}

	/** Specify action need to be taken when rule type is converting log to metric */
	export interface LogToMetricActionFormProperties {
	}
	export function CreateLogToMetricActionFormGroup() {
		return new FormGroup<LogToMetricActionFormProperties>({
		});

	}


	/** Metric Trigger Evaluation Type */
	export enum MetricTriggerType { Consecutive = 0, Total = 1 }


	/** Set value to 'ResultAccount' */
	export enum QueryType { ResultCount = 0 }


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
		 * List the Log Search rules within a subscription group.
		 * Get subscriptions/{subscriptionId}/providers/microsoft.insights/scheduledQueryRules
		 * @param {string} api_version Client Api Version.
		 * @param {string} filter The filter to apply on the operation. For more information please see https://msdn.microsoft.com/en-us/library/azure/dn931934.aspx
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @return {LogSearchRuleResourceCollection} Successful request for a list of alert rules
		 */
		ScheduledQueryRules_ListBySubscription(api_version: string, filter: string | null | undefined, subscriptionId: string): Observable<LogSearchRuleResourceCollection> {
			return this.http.get<LogSearchRuleResourceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/microsoft.insights/scheduledQueryRules?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * List the Log Search rules within a resource group.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/scheduledQueryRules
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client Api Version.
		 * @param {string} filter The filter to apply on the operation. For more information please see https://msdn.microsoft.com/en-us/library/azure/dn931934.aspx
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @return {LogSearchRuleResourceCollection} Successful request for a list of alert rules
		 */
		ScheduledQueryRules_ListByResourceGroup(resourceGroupName: string, api_version: string, filter: string | null | undefined, subscriptionId: string): Observable<LogSearchRuleResourceCollection> {
			return this.http.get<LogSearchRuleResourceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/scheduledQueryRules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Gets an Log Search rule
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/scheduledQueryRules/{ruleName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ruleName The name of the rule.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @return {LogSearchRuleResource} Successful request to get a Log Search rule
		 */
		ScheduledQueryRules_Get(resourceGroupName: string, ruleName: string, api_version: string, subscriptionId: string): Observable<LogSearchRuleResource> {
			return this.http.get<LogSearchRuleResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/scheduledQueryRules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an log search rule.
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/scheduledQueryRules/{ruleName}
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ruleName The name of the rule.
		 * @param {string} api_version Client Api Version.
		 * @param {LogSearchRuleResource} requestBody The parameters of the rule to create or update.
		 * @return {LogSearchRuleResource} Successful request to update an Log Search rule
		 */
		ScheduledQueryRules_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, ruleName: string, api_version: string, requestBody: LogSearchRuleResource): Observable<LogSearchRuleResource> {
			return this.http.put<LogSearchRuleResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/scheduledQueryRules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Log Search rule
		 * Delete subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/scheduledQueryRules/{ruleName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ruleName The name of the rule.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @return {void} Successful request to delete a  Log Search rule
		 */
		ScheduledQueryRules_Delete(resourceGroupName: string, ruleName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/scheduledQueryRules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update log search Rule.
		 * Patch subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/scheduledQueryRules/{ruleName}
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ruleName The name of the rule.
		 * @param {string} api_version Client Api Version.
		 * @param {LogSearchRuleResourcePatch} requestBody The parameters of the rule to update.
		 * @return {LogSearchRuleResource} Successful request to update an Log Search rule
		 */
		ScheduledQueryRules_Update(subscriptionId: string, resourceGroupName: string, ruleName: string, api_version: string, requestBody: LogSearchRuleResourcePatch): Observable<LogSearchRuleResource> {
			return this.http.patch<LogSearchRuleResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/scheduledQueryRules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

