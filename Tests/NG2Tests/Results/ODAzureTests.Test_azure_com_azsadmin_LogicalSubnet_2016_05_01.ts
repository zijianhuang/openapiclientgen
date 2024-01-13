import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** This resource represents a logical subnet.  A logical subnet is made of a subnet-vlan pair. */
	export interface LogicalSubnet {

		/** Properties of a logical subnet. */
		properties?: LogicalSubnetModel;
	}

	/** This resource represents a logical subnet.  A logical subnet is made of a subnet-vlan pair. */
	export interface LogicalSubnetFormProperties {
	}
	export function CreateLogicalSubnetFormGroup() {
		return new FormGroup<LogicalSubnetFormProperties>({
		});

	}


	/** Properties of a logical subnet. */
	export interface LogicalSubnetModel {

		/** All IP pools which belong to this subnet. */
		ipPools?: Array<string>;

		/** The visibility status of the IP pool.  If is true the associated pools are public IP address pools. */
		isPublic?: boolean | null;

		/** Metadata related to the logical network. */
		metadata?: {[id: string]: string };
	}

	/** Properties of a logical subnet. */
	export interface LogicalSubnetModelFormProperties {

		/** The visibility status of the IP pool.  If is true the associated pools are public IP address pools. */
		isPublic: FormControl<boolean | null | undefined>,

		/** Metadata related to the logical network. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateLogicalSubnetModelFormGroup() {
		return new FormGroup<LogicalSubnetModelFormProperties>({
			isPublic: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Pageable list of logical subnets. */
	export interface LogicalSubnetList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of logical subnets. */
		value?: Array<LogicalSubnet>;
	}

	/** Pageable list of logical subnets. */
	export interface LogicalSubnetListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateLogicalSubnetListFormGroup() {
		return new FormGroup<LogicalSubnetListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of all logical subnets.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/logicalNetworks/{logicalNetwork}/logicalSubnets
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} logicalNetwork Name of the logical network.
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @return {LogicalSubnetList} OK
		 */
		LogicalSubnets_List(subscriptionId: string, resourceGroupName: string, location: string, logicalNetwork: string, api_version: string, filter: string | null | undefined): Observable<LogicalSubnetList> {
			return this.http.get<LogicalSubnetList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/logicalNetworks/' + (logicalNetwork == null ? '' : encodeURIComponent(logicalNetwork)) + '/logicalSubnets&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Returns the requested logical subnet.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/logicalNetworks/{logicalNetwork}/logicalSubnets/{logicalSubnet}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} logicalNetwork Name of the logical network.
		 * @param {string} logicalSubnet Name of the logical subnet.
		 * @param {string} api_version Client API Version.
		 * @return {LogicalSubnet} OK
		 */
		LogicalSubnets_Get(subscriptionId: string, resourceGroupName: string, location: string, logicalNetwork: string, logicalSubnet: string, api_version: string): Observable<LogicalSubnet> {
			return this.http.get<LogicalSubnet>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/logicalNetworks/' + (logicalNetwork == null ? '' : encodeURIComponent(logicalNetwork)) + '/logicalSubnets/' + (logicalSubnet == null ? '' : encodeURIComponent(logicalSubnet)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

