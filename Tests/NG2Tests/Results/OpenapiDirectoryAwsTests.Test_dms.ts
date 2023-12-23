import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** <p/> */
	export interface AddTagsToResourceResponse {
	}

	/** <p/> */
	export interface AddTagsToResourceResponseFormProperties {
	}
	export function CreateAddTagsToResourceResponseFormGroup() {
		return new FormGroup<AddTagsToResourceResponseFormProperties>({
		});

	}


	/** Associates a set of tags with an AWS DMS resource. */
	export interface AddTagsToResourceMessage {

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: Array<Tag>;
	}

	/** Associates a set of tags with an AWS DMS resource. */
	export interface AddTagsToResourceMessageFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateAddTagsToResourceMessageFormGroup() {
		return new FormGroup<AddTagsToResourceMessageFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A user-defined key-value pair that describes metadata added to an AWS DMS resource and that is used by operations such as the following:</p> <ul> <li> <p> <code>AddTagsToResource</code> </p> </li> <li> <p> <code>ListTagsForResource</code> </p> </li> <li> <p> <code>RemoveTagsFromResource</code> </p> </li> </ul> */
	export interface Tag {
		Key?: string | null;
		Value?: string | null;
	}

	/** <p>A user-defined key-value pair that describes metadata added to an AWS DMS resource and that is used by operations such as the following:</p> <ul> <li> <p> <code>AddTagsToResource</code> </p> </li> <li> <p> <code>ListTagsForResource</code> </p> </li> <li> <p> <code>RemoveTagsFromResource</code> </p> </li> </ul> */
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

	export interface ResourceNotFoundFault {
	}
	export interface ResourceNotFoundFaultFormProperties {
	}
	export function CreateResourceNotFoundFaultFormGroup() {
		return new FormGroup<ResourceNotFoundFaultFormProperties>({
		});

	}


	/** <p/> */
	export interface ApplyPendingMaintenanceActionResponse {

		/** Identifies an AWS DMS resource and any pending actions for it. */
		ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
	}

	/** <p/> */
	export interface ApplyPendingMaintenanceActionResponseFormProperties {
	}
	export function CreateApplyPendingMaintenanceActionResponseFormGroup() {
		return new FormGroup<ApplyPendingMaintenanceActionResponseFormProperties>({
		});

	}


	/** Identifies an AWS DMS resource and any pending actions for it. */
	export interface ResourcePendingMaintenanceActions {
		ResourceIdentifier?: string | null;
		PendingMaintenanceActionDetails?: Array<PendingMaintenanceAction>;
	}

	/** Identifies an AWS DMS resource and any pending actions for it. */
	export interface ResourcePendingMaintenanceActionsFormProperties {
		ResourceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateResourcePendingMaintenanceActionsFormGroup() {
		return new FormGroup<ResourcePendingMaintenanceActionsFormProperties>({
			ResourceIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a maintenance action pending for an AWS DMS resource, including when and how it will be applied. This data type is a response element to the <code>DescribePendingMaintenanceActions</code> operation. */
	export interface PendingMaintenanceAction {
		Action?: string | null;
		AutoAppliedAfterDate?: Date | null;
		ForcedApplyDate?: Date | null;
		OptInStatus?: string | null;
		CurrentApplyDate?: Date | null;
		Description?: string | null;
	}

	/** Describes a maintenance action pending for an AWS DMS resource, including when and how it will be applied. This data type is a response element to the <code>DescribePendingMaintenanceActions</code> operation. */
	export interface PendingMaintenanceActionFormProperties {
		Action: FormControl<string | null | undefined>,
		AutoAppliedAfterDate: FormControl<Date | null | undefined>,
		ForcedApplyDate: FormControl<Date | null | undefined>,
		OptInStatus: FormControl<string | null | undefined>,
		CurrentApplyDate: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreatePendingMaintenanceActionFormGroup() {
		return new FormGroup<PendingMaintenanceActionFormProperties>({
			Action: new FormControl<string | null | undefined>(undefined),
			AutoAppliedAfterDate: new FormControl<Date | null | undefined>(undefined),
			ForcedApplyDate: new FormControl<Date | null | undefined>(undefined),
			OptInStatus: new FormControl<string | null | undefined>(undefined),
			CurrentApplyDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface ApplyPendingMaintenanceActionMessage {

		/** Required */
		ReplicationInstanceArn: string;

		/** Required */
		ApplyAction: string;

		/** Required */
		OptInType: string;
	}

	/** <p/> */
	export interface ApplyPendingMaintenanceActionMessageFormProperties {

		/** Required */
		ReplicationInstanceArn: FormControl<string | null | undefined>,

		/** Required */
		ApplyAction: FormControl<string | null | undefined>,

		/** Required */
		OptInType: FormControl<string | null | undefined>,
	}
	export function CreateApplyPendingMaintenanceActionMessageFormGroup() {
		return new FormGroup<ApplyPendingMaintenanceActionMessageFormProperties>({
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApplyAction: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OptInType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface CreateEndpointResponse {

		/** <p>Describes an endpoint of a database instance in response to operations such as the following:</p> <ul> <li> <p> <code>CreateEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpointTypes</code> </p> </li> <li> <p> <code>ModifyEndpoint</code> </p> </li> </ul> */
		Endpoint?: Endpoint;
	}

	/** <p/> */
	export interface CreateEndpointResponseFormProperties {
	}
	export function CreateCreateEndpointResponseFormGroup() {
		return new FormGroup<CreateEndpointResponseFormProperties>({
		});

	}


	/** <p>Describes an endpoint of a database instance in response to operations such as the following:</p> <ul> <li> <p> <code>CreateEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpointTypes</code> </p> </li> <li> <p> <code>ModifyEndpoint</code> </p> </li> </ul> */
	export interface Endpoint {
		EndpointIdentifier?: string | null;
		EndpointType?: EndpointEndpointType | null;
		EngineName?: string | null;
		EngineDisplayName?: string | null;
		Username?: string | null;
		ServerName?: string | null;
		Port?: number | null;
		DatabaseName?: string | null;
		ExtraConnectionAttributes?: string | null;
		Status?: string | null;
		KmsKeyId?: string | null;
		EndpointArn?: string | null;
		CertificateArn?: string | null;
		SslMode?: EndpointSslMode | null;
		ServiceAccessRoleArn?: string | null;
		ExternalTableDefinition?: string | null;
		ExternalId?: string | null;

		/** Provides the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role used to define an Amazon DynamoDB target endpoint. */
		DynamoDbSettings?: DynamoDbSettings;

		/** Settings for exporting data to Amazon S3. */
		S3Settings?: S3Settings;

		/** The settings in JSON format for the DMS Transfer type source endpoint. */
		DmsTransferSettings?: DmsTransferSettings;

		/** Provides information that defines a MongoDB endpoint. */
		MongoDbSettings?: MongoDbSettings;

		/** Provides information that describes an Amazon Kinesis Data Stream endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
		KinesisSettings?: KinesisSettings;

		/** Provides information that describes an Apache Kafka endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
		KafkaSettings?: KafkaSettings;

		/** Provides information that defines an Elasticsearch endpoint. */
		ElasticsearchSettings?: ElasticsearchSettings;

		/** Provides information that defines an Amazon Neptune endpoint. */
		NeptuneSettings?: NeptuneSettings;

		/** Provides information that defines an Amazon Redshift endpoint. */
		RedshiftSettings?: RedshiftSettings;
	}

	/** <p>Describes an endpoint of a database instance in response to operations such as the following:</p> <ul> <li> <p> <code>CreateEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpointTypes</code> </p> </li> <li> <p> <code>ModifyEndpoint</code> </p> </li> </ul> */
	export interface EndpointFormProperties {
		EndpointIdentifier: FormControl<string | null | undefined>,
		EndpointType: FormControl<EndpointEndpointType | null | undefined>,
		EngineName: FormControl<string | null | undefined>,
		EngineDisplayName: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		ServerName: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		ExtraConnectionAttributes: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		EndpointArn: FormControl<string | null | undefined>,
		CertificateArn: FormControl<string | null | undefined>,
		SslMode: FormControl<EndpointSslMode | null | undefined>,
		ServiceAccessRoleArn: FormControl<string | null | undefined>,
		ExternalTableDefinition: FormControl<string | null | undefined>,
		ExternalId: FormControl<string | null | undefined>,
	}
	export function CreateEndpointFormGroup() {
		return new FormGroup<EndpointFormProperties>({
			EndpointIdentifier: new FormControl<string | null | undefined>(undefined),
			EndpointType: new FormControl<EndpointEndpointType | null | undefined>(undefined),
			EngineName: new FormControl<string | null | undefined>(undefined),
			EngineDisplayName: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			ExtraConnectionAttributes: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			EndpointArn: new FormControl<string | null | undefined>(undefined),
			CertificateArn: new FormControl<string | null | undefined>(undefined),
			SslMode: new FormControl<EndpointSslMode | null | undefined>(undefined),
			ServiceAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			ExternalTableDefinition: new FormControl<string | null | undefined>(undefined),
			ExternalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EndpointEndpointType { source = 0, target = 1 }

	export enum EndpointSslMode { none = 0, require = 1, verify_ca = 2, verify_full = 3 }


	/** Provides the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role used to define an Amazon DynamoDB target endpoint. */
	export interface DynamoDbSettings {

		/** Required */
		ServiceAccessRoleArn: string;
	}

	/** Provides the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role used to define an Amazon DynamoDB target endpoint. */
	export interface DynamoDbSettingsFormProperties {

		/** Required */
		ServiceAccessRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateDynamoDbSettingsFormGroup() {
		return new FormGroup<DynamoDbSettingsFormProperties>({
			ServiceAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings for exporting data to Amazon S3.  */
	export interface S3Settings {
		ServiceAccessRoleArn?: string | null;
		ExternalTableDefinition?: string | null;
		CsvRowDelimiter?: string | null;
		CsvDelimiter?: string | null;
		BucketFolder?: string | null;
		BucketName?: string | null;
		CompressionType?: S3SettingsCompressionType | null;
		EncryptionMode?: S3SettingsEncryptionMode | null;
		ServerSideEncryptionKmsKeyId?: string | null;
		DataFormat?: S3SettingsDataFormat | null;
		EncodingType?: S3SettingsEncodingType | null;
		DictPageSizeLimit?: number | null;
		RowGroupLength?: number | null;
		DataPageSize?: number | null;
		ParquetVersion?: S3SettingsParquetVersion | null;
		EnableStatistics?: boolean | null;
		IncludeOpForFullLoad?: boolean | null;
		CdcInsertsOnly?: boolean | null;
		TimestampColumnName?: string | null;
		ParquetTimestampInMillisecond?: boolean | null;
		CdcInsertsAndUpdates?: boolean | null;
	}

	/** Settings for exporting data to Amazon S3.  */
	export interface S3SettingsFormProperties {
		ServiceAccessRoleArn: FormControl<string | null | undefined>,
		ExternalTableDefinition: FormControl<string | null | undefined>,
		CsvRowDelimiter: FormControl<string | null | undefined>,
		CsvDelimiter: FormControl<string | null | undefined>,
		BucketFolder: FormControl<string | null | undefined>,
		BucketName: FormControl<string | null | undefined>,
		CompressionType: FormControl<S3SettingsCompressionType | null | undefined>,
		EncryptionMode: FormControl<S3SettingsEncryptionMode | null | undefined>,
		ServerSideEncryptionKmsKeyId: FormControl<string | null | undefined>,
		DataFormat: FormControl<S3SettingsDataFormat | null | undefined>,
		EncodingType: FormControl<S3SettingsEncodingType | null | undefined>,
		DictPageSizeLimit: FormControl<number | null | undefined>,
		RowGroupLength: FormControl<number | null | undefined>,
		DataPageSize: FormControl<number | null | undefined>,
		ParquetVersion: FormControl<S3SettingsParquetVersion | null | undefined>,
		EnableStatistics: FormControl<boolean | null | undefined>,
		IncludeOpForFullLoad: FormControl<boolean | null | undefined>,
		CdcInsertsOnly: FormControl<boolean | null | undefined>,
		TimestampColumnName: FormControl<string | null | undefined>,
		ParquetTimestampInMillisecond: FormControl<boolean | null | undefined>,
		CdcInsertsAndUpdates: FormControl<boolean | null | undefined>,
	}
	export function CreateS3SettingsFormGroup() {
		return new FormGroup<S3SettingsFormProperties>({
			ServiceAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			ExternalTableDefinition: new FormControl<string | null | undefined>(undefined),
			CsvRowDelimiter: new FormControl<string | null | undefined>(undefined),
			CsvDelimiter: new FormControl<string | null | undefined>(undefined),
			BucketFolder: new FormControl<string | null | undefined>(undefined),
			BucketName: new FormControl<string | null | undefined>(undefined),
			CompressionType: new FormControl<S3SettingsCompressionType | null | undefined>(undefined),
			EncryptionMode: new FormControl<S3SettingsEncryptionMode | null | undefined>(undefined),
			ServerSideEncryptionKmsKeyId: new FormControl<string | null | undefined>(undefined),
			DataFormat: new FormControl<S3SettingsDataFormat | null | undefined>(undefined),
			EncodingType: new FormControl<S3SettingsEncodingType | null | undefined>(undefined),
			DictPageSizeLimit: new FormControl<number | null | undefined>(undefined),
			RowGroupLength: new FormControl<number | null | undefined>(undefined),
			DataPageSize: new FormControl<number | null | undefined>(undefined),
			ParquetVersion: new FormControl<S3SettingsParquetVersion | null | undefined>(undefined),
			EnableStatistics: new FormControl<boolean | null | undefined>(undefined),
			IncludeOpForFullLoad: new FormControl<boolean | null | undefined>(undefined),
			CdcInsertsOnly: new FormControl<boolean | null | undefined>(undefined),
			TimestampColumnName: new FormControl<string | null | undefined>(undefined),
			ParquetTimestampInMillisecond: new FormControl<boolean | null | undefined>(undefined),
			CdcInsertsAndUpdates: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum S3SettingsCompressionType { none = 0, gzip = 1 }

	export enum S3SettingsEncryptionMode { sse_s3 = 0, sse_kms = 1 }

	export enum S3SettingsDataFormat { csv = 0, parquet = 1 }

	export enum S3SettingsEncodingType { plain = 0, plain_dictionary = 1, rle_dictionary = 2 }

	export enum S3SettingsParquetVersion { parquet_1_0 = 0, parquet_2_0 = 1 }


	/**  The settings in JSON format for the DMS Transfer type source endpoint.  */
	export interface DmsTransferSettings {
		ServiceAccessRoleArn?: string | null;
		BucketName?: string | null;
	}

	/**  The settings in JSON format for the DMS Transfer type source endpoint.  */
	export interface DmsTransferSettingsFormProperties {
		ServiceAccessRoleArn: FormControl<string | null | undefined>,
		BucketName: FormControl<string | null | undefined>,
	}
	export function CreateDmsTransferSettingsFormGroup() {
		return new FormGroup<DmsTransferSettingsFormProperties>({
			ServiceAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			BucketName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information that defines a MongoDB endpoint. */
	export interface MongoDbSettings {
		Username?: string | null;
		Password?: string | null;
		ServerName?: string | null;
		Port?: number | null;
		DatabaseName?: string | null;
		AuthType?: MongoDbSettingsAuthType | null;
		AuthMechanism?: MongoDbSettingsAuthMechanism | null;
		NestingLevel?: MongoDbSettingsNestingLevel | null;
		ExtractDocId?: string | null;
		DocsToInvestigate?: string | null;
		AuthSource?: string | null;
		KmsKeyId?: string | null;
	}

	/** Provides information that defines a MongoDB endpoint. */
	export interface MongoDbSettingsFormProperties {
		Username: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
		ServerName: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		AuthType: FormControl<MongoDbSettingsAuthType | null | undefined>,
		AuthMechanism: FormControl<MongoDbSettingsAuthMechanism | null | undefined>,
		NestingLevel: FormControl<MongoDbSettingsNestingLevel | null | undefined>,
		ExtractDocId: FormControl<string | null | undefined>,
		DocsToInvestigate: FormControl<string | null | undefined>,
		AuthSource: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateMongoDbSettingsFormGroup() {
		return new FormGroup<MongoDbSettingsFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			AuthType: new FormControl<MongoDbSettingsAuthType | null | undefined>(undefined),
			AuthMechanism: new FormControl<MongoDbSettingsAuthMechanism | null | undefined>(undefined),
			NestingLevel: new FormControl<MongoDbSettingsNestingLevel | null | undefined>(undefined),
			ExtractDocId: new FormControl<string | null | undefined>(undefined),
			DocsToInvestigate: new FormControl<string | null | undefined>(undefined),
			AuthSource: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MongoDbSettingsAuthType { no = 0, password = 1 }

	export enum MongoDbSettingsAuthMechanism { _default = 0, mongodb_cr = 1, scram_sha_1 = 2 }

	export enum MongoDbSettingsNestingLevel { none = 0, one = 1 }


	/** Provides information that describes an Amazon Kinesis Data Stream endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
	export interface KinesisSettings {
		StreamArn?: string | null;
		MessageFormat?: KinesisSettingsMessageFormat | null;
		ServiceAccessRoleArn?: string | null;
		IncludeTransactionDetails?: boolean | null;
		IncludePartitionValue?: boolean | null;
		PartitionIncludeSchemaTable?: boolean | null;
		IncludeTableAlterOperations?: boolean | null;
		IncludeControlDetails?: boolean | null;
	}

	/** Provides information that describes an Amazon Kinesis Data Stream endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
	export interface KinesisSettingsFormProperties {
		StreamArn: FormControl<string | null | undefined>,
		MessageFormat: FormControl<KinesisSettingsMessageFormat | null | undefined>,
		ServiceAccessRoleArn: FormControl<string | null | undefined>,
		IncludeTransactionDetails: FormControl<boolean | null | undefined>,
		IncludePartitionValue: FormControl<boolean | null | undefined>,
		PartitionIncludeSchemaTable: FormControl<boolean | null | undefined>,
		IncludeTableAlterOperations: FormControl<boolean | null | undefined>,
		IncludeControlDetails: FormControl<boolean | null | undefined>,
	}
	export function CreateKinesisSettingsFormGroup() {
		return new FormGroup<KinesisSettingsFormProperties>({
			StreamArn: new FormControl<string | null | undefined>(undefined),
			MessageFormat: new FormControl<KinesisSettingsMessageFormat | null | undefined>(undefined),
			ServiceAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			IncludeTransactionDetails: new FormControl<boolean | null | undefined>(undefined),
			IncludePartitionValue: new FormControl<boolean | null | undefined>(undefined),
			PartitionIncludeSchemaTable: new FormControl<boolean | null | undefined>(undefined),
			IncludeTableAlterOperations: new FormControl<boolean | null | undefined>(undefined),
			IncludeControlDetails: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum KinesisSettingsMessageFormat { json = 0, json_unformatted = 1 }


	/** Provides information that describes an Apache Kafka endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
	export interface KafkaSettings {
		Broker?: string | null;
		Topic?: string | null;
	}

	/** Provides information that describes an Apache Kafka endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
	export interface KafkaSettingsFormProperties {
		Broker: FormControl<string | null | undefined>,
		Topic: FormControl<string | null | undefined>,
	}
	export function CreateKafkaSettingsFormGroup() {
		return new FormGroup<KafkaSettingsFormProperties>({
			Broker: new FormControl<string | null | undefined>(undefined),
			Topic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information that defines an Elasticsearch endpoint. */
	export interface ElasticsearchSettings {

		/** Required */
		ServiceAccessRoleArn: string;

		/** Required */
		EndpointUri: string;
		FullLoadErrorPercentage?: number | null;
		ErrorRetryDuration?: number | null;
	}

	/** Provides information that defines an Elasticsearch endpoint. */
	export interface ElasticsearchSettingsFormProperties {

		/** Required */
		ServiceAccessRoleArn: FormControl<string | null | undefined>,

		/** Required */
		EndpointUri: FormControl<string | null | undefined>,
		FullLoadErrorPercentage: FormControl<number | null | undefined>,
		ErrorRetryDuration: FormControl<number | null | undefined>,
	}
	export function CreateElasticsearchSettingsFormGroup() {
		return new FormGroup<ElasticsearchSettingsFormProperties>({
			ServiceAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EndpointUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FullLoadErrorPercentage: new FormControl<number | null | undefined>(undefined),
			ErrorRetryDuration: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information that defines an Amazon Neptune endpoint. */
	export interface NeptuneSettings {
		ServiceAccessRoleArn?: string | null;

		/** Required */
		S3BucketName: string;

		/** Required */
		S3BucketFolder: string;
		ErrorRetryDuration?: number | null;
		MaxFileSize?: number | null;
		MaxRetryCount?: number | null;
		IamAuthEnabled?: boolean | null;
	}

	/** Provides information that defines an Amazon Neptune endpoint. */
	export interface NeptuneSettingsFormProperties {
		ServiceAccessRoleArn: FormControl<string | null | undefined>,

		/** Required */
		S3BucketName: FormControl<string | null | undefined>,

		/** Required */
		S3BucketFolder: FormControl<string | null | undefined>,
		ErrorRetryDuration: FormControl<number | null | undefined>,
		MaxFileSize: FormControl<number | null | undefined>,
		MaxRetryCount: FormControl<number | null | undefined>,
		IamAuthEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateNeptuneSettingsFormGroup() {
		return new FormGroup<NeptuneSettingsFormProperties>({
			ServiceAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			S3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3BucketFolder: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ErrorRetryDuration: new FormControl<number | null | undefined>(undefined),
			MaxFileSize: new FormControl<number | null | undefined>(undefined),
			MaxRetryCount: new FormControl<number | null | undefined>(undefined),
			IamAuthEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides information that defines an Amazon Redshift endpoint. */
	export interface RedshiftSettings {
		AcceptAnyDate?: boolean | null;
		AfterConnectScript?: string | null;
		BucketFolder?: string | null;
		BucketName?: string | null;
		ConnectionTimeout?: number | null;
		DatabaseName?: string | null;
		DateFormat?: string | null;
		EmptyAsNull?: boolean | null;
		EncryptionMode?: RedshiftSettingsEncryptionMode | null;
		FileTransferUploadStreams?: number | null;
		LoadTimeout?: number | null;
		MaxFileSize?: number | null;
		Password?: string | null;
		Port?: number | null;
		RemoveQuotes?: boolean | null;
		ReplaceInvalidChars?: string | null;
		ReplaceChars?: string | null;
		ServerName?: string | null;
		ServiceAccessRoleArn?: string | null;
		ServerSideEncryptionKmsKeyId?: string | null;
		TimeFormat?: string | null;
		TrimBlanks?: boolean | null;
		TruncateColumns?: boolean | null;
		Username?: string | null;
		WriteBufferSize?: number | null;
	}

	/** Provides information that defines an Amazon Redshift endpoint. */
	export interface RedshiftSettingsFormProperties {
		AcceptAnyDate: FormControl<boolean | null | undefined>,
		AfterConnectScript: FormControl<string | null | undefined>,
		BucketFolder: FormControl<string | null | undefined>,
		BucketName: FormControl<string | null | undefined>,
		ConnectionTimeout: FormControl<number | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		DateFormat: FormControl<string | null | undefined>,
		EmptyAsNull: FormControl<boolean | null | undefined>,
		EncryptionMode: FormControl<RedshiftSettingsEncryptionMode | null | undefined>,
		FileTransferUploadStreams: FormControl<number | null | undefined>,
		LoadTimeout: FormControl<number | null | undefined>,
		MaxFileSize: FormControl<number | null | undefined>,
		Password: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		RemoveQuotes: FormControl<boolean | null | undefined>,
		ReplaceInvalidChars: FormControl<string | null | undefined>,
		ReplaceChars: FormControl<string | null | undefined>,
		ServerName: FormControl<string | null | undefined>,
		ServiceAccessRoleArn: FormControl<string | null | undefined>,
		ServerSideEncryptionKmsKeyId: FormControl<string | null | undefined>,
		TimeFormat: FormControl<string | null | undefined>,
		TrimBlanks: FormControl<boolean | null | undefined>,
		TruncateColumns: FormControl<boolean | null | undefined>,
		Username: FormControl<string | null | undefined>,
		WriteBufferSize: FormControl<number | null | undefined>,
	}
	export function CreateRedshiftSettingsFormGroup() {
		return new FormGroup<RedshiftSettingsFormProperties>({
			AcceptAnyDate: new FormControl<boolean | null | undefined>(undefined),
			AfterConnectScript: new FormControl<string | null | undefined>(undefined),
			BucketFolder: new FormControl<string | null | undefined>(undefined),
			BucketName: new FormControl<string | null | undefined>(undefined),
			ConnectionTimeout: new FormControl<number | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			DateFormat: new FormControl<string | null | undefined>(undefined),
			EmptyAsNull: new FormControl<boolean | null | undefined>(undefined),
			EncryptionMode: new FormControl<RedshiftSettingsEncryptionMode | null | undefined>(undefined),
			FileTransferUploadStreams: new FormControl<number | null | undefined>(undefined),
			LoadTimeout: new FormControl<number | null | undefined>(undefined),
			MaxFileSize: new FormControl<number | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			RemoveQuotes: new FormControl<boolean | null | undefined>(undefined),
			ReplaceInvalidChars: new FormControl<string | null | undefined>(undefined),
			ReplaceChars: new FormControl<string | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			ServiceAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			ServerSideEncryptionKmsKeyId: new FormControl<string | null | undefined>(undefined),
			TimeFormat: new FormControl<string | null | undefined>(undefined),
			TrimBlanks: new FormControl<boolean | null | undefined>(undefined),
			TruncateColumns: new FormControl<boolean | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			WriteBufferSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum RedshiftSettingsEncryptionMode { sse_s3 = 0, sse_kms = 1 }


	/** <p/> */
	export interface CreateEndpointMessage {

		/** Required */
		EndpointIdentifier: string;

		/** Required */
		EndpointType: EndpointEndpointType;

		/** Required */
		EngineName: string;
		Username?: string | null;
		Password?: string | null;
		ServerName?: string | null;
		Port?: number | null;
		DatabaseName?: string | null;
		ExtraConnectionAttributes?: string | null;
		KmsKeyId?: string | null;
		Tags?: Array<Tag>;
		CertificateArn?: string | null;
		SslMode?: CreateEndpointMessageSslMode | null;
		ServiceAccessRoleArn?: string | null;
		ExternalTableDefinition?: string | null;

		/** Provides the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role used to define an Amazon DynamoDB target endpoint. */
		DynamoDbSettings?: DynamoDbSettings;

		/** Settings for exporting data to Amazon S3. */
		S3Settings?: S3Settings;

		/** The settings in JSON format for the DMS Transfer type source endpoint. */
		DmsTransferSettings?: DmsTransferSettings;

		/** Provides information that defines a MongoDB endpoint. */
		MongoDbSettings?: MongoDbSettings;

		/** Provides information that describes an Amazon Kinesis Data Stream endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
		KinesisSettings?: KinesisSettings;

		/** Provides information that describes an Apache Kafka endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
		KafkaSettings?: KafkaSettings;

		/** Provides information that defines an Elasticsearch endpoint. */
		ElasticsearchSettings?: ElasticsearchSettings;

		/** Provides information that defines an Amazon Neptune endpoint. */
		NeptuneSettings?: NeptuneSettings;

		/** Provides information that defines an Amazon Redshift endpoint. */
		RedshiftSettings?: RedshiftSettings;
	}

	/** <p/> */
	export interface CreateEndpointMessageFormProperties {

		/** Required */
		EndpointIdentifier: FormControl<string | null | undefined>,

		/** Required */
		EndpointType: FormControl<EndpointEndpointType | null | undefined>,

		/** Required */
		EngineName: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
		ServerName: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		ExtraConnectionAttributes: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		CertificateArn: FormControl<string | null | undefined>,
		SslMode: FormControl<CreateEndpointMessageSslMode | null | undefined>,
		ServiceAccessRoleArn: FormControl<string | null | undefined>,
		ExternalTableDefinition: FormControl<string | null | undefined>,
	}
	export function CreateCreateEndpointMessageFormGroup() {
		return new FormGroup<CreateEndpointMessageFormProperties>({
			EndpointIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EndpointType: new FormControl<EndpointEndpointType | null | undefined>(undefined, [Validators.required]),
			EngineName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			ExtraConnectionAttributes: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			CertificateArn: new FormControl<string | null | undefined>(undefined),
			SslMode: new FormControl<CreateEndpointMessageSslMode | null | undefined>(undefined),
			ServiceAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			ExternalTableDefinition: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateEndpointMessageSslMode { none = 0, require = 1, verify_ca = 2, verify_full = 3 }

	export interface KMSKeyNotAccessibleFault {
	}
	export interface KMSKeyNotAccessibleFaultFormProperties {
	}
	export function CreateKMSKeyNotAccessibleFaultFormGroup() {
		return new FormGroup<KMSKeyNotAccessibleFaultFormProperties>({
		});

	}

	export interface ResourceAlreadyExistsFault {
	}
	export interface ResourceAlreadyExistsFaultFormProperties {
	}
	export function CreateResourceAlreadyExistsFaultFormGroup() {
		return new FormGroup<ResourceAlreadyExistsFaultFormProperties>({
		});

	}

	export interface ResourceQuotaExceededFault {
	}
	export interface ResourceQuotaExceededFaultFormProperties {
	}
	export function CreateResourceQuotaExceededFaultFormGroup() {
		return new FormGroup<ResourceQuotaExceededFaultFormProperties>({
		});

	}

	export interface InvalidResourceStateFault {
	}
	export interface InvalidResourceStateFaultFormProperties {
	}
	export function CreateInvalidResourceStateFaultFormGroup() {
		return new FormGroup<InvalidResourceStateFaultFormProperties>({
		});

	}

	export interface AccessDeniedFault {
	}
	export interface AccessDeniedFaultFormProperties {
	}
	export function CreateAccessDeniedFaultFormGroup() {
		return new FormGroup<AccessDeniedFaultFormProperties>({
		});

	}


	/** <p/> */
	export interface CreateEventSubscriptionResponse {

		/** Describes an event notification subscription created by the <code>CreateEventSubscription</code> operation. */
		EventSubscription?: EventSubscription;
	}

	/** <p/> */
	export interface CreateEventSubscriptionResponseFormProperties {
	}
	export function CreateCreateEventSubscriptionResponseFormGroup() {
		return new FormGroup<CreateEventSubscriptionResponseFormProperties>({
		});

	}


	/** Describes an event notification subscription created by the <code>CreateEventSubscription</code> operation. */
	export interface EventSubscription {
		CustomerAwsId?: string | null;
		CustSubscriptionId?: string | null;
		SnsTopicArn?: string | null;
		Status?: string | null;
		SubscriptionCreationTime?: string | null;
		SourceType?: string | null;
		SourceIdsList?: Array<string>;
		EventCategoriesList?: Array<string>;
		Enabled?: boolean | null;
	}

	/** Describes an event notification subscription created by the <code>CreateEventSubscription</code> operation. */
	export interface EventSubscriptionFormProperties {
		CustomerAwsId: FormControl<string | null | undefined>,
		CustSubscriptionId: FormControl<string | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		SubscriptionCreationTime: FormControl<string | null | undefined>,
		SourceType: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEventSubscriptionFormGroup() {
		return new FormGroup<EventSubscriptionFormProperties>({
			CustomerAwsId: new FormControl<string | null | undefined>(undefined),
			CustSubscriptionId: new FormControl<string | null | undefined>(undefined),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			SubscriptionCreationTime: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface CreateEventSubscriptionMessage {

		/** Required */
		SubscriptionName: string;

		/** Required */
		SnsTopicArn: string;
		SourceType?: string | null;
		EventCategories?: Array<string>;
		SourceIds?: Array<string>;
		Enabled?: boolean | null;
		Tags?: Array<Tag>;
	}

	/** <p/> */
	export interface CreateEventSubscriptionMessageFormProperties {

		/** Required */
		SubscriptionName: FormControl<string | null | undefined>,

		/** Required */
		SnsTopicArn: FormControl<string | null | undefined>,
		SourceType: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateEventSubscriptionMessageFormGroup() {
		return new FormGroup<CreateEventSubscriptionMessageFormProperties>({
			SubscriptionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceType: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SNSInvalidTopicFault {
	}
	export interface SNSInvalidTopicFaultFormProperties {
	}
	export function CreateSNSInvalidTopicFaultFormGroup() {
		return new FormGroup<SNSInvalidTopicFaultFormProperties>({
		});

	}

	export interface SNSNoAuthorizationFault {
	}
	export interface SNSNoAuthorizationFaultFormProperties {
	}
	export function CreateSNSNoAuthorizationFaultFormGroup() {
		return new FormGroup<SNSNoAuthorizationFaultFormProperties>({
		});

	}

	export interface KMSAccessDeniedFault {
	}
	export interface KMSAccessDeniedFaultFormProperties {
	}
	export function CreateKMSAccessDeniedFaultFormGroup() {
		return new FormGroup<KMSAccessDeniedFaultFormProperties>({
		});

	}

	export interface KMSDisabledFault {
	}
	export interface KMSDisabledFaultFormProperties {
	}
	export function CreateKMSDisabledFaultFormGroup() {
		return new FormGroup<KMSDisabledFaultFormProperties>({
		});

	}

	export interface KMSInvalidStateFault {
	}
	export interface KMSInvalidStateFaultFormProperties {
	}
	export function CreateKMSInvalidStateFaultFormGroup() {
		return new FormGroup<KMSInvalidStateFaultFormProperties>({
		});

	}

	export interface KMSNotFoundFault {
	}
	export interface KMSNotFoundFaultFormProperties {
	}
	export function CreateKMSNotFoundFaultFormGroup() {
		return new FormGroup<KMSNotFoundFaultFormProperties>({
		});

	}

	export interface KMSThrottlingFault {
	}
	export interface KMSThrottlingFaultFormProperties {
	}
	export function CreateKMSThrottlingFaultFormGroup() {
		return new FormGroup<KMSThrottlingFaultFormProperties>({
		});

	}


	/** <p/> */
	export interface CreateReplicationInstanceResponse {

		/** Provides information that defines a replication instance. */
		ReplicationInstance?: ReplicationInstance;
	}

	/** <p/> */
	export interface CreateReplicationInstanceResponseFormProperties {
	}
	export function CreateCreateReplicationInstanceResponseFormGroup() {
		return new FormGroup<CreateReplicationInstanceResponseFormProperties>({
		});

	}


	/** Provides information that defines a replication instance. */
	export interface ReplicationInstance {
		ReplicationInstanceIdentifier?: string | null;
		ReplicationInstanceClass?: string | null;
		ReplicationInstanceStatus?: string | null;
		AllocatedStorage?: number | null;
		InstanceCreateTime?: Date | null;
		VpcSecurityGroups?: Array<VpcSecurityGroupMembership>;
		AvailabilityZone?: string | null;

		/** Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroup</code> operation. */
		ReplicationSubnetGroup?: ReplicationSubnetGroup;
		PreferredMaintenanceWindow?: string | null;

		/** Provides information about the values of pending modifications to a replication instance. This data type is an object of the <code>ReplicationInstance</code> user-defined data type. */
		PendingModifiedValues?: ReplicationPendingModifiedValues;
		MultiAZ?: boolean | null;
		EngineVersion?: string | null;
		AutoMinorVersionUpgrade?: boolean | null;
		KmsKeyId?: string | null;
		ReplicationInstanceArn?: string | null;
		ReplicationInstancePublicIpAddress?: string | null;
		ReplicationInstancePrivateIpAddress?: string | null;
		ReplicationInstancePublicIpAddresses?: Array<string>;
		ReplicationInstancePrivateIpAddresses?: Array<string>;
		PubliclyAccessible?: boolean | null;
		SecondaryAvailabilityZone?: string | null;
		FreeUntil?: Date | null;
		DnsNameServers?: string | null;
	}

	/** Provides information that defines a replication instance. */
	export interface ReplicationInstanceFormProperties {
		ReplicationInstanceIdentifier: FormControl<string | null | undefined>,
		ReplicationInstanceClass: FormControl<string | null | undefined>,
		ReplicationInstanceStatus: FormControl<string | null | undefined>,
		AllocatedStorage: FormControl<number | null | undefined>,
		InstanceCreateTime: FormControl<Date | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		MultiAZ: FormControl<boolean | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		ReplicationInstanceArn: FormControl<string | null | undefined>,
		ReplicationInstancePublicIpAddress: FormControl<string | null | undefined>,
		ReplicationInstancePrivateIpAddress: FormControl<string | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
		SecondaryAvailabilityZone: FormControl<string | null | undefined>,
		FreeUntil: FormControl<Date | null | undefined>,
		DnsNameServers: FormControl<string | null | undefined>,
	}
	export function CreateReplicationInstanceFormGroup() {
		return new FormGroup<ReplicationInstanceFormProperties>({
			ReplicationInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
			ReplicationInstanceClass: new FormControl<string | null | undefined>(undefined),
			ReplicationInstanceStatus: new FormControl<string | null | undefined>(undefined),
			AllocatedStorage: new FormControl<number | null | undefined>(undefined),
			InstanceCreateTime: new FormControl<Date | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined),
			ReplicationInstancePublicIpAddress: new FormControl<string | null | undefined>(undefined),
			ReplicationInstancePrivateIpAddress: new FormControl<string | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			SecondaryAvailabilityZone: new FormControl<string | null | undefined>(undefined),
			FreeUntil: new FormControl<Date | null | undefined>(undefined),
			DnsNameServers: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes status of a security group associated with the virtual private cloud hosting your replication and DB instances. */
	export interface VpcSecurityGroupMembership {
		VpcSecurityGroupId?: string | null;
		Status?: string | null;
	}

	/** Describes status of a security group associated with the virtual private cloud hosting your replication and DB instances. */
	export interface VpcSecurityGroupMembershipFormProperties {
		VpcSecurityGroupId: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateVpcSecurityGroupMembershipFormGroup() {
		return new FormGroup<VpcSecurityGroupMembershipFormProperties>({
			VpcSecurityGroupId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroup</code> operation. */
	export interface ReplicationSubnetGroup {
		ReplicationSubnetGroupIdentifier?: string | null;
		ReplicationSubnetGroupDescription?: string | null;
		VpcId?: string | null;
		SubnetGroupStatus?: string | null;
		Subnets?: Array<Subnet>;
	}

	/** Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroup</code> operation. */
	export interface ReplicationSubnetGroupFormProperties {
		ReplicationSubnetGroupIdentifier: FormControl<string | null | undefined>,
		ReplicationSubnetGroupDescription: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		SubnetGroupStatus: FormControl<string | null | undefined>,
	}
	export function CreateReplicationSubnetGroupFormGroup() {
		return new FormGroup<ReplicationSubnetGroupFormProperties>({
			ReplicationSubnetGroupIdentifier: new FormControl<string | null | undefined>(undefined),
			ReplicationSubnetGroupDescription: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			SubnetGroupStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** In response to a request by the <code>DescribeReplicationSubnetGroup</code> operation, this object identifies a subnet by its given Availability Zone, subnet identifier, and status. */
	export interface Subnet {
		SubnetIdentifier?: string | null;

		/** The name of the Availability Zone for use during database migration. */
		SubnetAvailabilityZone?: AvailabilityZone;
		SubnetStatus?: string | null;
	}

	/** In response to a request by the <code>DescribeReplicationSubnetGroup</code> operation, this object identifies a subnet by its given Availability Zone, subnet identifier, and status. */
	export interface SubnetFormProperties {
		SubnetIdentifier: FormControl<string | null | undefined>,
		SubnetStatus: FormControl<string | null | undefined>,
	}
	export function CreateSubnetFormGroup() {
		return new FormGroup<SubnetFormProperties>({
			SubnetIdentifier: new FormControl<string | null | undefined>(undefined),
			SubnetStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The name of the Availability Zone for use during database migration. */
	export interface AvailabilityZone {
		Name?: string | null;
	}

	/** The name of the Availability Zone for use during database migration. */
	export interface AvailabilityZoneFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAvailabilityZoneFormGroup() {
		return new FormGroup<AvailabilityZoneFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the values of pending modifications to a replication instance. This data type is an object of the <code>ReplicationInstance</code> user-defined data type.  */
	export interface ReplicationPendingModifiedValues {
		ReplicationInstanceClass?: string | null;
		AllocatedStorage?: number | null;
		MultiAZ?: boolean | null;
		EngineVersion?: string | null;
	}

	/** Provides information about the values of pending modifications to a replication instance. This data type is an object of the <code>ReplicationInstance</code> user-defined data type.  */
	export interface ReplicationPendingModifiedValuesFormProperties {
		ReplicationInstanceClass: FormControl<string | null | undefined>,
		AllocatedStorage: FormControl<number | null | undefined>,
		MultiAZ: FormControl<boolean | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
	}
	export function CreateReplicationPendingModifiedValuesFormGroup() {
		return new FormGroup<ReplicationPendingModifiedValuesFormProperties>({
			ReplicationInstanceClass: new FormControl<string | null | undefined>(undefined),
			AllocatedStorage: new FormControl<number | null | undefined>(undefined),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface CreateReplicationInstanceMessage {

		/** Required */
		ReplicationInstanceIdentifier: string;
		AllocatedStorage?: number | null;

		/** Required */
		ReplicationInstanceClass: string;
		VpcSecurityGroupIds?: Array<string>;
		AvailabilityZone?: string | null;
		ReplicationSubnetGroupIdentifier?: string | null;
		PreferredMaintenanceWindow?: string | null;
		MultiAZ?: boolean | null;
		EngineVersion?: string | null;
		AutoMinorVersionUpgrade?: boolean | null;
		Tags?: Array<Tag>;
		KmsKeyId?: string | null;
		PubliclyAccessible?: boolean | null;
		DnsNameServers?: string | null;
	}

	/** <p/> */
	export interface CreateReplicationInstanceMessageFormProperties {

		/** Required */
		ReplicationInstanceIdentifier: FormControl<string | null | undefined>,
		AllocatedStorage: FormControl<number | null | undefined>,

		/** Required */
		ReplicationInstanceClass: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		ReplicationSubnetGroupIdentifier: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		MultiAZ: FormControl<boolean | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
		DnsNameServers: FormControl<string | null | undefined>,
	}
	export function CreateCreateReplicationInstanceMessageFormGroup() {
		return new FormGroup<CreateReplicationInstanceMessageFormProperties>({
			ReplicationInstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AllocatedStorage: new FormControl<number | null | undefined>(undefined),
			ReplicationInstanceClass: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			ReplicationSubnetGroupIdentifier: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			DnsNameServers: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InsufficientResourceCapacityFault {
	}
	export interface InsufficientResourceCapacityFaultFormProperties {
	}
	export function CreateInsufficientResourceCapacityFaultFormGroup() {
		return new FormGroup<InsufficientResourceCapacityFaultFormProperties>({
		});

	}

	export interface StorageQuotaExceededFault {
	}
	export interface StorageQuotaExceededFaultFormProperties {
	}
	export function CreateStorageQuotaExceededFaultFormGroup() {
		return new FormGroup<StorageQuotaExceededFaultFormProperties>({
		});

	}

	export interface ReplicationSubnetGroupDoesNotCoverEnoughAZs {
	}
	export interface ReplicationSubnetGroupDoesNotCoverEnoughAZsFormProperties {
	}
	export function CreateReplicationSubnetGroupDoesNotCoverEnoughAZsFormGroup() {
		return new FormGroup<ReplicationSubnetGroupDoesNotCoverEnoughAZsFormProperties>({
		});

	}

	export interface InvalidSubnet {
	}
	export interface InvalidSubnetFormProperties {
	}
	export function CreateInvalidSubnetFormGroup() {
		return new FormGroup<InvalidSubnetFormProperties>({
		});

	}


	/** <p/> */
	export interface CreateReplicationSubnetGroupResponse {

		/** Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroup</code> operation. */
		ReplicationSubnetGroup?: ReplicationSubnetGroup;
	}

	/** <p/> */
	export interface CreateReplicationSubnetGroupResponseFormProperties {
	}
	export function CreateCreateReplicationSubnetGroupResponseFormGroup() {
		return new FormGroup<CreateReplicationSubnetGroupResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface CreateReplicationSubnetGroupMessage {

		/** Required */
		ReplicationSubnetGroupIdentifier: string;

		/** Required */
		ReplicationSubnetGroupDescription: string;

		/** Required */
		SubnetIds: Array<string>;
		Tags?: Array<Tag>;
	}

	/** <p/> */
	export interface CreateReplicationSubnetGroupMessageFormProperties {

		/** Required */
		ReplicationSubnetGroupIdentifier: FormControl<string | null | undefined>,

		/** Required */
		ReplicationSubnetGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateReplicationSubnetGroupMessageFormGroup() {
		return new FormGroup<CreateReplicationSubnetGroupMessageFormProperties>({
			ReplicationSubnetGroupIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplicationSubnetGroupDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface CreateReplicationTaskResponse {

		/** Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation. */
		ReplicationTask?: ReplicationTask;
	}

	/** <p/> */
	export interface CreateReplicationTaskResponseFormProperties {
	}
	export function CreateCreateReplicationTaskResponseFormGroup() {
		return new FormGroup<CreateReplicationTaskResponseFormProperties>({
		});

	}


	/** Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation. */
	export interface ReplicationTask {
		ReplicationTaskIdentifier?: string | null;
		SourceEndpointArn?: string | null;
		TargetEndpointArn?: string | null;
		ReplicationInstanceArn?: string | null;
		MigrationType?: ReplicationTaskMigrationType | null;
		TableMappings?: string | null;
		ReplicationTaskSettings?: string | null;
		Status?: string | null;
		LastFailureMessage?: string | null;
		StopReason?: string | null;
		ReplicationTaskCreationDate?: Date | null;
		ReplicationTaskStartDate?: Date | null;
		CdcStartPosition?: string | null;
		CdcStopPosition?: string | null;
		RecoveryCheckpoint?: string | null;
		ReplicationTaskArn?: string | null;

		/** In response to a request by the <code>DescribeReplicationTasks</code> operation, this object provides a collection of statistics about a replication task. */
		ReplicationTaskStats?: ReplicationTaskStats;
		TaskData?: string | null;
	}

	/** Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation. */
	export interface ReplicationTaskFormProperties {
		ReplicationTaskIdentifier: FormControl<string | null | undefined>,
		SourceEndpointArn: FormControl<string | null | undefined>,
		TargetEndpointArn: FormControl<string | null | undefined>,
		ReplicationInstanceArn: FormControl<string | null | undefined>,
		MigrationType: FormControl<ReplicationTaskMigrationType | null | undefined>,
		TableMappings: FormControl<string | null | undefined>,
		ReplicationTaskSettings: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		LastFailureMessage: FormControl<string | null | undefined>,
		StopReason: FormControl<string | null | undefined>,
		ReplicationTaskCreationDate: FormControl<Date | null | undefined>,
		ReplicationTaskStartDate: FormControl<Date | null | undefined>,
		CdcStartPosition: FormControl<string | null | undefined>,
		CdcStopPosition: FormControl<string | null | undefined>,
		RecoveryCheckpoint: FormControl<string | null | undefined>,
		ReplicationTaskArn: FormControl<string | null | undefined>,
		TaskData: FormControl<string | null | undefined>,
	}
	export function CreateReplicationTaskFormGroup() {
		return new FormGroup<ReplicationTaskFormProperties>({
			ReplicationTaskIdentifier: new FormControl<string | null | undefined>(undefined),
			SourceEndpointArn: new FormControl<string | null | undefined>(undefined),
			TargetEndpointArn: new FormControl<string | null | undefined>(undefined),
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined),
			MigrationType: new FormControl<ReplicationTaskMigrationType | null | undefined>(undefined),
			TableMappings: new FormControl<string | null | undefined>(undefined),
			ReplicationTaskSettings: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			LastFailureMessage: new FormControl<string | null | undefined>(undefined),
			StopReason: new FormControl<string | null | undefined>(undefined),
			ReplicationTaskCreationDate: new FormControl<Date | null | undefined>(undefined),
			ReplicationTaskStartDate: new FormControl<Date | null | undefined>(undefined),
			CdcStartPosition: new FormControl<string | null | undefined>(undefined),
			CdcStopPosition: new FormControl<string | null | undefined>(undefined),
			RecoveryCheckpoint: new FormControl<string | null | undefined>(undefined),
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined),
			TaskData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReplicationTaskMigrationType { full_load = 0, cdc = 1, full_load_and_cdc = 2 }


	/** In response to a request by the <code>DescribeReplicationTasks</code> operation, this object provides a collection of statistics about a replication task. */
	export interface ReplicationTaskStats {
		FullLoadProgressPercent?: number | null;
		ElapsedTimeMillis?: number | null;
		TablesLoaded?: number | null;
		TablesLoading?: number | null;
		TablesQueued?: number | null;
		TablesErrored?: number | null;
		FreshStartDate?: Date | null;
		StartDate?: Date | null;
		StopDate?: Date | null;
		FullLoadStartDate?: Date | null;
		FullLoadFinishDate?: Date | null;
	}

	/** In response to a request by the <code>DescribeReplicationTasks</code> operation, this object provides a collection of statistics about a replication task. */
	export interface ReplicationTaskStatsFormProperties {
		FullLoadProgressPercent: FormControl<number | null | undefined>,
		ElapsedTimeMillis: FormControl<number | null | undefined>,
		TablesLoaded: FormControl<number | null | undefined>,
		TablesLoading: FormControl<number | null | undefined>,
		TablesQueued: FormControl<number | null | undefined>,
		TablesErrored: FormControl<number | null | undefined>,
		FreshStartDate: FormControl<Date | null | undefined>,
		StartDate: FormControl<Date | null | undefined>,
		StopDate: FormControl<Date | null | undefined>,
		FullLoadStartDate: FormControl<Date | null | undefined>,
		FullLoadFinishDate: FormControl<Date | null | undefined>,
	}
	export function CreateReplicationTaskStatsFormGroup() {
		return new FormGroup<ReplicationTaskStatsFormProperties>({
			FullLoadProgressPercent: new FormControl<number | null | undefined>(undefined),
			ElapsedTimeMillis: new FormControl<number | null | undefined>(undefined),
			TablesLoaded: new FormControl<number | null | undefined>(undefined),
			TablesLoading: new FormControl<number | null | undefined>(undefined),
			TablesQueued: new FormControl<number | null | undefined>(undefined),
			TablesErrored: new FormControl<number | null | undefined>(undefined),
			FreshStartDate: new FormControl<Date | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			StopDate: new FormControl<Date | null | undefined>(undefined),
			FullLoadStartDate: new FormControl<Date | null | undefined>(undefined),
			FullLoadFinishDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface CreateReplicationTaskMessage {

		/** Required */
		ReplicationTaskIdentifier: string;

		/** Required */
		SourceEndpointArn: string;

		/** Required */
		TargetEndpointArn: string;

		/** Required */
		ReplicationInstanceArn: string;

		/** Required */
		MigrationType: CreateReplicationTaskMessageMigrationType;

		/** Required */
		TableMappings: string;
		ReplicationTaskSettings?: string | null;
		CdcStartTime?: Date | null;
		CdcStartPosition?: string | null;
		CdcStopPosition?: string | null;
		Tags?: Array<Tag>;
		TaskData?: string | null;
	}

	/** <p/> */
	export interface CreateReplicationTaskMessageFormProperties {

		/** Required */
		ReplicationTaskIdentifier: FormControl<string | null | undefined>,

		/** Required */
		SourceEndpointArn: FormControl<string | null | undefined>,

		/** Required */
		TargetEndpointArn: FormControl<string | null | undefined>,

		/** Required */
		ReplicationInstanceArn: FormControl<string | null | undefined>,

		/** Required */
		MigrationType: FormControl<CreateReplicationTaskMessageMigrationType | null | undefined>,

		/** Required */
		TableMappings: FormControl<string | null | undefined>,
		ReplicationTaskSettings: FormControl<string | null | undefined>,
		CdcStartTime: FormControl<Date | null | undefined>,
		CdcStartPosition: FormControl<string | null | undefined>,
		CdcStopPosition: FormControl<string | null | undefined>,
		TaskData: FormControl<string | null | undefined>,
	}
	export function CreateCreateReplicationTaskMessageFormGroup() {
		return new FormGroup<CreateReplicationTaskMessageFormProperties>({
			ReplicationTaskIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceEndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetEndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MigrationType: new FormControl<CreateReplicationTaskMessageMigrationType | null | undefined>(undefined, [Validators.required]),
			TableMappings: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplicationTaskSettings: new FormControl<string | null | undefined>(undefined),
			CdcStartTime: new FormControl<Date | null | undefined>(undefined),
			CdcStartPosition: new FormControl<string | null | undefined>(undefined),
			CdcStopPosition: new FormControl<string | null | undefined>(undefined),
			TaskData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateReplicationTaskMessageMigrationType { full_load = 0, cdc = 1, full_load_and_cdc = 2 }

	export interface DeleteCertificateResponse {

		/** The SSL certificate that can be used to encrypt connections between the endpoints and the replication instance. */
		Certificate?: Certificate;
	}
	export interface DeleteCertificateResponseFormProperties {
	}
	export function CreateDeleteCertificateResponseFormGroup() {
		return new FormGroup<DeleteCertificateResponseFormProperties>({
		});

	}


	/** The SSL certificate that can be used to encrypt connections between the endpoints and the replication instance. */
	export interface Certificate {
		CertificateIdentifier?: string | null;
		CertificateCreationDate?: Date | null;
		CertificatePem?: string | null;
		CertificateWallet?: string | null;
		CertificateArn?: string | null;
		CertificateOwner?: string | null;
		ValidFromDate?: Date | null;
		ValidToDate?: Date | null;
		SigningAlgorithm?: string | null;
		KeyLength?: number | null;
	}

	/** The SSL certificate that can be used to encrypt connections between the endpoints and the replication instance. */
	export interface CertificateFormProperties {
		CertificateIdentifier: FormControl<string | null | undefined>,
		CertificateCreationDate: FormControl<Date | null | undefined>,
		CertificatePem: FormControl<string | null | undefined>,
		CertificateWallet: FormControl<string | null | undefined>,
		CertificateArn: FormControl<string | null | undefined>,
		CertificateOwner: FormControl<string | null | undefined>,
		ValidFromDate: FormControl<Date | null | undefined>,
		ValidToDate: FormControl<Date | null | undefined>,
		SigningAlgorithm: FormControl<string | null | undefined>,
		KeyLength: FormControl<number | null | undefined>,
	}
	export function CreateCertificateFormGroup() {
		return new FormGroup<CertificateFormProperties>({
			CertificateIdentifier: new FormControl<string | null | undefined>(undefined),
			CertificateCreationDate: new FormControl<Date | null | undefined>(undefined),
			CertificatePem: new FormControl<string | null | undefined>(undefined),
			CertificateWallet: new FormControl<string | null | undefined>(undefined),
			CertificateArn: new FormControl<string | null | undefined>(undefined),
			CertificateOwner: new FormControl<string | null | undefined>(undefined),
			ValidFromDate: new FormControl<Date | null | undefined>(undefined),
			ValidToDate: new FormControl<Date | null | undefined>(undefined),
			SigningAlgorithm: new FormControl<string | null | undefined>(undefined),
			KeyLength: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteCertificateMessage {

		/** Required */
		CertificateArn: string;
	}
	export interface DeleteCertificateMessageFormProperties {

		/** Required */
		CertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCertificateMessageFormGroup() {
		return new FormGroup<DeleteCertificateMessageFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DeleteConnectionResponse {

		/** Status of the connection between an endpoint and a replication instance, including Amazon Resource Names (ARNs) and the last error message issued. */
		Connection?: Connection;
	}

	/** <p/> */
	export interface DeleteConnectionResponseFormProperties {
	}
	export function CreateDeleteConnectionResponseFormGroup() {
		return new FormGroup<DeleteConnectionResponseFormProperties>({
		});

	}


	/** Status of the connection between an endpoint and a replication instance, including Amazon Resource Names (ARNs) and the last error message issued. */
	export interface Connection {
		ReplicationInstanceArn?: string | null;
		EndpointArn?: string | null;
		Status?: string | null;
		LastFailureMessage?: string | null;
		EndpointIdentifier?: string | null;
		ReplicationInstanceIdentifier?: string | null;
	}

	/** Status of the connection between an endpoint and a replication instance, including Amazon Resource Names (ARNs) and the last error message issued. */
	export interface ConnectionFormProperties {
		ReplicationInstanceArn: FormControl<string | null | undefined>,
		EndpointArn: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		LastFailureMessage: FormControl<string | null | undefined>,
		EndpointIdentifier: FormControl<string | null | undefined>,
		ReplicationInstanceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateConnectionFormGroup() {
		return new FormGroup<ConnectionFormProperties>({
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined),
			EndpointArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			LastFailureMessage: new FormControl<string | null | undefined>(undefined),
			EndpointIdentifier: new FormControl<string | null | undefined>(undefined),
			ReplicationInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DeleteConnectionMessage {

		/** Required */
		EndpointArn: string;

		/** Required */
		ReplicationInstanceArn: string;
	}

	/** <p/> */
	export interface DeleteConnectionMessageFormProperties {

		/** Required */
		EndpointArn: FormControl<string | null | undefined>,

		/** Required */
		ReplicationInstanceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConnectionMessageFormGroup() {
		return new FormGroup<DeleteConnectionMessageFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DeleteEndpointResponse {

		/** <p>Describes an endpoint of a database instance in response to operations such as the following:</p> <ul> <li> <p> <code>CreateEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpointTypes</code> </p> </li> <li> <p> <code>ModifyEndpoint</code> </p> </li> </ul> */
		Endpoint?: Endpoint;
	}

	/** <p/> */
	export interface DeleteEndpointResponseFormProperties {
	}
	export function CreateDeleteEndpointResponseFormGroup() {
		return new FormGroup<DeleteEndpointResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface DeleteEndpointMessage {

		/** Required */
		EndpointArn: string;
	}

	/** <p/> */
	export interface DeleteEndpointMessageFormProperties {

		/** Required */
		EndpointArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEndpointMessageFormGroup() {
		return new FormGroup<DeleteEndpointMessageFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DeleteEventSubscriptionResponse {

		/** Describes an event notification subscription created by the <code>CreateEventSubscription</code> operation. */
		EventSubscription?: EventSubscription;
	}

	/** <p/> */
	export interface DeleteEventSubscriptionResponseFormProperties {
	}
	export function CreateDeleteEventSubscriptionResponseFormGroup() {
		return new FormGroup<DeleteEventSubscriptionResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface DeleteEventSubscriptionMessage {

		/** Required */
		SubscriptionName: string;
	}

	/** <p/> */
	export interface DeleteEventSubscriptionMessageFormProperties {

		/** Required */
		SubscriptionName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEventSubscriptionMessageFormGroup() {
		return new FormGroup<DeleteEventSubscriptionMessageFormProperties>({
			SubscriptionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DeleteReplicationInstanceResponse {

		/** Provides information that defines a replication instance. */
		ReplicationInstance?: ReplicationInstance;
	}

	/** <p/> */
	export interface DeleteReplicationInstanceResponseFormProperties {
	}
	export function CreateDeleteReplicationInstanceResponseFormGroup() {
		return new FormGroup<DeleteReplicationInstanceResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface DeleteReplicationInstanceMessage {

		/** Required */
		ReplicationInstanceArn: string;
	}

	/** <p/> */
	export interface DeleteReplicationInstanceMessageFormProperties {

		/** Required */
		ReplicationInstanceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteReplicationInstanceMessageFormGroup() {
		return new FormGroup<DeleteReplicationInstanceMessageFormProperties>({
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DeleteReplicationSubnetGroupResponse {
	}

	/** <p/> */
	export interface DeleteReplicationSubnetGroupResponseFormProperties {
	}
	export function CreateDeleteReplicationSubnetGroupResponseFormGroup() {
		return new FormGroup<DeleteReplicationSubnetGroupResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface DeleteReplicationSubnetGroupMessage {

		/** Required */
		ReplicationSubnetGroupIdentifier: string;
	}

	/** <p/> */
	export interface DeleteReplicationSubnetGroupMessageFormProperties {

		/** Required */
		ReplicationSubnetGroupIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteReplicationSubnetGroupMessageFormGroup() {
		return new FormGroup<DeleteReplicationSubnetGroupMessageFormProperties>({
			ReplicationSubnetGroupIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DeleteReplicationTaskResponse {

		/** Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation. */
		ReplicationTask?: ReplicationTask;
	}

	/** <p/> */
	export interface DeleteReplicationTaskResponseFormProperties {
	}
	export function CreateDeleteReplicationTaskResponseFormGroup() {
		return new FormGroup<DeleteReplicationTaskResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface DeleteReplicationTaskMessage {

		/** Required */
		ReplicationTaskArn: string;
	}

	/** <p/> */
	export interface DeleteReplicationTaskMessageFormProperties {

		/** Required */
		ReplicationTaskArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteReplicationTaskMessageFormGroup() {
		return new FormGroup<DeleteReplicationTaskMessageFormProperties>({
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DescribeAccountAttributesResponse {
		AccountQuotas?: Array<AccountQuota>;
		UniqueAccountIdentifier?: string | null;
	}

	/** <p/> */
	export interface DescribeAccountAttributesResponseFormProperties {
		UniqueAccountIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccountAttributesResponseFormGroup() {
		return new FormGroup<DescribeAccountAttributesResponseFormProperties>({
			UniqueAccountIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a quota for an AWS account, for example, the number of replication instances allowed. */
	export interface AccountQuota {
		AccountQuotaName?: string | null;
		Used?: number | null;
		Max?: number | null;
	}

	/** Describes a quota for an AWS account, for example, the number of replication instances allowed. */
	export interface AccountQuotaFormProperties {
		AccountQuotaName: FormControl<string | null | undefined>,
		Used: FormControl<number | null | undefined>,
		Max: FormControl<number | null | undefined>,
	}
	export function CreateAccountQuotaFormGroup() {
		return new FormGroup<AccountQuotaFormProperties>({
			AccountQuotaName: new FormControl<string | null | undefined>(undefined),
			Used: new FormControl<number | null | undefined>(undefined),
			Max: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeAccountAttributesMessage {
	}

	/** <p/> */
	export interface DescribeAccountAttributesMessageFormProperties {
	}
	export function CreateDescribeAccountAttributesMessageFormGroup() {
		return new FormGroup<DescribeAccountAttributesMessageFormProperties>({
		});

	}

	export interface DescribeCertificatesResponse {
		Marker?: string | null;
		Certificates?: Array<Certificate>;
	}
	export interface DescribeCertificatesResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCertificatesResponseFormGroup() {
		return new FormGroup<DescribeCertificatesResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeCertificatesMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		Marker?: string | null;
	}
	export interface DescribeCertificatesMessageFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCertificatesMessageFormGroup() {
		return new FormGroup<DescribeCertificatesMessageFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies the name and value of a source filter object used to limit the number and type of records transferred from your source to your target. */
	export interface Filter {

		/** Required */
		Name: string;

		/** Required */
		Values: Array<string>;
	}

	/** Identifies the name and value of a source filter object used to limit the number and type of records transferred from your source to your target. */
	export interface FilterFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DescribeConnectionsResponse {
		Marker?: string | null;
		Connections?: Array<Connection>;
	}

	/** <p/> */
	export interface DescribeConnectionsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConnectionsResponseFormGroup() {
		return new FormGroup<DescribeConnectionsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeConnectionsMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		Marker?: string | null;
	}

	/** <p/> */
	export interface DescribeConnectionsMessageFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConnectionsMessageFormGroup() {
		return new FormGroup<DescribeConnectionsMessageFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeEndpointTypesResponse {
		Marker?: string | null;
		SupportedEndpointTypes?: Array<SupportedEndpointType>;
	}

	/** <p/> */
	export interface DescribeEndpointTypesResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEndpointTypesResponseFormGroup() {
		return new FormGroup<DescribeEndpointTypesResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about types of supported endpoints in response to a request by the <code>DescribeEndpointTypes</code> operation. This information includes the type of endpoint, the database engine name, and whether change data capture (CDC) is supported. */
	export interface SupportedEndpointType {
		EngineName?: string | null;
		SupportsCDC?: boolean | null;
		EndpointType?: EndpointEndpointType | null;
		ReplicationInstanceEngineMinimumVersion?: string | null;
		EngineDisplayName?: string | null;
	}

	/** Provides information about types of supported endpoints in response to a request by the <code>DescribeEndpointTypes</code> operation. This information includes the type of endpoint, the database engine name, and whether change data capture (CDC) is supported. */
	export interface SupportedEndpointTypeFormProperties {
		EngineName: FormControl<string | null | undefined>,
		SupportsCDC: FormControl<boolean | null | undefined>,
		EndpointType: FormControl<EndpointEndpointType | null | undefined>,
		ReplicationInstanceEngineMinimumVersion: FormControl<string | null | undefined>,
		EngineDisplayName: FormControl<string | null | undefined>,
	}
	export function CreateSupportedEndpointTypeFormGroup() {
		return new FormGroup<SupportedEndpointTypeFormProperties>({
			EngineName: new FormControl<string | null | undefined>(undefined),
			SupportsCDC: new FormControl<boolean | null | undefined>(undefined),
			EndpointType: new FormControl<EndpointEndpointType | null | undefined>(undefined),
			ReplicationInstanceEngineMinimumVersion: new FormControl<string | null | undefined>(undefined),
			EngineDisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeEndpointTypesMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		Marker?: string | null;
	}

	/** <p/> */
	export interface DescribeEndpointTypesMessageFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEndpointTypesMessageFormGroup() {
		return new FormGroup<DescribeEndpointTypesMessageFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeEndpointsResponse {
		Marker?: string | null;
		Endpoints?: Array<Endpoint>;
	}

	/** <p/> */
	export interface DescribeEndpointsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEndpointsResponseFormGroup() {
		return new FormGroup<DescribeEndpointsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeEndpointsMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		Marker?: string | null;
	}

	/** <p/> */
	export interface DescribeEndpointsMessageFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEndpointsMessageFormGroup() {
		return new FormGroup<DescribeEndpointsMessageFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeEventCategoriesResponse {
		EventCategoryGroupList?: Array<EventCategoryGroup>;
	}

	/** <p/> */
	export interface DescribeEventCategoriesResponseFormProperties {
	}
	export function CreateDescribeEventCategoriesResponseFormGroup() {
		return new FormGroup<DescribeEventCategoriesResponseFormProperties>({
		});

	}


	/** Lists categories of events subscribed to, and generated by, the applicable AWS DMS resource type. */
	export interface EventCategoryGroup {
		SourceType?: string | null;
		EventCategories?: Array<string>;
	}

	/** Lists categories of events subscribed to, and generated by, the applicable AWS DMS resource type. */
	export interface EventCategoryGroupFormProperties {
		SourceType: FormControl<string | null | undefined>,
	}
	export function CreateEventCategoryGroupFormGroup() {
		return new FormGroup<EventCategoryGroupFormProperties>({
			SourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeEventCategoriesMessage {
		SourceType?: string | null;
		Filters?: Array<Filter>;
	}

	/** <p/> */
	export interface DescribeEventCategoriesMessageFormProperties {
		SourceType: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventCategoriesMessageFormGroup() {
		return new FormGroup<DescribeEventCategoriesMessageFormProperties>({
			SourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeEventSubscriptionsResponse {
		Marker?: string | null;
		EventSubscriptionsList?: Array<EventSubscription>;
	}

	/** <p/> */
	export interface DescribeEventSubscriptionsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventSubscriptionsResponseFormGroup() {
		return new FormGroup<DescribeEventSubscriptionsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeEventSubscriptionsMessage {
		SubscriptionName?: string | null;
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		Marker?: string | null;
	}

	/** <p/> */
	export interface DescribeEventSubscriptionsMessageFormProperties {
		SubscriptionName: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventSubscriptionsMessageFormGroup() {
		return new FormGroup<DescribeEventSubscriptionsMessageFormProperties>({
			SubscriptionName: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeEventsResponse {
		Marker?: string | null;
		Events?: Array<Event>;
	}

	/** <p/> */
	export interface DescribeEventsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventsResponseFormGroup() {
		return new FormGroup<DescribeEventsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an identifiable significant activity that affects a replication instance or task. This object can provide the message, the available event categories, the date and source of the event, and the AWS DMS resource type. */
	export interface Event {
		SourceIdentifier?: string | null;
		SourceType?: EventSourceType | null;
		Message?: string | null;
		EventCategories?: Array<string>;
		Date?: Date | null;
	}

	/** Describes an identifiable significant activity that affects a replication instance or task. This object can provide the message, the available event categories, the date and source of the event, and the AWS DMS resource type. */
	export interface EventFormProperties {
		SourceIdentifier: FormControl<string | null | undefined>,
		SourceType: FormControl<EventSourceType | null | undefined>,
		Message: FormControl<string | null | undefined>,
		Date: FormControl<Date | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			SourceIdentifier: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<EventSourceType | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			Date: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum EventSourceType { replication_instance = 0 }


	/** <p/> */
	export interface DescribeEventsMessage {
		SourceIdentifier?: string | null;
		SourceType?: DescribeEventsMessageSourceType | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
		Duration?: number | null;
		EventCategories?: Array<string>;
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		Marker?: string | null;
	}

	/** <p/> */
	export interface DescribeEventsMessageFormProperties {
		SourceIdentifier: FormControl<string | null | undefined>,
		SourceType: FormControl<DescribeEventsMessageSourceType | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventsMessageFormGroup() {
		return new FormGroup<DescribeEventsMessageFormProperties>({
			SourceIdentifier: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<DescribeEventsMessageSourceType | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DescribeEventsMessageSourceType { replication_instance = 0 }


	/** <p/> */
	export interface DescribeOrderableReplicationInstancesResponse {
		OrderableReplicationInstances?: Array<OrderableReplicationInstance>;
		Marker?: string | null;
	}

	/** <p/> */
	export interface DescribeOrderableReplicationInstancesResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOrderableReplicationInstancesResponseFormGroup() {
		return new FormGroup<DescribeOrderableReplicationInstancesResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** In response to the <code>DescribeOrderableReplicationInstances</code> operation, this object describes an available replication instance. This description includes the replication instance's type, engine version, and allocated storage. */
	export interface OrderableReplicationInstance {
		EngineVersion?: string | null;
		ReplicationInstanceClass?: string | null;
		StorageType?: string | null;
		MinAllocatedStorage?: number | null;
		MaxAllocatedStorage?: number | null;
		DefaultAllocatedStorage?: number | null;
		IncludedAllocatedStorage?: number | null;
		AvailabilityZones?: Array<string>;
		ReleaseStatus?: OrderableReplicationInstanceReleaseStatus | null;
	}

	/** In response to the <code>DescribeOrderableReplicationInstances</code> operation, this object describes an available replication instance. This description includes the replication instance's type, engine version, and allocated storage. */
	export interface OrderableReplicationInstanceFormProperties {
		EngineVersion: FormControl<string | null | undefined>,
		ReplicationInstanceClass: FormControl<string | null | undefined>,
		StorageType: FormControl<string | null | undefined>,
		MinAllocatedStorage: FormControl<number | null | undefined>,
		MaxAllocatedStorage: FormControl<number | null | undefined>,
		DefaultAllocatedStorage: FormControl<number | null | undefined>,
		IncludedAllocatedStorage: FormControl<number | null | undefined>,
		ReleaseStatus: FormControl<OrderableReplicationInstanceReleaseStatus | null | undefined>,
	}
	export function CreateOrderableReplicationInstanceFormGroup() {
		return new FormGroup<OrderableReplicationInstanceFormProperties>({
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			ReplicationInstanceClass: new FormControl<string | null | undefined>(undefined),
			StorageType: new FormControl<string | null | undefined>(undefined),
			MinAllocatedStorage: new FormControl<number | null | undefined>(undefined),
			MaxAllocatedStorage: new FormControl<number | null | undefined>(undefined),
			DefaultAllocatedStorage: new FormControl<number | null | undefined>(undefined),
			IncludedAllocatedStorage: new FormControl<number | null | undefined>(undefined),
			ReleaseStatus: new FormControl<OrderableReplicationInstanceReleaseStatus | null | undefined>(undefined),
		});

	}

	export enum OrderableReplicationInstanceReleaseStatus { beta = 0 }


	/** <p/> */
	export interface DescribeOrderableReplicationInstancesMessage {
		MaxRecords?: number | null;
		Marker?: string | null;
	}

	/** <p/> */
	export interface DescribeOrderableReplicationInstancesMessageFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOrderableReplicationInstancesMessageFormGroup() {
		return new FormGroup<DescribeOrderableReplicationInstancesMessageFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribePendingMaintenanceActionsResponse {
		PendingMaintenanceActions?: Array<ResourcePendingMaintenanceActions>;
		Marker?: string | null;
	}

	/** <p/> */
	export interface DescribePendingMaintenanceActionsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribePendingMaintenanceActionsResponseFormGroup() {
		return new FormGroup<DescribePendingMaintenanceActionsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribePendingMaintenanceActionsMessage {
		ReplicationInstanceArn?: string | null;
		Filters?: Array<Filter>;
		Marker?: string | null;
		MaxRecords?: number | null;
	}

	/** <p/> */
	export interface DescribePendingMaintenanceActionsMessageFormProperties {
		ReplicationInstanceArn: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
	}
	export function CreateDescribePendingMaintenanceActionsMessageFormGroup() {
		return new FormGroup<DescribePendingMaintenanceActionsMessageFormProperties>({
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeRefreshSchemasStatusResponse {

		/** Provides information that describes status of a schema at an endpoint specified by the <code>DescribeRefreshSchemaStatus</code> operation. */
		RefreshSchemasStatus?: RefreshSchemasStatus;
	}

	/** <p/> */
	export interface DescribeRefreshSchemasStatusResponseFormProperties {
	}
	export function CreateDescribeRefreshSchemasStatusResponseFormGroup() {
		return new FormGroup<DescribeRefreshSchemasStatusResponseFormProperties>({
		});

	}


	/** Provides information that describes status of a schema at an endpoint specified by the <code>DescribeRefreshSchemaStatus</code> operation. */
	export interface RefreshSchemasStatus {
		EndpointArn?: string | null;
		ReplicationInstanceArn?: string | null;
		Status?: RefreshSchemasStatusStatus | null;
		LastRefreshDate?: Date | null;
		LastFailureMessage?: string | null;
	}

	/** Provides information that describes status of a schema at an endpoint specified by the <code>DescribeRefreshSchemaStatus</code> operation. */
	export interface RefreshSchemasStatusFormProperties {
		EndpointArn: FormControl<string | null | undefined>,
		ReplicationInstanceArn: FormControl<string | null | undefined>,
		Status: FormControl<RefreshSchemasStatusStatus | null | undefined>,
		LastRefreshDate: FormControl<Date | null | undefined>,
		LastFailureMessage: FormControl<string | null | undefined>,
	}
	export function CreateRefreshSchemasStatusFormGroup() {
		return new FormGroup<RefreshSchemasStatusFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined),
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<RefreshSchemasStatusStatus | null | undefined>(undefined),
			LastRefreshDate: new FormControl<Date | null | undefined>(undefined),
			LastFailureMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RefreshSchemasStatusStatus { successful = 0, failed = 1, refreshing = 2 }


	/** <p/> */
	export interface DescribeRefreshSchemasStatusMessage {

		/** Required */
		EndpointArn: string;
	}

	/** <p/> */
	export interface DescribeRefreshSchemasStatusMessageFormProperties {

		/** Required */
		EndpointArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRefreshSchemasStatusMessageFormGroup() {
		return new FormGroup<DescribeRefreshSchemasStatusMessageFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeReplicationInstanceTaskLogsResponse {
		ReplicationInstanceArn?: string | null;
		ReplicationInstanceTaskLogs?: Array<ReplicationInstanceTaskLog>;
		Marker?: string | null;
	}
	export interface DescribeReplicationInstanceTaskLogsResponseFormProperties {
		ReplicationInstanceArn: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationInstanceTaskLogsResponseFormGroup() {
		return new FormGroup<DescribeReplicationInstanceTaskLogsResponseFormProperties>({
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains metadata for a replication instance task log. */
	export interface ReplicationInstanceTaskLog {
		ReplicationTaskName?: string | null;
		ReplicationTaskArn?: string | null;
		ReplicationInstanceTaskLogSize?: number | null;
	}

	/** Contains metadata for a replication instance task log. */
	export interface ReplicationInstanceTaskLogFormProperties {
		ReplicationTaskName: FormControl<string | null | undefined>,
		ReplicationTaskArn: FormControl<string | null | undefined>,
		ReplicationInstanceTaskLogSize: FormControl<number | null | undefined>,
	}
	export function CreateReplicationInstanceTaskLogFormGroup() {
		return new FormGroup<ReplicationInstanceTaskLogFormProperties>({
			ReplicationTaskName: new FormControl<string | null | undefined>(undefined),
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined),
			ReplicationInstanceTaskLogSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeReplicationInstanceTaskLogsMessage {

		/** Required */
		ReplicationInstanceArn: string;
		MaxRecords?: number | null;
		Marker?: string | null;
	}
	export interface DescribeReplicationInstanceTaskLogsMessageFormProperties {

		/** Required */
		ReplicationInstanceArn: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationInstanceTaskLogsMessageFormGroup() {
		return new FormGroup<DescribeReplicationInstanceTaskLogsMessageFormProperties>({
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReplicationInstancesResponse {
		Marker?: string | null;
		ReplicationInstances?: Array<ReplicationInstance>;
	}

	/** <p/> */
	export interface DescribeReplicationInstancesResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationInstancesResponseFormGroup() {
		return new FormGroup<DescribeReplicationInstancesResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReplicationInstancesMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		Marker?: string | null;
	}

	/** <p/> */
	export interface DescribeReplicationInstancesMessageFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationInstancesMessageFormGroup() {
		return new FormGroup<DescribeReplicationInstancesMessageFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReplicationSubnetGroupsResponse {
		Marker?: string | null;
		ReplicationSubnetGroups?: Array<ReplicationSubnetGroup>;
	}

	/** <p/> */
	export interface DescribeReplicationSubnetGroupsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationSubnetGroupsResponseFormGroup() {
		return new FormGroup<DescribeReplicationSubnetGroupsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReplicationSubnetGroupsMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		Marker?: string | null;
	}

	/** <p/> */
	export interface DescribeReplicationSubnetGroupsMessageFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationSubnetGroupsMessageFormGroup() {
		return new FormGroup<DescribeReplicationSubnetGroupsMessageFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReplicationTaskAssessmentResultsResponse {
		Marker?: string | null;
		BucketName?: string | null;
		ReplicationTaskAssessmentResults?: Array<ReplicationTaskAssessmentResult>;
	}

	/** <p/> */
	export interface DescribeReplicationTaskAssessmentResultsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
		BucketName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationTaskAssessmentResultsResponseFormGroup() {
		return new FormGroup<DescribeReplicationTaskAssessmentResultsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
			BucketName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The task assessment report in JSON format.  */
	export interface ReplicationTaskAssessmentResult {
		ReplicationTaskIdentifier?: string | null;
		ReplicationTaskArn?: string | null;
		ReplicationTaskLastAssessmentDate?: Date | null;
		AssessmentStatus?: string | null;
		AssessmentResultsFile?: string | null;
		AssessmentResults?: string | null;
		S3ObjectUrl?: string | null;
	}

	/**  The task assessment report in JSON format.  */
	export interface ReplicationTaskAssessmentResultFormProperties {
		ReplicationTaskIdentifier: FormControl<string | null | undefined>,
		ReplicationTaskArn: FormControl<string | null | undefined>,
		ReplicationTaskLastAssessmentDate: FormControl<Date | null | undefined>,
		AssessmentStatus: FormControl<string | null | undefined>,
		AssessmentResultsFile: FormControl<string | null | undefined>,
		AssessmentResults: FormControl<string | null | undefined>,
		S3ObjectUrl: FormControl<string | null | undefined>,
	}
	export function CreateReplicationTaskAssessmentResultFormGroup() {
		return new FormGroup<ReplicationTaskAssessmentResultFormProperties>({
			ReplicationTaskIdentifier: new FormControl<string | null | undefined>(undefined),
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined),
			ReplicationTaskLastAssessmentDate: new FormControl<Date | null | undefined>(undefined),
			AssessmentStatus: new FormControl<string | null | undefined>(undefined),
			AssessmentResultsFile: new FormControl<string | null | undefined>(undefined),
			AssessmentResults: new FormControl<string | null | undefined>(undefined),
			S3ObjectUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReplicationTaskAssessmentResultsMessage {
		ReplicationTaskArn?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}

	/** <p/> */
	export interface DescribeReplicationTaskAssessmentResultsMessageFormProperties {
		ReplicationTaskArn: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationTaskAssessmentResultsMessageFormGroup() {
		return new FormGroup<DescribeReplicationTaskAssessmentResultsMessageFormProperties>({
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReplicationTasksResponse {
		Marker?: string | null;
		ReplicationTasks?: Array<ReplicationTask>;
	}

	/** <p/> */
	export interface DescribeReplicationTasksResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplicationTasksResponseFormGroup() {
		return new FormGroup<DescribeReplicationTasksResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeReplicationTasksMessage {
		Filters?: Array<Filter>;
		MaxRecords?: number | null;
		Marker?: string | null;
		WithoutSettings?: boolean | null;
	}

	/** <p/> */
	export interface DescribeReplicationTasksMessageFormProperties {
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		WithoutSettings: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeReplicationTasksMessageFormGroup() {
		return new FormGroup<DescribeReplicationTasksMessageFormProperties>({
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			WithoutSettings: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeSchemasResponse {
		Marker?: string | null;
		Schemas?: Array<string>;
	}

	/** <p/> */
	export interface DescribeSchemasResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSchemasResponseFormGroup() {
		return new FormGroup<DescribeSchemasResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeSchemasMessage {

		/** Required */
		EndpointArn: string;
		MaxRecords?: number | null;
		Marker?: string | null;
	}

	/** <p/> */
	export interface DescribeSchemasMessageFormProperties {

		/** Required */
		EndpointArn: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSchemasMessageFormGroup() {
		return new FormGroup<DescribeSchemasMessageFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeTableStatisticsResponse {
		ReplicationTaskArn?: string | null;
		TableStatistics?: Array<TableStatistics>;
		Marker?: string | null;
	}

	/** <p/> */
	export interface DescribeTableStatisticsResponseFormProperties {
		ReplicationTaskArn: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTableStatisticsResponseFormGroup() {
		return new FormGroup<DescribeTableStatisticsResponseFormProperties>({
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a collection of table statistics in response to a request by the <code>DescribeTableStatistics</code> operation. */
	export interface TableStatistics {
		SchemaName?: string | null;
		TableName?: string | null;
		Inserts?: number | null;
		Deletes?: number | null;
		Updates?: number | null;
		Ddls?: number | null;
		FullLoadRows?: number | null;
		FullLoadCondtnlChkFailedRows?: number | null;
		FullLoadErrorRows?: number | null;
		FullLoadStartTime?: Date | null;
		FullLoadEndTime?: Date | null;
		FullLoadReloaded?: boolean | null;
		LastUpdateTime?: Date | null;
		TableState?: string | null;
		ValidationPendingRecords?: number | null;
		ValidationFailedRecords?: number | null;
		ValidationSuspendedRecords?: number | null;
		ValidationState?: string | null;
		ValidationStateDetails?: string | null;
	}

	/** Provides a collection of table statistics in response to a request by the <code>DescribeTableStatistics</code> operation. */
	export interface TableStatisticsFormProperties {
		SchemaName: FormControl<string | null | undefined>,
		TableName: FormControl<string | null | undefined>,
		Inserts: FormControl<number | null | undefined>,
		Deletes: FormControl<number | null | undefined>,
		Updates: FormControl<number | null | undefined>,
		Ddls: FormControl<number | null | undefined>,
		FullLoadRows: FormControl<number | null | undefined>,
		FullLoadCondtnlChkFailedRows: FormControl<number | null | undefined>,
		FullLoadErrorRows: FormControl<number | null | undefined>,
		FullLoadStartTime: FormControl<Date | null | undefined>,
		FullLoadEndTime: FormControl<Date | null | undefined>,
		FullLoadReloaded: FormControl<boolean | null | undefined>,
		LastUpdateTime: FormControl<Date | null | undefined>,
		TableState: FormControl<string | null | undefined>,
		ValidationPendingRecords: FormControl<number | null | undefined>,
		ValidationFailedRecords: FormControl<number | null | undefined>,
		ValidationSuspendedRecords: FormControl<number | null | undefined>,
		ValidationState: FormControl<string | null | undefined>,
		ValidationStateDetails: FormControl<string | null | undefined>,
	}
	export function CreateTableStatisticsFormGroup() {
		return new FormGroup<TableStatisticsFormProperties>({
			SchemaName: new FormControl<string | null | undefined>(undefined),
			TableName: new FormControl<string | null | undefined>(undefined),
			Inserts: new FormControl<number | null | undefined>(undefined),
			Deletes: new FormControl<number | null | undefined>(undefined),
			Updates: new FormControl<number | null | undefined>(undefined),
			Ddls: new FormControl<number | null | undefined>(undefined),
			FullLoadRows: new FormControl<number | null | undefined>(undefined),
			FullLoadCondtnlChkFailedRows: new FormControl<number | null | undefined>(undefined),
			FullLoadErrorRows: new FormControl<number | null | undefined>(undefined),
			FullLoadStartTime: new FormControl<Date | null | undefined>(undefined),
			FullLoadEndTime: new FormControl<Date | null | undefined>(undefined),
			FullLoadReloaded: new FormControl<boolean | null | undefined>(undefined),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			TableState: new FormControl<string | null | undefined>(undefined),
			ValidationPendingRecords: new FormControl<number | null | undefined>(undefined),
			ValidationFailedRecords: new FormControl<number | null | undefined>(undefined),
			ValidationSuspendedRecords: new FormControl<number | null | undefined>(undefined),
			ValidationState: new FormControl<string | null | undefined>(undefined),
			ValidationStateDetails: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeTableStatisticsMessage {

		/** Required */
		ReplicationTaskArn: string;
		MaxRecords?: number | null;
		Marker?: string | null;
		Filters?: Array<Filter>;
	}

	/** <p/> */
	export interface DescribeTableStatisticsMessageFormProperties {

		/** Required */
		ReplicationTaskArn: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTableStatisticsMessageFormGroup() {
		return new FormGroup<DescribeTableStatisticsMessageFormProperties>({
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportCertificateResponse {

		/** The SSL certificate that can be used to encrypt connections between the endpoints and the replication instance. */
		Certificate?: Certificate;
	}
	export interface ImportCertificateResponseFormProperties {
	}
	export function CreateImportCertificateResponseFormGroup() {
		return new FormGroup<ImportCertificateResponseFormProperties>({
		});

	}

	export interface ImportCertificateMessage {

		/** Required */
		CertificateIdentifier: string;
		CertificatePem?: string | null;
		CertificateWallet?: string | null;
		Tags?: Array<Tag>;
	}
	export interface ImportCertificateMessageFormProperties {

		/** Required */
		CertificateIdentifier: FormControl<string | null | undefined>,
		CertificatePem: FormControl<string | null | undefined>,
		CertificateWallet: FormControl<string | null | undefined>,
	}
	export function CreateImportCertificateMessageFormGroup() {
		return new FormGroup<ImportCertificateMessageFormProperties>({
			CertificateIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CertificatePem: new FormControl<string | null | undefined>(undefined),
			CertificateWallet: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidCertificateFault {
	}
	export interface InvalidCertificateFaultFormProperties {
	}
	export function CreateInvalidCertificateFaultFormGroup() {
		return new FormGroup<InvalidCertificateFaultFormProperties>({
		});

	}


	/** <p/> */
	export interface ListTagsForResourceResponse {
		TagList?: Array<Tag>;
	}

	/** <p/> */
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface ListTagsForResourceMessage {

		/** Required */
		ResourceArn: string;
	}

	/** <p/> */
	export interface ListTagsForResourceMessageFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceMessageFormGroup() {
		return new FormGroup<ListTagsForResourceMessageFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface ModifyEndpointResponse {

		/** <p>Describes an endpoint of a database instance in response to operations such as the following:</p> <ul> <li> <p> <code>CreateEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpointTypes</code> </p> </li> <li> <p> <code>ModifyEndpoint</code> </p> </li> </ul> */
		Endpoint?: Endpoint;
	}

	/** <p/> */
	export interface ModifyEndpointResponseFormProperties {
	}
	export function CreateModifyEndpointResponseFormGroup() {
		return new FormGroup<ModifyEndpointResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface ModifyEndpointMessage {

		/** Required */
		EndpointArn: string;
		EndpointIdentifier?: string | null;
		EndpointType?: EndpointEndpointType | null;
		EngineName?: string | null;
		Username?: string | null;
		Password?: string | null;
		ServerName?: string | null;
		Port?: number | null;
		DatabaseName?: string | null;
		ExtraConnectionAttributes?: string | null;
		CertificateArn?: string | null;
		SslMode?: ModifyEndpointMessageSslMode | null;
		ServiceAccessRoleArn?: string | null;
		ExternalTableDefinition?: string | null;

		/** Provides the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role used to define an Amazon DynamoDB target endpoint. */
		DynamoDbSettings?: DynamoDbSettings;

		/** Settings for exporting data to Amazon S3. */
		S3Settings?: S3Settings;

		/** The settings in JSON format for the DMS Transfer type source endpoint. */
		DmsTransferSettings?: DmsTransferSettings;

		/** Provides information that defines a MongoDB endpoint. */
		MongoDbSettings?: MongoDbSettings;

		/** Provides information that describes an Amazon Kinesis Data Stream endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
		KinesisSettings?: KinesisSettings;

		/** Provides information that describes an Apache Kafka endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
		KafkaSettings?: KafkaSettings;

		/** Provides information that defines an Elasticsearch endpoint. */
		ElasticsearchSettings?: ElasticsearchSettings;

		/** Provides information that defines an Amazon Neptune endpoint. */
		NeptuneSettings?: NeptuneSettings;

		/** Provides information that defines an Amazon Redshift endpoint. */
		RedshiftSettings?: RedshiftSettings;
	}

	/** <p/> */
	export interface ModifyEndpointMessageFormProperties {

		/** Required */
		EndpointArn: FormControl<string | null | undefined>,
		EndpointIdentifier: FormControl<string | null | undefined>,
		EndpointType: FormControl<EndpointEndpointType | null | undefined>,
		EngineName: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
		ServerName: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		ExtraConnectionAttributes: FormControl<string | null | undefined>,
		CertificateArn: FormControl<string | null | undefined>,
		SslMode: FormControl<ModifyEndpointMessageSslMode | null | undefined>,
		ServiceAccessRoleArn: FormControl<string | null | undefined>,
		ExternalTableDefinition: FormControl<string | null | undefined>,
	}
	export function CreateModifyEndpointMessageFormGroup() {
		return new FormGroup<ModifyEndpointMessageFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EndpointIdentifier: new FormControl<string | null | undefined>(undefined),
			EndpointType: new FormControl<EndpointEndpointType | null | undefined>(undefined),
			EngineName: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			ExtraConnectionAttributes: new FormControl<string | null | undefined>(undefined),
			CertificateArn: new FormControl<string | null | undefined>(undefined),
			SslMode: new FormControl<ModifyEndpointMessageSslMode | null | undefined>(undefined),
			ServiceAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			ExternalTableDefinition: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ModifyEndpointMessageSslMode { none = 0, require = 1, verify_ca = 2, verify_full = 3 }


	/** <p/> */
	export interface ModifyEventSubscriptionResponse {

		/** Describes an event notification subscription created by the <code>CreateEventSubscription</code> operation. */
		EventSubscription?: EventSubscription;
	}

	/** <p/> */
	export interface ModifyEventSubscriptionResponseFormProperties {
	}
	export function CreateModifyEventSubscriptionResponseFormGroup() {
		return new FormGroup<ModifyEventSubscriptionResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface ModifyEventSubscriptionMessage {

		/** Required */
		SubscriptionName: string;
		SnsTopicArn?: string | null;
		SourceType?: string | null;
		EventCategories?: Array<string>;
		Enabled?: boolean | null;
	}

	/** <p/> */
	export interface ModifyEventSubscriptionMessageFormProperties {

		/** Required */
		SubscriptionName: FormControl<string | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,
		SourceType: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateModifyEventSubscriptionMessageFormGroup() {
		return new FormGroup<ModifyEventSubscriptionMessageFormProperties>({
			SubscriptionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface ModifyReplicationInstanceResponse {

		/** Provides information that defines a replication instance. */
		ReplicationInstance?: ReplicationInstance;
	}

	/** <p/> */
	export interface ModifyReplicationInstanceResponseFormProperties {
	}
	export function CreateModifyReplicationInstanceResponseFormGroup() {
		return new FormGroup<ModifyReplicationInstanceResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface ModifyReplicationInstanceMessage {

		/** Required */
		ReplicationInstanceArn: string;
		AllocatedStorage?: number | null;
		ApplyImmediately?: boolean | null;
		ReplicationInstanceClass?: string | null;
		VpcSecurityGroupIds?: Array<string>;
		PreferredMaintenanceWindow?: string | null;
		MultiAZ?: boolean | null;
		EngineVersion?: string | null;
		AllowMajorVersionUpgrade?: boolean | null;
		AutoMinorVersionUpgrade?: boolean | null;
		ReplicationInstanceIdentifier?: string | null;
	}

	/** <p/> */
	export interface ModifyReplicationInstanceMessageFormProperties {

		/** Required */
		ReplicationInstanceArn: FormControl<string | null | undefined>,
		AllocatedStorage: FormControl<number | null | undefined>,
		ApplyImmediately: FormControl<boolean | null | undefined>,
		ReplicationInstanceClass: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		MultiAZ: FormControl<boolean | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		AllowMajorVersionUpgrade: FormControl<boolean | null | undefined>,
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		ReplicationInstanceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateModifyReplicationInstanceMessageFormGroup() {
		return new FormGroup<ModifyReplicationInstanceMessageFormProperties>({
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AllocatedStorage: new FormControl<number | null | undefined>(undefined),
			ApplyImmediately: new FormControl<boolean | null | undefined>(undefined),
			ReplicationInstanceClass: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			AllowMajorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			ReplicationInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpgradeDependencyFailureFault {
	}
	export interface UpgradeDependencyFailureFaultFormProperties {
	}
	export function CreateUpgradeDependencyFailureFaultFormGroup() {
		return new FormGroup<UpgradeDependencyFailureFaultFormProperties>({
		});

	}


	/** <p/> */
	export interface ModifyReplicationSubnetGroupResponse {

		/** Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroup</code> operation. */
		ReplicationSubnetGroup?: ReplicationSubnetGroup;
	}

	/** <p/> */
	export interface ModifyReplicationSubnetGroupResponseFormProperties {
	}
	export function CreateModifyReplicationSubnetGroupResponseFormGroup() {
		return new FormGroup<ModifyReplicationSubnetGroupResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface ModifyReplicationSubnetGroupMessage {

		/** Required */
		ReplicationSubnetGroupIdentifier: string;
		ReplicationSubnetGroupDescription?: string | null;

		/** Required */
		SubnetIds: Array<string>;
	}

	/** <p/> */
	export interface ModifyReplicationSubnetGroupMessageFormProperties {

		/** Required */
		ReplicationSubnetGroupIdentifier: FormControl<string | null | undefined>,
		ReplicationSubnetGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateModifyReplicationSubnetGroupMessageFormGroup() {
		return new FormGroup<ModifyReplicationSubnetGroupMessageFormProperties>({
			ReplicationSubnetGroupIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplicationSubnetGroupDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubnetAlreadyInUse {
	}
	export interface SubnetAlreadyInUseFormProperties {
	}
	export function CreateSubnetAlreadyInUseFormGroup() {
		return new FormGroup<SubnetAlreadyInUseFormProperties>({
		});

	}


	/** <p/> */
	export interface ModifyReplicationTaskResponse {

		/** Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation. */
		ReplicationTask?: ReplicationTask;
	}

	/** <p/> */
	export interface ModifyReplicationTaskResponseFormProperties {
	}
	export function CreateModifyReplicationTaskResponseFormGroup() {
		return new FormGroup<ModifyReplicationTaskResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface ModifyReplicationTaskMessage {

		/** Required */
		ReplicationTaskArn: string;
		ReplicationTaskIdentifier?: string | null;
		MigrationType?: ModifyReplicationTaskMessageMigrationType | null;
		TableMappings?: string | null;
		ReplicationTaskSettings?: string | null;
		CdcStartTime?: Date | null;
		CdcStartPosition?: string | null;
		CdcStopPosition?: string | null;
		TaskData?: string | null;
	}

	/** <p/> */
	export interface ModifyReplicationTaskMessageFormProperties {

		/** Required */
		ReplicationTaskArn: FormControl<string | null | undefined>,
		ReplicationTaskIdentifier: FormControl<string | null | undefined>,
		MigrationType: FormControl<ModifyReplicationTaskMessageMigrationType | null | undefined>,
		TableMappings: FormControl<string | null | undefined>,
		ReplicationTaskSettings: FormControl<string | null | undefined>,
		CdcStartTime: FormControl<Date | null | undefined>,
		CdcStartPosition: FormControl<string | null | undefined>,
		CdcStopPosition: FormControl<string | null | undefined>,
		TaskData: FormControl<string | null | undefined>,
	}
	export function CreateModifyReplicationTaskMessageFormGroup() {
		return new FormGroup<ModifyReplicationTaskMessageFormProperties>({
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplicationTaskIdentifier: new FormControl<string | null | undefined>(undefined),
			MigrationType: new FormControl<ModifyReplicationTaskMessageMigrationType | null | undefined>(undefined),
			TableMappings: new FormControl<string | null | undefined>(undefined),
			ReplicationTaskSettings: new FormControl<string | null | undefined>(undefined),
			CdcStartTime: new FormControl<Date | null | undefined>(undefined),
			CdcStartPosition: new FormControl<string | null | undefined>(undefined),
			CdcStopPosition: new FormControl<string | null | undefined>(undefined),
			TaskData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ModifyReplicationTaskMessageMigrationType { full_load = 0, cdc = 1, full_load_and_cdc = 2 }

	export interface RebootReplicationInstanceResponse {

		/** Provides information that defines a replication instance. */
		ReplicationInstance?: ReplicationInstance;
	}
	export interface RebootReplicationInstanceResponseFormProperties {
	}
	export function CreateRebootReplicationInstanceResponseFormGroup() {
		return new FormGroup<RebootReplicationInstanceResponseFormProperties>({
		});

	}

	export interface RebootReplicationInstanceMessage {

		/** Required */
		ReplicationInstanceArn: string;
		ForceFailover?: boolean | null;
	}
	export interface RebootReplicationInstanceMessageFormProperties {

		/** Required */
		ReplicationInstanceArn: FormControl<string | null | undefined>,
		ForceFailover: FormControl<boolean | null | undefined>,
	}
	export function CreateRebootReplicationInstanceMessageFormGroup() {
		return new FormGroup<RebootReplicationInstanceMessageFormProperties>({
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ForceFailover: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface RefreshSchemasResponse {

		/** Provides information that describes status of a schema at an endpoint specified by the <code>DescribeRefreshSchemaStatus</code> operation. */
		RefreshSchemasStatus?: RefreshSchemasStatus;
	}

	/** <p/> */
	export interface RefreshSchemasResponseFormProperties {
	}
	export function CreateRefreshSchemasResponseFormGroup() {
		return new FormGroup<RefreshSchemasResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface RefreshSchemasMessage {

		/** Required */
		EndpointArn: string;

		/** Required */
		ReplicationInstanceArn: string;
	}

	/** <p/> */
	export interface RefreshSchemasMessageFormProperties {

		/** Required */
		EndpointArn: FormControl<string | null | undefined>,

		/** Required */
		ReplicationInstanceArn: FormControl<string | null | undefined>,
	}
	export function CreateRefreshSchemasMessageFormGroup() {
		return new FormGroup<RefreshSchemasMessageFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ReloadTablesResponse {
		ReplicationTaskArn?: string | null;
	}
	export interface ReloadTablesResponseFormProperties {
		ReplicationTaskArn: FormControl<string | null | undefined>,
	}
	export function CreateReloadTablesResponseFormGroup() {
		return new FormGroup<ReloadTablesResponseFormProperties>({
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReloadTablesMessage {

		/** Required */
		ReplicationTaskArn: string;

		/** Required */
		TablesToReload: Array<TableToReload>;
		ReloadOption?: ReloadTablesMessageReloadOption | null;
	}
	export interface ReloadTablesMessageFormProperties {

		/** Required */
		ReplicationTaskArn: FormControl<string | null | undefined>,
		ReloadOption: FormControl<ReloadTablesMessageReloadOption | null | undefined>,
	}
	export function CreateReloadTablesMessageFormGroup() {
		return new FormGroup<ReloadTablesMessageFormProperties>({
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReloadOption: new FormControl<ReloadTablesMessageReloadOption | null | undefined>(undefined),
		});

	}


	/** Provides the name of the schema and table to be reloaded. */
	export interface TableToReload {
		SchemaName?: string | null;
		TableName?: string | null;
	}

	/** Provides the name of the schema and table to be reloaded. */
	export interface TableToReloadFormProperties {
		SchemaName: FormControl<string | null | undefined>,
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateTableToReloadFormGroup() {
		return new FormGroup<TableToReloadFormProperties>({
			SchemaName: new FormControl<string | null | undefined>(undefined),
			TableName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReloadTablesMessageReloadOption { data_reload = 0, validate_only = 1 }


	/** <p/> */
	export interface RemoveTagsFromResourceResponse {
	}

	/** <p/> */
	export interface RemoveTagsFromResourceResponseFormProperties {
	}
	export function CreateRemoveTagsFromResourceResponseFormGroup() {
		return new FormGroup<RemoveTagsFromResourceResponseFormProperties>({
		});

	}


	/** Removes one or more tags from an AWS DMS resource. */
	export interface RemoveTagsFromResourceMessage {

		/** Required */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}

	/** Removes one or more tags from an AWS DMS resource. */
	export interface RemoveTagsFromResourceMessageFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTagsFromResourceMessageFormGroup() {
		return new FormGroup<RemoveTagsFromResourceMessageFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface StartReplicationTaskResponse {

		/** Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation. */
		ReplicationTask?: ReplicationTask;
	}

	/** <p/> */
	export interface StartReplicationTaskResponseFormProperties {
	}
	export function CreateStartReplicationTaskResponseFormGroup() {
		return new FormGroup<StartReplicationTaskResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface StartReplicationTaskMessage {

		/** Required */
		ReplicationTaskArn: string;

		/** Required */
		StartReplicationTaskType: StartReplicationTaskMessageStartReplicationTaskType;
		CdcStartTime?: Date | null;
		CdcStartPosition?: string | null;
		CdcStopPosition?: string | null;
	}

	/** <p/> */
	export interface StartReplicationTaskMessageFormProperties {

		/** Required */
		ReplicationTaskArn: FormControl<string | null | undefined>,

		/** Required */
		StartReplicationTaskType: FormControl<StartReplicationTaskMessageStartReplicationTaskType | null | undefined>,
		CdcStartTime: FormControl<Date | null | undefined>,
		CdcStartPosition: FormControl<string | null | undefined>,
		CdcStopPosition: FormControl<string | null | undefined>,
	}
	export function CreateStartReplicationTaskMessageFormGroup() {
		return new FormGroup<StartReplicationTaskMessageFormProperties>({
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartReplicationTaskType: new FormControl<StartReplicationTaskMessageStartReplicationTaskType | null | undefined>(undefined, [Validators.required]),
			CdcStartTime: new FormControl<Date | null | undefined>(undefined),
			CdcStartPosition: new FormControl<string | null | undefined>(undefined),
			CdcStopPosition: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StartReplicationTaskMessageStartReplicationTaskType { start_replication = 0, resume_processing = 1, reload_target = 2 }


	/** <p/> */
	export interface StartReplicationTaskAssessmentResponse {

		/** Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation. */
		ReplicationTask?: ReplicationTask;
	}

	/** <p/> */
	export interface StartReplicationTaskAssessmentResponseFormProperties {
	}
	export function CreateStartReplicationTaskAssessmentResponseFormGroup() {
		return new FormGroup<StartReplicationTaskAssessmentResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface StartReplicationTaskAssessmentMessage {

		/** Required */
		ReplicationTaskArn: string;
	}

	/** <p/> */
	export interface StartReplicationTaskAssessmentMessageFormProperties {

		/** Required */
		ReplicationTaskArn: FormControl<string | null | undefined>,
	}
	export function CreateStartReplicationTaskAssessmentMessageFormGroup() {
		return new FormGroup<StartReplicationTaskAssessmentMessageFormProperties>({
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface StopReplicationTaskResponse {

		/** Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation. */
		ReplicationTask?: ReplicationTask;
	}

	/** <p/> */
	export interface StopReplicationTaskResponseFormProperties {
	}
	export function CreateStopReplicationTaskResponseFormGroup() {
		return new FormGroup<StopReplicationTaskResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface StopReplicationTaskMessage {

		/** Required */
		ReplicationTaskArn: string;
	}

	/** <p/> */
	export interface StopReplicationTaskMessageFormProperties {

		/** Required */
		ReplicationTaskArn: FormControl<string | null | undefined>,
	}
	export function CreateStopReplicationTaskMessageFormGroup() {
		return new FormGroup<StopReplicationTaskMessageFormProperties>({
			ReplicationTaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface TestConnectionResponse {

		/** Status of the connection between an endpoint and a replication instance, including Amazon Resource Names (ARNs) and the last error message issued. */
		Connection?: Connection;
	}

	/** <p/> */
	export interface TestConnectionResponseFormProperties {
	}
	export function CreateTestConnectionResponseFormGroup() {
		return new FormGroup<TestConnectionResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface TestConnectionMessage {

		/** Required */
		ReplicationInstanceArn: string;

		/** Required */
		EndpointArn: string;
	}

	/** <p/> */
	export interface TestConnectionMessageFormProperties {

		/** Required */
		ReplicationInstanceArn: FormControl<string | null | undefined>,

		/** Required */
		EndpointArn: FormControl<string | null | undefined>,
	}
	export function CreateTestConnectionMessageFormGroup() {
		return new FormGroup<TestConnectionMessageFormProperties>({
			ReplicationInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AuthMechanismValue { _default = 0, mongodb_cr = 1, scram_sha_1 = 2 }

	export enum AuthTypeValue { no = 0, password = 1 }

	export enum CompressionTypeValue { none = 0, gzip = 1 }

	export enum ReplicationEndpointTypeValue { source = 0, target = 1 }

	export enum DmsSslModeValue { none = 0, require = 1, verify_ca = 2, verify_full = 3 }

	export enum MigrationTypeValue { full_load = 0, cdc = 1, full_load_and_cdc = 2 }

	export enum DataFormatValue { csv = 0, parquet = 1 }

	export enum SourceType { replication_instance = 0 }

	export enum EncodingTypeValue { plain = 0, plain_dictionary = 1, rle_dictionary = 2 }

	export enum EncryptionModeValue { sse_s3 = 0, sse_kms = 1 }

	export enum MessageFormatValue { json = 0, json_unformatted = 1 }

	export enum NestingLevelValue { none = 0, one = 1 }

	export enum ReleaseStatusValues { beta = 0 }

	export enum ParquetVersionValue { parquet_1_0 = 0, parquet_2_0 = 1 }

	export enum RefreshSchemasStatusTypeValue { successful = 0, failed = 1, refreshing = 2 }

	export enum ReloadOptionValue { data_reload = 0, validate_only = 1 }

	export enum StartReplicationTaskTypeValue { start_replication = 0, resume_processing = 1, reload_target = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds metadata tags to an AWS DMS resource, including replication instance, endpoint, security group, and migration task. These tags can also be used with cost allocation reporting to track cost associated with DMS resources, or used in a Condition statement in an IAM policy for DMS.
		 * Post #X-Amz-Target=AmazonDMSv20160101.AddTagsToResource
		 * @return {AddTagsToResourceResponse} Success
		 */
		AddTagsToResource(requestBody: AddTagsToResourceMessage): Observable<AddTagsToResourceResponse> {
			return this.http.post<AddTagsToResourceResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.AddTagsToResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Applies a pending maintenance action to a resource (for example, to a replication instance).
		 * Post #X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction
		 * @return {ApplyPendingMaintenanceActionResponse} Success
		 */
		ApplyPendingMaintenanceAction(requestBody: ApplyPendingMaintenanceActionMessage): Observable<ApplyPendingMaintenanceActionResponse> {
			return this.http.post<ApplyPendingMaintenanceActionResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.ApplyPendingMaintenanceAction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an endpoint using the provided settings.
		 * Post #X-Amz-Target=AmazonDMSv20160101.CreateEndpoint
		 * @return {CreateEndpointResponse} Success
		 */
		CreateEndpoint(requestBody: CreateEndpointMessage): Observable<CreateEndpointResponse> {
			return this.http.post<CreateEndpointResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.CreateEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Creates an AWS DMS event notification subscription. </p> <p>You can specify the type of source (<code>SourceType</code>) you want to be notified of, provide a list of AWS DMS source IDs (<code>SourceIds</code>) that triggers the events, and provide a list of event categories (<code>EventCategories</code>) for events you want to be notified of. If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType = replication-instance</code> and <code>SourceIdentifier = my-replinstance</code>, you will be notified of all the replication instance events for the specified source. If you specify a <code>SourceType</code> but don't specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your AWS DMS sources. If you don't specify either <code>SourceType</code> nor <code>SourceIdentifier</code>, you will be notified of events generated from all AWS DMS sources belonging to your customer account.</p> <p>For more information about AWS DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>AWS Database Migration Service User Guide.</i> </p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription
		 * @return {CreateEventSubscriptionResponse} Success
		 */
		CreateEventSubscription(requestBody: CreateEventSubscriptionMessage): Observable<CreateEventSubscriptionResponse> {
			return this.http.post<CreateEventSubscriptionResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.CreateEventSubscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates the replication instance using the specified parameters.</p> <p>AWS DMS requires that your account have certain roles with appropriate permissions before you can create a replication instance. For information on the required roles, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.APIRole.html">Creating the IAM Roles to Use With the AWS CLI and AWS DMS API</a>. For information on the required permissions, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.IAMPermissions.html">IAM Permissions Needed to Use AWS DMS</a>.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance
		 * @return {CreateReplicationInstanceResponse} Success
		 */
		CreateReplicationInstance(requestBody: CreateReplicationInstanceMessage): Observable<CreateReplicationInstanceResponse> {
			return this.http.post<CreateReplicationInstanceResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.CreateReplicationInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a replication subnet group given a list of the subnet IDs in a VPC.
		 * Post #X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup
		 * @return {CreateReplicationSubnetGroupResponse} Success
		 */
		CreateReplicationSubnetGroup(requestBody: CreateReplicationSubnetGroupMessage): Observable<CreateReplicationSubnetGroupResponse> {
			return this.http.post<CreateReplicationSubnetGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.CreateReplicationSubnetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a replication task using the specified parameters.
		 * Post #X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask
		 * @return {CreateReplicationTaskResponse} Success
		 */
		CreateReplicationTask(requestBody: CreateReplicationTaskMessage): Observable<CreateReplicationTaskResponse> {
			return this.http.post<CreateReplicationTaskResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.CreateReplicationTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified certificate.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DeleteCertificate
		 * @return {DeleteCertificateResponse} Success
		 */
		DeleteCertificate(requestBody: DeleteCertificateMessage): Observable<DeleteCertificateResponse> {
			return this.http.post<DeleteCertificateResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DeleteCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the connection between a replication instance and an endpoint.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DeleteConnection
		 * @return {DeleteConnectionResponse} Success
		 */
		DeleteConnection(requestBody: DeleteConnectionMessage): Observable<DeleteConnectionResponse> {
			return this.http.post<DeleteConnectionResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DeleteConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified endpoint.</p> <note> <p>All tasks associated with the endpoint must be deleted before you can delete the endpoint.</p> </note> <p/>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint
		 * @return {DeleteEndpointResponse} Success
		 */
		DeleteEndpoint(requestBody: DeleteEndpointMessage): Observable<DeleteEndpointResponse> {
			return this.http.post<DeleteEndpointResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DeleteEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an AWS DMS event subscription.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription
		 * @return {DeleteEventSubscriptionResponse} Success
		 */
		DeleteEventSubscription(requestBody: DeleteEventSubscriptionMessage): Observable<DeleteEventSubscriptionResponse> {
			return this.http.post<DeleteEventSubscriptionResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DeleteEventSubscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified replication instance.</p> <note> <p>You must delete any migration tasks that are associated with the replication instance before you can delete it.</p> </note> <p/>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance
		 * @return {DeleteReplicationInstanceResponse} Success
		 */
		DeleteReplicationInstance(requestBody: DeleteReplicationInstanceMessage): Observable<DeleteReplicationInstanceResponse> {
			return this.http.post<DeleteReplicationInstanceResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a subnet group.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup
		 * @return {DeleteReplicationSubnetGroupResponse} Success
		 */
		DeleteReplicationSubnetGroup(requestBody: DeleteReplicationSubnetGroupMessage): Observable<DeleteReplicationSubnetGroupResponse> {
			return this.http.post<DeleteReplicationSubnetGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationSubnetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified replication task.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask
		 * @return {DeleteReplicationTaskResponse} Success
		 */
		DeleteReplicationTask(requestBody: DeleteReplicationTaskMessage): Observable<DeleteReplicationTaskResponse> {
			return this.http.post<DeleteReplicationTaskResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DeleteReplicationTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists all of the AWS DMS attributes for a customer account. These attributes include AWS DMS quotas for the account and a unique account identifier in a particular DMS region. DMS quotas include a list of resource quotas supported by the account, such as the number of replication instances allowed. The description for each resource quota, includes the quota name, current usage toward that quota, and the quota's maximum value. DMS uses the unique account identifier to name each artifact used by DMS in the given region.</p> <p>This command does not take any parameters.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes
		 * @return {DescribeAccountAttributesResponse} Success
		 */
		DescribeAccountAttributes(requestBody: DescribeAccountAttributesMessage): Observable<DescribeAccountAttributesResponse> {
			return this.http.post<DescribeAccountAttributesResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeAccountAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides a description of the certificate.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeCertificates
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeCertificatesResponse} Success
		 */
		DescribeCertificates(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeCertificatesMessage): Observable<DescribeCertificatesResponse> {
			return this.http.post<DescribeCertificatesResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeCertificates?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeConnections
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeConnectionsResponse} Success
		 */
		DescribeConnections(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeConnectionsMessage): Observable<DescribeConnectionsResponse> {
			return this.http.post<DescribeConnectionsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeConnections?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the type of endpoints available.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeEndpointTypesResponse} Success
		 */
		DescribeEndpointTypes(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeEndpointTypesMessage): Observable<DescribeEndpointTypesResponse> {
			return this.http.post<DescribeEndpointTypesResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the endpoints for your account in the current region.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeEndpointsResponse} Success
		 */
		DescribeEndpoints(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeEndpointsMessage): Observable<DescribeEndpointsResponse> {
			return this.http.post<DescribeEndpointsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>AWS Database Migration Service User Guide.</i>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories
		 * @return {DescribeEventCategoriesResponse} Success
		 */
		DescribeEventCategories(requestBody: DescribeEventCategoriesMessage): Observable<DescribeEventCategoriesResponse> {
			return this.http.post<DescribeEventCategoriesResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeEventCategories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists all the event subscriptions for a customer account. The description of a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>. </p> <p>If you specify <code>SubscriptionName</code>, this action lists the description for that subscription.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeEventSubscriptionsResponse} Success
		 */
		DescribeEventSubscriptions(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeEventSubscriptionsMessage): Observable<DescribeEventSubscriptionsResponse> {
			return this.http.post<DescribeEventSubscriptionsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists events for a given source identifier and source type. You can also specify a start and end time. For more information on AWS DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>AWS Database Migration User Guide.</i>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeEvents
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeEventsResponse} Success
		 */
		DescribeEvents(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeEventsMessage): Observable<DescribeEventsResponse> {
			return this.http.post<DescribeEventsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeEvents?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the replication instance types that can be created in the specified region.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeOrderableReplicationInstancesResponse} Success
		 */
		DescribeOrderableReplicationInstances(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeOrderableReplicationInstancesMessage): Observable<DescribeOrderableReplicationInstancesResponse> {
			return this.http.post<DescribeOrderableReplicationInstancesResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For internal use only
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribePendingMaintenanceActionsResponse} Success
		 */
		DescribePendingMaintenanceActions(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribePendingMaintenanceActionsMessage): Observable<DescribePendingMaintenanceActionsResponse> {
			return this.http.post<DescribePendingMaintenanceActionsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the status of the RefreshSchemas operation.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus
		 * @return {DescribeRefreshSchemasStatusResponse} Success
		 */
		DescribeRefreshSchemasStatus(requestBody: DescribeRefreshSchemasStatusMessage): Observable<DescribeRefreshSchemasStatusResponse> {
			return this.http.post<DescribeRefreshSchemasStatusResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeRefreshSchemasStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the task logs for the specified task.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeReplicationInstanceTaskLogsResponse} Success
		 */
		DescribeReplicationInstanceTaskLogs(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeReplicationInstanceTaskLogsMessage): Observable<DescribeReplicationInstanceTaskLogsResponse> {
			return this.http.post<DescribeReplicationInstanceTaskLogsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about replication instances for your account in the current region.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeReplicationInstancesResponse} Success
		 */
		DescribeReplicationInstances(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeReplicationInstancesMessage): Observable<DescribeReplicationInstancesResponse> {
			return this.http.post<DescribeReplicationInstancesResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the replication subnet groups.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeReplicationSubnetGroupsResponse} Success
		 */
		DescribeReplicationSubnetGroups(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeReplicationSubnetGroupsMessage): Observable<DescribeReplicationSubnetGroupsResponse> {
			return this.http.post<DescribeReplicationSubnetGroupsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the task assessment results from Amazon S3. This action always returns the latest results.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeReplicationTaskAssessmentResultsResponse} Success
		 */
		DescribeReplicationTaskAssessmentResults(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeReplicationTaskAssessmentResultsMessage): Observable<DescribeReplicationTaskAssessmentResultsResponse> {
			return this.http.post<DescribeReplicationTaskAssessmentResultsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about replication tasks for your account in the current region.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeReplicationTasksResponse} Success
		 */
		DescribeReplicationTasks(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeReplicationTasksMessage): Observable<DescribeReplicationTasksResponse> {
			return this.http.post<DescribeReplicationTasksResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the schema for the specified endpoint.</p> <p/>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeSchemas
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeSchemasResponse} Success
		 */
		DescribeSchemas(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeSchemasMessage): Observable<DescribeSchemasResponse> {
			return this.http.post<DescribeSchemasResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeSchemas?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted.</p> <p>Note that the "last updated" column the DMS console only indicates the time that AWS DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeTableStatisticsResponse} Success
		 */
		DescribeTableStatistics(MaxRecords: string | null | undefined, Marker: string | null | undefined, requestBody: DescribeTableStatisticsMessage): Observable<DescribeTableStatisticsResponse> {
			return this.http.post<DescribeTableStatisticsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Uploads the specified certificate.
		 * Post #X-Amz-Target=AmazonDMSv20160101.ImportCertificate
		 * @return {ImportCertificateResponse} Success
		 */
		ImportCertificate(requestBody: ImportCertificateMessage): Observable<ImportCertificateResponse> {
			return this.http.post<ImportCertificateResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.ImportCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all tags for an AWS DMS resource.
		 * Post #X-Amz-Target=AmazonDMSv20160101.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceMessage): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the specified endpoint.
		 * Post #X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint
		 * @return {ModifyEndpointResponse} Success
		 */
		ModifyEndpoint(requestBody: ModifyEndpointMessage): Observable<ModifyEndpointResponse> {
			return this.http.post<ModifyEndpointResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.ModifyEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies an existing AWS DMS event notification subscription.
		 * Post #X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription
		 * @return {ModifyEventSubscriptionResponse} Success
		 */
		ModifyEventSubscription(requestBody: ModifyEventSubscriptionMessage): Observable<ModifyEventSubscriptionResponse> {
			return this.http.post<ModifyEventSubscriptionResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.ModifyEventSubscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request.</p> <p>Some settings are applied during the maintenance window.</p> <p/>
		 * Post #X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance
		 * @return {ModifyReplicationInstanceResponse} Success
		 */
		ModifyReplicationInstance(requestBody: ModifyReplicationInstanceMessage): Observable<ModifyReplicationInstanceResponse> {
			return this.http.post<ModifyReplicationInstanceResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the settings for the specified replication subnet group.
		 * Post #X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup
		 * @return {ModifyReplicationSubnetGroupResponse} Success
		 */
		ModifyReplicationSubnetGroup(requestBody: ModifyReplicationSubnetGroupMessage): Observable<ModifyReplicationSubnetGroupResponse> {
			return this.http.post<ModifyReplicationSubnetGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationSubnetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies the specified replication task.</p> <p>You can't modify the task endpoints. The task must be stopped before you can modify it. </p> <p>For more information about AWS DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks</a> in the <i>AWS Database Migration Service User Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask
		 * @return {ModifyReplicationTaskResponse} Success
		 */
		ModifyReplicationTask(requestBody: ModifyReplicationTaskMessage): Observable<ModifyReplicationTaskResponse> {
			return this.http.post<ModifyReplicationTaskResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.ModifyReplicationTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reboots a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again.
		 * Post #X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance
		 * @return {RebootReplicationInstanceResponse} Success
		 */
		RebootReplicationInstance(requestBody: RebootReplicationInstanceMessage): Observable<RebootReplicationInstanceResponse> {
			return this.http.post<RebootReplicationInstanceResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.RebootReplicationInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the DescribeRefreshSchemasStatus operation.
		 * Post #X-Amz-Target=AmazonDMSv20160101.RefreshSchemas
		 * @return {RefreshSchemasResponse} Success
		 */
		RefreshSchemas(requestBody: RefreshSchemasMessage): Observable<RefreshSchemasResponse> {
			return this.http.post<RefreshSchemasResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.RefreshSchemas', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reloads the target database table with the source data.
		 * Post #X-Amz-Target=AmazonDMSv20160101.ReloadTables
		 * @return {ReloadTablesResponse} Success
		 */
		ReloadTables(requestBody: ReloadTablesMessage): Observable<ReloadTablesResponse> {
			return this.http.post<ReloadTablesResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.ReloadTables', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes metadata tags from a DMS resource.
		 * Post #X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource
		 * @return {RemoveTagsFromResourceResponse} Success
		 */
		RemoveTagsFromResource(requestBody: RemoveTagsFromResourceMessage): Observable<RemoveTagsFromResourceResponse> {
			return this.http.post<RemoveTagsFromResourceResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.RemoveTagsFromResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts the replication task.</p> <p>For more information about AWS DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks </a> in the <i>AWS Database Migration Service User Guide.</i> </p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.StartReplicationTask
		 * @return {StartReplicationTaskResponse} Success
		 */
		StartReplicationTask(requestBody: StartReplicationTaskMessage): Observable<StartReplicationTaskResponse> {
			return this.http.post<StartReplicationTaskResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.StartReplicationTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts the replication task assessment for unsupported data types in the source database.
		 * Post #X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment
		 * @return {StartReplicationTaskAssessmentResponse} Success
		 */
		StartReplicationTaskAssessment(requestBody: StartReplicationTaskAssessmentMessage): Observable<StartReplicationTaskAssessmentResponse> {
			return this.http.post<StartReplicationTaskAssessmentResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.StartReplicationTaskAssessment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops the replication task.</p> <p/>
		 * Post #X-Amz-Target=AmazonDMSv20160101.StopReplicationTask
		 * @return {StopReplicationTaskResponse} Success
		 */
		StopReplicationTask(requestBody: StopReplicationTaskMessage): Observable<StopReplicationTaskResponse> {
			return this.http.post<StopReplicationTaskResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.StopReplicationTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tests the connection between the replication instance and the endpoint.
		 * Post #X-Amz-Target=AmazonDMSv20160101.TestConnection
		 * @return {TestConnectionResponse} Success
		 */
		TestConnection(requestBody: TestConnectionMessage): Observable<TestConnectionResponse> {
			return this.http.post<TestConnectionResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.TestConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AddTagsToResourceX_Amz_Target { AmazonDMSv20160101_AddTagsToResource = 0 }

	export enum ApplyPendingMaintenanceActionX_Amz_Target { AmazonDMSv20160101_ApplyPendingMaintenanceAction = 0 }

	export enum CreateEndpointX_Amz_Target { AmazonDMSv20160101_CreateEndpoint = 0 }

	export enum CreateEventSubscriptionX_Amz_Target { AmazonDMSv20160101_CreateEventSubscription = 0 }

	export enum CreateReplicationInstanceX_Amz_Target { AmazonDMSv20160101_CreateReplicationInstance = 0 }

	export enum CreateReplicationSubnetGroupX_Amz_Target { AmazonDMSv20160101_CreateReplicationSubnetGroup = 0 }

	export enum CreateReplicationTaskX_Amz_Target { AmazonDMSv20160101_CreateReplicationTask = 0 }

	export enum DeleteCertificateX_Amz_Target { AmazonDMSv20160101_DeleteCertificate = 0 }

	export enum DeleteConnectionX_Amz_Target { AmazonDMSv20160101_DeleteConnection = 0 }

	export enum DeleteEndpointX_Amz_Target { AmazonDMSv20160101_DeleteEndpoint = 0 }

	export enum DeleteEventSubscriptionX_Amz_Target { AmazonDMSv20160101_DeleteEventSubscription = 0 }

	export enum DeleteReplicationInstanceX_Amz_Target { AmazonDMSv20160101_DeleteReplicationInstance = 0 }

	export enum DeleteReplicationSubnetGroupX_Amz_Target { AmazonDMSv20160101_DeleteReplicationSubnetGroup = 0 }

	export enum DeleteReplicationTaskX_Amz_Target { AmazonDMSv20160101_DeleteReplicationTask = 0 }

	export enum DescribeAccountAttributesX_Amz_Target { AmazonDMSv20160101_DescribeAccountAttributes = 0 }

	export enum DescribeCertificatesX_Amz_Target { AmazonDMSv20160101_DescribeCertificates = 0 }

	export enum DescribeConnectionsX_Amz_Target { AmazonDMSv20160101_DescribeConnections = 0 }

	export enum DescribeEndpointTypesX_Amz_Target { AmazonDMSv20160101_DescribeEndpointTypes = 0 }

	export enum DescribeEndpointsX_Amz_Target { AmazonDMSv20160101_DescribeEndpoints = 0 }

	export enum DescribeEventCategoriesX_Amz_Target { AmazonDMSv20160101_DescribeEventCategories = 0 }

	export enum DescribeEventSubscriptionsX_Amz_Target { AmazonDMSv20160101_DescribeEventSubscriptions = 0 }

	export enum DescribeEventsX_Amz_Target { AmazonDMSv20160101_DescribeEvents = 0 }

	export enum DescribeOrderableReplicationInstancesX_Amz_Target { AmazonDMSv20160101_DescribeOrderableReplicationInstances = 0 }

	export enum DescribePendingMaintenanceActionsX_Amz_Target { AmazonDMSv20160101_DescribePendingMaintenanceActions = 0 }

	export enum DescribeRefreshSchemasStatusX_Amz_Target { AmazonDMSv20160101_DescribeRefreshSchemasStatus = 0 }

	export enum DescribeReplicationInstanceTaskLogsX_Amz_Target { AmazonDMSv20160101_DescribeReplicationInstanceTaskLogs = 0 }

	export enum DescribeReplicationInstancesX_Amz_Target { AmazonDMSv20160101_DescribeReplicationInstances = 0 }

	export enum DescribeReplicationSubnetGroupsX_Amz_Target { AmazonDMSv20160101_DescribeReplicationSubnetGroups = 0 }

	export enum DescribeReplicationTaskAssessmentResultsX_Amz_Target { AmazonDMSv20160101_DescribeReplicationTaskAssessmentResults = 0 }

	export enum DescribeReplicationTasksX_Amz_Target { AmazonDMSv20160101_DescribeReplicationTasks = 0 }

	export enum DescribeSchemasX_Amz_Target { AmazonDMSv20160101_DescribeSchemas = 0 }

	export enum DescribeTableStatisticsX_Amz_Target { AmazonDMSv20160101_DescribeTableStatistics = 0 }

	export enum ImportCertificateX_Amz_Target { AmazonDMSv20160101_ImportCertificate = 0 }

	export enum ListTagsForResourceX_Amz_Target { AmazonDMSv20160101_ListTagsForResource = 0 }

	export enum ModifyEndpointX_Amz_Target { AmazonDMSv20160101_ModifyEndpoint = 0 }

	export enum ModifyEventSubscriptionX_Amz_Target { AmazonDMSv20160101_ModifyEventSubscription = 0 }

	export enum ModifyReplicationInstanceX_Amz_Target { AmazonDMSv20160101_ModifyReplicationInstance = 0 }

	export enum ModifyReplicationSubnetGroupX_Amz_Target { AmazonDMSv20160101_ModifyReplicationSubnetGroup = 0 }

	export enum ModifyReplicationTaskX_Amz_Target { AmazonDMSv20160101_ModifyReplicationTask = 0 }

	export enum RebootReplicationInstanceX_Amz_Target { AmazonDMSv20160101_RebootReplicationInstance = 0 }

	export enum RefreshSchemasX_Amz_Target { AmazonDMSv20160101_RefreshSchemas = 0 }

	export enum ReloadTablesX_Amz_Target { AmazonDMSv20160101_ReloadTables = 0 }

	export enum RemoveTagsFromResourceX_Amz_Target { AmazonDMSv20160101_RemoveTagsFromResource = 0 }

	export enum StartReplicationTaskX_Amz_Target { AmazonDMSv20160101_StartReplicationTask = 0 }

	export enum StartReplicationTaskAssessmentX_Amz_Target { AmazonDMSv20160101_StartReplicationTaskAssessment = 0 }

	export enum StopReplicationTaskX_Amz_Target { AmazonDMSv20160101_StopReplicationTask = 0 }

	export enum TestConnectionX_Amz_Target { AmazonDMSv20160101_TestConnection = 0 }

}

