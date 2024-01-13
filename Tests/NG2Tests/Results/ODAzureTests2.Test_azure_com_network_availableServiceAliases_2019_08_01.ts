import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The available service alias. */
	export interface AvailableServiceAlias {

		/** The ID of the service alias. */
		id?: string | null;

		/** The name of the service alias. */
		name?: string | null;

		/** The resource name of the service alias. */
		resourceName?: string | null;

		/** The type of the resource. */
		type?: string | null;
	}

	/** The available service alias. */
	export interface AvailableServiceAliasFormProperties {

		/** The ID of the service alias. */
		id: FormControl<string | null | undefined>,

		/** The name of the service alias. */
		name: FormControl<string | null | undefined>,

		/** The resource name of the service alias. */
		resourceName: FormControl<string | null | undefined>,

		/** The type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAvailableServiceAliasFormGroup() {
		return new FormGroup<AvailableServiceAliasFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An array of available service aliases. */
	export interface AvailableServiceAliasesResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** An array of available service aliases. */
		value?: Array<AvailableServiceAlias>;
	}

	/** An array of available service aliases. */
	export interface AvailableServiceAliasesResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAvailableServiceAliasesResultFormGroup() {
		return new FormGroup<AvailableServiceAliasesResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets all available service aliases for this subscription in this region.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/availableServiceAliases
		 * @param {string} location The location.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @return {AvailableServiceAliasesResult} Request successful. Returns all available service aliases for the subscription in the region.
		 */
		AvailableServiceAliases_List(location: string, subscriptionId: string, api_version: string): Observable<AvailableServiceAliasesResult> {
			return this.http.get<AvailableServiceAliasesResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/availableServiceAliases&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all available service aliases for this resource group in this region.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/locations/{location}/availableServiceAliases
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} location The location.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @return {AvailableServiceAliasesResult} Request successful. Returns all available service aliases for the resource group in the region.
		 */
		AvailableServiceAliases_ListByResourceGroup(resourceGroupName: string, location: string, subscriptionId: string, api_version: string): Observable<AvailableServiceAliasesResult> {
			return this.http.get<AvailableServiceAliasesResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/availableServiceAliases&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

