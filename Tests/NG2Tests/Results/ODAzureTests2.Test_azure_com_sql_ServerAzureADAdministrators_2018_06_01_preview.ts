import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A list of active directory administrators. */
	export interface AdministratorListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<ServerAzureADAdministrator>;
	}

	/** A list of active directory administrators. */
	export interface AdministratorListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAdministratorListResultFormGroup() {
		return new FormGroup<AdministratorListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure Active Directory administrator. */
	export interface ServerAzureADAdministrator {

		/** Properties of a active directory administrator. */
		properties?: AdministratorProperties;
	}

	/** Azure Active Directory administrator. */
	export interface ServerAzureADAdministratorFormProperties {
	}
	export function CreateServerAzureADAdministratorFormGroup() {
		return new FormGroup<ServerAzureADAdministratorFormProperties>({
		});

	}


	/** Properties of a active directory administrator. */
	export interface AdministratorProperties {

		/**
		 * Type of the sever administrator.
		 * Required
		 */
		administratorType: AdministratorPropertiesAdministratorType;

		/**
		 * Login name of the server administrator.
		 * Required
		 */
		login: string;

		/**
		 * SID (object ID) of the server administrator.
		 * Required
		 */
		sid: string;

		/** Tenant ID of the administrator. */
		tenantId?: string | null;
	}

	/** Properties of a active directory administrator. */
	export interface AdministratorPropertiesFormProperties {

		/**
		 * Type of the sever administrator.
		 * Required
		 */
		administratorType: FormControl<AdministratorPropertiesAdministratorType | null | undefined>,

		/**
		 * Login name of the server administrator.
		 * Required
		 */
		login: FormControl<string | null | undefined>,

		/**
		 * SID (object ID) of the server administrator.
		 * Required
		 */
		sid: FormControl<string | null | undefined>,

		/** Tenant ID of the administrator. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateAdministratorPropertiesFormGroup() {
		return new FormGroup<AdministratorPropertiesFormProperties>({
			administratorType: new FormControl<AdministratorPropertiesAdministratorType | null | undefined>(undefined, [Validators.required]),
			login: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AdministratorPropertiesAdministratorType { ActiveDirectory = 0 }


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
		 * Gets a list of server Administrators.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/administrators
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @return {AdministratorListResult} Successfully retrieved the list of Azure Active Directory administrators.
		 */
		ServerAzureADAdministrators_ListByServer(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string): Observable<AdministratorListResult> {
			return this.http.get<AdministratorListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/administrators?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a server Administrator.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/administrators/{administratorName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {AdministratorPropertiesAdministratorType} administratorName The name of server active directory administrator.
		 * @return {ServerAzureADAdministrator} Successfully retrieved a specified Azure Active Directory administrator.
		 */
		ServerAzureADAdministrators_Get(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, administratorName: AdministratorPropertiesAdministratorType): Observable<ServerAzureADAdministrator> {
			return this.http.get<ServerAzureADAdministrator>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/administrators/' + administratorName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new Server Active Directory Administrator or updates an existing server Active Directory Administrator.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/administrators/{administratorName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {ServerAzureADAdministrator} requestBody The required parameters for creating or updating an Active Directory Administrator.
		 * @return {ServerAzureADAdministrator} Successfully updated a Azure Active Directory administrator.
		 */
		ServerAzureADAdministrators_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, administratorName: AdministratorPropertiesAdministratorType, requestBody: ServerAzureADAdministrator): Observable<ServerAzureADAdministrator> {
			return this.http.put<ServerAzureADAdministrator>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/administrators/' + administratorName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing server Active Directory Administrator.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/administrators/{administratorName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {AdministratorPropertiesAdministratorType} administratorName The name of server active directory administrator.
		 * @return {void} Successfully deleted the Azure Active Directory administrator.
		 */
		ServerAzureADAdministrators_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, administratorName: AdministratorPropertiesAdministratorType): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/administrators/' + administratorName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

