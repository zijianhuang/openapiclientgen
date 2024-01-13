import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface RecoverableDatabase {
	}
	export interface RecoverableDatabaseFormProperties {
	}
	export function CreateRecoverableDatabaseFormGroup() {
		return new FormGroup<RecoverableDatabaseFormProperties>({
		});

	}


	/** The response to a list recoverable databases request */
	export interface RecoverableDatabaseListResult {

		/**
		 * A list of recoverable databases
		 * Required
		 */
		value: Array<RecoverableDatabase>;
	}

	/** The response to a list recoverable databases request */
	export interface RecoverableDatabaseListResultFormProperties {
	}
	export function CreateRecoverableDatabaseListResultFormGroup() {
		return new FormGroup<RecoverableDatabaseListResultFormProperties>({
		});

	}


	/** The properties of a recoverable database */
	export interface RecoverableDatabaseProperties {

		/** The edition of the database */
		edition?: string | null;

		/** The elastic pool name of the database */
		elasticPoolName?: string | null;

		/** The last available backup date of the database (ISO8601 format) */
		lastAvailableBackupDate?: Date | null;

		/** The service level objective name of the database */
		serviceLevelObjective?: string | null;
	}

	/** The properties of a recoverable database */
	export interface RecoverableDatabasePropertiesFormProperties {

		/** The edition of the database */
		edition: FormControl<string | null | undefined>,

		/** The elastic pool name of the database */
		elasticPoolName: FormControl<string | null | undefined>,

		/** The last available backup date of the database (ISO8601 format) */
		lastAvailableBackupDate: FormControl<Date | null | undefined>,

		/** The service level objective name of the database */
		serviceLevelObjective: FormControl<string | null | undefined>,
	}
	export function CreateRecoverableDatabasePropertiesFormGroup() {
		return new FormGroup<RecoverableDatabasePropertiesFormProperties>({
			edition: new FormControl<string | null | undefined>(undefined),
			elasticPoolName: new FormControl<string | null | undefined>(undefined),
			lastAvailableBackupDate: new FormControl<Date | null | undefined>(undefined),
			serviceLevelObjective: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RestorableDroppedDatabase {
	}
	export interface RestorableDroppedDatabaseFormProperties {
	}
	export function CreateRestorableDroppedDatabaseFormGroup() {
		return new FormGroup<RestorableDroppedDatabaseFormProperties>({
		});

	}


	/** The response to a list restorable dropped databases request */
	export interface RestorableDroppedDatabaseListResult {

		/**
		 * A list of restorable dropped databases
		 * Required
		 */
		value: Array<RestorableDroppedDatabase>;
	}

	/** The response to a list restorable dropped databases request */
	export interface RestorableDroppedDatabaseListResultFormProperties {
	}
	export function CreateRestorableDroppedDatabaseListResultFormGroup() {
		return new FormGroup<RestorableDroppedDatabaseListResultFormProperties>({
		});

	}


	/** The properties of a restorable dropped database */
	export interface RestorableDroppedDatabaseProperties {

		/** The creation date of the database (ISO8601 format) */
		creationDate?: Date | null;

		/** The name of the database */
		databaseName?: string | null;

		/** The deletion date of the database (ISO8601 format) */
		deletionDate?: Date | null;

		/** The earliest restore date of the database (ISO8601 format) */
		earliestRestoreDate?: Date | null;

		/** The edition of the database */
		edition?: string | null;

		/** The elastic pool name of the database */
		elasticPoolName?: string | null;

		/** The max size in bytes of the database */
		maxSizeBytes?: string | null;

		/** The service level objective name of the database */
		serviceLevelObjective?: string | null;
	}

	/** The properties of a restorable dropped database */
	export interface RestorableDroppedDatabasePropertiesFormProperties {

		/** The creation date of the database (ISO8601 format) */
		creationDate: FormControl<Date | null | undefined>,

		/** The name of the database */
		databaseName: FormControl<string | null | undefined>,

		/** The deletion date of the database (ISO8601 format) */
		deletionDate: FormControl<Date | null | undefined>,

		/** The earliest restore date of the database (ISO8601 format) */
		earliestRestoreDate: FormControl<Date | null | undefined>,

		/** The edition of the database */
		edition: FormControl<string | null | undefined>,

		/** The elastic pool name of the database */
		elasticPoolName: FormControl<string | null | undefined>,

		/** The max size in bytes of the database */
		maxSizeBytes: FormControl<string | null | undefined>,

		/** The service level objective name of the database */
		serviceLevelObjective: FormControl<string | null | undefined>,
	}
	export function CreateRestorableDroppedDatabasePropertiesFormGroup() {
		return new FormGroup<RestorableDroppedDatabasePropertiesFormProperties>({
			creationDate: new FormControl<Date | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
			deletionDate: new FormControl<Date | null | undefined>(undefined),
			earliestRestoreDate: new FormControl<Date | null | undefined>(undefined),
			edition: new FormControl<string | null | undefined>(undefined),
			elasticPoolName: new FormControl<string | null | undefined>(undefined),
			maxSizeBytes: new FormControl<string | null | undefined>(undefined),
			serviceLevelObjective: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of recoverable databases
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/recoverableDatabases
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @return {RecoverableDatabaseListResult} OK
		 */
		RecoverableDatabases_ListByServer(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string): Observable<RecoverableDatabaseListResult> {
			return this.http.get<RecoverableDatabaseListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/recoverableDatabases?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a recoverable database, which is a resource representing a database's geo backup
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/recoverableDatabases/{databaseName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database
		 * @return {RecoverableDatabase} OK
		 */
		RecoverableDatabases_Get(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string): Observable<RecoverableDatabase> {
			return this.http.get<RecoverableDatabase>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/recoverableDatabases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of deleted databases that can be restored
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/restorableDroppedDatabases
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @return {RestorableDroppedDatabaseListResult} OK
		 */
		RestorableDroppedDatabases_ListByServer(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string): Observable<RestorableDroppedDatabaseListResult> {
			return this.http.get<RestorableDroppedDatabaseListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/restorableDroppedDatabases?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a deleted database that can be restored
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/restorableDroppedDatabases/{restorableDroppededDatabaseId}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} restorableDroppededDatabaseId The id of the deleted database in the form of databaseName,deletionTimeInFileTimeFormat
		 * @return {RestorableDroppedDatabase} OK
		 */
		RestorableDroppedDatabases_Get(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, restorableDroppededDatabaseId: string): Observable<RestorableDroppedDatabase> {
			return this.http.get<RestorableDroppedDatabase>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/restorableDroppedDatabases/' + (restorableDroppededDatabaseId == null ? '' : encodeURIComponent(restorableDroppededDatabaseId)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

