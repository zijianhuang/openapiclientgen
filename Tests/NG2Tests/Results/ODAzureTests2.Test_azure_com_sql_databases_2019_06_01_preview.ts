import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A database resource. */
	export interface Database {

		/** Kind of database. This is metadata used for the Azure portal experience. */
		kind?: string | null;

		/** Resource that manages the database. */
		managedBy?: string | null;

		/** The database's properties. */
		properties?: DatabaseProperties;

		/** An ARM Resource SKU. */
		sku?: Sku;
	}

	/** A database resource. */
	export interface DatabaseFormProperties {

		/** Kind of database. This is metadata used for the Azure portal experience. */
		kind: FormControl<string | null | undefined>,

		/** Resource that manages the database. */
		managedBy: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseFormGroup() {
		return new FormGroup<DatabaseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			managedBy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The database's properties. */
	export interface DatabaseProperties {

		/** Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled */
		autoPauseDelay?: number | null;

		/** Collation of the metadata catalog. */
		catalogCollation?: DatabasePropertiesCatalogCollation | null;

		/** The collation of the database. */
		collation?: string | null;

		/**
		 * Specifies the mode of database creation.
		 * Default: regular database creation.
		 * Copy: creates a database as a copy of an existing database. sourceDatabaseId must be specified as the resource ID of the source database.
		 * Secondary: creates a database as a secondary replica of an existing database. sourceDatabaseId must be specified as the resource ID of the existing primary database.
		 * PointInTimeRestore: Creates a database by restoring a point in time backup of an existing database. sourceDatabaseId must be specified as the resource ID of the existing database, and restorePointInTime must be specified.
		 * Recovery: Creates a database by restoring a geo-replicated backup. sourceDatabaseId must be specified as the recoverable database resource ID to restore.
		 * Restore: Creates a database by restoring a backup of a deleted database. sourceDatabaseId must be specified. If sourceDatabaseId is the database's original resource ID, then sourceDatabaseDeletionDate must be specified. Otherwise sourceDatabaseId must be the restorable dropped database resource ID and sourceDatabaseDeletionDate is ignored. restorePointInTime may also be specified to restore from an earlier point in time.
		 * RestoreLongTermRetentionBackup: Creates a database by restoring from a long term retention vault. recoveryServicesRecoveryPointResourceId must be specified as the recovery point resource ID.
		 * Copy, Secondary, and RestoreLongTermRetentionBackup are not supported for DataWarehouse edition.
		 */
		createMode?: DatabasePropertiesCreateMode | null;

		/** The creation date of the database (ISO8601 format). */
		creationDate?: Date | null;

		/** The current service level objective name of the database. */
		currentServiceObjectiveName?: string | null;

		/** An ARM Resource SKU. */
		currentSku?: Sku;

		/** The ID of the database. */
		databaseId?: string | null;

		/** The default secondary region for this database. */
		defaultSecondaryLocation?: string | null;

		/** This records the earliest start date and time that restore is available for this database (ISO8601 format). */
		earliestRestoreDate?: Date | null;

		/** The resource identifier of the elastic pool containing this database. */
		elasticPoolId?: string | null;

		/** Failover Group resource identifier that this database belongs to. */
		failoverGroupId?: string | null;

		/** The license type to apply for this database. */
		licenseType?: DatabasePropertiesLicenseType | null;

		/** The resource identifier of the long term retention backup associated with create operation of this database. */
		longTermRetentionBackupResourceId?: string | null;

		/** The max log size for this database. */
		maxLogSizeBytes?: number | null;

		/** The max size of the database expressed in bytes. */
		maxSizeBytes?: number | null;

		/** Minimal capacity that database will always have allocated, if not paused */
		minCapacity?: number | null;

		/** The date when database was paused by user configuration or action(ISO8601 format). Null if the database is ready. */
		pausedDate?: Date | null;

		/** The number of readonly secondary replicas associated with the database. */
		readReplicaCount?: number | null;

		/** The state of read-only routing. If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica in the same region. */
		readScale?: DatabasePropertiesReadScale | null;

		/** The resource identifier of the recoverable database associated with create operation of this database. */
		recoverableDatabaseId?: string | null;

		/** The resource identifier of the recovery point associated with create operation of this database. */
		recoveryServicesRecoveryPointId?: string | null;

		/** The requested service level objective name of the database. */
		requestedServiceObjectiveName?: string | null;

		/** The resource identifier of the restorable dropped database associated with create operation of this database. */
		restorableDroppedDatabaseId?: string | null;

		/** Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. */
		restorePointInTime?: Date | null;

		/** The date when database was resumed by user action or database login (ISO8601 format). Null if the database is paused. */
		resumedDate?: Date | null;

		/** The name of the sample schema to apply when creating this database. */
		sampleName?: DatabasePropertiesSampleName | null;

		/** Specifies the time that the database was deleted. */
		sourceDatabaseDeletionDate?: Date | null;

		/** The resource identifier of the source database associated with create operation of this database. */
		sourceDatabaseId?: string | null;

		/** The status of the database. */
		status?: DatabasePropertiesStatus | null;

		/** The storage account type used to store backups for this database. Currently the only supported option is GRS (GeoRedundantStorage). */
		storageAccountType?: DatabasePropertiesStorageAccountType | null;

		/** Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones. */
		zoneRedundant?: boolean | null;
	}

	/** The database's properties. */
	export interface DatabasePropertiesFormProperties {

		/** Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled */
		autoPauseDelay: FormControl<number | null | undefined>,

		/** Collation of the metadata catalog. */
		catalogCollation: FormControl<DatabasePropertiesCatalogCollation | null | undefined>,

		/** The collation of the database. */
		collation: FormControl<string | null | undefined>,

		/**
		 * Specifies the mode of database creation.
		 * Default: regular database creation.
		 * Copy: creates a database as a copy of an existing database. sourceDatabaseId must be specified as the resource ID of the source database.
		 * Secondary: creates a database as a secondary replica of an existing database. sourceDatabaseId must be specified as the resource ID of the existing primary database.
		 * PointInTimeRestore: Creates a database by restoring a point in time backup of an existing database. sourceDatabaseId must be specified as the resource ID of the existing database, and restorePointInTime must be specified.
		 * Recovery: Creates a database by restoring a geo-replicated backup. sourceDatabaseId must be specified as the recoverable database resource ID to restore.
		 * Restore: Creates a database by restoring a backup of a deleted database. sourceDatabaseId must be specified. If sourceDatabaseId is the database's original resource ID, then sourceDatabaseDeletionDate must be specified. Otherwise sourceDatabaseId must be the restorable dropped database resource ID and sourceDatabaseDeletionDate is ignored. restorePointInTime may also be specified to restore from an earlier point in time.
		 * RestoreLongTermRetentionBackup: Creates a database by restoring from a long term retention vault. recoveryServicesRecoveryPointResourceId must be specified as the recovery point resource ID.
		 * Copy, Secondary, and RestoreLongTermRetentionBackup are not supported for DataWarehouse edition.
		 */
		createMode: FormControl<DatabasePropertiesCreateMode | null | undefined>,

		/** The creation date of the database (ISO8601 format). */
		creationDate: FormControl<Date | null | undefined>,

		/** The current service level objective name of the database. */
		currentServiceObjectiveName: FormControl<string | null | undefined>,

		/** The ID of the database. */
		databaseId: FormControl<string | null | undefined>,

		/** The default secondary region for this database. */
		defaultSecondaryLocation: FormControl<string | null | undefined>,

		/** This records the earliest start date and time that restore is available for this database (ISO8601 format). */
		earliestRestoreDate: FormControl<Date | null | undefined>,

		/** The resource identifier of the elastic pool containing this database. */
		elasticPoolId: FormControl<string | null | undefined>,

		/** Failover Group resource identifier that this database belongs to. */
		failoverGroupId: FormControl<string | null | undefined>,

		/** The license type to apply for this database. */
		licenseType: FormControl<DatabasePropertiesLicenseType | null | undefined>,

		/** The resource identifier of the long term retention backup associated with create operation of this database. */
		longTermRetentionBackupResourceId: FormControl<string | null | undefined>,

		/** The max log size for this database. */
		maxLogSizeBytes: FormControl<number | null | undefined>,

		/** The max size of the database expressed in bytes. */
		maxSizeBytes: FormControl<number | null | undefined>,

		/** Minimal capacity that database will always have allocated, if not paused */
		minCapacity: FormControl<number | null | undefined>,

		/** The date when database was paused by user configuration or action(ISO8601 format). Null if the database is ready. */
		pausedDate: FormControl<Date | null | undefined>,

		/** The number of readonly secondary replicas associated with the database. */
		readReplicaCount: FormControl<number | null | undefined>,

		/** The state of read-only routing. If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica in the same region. */
		readScale: FormControl<DatabasePropertiesReadScale | null | undefined>,

		/** The resource identifier of the recoverable database associated with create operation of this database. */
		recoverableDatabaseId: FormControl<string | null | undefined>,

		/** The resource identifier of the recovery point associated with create operation of this database. */
		recoveryServicesRecoveryPointId: FormControl<string | null | undefined>,

		/** The requested service level objective name of the database. */
		requestedServiceObjectiveName: FormControl<string | null | undefined>,

		/** The resource identifier of the restorable dropped database associated with create operation of this database. */
		restorableDroppedDatabaseId: FormControl<string | null | undefined>,

		/** Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. */
		restorePointInTime: FormControl<Date | null | undefined>,

		/** The date when database was resumed by user action or database login (ISO8601 format). Null if the database is paused. */
		resumedDate: FormControl<Date | null | undefined>,

		/** The name of the sample schema to apply when creating this database. */
		sampleName: FormControl<DatabasePropertiesSampleName | null | undefined>,

		/** Specifies the time that the database was deleted. */
		sourceDatabaseDeletionDate: FormControl<Date | null | undefined>,

		/** The resource identifier of the source database associated with create operation of this database. */
		sourceDatabaseId: FormControl<string | null | undefined>,

		/** The status of the database. */
		status: FormControl<DatabasePropertiesStatus | null | undefined>,

		/** The storage account type used to store backups for this database. Currently the only supported option is GRS (GeoRedundantStorage). */
		storageAccountType: FormControl<DatabasePropertiesStorageAccountType | null | undefined>,

		/** Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones. */
		zoneRedundant: FormControl<boolean | null | undefined>,
	}
	export function CreateDatabasePropertiesFormGroup() {
		return new FormGroup<DatabasePropertiesFormProperties>({
			autoPauseDelay: new FormControl<number | null | undefined>(undefined),
			catalogCollation: new FormControl<DatabasePropertiesCatalogCollation | null | undefined>(undefined),
			collation: new FormControl<string | null | undefined>(undefined),
			createMode: new FormControl<DatabasePropertiesCreateMode | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			currentServiceObjectiveName: new FormControl<string | null | undefined>(undefined),
			databaseId: new FormControl<string | null | undefined>(undefined),
			defaultSecondaryLocation: new FormControl<string | null | undefined>(undefined),
			earliestRestoreDate: new FormControl<Date | null | undefined>(undefined),
			elasticPoolId: new FormControl<string | null | undefined>(undefined),
			failoverGroupId: new FormControl<string | null | undefined>(undefined),
			licenseType: new FormControl<DatabasePropertiesLicenseType | null | undefined>(undefined),
			longTermRetentionBackupResourceId: new FormControl<string | null | undefined>(undefined),
			maxLogSizeBytes: new FormControl<number | null | undefined>(undefined),
			maxSizeBytes: new FormControl<number | null | undefined>(undefined),
			minCapacity: new FormControl<number | null | undefined>(undefined),
			pausedDate: new FormControl<Date | null | undefined>(undefined),
			readReplicaCount: new FormControl<number | null | undefined>(undefined),
			readScale: new FormControl<DatabasePropertiesReadScale | null | undefined>(undefined),
			recoverableDatabaseId: new FormControl<string | null | undefined>(undefined),
			recoveryServicesRecoveryPointId: new FormControl<string | null | undefined>(undefined),
			requestedServiceObjectiveName: new FormControl<string | null | undefined>(undefined),
			restorableDroppedDatabaseId: new FormControl<string | null | undefined>(undefined),
			restorePointInTime: new FormControl<Date | null | undefined>(undefined),
			resumedDate: new FormControl<Date | null | undefined>(undefined),
			sampleName: new FormControl<DatabasePropertiesSampleName | null | undefined>(undefined),
			sourceDatabaseDeletionDate: new FormControl<Date | null | undefined>(undefined),
			sourceDatabaseId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DatabasePropertiesStatus | null | undefined>(undefined),
			storageAccountType: new FormControl<DatabasePropertiesStorageAccountType | null | undefined>(undefined),
			zoneRedundant: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DatabasePropertiesCatalogCollation { DATABASE_DEFAULT = 0, SQL_Latin1_General_CP1_CI_AS = 1 }

	export enum DatabasePropertiesCreateMode { Default = 0, Copy = 1, Secondary = 2, PointInTimeRestore = 3, Restore = 4, Recovery = 5, RestoreExternalBackup = 6, RestoreExternalBackupSecondary = 7, RestoreLongTermRetentionBackup = 8, OnlineSecondary = 9 }


	/** An ARM Resource SKU. */
	export interface Sku {

		/** Capacity of the particular SKU. */
		capacity?: number | null;

		/** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
		family?: string | null;

		/**
		 * The name of the SKU, typically, a letter + Number code, e.g. P3.
		 * Required
		 */
		name: string;

		/** Size of the particular SKU */
		size?: string | null;

		/** The tier or edition of the particular SKU, e.g. Basic, Premium. */
		tier?: string | null;
	}

	/** An ARM Resource SKU. */
	export interface SkuFormProperties {

		/** Capacity of the particular SKU. */
		capacity: FormControl<number | null | undefined>,

		/** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
		family: FormControl<string | null | undefined>,

		/**
		 * The name of the SKU, typically, a letter + Number code, e.g. P3.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Size of the particular SKU */
		size: FormControl<string | null | undefined>,

		/** The tier or edition of the particular SKU, e.g. Basic, Premium. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DatabasePropertiesLicenseType { LicenseIncluded = 0, BasePrice = 1 }

	export enum DatabasePropertiesReadScale { Enabled = 0, Disabled = 1 }

	export enum DatabasePropertiesSampleName { AdventureWorksLT = 0, WideWorldImportersStd = 1, WideWorldImportersFull = 2 }

	export enum DatabasePropertiesStatus { Online = 0, Restoring = 1, RecoveryPending = 2, Recovering = 3, Suspect = 4, Offline = 5, Standby = 6, Shutdown = 7, EmergencyMode = 8, AutoClosed = 9, Copying = 10, Creating = 11, Inaccessible = 12, OfflineSecondary = 13, Pausing = 14, Paused = 15, Resuming = 16, Scaling = 17, OfflineChangingDwPerformanceTiers = 18, OnlineChangingDwPerformanceTiers = 19, Disabled = 20 }

	export enum DatabasePropertiesStorageAccountType { GRS = 0, LRS = 1, ZRS = 2 }


	/** A list of databases. */
	export interface DatabaseListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<Database>;
	}

	/** A list of databases. */
	export interface DatabaseListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseListResultFormGroup() {
		return new FormGroup<DatabaseListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A database resource. */
	export interface DatabaseUpdate {

		/** The database's properties. */
		properties?: DatabaseProperties;

		/** An ARM Resource SKU. */
		sku?: Sku;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** A database resource. */
	export interface DatabaseUpdateFormProperties {

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateDatabaseUpdateFormGroup() {
		return new FormGroup<DatabaseUpdateFormProperties>({
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


	/** Contains the information necessary to perform a resource move (rename). */
	export interface ResourceMoveDefinition {

		/**
		 * The target ID for the resource
		 * Required
		 */
		id: string;
	}

	/** Contains the information necessary to perform a resource move (rename). */
	export interface ResourceMoveDefinitionFormProperties {

		/**
		 * The target ID for the resource
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateResourceMoveDefinitionFormGroup() {
		return new FormGroup<ResourceMoveDefinitionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		 * Gets a list of databases.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {DatabaseListResult} Successfully retrieved the list of databases.
		 */
		Databases_ListByServer(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string): Observable<DatabaseListResult> {
			return this.http.get<DatabaseListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a database.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {Database} Successfully retrieved the specified database.
		 */
		Databases_Get(resourceGroupName: string, serverName: string, databaseName: string, subscriptionId: string, api_version: string): Observable<Database> {
			return this.http.get<Database>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new database or updates an existing database.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {Database} requestBody The requested database resource state.
		 * @return {Database} Successfully updated the database.
		 */
		Databases_CreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, subscriptionId: string, api_version: string, requestBody: Database): Observable<Database> {
			return this.http.put<Database>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the database.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the database.
		 */
		Databases_Delete(resourceGroupName: string, serverName: string, databaseName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing database.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {DatabaseUpdate} requestBody The requested database resource state.
		 * @return {Database} Successfully updated the database.
		 */
		Databases_Update(resourceGroupName: string, serverName: string, databaseName: string, subscriptionId: string, api_version: string, requestBody: DatabaseUpdate): Observable<Database> {
			return this.http.patch<Database>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Failovers a database.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/failover
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database to failover.
		 * @param {Databases_FailoverReplicaType} replicaType The type of replica to be failed over.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully completed database failover.
		 */
		Databases_Failover(resourceGroupName: string, serverName: string, databaseName: string, replicaType: Databases_FailoverReplicaType | null | undefined, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/failover&replicaType=' + replicaType + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Renames a database.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/move
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database to rename.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {ResourceMoveDefinition} requestBody The resource move definition for renaming this database.
		 * @return {void} Successfully renamed the database.
		 */
		Databases_Rename(resourceGroupName: string, serverName: string, databaseName: string, subscriptionId: string, api_version: string, requestBody: ResourceMoveDefinition): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/move&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Pauses a database.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/pause
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database to be paused.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {Database} Successfully paused the database.
		 */
		Databases_Pause(resourceGroupName: string, serverName: string, databaseName: string, subscriptionId: string, api_version: string): Observable<Database> {
			return this.http.post<Database>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/pause&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Resumes a database.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/resume
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database to be resumed.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {Database} Successfully resumed the database.
		 */
		Databases_Resume(resourceGroupName: string, serverName: string, databaseName: string, subscriptionId: string, api_version: string): Observable<Database> {
			return this.http.post<Database>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/resume&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Upgrades a data warehouse.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/upgradeDataWarehouse
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database to be upgraded.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully upgraded the data warehouse.
		 */
		Databases_UpgradeDataWarehouse(resourceGroupName: string, serverName: string, databaseName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/upgradeDataWarehouse&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of databases in an elastic pool.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/databases
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} elasticPoolName The name of the elastic pool.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {DatabaseListResult} Successfully retrieved a list of databases in an elastic pool.
		 */
		Databases_ListByElasticPool(resourceGroupName: string, serverName: string, elasticPoolName: string, subscriptionId: string, api_version: string): Observable<DatabaseListResult> {
			return this.http.get<DatabaseListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/elasticPools/' + (elasticPoolName == null ? '' : encodeURIComponent(elasticPoolName)) + '/databases&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of inaccessible databases in a logical server
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/inaccessibleDatabases
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {DatabaseListResult} Successfully retrieved the list of inaccessible databases in a logical server
		 */
		Databases_ListInaccessibleByServer(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string): Observable<DatabaseListResult> {
			return this.http.get<DatabaseListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/inaccessibleDatabases&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export enum Databases_FailoverReplicaType { Primary = 0, ReadableSecondary = 1 }

}

