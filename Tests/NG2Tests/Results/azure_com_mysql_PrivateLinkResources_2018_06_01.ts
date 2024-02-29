import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An error response from the Batch service. */
	export interface CloudError {

		/** The resource management error response. */
		error?: any;
	}

	/** An error response from the Batch service. */
	export interface CloudErrorFormProperties {

		/** The resource management error response. */
		error: FormControl<any | null | undefined>,
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
			error: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface ErrorResponse {
	}
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}


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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the private link resources for MySQL server.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/privateLinkResources
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @return {PrivateLinkResourceListResult} Successfully retrieved private link resources.
		 */
		PrivateLinkResources_ListByServer(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string): Observable<PrivateLinkResourceListResult> {
			return this.http.get<PrivateLinkResourceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DBforMySQL/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/privateLinkResources&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a private link resource for MySQL server.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/privateLinkResources/{groupName}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} serverName The name of the server.
		 * @param {string} groupName The name of the private link resource.
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @return {PrivateLinkResource} Successfully retrieved private link resources.
		 */
		PrivateLinkResources_Get(resourceGroupName: string, serverName: string, groupName: string, subscriptionId: string, api_version: string): Observable<PrivateLinkResource> {
			return this.http.get<PrivateLinkResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DBforMySQL/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/privateLinkResources/' + (groupName == null ? '' : encodeURIComponent(groupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

