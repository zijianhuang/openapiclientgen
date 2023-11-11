import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** <p/> */
	export interface AddTagsToResourceResponse {
	}


	/** Associates a set of tags with an AWS DMS resource. */
	export interface AddTagsToResourceMessage {
		ResourceArn: string;
		Tags: Array<Tag>;
	}


	/** <p>A user-defined key-value pair that describes metadata added to an AWS DMS resource and that is used by operations such as the following:</p> <ul> <li> <p> <code>AddTagsToResource</code> </p> </li> <li> <p> <code>ListTagsForResource</code> </p> </li> <li> <p> <code>RemoveTagsFromResource</code> </p> </li> </ul> */
	export interface Tag {
		Key?: string | null;
		Value?: string | null;
	}

	export interface ResourceNotFoundFault {
	}


	/** <p/> */
	export interface ApplyPendingMaintenanceActionResponse {

		/** Identifies an AWS DMS resource and any pending actions for it. */
		ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions | null;
	}


	/** Identifies an AWS DMS resource and any pending actions for it. */
	export interface ResourcePendingMaintenanceActions {
		ResourceIdentifier?: string | null;
		PendingMaintenanceActionDetails?: Array<PendingMaintenanceAction> | null;
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


	/** <p/> */
	export interface ApplyPendingMaintenanceActionMessage {
		ReplicationInstanceArn: string;
		ApplyAction: string;
		OptInType: string;
	}


	/** <p/> */
	export interface CreateEndpointResponse {

		/** <p>Describes an endpoint of a database instance in response to operations such as the following:</p> <ul> <li> <p> <code>CreateEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpointTypes</code> </p> </li> <li> <p> <code>ModifyEndpoint</code> </p> </li> </ul> */
		Endpoint?: Endpoint | null;
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
		DynamoDbSettings?: DynamoDbSettings | null;

		/** Settings for exporting data to Amazon S3. */
		S3Settings?: S3Settings | null;

		/** The settings in JSON format for the DMS Transfer type source endpoint. */
		DmsTransferSettings?: DmsTransferSettings | null;

		/** Provides information that defines a MongoDB endpoint. */
		MongoDbSettings?: MongoDbSettings | null;

		/** Provides information that describes an Amazon Kinesis Data Stream endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
		KinesisSettings?: KinesisSettings | null;

		/** Provides information that describes an Apache Kafka endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
		KafkaSettings?: KafkaSettings | null;

		/** Provides information that defines an Elasticsearch endpoint. */
		ElasticsearchSettings?: ElasticsearchSettings | null;

		/** Provides information that defines an Amazon Neptune endpoint. */
		NeptuneSettings?: NeptuneSettings | null;

		/** Provides information that defines an Amazon Redshift endpoint. */
		RedshiftSettings?: RedshiftSettings | null;
	}

	export enum EndpointEndpointType { source = 0, target = 1 }

	export enum EndpointSslMode { none = 0, require = 1, verify_ca = 2, verify_full = 3 }


	/** Provides the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role used to define an Amazon DynamoDB target endpoint. */
	export interface DynamoDbSettings {
		ServiceAccessRoleArn: string;
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

	export enum KinesisSettingsMessageFormat { json = 0, json_unformatted = 1 }


	/** Provides information that describes an Apache Kafka endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
	export interface KafkaSettings {
		Broker?: string | null;
		Topic?: string | null;
	}


	/** Provides information that defines an Elasticsearch endpoint. */
	export interface ElasticsearchSettings {
		ServiceAccessRoleArn: string;
		EndpointUri: string;
		FullLoadErrorPercentage?: number | null;
		ErrorRetryDuration?: number | null;
	}


	/** Provides information that defines an Amazon Neptune endpoint. */
	export interface NeptuneSettings {
		ServiceAccessRoleArn?: string | null;
		S3BucketName: string;
		S3BucketFolder: string;
		ErrorRetryDuration?: number | null;
		MaxFileSize?: number | null;
		MaxRetryCount?: number | null;
		IamAuthEnabled?: boolean | null;
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

	export enum RedshiftSettingsEncryptionMode { sse_s3 = 0, sse_kms = 1 }


	/** <p/> */
	export interface CreateEndpointMessage {
		EndpointIdentifier: string;
		EndpointType: EndpointEndpointType;
		EngineName: string;
		Username?: string | null;
		Password?: string | null;
		ServerName?: string | null;
		Port?: number | null;
		DatabaseName?: string | null;
		ExtraConnectionAttributes?: string | null;
		KmsKeyId?: string | null;
		Tags?: Array<Tag> | null;
		CertificateArn?: string | null;
		SslMode?: CreateEndpointMessageSslMode | null;
		ServiceAccessRoleArn?: string | null;
		ExternalTableDefinition?: string | null;

		/** Provides the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role used to define an Amazon DynamoDB target endpoint. */
		DynamoDbSettings?: DynamoDbSettings | null;

		/** Settings for exporting data to Amazon S3. */
		S3Settings?: S3Settings | null;

		/** The settings in JSON format for the DMS Transfer type source endpoint. */
		DmsTransferSettings?: DmsTransferSettings | null;

		/** Provides information that defines a MongoDB endpoint. */
		MongoDbSettings?: MongoDbSettings | null;

		/** Provides information that describes an Amazon Kinesis Data Stream endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
		KinesisSettings?: KinesisSettings | null;

		/** Provides information that describes an Apache Kafka endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
		KafkaSettings?: KafkaSettings | null;

		/** Provides information that defines an Elasticsearch endpoint. */
		ElasticsearchSettings?: ElasticsearchSettings | null;

		/** Provides information that defines an Amazon Neptune endpoint. */
		NeptuneSettings?: NeptuneSettings | null;

		/** Provides information that defines an Amazon Redshift endpoint. */
		RedshiftSettings?: RedshiftSettings | null;
	}

	export enum CreateEndpointMessageSslMode { none = 0, require = 1, verify_ca = 2, verify_full = 3 }

	export interface KMSKeyNotAccessibleFault {
	}

	export interface ResourceAlreadyExistsFault {
	}

	export interface ResourceQuotaExceededFault {
	}

	export interface InvalidResourceStateFault {
	}

	export interface AccessDeniedFault {
	}


	/** <p/> */
	export interface CreateEventSubscriptionResponse {

		/** Describes an event notification subscription created by the <code>CreateEventSubscription</code> operation. */
		EventSubscription?: EventSubscription | null;
	}


	/** Describes an event notification subscription created by the <code>CreateEventSubscription</code> operation. */
	export interface EventSubscription {
		CustomerAwsId?: string | null;
		CustSubscriptionId?: string | null;
		SnsTopicArn?: string | null;
		Status?: string | null;
		SubscriptionCreationTime?: string | null;
		SourceType?: string | null;
		SourceIdsList?: Array<string> | null;
		EventCategoriesList?: Array<string> | null;
		Enabled?: boolean | null;
	}


	/** <p/> */
	export interface CreateEventSubscriptionMessage {
		SubscriptionName: string;
		SnsTopicArn: string;
		SourceType?: string | null;
		EventCategories?: Array<string> | null;
		SourceIds?: Array<string> | null;
		Enabled?: boolean | null;
		Tags?: Array<Tag> | null;
	}

	export interface SNSInvalidTopicFault {
	}

	export interface SNSNoAuthorizationFault {
	}

	export interface KMSAccessDeniedFault {
	}

	export interface KMSDisabledFault {
	}

	export interface KMSInvalidStateFault {
	}

	export interface KMSNotFoundFault {
	}

	export interface KMSThrottlingFault {
	}


	/** <p/> */
	export interface CreateReplicationInstanceResponse {

		/** Provides information that defines a replication instance. */
		ReplicationInstance?: ReplicationInstance | null;
	}


	/** Provides information that defines a replication instance. */
	export interface ReplicationInstance {
		ReplicationInstanceIdentifier?: string | null;
		ReplicationInstanceClass?: string | null;
		ReplicationInstanceStatus?: string | null;
		AllocatedStorage?: number | null;
		InstanceCreateTime?: Date | null;
		VpcSecurityGroups?: Array<VpcSecurityGroupMembership> | null;
		AvailabilityZone?: string | null;

		/** Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroup</code> operation. */
		ReplicationSubnetGroup?: ReplicationSubnetGroup | null;
		PreferredMaintenanceWindow?: string | null;

		/** Provides information about the values of pending modifications to a replication instance. This data type is an object of the <code>ReplicationInstance</code> user-defined data type. */
		PendingModifiedValues?: ReplicationPendingModifiedValues | null;
		MultiAZ?: boolean | null;
		EngineVersion?: string | null;
		AutoMinorVersionUpgrade?: boolean | null;
		KmsKeyId?: string | null;
		ReplicationInstanceArn?: string | null;
		ReplicationInstancePublicIpAddress?: string | null;
		ReplicationInstancePrivateIpAddress?: string | null;
		ReplicationInstancePublicIpAddresses?: Array<string> | null;
		ReplicationInstancePrivateIpAddresses?: Array<string> | null;
		PubliclyAccessible?: boolean | null;
		SecondaryAvailabilityZone?: string | null;
		FreeUntil?: Date | null;
		DnsNameServers?: string | null;
	}


	/** Describes status of a security group associated with the virtual private cloud hosting your replication and DB instances. */
	export interface VpcSecurityGroupMembership {
		VpcSecurityGroupId?: string | null;
		Status?: string | null;
	}


	/** Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroup</code> operation. */
	export interface ReplicationSubnetGroup {
		ReplicationSubnetGroupIdentifier?: string | null;
		ReplicationSubnetGroupDescription?: string | null;
		VpcId?: string | null;
		SubnetGroupStatus?: string | null;
		Subnets?: Array<Subnet> | null;
	}


	/** In response to a request by the <code>DescribeReplicationSubnetGroup</code> operation, this object identifies a subnet by its given Availability Zone, subnet identifier, and status. */
	export interface Subnet {
		SubnetIdentifier?: string | null;

		/** The name of the Availability Zone for use during database migration. */
		SubnetAvailabilityZone?: AvailabilityZone | null;
		SubnetStatus?: string | null;
	}


	/** The name of the Availability Zone for use during database migration. */
	export interface AvailabilityZone {
		Name?: string | null;
	}


	/** Provides information about the values of pending modifications to a replication instance. This data type is an object of the <code>ReplicationInstance</code> user-defined data type.  */
	export interface ReplicationPendingModifiedValues {
		ReplicationInstanceClass?: string | null;
		AllocatedStorage?: number | null;
		MultiAZ?: boolean | null;
		EngineVersion?: string | null;
	}


	/** <p/> */
	export interface CreateReplicationInstanceMessage {
		ReplicationInstanceIdentifier: string;
		AllocatedStorage?: number | null;
		ReplicationInstanceClass: string;
		VpcSecurityGroupIds?: Array<string> | null;
		AvailabilityZone?: string | null;
		ReplicationSubnetGroupIdentifier?: string | null;
		PreferredMaintenanceWindow?: string | null;
		MultiAZ?: boolean | null;
		EngineVersion?: string | null;
		AutoMinorVersionUpgrade?: boolean | null;
		Tags?: Array<Tag> | null;
		KmsKeyId?: string | null;
		PubliclyAccessible?: boolean | null;
		DnsNameServers?: string | null;
	}

	export interface InsufficientResourceCapacityFault {
	}

	export interface StorageQuotaExceededFault {
	}

	export interface ReplicationSubnetGroupDoesNotCoverEnoughAZs {
	}

	export interface InvalidSubnet {
	}


	/** <p/> */
	export interface CreateReplicationSubnetGroupResponse {

		/** Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroup</code> operation. */
		ReplicationSubnetGroup?: ReplicationSubnetGroup | null;
	}


	/** <p/> */
	export interface CreateReplicationSubnetGroupMessage {
		ReplicationSubnetGroupIdentifier: string;
		ReplicationSubnetGroupDescription: string;
		SubnetIds: Array<string>;
		Tags?: Array<Tag> | null;
	}


	/** <p/> */
	export interface CreateReplicationTaskResponse {

		/** Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation. */
		ReplicationTask?: ReplicationTask | null;
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
		ReplicationTaskStats?: ReplicationTaskStats | null;
		TaskData?: string | null;
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


	/** <p/> */
	export interface CreateReplicationTaskMessage {
		ReplicationTaskIdentifier: string;
		SourceEndpointArn: string;
		TargetEndpointArn: string;
		ReplicationInstanceArn: string;
		MigrationType: CreateReplicationTaskMessageMigrationType;
		TableMappings: string;
		ReplicationTaskSettings?: string | null;
		CdcStartTime?: Date | null;
		CdcStartPosition?: string | null;
		CdcStopPosition?: string | null;
		Tags?: Array<Tag> | null;
		TaskData?: string | null;
	}

	export enum CreateReplicationTaskMessageMigrationType { full_load = 0, cdc = 1, full_load_and_cdc = 2 }

	export interface DeleteCertificateResponse {

		/** The SSL certificate that can be used to encrypt connections between the endpoints and the replication instance. */
		Certificate?: Certificate | null;
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

	export interface DeleteCertificateMessage {
		CertificateArn: string;
	}


	/** <p/> */
	export interface DeleteConnectionResponse {

		/** Status of the connection between an endpoint and a replication instance, including Amazon Resource Names (ARNs) and the last error message issued. */
		Connection?: Connection | null;
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


	/** <p/> */
	export interface DeleteConnectionMessage {
		EndpointArn: string;
		ReplicationInstanceArn: string;
	}


	/** <p/> */
	export interface DeleteEndpointResponse {

		/** <p>Describes an endpoint of a database instance in response to operations such as the following:</p> <ul> <li> <p> <code>CreateEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpointTypes</code> </p> </li> <li> <p> <code>ModifyEndpoint</code> </p> </li> </ul> */
		Endpoint?: Endpoint | null;
	}


	/** <p/> */
	export interface DeleteEndpointMessage {
		EndpointArn: string;
	}


	/** <p/> */
	export interface DeleteEventSubscriptionResponse {

		/** Describes an event notification subscription created by the <code>CreateEventSubscription</code> operation. */
		EventSubscription?: EventSubscription | null;
	}


	/** <p/> */
	export interface DeleteEventSubscriptionMessage {
		SubscriptionName: string;
	}


	/** <p/> */
	export interface DeleteReplicationInstanceResponse {

		/** Provides information that defines a replication instance. */
		ReplicationInstance?: ReplicationInstance | null;
	}


	/** <p/> */
	export interface DeleteReplicationInstanceMessage {
		ReplicationInstanceArn: string;
	}


	/** <p/> */
	export interface DeleteReplicationSubnetGroupResponse {
	}


	/** <p/> */
	export interface DeleteReplicationSubnetGroupMessage {
		ReplicationSubnetGroupIdentifier: string;
	}


	/** <p/> */
	export interface DeleteReplicationTaskResponse {

		/** Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation. */
		ReplicationTask?: ReplicationTask | null;
	}


	/** <p/> */
	export interface DeleteReplicationTaskMessage {
		ReplicationTaskArn: string;
	}


	/** <p/> */
	export interface DescribeAccountAttributesResponse {
		AccountQuotas?: Array<AccountQuota> | null;
		UniqueAccountIdentifier?: string | null;
	}


	/** Describes a quota for an AWS account, for example, the number of replication instances allowed. */
	export interface AccountQuota {
		AccountQuotaName?: string | null;
		Used?: number | null;
		Max?: number | null;
	}


	/** <p/> */
	export interface DescribeAccountAttributesMessage {
	}

	export interface DescribeCertificatesResponse {
		Marker?: string | null;
		Certificates?: Array<Certificate> | null;
	}

	export interface DescribeCertificatesMessage {
		Filters?: Array<Filter> | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}


	/** Identifies the name and value of a source filter object used to limit the number and type of records transferred from your source to your target. */
	export interface Filter {
		Name: string;
		Values: Array<string>;
	}


	/** <p/> */
	export interface DescribeConnectionsResponse {
		Marker?: string | null;
		Connections?: Array<Connection> | null;
	}


	/** <p/> */
	export interface DescribeConnectionsMessage {
		Filters?: Array<Filter> | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}


	/** <p/> */
	export interface DescribeEndpointTypesResponse {
		Marker?: string | null;
		SupportedEndpointTypes?: Array<SupportedEndpointType> | null;
	}


	/** Provides information about types of supported endpoints in response to a request by the <code>DescribeEndpointTypes</code> operation. This information includes the type of endpoint, the database engine name, and whether change data capture (CDC) is supported. */
	export interface SupportedEndpointType {
		EngineName?: string | null;
		SupportsCDC?: boolean | null;
		EndpointType?: EndpointEndpointType | null;
		ReplicationInstanceEngineMinimumVersion?: string | null;
		EngineDisplayName?: string | null;
	}


	/** <p/> */
	export interface DescribeEndpointTypesMessage {
		Filters?: Array<Filter> | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}


	/** <p/> */
	export interface DescribeEndpointsResponse {
		Marker?: string | null;
		Endpoints?: Array<Endpoint> | null;
	}


	/** <p/> */
	export interface DescribeEndpointsMessage {
		Filters?: Array<Filter> | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}


	/** <p/> */
	export interface DescribeEventCategoriesResponse {
		EventCategoryGroupList?: Array<EventCategoryGroup> | null;
	}


	/** Lists categories of events subscribed to, and generated by, the applicable AWS DMS resource type. */
	export interface EventCategoryGroup {
		SourceType?: string | null;
		EventCategories?: Array<string> | null;
	}


	/** <p/> */
	export interface DescribeEventCategoriesMessage {
		SourceType?: string | null;
		Filters?: Array<Filter> | null;
	}


	/** <p/> */
	export interface DescribeEventSubscriptionsResponse {
		Marker?: string | null;
		EventSubscriptionsList?: Array<EventSubscription> | null;
	}


	/** <p/> */
	export interface DescribeEventSubscriptionsMessage {
		SubscriptionName?: string | null;
		Filters?: Array<Filter> | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}


	/** <p/> */
	export interface DescribeEventsResponse {
		Marker?: string | null;
		Events?: Array<Event> | null;
	}


	/** Describes an identifiable significant activity that affects a replication instance or task. This object can provide the message, the available event categories, the date and source of the event, and the AWS DMS resource type. */
	export interface Event {
		SourceIdentifier?: string | null;
		SourceType?: EventSourceType | null;
		Message?: string | null;
		EventCategories?: Array<string> | null;
		Date?: Date | null;
	}

	export enum EventSourceType { replication_instance = 0 }


	/** <p/> */
	export interface DescribeEventsMessage {
		SourceIdentifier?: string | null;
		SourceType?: DescribeEventsMessageSourceType | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
		Duration?: number | null;
		EventCategories?: Array<string> | null;
		Filters?: Array<Filter> | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}

	export enum DescribeEventsMessageSourceType { replication_instance = 0 }


	/** <p/> */
	export interface DescribeOrderableReplicationInstancesResponse {
		OrderableReplicationInstances?: Array<OrderableReplicationInstance> | null;
		Marker?: string | null;
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
		AvailabilityZones?: Array<string> | null;
		ReleaseStatus?: OrderableReplicationInstanceReleaseStatus | null;
	}

	export enum OrderableReplicationInstanceReleaseStatus { beta = 0 }


	/** <p/> */
	export interface DescribeOrderableReplicationInstancesMessage {
		MaxRecords?: number | null;
		Marker?: string | null;
	}


	/** <p/> */
	export interface DescribePendingMaintenanceActionsResponse {
		PendingMaintenanceActions?: Array<ResourcePendingMaintenanceActions> | null;
		Marker?: string | null;
	}


	/** <p/> */
	export interface DescribePendingMaintenanceActionsMessage {
		ReplicationInstanceArn?: string | null;
		Filters?: Array<Filter> | null;
		Marker?: string | null;
		MaxRecords?: number | null;
	}


	/** <p/> */
	export interface DescribeRefreshSchemasStatusResponse {

		/** Provides information that describes status of a schema at an endpoint specified by the <code>DescribeRefreshSchemaStatus</code> operation. */
		RefreshSchemasStatus?: RefreshSchemasStatus | null;
	}


	/** Provides information that describes status of a schema at an endpoint specified by the <code>DescribeRefreshSchemaStatus</code> operation. */
	export interface RefreshSchemasStatus {
		EndpointArn?: string | null;
		ReplicationInstanceArn?: string | null;
		Status?: RefreshSchemasStatusStatus | null;
		LastRefreshDate?: Date | null;
		LastFailureMessage?: string | null;
	}

	export enum RefreshSchemasStatusStatus { successful = 0, failed = 1, refreshing = 2 }


	/** <p/> */
	export interface DescribeRefreshSchemasStatusMessage {
		EndpointArn: string;
	}

	export interface DescribeReplicationInstanceTaskLogsResponse {
		ReplicationInstanceArn?: string | null;
		ReplicationInstanceTaskLogs?: Array<ReplicationInstanceTaskLog> | null;
		Marker?: string | null;
	}


	/** Contains metadata for a replication instance task log. */
	export interface ReplicationInstanceTaskLog {
		ReplicationTaskName?: string | null;
		ReplicationTaskArn?: string | null;
		ReplicationInstanceTaskLogSize?: number | null;
	}

	export interface DescribeReplicationInstanceTaskLogsMessage {
		ReplicationInstanceArn: string;
		MaxRecords?: number | null;
		Marker?: string | null;
	}


	/** <p/> */
	export interface DescribeReplicationInstancesResponse {
		Marker?: string | null;
		ReplicationInstances?: Array<ReplicationInstance> | null;
	}


	/** <p/> */
	export interface DescribeReplicationInstancesMessage {
		Filters?: Array<Filter> | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}


	/** <p/> */
	export interface DescribeReplicationSubnetGroupsResponse {
		Marker?: string | null;
		ReplicationSubnetGroups?: Array<ReplicationSubnetGroup> | null;
	}


	/** <p/> */
	export interface DescribeReplicationSubnetGroupsMessage {
		Filters?: Array<Filter> | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}


	/** <p/> */
	export interface DescribeReplicationTaskAssessmentResultsResponse {
		Marker?: string | null;
		BucketName?: string | null;
		ReplicationTaskAssessmentResults?: Array<ReplicationTaskAssessmentResult> | null;
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


	/** <p/> */
	export interface DescribeReplicationTaskAssessmentResultsMessage {
		ReplicationTaskArn?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}


	/** <p/> */
	export interface DescribeReplicationTasksResponse {
		Marker?: string | null;
		ReplicationTasks?: Array<ReplicationTask> | null;
	}


	/** <p/> */
	export interface DescribeReplicationTasksMessage {
		Filters?: Array<Filter> | null;
		MaxRecords?: number | null;
		Marker?: string | null;
		WithoutSettings?: boolean | null;
	}


	/** <p/> */
	export interface DescribeSchemasResponse {
		Marker?: string | null;
		Schemas?: Array<string> | null;
	}


	/** <p/> */
	export interface DescribeSchemasMessage {
		EndpointArn: string;
		MaxRecords?: number | null;
		Marker?: string | null;
	}


	/** <p/> */
	export interface DescribeTableStatisticsResponse {
		ReplicationTaskArn?: string | null;
		TableStatistics?: Array<TableStatistics> | null;
		Marker?: string | null;
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


	/** <p/> */
	export interface DescribeTableStatisticsMessage {
		ReplicationTaskArn: string;
		MaxRecords?: number | null;
		Marker?: string | null;
		Filters?: Array<Filter> | null;
	}

	export interface ImportCertificateResponse {

		/** The SSL certificate that can be used to encrypt connections between the endpoints and the replication instance. */
		Certificate?: Certificate | null;
	}

	export interface ImportCertificateMessage {
		CertificateIdentifier: string;
		CertificatePem?: string | null;
		CertificateWallet?: string | null;
		Tags?: Array<Tag> | null;
	}

	export interface InvalidCertificateFault {
	}


	/** <p/> */
	export interface ListTagsForResourceResponse {
		TagList?: Array<Tag> | null;
	}


	/** <p/> */
	export interface ListTagsForResourceMessage {
		ResourceArn: string;
	}


	/** <p/> */
	export interface ModifyEndpointResponse {

		/** <p>Describes an endpoint of a database instance in response to operations such as the following:</p> <ul> <li> <p> <code>CreateEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpointTypes</code> </p> </li> <li> <p> <code>ModifyEndpoint</code> </p> </li> </ul> */
		Endpoint?: Endpoint | null;
	}


	/** <p/> */
	export interface ModifyEndpointMessage {
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
		DynamoDbSettings?: DynamoDbSettings | null;

		/** Settings for exporting data to Amazon S3. */
		S3Settings?: S3Settings | null;

		/** The settings in JSON format for the DMS Transfer type source endpoint. */
		DmsTransferSettings?: DmsTransferSettings | null;

		/** Provides information that defines a MongoDB endpoint. */
		MongoDbSettings?: MongoDbSettings | null;

		/** Provides information that describes an Amazon Kinesis Data Stream endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
		KinesisSettings?: KinesisSettings | null;

		/** Provides information that describes an Apache Kafka endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. */
		KafkaSettings?: KafkaSettings | null;

		/** Provides information that defines an Elasticsearch endpoint. */
		ElasticsearchSettings?: ElasticsearchSettings | null;

		/** Provides information that defines an Amazon Neptune endpoint. */
		NeptuneSettings?: NeptuneSettings | null;

		/** Provides information that defines an Amazon Redshift endpoint. */
		RedshiftSettings?: RedshiftSettings | null;
	}

	export enum ModifyEndpointMessageSslMode { none = 0, require = 1, verify_ca = 2, verify_full = 3 }


	/** <p/> */
	export interface ModifyEventSubscriptionResponse {

		/** Describes an event notification subscription created by the <code>CreateEventSubscription</code> operation. */
		EventSubscription?: EventSubscription | null;
	}


	/** <p/> */
	export interface ModifyEventSubscriptionMessage {
		SubscriptionName: string;
		SnsTopicArn?: string | null;
		SourceType?: string | null;
		EventCategories?: Array<string> | null;
		Enabled?: boolean | null;
	}


	/** <p/> */
	export interface ModifyReplicationInstanceResponse {

		/** Provides information that defines a replication instance. */
		ReplicationInstance?: ReplicationInstance | null;
	}


	/** <p/> */
	export interface ModifyReplicationInstanceMessage {
		ReplicationInstanceArn: string;
		AllocatedStorage?: number | null;
		ApplyImmediately?: boolean | null;
		ReplicationInstanceClass?: string | null;
		VpcSecurityGroupIds?: Array<string> | null;
		PreferredMaintenanceWindow?: string | null;
		MultiAZ?: boolean | null;
		EngineVersion?: string | null;
		AllowMajorVersionUpgrade?: boolean | null;
		AutoMinorVersionUpgrade?: boolean | null;
		ReplicationInstanceIdentifier?: string | null;
	}

	export interface UpgradeDependencyFailureFault {
	}


	/** <p/> */
	export interface ModifyReplicationSubnetGroupResponse {

		/** Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroup</code> operation. */
		ReplicationSubnetGroup?: ReplicationSubnetGroup | null;
	}


	/** <p/> */
	export interface ModifyReplicationSubnetGroupMessage {
		ReplicationSubnetGroupIdentifier: string;
		ReplicationSubnetGroupDescription?: string | null;
		SubnetIds: Array<string>;
	}

	export interface SubnetAlreadyInUse {
	}


	/** <p/> */
	export interface ModifyReplicationTaskResponse {

		/** Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation. */
		ReplicationTask?: ReplicationTask | null;
	}


	/** <p/> */
	export interface ModifyReplicationTaskMessage {
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

	export enum ModifyReplicationTaskMessageMigrationType { full_load = 0, cdc = 1, full_load_and_cdc = 2 }

	export interface RebootReplicationInstanceResponse {

		/** Provides information that defines a replication instance. */
		ReplicationInstance?: ReplicationInstance | null;
	}

	export interface RebootReplicationInstanceMessage {
		ReplicationInstanceArn: string;
		ForceFailover?: boolean | null;
	}


	/** <p/> */
	export interface RefreshSchemasResponse {

		/** Provides information that describes status of a schema at an endpoint specified by the <code>DescribeRefreshSchemaStatus</code> operation. */
		RefreshSchemasStatus?: RefreshSchemasStatus | null;
	}


	/** <p/> */
	export interface RefreshSchemasMessage {
		EndpointArn: string;
		ReplicationInstanceArn: string;
	}

	export interface ReloadTablesResponse {
		ReplicationTaskArn?: string | null;
	}

	export interface ReloadTablesMessage {
		ReplicationTaskArn: string;
		TablesToReload: Array<TableToReload>;
		ReloadOption?: ReloadTablesMessageReloadOption | null;
	}


	/** Provides the name of the schema and table to be reloaded. */
	export interface TableToReload {
		SchemaName?: string | null;
		TableName?: string | null;
	}

	export enum ReloadTablesMessageReloadOption { data_reload = 0, validate_only = 1 }


	/** <p/> */
	export interface RemoveTagsFromResourceResponse {
	}


	/** Removes one or more tags from an AWS DMS resource. */
	export interface RemoveTagsFromResourceMessage {
		ResourceArn: string;
		TagKeys: Array<string>;
	}


	/** <p/> */
	export interface StartReplicationTaskResponse {

		/** Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation. */
		ReplicationTask?: ReplicationTask | null;
	}


	/** <p/> */
	export interface StartReplicationTaskMessage {
		ReplicationTaskArn: string;
		StartReplicationTaskType: StartReplicationTaskMessageStartReplicationTaskType;
		CdcStartTime?: Date | null;
		CdcStartPosition?: string | null;
		CdcStopPosition?: string | null;
	}

	export enum StartReplicationTaskMessageStartReplicationTaskType { start_replication = 0, resume_processing = 1, reload_target = 2 }


	/** <p/> */
	export interface StartReplicationTaskAssessmentResponse {

		/** Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation. */
		ReplicationTask?: ReplicationTask | null;
	}


	/** <p/> */
	export interface StartReplicationTaskAssessmentMessage {
		ReplicationTaskArn: string;
	}


	/** <p/> */
	export interface StopReplicationTaskResponse {

		/** Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation. */
		ReplicationTask?: ReplicationTask | null;
	}


	/** <p/> */
	export interface StopReplicationTaskMessage {
		ReplicationTaskArn: string;
	}


	/** <p/> */
	export interface TestConnectionResponse {

		/** Status of the connection between an endpoint and a replication instance, including Amazon Resource Names (ARNs) and the last error message issued. */
		Connection?: Connection | null;
	}


	/** <p/> */
	export interface TestConnectionMessage {
		ReplicationInstanceArn: string;
		EndpointArn: string;
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
		DescribeCertificates(MaxRecords: string, Marker: string, requestBody: DescribeCertificatesMessage): Observable<DescribeCertificatesResponse> {
			return this.http.post<DescribeCertificatesResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeCertificates?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeConnections
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeConnectionsResponse} Success
		 */
		DescribeConnections(MaxRecords: string, Marker: string, requestBody: DescribeConnectionsMessage): Observable<DescribeConnectionsResponse> {
			return this.http.post<DescribeConnectionsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeConnections?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the type of endpoints available.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeEndpointTypesResponse} Success
		 */
		DescribeEndpointTypes(MaxRecords: string, Marker: string, requestBody: DescribeEndpointTypesMessage): Observable<DescribeEndpointTypesResponse> {
			return this.http.post<DescribeEndpointTypesResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeEndpointTypes?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the endpoints for your account in the current region.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeEndpoints
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeEndpointsResponse} Success
		 */
		DescribeEndpoints(MaxRecords: string, Marker: string, requestBody: DescribeEndpointsMessage): Observable<DescribeEndpointsResponse> {
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
		DescribeEventSubscriptions(MaxRecords: string, Marker: string, requestBody: DescribeEventSubscriptionsMessage): Observable<DescribeEventSubscriptionsResponse> {
			return this.http.post<DescribeEventSubscriptionsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeEventSubscriptions?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists events for a given source identifier and source type. You can also specify a start and end time. For more information on AWS DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>AWS Database Migration User Guide.</i>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeEvents
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeEventsResponse} Success
		 */
		DescribeEvents(MaxRecords: string, Marker: string, requestBody: DescribeEventsMessage): Observable<DescribeEventsResponse> {
			return this.http.post<DescribeEventsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeEvents?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the replication instance types that can be created in the specified region.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeOrderableReplicationInstancesResponse} Success
		 */
		DescribeOrderableReplicationInstances(MaxRecords: string, Marker: string, requestBody: DescribeOrderableReplicationInstancesMessage): Observable<DescribeOrderableReplicationInstancesResponse> {
			return this.http.post<DescribeOrderableReplicationInstancesResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeOrderableReplicationInstances?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For internal use only
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribePendingMaintenanceActions
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribePendingMaintenanceActionsResponse} Success
		 */
		DescribePendingMaintenanceActions(MaxRecords: string, Marker: string, requestBody: DescribePendingMaintenanceActionsMessage): Observable<DescribePendingMaintenanceActionsResponse> {
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
		DescribeReplicationInstanceTaskLogs(MaxRecords: string, Marker: string, requestBody: DescribeReplicationInstanceTaskLogsMessage): Observable<DescribeReplicationInstanceTaskLogsResponse> {
			return this.http.post<DescribeReplicationInstanceTaskLogsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about replication instances for your account in the current region.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeReplicationInstancesResponse} Success
		 */
		DescribeReplicationInstances(MaxRecords: string, Marker: string, requestBody: DescribeReplicationInstancesMessage): Observable<DescribeReplicationInstancesResponse> {
			return this.http.post<DescribeReplicationInstancesResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationInstances?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the replication subnet groups.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeReplicationSubnetGroupsResponse} Success
		 */
		DescribeReplicationSubnetGroups(MaxRecords: string, Marker: string, requestBody: DescribeReplicationSubnetGroupsMessage): Observable<DescribeReplicationSubnetGroupsResponse> {
			return this.http.post<DescribeReplicationSubnetGroupsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationSubnetGroups?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the task assessment results from Amazon S3. This action always returns the latest results.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeReplicationTaskAssessmentResultsResponse} Success
		 */
		DescribeReplicationTaskAssessmentResults(MaxRecords: string, Marker: string, requestBody: DescribeReplicationTaskAssessmentResultsMessage): Observable<DescribeReplicationTaskAssessmentResultsResponse> {
			return this.http.post<DescribeReplicationTaskAssessmentResultsResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about replication tasks for your account in the current region.
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeReplicationTasksResponse} Success
		 */
		DescribeReplicationTasks(MaxRecords: string, Marker: string, requestBody: DescribeReplicationTasksMessage): Observable<DescribeReplicationTasksResponse> {
			return this.http.post<DescribeReplicationTasksResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeReplicationTasks?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the schema for the specified endpoint.</p> <p/>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeSchemas
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeSchemasResponse} Success
		 */
		DescribeSchemas(MaxRecords: string, Marker: string, requestBody: DescribeSchemasMessage): Observable<DescribeSchemasResponse> {
			return this.http.post<DescribeSchemasResponse>(this.baseUri + '#X-Amz-Target=AmazonDMSv20160101.DescribeSchemas?MaxRecords=' + (MaxRecords == null ? '' : encodeURIComponent(MaxRecords)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted.</p> <p>Note that the "last updated" column the DMS console only indicates the time that AWS DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table.</p>
		 * Post #X-Amz-Target=AmazonDMSv20160101.DescribeTableStatistics
		 * @param {string} MaxRecords Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeTableStatisticsResponse} Success
		 */
		DescribeTableStatistics(MaxRecords: string, Marker: string, requestBody: DescribeTableStatisticsMessage): Observable<DescribeTableStatisticsResponse> {
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

