import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddApplicationCloudWatchLoggingOptionResponse {
		ApplicationARN?: string;
		ApplicationVersionId?: number | null;
		CloudWatchLoggingOptionDescriptions?: Array<CloudWatchLoggingOptionDescription>;
	}
	export interface AddApplicationCloudWatchLoggingOptionResponseFormProperties {
		ApplicationARN: FormControl<string | null | undefined>,
		ApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateAddApplicationCloudWatchLoggingOptionResponseFormGroup() {
		return new FormGroup<AddApplicationCloudWatchLoggingOptionResponseFormProperties>({
			ApplicationARN: new FormControl<string | null | undefined>(undefined),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes the Amazon CloudWatch logging option. */
	export interface CloudWatchLoggingOptionDescription {
		CloudWatchLoggingOptionId?: string;

		/** Required */
		LogStreamARN: string;
		RoleARN?: string;
	}

	/** Describes the Amazon CloudWatch logging option. */
	export interface CloudWatchLoggingOptionDescriptionFormProperties {
		CloudWatchLoggingOptionId: FormControl<string | null | undefined>,

		/** Required */
		LogStreamARN: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLoggingOptionDescriptionFormGroup() {
		return new FormGroup<CloudWatchLoggingOptionDescriptionFormProperties>({
			CloudWatchLoggingOptionId: new FormControl<string | null | undefined>(undefined),
			LogStreamARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddApplicationCloudWatchLoggingOptionRequest {

		/** Required */
		ApplicationName: string;
		CurrentApplicationVersionId?: number | null;

		/** Required */
		CloudWatchLoggingOption: CloudWatchLoggingOption;
		ConditionalToken?: string;
	}
	export interface AddApplicationCloudWatchLoggingOptionRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,
		CurrentApplicationVersionId: FormControl<number | null | undefined>,
		ConditionalToken: FormControl<string | null | undefined>,
	}
	export function CreateAddApplicationCloudWatchLoggingOptionRequestFormGroup() {
		return new FormGroup<AddApplicationCloudWatchLoggingOptionRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined),
			ConditionalToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a description of Amazon CloudWatch logging options, including the log stream Amazon Resource Name (ARN).  */
	export interface CloudWatchLoggingOption {

		/** Required */
		LogStreamARN: string;
	}

	/** Provides a description of Amazon CloudWatch logging options, including the log stream Amazon Resource Name (ARN).  */
	export interface CloudWatchLoggingOptionFormProperties {

		/** Required */
		LogStreamARN: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLoggingOptionFormGroup() {
		return new FormGroup<CloudWatchLoggingOptionFormProperties>({
			LogStreamARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		ApplicationARN?: string;
		ApplicationVersionId?: number | null;
		InputDescriptions?: Array<InputDescription>;
	}
	export interface AddApplicationInputResponseFormProperties {
		ApplicationARN: FormControl<string | null | undefined>,
		ApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateAddApplicationInputResponseFormGroup() {
		return new FormGroup<AddApplicationInputResponseFormProperties>({
			ApplicationARN: new FormControl<string | null | undefined>(undefined),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes the application input configuration for a SQL-based Kinesis Data Analytics application.  */
	export interface InputDescription {
		InputId?: string;
		NamePrefix?: string;
		InAppStreamNames?: Array<string>;
		InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;
		KinesisStreamsInputDescription?: KinesisStreamsInputDescription;
		KinesisFirehoseInputDescription?: KinesisFirehoseInputDescription;
		InputSchema?: SourceSchema;
		InputParallelism?: InputParallelism;
		InputStartingPositionConfiguration?: InputStartingPositionConfiguration;
	}

	/** Describes the application input configuration for a SQL-based Kinesis Data Analytics application.  */
	export interface InputDescriptionFormProperties {
		InputId: FormControl<string | null | undefined>,
		NamePrefix: FormControl<string | null | undefined>,
	}
	export function CreateInputDescriptionFormGroup() {
		return new FormGroup<InputDescriptionFormProperties>({
			InputId: new FormControl<string | null | undefined>(undefined),
			NamePrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For a SQL-based Kinesis Data Analytics application, provides the configuration information about an input processor. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">Amazon Lambda</a>. */
	export interface InputProcessingConfigurationDescription {
		InputLambdaProcessorDescription?: InputLambdaProcessorDescription;
	}

	/** For a SQL-based Kinesis Data Analytics application, provides the configuration information about an input processor. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">Amazon Lambda</a>. */
	export interface InputProcessingConfigurationDescriptionFormProperties {
	}
	export function CreateInputProcessingConfigurationDescriptionFormGroup() {
		return new FormGroup<InputProcessingConfigurationDescriptionFormProperties>({
		});

	}


	/** For a SQL-based Kinesis Data Analytics application, an object that contains the Amazon Resource Name (ARN) of the Amazon Lambda function that is used to preprocess records in the stream. */
	export interface InputLambdaProcessorDescription {

		/** Required */
		ResourceARN: string;
		RoleARN?: string;
	}

	/** For a SQL-based Kinesis Data Analytics application, an object that contains the Amazon Resource Name (ARN) of the Amazon Lambda function that is used to preprocess records in the stream. */
	export interface InputLambdaProcessorDescriptionFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateInputLambdaProcessorDescriptionFormGroup() {
		return new FormGroup<InputLambdaProcessorDescriptionFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For a SQL-based Kinesis Data Analytics application, describes the Kinesis data stream that is configured as the streaming source in the application input configuration.  */
	export interface KinesisStreamsInputDescription {

		/** Required */
		ResourceARN: string;
		RoleARN?: string;
	}

	/** For a SQL-based Kinesis Data Analytics application, describes the Kinesis data stream that is configured as the streaming source in the application input configuration.  */
	export interface KinesisStreamsInputDescriptionFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisStreamsInputDescriptionFormGroup() {
		return new FormGroup<KinesisStreamsInputDescriptionFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the Amazon Kinesis Data Firehose delivery stream that is configured as the streaming source in the application input configuration.  */
	export interface KinesisFirehoseInputDescription {

		/** Required */
		ResourceARN: string;
		RoleARN?: string;
	}

	/** Describes the Amazon Kinesis Data Firehose delivery stream that is configured as the streaming source in the application input configuration.  */
	export interface KinesisFirehoseInputDescriptionFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisFirehoseInputDescriptionFormGroup() {
		return new FormGroup<KinesisFirehoseInputDescriptionFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For a SQL-based Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.  */
	export interface SourceSchema {

		/** Required */
		RecordFormat: RecordFormat;
		RecordEncoding?: string;

		/** Required */
		RecordColumns: Array<RecordColumn>;
	}

	/** For a SQL-based Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.  */
	export interface SourceSchemaFormProperties {
		RecordEncoding: FormControl<string | null | undefined>,
	}
	export function CreateSourceSchemaFormGroup() {
		return new FormGroup<SourceSchemaFormProperties>({
			RecordEncoding: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  For a SQL-based Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream.  */
	export interface RecordFormat {

		/** Required */
		RecordFormatType: RecordFormatType;
		MappingParameters?: MappingParameters;
	}

	/**  For a SQL-based Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream.  */
	export interface RecordFormatFormProperties {

		/** Required */
		RecordFormatType: FormControl<RecordFormatType | null | undefined>,
	}
	export function CreateRecordFormatFormGroup() {
		return new FormGroup<RecordFormatFormProperties>({
			RecordFormatType: new FormControl<RecordFormatType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RecordFormatType { JSON = 0, CSV = 1 }


	/** When you configure a SQL-based Kinesis Data Analytics application's input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source. */
	export interface MappingParameters {
		JSONMappingParameters?: JSONMappingParameters;
		CSVMappingParameters?: CSVMappingParameters;
	}

	/** When you configure a SQL-based Kinesis Data Analytics application's input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source. */
	export interface MappingParametersFormProperties {
	}
	export function CreateMappingParametersFormGroup() {
		return new FormGroup<MappingParametersFormProperties>({
		});

	}


	/** For a SQL-based Kinesis Data Analytics application, provides additional mapping information when JSON is the record format on the streaming source. */
	export interface JSONMappingParameters {

		/** Required */
		RecordRowPath: string;
	}

	/** For a SQL-based Kinesis Data Analytics application, provides additional mapping information when JSON is the record format on the streaming source. */
	export interface JSONMappingParametersFormProperties {

		/** Required */
		RecordRowPath: FormControl<string | null | undefined>,
	}
	export function CreateJSONMappingParametersFormGroup() {
		return new FormGroup<JSONMappingParametersFormProperties>({
			RecordRowPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>For a SQL-based Kinesis Data Analytics application, provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the <i>'\n'</i> as the row delimiter and a comma (",") as the column delimiter: </p> <p> <code>"name1", "address1"</code> </p> <p> <code>"name2", "address2"</code> </p> */
	export interface CSVMappingParameters {

		/** Required */
		RecordRowDelimiter: string;

		/** Required */
		RecordColumnDelimiter: string;
	}

	/** <p>For a SQL-based Kinesis Data Analytics application, provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the <i>'\n'</i> as the row delimiter and a comma (",") as the column delimiter: </p> <p> <code>"name1", "address1"</code> </p> <p> <code>"name2", "address2"</code> </p> */
	export interface CSVMappingParametersFormProperties {

		/** Required */
		RecordRowDelimiter: FormControl<string | null | undefined>,

		/** Required */
		RecordColumnDelimiter: FormControl<string | null | undefined>,
	}
	export function CreateCSVMappingParametersFormGroup() {
		return new FormGroup<CSVMappingParametersFormProperties>({
			RecordRowDelimiter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecordColumnDelimiter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>For a SQL-based Kinesis Data Analytics application, describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.</p> <p>Also used to describe the format of the reference data source.</p> */
	export interface RecordColumn {

		/** Required */
		Name: string;
		Mapping?: string;

		/** Required */
		SqlType: string;
	}

	/** <p>For a SQL-based Kinesis Data Analytics application, describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.</p> <p>Also used to describe the format of the reference data source.</p> */
	export interface RecordColumnFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Mapping: FormControl<string | null | undefined>,

		/** Required */
		SqlType: FormControl<string | null | undefined>,
	}
	export function CreateRecordColumnFormGroup() {
		return new FormGroup<RecordColumnFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Mapping: new FormControl<string | null | undefined>(undefined),
			SqlType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** For a SQL-based Kinesis Data Analytics application, describes the number of in-application streams to create for a given streaming source.  */
	export interface InputParallelism {
		Count?: number | null;
	}

	/** For a SQL-based Kinesis Data Analytics application, describes the number of in-application streams to create for a given streaming source.  */
	export interface InputParallelismFormProperties {
		Count: FormControl<number | null | undefined>,
	}
	export function CreateInputParallelismFormGroup() {
		return new FormGroup<InputParallelismFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes the point at which the application reads from the streaming source. */
	export interface InputStartingPositionConfiguration {
		InputStartingPosition?: InputStartingPosition;
	}

	/** Describes the point at which the application reads from the streaming source. */
	export interface InputStartingPositionConfigurationFormProperties {
		InputStartingPosition: FormControl<InputStartingPosition | null | undefined>,
	}
	export function CreateInputStartingPositionConfigurationFormGroup() {
		return new FormGroup<InputStartingPositionConfigurationFormProperties>({
			InputStartingPosition: new FormControl<InputStartingPosition | null | undefined>(undefined),
		});

	}

	export enum InputStartingPosition { NOW = 0, TRIM_HORIZON = 1, LAST_STOPPED_POINT = 2 }

	export interface AddApplicationInputRequest {

		/** Required */
		ApplicationName: string;

		/** Required */
		CurrentApplicationVersionId: number;

		/** Required */
		Input: Input;
	}
	export interface AddApplicationInputRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		CurrentApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateAddApplicationInputRequestFormGroup() {
		return new FormGroup<AddApplicationInputRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** When you configure the application input for a SQL-based Kinesis Data Analytics application, you specify the streaming source, the in-application stream name that is created, and the mapping between the two.  */
	export interface Input {

		/** Required */
		NamePrefix: string;
		InputProcessingConfiguration?: InputProcessingConfiguration;
		KinesisStreamsInput?: KinesisStreamsInput;
		KinesisFirehoseInput?: KinesisFirehoseInput;
		InputParallelism?: InputParallelism;

		/** Required */
		InputSchema: SourceSchema;
	}

	/** When you configure the application input for a SQL-based Kinesis Data Analytics application, you specify the streaming source, the in-application stream name that is created, and the mapping between the two.  */
	export interface InputFormProperties {

		/** Required */
		NamePrefix: FormControl<string | null | undefined>,
	}
	export function CreateInputFormGroup() {
		return new FormGroup<InputFormProperties>({
			NamePrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** For a SQL-based Kinesis Data Analytics application, describes a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">Amazon Lambda</a>. */
	export interface InputProcessingConfiguration {

		/** Required */
		InputLambdaProcessor: InputLambdaProcessor;
	}

	/** For a SQL-based Kinesis Data Analytics application, describes a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">Amazon Lambda</a>. */
	export interface InputProcessingConfigurationFormProperties {
	}
	export function CreateInputProcessingConfigurationFormGroup() {
		return new FormGroup<InputProcessingConfigurationFormProperties>({
		});

	}


	/** An object that contains the Amazon Resource Name (ARN) of the Amazon Lambda function that is used to preprocess records in the stream in a SQL-based Kinesis Data Analytics application.  */
	export interface InputLambdaProcessor {

		/** Required */
		ResourceARN: string;
	}

	/** An object that contains the Amazon Resource Name (ARN) of the Amazon Lambda function that is used to preprocess records in the stream in a SQL-based Kinesis Data Analytics application.  */
	export interface InputLambdaProcessorFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateInputLambdaProcessorFormGroup() {
		return new FormGroup<InputLambdaProcessorFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Identifies a Kinesis data stream as the streaming source. You provide the stream's Amazon Resource Name (ARN). */
	export interface KinesisStreamsInput {

		/** Required */
		ResourceARN: string;
	}

	/**  Identifies a Kinesis data stream as the streaming source. You provide the stream's Amazon Resource Name (ARN). */
	export interface KinesisStreamsInputFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisStreamsInputFormGroup() {
		return new FormGroup<KinesisStreamsInputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** For a SQL-based Kinesis Data Analytics application, identifies a Kinesis Data Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN). */
	export interface KinesisFirehoseInput {

		/** Required */
		ResourceARN: string;
	}

	/** For a SQL-based Kinesis Data Analytics application, identifies a Kinesis Data Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN). */
	export interface KinesisFirehoseInputFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisFirehoseInputFormGroup() {
		return new FormGroup<KinesisFirehoseInputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		ApplicationARN?: string;
		ApplicationVersionId?: number | null;
		InputId?: string;
		InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;
	}
	export interface AddApplicationInputProcessingConfigurationResponseFormProperties {
		ApplicationARN: FormControl<string | null | undefined>,
		ApplicationVersionId: FormControl<number | null | undefined>,
		InputId: FormControl<string | null | undefined>,
	}
	export function CreateAddApplicationInputProcessingConfigurationResponseFormGroup() {
		return new FormGroup<AddApplicationInputProcessingConfigurationResponseFormProperties>({
			ApplicationARN: new FormControl<string | null | undefined>(undefined),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined),
			InputId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddApplicationInputProcessingConfigurationRequest {

		/** Required */
		ApplicationName: string;

		/** Required */
		CurrentApplicationVersionId: number;

		/** Required */
		InputId: string;

		/** Required */
		InputProcessingConfiguration: InputProcessingConfiguration;
	}
	export interface AddApplicationInputProcessingConfigurationRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		CurrentApplicationVersionId: FormControl<number | null | undefined>,

		/** Required */
		InputId: FormControl<string | null | undefined>,
	}
	export function CreateAddApplicationInputProcessingConfigurationRequestFormGroup() {
		return new FormGroup<AddApplicationInputProcessingConfigurationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			InputId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddApplicationOutputResponse {
		ApplicationARN?: string;
		ApplicationVersionId?: number | null;
		OutputDescriptions?: Array<OutputDescription>;
	}
	export interface AddApplicationOutputResponseFormProperties {
		ApplicationARN: FormControl<string | null | undefined>,
		ApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateAddApplicationOutputResponseFormGroup() {
		return new FormGroup<AddApplicationOutputResponseFormProperties>({
			ApplicationARN: new FormControl<string | null | undefined>(undefined),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** For a SQL-based Kinesis Data Analytics application, describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream.  */
	export interface OutputDescription {
		OutputId?: string;
		Name?: string;
		KinesisStreamsOutputDescription?: KinesisStreamsOutputDescription;
		KinesisFirehoseOutputDescription?: KinesisFirehoseOutputDescription;
		LambdaOutputDescription?: LambdaOutputDescription;
		DestinationSchema?: DestinationSchema;
	}

	/** For a SQL-based Kinesis Data Analytics application, describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream.  */
	export interface OutputDescriptionFormProperties {
		OutputId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOutputDescriptionFormGroup() {
		return new FormGroup<OutputDescriptionFormProperties>({
			OutputId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For an SQL-based Kinesis Data Analytics application's output, describes the Kinesis data stream that is configured as its destination.  */
	export interface KinesisStreamsOutputDescription {

		/** Required */
		ResourceARN: string;
		RoleARN?: string;
	}

	/** For an SQL-based Kinesis Data Analytics application's output, describes the Kinesis data stream that is configured as its destination.  */
	export interface KinesisStreamsOutputDescriptionFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisStreamsOutputDescriptionFormGroup() {
		return new FormGroup<KinesisStreamsOutputDescriptionFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For a SQL-based Kinesis Data Analytics application's output, describes the Kinesis Data Firehose delivery stream that is configured as its destination. */
	export interface KinesisFirehoseOutputDescription {

		/** Required */
		ResourceARN: string;
		RoleARN?: string;
	}

	/** For a SQL-based Kinesis Data Analytics application's output, describes the Kinesis Data Firehose delivery stream that is configured as its destination. */
	export interface KinesisFirehoseOutputDescriptionFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisFirehoseOutputDescriptionFormGroup() {
		return new FormGroup<KinesisFirehoseOutputDescriptionFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For a SQL-based Kinesis Data Analytics application's output, describes the Amazon Lambda function that is configured as its destination.  */
	export interface LambdaOutputDescription {

		/** Required */
		ResourceARN: string;
		RoleARN?: string;
	}

	/** For a SQL-based Kinesis Data Analytics application's output, describes the Amazon Lambda function that is configured as its destination.  */
	export interface LambdaOutputDescriptionFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateLambdaOutputDescriptionFormGroup() {
		return new FormGroup<LambdaOutputDescriptionFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the data format when records are written to the destination in a SQL-based Kinesis Data Analytics application.  */
	export interface DestinationSchema {

		/** Required */
		RecordFormatType: RecordFormatType;
	}

	/** Describes the data format when records are written to the destination in a SQL-based Kinesis Data Analytics application.  */
	export interface DestinationSchemaFormProperties {

		/** Required */
		RecordFormatType: FormControl<RecordFormatType | null | undefined>,
	}
	export function CreateDestinationSchemaFormGroup() {
		return new FormGroup<DestinationSchemaFormProperties>({
			RecordFormatType: new FormControl<RecordFormatType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddApplicationOutputRequest {

		/** Required */
		ApplicationName: string;

		/** Required */
		CurrentApplicationVersionId: number;

		/** Required */
		Output: Output;
	}
	export interface AddApplicationOutputRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		CurrentApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateAddApplicationOutputRequestFormGroup() {
		return new FormGroup<AddApplicationOutputRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p> Describes a SQL-based Kinesis Data Analytics application's output configuration, in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream. </p> <p/> */
	export interface Output {

		/** Required */
		Name: string;
		KinesisStreamsOutput?: KinesisStreamsOutput;
		KinesisFirehoseOutput?: KinesisFirehoseOutput;
		LambdaOutput?: LambdaOutput;

		/** Required */
		DestinationSchema: DestinationSchema;
	}

	/** <p> Describes a SQL-based Kinesis Data Analytics application's output configuration, in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream. </p> <p/> */
	export interface OutputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOutputFormGroup() {
		return new FormGroup<OutputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** When you configure a SQL-based Kinesis Data Analytics application's output, identifies a Kinesis data stream as the destination. You provide the stream Amazon Resource Name (ARN).  */
	export interface KinesisStreamsOutput {

		/** Required */
		ResourceARN: string;
	}

	/** When you configure a SQL-based Kinesis Data Analytics application's output, identifies a Kinesis data stream as the destination. You provide the stream Amazon Resource Name (ARN).  */
	export interface KinesisStreamsOutputFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisStreamsOutputFormGroup() {
		return new FormGroup<KinesisStreamsOutputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** For a SQL-based Kinesis Data Analytics application, when configuring application output, identifies a Kinesis Data Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) of the delivery stream.  */
	export interface KinesisFirehoseOutput {

		/** Required */
		ResourceARN: string;
	}

	/** For a SQL-based Kinesis Data Analytics application, when configuring application output, identifies a Kinesis Data Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) of the delivery stream.  */
	export interface KinesisFirehoseOutputFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisFirehoseOutputFormGroup() {
		return new FormGroup<KinesisFirehoseOutputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** When you configure a SQL-based Kinesis Data Analytics application's output, identifies an Amazon Lambda function as the destination. You provide the function Amazon Resource Name (ARN) of the Lambda function.  */
	export interface LambdaOutput {

		/** Required */
		ResourceARN: string;
	}

	/** When you configure a SQL-based Kinesis Data Analytics application's output, identifies an Amazon Lambda function as the destination. You provide the function Amazon Resource Name (ARN) of the Lambda function.  */
	export interface LambdaOutputFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateLambdaOutputFormGroup() {
		return new FormGroup<LambdaOutputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddApplicationReferenceDataSourceResponse {
		ApplicationARN?: string;
		ApplicationVersionId?: number | null;
		ReferenceDataSourceDescriptions?: Array<ReferenceDataSourceDescription>;
	}
	export interface AddApplicationReferenceDataSourceResponseFormProperties {
		ApplicationARN: FormControl<string | null | undefined>,
		ApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateAddApplicationReferenceDataSourceResponseFormGroup() {
		return new FormGroup<AddApplicationReferenceDataSourceResponseFormProperties>({
			ApplicationARN: new FormControl<string | null | undefined>(undefined),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** For a SQL-based Kinesis Data Analytics application, describes the reference data source configured for an application. */
	export interface ReferenceDataSourceDescription {

		/** Required */
		ReferenceId: string;

		/** Required */
		TableName: string;

		/** Required */
		S3ReferenceDataSourceDescription: S3ReferenceDataSourceDescription;
		ReferenceSchema?: SourceSchema;
	}

	/** For a SQL-based Kinesis Data Analytics application, describes the reference data source configured for an application. */
	export interface ReferenceDataSourceDescriptionFormProperties {

		/** Required */
		ReferenceId: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateReferenceDataSourceDescriptionFormGroup() {
		return new FormGroup<ReferenceDataSourceDescriptionFormProperties>({
			ReferenceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** For a SQL-based Kinesis Data Analytics application, provides the bucket name and object key name that stores the reference data. */
	export interface S3ReferenceDataSourceDescription {

		/** Required */
		BucketARN: string;

		/** Required */
		FileKey: string;
		ReferenceRoleARN?: string;
	}

	/** For a SQL-based Kinesis Data Analytics application, provides the bucket name and object key name that stores the reference data. */
	export interface S3ReferenceDataSourceDescriptionFormProperties {

		/** Required */
		BucketARN: FormControl<string | null | undefined>,

		/** Required */
		FileKey: FormControl<string | null | undefined>,
		ReferenceRoleARN: FormControl<string | null | undefined>,
	}
	export function CreateS3ReferenceDataSourceDescriptionFormGroup() {
		return new FormGroup<S3ReferenceDataSourceDescriptionFormProperties>({
			BucketARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FileKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReferenceRoleARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddApplicationReferenceDataSourceRequest {

		/** Required */
		ApplicationName: string;

		/** Required */
		CurrentApplicationVersionId: number;

		/** Required */
		ReferenceDataSource: ReferenceDataSource;
	}
	export interface AddApplicationReferenceDataSourceRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		CurrentApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateAddApplicationReferenceDataSourceRequestFormGroup() {
		return new FormGroup<AddApplicationReferenceDataSourceRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** For a SQL-based Kinesis Data Analytics application, describes the reference data source by providing the source information (Amazon S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table. */
	export interface ReferenceDataSource {

		/** Required */
		TableName: string;
		S3ReferenceDataSource?: S3ReferenceDataSource;

		/** Required */
		ReferenceSchema: SourceSchema;
	}

	/** For a SQL-based Kinesis Data Analytics application, describes the reference data source by providing the source information (Amazon S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table. */
	export interface ReferenceDataSourceFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateReferenceDataSourceFormGroup() {
		return new FormGroup<ReferenceDataSourceFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>For a SQL-based Kinesis Data Analytics application, identifies the Amazon S3 bucket and object that contains the reference data.</p> <p>A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application. </p> */
	export interface S3ReferenceDataSource {
		BucketARN?: string;
		FileKey?: string;
	}

	/** <p>For a SQL-based Kinesis Data Analytics application, identifies the Amazon S3 bucket and object that contains the reference data.</p> <p>A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application. </p> */
	export interface S3ReferenceDataSourceFormProperties {
		BucketARN: FormControl<string | null | undefined>,
		FileKey: FormControl<string | null | undefined>,
	}
	export function CreateS3ReferenceDataSourceFormGroup() {
		return new FormGroup<S3ReferenceDataSourceFormProperties>({
			BucketARN: new FormControl<string | null | undefined>(undefined),
			FileKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddApplicationVpcConfigurationResponse {
		ApplicationARN?: string;
		ApplicationVersionId?: number | null;
		VpcConfigurationDescription?: VpcConfigurationDescription;
	}
	export interface AddApplicationVpcConfigurationResponseFormProperties {
		ApplicationARN: FormControl<string | null | undefined>,
		ApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateAddApplicationVpcConfigurationResponseFormGroup() {
		return new FormGroup<AddApplicationVpcConfigurationResponseFormProperties>({
			ApplicationARN: new FormControl<string | null | undefined>(undefined),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes the parameters of a VPC used by the application. */
	export interface VpcConfigurationDescription {

		/** Required */
		VpcConfigurationId: string;

		/** Required */
		VpcId: string;

		/** Required */
		SubnetIds: Array<string>;

		/** Required */
		SecurityGroupIds: Array<string>;
	}

	/** Describes the parameters of a VPC used by the application. */
	export interface VpcConfigurationDescriptionFormProperties {

		/** Required */
		VpcConfigurationId: FormControl<string | null | undefined>,

		/** Required */
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateVpcConfigurationDescriptionFormGroup() {
		return new FormGroup<VpcConfigurationDescriptionFormProperties>({
			VpcConfigurationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddApplicationVpcConfigurationRequest {

		/** Required */
		ApplicationName: string;
		CurrentApplicationVersionId?: number | null;

		/** Required */
		VpcConfiguration: VpcConfiguration;
		ConditionalToken?: string;
	}
	export interface AddApplicationVpcConfigurationRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,
		CurrentApplicationVersionId: FormControl<number | null | undefined>,
		ConditionalToken: FormControl<string | null | undefined>,
	}
	export function CreateAddApplicationVpcConfigurationRequestFormGroup() {
		return new FormGroup<AddApplicationVpcConfigurationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined),
			ConditionalToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the parameters of a VPC used by the application. */
	export interface VpcConfiguration {

		/** Required */
		SubnetIds: Array<string>;

		/** Required */
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

		/** Required */
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

		/** Required */
		ApplicationARN: string;
		ApplicationDescription?: string;

		/** Required */
		ApplicationName: string;

		/** Required */
		RuntimeEnvironment: RuntimeEnvironment;
		ServiceExecutionRole?: string;

		/** Required */
		ApplicationStatus: ApplicationStatus;

		/** Required */
		ApplicationVersionId: number;
		CreateTimestamp?: Date;
		LastUpdateTimestamp?: Date;
		ApplicationConfigurationDescription?: ApplicationConfigurationDescription;
		CloudWatchLoggingOptionDescriptions?: Array<CloudWatchLoggingOptionDescription>;
		ApplicationMaintenanceConfigurationDescription?: ApplicationMaintenanceConfigurationDescription;
		ApplicationVersionUpdatedFrom?: number | null;
		ApplicationVersionRolledBackFrom?: number | null;
		ConditionalToken?: string;
		ApplicationVersionRolledBackTo?: number | null;
		ApplicationMode?: ApplicationMode;
	}

	/** Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations. */
	export interface ApplicationDetailFormProperties {

		/** Required */
		ApplicationARN: FormControl<string | null | undefined>,
		ApplicationDescription: FormControl<string | null | undefined>,

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		RuntimeEnvironment: FormControl<RuntimeEnvironment | null | undefined>,
		ServiceExecutionRole: FormControl<string | null | undefined>,

		/** Required */
		ApplicationStatus: FormControl<ApplicationStatus | null | undefined>,

		/** Required */
		ApplicationVersionId: FormControl<number | null | undefined>,
		CreateTimestamp: FormControl<Date | null | undefined>,
		LastUpdateTimestamp: FormControl<Date | null | undefined>,
		ApplicationVersionUpdatedFrom: FormControl<number | null | undefined>,
		ApplicationVersionRolledBackFrom: FormControl<number | null | undefined>,
		ConditionalToken: FormControl<string | null | undefined>,
		ApplicationVersionRolledBackTo: FormControl<number | null | undefined>,
		ApplicationMode: FormControl<ApplicationMode | null | undefined>,
	}
	export function CreateApplicationDetailFormGroup() {
		return new FormGroup<ApplicationDetailFormProperties>({
			ApplicationARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApplicationDescription: new FormControl<string | null | undefined>(undefined),
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RuntimeEnvironment: new FormControl<RuntimeEnvironment | null | undefined>(undefined, [Validators.required]),
			ServiceExecutionRole: new FormControl<string | null | undefined>(undefined),
			ApplicationStatus: new FormControl<ApplicationStatus | null | undefined>(undefined, [Validators.required]),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			CreateTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdateTimestamp: new FormControl<Date | null | undefined>(undefined),
			ApplicationVersionUpdatedFrom: new FormControl<number | null | undefined>(undefined),
			ApplicationVersionRolledBackFrom: new FormControl<number | null | undefined>(undefined),
			ConditionalToken: new FormControl<string | null | undefined>(undefined),
			ApplicationVersionRolledBackTo: new FormControl<number | null | undefined>(undefined),
			ApplicationMode: new FormControl<ApplicationMode | null | undefined>(undefined),
		});

	}

	export enum RuntimeEnvironment { 'SQL-1_0' = 0, 'FLINK-1_6' = 1, 'FLINK-1_8' = 2, 'ZEPPELIN-FLINK-1_0' = 3, 'FLINK-1_11' = 4, 'FLINK-1_13' = 5, 'ZEPPELIN-FLINK-2_0' = 6, 'FLINK-1_15' = 7, 'ZEPPELIN-FLINK-3_0' = 8 }

	export enum ApplicationStatus { DELETING = 0, STARTING = 1, STOPPING = 2, READY = 3, RUNNING = 4, UPDATING = 5, AUTOSCALING = 6, FORCE_STOPPING = 7, ROLLING_BACK = 8, MAINTENANCE = 9, ROLLED_BACK = 10 }


	/** Describes details about the application code and starting parameters for a Kinesis Data Analytics application. */
	export interface ApplicationConfigurationDescription {
		SqlApplicationConfigurationDescription?: SqlApplicationConfigurationDescription;
		ApplicationCodeConfigurationDescription?: ApplicationCodeConfigurationDescription;
		RunConfigurationDescription?: RunConfigurationDescription;
		FlinkApplicationConfigurationDescription?: FlinkApplicationConfigurationDescription;
		EnvironmentPropertyDescriptions?: EnvironmentPropertyDescriptions;
		ApplicationSnapshotConfigurationDescription?: ApplicationSnapshotConfigurationDescription;
		VpcConfigurationDescriptions?: Array<VpcConfigurationDescription>;
		ZeppelinApplicationConfigurationDescription?: ZeppelinApplicationConfigurationDescription;
	}

	/** Describes details about the application code and starting parameters for a Kinesis Data Analytics application. */
	export interface ApplicationConfigurationDescriptionFormProperties {
	}
	export function CreateApplicationConfigurationDescriptionFormGroup() {
		return new FormGroup<ApplicationConfigurationDescriptionFormProperties>({
		});

	}


	/** Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application. */
	export interface SqlApplicationConfigurationDescription {
		InputDescriptions?: Array<InputDescription>;
		OutputDescriptions?: Array<OutputDescription>;
		ReferenceDataSourceDescriptions?: Array<ReferenceDataSourceDescription>;
	}

	/** Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application. */
	export interface SqlApplicationConfigurationDescriptionFormProperties {
	}
	export function CreateSqlApplicationConfigurationDescriptionFormGroup() {
		return new FormGroup<SqlApplicationConfigurationDescriptionFormProperties>({
		});

	}


	/** Describes code configuration for an application. */
	export interface ApplicationCodeConfigurationDescription {

		/** Required */
		CodeContentType: CodeContentType;
		CodeContentDescription?: CodeContentDescription;
	}

	/** Describes code configuration for an application. */
	export interface ApplicationCodeConfigurationDescriptionFormProperties {

		/** Required */
		CodeContentType: FormControl<CodeContentType | null | undefined>,
	}
	export function CreateApplicationCodeConfigurationDescriptionFormGroup() {
		return new FormGroup<ApplicationCodeConfigurationDescriptionFormProperties>({
			CodeContentType: new FormControl<CodeContentType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CodeContentType { PLAINTEXT = 0, ZIPFILE = 1 }


	/** Describes details about the code of a Kinesis Data Analytics application. */
	export interface CodeContentDescription {
		TextContent?: string;
		CodeMD5?: string;
		CodeSize?: number | null;
		S3ApplicationCodeLocationDescription?: S3ApplicationCodeLocationDescription;
	}

	/** Describes details about the code of a Kinesis Data Analytics application. */
	export interface CodeContentDescriptionFormProperties {
		TextContent: FormControl<string | null | undefined>,
		CodeMD5: FormControl<string | null | undefined>,
		CodeSize: FormControl<number | null | undefined>,
	}
	export function CreateCodeContentDescriptionFormGroup() {
		return new FormGroup<CodeContentDescriptionFormProperties>({
			TextContent: new FormControl<string | null | undefined>(undefined),
			CodeMD5: new FormControl<string | null | undefined>(undefined),
			CodeSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes the location of an application's code stored in an S3 bucket. */
	export interface S3ApplicationCodeLocationDescription {

		/** Required */
		BucketARN: string;

		/** Required */
		FileKey: string;
		ObjectVersion?: string;
	}

	/** Describes the location of an application's code stored in an S3 bucket. */
	export interface S3ApplicationCodeLocationDescriptionFormProperties {

		/** Required */
		BucketARN: FormControl<string | null | undefined>,

		/** Required */
		FileKey: FormControl<string | null | undefined>,
		ObjectVersion: FormControl<string | null | undefined>,
	}
	export function CreateS3ApplicationCodeLocationDescriptionFormGroup() {
		return new FormGroup<S3ApplicationCodeLocationDescriptionFormProperties>({
			BucketARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FileKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ObjectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the starting properties for a Kinesis Data Analytics application. */
	export interface RunConfigurationDescription {
		ApplicationRestoreConfigurationDescription?: ApplicationRestoreConfiguration;

		/** Describes the starting parameters for a Flink-based Kinesis Data Analytics application. */
		FlinkRunConfigurationDescription?: FlinkRunConfiguration;
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
		ApplicationRestoreType: ApplicationRestoreType;
		SnapshotName?: string;
	}

	/** Specifies the method and snapshot to use when restarting an application using previously saved application state. */
	export interface ApplicationRestoreConfigurationFormProperties {

		/** Required */
		ApplicationRestoreType: FormControl<ApplicationRestoreType | null | undefined>,
		SnapshotName: FormControl<string | null | undefined>,
	}
	export function CreateApplicationRestoreConfigurationFormGroup() {
		return new FormGroup<ApplicationRestoreConfigurationFormProperties>({
			ApplicationRestoreType: new FormControl<ApplicationRestoreType | null | undefined>(undefined, [Validators.required]),
			SnapshotName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApplicationRestoreType { SKIP_RESTORE_FROM_SNAPSHOT = 0, RESTORE_FROM_LATEST_SNAPSHOT = 1, RESTORE_FROM_CUSTOM_SNAPSHOT = 2 }


	/** Describes the starting parameters for a Flink-based Kinesis Data Analytics application. */
	export interface FlinkRunConfiguration {
		AllowNonRestoredState?: boolean | null;
	}

	/** Describes the starting parameters for a Flink-based Kinesis Data Analytics application. */
	export interface FlinkRunConfigurationFormProperties {
		AllowNonRestoredState: FormControl<boolean | null | undefined>,
	}
	export function CreateFlinkRunConfigurationFormGroup() {
		return new FormGroup<FlinkRunConfigurationFormProperties>({
			AllowNonRestoredState: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes configuration parameters for a Flink-based Kinesis Data Analytics application. */
	export interface FlinkApplicationConfigurationDescription {
		CheckpointConfigurationDescription?: CheckpointConfigurationDescription;
		MonitoringConfigurationDescription?: MonitoringConfigurationDescription;
		ParallelismConfigurationDescription?: ParallelismConfigurationDescription;
		JobPlanDescription?: string;
	}

	/** Describes configuration parameters for a Flink-based Kinesis Data Analytics application. */
	export interface FlinkApplicationConfigurationDescriptionFormProperties {
		JobPlanDescription: FormControl<string | null | undefined>,
	}
	export function CreateFlinkApplicationConfigurationDescriptionFormGroup() {
		return new FormGroup<FlinkApplicationConfigurationDescriptionFormProperties>({
			JobPlanDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes checkpointing parameters for a Flink-based Kinesis Data Analytics application. */
	export interface CheckpointConfigurationDescription {
		ConfigurationType?: ConfigurationType;
		CheckpointingEnabled?: boolean | null;
		CheckpointInterval?: number | null;
		MinPauseBetweenCheckpoints?: number | null;
	}

	/** Describes checkpointing parameters for a Flink-based Kinesis Data Analytics application. */
	export interface CheckpointConfigurationDescriptionFormProperties {
		ConfigurationType: FormControl<ConfigurationType | null | undefined>,
		CheckpointingEnabled: FormControl<boolean | null | undefined>,
		CheckpointInterval: FormControl<number | null | undefined>,
		MinPauseBetweenCheckpoints: FormControl<number | null | undefined>,
	}
	export function CreateCheckpointConfigurationDescriptionFormGroup() {
		return new FormGroup<CheckpointConfigurationDescriptionFormProperties>({
			ConfigurationType: new FormControl<ConfigurationType | null | undefined>(undefined),
			CheckpointingEnabled: new FormControl<boolean | null | undefined>(undefined),
			CheckpointInterval: new FormControl<number | null | undefined>(undefined),
			MinPauseBetweenCheckpoints: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ConfigurationType { DEFAULT = 0, CUSTOM = 1 }


	/** Describes configuration parameters for CloudWatch logging for an application. */
	export interface MonitoringConfigurationDescription {
		ConfigurationType?: ConfigurationType;
		MetricsLevel?: MetricsLevel;
		LogLevel?: LogLevel;
	}

	/** Describes configuration parameters for CloudWatch logging for an application. */
	export interface MonitoringConfigurationDescriptionFormProperties {
		ConfigurationType: FormControl<ConfigurationType | null | undefined>,
		MetricsLevel: FormControl<MetricsLevel | null | undefined>,
		LogLevel: FormControl<LogLevel | null | undefined>,
	}
	export function CreateMonitoringConfigurationDescriptionFormGroup() {
		return new FormGroup<MonitoringConfigurationDescriptionFormProperties>({
			ConfigurationType: new FormControl<ConfigurationType | null | undefined>(undefined),
			MetricsLevel: new FormControl<MetricsLevel | null | undefined>(undefined),
			LogLevel: new FormControl<LogLevel | null | undefined>(undefined),
		});

	}

	export enum MetricsLevel { APPLICATION = 0, TASK = 1, OPERATOR = 2, PARALLELISM = 3 }

	export enum LogLevel { INFO = 0, WARN = 1, ERROR = 2, DEBUG = 3 }


	/** Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously. */
	export interface ParallelismConfigurationDescription {
		ConfigurationType?: ConfigurationType;
		Parallelism?: number | null;
		ParallelismPerKPU?: number | null;
		CurrentParallelism?: number | null;
		AutoScalingEnabled?: boolean | null;
	}

	/** Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously. */
	export interface ParallelismConfigurationDescriptionFormProperties {
		ConfigurationType: FormControl<ConfigurationType | null | undefined>,
		Parallelism: FormControl<number | null | undefined>,
		ParallelismPerKPU: FormControl<number | null | undefined>,
		CurrentParallelism: FormControl<number | null | undefined>,
		AutoScalingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateParallelismConfigurationDescriptionFormGroup() {
		return new FormGroup<ParallelismConfigurationDescriptionFormProperties>({
			ConfigurationType: new FormControl<ConfigurationType | null | undefined>(undefined),
			Parallelism: new FormControl<number | null | undefined>(undefined),
			ParallelismPerKPU: new FormControl<number | null | undefined>(undefined),
			CurrentParallelism: new FormControl<number | null | undefined>(undefined),
			AutoScalingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes the execution properties for an Apache Flink runtime. */
	export interface EnvironmentPropertyDescriptions {
		PropertyGroupDescriptions?: Array<PropertyGroup>;
	}

	/** Describes the execution properties for an Apache Flink runtime. */
	export interface EnvironmentPropertyDescriptionsFormProperties {
	}
	export function CreateEnvironmentPropertyDescriptionsFormGroup() {
		return new FormGroup<EnvironmentPropertyDescriptionsFormProperties>({
		});

	}


	/** Property key-value pairs passed into an application. */
	export interface PropertyGroup {

		/** Required */
		PropertyGroupId: string;

		/** Required */
		PropertyMap: PropertyMap;
	}

	/** Property key-value pairs passed into an application. */
	export interface PropertyGroupFormProperties {

		/** Required */
		PropertyGroupId: FormControl<string | null | undefined>,
	}
	export function CreatePropertyGroupFormGroup() {
		return new FormGroup<PropertyGroupFormProperties>({
			PropertyGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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


	/** Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application. */
	export interface ApplicationSnapshotConfigurationDescription {

		/** Required */
		SnapshotsEnabled: boolean;
	}

	/** Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application. */
	export interface ApplicationSnapshotConfigurationDescriptionFormProperties {

		/** Required */
		SnapshotsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateApplicationSnapshotConfigurationDescriptionFormGroup() {
		return new FormGroup<ApplicationSnapshotConfigurationDescriptionFormProperties>({
			SnapshotsEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration of a Kinesis Data Analytics Studio notebook. */
	export interface ZeppelinApplicationConfigurationDescription {

		/** Required */
		MonitoringConfigurationDescription: ZeppelinMonitoringConfigurationDescription;
		CatalogConfigurationDescription?: CatalogConfigurationDescription;
		DeployAsApplicationConfigurationDescription?: DeployAsApplicationConfigurationDescription;
		CustomArtifactsConfigurationDescription?: Array<CustomArtifactConfigurationDescription>;
	}

	/** The configuration of a Kinesis Data Analytics Studio notebook. */
	export interface ZeppelinApplicationConfigurationDescriptionFormProperties {
	}
	export function CreateZeppelinApplicationConfigurationDescriptionFormGroup() {
		return new FormGroup<ZeppelinApplicationConfigurationDescriptionFormProperties>({
		});

	}


	/** The monitoring configuration for Apache Zeppelin within a Kinesis Data Analytics Studio notebook. */
	export interface ZeppelinMonitoringConfigurationDescription {
		LogLevel?: LogLevel;
	}

	/** The monitoring configuration for Apache Zeppelin within a Kinesis Data Analytics Studio notebook. */
	export interface ZeppelinMonitoringConfigurationDescriptionFormProperties {
		LogLevel: FormControl<LogLevel | null | undefined>,
	}
	export function CreateZeppelinMonitoringConfigurationDescriptionFormGroup() {
		return new FormGroup<ZeppelinMonitoringConfigurationDescriptionFormProperties>({
			LogLevel: new FormControl<LogLevel | null | undefined>(undefined),
		});

	}


	/** The configuration parameters for the default Amazon Glue database. You use this database for Apache Flink SQL queries and table API transforms that you write in a Kinesis Data Analytics Studio notebook. */
	export interface CatalogConfigurationDescription {

		/** Required */
		GlueDataCatalogConfigurationDescription: GlueDataCatalogConfigurationDescription;
	}

	/** The configuration parameters for the default Amazon Glue database. You use this database for Apache Flink SQL queries and table API transforms that you write in a Kinesis Data Analytics Studio notebook. */
	export interface CatalogConfigurationDescriptionFormProperties {
	}
	export function CreateCatalogConfigurationDescriptionFormGroup() {
		return new FormGroup<CatalogConfigurationDescriptionFormProperties>({
		});

	}


	/** The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application. */
	export interface GlueDataCatalogConfigurationDescription {

		/** Required */
		DatabaseARN: string;
	}

	/** The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application. */
	export interface GlueDataCatalogConfigurationDescriptionFormProperties {

		/** Required */
		DatabaseARN: FormControl<string | null | undefined>,
	}
	export function CreateGlueDataCatalogConfigurationDescriptionFormGroup() {
		return new FormGroup<GlueDataCatalogConfigurationDescriptionFormProperties>({
			DatabaseARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state. */
	export interface DeployAsApplicationConfigurationDescription {

		/** Required */
		S3ContentLocationDescription: S3ContentBaseLocationDescription;
	}

	/** The configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state. */
	export interface DeployAsApplicationConfigurationDescriptionFormProperties {
	}
	export function CreateDeployAsApplicationConfigurationDescriptionFormGroup() {
		return new FormGroup<DeployAsApplicationConfigurationDescriptionFormProperties>({
		});

	}


	/** The description of the S3 base location that holds the application. */
	export interface S3ContentBaseLocationDescription {

		/** Required */
		BucketARN: string;
		BasePath?: string;
	}

	/** The description of the S3 base location that holds the application. */
	export interface S3ContentBaseLocationDescriptionFormProperties {

		/** Required */
		BucketARN: FormControl<string | null | undefined>,
		BasePath: FormControl<string | null | undefined>,
	}
	export function CreateS3ContentBaseLocationDescriptionFormGroup() {
		return new FormGroup<S3ContentBaseLocationDescriptionFormProperties>({
			BucketARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BasePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a dependency JAR or a JAR of user-defined functions. */
	export interface CustomArtifactConfigurationDescription {
		ArtifactType?: ArtifactType;

		/** For a Kinesis Data Analytics application provides a description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data. */
		S3ContentLocationDescription?: S3ContentLocation;
		MavenReferenceDescription?: MavenReference;
	}

	/** Specifies a dependency JAR or a JAR of user-defined functions. */
	export interface CustomArtifactConfigurationDescriptionFormProperties {
		ArtifactType: FormControl<ArtifactType | null | undefined>,
	}
	export function CreateCustomArtifactConfigurationDescriptionFormGroup() {
		return new FormGroup<CustomArtifactConfigurationDescriptionFormProperties>({
			ArtifactType: new FormControl<ArtifactType | null | undefined>(undefined),
		});

	}

	export enum ArtifactType { UDF = 0, DEPENDENCY_JAR = 1 }


	/** For a Kinesis Data Analytics application provides a description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data.  */
	export interface S3ContentLocation {

		/** Required */
		BucketARN: string;

		/** Required */
		FileKey: string;
		ObjectVersion?: string;
	}

	/** For a Kinesis Data Analytics application provides a description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data.  */
	export interface S3ContentLocationFormProperties {

		/** Required */
		BucketARN: FormControl<string | null | undefined>,

		/** Required */
		FileKey: FormControl<string | null | undefined>,
		ObjectVersion: FormControl<string | null | undefined>,
	}
	export function CreateS3ContentLocationFormGroup() {
		return new FormGroup<S3ContentLocationFormProperties>({
			BucketARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FileKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ObjectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The information required to specify a Maven reference. You can use Maven references to specify dependency JAR files. */
	export interface MavenReference {

		/** Required */
		GroupId: string;

		/** Required */
		ArtifactId: string;

		/** Required */
		Version: string;
	}

	/** The information required to specify a Maven reference. You can use Maven references to specify dependency JAR files. */
	export interface MavenReferenceFormProperties {

		/** Required */
		GroupId: FormControl<string | null | undefined>,

		/** Required */
		ArtifactId: FormControl<string | null | undefined>,

		/** Required */
		Version: FormControl<string | null | undefined>,
	}
	export function CreateMavenReferenceFormGroup() {
		return new FormGroup<MavenReferenceFormProperties>({
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ArtifactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The details of the maintenance configuration for the application. */
	export interface ApplicationMaintenanceConfigurationDescription {

		/** Required */
		ApplicationMaintenanceWindowStartTime: string;

		/** Required */
		ApplicationMaintenanceWindowEndTime: string;
	}

	/** The details of the maintenance configuration for the application. */
	export interface ApplicationMaintenanceConfigurationDescriptionFormProperties {

		/** Required */
		ApplicationMaintenanceWindowStartTime: FormControl<string | null | undefined>,

		/** Required */
		ApplicationMaintenanceWindowEndTime: FormControl<string | null | undefined>,
	}
	export function CreateApplicationMaintenanceConfigurationDescriptionFormGroup() {
		return new FormGroup<ApplicationMaintenanceConfigurationDescriptionFormProperties>({
			ApplicationMaintenanceWindowStartTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApplicationMaintenanceWindowEndTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ApplicationMode { STREAMING = 0, INTERACTIVE = 1 }

	export interface CreateApplicationRequest {

		/** Required */
		ApplicationName: string;
		ApplicationDescription?: string;

		/** Required */
		RuntimeEnvironment: RuntimeEnvironment;

		/** Required */
		ServiceExecutionRole: string;
		ApplicationConfiguration?: ApplicationConfiguration;
		CloudWatchLoggingOptions?: Array<CloudWatchLoggingOption>;
		Tags?: Array<Tag>;
		ApplicationMode?: ApplicationMode;
	}
	export interface CreateApplicationRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,
		ApplicationDescription: FormControl<string | null | undefined>,

		/** Required */
		RuntimeEnvironment: FormControl<RuntimeEnvironment | null | undefined>,

		/** Required */
		ServiceExecutionRole: FormControl<string | null | undefined>,
		ApplicationMode: FormControl<ApplicationMode | null | undefined>,
	}
	export function CreateCreateApplicationRequestFormGroup() {
		return new FormGroup<CreateApplicationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApplicationDescription: new FormControl<string | null | undefined>(undefined),
			RuntimeEnvironment: new FormControl<RuntimeEnvironment | null | undefined>(undefined, [Validators.required]),
			ServiceExecutionRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApplicationMode: new FormControl<ApplicationMode | null | undefined>(undefined),
		});

	}


	/** Specifies the creation parameters for a Kinesis Data Analytics application. */
	export interface ApplicationConfiguration {
		SqlApplicationConfiguration?: SqlApplicationConfiguration;
		FlinkApplicationConfiguration?: FlinkApplicationConfiguration;
		EnvironmentProperties?: EnvironmentProperties;
		ApplicationCodeConfiguration?: ApplicationCodeConfiguration;
		ApplicationSnapshotConfiguration?: ApplicationSnapshotConfiguration;
		VpcConfigurations?: Array<VpcConfiguration>;
		ZeppelinApplicationConfiguration?: ZeppelinApplicationConfiguration;
	}

	/** Specifies the creation parameters for a Kinesis Data Analytics application. */
	export interface ApplicationConfigurationFormProperties {
	}
	export function CreateApplicationConfigurationFormGroup() {
		return new FormGroup<ApplicationConfigurationFormProperties>({
		});

	}


	/** Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application. */
	export interface SqlApplicationConfiguration {
		Inputs?: Array<Input>;
		Outputs?: Array<Output>;
		ReferenceDataSources?: Array<ReferenceDataSource>;
	}

	/** Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application. */
	export interface SqlApplicationConfigurationFormProperties {
	}
	export function CreateSqlApplicationConfigurationFormGroup() {
		return new FormGroup<SqlApplicationConfigurationFormProperties>({
		});

	}


	/** Describes configuration parameters for a Flink-based Kinesis Data Analytics application or a Studio notebook. */
	export interface FlinkApplicationConfiguration {
		CheckpointConfiguration?: CheckpointConfiguration;
		MonitoringConfiguration?: MonitoringConfiguration;
		ParallelismConfiguration?: ParallelismConfiguration;
	}

	/** Describes configuration parameters for a Flink-based Kinesis Data Analytics application or a Studio notebook. */
	export interface FlinkApplicationConfigurationFormProperties {
	}
	export function CreateFlinkApplicationConfigurationFormGroup() {
		return new FormGroup<FlinkApplicationConfigurationFormProperties>({
		});

	}


	/** Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/concepts/programming-model.html#checkpoints-for-fault-tolerance"> Checkpoints for Fault Tolerance</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>. */
	export interface CheckpointConfiguration {

		/** Required */
		ConfigurationType: ConfigurationType;
		CheckpointingEnabled?: boolean | null;
		CheckpointInterval?: number | null;
		MinPauseBetweenCheckpoints?: number | null;
	}

	/** Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/concepts/programming-model.html#checkpoints-for-fault-tolerance"> Checkpoints for Fault Tolerance</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>. */
	export interface CheckpointConfigurationFormProperties {

		/** Required */
		ConfigurationType: FormControl<ConfigurationType | null | undefined>,
		CheckpointingEnabled: FormControl<boolean | null | undefined>,
		CheckpointInterval: FormControl<number | null | undefined>,
		MinPauseBetweenCheckpoints: FormControl<number | null | undefined>,
	}
	export function CreateCheckpointConfigurationFormGroup() {
		return new FormGroup<CheckpointConfigurationFormProperties>({
			ConfigurationType: new FormControl<ConfigurationType | null | undefined>(undefined, [Validators.required]),
			CheckpointingEnabled: new FormControl<boolean | null | undefined>(undefined),
			CheckpointInterval: new FormControl<number | null | undefined>(undefined),
			MinPauseBetweenCheckpoints: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes configuration parameters for Amazon CloudWatch logging for an application. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>. */
	export interface MonitoringConfiguration {

		/** Required */
		ConfigurationType: ConfigurationType;
		MetricsLevel?: MetricsLevel;
		LogLevel?: LogLevel;
	}

	/** Describes configuration parameters for Amazon CloudWatch logging for an application. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>. */
	export interface MonitoringConfigurationFormProperties {

		/** Required */
		ConfigurationType: FormControl<ConfigurationType | null | undefined>,
		MetricsLevel: FormControl<MetricsLevel | null | undefined>,
		LogLevel: FormControl<LogLevel | null | undefined>,
	}
	export function CreateMonitoringConfigurationFormGroup() {
		return new FormGroup<MonitoringConfigurationFormProperties>({
			ConfigurationType: new FormControl<ConfigurationType | null | undefined>(undefined, [Validators.required]),
			MetricsLevel: new FormControl<MetricsLevel | null | undefined>(undefined),
			LogLevel: new FormControl<LogLevel | null | undefined>(undefined),
		});

	}


	/** Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously. For more information about parallelism, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/dev/parallel.html">Parallel Execution</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>. */
	export interface ParallelismConfiguration {

		/** Required */
		ConfigurationType: ConfigurationType;
		Parallelism?: number | null;
		ParallelismPerKPU?: number | null;
		AutoScalingEnabled?: boolean | null;
	}

	/** Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously. For more information about parallelism, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/dev/parallel.html">Parallel Execution</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>. */
	export interface ParallelismConfigurationFormProperties {

		/** Required */
		ConfigurationType: FormControl<ConfigurationType | null | undefined>,
		Parallelism: FormControl<number | null | undefined>,
		ParallelismPerKPU: FormControl<number | null | undefined>,
		AutoScalingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateParallelismConfigurationFormGroup() {
		return new FormGroup<ParallelismConfigurationFormProperties>({
			ConfigurationType: new FormControl<ConfigurationType | null | undefined>(undefined, [Validators.required]),
			Parallelism: new FormControl<number | null | undefined>(undefined),
			ParallelismPerKPU: new FormControl<number | null | undefined>(undefined),
			AutoScalingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes execution properties for a Flink-based Kinesis Data Analytics application. */
	export interface EnvironmentProperties {

		/** Required */
		PropertyGroups: Array<PropertyGroup>;
	}

	/** Describes execution properties for a Flink-based Kinesis Data Analytics application. */
	export interface EnvironmentPropertiesFormProperties {
	}
	export function CreateEnvironmentPropertiesFormGroup() {
		return new FormGroup<EnvironmentPropertiesFormProperties>({
		});

	}


	/** Describes code configuration for an application. */
	export interface ApplicationCodeConfiguration {
		CodeContent?: CodeContent;

		/** Required */
		CodeContentType: CodeContentType;
	}

	/** Describes code configuration for an application. */
	export interface ApplicationCodeConfigurationFormProperties {

		/** Required */
		CodeContentType: FormControl<CodeContentType | null | undefined>,
	}
	export function CreateApplicationCodeConfigurationFormGroup() {
		return new FormGroup<ApplicationCodeConfigurationFormProperties>({
			CodeContentType: new FormControl<CodeContentType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies either the application code, or the location of the application code, for a Flink-based Kinesis Data Analytics application.  */
	export interface CodeContent {
		TextContent?: string;
		ZipFileContent?: string;
		S3ContentLocation?: S3ContentLocation;
	}

	/** Specifies either the application code, or the location of the application code, for a Flink-based Kinesis Data Analytics application.  */
	export interface CodeContentFormProperties {
		TextContent: FormControl<string | null | undefined>,
		ZipFileContent: FormControl<string | null | undefined>,
	}
	export function CreateCodeContentFormGroup() {
		return new FormGroup<CodeContentFormProperties>({
			TextContent: new FormControl<string | null | undefined>(undefined),
			ZipFileContent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application. */
	export interface ApplicationSnapshotConfiguration {

		/** Required */
		SnapshotsEnabled: boolean;
	}

	/** Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application. */
	export interface ApplicationSnapshotConfigurationFormProperties {

		/** Required */
		SnapshotsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateApplicationSnapshotConfigurationFormGroup() {
		return new FormGroup<ApplicationSnapshotConfigurationFormProperties>({
			SnapshotsEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration of a Kinesis Data Analytics Studio notebook. */
	export interface ZeppelinApplicationConfiguration {
		MonitoringConfiguration?: ZeppelinMonitoringConfiguration;
		CatalogConfiguration?: CatalogConfiguration;
		DeployAsApplicationConfiguration?: DeployAsApplicationConfiguration;
		CustomArtifactsConfiguration?: Array<CustomArtifactConfiguration>;
	}

	/** The configuration of a Kinesis Data Analytics Studio notebook. */
	export interface ZeppelinApplicationConfigurationFormProperties {
	}
	export function CreateZeppelinApplicationConfigurationFormGroup() {
		return new FormGroup<ZeppelinApplicationConfigurationFormProperties>({
		});

	}


	/** Describes configuration parameters for Amazon CloudWatch logging for a Kinesis Data Analytics Studio notebook. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>. */
	export interface ZeppelinMonitoringConfiguration {

		/** Required */
		LogLevel: LogLevel;
	}

	/** Describes configuration parameters for Amazon CloudWatch logging for a Kinesis Data Analytics Studio notebook. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>. */
	export interface ZeppelinMonitoringConfigurationFormProperties {

		/** Required */
		LogLevel: FormControl<LogLevel | null | undefined>,
	}
	export function CreateZeppelinMonitoringConfigurationFormGroup() {
		return new FormGroup<ZeppelinMonitoringConfigurationFormProperties>({
			LogLevel: new FormControl<LogLevel | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook. */
	export interface CatalogConfiguration {

		/** Required */
		GlueDataCatalogConfiguration: GlueDataCatalogConfiguration;
	}

	/** The configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook. */
	export interface CatalogConfigurationFormProperties {
	}
	export function CreateCatalogConfigurationFormGroup() {
		return new FormGroup<CatalogConfigurationFormProperties>({
		});

	}


	/** The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application. */
	export interface GlueDataCatalogConfiguration {

		/** Required */
		DatabaseARN: string;
	}

	/** The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application. */
	export interface GlueDataCatalogConfigurationFormProperties {

		/** Required */
		DatabaseARN: FormControl<string | null | undefined>,
	}
	export function CreateGlueDataCatalogConfigurationFormGroup() {
		return new FormGroup<GlueDataCatalogConfigurationFormProperties>({
			DatabaseARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state. */
	export interface DeployAsApplicationConfiguration {

		/** Required */
		S3ContentLocation: S3ContentBaseLocation;
	}

	/** The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state. */
	export interface DeployAsApplicationConfigurationFormProperties {
	}
	export function CreateDeployAsApplicationConfigurationFormGroup() {
		return new FormGroup<DeployAsApplicationConfigurationFormProperties>({
		});

	}


	/** The S3 bucket that holds the application information. */
	export interface S3ContentBaseLocation {

		/** Required */
		BucketARN: string;
		BasePath?: string;
	}

	/** The S3 bucket that holds the application information. */
	export interface S3ContentBaseLocationFormProperties {

		/** Required */
		BucketARN: FormControl<string | null | undefined>,
		BasePath: FormControl<string | null | undefined>,
	}
	export function CreateS3ContentBaseLocationFormGroup() {
		return new FormGroup<S3ContentBaseLocationFormProperties>({
			BucketARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BasePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies dependency JARs, as well as JAR files that contain user-defined functions (UDF). */
	export interface CustomArtifactConfiguration {

		/** Required */
		ArtifactType: ArtifactType;

		/** For a Kinesis Data Analytics application provides a description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data. */
		S3ContentLocation?: S3ContentLocation;
		MavenReference?: MavenReference;
	}

	/** Specifies dependency JARs, as well as JAR files that contain user-defined functions (UDF). */
	export interface CustomArtifactConfigurationFormProperties {

		/** Required */
		ArtifactType: FormControl<ArtifactType | null | undefined>,
	}
	export function CreateCustomArtifactConfigurationFormGroup() {
		return new FormGroup<CustomArtifactConfigurationFormProperties>({
			ArtifactType: new FormControl<ArtifactType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A key-value pair (the value is optional) that you can define and assign to Amazon resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>. */
	export interface Tag {

		/** Required */
		Key: string;
		Value?: string;
	}

	/** A key-value pair (the value is optional) that you can define and assign to Amazon resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined),
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

	export interface UnsupportedOperationException {
	}
	export interface UnsupportedOperationExceptionFormProperties {
	}
	export function CreateUnsupportedOperationExceptionFormGroup() {
		return new FormGroup<UnsupportedOperationExceptionFormProperties>({
		});

	}

	export interface CreateApplicationPresignedUrlResponse {
		AuthorizedUrl?: string;
	}
	export interface CreateApplicationPresignedUrlResponseFormProperties {
		AuthorizedUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationPresignedUrlResponseFormGroup() {
		return new FormGroup<CreateApplicationPresignedUrlResponseFormProperties>({
			AuthorizedUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateApplicationPresignedUrlRequest {

		/** Required */
		ApplicationName: string;

		/** Required */
		UrlType: UrlType;
		SessionExpirationDurationInSeconds?: number | null;
	}
	export interface CreateApplicationPresignedUrlRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		UrlType: FormControl<UrlType | null | undefined>,
		SessionExpirationDurationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateApplicationPresignedUrlRequestFormGroup() {
		return new FormGroup<CreateApplicationPresignedUrlRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UrlType: new FormControl<UrlType | null | undefined>(undefined, [Validators.required]),
			SessionExpirationDurationInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum UrlType { FLINK_DASHBOARD_URL = 0, ZEPPELIN_UI_URL = 1 }

	export interface CreateApplicationSnapshotResponse {
	}
	export interface CreateApplicationSnapshotResponseFormProperties {
	}
	export function CreateCreateApplicationSnapshotResponseFormGroup() {
		return new FormGroup<CreateApplicationSnapshotResponseFormProperties>({
		});

	}

	export interface CreateApplicationSnapshotRequest {

		/** Required */
		ApplicationName: string;

		/** Required */
		SnapshotName: string;
	}
	export interface CreateApplicationSnapshotRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		SnapshotName: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationSnapshotRequestFormGroup() {
		return new FormGroup<CreateApplicationSnapshotRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		ApplicationName: string;

		/** Required */
		CreateTimestamp: Date;
	}
	export interface DeleteApplicationRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		CreateTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateDeleteApplicationRequestFormGroup() {
		return new FormGroup<DeleteApplicationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreateTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteApplicationCloudWatchLoggingOptionResponse {
		ApplicationARN?: string;
		ApplicationVersionId?: number | null;
		CloudWatchLoggingOptionDescriptions?: Array<CloudWatchLoggingOptionDescription>;
	}
	export interface DeleteApplicationCloudWatchLoggingOptionResponseFormProperties {
		ApplicationARN: FormControl<string | null | undefined>,
		ApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateDeleteApplicationCloudWatchLoggingOptionResponseFormGroup() {
		return new FormGroup<DeleteApplicationCloudWatchLoggingOptionResponseFormProperties>({
			ApplicationARN: new FormControl<string | null | undefined>(undefined),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteApplicationCloudWatchLoggingOptionRequest {

		/** Required */
		ApplicationName: string;
		CurrentApplicationVersionId?: number | null;

		/** Required */
		CloudWatchLoggingOptionId: string;
		ConditionalToken?: string;
	}
	export interface DeleteApplicationCloudWatchLoggingOptionRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,
		CurrentApplicationVersionId: FormControl<number | null | undefined>,

		/** Required */
		CloudWatchLoggingOptionId: FormControl<string | null | undefined>,
		ConditionalToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteApplicationCloudWatchLoggingOptionRequestFormGroup() {
		return new FormGroup<DeleteApplicationCloudWatchLoggingOptionRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined),
			CloudWatchLoggingOptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConditionalToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteApplicationInputProcessingConfigurationResponse {
		ApplicationARN?: string;
		ApplicationVersionId?: number | null;
	}
	export interface DeleteApplicationInputProcessingConfigurationResponseFormProperties {
		ApplicationARN: FormControl<string | null | undefined>,
		ApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateDeleteApplicationInputProcessingConfigurationResponseFormGroup() {
		return new FormGroup<DeleteApplicationInputProcessingConfigurationResponseFormProperties>({
			ApplicationARN: new FormControl<string | null | undefined>(undefined),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteApplicationInputProcessingConfigurationRequest {

		/** Required */
		ApplicationName: string;

		/** Required */
		CurrentApplicationVersionId: number;

		/** Required */
		InputId: string;
	}
	export interface DeleteApplicationInputProcessingConfigurationRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		CurrentApplicationVersionId: FormControl<number | null | undefined>,

		/** Required */
		InputId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteApplicationInputProcessingConfigurationRequestFormGroup() {
		return new FormGroup<DeleteApplicationInputProcessingConfigurationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			InputId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteApplicationOutputResponse {
		ApplicationARN?: string;
		ApplicationVersionId?: number | null;
	}
	export interface DeleteApplicationOutputResponseFormProperties {
		ApplicationARN: FormControl<string | null | undefined>,
		ApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateDeleteApplicationOutputResponseFormGroup() {
		return new FormGroup<DeleteApplicationOutputResponseFormProperties>({
			ApplicationARN: new FormControl<string | null | undefined>(undefined),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteApplicationOutputRequest {

		/** Required */
		ApplicationName: string;

		/** Required */
		CurrentApplicationVersionId: number;

		/** Required */
		OutputId: string;
	}
	export interface DeleteApplicationOutputRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		CurrentApplicationVersionId: FormControl<number | null | undefined>,

		/** Required */
		OutputId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteApplicationOutputRequestFormGroup() {
		return new FormGroup<DeleteApplicationOutputRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			OutputId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteApplicationReferenceDataSourceResponse {
		ApplicationARN?: string;
		ApplicationVersionId?: number | null;
	}
	export interface DeleteApplicationReferenceDataSourceResponseFormProperties {
		ApplicationARN: FormControl<string | null | undefined>,
		ApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateDeleteApplicationReferenceDataSourceResponseFormGroup() {
		return new FormGroup<DeleteApplicationReferenceDataSourceResponseFormProperties>({
			ApplicationARN: new FormControl<string | null | undefined>(undefined),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteApplicationReferenceDataSourceRequest {

		/** Required */
		ApplicationName: string;

		/** Required */
		CurrentApplicationVersionId: number;

		/** Required */
		ReferenceId: string;
	}
	export interface DeleteApplicationReferenceDataSourceRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		CurrentApplicationVersionId: FormControl<number | null | undefined>,

		/** Required */
		ReferenceId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteApplicationReferenceDataSourceRequestFormGroup() {
		return new FormGroup<DeleteApplicationReferenceDataSourceRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ReferenceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		ApplicationName: string;

		/** Required */
		SnapshotName: string;

		/** Required */
		SnapshotCreationTimestamp: Date;
	}
	export interface DeleteApplicationSnapshotRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		SnapshotName: FormControl<string | null | undefined>,

		/** Required */
		SnapshotCreationTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateDeleteApplicationSnapshotRequestFormGroup() {
		return new FormGroup<DeleteApplicationSnapshotRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnapshotCreationTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteApplicationVpcConfigurationResponse {
		ApplicationARN?: string;
		ApplicationVersionId?: number | null;
	}
	export interface DeleteApplicationVpcConfigurationResponseFormProperties {
		ApplicationARN: FormControl<string | null | undefined>,
		ApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateDeleteApplicationVpcConfigurationResponseFormGroup() {
		return new FormGroup<DeleteApplicationVpcConfigurationResponseFormProperties>({
			ApplicationARN: new FormControl<string | null | undefined>(undefined),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteApplicationVpcConfigurationRequest {

		/** Required */
		ApplicationName: string;
		CurrentApplicationVersionId?: number | null;

		/** Required */
		VpcConfigurationId: string;
		ConditionalToken?: string;
	}
	export interface DeleteApplicationVpcConfigurationRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,
		CurrentApplicationVersionId: FormControl<number | null | undefined>,

		/** Required */
		VpcConfigurationId: FormControl<string | null | undefined>,
		ConditionalToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteApplicationVpcConfigurationRequestFormGroup() {
		return new FormGroup<DeleteApplicationVpcConfigurationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined),
			VpcConfigurationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConditionalToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeApplicationResponse {

		/** Required */
		ApplicationDetail: ApplicationDetail;
	}
	export interface DescribeApplicationResponseFormProperties {
	}
	export function CreateDescribeApplicationResponseFormGroup() {
		return new FormGroup<DescribeApplicationResponseFormProperties>({
		});

	}

	export interface DescribeApplicationRequest {

		/** Required */
		ApplicationName: string;
		IncludeAdditionalDetails?: boolean | null;
	}
	export interface DescribeApplicationRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,
		IncludeAdditionalDetails: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeApplicationRequestFormGroup() {
		return new FormGroup<DescribeApplicationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IncludeAdditionalDetails: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeApplicationSnapshotResponse {

		/** Required */
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

		/** Required */
		SnapshotName: string;

		/** Required */
		SnapshotStatus: SnapshotStatus;

		/** Required */
		ApplicationVersionId: number;
		SnapshotCreationTimestamp?: Date;
	}

	/** Provides details about a snapshot of application state. */
	export interface SnapshotDetailsFormProperties {

		/** Required */
		SnapshotName: FormControl<string | null | undefined>,

		/** Required */
		SnapshotStatus: FormControl<SnapshotStatus | null | undefined>,

		/** Required */
		ApplicationVersionId: FormControl<number | null | undefined>,
		SnapshotCreationTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateSnapshotDetailsFormGroup() {
		return new FormGroup<SnapshotDetailsFormProperties>({
			SnapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnapshotStatus: new FormControl<SnapshotStatus | null | undefined>(undefined, [Validators.required]),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SnapshotCreationTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum SnapshotStatus { CREATING = 0, READY = 1, DELETING = 2, FAILED = 3 }

	export interface DescribeApplicationSnapshotRequest {

		/** Required */
		ApplicationName: string;

		/** Required */
		SnapshotName: string;
	}
	export interface DescribeApplicationSnapshotRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		SnapshotName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeApplicationSnapshotRequestFormGroup() {
		return new FormGroup<DescribeApplicationSnapshotRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeApplicationVersionResponse {

		/** Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations. */
		ApplicationVersionDetail?: ApplicationDetail;
	}
	export interface DescribeApplicationVersionResponseFormProperties {
	}
	export function CreateDescribeApplicationVersionResponseFormGroup() {
		return new FormGroup<DescribeApplicationVersionResponseFormProperties>({
		});

	}

	export interface DescribeApplicationVersionRequest {

		/** Required */
		ApplicationName: string;

		/** Required */
		ApplicationVersionId: number;
	}
	export interface DescribeApplicationVersionRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		ApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateDescribeApplicationVersionRequestFormGroup() {
		return new FormGroup<DescribeApplicationVersionRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DiscoverInputSchemaResponse {
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
		ResourceARN?: string;

		/** Required */
		ServiceExecutionRole: string;
		InputStartingPositionConfiguration?: InputStartingPositionConfiguration;
		S3Configuration?: S3Configuration;
		InputProcessingConfiguration?: InputProcessingConfiguration;
	}
	export interface DiscoverInputSchemaRequestFormProperties {
		ResourceARN: FormControl<string | null | undefined>,

		/** Required */
		ServiceExecutionRole: FormControl<string | null | undefined>,
	}
	export function CreateDiscoverInputSchemaRequestFormGroup() {
		return new FormGroup<DiscoverInputSchemaRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
			ServiceExecutionRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** For a SQL-based Kinesis Data Analytics application, provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket and the name of the Amazon S3 object that contains the data. */
	export interface S3Configuration {

		/** Required */
		BucketARN: string;

		/** Required */
		FileKey: string;
	}

	/** For a SQL-based Kinesis Data Analytics application, provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket and the name of the Amazon S3 object that contains the data. */
	export interface S3ConfigurationFormProperties {

		/** Required */
		BucketARN: FormControl<string | null | undefined>,

		/** Required */
		FileKey: FormControl<string | null | undefined>,
	}
	export function CreateS3ConfigurationFormGroup() {
		return new FormGroup<S3ConfigurationFormProperties>({
			BucketARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FileKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		NextToken?: string;
	}
	export interface ListApplicationSnapshotsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationSnapshotsResponseFormGroup() {
		return new FormGroup<ListApplicationSnapshotsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListApplicationSnapshotsRequest {

		/** Required */
		ApplicationName: string;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface ListApplicationSnapshotsRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationSnapshotsRequestFormGroup() {
		return new FormGroup<ListApplicationSnapshotsRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListApplicationVersionsResponse {
		ApplicationVersionSummaries?: Array<ApplicationVersionSummary>;
		NextToken?: string;
	}
	export interface ListApplicationVersionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationVersionsResponseFormGroup() {
		return new FormGroup<ListApplicationVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the application version. */
	export interface ApplicationVersionSummary {

		/** Required */
		ApplicationVersionId: number;

		/** Required */
		ApplicationStatus: ApplicationStatus;
	}

	/** The summary of the application version. */
	export interface ApplicationVersionSummaryFormProperties {

		/** Required */
		ApplicationVersionId: FormControl<number | null | undefined>,

		/** Required */
		ApplicationStatus: FormControl<ApplicationStatus | null | undefined>,
	}
	export function CreateApplicationVersionSummaryFormGroup() {
		return new FormGroup<ApplicationVersionSummaryFormProperties>({
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ApplicationStatus: new FormControl<ApplicationStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListApplicationVersionsRequest {

		/** Required */
		ApplicationName: string;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface ListApplicationVersionsRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationVersionsRequestFormGroup() {
		return new FormGroup<ListApplicationVersionsRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListApplicationsResponse {

		/** Required */
		ApplicationSummaries: Array<ApplicationSummary>;
		NextToken?: string;
	}
	export interface ListApplicationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationsResponseFormGroup() {
		return new FormGroup<ListApplicationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides application summary information, including the application Amazon Resource Name (ARN), name, and status. */
	export interface ApplicationSummary {

		/** Required */
		ApplicationName: string;

		/** Required */
		ApplicationARN: string;

		/** Required */
		ApplicationStatus: ApplicationStatus;

		/** Required */
		ApplicationVersionId: number;

		/** Required */
		RuntimeEnvironment: RuntimeEnvironment;
		ApplicationMode?: ApplicationMode;
	}

	/** Provides application summary information, including the application Amazon Resource Name (ARN), name, and status. */
	export interface ApplicationSummaryFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		ApplicationARN: FormControl<string | null | undefined>,

		/** Required */
		ApplicationStatus: FormControl<ApplicationStatus | null | undefined>,

		/** Required */
		ApplicationVersionId: FormControl<number | null | undefined>,

		/** Required */
		RuntimeEnvironment: FormControl<RuntimeEnvironment | null | undefined>,
		ApplicationMode: FormControl<ApplicationMode | null | undefined>,
	}
	export function CreateApplicationSummaryFormGroup() {
		return new FormGroup<ApplicationSummaryFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApplicationARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApplicationStatus: new FormControl<ApplicationStatus | null | undefined>(undefined, [Validators.required]),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			RuntimeEnvironment: new FormControl<RuntimeEnvironment | null | undefined>(undefined, [Validators.required]),
			ApplicationMode: new FormControl<ApplicationMode | null | undefined>(undefined),
		});

	}

	export interface ListApplicationsRequest {
		Limit?: number | null;
		NextToken?: string;
	}
	export interface ListApplicationsRequestFormProperties {
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationsRequestFormGroup() {
		return new FormGroup<ListApplicationsRequestFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceARN: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RollbackApplicationResponse {

		/**
		 * Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations.
		 * Required
		 */
		ApplicationDetail: ApplicationDetail;
	}
	export interface RollbackApplicationResponseFormProperties {
	}
	export function CreateRollbackApplicationResponseFormGroup() {
		return new FormGroup<RollbackApplicationResponseFormProperties>({
		});

	}

	export interface RollbackApplicationRequest {

		/** Required */
		ApplicationName: string;

		/** Required */
		CurrentApplicationVersionId: number;
	}
	export interface RollbackApplicationRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		CurrentApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateRollbackApplicationRequestFormGroup() {
		return new FormGroup<RollbackApplicationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		ApplicationName: string;
		RunConfiguration?: RunConfiguration;
	}
	export interface StartApplicationRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,
	}
	export function CreateStartApplicationRequestFormGroup() {
		return new FormGroup<StartApplicationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the starting parameters for an Kinesis Data Analytics application. */
	export interface RunConfiguration {
		FlinkRunConfiguration?: FlinkRunConfiguration;
		SqlRunConfigurations?: Array<SqlRunConfiguration>;
		ApplicationRestoreConfiguration?: ApplicationRestoreConfiguration;
	}

	/** Describes the starting parameters for an Kinesis Data Analytics application. */
	export interface RunConfigurationFormProperties {
	}
	export function CreateRunConfigurationFormGroup() {
		return new FormGroup<RunConfigurationFormProperties>({
		});

	}


	/** Describes the starting parameters for a SQL-based Kinesis Data Analytics application. */
	export interface SqlRunConfiguration {

		/** Required */
		InputId: string;

		/** Required */
		InputStartingPositionConfiguration: InputStartingPositionConfiguration;
	}

	/** Describes the starting parameters for a SQL-based Kinesis Data Analytics application. */
	export interface SqlRunConfigurationFormProperties {

		/** Required */
		InputId: FormControl<string | null | undefined>,
	}
	export function CreateSqlRunConfigurationFormGroup() {
		return new FormGroup<SqlRunConfigurationFormProperties>({
			InputId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		ApplicationName: string;
		Force?: boolean | null;
	}
	export interface StopApplicationRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,
		Force: FormControl<boolean | null | undefined>,
	}
	export function CreateStopApplicationRequestFormGroup() {
		return new FormGroup<StopApplicationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Force: new FormControl<boolean | null | undefined>(undefined),
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

		/** Required */
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateApplicationResponse {

		/** Required */
		ApplicationDetail: ApplicationDetail;
	}
	export interface UpdateApplicationResponseFormProperties {
	}
	export function CreateUpdateApplicationResponseFormGroup() {
		return new FormGroup<UpdateApplicationResponseFormProperties>({
		});

	}

	export interface UpdateApplicationRequest {

		/** Required */
		ApplicationName: string;
		CurrentApplicationVersionId?: number | null;
		ApplicationConfigurationUpdate?: ApplicationConfigurationUpdate;
		ServiceExecutionRoleUpdate?: string;
		RunConfigurationUpdate?: RunConfigurationUpdate;
		CloudWatchLoggingOptionUpdates?: Array<CloudWatchLoggingOptionUpdate>;
		ConditionalToken?: string;
	}
	export interface UpdateApplicationRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,
		CurrentApplicationVersionId: FormControl<number | null | undefined>,
		ServiceExecutionRoleUpdate: FormControl<string | null | undefined>,
		ConditionalToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationRequestFormGroup() {
		return new FormGroup<UpdateApplicationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined),
			ServiceExecutionRoleUpdate: new FormControl<string | null | undefined>(undefined),
			ConditionalToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes updates to an application's configuration. */
	export interface ApplicationConfigurationUpdate {
		SqlApplicationConfigurationUpdate?: SqlApplicationConfigurationUpdate;
		ApplicationCodeConfigurationUpdate?: ApplicationCodeConfigurationUpdate;
		FlinkApplicationConfigurationUpdate?: FlinkApplicationConfigurationUpdate;
		EnvironmentPropertyUpdates?: EnvironmentPropertyUpdates;
		ApplicationSnapshotConfigurationUpdate?: ApplicationSnapshotConfigurationUpdate;
		VpcConfigurationUpdates?: Array<VpcConfigurationUpdate>;
		ZeppelinApplicationConfigurationUpdate?: ZeppelinApplicationConfigurationUpdate;
	}

	/** Describes updates to an application's configuration. */
	export interface ApplicationConfigurationUpdateFormProperties {
	}
	export function CreateApplicationConfigurationUpdateFormGroup() {
		return new FormGroup<ApplicationConfigurationUpdateFormProperties>({
		});

	}


	/** Describes updates to the input streams, destination streams, and reference data sources for a SQL-based Kinesis Data Analytics application. */
	export interface SqlApplicationConfigurationUpdate {
		InputUpdates?: Array<InputUpdate>;
		OutputUpdates?: Array<OutputUpdate>;
		ReferenceDataSourceUpdates?: Array<ReferenceDataSourceUpdate>;
	}

	/** Describes updates to the input streams, destination streams, and reference data sources for a SQL-based Kinesis Data Analytics application. */
	export interface SqlApplicationConfigurationUpdateFormProperties {
	}
	export function CreateSqlApplicationConfigurationUpdateFormGroup() {
		return new FormGroup<SqlApplicationConfigurationUpdateFormProperties>({
		});

	}


	/** For a SQL-based Kinesis Data Analytics application, describes updates to a specific input configuration (identified by the <code>InputId</code> of an application).  */
	export interface InputUpdate {

		/** Required */
		InputId: string;
		NamePrefixUpdate?: string;
		InputProcessingConfigurationUpdate?: InputProcessingConfigurationUpdate;
		KinesisStreamsInputUpdate?: KinesisStreamsInputUpdate;
		KinesisFirehoseInputUpdate?: KinesisFirehoseInputUpdate;
		InputSchemaUpdate?: InputSchemaUpdate;
		InputParallelismUpdate?: InputParallelismUpdate;
	}

	/** For a SQL-based Kinesis Data Analytics application, describes updates to a specific input configuration (identified by the <code>InputId</code> of an application).  */
	export interface InputUpdateFormProperties {

		/** Required */
		InputId: FormControl<string | null | undefined>,
		NamePrefixUpdate: FormControl<string | null | undefined>,
	}
	export function CreateInputUpdateFormGroup() {
		return new FormGroup<InputUpdateFormProperties>({
			InputId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NamePrefixUpdate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For a SQL-based Kinesis Data Analytics application, describes updates to an <a>InputProcessingConfiguration</a>. */
	export interface InputProcessingConfigurationUpdate {

		/** Required */
		InputLambdaProcessorUpdate: InputLambdaProcessorUpdate;
	}

	/** For a SQL-based Kinesis Data Analytics application, describes updates to an <a>InputProcessingConfiguration</a>. */
	export interface InputProcessingConfigurationUpdateFormProperties {
	}
	export function CreateInputProcessingConfigurationUpdateFormGroup() {
		return new FormGroup<InputProcessingConfigurationUpdateFormProperties>({
		});

	}


	/** For a SQL-based Kinesis Data Analytics application, represents an update to the <a>InputLambdaProcessor</a> that is used to preprocess the records in the stream. */
	export interface InputLambdaProcessorUpdate {

		/** Required */
		ResourceARNUpdate: string;
	}

	/** For a SQL-based Kinesis Data Analytics application, represents an update to the <a>InputLambdaProcessor</a> that is used to preprocess the records in the stream. */
	export interface InputLambdaProcessorUpdateFormProperties {

		/** Required */
		ResourceARNUpdate: FormControl<string | null | undefined>,
	}
	export function CreateInputLambdaProcessorUpdateFormGroup() {
		return new FormGroup<InputLambdaProcessorUpdateFormProperties>({
			ResourceARNUpdate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** When you update the input configuration for a SQL-based Kinesis Data Analytics application, provides information about a Kinesis stream as the streaming source. */
	export interface KinesisStreamsInputUpdate {

		/** Required */
		ResourceARNUpdate: string;
	}

	/** When you update the input configuration for a SQL-based Kinesis Data Analytics application, provides information about a Kinesis stream as the streaming source. */
	export interface KinesisStreamsInputUpdateFormProperties {

		/** Required */
		ResourceARNUpdate: FormControl<string | null | undefined>,
	}
	export function CreateKinesisStreamsInputUpdateFormGroup() {
		return new FormGroup<KinesisStreamsInputUpdateFormProperties>({
			ResourceARNUpdate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** For a SQL-based Kinesis Data Analytics application, when updating application input configuration, provides information about a Kinesis Data Firehose delivery stream as the streaming source. */
	export interface KinesisFirehoseInputUpdate {

		/** Required */
		ResourceARNUpdate: string;
	}

	/** For a SQL-based Kinesis Data Analytics application, when updating application input configuration, provides information about a Kinesis Data Firehose delivery stream as the streaming source. */
	export interface KinesisFirehoseInputUpdateFormProperties {

		/** Required */
		ResourceARNUpdate: FormControl<string | null | undefined>,
	}
	export function CreateKinesisFirehoseInputUpdateFormGroup() {
		return new FormGroup<KinesisFirehoseInputUpdateFormProperties>({
			ResourceARNUpdate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes updates for an SQL-based Kinesis Data Analytics application's input schema. */
	export interface InputSchemaUpdate {
		RecordFormatUpdate?: RecordFormat;
		RecordEncodingUpdate?: string;
		RecordColumnUpdates?: Array<RecordColumn>;
	}

	/** Describes updates for an SQL-based Kinesis Data Analytics application's input schema. */
	export interface InputSchemaUpdateFormProperties {
		RecordEncodingUpdate: FormControl<string | null | undefined>,
	}
	export function CreateInputSchemaUpdateFormGroup() {
		return new FormGroup<InputSchemaUpdateFormProperties>({
			RecordEncodingUpdate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For a SQL-based Kinesis Data Analytics application, provides updates to the parallelism count. */
	export interface InputParallelismUpdate {

		/** Required */
		CountUpdate: number;
	}

	/** For a SQL-based Kinesis Data Analytics application, provides updates to the parallelism count. */
	export interface InputParallelismUpdateFormProperties {

		/** Required */
		CountUpdate: FormControl<number | null | undefined>,
	}
	export function CreateInputParallelismUpdateFormGroup() {
		return new FormGroup<InputParallelismUpdateFormProperties>({
			CountUpdate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  For a SQL-based Kinesis Data Analytics application, describes updates to the output configuration identified by the <code>OutputId</code>.  */
	export interface OutputUpdate {

		/** Required */
		OutputId: string;
		NameUpdate?: string;
		KinesisStreamsOutputUpdate?: KinesisStreamsOutputUpdate;
		KinesisFirehoseOutputUpdate?: KinesisFirehoseOutputUpdate;
		LambdaOutputUpdate?: LambdaOutputUpdate;
		DestinationSchemaUpdate?: DestinationSchema;
	}

	/**  For a SQL-based Kinesis Data Analytics application, describes updates to the output configuration identified by the <code>OutputId</code>.  */
	export interface OutputUpdateFormProperties {

		/** Required */
		OutputId: FormControl<string | null | undefined>,
		NameUpdate: FormControl<string | null | undefined>,
	}
	export function CreateOutputUpdateFormGroup() {
		return new FormGroup<OutputUpdateFormProperties>({
			OutputId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NameUpdate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** When you update a SQL-based Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis data stream that is configured as the destination. */
	export interface KinesisStreamsOutputUpdate {

		/** Required */
		ResourceARNUpdate: string;
	}

	/** When you update a SQL-based Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis data stream that is configured as the destination. */
	export interface KinesisStreamsOutputUpdateFormProperties {

		/** Required */
		ResourceARNUpdate: FormControl<string | null | undefined>,
	}
	export function CreateKinesisStreamsOutputUpdateFormGroup() {
		return new FormGroup<KinesisStreamsOutputUpdateFormProperties>({
			ResourceARNUpdate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** For a SQL-based Kinesis Data Analytics application, when updating an output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis Data Firehose delivery stream that is configured as the destination. */
	export interface KinesisFirehoseOutputUpdate {

		/** Required */
		ResourceARNUpdate: string;
	}

	/** For a SQL-based Kinesis Data Analytics application, when updating an output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis Data Firehose delivery stream that is configured as the destination. */
	export interface KinesisFirehoseOutputUpdateFormProperties {

		/** Required */
		ResourceARNUpdate: FormControl<string | null | undefined>,
	}
	export function CreateKinesisFirehoseOutputUpdateFormGroup() {
		return new FormGroup<KinesisFirehoseOutputUpdateFormProperties>({
			ResourceARNUpdate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** When you update an SQL-based Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about an Amazon Lambda function that is configured as the destination. */
	export interface LambdaOutputUpdate {

		/** Required */
		ResourceARNUpdate: string;
	}

	/** When you update an SQL-based Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about an Amazon Lambda function that is configured as the destination. */
	export interface LambdaOutputUpdateFormProperties {

		/** Required */
		ResourceARNUpdate: FormControl<string | null | undefined>,
	}
	export function CreateLambdaOutputUpdateFormGroup() {
		return new FormGroup<LambdaOutputUpdateFormProperties>({
			ResourceARNUpdate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** When you update a reference data source configuration for a SQL-based Kinesis Data Analytics application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created. */
	export interface ReferenceDataSourceUpdate {

		/** Required */
		ReferenceId: string;
		TableNameUpdate?: string;
		S3ReferenceDataSourceUpdate?: S3ReferenceDataSourceUpdate;
		ReferenceSchemaUpdate?: SourceSchema;
	}

	/** When you update a reference data source configuration for a SQL-based Kinesis Data Analytics application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created. */
	export interface ReferenceDataSourceUpdateFormProperties {

		/** Required */
		ReferenceId: FormControl<string | null | undefined>,
		TableNameUpdate: FormControl<string | null | undefined>,
	}
	export function CreateReferenceDataSourceUpdateFormGroup() {
		return new FormGroup<ReferenceDataSourceUpdateFormProperties>({
			ReferenceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableNameUpdate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For a SQL-based Kinesis Data Analytics application, describes the Amazon S3 bucket name and object key name for an in-application reference table.  */
	export interface S3ReferenceDataSourceUpdate {
		BucketARNUpdate?: string;
		FileKeyUpdate?: string;
	}

	/** For a SQL-based Kinesis Data Analytics application, describes the Amazon S3 bucket name and object key name for an in-application reference table.  */
	export interface S3ReferenceDataSourceUpdateFormProperties {
		BucketARNUpdate: FormControl<string | null | undefined>,
		FileKeyUpdate: FormControl<string | null | undefined>,
	}
	export function CreateS3ReferenceDataSourceUpdateFormGroup() {
		return new FormGroup<S3ReferenceDataSourceUpdateFormProperties>({
			BucketARNUpdate: new FormControl<string | null | undefined>(undefined),
			FileKeyUpdate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes code configuration updates for an application. This is supported for a Flink-based Kinesis Data Analytics application or a SQL-based Kinesis Data Analytics application. */
	export interface ApplicationCodeConfigurationUpdate {
		CodeContentTypeUpdate?: CodeContentType;
		CodeContentUpdate?: CodeContentUpdate;
	}

	/** Describes code configuration updates for an application. This is supported for a Flink-based Kinesis Data Analytics application or a SQL-based Kinesis Data Analytics application. */
	export interface ApplicationCodeConfigurationUpdateFormProperties {
		CodeContentTypeUpdate: FormControl<CodeContentType | null | undefined>,
	}
	export function CreateApplicationCodeConfigurationUpdateFormGroup() {
		return new FormGroup<ApplicationCodeConfigurationUpdateFormProperties>({
			CodeContentTypeUpdate: new FormControl<CodeContentType | null | undefined>(undefined),
		});

	}


	/** Describes an update to the code of an application. Not supported for Apache Zeppelin. */
	export interface CodeContentUpdate {
		TextContentUpdate?: string;
		ZipFileContentUpdate?: string;
		S3ContentLocationUpdate?: S3ContentLocationUpdate;
	}

	/** Describes an update to the code of an application. Not supported for Apache Zeppelin. */
	export interface CodeContentUpdateFormProperties {
		TextContentUpdate: FormControl<string | null | undefined>,
		ZipFileContentUpdate: FormControl<string | null | undefined>,
	}
	export function CreateCodeContentUpdateFormGroup() {
		return new FormGroup<CodeContentUpdateFormProperties>({
			TextContentUpdate: new FormControl<string | null | undefined>(undefined),
			ZipFileContentUpdate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an update for the Amazon S3 code content location for an application. */
	export interface S3ContentLocationUpdate {
		BucketARNUpdate?: string;
		FileKeyUpdate?: string;
		ObjectVersionUpdate?: string;
	}

	/** Describes an update for the Amazon S3 code content location for an application. */
	export interface S3ContentLocationUpdateFormProperties {
		BucketARNUpdate: FormControl<string | null | undefined>,
		FileKeyUpdate: FormControl<string | null | undefined>,
		ObjectVersionUpdate: FormControl<string | null | undefined>,
	}
	export function CreateS3ContentLocationUpdateFormGroup() {
		return new FormGroup<S3ContentLocationUpdateFormProperties>({
			BucketARNUpdate: new FormControl<string | null | undefined>(undefined),
			FileKeyUpdate: new FormControl<string | null | undefined>(undefined),
			ObjectVersionUpdate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes updates to the configuration parameters for a Flink-based Kinesis Data Analytics application. */
	export interface FlinkApplicationConfigurationUpdate {
		CheckpointConfigurationUpdate?: CheckpointConfigurationUpdate;
		MonitoringConfigurationUpdate?: MonitoringConfigurationUpdate;
		ParallelismConfigurationUpdate?: ParallelismConfigurationUpdate;
	}

	/** Describes updates to the configuration parameters for a Flink-based Kinesis Data Analytics application. */
	export interface FlinkApplicationConfigurationUpdateFormProperties {
	}
	export function CreateFlinkApplicationConfigurationUpdateFormGroup() {
		return new FormGroup<FlinkApplicationConfigurationUpdateFormProperties>({
		});

	}


	/** Describes updates to the checkpointing parameters for a Flink-based Kinesis Data Analytics application. */
	export interface CheckpointConfigurationUpdate {
		ConfigurationTypeUpdate?: ConfigurationType;
		CheckpointingEnabledUpdate?: boolean | null;
		CheckpointIntervalUpdate?: number | null;
		MinPauseBetweenCheckpointsUpdate?: number | null;
	}

	/** Describes updates to the checkpointing parameters for a Flink-based Kinesis Data Analytics application. */
	export interface CheckpointConfigurationUpdateFormProperties {
		ConfigurationTypeUpdate: FormControl<ConfigurationType | null | undefined>,
		CheckpointingEnabledUpdate: FormControl<boolean | null | undefined>,
		CheckpointIntervalUpdate: FormControl<number | null | undefined>,
		MinPauseBetweenCheckpointsUpdate: FormControl<number | null | undefined>,
	}
	export function CreateCheckpointConfigurationUpdateFormGroup() {
		return new FormGroup<CheckpointConfigurationUpdateFormProperties>({
			ConfigurationTypeUpdate: new FormControl<ConfigurationType | null | undefined>(undefined),
			CheckpointingEnabledUpdate: new FormControl<boolean | null | undefined>(undefined),
			CheckpointIntervalUpdate: new FormControl<number | null | undefined>(undefined),
			MinPauseBetweenCheckpointsUpdate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes updates to configuration parameters for Amazon CloudWatch logging for an application. */
	export interface MonitoringConfigurationUpdate {
		ConfigurationTypeUpdate?: ConfigurationType;
		MetricsLevelUpdate?: MetricsLevel;
		LogLevelUpdate?: LogLevel;
	}

	/** Describes updates to configuration parameters for Amazon CloudWatch logging for an application. */
	export interface MonitoringConfigurationUpdateFormProperties {
		ConfigurationTypeUpdate: FormControl<ConfigurationType | null | undefined>,
		MetricsLevelUpdate: FormControl<MetricsLevel | null | undefined>,
		LogLevelUpdate: FormControl<LogLevel | null | undefined>,
	}
	export function CreateMonitoringConfigurationUpdateFormGroup() {
		return new FormGroup<MonitoringConfigurationUpdateFormProperties>({
			ConfigurationTypeUpdate: new FormControl<ConfigurationType | null | undefined>(undefined),
			MetricsLevelUpdate: new FormControl<MetricsLevel | null | undefined>(undefined),
			LogLevelUpdate: new FormControl<LogLevel | null | undefined>(undefined),
		});

	}


	/** Describes updates to parameters for how an application executes multiple tasks simultaneously. */
	export interface ParallelismConfigurationUpdate {
		ConfigurationTypeUpdate?: ConfigurationType;
		ParallelismUpdate?: number | null;
		ParallelismPerKPUUpdate?: number | null;
		AutoScalingEnabledUpdate?: boolean | null;
	}

	/** Describes updates to parameters for how an application executes multiple tasks simultaneously. */
	export interface ParallelismConfigurationUpdateFormProperties {
		ConfigurationTypeUpdate: FormControl<ConfigurationType | null | undefined>,
		ParallelismUpdate: FormControl<number | null | undefined>,
		ParallelismPerKPUUpdate: FormControl<number | null | undefined>,
		AutoScalingEnabledUpdate: FormControl<boolean | null | undefined>,
	}
	export function CreateParallelismConfigurationUpdateFormGroup() {
		return new FormGroup<ParallelismConfigurationUpdateFormProperties>({
			ConfigurationTypeUpdate: new FormControl<ConfigurationType | null | undefined>(undefined),
			ParallelismUpdate: new FormControl<number | null | undefined>(undefined),
			ParallelismPerKPUUpdate: new FormControl<number | null | undefined>(undefined),
			AutoScalingEnabledUpdate: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes updates to the execution property groups for a Flink-based Kinesis Data Analytics application or a Studio notebook. */
	export interface EnvironmentPropertyUpdates {

		/** Required */
		PropertyGroups: Array<PropertyGroup>;
	}

	/** Describes updates to the execution property groups for a Flink-based Kinesis Data Analytics application or a Studio notebook. */
	export interface EnvironmentPropertyUpdatesFormProperties {
	}
	export function CreateEnvironmentPropertyUpdatesFormGroup() {
		return new FormGroup<EnvironmentPropertyUpdatesFormProperties>({
		});

	}


	/** Describes updates to whether snapshots are enabled for a Flink-based Kinesis Data Analytics application. */
	export interface ApplicationSnapshotConfigurationUpdate {

		/** Required */
		SnapshotsEnabledUpdate: boolean;
	}

	/** Describes updates to whether snapshots are enabled for a Flink-based Kinesis Data Analytics application. */
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

		/** Required */
		VpcConfigurationId: string;
		SubnetIdUpdates?: Array<string>;
		SecurityGroupIdUpdates?: Array<string>;
	}

	/** Describes updates to the VPC configuration used by the application. */
	export interface VpcConfigurationUpdateFormProperties {

		/** Required */
		VpcConfigurationId: FormControl<string | null | undefined>,
	}
	export function CreateVpcConfigurationUpdateFormGroup() {
		return new FormGroup<VpcConfigurationUpdateFormProperties>({
			VpcConfigurationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Updates to the configuration of Kinesis Data Analytics Studio notebook. */
	export interface ZeppelinApplicationConfigurationUpdate {
		MonitoringConfigurationUpdate?: ZeppelinMonitoringConfigurationUpdate;
		CatalogConfigurationUpdate?: CatalogConfigurationUpdate;

		/** Updates to the configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state. */
		DeployAsApplicationConfigurationUpdate?: DeployAsApplicationConfigurationUpdate;
		CustomArtifactsConfigurationUpdate?: Array<CustomArtifactConfiguration>;
	}

	/** Updates to the configuration of Kinesis Data Analytics Studio notebook. */
	export interface ZeppelinApplicationConfigurationUpdateFormProperties {
	}
	export function CreateZeppelinApplicationConfigurationUpdateFormGroup() {
		return new FormGroup<ZeppelinApplicationConfigurationUpdateFormProperties>({
		});

	}


	/** Updates to the monitoring configuration for Apache Zeppelin within a Kinesis Data Analytics Studio notebook. */
	export interface ZeppelinMonitoringConfigurationUpdate {

		/** Required */
		LogLevelUpdate: LogLevel;
	}

	/** Updates to the monitoring configuration for Apache Zeppelin within a Kinesis Data Analytics Studio notebook. */
	export interface ZeppelinMonitoringConfigurationUpdateFormProperties {

		/** Required */
		LogLevelUpdate: FormControl<LogLevel | null | undefined>,
	}
	export function CreateZeppelinMonitoringConfigurationUpdateFormGroup() {
		return new FormGroup<ZeppelinMonitoringConfigurationUpdateFormProperties>({
			LogLevelUpdate: new FormControl<LogLevel | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Updates to the configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook. */
	export interface CatalogConfigurationUpdate {

		/** Required */
		GlueDataCatalogConfigurationUpdate: GlueDataCatalogConfigurationUpdate;
	}

	/** Updates to the configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook. */
	export interface CatalogConfigurationUpdateFormProperties {
	}
	export function CreateCatalogConfigurationUpdateFormGroup() {
		return new FormGroup<CatalogConfigurationUpdateFormProperties>({
		});

	}


	/** Updates to the configuration of the Glue Data Catalog that you use for SQL queries that you write in a Kinesis Data Analytics Studio notebook. */
	export interface GlueDataCatalogConfigurationUpdate {

		/** Required */
		DatabaseARNUpdate: string;
	}

	/** Updates to the configuration of the Glue Data Catalog that you use for SQL queries that you write in a Kinesis Data Analytics Studio notebook. */
	export interface GlueDataCatalogConfigurationUpdateFormProperties {

		/** Required */
		DatabaseARNUpdate: FormControl<string | null | undefined>,
	}
	export function CreateGlueDataCatalogConfigurationUpdateFormGroup() {
		return new FormGroup<GlueDataCatalogConfigurationUpdateFormProperties>({
			DatabaseARNUpdate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Updates to the configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state. */
	export interface DeployAsApplicationConfigurationUpdate {
		S3ContentLocationUpdate?: S3ContentBaseLocationUpdate;
	}

	/** Updates to the configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state. */
	export interface DeployAsApplicationConfigurationUpdateFormProperties {
	}
	export function CreateDeployAsApplicationConfigurationUpdateFormGroup() {
		return new FormGroup<DeployAsApplicationConfigurationUpdateFormProperties>({
		});

	}


	/** The information required to update the S3 base location that holds the application. */
	export interface S3ContentBaseLocationUpdate {
		BucketARNUpdate?: string;
		BasePathUpdate?: string;
	}

	/** The information required to update the S3 base location that holds the application. */
	export interface S3ContentBaseLocationUpdateFormProperties {
		BucketARNUpdate: FormControl<string | null | undefined>,
		BasePathUpdate: FormControl<string | null | undefined>,
	}
	export function CreateS3ContentBaseLocationUpdateFormGroup() {
		return new FormGroup<S3ContentBaseLocationUpdateFormProperties>({
			BucketARNUpdate: new FormControl<string | null | undefined>(undefined),
			BasePathUpdate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the updates to the starting parameters for a Kinesis Data Analytics application. */
	export interface RunConfigurationUpdate {
		FlinkRunConfiguration?: FlinkRunConfiguration;
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

		/** Required */
		CloudWatchLoggingOptionId: string;
		LogStreamARNUpdate?: string;
	}

	/** Describes the Amazon CloudWatch logging option updates. */
	export interface CloudWatchLoggingOptionUpdateFormProperties {

		/** Required */
		CloudWatchLoggingOptionId: FormControl<string | null | undefined>,
		LogStreamARNUpdate: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLoggingOptionUpdateFormGroup() {
		return new FormGroup<CloudWatchLoggingOptionUpdateFormProperties>({
			CloudWatchLoggingOptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LogStreamARNUpdate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateApplicationMaintenanceConfigurationResponse {
		ApplicationARN?: string;
		ApplicationMaintenanceConfigurationDescription?: ApplicationMaintenanceConfigurationDescription;
	}
	export interface UpdateApplicationMaintenanceConfigurationResponseFormProperties {
		ApplicationARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationMaintenanceConfigurationResponseFormGroup() {
		return new FormGroup<UpdateApplicationMaintenanceConfigurationResponseFormProperties>({
			ApplicationARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateApplicationMaintenanceConfigurationRequest {

		/** Required */
		ApplicationName: string;

		/** Required */
		ApplicationMaintenanceConfigurationUpdate: ApplicationMaintenanceConfigurationUpdate;
	}
	export interface UpdateApplicationMaintenanceConfigurationRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationMaintenanceConfigurationRequestFormGroup() {
		return new FormGroup<UpdateApplicationMaintenanceConfigurationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the updated maintenance configuration for the application. */
	export interface ApplicationMaintenanceConfigurationUpdate {

		/** Required */
		ApplicationMaintenanceWindowStartTimeUpdate: string;
	}

	/** Describes the updated maintenance configuration for the application. */
	export interface ApplicationMaintenanceConfigurationUpdateFormProperties {

		/** Required */
		ApplicationMaintenanceWindowStartTimeUpdate: FormControl<string | null | undefined>,
	}
	export function CreateApplicationMaintenanceConfigurationUpdateFormGroup() {
		return new FormGroup<ApplicationMaintenanceConfigurationUpdateFormProperties>({
			ApplicationMaintenanceWindowStartTimeUpdate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

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
		 * <p> Adds a streaming source to your SQL-based Kinesis Data Analytics application. </p> <p>You can add a streaming source when you create an application, or you can use this operation to add a streaming source after you create an application. For more information, see <a>CreateApplication</a>.</p> <p>Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application version. </p>
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInput
		 * @return {AddApplicationInputResponse} Success
		 */
		AddApplicationInput(requestBody: AddApplicationInputRequest): Observable<AddApplicationInputResponse> {
			return this.http.post<AddApplicationInputResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInput', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds an <a>InputProcessingConfiguration</a> to a SQL-based Kinesis Data Analytics application. An input processor pre-processes records on the input stream before the application's SQL code executes. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">Amazon Lambda</a>.
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration
		 * @return {AddApplicationInputProcessingConfigurationResponse} Success
		 */
		AddApplicationInputProcessingConfiguration(requestBody: AddApplicationInputProcessingConfigurationRequest): Observable<AddApplicationInputProcessingConfigurationResponse> {
			return this.http.post<AddApplicationInputProcessingConfigurationResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds an external destination to your SQL-based Kinesis Data Analytics application.</p> <p>If you want Kinesis Data Analytics to deliver data from an in-application stream within your application to an external destination (such as an Kinesis data stream, a Kinesis Data Firehose delivery stream, or an Amazon Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.</p> <p> You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. </p> <p> Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application version.</p>
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.AddApplicationOutput
		 * @return {AddApplicationOutputResponse} Success
		 */
		AddApplicationOutput(requestBody: AddApplicationOutputRequest): Observable<AddApplicationOutputResponse> {
			return this.http.post<AddApplicationOutputResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.AddApplicationOutput', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds a reference data source to an existing SQL-based Kinesis Data Analytics application.</p> <p>Kinesis Data Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in an Amazon S3 object maps to columns in the resulting in-application table.</p>
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
		 * Creates a Kinesis Data Analytics application. For information about creating a Kinesis Data Analytics application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/getting-started.html">Creating an Application</a>.
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.CreateApplication
		 * @return {CreateApplicationResponse} Success
		 */
		CreateApplication(requestBody: CreateApplicationRequest): Observable<CreateApplicationResponse> {
			return this.http.post<CreateApplicationResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.CreateApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates and returns a URL that you can use to connect to an application's extension.</p> <p>The IAM role or user used to call this API defines the permissions to access the extension. After the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request that attempts to connect to the extension. </p> <p>You control the amount of time that the URL will be valid using the <code>SessionExpirationDurationInSeconds</code> parameter. If you do not provide this parameter, the returned URL is valid for twelve hours.</p> <note> <p>The URL that you get from a call to CreateApplicationPresignedUrl must be used within 3 minutes to be valid. If you first try to use the URL after the 3-minute limit expires, the service returns an HTTP 403 Forbidden error.</p> </note>
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationPresignedUrl
		 * @return {CreateApplicationPresignedUrlResponse} Success
		 */
		CreateApplicationPresignedUrl(requestBody: CreateApplicationPresignedUrlRequest): Observable<CreateApplicationPresignedUrlResponse> {
			return this.http.post<CreateApplicationPresignedUrlResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.CreateApplicationPresignedUrl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Deletes an Amazon CloudWatch log stream from an Kinesis Data Analytics application.
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
		 * Deletes the output destination configuration from your SQL-based Kinesis Data Analytics application's configuration. Kinesis Data Analytics will no longer write data from the corresponding in-application stream to the external output destination.
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationOutput
		 * @return {DeleteApplicationOutputResponse} Success
		 */
		DeleteApplicationOutput(requestBody: DeleteApplicationOutputRequest): Observable<DeleteApplicationOutputResponse> {
			return this.http.post<DeleteApplicationOutputResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.DeleteApplicationOutput', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a reference data source configuration from the specified SQL-based Kinesis Data Analytics application's configuration.</p> <p>If the application is running, Kinesis Data Analytics immediately removes the in-application table that you created using the <a>AddApplicationReferenceDataSource</a> operation. </p>
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
		 * <p>Returns information about a specific Kinesis Data Analytics application.</p> <p>If you want to retrieve a list of all applications in your account, use the <a>ListApplications</a> operation.</p>
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
		 * <p>Provides a detailed description of a specified version of the application. To see a list of all the versions of an application, invoke the <a>ListApplicationVersions</a> operation.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationVersion
		 * @return {DescribeApplicationVersionResponse} Success
		 */
		DescribeApplicationVersion(requestBody: DescribeApplicationVersionRequest): Observable<DescribeApplicationVersionResponse> {
			return this.http.post<DescribeApplicationVersionResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.DescribeApplicationVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Infers a schema for a SQL-based Kinesis Data Analytics application by evaluating sample records on the specified streaming source (Kinesis data stream or Kinesis Data Firehose delivery stream) or Amazon S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.</p> <p> You can use the inferred schema when configuring a streaming source for your application. When you create an application using the Kinesis Data Analytics console, the console uses this operation to infer a schema and show it in the console user interface. </p>
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
		 * <p>Lists all the versions for the specified application, including versions that were rolled back. The response also includes a summary of the configuration associated with each version.</p> <p>To get the complete description of a specific application version, invoke the <a>DescribeApplicationVersion</a> operation.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.ListApplicationVersions
		 * @return {ListApplicationVersionsResponse} Success
		 */
		ListApplicationVersions(requestBody: ListApplicationVersionsRequest): Observable<ListApplicationVersionsResponse> {
			return this.http.post<ListApplicationVersionsResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.ListApplicationVersions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of Kinesis Data Analytics applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. </p> <p>If you want detailed information about a specific application, use <a>DescribeApplication</a>.</p>
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
		 * <p>Reverts the application to the previous running version. You can roll back an application if you suspect it is stuck in a transient status. </p> <p>You can roll back an application only if it is in the <code>UPDATING</code> or <code>AUTOSCALING</code> status.</p> <p>When you rollback an application, it loads state data from the last successful snapshot. If the application has no snapshots, Kinesis Data Analytics rejects the rollback request.</p> <p>This action is not supported for Kinesis Data Analytics for SQL applications.</p>
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.RollbackApplication
		 * @return {RollbackApplicationResponse} Success
		 */
		RollbackApplication(requestBody: RollbackApplicationRequest): Observable<RollbackApplicationResponse> {
			return this.http.post<RollbackApplicationResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.RollbackApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts the specified Kinesis Data Analytics application. After creating an application, you must exclusively call this operation to start your application.
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.StartApplication
		 * @return {StartApplicationResponse} Success
		 */
		StartApplication(requestBody: StartApplicationRequest): Observable<StartApplicationResponse> {
			return this.http.post<StartApplicationResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.StartApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops the application from processing data. You can stop an application only if it is in the running status, unless you set the <code>Force</code> parameter to <code>true</code>.</p> <p>You can use the <a>DescribeApplication</a> operation to find the application status. </p> <p>Kinesis Data Analytics takes a snapshot when the application is stopped, unless <code>Force</code> is set to <code>true</code>.</p>
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.StopApplication
		 * @return {StopApplicationResponse} Success
		 */
		StopApplication(requestBody: StopApplicationRequest): Observable<StopApplicationResponse> {
			return this.http.post<StopApplicationResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.StopApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds one or more key-value tags to a Kinesis Data Analytics application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from a Kinesis Data Analytics application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates an existing Kinesis Data Analytics application. Using this operation, you can update application code, input configuration, and output configuration. </p> <p>Kinesis Data Analytics updates the <code>ApplicationVersionId</code> each time you update your application. </p> <note> <p>You cannot update the <code>RuntimeEnvironment</code> of an existing application. If you need to update an application's <code>RuntimeEnvironment</code>, you must delete the application and create it again.</p> </note>
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.UpdateApplication
		 * @return {UpdateApplicationResponse} Success
		 */
		UpdateApplication(requestBody: UpdateApplicationRequest): Observable<UpdateApplicationResponse> {
			return this.http.post<UpdateApplicationResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the maintenance configuration of the Kinesis Data Analytics application. </p> <p>You can invoke this operation on an application that is in one of the two following states: <code>READY</code> or <code>RUNNING</code>. If you invoke it when the application is in a state other than these two states, it throws a <code>ResourceInUseException</code>. The service makes use of the updated configuration the next time it schedules maintenance for the application. If you invoke this operation after the service schedules maintenance, the service will apply the configuration update the next time it schedules maintenance for the application. This means that you might not see the maintenance configuration update applied to the maintenance process that follows a successful invocation of this operation, but to the following maintenance process instead.</p> <p>To see the current maintenance configuration of your application, invoke the <a>DescribeApplication</a> operation.</p> <p>For information about application maintenance, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/maintenance.html">Kinesis Data Analytics for Apache Flink Maintenance</a>.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>
		 * Post #X-Amz-Target=KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration
		 * @return {UpdateApplicationMaintenanceConfigurationResponse} Success
		 */
		UpdateApplicationMaintenanceConfiguration(requestBody: UpdateApplicationMaintenanceConfigurationRequest): Observable<UpdateApplicationMaintenanceConfigurationResponse> {
			return this.http.post<UpdateApplicationMaintenanceConfigurationResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AddApplicationCloudWatchLoggingOptionX_Amz_Target { 'KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption' = 0 }

	export enum AddApplicationInputX_Amz_Target { 'KinesisAnalytics_20180523.AddApplicationInput' = 0 }

	export enum AddApplicationInputProcessingConfigurationX_Amz_Target { 'KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration' = 0 }

	export enum AddApplicationOutputX_Amz_Target { 'KinesisAnalytics_20180523.AddApplicationOutput' = 0 }

	export enum AddApplicationReferenceDataSourceX_Amz_Target { 'KinesisAnalytics_20180523.AddApplicationReferenceDataSource' = 0 }

	export enum AddApplicationVpcConfigurationX_Amz_Target { 'KinesisAnalytics_20180523.AddApplicationVpcConfiguration' = 0 }

	export enum CreateApplicationX_Amz_Target { 'KinesisAnalytics_20180523.CreateApplication' = 0 }

	export enum CreateApplicationPresignedUrlX_Amz_Target { 'KinesisAnalytics_20180523.CreateApplicationPresignedUrl' = 0 }

	export enum CreateApplicationSnapshotX_Amz_Target { 'KinesisAnalytics_20180523.CreateApplicationSnapshot' = 0 }

	export enum DeleteApplicationX_Amz_Target { 'KinesisAnalytics_20180523.DeleteApplication' = 0 }

	export enum DeleteApplicationCloudWatchLoggingOptionX_Amz_Target { 'KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption' = 0 }

	export enum DeleteApplicationInputProcessingConfigurationX_Amz_Target { 'KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration' = 0 }

	export enum DeleteApplicationOutputX_Amz_Target { 'KinesisAnalytics_20180523.DeleteApplicationOutput' = 0 }

	export enum DeleteApplicationReferenceDataSourceX_Amz_Target { 'KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource' = 0 }

	export enum DeleteApplicationSnapshotX_Amz_Target { 'KinesisAnalytics_20180523.DeleteApplicationSnapshot' = 0 }

	export enum DeleteApplicationVpcConfigurationX_Amz_Target { 'KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration' = 0 }

	export enum DescribeApplicationX_Amz_Target { 'KinesisAnalytics_20180523.DescribeApplication' = 0 }

	export enum DescribeApplicationSnapshotX_Amz_Target { 'KinesisAnalytics_20180523.DescribeApplicationSnapshot' = 0 }

	export enum DescribeApplicationVersionX_Amz_Target { 'KinesisAnalytics_20180523.DescribeApplicationVersion' = 0 }

	export enum DiscoverInputSchemaX_Amz_Target { 'KinesisAnalytics_20180523.DiscoverInputSchema' = 0 }

	export enum ListApplicationSnapshotsX_Amz_Target { 'KinesisAnalytics_20180523.ListApplicationSnapshots' = 0 }

	export enum ListApplicationVersionsX_Amz_Target { 'KinesisAnalytics_20180523.ListApplicationVersions' = 0 }

	export enum ListApplicationsX_Amz_Target { 'KinesisAnalytics_20180523.ListApplications' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'KinesisAnalytics_20180523.ListTagsForResource' = 0 }

	export enum RollbackApplicationX_Amz_Target { 'KinesisAnalytics_20180523.RollbackApplication' = 0 }

	export enum StartApplicationX_Amz_Target { 'KinesisAnalytics_20180523.StartApplication' = 0 }

	export enum StopApplicationX_Amz_Target { 'KinesisAnalytics_20180523.StopApplication' = 0 }

	export enum TagResourceX_Amz_Target { 'KinesisAnalytics_20180523.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'KinesisAnalytics_20180523.UntagResource' = 0 }

	export enum UpdateApplicationX_Amz_Target { 'KinesisAnalytics_20180523.UpdateApplication' = 0 }

	export enum UpdateApplicationMaintenanceConfigurationX_Amz_Target { 'KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration' = 0 }

}

