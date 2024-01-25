import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A long term retention policy. */
	export interface BackupLongTermRetentionPolicy {

		/** Properties of a long term retention policy */
		properties?: LongTermRetentionPolicyProperties;
	}

	/** A long term retention policy. */
	export interface BackupLongTermRetentionPolicyFormProperties {
	}
	export function CreateBackupLongTermRetentionPolicyFormGroup() {
		return new FormGroup<BackupLongTermRetentionPolicyFormProperties>({
		});

	}


	/** Properties of a long term retention policy */
	export interface LongTermRetentionPolicyProperties {

		/** The monthly retention policy for an LTR backup in an ISO 8601 format. */
		monthlyRetention?: string | null;

		/** The week of year to take the yearly backup in an ISO 8601 format. */
		weekOfYear?: number | null;

		/** The weekly retention policy for an LTR backup in an ISO 8601 format. */
		weeklyRetention?: string | null;

		/** The yearly retention policy for an LTR backup in an ISO 8601 format. */
		yearlyRetention?: string | null;
	}

	/** Properties of a long term retention policy */
	export interface LongTermRetentionPolicyPropertiesFormProperties {

		/** The monthly retention policy for an LTR backup in an ISO 8601 format. */
		monthlyRetention: FormControl<string | null | undefined>,

		/** The week of year to take the yearly backup in an ISO 8601 format. */
		weekOfYear: FormControl<number | null | undefined>,

		/** The weekly retention policy for an LTR backup in an ISO 8601 format. */
		weeklyRetention: FormControl<string | null | undefined>,

		/** The yearly retention policy for an LTR backup in an ISO 8601 format. */
		yearlyRetention: FormControl<string | null | undefined>,
	}
	export function CreateLongTermRetentionPolicyPropertiesFormGroup() {
		return new FormGroup<LongTermRetentionPolicyPropertiesFormProperties>({
			monthlyRetention: new FormControl<string | null | undefined>(undefined),
			weekOfYear: new FormControl<number | null | undefined>(undefined),
			weeklyRetention: new FormControl<string | null | undefined>(undefined),
			yearlyRetention: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A long term retention backup. */
	export interface LongTermRetentionBackup {

		/** Properties of a long term retention backup */
		properties?: LongTermRetentionBackupProperties;
	}

	/** A long term retention backup. */
	export interface LongTermRetentionBackupFormProperties {
	}
	export function CreateLongTermRetentionBackupFormGroup() {
		return new FormGroup<LongTermRetentionBackupFormProperties>({
		});

	}


	/** Properties of a long term retention backup */
	export interface LongTermRetentionBackupProperties {

		/** The time the long term retention backup will expire. */
		backupExpirationTime?: Date | null;

		/** The time the backup was taken */
		backupTime?: Date | null;

		/** The delete time of the database */
		databaseDeletionTime?: Date | null;

		/** The name of the database the backup belong to */
		databaseName?: string | null;

		/** The create time of the server. */
		serverCreateTime?: Date | null;

		/** The server name that the backup database belong to. */
		serverName?: string | null;
	}

	/** Properties of a long term retention backup */
	export interface LongTermRetentionBackupPropertiesFormProperties {

		/** The time the long term retention backup will expire. */
		backupExpirationTime: FormControl<Date | null | undefined>,

		/** The time the backup was taken */
		backupTime: FormControl<Date | null | undefined>,

		/** The delete time of the database */
		databaseDeletionTime: FormControl<Date | null | undefined>,

		/** The name of the database the backup belong to */
		databaseName: FormControl<string | null | undefined>,

		/** The create time of the server. */
		serverCreateTime: FormControl<Date | null | undefined>,

		/** The server name that the backup database belong to. */
		serverName: FormControl<string | null | undefined>,
	}
	export function CreateLongTermRetentionBackupPropertiesFormGroup() {
		return new FormGroup<LongTermRetentionBackupPropertiesFormProperties>({
			backupExpirationTime: new FormControl<Date | null | undefined>(undefined),
			backupTime: new FormControl<Date | null | undefined>(undefined),
			databaseDeletionTime: new FormControl<Date | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
			serverCreateTime: new FormControl<Date | null | undefined>(undefined),
			serverName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of long term retention backups. */
	export interface LongTermRetentionBackupListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<LongTermRetentionBackup>;
	}

	/** A list of long term retention backups. */
	export interface LongTermRetentionBackupListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateLongTermRetentionBackupListResultFormGroup() {
		return new FormGroup<LongTermRetentionBackupListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists the long term retention backups for a given location.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionBackups
		 * @param {string} locationName The location of the database
		 * @param {boolean} onlyLatestPerDatabase Whether or not to only get the latest backup for each database.
		 * @param {LongTermRetentionBackups_ListByLocationDatabaseState} databaseState Whether to query against just live databases, just deleted databases, or all databases.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {LongTermRetentionBackupListResult} Successfully retrieved the list of backups.
		 */
		LongTermRetentionBackups_ListByLocation(locationName: string, onlyLatestPerDatabase: boolean | null | undefined, databaseState: LongTermRetentionBackups_ListByLocationDatabaseState | null | undefined, subscriptionId: string, api_version: string): Observable<LongTermRetentionBackupListResult> {
			return this.http.get<LongTermRetentionBackupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Sql/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/longTermRetentionBackups&onlyLatestPerDatabase=' + onlyLatestPerDatabase + '&databaseState=' + databaseState + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists the long term retention backups for a given server.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionServers/{longTermRetentionServerName}/longTermRetentionBackups
		 * @param {string} locationName The location of the database
		 * @param {string} longTermRetentionServerName The name of the server
		 * @param {boolean} onlyLatestPerDatabase Whether or not to only get the latest backup for each database.
		 * @param {LongTermRetentionBackups_ListByLocationDatabaseState} databaseState Whether to query against just live databases, just deleted databases, or all databases.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {LongTermRetentionBackupListResult} Successfully retrieved the list of backups.
		 */
		LongTermRetentionBackups_ListByServer(locationName: string, longTermRetentionServerName: string, onlyLatestPerDatabase: boolean | null | undefined, databaseState: LongTermRetentionBackups_ListByLocationDatabaseState | null | undefined, subscriptionId: string, api_version: string): Observable<LongTermRetentionBackupListResult> {
			return this.http.get<LongTermRetentionBackupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Sql/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/longTermRetentionServers/' + (longTermRetentionServerName == null ? '' : encodeURIComponent(longTermRetentionServerName)) + '/longTermRetentionBackups&onlyLatestPerDatabase=' + onlyLatestPerDatabase + '&databaseState=' + databaseState + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all long term retention backups for a database.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionServers/{longTermRetentionServerName}/longTermRetentionDatabases/{longTermRetentionDatabaseName}/longTermRetentionBackups
		 * @param {string} locationName The location of the database
		 * @param {string} longTermRetentionServerName The name of the server
		 * @param {string} longTermRetentionDatabaseName The name of the database
		 * @param {boolean} onlyLatestPerDatabase Whether or not to only get the latest backup for each database.
		 * @param {LongTermRetentionBackups_ListByLocationDatabaseState} databaseState Whether to query against just live databases, just deleted databases, or all databases.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {LongTermRetentionBackupListResult} Successfully retrieved the list of backups.
		 */
		LongTermRetentionBackups_ListByDatabase(locationName: string, longTermRetentionServerName: string, longTermRetentionDatabaseName: string, onlyLatestPerDatabase: boolean | null | undefined, databaseState: LongTermRetentionBackups_ListByLocationDatabaseState | null | undefined, subscriptionId: string, api_version: string): Observable<LongTermRetentionBackupListResult> {
			return this.http.get<LongTermRetentionBackupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Sql/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/longTermRetentionServers/' + (longTermRetentionServerName == null ? '' : encodeURIComponent(longTermRetentionServerName)) + '/longTermRetentionDatabases/' + (longTermRetentionDatabaseName == null ? '' : encodeURIComponent(longTermRetentionDatabaseName)) + '/longTermRetentionBackups&onlyLatestPerDatabase=' + onlyLatestPerDatabase + '&databaseState=' + databaseState + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a long term retention backup.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionServers/{longTermRetentionServerName}/longTermRetentionDatabases/{longTermRetentionDatabaseName}/longTermRetentionBackups/{backupName}
		 * @param {string} locationName The location of the database.
		 * @param {string} longTermRetentionServerName The name of the server
		 * @param {string} longTermRetentionDatabaseName The name of the database
		 * @param {string} backupName The backup name.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {LongTermRetentionBackup} Successfully retrieved the backup.
		 */
		LongTermRetentionBackups_Get(locationName: string, longTermRetentionServerName: string, longTermRetentionDatabaseName: string, backupName: string, subscriptionId: string, api_version: string): Observable<LongTermRetentionBackup> {
			return this.http.get<LongTermRetentionBackup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Sql/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/longTermRetentionServers/' + (longTermRetentionServerName == null ? '' : encodeURIComponent(longTermRetentionServerName)) + '/longTermRetentionDatabases/' + (longTermRetentionDatabaseName == null ? '' : encodeURIComponent(longTermRetentionDatabaseName)) + '/longTermRetentionBackups/' + (backupName == null ? '' : encodeURIComponent(backupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a long term retention backup.
		 * Delete subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionServers/{longTermRetentionServerName}/longTermRetentionDatabases/{longTermRetentionDatabaseName}/longTermRetentionBackups/{backupName}
		 * @param {string} locationName The location of the database
		 * @param {string} longTermRetentionServerName The name of the server
		 * @param {string} longTermRetentionDatabaseName The name of the database
		 * @param {string} backupName The backup name.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the backup.
		 */
		LongTermRetentionBackups_Delete(locationName: string, longTermRetentionServerName: string, longTermRetentionDatabaseName: string, backupName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Sql/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/longTermRetentionServers/' + (longTermRetentionServerName == null ? '' : encodeURIComponent(longTermRetentionServerName)) + '/longTermRetentionDatabases/' + (longTermRetentionDatabaseName == null ? '' : encodeURIComponent(longTermRetentionDatabaseName)) + '/longTermRetentionBackups/' + (backupName == null ? '' : encodeURIComponent(backupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the long term retention backups for a given location.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionBackups
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} locationName The location of the database
		 * @param {boolean} onlyLatestPerDatabase Whether or not to only get the latest backup for each database.
		 * @param {LongTermRetentionBackups_ListByLocationDatabaseState} databaseState Whether to query against just live databases, just deleted databases, or all databases.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {LongTermRetentionBackupListResult} Successfully retrieved the list of backups.
		 */
		LongTermRetentionBackups_ListByResourceGroupLocation(resourceGroupName: string, locationName: string, onlyLatestPerDatabase: boolean | null | undefined, databaseState: LongTermRetentionBackups_ListByLocationDatabaseState | null | undefined, subscriptionId: string, api_version: string): Observable<LongTermRetentionBackupListResult> {
			return this.http.get<LongTermRetentionBackupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/longTermRetentionBackups&onlyLatestPerDatabase=' + onlyLatestPerDatabase + '&databaseState=' + databaseState + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists the long term retention backups for a given server.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionServers/{longTermRetentionServerName}/longTermRetentionBackups
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} locationName The location of the database
		 * @param {string} longTermRetentionServerName The name of the server
		 * @param {boolean} onlyLatestPerDatabase Whether or not to only get the latest backup for each database.
		 * @param {LongTermRetentionBackups_ListByLocationDatabaseState} databaseState Whether to query against just live databases, just deleted databases, or all databases.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {LongTermRetentionBackupListResult} Successfully retrieved the list of backups.
		 */
		LongTermRetentionBackups_ListByResourceGroupServer(resourceGroupName: string, locationName: string, longTermRetentionServerName: string, onlyLatestPerDatabase: boolean | null | undefined, databaseState: LongTermRetentionBackups_ListByLocationDatabaseState | null | undefined, subscriptionId: string, api_version: string): Observable<LongTermRetentionBackupListResult> {
			return this.http.get<LongTermRetentionBackupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/longTermRetentionServers/' + (longTermRetentionServerName == null ? '' : encodeURIComponent(longTermRetentionServerName)) + '/longTermRetentionBackups&onlyLatestPerDatabase=' + onlyLatestPerDatabase + '&databaseState=' + databaseState + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all long term retention backups for a database.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionServers/{longTermRetentionServerName}/longTermRetentionDatabases/{longTermRetentionDatabaseName}/longTermRetentionBackups
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} locationName The location of the database
		 * @param {string} longTermRetentionServerName The name of the server
		 * @param {string} longTermRetentionDatabaseName The name of the database
		 * @param {boolean} onlyLatestPerDatabase Whether or not to only get the latest backup for each database.
		 * @param {LongTermRetentionBackups_ListByLocationDatabaseState} databaseState Whether to query against just live databases, just deleted databases, or all databases.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {LongTermRetentionBackupListResult} Successfully retrieved the list of backups.
		 */
		LongTermRetentionBackups_ListByResourceGroupDatabase(resourceGroupName: string, locationName: string, longTermRetentionServerName: string, longTermRetentionDatabaseName: string, onlyLatestPerDatabase: boolean | null | undefined, databaseState: LongTermRetentionBackups_ListByLocationDatabaseState | null | undefined, subscriptionId: string, api_version: string): Observable<LongTermRetentionBackupListResult> {
			return this.http.get<LongTermRetentionBackupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/longTermRetentionServers/' + (longTermRetentionServerName == null ? '' : encodeURIComponent(longTermRetentionServerName)) + '/longTermRetentionDatabases/' + (longTermRetentionDatabaseName == null ? '' : encodeURIComponent(longTermRetentionDatabaseName)) + '/longTermRetentionBackups&onlyLatestPerDatabase=' + onlyLatestPerDatabase + '&databaseState=' + databaseState + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a long term retention backup.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionServers/{longTermRetentionServerName}/longTermRetentionDatabases/{longTermRetentionDatabaseName}/longTermRetentionBackups/{backupName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} locationName The location of the database.
		 * @param {string} longTermRetentionServerName The name of the server
		 * @param {string} longTermRetentionDatabaseName The name of the database
		 * @param {string} backupName The backup name.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {LongTermRetentionBackup} Successfully retrieved the backup.
		 */
		LongTermRetentionBackups_GetByResourceGroup(resourceGroupName: string, locationName: string, longTermRetentionServerName: string, longTermRetentionDatabaseName: string, backupName: string, subscriptionId: string, api_version: string): Observable<LongTermRetentionBackup> {
			return this.http.get<LongTermRetentionBackup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/longTermRetentionServers/' + (longTermRetentionServerName == null ? '' : encodeURIComponent(longTermRetentionServerName)) + '/longTermRetentionDatabases/' + (longTermRetentionDatabaseName == null ? '' : encodeURIComponent(longTermRetentionDatabaseName)) + '/longTermRetentionBackups/' + (backupName == null ? '' : encodeURIComponent(backupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a long term retention backup.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/longTermRetentionServers/{longTermRetentionServerName}/longTermRetentionDatabases/{longTermRetentionDatabaseName}/longTermRetentionBackups/{backupName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} locationName The location of the database
		 * @param {string} longTermRetentionServerName The name of the server
		 * @param {string} longTermRetentionDatabaseName The name of the database
		 * @param {string} backupName The backup name.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the backup.
		 */
		LongTermRetentionBackups_DeleteByResourceGroup(resourceGroupName: string, locationName: string, longTermRetentionServerName: string, longTermRetentionDatabaseName: string, backupName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/longTermRetentionServers/' + (longTermRetentionServerName == null ? '' : encodeURIComponent(longTermRetentionServerName)) + '/longTermRetentionDatabases/' + (longTermRetentionDatabaseName == null ? '' : encodeURIComponent(longTermRetentionDatabaseName)) + '/longTermRetentionBackups/' + (backupName == null ? '' : encodeURIComponent(backupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a database's long term retention policy.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/backupLongTermRetentionPolicies
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {BackupLongTermRetentionPolicy} Successfully get the policy.
		 */
		BackupLongTermRetentionPolicies_ListByDatabase(resourceGroupName: string, serverName: string, databaseName: string, subscriptionId: string, api_version: string): Observable<BackupLongTermRetentionPolicy> {
			return this.http.get<BackupLongTermRetentionPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/backupLongTermRetentionPolicies&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a database's long term retention policy.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/backupLongTermRetentionPolicies/{policyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {BackupLongTermRetentionPolicies_GetPolicyName} policyName The policy name. Should always be Default.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {BackupLongTermRetentionPolicy} Successfully get the policy.
		 */
		BackupLongTermRetentionPolicies_Get(resourceGroupName: string, serverName: string, databaseName: string, policyName: BackupLongTermRetentionPolicies_GetPolicyName, subscriptionId: string, api_version: string): Observable<BackupLongTermRetentionPolicy> {
			return this.http.get<BackupLongTermRetentionPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/backupLongTermRetentionPolicies/' + policyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Sets a database's long term retention policy.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/backupLongTermRetentionPolicies/{policyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {BackupLongTermRetentionPolicies_GetPolicyName} policyName The policy name. Should always be Default.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {BackupLongTermRetentionPolicy} requestBody The long term retention policy info.
		 * @return {BackupLongTermRetentionPolicy} Successfully set the policy.
		 */
		BackupLongTermRetentionPolicies_CreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, policyName: BackupLongTermRetentionPolicies_GetPolicyName, subscriptionId: string, api_version: string, requestBody: BackupLongTermRetentionPolicy): Observable<BackupLongTermRetentionPolicy> {
			return this.http.put<BackupLongTermRetentionPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/backupLongTermRetentionPolicies/' + policyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum LongTermRetentionBackups_ListByLocationDatabaseState { All = 0, Live = 1, Deleted = 2 }

	export enum BackupLongTermRetentionPolicies_GetPolicyName { default = 0 }

}

