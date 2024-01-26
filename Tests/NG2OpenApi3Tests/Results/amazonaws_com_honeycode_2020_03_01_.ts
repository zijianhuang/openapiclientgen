import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchCreateTableRowsResult {

		/** Required */
		workbookCursor: number;

		/** Required */
		createdRows: CreatedRowsMap;
		failedBatchItems?: Array<FailedBatchItem>;
	}
	export interface BatchCreateTableRowsResultFormProperties {

		/** Required */
		workbookCursor: FormControl<number | null | undefined>,
	}
	export function CreateBatchCreateTableRowsResultFormGroup() {
		return new FormGroup<BatchCreateTableRowsResultFormProperties>({
			workbookCursor: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatedRowsMap {
	}
	export interface CreatedRowsMapFormProperties {
	}
	export function CreateCreatedRowsMapFormGroup() {
		return new FormGroup<CreatedRowsMapFormProperties>({
		});

	}


	/**  A single item in a batch that failed to perform the intended action because of an error preventing it from succeeding.  */
	export interface FailedBatchItem {

		/** Required */
		id: string;

		/** Required */
		errorMessage: string;
	}

	/**  A single item in a batch that failed to perform the intended action because of an error preventing it from succeeding.  */
	export interface FailedBatchItemFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateFailedBatchItemFormGroup() {
		return new FormGroup<FailedBatchItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			errorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Data needed to create a single row in a table as part of the BatchCreateTableRows request.  */
	export interface CreateRowData {

		/** Required */
		batchItemId: string;

		/** Required */
		cellsToCreate: RowDataInput;
	}

	/**  Data needed to create a single row in a table as part of the BatchCreateTableRows request.  */
	export interface CreateRowDataFormProperties {

		/** Required */
		batchItemId: FormControl<string | null | undefined>,
	}
	export function CreateCreateRowDataFormGroup() {
		return new FormGroup<CreateRowDataFormProperties>({
			batchItemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RowDataInput {
	}
	export interface RowDataInputFormProperties {
	}
	export function CreateRowDataInputFormGroup() {
		return new FormGroup<RowDataInputFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface RequestTimeoutException {
	}
	export interface RequestTimeoutExceptionFormProperties {
	}
	export function CreateRequestTimeoutExceptionFormGroup() {
		return new FormGroup<RequestTimeoutExceptionFormProperties>({
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface BatchDeleteTableRowsResult {

		/** Required */
		workbookCursor: number;
		failedBatchItems?: Array<FailedBatchItem>;
	}
	export interface BatchDeleteTableRowsResultFormProperties {

		/** Required */
		workbookCursor: FormControl<number | null | undefined>,
	}
	export function CreateBatchDeleteTableRowsResultFormGroup() {
		return new FormGroup<BatchDeleteTableRowsResultFormProperties>({
			workbookCursor: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchUpdateTableRowsResult {

		/** Required */
		workbookCursor: number;
		failedBatchItems?: Array<FailedBatchItem>;
	}
	export interface BatchUpdateTableRowsResultFormProperties {

		/** Required */
		workbookCursor: FormControl<number | null | undefined>,
	}
	export function CreateBatchUpdateTableRowsResultFormGroup() {
		return new FormGroup<BatchUpdateTableRowsResultFormProperties>({
			workbookCursor: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Data needed to create a single row in a table as part of the BatchCreateTableRows request.  */
	export interface UpdateRowData {

		/** Required */
		rowId: string;

		/** Required */
		cellsToUpdate: RowDataInput;
	}

	/**  Data needed to create a single row in a table as part of the BatchCreateTableRows request.  */
	export interface UpdateRowDataFormProperties {

		/** Required */
		rowId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRowDataFormGroup() {
		return new FormGroup<UpdateRowDataFormProperties>({
			rowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchUpsertTableRowsResult {

		/** Required */
		rows: UpsertRowsResultMap;

		/** Required */
		workbookCursor: number;
		failedBatchItems?: Array<FailedBatchItem>;
	}
	export interface BatchUpsertTableRowsResultFormProperties {

		/** Required */
		workbookCursor: FormControl<number | null | undefined>,
	}
	export function CreateBatchUpsertTableRowsResultFormGroup() {
		return new FormGroup<BatchUpsertTableRowsResultFormProperties>({
			workbookCursor: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpsertRowsResultMap {
	}
	export interface UpsertRowsResultMapFormProperties {
	}
	export function CreateUpsertRowsResultMapFormGroup() {
		return new FormGroup<UpsertRowsResultMapFormProperties>({
		});

	}


	/**  Data needed to upsert rows in a table as part of a single item in the BatchUpsertTableRows request.  */
	export interface UpsertRowData {

		/** Required */
		batchItemId: string;

		/** Required */
		filter: Filter;

		/** Required */
		cellsToUpdate: RowDataInput;
	}

	/**  Data needed to upsert rows in a table as part of a single item in the BatchUpsertTableRows request.  */
	export interface UpsertRowDataFormProperties {

		/** Required */
		batchItemId: FormControl<string | null | undefined>,
	}
	export function CreateUpsertRowDataFormGroup() {
		return new FormGroup<UpsertRowDataFormProperties>({
			batchItemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  An object that represents a filter formula along with the id of the context row under which the filter function needs to evaluate.  */
	export interface Filter {

		/** Required */
		formula: string;
		contextRowId?: string;
	}

	/**  An object that represents a filter formula along with the id of the context row under which the filter function needs to evaluate.  */
	export interface FilterFormProperties {

		/** Required */
		formula: FormControl<string | null | undefined>,
		contextRowId: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			formula: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			contextRowId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeTableDataImportJobResult {

		/** Required */
		jobStatus: TableDataImportJobStatus;

		/** Required */
		message: string;

		/** Required */
		jobMetadata: TableDataImportJobMetadata;
		errorCode?: ErrorCode;
	}
	export interface DescribeTableDataImportJobResultFormProperties {

		/** Required */
		jobStatus: FormControl<TableDataImportJobStatus | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
		errorCode: FormControl<ErrorCode | null | undefined>,
	}
	export function CreateDescribeTableDataImportJobResultFormGroup() {
		return new FormGroup<DescribeTableDataImportJobResultFormProperties>({
			jobStatus: new FormControl<TableDataImportJobStatus | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			errorCode: new FormControl<ErrorCode | null | undefined>(undefined),
		});

	}

	export enum TableDataImportJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3 }


	/** The metadata associated with the table data import job that was submitted. */
	export interface TableDataImportJobMetadata {

		/** Required */
		submitter: ImportJobSubmitter;

		/** Required */
		submitTime: Date;

		/** Required */
		importOptions: ImportOptions;

		/** Required */
		dataSource: ImportDataSource;
	}

	/** The metadata associated with the table data import job that was submitted. */
	export interface TableDataImportJobMetadataFormProperties {

		/** Required */
		submitTime: FormControl<Date | null | undefined>,
	}
	export function CreateTableDataImportJobMetadataFormGroup() {
		return new FormGroup<TableDataImportJobMetadataFormProperties>({
			submitTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that contains the attributes of the submitter of the import job. */
	export interface ImportJobSubmitter {
		email?: string;
		userArn?: string;
	}

	/** An object that contains the attributes of the submitter of the import job. */
	export interface ImportJobSubmitterFormProperties {
		email: FormControl<string | null | undefined>,
		userArn: FormControl<string | null | undefined>,
	}
	export function CreateImportJobSubmitterFormGroup() {
		return new FormGroup<ImportJobSubmitterFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			userArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains the options specified by the sumitter of the import request. */
	export interface ImportOptions {
		destinationOptions?: DestinationOptions;
		delimitedTextOptions?: DelimitedTextImportOptions;
	}

	/** An object that contains the options specified by the sumitter of the import request. */
	export interface ImportOptionsFormProperties {
	}
	export function CreateImportOptionsFormGroup() {
		return new FormGroup<ImportOptionsFormProperties>({
		});

	}


	/** An object that contains the options relating to the destination of the import request. */
	export interface DestinationOptions {
		columnMap?: ImportColumnMap;
	}

	/** An object that contains the options relating to the destination of the import request. */
	export interface DestinationOptionsFormProperties {
	}
	export function CreateDestinationOptionsFormGroup() {
		return new FormGroup<DestinationOptionsFormProperties>({
		});

	}

	export interface ImportColumnMap {
	}
	export interface ImportColumnMapFormProperties {
	}
	export function CreateImportColumnMapFormGroup() {
		return new FormGroup<ImportColumnMapFormProperties>({
		});

	}


	/**  An object that contains the options relating to parsing delimited text as part of an import request.  */
	export interface DelimitedTextImportOptions {

		/** Required */
		delimiter: string;
		hasHeaderRow?: boolean | null;
		ignoreEmptyRows?: boolean | null;
		dataCharacterEncoding?: ImportDataCharacterEncoding;
	}

	/**  An object that contains the options relating to parsing delimited text as part of an import request.  */
	export interface DelimitedTextImportOptionsFormProperties {

		/** Required */
		delimiter: FormControl<string | null | undefined>,
		hasHeaderRow: FormControl<boolean | null | undefined>,
		ignoreEmptyRows: FormControl<boolean | null | undefined>,
		dataCharacterEncoding: FormControl<ImportDataCharacterEncoding | null | undefined>,
	}
	export function CreateDelimitedTextImportOptionsFormGroup() {
		return new FormGroup<DelimitedTextImportOptionsFormProperties>({
			delimiter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hasHeaderRow: new FormControl<boolean | null | undefined>(undefined),
			ignoreEmptyRows: new FormControl<boolean | null | undefined>(undefined),
			dataCharacterEncoding: new FormControl<ImportDataCharacterEncoding | null | undefined>(undefined),
		});

	}

	export enum ImportDataCharacterEncoding { 'UTF-8' = 0, 'US-ASCII' = 1, 'ISO-8859-1' = 2, 'UTF-16BE' = 3, 'UTF-16LE' = 4, 'UTF-16' = 5 }


	/** An object that has details about the source of the data that was submitted for import. */
	export interface ImportDataSource {

		/** Required */
		dataSourceConfig: ImportDataSourceConfig;
	}

	/** An object that has details about the source of the data that was submitted for import. */
	export interface ImportDataSourceFormProperties {
	}
	export function CreateImportDataSourceFormGroup() {
		return new FormGroup<ImportDataSourceFormProperties>({
		});

	}


	/**  An object that contains the configuration parameters for the data source of an import request.  */
	export interface ImportDataSourceConfig {
		dataSourceUrl?: string;
	}

	/**  An object that contains the configuration parameters for the data source of an import request.  */
	export interface ImportDataSourceConfigFormProperties {
		dataSourceUrl: FormControl<string | null | undefined>,
	}
	export function CreateImportDataSourceConfigFormGroup() {
		return new FormGroup<ImportDataSourceConfigFormProperties>({
			dataSourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ErrorCode { ACCESS_DENIED = 0, INVALID_URL_ERROR = 1, INVALID_IMPORT_OPTIONS_ERROR = 2, INVALID_TABLE_ID_ERROR = 3, INVALID_TABLE_COLUMN_ID_ERROR = 4, TABLE_NOT_FOUND_ERROR = 5, FILE_EMPTY_ERROR = 6, INVALID_FILE_TYPE_ERROR = 7, FILE_PARSING_ERROR = 8, FILE_SIZE_LIMIT_ERROR = 9, FILE_NOT_FOUND_ERROR = 10, UNKNOWN_ERROR = 11, RESOURCE_NOT_FOUND_ERROR = 12, SYSTEM_LIMIT_ERROR = 13 }

	export interface GetScreenDataResult {

		/** Required */
		results: ResultSetMap;

		/** Required */
		workbookCursor: number;
		nextToken?: string;
	}
	export interface GetScreenDataResultFormProperties {

		/** Required */
		workbookCursor: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetScreenDataResultFormGroup() {
		return new FormGroup<GetScreenDataResultFormProperties>({
			workbookCursor: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResultSetMap {
	}
	export interface ResultSetMapFormProperties {
	}
	export function CreateResultSetMapFormGroup() {
		return new FormGroup<ResultSetMapFormProperties>({
		});

	}


	/** The input variables to the app to be used by the InvokeScreenAutomation action request. */
	export interface VariableValue {

		/** Required */
		rawValue: string;
	}

	/** The input variables to the app to be used by the InvokeScreenAutomation action request. */
	export interface VariableValueFormProperties {

		/** Required */
		rawValue: FormControl<string | null | undefined>,
	}
	export function CreateVariableValueFormGroup() {
		return new FormGroup<VariableValueFormProperties>({
			rawValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvokeScreenAutomationResult {

		/** Required */
		workbookCursor: number;
	}
	export interface InvokeScreenAutomationResultFormProperties {

		/** Required */
		workbookCursor: FormControl<number | null | undefined>,
	}
	export function CreateInvokeScreenAutomationResultFormGroup() {
		return new FormGroup<InvokeScreenAutomationResultFormProperties>({
			workbookCursor: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AutomationExecutionException {
	}
	export interface AutomationExecutionExceptionFormProperties {
	}
	export function CreateAutomationExecutionExceptionFormGroup() {
		return new FormGroup<AutomationExecutionExceptionFormProperties>({
		});

	}

	export interface AutomationExecutionTimeoutException {
	}
	export interface AutomationExecutionTimeoutExceptionFormProperties {
	}
	export function CreateAutomationExecutionTimeoutExceptionFormGroup() {
		return new FormGroup<AutomationExecutionTimeoutExceptionFormProperties>({
		});

	}

	export interface ListTableColumnsResult {

		/** Required */
		tableColumns: Array<TableColumn>;
		nextToken?: string;
		workbookCursor?: number | null;
	}
	export interface ListTableColumnsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
		workbookCursor: FormControl<number | null | undefined>,
	}
	export function CreateListTableColumnsResultFormGroup() {
		return new FormGroup<ListTableColumnsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			workbookCursor: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that contains attributes about a single column in a table */
	export interface TableColumn {
		tableColumnId?: string;
		tableColumnName?: string;
		format?: Format;
	}

	/** An object that contains attributes about a single column in a table */
	export interface TableColumnFormProperties {
		tableColumnId: FormControl<string | null | undefined>,
		tableColumnName: FormControl<string | null | undefined>,
		format: FormControl<Format | null | undefined>,
	}
	export function CreateTableColumnFormGroup() {
		return new FormGroup<TableColumnFormProperties>({
			tableColumnId: new FormControl<string | null | undefined>(undefined),
			tableColumnName: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<Format | null | undefined>(undefined),
		});

	}

	export enum Format { AUTO = 0, NUMBER = 1, CURRENCY = 2, DATE = 3, TIME = 4, DATE_TIME = 5, PERCENTAGE = 6, TEXT = 7, ACCOUNTING = 8, CONTACT = 9, ROWLINK = 10, ROWSET = 11 }

	export interface ListTableRowsResult {

		/** Required */
		columnIds: Array<string>;

		/** Required */
		rows: Array<TableRow>;
		rowIdsNotFound?: Array<string>;
		nextToken?: string;

		/** Required */
		workbookCursor: number;
	}
	export interface ListTableRowsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		workbookCursor: FormControl<number | null | undefined>,
	}
	export function CreateListTableRowsResultFormGroup() {
		return new FormGroup<ListTableRowsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			workbookCursor: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that contains attributes about a single row in a table */
	export interface TableRow {

		/** Required */
		rowId: string;

		/** Required */
		cells: Array<Cell>;
	}

	/** An object that contains attributes about a single row in a table */
	export interface TableRowFormProperties {

		/** Required */
		rowId: FormControl<string | null | undefined>,
	}
	export function CreateTableRowFormGroup() {
		return new FormGroup<TableRowFormProperties>({
			rowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents a single cell in a table. */
	export interface Cell {
		formula?: string;
		format?: Format;
		rawValue?: string;
		formattedValue?: string;
		formattedValues?: Array<string>;
	}

	/** An object that represents a single cell in a table. */
	export interface CellFormProperties {
		formula: FormControl<string | null | undefined>,
		format: FormControl<Format | null | undefined>,
		rawValue: FormControl<string | null | undefined>,
		formattedValue: FormControl<string | null | undefined>,
	}
	export function CreateCellFormGroup() {
		return new FormGroup<CellFormProperties>({
			formula: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<Format | null | undefined>(undefined),
			rawValue: new FormControl<string | null | undefined>(undefined),
			formattedValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTablesResult {

		/** Required */
		tables: Array<Table>;
		nextToken?: string;
		workbookCursor?: number | null;
	}
	export interface ListTablesResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
		workbookCursor: FormControl<number | null | undefined>,
	}
	export function CreateListTablesResultFormGroup() {
		return new FormGroup<ListTablesResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			workbookCursor: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object representing the properties of a table in a workbook. */
	export interface Table {
		tableId?: string;
		tableName?: string;
	}

	/** An object representing the properties of a table in a workbook. */
	export interface TableFormProperties {
		tableId: FormControl<string | null | undefined>,
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateTableFormGroup() {
		return new FormGroup<TableFormProperties>({
			tableId: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResult {
		tags?: TagsMap;
	}
	export interface ListTagsForResourceResultFormProperties {
	}
	export function CreateListTagsForResourceResultFormGroup() {
		return new FormGroup<ListTagsForResourceResultFormProperties>({
		});

	}


	/** A string to string map representing tags */
	export interface TagsMap {
	}

	/** A string to string map representing tags */
	export interface TagsMapFormProperties {
	}
	export function CreateTagsMapFormGroup() {
		return new FormGroup<TagsMapFormProperties>({
		});

	}

	export interface QueryTableRowsResult {

		/** Required */
		columnIds: Array<string>;

		/** Required */
		rows: Array<TableRow>;
		nextToken?: string;

		/** Required */
		workbookCursor: number;
	}
	export interface QueryTableRowsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		workbookCursor: FormControl<number | null | undefined>,
	}
	export function CreateQueryTableRowsResultFormGroup() {
		return new FormGroup<QueryTableRowsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			workbookCursor: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartTableDataImportJobResult {

		/** Required */
		jobId: string;

		/** Required */
		jobStatus: TableDataImportJobStatus;
	}
	export interface StartTableDataImportJobResultFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,

		/** Required */
		jobStatus: FormControl<TableDataImportJobStatus | null | undefined>,
	}
	export function CreateStartTableDataImportJobResultFormGroup() {
		return new FormGroup<StartTableDataImportJobResultFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobStatus: new FormControl<TableDataImportJobStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceResult {
	}
	export interface TagResourceResultFormProperties {
	}
	export function CreateTagResourceResultFormGroup() {
		return new FormGroup<TagResourceResultFormProperties>({
		});

	}

	export interface UntagResourceResult {
	}
	export interface UntagResourceResultFormProperties {
	}
	export function CreateUntagResourceResultFormGroup() {
		return new FormGroup<UntagResourceResultFormProperties>({
		});

	}

	export interface BatchCreateTableRowsRequest {

		/** Required */
		rowsToCreate: Array<CreateRowData>;
		clientRequestToken?: string;
	}
	export interface BatchCreateTableRowsRequestFormProperties {
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchCreateTableRowsRequestFormGroup() {
		return new FormGroup<BatchCreateTableRowsRequestFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchDeleteTableRowsRequest {

		/** Required */
		rowIds: Array<string>;
		clientRequestToken?: string;
	}
	export interface BatchDeleteTableRowsRequestFormProperties {
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteTableRowsRequestFormGroup() {
		return new FormGroup<BatchDeleteTableRowsRequestFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchUpdateTableRowsRequest {

		/** Required */
		rowsToUpdate: Array<UpdateRowData>;
		clientRequestToken?: string;
	}
	export interface BatchUpdateTableRowsRequestFormProperties {
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchUpdateTableRowsRequestFormGroup() {
		return new FormGroup<BatchUpdateTableRowsRequestFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchUpsertTableRowsRequest {

		/** Required */
		rowsToUpsert: Array<UpsertRowData>;
		clientRequestToken?: string;
	}
	export interface BatchUpsertTableRowsRequestFormProperties {
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchUpsertTableRowsRequestFormGroup() {
		return new FormGroup<BatchUpsertTableRowsRequestFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p> CellInput object contains the data needed to create or update cells in a table. </p> <note> <p> CellInput object has only a facts field or a fact field, but not both. A 400 bad request will be thrown if both fact and facts field are present. </p> </note> */
	export interface CellInput {
		fact?: string;
		facts?: Array<string>;
	}

	/** <p> CellInput object contains the data needed to create or update cells in a table. </p> <note> <p> CellInput object has only a facts field or a fact field, but not both. A 400 bad request will be thrown if both fact and facts field are present. </p> </note> */
	export interface CellInputFormProperties {
		fact: FormControl<string | null | undefined>,
	}
	export function CreateCellInputFormGroup() {
		return new FormGroup<CellInputFormProperties>({
			fact: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for column in the table. */
	export interface ColumnMetadata {

		/** Required */
		name: string;

		/** Required */
		format: Format;
	}

	/** Metadata for column in the table. */
	export interface ColumnMetadataFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		format: FormControl<Format | null | undefined>,
	}
	export function CreateColumnMetadataFormGroup() {
		return new FormGroup<ColumnMetadataFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<Format | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The data in a particular data cell defined on the screen. */
	export interface DataItem {
		overrideFormat?: Format;
		rawValue?: string;
		formattedValue?: string;
	}

	/** The data in a particular data cell defined on the screen. */
	export interface DataItemFormProperties {
		overrideFormat: FormControl<Format | null | undefined>,
		rawValue: FormControl<string | null | undefined>,
		formattedValue: FormControl<string | null | undefined>,
	}
	export function CreateDataItemFormGroup() {
		return new FormGroup<DataItemFormProperties>({
			overrideFormat: new FormControl<Format | null | undefined>(undefined),
			rawValue: new FormControl<string | null | undefined>(undefined),
			formattedValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeTableDataImportJobRequest {
	}
	export interface DescribeTableDataImportJobRequestFormProperties {
	}
	export function CreateDescribeTableDataImportJobRequestFormGroup() {
		return new FormGroup<DescribeTableDataImportJobRequestFormProperties>({
		});

	}

	export interface VariableValueMap {
	}
	export interface VariableValueMapFormProperties {
	}
	export function CreateVariableValueMapFormGroup() {
		return new FormGroup<VariableValueMapFormProperties>({
		});

	}

	export interface GetScreenDataRequest {

		/** Required */
		workbookId: string;

		/** Required */
		appId: string;

		/** Required */
		screenId: string;
		variables?: VariableValueMap;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface GetScreenDataRequestFormProperties {

		/** Required */
		workbookId: FormControl<string | null | undefined>,

		/** Required */
		appId: FormControl<string | null | undefined>,

		/** Required */
		screenId: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetScreenDataRequestFormGroup() {
		return new FormGroup<GetScreenDataRequestFormProperties>({
			workbookId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			screenId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains the properties for importing data to a specific column in a table. */
	export interface SourceDataColumnProperties {
		columnIndex?: number | null;
	}

	/** An object that contains the properties for importing data to a specific column in a table. */
	export interface SourceDataColumnPropertiesFormProperties {
		columnIndex: FormControl<number | null | undefined>,
	}
	export function CreateSourceDataColumnPropertiesFormGroup() {
		return new FormGroup<SourceDataColumnPropertiesFormProperties>({
			columnIndex: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ImportSourceDataFormat { DELIMITED_TEXT = 0 }

	export interface InvokeScreenAutomationRequest {
		variables?: VariableValueMap;
		rowId?: string;
		clientRequestToken?: string;
	}
	export interface InvokeScreenAutomationRequestFormProperties {
		rowId: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateInvokeScreenAutomationRequestFormGroup() {
		return new FormGroup<InvokeScreenAutomationRequestFormProperties>({
			rowId: new FormControl<string | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTableColumnsRequest {
	}
	export interface ListTableColumnsRequestFormProperties {
	}
	export function CreateListTableColumnsRequestFormGroup() {
		return new FormGroup<ListTableColumnsRequestFormProperties>({
		});

	}

	export interface ListTableRowsRequest {
		rowIds?: Array<string>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListTableRowsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTableRowsRequestFormGroup() {
		return new FormGroup<ListTableRowsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTablesRequest {
	}
	export interface ListTablesRequestFormProperties {
	}
	export function CreateListTablesRequestFormGroup() {
		return new FormGroup<ListTablesRequestFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export interface QueryTableRowsRequest {

		/** Required */
		filterFormula: Filter;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface QueryTableRowsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateQueryTableRowsRequestFormGroup() {
		return new FormGroup<QueryTableRowsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single row in the ResultSet. */
	export interface ResultRow {
		rowId?: string;

		/** Required */
		dataItems: Array<DataItem>;
	}

	/** A single row in the ResultSet. */
	export interface ResultRowFormProperties {
		rowId: FormControl<string | null | undefined>,
	}
	export function CreateResultRowFormGroup() {
		return new FormGroup<ResultRowFormProperties>({
			rowId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  ResultSet contains the results of the request for a single block or list defined on the screen.  */
	export interface ResultSet {

		/** Required */
		headers: Array<ColumnMetadata>;

		/** Required */
		rows: Array<ResultRow>;
	}

	/**  ResultSet contains the results of the request for a single block or list defined on the screen.  */
	export interface ResultSetFormProperties {
	}
	export function CreateResultSetFormGroup() {
		return new FormGroup<ResultSetFormProperties>({
		});

	}

	export interface StartTableDataImportJobRequest {

		/** Required */
		dataSource: ImportDataSource;

		/** Required */
		dataFormat: ImportSourceDataFormat;

		/** Required */
		importOptions: ImportOptions;

		/** Required */
		clientRequestToken: string;
	}
	export interface StartTableDataImportJobRequestFormProperties {

		/** Required */
		dataFormat: FormControl<ImportSourceDataFormat | null | undefined>,

		/** Required */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartTableDataImportJobRequestFormGroup() {
		return new FormGroup<StartTableDataImportJobRequestFormProperties>({
			dataFormat: new FormControl<ImportSourceDataFormat | null | undefined>(undefined, [Validators.required]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: TagsMap;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export enum UpsertAction { UPDATED = 0, APPENDED = 1 }


	/**  An object that represents the result of a single upsert row request.  */
	export interface UpsertRowsResult {

		/** Required */
		rowIds: Array<string>;

		/** Required */
		upsertAction: UpsertAction;
	}

	/**  An object that represents the result of a single upsert row request.  */
	export interface UpsertRowsResultFormProperties {

		/** Required */
		upsertAction: FormControl<UpsertAction | null | undefined>,
	}
	export function CreateUpsertRowsResultFormGroup() {
		return new FormGroup<UpsertRowsResultFormProperties>({
			upsertAction: new FormControl<UpsertAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p> The BatchCreateTableRows API allows you to create one or more rows at the end of a table in a workbook. The API allows you to specify the values to set in some or all of the columns in the new rows. </p> <p> If a column is not explicitly set in a specific row, then the column level formula specified in the table will be applied to the new row. If there is no column level formula but the last row of the table has a formula, then that formula will be copied down to the new row. If there is no column level formula and no formula in the last row of the table, then that column will be left blank for the new rows. </p>
		 * Post workbooks/{workbookId}/tables/{tableId}/rows/batchcreate
		 * @param {string} workbookId <p>The ID of the workbook where the new rows are being added.</p> <p> If a workbook with the specified ID could not be found, this API throws ResourceNotFoundException. </p>
		 * @param {string} tableId <p>The ID of the table where the new rows are being added.</p> <p> If a table with the specified ID could not be found, this API throws ResourceNotFoundException. </p>
		 * @return {BatchCreateTableRowsResult} Success
		 */
		BatchCreateTableRows(workbookId: string, tableId: string, requestBody: BatchCreateTableRowsPostBody): Observable<BatchCreateTableRowsResult> {
			return this.http.post<BatchCreateTableRowsResult>(this.baseUri + 'workbooks/' + (workbookId == null ? '' : encodeURIComponent(workbookId)) + '/tables/' + (tableId == null ? '' : encodeURIComponent(tableId)) + '/rows/batchcreate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The BatchDeleteTableRows API allows you to delete one or more rows from a table in a workbook. You need to specify the ids of the rows that you want to delete from the table.
		 * Post workbooks/{workbookId}/tables/{tableId}/rows/batchdelete
		 * @param {string} workbookId <p>The ID of the workbook where the rows are being deleted.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>
		 * @param {string} tableId <p>The ID of the table where the rows are being deleted.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>
		 * @return {BatchDeleteTableRowsResult} Success
		 */
		BatchDeleteTableRows(workbookId: string, tableId: string, requestBody: BatchDeleteTableRowsPostBody): Observable<BatchDeleteTableRowsResult> {
			return this.http.post<BatchDeleteTableRowsResult>(this.baseUri + 'workbooks/' + (workbookId == null ? '' : encodeURIComponent(workbookId)) + '/tables/' + (tableId == null ? '' : encodeURIComponent(tableId)) + '/rows/batchdelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The BatchUpdateTableRows API allows you to update one or more rows in a table in a workbook. </p> <p> You can specify the values to set in some or all of the columns in the table for the specified rows. If a column is not explicitly specified in a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>
		 * Post workbooks/{workbookId}/tables/{tableId}/rows/batchupdate
		 * @param {string} workbookId <p>The ID of the workbook where the rows are being updated.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>
		 * @param {string} tableId <p>The ID of the table where the rows are being updated.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>
		 * @return {BatchUpdateTableRowsResult} Success
		 */
		BatchUpdateTableRows(workbookId: string, tableId: string, requestBody: BatchUpdateTableRowsPostBody): Observable<BatchUpdateTableRowsResult> {
			return this.http.post<BatchUpdateTableRowsResult>(this.baseUri + 'workbooks/' + (workbookId == null ? '' : encodeURIComponent(workbookId)) + '/tables/' + (tableId == null ? '' : encodeURIComponent(tableId)) + '/rows/batchupdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The BatchUpsertTableRows API allows you to upsert one or more rows in a table. The upsert operation takes a filter expression as input and evaluates it to find matching rows on the destination table. If matching rows are found, it will update the cells in the matching rows to new values specified in the request. If no matching rows are found, a new row is added at the end of the table and the cells in that row are set to the new values specified in the request. </p> <p> You can specify the values to set in some or all of the columns in the table for the matching or newly appended rows. If a column is not explicitly specified for a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>
		 * Post workbooks/{workbookId}/tables/{tableId}/rows/batchupsert
		 * @param {string} workbookId <p>The ID of the workbook where the rows are being upserted.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>
		 * @param {string} tableId <p>The ID of the table where the rows are being upserted.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>
		 * @return {BatchUpsertTableRowsResult} Success
		 */
		BatchUpsertTableRows(workbookId: string, tableId: string, requestBody: BatchUpsertTableRowsPostBody): Observable<BatchUpsertTableRowsResult> {
			return this.http.post<BatchUpsertTableRowsResult>(this.baseUri + 'workbooks/' + (workbookId == null ? '' : encodeURIComponent(workbookId)) + '/tables/' + (tableId == null ? '' : encodeURIComponent(tableId)) + '/rows/batchupsert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The DescribeTableDataImportJob API allows you to retrieve the status and details of a table data import job.
		 * Get workbooks/{workbookId}/tables/{tableId}/import/{jobId}
		 * @param {string} workbookId <p>The ID of the workbook into which data was imported.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>
		 * @param {string} tableId <p>The ID of the table into which data was imported.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>
		 * @param {string} jobId <p>The ID of the job that was returned by the StartTableDataImportJob request.</p> <p> If a job with the specified id could not be found, this API throws ResourceNotFoundException. </p>
		 * @return {DescribeTableDataImportJobResult} Success
		 */
		DescribeTableDataImportJob(workbookId: string, tableId: string, jobId: string): Observable<DescribeTableDataImportJobResult> {
			return this.http.get<DescribeTableDataImportJobResult>(this.baseUri + 'workbooks/' + (workbookId == null ? '' : encodeURIComponent(workbookId)) + '/tables/' + (tableId == null ? '' : encodeURIComponent(tableId)) + '/import/' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}

		/**
		 * The GetScreenData API allows retrieval of data from a screen in a Honeycode app. The API allows setting local variables in the screen to filter, sort or otherwise affect what will be displayed on the screen.
		 * Post screendata
		 * @return {GetScreenDataResult} Success
		 */
		GetScreenData(requestBody: GetScreenDataPostBody): Observable<GetScreenDataResult> {
			return this.http.post<GetScreenDataResult>(this.baseUri + 'screendata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The InvokeScreenAutomation API allows invoking an action defined in a screen in a Honeycode app. The API allows setting local variables, which can then be used in the automation being invoked. This allows automating the Honeycode app interactions to write, update or delete data in the workbook.
		 * Post workbooks/{workbookId}/apps/{appId}/screens/{screenId}/automations/{automationId}
		 * @param {string} workbookId The ID of the workbook that contains the screen automation.
		 * @param {string} appId The ID of the app that contains the screen automation.
		 * @param {string} screenId The ID of the screen that contains the screen automation.
		 * @param {string} automationId The ID of the automation action to be performed.
		 * @return {InvokeScreenAutomationResult} Success
		 */
		InvokeScreenAutomation(workbookId: string, appId: string, screenId: string, automationId: string, requestBody: InvokeScreenAutomationPostBody): Observable<InvokeScreenAutomationResult> {
			return this.http.post<InvokeScreenAutomationResult>(this.baseUri + 'workbooks/' + (workbookId == null ? '' : encodeURIComponent(workbookId)) + '/apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/screens/' + (screenId == null ? '' : encodeURIComponent(screenId)) + '/automations/' + (automationId == null ? '' : encodeURIComponent(automationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The ListTableColumns API allows you to retrieve a list of all the columns in a table in a workbook.
		 * Get workbooks/{workbookId}/tables/{tableId}/columns
		 * @param {string} workbookId <p>The ID of the workbook that contains the table whose columns are being retrieved.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>
		 * @param {string} tableId <p>The ID of the table whose columns are being retrieved.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>
		 * @param {string} nextToken <p> This parameter is optional. If a nextToken is not specified, the API returns the first page of data. </p> <p> Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. </p>
		 * @return {ListTableColumnsResult} Success
		 */
		ListTableColumns(workbookId: string, tableId: string, nextToken: string | null | undefined): Observable<ListTableColumnsResult> {
			return this.http.get<ListTableColumnsResult>(this.baseUri + 'workbooks/' + (workbookId == null ? '' : encodeURIComponent(workbookId)) + '/tables/' + (tableId == null ? '' : encodeURIComponent(tableId)) + '/columns&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * The ListTableRows API allows you to retrieve a list of all the rows in a table in a workbook.
		 * Post workbooks/{workbookId}/tables/{tableId}/rows/list
		 * @param {string} workbookId <p>The ID of the workbook that contains the table whose rows are being retrieved.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>
		 * @param {string} tableId <p>The ID of the table whose rows are being retrieved.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTableRowsResult} Success
		 */
		ListTableRows(workbookId: string, tableId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTableRowsPostBody): Observable<ListTableRowsResult> {
			return this.http.post<ListTableRowsResult>(this.baseUri + 'workbooks/' + (workbookId == null ? '' : encodeURIComponent(workbookId)) + '/tables/' + (tableId == null ? '' : encodeURIComponent(tableId)) + '/rows/list&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The ListTables API allows you to retrieve a list of all the tables in a workbook.
		 * Get workbooks/{workbookId}/tables
		 * @param {string} workbookId <p>The ID of the workbook whose tables are being retrieved.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>
		 * @param {number} maxResults The maximum number of tables to return in each page of the results.
		 * @param {string} nextToken <p> This parameter is optional. If a nextToken is not specified, the API returns the first page of data. </p> <p> Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. </p>
		 * @return {ListTablesResult} Success
		 */
		ListTables(workbookId: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListTablesResult> {
			return this.http.get<ListTablesResult>(this.baseUri + 'workbooks/' + (workbookId == null ? '' : encodeURIComponent(workbookId)) + '/tables&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * The ListTagsForResource API allows you to return a resource's tags.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The resource's Amazon Resource Name (ARN).
		 * @return {ListTagsForResourceResult} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResult> {
			return this.http.get<ListTagsForResourceResult>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * The TagResource API allows you to add tags to an ARN-able resource. Resource includes workbook, table, screen and screen-automation.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The resource's Amazon Resource Name (ARN).
		 * @return {TagResourceResult} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResult> {
			return this.http.post<TagResourceResult>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The QueryTableRows API allows you to use a filter formula to query for specific rows in a table.
		 * Post workbooks/{workbookId}/tables/{tableId}/rows/query
		 * @param {string} workbookId <p>The ID of the workbook whose table rows are being queried.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>
		 * @param {string} tableId <p>The ID of the table whose rows are being queried.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {QueryTableRowsResult} Success
		 */
		QueryTableRows(workbookId: string, tableId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: QueryTableRowsPostBody): Observable<QueryTableRowsResult> {
			return this.http.post<QueryTableRowsResult>(this.baseUri + 'workbooks/' + (workbookId == null ? '' : encodeURIComponent(workbookId)) + '/tables/' + (tableId == null ? '' : encodeURIComponent(tableId)) + '/rows/query&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The StartTableDataImportJob API allows you to start an import job on a table. This API will only return the id of the job that was started. To find out the status of the import request, you need to call the DescribeTableDataImportJob API.
		 * Post workbooks/{workbookId}/tables/{tableId}/import
		 * @param {string} workbookId <p>The ID of the workbook where the rows are being imported.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>
		 * @param {string} tableId <p>The ID of the table where the rows are being imported.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>
		 * @return {StartTableDataImportJobResult} Success
		 */
		StartTableDataImportJob(workbookId: string, tableId: string, requestBody: StartTableDataImportJobPostBody): Observable<StartTableDataImportJobResult> {
			return this.http.post<StartTableDataImportJobResult>(this.baseUri + 'workbooks/' + (workbookId == null ? '' : encodeURIComponent(workbookId)) + '/tables/' + (tableId == null ? '' : encodeURIComponent(tableId)) + '/import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The UntagResource API allows you to removes tags from an ARN-able resource. Resource includes workbook, table, screen and screen-automation.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The resource's Amazon Resource Name (ARN).
		 * @param {Array<string>} tagKeys A list of tag keys to remove from the resource.
		 * @return {UntagResourceResult} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResult> {
			return this.http.delete<UntagResourceResult>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface BatchCreateTableRowsPostBody {

		/**
		 * <p> The list of rows to create at the end of the table. Each item in this list needs to have a batch item id to uniquely identify the element in the request and the cells to create for that row. You need to specify at least one item in this list. </p> <p> Note that if one of the column ids in any of the rows in the request does not exist in the table, then the request fails and no updates are made to the table. </p>
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		rowsToCreate: Array<CreateRowData>;

		/**
		 * <p> The request token for performing the batch create operation. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the operation again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>
		 * Max length: 64
		 * Min length: 32
		 */
		clientRequestToken?: string | null;
	}
	export interface BatchCreateTableRowsPostBodyFormProperties {

		/**
		 * <p> The request token for performing the batch create operation. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the operation again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>
		 * Max length: 64
		 * Min length: 32
		 */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchCreateTableRowsPostBodyFormGroup() {
		return new FormGroup<BatchCreateTableRowsPostBodyFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(64), Validators.pattern('^(?!\s*$).+')]),
		});

	}

	export interface BatchDeleteTableRowsPostBody {

		/**
		 * <p> The list of row ids to delete from the table. You need to specify at least one row id in this list. </p> <p> Note that if one of the row ids provided in the request does not exist in the table, then the request fails and no rows are deleted from the table. </p>
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		rowIds: Array<string>;

		/**
		 * <p> The request token for performing the delete action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>
		 * Max length: 64
		 * Min length: 32
		 */
		clientRequestToken?: string | null;
	}
	export interface BatchDeleteTableRowsPostBodyFormProperties {

		/**
		 * <p> The request token for performing the delete action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>
		 * Max length: 64
		 * Min length: 32
		 */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteTableRowsPostBodyFormGroup() {
		return new FormGroup<BatchDeleteTableRowsPostBodyFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(64), Validators.pattern('^(?!\s*$).+')]),
		});

	}

	export interface BatchUpdateTableRowsPostBody {

		/**
		 * <p> The list of rows to update in the table. Each item in this list needs to contain the row id to update along with the map of column id to cell values for each column in that row that needs to be updated. You need to specify at least one row in this list, and for each row, you need to specify at least one column to update. </p> <p> Note that if one of the row or column ids in the request does not exist in the table, then the request fails and no updates are made to the table. </p>
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		rowsToUpdate: Array<UpdateRowData>;

		/**
		 * <p> The request token for performing the update action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>
		 * Max length: 64
		 * Min length: 32
		 */
		clientRequestToken?: string | null;
	}
	export interface BatchUpdateTableRowsPostBodyFormProperties {

		/**
		 * <p> The request token for performing the update action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>
		 * Max length: 64
		 * Min length: 32
		 */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchUpdateTableRowsPostBodyFormGroup() {
		return new FormGroup<BatchUpdateTableRowsPostBodyFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(64), Validators.pattern('^(?!\s*$).+')]),
		});

	}

	export interface BatchUpsertTableRowsPostBody {

		/**
		 * <p> The list of rows to upsert in the table. Each item in this list needs to have a batch item id to uniquely identify the element in the request, a filter expression to find the rows to update for that element and the cell values to set for each column in the upserted rows. You need to specify at least one item in this list. </p> <p> Note that if one of the filter formulas in the request fails to evaluate because of an error or one of the column ids in any of the rows does not exist in the table, then the request fails and no updates are made to the table. </p>
		 * Required
		 */
		rowsToUpsert: Array<UpsertRowData>;

		/**
		 * <p> The request token for performing the update action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>
		 * Max length: 64
		 * Min length: 32
		 */
		clientRequestToken?: string | null;
	}
	export interface BatchUpsertTableRowsPostBodyFormProperties {

		/**
		 * <p> The request token for performing the update action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>
		 * Max length: 64
		 * Min length: 32
		 */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchUpsertTableRowsPostBodyFormGroup() {
		return new FormGroup<BatchUpsertTableRowsPostBodyFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(64), Validators.pattern('^(?!\s*$).+')]),
		});

	}

	export interface GetScreenDataPostBody {

		/**
		 * The ID of the workbook that contains the screen.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		workbookId: string;

		/**
		 * The ID of the app that contains the screen.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		appId: string;

		/**
		 * The ID of the screen.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		screenId: string;

		/** Variables are optional and are needed only if the screen requires them to render correctly. Variables are specified as a map where the key is the name of the variable as defined on the screen. The value is an object which currently has only one property, rawValue, which holds the value of the variable to be passed to the screen. */
		variables?: {[id: string]: VariableValue };

		/**
		 * <p> The number of results to be returned on a single page. Specify a number between 1 and 100. The maximum value is 100. </p> <p> This parameter is optional. If you don't specify this parameter, the default page size is 100. </p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * <p> This parameter is optional. If a nextToken is not specified, the API returns the first page of data. </p> <p> Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. </p>
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface GetScreenDataPostBodyFormProperties {

		/**
		 * The ID of the workbook that contains the screen.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		workbookId: FormControl<string | null | undefined>,

		/**
		 * The ID of the app that contains the screen.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		appId: FormControl<string | null | undefined>,

		/**
		 * The ID of the screen.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		screenId: FormControl<string | null | undefined>,

		/** Variables are optional and are needed only if the screen requires them to render correctly. Variables are specified as a map where the key is the name of the variable as defined on the screen. The value is an object which currently has only one property, rawValue, which holds the value of the variable to be passed to the screen. */
		variables: FormControl<{[id: string]: VariableValue } | null | undefined>,

		/**
		 * <p> The number of results to be returned on a single page. Specify a number between 1 and 100. The maximum value is 100. </p> <p> This parameter is optional. If you don't specify this parameter, the default page size is 100. </p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * <p> This parameter is optional. If a nextToken is not specified, the API returns the first page of data. </p> <p> Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. </p>
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetScreenDataPostBodyFormGroup() {
		return new FormGroup<GetScreenDataPostBodyFormProperties>({
			workbookId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}')]),
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}')]),
			screenId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}')]),
			variables: new FormControl<{[id: string]: VariableValue } | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^(?!\s*$).+')]),
		});

	}

	export interface InvokeScreenAutomationPostBody {

		/** Variables are specified as a map where the key is the name of the variable as defined on the screen. The value is an object which currently has only one property, rawValue, which holds the value of the variable to be passed to the screen. Any variables defined in a screen are required to be passed in the call. */
		variables?: {[id: string]: VariableValue };

		/**
		 * The row ID for the automation if the automation is defined inside a block with source or list.
		 * Max length: 77
		 * Min length: 77
		 */
		rowId?: string | null;

		/**
		 * <p> The request token for performing the automation action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will return the response of the previous call rather than performing the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>
		 * Max length: 64
		 * Min length: 32
		 */
		clientRequestToken?: string | null;
	}
	export interface InvokeScreenAutomationPostBodyFormProperties {

		/** Variables are specified as a map where the key is the name of the variable as defined on the screen. The value is an object which currently has only one property, rawValue, which holds the value of the variable to be passed to the screen. Any variables defined in a screen are required to be passed in the call. */
		variables: FormControl<{[id: string]: VariableValue } | null | undefined>,

		/**
		 * The row ID for the automation if the automation is defined inside a block with source or list.
		 * Max length: 77
		 * Min length: 77
		 */
		rowId: FormControl<string | null | undefined>,

		/**
		 * <p> The request token for performing the automation action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will return the response of the previous call rather than performing the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>
		 * Max length: 64
		 * Min length: 32
		 */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateInvokeScreenAutomationPostBodyFormGroup() {
		return new FormGroup<InvokeScreenAutomationPostBodyFormProperties>({
			variables: new FormControl<{[id: string]: VariableValue } | null | undefined>(undefined),
			rowId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(77), Validators.maxLength(77), Validators.pattern('row:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}')]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(64), Validators.pattern('^(?!\s*$).+')]),
		});

	}

	export interface ListTableRowsPostBody {

		/**
		 * This parameter is optional. If one or more row ids are specified in this list, then only the specified row ids are returned in the result. If no row ids are specified here, then all the rows in the table are returned.
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		rowIds?: Array<string>;

		/**
		 * The maximum number of rows to return in each page of the results.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * <p> This parameter is optional. If a nextToken is not specified, the API returns the first page of data. </p> <p> Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. </p>
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListTableRowsPostBodyFormProperties {

		/**
		 * The maximum number of rows to return in each page of the results.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * <p> This parameter is optional. If a nextToken is not specified, the API returns the first page of data. </p> <p> Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. </p>
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTableRowsPostBodyFormGroup() {
		return new FormGroup<ListTableRowsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^(?!\s*$).+')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * A string to string map representing tags
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * A string to string map representing tags
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface QueryTableRowsPostBody {

		/**
		 * An object that represents a filter formula along with the id of the context row under which the filter function needs to evaluate.
		 * Required
		 */
		filterFormula: QueryTableRowsPostBodyFilterFormula;

		/**
		 * The maximum number of rows to return in each page of the results.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * <p> This parameter is optional. If a nextToken is not specified, the API returns the first page of data. </p> <p> Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. </p>
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface QueryTableRowsPostBodyFormProperties {

		/**
		 * The maximum number of rows to return in each page of the results.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * <p> This parameter is optional. If a nextToken is not specified, the API returns the first page of data. </p> <p> Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. </p>
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateQueryTableRowsPostBodyFormGroup() {
		return new FormGroup<QueryTableRowsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^(?!\s*$).+')]),
		});

	}

	export interface QueryTableRowsPostBodyFilterFormula {
		formula?: string;
		contextRowId?: string;
	}
	export interface QueryTableRowsPostBodyFilterFormulaFormProperties {
		formula: FormControl<string | null | undefined>,
		contextRowId: FormControl<string | null | undefined>,
	}
	export function CreateQueryTableRowsPostBodyFilterFormulaFormGroup() {
		return new FormGroup<QueryTableRowsPostBodyFilterFormulaFormProperties>({
			formula: new FormControl<string | null | undefined>(undefined),
			contextRowId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartTableDataImportJobPostBody {

		/**
		 * An object that has details about the source of the data that was submitted for import.
		 * Required
		 */
		dataSource: StartTableDataImportJobPostBodyDataSource;

		/**
		 * The format of the data that is being imported. Currently the only option supported is "DELIMITED_TEXT".
		 * Required
		 */
		dataFormat: ImportSourceDataFormat;

		/**
		 * An object that contains the options specified by the sumitter of the import request.
		 * Required
		 */
		importOptions: StartTableDataImportJobPostBodyImportOptions;

		/**
		 * <p> The request token for performing the update action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>
		 * Required
		 * Max length: 64
		 * Min length: 32
		 */
		clientRequestToken: string;
	}
	export interface StartTableDataImportJobPostBodyFormProperties {

		/**
		 * The format of the data that is being imported. Currently the only option supported is "DELIMITED_TEXT".
		 * Required
		 */
		dataFormat: FormControl<ImportSourceDataFormat | null | undefined>,

		/**
		 * <p> The request token for performing the update action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>
		 * Required
		 * Max length: 64
		 * Min length: 32
		 */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartTableDataImportJobPostBodyFormGroup() {
		return new FormGroup<StartTableDataImportJobPostBodyFormProperties>({
			dataFormat: new FormControl<ImportSourceDataFormat | null | undefined>(undefined, [Validators.required]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(32), Validators.maxLength(64), Validators.pattern('^(?!\s*$).+')]),
		});

	}

	export interface StartTableDataImportJobPostBodyDataSource {
		dataSourceConfig?: ImportDataSourceConfig;
	}
	export interface StartTableDataImportJobPostBodyDataSourceFormProperties {
	}
	export function CreateStartTableDataImportJobPostBodyDataSourceFormGroup() {
		return new FormGroup<StartTableDataImportJobPostBodyDataSourceFormProperties>({
		});

	}

	export interface StartTableDataImportJobPostBodyImportOptions {
		destinationOptions?: DestinationOptions;
		delimitedTextOptions?: DelimitedTextImportOptions;
	}
	export interface StartTableDataImportJobPostBodyImportOptionsFormProperties {
	}
	export function CreateStartTableDataImportJobPostBodyImportOptionsFormGroup() {
		return new FormGroup<StartTableDataImportJobPostBodyImportOptionsFormProperties>({
		});

	}

}

