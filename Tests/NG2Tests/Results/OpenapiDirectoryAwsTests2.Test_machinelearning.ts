import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Amazon ML returns the following elements.  */
	export interface AddTagsOutput {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ResourceId?: string | null;
		ResourceType?: AddTagsOutputResourceType | null;
	}

	/** Amazon ML returns the following elements.  */
	export interface AddTagsOutputFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ResourceId: FormControl<string | null | undefined>,
		ResourceType: FormControl<AddTagsOutputResourceType | null | undefined>,
	}
	export function CreateAddTagsOutputFormGroup() {
		return new FormGroup<AddTagsOutputFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			ResourceType: new FormControl<AddTagsOutputResourceType | null | undefined>(undefined),
		});

	}

	export enum AddTagsOutputResourceType { BatchPrediction = 0, DataSource = 1, Evaluation = 2, MLModel = 3 }

	export interface AddTagsInput {

		/**
		 * Required
		 * Maximum items: 100
		 */
		Tags: Array<Tag>;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResourceId: string;

		/** Required */
		ResourceType: AddTagsOutputResourceType;
	}
	export interface AddTagsInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<AddTagsOutputResourceType | null | undefined>,
	}
	export function CreateAddTagsInputFormGroup() {
		return new FormGroup<AddTagsInputFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			ResourceType: new FormControl<AddTagsOutputResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A custom key-value pair associated with an ML object, such as an ML model. */
	export interface Tag {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Key?: string | null;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Value?: string | null;
	}

	/** A custom key-value pair associated with an ML object, such as an ML model. */
	export interface TagFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
		});

	}


	/** An error on the client occurred. Typically, the cause is an invalid input value. */
	export interface InvalidInputException {

		/** Max length: 2048 */
		message?: string | null;
		code?: number | null;
	}

	/** An error on the client occurred. Typically, the cause is an invalid input value. */
	export interface InvalidInputExceptionFormProperties {

		/** Max length: 2048 */
		message: FormControl<string | null | undefined>,
		code: FormControl<number | null | undefined>,
	}
	export function CreateInvalidInputExceptionFormGroup() {
		return new FormGroup<InvalidInputExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			code: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvalidTagException {

		/** Max length: 2048 */
		message?: string | null;
	}
	export interface InvalidTagExceptionFormProperties {

		/** Max length: 2048 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidTagExceptionFormGroup() {
		return new FormGroup<InvalidTagExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
		});

	}

	export interface TagLimitExceededException {

		/** Max length: 2048 */
		message?: string | null;
	}
	export interface TagLimitExceededExceptionFormProperties {

		/** Max length: 2048 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateTagLimitExceededExceptionFormGroup() {
		return new FormGroup<TagLimitExceededExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
		});

	}


	/** A specified resource cannot be located. */
	export interface ResourceNotFoundException {

		/** Max length: 2048 */
		message?: string | null;
		code?: number | null;
	}

	/** A specified resource cannot be located. */
	export interface ResourceNotFoundExceptionFormProperties {

		/** Max length: 2048 */
		message: FormControl<string | null | undefined>,
		code: FormControl<number | null | undefined>,
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			code: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An error on the server occurred when trying to process a request. */
	export interface InternalServerException {

		/** Max length: 2048 */
		message?: string | null;
		code?: number | null;
	}

	/** An error on the server occurred when trying to process a request. */
	export interface InternalServerExceptionFormProperties {

		/** Max length: 2048 */
		message: FormControl<string | null | undefined>,
		code: FormControl<number | null | undefined>,
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			code: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p> Represents the output of a <code>CreateBatchPrediction</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateBatchPrediction</code> operation is asynchronous. You can poll for status updates by using the <code>&gt;GetBatchPrediction</code> operation and checking the <code>Status</code> parameter of the result. </p> */
	export interface CreateBatchPredictionOutput {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		BatchPredictionId?: string | null;
	}

	/** <p> Represents the output of a <code>CreateBatchPrediction</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateBatchPrediction</code> operation is asynchronous. You can poll for status updates by using the <code>&gt;GetBatchPrediction</code> operation and checking the <code>Status</code> parameter of the result. </p> */
	export interface CreateBatchPredictionOutputFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		BatchPredictionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateBatchPredictionOutputFormGroup() {
		return new FormGroup<CreateBatchPredictionOutputFormProperties>({
			BatchPredictionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface CreateBatchPredictionInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		BatchPredictionId: string;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		BatchPredictionName?: string | null;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		BatchPredictionDataSourceId: string;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Required
		 * Max length: 2048
		 */
		OutputUri: string;
	}
	export interface CreateBatchPredictionInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		BatchPredictionId: FormControl<string | null | undefined>,

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		BatchPredictionName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		BatchPredictionDataSourceId: FormControl<string | null | undefined>,

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Required
		 * Max length: 2048
		 */
		OutputUri: FormControl<string | null | undefined>,
	}
	export function CreateCreateBatchPredictionInputFormGroup() {
		return new FormGroup<CreateBatchPredictionInputFormProperties>({
			BatchPredictionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			BatchPredictionName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			BatchPredictionDataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			OutputUri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.pattern('s3://([^/]+)(/.*)?')]),
		});

	}


	/** A second request to use or change an object was not allowed. This can result from retrying a request using a parameter that was not present in the original request. */
	export interface IdempotentParameterMismatchException {

		/** Max length: 2048 */
		message?: string | null;
		code?: number | null;
	}

	/** A second request to use or change an object was not allowed. This can result from retrying a request using a parameter that was not present in the original request. */
	export interface IdempotentParameterMismatchExceptionFormProperties {

		/** Max length: 2048 */
		message: FormControl<string | null | undefined>,
		code: FormControl<number | null | undefined>,
	}
	export function CreateIdempotentParameterMismatchExceptionFormGroup() {
		return new FormGroup<IdempotentParameterMismatchExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			code: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p> Represents the output of a <code>CreateDataSourceFromRDS</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromRDS</code>&gt; operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. You can inspect the <code>Message</code> when <code>Status</code> shows up as <code>FAILED</code>. You can also check the progress of the copy operation by going to the <code>DataPipeline</code> console and looking up the pipeline using the <code>pipelineId </code> from the describe call.</p> */
	export interface CreateDataSourceFromRDSOutput {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId?: string | null;
	}

	/** <p> Represents the output of a <code>CreateDataSourceFromRDS</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromRDS</code>&gt; operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. You can inspect the <code>Message</code> when <code>Status</code> shows up as <code>FAILED</code>. You can also check the progress of the copy operation by going to the <code>DataPipeline</code> console and looking up the pipeline using the <code>pipelineId </code> from the describe call.</p> */
	export interface CreateDataSourceFromRDSOutputFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSourceFromRDSOutputFormGroup() {
		return new FormGroup<CreateDataSourceFromRDSOutputFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface CreateDataSourceFromRDSInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId: string;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		DataSourceName?: string | null;

		/**
		 * The data specification of an Amazon Relational Database Service (Amazon RDS) <code>DataSource</code>.
		 * Required
		 */
		RDSData: RDSDataSpec;

		/**
		 * The Amazon Resource Name (ARN) of an <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename.
		 * Required
		 * Max length: 110
		 * Min length: 1
		 */
		RoleARN: string;
		ComputeStatistics?: boolean | null;
	}
	export interface CreateDataSourceFromRDSInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId: FormControl<string | null | undefined>,

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		DataSourceName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of an <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename.
		 * Required
		 * Max length: 110
		 * Min length: 1
		 */
		RoleARN: FormControl<string | null | undefined>,
		ComputeStatistics: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDataSourceFromRDSInputFormGroup() {
		return new FormGroup<CreateDataSourceFromRDSInputFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			DataSourceName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(110), Validators.minLength(1)]),
			ComputeStatistics: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The data specification of an Amazon Relational Database Service (Amazon RDS) <code>DataSource</code>. */
	export interface RDSDataSpec {

		/**
		 * The database details of an Amazon RDS database.
		 * Required
		 */
		DatabaseInformation: RDSDatabase;

		/**
		 * The SQL query to be executed against the Amazon RDS database. The SQL query should be valid for the Amazon RDS type being used.
		 * Required
		 * Max length: 16777216
		 * Min length: 1
		 */
		SelectSqlQuery: string;

		/**
		 * The database credentials to connect to a database on an RDS DB instance.
		 * Required
		 */
		DatabaseCredentials: RDSDatabaseCredentials;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Required
		 * Max length: 2048
		 */
		S3StagingLocation: string;
		DataRearrangement?: string | null;

		/**
		 * <p>The schema of a <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>. The DataSource schema is expressed in JSON format.</p> <p><code>DataSchema</code> is not required if you specify a <code>DataSchemaUri</code></p> <p>{ "version": "1.0", "recordAnnotationFieldName": "F1", "recordWeightFieldName": "F2", "targetFieldName": "F3", "dataFormat": "CSV", "dataFileContainsHeader": true, "variables": [ { "fieldName": "F1", "fieldType": "TEXT" }, { "fieldName": "F2", "fieldType": "NUMERIC" }, { "fieldName": "F3", "fieldType": "CATEGORICAL" }, { "fieldName": "F4", "fieldType": "NUMERIC" }, { "fieldName": "F5", "fieldType": "CATEGORICAL" }, { "fieldName": "F6", "fieldType": "TEXT" }, { "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" }, { "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" } ], "excludedVariableNames": [ "F6" ] } </p>
		 * Max length: 131071
		 */
		DataSchema?: string | null;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		DataSchemaUri?: string | null;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResourceRole: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ServiceRole: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		SubnetId: string;

		/** Required */
		SecurityGroupIds: Array<string>;
	}

	/** The data specification of an Amazon Relational Database Service (Amazon RDS) <code>DataSource</code>. */
	export interface RDSDataSpecFormProperties {

		/**
		 * The SQL query to be executed against the Amazon RDS database. The SQL query should be valid for the Amazon RDS type being used.
		 * Required
		 * Max length: 16777216
		 * Min length: 1
		 */
		SelectSqlQuery: FormControl<string | null | undefined>,

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Required
		 * Max length: 2048
		 */
		S3StagingLocation: FormControl<string | null | undefined>,
		DataRearrangement: FormControl<string | null | undefined>,

		/**
		 * <p>The schema of a <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>. The DataSource schema is expressed in JSON format.</p> <p><code>DataSchema</code> is not required if you specify a <code>DataSchemaUri</code></p> <p>{ "version": "1.0", "recordAnnotationFieldName": "F1", "recordWeightFieldName": "F2", "targetFieldName": "F3", "dataFormat": "CSV", "dataFileContainsHeader": true, "variables": [ { "fieldName": "F1", "fieldType": "TEXT" }, { "fieldName": "F2", "fieldType": "NUMERIC" }, { "fieldName": "F3", "fieldType": "CATEGORICAL" }, { "fieldName": "F4", "fieldType": "NUMERIC" }, { "fieldName": "F5", "fieldType": "CATEGORICAL" }, { "fieldName": "F6", "fieldType": "TEXT" }, { "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" }, { "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" } ], "excludedVariableNames": [ "F6" ] } </p>
		 * Max length: 131071
		 */
		DataSchema: FormControl<string | null | undefined>,

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		DataSchemaUri: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResourceRole: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ServiceRole: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		SubnetId: FormControl<string | null | undefined>,
	}
	export function CreateRDSDataSpecFormGroup() {
		return new FormGroup<RDSDataSpecFormProperties>({
			SelectSqlQuery: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(16777216), Validators.minLength(1)]),
			S3StagingLocation: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.pattern('s3://([^/]+)(/.*)?')]),
			DataRearrangement: new FormControl<string | null | undefined>(undefined),
			DataSchema: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(131071)]),
			DataSchemaUri: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('s3://([^/]+)(/.*)?')]),
			ResourceRole: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			ServiceRole: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			SubnetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
		});

	}


	/** The database details of an Amazon RDS database. */
	export interface RDSDatabase {

		/**
		 * Identifier of RDS DB Instances.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		InstanceIdentifier: string;

		/**
		 * The name of a database hosted on an RDS DB instance.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DatabaseName: string;
	}

	/** The database details of an Amazon RDS database. */
	export interface RDSDatabaseFormProperties {

		/**
		 * Identifier of RDS DB Instances.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		InstanceIdentifier: FormControl<string | null | undefined>,

		/**
		 * The name of a database hosted on an RDS DB instance.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,
	}
	export function CreateRDSDatabaseFormGroup() {
		return new FormGroup<RDSDatabaseFormProperties>({
			InstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('[a-z0-9-]+')]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
		});

	}


	/** The database credentials to connect to a database on an RDS DB instance. */
	export interface RDSDatabaseCredentials {

		/**
		 * The username to be used by Amazon ML to connect to database on an Amazon RDS instance. The username should have sufficient permissions to execute an <code>RDSSelectSqlQuery</code> query.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;

		/**
		 * The password to be used by Amazon ML to connect to a database on an RDS DB instance. The password should have sufficient permissions to execute the <code>RDSSelectQuery</code> query.
		 * Required
		 * Max length: 128
		 * Min length: 8
		 */
		Password: string;
	}

	/** The database credentials to connect to a database on an RDS DB instance. */
	export interface RDSDatabaseCredentialsFormProperties {

		/**
		 * The username to be used by Amazon ML to connect to database on an Amazon RDS instance. The username should have sufficient permissions to execute an <code>RDSSelectSqlQuery</code> query.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * The password to be used by Amazon ML to connect to a database on an RDS DB instance. The password should have sufficient permissions to execute the <code>RDSSelectQuery</code> query.
		 * Required
		 * Max length: 128
		 * Min length: 8
		 */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateRDSDatabaseCredentialsFormGroup() {
		return new FormGroup<RDSDatabaseCredentialsFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(8)]),
		});

	}


	/** <p> Represents the output of a <code>CreateDataSourceFromRedshift</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromRedshift</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p> */
	export interface CreateDataSourceFromRedshiftOutput {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId?: string | null;
	}

	/** <p> Represents the output of a <code>CreateDataSourceFromRedshift</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromRedshift</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p> */
	export interface CreateDataSourceFromRedshiftOutputFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSourceFromRedshiftOutputFormGroup() {
		return new FormGroup<CreateDataSourceFromRedshiftOutputFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface CreateDataSourceFromRedshiftInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId: string;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		DataSourceName?: string | null;

		/**
		 * Describes the data specification of an Amazon Redshift <code>DataSource</code>.
		 * Required
		 */
		DataSpec: RedshiftDataSpec;

		/**
		 * The Amazon Resource Name (ARN) of an <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename.
		 * Required
		 * Max length: 110
		 * Min length: 1
		 */
		RoleARN: string;
		ComputeStatistics?: boolean | null;
	}
	export interface CreateDataSourceFromRedshiftInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId: FormControl<string | null | undefined>,

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		DataSourceName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of an <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename.
		 * Required
		 * Max length: 110
		 * Min length: 1
		 */
		RoleARN: FormControl<string | null | undefined>,
		ComputeStatistics: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDataSourceFromRedshiftInputFormGroup() {
		return new FormGroup<CreateDataSourceFromRedshiftInputFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			DataSourceName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(110), Validators.minLength(1)]),
			ComputeStatistics: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes the data specification of an Amazon Redshift <code>DataSource</code>. */
	export interface RedshiftDataSpec {

		/**
		 * Describes the database details required to connect to an Amazon Redshift database.
		 * Required
		 */
		DatabaseInformation: RedshiftDatabase;

		/**
		 * Describes the SQL query to execute on the Amazon Redshift database. The SQL query should be valid for an Amazon Redshift <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_SELECT_synopsis.html">SELECT</a>.
		 * Required
		 * Max length: 16777216
		 * Min length: 1
		 */
		SelectSqlQuery: string;

		/**
		 * Describes the database credentials for connecting to a database on an Amazon Redshift cluster.
		 * Required
		 */
		DatabaseCredentials: RedshiftDatabaseCredentials;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Required
		 * Max length: 2048
		 */
		S3StagingLocation: string;
		DataRearrangement?: string | null;

		/**
		 * <p>The schema of a <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>. The DataSource schema is expressed in JSON format.</p> <p><code>DataSchema</code> is not required if you specify a <code>DataSchemaUri</code></p> <p>{ "version": "1.0", "recordAnnotationFieldName": "F1", "recordWeightFieldName": "F2", "targetFieldName": "F3", "dataFormat": "CSV", "dataFileContainsHeader": true, "variables": [ { "fieldName": "F1", "fieldType": "TEXT" }, { "fieldName": "F2", "fieldType": "NUMERIC" }, { "fieldName": "F3", "fieldType": "CATEGORICAL" }, { "fieldName": "F4", "fieldType": "NUMERIC" }, { "fieldName": "F5", "fieldType": "CATEGORICAL" }, { "fieldName": "F6", "fieldType": "TEXT" }, { "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" }, { "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" } ], "excludedVariableNames": [ "F6" ] } </p>
		 * Max length: 131071
		 */
		DataSchema?: string | null;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		DataSchemaUri?: string | null;
	}

	/** Describes the data specification of an Amazon Redshift <code>DataSource</code>. */
	export interface RedshiftDataSpecFormProperties {

		/**
		 * Describes the SQL query to execute on the Amazon Redshift database. The SQL query should be valid for an Amazon Redshift <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_SELECT_synopsis.html">SELECT</a>.
		 * Required
		 * Max length: 16777216
		 * Min length: 1
		 */
		SelectSqlQuery: FormControl<string | null | undefined>,

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Required
		 * Max length: 2048
		 */
		S3StagingLocation: FormControl<string | null | undefined>,
		DataRearrangement: FormControl<string | null | undefined>,

		/**
		 * <p>The schema of a <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>. The DataSource schema is expressed in JSON format.</p> <p><code>DataSchema</code> is not required if you specify a <code>DataSchemaUri</code></p> <p>{ "version": "1.0", "recordAnnotationFieldName": "F1", "recordWeightFieldName": "F2", "targetFieldName": "F3", "dataFormat": "CSV", "dataFileContainsHeader": true, "variables": [ { "fieldName": "F1", "fieldType": "TEXT" }, { "fieldName": "F2", "fieldType": "NUMERIC" }, { "fieldName": "F3", "fieldType": "CATEGORICAL" }, { "fieldName": "F4", "fieldType": "NUMERIC" }, { "fieldName": "F5", "fieldType": "CATEGORICAL" }, { "fieldName": "F6", "fieldType": "TEXT" }, { "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" }, { "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" } ], "excludedVariableNames": [ "F6" ] } </p>
		 * Max length: 131071
		 */
		DataSchema: FormControl<string | null | undefined>,

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		DataSchemaUri: FormControl<string | null | undefined>,
	}
	export function CreateRedshiftDataSpecFormGroup() {
		return new FormGroup<RedshiftDataSpecFormProperties>({
			SelectSqlQuery: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(16777216), Validators.minLength(1)]),
			S3StagingLocation: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.pattern('s3://([^/]+)(/.*)?')]),
			DataRearrangement: new FormControl<string | null | undefined>(undefined),
			DataSchema: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(131071)]),
			DataSchemaUri: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('s3://([^/]+)(/.*)?')]),
		});

	}


	/** Describes the database details required to connect to an Amazon Redshift database. */
	export interface RedshiftDatabase {

		/**
		 * The name of a database hosted on an Amazon Redshift cluster.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * The ID of an Amazon Redshift cluster.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ClusterIdentifier: string;
	}

	/** Describes the database details required to connect to an Amazon Redshift database. */
	export interface RedshiftDatabaseFormProperties {

		/**
		 * The name of a database hosted on an Amazon Redshift cluster.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * The ID of an Amazon Redshift cluster.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ClusterIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateRedshiftDatabaseFormGroup() {
		return new FormGroup<RedshiftDatabaseFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-z0-9]+')]),
			ClusterIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('[a-z0-9-]+')]),
		});

	}


	/**  Describes the database credentials for connecting to a database on an Amazon Redshift cluster. */
	export interface RedshiftDatabaseCredentials {

		/**
		 * A username to be used by Amazon Machine Learning (Amazon ML)to connect to a database on an Amazon Redshift cluster. The username should have sufficient permissions to execute the <code>RedshiftSelectSqlQuery</code> query. The username should be valid for an Amazon Redshift <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;

		/**
		 * A password to be used by Amazon ML to connect to a database on an Amazon Redshift cluster. The password should have sufficient permissions to execute a <code>RedshiftSelectSqlQuery</code> query. The password should be valid for an Amazon Redshift <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.
		 * Required
		 * Max length: 64
		 * Min length: 8
		 */
		Password: string;
	}

	/**  Describes the database credentials for connecting to a database on an Amazon Redshift cluster. */
	export interface RedshiftDatabaseCredentialsFormProperties {

		/**
		 * A username to be used by Amazon Machine Learning (Amazon ML)to connect to a database on an Amazon Redshift cluster. The username should have sufficient permissions to execute the <code>RedshiftSelectSqlQuery</code> query. The username should be valid for an Amazon Redshift <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * A password to be used by Amazon ML to connect to a database on an Amazon Redshift cluster. The password should have sufficient permissions to execute a <code>RedshiftSelectSqlQuery</code> query. The password should be valid for an Amazon Redshift <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.
		 * Required
		 * Max length: 64
		 * Min length: 8
		 */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateRedshiftDatabaseCredentialsFormGroup() {
		return new FormGroup<RedshiftDatabaseCredentialsFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(8)]),
		});

	}


	/** <p> Represents the output of a <code>CreateDataSourceFromS3</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromS3</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p> */
	export interface CreateDataSourceFromS3Output {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId?: string | null;
	}

	/** <p> Represents the output of a <code>CreateDataSourceFromS3</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromS3</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p> */
	export interface CreateDataSourceFromS3OutputFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSourceFromS3OutputFormGroup() {
		return new FormGroup<CreateDataSourceFromS3OutputFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface CreateDataSourceFromS3Input {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId: string;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		DataSourceName?: string | null;

		/**
		 * Describes the data specification of a <code>DataSource</code>.
		 * Required
		 */
		DataSpec: S3DataSpec;
		ComputeStatistics?: boolean | null;
	}
	export interface CreateDataSourceFromS3InputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId: FormControl<string | null | undefined>,

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		DataSourceName: FormControl<string | null | undefined>,
		ComputeStatistics: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDataSourceFromS3InputFormGroup() {
		return new FormGroup<CreateDataSourceFromS3InputFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			DataSourceName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			ComputeStatistics: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  Describes the data specification of a <code>DataSource</code>. */
	export interface S3DataSpec {

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Required
		 * Max length: 2048
		 */
		DataLocationS3: string;
		DataRearrangement?: string | null;

		/**
		 * <p>The schema of a <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>. The DataSource schema is expressed in JSON format.</p> <p><code>DataSchema</code> is not required if you specify a <code>DataSchemaUri</code></p> <p>{ "version": "1.0", "recordAnnotationFieldName": "F1", "recordWeightFieldName": "F2", "targetFieldName": "F3", "dataFormat": "CSV", "dataFileContainsHeader": true, "variables": [ { "fieldName": "F1", "fieldType": "TEXT" }, { "fieldName": "F2", "fieldType": "NUMERIC" }, { "fieldName": "F3", "fieldType": "CATEGORICAL" }, { "fieldName": "F4", "fieldType": "NUMERIC" }, { "fieldName": "F5", "fieldType": "CATEGORICAL" }, { "fieldName": "F6", "fieldType": "TEXT" }, { "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" }, { "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" } ], "excludedVariableNames": [ "F6" ] } </p>
		 * Max length: 131071
		 */
		DataSchema?: string | null;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		DataSchemaLocationS3?: string | null;
	}

	/**  Describes the data specification of a <code>DataSource</code>. */
	export interface S3DataSpecFormProperties {

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Required
		 * Max length: 2048
		 */
		DataLocationS3: FormControl<string | null | undefined>,
		DataRearrangement: FormControl<string | null | undefined>,

		/**
		 * <p>The schema of a <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>. The DataSource schema is expressed in JSON format.</p> <p><code>DataSchema</code> is not required if you specify a <code>DataSchemaUri</code></p> <p>{ "version": "1.0", "recordAnnotationFieldName": "F1", "recordWeightFieldName": "F2", "targetFieldName": "F3", "dataFormat": "CSV", "dataFileContainsHeader": true, "variables": [ { "fieldName": "F1", "fieldType": "TEXT" }, { "fieldName": "F2", "fieldType": "NUMERIC" }, { "fieldName": "F3", "fieldType": "CATEGORICAL" }, { "fieldName": "F4", "fieldType": "NUMERIC" }, { "fieldName": "F5", "fieldType": "CATEGORICAL" }, { "fieldName": "F6", "fieldType": "TEXT" }, { "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" }, { "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" } ], "excludedVariableNames": [ "F6" ] } </p>
		 * Max length: 131071
		 */
		DataSchema: FormControl<string | null | undefined>,

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		DataSchemaLocationS3: FormControl<string | null | undefined>,
	}
	export function CreateS3DataSpecFormGroup() {
		return new FormGroup<S3DataSpecFormProperties>({
			DataLocationS3: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.pattern('s3://([^/]+)(/.*)?')]),
			DataRearrangement: new FormControl<string | null | undefined>(undefined),
			DataSchema: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(131071)]),
			DataSchemaLocationS3: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('s3://([^/]+)(/.*)?')]),
		});

	}


	/** <p> Represents the output of a <code>CreateEvaluation</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p><code>CreateEvaluation</code> operation is asynchronous. You can poll for status updates by using the <code>GetEvcaluation</code> operation and checking the <code>Status</code> parameter. </p> */
	export interface CreateEvaluationOutput {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		EvaluationId?: string | null;
	}

	/** <p> Represents the output of a <code>CreateEvaluation</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p><code>CreateEvaluation</code> operation is asynchronous. You can poll for status updates by using the <code>GetEvcaluation</code> operation and checking the <code>Status</code> parameter. </p> */
	export interface CreateEvaluationOutputFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		EvaluationId: FormControl<string | null | undefined>,
	}
	export function CreateCreateEvaluationOutputFormGroup() {
		return new FormGroup<CreateEvaluationOutputFormProperties>({
			EvaluationId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface CreateEvaluationInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		EvaluationId: string;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		EvaluationName?: string | null;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		EvaluationDataSourceId: string;
	}
	export interface CreateEvaluationInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		EvaluationId: FormControl<string | null | undefined>,

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		EvaluationName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		EvaluationDataSourceId: FormControl<string | null | undefined>,
	}
	export function CreateCreateEvaluationInputFormGroup() {
		return new FormGroup<CreateEvaluationInputFormProperties>({
			EvaluationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			EvaluationName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			EvaluationDataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}


	/** <p> Represents the output of a <code>CreateMLModel</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateMLModel</code> operation is asynchronous. You can poll for status updates by using the <code>GetMLModel</code> operation and checking the <code>Status</code> parameter. </p> */
	export interface CreateMLModelOutput {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId?: string | null;
	}

	/** <p> Represents the output of a <code>CreateMLModel</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateMLModel</code> operation is asynchronous. You can poll for status updates by using the <code>GetMLModel</code> operation and checking the <code>Status</code> parameter. </p> */
	export interface CreateMLModelOutputFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: FormControl<string | null | undefined>,
	}
	export function CreateCreateMLModelOutputFormGroup() {
		return new FormGroup<CreateMLModelOutputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface CreateMLModelInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: string;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		MLModelName?: string | null;

		/** Required */
		MLModelType: CreateMLModelInputMLModelType;
		Parameters?: TrainingParameters;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		TrainingDataSourceId: string;

		/** Max length: 131071 */
		Recipe?: string | null;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		RecipeUri?: string | null;
	}
	export interface CreateMLModelInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: FormControl<string | null | undefined>,

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		MLModelName: FormControl<string | null | undefined>,

		/** Required */
		MLModelType: FormControl<CreateMLModelInputMLModelType | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		TrainingDataSourceId: FormControl<string | null | undefined>,

		/** Max length: 131071 */
		Recipe: FormControl<string | null | undefined>,

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		RecipeUri: FormControl<string | null | undefined>,
	}
	export function CreateCreateMLModelInputFormGroup() {
		return new FormGroup<CreateMLModelInputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			MLModelName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			MLModelType: new FormControl<CreateMLModelInputMLModelType | null | undefined>(undefined, [Validators.required]),
			TrainingDataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			Recipe: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(131071)]),
			RecipeUri: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('s3://([^/]+)(/.*)?')]),
		});

	}

	export enum CreateMLModelInputMLModelType { REGRESSION = 0, BINARY = 1, MULTICLASS = 2 }

	export interface TrainingParameters {
	}
	export interface TrainingParametersFormProperties {
	}
	export function CreateTrainingParametersFormGroup() {
		return new FormGroup<TrainingParametersFormProperties>({
		});

	}


	/** <p>Represents the output of an <code>CreateRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>.</p> <note> <p>The endpoint information includes the URI of the <code>MLModel</code>; that is, the location to send online prediction requests for the specified <code>MLModel</code>.</p> </note> */
	export interface CreateRealtimeEndpointOutput {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId?: string | null;

		/** Describes the real-time endpoint information for an <code>MLModel</code>. */
		RealtimeEndpointInfo?: RealtimeEndpointInfo;
	}

	/** <p>Represents the output of an <code>CreateRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>.</p> <note> <p>The endpoint information includes the URI of the <code>MLModel</code>; that is, the location to send online prediction requests for the specified <code>MLModel</code>.</p> </note> */
	export interface CreateRealtimeEndpointOutputFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: FormControl<string | null | undefined>,
	}
	export function CreateCreateRealtimeEndpointOutputFormGroup() {
		return new FormGroup<CreateRealtimeEndpointOutputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}


	/**  Describes the real-time endpoint information for an <code>MLModel</code>. */
	export interface RealtimeEndpointInfo {

		/** Integer type that is a 32-bit signed number. */
		PeakRequestsPerSecond?: number | null;

		/** A timestamp represented in epoch time. */
		CreatedAt?: Date | null;

		/** Max length: 2048 */
		EndpointUrl?: string | null;
		EndpointStatus?: RealtimeEndpointInfoEndpointStatus | null;
	}

	/**  Describes the real-time endpoint information for an <code>MLModel</code>. */
	export interface RealtimeEndpointInfoFormProperties {

		/** Integer type that is a 32-bit signed number. */
		PeakRequestsPerSecond: FormControl<number | null | undefined>,

		/** A timestamp represented in epoch time. */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Max length: 2048 */
		EndpointUrl: FormControl<string | null | undefined>,
		EndpointStatus: FormControl<RealtimeEndpointInfoEndpointStatus | null | undefined>,
	}
	export function CreateRealtimeEndpointInfoFormGroup() {
		return new FormGroup<RealtimeEndpointInfoFormProperties>({
			PeakRequestsPerSecond: new FormControl<number | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			EndpointUrl: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('https://[a-zA-Z0-9-.]*\.amazon(aws)?\.com[/]?')]),
			EndpointStatus: new FormControl<RealtimeEndpointInfoEndpointStatus | null | undefined>(undefined),
		});

	}

	export enum RealtimeEndpointInfoEndpointStatus { NONE = 0, READY = 1, UPDATING = 2, FAILED = 3 }

	export interface CreateRealtimeEndpointInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: string;
	}
	export interface CreateRealtimeEndpointInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: FormControl<string | null | undefined>,
	}
	export function CreateCreateRealtimeEndpointInputFormGroup() {
		return new FormGroup<CreateRealtimeEndpointInputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}


	/** <p> Represents the output of a <code>DeleteBatchPrediction</code> operation.</p> <p>You can use the <code>GetBatchPrediction</code> operation and check the value of the <code>Status</code> parameter to see whether a <code>BatchPrediction</code> is marked as <code>DELETED</code>.</p> */
	export interface DeleteBatchPredictionOutput {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		BatchPredictionId?: string | null;
	}

	/** <p> Represents the output of a <code>DeleteBatchPrediction</code> operation.</p> <p>You can use the <code>GetBatchPrediction</code> operation and check the value of the <code>Status</code> parameter to see whether a <code>BatchPrediction</code> is marked as <code>DELETED</code>.</p> */
	export interface DeleteBatchPredictionOutputFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		BatchPredictionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBatchPredictionOutputFormGroup() {
		return new FormGroup<DeleteBatchPredictionOutputFormProperties>({
			BatchPredictionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface DeleteBatchPredictionInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		BatchPredictionId: string;
	}
	export interface DeleteBatchPredictionInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		BatchPredictionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBatchPredictionInputFormGroup() {
		return new FormGroup<DeleteBatchPredictionInputFormProperties>({
			BatchPredictionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}


	/**  Represents the output of a <code>DeleteDataSource</code> operation. */
	export interface DeleteDataSourceOutput {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId?: string | null;
	}

	/**  Represents the output of a <code>DeleteDataSource</code> operation. */
	export interface DeleteDataSourceOutputFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDataSourceOutputFormGroup() {
		return new FormGroup<DeleteDataSourceOutputFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface DeleteDataSourceInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId: string;
	}
	export interface DeleteDataSourceInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDataSourceInputFormGroup() {
		return new FormGroup<DeleteDataSourceInputFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}


	/** <p> Represents the output of a <code>DeleteEvaluation</code> operation. The output indicates that Amazon Machine Learning (Amazon ML) received the request.</p> <p>You can use the <code>GetEvaluation</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>Evaluation</code> is marked as <code>DELETED</code>.</p> */
	export interface DeleteEvaluationOutput {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		EvaluationId?: string | null;
	}

	/** <p> Represents the output of a <code>DeleteEvaluation</code> operation. The output indicates that Amazon Machine Learning (Amazon ML) received the request.</p> <p>You can use the <code>GetEvaluation</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>Evaluation</code> is marked as <code>DELETED</code>.</p> */
	export interface DeleteEvaluationOutputFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		EvaluationId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEvaluationOutputFormGroup() {
		return new FormGroup<DeleteEvaluationOutputFormProperties>({
			EvaluationId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface DeleteEvaluationInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		EvaluationId: string;
	}
	export interface DeleteEvaluationInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		EvaluationId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEvaluationInputFormGroup() {
		return new FormGroup<DeleteEvaluationInputFormProperties>({
			EvaluationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}


	/** <p>Represents the output of a <code>DeleteMLModel</code> operation.</p> <p>You can use the <code>GetMLModel</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>MLModel</code> is marked as <code>DELETED</code>.</p> */
	export interface DeleteMLModelOutput {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId?: string | null;
	}

	/** <p>Represents the output of a <code>DeleteMLModel</code> operation.</p> <p>You can use the <code>GetMLModel</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>MLModel</code> is marked as <code>DELETED</code>.</p> */
	export interface DeleteMLModelOutputFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMLModelOutputFormGroup() {
		return new FormGroup<DeleteMLModelOutputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface DeleteMLModelInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: string;
	}
	export interface DeleteMLModelInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMLModelInputFormGroup() {
		return new FormGroup<DeleteMLModelInputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}


	/** <p>Represents the output of an <code>DeleteRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>. </p> */
	export interface DeleteRealtimeEndpointOutput {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId?: string | null;

		/** Describes the real-time endpoint information for an <code>MLModel</code>. */
		RealtimeEndpointInfo?: RealtimeEndpointInfo;
	}

	/** <p>Represents the output of an <code>DeleteRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>. </p> */
	export interface DeleteRealtimeEndpointOutputFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRealtimeEndpointOutputFormGroup() {
		return new FormGroup<DeleteRealtimeEndpointOutputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface DeleteRealtimeEndpointInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: string;
	}
	export interface DeleteRealtimeEndpointInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRealtimeEndpointInputFormGroup() {
		return new FormGroup<DeleteRealtimeEndpointInputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}


	/** Amazon ML returns the following elements.  */
	export interface DeleteTagsOutput {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ResourceId?: string | null;
		ResourceType?: AddTagsOutputResourceType | null;
	}

	/** Amazon ML returns the following elements.  */
	export interface DeleteTagsOutputFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ResourceId: FormControl<string | null | undefined>,
		ResourceType: FormControl<AddTagsOutputResourceType | null | undefined>,
	}
	export function CreateDeleteTagsOutputFormGroup() {
		return new FormGroup<DeleteTagsOutputFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			ResourceType: new FormControl<AddTagsOutputResourceType | null | undefined>(undefined),
		});

	}

	export interface DeleteTagsInput {

		/**
		 * Required
		 * Maximum items: 100
		 */
		TagKeys: Array<string>;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResourceId: string;

		/** Required */
		ResourceType: AddTagsOutputResourceType;
	}
	export interface DeleteTagsInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<AddTagsOutputResourceType | null | undefined>,
	}
	export function CreateDeleteTagsInputFormGroup() {
		return new FormGroup<DeleteTagsInputFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			ResourceType: new FormControl<AddTagsOutputResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the output of a <code>DescribeBatchPredictions</code> operation. The content is essentially a list of <code>BatchPrediction</code>s. */
	export interface DescribeBatchPredictionsOutput {
		Results?: Array<BatchPrediction>;

		/** String type. */
		NextToken?: string | null;
	}

	/** Represents the output of a <code>DescribeBatchPredictions</code> operation. The content is essentially a list of <code>BatchPrediction</code>s. */
	export interface DescribeBatchPredictionsOutputFormProperties {

		/** String type. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBatchPredictionsOutputFormGroup() {
		return new FormGroup<DescribeBatchPredictionsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p> Represents the output of a <code>GetBatchPrediction</code> operation.</p> <p> The content consists of the detailed metadata, the status, and the data file information of a <code>Batch Prediction</code>.</p> */
	export interface BatchPrediction {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		BatchPredictionId?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		BatchPredictionDataSourceId?: string | null;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		InputDataLocationS3?: string | null;

		/** An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user. */
		CreatedByIamUser?: string | null;

		/** A timestamp represented in epoch time. */
		CreatedAt?: Date | null;

		/** A timestamp represented in epoch time. */
		LastUpdatedAt?: Date | null;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		Name?: string | null;

		/** <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul> */
		Status?: BatchPredictionStatus | null;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		OutputUri?: string | null;

		/**
		 * Description of the most recent details about an object.
		 * Max length: 10240
		 */
		Message?: string | null;

		/** Long integer type that is a 64-bit signed number. */
		ComputeTime?: number | null;

		/** A timestamp represented in epoch time. */
		FinishedAt?: Date | null;

		/** A timestamp represented in epoch time. */
		StartedAt?: Date | null;

		/** Long integer type that is a 64-bit signed number. */
		TotalRecordCount?: number | null;

		/** Long integer type that is a 64-bit signed number. */
		InvalidRecordCount?: number | null;
	}

	/** <p> Represents the output of a <code>GetBatchPrediction</code> operation.</p> <p> The content consists of the detailed metadata, the status, and the data file information of a <code>Batch Prediction</code>.</p> */
	export interface BatchPredictionFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		BatchPredictionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		BatchPredictionDataSourceId: FormControl<string | null | undefined>,

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		InputDataLocationS3: FormControl<string | null | undefined>,

		/** An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user. */
		CreatedByIamUser: FormControl<string | null | undefined>,

		/** A timestamp represented in epoch time. */
		CreatedAt: FormControl<Date | null | undefined>,

		/** A timestamp represented in epoch time. */
		LastUpdatedAt: FormControl<Date | null | undefined>,

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		Name: FormControl<string | null | undefined>,

		/** <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul> */
		Status: FormControl<BatchPredictionStatus | null | undefined>,

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		OutputUri: FormControl<string | null | undefined>,

		/**
		 * Description of the most recent details about an object.
		 * Max length: 10240
		 */
		Message: FormControl<string | null | undefined>,

		/** Long integer type that is a 64-bit signed number. */
		ComputeTime: FormControl<number | null | undefined>,

		/** A timestamp represented in epoch time. */
		FinishedAt: FormControl<Date | null | undefined>,

		/** A timestamp represented in epoch time. */
		StartedAt: FormControl<Date | null | undefined>,

		/** Long integer type that is a 64-bit signed number. */
		TotalRecordCount: FormControl<number | null | undefined>,

		/** Long integer type that is a 64-bit signed number. */
		InvalidRecordCount: FormControl<number | null | undefined>,
	}
	export function CreateBatchPredictionFormGroup() {
		return new FormGroup<BatchPredictionFormProperties>({
			BatchPredictionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			BatchPredictionDataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			InputDataLocationS3: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('s3://([^/]+)(/.*)?')]),
			CreatedByIamUser: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			Status: new FormControl<BatchPredictionStatus | null | undefined>(undefined),
			OutputUri: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('s3://([^/]+)(/.*)?')]),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10240)]),
			ComputeTime: new FormControl<number | null | undefined>(undefined),
			FinishedAt: new FormControl<Date | null | undefined>(undefined),
			StartedAt: new FormControl<Date | null | undefined>(undefined),
			TotalRecordCount: new FormControl<number | null | undefined>(undefined),
			InvalidRecordCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BatchPredictionStatus { PENDING = 0, INPROGRESS = 1, FAILED = 2, COMPLETED = 3, DELETED = 4 }

	export interface DescribeBatchPredictionsInput {

		/** <p>A list of the variables to use in searching or filtering <code>BatchPrediction</code>.</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to <code>BatchPrediction</code> creation date.</li> <li> <code>Status</code> - Sets the search criteria to <code>BatchPrediction</code> status.</li> <li> <code>Name</code> - Sets the search criteria to the contents of <code>BatchPrediction</code><b> </b> <code>Name</code>.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>BatchPrediction</code> creation.</li> <li> <code>MLModelId</code> - Sets the search criteria to the <code>MLModel</code> used in the <code>BatchPrediction</code>.</li> <li> <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in the <code>BatchPrediction</code>.</li> <li> <code>DataURI</code> - Sets the search criteria to the data file(s) used in the <code>BatchPrediction</code>. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</li> </ul> */
		FilterVariable?: DescribeBatchPredictionsInputFilterVariable | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		EQ?: string | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		GT?: string | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		LT?: string | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		GE?: string | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		LE?: string | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		NE?: string | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		Prefix?: string | null;

		/** <p>The sort order specified in a listing condition. Possible values include the following:</p> <ul> <li> <code>asc</code> - Present the information in ascending order (from A-Z).</li> <li> <code>dsc</code> - Present the information in descending order (from Z-A).</li> </ul> */
		SortOrder?: DescribeBatchPredictionsInputSortOrder | null;

		/** String type. */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit?: number | null;
	}
	export interface DescribeBatchPredictionsInputFormProperties {

		/** <p>A list of the variables to use in searching or filtering <code>BatchPrediction</code>.</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to <code>BatchPrediction</code> creation date.</li> <li> <code>Status</code> - Sets the search criteria to <code>BatchPrediction</code> status.</li> <li> <code>Name</code> - Sets the search criteria to the contents of <code>BatchPrediction</code><b> </b> <code>Name</code>.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>BatchPrediction</code> creation.</li> <li> <code>MLModelId</code> - Sets the search criteria to the <code>MLModel</code> used in the <code>BatchPrediction</code>.</li> <li> <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in the <code>BatchPrediction</code>.</li> <li> <code>DataURI</code> - Sets the search criteria to the data file(s) used in the <code>BatchPrediction</code>. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</li> </ul> */
		FilterVariable: FormControl<DescribeBatchPredictionsInputFilterVariable | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		EQ: FormControl<string | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		GT: FormControl<string | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		LT: FormControl<string | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		GE: FormControl<string | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		LE: FormControl<string | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		NE: FormControl<string | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		Prefix: FormControl<string | null | undefined>,

		/** <p>The sort order specified in a listing condition. Possible values include the following:</p> <ul> <li> <code>asc</code> - Present the information in ascending order (from A-Z).</li> <li> <code>dsc</code> - Present the information in descending order (from Z-A).</li> </ul> */
		SortOrder: FormControl<DescribeBatchPredictionsInputSortOrder | null | undefined>,

		/** String type. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeBatchPredictionsInputFormGroup() {
		return new FormGroup<DescribeBatchPredictionsInputFormProperties>({
			FilterVariable: new FormControl<DescribeBatchPredictionsInputFilterVariable | null | undefined>(undefined),
			EQ: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			GT: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			LT: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			GE: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			LE: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			NE: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			Prefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			SortOrder: new FormControl<DescribeBatchPredictionsInputSortOrder | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export enum DescribeBatchPredictionsInputFilterVariable { CreatedAt = 0, LastUpdatedAt = 1, Status = 2, Name = 3, IAMUser = 4, MLModelId = 5, DataSourceId = 6, DataURI = 7 }

	export enum DescribeBatchPredictionsInputSortOrder { asc = 0, dsc = 1 }


	/** Represents the query results from a <a>DescribeDataSources</a> operation. The content is essentially a list of <code>DataSource</code>. */
	export interface DescribeDataSourcesOutput {
		Results?: Array<DataSource>;

		/** String type. */
		NextToken?: string | null;
	}

	/** Represents the query results from a <a>DescribeDataSources</a> operation. The content is essentially a list of <code>DataSource</code>. */
	export interface DescribeDataSourcesOutputFormProperties {

		/** String type. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDataSourcesOutputFormGroup() {
		return new FormGroup<DescribeDataSourcesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p> Represents the output of the <code>GetDataSource</code> operation. </p> <p> The content consists of the detailed metadata and data file information and the current status of the <code>DataSource</code>. </p> */
	export interface DataSource {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId?: string | null;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		DataLocationS3?: string | null;
		DataRearrangement?: string | null;

		/** An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user. */
		CreatedByIamUser?: string | null;

		/** A timestamp represented in epoch time. */
		CreatedAt?: Date | null;

		/** A timestamp represented in epoch time. */
		LastUpdatedAt?: Date | null;

		/** Long integer type that is a 64-bit signed number. */
		DataSizeInBytes?: number | null;

		/** Long integer type that is a 64-bit signed number. */
		NumberOfFiles?: number | null;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		Name?: string | null;

		/** <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul> */
		Status?: BatchPredictionStatus | null;

		/**
		 * Description of the most recent details about an object.
		 * Max length: 10240
		 */
		Message?: string | null;

		/** Describes the <code>DataSource</code> details specific to Amazon Redshift. */
		RedshiftMetadata?: RedshiftMetadata;

		/** The datasource details that are specific to Amazon RDS. */
		RDSMetadata?: RDSMetadata;

		/**
		 * The Amazon Resource Name (ARN) of an <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename.
		 * Max length: 110
		 * Min length: 1
		 */
		RoleARN?: string | null;
		ComputeStatistics?: boolean | null;

		/** Long integer type that is a 64-bit signed number. */
		ComputeTime?: number | null;

		/** A timestamp represented in epoch time. */
		FinishedAt?: Date | null;

		/** A timestamp represented in epoch time. */
		StartedAt?: Date | null;
	}

	/** <p> Represents the output of the <code>GetDataSource</code> operation. </p> <p> The content consists of the detailed metadata and data file information and the current status of the <code>DataSource</code>. </p> */
	export interface DataSourceFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId: FormControl<string | null | undefined>,

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		DataLocationS3: FormControl<string | null | undefined>,
		DataRearrangement: FormControl<string | null | undefined>,

		/** An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user. */
		CreatedByIamUser: FormControl<string | null | undefined>,

		/** A timestamp represented in epoch time. */
		CreatedAt: FormControl<Date | null | undefined>,

		/** A timestamp represented in epoch time. */
		LastUpdatedAt: FormControl<Date | null | undefined>,

		/** Long integer type that is a 64-bit signed number. */
		DataSizeInBytes: FormControl<number | null | undefined>,

		/** Long integer type that is a 64-bit signed number. */
		NumberOfFiles: FormControl<number | null | undefined>,

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		Name: FormControl<string | null | undefined>,

		/** <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul> */
		Status: FormControl<BatchPredictionStatus | null | undefined>,

		/**
		 * Description of the most recent details about an object.
		 * Max length: 10240
		 */
		Message: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of an <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename.
		 * Max length: 110
		 * Min length: 1
		 */
		RoleARN: FormControl<string | null | undefined>,
		ComputeStatistics: FormControl<boolean | null | undefined>,

		/** Long integer type that is a 64-bit signed number. */
		ComputeTime: FormControl<number | null | undefined>,

		/** A timestamp represented in epoch time. */
		FinishedAt: FormControl<Date | null | undefined>,

		/** A timestamp represented in epoch time. */
		StartedAt: FormControl<Date | null | undefined>,
	}
	export function CreateDataSourceFormGroup() {
		return new FormGroup<DataSourceFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			DataLocationS3: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('s3://([^/]+)(/.*)?')]),
			DataRearrangement: new FormControl<string | null | undefined>(undefined),
			CreatedByIamUser: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			DataSizeInBytes: new FormControl<number | null | undefined>(undefined),
			NumberOfFiles: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			Status: new FormControl<BatchPredictionStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10240)]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(110), Validators.minLength(1)]),
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
		 * A username to be used by Amazon Machine Learning (Amazon ML)to connect to a database on an Amazon Redshift cluster. The username should have sufficient permissions to execute the <code>RedshiftSelectSqlQuery</code> query. The username should be valid for an Amazon Redshift <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.
		 * Max length: 128
		 * Min length: 1
		 */
		DatabaseUserName?: string | null;

		/**
		 * Describes the SQL query to execute on the Amazon Redshift database. The SQL query should be valid for an Amazon Redshift <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_SELECT_synopsis.html">SELECT</a>.
		 * Max length: 16777216
		 * Min length: 1
		 */
		SelectSqlQuery?: string | null;
	}

	/** Describes the <code>DataSource</code> details specific to Amazon Redshift. */
	export interface RedshiftMetadataFormProperties {

		/**
		 * A username to be used by Amazon Machine Learning (Amazon ML)to connect to a database on an Amazon Redshift cluster. The username should have sufficient permissions to execute the <code>RedshiftSelectSqlQuery</code> query. The username should be valid for an Amazon Redshift <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.
		 * Max length: 128
		 * Min length: 1
		 */
		DatabaseUserName: FormControl<string | null | undefined>,

		/**
		 * Describes the SQL query to execute on the Amazon Redshift database. The SQL query should be valid for an Amazon Redshift <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_SELECT_synopsis.html">SELECT</a>.
		 * Max length: 16777216
		 * Min length: 1
		 */
		SelectSqlQuery: FormControl<string | null | undefined>,
	}
	export function CreateRedshiftMetadataFormGroup() {
		return new FormGroup<RedshiftMetadataFormProperties>({
			DatabaseUserName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			SelectSqlQuery: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(16777216), Validators.minLength(1)]),
		});

	}


	/** The datasource details that are specific to Amazon RDS. */
	export interface RDSMetadata {

		/** The database details of an Amazon RDS database. */
		Database?: RDSDatabase;

		/**
		 * The username to be used by Amazon ML to connect to database on an Amazon RDS instance. The username should have sufficient permissions to execute an <code>RDSSelectSqlQuery</code> query.
		 * Max length: 128
		 * Min length: 1
		 */
		DatabaseUserName?: string | null;

		/**
		 * The SQL query to be executed against the Amazon RDS database. The SQL query should be valid for the Amazon RDS type being used.
		 * Max length: 16777216
		 * Min length: 1
		 */
		SelectSqlQuery?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ResourceRole?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ServiceRole?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DataPipelineId?: string | null;
	}

	/** The datasource details that are specific to Amazon RDS. */
	export interface RDSMetadataFormProperties {

		/**
		 * The username to be used by Amazon ML to connect to database on an Amazon RDS instance. The username should have sufficient permissions to execute an <code>RDSSelectSqlQuery</code> query.
		 * Max length: 128
		 * Min length: 1
		 */
		DatabaseUserName: FormControl<string | null | undefined>,

		/**
		 * The SQL query to be executed against the Amazon RDS database. The SQL query should be valid for the Amazon RDS type being used.
		 * Max length: 16777216
		 * Min length: 1
		 */
		SelectSqlQuery: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ResourceRole: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ServiceRole: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DataPipelineId: FormControl<string | null | undefined>,
	}
	export function CreateRDSMetadataFormGroup() {
		return new FormGroup<RDSMetadataFormProperties>({
			DatabaseUserName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			SelectSqlQuery: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(16777216), Validators.minLength(1)]),
			ResourceRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			ServiceRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			DataPipelineId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}

	export interface DescribeDataSourcesInput {

		/** <p>A list of the variables to use in searching or filtering <code>DataSource</code>.</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to <code>DataSource</code> creation date.</li> <li> <code>Status</code> - Sets the search criteria to <code>DataSource</code> status.</li> <li> <code>Name</code> - Sets the search criteria to the contents of <code>DataSource</code> <b> </b> <code>Name</code>.</li> <li> <code>DataUri</code> - Sets the search criteria to the URI of data files used to create the <code>DataSource</code>. The URI can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>DataSource</code> creation.</li> </ul> <note><title>Note</title> <p>The variable names should match the variable names in the <code>DataSource</code>.</p> </note> */
		FilterVariable?: DescribeDataSourcesInputFilterVariable | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		EQ?: string | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		GT?: string | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		LT?: string | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		GE?: string | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		LE?: string | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		NE?: string | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		Prefix?: string | null;

		/** <p>The sort order specified in a listing condition. Possible values include the following:</p> <ul> <li> <code>asc</code> - Present the information in ascending order (from A-Z).</li> <li> <code>dsc</code> - Present the information in descending order (from Z-A).</li> </ul> */
		SortOrder?: DescribeBatchPredictionsInputSortOrder | null;

		/** String type. */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit?: number | null;
	}
	export interface DescribeDataSourcesInputFormProperties {

		/** <p>A list of the variables to use in searching or filtering <code>DataSource</code>.</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to <code>DataSource</code> creation date.</li> <li> <code>Status</code> - Sets the search criteria to <code>DataSource</code> status.</li> <li> <code>Name</code> - Sets the search criteria to the contents of <code>DataSource</code> <b> </b> <code>Name</code>.</li> <li> <code>DataUri</code> - Sets the search criteria to the URI of data files used to create the <code>DataSource</code>. The URI can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>DataSource</code> creation.</li> </ul> <note><title>Note</title> <p>The variable names should match the variable names in the <code>DataSource</code>.</p> </note> */
		FilterVariable: FormControl<DescribeDataSourcesInputFilterVariable | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		EQ: FormControl<string | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		GT: FormControl<string | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		LT: FormControl<string | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		GE: FormControl<string | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		LE: FormControl<string | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		NE: FormControl<string | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		Prefix: FormControl<string | null | undefined>,

		/** <p>The sort order specified in a listing condition. Possible values include the following:</p> <ul> <li> <code>asc</code> - Present the information in ascending order (from A-Z).</li> <li> <code>dsc</code> - Present the information in descending order (from Z-A).</li> </ul> */
		SortOrder: FormControl<DescribeBatchPredictionsInputSortOrder | null | undefined>,

		/** String type. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeDataSourcesInputFormGroup() {
		return new FormGroup<DescribeDataSourcesInputFormProperties>({
			FilterVariable: new FormControl<DescribeDataSourcesInputFilterVariable | null | undefined>(undefined),
			EQ: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			GT: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			LT: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			GE: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			LE: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			NE: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			Prefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			SortOrder: new FormControl<DescribeBatchPredictionsInputSortOrder | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export enum DescribeDataSourcesInputFilterVariable { CreatedAt = 0, LastUpdatedAt = 1, Status = 2, Name = 3, DataLocationS3 = 4, IAMUser = 5 }


	/** Represents the query results from a <code>DescribeEvaluations</code> operation. The content is essentially a list of <code>Evaluation</code>. */
	export interface DescribeEvaluationsOutput {
		Results?: Array<Evaluation>;

		/** String type. */
		NextToken?: string | null;
	}

	/** Represents the query results from a <code>DescribeEvaluations</code> operation. The content is essentially a list of <code>Evaluation</code>. */
	export interface DescribeEvaluationsOutputFormProperties {

		/** String type. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEvaluationsOutputFormGroup() {
		return new FormGroup<DescribeEvaluationsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p> Represents the output of <code>GetEvaluation</code> operation. </p> <p>The content consists of the detailed metadata and data file information and the current status of the <code>Evaluation</code>.</p> */
	export interface Evaluation {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		EvaluationId?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		EvaluationDataSourceId?: string | null;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		InputDataLocationS3?: string | null;

		/** An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user. */
		CreatedByIamUser?: string | null;

		/** A timestamp represented in epoch time. */
		CreatedAt?: Date | null;

		/** A timestamp represented in epoch time. */
		LastUpdatedAt?: Date | null;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		Name?: string | null;

		/** <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul> */
		Status?: BatchPredictionStatus | null;

		/** <p>Measurements of how well the <code>MLModel</code> performed on known observations. One of the following metrics is returned, based on the type of the <code>MLModel</code>: </p> <ul> <li> <p>BinaryAUC: The binary <code>MLModel</code> uses the Area Under the Curve (AUC) technique to measure performance. </p> </li> <li> <p>RegressionRMSE: The regression <code>MLModel</code> uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.</p> </li> <li> <p>MulticlassAvgFScore: The multiclass <code>MLModel</code> uses the F1 score technique to measure performance. </p> </li> </ul> <p> For more information about performance metrics, please see the <a href="http://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>. </p> */
		PerformanceMetrics?: PerformanceMetrics;

		/**
		 * Description of the most recent details about an object.
		 * Max length: 10240
		 */
		Message?: string | null;

		/** Long integer type that is a 64-bit signed number. */
		ComputeTime?: number | null;

		/** A timestamp represented in epoch time. */
		FinishedAt?: Date | null;

		/** A timestamp represented in epoch time. */
		StartedAt?: Date | null;
	}

	/** <p> Represents the output of <code>GetEvaluation</code> operation. </p> <p>The content consists of the detailed metadata and data file information and the current status of the <code>Evaluation</code>.</p> */
	export interface EvaluationFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		EvaluationId: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		EvaluationDataSourceId: FormControl<string | null | undefined>,

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		InputDataLocationS3: FormControl<string | null | undefined>,

		/** An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user. */
		CreatedByIamUser: FormControl<string | null | undefined>,

		/** A timestamp represented in epoch time. */
		CreatedAt: FormControl<Date | null | undefined>,

		/** A timestamp represented in epoch time. */
		LastUpdatedAt: FormControl<Date | null | undefined>,

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		Name: FormControl<string | null | undefined>,

		/** <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul> */
		Status: FormControl<BatchPredictionStatus | null | undefined>,

		/**
		 * Description of the most recent details about an object.
		 * Max length: 10240
		 */
		Message: FormControl<string | null | undefined>,

		/** Long integer type that is a 64-bit signed number. */
		ComputeTime: FormControl<number | null | undefined>,

		/** A timestamp represented in epoch time. */
		FinishedAt: FormControl<Date | null | undefined>,

		/** A timestamp represented in epoch time. */
		StartedAt: FormControl<Date | null | undefined>,
	}
	export function CreateEvaluationFormGroup() {
		return new FormGroup<EvaluationFormProperties>({
			EvaluationId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			EvaluationDataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			InputDataLocationS3: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('s3://([^/]+)(/.*)?')]),
			CreatedByIamUser: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			Status: new FormControl<BatchPredictionStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10240)]),
			ComputeTime: new FormControl<number | null | undefined>(undefined),
			FinishedAt: new FormControl<Date | null | undefined>(undefined),
			StartedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p>Measurements of how well the <code>MLModel</code> performed on known observations. One of the following metrics is returned, based on the type of the <code>MLModel</code>: </p> <ul> <li> <p>BinaryAUC: The binary <code>MLModel</code> uses the Area Under the Curve (AUC) technique to measure performance. </p> </li> <li> <p>RegressionRMSE: The regression <code>MLModel</code> uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.</p> </li> <li> <p>MulticlassAvgFScore: The multiclass <code>MLModel</code> uses the F1 score technique to measure performance. </p> </li> </ul> <p> For more information about performance metrics, please see the <a href="http://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>. </p> */
	export interface PerformanceMetrics {
		Properties?: PerformanceMetricsProperties;
	}

	/** <p>Measurements of how well the <code>MLModel</code> performed on known observations. One of the following metrics is returned, based on the type of the <code>MLModel</code>: </p> <ul> <li> <p>BinaryAUC: The binary <code>MLModel</code> uses the Area Under the Curve (AUC) technique to measure performance. </p> </li> <li> <p>RegressionRMSE: The regression <code>MLModel</code> uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.</p> </li> <li> <p>MulticlassAvgFScore: The multiclass <code>MLModel</code> uses the F1 score technique to measure performance. </p> </li> </ul> <p> For more information about performance metrics, please see the <a href="http://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>. </p> */
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

		/** <p>A list of the variables to use in searching or filtering <code>Evaluation</code>.</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to <code>Evaluation</code> creation date.</li> <li> <code>Status</code> - Sets the search criteria to <code>Evaluation</code> status.</li> <li> <code>Name</code> - Sets the search criteria to the contents of <code>Evaluation</code> <b> </b> <code>Name</code>.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked an evaluation.</li> <li> <code>MLModelId</code> - Sets the search criteria to the <code>Predictor</code> that was evaluated.</li> <li> <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in evaluation.</li> <li> <code>DataUri</code> - Sets the search criteria to the data file(s) used in evaluation. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</li> </ul> */
		FilterVariable?: DescribeBatchPredictionsInputFilterVariable | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		EQ?: string | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		GT?: string | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		LT?: string | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		GE?: string | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		LE?: string | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		NE?: string | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		Prefix?: string | null;

		/** <p>The sort order specified in a listing condition. Possible values include the following:</p> <ul> <li> <code>asc</code> - Present the information in ascending order (from A-Z).</li> <li> <code>dsc</code> - Present the information in descending order (from Z-A).</li> </ul> */
		SortOrder?: DescribeBatchPredictionsInputSortOrder | null;

		/** String type. */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit?: number | null;
	}
	export interface DescribeEvaluationsInputFormProperties {

		/** <p>A list of the variables to use in searching or filtering <code>Evaluation</code>.</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to <code>Evaluation</code> creation date.</li> <li> <code>Status</code> - Sets the search criteria to <code>Evaluation</code> status.</li> <li> <code>Name</code> - Sets the search criteria to the contents of <code>Evaluation</code> <b> </b> <code>Name</code>.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked an evaluation.</li> <li> <code>MLModelId</code> - Sets the search criteria to the <code>Predictor</code> that was evaluated.</li> <li> <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in evaluation.</li> <li> <code>DataUri</code> - Sets the search criteria to the data file(s) used in evaluation. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</li> </ul> */
		FilterVariable: FormControl<DescribeBatchPredictionsInputFilterVariable | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		EQ: FormControl<string | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		GT: FormControl<string | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		LT: FormControl<string | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		GE: FormControl<string | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		LE: FormControl<string | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		NE: FormControl<string | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		Prefix: FormControl<string | null | undefined>,

		/** <p>The sort order specified in a listing condition. Possible values include the following:</p> <ul> <li> <code>asc</code> - Present the information in ascending order (from A-Z).</li> <li> <code>dsc</code> - Present the information in descending order (from Z-A).</li> </ul> */
		SortOrder: FormControl<DescribeBatchPredictionsInputSortOrder | null | undefined>,

		/** String type. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeEvaluationsInputFormGroup() {
		return new FormGroup<DescribeEvaluationsInputFormProperties>({
			FilterVariable: new FormControl<DescribeBatchPredictionsInputFilterVariable | null | undefined>(undefined),
			EQ: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			GT: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			LT: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			GE: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			LE: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			NE: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			Prefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			SortOrder: new FormControl<DescribeBatchPredictionsInputSortOrder | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}


	/** Represents the output of a <code>DescribeMLModels</code> operation. The content is essentially a list of <code>MLModel</code>. */
	export interface DescribeMLModelsOutput {
		Results?: Array<MLModel>;

		/** String type. */
		NextToken?: string | null;
	}

	/** Represents the output of a <code>DescribeMLModels</code> operation. The content is essentially a list of <code>MLModel</code>. */
	export interface DescribeMLModelsOutputFormProperties {

		/** String type. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMLModelsOutputFormGroup() {
		return new FormGroup<DescribeMLModelsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p> Represents the output of a <code>GetMLModel</code> operation. </p> <p>The content consists of the detailed metadata and the current status of the <code>MLModel</code>.</p> */
	export interface MLModel {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		TrainingDataSourceId?: string | null;

		/** An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user. */
		CreatedByIamUser?: string | null;

		/** A timestamp represented in epoch time. */
		CreatedAt?: Date | null;

		/** A timestamp represented in epoch time. */
		LastUpdatedAt?: Date | null;

		/** Max length: 1024 */
		Name?: string | null;

		/** <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul> */
		Status?: BatchPredictionStatus | null;

		/** Long integer type that is a 64-bit signed number. */
		SizeInBytes?: number | null;

		/** Describes the real-time endpoint information for an <code>MLModel</code>. */
		EndpointInfo?: RealtimeEndpointInfo;
		TrainingParameters?: TrainingParameters;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		InputDataLocationS3?: string | null;

		/** <p>The function used to train an <code>MLModel</code>. Training choices supported by Amazon ML include the following:</p> <ul> <li> <code>SGD</code> - Stochastic Gradient Descent.</li> <li> <code>RandomForest</code> - Random forest of decision trees.</li> </ul> */
		Algorithm?: MLModelAlgorithm | null;
		MLModelType?: CreateMLModelInputMLModelType | null;
		ScoreThreshold?: number | null;

		/** A timestamp represented in epoch time. */
		ScoreThresholdLastUpdatedAt?: Date | null;

		/**
		 * Description of the most recent details about an object.
		 * Max length: 10240
		 */
		Message?: string | null;

		/** Long integer type that is a 64-bit signed number. */
		ComputeTime?: number | null;

		/** A timestamp represented in epoch time. */
		FinishedAt?: Date | null;

		/** A timestamp represented in epoch time. */
		StartedAt?: Date | null;
	}

	/** <p> Represents the output of a <code>GetMLModel</code> operation. </p> <p>The content consists of the detailed metadata and the current status of the <code>MLModel</code>.</p> */
	export interface MLModelFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		TrainingDataSourceId: FormControl<string | null | undefined>,

		/** An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user. */
		CreatedByIamUser: FormControl<string | null | undefined>,

		/** A timestamp represented in epoch time. */
		CreatedAt: FormControl<Date | null | undefined>,

		/** A timestamp represented in epoch time. */
		LastUpdatedAt: FormControl<Date | null | undefined>,

		/** Max length: 1024 */
		Name: FormControl<string | null | undefined>,

		/** <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul> */
		Status: FormControl<BatchPredictionStatus | null | undefined>,

		/** Long integer type that is a 64-bit signed number. */
		SizeInBytes: FormControl<number | null | undefined>,

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		InputDataLocationS3: FormControl<string | null | undefined>,

		/** <p>The function used to train an <code>MLModel</code>. Training choices supported by Amazon ML include the following:</p> <ul> <li> <code>SGD</code> - Stochastic Gradient Descent.</li> <li> <code>RandomForest</code> - Random forest of decision trees.</li> </ul> */
		Algorithm: FormControl<MLModelAlgorithm | null | undefined>,
		MLModelType: FormControl<CreateMLModelInputMLModelType | null | undefined>,
		ScoreThreshold: FormControl<number | null | undefined>,

		/** A timestamp represented in epoch time. */
		ScoreThresholdLastUpdatedAt: FormControl<Date | null | undefined>,

		/**
		 * Description of the most recent details about an object.
		 * Max length: 10240
		 */
		Message: FormControl<string | null | undefined>,

		/** Long integer type that is a 64-bit signed number. */
		ComputeTime: FormControl<number | null | undefined>,

		/** A timestamp represented in epoch time. */
		FinishedAt: FormControl<Date | null | undefined>,

		/** A timestamp represented in epoch time. */
		StartedAt: FormControl<Date | null | undefined>,
	}
	export function CreateMLModelFormGroup() {
		return new FormGroup<MLModelFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			TrainingDataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			CreatedByIamUser: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			Status: new FormControl<BatchPredictionStatus | null | undefined>(undefined),
			SizeInBytes: new FormControl<number | null | undefined>(undefined),
			InputDataLocationS3: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('s3://([^/]+)(/.*)?')]),
			Algorithm: new FormControl<MLModelAlgorithm | null | undefined>(undefined),
			MLModelType: new FormControl<CreateMLModelInputMLModelType | null | undefined>(undefined),
			ScoreThreshold: new FormControl<number | null | undefined>(undefined),
			ScoreThresholdLastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10240)]),
			ComputeTime: new FormControl<number | null | undefined>(undefined),
			FinishedAt: new FormControl<Date | null | undefined>(undefined),
			StartedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum MLModelAlgorithm { sgd = 0 }

	export interface DescribeMLModelsInput {
		FilterVariable?: DescribeMLModelsInputFilterVariable | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		EQ?: string | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		GT?: string | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		LT?: string | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		GE?: string | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		LE?: string | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		NE?: string | null;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		Prefix?: string | null;

		/** <p>The sort order specified in a listing condition. Possible values include the following:</p> <ul> <li> <code>asc</code> - Present the information in ascending order (from A-Z).</li> <li> <code>dsc</code> - Present the information in descending order (from Z-A).</li> </ul> */
		SortOrder?: DescribeBatchPredictionsInputSortOrder | null;

		/** String type. */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit?: number | null;
	}
	export interface DescribeMLModelsInputFormProperties {
		FilterVariable: FormControl<DescribeMLModelsInputFilterVariable | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		EQ: FormControl<string | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		GT: FormControl<string | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		LT: FormControl<string | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		GE: FormControl<string | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		LE: FormControl<string | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		NE: FormControl<string | null | undefined>,

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 */
		Prefix: FormControl<string | null | undefined>,

		/** <p>The sort order specified in a listing condition. Possible values include the following:</p> <ul> <li> <code>asc</code> - Present the information in ascending order (from A-Z).</li> <li> <code>dsc</code> - Present the information in descending order (from Z-A).</li> </ul> */
		SortOrder: FormControl<DescribeBatchPredictionsInputSortOrder | null | undefined>,

		/** String type. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeMLModelsInputFormGroup() {
		return new FormGroup<DescribeMLModelsInputFormProperties>({
			FilterVariable: new FormControl<DescribeMLModelsInputFilterVariable | null | undefined>(undefined),
			EQ: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			GT: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			LT: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			GE: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			LE: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			NE: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			Prefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			SortOrder: new FormControl<DescribeBatchPredictionsInputSortOrder | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export enum DescribeMLModelsInputFilterVariable { CreatedAt = 0, LastUpdatedAt = 1, Status = 2, Name = 3, IAMUser = 4, TrainingDataSourceId = 5, RealtimeEndpointStatus = 6, MLModelType = 7, Algorithm = 8, TrainingDataURI = 9 }


	/** Amazon ML returns the following elements.  */
	export interface DescribeTagsOutput {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ResourceId?: string | null;
		ResourceType?: AddTagsOutputResourceType | null;

		/** Maximum items: 100 */
		Tags?: Array<Tag>;
	}

	/** Amazon ML returns the following elements.  */
	export interface DescribeTagsOutputFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ResourceId: FormControl<string | null | undefined>,
		ResourceType: FormControl<AddTagsOutputResourceType | null | undefined>,
	}
	export function CreateDescribeTagsOutputFormGroup() {
		return new FormGroup<DescribeTagsOutputFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			ResourceType: new FormControl<AddTagsOutputResourceType | null | undefined>(undefined),
		});

	}

	export interface DescribeTagsInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResourceId: string;

		/** Required */
		ResourceType: AddTagsOutputResourceType;
	}
	export interface DescribeTagsInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<AddTagsOutputResourceType | null | undefined>,
	}
	export function CreateDescribeTagsInputFormGroup() {
		return new FormGroup<DescribeTagsInputFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			ResourceType: new FormControl<AddTagsOutputResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the output of a <code>GetBatchPrediction</code> operation and describes a <code>BatchPrediction</code>. */
	export interface GetBatchPredictionOutput {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		BatchPredictionId?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		BatchPredictionDataSourceId?: string | null;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		InputDataLocationS3?: string | null;

		/** An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user. */
		CreatedByIamUser?: string | null;

		/** A timestamp represented in epoch time. */
		CreatedAt?: Date | null;

		/** A timestamp represented in epoch time. */
		LastUpdatedAt?: Date | null;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		Name?: string | null;

		/** <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul> */
		Status?: BatchPredictionStatus | null;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		OutputUri?: string | null;
		LogUri?: string | null;

		/**
		 * Description of the most recent details about an object.
		 * Max length: 10240
		 */
		Message?: string | null;

		/** Long integer type that is a 64-bit signed number. */
		ComputeTime?: number | null;

		/** A timestamp represented in epoch time. */
		FinishedAt?: Date | null;

		/** A timestamp represented in epoch time. */
		StartedAt?: Date | null;

		/** Long integer type that is a 64-bit signed number. */
		TotalRecordCount?: number | null;

		/** Long integer type that is a 64-bit signed number. */
		InvalidRecordCount?: number | null;
	}

	/** Represents the output of a <code>GetBatchPrediction</code> operation and describes a <code>BatchPrediction</code>. */
	export interface GetBatchPredictionOutputFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		BatchPredictionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		BatchPredictionDataSourceId: FormControl<string | null | undefined>,

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		InputDataLocationS3: FormControl<string | null | undefined>,

		/** An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user. */
		CreatedByIamUser: FormControl<string | null | undefined>,

		/** A timestamp represented in epoch time. */
		CreatedAt: FormControl<Date | null | undefined>,

		/** A timestamp represented in epoch time. */
		LastUpdatedAt: FormControl<Date | null | undefined>,

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		Name: FormControl<string | null | undefined>,

		/** <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul> */
		Status: FormControl<BatchPredictionStatus | null | undefined>,

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		OutputUri: FormControl<string | null | undefined>,
		LogUri: FormControl<string | null | undefined>,

		/**
		 * Description of the most recent details about an object.
		 * Max length: 10240
		 */
		Message: FormControl<string | null | undefined>,

		/** Long integer type that is a 64-bit signed number. */
		ComputeTime: FormControl<number | null | undefined>,

		/** A timestamp represented in epoch time. */
		FinishedAt: FormControl<Date | null | undefined>,

		/** A timestamp represented in epoch time. */
		StartedAt: FormControl<Date | null | undefined>,

		/** Long integer type that is a 64-bit signed number. */
		TotalRecordCount: FormControl<number | null | undefined>,

		/** Long integer type that is a 64-bit signed number. */
		InvalidRecordCount: FormControl<number | null | undefined>,
	}
	export function CreateGetBatchPredictionOutputFormGroup() {
		return new FormGroup<GetBatchPredictionOutputFormProperties>({
			BatchPredictionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			BatchPredictionDataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			InputDataLocationS3: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('s3://([^/]+)(/.*)?')]),
			CreatedByIamUser: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			Status: new FormControl<BatchPredictionStatus | null | undefined>(undefined),
			OutputUri: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('s3://([^/]+)(/.*)?')]),
			LogUri: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10240)]),
			ComputeTime: new FormControl<number | null | undefined>(undefined),
			FinishedAt: new FormControl<Date | null | undefined>(undefined),
			StartedAt: new FormControl<Date | null | undefined>(undefined),
			TotalRecordCount: new FormControl<number | null | undefined>(undefined),
			InvalidRecordCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetBatchPredictionInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		BatchPredictionId: string;
	}
	export interface GetBatchPredictionInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		BatchPredictionId: FormControl<string | null | undefined>,
	}
	export function CreateGetBatchPredictionInputFormGroup() {
		return new FormGroup<GetBatchPredictionInputFormProperties>({
			BatchPredictionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}


	/** Represents the output of a <code>GetDataSource</code> operation and describes a <code>DataSource</code>. */
	export interface GetDataSourceOutput {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId?: string | null;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		DataLocationS3?: string | null;
		DataRearrangement?: string | null;

		/** An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user. */
		CreatedByIamUser?: string | null;

		/** A timestamp represented in epoch time. */
		CreatedAt?: Date | null;

		/** A timestamp represented in epoch time. */
		LastUpdatedAt?: Date | null;

		/** Long integer type that is a 64-bit signed number. */
		DataSizeInBytes?: number | null;

		/** Long integer type that is a 64-bit signed number. */
		NumberOfFiles?: number | null;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		Name?: string | null;

		/** <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul> */
		Status?: BatchPredictionStatus | null;
		LogUri?: string | null;

		/**
		 * Description of the most recent details about an object.
		 * Max length: 10240
		 */
		Message?: string | null;

		/** Describes the <code>DataSource</code> details specific to Amazon Redshift. */
		RedshiftMetadata?: RedshiftMetadata;

		/** The datasource details that are specific to Amazon RDS. */
		RDSMetadata?: RDSMetadata;

		/**
		 * The Amazon Resource Name (ARN) of an <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename.
		 * Max length: 110
		 * Min length: 1
		 */
		RoleARN?: string | null;
		ComputeStatistics?: boolean | null;

		/** Long integer type that is a 64-bit signed number. */
		ComputeTime?: number | null;

		/** A timestamp represented in epoch time. */
		FinishedAt?: Date | null;

		/** A timestamp represented in epoch time. */
		StartedAt?: Date | null;

		/**
		 * <p>The schema of a <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>. The DataSource schema is expressed in JSON format.</p> <p><code>DataSchema</code> is not required if you specify a <code>DataSchemaUri</code></p> <p>{ "version": "1.0", "recordAnnotationFieldName": "F1", "recordWeightFieldName": "F2", "targetFieldName": "F3", "dataFormat": "CSV", "dataFileContainsHeader": true, "variables": [ { "fieldName": "F1", "fieldType": "TEXT" }, { "fieldName": "F2", "fieldType": "NUMERIC" }, { "fieldName": "F3", "fieldType": "CATEGORICAL" }, { "fieldName": "F4", "fieldType": "NUMERIC" }, { "fieldName": "F5", "fieldType": "CATEGORICAL" }, { "fieldName": "F6", "fieldType": "TEXT" }, { "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" }, { "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" } ], "excludedVariableNames": [ "F6" ] } </p>
		 * Max length: 131071
		 */
		DataSourceSchema?: string | null;
	}

	/** Represents the output of a <code>GetDataSource</code> operation and describes a <code>DataSource</code>. */
	export interface GetDataSourceOutputFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId: FormControl<string | null | undefined>,

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		DataLocationS3: FormControl<string | null | undefined>,
		DataRearrangement: FormControl<string | null | undefined>,

		/** An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user. */
		CreatedByIamUser: FormControl<string | null | undefined>,

		/** A timestamp represented in epoch time. */
		CreatedAt: FormControl<Date | null | undefined>,

		/** A timestamp represented in epoch time. */
		LastUpdatedAt: FormControl<Date | null | undefined>,

		/** Long integer type that is a 64-bit signed number. */
		DataSizeInBytes: FormControl<number | null | undefined>,

		/** Long integer type that is a 64-bit signed number. */
		NumberOfFiles: FormControl<number | null | undefined>,

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		Name: FormControl<string | null | undefined>,

		/** <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul> */
		Status: FormControl<BatchPredictionStatus | null | undefined>,
		LogUri: FormControl<string | null | undefined>,

		/**
		 * Description of the most recent details about an object.
		 * Max length: 10240
		 */
		Message: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of an <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename.
		 * Max length: 110
		 * Min length: 1
		 */
		RoleARN: FormControl<string | null | undefined>,
		ComputeStatistics: FormControl<boolean | null | undefined>,

		/** Long integer type that is a 64-bit signed number. */
		ComputeTime: FormControl<number | null | undefined>,

		/** A timestamp represented in epoch time. */
		FinishedAt: FormControl<Date | null | undefined>,

		/** A timestamp represented in epoch time. */
		StartedAt: FormControl<Date | null | undefined>,

		/**
		 * <p>The schema of a <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>. The DataSource schema is expressed in JSON format.</p> <p><code>DataSchema</code> is not required if you specify a <code>DataSchemaUri</code></p> <p>{ "version": "1.0", "recordAnnotationFieldName": "F1", "recordWeightFieldName": "F2", "targetFieldName": "F3", "dataFormat": "CSV", "dataFileContainsHeader": true, "variables": [ { "fieldName": "F1", "fieldType": "TEXT" }, { "fieldName": "F2", "fieldType": "NUMERIC" }, { "fieldName": "F3", "fieldType": "CATEGORICAL" }, { "fieldName": "F4", "fieldType": "NUMERIC" }, { "fieldName": "F5", "fieldType": "CATEGORICAL" }, { "fieldName": "F6", "fieldType": "TEXT" }, { "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" }, { "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" } ], "excludedVariableNames": [ "F6" ] } </p>
		 * Max length: 131071
		 */
		DataSourceSchema: FormControl<string | null | undefined>,
	}
	export function CreateGetDataSourceOutputFormGroup() {
		return new FormGroup<GetDataSourceOutputFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			DataLocationS3: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('s3://([^/]+)(/.*)?')]),
			DataRearrangement: new FormControl<string | null | undefined>(undefined),
			CreatedByIamUser: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			DataSizeInBytes: new FormControl<number | null | undefined>(undefined),
			NumberOfFiles: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			Status: new FormControl<BatchPredictionStatus | null | undefined>(undefined),
			LogUri: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10240)]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(110), Validators.minLength(1)]),
			ComputeStatistics: new FormControl<boolean | null | undefined>(undefined),
			ComputeTime: new FormControl<number | null | undefined>(undefined),
			FinishedAt: new FormControl<Date | null | undefined>(undefined),
			StartedAt: new FormControl<Date | null | undefined>(undefined),
			DataSourceSchema: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(131071)]),
		});

	}

	export interface GetDataSourceInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId: string;

		/** Specifies whether a describe operation should return exhaustive or abbreviated information. */
		Verbose?: boolean | null;
	}
	export interface GetDataSourceInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId: FormControl<string | null | undefined>,

		/** Specifies whether a describe operation should return exhaustive or abbreviated information. */
		Verbose: FormControl<boolean | null | undefined>,
	}
	export function CreateGetDataSourceInputFormGroup() {
		return new FormGroup<GetDataSourceInputFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			Verbose: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>GetEvaluation</code> operation and describes an <code>Evaluation</code>. */
	export interface GetEvaluationOutput {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		EvaluationId?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		EvaluationDataSourceId?: string | null;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		InputDataLocationS3?: string | null;

		/** An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user. */
		CreatedByIamUser?: string | null;

		/** A timestamp represented in epoch time. */
		CreatedAt?: Date | null;

		/** A timestamp represented in epoch time. */
		LastUpdatedAt?: Date | null;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		Name?: string | null;

		/** <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul> */
		Status?: BatchPredictionStatus | null;

		/** <p>Measurements of how well the <code>MLModel</code> performed on known observations. One of the following metrics is returned, based on the type of the <code>MLModel</code>: </p> <ul> <li> <p>BinaryAUC: The binary <code>MLModel</code> uses the Area Under the Curve (AUC) technique to measure performance. </p> </li> <li> <p>RegressionRMSE: The regression <code>MLModel</code> uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.</p> </li> <li> <p>MulticlassAvgFScore: The multiclass <code>MLModel</code> uses the F1 score technique to measure performance. </p> </li> </ul> <p> For more information about performance metrics, please see the <a href="http://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>. </p> */
		PerformanceMetrics?: PerformanceMetrics;
		LogUri?: string | null;

		/**
		 * Description of the most recent details about an object.
		 * Max length: 10240
		 */
		Message?: string | null;

		/** Long integer type that is a 64-bit signed number. */
		ComputeTime?: number | null;

		/** A timestamp represented in epoch time. */
		FinishedAt?: Date | null;

		/** A timestamp represented in epoch time. */
		StartedAt?: Date | null;
	}

	/** Represents the output of a <code>GetEvaluation</code> operation and describes an <code>Evaluation</code>. */
	export interface GetEvaluationOutputFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		EvaluationId: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		EvaluationDataSourceId: FormControl<string | null | undefined>,

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		InputDataLocationS3: FormControl<string | null | undefined>,

		/** An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user. */
		CreatedByIamUser: FormControl<string | null | undefined>,

		/** A timestamp represented in epoch time. */
		CreatedAt: FormControl<Date | null | undefined>,

		/** A timestamp represented in epoch time. */
		LastUpdatedAt: FormControl<Date | null | undefined>,

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		Name: FormControl<string | null | undefined>,

		/** <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul> */
		Status: FormControl<BatchPredictionStatus | null | undefined>,
		LogUri: FormControl<string | null | undefined>,

		/**
		 * Description of the most recent details about an object.
		 * Max length: 10240
		 */
		Message: FormControl<string | null | undefined>,

		/** Long integer type that is a 64-bit signed number. */
		ComputeTime: FormControl<number | null | undefined>,

		/** A timestamp represented in epoch time. */
		FinishedAt: FormControl<Date | null | undefined>,

		/** A timestamp represented in epoch time. */
		StartedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetEvaluationOutputFormGroup() {
		return new FormGroup<GetEvaluationOutputFormProperties>({
			EvaluationId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			EvaluationDataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			InputDataLocationS3: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('s3://([^/]+)(/.*)?')]),
			CreatedByIamUser: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			Status: new FormControl<BatchPredictionStatus | null | undefined>(undefined),
			LogUri: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10240)]),
			ComputeTime: new FormControl<number | null | undefined>(undefined),
			FinishedAt: new FormControl<Date | null | undefined>(undefined),
			StartedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetEvaluationInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		EvaluationId: string;
	}
	export interface GetEvaluationInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		EvaluationId: FormControl<string | null | undefined>,
	}
	export function CreateGetEvaluationInputFormGroup() {
		return new FormGroup<GetEvaluationInputFormProperties>({
			EvaluationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}


	/** Represents the output of a <code>GetMLModel</code> operation, and provides detailed information about a <code>MLModel</code>. */
	export interface GetMLModelOutput {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		TrainingDataSourceId?: string | null;

		/** An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user. */
		CreatedByIamUser?: string | null;

		/** A timestamp represented in epoch time. */
		CreatedAt?: Date | null;

		/** A timestamp represented in epoch time. */
		LastUpdatedAt?: Date | null;

		/** Max length: 1024 */
		Name?: string | null;

		/** <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul> */
		Status?: BatchPredictionStatus | null;

		/** Long integer type that is a 64-bit signed number. */
		SizeInBytes?: number | null;

		/** Describes the real-time endpoint information for an <code>MLModel</code>. */
		EndpointInfo?: RealtimeEndpointInfo;
		TrainingParameters?: TrainingParameters;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		InputDataLocationS3?: string | null;
		MLModelType?: CreateMLModelInputMLModelType | null;
		ScoreThreshold?: number | null;

		/** A timestamp represented in epoch time. */
		ScoreThresholdLastUpdatedAt?: Date | null;
		LogUri?: string | null;

		/**
		 * Description of the most recent details about an object.
		 * Max length: 10240
		 */
		Message?: string | null;

		/** Long integer type that is a 64-bit signed number. */
		ComputeTime?: number | null;

		/** A timestamp represented in epoch time. */
		FinishedAt?: Date | null;

		/** A timestamp represented in epoch time. */
		StartedAt?: Date | null;

		/** Max length: 131071 */
		Recipe?: string | null;

		/**
		 * <p>The schema of a <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>. The DataSource schema is expressed in JSON format.</p> <p><code>DataSchema</code> is not required if you specify a <code>DataSchemaUri</code></p> <p>{ "version": "1.0", "recordAnnotationFieldName": "F1", "recordWeightFieldName": "F2", "targetFieldName": "F3", "dataFormat": "CSV", "dataFileContainsHeader": true, "variables": [ { "fieldName": "F1", "fieldType": "TEXT" }, { "fieldName": "F2", "fieldType": "NUMERIC" }, { "fieldName": "F3", "fieldType": "CATEGORICAL" }, { "fieldName": "F4", "fieldType": "NUMERIC" }, { "fieldName": "F5", "fieldType": "CATEGORICAL" }, { "fieldName": "F6", "fieldType": "TEXT" }, { "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" }, { "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" } ], "excludedVariableNames": [ "F6" ] } </p>
		 * Max length: 131071
		 */
		Schema?: string | null;
	}

	/** Represents the output of a <code>GetMLModel</code> operation, and provides detailed information about a <code>MLModel</code>. */
	export interface GetMLModelOutputFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		TrainingDataSourceId: FormControl<string | null | undefined>,

		/** An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user. */
		CreatedByIamUser: FormControl<string | null | undefined>,

		/** A timestamp represented in epoch time. */
		CreatedAt: FormControl<Date | null | undefined>,

		/** A timestamp represented in epoch time. */
		LastUpdatedAt: FormControl<Date | null | undefined>,

		/** Max length: 1024 */
		Name: FormControl<string | null | undefined>,

		/** <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul> */
		Status: FormControl<BatchPredictionStatus | null | undefined>,

		/** Long integer type that is a 64-bit signed number. */
		SizeInBytes: FormControl<number | null | undefined>,

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 */
		InputDataLocationS3: FormControl<string | null | undefined>,
		MLModelType: FormControl<CreateMLModelInputMLModelType | null | undefined>,
		ScoreThreshold: FormControl<number | null | undefined>,

		/** A timestamp represented in epoch time. */
		ScoreThresholdLastUpdatedAt: FormControl<Date | null | undefined>,
		LogUri: FormControl<string | null | undefined>,

		/**
		 * Description of the most recent details about an object.
		 * Max length: 10240
		 */
		Message: FormControl<string | null | undefined>,

		/** Long integer type that is a 64-bit signed number. */
		ComputeTime: FormControl<number | null | undefined>,

		/** A timestamp represented in epoch time. */
		FinishedAt: FormControl<Date | null | undefined>,

		/** A timestamp represented in epoch time. */
		StartedAt: FormControl<Date | null | undefined>,

		/** Max length: 131071 */
		Recipe: FormControl<string | null | undefined>,

		/**
		 * <p>The schema of a <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>. The DataSource schema is expressed in JSON format.</p> <p><code>DataSchema</code> is not required if you specify a <code>DataSchemaUri</code></p> <p>{ "version": "1.0", "recordAnnotationFieldName": "F1", "recordWeightFieldName": "F2", "targetFieldName": "F3", "dataFormat": "CSV", "dataFileContainsHeader": true, "variables": [ { "fieldName": "F1", "fieldType": "TEXT" }, { "fieldName": "F2", "fieldType": "NUMERIC" }, { "fieldName": "F3", "fieldType": "CATEGORICAL" }, { "fieldName": "F4", "fieldType": "NUMERIC" }, { "fieldName": "F5", "fieldType": "CATEGORICAL" }, { "fieldName": "F6", "fieldType": "TEXT" }, { "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" }, { "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" } ], "excludedVariableNames": [ "F6" ] } </p>
		 * Max length: 131071
		 */
		Schema: FormControl<string | null | undefined>,
	}
	export function CreateGetMLModelOutputFormGroup() {
		return new FormGroup<GetMLModelOutputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			TrainingDataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			CreatedByIamUser: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			Status: new FormControl<BatchPredictionStatus | null | undefined>(undefined),
			SizeInBytes: new FormControl<number | null | undefined>(undefined),
			InputDataLocationS3: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('s3://([^/]+)(/.*)?')]),
			MLModelType: new FormControl<CreateMLModelInputMLModelType | null | undefined>(undefined),
			ScoreThreshold: new FormControl<number | null | undefined>(undefined),
			ScoreThresholdLastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			LogUri: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10240)]),
			ComputeTime: new FormControl<number | null | undefined>(undefined),
			FinishedAt: new FormControl<Date | null | undefined>(undefined),
			StartedAt: new FormControl<Date | null | undefined>(undefined),
			Recipe: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(131071)]),
			Schema: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(131071)]),
		});

	}

	export interface GetMLModelInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: string;

		/** Specifies whether a describe operation should return exhaustive or abbreviated information. */
		Verbose?: boolean | null;
	}
	export interface GetMLModelInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: FormControl<string | null | undefined>,

		/** Specifies whether a describe operation should return exhaustive or abbreviated information. */
		Verbose: FormControl<boolean | null | undefined>,
	}
	export function CreateGetMLModelInputFormGroup() {
		return new FormGroup<GetMLModelInputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
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

		/** Min length: 1 */
		predictedLabel?: string | null;
		predictedValue?: number | null;

		/** Provides the raw classification score corresponding to each label. */
		predictedScores?: ScoreValuePerLabelMap;

		/** Provides any additional details regarding the prediction. */
		details?: DetailsMap;
	}

	/** <p>The output from a <code>Predict</code> operation: </p> <ul> <li> <p> <code>Details</code> - Contains the following attributes: <code>DetailsAttributes.PREDICTIVE_MODEL_TYPE - REGRESSION | BINARY | MULTICLASS</code> <code>DetailsAttributes.ALGORITHM - SGD</code> </p> </li> <li> <p> <code>PredictedLabel</code> - Present for either a <code>BINARY</code> or <code>MULTICLASS</code> <code>MLModel</code> request. </p> </li> <li> <p> <code>PredictedScores</code> - Contains the raw classification score corresponding to each label. </p> </li> <li> <p> <code>PredictedValue</code> - Present for a <code>REGRESSION</code> <code>MLModel</code> request. </p> </li> </ul> */
	export interface PredictionFormProperties {

		/** Min length: 1 */
		predictedLabel: FormControl<string | null | undefined>,
		predictedValue: FormControl<number | null | undefined>,
	}
	export function CreatePredictionFormGroup() {
		return new FormGroup<PredictionFormProperties>({
			predictedLabel: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
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

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
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

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 */
		PredictEndpoint: FormControl<string | null | undefined>,
	}
	export function CreatePredictInputFormGroup() {
		return new FormGroup<PredictInputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
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


	/** The subscriber exceeded the maximum number of operations. This exception can occur when listing objects such as <code>DataSource</code>. */
	export interface LimitExceededException {

		/** Max length: 2048 */
		message?: string | null;
		code?: number | null;
	}

	/** The subscriber exceeded the maximum number of operations. This exception can occur when listing objects such as <code>DataSource</code>. */
	export interface LimitExceededExceptionFormProperties {

		/** Max length: 2048 */
		message: FormControl<string | null | undefined>,
		code: FormControl<number | null | undefined>,
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			code: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The exception is thrown when a predict request is made to an unmounted <code>MLModel</code>. */
	export interface PredictorNotMountedException {

		/** Max length: 2048 */
		message?: string | null;
	}

	/** The exception is thrown when a predict request is made to an unmounted <code>MLModel</code>. */
	export interface PredictorNotMountedExceptionFormProperties {

		/** Max length: 2048 */
		message: FormControl<string | null | undefined>,
	}
	export function CreatePredictorNotMountedExceptionFormGroup() {
		return new FormGroup<PredictorNotMountedExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
		});

	}


	/** <p>Represents the output of an <code>UpdateBatchPrediction</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p> */
	export interface UpdateBatchPredictionOutput {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		BatchPredictionId?: string | null;
	}

	/** <p>Represents the output of an <code>UpdateBatchPrediction</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p> */
	export interface UpdateBatchPredictionOutputFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		BatchPredictionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBatchPredictionOutputFormGroup() {
		return new FormGroup<UpdateBatchPredictionOutputFormProperties>({
			BatchPredictionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface UpdateBatchPredictionInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		BatchPredictionId: string;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Required
		 * Max length: 1024
		 */
		BatchPredictionName: string;
	}
	export interface UpdateBatchPredictionInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		BatchPredictionId: FormControl<string | null | undefined>,

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Required
		 * Max length: 1024
		 */
		BatchPredictionName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBatchPredictionInputFormGroup() {
		return new FormGroup<UpdateBatchPredictionInputFormProperties>({
			BatchPredictionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			BatchPredictionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
		});

	}


	/** <p>Represents the output of an <code>UpdateDataSource</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p> */
	export interface UpdateDataSourceOutput {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId?: string | null;
	}

	/** <p>Represents the output of an <code>UpdateDataSource</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p> */
	export interface UpdateDataSourceOutputFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataSourceOutputFormGroup() {
		return new FormGroup<UpdateDataSourceOutputFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface UpdateDataSourceInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId: string;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Required
		 * Max length: 1024
		 */
		DataSourceName: string;
	}
	export interface UpdateDataSourceInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DataSourceId: FormControl<string | null | undefined>,

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Required
		 * Max length: 1024
		 */
		DataSourceName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataSourceInputFormGroup() {
		return new FormGroup<UpdateDataSourceInputFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			DataSourceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
		});

	}


	/** <p>Represents the output of an <code>UpdateEvaluation</code> operation.</p> <p>You can see the updated content by using the <code>GetEvaluation</code> operation.</p> */
	export interface UpdateEvaluationOutput {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		EvaluationId?: string | null;
	}

	/** <p>Represents the output of an <code>UpdateEvaluation</code> operation.</p> <p>You can see the updated content by using the <code>GetEvaluation</code> operation.</p> */
	export interface UpdateEvaluationOutputFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		EvaluationId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEvaluationOutputFormGroup() {
		return new FormGroup<UpdateEvaluationOutputFormProperties>({
			EvaluationId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface UpdateEvaluationInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		EvaluationId: string;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Required
		 * Max length: 1024
		 */
		EvaluationName: string;
	}
	export interface UpdateEvaluationInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		EvaluationId: FormControl<string | null | undefined>,

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Required
		 * Max length: 1024
		 */
		EvaluationName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEvaluationInputFormGroup() {
		return new FormGroup<UpdateEvaluationInputFormProperties>({
			EvaluationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			EvaluationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
		});

	}


	/** <p>Represents the output of an <code>UpdateMLModel</code> operation.</p> <p>You can see the updated content by using the <code>GetMLModel</code> operation.</p> */
	export interface UpdateMLModelOutput {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId?: string | null;
	}

	/** <p>Represents the output of an <code>UpdateMLModel</code> operation.</p> <p>You can see the updated content by using the <code>GetMLModel</code> operation.</p> */
	export interface UpdateMLModelOutputFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMLModelOutputFormGroup() {
		return new FormGroup<UpdateMLModelOutputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface UpdateMLModelInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: string;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		MLModelName?: string | null;
		ScoreThreshold?: number | null;
	}
	export interface UpdateMLModelInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		MLModelId: FormControl<string | null | undefined>,

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 */
		MLModelName: FormControl<string | null | undefined>,
		ScoreThreshold: FormControl<number | null | undefined>,
	}
	export function CreateUpdateMLModelInputFormGroup() {
		return new FormGroup<UpdateMLModelInputFormProperties>({
			MLModelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			MLModelName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*\S.*|^$')]),
			ScoreThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TaggableResourceType { BatchPrediction = 0, DataSource = 1, Evaluation = 2, MLModel = 3 }


	/** <p>The function used to train an <code>MLModel</code>. Training choices supported by Amazon ML include the following:</p> <ul> <li> <code>SGD</code> - Stochastic Gradient Descent.</li> <li> <code>RandomForest</code> - Random forest of decision trees.</li> </ul> */
	export enum Algorithm { sgd = 0 }


	/** <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul> */
	export enum EntityStatus { PENDING = 0, INPROGRESS = 1, FAILED = 2, COMPLETED = 3, DELETED = 4 }


	/** <p>A list of the variables to use in searching or filtering <code>BatchPrediction</code>.</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to <code>BatchPrediction</code> creation date.</li> <li> <code>Status</code> - Sets the search criteria to <code>BatchPrediction</code> status.</li> <li> <code>Name</code> - Sets the search criteria to the contents of <code>BatchPrediction</code><b> </b> <code>Name</code>.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>BatchPrediction</code> creation.</li> <li> <code>MLModelId</code> - Sets the search criteria to the <code>MLModel</code> used in the <code>BatchPrediction</code>.</li> <li> <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in the <code>BatchPrediction</code>.</li> <li> <code>DataURI</code> - Sets the search criteria to the data file(s) used in the <code>BatchPrediction</code>. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</li> </ul> */
	export enum BatchPredictionFilterVariable { CreatedAt = 0, LastUpdatedAt = 1, Status = 2, Name = 3, IAMUser = 4, MLModelId = 5, DataSourceId = 6, DataURI = 7 }

	export enum MLModelType { REGRESSION = 0, BINARY = 1, MULTICLASS = 2 }


	/** <p>A list of the variables to use in searching or filtering <code>DataSource</code>.</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to <code>DataSource</code> creation date.</li> <li> <code>Status</code> - Sets the search criteria to <code>DataSource</code> status.</li> <li> <code>Name</code> - Sets the search criteria to the contents of <code>DataSource</code> <b> </b> <code>Name</code>.</li> <li> <code>DataUri</code> - Sets the search criteria to the URI of data files used to create the <code>DataSource</code>. The URI can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>DataSource</code> creation.</li> </ul> <note><title>Note</title> <p>The variable names should match the variable names in the <code>DataSource</code>.</p> </note> */
	export enum DataSourceFilterVariable { CreatedAt = 0, LastUpdatedAt = 1, Status = 2, Name = 3, DataLocationS3 = 4, IAMUser = 5 }


	/** <p>The sort order specified in a listing condition. Possible values include the following:</p> <ul> <li> <code>asc</code> - Present the information in ascending order (from A-Z).</li> <li> <code>dsc</code> - Present the information in descending order (from Z-A).</li> </ul> */
	export enum SortOrder { asc = 0, dsc = 1 }


	/** <p>A list of the variables to use in searching or filtering <code>Evaluation</code>.</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to <code>Evaluation</code> creation date.</li> <li> <code>Status</code> - Sets the search criteria to <code>Evaluation</code> status.</li> <li> <code>Name</code> - Sets the search criteria to the contents of <code>Evaluation</code> <b> </b> <code>Name</code>.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked an evaluation.</li> <li> <code>MLModelId</code> - Sets the search criteria to the <code>Predictor</code> that was evaluated.</li> <li> <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in evaluation.</li> <li> <code>DataUri</code> - Sets the search criteria to the data file(s) used in evaluation. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</li> </ul> */
	export enum EvaluationFilterVariable { CreatedAt = 0, LastUpdatedAt = 1, Status = 2, Name = 3, IAMUser = 4, MLModelId = 5, DataSourceId = 6, DataURI = 7 }

	export enum MLModelFilterVariable { CreatedAt = 0, LastUpdatedAt = 1, Status = 2, Name = 3, IAMUser = 4, TrainingDataSourceId = 5, RealtimeEndpointStatus = 6, MLModelType = 7, Algorithm = 8, TrainingDataURI = 9 }


	/** Contains the key values of <code>DetailsMap</code>: <code>PredictiveModelType</code> - Indicates the type of the <code>MLModel</code>. <code>Algorithm</code> - Indicates the algorithm that was used for the <code>MLModel</code>. */
	export enum DetailsAttributes { PredictiveModelType = 0, Algorithm = 1 }

	export enum RealtimeEndpointStatus { NONE = 0, READY = 1, UPDATING = 2, FAILED = 3 }

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
		 * <p>Generates predictions for a group of observations. The observations to process exist in one or more data files referenced by a <code>DataSource</code>. This operation creates a new <code>BatchPrediction</code>, and uses an <code>MLModel</code> and the data files referenced by the <code>DataSource</code> as information sources. </p> <p><code>CreateBatchPrediction</code> is an asynchronous operation. In response to <code>CreateBatchPrediction</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>BatchPrediction</code> status to <code>PENDING</code>. After the <code>BatchPrediction</code> completes, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can poll for status updates by using the <a>GetBatchPrediction</a> operation and checking the <code>Status</code> parameter of the result. After the <code>COMPLETED</code> status appears, the results are available in the location specified by the <code>OutputUri</code> parameter.</p>
		 * Post #X-Amz-Target=AmazonML_20141212.CreateBatchPrediction
		 * @return {CreateBatchPredictionOutput} Success
		 */
		CreateBatchPrediction(requestBody: CreateBatchPredictionInput): Observable<CreateBatchPredictionOutput> {
			return this.http.post<CreateBatchPredictionOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.CreateBatchPrediction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a <code>DataSource</code> object from an <a href="http://aws.amazon.com/rds/"> Amazon Relational Database Service</a> (Amazon RDS). A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p><code>CreateDataSourceFromRDS</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRDS</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can be used only to perform <code>&gt;CreateMLModel</code>&gt;, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML cannot accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p>
		 * Post #X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRDS
		 * @return {CreateDataSourceFromRDSOutput} Success
		 */
		CreateDataSourceFromRDS(requestBody: CreateDataSourceFromRDSInput): Observable<CreateDataSourceFromRDSOutput> {
			return this.http.post<CreateDataSourceFromRDSOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRDS', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a <code>DataSource</code> from a database hosted on an Amazon Redshift cluster. A <code>DataSource</code> references data that can be used to perform either <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p><code>CreateDataSourceFromRedshift</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRedshift</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in <code>COMPLETED</code> or <code>PENDING</code> states can be used to perform only <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p> <p>The observations should be contained in the database hosted on an Amazon Redshift cluster and should be specified by a <code>SelectSqlQuery</code> query. Amazon ML executes an <code>Unload</code> command in Amazon Redshift to transfer the result set of the <code>SelectSqlQuery</code> query to <code>S3StagingLocation</code>.</p> <p>After the <code>DataSource</code> has been created, it's ready for use in evaluations and batch predictions. If you plan to use the <code>DataSource</code> to train an <code>MLModel</code>, the <code>DataSource</code> also requires a recipe. A recipe describes how each input variable will be used in training an <code>MLModel</code>. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.</p> <?oxy_insert_start author="laurama" timestamp="20160406T153842-0700"><p>You can't change an existing datasource, but you can copy and modify the settings from an existing Amazon Redshift datasource to create a new datasource. To do so, call <code>GetDataSource</code> for an existing datasource and copy the values to a <code>CreateDataSource</code> call. Change the settings that you want to change and make sure that all required fields have the appropriate values.</p> <?oxy_insert_end>
		 * Post #X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRedshift
		 * @return {CreateDataSourceFromRedshiftOutput} Success
		 */
		CreateDataSourceFromRedshift(requestBody: CreateDataSourceFromRedshiftInput): Observable<CreateDataSourceFromRedshiftOutput> {
			return this.http.post<CreateDataSourceFromRedshiftOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromRedshift', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a <code>DataSource</code> object. A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p><code>CreateDataSourceFromS3</code> is an asynchronous operation. In response to <code>CreateDataSourceFromS3</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> has been created and is ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can be used to perform only <code>CreateMLModel</code>, <code>CreateEvaluation</code> or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p> <p>The observation data used in a <code>DataSource</code> should be ready to use; that is, it should have a consistent structure, and missing data values should be kept to a minimum. The observation data must reside in one or more .csv files in an Amazon Simple Storage Service (Amazon S3) location, along with a schema that describes the data items by name and type. The same schema must be used for all of the data files referenced by the <code>DataSource</code>. </p> <p>After the <code>DataSource</code> has been created, it's ready to use in evaluations and batch predictions. If you plan to use the <code>DataSource</code> to train an <code>MLModel</code>, the <code>DataSource</code> also needs a recipe. A recipe describes how each input variable will be used in training an <code>MLModel</code>. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.</p>
		 * Post #X-Amz-Target=AmazonML_20141212.CreateDataSourceFromS3
		 * @return {CreateDataSourceFromS3Output} Success
		 */
		CreateDataSourceFromS3(requestBody: CreateDataSourceFromS3Input): Observable<CreateDataSourceFromS3Output> {
			return this.http.post<CreateDataSourceFromS3Output>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.CreateDataSourceFromS3', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new <code>Evaluation</code> of an <code>MLModel</code>. An <code>MLModel</code> is evaluated on a set of observations associated to a <code>DataSource</code>. Like a <code>DataSource</code> for an <code>MLModel</code>, the <code>DataSource</code> for an <code>Evaluation</code> contains values for the <code>Target Variable</code>. The <code>Evaluation</code> compares the predicted result for each observation to the actual outcome and provides a summary so that you know how effective the <code>MLModel</code> functions on the test data. Evaluation generates a relevant performance metric, such as BinaryAUC, RegressionRMSE or MulticlassAvgFScore based on the corresponding <code>MLModelType</code>: <code>BINARY</code>, <code>REGRESSION</code> or <code>MULTICLASS</code>. </p> <p><code>CreateEvaluation</code> is an asynchronous operation. In response to <code>CreateEvaluation</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the evaluation status to <code>PENDING</code>. After the <code>Evaluation</code> is created and ready for use, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can use the <code>GetEvaluation</code> operation to check progress of the evaluation during the creation operation.</p>
		 * Post #X-Amz-Target=AmazonML_20141212.CreateEvaluation
		 * @return {CreateEvaluationOutput} Success
		 */
		CreateEvaluation(requestBody: CreateEvaluationInput): Observable<CreateEvaluationOutput> {
			return this.http.post<CreateEvaluationOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.CreateEvaluation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new <code>MLModel</code> using the <code>DataSource</code> and the recipe as information sources. </p> <p>An <code>MLModel</code> is nearly immutable. Users can update only the <code>MLModelName</code> and the <code>ScoreThreshold</code> in an <code>MLModel</code> without creating a new <code>MLModel</code>. </p> <p><code>CreateMLModel</code> is an asynchronous operation. In response to <code>CreateMLModel</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>MLModel</code> status to <code>PENDING</code>. After the <code>MLModel</code> has been created and ready is for use, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can use the <code>GetMLModel</code> operation to check the progress of the <code>MLModel</code> during the creation operation.</p> <p> <code>CreateMLModel</code> requires a <code>DataSource</code> with computed statistics, which can be created by setting <code>ComputeStatistics</code> to <code>true</code> in <code>CreateDataSourceFromRDS</code>, <code>CreateDataSourceFromS3</code>, or <code>CreateDataSourceFromRedshift</code> operations. </p>
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
		 * <p>Assigns the DELETED status to a <code>BatchPrediction</code>, rendering it unusable.</p> <p>After using the <code>DeleteBatchPrediction</code> operation, you can use the <a>GetBatchPrediction</a> operation to verify that the status of the <code>BatchPrediction</code> changed to DELETED.</p> <p><b>Caution:</b> The result of the <code>DeleteBatchPrediction</code> operation is irreversible.</p>
		 * Post #X-Amz-Target=AmazonML_20141212.DeleteBatchPrediction
		 * @return {DeleteBatchPredictionOutput} Success
		 */
		DeleteBatchPrediction(requestBody: DeleteBatchPredictionInput): Observable<DeleteBatchPredictionOutput> {
			return this.http.post<DeleteBatchPredictionOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.DeleteBatchPrediction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Assigns the DELETED status to a <code>DataSource</code>, rendering it unusable.</p> <p>After using the <code>DeleteDataSource</code> operation, you can use the <a>GetDataSource</a> operation to verify that the status of the <code>DataSource</code> changed to DELETED.</p> <p><b>Caution:</b> The results of the <code>DeleteDataSource</code> operation are irreversible.</p>
		 * Post #X-Amz-Target=AmazonML_20141212.DeleteDataSource
		 * @return {DeleteDataSourceOutput} Success
		 */
		DeleteDataSource(requestBody: DeleteDataSourceInput): Observable<DeleteDataSourceOutput> {
			return this.http.post<DeleteDataSourceOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.DeleteDataSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Assigns the <code>DELETED</code> status to an <code>Evaluation</code>, rendering it unusable.</p> <p>After invoking the <code>DeleteEvaluation</code> operation, you can use the <code>GetEvaluation</code> operation to verify that the status of the <code>Evaluation</code> changed to <code>DELETED</code>.</p> <caution><title>Caution</title> <p>The results of the <code>DeleteEvaluation</code> operation are irreversible.</p></caution>
		 * Post #X-Amz-Target=AmazonML_20141212.DeleteEvaluation
		 * @return {DeleteEvaluationOutput} Success
		 */
		DeleteEvaluation(requestBody: DeleteEvaluationInput): Observable<DeleteEvaluationOutput> {
			return this.http.post<DeleteEvaluationOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.DeleteEvaluation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Assigns the <code>DELETED</code> status to an <code>MLModel</code>, rendering it unusable.</p> <p>After using the <code>DeleteMLModel</code> operation, you can use the <code>GetMLModel</code> operation to verify that the status of the <code>MLModel</code> changed to DELETED.</p> <p><b>Caution:</b> The result of the <code>DeleteMLModel</code> operation is irreversible.</p>
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
		 * <p>Returns a <code>DataSource</code> that includes metadata and data file information, as well as the current status of the <code>DataSource</code>.</p> <p><code>GetDataSource</code> provides results in normal or verbose format. The verbose format adds the schema description and the list of files pointed to by the DataSource to the normal format.</p>
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
		 * <p>Returns an <code>MLModel</code> that includes detailed metadata, data source information, and the current status of the <code>MLModel</code>.</p> <p><code>GetMLModel</code> provides results in normal or verbose format. </p>
		 * Post #X-Amz-Target=AmazonML_20141212.GetMLModel
		 * @return {GetMLModelOutput} Success
		 */
		GetMLModel(requestBody: GetMLModelInput): Observable<GetMLModelOutput> {
			return this.http.post<GetMLModelOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.GetMLModel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Generates a prediction for the observation using the specified <code>ML Model</code>.</p> <note><title>Note</title> <p>Not all response parameters will be populated. Whether a response parameter is populated depends on the type of model requested.</p></note>
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

	export enum AddTagsX_Amz_Target { AmazonML_20141212_AddTags = 0 }

	export enum CreateBatchPredictionX_Amz_Target { AmazonML_20141212_CreateBatchPrediction = 0 }

	export enum CreateDataSourceFromRDSX_Amz_Target { AmazonML_20141212_CreateDataSourceFromRDS = 0 }

	export enum CreateDataSourceFromRedshiftX_Amz_Target { AmazonML_20141212_CreateDataSourceFromRedshift = 0 }

	export enum CreateDataSourceFromS3X_Amz_Target { AmazonML_20141212_CreateDataSourceFromS3 = 0 }

	export enum CreateEvaluationX_Amz_Target { AmazonML_20141212_CreateEvaluation = 0 }

	export enum CreateMLModelX_Amz_Target { AmazonML_20141212_CreateMLModel = 0 }

	export enum CreateRealtimeEndpointX_Amz_Target { AmazonML_20141212_CreateRealtimeEndpoint = 0 }

	export enum DeleteBatchPredictionX_Amz_Target { AmazonML_20141212_DeleteBatchPrediction = 0 }

	export enum DeleteDataSourceX_Amz_Target { AmazonML_20141212_DeleteDataSource = 0 }

	export enum DeleteEvaluationX_Amz_Target { AmazonML_20141212_DeleteEvaluation = 0 }

	export enum DeleteMLModelX_Amz_Target { AmazonML_20141212_DeleteMLModel = 0 }

	export enum DeleteRealtimeEndpointX_Amz_Target { AmazonML_20141212_DeleteRealtimeEndpoint = 0 }

	export enum DeleteTagsX_Amz_Target { AmazonML_20141212_DeleteTags = 0 }

	export enum DescribeBatchPredictionsX_Amz_Target { AmazonML_20141212_DescribeBatchPredictions = 0 }

	export enum DescribeDataSourcesX_Amz_Target { AmazonML_20141212_DescribeDataSources = 0 }

	export enum DescribeEvaluationsX_Amz_Target { AmazonML_20141212_DescribeEvaluations = 0 }

	export enum DescribeMLModelsX_Amz_Target { AmazonML_20141212_DescribeMLModels = 0 }

	export enum DescribeTagsX_Amz_Target { AmazonML_20141212_DescribeTags = 0 }

	export enum GetBatchPredictionX_Amz_Target { AmazonML_20141212_GetBatchPrediction = 0 }

	export enum GetDataSourceX_Amz_Target { AmazonML_20141212_GetDataSource = 0 }

	export enum GetEvaluationX_Amz_Target { AmazonML_20141212_GetEvaluation = 0 }

	export enum GetMLModelX_Amz_Target { AmazonML_20141212_GetMLModel = 0 }

	export enum PredictX_Amz_Target { AmazonML_20141212_Predict = 0 }

	export enum UpdateBatchPredictionX_Amz_Target { AmazonML_20141212_UpdateBatchPrediction = 0 }

	export enum UpdateDataSourceX_Amz_Target { AmazonML_20141212_UpdateDataSource = 0 }

	export enum UpdateEvaluationX_Amz_Target { AmazonML_20141212_UpdateEvaluation = 0 }

	export enum UpdateMLModelX_Amz_Target { AmazonML_20141212_UpdateMLModel = 0 }

}

