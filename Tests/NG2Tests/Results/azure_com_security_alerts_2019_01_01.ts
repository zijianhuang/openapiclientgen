import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Security alert */
	export interface Alert {

		/** describes security alert properties. */
		properties?: AlertProperties;
	}

	/** Security alert */
	export interface AlertFormProperties {
	}
	export function CreateAlertFormGroup() {
		return new FormGroup<AlertFormProperties>({
		});

	}


	/** describes security alert properties. */
	export interface AlertProperties {

		/** The action that was taken as a response to the alert (Active, Blocked etc.) */
		actionTaken?: string | null;

		/** Display name of the alert type */
		alertDisplayName?: string | null;

		/** Name of the alert type */
		alertName?: string | null;

		/** Azure resource ID of the associated resource */
		associatedResource?: string | null;

		/** Whether this alert can be investigated with Azure Security Center */
		canBeInvestigated?: boolean | null;

		/** The entity that the incident happened on */
		compromisedEntity?: string | null;

		/** reasons the alert got the confidenceScore value */
		confidenceReasons?: Array<AlertConfidenceReason>;

		/**
		 * level of confidence we have on the alert
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidenceScore?: number | null;

		/** Alerts with the same CorrelationKey will be grouped together in Ibiza. */
		correlationKey?: string | null;

		/** Description of the incident and what it means */
		description?: string | null;

		/** The time the incident was detected by the vendor */
		detectedTimeUtc?: Date | null;

		/** objects that are related to this alerts */
		entities?: Array<AlertEntity>;

		/** Changing set of properties depending on the alert type. */
		extendedProperties?: AlertExtendedProperties;

		/** Instance ID of the alert. */
		instanceId?: string | null;

		/** Whether this alert is for incident type or not (otherwise - single alert) */
		isIncident?: boolean | null;

		/** Recommended steps to reradiate the incident */
		remediationSteps?: string | null;

		/** Estimated severity of this alert */
		reportedSeverity?: AlertPropertiesReportedSeverity | null;

		/** The time the incident was reported to Microsoft.Security in UTC */
		reportedTimeUtc?: Date | null;

		/** State of the alert (Active, Dismissed etc.) */
		state?: string | null;

		/** Azure subscription ID of the resource that had the security alert or the subscription ID of the workspace that this resource reports to */
		subscriptionId?: string | null;

		/** The type of the alerted resource (Azure, Non-Azure) */
		systemSource?: string | null;

		/** Name of the vendor that discovered the incident */
		vendorName?: string | null;

		/** Azure resource ID of the workspace that the alert was reported to. */
		workspaceArmId?: string | null;
	}

	/** describes security alert properties. */
	export interface AlertPropertiesFormProperties {

		/** The action that was taken as a response to the alert (Active, Blocked etc.) */
		actionTaken: FormControl<string | null | undefined>,

		/** Display name of the alert type */
		alertDisplayName: FormControl<string | null | undefined>,

		/** Name of the alert type */
		alertName: FormControl<string | null | undefined>,

		/** Azure resource ID of the associated resource */
		associatedResource: FormControl<string | null | undefined>,

		/** Whether this alert can be investigated with Azure Security Center */
		canBeInvestigated: FormControl<boolean | null | undefined>,

		/** The entity that the incident happened on */
		compromisedEntity: FormControl<string | null | undefined>,

		/**
		 * level of confidence we have on the alert
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidenceScore: FormControl<number | null | undefined>,

		/** Alerts with the same CorrelationKey will be grouped together in Ibiza. */
		correlationKey: FormControl<string | null | undefined>,

		/** Description of the incident and what it means */
		description: FormControl<string | null | undefined>,

		/** The time the incident was detected by the vendor */
		detectedTimeUtc: FormControl<Date | null | undefined>,

		/** Instance ID of the alert. */
		instanceId: FormControl<string | null | undefined>,

		/** Whether this alert is for incident type or not (otherwise - single alert) */
		isIncident: FormControl<boolean | null | undefined>,

		/** Recommended steps to reradiate the incident */
		remediationSteps: FormControl<string | null | undefined>,

		/** Estimated severity of this alert */
		reportedSeverity: FormControl<AlertPropertiesReportedSeverity | null | undefined>,

		/** The time the incident was reported to Microsoft.Security in UTC */
		reportedTimeUtc: FormControl<Date | null | undefined>,

		/** State of the alert (Active, Dismissed etc.) */
		state: FormControl<string | null | undefined>,

		/** Azure subscription ID of the resource that had the security alert or the subscription ID of the workspace that this resource reports to */
		subscriptionId: FormControl<string | null | undefined>,

		/** The type of the alerted resource (Azure, Non-Azure) */
		systemSource: FormControl<string | null | undefined>,

		/** Name of the vendor that discovered the incident */
		vendorName: FormControl<string | null | undefined>,

		/** Azure resource ID of the workspace that the alert was reported to. */
		workspaceArmId: FormControl<string | null | undefined>,
	}
	export function CreateAlertPropertiesFormGroup() {
		return new FormGroup<AlertPropertiesFormProperties>({
			actionTaken: new FormControl<string | null | undefined>(undefined),
			alertDisplayName: new FormControl<string | null | undefined>(undefined),
			alertName: new FormControl<string | null | undefined>(undefined),
			associatedResource: new FormControl<string | null | undefined>(undefined),
			canBeInvestigated: new FormControl<boolean | null | undefined>(undefined),
			compromisedEntity: new FormControl<string | null | undefined>(undefined),
			confidenceScore: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			correlationKey: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			detectedTimeUtc: new FormControl<Date | null | undefined>(undefined),
			instanceId: new FormControl<string | null | undefined>(undefined),
			isIncident: new FormControl<boolean | null | undefined>(undefined),
			remediationSteps: new FormControl<string | null | undefined>(undefined),
			reportedSeverity: new FormControl<AlertPropertiesReportedSeverity | null | undefined>(undefined),
			reportedTimeUtc: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			systemSource: new FormControl<string | null | undefined>(undefined),
			vendorName: new FormControl<string | null | undefined>(undefined),
			workspaceArmId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Factors that increase our confidence that the alert is a true positive */
	export interface AlertConfidenceReason {

		/** description of the confidence reason */
		reason?: string | null;

		/** Type of confidence factor */
		type?: string | null;
	}

	/** Factors that increase our confidence that the alert is a true positive */
	export interface AlertConfidenceReasonFormProperties {

		/** description of the confidence reason */
		reason: FormControl<string | null | undefined>,

		/** Type of confidence factor */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAlertConfidenceReasonFormGroup() {
		return new FormGroup<AlertConfidenceReasonFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Changing set of properties depending on the entity type. */
	export interface AlertEntity {

		/** Type of entity */
		type?: string | null;
	}

	/** Changing set of properties depending on the entity type. */
	export interface AlertEntityFormProperties {

		/** Type of entity */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAlertEntityFormGroup() {
		return new FormGroup<AlertEntityFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Changing set of properties depending on the alert type. */
	export interface AlertExtendedProperties {
	}

	/** Changing set of properties depending on the alert type. */
	export interface AlertExtendedPropertiesFormProperties {
	}
	export function CreateAlertExtendedPropertiesFormGroup() {
		return new FormGroup<AlertExtendedPropertiesFormProperties>({
		});

	}

	export enum AlertPropertiesReportedSeverity { Informational = 'Informational', Low = 'Low', Medium = 'Medium', High = 'High' }


	/** List of security alerts */
	export interface AlertList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;
		value?: Array<Alert>;
	}

	/** List of security alerts */
	export interface AlertListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAlertListFormGroup() {
		return new FormGroup<AlertListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all the alerts that are associated with the subscription
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/alerts
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} filter OData filter. Optional.
		 * @param {string} select OData select. Optional.
		 * @param {string} expand OData expand. Optional.
		 * @return {AlertList} OK
		 */
		Alerts_List(api_version: string, subscriptionId: string, filter: string | null | undefined, select: string | null | undefined, expand: string | null | undefined): Observable<AlertList> {
			return this.http.get<AlertList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/alerts?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), {});
		}

		/**
		 * List all the alerts that are associated with the subscription that are stored in a specific location
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/alerts
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} ascLocation The location where ASC stores the data of the subscription. can be retrieved from Get locations
		 * @param {string} filter OData filter. Optional.
		 * @param {string} select OData select. Optional.
		 * @param {string} expand OData expand. Optional.
		 * @return {AlertList} OK
		 */
		Alerts_ListSubscriptionLevelAlertsByRegion(api_version: string, subscriptionId: string, ascLocation: string, filter: string | null | undefined, select: string | null | undefined, expand: string | null | undefined): Observable<AlertList> {
			return this.http.get<AlertList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/locations/' + (ascLocation == null ? '' : encodeURIComponent(ascLocation)) + '/alerts?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), {});
		}

		/**
		 * Get an alert that is associated with a subscription
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} ascLocation The location where ASC stores the data of the subscription. can be retrieved from Get locations
		 * @param {string} alertName Name of the alert object
		 * @return {Alert} OK
		 */
		Alerts_GetSubscriptionLevelAlert(api_version: string, subscriptionId: string, ascLocation: string, alertName: string): Observable<Alert> {
			return this.http.get<Alert>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/locations/' + (ascLocation == null ? '' : encodeURIComponent(ascLocation)) + '/alerts/' + (alertName == null ? '' : encodeURIComponent(alertName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Update the alert's state
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}/dismiss
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} ascLocation The location where ASC stores the data of the subscription. can be retrieved from Get locations
		 * @param {string} alertName Name of the alert object
		 * @return {void} 
		 */
		Alerts_UpdateSubscriptionLevelAlertStateToDismiss(api_version: string, subscriptionId: string, ascLocation: string, alertName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/locations/' + (ascLocation == null ? '' : encodeURIComponent(ascLocation)) + '/alerts/' + (alertName == null ? '' : encodeURIComponent(alertName)) + '/dismiss?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the alert's state
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}/reactivate
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} ascLocation The location where ASC stores the data of the subscription. can be retrieved from Get locations
		 * @param {string} alertName Name of the alert object
		 * @return {void} 
		 */
		Alerts_UpdateSubscriptionLevelAlertStateToReactivate(api_version: string, subscriptionId: string, ascLocation: string, alertName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/locations/' + (ascLocation == null ? '' : encodeURIComponent(ascLocation)) + '/alerts/' + (alertName == null ? '' : encodeURIComponent(alertName)) + '/reactivate?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all the alerts that are associated with the resource group
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/alerts
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} filter OData filter. Optional.
		 * @param {string} select OData select. Optional.
		 * @param {string} expand OData expand. Optional.
		 * @return {AlertList} OK
		 */
		Alerts_ListByResourceGroup(api_version: string, subscriptionId: string, resourceGroupName: string, filter: string | null | undefined, select: string | null | undefined, expand: string | null | undefined): Observable<AlertList> {
			return this.http.get<AlertList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Security/alerts?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), {});
		}

		/**
		 * List all the alerts that are associated with the resource group that are stored in a specific location
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/alerts
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} ascLocation The location where ASC stores the data of the subscription. can be retrieved from Get locations
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} filter OData filter. Optional.
		 * @param {string} select OData select. Optional.
		 * @param {string} expand OData expand. Optional.
		 * @return {AlertList} OK
		 */
		Alerts_ListResourceGroupLevelAlertsByRegion(api_version: string, subscriptionId: string, ascLocation: string, resourceGroupName: string, filter: string | null | undefined, select: string | null | undefined, expand: string | null | undefined): Observable<AlertList> {
			return this.http.get<AlertList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Security/locations/' + (ascLocation == null ? '' : encodeURIComponent(ascLocation)) + '/alerts?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), {});
		}

		/**
		 * Get an alert that is associated a resource group or a resource in a resource group
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} ascLocation The location where ASC stores the data of the subscription. can be retrieved from Get locations
		 * @param {string} alertName Name of the alert object
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @return {Alert} OK
		 */
		Alerts_GetResourceGroupLevelAlerts(api_version: string, subscriptionId: string, ascLocation: string, alertName: string, resourceGroupName: string): Observable<Alert> {
			return this.http.get<Alert>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Security/locations/' + (ascLocation == null ? '' : encodeURIComponent(ascLocation)) + '/alerts/' + (alertName == null ? '' : encodeURIComponent(alertName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Update the alert's state
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}/dismiss
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} ascLocation The location where ASC stores the data of the subscription. can be retrieved from Get locations
		 * @param {string} alertName Name of the alert object
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @return {void} 
		 */
		Alerts_UpdateResourceGroupLevelAlertStateToDismiss(api_version: string, subscriptionId: string, ascLocation: string, alertName: string, resourceGroupName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Security/locations/' + (ascLocation == null ? '' : encodeURIComponent(ascLocation)) + '/alerts/' + (alertName == null ? '' : encodeURIComponent(alertName)) + '/dismiss?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the alert's state
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}/reactivate
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} ascLocation The location where ASC stores the data of the subscription. can be retrieved from Get locations
		 * @param {string} alertName Name of the alert object
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @return {void} 
		 */
		Alerts_UpdateResourceGroupLevelAlertStateToReactivate(api_version: string, subscriptionId: string, ascLocation: string, alertName: string, resourceGroupName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Security/locations/' + (ascLocation == null ? '' : encodeURIComponent(ascLocation)) + '/alerts/' + (alertName == null ? '' : encodeURIComponent(alertName)) + '/reactivate?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

