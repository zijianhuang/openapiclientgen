import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Request message for TablesService.BatchCreateRows. */
	export interface BatchCreateRowsRequest {

		/** Required. The request message specifying the rows to create. A maximum of 500 rows can be created in a single batch. */
		requests?: Array<CreateRowRequest>;
	}

	/** Request message for TablesService.BatchCreateRows. */
	export interface BatchCreateRowsRequestFormProperties {
	}
	export function CreateBatchCreateRowsRequestFormGroup() {
		return new FormGroup<BatchCreateRowsRequestFormProperties>({
		});

	}


	/** Request message for TablesService.CreateRow. */
	export interface CreateRowRequest {

		/** Required. The parent table where this row will be created. Format: tables/{table} */
		parent?: string | null;

		/** A single row in a table. */
		row?: Row;

		/** Optional. Column key to use for values in the row. Defaults to user entered name. */
		view?: CreateRowRequestView | null;
	}

	/** Request message for TablesService.CreateRow. */
	export interface CreateRowRequestFormProperties {

		/** Required. The parent table where this row will be created. Format: tables/{table} */
		parent: FormControl<string | null | undefined>,

		/** Optional. Column key to use for values in the row. Defaults to user entered name. */
		view: FormControl<CreateRowRequestView | null | undefined>,
	}
	export function CreateCreateRowRequestFormGroup() {
		return new FormGroup<CreateRowRequestFormProperties>({
			parent: new FormControl<string | null | undefined>(undefined),
			view: new FormControl<CreateRowRequestView | null | undefined>(undefined),
		});

	}


	/** A single row in a table. */
	export interface Row {

		/** Time when the row was created. */
		createTime?: string | null;

		/** The resource name of the row. Row names have the form `tables/{table}/rows/{row}`. The name is ignored when creating a row. */
		name?: string | null;

		/** Time when the row was last updated. */
		updateTime?: string | null;

		/** The values of the row. This is a map of column key to value. Key is user entered name(default) or the internal column id based on the view in the request. */
		values?: {[id: string]: any };
	}

	/** A single row in a table. */
	export interface RowFormProperties {

		/** Time when the row was created. */
		createTime: FormControl<string | null | undefined>,

		/** The resource name of the row. Row names have the form `tables/{table}/rows/{row}`. The name is ignored when creating a row. */
		name: FormControl<string | null | undefined>,

		/** Time when the row was last updated. */
		updateTime: FormControl<string | null | undefined>,

		/** The values of the row. This is a map of column key to value. Key is user entered name(default) or the internal column id based on the view in the request. */
		values: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateRowFormGroup() {
		return new FormGroup<RowFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			values: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	export enum CreateRowRequestView { VIEW_UNSPECIFIED = 0, COLUMN_ID_VIEW = 1 }


	/** Response message for TablesService.BatchCreateRows. */
	export interface BatchCreateRowsResponse {

		/** The created rows. */
		rows?: Array<Row>;
	}

	/** Response message for TablesService.BatchCreateRows. */
	export interface BatchCreateRowsResponseFormProperties {
	}
	export function CreateBatchCreateRowsResponseFormGroup() {
		return new FormGroup<BatchCreateRowsResponseFormProperties>({
		});

	}


	/** Request message for TablesService.BatchDeleteRows */
	export interface BatchDeleteRowsRequest {

		/** Required. The names of the rows to delete. All rows must belong to the parent table or else the entire batch will fail. A maximum of 500 rows can be deleted in a batch. Format: tables/{table}/rows/{row} */
		names?: Array<string>;
	}

	/** Request message for TablesService.BatchDeleteRows */
	export interface BatchDeleteRowsRequestFormProperties {
	}
	export function CreateBatchDeleteRowsRequestFormGroup() {
		return new FormGroup<BatchDeleteRowsRequestFormProperties>({
		});

	}


	/** Request message for TablesService.BatchUpdateRows. */
	export interface BatchUpdateRowsRequest {

		/** Required. The request messages specifying the rows to update. A maximum of 500 rows can be modified in a single batch. */
		requests?: Array<UpdateRowRequest>;
	}

	/** Request message for TablesService.BatchUpdateRows. */
	export interface BatchUpdateRowsRequestFormProperties {
	}
	export function CreateBatchUpdateRowsRequestFormGroup() {
		return new FormGroup<BatchUpdateRowsRequestFormProperties>({
		});

	}


	/** Request message for TablesService.UpdateRow. */
	export interface UpdateRowRequest {

		/** A single row in a table. */
		row?: Row;

		/** The list of fields to update. */
		updateMask?: string | null;

		/** Optional. Column key to use for values in the row. Defaults to user entered name. */
		view?: CreateRowRequestView | null;
	}

	/** Request message for TablesService.UpdateRow. */
	export interface UpdateRowRequestFormProperties {

		/** The list of fields to update. */
		updateMask: FormControl<string | null | undefined>,

		/** Optional. Column key to use for values in the row. Defaults to user entered name. */
		view: FormControl<CreateRowRequestView | null | undefined>,
	}
	export function CreateUpdateRowRequestFormGroup() {
		return new FormGroup<UpdateRowRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
			view: new FormControl<CreateRowRequestView | null | undefined>(undefined),
		});

	}


	/** Response message for TablesService.BatchUpdateRows. */
	export interface BatchUpdateRowsResponse {

		/** The updated rows. */
		rows?: Array<Row>;
	}

	/** Response message for TablesService.BatchUpdateRows. */
	export interface BatchUpdateRowsResponseFormProperties {
	}
	export function CreateBatchUpdateRowsResponseFormGroup() {
		return new FormGroup<BatchUpdateRowsResponseFormProperties>({
		});

	}


	/** Details on a column in the table. */
	export interface ColumnDescription {

		/** Data type of the column Supported types are auto_id, boolean, boolean_list, creator, create_timestamp, date, dropdown, location, integer, integer_list, number, number_list, person, person_list, tags, check_list, text, text_list, update_timestamp, updater, relationship, file_attachment_list. These types directly map to the column types supported on Tables website. */
		dataType?: string | null;

		/** Details about a date column. */
		dateDetails?: DateDetails;

		/** Internal id for a column. */
		id?: string | null;

		/** Optional. Range of labeled values for the column. Some columns like tags and drop-downs limit the values to a set of possible values. We return the range of values in such cases to help clients implement better user data validation. */
		labels?: Array<LabeledItem>;

		/** Details about a lookup column whose value comes from the associated relationship. */
		lookupDetails?: LookupDetails;

		/** Optional. Indicates whether or not multiple values are allowed for array types where such a restriction is possible. */
		multipleValuesDisallowed?: boolean | null;

		/** column name */
		name?: string | null;

		/** Optional. Indicates that values for the column cannot be set by the user. */
		readonly?: boolean | null;

		/** Details about a relationship column. */
		relationshipDetails?: RelationshipDetails;
	}

	/** Details on a column in the table. */
	export interface ColumnDescriptionFormProperties {

		/** Data type of the column Supported types are auto_id, boolean, boolean_list, creator, create_timestamp, date, dropdown, location, integer, integer_list, number, number_list, person, person_list, tags, check_list, text, text_list, update_timestamp, updater, relationship, file_attachment_list. These types directly map to the column types supported on Tables website. */
		dataType: FormControl<string | null | undefined>,

		/** Internal id for a column. */
		id: FormControl<string | null | undefined>,

		/** Optional. Indicates whether or not multiple values are allowed for array types where such a restriction is possible. */
		multipleValuesDisallowed: FormControl<boolean | null | undefined>,

		/** column name */
		name: FormControl<string | null | undefined>,

		/** Optional. Indicates that values for the column cannot be set by the user. */
		readonly: FormControl<boolean | null | undefined>,
	}
	export function CreateColumnDescriptionFormGroup() {
		return new FormGroup<ColumnDescriptionFormProperties>({
			dataType: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			multipleValuesDisallowed: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			readonly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Details about a date column. */
	export interface DateDetails {

		/** Whether the date column includes time. */
		hasTime?: boolean | null;
	}

	/** Details about a date column. */
	export interface DateDetailsFormProperties {

		/** Whether the date column includes time. */
		hasTime: FormControl<boolean | null | undefined>,
	}
	export function CreateDateDetailsFormGroup() {
		return new FormGroup<DateDetailsFormProperties>({
			hasTime: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A single item in a labeled column. */
	export interface LabeledItem {

		/** Internal id associated with the item. */
		id?: string | null;

		/** Display string as entered by user. */
		name?: string | null;
	}

	/** A single item in a labeled column. */
	export interface LabeledItemFormProperties {

		/** Internal id associated with the item. */
		id: FormControl<string | null | undefined>,

		/** Display string as entered by user. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLabeledItemFormGroup() {
		return new FormGroup<LabeledItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a lookup column whose value comes from the associated relationship. */
	export interface LookupDetails {

		/** The name of the relationship column associated with the lookup. */
		relationshipColumn?: string | null;

		/** The id of the relationship column. */
		relationshipColumnId?: string | null;
	}

	/** Details about a lookup column whose value comes from the associated relationship. */
	export interface LookupDetailsFormProperties {

		/** The name of the relationship column associated with the lookup. */
		relationshipColumn: FormControl<string | null | undefined>,

		/** The id of the relationship column. */
		relationshipColumnId: FormControl<string | null | undefined>,
	}
	export function CreateLookupDetailsFormGroup() {
		return new FormGroup<LookupDetailsFormProperties>({
			relationshipColumn: new FormControl<string | null | undefined>(undefined),
			relationshipColumnId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a relationship column. */
	export interface RelationshipDetails {

		/** The name of the table this relationship is linked to. */
		linkedTable?: string | null;
	}

	/** Details about a relationship column. */
	export interface RelationshipDetailsFormProperties {

		/** The name of the table this relationship is linked to. */
		linkedTable: FormControl<string | null | undefined>,
	}
	export function CreateRelationshipDetailsFormGroup() {
		return new FormGroup<RelationshipDetailsFormProperties>({
			linkedTable: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Response message for TablesService.ListRows. */
	export interface ListRowsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The rows from the specified table. */
		rows?: Array<Row>;
	}

	/** Response message for TablesService.ListRows. */
	export interface ListRowsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListRowsResponseFormGroup() {
		return new FormGroup<ListRowsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for TablesService.ListTables. */
	export interface ListTablesResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The list of tables. */
		tables?: Array<Table>;
	}

	/** Response message for TablesService.ListTables. */
	export interface ListTablesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTablesResponseFormGroup() {
		return new FormGroup<ListTablesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single table. NextId: 8 */
	export interface Table {

		/** List of columns in this table. Order of columns matches the display order. */
		columns?: Array<ColumnDescription>;

		/** Time when the table was created. */
		createTime?: string | null;

		/** The human readable title of the table. */
		displayName?: string | null;

		/** The resource name of the table. Table names have the form `tables/{table}`. */
		name?: string | null;

		/** Saved views for this table. */
		savedViews?: Array<SavedView>;

		/** The time zone of the table. IANA Time Zone Database time zone, e.g. "America/New_York". */
		timeZone?: string | null;

		/** Time when the table was last updated excluding updates to individual rows */
		updateTime?: string | null;
	}

	/** A single table. NextId: 8 */
	export interface TableFormProperties {

		/** Time when the table was created. */
		createTime: FormControl<string | null | undefined>,

		/** The human readable title of the table. */
		displayName: FormControl<string | null | undefined>,

		/** The resource name of the table. Table names have the form `tables/{table}`. */
		name: FormControl<string | null | undefined>,

		/** The time zone of the table. IANA Time Zone Database time zone, e.g. "America/New_York". */
		timeZone: FormControl<string | null | undefined>,

		/** Time when the table was last updated excluding updates to individual rows */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateTableFormGroup() {
		return new FormGroup<TableFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A saved view of a table. NextId: 3 */
	export interface SavedView {

		/** Internal id associated with the saved view. */
		id?: string | null;

		/** Display name of the saved view. */
		name?: string | null;
	}

	/** A saved view of a table. NextId: 3 */
	export interface SavedViewFormProperties {

		/** Internal id associated with the saved view. */
		id: FormControl<string | null | undefined>,

		/** Display name of the saved view. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSavedViewFormGroup() {
		return new FormGroup<SavedViewFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for TablesService.ListWorkspaces. */
	export interface ListWorkspacesResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The list of workspaces. */
		workspaces?: Array<Workspace>;
	}

	/** Response message for TablesService.ListWorkspaces. */
	export interface ListWorkspacesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkspacesResponseFormGroup() {
		return new FormGroup<ListWorkspacesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single workspace. */
	export interface Workspace {

		/** Time when the workspace was created. */
		createTime?: string | null;

		/** The human readable title of the workspace. */
		displayName?: string | null;

		/** The resource name of the workspace. Workspace names have the form `workspaces/{workspace}`. */
		name?: string | null;

		/** The list of tables in the workspace. */
		tables?: Array<Table>;

		/** Time when the workspace was last updated. */
		updateTime?: string | null;
	}

	/** A single workspace. */
	export interface WorkspaceFormProperties {

		/** Time when the workspace was created. */
		createTime: FormControl<string | null | undefined>,

		/** The human readable title of the workspace. */
		displayName: FormControl<string | null | undefined>,

		/** The resource name of the workspace. Workspace names have the form `workspaces/{workspace}`. */
		name: FormControl<string | null | undefined>,

		/** Time when the workspace was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceFormGroup() {
		return new FormGroup<WorkspaceFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists tables for the user.
		 * Get v1alpha1/tables
		 * @param {string} orderBy Optional. Sorting order for the list of tables on createTime/updateTime.
		 * @param {number} pageSize The maximum number of tables to return. The service may return fewer than this value. If unspecified, at most 20 tables are returned. The maximum value is 100; values above 100 are coerced to 100.
		 * @param {string} pageToken A page token, received from a previous `ListTables` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTables` must match the call that provided the page token.
		 * @return {ListTablesResponse} Successful response
		 */
		Area120tables_tables_list(orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTablesResponse> {
			return this.http.get<ListTablesResponse>(this.baseUri + 'v1alpha1/tables?orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists workspaces for the user.
		 * Get v1alpha1/workspaces
		 * @param {number} pageSize The maximum number of workspaces to return. The service may return fewer than this value. If unspecified, at most 10 workspaces are returned. The maximum value is 25; values above 25 are coerced to 25.
		 * @param {string} pageToken A page token, received from a previous `ListWorkspaces` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkspaces` must match the call that provided the page token.
		 * @return {ListWorkspacesResponse} Successful response
		 */
		Area120tables_workspaces_list(pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListWorkspacesResponse> {
			return this.http.get<ListWorkspacesResponse>(this.baseUri + 'v1alpha1/workspaces?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Deletes a row.
		 * Delete v1alpha1/{name}
		 * @param {string} name Required. The name of the row to delete. Format: tables/{table}/rows/{row}
		 * @return {Empty} Successful response
		 */
		Area120tables_tables_rows_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets a workspace. Returns NOT_FOUND if the workspace does not exist.
		 * Get v1alpha1/{name}
		 * @param {string} name Required. The name of the workspace to retrieve. Format: workspaces/{workspace}
		 * @param {CreateRowRequestView} view Optional. Column key to use for values in the row. Defaults to user entered name.
		 * @return {Workspace} Successful response
		 */
		Area120tables_workspaces_get(name: string, view: CreateRowRequestView | null | undefined): Observable<Workspace> {
			return this.http.get<Workspace>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + '&view=' + view, {});
		}

		/**
		 * Updates a row.
		 * Patch v1alpha1/{name}
		 * @param {string} name The resource name of the row. Row names have the form `tables/{table}/rows/{row}`. The name is ignored when creating a row.
		 * @param {string} updateMask The list of fields to update.
		 * @param {CreateRowRequestView} view Optional. Column key to use for values in the row. Defaults to user entered name.
		 * @return {Row} Successful response
		 */
		Area120tables_tables_rows_patch(name: string, updateMask: string | null | undefined, view: CreateRowRequestView | null | undefined, requestBody: Row): Observable<Row> {
			return this.http.patch<Row>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)) + '&view=' + view, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists rows in a table. Returns NOT_FOUND if the table does not exist.
		 * Get v1alpha1/{parent}/rows
		 * @param {string} parent Required. The parent table. Format: tables/{table}
		 * @param {string} filter Optional. Filter to only include resources matching the requirements. For more information, see [Filtering list results](https://support.google.com/area120-tables/answer/10503371).
		 * @param {string} orderBy Optional. Sorting order for the list of rows on createTime/updateTime.
		 * @param {number} pageSize The maximum number of rows to return. The service may return fewer than this value. If unspecified, at most 50 rows are returned. The maximum value is 1,000; values above 1,000 are coerced to 1,000.
		 * @param {string} pageToken A page token, received from a previous `ListRows` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRows` must match the call that provided the page token.
		 * @param {CreateRowRequestView} view Optional. Column key to use for values in the row. Defaults to user entered name.
		 * @return {ListRowsResponse} Successful response
		 */
		Area120tables_tables_rows_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: CreateRowRequestView | null | undefined): Observable<ListRowsResponse> {
			return this.http.get<ListRowsResponse>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/rows&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Creates a row.
		 * Post v1alpha1/{parent}/rows
		 * @param {string} parent Required. The parent table where this row will be created. Format: tables/{table}
		 * @param {CreateRowRequestView} view Optional. Column key to use for values in the row. Defaults to user entered name.
		 * @return {Row} Successful response
		 */
		Area120tables_tables_rows_create(parent: string, view: CreateRowRequestView | null | undefined, requestBody: Row): Observable<Row> {
			return this.http.post<Row>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/rows&view=' + view, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates multiple rows.
		 * Post v1alpha1/{parent}/rows:batchCreate
		 * @param {string} parent Required. The parent table where the rows will be created. Format: tables/{table}
		 * @return {BatchCreateRowsResponse} Successful response
		 */
		Area120tables_tables_rows_batchCreate(parent: string, requestBody: BatchCreateRowsRequest): Observable<BatchCreateRowsResponse> {
			return this.http.post<BatchCreateRowsResponse>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/rows:batchCreate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes multiple rows.
		 * Post v1alpha1/{parent}/rows:batchDelete
		 * @param {string} parent Required. The parent table shared by all rows being deleted. Format: tables/{table}
		 * @return {Empty} Successful response
		 */
		Area120tables_tables_rows_batchDelete(parent: string, requestBody: BatchDeleteRowsRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/rows:batchDelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates multiple rows.
		 * Post v1alpha1/{parent}/rows:batchUpdate
		 * @param {string} parent Required. The parent table shared by all rows being updated. Format: tables/{table}
		 * @return {BatchUpdateRowsResponse} Successful response
		 */
		Area120tables_tables_rows_batchUpdate(parent: string, requestBody: BatchUpdateRowsRequest): Observable<BatchUpdateRowsResponse> {
			return this.http.post<BatchUpdateRowsResponse>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/rows:batchUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

