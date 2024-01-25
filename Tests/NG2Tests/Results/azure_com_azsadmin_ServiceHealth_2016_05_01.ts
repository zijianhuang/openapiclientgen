import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Holds information about the health of a service. */
	export interface ServiceHealth {

		/** Holds information about the health of a service. */
		properties?: ServiceHealthModel;
	}

	/** Holds information about the health of a service. */
	export interface ServiceHealthFormProperties {
	}
	export function CreateServiceHealthFormGroup() {
		return new FormGroup<ServiceHealthFormProperties>({
		});

	}


	/** Pageable list of service health objects. */
	export interface ServiceHealthList {

		/** URI of the next page. */
		nextLink?: string | null;

		/** List of service health objects. */
		value?: Array<ServiceHealth>;
	}

	/** Pageable list of service health objects. */
	export interface ServiceHealthListFormProperties {

		/** URI of the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateServiceHealthListFormGroup() {
		return new FormGroup<ServiceHealthListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceHealthModel {
	}
	export interface ServiceHealthModelFormProperties {
	}
	export function CreateServiceHealthModelFormGroup() {
		return new FormGroup<ServiceHealthModelFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the list of all resource provider health states.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.InfrastructureInsights.Admin/regionHealths/{location}/serviceHealths
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} location Name of the region
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @return {ServiceHealthList} OK
		 */
		ServiceHealths_List(subscriptionId: string, resourceGroupName: string, location: string, api_version: string, filter: string | null | undefined): Observable<ServiceHealthList> {
			return this.http.get<ServiceHealthList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.InfrastructureInsights.Admin/regionHealths/' + (location == null ? '' : encodeURIComponent(location)) + '/serviceHealths&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Returns the requested service health object.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.InfrastructureInsights.Admin/regionHealths/{location}/serviceHealths/{serviceHealth}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} location Name of the region
		 * @param {string} serviceHealth Service Health name.
		 * @param {string} api_version Client API Version.
		 * @return {ServiceHealth} OK
		 */
		ServiceHealths_Get(subscriptionId: string, resourceGroupName: string, location: string, serviceHealth: string, api_version: string): Observable<ServiceHealth> {
			return this.http.get<ServiceHealth>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.InfrastructureInsights.Admin/regionHealths/' + (location == null ? '' : encodeURIComponent(location)) + '/serviceHealths/' + (serviceHealth == null ? '' : encodeURIComponent(serviceHealth)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

