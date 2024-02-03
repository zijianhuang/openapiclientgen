import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Definition of the source control sync job. */
	export interface SourceControlSyncJob {

		/** Resource id. */
		id?: string | null;

		/** Resource name. */
		name?: string | null;

		/** Definition of source control sync job properties. */
		properties?: SourceControlSyncJobProperties;

		/** Resource type. */
		type?: string | null;
	}

	/** Definition of the source control sync job. */
	export interface SourceControlSyncJobFormProperties {

		/** Resource id. */
		id: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSourceControlSyncJobFormGroup() {
		return new FormGroup<SourceControlSyncJobFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of the source control sync job. */
	export interface SourceControlSyncJobById {

		/** The id of the job. */
		id?: string | null;

		/** Definition of source control sync job properties. */
		properties?: SourceControlSyncJobByIdProperties;
	}

	/** Definition of the source control sync job. */
	export interface SourceControlSyncJobByIdFormProperties {

		/** The id of the job. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSourceControlSyncJobByIdFormGroup() {
		return new FormGroup<SourceControlSyncJobByIdFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of source control sync job properties. */
	export interface SourceControlSyncJobByIdProperties {

		/** The creation time of the job. */
		creationTime?: Date | null;

		/** The end time of the job. */
		endTime?: Date | null;

		/** The exceptions that occurred while running the sync job. */
		exception?: string | null;

		/** The provisioning state of the job. */
		provisioningState?: SourceControlSyncJobByIdPropertiesProvisioningState | null;

		/** The source control sync job id. */
		sourceControlSyncJobId?: string | null;

		/** The start time of the job. */
		startTime?: Date | null;

		/** The sync type. */
		syncType?: SourceControlSyncJobByIdPropertiesSyncType | null;
	}

	/** Definition of source control sync job properties. */
	export interface SourceControlSyncJobByIdPropertiesFormProperties {

		/** The creation time of the job. */
		creationTime: FormControl<Date | null | undefined>,

		/** The end time of the job. */
		endTime: FormControl<Date | null | undefined>,

		/** The exceptions that occurred while running the sync job. */
		exception: FormControl<string | null | undefined>,

		/** The provisioning state of the job. */
		provisioningState: FormControl<SourceControlSyncJobByIdPropertiesProvisioningState | null | undefined>,

		/** The source control sync job id. */
		sourceControlSyncJobId: FormControl<string | null | undefined>,

		/** The start time of the job. */
		startTime: FormControl<Date | null | undefined>,

		/** The sync type. */
		syncType: FormControl<SourceControlSyncJobByIdPropertiesSyncType | null | undefined>,
	}
	export function CreateSourceControlSyncJobByIdPropertiesFormGroup() {
		return new FormGroup<SourceControlSyncJobByIdPropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			exception: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<SourceControlSyncJobByIdPropertiesProvisioningState | null | undefined>(undefined),
			sourceControlSyncJobId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			syncType: new FormControl<SourceControlSyncJobByIdPropertiesSyncType | null | undefined>(undefined),
		});

	}

	export enum SourceControlSyncJobByIdPropertiesProvisioningState { Completed = 'Completed', Failed = 'Failed', Running = 'Running' }

	export enum SourceControlSyncJobByIdPropertiesSyncType { PartialSync = 'PartialSync', FullSync = 'FullSync' }


	/** The parameters supplied to the create source control sync job operation. */
	export interface SourceControlSyncJobCreateParameters {

		/**
		 * Definition of create source control sync job properties.
		 * Required
		 */
		properties: SourceControlSyncJobCreateProperties;
	}

	/** The parameters supplied to the create source control sync job operation. */
	export interface SourceControlSyncJobCreateParametersFormProperties {
	}
	export function CreateSourceControlSyncJobCreateParametersFormGroup() {
		return new FormGroup<SourceControlSyncJobCreateParametersFormProperties>({
		});

	}


	/** Definition of create source control sync job properties. */
	export interface SourceControlSyncJobCreateProperties {

		/**
		 * The commit id of the source control sync job. If not syncing to a commitId, enter an empty string.
		 * Required
		 * Min length: 0
		 */
		commitId: string;
	}

	/** Definition of create source control sync job properties. */
	export interface SourceControlSyncJobCreatePropertiesFormProperties {

		/**
		 * The commit id of the source control sync job. If not syncing to a commitId, enter an empty string.
		 * Required
		 * Min length: 0
		 */
		commitId: FormControl<string | null | undefined>,
	}
	export function CreateSourceControlSyncJobCreatePropertiesFormGroup() {
		return new FormGroup<SourceControlSyncJobCreatePropertiesFormProperties>({
			commitId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0)]),
		});

	}


	/** The response model for the list source control sync jobs operation. */
	export interface SourceControlSyncJobListResult {

		/** The next link. */
		nextLink?: string | null;

		/** The list of source control sync jobs. */
		value?: Array<SourceControlSyncJob>;
	}

	/** The response model for the list source control sync jobs operation. */
	export interface SourceControlSyncJobListResultFormProperties {

		/** The next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSourceControlSyncJobListResultFormGroup() {
		return new FormGroup<SourceControlSyncJobListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of source control sync job properties. */
	export interface SourceControlSyncJobProperties {

		/** The creation time of the job. */
		creationTime?: Date | null;

		/** The end time of the job. */
		endTime?: Date | null;

		/** The provisioning state of the job. */
		provisioningState?: SourceControlSyncJobByIdPropertiesProvisioningState | null;

		/** The source control sync job id. */
		sourceControlSyncJobId?: string | null;

		/** The start time of the job. */
		startTime?: Date | null;

		/** The sync type. */
		syncType?: SourceControlSyncJobByIdPropertiesSyncType | null;
	}

	/** Definition of source control sync job properties. */
	export interface SourceControlSyncJobPropertiesFormProperties {

		/** The creation time of the job. */
		creationTime: FormControl<Date | null | undefined>,

		/** The end time of the job. */
		endTime: FormControl<Date | null | undefined>,

		/** The provisioning state of the job. */
		provisioningState: FormControl<SourceControlSyncJobByIdPropertiesProvisioningState | null | undefined>,

		/** The source control sync job id. */
		sourceControlSyncJobId: FormControl<string | null | undefined>,

		/** The start time of the job. */
		startTime: FormControl<Date | null | undefined>,

		/** The sync type. */
		syncType: FormControl<SourceControlSyncJobByIdPropertiesSyncType | null | undefined>,
	}
	export function CreateSourceControlSyncJobPropertiesFormGroup() {
		return new FormGroup<SourceControlSyncJobPropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<SourceControlSyncJobByIdPropertiesProvisioningState | null | undefined>(undefined),
			sourceControlSyncJobId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			syncType: new FormControl<SourceControlSyncJobByIdPropertiesSyncType | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of source control sync jobs.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}/sourceControlSyncJobs
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} sourceControlName The source control name.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {SourceControlSyncJobListResult} OK
		 */
		SourceControlSyncJob_ListByAutomationAccount(resourceGroupName: string, automationAccountName: string, sourceControlName: string, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<SourceControlSyncJobListResult> {
			return this.http.get<SourceControlSyncJobListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/sourceControls/' + (sourceControlName == null ? '' : encodeURIComponent(sourceControlName)) + '/sourceControlSyncJobs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve the source control sync job identified by job id.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}/sourceControlSyncJobs/{sourceControlSyncJobId}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} sourceControlName The source control name.
		 * @param {string} sourceControlSyncJobId The source control sync job id.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {SourceControlSyncJobById} OK
		 */
		SourceControlSyncJob_Get(resourceGroupName: string, automationAccountName: string, sourceControlName: string, sourceControlSyncJobId: string, subscriptionId: string, api_version: string): Observable<SourceControlSyncJobById> {
			return this.http.get<SourceControlSyncJobById>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/sourceControls/' + (sourceControlName == null ? '' : encodeURIComponent(sourceControlName)) + '/sourceControlSyncJobs/' + (sourceControlSyncJobId == null ? '' : encodeURIComponent(sourceControlSyncJobId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates the sync job for a source control.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}/sourceControlSyncJobs/{sourceControlSyncJobId}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} sourceControlName The source control name.
		 * @param {string} sourceControlSyncJobId The source control sync job id.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {SourceControlSyncJobCreateParameters} requestBody The parameters supplied to the create source control sync job operation.
		 * @return {void} 
		 */
		SourceControlSyncJob_Create(resourceGroupName: string, automationAccountName: string, sourceControlName: string, sourceControlSyncJobId: string, subscriptionId: string, api_version: string, requestBody: SourceControlSyncJobCreateParameters): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/sourceControls/' + (sourceControlName == null ? '' : encodeURIComponent(sourceControlName)) + '/sourceControlSyncJobs/' + (sourceControlSyncJobId == null ? '' : encodeURIComponent(sourceControlSyncJobId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

