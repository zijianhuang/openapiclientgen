import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** ARM resource. */
	export interface Resource {

		/** Resource ID. */
		id?: string | null;

		/** Resource name. */
		name?: string | null;

		/** Resource type. */
		type?: string | null;
	}

	/** ARM resource. */
	export interface ResourceFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ARM tracked top level resource. */
	export interface TrackedResource {

		/**
		 * Resource location.
		 * Required
		 */
		location: string;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** ARM tracked top level resource. */
	export interface TrackedResourceFormProperties {

		/**
		 * Resource location.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTrackedResourceFormGroup() {
		return new FormGroup<TrackedResourceFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** An Azure SQL virtual cluster. */
	export interface VirtualCluster {

		/** The properties of a virtual cluster. */
		properties?: VirtualClusterProperties;
	}

	/** An Azure SQL virtual cluster. */
	export interface VirtualClusterFormProperties {
	}
	export function CreateVirtualClusterFormGroup() {
		return new FormGroup<VirtualClusterFormProperties>({
		});

	}


	/** The properties of a virtual cluster. */
	export interface VirtualClusterProperties {

		/** List of resources in this virtual cluster. */
		childResources?: Array<string>;

		/** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
		family?: string | null;

		/** Subnet resource ID for the virtual cluster. */
		subnetId?: string | null;
	}

	/** The properties of a virtual cluster. */
	export interface VirtualClusterPropertiesFormProperties {

		/** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
		family: FormControl<string | null | undefined>,

		/** Subnet resource ID for the virtual cluster. */
		subnetId: FormControl<string | null | undefined>,
	}
	export function CreateVirtualClusterPropertiesFormGroup() {
		return new FormGroup<VirtualClusterPropertiesFormProperties>({
			family: new FormControl<string | null | undefined>(undefined),
			subnetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of virtual clusters. */
	export interface VirtualClusterListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<VirtualCluster>;
	}

	/** A list of virtual clusters. */
	export interface VirtualClusterListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateVirtualClusterListResultFormGroup() {
		return new FormGroup<VirtualClusterListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An update request for an Azure SQL Database virtual cluster. */
	export interface VirtualClusterUpdate {

		/** The properties of a virtual cluster. */
		properties?: VirtualClusterProperties;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** An update request for an Azure SQL Database virtual cluster. */
	export interface VirtualClusterUpdateFormProperties {

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateVirtualClusterUpdateFormGroup() {
		return new FormGroup<VirtualClusterUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of all virtualClusters in the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Sql/virtualClusters
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {VirtualClusterListResult} Successfully retrieved the list of virtual clusters.
		 */
		VirtualClusters_List(subscriptionId: string, api_version: string): Observable<VirtualClusterListResult> {
			return this.http.get<VirtualClusterListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Sql/virtualClusters&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of virtual clusters in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/virtualClusters
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {VirtualClusterListResult} Successfully retrieved the list of virtual clusters.
		 */
		VirtualClusters_ListByResourceGroup(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<VirtualClusterListResult> {
			return this.http.get<VirtualClusterListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/virtualClusters&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a virtual cluster.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/virtualClusters/{virtualClusterName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} virtualClusterName The name of the virtual cluster.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {VirtualCluster} Successfully retrieved the specified virtual cluster.
		 */
		VirtualClusters_Get(resourceGroupName: string, virtualClusterName: string, subscriptionId: string, api_version: string): Observable<VirtualCluster> {
			return this.http.get<VirtualCluster>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/virtualClusters/' + (virtualClusterName == null ? '' : encodeURIComponent(virtualClusterName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a virtual cluster.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/virtualClusters/{virtualClusterName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} virtualClusterName The name of the virtual cluster.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the virtual cluster.
		 */
		VirtualClusters_Delete(resourceGroupName: string, virtualClusterName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/virtualClusters/' + (virtualClusterName == null ? '' : encodeURIComponent(virtualClusterName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a virtual cluster.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/virtualClusters/{virtualClusterName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} virtualClusterName The name of the virtual cluster.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {VirtualClusterUpdate} requestBody The requested managed instance resource state.
		 * @return {VirtualCluster} Successfully updated the virtual cluster.
		 */
		VirtualClusters_Update(resourceGroupName: string, virtualClusterName: string, subscriptionId: string, api_version: string, requestBody: VirtualClusterUpdate): Observable<VirtualCluster> {
			return this.http.patch<VirtualCluster>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/virtualClusters/' + (virtualClusterName == null ? '' : encodeURIComponent(virtualClusterName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

