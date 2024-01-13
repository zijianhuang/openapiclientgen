import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateDeliveryStreamOutput {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		DeliveryStreamARN?: string | null;
	}
	export interface CreateDeliveryStreamOutputFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		DeliveryStreamARN: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeliveryStreamOutputFormGroup() {
		return new FormGroup<CreateDeliveryStreamOutputFormProperties>({
			DeliveryStreamARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
		});

	}

	export interface CreateDeliveryStreamInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DeliveryStreamName: string;
		DeliveryStreamType?: CreateDeliveryStreamInputDeliveryStreamType | null;

		/** The stream and role Amazon Resource Names (ARNs) for a Kinesis data stream used as the source for a delivery stream. */
		KinesisStreamSourceConfiguration?: KinesisStreamSourceConfiguration;

		/** Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE). */
		DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;

		/** Describes the configuration of a destination in Amazon S3. */
		S3DestinationConfiguration?: S3DestinationConfiguration;

		/** Describes the configuration of a destination in Amazon S3. */
		ExtendedS3DestinationConfiguration?: ExtendedS3DestinationConfiguration;

		/** Describes the configuration of a destination in Amazon Redshift. */
		RedshiftDestinationConfiguration?: RedshiftDestinationConfiguration;

		/** Describes the configuration of a destination in Amazon ES. */
		ElasticsearchDestinationConfiguration?: ElasticsearchDestinationConfiguration;

		/** Describes the configuration of a destination in Splunk. */
		SplunkDestinationConfiguration?: SplunkDestinationConfiguration;

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateDeliveryStreamInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DeliveryStreamName: FormControl<string | null | undefined>,
		DeliveryStreamType: FormControl<CreateDeliveryStreamInputDeliveryStreamType | null | undefined>,
	}
	export function CreateCreateDeliveryStreamInputFormGroup() {
		return new FormGroup<CreateDeliveryStreamInputFormProperties>({
			DeliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			DeliveryStreamType: new FormControl<CreateDeliveryStreamInputDeliveryStreamType | null | undefined>(undefined),
		});

	}

	export enum CreateDeliveryStreamInputDeliveryStreamType { DirectPut = 0, KinesisStreamAsSource = 1 }


	/** The stream and role Amazon Resource Names (ARNs) for a Kinesis data stream used as the source for a delivery stream. */
	export interface KinesisStreamSourceConfiguration {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		KinesisStreamARN: string;

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: string;
	}

	/** The stream and role Amazon Resource Names (ARNs) for a Kinesis data stream used as the source for a delivery stream. */
	export interface KinesisStreamSourceConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		KinesisStreamARN: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisStreamSourceConfigurationFormGroup() {
		return new FormGroup<KinesisStreamSourceConfigurationFormProperties>({
			KinesisStreamARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
		});

	}


	/** Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE).  */
	export interface DeliveryStreamEncryptionConfigurationInput {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		KeyARN?: string | null;

		/** Required */
		KeyType: DeliveryStreamEncryptionConfigurationInputKeyType;
	}

	/** Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE).  */
	export interface DeliveryStreamEncryptionConfigurationInputFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		KeyARN: FormControl<string | null | undefined>,

		/** Required */
		KeyType: FormControl<DeliveryStreamEncryptionConfigurationInputKeyType | null | undefined>,
	}
	export function CreateDeliveryStreamEncryptionConfigurationInputFormGroup() {
		return new FormGroup<DeliveryStreamEncryptionConfigurationInputFormProperties>({
			KeyARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
			KeyType: new FormControl<DeliveryStreamEncryptionConfigurationInputKeyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DeliveryStreamEncryptionConfigurationInputKeyType { AWS_OWNED_CMK = 0, CUSTOMER_MANAGED_CMK = 1 }


	/** Describes the configuration of a destination in Amazon S3. */
	export interface S3DestinationConfiguration {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		BucketARN: string;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		Prefix?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		ErrorOutputPrefix?: string | null;

		/** Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Kinesis Data Firehose might choose to use different values when it is optimal. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other. */
		BufferingHints?: BufferingHints;
		CompressionFormat?: S3DestinationConfigurationCompressionFormat | null;

		/** Describes the encryption for a destination in Amazon S3. */
		EncryptionConfiguration?: EncryptionConfiguration;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
	}

	/** Describes the configuration of a destination in Amazon S3. */
	export interface S3DestinationConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		BucketARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		Prefix: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		ErrorOutputPrefix: FormControl<string | null | undefined>,
		CompressionFormat: FormControl<S3DestinationConfigurationCompressionFormat | null | undefined>,
	}
	export function CreateS3DestinationConfigurationFormGroup() {
		return new FormGroup<S3DestinationConfigurationFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
			BucketARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('arn:.*')]),
			Prefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
			ErrorOutputPrefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
			CompressionFormat: new FormControl<S3DestinationConfigurationCompressionFormat | null | undefined>(undefined),
		});

	}


	/** Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Kinesis Data Firehose might choose to use different values when it is optimal. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other. */
	export interface BufferingHints {

		/**
		 * Minimum: 1
		 * Maximum: 128
		 */
		SizeInMBs?: number | null;

		/**
		 * Minimum: 60
		 * Maximum: 900
		 */
		IntervalInSeconds?: number | null;
	}

	/** Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Kinesis Data Firehose might choose to use different values when it is optimal. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other. */
	export interface BufferingHintsFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 128
		 */
		SizeInMBs: FormControl<number | null | undefined>,

		/**
		 * Minimum: 60
		 * Maximum: 900
		 */
		IntervalInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateBufferingHintsFormGroup() {
		return new FormGroup<BufferingHintsFormProperties>({
			SizeInMBs: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(128)]),
			IntervalInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(900)]),
		});

	}

	export enum S3DestinationConfigurationCompressionFormat { UNCOMPRESSED = 0, GZIP = 1, ZIP = 2, Snappy = 3, HADOOP_SNAPPY = 4 }


	/** Describes the encryption for a destination in Amazon S3. */
	export interface EncryptionConfiguration {
		NoEncryptionConfig?: EncryptionConfigurationNoEncryptionConfig | null;

		/** Describes an encryption key for a destination in Amazon S3. */
		KMSEncryptionConfig?: KMSEncryptionConfig;
	}

	/** Describes the encryption for a destination in Amazon S3. */
	export interface EncryptionConfigurationFormProperties {
		NoEncryptionConfig: FormControl<EncryptionConfigurationNoEncryptionConfig | null | undefined>,
	}
	export function CreateEncryptionConfigurationFormGroup() {
		return new FormGroup<EncryptionConfigurationFormProperties>({
			NoEncryptionConfig: new FormControl<EncryptionConfigurationNoEncryptionConfig | null | undefined>(undefined),
		});

	}

	export enum EncryptionConfigurationNoEncryptionConfig { NoEncryption = 0 }


	/** Describes an encryption key for a destination in Amazon S3. */
	export interface KMSEncryptionConfig {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		AWSKMSKeyARN: string;
	}

	/** Describes an encryption key for a destination in Amazon S3. */
	export interface KMSEncryptionConfigFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		AWSKMSKeyARN: FormControl<string | null | undefined>,
	}
	export function CreateKMSEncryptionConfigFormGroup() {
		return new FormGroup<KMSEncryptionConfigFormProperties>({
			AWSKMSKeyARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
		});

	}


	/** Describes the Amazon CloudWatch logging options for your delivery stream. */
	export interface CloudWatchLoggingOptions {
		Enabled?: boolean | null;

		/**
		 * Max length: 512
		 * Min length: 0
		 */
		LogGroupName?: string | null;

		/**
		 * Max length: 512
		 * Min length: 0
		 */
		LogStreamName?: string | null;
	}

	/** Describes the Amazon CloudWatch logging options for your delivery stream. */
	export interface CloudWatchLoggingOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 0
		 */
		LogGroupName: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 0
		 */
		LogStreamName: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLoggingOptionsFormGroup() {
		return new FormGroup<CloudWatchLoggingOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			LogGroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(512), Validators.pattern('[\.\-_/#A-Za-z0-9]*')]),
			LogStreamName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(512), Validators.pattern('[^:*]*')]),
		});

	}


	/** Describes the configuration of a destination in Amazon S3. */
	export interface ExtendedS3DestinationConfiguration {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		BucketARN: string;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		Prefix?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		ErrorOutputPrefix?: string | null;

		/** Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Kinesis Data Firehose might choose to use different values when it is optimal. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other. */
		BufferingHints?: BufferingHints;
		CompressionFormat?: S3DestinationConfigurationCompressionFormat | null;

		/** Describes the encryption for a destination in Amazon S3. */
		EncryptionConfiguration?: EncryptionConfiguration;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration;
		S3BackupMode?: ExtendedS3DestinationConfigurationS3BackupMode | null;

		/** Describes the configuration of a destination in Amazon S3. */
		S3BackupConfiguration?: S3DestinationConfiguration;

		/** Specifies that you want Kinesis Data Firehose to convert data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. Kinesis Data Firehose uses the serializer and deserializer that you specify, in addition to the column information from the AWS Glue table, to deserialize your input data from JSON and then serialize it to the Parquet or ORC format. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html">Kinesis Data Firehose Record Format Conversion</a>. */
		DataFormatConversionConfiguration?: DataFormatConversionConfiguration;
	}

	/** Describes the configuration of a destination in Amazon S3. */
	export interface ExtendedS3DestinationConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		BucketARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		Prefix: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		ErrorOutputPrefix: FormControl<string | null | undefined>,
		CompressionFormat: FormControl<S3DestinationConfigurationCompressionFormat | null | undefined>,
		S3BackupMode: FormControl<ExtendedS3DestinationConfigurationS3BackupMode | null | undefined>,
	}
	export function CreateExtendedS3DestinationConfigurationFormGroup() {
		return new FormGroup<ExtendedS3DestinationConfigurationFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
			BucketARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('arn:.*')]),
			Prefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
			ErrorOutputPrefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
			CompressionFormat: new FormControl<S3DestinationConfigurationCompressionFormat | null | undefined>(undefined),
			S3BackupMode: new FormControl<ExtendedS3DestinationConfigurationS3BackupMode | null | undefined>(undefined),
		});

	}


	/** Describes a data processing configuration. */
	export interface ProcessingConfiguration {
		Enabled?: boolean | null;
		Processors?: Array<Processor>;
	}

	/** Describes a data processing configuration. */
	export interface ProcessingConfigurationFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateProcessingConfigurationFormGroup() {
		return new FormGroup<ProcessingConfigurationFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a data processor. */
	export interface Processor {

		/** Required */
		Type: ProcessorType;
		Parameters?: Array<ProcessorParameter>;
	}

	/** Describes a data processor. */
	export interface ProcessorFormProperties {

		/** Required */
		Type: FormControl<ProcessorType | null | undefined>,
	}
	export function CreateProcessorFormGroup() {
		return new FormGroup<ProcessorFormProperties>({
			Type: new FormControl<ProcessorType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ProcessorType { Lambda = 0 }


	/** Describes the processor parameter. */
	export interface ProcessorParameter {

		/** Required */
		ParameterName: ProcessorParameterParameterName;

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		ParameterValue: string;
	}

	/** Describes the processor parameter. */
	export interface ProcessorParameterFormProperties {

		/** Required */
		ParameterName: FormControl<ProcessorParameterParameterName | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		ParameterValue: FormControl<string | null | undefined>,
	}
	export function CreateProcessorParameterFormGroup() {
		return new FormGroup<ProcessorParameterFormProperties>({
			ParameterName: new FormControl<ProcessorParameterParameterName | null | undefined>(undefined, [Validators.required]),
			ParameterValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('^(?!\s*$).+')]),
		});

	}

	export enum ProcessorParameterParameterName { LambdaArn = 0, NumberOfRetries = 1, RoleArn = 2, BufferSizeInMBs = 3, BufferIntervalInSeconds = 4 }

	export enum ExtendedS3DestinationConfigurationS3BackupMode { Disabled = 0, Enabled = 1 }


	/** Specifies that you want Kinesis Data Firehose to convert data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. Kinesis Data Firehose uses the serializer and deserializer that you specify, in addition to the column information from the AWS Glue table, to deserialize your input data from JSON and then serialize it to the Parquet or ORC format. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html">Kinesis Data Firehose Record Format Conversion</a>. */
	export interface DataFormatConversionConfiguration {

		/** Specifies the schema to which you want Kinesis Data Firehose to configure your data before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set to true. */
		SchemaConfiguration?: SchemaConfiguration;

		/** Specifies the deserializer you want to use to convert the format of the input data. This parameter is required if <code>Enabled</code> is set to true. */
		InputFormatConfiguration?: InputFormatConfiguration;

		/** Specifies the serializer that you want Kinesis Data Firehose to use to convert the format of your data before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set to true. */
		OutputFormatConfiguration?: OutputFormatConfiguration;
		Enabled?: boolean | null;
	}

	/** Specifies that you want Kinesis Data Firehose to convert data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. Kinesis Data Firehose uses the serializer and deserializer that you specify, in addition to the column information from the AWS Glue table, to deserialize your input data from JSON and then serialize it to the Parquet or ORC format. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html">Kinesis Data Firehose Record Format Conversion</a>. */
	export interface DataFormatConversionConfigurationFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateDataFormatConversionConfigurationFormGroup() {
		return new FormGroup<DataFormatConversionConfigurationFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies the schema to which you want Kinesis Data Firehose to configure your data before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set to true. */
	export interface SchemaConfiguration {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		RoleARN?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DatabaseName?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		TableName?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Region?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		VersionId?: string | null;
	}

	/** Specifies the schema to which you want Kinesis Data Firehose to configure your data before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set to true. */
	export interface SchemaConfigurationFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		RoleARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Region: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateSchemaConfigurationFormGroup() {
		return new FormGroup<SchemaConfigurationFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^\S+$')]),
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^\S+$')]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^\S+$')]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^\S+$')]),
			Region: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^\S+$')]),
			VersionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^\S+$')]),
		});

	}


	/** Specifies the deserializer you want to use to convert the format of the input data. This parameter is required if <code>Enabled</code> is set to true. */
	export interface InputFormatConfiguration {

		/** The deserializer you want Kinesis Data Firehose to use for converting the input data from JSON. Kinesis Data Firehose then serializes the data to its final format using the <a>Serializer</a>. Kinesis Data Firehose supports two types of deserializers: the <a href="https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-JSON">Apache Hive JSON SerDe</a> and the <a href="https://github.com/rcongiu/Hive-JSON-Serde">OpenX JSON SerDe</a>. */
		Deserializer?: Deserializer;
	}

	/** Specifies the deserializer you want to use to convert the format of the input data. This parameter is required if <code>Enabled</code> is set to true. */
	export interface InputFormatConfigurationFormProperties {
	}
	export function CreateInputFormatConfigurationFormGroup() {
		return new FormGroup<InputFormatConfigurationFormProperties>({
		});

	}


	/** The deserializer you want Kinesis Data Firehose to use for converting the input data from JSON. Kinesis Data Firehose then serializes the data to its final format using the <a>Serializer</a>. Kinesis Data Firehose supports two types of deserializers: the <a href="https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-JSON">Apache Hive JSON SerDe</a> and the <a href="https://github.com/rcongiu/Hive-JSON-Serde">OpenX JSON SerDe</a>. */
	export interface Deserializer {

		/** The OpenX SerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the native Hive / HCatalog JsonSerDe. */
		OpenXJsonSerDe?: OpenXJsonSerDe;

		/** The native Hive / HCatalog JsonSerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the OpenX SerDe. */
		HiveJsonSerDe?: HiveJsonSerDe;
	}

	/** The deserializer you want Kinesis Data Firehose to use for converting the input data from JSON. Kinesis Data Firehose then serializes the data to its final format using the <a>Serializer</a>. Kinesis Data Firehose supports two types of deserializers: the <a href="https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-JSON">Apache Hive JSON SerDe</a> and the <a href="https://github.com/rcongiu/Hive-JSON-Serde">OpenX JSON SerDe</a>. */
	export interface DeserializerFormProperties {
	}
	export function CreateDeserializerFormGroup() {
		return new FormGroup<DeserializerFormProperties>({
		});

	}


	/** The OpenX SerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the native Hive / HCatalog JsonSerDe. */
	export interface OpenXJsonSerDe {
		ConvertDotsInJsonKeysToUnderscores?: boolean | null;
		CaseInsensitive?: boolean | null;
		ColumnToJsonKeyMappings?: ColumnToJsonKeyMappings;
	}

	/** The OpenX SerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the native Hive / HCatalog JsonSerDe. */
	export interface OpenXJsonSerDeFormProperties {
		ConvertDotsInJsonKeysToUnderscores: FormControl<boolean | null | undefined>,
		CaseInsensitive: FormControl<boolean | null | undefined>,
	}
	export function CreateOpenXJsonSerDeFormGroup() {
		return new FormGroup<OpenXJsonSerDeFormProperties>({
			ConvertDotsInJsonKeysToUnderscores: new FormControl<boolean | null | undefined>(undefined),
			CaseInsensitive: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ColumnToJsonKeyMappings {
	}
	export interface ColumnToJsonKeyMappingsFormProperties {
	}
	export function CreateColumnToJsonKeyMappingsFormGroup() {
		return new FormGroup<ColumnToJsonKeyMappingsFormProperties>({
		});

	}


	/** The native Hive / HCatalog JsonSerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the OpenX SerDe. */
	export interface HiveJsonSerDe {
		TimestampFormats?: Array<string>;
	}

	/** The native Hive / HCatalog JsonSerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the OpenX SerDe. */
	export interface HiveJsonSerDeFormProperties {
	}
	export function CreateHiveJsonSerDeFormGroup() {
		return new FormGroup<HiveJsonSerDeFormProperties>({
		});

	}


	/** Specifies the serializer that you want Kinesis Data Firehose to use to convert the format of your data before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set to true. */
	export interface OutputFormatConfiguration {

		/** The serializer that you want Kinesis Data Firehose to use to convert data to the target format before writing it to Amazon S3. Kinesis Data Firehose supports two types of serializers: the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/orc/OrcSerde.html">ORC SerDe</a> and the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/parquet/serde/ParquetHiveSerDe.html">Parquet SerDe</a>. */
		Serializer?: Serializer;
	}

	/** Specifies the serializer that you want Kinesis Data Firehose to use to convert the format of your data before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set to true. */
	export interface OutputFormatConfigurationFormProperties {
	}
	export function CreateOutputFormatConfigurationFormGroup() {
		return new FormGroup<OutputFormatConfigurationFormProperties>({
		});

	}


	/** The serializer that you want Kinesis Data Firehose to use to convert data to the target format before writing it to Amazon S3. Kinesis Data Firehose supports two types of serializers: the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/orc/OrcSerde.html">ORC SerDe</a> and the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/parquet/serde/ParquetHiveSerDe.html">Parquet SerDe</a>. */
	export interface Serializer {

		/** A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see <a href="https://parquet.apache.org/documentation/latest/">Apache Parquet</a>. */
		ParquetSerDe?: ParquetSerDe;

		/** A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see <a href="https://orc.apache.org/docs/">Apache ORC</a>. */
		OrcSerDe?: OrcSerDe;
	}

	/** The serializer that you want Kinesis Data Firehose to use to convert data to the target format before writing it to Amazon S3. Kinesis Data Firehose supports two types of serializers: the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/orc/OrcSerde.html">ORC SerDe</a> and the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/parquet/serde/ParquetHiveSerDe.html">Parquet SerDe</a>. */
	export interface SerializerFormProperties {
	}
	export function CreateSerializerFormGroup() {
		return new FormGroup<SerializerFormProperties>({
		});

	}


	/** A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see <a href="https://parquet.apache.org/documentation/latest/">Apache Parquet</a>. */
	export interface ParquetSerDe {

		/** Minimum: 67108864 */
		BlockSizeBytes?: number | null;

		/** Minimum: 65536 */
		PageSizeBytes?: number | null;
		Compression?: ParquetSerDeCompression | null;
		EnableDictionaryCompression?: boolean | null;

		/** Minimum: 0 */
		MaxPaddingBytes?: number | null;
		WriterVersion?: ParquetSerDeWriterVersion | null;
	}

	/** A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see <a href="https://parquet.apache.org/documentation/latest/">Apache Parquet</a>. */
	export interface ParquetSerDeFormProperties {

		/** Minimum: 67108864 */
		BlockSizeBytes: FormControl<number | null | undefined>,

		/** Minimum: 65536 */
		PageSizeBytes: FormControl<number | null | undefined>,
		Compression: FormControl<ParquetSerDeCompression | null | undefined>,
		EnableDictionaryCompression: FormControl<boolean | null | undefined>,

		/** Minimum: 0 */
		MaxPaddingBytes: FormControl<number | null | undefined>,
		WriterVersion: FormControl<ParquetSerDeWriterVersion | null | undefined>,
	}
	export function CreateParquetSerDeFormGroup() {
		return new FormGroup<ParquetSerDeFormProperties>({
			BlockSizeBytes: new FormControl<number | null | undefined>(undefined, [Validators.min(67108864)]),
			PageSizeBytes: new FormControl<number | null | undefined>(undefined, [Validators.min(65536)]),
			Compression: new FormControl<ParquetSerDeCompression | null | undefined>(undefined),
			EnableDictionaryCompression: new FormControl<boolean | null | undefined>(undefined),
			MaxPaddingBytes: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			WriterVersion: new FormControl<ParquetSerDeWriterVersion | null | undefined>(undefined),
		});

	}

	export enum ParquetSerDeCompression { UNCOMPRESSED = 0, GZIP = 1, SNAPPY = 2 }

	export enum ParquetSerDeWriterVersion { V1 = 0, V2 = 1 }


	/** A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see <a href="https://orc.apache.org/docs/">Apache ORC</a>. */
	export interface OrcSerDe {

		/** Minimum: 8388608 */
		StripeSizeBytes?: number | null;

		/** Minimum: 67108864 */
		BlockSizeBytes?: number | null;

		/** Minimum: 1000 */
		RowIndexStride?: number | null;
		EnablePadding?: boolean | null;

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		PaddingTolerance?: number | null;
		Compression?: OrcSerDeCompression | null;
		BloomFilterColumns?: Array<string>;

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		BloomFilterFalsePositiveProbability?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		DictionaryKeyThreshold?: number | null;
		FormatVersion?: OrcSerDeFormatVersion | null;
	}

	/** A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see <a href="https://orc.apache.org/docs/">Apache ORC</a>. */
	export interface OrcSerDeFormProperties {

		/** Minimum: 8388608 */
		StripeSizeBytes: FormControl<number | null | undefined>,

		/** Minimum: 67108864 */
		BlockSizeBytes: FormControl<number | null | undefined>,

		/** Minimum: 1000 */
		RowIndexStride: FormControl<number | null | undefined>,
		EnablePadding: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		PaddingTolerance: FormControl<number | null | undefined>,
		Compression: FormControl<OrcSerDeCompression | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		BloomFilterFalsePositiveProbability: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		DictionaryKeyThreshold: FormControl<number | null | undefined>,
		FormatVersion: FormControl<OrcSerDeFormatVersion | null | undefined>,
	}
	export function CreateOrcSerDeFormGroup() {
		return new FormGroup<OrcSerDeFormProperties>({
			StripeSizeBytes: new FormControl<number | null | undefined>(undefined, [Validators.min(8388608)]),
			BlockSizeBytes: new FormControl<number | null | undefined>(undefined, [Validators.min(67108864)]),
			RowIndexStride: new FormControl<number | null | undefined>(undefined, [Validators.min(1000)]),
			EnablePadding: new FormControl<boolean | null | undefined>(undefined),
			PaddingTolerance: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			Compression: new FormControl<OrcSerDeCompression | null | undefined>(undefined),
			BloomFilterFalsePositiveProbability: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			DictionaryKeyThreshold: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			FormatVersion: new FormControl<OrcSerDeFormatVersion | null | undefined>(undefined),
		});

	}

	export enum OrcSerDeCompression { NONE = 0, ZLIB = 1, SNAPPY = 2 }

	export enum OrcSerDeFormatVersion { V0_11 = 0, V0_12 = 1 }


	/** Describes the configuration of a destination in Amazon Redshift. */
	export interface RedshiftDestinationConfiguration {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: string;

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		ClusterJDBCURL: string;

		/**
		 * Describes a <code>COPY</code> command for Amazon Redshift.
		 * Required
		 */
		CopyCommand: CopyCommand;

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		Username: string;

		/**
		 * Required
		 * Max length: 512
		 * Min length: 6
		 */
		Password: string;

		/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift. */
		RetryOptions?: RedshiftRetryOptions;

		/**
		 * Describes the configuration of a destination in Amazon S3.
		 * Required
		 */
		S3Configuration: S3DestinationConfiguration;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration;
		S3BackupMode?: ExtendedS3DestinationConfigurationS3BackupMode | null;

		/** Describes the configuration of a destination in Amazon S3. */
		S3BackupConfiguration?: S3DestinationConfiguration;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
	}

	/** Describes the configuration of a destination in Amazon Redshift. */
	export interface RedshiftDestinationConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		ClusterJDBCURL: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 * Min length: 6
		 */
		Password: FormControl<string | null | undefined>,
		S3BackupMode: FormControl<ExtendedS3DestinationConfigurationS3BackupMode | null | undefined>,
	}
	export function CreateRedshiftDestinationConfigurationFormGroup() {
		return new FormGroup<RedshiftDestinationConfigurationFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
			ClusterJDBCURL: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('jdbc:(redshift|postgresql)://((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+redshift\.([a-zA-Z0-9\.]+):\d{1,5}/[a-zA-Z0-9_$]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('.*')]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(6), Validators.maxLength(512), Validators.pattern('.*')]),
			S3BackupMode: new FormControl<ExtendedS3DestinationConfigurationS3BackupMode | null | undefined>(undefined),
		});

	}


	/** Describes a <code>COPY</code> command for Amazon Redshift. */
	export interface CopyCommand {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		DataTableName: string;

		/**
		 * Max length: 204800
		 * Min length: 0
		 */
		DataTableColumns?: string | null;

		/**
		 * Max length: 204800
		 * Min length: 0
		 */
		CopyOptions?: string | null;
	}

	/** Describes a <code>COPY</code> command for Amazon Redshift. */
	export interface CopyCommandFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		DataTableName: FormControl<string | null | undefined>,

		/**
		 * Max length: 204800
		 * Min length: 0
		 */
		DataTableColumns: FormControl<string | null | undefined>,

		/**
		 * Max length: 204800
		 * Min length: 0
		 */
		CopyOptions: FormControl<string | null | undefined>,
	}
	export function CreateCopyCommandFormGroup() {
		return new FormGroup<CopyCommandFormProperties>({
			DataTableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('.*')]),
			DataTableColumns: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(204800), Validators.pattern('.*')]),
			CopyOptions: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(204800), Validators.pattern('.*')]),
		});

	}


	/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift. */
	export interface RedshiftRetryOptions {

		/**
		 * Minimum: 0
		 * Maximum: 7200
		 */
		DurationInSeconds?: number | null;
	}

	/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift. */
	export interface RedshiftRetryOptionsFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 7200
		 */
		DurationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateRedshiftRetryOptionsFormGroup() {
		return new FormGroup<RedshiftRetryOptionsFormProperties>({
			DurationInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(7200)]),
		});

	}


	/** Describes the configuration of a destination in Amazon ES. */
	export interface ElasticsearchDestinationConfiguration {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: string;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		DomainARN?: string | null;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		ClusterEndpoint?: string | null;

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		IndexName: string;

		/**
		 * Max length: 100
		 * Min length: 0
		 */
		TypeName?: string | null;
		IndexRotationPeriod?: ElasticsearchDestinationConfigurationIndexRotationPeriod | null;

		/** Describes the buffering to perform before delivering data to the Amazon ES destination. */
		BufferingHints?: ElasticsearchBufferingHints;

		/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon ES. */
		RetryOptions?: ElasticsearchRetryOptions;
		S3BackupMode?: ElasticsearchDestinationConfigurationS3BackupMode | null;

		/**
		 * Describes the configuration of a destination in Amazon S3.
		 * Required
		 */
		S3Configuration: S3DestinationConfiguration;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

		/** The details of the VPC of the Amazon ES destination. */
		VpcConfiguration?: VpcConfiguration;
	}

	/** Describes the configuration of a destination in Amazon ES. */
	export interface ElasticsearchDestinationConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		DomainARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		ClusterEndpoint: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		IndexName: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 0
		 */
		TypeName: FormControl<string | null | undefined>,
		IndexRotationPeriod: FormControl<ElasticsearchDestinationConfigurationIndexRotationPeriod | null | undefined>,
		S3BackupMode: FormControl<ElasticsearchDestinationConfigurationS3BackupMode | null | undefined>,
	}
	export function CreateElasticsearchDestinationConfigurationFormGroup() {
		return new FormGroup<ElasticsearchDestinationConfigurationFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
			DomainARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
			ClusterEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('https:.*')]),
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(80), Validators.pattern('.*')]),
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100), Validators.pattern('.*')]),
			IndexRotationPeriod: new FormControl<ElasticsearchDestinationConfigurationIndexRotationPeriod | null | undefined>(undefined),
			S3BackupMode: new FormControl<ElasticsearchDestinationConfigurationS3BackupMode | null | undefined>(undefined),
		});

	}

	export enum ElasticsearchDestinationConfigurationIndexRotationPeriod { NoRotation = 0, OneHour = 1, OneDay = 2, OneWeek = 3, OneMonth = 4 }


	/** Describes the buffering to perform before delivering data to the Amazon ES destination. */
	export interface ElasticsearchBufferingHints {

		/**
		 * Minimum: 60
		 * Maximum: 900
		 */
		IntervalInSeconds?: number | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		SizeInMBs?: number | null;
	}

	/** Describes the buffering to perform before delivering data to the Amazon ES destination. */
	export interface ElasticsearchBufferingHintsFormProperties {

		/**
		 * Minimum: 60
		 * Maximum: 900
		 */
		IntervalInSeconds: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		SizeInMBs: FormControl<number | null | undefined>,
	}
	export function CreateElasticsearchBufferingHintsFormGroup() {
		return new FormGroup<ElasticsearchBufferingHintsFormProperties>({
			IntervalInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(900)]),
			SizeInMBs: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}


	/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon ES. */
	export interface ElasticsearchRetryOptions {

		/**
		 * Minimum: 0
		 * Maximum: 7200
		 */
		DurationInSeconds?: number | null;
	}

	/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon ES. */
	export interface ElasticsearchRetryOptionsFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 7200
		 */
		DurationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateElasticsearchRetryOptionsFormGroup() {
		return new FormGroup<ElasticsearchRetryOptionsFormProperties>({
			DurationInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(7200)]),
		});

	}

	export enum ElasticsearchDestinationConfigurationS3BackupMode { FailedDocumentsOnly = 0, AllDocuments = 1 }


	/** The details of the VPC of the Amazon ES destination. */
	export interface VpcConfiguration {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 16
		 */
		SubnetIds: Array<string>;

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		SecurityGroupIds: Array<string>;
	}

	/** The details of the VPC of the Amazon ES destination. */
	export interface VpcConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateVpcConfigurationFormGroup() {
		return new FormGroup<VpcConfigurationFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
		});

	}


	/** Describes the configuration of a destination in Splunk. */
	export interface SplunkDestinationConfiguration {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 0
		 */
		HECEndpoint: string;

		/** Required */
		HECEndpointType: SplunkDestinationConfigurationHECEndpointType;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 0
		 */
		HECToken: string;

		/**
		 * Minimum: 180
		 * Maximum: 600
		 */
		HECAcknowledgmentTimeoutInSeconds?: number | null;

		/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Splunk, or if it doesn't receive an acknowledgment from Splunk. */
		RetryOptions?: SplunkRetryOptions;
		S3BackupMode?: SplunkDestinationConfigurationS3BackupMode | null;

		/**
		 * Describes the configuration of a destination in Amazon S3.
		 * Required
		 */
		S3Configuration: S3DestinationConfiguration;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
	}

	/** Describes the configuration of a destination in Splunk. */
	export interface SplunkDestinationConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 0
		 */
		HECEndpoint: FormControl<string | null | undefined>,

		/** Required */
		HECEndpointType: FormControl<SplunkDestinationConfigurationHECEndpointType | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 0
		 */
		HECToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 180
		 * Maximum: 600
		 */
		HECAcknowledgmentTimeoutInSeconds: FormControl<number | null | undefined>,
		S3BackupMode: FormControl<SplunkDestinationConfigurationS3BackupMode | null | undefined>,
	}
	export function CreateSplunkDestinationConfigurationFormGroup() {
		return new FormGroup<SplunkDestinationConfigurationFormProperties>({
			HECEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(2048), Validators.pattern('.*')]),
			HECEndpointType: new FormControl<SplunkDestinationConfigurationHECEndpointType | null | undefined>(undefined, [Validators.required]),
			HECToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(2048), Validators.pattern('.*')]),
			HECAcknowledgmentTimeoutInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(180), Validators.max(600)]),
			S3BackupMode: new FormControl<SplunkDestinationConfigurationS3BackupMode | null | undefined>(undefined),
		});

	}

	export enum SplunkDestinationConfigurationHECEndpointType { Raw = 0, Event = 1 }


	/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Splunk, or if it doesn't receive an acknowledgment from Splunk. */
	export interface SplunkRetryOptions {

		/**
		 * Minimum: 0
		 * Maximum: 7200
		 */
		DurationInSeconds?: number | null;
	}

	/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Splunk, or if it doesn't receive an acknowledgment from Splunk. */
	export interface SplunkRetryOptionsFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 7200
		 */
		DurationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateSplunkRetryOptionsFormGroup() {
		return new FormGroup<SplunkRetryOptionsFormProperties>({
			DurationInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(7200)]),
		});

	}

	export enum SplunkDestinationConfigurationS3BackupMode { FailedEventsOnly = 0, AllEvents = 1 }


	/** Metadata that you can assign to a delivery stream, consisting of a key-value pair. */
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

	/** Metadata that you can assign to a delivery stream, consisting of a key-value pair. */
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
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^(?!aws:)[\p{L}\p{Z}\p{N}_.:\/=+\-@%]*$')]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('^[\p{L}\p{Z}\p{N}_.:\/=+\-@%]*$')]),
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

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
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

	export interface InvalidKMSResourceException {
	}
	export interface InvalidKMSResourceExceptionFormProperties {
	}
	export function CreateInvalidKMSResourceExceptionFormGroup() {
		return new FormGroup<InvalidKMSResourceExceptionFormProperties>({
		});

	}

	export interface DeleteDeliveryStreamOutput {
	}
	export interface DeleteDeliveryStreamOutputFormProperties {
	}
	export function CreateDeleteDeliveryStreamOutputFormGroup() {
		return new FormGroup<DeleteDeliveryStreamOutputFormProperties>({
		});

	}

	export interface DeleteDeliveryStreamInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DeliveryStreamName: string;
		AllowForceDelete?: boolean | null;
	}
	export interface DeleteDeliveryStreamInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DeliveryStreamName: FormControl<string | null | undefined>,
		AllowForceDelete: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteDeliveryStreamInputFormGroup() {
		return new FormGroup<DeleteDeliveryStreamInputFormProperties>({
			DeliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			AllowForceDelete: new FormControl<boolean | null | undefined>(undefined),
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

	export interface DescribeDeliveryStreamOutput {

		/**
		 * Contains information about a delivery stream.
		 * Required
		 */
		DeliveryStreamDescription: DeliveryStreamDescription;
	}
	export interface DescribeDeliveryStreamOutputFormProperties {
	}
	export function CreateDescribeDeliveryStreamOutputFormGroup() {
		return new FormGroup<DescribeDeliveryStreamOutputFormProperties>({
		});

	}


	/** Contains information about a delivery stream. */
	export interface DeliveryStreamDescription {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DeliveryStreamName: string;

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		DeliveryStreamARN: string;

		/** Required */
		DeliveryStreamStatus: DeliveryStreamDescriptionDeliveryStreamStatus;

		/** Provides details in case one of the following operations fails due to an error related to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>, <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>. */
		FailureDescription?: FailureDescription;

		/** Contains information about the server-side encryption (SSE) status for the delivery stream, the type customer master key (CMK) in use, if any, and the ARN of the CMK. You can get <code>DeliveryStreamEncryptionConfiguration</code> by invoking the <a>DescribeDeliveryStream</a> operation. */
		DeliveryStreamEncryptionConfiguration?: DeliveryStreamEncryptionConfiguration;

		/** Required */
		DeliveryStreamType: CreateDeliveryStreamInputDeliveryStreamType;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		VersionId: string;
		CreateTimestamp?: Date | null;
		LastUpdateTimestamp?: Date | null;

		/** Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream. */
		Source?: SourceDescription;

		/** Required */
		Destinations: Array<DestinationDescription>;

		/** Required */
		HasMoreDestinations: boolean;
	}

	/** Contains information about a delivery stream. */
	export interface DeliveryStreamDescriptionFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DeliveryStreamName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		DeliveryStreamARN: FormControl<string | null | undefined>,

		/** Required */
		DeliveryStreamStatus: FormControl<DeliveryStreamDescriptionDeliveryStreamStatus | null | undefined>,

		/** Required */
		DeliveryStreamType: FormControl<CreateDeliveryStreamInputDeliveryStreamType | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		VersionId: FormControl<string | null | undefined>,
		CreateTimestamp: FormControl<Date | null | undefined>,
		LastUpdateTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		HasMoreDestinations: FormControl<boolean | null | undefined>,
	}
	export function CreateDeliveryStreamDescriptionFormGroup() {
		return new FormGroup<DeliveryStreamDescriptionFormProperties>({
			DeliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			DeliveryStreamARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
			DeliveryStreamStatus: new FormControl<DeliveryStreamDescriptionDeliveryStreamStatus | null | undefined>(undefined, [Validators.required]),
			DeliveryStreamType: new FormControl<CreateDeliveryStreamInputDeliveryStreamType | null | undefined>(undefined, [Validators.required]),
			VersionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('[0-9]+')]),
			CreateTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdateTimestamp: new FormControl<Date | null | undefined>(undefined),
			HasMoreDestinations: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DeliveryStreamDescriptionDeliveryStreamStatus { CREATING = 0, CREATING_FAILED = 1, DELETING = 2, DELETING_FAILED = 3, ACTIVE = 4 }


	/** Provides details in case one of the following operations fails due to an error related to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>, <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>. */
	export interface FailureDescription {

		/** Required */
		Type: FailureDescriptionType;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Details: string;
	}

	/** Provides details in case one of the following operations fails due to an error related to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>, <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>. */
	export interface FailureDescriptionFormProperties {

		/** Required */
		Type: FormControl<FailureDescriptionType | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Details: FormControl<string | null | undefined>,
	}
	export function CreateFailureDescriptionFormGroup() {
		return new FormGroup<FailureDescriptionFormProperties>({
			Type: new FormControl<FailureDescriptionType | null | undefined>(undefined, [Validators.required]),
			Details: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^(?!\s*$).+')]),
		});

	}

	export enum FailureDescriptionType { RETIRE_KMS_GRANT_FAILED = 0, CREATE_KMS_GRANT_FAILED = 1, KMS_ACCESS_DENIED = 2, DISABLED_KMS_KEY = 3, INVALID_KMS_KEY = 4, KMS_KEY_NOT_FOUND = 5, KMS_OPT_IN_REQUIRED = 6, CREATE_ENI_FAILED = 7, DELETE_ENI_FAILED = 8, SUBNET_NOT_FOUND = 9, SECURITY_GROUP_NOT_FOUND = 10, ENI_ACCESS_DENIED = 11, SUBNET_ACCESS_DENIED = 12, SECURITY_GROUP_ACCESS_DENIED = 13, UNKNOWN_ERROR = 14 }


	/** Contains information about the server-side encryption (SSE) status for the delivery stream, the type customer master key (CMK) in use, if any, and the ARN of the CMK. You can get <code>DeliveryStreamEncryptionConfiguration</code> by invoking the <a>DescribeDeliveryStream</a> operation.  */
	export interface DeliveryStreamEncryptionConfiguration {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		KeyARN?: string | null;
		KeyType?: DeliveryStreamEncryptionConfigurationInputKeyType | null;
		Status?: DeliveryStreamEncryptionConfigurationStatus | null;

		/** Provides details in case one of the following operations fails due to an error related to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>, <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>. */
		FailureDescription?: FailureDescription;
	}

	/** Contains information about the server-side encryption (SSE) status for the delivery stream, the type customer master key (CMK) in use, if any, and the ARN of the CMK. You can get <code>DeliveryStreamEncryptionConfiguration</code> by invoking the <a>DescribeDeliveryStream</a> operation.  */
	export interface DeliveryStreamEncryptionConfigurationFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		KeyARN: FormControl<string | null | undefined>,
		KeyType: FormControl<DeliveryStreamEncryptionConfigurationInputKeyType | null | undefined>,
		Status: FormControl<DeliveryStreamEncryptionConfigurationStatus | null | undefined>,
	}
	export function CreateDeliveryStreamEncryptionConfigurationFormGroup() {
		return new FormGroup<DeliveryStreamEncryptionConfigurationFormProperties>({
			KeyARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
			KeyType: new FormControl<DeliveryStreamEncryptionConfigurationInputKeyType | null | undefined>(undefined),
			Status: new FormControl<DeliveryStreamEncryptionConfigurationStatus | null | undefined>(undefined),
		});

	}

	export enum DeliveryStreamEncryptionConfigurationStatus { ENABLED = 0, ENABLING = 1, ENABLING_FAILED = 2, DISABLED = 3, DISABLING = 4, DISABLING_FAILED = 5 }


	/** Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream. */
	export interface SourceDescription {

		/** Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream. */
		KinesisStreamSourceDescription?: KinesisStreamSourceDescription;
	}

	/** Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream. */
	export interface SourceDescriptionFormProperties {
	}
	export function CreateSourceDescriptionFormGroup() {
		return new FormGroup<SourceDescriptionFormProperties>({
		});

	}


	/** Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream. */
	export interface KinesisStreamSourceDescription {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		KinesisStreamARN?: string | null;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN?: string | null;
		DeliveryStartTimestamp?: Date | null;
	}

	/** Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream. */
	export interface KinesisStreamSourceDescriptionFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		KinesisStreamARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: FormControl<string | null | undefined>,
		DeliveryStartTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateKinesisStreamSourceDescriptionFormGroup() {
		return new FormGroup<KinesisStreamSourceDescriptionFormProperties>({
			KinesisStreamARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
			DeliveryStartTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes the destination for a delivery stream. */
	export interface DestinationDescription {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DestinationId: string;

		/** Describes a destination in Amazon S3. */
		S3DestinationDescription?: S3DestinationDescription;

		/** Describes a destination in Amazon S3. */
		ExtendedS3DestinationDescription?: ExtendedS3DestinationDescription;

		/** Describes a destination in Amazon Redshift. */
		RedshiftDestinationDescription?: RedshiftDestinationDescription;

		/** The destination description in Amazon ES. */
		ElasticsearchDestinationDescription?: ElasticsearchDestinationDescription;

		/** Describes a destination in Splunk. */
		SplunkDestinationDescription?: SplunkDestinationDescription;
	}

	/** Describes the destination for a delivery stream. */
	export interface DestinationDescriptionFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DestinationId: FormControl<string | null | undefined>,
	}
	export function CreateDestinationDescriptionFormGroup() {
		return new FormGroup<DestinationDescriptionFormProperties>({
			DestinationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9-]+')]),
		});

	}


	/** Describes a destination in Amazon S3. */
	export interface S3DestinationDescription {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		BucketARN: string;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		Prefix?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		ErrorOutputPrefix?: string | null;

		/**
		 * Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Kinesis Data Firehose might choose to use different values when it is optimal. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other.
		 * Required
		 */
		BufferingHints: BufferingHints;

		/** Required */
		CompressionFormat: S3DestinationConfigurationCompressionFormat;

		/**
		 * Describes the encryption for a destination in Amazon S3.
		 * Required
		 */
		EncryptionConfiguration: EncryptionConfiguration;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
	}

	/** Describes a destination in Amazon S3. */
	export interface S3DestinationDescriptionFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		BucketARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		Prefix: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		ErrorOutputPrefix: FormControl<string | null | undefined>,

		/** Required */
		CompressionFormat: FormControl<S3DestinationConfigurationCompressionFormat | null | undefined>,
	}
	export function CreateS3DestinationDescriptionFormGroup() {
		return new FormGroup<S3DestinationDescriptionFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
			BucketARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('arn:.*')]),
			Prefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
			ErrorOutputPrefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
			CompressionFormat: new FormControl<S3DestinationConfigurationCompressionFormat | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes a destination in Amazon S3. */
	export interface ExtendedS3DestinationDescription {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		BucketARN: string;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		Prefix?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		ErrorOutputPrefix?: string | null;

		/**
		 * Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Kinesis Data Firehose might choose to use different values when it is optimal. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other.
		 * Required
		 */
		BufferingHints: BufferingHints;

		/** Required */
		CompressionFormat: S3DestinationConfigurationCompressionFormat;

		/**
		 * Describes the encryption for a destination in Amazon S3.
		 * Required
		 */
		EncryptionConfiguration: EncryptionConfiguration;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration;
		S3BackupMode?: ExtendedS3DestinationConfigurationS3BackupMode | null;

		/** Describes a destination in Amazon S3. */
		S3BackupDescription?: S3DestinationDescription;

		/** Specifies that you want Kinesis Data Firehose to convert data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. Kinesis Data Firehose uses the serializer and deserializer that you specify, in addition to the column information from the AWS Glue table, to deserialize your input data from JSON and then serialize it to the Parquet or ORC format. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html">Kinesis Data Firehose Record Format Conversion</a>. */
		DataFormatConversionConfiguration?: DataFormatConversionConfiguration;
	}

	/** Describes a destination in Amazon S3. */
	export interface ExtendedS3DestinationDescriptionFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		BucketARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		Prefix: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		ErrorOutputPrefix: FormControl<string | null | undefined>,

		/** Required */
		CompressionFormat: FormControl<S3DestinationConfigurationCompressionFormat | null | undefined>,
		S3BackupMode: FormControl<ExtendedS3DestinationConfigurationS3BackupMode | null | undefined>,
	}
	export function CreateExtendedS3DestinationDescriptionFormGroup() {
		return new FormGroup<ExtendedS3DestinationDescriptionFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
			BucketARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('arn:.*')]),
			Prefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
			ErrorOutputPrefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
			CompressionFormat: new FormControl<S3DestinationConfigurationCompressionFormat | null | undefined>(undefined, [Validators.required]),
			S3BackupMode: new FormControl<ExtendedS3DestinationConfigurationS3BackupMode | null | undefined>(undefined),
		});

	}


	/** Describes a destination in Amazon Redshift. */
	export interface RedshiftDestinationDescription {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: string;

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		ClusterJDBCURL: string;

		/**
		 * Describes a <code>COPY</code> command for Amazon Redshift.
		 * Required
		 */
		CopyCommand: CopyCommand;

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		Username: string;

		/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift. */
		RetryOptions?: RedshiftRetryOptions;

		/**
		 * Describes a destination in Amazon S3.
		 * Required
		 */
		S3DestinationDescription: S3DestinationDescription;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration;
		S3BackupMode?: ExtendedS3DestinationConfigurationS3BackupMode | null;

		/** Describes a destination in Amazon S3. */
		S3BackupDescription?: S3DestinationDescription;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
	}

	/** Describes a destination in Amazon Redshift. */
	export interface RedshiftDestinationDescriptionFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		ClusterJDBCURL: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,
		S3BackupMode: FormControl<ExtendedS3DestinationConfigurationS3BackupMode | null | undefined>,
	}
	export function CreateRedshiftDestinationDescriptionFormGroup() {
		return new FormGroup<RedshiftDestinationDescriptionFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
			ClusterJDBCURL: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('jdbc:(redshift|postgresql)://((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+redshift\.([a-zA-Z0-9\.]+):\d{1,5}/[a-zA-Z0-9_$]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('.*')]),
			S3BackupMode: new FormControl<ExtendedS3DestinationConfigurationS3BackupMode | null | undefined>(undefined),
		});

	}


	/** The destination description in Amazon ES. */
	export interface ElasticsearchDestinationDescription {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN?: string | null;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		DomainARN?: string | null;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		ClusterEndpoint?: string | null;

		/**
		 * Max length: 80
		 * Min length: 1
		 */
		IndexName?: string | null;

		/**
		 * Max length: 100
		 * Min length: 0
		 */
		TypeName?: string | null;
		IndexRotationPeriod?: ElasticsearchDestinationConfigurationIndexRotationPeriod | null;

		/** Describes the buffering to perform before delivering data to the Amazon ES destination. */
		BufferingHints?: ElasticsearchBufferingHints;

		/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon ES. */
		RetryOptions?: ElasticsearchRetryOptions;
		S3BackupMode?: ElasticsearchDestinationConfigurationS3BackupMode | null;

		/** Describes a destination in Amazon S3. */
		S3DestinationDescription?: S3DestinationDescription;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

		/** The details of the VPC of the Amazon ES destination. */
		VpcConfigurationDescription?: VpcConfigurationDescription;
	}

	/** The destination description in Amazon ES. */
	export interface ElasticsearchDestinationDescriptionFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		DomainARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		ClusterEndpoint: FormControl<string | null | undefined>,

		/**
		 * Max length: 80
		 * Min length: 1
		 */
		IndexName: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 0
		 */
		TypeName: FormControl<string | null | undefined>,
		IndexRotationPeriod: FormControl<ElasticsearchDestinationConfigurationIndexRotationPeriod | null | undefined>,
		S3BackupMode: FormControl<ElasticsearchDestinationConfigurationS3BackupMode | null | undefined>,
	}
	export function CreateElasticsearchDestinationDescriptionFormGroup() {
		return new FormGroup<ElasticsearchDestinationDescriptionFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
			DomainARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
			ClusterEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('https:.*')]),
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(80), Validators.pattern('.*')]),
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100), Validators.pattern('.*')]),
			IndexRotationPeriod: new FormControl<ElasticsearchDestinationConfigurationIndexRotationPeriod | null | undefined>(undefined),
			S3BackupMode: new FormControl<ElasticsearchDestinationConfigurationS3BackupMode | null | undefined>(undefined),
		});

	}


	/** The details of the VPC of the Amazon ES destination. */
	export interface VpcConfigurationDescription {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 16
		 */
		SubnetIds: Array<string>;

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		SecurityGroupIds: Array<string>;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		VpcId: string;
	}

	/** The details of the VPC of the Amazon ES destination. */
	export interface VpcConfigurationDescriptionFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateVpcConfigurationDescriptionFormGroup() {
		return new FormGroup<VpcConfigurationDescriptionFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^\S+$')]),
		});

	}


	/** Describes a destination in Splunk. */
	export interface SplunkDestinationDescription {

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		HECEndpoint?: string | null;
		HECEndpointType?: SplunkDestinationConfigurationHECEndpointType | null;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		HECToken?: string | null;

		/**
		 * Minimum: 180
		 * Maximum: 600
		 */
		HECAcknowledgmentTimeoutInSeconds?: number | null;

		/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Splunk, or if it doesn't receive an acknowledgment from Splunk. */
		RetryOptions?: SplunkRetryOptions;
		S3BackupMode?: SplunkDestinationConfigurationS3BackupMode | null;

		/** Describes a destination in Amazon S3. */
		S3DestinationDescription?: S3DestinationDescription;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
	}

	/** Describes a destination in Splunk. */
	export interface SplunkDestinationDescriptionFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		HECEndpoint: FormControl<string | null | undefined>,
		HECEndpointType: FormControl<SplunkDestinationConfigurationHECEndpointType | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		HECToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 180
		 * Maximum: 600
		 */
		HECAcknowledgmentTimeoutInSeconds: FormControl<number | null | undefined>,
		S3BackupMode: FormControl<SplunkDestinationConfigurationS3BackupMode | null | undefined>,
	}
	export function CreateSplunkDestinationDescriptionFormGroup() {
		return new FormGroup<SplunkDestinationDescriptionFormProperties>({
			HECEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048), Validators.pattern('.*')]),
			HECEndpointType: new FormControl<SplunkDestinationConfigurationHECEndpointType | null | undefined>(undefined),
			HECToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048), Validators.pattern('.*')]),
			HECAcknowledgmentTimeoutInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(180), Validators.max(600)]),
			S3BackupMode: new FormControl<SplunkDestinationConfigurationS3BackupMode | null | undefined>(undefined),
		});

	}

	export interface DescribeDeliveryStreamInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DeliveryStreamName: string;

		/**
		 * Minimum: 1
		 * Maximum: 10000
		 */
		Limit?: number | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ExclusiveStartDestinationId?: string | null;
	}
	export interface DescribeDeliveryStreamInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DeliveryStreamName: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 10000
		 */
		Limit: FormControl<number | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ExclusiveStartDestinationId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDeliveryStreamInputFormGroup() {
		return new FormGroup<DescribeDeliveryStreamInputFormProperties>({
			DeliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10000)]),
			ExclusiveStartDestinationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9-]+')]),
		});

	}

	export interface ListDeliveryStreamsOutput {

		/** Required */
		DeliveryStreamNames: Array<string>;

		/** Required */
		HasMoreDeliveryStreams: boolean;
	}
	export interface ListDeliveryStreamsOutputFormProperties {

		/** Required */
		HasMoreDeliveryStreams: FormControl<boolean | null | undefined>,
	}
	export function CreateListDeliveryStreamsOutputFormGroup() {
		return new FormGroup<ListDeliveryStreamsOutputFormProperties>({
			HasMoreDeliveryStreams: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListDeliveryStreamsInput {

		/**
		 * Minimum: 1
		 * Maximum: 10000
		 */
		Limit?: number | null;
		DeliveryStreamType?: CreateDeliveryStreamInputDeliveryStreamType | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ExclusiveStartDeliveryStreamName?: string | null;
	}
	export interface ListDeliveryStreamsInputFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 10000
		 */
		Limit: FormControl<number | null | undefined>,
		DeliveryStreamType: FormControl<CreateDeliveryStreamInputDeliveryStreamType | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ExclusiveStartDeliveryStreamName: FormControl<string | null | undefined>,
	}
	export function CreateListDeliveryStreamsInputFormGroup() {
		return new FormGroup<ListDeliveryStreamsInputFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10000)]),
			DeliveryStreamType: new FormControl<CreateDeliveryStreamInputDeliveryStreamType | null | undefined>(undefined),
			ExclusiveStartDeliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface ListTagsForDeliveryStreamOutput {

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags: Array<Tag>;

		/** Required */
		HasMoreTags: boolean;
	}
	export interface ListTagsForDeliveryStreamOutputFormProperties {

		/** Required */
		HasMoreTags: FormControl<boolean | null | undefined>,
	}
	export function CreateListTagsForDeliveryStreamOutputFormGroup() {
		return new FormGroup<ListTagsForDeliveryStreamOutputFormProperties>({
			HasMoreTags: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsForDeliveryStreamInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DeliveryStreamName: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ExclusiveStartTagKey?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		Limit?: number | null;
	}
	export interface ListTagsForDeliveryStreamInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DeliveryStreamName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ExclusiveStartTagKey: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListTagsForDeliveryStreamInputFormGroup() {
		return new FormGroup<ListTagsForDeliveryStreamInputFormProperties>({
			DeliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			ExclusiveStartTagKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^(?!aws:)[\p{L}\p{Z}\p{N}_.:\/=+\-@%]*$')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}

	export interface PutRecordOutput {

		/**
		 * Required
		 * Min length: 1
		 */
		RecordId: string;
		Encrypted?: boolean | null;
	}
	export interface PutRecordOutputFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		RecordId: FormControl<string | null | undefined>,
		Encrypted: FormControl<boolean | null | undefined>,
	}
	export function CreatePutRecordOutputFormGroup() {
		return new FormGroup<PutRecordOutputFormProperties>({
			RecordId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			Encrypted: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutRecordInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DeliveryStreamName: string;

		/**
		 * The unit of data in a delivery stream.
		 * Required
		 */
		Record: Record;
	}
	export interface PutRecordInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DeliveryStreamName: FormControl<string | null | undefined>,
	}
	export function CreatePutRecordInputFormGroup() {
		return new FormGroup<PutRecordInputFormProperties>({
			DeliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}


	/** The unit of data in a delivery stream. */
	export interface Record {

		/**
		 * Required
		 * Max length: 1024000
		 * Min length: 0
		 */
		Data: string;
	}

	/** The unit of data in a delivery stream. */
	export interface RecordFormProperties {

		/**
		 * Required
		 * Max length: 1024000
		 * Min length: 0
		 */
		Data: FormControl<string | null | undefined>,
	}
	export function CreateRecordFormGroup() {
		return new FormGroup<RecordFormProperties>({
			Data: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1024000)]),
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

	export interface PutRecordBatchOutput {

		/**
		 * Required
		 * Minimum: 0
		 */
		FailedPutCount: number;
		Encrypted?: boolean | null;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 500
		 */
		RequestResponses: Array<PutRecordBatchResponseEntry>;
	}
	export interface PutRecordBatchOutputFormProperties {

		/**
		 * Required
		 * Minimum: 0
		 */
		FailedPutCount: FormControl<number | null | undefined>,
		Encrypted: FormControl<boolean | null | undefined>,
	}
	export function CreatePutRecordBatchOutputFormGroup() {
		return new FormGroup<PutRecordBatchOutputFormProperties>({
			FailedPutCount: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			Encrypted: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains the result for an individual record from a <a>PutRecordBatch</a> request. If the record is successfully added to your delivery stream, it receives a record ID. If the record fails to be added to your delivery stream, the result includes an error code and an error message. */
	export interface PutRecordBatchResponseEntry {

		/** Min length: 1 */
		RecordId?: string | null;
		ErrorCode?: string | null;
		ErrorMessage?: string | null;
	}

	/** Contains the result for an individual record from a <a>PutRecordBatch</a> request. If the record is successfully added to your delivery stream, it receives a record ID. If the record fails to be added to your delivery stream, the result includes an error code and an error message. */
	export interface PutRecordBatchResponseEntryFormProperties {

		/** Min length: 1 */
		RecordId: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreatePutRecordBatchResponseEntryFormGroup() {
		return new FormGroup<PutRecordBatchResponseEntryFormProperties>({
			RecordId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutRecordBatchInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DeliveryStreamName: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 500
		 */
		Records: Array<Record>;
	}
	export interface PutRecordBatchInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DeliveryStreamName: FormControl<string | null | undefined>,
	}
	export function CreatePutRecordBatchInputFormGroup() {
		return new FormGroup<PutRecordBatchInputFormProperties>({
			DeliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface StartDeliveryStreamEncryptionOutput {
	}
	export interface StartDeliveryStreamEncryptionOutputFormProperties {
	}
	export function CreateStartDeliveryStreamEncryptionOutputFormGroup() {
		return new FormGroup<StartDeliveryStreamEncryptionOutputFormProperties>({
		});

	}

	export interface StartDeliveryStreamEncryptionInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DeliveryStreamName: string;

		/** Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE). */
		DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;
	}
	export interface StartDeliveryStreamEncryptionInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DeliveryStreamName: FormControl<string | null | undefined>,
	}
	export function CreateStartDeliveryStreamEncryptionInputFormGroup() {
		return new FormGroup<StartDeliveryStreamEncryptionInputFormProperties>({
			DeliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface StopDeliveryStreamEncryptionOutput {
	}
	export interface StopDeliveryStreamEncryptionOutputFormProperties {
	}
	export function CreateStopDeliveryStreamEncryptionOutputFormGroup() {
		return new FormGroup<StopDeliveryStreamEncryptionOutputFormProperties>({
		});

	}

	export interface StopDeliveryStreamEncryptionInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DeliveryStreamName: string;
	}
	export interface StopDeliveryStreamEncryptionInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DeliveryStreamName: FormControl<string | null | undefined>,
	}
	export function CreateStopDeliveryStreamEncryptionInputFormGroup() {
		return new FormGroup<StopDeliveryStreamEncryptionInputFormProperties>({
			DeliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface TagDeliveryStreamOutput {
	}
	export interface TagDeliveryStreamOutputFormProperties {
	}
	export function CreateTagDeliveryStreamOutputFormGroup() {
		return new FormGroup<TagDeliveryStreamOutputFormProperties>({
		});

	}

	export interface TagDeliveryStreamInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DeliveryStreamName: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags: Array<Tag>;
	}
	export interface TagDeliveryStreamInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DeliveryStreamName: FormControl<string | null | undefined>,
	}
	export function CreateTagDeliveryStreamInputFormGroup() {
		return new FormGroup<TagDeliveryStreamInputFormProperties>({
			DeliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface UntagDeliveryStreamOutput {
	}
	export interface UntagDeliveryStreamOutputFormProperties {
	}
	export function CreateUntagDeliveryStreamOutputFormGroup() {
		return new FormGroup<UntagDeliveryStreamOutputFormProperties>({
		});

	}

	export interface UntagDeliveryStreamInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DeliveryStreamName: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagKeys: Array<string>;
	}
	export interface UntagDeliveryStreamInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DeliveryStreamName: FormControl<string | null | undefined>,
	}
	export function CreateUntagDeliveryStreamInputFormGroup() {
		return new FormGroup<UntagDeliveryStreamInputFormProperties>({
			DeliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface UpdateDestinationOutput {
	}
	export interface UpdateDestinationOutputFormProperties {
	}
	export function CreateUpdateDestinationOutputFormGroup() {
		return new FormGroup<UpdateDestinationOutputFormProperties>({
		});

	}

	export interface UpdateDestinationInput {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DeliveryStreamName: string;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		CurrentDeliveryStreamVersionId: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DestinationId: string;

		/** Describes an update for a destination in Amazon S3. */
		S3DestinationUpdate?: S3DestinationUpdate;

		/** Describes an update for a destination in Amazon S3. */
		ExtendedS3DestinationUpdate?: ExtendedS3DestinationUpdate;

		/** Describes an update for a destination in Amazon Redshift. */
		RedshiftDestinationUpdate?: RedshiftDestinationUpdate;

		/** Describes an update for a destination in Amazon ES. */
		ElasticsearchDestinationUpdate?: ElasticsearchDestinationUpdate;

		/** Describes an update for a destination in Splunk. */
		SplunkDestinationUpdate?: SplunkDestinationUpdate;
	}
	export interface UpdateDestinationInputFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		DeliveryStreamName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		CurrentDeliveryStreamVersionId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		DestinationId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDestinationInputFormGroup() {
		return new FormGroup<UpdateDestinationInputFormProperties>({
			DeliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			CurrentDeliveryStreamVersionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('[0-9]+')]),
			DestinationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9-]+')]),
		});

	}


	/** Describes an update for a destination in Amazon S3. */
	export interface S3DestinationUpdate {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		BucketARN?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		Prefix?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		ErrorOutputPrefix?: string | null;

		/** Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Kinesis Data Firehose might choose to use different values when it is optimal. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other. */
		BufferingHints?: BufferingHints;
		CompressionFormat?: S3DestinationConfigurationCompressionFormat | null;

		/** Describes the encryption for a destination in Amazon S3. */
		EncryptionConfiguration?: EncryptionConfiguration;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
	}

	/** Describes an update for a destination in Amazon S3. */
	export interface S3DestinationUpdateFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		BucketARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		Prefix: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		ErrorOutputPrefix: FormControl<string | null | undefined>,
		CompressionFormat: FormControl<S3DestinationConfigurationCompressionFormat | null | undefined>,
	}
	export function CreateS3DestinationUpdateFormGroup() {
		return new FormGroup<S3DestinationUpdateFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
			BucketARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('arn:.*')]),
			Prefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
			ErrorOutputPrefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
			CompressionFormat: new FormControl<S3DestinationConfigurationCompressionFormat | null | undefined>(undefined),
		});

	}


	/** Describes an update for a destination in Amazon S3. */
	export interface ExtendedS3DestinationUpdate {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		BucketARN?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		Prefix?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		ErrorOutputPrefix?: string | null;

		/** Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Kinesis Data Firehose might choose to use different values when it is optimal. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other. */
		BufferingHints?: BufferingHints;
		CompressionFormat?: S3DestinationConfigurationCompressionFormat | null;

		/** Describes the encryption for a destination in Amazon S3. */
		EncryptionConfiguration?: EncryptionConfiguration;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration;
		S3BackupMode?: ExtendedS3DestinationConfigurationS3BackupMode | null;

		/** Describes an update for a destination in Amazon S3. */
		S3BackupUpdate?: S3DestinationUpdate;

		/** Specifies that you want Kinesis Data Firehose to convert data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. Kinesis Data Firehose uses the serializer and deserializer that you specify, in addition to the column information from the AWS Glue table, to deserialize your input data from JSON and then serialize it to the Parquet or ORC format. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html">Kinesis Data Firehose Record Format Conversion</a>. */
		DataFormatConversionConfiguration?: DataFormatConversionConfiguration;
	}

	/** Describes an update for a destination in Amazon S3. */
	export interface ExtendedS3DestinationUpdateFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		BucketARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		Prefix: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		ErrorOutputPrefix: FormControl<string | null | undefined>,
		CompressionFormat: FormControl<S3DestinationConfigurationCompressionFormat | null | undefined>,
		S3BackupMode: FormControl<ExtendedS3DestinationConfigurationS3BackupMode | null | undefined>,
	}
	export function CreateExtendedS3DestinationUpdateFormGroup() {
		return new FormGroup<ExtendedS3DestinationUpdateFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
			BucketARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('arn:.*')]),
			Prefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
			ErrorOutputPrefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*')]),
			CompressionFormat: new FormControl<S3DestinationConfigurationCompressionFormat | null | undefined>(undefined),
			S3BackupMode: new FormControl<ExtendedS3DestinationConfigurationS3BackupMode | null | undefined>(undefined),
		});

	}


	/** Describes an update for a destination in Amazon Redshift. */
	export interface RedshiftDestinationUpdate {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN?: string | null;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		ClusterJDBCURL?: string | null;

		/** Describes a <code>COPY</code> command for Amazon Redshift. */
		CopyCommand?: CopyCommand;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		Username?: string | null;

		/**
		 * Max length: 512
		 * Min length: 6
		 */
		Password?: string | null;

		/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift. */
		RetryOptions?: RedshiftRetryOptions;

		/** Describes an update for a destination in Amazon S3. */
		S3Update?: S3DestinationUpdate;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration;
		S3BackupMode?: ExtendedS3DestinationConfigurationS3BackupMode | null;

		/** Describes an update for a destination in Amazon S3. */
		S3BackupUpdate?: S3DestinationUpdate;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
	}

	/** Describes an update for a destination in Amazon Redshift. */
	export interface RedshiftDestinationUpdateFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		ClusterJDBCURL: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 6
		 */
		Password: FormControl<string | null | undefined>,
		S3BackupMode: FormControl<ExtendedS3DestinationConfigurationS3BackupMode | null | undefined>,
	}
	export function CreateRedshiftDestinationUpdateFormGroup() {
		return new FormGroup<RedshiftDestinationUpdateFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
			ClusterJDBCURL: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('jdbc:(redshift|postgresql)://((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+redshift\.([a-zA-Z0-9\.]+):\d{1,5}/[a-zA-Z0-9_$]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('.*')]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(512), Validators.pattern('.*')]),
			S3BackupMode: new FormControl<ExtendedS3DestinationConfigurationS3BackupMode | null | undefined>(undefined),
		});

	}


	/** Describes an update for a destination in Amazon ES. */
	export interface ElasticsearchDestinationUpdate {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN?: string | null;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		DomainARN?: string | null;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		ClusterEndpoint?: string | null;

		/**
		 * Max length: 80
		 * Min length: 1
		 */
		IndexName?: string | null;

		/**
		 * Max length: 100
		 * Min length: 0
		 */
		TypeName?: string | null;
		IndexRotationPeriod?: ElasticsearchDestinationConfigurationIndexRotationPeriod | null;

		/** Describes the buffering to perform before delivering data to the Amazon ES destination. */
		BufferingHints?: ElasticsearchBufferingHints;

		/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon ES. */
		RetryOptions?: ElasticsearchRetryOptions;

		/** Describes an update for a destination in Amazon S3. */
		S3Update?: S3DestinationUpdate;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
	}

	/** Describes an update for a destination in Amazon ES. */
	export interface ElasticsearchDestinationUpdateFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		RoleARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		DomainARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		ClusterEndpoint: FormControl<string | null | undefined>,

		/**
		 * Max length: 80
		 * Min length: 1
		 */
		IndexName: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 0
		 */
		TypeName: FormControl<string | null | undefined>,
		IndexRotationPeriod: FormControl<ElasticsearchDestinationConfigurationIndexRotationPeriod | null | undefined>,
	}
	export function CreateElasticsearchDestinationUpdateFormGroup() {
		return new FormGroup<ElasticsearchDestinationUpdateFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
			DomainARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:.*')]),
			ClusterEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('https:.*')]),
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(80), Validators.pattern('.*')]),
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100), Validators.pattern('.*')]),
			IndexRotationPeriod: new FormControl<ElasticsearchDestinationConfigurationIndexRotationPeriod | null | undefined>(undefined),
		});

	}


	/** Describes an update for a destination in Splunk. */
	export interface SplunkDestinationUpdate {

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		HECEndpoint?: string | null;
		HECEndpointType?: SplunkDestinationConfigurationHECEndpointType | null;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		HECToken?: string | null;

		/**
		 * Minimum: 180
		 * Maximum: 600
		 */
		HECAcknowledgmentTimeoutInSeconds?: number | null;

		/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Splunk, or if it doesn't receive an acknowledgment from Splunk. */
		RetryOptions?: SplunkRetryOptions;
		S3BackupMode?: SplunkDestinationConfigurationS3BackupMode | null;

		/** Describes an update for a destination in Amazon S3. */
		S3Update?: S3DestinationUpdate;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
	}

	/** Describes an update for a destination in Splunk. */
	export interface SplunkDestinationUpdateFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		HECEndpoint: FormControl<string | null | undefined>,
		HECEndpointType: FormControl<SplunkDestinationConfigurationHECEndpointType | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		HECToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 180
		 * Maximum: 600
		 */
		HECAcknowledgmentTimeoutInSeconds: FormControl<number | null | undefined>,
		S3BackupMode: FormControl<SplunkDestinationConfigurationS3BackupMode | null | undefined>,
	}
	export function CreateSplunkDestinationUpdateFormGroup() {
		return new FormGroup<SplunkDestinationUpdateFormProperties>({
			HECEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048), Validators.pattern('.*')]),
			HECEndpointType: new FormControl<SplunkDestinationConfigurationHECEndpointType | null | undefined>(undefined),
			HECToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048), Validators.pattern('.*')]),
			HECAcknowledgmentTimeoutInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(180), Validators.max(600)]),
			S3BackupMode: new FormControl<SplunkDestinationConfigurationS3BackupMode | null | undefined>(undefined),
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

	export enum CompressionFormat { UNCOMPRESSED = 0, GZIP = 1, ZIP = 2, Snappy = 3, HADOOP_SNAPPY = 4 }

	export enum DeliveryStreamType { DirectPut = 0, KinesisStreamAsSource = 1 }

	export enum DeliveryStreamStatus { CREATING = 0, CREATING_FAILED = 1, DELETING = 2, DELETING_FAILED = 3, ACTIVE = 4 }

	export enum KeyType { AWS_OWNED_CMK = 0, CUSTOMER_MANAGED_CMK = 1 }

	export enum DeliveryStreamEncryptionStatus { ENABLED = 0, ENABLING = 1, ENABLING_FAILED = 2, DISABLED = 3, DISABLING = 4, DISABLING_FAILED = 5 }

	export enum DeliveryStreamFailureType { RETIRE_KMS_GRANT_FAILED = 0, CREATE_KMS_GRANT_FAILED = 1, KMS_ACCESS_DENIED = 2, DISABLED_KMS_KEY = 3, INVALID_KMS_KEY = 4, KMS_KEY_NOT_FOUND = 5, KMS_OPT_IN_REQUIRED = 6, CREATE_ENI_FAILED = 7, DELETE_ENI_FAILED = 8, SUBNET_NOT_FOUND = 9, SECURITY_GROUP_NOT_FOUND = 10, ENI_ACCESS_DENIED = 11, SUBNET_ACCESS_DENIED = 12, SECURITY_GROUP_ACCESS_DENIED = 13, UNKNOWN_ERROR = 14 }

	export enum ElasticsearchIndexRotationPeriod { NoRotation = 0, OneHour = 1, OneDay = 2, OneWeek = 3, OneMonth = 4 }

	export enum ElasticsearchS3BackupMode { FailedDocumentsOnly = 0, AllDocuments = 1 }

	export enum NoEncryptionConfig { NoEncryption = 0 }

	export enum S3BackupMode { Disabled = 0, Enabled = 1 }

	export enum HECEndpointType { Raw = 0, Event = 1 }

	export enum OrcCompression { NONE = 0, ZLIB = 1, SNAPPY = 2 }

	export enum OrcFormatVersion { V0_11 = 0, V0_12 = 1 }

	export enum ParquetCompression { UNCOMPRESSED = 0, GZIP = 1, SNAPPY = 2 }

	export enum ParquetWriterVersion { V1 = 0, V2 = 1 }

	export enum ProcessorParameterName { LambdaArn = 0, NumberOfRetries = 1, RoleArn = 2, BufferSizeInMBs = 3, BufferIntervalInSeconds = 4 }

	export enum RedshiftS3BackupMode { Disabled = 0, Enabled = 1 }

	export enum SplunkS3BackupMode { FailedEventsOnly = 0, AllEvents = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a Kinesis Data Firehose delivery stream.</p> <p>By default, you can create up to 50 delivery streams per AWS Region.</p> <p>This is an asynchronous operation that immediately returns. The initial status of the delivery stream is <code>CREATING</code>. After the delivery stream is created, its status is <code>ACTIVE</code> and it now accepts data. If the delivery stream creation fails, the status transitions to <code>CREATING_FAILED</code>. Attempts to send data to a delivery stream that is not in the <code>ACTIVE</code> state cause an exception. To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <code>CreateDeliveryStream</code> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it.</p> <p>A Kinesis Data Firehose delivery stream can be configured to receive records directly from providers using <a>PutRecord</a> or <a>PutRecordBatch</a>, or it can be configured to use an existing Kinesis stream as its source. To specify a Kinesis data stream as input, set the <code>DeliveryStreamType</code> parameter to <code>KinesisStreamAsSource</code>, and provide the Kinesis stream Amazon Resource Name (ARN) and role ARN in the <code>KinesisStreamSourceConfiguration</code> parameter.</p> <p>To create a delivery stream with server-side encryption (SSE) enabled, include <a>DeliveryStreamEncryptionConfigurationInput</a> in your request. This is optional. You can also invoke <a>StartDeliveryStreamEncryption</a> to turn on SSE for an existing delivery stream that doesn't have SSE enabled.</p> <p>A delivery stream is configured with a single destination: Amazon S3, Amazon ES, Amazon Redshift, or Splunk. You must specify only one of the following destination configuration parameters: <code>ExtendedS3DestinationConfiguration</code>, <code>S3DestinationConfiguration</code>, <code>ElasticsearchDestinationConfiguration</code>, <code>RedshiftDestinationConfiguration</code>, or <code>SplunkDestinationConfiguration</code>.</p> <p>When you specify <code>S3DestinationConfiguration</code>, you can also provide the following optional values: BufferingHints, <code>EncryptionConfiguration</code>, and <code>CompressionFormat</code>. By default, if no <code>BufferingHints</code> value is provided, Kinesis Data Firehose buffers data up to 5 MB or for 5 minutes, whichever condition is satisfied first. <code>BufferingHints</code> is a hint, so there are some cases where the service cannot adhere to these conditions strictly. For example, record boundaries might be such that the size is a little over or under the configured buffering size. By default, no encryption is performed. We strongly recommend that you enable encryption to ensure secure data storage in Amazon S3.</p> <p>A few notes about Amazon Redshift as a destination:</p> <ul> <li> <p>An Amazon Redshift destination requires an S3 bucket as intermediate location. Kinesis Data Firehose first delivers data to Amazon S3 and then uses <code>COPY</code> syntax to load data into an Amazon Redshift table. This is specified in the <code>RedshiftDestinationConfiguration.S3Configuration</code> parameter.</p> </li> <li> <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified in <code>RedshiftDestinationConfiguration.S3Configuration</code> because the Amazon Redshift <code>COPY</code> operation that reads from the S3 bucket doesn't support these compression formats.</p> </li> <li> <p>We strongly recommend that you use the user name and password you provide exclusively with Kinesis Data Firehose, and that the permissions for the account are restricted for Amazon Redshift <code>INSERT</code> permissions.</p> </li> </ul> <p>Kinesis Data Firehose assumes the IAM role that is configured as part of the destination. The role should allow the Kinesis Data Firehose principal to assume the role, and the role should have permissions that allow the service to deliver the data. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3">Grant Kinesis Data Firehose Access to an Amazon S3 Destination</a> in the <i>Amazon Kinesis Data Firehose Developer Guide</i>.</p>
		 * Post #X-Amz-Target=Firehose_20150804.CreateDeliveryStream
		 * @return {CreateDeliveryStreamOutput} Success
		 */
		CreateDeliveryStream(requestBody: CreateDeliveryStreamInput): Observable<CreateDeliveryStreamOutput> {
			return this.http.post<CreateDeliveryStreamOutput>(this.baseUri + '#X-Amz-Target=Firehose_20150804.CreateDeliveryStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a delivery stream and its data.</p> <p>To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>. You can delete a delivery stream only if it is in one of the following states: <code>ACTIVE</code>, <code>DELETING</code>, <code>CREATING_FAILED</code>, or <code>DELETING_FAILED</code>. You can't delete a delivery stream that is in the <code>CREATING</code> state. While the deletion request is in process, the delivery stream is in the <code>DELETING</code> state.</p> <p>While the delivery stream is in the <code>DELETING</code> state, the service might continue to accept records, but it doesn't make any guarantees with respect to delivering the data. Therefore, as a best practice, first stop any applications that are sending records before you delete a delivery stream.</p>
		 * Post #X-Amz-Target=Firehose_20150804.DeleteDeliveryStream
		 * @return {DeleteDeliveryStreamOutput} Success
		 */
		DeleteDeliveryStream(requestBody: DeleteDeliveryStreamInput): Observable<DeleteDeliveryStreamOutput> {
			return this.http.post<DeleteDeliveryStreamOutput>(this.baseUri + '#X-Amz-Target=Firehose_20150804.DeleteDeliveryStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the specified delivery stream and its status. For example, after your delivery stream is created, call <code>DescribeDeliveryStream</code> to see whether the delivery stream is <code>ACTIVE</code> and therefore ready for data to be sent to it. </p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <a>CreateDeliveryStream</a> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it. If the status is <code>DELETING_FAILED</code>, you can force deletion by invoking <a>DeleteDeliveryStream</a> again but with <a>DeleteDeliveryStreamInput$AllowForceDelete</a> set to true.</p>
		 * Post #X-Amz-Target=Firehose_20150804.DescribeDeliveryStream
		 * @return {DescribeDeliveryStreamOutput} Success
		 */
		DescribeDeliveryStream(requestBody: DescribeDeliveryStreamInput): Observable<DescribeDeliveryStreamOutput> {
			return this.http.post<DescribeDeliveryStreamOutput>(this.baseUri + '#X-Amz-Target=Firehose_20150804.DescribeDeliveryStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists your delivery streams in alphabetical order of their names.</p> <p>The number of delivery streams might be too large to return using a single call to <code>ListDeliveryStreams</code>. You can limit the number of delivery streams returned, using the <code>Limit</code> parameter. To determine whether there are more delivery streams to list, check the value of <code>HasMoreDeliveryStreams</code> in the output. If there are more delivery streams to list, you can request them by calling this operation again and setting the <code>ExclusiveStartDeliveryStreamName</code> parameter to the name of the last delivery stream returned in the last call.</p>
		 * Post #X-Amz-Target=Firehose_20150804.ListDeliveryStreams
		 * @return {ListDeliveryStreamsOutput} Success
		 */
		ListDeliveryStreams(requestBody: ListDeliveryStreamsInput): Observable<ListDeliveryStreamsOutput> {
			return this.http.post<ListDeliveryStreamsOutput>(this.baseUri + '#X-Amz-Target=Firehose_20150804.ListDeliveryStreams', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags for the specified delivery stream. This operation has a limit of five transactions per second per account.
		 * Post #X-Amz-Target=Firehose_20150804.ListTagsForDeliveryStream
		 * @return {ListTagsForDeliveryStreamOutput} Success
		 */
		ListTagsForDeliveryStream(requestBody: ListTagsForDeliveryStreamInput): Observable<ListTagsForDeliveryStreamOutput> {
			return this.http.post<ListTagsForDeliveryStreamOutput>(this.baseUri + '#X-Amz-Target=Firehose_20150804.ListTagsForDeliveryStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Writes a single data record into an Amazon Kinesis Data Firehose delivery stream. To write multiple data records into a delivery stream, use <a>PutRecordBatch</a>. Applications using these operations are referred to as producers.</p> <p>By default, each delivery stream can take in up to 2,000 transactions per second, 5,000 records per second, or 5 MB per second. If you use <a>PutRecord</a> and <a>PutRecordBatch</a>, the limits are an aggregate across these two operations for each delivery stream. For more information about limits and how to request an increase, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Limits</a>. </p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KB in size, and any kind of data. For example, it can be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <code>PutRecord</code> operation returns a <code>RecordId</code>, which is a unique string assigned to each record. Producer applications can use this ID for purposes such as auditability and investigation.</p> <p>If the <code>PutRecord</code> operation throws a <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream. </p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it tries to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>
		 * Post #X-Amz-Target=Firehose_20150804.PutRecord
		 * @return {PutRecordOutput} Success
		 */
		PutRecord(requestBody: PutRecordInput): Observable<PutRecordOutput> {
			return this.http.post<PutRecordOutput>(this.baseUri + '#X-Amz-Target=Firehose_20150804.PutRecord', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Writes multiple data records into a delivery stream in a single call, which can achieve higher throughput per producer than when writing single records. To write single data records into a delivery stream, use <a>PutRecord</a>. Applications using these operations are referred to as producers.</p> <p>By default, each delivery stream can take in up to 2,000 transactions per second, 5,000 records per second, or 5 MB per second. If you use <a>PutRecord</a> and <a>PutRecordBatch</a>, the limits are an aggregate across these two operations for each delivery stream. For more information about limits, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Limits</a>.</p> <p>Each <a>PutRecordBatch</a> request supports up to 500 records. Each record in the request can be as large as 1,000 KB (before 64-bit encoding), up to a limit of 4 MB for the entire request. These limits cannot be changed.</p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KB in size, and any kind of data. For example, it could be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <a>PutRecordBatch</a> response includes a count of failed records, <code>FailedPutCount</code>, and an array of responses, <code>RequestResponses</code>. Even if the <a>PutRecordBatch</a> call succeeds, the value of <code>FailedPutCount</code> may be greater than 0, indicating that there are records for which the operation didn't succeed. Each entry in the <code>RequestResponses</code> array provides additional information about the processed record. It directly correlates with a record in the request array using the same ordering, from the top to the bottom. The response array always includes the same number of records as the request array. <code>RequestResponses</code> includes both successfully and unsuccessfully processed records. Kinesis Data Firehose tries to process all records in each <a>PutRecordBatch</a> request. A single record failure does not stop the processing of subsequent records. </p> <p>A successfully processed record includes a <code>RecordId</code> value, which is unique for the record. An unsuccessfully processed record includes <code>ErrorCode</code> and <code>ErrorMessage</code> values. <code>ErrorCode</code> reflects the type of error, and is one of the following values: <code>ServiceUnavailableException</code> or <code>InternalFailure</code>. <code>ErrorMessage</code> provides more detailed information about the error.</p> <p>If there is an internal server error or a timeout, the write might have completed or it might have failed. If <code>FailedPutCount</code> is greater than 0, retry the request, resending only those records that might have failed processing. This minimizes the possible duplicate records and also reduces the total bytes sent (and corresponding charges). We recommend that you handle any duplicates at the destination.</p> <p>If <a>PutRecordBatch</a> throws <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream.</p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it attempts to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>
		 * Post #X-Amz-Target=Firehose_20150804.PutRecordBatch
		 * @return {PutRecordBatchOutput} Success
		 */
		PutRecordBatch(requestBody: PutRecordBatchInput): Observable<PutRecordBatchOutput> {
			return this.http.post<PutRecordBatchOutput>(this.baseUri + '#X-Amz-Target=Firehose_20150804.PutRecordBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Enables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>ENABLING</code>, and then to <code>ENABLED</code>. The encryption status of a delivery stream is the <code>Status</code> property in <a>DeliveryStreamEncryptionConfiguration</a>. If the operation fails, the encryption status changes to <code>ENABLING_FAILED</code>. You can continue to read and write data to your delivery stream while the encryption status is <code>ENABLING</code>, but the data is not encrypted. It can take up to 5 seconds after the encryption status changes to <code>ENABLED</code> before all records written to the delivery stream are encrypted. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption status of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>Even if encryption is currently enabled for a delivery stream, you can still invoke this operation on it to change the ARN of the CMK or both its type and ARN. If you invoke this method to change the CMK, and the old CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose schedules the grant it had on the old CMK for retirement. If the new CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose creates a grant that enables it to use the new CMK to encrypt and decrypt data and to manage the grant.</p> <p>If a delivery stream already has encryption enabled and then you invoke this operation to change the ARN of the CMK or both its type and ARN and you get <code>ENABLING_FAILED</code>, this only means that the attempt to change the CMK failed. In this case, encryption remains enabled with the old CMK.</p> <p>If the encryption status of your delivery stream is <code>ENABLING_FAILED</code>, you can invoke this operation again with a valid CMK. The CMK must be enabled and the key policy mustn't explicitly deny the permission for Kinesis Data Firehose to invoke KMS encrypt and decrypt operations.</p> <p>You can enable SSE for a delivery stream only if it's a delivery stream that uses <code>DirectPut</code> as its source. </p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>
		 * Post #X-Amz-Target=Firehose_20150804.StartDeliveryStreamEncryption
		 * @return {StartDeliveryStreamEncryptionOutput} Success
		 */
		StartDeliveryStreamEncryption(requestBody: StartDeliveryStreamEncryptionInput): Observable<StartDeliveryStreamEncryptionOutput> {
			return this.http.post<StartDeliveryStreamEncryptionOutput>(this.baseUri + '#X-Amz-Target=Firehose_20150804.StartDeliveryStreamEncryption', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>DISABLING</code>, and then to <code>DISABLED</code>. You can continue to read and write data to your stream while its status is <code>DISABLING</code>. It can take up to 5 seconds after the encryption status changes to <code>DISABLED</code> before all records written to the delivery stream are no longer subject to encryption. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption state of a delivery stream, use <a>DescribeDeliveryStream</a>. </p> <p>If SSE is enabled using a customer managed CMK and then you invoke <code>StopDeliveryStreamEncryption</code>, Kinesis Data Firehose schedules the related KMS grant for retirement and then retires it after it ensures that it is finished delivering records to the destination.</p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>
		 * Post #X-Amz-Target=Firehose_20150804.StopDeliveryStreamEncryption
		 * @return {StopDeliveryStreamEncryptionOutput} Success
		 */
		StopDeliveryStreamEncryption(requestBody: StopDeliveryStreamEncryptionInput): Observable<StopDeliveryStreamEncryptionOutput> {
			return this.http.post<StopDeliveryStreamEncryptionOutput>(this.baseUri + '#X-Amz-Target=Firehose_20150804.StopDeliveryStreamEncryption', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds or updates tags for the specified delivery stream. A tag is a key-value pair that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Tags are metadata. For example, you can add friendly names and descriptions or other types of information that can help you distinguish the delivery stream. For more information about tags, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p> <p>Each delivery stream can have up to 50 tags. </p> <p>This operation has a limit of five transactions per second per account. </p>
		 * Post #X-Amz-Target=Firehose_20150804.TagDeliveryStream
		 * @return {TagDeliveryStreamOutput} Success
		 */
		TagDeliveryStream(requestBody: TagDeliveryStreamInput): Observable<TagDeliveryStreamOutput> {
			return this.http.post<TagDeliveryStreamOutput>(this.baseUri + '#X-Amz-Target=Firehose_20150804.TagDeliveryStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes tags from the specified delivery stream. Removed tags are deleted, and you can't recover them after this operation successfully completes.</p> <p>If you specify a tag that doesn't exist, the operation ignores it.</p> <p>This operation has a limit of five transactions per second per account. </p>
		 * Post #X-Amz-Target=Firehose_20150804.UntagDeliveryStream
		 * @return {UntagDeliveryStreamOutput} Success
		 */
		UntagDeliveryStream(requestBody: UntagDeliveryStreamInput): Observable<UntagDeliveryStreamOutput> {
			return this.http.post<UntagDeliveryStreamOutput>(this.baseUri + '#X-Amz-Target=Firehose_20150804.UntagDeliveryStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the specified destination of the specified delivery stream.</p> <p>Use this operation to change the destination type (for example, to replace the Amazon S3 destination with Amazon Redshift) or change the parameters associated with a destination (for example, to change the bucket name of the Amazon S3 destination). The update might not occur immediately. The target delivery stream remains active while the configurations are updated, so data writes to the delivery stream can continue during this process. The updated configurations are usually effective within a few minutes.</p> <p>Switching between Amazon ES and other services is not supported. For an Amazon ES destination, you can only update to another Amazon ES destination.</p> <p>If the destination type is the same, Kinesis Data Firehose merges the configuration parameters specified with the destination configuration that already exists on the delivery stream. If any of the parameters are not specified in the call, the existing values are retained. For example, in the Amazon S3 destination, if <a>EncryptionConfiguration</a> is not specified, then the existing <code>EncryptionConfiguration</code> is maintained on the destination.</p> <p>If the destination type is not the same, for example, changing the destination from Amazon S3 to Amazon Redshift, Kinesis Data Firehose does not merge any parameters. In this case, all parameters must be specified.</p> <p>Kinesis Data Firehose uses <code>CurrentDeliveryStreamVersionId</code> to avoid race conditions and conflicting merges. This is a required field, and the service updates the configuration only if the existing configuration has a version ID that matches. After the update is applied successfully, the version ID is updated, and can be retrieved using <a>DescribeDeliveryStream</a>. Use the new version ID to set <code>CurrentDeliveryStreamVersionId</code> in the next call.</p>
		 * Post #X-Amz-Target=Firehose_20150804.UpdateDestination
		 * @return {UpdateDestinationOutput} Success
		 */
		UpdateDestination(requestBody: UpdateDestinationInput): Observable<UpdateDestinationOutput> {
			return this.http.post<UpdateDestinationOutput>(this.baseUri + '#X-Amz-Target=Firehose_20150804.UpdateDestination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateDeliveryStreamX_Amz_Target { 'Firehose_20150804.CreateDeliveryStream' = 0 }

	export enum DeleteDeliveryStreamX_Amz_Target { 'Firehose_20150804.DeleteDeliveryStream' = 0 }

	export enum DescribeDeliveryStreamX_Amz_Target { 'Firehose_20150804.DescribeDeliveryStream' = 0 }

	export enum ListDeliveryStreamsX_Amz_Target { 'Firehose_20150804.ListDeliveryStreams' = 0 }

	export enum ListTagsForDeliveryStreamX_Amz_Target { 'Firehose_20150804.ListTagsForDeliveryStream' = 0 }

	export enum PutRecordX_Amz_Target { 'Firehose_20150804.PutRecord' = 0 }

	export enum PutRecordBatchX_Amz_Target { 'Firehose_20150804.PutRecordBatch' = 0 }

	export enum StartDeliveryStreamEncryptionX_Amz_Target { 'Firehose_20150804.StartDeliveryStreamEncryption' = 0 }

	export enum StopDeliveryStreamEncryptionX_Amz_Target { 'Firehose_20150804.StopDeliveryStreamEncryption' = 0 }

	export enum TagDeliveryStreamX_Amz_Target { 'Firehose_20150804.TagDeliveryStream' = 0 }

	export enum UntagDeliveryStreamX_Amz_Target { 'Firehose_20150804.UntagDeliveryStream' = 0 }

	export enum UpdateDestinationX_Amz_Target { 'Firehose_20150804.UpdateDestination' = 0 }

}

