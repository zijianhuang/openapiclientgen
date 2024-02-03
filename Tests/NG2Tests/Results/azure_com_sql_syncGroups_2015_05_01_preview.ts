import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A list of sync database ID properties. */
	export interface SyncDatabaseIdListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<SyncDatabaseIdProperties>;
	}

	/** A list of sync database ID properties. */
	export interface SyncDatabaseIdListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSyncDatabaseIdListResultFormGroup() {
		return new FormGroup<SyncDatabaseIdListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the sync database id. */
	export interface SyncDatabaseIdProperties {

		/** ARM resource id of sync database. */
		id?: string | null;
	}

	/** Properties of the sync database id. */
	export interface SyncDatabaseIdPropertiesFormProperties {

		/** ARM resource id of sync database. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSyncDatabaseIdPropertiesFormGroup() {
		return new FormGroup<SyncDatabaseIdPropertiesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the database full schema. */
	export interface SyncFullSchemaProperties {

		/** Last update time of the database schema. */
		lastUpdateTime?: Date | null;

		/** List of tables in the database full schema. */
		tables?: Array<SyncFullSchemaTable>;
	}

	/** Properties of the database full schema. */
	export interface SyncFullSchemaPropertiesFormProperties {

		/** Last update time of the database schema. */
		lastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateSyncFullSchemaPropertiesFormGroup() {
		return new FormGroup<SyncFullSchemaPropertiesFormProperties>({
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Properties of the table in the database full schema. */
	export interface SyncFullSchemaTable {

		/** List of columns in the table of database full schema. */
		columns?: Array<SyncFullSchemaTableColumn>;

		/** Error id of the table. */
		errorId?: string | null;

		/** If there is error in the table. */
		hasError?: boolean | null;

		/** Name of the table. */
		name?: string | null;

		/** Quoted name of the table. */
		quotedName?: string | null;
	}

	/** Properties of the table in the database full schema. */
	export interface SyncFullSchemaTableFormProperties {

		/** Error id of the table. */
		errorId: FormControl<string | null | undefined>,

		/** If there is error in the table. */
		hasError: FormControl<boolean | null | undefined>,

		/** Name of the table. */
		name: FormControl<string | null | undefined>,

		/** Quoted name of the table. */
		quotedName: FormControl<string | null | undefined>,
	}
	export function CreateSyncFullSchemaTableFormGroup() {
		return new FormGroup<SyncFullSchemaTableFormProperties>({
			errorId: new FormControl<string | null | undefined>(undefined),
			hasError: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			quotedName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the column in the table of database full schema. */
	export interface SyncFullSchemaTableColumn {

		/** Data size of the column. */
		dataSize?: string | null;

		/** Data type of the column. */
		dataType?: string | null;

		/** Error id of the column. */
		errorId?: string | null;

		/** If there is error in the table. */
		hasError?: boolean | null;

		/** If it is the primary key of the table. */
		isPrimaryKey?: boolean | null;

		/** Name of the column. */
		name?: string | null;

		/** Quoted name of the column. */
		quotedName?: string | null;
	}

	/** Properties of the column in the table of database full schema. */
	export interface SyncFullSchemaTableColumnFormProperties {

		/** Data size of the column. */
		dataSize: FormControl<string | null | undefined>,

		/** Data type of the column. */
		dataType: FormControl<string | null | undefined>,

		/** Error id of the column. */
		errorId: FormControl<string | null | undefined>,

		/** If there is error in the table. */
		hasError: FormControl<boolean | null | undefined>,

		/** If it is the primary key of the table. */
		isPrimaryKey: FormControl<boolean | null | undefined>,

		/** Name of the column. */
		name: FormControl<string | null | undefined>,

		/** Quoted name of the column. */
		quotedName: FormControl<string | null | undefined>,
	}
	export function CreateSyncFullSchemaTableColumnFormGroup() {
		return new FormGroup<SyncFullSchemaTableColumnFormProperties>({
			dataSize: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<string | null | undefined>(undefined),
			errorId: new FormControl<string | null | undefined>(undefined),
			hasError: new FormControl<boolean | null | undefined>(undefined),
			isPrimaryKey: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			quotedName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of sync schema properties. */
	export interface SyncFullSchemaPropertiesListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<SyncFullSchemaProperties>;
	}

	/** A list of sync schema properties. */
	export interface SyncFullSchemaPropertiesListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSyncFullSchemaPropertiesListResultFormGroup() {
		return new FormGroup<SyncFullSchemaPropertiesListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Azure SQL Database sync group. */
	export interface SyncGroup {

		/** Properties of a sync group. */
		properties?: SyncGroupProperties;
	}

	/** An Azure SQL Database sync group. */
	export interface SyncGroupFormProperties {
	}
	export function CreateSyncGroupFormGroup() {
		return new FormGroup<SyncGroupFormProperties>({
		});

	}


	/** Properties of a sync group. */
	export interface SyncGroupProperties {

		/** Conflict resolution policy of the sync group. */
		conflictResolutionPolicy?: SyncGroupPropertiesConflictResolutionPolicy | null;

		/** Password for the sync group hub database credential. */
		hubDatabasePassword?: string | null;

		/** User name for the sync group hub database credential. */
		hubDatabaseUserName?: string | null;

		/** Sync interval of the sync group. */
		interval?: number | null;

		/** Last sync time of the sync group. */
		lastSyncTime?: Date | null;

		/** Properties of sync group schema. */
		schema?: SyncGroupSchema;

		/** ARM resource id of the sync database in the sync group. */
		syncDatabaseId?: string | null;

		/** Sync state of the sync group. */
		syncState?: SyncGroupPropertiesSyncState | null;
	}

	/** Properties of a sync group. */
	export interface SyncGroupPropertiesFormProperties {

		/** Conflict resolution policy of the sync group. */
		conflictResolutionPolicy: FormControl<SyncGroupPropertiesConflictResolutionPolicy | null | undefined>,

		/** Password for the sync group hub database credential. */
		hubDatabasePassword: FormControl<string | null | undefined>,

		/** User name for the sync group hub database credential. */
		hubDatabaseUserName: FormControl<string | null | undefined>,

		/** Sync interval of the sync group. */
		interval: FormControl<number | null | undefined>,

		/** Last sync time of the sync group. */
		lastSyncTime: FormControl<Date | null | undefined>,

		/** ARM resource id of the sync database in the sync group. */
		syncDatabaseId: FormControl<string | null | undefined>,

		/** Sync state of the sync group. */
		syncState: FormControl<SyncGroupPropertiesSyncState | null | undefined>,
	}
	export function CreateSyncGroupPropertiesFormGroup() {
		return new FormGroup<SyncGroupPropertiesFormProperties>({
			conflictResolutionPolicy: new FormControl<SyncGroupPropertiesConflictResolutionPolicy | null | undefined>(undefined),
			hubDatabasePassword: new FormControl<string | null | undefined>(undefined),
			hubDatabaseUserName: new FormControl<string | null | undefined>(undefined),
			interval: new FormControl<number | null | undefined>(undefined),
			lastSyncTime: new FormControl<Date | null | undefined>(undefined),
			syncDatabaseId: new FormControl<string | null | undefined>(undefined),
			syncState: new FormControl<SyncGroupPropertiesSyncState | null | undefined>(undefined),
		});

	}

	export enum SyncGroupPropertiesConflictResolutionPolicy { HubWin = 'HubWin', MemberWin = 'MemberWin' }


	/** Properties of sync group schema. */
	export interface SyncGroupSchema {

		/** Name of master sync member where the schema is from. */
		masterSyncMemberName?: string | null;

		/** List of tables in sync group schema. */
		tables?: Array<SyncGroupSchemaTable>;
	}

	/** Properties of sync group schema. */
	export interface SyncGroupSchemaFormProperties {

		/** Name of master sync member where the schema is from. */
		masterSyncMemberName: FormControl<string | null | undefined>,
	}
	export function CreateSyncGroupSchemaFormGroup() {
		return new FormGroup<SyncGroupSchemaFormProperties>({
			masterSyncMemberName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of table in sync group schema. */
	export interface SyncGroupSchemaTable {

		/** List of columns in sync group schema. */
		columns?: Array<SyncGroupSchemaTableColumn>;

		/** Quoted name of sync group schema table. */
		quotedName?: string | null;
	}

	/** Properties of table in sync group schema. */
	export interface SyncGroupSchemaTableFormProperties {

		/** Quoted name of sync group schema table. */
		quotedName: FormControl<string | null | undefined>,
	}
	export function CreateSyncGroupSchemaTableFormGroup() {
		return new FormGroup<SyncGroupSchemaTableFormProperties>({
			quotedName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of column in sync group table. */
	export interface SyncGroupSchemaTableColumn {

		/** Data size of the column. */
		dataSize?: string | null;

		/** Data type of the column. */
		dataType?: string | null;

		/** Quoted name of sync group table column. */
		quotedName?: string | null;
	}

	/** Properties of column in sync group table. */
	export interface SyncGroupSchemaTableColumnFormProperties {

		/** Data size of the column. */
		dataSize: FormControl<string | null | undefined>,

		/** Data type of the column. */
		dataType: FormControl<string | null | undefined>,

		/** Quoted name of sync group table column. */
		quotedName: FormControl<string | null | undefined>,
	}
	export function CreateSyncGroupSchemaTableColumnFormGroup() {
		return new FormGroup<SyncGroupSchemaTableColumnFormProperties>({
			dataSize: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<string | null | undefined>(undefined),
			quotedName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SyncGroupPropertiesSyncState { NotReady = 'NotReady', Error = 'Error', Warning = 'Warning', Progressing = 'Progressing', Good = 'Good' }


	/** A list of sync groups. */
	export interface SyncGroupListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<SyncGroup>;
	}

	/** A list of sync groups. */
	export interface SyncGroupListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSyncGroupListResultFormGroup() {
		return new FormGroup<SyncGroupListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of sync group log properties. */
	export interface SyncGroupLogListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<SyncGroupLogProperties>;
	}

	/** A list of sync group log properties. */
	export interface SyncGroupLogListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSyncGroupLogListResultFormGroup() {
		return new FormGroup<SyncGroupLogListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of an Azure SQL Database sync group log. */
	export interface SyncGroupLogProperties {

		/** Details of the sync group log. */
		details?: string | null;

		/** OperationStatus of the sync group log. */
		operationStatus?: string | null;

		/** Source of the sync group log. */
		source?: string | null;

		/** Timestamp of the sync group log. */
		timestamp?: Date | null;

		/** TracingId of the sync group log. */
		tracingId?: string | null;

		/** Type of the sync group log. */
		type?: SyncGroupLogPropertiesType | null;
	}

	/** Properties of an Azure SQL Database sync group log. */
	export interface SyncGroupLogPropertiesFormProperties {

		/** Details of the sync group log. */
		details: FormControl<string | null | undefined>,

		/** OperationStatus of the sync group log. */
		operationStatus: FormControl<string | null | undefined>,

		/** Source of the sync group log. */
		source: FormControl<string | null | undefined>,

		/** Timestamp of the sync group log. */
		timestamp: FormControl<Date | null | undefined>,

		/** TracingId of the sync group log. */
		tracingId: FormControl<string | null | undefined>,

		/** Type of the sync group log. */
		type: FormControl<SyncGroupLogPropertiesType | null | undefined>,
	}
	export function CreateSyncGroupLogPropertiesFormGroup() {
		return new FormGroup<SyncGroupLogPropertiesFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			operationStatus: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			tracingId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SyncGroupLogPropertiesType | null | undefined>(undefined),
		});

	}

	export enum SyncGroupLogPropertiesType { All = 'All', Error = 'Error', Warning = 'Warning', Success = 'Success' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a collection of sync database ids.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/syncDatabaseIds
		 * @param {string} locationName The name of the region where the resource is located.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {SyncDatabaseIdListResult} Successfully retrieved collection of sync database ids.
		 */
		SyncGroups_ListSyncDatabaseIds(locationName: string, subscriptionId: string, api_version: string): Observable<SyncDatabaseIdListResult> {
			return this.http.get<SyncDatabaseIdListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Sql/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/syncDatabaseIds&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists sync groups under a hub database.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database on which the sync group is hosted.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {SyncGroupListResult} Successfully retrieved the list of sync groups.
		 */
		SyncGroups_ListByDatabase(resourceGroupName: string, serverName: string, databaseName: string, subscriptionId: string, api_version: string): Observable<SyncGroupListResult> {
			return this.http.get<SyncGroupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/syncGroups&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a sync group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database on which the sync group is hosted.
		 * @param {string} syncGroupName The name of the sync group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {SyncGroup} Successfully retrieved the specified sync group.
		 */
		SyncGroups_Get(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, subscriptionId: string, api_version: string): Observable<SyncGroup> {
			return this.http.get<SyncGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a sync group.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database on which the sync group is hosted.
		 * @param {string} syncGroupName The name of the sync group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {SyncGroup} requestBody The requested sync group resource state.
		 * @return {SyncGroup} Successfully updated the sync group.
		 */
		SyncGroups_CreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, subscriptionId: string, api_version: string, requestBody: SyncGroup): Observable<SyncGroup> {
			return this.http.put<SyncGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a sync group.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database on which the sync group is hosted.
		 * @param {string} syncGroupName The name of the sync group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the sync group.
		 */
		SyncGroups_Delete(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a sync group.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database on which the sync group is hosted.
		 * @param {string} syncGroupName The name of the sync group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {SyncGroup} requestBody The requested sync group resource state.
		 * @return {SyncGroup} Successfully updated the sync group.
		 */
		SyncGroups_Update(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, subscriptionId: string, api_version: string, requestBody: SyncGroup): Observable<SyncGroup> {
			return this.http.patch<SyncGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels a sync group synchronization.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/cancelSync
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database on which the sync group is hosted.
		 * @param {string} syncGroupName The name of the sync group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully cancel a sync group synchronization.
		 */
		SyncGroups_CancelSync(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/cancelSync&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a collection of hub database schemas.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/hubSchemas
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database on which the sync group is hosted.
		 * @param {string} syncGroupName The name of the sync group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {SyncFullSchemaPropertiesListResult} Successfully get a sync group hub database schema.
		 */
		SyncGroups_ListHubSchemas(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, subscriptionId: string, api_version: string): Observable<SyncFullSchemaPropertiesListResult> {
			return this.http.get<SyncFullSchemaPropertiesListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/hubSchemas&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a collection of sync group logs.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/logs
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database on which the sync group is hosted.
		 * @param {string} syncGroupName The name of the sync group.
		 * @param {string} startTime Get logs generated after this time.
		 * @param {string} endTime Get logs generated before this time.
		 * @param {SyncGroupLogPropertiesType} type The types of logs to retrieve.
		 * @param {string} continuationToken The continuation token for this operation.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {SyncGroupLogListResult} Successfully retrieved sync group logs.
		 */
		SyncGroups_ListLogs(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, startTime: string, endTime: string, type: SyncGroupLogPropertiesType, continuationToken: string | null | undefined, subscriptionId: string, api_version: string): Observable<SyncGroupLogListResult> {
			return this.http.get<SyncGroupLogListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/logs&startTime=' + (startTime == null ? '' : encodeURIComponent(startTime)) + '&endTime=' + (endTime == null ? '' : encodeURIComponent(endTime)) + '&type=' + type + '&continuationToken=' + (continuationToken == null ? '' : encodeURIComponent(continuationToken)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Refreshes a hub database schema.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/refreshHubSchema
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database on which the sync group is hosted.
		 * @param {string} syncGroupName The name of the sync group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully refreshed a sync hub schema.
		 */
		SyncGroups_RefreshHubSchema(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/refreshHubSchema&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Triggers a sync group synchronization.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/triggerSync
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database on which the sync group is hosted.
		 * @param {string} syncGroupName The name of the sync group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully triggered a sync group synchronization.
		 */
		SyncGroups_TriggerSync(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/triggerSync&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

