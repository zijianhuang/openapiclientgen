import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Job {
	}
	export interface JobFormProperties {
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
		});

	}


	/** Job collection item properties. */
	export interface JobCollectionItem {

		/**
		 * Job collection item properties.
		 * Required
		 */
		properties: JobCollectionItemProperties;
	}

	/** Job collection item properties. */
	export interface JobCollectionItemFormProperties {
	}
	export function CreateJobCollectionItemFormGroup() {
		return new FormGroup<JobCollectionItemFormProperties>({
		});

	}


	/** Job collection item properties. */
	export interface JobCollectionItemProperties {

		/** The creation time of the job. */
		creationTime?: Date | null;

		/** The end time of the job. */
		endTime?: Date | null;

		/** The id of the job. */
		jobId?: string | null;

		/** The last modified time of the job. */
		lastModifiedTime?: Date | null;

		/** The provisioning state of a resource. */
		provisioningState?: string | null;

		/** Specifies the runOn group name where the job was executed. */
		runOn?: string | null;

		/** The runbook property associated with the entity. */
		runbook?: RunbookAssociationProperty;

		/** The start time of the job. */
		startTime?: Date | null;

		/** The status of the job. */
		status?: JobCollectionItemPropertiesStatus | null;
	}

	/** Job collection item properties. */
	export interface JobCollectionItemPropertiesFormProperties {

		/** The creation time of the job. */
		creationTime: FormControl<Date | null | undefined>,

		/** The end time of the job. */
		endTime: FormControl<Date | null | undefined>,

		/** The id of the job. */
		jobId: FormControl<string | null | undefined>,

		/** The last modified time of the job. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** The provisioning state of a resource. */
		provisioningState: FormControl<string | null | undefined>,

		/** Specifies the runOn group name where the job was executed. */
		runOn: FormControl<string | null | undefined>,

		/** The start time of the job. */
		startTime: FormControl<Date | null | undefined>,

		/** The status of the job. */
		status: FormControl<JobCollectionItemPropertiesStatus | null | undefined>,
	}
	export function CreateJobCollectionItemPropertiesFormGroup() {
		return new FormGroup<JobCollectionItemPropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			runOn: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<JobCollectionItemPropertiesStatus | null | undefined>(undefined),
		});

	}

	export enum JobCollectionItemPropertiesStatus { New = 0, Activating = 1, Running = 2, Completed = 3, Failed = 4, Stopped = 5, Blocked = 6, Suspended = 7, Disconnected = 8, Suspending = 9, Stopping = 10, Resuming = 11, Removing = 12 }


	/** The parameters supplied to the create job operation. */
	export interface JobCreateParameters {

		/** Required */
		properties: JobCreateProperties;
	}

	/** The parameters supplied to the create job operation. */
	export interface JobCreateParametersFormProperties {
	}
	export function CreateJobCreateParametersFormGroup() {
		return new FormGroup<JobCreateParametersFormProperties>({
		});

	}

	export interface JobCreateProperties {

		/** Gets or sets the parameters of the job. */
		parameters?: {[id: string]: string };

		/** Gets or sets the runOn which specifies the group name where the job is to be executed. */
		runOn?: string | null;

		/** The runbook property associated with the entity. */
		runbook?: RunbookAssociationProperty;
	}
	export interface JobCreatePropertiesFormProperties {

		/** Gets or sets the parameters of the job. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets the runOn which specifies the group name where the job is to be executed. */
		runOn: FormControl<string | null | undefined>,
	}
	export function CreateJobCreatePropertiesFormGroup() {
		return new FormGroup<JobCreatePropertiesFormProperties>({
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			runOn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response model for the list job operation. */
	export interface JobListResultV2 {

		/** The  link to the next page. */
		nextLink?: string | null;

		/** List of jobs. */
		value?: Array<JobCollectionItem>;
	}

	/** The response model for the list job operation. */
	export interface JobListResultV2FormProperties {

		/** The  link to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateJobListResultV2FormGroup() {
		return new FormGroup<JobListResultV2FormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of job properties. */
	export interface JobProperties {

		/** Gets or sets the creation time of the job. */
		creationTime?: Date | null;

		/** Gets or sets the end time of the job. */
		endTime?: Date | null;

		/** Gets or sets the exception of the job. */
		exception?: string | null;

		/** Gets or sets the id of the job. */
		jobId?: string | null;

		/** Gets or sets the last modified time of the job. */
		lastModifiedTime?: Date | null;

		/** Gets or sets the last status modified time of the job. */
		lastStatusModifiedTime?: Date | null;

		/** Gets or sets the parameters of the job. */
		parameters?: {[id: string]: string };

		/** The provisioning state of the resource. */
		provisioningState?: JobPropertiesProvisioningState | null;

		/** Gets or sets the runOn which specifies the group name where the job is to be executed. */
		runOn?: string | null;

		/** The runbook property associated with the entity. */
		runbook?: RunbookAssociationProperty;

		/** Gets or sets the start time of the job. */
		startTime?: Date | null;

		/** Gets or sets the job started by. */
		startedBy?: string | null;

		/** Gets or sets the status of the job. */
		status?: JobCollectionItemPropertiesStatus | null;

		/** Gets or sets the status details of the job. */
		statusDetails?: string | null;
	}

	/** Definition of job properties. */
	export interface JobPropertiesFormProperties {

		/** Gets or sets the creation time of the job. */
		creationTime: FormControl<Date | null | undefined>,

		/** Gets or sets the end time of the job. */
		endTime: FormControl<Date | null | undefined>,

		/** Gets or sets the exception of the job. */
		exception: FormControl<string | null | undefined>,

		/** Gets or sets the id of the job. */
		jobId: FormControl<string | null | undefined>,

		/** Gets or sets the last modified time of the job. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** Gets or sets the last status modified time of the job. */
		lastStatusModifiedTime: FormControl<Date | null | undefined>,

		/** Gets or sets the parameters of the job. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,

		/** The provisioning state of the resource. */
		provisioningState: FormControl<JobPropertiesProvisioningState | null | undefined>,

		/** Gets or sets the runOn which specifies the group name where the job is to be executed. */
		runOn: FormControl<string | null | undefined>,

		/** Gets or sets the start time of the job. */
		startTime: FormControl<Date | null | undefined>,

		/** Gets or sets the job started by. */
		startedBy: FormControl<string | null | undefined>,

		/** Gets or sets the status of the job. */
		status: FormControl<JobCollectionItemPropertiesStatus | null | undefined>,

		/** Gets or sets the status details of the job. */
		statusDetails: FormControl<string | null | undefined>,
	}
	export function CreateJobPropertiesFormGroup() {
		return new FormGroup<JobPropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			exception: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			lastStatusModifiedTime: new FormControl<Date | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			provisioningState: new FormControl<JobPropertiesProvisioningState | null | undefined>(undefined),
			runOn: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			startedBy: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<JobCollectionItemPropertiesStatus | null | undefined>(undefined),
			statusDetails: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JobPropertiesProvisioningState { Failed = 0, Succeeded = 1, Suspended = 2, Processing = 3 }


	/** The provisioning state of the resource. */
	export enum JobProvisioningStateProperty { Failed = 0, Succeeded = 1, Suspended = 2, Processing = 3 }


	/** Definition of the job stream. */
	export interface JobStream {

		/** Gets or sets the id of the resource. */
		id?: string | null;

		/** Definition of the job stream. */
		properties?: JobStreamProperties;
	}

	/** Definition of the job stream. */
	export interface JobStreamFormProperties {

		/** Gets or sets the id of the resource. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateJobStreamFormGroup() {
		return new FormGroup<JobStreamFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response model for the list job stream operation. */
	export interface JobStreamListResult {

		/** Gets or sets the next link. */
		nextLink?: string | null;

		/** A list of job streams. */
		value?: Array<JobStream>;
	}

	/** The response model for the list job stream operation. */
	export interface JobStreamListResultFormProperties {

		/** Gets or sets the next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateJobStreamListResultFormGroup() {
		return new FormGroup<JobStreamListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of the job stream. */
	export interface JobStreamProperties {

		/** Gets or sets the id of the job stream. */
		jobStreamId?: string | null;

		/** Gets or sets the stream text. */
		streamText?: string | null;

		/** Gets or sets the stream type. */
		streamType?: JobStreamPropertiesStreamType | null;

		/** Gets or sets the summary. */
		summary?: string | null;

		/** Gets or sets the creation time of the job. */
		time?: Date | null;

		/** Gets or sets the values of the job stream. */
		value?: {[id: string]: any };
	}

	/** Definition of the job stream. */
	export interface JobStreamPropertiesFormProperties {

		/** Gets or sets the id of the job stream. */
		jobStreamId: FormControl<string | null | undefined>,

		/** Gets or sets the stream text. */
		streamText: FormControl<string | null | undefined>,

		/** Gets or sets the stream type. */
		streamType: FormControl<JobStreamPropertiesStreamType | null | undefined>,

		/** Gets or sets the summary. */
		summary: FormControl<string | null | undefined>,

		/** Gets or sets the creation time of the job. */
		time: FormControl<Date | null | undefined>,

		/** Gets or sets the values of the job stream. */
		value: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateJobStreamPropertiesFormGroup() {
		return new FormGroup<JobStreamPropertiesFormProperties>({
			jobStreamId: new FormControl<string | null | undefined>(undefined),
			streamText: new FormControl<string | null | undefined>(undefined),
			streamType: new FormControl<JobStreamPropertiesStreamType | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<Date | null | undefined>(undefined),
			value: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	export enum JobStreamPropertiesStreamType { Progress = 0, Output = 1, Warning = 2, Error = 3, Debug = 4, Verbose = 5, Any = 6 }


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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of jobs.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {JobListResultV2} OK
		 */
		Job_ListByAutomationAccount(resourceGroupName: string, automationAccountName: string, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<JobListResultV2> {
			return this.http.get<JobListResultV2>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/jobs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve the job identified by job name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} jobName The job name.
		 * @param {string} api_version Client Api Version.
		 * @return {Job} OK
		 */
		Job_Get(subscriptionId: string, resourceGroupName: string, automationAccountName: string, jobName: string, api_version: string): Observable<Job> {
			return this.http.get<Job>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a job of the runbook.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} jobName The job name.
		 * @param {string} api_version Client Api Version.
		 * @param {JobCreateParameters} requestBody The parameters supplied to the create job operation.
		 * @return {void} 
		 */
		Job_Create(subscriptionId: string, resourceGroupName: string, automationAccountName: string, jobName: string, api_version: string, requestBody: JobCreateParameters): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the job output identified by job name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}/output
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} jobName The name of the job to be created.
		 * @param {string} api_version Client Api Version.
		 * @return {string} OK
		 */
		Job_GetOutput(subscriptionId: string, resourceGroupName: string, automationAccountName: string, jobName: string, api_version: string): Observable<string> {
			return this.http.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/output&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { responseType: 'text' });
		}

		/**
		 * Resume the job identified by jobName.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}/resume
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} jobName The job name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		Job_Resume(resourceGroupName: string, automationAccountName: string, jobName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/resume&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the runbook content of the job identified by job name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}/runbookContent
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} jobName The job name.
		 * @param {string} api_version Client Api Version.
		 * @return {string} OK
		 */
		Job_GetRunbookContent(subscriptionId: string, resourceGroupName: string, automationAccountName: string, jobName: string, api_version: string): Observable<string> {
			return this.http.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/runbookContent&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { responseType: 'text' });
		}

		/**
		 * Stop the job identified by jobName.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}/stop
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} jobName The job name.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		Job_Stop(resourceGroupName: string, automationAccountName: string, jobName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/stop&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a list of jobs streams identified by job name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}/streams
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} jobName The job name.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {JobStreamListResult} OK
		 */
		JobStream_ListByJob(resourceGroupName: string, automationAccountName: string, jobName: string, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<JobStreamListResult> {
			return this.http.get<JobStreamListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/streams&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve the job stream identified by job stream id.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}/streams/{jobStreamId}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} jobName The job name.
		 * @param {string} jobStreamId The job stream id.
		 * @param {string} api_version Client Api Version.
		 * @return {JobStream} OK
		 */
		JobStream_Get(subscriptionId: string, resourceGroupName: string, automationAccountName: string, jobName: string, jobStreamId: string, api_version: string): Observable<JobStream> {
			return this.http.get<JobStream>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/streams/' + (jobStreamId == null ? '' : encodeURIComponent(jobStreamId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Suspend the job identified by job name.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}/suspend
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} jobName The job name.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		Job_Suspend(subscriptionId: string, resourceGroupName: string, automationAccountName: string, jobName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/suspend&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

