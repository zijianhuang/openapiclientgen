import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface TopologyList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;
		value?: Array<TopologyResource>;
	}
	export interface TopologyListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateTopologyListFormGroup() {
		return new FormGroup<TopologyListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TopologyResource {
		properties?: TopologyResourceProperties;
	}
	export interface TopologyResourceFormProperties {
	}
	export function CreateTopologyResourceFormGroup() {
		return new FormGroup<TopologyResourceFormProperties>({
		});

	}

	export interface TopologyResourceProperties {

		/** The UTC time on which the topology was calculated */
		calculatedDateTime?: Date | null;

		/** Azure resources which are part of this topology resource */
		topologyResources?: Array<TopologySingleResource>;
	}
	export interface TopologyResourcePropertiesFormProperties {

		/** The UTC time on which the topology was calculated */
		calculatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateTopologyResourcePropertiesFormGroup() {
		return new FormGroup<TopologyResourcePropertiesFormProperties>({
			calculatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface TopologySingleResource {

		/** Azure resources connected to this resource which are in lower level in the topology view */
		children?: Array<TopologySingleResourceChild>;

		/** The location of this resource */
		location?: string | null;

		/** Indicates the resource connectivity level to the Internet (InternetFacing, Internal ,etc.) */
		networkZones?: string | null;

		/** Azure resources connected to this resource which are in higher level in the topology view */
		parents?: Array<TopologySingleResourceParent>;

		/** Indicates if the resource has security recommendations */
		recommendationsExist?: boolean | null;

		/** Azure resource id */
		resourceId?: string | null;

		/** The security severity of the resource */
		severity?: string | null;

		/**
		 * Score of the resource based on its security severity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		topologyScore?: number | null;
	}
	export interface TopologySingleResourceFormProperties {

		/** The location of this resource */
		location: FormControl<string | null | undefined>,

		/** Indicates the resource connectivity level to the Internet (InternetFacing, Internal ,etc.) */
		networkZones: FormControl<string | null | undefined>,

		/** Indicates if the resource has security recommendations */
		recommendationsExist: FormControl<boolean | null | undefined>,

		/** Azure resource id */
		resourceId: FormControl<string | null | undefined>,

		/** The security severity of the resource */
		severity: FormControl<string | null | undefined>,

		/**
		 * Score of the resource based on its security severity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		topologyScore: FormControl<number | null | undefined>,
	}
	export function CreateTopologySingleResourceFormGroup() {
		return new FormGroup<TopologySingleResourceFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			networkZones: new FormControl<string | null | undefined>(undefined),
			recommendationsExist: new FormControl<boolean | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
			topologyScore: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TopologySingleResourceChild {

		/** Azure resource id which serves as child resource in topology view */
		resourceId?: string | null;
	}
	export interface TopologySingleResourceChildFormProperties {

		/** Azure resource id which serves as child resource in topology view */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateTopologySingleResourceChildFormGroup() {
		return new FormGroup<TopologySingleResourceChildFormProperties>({
			resourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TopologySingleResourceParent {

		/** Azure resource id which serves as parent resource in topology view */
		resourceId?: string | null;
	}
	export interface TopologySingleResourceParentFormProperties {

		/** Azure resource id which serves as parent resource in topology view */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateTopologySingleResourceParentFormGroup() {
		return new FormGroup<TopologySingleResourceParentFormProperties>({
			resourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list that allows to build a topology view of a subscription and location.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/topologies
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} ascLocation The location where ASC stores the data of the subscription. can be retrieved from Get locations
		 * @param {string} api_version API version for the operation
		 * @return {TopologyList} OK
		 */
		Topology_ListByHomeRegion(subscriptionId: string, ascLocation: string, api_version: string): Observable<TopologyList> {
			return this.http.get<TopologyList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/locations/' + (ascLocation == null ? '' : encodeURIComponent(ascLocation)) + '/topologies&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list that allows to build a topology view of a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/topologies
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} api_version API version for the operation
		 * @return {TopologyList} OK
		 */
		Topology_List(subscriptionId: string, api_version: string): Observable<TopologyList> {
			return this.http.get<TopologyList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/topologies&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a specific topology component.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/topologies/{topologyResourceName}
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} ascLocation The location where ASC stores the data of the subscription. can be retrieved from Get locations
		 * @param {string} topologyResourceName Name of a topology resources collection.
		 * @param {string} api_version API version for the operation
		 * @return {TopologyResource} OK
		 */
		Topology_Get(subscriptionId: string, resourceGroupName: string, ascLocation: string, topologyResourceName: string, api_version: string): Observable<TopologyResource> {
			return this.http.get<TopologyResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Security/locations/' + (ascLocation == null ? '' : encodeURIComponent(ascLocation)) + '/topologies/' + (topologyResourceName == null ? '' : encodeURIComponent(topologyResourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

