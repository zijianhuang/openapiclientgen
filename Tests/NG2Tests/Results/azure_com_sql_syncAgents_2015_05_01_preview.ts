import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An Azure SQL Database sync agent. */
	export interface SyncAgent {

		/** Properties of an Azure SQL Database sync agent. */
		properties?: SyncAgentProperties;
	}

	/** An Azure SQL Database sync agent. */
	export interface SyncAgentFormProperties {
	}
	export function CreateSyncAgentFormGroup() {
		return new FormGroup<SyncAgentFormProperties>({
		});

	}


	/** Properties of an Azure SQL Database sync agent. */
	export interface SyncAgentProperties {

		/** Expiration time of the sync agent version. */
		expiryTime?: Date | null;

		/** If the sync agent version is up to date. */
		isUpToDate?: boolean | null;

		/** Last alive time of the sync agent. */
		lastAliveTime?: Date | null;

		/** Name of the sync agent. */
		name?: string | null;

		/** State of the sync agent. */
		state?: SyncAgentPropertiesState | null;

		/** ARM resource id of the sync database in the sync agent. */
		syncDatabaseId?: string | null;

		/** Version of the sync agent. */
		version?: string | null;
	}

	/** Properties of an Azure SQL Database sync agent. */
	export interface SyncAgentPropertiesFormProperties {

		/** Expiration time of the sync agent version. */
		expiryTime: FormControl<Date | null | undefined>,

		/** If the sync agent version is up to date. */
		isUpToDate: FormControl<boolean | null | undefined>,

		/** Last alive time of the sync agent. */
		lastAliveTime: FormControl<Date | null | undefined>,

		/** Name of the sync agent. */
		name: FormControl<string | null | undefined>,

		/** State of the sync agent. */
		state: FormControl<SyncAgentPropertiesState | null | undefined>,

		/** ARM resource id of the sync database in the sync agent. */
		syncDatabaseId: FormControl<string | null | undefined>,

		/** Version of the sync agent. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateSyncAgentPropertiesFormGroup() {
		return new FormGroup<SyncAgentPropertiesFormProperties>({
			expiryTime: new FormControl<Date | null | undefined>(undefined),
			isUpToDate: new FormControl<boolean | null | undefined>(undefined),
			lastAliveTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<SyncAgentPropertiesState | null | undefined>(undefined),
			syncDatabaseId: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SyncAgentPropertiesState { Online = 0, Offline = 1, NeverConnected = 2 }


	/** Properties of an Azure SQL Database sync agent key. */
	export interface SyncAgentKeyProperties {

		/** Key of sync agent. */
		syncAgentKey?: string | null;
	}

	/** Properties of an Azure SQL Database sync agent key. */
	export interface SyncAgentKeyPropertiesFormProperties {

		/** Key of sync agent. */
		syncAgentKey: FormControl<string | null | undefined>,
	}
	export function CreateSyncAgentKeyPropertiesFormGroup() {
		return new FormGroup<SyncAgentKeyPropertiesFormProperties>({
			syncAgentKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Azure SQL Database sync agent linked database. */
	export interface SyncAgentLinkedDatabase {

		/** Properties of an Azure SQL Database sync agent linked database. */
		properties?: SyncAgentLinkedDatabaseProperties;
	}

	/** An Azure SQL Database sync agent linked database. */
	export interface SyncAgentLinkedDatabaseFormProperties {
	}
	export function CreateSyncAgentLinkedDatabaseFormGroup() {
		return new FormGroup<SyncAgentLinkedDatabaseFormProperties>({
		});

	}


	/** Properties of an Azure SQL Database sync agent linked database. */
	export interface SyncAgentLinkedDatabaseProperties {

		/** Id of the sync agent linked database. */
		databaseId?: string | null;

		/** Database name of the sync agent linked database. */
		databaseName?: string | null;

		/** Type of the sync agent linked database. */
		databaseType?: SyncAgentLinkedDatabasePropertiesDatabaseType | null;

		/** Description of the sync agent linked database. */
		description?: string | null;

		/** Server name of the sync agent linked database. */
		serverName?: string | null;

		/** User name of the sync agent linked database. */
		userName?: string | null;
	}

	/** Properties of an Azure SQL Database sync agent linked database. */
	export interface SyncAgentLinkedDatabasePropertiesFormProperties {

		/** Id of the sync agent linked database. */
		databaseId: FormControl<string | null | undefined>,

		/** Database name of the sync agent linked database. */
		databaseName: FormControl<string | null | undefined>,

		/** Type of the sync agent linked database. */
		databaseType: FormControl<SyncAgentLinkedDatabasePropertiesDatabaseType | null | undefined>,

		/** Description of the sync agent linked database. */
		description: FormControl<string | null | undefined>,

		/** Server name of the sync agent linked database. */
		serverName: FormControl<string | null | undefined>,

		/** User name of the sync agent linked database. */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateSyncAgentLinkedDatabasePropertiesFormGroup() {
		return new FormGroup<SyncAgentLinkedDatabasePropertiesFormProperties>({
			databaseId: new FormControl<string | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
			databaseType: new FormControl<SyncAgentLinkedDatabasePropertiesDatabaseType | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			serverName: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SyncAgentLinkedDatabasePropertiesDatabaseType { AzureSqlDatabase = 0, SqlServerDatabase = 1 }


	/** A list of sync agent linked databases. */
	export interface SyncAgentLinkedDatabaseListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<SyncAgentLinkedDatabase>;
	}

	/** A list of sync agent linked databases. */
	export interface SyncAgentLinkedDatabaseListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSyncAgentLinkedDatabaseListResultFormGroup() {
		return new FormGroup<SyncAgentLinkedDatabaseListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of sync agents. */
	export interface SyncAgentListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<SyncAgent>;
	}

	/** A list of sync agents. */
	export interface SyncAgentListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSyncAgentListResultFormGroup() {
		return new FormGroup<SyncAgentListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists sync agents in a server.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/syncAgents
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server on which the sync agent is hosted.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {SyncAgentListResult} Successfully retrieved the list of sync agents.
		 */
		SyncAgents_ListByServer(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string): Observable<SyncAgentListResult> {
			return this.http.get<SyncAgentListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/syncAgents&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a sync agent.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/syncAgents/{syncAgentName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server on which the sync agent is hosted.
		 * @param {string} syncAgentName The name of the sync agent.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {SyncAgent} Successfully retrieved the specified sync agent.
		 */
		SyncAgents_Get(resourceGroupName: string, serverName: string, syncAgentName: string, subscriptionId: string, api_version: string): Observable<SyncAgent> {
			return this.http.get<SyncAgent>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/syncAgents/' + (syncAgentName == null ? '' : encodeURIComponent(syncAgentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a sync agent.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/syncAgents/{syncAgentName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server on which the sync agent is hosted.
		 * @param {string} syncAgentName The name of the sync agent.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {SyncAgent} requestBody The requested sync agent resource state.
		 * @return {SyncAgent} Successfully updated the sync agent.
		 */
		SyncAgents_CreateOrUpdate(resourceGroupName: string, serverName: string, syncAgentName: string, subscriptionId: string, api_version: string, requestBody: SyncAgent): Observable<SyncAgent> {
			return this.http.put<SyncAgent>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/syncAgents/' + (syncAgentName == null ? '' : encodeURIComponent(syncAgentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a sync agent.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/syncAgents/{syncAgentName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server on which the sync agent is hosted.
		 * @param {string} syncAgentName The name of the sync agent.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the sync agent.
		 */
		SyncAgents_Delete(resourceGroupName: string, serverName: string, syncAgentName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/syncAgents/' + (syncAgentName == null ? '' : encodeURIComponent(syncAgentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generates a sync agent key.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/syncAgents/{syncAgentName}/generateKey
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server on which the sync agent is hosted.
		 * @param {string} syncAgentName The name of the sync agent.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {SyncAgentKeyProperties} Successfully generate a sync agent key.
		 */
		SyncAgents_GenerateKey(resourceGroupName: string, serverName: string, syncAgentName: string, subscriptionId: string, api_version: string): Observable<SyncAgentKeyProperties> {
			return this.http.post<SyncAgentKeyProperties>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/syncAgents/' + (syncAgentName == null ? '' : encodeURIComponent(syncAgentName)) + '/generateKey&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Lists databases linked to a sync agent.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/syncAgents/{syncAgentName}/linkedDatabases
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server on which the sync agent is hosted.
		 * @param {string} syncAgentName The name of the sync agent.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {SyncAgentLinkedDatabaseListResult} Successfully retrieved sync agent linked SQL server databases.
		 */
		SyncAgents_ListLinkedDatabases(resourceGroupName: string, serverName: string, syncAgentName: string, subscriptionId: string, api_version: string): Observable<SyncAgentLinkedDatabaseListResult> {
			return this.http.get<SyncAgentLinkedDatabaseListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/syncAgents/' + (syncAgentName == null ? '' : encodeURIComponent(syncAgentName)) + '/linkedDatabases&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

