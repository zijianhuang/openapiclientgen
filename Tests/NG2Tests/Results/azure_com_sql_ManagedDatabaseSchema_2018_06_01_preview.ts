import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A database column resource. */
	export interface DatabaseColumn {

		/** Database column properties. */
		properties?: DatabaseColumnProperties;
	}

	/** A database column resource. */
	export interface DatabaseColumnFormProperties {
	}
	export function CreateDatabaseColumnFormGroup() {
		return new FormGroup<DatabaseColumnFormProperties>({
		});

	}


	/** Database column properties. */
	export interface DatabaseColumnProperties {

		/** The column data type. */
		columnType?: DatabaseColumnPropertiesColumnType | null;
	}

	/** Database column properties. */
	export interface DatabaseColumnPropertiesFormProperties {

		/** The column data type. */
		columnType: FormControl<DatabaseColumnPropertiesColumnType | null | undefined>,
	}
	export function CreateDatabaseColumnPropertiesFormGroup() {
		return new FormGroup<DatabaseColumnPropertiesFormProperties>({
			columnType: new FormControl<DatabaseColumnPropertiesColumnType | null | undefined>(undefined),
		});

	}

	export enum DatabaseColumnPropertiesColumnType { image = 'image', text = 'text', uniqueidentifier = 'uniqueidentifier', date = 'date', time = 'time', datetime2 = 'datetime2', datetimeoffset = 'datetimeoffset', tinyint = 'tinyint', smallint = 'smallint', int = 'int', smalldatetime = 'smalldatetime', real = 'real', money = 'money', datetime = 'datetime', float = 'float', sql_variant = 'sql_variant', ntext = 'ntext', bit = 'bit', decimal = 'decimal', numeric = 'numeric', smallmoney = 'smallmoney', bigint = 'bigint', hierarchyid = 'hierarchyid', geometry = 'geometry', geography = 'geography', varbinary = 'varbinary', varchar = 'varchar', binary = 'binary', char = 'char', timestamp = 'timestamp', nvarchar = 'nvarchar', nchar = 'nchar', xml = 'xml', sysname = 'sysname' }


	/** A list of database columns. */
	export interface DatabaseColumnListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<DatabaseColumn>;
	}

	/** A list of database columns. */
	export interface DatabaseColumnListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseColumnListResultFormGroup() {
		return new FormGroup<DatabaseColumnListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A database schema resource. */
	export interface DatabaseSchema {
	}

	/** A database schema resource. */
	export interface DatabaseSchemaFormProperties {
	}
	export function CreateDatabaseSchemaFormGroup() {
		return new FormGroup<DatabaseSchemaFormProperties>({
		});

	}


	/** A list of database schemas. */
	export interface DatabaseSchemaListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<DatabaseSchema>;
	}

	/** A list of database schemas. */
	export interface DatabaseSchemaListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseSchemaListResultFormGroup() {
		return new FormGroup<DatabaseSchemaListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A database table resource. */
	export interface DatabaseTable {
	}

	/** A database table resource. */
	export interface DatabaseTableFormProperties {
	}
	export function CreateDatabaseTableFormGroup() {
		return new FormGroup<DatabaseTableFormProperties>({
		});

	}


	/** A list of database tables. */
	export interface DatabaseTableListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<DatabaseTable>;
	}

	/** A list of database tables. */
	export interface DatabaseTableListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseTableListResultFormGroup() {
		return new FormGroup<DatabaseTableListResultFormProperties>({
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List managed database schemas
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} databaseName The name of the database.
		 * @param {string} filter An OData filter expression that filters elements in the collection.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {DatabaseSchemaListResult} Successfully retrieved managed database schemas.
		 */
		ManagedDatabaseSchemas_ListByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<DatabaseSchemaListResult> {
			return this.http.get<DatabaseSchemaListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get managed database schema
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} databaseName The name of the database.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {DatabaseSchema} Successfully retrieved managed database schema.
		 */
		ManagedDatabaseSchemas_Get(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, subscriptionId: string, api_version: string): Observable<DatabaseSchema> {
			return this.http.get<DatabaseSchema>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List managed database tables
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} databaseName The name of the database.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} filter An OData filter expression that filters elements in the collection.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {DatabaseTableListResult} Successfully retrieved managed database tables.
		 */
		ManagedDatabaseTables_ListBySchema(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<DatabaseTableListResult> {
			return this.http.get<DatabaseTableListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/tables&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get managed database table
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} databaseName The name of the database.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} tableName The name of the table.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {DatabaseTable} Successfully retrieved managed database table.
		 */
		ManagedDatabaseTables_Get(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, subscriptionId: string, api_version: string): Observable<DatabaseTable> {
			return this.http.get<DatabaseTable>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List managed database columns
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/columns
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} databaseName The name of the database.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} tableName The name of the table.
		 * @param {string} filter An OData filter expression that filters elements in the collection.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {DatabaseColumnListResult} Successfully retrieved managed database columns.
		 */
		ManagedDatabaseColumns_ListByTable(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<DatabaseColumnListResult> {
			return this.http.get<DatabaseColumnListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '/columns&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get managed database column
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} databaseName The name of the database.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} tableName The name of the table.
		 * @param {string} columnName The name of the column.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {DatabaseColumn} Successfully retrieved managed database column.
		 */
		ManagedDatabaseColumns_Get(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, subscriptionId: string, api_version: string): Observable<DatabaseColumn> {
			return this.http.get<DatabaseColumn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '/columns/' + (columnName == null ? '' : encodeURIComponent(columnName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

