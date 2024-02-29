import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Task properties of the software update configuration. */
	export interface SoftareUpdateConfigurationRunTaskProperties {

		/** The job id of the task. */
		jobId?: string | null;

		/** The name of the source of the task. */
		source?: string | null;

		/** The status of the task. */
		status?: string | null;
	}

	/** Task properties of the software update configuration. */
	export interface SoftareUpdateConfigurationRunTaskPropertiesFormProperties {

		/** The job id of the task. */
		jobId: FormControl<string | null | undefined>,

		/** The name of the source of the task. */
		source: FormControl<string | null | undefined>,

		/** The status of the task. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateSoftareUpdateConfigurationRunTaskPropertiesFormGroup() {
		return new FormGroup<SoftareUpdateConfigurationRunTaskPropertiesFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Software update configuration run tasks model. */
	export interface SoftareUpdateConfigurationRunTasks {

		/** Task properties of the software update configuration. */
		postTask?: SoftareUpdateConfigurationRunTaskProperties;

		/** Task properties of the software update configuration. */
		preTask?: SoftareUpdateConfigurationRunTaskProperties;
	}

	/** Software update configuration run tasks model. */
	export interface SoftareUpdateConfigurationRunTasksFormProperties {
	}
	export function CreateSoftareUpdateConfigurationRunTasksFormGroup() {
		return new FormGroup<SoftareUpdateConfigurationRunTasksFormProperties>({
		});

	}


	/** Software update configuration Run properties. */
	export interface SoftwareUpdateConfigurationRun {

		/** Resource Id of the software update configuration run */
		id?: string | null;

		/** Name of the software update configuration run. */
		name?: string | null;

		/** Software update configuration properties. */
		properties?: SoftwareUpdateConfigurationRunProperties;
	}

	/** Software update configuration Run properties. */
	export interface SoftwareUpdateConfigurationRunFormProperties {

		/** Resource Id of the software update configuration run */
		id: FormControl<string | null | undefined>,

		/** Name of the software update configuration run. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSoftwareUpdateConfigurationRunFormGroup() {
		return new FormGroup<SoftwareUpdateConfigurationRunFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** result of listing all software update configuration runs */
	export interface SoftwareUpdateConfigurationRunListResult {

		/** link to next page of results. */
		nextLink?: string | null;

		/** outer object returned when listing all software update configuration runs */
		value?: Array<SoftwareUpdateConfigurationRun>;
	}

	/** result of listing all software update configuration runs */
	export interface SoftwareUpdateConfigurationRunListResultFormProperties {

		/** link to next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSoftwareUpdateConfigurationRunListResultFormGroup() {
		return new FormGroup<SoftwareUpdateConfigurationRunListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Software update configuration properties. */
	export interface SoftwareUpdateConfigurationRunProperties {

		/**
		 * Number of computers in the software update configuration run.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		computerCount?: number | null;

		/** Configured duration for the software update configuration run. */
		configuredDuration?: string | null;

		/** CreatedBy property, which only appears in the response. */
		createdBy?: string | null;

		/** Creation time of the resource, which only appears in the response. */
		creationTime?: Date | null;

		/** End time of the software update configuration run. */
		endTime?: Date | null;

		/**
		 * Number of computers with failed status.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		failedCount?: number | null;

		/** LastModifiedBy property, which only appears in the response. */
		lastModifiedBy?: string | null;

		/** Last time resource was modified, which only appears in the response. */
		lastModifiedTime?: Date | null;

		/** Operating system target of the software update configuration triggered this run */
		osType?: string | null;

		/** Software update configuration Run Navigation model. */
		softwareUpdateConfiguration?: UpdateConfigurationNavigation;

		/** Start time of the software update configuration run. */
		startTime?: Date | null;

		/** Status of the software update configuration run. */
		status?: string | null;

		/** Software update configuration run tasks model. */
		tasks?: SoftareUpdateConfigurationRunTasks;
	}

	/** Software update configuration properties. */
	export interface SoftwareUpdateConfigurationRunPropertiesFormProperties {

		/**
		 * Number of computers in the software update configuration run.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		computerCount: FormControl<number | null | undefined>,

		/** Configured duration for the software update configuration run. */
		configuredDuration: FormControl<string | null | undefined>,

		/** CreatedBy property, which only appears in the response. */
		createdBy: FormControl<string | null | undefined>,

		/** Creation time of the resource, which only appears in the response. */
		creationTime: FormControl<Date | null | undefined>,

		/** End time of the software update configuration run. */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * Number of computers with failed status.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		failedCount: FormControl<number | null | undefined>,

		/** LastModifiedBy property, which only appears in the response. */
		lastModifiedBy: FormControl<string | null | undefined>,

		/** Last time resource was modified, which only appears in the response. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** Operating system target of the software update configuration triggered this run */
		osType: FormControl<string | null | undefined>,

		/** Start time of the software update configuration run. */
		startTime: FormControl<Date | null | undefined>,

		/** Status of the software update configuration run. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateSoftwareUpdateConfigurationRunPropertiesFormGroup() {
		return new FormGroup<SoftwareUpdateConfigurationRunPropertiesFormProperties>({
			computerCount: new FormControl<number | null | undefined>(undefined),
			configuredDuration: new FormControl<string | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			failedCount: new FormControl<number | null | undefined>(undefined),
			lastModifiedBy: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			osType: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Software update configuration Run Navigation model. */
	export interface UpdateConfigurationNavigation {

		/** Name of the software update configuration triggered the software update configuration run */
		name?: string | null;
	}

	/** Software update configuration Run Navigation model. */
	export interface UpdateConfigurationNavigationFormProperties {

		/** Name of the software update configuration triggered the software update configuration run */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfigurationNavigationFormGroup() {
		return new FormGroup<UpdateConfigurationNavigationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Return list of software update configuration runs
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurationRuns
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} api_version Client Api Version.
		 * @param {string} filter The filter to apply on the operation. You can use the following filters: 'properties/osType', 'properties/status', 'properties/startTime', and 'properties/softwareUpdateConfiguration/name'
		 * @param {string} skip Number of entries you skip before returning results
		 * @param {string} top Maximum number of entries returned in the results collection
		 * @return {SoftwareUpdateConfigurationRunListResult} Return list of software update configurations runs.
		 */
		SoftwareUpdateConfigurationRuns_List(subscriptionId: string, resourceGroupName: string, automationAccountName: string, api_version: string, filter: string | null | undefined, skip: string | null | undefined, top: string | null | undefined): Observable<SoftwareUpdateConfigurationRunListResult> {
			return this.http.get<SoftwareUpdateConfigurationRunListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/softwareUpdateConfigurationRuns&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&skip=' + (skip == null ? '' : encodeURIComponent(skip)) + '&top=' + (top == null ? '' : encodeURIComponent(top)), {});
		}

		/**
		 * Get a single software update configuration Run by Id.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurationRuns/{softwareUpdateConfigurationRunId}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} softwareUpdateConfigurationRunId The Id of the software update configuration run.
		 * @param {string} api_version Client Api Version.
		 * @return {SoftwareUpdateConfigurationRun} A single software update configuration Run.
		 */
		SoftwareUpdateConfigurationRuns_GetById(subscriptionId: string, resourceGroupName: string, automationAccountName: string, softwareUpdateConfigurationRunId: string, api_version: string): Observable<SoftwareUpdateConfigurationRun> {
			return this.http.get<SoftwareUpdateConfigurationRun>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/softwareUpdateConfigurationRuns/' + (softwareUpdateConfigurationRunId == null ? '' : encodeURIComponent(softwareUpdateConfigurationRunId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

