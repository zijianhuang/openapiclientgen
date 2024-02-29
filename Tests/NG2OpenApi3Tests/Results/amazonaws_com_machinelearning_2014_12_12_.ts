import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Amazon ML returns the following elements. */
	export interface AddTagsOutput {
		ResourceId?: string;
		ResourceType?: TaggableResourceType;
	}

	/** Amazon ML returns the following elements. */
	export interface AddTagsOutputFormProperties {
		ResourceId: FormControl<string | null | undefined>,
		ResourceType: FormControl<TaggableResourceType | null | undefined>,
	}
	export function CreateAddTagsOutputFormGroup() {
		return new FormGroup<AddTagsOutputFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<TaggableResourceType | null | undefined>(undefined),
		});

	}

	export enum TaggableResourceType { BatchPrediction = 'BatchPrediction', DataSource = 'DataSource', Evaluation = 'Evaluation', MLModel = 'MLModel' }

	export interface AddTagsInput {

		/** Required */
		Tags: Array<Tag>;

		/** Required */
		ResourceId: string;

		/** Required */
		ResourceType: TaggableResourceType;
	}
	export interface AddTagsInputFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<TaggableResourceType | null | undefined>,
	}
	export function CreateAddTagsInputFormGroup() {
		return new FormGroup<AddTagsInputFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceType: new FormControl<TaggableResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A custom key-value pair associated with an ML object, such as an ML model. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	/** A custom key-value pair associated with an ML object, such as an ML model. */
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

	export interface InvalidInputException {
	}
	export interface InvalidInputExceptionFormProperties {
	}
	export function CreateInvalidInputExceptionFormGroup() {
		return new FormGroup<InvalidInputExceptionFormProperties>({
		});

	}

	export interface InvalidTagException {
	}
	export interface InvalidTagExceptionFormProperties {
	}
	export function CreateInvalidTagExceptionFormGroup() {
		return new FormGroup<InvalidTagExceptionFormProperties>({
		});

	}

	export interface TagLimitExceededException {
	}
	export interface TagLimitExceededExceptionFormProperties {
	}
	export function CreateTagLimitExceededExceptionFormGroup() {
		return new FormGroup<TagLimitExceededExceptionFormProperties>({
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


	/** <p> Represents the output of a <code>CreateBatchPrediction</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateBatchPrediction</code> operation is asynchronous. You can poll for status updates by using the <code>&gt;GetBatchPrediction</code> operation and checking the <code>Status</code> parameter of the result. </p> */
	export interface CreateBatchPredictionOutput {
		BatchPredictionId?: string;
	}

	/** <p> Represents the output of a <code>CreateBatchPrediction</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateBatchPrediction</code> operation is asynchronous. You can poll for status updates by using the <code>&gt;GetBatchPrediction</code> operation and checking the <code>Status</code> parameter of the result. </p> */
	export interface CreateBatchPredictionOutputFormProperties {
		BatchPredictionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateBatchPredictionOutputFormGroup() {
		return new FormGroup<CreateBatchPredictionOutputFormProperties>({
			BatchPredictionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBatchPredictionInput {

		/** Required */
		BatchPredictionId: string;
		BatchPredictionName?: string;

		/** Required */
		MLModelId: string;

		/** Required */
		BatchPredictionDataSourceId: string;

		/** Required */
		OutputUri: string;
	}
	export interface CreateBatchPredictionInputFormProperties {

		/** Required */
		BatchPredictionId: FormControl<string | null | undefined>,
		BatchPredictionName: FormControl<string | null | undefined>,

		/** Required */
		MLModelId: FormControl<string | null | undefined>,

		/** Required */
		BatchPredictionDataSourceId: FormControl<string | null | undefined>,

		/** Required */
		OutputUri: FormControl<string | null | undefined>,
	}
	export function CreateCreateBatchPredictionInputFormGroup() {
		return new FormGroup<CreateBatchPredictionInputFormProperties>({
			BatchPredictionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BatchPredictionName: new FormControl<string | null | undefined>(undefined),
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BatchPredictionDataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OutputUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IdempotentParameterMismatchException {
	}
	export interface IdempotentParameterMismatchExceptionFormProperties {
	}
	export function CreateIdempotentParameterMismatchExceptionFormGroup() {
		return new FormGroup<IdempotentParameterMismatchExceptionFormProperties>({
		});

	}


	/** <p> Represents the output of a <code>CreateDataSourceFromRDS</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromRDS</code>&gt; operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. You can inspect the <code>Message</code> when <code>Status</code> shows up as <code>FAILED</code>. You can also check the progress of the copy operation by going to the <code>DataPipeline</code> console and looking up the pipeline using the <code>pipelineId </code> from the describe call.</p> */
	export interface CreateDataSourceFromRDSOutput {
		DataSourceId?: string;
	}

	/** <p> Represents the output of a <code>CreateDataSourceFromRDS</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromRDS</code>&gt; operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. You can inspect the <code>Message</code> when <code>Status</code> shows up as <code>FAILED</code>. You can also check the progress of the copy operation by going to the <code>DataPipeline</code> console and looking up the pipeline using the <code>pipelineId </code> from the describe call.</p> */
	export interface CreateDataSourceFromRDSOutputFormProperties {
		DataSourceId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSourceFromRDSOutputFormGroup() {
		return new FormGroup<CreateDataSourceFromRDSOutputFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDataSourceFromRDSInput {

		/** Required */
		DataSourceId: string;
		DataSourceName?: string;

		/** Required */
		RDSData: RDSDataSpec;

		/** Required */
		RoleARN: string;
		ComputeStatistics?: boolean | null;
	}
	export interface CreateDataSourceFromRDSInputFormProperties {

		/** Required */
		DataSourceId: FormControl<string | null | undefined>,
		DataSourceName: FormControl<string | null | undefined>,

		/** Required */
		RoleARN: FormControl<string | null | undefined>,
		ComputeStatistics: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDataSourceFromRDSInputFormGroup() {
		return new FormGroup<CreateDataSourceFromRDSInputFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataSourceName: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComputeStatistics: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The data specification of an Amazon Relational Database Service (Amazon RDS) <code>DataSource</code>. */
	export interface RDSDataSpec {

		/** Required */
		DatabaseInformation: RDSDatabase;

		/** Required */
		SelectSqlQuery: string;

		/** Required */
		DatabaseCredentials: RDSDatabaseCredentials;

		/** Required */
		S3StagingLocation: string;
		DataRearrangement?: string;
		DataSchema?: string;
		DataSchemaUri?: string;

		/** Required */
		ResourceRole: string;

		/** Required */
		ServiceRole: string;

		/** Required */
		SubnetId: string;

		/** Required */
		SecurityGroupIds: Array<string>;
	}

	/** The data specification of an Amazon Relational Database Service (Amazon RDS) <code>DataSource</code>. */
	export interface RDSDataSpecFormProperties {

		/** Required */
		SelectSqlQuery: FormControl<string | null | undefined>,

		/** Required */
		S3StagingLocation: FormControl<string | null | undefined>,
		DataRearrangement: FormControl<string | null | undefined>,
		DataSchema: FormControl<string | null | undefined>,
		DataSchemaUri: FormControl<string | null | undefined>,

		/** Required */
		ResourceRole: FormControl<string | null | undefined>,

		/** Required */
		ServiceRole: FormControl<string | null | undefined>,

		/** Required */
		SubnetId: FormControl<string | null | undefined>,
	}
	export function CreateRDSDataSpecFormGroup() {
		return new FormGroup<RDSDataSpecFormProperties>({
			SelectSqlQuery: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3StagingLocation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataRearrangement: new FormControl<string | null | undefined>(undefined),
			DataSchema: new FormControl<string | null | undefined>(undefined),
			DataSchemaUri: new FormControl<string | null | undefined>(undefined),
			ResourceRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServiceRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SubnetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The database details of an Amazon RDS database. */
	export interface RDSDatabase {

		/** Required */
		InstanceIdentifier: string;

		/**
		 * The name of a database hosted on an RDS DB instance.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		DatabaseName: string;
	}

	/** The database details of an Amazon RDS database. */
	export interface RDSDatabaseFormProperties {

		/** Required */
		InstanceIdentifier: FormControl<string | null | undefined>,

		/**
		 * The name of a database hosted on an RDS DB instance.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		DatabaseName: FormControl<string | null | undefined>,
	}
	export function CreateRDSDatabaseFormGroup() {
		return new FormGroup<RDSDatabaseFormProperties>({
			InstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
		});

	}


	/** The database credentials to connect to a database on an RDS DB instance. */
	export interface RDSDatabaseCredentials {

		/**
		 * The username to be used by Amazon ML to connect to database on an Amazon RDS instance. The username should have sufficient permissions to execute an <code>RDSSelectSqlQuery</code> query.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		Username: string;

		/**
		 * The password to be used by Amazon ML to connect to a database on an RDS DB instance. The password should have sufficient permissions to execute the <code>RDSSelectQuery</code> query.
		 * Required
		 * Min length: 8
		 * Max length: 128
		 */
		Password: string;
	}

	/** The database credentials to connect to a database on an RDS DB instance. */
	export interface RDSDatabaseCredentialsFormProperties {

		/**
		 * The username to be used by Amazon ML to connect to database on an Amazon RDS instance. The username should have sufficient permissions to execute an <code>RDSSelectSqlQuery</code> query.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * The password to be used by Amazon ML to connect to a database on an RDS DB instance. The password should have sufficient permissions to execute the <code>RDSSelectQuery</code> query.
		 * Required
		 * Min length: 8
		 * Max length: 128
		 */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateRDSDatabaseCredentialsFormGroup() {
		return new FormGroup<RDSDatabaseCredentialsFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(8), Validators.maxLength(128)]),
		});

	}


	/** <p> Represents the output of a <code>CreateDataSourceFromRedshift</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromRedshift</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p> */
	export interface CreateDataSourceFromRedshiftOutput {
		DataSourceId?: string;
	}

	/** <p> Represents the output of a <code>CreateDataSourceFromRedshift</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromRedshift</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p> */
	export interface CreateDataSourceFromRedshiftOutputFormProperties {
		DataSourceId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSourceFromRedshiftOutputFormGroup() {
		return new FormGroup<CreateDataSourceFromRedshiftOutputFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDataSourceFromRedshiftInput {

		/** Required */
		DataSourceId: string;
		DataSourceName?: string;

		/** Required */
		DataSpec: RedshiftDataSpec;

		/** Required */
		RoleARN: string;
		ComputeStatistics?: boolean | null;
	}
	export interface CreateDataSourceFromRedshiftInputFormProperties {

		/** Required */
		DataSourceId: FormControl<string | null | undefined>,
		DataSourceName: FormControl<string | null | undefined>,

		/** Required */
		RoleARN: FormControl<string | null | undefined>,
		ComputeStatistics: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDataSourceFromRedshiftInputFormGroup() {
		return new FormGroup<CreateDataSourceFromRedshiftInputFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataSourceName: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComputeStatistics: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes the data specification of an Amazon Redshift <code>DataSource</code>. */
	export interface RedshiftDataSpec {

		/** Required */
		DatabaseInformation: RedshiftDatabase;

		/** Required */
		SelectSqlQuery: string;

		/** Required */
		DatabaseCredentials: RedshiftDatabaseCredentials;

		/** Required */
		S3StagingLocation: string;
		DataRearrangement?: string;
		DataSchema?: string;
		DataSchemaUri?: string;
	}

	/** Describes the data specification of an Amazon Redshift <code>DataSource</code>. */
	export interface RedshiftDataSpecFormProperties {

		/** Required */
		SelectSqlQuery: FormControl<string | null | undefined>,

		/** Required */
		S3StagingLocation: FormControl<string | null | undefined>,
		DataRearrangement: FormControl<string | null | undefined>,
		DataSchema: FormControl<string | null | undefined>,
		DataSchemaUri: FormControl<string | null | undefined>,
	}
	export function CreateRedshiftDataSpecFormGroup() {
		return new FormGroup<RedshiftDataSpecFormProperties>({
			SelectSqlQuery: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3StagingLocation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataRearrangement: new FormControl<string | null | undefined>(undefined),
			DataSchema: new FormControl<string | null | undefined>(undefined),
			DataSchemaUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the database details required to connect to an Amazon Redshift database. */
	export interface RedshiftDatabase {

		/**
		 * The name of a database hosted on an Amazon Redshift cluster.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		DatabaseName: string;

		/**
		 * The ID of an Amazon Redshift cluster.
		 * Required
		 * Min length: 1
		 * Max length: 63
		 */
		ClusterIdentifier: string;
	}

	/** Describes the database details required to connect to an Amazon Redshift database. */
	export interface RedshiftDatabaseFormProperties {

		/**
		 * The name of a database hosted on an Amazon Redshift cluster.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * The ID of an Amazon Redshift cluster.
		 * Required
		 * Min length: 1
		 * Max length: 63
		 */
		ClusterIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateRedshiftDatabaseFormGroup() {
		return new FormGroup<RedshiftDatabaseFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-z0-9]+')]),
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(63), Validators.pattern('[a-z0-9-]+')]),
		});

	}


	/** Describes the database credentials for connecting to a database on an Amazon Redshift cluster. */
	export interface RedshiftDatabaseCredentials {

		/**
		 * A username to be used by Amazon Machine Learning (Amazon ML)to connect to a database on an Amazon Redshift cluster. The username should have sufficient permissions to execute the <code>RedshiftSelectSqlQuery</code> query. The username should be valid for an Amazon Redshift <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		Username: string;

		/**
		 * A password to be used by Amazon ML to connect to a database on an Amazon Redshift cluster. The password should have sufficient permissions to execute a <code>RedshiftSelectSqlQuery</code> query. The password should be valid for an Amazon Redshift <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.
		 * Required
		 * Min length: 8
		 * Max length: 64
		 */
		Password: string;
	}

	/** Describes the database credentials for connecting to a database on an Amazon Redshift cluster. */
	export interface RedshiftDatabaseCredentialsFormProperties {

		/**
		 * A username to be used by Amazon Machine Learning (Amazon ML)to connect to a database on an Amazon Redshift cluster. The username should have sufficient permissions to execute the <code>RedshiftSelectSqlQuery</code> query. The username should be valid for an Amazon Redshift <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * A password to be used by Amazon ML to connect to a database on an Amazon Redshift cluster. The password should have sufficient permissions to execute a <code>RedshiftSelectSqlQuery</code> query. The password should be valid for an Amazon Redshift <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.
		 * Required
		 * Min length: 8
		 * Max length: 64
		 */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateRedshiftDatabaseCredentialsFormGroup() {
		return new FormGroup<RedshiftDatabaseCredentialsFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(8), Validators.maxLength(64)]),
		});

	}


	/** <p> Represents the output of a <code>CreateDataSourceFromS3</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromS3</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p> */
	export interface CreateDataSourceFromS3Output {
		DataSourceId?: string;
	}

	/** <p> Represents the output of a <code>CreateDataSourceFromS3</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromS3</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p> */
	export interface CreateDataSourceFromS3OutputFormProperties {
		DataSourceId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSourceFromS3OutputFormGroup() {
		return new FormGroup<CreateDataSourceFromS3OutputFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDataSourceFromS3Input {

		/** Required */
		DataSourceId: string;
		DataSourceName?: string;

		/** Required */
		DataSpec: S3DataSpec;
		ComputeStatistics?: boolean | null;
	}
	export interface CreateDataSourceFromS3InputFormProperties {

		/** Required */
		DataSourceId: FormControl<string | null | undefined>,
		DataSourceName: FormControl<string | null | undefined>,
		ComputeStatistics: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDataSourceFromS3InputFormGroup() {
		return new FormGroup<CreateDataSourceFromS3InputFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataSourceName: new FormControl<string | null | undefined>(undefined),
			ComputeStatistics: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  Describes the data specification of a <code>DataSource</code>. */
	export interface S3DataSpec {

		/** Required */
		DataLocationS3: string;
		DataRearrangement?: string;
		DataSchema?: string;
		DataSchemaLocationS3?: string;
	}

	/**  Describes the data specification of a <code>DataSource</code>. */
	export interface S3DataSpecFormProperties {

		/** Required */
		DataLocationS3: FormControl<string | null | undefined>,
		DataRearrangement: FormControl<string | null | undefined>,
		DataSchema: FormControl<string | null | undefined>,
		DataSchemaLocationS3: FormControl<string | null | undefined>,
	}
	export function CreateS3DataSpecFormGroup() {
		return new FormGroup<S3DataSpecFormProperties>({
			DataLocationS3: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataRearrangement: new FormControl<string | null | undefined>(undefined),
			DataSchema: new FormControl<string | null | undefined>(undefined),
			DataSchemaLocationS3: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p> Represents the output of a <code>CreateEvaluation</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p> <code>CreateEvaluation</code> operation is asynchronous. You can poll for status updates by using the <code>GetEvcaluation</code> operation and checking the <code>Status</code> parameter. </p> */
	export interface CreateEvaluationOutput {
		EvaluationId?: string;
	}

	/** <p> Represents the output of a <code>CreateEvaluation</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p> <code>CreateEvaluation</code> operation is asynchronous. You can poll for status updates by using the <code>GetEvcaluation</code> operation and checking the <code>Status</code> parameter. </p> */
	export interface CreateEvaluationOutputFormProperties {
		EvaluationId: FormControl<string | null | undefined>,
	}
	export function CreateCreateEvaluationOutputFormGroup() {
		return new FormGroup<CreateEvaluationOutputFormProperties>({
			EvaluationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEvaluationInput {

		/** Required */
		EvaluationId: string;
		EvaluationName?: string;

		/** Required */
		MLModelId: string;

		/** Required */
		EvaluationDataSourceId: string;
	}
	export interface CreateEvaluationInputFormProperties {

		/** Required */
		EvaluationId: FormControl<string | null | undefined>,
		EvaluationName: FormControl<string | null | undefined>,

		/** Required */
		MLModelId: FormControl<string | null | undefined>,

		/** Required */
		EvaluationDataSourceId: FormControl<string | null | undefined>,
	}
	export function CreateCreateEvaluationInputFormGroup() {
		return new FormGroup<CreateEvaluationInputFormProperties>({
			EvaluationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EvaluationName: new FormControl<string | null | undefined>(undefined),
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EvaluationDataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p> Represents the output of a <code>CreateMLModel</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateMLModel</code> operation is asynchronous. You can poll for status updates by using the <code>GetMLModel</code> operation and checking the <code>Status</code> parameter. </p> */
	export interface CreateMLModelOutput {
		MLModelId?: string;
	}

	/** <p> Represents the output of a <code>CreateMLModel</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateMLModel</code> operation is asynchronous. You can poll for status updates by using the <code>GetMLModel</code> operation and checking the <code>Status</code> parameter. </p> */
	export interface CreateMLModelOutputFormProperties {
		MLModelId: FormControl<string | null | undefined>,
	}
	export function CreateCreateMLModelOutputFormGroup() {
		return new FormGroup<CreateMLModelOutputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMLModelInput {

		/** Required */
		MLModelId: string;
		MLModelName?: string;

		/** Required */
		MLModelType: MLModelType;
		Parameters?: TrainingParameters;

		/** Required */
		TrainingDataSourceId: string;
		Recipe?: string;
		RecipeUri?: string;
	}
	export interface CreateMLModelInputFormProperties {

		/** Required */
		MLModelId: FormControl<string | null | undefined>,
		MLModelName: FormControl<string | null | undefined>,

		/** Required */
		MLModelType: FormControl<MLModelType | null | undefined>,

		/** Required */
		TrainingDataSourceId: FormControl<string | null | undefined>,
		Recipe: FormControl<string | null | undefined>,
		RecipeUri: FormControl<string | null | undefined>,
	}
	export function CreateCreateMLModelInputFormGroup() {
		return new FormGroup<CreateMLModelInputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MLModelName: new FormControl<string | null | undefined>(undefined),
			MLModelType: new FormControl<MLModelType | null | undefined>(undefined, [Validators.required]),
			TrainingDataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Recipe: new FormControl<string | null | undefined>(undefined),
			RecipeUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MLModelType { REGRESSION = 'REGRESSION', BINARY = 'BINARY', MULTICLASS = 'MULTICLASS' }

	export interface TrainingParameters {
	}
	export interface TrainingParametersFormProperties {
	}
	export function CreateTrainingParametersFormGroup() {
		return new FormGroup<TrainingParametersFormProperties>({
		});

	}


	/** <p>Represents the output of an <code>CreateRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>.</p> <p> <b>Note:</b> The endpoint information includes the URI of the <code>MLModel</code>; that is, the location to send online prediction requests for the specified <code>MLModel</code>.</p> */
	export interface CreateRealtimeEndpointOutput {
		MLModelId?: string;
		RealtimeEndpointInfo?: RealtimeEndpointInfo;
	}

	/** <p>Represents the output of an <code>CreateRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>.</p> <p> <b>Note:</b> The endpoint information includes the URI of the <code>MLModel</code>; that is, the location to send online prediction requests for the specified <code>MLModel</code>.</p> */
	export interface CreateRealtimeEndpointOutputFormProperties {
		MLModelId: FormControl<string | null | undefined>,
	}
	export function CreateCreateRealtimeEndpointOutputFormGroup() {
		return new FormGroup<CreateRealtimeEndpointOutputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Describes the real-time endpoint information for an <code>MLModel</code>. */
	export interface RealtimeEndpointInfo {
		PeakRequestsPerSecond?: number | null;
		CreatedAt?: Date;
		EndpointUrl?: string;
		EndpointStatus?: RealtimeEndpointStatus;
	}

	/**  Describes the real-time endpoint information for an <code>MLModel</code>. */
	export interface RealtimeEndpointInfoFormProperties {
		PeakRequestsPerSecond: FormControl<number | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		EndpointUrl: FormControl<string | null | undefined>,
		EndpointStatus: FormControl<RealtimeEndpointStatus | null | undefined>,
	}
	export function CreateRealtimeEndpointInfoFormGroup() {
		return new FormGroup<RealtimeEndpointInfoFormProperties>({
			PeakRequestsPerSecond: new FormControl<number | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			EndpointUrl: new FormControl<string | null | undefined>(undefined),
			EndpointStatus: new FormControl<RealtimeEndpointStatus | null | undefined>(undefined),
		});

	}

	export enum RealtimeEndpointStatus { NONE = 'NONE', READY = 'READY', UPDATING = 'UPDATING', FAILED = 'FAILED' }

	export interface CreateRealtimeEndpointInput {

		/** Required */
		MLModelId: string;
	}
	export interface CreateRealtimeEndpointInputFormProperties {

		/** Required */
		MLModelId: FormControl<string | null | undefined>,
	}
	export function CreateCreateRealtimeEndpointInputFormGroup() {
		return new FormGroup<CreateRealtimeEndpointInputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p> Represents the output of a <code>DeleteBatchPrediction</code> operation.</p> <p>You can use the <code>GetBatchPrediction</code> operation and check the value of the <code>Status</code> parameter to see whether a <code>BatchPrediction</code> is marked as <code>DELETED</code>.</p> */
	export interface DeleteBatchPredictionOutput {
		BatchPredictionId?: string;
	}

	/** <p> Represents the output of a <code>DeleteBatchPrediction</code> operation.</p> <p>You can use the <code>GetBatchPrediction</code> operation and check the value of the <code>Status</code> parameter to see whether a <code>BatchPrediction</code> is marked as <code>DELETED</code>.</p> */
	export interface DeleteBatchPredictionOutputFormProperties {
		BatchPredictionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBatchPredictionOutputFormGroup() {
		return new FormGroup<DeleteBatchPredictionOutputFormProperties>({
			BatchPredictionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteBatchPredictionInput {

		/** Required */
		BatchPredictionId: string;
	}
	export interface DeleteBatchPredictionInputFormProperties {

		/** Required */
		BatchPredictionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBatchPredictionInputFormGroup() {
		return new FormGroup<DeleteBatchPredictionInputFormProperties>({
			BatchPredictionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Represents the output of a <code>DeleteDataSource</code> operation. */
	export interface DeleteDataSourceOutput {
		DataSourceId?: string;
	}

	/**  Represents the output of a <code>DeleteDataSource</code> operation. */
	export interface DeleteDataSourceOutputFormProperties {
		DataSourceId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDataSourceOutputFormGroup() {
		return new FormGroup<DeleteDataSourceOutputFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteDataSourceInput {

		/** Required */
		DataSourceId: string;
	}
	export interface DeleteDataSourceInputFormProperties {

		/** Required */
		DataSourceId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDataSourceInputFormGroup() {
		return new FormGroup<DeleteDataSourceInputFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p> Represents the output of a <code>DeleteEvaluation</code> operation. The output indicates that Amazon Machine Learning (Amazon ML) received the request.</p> <p>You can use the <code>GetEvaluation</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>Evaluation</code> is marked as <code>DELETED</code>.</p> */
	export interface DeleteEvaluationOutput {
		EvaluationId?: string;
	}

	/** <p> Represents the output of a <code>DeleteEvaluation</code> operation. The output indicates that Amazon Machine Learning (Amazon ML) received the request.</p> <p>You can use the <code>GetEvaluation</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>Evaluation</code> is marked as <code>DELETED</code>.</p> */
	export interface DeleteEvaluationOutputFormProperties {
		EvaluationId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEvaluationOutputFormGroup() {
		return new FormGroup<DeleteEvaluationOutputFormProperties>({
			EvaluationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteEvaluationInput {

		/** Required */
		EvaluationId: string;
	}
	export interface DeleteEvaluationInputFormProperties {

		/** Required */
		EvaluationId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEvaluationInputFormGroup() {
		return new FormGroup<DeleteEvaluationInputFormProperties>({
			EvaluationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Represents the output of a <code>DeleteMLModel</code> operation.</p> <p>You can use the <code>GetMLModel</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>MLModel</code> is marked as <code>DELETED</code>.</p> */
	export interface DeleteMLModelOutput {
		MLModelId?: string;
	}

	/** <p>Represents the output of a <code>DeleteMLModel</code> operation.</p> <p>You can use the <code>GetMLModel</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>MLModel</code> is marked as <code>DELETED</code>.</p> */
	export interface DeleteMLModelOutputFormProperties {
		MLModelId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMLModelOutputFormGroup() {
		return new FormGroup<DeleteMLModelOutputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteMLModelInput {

		/** Required */
		MLModelId: string;
	}
	export interface DeleteMLModelInputFormProperties {

		/** Required */
		MLModelId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMLModelInputFormGroup() {
		return new FormGroup<DeleteMLModelInputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Represents the output of an <code>DeleteRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>. </p> */
	export interface DeleteRealtimeEndpointOutput {
		MLModelId?: string;
		RealtimeEndpointInfo?: RealtimeEndpointInfo;
	}

	/** <p>Represents the output of an <code>DeleteRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>. </p> */
	export interface DeleteRealtimeEndpointOutputFormProperties {
		MLModelId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRealtimeEndpointOutputFormGroup() {
		return new FormGroup<DeleteRealtimeEndpointOutputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteRealtimeEndpointInput {

		/** Required */
		MLModelId: string;
	}
	export interface DeleteRealtimeEndpointInputFormProperties {

		/** Required */
		MLModelId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRealtimeEndpointInputFormGroup() {
		return new FormGroup<DeleteRealtimeEndpointInputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Amazon ML returns the following elements. */
	export interface DeleteTagsOutput {
		ResourceId?: string;
		ResourceType?: TaggableResourceType;
	}

	/** Amazon ML returns the following elements. */
	export interface DeleteTagsOutputFormProperties {
		ResourceId: FormControl<string | null | undefined>,
		ResourceType: FormControl<TaggableResourceType | null | undefined>,
	}
	export function CreateDeleteTagsOutputFormGroup() {
		return new FormGroup<DeleteTagsOutputFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<TaggableResourceType | null | undefined>(undefined),
		});

	}

	export interface DeleteTagsInput {

		/** Required */
		TagKeys: Array<string>;

		/** Required */
		ResourceId: string;

		/** Required */
		ResourceType: TaggableResourceType;
	}
	export interface DeleteTagsInputFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<TaggableResourceType | null | undefined>,
	}
	export function CreateDeleteTagsInputFormGroup() {
		return new FormGroup<DeleteTagsInputFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceType: new FormControl<TaggableResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the output of a <code>DescribeBatchPredictions</code> operation. The content is essentially a list of <code>BatchPrediction</code>s. */
	export interface DescribeBatchPredictionsOutput {
		Results?: Array<BatchPrediction>;
		NextToken?: string;
	}

	/** Represents the output of a <code>DescribeBatchPredictions</code> operation. The content is essentially a list of <code>BatchPrediction</code>s. */
	export interface DescribeBatchPredictionsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBatchPredictionsOutputFormGroup() {
		return new FormGroup<DescribeBatchPredictionsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p> Represents the output of a <code>GetBatchPrediction</code> operation.</p> <p> The content consists of the detailed metadata, the status, and the data file information of a <code>Batch Prediction</code>.</p> */
	export interface BatchPrediction {
		BatchPredictionId?: string;
		MLModelId?: string;
		BatchPredictionDataSourceId?: string;
		InputDataLocationS3?: string;
		CreatedByIamUser?: string;
		CreatedAt?: Date;
		LastUpdatedAt?: Date;
		Name?: string;
		Status?: EntityStatus;
		OutputUri?: string;
		Message?: string;

		/**
		 * Long integer type that is a 64-bit signed number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ComputeTime?: number | null;

		/** A timestamp represented in epoch time. */
		FinishedAt?: Date | null;

		/** A timestamp represented in epoch time. */
		StartedAt?: Date | null;

		/**
		 * Long integer type that is a 64-bit signed number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TotalRecordCount?: number | null;

		/**
		 * Long integer type that is a 64-bit signed number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		InvalidRecordCount?: number | null;
	}

	/** <p> Represents the output of a <code>GetBatchPrediction</code> operation.</p> <p> The content consists of the detailed metadata, the status, and the data file information of a <code>Batch Prediction</code>.</p> */
	export interface BatchPredictionFormProperties {
		BatchPredictionId: FormControl<string | null | undefined>,
		MLModelId: FormControl<string | null | undefined>,
		BatchPredictionDataSourceId: FormControl<string | null | undefined>,
		InputDataLocationS3: FormControl<string | null | undefined>,
		CreatedByIamUser: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<EntityStatus | null | undefined>,
		OutputUri: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,

		/**
		 * Long integer type that is a 64-bit signed number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ComputeTime: FormControl<number | null | undefined>,

		/** A timestamp represented in epoch time. */
		FinishedAt: FormControl<Date | null | undefined>,

		/** A timestamp represented in epoch time. */
		StartedAt: FormControl<Date | null | undefined>,

		/**
		 * Long integer type that is a 64-bit signed number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		TotalRecordCount: FormControl<number | null | undefined>,

		/**
		 * Long integer type that is a 64-bit signed number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		InvalidRecordCount: FormControl<number | null | undefined>,
	}
	export function CreateBatchPredictionFormGroup() {
		return new FormGroup<BatchPredictionFormProperties>({
			BatchPredictionId: new FormControl<string | null | undefined>(undefined),
			MLModelId: new FormControl<string | null | undefined>(undefined),
			BatchPredictionDataSourceId: new FormControl<string | null | undefined>(undefined),
			InputDataLocationS3: new FormControl<string | null | undefined>(undefined),
			CreatedByIamUser: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<EntityStatus | null | undefined>(undefined),
			OutputUri: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			ComputeTime: new FormControl<number | null | undefined>(undefined),
			FinishedAt: new FormControl<Date | null | undefined>(undefined),
			StartedAt: new FormControl<Date | null | undefined>(undefined),
			TotalRecordCount: new FormControl<number | null | undefined>(undefined),
			InvalidRecordCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Object status with the following possible values:</p> <ul> <li> <p> <code>PENDING</code> </p> </li> <li> <p> <code>INPROGRESS</code> </p> </li> <li> <p> <code>FAILED</code> </p> </li> <li> <p> <code>COMPLETED</code> </p> </li> <li> <p> <code>DELETED</code> </p> </li> </ul> */
	export enum EntityStatus { PENDING = 'PENDING', INPROGRESS = 'INPROGRESS', FAILED = 'FAILED', COMPLETED = 'COMPLETED', DELETED = 'DELETED' }

	export interface DescribeBatchPredictionsInput {
		FilterVariable?: BatchPredictionFilterVariable;
		EQ?: string;
		GT?: string;
		LT?: string;
		GE?: string;
		LE?: string;
		NE?: string;
		Prefix?: string;
		SortOrder?: SortOrder;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface DescribeBatchPredictionsInputFormProperties {
		FilterVariable: FormControl<BatchPredictionFilterVariable | null | undefined>,
		EQ: FormControl<string | null | undefined>,
		GT: FormControl<string | null | undefined>,
		LT: FormControl<string | null | undefined>,
		GE: FormControl<string | null | undefined>,
		LE: FormControl<string | null | undefined>,
		NE: FormControl<string | null | undefined>,
		Prefix: FormControl<string | null | undefined>,
		SortOrder: FormControl<SortOrder | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeBatchPredictionsInputFormGroup() {
		return new FormGroup<DescribeBatchPredictionsInputFormProperties>({
			FilterVariable: new FormControl<BatchPredictionFilterVariable | null | undefined>(undefined),
			EQ: new FormControl<string | null | undefined>(undefined),
			GT: new FormControl<string | null | undefined>(undefined),
			LT: new FormControl<string | null | undefined>(undefined),
			GE: new FormControl<string | null | undefined>(undefined),
			LE: new FormControl<string | null | undefined>(undefined),
			NE: new FormControl<string | null | undefined>(undefined),
			Prefix: new FormControl<string | null | undefined>(undefined),
			SortOrder: new FormControl<SortOrder | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>A list of the variables to use in searching or filtering <code>BatchPrediction</code>.</p> <ul> <li> <p> <code>CreatedAt</code> - Sets the search criteria to <code>BatchPrediction</code> creation date.</p> </li> <li> <p> <code>Status</code> - Sets the search criteria to <code>BatchPrediction</code> status.</p> </li> <li> <p> <code>Name</code> - Sets the search criteria to the contents of <code>BatchPrediction</code> <code>Name</code>.</p> </li> <li> <p> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>BatchPrediction</code> creation.</p> </li> <li> <p> <code>MLModelId</code> - Sets the search criteria to the <code>MLModel</code> used in the <code>BatchPrediction</code>.</p> </li> <li> <p> <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in the <code>BatchPrediction</code>.</p> </li> <li> <p> <code>DataURI</code> - Sets the search criteria to the data file(s) used in the <code>BatchPrediction</code>. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</p> </li> </ul> */
	export enum BatchPredictionFilterVariable { CreatedAt = 'CreatedAt', LastUpdatedAt = 'LastUpdatedAt', Status = 'Status', Name = 'Name', IAMUser = 'IAMUser', MLModelId = 'MLModelId', DataSourceId = 'DataSourceId', DataURI = 'DataURI' }


	/** <p>The sort order specified in a listing condition. Possible values include the following:</p> <ul> <li> <p> <code>asc</code> - Present the information in ascending order (from A-Z).</p> </li> <li> <p> <code>dsc</code> - Present the information in descending order (from Z-A).</p> </li> </ul> */
	export enum SortOrder { asc = 'asc', dsc = 'dsc' }


	/** Represents the query results from a <a>DescribeDataSources</a> operation. The content is essentially a list of <code>DataSource</code>. */
	export interface DescribeDataSourcesOutput {
		Results?: Array<DataSource>;
		NextToken?: string;
	}

	/** Represents the query results from a <a>DescribeDataSources</a> operation. The content is essentially a list of <code>DataSource</code>. */
	export interface DescribeDataSourcesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDataSourcesOutputFormGroup() {
		return new FormGroup<DescribeDataSourcesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p> Represents the output of the <code>GetDataSource</code> operation. </p> <p> The content consists of the detailed metadata and data file information and the current status of the <code>DataSource</code>. </p> */
	export interface DataSource {
		DataSourceId?: string;
		DataLocationS3?: string;
		DataRearrangement?: string;
		CreatedByIamUser?: string;
		CreatedAt?: Date;
		LastUpdatedAt?: Date;
		DataSizeInBytes?: number | null;
		NumberOfFiles?: number | null;
		Name?: string;
		Status?: EntityStatus;
		Message?: string;

		/** Describes the <code>DataSource</code> details specific to Amazon Redshift. */
		RedshiftMetadata?: RedshiftMetadata;

		/** The datasource details that are specific to Amazon RDS. */
		RDSMetadata?: RDSMetadata;

		/**
		 * The Amazon Resource Name (ARN) of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename.
		 * Min length: 1
		 * Max length: 110
		 */
		RoleARN?: string | null;
		ComputeStatistics?: boolean | null;

		/**
		 * Long integer type that is a 64-bit signed number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ComputeTime?: number | null;

		/** A timestamp represented in epoch time. */
		FinishedAt?: Date | null;

		/** A timestamp represented in epoch time. */
		StartedAt?: Date | null;
	}

	/** <p> Represents the output of the <code>GetDataSource</code> operation. </p> <p> The content consists of the detailed metadata and data file information and the current status of the <code>DataSource</code>. </p> */
	export interface DataSourceFormProperties {
		DataSourceId: FormControl<string | null | undefined>,
		DataLocationS3: FormControl<string | null | undefined>,
		DataRearrangement: FormControl<string | null | undefined>,
		CreatedByIamUser: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
		DataSizeInBytes: FormControl<number | null | undefined>,
		NumberOfFiles: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<EntityStatus | null | undefined>,
		Message: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename.
		 * Min length: 1
		 * Max length: 110
		 */
		RoleARN: FormControl<string | null | undefined>,
		ComputeStatistics: FormControl<boolean | null | undefined>,

		/**
		 * Long integer type that is a 64-bit signed number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ComputeTime: FormControl<number | null | undefined>,

		/** A timestamp represented in epoch time. */
		FinishedAt: FormControl<Date | null | undefined>,

		/** A timestamp represented in epoch time. */
		StartedAt: FormControl<Date | null | undefined>,
	}
	export function CreateDataSourceFormGroup() {
		return new FormGroup<DataSourceFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined),
			DataLocationS3: new FormControl<string | null | undefined>(undefined),
			DataRearrangement: new FormControl<string | null | undefined>(undefined),
			CreatedByIamUser: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			DataSizeInBytes: new FormControl<number | null | undefined>(undefined),
			NumberOfFiles: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<EntityStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(110)]),
			ComputeStatistics: new FormControl<boolean | null | undefined>(undefined),
			ComputeTime: new FormControl<number | null | undefined>(undefined),
			FinishedAt: new FormControl<Date | null | undefined>(undefined),
			StartedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes the <code>DataSource</code> details specific to Amazon Redshift. */
	export interface RedshiftMetadata {

		/** Describes the database details required to connect to an Amazon Redshift database. */
		RedshiftDatabase?: RedshiftDatabase;

		/**
		 * A username to be used by Amazon Machine Learning (Amazon ML)to connect to a database on an Amazon Redshift cluster. The username should have sufficient permissions to execute the <code>RedshiftSelectSqlQuery</code> query. The username should be valid for an Amazon Redshift <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.
		 * Min length: 1
		 * Max length: 128
		 */
		DatabaseUserName?: string | null;
		SelectSqlQuery?: string;
	}

	/** Describes the <code>DataSource</code> details specific to Amazon Redshift. */
	export interface RedshiftMetadataFormProperties {

		/**
		 * A username to be used by Amazon Machine Learning (Amazon ML)to connect to a database on an Amazon Redshift cluster. The username should have sufficient permissions to execute the <code>RedshiftSelectSqlQuery</code> query. The username should be valid for an Amazon Redshift <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.
		 * Min length: 1
		 * Max length: 128
		 */
		DatabaseUserName: FormControl<string | null | undefined>,
		SelectSqlQuery: FormControl<string | null | undefined>,
	}
	export function CreateRedshiftMetadataFormGroup() {
		return new FormGroup<RedshiftMetadataFormProperties>({
			DatabaseUserName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			SelectSqlQuery: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The datasource details that are specific to Amazon RDS. */
	export interface RDSMetadata {
		Database?: RDSDatabase;

		/**
		 * The username to be used by Amazon ML to connect to database on an Amazon RDS instance. The username should have sufficient permissions to execute an <code>RDSSelectSqlQuery</code> query.
		 * Min length: 1
		 * Max length: 128
		 */
		DatabaseUserName?: string | null;
		SelectSqlQuery?: string;
		ResourceRole?: string;
		ServiceRole?: string;
		DataPipelineId?: string;
	}

	/** The datasource details that are specific to Amazon RDS. */
	export interface RDSMetadataFormProperties {

		/**
		 * The username to be used by Amazon ML to connect to database on an Amazon RDS instance. The username should have sufficient permissions to execute an <code>RDSSelectSqlQuery</code> query.
		 * Min length: 1
		 * Max length: 128
		 */
		DatabaseUserName: FormControl<string | null | undefined>,
		SelectSqlQuery: FormControl<string | null | undefined>,
		ResourceRole: FormControl<string | null | undefined>,
		ServiceRole: FormControl<string | null | undefined>,
		DataPipelineId: FormControl<string | null | undefined>,
	}
	export function CreateRDSMetadataFormGroup() {
		return new FormGroup<RDSMetadataFormProperties>({
			DatabaseUserName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			SelectSqlQuery: new FormControl<string | null | undefined>(undefined),
			ResourceRole: new FormControl<string | null | undefined>(undefined),
			ServiceRole: new FormControl<string | null | undefined>(undefined),
			DataPipelineId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDataSourcesInput {
		FilterVariable?: DataSourceFilterVariable;
		EQ?: string;
		GT?: string;
		LT?: string;
		GE?: string;
		LE?: string;
		NE?: string;
		Prefix?: string;
		SortOrder?: SortOrder;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface DescribeDataSourcesInputFormProperties {
		FilterVariable: FormControl<DataSourceFilterVariable | null | undefined>,
		EQ: FormControl<string | null | undefined>,
		GT: FormControl<string | null | undefined>,
		LT: FormControl<string | null | undefined>,
		GE: FormControl<string | null | undefined>,
		LE: FormControl<string | null | undefined>,
		NE: FormControl<string | null | undefined>,
		Prefix: FormControl<string | null | undefined>,
		SortOrder: FormControl<SortOrder | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeDataSourcesInputFormGroup() {
		return new FormGroup<DescribeDataSourcesInputFormProperties>({
			FilterVariable: new FormControl<DataSourceFilterVariable | null | undefined>(undefined),
			EQ: new FormControl<string | null | undefined>(undefined),
			GT: new FormControl<string | null | undefined>(undefined),
			LT: new FormControl<string | null | undefined>(undefined),
			GE: new FormControl<string | null | undefined>(undefined),
			LE: new FormControl<string | null | undefined>(undefined),
			NE: new FormControl<string | null | undefined>(undefined),
			Prefix: new FormControl<string | null | undefined>(undefined),
			SortOrder: new FormControl<SortOrder | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>A list of the variables to use in searching or filtering <code>DataSource</code>.</p> <ul> <li> <p> <code>CreatedAt</code> - Sets the search criteria to <code>DataSource</code> creation date.</p> </li> <li> <p> <code>Status</code> - Sets the search criteria to <code>DataSource</code> status.</p> </li> <li> <p> <code>Name</code> - Sets the search criteria to the contents of <code>DataSource</code> <code>Name</code>.</p> </li> <li> <p> <code>DataUri</code> - Sets the search criteria to the URI of data files used to create the <code>DataSource</code>. The URI can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</p> </li> <li> <p> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>DataSource</code> creation.</p> </li> </ul> <p> <b>Note:</b> The variable names should match the variable names in the <code>DataSource</code>.</p> */
	export enum DataSourceFilterVariable { CreatedAt = 'CreatedAt', LastUpdatedAt = 'LastUpdatedAt', Status = 'Status', Name = 'Name', DataLocationS3 = 'DataLocationS3', IAMUser = 'IAMUser' }


	/** Represents the query results from a <code>DescribeEvaluations</code> operation. The content is essentially a list of <code>Evaluation</code>. */
	export interface DescribeEvaluationsOutput {
		Results?: Array<Evaluation>;
		NextToken?: string;
	}

	/** Represents the query results from a <code>DescribeEvaluations</code> operation. The content is essentially a list of <code>Evaluation</code>. */
	export interface DescribeEvaluationsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEvaluationsOutputFormGroup() {
		return new FormGroup<DescribeEvaluationsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p> Represents the output of <code>GetEvaluation</code> operation. </p> <p>The content consists of the detailed metadata and data file information and the current status of the <code>Evaluation</code>.</p> */
	export interface Evaluation {
		EvaluationId?: string;
		MLModelId?: string;
		EvaluationDataSourceId?: string;
		InputDataLocationS3?: string;
		CreatedByIamUser?: string;
		CreatedAt?: Date;
		LastUpdatedAt?: Date;
		Name?: string;
		Status?: EntityStatus;
		PerformanceMetrics?: PerformanceMetrics;
		Message?: string;

		/**
		 * Long integer type that is a 64-bit signed number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ComputeTime?: number | null;

		/** A timestamp represented in epoch time. */
		FinishedAt?: Date | null;

		/** A timestamp represented in epoch time. */
		StartedAt?: Date | null;
	}

	/** <p> Represents the output of <code>GetEvaluation</code> operation. </p> <p>The content consists of the detailed metadata and data file information and the current status of the <code>Evaluation</code>.</p> */
	export interface EvaluationFormProperties {
		EvaluationId: FormControl<string | null | undefined>,
		MLModelId: FormControl<string | null | undefined>,
		EvaluationDataSourceId: FormControl<string | null | undefined>,
		InputDataLocationS3: FormControl<string | null | undefined>,
		CreatedByIamUser: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<EntityStatus | null | undefined>,
		Message: FormControl<string | null | undefined>,

		/**
		 * Long integer type that is a 64-bit signed number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ComputeTime: FormControl<number | null | undefined>,

		/** A timestamp represented in epoch time. */
		FinishedAt: FormControl<Date | null | undefined>,

		/** A timestamp represented in epoch time. */
		StartedAt: FormControl<Date | null | undefined>,
	}
	export function CreateEvaluationFormGroup() {
		return new FormGroup<EvaluationFormProperties>({
			EvaluationId: new FormControl<string | null | undefined>(undefined),
			MLModelId: new FormControl<string | null | undefined>(undefined),
			EvaluationDataSourceId: new FormControl<string | null | undefined>(undefined),
			InputDataLocationS3: new FormControl<string | null | undefined>(undefined),
			CreatedByIamUser: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<EntityStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			ComputeTime: new FormControl<number | null | undefined>(undefined),
			FinishedAt: new FormControl<Date | null | undefined>(undefined),
			StartedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p>Measurements of how well the <code>MLModel</code> performed on known observations. One of the following metrics is returned, based on the type of the <code>MLModel</code>: </p> <ul> <li> <p>BinaryAUC: The binary <code>MLModel</code> uses the Area Under the Curve (AUC) technique to measure performance. </p> </li> <li> <p>RegressionRMSE: The regression <code>MLModel</code> uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.</p> </li> <li> <p>MulticlassAvgFScore: The multiclass <code>MLModel</code> uses the F1 score technique to measure performance. </p> </li> </ul> <p> For more information about performance metrics, please see the <a href="https://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>. </p> */
	export interface PerformanceMetrics {
		Properties?: PerformanceMetricsProperties;
	}

	/** <p>Measurements of how well the <code>MLModel</code> performed on known observations. One of the following metrics is returned, based on the type of the <code>MLModel</code>: </p> <ul> <li> <p>BinaryAUC: The binary <code>MLModel</code> uses the Area Under the Curve (AUC) technique to measure performance. </p> </li> <li> <p>RegressionRMSE: The regression <code>MLModel</code> uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.</p> </li> <li> <p>MulticlassAvgFScore: The multiclass <code>MLModel</code> uses the F1 score technique to measure performance. </p> </li> </ul> <p> For more information about performance metrics, please see the <a href="https://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>. </p> */
	export interface PerformanceMetricsFormProperties {
	}
	export function CreatePerformanceMetricsFormGroup() {
		return new FormGroup<PerformanceMetricsFormProperties>({
		});

	}

	export interface PerformanceMetricsProperties {
	}
	export interface PerformanceMetricsPropertiesFormProperties {
	}
	export function CreatePerformanceMetricsPropertiesFormGroup() {
		return new FormGroup<PerformanceMetricsPropertiesFormProperties>({
		});

	}

	export interface DescribeEvaluationsInput {
		FilterVariable?: BatchPredictionFilterVariable;
		EQ?: string;
		GT?: string;
		LT?: string;
		GE?: string;
		LE?: string;
		NE?: string;
		Prefix?: string;
		SortOrder?: SortOrder;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface DescribeEvaluationsInputFormProperties {
		FilterVariable: FormControl<BatchPredictionFilterVariable | null | undefined>,
		EQ: FormControl<string | null | undefined>,
		GT: FormControl<string | null | undefined>,
		LT: FormControl<string | null | undefined>,
		GE: FormControl<string | null | undefined>,
		LE: FormControl<string | null | undefined>,
		NE: FormControl<string | null | undefined>,
		Prefix: FormControl<string | null | undefined>,
		SortOrder: FormControl<SortOrder | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeEvaluationsInputFormGroup() {
		return new FormGroup<DescribeEvaluationsInputFormProperties>({
			FilterVariable: new FormControl<BatchPredictionFilterVariable | null | undefined>(undefined),
			EQ: new FormControl<string | null | undefined>(undefined),
			GT: new FormControl<string | null | undefined>(undefined),
			LT: new FormControl<string | null | undefined>(undefined),
			GE: new FormControl<string | null | undefined>(undefined),
			LE: new FormControl<string | null | undefined>(undefined),
			NE: new FormControl<string | null | undefined>(undefined),
			Prefix: new FormControl<string | null | undefined>(undefined),
			SortOrder: new FormControl<SortOrder | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>DescribeMLModels</code> operation. The content is essentially a list of <code>MLModel</code>. */
	export interface DescribeMLModelsOutput {
		Results?: Array<MLModel>;
		NextToken?: string;
	}

	/** Represents the output of a <code>DescribeMLModels</code> operation. The content is essentially a list of <code>MLModel</code>. */
	export interface DescribeMLModelsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMLModelsOutputFormGroup() {
		return new FormGroup<DescribeMLModelsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p> Represents the output of a <code>GetMLModel</code> operation. </p> <p>The content consists of the detailed metadata and the current status of the <code>MLModel</code>.</p> */
	export interface MLModel {
		MLModelId?: string;
		TrainingDataSourceId?: string;
		CreatedByIamUser?: string;
		CreatedAt?: Date;
		LastUpdatedAt?: Date;
		Name?: string;
		Status?: EntityStatus;

		/**
		 * Long integer type that is a 64-bit signed number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		SizeInBytes?: number | null;
		EndpointInfo?: RealtimeEndpointInfo;
		TrainingParameters?: TrainingParameters;
		InputDataLocationS3?: string;
		Algorithm?: Algorithm;
		MLModelType?: MLModelType;

		/** Type: float */
		ScoreThreshold?: number | null;
		ScoreThresholdLastUpdatedAt?: Date;
		Message?: string;

		/**
		 * Long integer type that is a 64-bit signed number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ComputeTime?: number | null;

		/** A timestamp represented in epoch time. */
		FinishedAt?: Date | null;

		/** A timestamp represented in epoch time. */
		StartedAt?: Date | null;
	}

	/** <p> Represents the output of a <code>GetMLModel</code> operation. </p> <p>The content consists of the detailed metadata and the current status of the <code>MLModel</code>.</p> */
	export interface MLModelFormProperties {
		MLModelId: FormControl<string | null | undefined>,
		TrainingDataSourceId: FormControl<string | null | undefined>,
		CreatedByIamUser: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<EntityStatus | null | undefined>,

		/**
		 * Long integer type that is a 64-bit signed number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		SizeInBytes: FormControl<number | null | undefined>,
		InputDataLocationS3: FormControl<string | null | undefined>,
		Algorithm: FormControl<Algorithm | null | undefined>,
		MLModelType: FormControl<MLModelType | null | undefined>,

		/** Type: float */
		ScoreThreshold: FormControl<number | null | undefined>,
		ScoreThresholdLastUpdatedAt: FormControl<Date | null | undefined>,
		Message: FormControl<string | null | undefined>,

		/**
		 * Long integer type that is a 64-bit signed number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ComputeTime: FormControl<number | null | undefined>,

		/** A timestamp represented in epoch time. */
		FinishedAt: FormControl<Date | null | undefined>,

		/** A timestamp represented in epoch time. */
		StartedAt: FormControl<Date | null | undefined>,
	}
	export function CreateMLModelFormGroup() {
		return new FormGroup<MLModelFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined),
			TrainingDataSourceId: new FormControl<string | null | undefined>(undefined),
			CreatedByIamUser: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<EntityStatus | null | undefined>(undefined),
			SizeInBytes: new FormControl<number | null | undefined>(undefined),
			InputDataLocationS3: new FormControl<string | null | undefined>(undefined),
			Algorithm: new FormControl<Algorithm | null | undefined>(undefined),
			MLModelType: new FormControl<MLModelType | null | undefined>(undefined),
			ScoreThreshold: new FormControl<number | null | undefined>(undefined),
			ScoreThresholdLastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			ComputeTime: new FormControl<number | null | undefined>(undefined),
			FinishedAt: new FormControl<Date | null | undefined>(undefined),
			StartedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p>The function used to train an <code>MLModel</code>. Training choices supported by Amazon ML include the following:</p> <ul> <li> <p> <code>SGD</code> - Stochastic Gradient Descent.</p> </li> <li> <p> <code>RandomForest</code> - Random forest of decision trees.</p> </li> </ul> */
	export enum Algorithm { sgd = 'sgd' }

	export interface DescribeMLModelsInput {
		FilterVariable?: MLModelFilterVariable;
		EQ?: string;
		GT?: string;
		LT?: string;
		GE?: string;
		LE?: string;
		NE?: string;
		Prefix?: string;
		SortOrder?: SortOrder;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface DescribeMLModelsInputFormProperties {
		FilterVariable: FormControl<MLModelFilterVariable | null | undefined>,
		EQ: FormControl<string | null | undefined>,
		GT: FormControl<string | null | undefined>,
		LT: FormControl<string | null | undefined>,
		GE: FormControl<string | null | undefined>,
		LE: FormControl<string | null | undefined>,
		NE: FormControl<string | null | undefined>,
		Prefix: FormControl<string | null | undefined>,
		SortOrder: FormControl<SortOrder | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeMLModelsInputFormGroup() {
		return new FormGroup<DescribeMLModelsInputFormProperties>({
			FilterVariable: new FormControl<MLModelFilterVariable | null | undefined>(undefined),
			EQ: new FormControl<string | null | undefined>(undefined),
			GT: new FormControl<string | null | undefined>(undefined),
			LT: new FormControl<string | null | undefined>(undefined),
			GE: new FormControl<string | null | undefined>(undefined),
			LE: new FormControl<string | null | undefined>(undefined),
			NE: new FormControl<string | null | undefined>(undefined),
			Prefix: new FormControl<string | null | undefined>(undefined),
			SortOrder: new FormControl<SortOrder | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum MLModelFilterVariable { CreatedAt = 'CreatedAt', LastUpdatedAt = 'LastUpdatedAt', Status = 'Status', Name = 'Name', IAMUser = 'IAMUser', TrainingDataSourceId = 'TrainingDataSourceId', RealtimeEndpointStatus = 'RealtimeEndpointStatus', MLModelType = 'MLModelType', Algorithm = 'Algorithm', TrainingDataURI = 'TrainingDataURI' }


	/** Amazon ML returns the following elements. */
	export interface DescribeTagsOutput {
		ResourceId?: string;
		ResourceType?: TaggableResourceType;
		Tags?: Array<Tag>;
	}

	/** Amazon ML returns the following elements. */
	export interface DescribeTagsOutputFormProperties {
		ResourceId: FormControl<string | null | undefined>,
		ResourceType: FormControl<TaggableResourceType | null | undefined>,
	}
	export function CreateDescribeTagsOutputFormGroup() {
		return new FormGroup<DescribeTagsOutputFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<TaggableResourceType | null | undefined>(undefined),
		});

	}

	export interface DescribeTagsInput {

		/** Required */
		ResourceId: string;

		/** Required */
		ResourceType: TaggableResourceType;
	}
	export interface DescribeTagsInputFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<TaggableResourceType | null | undefined>,
	}
	export function CreateDescribeTagsInputFormGroup() {
		return new FormGroup<DescribeTagsInputFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceType: new FormControl<TaggableResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the output of a <code>GetBatchPrediction</code> operation and describes a <code>BatchPrediction</code>. */
	export interface GetBatchPredictionOutput {
		BatchPredictionId?: string;
		MLModelId?: string;
		BatchPredictionDataSourceId?: string;
		InputDataLocationS3?: string;
		CreatedByIamUser?: string;
		CreatedAt?: Date;
		LastUpdatedAt?: Date;
		Name?: string;
		Status?: EntityStatus;
		OutputUri?: string;
		LogUri?: string;
		Message?: string;
		ComputeTime?: number | null;
		FinishedAt?: Date;
		StartedAt?: Date;
		TotalRecordCount?: number | null;
		InvalidRecordCount?: number | null;
	}

	/** Represents the output of a <code>GetBatchPrediction</code> operation and describes a <code>BatchPrediction</code>. */
	export interface GetBatchPredictionOutputFormProperties {
		BatchPredictionId: FormControl<string | null | undefined>,
		MLModelId: FormControl<string | null | undefined>,
		BatchPredictionDataSourceId: FormControl<string | null | undefined>,
		InputDataLocationS3: FormControl<string | null | undefined>,
		CreatedByIamUser: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<EntityStatus | null | undefined>,
		OutputUri: FormControl<string | null | undefined>,
		LogUri: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		ComputeTime: FormControl<number | null | undefined>,
		FinishedAt: FormControl<Date | null | undefined>,
		StartedAt: FormControl<Date | null | undefined>,
		TotalRecordCount: FormControl<number | null | undefined>,
		InvalidRecordCount: FormControl<number | null | undefined>,
	}
	export function CreateGetBatchPredictionOutputFormGroup() {
		return new FormGroup<GetBatchPredictionOutputFormProperties>({
			BatchPredictionId: new FormControl<string | null | undefined>(undefined),
			MLModelId: new FormControl<string | null | undefined>(undefined),
			BatchPredictionDataSourceId: new FormControl<string | null | undefined>(undefined),
			InputDataLocationS3: new FormControl<string | null | undefined>(undefined),
			CreatedByIamUser: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<EntityStatus | null | undefined>(undefined),
			OutputUri: new FormControl<string | null | undefined>(undefined),
			LogUri: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			ComputeTime: new FormControl<number | null | undefined>(undefined),
			FinishedAt: new FormControl<Date | null | undefined>(undefined),
			StartedAt: new FormControl<Date | null | undefined>(undefined),
			TotalRecordCount: new FormControl<number | null | undefined>(undefined),
			InvalidRecordCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetBatchPredictionInput {

		/** Required */
		BatchPredictionId: string;
	}
	export interface GetBatchPredictionInputFormProperties {

		/** Required */
		BatchPredictionId: FormControl<string | null | undefined>,
	}
	export function CreateGetBatchPredictionInputFormGroup() {
		return new FormGroup<GetBatchPredictionInputFormProperties>({
			BatchPredictionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the output of a <code>GetDataSource</code> operation and describes a <code>DataSource</code>. */
	export interface GetDataSourceOutput {
		DataSourceId?: string;
		DataLocationS3?: string;
		DataRearrangement?: string;
		CreatedByIamUser?: string;
		CreatedAt?: Date;
		LastUpdatedAt?: Date;
		DataSizeInBytes?: number | null;
		NumberOfFiles?: number | null;
		Name?: string;
		Status?: EntityStatus;
		LogUri?: string;
		Message?: string;

		/** Describes the <code>DataSource</code> details specific to Amazon Redshift. */
		RedshiftMetadata?: RedshiftMetadata;

		/** The datasource details that are specific to Amazon RDS. */
		RDSMetadata?: RDSMetadata;

		/**
		 * The Amazon Resource Name (ARN) of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename.
		 * Min length: 1
		 * Max length: 110
		 */
		RoleARN?: string | null;
		ComputeStatistics?: boolean | null;
		ComputeTime?: number | null;
		FinishedAt?: Date;
		StartedAt?: Date;
		DataSourceSchema?: string;
	}

	/** Represents the output of a <code>GetDataSource</code> operation and describes a <code>DataSource</code>. */
	export interface GetDataSourceOutputFormProperties {
		DataSourceId: FormControl<string | null | undefined>,
		DataLocationS3: FormControl<string | null | undefined>,
		DataRearrangement: FormControl<string | null | undefined>,
		CreatedByIamUser: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
		DataSizeInBytes: FormControl<number | null | undefined>,
		NumberOfFiles: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<EntityStatus | null | undefined>,
		LogUri: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename.
		 * Min length: 1
		 * Max length: 110
		 */
		RoleARN: FormControl<string | null | undefined>,
		ComputeStatistics: FormControl<boolean | null | undefined>,
		ComputeTime: FormControl<number | null | undefined>,
		FinishedAt: FormControl<Date | null | undefined>,
		StartedAt: FormControl<Date | null | undefined>,
		DataSourceSchema: FormControl<string | null | undefined>,
	}
	export function CreateGetDataSourceOutputFormGroup() {
		return new FormGroup<GetDataSourceOutputFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined),
			DataLocationS3: new FormControl<string | null | undefined>(undefined),
			DataRearrangement: new FormControl<string | null | undefined>(undefined),
			CreatedByIamUser: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			DataSizeInBytes: new FormControl<number | null | undefined>(undefined),
			NumberOfFiles: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<EntityStatus | null | undefined>(undefined),
			LogUri: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(110)]),
			ComputeStatistics: new FormControl<boolean | null | undefined>(undefined),
			ComputeTime: new FormControl<number | null | undefined>(undefined),
			FinishedAt: new FormControl<Date | null | undefined>(undefined),
			StartedAt: new FormControl<Date | null | undefined>(undefined),
			DataSourceSchema: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDataSourceInput {

		/** Required */
		DataSourceId: string;
		Verbose?: boolean | null;
	}
	export interface GetDataSourceInputFormProperties {

		/** Required */
		DataSourceId: FormControl<string | null | undefined>,
		Verbose: FormControl<boolean | null | undefined>,
	}
	export function CreateGetDataSourceInputFormGroup() {
		return new FormGroup<GetDataSourceInputFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Verbose: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>GetEvaluation</code> operation and describes an <code>Evaluation</code>. */
	export interface GetEvaluationOutput {
		EvaluationId?: string;
		MLModelId?: string;
		EvaluationDataSourceId?: string;
		InputDataLocationS3?: string;
		CreatedByIamUser?: string;
		CreatedAt?: Date;
		LastUpdatedAt?: Date;
		Name?: string;
		Status?: EntityStatus;
		PerformanceMetrics?: PerformanceMetrics;
		LogUri?: string;
		Message?: string;
		ComputeTime?: number | null;
		FinishedAt?: Date;
		StartedAt?: Date;
	}

	/** Represents the output of a <code>GetEvaluation</code> operation and describes an <code>Evaluation</code>. */
	export interface GetEvaluationOutputFormProperties {
		EvaluationId: FormControl<string | null | undefined>,
		MLModelId: FormControl<string | null | undefined>,
		EvaluationDataSourceId: FormControl<string | null | undefined>,
		InputDataLocationS3: FormControl<string | null | undefined>,
		CreatedByIamUser: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<EntityStatus | null | undefined>,
		LogUri: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		ComputeTime: FormControl<number | null | undefined>,
		FinishedAt: FormControl<Date | null | undefined>,
		StartedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetEvaluationOutputFormGroup() {
		return new FormGroup<GetEvaluationOutputFormProperties>({
			EvaluationId: new FormControl<string | null | undefined>(undefined),
			MLModelId: new FormControl<string | null | undefined>(undefined),
			EvaluationDataSourceId: new FormControl<string | null | undefined>(undefined),
			InputDataLocationS3: new FormControl<string | null | undefined>(undefined),
			CreatedByIamUser: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<EntityStatus | null | undefined>(undefined),
			LogUri: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			ComputeTime: new FormControl<number | null | undefined>(undefined),
			FinishedAt: new FormControl<Date | null | undefined>(undefined),
			StartedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetEvaluationInput {

		/** Required */
		EvaluationId: string;
	}
	export interface GetEvaluationInputFormProperties {

		/** Required */
		EvaluationId: FormControl<string | null | undefined>,
	}
	export function CreateGetEvaluationInputFormGroup() {
		return new FormGroup<GetEvaluationInputFormProperties>({
			EvaluationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the output of a <code>GetMLModel</code> operation, and provides detailed information about a <code>MLModel</code>. */
	export interface GetMLModelOutput {
		MLModelId?: string;
		TrainingDataSourceId?: string;
		CreatedByIamUser?: string;
		CreatedAt?: Date;
		LastUpdatedAt?: Date;
		Name?: string;
		Status?: EntityStatus;

		/**
		 * Long integer type that is a 64-bit signed number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		SizeInBytes?: number | null;
		EndpointInfo?: RealtimeEndpointInfo;
		TrainingParameters?: TrainingParameters;
		InputDataLocationS3?: string;
		MLModelType?: MLModelType;
		ScoreThreshold?: number;
		ScoreThresholdLastUpdatedAt?: Date;
		LogUri?: string;
		Message?: string;
		ComputeTime?: number | null;
		FinishedAt?: Date;
		StartedAt?: Date;
		Recipe?: string;
		Schema?: string;
	}

	/** Represents the output of a <code>GetMLModel</code> operation, and provides detailed information about a <code>MLModel</code>. */
	export interface GetMLModelOutputFormProperties {
		MLModelId: FormControl<string | null | undefined>,
		TrainingDataSourceId: FormControl<string | null | undefined>,
		CreatedByIamUser: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<EntityStatus | null | undefined>,

		/**
		 * Long integer type that is a 64-bit signed number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		SizeInBytes: FormControl<number | null | undefined>,
		InputDataLocationS3: FormControl<string | null | undefined>,
		MLModelType: FormControl<MLModelType | null | undefined>,
		ScoreThreshold: FormControl<number | null | undefined>,
		ScoreThresholdLastUpdatedAt: FormControl<Date | null | undefined>,
		LogUri: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		ComputeTime: FormControl<number | null | undefined>,
		FinishedAt: FormControl<Date | null | undefined>,
		StartedAt: FormControl<Date | null | undefined>,
		Recipe: FormControl<string | null | undefined>,
		Schema: FormControl<string | null | undefined>,
	}
	export function CreateGetMLModelOutputFormGroup() {
		return new FormGroup<GetMLModelOutputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined),
			TrainingDataSourceId: new FormControl<string | null | undefined>(undefined),
			CreatedByIamUser: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<EntityStatus | null | undefined>(undefined),
			SizeInBytes: new FormControl<number | null | undefined>(undefined),
			InputDataLocationS3: new FormControl<string | null | undefined>(undefined),
			MLModelType: new FormControl<MLModelType | null | undefined>(undefined),
			ScoreThreshold: new FormControl<number | null | undefined>(undefined),
			ScoreThresholdLastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			LogUri: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			ComputeTime: new FormControl<number | null | undefined>(undefined),
			FinishedAt: new FormControl<Date | null | undefined>(undefined),
			StartedAt: new FormControl<Date | null | undefined>(undefined),
			Recipe: new FormControl<string | null | undefined>(undefined),
			Schema: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMLModelInput {

		/** Required */
		MLModelId: string;
		Verbose?: boolean | null;
	}
	export interface GetMLModelInputFormProperties {

		/** Required */
		MLModelId: FormControl<string | null | undefined>,
		Verbose: FormControl<boolean | null | undefined>,
	}
	export function CreateGetMLModelInputFormGroup() {
		return new FormGroup<GetMLModelInputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Verbose: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PredictOutput {

		/** <p>The output from a <code>Predict</code> operation: </p> <ul> <li> <p> <code>Details</code> - Contains the following attributes: <code>DetailsAttributes.PREDICTIVE_MODEL_TYPE - REGRESSION | BINARY | MULTICLASS</code> <code>DetailsAttributes.ALGORITHM - SGD</code> </p> </li> <li> <p> <code>PredictedLabel</code> - Present for either a <code>BINARY</code> or <code>MULTICLASS</code> <code>MLModel</code> request. </p> </li> <li> <p> <code>PredictedScores</code> - Contains the raw classification score corresponding to each label. </p> </li> <li> <p> <code>PredictedValue</code> - Present for a <code>REGRESSION</code> <code>MLModel</code> request. </p> </li> </ul> */
		Prediction?: Prediction;
	}
	export interface PredictOutputFormProperties {
	}
	export function CreatePredictOutputFormGroup() {
		return new FormGroup<PredictOutputFormProperties>({
		});

	}


	/** <p>The output from a <code>Predict</code> operation: </p> <ul> <li> <p> <code>Details</code> - Contains the following attributes: <code>DetailsAttributes.PREDICTIVE_MODEL_TYPE - REGRESSION | BINARY | MULTICLASS</code> <code>DetailsAttributes.ALGORITHM - SGD</code> </p> </li> <li> <p> <code>PredictedLabel</code> - Present for either a <code>BINARY</code> or <code>MULTICLASS</code> <code>MLModel</code> request. </p> </li> <li> <p> <code>PredictedScores</code> - Contains the raw classification score corresponding to each label. </p> </li> <li> <p> <code>PredictedValue</code> - Present for a <code>REGRESSION</code> <code>MLModel</code> request. </p> </li> </ul> */
	export interface Prediction {
		predictedLabel?: string;
		predictedValue?: number;

		/** Provides the raw classification score corresponding to each label. */
		predictedScores?: ScoreValuePerLabelMap;

		/** Provides any additional details regarding the prediction. */
		details?: DetailsMap;
	}

	/** <p>The output from a <code>Predict</code> operation: </p> <ul> <li> <p> <code>Details</code> - Contains the following attributes: <code>DetailsAttributes.PREDICTIVE_MODEL_TYPE - REGRESSION | BINARY | MULTICLASS</code> <code>DetailsAttributes.ALGORITHM - SGD</code> </p> </li> <li> <p> <code>PredictedLabel</code> - Present for either a <code>BINARY</code> or <code>MULTICLASS</code> <code>MLModel</code> request. </p> </li> <li> <p> <code>PredictedScores</code> - Contains the raw classification score corresponding to each label. </p> </li> <li> <p> <code>PredictedValue</code> - Present for a <code>REGRESSION</code> <code>MLModel</code> request. </p> </li> </ul> */
	export interface PredictionFormProperties {
		predictedLabel: FormControl<string | null | undefined>,
		predictedValue: FormControl<number | null | undefined>,
	}
	export function CreatePredictionFormGroup() {
		return new FormGroup<PredictionFormProperties>({
			predictedLabel: new FormControl<string | null | undefined>(undefined),
			predictedValue: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides the raw classification score corresponding to each label. */
	export interface ScoreValuePerLabelMap {
	}

	/** Provides the raw classification score corresponding to each label. */
	export interface ScoreValuePerLabelMapFormProperties {
	}
	export function CreateScoreValuePerLabelMapFormGroup() {
		return new FormGroup<ScoreValuePerLabelMapFormProperties>({
		});

	}


	/** Provides any additional details regarding the prediction. */
	export interface DetailsMap {
	}

	/** Provides any additional details regarding the prediction. */
	export interface DetailsMapFormProperties {
	}
	export function CreateDetailsMapFormGroup() {
		return new FormGroup<DetailsMapFormProperties>({
		});

	}

	export interface PredictInput {

		/** Required */
		MLModelId: string;

		/**
		 * A map of variable name-value pairs that represent an observation.
		 * Required
		 */
		Record: Record;

		/**
		 * Required
		 * Max length: 2048
		 */
		PredictEndpoint: string;
	}
	export interface PredictInputFormProperties {

		/** Required */
		MLModelId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 */
		PredictEndpoint: FormControl<string | null | undefined>,
	}
	export function CreatePredictInputFormGroup() {
		return new FormGroup<PredictInputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PredictEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.pattern('https://[a-zA-Z0-9-.]*\.amazon(aws)?\.com[/]?')]),
		});

	}


	/** A map of variable name-value pairs that represent an observation. */
	export interface Record {
	}

	/** A map of variable name-value pairs that represent an observation. */
	export interface RecordFormProperties {
	}
	export function CreateRecordFormGroup() {
		return new FormGroup<RecordFormProperties>({
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface PredictorNotMountedException {
	}
	export interface PredictorNotMountedExceptionFormProperties {
	}
	export function CreatePredictorNotMountedExceptionFormGroup() {
		return new FormGroup<PredictorNotMountedExceptionFormProperties>({
		});

	}


	/** <p>Represents the output of an <code>UpdateBatchPrediction</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p> */
	export interface UpdateBatchPredictionOutput {
		BatchPredictionId?: string;
	}

	/** <p>Represents the output of an <code>UpdateBatchPrediction</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p> */
	export interface UpdateBatchPredictionOutputFormProperties {
		BatchPredictionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBatchPredictionOutputFormGroup() {
		return new FormGroup<UpdateBatchPredictionOutputFormProperties>({
			BatchPredictionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBatchPredictionInput {

		/** Required */
		BatchPredictionId: string;

		/** Required */
		BatchPredictionName: string;
	}
	export interface UpdateBatchPredictionInputFormProperties {

		/** Required */
		BatchPredictionId: FormControl<string | null | undefined>,

		/** Required */
		BatchPredictionName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBatchPredictionInputFormGroup() {
		return new FormGroup<UpdateBatchPredictionInputFormProperties>({
			BatchPredictionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BatchPredictionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Represents the output of an <code>UpdateDataSource</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p> */
	export interface UpdateDataSourceOutput {
		DataSourceId?: string;
	}

	/** <p>Represents the output of an <code>UpdateDataSource</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p> */
	export interface UpdateDataSourceOutputFormProperties {
		DataSourceId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataSourceOutputFormGroup() {
		return new FormGroup<UpdateDataSourceOutputFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDataSourceInput {

		/** Required */
		DataSourceId: string;

		/** Required */
		DataSourceName: string;
	}
	export interface UpdateDataSourceInputFormProperties {

		/** Required */
		DataSourceId: FormControl<string | null | undefined>,

		/** Required */
		DataSourceName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataSourceInputFormGroup() {
		return new FormGroup<UpdateDataSourceInputFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataSourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Represents the output of an <code>UpdateEvaluation</code> operation.</p> <p>You can see the updated content by using the <code>GetEvaluation</code> operation.</p> */
	export interface UpdateEvaluationOutput {
		EvaluationId?: string;
	}

	/** <p>Represents the output of an <code>UpdateEvaluation</code> operation.</p> <p>You can see the updated content by using the <code>GetEvaluation</code> operation.</p> */
	export interface UpdateEvaluationOutputFormProperties {
		EvaluationId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEvaluationOutputFormGroup() {
		return new FormGroup<UpdateEvaluationOutputFormProperties>({
			EvaluationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEvaluationInput {

		/** Required */
		EvaluationId: string;

		/** Required */
		EvaluationName: string;
	}
	export interface UpdateEvaluationInputFormProperties {

		/** Required */
		EvaluationId: FormControl<string | null | undefined>,

		/** Required */
		EvaluationName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEvaluationInputFormGroup() {
		return new FormGroup<UpdateEvaluationInputFormProperties>({
			EvaluationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EvaluationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Represents the output of an <code>UpdateMLModel</code> operation.</p> <p>You can see the updated content by using the <code>GetMLModel</code> operation.</p> */
	export interface UpdateMLModelOutput {
		MLModelId?: string;
	}

	/** <p>Represents the output of an <code>UpdateMLModel</code> operation.</p> <p>You can see the updated content by using the <code>GetMLModel</code> operation.</p> */
	export interface UpdateMLModelOutputFormProperties {
		MLModelId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMLModelOutputFormGroup() {
		return new FormGroup<UpdateMLModelOutputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMLModelInput {

		/** Required */
		MLModelId: string;
		MLModelName?: string;
		ScoreThreshold?: number;
	}
	export interface UpdateMLModelInputFormProperties {

		/** Required */
		MLModelId: FormControl<string | null | undefined>,
		MLModelName: FormControl<string | null | undefined>,
		ScoreThreshold: FormControl<number | null | undefined>,
	}
	export function CreateUpdateMLModelInputFormGroup() {
		return new FormGroup<UpdateMLModelInputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MLModelName: new FormControl<string | null | undefined>(undefined),
			ScoreThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>A list of the variables to use in searching or filtering <code>Evaluation</code>.</p> <ul> <li> <p> <code>CreatedAt</code> - Sets the search criteria to <code>Evaluation</code> creation date.</p> </li> <li> <p> <code>Status</code> - Sets the search criteria to <code>Evaluation</code> status.</p> </li> <li> <p> <code>Name</code> - Sets the search criteria to the contents of <code>Evaluation</code> <b> </b> <code>Name</code>.</p> </li> <li> <p> <code>IAMUser</code> - Sets the search criteria to the user account that invoked an evaluation.</p> </li> <li> <p> <code>MLModelId</code> - Sets the search criteria to the <code>Predictor</code> that was evaluated.</p> </li> <li> <p> <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in evaluation.</p> </li> <li> <p> <code>DataUri</code> - Sets the search criteria to the data file(s) used in evaluation. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</p> </li> </ul> */
	export enum EvaluationFilterVariable { CreatedAt = 'CreatedAt', LastUpdatedAt = 'LastUpdatedAt', Status = 'Status', Name = 'Name', IAMUser = 'IAMUser', MLModelId = 'MLModelId', DataSourceId = 'DataSourceId', DataURI = 'DataURI' }


	/** <p>Contains the key values of <code>DetailsMap</code>:</p> <ul> <li> <p> <code>PredictiveModelType</code> - Indicates the type of the <code>MLModel</code>.</p> </li> <li> <p> <code>Algorithm</code> - Indicates the algorithm that was used for the <code>MLModel</code>.</p> </li> </ul> */
	export enum DetailsAttributes { PredictiveModelType = 'PredictiveModelType', Algorithm = 'Algorithm' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds one or more tags to an object, up to a limit of 10. Each tag consists of a key and an optional value. If you add a tag using a key that is already associated with the ML object, <code>AddTags</code> updates the tag's value.
		 * Post #X-Amz-Target=AmazonML_20141212.AddTags
		 * @return {AddTagsOutput} Success
		 */
		AddTags(requestBody: AddTagsInput): Observable<AddTagsOutput> {
			return this.http.post<AddTagsOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.AddTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Generates predictions for a group of observations. The observations to process exist in one or more data files referenced by a <code>DataSource</code>. This operation creates a new <code>BatchPrediction</code>, and uses an <code>MLModel</code> and the data files referenced by the <code>DataSource</code> as information sources. </p> <p> <code>CreateBatchPrediction</code> is an asynchronous operation. In response to <code>CreateBatchPrediction</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>BatchPrediction</code> status to <code>PENDING</code>. After the <code>BatchPrediction</code> completes, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can poll for status updates by using the <a>GetBatchPrediction</a> operation and checking the <code>Status</code> parameter of the result. After the <code>COMPLETED</code> status appears, the results are available in the location specified by the <code>OutputUri</code> parameter.</p>
		 * Post #X-Amz-Target=AmazonML_20141212.CreateBatchPrediction
		 * @return {CreateBatchPredictionOutput} Success
		 */
		CreateBatchPrediction(requestBody: CreateBatchPredictionInput): Observable<CreateBatchPredictionOutput> {
			return this.http.post<CreateBatchPredictionOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.CreateBatchPrediction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a <code>DataSource</code> object from an <a href="http://aws.amazon.com/rds/"> Amazon Relational Database Service</a> (Amazon RDS). A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p> <code>CreateDataSourceFromRDS</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRDS</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can be used only to perform <code>&gt;CreateMLModel</code>&gt;, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML cannot accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p>
		 * Post #X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRDS
		 * @return {CreateDataSourceFromRDSOutput} Success
		 */
		CreateDataSourceFromRDS(requestBody: CreateDataSourceFromRDSInput): Observable<CreateDataSourceFromRDSOutput> {
			return this.http.post<CreateDataSourceFromRDSOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRDS', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a <code>DataSource</code> from a database hosted on an Amazon Redshift cluster. A <code>DataSource</code> references data that can be used to perform either <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p> <code>CreateDataSourceFromRedshift</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRedshift</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in <code>COMPLETED</code> or <code>PENDING</code> states can be used to perform only <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p> <p>The observations should be contained in the database hosted on an Amazon Redshift cluster and should be specified by a <code>SelectSqlQuery</code> query. Amazon ML executes an <code>Unload</code> command in Amazon Redshift to transfer the result set of the <code>SelectSqlQuery</code> query to <code>S3StagingLocation</code>.</p> <p>After the <code>DataSource</code> has been created, it's ready for use in evaluations and batch predictions. If you plan to use the <code>DataSource</code> to train an <code>MLModel</code>, the <code>DataSource</code> also requires a recipe. A recipe describes how each input variable will be used in training an <code>MLModel</code>. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.</p> <p>You can't change an existing datasource, but you can copy and modify the settings from an existing Amazon Redshift datasource to create a new datasource. To do so, call <code>GetDataSource</code> for an existing datasource and copy the values to a <code>CreateDataSource</code> call. Change the settings that you want to change and make sure that all required fields have the appropriate values.</p>
		 * Post #X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRedshift
		 * @return {CreateDataSourceFromRedshiftOutput} Success
		 */
		CreateDataSourceFromRedshift(requestBody: CreateDataSourceFromRedshiftInput): Observable<CreateDataSourceFromRedshiftOutput> {
			return this.http.post<CreateDataSourceFromRedshiftOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRedshift', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a <code>DataSource</code> object. A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p> <code>CreateDataSourceFromS3</code> is an asynchronous operation. In response to <code>CreateDataSourceFromS3</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> has been created and is ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can be used to perform only <code>CreateMLModel</code>, <code>CreateEvaluation</code> or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p> <p>The observation data used in a <code>DataSource</code> should be ready to use; that is, it should have a consistent structure, and missing data values should be kept to a minimum. The observation data must reside in one or more .csv files in an Amazon Simple Storage Service (Amazon S3) location, along with a schema that describes the data items by name and type. The same schema must be used for all of the data files referenced by the <code>DataSource</code>. </p> <p>After the <code>DataSource</code> has been created, it's ready to use in evaluations and batch predictions. If you plan to use the <code>DataSource</code> to train an <code>MLModel</code>, the <code>DataSource</code> also needs a recipe. A recipe describes how each input variable will be used in training an <code>MLModel</code>. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.</p>
		 * Post #X-Amz-Target=AmazonML_20141212.CreateDataSourceFromS3
		 * @return {CreateDataSourceFromS3Output} Success
		 */
		CreateDataSourceFromS3(requestBody: CreateDataSourceFromS3Input): Observable<CreateDataSourceFromS3Output> {
			return this.http.post<CreateDataSourceFromS3Output>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromS3', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new <code>Evaluation</code> of an <code>MLModel</code>. An <code>MLModel</code> is evaluated on a set of observations associated to a <code>DataSource</code>. Like a <code>DataSource</code> for an <code>MLModel</code>, the <code>DataSource</code> for an <code>Evaluation</code> contains values for the <code>Target Variable</code>. The <code>Evaluation</code> compares the predicted result for each observation to the actual outcome and provides a summary so that you know how effective the <code>MLModel</code> functions on the test data. Evaluation generates a relevant performance metric, such as BinaryAUC, RegressionRMSE or MulticlassAvgFScore based on the corresponding <code>MLModelType</code>: <code>BINARY</code>, <code>REGRESSION</code> or <code>MULTICLASS</code>. </p> <p> <code>CreateEvaluation</code> is an asynchronous operation. In response to <code>CreateEvaluation</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the evaluation status to <code>PENDING</code>. After the <code>Evaluation</code> is created and ready for use, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can use the <code>GetEvaluation</code> operation to check progress of the evaluation during the creation operation.</p>
		 * Post #X-Amz-Target=AmazonML_20141212.CreateEvaluation
		 * @return {CreateEvaluationOutput} Success
		 */
		CreateEvaluation(requestBody: CreateEvaluationInput): Observable<CreateEvaluationOutput> {
			return this.http.post<CreateEvaluationOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.CreateEvaluation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new <code>MLModel</code> using the <code>DataSource</code> and the recipe as information sources. </p> <p>An <code>MLModel</code> is nearly immutable. Users can update only the <code>MLModelName</code> and the <code>ScoreThreshold</code> in an <code>MLModel</code> without creating a new <code>MLModel</code>. </p> <p> <code>CreateMLModel</code> is an asynchronous operation. In response to <code>CreateMLModel</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>MLModel</code> status to <code>PENDING</code>. After the <code>MLModel</code> has been created and ready is for use, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can use the <code>GetMLModel</code> operation to check the progress of the <code>MLModel</code> during the creation operation.</p> <p> <code>CreateMLModel</code> requires a <code>DataSource</code> with computed statistics, which can be created by setting <code>ComputeStatistics</code> to <code>true</code> in <code>CreateDataSourceFromRDS</code>, <code>CreateDataSourceFromS3</code>, or <code>CreateDataSourceFromRedshift</code> operations. </p>
		 * Post #X-Amz-Target=AmazonML_20141212.CreateMLModel
		 * @return {CreateMLModelOutput} Success
		 */
		CreateMLModel(requestBody: CreateMLModelInput): Observable<CreateMLModelOutput> {
			return this.http.post<CreateMLModelOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.CreateMLModel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a real-time endpoint for the <code>MLModel</code>. The endpoint contains the URI of the <code>MLModel</code>; that is, the location to send real-time prediction requests for the specified <code>MLModel</code>.
		 * Post #X-Amz-Target=AmazonML_20141212.CreateRealtimeEndpoint
		 * @return {CreateRealtimeEndpointOutput} Success
		 */
		CreateRealtimeEndpoint(requestBody: CreateRealtimeEndpointInput): Observable<CreateRealtimeEndpointOutput> {
			return this.http.post<CreateRealtimeEndpointOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.CreateRealtimeEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Assigns the DELETED status to a <code>BatchPrediction</code>, rendering it unusable.</p> <p>After using the <code>DeleteBatchPrediction</code> operation, you can use the <a>GetBatchPrediction</a> operation to verify that the status of the <code>BatchPrediction</code> changed to DELETED.</p> <p> <b>Caution:</b> The result of the <code>DeleteBatchPrediction</code> operation is irreversible.</p>
		 * Post #X-Amz-Target=AmazonML_20141212.DeleteBatchPrediction
		 * @return {DeleteBatchPredictionOutput} Success
		 */
		DeleteBatchPrediction(requestBody: DeleteBatchPredictionInput): Observable<DeleteBatchPredictionOutput> {
			return this.http.post<DeleteBatchPredictionOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.DeleteBatchPrediction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Assigns the DELETED status to a <code>DataSource</code>, rendering it unusable.</p> <p>After using the <code>DeleteDataSource</code> operation, you can use the <a>GetDataSource</a> operation to verify that the status of the <code>DataSource</code> changed to DELETED.</p> <p> <b>Caution:</b> The results of the <code>DeleteDataSource</code> operation are irreversible.</p>
		 * Post #X-Amz-Target=AmazonML_20141212.DeleteDataSource
		 * @return {DeleteDataSourceOutput} Success
		 */
		DeleteDataSource(requestBody: DeleteDataSourceInput): Observable<DeleteDataSourceOutput> {
			return this.http.post<DeleteDataSourceOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.DeleteDataSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Assigns the <code>DELETED</code> status to an <code>Evaluation</code>, rendering it unusable.</p> <p>After invoking the <code>DeleteEvaluation</code> operation, you can use the <code>GetEvaluation</code> operation to verify that the status of the <code>Evaluation</code> changed to <code>DELETED</code>.</p> <p> <b>Caution:</b> The results of the <code>DeleteEvaluation</code> operation are irreversible.</p>
		 * Post #X-Amz-Target=AmazonML_20141212.DeleteEvaluation
		 * @return {DeleteEvaluationOutput} Success
		 */
		DeleteEvaluation(requestBody: DeleteEvaluationInput): Observable<DeleteEvaluationOutput> {
			return this.http.post<DeleteEvaluationOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.DeleteEvaluation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Assigns the <code>DELETED</code> status to an <code>MLModel</code>, rendering it unusable.</p> <p>After using the <code>DeleteMLModel</code> operation, you can use the <code>GetMLModel</code> operation to verify that the status of the <code>MLModel</code> changed to DELETED.</p> <p> <b>Caution:</b> The result of the <code>DeleteMLModel</code> operation is irreversible.</p>
		 * Post #X-Amz-Target=AmazonML_20141212.DeleteMLModel
		 * @return {DeleteMLModelOutput} Success
		 */
		DeleteMLModel(requestBody: DeleteMLModelInput): Observable<DeleteMLModelOutput> {
			return this.http.post<DeleteMLModelOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.DeleteMLModel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a real time endpoint of an <code>MLModel</code>.
		 * Post #X-Amz-Target=AmazonML_20141212.DeleteRealtimeEndpoint
		 * @return {DeleteRealtimeEndpointOutput} Success
		 */
		DeleteRealtimeEndpoint(requestBody: DeleteRealtimeEndpointInput): Observable<DeleteRealtimeEndpointOutput> {
			return this.http.post<DeleteRealtimeEndpointOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.DeleteRealtimeEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified tags associated with an ML object. After this operation is complete, you can't recover deleted tags.</p> <p>If you specify a tag that doesn't exist, Amazon ML ignores it.</p>
		 * Post #X-Amz-Target=AmazonML_20141212.DeleteTags
		 * @return {DeleteTagsOutput} Success
		 */
		DeleteTags(requestBody: DeleteTagsInput): Observable<DeleteTagsOutput> {
			return this.http.post<DeleteTagsOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.DeleteTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of <code>BatchPrediction</code> operations that match the search criteria in the request.
		 * Post #X-Amz-Target=AmazonML_20141212.DescribeBatchPredictions
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeBatchPredictionsOutput} Success
		 */
		DescribeBatchPredictions(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeBatchPredictionsInput): Observable<DescribeBatchPredictionsOutput> {
			return this.http.post<DescribeBatchPredictionsOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.DescribeBatchPredictions?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of <code>DataSource</code> that match the search criteria in the request.
		 * Post #X-Amz-Target=AmazonML_20141212.DescribeDataSources
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeDataSourcesOutput} Success
		 */
		DescribeDataSources(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeDataSourcesInput): Observable<DescribeDataSourcesOutput> {
			return this.http.post<DescribeDataSourcesOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.DescribeDataSources?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of <code>DescribeEvaluations</code> that match the search criteria in the request.
		 * Post #X-Amz-Target=AmazonML_20141212.DescribeEvaluations
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeEvaluationsOutput} Success
		 */
		DescribeEvaluations(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeEvaluationsInput): Observable<DescribeEvaluationsOutput> {
			return this.http.post<DescribeEvaluationsOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.DescribeEvaluations?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of <code>MLModel</code> that match the search criteria in the request.
		 * Post #X-Amz-Target=AmazonML_20141212.DescribeMLModels
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeMLModelsOutput} Success
		 */
		DescribeMLModels(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeMLModelsInput): Observable<DescribeMLModelsOutput> {
			return this.http.post<DescribeMLModelsOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.DescribeMLModels?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes one or more of the tags for your Amazon ML object.
		 * Post #X-Amz-Target=AmazonML_20141212.DescribeTags
		 * @return {DescribeTagsOutput} Success
		 */
		DescribeTags(requestBody: DescribeTagsInput): Observable<DescribeTagsOutput> {
			return this.http.post<DescribeTagsOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.DescribeTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a <code>BatchPrediction</code> that includes detailed metadata, status, and data file information for a <code>Batch Prediction</code> request.
		 * Post #X-Amz-Target=AmazonML_20141212.GetBatchPrediction
		 * @return {GetBatchPredictionOutput} Success
		 */
		GetBatchPrediction(requestBody: GetBatchPredictionInput): Observable<GetBatchPredictionOutput> {
			return this.http.post<GetBatchPredictionOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.GetBatchPrediction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a <code>DataSource</code> that includes metadata and data file information, as well as the current status of the <code>DataSource</code>.</p> <p> <code>GetDataSource</code> provides results in normal or verbose format. The verbose format adds the schema description and the list of files pointed to by the DataSource to the normal format.</p>
		 * Post #X-Amz-Target=AmazonML_20141212.GetDataSource
		 * @return {GetDataSourceOutput} Success
		 */
		GetDataSource(requestBody: GetDataSourceInput): Observable<GetDataSourceOutput> {
			return this.http.post<GetDataSourceOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.GetDataSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an <code>Evaluation</code> that includes metadata as well as the current status of the <code>Evaluation</code>.
		 * Post #X-Amz-Target=AmazonML_20141212.GetEvaluation
		 * @return {GetEvaluationOutput} Success
		 */
		GetEvaluation(requestBody: GetEvaluationInput): Observable<GetEvaluationOutput> {
			return this.http.post<GetEvaluationOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.GetEvaluation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns an <code>MLModel</code> that includes detailed metadata, data source information, and the current status of the <code>MLModel</code>.</p> <p> <code>GetMLModel</code> provides results in normal or verbose format. </p>
		 * Post #X-Amz-Target=AmazonML_20141212.GetMLModel
		 * @return {GetMLModelOutput} Success
		 */
		GetMLModel(requestBody: GetMLModelInput): Observable<GetMLModelOutput> {
			return this.http.post<GetMLModelOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.GetMLModel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Generates a prediction for the observation using the specified <code>ML Model</code>.</p> <p> <b>Note:</b> Not all response parameters will be populated. Whether a response parameter is populated depends on the type of model requested.</p>
		 * Post #X-Amz-Target=AmazonML_20141212.Predict
		 * @return {PredictOutput} Success
		 */
		Predict(requestBody: PredictInput): Observable<PredictOutput> {
			return this.http.post<PredictOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.Predict', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the <code>BatchPredictionName</code> of a <code>BatchPrediction</code>.</p> <p>You can use the <code>GetBatchPrediction</code> operation to view the contents of the updated data element.</p>
		 * Post #X-Amz-Target=AmazonML_20141212.UpdateBatchPrediction
		 * @return {UpdateBatchPredictionOutput} Success
		 */
		UpdateBatchPrediction(requestBody: UpdateBatchPredictionInput): Observable<UpdateBatchPredictionOutput> {
			return this.http.post<UpdateBatchPredictionOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.UpdateBatchPrediction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the <code>DataSourceName</code> of a <code>DataSource</code>.</p> <p>You can use the <code>GetDataSource</code> operation to view the contents of the updated data element.</p>
		 * Post #X-Amz-Target=AmazonML_20141212.UpdateDataSource
		 * @return {UpdateDataSourceOutput} Success
		 */
		UpdateDataSource(requestBody: UpdateDataSourceInput): Observable<UpdateDataSourceOutput> {
			return this.http.post<UpdateDataSourceOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.UpdateDataSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the <code>EvaluationName</code> of an <code>Evaluation</code>.</p> <p>You can use the <code>GetEvaluation</code> operation to view the contents of the updated data element.</p>
		 * Post #X-Amz-Target=AmazonML_20141212.UpdateEvaluation
		 * @return {UpdateEvaluationOutput} Success
		 */
		UpdateEvaluation(requestBody: UpdateEvaluationInput): Observable<UpdateEvaluationOutput> {
			return this.http.post<UpdateEvaluationOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.UpdateEvaluation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the <code>MLModelName</code> and the <code>ScoreThreshold</code> of an <code>MLModel</code>.</p> <p>You can use the <code>GetMLModel</code> operation to view the contents of the updated data element.</p>
		 * Post #X-Amz-Target=AmazonML_20141212.UpdateMLModel
		 * @return {UpdateMLModelOutput} Success
		 */
		UpdateMLModel(requestBody: UpdateMLModelInput): Observable<UpdateMLModelOutput> {
			return this.http.post<UpdateMLModelOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.UpdateMLModel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AddTagsX_Amz_Target { 'AmazonML_20141212.AddTags' = 'AmazonML_20141212.AddTags' }

	export enum CreateBatchPredictionX_Amz_Target { 'AmazonML_20141212.CreateBatchPrediction' = 'AmazonML_20141212.CreateBatchPrediction' }

	export enum CreateDataSourceFromRDSX_Amz_Target { 'AmazonML_20141212.CreateDataSourceFromRDS' = 'AmazonML_20141212.CreateDataSourceFromRDS' }

	export enum CreateDataSourceFromRedshiftX_Amz_Target { 'AmazonML_20141212.CreateDataSourceFromRedshift' = 'AmazonML_20141212.CreateDataSourceFromRedshift' }

	export enum CreateDataSourceFromS3X_Amz_Target { 'AmazonML_20141212.CreateDataSourceFromS3' = 'AmazonML_20141212.CreateDataSourceFromS3' }

	export enum CreateEvaluationX_Amz_Target { 'AmazonML_20141212.CreateEvaluation' = 'AmazonML_20141212.CreateEvaluation' }

	export enum CreateMLModelX_Amz_Target { 'AmazonML_20141212.CreateMLModel' = 'AmazonML_20141212.CreateMLModel' }

	export enum CreateRealtimeEndpointX_Amz_Target { 'AmazonML_20141212.CreateRealtimeEndpoint' = 'AmazonML_20141212.CreateRealtimeEndpoint' }

	export enum DeleteBatchPredictionX_Amz_Target { 'AmazonML_20141212.DeleteBatchPrediction' = 'AmazonML_20141212.DeleteBatchPrediction' }

	export enum DeleteDataSourceX_Amz_Target { 'AmazonML_20141212.DeleteDataSource' = 'AmazonML_20141212.DeleteDataSource' }

	export enum DeleteEvaluationX_Amz_Target { 'AmazonML_20141212.DeleteEvaluation' = 'AmazonML_20141212.DeleteEvaluation' }

	export enum DeleteMLModelX_Amz_Target { 'AmazonML_20141212.DeleteMLModel' = 'AmazonML_20141212.DeleteMLModel' }

	export enum DeleteRealtimeEndpointX_Amz_Target { 'AmazonML_20141212.DeleteRealtimeEndpoint' = 'AmazonML_20141212.DeleteRealtimeEndpoint' }

	export enum DeleteTagsX_Amz_Target { 'AmazonML_20141212.DeleteTags' = 'AmazonML_20141212.DeleteTags' }

	export enum DescribeBatchPredictionsX_Amz_Target { 'AmazonML_20141212.DescribeBatchPredictions' = 'AmazonML_20141212.DescribeBatchPredictions' }

	export enum DescribeDataSourcesX_Amz_Target { 'AmazonML_20141212.DescribeDataSources' = 'AmazonML_20141212.DescribeDataSources' }

	export enum DescribeEvaluationsX_Amz_Target { 'AmazonML_20141212.DescribeEvaluations' = 'AmazonML_20141212.DescribeEvaluations' }

	export enum DescribeMLModelsX_Amz_Target { 'AmazonML_20141212.DescribeMLModels' = 'AmazonML_20141212.DescribeMLModels' }

	export enum DescribeTagsX_Amz_Target { 'AmazonML_20141212.DescribeTags' = 'AmazonML_20141212.DescribeTags' }

	export enum GetBatchPredictionX_Amz_Target { 'AmazonML_20141212.GetBatchPrediction' = 'AmazonML_20141212.GetBatchPrediction' }

	export enum GetDataSourceX_Amz_Target { 'AmazonML_20141212.GetDataSource' = 'AmazonML_20141212.GetDataSource' }

	export enum GetEvaluationX_Amz_Target { 'AmazonML_20141212.GetEvaluation' = 'AmazonML_20141212.GetEvaluation' }

	export enum GetMLModelX_Amz_Target { 'AmazonML_20141212.GetMLModel' = 'AmazonML_20141212.GetMLModel' }

	export enum PredictX_Amz_Target { 'AmazonML_20141212.Predict' = 'AmazonML_20141212.Predict' }

	export enum UpdateBatchPredictionX_Amz_Target { 'AmazonML_20141212.UpdateBatchPrediction' = 'AmazonML_20141212.UpdateBatchPrediction' }

	export enum UpdateDataSourceX_Amz_Target { 'AmazonML_20141212.UpdateDataSource' = 'AmazonML_20141212.UpdateDataSource' }

	export enum UpdateEvaluationX_Amz_Target { 'AmazonML_20141212.UpdateEvaluation' = 'AmazonML_20141212.UpdateEvaluation' }

	export enum UpdateMLModelX_Amz_Target { 'AmazonML_20141212.UpdateMLModel' = 'AmazonML_20141212.UpdateMLModel' }

}

