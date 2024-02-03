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


	/** A query, where <code>QueryString</code> contains the SQL statements that make up the query. */
	export interface NamedQuery {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		Database: string;

		/** Required */
		QueryString: string;
		NamedQueryId?: string;
		WorkGroup?: string;
	}

	/** A query, where <code>QueryString</code> contains the SQL statements that make up the query. */
	export interface NamedQueryFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,

		/** Required */
		QueryString: FormControl<string | null | undefined>,
		NamedQueryId: FormControl<string | null | undefined>,
		WorkGroup: FormControl<string | null | undefined>,
	}
	export function CreateNamedQueryFormGroup() {
		return new FormGroup<NamedQueryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QueryString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NamedQueryId: new FormControl<string | null | undefined>(undefined),
			WorkGroup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a named query ID that could not be processed. */
	export interface UnprocessedNamedQueryId {
		NamedQueryId?: string;
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	/** Information about a named query ID that could not be processed. */
	export interface UnprocessedNamedQueryIdFormProperties {
		NamedQueryId: FormControl<string | null | undefined>,
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


	/** Contains an array of named query IDs. */
	export interface BatchGetNamedQueryInput {

		/** Required */
		NamedQueryIds: Array<string>;
	}

	/** Contains an array of named query IDs. */
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

	export interface BatchGetPreparedStatementOutput {
		PreparedStatements?: Array<PreparedStatement>;
		UnprocessedPreparedStatementNames?: Array<UnprocessedPreparedStatementName>;
	}
	export interface BatchGetPreparedStatementOutputFormProperties {
	}
	export function CreateBatchGetPreparedStatementOutputFormGroup() {
		return new FormGroup<BatchGetPreparedStatementOutputFormProperties>({
		});

	}


	/** A prepared SQL statement for use with Athena. */
	export interface PreparedStatement {
		StatementName?: string;
		QueryStatement?: string;
		WorkGroupName?: string;
		Description?: string;
		LastModifiedTime?: Date;
	}

	/** A prepared SQL statement for use with Athena. */
	export interface PreparedStatementFormProperties {
		StatementName: FormControl<string | null | undefined>,
		QueryStatement: FormControl<string | null | undefined>,
		WorkGroupName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreatePreparedStatementFormGroup() {
		return new FormGroup<PreparedStatementFormProperties>({
			StatementName: new FormControl<string | null | undefined>(undefined),
			QueryStatement: new FormControl<string | null | undefined>(undefined),
			WorkGroupName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The name of a prepared statement that could not be returned. */
	export interface UnprocessedPreparedStatementName {
		StatementName?: string;
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	/** The name of a prepared statement that could not be returned. */
	export interface UnprocessedPreparedStatementNameFormProperties {
		StatementName: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateUnprocessedPreparedStatementNameFormGroup() {
		return new FormGroup<UnprocessedPreparedStatementNameFormProperties>({
			StatementName: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchGetPreparedStatementInput {

		/** Required */
		PreparedStatementNames: Array<string>;

		/** Required */
		WorkGroup: string;
	}
	export interface BatchGetPreparedStatementInputFormProperties {

		/** Required */
		WorkGroup: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetPreparedStatementInputFormGroup() {
		return new FormGroup<BatchGetPreparedStatementInputFormProperties>({
			WorkGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		QueryExecutionId?: string;
		Query?: string;
		StatementType?: StatementType;
		ResultConfiguration?: ResultConfiguration;
		ResultReuseConfiguration?: ResultReuseConfiguration;
		QueryExecutionContext?: QueryExecutionContext;
		Status?: QueryExecutionStatus;
		Statistics?: QueryExecutionStatistics;
		WorkGroup?: string;
		EngineVersion?: EngineVersion;
		ExecutionParameters?: Array<string>;
		SubstatementType?: string;
	}

	/** Information about a single instance of a query execution. */
	export interface QueryExecutionFormProperties {
		QueryExecutionId: FormControl<string | null | undefined>,
		Query: FormControl<string | null | undefined>,
		StatementType: FormControl<StatementType | null | undefined>,
		WorkGroup: FormControl<string | null | undefined>,
		SubstatementType: FormControl<string | null | undefined>,
	}
	export function CreateQueryExecutionFormGroup() {
		return new FormGroup<QueryExecutionFormProperties>({
			QueryExecutionId: new FormControl<string | null | undefined>(undefined),
			Query: new FormControl<string | null | undefined>(undefined),
			StatementType: new FormControl<StatementType | null | undefined>(undefined),
			WorkGroup: new FormControl<string | null | undefined>(undefined),
			SubstatementType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StatementType { DDL = 'DDL', DML = 'DML', UTILITY = 'UTILITY' }


	/** The location in Amazon S3 where query and calculation results are stored and the encryption option, if any, used for query and calculation results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings. */
	export interface ResultConfiguration {
		OutputLocation?: string;
		EncryptionConfiguration?: EncryptionConfiguration;
		ExpectedBucketOwner?: string;
		AclConfiguration?: AclConfiguration;
	}

	/** The location in Amazon S3 where query and calculation results are stored and the encryption option, if any, used for query and calculation results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings. */
	export interface ResultConfigurationFormProperties {
		OutputLocation: FormControl<string | null | undefined>,
		ExpectedBucketOwner: FormControl<string | null | undefined>,
	}
	export function CreateResultConfigurationFormGroup() {
		return new FormGroup<ResultConfigurationFormProperties>({
			OutputLocation: new FormControl<string | null | undefined>(undefined),
			ExpectedBucketOwner: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** If query and calculation results are encrypted in Amazon S3, indicates the encryption option used (for example, <code>SSE_KMS</code> or <code>CSE_KMS</code>) and key information. */
	export interface EncryptionConfiguration {

		/** Required */
		EncryptionOption: EncryptionOption;
		KmsKey?: string;
	}

	/** If query and calculation results are encrypted in Amazon S3, indicates the encryption option used (for example, <code>SSE_KMS</code> or <code>CSE_KMS</code>) and key information. */
	export interface EncryptionConfigurationFormProperties {

		/** Required */
		EncryptionOption: FormControl<EncryptionOption | null | undefined>,
		KmsKey: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionConfigurationFormGroup() {
		return new FormGroup<EncryptionConfigurationFormProperties>({
			EncryptionOption: new FormControl<EncryptionOption | null | undefined>(undefined, [Validators.required]),
			KmsKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EncryptionOption { SSE_S3 = 'SSE_S3', SSE_KMS = 'SSE_KMS', CSE_KMS = 'CSE_KMS' }


	/** Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results. When Athena stores query results in Amazon S3, the canned ACL is set with the <code>x-amz-acl</code> request header. For more information about S3 Object Ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html#object-ownership-overview">Object Ownership settings</a> in the <i>Amazon S3 User Guide</i>. */
	export interface AclConfiguration {

		/** Required */
		S3AclOption: S3AclOption;
	}

	/** Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results. When Athena stores query results in Amazon S3, the canned ACL is set with the <code>x-amz-acl</code> request header. For more information about S3 Object Ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html#object-ownership-overview">Object Ownership settings</a> in the <i>Amazon S3 User Guide</i>. */
	export interface AclConfigurationFormProperties {

		/** Required */
		S3AclOption: FormControl<S3AclOption | null | undefined>,
	}
	export function CreateAclConfigurationFormGroup() {
		return new FormGroup<AclConfigurationFormProperties>({
			S3AclOption: new FormControl<S3AclOption | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum S3AclOption { BUCKET_OWNER_FULL_CONTROL = 'BUCKET_OWNER_FULL_CONTROL' }


	/** Specifies the query result reuse behavior for the query. */
	export interface ResultReuseConfiguration {
		ResultReuseByAgeConfiguration?: ResultReuseByAgeConfiguration;
	}

	/** Specifies the query result reuse behavior for the query. */
	export interface ResultReuseConfigurationFormProperties {
	}
	export function CreateResultReuseConfigurationFormGroup() {
		return new FormGroup<ResultReuseConfigurationFormProperties>({
		});

	}


	/** Specifies whether previous query results are reused, and if so, their maximum age. */
	export interface ResultReuseByAgeConfiguration {

		/** Required */
		Enabled: boolean;
		MaxAgeInMinutes?: number | null;
	}

	/** Specifies whether previous query results are reused, and if so, their maximum age. */
	export interface ResultReuseByAgeConfigurationFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
		MaxAgeInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateResultReuseByAgeConfigurationFormGroup() {
		return new FormGroup<ResultReuseByAgeConfigurationFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			MaxAgeInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The database and data catalog context in which the query execution occurs. */
	export interface QueryExecutionContext {
		Database?: string;
		Catalog?: string;
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
		State?: QueryExecutionState;
		StateChangeReason?: string;
		SubmissionDateTime?: Date;
		CompletionDateTime?: Date;
		AthenaError?: AthenaError;
	}

	/** The completion date, current state, submission time, and state change reason (if applicable) for the query execution. */
	export interface QueryExecutionStatusFormProperties {
		State: FormControl<QueryExecutionState | null | undefined>,
		StateChangeReason: FormControl<string | null | undefined>,
		SubmissionDateTime: FormControl<Date | null | undefined>,
		CompletionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateQueryExecutionStatusFormGroup() {
		return new FormGroup<QueryExecutionStatusFormProperties>({
			State: new FormControl<QueryExecutionState | null | undefined>(undefined),
			StateChangeReason: new FormControl<string | null | undefined>(undefined),
			SubmissionDateTime: new FormControl<Date | null | undefined>(undefined),
			CompletionDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum QueryExecutionState { QUEUED = 'QUEUED', RUNNING = 'RUNNING', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', CANCELLED = 'CANCELLED' }


	/** Provides information about an Athena query error. The <code>AthenaError</code> feature provides standardized error information to help you understand failed queries and take steps after a query failure occurs. <code>AthenaError</code> includes an <code>ErrorCategory</code> field that specifies whether the cause of the failed query is due to system error, user error, or other error. */
	export interface AthenaError {
		ErrorCategory?: number | null;
		ErrorType?: number | null;
		Retryable?: boolean | null;
		ErrorMessage?: string;
	}

	/** Provides information about an Athena query error. The <code>AthenaError</code> feature provides standardized error information to help you understand failed queries and take steps after a query failure occurs. <code>AthenaError</code> includes an <code>ErrorCategory</code> field that specifies whether the cause of the failed query is due to system error, user error, or other error. */
	export interface AthenaErrorFormProperties {
		ErrorCategory: FormControl<number | null | undefined>,
		ErrorType: FormControl<number | null | undefined>,
		Retryable: FormControl<boolean | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateAthenaErrorFormGroup() {
		return new FormGroup<AthenaErrorFormProperties>({
			ErrorCategory: new FormControl<number | null | undefined>(undefined),
			ErrorType: new FormControl<number | null | undefined>(undefined),
			Retryable: new FormControl<boolean | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The amount of data scanned during the query execution and the amount of time that it took to execute, and the type of statement that was run. */
	export interface QueryExecutionStatistics {
		EngineExecutionTimeInMillis?: number | null;
		DataScannedInBytes?: number | null;
		DataManifestLocation?: string;
		TotalExecutionTimeInMillis?: number | null;
		QueryQueueTimeInMillis?: number | null;
		QueryPlanningTimeInMillis?: number | null;
		ServiceProcessingTimeInMillis?: number | null;
		ResultReuseInformation?: ResultReuseInformation;
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


	/** Contains information about whether the result of a previous query was reused. */
	export interface ResultReuseInformation {

		/** Required */
		ReusedPreviousResult: boolean;
	}

	/** Contains information about whether the result of a previous query was reused. */
	export interface ResultReuseInformationFormProperties {

		/** Required */
		ReusedPreviousResult: FormControl<boolean | null | undefined>,
	}
	export function CreateResultReuseInformationFormGroup() {
		return new FormGroup<ResultReuseInformationFormProperties>({
			ReusedPreviousResult: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Athena engine version for running queries, or the PySpark engine version for running sessions. */
	export interface EngineVersion {
		SelectedEngineVersion?: string;
		EffectiveEngineVersion?: string;
	}

	/** The Athena engine version for running queries, or the PySpark engine version for running sessions. */
	export interface EngineVersionFormProperties {
		SelectedEngineVersion: FormControl<string | null | undefined>,
		EffectiveEngineVersion: FormControl<string | null | undefined>,
	}
	export function CreateEngineVersionFormGroup() {
		return new FormGroup<EngineVersionFormProperties>({
			SelectedEngineVersion: new FormControl<string | null | undefined>(undefined),
			EffectiveEngineVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a query execution that failed to process. */
	export interface UnprocessedQueryExecutionId {
		QueryExecutionId?: string;
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	/** Describes a query execution that failed to process. */
	export interface UnprocessedQueryExecutionIdFormProperties {
		QueryExecutionId: FormControl<string | null | undefined>,
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


	/** Contains an array of query execution IDs. */
	export interface BatchGetQueryExecutionInput {

		/** Required */
		QueryExecutionIds: Array<string>;
	}

	/** Contains an array of query execution IDs. */
	export interface BatchGetQueryExecutionInputFormProperties {
	}
	export function CreateBatchGetQueryExecutionInputFormGroup() {
		return new FormGroup<BatchGetQueryExecutionInputFormProperties>({
		});

	}

	export interface CancelCapacityReservationOutput {
	}
	export interface CancelCapacityReservationOutputFormProperties {
	}
	export function CreateCancelCapacityReservationOutputFormGroup() {
		return new FormGroup<CancelCapacityReservationOutputFormProperties>({
		});

	}

	export interface CancelCapacityReservationInput {

		/** Required */
		Name: string;
	}
	export interface CancelCapacityReservationInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCancelCapacityReservationInputFormGroup() {
		return new FormGroup<CancelCapacityReservationInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateCapacityReservationOutput {
	}
	export interface CreateCapacityReservationOutputFormProperties {
	}
	export function CreateCreateCapacityReservationOutputFormGroup() {
		return new FormGroup<CreateCapacityReservationOutputFormProperties>({
		});

	}

	export interface CreateCapacityReservationInput {

		/** Required */
		TargetDpus: number;

		/** Required */
		Name: string;
		Tags?: Array<Tag>;
	}
	export interface CreateCapacityReservationInputFormProperties {

		/** Required */
		TargetDpus: FormControl<number | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateCapacityReservationInputFormGroup() {
		return new FormGroup<CreateCapacityReservationInputFormProperties>({
			TargetDpus: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A label that you assign to a resource. Athena resources include workgroups, data catalogs, and capacity reservations. Each tag consists of a key and an optional value, both of which you define. For example, you can use tags to categorize Athena resources by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter the resources in your account. For best practices, see <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one tag, separate them by commas.  */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	/** A label that you assign to a resource. Athena resources include workgroups, data catalogs, and capacity reservations. Each tag consists of a key and an optional value, both of which you define. For example, you can use tags to categorize Athena resources by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter the resources in your account. For best practices, see <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one tag, separate them by commas.  */
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

	export interface CreateDataCatalogOutput {
	}
	export interface CreateDataCatalogOutputFormProperties {
	}
	export function CreateCreateDataCatalogOutputFormGroup() {
		return new FormGroup<CreateDataCatalogOutputFormProperties>({
		});

	}

	export interface CreateDataCatalogInput {

		/** Required */
		Name: string;

		/** Required */
		Type: DataCatalogType;
		Description?: string;
		Parameters?: ParametersMap;
		Tags?: Array<Tag>;
	}
	export interface CreateDataCatalogInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<DataCatalogType | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataCatalogInputFormGroup() {
		return new FormGroup<CreateDataCatalogInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<DataCatalogType | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataCatalogType { LAMBDA = 'LAMBDA', GLUE = 'GLUE', HIVE = 'HIVE' }

	export interface ParametersMap {
	}
	export interface ParametersMapFormProperties {
	}
	export function CreateParametersMapFormGroup() {
		return new FormGroup<ParametersMapFormProperties>({
		});

	}

	export interface CreateNamedQueryOutput {
		NamedQueryId?: string;
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

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		Database: string;

		/** Required */
		QueryString: string;
		ClientRequestToken?: string;
		WorkGroup?: string;
	}
	export interface CreateNamedQueryInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,

		/** Required */
		QueryString: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		WorkGroup: FormControl<string | null | undefined>,
	}
	export function CreateCreateNamedQueryInputFormGroup() {
		return new FormGroup<CreateNamedQueryInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QueryString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			WorkGroup: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNotebookOutput {
		NotebookId?: string;
	}
	export interface CreateNotebookOutputFormProperties {
		NotebookId: FormControl<string | null | undefined>,
	}
	export function CreateCreateNotebookOutputFormGroup() {
		return new FormGroup<CreateNotebookOutputFormProperties>({
			NotebookId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNotebookInput {

		/** Required */
		WorkGroup: string;

		/** Required */
		Name: string;
		ClientRequestToken?: string;
	}
	export interface CreateNotebookInputFormProperties {

		/** Required */
		WorkGroup: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateNotebookInputFormGroup() {
		return new FormGroup<CreateNotebookInputFormProperties>({
			WorkGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
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

	export interface CreatePreparedStatementOutput {
	}
	export interface CreatePreparedStatementOutputFormProperties {
	}
	export function CreateCreatePreparedStatementOutputFormGroup() {
		return new FormGroup<CreatePreparedStatementOutputFormProperties>({
		});

	}

	export interface CreatePreparedStatementInput {

		/** Required */
		StatementName: string;

		/** Required */
		WorkGroup: string;

		/** Required */
		QueryStatement: string;
		Description?: string;
	}
	export interface CreatePreparedStatementInputFormProperties {

		/** Required */
		StatementName: FormControl<string | null | undefined>,

		/** Required */
		WorkGroup: FormControl<string | null | undefined>,

		/** Required */
		QueryStatement: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreatePreparedStatementInputFormGroup() {
		return new FormGroup<CreatePreparedStatementInputFormProperties>({
			StatementName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WorkGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QueryStatement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePresignedNotebookUrlResponse {

		/** Required */
		NotebookUrl: string;

		/** Required */
		AuthToken: string;

		/** Required */
		AuthTokenExpirationTime: number;
	}
	export interface CreatePresignedNotebookUrlResponseFormProperties {

		/** Required */
		NotebookUrl: FormControl<string | null | undefined>,

		/** Required */
		AuthToken: FormControl<string | null | undefined>,

		/** Required */
		AuthTokenExpirationTime: FormControl<number | null | undefined>,
	}
	export function CreateCreatePresignedNotebookUrlResponseFormGroup() {
		return new FormGroup<CreatePresignedNotebookUrlResponseFormProperties>({
			NotebookUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AuthToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AuthTokenExpirationTime: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePresignedNotebookUrlRequest {

		/** Required */
		SessionId: string;
	}
	export interface CreatePresignedNotebookUrlRequestFormProperties {

		/** Required */
		SessionId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePresignedNotebookUrlRequestFormGroup() {
		return new FormGroup<CreatePresignedNotebookUrlRequestFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateWorkGroupOutput {
	}
	export interface CreateWorkGroupOutputFormProperties {
	}
	export function CreateCreateWorkGroupOutputFormGroup() {
		return new FormGroup<CreateWorkGroupOutputFormProperties>({
		});

	}

	export interface CreateWorkGroupInput {

		/** Required */
		Name: string;
		Configuration?: WorkGroupConfiguration;
		Description?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateWorkGroupInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkGroupInputFormGroup() {
		return new FormGroup<CreateWorkGroupInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration of the workgroup, which includes the location in Amazon S3 where query and calculation results are stored, the encryption option, if any, used for query and calculation results, whether the Amazon CloudWatch Metrics are enabled for the workgroup and whether workgroup settings override query settings, and the data usage limits for the amount of data scanned per query or per workgroup. The workgroup settings override is specified in <code>EnforceWorkGroupConfiguration</code> (true/false) in the <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.  */
	export interface WorkGroupConfiguration {
		ResultConfiguration?: ResultConfiguration;
		EnforceWorkGroupConfiguration?: boolean | null;
		PublishCloudWatchMetricsEnabled?: boolean | null;
		BytesScannedCutoffPerQuery?: number | null;
		RequesterPaysEnabled?: boolean | null;
		EngineVersion?: EngineVersion;
		AdditionalConfiguration?: string;
		ExecutionRole?: string;
		CustomerContentEncryptionConfiguration?: CustomerContentEncryptionConfiguration;
		EnableMinimumEncryptionConfiguration?: boolean | null;
	}

	/** The configuration of the workgroup, which includes the location in Amazon S3 where query and calculation results are stored, the encryption option, if any, used for query and calculation results, whether the Amazon CloudWatch Metrics are enabled for the workgroup and whether workgroup settings override query settings, and the data usage limits for the amount of data scanned per query or per workgroup. The workgroup settings override is specified in <code>EnforceWorkGroupConfiguration</code> (true/false) in the <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.  */
	export interface WorkGroupConfigurationFormProperties {
		EnforceWorkGroupConfiguration: FormControl<boolean | null | undefined>,
		PublishCloudWatchMetricsEnabled: FormControl<boolean | null | undefined>,
		BytesScannedCutoffPerQuery: FormControl<number | null | undefined>,
		RequesterPaysEnabled: FormControl<boolean | null | undefined>,
		AdditionalConfiguration: FormControl<string | null | undefined>,
		ExecutionRole: FormControl<string | null | undefined>,
		EnableMinimumEncryptionConfiguration: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkGroupConfigurationFormGroup() {
		return new FormGroup<WorkGroupConfigurationFormProperties>({
			EnforceWorkGroupConfiguration: new FormControl<boolean | null | undefined>(undefined),
			PublishCloudWatchMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
			BytesScannedCutoffPerQuery: new FormControl<number | null | undefined>(undefined),
			RequesterPaysEnabled: new FormControl<boolean | null | undefined>(undefined),
			AdditionalConfiguration: new FormControl<string | null | undefined>(undefined),
			ExecutionRole: new FormControl<string | null | undefined>(undefined),
			EnableMinimumEncryptionConfiguration: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies the KMS key that is used to encrypt the user's data stores in Athena. This setting does not apply to Athena SQL workgroups. */
	export interface CustomerContentEncryptionConfiguration {

		/** Required */
		KmsKey: string;
	}

	/** Specifies the KMS key that is used to encrypt the user's data stores in Athena. This setting does not apply to Athena SQL workgroups. */
	export interface CustomerContentEncryptionConfigurationFormProperties {

		/** Required */
		KmsKey: FormControl<string | null | undefined>,
	}
	export function CreateCustomerContentEncryptionConfigurationFormGroup() {
		return new FormGroup<CustomerContentEncryptionConfigurationFormProperties>({
			KmsKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteCapacityReservationOutput {
	}
	export interface DeleteCapacityReservationOutputFormProperties {
	}
	export function CreateDeleteCapacityReservationOutputFormGroup() {
		return new FormGroup<DeleteCapacityReservationOutputFormProperties>({
		});

	}

	export interface DeleteCapacityReservationInput {

		/** Required */
		Name: string;
	}
	export interface DeleteCapacityReservationInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCapacityReservationInputFormGroup() {
		return new FormGroup<DeleteCapacityReservationInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		Name: string;
	}
	export interface DeleteDataCatalogInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDataCatalogInputFormGroup() {
		return new FormGroup<DeleteDataCatalogInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		NamedQueryId: string;
	}
	export interface DeleteNamedQueryInputFormProperties {

		/** Required */
		NamedQueryId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteNamedQueryInputFormGroup() {
		return new FormGroup<DeleteNamedQueryInputFormProperties>({
			NamedQueryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteNotebookOutput {
	}
	export interface DeleteNotebookOutputFormProperties {
	}
	export function CreateDeleteNotebookOutputFormGroup() {
		return new FormGroup<DeleteNotebookOutputFormProperties>({
		});

	}

	export interface DeleteNotebookInput {

		/** Required */
		NotebookId: string;
	}
	export interface DeleteNotebookInputFormProperties {

		/** Required */
		NotebookId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteNotebookInputFormGroup() {
		return new FormGroup<DeleteNotebookInputFormProperties>({
			NotebookId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletePreparedStatementOutput {
	}
	export interface DeletePreparedStatementOutputFormProperties {
	}
	export function CreateDeletePreparedStatementOutputFormGroup() {
		return new FormGroup<DeletePreparedStatementOutputFormProperties>({
		});

	}

	export interface DeletePreparedStatementInput {

		/** Required */
		StatementName: string;

		/** Required */
		WorkGroup: string;
	}
	export interface DeletePreparedStatementInputFormProperties {

		/** Required */
		StatementName: FormControl<string | null | undefined>,

		/** Required */
		WorkGroup: FormControl<string | null | undefined>,
	}
	export function CreateDeletePreparedStatementInputFormGroup() {
		return new FormGroup<DeletePreparedStatementInputFormProperties>({
			StatementName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WorkGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		WorkGroup: string;
		RecursiveDeleteOption?: boolean | null;
	}
	export interface DeleteWorkGroupInputFormProperties {

		/** Required */
		WorkGroup: FormControl<string | null | undefined>,
		RecursiveDeleteOption: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteWorkGroupInputFormGroup() {
		return new FormGroup<DeleteWorkGroupInputFormProperties>({
			WorkGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecursiveDeleteOption: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ExportNotebookOutput {
		NotebookMetadata?: NotebookMetadata;
		Payload?: string;
	}
	export interface ExportNotebookOutputFormProperties {
		Payload: FormControl<string | null | undefined>,
	}
	export function CreateExportNotebookOutputFormGroup() {
		return new FormGroup<ExportNotebookOutputFormProperties>({
			Payload: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains metadata for notebook, including the notebook name, ID, workgroup, and time created. */
	export interface NotebookMetadata {
		NotebookId?: string;
		Name?: string;
		WorkGroup?: string;
		CreationTime?: Date;
		Type?: NotebookType;
		LastModifiedTime?: Date;
	}

	/** Contains metadata for notebook, including the notebook name, ID, workgroup, and time created. */
	export interface NotebookMetadataFormProperties {
		NotebookId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		WorkGroup: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		Type: FormControl<NotebookType | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateNotebookMetadataFormGroup() {
		return new FormGroup<NotebookMetadataFormProperties>({
			NotebookId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			WorkGroup: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			Type: new FormControl<NotebookType | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum NotebookType { IPYNB = 'IPYNB' }

	export interface ExportNotebookInput {

		/** Required */
		NotebookId: string;
	}
	export interface ExportNotebookInputFormProperties {

		/** Required */
		NotebookId: FormControl<string | null | undefined>,
	}
	export function CreateExportNotebookInputFormGroup() {
		return new FormGroup<ExportNotebookInputFormProperties>({
			NotebookId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCalculationExecutionResponse {
		CalculationExecutionId?: string;
		SessionId?: string;
		Description?: string;
		WorkingDirectory?: string;
		Status?: CalculationStatus;
		Statistics?: CalculationStatistics;
		Result?: CalculationResult;
	}
	export interface GetCalculationExecutionResponseFormProperties {
		CalculationExecutionId: FormControl<string | null | undefined>,
		SessionId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		WorkingDirectory: FormControl<string | null | undefined>,
	}
	export function CreateGetCalculationExecutionResponseFormGroup() {
		return new FormGroup<GetCalculationExecutionResponseFormProperties>({
			CalculationExecutionId: new FormControl<string | null | undefined>(undefined),
			SessionId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			WorkingDirectory: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the status of a notebook calculation. */
	export interface CalculationStatus {
		SubmissionDateTime?: Date;
		CompletionDateTime?: Date;
		State?: CalculationExecutionState;
		StateChangeReason?: string;
	}

	/** Contains information about the status of a notebook calculation. */
	export interface CalculationStatusFormProperties {
		SubmissionDateTime: FormControl<Date | null | undefined>,
		CompletionDateTime: FormControl<Date | null | undefined>,
		State: FormControl<CalculationExecutionState | null | undefined>,
		StateChangeReason: FormControl<string | null | undefined>,
	}
	export function CreateCalculationStatusFormGroup() {
		return new FormGroup<CalculationStatusFormProperties>({
			SubmissionDateTime: new FormControl<Date | null | undefined>(undefined),
			CompletionDateTime: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<CalculationExecutionState | null | undefined>(undefined),
			StateChangeReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CalculationExecutionState { CREATING = 'CREATING', CREATED = 'CREATED', QUEUED = 'QUEUED', RUNNING = 'RUNNING', CANCELING = 'CANCELING', CANCELED = 'CANCELED', COMPLETED = 'COMPLETED', FAILED = 'FAILED' }


	/** Contains statistics for a notebook calculation. */
	export interface CalculationStatistics {
		DpuExecutionInMillis?: number | null;
		Progress?: string;
	}

	/** Contains statistics for a notebook calculation. */
	export interface CalculationStatisticsFormProperties {
		DpuExecutionInMillis: FormControl<number | null | undefined>,
		Progress: FormControl<string | null | undefined>,
	}
	export function CreateCalculationStatisticsFormGroup() {
		return new FormGroup<CalculationStatisticsFormProperties>({
			DpuExecutionInMillis: new FormControl<number | null | undefined>(undefined),
			Progress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about an application-specific calculation result. */
	export interface CalculationResult {
		StdOutS3Uri?: string;
		StdErrorS3Uri?: string;
		ResultS3Uri?: string;
		ResultType?: string;
	}

	/** Contains information about an application-specific calculation result. */
	export interface CalculationResultFormProperties {
		StdOutS3Uri: FormControl<string | null | undefined>,
		StdErrorS3Uri: FormControl<string | null | undefined>,
		ResultS3Uri: FormControl<string | null | undefined>,
		ResultType: FormControl<string | null | undefined>,
	}
	export function CreateCalculationResultFormGroup() {
		return new FormGroup<CalculationResultFormProperties>({
			StdOutS3Uri: new FormControl<string | null | undefined>(undefined),
			StdErrorS3Uri: new FormControl<string | null | undefined>(undefined),
			ResultS3Uri: new FormControl<string | null | undefined>(undefined),
			ResultType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCalculationExecutionRequest {

		/** Required */
		CalculationExecutionId: string;
	}
	export interface GetCalculationExecutionRequestFormProperties {

		/** Required */
		CalculationExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateGetCalculationExecutionRequestFormGroup() {
		return new FormGroup<GetCalculationExecutionRequestFormProperties>({
			CalculationExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCalculationExecutionCodeResponse {
		CodeBlock?: string;
	}
	export interface GetCalculationExecutionCodeResponseFormProperties {
		CodeBlock: FormControl<string | null | undefined>,
	}
	export function CreateGetCalculationExecutionCodeResponseFormGroup() {
		return new FormGroup<GetCalculationExecutionCodeResponseFormProperties>({
			CodeBlock: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCalculationExecutionCodeRequest {

		/** Required */
		CalculationExecutionId: string;
	}
	export interface GetCalculationExecutionCodeRequestFormProperties {

		/** Required */
		CalculationExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateGetCalculationExecutionCodeRequestFormGroup() {
		return new FormGroup<GetCalculationExecutionCodeRequestFormProperties>({
			CalculationExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCalculationExecutionStatusResponse {
		Status?: CalculationStatus;
		Statistics?: CalculationStatistics;
	}
	export interface GetCalculationExecutionStatusResponseFormProperties {
	}
	export function CreateGetCalculationExecutionStatusResponseFormGroup() {
		return new FormGroup<GetCalculationExecutionStatusResponseFormProperties>({
		});

	}

	export interface GetCalculationExecutionStatusRequest {

		/** Required */
		CalculationExecutionId: string;
	}
	export interface GetCalculationExecutionStatusRequestFormProperties {

		/** Required */
		CalculationExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateGetCalculationExecutionStatusRequestFormGroup() {
		return new FormGroup<GetCalculationExecutionStatusRequestFormProperties>({
			CalculationExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCapacityAssignmentConfigurationOutput {

		/** Required */
		CapacityAssignmentConfiguration: CapacityAssignmentConfiguration;
	}
	export interface GetCapacityAssignmentConfigurationOutputFormProperties {
	}
	export function CreateGetCapacityAssignmentConfigurationOutputFormGroup() {
		return new FormGroup<GetCapacityAssignmentConfigurationOutputFormProperties>({
		});

	}


	/** Assigns Athena workgroups (and hence their queries) to capacity reservations. A capacity reservation can have only one capacity assignment configuration, but the capacity assignment configuration can be made up of multiple individual assignments. Each assignment specifies how Athena queries can consume capacity from the capacity reservation that their workgroup is mapped to. */
	export interface CapacityAssignmentConfiguration {
		CapacityReservationName?: string;
		CapacityAssignments?: Array<CapacityAssignment>;
	}

	/** Assigns Athena workgroups (and hence their queries) to capacity reservations. A capacity reservation can have only one capacity assignment configuration, but the capacity assignment configuration can be made up of multiple individual assignments. Each assignment specifies how Athena queries can consume capacity from the capacity reservation that their workgroup is mapped to. */
	export interface CapacityAssignmentConfigurationFormProperties {
		CapacityReservationName: FormControl<string | null | undefined>,
	}
	export function CreateCapacityAssignmentConfigurationFormGroup() {
		return new FormGroup<CapacityAssignmentConfigurationFormProperties>({
			CapacityReservationName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A mapping between one or more workgroups and a capacity reservation. */
	export interface CapacityAssignment {
		WorkGroupNames?: Array<string>;
	}

	/** A mapping between one or more workgroups and a capacity reservation. */
	export interface CapacityAssignmentFormProperties {
	}
	export function CreateCapacityAssignmentFormGroup() {
		return new FormGroup<CapacityAssignmentFormProperties>({
		});

	}

	export interface GetCapacityAssignmentConfigurationInput {

		/** Required */
		CapacityReservationName: string;
	}
	export interface GetCapacityAssignmentConfigurationInputFormProperties {

		/** Required */
		CapacityReservationName: FormControl<string | null | undefined>,
	}
	export function CreateGetCapacityAssignmentConfigurationInputFormGroup() {
		return new FormGroup<GetCapacityAssignmentConfigurationInputFormProperties>({
			CapacityReservationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCapacityReservationOutput {

		/** Required */
		CapacityReservation: CapacityReservation;
	}
	export interface GetCapacityReservationOutputFormProperties {
	}
	export function CreateGetCapacityReservationOutputFormGroup() {
		return new FormGroup<GetCapacityReservationOutputFormProperties>({
		});

	}


	/** A reservation for a specified number of data processing units (DPUs). When a reservation is initially created, it has no DPUs. Athena allocates DPUs until the allocated amount equals the requested amount. */
	export interface CapacityReservation {

		/** Required */
		Name: string;

		/** Required */
		Status: CapacityReservationStatus;

		/** Required */
		TargetDpus: number;

		/** Required */
		AllocatedDpus: number;

		/** Contains the submission time of a single allocation request for a capacity reservation and the most recent status of the attempted allocation. */
		LastAllocation?: CapacityAllocation;
		LastSuccessfulAllocationTime?: Date;

		/** Required */
		CreationTime: Date;
	}

	/** A reservation for a specified number of data processing units (DPUs). When a reservation is initially created, it has no DPUs. Athena allocates DPUs until the allocated amount equals the requested amount. */
	export interface CapacityReservationFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<CapacityReservationStatus | null | undefined>,

		/** Required */
		TargetDpus: FormControl<number | null | undefined>,

		/** Required */
		AllocatedDpus: FormControl<number | null | undefined>,
		LastSuccessfulAllocationTime: FormControl<Date | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateCapacityReservationFormGroup() {
		return new FormGroup<CapacityReservationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<CapacityReservationStatus | null | undefined>(undefined, [Validators.required]),
			TargetDpus: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			AllocatedDpus: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			LastSuccessfulAllocationTime: new FormControl<Date | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CapacityReservationStatus { PENDING = 'PENDING', ACTIVE = 'ACTIVE', CANCELLING = 'CANCELLING', CANCELLED = 'CANCELLED', FAILED = 'FAILED', UPDATE_PENDING = 'UPDATE_PENDING' }


	/** Contains the submission time of a single allocation request for a capacity reservation and the most recent status of the attempted allocation. */
	export interface CapacityAllocation {

		/** Required */
		Status: CapacityAllocationStatus;
		StatusMessage?: string;

		/** Required */
		RequestTime: Date;
		RequestCompletionTime?: Date;
	}

	/** Contains the submission time of a single allocation request for a capacity reservation and the most recent status of the attempted allocation. */
	export interface CapacityAllocationFormProperties {

		/** Required */
		Status: FormControl<CapacityAllocationStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,

		/** Required */
		RequestTime: FormControl<Date | null | undefined>,
		RequestCompletionTime: FormControl<Date | null | undefined>,
	}
	export function CreateCapacityAllocationFormGroup() {
		return new FormGroup<CapacityAllocationFormProperties>({
			Status: new FormControl<CapacityAllocationStatus | null | undefined>(undefined, [Validators.required]),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			RequestTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			RequestCompletionTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum CapacityAllocationStatus { PENDING = 'PENDING', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED' }

	export interface GetCapacityReservationInput {

		/** Required */
		Name: string;
	}
	export interface GetCapacityReservationInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetCapacityReservationInputFormGroup() {
		return new FormGroup<GetCapacityReservationInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDataCatalogOutput {
		DataCatalog?: DataCatalog;
	}
	export interface GetDataCatalogOutputFormProperties {
	}
	export function CreateGetDataCatalogOutputFormGroup() {
		return new FormGroup<GetDataCatalogOutputFormProperties>({
		});

	}


	/** <p>Contains information about a data catalog in an Amazon Web Services account.</p> <note> <p>In the Athena console, data catalogs are listed as "data sources" on the <b>Data sources</b> page under the <b>Data source name</b> column.</p> </note> */
	export interface DataCatalog {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		Type: DataCatalogType;
		Parameters?: ParametersMap;
	}

	/** <p>Contains information about a data catalog in an Amazon Web Services account.</p> <note> <p>In the Athena console, data catalogs are listed as "data sources" on the <b>Data sources</b> page under the <b>Data source name</b> column.</p> </note> */
	export interface DataCatalogFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<DataCatalogType | null | undefined>,
	}
	export function CreateDataCatalogFormGroup() {
		return new FormGroup<DataCatalogFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<DataCatalogType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDataCatalogInput {

		/** Required */
		Name: string;
	}
	export interface GetDataCatalogInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetDataCatalogInputFormGroup() {
		return new FormGroup<GetDataCatalogInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDatabaseOutput {
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

		/** Required */
		Name: string;
		Description?: string;
		Parameters?: ParametersMap;
	}

	/** Contains metadata information for a database in a data catalog. */
	export interface DatabaseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseFormGroup() {
		return new FormGroup<DatabaseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDatabaseInput {

		/** Required */
		CatalogName: string;

		/** Required */
		DatabaseName: string;
	}
	export interface GetDatabaseInputFormProperties {

		/** Required */
		CatalogName: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,
	}
	export function CreateGetDatabaseInputFormGroup() {
		return new FormGroup<GetDatabaseInputFormProperties>({
			CatalogName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		NamedQuery?: NamedQuery;
	}
	export interface GetNamedQueryOutputFormProperties {
	}
	export function CreateGetNamedQueryOutputFormGroup() {
		return new FormGroup<GetNamedQueryOutputFormProperties>({
		});

	}

	export interface GetNamedQueryInput {

		/** Required */
		NamedQueryId: string;
	}
	export interface GetNamedQueryInputFormProperties {

		/** Required */
		NamedQueryId: FormControl<string | null | undefined>,
	}
	export function CreateGetNamedQueryInputFormGroup() {
		return new FormGroup<GetNamedQueryInputFormProperties>({
			NamedQueryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetNotebookMetadataOutput {
		NotebookMetadata?: NotebookMetadata;
	}
	export interface GetNotebookMetadataOutputFormProperties {
	}
	export function CreateGetNotebookMetadataOutputFormGroup() {
		return new FormGroup<GetNotebookMetadataOutputFormProperties>({
		});

	}

	export interface GetNotebookMetadataInput {

		/** Required */
		NotebookId: string;
	}
	export interface GetNotebookMetadataInputFormProperties {

		/** Required */
		NotebookId: FormControl<string | null | undefined>,
	}
	export function CreateGetNotebookMetadataInputFormGroup() {
		return new FormGroup<GetNotebookMetadataInputFormProperties>({
			NotebookId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPreparedStatementOutput {
		PreparedStatement?: PreparedStatement;
	}
	export interface GetPreparedStatementOutputFormProperties {
	}
	export function CreateGetPreparedStatementOutputFormGroup() {
		return new FormGroup<GetPreparedStatementOutputFormProperties>({
		});

	}

	export interface GetPreparedStatementInput {

		/** Required */
		StatementName: string;

		/** Required */
		WorkGroup: string;
	}
	export interface GetPreparedStatementInputFormProperties {

		/** Required */
		StatementName: FormControl<string | null | undefined>,

		/** Required */
		WorkGroup: FormControl<string | null | undefined>,
	}
	export function CreateGetPreparedStatementInputFormGroup() {
		return new FormGroup<GetPreparedStatementInputFormProperties>({
			StatementName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WorkGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetQueryExecutionOutput {
		QueryExecution?: QueryExecution;
	}
	export interface GetQueryExecutionOutputFormProperties {
	}
	export function CreateGetQueryExecutionOutputFormGroup() {
		return new FormGroup<GetQueryExecutionOutputFormProperties>({
		});

	}

	export interface GetQueryExecutionInput {

		/** Required */
		QueryExecutionId: string;
	}
	export interface GetQueryExecutionInputFormProperties {

		/** Required */
		QueryExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateGetQueryExecutionInputFormGroup() {
		return new FormGroup<GetQueryExecutionInputFormProperties>({
			QueryExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetQueryResultsOutput {
		UpdateCount?: number | null;
		ResultSet?: ResultSet;
		NextToken?: string;
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


	/** The metadata and rows that make up a query result set. The metadata describes the column structure and data types. To return a <code>ResultSet</code> object, use <a>GetQueryResults</a>. */
	export interface ResultSet {
		Rows?: Array<Row>;
		ResultSetMetadata?: ResultSetMetadata;
	}

	/** The metadata and rows that make up a query result set. The metadata describes the column structure and data types. To return a <code>ResultSet</code> object, use <a>GetQueryResults</a>. */
	export interface ResultSetFormProperties {
	}
	export function CreateResultSetFormGroup() {
		return new FormGroup<ResultSetFormProperties>({
		});

	}


	/** The rows that make up a query result table. */
	export interface Row {
		Data?: Array<Datum>;
	}

	/** The rows that make up a query result table. */
	export interface RowFormProperties {
	}
	export function CreateRowFormGroup() {
		return new FormGroup<RowFormProperties>({
		});

	}


	/** A piece of data (a field in the table). */
	export interface Datum {
		VarCharValue?: string;
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
		CatalogName?: string;
		SchemaName?: string;
		TableName?: string;

		/** Required */
		Name: string;
		Label?: string;

		/** Required */
		Type: string;
		Precision?: number | null;
		Scale?: number | null;
		Nullable?: ColumnNullable;
		CaseSensitive?: boolean | null;
	}

	/** Information about the columns in a query execution result. */
	export interface ColumnInfoFormProperties {
		CatalogName: FormControl<string | null | undefined>,
		SchemaName: FormControl<string | null | undefined>,
		TableName: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Label: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<string | null | undefined>,
		Precision: FormControl<number | null | undefined>,
		Scale: FormControl<number | null | undefined>,
		Nullable: FormControl<ColumnNullable | null | undefined>,
		CaseSensitive: FormControl<boolean | null | undefined>,
	}
	export function CreateColumnInfoFormGroup() {
		return new FormGroup<ColumnInfoFormProperties>({
			CatalogName: new FormControl<string | null | undefined>(undefined),
			SchemaName: new FormControl<string | null | undefined>(undefined),
			TableName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Label: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Precision: new FormControl<number | null | undefined>(undefined),
			Scale: new FormControl<number | null | undefined>(undefined),
			Nullable: new FormControl<ColumnNullable | null | undefined>(undefined),
			CaseSensitive: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ColumnNullable { NOT_NULL = 'NOT_NULL', NULLABLE = 'NULLABLE', UNKNOWN = 'UNKNOWN' }

	export interface GetQueryResultsInput {

		/** Required */
		QueryExecutionId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface GetQueryResultsInputFormProperties {

		/** Required */
		QueryExecutionId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetQueryResultsInputFormGroup() {
		return new FormGroup<GetQueryResultsInputFormProperties>({
			QueryExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetQueryRuntimeStatisticsOutput {
		QueryRuntimeStatistics?: QueryRuntimeStatistics;
	}
	export interface GetQueryRuntimeStatisticsOutputFormProperties {
	}
	export function CreateGetQueryRuntimeStatisticsOutputFormGroup() {
		return new FormGroup<GetQueryRuntimeStatisticsOutputFormProperties>({
		});

	}


	/** The query execution timeline, statistics on input and output rows and bytes, and the different query stages that form the query execution plan. */
	export interface QueryRuntimeStatistics {

		/** Timeline statistics such as query queue time, planning time, execution time, service processing time, and total execution time. */
		Timeline?: QueryRuntimeStatisticsTimeline;

		/** Statistics such as input rows and bytes read by the query, rows and bytes output by the query, and the number of rows written by the query. */
		Rows?: QueryRuntimeStatisticsRows;
		OutputStage?: QueryStage;
	}

	/** The query execution timeline, statistics on input and output rows and bytes, and the different query stages that form the query execution plan. */
	export interface QueryRuntimeStatisticsFormProperties {
	}
	export function CreateQueryRuntimeStatisticsFormGroup() {
		return new FormGroup<QueryRuntimeStatisticsFormProperties>({
		});

	}


	/** Timeline statistics such as query queue time, planning time, execution time, service processing time, and total execution time. */
	export interface QueryRuntimeStatisticsTimeline {
		QueryQueueTimeInMillis?: number | null;
		QueryPlanningTimeInMillis?: number | null;
		EngineExecutionTimeInMillis?: number | null;
		ServiceProcessingTimeInMillis?: number | null;
		TotalExecutionTimeInMillis?: number | null;
	}

	/** Timeline statistics such as query queue time, planning time, execution time, service processing time, and total execution time. */
	export interface QueryRuntimeStatisticsTimelineFormProperties {
		QueryQueueTimeInMillis: FormControl<number | null | undefined>,
		QueryPlanningTimeInMillis: FormControl<number | null | undefined>,
		EngineExecutionTimeInMillis: FormControl<number | null | undefined>,
		ServiceProcessingTimeInMillis: FormControl<number | null | undefined>,
		TotalExecutionTimeInMillis: FormControl<number | null | undefined>,
	}
	export function CreateQueryRuntimeStatisticsTimelineFormGroup() {
		return new FormGroup<QueryRuntimeStatisticsTimelineFormProperties>({
			QueryQueueTimeInMillis: new FormControl<number | null | undefined>(undefined),
			QueryPlanningTimeInMillis: new FormControl<number | null | undefined>(undefined),
			EngineExecutionTimeInMillis: new FormControl<number | null | undefined>(undefined),
			ServiceProcessingTimeInMillis: new FormControl<number | null | undefined>(undefined),
			TotalExecutionTimeInMillis: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Statistics such as input rows and bytes read by the query, rows and bytes output by the query, and the number of rows written by the query. */
	export interface QueryRuntimeStatisticsRows {
		InputRows?: number | null;
		InputBytes?: number | null;
		OutputBytes?: number | null;
		OutputRows?: number | null;
	}

	/** Statistics such as input rows and bytes read by the query, rows and bytes output by the query, and the number of rows written by the query. */
	export interface QueryRuntimeStatisticsRowsFormProperties {
		InputRows: FormControl<number | null | undefined>,
		InputBytes: FormControl<number | null | undefined>,
		OutputBytes: FormControl<number | null | undefined>,
		OutputRows: FormControl<number | null | undefined>,
	}
	export function CreateQueryRuntimeStatisticsRowsFormGroup() {
		return new FormGroup<QueryRuntimeStatisticsRowsFormProperties>({
			InputRows: new FormControl<number | null | undefined>(undefined),
			InputBytes: new FormControl<number | null | undefined>(undefined),
			OutputBytes: new FormControl<number | null | undefined>(undefined),
			OutputRows: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Stage statistics such as input and output rows and bytes, execution time and stage state. This information also includes substages and the query stage plan. */
	export interface QueryStage {
		StageId?: number | null;
		State?: string;
		OutputBytes?: number | null;
		OutputRows?: number | null;
		InputBytes?: number | null;
		InputRows?: number | null;
		ExecutionTime?: number | null;
		QueryStagePlan?: QueryStagePlanNode;
		SubStages?: Array<QueryStage>;
	}

	/** Stage statistics such as input and output rows and bytes, execution time and stage state. This information also includes substages and the query stage plan. */
	export interface QueryStageFormProperties {
		StageId: FormControl<number | null | undefined>,
		State: FormControl<string | null | undefined>,
		OutputBytes: FormControl<number | null | undefined>,
		OutputRows: FormControl<number | null | undefined>,
		InputBytes: FormControl<number | null | undefined>,
		InputRows: FormControl<number | null | undefined>,
		ExecutionTime: FormControl<number | null | undefined>,
	}
	export function CreateQueryStageFormGroup() {
		return new FormGroup<QueryStageFormProperties>({
			StageId: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			OutputBytes: new FormControl<number | null | undefined>(undefined),
			OutputRows: new FormControl<number | null | undefined>(undefined),
			InputBytes: new FormControl<number | null | undefined>(undefined),
			InputRows: new FormControl<number | null | undefined>(undefined),
			ExecutionTime: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Stage plan information such as name, identifier, sub plans, and remote sources. */
	export interface QueryStagePlanNode {
		Name?: string;
		Identifier?: string;
		Children?: Array<QueryStagePlanNode>;
		RemoteSources?: Array<string>;
	}

	/** Stage plan information such as name, identifier, sub plans, and remote sources. */
	export interface QueryStagePlanNodeFormProperties {
		Name: FormControl<string | null | undefined>,
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateQueryStagePlanNodeFormGroup() {
		return new FormGroup<QueryStagePlanNodeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Identifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetQueryRuntimeStatisticsInput {

		/** Required */
		QueryExecutionId: string;
	}
	export interface GetQueryRuntimeStatisticsInputFormProperties {

		/** Required */
		QueryExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateGetQueryRuntimeStatisticsInputFormGroup() {
		return new FormGroup<GetQueryRuntimeStatisticsInputFormProperties>({
			QueryExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSessionResponse {
		SessionId?: string;
		Description?: string;
		WorkGroup?: string;
		EngineVersion?: string;
		EngineConfiguration?: EngineConfiguration;
		NotebookVersion?: string;
		SessionConfiguration?: SessionConfiguration;
		Status?: SessionStatus;
		Statistics?: SessionStatistics;
	}
	export interface GetSessionResponseFormProperties {
		SessionId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		WorkGroup: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		NotebookVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetSessionResponseFormGroup() {
		return new FormGroup<GetSessionResponseFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			WorkGroup: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			NotebookVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains data processing unit (DPU) configuration settings and parameter mappings for a notebook engine. */
	export interface EngineConfiguration {
		CoordinatorDpuSize?: number | null;

		/** Required */
		MaxConcurrentDpus: number;
		DefaultExecutorDpuSize?: number | null;
		AdditionalConfigs?: ParametersMap;
		SparkProperties?: ParametersMap;
	}

	/** Contains data processing unit (DPU) configuration settings and parameter mappings for a notebook engine. */
	export interface EngineConfigurationFormProperties {
		CoordinatorDpuSize: FormControl<number | null | undefined>,

		/** Required */
		MaxConcurrentDpus: FormControl<number | null | undefined>,
		DefaultExecutorDpuSize: FormControl<number | null | undefined>,
	}
	export function CreateEngineConfigurationFormGroup() {
		return new FormGroup<EngineConfigurationFormProperties>({
			CoordinatorDpuSize: new FormControl<number | null | undefined>(undefined),
			MaxConcurrentDpus: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			DefaultExecutorDpuSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains session configuration information. */
	export interface SessionConfiguration {
		ExecutionRole?: string;
		WorkingDirectory?: string;
		IdleTimeoutSeconds?: number | null;

		/** If query and calculation results are encrypted in Amazon S3, indicates the encryption option used (for example, <code>SSE_KMS</code> or <code>CSE_KMS</code>) and key information. */
		EncryptionConfiguration?: EncryptionConfiguration;
	}

	/** Contains session configuration information. */
	export interface SessionConfigurationFormProperties {
		ExecutionRole: FormControl<string | null | undefined>,
		WorkingDirectory: FormControl<string | null | undefined>,
		IdleTimeoutSeconds: FormControl<number | null | undefined>,
	}
	export function CreateSessionConfigurationFormGroup() {
		return new FormGroup<SessionConfigurationFormProperties>({
			ExecutionRole: new FormControl<string | null | undefined>(undefined),
			WorkingDirectory: new FormControl<string | null | undefined>(undefined),
			IdleTimeoutSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information about the status of a session. */
	export interface SessionStatus {
		StartDateTime?: Date;
		LastModifiedDateTime?: Date;
		EndDateTime?: Date;
		IdleSinceDateTime?: Date;
		State?: SessionState;
		StateChangeReason?: string;
	}

	/** Contains information about the status of a session. */
	export interface SessionStatusFormProperties {
		StartDateTime: FormControl<Date | null | undefined>,
		LastModifiedDateTime: FormControl<Date | null | undefined>,
		EndDateTime: FormControl<Date | null | undefined>,
		IdleSinceDateTime: FormControl<Date | null | undefined>,
		State: FormControl<SessionState | null | undefined>,
		StateChangeReason: FormControl<string | null | undefined>,
	}
	export function CreateSessionStatusFormGroup() {
		return new FormGroup<SessionStatusFormProperties>({
			StartDateTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedDateTime: new FormControl<Date | null | undefined>(undefined),
			EndDateTime: new FormControl<Date | null | undefined>(undefined),
			IdleSinceDateTime: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<SessionState | null | undefined>(undefined),
			StateChangeReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SessionState { CREATING = 'CREATING', CREATED = 'CREATED', IDLE = 'IDLE', BUSY = 'BUSY', TERMINATING = 'TERMINATING', TERMINATED = 'TERMINATED', DEGRADED = 'DEGRADED', FAILED = 'FAILED' }


	/** Contains statistics for a session. */
	export interface SessionStatistics {
		DpuExecutionInMillis?: number | null;
	}

	/** Contains statistics for a session. */
	export interface SessionStatisticsFormProperties {
		DpuExecutionInMillis: FormControl<number | null | undefined>,
	}
	export function CreateSessionStatisticsFormGroup() {
		return new FormGroup<SessionStatisticsFormProperties>({
			DpuExecutionInMillis: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetSessionRequest {

		/** Required */
		SessionId: string;
	}
	export interface GetSessionRequestFormProperties {

		/** Required */
		SessionId: FormControl<string | null | undefined>,
	}
	export function CreateGetSessionRequestFormGroup() {
		return new FormGroup<GetSessionRequestFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSessionStatusResponse {
		SessionId?: string;
		Status?: SessionStatus;
	}
	export interface GetSessionStatusResponseFormProperties {
		SessionId: FormControl<string | null | undefined>,
	}
	export function CreateGetSessionStatusResponseFormGroup() {
		return new FormGroup<GetSessionStatusResponseFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSessionStatusRequest {

		/** Required */
		SessionId: string;
	}
	export interface GetSessionStatusRequestFormProperties {

		/** Required */
		SessionId: FormControl<string | null | undefined>,
	}
	export function CreateGetSessionStatusRequestFormGroup() {
		return new FormGroup<GetSessionStatusRequestFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTableMetadataOutput {
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

		/** Required */
		Name: string;
		CreateTime?: Date;
		LastAccessTime?: Date;
		TableType?: string;
		Columns?: Array<Column>;
		PartitionKeys?: Array<Column>;
		Parameters?: ParametersMap;
	}

	/** Contains metadata for a table. */
	export interface TableMetadataFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		CreateTime: FormControl<Date | null | undefined>,
		LastAccessTime: FormControl<Date | null | undefined>,
		TableType: FormControl<string | null | undefined>,
	}
	export function CreateTableMetadataFormGroup() {
		return new FormGroup<TableMetadataFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreateTime: new FormControl<Date | null | undefined>(undefined),
			LastAccessTime: new FormControl<Date | null | undefined>(undefined),
			TableType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains metadata for a column in a table. */
	export interface Column {

		/** Required */
		Name: string;
		Type?: string;
		Comment?: string;
	}

	/** Contains metadata for a column in a table. */
	export interface ColumnFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Comment: FormControl<string | null | undefined>,
	}
	export function CreateColumnFormGroup() {
		return new FormGroup<ColumnFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTableMetadataInput {

		/** Required */
		CatalogName: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;
	}
	export interface GetTableMetadataInputFormProperties {

		/** Required */
		CatalogName: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateGetTableMetadataInputFormGroup() {
		return new FormGroup<GetTableMetadataInputFormProperties>({
			CatalogName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetWorkGroupOutput {
		WorkGroup?: WorkGroup;
	}
	export interface GetWorkGroupOutputFormProperties {
	}
	export function CreateGetWorkGroupOutputFormGroup() {
		return new FormGroup<GetWorkGroupOutputFormProperties>({
		});

	}


	/** A workgroup, which contains a name, description, creation time, state, and other configuration, listed under <a>WorkGroup$Configuration</a>. Each workgroup enables you to isolate queries for you or your group of users from other queries in the same account, to configure the query results location and the encryption configuration (known as workgroup settings), to enable sending query metrics to Amazon CloudWatch, and to establish per-query data usage control limits for all queries in a workgroup. The workgroup settings override is specified in <code>EnforceWorkGroupConfiguration</code> (true/false) in the <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>. */
	export interface WorkGroup {

		/** Required */
		Name: string;
		State?: WorkGroupState;
		Configuration?: WorkGroupConfiguration;
		Description?: string;
		CreationTime?: Date;
	}

	/** A workgroup, which contains a name, description, creation time, state, and other configuration, listed under <a>WorkGroup$Configuration</a>. Each workgroup enables you to isolate queries for you or your group of users from other queries in the same account, to configure the query results location and the encryption configuration (known as workgroup settings), to enable sending query metrics to Amazon CloudWatch, and to establish per-query data usage control limits for all queries in a workgroup. The workgroup settings override is specified in <code>EnforceWorkGroupConfiguration</code> (true/false) in the <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>. */
	export interface WorkGroupFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		State: FormControl<WorkGroupState | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateWorkGroupFormGroup() {
		return new FormGroup<WorkGroupFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			State: new FormControl<WorkGroupState | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum WorkGroupState { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export interface GetWorkGroupInput {

		/** Required */
		WorkGroup: string;
	}
	export interface GetWorkGroupInputFormProperties {

		/** Required */
		WorkGroup: FormControl<string | null | undefined>,
	}
	export function CreateGetWorkGroupInputFormGroup() {
		return new FormGroup<GetWorkGroupInputFormProperties>({
			WorkGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportNotebookOutput {
		NotebookId?: string;
	}
	export interface ImportNotebookOutputFormProperties {
		NotebookId: FormControl<string | null | undefined>,
	}
	export function CreateImportNotebookOutputFormGroup() {
		return new FormGroup<ImportNotebookOutputFormProperties>({
			NotebookId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportNotebookInput {

		/** Required */
		WorkGroup: string;

		/** Required */
		Name: string;

		/** Required */
		Payload: string;

		/** Required */
		Type: NotebookType;
		ClientRequestToken?: string;
	}
	export interface ImportNotebookInputFormProperties {

		/** Required */
		WorkGroup: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Payload: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<NotebookType | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateImportNotebookInputFormGroup() {
		return new FormGroup<ImportNotebookInputFormProperties>({
			WorkGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Payload: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<NotebookType | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListApplicationDPUSizesOutput {
		ApplicationDPUSizes?: Array<ApplicationDPUSizes>;
		NextToken?: string;
	}
	export interface ListApplicationDPUSizesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationDPUSizesOutputFormGroup() {
		return new FormGroup<ListApplicationDPUSizesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the application runtime IDs and their supported DPU sizes. */
	export interface ApplicationDPUSizes {
		ApplicationRuntimeId?: string;
		SupportedDPUSizes?: Array<number> | null;
	}

	/** Contains the application runtime IDs and their supported DPU sizes. */
	export interface ApplicationDPUSizesFormProperties {
		ApplicationRuntimeId: FormControl<string | null | undefined>,
	}
	export function CreateApplicationDPUSizesFormGroup() {
		return new FormGroup<ApplicationDPUSizesFormProperties>({
			ApplicationRuntimeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListApplicationDPUSizesInput {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListApplicationDPUSizesInputFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationDPUSizesInputFormGroup() {
		return new FormGroup<ListApplicationDPUSizesInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCalculationExecutionsResponse {
		NextToken?: string;
		Calculations?: Array<CalculationSummary>;
	}
	export interface ListCalculationExecutionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCalculationExecutionsResponseFormGroup() {
		return new FormGroup<ListCalculationExecutionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information for a notebook calculation. */
	export interface CalculationSummary {
		CalculationExecutionId?: string;
		Description?: string;
		Status?: CalculationStatus;
	}

	/** Summary information for a notebook calculation. */
	export interface CalculationSummaryFormProperties {
		CalculationExecutionId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCalculationSummaryFormGroup() {
		return new FormGroup<CalculationSummaryFormProperties>({
			CalculationExecutionId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCalculationExecutionsRequest {

		/** Required */
		SessionId: string;
		StateFilter?: CalculationExecutionState;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListCalculationExecutionsRequestFormProperties {

		/** Required */
		SessionId: FormControl<string | null | undefined>,
		StateFilter: FormControl<CalculationExecutionState | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCalculationExecutionsRequestFormGroup() {
		return new FormGroup<ListCalculationExecutionsRequestFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StateFilter: new FormControl<CalculationExecutionState | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCapacityReservationsOutput {
		NextToken?: string;

		/** Required */
		CapacityReservations: Array<CapacityReservation>;
	}
	export interface ListCapacityReservationsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCapacityReservationsOutputFormGroup() {
		return new FormGroup<ListCapacityReservationsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCapacityReservationsInput {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListCapacityReservationsInputFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListCapacityReservationsInputFormGroup() {
		return new FormGroup<ListCapacityReservationsInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListDataCatalogsOutput {
		DataCatalogsSummary?: Array<DataCatalogSummary>;
		NextToken?: string;
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
		CatalogName?: string;
		Type?: DataCatalogType;
	}

	/** The summary information for the data catalog, which includes its name and type. */
	export interface DataCatalogSummaryFormProperties {
		CatalogName: FormControl<string | null | undefined>,
		Type: FormControl<DataCatalogType | null | undefined>,
	}
	export function CreateDataCatalogSummaryFormGroup() {
		return new FormGroup<DataCatalogSummaryFormProperties>({
			CatalogName: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<DataCatalogType | null | undefined>(undefined),
		});

	}

	export interface ListDataCatalogsInput {
		NextToken?: string;
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
		NextToken?: string;
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

		/** Required */
		CatalogName: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListDatabasesInputFormProperties {

		/** Required */
		CatalogName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDatabasesInputFormGroup() {
		return new FormGroup<ListDatabasesInputFormProperties>({
			CatalogName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListEngineVersionsOutput {
		EngineVersions?: Array<EngineVersion>;
		NextToken?: string;
	}
	export interface ListEngineVersionsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEngineVersionsOutputFormGroup() {
		return new FormGroup<ListEngineVersionsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEngineVersionsInput {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListEngineVersionsInputFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListEngineVersionsInputFormGroup() {
		return new FormGroup<ListEngineVersionsInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListExecutorsResponse {

		/** Required */
		SessionId: string;
		NextToken?: string;
		ExecutorsSummary?: Array<ExecutorsSummary>;
	}
	export interface ListExecutorsResponseFormProperties {

		/** Required */
		SessionId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExecutorsResponseFormGroup() {
		return new FormGroup<ListExecutorsResponseFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains summary information about an executor. */
	export interface ExecutorsSummary {

		/** Required */
		ExecutorId: string;
		ExecutorType?: ExecutorType;
		StartDateTime?: number | null;
		TerminationDateTime?: number | null;
		ExecutorState?: ExecutorState;
		ExecutorSize?: number | null;
	}

	/** Contains summary information about an executor. */
	export interface ExecutorsSummaryFormProperties {

		/** Required */
		ExecutorId: FormControl<string | null | undefined>,
		ExecutorType: FormControl<ExecutorType | null | undefined>,
		StartDateTime: FormControl<number | null | undefined>,
		TerminationDateTime: FormControl<number | null | undefined>,
		ExecutorState: FormControl<ExecutorState | null | undefined>,
		ExecutorSize: FormControl<number | null | undefined>,
	}
	export function CreateExecutorsSummaryFormGroup() {
		return new FormGroup<ExecutorsSummaryFormProperties>({
			ExecutorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExecutorType: new FormControl<ExecutorType | null | undefined>(undefined),
			StartDateTime: new FormControl<number | null | undefined>(undefined),
			TerminationDateTime: new FormControl<number | null | undefined>(undefined),
			ExecutorState: new FormControl<ExecutorState | null | undefined>(undefined),
			ExecutorSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ExecutorType { COORDINATOR = 'COORDINATOR', GATEWAY = 'GATEWAY', WORKER = 'WORKER' }

	export enum ExecutorState { CREATING = 'CREATING', CREATED = 'CREATED', REGISTERED = 'REGISTERED', TERMINATING = 'TERMINATING', TERMINATED = 'TERMINATED', FAILED = 'FAILED' }

	export interface ListExecutorsRequest {

		/** Required */
		SessionId: string;
		ExecutorStateFilter?: ExecutorState;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListExecutorsRequestFormProperties {

		/** Required */
		SessionId: FormControl<string | null | undefined>,
		ExecutorStateFilter: FormControl<ExecutorState | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExecutorsRequestFormGroup() {
		return new FormGroup<ListExecutorsRequestFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExecutorStateFilter: new FormControl<ExecutorState | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListNamedQueriesOutput {
		NamedQueryIds?: Array<string>;
		NextToken?: string;
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
		NextToken?: string;
		MaxResults?: number | null;
		WorkGroup?: string;
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

	export interface ListNotebookMetadataOutput {
		NextToken?: string;
		NotebookMetadataList?: Array<NotebookMetadata>;
	}
	export interface ListNotebookMetadataOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNotebookMetadataOutputFormGroup() {
		return new FormGroup<ListNotebookMetadataOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListNotebookMetadataInput {
		Filters?: FilterDefinition;
		NextToken?: string;
		MaxResults?: number | null;

		/** Required */
		WorkGroup: string;
	}
	export interface ListNotebookMetadataInputFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,

		/** Required */
		WorkGroup: FormControl<string | null | undefined>,
	}
	export function CreateListNotebookMetadataInputFormGroup() {
		return new FormGroup<ListNotebookMetadataInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			WorkGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A string for searching notebook names. */
	export interface FilterDefinition {
		Name?: string;
	}

	/** A string for searching notebook names. */
	export interface FilterDefinitionFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateFilterDefinitionFormGroup() {
		return new FormGroup<FilterDefinitionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListNotebookSessionsResponse {

		/** Required */
		NotebookSessionsList: Array<NotebookSessionSummary>;
		NextToken?: string;
	}
	export interface ListNotebookSessionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNotebookSessionsResponseFormGroup() {
		return new FormGroup<ListNotebookSessionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the notebook session ID and notebook session creation time. */
	export interface NotebookSessionSummary {
		SessionId?: string;
		CreationTime?: Date;
	}

	/** Contains the notebook session ID and notebook session creation time. */
	export interface NotebookSessionSummaryFormProperties {
		SessionId: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateNotebookSessionSummaryFormGroup() {
		return new FormGroup<NotebookSessionSummaryFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListNotebookSessionsRequest {

		/** Required */
		NotebookId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListNotebookSessionsRequestFormProperties {

		/** Required */
		NotebookId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNotebookSessionsRequestFormGroup() {
		return new FormGroup<ListNotebookSessionsRequestFormProperties>({
			NotebookId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPreparedStatementsOutput {
		PreparedStatements?: Array<PreparedStatementSummary>;
		NextToken?: string;
	}
	export interface ListPreparedStatementsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPreparedStatementsOutputFormGroup() {
		return new FormGroup<ListPreparedStatementsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The name and last modified time of the prepared statement. */
	export interface PreparedStatementSummary {
		StatementName?: string;
		LastModifiedTime?: Date;
	}

	/** The name and last modified time of the prepared statement. */
	export interface PreparedStatementSummaryFormProperties {
		StatementName: FormControl<string | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreatePreparedStatementSummaryFormGroup() {
		return new FormGroup<PreparedStatementSummaryFormProperties>({
			StatementName: new FormControl<string | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListPreparedStatementsInput {

		/** Required */
		WorkGroup: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListPreparedStatementsInputFormProperties {

		/** Required */
		WorkGroup: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPreparedStatementsInputFormGroup() {
		return new FormGroup<ListPreparedStatementsInputFormProperties>({
			WorkGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListQueryExecutionsOutput {
		QueryExecutionIds?: Array<string>;
		NextToken?: string;
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
		NextToken?: string;
		MaxResults?: number | null;
		WorkGroup?: string;
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

	export interface ListSessionsResponse {
		NextToken?: string;
		Sessions?: Array<SessionSummary>;
	}
	export interface ListSessionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSessionsResponseFormGroup() {
		return new FormGroup<ListSessionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains summary information about a session. */
	export interface SessionSummary {
		SessionId?: string;
		Description?: string;
		EngineVersion?: EngineVersion;
		NotebookVersion?: string;
		Status?: SessionStatus;
	}

	/** Contains summary information about a session. */
	export interface SessionSummaryFormProperties {
		SessionId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		NotebookVersion: FormControl<string | null | undefined>,
	}
	export function CreateSessionSummaryFormGroup() {
		return new FormGroup<SessionSummaryFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			NotebookVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSessionsRequest {

		/** Required */
		WorkGroup: string;
		StateFilter?: SessionState;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListSessionsRequestFormProperties {

		/** Required */
		WorkGroup: FormControl<string | null | undefined>,
		StateFilter: FormControl<SessionState | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSessionsRequestFormGroup() {
		return new FormGroup<ListSessionsRequestFormProperties>({
			WorkGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StateFilter: new FormControl<SessionState | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTableMetadataOutput {
		TableMetadataList?: Array<TableMetadata>;
		NextToken?: string;
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

		/** Required */
		CatalogName: string;

		/** Required */
		DatabaseName: string;
		Expression?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListTableMetadataInputFormProperties {

		/** Required */
		CatalogName: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,
		Expression: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTableMetadataInputFormGroup() {
		return new FormGroup<ListTableMetadataInputFormProperties>({
			CatalogName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Expression: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceOutput {
		Tags?: Array<Tag>;
		NextToken?: string;
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

		/** Required */
		ResourceARN: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListTagsForResourceInputFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListWorkGroupsOutput {
		WorkGroups?: Array<WorkGroupSummary>;
		NextToken?: string;
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
		Name?: string;
		State?: WorkGroupState;
		Description?: string;
		CreationTime?: Date;
		EngineVersion?: EngineVersion;
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
		NextToken?: string;
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

	export interface PutCapacityAssignmentConfigurationOutput {
	}
	export interface PutCapacityAssignmentConfigurationOutputFormProperties {
	}
	export function CreatePutCapacityAssignmentConfigurationOutputFormGroup() {
		return new FormGroup<PutCapacityAssignmentConfigurationOutputFormProperties>({
		});

	}

	export interface PutCapacityAssignmentConfigurationInput {

		/** Required */
		CapacityReservationName: string;

		/** Required */
		CapacityAssignments: Array<CapacityAssignment>;
	}
	export interface PutCapacityAssignmentConfigurationInputFormProperties {

		/** Required */
		CapacityReservationName: FormControl<string | null | undefined>,
	}
	export function CreatePutCapacityAssignmentConfigurationInputFormGroup() {
		return new FormGroup<PutCapacityAssignmentConfigurationInputFormProperties>({
			CapacityReservationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartCalculationExecutionResponse {
		CalculationExecutionId?: string;
		State?: CalculationExecutionState;
	}
	export interface StartCalculationExecutionResponseFormProperties {
		CalculationExecutionId: FormControl<string | null | undefined>,
		State: FormControl<CalculationExecutionState | null | undefined>,
	}
	export function CreateStartCalculationExecutionResponseFormGroup() {
		return new FormGroup<StartCalculationExecutionResponseFormProperties>({
			CalculationExecutionId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<CalculationExecutionState | null | undefined>(undefined),
		});

	}

	export interface StartCalculationExecutionRequest {

		/** Required */
		SessionId: string;
		Description?: string;
		CalculationConfiguration?: CalculationConfiguration;
		CodeBlock?: string;
		ClientRequestToken?: string;
	}
	export interface StartCalculationExecutionRequestFormProperties {

		/** Required */
		SessionId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CodeBlock: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartCalculationExecutionRequestFormGroup() {
		return new FormGroup<StartCalculationExecutionRequestFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			CodeBlock: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains configuration information for the calculation. */
	export interface CalculationConfiguration {
		CodeBlock?: string;
	}

	/** Contains configuration information for the calculation. */
	export interface CalculationConfigurationFormProperties {
		CodeBlock: FormControl<string | null | undefined>,
	}
	export function CreateCalculationConfigurationFormGroup() {
		return new FormGroup<CalculationConfigurationFormProperties>({
			CodeBlock: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartQueryExecutionOutput {
		QueryExecutionId?: string;
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

		/** Required */
		QueryString: string;
		ClientRequestToken?: string;
		QueryExecutionContext?: QueryExecutionContext;
		ResultConfiguration?: ResultConfiguration;
		WorkGroup?: string;
		ExecutionParameters?: Array<string>;
		ResultReuseConfiguration?: ResultReuseConfiguration;
	}
	export interface StartQueryExecutionInputFormProperties {

		/** Required */
		QueryString: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		WorkGroup: FormControl<string | null | undefined>,
	}
	export function CreateStartQueryExecutionInputFormGroup() {
		return new FormGroup<StartQueryExecutionInputFormProperties>({
			QueryString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			WorkGroup: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartSessionResponse {
		SessionId?: string;
		State?: SessionState;
	}
	export interface StartSessionResponseFormProperties {
		SessionId: FormControl<string | null | undefined>,
		State: FormControl<SessionState | null | undefined>,
	}
	export function CreateStartSessionResponseFormGroup() {
		return new FormGroup<StartSessionResponseFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<SessionState | null | undefined>(undefined),
		});

	}

	export interface StartSessionRequest {
		Description?: string;

		/** Required */
		WorkGroup: string;

		/** Required */
		EngineConfiguration: EngineConfiguration;
		NotebookVersion?: string;
		SessionIdleTimeoutInMinutes?: number | null;
		ClientRequestToken?: string;
	}
	export interface StartSessionRequestFormProperties {
		Description: FormControl<string | null | undefined>,

		/** Required */
		WorkGroup: FormControl<string | null | undefined>,
		NotebookVersion: FormControl<string | null | undefined>,
		SessionIdleTimeoutInMinutes: FormControl<number | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartSessionRequestFormGroup() {
		return new FormGroup<StartSessionRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			WorkGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NotebookVersion: new FormControl<string | null | undefined>(undefined),
			SessionIdleTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SessionAlreadyExistsException {
	}
	export interface SessionAlreadyExistsExceptionFormProperties {
	}
	export function CreateSessionAlreadyExistsExceptionFormGroup() {
		return new FormGroup<SessionAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface StopCalculationExecutionResponse {
		State?: CalculationExecutionState;
	}
	export interface StopCalculationExecutionResponseFormProperties {
		State: FormControl<CalculationExecutionState | null | undefined>,
	}
	export function CreateStopCalculationExecutionResponseFormGroup() {
		return new FormGroup<StopCalculationExecutionResponseFormProperties>({
			State: new FormControl<CalculationExecutionState | null | undefined>(undefined),
		});

	}

	export interface StopCalculationExecutionRequest {

		/** Required */
		CalculationExecutionId: string;
	}
	export interface StopCalculationExecutionRequestFormProperties {

		/** Required */
		CalculationExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateStopCalculationExecutionRequestFormGroup() {
		return new FormGroup<StopCalculationExecutionRequestFormProperties>({
			CalculationExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		QueryExecutionId: string;
	}
	export interface StopQueryExecutionInputFormProperties {

		/** Required */
		QueryExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateStopQueryExecutionInputFormGroup() {
		return new FormGroup<StopQueryExecutionInputFormProperties>({
			QueryExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceInputFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TerminateSessionResponse {
		State?: SessionState;
	}
	export interface TerminateSessionResponseFormProperties {
		State: FormControl<SessionState | null | undefined>,
	}
	export function CreateTerminateSessionResponseFormGroup() {
		return new FormGroup<TerminateSessionResponseFormProperties>({
			State: new FormControl<SessionState | null | undefined>(undefined),
		});

	}

	export interface TerminateSessionRequest {

		/** Required */
		SessionId: string;
	}
	export interface TerminateSessionRequestFormProperties {

		/** Required */
		SessionId: FormControl<string | null | undefined>,
	}
	export function CreateTerminateSessionRequestFormGroup() {
		return new FormGroup<TerminateSessionRequestFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceInputFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateCapacityReservationOutput {
	}
	export interface UpdateCapacityReservationOutputFormProperties {
	}
	export function CreateUpdateCapacityReservationOutputFormGroup() {
		return new FormGroup<UpdateCapacityReservationOutputFormProperties>({
		});

	}

	export interface UpdateCapacityReservationInput {

		/** Required */
		TargetDpus: number;

		/** Required */
		Name: string;
	}
	export interface UpdateCapacityReservationInputFormProperties {

		/** Required */
		TargetDpus: FormControl<number | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCapacityReservationInputFormGroup() {
		return new FormGroup<UpdateCapacityReservationInputFormProperties>({
			TargetDpus: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		Name: string;

		/** Required */
		Type: DataCatalogType;
		Description?: string;
		Parameters?: ParametersMap;
	}
	export interface UpdateDataCatalogInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<DataCatalogType | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataCatalogInputFormGroup() {
		return new FormGroup<UpdateDataCatalogInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<DataCatalogType | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNamedQueryOutput {
	}
	export interface UpdateNamedQueryOutputFormProperties {
	}
	export function CreateUpdateNamedQueryOutputFormGroup() {
		return new FormGroup<UpdateNamedQueryOutputFormProperties>({
		});

	}

	export interface UpdateNamedQueryInput {

		/** Required */
		NamedQueryId: string;

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		QueryString: string;
	}
	export interface UpdateNamedQueryInputFormProperties {

		/** Required */
		NamedQueryId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		QueryString: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNamedQueryInputFormGroup() {
		return new FormGroup<UpdateNamedQueryInputFormProperties>({
			NamedQueryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			QueryString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNotebookOutput {
	}
	export interface UpdateNotebookOutputFormProperties {
	}
	export function CreateUpdateNotebookOutputFormGroup() {
		return new FormGroup<UpdateNotebookOutputFormProperties>({
		});

	}

	export interface UpdateNotebookInput {

		/** Required */
		NotebookId: string;

		/** Required */
		Payload: string;

		/** Required */
		Type: NotebookType;
		SessionId?: string;
		ClientRequestToken?: string;
	}
	export interface UpdateNotebookInputFormProperties {

		/** Required */
		NotebookId: FormControl<string | null | undefined>,

		/** Required */
		Payload: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<NotebookType | null | undefined>,
		SessionId: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNotebookInputFormGroup() {
		return new FormGroup<UpdateNotebookInputFormProperties>({
			NotebookId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Payload: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<NotebookType | null | undefined>(undefined, [Validators.required]),
			SessionId: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNotebookMetadataOutput {
	}
	export interface UpdateNotebookMetadataOutputFormProperties {
	}
	export function CreateUpdateNotebookMetadataOutputFormGroup() {
		return new FormGroup<UpdateNotebookMetadataOutputFormProperties>({
		});

	}

	export interface UpdateNotebookMetadataInput {

		/** Required */
		NotebookId: string;
		ClientRequestToken?: string;

		/** Required */
		Name: string;
	}
	export interface UpdateNotebookMetadataInputFormProperties {

		/** Required */
		NotebookId: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNotebookMetadataInputFormGroup() {
		return new FormGroup<UpdateNotebookMetadataInputFormProperties>({
			NotebookId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdatePreparedStatementOutput {
	}
	export interface UpdatePreparedStatementOutputFormProperties {
	}
	export function CreateUpdatePreparedStatementOutputFormGroup() {
		return new FormGroup<UpdatePreparedStatementOutputFormProperties>({
		});

	}

	export interface UpdatePreparedStatementInput {

		/** Required */
		StatementName: string;

		/** Required */
		WorkGroup: string;

		/** Required */
		QueryStatement: string;
		Description?: string;
	}
	export interface UpdatePreparedStatementInputFormProperties {

		/** Required */
		StatementName: FormControl<string | null | undefined>,

		/** Required */
		WorkGroup: FormControl<string | null | undefined>,

		/** Required */
		QueryStatement: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePreparedStatementInputFormGroup() {
		return new FormGroup<UpdatePreparedStatementInputFormProperties>({
			StatementName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WorkGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QueryStatement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		WorkGroup: string;
		Description?: string;
		ConfigurationUpdates?: WorkGroupConfigurationUpdates;
		State?: WorkGroupState;
	}
	export interface UpdateWorkGroupInputFormProperties {

		/** Required */
		WorkGroup: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		State: FormControl<WorkGroupState | null | undefined>,
	}
	export function CreateUpdateWorkGroupInputFormGroup() {
		return new FormGroup<UpdateWorkGroupInputFormProperties>({
			WorkGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<WorkGroupState | null | undefined>(undefined),
		});

	}


	/** The configuration information that will be updated for this workgroup, which includes the location in Amazon S3 where query and calculation results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, whether the workgroup settings override the client-side settings, and the data usage limit for the amount of bytes scanned per query, if it is specified. */
	export interface WorkGroupConfigurationUpdates {
		EnforceWorkGroupConfiguration?: boolean | null;
		ResultConfigurationUpdates?: ResultConfigurationUpdates;
		PublishCloudWatchMetricsEnabled?: boolean | null;
		BytesScannedCutoffPerQuery?: number | null;
		RemoveBytesScannedCutoffPerQuery?: boolean | null;
		RequesterPaysEnabled?: boolean | null;
		EngineVersion?: EngineVersion;
		RemoveCustomerContentEncryptionConfiguration?: boolean | null;
		AdditionalConfiguration?: string;
		ExecutionRole?: string;

		/** Specifies the KMS key that is used to encrypt the user's data stores in Athena. This setting does not apply to Athena SQL workgroups. */
		CustomerContentEncryptionConfiguration?: CustomerContentEncryptionConfiguration;
		EnableMinimumEncryptionConfiguration?: boolean | null;
	}

	/** The configuration information that will be updated for this workgroup, which includes the location in Amazon S3 where query and calculation results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, whether the workgroup settings override the client-side settings, and the data usage limit for the amount of bytes scanned per query, if it is specified. */
	export interface WorkGroupConfigurationUpdatesFormProperties {
		EnforceWorkGroupConfiguration: FormControl<boolean | null | undefined>,
		PublishCloudWatchMetricsEnabled: FormControl<boolean | null | undefined>,
		BytesScannedCutoffPerQuery: FormControl<number | null | undefined>,
		RemoveBytesScannedCutoffPerQuery: FormControl<boolean | null | undefined>,
		RequesterPaysEnabled: FormControl<boolean | null | undefined>,
		RemoveCustomerContentEncryptionConfiguration: FormControl<boolean | null | undefined>,
		AdditionalConfiguration: FormControl<string | null | undefined>,
		ExecutionRole: FormControl<string | null | undefined>,
		EnableMinimumEncryptionConfiguration: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkGroupConfigurationUpdatesFormGroup() {
		return new FormGroup<WorkGroupConfigurationUpdatesFormProperties>({
			EnforceWorkGroupConfiguration: new FormControl<boolean | null | undefined>(undefined),
			PublishCloudWatchMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
			BytesScannedCutoffPerQuery: new FormControl<number | null | undefined>(undefined),
			RemoveBytesScannedCutoffPerQuery: new FormControl<boolean | null | undefined>(undefined),
			RequesterPaysEnabled: new FormControl<boolean | null | undefined>(undefined),
			RemoveCustomerContentEncryptionConfiguration: new FormControl<boolean | null | undefined>(undefined),
			AdditionalConfiguration: new FormControl<string | null | undefined>(undefined),
			ExecutionRole: new FormControl<string | null | undefined>(undefined),
			EnableMinimumEncryptionConfiguration: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The information about the updates in the query results, such as output location and encryption configuration for the query results. */
	export interface ResultConfigurationUpdates {
		OutputLocation?: string;
		RemoveOutputLocation?: boolean | null;
		EncryptionConfiguration?: EncryptionConfiguration;
		RemoveEncryptionConfiguration?: boolean | null;
		ExpectedBucketOwner?: string;
		RemoveExpectedBucketOwner?: boolean | null;
		AclConfiguration?: AclConfiguration;
		RemoveAclConfiguration?: boolean | null;
	}

	/** The information about the updates in the query results, such as output location and encryption configuration for the query results. */
	export interface ResultConfigurationUpdatesFormProperties {
		OutputLocation: FormControl<string | null | undefined>,
		RemoveOutputLocation: FormControl<boolean | null | undefined>,
		RemoveEncryptionConfiguration: FormControl<boolean | null | undefined>,
		ExpectedBucketOwner: FormControl<string | null | undefined>,
		RemoveExpectedBucketOwner: FormControl<boolean | null | undefined>,
		RemoveAclConfiguration: FormControl<boolean | null | undefined>,
	}
	export function CreateResultConfigurationUpdatesFormGroup() {
		return new FormGroup<ResultConfigurationUpdatesFormProperties>({
			OutputLocation: new FormControl<string | null | undefined>(undefined),
			RemoveOutputLocation: new FormControl<boolean | null | undefined>(undefined),
			RemoveEncryptionConfiguration: new FormControl<boolean | null | undefined>(undefined),
			ExpectedBucketOwner: new FormControl<string | null | undefined>(undefined),
			RemoveExpectedBucketOwner: new FormControl<boolean | null | undefined>(undefined),
			RemoveAclConfiguration: new FormControl<boolean | null | undefined>(undefined),
		});

	}

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
		 * Returns the details of a single prepared statement or a list of up to 256 prepared statements for the array of prepared statement names that you provide. Requires you to have access to the workgroup to which the prepared statements belong. If a prepared statement cannot be retrieved for the name specified, the statement is listed in <code>UnprocessedPreparedStatementNames</code>.
		 * Post #X-Amz-Target=AmazonAthena.BatchGetPreparedStatement
		 * @return {BatchGetPreparedStatementOutput} Success
		 */
		BatchGetPreparedStatement(requestBody: BatchGetPreparedStatementInput): Observable<BatchGetPreparedStatementOutput> {
			return this.http.post<BatchGetPreparedStatementOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.BatchGetPreparedStatement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Cancels the capacity reservation with the specified name. Cancelled reservations remain in your account and will be deleted 45 days after cancellation. During the 45 days, you cannot re-purpose or reuse a reservation that has been cancelled, but you can refer to its tags and view it for historical reference.
		 * Post #X-Amz-Target=AmazonAthena.CancelCapacityReservation
		 * @return {CancelCapacityReservationOutput} Success
		 */
		CancelCapacityReservation(requestBody: CancelCapacityReservationInput): Observable<CancelCapacityReservationOutput> {
			return this.http.post<CancelCapacityReservationOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.CancelCapacityReservation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a capacity reservation with the specified name and number of requested data processing units.
		 * Post #X-Amz-Target=AmazonAthena.CreateCapacityReservation
		 * @return {CreateCapacityReservationOutput} Success
		 */
		CreateCapacityReservation(requestBody: CreateCapacityReservationInput): Observable<CreateCapacityReservationOutput> {
			return this.http.post<CreateCapacityReservationOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.CreateCapacityReservation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates (registers) a data catalog with the specified name and properties. Catalogs created are visible to all users of the same Amazon Web Services account.
		 * Post #X-Amz-Target=AmazonAthena.CreateDataCatalog
		 * @return {CreateDataCatalogOutput} Success
		 */
		CreateDataCatalog(requestBody: CreateDataCatalogInput): Observable<CreateDataCatalogOutput> {
			return this.http.post<CreateDataCatalogOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.CreateDataCatalog', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a named query in the specified workgroup. Requires that you have access to the workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonAthena.CreateNamedQuery
		 * @return {CreateNamedQueryOutput} Success
		 */
		CreateNamedQuery(requestBody: CreateNamedQueryInput): Observable<CreateNamedQueryOutput> {
			return this.http.post<CreateNamedQueryOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.CreateNamedQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an empty <code>ipynb</code> file in the specified Apache Spark enabled workgroup. Throws an error if a file in the workgroup with the same name already exists.
		 * Post #X-Amz-Target=AmazonAthena.CreateNotebook
		 * @return {CreateNotebookOutput} Success
		 */
		CreateNotebook(requestBody: CreateNotebookInput): Observable<CreateNotebookOutput> {
			return this.http.post<CreateNotebookOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.CreateNotebook', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a prepared statement for use with SQL queries in Athena.
		 * Post #X-Amz-Target=AmazonAthena.CreatePreparedStatement
		 * @return {CreatePreparedStatementOutput} Success
		 */
		CreatePreparedStatement(requestBody: CreatePreparedStatementInput): Observable<CreatePreparedStatementOutput> {
			return this.http.post<CreatePreparedStatementOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.CreatePreparedStatement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets an authentication token and the URL at which the notebook can be accessed. During programmatic access, <code>CreatePresignedNotebookUrl</code> must be called every 10 minutes to refresh the authentication token. For information about granting programmatic access, see <a href="https://docs.aws.amazon.com/athena/latest/ug/setting-up.html#setting-up-grant-programmatic-access">Grant programmatic access</a>.
		 * Post #X-Amz-Target=AmazonAthena.CreatePresignedNotebookUrl
		 * @return {CreatePresignedNotebookUrlResponse} Success
		 */
		CreatePresignedNotebookUrl(requestBody: CreatePresignedNotebookUrlRequest): Observable<CreatePresignedNotebookUrlResponse> {
			return this.http.post<CreatePresignedNotebookUrlResponse>(this.baseUri + '#X-Amz-Target=AmazonAthena.CreatePresignedNotebookUrl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a workgroup with the specified name. A workgroup can be an Apache Spark enabled workgroup or an Athena SQL workgroup.
		 * Post #X-Amz-Target=AmazonAthena.CreateWorkGroup
		 * @return {CreateWorkGroupOutput} Success
		 */
		CreateWorkGroup(requestBody: CreateWorkGroupInput): Observable<CreateWorkGroupOutput> {
			return this.http.post<CreateWorkGroupOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.CreateWorkGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a cancelled capacity reservation. A reservation must be cancelled before it can be deleted. A deleted reservation is immediately removed from your account and can no longer be referenced, including by its ARN. A deleted reservation cannot be called by <code>GetCapacityReservation</code>, and deleted reservations do not appear in the output of <code>ListCapacityReservations</code>.
		 * Post #X-Amz-Target=AmazonAthena.DeleteCapacityReservation
		 * @return {DeleteCapacityReservationOutput} Success
		 */
		DeleteCapacityReservation(requestBody: DeleteCapacityReservationInput): Observable<DeleteCapacityReservationOutput> {
			return this.http.post<DeleteCapacityReservationOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.DeleteCapacityReservation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Deletes the named query if you have access to the workgroup in which the query was saved.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonAthena.DeleteNamedQuery
		 * @return {DeleteNamedQueryOutput} Success
		 */
		DeleteNamedQuery(requestBody: DeleteNamedQueryInput): Observable<DeleteNamedQueryOutput> {
			return this.http.post<DeleteNamedQueryOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.DeleteNamedQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified notebook.
		 * Post #X-Amz-Target=AmazonAthena.DeleteNotebook
		 * @return {DeleteNotebookOutput} Success
		 */
		DeleteNotebook(requestBody: DeleteNotebookInput): Observable<DeleteNotebookOutput> {
			return this.http.post<DeleteNotebookOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.DeleteNotebook', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the prepared statement with the specified name from the specified workgroup.
		 * Post #X-Amz-Target=AmazonAthena.DeletePreparedStatement
		 * @return {DeletePreparedStatementOutput} Success
		 */
		DeletePreparedStatement(requestBody: DeletePreparedStatementInput): Observable<DeletePreparedStatementOutput> {
			return this.http.post<DeletePreparedStatementOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.DeletePreparedStatement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Exports the specified notebook and its metadata.
		 * Post #X-Amz-Target=AmazonAthena.ExportNotebook
		 * @return {ExportNotebookOutput} Success
		 */
		ExportNotebook(requestBody: ExportNotebookInput): Observable<ExportNotebookOutput> {
			return this.http.post<ExportNotebookOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.ExportNotebook', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a previously submitted calculation execution.
		 * Post #X-Amz-Target=AmazonAthena.GetCalculationExecution
		 * @return {GetCalculationExecutionResponse} Success
		 */
		GetCalculationExecution(requestBody: GetCalculationExecutionRequest): Observable<GetCalculationExecutionResponse> {
			return this.http.post<GetCalculationExecutionResponse>(this.baseUri + '#X-Amz-Target=AmazonAthena.GetCalculationExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the unencrypted code that was executed for the calculation.
		 * Post #X-Amz-Target=AmazonAthena.GetCalculationExecutionCode
		 * @return {GetCalculationExecutionCodeResponse} Success
		 */
		GetCalculationExecutionCode(requestBody: GetCalculationExecutionCodeRequest): Observable<GetCalculationExecutionCodeResponse> {
			return this.http.post<GetCalculationExecutionCodeResponse>(this.baseUri + '#X-Amz-Target=AmazonAthena.GetCalculationExecutionCode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the status of a current calculation.
		 * Post #X-Amz-Target=AmazonAthena.GetCalculationExecutionStatus
		 * @return {GetCalculationExecutionStatusResponse} Success
		 */
		GetCalculationExecutionStatus(requestBody: GetCalculationExecutionStatusRequest): Observable<GetCalculationExecutionStatusResponse> {
			return this.http.post<GetCalculationExecutionStatusResponse>(this.baseUri + '#X-Amz-Target=AmazonAthena.GetCalculationExecutionStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the capacity assignment configuration for a capacity reservation, if one exists.
		 * Post #X-Amz-Target=AmazonAthena.GetCapacityAssignmentConfiguration
		 * @return {GetCapacityAssignmentConfigurationOutput} Success
		 */
		GetCapacityAssignmentConfiguration(requestBody: GetCapacityAssignmentConfigurationInput): Observable<GetCapacityAssignmentConfigurationOutput> {
			return this.http.post<GetCapacityAssignmentConfigurationOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.GetCapacityAssignmentConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the capacity reservation with the specified name.
		 * Post #X-Amz-Target=AmazonAthena.GetCapacityReservation
		 * @return {GetCapacityReservationOutput} Success
		 */
		GetCapacityReservation(requestBody: GetCapacityReservationInput): Observable<GetCapacityReservationOutput> {
			return this.http.post<GetCapacityReservationOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.GetCapacityReservation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Returns a database object for the specified database and data catalog.
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
		 * Retrieves notebook metadata for the specified notebook ID.
		 * Post #X-Amz-Target=AmazonAthena.GetNotebookMetadata
		 * @return {GetNotebookMetadataOutput} Success
		 */
		GetNotebookMetadata(requestBody: GetNotebookMetadataInput): Observable<GetNotebookMetadataOutput> {
			return this.http.post<GetNotebookMetadataOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.GetNotebookMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the prepared statement with the specified name from the specified workgroup.
		 * Post #X-Amz-Target=AmazonAthena.GetPreparedStatement
		 * @return {GetPreparedStatementOutput} Success
		 */
		GetPreparedStatement(requestBody: GetPreparedStatementInput): Observable<GetPreparedStatementOutput> {
			return this.http.post<GetPreparedStatementOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.GetPreparedStatement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Streams the results of a single query execution specified by <code>QueryExecutionId</code> from the Athena query results location in Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Working with query results, recent queries, and output files</a> in the <i>Amazon Athena User Guide</i>. This request does not execute the query but returns results. Use <a>StartQueryExecution</a> to run a query.</p> <p>To stream query results successfully, the IAM principal with permission to call <code>GetQueryResults</code> also must have permissions to the Amazon S3 <code>GetObject</code> action for the Athena query results location.</p> <important> <p>IAM principals with permission to the Amazon S3 <code>GetObject</code> action for the query results location are able to retrieve query results from Amazon S3 even if permission to the <code>GetQueryResults</code> action is denied. To restrict user or role access, ensure that Amazon S3 permissions to the Athena query location are denied.</p> </important>
		 * Post #X-Amz-Target=AmazonAthena.GetQueryResults
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetQueryResultsOutput} Success
		 */
		GetQueryResults(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetQueryResultsInput): Observable<GetQueryResultsOutput> {
			return this.http.post<GetQueryResultsOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.GetQueryResults?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns query execution runtime statistics related to a single execution of a query if you have access to the workgroup in which the query ran. Query execution runtime statistics are returned only when <a>QueryExecutionStatus$State</a> is in a SUCCEEDED or FAILED state. Stage-level input and output row count and data size statistics are not shown when a query has row-level filters defined in Lake Formation.
		 * Post #X-Amz-Target=AmazonAthena.GetQueryRuntimeStatistics
		 * @return {GetQueryRuntimeStatisticsOutput} Success
		 */
		GetQueryRuntimeStatistics(requestBody: GetQueryRuntimeStatisticsInput): Observable<GetQueryRuntimeStatisticsOutput> {
			return this.http.post<GetQueryRuntimeStatisticsOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.GetQueryRuntimeStatistics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the full details of a previously created session, including the session status and configuration.
		 * Post #X-Amz-Target=AmazonAthena.GetSession
		 * @return {GetSessionResponse} Success
		 */
		GetSession(requestBody: GetSessionRequest): Observable<GetSessionResponse> {
			return this.http.post<GetSessionResponse>(this.baseUri + '#X-Amz-Target=AmazonAthena.GetSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the current status of a session.
		 * Post #X-Amz-Target=AmazonAthena.GetSessionStatus
		 * @return {GetSessionStatusResponse} Success
		 */
		GetSessionStatus(requestBody: GetSessionStatusRequest): Observable<GetSessionStatusResponse> {
			return this.http.post<GetSessionStatusResponse>(this.baseUri + '#X-Amz-Target=AmazonAthena.GetSessionStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Imports a single <code>ipynb</code> file to a Spark enabled workgroup. The maximum file size that can be imported is 10 megabytes. If an <code>ipynb</code> file with the same name already exists in the workgroup, throws an error.
		 * Post #X-Amz-Target=AmazonAthena.ImportNotebook
		 * @return {ImportNotebookOutput} Success
		 */
		ImportNotebook(requestBody: ImportNotebookInput): Observable<ImportNotebookOutput> {
			return this.http.post<ImportNotebookOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.ImportNotebook', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the supported DPU sizes for the supported application runtimes (for example, <code>Athena notebook version 1</code>).
		 * Post #X-Amz-Target=AmazonAthena.ListApplicationDPUSizes
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListApplicationDPUSizesOutput} Success
		 */
		ListApplicationDPUSizes(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListApplicationDPUSizesInput): Observable<ListApplicationDPUSizesOutput> {
			return this.http.post<ListApplicationDPUSizesOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.ListApplicationDPUSizes?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the calculations that have been submitted to a session in descending order. Newer calculations are listed first; older calculations are listed later.
		 * Post #X-Amz-Target=AmazonAthena.ListCalculationExecutions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCalculationExecutionsResponse} Success
		 */
		ListCalculationExecutions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCalculationExecutionsRequest): Observable<ListCalculationExecutionsResponse> {
			return this.http.post<ListCalculationExecutionsResponse>(this.baseUri + '#X-Amz-Target=AmazonAthena.ListCalculationExecutions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the capacity reservations for the current account.
		 * Post #X-Amz-Target=AmazonAthena.ListCapacityReservations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCapacityReservationsOutput} Success
		 */
		ListCapacityReservations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCapacityReservationsInput): Observable<ListCapacityReservationsOutput> {
			return this.http.post<ListCapacityReservationsOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.ListCapacityReservations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the data catalogs in the current Amazon Web Services account.</p> <note> <p>In the Athena console, data catalogs are listed as "data sources" on the <b>Data sources</b> page under the <b>Data source name</b> column.</p> </note>
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
		 * Returns a list of engine versions that are available to choose from, including the Auto option.
		 * Post #X-Amz-Target=AmazonAthena.ListEngineVersions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEngineVersionsOutput} Success
		 */
		ListEngineVersions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListEngineVersionsInput): Observable<ListEngineVersionsOutput> {
			return this.http.post<ListEngineVersionsOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.ListEngineVersions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists, in descending order, the executors that joined a session. Newer executors are listed first; older executors are listed later. The result can be optionally filtered by state.
		 * Post #X-Amz-Target=AmazonAthena.ListExecutors
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListExecutorsResponse} Success
		 */
		ListExecutors(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListExecutorsRequest): Observable<ListExecutorsResponse> {
			return this.http.post<ListExecutorsResponse>(this.baseUri + '#X-Amz-Target=AmazonAthena.ListExecutors?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides a list of available query IDs only for queries saved in the specified workgroup. Requires that you have access to the specified workgroup. If a workgroup is not specified, lists the saved queries for the primary workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonAthena.ListNamedQueries
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListNamedQueriesOutput} Success
		 */
		ListNamedQueries(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListNamedQueriesInput): Observable<ListNamedQueriesOutput> {
			return this.http.post<ListNamedQueriesOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.ListNamedQueries?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Displays the notebook files for the specified workgroup in paginated format.
		 * Post #X-Amz-Target=AmazonAthena.ListNotebookMetadata
		 * @return {ListNotebookMetadataOutput} Success
		 */
		ListNotebookMetadata(requestBody: ListNotebookMetadataInput): Observable<ListNotebookMetadataOutput> {
			return this.http.post<ListNotebookMetadataOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.ListNotebookMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists, in descending order, the sessions that have been created in a notebook that are in an active state like <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code> or <code>BUSY</code>. Newer sessions are listed first; older sessions are listed later.
		 * Post #X-Amz-Target=AmazonAthena.ListNotebookSessions
		 * @return {ListNotebookSessionsResponse} Success
		 */
		ListNotebookSessions(requestBody: ListNotebookSessionsRequest): Observable<ListNotebookSessionsResponse> {
			return this.http.post<ListNotebookSessionsResponse>(this.baseUri + '#X-Amz-Target=AmazonAthena.ListNotebookSessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the prepared statements in the specified workgroup.
		 * Post #X-Amz-Target=AmazonAthena.ListPreparedStatements
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPreparedStatementsOutput} Success
		 */
		ListPreparedStatements(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPreparedStatementsInput): Observable<ListPreparedStatementsOutput> {
			return this.http.post<ListPreparedStatementsOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.ListPreparedStatements?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides a list of available query execution IDs for the queries in the specified workgroup. If a workgroup is not specified, returns a list of query execution IDs for the primary workgroup. Requires you to have access to the workgroup in which the queries ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonAthena.ListQueryExecutions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListQueryExecutionsOutput} Success
		 */
		ListQueryExecutions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListQueryExecutionsInput): Observable<ListQueryExecutionsOutput> {
			return this.http.post<ListQueryExecutionsOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.ListQueryExecutions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the sessions in a workgroup that are in an active state like <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code>, or <code>BUSY</code>. Newer sessions are listed first; older sessions are listed later.
		 * Post #X-Amz-Target=AmazonAthena.ListSessions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSessionsResponse} Success
		 */
		ListSessions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListSessionsRequest): Observable<ListSessionsResponse> {
			return this.http.post<ListSessionsResponse>(this.baseUri + '#X-Amz-Target=AmazonAthena.ListSessions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Lists the tags associated with an Athena resource.
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
		 * Puts a new capacity assignment configuration for a specified capacity reservation. If a capacity assignment configuration already exists for the capacity reservation, replaces the existing capacity assignment configuration.
		 * Post #X-Amz-Target=AmazonAthena.PutCapacityAssignmentConfiguration
		 * @return {PutCapacityAssignmentConfigurationOutput} Success
		 */
		PutCapacityAssignmentConfiguration(requestBody: PutCapacityAssignmentConfigurationInput): Observable<PutCapacityAssignmentConfigurationOutput> {
			return this.http.post<PutCapacityAssignmentConfigurationOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.PutCapacityAssignmentConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Submits calculations for execution within a session. You can supply the code to run as an inline code block within the request.
		 * Post #X-Amz-Target=AmazonAthena.StartCalculationExecution
		 * @return {StartCalculationExecutionResponse} Success
		 */
		StartCalculationExecution(requestBody: StartCalculationExecutionRequest): Observable<StartCalculationExecutionResponse> {
			return this.http.post<StartCalculationExecutionResponse>(this.baseUri + '#X-Amz-Target=AmazonAthena.StartCalculationExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Runs the SQL query statements contained in the <code>Query</code>. Requires you to have access to the workgroup in which the query ran. Running queries against an external catalog requires <a>GetDataCatalog</a> permission to the catalog. For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.
		 * Post #X-Amz-Target=AmazonAthena.StartQueryExecution
		 * @return {StartQueryExecutionOutput} Success
		 */
		StartQueryExecution(requestBody: StartQueryExecutionInput): Observable<StartQueryExecutionOutput> {
			return this.http.post<StartQueryExecutionOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.StartQueryExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a session for running calculations within a workgroup. The session is ready when it reaches an <code>IDLE</code> state.
		 * Post #X-Amz-Target=AmazonAthena.StartSession
		 * @return {StartSessionResponse} Success
		 */
		StartSession(requestBody: StartSessionRequest): Observable<StartSessionResponse> {
			return this.http.post<StartSessionResponse>(this.baseUri + '#X-Amz-Target=AmazonAthena.StartSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Requests the cancellation of a calculation. A <code>StopCalculationExecution</code> call on a calculation that is already in a terminal state (for example, <code>STOPPED</code>, <code>FAILED</code>, or <code>COMPLETED</code>) succeeds but has no effect.</p> <note> <p>Cancelling a calculation is done on a best effort basis. If a calculation cannot be cancelled, you can be charged for its completion. If you are concerned about being charged for a calculation that cannot be cancelled, consider terminating the session in which the calculation is running.</p> </note>
		 * Post #X-Amz-Target=AmazonAthena.StopCalculationExecution
		 * @return {StopCalculationExecutionResponse} Success
		 */
		StopCalculationExecution(requestBody: StopCalculationExecutionRequest): Observable<StopCalculationExecutionResponse> {
			return this.http.post<StopCalculationExecutionResponse>(this.baseUri + '#X-Amz-Target=AmazonAthena.StopCalculationExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops a query execution. Requires you to have access to the workgroup in which the query ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonAthena.StopQueryExecution
		 * @return {StopQueryExecutionOutput} Success
		 */
		StopQueryExecution(requestBody: StopQueryExecutionInput): Observable<StopQueryExecutionOutput> {
			return this.http.post<StopQueryExecutionOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.StopQueryExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds one or more tags to an Athena resource. A tag is a label that you assign to a resource. Each tag consists of a key and an optional value, both of which you define. For example, you can use tags to categorize Athena workgroups, data catalogs, or capacity reservations by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter the resources in your account. For best practices, see <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one tag, separate them by commas.
		 * Post #X-Amz-Target=AmazonAthena.TagResource
		 * @return {TagResourceOutput} Success
		 */
		TagResource(requestBody: TagResourceInput): Observable<TagResourceOutput> {
			return this.http.post<TagResourceOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Terminates an active session. A <code>TerminateSession</code> call on a session that is already inactive (for example, in a <code>FAILED</code>, <code>TERMINATED</code> or <code>TERMINATING</code> state) succeeds but has no effect. Calculations running in the session when <code>TerminateSession</code> is called are forcefully stopped, but may display as <code>FAILED</code> instead of <code>STOPPED</code>.
		 * Post #X-Amz-Target=AmazonAthena.TerminateSession
		 * @return {TerminateSessionResponse} Success
		 */
		TerminateSession(requestBody: TerminateSessionRequest): Observable<TerminateSessionResponse> {
			return this.http.post<TerminateSessionResponse>(this.baseUri + '#X-Amz-Target=AmazonAthena.TerminateSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from an Athena resource.
		 * Post #X-Amz-Target=AmazonAthena.UntagResource
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(requestBody: UntagResourceInput): Observable<UntagResourceOutput> {
			return this.http.post<UntagResourceOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the number of requested data processing units for the capacity reservation with the specified name.
		 * Post #X-Amz-Target=AmazonAthena.UpdateCapacityReservation
		 * @return {UpdateCapacityReservationOutput} Success
		 */
		UpdateCapacityReservation(requestBody: UpdateCapacityReservationInput): Observable<UpdateCapacityReservationOutput> {
			return this.http.post<UpdateCapacityReservationOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.UpdateCapacityReservation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Updates a <a>NamedQuery</a> object. The database or workgroup cannot be updated.
		 * Post #X-Amz-Target=AmazonAthena.UpdateNamedQuery
		 * @return {UpdateNamedQueryOutput} Success
		 */
		UpdateNamedQuery(requestBody: UpdateNamedQueryInput): Observable<UpdateNamedQueryOutput> {
			return this.http.post<UpdateNamedQueryOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.UpdateNamedQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the contents of a Spark notebook.
		 * Post #X-Amz-Target=AmazonAthena.UpdateNotebook
		 * @return {UpdateNotebookOutput} Success
		 */
		UpdateNotebook(requestBody: UpdateNotebookInput): Observable<UpdateNotebookOutput> {
			return this.http.post<UpdateNotebookOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.UpdateNotebook', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the metadata for a notebook.
		 * Post #X-Amz-Target=AmazonAthena.UpdateNotebookMetadata
		 * @return {UpdateNotebookMetadataOutput} Success
		 */
		UpdateNotebookMetadata(requestBody: UpdateNotebookMetadataInput): Observable<UpdateNotebookMetadataOutput> {
			return this.http.post<UpdateNotebookMetadataOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.UpdateNotebookMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a prepared statement.
		 * Post #X-Amz-Target=AmazonAthena.UpdatePreparedStatement
		 * @return {UpdatePreparedStatementOutput} Success
		 */
		UpdatePreparedStatement(requestBody: UpdatePreparedStatementInput): Observable<UpdatePreparedStatementOutput> {
			return this.http.post<UpdatePreparedStatementOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.UpdatePreparedStatement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the workgroup with the specified name. The workgroup's name cannot be changed. Only <code>ConfigurationUpdates</code> can be specified.
		 * Post #X-Amz-Target=AmazonAthena.UpdateWorkGroup
		 * @return {UpdateWorkGroupOutput} Success
		 */
		UpdateWorkGroup(requestBody: UpdateWorkGroupInput): Observable<UpdateWorkGroupOutput> {
			return this.http.post<UpdateWorkGroupOutput>(this.baseUri + '#X-Amz-Target=AmazonAthena.UpdateWorkGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum BatchGetNamedQueryX_Amz_Target { 'AmazonAthena.BatchGetNamedQuery' = 'AmazonAthena.BatchGetNamedQuery' }

	export enum BatchGetPreparedStatementX_Amz_Target { 'AmazonAthena.BatchGetPreparedStatement' = 'AmazonAthena.BatchGetPreparedStatement' }

	export enum BatchGetQueryExecutionX_Amz_Target { 'AmazonAthena.BatchGetQueryExecution' = 'AmazonAthena.BatchGetQueryExecution' }

	export enum CancelCapacityReservationX_Amz_Target { 'AmazonAthena.CancelCapacityReservation' = 'AmazonAthena.CancelCapacityReservation' }

	export enum CreateCapacityReservationX_Amz_Target { 'AmazonAthena.CreateCapacityReservation' = 'AmazonAthena.CreateCapacityReservation' }

	export enum CreateDataCatalogX_Amz_Target { 'AmazonAthena.CreateDataCatalog' = 'AmazonAthena.CreateDataCatalog' }

	export enum CreateNamedQueryX_Amz_Target { 'AmazonAthena.CreateNamedQuery' = 'AmazonAthena.CreateNamedQuery' }

	export enum CreateNotebookX_Amz_Target { 'AmazonAthena.CreateNotebook' = 'AmazonAthena.CreateNotebook' }

	export enum CreatePreparedStatementX_Amz_Target { 'AmazonAthena.CreatePreparedStatement' = 'AmazonAthena.CreatePreparedStatement' }

	export enum CreatePresignedNotebookUrlX_Amz_Target { 'AmazonAthena.CreatePresignedNotebookUrl' = 'AmazonAthena.CreatePresignedNotebookUrl' }

	export enum CreateWorkGroupX_Amz_Target { 'AmazonAthena.CreateWorkGroup' = 'AmazonAthena.CreateWorkGroup' }

	export enum DeleteCapacityReservationX_Amz_Target { 'AmazonAthena.DeleteCapacityReservation' = 'AmazonAthena.DeleteCapacityReservation' }

	export enum DeleteDataCatalogX_Amz_Target { 'AmazonAthena.DeleteDataCatalog' = 'AmazonAthena.DeleteDataCatalog' }

	export enum DeleteNamedQueryX_Amz_Target { 'AmazonAthena.DeleteNamedQuery' = 'AmazonAthena.DeleteNamedQuery' }

	export enum DeleteNotebookX_Amz_Target { 'AmazonAthena.DeleteNotebook' = 'AmazonAthena.DeleteNotebook' }

	export enum DeletePreparedStatementX_Amz_Target { 'AmazonAthena.DeletePreparedStatement' = 'AmazonAthena.DeletePreparedStatement' }

	export enum DeleteWorkGroupX_Amz_Target { 'AmazonAthena.DeleteWorkGroup' = 'AmazonAthena.DeleteWorkGroup' }

	export enum ExportNotebookX_Amz_Target { 'AmazonAthena.ExportNotebook' = 'AmazonAthena.ExportNotebook' }

	export enum GetCalculationExecutionX_Amz_Target { 'AmazonAthena.GetCalculationExecution' = 'AmazonAthena.GetCalculationExecution' }

	export enum GetCalculationExecutionCodeX_Amz_Target { 'AmazonAthena.GetCalculationExecutionCode' = 'AmazonAthena.GetCalculationExecutionCode' }

	export enum GetCalculationExecutionStatusX_Amz_Target { 'AmazonAthena.GetCalculationExecutionStatus' = 'AmazonAthena.GetCalculationExecutionStatus' }

	export enum GetCapacityAssignmentConfigurationX_Amz_Target { 'AmazonAthena.GetCapacityAssignmentConfiguration' = 'AmazonAthena.GetCapacityAssignmentConfiguration' }

	export enum GetCapacityReservationX_Amz_Target { 'AmazonAthena.GetCapacityReservation' = 'AmazonAthena.GetCapacityReservation' }

	export enum GetDataCatalogX_Amz_Target { 'AmazonAthena.GetDataCatalog' = 'AmazonAthena.GetDataCatalog' }

	export enum GetDatabaseX_Amz_Target { 'AmazonAthena.GetDatabase' = 'AmazonAthena.GetDatabase' }

	export enum GetNamedQueryX_Amz_Target { 'AmazonAthena.GetNamedQuery' = 'AmazonAthena.GetNamedQuery' }

	export enum GetNotebookMetadataX_Amz_Target { 'AmazonAthena.GetNotebookMetadata' = 'AmazonAthena.GetNotebookMetadata' }

	export enum GetPreparedStatementX_Amz_Target { 'AmazonAthena.GetPreparedStatement' = 'AmazonAthena.GetPreparedStatement' }

	export enum GetQueryExecutionX_Amz_Target { 'AmazonAthena.GetQueryExecution' = 'AmazonAthena.GetQueryExecution' }

	export enum GetQueryResultsX_Amz_Target { 'AmazonAthena.GetQueryResults' = 'AmazonAthena.GetQueryResults' }

	export enum GetQueryRuntimeStatisticsX_Amz_Target { 'AmazonAthena.GetQueryRuntimeStatistics' = 'AmazonAthena.GetQueryRuntimeStatistics' }

	export enum GetSessionX_Amz_Target { 'AmazonAthena.GetSession' = 'AmazonAthena.GetSession' }

	export enum GetSessionStatusX_Amz_Target { 'AmazonAthena.GetSessionStatus' = 'AmazonAthena.GetSessionStatus' }

	export enum GetTableMetadataX_Amz_Target { 'AmazonAthena.GetTableMetadata' = 'AmazonAthena.GetTableMetadata' }

	export enum GetWorkGroupX_Amz_Target { 'AmazonAthena.GetWorkGroup' = 'AmazonAthena.GetWorkGroup' }

	export enum ImportNotebookX_Amz_Target { 'AmazonAthena.ImportNotebook' = 'AmazonAthena.ImportNotebook' }

	export enum ListApplicationDPUSizesX_Amz_Target { 'AmazonAthena.ListApplicationDPUSizes' = 'AmazonAthena.ListApplicationDPUSizes' }

	export enum ListCalculationExecutionsX_Amz_Target { 'AmazonAthena.ListCalculationExecutions' = 'AmazonAthena.ListCalculationExecutions' }

	export enum ListCapacityReservationsX_Amz_Target { 'AmazonAthena.ListCapacityReservations' = 'AmazonAthena.ListCapacityReservations' }

	export enum ListDataCatalogsX_Amz_Target { 'AmazonAthena.ListDataCatalogs' = 'AmazonAthena.ListDataCatalogs' }

	export enum ListDatabasesX_Amz_Target { 'AmazonAthena.ListDatabases' = 'AmazonAthena.ListDatabases' }

	export enum ListEngineVersionsX_Amz_Target { 'AmazonAthena.ListEngineVersions' = 'AmazonAthena.ListEngineVersions' }

	export enum ListExecutorsX_Amz_Target { 'AmazonAthena.ListExecutors' = 'AmazonAthena.ListExecutors' }

	export enum ListNamedQueriesX_Amz_Target { 'AmazonAthena.ListNamedQueries' = 'AmazonAthena.ListNamedQueries' }

	export enum ListNotebookMetadataX_Amz_Target { 'AmazonAthena.ListNotebookMetadata' = 'AmazonAthena.ListNotebookMetadata' }

	export enum ListNotebookSessionsX_Amz_Target { 'AmazonAthena.ListNotebookSessions' = 'AmazonAthena.ListNotebookSessions' }

	export enum ListPreparedStatementsX_Amz_Target { 'AmazonAthena.ListPreparedStatements' = 'AmazonAthena.ListPreparedStatements' }

	export enum ListQueryExecutionsX_Amz_Target { 'AmazonAthena.ListQueryExecutions' = 'AmazonAthena.ListQueryExecutions' }

	export enum ListSessionsX_Amz_Target { 'AmazonAthena.ListSessions' = 'AmazonAthena.ListSessions' }

	export enum ListTableMetadataX_Amz_Target { 'AmazonAthena.ListTableMetadata' = 'AmazonAthena.ListTableMetadata' }

	export enum ListTagsForResourceX_Amz_Target { 'AmazonAthena.ListTagsForResource' = 'AmazonAthena.ListTagsForResource' }

	export enum ListWorkGroupsX_Amz_Target { 'AmazonAthena.ListWorkGroups' = 'AmazonAthena.ListWorkGroups' }

	export enum PutCapacityAssignmentConfigurationX_Amz_Target { 'AmazonAthena.PutCapacityAssignmentConfiguration' = 'AmazonAthena.PutCapacityAssignmentConfiguration' }

	export enum StartCalculationExecutionX_Amz_Target { 'AmazonAthena.StartCalculationExecution' = 'AmazonAthena.StartCalculationExecution' }

	export enum StartQueryExecutionX_Amz_Target { 'AmazonAthena.StartQueryExecution' = 'AmazonAthena.StartQueryExecution' }

	export enum StartSessionX_Amz_Target { 'AmazonAthena.StartSession' = 'AmazonAthena.StartSession' }

	export enum StopCalculationExecutionX_Amz_Target { 'AmazonAthena.StopCalculationExecution' = 'AmazonAthena.StopCalculationExecution' }

	export enum StopQueryExecutionX_Amz_Target { 'AmazonAthena.StopQueryExecution' = 'AmazonAthena.StopQueryExecution' }

	export enum TagResourceX_Amz_Target { 'AmazonAthena.TagResource' = 'AmazonAthena.TagResource' }

	export enum TerminateSessionX_Amz_Target { 'AmazonAthena.TerminateSession' = 'AmazonAthena.TerminateSession' }

	export enum UntagResourceX_Amz_Target { 'AmazonAthena.UntagResource' = 'AmazonAthena.UntagResource' }

	export enum UpdateCapacityReservationX_Amz_Target { 'AmazonAthena.UpdateCapacityReservation' = 'AmazonAthena.UpdateCapacityReservation' }

	export enum UpdateDataCatalogX_Amz_Target { 'AmazonAthena.UpdateDataCatalog' = 'AmazonAthena.UpdateDataCatalog' }

	export enum UpdateNamedQueryX_Amz_Target { 'AmazonAthena.UpdateNamedQuery' = 'AmazonAthena.UpdateNamedQuery' }

	export enum UpdateNotebookX_Amz_Target { 'AmazonAthena.UpdateNotebook' = 'AmazonAthena.UpdateNotebook' }

	export enum UpdateNotebookMetadataX_Amz_Target { 'AmazonAthena.UpdateNotebookMetadata' = 'AmazonAthena.UpdateNotebookMetadata' }

	export enum UpdatePreparedStatementX_Amz_Target { 'AmazonAthena.UpdatePreparedStatement' = 'AmazonAthena.UpdatePreparedStatement' }

	export enum UpdateWorkGroupX_Amz_Target { 'AmazonAthena.UpdateWorkGroup' = 'AmazonAthena.UpdateWorkGroup' }

}

