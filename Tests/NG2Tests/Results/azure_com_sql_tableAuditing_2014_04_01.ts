import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A database connection policy. */
	export interface DatabaseConnectionPolicy {

		/** Resource kind. */
		kind?: string | null;

		/** Resource location. */
		location?: string | null;

		/** Properties of a database connection policy. */
		properties?: DatabaseConnectionPolicyProperties;
	}

	/** A database connection policy. */
	export interface DatabaseConnectionPolicyFormProperties {

		/** Resource kind. */
		kind: FormControl<string | null | undefined>,

		/** Resource location. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseConnectionPolicyFormGroup() {
		return new FormGroup<DatabaseConnectionPolicyFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a database connection policy. */
	export interface DatabaseConnectionPolicyProperties {

		/** The fully qualified host name of the auditing proxy. */
		proxyDnsName?: string | null;

		/** The port number of the auditing proxy. */
		proxyPort?: string | null;

		/** The state of proxy redirection. */
		redirectionState?: string | null;

		/** The state of security access. */
		securityEnabledAccess?: string | null;

		/** The connection policy state. */
		state?: string | null;

		/** Whether server default is enabled or disabled. */
		useServerDefault?: string | null;

		/** The visibility of the auditing proxy. */
		visibility?: string | null;
	}

	/** Properties of a database connection policy. */
	export interface DatabaseConnectionPolicyPropertiesFormProperties {

		/** The fully qualified host name of the auditing proxy. */
		proxyDnsName: FormControl<string | null | undefined>,

		/** The port number of the auditing proxy. */
		proxyPort: FormControl<string | null | undefined>,

		/** The state of proxy redirection. */
		redirectionState: FormControl<string | null | undefined>,

		/** The state of security access. */
		securityEnabledAccess: FormControl<string | null | undefined>,

		/** The connection policy state. */
		state: FormControl<string | null | undefined>,

		/** Whether server default is enabled or disabled. */
		useServerDefault: FormControl<string | null | undefined>,

		/** The visibility of the auditing proxy. */
		visibility: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseConnectionPolicyPropertiesFormGroup() {
		return new FormGroup<DatabaseConnectionPolicyPropertiesFormProperties>({
			proxyDnsName: new FormControl<string | null | undefined>(undefined),
			proxyPort: new FormControl<string | null | undefined>(undefined),
			redirectionState: new FormControl<string | null | undefined>(undefined),
			securityEnabledAccess: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			useServerDefault: new FormControl<string | null | undefined>(undefined),
			visibility: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A database table auditing policy. */
	export interface DatabaseTableAuditingPolicy {

		/** Resource kind. */
		kind?: string | null;

		/** Resource location. */
		location?: string | null;

		/** Properties of a database table auditing policy. */
		properties?: DatabaseTableAuditingPolicyProperties;
	}

	/** A database table auditing policy. */
	export interface DatabaseTableAuditingPolicyFormProperties {

		/** Resource kind. */
		kind: FormControl<string | null | undefined>,

		/** Resource location. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseTableAuditingPolicyFormGroup() {
		return new FormGroup<DatabaseTableAuditingPolicyFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response to a list database table auditing policies request. */
	export interface DatabaseTableAuditingPolicyListResult {

		/**
		 * The list of database table auditing policies.
		 * Required
		 */
		value: Array<DatabaseTableAuditingPolicy>;
	}

	/** Represents the response to a list database table auditing policies request. */
	export interface DatabaseTableAuditingPolicyListResultFormProperties {
	}
	export function CreateDatabaseTableAuditingPolicyListResultFormGroup() {
		return new FormGroup<DatabaseTableAuditingPolicyListResultFormProperties>({
		});

	}


	/** Properties of a database table auditing policy. */
	export interface DatabaseTableAuditingPolicyProperties extends TableAuditingPolicyProperties {

		/** Whether server default is enabled or disabled. */
		useServerDefault?: string | null;
	}

	/** Properties of a database table auditing policy. */
	export interface DatabaseTableAuditingPolicyPropertiesFormProperties extends TableAuditingPolicyPropertiesFormProperties {

		/** Whether server default is enabled or disabled. */
		useServerDefault: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseTableAuditingPolicyPropertiesFormGroup() {
		return new FormGroup<DatabaseTableAuditingPolicyPropertiesFormProperties>({
			auditLogsTableName: new FormControl<string | null | undefined>(undefined),
			auditingState: new FormControl<string | null | undefined>(undefined),
			eventTypesToAudit: new FormControl<string | null | undefined>(undefined),
			fullAuditLogsTableName: new FormControl<string | null | undefined>(undefined),
			retentionDays: new FormControl<string | null | undefined>(undefined),
			storageAccountKey: new FormControl<string | null | undefined>(undefined),
			storageAccountName: new FormControl<string | null | undefined>(undefined),
			storageAccountResourceGroupName: new FormControl<string | null | undefined>(undefined),
			storageAccountSecondaryKey: new FormControl<string | null | undefined>(undefined),
			storageAccountSubscriptionId: new FormControl<string | null | undefined>(undefined),
			storageTableEndpoint: new FormControl<string | null | undefined>(undefined),
			useServerDefault: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A server table auditing policy. */
	export interface ServerTableAuditingPolicy {

		/** Resource kind. */
		kind?: string | null;

		/** Resource location. */
		location?: string | null;

		/** Properties of a server table auditing policy. */
		properties?: ServerTableAuditingPolicyProperties;
	}

	/** A server table auditing policy. */
	export interface ServerTableAuditingPolicyFormProperties {

		/** Resource kind. */
		kind: FormControl<string | null | undefined>,

		/** Resource location. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateServerTableAuditingPolicyFormGroup() {
		return new FormGroup<ServerTableAuditingPolicyFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response to a list server table auditing policies request. */
	export interface ServerTableAuditingPolicyListResult {

		/**
		 * The list of server table auditing policies.
		 * Required
		 */
		value: Array<ServerTableAuditingPolicy>;
	}

	/** Represents the response to a list server table auditing policies request. */
	export interface ServerTableAuditingPolicyListResultFormProperties {
	}
	export function CreateServerTableAuditingPolicyListResultFormGroup() {
		return new FormGroup<ServerTableAuditingPolicyListResultFormProperties>({
		});

	}


	/** Properties of a server table auditing policy. */
	export interface ServerTableAuditingPolicyProperties {
	}

	/** Properties of a server table auditing policy. */
	export interface ServerTableAuditingPolicyPropertiesFormProperties {
	}
	export function CreateServerTableAuditingPolicyPropertiesFormGroup() {
		return new FormGroup<ServerTableAuditingPolicyPropertiesFormProperties>({
		});

	}


	/** Properties of a table auditing policy. */
	export interface TableAuditingPolicyProperties {

		/** The audit logs table name. */
		auditLogsTableName?: string | null;

		/** The state of the policy. */
		auditingState?: string | null;

		/** Comma-separated list of event types to audit. */
		eventTypesToAudit?: string | null;

		/** The full audit logs table name. */
		fullAuditLogsTableName?: string | null;

		/** The number of days to keep in the audit logs. */
		retentionDays?: string | null;

		/** The key of the auditing storage account. */
		storageAccountKey?: string | null;

		/** The table storage account name */
		storageAccountName?: string | null;

		/** The table storage account resource group name */
		storageAccountResourceGroupName?: string | null;

		/** The secondary key of the auditing storage account. */
		storageAccountSecondaryKey?: string | null;

		/** The table storage subscription Id. */
		storageAccountSubscriptionId?: string | null;

		/** The storage table endpoint. */
		storageTableEndpoint?: string | null;
	}

	/** Properties of a table auditing policy. */
	export interface TableAuditingPolicyPropertiesFormProperties {

		/** The audit logs table name. */
		auditLogsTableName: FormControl<string | null | undefined>,

		/** The state of the policy. */
		auditingState: FormControl<string | null | undefined>,

		/** Comma-separated list of event types to audit. */
		eventTypesToAudit: FormControl<string | null | undefined>,

		/** The full audit logs table name. */
		fullAuditLogsTableName: FormControl<string | null | undefined>,

		/** The number of days to keep in the audit logs. */
		retentionDays: FormControl<string | null | undefined>,

		/** The key of the auditing storage account. */
		storageAccountKey: FormControl<string | null | undefined>,

		/** The table storage account name */
		storageAccountName: FormControl<string | null | undefined>,

		/** The table storage account resource group name */
		storageAccountResourceGroupName: FormControl<string | null | undefined>,

		/** The secondary key of the auditing storage account. */
		storageAccountSecondaryKey: FormControl<string | null | undefined>,

		/** The table storage subscription Id. */
		storageAccountSubscriptionId: FormControl<string | null | undefined>,

		/** The storage table endpoint. */
		storageTableEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateTableAuditingPolicyPropertiesFormGroup() {
		return new FormGroup<TableAuditingPolicyPropertiesFormProperties>({
			auditLogsTableName: new FormControl<string | null | undefined>(undefined),
			auditingState: new FormControl<string | null | undefined>(undefined),
			eventTypesToAudit: new FormControl<string | null | undefined>(undefined),
			fullAuditLogsTableName: new FormControl<string | null | undefined>(undefined),
			retentionDays: new FormControl<string | null | undefined>(undefined),
			storageAccountKey: new FormControl<string | null | undefined>(undefined),
			storageAccountName: new FormControl<string | null | undefined>(undefined),
			storageAccountResourceGroupName: new FormControl<string | null | undefined>(undefined),
			storageAccountSecondaryKey: new FormControl<string | null | undefined>(undefined),
			storageAccountSubscriptionId: new FormControl<string | null | undefined>(undefined),
			storageTableEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists a server's table auditing policies. Table auditing is deprecated, use blob auditing instead.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/auditingPolicies
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ServerTableAuditingPolicyListResult} Successfully retrieved the server table auditing policies.
		 */
		ServerTableAuditingPolicies_ListByServer(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string): Observable<ServerTableAuditingPolicyListResult> {
			return this.http.get<ServerTableAuditingPolicyListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/auditingPolicies&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a server's table auditing policy. Table auditing is deprecated, use blob auditing instead.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/auditingPolicies/{tableAuditingPolicyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {ServerTableAuditingPolicies_GetTableAuditingPolicyName} tableAuditingPolicyName The name of the table auditing policy.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ServerTableAuditingPolicy} Successfully retrieved the server table auditing policy.
		 */
		ServerTableAuditingPolicies_Get(resourceGroupName: string, serverName: string, tableAuditingPolicyName: ServerTableAuditingPolicies_GetTableAuditingPolicyName, subscriptionId: string, api_version: string): Observable<ServerTableAuditingPolicy> {
			return this.http.get<ServerTableAuditingPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/auditingPolicies/' + tableAuditingPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a server's table auditing policy. Table auditing is deprecated, use blob auditing instead.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/auditingPolicies/{tableAuditingPolicyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {ServerTableAuditingPolicies_GetTableAuditingPolicyName} tableAuditingPolicyName The name of the table auditing policy.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {ServerTableAuditingPolicy} requestBody The server table auditing policy.
		 * @return {ServerTableAuditingPolicy} Successfully set the server table auditing policy.
		 */
		ServerTableAuditingPolicies_CreateOrUpdate(resourceGroupName: string, serverName: string, tableAuditingPolicyName: ServerTableAuditingPolicies_GetTableAuditingPolicyName, subscriptionId: string, api_version: string, requestBody: ServerTableAuditingPolicy): Observable<ServerTableAuditingPolicy> {
			return this.http.put<ServerTableAuditingPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/auditingPolicies/' + tableAuditingPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists a database's table auditing policies. Table auditing is deprecated, use blob auditing instead.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/auditingPolicies
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database for which the table audit policy is defined.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {DatabaseTableAuditingPolicyListResult} Successfully retrieved the database table auditing policies.
		 */
		DatabaseTableAuditingPolicies_ListByDatabase(resourceGroupName: string, serverName: string, databaseName: string, subscriptionId: string, api_version: string): Observable<DatabaseTableAuditingPolicyListResult> {
			return this.http.get<DatabaseTableAuditingPolicyListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/auditingPolicies&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a database's table auditing policy. Table auditing is deprecated, use blob auditing instead.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/auditingPolicies/{tableAuditingPolicyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database for which the table audit policy is defined.
		 * @param {ServerTableAuditingPolicies_GetTableAuditingPolicyName} tableAuditingPolicyName The name of the table auditing policy.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {DatabaseTableAuditingPolicy} Successfully retrieved the database table auditing policy.
		 */
		DatabaseTableAuditingPolicies_Get(resourceGroupName: string, serverName: string, databaseName: string, tableAuditingPolicyName: ServerTableAuditingPolicies_GetTableAuditingPolicyName, subscriptionId: string, api_version: string): Observable<DatabaseTableAuditingPolicy> {
			return this.http.get<DatabaseTableAuditingPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/auditingPolicies/' + tableAuditingPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a database's table auditing policy. Table auditing is deprecated, use blob auditing instead.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/auditingPolicies/{tableAuditingPolicyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database for which the table auditing policy will be defined.
		 * @param {ServerTableAuditingPolicies_GetTableAuditingPolicyName} tableAuditingPolicyName The name of the table auditing policy.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {DatabaseTableAuditingPolicy} requestBody The database table auditing policy.
		 * @return {DatabaseTableAuditingPolicy} Successfully set the database table auditing policy.
		 */
		DatabaseTableAuditingPolicies_CreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, tableAuditingPolicyName: ServerTableAuditingPolicies_GetTableAuditingPolicyName, subscriptionId: string, api_version: string, requestBody: DatabaseTableAuditingPolicy): Observable<DatabaseTableAuditingPolicy> {
			return this.http.put<DatabaseTableAuditingPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/auditingPolicies/' + tableAuditingPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a database's connection policy, which is used with table auditing. Table auditing is deprecated, use blob auditing instead.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/connectionPolicies/{connectionPolicyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database for which the connection policy is defined.
		 * @param {ServerTableAuditingPolicies_GetTableAuditingPolicyName} connectionPolicyName The name of the connection policy.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {DatabaseConnectionPolicy} Successfully retrieved the database connection policy.
		 */
		DatabaseConnectionPolicies_Get(resourceGroupName: string, serverName: string, databaseName: string, connectionPolicyName: ServerTableAuditingPolicies_GetTableAuditingPolicyName, subscriptionId: string, api_version: string): Observable<DatabaseConnectionPolicy> {
			return this.http.get<DatabaseConnectionPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/connectionPolicies/' + connectionPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a database's connection policy, which is used with table auditing. Table auditing is deprecated, use blob auditing instead.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/connectionPolicies/{connectionPolicyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database for which the connection policy will be defined.
		 * @param {ServerTableAuditingPolicies_GetTableAuditingPolicyName} connectionPolicyName The name of the connection policy.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {DatabaseConnectionPolicy} requestBody The database connection policy.
		 * @return {DatabaseConnectionPolicy} Successfully set the database connection policy.
		 */
		DatabaseConnectionPolicies_CreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, connectionPolicyName: ServerTableAuditingPolicies_GetTableAuditingPolicyName, subscriptionId: string, api_version: string, requestBody: DatabaseConnectionPolicy): Observable<DatabaseConnectionPolicy> {
			return this.http.put<DatabaseConnectionPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/connectionPolicies/' + connectionPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum ServerTableAuditingPolicies_GetTableAuditingPolicyName { default = 0 }

}

