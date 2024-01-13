import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An alert rule. */
	export interface AlertRule {

		/** the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved. */
		actions?: Array<RuleAction>;

		/**
		 * The condition that results in the alert rule being activated.
		 * Required
		 */
		condition: RuleCondition;

		/** the description of the alert rule that will be included in the alert email. */
		description?: string | null;

		/**
		 * the flag that indicates whether the alert rule is enabled.
		 * Required
		 */
		isEnabled: boolean;

		/** Last time the rule was updated in ISO8601 format. */
		lastUpdatedTime?: Date | null;

		/**
		 * the name of the alert rule.
		 * Required
		 */
		name: string;
	}

	/** An alert rule. */
	export interface AlertRuleFormProperties {

		/** the description of the alert rule that will be included in the alert email. */
		description: FormControl<string | null | undefined>,

		/**
		 * the flag that indicates whether the alert rule is enabled.
		 * Required
		 */
		isEnabled: FormControl<boolean | null | undefined>,

		/** Last time the rule was updated in ISO8601 format. */
		lastUpdatedTime: FormControl<Date | null | undefined>,

		/**
		 * the name of the alert rule.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAlertRuleFormGroup() {
		return new FormGroup<AlertRuleFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			isEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The action that is performed when the alert rule becomes active, and when an alert condition is resolved. */
	export interface RuleAction {

		/**
		 * specifies the type of the action. There are two types of actions: RuleEmailAction and RuleWebhookAction.
		 * Required
		 */
		'odata.type': string;
	}

	/** The action that is performed when the alert rule becomes active, and when an alert condition is resolved. */
	export interface RuleActionFormProperties {

		/**
		 * specifies the type of the action. There are two types of actions: RuleEmailAction and RuleWebhookAction.
		 * Required
		 */
		'odata.type': FormControl<string | null | undefined>,
	}
	export function CreateRuleActionFormGroup() {
		return new FormGroup<RuleActionFormProperties>({
			'odata.type': new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The condition that results in the alert rule being activated. */
	export interface RuleCondition {

		/** The resource from which the rule collects its data. */
		dataSource?: RuleDataSource;

		/**
		 * specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric).
		 * Required
		 */
		'odata.type': string;
	}

	/** The condition that results in the alert rule being activated. */
	export interface RuleConditionFormProperties {

		/**
		 * specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric).
		 * Required
		 */
		'odata.type': FormControl<string | null | undefined>,
	}
	export function CreateRuleConditionFormGroup() {
		return new FormGroup<RuleConditionFormProperties>({
			'odata.type': new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The resource from which the rule collects its data. */
	export interface RuleDataSource {

		/**
		 * specifies the type of data source. There are two types of rule data sources: RuleMetricDataSource and RuleManagementEventDataSource
		 * Required
		 */
		'odata.type': string;

		/** the resource identifier of the resource the rule monitors. **NOTE**: this property cannot be updated for an existing rule. */
		resourceUri?: string | null;
	}

	/** The resource from which the rule collects its data. */
	export interface RuleDataSourceFormProperties {

		/**
		 * specifies the type of data source. There are two types of rule data sources: RuleMetricDataSource and RuleManagementEventDataSource
		 * Required
		 */
		'odata.type': FormControl<string | null | undefined>,

		/** the resource identifier of the resource the rule monitors. **NOTE**: this property cannot be updated for an existing rule. */
		resourceUri: FormControl<string | null | undefined>,
	}
	export function CreateRuleDataSourceFormGroup() {
		return new FormGroup<RuleDataSourceFormProperties>({
			'odata.type': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The alert rule resource. */
	export interface AlertRuleResource {

		/**
		 * An alert rule.
		 * Required
		 */
		properties: AlertRule;
	}

	/** The alert rule resource. */
	export interface AlertRuleResourceFormProperties {
	}
	export function CreateAlertRuleResourceFormGroup() {
		return new FormGroup<AlertRuleResourceFormProperties>({
		});

	}


	/** Represents a collection of alert rule resources. */
	export interface AlertRuleResourceCollection {

		/** the values for the alert rule resources. */
		value?: Array<AlertRuleResource>;
	}

	/** Represents a collection of alert rule resources. */
	export interface AlertRuleResourceCollectionFormProperties {
	}
	export function CreateAlertRuleResourceCollectionFormGroup() {
		return new FormGroup<AlertRuleResourceCollectionFormProperties>({
		});

	}


	/** The alert rule object for patch operations. */
	export interface AlertRuleResourcePatch {

		/** An alert rule. */
		properties?: AlertRule;

		/** Resource tags */
		tags?: any;
	}

	/** The alert rule object for patch operations. */
	export interface AlertRuleResourcePatchFormProperties {

		/** Resource tags */
		tags: FormControl<any | null | undefined>,
	}
	export function CreateAlertRuleResourcePatchFormGroup() {
		return new FormGroup<AlertRuleResourcePatchFormProperties>({
			tags: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Operators allowed in the rule condition. */
	export enum ConditionOperator { GreaterThan = 0, GreaterThanOrEqual = 1, LessThan = 2, LessThanOrEqual = 3 }


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


	/** A rule condition based on a certain number of locations failing. */
	export interface LocationThresholdRuleCondition {

		/**
		 * the number of locations that must fail to activate the alert.
		 * Required
		 * Minimum: 0
		 */
		failedLocationCount: number;

		/** the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day. */
		windowSize?: string | null;
	}

	/** A rule condition based on a certain number of locations failing. */
	export interface LocationThresholdRuleConditionFormProperties {

		/**
		 * the number of locations that must fail to activate the alert.
		 * Required
		 * Minimum: 0
		 */
		failedLocationCount: FormControl<number | null | undefined>,

		/** the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day. */
		windowSize: FormControl<string | null | undefined>,
	}
	export function CreateLocationThresholdRuleConditionFormGroup() {
		return new FormGroup<LocationThresholdRuleConditionFormProperties>({
			failedLocationCount: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			windowSize: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** How the data that is collected should be combined over time. */
	export interface ManagementEventAggregationCondition {

		/** Operators allowed in the rule condition. */
		operator?: ConditionOperator | null;

		/** The threshold value that activates the alert. */
		threshold?: number | null;

		/** the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day. */
		windowSize?: string | null;
	}

	/** How the data that is collected should be combined over time. */
	export interface ManagementEventAggregationConditionFormProperties {

		/** Operators allowed in the rule condition. */
		operator: FormControl<ConditionOperator | null | undefined>,

		/** The threshold value that activates the alert. */
		threshold: FormControl<number | null | undefined>,

		/** the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day. */
		windowSize: FormControl<string | null | undefined>,
	}
	export function CreateManagementEventAggregationConditionFormGroup() {
		return new FormGroup<ManagementEventAggregationConditionFormProperties>({
			operator: new FormControl<ConditionOperator | null | undefined>(undefined),
			threshold: new FormControl<number | null | undefined>(undefined),
			windowSize: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A management event rule condition. */
	export interface ManagementEventRuleCondition {

		/** How the data that is collected should be combined over time. */
		aggregation?: ManagementEventAggregationCondition;
	}

	/** A management event rule condition. */
	export interface ManagementEventRuleConditionFormProperties {
	}
	export function CreateManagementEventRuleConditionFormGroup() {
		return new FormGroup<ManagementEventRuleConditionFormProperties>({
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


	/** Specifies the action to send email when the rule condition is evaluated. The discriminator is always RuleEmailAction in this case. */
	export interface RuleEmailAction {

		/** the list of administrator's custom email addresses to notify of the activation of the alert. */
		customEmails?: Array<string>;

		/** Whether the administrators (service and co-administrators) of the service should be notified when the alert is activated. */
		sendToServiceOwners?: boolean | null;
	}

	/** Specifies the action to send email when the rule condition is evaluated. The discriminator is always RuleEmailAction in this case. */
	export interface RuleEmailActionFormProperties {

		/** Whether the administrators (service and co-administrators) of the service should be notified when the alert is activated. */
		sendToServiceOwners: FormControl<boolean | null | undefined>,
	}
	export function CreateRuleEmailActionFormGroup() {
		return new FormGroup<RuleEmailActionFormProperties>({
			sendToServiceOwners: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The claims for a rule management event data source. */
	export interface RuleManagementEventClaimsDataSource {

		/** the email address. */
		emailAddress?: string | null;
	}

	/** The claims for a rule management event data source. */
	export interface RuleManagementEventClaimsDataSourceFormProperties {

		/** the email address. */
		emailAddress: FormControl<string | null | undefined>,
	}
	export function CreateRuleManagementEventClaimsDataSourceFormGroup() {
		return new FormGroup<RuleManagementEventClaimsDataSourceFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A rule management event data source. The discriminator fields is always RuleManagementEventDataSource in this case. */
	export interface RuleManagementEventDataSource {

		/** The claims for a rule management event data source. */
		claims?: RuleManagementEventClaimsDataSource;

		/** the event name. */
		eventName?: string | null;

		/** the event source. */
		eventSource?: string | null;

		/** the level. */
		level?: string | null;

		/** The name of the operation that should be checked for. If no name is provided, any operation will match. */
		operationName?: string | null;

		/** the resource group name. */
		resourceGroupName?: string | null;

		/** the resource provider name. */
		resourceProviderName?: string | null;

		/** The status of the operation that should be checked for. If no status is provided, any status will match. */
		status?: string | null;

		/** the substatus. */
		subStatus?: string | null;
	}

	/** A rule management event data source. The discriminator fields is always RuleManagementEventDataSource in this case. */
	export interface RuleManagementEventDataSourceFormProperties {

		/** the event name. */
		eventName: FormControl<string | null | undefined>,

		/** the event source. */
		eventSource: FormControl<string | null | undefined>,

		/** the level. */
		level: FormControl<string | null | undefined>,

		/** The name of the operation that should be checked for. If no name is provided, any operation will match. */
		operationName: FormControl<string | null | undefined>,

		/** the resource group name. */
		resourceGroupName: FormControl<string | null | undefined>,

		/** the resource provider name. */
		resourceProviderName: FormControl<string | null | undefined>,

		/** The status of the operation that should be checked for. If no status is provided, any status will match. */
		status: FormControl<string | null | undefined>,

		/** the substatus. */
		subStatus: FormControl<string | null | undefined>,
	}
	export function CreateRuleManagementEventDataSourceFormGroup() {
		return new FormGroup<RuleManagementEventDataSourceFormProperties>({
			eventName: new FormControl<string | null | undefined>(undefined),
			eventSource: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<string | null | undefined>(undefined),
			operationName: new FormControl<string | null | undefined>(undefined),
			resourceGroupName: new FormControl<string | null | undefined>(undefined),
			resourceProviderName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			subStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A rule metric data source. The discriminator value is always RuleMetricDataSource in this case. */
	export interface RuleMetricDataSource {

		/** the name of the metric that defines what the rule monitors. */
		metricName?: string | null;
	}

	/** A rule metric data source. The discriminator value is always RuleMetricDataSource in this case. */
	export interface RuleMetricDataSourceFormProperties {

		/** the name of the metric that defines what the rule monitors. */
		metricName: FormControl<string | null | undefined>,
	}
	export function CreateRuleMetricDataSourceFormGroup() {
		return new FormGroup<RuleMetricDataSourceFormProperties>({
			metricName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the action to post to service when the rule condition is evaluated. The discriminator is always RuleWebhookAction in this case. */
	export interface RuleWebhookAction {

		/** the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload. */
		properties?: {[id: string]: string };

		/** the service uri to Post the notification when the alert activates or resolves. */
		serviceUri?: string | null;
	}

	/** Specifies the action to post to service when the rule condition is evaluated. The discriminator is always RuleWebhookAction in this case. */
	export interface RuleWebhookActionFormProperties {

		/** the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload. */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** the service uri to Post the notification when the alert activates or resolves. */
		serviceUri: FormControl<string | null | undefined>,
	}
	export function CreateRuleWebhookActionFormGroup() {
		return new FormGroup<RuleWebhookActionFormProperties>({
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			serviceUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A rule condition based on a metric crossing a threshold. */
	export interface ThresholdRuleCondition {

		/**
		 * Operators allowed in the rule condition.
		 * Required
		 */
		operator: ConditionOperator;

		/**
		 * the threshold value that activates the alert.
		 * Required
		 */
		threshold: number;

		/** Aggregation operators allowed in a rule. */
		timeAggregation?: ThresholdRuleConditionTimeAggregation | null;

		/** the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day. */
		windowSize?: string | null;
	}

	/** A rule condition based on a metric crossing a threshold. */
	export interface ThresholdRuleConditionFormProperties {

		/**
		 * Operators allowed in the rule condition.
		 * Required
		 */
		operator: FormControl<ConditionOperator | null | undefined>,

		/**
		 * the threshold value that activates the alert.
		 * Required
		 */
		threshold: FormControl<number | null | undefined>,

		/** Aggregation operators allowed in a rule. */
		timeAggregation: FormControl<ThresholdRuleConditionTimeAggregation | null | undefined>,

		/** the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day. */
		windowSize: FormControl<string | null | undefined>,
	}
	export function CreateThresholdRuleConditionFormGroup() {
		return new FormGroup<ThresholdRuleConditionFormProperties>({
			operator: new FormControl<ConditionOperator | null | undefined>(undefined, [Validators.required]),
			threshold: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timeAggregation: new FormControl<ThresholdRuleConditionTimeAggregation | null | undefined>(undefined),
			windowSize: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ThresholdRuleConditionTimeAggregation { Average = 0, Minimum = 1, Maximum = 2, Total = 3, Last = 4 }


	/** Aggregation operators allowed in a rule. */
	export enum TimeAggregationOperator { Average = 0, Minimum = 1, Maximum = 2, Total = 3, Last = 4 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List the alert rules within a subscription.
		 * Get subscriptions/{subscriptionId}/providers/microsoft.insights/alertrules
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @return {AlertRuleResourceCollection} Successful request for a list of alert rules
		 */
		AlertRules_ListBySubscription(api_version: string, subscriptionId: string): Observable<AlertRuleResourceCollection> {
			return this.http.get<AlertRuleResourceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/microsoft.insights/alertrules?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List the alert rules within a resource group.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/alertrules
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @return {AlertRuleResourceCollection} Successful request for a list of alert rules
		 */
		AlertRules_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<AlertRuleResourceCollection> {
			return this.http.get<AlertRuleResourceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/alertrules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets an alert rule
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/alertrules/{ruleName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ruleName The name of the rule.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @return {AlertRuleResource} Successful request to get an alert rule
		 */
		AlertRules_Get(resourceGroupName: string, ruleName: string, api_version: string, subscriptionId: string): Observable<AlertRuleResource> {
			return this.http.get<AlertRuleResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/alertrules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an alert rule.
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/alertrules/{ruleName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ruleName The name of the rule.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {AlertRuleResource} requestBody The parameters of the rule to create or update.
		 * @return {AlertRuleResource} Successful request to update an alert rule
		 */
		AlertRules_CreateOrUpdate(resourceGroupName: string, ruleName: string, api_version: string, subscriptionId: string, requestBody: AlertRuleResource): Observable<AlertRuleResource> {
			return this.http.put<AlertRuleResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/alertrules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an alert rule
		 * Delete subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/alertrules/{ruleName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ruleName The name of the rule.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @return {void} Successful request to delete an alert rule
		 */
		AlertRules_Delete(resourceGroupName: string, ruleName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/alertrules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing AlertRuleResource. To update other fields use the CreateOrUpdate method.
		 * Patch subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/alertrules/{ruleName}
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ruleName The name of the rule.
		 * @param {string} api_version Client Api Version.
		 * @param {AlertRuleResourcePatch} requestBody Parameters supplied to the operation.
		 * @return {AlertRuleResource} Successful request to update an alert rule
		 */
		AlertRules_Update(subscriptionId: string, resourceGroupName: string, ruleName: string, api_version: string, requestBody: AlertRuleResourcePatch): Observable<AlertRuleResource> {
			return this.http.patch<AlertRuleResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/alertrules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

