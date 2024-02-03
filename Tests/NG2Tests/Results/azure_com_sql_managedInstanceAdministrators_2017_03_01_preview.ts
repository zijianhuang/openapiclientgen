import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An Azure SQL managed instance administrator. */
	export interface ManagedInstanceAdministrator {

		/** The properties of a managed instance administrator. */
		properties?: ManagedInstanceAdministratorProperties;
	}

	/** An Azure SQL managed instance administrator. */
	export interface ManagedInstanceAdministratorFormProperties {
	}
	export function CreateManagedInstanceAdministratorFormGroup() {
		return new FormGroup<ManagedInstanceAdministratorFormProperties>({
		});

	}


	/** The properties of a managed instance administrator. */
	export interface ManagedInstanceAdministratorProperties {

		/**
		 * Type of the managed instance administrator.
		 * Required
		 */
		administratorType: ManagedInstanceAdministratorPropertiesAdministratorType;

		/**
		 * Login name of the managed instance administrator.
		 * Required
		 */
		login: string;

		/**
		 * SID (object ID) of the managed instance administrator.
		 * Required
		 */
		sid: string;

		/** Tenant ID of the managed instance administrator. */
		tenantId?: string | null;
	}

	/** The properties of a managed instance administrator. */
	export interface ManagedInstanceAdministratorPropertiesFormProperties {

		/**
		 * Type of the managed instance administrator.
		 * Required
		 */
		administratorType: FormControl<ManagedInstanceAdministratorPropertiesAdministratorType | null | undefined>,

		/**
		 * Login name of the managed instance administrator.
		 * Required
		 */
		login: FormControl<string | null | undefined>,

		/**
		 * SID (object ID) of the managed instance administrator.
		 * Required
		 */
		sid: FormControl<string | null | undefined>,

		/** Tenant ID of the managed instance administrator. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateManagedInstanceAdministratorPropertiesFormGroup() {
		return new FormGroup<ManagedInstanceAdministratorPropertiesFormProperties>({
			administratorType: new FormControl<ManagedInstanceAdministratorPropertiesAdministratorType | null | undefined>(undefined, [Validators.required]),
			login: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ManagedInstanceAdministratorPropertiesAdministratorType { ActiveDirectory = 'ActiveDirectory' }


	/** A list of managed instance administrators. */
	export interface ManagedInstanceAdministratorListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<ManagedInstanceAdministrator>;
	}

	/** A list of managed instance administrators. */
	export interface ManagedInstanceAdministratorListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateManagedInstanceAdministratorListResultFormGroup() {
		return new FormGroup<ManagedInstanceAdministratorListResultFormProperties>({
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
		 * Gets a list of managed instance administrators.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/administrators
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ManagedInstanceAdministratorListResult} Successfully retrieved the list of managed instance administrators.
		 */
		ManagedInstanceAdministrators_ListByInstance(resourceGroupName: string, managedInstanceName: string, subscriptionId: string, api_version: string): Observable<ManagedInstanceAdministratorListResult> {
			return this.http.get<ManagedInstanceAdministratorListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/administrators&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a managed instance administrator.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/administrators/{administratorName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {ManagedInstanceAdministratorPropertiesAdministratorType} administratorName The administrator name.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ManagedInstanceAdministrator} Successfully retrieved the specified managed instance administrator.
		 */
		ManagedInstanceAdministrators_Get(resourceGroupName: string, managedInstanceName: string, administratorName: ManagedInstanceAdministratorPropertiesAdministratorType, subscriptionId: string, api_version: string): Observable<ManagedInstanceAdministrator> {
			return this.http.get<ManagedInstanceAdministrator>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/administrators/' + administratorName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a managed instance administrator.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/administrators/{administratorName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {ManagedInstanceAdministratorPropertiesAdministratorType} administratorName The requested administrator name.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {ManagedInstanceAdministrator} requestBody The requested administrator parameters.
		 * @return {ManagedInstanceAdministrator} Successfully updated the managed instance administrator.
		 */
		ManagedInstanceAdministrators_CreateOrUpdate(resourceGroupName: string, managedInstanceName: string, administratorName: ManagedInstanceAdministratorPropertiesAdministratorType, subscriptionId: string, api_version: string, requestBody: ManagedInstanceAdministrator): Observable<ManagedInstanceAdministrator> {
			return this.http.put<ManagedInstanceAdministrator>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/administrators/' + administratorName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a managed instance administrator.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/administrators/{administratorName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {ManagedInstanceAdministratorPropertiesAdministratorType} administratorName The administrator name.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the managed instance administrator.
		 */
		ManagedInstanceAdministrators_Delete(resourceGroupName: string, managedInstanceName: string, administratorName: ManagedInstanceAdministratorPropertiesAdministratorType, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/administrators/' + administratorName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

