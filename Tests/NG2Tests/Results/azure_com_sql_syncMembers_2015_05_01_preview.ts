import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

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


	/** An Azure SQL Database sync member. */
	export interface SyncMember {

		/** Properties of a sync member. */
		properties?: SyncMemberProperties;
	}

	/** An Azure SQL Database sync member. */
	export interface SyncMemberFormProperties {
	}
	export function CreateSyncMemberFormGroup() {
		return new FormGroup<SyncMemberFormProperties>({
		});

	}


	/** Properties of a sync member. */
	export interface SyncMemberProperties {

		/** Database name of the member database in the sync member. */
		databaseName?: string | null;

		/** Database type of the sync member. */
		databaseType?: SyncMemberPropertiesDatabaseType | null;

		/** Password of the member database in the sync member. */
		password?: string | null;

		/** Server name of the member database in the sync member */
		serverName?: string | null;

		/** SQL Server database id of the sync member. */
		sqlServerDatabaseId?: string | null;

		/** ARM resource id of the sync agent in the sync member. */
		syncAgentId?: string | null;

		/** Sync direction of the sync member. */
		syncDirection?: SyncMemberPropertiesSyncDirection | null;

		/** Sync state of the sync member. */
		syncState?: SyncMemberPropertiesSyncState | null;

		/** User name of the member database in the sync member. */
		userName?: string | null;
	}

	/** Properties of a sync member. */
	export interface SyncMemberPropertiesFormProperties {

		/** Database name of the member database in the sync member. */
		databaseName: FormControl<string | null | undefined>,

		/** Database type of the sync member. */
		databaseType: FormControl<SyncMemberPropertiesDatabaseType | null | undefined>,

		/** Password of the member database in the sync member. */
		password: FormControl<string | null | undefined>,

		/** Server name of the member database in the sync member */
		serverName: FormControl<string | null | undefined>,

		/** SQL Server database id of the sync member. */
		sqlServerDatabaseId: FormControl<string | null | undefined>,

		/** ARM resource id of the sync agent in the sync member. */
		syncAgentId: FormControl<string | null | undefined>,

		/** Sync direction of the sync member. */
		syncDirection: FormControl<SyncMemberPropertiesSyncDirection | null | undefined>,

		/** Sync state of the sync member. */
		syncState: FormControl<SyncMemberPropertiesSyncState | null | undefined>,

		/** User name of the member database in the sync member. */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateSyncMemberPropertiesFormGroup() {
		return new FormGroup<SyncMemberPropertiesFormProperties>({
			databaseName: new FormControl<string | null | undefined>(undefined),
			databaseType: new FormControl<SyncMemberPropertiesDatabaseType | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			serverName: new FormControl<string | null | undefined>(undefined),
			sqlServerDatabaseId: new FormControl<string | null | undefined>(undefined),
			syncAgentId: new FormControl<string | null | undefined>(undefined),
			syncDirection: new FormControl<SyncMemberPropertiesSyncDirection | null | undefined>(undefined),
			syncState: new FormControl<SyncMemberPropertiesSyncState | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SyncMemberPropertiesDatabaseType { AzureSqlDatabase = 'AzureSqlDatabase', SqlServerDatabase = 'SqlServerDatabase' }

	export enum SyncMemberPropertiesSyncDirection { Bidirectional = 'Bidirectional', OneWayMemberToHub = 'OneWayMemberToHub', OneWayHubToMember = 'OneWayHubToMember' }

	export enum SyncMemberPropertiesSyncState { SyncInProgress = 'SyncInProgress', SyncSucceeded = 'SyncSucceeded', SyncFailed = 'SyncFailed', DisabledTombstoneCleanup = 'DisabledTombstoneCleanup', DisabledBackupRestore = 'DisabledBackupRestore', SyncSucceededWithWarnings = 'SyncSucceededWithWarnings', SyncCancelling = 'SyncCancelling', SyncCancelled = 'SyncCancelled', UnProvisioned = 'UnProvisioned', Provisioning = 'Provisioning', Provisioned = 'Provisioned', ProvisionFailed = 'ProvisionFailed', DeProvisioning = 'DeProvisioning', DeProvisioned = 'DeProvisioned', DeProvisionFailed = 'DeProvisionFailed', Reprovisioning = 'Reprovisioning', ReprovisionFailed = 'ReprovisionFailed', UnReprovisioned = 'UnReprovisioned' }


	/** A list of Azure SQL Database sync members. */
	export interface SyncMemberListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<SyncMember>;
	}

	/** A list of Azure SQL Database sync members. */
	export interface SyncMemberListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSyncMemberListResultFormGroup() {
		return new FormGroup<SyncMemberListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists sync members in the given sync group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database on which the sync group is hosted.
		 * @param {string} syncGroupName The name of the sync group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {SyncMemberListResult} Successfully retrieved the list of sync members.
		 */
		SyncMembers_ListBySyncGroup(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, subscriptionId: string, api_version: string): Observable<SyncMemberListResult> {
			return this.http.get<SyncMemberListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/syncMembers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a sync member.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database on which the sync group is hosted.
		 * @param {string} syncGroupName The name of the sync group on which the sync member is hosted.
		 * @param {string} syncMemberName The name of the sync member.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {SyncMember} Successfully retrieved the specified sync member.
		 */
		SyncMembers_Get(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, subscriptionId: string, api_version: string): Observable<SyncMember> {
			return this.http.get<SyncMember>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/syncMembers/' + (syncMemberName == null ? '' : encodeURIComponent(syncMemberName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a sync member.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database on which the sync group is hosted.
		 * @param {string} syncGroupName The name of the sync group on which the sync member is hosted.
		 * @param {string} syncMemberName The name of the sync member.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {SyncMember} requestBody The requested sync member resource state.
		 * @return {SyncMember} Successfully updated the sync member.
		 */
		SyncMembers_CreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, subscriptionId: string, api_version: string, requestBody: SyncMember): Observable<SyncMember> {
			return this.http.put<SyncMember>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/syncMembers/' + (syncMemberName == null ? '' : encodeURIComponent(syncMemberName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a sync member.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database on which the sync group is hosted.
		 * @param {string} syncGroupName The name of the sync group on which the sync member is hosted.
		 * @param {string} syncMemberName The name of the sync member.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the sync member.
		 */
		SyncMembers_Delete(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/syncMembers/' + (syncMemberName == null ? '' : encodeURIComponent(syncMemberName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing sync member.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database on which the sync group is hosted.
		 * @param {string} syncGroupName The name of the sync group on which the sync member is hosted.
		 * @param {string} syncMemberName The name of the sync member.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {SyncMember} requestBody The requested sync member resource state.
		 * @return {SyncMember} Successfully updated the sync member.
		 */
		SyncMembers_Update(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, subscriptionId: string, api_version: string, requestBody: SyncMember): Observable<SyncMember> {
			return this.http.patch<SyncMember>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/syncMembers/' + (syncMemberName == null ? '' : encodeURIComponent(syncMemberName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Refreshes a sync member database schema.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}/refreshSchema
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database on which the sync group is hosted.
		 * @param {string} syncGroupName The name of the sync group on which the sync member is hosted.
		 * @param {string} syncMemberName The name of the sync member.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully refreshed a sync member schema.
		 */
		SyncMembers_RefreshMemberSchema(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/syncMembers/' + (syncMemberName == null ? '' : encodeURIComponent(syncMemberName)) + '/refreshSchema&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a sync member database schema.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}/schemas
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database on which the sync group is hosted.
		 * @param {string} syncGroupName The name of the sync group on which the sync member is hosted.
		 * @param {string} syncMemberName The name of the sync member.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {SyncFullSchemaPropertiesListResult} Successfully get a sync member schema.
		 */
		SyncMembers_ListMemberSchemas(resourceGroupName: string, serverName: string, databaseName: string, syncGroupName: string, syncMemberName: string, subscriptionId: string, api_version: string): Observable<SyncFullSchemaPropertiesListResult> {
			return this.http.get<SyncFullSchemaPropertiesListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/syncGroups/' + (syncGroupName == null ? '' : encodeURIComponent(syncGroupName)) + '/syncMembers/' + (syncMemberName == null ? '' : encodeURIComponent(syncMemberName)) + '/schemas&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

