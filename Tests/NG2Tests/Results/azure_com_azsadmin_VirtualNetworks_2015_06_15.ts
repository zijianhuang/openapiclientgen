import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** This represents a virtual network. */
	export interface VirtualNetwork {

		/** Properties of a virtual network. */
		properties?: VirtualNetworkProperties;
	}

	/** This represents a virtual network. */
	export interface VirtualNetworkFormProperties {
	}
	export function CreateVirtualNetworkFormGroup() {
		return new FormGroup<VirtualNetworkFormProperties>({
		});

	}


	/** Properties of a virtual network. */
	export interface VirtualNetworkProperties {

		/** The virtual network configuration state. */
		configurationState?: VirtualNetworkConfigurationState;
	}

	/** Properties of a virtual network. */
	export interface VirtualNetworkPropertiesFormProperties {
	}
	export function CreateVirtualNetworkPropertiesFormGroup() {
		return new FormGroup<VirtualNetworkPropertiesFormProperties>({
		});

	}


	/** The virtual network configuration state. */
	export interface VirtualNetworkConfigurationState {

		/** List of NIC errors associated with the resource. */
		hostErrors?: Array<VirtualNetworkConfigurationStatus>;

		/** Last updated time for the running state. */
		lastUpdatedTime?: Date | null;

		/** The virtual network status. */
		status?: VirtualNetworkConfigurationStatusStatus | null;

		/** List of NIC errors associated with the resource. */
		virtualNetworkInterfaceErrors?: Array<VirtualNetworkConfigurationStatus>;
	}

	/** The virtual network configuration state. */
	export interface VirtualNetworkConfigurationStateFormProperties {

		/** Last updated time for the running state. */
		lastUpdatedTime: FormControl<Date | null | undefined>,

		/** The virtual network status. */
		status: FormControl<VirtualNetworkConfigurationStatusStatus | null | undefined>,
	}
	export function CreateVirtualNetworkConfigurationStateFormGroup() {
		return new FormGroup<VirtualNetworkConfigurationStateFormProperties>({
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<VirtualNetworkConfigurationStatusStatus | null | undefined>(undefined),
		});

	}


	/** Virtual network configuration status. */
	export interface VirtualNetworkConfigurationStatus {

		/** Last updated time for the configuration status. */
		lastUpdatedTime?: Date | null;

		/** The virtual network configuration status. */
		status?: VirtualNetworkConfigurationStatusStatus | null;
	}

	/** Virtual network configuration status. */
	export interface VirtualNetworkConfigurationStatusFormProperties {

		/** Last updated time for the configuration status. */
		lastUpdatedTime: FormControl<Date | null | undefined>,

		/** The virtual network configuration status. */
		status: FormControl<VirtualNetworkConfigurationStatusStatus | null | undefined>,
	}
	export function CreateVirtualNetworkConfigurationStatusFormGroup() {
		return new FormGroup<VirtualNetworkConfigurationStatusFormProperties>({
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<VirtualNetworkConfigurationStatusStatus | null | undefined>(undefined),
		});

	}

	export enum VirtualNetworkConfigurationStatusStatus { Failure = 'Failure', Warning = 'Warning', Success = 'Success', Uninitialized = 'Uninitialized', InProgress = 'InProgress', Unknown = 'Unknown' }


	/** Pageable list of virtual networks. */
	export interface VirtualNetworksList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of virtual networks for this page. */
		value?: Array<VirtualNetwork>;
	}

	/** Pageable list of virtual networks. */
	export interface VirtualNetworksListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateVirtualNetworksListFormGroup() {
		return new FormGroup<VirtualNetworksListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get a list of all virtual networks.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network.Admin/adminVirtualNetworks
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @param {string} orderBy OData orderBy parameter.
		 * @param {string} top OData top parameter.
		 * @param {string} skip OData skip parameter.
		 * @param {string} inlineCount OData inline count parameter.
		 * @return {VirtualNetworksList} OK
		 */
		VirtualNetworks_List(subscriptionId: string, api_version: string, filter: string | null | undefined, orderBy: string | null | undefined, top: string | null | undefined, skip: string | null | undefined, inlineCount: string | null | undefined): Observable<VirtualNetworksList> {
			return this.http.get<VirtualNetworksList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network.Admin/adminVirtualNetworks&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&top=' + (top == null ? '' : encodeURIComponent(top)) + '&skip=' + (skip == null ? '' : encodeURIComponent(skip)) + '&inlineCount=' + (inlineCount == null ? '' : encodeURIComponent(inlineCount)), {});
		}
	}

}

