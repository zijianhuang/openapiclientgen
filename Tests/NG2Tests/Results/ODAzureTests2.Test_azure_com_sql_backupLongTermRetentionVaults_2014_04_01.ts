import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BackupLongTermRetentionVault {
	}
	export interface BackupLongTermRetentionVaultFormProperties {
	}
	export function CreateBackupLongTermRetentionVaultFormGroup() {
		return new FormGroup<BackupLongTermRetentionVaultFormProperties>({
		});

	}


	/** Represents the response to a list vaults request. */
	export interface BackupLongTermRetentionVaultListResult {

		/**
		 * The list of vaults in the server.
		 * Required
		 */
		value: Array<BackupLongTermRetentionVault>;
	}

	/** Represents the response to a list vaults request. */
	export interface BackupLongTermRetentionVaultListResultFormProperties {
	}
	export function CreateBackupLongTermRetentionVaultListResultFormGroup() {
		return new FormGroup<BackupLongTermRetentionVaultListResultFormProperties>({
		});

	}


	/** The properties of a backup long term retention vault. */
	export interface BackupLongTermRetentionVaultProperties {

		/**
		 * The azure recovery services vault resource id
		 * Required
		 */
		recoveryServicesVaultResourceId: string;
	}

	/** The properties of a backup long term retention vault. */
	export interface BackupLongTermRetentionVaultPropertiesFormProperties {

		/**
		 * The azure recovery services vault resource id
		 * Required
		 */
		recoveryServicesVaultResourceId: FormControl<string | null | undefined>,
	}
	export function CreateBackupLongTermRetentionVaultPropertiesFormGroup() {
		return new FormGroup<BackupLongTermRetentionVaultPropertiesFormProperties>({
			recoveryServicesVaultResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets server backup long term retention vaults in a server
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/backupLongTermRetentionVaults
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @return {BackupLongTermRetentionVaultListResult} OK
		 */
		BackupLongTermRetentionVaults_ListByServer(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string): Observable<BackupLongTermRetentionVaultListResult> {
			return this.http.get<BackupLongTermRetentionVaultListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/backupLongTermRetentionVaults?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a server backup long term retention vault
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/backupLongTermRetentionVaults/{backupLongTermRetentionVaultName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {BackupLongTermRetentionVaults_GetBackupLongTermRetentionVaultName} backupLongTermRetentionVaultName The name of the Azure SQL Server backup LongTermRetention vault
		 * @return {BackupLongTermRetentionVault} OK
		 */
		BackupLongTermRetentionVaults_Get(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, backupLongTermRetentionVaultName: BackupLongTermRetentionVaults_GetBackupLongTermRetentionVaultName): Observable<BackupLongTermRetentionVault> {
			return this.http.get<BackupLongTermRetentionVault>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/backupLongTermRetentionVaults/' + backupLongTermRetentionVaultName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates a server backup long term retention vault
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/backupLongTermRetentionVaults/{backupLongTermRetentionVaultName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {BackupLongTermRetentionVaults_GetBackupLongTermRetentionVaultName} backupLongTermRetentionVaultName The name of the backup long term retention vault
		 * @param {BackupLongTermRetentionVault} requestBody The required parameters to update a backup long term retention vault
		 * @return {BackupLongTermRetentionVault} OK
		 */
		BackupLongTermRetentionVaults_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, backupLongTermRetentionVaultName: BackupLongTermRetentionVaults_GetBackupLongTermRetentionVaultName, requestBody: BackupLongTermRetentionVault): Observable<BackupLongTermRetentionVault> {
			return this.http.put<BackupLongTermRetentionVault>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/backupLongTermRetentionVaults/' + backupLongTermRetentionVaultName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum BackupLongTermRetentionVaults_GetBackupLongTermRetentionVaultName { RegisteredVault = 0 }

}

