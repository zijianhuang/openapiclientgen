import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Infrastructure role description. */
	export interface InfraRole {

		/** Infrastructure role properties. */
		properties?: InfraRoleModel;
	}

	/** Infrastructure role description. */
	export interface InfraRoleFormProperties {
	}
	export function CreateInfraRoleFormGroup() {
		return new FormGroup<InfraRoleFormProperties>({
		});

	}


	/** Infrastructure role properties. */
	export interface InfraRoleModel {

		/** Display name for the infrastructure role. */
		displayName?: string | null;

		/** List of infrastructure role instances. */
		instances?: Array<string>;

		/** Value indicating whether the infrastructure role can be restarted. */
		restartable?: boolean | null;
	}

	/** Infrastructure role properties. */
	export interface InfraRoleModelFormProperties {

		/** Display name for the infrastructure role. */
		displayName: FormControl<string | null | undefined>,

		/** Value indicating whether the infrastructure role can be restarted. */
		restartable: FormControl<boolean | null | undefined>,
	}
	export function CreateInfraRoleModelFormGroup() {
		return new FormGroup<InfraRoleModelFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			restartable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Pageable list of infrastructure roles. */
	export interface InfraRoleList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of infrastructure roles. */
		value?: Array<InfraRole>;
	}

	/** Pageable list of infrastructure roles. */
	export interface InfraRoleListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateInfraRoleListFormGroup() {
		return new FormGroup<InfraRoleListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of all infrastructure roles at a location.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/infraRoles
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @return {InfraRoleList} OK
		 */
		InfraRoles_List(subscriptionId: string, resourceGroupName: string, location: string, api_version: string, filter: string | null | undefined): Observable<InfraRoleList> {
			return this.http.get<InfraRoleList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/infraRoles&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Returns the requested infrastructure role description.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/infraRoles/{infraRole}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} infraRole Infrastructure role name.
		 * @param {string} api_version Client API Version.
		 * @return {InfraRole} OK
		 */
		InfraRoles_Get(subscriptionId: string, resourceGroupName: string, location: string, infraRole: string, api_version: string): Observable<InfraRole> {
			return this.http.get<InfraRole>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/infraRoles/' + (infraRole == null ? '' : encodeURIComponent(infraRole)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Restarts the requested infrastructure role.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/infraRoles/{infraRole}/Restart
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} infraRole Infrastructure role name.
		 * @param {string} api_version Client API Version.
		 * @return {void} OK
		 */
		InfraRoles_Restart(subscriptionId: string, resourceGroupName: string, location: string, infraRole: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/infraRoles/' + (infraRole == null ? '' : encodeURIComponent(infraRole)) + '/Restart&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

