import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Catalog is the container of databases. */
	export interface Catalog {

		/** Output only. The creation time of the catalog. */
		createTime?: string | null;

		/** Output only. The deletion time of the catalog. Only set after the catalog is deleted. */
		deleteTime?: string | null;

		/** Output only. The time when this catalog is considered expired. Only set after the catalog is deleted. */
		expireTime?: string | null;

		/** Output only. The resource name. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id} */
		name?: string | null;

		/** Output only. The last modification time of the catalog. */
		updateTime?: string | null;
	}

	/** Catalog is the container of databases. */
	export interface CatalogFormProperties {

		/** Output only. The creation time of the catalog. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The deletion time of the catalog. Only set after the catalog is deleted. */
		deleteTime: FormControl<string | null | undefined>,

		/** Output only. The time when this catalog is considered expired. Only set after the catalog is deleted. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. The resource name. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id} */
		name: FormControl<string | null | undefined>,

		/** Output only. The last modification time of the catalog. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateCatalogFormGroup() {
		return new FormGroup<CatalogFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Database is the container of tables. */
	export interface Database {

		/** Output only. The creation time of the database. */
		createTime?: string | null;

		/** Output only. The deletion time of the database. Only set after the database is deleted. */
		deleteTime?: string | null;

		/** Output only. The time when this database is considered expired. Only set after the database is deleted. */
		expireTime?: string | null;

		/** Options of a Hive database. */
		hiveOptions?: HiveDatabaseOptions;

		/** Output only. The resource name. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id} */
		name?: string | null;

		/** The database type. */
		type?: DatabaseType | null;

		/** Output only. The last modification time of the database. */
		updateTime?: string | null;
	}

	/** Database is the container of tables. */
	export interface DatabaseFormProperties {

		/** Output only. The creation time of the database. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The deletion time of the database. Only set after the database is deleted. */
		deleteTime: FormControl<string | null | undefined>,

		/** Output only. The time when this database is considered expired. Only set after the database is deleted. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. The resource name. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id} */
		name: FormControl<string | null | undefined>,

		/** The database type. */
		type: FormControl<DatabaseType | null | undefined>,

		/** Output only. The last modification time of the database. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseFormGroup() {
		return new FormGroup<DatabaseFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DatabaseType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options of a Hive database. */
	export interface HiveDatabaseOptions {

		/** Cloud Storage folder URI where the database data is stored, starting with "gs://". */
		locationUri?: string | null;

		/** Stores user supplied Hive database parameters. */
		parameters?: {[id: string]: string };
	}

	/** Options of a Hive database. */
	export interface HiveDatabaseOptionsFormProperties {

		/** Cloud Storage folder URI where the database data is stored, starting with "gs://". */
		locationUri: FormControl<string | null | undefined>,

		/** Stores user supplied Hive database parameters. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateHiveDatabaseOptionsFormGroup() {
		return new FormGroup<HiveDatabaseOptionsFormProperties>({
			locationUri: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum DatabaseType { TYPE_UNSPECIFIED = 0, HIVE = 1 }


	/** Options of a Hive table. */
	export interface HiveTableOptions {

		/** Stores user supplied Hive table parameters. */
		parameters?: {[id: string]: string };

		/** Stores physical storage information of the data. */
		storageDescriptor?: StorageDescriptor;

		/** Hive table type. For example, MANAGED_TABLE, EXTERNAL_TABLE. */
		tableType?: string | null;
	}

	/** Options of a Hive table. */
	export interface HiveTableOptionsFormProperties {

		/** Stores user supplied Hive table parameters. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,

		/** Hive table type. For example, MANAGED_TABLE, EXTERNAL_TABLE. */
		tableType: FormControl<string | null | undefined>,
	}
	export function CreateHiveTableOptionsFormGroup() {
		return new FormGroup<HiveTableOptionsFormProperties>({
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			tableType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Stores physical storage information of the data. */
	export interface StorageDescriptor {

		/** The fully qualified Java class name of the input format. */
		inputFormat?: string | null;

		/** Cloud Storage folder URI where the table data is stored, starting with "gs://". */
		locationUri?: string | null;

		/** The fully qualified Java class name of the output format. */
		outputFormat?: string | null;

		/** Serializer and deserializer information. */
		serdeInfo?: SerDeInfo;
	}

	/** Stores physical storage information of the data. */
	export interface StorageDescriptorFormProperties {

		/** The fully qualified Java class name of the input format. */
		inputFormat: FormControl<string | null | undefined>,

		/** Cloud Storage folder URI where the table data is stored, starting with "gs://". */
		locationUri: FormControl<string | null | undefined>,

		/** The fully qualified Java class name of the output format. */
		outputFormat: FormControl<string | null | undefined>,
	}
	export function CreateStorageDescriptorFormGroup() {
		return new FormGroup<StorageDescriptorFormProperties>({
			inputFormat: new FormControl<string | null | undefined>(undefined),
			locationUri: new FormControl<string | null | undefined>(undefined),
			outputFormat: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Serializer and deserializer information. */
	export interface SerDeInfo {

		/** The fully qualified Java class name of the serialization library. */
		serializationLib?: string | null;
	}

	/** Serializer and deserializer information. */
	export interface SerDeInfoFormProperties {

		/** The fully qualified Java class name of the serialization library. */
		serializationLib: FormControl<string | null | undefined>,
	}
	export function CreateSerDeInfoFormGroup() {
		return new FormGroup<SerDeInfoFormProperties>({
			serializationLib: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the ListCatalogs method. */
	export interface ListCatalogsResponse {

		/** The catalogs from the specified project. */
		catalogs?: Array<Catalog>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for the ListCatalogs method. */
	export interface ListCatalogsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCatalogsResponseFormGroup() {
		return new FormGroup<ListCatalogsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the ListDatabases method. */
	export interface ListDatabasesResponse {

		/** The databases from the specified catalog. */
		databases?: Array<Database>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for the ListDatabases method. */
	export interface ListDatabasesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatabasesResponseFormGroup() {
		return new FormGroup<ListDatabasesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the ListTables method. */
	export interface ListTablesResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The tables from the specified database. */
		tables?: Array<Table>;
	}

	/** Response message for the ListTables method. */
	export interface ListTablesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTablesResponseFormGroup() {
		return new FormGroup<ListTablesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a table. */
	export interface Table {

		/** Output only. The creation time of the table. */
		createTime?: string | null;

		/** Output only. The deletion time of the table. Only set after the table is deleted. */
		deleteTime?: string | null;

		/** The checksum of a table object computed by the server based on the value of other fields. It may be sent on update requests to ensure the client has an up-to-date value before proceeding. It is only checked for update table operations. */
		etag?: string | null;

		/** Output only. The time when this table is considered expired. Only set after the table is deleted. */
		expireTime?: string | null;

		/** Options of a Hive table. */
		hiveOptions?: HiveTableOptions;

		/** Output only. The resource name. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}/tables/{table_id} */
		name?: string | null;

		/** The table type. */
		type?: DatabaseType | null;

		/** Output only. The last modification time of the table. */
		updateTime?: string | null;
	}

	/** Represents a table. */
	export interface TableFormProperties {

		/** Output only. The creation time of the table. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The deletion time of the table. Only set after the table is deleted. */
		deleteTime: FormControl<string | null | undefined>,

		/** The checksum of a table object computed by the server based on the value of other fields. It may be sent on update requests to ensure the client has an up-to-date value before proceeding. It is only checked for update table operations. */
		etag: FormControl<string | null | undefined>,

		/** Output only. The time when this table is considered expired. Only set after the table is deleted. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. The resource name. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}/tables/{table_id} */
		name: FormControl<string | null | undefined>,

		/** The table type. */
		type: FormControl<DatabaseType | null | undefined>,

		/** Output only. The last modification time of the table. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateTableFormGroup() {
		return new FormGroup<TableFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DatabaseType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the RenameTable method in MetastoreService */
	export interface RenameTableRequest {

		/** Required. The new `name` for the specified table, must be in the same database. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}/tables/{table_id} */
		newName?: string | null;
	}

	/** Request message for the RenameTable method in MetastoreService */
	export interface RenameTableRequestFormProperties {

		/** Required. The new `name` for the specified table, must be in the same database. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}/tables/{table_id} */
		newName: FormControl<string | null | undefined>,
	}
	export function CreateRenameTableRequestFormGroup() {
		return new FormGroup<RenameTableRequestFormProperties>({
			newName: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes an existing table specified by the table ID.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the table to delete. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}/tables/{table_id}
		 * @return {Table} Successful response
		 */
		Biglake_projects_locations_catalogs_databases_tables_delete(name: string): Observable<Table> {
			return this.http.delete<Table>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the table specified by the resource name.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the table to retrieve. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}/tables/{table_id}
		 * @return {Table} Successful response
		 */
		Biglake_projects_locations_catalogs_databases_tables_get(name: string): Observable<Table> {
			return this.http.get<Table>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates an existing table specified by the table ID.
		 * Patch v1/{name}
		 * @param {string} name Output only. The resource name. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}/tables/{table_id}
		 * @param {string} updateMask The list of fields to update. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If not set, defaults to all of the fields that are allowed to update.
		 * @return {Table} Successful response
		 */
		Biglake_projects_locations_catalogs_databases_tables_patch(name: string, updateMask: string | null | undefined, requestBody: Table): Observable<Table> {
			return this.http.patch<Table>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Renames an existing table specified by the table ID.
		 * Post v1/{name}:rename
		 * @param {string} name Required. The table's `name` field is used to identify the table to rename. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}/tables/{table_id}
		 * @return {Table} Successful response
		 */
		Biglake_projects_locations_catalogs_databases_tables_rename(name: string, requestBody: RenameTableRequest): Observable<Table> {
			return this.http.post<Table>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':rename', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all catalogs in a specified project.
		 * Get v1/{parent}/catalogs
		 * @param {string} parent Required. The parent, which owns this collection of catalogs. Format: projects/{project_id_or_number}/locations/{location_id}
		 * @param {number} pageSize The maximum number of catalogs to return. The service may return fewer than this value. If unspecified, at most 50 catalogs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken A page token, received from a previous `ListCatalogs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCatalogs` must match the call that provided the page token.
		 * @return {ListCatalogsResponse} Successful response
		 */
		Biglake_projects_locations_catalogs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCatalogsResponse> {
			return this.http.get<ListCatalogsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/catalogs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new catalog.
		 * Post v1/{parent}/catalogs
		 * @param {string} parent Required. The parent resource where this catalog will be created. Format: projects/{project_id_or_number}/locations/{location_id}
		 * @param {string} catalogId Required. The ID to use for the catalog, which will become the final component of the catalog's resource name.
		 * @return {Catalog} Successful response
		 */
		Biglake_projects_locations_catalogs_create(parent: string, catalogId: string | null | undefined, requestBody: Catalog): Observable<Catalog> {
			return this.http.post<Catalog>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/catalogs&catalogId=' + (catalogId == null ? '' : encodeURIComponent(catalogId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all databases in a specified catalog.
		 * Get v1/{parent}/databases
		 * @param {string} parent Required. The parent, which owns this collection of databases. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}
		 * @param {number} pageSize The maximum number of databases to return. The service may return fewer than this value. If unspecified, at most 50 databases will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken A page token, received from a previous `ListDatabases` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDatabases` must match the call that provided the page token.
		 * @return {ListDatabasesResponse} Successful response
		 */
		Biglake_projects_locations_catalogs_databases_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDatabasesResponse> {
			return this.http.get<ListDatabasesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/databases&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new database.
		 * Post v1/{parent}/databases
		 * @param {string} parent Required. The parent resource where this database will be created. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}
		 * @param {string} databaseId Required. The ID to use for the database, which will become the final component of the database's resource name.
		 * @return {Database} Successful response
		 */
		Biglake_projects_locations_catalogs_databases_create(parent: string, databaseId: string | null | undefined, requestBody: Database): Observable<Database> {
			return this.http.post<Database>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/databases&databaseId=' + (databaseId == null ? '' : encodeURIComponent(databaseId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all tables in a specified database.
		 * Get v1/{parent}/tables
		 * @param {string} parent Required. The parent, which owns this collection of tables. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}
		 * @param {number} pageSize The maximum number of tables to return. The service may return fewer than this value. If unspecified, at most 50 tables will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken A page token, received from a previous `ListTables` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTables` must match the call that provided the page token.
		 * @param {Biglake_projects_locations_catalogs_databases_tables_listView} view The view for the returned tables.
		 * @return {ListTablesResponse} Successful response
		 */
		Biglake_projects_locations_catalogs_databases_tables_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Biglake_projects_locations_catalogs_databases_tables_listView | null | undefined): Observable<ListTablesResponse> {
			return this.http.get<ListTablesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tables&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Creates a new table.
		 * Post v1/{parent}/tables
		 * @param {string} parent Required. The parent resource where this table will be created. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}
		 * @param {string} tableId Required. The ID to use for the table, which will become the final component of the table's resource name.
		 * @return {Table} Successful response
		 */
		Biglake_projects_locations_catalogs_databases_tables_create(parent: string, tableId: string | null | undefined, requestBody: Table): Observable<Table> {
			return this.http.post<Table>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tables&tableId=' + (tableId == null ? '' : encodeURIComponent(tableId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Biglake_projects_locations_catalogs_databases_tables_listView { TABLE_VIEW_UNSPECIFIED = 0, BASIC = 1, FULL = 2 }

}

