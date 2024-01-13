import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Representation of a load balancer. */
	export interface LoadBalancer {

		/** Properties of a load balancer. */
		properties?: LoadBalancerProperty;
	}

	/** Representation of a load balancer. */
	export interface LoadBalancerFormProperties {
	}
	export function CreateLoadBalancerFormGroup() {
		return new FormGroup<LoadBalancerFormProperties>({
		});

	}


	/** Properties of a load balancer. */
	export interface LoadBalancerProperty {

		/** List of public IP addresses. */
		publicIpAddresses?: Array<string>;
	}

	/** Properties of a load balancer. */
	export interface LoadBalancerPropertyFormProperties {
	}
	export function CreateLoadBalancerPropertyFormGroup() {
		return new FormGroup<LoadBalancerPropertyFormProperties>({
		});

	}


	/** Pageable list of load balancers. */
	export interface LoadBalancerList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of load balancers for this page. */
		value?: Array<LoadBalancer>;
	}

	/** Pageable list of load balancers. */
	export interface LoadBalancerListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateLoadBalancerListFormGroup() {
		return new FormGroup<LoadBalancerListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get a list of all load balancers.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network.Admin/adminLoadBalancers
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @param {string} orderBy OData orderBy parameter.
		 * @param {string} top OData top parameter.
		 * @param {string} skip OData skip parameter.
		 * @param {string} inlineCount OData inline count parameter.
		 * @return {LoadBalancerList} OK
		 */
		LoadBalancers_List(subscriptionId: string, api_version: string, filter: string | null | undefined, orderBy: string | null | undefined, top: string | null | undefined, skip: string | null | undefined, inlineCount: string | null | undefined): Observable<LoadBalancerList> {
			return this.http.get<LoadBalancerList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network.Admin/adminLoadBalancers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&top=' + (top == null ? '' : encodeURIComponent(top)) + '&skip=' + (skip == null ? '' : encodeURIComponent(skip)) + '&inlineCount=' + (inlineCount == null ? '' : encodeURIComponent(inlineCount)), {});
		}
	}

}

