import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchExecuteStatementOutput {
		ClusterIdentifier?: string;
		CreatedAt?: Date;
		Database?: string;
		DbUser?: string;
		Id?: string;
		SecretArn?: string;
		WorkgroupName?: string;
	}
	export interface BatchExecuteStatementOutputFormProperties {
		ClusterIdentifier: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		Database: FormControl<string | null | undefined>,
		DbUser: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		SecretArn: FormControl<string | null | undefined>,
		WorkgroupName: FormControl<string | null | undefined>,
	}
	export function CreateBatchExecuteStatementOutputFormGroup() {
		return new FormGroup<BatchExecuteStatementOutputFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Database: new FormControl<string | null | undefined>(undefined),
			DbUser: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			SecretArn: new FormControl<string | null | undefined>(undefined),
			WorkgroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchExecuteStatementInput {
		ClientToken?: string;
		ClusterIdentifier?: string;

		/** Required */
		Database: string;
		DbUser?: string;
		SecretArn?: string;

		/** Required */
		Sqls: Array<string>;
		StatementName?: string;
		WithEvent?: boolean | null;
		WorkgroupName?: string;
	}
	export interface BatchExecuteStatementInputFormProperties {
		ClientToken: FormControl<string | null | undefined>,
		ClusterIdentifier: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,
		DbUser: FormControl<string | null | undefined>,
		SecretArn: FormControl<string | null | undefined>,
		StatementName: FormControl<string | null | undefined>,
		WithEvent: FormControl<boolean | null | undefined>,
		WorkgroupName: FormControl<string | null | undefined>,
	}
	export function CreateBatchExecuteStatementInputFormGroup() {
		return new FormGroup<BatchExecuteStatementInputFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DbUser: new FormControl<string | null | undefined>(undefined),
			SecretArn: new FormControl<string | null | undefined>(undefined),
			StatementName: new FormControl<string | null | undefined>(undefined),
			WithEvent: new FormControl<boolean | null | undefined>(undefined),
			WorkgroupName: new FormControl<string | null | undefined>(undefined),
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

	export interface ActiveStatementsExceededException {
	}
	export interface ActiveStatementsExceededExceptionFormProperties {
	}
	export function CreateActiveStatementsExceededExceptionFormGroup() {
		return new FormGroup<ActiveStatementsExceededExceptionFormProperties>({
		});

	}

	export interface BatchExecuteStatementException {
	}
	export interface BatchExecuteStatementExceptionFormProperties {
	}
	export function CreateBatchExecuteStatementExceptionFormGroup() {
		return new FormGroup<BatchExecuteStatementExceptionFormProperties>({
		});

	}

	export interface CancelStatementResponse {
		Status?: boolean | null;
	}
	export interface CancelStatementResponseFormProperties {
		Status: FormControl<boolean | null | undefined>,
	}
	export function CreateCancelStatementResponseFormGroup() {
		return new FormGroup<CancelStatementResponseFormProperties>({
			Status: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CancelStatementRequest {

		/** Required */
		Id: string;
	}
	export interface CancelStatementRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateCancelStatementRequestFormGroup() {
		return new FormGroup<CancelStatementRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface DatabaseConnectionException {
	}
	export interface DatabaseConnectionExceptionFormProperties {
	}
	export function CreateDatabaseConnectionExceptionFormGroup() {
		return new FormGroup<DatabaseConnectionExceptionFormProperties>({
		});

	}

	export interface DescribeStatementResponse {
		ClusterIdentifier?: string;
		CreatedAt?: Date;
		Database?: string;
		DbUser?: string;
		Duration?: number | null;
		Error?: string;
		HasResultSet?: boolean | null;

		/** Required */
		Id: string;
		QueryParameters?: Array<SqlParameter>;
		QueryString?: string;
		RedshiftPid?: number | null;
		RedshiftQueryId?: number | null;
		ResultRows?: number | null;
		ResultSize?: number | null;
		SecretArn?: string;
		Status?: StatusString;
		SubStatements?: Array<SubStatementData>;
		UpdatedAt?: Date;
		WorkgroupName?: string;
	}
	export interface DescribeStatementResponseFormProperties {
		ClusterIdentifier: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		Database: FormControl<string | null | undefined>,
		DbUser: FormControl<string | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		Error: FormControl<string | null | undefined>,
		HasResultSet: FormControl<boolean | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
		QueryString: FormControl<string | null | undefined>,
		RedshiftPid: FormControl<number | null | undefined>,
		RedshiftQueryId: FormControl<number | null | undefined>,
		ResultRows: FormControl<number | null | undefined>,
		ResultSize: FormControl<number | null | undefined>,
		SecretArn: FormControl<string | null | undefined>,
		Status: FormControl<StatusString | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		WorkgroupName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStatementResponseFormGroup() {
		return new FormGroup<DescribeStatementResponseFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Database: new FormControl<string | null | undefined>(undefined),
			DbUser: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
			HasResultSet: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QueryString: new FormControl<string | null | undefined>(undefined),
			RedshiftPid: new FormControl<number | null | undefined>(undefined),
			RedshiftQueryId: new FormControl<number | null | undefined>(undefined),
			ResultRows: new FormControl<number | null | undefined>(undefined),
			ResultSize: new FormControl<number | null | undefined>(undefined),
			SecretArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<StatusString | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			WorkgroupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A parameter used in a SQL statement. */
	export interface SqlParameter {

		/** Required */
		name: string;

		/** Required */
		value: string;
	}

	/** A parameter used in a SQL statement. */
	export interface SqlParameterFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSqlParameterFormGroup() {
		return new FormGroup<SqlParameterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StatusString { SUBMITTED = 'SUBMITTED', PICKED = 'PICKED', STARTED = 'STARTED', FINISHED = 'FINISHED', ABORTED = 'ABORTED', FAILED = 'FAILED', ALL = 'ALL' }


	/** Information about an SQL statement. */
	export interface SubStatementData {
		CreatedAt?: Date;
		Duration?: number | null;
		Error?: string;
		HasResultSet?: boolean | null;

		/** Required */
		Id: string;
		QueryString?: string;
		RedshiftQueryId?: number | null;
		ResultRows?: number | null;
		ResultSize?: number | null;
		Status?: StatementStatusString;
		UpdatedAt?: Date;
	}

	/** Information about an SQL statement. */
	export interface SubStatementDataFormProperties {
		CreatedAt: FormControl<Date | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		Error: FormControl<string | null | undefined>,
		HasResultSet: FormControl<boolean | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
		QueryString: FormControl<string | null | undefined>,
		RedshiftQueryId: FormControl<number | null | undefined>,
		ResultRows: FormControl<number | null | undefined>,
		ResultSize: FormControl<number | null | undefined>,
		Status: FormControl<StatementStatusString | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateSubStatementDataFormGroup() {
		return new FormGroup<SubStatementDataFormProperties>({
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
			HasResultSet: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QueryString: new FormControl<string | null | undefined>(undefined),
			RedshiftQueryId: new FormControl<number | null | undefined>(undefined),
			ResultRows: new FormControl<number | null | undefined>(undefined),
			ResultSize: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<StatementStatusString | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum StatementStatusString { SUBMITTED = 'SUBMITTED', PICKED = 'PICKED', STARTED = 'STARTED', FINISHED = 'FINISHED', ABORTED = 'ABORTED', FAILED = 'FAILED' }

	export interface DescribeStatementRequest {

		/** Required */
		Id: string;
	}
	export interface DescribeStatementRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStatementRequestFormGroup() {
		return new FormGroup<DescribeStatementRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeTableResponse {
		ColumnList?: Array<ColumnMetadata>;
		NextToken?: string;
		TableName?: string;
	}
	export interface DescribeTableResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTableResponseFormGroup() {
		return new FormGroup<DescribeTableResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			TableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties (metadata) of a column.  */
	export interface ColumnMetadata {
		columnDefault?: string;
		isCaseSensitive?: boolean | null;
		isCurrency?: boolean | null;
		isSigned?: boolean | null;
		label?: string;
		length?: number | null;
		name?: string;
		nullable?: number | null;
		precision?: number | null;
		scale?: number | null;
		schemaName?: string;
		tableName?: string;
		typeName?: string;
	}

	/** The properties (metadata) of a column.  */
	export interface ColumnMetadataFormProperties {
		columnDefault: FormControl<string | null | undefined>,
		isCaseSensitive: FormControl<boolean | null | undefined>,
		isCurrency: FormControl<boolean | null | undefined>,
		isSigned: FormControl<boolean | null | undefined>,
		label: FormControl<string | null | undefined>,
		length: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		nullable: FormControl<number | null | undefined>,
		precision: FormControl<number | null | undefined>,
		scale: FormControl<number | null | undefined>,
		schemaName: FormControl<string | null | undefined>,
		tableName: FormControl<string | null | undefined>,
		typeName: FormControl<string | null | undefined>,
	}
	export function CreateColumnMetadataFormGroup() {
		return new FormGroup<ColumnMetadataFormProperties>({
			columnDefault: new FormControl<string | null | undefined>(undefined),
			isCaseSensitive: new FormControl<boolean | null | undefined>(undefined),
			isCurrency: new FormControl<boolean | null | undefined>(undefined),
			isSigned: new FormControl<boolean | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nullable: new FormControl<number | null | undefined>(undefined),
			precision: new FormControl<number | null | undefined>(undefined),
			scale: new FormControl<number | null | undefined>(undefined),
			schemaName: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
			typeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeTableRequest {
		ClusterIdentifier?: string;
		ConnectedDatabase?: string;

		/** Required */
		Database: string;
		DbUser?: string;
		MaxResults?: number | null;
		NextToken?: string;
		Schema?: string;
		SecretArn?: string;
		Table?: string;
		WorkgroupName?: string;
	}
	export interface DescribeTableRequestFormProperties {
		ClusterIdentifier: FormControl<string | null | undefined>,
		ConnectedDatabase: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,
		DbUser: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Schema: FormControl<string | null | undefined>,
		SecretArn: FormControl<string | null | undefined>,
		Table: FormControl<string | null | undefined>,
		WorkgroupName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTableRequestFormGroup() {
		return new FormGroup<DescribeTableRequestFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			ConnectedDatabase: new FormControl<string | null | undefined>(undefined),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DbUser: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Schema: new FormControl<string | null | undefined>(undefined),
			SecretArn: new FormControl<string | null | undefined>(undefined),
			Table: new FormControl<string | null | undefined>(undefined),
			WorkgroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExecuteStatementOutput {
		ClusterIdentifier?: string;
		CreatedAt?: Date;
		Database?: string;
		DbUser?: string;
		Id?: string;
		SecretArn?: string;
		WorkgroupName?: string;
	}
	export interface ExecuteStatementOutputFormProperties {
		ClusterIdentifier: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		Database: FormControl<string | null | undefined>,
		DbUser: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		SecretArn: FormControl<string | null | undefined>,
		WorkgroupName: FormControl<string | null | undefined>,
	}
	export function CreateExecuteStatementOutputFormGroup() {
		return new FormGroup<ExecuteStatementOutputFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Database: new FormControl<string | null | undefined>(undefined),
			DbUser: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			SecretArn: new FormControl<string | null | undefined>(undefined),
			WorkgroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExecuteStatementInput {
		ClientToken?: string;
		ClusterIdentifier?: string;

		/** Required */
		Database: string;
		DbUser?: string;
		Parameters?: Array<SqlParameter>;
		SecretArn?: string;

		/** Required */
		Sql: string;
		StatementName?: string;
		WithEvent?: boolean | null;
		WorkgroupName?: string;
	}
	export interface ExecuteStatementInputFormProperties {
		ClientToken: FormControl<string | null | undefined>,
		ClusterIdentifier: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,
		DbUser: FormControl<string | null | undefined>,
		SecretArn: FormControl<string | null | undefined>,

		/** Required */
		Sql: FormControl<string | null | undefined>,
		StatementName: FormControl<string | null | undefined>,
		WithEvent: FormControl<boolean | null | undefined>,
		WorkgroupName: FormControl<string | null | undefined>,
	}
	export function CreateExecuteStatementInputFormGroup() {
		return new FormGroup<ExecuteStatementInputFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DbUser: new FormControl<string | null | undefined>(undefined),
			SecretArn: new FormControl<string | null | undefined>(undefined),
			Sql: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StatementName: new FormControl<string | null | undefined>(undefined),
			WithEvent: new FormControl<boolean | null | undefined>(undefined),
			WorkgroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExecuteStatementException {
	}
	export interface ExecuteStatementExceptionFormProperties {
	}
	export function CreateExecuteStatementExceptionFormGroup() {
		return new FormGroup<ExecuteStatementExceptionFormProperties>({
		});

	}

	export interface GetStatementResultResponse {
		ColumnMetadata?: Array<ColumnMetadata>;
		NextToken?: string;

		/** Required */
		Records: Array<Array<Field>>;
		TotalNumRows?: number | null;
	}
	export interface GetStatementResultResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		TotalNumRows: FormControl<number | null | undefined>,
	}
	export function CreateGetStatementResultResponseFormGroup() {
		return new FormGroup<GetStatementResultResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			TotalNumRows: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A data value in a column.  */
	export interface Field {
		blobValue?: string;
		booleanValue?: boolean | null;
		doubleValue?: number | null;
		isNull?: boolean | null;
		longValue?: number | null;
		stringValue?: string;
	}

	/** A data value in a column.  */
	export interface FieldFormProperties {
		blobValue: FormControl<string | null | undefined>,
		booleanValue: FormControl<boolean | null | undefined>,
		doubleValue: FormControl<number | null | undefined>,
		isNull: FormControl<boolean | null | undefined>,
		longValue: FormControl<number | null | undefined>,
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateFieldFormGroup() {
		return new FormGroup<FieldFormProperties>({
			blobValue: new FormControl<string | null | undefined>(undefined),
			booleanValue: new FormControl<boolean | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
			isNull: new FormControl<boolean | null | undefined>(undefined),
			longValue: new FormControl<number | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetStatementResultRequest {

		/** Required */
		Id: string;
		NextToken?: string;
	}
	export interface GetStatementResultRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetStatementResultRequestFormGroup() {
		return new FormGroup<GetStatementResultRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDatabasesResponse {
		Databases?: Array<string>;
		NextToken?: string;
	}
	export interface ListDatabasesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatabasesResponseFormGroup() {
		return new FormGroup<ListDatabasesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDatabasesRequest {
		ClusterIdentifier?: string;

		/** Required */
		Database: string;
		DbUser?: string;
		MaxResults?: number | null;
		NextToken?: string;
		SecretArn?: string;
		WorkgroupName?: string;
	}
	export interface ListDatabasesRequestFormProperties {
		ClusterIdentifier: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,
		DbUser: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		SecretArn: FormControl<string | null | undefined>,
		WorkgroupName: FormControl<string | null | undefined>,
	}
	export function CreateListDatabasesRequestFormGroup() {
		return new FormGroup<ListDatabasesRequestFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DbUser: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			SecretArn: new FormControl<string | null | undefined>(undefined),
			WorkgroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSchemasResponse {
		NextToken?: string;
		Schemas?: Array<string>;
	}
	export interface ListSchemasResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSchemasResponseFormGroup() {
		return new FormGroup<ListSchemasResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSchemasRequest {
		ClusterIdentifier?: string;
		ConnectedDatabase?: string;

		/** Required */
		Database: string;
		DbUser?: string;
		MaxResults?: number | null;
		NextToken?: string;
		SchemaPattern?: string;
		SecretArn?: string;
		WorkgroupName?: string;
	}
	export interface ListSchemasRequestFormProperties {
		ClusterIdentifier: FormControl<string | null | undefined>,
		ConnectedDatabase: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,
		DbUser: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		SchemaPattern: FormControl<string | null | undefined>,
		SecretArn: FormControl<string | null | undefined>,
		WorkgroupName: FormControl<string | null | undefined>,
	}
	export function CreateListSchemasRequestFormGroup() {
		return new FormGroup<ListSchemasRequestFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			ConnectedDatabase: new FormControl<string | null | undefined>(undefined),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DbUser: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			SchemaPattern: new FormControl<string | null | undefined>(undefined),
			SecretArn: new FormControl<string | null | undefined>(undefined),
			WorkgroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStatementsResponse {
		NextToken?: string;

		/** Required */
		Statements: Array<StatementData>;
	}
	export interface ListStatementsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStatementsResponseFormGroup() {
		return new FormGroup<ListStatementsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The SQL statement to run. */
	export interface StatementData {
		CreatedAt?: Date;

		/** Required */
		Id: string;
		IsBatchStatement?: boolean | null;
		QueryParameters?: Array<SqlParameter>;
		QueryString?: string;
		QueryStrings?: Array<string>;
		SecretArn?: string;
		StatementName?: string;
		Status?: StatusString;
		UpdatedAt?: Date;
	}

	/** The SQL statement to run. */
	export interface StatementDataFormProperties {
		CreatedAt: FormControl<Date | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
		IsBatchStatement: FormControl<boolean | null | undefined>,
		QueryString: FormControl<string | null | undefined>,
		SecretArn: FormControl<string | null | undefined>,
		StatementName: FormControl<string | null | undefined>,
		Status: FormControl<StatusString | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateStatementDataFormGroup() {
		return new FormGroup<StatementDataFormProperties>({
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsBatchStatement: new FormControl<boolean | null | undefined>(undefined),
			QueryString: new FormControl<string | null | undefined>(undefined),
			SecretArn: new FormControl<string | null | undefined>(undefined),
			StatementName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<StatusString | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListStatementsRequest {
		MaxResults?: number | null;
		NextToken?: string;
		RoleLevel?: boolean | null;
		StatementName?: string;
		Status?: StatusString;
	}
	export interface ListStatementsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		RoleLevel: FormControl<boolean | null | undefined>,
		StatementName: FormControl<string | null | undefined>,
		Status: FormControl<StatusString | null | undefined>,
	}
	export function CreateListStatementsRequestFormGroup() {
		return new FormGroup<ListStatementsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			RoleLevel: new FormControl<boolean | null | undefined>(undefined),
			StatementName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<StatusString | null | undefined>(undefined),
		});

	}

	export interface ListTablesResponse {
		NextToken?: string;
		Tables?: Array<TableMember>;
	}
	export interface ListTablesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTablesResponseFormGroup() {
		return new FormGroup<ListTablesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of a table.  */
	export interface TableMember {
		name?: string;
		schema?: string;
		type?: string;
	}

	/** The properties of a table.  */
	export interface TableMemberFormProperties {
		name: FormControl<string | null | undefined>,
		schema: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateTableMemberFormGroup() {
		return new FormGroup<TableMemberFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTablesRequest {
		ClusterIdentifier?: string;
		ConnectedDatabase?: string;

		/** Required */
		Database: string;
		DbUser?: string;
		MaxResults?: number | null;
		NextToken?: string;
		SchemaPattern?: string;
		SecretArn?: string;
		TablePattern?: string;
		WorkgroupName?: string;
	}
	export interface ListTablesRequestFormProperties {
		ClusterIdentifier: FormControl<string | null | undefined>,
		ConnectedDatabase: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,
		DbUser: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		SchemaPattern: FormControl<string | null | undefined>,
		SecretArn: FormControl<string | null | undefined>,
		TablePattern: FormControl<string | null | undefined>,
		WorkgroupName: FormControl<string | null | undefined>,
	}
	export function CreateListTablesRequestFormGroup() {
		return new FormGroup<ListTablesRequestFormProperties>({
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined),
			ConnectedDatabase: new FormControl<string | null | undefined>(undefined),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DbUser: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			SchemaPattern: new FormControl<string | null | undefined>(undefined),
			SecretArn: new FormControl<string | null | undefined>(undefined),
			TablePattern: new FormControl<string | null | undefined>(undefined),
			WorkgroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Runs one or more SQL statements, which can be data manipulation language (DML) or data definition language (DDL). Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - when connecting to a cluster, provide the <code>secret-arn</code> of a secret stored in Secrets Manager which has <code>username</code> and <code>password</code>. The specified secret contains credentials to connect to the <code>database</code> you specify. When you are connecting to a cluster, you also supply the database name, If you provide a cluster identifier (<code>dbClusterIdentifier</code>), it must match the cluster identifier stored in the secret. When you are connecting to a serverless workgroup, you also supply the database name.</p> </li> <li> <p>Temporary credentials - when connecting to your data warehouse, choose one of the following options:</p> <ul> <li> <p>When connecting to a serverless workgroup, specify the workgroup name and database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as an IAM identity, specify the cluster identifier and the database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift:GetClusterCredentialsWithIAM</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as a database user, specify the cluster identifier, the database name, and the database user name. Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required.</p> </li> </ul> </li> </ul> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
		 * Post #X-Amz-Target=RedshiftData.BatchExecuteStatement
		 * @return {BatchExecuteStatementOutput} Success
		 */
		BatchExecuteStatement(requestBody: BatchExecuteStatementInput): Observable<BatchExecuteStatementOutput> {
			return this.http.post<BatchExecuteStatementOutput>(this.baseUri + '#X-Amz-Target=RedshiftData.BatchExecuteStatement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Cancels a running query. To be canceled, a query must be running. </p> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
		 * Post #X-Amz-Target=RedshiftData.CancelStatement
		 * @return {CancelStatementResponse} Success
		 */
		CancelStatement(requestBody: CancelStatementRequest): Observable<CancelStatementResponse> {
			return this.http.post<CancelStatementResponse>(this.baseUri + '#X-Amz-Target=RedshiftData.CancelStatement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the details about a specific instance when a query was run by the Amazon Redshift Data API. The information includes when the query started, when it finished, the query status, the number of rows returned, and the SQL statement. </p> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
		 * Post #X-Amz-Target=RedshiftData.DescribeStatement
		 * @return {DescribeStatementResponse} Success
		 */
		DescribeStatement(requestBody: DescribeStatementRequest): Observable<DescribeStatementResponse> {
			return this.http.post<DescribeStatementResponse>(this.baseUri + '#X-Amz-Target=RedshiftData.DescribeStatement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the detailed information about a table from metadata in the cluster. The information includes its columns. A token is returned to page through the column list. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - when connecting to a cluster, provide the <code>secret-arn</code> of a secret stored in Secrets Manager which has <code>username</code> and <code>password</code>. The specified secret contains credentials to connect to the <code>database</code> you specify. When you are connecting to a cluster, you also supply the database name, If you provide a cluster identifier (<code>dbClusterIdentifier</code>), it must match the cluster identifier stored in the secret. When you are connecting to a serverless workgroup, you also supply the database name.</p> </li> <li> <p>Temporary credentials - when connecting to your data warehouse, choose one of the following options:</p> <ul> <li> <p>When connecting to a serverless workgroup, specify the workgroup name and database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as an IAM identity, specify the cluster identifier and the database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift:GetClusterCredentialsWithIAM</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as a database user, specify the cluster identifier, the database name, and the database user name. Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required.</p> </li> </ul> </li> </ul> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
		 * Post #X-Amz-Target=RedshiftData.DescribeTable
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeTableResponse} Success
		 */
		DescribeTable(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeTableRequest): Observable<DescribeTableResponse> {
			return this.http.post<DescribeTableResponse>(this.baseUri + '#X-Amz-Target=RedshiftData.DescribeTable?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Runs an SQL statement, which can be data manipulation language (DML) or data definition language (DDL). This statement must be a single SQL statement. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - when connecting to a cluster, provide the <code>secret-arn</code> of a secret stored in Secrets Manager which has <code>username</code> and <code>password</code>. The specified secret contains credentials to connect to the <code>database</code> you specify. When you are connecting to a cluster, you also supply the database name, If you provide a cluster identifier (<code>dbClusterIdentifier</code>), it must match the cluster identifier stored in the secret. When you are connecting to a serverless workgroup, you also supply the database name.</p> </li> <li> <p>Temporary credentials - when connecting to your data warehouse, choose one of the following options:</p> <ul> <li> <p>When connecting to a serverless workgroup, specify the workgroup name and database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as an IAM identity, specify the cluster identifier and the database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift:GetClusterCredentialsWithIAM</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as a database user, specify the cluster identifier, the database name, and the database user name. Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required.</p> </li> </ul> </li> </ul> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
		 * Post #X-Amz-Target=RedshiftData.ExecuteStatement
		 * @return {ExecuteStatementOutput} Success
		 */
		ExecuteStatement(requestBody: ExecuteStatementInput): Observable<ExecuteStatementOutput> {
			return this.http.post<ExecuteStatementOutput>(this.baseUri + '#X-Amz-Target=RedshiftData.ExecuteStatement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Fetches the temporarily cached result of an SQL statement. A token is returned to page through the statement results. </p> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
		 * Post #X-Amz-Target=RedshiftData.GetStatementResult
		 * @param {string} NextToken Pagination token
		 * @return {GetStatementResultResponse} Success
		 */
		GetStatementResult(NextToken: string | null | undefined, requestBody: GetStatementResultRequest): Observable<GetStatementResultResponse> {
			return this.http.post<GetStatementResultResponse>(this.baseUri + '#X-Amz-Target=RedshiftData.GetStatementResult?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>List the databases in a cluster. A token is returned to page through the database list. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - when connecting to a cluster, provide the <code>secret-arn</code> of a secret stored in Secrets Manager which has <code>username</code> and <code>password</code>. The specified secret contains credentials to connect to the <code>database</code> you specify. When you are connecting to a cluster, you also supply the database name, If you provide a cluster identifier (<code>dbClusterIdentifier</code>), it must match the cluster identifier stored in the secret. When you are connecting to a serverless workgroup, you also supply the database name.</p> </li> <li> <p>Temporary credentials - when connecting to your data warehouse, choose one of the following options:</p> <ul> <li> <p>When connecting to a serverless workgroup, specify the workgroup name and database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as an IAM identity, specify the cluster identifier and the database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift:GetClusterCredentialsWithIAM</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as a database user, specify the cluster identifier, the database name, and the database user name. Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required.</p> </li> </ul> </li> </ul> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
		 * Post #X-Amz-Target=RedshiftData.ListDatabases
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDatabasesResponse} Success
		 */
		ListDatabases(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDatabasesRequest): Observable<ListDatabasesResponse> {
			return this.http.post<ListDatabasesResponse>(this.baseUri + '#X-Amz-Target=RedshiftData.ListDatabases?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the schemas in a database. A token is returned to page through the schema list. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - when connecting to a cluster, provide the <code>secret-arn</code> of a secret stored in Secrets Manager which has <code>username</code> and <code>password</code>. The specified secret contains credentials to connect to the <code>database</code> you specify. When you are connecting to a cluster, you also supply the database name, If you provide a cluster identifier (<code>dbClusterIdentifier</code>), it must match the cluster identifier stored in the secret. When you are connecting to a serverless workgroup, you also supply the database name.</p> </li> <li> <p>Temporary credentials - when connecting to your data warehouse, choose one of the following options:</p> <ul> <li> <p>When connecting to a serverless workgroup, specify the workgroup name and database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as an IAM identity, specify the cluster identifier and the database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift:GetClusterCredentialsWithIAM</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as a database user, specify the cluster identifier, the database name, and the database user name. Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required.</p> </li> </ul> </li> </ul> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
		 * Post #X-Amz-Target=RedshiftData.ListSchemas
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSchemasResponse} Success
		 */
		ListSchemas(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListSchemasRequest): Observable<ListSchemasResponse> {
			return this.http.post<ListSchemasResponse>(this.baseUri + '#X-Amz-Target=RedshiftData.ListSchemas?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>List of SQL statements. By default, only finished statements are shown. A token is returned to page through the statement list. </p> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
		 * Post #X-Amz-Target=RedshiftData.ListStatements
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListStatementsResponse} Success
		 */
		ListStatements(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListStatementsRequest): Observable<ListStatementsResponse> {
			return this.http.post<ListStatementsResponse>(this.baseUri + '#X-Amz-Target=RedshiftData.ListStatements?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>List the tables in a database. If neither <code>SchemaPattern</code> nor <code>TablePattern</code> are specified, then all tables in the database are returned. A token is returned to page through the table list. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - when connecting to a cluster, provide the <code>secret-arn</code> of a secret stored in Secrets Manager which has <code>username</code> and <code>password</code>. The specified secret contains credentials to connect to the <code>database</code> you specify. When you are connecting to a cluster, you also supply the database name, If you provide a cluster identifier (<code>dbClusterIdentifier</code>), it must match the cluster identifier stored in the secret. When you are connecting to a serverless workgroup, you also supply the database name.</p> </li> <li> <p>Temporary credentials - when connecting to your data warehouse, choose one of the following options:</p> <ul> <li> <p>When connecting to a serverless workgroup, specify the workgroup name and database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as an IAM identity, specify the cluster identifier and the database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift:GetClusterCredentialsWithIAM</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as a database user, specify the cluster identifier, the database name, and the database user name. Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required.</p> </li> </ul> </li> </ul> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
		 * Post #X-Amz-Target=RedshiftData.ListTables
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTablesResponse} Success
		 */
		ListTables(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTablesRequest): Observable<ListTablesResponse> {
			return this.http.post<ListTablesResponse>(this.baseUri + '#X-Amz-Target=RedshiftData.ListTables?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum BatchExecuteStatementX_Amz_Target { 'RedshiftData.BatchExecuteStatement' = 'RedshiftData.BatchExecuteStatement' }

	export enum CancelStatementX_Amz_Target { 'RedshiftData.CancelStatement' = 'RedshiftData.CancelStatement' }

	export enum DescribeStatementX_Amz_Target { 'RedshiftData.DescribeStatement' = 'RedshiftData.DescribeStatement' }

	export enum DescribeTableX_Amz_Target { 'RedshiftData.DescribeTable' = 'RedshiftData.DescribeTable' }

	export enum ExecuteStatementX_Amz_Target { 'RedshiftData.ExecuteStatement' = 'RedshiftData.ExecuteStatement' }

	export enum GetStatementResultX_Amz_Target { 'RedshiftData.GetStatementResult' = 'RedshiftData.GetStatementResult' }

	export enum ListDatabasesX_Amz_Target { 'RedshiftData.ListDatabases' = 'RedshiftData.ListDatabases' }

	export enum ListSchemasX_Amz_Target { 'RedshiftData.ListSchemas' = 'RedshiftData.ListSchemas' }

	export enum ListStatementsX_Amz_Target { 'RedshiftData.ListStatements' = 'RedshiftData.ListStatements' }

	export enum ListTablesX_Amz_Target { 'RedshiftData.ListTables' = 'RedshiftData.ListTables' }

}

