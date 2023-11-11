import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AddApplicationCloudWatchLoggingOptionResponse {
		ApplicationARN?: string | null;
		ApplicationVersionId?: number | null;
		CloudWatchLoggingOptionDescriptions?: Array<CloudWatchLoggingOptionDescription> | null;
	}


	/** Describes the Amazon CloudWatch logging option. */
	export interface CloudWatchLoggingOptionDescription {
		CloudWatchLoggingOptionId?: string | null;
		LogStreamARN: string;
		RoleARN?: string | null;
	}

	export interface AddApplicationCloudWatchLoggingOptionRequest {
		ApplicationName: string;
		CurrentApplicationVersionId: number;

		/**
		 * Provides a description of Amazon CloudWatch logging options, including the log stream Amazon Resource Name (ARN).
		 * Required
		 */
		CloudWatchLoggingOption: CloudWatchLoggingOption;
	}


	/** Provides a description of Amazon CloudWatch logging options, including the log stream Amazon Resource Name (ARN).  */
	export interface CloudWatchLoggingOption {
		LogStreamARN: string;
	}

	export interface ResourceNotFoundException {
	}

	export interface ResourceInUseException {
	}

	export interface InvalidArgumentException {
	}

	export interface ConcurrentModificationException {
	}

	export interface InvalidRequestException {
	}

	export interface InvalidApplicationConfigurationException {
	}

	export interface AddApplicationInputResponse {
		ApplicationARN?: string | null;
		ApplicationVersionId?: number | null;
		InputDescriptions?: Array<InputDescription> | null;
	}


	/** Describes the application input configuration for an SQL-based Amazon Kinesis Data Analytics application.  */
	export interface InputDescription {
		InputId?: string | null;
		NamePrefix?: string | null;
		InAppStreamNames?: Array<string> | null;

		/** For an SQL-based Amazon Kinesis Data Analytics application, provides the configuration information about an input processor. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>. */
		InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription | null;

		/** For an SQL-based Amazon Kinesis Data Analytics application, describes the Kinesis data stream that is configured as the streaming source in the application input configuration. */
		KinesisStreamsInputDescription?: KinesisStreamsInputDescription | null;

		/** Describes the Amazon Kinesis Data Firehose delivery stream that is configured as the streaming source in the application input configuration. */
		KinesisFirehoseInputDescription?: KinesisFirehoseInputDescription | null;

		/** For an SQL-based Amazon Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. */
		InputSchema?: SourceSchema | null;

		/** For an SQL-based Amazon Kinesis Data Analytics application, describes the number of in-application streams to create for a given streaming source. */
		InputParallelism?: InputParallelism | null;

		/** Describes the point at which the application reads from the streaming source. */
		InputStartingPositionConfiguration?: InputStartingPositionConfiguration | null;
	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, provides the configuration information about an input processor. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>. */
	export interface InputProcessingConfigurationDescription {

		/** For an SQL-based Amazon Kinesis Data Analytics application, an object that contains the Amazon Resource Name (ARN) of the AWS Lambda function that is used to preprocess records in the stream. */
		InputLambdaProcessorDescription?: InputLambdaProcessorDescription | null;
	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, an object that contains the Amazon Resource Name (ARN) of the AWS Lambda function that is used to preprocess records in the stream. */
	export interface InputLambdaProcessorDescription {
		ResourceARN: string;
		RoleARN?: string | null;
	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, describes the Kinesis data stream that is configured as the streaming source in the application input configuration.  */
	export interface KinesisStreamsInputDescription {
		ResourceARN: string;
		RoleARN?: string | null;
	}


	/** Describes the Amazon Kinesis Data Firehose delivery stream that is configured as the streaming source in the application input configuration.  */
	export interface KinesisFirehoseInputDescription {
		ResourceARN: string;
		RoleARN?: string | null;
	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.  */
	export interface SourceSchema {

		/**
		 * For an SQL-based Amazon Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream.
		 * Required
		 */
		RecordFormat: RecordFormat;
		RecordEncoding?: string | null;
		RecordColumns: Array<RecordColumn>;
	}


	/**  For an SQL-based Amazon Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream.  */
	export interface RecordFormat {
		RecordFormatType: RecordFormatRecordFormatType;

		/** When you configure an SQL-based Amazon Kinesis Data Analytics application's input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source. */
		MappingParameters?: MappingParameters | null;
	}

	export enum RecordFormatRecordFormatType { JSON = 0, CSV = 1 }


	/** When you configure an SQL-based Amazon Kinesis Data Analytics application's input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source. */
	export interface MappingParameters {

		/** For an SQL-based Amazon Kinesis Data Analytics application, provides additional mapping information when JSON is the record format on the streaming source. */
		JSONMappingParameters?: JSONMappingParameters | null;

		/** <p>For an SQL-based application, provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the <i>'\n'</i> as the row delimiter and a comma (",") as the column delimiter: </p> <p> <code>"name1", "address1"</code> </p> <p> <code>"name2", "address2"</code> </p> */
		CSVMappingParameters?: CSVMappingParameters | null;
	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, provides additional mapping information when JSON is the record format on the streaming source. */
	export interface JSONMappingParameters {
		RecordRowPath: string;
	}


	/** <p>For an SQL-based application, provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the <i>'\n'</i> as the row delimiter and a comma (",") as the column delimiter: </p> <p> <code>"name1", "address1"</code> </p> <p> <code>"name2", "address2"</code> </p> */
	export interface CSVMappingParameters {
		RecordRowDelimiter: string;
		RecordColumnDelimiter: string;
	}


	/** <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.</p> <p>Also used to describe the format of the reference data source.</p> */
	export interface RecordColumn {
		Name: string;
		Mapping?: string | null;
		SqlType: string;
	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, describes the number of in-application streams to create for a given streaming source.  */
	export interface InputParallelism {
		Count?: number | null;
	}


	/** Describes the point at which the application reads from the streaming source. */
	export interface InputStartingPositionConfiguration {
		InputStartingPosition?: InputStartingPositionConfigurationInputStartingPosition | null;
	}

	export enum InputStartingPositionConfigurationInputStartingPosition { NOW = 0, TRIM_HORIZON = 1, LAST_STOPPED_POINT = 2 }

	export interface AddApplicationInputRequest {
		ApplicationName: string;
		CurrentApplicationVersionId: number;

		/**
		 * When you configure the application input for an SQL-based Amazon Kinesis Data Analytics application, you specify the streaming source, the in-application stream name that is created, and the mapping between the two.
		 * Required
		 */
		Input: Input;
	}


	/** When you configure the application input for an SQL-based Amazon Kinesis Data Analytics application, you specify the streaming source, the in-application stream name that is created, and the mapping between the two.  */
	export interface Input {
		NamePrefix: string;

		/** For an SQL-based Amazon Kinesis Data Analytics application, describes a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>. */
		InputProcessingConfiguration?: InputProcessingConfiguration | null;

		/** Identifies an Amazon Kinesis data stream as the streaming source. You provide the stream's Amazon Resource Name (ARN). */
		KinesisStreamsInput?: KinesisStreamsInput | null;

		/** For an SQL-based Amazon Kinesis Data Analytics application, identifies a Kinesis Data Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN). */
		KinesisFirehoseInput?: KinesisFirehoseInput | null;

		/** For an SQL-based Amazon Kinesis Data Analytics application, describes the number of in-application streams to create for a given streaming source. */
		InputParallelism?: InputParallelism | null;

		/**
		 * For an SQL-based Amazon Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
		 * Required
		 */
		InputSchema: SourceSchema;
	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, describes a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>. */
	export interface InputProcessingConfiguration {

		/**
		 * An object that contains the Amazon Resource Name (ARN) of the AWS Lambda function that is used to preprocess records in the stream in an SQL-based Amazon Kinesis Data Analytics application.
		 * Required
		 */
		InputLambdaProcessor: InputLambdaProcessor;
	}


	/** An object that contains the Amazon Resource Name (ARN) of the AWS Lambda function that is used to preprocess records in the stream in an SQL-based Amazon Kinesis Data Analytics application.  */
	export interface InputLambdaProcessor {
		ResourceARN: string;
	}


	/**  Identifies an Amazon Kinesis data stream as the streaming source. You provide the stream's Amazon Resource Name (ARN). */
	export interface KinesisStreamsInput {
		ResourceARN: string;
	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, identifies a Kinesis Data Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN). */
	export interface KinesisFirehoseInput {
		ResourceARN: string;
	}

	export interface CodeValidationException {
	}

	export interface AddApplicationInputProcessingConfigurationResponse {
		ApplicationARN?: string | null;
		ApplicationVersionId?: number | null;
		InputId?: string | null;

		/** For an SQL-based Amazon Kinesis Data Analytics application, provides the configuration information about an input processor. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>. */
		InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription | null;
	}

	export interface AddApplicationInputProcessingConfigurationRequest {
		ApplicationName: string;
		CurrentApplicationVersionId: number;
		InputId: string;

		/**
		 * For an SQL-based Amazon Kinesis Data Analytics application, describes a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>.
		 * Required
		 */
		InputProcessingConfiguration: InputProcessingConfiguration;
	}

	export interface AddApplicationOutputResponse {
		ApplicationARN?: string | null;
		ApplicationVersionId?: number | null;
		OutputDescriptions?: Array<OutputDescription> | null;
	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream.  */
	export interface OutputDescription {
		OutputId?: string | null;
		Name?: string | null;

		/** For an SQL-based Amazon Kinesis Data Analytics application's output, describes the Kinesis data stream that is configured as its destination. */
		KinesisStreamsOutputDescription?: KinesisStreamsOutputDescription | null;

		/** For an SQL-based Amazon Kinesis Data Analytics application's output, describes the Kinesis Data Firehose delivery stream that is configured as its destination. */
		KinesisFirehoseOutputDescription?: KinesisFirehoseOutputDescription | null;

		/** For an SQL-based Amazon Kinesis Data Analytics application output, describes the AWS Lambda function that is configured as its destination. */
		LambdaOutputDescription?: LambdaOutputDescription | null;

		/** Describes the data format when records are written to the destination in an SQL-based Amazon Kinesis Data Analytics application. */
		DestinationSchema?: DestinationSchema | null;
	}


	/** For an SQL-based Amazon Kinesis Data Analytics application's output, describes the Kinesis data stream that is configured as its destination.  */
	export interface KinesisStreamsOutputDescription {
		ResourceARN: string;
		RoleARN?: string | null;
	}


	/** For an SQL-based Amazon Kinesis Data Analytics application's output, describes the Kinesis Data Firehose delivery stream that is configured as its destination. */
	export interface KinesisFirehoseOutputDescription {
		ResourceARN: string;
		RoleARN?: string | null;
	}


	/** For an SQL-based Amazon Kinesis Data Analytics application output, describes the AWS Lambda function that is configured as its destination.  */
	export interface LambdaOutputDescription {
		ResourceARN: string;
		RoleARN?: string | null;
	}


	/** Describes the data format when records are written to the destination in an SQL-based Amazon Kinesis Data Analytics application.  */
	export interface DestinationSchema {
		RecordFormatType: RecordFormatRecordFormatType;
	}

	export interface AddApplicationOutputRequest {
		ApplicationName: string;
		CurrentApplicationVersionId: number;

		/**
		 * <p> Describes an SQL-based Amazon Kinesis Data Analytics application's output configuration, in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream. </p> <p/>
		 * Required
		 */
		Output: Output;
	}


	/** <p> Describes an SQL-based Amazon Kinesis Data Analytics application's output configuration, in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream. </p> <p/> */
	export interface Output {
		Name: string;

		/** When you configure an SQL-based Amazon Kinesis Data Analytics application's output, identifies a Kinesis data stream as the destination. You provide the stream Amazon Resource Name (ARN). */
		KinesisStreamsOutput?: KinesisStreamsOutput | null;

		/** For an SQL-based Amazon Kinesis Data Analytics application, when configuring application output, identifies a Kinesis Data Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) of the delivery stream. */
		KinesisFirehoseOutput?: KinesisFirehoseOutput | null;

		/** When you configure an SQL-based Amazon Kinesis Data Analytics application's output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) of the Lambda function. */
		LambdaOutput?: LambdaOutput | null;

		/**
		 * Describes the data format when records are written to the destination in an SQL-based Amazon Kinesis Data Analytics application.
		 * Required
		 */
		DestinationSchema: DestinationSchema;
	}


	/** When you configure an SQL-based Amazon Kinesis Data Analytics application's output, identifies a Kinesis data stream as the destination. You provide the stream Amazon Resource Name (ARN).  */
	export interface KinesisStreamsOutput {
		ResourceARN: string;
	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, when configuring application output, identifies a Kinesis Data Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) of the delivery stream.  */
	export interface KinesisFirehoseOutput {
		ResourceARN: string;
	}


	/** When you configure an SQL-based Amazon Kinesis Data Analytics application's output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) of the Lambda function.  */
	export interface LambdaOutput {
		ResourceARN: string;
	}

	export interface AddApplicationReferenceDataSourceResponse {
		ApplicationARN?: string | null;
		ApplicationVersionId?: number | null;
		ReferenceDataSourceDescriptions?: Array<ReferenceDataSourceDescription> | null;
	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, describes the reference data source configured for an application. */
	export interface ReferenceDataSourceDescription {
		ReferenceId: string;
		TableName: string;

		/**
		 * For an SQL-based Amazon Kinesis Data Analytics application, provides the bucket name and object key name that stores the reference data.
		 * Required
		 */
		S3ReferenceDataSourceDescription: S3ReferenceDataSourceDescription;

		/** For an SQL-based Amazon Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. */
		ReferenceSchema?: SourceSchema | null;
	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, provides the bucket name and object key name that stores the reference data. */
	export interface S3ReferenceDataSourceDescription {
		BucketARN: string;
		FileKey: string;
		ReferenceRoleARN?: string | null;
	}

	export interface AddApplicationReferenceDataSourceRequest {
		ApplicationName: string;
		CurrentApplicationVersionId: number;

		/**
		 * For an SQL-based Amazon Kinesis Data Analytics application, describes the reference data source by providing the source information (Amazon S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.
		 * Required
		 */
		ReferenceDataSource: ReferenceDataSource;
	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, describes the reference data source by providing the source information (Amazon S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table. */
	export interface ReferenceDataSource {
		TableName: string;

		/** <p>For an SQL-based Amazon Kinesis Data Analytics application, identifies the Amazon S3 bucket and object that contains the reference data.</p> <p>A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application. </p> */
		S3ReferenceDataSource?: S3ReferenceDataSource | null;

		/**
		 * For an SQL-based Amazon Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
		 * Required
		 */
		ReferenceSchema: SourceSchema;
	}


	/** <p>For an SQL-based Amazon Kinesis Data Analytics application, identifies the Amazon S3 bucket and object that contains the reference data.</p> <p>A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application. </p> */
	export interface S3ReferenceDataSource {
		BucketARN?: string | null;
		FileKey?: string | null;
	}

	export interface AddApplicationVpcConfigurationResponse {
		ApplicationARN?: string | null;
		ApplicationVersionId?: number | null;

		/** Describes the parameters of a VPC used by the application. */
		VpcConfigurationDescription?: VpcConfigurationDescription | null;
	}


	/** Describes the parameters of a VPC used by the application. */
	export interface VpcConfigurationDescription {
		VpcConfigurationId: string;
		VpcId: string;
		SubnetIds: Array<string>;
		SecurityGroupIds: Array<string>;
	}

	export interface AddApplicationVpcConfigurationRequest {
		ApplicationName: string;
		CurrentApplicationVersionId: number;

		/**
		 * Describes the parameters of a VPC used by the application.
		 * Required
		 */
		VpcConfiguration: VpcConfiguration;
	}


	/** Describes the parameters of a VPC used by the application. */
	export interface VpcConfiguration {
		SubnetIds: Array<string>;
		SecurityGroupIds: Array<string>;
	}

	export interface CreateApplicationResponse {

		/**
		 * Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations.
		 * Required
		 */
		ApplicationDetail: ApplicationDetail;
	}


	/** Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations. */
	export interface ApplicationDetail {
		ApplicationARN: string;
		ApplicationDescription?: string | null;
		ApplicationName: string;
		RuntimeEnvironment: ApplicationDetailRuntimeEnvironment;
		ServiceExecutionRole?: string | null;
		ApplicationStatus: ApplicationDetailApplicationStatus;
		ApplicationVersionId: number;
		CreateTimestamp?: Date | null;
		LastUpdateTimestamp?: Date | null;

		/** Describes details about the application code and starting parameters for an Amazon Kinesis Data Analytics application. */
		ApplicationConfigurationDescription?: ApplicationConfigurationDescription | null;
		CloudWatchLoggingOptionDescriptions?: Array<CloudWatchLoggingOptionDescription> | null;
	}

	export enum ApplicationDetailRuntimeEnvironment { SQL_1_0 = 0, FLINK_1_6 = 1, FLINK_1_8 = 2 }

	export enum ApplicationDetailApplicationStatus { DELETING = 0, STARTING = 1, STOPPING = 2, READY = 3, RUNNING = 4, UPDATING = 5 }


	/** Describes details about the application code and starting parameters for an Amazon Kinesis Data Analytics application. */
	export interface ApplicationConfigurationDescription {

		/** Describes the inputs, outputs, and reference data sources for an SQL-based Kinesis Data Analytics application. */
		SqlApplicationConfigurationDescription?: SqlApplicationConfigurationDescription | null;

		/** Describes code configuration for a Java-based Kinesis Data Analytics application. */
		ApplicationCodeConfigurationDescription?: ApplicationCodeConfigurationDescription | null;

		/** Describes the starting properties for a Kinesis Data Analytics application. */
		RunConfigurationDescription?: RunConfigurationDescription | null;

		/** Describes configuration parameters for a Java-based Amazon Kinesis Data Analytics application. */
		FlinkApplicationConfigurationDescription?: FlinkApplicationConfigurationDescription | null;

		/** Describes the execution properties for a Java-based Amazon Kinesis Data Analytics application. */
		EnvironmentPropertyDescriptions?: EnvironmentPropertyDescriptions | null;

		/** Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application. */
		ApplicationSnapshotConfigurationDescription?: ApplicationSnapshotConfigurationDescription | null;
		VpcConfigurationDescriptions?: Array<VpcConfigurationDescription> | null;
	}


	/** Describes the inputs, outputs, and reference data sources for an SQL-based Kinesis Data Analytics application. */
	export interface SqlApplicationConfigurationDescription {
		InputDescriptions?: Array<InputDescription> | null;
		OutputDescriptions?: Array<OutputDescription> | null;
		ReferenceDataSourceDescriptions?: Array<ReferenceDataSourceDescription> | null;
	}


	/** Describes code configuration for a Java-based Kinesis Data Analytics application. */
	export interface ApplicationCodeConfigurationDescription {
		CodeContentType: ApplicationCodeConfigurationDescriptionCodeContentType;

		/** Describes details about the application code for a Java-based Kinesis Data Analytics application. */
		CodeContentDescription?: CodeContentDescription | null;
	}

	export enum ApplicationCodeConfigurationDescriptionCodeContentType { PLAINTEXT = 0, ZIPFILE = 1 }


	/** Describes details about the application code for a Java-based Kinesis Data Analytics application. */
	export interface CodeContentDescription {
		TextContent?: string | null;
		CodeMD5?: string | null;
		CodeSize?: number | null;

		/** Describes the location of a Java-based Amazon Kinesis Data Analytics application's code stored in an S3 bucket. */
		S3ApplicationCodeLocationDescription?: S3ApplicationCodeLocationDescription | null;
	}


	/** Describes the location of a Java-based Amazon Kinesis Data Analytics application's code stored in an S3 bucket. */
	export interface S3ApplicationCodeLocationDescription {
		BucketARN: string;
		FileKey: string;
		ObjectVersion?: string | null;
	}


	/** Describes the starting properties for a Kinesis Data Analytics application. */
	export interface RunConfigurationDescription {

		/** Specifies the method and snapshot to use when restarting an application using previously saved application state. */
		ApplicationRestoreConfigurationDescription?: ApplicationRestoreConfiguration | null;
	}


	/** Specifies the method and snapshot to use when restarting an application using previously saved application state. */
	export interface ApplicationRestoreConfiguration {
		ApplicationRestoreType: ApplicationRestoreConfigurationApplicationRestoreType;
		SnapshotName?: string | null;
	}

	export enum ApplicationRestoreConfigurationApplicationRestoreType { SKIP_RESTORE_FROM_SNAPSHOT = 0, RESTORE_FROM_LATEST_SNAPSHOT = 1, RESTORE_FROM_CUSTOM_SNAPSHOT = 2 }


	/** Describes configuration parameters for a Java-based Amazon Kinesis Data Analytics application. */
	export interface FlinkApplicationConfigurationDescription {

		/** Describes checkpointing parameters for a Java-based Amazon Kinesis Data Analytics application. */
		CheckpointConfigurationDescription?: CheckpointConfigurationDescription | null;

		/** Describes configuration parameters for CloudWatch logging for a Java-based Kinesis Data Analytics application. */
		MonitoringConfigurationDescription?: MonitoringConfigurationDescription | null;

		/** Describes parameters for how a Java-based Kinesis Data Analytics application executes multiple tasks simultaneously. */
		ParallelismConfigurationDescription?: ParallelismConfigurationDescription | null;
		JobPlanDescription?: string | null;
	}


	/** Describes checkpointing parameters for a Java-based Amazon Kinesis Data Analytics application. */
	export interface CheckpointConfigurationDescription {
		ConfigurationType?: CheckpointConfigurationDescriptionConfigurationType | null;
		CheckpointingEnabled?: boolean | null;
		CheckpointInterval?: number | null;
		MinPauseBetweenCheckpoints?: number | null;
	}

	export enum CheckpointConfigurationDescriptionConfigurationType { DEFAULT = 0, CUSTOM = 1 }


	/** Describes configuration parameters for CloudWatch logging for a Java-based Kinesis Data Analytics application. */
	export interface MonitoringConfigurationDescription {
		ConfigurationType?: CheckpointConfigurationDescriptionConfigurationType | null;
		MetricsLevel?: MonitoringConfigurationDescriptionMetricsLevel | null;
		LogLevel?: MonitoringConfigurationDescriptionLogLevel | null;
	}

	export enum MonitoringConfigurationDescriptionMetricsLevel { APPLICATION = 0, TASK = 1, OPERATOR = 2, PARALLELISM = 3 }

	export enum MonitoringConfigurationDescriptionLogLevel { INFO = 0, WARN = 1, ERROR = 2, DEBUG = 3 }


	/** Describes parameters for how a Java-based Kinesis Data Analytics application executes multiple tasks simultaneously. */
	export interface ParallelismConfigurationDescription {
		ConfigurationType?: CheckpointConfigurationDescriptionConfigurationType | null;
		Parallelism?: number | null;
		ParallelismPerKPU?: number | null;
		CurrentParallelism?: number | null;
		AutoScalingEnabled?: boolean | null;
	}


	/** Describes the execution properties for a Java-based Amazon Kinesis Data Analytics application. */
	export interface EnvironmentPropertyDescriptions {
		PropertyGroupDescriptions?: Array<PropertyGroup> | null;
	}


	/** Property key-value pairs passed into a Java-based Kinesis Data Analytics application. */
	export interface PropertyGroup {
		PropertyGroupId: string;
		PropertyMap: PropertyMap;
	}

	export interface PropertyMap {
	}


	/** Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application. */
	export interface ApplicationSnapshotConfigurationDescription {
		SnapshotsEnabled: boolean;
	}

	export interface CreateApplicationRequest {
		ApplicationName: string;
		ApplicationDescription?: string | null;
		RuntimeEnvironment: CreateApplicationRequestRuntimeEnvironment;
		ServiceExecutionRole: string;

		/** Specifies the creation parameters for an Amazon Kinesis Data Analytics application. */
		ApplicationConfiguration?: ApplicationConfiguration | null;
		CloudWatchLoggingOptions?: Array<CloudWatchLoggingOption> | null;
		Tags?: Array<Tag> | null;
	}

	export enum CreateApplicationRequestRuntimeEnvironment { SQL_1_0 = 0, FLINK_1_6 = 1, FLINK_1_8 = 2 }


	/** Specifies the creation parameters for an Amazon Kinesis Data Analytics application. */
	export interface ApplicationConfiguration {

		/** Describes the inputs, outputs, and reference data sources for an SQL-based Kinesis Data Analytics application. */
		SqlApplicationConfiguration?: SqlApplicationConfiguration | null;

		/** Describes configuration parameters for a Java-based Amazon Kinesis Data Analytics application. */
		FlinkApplicationConfiguration?: FlinkApplicationConfiguration | null;

		/** Describes execution properties for a Java-based Kinesis Data Analytics application. */
		EnvironmentProperties?: EnvironmentProperties | null;

		/**
		 * Describes code configuration for a Java-based Kinesis Data Analytics application.
		 * Required
		 */
		ApplicationCodeConfiguration: ApplicationCodeConfiguration;

		/** Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application. */
		ApplicationSnapshotConfiguration?: ApplicationSnapshotConfiguration | null;
		VpcConfigurations?: Array<VpcConfiguration> | null;
	}


	/** Describes the inputs, outputs, and reference data sources for an SQL-based Kinesis Data Analytics application. */
	export interface SqlApplicationConfiguration {
		Inputs?: Array<Input> | null;
		Outputs?: Array<Output> | null;
		ReferenceDataSources?: Array<ReferenceDataSource> | null;
	}


	/** Describes configuration parameters for a Java-based Amazon Kinesis Data Analytics application. */
	export interface FlinkApplicationConfiguration {

		/** Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/concepts/programming-model.html#checkpoints-for-fault-tolerance"> Checkpoints for Fault Tolerance</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink Documentation</a>. */
		CheckpointConfiguration?: CheckpointConfiguration | null;

		/** Describes configuration parameters for Amazon CloudWatch logging for a Java-based Kinesis Data Analytics application. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>. */
		MonitoringConfiguration?: MonitoringConfiguration | null;

		/** Describes parameters for how a Java-based Amazon Kinesis Data Analytics application executes multiple tasks simultaneously. For more information about parallelism, see <a href="https://ci.apache.org/projects/flink/flink-docs-stable/dev/parallel.html">Parallel Execution</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink Documentation</a>. */
		ParallelismConfiguration?: ParallelismConfiguration | null;
	}


	/** Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/concepts/programming-model.html#checkpoints-for-fault-tolerance"> Checkpoints for Fault Tolerance</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink Documentation</a>. */
	export interface CheckpointConfiguration {
		ConfigurationType: CheckpointConfigurationDescriptionConfigurationType;
		CheckpointingEnabled?: boolean | null;
		CheckpointInterval?: number | null;
		MinPauseBetweenCheckpoints?: number | null;
	}


	/** Describes configuration parameters for Amazon CloudWatch logging for a Java-based Kinesis Data Analytics application. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>. */
	export interface MonitoringConfiguration {
		ConfigurationType: CheckpointConfigurationDescriptionConfigurationType;
		MetricsLevel?: MonitoringConfigurationDescriptionMetricsLevel | null;
		LogLevel?: MonitoringConfigurationDescriptionLogLevel | null;
	}


	/** Describes parameters for how a Java-based Amazon Kinesis Data Analytics application executes multiple tasks simultaneously. For more information about parallelism, see <a href="https://ci.apache.org/projects/flink/flink-docs-stable/dev/parallel.html">Parallel Execution</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink Documentation</a>. */
	export interface ParallelismConfiguration {
		ConfigurationType: CheckpointConfigurationDescriptionConfigurationType;
		Parallelism?: number | null;
		ParallelismPerKPU?: number | null;
		AutoScalingEnabled?: boolean | null;
	}


	/** Describes execution properties for a Java-based Kinesis Data Analytics application. */
	export interface EnvironmentProperties {
		PropertyGroups: Array<PropertyGroup>;
	}


	/** Describes code configuration for a Java-based Kinesis Data Analytics application. */
	export interface ApplicationCodeConfiguration {

		/** Specifies either the application code, or the location of the application code, for a Java-based Amazon Kinesis Data Analytics application. */
		CodeContent?: CodeContent | null;
		CodeContentType: ApplicationCodeConfigurationDescriptionCodeContentType;
	}


	/** Specifies either the application code, or the location of the application code, for a Java-based Amazon Kinesis Data Analytics application.  */
	export interface CodeContent {
		TextContent?: string | null;
		ZipFileContent?: string | null;

		/** For a Java-based Amazon Kinesis Data Analytics application, provides a description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data. */
		S3ContentLocation?: S3ContentLocation | null;
	}


	/** For a Java-based Amazon Kinesis Data Analytics application, provides a description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data.  */
	export interface S3ContentLocation {
		BucketARN: string;
		FileKey: string;
		ObjectVersion?: string | null;
	}


	/** Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application. */
	export interface ApplicationSnapshotConfiguration {
		SnapshotsEnabled: boolean;
	}


	/** A key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>. */
	export interface Tag {
		Key: string;
		Value?: string | null;
	}

	export interface LimitExceededException {
	}

	export interface TooManyTagsException {
	}

	export interface CreateApplicationSnapshotResponse {
	}

	export interface CreateApplicationSnapshotRequest {
		ApplicationName: string;
		SnapshotName: string;
	}

	export interface UnsupportedOperationException {
	}

	export interface DeleteApplicationResponse {
	}

	export interface DeleteApplicationRequest {
		ApplicationName: string;
		CreateTimestamp: Date;
	}

	export interface DeleteApplicationCloudWatchLoggingOptionResponse {
		ApplicationARN?: string | null;
		ApplicationVersionId?: number | null;
		CloudWatchLoggingOptionDescriptions?: Array<CloudWatchLoggingOptionDescription> | null;
	}

	export interface DeleteApplicationCloudWatchLoggingOptionRequest {
		ApplicationName: string;
		CurrentApplicationVersionId: number;
		CloudWatchLoggingOptionId: string;
	}

	export interface DeleteApplicationInputProcessingConfigurationResponse {
		ApplicationARN?: string | null;
		ApplicationVersionId?: number | null;
	}

	export interface DeleteApplicationInputProcessingConfigurationRequest {
		ApplicationName: string;
		CurrentApplicationVersionId: number;
		InputId: string;
	}

	export interface DeleteApplicationOutputResponse {
		ApplicationARN?: string | null;
		ApplicationVersionId?: number | null;
	}

	export interface DeleteApplicationOutputRequest {
		ApplicationName: string;
		CurrentApplicationVersionId: number;
		OutputId: string;
	}

	export interface DeleteApplicationReferenceDataSourceResponse {
		ApplicationARN?: string | null;
		ApplicationVersionId?: number | null;
	}

	export interface DeleteApplicationReferenceDataSourceRequest {
		ApplicationName: string;
		CurrentApplicationVersionId: number;
		ReferenceId: string;
	}

	export interface DeleteApplicationSnapshotResponse {
	}

	export interface DeleteApplicationSnapshotRequest {
		ApplicationName: string;
		SnapshotName: string;
		SnapshotCreationTimestamp: Date;
	}

	export interface DeleteApplicationVpcConfigurationResponse {
		ApplicationARN?: string | null;
		ApplicationVersionId?: number | null;
	}

	export interface DeleteApplicationVpcConfigurationRequest {
		ApplicationName: string;
		CurrentApplicationVersionId: number;
		VpcConfigurationId: string;
	}

	export interface DescribeApplicationResponse {

		/**
		 * Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations.
		 * Required
		 */
		ApplicationDetail: ApplicationDetail;
	}

	export interface DescribeApplicationRequest {
		ApplicationName: string;
		IncludeAdditionalDetails?: boolean | null;
	}

	export interface DescribeApplicationSnapshotResponse {

		/**
		 * Provides details about a snapshot of application state.
		 * Required
		 */
		SnapshotDetails: SnapshotDetails;
	}


	/** Provides details about a snapshot of application state. */
	export interface SnapshotDetails {
		SnapshotName: string;
		SnapshotStatus: SnapshotDetailsSnapshotStatus;
		ApplicationVersionId: number;
		SnapshotCreationTimestamp?: Date | null;
	}

	export enum SnapshotDetailsSnapshotStatus { CREATING = 0, READY = 1, DELETING = 2, FAILED = 3 }

	export interface DescribeApplicationSnapshotRequest {
		ApplicationName: string;
		SnapshotName: string;
	}

	export interface DiscoverInputSchemaResponse {

		/** For an SQL-based Amazon Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. */
		InputSchema?: SourceSchema | null;
		ParsedInputRecords?: Array<Array<string>> | null;
		ProcessedInputRecords?: Array<string> | null;
		RawInputRecords?: Array<string> | null;
	}

	export interface DiscoverInputSchemaRequest {
		ResourceARN?: string | null;
		ServiceExecutionRole: string;

		/** Describes the point at which the application reads from the streaming source. */
		InputStartingPositionConfiguration?: InputStartingPositionConfiguration | null;

		/** For an SQL-based Amazon Kinesis Data Analytics application, provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket and the name of the Amazon S3 object that contains the data. */
		S3Configuration?: S3Configuration | null;

		/** For an SQL-based Amazon Kinesis Data Analytics application, describes a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>. */
		InputProcessingConfiguration?: InputProcessingConfiguration | null;
	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket and the name of the Amazon S3 object that contains the data. */
	export interface S3Configuration {
		BucketARN: string;
		FileKey: string;
	}

	export interface UnableToDetectSchemaException {
	}

	export interface ResourceProvisionedThroughputExceededException {
	}

	export interface ServiceUnavailableException {
	}

	export interface ListApplicationSnapshotsResponse {
		SnapshotSummaries?: Array<SnapshotDetails> | null;
		NextToken?: string | null;
	}

	export interface ListApplicationSnapshotsRequest {
		ApplicationName: string;
		Limit?: number | null;
		NextToken?: string | null;
	}

	export interface ListApplicationsResponse {
		ApplicationSummaries: Array<ApplicationSummary>;
		NextToken?: string | null;
	}


	/** Provides application summary information, including the application Amazon Resource Name (ARN), name, and status. */
	export interface ApplicationSummary {
		ApplicationName: string;
		ApplicationARN: string;
		ApplicationStatus: ApplicationDetailApplicationStatus;
		ApplicationVersionId: number;
		RuntimeEnvironment: ApplicationSummaryRuntimeEnvironment;
	}

	export enum ApplicationSummaryRuntimeEnvironment { SQL_1_0 = 0, FLINK_1_6 = 1, FLINK_1_8 = 2 }

	export interface ListApplicationsRequest {
		Limit?: number | null;
		NextToken?: string | null;
	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag> | null;
	}

	export interface ListTagsForResourceRequest {
		ResourceARN: string;
	}

	export interface StartApplicationResponse {
	}

	export interface StartApplicationRequest {
		ApplicationName: string;

		/**
		 * Describes the starting parameters for an Amazon Kinesis Data Analytics application.
		 * Required
		 */
		RunConfiguration: RunConfiguration;
	}


	/** Describes the starting parameters for an Amazon Kinesis Data Analytics application. */
	export interface RunConfiguration {

		/** Describes the starting parameters for an Apache Flink-based Kinesis Data Analytics application. */
		FlinkRunConfiguration?: FlinkRunConfiguration | null;
		SqlRunConfigurations?: Array<SqlRunConfiguration> | null;

		/** Specifies the method and snapshot to use when restarting an application using previously saved application state. */
		ApplicationRestoreConfiguration?: ApplicationRestoreConfiguration | null;
	}


	/** Describes the starting parameters for an Apache Flink-based Kinesis Data Analytics application. */
	export interface FlinkRunConfiguration {
		AllowNonRestoredState?: boolean | null;
	}


	/** Describes the starting parameters for an SQL-based Kinesis Data Analytics application. */
	export interface SqlRunConfiguration {
		InputId: string;

		/**
		 * Describes the point at which the application reads from the streaming source.
		 * Required
		 */
		InputStartingPositionConfiguration: InputStartingPositionConfiguration;
	}

	export interface StopApplicationResponse {
	}

	export interface StopApplicationRequest {
		ApplicationName: string;
	}

	export interface TagResourceResponse {
	}

	export interface TagResourceRequest {
		ResourceARN: string;
		Tags: Array<Tag>;
	}

	export interface UntagResourceResponse {
	}

	export interface UntagResourceRequest {
		ResourceARN: string;
		TagKeys: Array<string>;
	}

	export interface UpdateApplicationResponse {

		/**
		 * Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations.
		 * Required
		 */
		ApplicationDetail: ApplicationDetail;
	}

	export interface UpdateApplicationRequest {
		ApplicationName: string;
		CurrentApplicationVersionId: number;

		/** Describes updates to an application's configuration. */
		ApplicationConfigurationUpdate?: ApplicationConfigurationUpdate | null;
		ServiceExecutionRoleUpdate?: string | null;

		/** Describes the updates to the starting parameters for a Kinesis Data Analytics application. */
		RunConfigurationUpdate?: RunConfigurationUpdate | null;
		CloudWatchLoggingOptionUpdates?: Array<CloudWatchLoggingOptionUpdate> | null;
	}


	/** Describes updates to an application's configuration. */
	export interface ApplicationConfigurationUpdate {

		/** Describes updates to the input streams, destination streams, and reference data sources for an SQL-based Kinesis Data Analytics application. */
		SqlApplicationConfigurationUpdate?: SqlApplicationConfigurationUpdate | null;

		/** Describes updates to a Java-based Amazon Kinesis Data Analytics application. */
		ApplicationCodeConfigurationUpdate?: ApplicationCodeConfigurationUpdate | null;

		/** Describes updates to the configuration parameters for a Java-based Amazon Kinesis Data Analytics application. */
		FlinkApplicationConfigurationUpdate?: FlinkApplicationConfigurationUpdate | null;

		/** Describes updates to the execution property groups for a Java-based Amazon Kinesis Data Analytics application. */
		EnvironmentPropertyUpdates?: EnvironmentPropertyUpdates | null;

		/** Describes updates to whether snapshots are enabled for a Java-based Kinesis Data Analytics application. */
		ApplicationSnapshotConfigurationUpdate?: ApplicationSnapshotConfigurationUpdate | null;
		VpcConfigurationUpdates?: Array<VpcConfigurationUpdate> | null;
	}


	/** Describes updates to the input streams, destination streams, and reference data sources for an SQL-based Kinesis Data Analytics application. */
	export interface SqlApplicationConfigurationUpdate {
		InputUpdates?: Array<InputUpdate> | null;
		OutputUpdates?: Array<OutputUpdate> | null;
		ReferenceDataSourceUpdates?: Array<ReferenceDataSourceUpdate> | null;
	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, describes updates to a specific input configuration (identified by the <code>InputId</code> of an application).  */
	export interface InputUpdate {
		InputId: string;
		NamePrefixUpdate?: string | null;

		/** For an SQL-based Amazon Kinesis Data Analytics application, describes updates to an <a>InputProcessingConfiguration</a>. */
		InputProcessingConfigurationUpdate?: InputProcessingConfigurationUpdate | null;

		/** When you update the input configuration for an SQL-based Amazon Kinesis Data Analytics application, provides information about an Amazon Kinesis stream as the streaming source. */
		KinesisStreamsInputUpdate?: KinesisStreamsInputUpdate | null;

		/** For an SQL-based Amazon Kinesis Data Analytics application, when updating application input configuration, provides information about a Kinesis Data Firehose delivery stream as the streaming source. */
		KinesisFirehoseInputUpdate?: KinesisFirehoseInputUpdate | null;

		/** Describes updates for an SQL-based Amazon Kinesis Data Analytics application's input schema. */
		InputSchemaUpdate?: InputSchemaUpdate | null;

		/** For an SQL-based Amazon Kinesis Data Analytics application, provides updates to the parallelism count. */
		InputParallelismUpdate?: InputParallelismUpdate | null;
	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, describes updates to an <a>InputProcessingConfiguration</a>. */
	export interface InputProcessingConfigurationUpdate {

		/**
		 * For an SQL-based Amazon Kinesis Data Analytics application, represents an update to the <a>InputLambdaProcessor</a> that is used to preprocess the records in the stream.
		 * Required
		 */
		InputLambdaProcessorUpdate: InputLambdaProcessorUpdate;
	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, represents an update to the <a>InputLambdaProcessor</a> that is used to preprocess the records in the stream. */
	export interface InputLambdaProcessorUpdate {
		ResourceARNUpdate: string;
	}


	/** When you update the input configuration for an SQL-based Amazon Kinesis Data Analytics application, provides information about an Amazon Kinesis stream as the streaming source. */
	export interface KinesisStreamsInputUpdate {
		ResourceARNUpdate: string;
	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, when updating application input configuration, provides information about a Kinesis Data Firehose delivery stream as the streaming source. */
	export interface KinesisFirehoseInputUpdate {
		ResourceARNUpdate: string;
	}


	/** Describes updates for an SQL-based Amazon Kinesis Data Analytics application's input schema. */
	export interface InputSchemaUpdate {

		/** For an SQL-based Amazon Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream. */
		RecordFormatUpdate?: RecordFormat | null;
		RecordEncodingUpdate?: string | null;
		RecordColumnUpdates?: Array<RecordColumn> | null;
	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, provides updates to the parallelism count. */
	export interface InputParallelismUpdate {
		CountUpdate: number;
	}


	/**  For an SQL-based Amazon Kinesis Data Analytics application, describes updates to the output configuration identified by the <code>OutputId</code>.  */
	export interface OutputUpdate {
		OutputId: string;
		NameUpdate?: string | null;

		/** When you update an SQL-based Amazon Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis data stream that is configured as the destination. */
		KinesisStreamsOutputUpdate?: KinesisStreamsOutputUpdate | null;

		/** For an SQL-based Amazon Kinesis Data Analytics application, when updating an output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis Data Firehose delivery stream that is configured as the destination. */
		KinesisFirehoseOutputUpdate?: KinesisFirehoseOutputUpdate | null;

		/** When you update an SQL-based Amazon Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about an AWS Lambda function that is configured as the destination. */
		LambdaOutputUpdate?: LambdaOutputUpdate | null;

		/** Describes the data format when records are written to the destination in an SQL-based Amazon Kinesis Data Analytics application. */
		DestinationSchemaUpdate?: DestinationSchema | null;
	}


	/** When you update an SQL-based Amazon Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis data stream that is configured as the destination. */
	export interface KinesisStreamsOutputUpdate {
		ResourceARNUpdate: string;
	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, when updating an output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis Data Firehose delivery stream that is configured as the destination. */
	export interface KinesisFirehoseOutputUpdate {
		ResourceARNUpdate: string;
	}


	/** When you update an SQL-based Amazon Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about an AWS Lambda function that is configured as the destination. */
	export interface LambdaOutputUpdate {
		ResourceARNUpdate: string;
	}


	/** When you update a reference data source configuration for a SQL-based Amazon Kinesis Data Analytics application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created. */
	export interface ReferenceDataSourceUpdate {
		ReferenceId: string;
		TableNameUpdate?: string | null;

		/** For an SQL-based Amazon Kinesis Data Analytics application, describes the Amazon S3 bucket name and object key name for an in-application reference table. */
		S3ReferenceDataSourceUpdate?: S3ReferenceDataSourceUpdate | null;

		/** For an SQL-based Amazon Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. */
		ReferenceSchemaUpdate?: SourceSchema | null;
	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, describes the Amazon S3 bucket name and object key name for an in-application reference table.  */
	export interface S3ReferenceDataSourceUpdate {
		BucketARNUpdate?: string | null;
		FileKeyUpdate?: string | null;
	}


	/** Describes updates to a Java-based Amazon Kinesis Data Analytics application. */
	export interface ApplicationCodeConfigurationUpdate {
		CodeContentTypeUpdate?: ApplicationCodeConfigurationDescriptionCodeContentType | null;

		/** Describes an update to the code of a Java-based Kinesis Data Analytics application. */
		CodeContentUpdate?: CodeContentUpdate | null;
	}


	/** Describes an update to the code of a Java-based Kinesis Data Analytics application. */
	export interface CodeContentUpdate {
		TextContentUpdate?: string | null;
		ZipFileContentUpdate?: string | null;

		/** Describes an update for the Amazon S3 code content location for a Java-based Amazon Kinesis Data Analytics application. */
		S3ContentLocationUpdate?: S3ContentLocationUpdate | null;
	}


	/** Describes an update for the Amazon S3 code content location for a Java-based Amazon Kinesis Data Analytics application. */
	export interface S3ContentLocationUpdate {
		BucketARNUpdate?: string | null;
		FileKeyUpdate?: string | null;
		ObjectVersionUpdate?: string | null;
	}


	/** Describes updates to the configuration parameters for a Java-based Amazon Kinesis Data Analytics application. */
	export interface FlinkApplicationConfigurationUpdate {

		/** Describes updates to the checkpointing parameters for a Java-based Amazon Kinesis Data Analytics application. */
		CheckpointConfigurationUpdate?: CheckpointConfigurationUpdate | null;

		/** Describes updates to configuration parameters for Amazon CloudWatch logging for a Java-based Kinesis Data Analytics application. */
		MonitoringConfigurationUpdate?: MonitoringConfigurationUpdate | null;

		/** Describes updates to parameters for how a Java-based Kinesis Data Analytics application executes multiple tasks simultaneously. */
		ParallelismConfigurationUpdate?: ParallelismConfigurationUpdate | null;
	}


	/** Describes updates to the checkpointing parameters for a Java-based Amazon Kinesis Data Analytics application. */
	export interface CheckpointConfigurationUpdate {
		ConfigurationTypeUpdate?: CheckpointConfigurationDescriptionConfigurationType | null;
		CheckpointingEnabledUpdate?: boolean | null;
		CheckpointIntervalUpdate?: number | null;
		MinPauseBetweenCheckpointsUpdate?: number | null;
	}


	/** Describes updates to configuration parameters for Amazon CloudWatch logging for a Java-based Kinesis Data Analytics application. */
	export interface MonitoringConfigurationUpdate {
		ConfigurationTypeUpdate?: CheckpointConfigurationDescriptionConfigurationType | null;
		MetricsLevelUpdate?: MonitoringConfigurationDescriptionMetricsLevel | null;
		LogLevelUpdate?: MonitoringConfigurationDescriptionLogLevel | null;
	}


	/** Describes updates to parameters for how a Java-based Kinesis Data Analytics application executes multiple tasks simultaneously. */
	export interface ParallelismConfigurationUpdate {
		ConfigurationTypeUpdate?: CheckpointConfigurationDescriptionConfigurationType | null;
		ParallelismUpdate?: number | null;
		ParallelismPerKPUUpdate?: number | null;
		AutoScalingEnabledUpdate?: boolean | null;
	}


	/** Describes updates to the execution property groups for a Java-based Amazon Kinesis Data Analytics application. */
	export interface EnvironmentPropertyUpdates {
		PropertyGroups: Array<PropertyGroup>;
	}


	/** Describes updates to whether snapshots are enabled for a Java-based Kinesis Data Analytics application. */
	export interface ApplicationSnapshotConfigurationUpdate {
		SnapshotsEnabledUpdate: boolean;
	}


	/** Describes updates to the VPC configuration used by the application. */
	export interface VpcConfigurationUpdate {
		VpcConfigurationId: string;
		SubnetIdUpdates?: Array<string> | null;
		SecurityGroupIdUpdates?: Array<string> | null;
	}


	/** Describes the updates to the starting parameters for a Kinesis Data Analytics application. */
	export interface RunConfigurationUpdate {

		/** Describes the starting parameters for an Apache Flink-based Kinesis Data Analytics application. */
		FlinkRunConfiguration?: FlinkRunConfiguration | null;

		/** Specifies the method and snapshot to use when restarting an application using previously saved application state. */
		ApplicationRestoreConfiguration?: ApplicationRestoreConfiguration | null;
	}


	/** Describes the Amazon CloudWatch logging option updates. */
	export interface CloudWatchLoggingOptionUpdate {
		CloudWatchLoggingOptionId: string;
		LogStreamARNUpdate?: string | null;
	}

	export enum CodeContentType { PLAINTEXT = 0, ZIPFILE = 1 }

	export enum RuntimeEnvironment { SQL_1_0 = 0, FLINK_1_6 = 1, FLINK_1_8 = 2 }

	export enum ApplicationStatus { DELETING = 0, STARTING = 1, STOPPING = 2, READY = 3, RUNNING = 4, UPDATING = 5 }

	export enum ApplicationRestoreType { SKIP_RESTORE_FROM_SNAPSHOT = 0, RESTORE_FROM_LATEST_SNAPSHOT = 1, RESTORE_FROM_CUSTOM_SNAPSHOT = 2 }

	export enum ConfigurationType { DEFAULT = 0, CUSTOM = 1 }

	export enum RecordFormatType { JSON = 0, CSV = 1 }

	export enum InputStartingPosition { NOW = 0, TRIM_HORIZON = 1, LAST_STOPPED_POINT = 2 }

	export enum LogLevel { INFO = 0, WARN = 1, ERROR = 2, DEBUG = 3 }

	export enum MetricsLevel { APPLICATION = 0, TASK = 1, OPERATOR = 2, PARALLELISM = 3 }

	export enum SnapshotStatus { CREATING = 0, READY = 1, DELETING = 2, FAILED = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds an Amazon CloudWatch log stream to monitor application configuration errors.
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption
		 * @return {AddApplicationCloudWatchLoggingOptionResponse} Success
		 */
		AddApplicationCloudWatchLoggingOption(requestBody: AddApplicationCloudWatchLoggingOptionRequest): Observable<AddApplicationCloudWatchLoggingOptionResponse> {
			return this.http.post<AddApplicationCloudWatchLoggingOptionResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Adds a streaming source to your SQL-based Amazon Kinesis Data Analytics application. </p> <p>You can add a streaming source when you create an application, or you can use this operation to add a streaming source after you create an application. For more information, see <a>CreateApplication</a>.</p> <p>Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application version. </p>
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInput
		 * @return {AddApplicationInputResponse} Success
		 */
		AddApplicationInput(requestBody: AddApplicationInputRequest): Observable<AddApplicationInputResponse> {
			return this.http.post<AddApplicationInputResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInput', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds an <a>InputProcessingConfiguration</a> to an SQL-based Kinesis Data Analytics application. An input processor pre-processes records on the input stream before the application's SQL code executes. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>.
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration
		 * @return {AddApplicationInputProcessingConfigurationResponse} Success
		 */
		AddApplicationInputProcessingConfiguration(requestBody: AddApplicationInputProcessingConfigurationRequest): Observable<AddApplicationInputProcessingConfigurationResponse> {
			return this.http.post<AddApplicationInputProcessingConfigurationResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds an external destination to your SQL-based Amazon Kinesis Data Analytics application.</p> <p>If you want Kinesis Data Analytics to deliver data from an in-application stream within your application to an external destination (such as an Kinesis data stream, a Kinesis Data Firehose delivery stream, or an AWS Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.</p> <p> You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. </p> <p> Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application version.</p>
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.AddApplicationOutput
		 * @return {AddApplicationOutputResponse} Success
		 */
		AddApplicationOutput(requestBody: AddApplicationOutputRequest): Observable<AddApplicationOutputResponse> {
			return this.http.post<AddApplicationOutputResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationOutput', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds a reference data source to an existing SQL-based Amazon Kinesis Data Analytics application.</p> <p>Kinesis Data Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in an Amazon S3 object maps to columns in the resulting in-application table.</p>
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.AddApplicationReferenceDataSource
		 * @return {AddApplicationReferenceDataSourceResponse} Success
		 */
		AddApplicationReferenceDataSource(requestBody: AddApplicationReferenceDataSourceRequest): Observable<AddApplicationReferenceDataSourceResponse> {
			return this.http.post<AddApplicationReferenceDataSourceResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationReferenceDataSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds a Virtual Private Cloud (VPC) configuration to the application. Applications can use VPCs to store and access resources securely.</p> <p>Note the following about VPC configurations for Kinesis Data Analytics applications:</p> <ul> <li> <p>VPC configurations are not supported for SQL applications.</p> </li> <li> <p>When a VPC is added to a Kinesis Data Analytics application, the application can no longer be accessed from the Internet directly. To enable Internet access to the application, add an Internet gateway to your VPC.</p> </li> </ul>
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.AddApplicationVpcConfiguration
		 * @return {AddApplicationVpcConfigurationResponse} Success
		 */
		AddApplicationVpcConfiguration(requestBody: AddApplicationVpcConfigurationRequest): Observable<AddApplicationVpcConfigurationResponse> {
			return this.http.post<AddApplicationVpcConfigurationResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationVpcConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an Amazon Kinesis Data Analytics application. For information about creating a Kinesis Data Analytics application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/getting-started.html">Creating an Application</a>.
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.CreateApplication
		 * @return {CreateApplicationResponse} Success
		 */
		CreateApplication(requestBody: CreateApplicationRequest): Observable<CreateApplicationResponse> {
			return this.http.post<CreateApplicationResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.CreateApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a snapshot of the application's state data.
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationSnapshot
		 * @return {CreateApplicationSnapshotResponse} Success
		 */
		CreateApplicationSnapshot(requestBody: CreateApplicationSnapshotRequest): Observable<CreateApplicationSnapshotResponse> {
			return this.http.post<CreateApplicationSnapshotResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified application. Kinesis Data Analytics halts application execution and deletes the application.
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.DeleteApplication
		 * @return {DeleteApplicationResponse} Success
		 */
		DeleteApplication(requestBody: DeleteApplicationRequest): Observable<DeleteApplicationResponse> {
			return this.http.post<DeleteApplicationResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Amazon CloudWatch log stream from an Amazon Kinesis Data Analytics application.
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption
		 * @return {DeleteApplicationCloudWatchLoggingOptionResponse} Success
		 */
		DeleteApplicationCloudWatchLoggingOption(requestBody: DeleteApplicationCloudWatchLoggingOptionRequest): Observable<DeleteApplicationCloudWatchLoggingOptionResponse> {
			return this.http.post<DeleteApplicationCloudWatchLoggingOptionResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an <a>InputProcessingConfiguration</a> from an input.
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration
		 * @return {DeleteApplicationInputProcessingConfigurationResponse} Success
		 */
		DeleteApplicationInputProcessingConfiguration(requestBody: DeleteApplicationInputProcessingConfigurationRequest): Observable<DeleteApplicationInputProcessingConfigurationResponse> {
			return this.http.post<DeleteApplicationInputProcessingConfigurationResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the output destination configuration from your SQL-based Amazon Kinesis Data Analytics application's configuration. Kinesis Data Analytics will no longer write data from the corresponding in-application stream to the external output destination.
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationOutput
		 * @return {DeleteApplicationOutputResponse} Success
		 */
		DeleteApplicationOutput(requestBody: DeleteApplicationOutputRequest): Observable<DeleteApplicationOutputResponse> {
			return this.http.post<DeleteApplicationOutputResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationOutput', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a reference data source configuration from the specified SQL-based Amazon Kinesis Data Analytics application's configuration.</p> <p>If the application is running, Kinesis Data Analytics immediately removes the in-application table that you created using the <a>AddApplicationReferenceDataSource</a> operation. </p>
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource
		 * @return {DeleteApplicationReferenceDataSourceResponse} Success
		 */
		DeleteApplicationReferenceDataSource(requestBody: DeleteApplicationReferenceDataSourceRequest): Observable<DeleteApplicationReferenceDataSourceResponse> {
			return this.http.post<DeleteApplicationReferenceDataSourceResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a snapshot of application state.
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationSnapshot
		 * @return {DeleteApplicationSnapshotResponse} Success
		 */
		DeleteApplicationSnapshot(requestBody: DeleteApplicationSnapshotRequest): Observable<DeleteApplicationSnapshotResponse> {
			return this.http.post<DeleteApplicationSnapshotResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a VPC configuration from a Kinesis Data Analytics application.
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration
		 * @return {DeleteApplicationVpcConfigurationResponse} Success
		 */
		DeleteApplicationVpcConfiguration(requestBody: DeleteApplicationVpcConfigurationRequest): Observable<DeleteApplicationVpcConfigurationResponse> {
			return this.http.post<DeleteApplicationVpcConfigurationResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about a specific Amazon Kinesis Data Analytics application.</p> <p>If you want to retrieve a list of all applications in your account, use the <a>ListApplications</a> operation.</p>
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.DescribeApplication
		 * @return {DescribeApplicationResponse} Success
		 */
		DescribeApplication(requestBody: DescribeApplicationRequest): Observable<DescribeApplicationResponse> {
			return this.http.post<DescribeApplicationResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a snapshot of application state data.
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationSnapshot
		 * @return {DescribeApplicationSnapshotResponse} Success
		 */
		DescribeApplicationSnapshot(requestBody: DescribeApplicationSnapshotRequest): Observable<DescribeApplicationSnapshotResponse> {
			return this.http.post<DescribeApplicationSnapshotResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Infers a schema for an SQL-based Amazon Kinesis Data Analytics application by evaluating sample records on the specified streaming source (Kinesis data stream or Kinesis Data Firehose delivery stream) or Amazon S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.</p> <p> You can use the inferred schema when configuring a streaming source for your application. When you create an application using the Kinesis Data Analytics console, the console uses this operation to infer a schema and show it in the console user interface. </p>
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.DiscoverInputSchema
		 * @return {DiscoverInputSchemaResponse} Success
		 */
		DiscoverInputSchema(requestBody: DiscoverInputSchemaRequest): Observable<DiscoverInputSchemaResponse> {
			return this.http.post<DiscoverInputSchemaResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.DiscoverInputSchema', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the current application snapshots.
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.ListApplicationSnapshots
		 * @return {ListApplicationSnapshotsResponse} Success
		 */
		ListApplicationSnapshots(requestBody: ListApplicationSnapshotsRequest): Observable<ListApplicationSnapshotsResponse> {
			return this.http.post<ListApplicationSnapshotsResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationSnapshots', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of Amazon Kinesis Data Analytics applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. </p> <p>If you want detailed information about a specific application, use <a>DescribeApplication</a>.</p>
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.ListApplications
		 * @return {ListApplicationsResponse} Success
		 */
		ListApplications(requestBody: ListApplicationsRequest): Observable<ListApplicationsResponse> {
			return this.http.post<ListApplicationsResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.ListApplications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the list of key-value tags assigned to the application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts the specified Amazon Kinesis Data Analytics application. After creating an application, you must exclusively call this operation to start your application.
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.StartApplication
		 * @return {StartApplicationResponse} Success
		 */
		StartApplication(requestBody: StartApplicationRequest): Observable<StartApplicationResponse> {
			return this.http.post<StartApplicationResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.StartApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops the application from processing data. You can stop an application only if it is in the running state. You can use the <a>DescribeApplication</a> operation to find the application state.
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.StopApplication
		 * @return {StopApplicationResponse} Success
		 */
		StopApplication(requestBody: StopApplicationRequest): Observable<StopApplicationResponse> {
			return this.http.post<StopApplicationResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.StopApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds one or more key-value tags to a Kinesis Analytics application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from a Kinesis Analytics application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates an existing Amazon Kinesis Data Analytics application. Using this operation, you can update application code, input configuration, and output configuration. </p> <p>Kinesis Data Analytics updates the <code>ApplicationVersionId</code> each time you update your application. </p>
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.UpdateApplication
		 * @return {UpdateApplicationResponse} Success
		 */
		UpdateApplication(requestBody: UpdateApplicationRequest): Observable<UpdateApplicationResponse> {
			return this.http.post<UpdateApplicationResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AddApplicationCloudWatchLoggingOptionX_Amz_Target { KinesisAnalytics_20180523_AddApplicationCloudWatchLoggingOption = 0 }

	export enum AddApplicationInputX_Amz_Target { KinesisAnalytics_20180523_AddApplicationInput = 0 }

	export enum AddApplicationInputProcessingConfigurationX_Amz_Target { KinesisAnalytics_20180523_AddApplicationInputProcessingConfiguration = 0 }

	export enum AddApplicationOutputX_Amz_Target { KinesisAnalytics_20180523_AddApplicationOutput = 0 }

	export enum AddApplicationReferenceDataSourceX_Amz_Target { KinesisAnalytics_20180523_AddApplicationReferenceDataSource = 0 }

	export enum AddApplicationVpcConfigurationX_Amz_Target { KinesisAnalytics_20180523_AddApplicationVpcConfiguration = 0 }

	export enum CreateApplicationX_Amz_Target { KinesisAnalytics_20180523_CreateApplication = 0 }

	export enum CreateApplicationSnapshotX_Amz_Target { KinesisAnalytics_20180523_CreateApplicationSnapshot = 0 }

	export enum DeleteApplicationX_Amz_Target { KinesisAnalytics_20180523_DeleteApplication = 0 }

	export enum DeleteApplicationCloudWatchLoggingOptionX_Amz_Target { KinesisAnalytics_20180523_DeleteApplicationCloudWatchLoggingOption = 0 }

	export enum DeleteApplicationInputProcessingConfigurationX_Amz_Target { KinesisAnalytics_20180523_DeleteApplicationInputProcessingConfiguration = 0 }

	export enum DeleteApplicationOutputX_Amz_Target { KinesisAnalytics_20180523_DeleteApplicationOutput = 0 }

	export enum DeleteApplicationReferenceDataSourceX_Amz_Target { KinesisAnalytics_20180523_DeleteApplicationReferenceDataSource = 0 }

	export enum DeleteApplicationSnapshotX_Amz_Target { KinesisAnalytics_20180523_DeleteApplicationSnapshot = 0 }

	export enum DeleteApplicationVpcConfigurationX_Amz_Target { KinesisAnalytics_20180523_DeleteApplicationVpcConfiguration = 0 }

	export enum DescribeApplicationX_Amz_Target { KinesisAnalytics_20180523_DescribeApplication = 0 }

	export enum DescribeApplicationSnapshotX_Amz_Target { KinesisAnalytics_20180523_DescribeApplicationSnapshot = 0 }

	export enum DiscoverInputSchemaX_Amz_Target { KinesisAnalytics_20180523_DiscoverInputSchema = 0 }

	export enum ListApplicationSnapshotsX_Amz_Target { KinesisAnalytics_20180523_ListApplicationSnapshots = 0 }

	export enum ListApplicationsX_Amz_Target { KinesisAnalytics_20180523_ListApplications = 0 }

	export enum ListTagsForResourceX_Amz_Target { KinesisAnalytics_20180523_ListTagsForResource = 0 }

	export enum StartApplicationX_Amz_Target { KinesisAnalytics_20180523_StartApplication = 0 }

	export enum StopApplicationX_Amz_Target { KinesisAnalytics_20180523_StopApplication = 0 }

	export enum TagResourceX_Amz_Target { KinesisAnalytics_20180523_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { KinesisAnalytics_20180523_UntagResource = 0 }

	export enum UpdateApplicationX_Amz_Target { KinesisAnalytics_20180523_UpdateApplication = 0 }

}

