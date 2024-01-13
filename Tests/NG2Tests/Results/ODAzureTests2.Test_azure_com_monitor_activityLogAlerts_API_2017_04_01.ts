import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An Azure activity log alert. */
	export interface ActivityLogAlert {

		/**
		 * A list of activity log alert actions.
		 * Required
		 */
		actions: ActivityLogAlertActionList;

		/**
		 * An Activity Log alert condition that is met when all its member conditions are met.
		 * Required
		 */
		condition: ActivityLogAlertAllOfCondition;

		/** A description of this activity log alert. */
		description?: string | null;

		/** Indicates whether this activity log alert is enabled. If an activity log alert is not enabled, then none of its actions will be activated. */
		enabled?: boolean | null;

		/**
		 * A list of resourceIds that will be used as prefixes. The alert will only apply to activityLogs with resourceIds that fall under one of these prefixes. This list must include at least one item.
		 * Required
		 */
		scopes: Array<string>;
	}

	/** An Azure activity log alert. */
	export interface ActivityLogAlertFormProperties {

		/** A description of this activity log alert. */
		description: FormControl<string | null | undefined>,

		/** Indicates whether this activity log alert is enabled. If an activity log alert is not enabled, then none of its actions will be activated. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateActivityLogAlertFormGroup() {
		return new FormGroup<ActivityLogAlertFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A pointer to an Azure Action Group. */
	export interface ActivityLogAlertActionGroup {

		/**
		 * The resourceId of the action group. This cannot be null or empty.
		 * Required
		 */
		actionGroupId: string;

		/** the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload. */
		webhookProperties?: any;
	}

	/** A pointer to an Azure Action Group. */
	export interface ActivityLogAlertActionGroupFormProperties {

		/**
		 * The resourceId of the action group. This cannot be null or empty.
		 * Required
		 */
		actionGroupId: FormControl<string | null | undefined>,

		/** the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload. */
		webhookProperties: FormControl<any | null | undefined>,
	}
	export function CreateActivityLogAlertActionGroupFormGroup() {
		return new FormGroup<ActivityLogAlertActionGroupFormProperties>({
			actionGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			webhookProperties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** A list of activity log alert actions. */
	export interface ActivityLogAlertActionList {

		/** The list of activity log alerts. */
		actionGroups?: Array<ActivityLogAlertActionGroup>;
	}

	/** A list of activity log alert actions. */
	export interface ActivityLogAlertActionListFormProperties {
	}
	export function CreateActivityLogAlertActionListFormGroup() {
		return new FormGroup<ActivityLogAlertActionListFormProperties>({
		});

	}


	/** An Activity Log alert condition that is met when all its member conditions are met. */
	export interface ActivityLogAlertAllOfCondition {

		/**
		 * The list of activity log alert conditions.
		 * Required
		 */
		allOf: Array<ActivityLogAlertLeafCondition>;
	}

	/** An Activity Log alert condition that is met when all its member conditions are met. */
	export interface ActivityLogAlertAllOfConditionFormProperties {
	}
	export function CreateActivityLogAlertAllOfConditionFormGroup() {
		return new FormGroup<ActivityLogAlertAllOfConditionFormProperties>({
		});

	}


	/** An Activity Log alert condition that is met by comparing an activity log field and value. */
	export interface ActivityLogAlertLeafCondition {

		/**
		 * The field value will be compared to this value (case-insensitive) to determine if the condition is met.
		 * Required
		 */
		equals: string;

		/**
		 * The name of the field that this condition will examine. The possible values for this field are (case-insensitive): 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties.'.
		 * Required
		 */
		field: string;
	}

	/** An Activity Log alert condition that is met by comparing an activity log field and value. */
	export interface ActivityLogAlertLeafConditionFormProperties {

		/**
		 * The field value will be compared to this value (case-insensitive) to determine if the condition is met.
		 * Required
		 */
		equals: FormControl<string | null | undefined>,

		/**
		 * The name of the field that this condition will examine. The possible values for this field are (case-insensitive): 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties.'.
		 * Required
		 */
		field: FormControl<string | null | undefined>,
	}
	export function CreateActivityLogAlertLeafConditionFormGroup() {
		return new FormGroup<ActivityLogAlertLeafConditionFormProperties>({
			equals: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			field: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of activity log alerts. */
	export interface ActivityLogAlertList {

		/** Provides the link to retrieve the next set of elements. */
		nextLink?: string | null;

		/** The list of activity log alerts. */
		value?: Array<ActivityLogAlertResource>;
	}

	/** A list of activity log alerts. */
	export interface ActivityLogAlertListFormProperties {

		/** Provides the link to retrieve the next set of elements. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateActivityLogAlertListFormGroup() {
		return new FormGroup<ActivityLogAlertListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An activity log alert resource. */
	export interface ActivityLogAlertResource extends Resource {

		/** An Azure activity log alert. */
		properties?: ActivityLogAlert;
	}

	/** An activity log alert resource. */
	export interface ActivityLogAlertResourceFormProperties extends ResourceFormProperties {
	}
	export function CreateActivityLogAlertResourceFormGroup() {
		return new FormGroup<ActivityLogAlertResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Azure activity log alert for patch operations. */
	export interface ActivityLogAlertPatch {

		/** Indicates whether this activity log alert is enabled. If an activity log alert is not enabled, then none of its actions will be activated. */
		enabled?: boolean | null;
	}

	/** An Azure activity log alert for patch operations. */
	export interface ActivityLogAlertPatchFormProperties {

		/** Indicates whether this activity log alert is enabled. If an activity log alert is not enabled, then none of its actions will be activated. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateActivityLogAlertPatchFormGroup() {
		return new FormGroup<ActivityLogAlertPatchFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An activity log alert object for the body of patch operations. */
	export interface ActivityLogAlertPatchBody {

		/** An Azure activity log alert for patch operations. */
		properties?: ActivityLogAlertPatch;

		/** Resource tags */
		tags?: any;
	}

	/** An activity log alert object for the body of patch operations. */
	export interface ActivityLogAlertPatchBodyFormProperties {

		/** Resource tags */
		tags: FormControl<any | null | undefined>,
	}
	export function CreateActivityLogAlertPatchBodyFormGroup() {
		return new FormGroup<ActivityLogAlertPatchBodyFormProperties>({
			tags: new FormControl<any | null | undefined>(undefined),
		});

	}


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


	/** An azure resource object */
	export interface Resource {

		/** Azure resource Id */
		id?: string | null;

		/**
		 * Resource location
		 * Required
		 */
		location: string;

		/** Azure resource name */
		name?: string | null;

		/** Resource tags */
		tags?: any;

		/** Azure resource type */
		type?: string | null;
	}

	/** An azure resource object */
	export interface ResourceFormProperties {

		/** Azure resource Id */
		id: FormControl<string | null | undefined>,

		/**
		 * Resource location
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Azure resource name */
		name: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<any | null | undefined>,

		/** Azure resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get a list of all activity log alerts in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/microsoft.insights/activityLogAlerts
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} api_version Client Api Version.
		 * @return {ActivityLogAlertList} The request succeeded.
		 */
		ActivityLogAlerts_ListBySubscriptionId(subscriptionId: string, api_version: string): Observable<ActivityLogAlertList> {
			return this.http.get<ActivityLogAlertList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/microsoft.insights/activityLogAlerts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a list of all activity log alerts in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/activityLogAlerts
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client Api Version.
		 * @return {ActivityLogAlertList} The request succeeded.
		 */
		ActivityLogAlerts_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<ActivityLogAlertList> {
			return this.http.get<ActivityLogAlertList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/activityLogAlerts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get an activity log alert.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/activityLogAlerts/{activityLogAlertName}
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} activityLogAlertName The name of the activity log alert.
		 * @param {string} api_version Client Api Version.
		 * @return {ActivityLogAlertResource} The request succeeded.
		 */
		ActivityLogAlerts_Get(subscriptionId: string, resourceGroupName: string, activityLogAlertName: string, api_version: string): Observable<ActivityLogAlertResource> {
			return this.http.get<ActivityLogAlertResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/activityLogAlerts/' + (activityLogAlertName == null ? '' : encodeURIComponent(activityLogAlertName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a new activity log alert or update an existing one.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/activityLogAlerts/{activityLogAlertName}
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} activityLogAlertName The name of the activity log alert.
		 * @param {string} api_version Client Api Version.
		 * @param {ActivityLogAlertResource} requestBody The activity log alert to create or use for the update.
		 * @return {ActivityLogAlertResource} An existing activity log alert was successfully updated.
		 */
		ActivityLogAlerts_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, activityLogAlertName: string, api_version: string, requestBody: ActivityLogAlertResource): Observable<ActivityLogAlertResource> {
			return this.http.put<ActivityLogAlertResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/activityLogAlerts/' + (activityLogAlertName == null ? '' : encodeURIComponent(activityLogAlertName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an activity log alert.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/activityLogAlerts/{activityLogAlertName}
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} activityLogAlertName The name of the activity log alert.
		 * @param {string} api_version Client Api Version.
		 * @return {void} The activity log alert was successfully deleted.
		 */
		ActivityLogAlerts_Delete(subscriptionId: string, resourceGroupName: string, activityLogAlertName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/activityLogAlerts/' + (activityLogAlertName == null ? '' : encodeURIComponent(activityLogAlertName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing ActivityLogAlertResource's tags. To update other fields use the CreateOrUpdate method.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/activityLogAlerts/{activityLogAlertName}
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} activityLogAlertName The name of the activity log alert.
		 * @param {string} api_version Client Api Version.
		 * @param {ActivityLogAlertPatchBody} requestBody Parameters supplied to the operation.
		 * @return {ActivityLogAlertResource} An existing activity log alert was successfully updated.
		 */
		ActivityLogAlerts_Update(subscriptionId: string, resourceGroupName: string, activityLogAlertName: string, api_version: string, requestBody: ActivityLogAlertPatchBody): Observable<ActivityLogAlertResource> {
			return this.http.patch<ActivityLogAlertResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/activityLogAlerts/' + (activityLogAlertName == null ? '' : encodeURIComponent(activityLogAlertName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

