import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateDeliveryStreamOutput {
		DeliveryStreamARN?: string;
	}
	export interface CreateDeliveryStreamOutputFormProperties {
		DeliveryStreamARN: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeliveryStreamOutputFormGroup() {
		return new FormGroup<CreateDeliveryStreamOutputFormProperties>({
			DeliveryStreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDeliveryStreamInput {

		/** Required */
		DeliveryStreamName: string;
		DeliveryStreamType?: DeliveryStreamType;
		KinesisStreamSourceConfiguration?: KinesisStreamSourceConfiguration;
		DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;
		S3DestinationConfiguration?: S3DestinationConfiguration;
		ExtendedS3DestinationConfiguration?: ExtendedS3DestinationConfiguration;
		RedshiftDestinationConfiguration?: RedshiftDestinationConfiguration;
		ElasticsearchDestinationConfiguration?: ElasticsearchDestinationConfiguration;
		AmazonopensearchserviceDestinationConfiguration?: AmazonopensearchserviceDestinationConfiguration;
		SplunkDestinationConfiguration?: SplunkDestinationConfiguration;
		HttpEndpointDestinationConfiguration?: HttpEndpointDestinationConfiguration;
		Tags?: Array<Tag>;
		AmazonOpenSearchServerlessDestinationConfiguration?: AmazonOpenSearchServerlessDestinationConfiguration;
	}
	export interface CreateDeliveryStreamInputFormProperties {

		/** Required */
		DeliveryStreamName: FormControl<string | null | undefined>,
		DeliveryStreamType: FormControl<DeliveryStreamType | null | undefined>,
	}
	export function CreateCreateDeliveryStreamInputFormGroup() {
		return new FormGroup<CreateDeliveryStreamInputFormProperties>({
			DeliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeliveryStreamType: new FormControl<DeliveryStreamType | null | undefined>(undefined),
		});

	}

	export enum DeliveryStreamType { DirectPut = 0, KinesisStreamAsSource = 1 }


	/** The stream and role Amazon Resource Names (ARNs) for a Kinesis data stream used as the source for a delivery stream. */
	export interface KinesisStreamSourceConfiguration {

		/** Required */
		KinesisStreamARN: string;

		/** Required */
		RoleARN: string;
	}

	/** The stream and role Amazon Resource Names (ARNs) for a Kinesis data stream used as the source for a delivery stream. */
	export interface KinesisStreamSourceConfigurationFormProperties {

		/** Required */
		KinesisStreamARN: FormControl<string | null | undefined>,

		/** Required */
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisStreamSourceConfigurationFormGroup() {
		return new FormGroup<KinesisStreamSourceConfigurationFormProperties>({
			KinesisStreamARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE).  */
	export interface DeliveryStreamEncryptionConfigurationInput {
		KeyARN?: string;

		/** Required */
		KeyType: KeyType;
	}

	/** Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE).  */
	export interface DeliveryStreamEncryptionConfigurationInputFormProperties {
		KeyARN: FormControl<string | null | undefined>,

		/** Required */
		KeyType: FormControl<KeyType | null | undefined>,
	}
	export function CreateDeliveryStreamEncryptionConfigurationInputFormGroup() {
		return new FormGroup<DeliveryStreamEncryptionConfigurationInputFormProperties>({
			KeyARN: new FormControl<string | null | undefined>(undefined),
			KeyType: new FormControl<KeyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum KeyType { AWS_OWNED_CMK = 0, CUSTOMER_MANAGED_CMK = 1 }


	/** Describes the configuration of a destination in Amazon S3. */
	export interface S3DestinationConfiguration {

		/** Required */
		RoleARN: string;

		/** Required */
		BucketARN: string;
		Prefix?: string;
		ErrorOutputPrefix?: string;
		BufferingHints?: BufferingHints;
		CompressionFormat?: CompressionFormat;
		EncryptionConfiguration?: EncryptionConfiguration;
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
	}

	/** Describes the configuration of a destination in Amazon S3. */
	export interface S3DestinationConfigurationFormProperties {

		/** Required */
		RoleARN: FormControl<string | null | undefined>,

		/** Required */
		BucketARN: FormControl<string | null | undefined>,
		Prefix: FormControl<string | null | undefined>,
		ErrorOutputPrefix: FormControl<string | null | undefined>,
		CompressionFormat: FormControl<CompressionFormat | null | undefined>,
	}
	export function CreateS3DestinationConfigurationFormGroup() {
		return new FormGroup<S3DestinationConfigurationFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BucketARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Prefix: new FormControl<string | null | undefined>(undefined),
			ErrorOutputPrefix: new FormControl<string | null | undefined>(undefined),
			CompressionFormat: new FormControl<CompressionFormat | null | undefined>(undefined),
		});

	}


	/** Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Kinesis Data Firehose might choose to use different values when it is optimal. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other. */
	export interface BufferingHints {
		SizeInMBs?: number | null;
		IntervalInSeconds?: number | null;
	}

	/** Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Kinesis Data Firehose might choose to use different values when it is optimal. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other. */
	export interface BufferingHintsFormProperties {
		SizeInMBs: FormControl<number | null | undefined>,
		IntervalInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateBufferingHintsFormGroup() {
		return new FormGroup<BufferingHintsFormProperties>({
			SizeInMBs: new FormControl<number | null | undefined>(undefined),
			IntervalInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CompressionFormat { UNCOMPRESSED = 0, GZIP = 1, ZIP = 2, Snappy = 3, HADOOP_SNAPPY = 4 }


	/** Describes the encryption for a destination in Amazon S3. */
	export interface EncryptionConfiguration {
		NoEncryptionConfig?: NoEncryptionConfig;
		KMSEncryptionConfig?: KMSEncryptionConfig;
	}

	/** Describes the encryption for a destination in Amazon S3. */
	export interface EncryptionConfigurationFormProperties {
		NoEncryptionConfig: FormControl<NoEncryptionConfig | null | undefined>,
	}
	export function CreateEncryptionConfigurationFormGroup() {
		return new FormGroup<EncryptionConfigurationFormProperties>({
			NoEncryptionConfig: new FormControl<NoEncryptionConfig | null | undefined>(undefined),
		});

	}

	export enum NoEncryptionConfig { NoEncryption = 0 }


	/** Describes an encryption key for a destination in Amazon S3. */
	export interface KMSEncryptionConfig {

		/** Required */
		AWSKMSKeyARN: string;
	}

	/** Describes an encryption key for a destination in Amazon S3. */
	export interface KMSEncryptionConfigFormProperties {

		/** Required */
		AWSKMSKeyARN: FormControl<string | null | undefined>,
	}
	export function CreateKMSEncryptionConfigFormGroup() {
		return new FormGroup<KMSEncryptionConfigFormProperties>({
			AWSKMSKeyARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the Amazon CloudWatch logging options for your delivery stream. */
	export interface CloudWatchLoggingOptions {
		Enabled?: boolean | null;
		LogGroupName?: string;
		LogStreamName?: string;
	}

	/** Describes the Amazon CloudWatch logging options for your delivery stream. */
	export interface CloudWatchLoggingOptionsFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		LogGroupName: FormControl<string | null | undefined>,
		LogStreamName: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLoggingOptionsFormGroup() {
		return new FormGroup<CloudWatchLoggingOptionsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			LogGroupName: new FormControl<string | null | undefined>(undefined),
			LogStreamName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the configuration of a destination in Amazon S3. */
	export interface ExtendedS3DestinationConfiguration {

		/** Required */
		RoleARN: string;

		/** Required */
		BucketARN: string;
		Prefix?: string;
		ErrorOutputPrefix?: string;
		BufferingHints?: BufferingHints;
		CompressionFormat?: CompressionFormat;
		EncryptionConfiguration?: EncryptionConfiguration;
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
		ProcessingConfiguration?: ProcessingConfiguration;
		S3BackupMode?: S3BackupMode;
		S3BackupConfiguration?: S3DestinationConfiguration;
		DataFormatConversionConfiguration?: DataFormatConversionConfiguration;
		DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration;
	}

	/** Describes the configuration of a destination in Amazon S3. */
	export interface ExtendedS3DestinationConfigurationFormProperties {

		/** Required */
		RoleARN: FormControl<string | null | undefined>,

		/** Required */
		BucketARN: FormControl<string | null | undefined>,
		Prefix: FormControl<string | null | undefined>,
		ErrorOutputPrefix: FormControl<string | null | undefined>,
		CompressionFormat: FormControl<CompressionFormat | null | undefined>,
		S3BackupMode: FormControl<S3BackupMode | null | undefined>,
	}
	export function CreateExtendedS3DestinationConfigurationFormGroup() {
		return new FormGroup<ExtendedS3DestinationConfigurationFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BucketARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Prefix: new FormControl<string | null | undefined>(undefined),
			ErrorOutputPrefix: new FormControl<string | null | undefined>(undefined),
			CompressionFormat: new FormControl<CompressionFormat | null | undefined>(undefined),
			S3BackupMode: new FormControl<S3BackupMode | null | undefined>(undefined),
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

	export enum ProcessorType { RecordDeAggregation = 0, Lambda = 1, MetadataExtraction = 2, AppendDelimiterToRecord = 3 }


	/** Describes the processor parameter.  */
	export interface ProcessorParameter {

		/** Required */
		ParameterName: ProcessorParameterName;

		/** Required */
		ParameterValue: string;
	}

	/** Describes the processor parameter.  */
	export interface ProcessorParameterFormProperties {

		/** Required */
		ParameterName: FormControl<ProcessorParameterName | null | undefined>,

		/** Required */
		ParameterValue: FormControl<string | null | undefined>,
	}
	export function CreateProcessorParameterFormGroup() {
		return new FormGroup<ProcessorParameterFormProperties>({
			ParameterName: new FormControl<ProcessorParameterName | null | undefined>(undefined, [Validators.required]),
			ParameterValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ProcessorParameterName { LambdaArn = 0, NumberOfRetries = 1, MetadataExtractionQuery = 2, JsonParsingEngine = 3, RoleArn = 4, BufferSizeInMBs = 5, BufferIntervalInSeconds = 6, SubRecordType = 7, Delimiter = 8 }

	export enum S3BackupMode { Disabled = 0, Enabled = 1 }


	/** Specifies that you want Kinesis Data Firehose to convert data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. Kinesis Data Firehose uses the serializer and deserializer that you specify, in addition to the column information from the Amazon Web Services Glue table, to deserialize your input data from JSON and then serialize it to the Parquet or ORC format. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html">Kinesis Data Firehose Record Format Conversion</a>. */
	export interface DataFormatConversionConfiguration {
		SchemaConfiguration?: SchemaConfiguration;
		InputFormatConfiguration?: InputFormatConfiguration;
		OutputFormatConfiguration?: OutputFormatConfiguration;
		Enabled?: boolean | null;
	}

	/** Specifies that you want Kinesis Data Firehose to convert data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. Kinesis Data Firehose uses the serializer and deserializer that you specify, in addition to the column information from the Amazon Web Services Glue table, to deserialize your input data from JSON and then serialize it to the Parquet or ORC format. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html">Kinesis Data Firehose Record Format Conversion</a>. */
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
		RoleARN?: string;
		CatalogId?: string;
		DatabaseName?: string;
		TableName?: string;
		Region?: string;
		VersionId?: string;
	}

	/** Specifies the schema to which you want Kinesis Data Firehose to configure your data before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set to true. */
	export interface SchemaConfigurationFormProperties {
		RoleARN: FormControl<string | null | undefined>,
		CatalogId: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		TableName: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateSchemaConfigurationFormGroup() {
		return new FormGroup<SchemaConfigurationFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined),
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			TableName: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the deserializer you want to use to convert the format of the input data. This parameter is required if <code>Enabled</code> is set to true. */
	export interface InputFormatConfiguration {
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
		OpenXJsonSerDe?: OpenXJsonSerDe;
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
		ParquetSerDe?: ParquetSerDe;
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
		BlockSizeBytes?: number | null;
		PageSizeBytes?: number | null;
		Compression?: ParquetCompression;
		EnableDictionaryCompression?: boolean | null;
		MaxPaddingBytes?: number | null;
		WriterVersion?: ParquetWriterVersion;
	}

	/** A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see <a href="https://parquet.apache.org/documentation/latest/">Apache Parquet</a>. */
	export interface ParquetSerDeFormProperties {
		BlockSizeBytes: FormControl<number | null | undefined>,
		PageSizeBytes: FormControl<number | null | undefined>,
		Compression: FormControl<ParquetCompression | null | undefined>,
		EnableDictionaryCompression: FormControl<boolean | null | undefined>,
		MaxPaddingBytes: FormControl<number | null | undefined>,
		WriterVersion: FormControl<ParquetWriterVersion | null | undefined>,
	}
	export function CreateParquetSerDeFormGroup() {
		return new FormGroup<ParquetSerDeFormProperties>({
			BlockSizeBytes: new FormControl<number | null | undefined>(undefined),
			PageSizeBytes: new FormControl<number | null | undefined>(undefined),
			Compression: new FormControl<ParquetCompression | null | undefined>(undefined),
			EnableDictionaryCompression: new FormControl<boolean | null | undefined>(undefined),
			MaxPaddingBytes: new FormControl<number | null | undefined>(undefined),
			WriterVersion: new FormControl<ParquetWriterVersion | null | undefined>(undefined),
		});

	}

	export enum ParquetCompression { UNCOMPRESSED = 0, GZIP = 1, SNAPPY = 2 }

	export enum ParquetWriterVersion { V1 = 0, V2 = 1 }


	/** A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see <a href="https://orc.apache.org/docs/">Apache ORC</a>. */
	export interface OrcSerDe {
		StripeSizeBytes?: number | null;
		BlockSizeBytes?: number | null;
		RowIndexStride?: number | null;
		EnablePadding?: boolean | null;
		PaddingTolerance?: number | null;
		Compression?: OrcCompression;
		BloomFilterColumns?: Array<string>;
		BloomFilterFalsePositiveProbability?: number | null;
		DictionaryKeyThreshold?: number | null;
		FormatVersion?: OrcFormatVersion;
	}

	/** A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see <a href="https://orc.apache.org/docs/">Apache ORC</a>. */
	export interface OrcSerDeFormProperties {
		StripeSizeBytes: FormControl<number | null | undefined>,
		BlockSizeBytes: FormControl<number | null | undefined>,
		RowIndexStride: FormControl<number | null | undefined>,
		EnablePadding: FormControl<boolean | null | undefined>,
		PaddingTolerance: FormControl<number | null | undefined>,
		Compression: FormControl<OrcCompression | null | undefined>,
		BloomFilterFalsePositiveProbability: FormControl<number | null | undefined>,
		DictionaryKeyThreshold: FormControl<number | null | undefined>,
		FormatVersion: FormControl<OrcFormatVersion | null | undefined>,
	}
	export function CreateOrcSerDeFormGroup() {
		return new FormGroup<OrcSerDeFormProperties>({
			StripeSizeBytes: new FormControl<number | null | undefined>(undefined),
			BlockSizeBytes: new FormControl<number | null | undefined>(undefined),
			RowIndexStride: new FormControl<number | null | undefined>(undefined),
			EnablePadding: new FormControl<boolean | null | undefined>(undefined),
			PaddingTolerance: new FormControl<number | null | undefined>(undefined),
			Compression: new FormControl<OrcCompression | null | undefined>(undefined),
			BloomFilterFalsePositiveProbability: new FormControl<number | null | undefined>(undefined),
			DictionaryKeyThreshold: new FormControl<number | null | undefined>(undefined),
			FormatVersion: new FormControl<OrcFormatVersion | null | undefined>(undefined),
		});

	}

	export enum OrcCompression { NONE = 0, ZLIB = 1, SNAPPY = 2 }

	export enum OrcFormatVersion { V0_11 = 0, V0_12 = 1 }


	/** The configuration of the dynamic partitioning mechanism that creates smaller data sets from the streaming data by partitioning it based on partition keys. Currently, dynamic partitioning is only supported for Amazon S3 destinations.  */
	export interface DynamicPartitioningConfiguration {
		RetryOptions?: RetryOptions;
		Enabled?: boolean | null;
	}

	/** The configuration of the dynamic partitioning mechanism that creates smaller data sets from the streaming data by partitioning it based on partition keys. Currently, dynamic partitioning is only supported for Amazon S3 destinations.  */
	export interface DynamicPartitioningConfigurationFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateDynamicPartitioningConfigurationFormGroup() {
		return new FormGroup<DynamicPartitioningConfigurationFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  The retry behavior in case Kinesis Data Firehose is unable to deliver data to an Amazon S3 prefix. */
	export interface RetryOptions {
		DurationInSeconds?: number | null;
	}

	/**  The retry behavior in case Kinesis Data Firehose is unable to deliver data to an Amazon S3 prefix. */
	export interface RetryOptionsFormProperties {
		DurationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateRetryOptionsFormGroup() {
		return new FormGroup<RetryOptionsFormProperties>({
			DurationInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes the configuration of a destination in Amazon Redshift. */
	export interface RedshiftDestinationConfiguration {

		/** Required */
		RoleARN: string;

		/** Required */
		ClusterJDBCURL: string;

		/** Required */
		CopyCommand: CopyCommand;

		/** Required */
		Username: string;

		/** Required */
		Password: string;
		RetryOptions?: RedshiftRetryOptions;

		/** Required */
		S3Configuration: S3DestinationConfiguration;
		ProcessingConfiguration?: ProcessingConfiguration;
		S3BackupMode?: S3BackupMode;
		S3BackupConfiguration?: S3DestinationConfiguration;
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
	}

	/** Describes the configuration of a destination in Amazon Redshift. */
	export interface RedshiftDestinationConfigurationFormProperties {

		/** Required */
		RoleARN: FormControl<string | null | undefined>,

		/** Required */
		ClusterJDBCURL: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,

		/** Required */
		Password: FormControl<string | null | undefined>,
		S3BackupMode: FormControl<S3BackupMode | null | undefined>,
	}
	export function CreateRedshiftDestinationConfigurationFormGroup() {
		return new FormGroup<RedshiftDestinationConfigurationFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClusterJDBCURL: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3BackupMode: new FormControl<S3BackupMode | null | undefined>(undefined),
		});

	}


	/** Describes a <code>COPY</code> command for Amazon Redshift. */
	export interface CopyCommand {

		/** Required */
		DataTableName: string;
		DataTableColumns?: string;
		CopyOptions?: string;
	}

	/** Describes a <code>COPY</code> command for Amazon Redshift. */
	export interface CopyCommandFormProperties {

		/** Required */
		DataTableName: FormControl<string | null | undefined>,
		DataTableColumns: FormControl<string | null | undefined>,
		CopyOptions: FormControl<string | null | undefined>,
	}
	export function CreateCopyCommandFormGroup() {
		return new FormGroup<CopyCommandFormProperties>({
			DataTableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataTableColumns: new FormControl<string | null | undefined>(undefined),
			CopyOptions: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift. */
	export interface RedshiftRetryOptions {
		DurationInSeconds?: number | null;
	}

	/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift. */
	export interface RedshiftRetryOptionsFormProperties {
		DurationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateRedshiftRetryOptionsFormGroup() {
		return new FormGroup<RedshiftRetryOptionsFormProperties>({
			DurationInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes the configuration of a destination in Amazon ES. */
	export interface ElasticsearchDestinationConfiguration {

		/** Required */
		RoleARN: string;
		DomainARN?: string;
		ClusterEndpoint?: string;

		/** Required */
		IndexName: string;
		TypeName?: string;
		IndexRotationPeriod?: ElasticsearchIndexRotationPeriod;
		BufferingHints?: ElasticsearchBufferingHints;
		RetryOptions?: ElasticsearchRetryOptions;
		S3BackupMode?: ElasticsearchS3BackupMode;

		/** Required */
		S3Configuration: S3DestinationConfiguration;
		ProcessingConfiguration?: ProcessingConfiguration;
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
		VpcConfiguration?: VpcConfiguration;
	}

	/** Describes the configuration of a destination in Amazon ES. */
	export interface ElasticsearchDestinationConfigurationFormProperties {

		/** Required */
		RoleARN: FormControl<string | null | undefined>,
		DomainARN: FormControl<string | null | undefined>,
		ClusterEndpoint: FormControl<string | null | undefined>,

		/** Required */
		IndexName: FormControl<string | null | undefined>,
		TypeName: FormControl<string | null | undefined>,
		IndexRotationPeriod: FormControl<ElasticsearchIndexRotationPeriod | null | undefined>,
		S3BackupMode: FormControl<ElasticsearchS3BackupMode | null | undefined>,
	}
	export function CreateElasticsearchDestinationConfigurationFormGroup() {
		return new FormGroup<ElasticsearchDestinationConfigurationFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainARN: new FormControl<string | null | undefined>(undefined),
			ClusterEndpoint: new FormControl<string | null | undefined>(undefined),
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TypeName: new FormControl<string | null | undefined>(undefined),
			IndexRotationPeriod: new FormControl<ElasticsearchIndexRotationPeriod | null | undefined>(undefined),
			S3BackupMode: new FormControl<ElasticsearchS3BackupMode | null | undefined>(undefined),
		});

	}

	export enum ElasticsearchIndexRotationPeriod { NoRotation = 0, OneHour = 1, OneDay = 2, OneWeek = 3, OneMonth = 4 }


	/** Describes the buffering to perform before delivering data to the Amazon ES destination. */
	export interface ElasticsearchBufferingHints {
		IntervalInSeconds?: number | null;
		SizeInMBs?: number | null;
	}

	/** Describes the buffering to perform before delivering data to the Amazon ES destination. */
	export interface ElasticsearchBufferingHintsFormProperties {
		IntervalInSeconds: FormControl<number | null | undefined>,
		SizeInMBs: FormControl<number | null | undefined>,
	}
	export function CreateElasticsearchBufferingHintsFormGroup() {
		return new FormGroup<ElasticsearchBufferingHintsFormProperties>({
			IntervalInSeconds: new FormControl<number | null | undefined>(undefined),
			SizeInMBs: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon ES. */
	export interface ElasticsearchRetryOptions {
		DurationInSeconds?: number | null;
	}

	/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon ES. */
	export interface ElasticsearchRetryOptionsFormProperties {
		DurationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateElasticsearchRetryOptionsFormGroup() {
		return new FormGroup<ElasticsearchRetryOptionsFormProperties>({
			DurationInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ElasticsearchS3BackupMode { FailedDocumentsOnly = 0, AllDocuments = 1 }


	/** The details of the VPC of the Amazon ES destination. */
	export interface VpcConfiguration {

		/** Required */
		SubnetIds: Array<string>;

		/** Required */
		RoleARN: string;

		/** Required */
		SecurityGroupIds: Array<string>;
	}

	/** The details of the VPC of the Amazon ES destination. */
	export interface VpcConfigurationFormProperties {

		/** Required */
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateVpcConfigurationFormGroup() {
		return new FormGroup<VpcConfigurationFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the configuration of a destination in Amazon OpenSearch Service */
	export interface AmazonopensearchserviceDestinationConfiguration {

		/** Required */
		RoleARN: string;
		DomainARN?: string;
		ClusterEndpoint?: string;

		/** Required */
		IndexName: string;
		TypeName?: string;
		IndexRotationPeriod?: ElasticsearchIndexRotationPeriod;
		BufferingHints?: AmazonopensearchserviceBufferingHints;
		RetryOptions?: AmazonopensearchserviceRetryOptions;
		S3BackupMode?: ElasticsearchS3BackupMode;

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

	/** Describes the configuration of a destination in Amazon OpenSearch Service */
	export interface AmazonopensearchserviceDestinationConfigurationFormProperties {

		/** Required */
		RoleARN: FormControl<string | null | undefined>,
		DomainARN: FormControl<string | null | undefined>,
		ClusterEndpoint: FormControl<string | null | undefined>,

		/** Required */
		IndexName: FormControl<string | null | undefined>,
		TypeName: FormControl<string | null | undefined>,
		IndexRotationPeriod: FormControl<ElasticsearchIndexRotationPeriod | null | undefined>,
		S3BackupMode: FormControl<ElasticsearchS3BackupMode | null | undefined>,
	}
	export function CreateAmazonopensearchserviceDestinationConfigurationFormGroup() {
		return new FormGroup<AmazonopensearchserviceDestinationConfigurationFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainARN: new FormControl<string | null | undefined>(undefined),
			ClusterEndpoint: new FormControl<string | null | undefined>(undefined),
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TypeName: new FormControl<string | null | undefined>(undefined),
			IndexRotationPeriod: new FormControl<ElasticsearchIndexRotationPeriod | null | undefined>(undefined),
			S3BackupMode: new FormControl<ElasticsearchS3BackupMode | null | undefined>(undefined),
		});

	}


	/** Describes the buffering to perform before delivering data to the Amazon OpenSearch Service destination.  */
	export interface AmazonopensearchserviceBufferingHints {
		IntervalInSeconds?: number | null;
		SizeInMBs?: number | null;
	}

	/** Describes the buffering to perform before delivering data to the Amazon OpenSearch Service destination.  */
	export interface AmazonopensearchserviceBufferingHintsFormProperties {
		IntervalInSeconds: FormControl<number | null | undefined>,
		SizeInMBs: FormControl<number | null | undefined>,
	}
	export function CreateAmazonopensearchserviceBufferingHintsFormGroup() {
		return new FormGroup<AmazonopensearchserviceBufferingHintsFormProperties>({
			IntervalInSeconds: new FormControl<number | null | undefined>(undefined),
			SizeInMBs: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon OpenSearch Service.  */
	export interface AmazonopensearchserviceRetryOptions {
		DurationInSeconds?: number | null;
	}

	/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon OpenSearch Service.  */
	export interface AmazonopensearchserviceRetryOptionsFormProperties {
		DurationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateAmazonopensearchserviceRetryOptionsFormGroup() {
		return new FormGroup<AmazonopensearchserviceRetryOptionsFormProperties>({
			DurationInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes the configuration of a destination in Splunk. */
	export interface SplunkDestinationConfiguration {

		/** Required */
		HECEndpoint: string;

		/** Required */
		HECEndpointType: HECEndpointType;

		/** Required */
		HECToken: string;
		HECAcknowledgmentTimeoutInSeconds?: number | null;
		RetryOptions?: SplunkRetryOptions;
		S3BackupMode?: SplunkS3BackupMode;

		/** Required */
		S3Configuration: S3DestinationConfiguration;
		ProcessingConfiguration?: ProcessingConfiguration;
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
	}

	/** Describes the configuration of a destination in Splunk. */
	export interface SplunkDestinationConfigurationFormProperties {

		/** Required */
		HECEndpoint: FormControl<string | null | undefined>,

		/** Required */
		HECEndpointType: FormControl<HECEndpointType | null | undefined>,

		/** Required */
		HECToken: FormControl<string | null | undefined>,
		HECAcknowledgmentTimeoutInSeconds: FormControl<number | null | undefined>,
		S3BackupMode: FormControl<SplunkS3BackupMode | null | undefined>,
	}
	export function CreateSplunkDestinationConfigurationFormGroup() {
		return new FormGroup<SplunkDestinationConfigurationFormProperties>({
			HECEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HECEndpointType: new FormControl<HECEndpointType | null | undefined>(undefined, [Validators.required]),
			HECToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HECAcknowledgmentTimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			S3BackupMode: new FormControl<SplunkS3BackupMode | null | undefined>(undefined),
		});

	}

	export enum HECEndpointType { Raw = 0, Event = 1 }


	/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Splunk, or if it doesn't receive an acknowledgment from Splunk. */
	export interface SplunkRetryOptions {
		DurationInSeconds?: number | null;
	}

	/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Splunk, or if it doesn't receive an acknowledgment from Splunk. */
	export interface SplunkRetryOptionsFormProperties {
		DurationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateSplunkRetryOptionsFormGroup() {
		return new FormGroup<SplunkRetryOptionsFormProperties>({
			DurationInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SplunkS3BackupMode { FailedEventsOnly = 0, AllEvents = 1 }


	/** Describes the configuration of the HTTP endpoint destination. */
	export interface HttpEndpointDestinationConfiguration {

		/** Required */
		EndpointConfiguration: HttpEndpointConfiguration;
		BufferingHints?: HttpEndpointBufferingHints;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
		RequestConfiguration?: HttpEndpointRequestConfiguration;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration;
		RoleARN?: string;
		RetryOptions?: HttpEndpointRetryOptions;
		S3BackupMode?: HttpEndpointS3BackupMode;

		/**
		 * Describes the configuration of a destination in Amazon S3.
		 * Required
		 */
		S3Configuration: S3DestinationConfiguration;
	}

	/** Describes the configuration of the HTTP endpoint destination. */
	export interface HttpEndpointDestinationConfigurationFormProperties {
		RoleARN: FormControl<string | null | undefined>,
		S3BackupMode: FormControl<HttpEndpointS3BackupMode | null | undefined>,
	}
	export function CreateHttpEndpointDestinationConfigurationFormGroup() {
		return new FormGroup<HttpEndpointDestinationConfigurationFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined),
			S3BackupMode: new FormControl<HttpEndpointS3BackupMode | null | undefined>(undefined),
		});

	}


	/** Describes the configuration of the HTTP endpoint to which Kinesis Firehose delivers data. */
	export interface HttpEndpointConfiguration {

		/** Required */
		Url: string;
		Name?: string;
		AccessKey?: string;
	}

	/** Describes the configuration of the HTTP endpoint to which Kinesis Firehose delivers data. */
	export interface HttpEndpointConfigurationFormProperties {

		/** Required */
		Url: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		AccessKey: FormControl<string | null | undefined>,
	}
	export function CreateHttpEndpointConfigurationFormGroup() {
		return new FormGroup<HttpEndpointConfigurationFormProperties>({
			Url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			AccessKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the buffering options that can be applied before data is delivered to the HTTP endpoint destination. Kinesis Data Firehose treats these options as hints, and it might choose to use more optimal values. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other.  */
	export interface HttpEndpointBufferingHints {
		SizeInMBs?: number | null;
		IntervalInSeconds?: number | null;
	}

	/** Describes the buffering options that can be applied before data is delivered to the HTTP endpoint destination. Kinesis Data Firehose treats these options as hints, and it might choose to use more optimal values. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other.  */
	export interface HttpEndpointBufferingHintsFormProperties {
		SizeInMBs: FormControl<number | null | undefined>,
		IntervalInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateHttpEndpointBufferingHintsFormGroup() {
		return new FormGroup<HttpEndpointBufferingHintsFormProperties>({
			SizeInMBs: new FormControl<number | null | undefined>(undefined),
			IntervalInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The configuration of the HTTP endpoint request. */
	export interface HttpEndpointRequestConfiguration {
		ContentEncoding?: ContentEncoding;
		CommonAttributes?: Array<HttpEndpointCommonAttribute>;
	}

	/** The configuration of the HTTP endpoint request. */
	export interface HttpEndpointRequestConfigurationFormProperties {
		ContentEncoding: FormControl<ContentEncoding | null | undefined>,
	}
	export function CreateHttpEndpointRequestConfigurationFormGroup() {
		return new FormGroup<HttpEndpointRequestConfigurationFormProperties>({
			ContentEncoding: new FormControl<ContentEncoding | null | undefined>(undefined),
		});

	}

	export enum ContentEncoding { NONE = 0, GZIP = 1 }


	/** Describes the metadata that's delivered to the specified HTTP endpoint destination. */
	export interface HttpEndpointCommonAttribute {

		/** Required */
		AttributeName: string;

		/** Required */
		AttributeValue: string;
	}

	/** Describes the metadata that's delivered to the specified HTTP endpoint destination. */
	export interface HttpEndpointCommonAttributeFormProperties {

		/** Required */
		AttributeName: FormControl<string | null | undefined>,

		/** Required */
		AttributeValue: FormControl<string | null | undefined>,
	}
	export function CreateHttpEndpointCommonAttributeFormGroup() {
		return new FormGroup<HttpEndpointCommonAttributeFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AttributeValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of receipt from the specified HTTP endpoint destination. */
	export interface HttpEndpointRetryOptions {
		DurationInSeconds?: number | null;
	}

	/** Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of receipt from the specified HTTP endpoint destination. */
	export interface HttpEndpointRetryOptionsFormProperties {
		DurationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateHttpEndpointRetryOptionsFormGroup() {
		return new FormGroup<HttpEndpointRetryOptionsFormProperties>({
			DurationInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum HttpEndpointS3BackupMode { FailedDataOnly = 0, AllData = 1 }


	/** Metadata that you can assign to a delivery stream, consisting of a key-value pair. */
	export interface Tag {

		/** Required */
		Key: string;
		Value?: string;
	}

	/** Metadata that you can assign to a delivery stream, consisting of a key-value pair. */
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


	/** Describes the configuration of a destination in the Serverless offering for Amazon OpenSearch Service. */
	export interface AmazonOpenSearchServerlessDestinationConfiguration {

		/** Required */
		RoleARN: string;
		CollectionEndpoint?: string;

		/** Required */
		IndexName: string;
		BufferingHints?: AmazonOpenSearchServerlessBufferingHints;
		RetryOptions?: AmazonOpenSearchServerlessRetryOptions;
		S3BackupMode?: ElasticsearchS3BackupMode;

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

	/** Describes the configuration of a destination in the Serverless offering for Amazon OpenSearch Service. */
	export interface AmazonOpenSearchServerlessDestinationConfigurationFormProperties {

		/** Required */
		RoleARN: FormControl<string | null | undefined>,
		CollectionEndpoint: FormControl<string | null | undefined>,

		/** Required */
		IndexName: FormControl<string | null | undefined>,
		S3BackupMode: FormControl<ElasticsearchS3BackupMode | null | undefined>,
	}
	export function CreateAmazonOpenSearchServerlessDestinationConfigurationFormGroup() {
		return new FormGroup<AmazonOpenSearchServerlessDestinationConfigurationFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CollectionEndpoint: new FormControl<string | null | undefined>(undefined),
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3BackupMode: new FormControl<ElasticsearchS3BackupMode | null | undefined>(undefined),
		});

	}


	/** Describes the buffering to perform before delivering data to the Serverless offering for Amazon OpenSearch Service destination. */
	export interface AmazonOpenSearchServerlessBufferingHints {
		IntervalInSeconds?: number | null;
		SizeInMBs?: number | null;
	}

	/** Describes the buffering to perform before delivering data to the Serverless offering for Amazon OpenSearch Service destination. */
	export interface AmazonOpenSearchServerlessBufferingHintsFormProperties {
		IntervalInSeconds: FormControl<number | null | undefined>,
		SizeInMBs: FormControl<number | null | undefined>,
	}
	export function CreateAmazonOpenSearchServerlessBufferingHintsFormGroup() {
		return new FormGroup<AmazonOpenSearchServerlessBufferingHintsFormProperties>({
			IntervalInSeconds: new FormControl<number | null | undefined>(undefined),
			SizeInMBs: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to the Serverless offering for Amazon OpenSearch Service. */
	export interface AmazonOpenSearchServerlessRetryOptions {
		DurationInSeconds?: number | null;
	}

	/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to the Serverless offering for Amazon OpenSearch Service. */
	export interface AmazonOpenSearchServerlessRetryOptionsFormProperties {
		DurationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateAmazonOpenSearchServerlessRetryOptionsFormGroup() {
		return new FormGroup<AmazonOpenSearchServerlessRetryOptionsFormProperties>({
			DurationInSeconds: new FormControl<number | null | undefined>(undefined),
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

		/** Required */
		DeliveryStreamName: string;
		AllowForceDelete?: boolean | null;
	}
	export interface DeleteDeliveryStreamInputFormProperties {

		/** Required */
		DeliveryStreamName: FormControl<string | null | undefined>,
		AllowForceDelete: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteDeliveryStreamInputFormGroup() {
		return new FormGroup<DeleteDeliveryStreamInputFormProperties>({
			DeliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
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

		/** Required */
		DeliveryStreamName: string;

		/** Required */
		DeliveryStreamARN: string;

		/** Required */
		DeliveryStreamStatus: DeliveryStreamStatus;
		FailureDescription?: FailureDescription;
		DeliveryStreamEncryptionConfiguration?: DeliveryStreamEncryptionConfiguration;

		/** Required */
		DeliveryStreamType: DeliveryStreamType;

		/** Required */
		VersionId: string;
		CreateTimestamp?: Date;
		LastUpdateTimestamp?: Date;
		Source?: SourceDescription;

		/** Required */
		Destinations: Array<DestinationDescription>;

		/** Required */
		HasMoreDestinations: boolean;
	}

	/** Contains information about a delivery stream. */
	export interface DeliveryStreamDescriptionFormProperties {

		/** Required */
		DeliveryStreamName: FormControl<string | null | undefined>,

		/** Required */
		DeliveryStreamARN: FormControl<string | null | undefined>,

		/** Required */
		DeliveryStreamStatus: FormControl<DeliveryStreamStatus | null | undefined>,

		/** Required */
		DeliveryStreamType: FormControl<DeliveryStreamType | null | undefined>,

		/** Required */
		VersionId: FormControl<string | null | undefined>,
		CreateTimestamp: FormControl<Date | null | undefined>,
		LastUpdateTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		HasMoreDestinations: FormControl<boolean | null | undefined>,
	}
	export function CreateDeliveryStreamDescriptionFormGroup() {
		return new FormGroup<DeliveryStreamDescriptionFormProperties>({
			DeliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeliveryStreamARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeliveryStreamStatus: new FormControl<DeliveryStreamStatus | null | undefined>(undefined, [Validators.required]),
			DeliveryStreamType: new FormControl<DeliveryStreamType | null | undefined>(undefined, [Validators.required]),
			VersionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreateTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdateTimestamp: new FormControl<Date | null | undefined>(undefined),
			HasMoreDestinations: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DeliveryStreamStatus { CREATING = 0, CREATING_FAILED = 1, DELETING = 2, DELETING_FAILED = 3, ACTIVE = 4 }


	/** Provides details in case one of the following operations fails due to an error related to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>, <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>. */
	export interface FailureDescription {

		/** Required */
		Type: DeliveryStreamFailureType;

		/** Required */
		Details: string;
	}

	/** Provides details in case one of the following operations fails due to an error related to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>, <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>. */
	export interface FailureDescriptionFormProperties {

		/** Required */
		Type: FormControl<DeliveryStreamFailureType | null | undefined>,

		/** Required */
		Details: FormControl<string | null | undefined>,
	}
	export function CreateFailureDescriptionFormGroup() {
		return new FormGroup<FailureDescriptionFormProperties>({
			Type: new FormControl<DeliveryStreamFailureType | null | undefined>(undefined, [Validators.required]),
			Details: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DeliveryStreamFailureType { RETIRE_KMS_GRANT_FAILED = 0, CREATE_KMS_GRANT_FAILED = 1, KMS_ACCESS_DENIED = 2, DISABLED_KMS_KEY = 3, INVALID_KMS_KEY = 4, KMS_KEY_NOT_FOUND = 5, KMS_OPT_IN_REQUIRED = 6, CREATE_ENI_FAILED = 7, DELETE_ENI_FAILED = 8, SUBNET_NOT_FOUND = 9, SECURITY_GROUP_NOT_FOUND = 10, ENI_ACCESS_DENIED = 11, SUBNET_ACCESS_DENIED = 12, SECURITY_GROUP_ACCESS_DENIED = 13, UNKNOWN_ERROR = 14 }


	/** Contains information about the server-side encryption (SSE) status for the delivery stream, the type customer master key (CMK) in use, if any, and the ARN of the CMK. You can get <code>DeliveryStreamEncryptionConfiguration</code> by invoking the <a>DescribeDeliveryStream</a> operation.  */
	export interface DeliveryStreamEncryptionConfiguration {
		KeyARN?: string;
		KeyType?: KeyType;
		Status?: DeliveryStreamEncryptionStatus;
		FailureDescription?: FailureDescription;
	}

	/** Contains information about the server-side encryption (SSE) status for the delivery stream, the type customer master key (CMK) in use, if any, and the ARN of the CMK. You can get <code>DeliveryStreamEncryptionConfiguration</code> by invoking the <a>DescribeDeliveryStream</a> operation.  */
	export interface DeliveryStreamEncryptionConfigurationFormProperties {
		KeyARN: FormControl<string | null | undefined>,
		KeyType: FormControl<KeyType | null | undefined>,
		Status: FormControl<DeliveryStreamEncryptionStatus | null | undefined>,
	}
	export function CreateDeliveryStreamEncryptionConfigurationFormGroup() {
		return new FormGroup<DeliveryStreamEncryptionConfigurationFormProperties>({
			KeyARN: new FormControl<string | null | undefined>(undefined),
			KeyType: new FormControl<KeyType | null | undefined>(undefined),
			Status: new FormControl<DeliveryStreamEncryptionStatus | null | undefined>(undefined),
		});

	}

	export enum DeliveryStreamEncryptionStatus { ENABLED = 0, ENABLING = 1, ENABLING_FAILED = 2, DISABLED = 3, DISABLING = 4, DISABLING_FAILED = 5 }


	/** Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream. */
	export interface SourceDescription {
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
		KinesisStreamARN?: string;
		RoleARN?: string;
		DeliveryStartTimestamp?: Date;
	}

	/** Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream. */
	export interface KinesisStreamSourceDescriptionFormProperties {
		KinesisStreamARN: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
		DeliveryStartTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateKinesisStreamSourceDescriptionFormGroup() {
		return new FormGroup<KinesisStreamSourceDescriptionFormProperties>({
			KinesisStreamARN: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
			DeliveryStartTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes the destination for a delivery stream. */
	export interface DestinationDescription {

		/** Required */
		DestinationId: string;
		S3DestinationDescription?: S3DestinationDescription;
		ExtendedS3DestinationDescription?: ExtendedS3DestinationDescription;
		RedshiftDestinationDescription?: RedshiftDestinationDescription;
		ElasticsearchDestinationDescription?: ElasticsearchDestinationDescription;
		AmazonopensearchserviceDestinationDescription?: AmazonopensearchserviceDestinationDescription;
		SplunkDestinationDescription?: SplunkDestinationDescription;
		HttpEndpointDestinationDescription?: HttpEndpointDestinationDescription;
		AmazonOpenSearchServerlessDestinationDescription?: AmazonOpenSearchServerlessDestinationDescription;
	}

	/** Describes the destination for a delivery stream. */
	export interface DestinationDescriptionFormProperties {

		/** Required */
		DestinationId: FormControl<string | null | undefined>,
	}
	export function CreateDestinationDescriptionFormGroup() {
		return new FormGroup<DestinationDescriptionFormProperties>({
			DestinationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes a destination in Amazon S3. */
	export interface S3DestinationDescription {

		/** Required */
		RoleARN: string;

		/** Required */
		BucketARN: string;
		Prefix?: string;
		ErrorOutputPrefix?: string;

		/** Required */
		BufferingHints: BufferingHints;

		/** Required */
		CompressionFormat: CompressionFormat;

		/** Required */
		EncryptionConfiguration: EncryptionConfiguration;
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
	}

	/** Describes a destination in Amazon S3. */
	export interface S3DestinationDescriptionFormProperties {

		/** Required */
		RoleARN: FormControl<string | null | undefined>,

		/** Required */
		BucketARN: FormControl<string | null | undefined>,
		Prefix: FormControl<string | null | undefined>,
		ErrorOutputPrefix: FormControl<string | null | undefined>,

		/** Required */
		CompressionFormat: FormControl<CompressionFormat | null | undefined>,
	}
	export function CreateS3DestinationDescriptionFormGroup() {
		return new FormGroup<S3DestinationDescriptionFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BucketARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Prefix: new FormControl<string | null | undefined>(undefined),
			ErrorOutputPrefix: new FormControl<string | null | undefined>(undefined),
			CompressionFormat: new FormControl<CompressionFormat | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes a destination in Amazon S3. */
	export interface ExtendedS3DestinationDescription {

		/** Required */
		RoleARN: string;

		/** Required */
		BucketARN: string;
		Prefix?: string;
		ErrorOutputPrefix?: string;

		/** Required */
		BufferingHints: BufferingHints;

		/** Required */
		CompressionFormat: CompressionFormat;

		/** Required */
		EncryptionConfiguration: EncryptionConfiguration;
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
		ProcessingConfiguration?: ProcessingConfiguration;
		S3BackupMode?: S3BackupMode;
		S3BackupDescription?: S3DestinationDescription;
		DataFormatConversionConfiguration?: DataFormatConversionConfiguration;
		DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration;
	}

	/** Describes a destination in Amazon S3. */
	export interface ExtendedS3DestinationDescriptionFormProperties {

		/** Required */
		RoleARN: FormControl<string | null | undefined>,

		/** Required */
		BucketARN: FormControl<string | null | undefined>,
		Prefix: FormControl<string | null | undefined>,
		ErrorOutputPrefix: FormControl<string | null | undefined>,

		/** Required */
		CompressionFormat: FormControl<CompressionFormat | null | undefined>,
		S3BackupMode: FormControl<S3BackupMode | null | undefined>,
	}
	export function CreateExtendedS3DestinationDescriptionFormGroup() {
		return new FormGroup<ExtendedS3DestinationDescriptionFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BucketARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Prefix: new FormControl<string | null | undefined>(undefined),
			ErrorOutputPrefix: new FormControl<string | null | undefined>(undefined),
			CompressionFormat: new FormControl<CompressionFormat | null | undefined>(undefined, [Validators.required]),
			S3BackupMode: new FormControl<S3BackupMode | null | undefined>(undefined),
		});

	}


	/** Describes a destination in Amazon Redshift. */
	export interface RedshiftDestinationDescription {

		/** Required */
		RoleARN: string;

		/** Required */
		ClusterJDBCURL: string;

		/** Required */
		CopyCommand: CopyCommand;

		/** Required */
		Username: string;
		RetryOptions?: RedshiftRetryOptions;

		/** Required */
		S3DestinationDescription: S3DestinationDescription;
		ProcessingConfiguration?: ProcessingConfiguration;
		S3BackupMode?: S3BackupMode;
		S3BackupDescription?: S3DestinationDescription;
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
	}

	/** Describes a destination in Amazon Redshift. */
	export interface RedshiftDestinationDescriptionFormProperties {

		/** Required */
		RoleARN: FormControl<string | null | undefined>,

		/** Required */
		ClusterJDBCURL: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
		S3BackupMode: FormControl<S3BackupMode | null | undefined>,
	}
	export function CreateRedshiftDestinationDescriptionFormGroup() {
		return new FormGroup<RedshiftDestinationDescriptionFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClusterJDBCURL: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3BackupMode: new FormControl<S3BackupMode | null | undefined>(undefined),
		});

	}


	/** The destination description in Amazon ES. */
	export interface ElasticsearchDestinationDescription {
		RoleARN?: string;
		DomainARN?: string;
		ClusterEndpoint?: string;
		IndexName?: string;
		TypeName?: string;
		IndexRotationPeriod?: ElasticsearchIndexRotationPeriod;
		BufferingHints?: ElasticsearchBufferingHints;
		RetryOptions?: ElasticsearchRetryOptions;
		S3BackupMode?: ElasticsearchS3BackupMode;
		S3DestinationDescription?: S3DestinationDescription;
		ProcessingConfiguration?: ProcessingConfiguration;
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
		VpcConfigurationDescription?: VpcConfigurationDescription;
	}

	/** The destination description in Amazon ES. */
	export interface ElasticsearchDestinationDescriptionFormProperties {
		RoleARN: FormControl<string | null | undefined>,
		DomainARN: FormControl<string | null | undefined>,
		ClusterEndpoint: FormControl<string | null | undefined>,
		IndexName: FormControl<string | null | undefined>,
		TypeName: FormControl<string | null | undefined>,
		IndexRotationPeriod: FormControl<ElasticsearchIndexRotationPeriod | null | undefined>,
		S3BackupMode: FormControl<ElasticsearchS3BackupMode | null | undefined>,
	}
	export function CreateElasticsearchDestinationDescriptionFormGroup() {
		return new FormGroup<ElasticsearchDestinationDescriptionFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined),
			DomainARN: new FormControl<string | null | undefined>(undefined),
			ClusterEndpoint: new FormControl<string | null | undefined>(undefined),
			IndexName: new FormControl<string | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined),
			IndexRotationPeriod: new FormControl<ElasticsearchIndexRotationPeriod | null | undefined>(undefined),
			S3BackupMode: new FormControl<ElasticsearchS3BackupMode | null | undefined>(undefined),
		});

	}


	/** The details of the VPC of the Amazon ES destination. */
	export interface VpcConfigurationDescription {

		/** Required */
		SubnetIds: Array<string>;

		/** Required */
		RoleARN: string;

		/** Required */
		SecurityGroupIds: Array<string>;

		/** Required */
		VpcId: string;
	}

	/** The details of the VPC of the Amazon ES destination. */
	export interface VpcConfigurationDescriptionFormProperties {

		/** Required */
		RoleARN: FormControl<string | null | undefined>,

		/** Required */
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateVpcConfigurationDescriptionFormGroup() {
		return new FormGroup<VpcConfigurationDescriptionFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The destination description in Amazon OpenSearch Service. */
	export interface AmazonopensearchserviceDestinationDescription {
		RoleARN?: string;
		DomainARN?: string;
		ClusterEndpoint?: string;
		IndexName?: string;
		TypeName?: string;
		IndexRotationPeriod?: ElasticsearchIndexRotationPeriod;
		BufferingHints?: AmazonopensearchserviceBufferingHints;
		RetryOptions?: AmazonopensearchserviceRetryOptions;
		S3BackupMode?: ElasticsearchS3BackupMode;

		/** Describes a destination in Amazon S3. */
		S3DestinationDescription?: S3DestinationDescription;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

		/** The details of the VPC of the Amazon ES destination. */
		VpcConfigurationDescription?: VpcConfigurationDescription;
	}

	/** The destination description in Amazon OpenSearch Service. */
	export interface AmazonopensearchserviceDestinationDescriptionFormProperties {
		RoleARN: FormControl<string | null | undefined>,
		DomainARN: FormControl<string | null | undefined>,
		ClusterEndpoint: FormControl<string | null | undefined>,
		IndexName: FormControl<string | null | undefined>,
		TypeName: FormControl<string | null | undefined>,
		IndexRotationPeriod: FormControl<ElasticsearchIndexRotationPeriod | null | undefined>,
		S3BackupMode: FormControl<ElasticsearchS3BackupMode | null | undefined>,
	}
	export function CreateAmazonopensearchserviceDestinationDescriptionFormGroup() {
		return new FormGroup<AmazonopensearchserviceDestinationDescriptionFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined),
			DomainARN: new FormControl<string | null | undefined>(undefined),
			ClusterEndpoint: new FormControl<string | null | undefined>(undefined),
			IndexName: new FormControl<string | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined),
			IndexRotationPeriod: new FormControl<ElasticsearchIndexRotationPeriod | null | undefined>(undefined),
			S3BackupMode: new FormControl<ElasticsearchS3BackupMode | null | undefined>(undefined),
		});

	}


	/** Describes a destination in Splunk. */
	export interface SplunkDestinationDescription {
		HECEndpoint?: string;
		HECEndpointType?: HECEndpointType;
		HECToken?: string;
		HECAcknowledgmentTimeoutInSeconds?: number | null;
		RetryOptions?: SplunkRetryOptions;
		S3BackupMode?: SplunkS3BackupMode;
		S3DestinationDescription?: S3DestinationDescription;
		ProcessingConfiguration?: ProcessingConfiguration;
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
	}

	/** Describes a destination in Splunk. */
	export interface SplunkDestinationDescriptionFormProperties {
		HECEndpoint: FormControl<string | null | undefined>,
		HECEndpointType: FormControl<HECEndpointType | null | undefined>,
		HECToken: FormControl<string | null | undefined>,
		HECAcknowledgmentTimeoutInSeconds: FormControl<number | null | undefined>,
		S3BackupMode: FormControl<SplunkS3BackupMode | null | undefined>,
	}
	export function CreateSplunkDestinationDescriptionFormGroup() {
		return new FormGroup<SplunkDestinationDescriptionFormProperties>({
			HECEndpoint: new FormControl<string | null | undefined>(undefined),
			HECEndpointType: new FormControl<HECEndpointType | null | undefined>(undefined),
			HECToken: new FormControl<string | null | undefined>(undefined),
			HECAcknowledgmentTimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			S3BackupMode: new FormControl<SplunkS3BackupMode | null | undefined>(undefined),
		});

	}


	/** Describes the HTTP endpoint destination. */
	export interface HttpEndpointDestinationDescription {
		EndpointConfiguration?: HttpEndpointDescription;
		BufferingHints?: HttpEndpointBufferingHints;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
		RequestConfiguration?: HttpEndpointRequestConfiguration;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration;
		RoleARN?: string;
		RetryOptions?: HttpEndpointRetryOptions;
		S3BackupMode?: HttpEndpointS3BackupMode;

		/** Describes a destination in Amazon S3. */
		S3DestinationDescription?: S3DestinationDescription;
	}

	/** Describes the HTTP endpoint destination. */
	export interface HttpEndpointDestinationDescriptionFormProperties {
		RoleARN: FormControl<string | null | undefined>,
		S3BackupMode: FormControl<HttpEndpointS3BackupMode | null | undefined>,
	}
	export function CreateHttpEndpointDestinationDescriptionFormGroup() {
		return new FormGroup<HttpEndpointDestinationDescriptionFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined),
			S3BackupMode: new FormControl<HttpEndpointS3BackupMode | null | undefined>(undefined),
		});

	}


	/** Describes the HTTP endpoint selected as the destination.  */
	export interface HttpEndpointDescription {
		Url?: string;
		Name?: string;
	}

	/** Describes the HTTP endpoint selected as the destination.  */
	export interface HttpEndpointDescriptionFormProperties {
		Url: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateHttpEndpointDescriptionFormGroup() {
		return new FormGroup<HttpEndpointDescriptionFormProperties>({
			Url: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The destination description in the Serverless offering for Amazon OpenSearch Service. */
	export interface AmazonOpenSearchServerlessDestinationDescription {
		RoleARN?: string;
		CollectionEndpoint?: string;
		IndexName?: string;
		BufferingHints?: AmazonOpenSearchServerlessBufferingHints;
		RetryOptions?: AmazonOpenSearchServerlessRetryOptions;
		S3BackupMode?: ElasticsearchS3BackupMode;

		/** Describes a destination in Amazon S3. */
		S3DestinationDescription?: S3DestinationDescription;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

		/** The details of the VPC of the Amazon ES destination. */
		VpcConfigurationDescription?: VpcConfigurationDescription;
	}

	/** The destination description in the Serverless offering for Amazon OpenSearch Service. */
	export interface AmazonOpenSearchServerlessDestinationDescriptionFormProperties {
		RoleARN: FormControl<string | null | undefined>,
		CollectionEndpoint: FormControl<string | null | undefined>,
		IndexName: FormControl<string | null | undefined>,
		S3BackupMode: FormControl<ElasticsearchS3BackupMode | null | undefined>,
	}
	export function CreateAmazonOpenSearchServerlessDestinationDescriptionFormGroup() {
		return new FormGroup<AmazonOpenSearchServerlessDestinationDescriptionFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined),
			CollectionEndpoint: new FormControl<string | null | undefined>(undefined),
			IndexName: new FormControl<string | null | undefined>(undefined),
			S3BackupMode: new FormControl<ElasticsearchS3BackupMode | null | undefined>(undefined),
		});

	}

	export interface DescribeDeliveryStreamInput {

		/** Required */
		DeliveryStreamName: string;
		Limit?: number | null;
		ExclusiveStartDestinationId?: string;
	}
	export interface DescribeDeliveryStreamInputFormProperties {

		/** Required */
		DeliveryStreamName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		ExclusiveStartDestinationId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDeliveryStreamInputFormGroup() {
		return new FormGroup<DescribeDeliveryStreamInputFormProperties>({
			DeliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			ExclusiveStartDestinationId: new FormControl<string | null | undefined>(undefined),
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
		Limit?: number | null;
		DeliveryStreamType?: DeliveryStreamType;
		ExclusiveStartDeliveryStreamName?: string;
	}
	export interface ListDeliveryStreamsInputFormProperties {
		Limit: FormControl<number | null | undefined>,
		DeliveryStreamType: FormControl<DeliveryStreamType | null | undefined>,
		ExclusiveStartDeliveryStreamName: FormControl<string | null | undefined>,
	}
	export function CreateListDeliveryStreamsInputFormGroup() {
		return new FormGroup<ListDeliveryStreamsInputFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			DeliveryStreamType: new FormControl<DeliveryStreamType | null | undefined>(undefined),
			ExclusiveStartDeliveryStreamName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForDeliveryStreamOutput {

		/** Required */
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

		/** Required */
		DeliveryStreamName: string;
		ExclusiveStartTagKey?: string;
		Limit?: number | null;
	}
	export interface ListTagsForDeliveryStreamInputFormProperties {

		/** Required */
		DeliveryStreamName: FormControl<string | null | undefined>,
		ExclusiveStartTagKey: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListTagsForDeliveryStreamInputFormGroup() {
		return new FormGroup<ListTagsForDeliveryStreamInputFormProperties>({
			DeliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExclusiveStartTagKey: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutRecordOutput {

		/** Required */
		RecordId: string;
		Encrypted?: boolean | null;
	}
	export interface PutRecordOutputFormProperties {

		/** Required */
		RecordId: FormControl<string | null | undefined>,
		Encrypted: FormControl<boolean | null | undefined>,
	}
	export function CreatePutRecordOutputFormGroup() {
		return new FormGroup<PutRecordOutputFormProperties>({
			RecordId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Encrypted: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutRecordInput {

		/** Required */
		DeliveryStreamName: string;

		/** Required */
		Record: Record;
	}
	export interface PutRecordInputFormProperties {

		/** Required */
		DeliveryStreamName: FormControl<string | null | undefined>,
	}
	export function CreatePutRecordInputFormGroup() {
		return new FormGroup<PutRecordInputFormProperties>({
			DeliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The unit of data in a delivery stream. */
	export interface Record {

		/** Required */
		Data: string;
	}

	/** The unit of data in a delivery stream. */
	export interface RecordFormProperties {

		/** Required */
		Data: FormControl<string | null | undefined>,
	}
	export function CreateRecordFormGroup() {
		return new FormGroup<RecordFormProperties>({
			Data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		FailedPutCount: number;
		Encrypted?: boolean | null;

		/** Required */
		RequestResponses: Array<PutRecordBatchResponseEntry>;
	}
	export interface PutRecordBatchOutputFormProperties {

		/** Required */
		FailedPutCount: FormControl<number | null | undefined>,
		Encrypted: FormControl<boolean | null | undefined>,
	}
	export function CreatePutRecordBatchOutputFormGroup() {
		return new FormGroup<PutRecordBatchOutputFormProperties>({
			FailedPutCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Encrypted: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains the result for an individual record from a <a>PutRecordBatch</a> request. If the record is successfully added to your delivery stream, it receives a record ID. If the record fails to be added to your delivery stream, the result includes an error code and an error message. */
	export interface PutRecordBatchResponseEntry {
		RecordId?: string;
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	/** Contains the result for an individual record from a <a>PutRecordBatch</a> request. If the record is successfully added to your delivery stream, it receives a record ID. If the record fails to be added to your delivery stream, the result includes an error code and an error message. */
	export interface PutRecordBatchResponseEntryFormProperties {
		RecordId: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreatePutRecordBatchResponseEntryFormGroup() {
		return new FormGroup<PutRecordBatchResponseEntryFormProperties>({
			RecordId: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutRecordBatchInput {

		/** Required */
		DeliveryStreamName: string;

		/** Required */
		Records: Array<Record>;
	}
	export interface PutRecordBatchInputFormProperties {

		/** Required */
		DeliveryStreamName: FormControl<string | null | undefined>,
	}
	export function CreatePutRecordBatchInputFormGroup() {
		return new FormGroup<PutRecordBatchInputFormProperties>({
			DeliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		DeliveryStreamName: string;
		DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;
	}
	export interface StartDeliveryStreamEncryptionInputFormProperties {

		/** Required */
		DeliveryStreamName: FormControl<string | null | undefined>,
	}
	export function CreateStartDeliveryStreamEncryptionInputFormGroup() {
		return new FormGroup<StartDeliveryStreamEncryptionInputFormProperties>({
			DeliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		DeliveryStreamName: string;
	}
	export interface StopDeliveryStreamEncryptionInputFormProperties {

		/** Required */
		DeliveryStreamName: FormControl<string | null | undefined>,
	}
	export function CreateStopDeliveryStreamEncryptionInputFormGroup() {
		return new FormGroup<StopDeliveryStreamEncryptionInputFormProperties>({
			DeliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		DeliveryStreamName: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagDeliveryStreamInputFormProperties {

		/** Required */
		DeliveryStreamName: FormControl<string | null | undefined>,
	}
	export function CreateTagDeliveryStreamInputFormGroup() {
		return new FormGroup<TagDeliveryStreamInputFormProperties>({
			DeliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		DeliveryStreamName: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagDeliveryStreamInputFormProperties {

		/** Required */
		DeliveryStreamName: FormControl<string | null | undefined>,
	}
	export function CreateUntagDeliveryStreamInputFormGroup() {
		return new FormGroup<UntagDeliveryStreamInputFormProperties>({
			DeliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		DeliveryStreamName: string;

		/** Required */
		CurrentDeliveryStreamVersionId: string;

		/** Required */
		DestinationId: string;
		S3DestinationUpdate?: S3DestinationUpdate;
		ExtendedS3DestinationUpdate?: ExtendedS3DestinationUpdate;
		RedshiftDestinationUpdate?: RedshiftDestinationUpdate;
		ElasticsearchDestinationUpdate?: ElasticsearchDestinationUpdate;
		AmazonopensearchserviceDestinationUpdate?: AmazonopensearchserviceDestinationUpdate;
		SplunkDestinationUpdate?: SplunkDestinationUpdate;
		HttpEndpointDestinationUpdate?: HttpEndpointDestinationUpdate;
		AmazonOpenSearchServerlessDestinationUpdate?: AmazonOpenSearchServerlessDestinationUpdate;
	}
	export interface UpdateDestinationInputFormProperties {

		/** Required */
		DeliveryStreamName: FormControl<string | null | undefined>,

		/** Required */
		CurrentDeliveryStreamVersionId: FormControl<string | null | undefined>,

		/** Required */
		DestinationId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDestinationInputFormGroup() {
		return new FormGroup<UpdateDestinationInputFormProperties>({
			DeliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CurrentDeliveryStreamVersionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DestinationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes an update for a destination in Amazon S3. */
	export interface S3DestinationUpdate {
		RoleARN?: string;
		BucketARN?: string;
		Prefix?: string;
		ErrorOutputPrefix?: string;
		BufferingHints?: BufferingHints;
		CompressionFormat?: CompressionFormat;
		EncryptionConfiguration?: EncryptionConfiguration;
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
	}

	/** Describes an update for a destination in Amazon S3. */
	export interface S3DestinationUpdateFormProperties {
		RoleARN: FormControl<string | null | undefined>,
		BucketARN: FormControl<string | null | undefined>,
		Prefix: FormControl<string | null | undefined>,
		ErrorOutputPrefix: FormControl<string | null | undefined>,
		CompressionFormat: FormControl<CompressionFormat | null | undefined>,
	}
	export function CreateS3DestinationUpdateFormGroup() {
		return new FormGroup<S3DestinationUpdateFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined),
			BucketARN: new FormControl<string | null | undefined>(undefined),
			Prefix: new FormControl<string | null | undefined>(undefined),
			ErrorOutputPrefix: new FormControl<string | null | undefined>(undefined),
			CompressionFormat: new FormControl<CompressionFormat | null | undefined>(undefined),
		});

	}


	/** Describes an update for a destination in Amazon S3. */
	export interface ExtendedS3DestinationUpdate {
		RoleARN?: string;
		BucketARN?: string;
		Prefix?: string;
		ErrorOutputPrefix?: string;
		BufferingHints?: BufferingHints;
		CompressionFormat?: CompressionFormat;
		EncryptionConfiguration?: EncryptionConfiguration;
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
		ProcessingConfiguration?: ProcessingConfiguration;
		S3BackupMode?: S3BackupMode;
		S3BackupUpdate?: S3DestinationUpdate;
		DataFormatConversionConfiguration?: DataFormatConversionConfiguration;
		DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration;
	}

	/** Describes an update for a destination in Amazon S3. */
	export interface ExtendedS3DestinationUpdateFormProperties {
		RoleARN: FormControl<string | null | undefined>,
		BucketARN: FormControl<string | null | undefined>,
		Prefix: FormControl<string | null | undefined>,
		ErrorOutputPrefix: FormControl<string | null | undefined>,
		CompressionFormat: FormControl<CompressionFormat | null | undefined>,
		S3BackupMode: FormControl<S3BackupMode | null | undefined>,
	}
	export function CreateExtendedS3DestinationUpdateFormGroup() {
		return new FormGroup<ExtendedS3DestinationUpdateFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined),
			BucketARN: new FormControl<string | null | undefined>(undefined),
			Prefix: new FormControl<string | null | undefined>(undefined),
			ErrorOutputPrefix: new FormControl<string | null | undefined>(undefined),
			CompressionFormat: new FormControl<CompressionFormat | null | undefined>(undefined),
			S3BackupMode: new FormControl<S3BackupMode | null | undefined>(undefined),
		});

	}


	/** Describes an update for a destination in Amazon Redshift. */
	export interface RedshiftDestinationUpdate {
		RoleARN?: string;
		ClusterJDBCURL?: string;
		CopyCommand?: CopyCommand;
		Username?: string;
		Password?: string;
		RetryOptions?: RedshiftRetryOptions;
		S3Update?: S3DestinationUpdate;
		ProcessingConfiguration?: ProcessingConfiguration;
		S3BackupMode?: S3BackupMode;
		S3BackupUpdate?: S3DestinationUpdate;
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
	}

	/** Describes an update for a destination in Amazon Redshift. */
	export interface RedshiftDestinationUpdateFormProperties {
		RoleARN: FormControl<string | null | undefined>,
		ClusterJDBCURL: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
		S3BackupMode: FormControl<S3BackupMode | null | undefined>,
	}
	export function CreateRedshiftDestinationUpdateFormGroup() {
		return new FormGroup<RedshiftDestinationUpdateFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined),
			ClusterJDBCURL: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			S3BackupMode: new FormControl<S3BackupMode | null | undefined>(undefined),
		});

	}


	/** Describes an update for a destination in Amazon ES. */
	export interface ElasticsearchDestinationUpdate {
		RoleARN?: string;
		DomainARN?: string;
		ClusterEndpoint?: string;
		IndexName?: string;
		TypeName?: string;
		IndexRotationPeriod?: ElasticsearchIndexRotationPeriod;
		BufferingHints?: ElasticsearchBufferingHints;
		RetryOptions?: ElasticsearchRetryOptions;
		S3Update?: S3DestinationUpdate;
		ProcessingConfiguration?: ProcessingConfiguration;
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
	}

	/** Describes an update for a destination in Amazon ES. */
	export interface ElasticsearchDestinationUpdateFormProperties {
		RoleARN: FormControl<string | null | undefined>,
		DomainARN: FormControl<string | null | undefined>,
		ClusterEndpoint: FormControl<string | null | undefined>,
		IndexName: FormControl<string | null | undefined>,
		TypeName: FormControl<string | null | undefined>,
		IndexRotationPeriod: FormControl<ElasticsearchIndexRotationPeriod | null | undefined>,
	}
	export function CreateElasticsearchDestinationUpdateFormGroup() {
		return new FormGroup<ElasticsearchDestinationUpdateFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined),
			DomainARN: new FormControl<string | null | undefined>(undefined),
			ClusterEndpoint: new FormControl<string | null | undefined>(undefined),
			IndexName: new FormControl<string | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined),
			IndexRotationPeriod: new FormControl<ElasticsearchIndexRotationPeriod | null | undefined>(undefined),
		});

	}


	/** Describes an update for a destination in Amazon OpenSearch Service. */
	export interface AmazonopensearchserviceDestinationUpdate {
		RoleARN?: string;
		DomainARN?: string;
		ClusterEndpoint?: string;
		IndexName?: string;
		TypeName?: string;
		IndexRotationPeriod?: ElasticsearchIndexRotationPeriod;
		BufferingHints?: AmazonopensearchserviceBufferingHints;
		RetryOptions?: AmazonopensearchserviceRetryOptions;

		/** Describes an update for a destination in Amazon S3. */
		S3Update?: S3DestinationUpdate;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
	}

	/** Describes an update for a destination in Amazon OpenSearch Service. */
	export interface AmazonopensearchserviceDestinationUpdateFormProperties {
		RoleARN: FormControl<string | null | undefined>,
		DomainARN: FormControl<string | null | undefined>,
		ClusterEndpoint: FormControl<string | null | undefined>,
		IndexName: FormControl<string | null | undefined>,
		TypeName: FormControl<string | null | undefined>,
		IndexRotationPeriod: FormControl<ElasticsearchIndexRotationPeriod | null | undefined>,
	}
	export function CreateAmazonopensearchserviceDestinationUpdateFormGroup() {
		return new FormGroup<AmazonopensearchserviceDestinationUpdateFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined),
			DomainARN: new FormControl<string | null | undefined>(undefined),
			ClusterEndpoint: new FormControl<string | null | undefined>(undefined),
			IndexName: new FormControl<string | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined),
			IndexRotationPeriod: new FormControl<ElasticsearchIndexRotationPeriod | null | undefined>(undefined),
		});

	}


	/** Describes an update for a destination in Splunk. */
	export interface SplunkDestinationUpdate {
		HECEndpoint?: string;
		HECEndpointType?: HECEndpointType;
		HECToken?: string;
		HECAcknowledgmentTimeoutInSeconds?: number | null;
		RetryOptions?: SplunkRetryOptions;
		S3BackupMode?: SplunkS3BackupMode;
		S3Update?: S3DestinationUpdate;
		ProcessingConfiguration?: ProcessingConfiguration;
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
	}

	/** Describes an update for a destination in Splunk. */
	export interface SplunkDestinationUpdateFormProperties {
		HECEndpoint: FormControl<string | null | undefined>,
		HECEndpointType: FormControl<HECEndpointType | null | undefined>,
		HECToken: FormControl<string | null | undefined>,
		HECAcknowledgmentTimeoutInSeconds: FormControl<number | null | undefined>,
		S3BackupMode: FormControl<SplunkS3BackupMode | null | undefined>,
	}
	export function CreateSplunkDestinationUpdateFormGroup() {
		return new FormGroup<SplunkDestinationUpdateFormProperties>({
			HECEndpoint: new FormControl<string | null | undefined>(undefined),
			HECEndpointType: new FormControl<HECEndpointType | null | undefined>(undefined),
			HECToken: new FormControl<string | null | undefined>(undefined),
			HECAcknowledgmentTimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			S3BackupMode: new FormControl<SplunkS3BackupMode | null | undefined>(undefined),
		});

	}


	/** Updates the specified HTTP endpoint destination. */
	export interface HttpEndpointDestinationUpdate {
		EndpointConfiguration?: HttpEndpointConfiguration;
		BufferingHints?: HttpEndpointBufferingHints;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
		RequestConfiguration?: HttpEndpointRequestConfiguration;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration;
		RoleARN?: string;
		RetryOptions?: HttpEndpointRetryOptions;
		S3BackupMode?: HttpEndpointS3BackupMode;

		/** Describes an update for a destination in Amazon S3. */
		S3Update?: S3DestinationUpdate;
	}

	/** Updates the specified HTTP endpoint destination. */
	export interface HttpEndpointDestinationUpdateFormProperties {
		RoleARN: FormControl<string | null | undefined>,
		S3BackupMode: FormControl<HttpEndpointS3BackupMode | null | undefined>,
	}
	export function CreateHttpEndpointDestinationUpdateFormGroup() {
		return new FormGroup<HttpEndpointDestinationUpdateFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined),
			S3BackupMode: new FormControl<HttpEndpointS3BackupMode | null | undefined>(undefined),
		});

	}


	/** Describes an update for a destination in the Serverless offering for Amazon OpenSearch Service. */
	export interface AmazonOpenSearchServerlessDestinationUpdate {
		RoleARN?: string;
		CollectionEndpoint?: string;
		IndexName?: string;
		BufferingHints?: AmazonOpenSearchServerlessBufferingHints;
		RetryOptions?: AmazonOpenSearchServerlessRetryOptions;

		/** Describes an update for a destination in Amazon S3. */
		S3Update?: S3DestinationUpdate;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
	}

	/** Describes an update for a destination in the Serverless offering for Amazon OpenSearch Service. */
	export interface AmazonOpenSearchServerlessDestinationUpdateFormProperties {
		RoleARN: FormControl<string | null | undefined>,
		CollectionEndpoint: FormControl<string | null | undefined>,
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateAmazonOpenSearchServerlessDestinationUpdateFormGroup() {
		return new FormGroup<AmazonOpenSearchServerlessDestinationUpdateFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined),
			CollectionEndpoint: new FormControl<string | null | undefined>(undefined),
			IndexName: new FormControl<string | null | undefined>(undefined),
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

	export enum AmazonOpenSearchServerlessS3BackupMode { FailedDocumentsOnly = 0, AllDocuments = 1 }

	export enum AmazonopensearchserviceIndexRotationPeriod { NoRotation = 0, OneHour = 1, OneDay = 2, OneWeek = 3, OneMonth = 4 }

	export enum AmazonopensearchserviceS3BackupMode { FailedDocumentsOnly = 0, AllDocuments = 1 }

	export enum RedshiftS3BackupMode { Disabled = 0, Enabled = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a Kinesis Data Firehose delivery stream.</p> <p>By default, you can create up to 50 delivery streams per Amazon Web Services Region.</p> <p>This is an asynchronous operation that immediately returns. The initial status of the delivery stream is <code>CREATING</code>. After the delivery stream is created, its status is <code>ACTIVE</code> and it now accepts data. If the delivery stream creation fails, the status transitions to <code>CREATING_FAILED</code>. Attempts to send data to a delivery stream that is not in the <code>ACTIVE</code> state cause an exception. To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <code>CreateDeliveryStream</code> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it.</p> <p>A Kinesis Data Firehose delivery stream can be configured to receive records directly from providers using <a>PutRecord</a> or <a>PutRecordBatch</a>, or it can be configured to use an existing Kinesis stream as its source. To specify a Kinesis data stream as input, set the <code>DeliveryStreamType</code> parameter to <code>KinesisStreamAsSource</code>, and provide the Kinesis stream Amazon Resource Name (ARN) and role ARN in the <code>KinesisStreamSourceConfiguration</code> parameter.</p> <p>To create a delivery stream with server-side encryption (SSE) enabled, include <a>DeliveryStreamEncryptionConfigurationInput</a> in your request. This is optional. You can also invoke <a>StartDeliveryStreamEncryption</a> to turn on SSE for an existing delivery stream that doesn't have SSE enabled.</p> <p>A delivery stream is configured with a single destination: Amazon S3, Amazon ES, Amazon Redshift, or Splunk. You must specify only one of the following destination configuration parameters: <code>ExtendedS3DestinationConfiguration</code>, <code>S3DestinationConfiguration</code>, <code>ElasticsearchDestinationConfiguration</code>, <code>RedshiftDestinationConfiguration</code>, or <code>SplunkDestinationConfiguration</code>.</p> <p>When you specify <code>S3DestinationConfiguration</code>, you can also provide the following optional values: BufferingHints, <code>EncryptionConfiguration</code>, and <code>CompressionFormat</code>. By default, if no <code>BufferingHints</code> value is provided, Kinesis Data Firehose buffers data up to 5 MB or for 5 minutes, whichever condition is satisfied first. <code>BufferingHints</code> is a hint, so there are some cases where the service cannot adhere to these conditions strictly. For example, record boundaries might be such that the size is a little over or under the configured buffering size. By default, no encryption is performed. We strongly recommend that you enable encryption to ensure secure data storage in Amazon S3.</p> <p>A few notes about Amazon Redshift as a destination:</p> <ul> <li> <p>An Amazon Redshift destination requires an S3 bucket as intermediate location. Kinesis Data Firehose first delivers data to Amazon S3 and then uses <code>COPY</code> syntax to load data into an Amazon Redshift table. This is specified in the <code>RedshiftDestinationConfiguration.S3Configuration</code> parameter.</p> </li> <li> <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified in <code>RedshiftDestinationConfiguration.S3Configuration</code> because the Amazon Redshift <code>COPY</code> operation that reads from the S3 bucket doesn't support these compression formats.</p> </li> <li> <p>We strongly recommend that you use the user name and password you provide exclusively with Kinesis Data Firehose, and that the permissions for the account are restricted for Amazon Redshift <code>INSERT</code> permissions.</p> </li> </ul> <p>Kinesis Data Firehose assumes the IAM role that is configured as part of the destination. The role should allow the Kinesis Data Firehose principal to assume the role, and the role should have permissions that allow the service to deliver the data. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3">Grant Kinesis Data Firehose Access to an Amazon S3 Destination</a> in the <i>Amazon Kinesis Data Firehose Developer Guide</i>.</p>
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
		 * <p>Writes a single data record into an Amazon Kinesis Data Firehose delivery stream. To write multiple data records into a delivery stream, use <a>PutRecordBatch</a>. Applications using these operations are referred to as producers.</p> <p>By default, each delivery stream can take in up to 2,000 transactions per second, 5,000 records per second, or 5 MB per second. If you use <a>PutRecord</a> and <a>PutRecordBatch</a>, the limits are an aggregate across these two operations for each delivery stream. For more information about limits and how to request an increase, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Limits</a>. </p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KiB in size, and any kind of data. For example, it can be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <code>PutRecord</code> operation returns a <code>RecordId</code>, which is a unique string assigned to each record. Producer applications can use this ID for purposes such as auditability and investigation.</p> <p>If the <code>PutRecord</code> operation throws a <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream. </p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it tries to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>
		 * Post #X-Amz-Target=Firehose_20150804.PutRecord
		 * @return {PutRecordOutput} Success
		 */
		PutRecord(requestBody: PutRecordInput): Observable<PutRecordOutput> {
			return this.http.post<PutRecordOutput>(this.baseUri + '#X-Amz-Target=Firehose_20150804.PutRecord', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Writes multiple data records into a delivery stream in a single call, which can achieve higher throughput per producer than when writing single records. To write single data records into a delivery stream, use <a>PutRecord</a>. Applications using these operations are referred to as producers.</p> <p>For information about service quota, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Quota</a>.</p> <p>Each <a>PutRecordBatch</a> request supports up to 500 records. Each record in the request can be as large as 1,000 KB (before base64 encoding), up to a limit of 4 MB for the entire request. These limits cannot be changed.</p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KB in size, and any kind of data. For example, it could be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <a>PutRecordBatch</a> response includes a count of failed records, <code>FailedPutCount</code>, and an array of responses, <code>RequestResponses</code>. Even if the <a>PutRecordBatch</a> call succeeds, the value of <code>FailedPutCount</code> may be greater than 0, indicating that there are records for which the operation didn't succeed. Each entry in the <code>RequestResponses</code> array provides additional information about the processed record. It directly correlates with a record in the request array using the same ordering, from the top to the bottom. The response array always includes the same number of records as the request array. <code>RequestResponses</code> includes both successfully and unsuccessfully processed records. Kinesis Data Firehose tries to process all records in each <a>PutRecordBatch</a> request. A single record failure does not stop the processing of subsequent records. </p> <p>A successfully processed record includes a <code>RecordId</code> value, which is unique for the record. An unsuccessfully processed record includes <code>ErrorCode</code> and <code>ErrorMessage</code> values. <code>ErrorCode</code> reflects the type of error, and is one of the following values: <code>ServiceUnavailableException</code> or <code>InternalFailure</code>. <code>ErrorMessage</code> provides more detailed information about the error.</p> <p>If there is an internal server error or a timeout, the write might have completed or it might have failed. If <code>FailedPutCount</code> is greater than 0, retry the request, resending only those records that might have failed processing. This minimizes the possible duplicate records and also reduces the total bytes sent (and corresponding charges). We recommend that you handle any duplicates at the destination.</p> <p>If <a>PutRecordBatch</a> throws <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream.</p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it attempts to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>
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
		 * <p>Adds or updates tags for the specified delivery stream. A tag is a key-value pair that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Tags are metadata. For example, you can add friendly names and descriptions or other types of information that can help you distinguish the delivery stream. For more information about tags, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>. </p> <p>Each delivery stream can have up to 50 tags. </p> <p>This operation has a limit of five transactions per second per account. </p>
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

