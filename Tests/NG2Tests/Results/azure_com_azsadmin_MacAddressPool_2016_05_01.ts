import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** This resource represents a MAC address pool.  The default MAC address pools are used if you set the MAC address type for a virtual machine to 'Static'.  If the virtual machine setting is 'Dynamic', the hypervisor assigns the MAC address. */
	export interface MacAddressPool {

		/** Properties of a MAC address pool. */
		properties?: MacAddressPoolModel;
	}

	/** This resource represents a MAC address pool.  The default MAC address pools are used if you set the MAC address type for a virtual machine to 'Static'.  If the virtual machine setting is 'Dynamic', the hypervisor assigns the MAC address. */
	export interface MacAddressPoolFormProperties {
	}
	export function CreateMacAddressPoolFormGroup() {
		return new FormGroup<MacAddressPoolFormProperties>({
		});

	}


	/** Properties of a MAC address pool. */
	export interface MacAddressPoolModel {

		/** Ending MAC address. */
		endMacAddress?: string | null;

		/** Metadata related to the MAC pool. */
		metadata?: {[id: string]: string };

		/**
		 * Number of MAC addresses allocated.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		numberOfAllocatedMacAddresses?: string | null;

		/**
		 * Number of MAC addresses available.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		numberOfAvailableMacAddresses?: string | null;

		/** Starting MAC address. */
		startMacAddress?: string | null;
	}

	/** Properties of a MAC address pool. */
	export interface MacAddressPoolModelFormProperties {

		/** Ending MAC address. */
		endMacAddress: FormControl<string | null | undefined>,

		/** Metadata related to the MAC pool. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Number of MAC addresses allocated.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		numberOfAllocatedMacAddresses: FormControl<string | null | undefined>,

		/**
		 * Number of MAC addresses available.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		numberOfAvailableMacAddresses: FormControl<string | null | undefined>,

		/** Starting MAC address. */
		startMacAddress: FormControl<string | null | undefined>,
	}
	export function CreateMacAddressPoolModelFormGroup() {
		return new FormGroup<MacAddressPoolModelFormProperties>({
			endMacAddress: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			numberOfAllocatedMacAddresses: new FormControl<string | null | undefined>(undefined),
			numberOfAvailableMacAddresses: new FormControl<string | null | undefined>(undefined),
			startMacAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A pageable list of MAC address pools. */
	export interface MacAddressPoolList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of MAC address pools. */
		value?: Array<MacAddressPool>;
	}

	/** A pageable list of MAC address pools. */
	export interface MacAddressPoolListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateMacAddressPoolListFormGroup() {
		return new FormGroup<MacAddressPoolListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of all MAC address pools at a location.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/macAddressPools
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @return {MacAddressPoolList} OK
		 */
		MacAddressPools_List(subscriptionId: string, resourceGroupName: string, location: string, api_version: string, filter: string | null | undefined): Observable<MacAddressPoolList> {
			return this.http.get<MacAddressPoolList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/macAddressPools&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Returns the requested MAC address pool.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/macAddressPools/{macAddressPool}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} macAddressPool Name of the MAC address pool.
		 * @param {string} api_version Client API Version.
		 * @return {MacAddressPool} OK
		 */
		MacAddressPools_Get(subscriptionId: string, resourceGroupName: string, location: string, macAddressPool: string, api_version: string): Observable<MacAddressPool> {
			return this.http.get<MacAddressPool>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/macAddressPools/' + (macAddressPool == null ? '' : encodeURIComponent(macAddressPool)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

