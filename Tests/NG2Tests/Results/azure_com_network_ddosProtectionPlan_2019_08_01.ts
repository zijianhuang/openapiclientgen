import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A DDoS protection plan in a resource group. */
	export interface DdosProtectionPlan {

		/** A unique read-only string that changes whenever the resource is updated. */
		etag?: string | null;

		/** Resource ID. */
		id?: string | null;

		/** Resource location. */
		location?: string | null;

		/** Resource name. */
		name?: string | null;

		/** DDoS protection plan properties. */
		properties?: DdosProtectionPlanPropertiesFormat;

		/** Resource tags. */
		tags?: {[id: string]: string };

		/** Resource type. */
		type?: string | null;
	}

	/** A DDoS protection plan in a resource group. */
	export interface DdosProtectionPlanFormProperties {

		/** A unique read-only string that changes whenever the resource is updated. */
		etag: FormControl<string | null | undefined>,

		/** Resource ID. */
		id: FormControl<string | null | undefined>,

		/** Resource location. */
		location: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDdosProtectionPlanFormGroup() {
		return new FormGroup<DdosProtectionPlanFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of DDoS protection plans. */
	export interface DdosProtectionPlanListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** A list of DDoS protection plans. */
		value?: Array<DdosProtectionPlan>;
	}

	/** A list of DDoS protection plans. */
	export interface DdosProtectionPlanListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDdosProtectionPlanListResultFormGroup() {
		return new FormGroup<DdosProtectionPlanListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DDoS protection plan properties. */
	export interface DdosProtectionPlanPropertiesFormat {

		/** The current provisioning state. */
		provisioningState?: DdosProtectionPlanPropertiesFormatProvisioningState | null;

		/** The resource GUID property of the DDoS protection plan resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups. */
		resourceGuid?: string | null;

		/** The list of virtual networks associated with the DDoS protection plan resource. This list is read-only. */
		DdosProtectionPlanPropertiesFormatVirtualNetworks?: Array<DdosProtectionPlanPropertiesFormatVirtualNetworks>;
	}

	/** DDoS protection plan properties. */
	export interface DdosProtectionPlanPropertiesFormatFormProperties {

		/** The current provisioning state. */
		provisioningState: FormControl<DdosProtectionPlanPropertiesFormatProvisioningState | null | undefined>,

		/** The resource GUID property of the DDoS protection plan resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups. */
		resourceGuid: FormControl<string | null | undefined>,
	}
	export function CreateDdosProtectionPlanPropertiesFormatFormGroup() {
		return new FormGroup<DdosProtectionPlanPropertiesFormatFormProperties>({
			provisioningState: new FormControl<DdosProtectionPlanPropertiesFormatProvisioningState | null | undefined>(undefined),
			resourceGuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DdosProtectionPlanPropertiesFormatProvisioningState { Succeeded = 'Succeeded', Updating = 'Updating', Deleting = 'Deleting', Failed = 'Failed' }

	export interface DdosProtectionPlanPropertiesFormatVirtualNetworks {

		/** Resource ID. */
		id?: string | null;
	}
	export interface DdosProtectionPlanPropertiesFormatVirtualNetworksFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDdosProtectionPlanPropertiesFormatVirtualNetworksFormGroup() {
		return new FormGroup<DdosProtectionPlanPropertiesFormatVirtualNetworksFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets all DDoS protection plans in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network/ddosProtectionPlans
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {DdosProtectionPlanListResult} Request successful. The operation returns a list of DDoS protection plan resources.
		 */
		DdosProtectionPlans_List(api_version: string, subscriptionId: string): Observable<DdosProtectionPlanListResult> {
			return this.http.get<DdosProtectionPlanListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/ddosProtectionPlans?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all the DDoS protection plans in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosProtectionPlans
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {DdosProtectionPlanListResult} Request successful. The operation returns a list of DDoS protection plan resources.
		 */
		DdosProtectionPlans_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<DdosProtectionPlanListResult> {
			return this.http.get<DdosProtectionPlanListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/ddosProtectionPlans&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified DDoS protection plan.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosProtectionPlans/{ddosProtectionPlanName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ddosProtectionPlanName The name of the DDoS protection plan.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {DdosProtectionPlan} Request successful. The operation returns the specified DDoS protection plan resource.
		 */
		DdosProtectionPlans_Get(resourceGroupName: string, ddosProtectionPlanName: string, api_version: string, subscriptionId: string): Observable<DdosProtectionPlan> {
			return this.http.get<DdosProtectionPlan>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/ddosProtectionPlans/' + (ddosProtectionPlanName == null ? '' : encodeURIComponent(ddosProtectionPlanName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a DDoS protection plan.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosProtectionPlans/{ddosProtectionPlanName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ddosProtectionPlanName The name of the DDoS protection plan.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {DdosProtectionPlan} requestBody Parameters supplied to the create or update operation.
		 * @return {DdosProtectionPlan} Update successful. The operation returns the resulting DDoS protection plan resource.
		 */
		DdosProtectionPlans_CreateOrUpdate(resourceGroupName: string, ddosProtectionPlanName: string, api_version: string, subscriptionId: string, requestBody: DdosProtectionPlan): Observable<DdosProtectionPlan> {
			return this.http.put<DdosProtectionPlan>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/ddosProtectionPlans/' + (ddosProtectionPlanName == null ? '' : encodeURIComponent(ddosProtectionPlanName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified DDoS protection plan.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosProtectionPlans/{ddosProtectionPlanName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ddosProtectionPlanName The name of the DDoS protection plan.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Delete successful.
		 */
		DdosProtectionPlans_Delete(resourceGroupName: string, ddosProtectionPlanName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/ddosProtectionPlans/' + (ddosProtectionPlanName == null ? '' : encodeURIComponent(ddosProtectionPlanName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a DDoS protection plan tags.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosProtectionPlans/{ddosProtectionPlanName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ddosProtectionPlanName The name of the DDoS protection plan.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {any} requestBody Parameters supplied to the update DDoS protection plan resource tags.
		 * @return {DdosProtectionPlan} Update successful. The operation returns the resulting DDoS protection plan resource.
		 */
		DdosProtectionPlans_UpdateTags(resourceGroupName: string, ddosProtectionPlanName: string, api_version: string, subscriptionId: string, requestBody: any): Observable<DdosProtectionPlan> {
			return this.http.patch<DdosProtectionPlan>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/ddosProtectionPlans/' + (ddosProtectionPlanName == null ? '' : encodeURIComponent(ddosProtectionPlanName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

