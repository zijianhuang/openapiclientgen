import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

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


	/** An alert incident indicates the activation status of an alert rule. */
	export interface Incident {

		/** The time at which the incident was activated in ISO8601 format. */
		activatedTime?: Date | null;

		/** A boolean to indicate whether the incident is active or resolved. */
		isActive?: boolean | null;

		/** Incident name. */
		name?: string | null;

		/** The time at which the incident was resolved in ISO8601 format. If null, it means the incident is still active. */
		resolvedTime?: Date | null;

		/** Rule name that is associated with the incident. */
		ruleName?: string | null;
	}

	/** An alert incident indicates the activation status of an alert rule. */
	export interface IncidentFormProperties {

		/** The time at which the incident was activated in ISO8601 format. */
		activatedTime: FormControl<Date | null | undefined>,

		/** A boolean to indicate whether the incident is active or resolved. */
		isActive: FormControl<boolean | null | undefined>,

		/** Incident name. */
		name: FormControl<string | null | undefined>,

		/** The time at which the incident was resolved in ISO8601 format. If null, it means the incident is still active. */
		resolvedTime: FormControl<Date | null | undefined>,

		/** Rule name that is associated with the incident. */
		ruleName: FormControl<string | null | undefined>,
	}
	export function CreateIncidentFormGroup() {
		return new FormGroup<IncidentFormProperties>({
			activatedTime: new FormControl<Date | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resolvedTime: new FormControl<Date | null | undefined>(undefined),
			ruleName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The List incidents operation response. */
	export interface IncidentListResult {

		/** the incident collection. */
		value?: Array<Incident>;
	}

	/** The List incidents operation response. */
	export interface IncidentListResultFormProperties {
	}
	export function CreateIncidentListResultFormGroup() {
		return new FormGroup<IncidentListResultFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of incidents associated to an alert rule
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/alertrules/{ruleName}/incidents
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ruleName The name of the rule.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @return {IncidentListResult} Successful request for a list of alert rule related incidents
		 */
		AlertRuleIncidents_ListByAlertRule(resourceGroupName: string, ruleName: string, api_version: string, subscriptionId: string): Observable<IncidentListResult> {
			return this.http.get<IncidentListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/alertrules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '/incidents&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets an incident associated to an alert rule
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/alertrules/{ruleName}/incidents/{incidentName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ruleName The name of the rule.
		 * @param {string} incidentName The name of the incident to retrieve.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @return {Incident} Successful request for one alert rule related incident
		 */
		AlertRuleIncidents_Get(resourceGroupName: string, ruleName: string, incidentName: string, api_version: string, subscriptionId: string): Observable<Incident> {
			return this.http.get<Incident>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/alertrules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '/incidents/' + (incidentName == null ? '' : encodeURIComponent(incidentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

