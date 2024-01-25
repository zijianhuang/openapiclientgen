import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BastionHost {
	}
	export interface BastionHostFormProperties {
	}
	export function CreateBastionHostFormGroup() {
		return new FormGroup<BastionHostFormProperties>({
		});

	}

	export interface BastionHostIPConfiguration {
	}
	export interface BastionHostIPConfigurationFormProperties {
	}
	export function CreateBastionHostIPConfigurationFormGroup() {
		return new FormGroup<BastionHostIPConfigurationFormProperties>({
		});

	}


	/** Properties of IP configuration of an Bastion Host. */
	export interface BastionHostIPConfigurationPropertiesFormat {

		/** IP address allocation method. */
		privateIPAllocationMethod?: BastionHostIPConfigurationPropertiesFormatPrivateIPAllocationMethod | null;

		/** The current provisioning state. */
		provisioningState?: BastionHostIPConfigurationPropertiesFormatProvisioningState | null;

		/**
		 * Reference to another subresource.
		 * Required
		 */
		publicIPAddress: any;

		/**
		 * Reference to another subresource.
		 * Required
		 */
		subnet: any;
	}

	/** Properties of IP configuration of an Bastion Host. */
	export interface BastionHostIPConfigurationPropertiesFormatFormProperties {

		/** IP address allocation method. */
		privateIPAllocationMethod: FormControl<BastionHostIPConfigurationPropertiesFormatPrivateIPAllocationMethod | null | undefined>,

		/** The current provisioning state. */
		provisioningState: FormControl<BastionHostIPConfigurationPropertiesFormatProvisioningState | null | undefined>,

		/**
		 * Reference to another subresource.
		 * Required
		 */
		publicIPAddress: FormControl<any | null | undefined>,

		/**
		 * Reference to another subresource.
		 * Required
		 */
		subnet: FormControl<any | null | undefined>,
	}
	export function CreateBastionHostIPConfigurationPropertiesFormatFormGroup() {
		return new FormGroup<BastionHostIPConfigurationPropertiesFormatFormProperties>({
			privateIPAllocationMethod: new FormControl<BastionHostIPConfigurationPropertiesFormatPrivateIPAllocationMethod | null | undefined>(undefined),
			provisioningState: new FormControl<BastionHostIPConfigurationPropertiesFormatProvisioningState | null | undefined>(undefined),
			publicIPAddress: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			subnet: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BastionHostIPConfigurationPropertiesFormatPrivateIPAllocationMethod { Static = 0, Dynamic = 1 }

	export enum BastionHostIPConfigurationPropertiesFormatProvisioningState { Succeeded = 0, Updating = 1, Deleting = 2, Failed = 3 }


	/** Response for ListBastionHosts API service call. */
	export interface BastionHostListResult {

		/** URL to get the next set of results. */
		nextLink?: string | null;

		/** List of Bastion Hosts in a resource group. */
		value?: Array<BastionHost>;
	}

	/** Response for ListBastionHosts API service call. */
	export interface BastionHostListResultFormProperties {

		/** URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateBastionHostListResultFormGroup() {
		return new FormGroup<BastionHostListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the Bastion Host. */
	export interface BastionHostPropertiesFormat {

		/** FQDN for the endpoint on which bastion host is accessible. */
		dnsName?: string | null;

		/** IP configuration of the Bastion Host resource. */
		ipConfigurations?: Array<BastionHostIPConfiguration>;

		/** The current provisioning state. */
		provisioningState?: BastionHostIPConfigurationPropertiesFormatProvisioningState | null;
	}

	/** Properties of the Bastion Host. */
	export interface BastionHostPropertiesFormatFormProperties {

		/** FQDN for the endpoint on which bastion host is accessible. */
		dnsName: FormControl<string | null | undefined>,

		/** The current provisioning state. */
		provisioningState: FormControl<BastionHostIPConfigurationPropertiesFormatProvisioningState | null | undefined>,
	}
	export function CreateBastionHostPropertiesFormatFormGroup() {
		return new FormGroup<BastionHostPropertiesFormatFormProperties>({
			dnsName: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<BastionHostIPConfigurationPropertiesFormatProvisioningState | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all Bastion Hosts in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network/bastionHosts
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {BastionHostListResult} Success. The operation returns a list of Bastion Host resources.
		 */
		BastionHosts_List(api_version: string, subscriptionId: string): Observable<BastionHostListResult> {
			return this.http.get<BastionHostListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/bastionHosts?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all Bastion Hosts in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/bastionHosts
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {BastionHostListResult} Success. The operation returns a list of BastionHost resources.
		 */
		BastionHosts_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<BastionHostListResult> {
			return this.http.get<BastionHostListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/bastionHosts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified Bastion Host.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/bastionHosts/{bastionHostName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} bastionHostName The name of the Bastion Host.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {BastionHost} Request successful. The operation returns an BastionHost resource.
		 */
		BastionHosts_Get(resourceGroupName: string, bastionHostName: string, api_version: string, subscriptionId: string): Observable<BastionHost> {
			return this.http.get<BastionHost>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/bastionHosts/' + (bastionHostName == null ? '' : encodeURIComponent(bastionHostName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates the specified Bastion Host.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/bastionHosts/{bastionHostName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} bastionHostName The name of the Bastion Host.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {BastionHost} requestBody Parameters supplied to the create or update Bastion Host operation.
		 * @return {BastionHost} Update successful. The operation returns the resulting Bastion Host resource.
		 */
		BastionHosts_CreateOrUpdate(resourceGroupName: string, bastionHostName: string, api_version: string, subscriptionId: string, requestBody: BastionHost): Observable<BastionHost> {
			return this.http.put<BastionHost>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/bastionHosts/' + (bastionHostName == null ? '' : encodeURIComponent(bastionHostName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified Bastion Host.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/bastionHosts/{bastionHostName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} bastionHostName The name of the Bastion Host.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Delete successful.
		 */
		BastionHosts_Delete(resourceGroupName: string, bastionHostName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/bastionHosts/' + (bastionHostName == null ? '' : encodeURIComponent(bastionHostName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

