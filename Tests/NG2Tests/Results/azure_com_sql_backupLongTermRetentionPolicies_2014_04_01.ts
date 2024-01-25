import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BackupLongTermRetentionPolicy {
	}
	export interface BackupLongTermRetentionPolicyFormProperties {
	}
	export function CreateBackupLongTermRetentionPolicyFormGroup() {
		return new FormGroup<BackupLongTermRetentionPolicyFormProperties>({
		});

	}


	/** Represents the response to a list long-term retention policies request. */
	export interface BackupLongTermRetentionPolicyListResult {

		/**
		 * The list of long-term retention policies in the database.
		 * Required
		 */
		value: Array<BackupLongTermRetentionPolicy>;
	}

	/** Represents the response to a list long-term retention policies request. */
	export interface BackupLongTermRetentionPolicyListResultFormProperties {
	}
	export function CreateBackupLongTermRetentionPolicyListResultFormGroup() {
		return new FormGroup<BackupLongTermRetentionPolicyListResultFormProperties>({
		});

	}


	/** The properties of a backup long term retention policy */
	export interface BackupLongTermRetentionPolicyProperties {

		/**
		 * The azure recovery services backup protection policy resource id
		 * Required
		 */
		recoveryServicesBackupPolicyResourceId: string;

		/**
		 * The status of the backup long term retention policy
		 * Required
		 */
		state: BackupLongTermRetentionPolicyPropertiesState;
	}

	/** The properties of a backup long term retention policy */
	export interface BackupLongTermRetentionPolicyPropertiesFormProperties {

		/**
		 * The azure recovery services backup protection policy resource id
		 * Required
		 */
		recoveryServicesBackupPolicyResourceId: FormControl<string | null | undefined>,

		/**
		 * The status of the backup long term retention policy
		 * Required
		 */
		state: FormControl<BackupLongTermRetentionPolicyPropertiesState | null | undefined>,
	}
	export function CreateBackupLongTermRetentionPolicyPropertiesFormGroup() {
		return new FormGroup<BackupLongTermRetentionPolicyPropertiesFormProperties>({
			recoveryServicesBackupPolicyResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<BackupLongTermRetentionPolicyPropertiesState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BackupLongTermRetentionPolicyPropertiesState { Disabled = 0, Enabled = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a database backup long term retention policy
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/backupLongTermRetentionPolicies
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @return {BackupLongTermRetentionPolicyListResult} OK
		 */
		BackupLongTermRetentionPolicies_ListByDatabase(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string): Observable<BackupLongTermRetentionPolicyListResult> {
			return this.http.get<BackupLongTermRetentionPolicyListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/backupLongTermRetentionPolicies?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns a database backup long term retention policy
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/backupLongTermRetentionPolicies/{backupLongTermRetentionPolicyName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {BackupLongTermRetentionPolicies_GetBackupLongTermRetentionPolicyName} backupLongTermRetentionPolicyName The name of the backup long term retention policy
		 * @return {BackupLongTermRetentionPolicy} OK
		 */
		BackupLongTermRetentionPolicies_Get(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string, backupLongTermRetentionPolicyName: BackupLongTermRetentionPolicies_GetBackupLongTermRetentionPolicyName): Observable<BackupLongTermRetentionPolicy> {
			return this.http.get<BackupLongTermRetentionPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/backupLongTermRetentionPolicies/' + backupLongTermRetentionPolicyName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a database backup long term retention policy
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/backupLongTermRetentionPolicies/{backupLongTermRetentionPolicyName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database
		 * @param {BackupLongTermRetentionPolicies_GetBackupLongTermRetentionPolicyName} backupLongTermRetentionPolicyName The name of the backup long term retention policy
		 * @param {BackupLongTermRetentionPolicy} requestBody The required parameters to update a backup long term retention policy
		 * @return {BackupLongTermRetentionPolicy} OK
		 */
		BackupLongTermRetentionPolicies_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string, backupLongTermRetentionPolicyName: BackupLongTermRetentionPolicies_GetBackupLongTermRetentionPolicyName, requestBody: BackupLongTermRetentionPolicy): Observable<BackupLongTermRetentionPolicy> {
			return this.http.put<BackupLongTermRetentionPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/backupLongTermRetentionPolicies/' + backupLongTermRetentionPolicyName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum BackupLongTermRetentionPolicies_GetBackupLongTermRetentionPolicyName { Default = 0 }

}

