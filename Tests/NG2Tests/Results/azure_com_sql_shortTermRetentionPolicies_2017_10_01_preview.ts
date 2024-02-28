import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A short term retention policy. */
	export interface BackupShortTermRetentionPolicy {

		/** Properties of a short term retention policy */
		properties?: BackupShortTermRetentionPolicyProperties;
	}

	/** A short term retention policy. */
	export interface BackupShortTermRetentionPolicyFormProperties {
	}
	export function CreateBackupShortTermRetentionPolicyFormGroup() {
		return new FormGroup<BackupShortTermRetentionPolicyFormProperties>({
		});

	}


	/** Properties of a short term retention policy */
	export interface BackupShortTermRetentionPolicyProperties {

		/**
		 * The backup retention period in days. This is how many days Point-in-Time Restore will be supported.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionDays?: number | null;
	}

	/** Properties of a short term retention policy */
	export interface BackupShortTermRetentionPolicyPropertiesFormProperties {

		/**
		 * The backup retention period in days. This is how many days Point-in-Time Restore will be supported.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionDays: FormControl<number | null | undefined>,
	}
	export function CreateBackupShortTermRetentionPolicyPropertiesFormGroup() {
		return new FormGroup<BackupShortTermRetentionPolicyPropertiesFormProperties>({
			retentionDays: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A list of short term retention policies. */
	export interface BackupShortTermRetentionPolicyListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<BackupShortTermRetentionPolicy>;
	}

	/** A list of short term retention policies. */
	export interface BackupShortTermRetentionPolicyListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateBackupShortTermRetentionPolicyListResultFormGroup() {
		return new FormGroup<BackupShortTermRetentionPolicyListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a database's short term retention policy.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/backupShortTermRetentionPolicies
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {BackupShortTermRetentionPolicyListResult} Successfully retrieved the policy.
		 */
		BackupShortTermRetentionPolicies_ListByDatabase(resourceGroupName: string, serverName: string, databaseName: string, subscriptionId: string, api_version: string): Observable<BackupShortTermRetentionPolicyListResult> {
			return this.http.get<BackupShortTermRetentionPolicyListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/backupShortTermRetentionPolicies&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a database's short term retention policy.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/backupShortTermRetentionPolicies/{policyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {BackupShortTermRetentionPolicies_GetPolicyName} policyName The policy name. Should always be "default".
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {BackupShortTermRetentionPolicy} Successfully retrieved the policy.
		 */
		BackupShortTermRetentionPolicies_Get(resourceGroupName: string, serverName: string, databaseName: string, policyName: BackupShortTermRetentionPolicies_GetPolicyName, subscriptionId: string, api_version: string): Observable<BackupShortTermRetentionPolicy> {
			return this.http.get<BackupShortTermRetentionPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/backupShortTermRetentionPolicies/' + policyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates a database's short term retention policy.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/backupShortTermRetentionPolicies/{policyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {BackupShortTermRetentionPolicies_GetPolicyName} policyName The policy name. Should always be "default".
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {BackupShortTermRetentionPolicy} requestBody The short term retention policy info.
		 * @return {BackupShortTermRetentionPolicy} Successfully updated the policy.
		 */
		BackupShortTermRetentionPolicies_CreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, policyName: BackupShortTermRetentionPolicies_GetPolicyName, subscriptionId: string, api_version: string, requestBody: BackupShortTermRetentionPolicy): Observable<BackupShortTermRetentionPolicy> {
			return this.http.put<BackupShortTermRetentionPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/backupShortTermRetentionPolicies/' + policyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a database's short term retention policy.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/backupShortTermRetentionPolicies/{policyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {BackupShortTermRetentionPolicies_GetPolicyName} policyName The policy name. Should always be "default".
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {BackupShortTermRetentionPolicy} requestBody The short term retention policy info.
		 * @return {BackupShortTermRetentionPolicy} Successfully updated the policy.
		 */
		BackupShortTermRetentionPolicies_Update(resourceGroupName: string, serverName: string, databaseName: string, policyName: BackupShortTermRetentionPolicies_GetPolicyName, subscriptionId: string, api_version: string, requestBody: BackupShortTermRetentionPolicy): Observable<BackupShortTermRetentionPolicy> {
			return this.http.patch<BackupShortTermRetentionPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/backupShortTermRetentionPolicies/' + policyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum BackupShortTermRetentionPolicies_GetPolicyName { default = 'default' }

}

