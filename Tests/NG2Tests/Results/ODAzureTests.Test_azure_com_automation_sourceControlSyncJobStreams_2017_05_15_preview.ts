import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Definition of the source control sync job stream. */
	export interface SourceControlSyncJobStream {

		/** Resource id. */
		id?: string | null;

		/** Definition of source control sync job stream properties. */
		properties?: SourceControlSyncJobStreamProperties;
	}

	/** Definition of the source control sync job stream. */
	export interface SourceControlSyncJobStreamFormProperties {

		/** Resource id. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSourceControlSyncJobStreamFormGroup() {
		return new FormGroup<SourceControlSyncJobStreamFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of the source control sync job stream by id. */
	export interface SourceControlSyncJobStreamById {

		/** Resource id. */
		id?: string | null;

		/** Definition of source control sync job stream by id properties. */
		properties?: SourceControlSyncJobStreamByIdProperties;
	}

	/** Definition of the source control sync job stream by id. */
	export interface SourceControlSyncJobStreamByIdFormProperties {

		/** Resource id. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSourceControlSyncJobStreamByIdFormGroup() {
		return new FormGroup<SourceControlSyncJobStreamByIdFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of source control sync job stream by id properties. */
	export interface SourceControlSyncJobStreamByIdProperties {

		/** The sync job stream id. */
		sourceControlSyncJobStreamId?: string | null;

		/** The text of the sync job stream. */
		streamText?: string | null;

		/** The type of the sync job stream. */
		streamType?: SourceControlSyncJobStreamByIdPropertiesStreamType | null;

		/** The summary of the sync job stream. */
		summary?: string | null;

		/** The time of the sync job stream. */
		time?: Date | null;

		/** The values of the job stream. */
		value?: {[id: string]: any };
	}

	/** Definition of source control sync job stream by id properties. */
	export interface SourceControlSyncJobStreamByIdPropertiesFormProperties {

		/** The sync job stream id. */
		sourceControlSyncJobStreamId: FormControl<string | null | undefined>,

		/** The text of the sync job stream. */
		streamText: FormControl<string | null | undefined>,

		/** The type of the sync job stream. */
		streamType: FormControl<SourceControlSyncJobStreamByIdPropertiesStreamType | null | undefined>,

		/** The summary of the sync job stream. */
		summary: FormControl<string | null | undefined>,

		/** The time of the sync job stream. */
		time: FormControl<Date | null | undefined>,

		/** The values of the job stream. */
		value: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateSourceControlSyncJobStreamByIdPropertiesFormGroup() {
		return new FormGroup<SourceControlSyncJobStreamByIdPropertiesFormProperties>({
			sourceControlSyncJobStreamId: new FormControl<string | null | undefined>(undefined),
			streamText: new FormControl<string | null | undefined>(undefined),
			streamType: new FormControl<SourceControlSyncJobStreamByIdPropertiesStreamType | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<Date | null | undefined>(undefined),
			value: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	export enum SourceControlSyncJobStreamByIdPropertiesStreamType { Error = 0, Output = 1 }


	/** Definition of source control sync job stream properties. */
	export interface SourceControlSyncJobStreamProperties {

		/** The sync job stream id. */
		sourceControlSyncJobStreamId?: string | null;

		/** The type of the sync job stream. */
		streamType?: SourceControlSyncJobStreamByIdPropertiesStreamType | null;

		/** The summary of the sync job stream. */
		summary?: string | null;

		/** The time of the sync job stream. */
		time?: Date | null;
	}

	/** Definition of source control sync job stream properties. */
	export interface SourceControlSyncJobStreamPropertiesFormProperties {

		/** The sync job stream id. */
		sourceControlSyncJobStreamId: FormControl<string | null | undefined>,

		/** The type of the sync job stream. */
		streamType: FormControl<SourceControlSyncJobStreamByIdPropertiesStreamType | null | undefined>,

		/** The summary of the sync job stream. */
		summary: FormControl<string | null | undefined>,

		/** The time of the sync job stream. */
		time: FormControl<Date | null | undefined>,
	}
	export function CreateSourceControlSyncJobStreamPropertiesFormGroup() {
		return new FormGroup<SourceControlSyncJobStreamPropertiesFormProperties>({
			sourceControlSyncJobStreamId: new FormControl<string | null | undefined>(undefined),
			streamType: new FormControl<SourceControlSyncJobStreamByIdPropertiesStreamType | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The response model for the list source control sync job streams operation. */
	export interface SourceControlSyncJobStreamsListBySyncJob {

		/** The next link. */
		nextLink?: string | null;

		/** The list of source control sync job streams. */
		value?: Array<SourceControlSyncJobStream>;
	}

	/** The response model for the list source control sync job streams operation. */
	export interface SourceControlSyncJobStreamsListBySyncJobFormProperties {

		/** The next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSourceControlSyncJobStreamsListBySyncJobFormGroup() {
		return new FormGroup<SourceControlSyncJobStreamsListBySyncJobFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of sync job streams identified by sync job id.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}/sourceControlSyncJobs/{sourceControlSyncJobId}/streams
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} sourceControlName The source control name.
		 * @param {string} sourceControlSyncJobId The source control sync job id.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {SourceControlSyncJobStreamsListBySyncJob} OK
		 */
		SourceControlSyncJobStreams_ListBySyncJob(resourceGroupName: string, automationAccountName: string, sourceControlName: string, sourceControlSyncJobId: string, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<SourceControlSyncJobStreamsListBySyncJob> {
			return this.http.get<SourceControlSyncJobStreamsListBySyncJob>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/sourceControls/' + (sourceControlName == null ? '' : encodeURIComponent(sourceControlName)) + '/sourceControlSyncJobs/' + (sourceControlSyncJobId == null ? '' : encodeURIComponent(sourceControlSyncJobId)) + '/streams&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve a sync job stream identified by stream id.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}/sourceControlSyncJobs/{sourceControlSyncJobId}/streams/{streamId}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} sourceControlName The source control name.
		 * @param {string} sourceControlSyncJobId The source control sync job id.
		 * @param {string} streamId The id of the sync job stream.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {SourceControlSyncJobStreamById} OK
		 */
		SourceControlSyncJobStreams_Get(resourceGroupName: string, automationAccountName: string, sourceControlName: string, sourceControlSyncJobId: string, streamId: string, subscriptionId: string, api_version: string): Observable<SourceControlSyncJobStreamById> {
			return this.http.get<SourceControlSyncJobStreamById>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/sourceControls/' + (sourceControlName == null ? '' : encodeURIComponent(sourceControlName)) + '/sourceControlSyncJobs/' + (sourceControlSyncJobId == null ? '' : encodeURIComponent(sourceControlSyncJobId)) + '/streams/' + (streamId == null ? '' : encodeURIComponent(streamId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

