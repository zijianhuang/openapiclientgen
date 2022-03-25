import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Represents the output of a <code>BatchGetItem</code> operation. */
	export interface BatchGetItemOutput {
		Responses?: BatchGetResponseMap;
		UnprocessedKeys?: BatchGetRequestMap;
		ConsumedCapacity?: Array<ConsumedCapacity>;
	}

	export interface BatchGetResponseMap {
	}

	export interface BatchGetRequestMap {
	}


	/** The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>. */
	export interface ConsumedCapacity {
		TableName?: string;
		CapacityUnits?: number;
		ReadCapacityUnits?: number;
		WriteCapacityUnits?: number;

		/** Represents the amount of provisioned throughput capacity consumed on a table or an index. */
		Table?: Capacity;
		LocalSecondaryIndexes?: SecondaryIndexesCapacityMap;
		GlobalSecondaryIndexes?: SecondaryIndexesCapacityMap;
	}


	/** Represents the amount of provisioned throughput capacity consumed on a table or an index. */
	export interface Capacity {
		ReadCapacityUnits?: number;
		WriteCapacityUnits?: number;
		CapacityUnits?: number;
	}

	export interface SecondaryIndexesCapacityMap {
	}


	/** Represents the input of a <code>BatchGetItem</code> operation. */
	export interface BatchGetItemInput {
		RequestItems: BatchGetRequestMap;

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchGetItemInputReturnConsumedCapacity;
	}

	export enum BatchGetItemInputReturnConsumedCapacity { INDEXES = 0, TOTAL = 1, NONE = 2 }

	export interface ProvisionedThroughputExceededException {
	}

	export interface ResourceNotFoundException {
	}

	export interface RequestLimitExceeded {
	}

	export interface InternalServerError {
	}


	/** Represents the output of a <code>BatchWriteItem</code> operation. */
	export interface BatchWriteItemOutput {
		UnprocessedItems?: BatchWriteItemRequestMap;
		ItemCollectionMetrics?: ItemCollectionMetricsPerTable;
		ConsumedCapacity?: Array<ConsumedCapacity>;
	}

	export interface BatchWriteItemRequestMap {
	}

	export interface ItemCollectionMetricsPerTable {
	}


	/** Represents the input of a <code>BatchWriteItem</code> operation. */
	export interface BatchWriteItemInput {
		RequestItems: BatchWriteItemRequestMap;

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchGetItemInputReturnConsumedCapacity;
		ReturnItemCollectionMetrics?: BatchWriteItemInputReturnItemCollectionMetrics;
	}

	export enum BatchWriteItemInputReturnItemCollectionMetrics { SIZE = 0, NONE = 1 }

	export interface ItemCollectionSizeLimitExceededException {
	}

	export interface CreateBackupOutput {

		/** Contains the details of the backup created for the table. */
		BackupDetails?: BackupDetails;
	}


	/** Contains the details of the backup created for the table. */
	export interface BackupDetails {
		BackupArn: string;
		BackupName: string;
		BackupSizeBytes?: number;
		BackupStatus: BackupDetailsBackupStatus;
		BackupType: BackupDetailsBackupType;
		BackupCreationDateTime: Date;
		BackupExpiryDateTime?: Date;
	}

	export enum BackupDetailsBackupStatus { CREATING = 0, DELETED = 1, AVAILABLE = 2 }

	export enum BackupDetailsBackupType { USER = 0, SYSTEM = 1, AWS_BACKUP = 2 }

	export interface CreateBackupInput {
		TableName: string;
		BackupName: string;
	}

	export interface TableNotFoundException {
	}

	export interface TableInUseException {
	}

	export interface ContinuousBackupsUnavailableException {
	}

	export interface BackupInUseException {
	}

	export interface LimitExceededException {
	}

	export interface CreateGlobalTableOutput {

		/** Contains details about the global table. */
		GlobalTableDescription?: GlobalTableDescription;
	}


	/** Contains details about the global table. */
	export interface GlobalTableDescription {
		ReplicationGroup?: Array<ReplicaDescription>;
		GlobalTableArn?: string;
		CreationDateTime?: Date;
		GlobalTableStatus?: GlobalTableDescriptionGlobalTableStatus;
		GlobalTableName?: string;
	}


	/** Contains the details of the replica. */
	export interface ReplicaDescription {
		RegionName?: string;
		ReplicaStatus?: ReplicaDescriptionReplicaStatus;
		ReplicaStatusDescription?: string;
		ReplicaStatusPercentProgress?: string;
		KMSMasterKeyId?: string;

		/** Replica-specific provisioned throughput settings. If not specified, uses the source table's provisioned throughput settings. */
		ProvisionedThroughputOverride?: ProvisionedThroughputOverride;
		GlobalSecondaryIndexes?: Array<ReplicaGlobalSecondaryIndexDescription>;
	}

	export enum ReplicaDescriptionReplicaStatus { CREATING = 0, CREATION_FAILED = 1, UPDATING = 2, DELETING = 3, ACTIVE = 4 }


	/** Replica-specific provisioned throughput settings. If not specified, uses the source table's provisioned throughput settings. */
	export interface ProvisionedThroughputOverride {
		ReadCapacityUnits?: number;
	}


	/** Represents the properties of a replica global secondary index. */
	export interface ReplicaGlobalSecondaryIndexDescription {
		IndexName?: string;

		/** Replica-specific provisioned throughput settings. If not specified, uses the source table's provisioned throughput settings. */
		ProvisionedThroughputOverride?: ProvisionedThroughputOverride;
	}

	export enum GlobalTableDescriptionGlobalTableStatus { CREATING = 0, ACTIVE = 1, DELETING = 2, UPDATING = 3 }

	export interface CreateGlobalTableInput {
		GlobalTableName: string;
		ReplicationGroup: Array<Replica>;
	}


	/** Represents the properties of a replica. */
	export interface Replica {
		RegionName?: string;
	}

	export interface GlobalTableAlreadyExistsException {
	}


	/** Represents the output of a <code>CreateTable</code> operation. */
	export interface CreateTableOutput {

		/** Represents the properties of a table. */
		TableDescription?: TableDescription;
	}


	/** Represents the properties of a table. */
	export interface TableDescription {
		AttributeDefinitions?: Array<AttributeDefinition>;
		TableName?: string;
		KeySchema?: Array<KeySchemaElement>;
		TableStatus?: TableDescriptionTableStatus;
		CreationDateTime?: Date;

		/** Represents the provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases. */
		ProvisionedThroughput?: ProvisionedThroughputDescription;
		TableSizeBytes?: number;
		ItemCount?: number;
		TableArn?: string;
		TableId?: string;

		/** Contains the details for the read/write capacity mode. */
		BillingModeSummary?: BillingModeSummary;
		LocalSecondaryIndexes?: Array<LocalSecondaryIndexDescription>;
		GlobalSecondaryIndexes?: Array<GlobalSecondaryIndexDescription>;

		/** Represents the DynamoDB Streams configuration for a table in DynamoDB. */
		StreamSpecification?: StreamSpecification;
		LatestStreamLabel?: string;
		LatestStreamArn?: string;
		GlobalTableVersion?: string;
		Replicas?: Array<ReplicaDescription>;

		/** Contains details for the restore. */
		RestoreSummary?: RestoreSummary;

		/** The description of the server-side encryption status on the specified table. */
		SSEDescription?: SSEDescription;

		/** Contains details of a table archival operation. */
		ArchivalSummary?: ArchivalSummary;
	}


	/** Represents an attribute for describing the key schema for the table and indexes. */
	export interface AttributeDefinition {
		AttributeName: string;
		AttributeType: AttributeDefinitionAttributeType;
	}

	export enum AttributeDefinitionAttributeType { S = 0, N = 1, B = 2 }


	/** <p>Represents <i>a single element</i> of a key schema. A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index.</p> <p>A <code>KeySchemaElement</code> represents exactly one attribute of the primary key. For example, a simple primary key would be represented by one <code>KeySchemaElement</code> (for the partition key). A composite primary key would require one <code>KeySchemaElement</code> for the partition key, and another <code>KeySchemaElement</code> for the sort key.</p> <p>A <code>KeySchemaElement</code> must be a scalar, top-level attribute (not a nested attribute). The data type must be one of String, Number, or Binary. The attribute cannot be nested within a List or a Map.</p> */
	export interface KeySchemaElement {
		AttributeName: string;
		KeyType: KeySchemaElementKeyType;
	}

	export enum KeySchemaElementKeyType { HASH = 0, RANGE = 1 }

	export enum TableDescriptionTableStatus { CREATING = 0, UPDATING = 1, DELETING = 2, ACTIVE = 3, INACCESSIBLE_ENCRYPTION_CREDENTIALS = 4, ARCHIVING = 5, ARCHIVED = 6 }


	/** Represents the provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases. */
	export interface ProvisionedThroughputDescription {
		LastIncreaseDateTime?: Date;
		LastDecreaseDateTime?: Date;
		NumberOfDecreasesToday?: number;
		ReadCapacityUnits?: number;
		WriteCapacityUnits?: number;
	}


	/** Contains the details for the read/write capacity mode. */
	export interface BillingModeSummary {
		BillingMode?: BillingModeSummaryBillingMode;
		LastUpdateToPayPerRequestDateTime?: Date;
	}

	export enum BillingModeSummaryBillingMode { PROVISIONED = 0, PAY_PER_REQUEST = 1 }


	/** Represents the properties of a local secondary index. */
	export interface LocalSecondaryIndexDescription {
		IndexName?: string;
		KeySchema?: Array<KeySchemaElement>;

		/** Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. */
		Projection?: Projection;
		IndexSizeBytes?: number;
		ItemCount?: number;
		IndexArn?: string;
	}


	/** Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. */
	export interface Projection {
		ProjectionType?: ProjectionProjectionType;
		NonKeyAttributes?: Array<string>;
	}

	export enum ProjectionProjectionType { ALL = 0, KEYS_ONLY = 1, INCLUDE = 2 }


	/** Represents the properties of a global secondary index. */
	export interface GlobalSecondaryIndexDescription {
		IndexName?: string;
		KeySchema?: Array<KeySchemaElement>;

		/** Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. */
		Projection?: Projection;
		IndexStatus?: GlobalSecondaryIndexDescriptionIndexStatus;
		Backfilling?: boolean;

		/** Represents the provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases. */
		ProvisionedThroughput?: ProvisionedThroughputDescription;
		IndexSizeBytes?: number;
		ItemCount?: number;
		IndexArn?: string;
	}

	export enum GlobalSecondaryIndexDescriptionIndexStatus { CREATING = 0, UPDATING = 1, DELETING = 2, ACTIVE = 3 }


	/** Represents the DynamoDB Streams configuration for a table in DynamoDB. */
	export interface StreamSpecification {
		StreamEnabled: boolean;
		StreamViewType?: StreamSpecificationStreamViewType;
	}

	export enum StreamSpecificationStreamViewType { NEW_IMAGE = 0, OLD_IMAGE = 1, NEW_AND_OLD_IMAGES = 2, KEYS_ONLY = 3 }


	/** Contains details for the restore. */
	export interface RestoreSummary {
		SourceBackupArn?: string;
		SourceTableArn?: string;
		RestoreDateTime: Date;
		RestoreInProgress: boolean;
	}


	/** The description of the server-side encryption status on the specified table. */
	export interface SSEDescription {
		Status?: SSEDescriptionStatus;
		SSEType?: SSEDescriptionSSEType;
		KMSMasterKeyArn?: string;
		InaccessibleEncryptionDateTime?: Date;
	}

	export enum SSEDescriptionStatus { ENABLING = 0, ENABLED = 1, DISABLING = 2, DISABLED = 3, UPDATING = 4 }

	export enum SSEDescriptionSSEType { AES256 = 0, KMS = 1 }


	/** Contains details of a table archival operation. */
	export interface ArchivalSummary {
		ArchivalDateTime?: Date;
		ArchivalReason?: string;
		ArchivalBackupArn?: string;
	}


	/** Represents the input of a <code>CreateTable</code> operation. */
	export interface CreateTableInput {
		AttributeDefinitions: Array<AttributeDefinition>;
		TableName: string;
		KeySchema: Array<KeySchemaElement>;
		LocalSecondaryIndexes?: Array<LocalSecondaryIndex>;
		GlobalSecondaryIndexes?: Array<GlobalSecondaryIndex>;
		BillingMode?: BillingModeSummaryBillingMode;

		/** <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
		ProvisionedThroughput?: ProvisionedThroughput;

		/** Represents the DynamoDB Streams configuration for a table in DynamoDB. */
		StreamSpecification?: StreamSpecification;

		/** Represents the settings used to enable server-side encryption. */
		SSESpecification?: SSESpecification;
		Tags?: Array<Tag>;
	}


	/** Represents the properties of a local secondary index. */
	export interface LocalSecondaryIndex {
		IndexName: string;
		KeySchema: Array<KeySchemaElement>;

		/**
		 * Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
		 * Required
		 */
		Projection: Projection;
	}


	/** Represents the properties of a global secondary index. */
	export interface GlobalSecondaryIndex {
		IndexName: string;
		KeySchema: Array<KeySchemaElement>;

		/**
		 * Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
		 * Required
		 */
		Projection: Projection;

		/** <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
		ProvisionedThroughput?: ProvisionedThroughput;
	}


	/** <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
	export interface ProvisionedThroughput {
		ReadCapacityUnits: number;
		WriteCapacityUnits: number;
	}


	/** Represents the settings used to enable server-side encryption. */
	export interface SSESpecification {
		Enabled?: boolean;
		SSEType?: SSEDescriptionSSEType;
		KMSMasterKeyId?: string;
	}


	/** <p>Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a single DynamoDB table. </p> <p> AWS-assigned tag names and values are automatically assigned the <code>aws:</code> prefix, which the user cannot assign. AWS-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix <code>user:</code> in the Cost Allocation Report. You cannot backdate the application of a tag. </p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export interface ResourceInUseException {
	}

	export interface DeleteBackupOutput {

		/** Contains the description of the backup created for the table. */
		BackupDescription?: BackupDescription;
	}


	/** Contains the description of the backup created for the table. */
	export interface BackupDescription {

		/** Contains the details of the backup created for the table. */
		BackupDetails?: BackupDetails;

		/** Contains the details of the table when the backup was created. */
		SourceTableDetails?: SourceTableDetails;

		/** Contains the details of the features enabled on the table when the backup was created. For example, LSIs, GSIs, streams, TTL. */
		SourceTableFeatureDetails?: SourceTableFeatureDetails;
	}


	/** Contains the details of the table when the backup was created.  */
	export interface SourceTableDetails {
		TableName: string;
		TableId: string;
		TableArn?: string;
		TableSizeBytes?: number;
		KeySchema: Array<KeySchemaElement>;
		TableCreationDateTime: Date;

		/**
		 * <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
		 * Required
		 */
		ProvisionedThroughput: ProvisionedThroughput;
		ItemCount?: number;
		BillingMode?: BillingModeSummaryBillingMode;
	}


	/** Contains the details of the features enabled on the table when the backup was created. For example, LSIs, GSIs, streams, TTL.  */
	export interface SourceTableFeatureDetails {
		LocalSecondaryIndexes?: Array<LocalSecondaryIndexInfo>;
		GlobalSecondaryIndexes?: Array<GlobalSecondaryIndexInfo>;

		/** Represents the DynamoDB Streams configuration for a table in DynamoDB. */
		StreamDescription?: StreamSpecification;

		/** The description of the Time to Live (TTL) status on the specified table. */
		TimeToLiveDescription?: TimeToLiveDescription;

		/** The description of the server-side encryption status on the specified table. */
		SSEDescription?: SSEDescription;
	}


	/** Represents the properties of a local secondary index for the table when the backup was created. */
	export interface LocalSecondaryIndexInfo {
		IndexName?: string;
		KeySchema?: Array<KeySchemaElement>;

		/** Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. */
		Projection?: Projection;
	}


	/** Represents the properties of a global secondary index for the table when the backup was created. */
	export interface GlobalSecondaryIndexInfo {
		IndexName?: string;
		KeySchema?: Array<KeySchemaElement>;

		/** Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. */
		Projection?: Projection;

		/** <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
		ProvisionedThroughput?: ProvisionedThroughput;
	}


	/** The description of the Time to Live (TTL) status on the specified table.  */
	export interface TimeToLiveDescription {
		TimeToLiveStatus?: TimeToLiveDescriptionTimeToLiveStatus;
		AttributeName?: string;
	}

	export enum TimeToLiveDescriptionTimeToLiveStatus { ENABLING = 0, DISABLING = 1, ENABLED = 2, DISABLED = 3 }

	export interface DeleteBackupInput {
		BackupArn: string;
	}

	export interface BackupNotFoundException {
	}


	/** Represents the output of a <code>DeleteItem</code> operation. */
	export interface DeleteItemOutput {
		Attributes?: AttributeMap;

		/** The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>. */
		ConsumedCapacity?: ConsumedCapacity;

		/** Information about item collections, if any, that were affected by the operation. <code>ItemCollectionMetrics</code> is only returned if the request asked for it. If the table does not have any local secondary indexes, this information is not returned in the response. */
		ItemCollectionMetrics?: ItemCollectionMetrics;
	}

	export interface AttributeMap {
	}


	/** Information about item collections, if any, that were affected by the operation. <code>ItemCollectionMetrics</code> is only returned if the request asked for it. If the table does not have any local secondary indexes, this information is not returned in the response. */
	export interface ItemCollectionMetrics {
		ItemCollectionKey?: ItemCollectionKeyAttributeMap;
		SizeEstimateRangeGB?: Array<number>;
	}

	export interface ItemCollectionKeyAttributeMap {
	}


	/** Represents the input of a <code>DeleteItem</code> operation. */
	export interface DeleteItemInput {
		TableName: string;
		Key: Key;
		Expected?: ExpectedAttributeMap;
		ConditionalOperator?: DeleteItemInputConditionalOperator;
		ReturnValues?: DeleteItemInputReturnValues;

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchGetItemInputReturnConsumedCapacity;
		ReturnItemCollectionMetrics?: BatchWriteItemInputReturnItemCollectionMetrics;
		ConditionExpression?: string;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
	}

	export interface Key {
	}

	export interface ExpectedAttributeMap {
	}

	export enum DeleteItemInputConditionalOperator { AND = 0, OR = 1 }

	export enum DeleteItemInputReturnValues { NONE = 0, ALL_OLD = 1, UPDATED_OLD = 2, ALL_NEW = 3, UPDATED_NEW = 4 }

	export interface ExpressionAttributeNameMap {
	}

	export interface ExpressionAttributeValueMap {
	}

	export interface ConditionalCheckFailedException {
	}

	export interface TransactionConflictException {
	}


	/** Represents the output of a <code>DeleteTable</code> operation. */
	export interface DeleteTableOutput {

		/** Represents the properties of a table. */
		TableDescription?: TableDescription;
	}


	/** Represents the input of a <code>DeleteTable</code> operation. */
	export interface DeleteTableInput {
		TableName: string;
	}

	export interface DescribeBackupOutput {

		/** Contains the description of the backup created for the table. */
		BackupDescription?: BackupDescription;
	}

	export interface DescribeBackupInput {
		BackupArn: string;
	}

	export interface DescribeContinuousBackupsOutput {

		/** Represents the continuous backups and point in time recovery settings on the table. */
		ContinuousBackupsDescription?: ContinuousBackupsDescription;
	}


	/** Represents the continuous backups and point in time recovery settings on the table. */
	export interface ContinuousBackupsDescription {
		ContinuousBackupsStatus: ContinuousBackupsDescriptionContinuousBackupsStatus;

		/** The description of the point in time settings applied to the table. */
		PointInTimeRecoveryDescription?: PointInTimeRecoveryDescription;
	}

	export enum ContinuousBackupsDescriptionContinuousBackupsStatus { ENABLED = 0, DISABLED = 1 }


	/** The description of the point in time settings applied to the table. */
	export interface PointInTimeRecoveryDescription {
		PointInTimeRecoveryStatus?: ContinuousBackupsDescriptionContinuousBackupsStatus;
		EarliestRestorableDateTime?: Date;
		LatestRestorableDateTime?: Date;
	}

	export interface DescribeContinuousBackupsInput {
		TableName: string;
	}

	export interface DescribeContributorInsightsOutput {
		TableName?: string;
		IndexName?: string;
		ContributorInsightsRuleList?: Array<string>;
		ContributorInsightsStatus?: DescribeContributorInsightsOutputContributorInsightsStatus;
		LastUpdateDateTime?: Date;

		/** Represents a failure a contributor insights operation. */
		FailureException?: FailureException;
	}

	export enum DescribeContributorInsightsOutputContributorInsightsStatus { ENABLING = 0, ENABLED = 1, DISABLING = 2, DISABLED = 3, FAILED = 4 }


	/** Represents a failure a contributor insights operation. */
	export interface FailureException {
		ExceptionName?: string;
		ExceptionDescription?: string;
	}

	export interface DescribeContributorInsightsInput {
		TableName: string;
		IndexName?: string;
	}

	export interface DescribeEndpointsResponse {
		Endpoints: Array<Endpoint>;
	}


	/** An endpoint information details. */
	export interface Endpoint {
		Address: string;
		CachePeriodInMinutes: number;
	}

	export interface DescribeEndpointsRequest {
	}

	export interface DescribeGlobalTableOutput {

		/** Contains details about the global table. */
		GlobalTableDescription?: GlobalTableDescription;
	}

	export interface DescribeGlobalTableInput {
		GlobalTableName: string;
	}

	export interface GlobalTableNotFoundException {
	}

	export interface DescribeGlobalTableSettingsOutput {
		GlobalTableName?: string;
		ReplicaSettings?: Array<ReplicaSettingsDescription>;
	}


	/** Represents the properties of a replica. */
	export interface ReplicaSettingsDescription {
		RegionName: string;
		ReplicaStatus?: ReplicaDescriptionReplicaStatus;

		/** Contains the details for the read/write capacity mode. */
		ReplicaBillingModeSummary?: BillingModeSummary;
		ReplicaProvisionedReadCapacityUnits?: number;

		/** Represents the auto scaling settings for a global table or global secondary index. */
		ReplicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
		ReplicaProvisionedWriteCapacityUnits?: number;

		/** Represents the auto scaling settings for a global table or global secondary index. */
		ReplicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
		ReplicaGlobalSecondaryIndexSettings?: Array<ReplicaGlobalSecondaryIndexSettingsDescription>;
	}


	/** Represents the auto scaling settings for a global table or global secondary index. */
	export interface AutoScalingSettingsDescription {
		MinimumUnits?: number;
		MaximumUnits?: number;
		AutoScalingDisabled?: boolean;
		AutoScalingRoleArn?: string;
		ScalingPolicies?: Array<AutoScalingPolicyDescription>;
	}


	/** Represents the properties of the scaling policy. */
	export interface AutoScalingPolicyDescription {
		PolicyName?: string;

		/** Represents the properties of a target tracking scaling policy. */
		TargetTrackingScalingPolicyConfiguration?: AutoScalingTargetTrackingScalingPolicyConfigurationDescription;
	}


	/** Represents the properties of a target tracking scaling policy. */
	export interface AutoScalingTargetTrackingScalingPolicyConfigurationDescription {
		DisableScaleIn?: boolean;
		ScaleInCooldown?: number;
		ScaleOutCooldown?: number;
		TargetValue: number;
	}


	/** Represents the properties of a global secondary index. */
	export interface ReplicaGlobalSecondaryIndexSettingsDescription {
		IndexName: string;
		IndexStatus?: GlobalSecondaryIndexDescriptionIndexStatus;
		ProvisionedReadCapacityUnits?: number;

		/** Represents the auto scaling settings for a global table or global secondary index. */
		ProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
		ProvisionedWriteCapacityUnits?: number;

		/** Represents the auto scaling settings for a global table or global secondary index. */
		ProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
	}

	export interface DescribeGlobalTableSettingsInput {
		GlobalTableName: string;
	}


	/** Represents the output of a <code>DescribeLimits</code> operation. */
	export interface DescribeLimitsOutput {
		AccountMaxReadCapacityUnits?: number;
		AccountMaxWriteCapacityUnits?: number;
		TableMaxReadCapacityUnits?: number;
		TableMaxWriteCapacityUnits?: number;
	}


	/** Represents the input of a <code>DescribeLimits</code> operation. Has no content. */
	export interface DescribeLimitsInput {
	}


	/** Represents the output of a <code>DescribeTable</code> operation. */
	export interface DescribeTableOutput {

		/** Represents the properties of a table. */
		Table?: TableDescription;
	}


	/** Represents the input of a <code>DescribeTable</code> operation. */
	export interface DescribeTableInput {
		TableName: string;
	}

	export interface DescribeTableReplicaAutoScalingOutput {

		/** Represents the auto scaling configuration for a global table. */
		TableAutoScalingDescription?: TableAutoScalingDescription;
	}


	/** Represents the auto scaling configuration for a global table. */
	export interface TableAutoScalingDescription {
		TableName?: string;
		TableStatus?: TableDescriptionTableStatus;
		Replicas?: Array<ReplicaAutoScalingDescription>;
	}


	/** Represents the auto scaling settings of the replica. */
	export interface ReplicaAutoScalingDescription {
		RegionName?: string;
		GlobalSecondaryIndexes?: Array<ReplicaGlobalSecondaryIndexAutoScalingDescription>;

		/** Represents the auto scaling settings for a global table or global secondary index. */
		ReplicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

		/** Represents the auto scaling settings for a global table or global secondary index. */
		ReplicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
		ReplicaStatus?: ReplicaDescriptionReplicaStatus;
	}


	/** Represents the auto scaling configuration for a replica global secondary index. */
	export interface ReplicaGlobalSecondaryIndexAutoScalingDescription {
		IndexName?: string;
		IndexStatus?: GlobalSecondaryIndexDescriptionIndexStatus;

		/** Represents the auto scaling settings for a global table or global secondary index. */
		ProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

		/** Represents the auto scaling settings for a global table or global secondary index. */
		ProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
	}

	export interface DescribeTableReplicaAutoScalingInput {
		TableName: string;
	}

	export interface DescribeTimeToLiveOutput {

		/** The description of the Time to Live (TTL) status on the specified table. */
		TimeToLiveDescription?: TimeToLiveDescription;
	}

	export interface DescribeTimeToLiveInput {
		TableName: string;
	}


	/** Represents the output of a <code>GetItem</code> operation. */
	export interface GetItemOutput {
		Item?: AttributeMap;

		/** The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>. */
		ConsumedCapacity?: ConsumedCapacity;
	}


	/** Represents the input of a <code>GetItem</code> operation. */
	export interface GetItemInput {
		TableName: string;
		Key: Key;
		AttributesToGet?: Array<string>;
		ConsistentRead?: boolean;

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchGetItemInputReturnConsumedCapacity;
		ProjectionExpression?: string;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
	}

	export interface ListBackupsOutput {
		BackupSummaries?: Array<BackupSummary>;
		LastEvaluatedBackupArn?: string;
	}


	/** Contains details for the backup. */
	export interface BackupSummary {
		TableName?: string;
		TableId?: string;
		TableArn?: string;
		BackupArn?: string;
		BackupName?: string;
		BackupCreationDateTime?: Date;
		BackupExpiryDateTime?: Date;
		BackupStatus?: BackupDetailsBackupStatus;
		BackupType?: BackupDetailsBackupType;
		BackupSizeBytes?: number;
	}

	export interface ListBackupsInput {
		TableName?: string;
		Limit?: number;
		TimeRangeLowerBound?: Date;
		TimeRangeUpperBound?: Date;
		ExclusiveStartBackupArn?: string;
		BackupType?: ListBackupsInputBackupType;
	}

	export enum ListBackupsInputBackupType { USER = 0, SYSTEM = 1, AWS_BACKUP = 2, ALL = 3 }

	export interface ListContributorInsightsOutput {
		ContributorInsightsSummaries?: Array<ContributorInsightsSummary>;
		NextToken?: string;
	}


	/** Represents a Contributor Insights summary entry.. */
	export interface ContributorInsightsSummary {
		TableName?: string;
		IndexName?: string;
		ContributorInsightsStatus?: DescribeContributorInsightsOutputContributorInsightsStatus;
	}

	export interface ListContributorInsightsInput {
		TableName?: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListGlobalTablesOutput {
		GlobalTables?: Array<GlobalTable>;
		LastEvaluatedGlobalTableName?: string;
	}


	/** Represents the properties of a global table. */
	export interface GlobalTable {
		GlobalTableName?: string;
		ReplicationGroup?: Array<Replica>;
	}

	export interface ListGlobalTablesInput {
		ExclusiveStartGlobalTableName?: string;
		Limit?: number;
		RegionName?: string;
	}


	/** Represents the output of a <code>ListTables</code> operation. */
	export interface ListTablesOutput {
		TableNames?: Array<string>;
		LastEvaluatedTableName?: string;
	}


	/** Represents the input of a <code>ListTables</code> operation. */
	export interface ListTablesInput {
		ExclusiveStartTableName?: string;
		Limit?: number;
	}

	export interface ListTagsOfResourceOutput {
		Tags?: Array<Tag>;
		NextToken?: string;
	}

	export interface ListTagsOfResourceInput {
		ResourceArn: string;
		NextToken?: string;
	}


	/** Represents the output of a <code>PutItem</code> operation. */
	export interface PutItemOutput {
		Attributes?: AttributeMap;

		/** The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>. */
		ConsumedCapacity?: ConsumedCapacity;

		/** Information about item collections, if any, that were affected by the operation. <code>ItemCollectionMetrics</code> is only returned if the request asked for it. If the table does not have any local secondary indexes, this information is not returned in the response. */
		ItemCollectionMetrics?: ItemCollectionMetrics;
	}


	/** Represents the input of a <code>PutItem</code> operation. */
	export interface PutItemInput {
		TableName: string;
		Item: PutItemInputAttributeMap;
		Expected?: ExpectedAttributeMap;
		ReturnValues?: DeleteItemInputReturnValues;

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchGetItemInputReturnConsumedCapacity;
		ReturnItemCollectionMetrics?: BatchWriteItemInputReturnItemCollectionMetrics;
		ConditionalOperator?: DeleteItemInputConditionalOperator;
		ConditionExpression?: string;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
	}

	export interface PutItemInputAttributeMap {
	}


	/** Represents the output of a <code>Query</code> operation. */
	export interface QueryOutput {
		Items?: Array<AttributeMap>;
		Count?: number;
		ScannedCount?: number;
		LastEvaluatedKey?: Key;

		/** The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>. */
		ConsumedCapacity?: ConsumedCapacity;
	}


	/** Represents the input of a <code>Query</code> operation. */
	export interface QueryInput {
		TableName: string;
		IndexName?: string;
		Select?: QueryInputSelect;
		AttributesToGet?: Array<string>;
		Limit?: number;
		ConsistentRead?: boolean;
		KeyConditions?: KeyConditions;
		QueryFilter?: FilterConditionMap;
		ConditionalOperator?: DeleteItemInputConditionalOperator;
		ScanIndexForward?: boolean;
		ExclusiveStartKey?: Key;

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchGetItemInputReturnConsumedCapacity;
		ProjectionExpression?: string;
		FilterExpression?: string;
		KeyConditionExpression?: string;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
	}

	export enum QueryInputSelect { ALL_ATTRIBUTES = 0, ALL_PROJECTED_ATTRIBUTES = 1, SPECIFIC_ATTRIBUTES = 2, COUNT = 3 }

	export interface KeyConditions {
	}

	export interface FilterConditionMap {
	}

	export interface RestoreTableFromBackupOutput {

		/** Represents the properties of a table. */
		TableDescription?: TableDescription;
	}

	export interface RestoreTableFromBackupInput {
		TargetTableName: string;
		BackupArn: string;
		BillingModeOverride?: BillingModeSummaryBillingMode;
		GlobalSecondaryIndexOverride?: Array<GlobalSecondaryIndex>;
		LocalSecondaryIndexOverride?: Array<LocalSecondaryIndex>;

		/** <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
		ProvisionedThroughputOverride?: ProvisionedThroughput;

		/** Represents the settings used to enable server-side encryption. */
		SSESpecificationOverride?: SSESpecification;
	}

	export interface TableAlreadyExistsException {
	}

	export interface RestoreTableToPointInTimeOutput {

		/** Represents the properties of a table. */
		TableDescription?: TableDescription;
	}

	export interface RestoreTableToPointInTimeInput {
		SourceTableArn?: string;
		SourceTableName?: string;
		TargetTableName: string;
		UseLatestRestorableTime?: boolean;
		RestoreDateTime?: Date;
		BillingModeOverride?: BillingModeSummaryBillingMode;
		GlobalSecondaryIndexOverride?: Array<GlobalSecondaryIndex>;
		LocalSecondaryIndexOverride?: Array<LocalSecondaryIndex>;

		/** <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
		ProvisionedThroughputOverride?: ProvisionedThroughput;

		/** Represents the settings used to enable server-side encryption. */
		SSESpecificationOverride?: SSESpecification;
	}

	export interface InvalidRestoreTimeException {
	}

	export interface PointInTimeRecoveryUnavailableException {
	}


	/** Represents the output of a <code>Scan</code> operation. */
	export interface ScanOutput {
		Items?: Array<AttributeMap>;
		Count?: number;
		ScannedCount?: number;
		LastEvaluatedKey?: Key;

		/** The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>. */
		ConsumedCapacity?: ConsumedCapacity;
	}


	/** Represents the input of a <code>Scan</code> operation. */
	export interface ScanInput {
		TableName: string;
		IndexName?: string;
		AttributesToGet?: Array<string>;
		Limit?: number;
		Select?: QueryInputSelect;
		ScanFilter?: FilterConditionMap;
		ConditionalOperator?: DeleteItemInputConditionalOperator;
		ExclusiveStartKey?: Key;

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchGetItemInputReturnConsumedCapacity;
		TotalSegments?: number;
		Segment?: number;
		ProjectionExpression?: string;
		FilterExpression?: string;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
		ConsistentRead?: boolean;
	}

	export interface TagResourceInput {
		ResourceArn: string;
		Tags: Array<Tag>;
	}

	export interface TransactGetItemsOutput {
		ConsumedCapacity?: Array<ConsumedCapacity>;
		Responses?: Array<ItemResponse>;
	}


	/** Details for the requested item. */
	export interface ItemResponse {
		Item?: AttributeMap;
	}

	export interface TransactGetItemsInput {
		TransactItems: Array<TransactGetItem>;

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchGetItemInputReturnConsumedCapacity;
	}


	/** Specifies an item to be retrieved as part of the transaction. */
	export interface TransactGetItem {

		/**
		 * Specifies an item and related attribute values to retrieve in a <code>TransactGetItem</code> object.
		 * Required
		 */
		Get: Get;
	}


	/** Specifies an item and related attribute values to retrieve in a <code>TransactGetItem</code> object. */
	export interface Get {
		Key: Key;
		TableName: string;
		ProjectionExpression?: string;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
	}

	export interface TransactionCanceledException {
	}

	export interface TransactWriteItemsOutput {
		ConsumedCapacity?: Array<ConsumedCapacity>;
		ItemCollectionMetrics?: ItemCollectionMetricsPerTable;
	}

	export interface TransactWriteItemsInput {
		TransactItems: Array<TransactWriteItem>;

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchGetItemInputReturnConsumedCapacity;
		ReturnItemCollectionMetrics?: BatchWriteItemInputReturnItemCollectionMetrics;
		ClientRequestToken?: string;
	}


	/** A list of requests that can perform update, put, delete, or check operations on multiple items in one or more tables atomically. */
	export interface TransactWriteItem {

		/** Represents a request to perform a check that an item exists or to check the condition of specific attributes of the item. */
		ConditionCheck?: ConditionCheck;

		/** Represents a request to perform a <code>PutItem</code> operation. */
		Put?: Put;

		/** Represents a request to perform a <code>DeleteItem</code> operation. */
		Delete?: Delete;

		/** Represents a request to perform an <code>UpdateItem</code> operation. */
		Update?: Update;
	}


	/** Represents a request to perform a check that an item exists or to check the condition of specific attributes of the item. */
	export interface ConditionCheck {
		Key: Key;
		TableName: string;
		ConditionExpression: string;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
		ReturnValuesOnConditionCheckFailure?: ConditionCheckReturnValuesOnConditionCheckFailure;
	}

	export enum ConditionCheckReturnValuesOnConditionCheckFailure { ALL_OLD = 0, NONE = 1 }


	/** Represents a request to perform a <code>PutItem</code> operation. */
	export interface Put {
		Item: PutItemInputAttributeMap;
		TableName: string;
		ConditionExpression?: string;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
		ReturnValuesOnConditionCheckFailure?: ConditionCheckReturnValuesOnConditionCheckFailure;
	}


	/** Represents a request to perform a <code>DeleteItem</code> operation. */
	export interface Delete {
		Key: Key;
		TableName: string;
		ConditionExpression?: string;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
		ReturnValuesOnConditionCheckFailure?: ConditionCheckReturnValuesOnConditionCheckFailure;
	}


	/** Represents a request to perform an <code>UpdateItem</code> operation. */
	export interface Update {
		Key: Key;
		UpdateExpression: string;
		TableName: string;
		ConditionExpression?: string;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
		ReturnValuesOnConditionCheckFailure?: ConditionCheckReturnValuesOnConditionCheckFailure;
	}

	export interface TransactionInProgressException {
	}

	export interface IdempotentParameterMismatchException {
	}

	export interface UntagResourceInput {
		ResourceArn: string;
		TagKeys: Array<string>;
	}

	export interface UpdateContinuousBackupsOutput {

		/** Represents the continuous backups and point in time recovery settings on the table. */
		ContinuousBackupsDescription?: ContinuousBackupsDescription;
	}

	export interface UpdateContinuousBackupsInput {
		TableName: string;

		/**
		 * Represents the settings used to enable point in time recovery.
		 * Required
		 */
		PointInTimeRecoverySpecification: PointInTimeRecoverySpecification;
	}


	/** Represents the settings used to enable point in time recovery. */
	export interface PointInTimeRecoverySpecification {
		PointInTimeRecoveryEnabled: boolean;
	}

	export interface UpdateContributorInsightsOutput {
		TableName?: string;
		IndexName?: string;
		ContributorInsightsStatus?: DescribeContributorInsightsOutputContributorInsightsStatus;
	}

	export interface UpdateContributorInsightsInput {
		TableName: string;
		IndexName?: string;
		ContributorInsightsAction: UpdateContributorInsightsInputContributorInsightsAction;
	}

	export enum UpdateContributorInsightsInputContributorInsightsAction { ENABLE = 0, DISABLE = 1 }

	export interface UpdateGlobalTableOutput {

		/** Contains details about the global table. */
		GlobalTableDescription?: GlobalTableDescription;
	}

	export interface UpdateGlobalTableInput {
		GlobalTableName: string;
		ReplicaUpdates: Array<ReplicaUpdate>;
	}


	/** <p>Represents one of the following:</p> <ul> <li> <p>A new replica to be added to an existing global table.</p> </li> <li> <p>New parameters for an existing replica.</p> </li> <li> <p>An existing replica to be removed from an existing global table.</p> </li> </ul> */
	export interface ReplicaUpdate {

		/** Represents a replica to be added. */
		Create?: CreateReplicaAction;

		/** Represents a replica to be removed. */
		Delete?: DeleteReplicaAction;
	}


	/** Represents a replica to be added. */
	export interface CreateReplicaAction {
		RegionName: string;
	}


	/** Represents a replica to be removed. */
	export interface DeleteReplicaAction {
		RegionName: string;
	}

	export interface ReplicaAlreadyExistsException {
	}

	export interface ReplicaNotFoundException {
	}

	export interface UpdateGlobalTableSettingsOutput {
		GlobalTableName?: string;
		ReplicaSettings?: Array<ReplicaSettingsDescription>;
	}

	export interface UpdateGlobalTableSettingsInput {
		GlobalTableName: string;
		GlobalTableBillingMode?: BillingModeSummaryBillingMode;
		GlobalTableProvisionedWriteCapacityUnits?: number;

		/** Represents the auto scaling settings to be modified for a global table or global secondary index. */
		GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
		GlobalTableGlobalSecondaryIndexSettingsUpdate?: Array<GlobalTableGlobalSecondaryIndexSettingsUpdate>;
		ReplicaSettingsUpdate?: Array<ReplicaSettingsUpdate>;
	}


	/** Represents the auto scaling settings to be modified for a global table or global secondary index. */
	export interface AutoScalingSettingsUpdate {
		MinimumUnits?: number;
		MaximumUnits?: number;
		AutoScalingDisabled?: boolean;
		AutoScalingRoleArn?: string;

		/** Represents the auto scaling policy to be modified. */
		ScalingPolicyUpdate?: AutoScalingPolicyUpdate;
	}


	/** Represents the auto scaling policy to be modified. */
	export interface AutoScalingPolicyUpdate {
		PolicyName?: string;

		/**
		 * Represents the settings of a target tracking scaling policy that will be modified.
		 * Required
		 */
		TargetTrackingScalingPolicyConfiguration: AutoScalingTargetTrackingScalingPolicyConfigurationUpdate;
	}


	/** Represents the settings of a target tracking scaling policy that will be modified. */
	export interface AutoScalingTargetTrackingScalingPolicyConfigurationUpdate {
		DisableScaleIn?: boolean;
		ScaleInCooldown?: number;
		ScaleOutCooldown?: number;
		TargetValue: number;
	}


	/** Represents the settings of a global secondary index for a global table that will be modified. */
	export interface GlobalTableGlobalSecondaryIndexSettingsUpdate {
		IndexName: string;
		ProvisionedWriteCapacityUnits?: number;

		/** Represents the auto scaling settings to be modified for a global table or global secondary index. */
		ProvisionedWriteCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
	}


	/** Represents the settings for a global table in a Region that will be modified. */
	export interface ReplicaSettingsUpdate {
		RegionName: string;
		ReplicaProvisionedReadCapacityUnits?: number;

		/** Represents the auto scaling settings to be modified for a global table or global secondary index. */
		ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
		ReplicaGlobalSecondaryIndexSettingsUpdate?: Array<ReplicaGlobalSecondaryIndexSettingsUpdate>;
	}


	/** Represents the settings of a global secondary index for a global table that will be modified. */
	export interface ReplicaGlobalSecondaryIndexSettingsUpdate {
		IndexName: string;
		ProvisionedReadCapacityUnits?: number;

		/** Represents the auto scaling settings to be modified for a global table or global secondary index. */
		ProvisionedReadCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
	}

	export interface IndexNotFoundException {
	}


	/** Represents the output of an <code>UpdateItem</code> operation. */
	export interface UpdateItemOutput {
		Attributes?: AttributeMap;

		/** The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>. */
		ConsumedCapacity?: ConsumedCapacity;

		/** Information about item collections, if any, that were affected by the operation. <code>ItemCollectionMetrics</code> is only returned if the request asked for it. If the table does not have any local secondary indexes, this information is not returned in the response. */
		ItemCollectionMetrics?: ItemCollectionMetrics;
	}


	/** Represents the input of an <code>UpdateItem</code> operation. */
	export interface UpdateItemInput {
		TableName: string;
		Key: Key;
		AttributeUpdates?: AttributeUpdates;
		Expected?: ExpectedAttributeMap;
		ConditionalOperator?: DeleteItemInputConditionalOperator;
		ReturnValues?: DeleteItemInputReturnValues;

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchGetItemInputReturnConsumedCapacity;
		ReturnItemCollectionMetrics?: BatchWriteItemInputReturnItemCollectionMetrics;
		UpdateExpression?: string;
		ConditionExpression?: string;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
	}

	export interface AttributeUpdates {
	}


	/** Represents the output of an <code>UpdateTable</code> operation. */
	export interface UpdateTableOutput {

		/** Represents the properties of a table. */
		TableDescription?: TableDescription;
	}


	/** Represents the input of an <code>UpdateTable</code> operation. */
	export interface UpdateTableInput {
		AttributeDefinitions?: Array<AttributeDefinition>;
		TableName: string;
		BillingMode?: BillingModeSummaryBillingMode;

		/** <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
		ProvisionedThroughput?: ProvisionedThroughput;
		GlobalSecondaryIndexUpdates?: Array<GlobalSecondaryIndexUpdate>;

		/** Represents the DynamoDB Streams configuration for a table in DynamoDB. */
		StreamSpecification?: StreamSpecification;

		/** Represents the settings used to enable server-side encryption. */
		SSESpecification?: SSESpecification;
		ReplicaUpdates?: Array<ReplicationGroupUpdate>;
	}


	/** <p>Represents one of the following:</p> <ul> <li> <p>A new global secondary index to be added to an existing table.</p> </li> <li> <p>New provisioned throughput parameters for an existing global secondary index.</p> </li> <li> <p>An existing global secondary index to be removed from an existing table.</p> </li> </ul> */
	export interface GlobalSecondaryIndexUpdate {

		/** Represents the new provisioned throughput settings to be applied to a global secondary index. */
		Update?: UpdateGlobalSecondaryIndexAction;

		/** Represents a new global secondary index to be added to an existing table. */
		Create?: CreateGlobalSecondaryIndexAction;

		/** Represents a global secondary index to be deleted from an existing table. */
		Delete?: DeleteGlobalSecondaryIndexAction;
	}


	/** Represents the new provisioned throughput settings to be applied to a global secondary index. */
	export interface UpdateGlobalSecondaryIndexAction {
		IndexName: string;

		/**
		 * <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
		 * Required
		 */
		ProvisionedThroughput: ProvisionedThroughput;
	}


	/** Represents a new global secondary index to be added to an existing table. */
	export interface CreateGlobalSecondaryIndexAction {
		IndexName: string;
		KeySchema: Array<KeySchemaElement>;

		/**
		 * Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
		 * Required
		 */
		Projection: Projection;

		/** <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
		ProvisionedThroughput?: ProvisionedThroughput;
	}


	/** Represents a global secondary index to be deleted from an existing table. */
	export interface DeleteGlobalSecondaryIndexAction {
		IndexName: string;
	}


	/** <p>Represents one of the following:</p> <ul> <li> <p>A new replica to be added to an existing regional table or global table. This request invokes the <code>CreateTableReplica</code> action in the destination Region.</p> </li> <li> <p>New parameters for an existing replica. This request invokes the <code>UpdateTable</code> action in the destination Region.</p> </li> <li> <p>An existing replica to be deleted. The request invokes the <code>DeleteTableReplica</code> action in the destination Region, deleting the replica and all if its items in the destination Region.</p> </li> </ul> */
	export interface ReplicationGroupUpdate {

		/** Represents a replica to be created. */
		Create?: CreateReplicationGroupMemberAction;

		/** Represents a replica to be modified. */
		Update?: UpdateReplicationGroupMemberAction;

		/** Represents a replica to be deleted. */
		Delete?: DeleteReplicationGroupMemberAction;
	}


	/** Represents a replica to be created. */
	export interface CreateReplicationGroupMemberAction {
		RegionName: string;
		KMSMasterKeyId?: string;

		/** Replica-specific provisioned throughput settings. If not specified, uses the source table's provisioned throughput settings. */
		ProvisionedThroughputOverride?: ProvisionedThroughputOverride;
		GlobalSecondaryIndexes?: Array<ReplicaGlobalSecondaryIndex>;
	}


	/** Represents the properties of a replica global secondary index. */
	export interface ReplicaGlobalSecondaryIndex {
		IndexName: string;

		/** Replica-specific provisioned throughput settings. If not specified, uses the source table's provisioned throughput settings. */
		ProvisionedThroughputOverride?: ProvisionedThroughputOverride;
	}


	/** Represents a replica to be modified. */
	export interface UpdateReplicationGroupMemberAction {
		RegionName: string;
		KMSMasterKeyId?: string;

		/** Replica-specific provisioned throughput settings. If not specified, uses the source table's provisioned throughput settings. */
		ProvisionedThroughputOverride?: ProvisionedThroughputOverride;
		GlobalSecondaryIndexes?: Array<ReplicaGlobalSecondaryIndex>;
	}


	/** Represents a replica to be deleted. */
	export interface DeleteReplicationGroupMemberAction {
		RegionName: string;
	}

	export interface UpdateTableReplicaAutoScalingOutput {

		/** Represents the auto scaling configuration for a global table. */
		TableAutoScalingDescription?: TableAutoScalingDescription;
	}

	export interface UpdateTableReplicaAutoScalingInput {
		GlobalSecondaryIndexUpdates?: Array<GlobalSecondaryIndexAutoScalingUpdate>;
		TableName: string;

		/** Represents the auto scaling settings to be modified for a global table or global secondary index. */
		ProvisionedWriteCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
		ReplicaUpdates?: Array<ReplicaAutoScalingUpdate>;
	}


	/** Represents the auto scaling settings of a global secondary index for a global table that will be modified. */
	export interface GlobalSecondaryIndexAutoScalingUpdate {
		IndexName?: string;

		/** Represents the auto scaling settings to be modified for a global table or global secondary index. */
		ProvisionedWriteCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
	}


	/** Represents the auto scaling settings of a replica that will be modified. */
	export interface ReplicaAutoScalingUpdate {
		RegionName: string;
		ReplicaGlobalSecondaryIndexUpdates?: Array<ReplicaGlobalSecondaryIndexAutoScalingUpdate>;

		/** Represents the auto scaling settings to be modified for a global table or global secondary index. */
		ReplicaProvisionedReadCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
	}


	/** Represents the auto scaling settings of a global secondary index for a replica that will be modified. */
	export interface ReplicaGlobalSecondaryIndexAutoScalingUpdate {
		IndexName?: string;

		/** Represents the auto scaling settings to be modified for a global table or global secondary index. */
		ProvisionedReadCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
	}

	export interface UpdateTimeToLiveOutput {

		/** Represents the settings used to enable or disable Time to Live (TTL) for the specified table. */
		TimeToLiveSpecification?: TimeToLiveSpecification;
	}


	/** Represents the settings used to enable or disable Time to Live (TTL) for the specified table. */
	export interface TimeToLiveSpecification {
		Enabled: boolean;
		AttributeName: string;
	}


	/** Represents the input of an <code>UpdateTimeToLive</code> operation. */
	export interface UpdateTimeToLiveInput {
		TableName: string;

		/**
		 * Represents the settings used to enable or disable Time to Live (TTL) for the specified table.
		 * Required
		 */
		TimeToLiveSpecification: TimeToLiveSpecification;
	}

	export enum AttributeAction { ADD = 0, PUT = 1, DELETE = 2 }

	export enum ScalarAttributeType { S = 0, N = 1, B = 2 }


	/** <p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
	export interface AttributeValue {
		S?: string;
		N?: string;
		B?: string;
		SS?: Array<string>;
		NS?: Array<string>;
		BS?: Array<string>;
		M?: MapAttributeValue;
		L?: Array<AttributeValue>;
		NULL?: boolean;
		BOOL?: boolean;
	}

	export interface MapAttributeValue {
	}


	/** <p>For the <code>UpdateItem</code> operation, represents the attributes to be modified, the action to perform on each, and the new value for each.</p> <note> <p>You cannot use <code>UpdateItem</code> to update any primary key attributes. Instead, you will need to delete the item, and then use <code>PutItem</code> to create a new item with new attributes.</p> </note> <p>Attribute values cannot be null; string and binary type attributes must have lengths greater than zero; and set type attributes must not be empty. Requests with empty values will be rejected with a <code>ValidationException</code> exception.</p> */
	export interface AttributeValueUpdate {

		/** <p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
		Value?: AttributeValue;
		Action?: AttributeAction;
	}

	export enum BackupStatus { CREATING = 0, DELETED = 1, AVAILABLE = 2 }

	export enum BackupType { USER = 0, SYSTEM = 1, AWS_BACKUP = 2 }

	export enum BackupTypeFilter { USER = 0, SYSTEM = 1, AWS_BACKUP = 2, ALL = 3 }


	/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
	export enum ReturnConsumedCapacity { INDEXES = 0, TOTAL = 1, NONE = 2 }


	/** <p>Represents a set of primary keys and, for each key, the attributes to retrieve from the table.</p> <p>For each primary key, you must provide <i>all</i> of the key attributes. For example, with a simple primary key, you only need to provide the partition key. For a composite primary key, you must provide <i>both</i> the partition key and the sort key.</p> */
	export interface KeysAndAttributes {
		Keys: Array<Key>;
		AttributesToGet?: Array<string>;
		ConsistentRead?: boolean;
		ProjectionExpression?: string;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
	}

	export enum ReturnItemCollectionMetrics { SIZE = 0, NONE = 1 }


	/** Represents an operation to perform - either <code>DeleteItem</code> or <code>PutItem</code>. You can only request one of these operations, not both, in a single <code>WriteRequest</code>. If you do need to perform both of these operations, you need to provide two separate <code>WriteRequest</code> objects. */
	export interface WriteRequest {

		/** Represents a request to perform a <code>PutItem</code> operation on an item. */
		PutRequest?: PutRequest;

		/** Represents a request to perform a <code>DeleteItem</code> operation on an item. */
		DeleteRequest?: DeleteRequest;
	}


	/** Represents a request to perform a <code>PutItem</code> operation on an item. */
	export interface PutRequest {
		Item: PutItemInputAttributeMap;
	}


	/** Represents a request to perform a <code>DeleteItem</code> operation on an item. */
	export interface DeleteRequest {
		Key: Key;
	}

	export enum BillingMode { PROVISIONED = 0, PAY_PER_REQUEST = 1 }

	export enum ComparisonOperator { EQ = 0, NE = 1, IN = 2, LE = 3, LT = 4, GE = 5, GT = 6, BETWEEN = 7, NOT_NULL = 8, NULL = 9, CONTAINS = 10, NOT_CONTAINS = 11, BEGINS_WITH = 12 }


	/** <p>Represents the selection criteria for a <code>Query</code> or <code>Scan</code> operation:</p> <ul> <li> <p>For a <code>Query</code> operation, <code>Condition</code> is used for specifying the <code>KeyConditions</code> to use when querying a table or an index. For <code>KeyConditions</code>, only the following comparison operators are supported:</p> <p> <code>EQ | LE | LT | GE | GT | BEGINS_WITH | BETWEEN</code> </p> <p> <code>Condition</code> is also used in a <code>QueryFilter</code>, which evaluates the query results and returns only the desired values.</p> </li> <li> <p>For a <code>Scan</code> operation, <code>Condition</code> is used in a <code>ScanFilter</code>, which evaluates the scan results and returns only the desired values.</p> </li> </ul> */
	export interface Condition {
		AttributeValueList?: Array<AttributeValue>;
		ComparisonOperator: ComparisonOperator;
	}

	export enum ReturnValuesOnConditionCheckFailure { ALL_OLD = 0, NONE = 1 }

	export enum ConditionalOperator { AND = 0, OR = 1 }

	export enum ContinuousBackupsStatus { ENABLED = 0, DISABLED = 1 }

	export enum ContributorInsightsAction { ENABLE = 0, DISABLE = 1 }

	export enum ContributorInsightsStatus { ENABLING = 0, ENABLED = 1, DISABLING = 2, DISABLED = 3, FAILED = 4 }

	export enum ReturnValue { NONE = 0, ALL_OLD = 1, UPDATED_OLD = 2, ALL_NEW = 3, UPDATED_NEW = 4 }


	/** <p>Represents a condition to be compared with an attribute value. This condition can be used with <code>DeleteItem</code>, <code>PutItem</code>, or <code>UpdateItem</code> operations; if the comparison evaluates to true, the operation succeeds; if not, the operation fails. You can use <code>ExpectedAttributeValue</code> in one of two different ways:</p> <ul> <li> <p>Use <code>AttributeValueList</code> to specify one or more values to compare against an attribute. Use <code>ComparisonOperator</code> to specify how you want to perform the comparison. If the comparison evaluates to true, then the conditional operation succeeds.</p> </li> <li> <p>Use <code>Value</code> to specify a value that DynamoDB will compare against an attribute. If the values match, then <code>ExpectedAttributeValue</code> evaluates to true and the conditional operation succeeds. Optionally, you can also set <code>Exists</code> to false, indicating that you <i>do not</i> expect to find the attribute value in the table. In this case, the conditional operation succeeds only if the comparison evaluates to false.</p> </li> </ul> <p> <code>Value</code> and <code>Exists</code> are incompatible with <code>AttributeValueList</code> and <code>ComparisonOperator</code>. Note that if you use both sets of parameters at once, DynamoDB will return a <code>ValidationException</code> exception.</p> */
	export interface ExpectedAttributeValue {

		/** <p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
		Value?: AttributeValue;
		Exists?: boolean;
		ComparisonOperator?: ComparisonOperator;
		AttributeValueList?: Array<AttributeValue>;
	}

	export enum IndexStatus { CREATING = 0, UPDATING = 1, DELETING = 2, ACTIVE = 3 }

	export enum GlobalTableStatus { CREATING = 0, ACTIVE = 1, DELETING = 2, UPDATING = 3 }

	export enum KeyType { HASH = 0, RANGE = 1 }

	export enum PointInTimeRecoveryStatus { ENABLED = 0, DISABLED = 1 }

	export enum ProjectionType { ALL = 0, KEYS_ONLY = 1, INCLUDE = 2 }

	export enum Select { ALL_ATTRIBUTES = 0, ALL_PROJECTED_ATTRIBUTES = 1, SPECIFIC_ATTRIBUTES = 2, COUNT = 3 }

	export enum ReplicaStatus { CREATING = 0, CREATION_FAILED = 1, UPDATING = 2, DELETING = 3, ACTIVE = 4 }

	export enum SSEStatus { ENABLING = 0, ENABLED = 1, DISABLING = 2, DISABLED = 3, UPDATING = 4 }

	export enum SSEType { AES256 = 0, KMS = 1 }

	export enum StreamViewType { NEW_IMAGE = 0, OLD_IMAGE = 1, NEW_AND_OLD_IMAGES = 2, KEYS_ONLY = 3 }

	export enum TableStatus { CREATING = 0, UPDATING = 1, DELETING = 2, ACTIVE = 3, INACCESSIBLE_ENCRYPTION_CREDENTIALS = 4, ARCHIVING = 5, ARCHIVED = 6 }

	export enum TimeToLiveStatus { ENABLING = 0, DISABLING = 1, ENABLED = 2, DISABLED = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>The <code>BatchGetItem</code> operation returns the attributes of one or more items from one or more tables. You identify requested items by primary key.</p> <p>A single operation can retrieve up to 16 MB of data, which can contain as many as 100 items. <code>BatchGetItem</code> returns a partial result if the response size limit is exceeded, the table's provisioned throughput is exceeded, or an internal processing failure occurs. If a partial result is returned, the operation returns a value for <code>UnprocessedKeys</code>. You can use this value to retry the operation starting with the next item to get.</p> <important> <p>If you request more than 100 items, <code>BatchGetItem</code> returns a <code>ValidationException</code> with the message "Too many items requested for the BatchGetItem call."</p> </important> <p>For example, if you ask to retrieve 100 items, but each individual item is 300 KB in size, the system returns 52 items (so as not to exceed the 16 MB limit). It also returns an appropriate <code>UnprocessedKeys</code> value so you can get the next page of results. If desired, your application can include its own logic to assemble the pages of results into one dataset.</p> <p>If <i>none</i> of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then <code>BatchGetItem</code> returns a <code>ProvisionedThroughputExceededException</code>. If <i>at least one</i> of the items is successfully processed, then <code>BatchGetItem</code> completes successfully, while returning the keys of the unread items in <code>UnprocessedKeys</code>.</p> <important> <p>If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, <i>we strongly recommend that you use an exponential backoff algorithm</i>. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#BatchOperations">Batch Operations and Error Handling</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> </important> <p>By default, <code>BatchGetItem</code> performs eventually consistent reads on every table in the request. If you want strongly consistent reads instead, you can set <code>ConsistentRead</code> to <code>true</code> for any or all tables.</p> <p>In order to minimize response latency, <code>BatchGetItem</code> retrieves items in parallel.</p> <p>When designing your application, keep in mind that DynamoDB does not return items in any particular order. To help parse the response by item, include the primary key values for the items in your request in the <code>ProjectionExpression</code> parameter.</p> <p>If a requested item does not exist, it is not returned in the result. Requests for nonexistent items consume the minimum read capacity units according to the type of read. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#CapacityUnitCalculations">Working with Tables</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
		 * Post #X-Amz-Target=DynamoDB_20120810.BatchGetItem
		 * @param {string} RequestItems Pagination token
		 * @return {BatchGetItemOutput} Success
		 */
		BatchGetItem(RequestItems: string, requestBody: BatchGetItemInput): Observable<BatchGetItemOutput> {
			return this.http.post<BatchGetItemOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.BatchGetItem?RequestItems=' + (RequestItems == null ? '' : encodeURIComponent(RequestItems)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>The <code>BatchWriteItem</code> operation puts or deletes multiple items in one or more tables. A single call to <code>BatchWriteItem</code> can write up to 16 MB of data, which can comprise as many as 25 put or delete requests. Individual items to be written can be as large as 400 KB.</p> <note> <p> <code>BatchWriteItem</code> cannot update items. To update items, use the <code>UpdateItem</code> action.</p> </note> <p>The individual <code>PutItem</code> and <code>DeleteItem</code> operations specified in <code>BatchWriteItem</code> are atomic; however <code>BatchWriteItem</code> as a whole is not. If any requested operations fail because the table's provisioned throughput is exceeded or an internal processing failure occurs, the failed operations are returned in the <code>UnprocessedItems</code> response parameter. You can investigate and optionally resend the requests. Typically, you would call <code>BatchWriteItem</code> in a loop. Each iteration would check for unprocessed items and submit a new <code>BatchWriteItem</code> request with those unprocessed items until all items have been processed.</p> <p>If <i>none</i> of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then <code>BatchWriteItem</code> returns a <code>ProvisionedThroughputExceededException</code>.</p> <important> <p>If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, <i>we strongly recommend that you use an exponential backoff algorithm</i>. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#Programming.Errors.BatchOperations">Batch Operations and Error Handling</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> </important> <p>With <code>BatchWriteItem</code>, you can efficiently write or delete large amounts of data, such as from Amazon EMR, or copy data from another database into DynamoDB. In order to improve performance with these large-scale operations, <code>BatchWriteItem</code> does not behave in the same way as individual <code>PutItem</code> and <code>DeleteItem</code> calls would. For example, you cannot specify conditions on individual put and delete requests, and <code>BatchWriteItem</code> does not return deleted items in the response.</p> <p>If you use a programming language that supports concurrency, you can use threads to write items in parallel. Your application must include the necessary logic to manage the threads. With languages that don't support threading, you must update or delete the specified items one at a time. In both situations, <code>BatchWriteItem</code> performs the specified put and delete operations in parallel, giving you the power of the thread pool approach without having to introduce complexity into your application.</p> <p>Parallel processing reduces latency, but each specified put and delete request consumes the same number of write capacity units whether it is processed in parallel or not. Delete operations on nonexistent items consume one write capacity unit.</p> <p>If one or more of the following is true, DynamoDB rejects the entire batch write operation:</p> <ul> <li> <p>One or more tables specified in the <code>BatchWriteItem</code> request does not exist.</p> </li> <li> <p>Primary key attributes specified on an item in the request do not match those in the corresponding table's primary key schema.</p> </li> <li> <p>You try to perform multiple operations on the same item in the same <code>BatchWriteItem</code> request. For example, you cannot put and delete the same item in the same <code>BatchWriteItem</code> request. </p> </li> <li> <p> Your request contains at least two items with identical hash and range keys (which essentially is two put operations). </p> </li> <li> <p>There are more than 25 requests in the batch.</p> </li> <li> <p>Any individual item in a batch exceeds 400 KB.</p> </li> <li> <p>The total request size exceeds 16 MB.</p> </li> </ul>
		 * Post #X-Amz-Target=DynamoDB_20120810.BatchWriteItem
		 * @return {BatchWriteItemOutput} Success
		 */
		BatchWriteItem(requestBody: BatchWriteItemInput): Observable<BatchWriteItemOutput> {
			return this.http.post<BatchWriteItemOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.BatchWriteItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a backup for an existing table.</p> <p> Each time you create an on-demand backup, the entire table data is backed up. There is no limit to the number of on-demand backups that can be taken. </p> <p> When you create an on-demand backup, a time marker of the request is cataloged, and the backup is created asynchronously, by applying all changes until the time of the request to the last full table snapshot. Backup requests are processed instantaneously and become available for restore within minutes. </p> <p>You can call <code>CreateBackup</code> at a maximum rate of 50 times per second.</p> <p>All backups in DynamoDB work without consuming any provisioned throughput on the table.</p> <p> If you submit a backup request on 2018-12-14 at 14:25:00, the backup is guaranteed to contain all data committed to the table up to 14:24:00, and data committed after 14:26:00 will not be. The backup might contain data modifications made between 14:24:00 and 14:26:00. On-demand backup does not support causal consistency. </p> <p> Along with data, the following are also included on the backups: </p> <ul> <li> <p>Global secondary indexes (GSIs)</p> </li> <li> <p>Local secondary indexes (LSIs)</p> </li> <li> <p>Streams</p> </li> <li> <p>Provisioned read and write capacity</p> </li> </ul>
		 * Post #X-Amz-Target=DynamoDB_20120810.CreateBackup
		 * @return {CreateBackupOutput} Success
		 */
		CreateBackup(requestBody: CreateBackupInput): Observable<CreateBackupOutput> {
			return this.http.post<CreateBackupOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.CreateBackup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a global table from an existing table. A global table creates a replication relationship between two or more DynamoDB tables with the same table name in the provided Regions. </p> <note> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29</a> of global tables.</p> </note> <p>If you want to add a new replica table to a global table, each of the following conditions must be true:</p> <ul> <li> <p>The table must have the same primary key as all of the other replicas.</p> </li> <li> <p>The table must have the same name as all of the other replicas.</p> </li> <li> <p>The table must have DynamoDB Streams enabled, with the stream containing both the new and the old images of the item.</p> </li> <li> <p>None of the replica tables in the global table can contain any data.</p> </li> </ul> <p> If global secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The global secondary indexes must have the same name. </p> </li> <li> <p> The global secondary indexes must have the same hash key and sort key (if present). </p> </li> </ul> <p> If local secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The local secondary indexes must have the same name. </p> </li> <li> <p> The local secondary indexes must have the same hash key and sort key (if present). </p> </li> </ul> <important> <p> Write capacity settings should be set consistently across your replica tables and secondary indexes. DynamoDB strongly recommends enabling auto scaling to manage the write capacity settings for all of your global tables replicas and indexes. </p> <p> If you prefer to manage write capacity settings manually, you should provision equal replicated write capacity units to your replica tables. You should also provision equal replicated write capacity units to matching secondary indexes across your global table. </p> </important>
		 * Post #X-Amz-Target=DynamoDB_20120810.CreateGlobalTable
		 * @return {CreateGlobalTableOutput} Success
		 */
		CreateGlobalTable(requestBody: CreateGlobalTableInput): Observable<CreateGlobalTableOutput> {
			return this.http.post<CreateGlobalTableOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.CreateGlobalTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>The <code>CreateTable</code> operation adds a new table to your account. In an AWS account, table names must be unique within each Region. That is, you can have two tables with same name if you create the tables in different Regions.</p> <p> <code>CreateTable</code> is an asynchronous operation. Upon receiving a <code>CreateTable</code> request, DynamoDB immediately returns a response with a <code>TableStatus</code> of <code>CREATING</code>. After the table is created, DynamoDB sets the <code>TableStatus</code> to <code>ACTIVE</code>. You can perform read and write operations only on an <code>ACTIVE</code> table. </p> <p>You can optionally define secondary indexes on the new table, as part of the <code>CreateTable</code> operation. If you want to create multiple tables with secondary indexes on them, you must create the tables sequentially. Only one table with secondary indexes can be in the <code>CREATING</code> state at any given time.</p> <p>You can use the <code>DescribeTable</code> action to check the table status.</p>
		 * Post #X-Amz-Target=DynamoDB_20120810.CreateTable
		 * @return {CreateTableOutput} Success
		 */
		CreateTable(requestBody: CreateTableInput): Observable<CreateTableOutput> {
			return this.http.post<CreateTableOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.CreateTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an existing backup of a table.</p> <p>You can call <code>DeleteBackup</code> at a maximum rate of 10 times per second.</p>
		 * Post #X-Amz-Target=DynamoDB_20120810.DeleteBackup
		 * @return {DeleteBackupOutput} Success
		 */
		DeleteBackup(requestBody: DeleteBackupInput): Observable<DeleteBackupOutput> {
			return this.http.post<DeleteBackupOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.DeleteBackup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a single item in a table by primary key. You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p> <p>In addition to deleting an item, you can also return the item's attribute values in the same operation, using the <code>ReturnValues</code> parameter.</p> <p>Unless you specify conditions, the <code>DeleteItem</code> is an idempotent operation; running it multiple times on the same item or attribute does <i>not</i> result in an error response.</p> <p>Conditional deletes are useful for deleting items only if specific conditions are met. If those conditions are met, DynamoDB performs the delete. Otherwise, the item is not deleted.</p>
		 * Post #X-Amz-Target=DynamoDB_20120810.DeleteItem
		 * @return {DeleteItemOutput} Success
		 */
		DeleteItem(requestBody: DeleteItemInput): Observable<DeleteItemOutput> {
			return this.http.post<DeleteItemOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.DeleteItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>The <code>DeleteTable</code> operation deletes a table and all of its items. After a <code>DeleteTable</code> request, the specified table is in the <code>DELETING</code> state until DynamoDB completes the deletion. If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states, then DynamoDB returns a <code>ResourceInUseException</code>. If the specified table does not exist, DynamoDB returns a <code>ResourceNotFoundException</code>. If table is already in the <code>DELETING</code> state, no error is returned. </p> <note> <p>DynamoDB might continue to accept data read and write operations, such as <code>GetItem</code> and <code>PutItem</code>, on a table in the <code>DELETING</code> state until the table deletion is complete.</p> </note> <p>When you delete a table, any indexes on that table are also deleted.</p> <p>If you have DynamoDB Streams enabled on the table, then the corresponding stream on that table goes into the <code>DISABLED</code> state, and the stream is automatically deleted after 24 hours.</p> <p>Use the <code>DescribeTable</code> action to check the status of the table. </p>
		 * Post #X-Amz-Target=DynamoDB_20120810.DeleteTable
		 * @return {DeleteTableOutput} Success
		 */
		DeleteTable(requestBody: DeleteTableInput): Observable<DeleteTableOutput> {
			return this.http.post<DeleteTableOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.DeleteTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes an existing backup of a table.</p> <p>You can call <code>DescribeBackup</code> at a maximum rate of 10 times per second.</p>
		 * Post #X-Amz-Target=DynamoDB_20120810.DescribeBackup
		 * @return {DescribeBackupOutput} Success
		 */
		DescribeBackup(requestBody: DescribeBackupInput): Observable<DescribeBackupOutput> {
			return this.http.post<DescribeBackupOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.DescribeBackup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Checks the status of continuous backups and point in time recovery on the specified table. Continuous backups are <code>ENABLED</code> on all tables at table creation. If point in time recovery is enabled, <code>PointInTimeRecoveryStatus</code> will be set to ENABLED.</p> <p> After continuous backups and point in time recovery are enabled, you can restore to any point in time within <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>. </p> <p> <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time. You can restore your table to any point in time during the last 35 days. </p> <p>You can call <code>DescribeContinuousBackups</code> at a maximum rate of 10 times per second.</p>
		 * Post #X-Amz-Target=DynamoDB_20120810.DescribeContinuousBackups
		 * @return {DescribeContinuousBackupsOutput} Success
		 */
		DescribeContinuousBackups(requestBody: DescribeContinuousBackupsInput): Observable<DescribeContinuousBackupsOutput> {
			return this.http.post<DescribeContinuousBackupsOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.DescribeContinuousBackups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about contributor insights, for a given table or global secondary index.
		 * Post #X-Amz-Target=DynamoDB_20120810.DescribeContributorInsights
		 * @return {DescribeContributorInsightsOutput} Success
		 */
		DescribeContributorInsights(requestBody: DescribeContributorInsightsInput): Observable<DescribeContributorInsightsOutput> {
			return this.http.post<DescribeContributorInsightsOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.DescribeContributorInsights', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the regional endpoint information.
		 * Post #X-Amz-Target=DynamoDB_20120810.DescribeEndpoints
		 * @return {DescribeEndpointsResponse} Success
		 */
		DescribeEndpoints(requestBody: DescribeEndpointsRequest): Observable<DescribeEndpointsResponse> {
			return this.http.post<DescribeEndpointsResponse>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.DescribeEndpoints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the specified global table.</p> <note> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29</a> of global tables. If you are using global tables <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21</a> you can use <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html">DescribeTable</a> instead.</p> </note>
		 * Post #X-Amz-Target=DynamoDB_20120810.DescribeGlobalTable
		 * @return {DescribeGlobalTableOutput} Success
		 */
		DescribeGlobalTable(requestBody: DescribeGlobalTableInput): Observable<DescribeGlobalTableOutput> {
			return this.http.post<DescribeGlobalTableOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes Region-specific settings for a global table.</p> <note> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29</a> of global tables.</p> </note>
		 * Post #X-Amz-Target=DynamoDB_20120810.DescribeGlobalTableSettings
		 * @return {DescribeGlobalTableSettingsOutput} Success
		 */
		DescribeGlobalTableSettings(requestBody: DescribeGlobalTableSettingsInput): Observable<DescribeGlobalTableSettingsOutput> {
			return this.http.post<DescribeGlobalTableSettingsOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTableSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the current provisioned-capacity limits for your AWS account in a Region, both for the Region as a whole and for any one DynamoDB table that you create there.</p> <p>When you establish an AWS account, the account has initial limits on the maximum read capacity units and write capacity units that you can provision across all of your DynamoDB tables in a given Region. Also, there are per-table limits that apply when you create a table there. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> page in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p>Although you can increase these limits by filing a case at <a href="https://console.aws.amazon.com/support/home#/">AWS Support Center</a>, obtaining the increase is not instantaneous. The <code>DescribeLimits</code> action lets you write code to compare the capacity you are currently using to those limits imposed by your account so that you have enough time to apply for an increase before you hit a limit.</p> <p>For example, you could use one of the AWS SDKs to do the following:</p> <ol> <li> <p>Call <code>DescribeLimits</code> for a particular Region to obtain your current account limits on provisioned capacity there.</p> </li> <li> <p>Create a variable to hold the aggregate read capacity units provisioned for all your tables in that Region, and one to hold the aggregate write capacity units. Zero them both.</p> </li> <li> <p>Call <code>ListTables</code> to obtain a list of all your DynamoDB tables.</p> </li> <li> <p>For each table name listed by <code>ListTables</code>, do the following:</p> <ul> <li> <p>Call <code>DescribeTable</code> with the table name.</p> </li> <li> <p>Use the data returned by <code>DescribeTable</code> to add the read capacity units and write capacity units provisioned for the table itself to your variables.</p> </li> <li> <p>If the table has one or more global secondary indexes (GSIs), loop over these GSIs and add their provisioned capacity values to your variables as well.</p> </li> </ul> </li> <li> <p>Report the account limits for that Region returned by <code>DescribeLimits</code>, along with the total current provisioned capacity levels you have calculated.</p> </li> </ol> <p>This will let you see whether you are getting close to your account-level limits.</p> <p>The per-table limits apply only when you are creating a new table. They restrict the sum of the provisioned capacity of the new table itself and all its global secondary indexes.</p> <p>For existing tables and their GSIs, DynamoDB doesn't let you increase provisioned capacity extremely rapidly. But the only upper limit that applies is that the aggregate provisioned capacity over all your tables and GSIs cannot exceed either of the per-account limits.</p> <note> <p> <code>DescribeLimits</code> should only be called periodically. You can expect throttling errors if you call it more than once in a minute.</p> </note> <p>The <code>DescribeLimits</code> Request element has no content.</p>
		 * Post #X-Amz-Target=DynamoDB_20120810.DescribeLimits
		 * @return {DescribeLimitsOutput} Success
		 */
		DescribeLimits(requestBody: DescribeLimitsInput): Observable<DescribeLimitsOutput> {
			return this.http.post<DescribeLimitsOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.DescribeLimits', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the table, including the current status of the table, when it was created, the primary key schema, and any indexes on the table.</p> <note> <p>If you issue a <code>DescribeTable</code> request immediately after a <code>CreateTable</code> request, DynamoDB might return a <code>ResourceNotFoundException</code>. This is because <code>DescribeTable</code> uses an eventually consistent query, and the metadata for your table might not be available at that moment. Wait for a few seconds, and then try the <code>DescribeTable</code> request again.</p> </note>
		 * Post #X-Amz-Target=DynamoDB_20120810.DescribeTable
		 * @return {DescribeTableOutput} Success
		 */
		DescribeTable(requestBody: DescribeTableInput): Observable<DescribeTableOutput> {
			return this.http.post<DescribeTableOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.DescribeTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes auto scaling settings across replicas of the global table at once.</p> <note> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21</a> of global tables.</p> </note>
		 * Post #X-Amz-Target=DynamoDB_20120810.DescribeTableReplicaAutoScaling
		 * @return {DescribeTableReplicaAutoScalingOutput} Success
		 */
		DescribeTableReplicaAutoScaling(requestBody: DescribeTableReplicaAutoScalingInput): Observable<DescribeTableReplicaAutoScalingOutput> {
			return this.http.post<DescribeTableReplicaAutoScalingOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.DescribeTableReplicaAutoScaling', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gives a description of the Time to Live (TTL) status on the specified table.
		 * Post #X-Amz-Target=DynamoDB_20120810.DescribeTimeToLive
		 * @return {DescribeTimeToLiveOutput} Success
		 */
		DescribeTimeToLive(requestBody: DescribeTimeToLiveInput): Observable<DescribeTimeToLiveOutput> {
			return this.http.post<DescribeTimeToLiveOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.DescribeTimeToLive', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>The <code>GetItem</code> operation returns a set of attributes for the item with the given primary key. If there is no matching item, <code>GetItem</code> does not return any data and there will be no <code>Item</code> element in the response.</p> <p> <code>GetItem</code> provides an eventually consistent read by default. If your application requires a strongly consistent read, set <code>ConsistentRead</code> to <code>true</code>. Although a strongly consistent read might take more time than an eventually consistent read, it always returns the last updated value.</p>
		 * Post #X-Amz-Target=DynamoDB_20120810.GetItem
		 * @return {GetItemOutput} Success
		 */
		GetItem(requestBody: GetItemInput): Observable<GetItemOutput> {
			return this.http.post<GetItemOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.GetItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>List backups associated with an AWS account. To list backups for a given table, specify <code>TableName</code>. <code>ListBackups</code> returns a paginated list of results with at most 1 MB worth of items in a page. You can also specify a limit for the maximum number of entries to be returned in a page. </p> <p>In the request, start time is inclusive, but end time is exclusive. Note that these limits are for the time at which the original backup was requested.</p> <p>You can call <code>ListBackups</code> a maximum of five times per second.</p>
		 * Post #X-Amz-Target=DynamoDB_20120810.ListBackups
		 * @return {ListBackupsOutput} Success
		 */
		ListBackups(requestBody: ListBackupsInput): Observable<ListBackupsOutput> {
			return this.http.post<ListBackupsOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.ListBackups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of ContributorInsightsSummary for a table and all its global secondary indexes.
		 * Post #X-Amz-Target=DynamoDB_20120810.ListContributorInsights
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListContributorInsightsOutput} Success
		 */
		ListContributorInsights(MaxResults: string, NextToken: string, requestBody: ListContributorInsightsInput): Observable<ListContributorInsightsOutput> {
			return this.http.post<ListContributorInsightsOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.ListContributorInsights?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists all global tables that have a replica in the specified Region.</p> <note> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29</a> of global tables.</p> </note>
		 * Post #X-Amz-Target=DynamoDB_20120810.ListGlobalTables
		 * @return {ListGlobalTablesOutput} Success
		 */
		ListGlobalTables(requestBody: ListGlobalTablesInput): Observable<ListGlobalTablesOutput> {
			return this.http.post<ListGlobalTablesOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.ListGlobalTables', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of table names associated with the current account and endpoint. The output from <code>ListTables</code> is paginated, with each page returning a maximum of 100 table names.
		 * Post #X-Amz-Target=DynamoDB_20120810.ListTables
		 * @param {string} Limit Pagination limit
		 * @param {string} ExclusiveStartTableName Pagination token
		 * @return {ListTablesOutput} Success
		 */
		ListTables(Limit: string, ExclusiveStartTableName: string, requestBody: ListTablesInput): Observable<ListTablesOutput> {
			return this.http.post<ListTablesOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.ListTables?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&ExclusiveStartTableName=' + (ExclusiveStartTableName == null ? '' : encodeURIComponent(ExclusiveStartTableName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>List all tags on an Amazon DynamoDB resource. You can call ListTagsOfResource up to 10 times per second, per account.</p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
		 * Post #X-Amz-Target=DynamoDB_20120810.ListTagsOfResource
		 * @return {ListTagsOfResourceOutput} Success
		 */
		ListTagsOfResource(requestBody: ListTagsOfResourceInput): Observable<ListTagsOfResourceOutput> {
			return this.http.post<ListTagsOfResourceOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.ListTagsOfResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new item, or replaces an old item with a new item. If an item that has the same primary key as the new item already exists in the specified table, the new item completely replaces the existing item. You can perform a conditional put operation (add a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values. You can return the item's attribute values in the same operation, using the <code>ReturnValues</code> parameter.</p> <important> <p>This topic provides general information about the <code>PutItem</code> API.</p> <p>For information on how to call the <code>PutItem</code> API using the AWS SDK in specific languages, see the following:</p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/goto/aws-cli/dynamodb-2012-08-10/PutItem"> PutItem in the AWS Command Line Interface</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/goto/DotNetSDKV3/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for .NET</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/goto/SdkForCpp/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for C++</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/goto/SdkForGoV1/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for Go</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/goto/SdkForJava/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for Java</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/goto/AWSJavaScriptSDK/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for JavaScript</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/goto/SdkForPHPV3/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for PHP V3</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/goto/boto3/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for Python</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/goto/SdkForRubyV2/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for Ruby V2</a> </p> </li> </ul> </important> <p>When you add an item, the primary key attributes are the only required attributes. Attribute values cannot be null.</p> <p>Empty String and Binary attribute values are allowed. Attribute values of type String and Binary must have a length greater than zero if the attribute is used as a key attribute for a table or index. Set type attributes cannot be empty. </p> <p>Invalid Requests with empty values will be rejected with a <code>ValidationException</code> exception.</p> <note> <p>To prevent a new item from replacing an existing item, use a conditional expression that contains the <code>attribute_not_exists</code> function with the name of the attribute being used as the partition key for the table. Since every record must contain that attribute, the <code>attribute_not_exists</code> function will only succeed if no matching item exists.</p> </note> <p>For more information about <code>PutItem</code>, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html">Working with Items</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
		 * Post #X-Amz-Target=DynamoDB_20120810.PutItem
		 * @return {PutItemOutput} Success
		 */
		PutItem(requestBody: PutItemInput): Observable<PutItemOutput> {
			return this.http.post<PutItemOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.PutItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>The <code>Query</code> operation finds items based on primary key values. You can query any table or secondary index that has a composite primary key (a partition key and a sort key). </p> <p>Use the <code>KeyConditionExpression</code> parameter to provide a specific value for the partition key. The <code>Query</code> operation will return all of the items from the table or index with that partition key value. You can optionally narrow the scope of the <code>Query</code> operation by specifying a sort key value and a comparison operator in <code>KeyConditionExpression</code>. To further refine the <code>Query</code> results, you can optionally provide a <code>FilterExpression</code>. A <code>FilterExpression</code> determines which items within the results should be returned to you. All of the other results are discarded. </p> <p> A <code>Query</code> operation always returns a result set. If no matching items are found, the result set will be empty. Queries that do not return results consume the minimum number of read capacity units for that type of read operation. </p> <note> <p> DynamoDB calculates the number of read capacity units consumed based on item size, not on the amount of data that is returned to an application. The number of capacity units consumed will be the same whether you request all of the attributes (the default behavior) or just some of them (using a projection expression). The number will also be the same whether or not you use a <code>FilterExpression</code>. </p> </note> <p> <code>Query</code> results are always sorted by the sort key value. If the data type of the sort key is Number, the results are returned in numeric order; otherwise, the results are returned in order of UTF-8 bytes. By default, the sort order is ascending. To reverse the order, set the <code>ScanIndexForward</code> parameter to false. </p> <p> A single <code>Query</code> operation will read up to the maximum number of items set (if using the <code>Limit</code> parameter) or a maximum of 1 MB of data and then apply any filtering to the results using <code>FilterExpression</code>. If <code>LastEvaluatedKey</code> is present in the response, you will need to paginate the result set. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.Pagination">Paginating the Results</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p> <p> <code>FilterExpression</code> is applied after a <code>Query</code> finishes, but before the results are returned. A <code>FilterExpression</code> cannot contain partition key or sort key attributes. You need to specify those attributes in the <code>KeyConditionExpression</code>. </p> <note> <p> A <code>Query</code> operation can return an empty result set and a <code>LastEvaluatedKey</code> if all the items read for the page of results are filtered out. </p> </note> <p>You can query a table, a local secondary index, or a global secondary index. For a query on a table or on a local secondary index, you can set the <code>ConsistentRead</code> parameter to <code>true</code> and obtain a strongly consistent result. Global secondary indexes support eventually consistent reads only, so do not specify <code>ConsistentRead</code> when querying a global secondary index.</p>
		 * Post #X-Amz-Target=DynamoDB_20120810.Query
		 * @param {string} Limit Pagination limit
		 * @param {string} ExclusiveStartKey Pagination token
		 * @return {QueryOutput} Success
		 */
		Query(Limit: string, ExclusiveStartKey: string, requestBody: QueryInput): Observable<QueryOutput> {
			return this.http.post<QueryOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.Query?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&ExclusiveStartKey=' + (ExclusiveStartKey == null ? '' : encodeURIComponent(ExclusiveStartKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new table from an existing backup. Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account. </p> <p>You can call <code>RestoreTableFromBackup</code> at a maximum rate of 10 times per second.</p> <p>You must manually set up the following on the restored table:</p> <ul> <li> <p>Auto scaling policies</p> </li> <li> <p>IAM policies</p> </li> <li> <p>Amazon CloudWatch metrics and alarms</p> </li> <li> <p>Tags</p> </li> <li> <p>Stream settings</p> </li> <li> <p>Time to Live (TTL) settings</p> </li> </ul>
		 * Post #X-Amz-Target=DynamoDB_20120810.RestoreTableFromBackup
		 * @return {RestoreTableFromBackupOutput} Success
		 */
		RestoreTableFromBackup(requestBody: RestoreTableFromBackupInput): Observable<RestoreTableFromBackupOutput> {
			return this.http.post<RestoreTableFromBackupOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.RestoreTableFromBackup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Restores the specified table to the specified point in time within <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>. You can restore your table to any point in time during the last 35 days. Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account. </p> <p> When you restore using point in time recovery, DynamoDB restores your table data to the state based on the selected date and time (day:hour:minute:second) to a new table. </p> <p> Along with data, the following are also included on the new restored table using point in time recovery: </p> <ul> <li> <p>Global secondary indexes (GSIs)</p> </li> <li> <p>Local secondary indexes (LSIs)</p> </li> <li> <p>Provisioned read and write capacity</p> </li> <li> <p>Encryption settings</p> <important> <p> All these settings come from the current settings of the source table at the time of restore. </p> </important> </li> </ul> <p>You must manually set up the following on the restored table:</p> <ul> <li> <p>Auto scaling policies</p> </li> <li> <p>IAM policies</p> </li> <li> <p>Amazon CloudWatch metrics and alarms</p> </li> <li> <p>Tags</p> </li> <li> <p>Stream settings</p> </li> <li> <p>Time to Live (TTL) settings</p> </li> <li> <p>Point in time recovery settings</p> </li> </ul>
		 * Post #X-Amz-Target=DynamoDB_20120810.RestoreTableToPointInTime
		 * @return {RestoreTableToPointInTimeOutput} Success
		 */
		RestoreTableToPointInTime(requestBody: RestoreTableToPointInTimeInput): Observable<RestoreTableToPointInTimeOutput> {
			return this.http.post<RestoreTableToPointInTimeOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.RestoreTableToPointInTime', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>The <code>Scan</code> operation returns one or more items and item attributes by accessing every item in a table or a secondary index. To have DynamoDB return fewer items, you can provide a <code>FilterExpression</code> operation.</p> <p>If the total number of scanned items exceeds the maximum dataset size limit of 1 MB, the scan stops and results are returned to the user as a <code>LastEvaluatedKey</code> value to continue the scan in a subsequent operation. The results also include the number of items exceeding the limit. A scan can result in no table data meeting the filter criteria. </p> <p>A single <code>Scan</code> operation reads up to the maximum number of items set (if using the <code>Limit</code> parameter) or a maximum of 1 MB of data and then apply any filtering to the results using <code>FilterExpression</code>. If <code>LastEvaluatedKey</code> is present in the response, you need to paginate the result set. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.Pagination">Paginating the Results</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p> <p> <code>Scan</code> operations proceed sequentially; however, for faster performance on a large table or secondary index, applications can request a parallel <code>Scan</code> operation by providing the <code>Segment</code> and <code>TotalSegments</code> parameters. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.ParallelScan">Parallel Scan</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p> <code>Scan</code> uses eventually consistent reads when accessing the data in a table; therefore, the result set might not include the changes to data in the table immediately before the operation began. If you need a consistent copy of the data, as of the time that the <code>Scan</code> begins, you can set the <code>ConsistentRead</code> parameter to <code>true</code>.</p>
		 * Post #X-Amz-Target=DynamoDB_20120810.Scan
		 * @param {string} Limit Pagination limit
		 * @param {string} ExclusiveStartKey Pagination token
		 * @return {ScanOutput} Success
		 */
		Scan(Limit: string, ExclusiveStartKey: string, requestBody: ScanInput): Observable<ScanOutput> {
			return this.http.post<ScanOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.Scan?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&ExclusiveStartKey=' + (ExclusiveStartKey == null ? '' : encodeURIComponent(ExclusiveStartKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Associate a set of tags with an Amazon DynamoDB resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. You can call TagResource up to five times per second, per account. </p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
		 * Post #X-Amz-Target=DynamoDB_20120810.TagResource
		 * @return {void} Success
		 */
		TagResource(requestBody: TagResourceInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> <code>TransactGetItems</code> is a synchronous operation that atomically retrieves multiple items from one or more tables (but not from indexes) in a single account and Region. A <code>TransactGetItems</code> call can contain up to 25 <code>TransactGetItem</code> objects, each of which contains a <code>Get</code> structure that specifies an item to retrieve from a table in the account and Region. A call to <code>TransactGetItems</code> cannot retrieve items from tables in more than one AWS account or Region. The aggregate size of the items in the transaction cannot exceed 4 MB.</p> <p>DynamoDB rejects the entire <code>TransactGetItems</code> request if any of the following is true:</p> <ul> <li> <p>A conflicting operation is in the process of updating an item to be read.</p> </li> <li> <p>There is insufficient provisioned capacity for the transaction to be completed.</p> </li> <li> <p>There is a user error, such as an invalid data format.</p> </li> <li> <p>The aggregate size of the items in the transaction cannot exceed 4 MB.</p> </li> </ul>
		 * Post #X-Amz-Target=DynamoDB_20120810.TransactGetItems
		 * @return {TransactGetItemsOutput} Success
		 */
		TransactGetItems(requestBody: TransactGetItemsInput): Observable<TransactGetItemsOutput> {
			return this.http.post<TransactGetItemsOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.TransactGetItems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <code>TransactWriteItems</code> is a synchronous write operation that groups up to 25 action requests. These actions can target items in different tables, but not in different AWS accounts or Regions, and no two actions can target the same item. For example, you cannot both <code>ConditionCheck</code> and <code>Update</code> the same item. The aggregate size of the items in the transaction cannot exceed 4 MB.</p> <p>The actions are completed atomically so that either all of them succeed, or all of them fail. They are defined by the following objects:</p> <ul> <li> <p> <code>Put</code>  &#x97;   Initiates a <code>PutItem</code> operation to write a new item. This structure specifies the primary key of the item to be written, the name of the table to write it in, an optional condition expression that must be satisfied for the write to succeed, a list of the item's attributes, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>Update</code>  &#x97;   Initiates an <code>UpdateItem</code> operation to update an existing item. This structure specifies the primary key of the item to be updated, the name of the table where it resides, an optional condition expression that must be satisfied for the update to succeed, an expression that defines one or more attributes to be updated, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>Delete</code>  &#x97;   Initiates a <code>DeleteItem</code> operation to delete an existing item. This structure specifies the primary key of the item to be deleted, the name of the table where it resides, an optional condition expression that must be satisfied for the deletion to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>ConditionCheck</code>  &#x97;   Applies a condition to an item that is not being modified by the transaction. This structure specifies the primary key of the item to be checked, the name of the table where it resides, a condition expression that must be satisfied for the transaction to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> </ul> <p>DynamoDB rejects the entire <code>TransactWriteItems</code> request if any of the following is true:</p> <ul> <li> <p>A condition in one of the condition expressions is not met.</p> </li> <li> <p>An ongoing operation is in the process of updating the same item.</p> </li> <li> <p>There is insufficient provisioned capacity for the transaction to be completed.</p> </li> <li> <p>An item size becomes too large (bigger than 400 KB), a local secondary index (LSI) becomes too large, or a similar validation error occurs because of changes made by the transaction.</p> </li> <li> <p>The aggregate size of the items in the transaction exceeds 4 MB.</p> </li> <li> <p>There is a user error, such as an invalid data format.</p> </li> </ul>
		 * Post #X-Amz-Target=DynamoDB_20120810.TransactWriteItems
		 * @return {TransactWriteItemsOutput} Success
		 */
		TransactWriteItems(requestBody: TransactWriteItemsInput): Observable<TransactWriteItemsOutput> {
			return this.http.post<TransactWriteItemsOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.TransactWriteItems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes the association of tags from an Amazon DynamoDB resource. You can call <code>UntagResource</code> up to five times per second, per account. </p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
		 * Post #X-Amz-Target=DynamoDB_20120810.UntagResource
		 * @return {void} Success
		 */
		UntagResource(requestBody: UntagResourceInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> <code>UpdateContinuousBackups</code> enables or disables point in time recovery for the specified table. A successful <code>UpdateContinuousBackups</code> call returns the current <code>ContinuousBackupsDescription</code>. Continuous backups are <code>ENABLED</code> on all tables at table creation. If point in time recovery is enabled, <code>PointInTimeRecoveryStatus</code> will be set to ENABLED.</p> <p> Once continuous backups and point in time recovery are enabled, you can restore to any point in time within <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>. </p> <p> <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time. You can restore your table to any point in time during the last 35 days. </p>
		 * Post #X-Amz-Target=DynamoDB_20120810.UpdateContinuousBackups
		 * @return {UpdateContinuousBackupsOutput} Success
		 */
		UpdateContinuousBackups(requestBody: UpdateContinuousBackupsInput): Observable<UpdateContinuousBackupsOutput> {
			return this.http.post<UpdateContinuousBackupsOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.UpdateContinuousBackups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the status for contributor insights for a specific table or index.
		 * Post #X-Amz-Target=DynamoDB_20120810.UpdateContributorInsights
		 * @return {UpdateContributorInsightsOutput} Success
		 */
		UpdateContributorInsights(requestBody: UpdateContributorInsightsInput): Observable<UpdateContributorInsightsOutput> {
			return this.http.post<UpdateContributorInsightsOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.UpdateContributorInsights', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds or removes replicas in the specified global table. The global table must already exist to be able to use this operation. Any replica to be added must be empty, have the same name as the global table, have the same key schema, have DynamoDB Streams enabled, and have the same provisioned and maximum write capacity units.</p> <note> <p>Although you can use <code>UpdateGlobalTable</code> to add replicas and remove replicas in a single request, for simplicity we recommend that you issue separate requests for adding or removing replicas.</p> </note> <p> If global secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The global secondary indexes must have the same name. </p> </li> <li> <p> The global secondary indexes must have the same hash key and sort key (if present). </p> </li> <li> <p> The global secondary indexes must have the same provisioned and maximum write capacity units. </p> </li> </ul>
		 * Post #X-Amz-Target=DynamoDB_20120810.UpdateGlobalTable
		 * @return {UpdateGlobalTableOutput} Success
		 */
		UpdateGlobalTable(requestBody: UpdateGlobalTableInput): Observable<UpdateGlobalTableOutput> {
			return this.http.post<UpdateGlobalTableOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates settings for a global table.
		 * Post #X-Amz-Target=DynamoDB_20120810.UpdateGlobalTableSettings
		 * @return {UpdateGlobalTableSettingsOutput} Success
		 */
		UpdateGlobalTableSettings(requestBody: UpdateGlobalTableSettingsInput): Observable<UpdateGlobalTableSettingsOutput> {
			return this.http.post<UpdateGlobalTableSettingsOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTableSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Edits an existing item's attributes, or adds a new item to the table if it does not already exist. You can put, delete, or add attribute values. You can also perform a conditional update on an existing item (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p> <p>You can also return the item's attribute values in the same <code>UpdateItem</code> operation using the <code>ReturnValues</code> parameter.</p>
		 * Post #X-Amz-Target=DynamoDB_20120810.UpdateItem
		 * @return {UpdateItemOutput} Success
		 */
		UpdateItem(requestBody: UpdateItemInput): Observable<UpdateItemOutput> {
			return this.http.post<UpdateItemOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.UpdateItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table.</p> <p>You can only perform one of the following operations at once:</p> <ul> <li> <p>Modify the provisioned throughput settings of the table.</p> </li> <li> <p>Enable or disable DynamoDB Streams on the table.</p> </li> <li> <p>Remove a global secondary index from the table.</p> </li> <li> <p>Create a new global secondary index on the table. After the index begins backfilling, you can use <code>UpdateTable</code> to perform other operations.</p> </li> </ul> <p> <code>UpdateTable</code> is an asynchronous operation; while it is executing, the table status changes from <code>ACTIVE</code> to <code>UPDATING</code>. While it is <code>UPDATING</code>, you cannot issue another <code>UpdateTable</code> request. When the table returns to the <code>ACTIVE</code> state, the <code>UpdateTable</code> operation is complete.</p>
		 * Post #X-Amz-Target=DynamoDB_20120810.UpdateTable
		 * @return {UpdateTableOutput} Success
		 */
		UpdateTable(requestBody: UpdateTableInput): Observable<UpdateTableOutput> {
			return this.http.post<UpdateTableOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.UpdateTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates auto scaling settings on your global tables at once.</p> <note> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21</a> of global tables.</p> </note>
		 * Post #X-Amz-Target=DynamoDB_20120810.UpdateTableReplicaAutoScaling
		 * @return {UpdateTableReplicaAutoScalingOutput} Success
		 */
		UpdateTableReplicaAutoScaling(requestBody: UpdateTableReplicaAutoScalingInput): Observable<UpdateTableReplicaAutoScalingOutput> {
			return this.http.post<UpdateTableReplicaAutoScalingOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.UpdateTableReplicaAutoScaling', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>The <code>UpdateTimeToLive</code> method enables or disables Time to Live (TTL) for the specified table. A successful <code>UpdateTimeToLive</code> call returns the current <code>TimeToLiveSpecification</code>. It can take up to one hour for the change to fully process. Any additional <code>UpdateTimeToLive</code> calls for the same table during this one hour duration result in a <code>ValidationException</code>. </p> <p>TTL compares the current time in epoch time format to the time stored in the TTL attribute of an item. If the epoch time value stored in the attribute is less than the current time, the item is marked as expired and subsequently deleted.</p> <note> <p> The epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC. </p> </note> <p>DynamoDB deletes expired items on a best-effort basis to ensure availability of throughput for other data operations. </p> <important> <p>DynamoDB typically deletes expired items within two days of expiration. The exact duration within which an item gets deleted after expiration is specific to the nature of the workload. Items that have expired and not been deleted will still show up in reads, queries, and scans.</p> </important> <p>As items are deleted, they are removed from any local secondary index and global secondary index immediately in the same eventually consistent way as a standard delete operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html">Time To Live</a> in the Amazon DynamoDB Developer Guide. </p>
		 * Post #X-Amz-Target=DynamoDB_20120810.UpdateTimeToLive
		 * @return {UpdateTimeToLiveOutput} Success
		 */
		UpdateTimeToLive(requestBody: UpdateTimeToLiveInput): Observable<UpdateTimeToLiveOutput> {
			return this.http.post<UpdateTimeToLiveOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.UpdateTimeToLive', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum BatchGetItemX_Amz_Target { DynamoDB_20120810_BatchGetItem = 0 }

	export enum BatchWriteItemX_Amz_Target { DynamoDB_20120810_BatchWriteItem = 0 }

	export enum CreateBackupX_Amz_Target { DynamoDB_20120810_CreateBackup = 0 }

	export enum CreateGlobalTableX_Amz_Target { DynamoDB_20120810_CreateGlobalTable = 0 }

	export enum CreateTableX_Amz_Target { DynamoDB_20120810_CreateTable = 0 }

	export enum DeleteBackupX_Amz_Target { DynamoDB_20120810_DeleteBackup = 0 }

	export enum DeleteItemX_Amz_Target { DynamoDB_20120810_DeleteItem = 0 }

	export enum DeleteTableX_Amz_Target { DynamoDB_20120810_DeleteTable = 0 }

	export enum DescribeBackupX_Amz_Target { DynamoDB_20120810_DescribeBackup = 0 }

	export enum DescribeContinuousBackupsX_Amz_Target { DynamoDB_20120810_DescribeContinuousBackups = 0 }

	export enum DescribeContributorInsightsX_Amz_Target { DynamoDB_20120810_DescribeContributorInsights = 0 }

	export enum DescribeEndpointsX_Amz_Target { DynamoDB_20120810_DescribeEndpoints = 0 }

	export enum DescribeGlobalTableX_Amz_Target { DynamoDB_20120810_DescribeGlobalTable = 0 }

	export enum DescribeGlobalTableSettingsX_Amz_Target { DynamoDB_20120810_DescribeGlobalTableSettings = 0 }

	export enum DescribeLimitsX_Amz_Target { DynamoDB_20120810_DescribeLimits = 0 }

	export enum DescribeTableX_Amz_Target { DynamoDB_20120810_DescribeTable = 0 }

	export enum DescribeTableReplicaAutoScalingX_Amz_Target { DynamoDB_20120810_DescribeTableReplicaAutoScaling = 0 }

	export enum DescribeTimeToLiveX_Amz_Target { DynamoDB_20120810_DescribeTimeToLive = 0 }

	export enum GetItemX_Amz_Target { DynamoDB_20120810_GetItem = 0 }

	export enum ListBackupsX_Amz_Target { DynamoDB_20120810_ListBackups = 0 }

	export enum ListContributorInsightsX_Amz_Target { DynamoDB_20120810_ListContributorInsights = 0 }

	export enum ListGlobalTablesX_Amz_Target { DynamoDB_20120810_ListGlobalTables = 0 }

	export enum ListTablesX_Amz_Target { DynamoDB_20120810_ListTables = 0 }

	export enum ListTagsOfResourceX_Amz_Target { DynamoDB_20120810_ListTagsOfResource = 0 }

	export enum PutItemX_Amz_Target { DynamoDB_20120810_PutItem = 0 }

	export enum QueryX_Amz_Target { DynamoDB_20120810_Query = 0 }

	export enum RestoreTableFromBackupX_Amz_Target { DynamoDB_20120810_RestoreTableFromBackup = 0 }

	export enum RestoreTableToPointInTimeX_Amz_Target { DynamoDB_20120810_RestoreTableToPointInTime = 0 }

	export enum ScanX_Amz_Target { DynamoDB_20120810_Scan = 0 }

	export enum TagResourceX_Amz_Target { DynamoDB_20120810_TagResource = 0 }

	export enum TransactGetItemsX_Amz_Target { DynamoDB_20120810_TransactGetItems = 0 }

	export enum TransactWriteItemsX_Amz_Target { DynamoDB_20120810_TransactWriteItems = 0 }

	export enum UntagResourceX_Amz_Target { DynamoDB_20120810_UntagResource = 0 }

	export enum UpdateContinuousBackupsX_Amz_Target { DynamoDB_20120810_UpdateContinuousBackups = 0 }

	export enum UpdateContributorInsightsX_Amz_Target { DynamoDB_20120810_UpdateContributorInsights = 0 }

	export enum UpdateGlobalTableX_Amz_Target { DynamoDB_20120810_UpdateGlobalTable = 0 }

	export enum UpdateGlobalTableSettingsX_Amz_Target { DynamoDB_20120810_UpdateGlobalTableSettings = 0 }

	export enum UpdateItemX_Amz_Target { DynamoDB_20120810_UpdateItem = 0 }

	export enum UpdateTableX_Amz_Target { DynamoDB_20120810_UpdateTable = 0 }

	export enum UpdateTableReplicaAutoScalingX_Amz_Target { DynamoDB_20120810_UpdateTableReplicaAutoScaling = 0 }

	export enum UpdateTimeToLiveX_Amz_Target { DynamoDB_20120810_UpdateTimeToLive = 0 }

}

