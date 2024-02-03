import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ApplicationSecurityGroup {
	}
	export interface ApplicationSecurityGroupFormProperties {
	}
	export function CreateApplicationSecurityGroupFormGroup() {
		return new FormGroup<ApplicationSecurityGroupFormProperties>({
		});

	}


	/** A list of application security groups. */
	export interface ApplicationSecurityGroupListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** A list of application security groups. */
		value?: Array<ApplicationSecurityGroup>;
	}

	/** A list of application security groups. */
	export interface ApplicationSecurityGroupListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateApplicationSecurityGroupListResultFormGroup() {
		return new FormGroup<ApplicationSecurityGroupListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Application security group properties. */
	export interface ApplicationSecurityGroupPropertiesFormat {

		/** The current provisioning state. */
		provisioningState?: ApplicationSecurityGroupPropertiesFormatProvisioningState | null;

		/** The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups. */
		resourceGuid?: string | null;
	}

	/** Application security group properties. */
	export interface ApplicationSecurityGroupPropertiesFormatFormProperties {

		/** The current provisioning state. */
		provisioningState: FormControl<ApplicationSecurityGroupPropertiesFormatProvisioningState | null | undefined>,

		/** The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups. */
		resourceGuid: FormControl<string | null | undefined>,
	}
	export function CreateApplicationSecurityGroupPropertiesFormatFormGroup() {
		return new FormGroup<ApplicationSecurityGroupPropertiesFormatFormProperties>({
			provisioningState: new FormControl<ApplicationSecurityGroupPropertiesFormatProvisioningState | null | undefined>(undefined),
			resourceGuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApplicationSecurityGroupPropertiesFormatProvisioningState { Succeeded = 'Succeeded', Updating = 'Updating', Deleting = 'Deleting', Failed = 'Failed' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets all application security groups in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network/applicationSecurityGroups
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ApplicationSecurityGroupListResult} Request successful. The operation returns a list of application security group resources.
		 */
		ApplicationSecurityGroups_ListAll(api_version: string, subscriptionId: string): Observable<ApplicationSecurityGroupListResult> {
			return this.http.get<ApplicationSecurityGroupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/applicationSecurityGroups?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all the application security groups in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationSecurityGroups
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ApplicationSecurityGroupListResult} Request successful. The operation returns a list of application security group resources.
		 */
		ApplicationSecurityGroups_List(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<ApplicationSecurityGroupListResult> {
			return this.http.get<ApplicationSecurityGroupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/applicationSecurityGroups&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified application security group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationSecurityGroups/{applicationSecurityGroupName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} applicationSecurityGroupName The name of the application security group.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ApplicationSecurityGroup} Request successful. The operation returns the specified application security group resource.
		 */
		ApplicationSecurityGroups_Get(resourceGroupName: string, applicationSecurityGroupName: string, api_version: string, subscriptionId: string): Observable<ApplicationSecurityGroup> {
			return this.http.get<ApplicationSecurityGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/applicationSecurityGroups/' + (applicationSecurityGroupName == null ? '' : encodeURIComponent(applicationSecurityGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an application security group.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationSecurityGroups/{applicationSecurityGroupName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} applicationSecurityGroupName The name of the application security group.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {ApplicationSecurityGroup} requestBody Parameters supplied to the create or update ApplicationSecurityGroup operation.
		 * @return {ApplicationSecurityGroup} Update successful. The operation returns the resulting application security group resource.
		 */
		ApplicationSecurityGroups_CreateOrUpdate(resourceGroupName: string, applicationSecurityGroupName: string, api_version: string, subscriptionId: string, requestBody: ApplicationSecurityGroup): Observable<ApplicationSecurityGroup> {
			return this.http.put<ApplicationSecurityGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/applicationSecurityGroups/' + (applicationSecurityGroupName == null ? '' : encodeURIComponent(applicationSecurityGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified application security group.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationSecurityGroups/{applicationSecurityGroupName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} applicationSecurityGroupName The name of the application security group.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Delete successful.
		 */
		ApplicationSecurityGroups_Delete(resourceGroupName: string, applicationSecurityGroupName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/applicationSecurityGroups/' + (applicationSecurityGroupName == null ? '' : encodeURIComponent(applicationSecurityGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an application security group's tags.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationSecurityGroups/{applicationSecurityGroupName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} applicationSecurityGroupName The name of the application security group.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {any} requestBody Parameters supplied to update application security group tags.
		 * @return {ApplicationSecurityGroup} Update successful. The operation returns the resulting ApplicationSecurityGroup resource.
		 */
		ApplicationSecurityGroups_UpdateTags(resourceGroupName: string, applicationSecurityGroupName: string, api_version: string, subscriptionId: string, requestBody: any): Observable<ApplicationSecurityGroup> {
			return this.http.patch<ApplicationSecurityGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/applicationSecurityGroups/' + (applicationSecurityGroupName == null ? '' : encodeURIComponent(applicationSecurityGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

