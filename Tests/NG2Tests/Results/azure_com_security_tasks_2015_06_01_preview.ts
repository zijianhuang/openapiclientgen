import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Security task that we recommend to do in order to strengthen security */
	export interface SecurityTask {

		/** Describes properties of a task. */
		properties?: SecurityTaskProperties;
	}

	/** Security task that we recommend to do in order to strengthen security */
	export interface SecurityTaskFormProperties {
	}
	export function CreateSecurityTaskFormGroup() {
		return new FormGroup<SecurityTaskFormProperties>({
		});

	}


	/** Describes properties of a task. */
	export interface SecurityTaskProperties {

		/** The time this task was discovered in UTC */
		creationTimeUtc?: Date | null;

		/** The time this task's details were last changed in UTC */
		lastStateChangeTimeUtc?: Date | null;

		/** Changing set of properties, depending on the task type that is derived from the name field */
		securityTaskParameters?: SecurityTaskParameters;

		/** State of the task (Active, Resolved etc.) */
		state?: string | null;

		/** Additional data on the state of the task */
		subState?: string | null;
	}

	/** Describes properties of a task. */
	export interface SecurityTaskPropertiesFormProperties {

		/** The time this task was discovered in UTC */
		creationTimeUtc: FormControl<Date | null | undefined>,

		/** The time this task's details were last changed in UTC */
		lastStateChangeTimeUtc: FormControl<Date | null | undefined>,

		/** State of the task (Active, Resolved etc.) */
		state: FormControl<string | null | undefined>,

		/** Additional data on the state of the task */
		subState: FormControl<string | null | undefined>,
	}
	export function CreateSecurityTaskPropertiesFormGroup() {
		return new FormGroup<SecurityTaskPropertiesFormProperties>({
			creationTimeUtc: new FormControl<Date | null | undefined>(undefined),
			lastStateChangeTimeUtc: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			subState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Changing set of properties, depending on the task type that is derived from the name field */
	export interface SecurityTaskParameters {

		/** Name of the task type */
		name?: string | null;
	}

	/** Changing set of properties, depending on the task type that is derived from the name field */
	export interface SecurityTaskParametersFormProperties {

		/** Name of the task type */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSecurityTaskParametersFormGroup() {
		return new FormGroup<SecurityTaskParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of security task recommendations */
	export interface SecurityTaskList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;
		value?: Array<SecurityTask>;
	}

	/** List of security task recommendations */
	export interface SecurityTaskListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSecurityTaskListFormGroup() {
		return new FormGroup<SecurityTaskListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Recommended tasks that will help improve the security of the subscription proactively
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/tasks
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} ascLocation The location where ASC stores the data of the subscription. can be retrieved from Get locations
		 * @param {string} filter OData filter. Optional.
		 * @return {SecurityTaskList} OK
		 */
		Tasks_ListByHomeRegion(api_version: string, subscriptionId: string, ascLocation: string, filter: string | null | undefined): Observable<SecurityTaskList> {
			return this.http.get<SecurityTaskList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/locations/' + (ascLocation == null ? '' : encodeURIComponent(ascLocation)) + '/tasks?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Recommended tasks that will help improve the security of the subscription proactively
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/tasks/{taskName}
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} ascLocation The location where ASC stores the data of the subscription. can be retrieved from Get locations
		 * @param {string} taskName Name of the task object, will be a GUID
		 * @return {SecurityTask} OK
		 */
		Tasks_GetSubscriptionLevelTask(api_version: string, subscriptionId: string, ascLocation: string, taskName: string): Observable<SecurityTask> {
			return this.http.get<SecurityTask>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/locations/' + (ascLocation == null ? '' : encodeURIComponent(ascLocation)) + '/tasks/' + (taskName == null ? '' : encodeURIComponent(taskName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Recommended tasks that will help improve the security of the subscription proactively
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/tasks/{taskName}/{taskUpdateActionType}
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} ascLocation The location where ASC stores the data of the subscription. can be retrieved from Get locations
		 * @param {string} taskName Name of the task object, will be a GUID
		 * @param {Tasks_UpdateSubscriptionLevelTaskStateTaskUpdateActionType} taskUpdateActionType Type of the action to do on the task
		 * @return {void} 
		 */
		Tasks_UpdateSubscriptionLevelTaskState(api_version: string, subscriptionId: string, ascLocation: string, taskName: string, taskUpdateActionType: Tasks_UpdateSubscriptionLevelTaskStateTaskUpdateActionType): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/locations/' + (ascLocation == null ? '' : encodeURIComponent(ascLocation)) + '/tasks/' + (taskName == null ? '' : encodeURIComponent(taskName)) + '/' + taskUpdateActionType + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Recommended tasks that will help improve the security of the subscription proactively
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/tasks
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} filter OData filter. Optional.
		 * @return {SecurityTaskList} OK
		 */
		Tasks_List(api_version: string, subscriptionId: string, filter: string | null | undefined): Observable<SecurityTaskList> {
			return this.http.get<SecurityTaskList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/tasks?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Recommended tasks that will help improve the security of the subscription proactively
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/tasks
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} ascLocation The location where ASC stores the data of the subscription. can be retrieved from Get locations
		 * @param {string} filter OData filter. Optional.
		 * @return {SecurityTaskList} OK
		 */
		Tasks_ListByResourceGroup(api_version: string, subscriptionId: string, resourceGroupName: string, ascLocation: string, filter: string | null | undefined): Observable<SecurityTaskList> {
			return this.http.get<SecurityTaskList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Security/locations/' + (ascLocation == null ? '' : encodeURIComponent(ascLocation)) + '/tasks?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Recommended tasks that will help improve the security of the subscription proactively
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/tasks/{taskName}
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} ascLocation The location where ASC stores the data of the subscription. can be retrieved from Get locations
		 * @param {string} taskName Name of the task object, will be a GUID
		 * @return {SecurityTask} OK
		 */
		Tasks_GetResourceGroupLevelTask(api_version: string, subscriptionId: string, resourceGroupName: string, ascLocation: string, taskName: string): Observable<SecurityTask> {
			return this.http.get<SecurityTask>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Security/locations/' + (ascLocation == null ? '' : encodeURIComponent(ascLocation)) + '/tasks/' + (taskName == null ? '' : encodeURIComponent(taskName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Recommended tasks that will help improve the security of the subscription proactively
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/tasks/{taskName}/{taskUpdateActionType}
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} ascLocation The location where ASC stores the data of the subscription. can be retrieved from Get locations
		 * @param {string} taskName Name of the task object, will be a GUID
		 * @param {Tasks_UpdateSubscriptionLevelTaskStateTaskUpdateActionType} taskUpdateActionType Type of the action to do on the task
		 * @return {void} 
		 */
		Tasks_UpdateResourceGroupLevelTaskState(api_version: string, subscriptionId: string, resourceGroupName: string, ascLocation: string, taskName: string, taskUpdateActionType: Tasks_UpdateSubscriptionLevelTaskStateTaskUpdateActionType): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Security/locations/' + (ascLocation == null ? '' : encodeURIComponent(ascLocation)) + '/tasks/' + (taskName == null ? '' : encodeURIComponent(taskName)) + '/' + taskUpdateActionType + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

	export enum Tasks_UpdateSubscriptionLevelTaskStateTaskUpdateActionType { Activate = 0, Dismiss = 1, Start = 2, Resolve = 3, Close = 4 }

}

