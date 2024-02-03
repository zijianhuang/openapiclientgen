import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface GeoBackupPolicy {
	}
	export interface GeoBackupPolicyFormProperties {
	}
	export function CreateGeoBackupPolicyFormGroup() {
		return new FormGroup<GeoBackupPolicyFormProperties>({
		});

	}


	/** The response to a list geo backup policies request. */
	export interface GeoBackupPolicyListResult {

		/** The list of geo backup policies. */
		value?: Array<GeoBackupPolicy>;
	}

	/** The response to a list geo backup policies request. */
	export interface GeoBackupPolicyListResultFormProperties {
	}
	export function CreateGeoBackupPolicyListResultFormGroup() {
		return new FormGroup<GeoBackupPolicyListResultFormProperties>({
		});

	}


	/** The properties of the geo backup policy. */
	export interface GeoBackupPolicyProperties {

		/**
		 * The state of the geo backup policy.
		 * Required
		 */
		state: GeoBackupPolicyPropertiesState;

		/** The storage type of the geo backup policy. */
		storageType?: string | null;
	}

	/** The properties of the geo backup policy. */
	export interface GeoBackupPolicyPropertiesFormProperties {

		/**
		 * The state of the geo backup policy.
		 * Required
		 */
		state: FormControl<GeoBackupPolicyPropertiesState | null | undefined>,

		/** The storage type of the geo backup policy. */
		storageType: FormControl<string | null | undefined>,
	}
	export function CreateGeoBackupPolicyPropertiesFormGroup() {
		return new FormGroup<GeoBackupPolicyPropertiesFormProperties>({
			state: new FormControl<GeoBackupPolicyPropertiesState | null | undefined>(undefined, [Validators.required]),
			storageType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GeoBackupPolicyPropertiesState { Disabled = 'Disabled', Enabled = 'Enabled' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of geo backup policies.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/geoBackupPolicies
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @return {GeoBackupPolicyListResult} OK
		 */
		GeoBackupPolicies_ListByDatabase(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string): Observable<GeoBackupPolicyListResult> {
			return this.http.get<GeoBackupPolicyListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/geoBackupPolicies?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a geo backup policy.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/geoBackupPolicies/{geoBackupPolicyName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {GeoBackupPolicies_GetGeoBackupPolicyName} geoBackupPolicyName The name of the geo backup policy.
		 * @return {GeoBackupPolicy} OK
		 */
		GeoBackupPolicies_Get(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string, geoBackupPolicyName: GeoBackupPolicies_GetGeoBackupPolicyName): Observable<GeoBackupPolicy> {
			return this.http.get<GeoBackupPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/geoBackupPolicies/' + geoBackupPolicyName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates a database geo backup policy.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/geoBackupPolicies/{geoBackupPolicyName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {GeoBackupPolicies_GetGeoBackupPolicyName} geoBackupPolicyName The name of the geo backup policy.
		 * @param {GeoBackupPolicy} requestBody The required parameters for creating or updating the geo backup policy.
		 * @return {GeoBackupPolicy} OK
		 */
		GeoBackupPolicies_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string, geoBackupPolicyName: GeoBackupPolicies_GetGeoBackupPolicyName, requestBody: GeoBackupPolicy): Observable<GeoBackupPolicy> {
			return this.http.put<GeoBackupPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/geoBackupPolicies/' + geoBackupPolicyName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum GeoBackupPolicies_GetGeoBackupPolicyName { Default = 'Default' }

}

