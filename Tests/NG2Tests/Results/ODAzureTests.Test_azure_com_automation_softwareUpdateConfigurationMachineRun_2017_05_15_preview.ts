import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Software update configuration machine run job navigation properties. */
	export interface JobNavigation {

		/** Id of the job associated with the software update configuration run */
		id?: string | null;
	}

	/** Software update configuration machine run job navigation properties. */
	export interface JobNavigationFormProperties {

		/** Id of the job associated with the software update configuration run */
		id: FormControl<string | null | undefined>,
	}
	export function CreateJobNavigationFormGroup() {
		return new FormGroup<JobNavigationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Software update configuration machine run model. */
	export interface SoftwareUpdateConfigurationMachineRun {

		/** Resource Id of the software update configuration machine run */
		id?: string | null;

		/** Name of the software update configuration machine run */
		name?: string | null;

		/** Software update configuration machine run properties. */
		properties?: UpdateConfigurationMachineRunProperties;
	}

	/** Software update configuration machine run model. */
	export interface SoftwareUpdateConfigurationMachineRunFormProperties {

		/** Resource Id of the software update configuration machine run */
		id: FormControl<string | null | undefined>,

		/** Name of the software update configuration machine run */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSoftwareUpdateConfigurationMachineRunFormGroup() {
		return new FormGroup<SoftwareUpdateConfigurationMachineRunFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** result of listing all software update configuration machine runs */
	export interface SoftwareUpdateConfigurationMachineRunListResult {

		/** link to next page of results. */
		nextLink?: string | null;

		/** outer object returned when listing all software update configuration machine runs */
		value?: Array<SoftwareUpdateConfigurationMachineRun>;
	}

	/** result of listing all software update configuration machine runs */
	export interface SoftwareUpdateConfigurationMachineRunListResultFormProperties {

		/** link to next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSoftwareUpdateConfigurationMachineRunListResultFormGroup() {
		return new FormGroup<SoftwareUpdateConfigurationMachineRunListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Software update configuration machine run properties. */
	export interface UpdateConfigurationMachineRunProperties {

		/** configured duration for the software update configuration run. */
		configuredDuration?: string | null;

		/** correlation id of the software update configuration machine run */
		correlationId?: string | null;

		/** createdBy property, which only appears in the response. */
		createdBy?: string | null;

		/** Creation time of the resource, which only appears in the response. */
		creationTime?: Date | null;

		/** End time of the software update configuration machine run. */
		endTime?: Date | null;

		/** Error response of an operation failure */
		error?: UpdateConfigurationMachineRunPropertiesError;

		/** Software update configuration machine run job navigation properties. */
		job?: JobNavigation;

		/** lastModifiedBy property, which only appears in the response. */
		lastModifiedBy?: string | null;

		/** Last time resource was modified, which only appears in the response. */
		lastModifiedTime?: Date | null;

		/** Operating system target of the software update configuration triggered this run */
		osType?: string | null;

		/** Software update configuration Run Navigation model. */
		softwareUpdateConfiguration?: UpdateConfigurationNavigation;

		/** source computer id of the software update configuration machine run */
		sourceComputerId?: string | null;

		/** Start time of the software update configuration machine run. */
		startTime?: Date | null;

		/** Status of the software update configuration machine run. */
		status?: string | null;

		/** name of the updated computer */
		targetComputer?: string | null;

		/** type of the updated computer. */
		targetComputerType?: string | null;
	}

	/** Software update configuration machine run properties. */
	export interface UpdateConfigurationMachineRunPropertiesFormProperties {

		/** configured duration for the software update configuration run. */
		configuredDuration: FormControl<string | null | undefined>,

		/** correlation id of the software update configuration machine run */
		correlationId: FormControl<string | null | undefined>,

		/** createdBy property, which only appears in the response. */
		createdBy: FormControl<string | null | undefined>,

		/** Creation time of the resource, which only appears in the response. */
		creationTime: FormControl<Date | null | undefined>,

		/** End time of the software update configuration machine run. */
		endTime: FormControl<Date | null | undefined>,

		/** lastModifiedBy property, which only appears in the response. */
		lastModifiedBy: FormControl<string | null | undefined>,

		/** Last time resource was modified, which only appears in the response. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** Operating system target of the software update configuration triggered this run */
		osType: FormControl<string | null | undefined>,

		/** source computer id of the software update configuration machine run */
		sourceComputerId: FormControl<string | null | undefined>,

		/** Start time of the software update configuration machine run. */
		startTime: FormControl<Date | null | undefined>,

		/** Status of the software update configuration machine run. */
		status: FormControl<string | null | undefined>,

		/** name of the updated computer */
		targetComputer: FormControl<string | null | undefined>,

		/** type of the updated computer. */
		targetComputerType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfigurationMachineRunPropertiesFormGroup() {
		return new FormGroup<UpdateConfigurationMachineRunPropertiesFormProperties>({
			configuredDuration: new FormControl<string | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			lastModifiedBy: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			osType: new FormControl<string | null | undefined>(undefined),
			sourceComputerId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			targetComputer: new FormControl<string | null | undefined>(undefined),
			targetComputerType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateConfigurationMachineRunPropertiesError {

		/** Error code */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}
	export interface UpdateConfigurationMachineRunPropertiesErrorFormProperties {

		/** Error code */
		code: FormControl<string | null | undefined>,

		/** Error message indicating why the operation failed. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfigurationMachineRunPropertiesErrorFormGroup() {
		return new FormGroup<UpdateConfigurationMachineRunPropertiesErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
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
		 * Return list of software update configuration machine runs
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurationMachineRuns
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} api_version Client Api Version.
		 * @param {string} filter The filter to apply on the operation. You can use the following filters: 'properties/osType', 'properties/status', 'properties/startTime', and 'properties/softwareUpdateConfiguration/name'
		 * @param {string} skip number of entries you skip before returning results
		 * @param {string} top Maximum number of entries returned in the results collection
		 * @return {SoftwareUpdateConfigurationMachineRunListResult} Return list of software update configuration machine runs.
		 */
		SoftwareUpdateConfigurationMachineRuns_List(subscriptionId: string, resourceGroupName: string, automationAccountName: string, api_version: string, filter: string | null | undefined, skip: string | null | undefined, top: string | null | undefined): Observable<SoftwareUpdateConfigurationMachineRunListResult> {
			return this.http.get<SoftwareUpdateConfigurationMachineRunListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/softwareUpdateConfigurationMachineRuns&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&skip=' + (skip == null ? '' : encodeURIComponent(skip)) + '&top=' + (top == null ? '' : encodeURIComponent(top)), {});
		}

		/**
		 * Get a single software update configuration machine run by Id.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurationMachineRuns/{softwareUpdateConfigurationMachineRunId}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} softwareUpdateConfigurationMachineRunId The Id of the software update configuration machine run.
		 * @param {string} api_version Client Api Version.
		 * @return {SoftwareUpdateConfigurationMachineRun} A single software update configuration machine run.
		 */
		SoftwareUpdateConfigurationMachineRuns_GetById(subscriptionId: string, resourceGroupName: string, automationAccountName: string, softwareUpdateConfigurationMachineRunId: string, api_version: string): Observable<SoftwareUpdateConfigurationMachineRun> {
			return this.http.get<SoftwareUpdateConfigurationMachineRun>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/softwareUpdateConfigurationMachineRuns/' + (softwareUpdateConfigurationMachineRunId == null ? '' : encodeURIComponent(softwareUpdateConfigurationMachineRunId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

