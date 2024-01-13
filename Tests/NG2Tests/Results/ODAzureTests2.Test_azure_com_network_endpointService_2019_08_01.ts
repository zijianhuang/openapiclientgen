import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface EndpointServiceResult {
	}
	export interface EndpointServiceResultFormProperties {
	}
	export function CreateEndpointServiceResultFormGroup() {
		return new FormGroup<EndpointServiceResultFormProperties>({
		});

	}


	/** Response for the ListAvailableEndpointServices API service call. */
	export interface EndpointServicesListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** List of available endpoint services in a region. */
		value?: Array<EndpointServiceResult>;
	}

	/** Response for the ListAvailableEndpointServices API service call. */
	export interface EndpointServicesListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateEndpointServicesListResultFormGroup() {
		return new FormGroup<EndpointServicesListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List what values of endpoint services are available for use.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/virtualNetworkAvailableEndpointServices
		 * @param {string} location The location to check available endpoint services.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {EndpointServicesListResult} Request successful. Returns list of available endpoint services.
		 */
		AvailableEndpointServices_List(location: string, api_version: string, subscriptionId: string): Observable<EndpointServicesListResult> {
			return this.http.get<EndpointServicesListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/virtualNetworkAvailableEndpointServices&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

