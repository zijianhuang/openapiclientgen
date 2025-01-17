import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddApplicationCloudWatchLoggingOptionResponse {
	}
	export interface AddApplicationCloudWatchLoggingOptionResponseFormProperties {
	}
	export function CreateAddApplicationCloudWatchLoggingOptionResponseFormGroup() {
		return new FormGroup<AddApplicationCloudWatchLoggingOptionResponseFormProperties>({
		});

	}

	export interface AddApplicationCloudWatchLoggingOptionRequest {

		/** Required */
		ApplicationName: string;

		/** Required */
		CurrentApplicationVersionId: number;

		/** Required */
		CloudWatchLoggingOption: CloudWatchLoggingOption;
	}
	export interface AddApplicationCloudWatchLoggingOptionRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		CurrentApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateAddApplicationCloudWatchLoggingOptionRequestFormGroup() {
		return new FormGroup<AddApplicationCloudWatchLoggingOptionRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides a description of CloudWatch logging options, including the log stream Amazon Resource Name (ARN) and the role ARN. */
	export interface CloudWatchLoggingOption {

		/** Required */
		LogStreamARN: string;

		/** Required */
		RoleARN: string;
	}

	/** Provides a description of CloudWatch logging options, including the log stream Amazon Resource Name (ARN) and the role ARN. */
	export interface CloudWatchLoggingOptionFormProperties {

		/** Required */
		LogStreamARN: FormControl<string | null | undefined>,

		/** Required */
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLoggingOptionFormGroup() {
		return new FormGroup<CloudWatchLoggingOptionFormProperties>({
			LogStreamARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UnsupportedOperationException {
	}
	export interface UnsupportedOperationExceptionFormProperties {
	}
	export function CreateUnsupportedOperationExceptionFormGroup() {
		return new FormGroup<UnsupportedOperationExceptionFormProperties>({
		});

	}


	/** <p/> */
	export interface AddApplicationInputResponse {
	}

	/** <p/> */
	export interface AddApplicationInputResponseFormProperties {
	}
	export function CreateAddApplicationInputResponseFormGroup() {
		return new FormGroup<AddApplicationInputResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface AddApplicationInputRequest {

		/** Required */
		ApplicationName: string;

		/** Required */
		CurrentApplicationVersionId: number;

		/** Required */
		Input: Input;
	}

	/** <p/> */
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


	/** When you configure the application input, you specify the streaming source, the in-application stream name that is created, and the mapping between the two. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.  */
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

	/** When you configure the application input, you specify the streaming source, the in-application stream name that is created, and the mapping between the two. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.  */
	export interface InputFormProperties {

		/** Required */
		NamePrefix: FormControl<string | null | undefined>,
	}
	export function CreateInputFormGroup() {
		return new FormGroup<InputFormProperties>({
			NamePrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides a description of a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>. */
	export interface InputProcessingConfiguration {

		/** Required */
		InputLambdaProcessor: InputLambdaProcessor;
	}

	/** Provides a description of a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>. */
	export interface InputProcessingConfigurationFormProperties {
	}
	export function CreateInputProcessingConfigurationFormGroup() {
		return new FormGroup<InputProcessingConfigurationFormProperties>({
		});

	}


	/** An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda function.  */
	export interface InputLambdaProcessor {

		/** Required */
		ResourceARN: string;

		/** Required */
		RoleARN: string;
	}

	/** An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda function.  */
	export interface InputLambdaProcessorFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,

		/** Required */
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateInputLambdaProcessorFormGroup() {
		return new FormGroup<InputLambdaProcessorFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Identifies an Amazon Kinesis stream as the streaming source. You provide the stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf. */
	export interface KinesisStreamsInput {

		/** Required */
		ResourceARN: string;

		/** Required */
		RoleARN: string;
	}

	/**  Identifies an Amazon Kinesis stream as the streaming source. You provide the stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf. */
	export interface KinesisStreamsInputFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,

		/** Required */
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisStreamsInputFormGroup() {
		return new FormGroup<KinesisStreamsInputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Identifies an Amazon Kinesis Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf. */
	export interface KinesisFirehoseInput {

		/** Required */
		ResourceARN: string;

		/** Required */
		RoleARN: string;
	}

	/**  Identifies an Amazon Kinesis Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf. */
	export interface KinesisFirehoseInputFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,

		/** Required */
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisFirehoseInputFormGroup() {
		return new FormGroup<KinesisFirehoseInputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the number of in-application streams to create for a given streaming source. For information about parallelism, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.  */
	export interface InputParallelism {
		Count?: number | null;
	}

	/** Describes the number of in-application streams to create for a given streaming source. For information about parallelism, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.  */
	export interface InputParallelismFormProperties {
		Count: FormControl<number | null | undefined>,
	}
	export function CreateInputParallelismFormGroup() {
		return new FormGroup<InputParallelismFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. */
	export interface SourceSchema {

		/** Required */
		RecordFormat: RecordFormat;
		RecordEncoding?: string;

		/** Required */
		RecordColumns: Array<RecordColumn>;
	}

	/** Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. */
	export interface SourceSchemaFormProperties {
		RecordEncoding: FormControl<string | null | undefined>,
	}
	export function CreateSourceSchemaFormGroup() {
		return new FormGroup<SourceSchemaFormProperties>({
			RecordEncoding: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Describes the record format and relevant mapping information that should be applied to schematize the records on the stream.  */
	export interface RecordFormat {

		/** Required */
		RecordFormatType: RecordFormatType;
		MappingParameters?: MappingParameters;
	}

	/**  Describes the record format and relevant mapping information that should be applied to schematize the records on the stream.  */
	export interface RecordFormatFormProperties {

		/** Required */
		RecordFormatType: FormControl<RecordFormatType | null | undefined>,
	}
	export function CreateRecordFormatFormGroup() {
		return new FormGroup<RecordFormatFormProperties>({
			RecordFormatType: new FormControl<RecordFormatType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RecordFormatType { JSON = 'JSON', CSV = 'CSV' }


	/** When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source. */
	export interface MappingParameters {
		JSONMappingParameters?: JSONMappingParameters;
		CSVMappingParameters?: CSVMappingParameters;
	}

	/** When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source. */
	export interface MappingParametersFormProperties {
	}
	export function CreateMappingParametersFormGroup() {
		return new FormGroup<MappingParametersFormProperties>({
		});

	}


	/** Provides additional mapping information when JSON is the record format on the streaming source. */
	export interface JSONMappingParameters {

		/** Required */
		RecordRowPath: string;
	}

	/** Provides additional mapping information when JSON is the record format on the streaming source. */
	export interface JSONMappingParametersFormProperties {

		/** Required */
		RecordRowPath: FormControl<string | null | undefined>,
	}
	export function CreateJSONMappingParametersFormGroup() {
		return new FormGroup<JSONMappingParametersFormProperties>({
			RecordRowPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the <i>'\n'</i> as the row delimiter and a comma (",") as the column delimiter: </p> <p> <code>"name1", "address1"</code> </p> <p> <code>"name2", "address2"</code> </p> */
	export interface CSVMappingParameters {

		/** Required */
		RecordRowDelimiter: string;

		/** Required */
		RecordColumnDelimiter: string;
	}

	/** <p>Provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the <i>'\n'</i> as the row delimiter and a comma (",") as the column delimiter: </p> <p> <code>"name1", "address1"</code> </p> <p> <code>"name2", "address2"</code> </p> */
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


	/** <p>Describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.</p> <p>Also used to describe the format of the reference data source.</p> */
	export interface RecordColumn {

		/** Required */
		Name: string;
		Mapping?: string;

		/** Required */
		SqlType: string;
	}

	/** <p>Describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.</p> <p>Also used to describe the format of the reference data source.</p> */
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

	export interface CodeValidationException {
	}
	export interface CodeValidationExceptionFormProperties {
	}
	export function CreateCodeValidationExceptionFormGroup() {
		return new FormGroup<CodeValidationExceptionFormProperties>({
		});

	}

	export interface AddApplicationInputProcessingConfigurationResponse {
	}
	export interface AddApplicationInputProcessingConfigurationResponseFormProperties {
	}
	export function CreateAddApplicationInputProcessingConfigurationResponseFormGroup() {
		return new FormGroup<AddApplicationInputProcessingConfigurationResponseFormProperties>({
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


	/** <p/> */
	export interface AddApplicationOutputResponse {
	}

	/** <p/> */
	export interface AddApplicationOutputResponseFormProperties {
	}
	export function CreateAddApplicationOutputResponseFormGroup() {
		return new FormGroup<AddApplicationOutputResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface AddApplicationOutputRequest {

		/** Required */
		ApplicationName: string;

		/** Required */
		CurrentApplicationVersionId: number;

		/** Required */
		Output: Output;
	}

	/** <p/> */
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


	/** <p> Describes application output configuration in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream. </p> <p/> <p>For limits on how many destinations an application can write and other limitations, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>. </p> */
	export interface Output {

		/** Required */
		Name: string;
		KinesisStreamsOutput?: KinesisStreamsOutput;
		KinesisFirehoseOutput?: KinesisFirehoseOutput;
		LambdaOutput?: LambdaOutput;

		/** Required */
		DestinationSchema: DestinationSchema;
	}

	/** <p> Describes application output configuration in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream. </p> <p/> <p>For limits on how many destinations an application can write and other limitations, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>. </p> */
	export interface OutputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOutputFormGroup() {
		return new FormGroup<OutputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** When configuring application output, identifies an Amazon Kinesis stream as the destination. You provide the stream Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the stream on your behalf. */
	export interface KinesisStreamsOutput {

		/** Required */
		ResourceARN: string;

		/** Required */
		RoleARN: string;
	}

	/** When configuring application output, identifies an Amazon Kinesis stream as the destination. You provide the stream Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the stream on your behalf. */
	export interface KinesisStreamsOutputFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,

		/** Required */
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisStreamsOutputFormGroup() {
		return new FormGroup<KinesisStreamsOutputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** When configuring application output, identifies an Amazon Kinesis Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis Analytics to write to the stream on your behalf. */
	export interface KinesisFirehoseOutput {

		/** Required */
		ResourceARN: string;

		/** Required */
		RoleARN: string;
	}

	/** When configuring application output, identifies an Amazon Kinesis Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis Analytics to write to the stream on your behalf. */
	export interface KinesisFirehoseOutputFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,

		/** Required */
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisFirehoseOutputFormGroup() {
		return new FormGroup<KinesisFirehoseOutputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** When configuring application output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the function on your behalf.  */
	export interface LambdaOutput {

		/** Required */
		ResourceARN: string;

		/** Required */
		RoleARN: string;
	}

	/** When configuring application output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the function on your behalf.  */
	export interface LambdaOutputFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,

		/** Required */
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateLambdaOutputFormGroup() {
		return new FormGroup<LambdaOutputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.  */
	export interface DestinationSchema {

		/** Required */
		RecordFormatType: RecordFormatType;
	}

	/** Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.  */
	export interface DestinationSchemaFormProperties {

		/** Required */
		RecordFormatType: FormControl<RecordFormatType | null | undefined>,
	}
	export function CreateDestinationSchemaFormGroup() {
		return new FormGroup<DestinationSchemaFormProperties>({
			RecordFormatType: new FormControl<RecordFormatType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface AddApplicationReferenceDataSourceResponse {
	}

	/** <p/> */
	export interface AddApplicationReferenceDataSourceResponseFormProperties {
	}
	export function CreateAddApplicationReferenceDataSourceResponseFormGroup() {
		return new FormGroup<AddApplicationReferenceDataSourceResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface AddApplicationReferenceDataSourceRequest {

		/** Required */
		ApplicationName: string;

		/** Required */
		CurrentApplicationVersionId: number;

		/** Required */
		ReferenceDataSource: ReferenceDataSource;
	}

	/** <p/> */
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


	/** Describes the reference data source by providing the source information (S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table. */
	export interface ReferenceDataSource {

		/** Required */
		TableName: string;
		S3ReferenceDataSource?: S3ReferenceDataSource;

		/** Required */
		ReferenceSchema: SourceSchema;
	}

	/** Describes the reference data source by providing the source information (S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table. */
	export interface ReferenceDataSourceFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateReferenceDataSourceFormGroup() {
		return new FormGroup<ReferenceDataSourceFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Identifies the S3 bucket and object that contains the reference data. Also identifies the IAM role Amazon Kinesis Analytics can assume to read this object on your behalf.</p> <p>An Amazon Kinesis Analytics application loads reference data only once. If the data changes, you call the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation to trigger reloading of data into your application.</p> */
	export interface S3ReferenceDataSource {

		/** Required */
		BucketARN: string;

		/** Required */
		FileKey: string;

		/** Required */
		ReferenceRoleARN: string;
	}

	/** <p>Identifies the S3 bucket and object that contains the reference data. Also identifies the IAM role Amazon Kinesis Analytics can assume to read this object on your behalf.</p> <p>An Amazon Kinesis Analytics application loads reference data only once. If the data changes, you call the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation to trigger reloading of data into your application.</p> */
	export interface S3ReferenceDataSourceFormProperties {

		/** Required */
		BucketARN: FormControl<string | null | undefined>,

		/** Required */
		FileKey: FormControl<string | null | undefined>,

		/** Required */
		ReferenceRoleARN: FormControl<string | null | undefined>,
	}
	export function CreateS3ReferenceDataSourceFormGroup() {
		return new FormGroup<S3ReferenceDataSourceFormProperties>({
			BucketARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FileKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReferenceRoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** TBD */
	export interface CreateApplicationResponse {

		/** Required */
		ApplicationSummary: ApplicationSummary;
	}

	/** TBD */
	export interface CreateApplicationResponseFormProperties {
	}
	export function CreateCreateApplicationResponseFormGroup() {
		return new FormGroup<CreateApplicationResponseFormProperties>({
		});

	}


	/** <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.</p> */
	export interface ApplicationSummary {

		/** Required */
		ApplicationName: string;

		/** Required */
		ApplicationARN: string;

		/** Required */
		ApplicationStatus: ApplicationStatus;
	}

	/** <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.</p> */
	export interface ApplicationSummaryFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		ApplicationARN: FormControl<string | null | undefined>,

		/** Required */
		ApplicationStatus: FormControl<ApplicationStatus | null | undefined>,
	}
	export function CreateApplicationSummaryFormGroup() {
		return new FormGroup<ApplicationSummaryFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApplicationARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApplicationStatus: new FormControl<ApplicationStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ApplicationStatus { DELETING = 'DELETING', STARTING = 'STARTING', STOPPING = 'STOPPING', READY = 'READY', RUNNING = 'RUNNING', UPDATING = 'UPDATING' }


	/** TBD */
	export interface CreateApplicationRequest {

		/** Required */
		ApplicationName: string;
		ApplicationDescription?: string;
		Inputs?: Array<Input>;
		Outputs?: Array<Output>;
		CloudWatchLoggingOptions?: Array<CloudWatchLoggingOption>;
		ApplicationCode?: string;
		Tags?: Array<Tag>;
	}

	/** TBD */
	export interface CreateApplicationRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,
		ApplicationDescription: FormControl<string | null | undefined>,
		ApplicationCode: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationRequestFormGroup() {
		return new FormGroup<CreateApplicationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApplicationDescription: new FormControl<string | null | undefined>(undefined),
			ApplicationCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>. */
	export interface Tag {

		/** Required */
		Key: string;
		Value?: string;
	}

	/** A key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>. */
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


	/** <p/> */
	export interface DeleteApplicationResponse {
	}

	/** <p/> */
	export interface DeleteApplicationResponseFormProperties {
	}
	export function CreateDeleteApplicationResponseFormGroup() {
		return new FormGroup<DeleteApplicationResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface DeleteApplicationRequest {

		/** Required */
		ApplicationName: string;

		/** Required */
		CreateTimestamp: Date;
	}

	/** <p/> */
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
	}
	export interface DeleteApplicationCloudWatchLoggingOptionResponseFormProperties {
	}
	export function CreateDeleteApplicationCloudWatchLoggingOptionResponseFormGroup() {
		return new FormGroup<DeleteApplicationCloudWatchLoggingOptionResponseFormProperties>({
		});

	}

	export interface DeleteApplicationCloudWatchLoggingOptionRequest {

		/** Required */
		ApplicationName: string;

		/** Required */
		CurrentApplicationVersionId: number;

		/** Required */
		CloudWatchLoggingOptionId: string;
	}
	export interface DeleteApplicationCloudWatchLoggingOptionRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		CurrentApplicationVersionId: FormControl<number | null | undefined>,

		/** Required */
		CloudWatchLoggingOptionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteApplicationCloudWatchLoggingOptionRequestFormGroup() {
		return new FormGroup<DeleteApplicationCloudWatchLoggingOptionRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			CloudWatchLoggingOptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteApplicationInputProcessingConfigurationResponse {
	}
	export interface DeleteApplicationInputProcessingConfigurationResponseFormProperties {
	}
	export function CreateDeleteApplicationInputProcessingConfigurationResponseFormGroup() {
		return new FormGroup<DeleteApplicationInputProcessingConfigurationResponseFormProperties>({
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


	/** <p/> */
	export interface DeleteApplicationOutputResponse {
	}

	/** <p/> */
	export interface DeleteApplicationOutputResponseFormProperties {
	}
	export function CreateDeleteApplicationOutputResponseFormGroup() {
		return new FormGroup<DeleteApplicationOutputResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface DeleteApplicationOutputRequest {

		/** Required */
		ApplicationName: string;

		/** Required */
		CurrentApplicationVersionId: number;

		/** Required */
		OutputId: string;
	}

	/** <p/> */
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
	}
	export interface DeleteApplicationReferenceDataSourceResponseFormProperties {
	}
	export function CreateDeleteApplicationReferenceDataSourceResponseFormGroup() {
		return new FormGroup<DeleteApplicationReferenceDataSourceResponseFormProperties>({
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


	/** <p/> */
	export interface DescribeApplicationResponse {

		/** Required */
		ApplicationDetail: ApplicationDetail;
	}

	/** <p/> */
	export interface DescribeApplicationResponseFormProperties {
	}
	export function CreateDescribeApplicationResponseFormGroup() {
		return new FormGroup<DescribeApplicationResponseFormProperties>({
		});

	}


	/** <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Provides a description of the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configuration.</p> */
	export interface ApplicationDetail {

		/** Required */
		ApplicationName: string;
		ApplicationDescription?: string;

		/** Required */
		ApplicationARN: string;

		/** Required */
		ApplicationStatus: ApplicationStatus;
		CreateTimestamp?: Date;
		LastUpdateTimestamp?: Date;
		InputDescriptions?: Array<InputDescription>;
		OutputDescriptions?: Array<OutputDescription>;
		ReferenceDataSourceDescriptions?: Array<ReferenceDataSourceDescription>;
		CloudWatchLoggingOptionDescriptions?: Array<CloudWatchLoggingOptionDescription>;
		ApplicationCode?: string;

		/** Required */
		ApplicationVersionId: number;
	}

	/** <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Provides a description of the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configuration.</p> */
	export interface ApplicationDetailFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,
		ApplicationDescription: FormControl<string | null | undefined>,

		/** Required */
		ApplicationARN: FormControl<string | null | undefined>,

		/** Required */
		ApplicationStatus: FormControl<ApplicationStatus | null | undefined>,
		CreateTimestamp: FormControl<Date | null | undefined>,
		LastUpdateTimestamp: FormControl<Date | null | undefined>,
		ApplicationCode: FormControl<string | null | undefined>,

		/** Required */
		ApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateApplicationDetailFormGroup() {
		return new FormGroup<ApplicationDetailFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApplicationDescription: new FormControl<string | null | undefined>(undefined),
			ApplicationARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApplicationStatus: new FormControl<ApplicationStatus | null | undefined>(undefined, [Validators.required]),
			CreateTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdateTimestamp: new FormControl<Date | null | undefined>(undefined),
			ApplicationCode: new FormControl<string | null | undefined>(undefined),
			ApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the application input configuration. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.  */
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

	/** Describes the application input configuration. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.  */
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


	/** Provides configuration information about an input processor. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>. */
	export interface InputProcessingConfigurationDescription {
		InputLambdaProcessorDescription?: InputLambdaProcessorDescription;
	}

	/** Provides configuration information about an input processor. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>. */
	export interface InputProcessingConfigurationDescriptionFormProperties {
	}
	export function CreateInputProcessingConfigurationDescriptionFormGroup() {
		return new FormGroup<InputProcessingConfigurationDescriptionFormProperties>({
		});

	}


	/** An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda expression. */
	export interface InputLambdaProcessorDescription {
		ResourceARN?: string;
		RoleARN?: string;
	}

	/** An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda expression. */
	export interface InputLambdaProcessorDescriptionFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateInputLambdaProcessorDescriptionFormGroup() {
		return new FormGroup<InputLambdaProcessorDescriptionFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Describes the Amazon Kinesis stream that is configured as the streaming source in the application input configuration.  */
	export interface KinesisStreamsInputDescription {
		ResourceARN?: string;
		RoleARN?: string;
	}

	/**  Describes the Amazon Kinesis stream that is configured as the streaming source in the application input configuration.  */
	export interface KinesisStreamsInputDescriptionFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisStreamsInputDescriptionFormGroup() {
		return new FormGroup<KinesisStreamsInputDescriptionFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Describes the Amazon Kinesis Firehose delivery stream that is configured as the streaming source in the application input configuration.  */
	export interface KinesisFirehoseInputDescription {
		ResourceARN?: string;
		RoleARN?: string;
	}

	/**  Describes the Amazon Kinesis Firehose delivery stream that is configured as the streaming source in the application input configuration.  */
	export interface KinesisFirehoseInputDescriptionFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisFirehoseInputDescriptionFormGroup() {
		return new FormGroup<KinesisFirehoseInputDescriptionFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
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

	export enum InputStartingPosition { NOW = 'NOW', TRIM_HORIZON = 'TRIM_HORIZON', LAST_STOPPED_POINT = 'LAST_STOPPED_POINT' }


	/** Describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream.  */
	export interface OutputDescription {
		OutputId?: string;
		Name?: string;
		KinesisStreamsOutputDescription?: KinesisStreamsOutputDescription;
		KinesisFirehoseOutputDescription?: KinesisFirehoseOutputDescription;
		LambdaOutputDescription?: LambdaOutputDescription;
		DestinationSchema?: DestinationSchema;
	}

	/** Describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream.  */
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


	/**  For an application output, describes the Amazon Kinesis stream configured as its destination.  */
	export interface KinesisStreamsOutputDescription {
		ResourceARN?: string;
		RoleARN?: string;
	}

	/**  For an application output, describes the Amazon Kinesis stream configured as its destination.  */
	export interface KinesisStreamsOutputDescriptionFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisStreamsOutputDescriptionFormGroup() {
		return new FormGroup<KinesisStreamsOutputDescriptionFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  For an application output, describes the Amazon Kinesis Firehose delivery stream configured as its destination.  */
	export interface KinesisFirehoseOutputDescription {
		ResourceARN?: string;
		RoleARN?: string;
	}

	/**  For an application output, describes the Amazon Kinesis Firehose delivery stream configured as its destination.  */
	export interface KinesisFirehoseOutputDescriptionFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisFirehoseOutputDescriptionFormGroup() {
		return new FormGroup<KinesisFirehoseOutputDescriptionFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For an application output, describes the AWS Lambda function configured as its destination.  */
	export interface LambdaOutputDescription {
		ResourceARN?: string;
		RoleARN?: string;
	}

	/** For an application output, describes the AWS Lambda function configured as its destination.  */
	export interface LambdaOutputDescriptionFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateLambdaOutputDescriptionFormGroup() {
		return new FormGroup<LambdaOutputDescriptionFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the reference data source configured for an application. */
	export interface ReferenceDataSourceDescription {

		/** Required */
		ReferenceId: string;

		/** Required */
		TableName: string;

		/** Required */
		S3ReferenceDataSourceDescription: S3ReferenceDataSourceDescription;
		ReferenceSchema?: SourceSchema;
	}

	/** Describes the reference data source configured for an application. */
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


	/** Provides the bucket name and object key name that stores the reference data. */
	export interface S3ReferenceDataSourceDescription {

		/** Required */
		BucketARN: string;

		/** Required */
		FileKey: string;

		/** Required */
		ReferenceRoleARN: string;
	}

	/** Provides the bucket name and object key name that stores the reference data. */
	export interface S3ReferenceDataSourceDescriptionFormProperties {

		/** Required */
		BucketARN: FormControl<string | null | undefined>,

		/** Required */
		FileKey: FormControl<string | null | undefined>,

		/** Required */
		ReferenceRoleARN: FormControl<string | null | undefined>,
	}
	export function CreateS3ReferenceDataSourceDescriptionFormGroup() {
		return new FormGroup<S3ReferenceDataSourceDescriptionFormProperties>({
			BucketARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FileKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReferenceRoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Description of the CloudWatch logging option. */
	export interface CloudWatchLoggingOptionDescription {
		CloudWatchLoggingOptionId?: string;

		/** Required */
		LogStreamARN: string;

		/** Required */
		RoleARN: string;
	}

	/** Description of the CloudWatch logging option. */
	export interface CloudWatchLoggingOptionDescriptionFormProperties {
		CloudWatchLoggingOptionId: FormControl<string | null | undefined>,

		/** Required */
		LogStreamARN: FormControl<string | null | undefined>,

		/** Required */
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLoggingOptionDescriptionFormGroup() {
		return new FormGroup<CloudWatchLoggingOptionDescriptionFormProperties>({
			CloudWatchLoggingOptionId: new FormControl<string | null | undefined>(undefined),
			LogStreamARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DescribeApplicationRequest {

		/** Required */
		ApplicationName: string;
	}

	/** <p/> */
	export interface DescribeApplicationRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeApplicationRequestFormGroup() {
		return new FormGroup<DescribeApplicationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DiscoverInputSchemaResponse {
		InputSchema?: SourceSchema;
		ParsedInputRecords?: Array<Array<string>>;
		ProcessedInputRecords?: Array<string>;
		RawInputRecords?: Array<string>;
	}

	/** <p/> */
	export interface DiscoverInputSchemaResponseFormProperties {
	}
	export function CreateDiscoverInputSchemaResponseFormGroup() {
		return new FormGroup<DiscoverInputSchemaResponseFormProperties>({
		});

	}

	export interface DiscoverInputSchemaRequest {
		ResourceARN?: string;
		RoleARN?: string;
		InputStartingPositionConfiguration?: InputStartingPositionConfiguration;
		S3Configuration?: S3Configuration;
		InputProcessingConfiguration?: InputProcessingConfiguration;
	}
	export interface DiscoverInputSchemaRequestFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateDiscoverInputSchemaRequestFormGroup() {
		return new FormGroup<DiscoverInputSchemaRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket, the ARN of the IAM role that is used to access the bucket, and the name of the Amazon S3 object that contains the data. */
	export interface S3Configuration {

		/** Required */
		RoleARN: string;

		/** Required */
		BucketARN: string;

		/** Required */
		FileKey: string;
	}

	/** Provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket, the ARN of the IAM role that is used to access the bucket, and the name of the Amazon S3 object that contains the data. */
	export interface S3ConfigurationFormProperties {

		/** Required */
		RoleARN: FormControl<string | null | undefined>,

		/** Required */
		BucketARN: FormControl<string | null | undefined>,

		/** Required */
		FileKey: FormControl<string | null | undefined>,
	}
	export function CreateS3ConfigurationFormGroup() {
		return new FormGroup<S3ConfigurationFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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


	/** <p/> */
	export interface ListApplicationsResponse {

		/** Required */
		ApplicationSummaries: Array<ApplicationSummary>;

		/** Required */
		HasMoreApplications: boolean;
	}

	/** <p/> */
	export interface ListApplicationsResponseFormProperties {

		/** Required */
		HasMoreApplications: FormControl<boolean | null | undefined>,
	}
	export function CreateListApplicationsResponseFormGroup() {
		return new FormGroup<ListApplicationsResponseFormProperties>({
			HasMoreApplications: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface ListApplicationsRequest {
		Limit?: number | null;
		ExclusiveStartApplicationName?: string;
	}

	/** <p/> */
	export interface ListApplicationsRequestFormProperties {
		Limit: FormControl<number | null | undefined>,
		ExclusiveStartApplicationName: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationsRequestFormGroup() {
		return new FormGroup<ListApplicationsRequestFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			ExclusiveStartApplicationName: new FormControl<string | null | undefined>(undefined),
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


	/** <p/> */
	export interface StartApplicationResponse {
	}

	/** <p/> */
	export interface StartApplicationResponseFormProperties {
	}
	export function CreateStartApplicationResponseFormGroup() {
		return new FormGroup<StartApplicationResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface StartApplicationRequest {

		/** Required */
		ApplicationName: string;

		/** Required */
		InputConfigurations: Array<InputConfiguration>;
	}

	/** <p/> */
	export interface StartApplicationRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,
	}
	export function CreateStartApplicationRequestFormGroup() {
		return new FormGroup<StartApplicationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** When you start your application, you provide this configuration, which identifies the input source and the point in the input source at which you want the application to start processing records. */
	export interface InputConfiguration {

		/** Required */
		Id: string;

		/** Required */
		InputStartingPositionConfiguration: InputStartingPositionConfiguration;
	}

	/** When you start your application, you provide this configuration, which identifies the input source and the point in the input source at which you want the application to start processing records. */
	export interface InputConfigurationFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateInputConfigurationFormGroup() {
		return new FormGroup<InputConfigurationFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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


	/** <p/> */
	export interface StopApplicationResponse {
	}

	/** <p/> */
	export interface StopApplicationResponseFormProperties {
	}
	export function CreateStopApplicationResponseFormGroup() {
		return new FormGroup<StopApplicationResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface StopApplicationRequest {

		/** Required */
		ApplicationName: string;
	}

	/** <p/> */
	export interface StopApplicationRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,
	}
	export function CreateStopApplicationRequestFormGroup() {
		return new FormGroup<StopApplicationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		CurrentApplicationVersionId: number;

		/** Required */
		ApplicationUpdate: ApplicationUpdate;
	}
	export interface UpdateApplicationRequestFormProperties {

		/** Required */
		ApplicationName: FormControl<string | null | undefined>,

		/** Required */
		CurrentApplicationVersionId: FormControl<number | null | undefined>,
	}
	export function CreateUpdateApplicationRequestFormGroup() {
		return new FormGroup<UpdateApplicationRequestFormProperties>({
			ApplicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CurrentApplicationVersionId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes updates to apply to an existing Amazon Kinesis Analytics application. */
	export interface ApplicationUpdate {
		InputUpdates?: Array<InputUpdate>;
		ApplicationCodeUpdate?: string;
		OutputUpdates?: Array<OutputUpdate>;
		ReferenceDataSourceUpdates?: Array<ReferenceDataSourceUpdate>;
		CloudWatchLoggingOptionUpdates?: Array<CloudWatchLoggingOptionUpdate>;
	}

	/** Describes updates to apply to an existing Amazon Kinesis Analytics application. */
	export interface ApplicationUpdateFormProperties {
		ApplicationCodeUpdate: FormControl<string | null | undefined>,
	}
	export function CreateApplicationUpdateFormGroup() {
		return new FormGroup<ApplicationUpdateFormProperties>({
			ApplicationCodeUpdate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes updates to a specific input configuration (identified by the <code>InputId</code> of an application).  */
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

	/** Describes updates to a specific input configuration (identified by the <code>InputId</code> of an application).  */
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


	/** Describes updates to an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a>.  */
	export interface InputProcessingConfigurationUpdate {

		/** Required */
		InputLambdaProcessorUpdate: InputLambdaProcessorUpdate;
	}

	/** Describes updates to an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a>.  */
	export interface InputProcessingConfigurationUpdateFormProperties {
	}
	export function CreateInputProcessingConfigurationUpdateFormGroup() {
		return new FormGroup<InputProcessingConfigurationUpdateFormProperties>({
		});

	}


	/** Represents an update to the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a> that is used to preprocess the records in the stream. */
	export interface InputLambdaProcessorUpdate {
		ResourceARNUpdate?: string;
		RoleARNUpdate?: string;
	}

	/** Represents an update to the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a> that is used to preprocess the records in the stream. */
	export interface InputLambdaProcessorUpdateFormProperties {
		ResourceARNUpdate: FormControl<string | null | undefined>,
		RoleARNUpdate: FormControl<string | null | undefined>,
	}
	export function CreateInputLambdaProcessorUpdateFormGroup() {
		return new FormGroup<InputLambdaProcessorUpdateFormProperties>({
			ResourceARNUpdate: new FormControl<string | null | undefined>(undefined),
			RoleARNUpdate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** When updating application input configuration, provides information about an Amazon Kinesis stream as the streaming source. */
	export interface KinesisStreamsInputUpdate {
		ResourceARNUpdate?: string;
		RoleARNUpdate?: string;
	}

	/** When updating application input configuration, provides information about an Amazon Kinesis stream as the streaming source. */
	export interface KinesisStreamsInputUpdateFormProperties {
		ResourceARNUpdate: FormControl<string | null | undefined>,
		RoleARNUpdate: FormControl<string | null | undefined>,
	}
	export function CreateKinesisStreamsInputUpdateFormGroup() {
		return new FormGroup<KinesisStreamsInputUpdateFormProperties>({
			ResourceARNUpdate: new FormControl<string | null | undefined>(undefined),
			RoleARNUpdate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** When updating application input configuration, provides information about an Amazon Kinesis Firehose delivery stream as the streaming source. */
	export interface KinesisFirehoseInputUpdate {
		ResourceARNUpdate?: string;
		RoleARNUpdate?: string;
	}

	/** When updating application input configuration, provides information about an Amazon Kinesis Firehose delivery stream as the streaming source. */
	export interface KinesisFirehoseInputUpdateFormProperties {
		ResourceARNUpdate: FormControl<string | null | undefined>,
		RoleARNUpdate: FormControl<string | null | undefined>,
	}
	export function CreateKinesisFirehoseInputUpdateFormGroup() {
		return new FormGroup<KinesisFirehoseInputUpdateFormProperties>({
			ResourceARNUpdate: new FormControl<string | null | undefined>(undefined),
			RoleARNUpdate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes updates for the application's input schema. */
	export interface InputSchemaUpdate {
		RecordFormatUpdate?: RecordFormat;
		RecordEncodingUpdate?: string;
		RecordColumnUpdates?: Array<RecordColumn>;
	}

	/** Describes updates for the application's input schema. */
	export interface InputSchemaUpdateFormProperties {
		RecordEncodingUpdate: FormControl<string | null | undefined>,
	}
	export function CreateInputSchemaUpdateFormGroup() {
		return new FormGroup<InputSchemaUpdateFormProperties>({
			RecordEncodingUpdate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides updates to the parallelism count. */
	export interface InputParallelismUpdate {
		CountUpdate?: number | null;
	}

	/** Provides updates to the parallelism count. */
	export interface InputParallelismUpdateFormProperties {
		CountUpdate: FormControl<number | null | undefined>,
	}
	export function CreateInputParallelismUpdateFormGroup() {
		return new FormGroup<InputParallelismUpdateFormProperties>({
			CountUpdate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  Describes updates to the output configuration identified by the <code>OutputId</code>.  */
	export interface OutputUpdate {

		/** Required */
		OutputId: string;
		NameUpdate?: string;
		KinesisStreamsOutputUpdate?: KinesisStreamsOutputUpdate;
		KinesisFirehoseOutputUpdate?: KinesisFirehoseOutputUpdate;
		LambdaOutputUpdate?: LambdaOutputUpdate;
		DestinationSchemaUpdate?: DestinationSchema;
	}

	/**  Describes updates to the output configuration identified by the <code>OutputId</code>.  */
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


	/**  When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an Amazon Kinesis stream configured as the destination.  */
	export interface KinesisStreamsOutputUpdate {
		ResourceARNUpdate?: string;
		RoleARNUpdate?: string;
	}

	/**  When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an Amazon Kinesis stream configured as the destination.  */
	export interface KinesisStreamsOutputUpdateFormProperties {
		ResourceARNUpdate: FormControl<string | null | undefined>,
		RoleARNUpdate: FormControl<string | null | undefined>,
	}
	export function CreateKinesisStreamsOutputUpdateFormGroup() {
		return new FormGroup<KinesisStreamsOutputUpdateFormProperties>({
			ResourceARNUpdate: new FormControl<string | null | undefined>(undefined),
			RoleARNUpdate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an Amazon Kinesis Firehose delivery stream configured as the destination.  */
	export interface KinesisFirehoseOutputUpdate {
		ResourceARNUpdate?: string;
		RoleARNUpdate?: string;
	}

	/**  When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an Amazon Kinesis Firehose delivery stream configured as the destination.  */
	export interface KinesisFirehoseOutputUpdateFormProperties {
		ResourceARNUpdate: FormControl<string | null | undefined>,
		RoleARNUpdate: FormControl<string | null | undefined>,
	}
	export function CreateKinesisFirehoseOutputUpdateFormGroup() {
		return new FormGroup<KinesisFirehoseOutputUpdateFormProperties>({
			ResourceARNUpdate: new FormControl<string | null | undefined>(undefined),
			RoleARNUpdate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an AWS Lambda function configured as the destination. */
	export interface LambdaOutputUpdate {
		ResourceARNUpdate?: string;
		RoleARNUpdate?: string;
	}

	/** When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation, provides information about an AWS Lambda function configured as the destination. */
	export interface LambdaOutputUpdateFormProperties {
		ResourceARNUpdate: FormControl<string | null | undefined>,
		RoleARNUpdate: FormControl<string | null | undefined>,
	}
	export function CreateLambdaOutputUpdateFormGroup() {
		return new FormGroup<LambdaOutputUpdateFormProperties>({
			ResourceARNUpdate: new FormControl<string | null | undefined>(undefined),
			RoleARNUpdate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** When you update a reference data source configuration for an application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created. */
	export interface ReferenceDataSourceUpdate {

		/** Required */
		ReferenceId: string;
		TableNameUpdate?: string;
		S3ReferenceDataSourceUpdate?: S3ReferenceDataSourceUpdate;
		ReferenceSchemaUpdate?: SourceSchema;
	}

	/** When you update a reference data source configuration for an application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created. */
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


	/** Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table. */
	export interface S3ReferenceDataSourceUpdate {
		BucketARNUpdate?: string;
		FileKeyUpdate?: string;
		ReferenceRoleARNUpdate?: string;
	}

	/** Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table. */
	export interface S3ReferenceDataSourceUpdateFormProperties {
		BucketARNUpdate: FormControl<string | null | undefined>,
		FileKeyUpdate: FormControl<string | null | undefined>,
		ReferenceRoleARNUpdate: FormControl<string | null | undefined>,
	}
	export function CreateS3ReferenceDataSourceUpdateFormGroup() {
		return new FormGroup<S3ReferenceDataSourceUpdateFormProperties>({
			BucketARNUpdate: new FormControl<string | null | undefined>(undefined),
			FileKeyUpdate: new FormControl<string | null | undefined>(undefined),
			ReferenceRoleARNUpdate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes CloudWatch logging option updates. */
	export interface CloudWatchLoggingOptionUpdate {

		/** Required */
		CloudWatchLoggingOptionId: string;
		LogStreamARNUpdate?: string;
		RoleARNUpdate?: string;
	}

	/** Describes CloudWatch logging option updates. */
	export interface CloudWatchLoggingOptionUpdateFormProperties {

		/** Required */
		CloudWatchLoggingOptionId: FormControl<string | null | undefined>,
		LogStreamARNUpdate: FormControl<string | null | undefined>,
		RoleARNUpdate: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLoggingOptionUpdateFormGroup() {
		return new FormGroup<CloudWatchLoggingOptionUpdateFormProperties>({
			CloudWatchLoggingOptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LogStreamARNUpdate: new FormControl<string | null | undefined>(undefined),
			RoleARNUpdate: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds a CloudWatch log stream to monitor application configuration errors. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>.</p>
		 * Post #X-Amz-Target=KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption
		 * @return {AddApplicationCloudWatchLoggingOptionResponse} Success
		 */
		AddApplicationCloudWatchLoggingOption(requestBody: AddApplicationCloudWatchLoggingOptionRequest): Observable<AddApplicationCloudWatchLoggingOptionResponse> {
			return this.http.post<AddApplicationCloudWatchLoggingOptionResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p> Adds a streaming source to your Amazon Kinesis application. For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. </p> <p>You can add a streaming source either when you create an application or you can use this operation to add a streaming source after you create an application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_CreateApplication.html">CreateApplication</a>.</p> <p>Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the current application version. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationInput</code> action.</p>
		 * Post #X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInput
		 * @return {AddApplicationInputResponse} Success
		 */
		AddApplicationInput(requestBody: AddApplicationInputRequest): Observable<AddApplicationInputResponse> {
			return this.http.post<AddApplicationInputResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInput', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> to an application. An input processor preprocesses records on the input stream before the application's SQL code executes. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.</p>
		 * Post #X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration
		 * @return {AddApplicationInputProcessingConfigurationResponse} Success
		 */
		AddApplicationInputProcessingConfiguration(requestBody: AddApplicationInputProcessingConfigurationRequest): Observable<AddApplicationInputProcessingConfigurationResponse> {
			return this.http.post<AddApplicationInputProcessingConfigurationResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds an external destination to your Amazon Kinesis Analytics application.</p> <p>If you want Amazon Kinesis Analytics to deliver data from an in-application stream within your application to an external destination (such as an Amazon Kinesis stream, an Amazon Kinesis Firehose delivery stream, or an AWS Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.</p> <p> You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Understanding Application Output (Destination)</a>. </p> <p> Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the current application version.</p> <p>For the limits on the number of application inputs and outputs you can configure, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationOutput</code> action.</p>
		 * Post #X-Amz-Target=KinesisAnalytics_20150814.AddApplicationOutput
		 * @return {AddApplicationOutputResponse} Success
		 */
		AddApplicationOutput(requestBody: AddApplicationOutputRequest): Observable<AddApplicationOutputResponse> {
			return this.http.post<AddApplicationOutputResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationOutput', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds a reference data source to an existing application.</p> <p>Amazon Kinesis Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in Amazon S3 object maps to columns in the resulting in-application table.</p> <p> For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. For the limits on data sources you can add to your application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>. </p> <p> This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationOutput</code> action. </p>
		 * Post #X-Amz-Target=KinesisAnalytics_20150814.AddApplicationReferenceDataSource
		 * @return {AddApplicationReferenceDataSourceResponse} Success
		 */
		AddApplicationReferenceDataSource(requestBody: AddApplicationReferenceDataSourceRequest): Observable<AddApplicationReferenceDataSourceResponse> {
			return this.http.post<AddApplicationReferenceDataSourceResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20150814.AddApplicationReferenceDataSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p> Creates an Amazon Kinesis Analytics application. You can configure each application with one streaming source as input, application code to process the input, and up to three destinations where you want Amazon Kinesis Analytics to write the output data from your application. For an overview, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works.html">How it Works</a>. </p> <p>In the input configuration, you map the streaming source to an in-application stream, which you can think of as a constantly updating table. In the mapping, you must provide a schema for the in-application stream and map each data column in the in-application stream to a data element in the streaming source.</p> <p>Your application code is one or more SQL statements that read input data, transform it, and generate output. Your application code can create one or more SQL artifacts like SQL streams or pumps.</p> <p>In the output configuration, you can configure the application to write data from in-application streams created in your applications to up to three destinations.</p> <p> To read data from your source stream or write data to destination streams, Amazon Kinesis Analytics needs your permissions. You grant these permissions by creating IAM roles. This operation requires permissions to perform the <code>kinesisanalytics:CreateApplication</code> action. </p> <p> For introductory exercises to create an Amazon Kinesis Analytics application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/getting-started.html">Getting Started</a>. </p>
		 * Post #X-Amz-Target=KinesisAnalytics_20150814.CreateApplication
		 * @return {CreateApplicationResponse} Success
		 */
		CreateApplication(requestBody: CreateApplicationRequest): Observable<CreateApplicationResponse> {
			return this.http.post<CreateApplicationResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20150814.CreateApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes the specified application. Amazon Kinesis Analytics halts application execution and deletes the application, including any application artifacts (such as in-application streams, reference table, and application code).</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DeleteApplication</code> action.</p>
		 * Post #X-Amz-Target=KinesisAnalytics_20150814.DeleteApplication
		 * @return {DeleteApplicationResponse} Success
		 */
		DeleteApplication(requestBody: DeleteApplicationRequest): Observable<DeleteApplicationResponse> {
			return this.http.post<DeleteApplicationResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes a CloudWatch log stream from an application. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>.</p>
		 * Post #X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption
		 * @return {DeleteApplicationCloudWatchLoggingOptionResponse} Success
		 */
		DeleteApplicationCloudWatchLoggingOption(requestBody: DeleteApplicationCloudWatchLoggingOptionRequest): Observable<DeleteApplicationCloudWatchLoggingOptionResponse> {
			return this.http.post<DeleteApplicationCloudWatchLoggingOptionResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> from an input.</p>
		 * Post #X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration
		 * @return {DeleteApplicationInputProcessingConfigurationResponse} Success
		 */
		DeleteApplicationInputProcessingConfiguration(requestBody: DeleteApplicationInputProcessingConfigurationRequest): Observable<DeleteApplicationInputProcessingConfigurationResponse> {
			return this.http.post<DeleteApplicationInputProcessingConfigurationResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes output destination configuration from your application configuration. Amazon Kinesis Analytics will no longer write data from the corresponding in-application stream to the external output destination.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DeleteApplicationOutput</code> action.</p>
		 * Post #X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationOutput
		 * @return {DeleteApplicationOutputResponse} Success
		 */
		DeleteApplicationOutput(requestBody: DeleteApplicationOutputRequest): Observable<DeleteApplicationOutputResponse> {
			return this.http.post<DeleteApplicationOutputResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationOutput', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes a reference data source configuration from the specified application configuration.</p> <p>If the application is running, Amazon Kinesis Analytics immediately removes the in-application table that you created using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html">AddApplicationReferenceDataSource</a> operation. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics.DeleteApplicationReferenceDataSource</code> action.</p>
		 * Post #X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource
		 * @return {DeleteApplicationReferenceDataSourceResponse} Success
		 */
		DeleteApplicationReferenceDataSource(requestBody: DeleteApplicationReferenceDataSourceRequest): Observable<DeleteApplicationReferenceDataSourceResponse> {
			return this.http.post<DeleteApplicationReferenceDataSourceResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Returns information about a specific Amazon Kinesis Analytics application.</p> <p>If you want to retrieve a list of all applications in your account, use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_ListApplications.html">ListApplications</a> operation.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DescribeApplication</code> action. You can use <code>DescribeApplication</code> to get the current application versionId, which you need to call other operations such as <code>Update</code>. </p>
		 * Post #X-Amz-Target=KinesisAnalytics_20150814.DescribeApplication
		 * @return {DescribeApplicationResponse} Success
		 */
		DescribeApplication(requestBody: DescribeApplicationRequest): Observable<DescribeApplicationResponse> {
			return this.http.post<DescribeApplicationResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20150814.DescribeApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Infers a schema by evaluating sample records on the specified streaming source (Amazon Kinesis stream or Amazon Kinesis Firehose delivery stream) or S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.</p> <p> You can use the inferred schema when configuring a streaming source for your application. For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. Note that when you create an application using the Amazon Kinesis Analytics console, the console uses this operation to infer a schema and show it in the console user interface. </p> <p> This operation requires permissions to perform the <code>kinesisanalytics:DiscoverInputSchema</code> action. </p>
		 * Post #X-Amz-Target=KinesisAnalytics_20150814.DiscoverInputSchema
		 * @return {DiscoverInputSchemaResponse} Success
		 */
		DiscoverInputSchema(requestBody: DiscoverInputSchemaRequest): Observable<DiscoverInputSchemaResponse> {
			return this.http.post<DiscoverInputSchemaResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20150814.DiscoverInputSchema', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Returns a list of Amazon Kinesis Analytics applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. If the response returns the <code>HasMoreApplications</code> value as true, you can send another request by adding the <code>ExclusiveStartApplicationName</code> in the request body, and set the value of this to the last application name from the previous response. </p> <p>If you want detailed information about a specific application, use <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a>.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:ListApplications</code> action.</p>
		 * Post #X-Amz-Target=KinesisAnalytics_20150814.ListApplications
		 * @return {ListApplicationsResponse} Success
		 */
		ListApplications(requestBody: ListApplicationsRequest): Observable<ListApplicationsResponse> {
			return this.http.post<ListApplicationsResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20150814.ListApplications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the list of key-value tags assigned to the application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.
		 * Post #X-Amz-Target=KinesisAnalytics_20150814.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20150814.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Starts the specified Amazon Kinesis Analytics application. After creating an application, you must exclusively call this operation to start your application.</p> <p>After the application starts, it begins consuming the input data, processes it, and writes the output to the configured destination.</p> <p> The application status must be <code>READY</code> for you to start an application. You can get the application status in the console or using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.</p> <p>After you start the application, you can stop the application from processing the input by calling the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_StopApplication.html">StopApplication</a> operation.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:StartApplication</code> action.</p>
		 * Post #X-Amz-Target=KinesisAnalytics_20150814.StartApplication
		 * @return {StartApplicationResponse} Success
		 */
		StartApplication(requestBody: StartApplicationRequest): Observable<StartApplicationResponse> {
			return this.http.post<StartApplicationResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20150814.StartApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Stops the application from processing input data. You can stop an application only if it is in the running state. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the application state. After the application is stopped, Amazon Kinesis Analytics stops reading data from the input, the application stops processing data, and there is no output written to the destination. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics:StopApplication</code> action.</p>
		 * Post #X-Amz-Target=KinesisAnalytics_20150814.StopApplication
		 * @return {StopApplicationResponse} Success
		 */
		StopApplication(requestBody: StopApplicationRequest): Observable<StopApplicationResponse> {
			return this.http.post<StopApplicationResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20150814.StopApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds one or more key-value tags to a Kinesis Analytics application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.
		 * Post #X-Amz-Target=KinesisAnalytics_20150814.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20150814.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from a Kinesis Analytics application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.
		 * Post #X-Amz-Target=KinesisAnalytics_20150814.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20150814.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Updates an existing Amazon Kinesis Analytics application. Using this API, you can update application code, input configuration, and output configuration. </p> <p>Note that Amazon Kinesis Analytics updates the <code>CurrentApplicationVersionId</code> each time you update your application. </p> <p>This operation requires permission for the <code>kinesisanalytics:UpdateApplication</code> action.</p>
		 * Post #X-Amz-Target=KinesisAnalytics_20150814.UpdateApplication
		 * @return {UpdateApplicationResponse} Success
		 */
		UpdateApplication(requestBody: UpdateApplicationRequest): Observable<UpdateApplicationResponse> {
			return this.http.post<UpdateApplicationResponse>(this.baseUri + '#X-Amz-Target=KinesisAnalytics_20150814.UpdateApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AddApplicationCloudWatchLoggingOptionX_Amz_Target { 'KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption' = 'KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption' }

	export enum AddApplicationInputX_Amz_Target { 'KinesisAnalytics_20150814.AddApplicationInput' = 'KinesisAnalytics_20150814.AddApplicationInput' }

	export enum AddApplicationInputProcessingConfigurationX_Amz_Target { 'KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration' = 'KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration' }

	export enum AddApplicationOutputX_Amz_Target { 'KinesisAnalytics_20150814.AddApplicationOutput' = 'KinesisAnalytics_20150814.AddApplicationOutput' }

	export enum AddApplicationReferenceDataSourceX_Amz_Target { 'KinesisAnalytics_20150814.AddApplicationReferenceDataSource' = 'KinesisAnalytics_20150814.AddApplicationReferenceDataSource' }

	export enum CreateApplicationX_Amz_Target { 'KinesisAnalytics_20150814.CreateApplication' = 'KinesisAnalytics_20150814.CreateApplication' }

	export enum DeleteApplicationX_Amz_Target { 'KinesisAnalytics_20150814.DeleteApplication' = 'KinesisAnalytics_20150814.DeleteApplication' }

	export enum DeleteApplicationCloudWatchLoggingOptionX_Amz_Target { 'KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption' = 'KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption' }

	export enum DeleteApplicationInputProcessingConfigurationX_Amz_Target { 'KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration' = 'KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration' }

	export enum DeleteApplicationOutputX_Amz_Target { 'KinesisAnalytics_20150814.DeleteApplicationOutput' = 'KinesisAnalytics_20150814.DeleteApplicationOutput' }

	export enum DeleteApplicationReferenceDataSourceX_Amz_Target { 'KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource' = 'KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource' }

	export enum DescribeApplicationX_Amz_Target { 'KinesisAnalytics_20150814.DescribeApplication' = 'KinesisAnalytics_20150814.DescribeApplication' }

	export enum DiscoverInputSchemaX_Amz_Target { 'KinesisAnalytics_20150814.DiscoverInputSchema' = 'KinesisAnalytics_20150814.DiscoverInputSchema' }

	export enum ListApplicationsX_Amz_Target { 'KinesisAnalytics_20150814.ListApplications' = 'KinesisAnalytics_20150814.ListApplications' }

	export enum ListTagsForResourceX_Amz_Target { 'KinesisAnalytics_20150814.ListTagsForResource' = 'KinesisAnalytics_20150814.ListTagsForResource' }

	export enum StartApplicationX_Amz_Target { 'KinesisAnalytics_20150814.StartApplication' = 'KinesisAnalytics_20150814.StartApplication' }

	export enum StopApplicationX_Amz_Target { 'KinesisAnalytics_20150814.StopApplication' = 'KinesisAnalytics_20150814.StopApplication' }

	export enum TagResourceX_Amz_Target { 'KinesisAnalytics_20150814.TagResource' = 'KinesisAnalytics_20150814.TagResource' }

	export enum UntagResourceX_Amz_Target { 'KinesisAnalytics_20150814.UntagResource' = 'KinesisAnalytics_20150814.UntagResource' }

	export enum UpdateApplicationX_Amz_Target { 'KinesisAnalytics_20150814.UpdateApplication' = 'KinesisAnalytics_20150814.UpdateApplication' }

}

