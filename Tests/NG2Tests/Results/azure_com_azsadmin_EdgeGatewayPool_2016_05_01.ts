import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** This object represents an edge gateway pool, which contains a list of gateways. */
	export interface EdgeGatewayPool {

		/** An object that contains the properties of an edge gateway pool. */
		properties?: EdgeGatewayPoolModel;
	}

	/** This object represents an edge gateway pool, which contains a list of gateways. */
	export interface EdgeGatewayPoolFormProperties {
	}
	export function CreateEdgeGatewayPoolFormGroup() {
		return new FormGroup<EdgeGatewayPoolFormProperties>({
		});

	}


	/** An object that contains the properties of an edge gateway pool. */
	export interface EdgeGatewayPoolModel {

		/** List of the edge gateways in the pool. */
		edgeGateways?: Array<string>;

		/**
		 * Gateway capacity in kilobits per second.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gatewayCapacityKiloBitsPerSecond?: number | null;

		/** The gateway type, for example, S2sIPsec, S2sGre, and so on. */
		gatewayType?: string | null;

		/** The GRE VIP subnet. */
		greVipSubnet?: string | null;

		/**
		 * The number of gateways in the pool.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfGateways?: number | null;

		/** The public IP address. */
		publicIpAddress?: string | null;

		/**
		 * The number of redundant gateways.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		redundantGatewayCount?: string | null;
	}

	/** An object that contains the properties of an edge gateway pool. */
	export interface EdgeGatewayPoolModelFormProperties {

		/**
		 * Gateway capacity in kilobits per second.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gatewayCapacityKiloBitsPerSecond: FormControl<number | null | undefined>,

		/** The gateway type, for example, S2sIPsec, S2sGre, and so on. */
		gatewayType: FormControl<string | null | undefined>,

		/** The GRE VIP subnet. */
		greVipSubnet: FormControl<string | null | undefined>,

		/**
		 * The number of gateways in the pool.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfGateways: FormControl<number | null | undefined>,

		/** The public IP address. */
		publicIpAddress: FormControl<string | null | undefined>,

		/**
		 * The number of redundant gateways.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		redundantGatewayCount: FormControl<string | null | undefined>,
	}
	export function CreateEdgeGatewayPoolModelFormGroup() {
		return new FormGroup<EdgeGatewayPoolModelFormProperties>({
			gatewayCapacityKiloBitsPerSecond: new FormControl<number | null | undefined>(undefined),
			gatewayType: new FormControl<string | null | undefined>(undefined),
			greVipSubnet: new FormControl<string | null | undefined>(undefined),
			numberOfGateways: new FormControl<number | null | undefined>(undefined),
			publicIpAddress: new FormControl<string | null | undefined>(undefined),
			redundantGatewayCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A pageable list of edge gateway pools objects. */
	export interface EdgeGatewayPoolList {

		/** The URI to the next page. */
		nextLink?: string | null;

		/** List of edge gateway pool objects. */
		value?: Array<EdgeGatewayPool>;
	}

	/** A pageable list of edge gateway pools objects. */
	export interface EdgeGatewayPoolListFormProperties {

		/** The URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateEdgeGatewayPoolListFormGroup() {
		return new FormGroup<EdgeGatewayPoolListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of all edge gateway pool objects at a location.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/edgeGatewayPools
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @return {EdgeGatewayPoolList} OK
		 */
		EdgeGatewayPools_List(subscriptionId: string, resourceGroupName: string, location: string, api_version: string, filter: string | null | undefined): Observable<EdgeGatewayPoolList> {
			return this.http.get<EdgeGatewayPoolList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/edgeGatewayPools&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Returns the requested edge gateway pool object.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/edgeGatewayPools/{edgeGatewayPool}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} edgeGatewayPool Name of the edge gateway pool.
		 * @param {string} api_version Client API Version.
		 * @return {EdgeGatewayPool} OK
		 */
		EdgeGatewayPools_Get(subscriptionId: string, resourceGroupName: string, location: string, edgeGatewayPool: string, api_version: string): Observable<EdgeGatewayPool> {
			return this.http.get<EdgeGatewayPool>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/edgeGatewayPools/' + (edgeGatewayPool == null ? '' : encodeURIComponent(edgeGatewayPool)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

