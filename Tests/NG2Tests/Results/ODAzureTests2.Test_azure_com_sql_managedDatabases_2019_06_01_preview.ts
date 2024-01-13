import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Contains the information necessary to perform a complete database restore operation. */
	export interface CompleteDatabaseRestoreDefinition {

		/**
		 * The last backup name to apply
		 * Required
		 */
		lastBackupName: string;
	}

	/** Contains the information necessary to perform a complete database restore operation. */
	export interface CompleteDatabaseRestoreDefinitionFormProperties {

		/**
		 * The last backup name to apply
		 * Required
		 */
		lastBackupName: FormControl<string | null | undefined>,
	}
	export function CreateCompleteDatabaseRestoreDefinitionFormGroup() {
		return new FormGroup<CompleteDatabaseRestoreDefinitionFormProperties>({
			lastBackupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A managed database resource. */
	export interface ManagedDatabase {

		/** The managed database's properties. */
		properties?: ManagedDatabaseProperties;
	}

	/** A managed database resource. */
	export interface ManagedDatabaseFormProperties {
	}
	export function CreateManagedDatabaseFormGroup() {
		return new FormGroup<ManagedDatabaseFormProperties>({
		});

	}


	/** The managed database's properties. */
	export interface ManagedDatabaseProperties {

		/** Collation of the metadata catalog. */
		catalogCollation?: ManagedDatabasePropertiesCatalogCollation | null;

		/** Collation of the managed database. */
		collation?: string | null;

		/** Managed database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. SourceDatabaseName, SourceManagedInstanceName and PointInTime must be specified. RestoreExternalBackup: Create a database by restoring from external backup files. Collation, StorageContainerUri and StorageContainerSasToken must be specified. Recovery: Creates a database by restoring a geo-replicated backup. RecoverableDatabaseId must be specified as the recoverable database resource ID to restore. */
		createMode?: ManagedDatabasePropertiesCreateMode | null;

		/** Creation date of the database. */
		creationDate?: Date | null;

		/** Geo paired region. */
		defaultSecondaryLocation?: string | null;

		/** Earliest restore point in time for point in time restore. */
		earliestRestorePoint?: Date | null;

		/** Instance Failover Group resource identifier that this managed database belongs to. */
		failoverGroupId?: string | null;

		/** The resource identifier of the recoverable database associated with create operation of this database. */
		recoverableDatabaseId?: string | null;

		/** The restorable dropped database resource id to restore when creating this database. */
		restorableDroppedDatabaseId?: string | null;

		/** Conditional. If createMode is PointInTimeRestore, this value is required. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. */
		restorePointInTime?: Date | null;

		/** The resource identifier of the source database associated with create operation of this database. */
		sourceDatabaseId?: string | null;

		/** Status of the database. */
		status?: ManagedDatabasePropertiesStatus | null;

		/** Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the storage container sas token. */
		storageContainerSasToken?: string | null;

		/** Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the uri of the storage container where backups for this restore are stored. */
		storageContainerUri?: string | null;
	}

	/** The managed database's properties. */
	export interface ManagedDatabasePropertiesFormProperties {

		/** Collation of the metadata catalog. */
		catalogCollation: FormControl<ManagedDatabasePropertiesCatalogCollation | null | undefined>,

		/** Collation of the managed database. */
		collation: FormControl<string | null | undefined>,

		/** Managed database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. SourceDatabaseName, SourceManagedInstanceName and PointInTime must be specified. RestoreExternalBackup: Create a database by restoring from external backup files. Collation, StorageContainerUri and StorageContainerSasToken must be specified. Recovery: Creates a database by restoring a geo-replicated backup. RecoverableDatabaseId must be specified as the recoverable database resource ID to restore. */
		createMode: FormControl<ManagedDatabasePropertiesCreateMode | null | undefined>,

		/** Creation date of the database. */
		creationDate: FormControl<Date | null | undefined>,

		/** Geo paired region. */
		defaultSecondaryLocation: FormControl<string | null | undefined>,

		/** Earliest restore point in time for point in time restore. */
		earliestRestorePoint: FormControl<Date | null | undefined>,

		/** Instance Failover Group resource identifier that this managed database belongs to. */
		failoverGroupId: FormControl<string | null | undefined>,

		/** The resource identifier of the recoverable database associated with create operation of this database. */
		recoverableDatabaseId: FormControl<string | null | undefined>,

		/** The restorable dropped database resource id to restore when creating this database. */
		restorableDroppedDatabaseId: FormControl<string | null | undefined>,

		/** Conditional. If createMode is PointInTimeRestore, this value is required. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. */
		restorePointInTime: FormControl<Date | null | undefined>,

		/** The resource identifier of the source database associated with create operation of this database. */
		sourceDatabaseId: FormControl<string | null | undefined>,

		/** Status of the database. */
		status: FormControl<ManagedDatabasePropertiesStatus | null | undefined>,

		/** Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the storage container sas token. */
		storageContainerSasToken: FormControl<string | null | undefined>,

		/** Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the uri of the storage container where backups for this restore are stored. */
		storageContainerUri: FormControl<string | null | undefined>,
	}
	export function CreateManagedDatabasePropertiesFormGroup() {
		return new FormGroup<ManagedDatabasePropertiesFormProperties>({
			catalogCollation: new FormControl<ManagedDatabasePropertiesCatalogCollation | null | undefined>(undefined),
			collation: new FormControl<string | null | undefined>(undefined),
			createMode: new FormControl<ManagedDatabasePropertiesCreateMode | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			defaultSecondaryLocation: new FormControl<string | null | undefined>(undefined),
			earliestRestorePoint: new FormControl<Date | null | undefined>(undefined),
			failoverGroupId: new FormControl<string | null | undefined>(undefined),
			recoverableDatabaseId: new FormControl<string | null | undefined>(undefined),
			restorableDroppedDatabaseId: new FormControl<string | null | undefined>(undefined),
			restorePointInTime: new FormControl<Date | null | undefined>(undefined),
			sourceDatabaseId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ManagedDatabasePropertiesStatus | null | undefined>(undefined),
			storageContainerSasToken: new FormControl<string | null | undefined>(undefined),
			storageContainerUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ManagedDatabasePropertiesCatalogCollation { DATABASE_DEFAULT = 0, SQL_Latin1_General_CP1_CI_AS = 1 }

	export enum ManagedDatabasePropertiesCreateMode { Default = 0, RestoreExternalBackup = 1, PointInTimeRestore = 2, Recovery = 3 }

	export enum ManagedDatabasePropertiesStatus { Online = 0, Offline = 1, Shutdown = 2, Creating = 3, Inaccessible = 4, Restoring = 5, Updating = 6 }


	/** A list of managed databases. */
	export interface ManagedDatabaseListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<ManagedDatabase>;
	}

	/** A list of managed databases. */
	export interface ManagedDatabaseListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateManagedDatabaseListResultFormGroup() {
		return new FormGroup<ManagedDatabaseListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An managed database update. */
	export interface ManagedDatabaseUpdate {

		/** The managed database's properties. */
		properties?: ManagedDatabaseProperties;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** An managed database update. */
	export interface ManagedDatabaseUpdateFormProperties {

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateManagedDatabaseUpdateFormGroup() {
		return new FormGroup<ManagedDatabaseUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
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


	/** ARM tracked top level resource. */
	export interface TrackedResource {

		/**
		 * Resource location.
		 * Required
		 */
		location: string;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** ARM tracked top level resource. */
	export interface TrackedResourceFormProperties {

		/**
		 * Resource location.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTrackedResourceFormGroup() {
		return new FormGroup<TrackedResourceFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of managed databases.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ManagedDatabaseListResult} Successfully retrieved the list of databases.
		 */
		ManagedDatabases_ListByInstance(resourceGroupName: string, managedInstanceName: string, subscriptionId: string, api_version: string): Observable<ManagedDatabaseListResult> {
			return this.http.get<ManagedDatabaseListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/databases&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a managed database.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} databaseName The name of the database.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ManagedDatabase} Successfully retrieved the specified managed database.
		 */
		ManagedDatabases_Get(resourceGroupName: string, managedInstanceName: string, databaseName: string, subscriptionId: string, api_version: string): Observable<ManagedDatabase> {
			return this.http.get<ManagedDatabase>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new database or updates an existing database.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} databaseName The name of the database.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {ManagedDatabase} requestBody The requested database resource state.
		 * @return {ManagedDatabase} Successfully updated the database.
		 */
		ManagedDatabases_CreateOrUpdate(resourceGroupName: string, managedInstanceName: string, databaseName: string, subscriptionId: string, api_version: string, requestBody: ManagedDatabase): Observable<ManagedDatabase> {
			return this.http.put<ManagedDatabase>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a managed database.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} databaseName The name of the database.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the managed database.
		 */
		ManagedDatabases_Delete(resourceGroupName: string, managedInstanceName: string, databaseName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing database.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} databaseName The name of the database.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {ManagedDatabaseUpdate} requestBody The requested database resource state.
		 * @return {ManagedDatabase} Successfully updated the database.
		 */
		ManagedDatabases_Update(resourceGroupName: string, managedInstanceName: string, databaseName: string, subscriptionId: string, api_version: string, requestBody: ManagedDatabaseUpdate): Observable<ManagedDatabase> {
			return this.http.patch<ManagedDatabase>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Completes the restore operation on a managed database.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/completeRestore
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} databaseName The name of the database.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {CompleteDatabaseRestoreDefinition} requestBody The definition for completing the restore of this managed database.
		 * @return {void} Successfully completed restore request.
		 */
		ManagedDatabases_CompleteRestore(resourceGroupName: string, managedInstanceName: string, databaseName: string, subscriptionId: string, api_version: string, requestBody: CompleteDatabaseRestoreDefinition): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/completeRestore&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of inaccessible managed databases in a managed instance
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/inaccessibleManagedDatabases
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ManagedDatabaseListResult} Successfully retrieved the list of inaccessible managed databases in a managed instance.
		 */
		ManagedDatabases_ListInaccessibleByInstance(resourceGroupName: string, managedInstanceName: string, subscriptionId: string, api_version: string): Observable<ManagedDatabaseListResult> {
			return this.http.get<ManagedDatabaseListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/inaccessibleManagedDatabases&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

