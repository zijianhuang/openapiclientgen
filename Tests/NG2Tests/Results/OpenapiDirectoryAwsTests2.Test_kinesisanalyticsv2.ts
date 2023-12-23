import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddApplicationCloudWatchLoggingOptionResponse {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId?: number | null;
		CloudWatchLoggingOptionDescriptions?: Array<CloudWatchLoggingOptionDescription>;
	}
	export interface AddApplicationCloudWatchLoggingOptionResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateAddApplicationCloudWatchLoggingOptionResponseFormGroup() {
		return new FormGroup<AddApplicationCloudWatchLoggingOptionResponseFormProperties>({
			ApplicationARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(999999999)]),
		});

	}


	/** Describes the Amazon CloudWatch logging option. */
	export interface CloudWatchLoggingOptionDescription {

		/**
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		CloudWatchLoggingOptionId?: string | null;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		LogStreamARN: string;

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		RoleARN?: string | null;
	}

	/** Describes the Amazon CloudWatch logging option. */
	export interface CloudWatchLoggingOptionDescriptionFormProperties {

		/**
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		CloudWatchLoggingOptionId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		LogStreamARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLoggingOptionDescriptionFormGroup() {
		return new FormGroup<CloudWatchLoggingOptionDescriptionFormProperties>({
			CloudWatchLoggingOptionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50), Validators.minLength(1)]),
			LogStreamARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}

	export interface AddApplicationCloudWatchLoggingOptionRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		CurrentApplicationVersionId: number;

		/**
		 * Provides a description of Amazon CloudWatch logging options, including the log stream Amazon Resource Name (ARN).
		 * Required
		 */
		CloudWatchLoggingOption: CloudWatchLoggingOption;
	}
	export interface AddApplicationCloudWatchLoggingOptionRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		CurrentApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateAddApplicationCloudWatchLoggingOptionRequestFormGroup() {
		return new FormGroup<AddApplicationCloudWatchLoggingOptionRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(999999999)]),
		});

	}


	/** Provides a description of Amazon CloudWatch logging options, including the log stream Amazon Resource Name (ARN).  */
	export interface CloudWatchLoggingOption {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		LogStreamARN: string;
	}

	/** Provides a description of Amazon CloudWatch logging options, including the log stream Amazon Resource Name (ARN).  */
	export interface CloudWatchLoggingOptionFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		LogStreamARN: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLoggingOptionFormGroup() {
		return new FormGroup<CloudWatchLoggingOptionFormProperties>({
			LogStreamARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
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

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
		});

	}

	export interface InvalidArgumentException {
	}
	export interface InvalidArgumentExceptionFormProperties {
	}
	export function CreateInvalidArgumentExceptionFormGroup() {
		return new FormGroup<InvalidArgumentExceptionFormProperties>({
		});

	}

	export interface ConcurrentModificationException {
	}
	export interface ConcurrentModificationExceptionFormProperties {
	}
	export function CreateConcurrentModificationExceptionFormGroup() {
		return new FormGroup<ConcurrentModificationExceptionFormProperties>({
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

	export interface InvalidApplicationConfigurationException {
	}
	export interface InvalidApplicationConfigurationExceptionFormProperties {
	}
	export function CreateInvalidApplicationConfigurationExceptionFormGroup() {
		return new FormGroup<InvalidApplicationConfigurationExceptionFormProperties>({
		});

	}

	export interface AddApplicationInputResponse {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId?: number | null;
		InputDescriptions?: Array<InputDescription>;
	}
	export interface AddApplicationInputResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateAddApplicationInputResponseFormGroup() {
		return new FormGroup<AddApplicationInputResponseFormProperties>({
			ApplicationARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(999999999)]),
		});

	}


	/** Describes the application input configuration for an SQL-based Amazon Kinesis Data Analytics application.  */
	export interface InputDescription {

		/**
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		InputId?: string | null;

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		NamePrefix?: string | null;
		InAppStreamNames?: Array<string>;

		/** For an SQL-based Amazon Kinesis Data Analytics application, provides the configuration information about an input processor. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>. */
		InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;

		/** For an SQL-based Amazon Kinesis Data Analytics application, describes the Kinesis data stream that is configured as the streaming source in the application input configuration. */
		KinesisStreamsInputDescription?: KinesisStreamsInputDescription;

		/** Describes the Amazon Kinesis Data Firehose delivery stream that is configured as the streaming source in the application input configuration. */
		KinesisFirehoseInputDescription?: KinesisFirehoseInputDescription;

		/** For an SQL-based Amazon Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. */
		InputSchema?: SourceSchema;

		/** For an SQL-based Amazon Kinesis Data Analytics application, describes the number of in-application streams to create for a given streaming source. */
		InputParallelism?: InputParallelism;

		/** Describes the point at which the application reads from the streaming source. */
		InputStartingPositionConfiguration?: InputStartingPositionConfiguration;
	}

	/** Describes the application input configuration for an SQL-based Amazon Kinesis Data Analytics application.  */
	export interface InputDescriptionFormProperties {

		/**
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		InputId: FormControl<string | null | undefined>,

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		NamePrefix: FormControl<string | null | undefined>,
	}
	export function CreateInputDescriptionFormGroup() {
		return new FormGroup<InputDescriptionFormProperties>({
			InputId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50), Validators.minLength(1)]),
			NamePrefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32), Validators.minLength(1)]),
		});

	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, provides the configuration information about an input processor. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>. */
	export interface InputProcessingConfigurationDescription {

		/** For an SQL-based Amazon Kinesis Data Analytics application, an object that contains the Amazon Resource Name (ARN) of the AWS Lambda function that is used to preprocess records in the stream. */
		InputLambdaProcessorDescription?: InputLambdaProcessorDescription;
	}

	/** For an SQL-based Amazon Kinesis Data Analytics application, provides the configuration information about an input processor. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>. */
	export interface InputProcessingConfigurationDescriptionFormProperties {
	}
	export function CreateInputProcessingConfigurationDescriptionFormGroup() {
		return new FormGroup<InputProcessingConfigurationDescriptionFormProperties>({
		});

	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, an object that contains the Amazon Resource Name (ARN) of the AWS Lambda function that is used to preprocess records in the stream. */
	export interface InputLambdaProcessorDescription {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN: string;

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		RoleARN?: string | null;
	}

	/** For an SQL-based Amazon Kinesis Data Analytics application, an object that contains the Amazon Resource Name (ARN) of the AWS Lambda function that is used to preprocess records in the stream. */
	export interface InputLambdaProcessorDescriptionFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateInputLambdaProcessorDescriptionFormGroup() {
		return new FormGroup<InputLambdaProcessorDescriptionFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, describes the Kinesis data stream that is configured as the streaming source in the application input configuration.  */
	export interface KinesisStreamsInputDescription {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN: string;

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		RoleARN?: string | null;
	}

	/** For an SQL-based Amazon Kinesis Data Analytics application, describes the Kinesis data stream that is configured as the streaming source in the application input configuration.  */
	export interface KinesisStreamsInputDescriptionFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisStreamsInputDescriptionFormGroup() {
		return new FormGroup<KinesisStreamsInputDescriptionFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** Describes the Amazon Kinesis Data Firehose delivery stream that is configured as the streaming source in the application input configuration.  */
	export interface KinesisFirehoseInputDescription {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN: string;

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		RoleARN?: string | null;
	}

	/** Describes the Amazon Kinesis Data Firehose delivery stream that is configured as the streaming source in the application input configuration.  */
	export interface KinesisFirehoseInputDescriptionFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisFirehoseInputDescriptionFormGroup() {
		return new FormGroup<KinesisFirehoseInputDescriptionFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.  */
	export interface SourceSchema {

		/**
		 * For an SQL-based Amazon Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream.
		 * Required
		 */
		RecordFormat: RecordFormat;

		/** Pattern: UTF-8 */
		RecordEncoding?: string | null;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1000
		 */
		RecordColumns: Array<RecordColumn>;
	}

	/** For an SQL-based Amazon Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.  */
	export interface SourceSchemaFormProperties {

		/** Pattern: UTF-8 */
		RecordEncoding: FormControl<string | null | undefined>,
	}
	export function CreateSourceSchemaFormGroup() {
		return new FormGroup<SourceSchemaFormProperties>({
			RecordEncoding: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  For an SQL-based Amazon Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream.  */
	export interface RecordFormat {

		/** Required */
		RecordFormatType: RecordFormatRecordFormatType;

		/** When you configure an SQL-based Amazon Kinesis Data Analytics application's input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source. */
		MappingParameters?: MappingParameters;
	}

	/**  For an SQL-based Amazon Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream.  */
	export interface RecordFormatFormProperties {

		/** Required */
		RecordFormatType: FormControl<RecordFormatRecordFormatType | null | undefined>,
	}
	export function CreateRecordFormatFormGroup() {
		return new FormGroup<RecordFormatFormProperties>({
			RecordFormatType: new FormControl<RecordFormatRecordFormatType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RecordFormatRecordFormatType { JSON = 0, CSV = 1 }


	/** When you configure an SQL-based Amazon Kinesis Data Analytics application's input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source. */
	export interface MappingParameters {

		/** For an SQL-based Amazon Kinesis Data Analytics application, provides additional mapping information when JSON is the record format on the streaming source. */
		JSONMappingParameters?: JSONMappingParameters;

		/** <p>For an SQL-based application, provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the <i>'\n'</i> as the row delimiter and a comma (",") as the column delimiter: </p> <p> <code>"name1", "address1"</code> </p> <p> <code>"name2", "address2"</code> </p> */
		CSVMappingParameters?: CSVMappingParameters;
	}

	/** When you configure an SQL-based Amazon Kinesis Data Analytics application's input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source. */
	export interface MappingParametersFormProperties {
	}
	export function CreateMappingParametersFormGroup() {
		return new FormGroup<MappingParametersFormProperties>({
		});

	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, provides additional mapping information when JSON is the record format on the streaming source. */
	export interface JSONMappingParameters {

		/**
		 * Required
		 * Min length: 1
		 */
		RecordRowPath: string;
	}

	/** For an SQL-based Amazon Kinesis Data Analytics application, provides additional mapping information when JSON is the record format on the streaming source. */
	export interface JSONMappingParametersFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		RecordRowPath: FormControl<string | null | undefined>,
	}
	export function CreateJSONMappingParametersFormGroup() {
		return new FormGroup<JSONMappingParametersFormProperties>({
			RecordRowPath: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}


	/** <p>For an SQL-based application, provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the <i>'\n'</i> as the row delimiter and a comma (",") as the column delimiter: </p> <p> <code>"name1", "address1"</code> </p> <p> <code>"name2", "address2"</code> </p> */
	export interface CSVMappingParameters {

		/**
		 * Required
		 * Min length: 1
		 */
		RecordRowDelimiter: string;

		/**
		 * Required
		 * Min length: 1
		 */
		RecordColumnDelimiter: string;
	}

	/** <p>For an SQL-based application, provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the <i>'\n'</i> as the row delimiter and a comma (",") as the column delimiter: </p> <p> <code>"name1", "address1"</code> </p> <p> <code>"name2", "address2"</code> </p> */
	export interface CSVMappingParametersFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		RecordRowDelimiter: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		RecordColumnDelimiter: FormControl<string | null | undefined>,
	}
	export function CreateCSVMappingParametersFormGroup() {
		return new FormGroup<CSVMappingParametersFormProperties>({
			RecordRowDelimiter: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			RecordColumnDelimiter: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}


	/** <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.</p> <p>Also used to describe the format of the reference data source.</p> */
	export interface RecordColumn {

		/** Required */
		Name: string;
		Mapping?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		SqlType: string;
	}

	/** <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.</p> <p>Also used to describe the format of the reference data source.</p> */
	export interface RecordColumnFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Mapping: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		SqlType: FormControl<string | null | undefined>,
	}
	export function CreateRecordColumnFormGroup() {
		return new FormGroup<RecordColumnFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Mapping: new FormControl<string | null | undefined>(undefined),
			SqlType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, describes the number of in-application streams to create for a given streaming source.  */
	export interface InputParallelism {

		/**
		 * Minimum: 1
		 * Maximum: 64
		 */
		Count?: number | null;
	}

	/** For an SQL-based Amazon Kinesis Data Analytics application, describes the number of in-application streams to create for a given streaming source.  */
	export interface InputParallelismFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 64
		 */
		Count: FormControl<number | null | undefined>,
	}
	export function CreateInputParallelismFormGroup() {
		return new FormGroup<InputParallelismFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(64)]),
		});

	}


	/** Describes the point at which the application reads from the streaming source. */
	export interface InputStartingPositionConfiguration {
		InputStartingPosition?: InputStartingPositionConfigurationInputStartingPosition | null;
	}

	/** Describes the point at which the application reads from the streaming source. */
	export interface InputStartingPositionConfigurationFormProperties {
		InputStartingPosition: FormControl<InputStartingPositionConfigurationInputStartingPosition | null | undefined>,
	}
	export function CreateInputStartingPositionConfigurationFormGroup() {
		return new FormGroup<InputStartingPositionConfigurationFormProperties>({
			InputStartingPosition: new FormControl<InputStartingPositionConfigurationInputStartingPosition | null | undefined>(undefined),
		});

	}

	export enum InputStartingPositionConfigurationInputStartingPosition { NOW = 0, TRIM_HORIZON = 1, LAST_STOPPED_POINT = 2 }

	export interface AddApplicationInputRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		CurrentApplicationVersionId: number;

		/**
		 * When you configure the application input for an SQL-based Amazon Kinesis Data Analytics application, you specify the streaming source, the in-application stream name that is created, and the mapping between the two.
		 * Required
		 */
		Input: Input;
	}
	export interface AddApplicationInputRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		CurrentApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateAddApplicationInputRequestFormGroup() {
		return new FormGroup<AddApplicationInputRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(999999999)]),
		});

	}


	/** When you configure the application input for an SQL-based Amazon Kinesis Data Analytics application, you specify the streaming source, the in-application stream name that is created, and the mapping between the two.  */
	export interface Input {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		NamePrefix: string;

		/** For an SQL-based Amazon Kinesis Data Analytics application, describes a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>. */
		InputProcessingConfiguration?: InputProcessingConfiguration;

		/** Identifies an Amazon Kinesis data stream as the streaming source. You provide the stream's Amazon Resource Name (ARN). */
		KinesisStreamsInput?: KinesisStreamsInput;

		/** For an SQL-based Amazon Kinesis Data Analytics application, identifies a Kinesis Data Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN). */
		KinesisFirehoseInput?: KinesisFirehoseInput;

		/** For an SQL-based Amazon Kinesis Data Analytics application, describes the number of in-application streams to create for a given streaming source. */
		InputParallelism?: InputParallelism;

		/**
		 * For an SQL-based Amazon Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
		 * Required
		 */
		InputSchema: SourceSchema;
	}

	/** When you configure the application input for an SQL-based Amazon Kinesis Data Analytics application, you specify the streaming source, the in-application stream name that is created, and the mapping between the two.  */
	export interface InputFormProperties {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		NamePrefix: FormControl<string | null | undefined>,
	}
	export function CreateInputFormGroup() {
		return new FormGroup<InputFormProperties>({
			NamePrefix: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(1)]),
		});

	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, describes a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>. */
	export interface InputProcessingConfiguration {

		/**
		 * An object that contains the Amazon Resource Name (ARN) of the AWS Lambda function that is used to preprocess records in the stream in an SQL-based Amazon Kinesis Data Analytics application.
		 * Required
		 */
		InputLambdaProcessor: InputLambdaProcessor;
	}

	/** For an SQL-based Amazon Kinesis Data Analytics application, describes a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>. */
	export interface InputProcessingConfigurationFormProperties {
	}
	export function CreateInputProcessingConfigurationFormGroup() {
		return new FormGroup<InputProcessingConfigurationFormProperties>({
		});

	}


	/** An object that contains the Amazon Resource Name (ARN) of the AWS Lambda function that is used to preprocess records in the stream in an SQL-based Amazon Kinesis Data Analytics application.  */
	export interface InputLambdaProcessor {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN: string;
	}

	/** An object that contains the Amazon Resource Name (ARN) of the AWS Lambda function that is used to preprocess records in the stream in an SQL-based Amazon Kinesis Data Analytics application.  */
	export interface InputLambdaProcessorFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateInputLambdaProcessorFormGroup() {
		return new FormGroup<InputLambdaProcessorFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/**  Identifies an Amazon Kinesis data stream as the streaming source. You provide the stream's Amazon Resource Name (ARN). */
	export interface KinesisStreamsInput {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN: string;
	}

	/**  Identifies an Amazon Kinesis data stream as the streaming source. You provide the stream's Amazon Resource Name (ARN). */
	export interface KinesisStreamsInputFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisStreamsInputFormGroup() {
		return new FormGroup<KinesisStreamsInputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, identifies a Kinesis Data Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN). */
	export interface KinesisFirehoseInput {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN: string;
	}

	/** For an SQL-based Amazon Kinesis Data Analytics application, identifies a Kinesis Data Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN). */
	export interface KinesisFirehoseInputFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisFirehoseInputFormGroup() {
		return new FormGroup<KinesisFirehoseInputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}

	export interface CodeValidationException {
	}
	export interface CodeValidationExceptionFormProperties {
	}
	export function CreateCodeValidationExceptionFormGroup() {
		return new FormGroup<CodeValidationExceptionFormProperties>({
		});

	}

	export interface AddApplicationInputProcessingConfigurationResponse {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId?: number | null;

		/**
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		InputId?: string | null;

		/** For an SQL-based Amazon Kinesis Data Analytics application, provides the configuration information about an input processor. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>. */
		InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;
	}
	export interface AddApplicationInputProcessingConfigurationResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId: FormControl<number | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		InputId: FormControl<string | null | undefined>,
	}
	export function CreateAddApplicationInputProcessingConfigurationResponseFormGroup() {
		return new FormGroup<AddApplicationInputProcessingConfigurationResponseFormProperties>({
			ApplicationARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(999999999)]),
			InputId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50), Validators.minLength(1)]),
		});

	}

	export interface AddApplicationInputProcessingConfigurationRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		CurrentApplicationVersionId: number;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		InputId: string;

		/**
		 * For an SQL-based Amazon Kinesis Data Analytics application, describes a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>.
		 * Required
		 */
		InputProcessingConfiguration: InputProcessingConfiguration;
	}
	export interface AddApplicationInputProcessingConfigurationRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		CurrentApplicationVersionId: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		InputId: FormControl<string | null | undefined>,
	}
	export function CreateAddApplicationInputProcessingConfigurationRequestFormGroup() {
		return new FormGroup<AddApplicationInputProcessingConfigurationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(999999999)]),
			InputId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(50), Validators.minLength(1)]),
		});

	}

	export interface AddApplicationOutputResponse {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId?: number | null;
		OutputDescriptions?: Array<OutputDescription>;
	}
	export interface AddApplicationOutputResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateAddApplicationOutputResponseFormGroup() {
		return new FormGroup<AddApplicationOutputResponseFormProperties>({
			ApplicationARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(999999999)]),
		});

	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream.  */
	export interface OutputDescription {

		/**
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		OutputId?: string | null;

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		Name?: string | null;

		/** For an SQL-based Amazon Kinesis Data Analytics application's output, describes the Kinesis data stream that is configured as its destination. */
		KinesisStreamsOutputDescription?: KinesisStreamsOutputDescription;

		/** For an SQL-based Amazon Kinesis Data Analytics application's output, describes the Kinesis Data Firehose delivery stream that is configured as its destination. */
		KinesisFirehoseOutputDescription?: KinesisFirehoseOutputDescription;

		/** For an SQL-based Amazon Kinesis Data Analytics application output, describes the AWS Lambda function that is configured as its destination. */
		LambdaOutputDescription?: LambdaOutputDescription;

		/** Describes the data format when records are written to the destination in an SQL-based Amazon Kinesis Data Analytics application. */
		DestinationSchema?: DestinationSchema;
	}

	/** For an SQL-based Amazon Kinesis Data Analytics application, describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream.  */
	export interface OutputDescriptionFormProperties {

		/**
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		OutputId: FormControl<string | null | undefined>,

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOutputDescriptionFormGroup() {
		return new FormGroup<OutputDescriptionFormProperties>({
			OutputId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50), Validators.minLength(1)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32), Validators.minLength(1)]),
		});

	}


	/** For an SQL-based Amazon Kinesis Data Analytics application's output, describes the Kinesis data stream that is configured as its destination.  */
	export interface KinesisStreamsOutputDescription {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN: string;

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		RoleARN?: string | null;
	}

	/** For an SQL-based Amazon Kinesis Data Analytics application's output, describes the Kinesis data stream that is configured as its destination.  */
	export interface KinesisStreamsOutputDescriptionFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisStreamsOutputDescriptionFormGroup() {
		return new FormGroup<KinesisStreamsOutputDescriptionFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** For an SQL-based Amazon Kinesis Data Analytics application's output, describes the Kinesis Data Firehose delivery stream that is configured as its destination. */
	export interface KinesisFirehoseOutputDescription {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN: string;

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		RoleARN?: string | null;
	}

	/** For an SQL-based Amazon Kinesis Data Analytics application's output, describes the Kinesis Data Firehose delivery stream that is configured as its destination. */
	export interface KinesisFirehoseOutputDescriptionFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisFirehoseOutputDescriptionFormGroup() {
		return new FormGroup<KinesisFirehoseOutputDescriptionFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** For an SQL-based Amazon Kinesis Data Analytics application output, describes the AWS Lambda function that is configured as its destination.  */
	export interface LambdaOutputDescription {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN: string;

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		RoleARN?: string | null;
	}

	/** For an SQL-based Amazon Kinesis Data Analytics application output, describes the AWS Lambda function that is configured as its destination.  */
	export interface LambdaOutputDescriptionFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateLambdaOutputDescriptionFormGroup() {
		return new FormGroup<LambdaOutputDescriptionFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** Describes the data format when records are written to the destination in an SQL-based Amazon Kinesis Data Analytics application.  */
	export interface DestinationSchema {

		/** Required */
		RecordFormatType: RecordFormatRecordFormatType;
	}

	/** Describes the data format when records are written to the destination in an SQL-based Amazon Kinesis Data Analytics application.  */
	export interface DestinationSchemaFormProperties {

		/** Required */
		RecordFormatType: FormControl<RecordFormatRecordFormatType | null | undefined>,
	}
	export function CreateDestinationSchemaFormGroup() {
		return new FormGroup<DestinationSchemaFormProperties>({
			RecordFormatType: new FormControl<RecordFormatRecordFormatType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddApplicationOutputRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		CurrentApplicationVersionId: number;

		/**
		 * <p> Describes an SQL-based Amazon Kinesis Data Analytics application's output configuration, in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream. </p> <p/>
		 * Required
		 */
		Output: Output;
	}
	export interface AddApplicationOutputRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		CurrentApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateAddApplicationOutputRequestFormGroup() {
		return new FormGroup<AddApplicationOutputRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(999999999)]),
		});

	}


	/** <p> Describes an SQL-based Amazon Kinesis Data Analytics application's output configuration, in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream. </p> <p/> */
	export interface Output {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		Name: string;

		/** When you configure an SQL-based Amazon Kinesis Data Analytics application's output, identifies a Kinesis data stream as the destination. You provide the stream Amazon Resource Name (ARN). */
		KinesisStreamsOutput?: KinesisStreamsOutput;

		/** For an SQL-based Amazon Kinesis Data Analytics application, when configuring application output, identifies a Kinesis Data Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) of the delivery stream. */
		KinesisFirehoseOutput?: KinesisFirehoseOutput;

		/** When you configure an SQL-based Amazon Kinesis Data Analytics application's output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) of the Lambda function. */
		LambdaOutput?: LambdaOutput;

		/**
		 * Describes the data format when records are written to the destination in an SQL-based Amazon Kinesis Data Analytics application.
		 * Required
		 */
		DestinationSchema: DestinationSchema;
	}

	/** <p> Describes an SQL-based Amazon Kinesis Data Analytics application's output configuration, in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream. </p> <p/> */
	export interface OutputFormProperties {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOutputFormGroup() {
		return new FormGroup<OutputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(1)]),
		});

	}


	/** When you configure an SQL-based Amazon Kinesis Data Analytics application's output, identifies a Kinesis data stream as the destination. You provide the stream Amazon Resource Name (ARN).  */
	export interface KinesisStreamsOutput {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN: string;
	}

	/** When you configure an SQL-based Amazon Kinesis Data Analytics application's output, identifies a Kinesis data stream as the destination. You provide the stream Amazon Resource Name (ARN).  */
	export interface KinesisStreamsOutputFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisStreamsOutputFormGroup() {
		return new FormGroup<KinesisStreamsOutputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, when configuring application output, identifies a Kinesis Data Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) of the delivery stream.  */
	export interface KinesisFirehoseOutput {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN: string;
	}

	/** For an SQL-based Amazon Kinesis Data Analytics application, when configuring application output, identifies a Kinesis Data Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) of the delivery stream.  */
	export interface KinesisFirehoseOutputFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisFirehoseOutputFormGroup() {
		return new FormGroup<KinesisFirehoseOutputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** When you configure an SQL-based Amazon Kinesis Data Analytics application's output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) of the Lambda function.  */
	export interface LambdaOutput {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN: string;
	}

	/** When you configure an SQL-based Amazon Kinesis Data Analytics application's output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) of the Lambda function.  */
	export interface LambdaOutputFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateLambdaOutputFormGroup() {
		return new FormGroup<LambdaOutputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}

	export interface AddApplicationReferenceDataSourceResponse {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId?: number | null;
		ReferenceDataSourceDescriptions?: Array<ReferenceDataSourceDescription>;
	}
	export interface AddApplicationReferenceDataSourceResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateAddApplicationReferenceDataSourceResponseFormGroup() {
		return new FormGroup<AddApplicationReferenceDataSourceResponseFormProperties>({
			ApplicationARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(999999999)]),
		});

	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, describes the reference data source configured for an application. */
	export interface ReferenceDataSourceDescription {

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ReferenceId: string;

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		TableName: string;

		/**
		 * For an SQL-based Amazon Kinesis Data Analytics application, provides the bucket name and object key name that stores the reference data.
		 * Required
		 */
		S3ReferenceDataSourceDescription: S3ReferenceDataSourceDescription;

		/** For an SQL-based Amazon Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. */
		ReferenceSchema?: SourceSchema;
	}

	/** For an SQL-based Amazon Kinesis Data Analytics application, describes the reference data source configured for an application. */
	export interface ReferenceDataSourceDescriptionFormProperties {

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ReferenceId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateReferenceDataSourceDescriptionFormGroup() {
		return new FormGroup<ReferenceDataSourceDescriptionFormProperties>({
			ReferenceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(50), Validators.minLength(1)]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(1)]),
		});

	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, provides the bucket name and object key name that stores the reference data. */
	export interface S3ReferenceDataSourceDescription {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		BucketARN: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		FileKey: string;

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		ReferenceRoleARN?: string | null;
	}

	/** For an SQL-based Amazon Kinesis Data Analytics application, provides the bucket name and object key name that stores the reference data. */
	export interface S3ReferenceDataSourceDescriptionFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		BucketARN: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		FileKey: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		ReferenceRoleARN: FormControl<string | null | undefined>,
	}
	export function CreateS3ReferenceDataSourceDescriptionFormGroup() {
		return new FormGroup<S3ReferenceDataSourceDescriptionFormProperties>({
			BucketARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
			FileKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			ReferenceRoleARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}

	export interface AddApplicationReferenceDataSourceRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		CurrentApplicationVersionId: number;

		/**
		 * For an SQL-based Amazon Kinesis Data Analytics application, describes the reference data source by providing the source information (Amazon S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.
		 * Required
		 */
		ReferenceDataSource: ReferenceDataSource;
	}
	export interface AddApplicationReferenceDataSourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		CurrentApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateAddApplicationReferenceDataSourceRequestFormGroup() {
		return new FormGroup<AddApplicationReferenceDataSourceRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(999999999)]),
		});

	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, describes the reference data source by providing the source information (Amazon S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table. */
	export interface ReferenceDataSource {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		TableName: string;

		/** <p>For an SQL-based Amazon Kinesis Data Analytics application, identifies the Amazon S3 bucket and object that contains the reference data.</p> <p>A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application. </p> */
		S3ReferenceDataSource?: S3ReferenceDataSource;

		/**
		 * For an SQL-based Amazon Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
		 * Required
		 */
		ReferenceSchema: SourceSchema;
	}

	/** For an SQL-based Amazon Kinesis Data Analytics application, describes the reference data source by providing the source information (Amazon S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table. */
	export interface ReferenceDataSourceFormProperties {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateReferenceDataSourceFormGroup() {
		return new FormGroup<ReferenceDataSourceFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(1)]),
		});

	}


	/** <p>For an SQL-based Amazon Kinesis Data Analytics application, identifies the Amazon S3 bucket and object that contains the reference data.</p> <p>A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application. </p> */
	export interface S3ReferenceDataSource {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		BucketARN?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		FileKey?: string | null;
	}

	/** <p>For an SQL-based Amazon Kinesis Data Analytics application, identifies the Amazon S3 bucket and object that contains the reference data.</p> <p>A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application. </p> */
	export interface S3ReferenceDataSourceFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		BucketARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		FileKey: FormControl<string | null | undefined>,
	}
	export function CreateS3ReferenceDataSourceFormGroup() {
		return new FormGroup<S3ReferenceDataSourceFormProperties>({
			BucketARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			FileKey: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}

	export interface AddApplicationVpcConfigurationResponse {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId?: number | null;

		/** Describes the parameters of a VPC used by the application. */
		VpcConfigurationDescription?: VpcConfigurationDescription;
	}
	export interface AddApplicationVpcConfigurationResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateAddApplicationVpcConfigurationResponseFormGroup() {
		return new FormGroup<AddApplicationVpcConfigurationResponseFormProperties>({
			ApplicationARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(999999999)]),
		});

	}


	/** Describes the parameters of a VPC used by the application. */
	export interface VpcConfigurationDescription {

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		VpcConfigurationId: string;

		/** Required */
		VpcId: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 16
		 */
		SubnetIds: Array<string>;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		SecurityGroupIds: Array<string>;
	}

	/** Describes the parameters of a VPC used by the application. */
	export interface VpcConfigurationDescriptionFormProperties {

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		VpcConfigurationId: FormControl<string | null | undefined>,

		/** Required */
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateVpcConfigurationDescriptionFormGroup() {
		return new FormGroup<VpcConfigurationDescriptionFormProperties>({
			VpcConfigurationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(50), Validators.minLength(1)]),
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddApplicationVpcConfigurationRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		CurrentApplicationVersionId: number;

		/**
		 * Describes the parameters of a VPC used by the application.
		 * Required
		 */
		VpcConfiguration: VpcConfiguration;
	}
	export interface AddApplicationVpcConfigurationRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		CurrentApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateAddApplicationVpcConfigurationRequestFormGroup() {
		return new FormGroup<AddApplicationVpcConfigurationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(999999999)]),
		});

	}


	/** Describes the parameters of a VPC used by the application. */
	export interface VpcConfiguration {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 16
		 */
		SubnetIds: Array<string>;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		SecurityGroupIds: Array<string>;
	}

	/** Describes the parameters of a VPC used by the application. */
	export interface VpcConfigurationFormProperties {
	}
	export function CreateVpcConfigurationFormGroup() {
		return new FormGroup<VpcConfigurationFormProperties>({
		});

	}

	export interface CreateApplicationResponse {

		/**
		 * Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations.
		 * Required
		 */
		ApplicationDetail: ApplicationDetail;
	}
	export interface CreateApplicationResponseFormProperties {
	}
	export function CreateCreateApplicationResponseFormGroup() {
		return new FormGroup<CreateApplicationResponseFormProperties>({
		});

	}


	/** Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations. */
	export interface ApplicationDetail {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN: string;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		ApplicationDescription?: string | null;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: string;

		/** Required */
		RuntimeEnvironment: ApplicationDetailRuntimeEnvironment;

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		ServiceExecutionRole?: string | null;

		/** Required */
		ApplicationStatus: ApplicationDetailApplicationStatus;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId: number;
		CreateTimestamp?: Date | null;
		LastUpdateTimestamp?: Date | null;

		/** Describes details about the application code and starting parameters for an Amazon Kinesis Data Analytics application. */
		ApplicationConfigurationDescription?: ApplicationConfigurationDescription;
		CloudWatchLoggingOptionDescriptions?: Array<CloudWatchLoggingOptionDescription>;
	}

	/** Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations. */
	export interface ApplicationDetailFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		ApplicationDescription: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		RuntimeEnvironment: FormControl<ApplicationDetailRuntimeEnvironment | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		ServiceExecutionRole: FormControl<string | null | undefined>,

		/** Required */
		ApplicationStatus: FormControl<ApplicationDetailApplicationStatus | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId: FormControl<number | null | undefined>,
		CreateTimestamp: FormControl<Date | null | undefined>,
		LastUpdateTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateApplicationDetailFormGroup() {
		return new FormGroup<ApplicationDetailFormProperties>({
			ApplicationARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
			ApplicationDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			RuntimeEnvironment: new FormControl<ApplicationDetailRuntimeEnvironment | null | undefined>(undefined, [Validators.required]),
			ServiceExecutionRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			ApplicationStatus: new FormControl<ApplicationDetailApplicationStatus | null | undefined>(undefined, [Validators.required]),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(999999999)]),
			CreateTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdateTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ApplicationDetailRuntimeEnvironment { SQL_1_0 = 0, FLINK_1_6 = 1, FLINK_1_8 = 2 }

	export enum ApplicationDetailApplicationStatus { DELETING = 0, STARTING = 1, STOPPING = 2, READY = 3, RUNNING = 4, UPDATING = 5 }


	/** Describes details about the application code and starting parameters for an Amazon Kinesis Data Analytics application. */
	export interface ApplicationConfigurationDescription {

		/** Describes the inputs, outputs, and reference data sources for an SQL-based Kinesis Data Analytics application. */
		SqlApplicationConfigurationDescription?: SqlApplicationConfigurationDescription;

		/** Describes code configuration for a Java-based Kinesis Data Analytics application. */
		ApplicationCodeConfigurationDescription?: ApplicationCodeConfigurationDescription;

		/** Describes the starting properties for a Kinesis Data Analytics application. */
		RunConfigurationDescription?: RunConfigurationDescription;

		/** Describes configuration parameters for a Java-based Amazon Kinesis Data Analytics application. */
		FlinkApplicationConfigurationDescription?: FlinkApplicationConfigurationDescription;

		/** Describes the execution properties for a Java-based Amazon Kinesis Data Analytics application. */
		EnvironmentPropertyDescriptions?: EnvironmentPropertyDescriptions;

		/** Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application. */
		ApplicationSnapshotConfigurationDescription?: ApplicationSnapshotConfigurationDescription;
		VpcConfigurationDescriptions?: Array<VpcConfigurationDescription>;
	}

	/** Describes details about the application code and starting parameters for an Amazon Kinesis Data Analytics application. */
	export interface ApplicationConfigurationDescriptionFormProperties {
	}
	export function CreateApplicationConfigurationDescriptionFormGroup() {
		return new FormGroup<ApplicationConfigurationDescriptionFormProperties>({
		});

	}


	/** Describes the inputs, outputs, and reference data sources for an SQL-based Kinesis Data Analytics application. */
	export interface SqlApplicationConfigurationDescription {
		InputDescriptions?: Array<InputDescription>;
		OutputDescriptions?: Array<OutputDescription>;
		ReferenceDataSourceDescriptions?: Array<ReferenceDataSourceDescription>;
	}

	/** Describes the inputs, outputs, and reference data sources for an SQL-based Kinesis Data Analytics application. */
	export interface SqlApplicationConfigurationDescriptionFormProperties {
	}
	export function CreateSqlApplicationConfigurationDescriptionFormGroup() {
		return new FormGroup<SqlApplicationConfigurationDescriptionFormProperties>({
		});

	}


	/** Describes code configuration for a Java-based Kinesis Data Analytics application. */
	export interface ApplicationCodeConfigurationDescription {

		/** Required */
		CodeContentType: ApplicationCodeConfigurationDescriptionCodeContentType;

		/** Describes details about the application code for a Java-based Kinesis Data Analytics application. */
		CodeContentDescription?: CodeContentDescription;
	}

	/** Describes code configuration for a Java-based Kinesis Data Analytics application. */
	export interface ApplicationCodeConfigurationDescriptionFormProperties {

		/** Required */
		CodeContentType: FormControl<ApplicationCodeConfigurationDescriptionCodeContentType | null | undefined>,
	}
	export function CreateApplicationCodeConfigurationDescriptionFormGroup() {
		return new FormGroup<ApplicationCodeConfigurationDescriptionFormProperties>({
			CodeContentType: new FormControl<ApplicationCodeConfigurationDescriptionCodeContentType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ApplicationCodeConfigurationDescriptionCodeContentType { PLAINTEXT = 0, ZIPFILE = 1 }


	/** Describes details about the application code for a Java-based Kinesis Data Analytics application. */
	export interface CodeContentDescription {

		/**
		 * Max length: 102400
		 * Min length: 0
		 */
		TextContent?: string | null;

		/**
		 * Max length: 128
		 * Min length: 128
		 */
		CodeMD5?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 52428800
		 */
		CodeSize?: number | null;

		/** Describes the location of a Java-based Amazon Kinesis Data Analytics application's code stored in an S3 bucket. */
		S3ApplicationCodeLocationDescription?: S3ApplicationCodeLocationDescription;
	}

	/** Describes details about the application code for a Java-based Kinesis Data Analytics application. */
	export interface CodeContentDescriptionFormProperties {

		/**
		 * Max length: 102400
		 * Min length: 0
		 */
		TextContent: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 128
		 */
		CodeMD5: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 52428800
		 */
		CodeSize: FormControl<number | null | undefined>,
	}
	export function CreateCodeContentDescriptionFormGroup() {
		return new FormGroup<CodeContentDescriptionFormProperties>({
			TextContent: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(102400), Validators.minLength(0)]),
			CodeMD5: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(128)]),
			CodeSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(52428800)]),
		});

	}


	/** Describes the location of a Java-based Amazon Kinesis Data Analytics application's code stored in an S3 bucket. */
	export interface S3ApplicationCodeLocationDescription {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		BucketARN: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		FileKey: string;
		ObjectVersion?: string | null;
	}

	/** Describes the location of a Java-based Amazon Kinesis Data Analytics application's code stored in an S3 bucket. */
	export interface S3ApplicationCodeLocationDescriptionFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		BucketARN: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		FileKey: FormControl<string | null | undefined>,
		ObjectVersion: FormControl<string | null | undefined>,
	}
	export function CreateS3ApplicationCodeLocationDescriptionFormGroup() {
		return new FormGroup<S3ApplicationCodeLocationDescriptionFormProperties>({
			BucketARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
			FileKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			ObjectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the starting properties for a Kinesis Data Analytics application. */
	export interface RunConfigurationDescription {

		/** Specifies the method and snapshot to use when restarting an application using previously saved application state. */
		ApplicationRestoreConfigurationDescription?: ApplicationRestoreConfiguration;
	}

	/** Describes the starting properties for a Kinesis Data Analytics application. */
	export interface RunConfigurationDescriptionFormProperties {
	}
	export function CreateRunConfigurationDescriptionFormGroup() {
		return new FormGroup<RunConfigurationDescriptionFormProperties>({
		});

	}


	/** Specifies the method and snapshot to use when restarting an application using previously saved application state. */
	export interface ApplicationRestoreConfiguration {

		/** Required */
		ApplicationRestoreType: ApplicationRestoreConfigurationApplicationRestoreType;

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		SnapshotName?: string | null;
	}

	/** Specifies the method and snapshot to use when restarting an application using previously saved application state. */
	export interface ApplicationRestoreConfigurationFormProperties {

		/** Required */
		ApplicationRestoreType: FormControl<ApplicationRestoreConfigurationApplicationRestoreType | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		SnapshotName: FormControl<string | null | undefined>,
	}
	export function CreateApplicationRestoreConfigurationFormGroup() {
		return new FormGroup<ApplicationRestoreConfigurationFormProperties>({
			ApplicationRestoreType: new FormControl<ApplicationRestoreConfigurationApplicationRestoreType | null | undefined>(undefined, [Validators.required]),
			SnapshotName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
		});

	}

	export enum ApplicationRestoreConfigurationApplicationRestoreType { SKIP_RESTORE_FROM_SNAPSHOT = 0, RESTORE_FROM_LATEST_SNAPSHOT = 1, RESTORE_FROM_CUSTOM_SNAPSHOT = 2 }


	/** Describes configuration parameters for a Java-based Amazon Kinesis Data Analytics application. */
	export interface FlinkApplicationConfigurationDescription {

		/** Describes checkpointing parameters for a Java-based Amazon Kinesis Data Analytics application. */
		CheckpointConfigurationDescription?: CheckpointConfigurationDescription;

		/** Describes configuration parameters for CloudWatch logging for a Java-based Kinesis Data Analytics application. */
		MonitoringConfigurationDescription?: MonitoringConfigurationDescription;

		/** Describes parameters for how a Java-based Kinesis Data Analytics application executes multiple tasks simultaneously. */
		ParallelismConfigurationDescription?: ParallelismConfigurationDescription;
		JobPlanDescription?: string | null;
	}

	/** Describes configuration parameters for a Java-based Amazon Kinesis Data Analytics application. */
	export interface FlinkApplicationConfigurationDescriptionFormProperties {
		JobPlanDescription: FormControl<string | null | undefined>,
	}
	export function CreateFlinkApplicationConfigurationDescriptionFormGroup() {
		return new FormGroup<FlinkApplicationConfigurationDescriptionFormProperties>({
			JobPlanDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes checkpointing parameters for a Java-based Amazon Kinesis Data Analytics application. */
	export interface CheckpointConfigurationDescription {
		ConfigurationType?: CheckpointConfigurationDescriptionConfigurationType | null;
		CheckpointingEnabled?: boolean | null;

		/** Minimum: 1 */
		CheckpointInterval?: number | null;

		/** Minimum: 0 */
		MinPauseBetweenCheckpoints?: number | null;
	}

	/** Describes checkpointing parameters for a Java-based Amazon Kinesis Data Analytics application. */
	export interface CheckpointConfigurationDescriptionFormProperties {
		ConfigurationType: FormControl<CheckpointConfigurationDescriptionConfigurationType | null | undefined>,
		CheckpointingEnabled: FormControl<boolean | null | undefined>,

		/** Minimum: 1 */
		CheckpointInterval: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		MinPauseBetweenCheckpoints: FormControl<number | null | undefined>,
	}
	export function CreateCheckpointConfigurationDescriptionFormGroup() {
		return new FormGroup<CheckpointConfigurationDescriptionFormProperties>({
			ConfigurationType: new FormControl<CheckpointConfigurationDescriptionConfigurationType | null | undefined>(undefined),
			CheckpointingEnabled: new FormControl<boolean | null | undefined>(undefined),
			CheckpointInterval: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MinPauseBetweenCheckpoints: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export enum CheckpointConfigurationDescriptionConfigurationType { DEFAULT = 0, CUSTOM = 1 }


	/** Describes configuration parameters for CloudWatch logging for a Java-based Kinesis Data Analytics application. */
	export interface MonitoringConfigurationDescription {
		ConfigurationType?: CheckpointConfigurationDescriptionConfigurationType | null;
		MetricsLevel?: MonitoringConfigurationDescriptionMetricsLevel | null;
		LogLevel?: MonitoringConfigurationDescriptionLogLevel | null;
	}

	/** Describes configuration parameters for CloudWatch logging for a Java-based Kinesis Data Analytics application. */
	export interface MonitoringConfigurationDescriptionFormProperties {
		ConfigurationType: FormControl<CheckpointConfigurationDescriptionConfigurationType | null | undefined>,
		MetricsLevel: FormControl<MonitoringConfigurationDescriptionMetricsLevel | null | undefined>,
		LogLevel: FormControl<MonitoringConfigurationDescriptionLogLevel | null | undefined>,
	}
	export function CreateMonitoringConfigurationDescriptionFormGroup() {
		return new FormGroup<MonitoringConfigurationDescriptionFormProperties>({
			ConfigurationType: new FormControl<CheckpointConfigurationDescriptionConfigurationType | null | undefined>(undefined),
			MetricsLevel: new FormControl<MonitoringConfigurationDescriptionMetricsLevel | null | undefined>(undefined),
			LogLevel: new FormControl<MonitoringConfigurationDescriptionLogLevel | null | undefined>(undefined),
		});

	}

	export enum MonitoringConfigurationDescriptionMetricsLevel { APPLICATION = 0, TASK = 1, OPERATOR = 2, PARALLELISM = 3 }

	export enum MonitoringConfigurationDescriptionLogLevel { INFO = 0, WARN = 1, ERROR = 2, DEBUG = 3 }


	/** Describes parameters for how a Java-based Kinesis Data Analytics application executes multiple tasks simultaneously. */
	export interface ParallelismConfigurationDescription {
		ConfigurationType?: CheckpointConfigurationDescriptionConfigurationType | null;

		/** Minimum: 1 */
		Parallelism?: number | null;

		/** Minimum: 1 */
		ParallelismPerKPU?: number | null;

		/** Minimum: 1 */
		CurrentParallelism?: number | null;
		AutoScalingEnabled?: boolean | null;
	}

	/** Describes parameters for how a Java-based Kinesis Data Analytics application executes multiple tasks simultaneously. */
	export interface ParallelismConfigurationDescriptionFormProperties {
		ConfigurationType: FormControl<CheckpointConfigurationDescriptionConfigurationType | null | undefined>,

		/** Minimum: 1 */
		Parallelism: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		ParallelismPerKPU: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		CurrentParallelism: FormControl<number | null | undefined>,
		AutoScalingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateParallelismConfigurationDescriptionFormGroup() {
		return new FormGroup<ParallelismConfigurationDescriptionFormProperties>({
			ConfigurationType: new FormControl<CheckpointConfigurationDescriptionConfigurationType | null | undefined>(undefined),
			Parallelism: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			ParallelismPerKPU: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			CurrentParallelism: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			AutoScalingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes the execution properties for a Java-based Amazon Kinesis Data Analytics application. */
	export interface EnvironmentPropertyDescriptions {

		/** Maximum items: 50 */
		PropertyGroupDescriptions?: Array<PropertyGroup>;
	}

	/** Describes the execution properties for a Java-based Amazon Kinesis Data Analytics application. */
	export interface EnvironmentPropertyDescriptionsFormProperties {
	}
	export function CreateEnvironmentPropertyDescriptionsFormGroup() {
		return new FormGroup<EnvironmentPropertyDescriptionsFormProperties>({
		});

	}


	/** Property key-value pairs passed into a Java-based Kinesis Data Analytics application. */
	export interface PropertyGroup {

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		PropertyGroupId: string;

		/** Required */
		PropertyMap: PropertyMap;
	}

	/** Property key-value pairs passed into a Java-based Kinesis Data Analytics application. */
	export interface PropertyGroupFormProperties {

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		PropertyGroupId: FormControl<string | null | undefined>,
	}
	export function CreatePropertyGroupFormGroup() {
		return new FormGroup<PropertyGroupFormProperties>({
			PropertyGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(50), Validators.minLength(1)]),
		});

	}

	export interface PropertyMap {
	}
	export interface PropertyMapFormProperties {
	}
	export function CreatePropertyMapFormGroup() {
		return new FormGroup<PropertyMapFormProperties>({
		});

	}


	/** Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application. */
	export interface ApplicationSnapshotConfigurationDescription {

		/** Required */
		SnapshotsEnabled: boolean;
	}

	/** Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application. */
	export interface ApplicationSnapshotConfigurationDescriptionFormProperties {

		/** Required */
		SnapshotsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateApplicationSnapshotConfigurationDescriptionFormGroup() {
		return new FormGroup<ApplicationSnapshotConfigurationDescriptionFormProperties>({
			SnapshotsEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateApplicationRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: string;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		ApplicationDescription?: string | null;

		/** Required */
		RuntimeEnvironment: CreateApplicationRequestRuntimeEnvironment;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		ServiceExecutionRole: string;

		/** Specifies the creation parameters for an Amazon Kinesis Data Analytics application. */
		ApplicationConfiguration?: ApplicationConfiguration;
		CloudWatchLoggingOptions?: Array<CloudWatchLoggingOption>;

		/**
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateApplicationRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		ApplicationDescription: FormControl<string | null | undefined>,

		/** Required */
		RuntimeEnvironment: FormControl<CreateApplicationRequestRuntimeEnvironment | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		ServiceExecutionRole: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationRequestFormGroup() {
		return new FormGroup<CreateApplicationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			ApplicationDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			RuntimeEnvironment: new FormControl<CreateApplicationRequestRuntimeEnvironment | null | undefined>(undefined, [Validators.required]),
			ServiceExecutionRole: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}

	export enum CreateApplicationRequestRuntimeEnvironment { SQL_1_0 = 0, FLINK_1_6 = 1, FLINK_1_8 = 2 }


	/** Specifies the creation parameters for an Amazon Kinesis Data Analytics application. */
	export interface ApplicationConfiguration {

		/** Describes the inputs, outputs, and reference data sources for an SQL-based Kinesis Data Analytics application. */
		SqlApplicationConfiguration?: SqlApplicationConfiguration;

		/** Describes configuration parameters for a Java-based Amazon Kinesis Data Analytics application. */
		FlinkApplicationConfiguration?: FlinkApplicationConfiguration;

		/** Describes execution properties for a Java-based Kinesis Data Analytics application. */
		EnvironmentProperties?: EnvironmentProperties;

		/**
		 * Describes code configuration for a Java-based Kinesis Data Analytics application.
		 * Required
		 */
		ApplicationCodeConfiguration: ApplicationCodeConfiguration;

		/** Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application. */
		ApplicationSnapshotConfiguration?: ApplicationSnapshotConfiguration;
		VpcConfigurations?: Array<VpcConfiguration>;
	}

	/** Specifies the creation parameters for an Amazon Kinesis Data Analytics application. */
	export interface ApplicationConfigurationFormProperties {
	}
	export function CreateApplicationConfigurationFormGroup() {
		return new FormGroup<ApplicationConfigurationFormProperties>({
		});

	}


	/** Describes the inputs, outputs, and reference data sources for an SQL-based Kinesis Data Analytics application. */
	export interface SqlApplicationConfiguration {
		Inputs?: Array<Input>;
		Outputs?: Array<Output>;
		ReferenceDataSources?: Array<ReferenceDataSource>;
	}

	/** Describes the inputs, outputs, and reference data sources for an SQL-based Kinesis Data Analytics application. */
	export interface SqlApplicationConfigurationFormProperties {
	}
	export function CreateSqlApplicationConfigurationFormGroup() {
		return new FormGroup<SqlApplicationConfigurationFormProperties>({
		});

	}


	/** Describes configuration parameters for a Java-based Amazon Kinesis Data Analytics application. */
	export interface FlinkApplicationConfiguration {

		/** Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/concepts/programming-model.html#checkpoints-for-fault-tolerance"> Checkpoints for Fault Tolerance</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink Documentation</a>. */
		CheckpointConfiguration?: CheckpointConfiguration;

		/** Describes configuration parameters for Amazon CloudWatch logging for a Java-based Kinesis Data Analytics application. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>. */
		MonitoringConfiguration?: MonitoringConfiguration;

		/** Describes parameters for how a Java-based Amazon Kinesis Data Analytics application executes multiple tasks simultaneously. For more information about parallelism, see <a href="https://ci.apache.org/projects/flink/flink-docs-stable/dev/parallel.html">Parallel Execution</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink Documentation</a>. */
		ParallelismConfiguration?: ParallelismConfiguration;
	}

	/** Describes configuration parameters for a Java-based Amazon Kinesis Data Analytics application. */
	export interface FlinkApplicationConfigurationFormProperties {
	}
	export function CreateFlinkApplicationConfigurationFormGroup() {
		return new FormGroup<FlinkApplicationConfigurationFormProperties>({
		});

	}


	/** Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/concepts/programming-model.html#checkpoints-for-fault-tolerance"> Checkpoints for Fault Tolerance</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink Documentation</a>. */
	export interface CheckpointConfiguration {

		/** Required */
		ConfigurationType: CheckpointConfigurationDescriptionConfigurationType;
		CheckpointingEnabled?: boolean | null;

		/** Minimum: 1 */
		CheckpointInterval?: number | null;

		/** Minimum: 0 */
		MinPauseBetweenCheckpoints?: number | null;
	}

	/** Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/concepts/programming-model.html#checkpoints-for-fault-tolerance"> Checkpoints for Fault Tolerance</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink Documentation</a>. */
	export interface CheckpointConfigurationFormProperties {

		/** Required */
		ConfigurationType: FormControl<CheckpointConfigurationDescriptionConfigurationType | null | undefined>,
		CheckpointingEnabled: FormControl<boolean | null | undefined>,

		/** Minimum: 1 */
		CheckpointInterval: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		MinPauseBetweenCheckpoints: FormControl<number | null | undefined>,
	}
	export function CreateCheckpointConfigurationFormGroup() {
		return new FormGroup<CheckpointConfigurationFormProperties>({
			ConfigurationType: new FormControl<CheckpointConfigurationDescriptionConfigurationType | null | undefined>(undefined, [Validators.required]),
			CheckpointingEnabled: new FormControl<boolean | null | undefined>(undefined),
			CheckpointInterval: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MinPauseBetweenCheckpoints: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** Describes configuration parameters for Amazon CloudWatch logging for a Java-based Kinesis Data Analytics application. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>. */
	export interface MonitoringConfiguration {

		/** Required */
		ConfigurationType: CheckpointConfigurationDescriptionConfigurationType;
		MetricsLevel?: MonitoringConfigurationDescriptionMetricsLevel | null;
		LogLevel?: MonitoringConfigurationDescriptionLogLevel | null;
	}

	/** Describes configuration parameters for Amazon CloudWatch logging for a Java-based Kinesis Data Analytics application. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>. */
	export interface MonitoringConfigurationFormProperties {

		/** Required */
		ConfigurationType: FormControl<CheckpointConfigurationDescriptionConfigurationType | null | undefined>,
		MetricsLevel: FormControl<MonitoringConfigurationDescriptionMetricsLevel | null | undefined>,
		LogLevel: FormControl<MonitoringConfigurationDescriptionLogLevel | null | undefined>,
	}
	export function CreateMonitoringConfigurationFormGroup() {
		return new FormGroup<MonitoringConfigurationFormProperties>({
			ConfigurationType: new FormControl<CheckpointConfigurationDescriptionConfigurationType | null | undefined>(undefined, [Validators.required]),
			MetricsLevel: new FormControl<MonitoringConfigurationDescriptionMetricsLevel | null | undefined>(undefined),
			LogLevel: new FormControl<MonitoringConfigurationDescriptionLogLevel | null | undefined>(undefined),
		});

	}


	/** Describes parameters for how a Java-based Amazon Kinesis Data Analytics application executes multiple tasks simultaneously. For more information about parallelism, see <a href="https://ci.apache.org/projects/flink/flink-docs-stable/dev/parallel.html">Parallel Execution</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink Documentation</a>. */
	export interface ParallelismConfiguration {

		/** Required */
		ConfigurationType: CheckpointConfigurationDescriptionConfigurationType;

		/** Minimum: 1 */
		Parallelism?: number | null;

		/** Minimum: 1 */
		ParallelismPerKPU?: number | null;
		AutoScalingEnabled?: boolean | null;
	}

	/** Describes parameters for how a Java-based Amazon Kinesis Data Analytics application executes multiple tasks simultaneously. For more information about parallelism, see <a href="https://ci.apache.org/projects/flink/flink-docs-stable/dev/parallel.html">Parallel Execution</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink Documentation</a>. */
	export interface ParallelismConfigurationFormProperties {

		/** Required */
		ConfigurationType: FormControl<CheckpointConfigurationDescriptionConfigurationType | null | undefined>,

		/** Minimum: 1 */
		Parallelism: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		ParallelismPerKPU: FormControl<number | null | undefined>,
		AutoScalingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateParallelismConfigurationFormGroup() {
		return new FormGroup<ParallelismConfigurationFormProperties>({
			ConfigurationType: new FormControl<CheckpointConfigurationDescriptionConfigurationType | null | undefined>(undefined, [Validators.required]),
			Parallelism: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			ParallelismPerKPU: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			AutoScalingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes execution properties for a Java-based Kinesis Data Analytics application. */
	export interface EnvironmentProperties {

		/**
		 * Required
		 * Maximum items: 50
		 */
		PropertyGroups: Array<PropertyGroup>;
	}

	/** Describes execution properties for a Java-based Kinesis Data Analytics application. */
	export interface EnvironmentPropertiesFormProperties {
	}
	export function CreateEnvironmentPropertiesFormGroup() {
		return new FormGroup<EnvironmentPropertiesFormProperties>({
		});

	}


	/** Describes code configuration for a Java-based Kinesis Data Analytics application. */
	export interface ApplicationCodeConfiguration {

		/** Specifies either the application code, or the location of the application code, for a Java-based Amazon Kinesis Data Analytics application. */
		CodeContent?: CodeContent;

		/** Required */
		CodeContentType: ApplicationCodeConfigurationDescriptionCodeContentType;
	}

	/** Describes code configuration for a Java-based Kinesis Data Analytics application. */
	export interface ApplicationCodeConfigurationFormProperties {

		/** Required */
		CodeContentType: FormControl<ApplicationCodeConfigurationDescriptionCodeContentType | null | undefined>,
	}
	export function CreateApplicationCodeConfigurationFormGroup() {
		return new FormGroup<ApplicationCodeConfigurationFormProperties>({
			CodeContentType: new FormControl<ApplicationCodeConfigurationDescriptionCodeContentType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies either the application code, or the location of the application code, for a Java-based Amazon Kinesis Data Analytics application.  */
	export interface CodeContent {

		/**
		 * Max length: 102400
		 * Min length: 0
		 */
		TextContent?: string | null;

		/**
		 * Max length: 52428800
		 * Min length: 0
		 */
		ZipFileContent?: string | null;

		/** For a Java-based Amazon Kinesis Data Analytics application, provides a description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data. */
		S3ContentLocation?: S3ContentLocation;
	}

	/** Specifies either the application code, or the location of the application code, for a Java-based Amazon Kinesis Data Analytics application.  */
	export interface CodeContentFormProperties {

		/**
		 * Max length: 102400
		 * Min length: 0
		 */
		TextContent: FormControl<string | null | undefined>,

		/**
		 * Max length: 52428800
		 * Min length: 0
		 */
		ZipFileContent: FormControl<string | null | undefined>,
	}
	export function CreateCodeContentFormGroup() {
		return new FormGroup<CodeContentFormProperties>({
			TextContent: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(102400), Validators.minLength(0)]),
			ZipFileContent: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(52428800), Validators.minLength(0)]),
		});

	}


	/** For a Java-based Amazon Kinesis Data Analytics application, provides a description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data.  */
	export interface S3ContentLocation {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		BucketARN: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		FileKey: string;
		ObjectVersion?: string | null;
	}

	/** For a Java-based Amazon Kinesis Data Analytics application, provides a description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data.  */
	export interface S3ContentLocationFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		BucketARN: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		FileKey: FormControl<string | null | undefined>,
		ObjectVersion: FormControl<string | null | undefined>,
	}
	export function CreateS3ContentLocationFormGroup() {
		return new FormGroup<S3ContentLocationFormProperties>({
			BucketARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
			FileKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			ObjectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application. */
	export interface ApplicationSnapshotConfiguration {

		/** Required */
		SnapshotsEnabled: boolean;
	}

	/** Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application. */
	export interface ApplicationSnapshotConfigurationFormProperties {

		/** Required */
		SnapshotsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateApplicationSnapshotConfigurationFormGroup() {
		return new FormGroup<ApplicationSnapshotConfigurationFormProperties>({
			SnapshotsEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>. */
	export interface Tag {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Value?: string | null;
	}

	/** A key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>. */
	export interface TagFormProperties {

		/**
		 * Required
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
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
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

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
		});

	}

	export interface CreateApplicationSnapshotResponse {
	}
	export interface CreateApplicationSnapshotResponseFormProperties {
	}
	export function CreateCreateApplicationSnapshotResponseFormGroup() {
		return new FormGroup<CreateApplicationSnapshotResponseFormProperties>({
		});

	}

	export interface CreateApplicationSnapshotRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		SnapshotName: string;
	}
	export interface CreateApplicationSnapshotRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		SnapshotName: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationSnapshotRequestFormGroup() {
		return new FormGroup<CreateApplicationSnapshotRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			SnapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}

	export interface UnsupportedOperationException {
	}
	export interface UnsupportedOperationExceptionFormProperties {
	}
	export function CreateUnsupportedOperationExceptionFormGroup() {
		return new FormGroup<UnsupportedOperationExceptionFormProperties>({
		});

	}

	export interface DeleteApplicationResponse {
	}
	export interface DeleteApplicationResponseFormProperties {
	}
	export function CreateDeleteApplicationResponseFormGroup() {
		return new FormGroup<DeleteApplicationResponseFormProperties>({
		});

	}

	export interface DeleteApplicationRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: string;

		/** Required */
		CreateTimestamp: Date;
	}
	export interface DeleteApplicationRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		CreateTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateDeleteApplicationRequestFormGroup() {
		return new FormGroup<DeleteApplicationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			CreateTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteApplicationCloudWatchLoggingOptionResponse {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId?: number | null;
		CloudWatchLoggingOptionDescriptions?: Array<CloudWatchLoggingOptionDescription>;
	}
	export interface DeleteApplicationCloudWatchLoggingOptionResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateDeleteApplicationCloudWatchLoggingOptionResponseFormGroup() {
		return new FormGroup<DeleteApplicationCloudWatchLoggingOptionResponseFormProperties>({
			ApplicationARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(999999999)]),
		});

	}

	export interface DeleteApplicationCloudWatchLoggingOptionRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		CurrentApplicationVersionId: number;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		CloudWatchLoggingOptionId: string;
	}
	export interface DeleteApplicationCloudWatchLoggingOptionRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		CurrentApplicationVersionId: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		CloudWatchLoggingOptionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteApplicationCloudWatchLoggingOptionRequestFormGroup() {
		return new FormGroup<DeleteApplicationCloudWatchLoggingOptionRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(999999999)]),
			CloudWatchLoggingOptionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(50), Validators.minLength(1)]),
		});

	}

	export interface DeleteApplicationInputProcessingConfigurationResponse {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId?: number | null;
	}
	export interface DeleteApplicationInputProcessingConfigurationResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateDeleteApplicationInputProcessingConfigurationResponseFormGroup() {
		return new FormGroup<DeleteApplicationInputProcessingConfigurationResponseFormProperties>({
			ApplicationARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(999999999)]),
		});

	}

	export interface DeleteApplicationInputProcessingConfigurationRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		CurrentApplicationVersionId: number;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		InputId: string;
	}
	export interface DeleteApplicationInputProcessingConfigurationRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		CurrentApplicationVersionId: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		InputId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteApplicationInputProcessingConfigurationRequestFormGroup() {
		return new FormGroup<DeleteApplicationInputProcessingConfigurationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(999999999)]),
			InputId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(50), Validators.minLength(1)]),
		});

	}

	export interface DeleteApplicationOutputResponse {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId?: number | null;
	}
	export interface DeleteApplicationOutputResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateDeleteApplicationOutputResponseFormGroup() {
		return new FormGroup<DeleteApplicationOutputResponseFormProperties>({
			ApplicationARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(999999999)]),
		});

	}

	export interface DeleteApplicationOutputRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		CurrentApplicationVersionId: number;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		OutputId: string;
	}
	export interface DeleteApplicationOutputRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		CurrentApplicationVersionId: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		OutputId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteApplicationOutputRequestFormGroup() {
		return new FormGroup<DeleteApplicationOutputRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(999999999)]),
			OutputId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(50), Validators.minLength(1)]),
		});

	}

	export interface DeleteApplicationReferenceDataSourceResponse {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId?: number | null;
	}
	export interface DeleteApplicationReferenceDataSourceResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateDeleteApplicationReferenceDataSourceResponseFormGroup() {
		return new FormGroup<DeleteApplicationReferenceDataSourceResponseFormProperties>({
			ApplicationARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(999999999)]),
		});

	}

	export interface DeleteApplicationReferenceDataSourceRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		CurrentApplicationVersionId: number;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ReferenceId: string;
	}
	export interface DeleteApplicationReferenceDataSourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		CurrentApplicationVersionId: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ReferenceId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteApplicationReferenceDataSourceRequestFormGroup() {
		return new FormGroup<DeleteApplicationReferenceDataSourceRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(999999999)]),
			ReferenceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(50), Validators.minLength(1)]),
		});

	}

	export interface DeleteApplicationSnapshotResponse {
	}
	export interface DeleteApplicationSnapshotResponseFormProperties {
	}
	export function CreateDeleteApplicationSnapshotResponseFormGroup() {
		return new FormGroup<DeleteApplicationSnapshotResponseFormProperties>({
		});

	}

	export interface DeleteApplicationSnapshotRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		SnapshotName: string;

		/** Required */
		SnapshotCreationTimestamp: Date;
	}
	export interface DeleteApplicationSnapshotRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		SnapshotName: FormControl<string | null | undefined>,

		/** Required */
		SnapshotCreationTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateDeleteApplicationSnapshotRequestFormGroup() {
		return new FormGroup<DeleteApplicationSnapshotRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			SnapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			SnapshotCreationTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteApplicationVpcConfigurationResponse {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId?: number | null;
	}
	export interface DeleteApplicationVpcConfigurationResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateDeleteApplicationVpcConfigurationResponseFormGroup() {
		return new FormGroup<DeleteApplicationVpcConfigurationResponseFormProperties>({
			ApplicationARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(999999999)]),
		});

	}

	export interface DeleteApplicationVpcConfigurationRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		CurrentApplicationVersionId: number;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		VpcConfigurationId: string;
	}
	export interface DeleteApplicationVpcConfigurationRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		CurrentApplicationVersionId: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		VpcConfigurationId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteApplicationVpcConfigurationRequestFormGroup() {
		return new FormGroup<DeleteApplicationVpcConfigurationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(999999999)]),
			VpcConfigurationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(50), Validators.minLength(1)]),
		});

	}

	export interface DescribeApplicationResponse {

		/**
		 * Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations.
		 * Required
		 */
		ApplicationDetail: ApplicationDetail;
	}
	export interface DescribeApplicationResponseFormProperties {
	}
	export function CreateDescribeApplicationResponseFormGroup() {
		return new FormGroup<DescribeApplicationResponseFormProperties>({
		});

	}

	export interface DescribeApplicationRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: string;
		IncludeAdditionalDetails?: boolean | null;
	}
	export interface DescribeApplicationRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: FormControl<string | null | undefined>,
		IncludeAdditionalDetails: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeApplicationRequestFormGroup() {
		return new FormGroup<DescribeApplicationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			IncludeAdditionalDetails: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeApplicationSnapshotResponse {

		/**
		 * Provides details about a snapshot of application state.
		 * Required
		 */
		SnapshotDetails: SnapshotDetails;
	}
	export interface DescribeApplicationSnapshotResponseFormProperties {
	}
	export function CreateDescribeApplicationSnapshotResponseFormGroup() {
		return new FormGroup<DescribeApplicationSnapshotResponseFormProperties>({
		});

	}


	/** Provides details about a snapshot of application state. */
	export interface SnapshotDetails {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		SnapshotName: string;

		/** Required */
		SnapshotStatus: SnapshotDetailsSnapshotStatus;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId: number;
		SnapshotCreationTimestamp?: Date | null;
	}

	/** Provides details about a snapshot of application state. */
	export interface SnapshotDetailsFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		SnapshotName: FormControl<string | null | undefined>,

		/** Required */
		SnapshotStatus: FormControl<SnapshotDetailsSnapshotStatus | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId: FormControl<number | null | undefined>,
		SnapshotCreationTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateSnapshotDetailsFormGroup() {
		return new FormGroup<SnapshotDetailsFormProperties>({
			SnapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			SnapshotStatus: new FormControl<SnapshotDetailsSnapshotStatus | null | undefined>(undefined, [Validators.required]),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(999999999)]),
			SnapshotCreationTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum SnapshotDetailsSnapshotStatus { CREATING = 0, READY = 1, DELETING = 2, FAILED = 3 }

	export interface DescribeApplicationSnapshotRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		SnapshotName: string;
	}
	export interface DescribeApplicationSnapshotRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		SnapshotName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeApplicationSnapshotRequestFormGroup() {
		return new FormGroup<DescribeApplicationSnapshotRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			SnapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}

	export interface DiscoverInputSchemaResponse {

		/** For an SQL-based Amazon Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. */
		InputSchema?: SourceSchema;
		ParsedInputRecords?: Array<Array<string>>;
		ProcessedInputRecords?: Array<string>;
		RawInputRecords?: Array<string>;
	}
	export interface DiscoverInputSchemaResponseFormProperties {
	}
	export function CreateDiscoverInputSchemaResponseFormGroup() {
		return new FormGroup<DiscoverInputSchemaResponseFormProperties>({
		});

	}

	export interface DiscoverInputSchemaRequest {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN?: string | null;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		ServiceExecutionRole: string;

		/** Describes the point at which the application reads from the streaming source. */
		InputStartingPositionConfiguration?: InputStartingPositionConfiguration;

		/** For an SQL-based Amazon Kinesis Data Analytics application, provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket and the name of the Amazon S3 object that contains the data. */
		S3Configuration?: S3Configuration;

		/** For an SQL-based Amazon Kinesis Data Analytics application, describes a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>. */
		InputProcessingConfiguration?: InputProcessingConfiguration;
	}
	export interface DiscoverInputSchemaRequestFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARN: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		ServiceExecutionRole: FormControl<string | null | undefined>,
	}
	export function CreateDiscoverInputSchemaRequestFormGroup() {
		return new FormGroup<DiscoverInputSchemaRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			ServiceExecutionRole: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket and the name of the Amazon S3 object that contains the data. */
	export interface S3Configuration {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		BucketARN: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		FileKey: string;
	}

	/** For an SQL-based Amazon Kinesis Data Analytics application, provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket and the name of the Amazon S3 object that contains the data. */
	export interface S3ConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		BucketARN: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		FileKey: FormControl<string | null | undefined>,
	}
	export function CreateS3ConfigurationFormGroup() {
		return new FormGroup<S3ConfigurationFormProperties>({
			BucketARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
			FileKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}

	export interface UnableToDetectSchemaException {
	}
	export interface UnableToDetectSchemaExceptionFormProperties {
	}
	export function CreateUnableToDetectSchemaExceptionFormGroup() {
		return new FormGroup<UnableToDetectSchemaExceptionFormProperties>({
		});

	}

	export interface ResourceProvisionedThroughputExceededException {
	}
	export interface ResourceProvisionedThroughputExceededExceptionFormProperties {
	}
	export function CreateResourceProvisionedThroughputExceededExceptionFormGroup() {
		return new FormGroup<ResourceProvisionedThroughputExceededExceptionFormProperties>({
		});

	}

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
		});

	}

	export interface ListApplicationSnapshotsResponse {
		SnapshotSummaries?: Array<SnapshotDetails>;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListApplicationSnapshotsResponseFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationSnapshotsResponseFormGroup() {
		return new FormGroup<ListApplicationSnapshotsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export interface ListApplicationSnapshotsRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: string;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		Limit?: number | null;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListApplicationSnapshotsRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		Limit: FormControl<number | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationSnapshotsRequestFormGroup() {
		return new FormGroup<ListApplicationSnapshotsRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export interface ListApplicationsResponse {

		/** Required */
		ApplicationSummaries: Array<ApplicationSummary>;

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		NextToken?: string | null;
	}
	export interface ListApplicationsResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationsResponseFormGroup() {
		return new FormGroup<ListApplicationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
		});

	}


	/** Provides application summary information, including the application Amazon Resource Name (ARN), name, and status. */
	export interface ApplicationSummary {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN: string;

		/** Required */
		ApplicationStatus: ApplicationDetailApplicationStatus;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId: number;

		/** Required */
		RuntimeEnvironment: ApplicationSummaryRuntimeEnvironment;
	}

	/** Provides application summary information, including the application Amazon Resource Name (ARN), name, and status. */
	export interface ApplicationSummaryFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ApplicationARN: FormControl<string | null | undefined>,

		/** Required */
		ApplicationStatus: FormControl<ApplicationDetailApplicationStatus | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		ApplicationVersionId: FormControl<number | null | undefined>,

		/** Required */
		RuntimeEnvironment: FormControl<ApplicationSummaryRuntimeEnvironment | null | undefined>,
	}
	export function CreateApplicationSummaryFormGroup() {
		return new FormGroup<ApplicationSummaryFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			ApplicationARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
			ApplicationStatus: new FormControl<ApplicationDetailApplicationStatus | null | undefined>(undefined, [Validators.required]),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(999999999)]),
			RuntimeEnvironment: new FormControl<ApplicationSummaryRuntimeEnvironment | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ApplicationSummaryRuntimeEnvironment { SQL_1_0 = 0, FLINK_1_6 = 1, FLINK_1_8 = 2 }

	export interface ListApplicationsRequest {

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		Limit?: number | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		NextToken?: string | null;
	}
	export interface ListApplicationsRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		Limit: FormControl<number | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationsRequestFormGroup() {
		return new FormGroup<ListApplicationsRequestFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
		});

	}

	export interface ListTagsForResourceResponse {

		/**
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:kinesisanalytics:[a-z]\{2\}-[a-z]\+-\d\{1\}\+:\d\{12\}\+:application/[a-zA-Z0-9_.-]\{1,128\}
		 */
		ResourceARN: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:kinesisanalytics:[a-z]\{2\}-[a-z]\+-\d\{1\}\+:\d\{12\}\+:application/[a-zA-Z0-9_.-]\{1,128\}
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}

	export interface StartApplicationResponse {
	}
	export interface StartApplicationResponseFormProperties {
	}
	export function CreateStartApplicationResponseFormGroup() {
		return new FormGroup<StartApplicationResponseFormProperties>({
		});

	}

	export interface StartApplicationRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: string;

		/**
		 * Describes the starting parameters for an Amazon Kinesis Data Analytics application.
		 * Required
		 */
		RunConfiguration: RunConfiguration;
	}
	export interface StartApplicationRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: FormControl<string | null | undefined>,
	}
	export function CreateStartApplicationRequestFormGroup() {
		return new FormGroup<StartApplicationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}


	/** Describes the starting parameters for an Amazon Kinesis Data Analytics application. */
	export interface RunConfiguration {

		/** Describes the starting parameters for an Apache Flink-based Kinesis Data Analytics application. */
		FlinkRunConfiguration?: FlinkRunConfiguration;
		SqlRunConfigurations?: Array<SqlRunConfiguration>;

		/** Specifies the method and snapshot to use when restarting an application using previously saved application state. */
		ApplicationRestoreConfiguration?: ApplicationRestoreConfiguration;
	}

	/** Describes the starting parameters for an Amazon Kinesis Data Analytics application. */
	export interface RunConfigurationFormProperties {
	}
	export function CreateRunConfigurationFormGroup() {
		return new FormGroup<RunConfigurationFormProperties>({
		});

	}


	/** Describes the starting parameters for an Apache Flink-based Kinesis Data Analytics application. */
	export interface FlinkRunConfiguration {
		AllowNonRestoredState?: boolean | null;
	}

	/** Describes the starting parameters for an Apache Flink-based Kinesis Data Analytics application. */
	export interface FlinkRunConfigurationFormProperties {
		AllowNonRestoredState: FormControl<boolean | null | undefined>,
	}
	export function CreateFlinkRunConfigurationFormGroup() {
		return new FormGroup<FlinkRunConfigurationFormProperties>({
			AllowNonRestoredState: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes the starting parameters for an SQL-based Kinesis Data Analytics application. */
	export interface SqlRunConfiguration {

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		InputId: string;

		/**
		 * Describes the point at which the application reads from the streaming source.
		 * Required
		 */
		InputStartingPositionConfiguration: InputStartingPositionConfiguration;
	}

	/** Describes the starting parameters for an SQL-based Kinesis Data Analytics application. */
	export interface SqlRunConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		InputId: FormControl<string | null | undefined>,
	}
	export function CreateSqlRunConfigurationFormGroup() {
		return new FormGroup<SqlRunConfigurationFormProperties>({
			InputId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(50), Validators.minLength(1)]),
		});

	}

	export interface StopApplicationResponse {
	}
	export interface StopApplicationResponseFormProperties {
	}
	export function CreateStopApplicationResponseFormGroup() {
		return new FormGroup<StopApplicationResponseFormProperties>({
		});

	}

	export interface StopApplicationRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: string;
	}
	export interface StopApplicationRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: FormControl<string | null | undefined>,
	}
	export function CreateStopApplicationRequestFormGroup() {
		return new FormGroup<StopApplicationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:kinesisanalytics:[a-z]\{2\}-[a-z]\+-\d\{1\}\+:\d\{12\}\+:application/[a-zA-Z0-9_.-]\{1,128\}
		 */
		ResourceARN: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:kinesisanalytics:[a-z]\{2\}-[a-z]\+-\d\{1\}\+:\d\{12\}\+:application/[a-zA-Z0-9_.-]\{1,128\}
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:kinesisanalytics:[a-z]\{2\}-[a-z]\+-\d\{1\}\+:\d\{12\}\+:application/[a-zA-Z0-9_.-]\{1,128\}
		 */
		ResourceARN: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:kinesisanalytics:[a-z]\{2\}-[a-z]\+-\d\{1\}\+:\d\{12\}\+:application/[a-zA-Z0-9_.-]\{1,128\}
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}

	export interface UpdateApplicationResponse {

		/**
		 * Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations.
		 * Required
		 */
		ApplicationDetail: ApplicationDetail;
	}
	export interface UpdateApplicationResponseFormProperties {
	}
	export function CreateUpdateApplicationResponseFormGroup() {
		return new FormGroup<UpdateApplicationResponseFormProperties>({
		});

	}

	export interface UpdateApplicationRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		CurrentApplicationVersionId: number;

		/** Describes updates to an application's configuration. */
		ApplicationConfigurationUpdate?: ApplicationConfigurationUpdate;

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		ServiceExecutionRoleUpdate?: string | null;

		/** Describes the updates to the starting parameters for a Kinesis Data Analytics application. */
		RunConfigurationUpdate?: RunConfigurationUpdate;
		CloudWatchLoggingOptionUpdates?: Array<CloudWatchLoggingOptionUpdate>;
	}
	export interface UpdateApplicationRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ApplicationName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 999999999
		 */
		CurrentApplicationVersionId: FormControl<number | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		ServiceExecutionRoleUpdate: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationRequestFormGroup() {
		return new FormGroup<UpdateApplicationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(999999999)]),
			ServiceExecutionRoleUpdate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** Describes updates to an application's configuration. */
	export interface ApplicationConfigurationUpdate {

		/** Describes updates to the input streams, destination streams, and reference data sources for an SQL-based Kinesis Data Analytics application. */
		SqlApplicationConfigurationUpdate?: SqlApplicationConfigurationUpdate;

		/** Describes updates to a Java-based Amazon Kinesis Data Analytics application. */
		ApplicationCodeConfigurationUpdate?: ApplicationCodeConfigurationUpdate;

		/** Describes updates to the configuration parameters for a Java-based Amazon Kinesis Data Analytics application. */
		FlinkApplicationConfigurationUpdate?: FlinkApplicationConfigurationUpdate;

		/** Describes updates to the execution property groups for a Java-based Amazon Kinesis Data Analytics application. */
		EnvironmentPropertyUpdates?: EnvironmentPropertyUpdates;

		/** Describes updates to whether snapshots are enabled for a Java-based Kinesis Data Analytics application. */
		ApplicationSnapshotConfigurationUpdate?: ApplicationSnapshotConfigurationUpdate;
		VpcConfigurationUpdates?: Array<VpcConfigurationUpdate>;
	}

	/** Describes updates to an application's configuration. */
	export interface ApplicationConfigurationUpdateFormProperties {
	}
	export function CreateApplicationConfigurationUpdateFormGroup() {
		return new FormGroup<ApplicationConfigurationUpdateFormProperties>({
		});

	}


	/** Describes updates to the input streams, destination streams, and reference data sources for an SQL-based Kinesis Data Analytics application. */
	export interface SqlApplicationConfigurationUpdate {
		InputUpdates?: Array<InputUpdate>;
		OutputUpdates?: Array<OutputUpdate>;
		ReferenceDataSourceUpdates?: Array<ReferenceDataSourceUpdate>;
	}

	/** Describes updates to the input streams, destination streams, and reference data sources for an SQL-based Kinesis Data Analytics application. */
	export interface SqlApplicationConfigurationUpdateFormProperties {
	}
	export function CreateSqlApplicationConfigurationUpdateFormGroup() {
		return new FormGroup<SqlApplicationConfigurationUpdateFormProperties>({
		});

	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, describes updates to a specific input configuration (identified by the <code>InputId</code> of an application).  */
	export interface InputUpdate {

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		InputId: string;

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		NamePrefixUpdate?: string | null;

		/** For an SQL-based Amazon Kinesis Data Analytics application, describes updates to an <a>InputProcessingConfiguration</a>. */
		InputProcessingConfigurationUpdate?: InputProcessingConfigurationUpdate;

		/** When you update the input configuration for an SQL-based Amazon Kinesis Data Analytics application, provides information about an Amazon Kinesis stream as the streaming source. */
		KinesisStreamsInputUpdate?: KinesisStreamsInputUpdate;

		/** For an SQL-based Amazon Kinesis Data Analytics application, when updating application input configuration, provides information about a Kinesis Data Firehose delivery stream as the streaming source. */
		KinesisFirehoseInputUpdate?: KinesisFirehoseInputUpdate;

		/** Describes updates for an SQL-based Amazon Kinesis Data Analytics application's input schema. */
		InputSchemaUpdate?: InputSchemaUpdate;

		/** For an SQL-based Amazon Kinesis Data Analytics application, provides updates to the parallelism count. */
		InputParallelismUpdate?: InputParallelismUpdate;
	}

	/** For an SQL-based Amazon Kinesis Data Analytics application, describes updates to a specific input configuration (identified by the <code>InputId</code> of an application).  */
	export interface InputUpdateFormProperties {

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		InputId: FormControl<string | null | undefined>,

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		NamePrefixUpdate: FormControl<string | null | undefined>,
	}
	export function CreateInputUpdateFormGroup() {
		return new FormGroup<InputUpdateFormProperties>({
			InputId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(50), Validators.minLength(1)]),
			NamePrefixUpdate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32), Validators.minLength(1)]),
		});

	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, describes updates to an <a>InputProcessingConfiguration</a>. */
	export interface InputProcessingConfigurationUpdate {

		/**
		 * For an SQL-based Amazon Kinesis Data Analytics application, represents an update to the <a>InputLambdaProcessor</a> that is used to preprocess the records in the stream.
		 * Required
		 */
		InputLambdaProcessorUpdate: InputLambdaProcessorUpdate;
	}

	/** For an SQL-based Amazon Kinesis Data Analytics application, describes updates to an <a>InputProcessingConfiguration</a>. */
	export interface InputProcessingConfigurationUpdateFormProperties {
	}
	export function CreateInputProcessingConfigurationUpdateFormGroup() {
		return new FormGroup<InputProcessingConfigurationUpdateFormProperties>({
		});

	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, represents an update to the <a>InputLambdaProcessor</a> that is used to preprocess the records in the stream. */
	export interface InputLambdaProcessorUpdate {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARNUpdate: string;
	}

	/** For an SQL-based Amazon Kinesis Data Analytics application, represents an update to the <a>InputLambdaProcessor</a> that is used to preprocess the records in the stream. */
	export interface InputLambdaProcessorUpdateFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARNUpdate: FormControl<string | null | undefined>,
	}
	export function CreateInputLambdaProcessorUpdateFormGroup() {
		return new FormGroup<InputLambdaProcessorUpdateFormProperties>({
			ResourceARNUpdate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** When you update the input configuration for an SQL-based Amazon Kinesis Data Analytics application, provides information about an Amazon Kinesis stream as the streaming source. */
	export interface KinesisStreamsInputUpdate {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARNUpdate: string;
	}

	/** When you update the input configuration for an SQL-based Amazon Kinesis Data Analytics application, provides information about an Amazon Kinesis stream as the streaming source. */
	export interface KinesisStreamsInputUpdateFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARNUpdate: FormControl<string | null | undefined>,
	}
	export function CreateKinesisStreamsInputUpdateFormGroup() {
		return new FormGroup<KinesisStreamsInputUpdateFormProperties>({
			ResourceARNUpdate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, when updating application input configuration, provides information about a Kinesis Data Firehose delivery stream as the streaming source. */
	export interface KinesisFirehoseInputUpdate {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARNUpdate: string;
	}

	/** For an SQL-based Amazon Kinesis Data Analytics application, when updating application input configuration, provides information about a Kinesis Data Firehose delivery stream as the streaming source. */
	export interface KinesisFirehoseInputUpdateFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARNUpdate: FormControl<string | null | undefined>,
	}
	export function CreateKinesisFirehoseInputUpdateFormGroup() {
		return new FormGroup<KinesisFirehoseInputUpdateFormProperties>({
			ResourceARNUpdate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** Describes updates for an SQL-based Amazon Kinesis Data Analytics application's input schema. */
	export interface InputSchemaUpdate {

		/** For an SQL-based Amazon Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream. */
		RecordFormatUpdate?: RecordFormat;

		/** Pattern: UTF-8 */
		RecordEncodingUpdate?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 1000
		 */
		RecordColumnUpdates?: Array<RecordColumn>;
	}

	/** Describes updates for an SQL-based Amazon Kinesis Data Analytics application's input schema. */
	export interface InputSchemaUpdateFormProperties {

		/** Pattern: UTF-8 */
		RecordEncodingUpdate: FormControl<string | null | undefined>,
	}
	export function CreateInputSchemaUpdateFormGroup() {
		return new FormGroup<InputSchemaUpdateFormProperties>({
			RecordEncodingUpdate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, provides updates to the parallelism count. */
	export interface InputParallelismUpdate {

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 64
		 */
		CountUpdate: number;
	}

	/** For an SQL-based Amazon Kinesis Data Analytics application, provides updates to the parallelism count. */
	export interface InputParallelismUpdateFormProperties {

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 64
		 */
		CountUpdate: FormControl<number | null | undefined>,
	}
	export function CreateInputParallelismUpdateFormGroup() {
		return new FormGroup<InputParallelismUpdateFormProperties>({
			CountUpdate: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(64)]),
		});

	}


	/**  For an SQL-based Amazon Kinesis Data Analytics application, describes updates to the output configuration identified by the <code>OutputId</code>.  */
	export interface OutputUpdate {

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		OutputId: string;

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		NameUpdate?: string | null;

		/** When you update an SQL-based Amazon Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis data stream that is configured as the destination. */
		KinesisStreamsOutputUpdate?: KinesisStreamsOutputUpdate;

		/** For an SQL-based Amazon Kinesis Data Analytics application, when updating an output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis Data Firehose delivery stream that is configured as the destination. */
		KinesisFirehoseOutputUpdate?: KinesisFirehoseOutputUpdate;

		/** When you update an SQL-based Amazon Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about an AWS Lambda function that is configured as the destination. */
		LambdaOutputUpdate?: LambdaOutputUpdate;

		/** Describes the data format when records are written to the destination in an SQL-based Amazon Kinesis Data Analytics application. */
		DestinationSchemaUpdate?: DestinationSchema;
	}

	/**  For an SQL-based Amazon Kinesis Data Analytics application, describes updates to the output configuration identified by the <code>OutputId</code>.  */
	export interface OutputUpdateFormProperties {

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		OutputId: FormControl<string | null | undefined>,

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		NameUpdate: FormControl<string | null | undefined>,
	}
	export function CreateOutputUpdateFormGroup() {
		return new FormGroup<OutputUpdateFormProperties>({
			OutputId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(50), Validators.minLength(1)]),
			NameUpdate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32), Validators.minLength(1)]),
		});

	}


	/** When you update an SQL-based Amazon Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis data stream that is configured as the destination. */
	export interface KinesisStreamsOutputUpdate {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARNUpdate: string;
	}

	/** When you update an SQL-based Amazon Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis data stream that is configured as the destination. */
	export interface KinesisStreamsOutputUpdateFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARNUpdate: FormControl<string | null | undefined>,
	}
	export function CreateKinesisStreamsOutputUpdateFormGroup() {
		return new FormGroup<KinesisStreamsOutputUpdateFormProperties>({
			ResourceARNUpdate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, when updating an output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis Data Firehose delivery stream that is configured as the destination. */
	export interface KinesisFirehoseOutputUpdate {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARNUpdate: string;
	}

	/** For an SQL-based Amazon Kinesis Data Analytics application, when updating an output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis Data Firehose delivery stream that is configured as the destination. */
	export interface KinesisFirehoseOutputUpdateFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARNUpdate: FormControl<string | null | undefined>,
	}
	export function CreateKinesisFirehoseOutputUpdateFormGroup() {
		return new FormGroup<KinesisFirehoseOutputUpdateFormProperties>({
			ResourceARNUpdate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** When you update an SQL-based Amazon Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about an AWS Lambda function that is configured as the destination. */
	export interface LambdaOutputUpdate {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARNUpdate: string;
	}

	/** When you update an SQL-based Amazon Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about an AWS Lambda function that is configured as the destination. */
	export interface LambdaOutputUpdateFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		ResourceARNUpdate: FormControl<string | null | undefined>,
	}
	export function CreateLambdaOutputUpdateFormGroup() {
		return new FormGroup<LambdaOutputUpdateFormProperties>({
			ResourceARNUpdate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** When you update a reference data source configuration for a SQL-based Amazon Kinesis Data Analytics application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created. */
	export interface ReferenceDataSourceUpdate {

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ReferenceId: string;

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		TableNameUpdate?: string | null;

		/** For an SQL-based Amazon Kinesis Data Analytics application, describes the Amazon S3 bucket name and object key name for an in-application reference table. */
		S3ReferenceDataSourceUpdate?: S3ReferenceDataSourceUpdate;

		/** For an SQL-based Amazon Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. */
		ReferenceSchemaUpdate?: SourceSchema;
	}

	/** When you update a reference data source configuration for a SQL-based Amazon Kinesis Data Analytics application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created. */
	export interface ReferenceDataSourceUpdateFormProperties {

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ReferenceId: FormControl<string | null | undefined>,

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		TableNameUpdate: FormControl<string | null | undefined>,
	}
	export function CreateReferenceDataSourceUpdateFormGroup() {
		return new FormGroup<ReferenceDataSourceUpdateFormProperties>({
			ReferenceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(50), Validators.minLength(1)]),
			TableNameUpdate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32), Validators.minLength(1)]),
		});

	}


	/** For an SQL-based Amazon Kinesis Data Analytics application, describes the Amazon S3 bucket name and object key name for an in-application reference table.  */
	export interface S3ReferenceDataSourceUpdate {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		BucketARNUpdate?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		FileKeyUpdate?: string | null;
	}

	/** For an SQL-based Amazon Kinesis Data Analytics application, describes the Amazon S3 bucket name and object key name for an in-application reference table.  */
	export interface S3ReferenceDataSourceUpdateFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		BucketARNUpdate: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		FileKeyUpdate: FormControl<string | null | undefined>,
	}
	export function CreateS3ReferenceDataSourceUpdateFormGroup() {
		return new FormGroup<S3ReferenceDataSourceUpdateFormProperties>({
			BucketARNUpdate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			FileKeyUpdate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}


	/** Describes updates to a Java-based Amazon Kinesis Data Analytics application. */
	export interface ApplicationCodeConfigurationUpdate {
		CodeContentTypeUpdate?: ApplicationCodeConfigurationDescriptionCodeContentType | null;

		/** Describes an update to the code of a Java-based Kinesis Data Analytics application. */
		CodeContentUpdate?: CodeContentUpdate;
	}

	/** Describes updates to a Java-based Amazon Kinesis Data Analytics application. */
	export interface ApplicationCodeConfigurationUpdateFormProperties {
		CodeContentTypeUpdate: FormControl<ApplicationCodeConfigurationDescriptionCodeContentType | null | undefined>,
	}
	export function CreateApplicationCodeConfigurationUpdateFormGroup() {
		return new FormGroup<ApplicationCodeConfigurationUpdateFormProperties>({
			CodeContentTypeUpdate: new FormControl<ApplicationCodeConfigurationDescriptionCodeContentType | null | undefined>(undefined),
		});

	}


	/** Describes an update to the code of a Java-based Kinesis Data Analytics application. */
	export interface CodeContentUpdate {

		/**
		 * Max length: 102400
		 * Min length: 0
		 */
		TextContentUpdate?: string | null;

		/**
		 * Max length: 52428800
		 * Min length: 0
		 */
		ZipFileContentUpdate?: string | null;

		/** Describes an update for the Amazon S3 code content location for a Java-based Amazon Kinesis Data Analytics application. */
		S3ContentLocationUpdate?: S3ContentLocationUpdate;
	}

	/** Describes an update to the code of a Java-based Kinesis Data Analytics application. */
	export interface CodeContentUpdateFormProperties {

		/**
		 * Max length: 102400
		 * Min length: 0
		 */
		TextContentUpdate: FormControl<string | null | undefined>,

		/**
		 * Max length: 52428800
		 * Min length: 0
		 */
		ZipFileContentUpdate: FormControl<string | null | undefined>,
	}
	export function CreateCodeContentUpdateFormGroup() {
		return new FormGroup<CodeContentUpdateFormProperties>({
			TextContentUpdate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(102400), Validators.minLength(0)]),
			ZipFileContentUpdate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(52428800), Validators.minLength(0)]),
		});

	}


	/** Describes an update for the Amazon S3 code content location for a Java-based Amazon Kinesis Data Analytics application. */
	export interface S3ContentLocationUpdate {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		BucketARNUpdate?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		FileKeyUpdate?: string | null;
		ObjectVersionUpdate?: string | null;
	}

	/** Describes an update for the Amazon S3 code content location for a Java-based Amazon Kinesis Data Analytics application. */
	export interface S3ContentLocationUpdateFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		BucketARNUpdate: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		FileKeyUpdate: FormControl<string | null | undefined>,
		ObjectVersionUpdate: FormControl<string | null | undefined>,
	}
	export function CreateS3ContentLocationUpdateFormGroup() {
		return new FormGroup<S3ContentLocationUpdateFormProperties>({
			BucketARNUpdate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			FileKeyUpdate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			ObjectVersionUpdate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes updates to the configuration parameters for a Java-based Amazon Kinesis Data Analytics application. */
	export interface FlinkApplicationConfigurationUpdate {

		/** Describes updates to the checkpointing parameters for a Java-based Amazon Kinesis Data Analytics application. */
		CheckpointConfigurationUpdate?: CheckpointConfigurationUpdate;

		/** Describes updates to configuration parameters for Amazon CloudWatch logging for a Java-based Kinesis Data Analytics application. */
		MonitoringConfigurationUpdate?: MonitoringConfigurationUpdate;

		/** Describes updates to parameters for how a Java-based Kinesis Data Analytics application executes multiple tasks simultaneously. */
		ParallelismConfigurationUpdate?: ParallelismConfigurationUpdate;
	}

	/** Describes updates to the configuration parameters for a Java-based Amazon Kinesis Data Analytics application. */
	export interface FlinkApplicationConfigurationUpdateFormProperties {
	}
	export function CreateFlinkApplicationConfigurationUpdateFormGroup() {
		return new FormGroup<FlinkApplicationConfigurationUpdateFormProperties>({
		});

	}


	/** Describes updates to the checkpointing parameters for a Java-based Amazon Kinesis Data Analytics application. */
	export interface CheckpointConfigurationUpdate {
		ConfigurationTypeUpdate?: CheckpointConfigurationDescriptionConfigurationType | null;
		CheckpointingEnabledUpdate?: boolean | null;

		/** Minimum: 1 */
		CheckpointIntervalUpdate?: number | null;

		/** Minimum: 0 */
		MinPauseBetweenCheckpointsUpdate?: number | null;
	}

	/** Describes updates to the checkpointing parameters for a Java-based Amazon Kinesis Data Analytics application. */
	export interface CheckpointConfigurationUpdateFormProperties {
		ConfigurationTypeUpdate: FormControl<CheckpointConfigurationDescriptionConfigurationType | null | undefined>,
		CheckpointingEnabledUpdate: FormControl<boolean | null | undefined>,

		/** Minimum: 1 */
		CheckpointIntervalUpdate: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		MinPauseBetweenCheckpointsUpdate: FormControl<number | null | undefined>,
	}
	export function CreateCheckpointConfigurationUpdateFormGroup() {
		return new FormGroup<CheckpointConfigurationUpdateFormProperties>({
			ConfigurationTypeUpdate: new FormControl<CheckpointConfigurationDescriptionConfigurationType | null | undefined>(undefined),
			CheckpointingEnabledUpdate: new FormControl<boolean | null | undefined>(undefined),
			CheckpointIntervalUpdate: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MinPauseBetweenCheckpointsUpdate: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** Describes updates to configuration parameters for Amazon CloudWatch logging for a Java-based Kinesis Data Analytics application. */
	export interface MonitoringConfigurationUpdate {
		ConfigurationTypeUpdate?: CheckpointConfigurationDescriptionConfigurationType | null;
		MetricsLevelUpdate?: MonitoringConfigurationDescriptionMetricsLevel | null;
		LogLevelUpdate?: MonitoringConfigurationDescriptionLogLevel | null;
	}

	/** Describes updates to configuration parameters for Amazon CloudWatch logging for a Java-based Kinesis Data Analytics application. */
	export interface MonitoringConfigurationUpdateFormProperties {
		ConfigurationTypeUpdate: FormControl<CheckpointConfigurationDescriptionConfigurationType | null | undefined>,
		MetricsLevelUpdate: FormControl<MonitoringConfigurationDescriptionMetricsLevel | null | undefined>,
		LogLevelUpdate: FormControl<MonitoringConfigurationDescriptionLogLevel | null | undefined>,
	}
	export function CreateMonitoringConfigurationUpdateFormGroup() {
		return new FormGroup<MonitoringConfigurationUpdateFormProperties>({
			ConfigurationTypeUpdate: new FormControl<CheckpointConfigurationDescriptionConfigurationType | null | undefined>(undefined),
			MetricsLevelUpdate: new FormControl<MonitoringConfigurationDescriptionMetricsLevel | null | undefined>(undefined),
			LogLevelUpdate: new FormControl<MonitoringConfigurationDescriptionLogLevel | null | undefined>(undefined),
		});

	}


	/** Describes updates to parameters for how a Java-based Kinesis Data Analytics application executes multiple tasks simultaneously. */
	export interface ParallelismConfigurationUpdate {
		ConfigurationTypeUpdate?: CheckpointConfigurationDescriptionConfigurationType | null;

		/** Minimum: 1 */
		ParallelismUpdate?: number | null;

		/** Minimum: 1 */
		ParallelismPerKPUUpdate?: number | null;
		AutoScalingEnabledUpdate?: boolean | null;
	}

	/** Describes updates to parameters for how a Java-based Kinesis Data Analytics application executes multiple tasks simultaneously. */
	export interface ParallelismConfigurationUpdateFormProperties {
		ConfigurationTypeUpdate: FormControl<CheckpointConfigurationDescriptionConfigurationType | null | undefined>,

		/** Minimum: 1 */
		ParallelismUpdate: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		ParallelismPerKPUUpdate: FormControl<number | null | undefined>,
		AutoScalingEnabledUpdate: FormControl<boolean | null | undefined>,
	}
	export function CreateParallelismConfigurationUpdateFormGroup() {
		return new FormGroup<ParallelismConfigurationUpdateFormProperties>({
			ConfigurationTypeUpdate: new FormControl<CheckpointConfigurationDescriptionConfigurationType | null | undefined>(undefined),
			ParallelismUpdate: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			ParallelismPerKPUUpdate: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			AutoScalingEnabledUpdate: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes updates to the execution property groups for a Java-based Amazon Kinesis Data Analytics application. */
	export interface EnvironmentPropertyUpdates {

		/**
		 * Required
		 * Maximum items: 50
		 */
		PropertyGroups: Array<PropertyGroup>;
	}

	/** Describes updates to the execution property groups for a Java-based Amazon Kinesis Data Analytics application. */
	export interface EnvironmentPropertyUpdatesFormProperties {
	}
	export function CreateEnvironmentPropertyUpdatesFormGroup() {
		return new FormGroup<EnvironmentPropertyUpdatesFormProperties>({
		});

	}


	/** Describes updates to whether snapshots are enabled for a Java-based Kinesis Data Analytics application. */
	export interface ApplicationSnapshotConfigurationUpdate {

		/** Required */
		SnapshotsEnabledUpdate: boolean;
	}

	/** Describes updates to whether snapshots are enabled for a Java-based Kinesis Data Analytics application. */
	export interface ApplicationSnapshotConfigurationUpdateFormProperties {

		/** Required */
		SnapshotsEnabledUpdate: FormControl<boolean | null | undefined>,
	}
	export function CreateApplicationSnapshotConfigurationUpdateFormGroup() {
		return new FormGroup<ApplicationSnapshotConfigurationUpdateFormProperties>({
			SnapshotsEnabledUpdate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes updates to the VPC configuration used by the application. */
	export interface VpcConfigurationUpdate {

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		VpcConfigurationId: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 16
		 */
		SubnetIdUpdates?: Array<string>;

		/**
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		SecurityGroupIdUpdates?: Array<string>;
	}

	/** Describes updates to the VPC configuration used by the application. */
	export interface VpcConfigurationUpdateFormProperties {

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		VpcConfigurationId: FormControl<string | null | undefined>,
	}
	export function CreateVpcConfigurationUpdateFormGroup() {
		return new FormGroup<VpcConfigurationUpdateFormProperties>({
			VpcConfigurationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(50), Validators.minLength(1)]),
		});

	}


	/** Describes the updates to the starting parameters for a Kinesis Data Analytics application. */
	export interface RunConfigurationUpdate {

		/** Describes the starting parameters for an Apache Flink-based Kinesis Data Analytics application. */
		FlinkRunConfiguration?: FlinkRunConfiguration;

		/** Specifies the method and snapshot to use when restarting an application using previously saved application state. */
		ApplicationRestoreConfiguration?: ApplicationRestoreConfiguration;
	}

	/** Describes the updates to the starting parameters for a Kinesis Data Analytics application. */
	export interface RunConfigurationUpdateFormProperties {
	}
	export function CreateRunConfigurationUpdateFormGroup() {
		return new FormGroup<RunConfigurationUpdateFormProperties>({
		});

	}


	/** Describes the Amazon CloudWatch logging option updates. */
	export interface CloudWatchLoggingOptionUpdate {

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		CloudWatchLoggingOptionId: string;

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		LogStreamARNUpdate?: string | null;
	}

	/** Describes the Amazon CloudWatch logging option updates. */
	export interface CloudWatchLoggingOptionUpdateFormProperties {

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		CloudWatchLoggingOptionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		LogStreamARNUpdate: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLoggingOptionUpdateFormGroup() {
		return new FormGroup<CloudWatchLoggingOptionUpdateFormProperties>({
			CloudWatchLoggingOptionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(50), Validators.minLength(1)]),
			LogStreamARNUpdate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

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

