import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The serviceName of an AvailableDelegation indicates a possible delegation for a subnet. */
	export interface AvailableDelegation {

		/** Describes the actions permitted to the service upon delegation. */
		actions?: Array<string>;

		/** A unique identifier of the AvailableDelegation resource. */
		id?: string | null;

		/** The name of the AvailableDelegation resource. */
		name?: string | null;

		/** The name of the service and resource. */
		serviceName?: string | null;

		/** Resource type. */
		type?: string | null;
	}

	/** The serviceName of an AvailableDelegation indicates a possible delegation for a subnet. */
	export interface AvailableDelegationFormProperties {

		/** A unique identifier of the AvailableDelegation resource. */
		id: FormControl<string | null | undefined>,

		/** The name of the AvailableDelegation resource. */
		name: FormControl<string | null | undefined>,

		/** The name of the service and resource. */
		serviceName: FormControl<string | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAvailableDelegationFormGroup() {
		return new FormGroup<AvailableDelegationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An array of available delegations. */
	export interface AvailableDelegationsResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** An array of available delegations. */
		value?: Array<AvailableDelegation>;
	}

	/** An array of available delegations. */
	export interface AvailableDelegationsResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAvailableDelegationsResultFormGroup() {
		return new FormGroup<AvailableDelegationsResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets all of the available subnet delegations for this subscription in this region.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/availableDelegations
		 * @param {string} location The location of the subnet.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AvailableDelegationsResult} Request successful. Returns all of the possible delegations for a subnet in this subscription in the region.
		 */
		AvailableDelegations_List(location: string, api_version: string, subscriptionId: string): Observable<AvailableDelegationsResult> {
			return this.http.get<AvailableDelegationsResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/availableDelegations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all of the available subnet delegations for this resource group in this region.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/locations/{location}/availableDelegations
		 * @param {string} location The location of the domain name.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @return {AvailableDelegationsResult} Request successful. Returns all of the possible delegations for a subnet in this subscription in the region.
		 */
		AvailableResourceGroupDelegations_List(location: string, resourceGroupName: string, subscriptionId: string, api_version: string): Observable<AvailableDelegationsResult> {
			return this.http.get<AvailableDelegationsResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/availableDelegations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

