import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** This resource represents an SLB MUX (software load balancing multiplexer, which distributes the tenant and tenant customer network traffic). */
	export interface SlbMuxInstance {

		/** Properties of a SLB MUX. */
		properties?: SlbMuxInstanceModel;
	}

	/** This resource represents an SLB MUX (software load balancing multiplexer, which distributes the tenant and tenant customer network traffic). */
	export interface SlbMuxInstanceFormProperties {
	}
	export function CreateSlbMuxInstanceFormGroup() {
		return new FormGroup<SlbMuxInstanceFormProperties>({
		});

	}


	/** Properties of a SLB MUX. */
	export interface SlbMuxInstanceModel {

		/** List of BGP peers. */
		bgpPeers?: Array<string>;

		/** Configuration state. */
		configurationState?: string | null;

		/** Virtual server. */
		virtualServer?: string | null;
	}

	/** Properties of a SLB MUX. */
	export interface SlbMuxInstanceModelFormProperties {

		/** Configuration state. */
		configurationState: FormControl<string | null | undefined>,

		/** Virtual server. */
		virtualServer: FormControl<string | null | undefined>,
	}
	export function CreateSlbMuxInstanceModelFormGroup() {
		return new FormGroup<SlbMuxInstanceModelFormProperties>({
			configurationState: new FormControl<string | null | undefined>(undefined),
			virtualServer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A pageable list of SLB MUX instances. */
	export interface SlbMuxInstanceList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of SLB MUX instances. */
		value?: Array<SlbMuxInstance>;
	}

	/** A pageable list of SLB MUX instances. */
	export interface SlbMuxInstanceListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSlbMuxInstanceListFormGroup() {
		return new FormGroup<SlbMuxInstanceListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of all software load balancer instances at a location.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/slbMuxInstances
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @return {SlbMuxInstanceList} OK
		 */
		SlbMuxInstances_List(subscriptionId: string, resourceGroupName: string, location: string, api_version: string, filter: string | null | undefined): Observable<SlbMuxInstanceList> {
			return this.http.get<SlbMuxInstanceList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/slbMuxInstances&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Returns the requested software load balancer multiplexer instance.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/slbMuxInstances/{slbMuxInstance}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} slbMuxInstance Name of a SLB MUX instance.
		 * @param {string} api_version Client API Version.
		 * @return {SlbMuxInstance} OK
		 */
		SlbMuxInstances_Get(subscriptionId: string, resourceGroupName: string, location: string, slbMuxInstance: string, api_version: string): Observable<SlbMuxInstance> {
			return this.http.get<SlbMuxInstance>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/slbMuxInstances/' + (slbMuxInstance == null ? '' : encodeURIComponent(slbMuxInstance)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

