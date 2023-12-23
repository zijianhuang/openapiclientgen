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

		/** Contains an array. */
		arrayValue?: ArrayValue;
		blobValue?: string | null;
		booleanValue?: boolean | null;
		doubleValue?: number | null;
		isNull?: boolean | null;
		longValue?: number | null;
		stringValue?: string | null;
	}

	/** Contains a value. */
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


	/** Contains an array. */
	export interface ArrayValue {

		/** <p>An array of arrays.</p> <note> <p>Some array entries can be null.</p> </note> */
		arrayValues?: Array<ArrayValue>;

		/** <p>An array of Boolean values.</p> <note> <p>Some array entries can be null.</p> </note> */
		booleanValues?: Array<boolean>;

		/** <p>An array of floating point numbers.</p> <note> <p>Some array entries can be null.</p> </note> */
		doubleValues?: Array<number>;

		/** <p>An array of integers.</p> <note> <p>Some array entries can be null.</p> </note> */
		longValues?: Array<number>;

		/** <p>An array of strings.</p> <note> <p>Some array entries can be null.</p> </note> */
		stringValues?: Array<string>;
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
		name?: string | null;
		typeHint?: SqlParameterTypeHint | null;

		/** Contains a value. */
		value?: Field;
	}

	/** A parameter used in a SQL statement. */
	export interface SqlParameterFormProperties {
		name: FormControl<string | null | undefined>,
		typeHint: FormControl<SqlParameterTypeHint | null | undefined>,
	}
	export function CreateSqlParameterFormGroup() {
		return new FormGroup<SqlParameterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			typeHint: new FormControl<SqlParameterTypeHint | null | undefined>(undefined),
		});

	}

	export enum SqlParameterTypeHint { DATE = 0, DECIMAL = 1, TIME = 2, TIMESTAMP = 3 }

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

		/**
		 * Max length: 192
		 * Min length: 0
		 */
		transactionId?: string | null;
	}

	/** The response elements represent the output of a request to start a SQL transaction. */
	export interface BeginTransactionResponseFormProperties {

		/**
		 * Max length: 192
		 * Min length: 0
		 */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateBeginTransactionResponseFormGroup() {
		return new FormGroup<BeginTransactionResponseFormProperties>({
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(192), Validators.minLength(0)]),
		});

	}


	/** The response elements represent the output of a commit transaction request. */
	export interface CommitTransactionResponse {

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		transactionStatus?: string | null;
	}

	/** The response elements represent the output of a commit transaction request. */
	export interface CommitTransactionResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		transactionStatus: FormControl<string | null | undefined>,
	}
	export function CreateCommitTransactionResponseFormGroup() {
		return new FormGroup<CommitTransactionResponseFormProperties>({
			transactionStatus: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(0)]),
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


	/** <p>The result of a SQL statement.</p> <pre><code> &lt;important&gt; &lt;p&gt;This data type is deprecated.&lt;/p&gt; &lt;/important&gt; </code></pre> */
	export interface SqlStatementResult {
		numberOfRecordsUpdated?: number | null;

		/** The result set returned by a SQL statement. */
		resultFrame?: ResultFrame;
	}

	/** <p>The result of a SQL statement.</p> <pre><code> &lt;important&gt; &lt;p&gt;This data type is deprecated.&lt;/p&gt; &lt;/important&gt; </code></pre> */
	export interface SqlStatementResultFormProperties {
		numberOfRecordsUpdated: FormControl<number | null | undefined>,
	}
	export function CreateSqlStatementResultFormGroup() {
		return new FormGroup<SqlStatementResultFormProperties>({
			numberOfRecordsUpdated: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The result set returned by a SQL statement. */
	export interface ResultFrame {
		records?: Array<Record>;

		/** The metadata of the result set returned by a SQL statement. */
		resultSetMetadata?: ResultSetMetadata;
	}

	/** The result set returned by a SQL statement. */
	export interface ResultFrameFormProperties {
	}
	export function CreateResultFrameFormGroup() {
		return new FormGroup<ResultFrameFormProperties>({
		});

	}


	/** A record returned by a call. */
	export interface Record {
		values?: Array<Value>;
	}

	/** A record returned by a call. */
	export interface RecordFormProperties {
	}
	export function CreateRecordFormGroup() {
		return new FormGroup<RecordFormProperties>({
		});

	}


	/** <p>Contains the value of a column.</p> <pre><code> &lt;important&gt; &lt;p&gt;This data type is deprecated.&lt;/p&gt; &lt;/important&gt; </code></pre> */
	export interface Value {
		arrayValues?: Array<Value>;
		bigIntValue?: number | null;
		bitValue?: boolean | null;
		blobValue?: string | null;
		doubleValue?: number | null;
		intValue?: number | null;
		isNull?: boolean | null;
		realValue?: number | null;
		stringValue?: string | null;

		/** A structure value returned by a call. */
		structValue?: StructValue;
	}

	/** <p>Contains the value of a column.</p> <pre><code> &lt;important&gt; &lt;p&gt;This data type is deprecated.&lt;/p&gt; &lt;/important&gt; </code></pre> */
	export interface ValueFormProperties {
		bigIntValue: FormControl<number | null | undefined>,
		bitValue: FormControl<boolean | null | undefined>,
		blobValue: FormControl<string | null | undefined>,
		doubleValue: FormControl<number | null | undefined>,
		intValue: FormControl<number | null | undefined>,
		isNull: FormControl<boolean | null | undefined>,
		realValue: FormControl<number | null | undefined>,
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateValueFormGroup() {
		return new FormGroup<ValueFormProperties>({
			bigIntValue: new FormControl<number | null | undefined>(undefined),
			bitValue: new FormControl<boolean | null | undefined>(undefined),
			blobValue: new FormControl<string | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
			intValue: new FormControl<number | null | undefined>(undefined),
			isNull: new FormControl<boolean | null | undefined>(undefined),
			realValue: new FormControl<number | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure value returned by a call. */
	export interface StructValue {
		attributes?: Array<Value>;
	}

	/** A structure value returned by a call. */
	export interface StructValueFormProperties {
	}
	export function CreateStructValueFormGroup() {
		return new FormGroup<StructValueFormProperties>({
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
		arrayBaseColumnType?: number | null;
		isAutoIncrement?: boolean | null;
		isCaseSensitive?: boolean | null;
		isCurrency?: boolean | null;
		isSigned?: boolean | null;
		label?: string | null;
		name?: string | null;
		nullable?: number | null;
		precision?: number | null;
		scale?: number | null;
		schemaName?: string | null;
		tableName?: string | null;
		type?: number | null;
		typeName?: string | null;
	}

	/** Contains the metadata for a column. */
	export interface ColumnMetadataFormProperties {
		arrayBaseColumnType: FormControl<number | null | undefined>,
		isAutoIncrement: FormControl<boolean | null | undefined>,
		isCaseSensitive: FormControl<boolean | null | undefined>,
		isCurrency: FormControl<boolean | null | undefined>,
		isSigned: FormControl<boolean | null | undefined>,
		label: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		nullable: FormControl<number | null | undefined>,
		precision: FormControl<number | null | undefined>,
		scale: FormControl<number | null | undefined>,
		schemaName: FormControl<string | null | undefined>,
		tableName: FormControl<string | null | undefined>,
		type: FormControl<number | null | undefined>,
		typeName: FormControl<string | null | undefined>,
	}
	export function CreateColumnMetadataFormGroup() {
		return new FormGroup<ColumnMetadataFormProperties>({
			arrayBaseColumnType: new FormControl<number | null | undefined>(undefined),
			isAutoIncrement: new FormControl<boolean | null | undefined>(undefined),
			isCaseSensitive: new FormControl<boolean | null | undefined>(undefined),
			isCurrency: new FormControl<boolean | null | undefined>(undefined),
			isSigned: new FormControl<boolean | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nullable: new FormControl<number | null | undefined>(undefined),
			precision: new FormControl<number | null | undefined>(undefined),
			scale: new FormControl<number | null | undefined>(undefined),
			schemaName: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<number | null | undefined>(undefined),
			typeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response elements represent the output of a request to run a SQL statement against a database. */
	export interface ExecuteStatementResponse {
		columnMetadata?: Array<ColumnMetadata>;
		generatedFields?: Array<Field>;
		numberOfRecordsUpdated?: number | null;
		records?: Array<Array<Field>>;
	}

	/** The response elements represent the output of a request to run a SQL statement against a database. */
	export interface ExecuteStatementResponseFormProperties {
		numberOfRecordsUpdated: FormControl<number | null | undefined>,
	}
	export function CreateExecuteStatementResponseFormGroup() {
		return new FormGroup<ExecuteStatementResponseFormProperties>({
			numberOfRecordsUpdated: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DecimalReturnType { DOUBLE_OR_LONG = 0, STRING = 1 }


	/** The response elements represent the output of a request to perform a rollback of a transaction. */
	export interface RollbackTransactionResponse {

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		transactionStatus?: string | null;
	}

	/** The response elements represent the output of a request to perform a rollback of a transaction. */
	export interface RollbackTransactionResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		transactionStatus: FormControl<string | null | undefined>,
	}
	export function CreateRollbackTransactionResponseFormGroup() {
		return new FormGroup<RollbackTransactionResponseFormProperties>({
			transactionStatus: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(0)]),
		});

	}


	/** The request parameters represent the input of a SQL statement over an array of data. */
	export interface BatchExecuteStatementRequest {

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		database?: string | null;
		parameterSets?: Array<Array<SqlParameter>>;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		resourceArn: string;

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		schema?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		secretArn: string;

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 0
		 */
		sql: string;

		/**
		 * Max length: 192
		 * Min length: 0
		 */
		transactionId?: string | null;
	}

	/** The request parameters represent the input of a SQL statement over an array of data. */
	export interface BatchExecuteStatementRequestFormProperties {

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		database: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		resourceArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		schema: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		secretArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 0
		 */
		sql: FormControl<string | null | undefined>,

		/**
		 * Max length: 192
		 * Min length: 0
		 */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateBatchExecuteStatementRequestFormGroup() {
		return new FormGroup<BatchExecuteStatementRequestFormProperties>({
			database: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(0)]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(11)]),
			schema: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(0)]),
			secretArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(11)]),
			sql: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(0)]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(192), Validators.minLength(0)]),
		});

	}


	/** The request parameters represent the input of a request to start a SQL transaction. */
	export interface BeginTransactionRequest {

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		database?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		resourceArn: string;

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		schema?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		secretArn: string;
	}

	/** The request parameters represent the input of a request to start a SQL transaction. */
	export interface BeginTransactionRequestFormProperties {

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		database: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		resourceArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		schema: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		secretArn: FormControl<string | null | undefined>,
	}
	export function CreateBeginTransactionRequestFormGroup() {
		return new FormGroup<BeginTransactionRequestFormProperties>({
			database: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(0)]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(11)]),
			schema: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(0)]),
			secretArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(11)]),
		});

	}


	/** The request parameters represent the input of a commit transaction request. */
	export interface CommitTransactionRequest {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		resourceArn: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		secretArn: string;

		/**
		 * Required
		 * Max length: 192
		 * Min length: 0
		 */
		transactionId: string;
	}

	/** The request parameters represent the input of a commit transaction request. */
	export interface CommitTransactionRequestFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		resourceArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		secretArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 192
		 * Min length: 0
		 */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateCommitTransactionRequestFormGroup() {
		return new FormGroup<CommitTransactionRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(11)]),
			secretArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(11)]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(192), Validators.minLength(0)]),
		});

	}


	/** The request parameters represent the input of a request to run one or more SQL statements. */
	export interface ExecuteSqlRequest {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		awsSecretStoreArn: string;

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		database?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		dbClusterOrInstanceArn: string;

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		schema?: string | null;

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 0
		 */
		sqlStatements: string;
	}

	/** The request parameters represent the input of a request to run one or more SQL statements. */
	export interface ExecuteSqlRequestFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		awsSecretStoreArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		database: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		dbClusterOrInstanceArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		schema: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 0
		 */
		sqlStatements: FormControl<string | null | undefined>,
	}
	export function CreateExecuteSqlRequestFormGroup() {
		return new FormGroup<ExecuteSqlRequestFormProperties>({
			awsSecretStoreArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(11)]),
			database: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(0)]),
			dbClusterOrInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(11)]),
			schema: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(0)]),
			sqlStatements: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(0)]),
		});

	}


	/** Options that control how the result set is returned. */
	export interface ResultSetOptions {
		decimalReturnType?: DecimalReturnType | null;
	}

	/** Options that control how the result set is returned. */
	export interface ResultSetOptionsFormProperties {
		decimalReturnType: FormControl<DecimalReturnType | null | undefined>,
	}
	export function CreateResultSetOptionsFormGroup() {
		return new FormGroup<ResultSetOptionsFormProperties>({
			decimalReturnType: new FormControl<DecimalReturnType | null | undefined>(undefined),
		});

	}


	/** The request parameters represent the input of a request to run a SQL statement against a database. */
	export interface ExecuteStatementRequest {
		continueAfterTimeout?: boolean | null;

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		database?: string | null;
		includeResultMetadata?: boolean | null;
		parameters?: Array<SqlParameter>;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		resourceArn: string;

		/** Options that control how the result set is returned. */
		resultSetOptions?: ResultSetOptions;

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		schema?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		secretArn: string;

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 0
		 */
		sql: string;

		/**
		 * Max length: 192
		 * Min length: 0
		 */
		transactionId?: string | null;
	}

	/** The request parameters represent the input of a request to run a SQL statement against a database. */
	export interface ExecuteStatementRequestFormProperties {
		continueAfterTimeout: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		database: FormControl<string | null | undefined>,
		includeResultMetadata: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		resourceArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 0
		 */
		schema: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		secretArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 0
		 */
		sql: FormControl<string | null | undefined>,

		/**
		 * Max length: 192
		 * Min length: 0
		 */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateExecuteStatementRequestFormGroup() {
		return new FormGroup<ExecuteStatementRequestFormProperties>({
			continueAfterTimeout: new FormControl<boolean | null | undefined>(undefined),
			database: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(0)]),
			includeResultMetadata: new FormControl<boolean | null | undefined>(undefined),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(11)]),
			schema: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(0)]),
			secretArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(11)]),
			sql: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(0)]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(192), Validators.minLength(0)]),
		});

	}


	/** The request parameters represent the input of a request to perform a rollback of a transaction. */
	export interface RollbackTransactionRequest {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		resourceArn: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		secretArn: string;

		/**
		 * Required
		 * Max length: 192
		 * Min length: 0
		 */
		transactionId: string;
	}

	/** The request parameters represent the input of a request to perform a rollback of a transaction. */
	export interface RollbackTransactionRequestFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		resourceArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		secretArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 192
		 * Min length: 0
		 */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateRollbackTransactionRequestFormGroup() {
		return new FormGroup<RollbackTransactionRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(11)]),
			secretArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(11)]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(192), Validators.minLength(0)]),
		});

	}

	export enum TypeHint { DATE = 0, DECIMAL = 1, TIME = 2, TIMESTAMP = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Runs a batch SQL statement over an array of data.</p> <p>You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.</p> <important> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> </important>
		 * Post BatchExecute
		 * @return {BatchExecuteStatementResponse} Success
		 */
		BatchExecuteStatement(requestBody: BatchExecuteStatementPostBody): Observable<BatchExecuteStatementResponse> {
			return this.http.post<BatchExecuteStatementResponse>(this.baseUri + 'BatchExecute', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a SQL transaction.</p> <pre><code> &lt;important&gt; &lt;p&gt;A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours.&lt;/p&gt; &lt;p&gt;A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically.&lt;/p&gt; &lt;p&gt;DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate &lt;code&gt;ExecuteStatement&lt;/code&gt; call with &lt;code&gt;continueAfterTimeout&lt;/code&gt; enabled.&lt;/p&gt; &lt;/important&gt; </code></pre>
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
		 * <p>Runs one or more SQL statements.</p> <important> <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation.</p> </important>
		 * Post ExecuteSql
		 * @return {ExecuteSqlResponse} Success
		 */
		ExecuteSql(requestBody: ExecuteSqlPostBody): Observable<ExecuteSqlResponse> {
			return this.http.post<ExecuteSqlResponse>(this.baseUri + 'ExecuteSql', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Runs a SQL statement against a database.</p> <important> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> </important> <p>The response size limit is 1 MB. If the call returns more than 1 MB of response data, the call is terminated.</p>
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
		 * The name of the database.
		 * Max length: 64
		 * Min length: 0
		 */
		database?: string | null;

		/** <p>The parameter set for the batch operation.</p> <p>The SQL statement is executed as many times as the number of parameter sets provided. To execute a SQL statement with no parameters, use one of the following options:</p> <ul> <li> <p>Specify one or more empty parameter sets.</p> </li> <li> <p>Use the <code>ExecuteStatement</code> operation instead of the <code>BatchExecuteStatement</code> operation.</p> </li> </ul> <note> <p>Array parameters are not supported.</p> </note> */
		parameterSets?: Array<Array<SqlParameter>>;

		/**
		 * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		resourceArn: string;

		/**
		 * The name of the database schema.
		 * Max length: 64
		 * Min length: 0
		 */
		schema?: string | null;

		/**
		 * The name or ARN of the secret that enables access to the DB cluster.
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		secretArn: string;

		/**
		 * The SQL statement to run.
		 * Required
		 * Max length: 65536
		 * Min length: 0
		 */
		sql: string;

		/**
		 * <p>The identifier of a transaction that was started by using the <code>BeginTransaction</code> operation. Specify the transaction ID of the transaction that you want to include the SQL statement in.</p> <p>If the SQL statement is not part of a transaction, don't set this parameter.</p>
		 * Max length: 192
		 * Min length: 0
		 */
		transactionId?: string | null;
	}
	export interface BatchExecuteStatementPostBodyFormProperties {

		/**
		 * The name of the database.
		 * Max length: 64
		 * Min length: 0
		 */
		database: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		resourceArn: FormControl<string | null | undefined>,

		/**
		 * The name of the database schema.
		 * Max length: 64
		 * Min length: 0
		 */
		schema: FormControl<string | null | undefined>,

		/**
		 * The name or ARN of the secret that enables access to the DB cluster.
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		secretArn: FormControl<string | null | undefined>,

		/**
		 * The SQL statement to run.
		 * Required
		 * Max length: 65536
		 * Min length: 0
		 */
		sql: FormControl<string | null | undefined>,

		/**
		 * <p>The identifier of a transaction that was started by using the <code>BeginTransaction</code> operation. Specify the transaction ID of the transaction that you want to include the SQL statement in.</p> <p>If the SQL statement is not part of a transaction, don't set this parameter.</p>
		 * Max length: 192
		 * Min length: 0
		 */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateBatchExecuteStatementPostBodyFormGroup() {
		return new FormGroup<BatchExecuteStatementPostBodyFormProperties>({
			database: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(0)]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(11)]),
			schema: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(0)]),
			secretArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(11)]),
			sql: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(0)]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(192), Validators.minLength(0)]),
		});

	}

	export interface BeginTransactionPostBody {

		/**
		 * The name of the database.
		 * Max length: 64
		 * Min length: 0
		 */
		database?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		resourceArn: string;

		/**
		 * The name of the database schema.
		 * Max length: 64
		 * Min length: 0
		 */
		schema?: string | null;

		/**
		 * The name or ARN of the secret that enables access to the DB cluster.
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		secretArn: string;
	}
	export interface BeginTransactionPostBodyFormProperties {

		/**
		 * The name of the database.
		 * Max length: 64
		 * Min length: 0
		 */
		database: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		resourceArn: FormControl<string | null | undefined>,

		/**
		 * The name of the database schema.
		 * Max length: 64
		 * Min length: 0
		 */
		schema: FormControl<string | null | undefined>,

		/**
		 * The name or ARN of the secret that enables access to the DB cluster.
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		secretArn: FormControl<string | null | undefined>,
	}
	export function CreateBeginTransactionPostBodyFormGroup() {
		return new FormGroup<BeginTransactionPostBodyFormProperties>({
			database: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(0)]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(11)]),
			schema: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(0)]),
			secretArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(11)]),
		});

	}

	export interface CommitTransactionPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		resourceArn: string;

		/**
		 * The name or ARN of the secret that enables access to the DB cluster.
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		secretArn: string;

		/**
		 * The identifier of the transaction to end and commit.
		 * Required
		 * Max length: 192
		 * Min length: 0
		 */
		transactionId: string;
	}
	export interface CommitTransactionPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		resourceArn: FormControl<string | null | undefined>,

		/**
		 * The name or ARN of the secret that enables access to the DB cluster.
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		secretArn: FormControl<string | null | undefined>,

		/**
		 * The identifier of the transaction to end and commit.
		 * Required
		 * Max length: 192
		 * Min length: 0
		 */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateCommitTransactionPostBodyFormGroup() {
		return new FormGroup<CommitTransactionPostBodyFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(11)]),
			secretArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(11)]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(192), Validators.minLength(0)]),
		});

	}

	export interface ExecuteSqlPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the secret that enables access to the DB cluster.
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		awsSecretStoreArn: string;

		/**
		 * The name of the database.
		 * Max length: 64
		 * Min length: 0
		 */
		database?: string | null;

		/**
		 * The ARN of the Aurora Serverless DB cluster.
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		dbClusterOrInstanceArn: string;

		/**
		 * The name of the database schema.
		 * Max length: 64
		 * Min length: 0
		 */
		schema?: string | null;

		/**
		 * <p>One or more SQL statements to run on the DB cluster.</p> <p>You can separate SQL statements from each other with a semicolon (;). Any valid SQL statement is permitted, including data definition, data manipulation, and commit statements. </p>
		 * Required
		 * Max length: 65536
		 * Min length: 0
		 */
		sqlStatements: string;
	}
	export interface ExecuteSqlPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the secret that enables access to the DB cluster.
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		awsSecretStoreArn: FormControl<string | null | undefined>,

		/**
		 * The name of the database.
		 * Max length: 64
		 * Min length: 0
		 */
		database: FormControl<string | null | undefined>,

		/**
		 * The ARN of the Aurora Serverless DB cluster.
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		dbClusterOrInstanceArn: FormControl<string | null | undefined>,

		/**
		 * The name of the database schema.
		 * Max length: 64
		 * Min length: 0
		 */
		schema: FormControl<string | null | undefined>,

		/**
		 * <p>One or more SQL statements to run on the DB cluster.</p> <p>You can separate SQL statements from each other with a semicolon (;). Any valid SQL statement is permitted, including data definition, data manipulation, and commit statements. </p>
		 * Required
		 * Max length: 65536
		 * Min length: 0
		 */
		sqlStatements: FormControl<string | null | undefined>,
	}
	export function CreateExecuteSqlPostBodyFormGroup() {
		return new FormGroup<ExecuteSqlPostBodyFormProperties>({
			awsSecretStoreArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(11)]),
			database: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(0)]),
			dbClusterOrInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(11)]),
			schema: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(0)]),
			sqlStatements: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(0)]),
		});

	}

	export interface ExecuteStatementPostBody {

		/** <p>A value that indicates whether to continue running the statement after the call times out. By default, the statement stops running when the call times out.</p> <important> <p>For DDL statements, we recommend continuing to run the statement after the call times out. When a DDL statement terminates before it is finished running, it can result in errors and possibly corrupted data structures.</p> </important> */
		continueAfterTimeout?: boolean | null;

		/**
		 * The name of the database.
		 * Max length: 64
		 * Min length: 0
		 */
		database?: string | null;

		/** A value that indicates whether to include metadata in the results. */
		includeResultMetadata?: boolean | null;

		/** <p>The parameters for the SQL statement.</p> <note> <p>Array parameters are not supported.</p> </note> */
		parameters?: Array<SqlParameter>;

		/**
		 * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		resourceArn: string;

		/** Options that control how the result set is returned. */
		resultSetOptions?: ExecuteStatementPostBodyResultSetOptions;

		/**
		 * The name of the database schema.
		 * Max length: 64
		 * Min length: 0
		 */
		schema?: string | null;

		/**
		 * The name or ARN of the secret that enables access to the DB cluster.
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		secretArn: string;

		/**
		 * The SQL statement to run.
		 * Required
		 * Max length: 65536
		 * Min length: 0
		 */
		sql: string;

		/**
		 * <p>The identifier of a transaction that was started by using the <code>BeginTransaction</code> operation. Specify the transaction ID of the transaction that you want to include the SQL statement in.</p> <p>If the SQL statement is not part of a transaction, don't set this parameter.</p>
		 * Max length: 192
		 * Min length: 0
		 */
		transactionId?: string | null;
	}
	export interface ExecuteStatementPostBodyFormProperties {

		/** <p>A value that indicates whether to continue running the statement after the call times out. By default, the statement stops running when the call times out.</p> <important> <p>For DDL statements, we recommend continuing to run the statement after the call times out. When a DDL statement terminates before it is finished running, it can result in errors and possibly corrupted data structures.</p> </important> */
		continueAfterTimeout: FormControl<boolean | null | undefined>,

		/**
		 * The name of the database.
		 * Max length: 64
		 * Min length: 0
		 */
		database: FormControl<string | null | undefined>,

		/** A value that indicates whether to include metadata in the results. */
		includeResultMetadata: FormControl<boolean | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		resourceArn: FormControl<string | null | undefined>,

		/**
		 * The name of the database schema.
		 * Max length: 64
		 * Min length: 0
		 */
		schema: FormControl<string | null | undefined>,

		/**
		 * The name or ARN of the secret that enables access to the DB cluster.
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		secretArn: FormControl<string | null | undefined>,

		/**
		 * The SQL statement to run.
		 * Required
		 * Max length: 65536
		 * Min length: 0
		 */
		sql: FormControl<string | null | undefined>,

		/**
		 * <p>The identifier of a transaction that was started by using the <code>BeginTransaction</code> operation. Specify the transaction ID of the transaction that you want to include the SQL statement in.</p> <p>If the SQL statement is not part of a transaction, don't set this parameter.</p>
		 * Max length: 192
		 * Min length: 0
		 */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateExecuteStatementPostBodyFormGroup() {
		return new FormGroup<ExecuteStatementPostBodyFormProperties>({
			continueAfterTimeout: new FormControl<boolean | null | undefined>(undefined),
			database: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(0)]),
			includeResultMetadata: new FormControl<boolean | null | undefined>(undefined),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(11)]),
			schema: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(0)]),
			secretArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(11)]),
			sql: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(0)]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(192), Validators.minLength(0)]),
		});

	}

	export interface ExecuteStatementPostBodyResultSetOptions {
		decimalReturnType?: DecimalReturnType | null;
	}
	export interface ExecuteStatementPostBodyResultSetOptionsFormProperties {
		decimalReturnType: FormControl<DecimalReturnType | null | undefined>,
	}
	export function CreateExecuteStatementPostBodyResultSetOptionsFormGroup() {
		return new FormGroup<ExecuteStatementPostBodyResultSetOptionsFormProperties>({
			decimalReturnType: new FormControl<DecimalReturnType | null | undefined>(undefined),
		});

	}

	export interface RollbackTransactionPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		resourceArn: string;

		/**
		 * The name or ARN of the secret that enables access to the DB cluster.
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		secretArn: string;

		/**
		 * The identifier of the transaction to roll back.
		 * Required
		 * Max length: 192
		 * Min length: 0
		 */
		transactionId: string;
	}
	export interface RollbackTransactionPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		resourceArn: FormControl<string | null | undefined>,

		/**
		 * The name or ARN of the secret that enables access to the DB cluster.
		 * Required
		 * Max length: 100
		 * Min length: 11
		 */
		secretArn: FormControl<string | null | undefined>,

		/**
		 * The identifier of the transaction to roll back.
		 * Required
		 * Max length: 192
		 * Min length: 0
		 */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateRollbackTransactionPostBodyFormGroup() {
		return new FormGroup<RollbackTransactionPostBodyFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(11)]),
			secretArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(11)]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(192), Validators.minLength(0)]),
		});

	}

}

