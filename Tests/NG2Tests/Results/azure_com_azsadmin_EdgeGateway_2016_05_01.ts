import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** This resource represents a gateway, which provides the configuration needed to provide gateway services to virtual networks. */
	export interface EdgeGateway {

		/** Object which holds information related to edge gateways. */
		properties?: EdgeGatewayModel;
	}

	/** This resource represents a gateway, which provides the configuration needed to provide gateway services to virtual networks. */
	export interface EdgeGatewayFormProperties {
	}
	export function CreateEdgeGatewayFormGroup() {
		return new FormGroup<EdgeGatewayFormProperties>({
		});

	}


	/** Object which holds information related to edge gateways. */
	export interface EdgeGatewayModel {

		/** The available network capacity. */
		availableCapacity?: number | null;

		/** The current number of connections. */
		numberOfConnections?: number | null;

		/** The current state of the edge gateway. */
		state?: string | null;

		/** The total network capacity. */
		totalCapacity?: number | null;
	}

	/** Object which holds information related to edge gateways. */
	export interface EdgeGatewayModelFormProperties {

		/** The available network capacity. */
		availableCapacity: FormControl<number | null | undefined>,

		/** The current number of connections. */
		numberOfConnections: FormControl<number | null | undefined>,

		/** The current state of the edge gateway. */
		state: FormControl<string | null | undefined>,

		/** The total network capacity. */
		totalCapacity: FormControl<number | null | undefined>,
	}
	export function CreateEdgeGatewayModelFormGroup() {
		return new FormGroup<EdgeGatewayModelFormProperties>({
			availableCapacity: new FormControl<number | null | undefined>(undefined),
			numberOfConnections: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			totalCapacity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Pageable list of edge gateways. */
	export interface EdgeGatewayList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of edge gateways. */
		value?: Array<EdgeGateway>;
	}

	/** Pageable list of edge gateways. */
	export interface EdgeGatewayListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateEdgeGatewayListFormGroup() {
		return new FormGroup<EdgeGatewayListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the list of all edge gateways at a certain location.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/edgeGateways
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @return {EdgeGatewayList} OK
		 */
		EdgeGateways_List(subscriptionId: string, resourceGroupName: string, location: string, api_version: string, filter: string | null | undefined): Observable<EdgeGatewayList> {
			return this.http.get<EdgeGatewayList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/edgeGateways&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Returns the requested edge gateway.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/edgeGateways/{edgeGateway}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} edgeGateway Name of the edge gateway.
		 * @param {string} api_version Client API Version.
		 * @return {EdgeGateway} OK
		 */
		EdgeGateways_Get(subscriptionId: string, resourceGroupName: string, location: string, edgeGateway: string, api_version: string): Observable<EdgeGateway> {
			return this.http.get<EdgeGateway>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/edgeGateways/' + (edgeGateway == null ? '' : encodeURIComponent(edgeGateway)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

