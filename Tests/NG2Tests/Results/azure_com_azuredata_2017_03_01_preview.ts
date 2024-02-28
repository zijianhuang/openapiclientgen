import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** SQL REST API operation definition. */
	export interface Operation {

		/** Display metadata associated with the operation. */
		display?: OperationDisplay;

		/** The name of the operation being performed on this particular object. */
		name?: string | null;

		/** The intended executor of the operation. */
		origin?: OperationOrigin | null;

		/** Additional descriptions for the operation. */
		properties?: {[id: string]: any };
	}

	/** SQL REST API operation definition. */
	export interface OperationFormProperties {

		/** The name of the operation being performed on this particular object. */
		name: FormControl<string | null | undefined>,

		/** The intended executor of the operation. */
		origin: FormControl<OperationOrigin | null | undefined>,

		/** Additional descriptions for the operation. */
		properties: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<OperationOrigin | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Display metadata associated with the operation. */
	export interface OperationDisplay {

		/** The localized friendly description for the operation. */
		description?: string | null;

		/** The localized friendly name for the operation. */
		operation?: string | null;

		/** The localized friendly form of the resource provider name. */
		provider?: string | null;

		/** The localized friendly form of the resource type related to this action/operation. */
		resource?: string | null;
	}

	/** Display metadata associated with the operation. */
	export interface OperationDisplayFormProperties {

		/** The localized friendly description for the operation. */
		description: FormControl<string | null | undefined>,

		/** The localized friendly name for the operation. */
		operation: FormControl<string | null | undefined>,

		/** The localized friendly form of the resource provider name. */
		provider: FormControl<string | null | undefined>,

		/** The localized friendly form of the resource type related to this action/operation. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayFormGroup() {
		return new FormGroup<OperationDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OperationOrigin { user = 'user', system = 'system' }


	/** Result of the request to list SQL operations. */
	export interface OperationListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<Operation>;
	}

	/** Result of the request to list SQL operations. */
	export interface OperationListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ARM proxy resource. */
	export interface ProxyResource {
	}

	/** ARM proxy resource. */
	export interface ProxyResourceFormProperties {
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
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


	/** A SQL server. */
	export interface SqlServer {

		/** The SQL server properties. */
		properties?: SqlServerProperties;
	}

	/** A SQL server. */
	export interface SqlServerFormProperties {
	}
	export function CreateSqlServerFormGroup() {
		return new FormGroup<SqlServerFormProperties>({
		});

	}


	/** The SQL server properties. */
	export interface SqlServerProperties {

		/**
		 * Cores of the Sql Server.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cores?: number | null;

		/** Sql Server Edition. */
		edition?: string | null;

		/** Sql Server Json Property Bag. */
		propertyBag?: string | null;

		/** ID for Parent Sql Server Registration. */
		registrationID?: string | null;

		/** Version of the Sql Server. */
		version?: string | null;
	}

	/** The SQL server properties. */
	export interface SqlServerPropertiesFormProperties {

		/**
		 * Cores of the Sql Server.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cores: FormControl<number | null | undefined>,

		/** Sql Server Edition. */
		edition: FormControl<string | null | undefined>,

		/** Sql Server Json Property Bag. */
		propertyBag: FormControl<string | null | undefined>,

		/** ID for Parent Sql Server Registration. */
		registrationID: FormControl<string | null | undefined>,

		/** Version of the Sql Server. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateSqlServerPropertiesFormGroup() {
		return new FormGroup<SqlServerPropertiesFormProperties>({
			cores: new FormControl<number | null | undefined>(undefined),
			edition: new FormControl<string | null | undefined>(undefined),
			propertyBag: new FormControl<string | null | undefined>(undefined),
			registrationID: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of SQL servers. */
	export interface SqlServerListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<SqlServer>;
	}

	/** A list of SQL servers. */
	export interface SqlServerListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSqlServerListResultFormGroup() {
		return new FormGroup<SqlServerListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A SQL server registration. */
	export interface SqlServerRegistration {

		/** The SQL server Registration properties. */
		properties?: SqlServerRegistrationProperties;
	}

	/** A SQL server registration. */
	export interface SqlServerRegistrationFormProperties {
	}
	export function CreateSqlServerRegistrationFormGroup() {
		return new FormGroup<SqlServerRegistrationFormProperties>({
		});

	}


	/** The SQL server Registration properties. */
	export interface SqlServerRegistrationProperties {

		/** Optional Properties as JSON string */
		propertyBag?: string | null;

		/** Resource Group Name */
		resourceGroup?: string | null;

		/** Subscription Id */
		subscriptionId?: string | null;
	}

	/** The SQL server Registration properties. */
	export interface SqlServerRegistrationPropertiesFormProperties {

		/** Optional Properties as JSON string */
		propertyBag: FormControl<string | null | undefined>,

		/** Resource Group Name */
		resourceGroup: FormControl<string | null | undefined>,

		/** Subscription Id */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateSqlServerRegistrationPropertiesFormGroup() {
		return new FormGroup<SqlServerRegistrationPropertiesFormProperties>({
			propertyBag: new FormControl<string | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Server. */
	export interface SqlServerRegistrationListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<SqlServerRegistration>;
	}

	/** Server. */
	export interface SqlServerRegistrationListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSqlServerRegistrationListResultFormGroup() {
		return new FormGroup<SqlServerRegistrationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An update to a SQL Server Registration. */
	export interface SqlServerRegistrationUpdate {

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** An update to a SQL Server Registration. */
	export interface SqlServerRegistrationUpdateFormProperties {

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSqlServerRegistrationUpdateFormGroup() {
		return new FormGroup<SqlServerRegistrationUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
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
		 * Lists all of the available SQL Server Registration API operations.
		 * Get providers/Microsoft.AzureData/operations
		 * @param {string} api_version API version to use for the request.
		 * @return {OperationListResult} Successfully retrieved operations.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.AzureData/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all SQL Server registrations in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.AzureData/sqlServerRegistrations
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @return {SqlServerRegistrationListResult} Successfully retrieved all SQL Server registrations in the subscription.
		 */
		SqlServerRegistrations_List(subscriptionId: string, api_version: string): Observable<SqlServerRegistrationListResult> {
			return this.http.get<SqlServerRegistrationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.AzureData/sqlServerRegistrations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all SQL Server registrations in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureData/sqlServerRegistrations
		 * @param {string} resourceGroupName Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @return {SqlServerRegistrationListResult} Successfully retrieved all SQL Server registrations in the resource group.
		 */
		SqlServerRegistrations_ListByResourceGroup(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<SqlServerRegistrationListResult> {
			return this.http.get<SqlServerRegistrationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AzureData/sqlServerRegistrations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a SQL Server registration.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureData/sqlServerRegistrations/{sqlServerRegistrationName}
		 * @param {string} resourceGroupName Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} sqlServerRegistrationName Name of the SQL Server registration.
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @return {SqlServerRegistration} Successfully retrieved the SQL Server registration.
		 */
		SqlServerRegistrations_Get(resourceGroupName: string, sqlServerRegistrationName: string, subscriptionId: string, api_version: string): Observable<SqlServerRegistration> {
			return this.http.get<SqlServerRegistration>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AzureData/sqlServerRegistrations/' + (sqlServerRegistrationName == null ? '' : encodeURIComponent(sqlServerRegistrationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a SQL Server registration.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureData/sqlServerRegistrations/{sqlServerRegistrationName}
		 * @param {string} resourceGroupName Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} sqlServerRegistrationName Name of the SQL Server registration.
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @param {SqlServerRegistration} requestBody The SQL Server registration to be created or updated.
		 * @return {SqlServerRegistration} Successfully updated the SQL Server registration.
		 */
		SqlServerRegistrations_CreateOrUpdate(resourceGroupName: string, sqlServerRegistrationName: string, subscriptionId: string, api_version: string, requestBody: SqlServerRegistration): Observable<SqlServerRegistration> {
			return this.http.put<SqlServerRegistration>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AzureData/sqlServerRegistrations/' + (sqlServerRegistrationName == null ? '' : encodeURIComponent(sqlServerRegistrationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a SQL Server registration.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureData/sqlServerRegistrations/{sqlServerRegistrationName}
		 * @param {string} resourceGroupName Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} sqlServerRegistrationName Name of the SQL Server registration.
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @return {void} Successfully deleted the SQL Server registration.
		 */
		SqlServerRegistrations_Delete(resourceGroupName: string, sqlServerRegistrationName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AzureData/sqlServerRegistrations/' + (sqlServerRegistrationName == null ? '' : encodeURIComponent(sqlServerRegistrationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates SQL Server Registration tags.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureData/sqlServerRegistrations/{sqlServerRegistrationName}
		 * @param {string} resourceGroupName Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} sqlServerRegistrationName Name of the SQL Server registration.
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @param {SqlServerRegistrationUpdate} requestBody The SQL Server Registration.
		 * @return {SqlServerRegistration} Successfully updated the SQL Server Registration.
		 */
		SqlServerRegistrations_Update(resourceGroupName: string, sqlServerRegistrationName: string, subscriptionId: string, api_version: string, requestBody: SqlServerRegistrationUpdate): Observable<SqlServerRegistration> {
			return this.http.patch<SqlServerRegistration>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AzureData/sqlServerRegistrations/' + (sqlServerRegistrationName == null ? '' : encodeURIComponent(sqlServerRegistrationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all SQL Servers in a SQL Server Registration.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureData/sqlServerRegistrations/{sqlServerRegistrationName}/sqlServers
		 * @param {string} resourceGroupName Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} sqlServerRegistrationName Name of the SQL Server registration.
		 * @param {string} expand The child resources to include in the response.
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @return {SqlServerListResult} Successfully retrieved all SQL Servers in the SQL Server Registration.
		 */
		SqlServers_ListByResourceGroup(resourceGroupName: string, sqlServerRegistrationName: string, expand: string | null | undefined, subscriptionId: string, api_version: string): Observable<SqlServerListResult> {
			return this.http.get<SqlServerListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AzureData/sqlServerRegistrations/' + (sqlServerRegistrationName == null ? '' : encodeURIComponent(sqlServerRegistrationName)) + '/sqlServers&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a SQL Server.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureData/sqlServerRegistrations/{sqlServerRegistrationName}/sqlServers/{sqlServerName}
		 * @param {string} resourceGroupName Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} sqlServerRegistrationName Name of the SQL Server registration.
		 * @param {string} sqlServerName Name of the SQL Server.
		 * @param {string} expand The child resources to include in the response.
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @return {SqlServer} Successfully retrieved the SQL Server.
		 */
		SqlServers_Get(resourceGroupName: string, sqlServerRegistrationName: string, sqlServerName: string, expand: string | null | undefined, subscriptionId: string, api_version: string): Observable<SqlServer> {
			return this.http.get<SqlServer>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AzureData/sqlServerRegistrations/' + (sqlServerRegistrationName == null ? '' : encodeURIComponent(sqlServerRegistrationName)) + '/sqlServers/' + (sqlServerName == null ? '' : encodeURIComponent(sqlServerName)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a SQL Server.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureData/sqlServerRegistrations/{sqlServerRegistrationName}/sqlServers/{sqlServerName}
		 * @param {string} resourceGroupName Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} sqlServerRegistrationName Name of the SQL Server registration.
		 * @param {string} sqlServerName Name of the SQL Server.
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @param {SqlServer} requestBody The SQL Server to be created or updated.
		 * @return {SqlServer} Successfully updated the SQL Server.
		 */
		SqlServers_CreateOrUpdate(resourceGroupName: string, sqlServerRegistrationName: string, sqlServerName: string, subscriptionId: string, api_version: string, requestBody: SqlServer): Observable<SqlServer> {
			return this.http.put<SqlServer>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AzureData/sqlServerRegistrations/' + (sqlServerRegistrationName == null ? '' : encodeURIComponent(sqlServerRegistrationName)) + '/sqlServers/' + (sqlServerName == null ? '' : encodeURIComponent(sqlServerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a SQL Server.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureData/sqlServerRegistrations/{sqlServerRegistrationName}/sqlServers/{sqlServerName}
		 * @param {string} resourceGroupName Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} sqlServerRegistrationName Name of the SQL Server registration.
		 * @param {string} sqlServerName Name of the SQL Server.
		 * @param {string} subscriptionId Subscription ID that identifies an Azure subscription.
		 * @param {string} api_version API version to use for the request.
		 * @return {void} Successfully deleted the SQL Server.
		 */
		SqlServers_Delete(resourceGroupName: string, sqlServerRegistrationName: string, sqlServerName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AzureData/sqlServerRegistrations/' + (sqlServerRegistrationName == null ? '' : encodeURIComponent(sqlServerRegistrationName)) + '/sqlServers/' + (sqlServerName == null ? '' : encodeURIComponent(sqlServerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

