import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The response elements represent the output of a SQL statement over an array of data. */
	export interface BatchExecuteStatementResponse {
		updateResults?: Array<UpdateResult>;
	}

	/** The response elements represent the output of a SQL statement over an array of data. */
	export interface BatchExecuteStatementResponseFormProperties {
	}
	export function CreateBatchExecuteStatementResponseFormGroup() {
		return new FormGroup<BatchExecuteStatementResponseFormProperties>({
		});

	}


	/** The response elements represent the results of an update. */
	export interface UpdateResult {
		generatedFields?: Array<Field>;
	}

	/** The response elements represent the results of an update. */
	export interface UpdateResultFormProperties {
	}
	export function CreateUpdateResultFormGroup() {
		return new FormGroup<UpdateResultFormProperties>({
		});

	}


	/** Contains a value. */
	export interface Field {
		isNull?: boolean | null;
		booleanValue?: boolean | null;
		longValue?: number | null;
		doubleValue?: number | null;
		stringValue?: string;
		blobValue?: string;
		arrayValue?: ArrayValue;
	}

	/** Contains a value. */
	export interface FieldFormProperties {
		isNull: FormControl<boolean | null | undefined>,
		booleanValue: FormControl<boolean | null | undefined>,
		longValue: FormControl<number | null | undefined>,
		doubleValue: FormControl<number | null | undefined>,
		stringValue: FormControl<string | null | undefined>,
		blobValue: FormControl<string | null | undefined>,
	}
	export function CreateFieldFormGroup() {
		return new FormGroup<FieldFormProperties>({
			isNull: new FormControl<boolean | null | undefined>(undefined),
			booleanValue: new FormControl<boolean | null | undefined>(undefined),
			longValue: new FormControl<number | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
			blobValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains an array. */
	export interface ArrayValue {
		booleanValues?: Array<boolean> | null;
		longValues?: Array<number> | null;
		doubleValues?: Array<number> | null;
		stringValues?: Array<string>;
		arrayValues?: Array<ArrayValue>;
	}

	/** Contains an array. */
	export interface ArrayValueFormProperties {
	}
	export function CreateArrayValueFormGroup() {
		return new FormGroup<ArrayValueFormProperties>({
		});

	}


	/** A parameter used in a SQL statement. */
	export interface SqlParameter {
		name?: string;
		value?: Field;
		typeHint?: TypeHint;
	}

	/** A parameter used in a SQL statement. */
	export interface SqlParameterFormProperties {
		name: FormControl<string | null | undefined>,
		typeHint: FormControl<TypeHint | null | undefined>,
	}
	export function CreateSqlParameterFormGroup() {
		return new FormGroup<SqlParameterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			typeHint: new FormControl<TypeHint | null | undefined>(undefined),
		});

	}

	export enum TypeHint { JSON = 'JSON', UUID = 'UUID', TIMESTAMP = 'TIMESTAMP', DATE = 'DATE', TIME = 'TIME', DECIMAL = 'DECIMAL' }

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface StatementTimeoutException {
	}
	export interface StatementTimeoutExceptionFormProperties {
	}
	export function CreateStatementTimeoutExceptionFormGroup() {
		return new FormGroup<StatementTimeoutExceptionFormProperties>({
		});

	}

	export interface InternalServerErrorException {
	}
	export interface InternalServerErrorExceptionFormProperties {
	}
	export function CreateInternalServerErrorExceptionFormGroup() {
		return new FormGroup<InternalServerErrorExceptionFormProperties>({
		});

	}

	export interface ForbiddenException {
	}
	export interface ForbiddenExceptionFormProperties {
	}
	export function CreateForbiddenExceptionFormGroup() {
		return new FormGroup<ForbiddenExceptionFormProperties>({
		});

	}

	export interface ServiceUnavailableError {
	}
	export interface ServiceUnavailableErrorFormProperties {
	}
	export function CreateServiceUnavailableErrorFormGroup() {
		return new FormGroup<ServiceUnavailableErrorFormProperties>({
		});

	}


	/** The response elements represent the output of a request to start a SQL transaction. */
	export interface BeginTransactionResponse {
		transactionId?: string;
	}

	/** The response elements represent the output of a request to start a SQL transaction. */
	export interface BeginTransactionResponseFormProperties {
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateBeginTransactionResponseFormGroup() {
		return new FormGroup<BeginTransactionResponseFormProperties>({
			transactionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response elements represent the output of a commit transaction request. */
	export interface CommitTransactionResponse {
		transactionStatus?: string;
	}

	/** The response elements represent the output of a commit transaction request. */
	export interface CommitTransactionResponseFormProperties {
		transactionStatus: FormControl<string | null | undefined>,
	}
	export function CreateCommitTransactionResponseFormGroup() {
		return new FormGroup<CommitTransactionResponseFormProperties>({
			transactionStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}


	/** The response elements represent the output of a request to run one or more SQL statements. */
	export interface ExecuteSqlResponse {
		sqlStatementResults?: Array<SqlStatementResult>;
	}

	/** The response elements represent the output of a request to run one or more SQL statements. */
	export interface ExecuteSqlResponseFormProperties {
	}
	export function CreateExecuteSqlResponseFormGroup() {
		return new FormGroup<ExecuteSqlResponseFormProperties>({
		});

	}


	/** <p>The result of a SQL statement.</p> <pre><code> &lt;note&gt; &lt;p&gt;This data structure is only used with the deprecated &lt;code&gt;ExecuteSql&lt;/code&gt; operation. Use the &lt;code&gt;BatchExecuteStatement&lt;/code&gt; or &lt;code&gt;ExecuteStatement&lt;/code&gt; operation instead.&lt;/p&gt; &lt;/note&gt; </code></pre> */
	export interface SqlStatementResult {
		resultFrame?: ResultFrame;
		numberOfRecordsUpdated?: number | null;
	}

	/** <p>The result of a SQL statement.</p> <pre><code> &lt;note&gt; &lt;p&gt;This data structure is only used with the deprecated &lt;code&gt;ExecuteSql&lt;/code&gt; operation. Use the &lt;code&gt;BatchExecuteStatement&lt;/code&gt; or &lt;code&gt;ExecuteStatement&lt;/code&gt; operation instead.&lt;/p&gt; &lt;/note&gt; </code></pre> */
	export interface SqlStatementResultFormProperties {
		numberOfRecordsUpdated: FormControl<number | null | undefined>,
	}
	export function CreateSqlStatementResultFormGroup() {
		return new FormGroup<SqlStatementResultFormProperties>({
			numberOfRecordsUpdated: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>The result set returned by a SQL statement.</p> <note> <p>This data structure is only used with the deprecated <code>ExecuteSql</code> operation. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation instead.</p> </note> */
	export interface ResultFrame {
		resultSetMetadata?: ResultSetMetadata;
		records?: Array<Record>;
	}

	/** <p>The result set returned by a SQL statement.</p> <note> <p>This data structure is only used with the deprecated <code>ExecuteSql</code> operation. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation instead.</p> </note> */
	export interface ResultFrameFormProperties {
	}
	export function CreateResultFrameFormGroup() {
		return new FormGroup<ResultFrameFormProperties>({
		});

	}


	/** The metadata of the result set returned by a SQL statement. */
	export interface ResultSetMetadata {
		columnCount?: number | null;
		columnMetadata?: Array<ColumnMetadata>;
	}

	/** The metadata of the result set returned by a SQL statement. */
	export interface ResultSetMetadataFormProperties {
		columnCount: FormControl<number | null | undefined>,
	}
	export function CreateResultSetMetadataFormGroup() {
		return new FormGroup<ResultSetMetadataFormProperties>({
			columnCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains the metadata for a column. */
	export interface ColumnMetadata {
		name?: string;
		type?: number | null;
		typeName?: string;
		label?: string;
		schemaName?: string;
		tableName?: string;
		isAutoIncrement?: boolean | null;
		isSigned?: boolean | null;
		isCurrency?: boolean | null;
		isCaseSensitive?: boolean | null;
		nullable?: number | null;
		precision?: number | null;
		scale?: number | null;
		arrayBaseColumnType?: number | null;
	}

	/** Contains the metadata for a column. */
	export interface ColumnMetadataFormProperties {
		name: FormControl<string | null | undefined>,
		type: FormControl<number | null | undefined>,
		typeName: FormControl<string | null | undefined>,
		label: FormControl<string | null | undefined>,
		schemaName: FormControl<string | null | undefined>,
		tableName: FormControl<string | null | undefined>,
		isAutoIncrement: FormControl<boolean | null | undefined>,
		isSigned: FormControl<boolean | null | undefined>,
		isCurrency: FormControl<boolean | null | undefined>,
		isCaseSensitive: FormControl<boolean | null | undefined>,
		nullable: FormControl<number | null | undefined>,
		precision: FormControl<number | null | undefined>,
		scale: FormControl<number | null | undefined>,
		arrayBaseColumnType: FormControl<number | null | undefined>,
	}
	export function CreateColumnMetadataFormGroup() {
		return new FormGroup<ColumnMetadataFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<number | null | undefined>(undefined),
			typeName: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			schemaName: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
			isAutoIncrement: new FormControl<boolean | null | undefined>(undefined),
			isSigned: new FormControl<boolean | null | undefined>(undefined),
			isCurrency: new FormControl<boolean | null | undefined>(undefined),
			isCaseSensitive: new FormControl<boolean | null | undefined>(undefined),
			nullable: new FormControl<number | null | undefined>(undefined),
			precision: new FormControl<number | null | undefined>(undefined),
			scale: new FormControl<number | null | undefined>(undefined),
			arrayBaseColumnType: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>A record returned by a call.</p> <note> <p>This data structure is only used with the deprecated <code>ExecuteSql</code> operation. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation instead.</p> </note> */
	export interface Record {
		values?: Array<Value>;
	}

	/** <p>A record returned by a call.</p> <note> <p>This data structure is only used with the deprecated <code>ExecuteSql</code> operation. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation instead.</p> </note> */
	export interface RecordFormProperties {
	}
	export function CreateRecordFormGroup() {
		return new FormGroup<RecordFormProperties>({
		});

	}


	/** <p>Contains the value of a column.</p> <pre><code> &lt;note&gt; &lt;p&gt;This data structure is only used with the deprecated &lt;code&gt;ExecuteSql&lt;/code&gt; operation. Use the &lt;code&gt;BatchExecuteStatement&lt;/code&gt; or &lt;code&gt;ExecuteStatement&lt;/code&gt; operation instead.&lt;/p&gt; &lt;/note&gt; </code></pre> */
	export interface Value {
		isNull?: boolean | null;
		bitValue?: boolean | null;
		bigIntValue?: number | null;
		intValue?: number | null;
		doubleValue?: number | null;
		realValue?: number;
		stringValue?: string;
		blobValue?: string;
		arrayValues?: Array<Value>;
		structValue?: StructValue;
	}

	/** <p>Contains the value of a column.</p> <pre><code> &lt;note&gt; &lt;p&gt;This data structure is only used with the deprecated &lt;code&gt;ExecuteSql&lt;/code&gt; operation. Use the &lt;code&gt;BatchExecuteStatement&lt;/code&gt; or &lt;code&gt;ExecuteStatement&lt;/code&gt; operation instead.&lt;/p&gt; &lt;/note&gt; </code></pre> */
	export interface ValueFormProperties {
		isNull: FormControl<boolean | null | undefined>,
		bitValue: FormControl<boolean | null | undefined>,
		bigIntValue: FormControl<number | null | undefined>,
		intValue: FormControl<number | null | undefined>,
		doubleValue: FormControl<number | null | undefined>,
		realValue: FormControl<number | null | undefined>,
		stringValue: FormControl<string | null | undefined>,
		blobValue: FormControl<string | null | undefined>,
	}
	export function CreateValueFormGroup() {
		return new FormGroup<ValueFormProperties>({
			isNull: new FormControl<boolean | null | undefined>(undefined),
			bitValue: new FormControl<boolean | null | undefined>(undefined),
			bigIntValue: new FormControl<number | null | undefined>(undefined),
			intValue: new FormControl<number | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
			realValue: new FormControl<number | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
			blobValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A structure value returned by a call.</p> <note> <p>This data structure is only used with the deprecated <code>ExecuteSql</code> operation. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation instead.</p> </note> */
	export interface StructValue {
		attributes?: Array<Value>;
	}

	/** <p>A structure value returned by a call.</p> <note> <p>This data structure is only used with the deprecated <code>ExecuteSql</code> operation. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation instead.</p> </note> */
	export interface StructValueFormProperties {
	}
	export function CreateStructValueFormGroup() {
		return new FormGroup<StructValueFormProperties>({
		});

	}


	/** The response elements represent the output of a request to run a SQL statement against a database. */
	export interface ExecuteStatementResponse {
		records?: Array<Array<Field>>;
		columnMetadata?: Array<ColumnMetadata>;
		numberOfRecordsUpdated?: number | null;
		generatedFields?: Array<Field>;
		formattedRecords?: string;
	}

	/** The response elements represent the output of a request to run a SQL statement against a database. */
	export interface ExecuteStatementResponseFormProperties {
		numberOfRecordsUpdated: FormControl<number | null | undefined>,
		formattedRecords: FormControl<string | null | undefined>,
	}
	export function CreateExecuteStatementResponseFormGroup() {
		return new FormGroup<ExecuteStatementResponseFormProperties>({
			numberOfRecordsUpdated: new FormControl<number | null | undefined>(undefined),
			formattedRecords: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DecimalReturnType { STRING = 'STRING', DOUBLE_OR_LONG = 'DOUBLE_OR_LONG' }

	export enum LongReturnType { STRING = 'STRING', LONG = 'LONG' }


	/** The response elements represent the output of a request to perform a rollback of a transaction. */
	export interface RollbackTransactionResponse {
		transactionStatus?: string;
	}

	/** The response elements represent the output of a request to perform a rollback of a transaction. */
	export interface RollbackTransactionResponseFormProperties {
		transactionStatus: FormControl<string | null | undefined>,
	}
	export function CreateRollbackTransactionResponseFormGroup() {
		return new FormGroup<RollbackTransactionResponseFormProperties>({
			transactionStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request parameters represent the input of a SQL statement over an array of data. */
	export interface BatchExecuteStatementRequest {

		/** Required */
		resourceArn: string;

		/** Required */
		secretArn: string;

		/** Required */
		sql: string;
		database?: string;
		schema?: string;
		parameterSets?: Array<Array<SqlParameter>>;
		transactionId?: string;
	}

	/** The request parameters represent the input of a SQL statement over an array of data. */
	export interface BatchExecuteStatementRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,

		/** Required */
		secretArn: FormControl<string | null | undefined>,

		/** Required */
		sql: FormControl<string | null | undefined>,
		database: FormControl<string | null | undefined>,
		schema: FormControl<string | null | undefined>,
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateBatchExecuteStatementRequestFormGroup() {
		return new FormGroup<BatchExecuteStatementRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sql: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			database: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
			transactionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request parameters represent the input of a request to start a SQL transaction. */
	export interface BeginTransactionRequest {

		/** Required */
		resourceArn: string;

		/** Required */
		secretArn: string;
		database?: string;
		schema?: string;
	}

	/** The request parameters represent the input of a request to start a SQL transaction. */
	export interface BeginTransactionRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,

		/** Required */
		secretArn: FormControl<string | null | undefined>,
		database: FormControl<string | null | undefined>,
		schema: FormControl<string | null | undefined>,
	}
	export function CreateBeginTransactionRequestFormGroup() {
		return new FormGroup<BeginTransactionRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			database: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request parameters represent the input of a commit transaction request. */
	export interface CommitTransactionRequest {

		/** Required */
		resourceArn: string;

		/** Required */
		secretArn: string;

		/** Required */
		transactionId: string;
	}

	/** The request parameters represent the input of a commit transaction request. */
	export interface CommitTransactionRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,

		/** Required */
		secretArn: FormControl<string | null | undefined>,

		/** Required */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateCommitTransactionRequestFormGroup() {
		return new FormGroup<CommitTransactionRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The request parameters represent the input of a request to run one or more SQL statements. */
	export interface ExecuteSqlRequest {

		/** Required */
		dbClusterOrInstanceArn: string;

		/** Required */
		awsSecretStoreArn: string;

		/** Required */
		sqlStatements: string;
		database?: string;
		schema?: string;
	}

	/** The request parameters represent the input of a request to run one or more SQL statements. */
	export interface ExecuteSqlRequestFormProperties {

		/** Required */
		dbClusterOrInstanceArn: FormControl<string | null | undefined>,

		/** Required */
		awsSecretStoreArn: FormControl<string | null | undefined>,

		/** Required */
		sqlStatements: FormControl<string | null | undefined>,
		database: FormControl<string | null | undefined>,
		schema: FormControl<string | null | undefined>,
	}
	export function CreateExecuteSqlRequestFormGroup() {
		return new FormGroup<ExecuteSqlRequestFormProperties>({
			dbClusterOrInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			awsSecretStoreArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sqlStatements: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			database: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options that control how the result set is returned. */
	export interface ResultSetOptions {
		decimalReturnType?: DecimalReturnType;
		longReturnType?: LongReturnType;
	}

	/** Options that control how the result set is returned. */
	export interface ResultSetOptionsFormProperties {
		decimalReturnType: FormControl<DecimalReturnType | null | undefined>,
		longReturnType: FormControl<LongReturnType | null | undefined>,
	}
	export function CreateResultSetOptionsFormGroup() {
		return new FormGroup<ResultSetOptionsFormProperties>({
			decimalReturnType: new FormControl<DecimalReturnType | null | undefined>(undefined),
			longReturnType: new FormControl<LongReturnType | null | undefined>(undefined),
		});

	}

	export enum RecordsFormatType { NONE = 'NONE', JSON = 'JSON' }


	/** The request parameters represent the input of a request to run a SQL statement against a database. */
	export interface ExecuteStatementRequest {

		/** Required */
		resourceArn: string;

		/** Required */
		secretArn: string;

		/** Required */
		sql: string;
		database?: string;
		schema?: string;
		parameters?: Array<SqlParameter>;
		transactionId?: string;
		includeResultMetadata?: boolean | null;
		continueAfterTimeout?: boolean | null;
		resultSetOptions?: ResultSetOptions;
		formatRecordsAs?: RecordsFormatType;
	}

	/** The request parameters represent the input of a request to run a SQL statement against a database. */
	export interface ExecuteStatementRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,

		/** Required */
		secretArn: FormControl<string | null | undefined>,

		/** Required */
		sql: FormControl<string | null | undefined>,
		database: FormControl<string | null | undefined>,
		schema: FormControl<string | null | undefined>,
		transactionId: FormControl<string | null | undefined>,
		includeResultMetadata: FormControl<boolean | null | undefined>,
		continueAfterTimeout: FormControl<boolean | null | undefined>,
		formatRecordsAs: FormControl<RecordsFormatType | null | undefined>,
	}
	export function CreateExecuteStatementRequestFormGroup() {
		return new FormGroup<ExecuteStatementRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sql: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			database: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
			transactionId: new FormControl<string | null | undefined>(undefined),
			includeResultMetadata: new FormControl<boolean | null | undefined>(undefined),
			continueAfterTimeout: new FormControl<boolean | null | undefined>(undefined),
			formatRecordsAs: new FormControl<RecordsFormatType | null | undefined>(undefined),
		});

	}


	/** The request parameters represent the input of a request to perform a rollback of a transaction. */
	export interface RollbackTransactionRequest {

		/** Required */
		resourceArn: string;

		/** Required */
		secretArn: string;

		/** Required */
		transactionId: string;
	}

	/** The request parameters represent the input of a request to perform a rollback of a transaction. */
	export interface RollbackTransactionRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,

		/** Required */
		secretArn: FormControl<string | null | undefined>,

		/** Required */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateRollbackTransactionRequestFormGroup() {
		return new FormGroup<RollbackTransactionRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Runs a batch SQL statement over an array of data.</p> <p>You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>There isn't a fixed upper limit on the number of parameter sets. However, the maximum size of the HTTP request submitted through the Data API is 4 MiB. If the request exceeds this limit, the Data API returns an error and doesn't process the request. This 4-MiB limit includes the size of the HTTP headers and the JSON notation in the request. Thus, the number of parameter sets that you can include depends on a combination of factors, such as the size of the SQL statement and the size of each parameter set.</p> <p>The response size limit is 1 MiB. If the call returns more than 1 MiB of response data, the call is terminated.</p> </note>
		 * Post BatchExecute
		 * @return {BatchExecuteStatementResponse} Success
		 */
		BatchExecuteStatement(requestBody: BatchExecuteStatementPostBody): Observable<BatchExecuteStatementResponse> {
			return this.http.post<BatchExecuteStatementResponse>(this.baseUri + 'BatchExecute', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a SQL transaction.</p> <note> <p>A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours.</p> <p>A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically.</p> <p>DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate <code>ExecuteStatement</code> call with <code>continueAfterTimeout</code> enabled.</p> </note>
		 * Post BeginTransaction
		 * @return {BeginTransactionResponse} Success
		 */
		BeginTransaction(requestBody: BeginTransactionPostBody): Observable<BeginTransactionResponse> {
			return this.http.post<BeginTransactionResponse>(this.baseUri + 'BeginTransaction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Ends a SQL transaction started with the <code>BeginTransaction</code> operation and commits the changes.
		 * Post CommitTransaction
		 * @return {CommitTransactionResponse} Success
		 */
		CommitTransaction(requestBody: CommitTransactionPostBody): Observable<CommitTransactionResponse> {
			return this.http.post<CommitTransactionResponse>(this.baseUri + 'CommitTransaction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Runs one or more SQL statements.</p> <note> <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation.</p> </note>
		 * Post ExecuteSql
		 * @return {ExecuteSqlResponse} Success
		 */
		ExecuteSql(requestBody: ExecuteSqlPostBody): Observable<ExecuteSqlResponse> {
			return this.http.post<ExecuteSqlResponse>(this.baseUri + 'ExecuteSql', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Runs a SQL statement against a database.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>If the binary response data from the database is more than 1 MB, the call is terminated.</p> </note>
		 * Post Execute
		 * @return {ExecuteStatementResponse} Success
		 */
		ExecuteStatement(requestBody: ExecuteStatementPostBody): Observable<ExecuteStatementResponse> {
			return this.http.post<ExecuteStatementResponse>(this.baseUri + 'Execute', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Performs a rollback of a transaction. Rolling back a transaction cancels its changes.
		 * Post RollbackTransaction
		 * @return {RollbackTransactionResponse} Success
		 */
		RollbackTransaction(requestBody: RollbackTransactionPostBody): Observable<RollbackTransactionResponse> {
			return this.http.post<RollbackTransactionResponse>(this.baseUri + 'RollbackTransaction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface BatchExecuteStatementPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
		 * Required
		 * Min length: 11
		 * Max length: 100
		 */
		resourceArn: string;

		/**
		 * <p>The ARN of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in the secret.</p> <p>For information about creating the secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html">Create a database secret</a>.</p>
		 * Required
		 * Min length: 11
		 * Max length: 100
		 */
		secretArn: string;

		/**
		 * The SQL statement to run. Don't include a semicolon (;) at the end of the SQL statement.
		 * Required
		 * Min length: 0
		 * Max length: 65536
		 */
		sql: string;

		/**
		 * The name of the database.
		 * Min length: 0
		 * Max length: 64
		 */
		database?: string | null;

		/**
		 * <p>The name of the database schema.</p> <note> <p>Currently, the <code>schema</code> parameter isn't supported.</p> </note>
		 * Min length: 0
		 * Max length: 64
		 */
		schema?: string | null;

		/** <p>The parameter set for the batch operation.</p> <p>The SQL statement is executed as many times as the number of parameter sets provided. To execute a SQL statement with no parameters, use one of the following options:</p> <ul> <li> <p>Specify one or more empty parameter sets.</p> </li> <li> <p>Use the <code>ExecuteStatement</code> operation instead of the <code>BatchExecuteStatement</code> operation.</p> </li> </ul> <note> <p>Array parameters are not supported.</p> </note> */
		parameterSets?: Array<Array<SqlParameter>>;

		/**
		 * <p>The identifier of a transaction that was started by using the <code>BeginTransaction</code> operation. Specify the transaction ID of the transaction that you want to include the SQL statement in.</p> <p>If the SQL statement is not part of a transaction, don't set this parameter.</p>
		 * Min length: 0
		 * Max length: 192
		 */
		transactionId?: string | null;
	}
	export interface BatchExecuteStatementPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
		 * Required
		 * Min length: 11
		 * Max length: 100
		 */
		resourceArn: FormControl<string | null | undefined>,

		/**
		 * <p>The ARN of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in the secret.</p> <p>For information about creating the secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html">Create a database secret</a>.</p>
		 * Required
		 * Min length: 11
		 * Max length: 100
		 */
		secretArn: FormControl<string | null | undefined>,

		/**
		 * The SQL statement to run. Don't include a semicolon (;) at the end of the SQL statement.
		 * Required
		 * Min length: 0
		 * Max length: 65536
		 */
		sql: FormControl<string | null | undefined>,

		/**
		 * The name of the database.
		 * Min length: 0
		 * Max length: 64
		 */
		database: FormControl<string | null | undefined>,

		/**
		 * <p>The name of the database schema.</p> <note> <p>Currently, the <code>schema</code> parameter isn't supported.</p> </note>
		 * Min length: 0
		 * Max length: 64
		 */
		schema: FormControl<string | null | undefined>,

		/**
		 * <p>The identifier of a transaction that was started by using the <code>BeginTransaction</code> operation. Specify the transaction ID of the transaction that you want to include the SQL statement in.</p> <p>If the SQL statement is not part of a transaction, don't set this parameter.</p>
		 * Min length: 0
		 * Max length: 192
		 */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateBatchExecuteStatementPostBodyFormGroup() {
		return new FormGroup<BatchExecuteStatementPostBodyFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(11), Validators.maxLength(100)]),
			secretArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(11), Validators.maxLength(100)]),
			sql: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(65536)]),
			database: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
			schema: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(192)]),
		});

	}

	export interface BeginTransactionPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
		 * Required
		 * Min length: 11
		 * Max length: 100
		 */
		resourceArn: string;

		/**
		 * The name or ARN of the secret that enables access to the DB cluster.
		 * Required
		 * Min length: 11
		 * Max length: 100
		 */
		secretArn: string;

		/**
		 * The name of the database.
		 * Min length: 0
		 * Max length: 64
		 */
		database?: string | null;

		/**
		 * The name of the database schema.
		 * Min length: 0
		 * Max length: 64
		 */
		schema?: string | null;
	}
	export interface BeginTransactionPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
		 * Required
		 * Min length: 11
		 * Max length: 100
		 */
		resourceArn: FormControl<string | null | undefined>,

		/**
		 * The name or ARN of the secret that enables access to the DB cluster.
		 * Required
		 * Min length: 11
		 * Max length: 100
		 */
		secretArn: FormControl<string | null | undefined>,

		/**
		 * The name of the database.
		 * Min length: 0
		 * Max length: 64
		 */
		database: FormControl<string | null | undefined>,

		/**
		 * The name of the database schema.
		 * Min length: 0
		 * Max length: 64
		 */
		schema: FormControl<string | null | undefined>,
	}
	export function CreateBeginTransactionPostBodyFormGroup() {
		return new FormGroup<BeginTransactionPostBodyFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(11), Validators.maxLength(100)]),
			secretArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(11), Validators.maxLength(100)]),
			database: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
			schema: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
		});

	}

	export interface CommitTransactionPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
		 * Required
		 * Min length: 11
		 * Max length: 100
		 */
		resourceArn: string;

		/**
		 * The name or ARN of the secret that enables access to the DB cluster.
		 * Required
		 * Min length: 11
		 * Max length: 100
		 */
		secretArn: string;

		/**
		 * The identifier of the transaction to end and commit.
		 * Required
		 * Min length: 0
		 * Max length: 192
		 */
		transactionId: string;
	}
	export interface CommitTransactionPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
		 * Required
		 * Min length: 11
		 * Max length: 100
		 */
		resourceArn: FormControl<string | null | undefined>,

		/**
		 * The name or ARN of the secret that enables access to the DB cluster.
		 * Required
		 * Min length: 11
		 * Max length: 100
		 */
		secretArn: FormControl<string | null | undefined>,

		/**
		 * The identifier of the transaction to end and commit.
		 * Required
		 * Min length: 0
		 * Max length: 192
		 */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateCommitTransactionPostBodyFormGroup() {
		return new FormGroup<CommitTransactionPostBodyFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(11), Validators.maxLength(100)]),
			secretArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(11), Validators.maxLength(100)]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(192)]),
		});

	}

	export interface ExecuteSqlPostBody {

		/**
		 * The ARN of the Aurora Serverless DB cluster.
		 * Required
		 * Min length: 11
		 * Max length: 100
		 */
		dbClusterOrInstanceArn: string;

		/**
		 * <p>The Amazon Resource Name (ARN) of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in the secret.</p> <p>For information about creating the secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html">Create a database secret</a>.</p>
		 * Required
		 * Min length: 11
		 * Max length: 100
		 */
		awsSecretStoreArn: string;

		/**
		 * <p>One or more SQL statements to run on the DB cluster.</p> <p>You can separate SQL statements from each other with a semicolon (;). Any valid SQL statement is permitted, including data definition, data manipulation, and commit statements. </p>
		 * Required
		 * Min length: 0
		 * Max length: 65536
		 */
		sqlStatements: string;

		/**
		 * The name of the database.
		 * Min length: 0
		 * Max length: 64
		 */
		database?: string | null;

		/**
		 * The name of the database schema.
		 * Min length: 0
		 * Max length: 64
		 */
		schema?: string | null;
	}
	export interface ExecuteSqlPostBodyFormProperties {

		/**
		 * The ARN of the Aurora Serverless DB cluster.
		 * Required
		 * Min length: 11
		 * Max length: 100
		 */
		dbClusterOrInstanceArn: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN) of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in the secret.</p> <p>For information about creating the secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html">Create a database secret</a>.</p>
		 * Required
		 * Min length: 11
		 * Max length: 100
		 */
		awsSecretStoreArn: FormControl<string | null | undefined>,

		/**
		 * <p>One or more SQL statements to run on the DB cluster.</p> <p>You can separate SQL statements from each other with a semicolon (;). Any valid SQL statement is permitted, including data definition, data manipulation, and commit statements. </p>
		 * Required
		 * Min length: 0
		 * Max length: 65536
		 */
		sqlStatements: FormControl<string | null | undefined>,

		/**
		 * The name of the database.
		 * Min length: 0
		 * Max length: 64
		 */
		database: FormControl<string | null | undefined>,

		/**
		 * The name of the database schema.
		 * Min length: 0
		 * Max length: 64
		 */
		schema: FormControl<string | null | undefined>,
	}
	export function CreateExecuteSqlPostBodyFormGroup() {
		return new FormGroup<ExecuteSqlPostBodyFormProperties>({
			dbClusterOrInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(11), Validators.maxLength(100)]),
			awsSecretStoreArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(11), Validators.maxLength(100)]),
			sqlStatements: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(65536)]),
			database: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
			schema: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
		});

	}

	export interface ExecuteStatementPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
		 * Required
		 * Min length: 11
		 * Max length: 100
		 */
		resourceArn: string;

		/**
		 * <p>The ARN of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in the secret.</p> <p>For information about creating the secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html">Create a database secret</a>.</p>
		 * Required
		 * Min length: 11
		 * Max length: 100
		 */
		secretArn: string;

		/**
		 * The SQL statement to run.
		 * Required
		 * Min length: 0
		 * Max length: 65536
		 */
		sql: string;

		/**
		 * The name of the database.
		 * Min length: 0
		 * Max length: 64
		 */
		database?: string | null;

		/**
		 * <p>The name of the database schema.</p> <note> <p>Currently, the <code>schema</code> parameter isn't supported.</p> </note>
		 * Min length: 0
		 * Max length: 64
		 */
		schema?: string | null;

		/** <p>The parameters for the SQL statement.</p> <note> <p>Array parameters are not supported.</p> </note> */
		parameters?: Array<SqlParameter>;

		/**
		 * <p>The identifier of a transaction that was started by using the <code>BeginTransaction</code> operation. Specify the transaction ID of the transaction that you want to include the SQL statement in.</p> <p>If the SQL statement is not part of a transaction, don't set this parameter.</p>
		 * Min length: 0
		 * Max length: 192
		 */
		transactionId?: string | null;

		/** A value that indicates whether to include metadata in the results. */
		includeResultMetadata?: boolean | null;

		/** <p>A value that indicates whether to continue running the statement after the call times out. By default, the statement stops running when the call times out.</p> <note> <p>For DDL statements, we recommend continuing to run the statement after the call times out. When a DDL statement terminates before it is finished running, it can result in errors and possibly corrupted data structures.</p> </note> */
		continueAfterTimeout?: boolean | null;

		/** Options that control how the result set is returned. */
		resultSetOptions?: ExecuteStatementPostBodyResultSetOptions;

		/** <p>A value that indicates whether to format the result set as a single JSON string. This parameter only applies to <code>SELECT</code> statements and is ignored for other types of statements. Allowed values are <code>NONE</code> and <code>JSON</code>. The default value is <code>NONE</code>. The result is returned in the <code>formattedRecords</code> field.</p> <p>For usage information about the JSON format for result sets, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API</a> in the <i>Amazon Aurora User Guide</i>.</p> */
		formatRecordsAs?: RecordsFormatType | null;
	}
	export interface ExecuteStatementPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
		 * Required
		 * Min length: 11
		 * Max length: 100
		 */
		resourceArn: FormControl<string | null | undefined>,

		/**
		 * <p>The ARN of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in the secret.</p> <p>For information about creating the secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_database_secret.html">Create a database secret</a>.</p>
		 * Required
		 * Min length: 11
		 * Max length: 100
		 */
		secretArn: FormControl<string | null | undefined>,

		/**
		 * The SQL statement to run.
		 * Required
		 * Min length: 0
		 * Max length: 65536
		 */
		sql: FormControl<string | null | undefined>,

		/**
		 * The name of the database.
		 * Min length: 0
		 * Max length: 64
		 */
		database: FormControl<string | null | undefined>,

		/**
		 * <p>The name of the database schema.</p> <note> <p>Currently, the <code>schema</code> parameter isn't supported.</p> </note>
		 * Min length: 0
		 * Max length: 64
		 */
		schema: FormControl<string | null | undefined>,

		/**
		 * <p>The identifier of a transaction that was started by using the <code>BeginTransaction</code> operation. Specify the transaction ID of the transaction that you want to include the SQL statement in.</p> <p>If the SQL statement is not part of a transaction, don't set this parameter.</p>
		 * Min length: 0
		 * Max length: 192
		 */
		transactionId: FormControl<string | null | undefined>,

		/** A value that indicates whether to include metadata in the results. */
		includeResultMetadata: FormControl<boolean | null | undefined>,

		/** <p>A value that indicates whether to continue running the statement after the call times out. By default, the statement stops running when the call times out.</p> <note> <p>For DDL statements, we recommend continuing to run the statement after the call times out. When a DDL statement terminates before it is finished running, it can result in errors and possibly corrupted data structures.</p> </note> */
		continueAfterTimeout: FormControl<boolean | null | undefined>,

		/** <p>A value that indicates whether to format the result set as a single JSON string. This parameter only applies to <code>SELECT</code> statements and is ignored for other types of statements. Allowed values are <code>NONE</code> and <code>JSON</code>. The default value is <code>NONE</code>. The result is returned in the <code>formattedRecords</code> field.</p> <p>For usage information about the JSON format for result sets, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API</a> in the <i>Amazon Aurora User Guide</i>.</p> */
		formatRecordsAs: FormControl<RecordsFormatType | null | undefined>,
	}
	export function CreateExecuteStatementPostBodyFormGroup() {
		return new FormGroup<ExecuteStatementPostBodyFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(11), Validators.maxLength(100)]),
			secretArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(11), Validators.maxLength(100)]),
			sql: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(65536)]),
			database: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
			schema: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(192)]),
			includeResultMetadata: new FormControl<boolean | null | undefined>(undefined),
			continueAfterTimeout: new FormControl<boolean | null | undefined>(undefined),
			formatRecordsAs: new FormControl<RecordsFormatType | null | undefined>(undefined),
		});

	}

	export interface ExecuteStatementPostBodyResultSetOptions {
		decimalReturnType?: DecimalReturnType;
		longReturnType?: LongReturnType;
	}
	export interface ExecuteStatementPostBodyResultSetOptionsFormProperties {
		decimalReturnType: FormControl<DecimalReturnType | null | undefined>,
		longReturnType: FormControl<LongReturnType | null | undefined>,
	}
	export function CreateExecuteStatementPostBodyResultSetOptionsFormGroup() {
		return new FormGroup<ExecuteStatementPostBodyResultSetOptionsFormProperties>({
			decimalReturnType: new FormControl<DecimalReturnType | null | undefined>(undefined),
			longReturnType: new FormControl<LongReturnType | null | undefined>(undefined),
		});

	}

	export interface RollbackTransactionPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
		 * Required
		 * Min length: 11
		 * Max length: 100
		 */
		resourceArn: string;

		/**
		 * The name or ARN of the secret that enables access to the DB cluster.
		 * Required
		 * Min length: 11
		 * Max length: 100
		 */
		secretArn: string;

		/**
		 * The identifier of the transaction to roll back.
		 * Required
		 * Min length: 0
		 * Max length: 192
		 */
		transactionId: string;
	}
	export interface RollbackTransactionPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
		 * Required
		 * Min length: 11
		 * Max length: 100
		 */
		resourceArn: FormControl<string | null | undefined>,

		/**
		 * The name or ARN of the secret that enables access to the DB cluster.
		 * Required
		 * Min length: 11
		 * Max length: 100
		 */
		secretArn: FormControl<string | null | undefined>,

		/**
		 * The identifier of the transaction to roll back.
		 * Required
		 * Min length: 0
		 * Max length: 192
		 */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateRollbackTransactionPostBodyFormGroup() {
		return new FormGroup<RollbackTransactionPostBodyFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(11), Validators.maxLength(100)]),
			secretArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(11), Validators.maxLength(100)]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(192)]),
		});

	}

}

