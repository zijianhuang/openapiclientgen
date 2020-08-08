import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** The response elements represent the output of a SQL statement over an array of data. */
	export interface BatchExecuteStatementResponse {
		updateResults?: Array<UpdateResult>;
	}


	/** The response elements represent the results of an update. */
	export interface UpdateResult {
		generatedFields?: Array<Field>;
	}


	/** Contains a value. */
	export interface Field {

		/** Contains an array. */
		arrayValue?: ArrayValue;
		blobValue?: string;
		booleanValue?: boolean;
		doubleValue?: number;
		isNull?: boolean;
		longValue?: number;
		stringValue?: string;
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


	/** A parameter used in a SQL statement. */
	export interface SqlParameter {
		name?: string;
		typeHint?: SqlParameterTypeHint;

		/** Contains a value. */
		value?: Field;
	}

	export enum SqlParameterTypeHint { DATE = 0, DECIMAL = 1, TIME = 2, TIMESTAMP = 3 }

	export interface BadRequestException {
	}

	export interface StatementTimeoutException {
	}

	export interface InternalServerErrorException {
	}

	export interface ForbiddenException {
	}

	export interface ServiceUnavailableError {
	}


	/** The response elements represent the output of a request to start a SQL transaction. */
	export interface BeginTransactionResponse {
		transactionId?: string;
	}


	/** The response elements represent the output of a commit transaction request. */
	export interface CommitTransactionResponse {
		transactionStatus?: string;
	}

	export interface NotFoundException {
	}


	/** The response elements represent the output of a request to run one or more SQL statements. */
	export interface ExecuteSqlResponse {
		sqlStatementResults?: Array<SqlStatementResult>;
	}


	/** <p>The result of a SQL statement.</p> <pre><code> &lt;important&gt; &lt;p&gt;This data type is deprecated.&lt;/p&gt; &lt;/important&gt; </code></pre> */
	export interface SqlStatementResult {
		numberOfRecordsUpdated?: number;

		/** The result set returned by a SQL statement. */
		resultFrame?: ResultFrame;
	}


	/** The result set returned by a SQL statement. */
	export interface ResultFrame {
		records?: Array<Record>;

		/** The metadata of the result set returned by a SQL statement. */
		resultSetMetadata?: ResultSetMetadata;
	}


	/** A record returned by a call. */
	export interface Record {
		values?: Array<Value>;
	}


	/** <p>Contains the value of a column.</p> <pre><code> &lt;important&gt; &lt;p&gt;This data type is deprecated.&lt;/p&gt; &lt;/important&gt; </code></pre> */
	export interface Value {
		arrayValues?: Array<Value>;
		bigIntValue?: number;
		bitValue?: boolean;
		blobValue?: string;
		doubleValue?: number;
		intValue?: number;
		isNull?: boolean;
		realValue?: number;
		stringValue?: string;

		/** A structure value returned by a call. */
		structValue?: StructValue;
	}


	/** A structure value returned by a call. */
	export interface StructValue {
		attributes?: Array<Value>;
	}


	/** The metadata of the result set returned by a SQL statement. */
	export interface ResultSetMetadata {
		columnCount?: number;
		columnMetadata?: Array<ColumnMetadata>;
	}


	/** Contains the metadata for a column. */
	export interface ColumnMetadata {
		arrayBaseColumnType?: number;
		isAutoIncrement?: boolean;
		isCaseSensitive?: boolean;
		isCurrency?: boolean;
		isSigned?: boolean;
		label?: string;
		name?: string;
		nullable?: number;
		precision?: number;
		scale?: number;
		schemaName?: string;
		tableName?: string;
		type?: number;
		typeName?: string;
	}


	/** The response elements represent the output of a request to run a SQL statement against a database. */
	export interface ExecuteStatementResponse {
		columnMetadata?: Array<ColumnMetadata>;
		generatedFields?: Array<Field>;
		numberOfRecordsUpdated?: number;
		records?: Array<Array<Field>>;
	}

	export enum DecimalReturnType { DOUBLE_OR_LONG = 0, STRING = 1 }


	/** The response elements represent the output of a request to perform a rollback of a transaction. */
	export interface RollbackTransactionResponse {
		transactionStatus?: string;
	}


	/** The request parameters represent the input of a SQL statement over an array of data. */
	export interface BatchExecuteStatementRequest {
		database?: string;
		parameterSets?: Array<Array<SqlParameter>>;
		resourceArn: string;
		schema?: string;
		secretArn: string;
		sql: string;
		transactionId?: string;
	}


	/** The request parameters represent the input of a request to start a SQL transaction. */
	export interface BeginTransactionRequest {
		database?: string;
		resourceArn: string;
		schema?: string;
		secretArn: string;
	}


	/** The request parameters represent the input of a commit transaction request. */
	export interface CommitTransactionRequest {
		resourceArn: string;
		secretArn: string;
		transactionId: string;
	}


	/** The request parameters represent the input of a request to run one or more SQL statements. */
	export interface ExecuteSqlRequest {
		awsSecretStoreArn: string;
		database?: string;
		dbClusterOrInstanceArn: string;
		schema?: string;
		sqlStatements: string;
	}


	/** Options that control how the result set is returned. */
	export interface ResultSetOptions {
		decimalReturnType?: DecimalReturnType;
	}


	/** The request parameters represent the input of a request to run a SQL statement against a database. */
	export interface ExecuteStatementRequest {
		continueAfterTimeout?: boolean;
		database?: string;
		includeResultMetadata?: boolean;
		parameters?: Array<SqlParameter>;
		resourceArn: string;

		/** Options that control how the result set is returned. */
		resultSetOptions?: ResultSetOptions;
		schema?: string;
		secretArn: string;
		sql: string;
		transactionId?: string;
	}


	/** The request parameters represent the input of a request to perform a rollback of a transaction. */
	export interface RollbackTransactionRequest {
		resourceArn: string;
		secretArn: string;
		transactionId: string;
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
		database?: string;

		/** <p>The parameter set for the batch operation.</p> <p>The SQL statement is executed as many times as the number of parameter sets provided. To execute a SQL statement with no parameters, use one of the following options:</p> <ul> <li> <p>Specify one or more empty parameter sets.</p> </li> <li> <p>Use the <code>ExecuteStatement</code> operation instead of the <code>BatchExecuteStatement</code> operation.</p> </li> </ul> <note> <p>Array parameters are not supported.</p> </note> */
		parameterSets?: Array<Array<SqlParameter>>;

		/**
		 * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
		 * Max length: 100
		 * Min length: 11
		 */
		resourceArn: string;

		/**
		 * The name of the database schema.
		 * Max length: 64
		 * Min length: 0
		 */
		schema?: string;

		/**
		 * The name or ARN of the secret that enables access to the DB cluster.
		 * Max length: 100
		 * Min length: 11
		 */
		secretArn: string;

		/**
		 * The SQL statement to run.
		 * Max length: 65536
		 * Min length: 0
		 */
		sql: string;

		/**
		 * <p>The identifier of a transaction that was started by using the <code>BeginTransaction</code> operation. Specify the transaction ID of the transaction that you want to include the SQL statement in.</p> <p>If the SQL statement is not part of a transaction, don't set this parameter.</p>
		 * Max length: 192
		 * Min length: 0
		 */
		transactionId?: string;
	}

	export interface BeginTransactionPostBody {

		/**
		 * The name of the database.
		 * Max length: 64
		 * Min length: 0
		 */
		database?: string;

		/**
		 * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
		 * Max length: 100
		 * Min length: 11
		 */
		resourceArn: string;

		/**
		 * The name of the database schema.
		 * Max length: 64
		 * Min length: 0
		 */
		schema?: string;

		/**
		 * The name or ARN of the secret that enables access to the DB cluster.
		 * Max length: 100
		 * Min length: 11
		 */
		secretArn: string;
	}

	export interface CommitTransactionPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
		 * Max length: 100
		 * Min length: 11
		 */
		resourceArn: string;

		/**
		 * The name or ARN of the secret that enables access to the DB cluster.
		 * Max length: 100
		 * Min length: 11
		 */
		secretArn: string;

		/**
		 * The identifier of the transaction to end and commit.
		 * Max length: 192
		 * Min length: 0
		 */
		transactionId: string;
	}

	export interface ExecuteSqlPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the secret that enables access to the DB cluster.
		 * Max length: 100
		 * Min length: 11
		 */
		awsSecretStoreArn: string;

		/**
		 * The name of the database.
		 * Max length: 64
		 * Min length: 0
		 */
		database?: string;

		/**
		 * The ARN of the Aurora Serverless DB cluster.
		 * Max length: 100
		 * Min length: 11
		 */
		dbClusterOrInstanceArn: string;

		/**
		 * The name of the database schema.
		 * Max length: 64
		 * Min length: 0
		 */
		schema?: string;

		/**
		 * <p>One or more SQL statements to run on the DB cluster.</p> <p>You can separate SQL statements from each other with a semicolon (;). Any valid SQL statement is permitted, including data definition, data manipulation, and commit statements. </p>
		 * Max length: 65536
		 * Min length: 0
		 */
		sqlStatements: string;
	}

	export interface ExecuteStatementPostBody {

		/** <p>A value that indicates whether to continue running the statement after the call times out. By default, the statement stops running when the call times out.</p> <important> <p>For DDL statements, we recommend continuing to run the statement after the call times out. When a DDL statement terminates before it is finished running, it can result in errors and possibly corrupted data structures.</p> </important> */
		continueAfterTimeout?: boolean;

		/**
		 * The name of the database.
		 * Max length: 64
		 * Min length: 0
		 */
		database?: string;

		/** A value that indicates whether to include metadata in the results. */
		includeResultMetadata?: boolean;

		/** <p>The parameters for the SQL statement.</p> <note> <p>Array parameters are not supported.</p> </note> */
		parameters?: Array<SqlParameter>;

		/**
		 * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
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
		schema?: string;

		/**
		 * The name or ARN of the secret that enables access to the DB cluster.
		 * Max length: 100
		 * Min length: 11
		 */
		secretArn: string;

		/**
		 * The SQL statement to run.
		 * Max length: 65536
		 * Min length: 0
		 */
		sql: string;

		/**
		 * <p>The identifier of a transaction that was started by using the <code>BeginTransaction</code> operation. Specify the transaction ID of the transaction that you want to include the SQL statement in.</p> <p>If the SQL statement is not part of a transaction, don't set this parameter.</p>
		 * Max length: 192
		 * Min length: 0
		 */
		transactionId?: string;
	}

	export interface ExecuteStatementPostBodyResultSetOptions {
		decimalReturnType?: DecimalReturnType;
	}

	export interface RollbackTransactionPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
		 * Max length: 100
		 * Min length: 11
		 */
		resourceArn: string;

		/**
		 * The name or ARN of the secret that enables access to the DB cluster.
		 * Max length: 100
		 * Min length: 11
		 */
		secretArn: string;

		/**
		 * The identifier of the transaction to roll back.
		 * Max length: 192
		 * Min length: 0
		 */
		transactionId: string;
	}

}

