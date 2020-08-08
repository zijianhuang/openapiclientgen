import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Amazon ML returns the following elements.  */
	export interface AddTagsOutput {
		ResourceId?: string;
		ResourceType?: AddTagsOutputResourceType;
	}

	export enum AddTagsOutputResourceType { BatchPrediction = 0, DataSource = 1, Evaluation = 2, MLModel = 3 }

	export interface AddTagsInput {
		Tags: Array<Tag>;
		ResourceId: string;
		ResourceType: AddTagsOutputResourceType;
	}


	/** A custom key-value pair associated with an ML object, such as an ML model. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}


	/** An error on the client occurred. Typically, the cause is an invalid input value. */
	export interface InvalidInputException {
		message?: string;
		code?: number;
	}

	export interface InvalidTagException {
		message?: string;
	}

	export interface TagLimitExceededException {
		message?: string;
	}


	/** A specified resource cannot be located. */
	export interface ResourceNotFoundException {
		message?: string;
		code?: number;
	}


	/** An error on the server occurred when trying to process a request. */
	export interface InternalServerException {
		message?: string;
		code?: number;
	}


	/** <p> Represents the output of a <code>CreateBatchPrediction</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateBatchPrediction</code> operation is asynchronous. You can poll for status updates by using the <code>&gt;GetBatchPrediction</code> operation and checking the <code>Status</code> parameter of the result. </p> */
	export interface CreateBatchPredictionOutput {
		BatchPredictionId?: string;
	}

	export interface CreateBatchPredictionInput {
		BatchPredictionId: string;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		BatchPredictionName?: string;
		MLModelId: string;
		BatchPredictionDataSourceId: string;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 * Pattern: s3://([^/]+)(/.*)?
		 */
		OutputUri: string;
	}


	/** A second request to use or change an object was not allowed. This can result from retrying a request using a parameter that was not present in the original request. */
	export interface IdempotentParameterMismatchException {
		message?: string;
		code?: number;
	}


	/** <p> Represents the output of a <code>CreateDataSourceFromRDS</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromRDS</code>&gt; operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. You can inspect the <code>Message</code> when <code>Status</code> shows up as <code>FAILED</code>. You can also check the progress of the copy operation by going to the <code>DataPipeline</code> console and looking up the pipeline using the <code>pipelineId </code> from the describe call.</p> */
	export interface CreateDataSourceFromRDSOutput {
		DataSourceId?: string;
	}

	export interface CreateDataSourceFromRDSInput {
		DataSourceId: string;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		DataSourceName?: string;

		/** The data specification of an Amazon Relational Database Service (Amazon RDS) <code>DataSource</code>. */
		RDSData: RDSDataSpec;

		/**
		 * The Amazon Resource Name (ARN) of an <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename.
		 * Max length: 110
		 * Min length: 1
		 */
		RoleARN: string;
		ComputeStatistics?: boolean;
	}


	/** The data specification of an Amazon Relational Database Service (Amazon RDS) <code>DataSource</code>. */
	export interface RDSDataSpec {

		/** The database details of an Amazon RDS database. */
		DatabaseInformation: RDSDatabase;

		/**
		 * The SQL query to be executed against the Amazon RDS database. The SQL query should be valid for the Amazon RDS type being used.
		 * Max length: 16777216
		 * Min length: 1
		 */
		SelectSqlQuery: string;

		/** The database credentials to connect to a database on an RDS DB instance. */
		DatabaseCredentials: RDSDatabaseCredentials;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 * Pattern: s3://([^/]+)(/.*)?
		 */
		S3StagingLocation: string;
		DataRearrangement?: string;

		/**
		 * <p>The schema of a <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>. The DataSource schema is expressed in JSON format.</p> <p><code>DataSchema</code> is not required if you specify a <code>DataSchemaUri</code></p> <p>{ "version": "1.0", "recordAnnotationFieldName": "F1", "recordWeightFieldName": "F2", "targetFieldName": "F3", "dataFormat": "CSV", "dataFileContainsHeader": true, "variables": [ { "fieldName": "F1", "fieldType": "TEXT" }, { "fieldName": "F2", "fieldType": "NUMERIC" }, { "fieldName": "F3", "fieldType": "CATEGORICAL" }, { "fieldName": "F4", "fieldType": "NUMERIC" }, { "fieldName": "F5", "fieldType": "CATEGORICAL" }, { "fieldName": "F6", "fieldType": "TEXT" }, { "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" }, { "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" } ], "excludedVariableNames": [ "F6" ] } </p>
		 * Max length: 131071
		 */
		DataSchema?: string;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 * Pattern: s3://([^/]+)(/.*)?
		 */
		DataSchemaUri?: string;
		ResourceRole: string;
		ServiceRole: string;
		SubnetId: string;
		SecurityGroupIds: Array<string>;
	}


	/** The database details of an Amazon RDS database. */
	export interface RDSDatabase {

		/**
		 * Identifier of RDS DB Instances.
		 * Max length: 63
		 * Min length: 1
		 * Pattern: [a-z0-9-]+
		 */
		InstanceIdentifier: string;

		/**
		 * The name of a database hosted on an RDS DB instance.
		 * Max length: 64
		 * Min length: 1
		 */
		DatabaseName: string;
	}


	/** The database credentials to connect to a database on an RDS DB instance. */
	export interface RDSDatabaseCredentials {

		/**
		 * The username to be used by Amazon ML to connect to database on an Amazon RDS instance. The username should have sufficient permissions to execute an <code>RDSSelectSqlQuery</code> query.
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;

		/**
		 * The password to be used by Amazon ML to connect to a database on an RDS DB instance. The password should have sufficient permissions to execute the <code>RDSSelectQuery</code> query.
		 * Max length: 128
		 * Min length: 8
		 */
		Password: string;
	}


	/** <p> Represents the output of a <code>CreateDataSourceFromRedshift</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromRedshift</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p> */
	export interface CreateDataSourceFromRedshiftOutput {
		DataSourceId?: string;
	}

	export interface CreateDataSourceFromRedshiftInput {
		DataSourceId: string;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		DataSourceName?: string;

		/** Describes the data specification of an Amazon Redshift <code>DataSource</code>. */
		DataSpec: RedshiftDataSpec;

		/**
		 * The Amazon Resource Name (ARN) of an <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename.
		 * Max length: 110
		 * Min length: 1
		 */
		RoleARN: string;
		ComputeStatistics?: boolean;
	}


	/** Describes the data specification of an Amazon Redshift <code>DataSource</code>. */
	export interface RedshiftDataSpec {

		/** Describes the database details required to connect to an Amazon Redshift database. */
		DatabaseInformation: RedshiftDatabase;

		/**
		 * Describes the SQL query to execute on the Amazon Redshift database. The SQL query should be valid for an Amazon Redshift <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_SELECT_synopsis.html">SELECT</a>.
		 * Max length: 16777216
		 * Min length: 1
		 */
		SelectSqlQuery: string;

		/** Describes the database credentials for connecting to a database on an Amazon Redshift cluster. */
		DatabaseCredentials: RedshiftDatabaseCredentials;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 * Pattern: s3://([^/]+)(/.*)?
		 */
		S3StagingLocation: string;
		DataRearrangement?: string;

		/**
		 * <p>The schema of a <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>. The DataSource schema is expressed in JSON format.</p> <p><code>DataSchema</code> is not required if you specify a <code>DataSchemaUri</code></p> <p>{ "version": "1.0", "recordAnnotationFieldName": "F1", "recordWeightFieldName": "F2", "targetFieldName": "F3", "dataFormat": "CSV", "dataFileContainsHeader": true, "variables": [ { "fieldName": "F1", "fieldType": "TEXT" }, { "fieldName": "F2", "fieldType": "NUMERIC" }, { "fieldName": "F3", "fieldType": "CATEGORICAL" }, { "fieldName": "F4", "fieldType": "NUMERIC" }, { "fieldName": "F5", "fieldType": "CATEGORICAL" }, { "fieldName": "F6", "fieldType": "TEXT" }, { "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" }, { "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" } ], "excludedVariableNames": [ "F6" ] } </p>
		 * Max length: 131071
		 */
		DataSchema?: string;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 * Pattern: s3://([^/]+)(/.*)?
		 */
		DataSchemaUri?: string;
	}


	/** Describes the database details required to connect to an Amazon Redshift database. */
	export interface RedshiftDatabase {

		/**
		 * The name of a database hosted on an Amazon Redshift cluster.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-z0-9]+
		 */
		DatabaseName: string;

		/**
		 * The ID of an Amazon Redshift cluster.
		 * Max length: 63
		 * Min length: 1
		 * Pattern: [a-z0-9-]+
		 */
		ClusterIdentifier: string;
	}


	/**  Describes the database credentials for connecting to a database on an Amazon Redshift cluster. */
	export interface RedshiftDatabaseCredentials {

		/**
		 * A username to be used by Amazon Machine Learning (Amazon ML)to connect to a database on an Amazon Redshift cluster. The username should have sufficient permissions to execute the <code>RedshiftSelectSqlQuery</code> query. The username should be valid for an Amazon Redshift <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.
		 * Max length: 128
		 * Min length: 1
		 */
		Username: string;

		/**
		 * A password to be used by Amazon ML to connect to a database on an Amazon Redshift cluster. The password should have sufficient permissions to execute a <code>RedshiftSelectSqlQuery</code> query. The password should be valid for an Amazon Redshift <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.
		 * Max length: 64
		 * Min length: 8
		 */
		Password: string;
	}


	/** <p> Represents the output of a <code>CreateDataSourceFromS3</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromS3</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p> */
	export interface CreateDataSourceFromS3Output {
		DataSourceId?: string;
	}

	export interface CreateDataSourceFromS3Input {
		DataSourceId: string;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		DataSourceName?: string;

		/** Describes the data specification of a <code>DataSource</code>. */
		DataSpec: S3DataSpec;
		ComputeStatistics?: boolean;
	}


	/**  Describes the data specification of a <code>DataSource</code>. */
	export interface S3DataSpec {

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 * Pattern: s3://([^/]+)(/.*)?
		 */
		DataLocationS3: string;
		DataRearrangement?: string;

		/**
		 * <p>The schema of a <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>. The DataSource schema is expressed in JSON format.</p> <p><code>DataSchema</code> is not required if you specify a <code>DataSchemaUri</code></p> <p>{ "version": "1.0", "recordAnnotationFieldName": "F1", "recordWeightFieldName": "F2", "targetFieldName": "F3", "dataFormat": "CSV", "dataFileContainsHeader": true, "variables": [ { "fieldName": "F1", "fieldType": "TEXT" }, { "fieldName": "F2", "fieldType": "NUMERIC" }, { "fieldName": "F3", "fieldType": "CATEGORICAL" }, { "fieldName": "F4", "fieldType": "NUMERIC" }, { "fieldName": "F5", "fieldType": "CATEGORICAL" }, { "fieldName": "F6", "fieldType": "TEXT" }, { "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" }, { "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" } ], "excludedVariableNames": [ "F6" ] } </p>
		 * Max length: 131071
		 */
		DataSchema?: string;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 * Pattern: s3://([^/]+)(/.*)?
		 */
		DataSchemaLocationS3?: string;
	}


	/** <p> Represents the output of a <code>CreateEvaluation</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p><code>CreateEvaluation</code> operation is asynchronous. You can poll for status updates by using the <code>GetEvcaluation</code> operation and checking the <code>Status</code> parameter. </p> */
	export interface CreateEvaluationOutput {
		EvaluationId?: string;
	}

	export interface CreateEvaluationInput {
		EvaluationId: string;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		EvaluationName?: string;
		MLModelId: string;
		EvaluationDataSourceId: string;
	}


	/** <p> Represents the output of a <code>CreateMLModel</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateMLModel</code> operation is asynchronous. You can poll for status updates by using the <code>GetMLModel</code> operation and checking the <code>Status</code> parameter. </p> */
	export interface CreateMLModelOutput {
		MLModelId?: string;
	}

	export interface CreateMLModelInput {
		MLModelId: string;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		MLModelName?: string;
		MLModelType: CreateMLModelInputMLModelType;
		Parameters?: TrainingParameters;
		TrainingDataSourceId: string;
		Recipe?: string;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 * Pattern: s3://([^/]+)(/.*)?
		 */
		RecipeUri?: string;
	}

	export enum CreateMLModelInputMLModelType { REGRESSION = 0, BINARY = 1, MULTICLASS = 2 }

	export interface TrainingParameters {
	}


	/** <p>Represents the output of an <code>CreateRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>.</p> <note> <p>The endpoint information includes the URI of the <code>MLModel</code>; that is, the location to send online prediction requests for the specified <code>MLModel</code>.</p> </note> */
	export interface CreateRealtimeEndpointOutput {
		MLModelId?: string;

		/** Describes the real-time endpoint information for an <code>MLModel</code>. */
		RealtimeEndpointInfo?: RealtimeEndpointInfo;
	}


	/**  Describes the real-time endpoint information for an <code>MLModel</code>. */
	export interface RealtimeEndpointInfo {

		/** Integer type that is a 32-bit signed number. */
		PeakRequestsPerSecond?: number;

		/** A timestamp represented in epoch time. */
		CreatedAt?: Date;
		EndpointUrl?: string;
		EndpointStatus?: RealtimeEndpointInfoEndpointStatus;
	}

	export enum RealtimeEndpointInfoEndpointStatus { NONE = 0, READY = 1, UPDATING = 2, FAILED = 3 }

	export interface CreateRealtimeEndpointInput {
		MLModelId: string;
	}


	/** <p> Represents the output of a <code>DeleteBatchPrediction</code> operation.</p> <p>You can use the <code>GetBatchPrediction</code> operation and check the value of the <code>Status</code> parameter to see whether a <code>BatchPrediction</code> is marked as <code>DELETED</code>.</p> */
	export interface DeleteBatchPredictionOutput {
		BatchPredictionId?: string;
	}

	export interface DeleteBatchPredictionInput {
		BatchPredictionId: string;
	}


	/**  Represents the output of a <code>DeleteDataSource</code> operation. */
	export interface DeleteDataSourceOutput {
		DataSourceId?: string;
	}

	export interface DeleteDataSourceInput {
		DataSourceId: string;
	}


	/** <p> Represents the output of a <code>DeleteEvaluation</code> operation. The output indicates that Amazon Machine Learning (Amazon ML) received the request.</p> <p>You can use the <code>GetEvaluation</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>Evaluation</code> is marked as <code>DELETED</code>.</p> */
	export interface DeleteEvaluationOutput {
		EvaluationId?: string;
	}

	export interface DeleteEvaluationInput {
		EvaluationId: string;
	}


	/** <p>Represents the output of a <code>DeleteMLModel</code> operation.</p> <p>You can use the <code>GetMLModel</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>MLModel</code> is marked as <code>DELETED</code>.</p> */
	export interface DeleteMLModelOutput {
		MLModelId?: string;
	}

	export interface DeleteMLModelInput {
		MLModelId: string;
	}


	/** <p>Represents the output of an <code>DeleteRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>. </p> */
	export interface DeleteRealtimeEndpointOutput {
		MLModelId?: string;

		/** Describes the real-time endpoint information for an <code>MLModel</code>. */
		RealtimeEndpointInfo?: RealtimeEndpointInfo;
	}

	export interface DeleteRealtimeEndpointInput {
		MLModelId: string;
	}


	/** Amazon ML returns the following elements.  */
	export interface DeleteTagsOutput {
		ResourceId?: string;
		ResourceType?: AddTagsOutputResourceType;
	}

	export interface DeleteTagsInput {
		TagKeys: Array<string>;
		ResourceId: string;
		ResourceType: AddTagsOutputResourceType;
	}


	/** Represents the output of a <code>DescribeBatchPredictions</code> operation. The content is essentially a list of <code>BatchPrediction</code>s. */
	export interface DescribeBatchPredictionsOutput {
		Results?: Array<BatchPrediction>;

		/** String type. */
		NextToken?: string;
	}


	/** <p> Represents the output of a <code>GetBatchPrediction</code> operation.</p> <p> The content consists of the detailed metadata, the status, and the data file information of a <code>Batch Prediction</code>.</p> */
	export interface BatchPrediction {
		BatchPredictionId?: string;
		MLModelId?: string;
		BatchPredictionDataSourceId?: string;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 * Pattern: s3://([^/]+)(/.*)?
		 */
		InputDataLocationS3?: string;

		/**
		 * An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user.
		 * Pattern: arn:aws:iam::[0-9]+:((user/.+)|(root))
		 */
		CreatedByIamUser?: string;

		/** A timestamp represented in epoch time. */
		CreatedAt?: Date;

		/** A timestamp represented in epoch time. */
		LastUpdatedAt?: Date;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		Name?: string;

		/** <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul> */
		Status?: BatchPredictionStatus;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 * Pattern: s3://([^/]+)(/.*)?
		 */
		OutputUri?: string;

		/**
		 * Description of the most recent details about an object.
		 * Max length: 10240
		 */
		Message?: string;

		/** Long integer type that is a 64-bit signed number. */
		ComputeTime?: number;

		/** A timestamp represented in epoch time. */
		FinishedAt?: Date;

		/** A timestamp represented in epoch time. */
		StartedAt?: Date;

		/** Long integer type that is a 64-bit signed number. */
		TotalRecordCount?: number;

		/** Long integer type that is a 64-bit signed number. */
		InvalidRecordCount?: number;
	}

	export enum BatchPredictionStatus { PENDING = 0, INPROGRESS = 1, FAILED = 2, COMPLETED = 3, DELETED = 4 }

	export interface DescribeBatchPredictionsInput {

		/** <p>A list of the variables to use in searching or filtering <code>BatchPrediction</code>.</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to <code>BatchPrediction</code> creation date.</li> <li> <code>Status</code> - Sets the search criteria to <code>BatchPrediction</code> status.</li> <li> <code>Name</code> - Sets the search criteria to the contents of <code>BatchPrediction</code><b> </b> <code>Name</code>.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>BatchPrediction</code> creation.</li> <li> <code>MLModelId</code> - Sets the search criteria to the <code>MLModel</code> used in the <code>BatchPrediction</code>.</li> <li> <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in the <code>BatchPrediction</code>.</li> <li> <code>DataURI</code> - Sets the search criteria to the data file(s) used in the <code>BatchPrediction</code>. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</li> </ul> */
		FilterVariable?: DescribeBatchPredictionsInputFilterVariable;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		EQ?: string;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		GT?: string;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		LT?: string;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		GE?: string;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		LE?: string;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		NE?: string;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		Prefix?: string;

		/** <p>The sort order specified in a listing condition. Possible values include the following:</p> <ul> <li> <code>asc</code> - Present the information in ascending order (from A-Z).</li> <li> <code>dsc</code> - Present the information in descending order (from Z-A).</li> </ul> */
		SortOrder?: DescribeBatchPredictionsInputSortOrder;

		/** String type. */
		NextToken?: string;
		Limit?: number;
	}

	export enum DescribeBatchPredictionsInputFilterVariable { CreatedAt = 0, LastUpdatedAt = 1, Status = 2, Name = 3, IAMUser = 4, MLModelId = 5, DataSourceId = 6, DataURI = 7 }

	export enum DescribeBatchPredictionsInputSortOrder { asc = 0, dsc = 1 }


	/** Represents the query results from a <a>DescribeDataSources</a> operation. The content is essentially a list of <code>DataSource</code>. */
	export interface DescribeDataSourcesOutput {
		Results?: Array<DataSource>;

		/** String type. */
		NextToken?: string;
	}


	/** <p> Represents the output of the <code>GetDataSource</code> operation. </p> <p> The content consists of the detailed metadata and data file information and the current status of the <code>DataSource</code>. </p> */
	export interface DataSource {
		DataSourceId?: string;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 * Pattern: s3://([^/]+)(/.*)?
		 */
		DataLocationS3?: string;
		DataRearrangement?: string;

		/**
		 * An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user.
		 * Pattern: arn:aws:iam::[0-9]+:((user/.+)|(root))
		 */
		CreatedByIamUser?: string;

		/** A timestamp represented in epoch time. */
		CreatedAt?: Date;

		/** A timestamp represented in epoch time. */
		LastUpdatedAt?: Date;

		/** Long integer type that is a 64-bit signed number. */
		DataSizeInBytes?: number;

		/** Long integer type that is a 64-bit signed number. */
		NumberOfFiles?: number;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		Name?: string;

		/** <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul> */
		Status?: BatchPredictionStatus;

		/**
		 * Description of the most recent details about an object.
		 * Max length: 10240
		 */
		Message?: string;

		/** Describes the <code>DataSource</code> details specific to Amazon Redshift. */
		RedshiftMetadata?: RedshiftMetadata;

		/** The datasource details that are specific to Amazon RDS. */
		RDSMetadata?: RDSMetadata;

		/**
		 * The Amazon Resource Name (ARN) of an <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename.
		 * Max length: 110
		 * Min length: 1
		 */
		RoleARN?: string;
		ComputeStatistics?: boolean;

		/** Long integer type that is a 64-bit signed number. */
		ComputeTime?: number;

		/** A timestamp represented in epoch time. */
		FinishedAt?: Date;

		/** A timestamp represented in epoch time. */
		StartedAt?: Date;
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
		DatabaseUserName?: string;

		/**
		 * Describes the SQL query to execute on the Amazon Redshift database. The SQL query should be valid for an Amazon Redshift <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_SELECT_synopsis.html">SELECT</a>.
		 * Max length: 16777216
		 * Min length: 1
		 */
		SelectSqlQuery?: string;
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
		DatabaseUserName?: string;

		/**
		 * The SQL query to be executed against the Amazon RDS database. The SQL query should be valid for the Amazon RDS type being used.
		 * Max length: 16777216
		 * Min length: 1
		 */
		SelectSqlQuery?: string;
		ResourceRole?: string;
		ServiceRole?: string;
		DataPipelineId?: string;
	}

	export interface DescribeDataSourcesInput {

		/** <p>A list of the variables to use in searching or filtering <code>DataSource</code>.</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to <code>DataSource</code> creation date.</li> <li> <code>Status</code> - Sets the search criteria to <code>DataSource</code> status.</li> <li> <code>Name</code> - Sets the search criteria to the contents of <code>DataSource</code> <b> </b> <code>Name</code>.</li> <li> <code>DataUri</code> - Sets the search criteria to the URI of data files used to create the <code>DataSource</code>. The URI can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>DataSource</code> creation.</li> </ul> <note><title>Note</title> <p>The variable names should match the variable names in the <code>DataSource</code>.</p> </note> */
		FilterVariable?: DescribeDataSourcesInputFilterVariable;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		EQ?: string;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		GT?: string;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		LT?: string;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		GE?: string;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		LE?: string;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		NE?: string;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		Prefix?: string;

		/** <p>The sort order specified in a listing condition. Possible values include the following:</p> <ul> <li> <code>asc</code> - Present the information in ascending order (from A-Z).</li> <li> <code>dsc</code> - Present the information in descending order (from Z-A).</li> </ul> */
		SortOrder?: DescribeBatchPredictionsInputSortOrder;

		/** String type. */
		NextToken?: string;
		Limit?: number;
	}

	export enum DescribeDataSourcesInputFilterVariable { CreatedAt = 0, LastUpdatedAt = 1, Status = 2, Name = 3, DataLocationS3 = 4, IAMUser = 5 }


	/** Represents the query results from a <code>DescribeEvaluations</code> operation. The content is essentially a list of <code>Evaluation</code>. */
	export interface DescribeEvaluationsOutput {
		Results?: Array<Evaluation>;

		/** String type. */
		NextToken?: string;
	}


	/** <p> Represents the output of <code>GetEvaluation</code> operation. </p> <p>The content consists of the detailed metadata and data file information and the current status of the <code>Evaluation</code>.</p> */
	export interface Evaluation {
		EvaluationId?: string;
		MLModelId?: string;
		EvaluationDataSourceId?: string;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 * Pattern: s3://([^/]+)(/.*)?
		 */
		InputDataLocationS3?: string;

		/**
		 * An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user.
		 * Pattern: arn:aws:iam::[0-9]+:((user/.+)|(root))
		 */
		CreatedByIamUser?: string;

		/** A timestamp represented in epoch time. */
		CreatedAt?: Date;

		/** A timestamp represented in epoch time. */
		LastUpdatedAt?: Date;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		Name?: string;

		/** <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul> */
		Status?: BatchPredictionStatus;

		/** <p>Measurements of how well the <code>MLModel</code> performed on known observations. One of the following metrics is returned, based on the type of the <code>MLModel</code>: </p> <ul> <li> <p>BinaryAUC: The binary <code>MLModel</code> uses the Area Under the Curve (AUC) technique to measure performance. </p> </li> <li> <p>RegressionRMSE: The regression <code>MLModel</code> uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.</p> </li> <li> <p>MulticlassAvgFScore: The multiclass <code>MLModel</code> uses the F1 score technique to measure performance. </p> </li> </ul> <p> For more information about performance metrics, please see the <a href="http://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>. </p> */
		PerformanceMetrics?: PerformanceMetrics;

		/**
		 * Description of the most recent details about an object.
		 * Max length: 10240
		 */
		Message?: string;

		/** Long integer type that is a 64-bit signed number. */
		ComputeTime?: number;

		/** A timestamp represented in epoch time. */
		FinishedAt?: Date;

		/** A timestamp represented in epoch time. */
		StartedAt?: Date;
	}


	/** <p>Measurements of how well the <code>MLModel</code> performed on known observations. One of the following metrics is returned, based on the type of the <code>MLModel</code>: </p> <ul> <li> <p>BinaryAUC: The binary <code>MLModel</code> uses the Area Under the Curve (AUC) technique to measure performance. </p> </li> <li> <p>RegressionRMSE: The regression <code>MLModel</code> uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.</p> </li> <li> <p>MulticlassAvgFScore: The multiclass <code>MLModel</code> uses the F1 score technique to measure performance. </p> </li> </ul> <p> For more information about performance metrics, please see the <a href="http://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>. </p> */
	export interface PerformanceMetrics {
		Properties?: PerformanceMetricsProperties;
	}

	export interface PerformanceMetricsProperties {
	}

	export interface DescribeEvaluationsInput {

		/** <p>A list of the variables to use in searching or filtering <code>Evaluation</code>.</p> <ul> <li> <code>CreatedAt</code> - Sets the search criteria to <code>Evaluation</code> creation date.</li> <li> <code>Status</code> - Sets the search criteria to <code>Evaluation</code> status.</li> <li> <code>Name</code> - Sets the search criteria to the contents of <code>Evaluation</code> <b> </b> <code>Name</code>.</li> <li> <code>IAMUser</code> - Sets the search criteria to the user account that invoked an evaluation.</li> <li> <code>MLModelId</code> - Sets the search criteria to the <code>Predictor</code> that was evaluated.</li> <li> <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in evaluation.</li> <li> <code>DataUri</code> - Sets the search criteria to the data file(s) used in evaluation. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</li> </ul> */
		FilterVariable?: DescribeBatchPredictionsInputFilterVariable;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		EQ?: string;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		GT?: string;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		LT?: string;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		GE?: string;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		LE?: string;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		NE?: string;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		Prefix?: string;

		/** <p>The sort order specified in a listing condition. Possible values include the following:</p> <ul> <li> <code>asc</code> - Present the information in ascending order (from A-Z).</li> <li> <code>dsc</code> - Present the information in descending order (from Z-A).</li> </ul> */
		SortOrder?: DescribeBatchPredictionsInputSortOrder;

		/** String type. */
		NextToken?: string;
		Limit?: number;
	}


	/** Represents the output of a <code>DescribeMLModels</code> operation. The content is essentially a list of <code>MLModel</code>. */
	export interface DescribeMLModelsOutput {
		Results?: Array<MLModel>;

		/** String type. */
		NextToken?: string;
	}


	/** <p> Represents the output of a <code>GetMLModel</code> operation. </p> <p>The content consists of the detailed metadata and the current status of the <code>MLModel</code>.</p> */
	export interface MLModel {
		MLModelId?: string;
		TrainingDataSourceId?: string;

		/**
		 * An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user.
		 * Pattern: arn:aws:iam::[0-9]+:((user/.+)|(root))
		 */
		CreatedByIamUser?: string;

		/** A timestamp represented in epoch time. */
		CreatedAt?: Date;

		/** A timestamp represented in epoch time. */
		LastUpdatedAt?: Date;
		Name?: string;

		/** <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul> */
		Status?: BatchPredictionStatus;

		/** Long integer type that is a 64-bit signed number. */
		SizeInBytes?: number;

		/** Describes the real-time endpoint information for an <code>MLModel</code>. */
		EndpointInfo?: RealtimeEndpointInfo;
		TrainingParameters?: TrainingParameters;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 * Pattern: s3://([^/]+)(/.*)?
		 */
		InputDataLocationS3?: string;

		/** <p>The function used to train an <code>MLModel</code>. Training choices supported by Amazon ML include the following:</p> <ul> <li> <code>SGD</code> - Stochastic Gradient Descent.</li> <li> <code>RandomForest</code> - Random forest of decision trees.</li> </ul> */
		Algorithm?: MLModelAlgorithm;
		MLModelType?: CreateMLModelInputMLModelType;
		ScoreThreshold?: number;

		/** A timestamp represented in epoch time. */
		ScoreThresholdLastUpdatedAt?: Date;

		/**
		 * Description of the most recent details about an object.
		 * Max length: 10240
		 */
		Message?: string;

		/** Long integer type that is a 64-bit signed number. */
		ComputeTime?: number;

		/** A timestamp represented in epoch time. */
		FinishedAt?: Date;

		/** A timestamp represented in epoch time. */
		StartedAt?: Date;
	}

	export enum MLModelAlgorithm { sgd = 0 }

	export interface DescribeMLModelsInput {
		FilterVariable?: DescribeMLModelsInputFilterVariable;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		EQ?: string;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		GT?: string;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		LT?: string;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		GE?: string;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		LE?: string;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		NE?: string;

		/**
		 * The value specified in a filtering condition. The <code>ComparatorValue</code> becomes the reference value when matching or evaluating data values in filtering and searching functions.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		Prefix?: string;

		/** <p>The sort order specified in a listing condition. Possible values include the following:</p> <ul> <li> <code>asc</code> - Present the information in ascending order (from A-Z).</li> <li> <code>dsc</code> - Present the information in descending order (from Z-A).</li> </ul> */
		SortOrder?: DescribeBatchPredictionsInputSortOrder;

		/** String type. */
		NextToken?: string;
		Limit?: number;
	}

	export enum DescribeMLModelsInputFilterVariable { CreatedAt = 0, LastUpdatedAt = 1, Status = 2, Name = 3, IAMUser = 4, TrainingDataSourceId = 5, RealtimeEndpointStatus = 6, MLModelType = 7, Algorithm = 8, TrainingDataURI = 9 }


	/** Amazon ML returns the following elements.  */
	export interface DescribeTagsOutput {
		ResourceId?: string;
		ResourceType?: AddTagsOutputResourceType;
		Tags?: Array<Tag>;
	}

	export interface DescribeTagsInput {
		ResourceId: string;
		ResourceType: AddTagsOutputResourceType;
	}


	/** Represents the output of a <code>GetBatchPrediction</code> operation and describes a <code>BatchPrediction</code>. */
	export interface GetBatchPredictionOutput {
		BatchPredictionId?: string;
		MLModelId?: string;
		BatchPredictionDataSourceId?: string;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 * Pattern: s3://([^/]+)(/.*)?
		 */
		InputDataLocationS3?: string;

		/**
		 * An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user.
		 * Pattern: arn:aws:iam::[0-9]+:((user/.+)|(root))
		 */
		CreatedByIamUser?: string;

		/** A timestamp represented in epoch time. */
		CreatedAt?: Date;

		/** A timestamp represented in epoch time. */
		LastUpdatedAt?: Date;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		Name?: string;

		/** <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul> */
		Status?: BatchPredictionStatus;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 * Pattern: s3://([^/]+)(/.*)?
		 */
		OutputUri?: string;
		LogUri?: string;

		/**
		 * Description of the most recent details about an object.
		 * Max length: 10240
		 */
		Message?: string;

		/** Long integer type that is a 64-bit signed number. */
		ComputeTime?: number;

		/** A timestamp represented in epoch time. */
		FinishedAt?: Date;

		/** A timestamp represented in epoch time. */
		StartedAt?: Date;

		/** Long integer type that is a 64-bit signed number. */
		TotalRecordCount?: number;

		/** Long integer type that is a 64-bit signed number. */
		InvalidRecordCount?: number;
	}

	export interface GetBatchPredictionInput {
		BatchPredictionId: string;
	}


	/** Represents the output of a <code>GetDataSource</code> operation and describes a <code>DataSource</code>. */
	export interface GetDataSourceOutput {
		DataSourceId?: string;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 * Pattern: s3://([^/]+)(/.*)?
		 */
		DataLocationS3?: string;
		DataRearrangement?: string;

		/**
		 * An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user.
		 * Pattern: arn:aws:iam::[0-9]+:((user/.+)|(root))
		 */
		CreatedByIamUser?: string;

		/** A timestamp represented in epoch time. */
		CreatedAt?: Date;

		/** A timestamp represented in epoch time. */
		LastUpdatedAt?: Date;

		/** Long integer type that is a 64-bit signed number. */
		DataSizeInBytes?: number;

		/** Long integer type that is a 64-bit signed number. */
		NumberOfFiles?: number;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		Name?: string;

		/** <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul> */
		Status?: BatchPredictionStatus;
		LogUri?: string;

		/**
		 * Description of the most recent details about an object.
		 * Max length: 10240
		 */
		Message?: string;

		/** Describes the <code>DataSource</code> details specific to Amazon Redshift. */
		RedshiftMetadata?: RedshiftMetadata;

		/** The datasource details that are specific to Amazon RDS. */
		RDSMetadata?: RDSMetadata;

		/**
		 * The Amazon Resource Name (ARN) of an <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename.
		 * Max length: 110
		 * Min length: 1
		 */
		RoleARN?: string;
		ComputeStatistics?: boolean;

		/** Long integer type that is a 64-bit signed number. */
		ComputeTime?: number;

		/** A timestamp represented in epoch time. */
		FinishedAt?: Date;

		/** A timestamp represented in epoch time. */
		StartedAt?: Date;

		/**
		 * <p>The schema of a <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>. The DataSource schema is expressed in JSON format.</p> <p><code>DataSchema</code> is not required if you specify a <code>DataSchemaUri</code></p> <p>{ "version": "1.0", "recordAnnotationFieldName": "F1", "recordWeightFieldName": "F2", "targetFieldName": "F3", "dataFormat": "CSV", "dataFileContainsHeader": true, "variables": [ { "fieldName": "F1", "fieldType": "TEXT" }, { "fieldName": "F2", "fieldType": "NUMERIC" }, { "fieldName": "F3", "fieldType": "CATEGORICAL" }, { "fieldName": "F4", "fieldType": "NUMERIC" }, { "fieldName": "F5", "fieldType": "CATEGORICAL" }, { "fieldName": "F6", "fieldType": "TEXT" }, { "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" }, { "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" } ], "excludedVariableNames": [ "F6" ] } </p>
		 * Max length: 131071
		 */
		DataSourceSchema?: string;
	}

	export interface GetDataSourceInput {
		DataSourceId: string;

		/** Specifies whether a describe operation should return exhaustive or abbreviated information. */
		Verbose?: boolean;
	}


	/** Represents the output of a <code>GetEvaluation</code> operation and describes an <code>Evaluation</code>. */
	export interface GetEvaluationOutput {
		EvaluationId?: string;
		MLModelId?: string;
		EvaluationDataSourceId?: string;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 * Pattern: s3://([^/]+)(/.*)?
		 */
		InputDataLocationS3?: string;

		/**
		 * An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user.
		 * Pattern: arn:aws:iam::[0-9]+:((user/.+)|(root))
		 */
		CreatedByIamUser?: string;

		/** A timestamp represented in epoch time. */
		CreatedAt?: Date;

		/** A timestamp represented in epoch time. */
		LastUpdatedAt?: Date;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		Name?: string;

		/** <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul> */
		Status?: BatchPredictionStatus;

		/** <p>Measurements of how well the <code>MLModel</code> performed on known observations. One of the following metrics is returned, based on the type of the <code>MLModel</code>: </p> <ul> <li> <p>BinaryAUC: The binary <code>MLModel</code> uses the Area Under the Curve (AUC) technique to measure performance. </p> </li> <li> <p>RegressionRMSE: The regression <code>MLModel</code> uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.</p> </li> <li> <p>MulticlassAvgFScore: The multiclass <code>MLModel</code> uses the F1 score technique to measure performance. </p> </li> </ul> <p> For more information about performance metrics, please see the <a href="http://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>. </p> */
		PerformanceMetrics?: PerformanceMetrics;
		LogUri?: string;

		/**
		 * Description of the most recent details about an object.
		 * Max length: 10240
		 */
		Message?: string;

		/** Long integer type that is a 64-bit signed number. */
		ComputeTime?: number;

		/** A timestamp represented in epoch time. */
		FinishedAt?: Date;

		/** A timestamp represented in epoch time. */
		StartedAt?: Date;
	}

	export interface GetEvaluationInput {
		EvaluationId: string;
	}


	/** Represents the output of a <code>GetMLModel</code> operation, and provides detailed information about a <code>MLModel</code>. */
	export interface GetMLModelOutput {
		MLModelId?: string;
		TrainingDataSourceId?: string;

		/**
		 * An Amazon Web Service (AWS) user account identifier. The account identifier can be an AWS root account or an AWS Identity and Access Management (IAM) user.
		 * Pattern: arn:aws:iam::[0-9]+:((user/.+)|(root))
		 */
		CreatedByIamUser?: string;

		/** A timestamp represented in epoch time. */
		CreatedAt?: Date;

		/** A timestamp represented in epoch time. */
		LastUpdatedAt?: Date;
		Name?: string;

		/** <p>Object status with the following possible values:</p> <ul> <li><code>PENDING</code></li> <li><code>INPROGRESS</code></li> <li><code>FAILED</code></li> <li><code>COMPLETED</code></li> <li><code>DELETED</code></li> </ul> */
		Status?: BatchPredictionStatus;

		/** Long integer type that is a 64-bit signed number. */
		SizeInBytes?: number;

		/** Describes the real-time endpoint information for an <code>MLModel</code>. */
		EndpointInfo?: RealtimeEndpointInfo;
		TrainingParameters?: TrainingParameters;

		/**
		 * A reference to a file or bucket on Amazon Simple Storage Service (Amazon S3).
		 * Max length: 2048
		 * Pattern: s3://([^/]+)(/.*)?
		 */
		InputDataLocationS3?: string;
		MLModelType?: CreateMLModelInputMLModelType;
		ScoreThreshold?: number;

		/** A timestamp represented in epoch time. */
		ScoreThresholdLastUpdatedAt?: Date;
		LogUri?: string;

		/**
		 * Description of the most recent details about an object.
		 * Max length: 10240
		 */
		Message?: string;

		/** Long integer type that is a 64-bit signed number. */
		ComputeTime?: number;

		/** A timestamp represented in epoch time. */
		FinishedAt?: Date;

		/** A timestamp represented in epoch time. */
		StartedAt?: Date;
		Recipe?: string;

		/**
		 * <p>The schema of a <code>DataSource</code>. The <code>DataSchema</code> defines the structure of the observation data in the data file(s) referenced in the <code>DataSource</code>. The DataSource schema is expressed in JSON format.</p> <p><code>DataSchema</code> is not required if you specify a <code>DataSchemaUri</code></p> <p>{ "version": "1.0", "recordAnnotationFieldName": "F1", "recordWeightFieldName": "F2", "targetFieldName": "F3", "dataFormat": "CSV", "dataFileContainsHeader": true, "variables": [ { "fieldName": "F1", "fieldType": "TEXT" }, { "fieldName": "F2", "fieldType": "NUMERIC" }, { "fieldName": "F3", "fieldType": "CATEGORICAL" }, { "fieldName": "F4", "fieldType": "NUMERIC" }, { "fieldName": "F5", "fieldType": "CATEGORICAL" }, { "fieldName": "F6", "fieldType": "TEXT" }, { "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" }, { "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" } ], "excludedVariableNames": [ "F6" ] } </p>
		 * Max length: 131071
		 */
		Schema?: string;
	}

	export interface GetMLModelInput {
		MLModelId: string;

		/** Specifies whether a describe operation should return exhaustive or abbreviated information. */
		Verbose?: boolean;
	}

	export interface PredictOutput {

		/** <p>The output from a <code>Predict</code> operation: </p> <ul> <li> <p> <code>Details</code> - Contains the following attributes: <code>DetailsAttributes.PREDICTIVE_MODEL_TYPE - REGRESSION | BINARY | MULTICLASS</code> <code>DetailsAttributes.ALGORITHM - SGD</code> </p> </li> <li> <p> <code>PredictedLabel</code> - Present for either a <code>BINARY</code> or <code>MULTICLASS</code> <code>MLModel</code> request. </p> </li> <li> <p> <code>PredictedScores</code> - Contains the raw classification score corresponding to each label. </p> </li> <li> <p> <code>PredictedValue</code> - Present for a <code>REGRESSION</code> <code>MLModel</code> request. </p> </li> </ul> */
		Prediction?: Prediction;
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


	/** Provides the raw classification score corresponding to each label. */
	export interface ScoreValuePerLabelMap {
	}


	/** Provides any additional details regarding the prediction. */
	export interface DetailsMap {
	}

	export interface PredictInput {
		MLModelId: string;

		/** A map of variable name-value pairs that represent an observation. */
		Record: Record;
		PredictEndpoint: string;
	}


	/** A map of variable name-value pairs that represent an observation. */
	export interface Record {
	}


	/** The subscriber exceeded the maximum number of operations. This exception can occur when listing objects such as <code>DataSource</code>. */
	export interface LimitExceededException {
		message?: string;
		code?: number;
	}


	/** The exception is thrown when a predict request is made to an unmounted <code>MLModel</code>. */
	export interface PredictorNotMountedException {
		message?: string;
	}


	/** <p>Represents the output of an <code>UpdateBatchPrediction</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p> */
	export interface UpdateBatchPredictionOutput {
		BatchPredictionId?: string;
	}

	export interface UpdateBatchPredictionInput {
		BatchPredictionId: string;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		BatchPredictionName: string;
	}


	/** <p>Represents the output of an <code>UpdateDataSource</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p> */
	export interface UpdateDataSourceOutput {
		DataSourceId?: string;
	}

	export interface UpdateDataSourceInput {
		DataSourceId: string;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		DataSourceName: string;
	}


	/** <p>Represents the output of an <code>UpdateEvaluation</code> operation.</p> <p>You can see the updated content by using the <code>GetEvaluation</code> operation.</p> */
	export interface UpdateEvaluationOutput {
		EvaluationId?: string;
	}

	export interface UpdateEvaluationInput {
		EvaluationId: string;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		EvaluationName: string;
	}


	/** <p>Represents the output of an <code>UpdateMLModel</code> operation.</p> <p>You can see the updated content by using the <code>GetMLModel</code> operation.</p> */
	export interface UpdateMLModelOutput {
		MLModelId?: string;
	}

	export interface UpdateMLModelInput {
		MLModelId: string;

		/**
		 * A user-supplied name or description of the Amazon ML resource.
		 * Max length: 1024
		 * Pattern: .*\S.*|^$
		 */
		MLModelName?: string;
		ScoreThreshold?: number;
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
		DescribeBatchPredictions(Limit: string, NextToken: string, requestBody: DescribeBatchPredictionsInput): Observable<DescribeBatchPredictionsOutput> {
			return this.http.post<DescribeBatchPredictionsOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.DescribeBatchPredictions?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of <code>DataSource</code> that match the search criteria in the request.
		 * Post #X-Amz-Target=AmazonML_20141212.DescribeDataSources
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeDataSourcesOutput} Success
		 */
		DescribeDataSources(Limit: string, NextToken: string, requestBody: DescribeDataSourcesInput): Observable<DescribeDataSourcesOutput> {
			return this.http.post<DescribeDataSourcesOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.DescribeDataSources?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of <code>DescribeEvaluations</code> that match the search criteria in the request.
		 * Post #X-Amz-Target=AmazonML_20141212.DescribeEvaluations
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeEvaluationsOutput} Success
		 */
		DescribeEvaluations(Limit: string, NextToken: string, requestBody: DescribeEvaluationsInput): Observable<DescribeEvaluationsOutput> {
			return this.http.post<DescribeEvaluationsOutput>(this.baseUri + '#X-Amz-Target=AmazonML_20141212.DescribeEvaluations?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of <code>MLModel</code> that match the search criteria in the request.
		 * Post #X-Amz-Target=AmazonML_20141212.DescribeMLModels
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeMLModelsOutput} Success
		 */
		DescribeMLModels(Limit: string, NextToken: string, requestBody: DescribeMLModelsInput): Observable<DescribeMLModelsOutput> {
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

