import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchGetNamedQueryOutput {
		NamedQueries?: Array<NamedQuery>;
		UnprocessedNamedQueryIds?: Array<UnprocessedNamedQueryId>;
	}
	export interface BatchGetNamedQueryOutputFormProperties {
	}
	export function CreateBatchGetNamedQueryOutputFormGroup() {
		return new FormGroup<BatchGetNamedQueryOutputFormProperties>({
		});

	}


	/** A query, where <code>QueryString</code> is the list of SQL query statements that comprise the query. */
	export interface NamedQuery {
		Name: string;
		Description?: string | null;
		Database: string;
		QueryString: string;
		NamedQueryId?: string | null;
		WorkGroup?: string | null;
	}

	/** A query, where <code>QueryString</code> is the list of SQL query statements that comprise the query. */
	export interface NamedQueryFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Database: FormControl<string | null | undefined>,
		QueryString: FormControl<string | null | undefined>,
		NamedQueryId: FormControl<string | null | undefined>,
		WorkGroup: FormControl<string | null | undefined>,
	}
	export function CreateNamedQueryFormGroup() {
		return new FormGroup<NamedQueryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Database: new FormControl<string | null | undefined>(undefined),
			QueryString: new FormControl<string | null | undefined>(undefined),
			NamedQueryId: new FormControl<string | null | undefined>(undefined),
			WorkGroup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a named query ID that could not be processed. */
	export interface UnprocessedNamedQueryId {
		NamedQueryId?: string | null;

		/**
		 * The error code returned when the query execution failed to process, or when the processing request for the named query failed.
		 * Max length: 256
		 * Min length: 1
		 */
		ErrorCode?: string | null;
		ErrorMessage?: string | null;
	}

	/** Information about a named query ID that could not be processed. */
	export interface UnprocessedNamedQueryIdFormProperties {
		NamedQueryId: FormControl<string | null | undefined>,

		/**
		 * The error code returned when the query execution failed to process, or when the processing request for the named query failed.
		 * Max length: 256
		 * Min length: 1
		 */
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateUnprocessedNamedQueryIdFormGroup() {
		return new FormGroup<UnprocessedNamedQueryIdFormProperties>({
			NamedQueryId: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchGetNamedQueryInput {
		NamedQueryIds: Array<string>;
	}
	export interface BatchGetNamedQueryInputFormProperties {
	}
	export function CreateBatchGetNamedQueryInputFormGroup() {
		return new FormGroup<BatchGetNamedQueryInputFormProperties>({
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

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}

	export interface BatchGetQueryExecutionOutput {
		QueryExecutions?: Array<QueryExecution>;
		UnprocessedQueryExecutionIds?: Array<UnprocessedQueryExecutionId>;
	}
	export interface BatchGetQueryExecutionOutputFormProperties {
	}
	export function CreateBatchGetQueryExecutionOutputFormGroup() {
		return new FormGroup<BatchGetQueryExecutionOutputFormProperties>({
		});

	}


	/** Information about a single instance of a query execution. */
	export interface QueryExecution {
		QueryExecutionId?: string | null;
		Query?: string | null;
		StatementType?: QueryExecutionStatementType | null;

		/** The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings. */
		ResultConfiguration?: ResultConfiguration;

		/** The database and data catalog context in which the query execution occurs. */
		QueryExecutionContext?: QueryExecutionContext;

		/** The completion date, current state, submission time, and state change reason (if applicable) for the query execution. */
		Status?: QueryExecutionStatus;

		/** The amount of data scanned during the query execution and the amount of time that it took to execute, and the type of statement that was run. */
		Statistics?: QueryExecutionStatistics;
		WorkGroup?: string | null;
	}

	/** Information about a single instance of a query execution. */
	export interface QueryExecutionFormProperties {
		QueryExecutionId: FormControl<string | null | undefined>,
		Query: FormControl<string | null | undefined>,
		StatementType: FormControl<QueryExecutionStatementType | null | undefined>,
		WorkGroup: FormControl<string | null | undefined>,
	}
	export function CreateQueryExecutionFormGroup() {
		return new FormGroup<QueryExecutionFormProperties>({
			QueryExecutionId: new FormControl<string | null | undefined>(undefined),
			Query: new FormControl<string | null | undefined>(undefined),
			StatementType: new FormControl<QueryExecutionStatementType | null | undefined>(undefined),
			WorkGroup: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum QueryExecutionStatementType { DDL = 0, DML = 1, UTILITY = 2 }


	/** The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings. */
	export interface ResultConfiguration {
		OutputLocation?: string | null;

		/** If query results are encrypted in Amazon S3, indicates the encryption option used (for example, <code>SSE-KMS</code> or <code>CSE-KMS</code>) and key information. */
		EncryptionConfiguration?: EncryptionConfiguration;
	}

	/** The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings. */
	export interface ResultConfigurationFormProperties {
		OutputLocation: FormControl<string | null | undefined>,
	}
	export function CreateResultConfigurationFormGroup() {
		return new FormGroup<ResultConfigurationFormProperties>({
			OutputLocation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** If query results are encrypted in Amazon S3, indicates the encryption option used (for example, <code>SSE-KMS</code> or <code>CSE-KMS</code>) and key information. */
	export interface EncryptionConfiguration {
		EncryptionOption: EncryptionConfigurationEncryptionOption;
		KmsKey?: string | null;
	}

	/** If query results are encrypted in Amazon S3, indicates the encryption option used (for example, <code>SSE-KMS</code> or <code>CSE-KMS</code>) and key information. */
	export interface EncryptionConfigurationFormProperties {
		EncryptionOption: FormControl<EncryptionConfigurationEncryptionOption | null | undefined>,
		KmsKey: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionConfigurationFormGroup() {
		return new FormGroup<EncryptionConfigurationFormProperties>({
			EncryptionOption: new FormControl<EncryptionConfigurationEncryptionOption | null | undefined>(undefined),
			KmsKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EncryptionConfigurationEncryptionOption { SSE_S3 = 0, SSE_KMS = 1, CSE_KMS = 2 }


	/** The database and data catalog context in which the query execution occurs. */
	export interface QueryExecutionContext {
		Database?: string | null;
		Catalog?: string | null;
	}

	/** The database and data catalog context in which the query execution occurs. */
	export interface QueryExecutionContextFormProperties {
		Database: FormControl<string | null | undefined>,
		Catalog: FormControl<string | null | undefined>,
	}
	export function CreateQueryExecutionContextFormGroup() {
		return new FormGroup<QueryExecutionContextFormProperties>({
			Database: new FormControl<string | null | undefined>(undefined),
			Catalog: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The completion date, current state, submission time, and state change reason (if applicable) for the query execution. */
	export interface QueryExecutionStatus {
		State?: QueryExecutionStatusState | null;
		StateChangeReason?: string | null;
		SubmissionDateTime?: Date | null;
		CompletionDateTime?: Date | null;
	}

	/** The completion date, current state, submission time, and state change reason (if applicable) for the query execution. */
	export interface QueryExecutionStatusFormProperties {
		State: FormControl<QueryExecutionStatusState | null | undefined>,
		StateChangeReason: FormControl<string | null | undefined>,
		SubmissionDateTime: FormControl<Date | null | undefined>,
		CompletionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateQueryExecutionStatusFormGroup() {
		return new FormGroup<QueryExecutionStatusFormProperties>({
			State: new FormControl<QueryExecutionStatusState | null | undefined>(undefined),
			StateChangeReason: new FormControl<string | null | undefined>(undefined),
			SubmissionDateTime: new FormControl<Date | null | undefined>(undefined),
			CompletionDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum QueryExecutionStatusState { QUEUED = 0, RUNNING = 1, SUCCEEDED = 2, FAILED = 3, CANCELLED = 4 }


	/** The amount of data scanned during the query execution and the amount of time that it took to execute, and the type of statement that was run. */
	export interface QueryExecutionStatistics {
		EngineExecutionTimeInMillis?: number | null;
		DataScannedInBytes?: number | null;
		DataManifestLocation?: string | null;
		TotalExecutionTimeInMillis?: number | null;
		QueryQueueTimeInMillis?: number | null;
		QueryPlanningTimeInMillis?: number | null;
		ServiceProcessingTimeInMillis?: number | null;
	}

	/** The amount of data scanned during the query execution and the amount of time that it took to execute, and the type of statement that was run. */
	export interface QueryExecutionStatisticsFormProperties {
		EngineExecutionTimeInMillis: FormControl<number | null | undefined>,
		DataScannedInBytes: FormControl<number | null | undefined>,
		DataManifestLocation: FormControl<string | null | undefined>,
		TotalExecutionTimeInMillis: FormControl<number | null | undefined>,
		QueryQueueTimeInMillis: FormControl<number | null | undefined>,
		QueryPlanningTimeInMillis: FormControl<number | null | undefined>,
		ServiceProcessingTimeInMillis: FormControl<number | null | undefined>,
	}
	export function CreateQueryExecutionStatisticsFormGroup() {
		return new FormGroup<QueryExecutionStatisticsFormProperties>({
			EngineExecutionTimeInMillis: new FormControl<number | null | undefined>(undefined),
			DataScannedInBytes: new FormControl<number | null | undefined>(undefined),
			DataManifestLocation: new FormControl<string | null | undefined>(undefined),
			TotalExecutionTimeInMillis: new FormControl<number | null | undefined>(undefined),
			QueryQueueTimeInMillis: new FormControl<number | null | undefined>(undefined),
			QueryPlanningTimeInMillis: new FormControl<number | null | undefined>(undefined),
			ServiceProcessingTimeInMillis: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes a query execution that failed to process. */
	export interface UnprocessedQueryExecutionId {
		QueryExecutionId?: string | null;

		/**
		 * The error code returned when the query execution failed to process, or when the processing request for the named query failed.
		 * Max length: 256
		 * Min length: 1
		 */
		ErrorCode?: string | null;
		ErrorMessage?: string | null;
	}

	/** Describes a query execution that failed to process. */
	export interface UnprocessedQueryExecutionIdFormProperties {
		QueryExecutionId: FormControl<string | null | undefined>,

		/**
		 * The error code returned when the query execution failed to process, or when the processing request for the named query failed.
		 * Max length: 256
		 * Min length: 1
		 */
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateUnprocessedQueryExecutionIdFormGroup() {
		return new FormGroup<UnprocessedQueryExecutionIdFormProperties>({
			QueryExecutionId: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchGetQueryExecutionInput {
		QueryExecutionIds: Array<string>;
	}
	export interface BatchGetQueryExecutionInputFormProperties {
	}
	export function CreateBatchGetQueryExecutionInputFormGroup() {
		return new FormGroup<BatchGetQueryExecutionInputFormProperties>({
		});

	}

	export interface CreateDataCatalogOutput {
	}
	export interface CreateDataCatalogOutputFormProperties {
	}
	export function CreateCreateDataCatalogOutputFormGroup() {
		return new FormGroup<CreateDataCatalogOutputFormProperties>({
		});

	}

	export interface CreateDataCatalogInput {
		Name: string;
		Type: CreateDataCatalogInputType;
		Description?: string | null;
		Parameters?: ParametersMap;
		Tags?: Array<Tag>;
	}
	export interface CreateDataCatalogInputFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<CreateDataCatalogInputType | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataCatalogInputFormGroup() {
		return new FormGroup<CreateDataCatalogInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<CreateDataCatalogInputType | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateDataCatalogInputType { LAMBDA = 0, GLUE = 1, HIVE = 2 }

	export interface ParametersMap {
	}
	export interface ParametersMapFormProperties {
	}
	export function CreateParametersMapFormGroup() {
		return new FormGroup<ParametersMapFormProperties>({
		});

	}


	/** A label that you assign to a resource. In Athena, a resource can be a workgroup or data catalog. Each tag consists of a key and an optional value, both of which you define. For example, you can use tags to categorize Athena workgroups or data catalogs by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter workgroups or data catalogs in your account. For best practices, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one tag, separate them by commas.  */
	export interface Tag {
		Key?: string | null;
		Value?: string | null;
	}

	/** A label that you assign to a resource. In Athena, a resource can be a workgroup or data catalog. Each tag consists of a key and an optional value, both of which you define. For example, you can use tags to categorize Athena workgroups or data catalogs by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter workgroups or data catalogs in your account. For best practices, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one tag, separate them by commas.  */
	export interface TagFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNamedQueryOutput {
		NamedQueryId?: string | null;
	}
	export interface CreateNamedQueryOutputFormProperties {
		NamedQueryId: FormControl<string | null | undefined>,
	}
	export function CreateCreateNamedQueryOutputFormGroup() {
		return new FormGroup<CreateNamedQueryOutputFormProperties>({
			NamedQueryId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNamedQueryInput {
		Name: string;
		Description?: string | null;
		Database: string;
		QueryString: string;
		ClientRequestToken?: string | null;
		WorkGroup?: string | null;
	}
	export interface CreateNamedQueryInputFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Database: FormControl<string | null | undefined>,
		QueryString: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		WorkGroup: FormControl<string | null | undefined>,
	}
	export function CreateCreateNamedQueryInputFormGroup() {
		return new FormGroup<CreateNamedQueryInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Database: new FormControl<string | null | undefined>(undefined),
			QueryString: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			WorkGroup: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWorkGroupOutput {
	}
	export interface CreateWorkGroupOutputFormProperties {
	}
	export function CreateCreateWorkGroupOutputFormGroup() {
		return new FormGroup<CreateWorkGroupOutputFormProperties>({
		});

	}

	export interface CreateWorkGroupInput {
		Name: string;

		/** The configuration of the workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup and whether workgroup settings override query settings, and the data usage limits for the amount of data scanned per query or per workgroup. The workgroup settings override is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>. */
		Configuration?: WorkGroupConfiguration;
		Description?: string | null;
		Tags?: Array<Tag>;
	}
	export interface CreateWorkGroupInputFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkGroupInputFormGroup() {
		return new FormGroup<CreateWorkGroupInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration of the workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup and whether workgroup settings override query settings, and the data usage limits for the amount of data scanned per query or per workgroup. The workgroup settings override is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.  */
	export interface WorkGroupConfiguration {

		/** The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings. */
		ResultConfiguration?: ResultConfiguration;
		EnforceWorkGroupConfiguration?: boolean | null;
		PublishCloudWatchMetricsEnabled?: boolean | null;
		BytesScannedCutoffPerQuery?: number | null;
		RequesterPaysEnabled?: boolean | null;
	}

	/** The configuration of the workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup and whether workgroup settings override query settings, and the data usage limits for the amount of data scanned per query or per workgroup. The workgroup settings override is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.  */
	export interface WorkGroupConfigurationFormProperties {
		EnforceWorkGroupConfiguration: FormControl<boolean | null | undefined>,
		PublishCloudWatchMetricsEnabled: FormControl<boolean | null | undefined>,
		BytesScannedCutoffPerQuery: FormControl<number | null | undefined>,
		RequesterPaysEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkGroupConfigurationFormGroup() {
		return new FormGroup<WorkGroupConfigurationFormProperties>({
			EnforceWorkGroupConfiguration: new FormControl<boolean | null | undefined>(undefined),
			PublishCloudWatchMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
			BytesScannedCutoffPerQuery: new FormControl<number | null | undefined>(undefined),
			RequesterPaysEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteDataCatalogOutput {
	}
	export interface DeleteDataCatalogOutputFormProperties {
	}
	export function CreateDeleteDataCatalogOutputFormGroup() {
		return new FormGroup<DeleteDataCatalogOutputFormProperties>({
		});

	}

	export interface DeleteDataCatalogInput {
		Name: string;
	}
	export interface DeleteDataCatalogInputFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDataCatalogInputFormGroup() {
		return new FormGroup<DeleteDataCatalogInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteNamedQueryOutput {
	}
	export interface DeleteNamedQueryOutputFormProperties {
	}
	export function CreateDeleteNamedQueryOutputFormGroup() {
		return new FormGroup<DeleteNamedQueryOutputFormProperties>({
		});

	}

	export interface DeleteNamedQueryInput {
		NamedQueryId: string;
	}
	export interface DeleteNamedQueryInputFormProperties {
		NamedQueryId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteNamedQueryInputFormGroup() {
		return new FormGroup<DeleteNamedQueryInputFormProperties>({
			NamedQueryId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteWorkGroupOutput {
	}
	export interface DeleteWorkGroupOutputFormProperties {
	}
	export function CreateDeleteWorkGroupOutputFormGroup() {
		return new FormGroup<DeleteWorkGroupOutputFormProperties>({
		});

	}

	export interface DeleteWorkGroupInput {
		WorkGroup: string;
		RecursiveDeleteOption?: boolean | null;
	}
	export interface DeleteWorkGroupInputFormProperties {
		WorkGroup: FormControl<string | null | undefined>,
		RecursiveDeleteOption: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteWorkGroupInputFormGroup() {
		return new FormGroup<DeleteWorkGroupInputFormProperties>({
			WorkGroup: new FormControl<string | null | undefined>(undefined),
			RecursiveDeleteOption: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetDataCatalogOutput {

		/** Contains information about a data catalog in an AWS account. */
		DataCatalog?: DataCatalog;
	}
	export interface GetDataCatalogOutputFormProperties {
	}
	export function CreateGetDataCatalogOutputFormGroup() {
		return new FormGroup<GetDataCatalogOutputFormProperties>({
		});

	}


	/** Contains information about a data catalog in an AWS account. */
	export interface DataCatalog {
		Name: string;
		Description?: string | null;
		Type: CreateDataCatalogInputType;
		Parameters?: ParametersMap;
	}

	/** Contains information about a data catalog in an AWS account. */
	export interface DataCatalogFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Type: FormControl<CreateDataCatalogInputType | null | undefined>,
	}
	export function CreateDataCatalogFormGroup() {
		return new FormGroup<DataCatalogFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<CreateDataCatalogInputType | null | undefined>(undefined),
		});

	}

	export interface GetDataCatalogInput {
		Name: string;
	}
	export interface GetDataCatalogInputFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetDataCatalogInputFormGroup() {
		return new FormGroup<GetDataCatalogInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDatabaseOutput {

		/** Contains metadata information for a database in a data catalog. */
		Database?: Database;
	}
	export interface GetDatabaseOutputFormProperties {
	}
	export function CreateGetDatabaseOutputFormGroup() {
		return new FormGroup<GetDatabaseOutputFormProperties>({
		});

	}


	/** Contains metadata information for a database in a data catalog. */
	export interface Database {
		Name: string;
		Description?: string | null;
		Parameters?: ParametersMap;
	}

	/** Contains metadata information for a database in a data catalog. */
	export interface DatabaseFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseFormGroup() {
		return new FormGroup<DatabaseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDatabaseInput {
		CatalogName: string;
		DatabaseName: string;
	}
	export interface GetDatabaseInputFormProperties {
		CatalogName: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
	}
	export function CreateGetDatabaseInputFormGroup() {
		return new FormGroup<GetDatabaseInputFormProperties>({
			CatalogName: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MetadataException {
	}
	export interface MetadataExceptionFormProperties {
	}
	export function CreateMetadataExceptionFormGroup() {
		return new FormGroup<MetadataExceptionFormProperties>({
		});

	}

	export interface GetNamedQueryOutput {

		/** A query, where <code>QueryString</code> is the list of SQL query statements that comprise the query. */
		NamedQuery?: NamedQuery;
	}
	export interface GetNamedQueryOutputFormProperties {
	}
	export function CreateGetNamedQueryOutputFormGroup() {
		return new FormGroup<GetNamedQueryOutputFormProperties>({
		});

	}

	export interface GetNamedQueryInput {
		NamedQueryId: string;
	}
	export interface GetNamedQueryInputFormProperties {
		NamedQueryId: FormControl<string | null | undefined>,
	}
	export function CreateGetNamedQueryInputFormGroup() {
		return new FormGroup<GetNamedQueryInputFormProperties>({
			NamedQueryId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetQueryExecutionOutput {

		/** Information about a single instance of a query execution. */
		QueryExecution?: QueryExecution;
	}
	export interface GetQueryExecutionOutputFormProperties {
	}
	export function CreateGetQueryExecutionOutputFormGroup() {
		return new FormGroup<GetQueryExecutionOutputFormProperties>({
		});

	}

	export interface GetQueryExecutionInput {
		QueryExecutionId: string;
	}
	export interface GetQueryExecutionInputFormProperties {
		QueryExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateGetQueryExecutionInputFormGroup() {
		return new FormGroup<GetQueryExecutionInputFormProperties>({
			QueryExecutionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetQueryResultsOutput {
		UpdateCount?: number | null;

		/** The metadata and rows that comprise a query result set. The metadata describes the column structure and data types. To return a <code>ResultSet</code> object, use <a>GetQueryResults</a>. */
		ResultSet?: ResultSet;
		NextToken?: string | null;
	}
	export interface GetQueryResultsOutputFormProperties {
		UpdateCount: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetQueryResultsOutputFormGroup() {
		return new FormGroup<GetQueryResultsOutputFormProperties>({
			UpdateCount: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata and rows that comprise a query result set. The metadata describes the column structure and data types. To return a <code>ResultSet</code> object, use <a>GetQueryResults</a>. */
	export interface ResultSet {
		Rows?: Array<Row>;

		/** The metadata that describes the column structure and data types of a table of query results. To return a <code>ResultSetMetadata</code> object, use <a>GetQueryResults</a>. */
		ResultSetMetadata?: ResultSetMetadata;
	}

	/** The metadata and rows that comprise a query result set. The metadata describes the column structure and data types. To return a <code>ResultSet</code> object, use <a>GetQueryResults</a>. */
	export interface ResultSetFormProperties {
	}
	export function CreateResultSetFormGroup() {
		return new FormGroup<ResultSetFormProperties>({
		});

	}


	/** The rows that comprise a query result table. */
	export interface Row {
		Data?: Array<Datum>;
	}

	/** The rows that comprise a query result table. */
	export interface RowFormProperties {
	}
	export function CreateRowFormGroup() {
		return new FormGroup<RowFormProperties>({
		});

	}


	/** A piece of data (a field in the table). */
	export interface Datum {
		VarCharValue?: string | null;
	}

	/** A piece of data (a field in the table). */
	export interface DatumFormProperties {
		VarCharValue: FormControl<string | null | undefined>,
	}
	export function CreateDatumFormGroup() {
		return new FormGroup<DatumFormProperties>({
			VarCharValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata that describes the column structure and data types of a table of query results. To return a <code>ResultSetMetadata</code> object, use <a>GetQueryResults</a>. */
	export interface ResultSetMetadata {
		ColumnInfo?: Array<ColumnInfo>;
	}

	/** The metadata that describes the column structure and data types of a table of query results. To return a <code>ResultSetMetadata</code> object, use <a>GetQueryResults</a>. */
	export interface ResultSetMetadataFormProperties {
	}
	export function CreateResultSetMetadataFormGroup() {
		return new FormGroup<ResultSetMetadataFormProperties>({
		});

	}


	/** Information about the columns in a query execution result. */
	export interface ColumnInfo {
		CatalogName?: string | null;
		SchemaName?: string | null;
		TableName?: string | null;
		Name: string;
		Label?: string | null;
		Type: string;
		Precision?: number | null;
		Scale?: number | null;
		Nullable?: ColumnInfoNullable | null;
		CaseSensitive?: boolean | null;
	}

	/** Information about the columns in a query execution result. */
	export interface ColumnInfoFormProperties {
		CatalogName: FormControl<string | null | undefined>,
		SchemaName: FormControl<string | null | undefined>,
		TableName: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Label: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Precision: FormControl<number | null | undefined>,
		Scale: FormControl<number | null | undefined>,
		Nullable: FormControl<ColumnInfoNullable | null | undefined>,
		CaseSensitive: FormControl<boolean | null | undefined>,
	}
	export function CreateColumnInfoFormGroup() {
		return new FormGroup<ColumnInfoFormProperties>({
			CatalogName: new FormControl<string | null | undefined>(undefined),
			SchemaName: new FormControl<string | null | undefined>(undefined),
			TableName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Label: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Precision: new FormControl<number | null | undefined>(undefined),
			Scale: new FormControl<number | null | undefined>(undefined),
			Nullable: new FormControl<ColumnInfoNullable | null | undefined>(undefined),
			CaseSensitive: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ColumnInfoNullable { NOT_NULL = 0, NULLABLE = 1, UNKNOWN = 2 }

	export interface GetQueryResultsInput {
		QueryExecutionId: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface GetQueryResultsInputFormProperties {
		QueryExecutionId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetQueryResultsInputFormGroup() {
		return new FormGroup<GetQueryResultsInputFormProperties>({
			QueryExecutionId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTableMetadataOutput {

		/** Contains metadata for a table. */
		TableMetadata?: TableMetadata;
	}
	export interface GetTableMetadataOutputFormProperties {
	}
	export function CreateGetTableMetadataOutputFormGroup() {
		return new FormGroup<GetTableMetadataOutputFormProperties>({
		});

	}


	/** Contains metadata for a table. */
	export interface TableMetadata {
		Name: string;
		CreateTime?: Date | null;
		LastAccessTime?: Date | null;
		TableType?: string | null;
		Columns?: Array<Column>;
		PartitionKeys?: Array<Column>;
		Parameters?: ParametersMap;
	}

	/** Contains metadata for a table. */
	export interface TableMetadataFormProperties {
		Name: FormControl<string | null | undefined>,
		CreateTime: FormControl<Date | null | undefined>,
		LastAccessTime: FormControl<Date | null | undefined>,
		TableType: FormControl<string | null | undefined>,
	}
	export function CreateTableMetadataFormGroup() {
		return new FormGroup<TableMetadataFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			CreateTime: new FormControl<Date | null | undefined>(undefined),
			LastAccessTime: new FormControl<Date | null | undefined>(undefined),
			TableType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains metadata for a column in a table. */
	export interface Column {
		Name: string;
		Type?: string | null;
		Comment?: string | null;
	}

	/** Contains metadata for a column in a table. */
	export interface ColumnFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Comment: FormControl<string | null | undefined>,
	}
	export function CreateColumnFormGroup() {
		return new FormGroup<ColumnFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTableMetadataInput {
		CatalogName: string;
		DatabaseName: string;
		TableName: string;
	}
	export interface GetTableMetadataInputFormProperties {
		CatalogName: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateGetTableMetadataInputFormGroup() {
		return new FormGroup<GetTableMetadataInputFormProperties>({
			CatalogName: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			TableName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetWorkGroupOutput {

		/** A workgroup, which contains a name, description, creation time, state, and other configuration, listed under <a>WorkGroup$Configuration</a>. Each workgroup enables you to isolate queries for you or your group of users from other queries in the same account, to configure the query results location and the encryption configuration (known as workgroup settings), to enable sending query metrics to Amazon CloudWatch, and to establish per-query data usage control limits for all queries in a workgroup. The workgroup settings override is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>. */
		WorkGroup?: WorkGroup;
	}
	export interface GetWorkGroupOutputFormProperties {
	}
	export function CreateGetWorkGroupOutputFormGroup() {
		return new FormGroup<GetWorkGroupOutputFormProperties>({
		});

	}


	/** A workgroup, which contains a name, description, creation time, state, and other configuration, listed under <a>WorkGroup$Configuration</a>. Each workgroup enables you to isolate queries for you or your group of users from other queries in the same account, to configure the query results location and the encryption configuration (known as workgroup settings), to enable sending query metrics to Amazon CloudWatch, and to establish per-query data usage control limits for all queries in a workgroup. The workgroup settings override is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>. */
	export interface WorkGroup {
		Name: string;
		State?: WorkGroupState | null;

		/** The configuration of the workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup and whether workgroup settings override query settings, and the data usage limits for the amount of data scanned per query or per workgroup. The workgroup settings override is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>. */
		Configuration?: WorkGroupConfiguration;
		Description?: string | null;
		CreationTime?: Date | null;
	}

	/** A workgroup, which contains a name, description, creation time, state, and other configuration, listed under <a>WorkGroup$Configuration</a>. Each workgroup enables you to isolate queries for you or your group of users from other queries in the same account, to configure the query results location and the encryption configuration (known as workgroup settings), to enable sending query metrics to Amazon CloudWatch, and to establish per-query data usage control limits for all queries in a workgroup. The workgroup settings override is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>. */
	export interface WorkGroupFormProperties {
		Name: FormControl<string | null | undefined>,
		State: FormControl<WorkGroupState | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateWorkGroupFormGroup() {
		return new FormGroup<WorkGroupFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<WorkGroupState | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum WorkGroupState { ENABLED = 0, DISABLED = 1 }

	export interface GetWorkGroupInput {
		WorkGroup: string;
	}
	export interface GetWorkGroupInputFormProperties {
		WorkGroup: FormControl<string | null | undefined>,
	}
	export function CreateGetWorkGroupInputFormGroup() {
		return new FormGroup<GetWorkGroupInputFormProperties>({
			WorkGroup: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDataCatalogsOutput {
		DataCatalogsSummary?: Array<DataCatalogSummary>;
		NextToken?: string | null;
	}
	export interface ListDataCatalogsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataCatalogsOutputFormGroup() {
		return new FormGroup<ListDataCatalogsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary information for the data catalog, which includes its name and type. */
	export interface DataCatalogSummary {
		CatalogName?: string | null;
		Type?: CreateDataCatalogInputType | null;
	}

	/** The summary information for the data catalog, which includes its name and type. */
	export interface DataCatalogSummaryFormProperties {
		CatalogName: FormControl<string | null | undefined>,
		Type: FormControl<CreateDataCatalogInputType | null | undefined>,
	}
	export function CreateDataCatalogSummaryFormGroup() {
		return new FormGroup<DataCatalogSummaryFormProperties>({
			CatalogName: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<CreateDataCatalogInputType | null | undefined>(undefined),
		});

	}

	export interface ListDataCatalogsInput {
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListDataCatalogsInputFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDataCatalogsInputFormGroup() {
		return new FormGroup<ListDataCatalogsInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListDatabasesOutput {
		DatabaseList?: Array<Database>;
		NextToken?: string | null;
	}
	export interface ListDatabasesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatabasesOutputFormGroup() {
		return new FormGroup<ListDatabasesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDatabasesInput {
		CatalogName: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListDatabasesInputFormProperties {
		CatalogName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDatabasesInputFormGroup() {
		return new FormGroup<ListDatabasesInputFormProperties>({
			CatalogName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListNamedQueriesOutput {
		NamedQueryIds?: Array<string>;
		NextToken?: string | null;
	}
	export interface ListNamedQueriesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNamedQueriesOutputFormGroup() {
		return new FormGroup<ListNamedQueriesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListNamedQueriesInput {
		NextToken?: string | null;
		MaxResults?: number | null;
		WorkGroup?: string | null;
	}
	export interface ListNamedQueriesInputFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		WorkGroup: FormControl<string | null | undefined>,
	}
	export function CreateListNamedQueriesInputFormGroup() {
		return new FormGroup<ListNamedQueriesInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			WorkGroup: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListQueryExecutionsOutput {
		QueryExecutionIds?: Array<string>;
		NextToken?: string | null;
	}
	export interface ListQueryExecutionsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListQueryExecutionsOutputFormGroup() {
		return new FormGroup<ListQueryExecutionsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListQueryExecutionsInput {
		NextToken?: string | null;
		MaxResults?: number | null;
		WorkGroup?: string | null;
	}
	export interface ListQueryExecutionsInputFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		WorkGroup: FormControl<string | null | undefined>,
	}
	export function CreateListQueryExecutionsInputFormGroup() {
		return new FormGroup<ListQueryExecutionsInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			WorkGroup: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTableMetadataOutput {
		TableMetadataList?: Array<TableMetadata>;
		NextToken?: string | null;
	}
	export interface ListTableMetadataOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTableMetadataOutputFormGroup() {
		return new FormGroup<ListTableMetadataOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTableMetadataInput {
		CatalogName: string;
		DatabaseName: string;
		Expression?: string | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListTableMetadataInputFormProperties {
		CatalogName: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		Expression: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTableMetadataInputFormGroup() {
		return new FormGroup<ListTableMetadataInputFormProperties>({
			CatalogName: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			Expression: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceOutput {
		Tags?: Array<Tag>;
		NextToken?: string | null;
	}
	export interface ListTagsForResourceOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceInput {
		ResourceARN: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListTagsForResourceInputFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
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

	export interface ListWorkGroupsOutput {
		WorkGroups?: Array<WorkGroupSummary>;
		NextToken?: string | null;
	}
	export interface ListWorkGroupsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkGroupsOutputFormGroup() {
		return new FormGroup<ListWorkGroupsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary information for the workgroup, which includes its name, state, description, and the date and time it was created. */
	export interface WorkGroupSummary {
		Name?: string | null;
		State?: WorkGroupState | null;
		Description?: string | null;
		CreationTime?: Date | null;
	}

	/** The summary information for the workgroup, which includes its name, state, description, and the date and time it was created. */
	export interface WorkGroupSummaryFormProperties {
		Name: FormControl<string | null | undefined>,
		State: FormControl<WorkGroupState | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateWorkGroupSummaryFormGroup() {
		return new FormGroup<WorkGroupSummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<WorkGroupState | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListWorkGroupsInput {
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListWorkGroupsInputFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListWorkGroupsInputFormGroup() {
		return new FormGroup<ListWorkGroupsInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StartQueryExecutionOutput {
		QueryExecutionId?: string | null;
	}
	export interface StartQueryExecutionOutputFormProperties {
		QueryExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateStartQueryExecutionOutputFormGroup() {
		return new FormGroup<StartQueryExecutionOutputFormProperties>({
			QueryExecutionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartQueryExecutionInput {
		QueryString: string;
		ClientRequestToken?: string | null;

		/** The database and data catalog context in which the query execution occurs. */
		QueryExecutionContext?: QueryExecutionContext;

		/** The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings. */
		ResultConfiguration?: ResultConfiguration;
		WorkGroup?: string | null;
	}
	export interface StartQueryExecutionInputFormProperties {
		QueryString: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		WorkGroup: FormControl<string | null | undefined>,
	}
	export function CreateStartQueryExecutionInputFormGroup() {
		return new FormGroup<StartQueryExecutionInputFormProperties>({
			QueryString: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			WorkGroup: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
		});

	}

	export interface StopQueryExecutionOutput {
	}
	export interface StopQueryExecutionOutputFormProperties {
	}
	export function CreateStopQueryExecutionOutputFormGroup() {
		return new FormGroup<StopQueryExecutionOutputFormProperties>({
		});

	}

	export interface StopQueryExecutionInput {
		QueryExecutionId: string;
	}
	export interface StopQueryExecutionInputFormProperties {
		QueryExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateStopQueryExecutionInputFormGroup() {
		return new FormGroup<StopQueryExecutionInputFormProperties>({
			QueryExecutionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceOutput {
	}
	export interface TagResourceOutputFormProperties {
	}
	export function CreateTagResourceOutputFormGroup() {
		return new FormGroup<TagResourceOutputFormProperties>({
		});

	}

	export interface TagResourceInput {
		ResourceARN: string;
		Tags: Array<Tag>;
	}
	export interface TagResourceInputFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UntagResourceOutput {
	}
	export interface UntagResourceOutputFormProperties {
	}
	export function CreateUntagResourceOutputFormGroup() {
		return new FormGroup<UntagResourceOutputFormProperties>({
		});

	}

	export interface UntagResourceInput {
		ResourceARN: string;
		TagKeys: Array<string>;
	}
	export interface UntagResourceInputFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDataCatalogOutput {
	}
	export interface UpdateDataCatalogOutputFormProperties {
	}
	export function CreateUpdateDataCatalogOutputFormGroup() {
		return new FormGroup<UpdateDataCatalogOutputFormProperties>({
		});

	}

	export interface UpdateDataCatalogInput {
		Name: string;
		Type: CreateDataCatalogInputType;
		Description?: string | null;
		Parameters?: ParametersMap;
	}
	export interface UpdateDataCatalogInputFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<CreateDataCatalogInputType | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataCatalogInputFormGroup() {
		return new FormGroup<UpdateDataCatalogInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<CreateDataCatalogInputType | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateWorkGroupOutput {
	}
	export interface UpdateWorkGroupOutputFormProperties {
	}
	export function CreateUpdateWorkGroupOutputFormGroup() {
		return new FormGroup<UpdateWorkGroupOutputFormProperties>({
		});

	}

	export interface UpdateWorkGroupInput {
		WorkGroup: string;
		Description?: string | null;

		/** The configuration information that will be updated for this workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, whether the workgroup settings override the client-side settings, and the data usage limit for the amount of bytes scanned per query, if it is specified. */
		ConfigurationUpdates?: WorkGroupConfigurationUpdates;
		State?: WorkGroupState | null;
	}
	export interface UpdateWorkGroupInputFormProperties {
		WorkGroup: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		State: FormControl<WorkGroupState | null | undefined>,
	}
	export function CreateUpdateWorkGroupInputFormGroup() {
		return new FormGroup<UpdateWorkGroupInputFormProperties>({
			WorkGroup: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<WorkGroupState | null | undefined>(undefined),
		});

	}


	/** The configuration information that will be updated for this workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, whether the workgroup settings override the client-side settings, and the data usage limit for the amount of bytes scanned per query, if it is specified. */
	export interface WorkGroupConfigurationUpdates {
		EnforceWorkGroupConfiguration?: boolean | null;

		/** The information about the updates in the query results, such as output location and encryption configuration for the query results. */
		ResultConfigurationUpdates?: ResultConfigurationUpdates;
		PublishCloudWatchMetricsEnabled?: boolean | null;
		BytesScannedCutoffPerQuery?: number | null;
		RemoveBytesScannedCutoffPerQuery?: boolean | null;
		RequesterPaysEnabled?: boolean | null;
	}

	/** The configuration information that will be updated for this workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, whether the workgroup settings override the client-side settings, and the data usage limit for the amount of bytes scanned per query, if it is specified. */
	export interface WorkGroupConfigurationUpdatesFormProperties {
		EnforceWorkGroupConfiguration: FormControl<boolean | null | undefined>,
		PublishCloudWatchMetricsEnabled: FormControl<boolean | null | undefined>,
		BytesScannedCutoffPerQuery: FormControl<number | null | undefined>,
		RemoveBytesScannedCutoffPerQuery: FormControl<boolean | null | undefined>,
		RequesterPaysEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkGroupConfigurationUpdatesFormGroup() {
		return new FormGroup<WorkGroupConfigurationUpdatesFormProperties>({
			EnforceWorkGroupConfiguration: new FormControl<boolean | null | undefined>(undefined),
			PublishCloudWatchMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
			BytesScannedCutoffPerQuery: new FormControl<number | null | undefined>(undefined),
			RemoveBytesScannedCutoffPerQuery: new FormControl<boolean | null | undefined>(undefined),
			RequesterPaysEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The information about the updates in the query results, such as output location and encryption configuration for the query results. */
	export interface ResultConfigurationUpdates {
		OutputLocation?: string | null;
		RemoveOutputLocation?: boolean | null;

		/** If query results are encrypted in Amazon S3, indicates the encryption option used (for example, <code>SSE-KMS</code> or <code>CSE-KMS</code>) and key information. */
		EncryptionConfiguration?: EncryptionConfiguration;
		RemoveEncryptionConfiguration?: boolean | null;
	}

	/** The information about the updates in the query results, such as output location and encryption configuration for the query results. */
	export interface ResultConfigurationUpdatesFormProperties {
		OutputLocation: FormControl<string | null | undefined>,
		RemoveOutputLocation: FormControl<boolean | null | undefined>,
		RemoveEncryptionConfiguration: FormControl<boolean | null | undefined>,
	}
	export function CreateResultConfigurationUpdatesFormGroup() {
		return new FormGroup<ResultConfigurationUpdatesFormProperties>({
			OutputLocation: new FormControl<string | null | undefined>(undefined),
			RemoveOutputLocation: new FormControl<boolean | null | undefined>(undefined),
			RemoveEncryptionConfiguration: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ColumnNullable { NOT_NULL = 0, NULLABLE = 1, UNKNOWN = 2 }

	export enum DataCatalogType { LAMBDA = 0, GLUE = 1, HIVE = 2 }

	export enum EncryptionOption { SSE_S3 = 0, SSE_KMS = 1, CSE_KMS = 2 }

	export enum StatementType { DDL = 0, DML = 1, UTILITY = 2 }

	export enum QueryExecutionState { QUEUED = 0, RUNNING = 1, SUCCEEDED = 2, FAILED = 3, CANCELLED = 4 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the details of a single named query or a list of up to 50 queries, which you provide as an array of query ID strings. Requires you to have access to the workgroup in which the queries were saved. Use <a>ListNamedQueriesInput</a> to get the list of named query IDs in the specified workgroup. If information could not be retrieved for a submitted query ID, information about the query ID submitted is listed under <a>UnprocessedNamedQueryId</a>. Named queries differ from executed queries. Use <a>BatchGetQueryExecutionInput</a> to get details about each unique query execution, and <a>ListQueryExecutionsInput</a> to get a list of query execution IDs.
		 * Post #X-Amz-Target=AmazonAthena.BatchGetNamedQuery
		 * @return {BatchGetNamedQueryOutput} Success
		 */
		BatchGetNamedQuery(requestBody: BatchGetNamedQueryInput): Observable<BatchGetNamedQueryOutput> {
			return this.http.post<BatchGetNamedQueryOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.BatchGetNamedQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the details of a single query execution or a list of up to 50 query executions, which you provide as an array of query execution ID strings. Requires you to have access to the workgroup in which the queries ran. To get a list of query execution IDs, use <a>ListQueryExecutionsInput$WorkGroup</a>. Query executions differ from named (saved) queries. Use <a>BatchGetNamedQueryInput</a> to get details about named queries.
		 * Post #X-Amz-Target=AmazonAthena.BatchGetQueryExecution
		 * @return {BatchGetQueryExecutionOutput} Success
		 */
		BatchGetQueryExecution(requestBody: BatchGetQueryExecutionInput): Observable<BatchGetQueryExecutionOutput> {
			return this.http.post<BatchGetQueryExecutionOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.BatchGetQueryExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates (registers) a data catalog with the specified name and properties. Catalogs created are visible to all users of the same AWS account.
		 * Post #X-Amz-Target=AmazonAthena.CreateDataCatalog
		 * @return {CreateDataCatalogOutput} Success
		 */
		CreateDataCatalog(requestBody: CreateDataCatalogInput): Observable<CreateDataCatalogOutput> {
			return this.http.post<CreateDataCatalogOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.CreateDataCatalog', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a named query in the specified workgroup. Requires that you have access to the workgroup.</p> <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonAthena.CreateNamedQuery
		 * @return {CreateNamedQueryOutput} Success
		 */
		CreateNamedQuery(requestBody: CreateNamedQueryInput): Observable<CreateNamedQueryOutput> {
			return this.http.post<CreateNamedQueryOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.CreateNamedQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a workgroup with the specified name.
		 * Post #X-Amz-Target=AmazonAthena.CreateWorkGroup
		 * @return {CreateWorkGroupOutput} Success
		 */
		CreateWorkGroup(requestBody: CreateWorkGroupInput): Observable<CreateWorkGroupOutput> {
			return this.http.post<CreateWorkGroupOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.CreateWorkGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a data catalog.
		 * Post #X-Amz-Target=AmazonAthena.DeleteDataCatalog
		 * @return {DeleteDataCatalogOutput} Success
		 */
		DeleteDataCatalog(requestBody: DeleteDataCatalogInput): Observable<DeleteDataCatalogOutput> {
			return this.http.post<DeleteDataCatalogOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.DeleteDataCatalog', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the named query if you have access to the workgroup in which the query was saved.</p> <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonAthena.DeleteNamedQuery
		 * @return {DeleteNamedQueryOutput} Success
		 */
		DeleteNamedQuery(requestBody: DeleteNamedQueryInput): Observable<DeleteNamedQueryOutput> {
			return this.http.post<DeleteNamedQueryOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.DeleteNamedQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the workgroup with the specified name. The primary workgroup cannot be deleted.
		 * Post #X-Amz-Target=AmazonAthena.DeleteWorkGroup
		 * @return {DeleteWorkGroupOutput} Success
		 */
		DeleteWorkGroup(requestBody: DeleteWorkGroupInput): Observable<DeleteWorkGroupOutput> {
			return this.http.post<DeleteWorkGroupOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.DeleteWorkGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the specified data catalog.
		 * Post #X-Amz-Target=AmazonAthena.GetDataCatalog
		 * @return {GetDataCatalogOutput} Success
		 */
		GetDataCatalog(requestBody: GetDataCatalogInput): Observable<GetDataCatalogOutput> {
			return this.http.post<GetDataCatalogOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.GetDataCatalog', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a database object for the specfied database and data catalog.
		 * Post #X-Amz-Target=AmazonAthena.GetDatabase
		 * @return {GetDatabaseOutput} Success
		 */
		GetDatabase(requestBody: GetDatabaseInput): Observable<GetDatabaseOutput> {
			return this.http.post<GetDatabaseOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.GetDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a single query. Requires that you have access to the workgroup in which the query was saved.
		 * Post #X-Amz-Target=AmazonAthena.GetNamedQuery
		 * @return {GetNamedQueryOutput} Success
		 */
		GetNamedQuery(requestBody: GetNamedQueryInput): Observable<GetNamedQueryOutput> {
			return this.http.post<GetNamedQueryOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.GetNamedQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a single execution of a query if you have access to the workgroup in which the query ran. Each time a query executes, information about the query execution is saved with a unique ID.
		 * Post #X-Amz-Target=AmazonAthena.GetQueryExecution
		 * @return {GetQueryExecutionOutput} Success
		 */
		GetQueryExecution(requestBody: GetQueryExecutionInput): Observable<GetQueryExecutionOutput> {
			return this.http.post<GetQueryExecutionOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.GetQueryExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Streams the results of a single query execution specified by <code>QueryExecutionId</code> from the Athena query results location in Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Query Results</a> in the <i>Amazon Athena User Guide</i>. This request does not execute the query but returns results. Use <a>StartQueryExecution</a> to run a query.</p> <p>To stream query results successfully, the IAM principal with permission to call <code>GetQueryResults</code> also must have permissions to the Amazon S3 <code>GetObject</code> action for the Athena query results location.</p> <important> <p>IAM principals with permission to the Amazon S3 <code>GetObject</code> action for the query results location are able to retrieve query results from Amazon S3 even if permission to the <code>GetQueryResults</code> action is denied. To restrict user or role access, ensure that Amazon S3 permissions to the Athena query location are denied.</p> </important>
		 * Post #X-Amz-Target=AmazonAthena.GetQueryResults
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetQueryResultsOutput} Success
		 */
		GetQueryResults(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetQueryResultsInput): Observable<GetQueryResultsOutput> {
			return this.http.post<GetQueryResultsOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.GetQueryResults?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns table metadata for the specified catalog, database, and table.
		 * Post #X-Amz-Target=AmazonAthena.GetTableMetadata
		 * @return {GetTableMetadataOutput} Success
		 */
		GetTableMetadata(requestBody: GetTableMetadataInput): Observable<GetTableMetadataOutput> {
			return this.http.post<GetTableMetadataOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.GetTableMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the workgroup with the specified name.
		 * Post #X-Amz-Target=AmazonAthena.GetWorkGroup
		 * @return {GetWorkGroupOutput} Success
		 */
		GetWorkGroup(requestBody: GetWorkGroupInput): Observable<GetWorkGroupOutput> {
			return this.http.post<GetWorkGroupOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.GetWorkGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the data catalogs in the current AWS account.
		 * Post #X-Amz-Target=AmazonAthena.ListDataCatalogs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDataCatalogsOutput} Success
		 */
		ListDataCatalogs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDataCatalogsInput): Observable<ListDataCatalogsOutput> {
			return this.http.post<ListDataCatalogsOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.ListDataCatalogs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the databases in the specified data catalog.
		 * Post #X-Amz-Target=AmazonAthena.ListDatabases
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDatabasesOutput} Success
		 */
		ListDatabases(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDatabasesInput): Observable<ListDatabasesOutput> {
			return this.http.post<ListDatabasesOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.ListDatabases?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides a list of available query IDs only for queries saved in the specified workgroup. Requires that you have access to the specified workgroup. If a workgroup is not specified, lists the saved queries for the primary workgroup.</p> <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonAthena.ListNamedQueries
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListNamedQueriesOutput} Success
		 */
		ListNamedQueries(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListNamedQueriesInput): Observable<ListNamedQueriesOutput> {
			return this.http.post<ListNamedQueriesOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.ListNamedQueries?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides a list of available query execution IDs for the queries in the specified workgroup. If a workgroup is not specified, returns a list of query execution IDs for the primary workgroup. Requires you to have access to the workgroup in which the queries ran.</p> <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonAthena.ListQueryExecutions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListQueryExecutionsOutput} Success
		 */
		ListQueryExecutions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListQueryExecutionsInput): Observable<ListQueryExecutionsOutput> {
			return this.http.post<ListQueryExecutionsOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.ListQueryExecutions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the metadata for the tables in the specified data catalog database.
		 * Post #X-Amz-Target=AmazonAthena.ListTableMetadata
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTableMetadataOutput} Success
		 */
		ListTableMetadata(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTableMetadataInput): Observable<ListTableMetadataOutput> {
			return this.http.post<ListTableMetadataOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.ListTableMetadata?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags associated with an Athena workgroup or data catalog resource.
		 * Post #X-Amz-Target=AmazonAthena.ListTagsForResource
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTagsForResourceInput): Observable<ListTagsForResourceOutput> {
			return this.http.post<ListTagsForResourceOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.ListTagsForResource?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists available workgroups for the account.
		 * Post #X-Amz-Target=AmazonAthena.ListWorkGroups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListWorkGroupsOutput} Success
		 */
		ListWorkGroups(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListWorkGroupsInput): Observable<ListWorkGroupsOutput> {
			return this.http.post<ListWorkGroupsOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.ListWorkGroups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Runs the SQL query statements contained in the <code>Query</code>. Requires you to have access to the workgroup in which the query ran. Running queries against an external catalog requires <a>GetDataCatalog</a> permission to the catalog. For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.
		 * Post #X-Amz-Target=AmazonAthena.StartQueryExecution
		 * @return {StartQueryExecutionOutput} Success
		 */
		StartQueryExecution(requestBody: StartQueryExecutionInput): Observable<StartQueryExecutionOutput> {
			return this.http.post<StartQueryExecutionOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.StartQueryExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops a query execution. Requires you to have access to the workgroup in which the query ran.</p> <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonAthena.StopQueryExecution
		 * @return {StopQueryExecutionOutput} Success
		 */
		StopQueryExecution(requestBody: StopQueryExecutionInput): Observable<StopQueryExecutionOutput> {
			return this.http.post<StopQueryExecutionOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.StopQueryExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds one or more tags to an Athena resource. A tag is a label that you assign to a resource. In Athena, a resource can be a workgroup or data catalog. Each tag consists of a key and an optional value, both of which you define. For example, you can use tags to categorize Athena workgroups or data catalogs by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter workgroups or data catalogs in your account. For best practices, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one tag, separate them by commas.
		 * Post #X-Amz-Target=AmazonAthena.TagResource
		 * @return {TagResourceOutput} Success
		 */
		TagResource(requestBody: TagResourceInput): Observable<TagResourceOutput> {
			return this.http.post<TagResourceOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from a data catalog or workgroup resource.
		 * Post #X-Amz-Target=AmazonAthena.UntagResource
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(requestBody: UntagResourceInput): Observable<UntagResourceOutput> {
			return this.http.post<UntagResourceOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the data catalog that has the specified name.
		 * Post #X-Amz-Target=AmazonAthena.UpdateDataCatalog
		 * @return {UpdateDataCatalogOutput} Success
		 */
		UpdateDataCatalog(requestBody: UpdateDataCatalogInput): Observable<UpdateDataCatalogOutput> {
			return this.http.post<UpdateDataCatalogOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.UpdateDataCatalog', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the workgroup with the specified name. The workgroup's name cannot be changed.
		 * Post #X-Amz-Target=AmazonAthena.UpdateWorkGroup
		 * @return {UpdateWorkGroupOutput} Success
		 */
		UpdateWorkGroup(requestBody: UpdateWorkGroupInput): Observable<UpdateWorkGroupOutput> {
			return this.http.post<UpdateWorkGroupOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.UpdateWorkGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum BatchGetNamedQueryX_Amz_Target { AmazonAthena_BatchGetNamedQuery = 0 }

	export enum BatchGetQueryExecutionX_Amz_Target { AmazonAthena_BatchGetQueryExecution = 0 }

	export enum CreateDataCatalogX_Amz_Target { AmazonAthena_CreateDataCatalog = 0 }

	export enum CreateNamedQueryX_Amz_Target { AmazonAthena_CreateNamedQuery = 0 }

	export enum CreateWorkGroupX_Amz_Target { AmazonAthena_CreateWorkGroup = 0 }

	export enum DeleteDataCatalogX_Amz_Target { AmazonAthena_DeleteDataCatalog = 0 }

	export enum DeleteNamedQueryX_Amz_Target { AmazonAthena_DeleteNamedQuery = 0 }

	export enum DeleteWorkGroupX_Amz_Target { AmazonAthena_DeleteWorkGroup = 0 }

	export enum GetDataCatalogX_Amz_Target { AmazonAthena_GetDataCatalog = 0 }

	export enum GetDatabaseX_Amz_Target { AmazonAthena_GetDatabase = 0 }

	export enum GetNamedQueryX_Amz_Target { AmazonAthena_GetNamedQuery = 0 }

	export enum GetQueryExecutionX_Amz_Target { AmazonAthena_GetQueryExecution = 0 }

	export enum GetQueryResultsX_Amz_Target { AmazonAthena_GetQueryResults = 0 }

	export enum GetTableMetadataX_Amz_Target { AmazonAthena_GetTableMetadata = 0 }

	export enum GetWorkGroupX_Amz_Target { AmazonAthena_GetWorkGroup = 0 }

	export enum ListDataCatalogsX_Amz_Target { AmazonAthena_ListDataCatalogs = 0 }

	export enum ListDatabasesX_Amz_Target { AmazonAthena_ListDatabases = 0 }

	export enum ListNamedQueriesX_Amz_Target { AmazonAthena_ListNamedQueries = 0 }

	export enum ListQueryExecutionsX_Amz_Target { AmazonAthena_ListQueryExecutions = 0 }

	export enum ListTableMetadataX_Amz_Target { AmazonAthena_ListTableMetadata = 0 }

	export enum ListTagsForResourceX_Amz_Target { AmazonAthena_ListTagsForResource = 0 }

	export enum ListWorkGroupsX_Amz_Target { AmazonAthena_ListWorkGroups = 0 }

	export enum StartQueryExecutionX_Amz_Target { AmazonAthena_StartQueryExecution = 0 }

	export enum StopQueryExecutionX_Amz_Target { AmazonAthena_StopQueryExecution = 0 }

	export enum TagResourceX_Amz_Target { AmazonAthena_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { AmazonAthena_UntagResource = 0 }

	export enum UpdateDataCatalogX_Amz_Target { AmazonAthena_UpdateDataCatalog = 0 }

	export enum UpdateWorkGroupX_Amz_Target { AmazonAthena_UpdateWorkGroup = 0 }

}

