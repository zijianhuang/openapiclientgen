import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Information about each step of the update process. */
	export interface Step {

		/** Description of the step. */
		description?: string | null;

		/** Time at which this step stopped executing */
		endTimeUtc?: Date | null;

		/** Error message, if any. */
		errorMessage?: string | null;

		/** Name of the step. */
		name?: string | null;

		/** Time at which this step started executing */
		startTimeUtc?: Date | null;

		/** State of the step. */
		status?: string | null;

		/** Inner steps */
		steps?: Array<Step>;
	}

	/** Information about each step of the update process. */
	export interface StepFormProperties {

		/** Description of the step. */
		description: FormControl<string | null | undefined>,

		/** Time at which this step stopped executing */
		endTimeUtc: FormControl<Date | null | undefined>,

		/** Error message, if any. */
		errorMessage: FormControl<string | null | undefined>,

		/** Name of the step. */
		name: FormControl<string | null | undefined>,

		/** Time at which this step started executing */
		startTimeUtc: FormControl<Date | null | undefined>,

		/** State of the step. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateStepFormGroup() {
		return new FormGroup<StepFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			endTimeUtc: new FormControl<Date | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startTimeUtc: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Representation of a update run resource. */
	export interface UpdateRun {

		/** Properties of an update run. */
		properties?: UpdateRunModel;
	}

	/** Representation of a update run resource. */
	export interface UpdateRunFormProperties {
	}
	export function CreateUpdateRunFormGroup() {
		return new FormGroup<UpdateRunFormProperties>({
		});

	}


	/** Properties of an update run. */
	export interface UpdateRunModel {

		/** Duration of the update. */
		duration?: string | null;

		/** Information about each step of the update process. */
		progress?: Step;

		/** State of the update run. */
		state?: UpdateRunModelState | null;

		/** Update start time. */
		timeStarted?: Date | null;
	}

	/** Properties of an update run. */
	export interface UpdateRunModelFormProperties {

		/** Duration of the update. */
		duration: FormControl<string | null | undefined>,

		/** State of the update run. */
		state: FormControl<UpdateRunModelState | null | undefined>,

		/** Update start time. */
		timeStarted: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateRunModelFormGroup() {
		return new FormGroup<UpdateRunModelFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<UpdateRunModelState | null | undefined>(undefined),
			timeStarted: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum UpdateRunModelState { Unknown = 0, Succeeded = 1, InProgress = 2, Failed = 3 }


	/** Pageable list of update runs. */
	export interface UpdateRunList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of update runs. */
		value?: Array<UpdateRun>;
	}

	/** Pageable list of update runs. */
	export interface UpdateRunListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRunListFormGroup() {
		return new FormGroup<UpdateRunListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** State of the update run. */
	export enum UpdateRunState { Unknown = 0, Succeeded = 1, InProgress = 2, Failed = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get the list of update runs.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Update.Admin/updateLocations/{updateLocation}/updateRuns
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.  The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} updateLocation The name of the update location.
		 * @param {string} api_version Client API Version.
		 * @return {UpdateRunList} OK
		 */
		UpdateRuns_ListTopLevel(subscriptionId: string, resourceGroupName: string, updateLocation: string, api_version: string): Observable<UpdateRunList> {
			return this.http.get<UpdateRunList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Update.Admin/updateLocations/' + (updateLocation == null ? '' : encodeURIComponent(updateLocation)) + '/updateRuns&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get an instance of update run using the ID.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Update.Admin/updateLocations/{updateLocation}/updateRuns/{runName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.  The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} updateLocation The name of the update location.
		 * @param {string} runName Update run identifier.
		 * @param {string} api_version Client API Version.
		 * @return {UpdateRun} OK
		 */
		UpdateRuns_GetTopLevel(subscriptionId: string, resourceGroupName: string, updateLocation: string, runName: string, api_version: string): Observable<UpdateRun> {
			return this.http.get<UpdateRun>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Update.Admin/updateLocations/' + (updateLocation == null ? '' : encodeURIComponent(updateLocation)) + '/updateRuns/' + (runName == null ? '' : encodeURIComponent(runName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the list of update runs.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Update.Admin/updateLocations/{updateLocation}/updates/{updateName}/updateRuns
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.  The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} updateLocation The name of the update location.
		 * @param {string} updateName Name of the update.
		 * @param {string} api_version Client API Version.
		 * @return {UpdateRunList} OK
		 */
		UpdateRuns_List(subscriptionId: string, resourceGroupName: string, updateLocation: string, updateName: string, api_version: string): Observable<UpdateRunList> {
			return this.http.get<UpdateRunList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Update.Admin/updateLocations/' + (updateLocation == null ? '' : encodeURIComponent(updateLocation)) + '/updates/' + (updateName == null ? '' : encodeURIComponent(updateName)) + '/updateRuns&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get an instance of update run using the ID.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Update.Admin/updateLocations/{updateLocation}/updates/{updateName}/updateRuns/{runName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.  The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} updateLocation The name of the update location.
		 * @param {string} updateName Name of the update.
		 * @param {string} runName Update run identifier.
		 * @param {string} api_version Client API Version.
		 * @return {UpdateRun} OK
		 */
		UpdateRuns_Get(subscriptionId: string, resourceGroupName: string, updateLocation: string, updateName: string, runName: string, api_version: string): Observable<UpdateRun> {
			return this.http.get<UpdateRun>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Update.Admin/updateLocations/' + (updateLocation == null ? '' : encodeURIComponent(updateLocation)) + '/updates/' + (updateName == null ? '' : encodeURIComponent(updateName)) + '/updateRuns/' + (runName == null ? '' : encodeURIComponent(runName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Resume a failed update.
		 * Post subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Update.Admin/updateLocations/{updateLocation}/updates/{updateName}/updateRuns/{runName}/rerun
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.  The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} updateLocation The name of the update location.
		 * @param {string} updateName Name of the update.
		 * @param {string} runName Update run identifier.
		 * @param {string} api_version Client API Version.
		 * @return {void} OK
		 */
		UpdateRuns_Rerun(subscriptionId: string, resourceGroupName: string, updateLocation: string, updateName: string, runName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Update.Admin/updateLocations/' + (updateLocation == null ? '' : encodeURIComponent(updateLocation)) + '/updates/' + (updateName == null ? '' : encodeURIComponent(updateName)) + '/updateRuns/' + (runName == null ? '' : encodeURIComponent(runName)) + '/rerun&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

