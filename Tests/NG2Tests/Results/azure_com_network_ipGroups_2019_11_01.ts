import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface IpGroup {
	}
	export interface IpGroupFormProperties {
	}
	export function CreateIpGroupFormGroup() {
		return new FormGroup<IpGroupFormProperties>({
		});

	}


	/** Response for the ListIpGroups API service call. */
	export interface IpGroupListResult {

		/** URL to get the next set of results. */
		nextLink?: string | null;

		/** The list of IpGroups information resources. */
		value?: Array<IpGroup>;
	}

	/** Response for the ListIpGroups API service call. */
	export interface IpGroupListResultFormProperties {

		/** URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateIpGroupListResultFormGroup() {
		return new FormGroup<IpGroupListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The IpGroups property information. */
	export interface IpGroupPropertiesFormat {

		/** List of references to Azure resources that this IpGroups is associated with. */
		IpGroupPropertiesFormatFirewalls?: Array<IpGroupPropertiesFormatFirewalls>;

		/** IpAddresses/IpAddressPrefixes in the IpGroups resource. */
		ipAddresses?: Array<string>;

		/** The current provisioning state. */
		provisioningState?: IpGroupPropertiesFormatProvisioningState | null;
	}

	/** The IpGroups property information. */
	export interface IpGroupPropertiesFormatFormProperties {

		/** The current provisioning state. */
		provisioningState: FormControl<IpGroupPropertiesFormatProvisioningState | null | undefined>,
	}
	export function CreateIpGroupPropertiesFormatFormGroup() {
		return new FormGroup<IpGroupPropertiesFormatFormProperties>({
			provisioningState: new FormControl<IpGroupPropertiesFormatProvisioningState | null | undefined>(undefined),
		});

	}

	export interface IpGroupPropertiesFormatFirewalls {

		/** Resource ID. */
		id?: string | null;
	}
	export interface IpGroupPropertiesFormatFirewallsFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateIpGroupPropertiesFormatFirewallsFormGroup() {
		return new FormGroup<IpGroupPropertiesFormatFirewallsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IpGroupPropertiesFormatProvisioningState { Succeeded = 0, Updating = 1, Deleting = 2, Failed = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets all IpGroups in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network/ipGroups
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {IpGroupListResult} Request successful. The operation returns a list of ipGroups resources.
		 */
		IpGroups_List(api_version: string, subscriptionId: string): Observable<IpGroupListResult> {
			return this.http.get<IpGroupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/ipGroups?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all IpGroups in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ipGroups
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {IpGroupListResult} Request successful. The operation returns a list of ipGroups resources.
		 */
		IpGroups_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<IpGroupListResult> {
			return this.http.get<IpGroupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/ipGroups&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified ipGroups.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ipGroups/{ipGroupsName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ipGroupsName The name of the ipGroups.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} expand Expands resourceIds (of Firewalls/Network Security Groups etc.) back referenced by the IpGroups resource.
		 * @return {IpGroup} Request successful. The operation returns the resulting IpGroups resource.
		 */
		IpGroups_Get(resourceGroupName: string, ipGroupsName: string, api_version: string, subscriptionId: string, expand: string | null | undefined): Observable<IpGroup> {
			return this.http.get<IpGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/ipGroups/' + (ipGroupsName == null ? '' : encodeURIComponent(ipGroupsName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), {});
		}

		/**
		 * Creates or updates an ipGroups in a specified resource group.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ipGroups/{ipGroupsName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ipGroupsName The name of the ipGroups.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {IpGroup} requestBody Parameters supplied to the create or update IpGroups operation.
		 * @return {IpGroup} Request successful. The operation returns the resulting ipGroups resource.
		 */
		IpGroups_CreateOrUpdate(resourceGroupName: string, ipGroupsName: string, api_version: string, subscriptionId: string, requestBody: IpGroup): Observable<IpGroup> {
			return this.http.put<IpGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/ipGroups/' + (ipGroupsName == null ? '' : encodeURIComponent(ipGroupsName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified ipGroups.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ipGroups/{ipGroupsName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ipGroupsName The name of the ipGroups.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Delete successful.
		 */
		IpGroups_Delete(resourceGroupName: string, ipGroupsName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/ipGroups/' + (ipGroupsName == null ? '' : encodeURIComponent(ipGroupsName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates tags of an IpGroups resource.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ipGroups/{ipGroupsName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} ipGroupsName The name of the ipGroups.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {any} requestBody Parameters supplied to the update ipGroups operation.
		 * @return {IpGroup} Request successful. The operation returns the resulting ipGroups resource.
		 */
		IpGroups_UpdateGroups(resourceGroupName: string, ipGroupsName: string, api_version: string, subscriptionId: string, requestBody: any): Observable<IpGroup> {
			return this.http.patch<IpGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/ipGroups/' + (ipGroupsName == null ? '' : encodeURIComponent(ipGroupsName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

