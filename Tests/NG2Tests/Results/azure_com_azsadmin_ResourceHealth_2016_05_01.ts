import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ResourceHealth {
	}
	export interface ResourceHealthFormProperties {
	}
	export function CreateResourceHealthFormGroup() {
		return new FormGroup<ResourceHealthFormProperties>({
		});

	}


	/** Pageable list of resource health objects. */
	export interface ResourceHealthList {

		/** URI to next page. */
		nextLink?: string | null;

		/** List of resource health objects. */
		value?: Array<ResourceHealth>;
	}

	/** Pageable list of resource health objects. */
	export interface ResourceHealthListFormProperties {

		/** URI to next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateResourceHealthListFormGroup() {
		return new FormGroup<ResourceHealthListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceHealthModel {
	}
	export interface ResourceHealthModelFormProperties {
	}
	export function CreateResourceHealthModelFormGroup() {
		return new FormGroup<ResourceHealthModelFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of each resource's health under a service.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.InfrastructureInsights.Admin/regionHealths/{location}/serviceHealths/{serviceRegistrationId}/resourceHealths
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} location Name of the region
		 * @param {string} serviceRegistrationId Service registration ID.
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @return {ResourceHealthList} OK
		 */
		ResourceHealths_List(subscriptionId: string, resourceGroupName: string, location: string, serviceRegistrationId: string, api_version: string, filter: string | null | undefined): Observable<ResourceHealthList> {
			return this.http.get<ResourceHealthList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.InfrastructureInsights.Admin/regionHealths/' + (location == null ? '' : encodeURIComponent(location)) + '/serviceHealths/' + (serviceRegistrationId == null ? '' : encodeURIComponent(serviceRegistrationId)) + '/resourceHealths&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Returns the requested health information about a resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.InfrastructureInsights.Admin/regionHealths/{location}/serviceHealths/{serviceRegistrationId}/resourceHealths/{resourceRegistrationId}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} location Name of the region
		 * @param {string} serviceRegistrationId Service registration ID.
		 * @param {string} resourceRegistrationId Resource registration ID.
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @return {ResourceHealth} OK
		 */
		ResourceHealths_Get(subscriptionId: string, resourceGroupName: string, location: string, serviceRegistrationId: string, resourceRegistrationId: string, api_version: string, filter: string | null | undefined): Observable<ResourceHealth> {
			return this.http.get<ResourceHealth>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.InfrastructureInsights.Admin/regionHealths/' + (location == null ? '' : encodeURIComponent(location)) + '/serviceHealths/' + (serviceRegistrationId == null ? '' : encodeURIComponent(serviceRegistrationId)) + '/resourceHealths/' + (resourceRegistrationId == null ? '' : encodeURIComponent(resourceRegistrationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}
	}

}

