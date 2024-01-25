import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A private link resource */
	export interface PrivateLinkResource {

		/** Properties of a private link resource. */
		properties?: PrivateLinkResourceProperties;
	}

	/** A private link resource */
	export interface PrivateLinkResourceFormProperties {
	}
	export function CreatePrivateLinkResourceFormGroup() {
		return new FormGroup<PrivateLinkResourceFormProperties>({
		});

	}


	/** Properties of a private link resource. */
	export interface PrivateLinkResourceProperties {

		/** The private link resource group id. */
		groupId?: string | null;

		/** The private link resource required member names. */
		requiredMembers?: Array<string>;
	}

	/** Properties of a private link resource. */
	export interface PrivateLinkResourcePropertiesFormProperties {

		/** The private link resource group id. */
		groupId: FormControl<string | null | undefined>,
	}
	export function CreatePrivateLinkResourcePropertiesFormGroup() {
		return new FormGroup<PrivateLinkResourcePropertiesFormProperties>({
			groupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of private link resources */
	export interface PrivateLinkResourceListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<PrivateLinkResource>;
	}

	/** A list of private link resources */
	export interface PrivateLinkResourceListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePrivateLinkResourceListResultFormGroup() {
		return new FormGroup<PrivateLinkResourceListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ARM proxy resource. */
	export interface ProxyResource {
	}

	/** ARM proxy resource. */
	export interface ProxyResourceFormProperties {
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
		});

	}


	/** ARM resource. */
	export interface Resource {

		/** Resource ID. */
		id?: string | null;

		/** Resource name. */
		name?: string | null;

		/** Resource type. */
		type?: string | null;
	}

	/** ARM resource. */
	export interface ResourceFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the private link resources for SQL server.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/privateLinkResources
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {PrivateLinkResourceListResult} Successfully retrieved private link resources.
		 */
		PrivateLinkResources_ListByServer(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string): Observable<PrivateLinkResourceListResult> {
			return this.http.get<PrivateLinkResourceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/privateLinkResources&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a private link resource for SQL server.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/privateLinkResources/{groupName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} groupName The name of the private link resource.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {PrivateLinkResource} Successfully retrieved private link resources.
		 */
		PrivateLinkResources_Get(resourceGroupName: string, serverName: string, groupName: string, subscriptionId: string, api_version: string): Observable<PrivateLinkResource> {
			return this.http.get<PrivateLinkResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/privateLinkResources/' + (groupName == null ? '' : encodeURIComponent(groupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

