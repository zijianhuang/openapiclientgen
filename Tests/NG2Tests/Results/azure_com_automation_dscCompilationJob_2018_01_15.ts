import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DscCompilationJob {
	}
	export interface DscCompilationJobFormProperties {
	}
	export function CreateDscCompilationJobFormGroup() {
		return new FormGroup<DscCompilationJobFormProperties>({
		});

	}


	/** The parameters supplied to the create compilation job operation. */
	export interface DscCompilationJobCreateParameters {

		/** Gets or sets the location of the resource. */
		location?: string | null;

		/** Gets or sets name of the resource. */
		name?: string | null;

		/**
		 * The parameters supplied to the create compilation job operation.
		 * Required
		 */
		properties: DscCompilationJobCreateProperties;

		/** Gets or sets the tags attached to the resource. */
		tags?: {[id: string]: string };
	}

	/** The parameters supplied to the create compilation job operation. */
	export interface DscCompilationJobCreateParametersFormProperties {

		/** Gets or sets the location of the resource. */
		location: FormControl<string | null | undefined>,

		/** Gets or sets name of the resource. */
		name: FormControl<string | null | undefined>,

		/** Gets or sets the tags attached to the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateDscCompilationJobCreateParametersFormGroup() {
		return new FormGroup<DscCompilationJobCreateParametersFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The parameters supplied to the create compilation job operation. */
	export interface DscCompilationJobCreateProperties {

		/**
		 * The Dsc configuration property associated with the entity.
		 * Required
		 */
		configuration: DscConfigurationAssociationProperty;

		/** If a new build version of NodeConfiguration is required. */
		incrementNodeConfigurationBuild?: boolean | null;

		/** Gets or sets the parameters of the job. */
		parameters?: {[id: string]: string };
	}

	/** The parameters supplied to the create compilation job operation. */
	export interface DscCompilationJobCreatePropertiesFormProperties {

		/** If a new build version of NodeConfiguration is required. */
		incrementNodeConfigurationBuild: FormControl<boolean | null | undefined>,

		/** Gets or sets the parameters of the job. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateDscCompilationJobCreatePropertiesFormGroup() {
		return new FormGroup<DscCompilationJobCreatePropertiesFormProperties>({
			incrementNodeConfigurationBuild: new FormControl<boolean | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The response model for the list job operation. */
	export interface DscCompilationJobListResult {

		/** Gets or sets the next link. */
		nextLink?: string | null;

		/** Gets or sets a list of Dsc Compilation jobs. */
		value?: Array<DscCompilationJob>;
	}

	/** The response model for the list job operation. */
	export interface DscCompilationJobListResultFormProperties {

		/** Gets or sets the next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDscCompilationJobListResultFormGroup() {
		return new FormGroup<DscCompilationJobListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of Dsc Compilation job properties. */
	export interface DscCompilationJobProperties {

		/** The Dsc configuration property associated with the entity. */
		configuration?: DscConfigurationAssociationProperty;

		/** Gets the creation time of the job. */
		creationTime?: Date | null;

		/** Gets the end time of the job. */
		endTime?: Date | null;

		/** Gets the exception of the job. */
		exception?: string | null;

		/** Gets the id of the job. */
		jobId?: string | null;

		/** Gets the last modified time of the job. */
		lastModifiedTime?: Date | null;

		/** Gets the last status modified time of the job. */
		lastStatusModifiedTime?: Date | null;

		/** Gets or sets the parameters of the job. */
		parameters?: {[id: string]: string };

		/** The provisioning state of the resource. */
		provisioningState?: DscCompilationJobPropertiesProvisioningState | null;

		/** Gets or sets the runOn which specifies the group name where the job is to be executed. */
		runOn?: string | null;

		/** Gets the start time of the job. */
		startTime?: Date | null;

		/** Gets the compilation job started by. */
		startedBy?: string | null;

		/** Gets or sets the status of the job. */
		status?: DscCompilationJobPropertiesStatus | null;

		/** Gets or sets the status details of the job. */
		statusDetails?: string | null;
	}

	/** Definition of Dsc Compilation job properties. */
	export interface DscCompilationJobPropertiesFormProperties {

		/** Gets the creation time of the job. */
		creationTime: FormControl<Date | null | undefined>,

		/** Gets the end time of the job. */
		endTime: FormControl<Date | null | undefined>,

		/** Gets the exception of the job. */
		exception: FormControl<string | null | undefined>,

		/** Gets the id of the job. */
		jobId: FormControl<string | null | undefined>,

		/** Gets the last modified time of the job. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** Gets the last status modified time of the job. */
		lastStatusModifiedTime: FormControl<Date | null | undefined>,

		/** Gets or sets the parameters of the job. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,

		/** The provisioning state of the resource. */
		provisioningState: FormControl<DscCompilationJobPropertiesProvisioningState | null | undefined>,

		/** Gets or sets the runOn which specifies the group name where the job is to be executed. */
		runOn: FormControl<string | null | undefined>,

		/** Gets the start time of the job. */
		startTime: FormControl<Date | null | undefined>,

		/** Gets the compilation job started by. */
		startedBy: FormControl<string | null | undefined>,

		/** Gets or sets the status of the job. */
		status: FormControl<DscCompilationJobPropertiesStatus | null | undefined>,

		/** Gets or sets the status details of the job. */
		statusDetails: FormControl<string | null | undefined>,
	}
	export function CreateDscCompilationJobPropertiesFormGroup() {
		return new FormGroup<DscCompilationJobPropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			exception: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			lastStatusModifiedTime: new FormControl<Date | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			provisioningState: new FormControl<DscCompilationJobPropertiesProvisioningState | null | undefined>(undefined),
			runOn: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			startedBy: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DscCompilationJobPropertiesStatus | null | undefined>(undefined),
			statusDetails: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DscCompilationJobPropertiesProvisioningState { Failed = 'Failed', Succeeded = 'Succeeded', Suspended = 'Suspended', Processing = 'Processing' }

	export enum DscCompilationJobPropertiesStatus { New = 'New', Activating = 'Activating', Running = 'Running', Completed = 'Completed', Failed = 'Failed', Stopped = 'Stopped', Blocked = 'Blocked', Suspended = 'Suspended', Disconnected = 'Disconnected', Suspending = 'Suspending', Stopping = 'Stopping', Resuming = 'Resuming', Removing = 'Removing' }


	/** The Dsc configuration property associated with the entity. */
	export interface DscConfigurationAssociationProperty {

		/** Gets or sets the name of the Dsc configuration. */
		name?: string | null;
	}

	/** The Dsc configuration property associated with the entity. */
	export interface DscConfigurationAssociationPropertyFormProperties {

		/** Gets or sets the name of the Dsc configuration. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDscConfigurationAssociationPropertyFormGroup() {
		return new FormGroup<DscConfigurationAssociationPropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The provisioning state of the resource. */
	export enum JobProvisioningStateProperty { Failed = 'Failed', Succeeded = 'Succeeded', Suspended = 'Suspended', Processing = 'Processing' }


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

	export enum JobStreamPropertiesStreamType { Progress = 'Progress', Output = 'Output', Warning = 'Warning', Error = 'Error', Debug = 'Debug', Verbose = 'Verbose', Any = 'Any' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of dsc compilation jobs.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/compilationjobs
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {DscCompilationJobListResult} OK
		 */
		DscCompilationJob_ListByAutomationAccount(resourceGroupName: string, automationAccountName: string, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<DscCompilationJobListResult> {
			return this.http.get<DscCompilationJobListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/compilationjobs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve the Dsc configuration compilation job identified by job id.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/compilationjobs/{compilationJobName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} compilationJobName The DSC configuration Id.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {DscCompilationJob} OK
		 */
		DscCompilationJob_Get(resourceGroupName: string, automationAccountName: string, compilationJobName: string, subscriptionId: string, api_version: string): Observable<DscCompilationJob> {
			return this.http.get<DscCompilationJob>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/compilationjobs/' + (compilationJobName == null ? '' : encodeURIComponent(compilationJobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates the Dsc compilation job of the configuration.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/compilationjobs/{compilationJobName}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} compilationJobName The DSC configuration Id.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {DscCompilationJobCreateParameters} requestBody The parameters supplied to the create compilation job operation.
		 * @return {void} 
		 */
		DscCompilationJob_Create(resourceGroupName: string, automationAccountName: string, compilationJobName: string, subscriptionId: string, api_version: string, requestBody: DscCompilationJobCreateParameters): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/compilationjobs/' + (compilationJobName == null ? '' : encodeURIComponent(compilationJobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve all the job streams for the compilation Job.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/compilationjobs/{jobId}/streams
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} jobId The job id.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {JobStreamListResult} OK
		 */
		DscCompilationJobStream_ListByJob(resourceGroupName: string, automationAccountName: string, jobId: string, subscriptionId: string, api_version: string): Observable<JobStreamListResult> {
			return this.http.get<JobStreamListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/compilationjobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/streams&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve the job stream identified by job stream id.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/compilationjobs/{jobId}/streams/{jobStreamId}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} jobId The job id.
		 * @param {string} jobStreamId The job stream id.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {JobStream} OK
		 */
		DscCompilationJob_GetStream(resourceGroupName: string, automationAccountName: string, jobId: string, jobStreamId: string, subscriptionId: string, api_version: string): Observable<JobStream> {
			return this.http.get<JobStream>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/compilationjobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/streams/' + (jobStreamId == null ? '' : encodeURIComponent(jobStreamId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

