import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateDeliveryStreamOutput {
		DeliveryStreamARN?: string | null;
	}

	export interface CreateDeliveryStreamInput {
		DeliveryStreamName: string;
		DeliveryStreamType?: CreateDeliveryStreamInputDeliveryStreamType | null;

		/** The stream and role Amazon Resource Names (ARNs) for a Kinesis data stream used as the source for a delivery stream. */
		KinesisStreamSourceConfiguration?: KinesisStreamSourceConfiguration | null;

		/** Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE). */
		DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput | null;

		/** Describes the configuration of a destination in Amazon S3. */
		S3DestinationConfiguration?: S3DestinationConfiguration | null;

		/** Describes the configuration of a destination in Amazon S3. */
		ExtendedS3DestinationConfiguration?: ExtendedS3DestinationConfiguration | null;

		/** Describes the configuration of a destination in Amazon Redshift. */
		RedshiftDestinationConfiguration?: RedshiftDestinationConfiguration | null;

		/** Describes the configuration of a destination in Amazon ES. */
		ElasticsearchDestinationConfiguration?: ElasticsearchDestinationConfiguration | null;

		/** Describes the configuration of a destination in Splunk. */
		SplunkDestinationConfiguration?: SplunkDestinationConfiguration | null;
		Tags?: Array<Tag> | null;
	}

	export enum CreateDeliveryStreamInputDeliveryStreamType { DirectPut = 0, KinesisStreamAsSource = 1 }


	/** The stream and role Amazon Resource Names (ARNs) for a Kinesis data stream used as the source for a delivery stream. */
	export interface KinesisStreamSourceConfiguration {
		KinesisStreamARN: string;
		RoleARN: string;
	}


	/** Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE).  */
	export interface DeliveryStreamEncryptionConfigurationInput {
		KeyARN?: string | null;
		KeyType: DeliveryStreamEncryptionConfigurationInputKeyType;
	}

	export enum DeliveryStreamEncryptionConfigurationInputKeyType { AWS_OWNED_CMK = 0, CUSTOMER_MANAGED_CMK = 1 }


	/** Describes the configuration of a destination in Amazon S3. */
	export interface S3DestinationConfiguration {
		RoleARN: string;
		BucketARN: string;
		Prefix?: string | null;
		ErrorOutputPrefix?: string | null;

		/** Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Kinesis Data Firehose might choose to use different values when it is optimal. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other. */
		BufferingHints?: BufferingHints | null;
		CompressionFormat?: S3DestinationConfigurationCompressionFormat | null;

		/** Describes the encryption for a destination in Amazon S3. */
		EncryptionConfiguration?: EncryptionConfiguration | null;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions | null;
	}


	/** Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Kinesis Data Firehose might choose to use different values when it is optimal. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other. */
	export interface BufferingHints {
		SizeInMBs?: number | null;
		IntervalInSeconds?: number | null;
	}

	export enum S3DestinationConfigurationCompressionFormat { UNCOMPRESSED = 0, GZIP = 1, ZIP = 2, Snappy = 3, HADOOP_SNAPPY = 4 }


	/** Describes the encryption for a destination in Amazon S3. */
	export interface EncryptionConfiguration {
		NoEncryptionConfig?: EncryptionConfigurationNoEncryptionConfig | null;

		/** Describes an encryption key for a destination in Amazon S3. */
		KMSEncryptionConfig?: KMSEncryptionConfig | null;
	}

	export enum EncryptionConfigurationNoEncryptionConfig { NoEncryption = 0 }


	/** Describes an encryption key for a destination in Amazon S3. */
	export interface KMSEncryptionConfig {
		AWSKMSKeyARN: string;
	}


	/** Describes the Amazon CloudWatch logging options for your delivery stream. */
	export interface CloudWatchLoggingOptions {
		Enabled?: boolean | null;
		LogGroupName?: string | null;
		LogStreamName?: string | null;
	}


	/** Describes the configuration of a destination in Amazon S3. */
	export interface ExtendedS3DestinationConfiguration {
		RoleARN: string;
		BucketARN: string;
		Prefix?: string | null;
		ErrorOutputPrefix?: string | null;

		/** Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Kinesis Data Firehose might choose to use different values when it is optimal. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other. */
		BufferingHints?: BufferingHints | null;
		CompressionFormat?: S3DestinationConfigurationCompressionFormat | null;

		/** Describes the encryption for a destination in Amazon S3. */
		EncryptionConfiguration?: EncryptionConfiguration | null;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions | null;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration | null;
		S3BackupMode?: ExtendedS3DestinationConfigurationS3BackupMode | null;

		/** Describes the configuration of a destination in Amazon S3. */
		S3BackupConfiguration?: S3DestinationConfiguration | null;

		/** Specifies that you want Kinesis Data Firehose to convert data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. Kinesis Data Firehose uses the serializer and deserializer that you specify, in addition to the column information from the AWS Glue table, to deserialize your input data from JSON and then serialize it to the Parquet or ORC format. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html">Kinesis Data Firehose Record Format Conversion</a>. */
		DataFormatConversionConfiguration?: DataFormatConversionConfiguration | null;
	}


	/** Describes a data processing configuration. */
	export interface ProcessingConfiguration {
		Enabled?: boolean | null;
		Processors?: Array<Processor> | null;
	}


	/** Describes a data processor. */
	export interface Processor {
		Type: ProcessorType;
		Parameters?: Array<ProcessorParameter> | null;
	}

	export enum ProcessorType { Lambda = 0 }


	/** Describes the processor parameter. */
	export interface ProcessorParameter {
		ParameterName: ProcessorParameterParameterName;
		ParameterValue: string;
	}

	export enum ProcessorParameterParameterName { LambdaArn = 0, NumberOfRetries = 1, RoleArn = 2, BufferSizeInMBs = 3, BufferIntervalInSeconds = 4 }

	export enum ExtendedS3DestinationConfigurationS3BackupMode { Disabled = 0, Enabled = 1 }


	/** Specifies that you want Kinesis Data Firehose to convert data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. Kinesis Data Firehose uses the serializer and deserializer that you specify, in addition to the column information from the AWS Glue table, to deserialize your input data from JSON and then serialize it to the Parquet or ORC format. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html">Kinesis Data Firehose Record Format Conversion</a>. */
	export interface DataFormatConversionConfiguration {

		/** Specifies the schema to which you want Kinesis Data Firehose to configure your data before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set to true. */
		SchemaConfiguration?: SchemaConfiguration | null;

		/** Specifies the deserializer you want to use to convert the format of the input data. This parameter is required if <code>Enabled</code> is set to true. */
		InputFormatConfiguration?: InputFormatConfiguration | null;

		/** Specifies the serializer that you want Kinesis Data Firehose to use to convert the format of your data before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set to true. */
		OutputFormatConfiguration?: OutputFormatConfiguration | null;
		Enabled?: boolean | null;
	}


	/** Specifies the schema to which you want Kinesis Data Firehose to configure your data before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set to true. */
	export interface SchemaConfiguration {
		RoleARN?: string | null;
		CatalogId?: string | null;
		DatabaseName?: string | null;
		TableName?: string | null;
		Region?: string | null;
		VersionId?: string | null;
	}


	/** Specifies the deserializer you want to use to convert the format of the input data. This parameter is required if <code>Enabled</code> is set to true. */
	export interface InputFormatConfiguration {

		/** The deserializer you want Kinesis Data Firehose to use for converting the input data from JSON. Kinesis Data Firehose then serializes the data to its final format using the <a>Serializer</a>. Kinesis Data Firehose supports two types of deserializers: the <a href="https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-JSON">Apache Hive JSON SerDe</a> and the <a href="https://github.com/rcongiu/Hive-JSON-Serde">OpenX JSON SerDe</a>. */
		Deserializer?: Deserializer | null;
	}


	/** The deserializer you want Kinesis Data Firehose to use for converting the input data from JSON. Kinesis Data Firehose then serializes the data to its final format using the <a>Serializer</a>. Kinesis Data Firehose supports two types of deserializers: the <a href="https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-JSON">Apache Hive JSON SerDe</a> and the <a href="https://github.com/rcongiu/Hive-JSON-Serde">OpenX JSON SerDe</a>. */
	export interface Deserializer {

		/** The OpenX SerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the native Hive / HCatalog JsonSerDe. */
		OpenXJsonSerDe?: OpenXJsonSerDe | null;

		/** The native Hive / HCatalog JsonSerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the OpenX SerDe. */
		HiveJsonSerDe?: HiveJsonSerDe | null;
	}


	/** The OpenX SerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the native Hive / HCatalog JsonSerDe. */
	export interface OpenXJsonSerDe {
		ConvertDotsInJsonKeysToUnderscores?: boolean | null;
		CaseInsensitive?: boolean | null;
		ColumnToJsonKeyMappings?: ColumnToJsonKeyMappings | null;
	}

	export interface ColumnToJsonKeyMappings {
	}


	/** The native Hive / HCatalog JsonSerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the OpenX SerDe. */
	export interface HiveJsonSerDe {
		TimestampFormats?: Array<string> | null;
	}


	/** Specifies the serializer that you want Kinesis Data Firehose to use to convert the format of your data before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set to true. */
	export interface OutputFormatConfiguration {

		/** The serializer that you want Kinesis Data Firehose to use to convert data to the target format before writing it to Amazon S3. Kinesis Data Firehose supports two types of serializers: the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/orc/OrcSerde.html">ORC SerDe</a> and the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/parquet/serde/ParquetHiveSerDe.html">Parquet SerDe</a>. */
		Serializer?: Serializer | null;
	}


	/** The serializer that you want Kinesis Data Firehose to use to convert data to the target format before writing it to Amazon S3. Kinesis Data Firehose supports two types of serializers: the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/orc/OrcSerde.html">ORC SerDe</a> and the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/parquet/serde/ParquetHiveSerDe.html">Parquet SerDe</a>. */
	export interface Serializer {

		/** A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see <a href="https://parquet.apache.org/documentation/latest/">Apache Parquet</a>. */
		ParquetSerDe?: ParquetSerDe | null;

		/** A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see <a href="https://orc.apache.org/docs/">Apache ORC</a>. */
		OrcSerDe?: OrcSerDe | null;
	}


	/** A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see <a href="https://parquet.apache.org/documentation/latest/">Apache Parquet</a>. */
	export interface ParquetSerDe {
		BlockSizeBytes?: number | null;
		PageSizeBytes?: number | null;
		Compression?: ParquetSerDeCompression | null;
		EnableDictionaryCompression?: boolean | null;
		MaxPaddingBytes?: number | null;
		WriterVersion?: ParquetSerDeWriterVersion | null;
	}

	export enum ParquetSerDeCompression { UNCOMPRESSED = 0, GZIP = 1, SNAPPY = 2 }

	export enum ParquetSerDeWriterVersion { V1 = 0, V2 = 1 }


	/** A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see <a href="https://orc.apache.org/docs/">Apache ORC</a>. */
	export interface OrcSerDe {
		StripeSizeBytes?: number | null;
		BlockSizeBytes?: number | null;
		RowIndexStride?: number | null;
		EnablePadding?: boolean | null;
		PaddingTolerance?: number | null;
		Compression?: OrcSerDeCompression | null;
		BloomFilterColumns?: Array<string> | null;
		BloomFilterFalsePositiveProbability?: number | null;
		DictionaryKeyThreshold?: number | null;
		FormatVersion?: OrcSerDeFormatVersion | null;
	}

	export enum OrcSerDeCompression { NONE = 0, ZLIB = 1, SNAPPY = 2 }

	export enum OrcSerDeFormatVersion { V0_11 = 0, V0_12 = 1 }


	/** Describes the configuration of a destination in Amazon Redshift. */
	export interface RedshiftDestinationConfiguration {
		RoleARN: string;
		ClusterJDBCURL: string;

		/**
		 * Describes a <code>COPY</code> command for Amazon Redshift.
		 * Required
		 */
		CopyCommand: CopyCommand;
		Username: string;
		Password: string;

		/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift. */
		RetryOptions?: RedshiftRetryOptions | null;

		/**
		 * Describes the configuration of a destination in Amazon S3.
		 * Required
		 */
		S3Configuration: S3DestinationConfiguration;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration | null;
		S3BackupMode?: ExtendedS3DestinationConfigurationS3BackupMode | null;

		/** Describes the configuration of a destination in Amazon S3. */
		S3BackupConfiguration?: S3DestinationConfiguration | null;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions | null;
	}


	/** Describes a <code>COPY</code> command for Amazon Redshift. */
	export interface CopyCommand {
		DataTableName: string;
		DataTableColumns?: string | null;
		CopyOptions?: string | null;
	}


	/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift. */
	export interface RedshiftRetryOptions {
		DurationInSeconds?: number | null;
	}


	/** Describes the configuration of a destination in Amazon ES. */
	export interface ElasticsearchDestinationConfiguration {
		RoleARN: string;
		DomainARN?: string | null;
		ClusterEndpoint?: string | null;
		IndexName: string;
		TypeName?: string | null;
		IndexRotationPeriod?: ElasticsearchDestinationConfigurationIndexRotationPeriod | null;

		/** Describes the buffering to perform before delivering data to the Amazon ES destination. */
		BufferingHints?: ElasticsearchBufferingHints | null;

		/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon ES. */
		RetryOptions?: ElasticsearchRetryOptions | null;
		S3BackupMode?: ElasticsearchDestinationConfigurationS3BackupMode | null;

		/**
		 * Describes the configuration of a destination in Amazon S3.
		 * Required
		 */
		S3Configuration: S3DestinationConfiguration;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration | null;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions | null;

		/** The details of the VPC of the Amazon ES destination. */
		VpcConfiguration?: VpcConfiguration | null;
	}

	export enum ElasticsearchDestinationConfigurationIndexRotationPeriod { NoRotation = 0, OneHour = 1, OneDay = 2, OneWeek = 3, OneMonth = 4 }


	/** Describes the buffering to perform before delivering data to the Amazon ES destination. */
	export interface ElasticsearchBufferingHints {
		IntervalInSeconds?: number | null;
		SizeInMBs?: number | null;
	}


	/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon ES. */
	export interface ElasticsearchRetryOptions {
		DurationInSeconds?: number | null;
	}

	export enum ElasticsearchDestinationConfigurationS3BackupMode { FailedDocumentsOnly = 0, AllDocuments = 1 }


	/** The details of the VPC of the Amazon ES destination. */
	export interface VpcConfiguration {
		SubnetIds: Array<string>;
		RoleARN: string;
		SecurityGroupIds: Array<string>;
	}


	/** Describes the configuration of a destination in Splunk. */
	export interface SplunkDestinationConfiguration {
		HECEndpoint: string;
		HECEndpointType: SplunkDestinationConfigurationHECEndpointType;
		HECToken: string;
		HECAcknowledgmentTimeoutInSeconds?: number | null;

		/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Splunk, or if it doesn't receive an acknowledgment from Splunk. */
		RetryOptions?: SplunkRetryOptions | null;
		S3BackupMode?: SplunkDestinationConfigurationS3BackupMode | null;

		/**
		 * Describes the configuration of a destination in Amazon S3.
		 * Required
		 */
		S3Configuration: S3DestinationConfiguration;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration | null;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions | null;
	}

	export enum SplunkDestinationConfigurationHECEndpointType { Raw = 0, Event = 1 }


	/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Splunk, or if it doesn't receive an acknowledgment from Splunk. */
	export interface SplunkRetryOptions {
		DurationInSeconds?: number | null;
	}

	export enum SplunkDestinationConfigurationS3BackupMode { FailedEventsOnly = 0, AllEvents = 1 }


	/** Metadata that you can assign to a delivery stream, consisting of a key-value pair. */
	export interface Tag {
		Key: string;
		Value?: string | null;
	}

	export interface InvalidArgumentException {
	}

	export interface LimitExceededException {
	}

	export interface ResourceInUseException {
	}

	export interface InvalidKMSResourceException {
	}

	export interface DeleteDeliveryStreamOutput {
	}

	export interface DeleteDeliveryStreamInput {
		DeliveryStreamName: string;
		AllowForceDelete?: boolean | null;
	}

	export interface ResourceNotFoundException {
	}

	export interface DescribeDeliveryStreamOutput {

		/**
		 * Contains information about a delivery stream.
		 * Required
		 */
		DeliveryStreamDescription: DeliveryStreamDescription;
	}


	/** Contains information about a delivery stream. */
	export interface DeliveryStreamDescription {
		DeliveryStreamName: string;
		DeliveryStreamARN: string;
		DeliveryStreamStatus: DeliveryStreamDescriptionDeliveryStreamStatus;

		/** Provides details in case one of the following operations fails due to an error related to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>, <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>. */
		FailureDescription?: FailureDescription | null;

		/** Contains information about the server-side encryption (SSE) status for the delivery stream, the type customer master key (CMK) in use, if any, and the ARN of the CMK. You can get <code>DeliveryStreamEncryptionConfiguration</code> by invoking the <a>DescribeDeliveryStream</a> operation. */
		DeliveryStreamEncryptionConfiguration?: DeliveryStreamEncryptionConfiguration | null;
		DeliveryStreamType: CreateDeliveryStreamInputDeliveryStreamType;
		VersionId: string;
		CreateTimestamp?: Date | null;
		LastUpdateTimestamp?: Date | null;

		/** Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream. */
		Source?: SourceDescription | null;
		Destinations: Array<DestinationDescription>;
		HasMoreDestinations: boolean;
	}

	export enum DeliveryStreamDescriptionDeliveryStreamStatus { CREATING = 0, CREATING_FAILED = 1, DELETING = 2, DELETING_FAILED = 3, ACTIVE = 4 }


	/** Provides details in case one of the following operations fails due to an error related to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>, <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>. */
	export interface FailureDescription {
		Type: FailureDescriptionType;
		Details: string;
	}

	export enum FailureDescriptionType { RETIRE_KMS_GRANT_FAILED = 0, CREATE_KMS_GRANT_FAILED = 1, KMS_ACCESS_DENIED = 2, DISABLED_KMS_KEY = 3, INVALID_KMS_KEY = 4, KMS_KEY_NOT_FOUND = 5, KMS_OPT_IN_REQUIRED = 6, CREATE_ENI_FAILED = 7, DELETE_ENI_FAILED = 8, SUBNET_NOT_FOUND = 9, SECURITY_GROUP_NOT_FOUND = 10, ENI_ACCESS_DENIED = 11, SUBNET_ACCESS_DENIED = 12, SECURITY_GROUP_ACCESS_DENIED = 13, UNKNOWN_ERROR = 14 }


	/** Contains information about the server-side encryption (SSE) status for the delivery stream, the type customer master key (CMK) in use, if any, and the ARN of the CMK. You can get <code>DeliveryStreamEncryptionConfiguration</code> by invoking the <a>DescribeDeliveryStream</a> operation.  */
	export interface DeliveryStreamEncryptionConfiguration {
		KeyARN?: string | null;
		KeyType?: DeliveryStreamEncryptionConfigurationInputKeyType | null;
		Status?: DeliveryStreamEncryptionConfigurationStatus | null;

		/** Provides details in case one of the following operations fails due to an error related to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>, <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>. */
		FailureDescription?: FailureDescription | null;
	}

	export enum DeliveryStreamEncryptionConfigurationStatus { ENABLED = 0, ENABLING = 1, ENABLING_FAILED = 2, DISABLED = 3, DISABLING = 4, DISABLING_FAILED = 5 }


	/** Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream. */
	export interface SourceDescription {

		/** Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream. */
		KinesisStreamSourceDescription?: KinesisStreamSourceDescription | null;
	}


	/** Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream. */
	export interface KinesisStreamSourceDescription {
		KinesisStreamARN?: string | null;
		RoleARN?: string | null;
		DeliveryStartTimestamp?: Date | null;
	}


	/** Describes the destination for a delivery stream. */
	export interface DestinationDescription {
		DestinationId: string;

		/** Describes a destination in Amazon S3. */
		S3DestinationDescription?: S3DestinationDescription | null;

		/** Describes a destination in Amazon S3. */
		ExtendedS3DestinationDescription?: ExtendedS3DestinationDescription | null;

		/** Describes a destination in Amazon Redshift. */
		RedshiftDestinationDescription?: RedshiftDestinationDescription | null;

		/** The destination description in Amazon ES. */
		ElasticsearchDestinationDescription?: ElasticsearchDestinationDescription | null;

		/** Describes a destination in Splunk. */
		SplunkDestinationDescription?: SplunkDestinationDescription | null;
	}


	/** Describes a destination in Amazon S3. */
	export interface S3DestinationDescription {
		RoleARN: string;
		BucketARN: string;
		Prefix?: string | null;
		ErrorOutputPrefix?: string | null;

		/**
		 * Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Kinesis Data Firehose might choose to use different values when it is optimal. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other.
		 * Required
		 */
		BufferingHints: BufferingHints;
		CompressionFormat: S3DestinationConfigurationCompressionFormat;

		/**
		 * Describes the encryption for a destination in Amazon S3.
		 * Required
		 */
		EncryptionConfiguration: EncryptionConfiguration;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions | null;
	}


	/** Describes a destination in Amazon S3. */
	export interface ExtendedS3DestinationDescription {
		RoleARN: string;
		BucketARN: string;
		Prefix?: string | null;
		ErrorOutputPrefix?: string | null;

		/**
		 * Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Kinesis Data Firehose might choose to use different values when it is optimal. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other.
		 * Required
		 */
		BufferingHints: BufferingHints;
		CompressionFormat: S3DestinationConfigurationCompressionFormat;

		/**
		 * Describes the encryption for a destination in Amazon S3.
		 * Required
		 */
		EncryptionConfiguration: EncryptionConfiguration;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions | null;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration | null;
		S3BackupMode?: ExtendedS3DestinationConfigurationS3BackupMode | null;

		/** Describes a destination in Amazon S3. */
		S3BackupDescription?: S3DestinationDescription | null;

		/** Specifies that you want Kinesis Data Firehose to convert data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. Kinesis Data Firehose uses the serializer and deserializer that you specify, in addition to the column information from the AWS Glue table, to deserialize your input data from JSON and then serialize it to the Parquet or ORC format. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html">Kinesis Data Firehose Record Format Conversion</a>. */
		DataFormatConversionConfiguration?: DataFormatConversionConfiguration | null;
	}


	/** Describes a destination in Amazon Redshift. */
	export interface RedshiftDestinationDescription {
		RoleARN: string;
		ClusterJDBCURL: string;

		/**
		 * Describes a <code>COPY</code> command for Amazon Redshift.
		 * Required
		 */
		CopyCommand: CopyCommand;
		Username: string;

		/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift. */
		RetryOptions?: RedshiftRetryOptions | null;

		/**
		 * Describes a destination in Amazon S3.
		 * Required
		 */
		S3DestinationDescription: S3DestinationDescription;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration | null;
		S3BackupMode?: ExtendedS3DestinationConfigurationS3BackupMode | null;

		/** Describes a destination in Amazon S3. */
		S3BackupDescription?: S3DestinationDescription | null;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions | null;
	}


	/** The destination description in Amazon ES. */
	export interface ElasticsearchDestinationDescription {
		RoleARN?: string | null;
		DomainARN?: string | null;
		ClusterEndpoint?: string | null;
		IndexName?: string | null;
		TypeName?: string | null;
		IndexRotationPeriod?: ElasticsearchDestinationConfigurationIndexRotationPeriod | null;

		/** Describes the buffering to perform before delivering data to the Amazon ES destination. */
		BufferingHints?: ElasticsearchBufferingHints | null;

		/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon ES. */
		RetryOptions?: ElasticsearchRetryOptions | null;
		S3BackupMode?: ElasticsearchDestinationConfigurationS3BackupMode | null;

		/** Describes a destination in Amazon S3. */
		S3DestinationDescription?: S3DestinationDescription | null;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration | null;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions | null;

		/** The details of the VPC of the Amazon ES destination. */
		VpcConfigurationDescription?: VpcConfigurationDescription | null;
	}


	/** The details of the VPC of the Amazon ES destination. */
	export interface VpcConfigurationDescription {
		SubnetIds: Array<string>;
		RoleARN: string;
		SecurityGroupIds: Array<string>;
		VpcId: string;
	}


	/** Describes a destination in Splunk. */
	export interface SplunkDestinationDescription {
		HECEndpoint?: string | null;
		HECEndpointType?: SplunkDestinationConfigurationHECEndpointType | null;
		HECToken?: string | null;
		HECAcknowledgmentTimeoutInSeconds?: number | null;

		/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Splunk, or if it doesn't receive an acknowledgment from Splunk. */
		RetryOptions?: SplunkRetryOptions | null;
		S3BackupMode?: SplunkDestinationConfigurationS3BackupMode | null;

		/** Describes a destination in Amazon S3. */
		S3DestinationDescription?: S3DestinationDescription | null;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration | null;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions | null;
	}

	export interface DescribeDeliveryStreamInput {
		DeliveryStreamName: string;
		Limit?: number | null;
		ExclusiveStartDestinationId?: string | null;
	}

	export interface ListDeliveryStreamsOutput {
		DeliveryStreamNames: Array<string>;
		HasMoreDeliveryStreams: boolean;
	}

	export interface ListDeliveryStreamsInput {
		Limit?: number | null;
		DeliveryStreamType?: CreateDeliveryStreamInputDeliveryStreamType | null;
		ExclusiveStartDeliveryStreamName?: string | null;
	}

	export interface ListTagsForDeliveryStreamOutput {
		Tags: Array<Tag>;
		HasMoreTags: boolean;
	}

	export interface ListTagsForDeliveryStreamInput {
		DeliveryStreamName: string;
		ExclusiveStartTagKey?: string | null;
		Limit?: number | null;
	}

	export interface PutRecordOutput {
		RecordId: string;
		Encrypted?: boolean | null;
	}

	export interface PutRecordInput {
		DeliveryStreamName: string;

		/**
		 * The unit of data in a delivery stream.
		 * Required
		 */
		Record: Record;
	}


	/** The unit of data in a delivery stream. */
	export interface Record {
		Data: string;
	}

	export interface ServiceUnavailableException {
	}

	export interface PutRecordBatchOutput {
		FailedPutCount: number;
		Encrypted?: boolean | null;
		RequestResponses: Array<PutRecordBatchResponseEntry>;
	}


	/** Contains the result for an individual record from a <a>PutRecordBatch</a> request. If the record is successfully added to your delivery stream, it receives a record ID. If the record fails to be added to your delivery stream, the result includes an error code and an error message. */
	export interface PutRecordBatchResponseEntry {
		RecordId?: string | null;
		ErrorCode?: string | null;
		ErrorMessage?: string | null;
	}

	export interface PutRecordBatchInput {
		DeliveryStreamName: string;
		Records: Array<Record>;
	}

	export interface StartDeliveryStreamEncryptionOutput {
	}

	export interface StartDeliveryStreamEncryptionInput {
		DeliveryStreamName: string;

		/** Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE). */
		DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput | null;
	}

	export interface StopDeliveryStreamEncryptionOutput {
	}

	export interface StopDeliveryStreamEncryptionInput {
		DeliveryStreamName: string;
	}

	export interface TagDeliveryStreamOutput {
	}

	export interface TagDeliveryStreamInput {
		DeliveryStreamName: string;
		Tags: Array<Tag>;
	}

	export interface UntagDeliveryStreamOutput {
	}

	export interface UntagDeliveryStreamInput {
		DeliveryStreamName: string;
		TagKeys: Array<string>;
	}

	export interface UpdateDestinationOutput {
	}

	export interface UpdateDestinationInput {
		DeliveryStreamName: string;
		CurrentDeliveryStreamVersionId: string;
		DestinationId: string;

		/** Describes an update for a destination in Amazon S3. */
		S3DestinationUpdate?: S3DestinationUpdate | null;

		/** Describes an update for a destination in Amazon S3. */
		ExtendedS3DestinationUpdate?: ExtendedS3DestinationUpdate | null;

		/** Describes an update for a destination in Amazon Redshift. */
		RedshiftDestinationUpdate?: RedshiftDestinationUpdate | null;

		/** Describes an update for a destination in Amazon ES. */
		ElasticsearchDestinationUpdate?: ElasticsearchDestinationUpdate | null;

		/** Describes an update for a destination in Splunk. */
		SplunkDestinationUpdate?: SplunkDestinationUpdate | null;
	}


	/** Describes an update for a destination in Amazon S3. */
	export interface S3DestinationUpdate {
		RoleARN?: string | null;
		BucketARN?: string | null;
		Prefix?: string | null;
		ErrorOutputPrefix?: string | null;

		/** Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Kinesis Data Firehose might choose to use different values when it is optimal. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other. */
		BufferingHints?: BufferingHints | null;
		CompressionFormat?: S3DestinationConfigurationCompressionFormat | null;

		/** Describes the encryption for a destination in Amazon S3. */
		EncryptionConfiguration?: EncryptionConfiguration | null;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions | null;
	}


	/** Describes an update for a destination in Amazon S3. */
	export interface ExtendedS3DestinationUpdate {
		RoleARN?: string | null;
		BucketARN?: string | null;
		Prefix?: string | null;
		ErrorOutputPrefix?: string | null;

		/** Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Kinesis Data Firehose might choose to use different values when it is optimal. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other. */
		BufferingHints?: BufferingHints | null;
		CompressionFormat?: S3DestinationConfigurationCompressionFormat | null;

		/** Describes the encryption for a destination in Amazon S3. */
		EncryptionConfiguration?: EncryptionConfiguration | null;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions | null;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration | null;
		S3BackupMode?: ExtendedS3DestinationConfigurationS3BackupMode | null;

		/** Describes an update for a destination in Amazon S3. */
		S3BackupUpdate?: S3DestinationUpdate | null;

		/** Specifies that you want Kinesis Data Firehose to convert data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. Kinesis Data Firehose uses the serializer and deserializer that you specify, in addition to the column information from the AWS Glue table, to deserialize your input data from JSON and then serialize it to the Parquet or ORC format. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html">Kinesis Data Firehose Record Format Conversion</a>. */
		DataFormatConversionConfiguration?: DataFormatConversionConfiguration | null;
	}


	/** Describes an update for a destination in Amazon Redshift. */
	export interface RedshiftDestinationUpdate {
		RoleARN?: string | null;
		ClusterJDBCURL?: string | null;

		/** Describes a <code>COPY</code> command for Amazon Redshift. */
		CopyCommand?: CopyCommand | null;
		Username?: string | null;
		Password?: string | null;

		/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift. */
		RetryOptions?: RedshiftRetryOptions | null;

		/** Describes an update for a destination in Amazon S3. */
		S3Update?: S3DestinationUpdate | null;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration | null;
		S3BackupMode?: ExtendedS3DestinationConfigurationS3BackupMode | null;

		/** Describes an update for a destination in Amazon S3. */
		S3BackupUpdate?: S3DestinationUpdate | null;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions | null;
	}


	/** Describes an update for a destination in Amazon ES. */
	export interface ElasticsearchDestinationUpdate {
		RoleARN?: string | null;
		DomainARN?: string | null;
		ClusterEndpoint?: string | null;
		IndexName?: string | null;
		TypeName?: string | null;
		IndexRotationPeriod?: ElasticsearchDestinationConfigurationIndexRotationPeriod | null;

		/** Describes the buffering to perform before delivering data to the Amazon ES destination. */
		BufferingHints?: ElasticsearchBufferingHints | null;

		/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon ES. */
		RetryOptions?: ElasticsearchRetryOptions | null;

		/** Describes an update for a destination in Amazon S3. */
		S3Update?: S3DestinationUpdate | null;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration | null;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions | null;
	}


	/** Describes an update for a destination in Splunk. */
	export interface SplunkDestinationUpdate {
		HECEndpoint?: string | null;
		HECEndpointType?: SplunkDestinationConfigurationHECEndpointType | null;
		HECToken?: string | null;
		HECAcknowledgmentTimeoutInSeconds?: number | null;

		/** Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Splunk, or if it doesn't receive an acknowledgment from Splunk. */
		RetryOptions?: SplunkRetryOptions | null;
		S3BackupMode?: SplunkDestinationConfigurationS3BackupMode | null;

		/** Describes an update for a destination in Amazon S3. */
		S3Update?: S3DestinationUpdate | null;

		/** Describes a data processing configuration. */
		ProcessingConfiguration?: ProcessingConfiguration | null;

		/** Describes the Amazon CloudWatch logging options for your delivery stream. */
		CloudWatchLoggingOptions?: CloudWatchLoggingOptions | null;
	}

	export interface ConcurrentModificationException {
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

	export enum CreateDeliveryStreamX_Amz_Target { Firehose_20150804_CreateDeliveryStream = 0 }

	export enum DeleteDeliveryStreamX_Amz_Target { Firehose_20150804_DeleteDeliveryStream = 0 }

	export enum DescribeDeliveryStreamX_Amz_Target { Firehose_20150804_DescribeDeliveryStream = 0 }

	export enum ListDeliveryStreamsX_Amz_Target { Firehose_20150804_ListDeliveryStreams = 0 }

	export enum ListTagsForDeliveryStreamX_Amz_Target { Firehose_20150804_ListTagsForDeliveryStream = 0 }

	export enum PutRecordX_Amz_Target { Firehose_20150804_PutRecord = 0 }

	export enum PutRecordBatchX_Amz_Target { Firehose_20150804_PutRecordBatch = 0 }

	export enum StartDeliveryStreamEncryptionX_Amz_Target { Firehose_20150804_StartDeliveryStreamEncryption = 0 }

	export enum StopDeliveryStreamEncryptionX_Amz_Target { Firehose_20150804_StopDeliveryStreamEncryption = 0 }

	export enum TagDeliveryStreamX_Amz_Target { Firehose_20150804_TagDeliveryStream = 0 }

	export enum UntagDeliveryStreamX_Amz_Target { Firehose_20150804_UntagDeliveryStream = 0 }

	export enum UpdateDestinationX_Amz_Target { Firehose_20150804_UpdateDestination = 0 }

}

