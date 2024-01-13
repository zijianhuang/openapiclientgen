import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** This resource represents a logical partition of physical network that is dedicated for a particular purpose.  A logical network comprises a collection of logical subnets. */
	export interface LogicalNetwork {

		/** Properties of a logical network. */
		properties?: LogicalNetworkModel;
	}

	/** This resource represents a logical partition of physical network that is dedicated for a particular purpose.  A logical network comprises a collection of logical subnets. */
	export interface LogicalNetworkFormProperties {
	}
	export function CreateLogicalNetworkFormGroup() {
		return new FormGroup<LogicalNetworkFormProperties>({
		});

	}


	/** Properties of a logical network. */
	export interface LogicalNetworkModel {

		/** Metadata related to the logical network. */
		metadata?: {[id: string]: string };

		/** Flag to indicate that the network virtualization is enabled on the logical network. */
		networkVirtualizationEnabled?: boolean | null;

		/** List of subnets belonging to the logical network. */
		subnets?: Array<string>;
	}

	/** Properties of a logical network. */
	export interface LogicalNetworkModelFormProperties {

		/** Metadata related to the logical network. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** Flag to indicate that the network virtualization is enabled on the logical network. */
		networkVirtualizationEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateLogicalNetworkModelFormGroup() {
		return new FormGroup<LogicalNetworkModelFormProperties>({
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			networkVirtualizationEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A pageable list of logical networks. */
	export interface LogicalNetworkList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of logical networks. */
		value?: Array<LogicalNetwork>;
	}

	/** A pageable list of logical networks. */
	export interface LogicalNetworkListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateLogicalNetworkListFormGroup() {
		return new FormGroup<LogicalNetworkListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of all logical networks at a location.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/logicalNetworks
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @return {LogicalNetworkList} OK
		 */
		LogicalNetworks_List(subscriptionId: string, resourceGroupName: string, location: string, api_version: string, filter: string | null | undefined): Observable<LogicalNetworkList> {
			return this.http.get<LogicalNetworkList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/logicalNetworks&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Returns the requested logical network.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/logicalNetworks/{logicalNetwork}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} logicalNetwork Name of the logical network.
		 * @param {string} api_version Client API Version.
		 * @return {LogicalNetwork} OK
		 */
		LogicalNetworks_Get(subscriptionId: string, resourceGroupName: string, location: string, logicalNetwork: string, api_version: string): Observable<LogicalNetwork> {
			return this.http.get<LogicalNetwork>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/logicalNetworks/' + (logicalNetwork == null ? '' : encodeURIComponent(logicalNetwork)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

