import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The Action Groups information, used by the alert rule. */
	export interface ActionGroupsInformation {

		/** An optional custom email subject to use in email notifications. */
		customEmailSubject?: string | null;

		/** An optional custom web-hook payload to use in web-hook notifications. */
		customWebhookPayload?: string | null;

		/**
		 * The Action Group resource IDs.
		 * Required
		 */
		groupIds: Array<string>;
	}

	/** The Action Groups information, used by the alert rule. */
	export interface ActionGroupsInformationFormProperties {

		/** An optional custom email subject to use in email notifications. */
		customEmailSubject: FormControl<string | null | undefined>,

		/** An optional custom web-hook payload to use in web-hook notifications. */
		customWebhookPayload: FormControl<string | null | undefined>,
	}
	export function CreateActionGroupsInformationFormGroup() {
		return new FormGroup<ActionGroupsInformationFormProperties>({
			customEmailSubject: new FormControl<string | null | undefined>(undefined),
			customWebhookPayload: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The alert rule information */
	export interface AlertRule extends AzureResource {

		/** The alert rule properties. */
		properties?: AlertRuleProperties;
	}

	/** The alert rule information */
	export interface AlertRuleFormProperties extends AzureResourceFormProperties {
	}
	export function CreateAlertRuleFormGroup() {
		return new FormGroup<AlertRuleFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The alert rule patch information */
	export interface AlertRulePatchObject {

		/** The resource ID. */
		id?: string | null;

		/** The resource name. */
		name?: string | null;

		/** The alert rule properties. */
		properties?: AlertRulePatchProperties;

		/** The resource tags. */
		tags?: string | null;

		/** The resource type. */
		type?: string | null;
	}

	/** The alert rule patch information */
	export interface AlertRulePatchObjectFormProperties {

		/** The resource ID. */
		id: FormControl<string | null | undefined>,

		/** The resource name. */
		name: FormControl<string | null | undefined>,

		/** The resource tags. */
		tags: FormControl<string | null | undefined>,

		/** The resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAlertRulePatchObjectFormGroup() {
		return new FormGroup<AlertRulePatchObjectFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The alert rule properties. */
	export interface AlertRulePatchProperties {

		/** The Action Groups information, used by the alert rule. */
		actionGroups?: ActionGroupsInformation;

		/** The alert rule description. */
		description?: string | null;

		/** The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 5 minutes. */
		frequency?: string | null;

		/** The alert rule severity. */
		severity?: AlertRulePatchPropertiesSeverity | null;

		/** The alert rule state. */
		state?: AlertRulePatchPropertiesState | null;

		/** Optional throttling information for the alert rule. */
		throttling?: ThrottlingInformation;
	}

	/** The alert rule properties. */
	export interface AlertRulePatchPropertiesFormProperties {

		/** The alert rule description. */
		description: FormControl<string | null | undefined>,

		/** The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 5 minutes. */
		frequency: FormControl<string | null | undefined>,

		/** The alert rule severity. */
		severity: FormControl<AlertRulePatchPropertiesSeverity | null | undefined>,

		/** The alert rule state. */
		state: FormControl<AlertRulePatchPropertiesState | null | undefined>,
	}
	export function CreateAlertRulePatchPropertiesFormGroup() {
		return new FormGroup<AlertRulePatchPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			frequency: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<AlertRulePatchPropertiesSeverity | null | undefined>(undefined),
			state: new FormControl<AlertRulePatchPropertiesState | null | undefined>(undefined),
		});

	}

	export enum AlertRulePatchPropertiesSeverity { Sev0 = 'Sev0', Sev1 = 'Sev1', Sev2 = 'Sev2', Sev3 = 'Sev3', Sev4 = 'Sev4' }

	export enum AlertRulePatchPropertiesState { Enabled = 'Enabled', Disabled = 'Disabled' }


	/** The alert rule properties. */
	export interface AlertRuleProperties {

		/**
		 * The Action Groups information, used by the alert rule.
		 * Required
		 */
		actionGroups: ActionGroupsInformation;

		/** The alert rule description. */
		description?: string | null;

		/**
		 * The detector information. By default this is not populated, unless it's specified in expandDetector
		 * Required
		 */
		detector: Detector;

		/**
		 * The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 5 minutes.
		 * Required
		 */
		frequency: string;

		/**
		 * The alert rule resources scope.
		 * Required
		 */
		scope: Array<string>;

		/**
		 * The alert rule severity.
		 * Required
		 */
		severity: AlertRulePatchPropertiesSeverity;

		/**
		 * The alert rule state.
		 * Required
		 */
		state: AlertRulePatchPropertiesState;

		/** Optional throttling information for the alert rule. */
		throttling?: ThrottlingInformation;
	}

	/** The alert rule properties. */
	export interface AlertRulePropertiesFormProperties {

		/** The alert rule description. */
		description: FormControl<string | null | undefined>,

		/**
		 * The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 5 minutes.
		 * Required
		 */
		frequency: FormControl<string | null | undefined>,

		/**
		 * The alert rule severity.
		 * Required
		 */
		severity: FormControl<AlertRulePatchPropertiesSeverity | null | undefined>,

		/**
		 * The alert rule state.
		 * Required
		 */
		state: FormControl<AlertRulePatchPropertiesState | null | undefined>,
	}
	export function CreateAlertRulePropertiesFormGroup() {
		return new FormGroup<AlertRulePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			frequency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			severity: new FormControl<AlertRulePatchPropertiesSeverity | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<AlertRulePatchPropertiesState | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of Smart Detector alert rules. */
	export interface AlertRulesList {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** List of Smart Detector alert rules. */
		value?: Array<AlertRule>;
	}

	/** List of Smart Detector alert rules. */
	export interface AlertRulesListFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAlertRulesListFormGroup() {
		return new FormGroup<AlertRulesListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Azure resource object */
	export interface AzureResource {

		/** The resource ID. */
		id?: string | null;

		/** The resource location. */
		location?: string | null;

		/** The resource name. */
		name?: string | null;

		/** The resource tags. */
		tags?: string | null;

		/** The resource type. */
		type?: string | null;
	}

	/** An Azure resource object */
	export interface AzureResourceFormProperties {

		/** The resource ID. */
		id: FormControl<string | null | undefined>,

		/** The resource location. */
		location: FormControl<string | null | undefined>,

		/** The resource name. */
		name: FormControl<string | null | undefined>,

		/** The resource tags. */
		tags: FormControl<string | null | undefined>,

		/** The resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAzureResourceFormGroup() {
		return new FormGroup<AzureResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The detector information. By default this is not populated, unless it's specified in expandDetector */
	export interface Detector {

		/** The Smart Detector description. By default this is not populated, unless it's specified in expandDetector */
		description?: string | null;

		/**
		 * The detector id.
		 * Required
		 */
		id: string;

		/** The Smart Detector image path. By default this is not populated, unless it's specified in expandDetector */
		imagePaths?: Array<string>;

		/** The Smart Detector name. By default this is not populated, unless it's specified in expandDetector */
		name?: string | null;

		/** The detector's parameters.' */
		parameters?: {[id: string]: any };

		/** The Smart Detector supported resource types. By default this is not populated, unless it's specified in expandDetector */
		supportedResourceTypes?: Array<string>;
	}

	/** The detector information. By default this is not populated, unless it's specified in expandDetector */
	export interface DetectorFormProperties {

		/** The Smart Detector description. By default this is not populated, unless it's specified in expandDetector */
		description: FormControl<string | null | undefined>,

		/**
		 * The detector id.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The Smart Detector name. By default this is not populated, unless it's specified in expandDetector */
		name: FormControl<string | null | undefined>,

		/** The detector's parameters.' */
		parameters: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateDetectorFormGroup() {
		return new FormGroup<DetectorFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Describe the format of an Error response. */
	export interface ErrorResponse {

		/** Error code */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}

	/** Describe the format of an Error response. */
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


	/** Optional throttling information for the alert rule. */
	export interface ThrottlingInformation {

		/** The required duration (in ISO8601 format) to wait before notifying on the alert rule again. The time granularity must be in minutes and minimum value is 0 minutes */
		duration?: string | null;
	}

	/** Optional throttling information for the alert rule. */
	export interface ThrottlingInformationFormProperties {

		/** The required duration (in ISO8601 format) to wait before notifying on the alert rule again. The time granularity must be in minutes and minimum value is 0 minutes */
		duration: FormControl<string | null | undefined>,
	}
	export function CreateThrottlingInformationFormGroup() {
		return new FormGroup<ThrottlingInformationFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all the existing Smart Detector alert rules within the subscription.
		 * Get subscriptions/{subscriptionId}/providers/microsoft.alertsManagement/smartDetectorAlertRules
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} api_version Client Api Version.
		 * @param {boolean} expandDetector Indicates if Smart Detector should be expanded.
		 * @return {AlertRulesList} Successful request to list Smart Detector alert rules.
		 */
		SmartDetectorAlertRules_List(subscriptionId: string, api_version: string, expandDetector: boolean | null | undefined): Observable<AlertRulesList> {
			return this.http.get<AlertRulesList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/microsoft.alertsManagement/smartDetectorAlertRules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expandDetector=' + expandDetector, {});
		}

		/**
		 * List all the existing Smart Detector alert rules within the subscription and resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.alertsManagement/smartDetectorAlertRules
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client Api Version.
		 * @param {boolean} expandDetector Indicates if Smart Detector should be expanded.
		 * @return {AlertRulesList} Successful request to list Smart Detector alert rules.
		 */
		SmartDetectorAlertRules_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string, expandDetector: boolean | null | undefined): Observable<AlertRulesList> {
			return this.http.get<AlertRulesList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.alertsManagement/smartDetectorAlertRules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expandDetector=' + expandDetector, {});
		}

		/**
		 * Get a specific Smart Detector alert rule.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.alertsManagement/smartDetectorAlertRules/{alertRuleName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} alertRuleName The name of the alert rule.
		 * @param {string} api_version Client Api Version.
		 * @param {boolean} expandDetector Indicates if Smart Detector should be expanded.
		 * @return {AlertRule} Successful request to get Smart Detector alert rule.
		 */
		SmartDetectorAlertRules_Get(subscriptionId: string, resourceGroupName: string, alertRuleName: string, api_version: string, expandDetector: boolean | null | undefined): Observable<AlertRule> {
			return this.http.get<AlertRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.alertsManagement/smartDetectorAlertRules/' + (alertRuleName == null ? '' : encodeURIComponent(alertRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expandDetector=' + expandDetector, {});
		}

		/**
		 * Create or update a Smart Detector alert rule.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.alertsManagement/smartDetectorAlertRules/{alertRuleName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} alertRuleName The name of the alert rule.
		 * @param {string} api_version Client Api Version.
		 * @param {AlertRule} requestBody Parameters supplied to the operation.
		 * @return {AlertRule} Successful request to update a Smart Detector alert rule.
		 */
		SmartDetectorAlertRules_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, alertRuleName: string, api_version: string, requestBody: AlertRule): Observable<AlertRule> {
			return this.http.put<AlertRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.alertsManagement/smartDetectorAlertRules/' + (alertRuleName == null ? '' : encodeURIComponent(alertRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an existing Smart Detector alert rule.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.alertsManagement/smartDetectorAlertRules/{alertRuleName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} alertRuleName The name of the alert rule.
		 * @param {string} api_version Client Api Version.
		 * @return {void} Successful request to delete a Smart Detector alert rule.
		 */
		SmartDetectorAlertRules_Delete(subscriptionId: string, resourceGroupName: string, alertRuleName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.alertsManagement/smartDetectorAlertRules/' + (alertRuleName == null ? '' : encodeURIComponent(alertRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Patch a specific Smart Detector alert rule.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.alertsManagement/smartDetectorAlertRules/{alertRuleName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} alertRuleName The name of the alert rule.
		 * @param {string} api_version Client Api Version.
		 * @param {AlertRulePatchObject} requestBody Parameters supplied to the operation.
		 * @return {AlertRule} Successful request to patch Smart Detector alert rule.
		 */
		SmartDetectorAlertRules_Patch(subscriptionId: string, resourceGroupName: string, alertRuleName: string, api_version: string, requestBody: AlertRulePatchObject): Observable<AlertRule> {
			return this.http.patch<AlertRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.alertsManagement/smartDetectorAlertRules/' + (alertRuleName == null ? '' : encodeURIComponent(alertRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

