import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Definition of the job schedule. */
	export interface JobSchedule {

		/** Gets the id of the resource. */
		id?: string | null;

		/** Gets the name of the variable. */
		name?: string | null;

		/** Definition of job schedule parameters. */
		properties?: JobScheduleProperties;

		/** Resource type */
		type?: string | null;
	}

	/** Definition of the job schedule. */
	export interface JobScheduleFormProperties {

		/** Gets the id of the resource. */
		id: FormControl<string | null | undefined>,

		/** Gets the name of the variable. */
		name: FormControl<string | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateJobScheduleFormGroup() {
		return new FormGroup<JobScheduleFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters supplied to the create job schedule operation. */
	export interface JobScheduleCreateParameters {

		/**
		 * The parameters supplied to the create job schedule operation.
		 * Required
		 */
		properties: JobScheduleCreateProperties;
	}

	/** The parameters supplied to the create job schedule operation. */
	export interface JobScheduleCreateParametersFormProperties {
	}
	export function CreateJobScheduleCreateParametersFormGroup() {
		return new FormGroup<JobScheduleCreateParametersFormProperties>({
		});

	}


	/** The parameters supplied to the create job schedule operation. */
	export interface JobScheduleCreateProperties {

		/** Gets or sets a list of job properties. */
		parameters?: {[id: string]: string };

		/** Gets or sets the hybrid worker group that the scheduled job should run on. */
		runOn?: string | null;

		/**
		 * The runbook property associated with the entity.
		 * Required
		 */
		runbook: RunbookAssociationProperty;

		/**
		 * The schedule property associated with the entity.
		 * Required
		 */
		schedule: ScheduleAssociationProperty;
	}

	/** The parameters supplied to the create job schedule operation. */
	export interface JobScheduleCreatePropertiesFormProperties {

		/** Gets or sets a list of job properties. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets the hybrid worker group that the scheduled job should run on. */
		runOn: FormControl<string | null | undefined>,
	}
	export function CreateJobScheduleCreatePropertiesFormGroup() {
		return new FormGroup<JobScheduleCreatePropertiesFormProperties>({
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			runOn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response model for the list job schedule operation. */
	export interface JobScheduleListResult {

		/** Gets or sets the next link. */
		nextLink?: string | null;

		/** Gets or sets a list of job schedules. */
		value?: Array<JobSchedule>;
	}

	/** The response model for the list job schedule operation. */
	export interface JobScheduleListResultFormProperties {

		/** Gets or sets the next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateJobScheduleListResultFormGroup() {
		return new FormGroup<JobScheduleListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of job schedule parameters. */
	export interface JobScheduleProperties {

		/** Gets or sets the id of job schedule. */
		jobScheduleId?: string | null;

		/** Gets or sets the parameters of the job schedule. */
		parameters?: {[id: string]: string };

		/** Gets or sets the hybrid worker group that the scheduled job should run on. */
		runOn?: string | null;

		/** The runbook property associated with the entity. */
		runbook?: RunbookAssociationProperty;

		/** The schedule property associated with the entity. */
		schedule?: ScheduleAssociationProperty;
	}

	/** Definition of job schedule parameters. */
	export interface JobSchedulePropertiesFormProperties {

		/** Gets or sets the id of job schedule. */
		jobScheduleId: FormControl<string | null | undefined>,

		/** Gets or sets the parameters of the job schedule. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets the hybrid worker group that the scheduled job should run on. */
		runOn: FormControl<string | null | undefined>,
	}
	export function CreateJobSchedulePropertiesFormGroup() {
		return new FormGroup<JobSchedulePropertiesFormProperties>({
			jobScheduleId: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			runOn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The runbook property associated with the entity. */
	export interface RunbookAssociationProperty {

		/** Gets or sets the name of the runbook. */
		name?: string | null;
	}

	/** The runbook property associated with the entity. */
	export interface RunbookAssociationPropertyFormProperties {

		/** Gets or sets the name of the runbook. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRunbookAssociationPropertyFormGroup() {
		return new FormGroup<RunbookAssociationPropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The schedule property associated with the entity. */
	export interface ScheduleAssociationProperty {

		/** Gets or sets the name of the Schedule. */
		name?: string | null;
	}

	/** The schedule property associated with the entity. */
	export interface ScheduleAssociationPropertyFormProperties {

		/** Gets or sets the name of the Schedule. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateScheduleAssociationPropertyFormGroup() {
		return new FormGroup<ScheduleAssociationPropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of job schedules.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobSchedules
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {JobScheduleListResult} OK
		 */
		JobSchedule_ListByAutomationAccount(resourceGroupName: string, automationAccountName: string, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<JobScheduleListResult> {
			return this.http.get<JobScheduleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/jobSchedules&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve the job schedule identified by job schedule name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobSchedules/{jobScheduleId}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} jobScheduleId The job schedule name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {JobSchedule} OK
		 */
		JobSchedule_Get(resourceGroupName: string, automationAccountName: string, jobScheduleId: string, subscriptionId: string, api_version: string): Observable<JobSchedule> {
			return this.http.get<JobSchedule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/jobSchedules/' + (jobScheduleId == null ? '' : encodeURIComponent(jobScheduleId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a job schedule.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobSchedules/{jobScheduleId}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} jobScheduleId The job schedule name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {JobScheduleCreateParameters} requestBody The parameters supplied to the create job schedule operation.
		 * @return {void} 
		 */
		JobSchedule_Create(resourceGroupName: string, automationAccountName: string, jobScheduleId: string, subscriptionId: string, api_version: string, requestBody: JobScheduleCreateParameters): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/jobSchedules/' + (jobScheduleId == null ? '' : encodeURIComponent(jobScheduleId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete the job schedule identified by job schedule name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobSchedules/{jobScheduleId}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} jobScheduleId The job schedule name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		JobSchedule_Delete(resourceGroupName: string, automationAccountName: string, jobScheduleId: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/jobSchedules/' + (jobScheduleId == null ? '' : encodeURIComponent(jobScheduleId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

