import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents the output of a <code>BatchGetItem</code> operation. */
	export interface BatchGetItemOutput {
		Responses?: BatchGetResponseMap;
		UnprocessedKeys?: BatchGetRequestMap;
		ConsumedCapacity?: Array<ConsumedCapacity>;
	}

	/** Represents the output of a <code>BatchGetItem</code> operation. */
	export interface BatchGetItemOutputFormProperties {
	}
	export function CreateBatchGetItemOutputFormGroup() {
		return new FormGroup<BatchGetItemOutputFormProperties>({
		});

	}

	export interface BatchGetResponseMap {
	}
	export interface BatchGetResponseMapFormProperties {
	}
	export function CreateBatchGetResponseMapFormGroup() {
		return new FormGroup<BatchGetResponseMapFormProperties>({
		});

	}

	export interface BatchGetRequestMap {
	}
	export interface BatchGetRequestMapFormProperties {
	}
	export function CreateBatchGetRequestMapFormGroup() {
		return new FormGroup<BatchGetRequestMapFormProperties>({
		});

	}


	/** The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>. */
	export interface ConsumedCapacity {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName?: string | null;
		CapacityUnits?: number | null;
		ReadCapacityUnits?: number | null;
		WriteCapacityUnits?: number | null;

		/** Represents the amount of provisioned throughput capacity consumed on a table or an index. */
		Table?: Capacity;
		LocalSecondaryIndexes?: SecondaryIndexesCapacityMap;
		GlobalSecondaryIndexes?: SecondaryIndexesCapacityMap;
	}

	/** The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>. */
	export interface ConsumedCapacityFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,
		CapacityUnits: FormControl<number | null | undefined>,
		ReadCapacityUnits: FormControl<number | null | undefined>,
		WriteCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateConsumedCapacityFormGroup() {
		return new FormGroup<ConsumedCapacityFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
			CapacityUnits: new FormControl<number | null | undefined>(undefined),
			ReadCapacityUnits: new FormControl<number | null | undefined>(undefined),
			WriteCapacityUnits: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the amount of provisioned throughput capacity consumed on a table or an index. */
	export interface Capacity {
		ReadCapacityUnits?: number | null;
		WriteCapacityUnits?: number | null;
		CapacityUnits?: number | null;
	}

	/** Represents the amount of provisioned throughput capacity consumed on a table or an index. */
	export interface CapacityFormProperties {
		ReadCapacityUnits: FormControl<number | null | undefined>,
		WriteCapacityUnits: FormControl<number | null | undefined>,
		CapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateCapacityFormGroup() {
		return new FormGroup<CapacityFormProperties>({
			ReadCapacityUnits: new FormControl<number | null | undefined>(undefined),
			WriteCapacityUnits: new FormControl<number | null | undefined>(undefined),
			CapacityUnits: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SecondaryIndexesCapacityMap {
	}
	export interface SecondaryIndexesCapacityMapFormProperties {
	}
	export function CreateSecondaryIndexesCapacityMapFormGroup() {
		return new FormGroup<SecondaryIndexesCapacityMapFormProperties>({
		});

	}


	/** Represents the input of a <code>BatchGetItem</code> operation. */
	export interface BatchGetItemInput {

		/** Required */
		RequestItems: BatchGetRequestMap;

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchGetItemInputReturnConsumedCapacity | null;
	}

	/** Represents the input of a <code>BatchGetItem</code> operation. */
	export interface BatchGetItemInputFormProperties {

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity: FormControl<BatchGetItemInputReturnConsumedCapacity | null | undefined>,
	}
	export function CreateBatchGetItemInputFormGroup() {
		return new FormGroup<BatchGetItemInputFormProperties>({
			ReturnConsumedCapacity: new FormControl<BatchGetItemInputReturnConsumedCapacity | null | undefined>(undefined),
		});

	}

	export enum BatchGetItemInputReturnConsumedCapacity { INDEXES = 0, TOTAL = 1, NONE = 2 }

	export interface ProvisionedThroughputExceededException {
	}
	export interface ProvisionedThroughputExceededExceptionFormProperties {
	}
	export function CreateProvisionedThroughputExceededExceptionFormGroup() {
		return new FormGroup<ProvisionedThroughputExceededExceptionFormProperties>({
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

	export interface RequestLimitExceeded {
	}
	export interface RequestLimitExceededFormProperties {
	}
	export function CreateRequestLimitExceededFormGroup() {
		return new FormGroup<RequestLimitExceededFormProperties>({
		});

	}

	export interface InternalServerError {
	}
	export interface InternalServerErrorFormProperties {
	}
	export function CreateInternalServerErrorFormGroup() {
		return new FormGroup<InternalServerErrorFormProperties>({
		});

	}


	/** Represents the output of a <code>BatchWriteItem</code> operation. */
	export interface BatchWriteItemOutput {
		UnprocessedItems?: BatchWriteItemRequestMap;
		ItemCollectionMetrics?: ItemCollectionMetricsPerTable;
		ConsumedCapacity?: Array<ConsumedCapacity>;
	}

	/** Represents the output of a <code>BatchWriteItem</code> operation. */
	export interface BatchWriteItemOutputFormProperties {
	}
	export function CreateBatchWriteItemOutputFormGroup() {
		return new FormGroup<BatchWriteItemOutputFormProperties>({
		});

	}

	export interface BatchWriteItemRequestMap {
	}
	export interface BatchWriteItemRequestMapFormProperties {
	}
	export function CreateBatchWriteItemRequestMapFormGroup() {
		return new FormGroup<BatchWriteItemRequestMapFormProperties>({
		});

	}

	export interface ItemCollectionMetricsPerTable {
	}
	export interface ItemCollectionMetricsPerTableFormProperties {
	}
	export function CreateItemCollectionMetricsPerTableFormGroup() {
		return new FormGroup<ItemCollectionMetricsPerTableFormProperties>({
		});

	}


	/** Represents the input of a <code>BatchWriteItem</code> operation. */
	export interface BatchWriteItemInput {

		/** Required */
		RequestItems: BatchWriteItemRequestMap;

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchGetItemInputReturnConsumedCapacity | null;
		ReturnItemCollectionMetrics?: BatchWriteItemInputReturnItemCollectionMetrics | null;
	}

	/** Represents the input of a <code>BatchWriteItem</code> operation. */
	export interface BatchWriteItemInputFormProperties {

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity: FormControl<BatchGetItemInputReturnConsumedCapacity | null | undefined>,
		ReturnItemCollectionMetrics: FormControl<BatchWriteItemInputReturnItemCollectionMetrics | null | undefined>,
	}
	export function CreateBatchWriteItemInputFormGroup() {
		return new FormGroup<BatchWriteItemInputFormProperties>({
			ReturnConsumedCapacity: new FormControl<BatchGetItemInputReturnConsumedCapacity | null | undefined>(undefined),
			ReturnItemCollectionMetrics: new FormControl<BatchWriteItemInputReturnItemCollectionMetrics | null | undefined>(undefined),
		});

	}

	export enum BatchWriteItemInputReturnItemCollectionMetrics { SIZE = 0, NONE = 1 }

	export interface ItemCollectionSizeLimitExceededException {
	}
	export interface ItemCollectionSizeLimitExceededExceptionFormProperties {
	}
	export function CreateItemCollectionSizeLimitExceededExceptionFormGroup() {
		return new FormGroup<ItemCollectionSizeLimitExceededExceptionFormProperties>({
		});

	}

	export interface CreateBackupOutput {

		/** Contains the details of the backup created for the table. */
		BackupDetails?: BackupDetails;
	}
	export interface CreateBackupOutputFormProperties {
	}
	export function CreateCreateBackupOutputFormGroup() {
		return new FormGroup<CreateBackupOutputFormProperties>({
		});

	}


	/** Contains the details of the backup created for the table. */
	export interface BackupDetails {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 37
		 */
		BackupArn: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		BackupName: string;

		/** Minimum: 0 */
		BackupSizeBytes?: number | null;

		/** Required */
		BackupStatus: BackupDetailsBackupStatus;

		/** Required */
		BackupType: BackupDetailsBackupType;

		/** Required */
		BackupCreationDateTime: Date;
		BackupExpiryDateTime?: Date | null;
	}

	/** Contains the details of the backup created for the table. */
	export interface BackupDetailsFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 37
		 */
		BackupArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		BackupName: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		BackupSizeBytes: FormControl<number | null | undefined>,

		/** Required */
		BackupStatus: FormControl<BackupDetailsBackupStatus | null | undefined>,

		/** Required */
		BackupType: FormControl<BackupDetailsBackupType | null | undefined>,

		/** Required */
		BackupCreationDateTime: FormControl<Date | null | undefined>,
		BackupExpiryDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateBackupDetailsFormGroup() {
		return new FormGroup<BackupDetailsFormProperties>({
			BackupArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(37)]),
			BackupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
			BackupSizeBytes: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			BackupStatus: new FormControl<BackupDetailsBackupStatus | null | undefined>(undefined, [Validators.required]),
			BackupType: new FormControl<BackupDetailsBackupType | null | undefined>(undefined, [Validators.required]),
			BackupCreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			BackupExpiryDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum BackupDetailsBackupStatus { CREATING = 0, DELETED = 1, AVAILABLE = 2 }

	export enum BackupDetailsBackupType { USER = 0, SYSTEM = 1, AWS_BACKUP = 2 }

	export interface CreateBackupInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		BackupName: string;
	}
	export interface CreateBackupInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		BackupName: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackupInputFormGroup() {
		return new FormGroup<CreateBackupInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
			BackupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
		});

	}

	export interface TableNotFoundException {
	}
	export interface TableNotFoundExceptionFormProperties {
	}
	export function CreateTableNotFoundExceptionFormGroup() {
		return new FormGroup<TableNotFoundExceptionFormProperties>({
		});

	}

	export interface TableInUseException {
	}
	export interface TableInUseExceptionFormProperties {
	}
	export function CreateTableInUseExceptionFormGroup() {
		return new FormGroup<TableInUseExceptionFormProperties>({
		});

	}

	export interface ContinuousBackupsUnavailableException {
	}
	export interface ContinuousBackupsUnavailableExceptionFormProperties {
	}
	export function CreateContinuousBackupsUnavailableExceptionFormGroup() {
		return new FormGroup<ContinuousBackupsUnavailableExceptionFormProperties>({
		});

	}

	export interface BackupInUseException {
	}
	export interface BackupInUseExceptionFormProperties {
	}
	export function CreateBackupInUseExceptionFormGroup() {
		return new FormGroup<BackupInUseExceptionFormProperties>({
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

	export interface CreateGlobalTableOutput {

		/** Contains details about the global table. */
		GlobalTableDescription?: GlobalTableDescription;
	}
	export interface CreateGlobalTableOutputFormProperties {
	}
	export function CreateCreateGlobalTableOutputFormGroup() {
		return new FormGroup<CreateGlobalTableOutputFormProperties>({
		});

	}


	/** Contains details about the global table. */
	export interface GlobalTableDescription {
		ReplicationGroup?: Array<ReplicaDescription>;
		GlobalTableArn?: string | null;
		CreationDateTime?: Date | null;
		GlobalTableStatus?: GlobalTableDescriptionGlobalTableStatus | null;

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		GlobalTableName?: string | null;
	}

	/** Contains details about the global table. */
	export interface GlobalTableDescriptionFormProperties {
		GlobalTableArn: FormControl<string | null | undefined>,
		CreationDateTime: FormControl<Date | null | undefined>,
		GlobalTableStatus: FormControl<GlobalTableDescriptionGlobalTableStatus | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		GlobalTableName: FormControl<string | null | undefined>,
	}
	export function CreateGlobalTableDescriptionFormGroup() {
		return new FormGroup<GlobalTableDescriptionFormProperties>({
			GlobalTableArn: new FormControl<string | null | undefined>(undefined),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined),
			GlobalTableStatus: new FormControl<GlobalTableDescriptionGlobalTableStatus | null | undefined>(undefined),
			GlobalTableName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
		});

	}


	/** Contains the details of the replica. */
	export interface ReplicaDescription {
		RegionName?: string | null;
		ReplicaStatus?: ReplicaDescriptionReplicaStatus | null;
		ReplicaStatusDescription?: string | null;
		ReplicaStatusPercentProgress?: string | null;
		KMSMasterKeyId?: string | null;

		/** Replica-specific provisioned throughput settings. If not specified, uses the source table's provisioned throughput settings. */
		ProvisionedThroughputOverride?: ProvisionedThroughputOverride;
		GlobalSecondaryIndexes?: Array<ReplicaGlobalSecondaryIndexDescription>;
	}

	/** Contains the details of the replica. */
	export interface ReplicaDescriptionFormProperties {
		RegionName: FormControl<string | null | undefined>,
		ReplicaStatus: FormControl<ReplicaDescriptionReplicaStatus | null | undefined>,
		ReplicaStatusDescription: FormControl<string | null | undefined>,
		ReplicaStatusPercentProgress: FormControl<string | null | undefined>,
		KMSMasterKeyId: FormControl<string | null | undefined>,
	}
	export function CreateReplicaDescriptionFormGroup() {
		return new FormGroup<ReplicaDescriptionFormProperties>({
			RegionName: new FormControl<string | null | undefined>(undefined),
			ReplicaStatus: new FormControl<ReplicaDescriptionReplicaStatus | null | undefined>(undefined),
			ReplicaStatusDescription: new FormControl<string | null | undefined>(undefined),
			ReplicaStatusPercentProgress: new FormControl<string | null | undefined>(undefined),
			KMSMasterKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReplicaDescriptionReplicaStatus { CREATING = 0, CREATION_FAILED = 1, UPDATING = 2, DELETING = 3, ACTIVE = 4 }


	/** Replica-specific provisioned throughput settings. If not specified, uses the source table's provisioned throughput settings. */
	export interface ProvisionedThroughputOverride {

		/** Minimum: 1 */
		ReadCapacityUnits?: number | null;
	}

	/** Replica-specific provisioned throughput settings. If not specified, uses the source table's provisioned throughput settings. */
	export interface ProvisionedThroughputOverrideFormProperties {

		/** Minimum: 1 */
		ReadCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateProvisionedThroughputOverrideFormGroup() {
		return new FormGroup<ProvisionedThroughputOverrideFormProperties>({
			ReadCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** Represents the properties of a replica global secondary index. */
	export interface ReplicaGlobalSecondaryIndexDescription {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName?: string | null;

		/** Replica-specific provisioned throughput settings. If not specified, uses the source table's provisioned throughput settings. */
		ProvisionedThroughputOverride?: ProvisionedThroughputOverride;
	}

	/** Represents the properties of a replica global secondary index. */
	export interface ReplicaGlobalSecondaryIndexDescriptionFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateReplicaGlobalSecondaryIndexDescriptionFormGroup() {
		return new FormGroup<ReplicaGlobalSecondaryIndexDescriptionFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
		});

	}

	export enum GlobalTableDescriptionGlobalTableStatus { CREATING = 0, ACTIVE = 1, DELETING = 2, UPDATING = 3 }

	export interface CreateGlobalTableInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		GlobalTableName: string;

		/** Required */
		ReplicationGroup: Array<Replica>;
	}
	export interface CreateGlobalTableInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		GlobalTableName: FormControl<string | null | undefined>,
	}
	export function CreateCreateGlobalTableInputFormGroup() {
		return new FormGroup<CreateGlobalTableInputFormProperties>({
			GlobalTableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
		});

	}


	/** Represents the properties of a replica. */
	export interface Replica {
		RegionName?: string | null;
	}

	/** Represents the properties of a replica. */
	export interface ReplicaFormProperties {
		RegionName: FormControl<string | null | undefined>,
	}
	export function CreateReplicaFormGroup() {
		return new FormGroup<ReplicaFormProperties>({
			RegionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GlobalTableAlreadyExistsException {
	}
	export interface GlobalTableAlreadyExistsExceptionFormProperties {
	}
	export function CreateGlobalTableAlreadyExistsExceptionFormGroup() {
		return new FormGroup<GlobalTableAlreadyExistsExceptionFormProperties>({
		});

	}


	/** Represents the output of a <code>CreateTable</code> operation. */
	export interface CreateTableOutput {

		/** Represents the properties of a table. */
		TableDescription?: TableDescription;
	}

	/** Represents the output of a <code>CreateTable</code> operation. */
	export interface CreateTableOutputFormProperties {
	}
	export function CreateCreateTableOutputFormGroup() {
		return new FormGroup<CreateTableOutputFormProperties>({
		});

	}


	/** Represents the properties of a table. */
	export interface TableDescription {
		AttributeDefinitions?: Array<AttributeDefinition>;

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		KeySchema?: Array<KeySchemaElement>;
		TableStatus?: TableDescriptionTableStatus | null;
		CreationDateTime?: Date | null;

		/** Represents the provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases. */
		ProvisionedThroughput?: ProvisionedThroughputDescription;
		TableSizeBytes?: number | null;
		ItemCount?: number | null;
		TableArn?: string | null;

		/** Pattern: [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12} */
		TableId?: string | null;

		/** Contains the details for the read/write capacity mode. */
		BillingModeSummary?: BillingModeSummary;
		LocalSecondaryIndexes?: Array<LocalSecondaryIndexDescription>;
		GlobalSecondaryIndexes?: Array<GlobalSecondaryIndexDescription>;

		/** Represents the DynamoDB Streams configuration for a table in DynamoDB. */
		StreamSpecification?: StreamSpecification;
		LatestStreamLabel?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 37
		 */
		LatestStreamArn?: string | null;
		GlobalTableVersion?: string | null;
		Replicas?: Array<ReplicaDescription>;

		/** Contains details for the restore. */
		RestoreSummary?: RestoreSummary;

		/** The description of the server-side encryption status on the specified table. */
		SSEDescription?: SSEDescription;

		/** Contains details of a table archival operation. */
		ArchivalSummary?: ArchivalSummary;
	}

	/** Represents the properties of a table. */
	export interface TableDescriptionFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,
		TableStatus: FormControl<TableDescriptionTableStatus | null | undefined>,
		CreationDateTime: FormControl<Date | null | undefined>,
		TableSizeBytes: FormControl<number | null | undefined>,
		ItemCount: FormControl<number | null | undefined>,
		TableArn: FormControl<string | null | undefined>,

		/** Pattern: [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12} */
		TableId: FormControl<string | null | undefined>,
		LatestStreamLabel: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 37
		 */
		LatestStreamArn: FormControl<string | null | undefined>,
		GlobalTableVersion: FormControl<string | null | undefined>,
	}
	export function CreateTableDescriptionFormGroup() {
		return new FormGroup<TableDescriptionFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
			TableStatus: new FormControl<TableDescriptionTableStatus | null | undefined>(undefined),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined),
			TableSizeBytes: new FormControl<number | null | undefined>(undefined),
			ItemCount: new FormControl<number | null | undefined>(undefined),
			TableArn: new FormControl<string | null | undefined>(undefined),
			TableId: new FormControl<string | null | undefined>(undefined),
			LatestStreamLabel: new FormControl<string | null | undefined>(undefined),
			LatestStreamArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(37)]),
			GlobalTableVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an attribute for describing the key schema for the table and indexes. */
	export interface AttributeDefinition {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		AttributeName: string;

		/** Required */
		AttributeType: AttributeDefinitionAttributeType;
	}

	/** Represents an attribute for describing the key schema for the table and indexes. */
	export interface AttributeDefinitionFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		AttributeName: FormControl<string | null | undefined>,

		/** Required */
		AttributeType: FormControl<AttributeDefinitionAttributeType | null | undefined>,
	}
	export function CreateAttributeDefinitionFormGroup() {
		return new FormGroup<AttributeDefinitionFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			AttributeType: new FormControl<AttributeDefinitionAttributeType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AttributeDefinitionAttributeType { S = 0, N = 1, B = 2 }


	/** <p>Represents <i>a single element</i> of a key schema. A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index.</p> <p>A <code>KeySchemaElement</code> represents exactly one attribute of the primary key. For example, a simple primary key would be represented by one <code>KeySchemaElement</code> (for the partition key). A composite primary key would require one <code>KeySchemaElement</code> for the partition key, and another <code>KeySchemaElement</code> for the sort key.</p> <p>A <code>KeySchemaElement</code> must be a scalar, top-level attribute (not a nested attribute). The data type must be one of String, Number, or Binary. The attribute cannot be nested within a List or a Map.</p> */
	export interface KeySchemaElement {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		AttributeName: string;

		/** Required */
		KeyType: KeySchemaElementKeyType;
	}

	/** <p>Represents <i>a single element</i> of a key schema. A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index.</p> <p>A <code>KeySchemaElement</code> represents exactly one attribute of the primary key. For example, a simple primary key would be represented by one <code>KeySchemaElement</code> (for the partition key). A composite primary key would require one <code>KeySchemaElement</code> for the partition key, and another <code>KeySchemaElement</code> for the sort key.</p> <p>A <code>KeySchemaElement</code> must be a scalar, top-level attribute (not a nested attribute). The data type must be one of String, Number, or Binary. The attribute cannot be nested within a List or a Map.</p> */
	export interface KeySchemaElementFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		AttributeName: FormControl<string | null | undefined>,

		/** Required */
		KeyType: FormControl<KeySchemaElementKeyType | null | undefined>,
	}
	export function CreateKeySchemaElementFormGroup() {
		return new FormGroup<KeySchemaElementFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			KeyType: new FormControl<KeySchemaElementKeyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum KeySchemaElementKeyType { HASH = 0, RANGE = 1 }

	export enum TableDescriptionTableStatus { CREATING = 0, UPDATING = 1, DELETING = 2, ACTIVE = 3, INACCESSIBLE_ENCRYPTION_CREDENTIALS = 4, ARCHIVING = 5, ARCHIVED = 6 }


	/** Represents the provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases. */
	export interface ProvisionedThroughputDescription {
		LastIncreaseDateTime?: Date | null;
		LastDecreaseDateTime?: Date | null;

		/** Minimum: 1 */
		NumberOfDecreasesToday?: number | null;

		/** Minimum: 0 */
		ReadCapacityUnits?: number | null;

		/** Minimum: 0 */
		WriteCapacityUnits?: number | null;
	}

	/** Represents the provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases. */
	export interface ProvisionedThroughputDescriptionFormProperties {
		LastIncreaseDateTime: FormControl<Date | null | undefined>,
		LastDecreaseDateTime: FormControl<Date | null | undefined>,

		/** Minimum: 1 */
		NumberOfDecreasesToday: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		ReadCapacityUnits: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		WriteCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateProvisionedThroughputDescriptionFormGroup() {
		return new FormGroup<ProvisionedThroughputDescriptionFormProperties>({
			LastIncreaseDateTime: new FormControl<Date | null | undefined>(undefined),
			LastDecreaseDateTime: new FormControl<Date | null | undefined>(undefined),
			NumberOfDecreasesToday: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			ReadCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			WriteCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** Contains the details for the read/write capacity mode. */
	export interface BillingModeSummary {
		BillingMode?: BillingModeSummaryBillingMode | null;
		LastUpdateToPayPerRequestDateTime?: Date | null;
	}

	/** Contains the details for the read/write capacity mode. */
	export interface BillingModeSummaryFormProperties {
		BillingMode: FormControl<BillingModeSummaryBillingMode | null | undefined>,
		LastUpdateToPayPerRequestDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateBillingModeSummaryFormGroup() {
		return new FormGroup<BillingModeSummaryFormProperties>({
			BillingMode: new FormControl<BillingModeSummaryBillingMode | null | undefined>(undefined),
			LastUpdateToPayPerRequestDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum BillingModeSummaryBillingMode { PROVISIONED = 0, PAY_PER_REQUEST = 1 }


	/** Represents the properties of a local secondary index. */
	export interface LocalSecondaryIndexDescription {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		KeySchema?: Array<KeySchemaElement>;

		/** Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. */
		Projection?: Projection;
		IndexSizeBytes?: number | null;
		ItemCount?: number | null;
		IndexArn?: string | null;
	}

	/** Represents the properties of a local secondary index. */
	export interface LocalSecondaryIndexDescriptionFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: FormControl<string | null | undefined>,
		IndexSizeBytes: FormControl<number | null | undefined>,
		ItemCount: FormControl<number | null | undefined>,
		IndexArn: FormControl<string | null | undefined>,
	}
	export function CreateLocalSecondaryIndexDescriptionFormGroup() {
		return new FormGroup<LocalSecondaryIndexDescriptionFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
			IndexSizeBytes: new FormControl<number | null | undefined>(undefined),
			ItemCount: new FormControl<number | null | undefined>(undefined),
			IndexArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. */
	export interface Projection {
		ProjectionType?: ProjectionProjectionType | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		NonKeyAttributes?: Array<string>;
	}

	/** Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. */
	export interface ProjectionFormProperties {
		ProjectionType: FormControl<ProjectionProjectionType | null | undefined>,
	}
	export function CreateProjectionFormGroup() {
		return new FormGroup<ProjectionFormProperties>({
			ProjectionType: new FormControl<ProjectionProjectionType | null | undefined>(undefined),
		});

	}

	export enum ProjectionProjectionType { ALL = 0, KEYS_ONLY = 1, INCLUDE = 2 }


	/** Represents the properties of a global secondary index. */
	export interface GlobalSecondaryIndexDescription {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		KeySchema?: Array<KeySchemaElement>;

		/** Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. */
		Projection?: Projection;
		IndexStatus?: GlobalSecondaryIndexDescriptionIndexStatus | null;
		Backfilling?: boolean | null;

		/** Represents the provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases. */
		ProvisionedThroughput?: ProvisionedThroughputDescription;
		IndexSizeBytes?: number | null;
		ItemCount?: number | null;
		IndexArn?: string | null;
	}

	/** Represents the properties of a global secondary index. */
	export interface GlobalSecondaryIndexDescriptionFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: FormControl<string | null | undefined>,
		IndexStatus: FormControl<GlobalSecondaryIndexDescriptionIndexStatus | null | undefined>,
		Backfilling: FormControl<boolean | null | undefined>,
		IndexSizeBytes: FormControl<number | null | undefined>,
		ItemCount: FormControl<number | null | undefined>,
		IndexArn: FormControl<string | null | undefined>,
	}
	export function CreateGlobalSecondaryIndexDescriptionFormGroup() {
		return new FormGroup<GlobalSecondaryIndexDescriptionFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
			IndexStatus: new FormControl<GlobalSecondaryIndexDescriptionIndexStatus | null | undefined>(undefined),
			Backfilling: new FormControl<boolean | null | undefined>(undefined),
			IndexSizeBytes: new FormControl<number | null | undefined>(undefined),
			ItemCount: new FormControl<number | null | undefined>(undefined),
			IndexArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GlobalSecondaryIndexDescriptionIndexStatus { CREATING = 0, UPDATING = 1, DELETING = 2, ACTIVE = 3 }


	/** Represents the DynamoDB Streams configuration for a table in DynamoDB. */
	export interface StreamSpecification {

		/** Required */
		StreamEnabled: boolean;
		StreamViewType?: StreamSpecificationStreamViewType | null;
	}

	/** Represents the DynamoDB Streams configuration for a table in DynamoDB. */
	export interface StreamSpecificationFormProperties {

		/** Required */
		StreamEnabled: FormControl<boolean | null | undefined>,
		StreamViewType: FormControl<StreamSpecificationStreamViewType | null | undefined>,
	}
	export function CreateStreamSpecificationFormGroup() {
		return new FormGroup<StreamSpecificationFormProperties>({
			StreamEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			StreamViewType: new FormControl<StreamSpecificationStreamViewType | null | undefined>(undefined),
		});

	}

	export enum StreamSpecificationStreamViewType { NEW_IMAGE = 0, OLD_IMAGE = 1, NEW_AND_OLD_IMAGES = 2, KEYS_ONLY = 3 }


	/** Contains details for the restore. */
	export interface RestoreSummary {

		/**
		 * Max length: 1024
		 * Min length: 37
		 */
		SourceBackupArn?: string | null;
		SourceTableArn?: string | null;

		/** Required */
		RestoreDateTime: Date;

		/** Required */
		RestoreInProgress: boolean;
	}

	/** Contains details for the restore. */
	export interface RestoreSummaryFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 37
		 */
		SourceBackupArn: FormControl<string | null | undefined>,
		SourceTableArn: FormControl<string | null | undefined>,

		/** Required */
		RestoreDateTime: FormControl<Date | null | undefined>,

		/** Required */
		RestoreInProgress: FormControl<boolean | null | undefined>,
	}
	export function CreateRestoreSummaryFormGroup() {
		return new FormGroup<RestoreSummaryFormProperties>({
			SourceBackupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(37)]),
			SourceTableArn: new FormControl<string | null | undefined>(undefined),
			RestoreDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			RestoreInProgress: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The description of the server-side encryption status on the specified table. */
	export interface SSEDescription {
		Status?: SSEDescriptionStatus | null;
		SSEType?: SSEDescriptionSSEType | null;
		KMSMasterKeyArn?: string | null;
		InaccessibleEncryptionDateTime?: Date | null;
	}

	/** The description of the server-side encryption status on the specified table. */
	export interface SSEDescriptionFormProperties {
		Status: FormControl<SSEDescriptionStatus | null | undefined>,
		SSEType: FormControl<SSEDescriptionSSEType | null | undefined>,
		KMSMasterKeyArn: FormControl<string | null | undefined>,
		InaccessibleEncryptionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateSSEDescriptionFormGroup() {
		return new FormGroup<SSEDescriptionFormProperties>({
			Status: new FormControl<SSEDescriptionStatus | null | undefined>(undefined),
			SSEType: new FormControl<SSEDescriptionSSEType | null | undefined>(undefined),
			KMSMasterKeyArn: new FormControl<string | null | undefined>(undefined),
			InaccessibleEncryptionDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum SSEDescriptionStatus { ENABLING = 0, ENABLED = 1, DISABLING = 2, DISABLED = 3, UPDATING = 4 }

	export enum SSEDescriptionSSEType { AES256 = 0, KMS = 1 }


	/** Contains details of a table archival operation. */
	export interface ArchivalSummary {
		ArchivalDateTime?: Date | null;
		ArchivalReason?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 37
		 */
		ArchivalBackupArn?: string | null;
	}

	/** Contains details of a table archival operation. */
	export interface ArchivalSummaryFormProperties {
		ArchivalDateTime: FormControl<Date | null | undefined>,
		ArchivalReason: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 37
		 */
		ArchivalBackupArn: FormControl<string | null | undefined>,
	}
	export function CreateArchivalSummaryFormGroup() {
		return new FormGroup<ArchivalSummaryFormProperties>({
			ArchivalDateTime: new FormControl<Date | null | undefined>(undefined),
			ArchivalReason: new FormControl<string | null | undefined>(undefined),
			ArchivalBackupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(37)]),
		});

	}


	/** Represents the input of a <code>CreateTable</code> operation. */
	export interface CreateTableInput {

		/** Required */
		AttributeDefinitions: Array<AttributeDefinition>;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		KeySchema: Array<KeySchemaElement>;
		LocalSecondaryIndexes?: Array<LocalSecondaryIndex>;
		GlobalSecondaryIndexes?: Array<GlobalSecondaryIndex>;
		BillingMode?: BillingModeSummaryBillingMode | null;

		/** <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
		ProvisionedThroughput?: ProvisionedThroughput;

		/** Represents the DynamoDB Streams configuration for a table in DynamoDB. */
		StreamSpecification?: StreamSpecification;

		/** Represents the settings used to enable server-side encryption. */
		SSESpecification?: SSESpecification;
		Tags?: Array<Tag>;
	}

	/** Represents the input of a <code>CreateTable</code> operation. */
	export interface CreateTableInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,
		BillingMode: FormControl<BillingModeSummaryBillingMode | null | undefined>,
	}
	export function CreateCreateTableInputFormGroup() {
		return new FormGroup<CreateTableInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
			BillingMode: new FormControl<BillingModeSummaryBillingMode | null | undefined>(undefined),
		});

	}


	/** Represents the properties of a local secondary index. */
	export interface LocalSecondaryIndex {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		KeySchema: Array<KeySchemaElement>;

		/**
		 * Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
		 * Required
		 */
		Projection: Projection;
	}

	/** Represents the properties of a local secondary index. */
	export interface LocalSecondaryIndexFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateLocalSecondaryIndexFormGroup() {
		return new FormGroup<LocalSecondaryIndexFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
		});

	}


	/** Represents the properties of a global secondary index. */
	export interface GlobalSecondaryIndex {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		KeySchema: Array<KeySchemaElement>;

		/**
		 * Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
		 * Required
		 */
		Projection: Projection;

		/** <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
		ProvisionedThroughput?: ProvisionedThroughput;
	}

	/** Represents the properties of a global secondary index. */
	export interface GlobalSecondaryIndexFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateGlobalSecondaryIndexFormGroup() {
		return new FormGroup<GlobalSecondaryIndexFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
		});

	}


	/** <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
	export interface ProvisionedThroughput {

		/**
		 * Required
		 * Minimum: 1
		 */
		ReadCapacityUnits: number;

		/**
		 * Required
		 * Minimum: 1
		 */
		WriteCapacityUnits: number;
	}

	/** <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
	export interface ProvisionedThroughputFormProperties {

		/**
		 * Required
		 * Minimum: 1
		 */
		ReadCapacityUnits: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		WriteCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateProvisionedThroughputFormGroup() {
		return new FormGroup<ProvisionedThroughputFormProperties>({
			ReadCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			WriteCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}


	/** Represents the settings used to enable server-side encryption. */
	export interface SSESpecification {
		Enabled?: boolean | null;
		SSEType?: SSEDescriptionSSEType | null;
		KMSMasterKeyId?: string | null;
	}

	/** Represents the settings used to enable server-side encryption. */
	export interface SSESpecificationFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		SSEType: FormControl<SSEDescriptionSSEType | null | undefined>,
		KMSMasterKeyId: FormControl<string | null | undefined>,
	}
	export function CreateSSESpecificationFormGroup() {
		return new FormGroup<SSESpecificationFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			SSEType: new FormControl<SSEDescriptionSSEType | null | undefined>(undefined),
			KMSMasterKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a single DynamoDB table. </p> <p> AWS-assigned tag names and values are automatically assigned the <code>aws:</code> prefix, which the user cannot assign. AWS-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix <code>user:</code> in the Cost Allocation Report. You cannot backdate the application of a tag. </p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
	export interface Tag {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		Value: string;
	}

	/** <p>Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a single DynamoDB table. </p> <p> AWS-assigned tag names and values are automatically assigned the <code>aws:</code> prefix, which the user cannot assign. AWS-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix <code>user:</code> in the Cost Allocation Report. You cannot backdate the application of a tag. </p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
	export interface TagFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(0)]),
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

	export interface DeleteBackupOutput {

		/** Contains the description of the backup created for the table. */
		BackupDescription?: BackupDescription;
	}
	export interface DeleteBackupOutputFormProperties {
	}
	export function CreateDeleteBackupOutputFormGroup() {
		return new FormGroup<DeleteBackupOutputFormProperties>({
		});

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

	/** Contains the description of the backup created for the table. */
	export interface BackupDescriptionFormProperties {
	}
	export function CreateBackupDescriptionFormGroup() {
		return new FormGroup<BackupDescriptionFormProperties>({
		});

	}


	/** Contains the details of the table when the backup was created.  */
	export interface SourceTableDetails {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: string;

		/**
		 * Required
		 * Pattern: [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}
		 */
		TableId: string;
		TableArn?: string | null;
		TableSizeBytes?: number | null;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		KeySchema: Array<KeySchemaElement>;

		/** Required */
		TableCreationDateTime: Date;

		/**
		 * <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
		 * Required
		 */
		ProvisionedThroughput: ProvisionedThroughput;

		/** Minimum: 0 */
		ItemCount?: number | null;
		BillingMode?: BillingModeSummaryBillingMode | null;
	}

	/** Contains the details of the table when the backup was created.  */
	export interface SourceTableDetailsFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Pattern: [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}
		 */
		TableId: FormControl<string | null | undefined>,
		TableArn: FormControl<string | null | undefined>,
		TableSizeBytes: FormControl<number | null | undefined>,

		/** Required */
		TableCreationDateTime: FormControl<Date | null | undefined>,

		/** Minimum: 0 */
		ItemCount: FormControl<number | null | undefined>,
		BillingMode: FormControl<BillingModeSummaryBillingMode | null | undefined>,
	}
	export function CreateSourceTableDetailsFormGroup() {
		return new FormGroup<SourceTableDetailsFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
			TableId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableArn: new FormControl<string | null | undefined>(undefined),
			TableSizeBytes: new FormControl<number | null | undefined>(undefined),
			TableCreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ItemCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			BillingMode: new FormControl<BillingModeSummaryBillingMode | null | undefined>(undefined),
		});

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

	/** Contains the details of the features enabled on the table when the backup was created. For example, LSIs, GSIs, streams, TTL.  */
	export interface SourceTableFeatureDetailsFormProperties {
	}
	export function CreateSourceTableFeatureDetailsFormGroup() {
		return new FormGroup<SourceTableFeatureDetailsFormProperties>({
		});

	}


	/** Represents the properties of a local secondary index for the table when the backup was created. */
	export interface LocalSecondaryIndexInfo {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		KeySchema?: Array<KeySchemaElement>;

		/** Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. */
		Projection?: Projection;
	}

	/** Represents the properties of a local secondary index for the table when the backup was created. */
	export interface LocalSecondaryIndexInfoFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateLocalSecondaryIndexInfoFormGroup() {
		return new FormGroup<LocalSecondaryIndexInfoFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
		});

	}


	/** Represents the properties of a global secondary index for the table when the backup was created. */
	export interface GlobalSecondaryIndexInfo {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		KeySchema?: Array<KeySchemaElement>;

		/** Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. */
		Projection?: Projection;

		/** <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
		ProvisionedThroughput?: ProvisionedThroughput;
	}

	/** Represents the properties of a global secondary index for the table when the backup was created. */
	export interface GlobalSecondaryIndexInfoFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateGlobalSecondaryIndexInfoFormGroup() {
		return new FormGroup<GlobalSecondaryIndexInfoFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
		});

	}


	/** The description of the Time to Live (TTL) status on the specified table.  */
	export interface TimeToLiveDescription {
		TimeToLiveStatus?: TimeToLiveDescriptionTimeToLiveStatus | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		AttributeName?: string | null;
	}

	/** The description of the Time to Live (TTL) status on the specified table.  */
	export interface TimeToLiveDescriptionFormProperties {
		TimeToLiveStatus: FormControl<TimeToLiveDescriptionTimeToLiveStatus | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		AttributeName: FormControl<string | null | undefined>,
	}
	export function CreateTimeToLiveDescriptionFormGroup() {
		return new FormGroup<TimeToLiveDescriptionFormProperties>({
			TimeToLiveStatus: new FormControl<TimeToLiveDescriptionTimeToLiveStatus | null | undefined>(undefined),
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

	export enum TimeToLiveDescriptionTimeToLiveStatus { ENABLING = 0, DISABLING = 1, ENABLED = 2, DISABLED = 3 }

	export interface DeleteBackupInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 37
		 */
		BackupArn: string;
	}
	export interface DeleteBackupInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 37
		 */
		BackupArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBackupInputFormGroup() {
		return new FormGroup<DeleteBackupInputFormProperties>({
			BackupArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(37)]),
		});

	}

	export interface BackupNotFoundException {
	}
	export interface BackupNotFoundExceptionFormProperties {
	}
	export function CreateBackupNotFoundExceptionFormGroup() {
		return new FormGroup<BackupNotFoundExceptionFormProperties>({
		});

	}


	/** Represents the output of a <code>DeleteItem</code> operation. */
	export interface DeleteItemOutput {
		Attributes?: AttributeMap;

		/** The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>. */
		ConsumedCapacity?: ConsumedCapacity;

		/** Information about item collections, if any, that were affected by the operation. <code>ItemCollectionMetrics</code> is only returned if the request asked for it. If the table does not have any local secondary indexes, this information is not returned in the response. */
		ItemCollectionMetrics?: ItemCollectionMetrics;
	}

	/** Represents the output of a <code>DeleteItem</code> operation. */
	export interface DeleteItemOutputFormProperties {
	}
	export function CreateDeleteItemOutputFormGroup() {
		return new FormGroup<DeleteItemOutputFormProperties>({
		});

	}

	export interface AttributeMap {
	}
	export interface AttributeMapFormProperties {
	}
	export function CreateAttributeMapFormGroup() {
		return new FormGroup<AttributeMapFormProperties>({
		});

	}


	/** Information about item collections, if any, that were affected by the operation. <code>ItemCollectionMetrics</code> is only returned if the request asked for it. If the table does not have any local secondary indexes, this information is not returned in the response. */
	export interface ItemCollectionMetrics {
		ItemCollectionKey?: ItemCollectionKeyAttributeMap;
		SizeEstimateRangeGB?: Array<number>;
	}

	/** Information about item collections, if any, that were affected by the operation. <code>ItemCollectionMetrics</code> is only returned if the request asked for it. If the table does not have any local secondary indexes, this information is not returned in the response. */
	export interface ItemCollectionMetricsFormProperties {
	}
	export function CreateItemCollectionMetricsFormGroup() {
		return new FormGroup<ItemCollectionMetricsFormProperties>({
		});

	}

	export interface ItemCollectionKeyAttributeMap {
	}
	export interface ItemCollectionKeyAttributeMapFormProperties {
	}
	export function CreateItemCollectionKeyAttributeMapFormGroup() {
		return new FormGroup<ItemCollectionKeyAttributeMapFormProperties>({
		});

	}


	/** Represents the input of a <code>DeleteItem</code> operation. */
	export interface DeleteItemInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: string;

		/** Required */
		Key: Key;
		Expected?: ExpectedAttributeMap;
		ConditionalOperator?: DeleteItemInputConditionalOperator | null;
		ReturnValues?: DeleteItemInputReturnValues | null;

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchGetItemInputReturnConsumedCapacity | null;
		ReturnItemCollectionMetrics?: BatchWriteItemInputReturnItemCollectionMetrics | null;
		ConditionExpression?: string | null;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
	}

	/** Represents the input of a <code>DeleteItem</code> operation. */
	export interface DeleteItemInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,
		ConditionalOperator: FormControl<DeleteItemInputConditionalOperator | null | undefined>,
		ReturnValues: FormControl<DeleteItemInputReturnValues | null | undefined>,

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity: FormControl<BatchGetItemInputReturnConsumedCapacity | null | undefined>,
		ReturnItemCollectionMetrics: FormControl<BatchWriteItemInputReturnItemCollectionMetrics | null | undefined>,
		ConditionExpression: FormControl<string | null | undefined>,
	}
	export function CreateDeleteItemInputFormGroup() {
		return new FormGroup<DeleteItemInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
			ConditionalOperator: new FormControl<DeleteItemInputConditionalOperator | null | undefined>(undefined),
			ReturnValues: new FormControl<DeleteItemInputReturnValues | null | undefined>(undefined),
			ReturnConsumedCapacity: new FormControl<BatchGetItemInputReturnConsumedCapacity | null | undefined>(undefined),
			ReturnItemCollectionMetrics: new FormControl<BatchWriteItemInputReturnItemCollectionMetrics | null | undefined>(undefined),
			ConditionExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Key {
	}
	export interface KeyFormProperties {
	}
	export function CreateKeyFormGroup() {
		return new FormGroup<KeyFormProperties>({
		});

	}

	export interface ExpectedAttributeMap {
	}
	export interface ExpectedAttributeMapFormProperties {
	}
	export function CreateExpectedAttributeMapFormGroup() {
		return new FormGroup<ExpectedAttributeMapFormProperties>({
		});

	}

	export enum DeleteItemInputConditionalOperator { AND = 0, OR = 1 }

	export enum DeleteItemInputReturnValues { NONE = 0, ALL_OLD = 1, UPDATED_OLD = 2, ALL_NEW = 3, UPDATED_NEW = 4 }

	export interface ExpressionAttributeNameMap {
	}
	export interface ExpressionAttributeNameMapFormProperties {
	}
	export function CreateExpressionAttributeNameMapFormGroup() {
		return new FormGroup<ExpressionAttributeNameMapFormProperties>({
		});

	}

	export interface ExpressionAttributeValueMap {
	}
	export interface ExpressionAttributeValueMapFormProperties {
	}
	export function CreateExpressionAttributeValueMapFormGroup() {
		return new FormGroup<ExpressionAttributeValueMapFormProperties>({
		});

	}

	export interface ConditionalCheckFailedException {
	}
	export interface ConditionalCheckFailedExceptionFormProperties {
	}
	export function CreateConditionalCheckFailedExceptionFormGroup() {
		return new FormGroup<ConditionalCheckFailedExceptionFormProperties>({
		});

	}

	export interface TransactionConflictException {
	}
	export interface TransactionConflictExceptionFormProperties {
	}
	export function CreateTransactionConflictExceptionFormGroup() {
		return new FormGroup<TransactionConflictExceptionFormProperties>({
		});

	}


	/** Represents the output of a <code>DeleteTable</code> operation. */
	export interface DeleteTableOutput {

		/** Represents the properties of a table. */
		TableDescription?: TableDescription;
	}

	/** Represents the output of a <code>DeleteTable</code> operation. */
	export interface DeleteTableOutputFormProperties {
	}
	export function CreateDeleteTableOutputFormGroup() {
		return new FormGroup<DeleteTableOutputFormProperties>({
		});

	}


	/** Represents the input of a <code>DeleteTable</code> operation. */
	export interface DeleteTableInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: string;
	}

	/** Represents the input of a <code>DeleteTable</code> operation. */
	export interface DeleteTableInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTableInputFormGroup() {
		return new FormGroup<DeleteTableInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
		});

	}

	export interface DescribeBackupOutput {

		/** Contains the description of the backup created for the table. */
		BackupDescription?: BackupDescription;
	}
	export interface DescribeBackupOutputFormProperties {
	}
	export function CreateDescribeBackupOutputFormGroup() {
		return new FormGroup<DescribeBackupOutputFormProperties>({
		});

	}

	export interface DescribeBackupInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 37
		 */
		BackupArn: string;
	}
	export interface DescribeBackupInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 37
		 */
		BackupArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBackupInputFormGroup() {
		return new FormGroup<DescribeBackupInputFormProperties>({
			BackupArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(37)]),
		});

	}

	export interface DescribeContinuousBackupsOutput {

		/** Represents the continuous backups and point in time recovery settings on the table. */
		ContinuousBackupsDescription?: ContinuousBackupsDescription;
	}
	export interface DescribeContinuousBackupsOutputFormProperties {
	}
	export function CreateDescribeContinuousBackupsOutputFormGroup() {
		return new FormGroup<DescribeContinuousBackupsOutputFormProperties>({
		});

	}


	/** Represents the continuous backups and point in time recovery settings on the table. */
	export interface ContinuousBackupsDescription {

		/** Required */
		ContinuousBackupsStatus: ContinuousBackupsDescriptionContinuousBackupsStatus;

		/** The description of the point in time settings applied to the table. */
		PointInTimeRecoveryDescription?: PointInTimeRecoveryDescription;
	}

	/** Represents the continuous backups and point in time recovery settings on the table. */
	export interface ContinuousBackupsDescriptionFormProperties {

		/** Required */
		ContinuousBackupsStatus: FormControl<ContinuousBackupsDescriptionContinuousBackupsStatus | null | undefined>,
	}
	export function CreateContinuousBackupsDescriptionFormGroup() {
		return new FormGroup<ContinuousBackupsDescriptionFormProperties>({
			ContinuousBackupsStatus: new FormControl<ContinuousBackupsDescriptionContinuousBackupsStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ContinuousBackupsDescriptionContinuousBackupsStatus { ENABLED = 0, DISABLED = 1 }


	/** The description of the point in time settings applied to the table. */
	export interface PointInTimeRecoveryDescription {
		PointInTimeRecoveryStatus?: ContinuousBackupsDescriptionContinuousBackupsStatus | null;
		EarliestRestorableDateTime?: Date | null;
		LatestRestorableDateTime?: Date | null;
	}

	/** The description of the point in time settings applied to the table. */
	export interface PointInTimeRecoveryDescriptionFormProperties {
		PointInTimeRecoveryStatus: FormControl<ContinuousBackupsDescriptionContinuousBackupsStatus | null | undefined>,
		EarliestRestorableDateTime: FormControl<Date | null | undefined>,
		LatestRestorableDateTime: FormControl<Date | null | undefined>,
	}
	export function CreatePointInTimeRecoveryDescriptionFormGroup() {
		return new FormGroup<PointInTimeRecoveryDescriptionFormProperties>({
			PointInTimeRecoveryStatus: new FormControl<ContinuousBackupsDescriptionContinuousBackupsStatus | null | undefined>(undefined),
			EarliestRestorableDateTime: new FormControl<Date | null | undefined>(undefined),
			LatestRestorableDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeContinuousBackupsInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: string;
	}
	export interface DescribeContinuousBackupsInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeContinuousBackupsInputFormGroup() {
		return new FormGroup<DescribeContinuousBackupsInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
		});

	}

	export interface DescribeContributorInsightsOutput {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName?: string | null;

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName?: string | null;
		ContributorInsightsRuleList?: Array<string>;
		ContributorInsightsStatus?: DescribeContributorInsightsOutputContributorInsightsStatus | null;
		LastUpdateDateTime?: Date | null;

		/** Represents a failure a contributor insights operation. */
		FailureException?: FailureException;
	}
	export interface DescribeContributorInsightsOutputFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: FormControl<string | null | undefined>,
		ContributorInsightsStatus: FormControl<DescribeContributorInsightsOutputContributorInsightsStatus | null | undefined>,
		LastUpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeContributorInsightsOutputFormGroup() {
		return new FormGroup<DescribeContributorInsightsOutputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
			ContributorInsightsStatus: new FormControl<DescribeContributorInsightsOutputContributorInsightsStatus | null | undefined>(undefined),
			LastUpdateDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DescribeContributorInsightsOutputContributorInsightsStatus { ENABLING = 0, ENABLED = 1, DISABLING = 2, DISABLED = 3, FAILED = 4 }


	/** Represents a failure a contributor insights operation. */
	export interface FailureException {
		ExceptionName?: string | null;
		ExceptionDescription?: string | null;
	}

	/** Represents a failure a contributor insights operation. */
	export interface FailureExceptionFormProperties {
		ExceptionName: FormControl<string | null | undefined>,
		ExceptionDescription: FormControl<string | null | undefined>,
	}
	export function CreateFailureExceptionFormGroup() {
		return new FormGroup<FailureExceptionFormProperties>({
			ExceptionName: new FormControl<string | null | undefined>(undefined),
			ExceptionDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeContributorInsightsInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: string;

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName?: string | null;
	}
	export interface DescribeContributorInsightsInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeContributorInsightsInputFormGroup() {
		return new FormGroup<DescribeContributorInsightsInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
		});

	}

	export interface DescribeEndpointsResponse {

		/** Required */
		Endpoints: Array<Endpoint>;
	}
	export interface DescribeEndpointsResponseFormProperties {
	}
	export function CreateDescribeEndpointsResponseFormGroup() {
		return new FormGroup<DescribeEndpointsResponseFormProperties>({
		});

	}


	/** An endpoint information details. */
	export interface Endpoint {

		/** Required */
		Address: string;

		/** Required */
		CachePeriodInMinutes: number;
	}

	/** An endpoint information details. */
	export interface EndpointFormProperties {

		/** Required */
		Address: FormControl<string | null | undefined>,

		/** Required */
		CachePeriodInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateEndpointFormGroup() {
		return new FormGroup<EndpointFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CachePeriodInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeEndpointsRequest {
	}
	export interface DescribeEndpointsRequestFormProperties {
	}
	export function CreateDescribeEndpointsRequestFormGroup() {
		return new FormGroup<DescribeEndpointsRequestFormProperties>({
		});

	}

	export interface DescribeGlobalTableOutput {

		/** Contains details about the global table. */
		GlobalTableDescription?: GlobalTableDescription;
	}
	export interface DescribeGlobalTableOutputFormProperties {
	}
	export function CreateDescribeGlobalTableOutputFormGroup() {
		return new FormGroup<DescribeGlobalTableOutputFormProperties>({
		});

	}

	export interface DescribeGlobalTableInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		GlobalTableName: string;
	}
	export interface DescribeGlobalTableInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		GlobalTableName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGlobalTableInputFormGroup() {
		return new FormGroup<DescribeGlobalTableInputFormProperties>({
			GlobalTableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
		});

	}

	export interface GlobalTableNotFoundException {
	}
	export interface GlobalTableNotFoundExceptionFormProperties {
	}
	export function CreateGlobalTableNotFoundExceptionFormGroup() {
		return new FormGroup<GlobalTableNotFoundExceptionFormProperties>({
		});

	}

	export interface DescribeGlobalTableSettingsOutput {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		GlobalTableName?: string | null;
		ReplicaSettings?: Array<ReplicaSettingsDescription>;
	}
	export interface DescribeGlobalTableSettingsOutputFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		GlobalTableName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGlobalTableSettingsOutputFormGroup() {
		return new FormGroup<DescribeGlobalTableSettingsOutputFormProperties>({
			GlobalTableName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
		});

	}


	/** Represents the properties of a replica. */
	export interface ReplicaSettingsDescription {

		/** Required */
		RegionName: string;
		ReplicaStatus?: ReplicaDescriptionReplicaStatus | null;

		/** Contains the details for the read/write capacity mode. */
		ReplicaBillingModeSummary?: BillingModeSummary;

		/** Minimum: 0 */
		ReplicaProvisionedReadCapacityUnits?: number | null;

		/** Represents the auto scaling settings for a global table or global secondary index. */
		ReplicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

		/** Minimum: 0 */
		ReplicaProvisionedWriteCapacityUnits?: number | null;

		/** Represents the auto scaling settings for a global table or global secondary index. */
		ReplicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
		ReplicaGlobalSecondaryIndexSettings?: Array<ReplicaGlobalSecondaryIndexSettingsDescription>;
	}

	/** Represents the properties of a replica. */
	export interface ReplicaSettingsDescriptionFormProperties {

		/** Required */
		RegionName: FormControl<string | null | undefined>,
		ReplicaStatus: FormControl<ReplicaDescriptionReplicaStatus | null | undefined>,

		/** Minimum: 0 */
		ReplicaProvisionedReadCapacityUnits: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		ReplicaProvisionedWriteCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateReplicaSettingsDescriptionFormGroup() {
		return new FormGroup<ReplicaSettingsDescriptionFormProperties>({
			RegionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplicaStatus: new FormControl<ReplicaDescriptionReplicaStatus | null | undefined>(undefined),
			ReplicaProvisionedReadCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			ReplicaProvisionedWriteCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** Represents the auto scaling settings for a global table or global secondary index. */
	export interface AutoScalingSettingsDescription {

		/** Minimum: 1 */
		MinimumUnits?: number | null;

		/** Minimum: 1 */
		MaximumUnits?: number | null;
		AutoScalingDisabled?: boolean | null;
		AutoScalingRoleArn?: string | null;
		ScalingPolicies?: Array<AutoScalingPolicyDescription>;
	}

	/** Represents the auto scaling settings for a global table or global secondary index. */
	export interface AutoScalingSettingsDescriptionFormProperties {

		/** Minimum: 1 */
		MinimumUnits: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		MaximumUnits: FormControl<number | null | undefined>,
		AutoScalingDisabled: FormControl<boolean | null | undefined>,
		AutoScalingRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateAutoScalingSettingsDescriptionFormGroup() {
		return new FormGroup<AutoScalingSettingsDescriptionFormProperties>({
			MinimumUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MaximumUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			AutoScalingDisabled: new FormControl<boolean | null | undefined>(undefined),
			AutoScalingRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the properties of the scaling policy. */
	export interface AutoScalingPolicyDescription {

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: \p{Print}+
		 */
		PolicyName?: string | null;

		/** Represents the properties of a target tracking scaling policy. */
		TargetTrackingScalingPolicyConfiguration?: AutoScalingTargetTrackingScalingPolicyConfigurationDescription;
	}

	/** Represents the properties of the scaling policy. */
	export interface AutoScalingPolicyDescriptionFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: \p{Print}+
		 */
		PolicyName: FormControl<string | null | undefined>,
	}
	export function CreateAutoScalingPolicyDescriptionFormGroup() {
		return new FormGroup<AutoScalingPolicyDescriptionFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
		});

	}


	/** Represents the properties of a target tracking scaling policy. */
	export interface AutoScalingTargetTrackingScalingPolicyConfigurationDescription {
		DisableScaleIn?: boolean | null;
		ScaleInCooldown?: number | null;
		ScaleOutCooldown?: number | null;

		/** Required */
		TargetValue: number;
	}

	/** Represents the properties of a target tracking scaling policy. */
	export interface AutoScalingTargetTrackingScalingPolicyConfigurationDescriptionFormProperties {
		DisableScaleIn: FormControl<boolean | null | undefined>,
		ScaleInCooldown: FormControl<number | null | undefined>,
		ScaleOutCooldown: FormControl<number | null | undefined>,

		/** Required */
		TargetValue: FormControl<number | null | undefined>,
	}
	export function CreateAutoScalingTargetTrackingScalingPolicyConfigurationDescriptionFormGroup() {
		return new FormGroup<AutoScalingTargetTrackingScalingPolicyConfigurationDescriptionFormProperties>({
			DisableScaleIn: new FormControl<boolean | null | undefined>(undefined),
			ScaleInCooldown: new FormControl<number | null | undefined>(undefined),
			ScaleOutCooldown: new FormControl<number | null | undefined>(undefined),
			TargetValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the properties of a global secondary index. */
	export interface ReplicaGlobalSecondaryIndexSettingsDescription {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: string;
		IndexStatus?: GlobalSecondaryIndexDescriptionIndexStatus | null;

		/** Minimum: 1 */
		ProvisionedReadCapacityUnits?: number | null;

		/** Represents the auto scaling settings for a global table or global secondary index. */
		ProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

		/** Minimum: 1 */
		ProvisionedWriteCapacityUnits?: number | null;

		/** Represents the auto scaling settings for a global table or global secondary index. */
		ProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
	}

	/** Represents the properties of a global secondary index. */
	export interface ReplicaGlobalSecondaryIndexSettingsDescriptionFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: FormControl<string | null | undefined>,
		IndexStatus: FormControl<GlobalSecondaryIndexDescriptionIndexStatus | null | undefined>,

		/** Minimum: 1 */
		ProvisionedReadCapacityUnits: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		ProvisionedWriteCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateReplicaGlobalSecondaryIndexSettingsDescriptionFormGroup() {
		return new FormGroup<ReplicaGlobalSecondaryIndexSettingsDescriptionFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
			IndexStatus: new FormControl<GlobalSecondaryIndexDescriptionIndexStatus | null | undefined>(undefined),
			ProvisionedReadCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			ProvisionedWriteCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface DescribeGlobalTableSettingsInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		GlobalTableName: string;
	}
	export interface DescribeGlobalTableSettingsInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		GlobalTableName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGlobalTableSettingsInputFormGroup() {
		return new FormGroup<DescribeGlobalTableSettingsInputFormProperties>({
			GlobalTableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
		});

	}


	/** Represents the output of a <code>DescribeLimits</code> operation. */
	export interface DescribeLimitsOutput {

		/** Minimum: 1 */
		AccountMaxReadCapacityUnits?: number | null;

		/** Minimum: 1 */
		AccountMaxWriteCapacityUnits?: number | null;

		/** Minimum: 1 */
		TableMaxReadCapacityUnits?: number | null;

		/** Minimum: 1 */
		TableMaxWriteCapacityUnits?: number | null;
	}

	/** Represents the output of a <code>DescribeLimits</code> operation. */
	export interface DescribeLimitsOutputFormProperties {

		/** Minimum: 1 */
		AccountMaxReadCapacityUnits: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		AccountMaxWriteCapacityUnits: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		TableMaxReadCapacityUnits: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		TableMaxWriteCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateDescribeLimitsOutputFormGroup() {
		return new FormGroup<DescribeLimitsOutputFormProperties>({
			AccountMaxReadCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			AccountMaxWriteCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			TableMaxReadCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			TableMaxWriteCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** Represents the input of a <code>DescribeLimits</code> operation. Has no content. */
	export interface DescribeLimitsInput {
	}

	/** Represents the input of a <code>DescribeLimits</code> operation. Has no content. */
	export interface DescribeLimitsInputFormProperties {
	}
	export function CreateDescribeLimitsInputFormGroup() {
		return new FormGroup<DescribeLimitsInputFormProperties>({
		});

	}


	/** Represents the output of a <code>DescribeTable</code> operation. */
	export interface DescribeTableOutput {

		/** Represents the properties of a table. */
		Table?: TableDescription;
	}

	/** Represents the output of a <code>DescribeTable</code> operation. */
	export interface DescribeTableOutputFormProperties {
	}
	export function CreateDescribeTableOutputFormGroup() {
		return new FormGroup<DescribeTableOutputFormProperties>({
		});

	}


	/** Represents the input of a <code>DescribeTable</code> operation. */
	export interface DescribeTableInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: string;
	}

	/** Represents the input of a <code>DescribeTable</code> operation. */
	export interface DescribeTableInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTableInputFormGroup() {
		return new FormGroup<DescribeTableInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
		});

	}

	export interface DescribeTableReplicaAutoScalingOutput {

		/** Represents the auto scaling configuration for a global table. */
		TableAutoScalingDescription?: TableAutoScalingDescription;
	}
	export interface DescribeTableReplicaAutoScalingOutputFormProperties {
	}
	export function CreateDescribeTableReplicaAutoScalingOutputFormGroup() {
		return new FormGroup<DescribeTableReplicaAutoScalingOutputFormProperties>({
		});

	}


	/** Represents the auto scaling configuration for a global table. */
	export interface TableAutoScalingDescription {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName?: string | null;
		TableStatus?: TableDescriptionTableStatus | null;
		Replicas?: Array<ReplicaAutoScalingDescription>;
	}

	/** Represents the auto scaling configuration for a global table. */
	export interface TableAutoScalingDescriptionFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,
		TableStatus: FormControl<TableDescriptionTableStatus | null | undefined>,
	}
	export function CreateTableAutoScalingDescriptionFormGroup() {
		return new FormGroup<TableAutoScalingDescriptionFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
			TableStatus: new FormControl<TableDescriptionTableStatus | null | undefined>(undefined),
		});

	}


	/** Represents the auto scaling settings of the replica. */
	export interface ReplicaAutoScalingDescription {
		RegionName?: string | null;
		GlobalSecondaryIndexes?: Array<ReplicaGlobalSecondaryIndexAutoScalingDescription>;

		/** Represents the auto scaling settings for a global table or global secondary index. */
		ReplicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

		/** Represents the auto scaling settings for a global table or global secondary index. */
		ReplicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
		ReplicaStatus?: ReplicaDescriptionReplicaStatus | null;
	}

	/** Represents the auto scaling settings of the replica. */
	export interface ReplicaAutoScalingDescriptionFormProperties {
		RegionName: FormControl<string | null | undefined>,
		ReplicaStatus: FormControl<ReplicaDescriptionReplicaStatus | null | undefined>,
	}
	export function CreateReplicaAutoScalingDescriptionFormGroup() {
		return new FormGroup<ReplicaAutoScalingDescriptionFormProperties>({
			RegionName: new FormControl<string | null | undefined>(undefined),
			ReplicaStatus: new FormControl<ReplicaDescriptionReplicaStatus | null | undefined>(undefined),
		});

	}


	/** Represents the auto scaling configuration for a replica global secondary index. */
	export interface ReplicaGlobalSecondaryIndexAutoScalingDescription {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName?: string | null;
		IndexStatus?: GlobalSecondaryIndexDescriptionIndexStatus | null;

		/** Represents the auto scaling settings for a global table or global secondary index. */
		ProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

		/** Represents the auto scaling settings for a global table or global secondary index. */
		ProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
	}

	/** Represents the auto scaling configuration for a replica global secondary index. */
	export interface ReplicaGlobalSecondaryIndexAutoScalingDescriptionFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: FormControl<string | null | undefined>,
		IndexStatus: FormControl<GlobalSecondaryIndexDescriptionIndexStatus | null | undefined>,
	}
	export function CreateReplicaGlobalSecondaryIndexAutoScalingDescriptionFormGroup() {
		return new FormGroup<ReplicaGlobalSecondaryIndexAutoScalingDescriptionFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
			IndexStatus: new FormControl<GlobalSecondaryIndexDescriptionIndexStatus | null | undefined>(undefined),
		});

	}

	export interface DescribeTableReplicaAutoScalingInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: string;
	}
	export interface DescribeTableReplicaAutoScalingInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTableReplicaAutoScalingInputFormGroup() {
		return new FormGroup<DescribeTableReplicaAutoScalingInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
		});

	}

	export interface DescribeTimeToLiveOutput {

		/** The description of the Time to Live (TTL) status on the specified table. */
		TimeToLiveDescription?: TimeToLiveDescription;
	}
	export interface DescribeTimeToLiveOutputFormProperties {
	}
	export function CreateDescribeTimeToLiveOutputFormGroup() {
		return new FormGroup<DescribeTimeToLiveOutputFormProperties>({
		});

	}

	export interface DescribeTimeToLiveInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: string;
	}
	export interface DescribeTimeToLiveInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTimeToLiveInputFormGroup() {
		return new FormGroup<DescribeTimeToLiveInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
		});

	}


	/** Represents the output of a <code>GetItem</code> operation. */
	export interface GetItemOutput {
		Item?: AttributeMap;

		/** The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>. */
		ConsumedCapacity?: ConsumedCapacity;
	}

	/** Represents the output of a <code>GetItem</code> operation. */
	export interface GetItemOutputFormProperties {
	}
	export function CreateGetItemOutputFormGroup() {
		return new FormGroup<GetItemOutputFormProperties>({
		});

	}


	/** Represents the input of a <code>GetItem</code> operation. */
	export interface GetItemInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: string;

		/** Required */
		Key: Key;

		/** Minimum items: 1 */
		AttributesToGet?: Array<string>;
		ConsistentRead?: boolean | null;

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchGetItemInputReturnConsumedCapacity | null;
		ProjectionExpression?: string | null;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
	}

	/** Represents the input of a <code>GetItem</code> operation. */
	export interface GetItemInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,
		ConsistentRead: FormControl<boolean | null | undefined>,

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity: FormControl<BatchGetItemInputReturnConsumedCapacity | null | undefined>,
		ProjectionExpression: FormControl<string | null | undefined>,
	}
	export function CreateGetItemInputFormGroup() {
		return new FormGroup<GetItemInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
			ConsistentRead: new FormControl<boolean | null | undefined>(undefined),
			ReturnConsumedCapacity: new FormControl<BatchGetItemInputReturnConsumedCapacity | null | undefined>(undefined),
			ProjectionExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBackupsOutput {
		BackupSummaries?: Array<BackupSummary>;

		/**
		 * Max length: 1024
		 * Min length: 37
		 */
		LastEvaluatedBackupArn?: string | null;
	}
	export interface ListBackupsOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 37
		 */
		LastEvaluatedBackupArn: FormControl<string | null | undefined>,
	}
	export function CreateListBackupsOutputFormGroup() {
		return new FormGroup<ListBackupsOutputFormProperties>({
			LastEvaluatedBackupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(37)]),
		});

	}


	/** Contains details for the backup. */
	export interface BackupSummary {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName?: string | null;

		/** Pattern: [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12} */
		TableId?: string | null;
		TableArn?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 37
		 */
		BackupArn?: string | null;

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		BackupName?: string | null;
		BackupCreationDateTime?: Date | null;
		BackupExpiryDateTime?: Date | null;
		BackupStatus?: BackupDetailsBackupStatus | null;
		BackupType?: BackupDetailsBackupType | null;

		/** Minimum: 0 */
		BackupSizeBytes?: number | null;
	}

	/** Contains details for the backup. */
	export interface BackupSummaryFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,

		/** Pattern: [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12} */
		TableId: FormControl<string | null | undefined>,
		TableArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 37
		 */
		BackupArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		BackupName: FormControl<string | null | undefined>,
		BackupCreationDateTime: FormControl<Date | null | undefined>,
		BackupExpiryDateTime: FormControl<Date | null | undefined>,
		BackupStatus: FormControl<BackupDetailsBackupStatus | null | undefined>,
		BackupType: FormControl<BackupDetailsBackupType | null | undefined>,

		/** Minimum: 0 */
		BackupSizeBytes: FormControl<number | null | undefined>,
	}
	export function CreateBackupSummaryFormGroup() {
		return new FormGroup<BackupSummaryFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
			TableId: new FormControl<string | null | undefined>(undefined),
			TableArn: new FormControl<string | null | undefined>(undefined),
			BackupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(37)]),
			BackupName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
			BackupCreationDateTime: new FormControl<Date | null | undefined>(undefined),
			BackupExpiryDateTime: new FormControl<Date | null | undefined>(undefined),
			BackupStatus: new FormControl<BackupDetailsBackupStatus | null | undefined>(undefined),
			BackupType: new FormControl<BackupDetailsBackupType | null | undefined>(undefined),
			BackupSizeBytes: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface ListBackupsInput {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit?: number | null;
		TimeRangeLowerBound?: Date | null;
		TimeRangeUpperBound?: Date | null;

		/**
		 * Max length: 1024
		 * Min length: 37
		 */
		ExclusiveStartBackupArn?: string | null;
		BackupType?: ListBackupsInputBackupType | null;
	}
	export interface ListBackupsInputFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
		TimeRangeLowerBound: FormControl<Date | null | undefined>,
		TimeRangeUpperBound: FormControl<Date | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 37
		 */
		ExclusiveStartBackupArn: FormControl<string | null | undefined>,
		BackupType: FormControl<ListBackupsInputBackupType | null | undefined>,
	}
	export function CreateListBackupsInputFormGroup() {
		return new FormGroup<ListBackupsInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			TimeRangeLowerBound: new FormControl<Date | null | undefined>(undefined),
			TimeRangeUpperBound: new FormControl<Date | null | undefined>(undefined),
			ExclusiveStartBackupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(37)]),
			BackupType: new FormControl<ListBackupsInputBackupType | null | undefined>(undefined),
		});

	}

	export enum ListBackupsInputBackupType { USER = 0, SYSTEM = 1, AWS_BACKUP = 2, ALL = 3 }

	export interface ListContributorInsightsOutput {
		ContributorInsightsSummaries?: Array<ContributorInsightsSummary>;
		NextToken?: string | null;
	}
	export interface ListContributorInsightsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListContributorInsightsOutputFormGroup() {
		return new FormGroup<ListContributorInsightsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Contributor Insights summary entry.. */
	export interface ContributorInsightsSummary {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName?: string | null;

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName?: string | null;
		ContributorInsightsStatus?: DescribeContributorInsightsOutputContributorInsightsStatus | null;
	}

	/** Represents a Contributor Insights summary entry.. */
	export interface ContributorInsightsSummaryFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: FormControl<string | null | undefined>,
		ContributorInsightsStatus: FormControl<DescribeContributorInsightsOutputContributorInsightsStatus | null | undefined>,
	}
	export function CreateContributorInsightsSummaryFormGroup() {
		return new FormGroup<ContributorInsightsSummaryFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
			ContributorInsightsStatus: new FormControl<DescribeContributorInsightsOutputContributorInsightsStatus | null | undefined>(undefined),
		});

	}

	export interface ListContributorInsightsInput {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName?: string | null;
		NextToken?: string | null;

		/** Maximum: 100 */
		MaxResults?: number | null;
	}
	export interface ListContributorInsightsInputFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Maximum: 100 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListContributorInsightsInputFormGroup() {
		return new FormGroup<ListContributorInsightsInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.max(100)]),
		});

	}

	export interface ListGlobalTablesOutput {
		GlobalTables?: Array<GlobalTable>;

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		LastEvaluatedGlobalTableName?: string | null;
	}
	export interface ListGlobalTablesOutputFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		LastEvaluatedGlobalTableName: FormControl<string | null | undefined>,
	}
	export function CreateListGlobalTablesOutputFormGroup() {
		return new FormGroup<ListGlobalTablesOutputFormProperties>({
			LastEvaluatedGlobalTableName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
		});

	}


	/** Represents the properties of a global table. */
	export interface GlobalTable {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		GlobalTableName?: string | null;
		ReplicationGroup?: Array<Replica>;
	}

	/** Represents the properties of a global table. */
	export interface GlobalTableFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		GlobalTableName: FormControl<string | null | undefined>,
	}
	export function CreateGlobalTableFormGroup() {
		return new FormGroup<GlobalTableFormProperties>({
			GlobalTableName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
		});

	}

	export interface ListGlobalTablesInput {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ExclusiveStartGlobalTableName?: string | null;

		/** Minimum: 1 */
		Limit?: number | null;
		RegionName?: string | null;
	}
	export interface ListGlobalTablesInputFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ExclusiveStartGlobalTableName: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		Limit: FormControl<number | null | undefined>,
		RegionName: FormControl<string | null | undefined>,
	}
	export function CreateListGlobalTablesInputFormGroup() {
		return new FormGroup<ListGlobalTablesInputFormProperties>({
			ExclusiveStartGlobalTableName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			RegionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>ListTables</code> operation. */
	export interface ListTablesOutput {
		TableNames?: Array<string>;

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		LastEvaluatedTableName?: string | null;
	}

	/** Represents the output of a <code>ListTables</code> operation. */
	export interface ListTablesOutputFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		LastEvaluatedTableName: FormControl<string | null | undefined>,
	}
	export function CreateListTablesOutputFormGroup() {
		return new FormGroup<ListTablesOutputFormProperties>({
			LastEvaluatedTableName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
		});

	}


	/** Represents the input of a <code>ListTables</code> operation. */
	export interface ListTablesInput {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ExclusiveStartTableName?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit?: number | null;
	}

	/** Represents the input of a <code>ListTables</code> operation. */
	export interface ListTablesInputFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ExclusiveStartTableName: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListTablesInputFormGroup() {
		return new FormGroup<ListTablesInputFormProperties>({
			ExclusiveStartTableName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListTagsOfResourceOutput {
		Tags?: Array<Tag>;
		NextToken?: string | null;
	}
	export interface ListTagsOfResourceOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsOfResourceOutputFormGroup() {
		return new FormGroup<ListTagsOfResourceOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsOfResourceInput {

		/**
		 * Required
		 * Max length: 1283
		 * Min length: 1
		 */
		ResourceArn: string;
		NextToken?: string | null;
	}
	export interface ListTagsOfResourceInputFormProperties {

		/**
		 * Required
		 * Max length: 1283
		 * Min length: 1
		 */
		ResourceArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsOfResourceInputFormGroup() {
		return new FormGroup<ListTagsOfResourceInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1283), Validators.minLength(1)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>PutItem</code> operation. */
	export interface PutItemOutput {
		Attributes?: AttributeMap;

		/** The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>. */
		ConsumedCapacity?: ConsumedCapacity;

		/** Information about item collections, if any, that were affected by the operation. <code>ItemCollectionMetrics</code> is only returned if the request asked for it. If the table does not have any local secondary indexes, this information is not returned in the response. */
		ItemCollectionMetrics?: ItemCollectionMetrics;
	}

	/** Represents the output of a <code>PutItem</code> operation. */
	export interface PutItemOutputFormProperties {
	}
	export function CreatePutItemOutputFormGroup() {
		return new FormGroup<PutItemOutputFormProperties>({
		});

	}


	/** Represents the input of a <code>PutItem</code> operation. */
	export interface PutItemInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: string;

		/** Required */
		Item: PutItemInputAttributeMap;
		Expected?: ExpectedAttributeMap;
		ReturnValues?: DeleteItemInputReturnValues | null;

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchGetItemInputReturnConsumedCapacity | null;
		ReturnItemCollectionMetrics?: BatchWriteItemInputReturnItemCollectionMetrics | null;
		ConditionalOperator?: DeleteItemInputConditionalOperator | null;
		ConditionExpression?: string | null;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
	}

	/** Represents the input of a <code>PutItem</code> operation. */
	export interface PutItemInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,
		ReturnValues: FormControl<DeleteItemInputReturnValues | null | undefined>,

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity: FormControl<BatchGetItemInputReturnConsumedCapacity | null | undefined>,
		ReturnItemCollectionMetrics: FormControl<BatchWriteItemInputReturnItemCollectionMetrics | null | undefined>,
		ConditionalOperator: FormControl<DeleteItemInputConditionalOperator | null | undefined>,
		ConditionExpression: FormControl<string | null | undefined>,
	}
	export function CreatePutItemInputFormGroup() {
		return new FormGroup<PutItemInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
			ReturnValues: new FormControl<DeleteItemInputReturnValues | null | undefined>(undefined),
			ReturnConsumedCapacity: new FormControl<BatchGetItemInputReturnConsumedCapacity | null | undefined>(undefined),
			ReturnItemCollectionMetrics: new FormControl<BatchWriteItemInputReturnItemCollectionMetrics | null | undefined>(undefined),
			ConditionalOperator: new FormControl<DeleteItemInputConditionalOperator | null | undefined>(undefined),
			ConditionExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutItemInputAttributeMap {
	}
	export interface PutItemInputAttributeMapFormProperties {
	}
	export function CreatePutItemInputAttributeMapFormGroup() {
		return new FormGroup<PutItemInputAttributeMapFormProperties>({
		});

	}


	/** Represents the output of a <code>Query</code> operation. */
	export interface QueryOutput {
		Items?: Array<AttributeMap>;
		Count?: number | null;
		ScannedCount?: number | null;
		LastEvaluatedKey?: Key;

		/** The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>. */
		ConsumedCapacity?: ConsumedCapacity;
	}

	/** Represents the output of a <code>Query</code> operation. */
	export interface QueryOutputFormProperties {
		Count: FormControl<number | null | undefined>,
		ScannedCount: FormControl<number | null | undefined>,
	}
	export function CreateQueryOutputFormGroup() {
		return new FormGroup<QueryOutputFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			ScannedCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>Query</code> operation. */
	export interface QueryInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: string;

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName?: string | null;
		Select?: QueryInputSelect | null;

		/** Minimum items: 1 */
		AttributesToGet?: Array<string>;

		/** Minimum: 1 */
		Limit?: number | null;
		ConsistentRead?: boolean | null;
		KeyConditions?: KeyConditions;
		QueryFilter?: FilterConditionMap;
		ConditionalOperator?: DeleteItemInputConditionalOperator | null;
		ScanIndexForward?: boolean | null;
		ExclusiveStartKey?: Key;

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchGetItemInputReturnConsumedCapacity | null;
		ProjectionExpression?: string | null;
		FilterExpression?: string | null;
		KeyConditionExpression?: string | null;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
	}

	/** Represents the input of a <code>Query</code> operation. */
	export interface QueryInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: FormControl<string | null | undefined>,
		Select: FormControl<QueryInputSelect | null | undefined>,

		/** Minimum: 1 */
		Limit: FormControl<number | null | undefined>,
		ConsistentRead: FormControl<boolean | null | undefined>,
		ConditionalOperator: FormControl<DeleteItemInputConditionalOperator | null | undefined>,
		ScanIndexForward: FormControl<boolean | null | undefined>,

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity: FormControl<BatchGetItemInputReturnConsumedCapacity | null | undefined>,
		ProjectionExpression: FormControl<string | null | undefined>,
		FilterExpression: FormControl<string | null | undefined>,
		KeyConditionExpression: FormControl<string | null | undefined>,
	}
	export function CreateQueryInputFormGroup() {
		return new FormGroup<QueryInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
			Select: new FormControl<QueryInputSelect | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			ConsistentRead: new FormControl<boolean | null | undefined>(undefined),
			ConditionalOperator: new FormControl<DeleteItemInputConditionalOperator | null | undefined>(undefined),
			ScanIndexForward: new FormControl<boolean | null | undefined>(undefined),
			ReturnConsumedCapacity: new FormControl<BatchGetItemInputReturnConsumedCapacity | null | undefined>(undefined),
			ProjectionExpression: new FormControl<string | null | undefined>(undefined),
			FilterExpression: new FormControl<string | null | undefined>(undefined),
			KeyConditionExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum QueryInputSelect { ALL_ATTRIBUTES = 0, ALL_PROJECTED_ATTRIBUTES = 1, SPECIFIC_ATTRIBUTES = 2, COUNT = 3 }

	export interface KeyConditions {
	}
	export interface KeyConditionsFormProperties {
	}
	export function CreateKeyConditionsFormGroup() {
		return new FormGroup<KeyConditionsFormProperties>({
		});

	}

	export interface FilterConditionMap {
	}
	export interface FilterConditionMapFormProperties {
	}
	export function CreateFilterConditionMapFormGroup() {
		return new FormGroup<FilterConditionMapFormProperties>({
		});

	}

	export interface RestoreTableFromBackupOutput {

		/** Represents the properties of a table. */
		TableDescription?: TableDescription;
	}
	export interface RestoreTableFromBackupOutputFormProperties {
	}
	export function CreateRestoreTableFromBackupOutputFormGroup() {
		return new FormGroup<RestoreTableFromBackupOutputFormProperties>({
		});

	}

	export interface RestoreTableFromBackupInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TargetTableName: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 37
		 */
		BackupArn: string;
		BillingModeOverride?: BillingModeSummaryBillingMode | null;
		GlobalSecondaryIndexOverride?: Array<GlobalSecondaryIndex>;
		LocalSecondaryIndexOverride?: Array<LocalSecondaryIndex>;

		/** <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
		ProvisionedThroughputOverride?: ProvisionedThroughput;

		/** Represents the settings used to enable server-side encryption. */
		SSESpecificationOverride?: SSESpecification;
	}
	export interface RestoreTableFromBackupInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TargetTableName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 37
		 */
		BackupArn: FormControl<string | null | undefined>,
		BillingModeOverride: FormControl<BillingModeSummaryBillingMode | null | undefined>,
	}
	export function CreateRestoreTableFromBackupInputFormGroup() {
		return new FormGroup<RestoreTableFromBackupInputFormProperties>({
			TargetTableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
			BackupArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(37)]),
			BillingModeOverride: new FormControl<BillingModeSummaryBillingMode | null | undefined>(undefined),
		});

	}

	export interface TableAlreadyExistsException {
	}
	export interface TableAlreadyExistsExceptionFormProperties {
	}
	export function CreateTableAlreadyExistsExceptionFormGroup() {
		return new FormGroup<TableAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface RestoreTableToPointInTimeOutput {

		/** Represents the properties of a table. */
		TableDescription?: TableDescription;
	}
	export interface RestoreTableToPointInTimeOutputFormProperties {
	}
	export function CreateRestoreTableToPointInTimeOutputFormGroup() {
		return new FormGroup<RestoreTableToPointInTimeOutputFormProperties>({
		});

	}

	export interface RestoreTableToPointInTimeInput {
		SourceTableArn?: string | null;

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		SourceTableName?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TargetTableName: string;
		UseLatestRestorableTime?: boolean | null;
		RestoreDateTime?: Date | null;
		BillingModeOverride?: BillingModeSummaryBillingMode | null;
		GlobalSecondaryIndexOverride?: Array<GlobalSecondaryIndex>;
		LocalSecondaryIndexOverride?: Array<LocalSecondaryIndex>;

		/** <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
		ProvisionedThroughputOverride?: ProvisionedThroughput;

		/** Represents the settings used to enable server-side encryption. */
		SSESpecificationOverride?: SSESpecification;
	}
	export interface RestoreTableToPointInTimeInputFormProperties {
		SourceTableArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		SourceTableName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TargetTableName: FormControl<string | null | undefined>,
		UseLatestRestorableTime: FormControl<boolean | null | undefined>,
		RestoreDateTime: FormControl<Date | null | undefined>,
		BillingModeOverride: FormControl<BillingModeSummaryBillingMode | null | undefined>,
	}
	export function CreateRestoreTableToPointInTimeInputFormGroup() {
		return new FormGroup<RestoreTableToPointInTimeInputFormProperties>({
			SourceTableArn: new FormControl<string | null | undefined>(undefined),
			SourceTableName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
			TargetTableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
			UseLatestRestorableTime: new FormControl<boolean | null | undefined>(undefined),
			RestoreDateTime: new FormControl<Date | null | undefined>(undefined),
			BillingModeOverride: new FormControl<BillingModeSummaryBillingMode | null | undefined>(undefined),
		});

	}

	export interface InvalidRestoreTimeException {
	}
	export interface InvalidRestoreTimeExceptionFormProperties {
	}
	export function CreateInvalidRestoreTimeExceptionFormGroup() {
		return new FormGroup<InvalidRestoreTimeExceptionFormProperties>({
		});

	}

	export interface PointInTimeRecoveryUnavailableException {
	}
	export interface PointInTimeRecoveryUnavailableExceptionFormProperties {
	}
	export function CreatePointInTimeRecoveryUnavailableExceptionFormGroup() {
		return new FormGroup<PointInTimeRecoveryUnavailableExceptionFormProperties>({
		});

	}


	/** Represents the output of a <code>Scan</code> operation. */
	export interface ScanOutput {
		Items?: Array<AttributeMap>;
		Count?: number | null;
		ScannedCount?: number | null;
		LastEvaluatedKey?: Key;

		/** The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>. */
		ConsumedCapacity?: ConsumedCapacity;
	}

	/** Represents the output of a <code>Scan</code> operation. */
	export interface ScanOutputFormProperties {
		Count: FormControl<number | null | undefined>,
		ScannedCount: FormControl<number | null | undefined>,
	}
	export function CreateScanOutputFormGroup() {
		return new FormGroup<ScanOutputFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			ScannedCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>Scan</code> operation. */
	export interface ScanInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: string;

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName?: string | null;

		/** Minimum items: 1 */
		AttributesToGet?: Array<string>;

		/** Minimum: 1 */
		Limit?: number | null;
		Select?: QueryInputSelect | null;
		ScanFilter?: FilterConditionMap;
		ConditionalOperator?: DeleteItemInputConditionalOperator | null;
		ExclusiveStartKey?: Key;

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchGetItemInputReturnConsumedCapacity | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000000
		 */
		TotalSegments?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 999999
		 */
		Segment?: number | null;
		ProjectionExpression?: string | null;
		FilterExpression?: string | null;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
		ConsistentRead?: boolean | null;
	}

	/** Represents the input of a <code>Scan</code> operation. */
	export interface ScanInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		Limit: FormControl<number | null | undefined>,
		Select: FormControl<QueryInputSelect | null | undefined>,
		ConditionalOperator: FormControl<DeleteItemInputConditionalOperator | null | undefined>,

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity: FormControl<BatchGetItemInputReturnConsumedCapacity | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000000
		 */
		TotalSegments: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 999999
		 */
		Segment: FormControl<number | null | undefined>,
		ProjectionExpression: FormControl<string | null | undefined>,
		FilterExpression: FormControl<string | null | undefined>,
		ConsistentRead: FormControl<boolean | null | undefined>,
	}
	export function CreateScanInputFormGroup() {
		return new FormGroup<ScanInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			Select: new FormControl<QueryInputSelect | null | undefined>(undefined),
			ConditionalOperator: new FormControl<DeleteItemInputConditionalOperator | null | undefined>(undefined),
			ReturnConsumedCapacity: new FormControl<BatchGetItemInputReturnConsumedCapacity | null | undefined>(undefined),
			TotalSegments: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000000)]),
			Segment: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(999999)]),
			ProjectionExpression: new FormControl<string | null | undefined>(undefined),
			FilterExpression: new FormControl<string | null | undefined>(undefined),
			ConsistentRead: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TagResourceInput {

		/**
		 * Required
		 * Max length: 1283
		 * Min length: 1
		 */
		ResourceArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceInputFormProperties {

		/**
		 * Required
		 * Max length: 1283
		 * Min length: 1
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1283), Validators.minLength(1)]),
		});

	}

	export interface TransactGetItemsOutput {
		ConsumedCapacity?: Array<ConsumedCapacity>;

		/**
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		Responses?: Array<ItemResponse>;
	}
	export interface TransactGetItemsOutputFormProperties {
	}
	export function CreateTransactGetItemsOutputFormGroup() {
		return new FormGroup<TransactGetItemsOutputFormProperties>({
		});

	}


	/** Details for the requested item. */
	export interface ItemResponse {
		Item?: AttributeMap;
	}

	/** Details for the requested item. */
	export interface ItemResponseFormProperties {
	}
	export function CreateItemResponseFormGroup() {
		return new FormGroup<ItemResponseFormProperties>({
		});

	}

	export interface TransactGetItemsInput {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		TransactItems: Array<TransactGetItem>;

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchGetItemInputReturnConsumedCapacity | null;
	}
	export interface TransactGetItemsInputFormProperties {

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity: FormControl<BatchGetItemInputReturnConsumedCapacity | null | undefined>,
	}
	export function CreateTransactGetItemsInputFormGroup() {
		return new FormGroup<TransactGetItemsInputFormProperties>({
			ReturnConsumedCapacity: new FormControl<BatchGetItemInputReturnConsumedCapacity | null | undefined>(undefined),
		});

	}


	/** Specifies an item to be retrieved as part of the transaction. */
	export interface TransactGetItem {

		/**
		 * Specifies an item and related attribute values to retrieve in a <code>TransactGetItem</code> object.
		 * Required
		 */
		Get: Get;
	}

	/** Specifies an item to be retrieved as part of the transaction. */
	export interface TransactGetItemFormProperties {
	}
	export function CreateTransactGetItemFormGroup() {
		return new FormGroup<TransactGetItemFormProperties>({
		});

	}


	/** Specifies an item and related attribute values to retrieve in a <code>TransactGetItem</code> object. */
	export interface Get {

		/** Required */
		Key: Key;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: string;
		ProjectionExpression?: string | null;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
	}

	/** Specifies an item and related attribute values to retrieve in a <code>TransactGetItem</code> object. */
	export interface GetFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,
		ProjectionExpression: FormControl<string | null | undefined>,
	}
	export function CreateGetFormGroup() {
		return new FormGroup<GetFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
			ProjectionExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TransactionCanceledException {
	}
	export interface TransactionCanceledExceptionFormProperties {
	}
	export function CreateTransactionCanceledExceptionFormGroup() {
		return new FormGroup<TransactionCanceledExceptionFormProperties>({
		});

	}

	export interface TransactWriteItemsOutput {
		ConsumedCapacity?: Array<ConsumedCapacity>;
		ItemCollectionMetrics?: ItemCollectionMetricsPerTable;
	}
	export interface TransactWriteItemsOutputFormProperties {
	}
	export function CreateTransactWriteItemsOutputFormGroup() {
		return new FormGroup<TransactWriteItemsOutputFormProperties>({
		});

	}

	export interface TransactWriteItemsInput {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		TransactItems: Array<TransactWriteItem>;

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchGetItemInputReturnConsumedCapacity | null;
		ReturnItemCollectionMetrics?: BatchWriteItemInputReturnItemCollectionMetrics | null;

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;
	}
	export interface TransactWriteItemsInputFormProperties {

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity: FormControl<BatchGetItemInputReturnConsumedCapacity | null | undefined>,
		ReturnItemCollectionMetrics: FormControl<BatchWriteItemInputReturnItemCollectionMetrics | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateTransactWriteItemsInputFormGroup() {
		return new FormGroup<TransactWriteItemsInputFormProperties>({
			ReturnConsumedCapacity: new FormControl<BatchGetItemInputReturnConsumedCapacity | null | undefined>(undefined),
			ReturnItemCollectionMetrics: new FormControl<BatchWriteItemInputReturnItemCollectionMetrics | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(36), Validators.minLength(1)]),
		});

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

	/** A list of requests that can perform update, put, delete, or check operations on multiple items in one or more tables atomically. */
	export interface TransactWriteItemFormProperties {
	}
	export function CreateTransactWriteItemFormGroup() {
		return new FormGroup<TransactWriteItemFormProperties>({
		});

	}


	/** Represents a request to perform a check that an item exists or to check the condition of specific attributes of the item. */
	export interface ConditionCheck {

		/** Required */
		Key: Key;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: string;

		/** Required */
		ConditionExpression: string;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
		ReturnValuesOnConditionCheckFailure?: ConditionCheckReturnValuesOnConditionCheckFailure | null;
	}

	/** Represents a request to perform a check that an item exists or to check the condition of specific attributes of the item. */
	export interface ConditionCheckFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,

		/** Required */
		ConditionExpression: FormControl<string | null | undefined>,
		ReturnValuesOnConditionCheckFailure: FormControl<ConditionCheckReturnValuesOnConditionCheckFailure | null | undefined>,
	}
	export function CreateConditionCheckFormGroup() {
		return new FormGroup<ConditionCheckFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
			ConditionExpression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReturnValuesOnConditionCheckFailure: new FormControl<ConditionCheckReturnValuesOnConditionCheckFailure | null | undefined>(undefined),
		});

	}

	export enum ConditionCheckReturnValuesOnConditionCheckFailure { ALL_OLD = 0, NONE = 1 }


	/** Represents a request to perform a <code>PutItem</code> operation. */
	export interface Put {

		/** Required */
		Item: PutItemInputAttributeMap;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: string;
		ConditionExpression?: string | null;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
		ReturnValuesOnConditionCheckFailure?: ConditionCheckReturnValuesOnConditionCheckFailure | null;
	}

	/** Represents a request to perform a <code>PutItem</code> operation. */
	export interface PutFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,
		ConditionExpression: FormControl<string | null | undefined>,
		ReturnValuesOnConditionCheckFailure: FormControl<ConditionCheckReturnValuesOnConditionCheckFailure | null | undefined>,
	}
	export function CreatePutFormGroup() {
		return new FormGroup<PutFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
			ConditionExpression: new FormControl<string | null | undefined>(undefined),
			ReturnValuesOnConditionCheckFailure: new FormControl<ConditionCheckReturnValuesOnConditionCheckFailure | null | undefined>(undefined),
		});

	}


	/** Represents a request to perform a <code>DeleteItem</code> operation. */
	export interface Delete {

		/** Required */
		Key: Key;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: string;
		ConditionExpression?: string | null;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
		ReturnValuesOnConditionCheckFailure?: ConditionCheckReturnValuesOnConditionCheckFailure | null;
	}

	/** Represents a request to perform a <code>DeleteItem</code> operation. */
	export interface DeleteFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,
		ConditionExpression: FormControl<string | null | undefined>,
		ReturnValuesOnConditionCheckFailure: FormControl<ConditionCheckReturnValuesOnConditionCheckFailure | null | undefined>,
	}
	export function CreateDeleteFormGroup() {
		return new FormGroup<DeleteFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
			ConditionExpression: new FormControl<string | null | undefined>(undefined),
			ReturnValuesOnConditionCheckFailure: new FormControl<ConditionCheckReturnValuesOnConditionCheckFailure | null | undefined>(undefined),
		});

	}


	/** Represents a request to perform an <code>UpdateItem</code> operation. */
	export interface Update {

		/** Required */
		Key: Key;

		/** Required */
		UpdateExpression: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: string;
		ConditionExpression?: string | null;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
		ReturnValuesOnConditionCheckFailure?: ConditionCheckReturnValuesOnConditionCheckFailure | null;
	}

	/** Represents a request to perform an <code>UpdateItem</code> operation. */
	export interface UpdateFormProperties {

		/** Required */
		UpdateExpression: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,
		ConditionExpression: FormControl<string | null | undefined>,
		ReturnValuesOnConditionCheckFailure: FormControl<ConditionCheckReturnValuesOnConditionCheckFailure | null | undefined>,
	}
	export function CreateUpdateFormGroup() {
		return new FormGroup<UpdateFormProperties>({
			UpdateExpression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
			ConditionExpression: new FormControl<string | null | undefined>(undefined),
			ReturnValuesOnConditionCheckFailure: new FormControl<ConditionCheckReturnValuesOnConditionCheckFailure | null | undefined>(undefined),
		});

	}

	export interface TransactionInProgressException {
	}
	export interface TransactionInProgressExceptionFormProperties {
	}
	export function CreateTransactionInProgressExceptionFormGroup() {
		return new FormGroup<TransactionInProgressExceptionFormProperties>({
		});

	}

	export interface IdempotentParameterMismatchException {
	}
	export interface IdempotentParameterMismatchExceptionFormProperties {
	}
	export function CreateIdempotentParameterMismatchExceptionFormGroup() {
		return new FormGroup<IdempotentParameterMismatchExceptionFormProperties>({
		});

	}

	export interface UntagResourceInput {

		/**
		 * Required
		 * Max length: 1283
		 * Min length: 1
		 */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceInputFormProperties {

		/**
		 * Required
		 * Max length: 1283
		 * Min length: 1
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1283), Validators.minLength(1)]),
		});

	}

	export interface UpdateContinuousBackupsOutput {

		/** Represents the continuous backups and point in time recovery settings on the table. */
		ContinuousBackupsDescription?: ContinuousBackupsDescription;
	}
	export interface UpdateContinuousBackupsOutputFormProperties {
	}
	export function CreateUpdateContinuousBackupsOutputFormGroup() {
		return new FormGroup<UpdateContinuousBackupsOutputFormProperties>({
		});

	}

	export interface UpdateContinuousBackupsInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: string;

		/**
		 * Represents the settings used to enable point in time recovery.
		 * Required
		 */
		PointInTimeRecoverySpecification: PointInTimeRecoverySpecification;
	}
	export interface UpdateContinuousBackupsInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateContinuousBackupsInputFormGroup() {
		return new FormGroup<UpdateContinuousBackupsInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
		});

	}


	/** Represents the settings used to enable point in time recovery. */
	export interface PointInTimeRecoverySpecification {

		/** Required */
		PointInTimeRecoveryEnabled: boolean;
	}

	/** Represents the settings used to enable point in time recovery. */
	export interface PointInTimeRecoverySpecificationFormProperties {

		/** Required */
		PointInTimeRecoveryEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePointInTimeRecoverySpecificationFormGroup() {
		return new FormGroup<PointInTimeRecoverySpecificationFormProperties>({
			PointInTimeRecoveryEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateContributorInsightsOutput {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName?: string | null;

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName?: string | null;
		ContributorInsightsStatus?: DescribeContributorInsightsOutputContributorInsightsStatus | null;
	}
	export interface UpdateContributorInsightsOutputFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: FormControl<string | null | undefined>,
		ContributorInsightsStatus: FormControl<DescribeContributorInsightsOutputContributorInsightsStatus | null | undefined>,
	}
	export function CreateUpdateContributorInsightsOutputFormGroup() {
		return new FormGroup<UpdateContributorInsightsOutputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
			ContributorInsightsStatus: new FormControl<DescribeContributorInsightsOutputContributorInsightsStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateContributorInsightsInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: string;

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName?: string | null;

		/** Required */
		ContributorInsightsAction: UpdateContributorInsightsInputContributorInsightsAction;
	}
	export interface UpdateContributorInsightsInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: FormControl<string | null | undefined>,

		/** Required */
		ContributorInsightsAction: FormControl<UpdateContributorInsightsInputContributorInsightsAction | null | undefined>,
	}
	export function CreateUpdateContributorInsightsInputFormGroup() {
		return new FormGroup<UpdateContributorInsightsInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
			ContributorInsightsAction: new FormControl<UpdateContributorInsightsInputContributorInsightsAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UpdateContributorInsightsInputContributorInsightsAction { ENABLE = 0, DISABLE = 1 }

	export interface UpdateGlobalTableOutput {

		/** Contains details about the global table. */
		GlobalTableDescription?: GlobalTableDescription;
	}
	export interface UpdateGlobalTableOutputFormProperties {
	}
	export function CreateUpdateGlobalTableOutputFormGroup() {
		return new FormGroup<UpdateGlobalTableOutputFormProperties>({
		});

	}

	export interface UpdateGlobalTableInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		GlobalTableName: string;

		/** Required */
		ReplicaUpdates: Array<ReplicaUpdate>;
	}
	export interface UpdateGlobalTableInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		GlobalTableName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGlobalTableInputFormGroup() {
		return new FormGroup<UpdateGlobalTableInputFormProperties>({
			GlobalTableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
		});

	}


	/** <p>Represents one of the following:</p> <ul> <li> <p>A new replica to be added to an existing global table.</p> </li> <li> <p>New parameters for an existing replica.</p> </li> <li> <p>An existing replica to be removed from an existing global table.</p> </li> </ul> */
	export interface ReplicaUpdate {

		/** Represents a replica to be added. */
		Create?: CreateReplicaAction;

		/** Represents a replica to be removed. */
		Delete?: DeleteReplicaAction;
	}

	/** <p>Represents one of the following:</p> <ul> <li> <p>A new replica to be added to an existing global table.</p> </li> <li> <p>New parameters for an existing replica.</p> </li> <li> <p>An existing replica to be removed from an existing global table.</p> </li> </ul> */
	export interface ReplicaUpdateFormProperties {
	}
	export function CreateReplicaUpdateFormGroup() {
		return new FormGroup<ReplicaUpdateFormProperties>({
		});

	}


	/** Represents a replica to be added. */
	export interface CreateReplicaAction {

		/** Required */
		RegionName: string;
	}

	/** Represents a replica to be added. */
	export interface CreateReplicaActionFormProperties {

		/** Required */
		RegionName: FormControl<string | null | undefined>,
	}
	export function CreateCreateReplicaActionFormGroup() {
		return new FormGroup<CreateReplicaActionFormProperties>({
			RegionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a replica to be removed. */
	export interface DeleteReplicaAction {

		/** Required */
		RegionName: string;
	}

	/** Represents a replica to be removed. */
	export interface DeleteReplicaActionFormProperties {

		/** Required */
		RegionName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteReplicaActionFormGroup() {
		return new FormGroup<DeleteReplicaActionFormProperties>({
			RegionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ReplicaAlreadyExistsException {
	}
	export interface ReplicaAlreadyExistsExceptionFormProperties {
	}
	export function CreateReplicaAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ReplicaAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface ReplicaNotFoundException {
	}
	export interface ReplicaNotFoundExceptionFormProperties {
	}
	export function CreateReplicaNotFoundExceptionFormGroup() {
		return new FormGroup<ReplicaNotFoundExceptionFormProperties>({
		});

	}

	export interface UpdateGlobalTableSettingsOutput {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		GlobalTableName?: string | null;
		ReplicaSettings?: Array<ReplicaSettingsDescription>;
	}
	export interface UpdateGlobalTableSettingsOutputFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		GlobalTableName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGlobalTableSettingsOutputFormGroup() {
		return new FormGroup<UpdateGlobalTableSettingsOutputFormProperties>({
			GlobalTableName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
		});

	}

	export interface UpdateGlobalTableSettingsInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		GlobalTableName: string;
		GlobalTableBillingMode?: BillingModeSummaryBillingMode | null;

		/** Minimum: 1 */
		GlobalTableProvisionedWriteCapacityUnits?: number | null;

		/** Represents the auto scaling settings to be modified for a global table or global secondary index. */
		GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;

		/**
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		GlobalTableGlobalSecondaryIndexSettingsUpdate?: Array<GlobalTableGlobalSecondaryIndexSettingsUpdate>;

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		ReplicaSettingsUpdate?: Array<ReplicaSettingsUpdate>;
	}
	export interface UpdateGlobalTableSettingsInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		GlobalTableName: FormControl<string | null | undefined>,
		GlobalTableBillingMode: FormControl<BillingModeSummaryBillingMode | null | undefined>,

		/** Minimum: 1 */
		GlobalTableProvisionedWriteCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateUpdateGlobalTableSettingsInputFormGroup() {
		return new FormGroup<UpdateGlobalTableSettingsInputFormProperties>({
			GlobalTableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
			GlobalTableBillingMode: new FormControl<BillingModeSummaryBillingMode | null | undefined>(undefined),
			GlobalTableProvisionedWriteCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** Represents the auto scaling settings to be modified for a global table or global secondary index. */
	export interface AutoScalingSettingsUpdate {

		/** Minimum: 1 */
		MinimumUnits?: number | null;

		/** Minimum: 1 */
		MaximumUnits?: number | null;
		AutoScalingDisabled?: boolean | null;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		AutoScalingRoleArn?: string | null;

		/** Represents the auto scaling policy to be modified. */
		ScalingPolicyUpdate?: AutoScalingPolicyUpdate;
	}

	/** Represents the auto scaling settings to be modified for a global table or global secondary index. */
	export interface AutoScalingSettingsUpdateFormProperties {

		/** Minimum: 1 */
		MinimumUnits: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		MaximumUnits: FormControl<number | null | undefined>,
		AutoScalingDisabled: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		AutoScalingRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateAutoScalingSettingsUpdateFormGroup() {
		return new FormGroup<AutoScalingSettingsUpdateFormProperties>({
			MinimumUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MaximumUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			AutoScalingDisabled: new FormControl<boolean | null | undefined>(undefined),
			AutoScalingRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600), Validators.minLength(1)]),
		});

	}


	/** Represents the auto scaling policy to be modified. */
	export interface AutoScalingPolicyUpdate {

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: \p{Print}+
		 */
		PolicyName?: string | null;

		/**
		 * Represents the settings of a target tracking scaling policy that will be modified.
		 * Required
		 */
		TargetTrackingScalingPolicyConfiguration: AutoScalingTargetTrackingScalingPolicyConfigurationUpdate;
	}

	/** Represents the auto scaling policy to be modified. */
	export interface AutoScalingPolicyUpdateFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: \p{Print}+
		 */
		PolicyName: FormControl<string | null | undefined>,
	}
	export function CreateAutoScalingPolicyUpdateFormGroup() {
		return new FormGroup<AutoScalingPolicyUpdateFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
		});

	}


	/** Represents the settings of a target tracking scaling policy that will be modified. */
	export interface AutoScalingTargetTrackingScalingPolicyConfigurationUpdate {
		DisableScaleIn?: boolean | null;
		ScaleInCooldown?: number | null;
		ScaleOutCooldown?: number | null;

		/** Required */
		TargetValue: number;
	}

	/** Represents the settings of a target tracking scaling policy that will be modified. */
	export interface AutoScalingTargetTrackingScalingPolicyConfigurationUpdateFormProperties {
		DisableScaleIn: FormControl<boolean | null | undefined>,
		ScaleInCooldown: FormControl<number | null | undefined>,
		ScaleOutCooldown: FormControl<number | null | undefined>,

		/** Required */
		TargetValue: FormControl<number | null | undefined>,
	}
	export function CreateAutoScalingTargetTrackingScalingPolicyConfigurationUpdateFormGroup() {
		return new FormGroup<AutoScalingTargetTrackingScalingPolicyConfigurationUpdateFormProperties>({
			DisableScaleIn: new FormControl<boolean | null | undefined>(undefined),
			ScaleInCooldown: new FormControl<number | null | undefined>(undefined),
			ScaleOutCooldown: new FormControl<number | null | undefined>(undefined),
			TargetValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the settings of a global secondary index for a global table that will be modified. */
	export interface GlobalTableGlobalSecondaryIndexSettingsUpdate {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: string;

		/** Minimum: 1 */
		ProvisionedWriteCapacityUnits?: number | null;

		/** Represents the auto scaling settings to be modified for a global table or global secondary index. */
		ProvisionedWriteCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
	}

	/** Represents the settings of a global secondary index for a global table that will be modified. */
	export interface GlobalTableGlobalSecondaryIndexSettingsUpdateFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		ProvisionedWriteCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateGlobalTableGlobalSecondaryIndexSettingsUpdateFormGroup() {
		return new FormGroup<GlobalTableGlobalSecondaryIndexSettingsUpdateFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
			ProvisionedWriteCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** Represents the settings for a global table in a Region that will be modified. */
	export interface ReplicaSettingsUpdate {

		/** Required */
		RegionName: string;

		/** Minimum: 1 */
		ReplicaProvisionedReadCapacityUnits?: number | null;

		/** Represents the auto scaling settings to be modified for a global table or global secondary index. */
		ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;

		/**
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		ReplicaGlobalSecondaryIndexSettingsUpdate?: Array<ReplicaGlobalSecondaryIndexSettingsUpdate>;
	}

	/** Represents the settings for a global table in a Region that will be modified. */
	export interface ReplicaSettingsUpdateFormProperties {

		/** Required */
		RegionName: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		ReplicaProvisionedReadCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateReplicaSettingsUpdateFormGroup() {
		return new FormGroup<ReplicaSettingsUpdateFormProperties>({
			RegionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplicaProvisionedReadCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** Represents the settings of a global secondary index for a global table that will be modified. */
	export interface ReplicaGlobalSecondaryIndexSettingsUpdate {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: string;

		/** Minimum: 1 */
		ProvisionedReadCapacityUnits?: number | null;

		/** Represents the auto scaling settings to be modified for a global table or global secondary index. */
		ProvisionedReadCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
	}

	/** Represents the settings of a global secondary index for a global table that will be modified. */
	export interface ReplicaGlobalSecondaryIndexSettingsUpdateFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		ProvisionedReadCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateReplicaGlobalSecondaryIndexSettingsUpdateFormGroup() {
		return new FormGroup<ReplicaGlobalSecondaryIndexSettingsUpdateFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
			ProvisionedReadCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface IndexNotFoundException {
	}
	export interface IndexNotFoundExceptionFormProperties {
	}
	export function CreateIndexNotFoundExceptionFormGroup() {
		return new FormGroup<IndexNotFoundExceptionFormProperties>({
		});

	}


	/** Represents the output of an <code>UpdateItem</code> operation. */
	export interface UpdateItemOutput {
		Attributes?: AttributeMap;

		/** The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>. */
		ConsumedCapacity?: ConsumedCapacity;

		/** Information about item collections, if any, that were affected by the operation. <code>ItemCollectionMetrics</code> is only returned if the request asked for it. If the table does not have any local secondary indexes, this information is not returned in the response. */
		ItemCollectionMetrics?: ItemCollectionMetrics;
	}

	/** Represents the output of an <code>UpdateItem</code> operation. */
	export interface UpdateItemOutputFormProperties {
	}
	export function CreateUpdateItemOutputFormGroup() {
		return new FormGroup<UpdateItemOutputFormProperties>({
		});

	}


	/** Represents the input of an <code>UpdateItem</code> operation. */
	export interface UpdateItemInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: string;

		/** Required */
		Key: Key;
		AttributeUpdates?: AttributeUpdates;
		Expected?: ExpectedAttributeMap;
		ConditionalOperator?: DeleteItemInputConditionalOperator | null;
		ReturnValues?: DeleteItemInputReturnValues | null;

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchGetItemInputReturnConsumedCapacity | null;
		ReturnItemCollectionMetrics?: BatchWriteItemInputReturnItemCollectionMetrics | null;
		UpdateExpression?: string | null;
		ConditionExpression?: string | null;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
	}

	/** Represents the input of an <code>UpdateItem</code> operation. */
	export interface UpdateItemInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,
		ConditionalOperator: FormControl<DeleteItemInputConditionalOperator | null | undefined>,
		ReturnValues: FormControl<DeleteItemInputReturnValues | null | undefined>,

		/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity: FormControl<BatchGetItemInputReturnConsumedCapacity | null | undefined>,
		ReturnItemCollectionMetrics: FormControl<BatchWriteItemInputReturnItemCollectionMetrics | null | undefined>,
		UpdateExpression: FormControl<string | null | undefined>,
		ConditionExpression: FormControl<string | null | undefined>,
	}
	export function CreateUpdateItemInputFormGroup() {
		return new FormGroup<UpdateItemInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
			ConditionalOperator: new FormControl<DeleteItemInputConditionalOperator | null | undefined>(undefined),
			ReturnValues: new FormControl<DeleteItemInputReturnValues | null | undefined>(undefined),
			ReturnConsumedCapacity: new FormControl<BatchGetItemInputReturnConsumedCapacity | null | undefined>(undefined),
			ReturnItemCollectionMetrics: new FormControl<BatchWriteItemInputReturnItemCollectionMetrics | null | undefined>(undefined),
			UpdateExpression: new FormControl<string | null | undefined>(undefined),
			ConditionExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AttributeUpdates {
	}
	export interface AttributeUpdatesFormProperties {
	}
	export function CreateAttributeUpdatesFormGroup() {
		return new FormGroup<AttributeUpdatesFormProperties>({
		});

	}


	/** Represents the output of an <code>UpdateTable</code> operation. */
	export interface UpdateTableOutput {

		/** Represents the properties of a table. */
		TableDescription?: TableDescription;
	}

	/** Represents the output of an <code>UpdateTable</code> operation. */
	export interface UpdateTableOutputFormProperties {
	}
	export function CreateUpdateTableOutputFormGroup() {
		return new FormGroup<UpdateTableOutputFormProperties>({
		});

	}


	/** Represents the input of an <code>UpdateTable</code> operation. */
	export interface UpdateTableInput {
		AttributeDefinitions?: Array<AttributeDefinition>;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: string;
		BillingMode?: BillingModeSummaryBillingMode | null;

		/** <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
		ProvisionedThroughput?: ProvisionedThroughput;
		GlobalSecondaryIndexUpdates?: Array<GlobalSecondaryIndexUpdate>;

		/** Represents the DynamoDB Streams configuration for a table in DynamoDB. */
		StreamSpecification?: StreamSpecification;

		/** Represents the settings used to enable server-side encryption. */
		SSESpecification?: SSESpecification;

		/** Minimum items: 1 */
		ReplicaUpdates?: Array<ReplicationGroupUpdate>;
	}

	/** Represents the input of an <code>UpdateTable</code> operation. */
	export interface UpdateTableInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,
		BillingMode: FormControl<BillingModeSummaryBillingMode | null | undefined>,
	}
	export function CreateUpdateTableInputFormGroup() {
		return new FormGroup<UpdateTableInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
			BillingMode: new FormControl<BillingModeSummaryBillingMode | null | undefined>(undefined),
		});

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

	/** <p>Represents one of the following:</p> <ul> <li> <p>A new global secondary index to be added to an existing table.</p> </li> <li> <p>New provisioned throughput parameters for an existing global secondary index.</p> </li> <li> <p>An existing global secondary index to be removed from an existing table.</p> </li> </ul> */
	export interface GlobalSecondaryIndexUpdateFormProperties {
	}
	export function CreateGlobalSecondaryIndexUpdateFormGroup() {
		return new FormGroup<GlobalSecondaryIndexUpdateFormProperties>({
		});

	}


	/** Represents the new provisioned throughput settings to be applied to a global secondary index. */
	export interface UpdateGlobalSecondaryIndexAction {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: string;

		/**
		 * <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
		 * Required
		 */
		ProvisionedThroughput: ProvisionedThroughput;
	}

	/** Represents the new provisioned throughput settings to be applied to a global secondary index. */
	export interface UpdateGlobalSecondaryIndexActionFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGlobalSecondaryIndexActionFormGroup() {
		return new FormGroup<UpdateGlobalSecondaryIndexActionFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
		});

	}


	/** Represents a new global secondary index to be added to an existing table. */
	export interface CreateGlobalSecondaryIndexAction {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		KeySchema: Array<KeySchemaElement>;

		/**
		 * Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
		 * Required
		 */
		Projection: Projection;

		/** <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
		ProvisionedThroughput?: ProvisionedThroughput;
	}

	/** Represents a new global secondary index to be added to an existing table. */
	export interface CreateGlobalSecondaryIndexActionFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateCreateGlobalSecondaryIndexActionFormGroup() {
		return new FormGroup<CreateGlobalSecondaryIndexActionFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
		});

	}


	/** Represents a global secondary index to be deleted from an existing table. */
	export interface DeleteGlobalSecondaryIndexAction {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: string;
	}

	/** Represents a global secondary index to be deleted from an existing table. */
	export interface DeleteGlobalSecondaryIndexActionFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGlobalSecondaryIndexActionFormGroup() {
		return new FormGroup<DeleteGlobalSecondaryIndexActionFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
		});

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

	/** <p>Represents one of the following:</p> <ul> <li> <p>A new replica to be added to an existing regional table or global table. This request invokes the <code>CreateTableReplica</code> action in the destination Region.</p> </li> <li> <p>New parameters for an existing replica. This request invokes the <code>UpdateTable</code> action in the destination Region.</p> </li> <li> <p>An existing replica to be deleted. The request invokes the <code>DeleteTableReplica</code> action in the destination Region, deleting the replica and all if its items in the destination Region.</p> </li> </ul> */
	export interface ReplicationGroupUpdateFormProperties {
	}
	export function CreateReplicationGroupUpdateFormGroup() {
		return new FormGroup<ReplicationGroupUpdateFormProperties>({
		});

	}


	/** Represents a replica to be created. */
	export interface CreateReplicationGroupMemberAction {

		/** Required */
		RegionName: string;
		KMSMasterKeyId?: string | null;

		/** Replica-specific provisioned throughput settings. If not specified, uses the source table's provisioned throughput settings. */
		ProvisionedThroughputOverride?: ProvisionedThroughputOverride;

		/** Minimum items: 1 */
		GlobalSecondaryIndexes?: Array<ReplicaGlobalSecondaryIndex>;
	}

	/** Represents a replica to be created. */
	export interface CreateReplicationGroupMemberActionFormProperties {

		/** Required */
		RegionName: FormControl<string | null | undefined>,
		KMSMasterKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateReplicationGroupMemberActionFormGroup() {
		return new FormGroup<CreateReplicationGroupMemberActionFormProperties>({
			RegionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KMSMasterKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the properties of a replica global secondary index. */
	export interface ReplicaGlobalSecondaryIndex {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: string;

		/** Replica-specific provisioned throughput settings. If not specified, uses the source table's provisioned throughput settings. */
		ProvisionedThroughputOverride?: ProvisionedThroughputOverride;
	}

	/** Represents the properties of a replica global secondary index. */
	export interface ReplicaGlobalSecondaryIndexFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateReplicaGlobalSecondaryIndexFormGroup() {
		return new FormGroup<ReplicaGlobalSecondaryIndexFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
		});

	}


	/** Represents a replica to be modified. */
	export interface UpdateReplicationGroupMemberAction {

		/** Required */
		RegionName: string;
		KMSMasterKeyId?: string | null;

		/** Replica-specific provisioned throughput settings. If not specified, uses the source table's provisioned throughput settings. */
		ProvisionedThroughputOverride?: ProvisionedThroughputOverride;

		/** Minimum items: 1 */
		GlobalSecondaryIndexes?: Array<ReplicaGlobalSecondaryIndex>;
	}

	/** Represents a replica to be modified. */
	export interface UpdateReplicationGroupMemberActionFormProperties {

		/** Required */
		RegionName: FormControl<string | null | undefined>,
		KMSMasterKeyId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateReplicationGroupMemberActionFormGroup() {
		return new FormGroup<UpdateReplicationGroupMemberActionFormProperties>({
			RegionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KMSMasterKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a replica to be deleted. */
	export interface DeleteReplicationGroupMemberAction {

		/** Required */
		RegionName: string;
	}

	/** Represents a replica to be deleted. */
	export interface DeleteReplicationGroupMemberActionFormProperties {

		/** Required */
		RegionName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteReplicationGroupMemberActionFormGroup() {
		return new FormGroup<DeleteReplicationGroupMemberActionFormProperties>({
			RegionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateTableReplicaAutoScalingOutput {

		/** Represents the auto scaling configuration for a global table. */
		TableAutoScalingDescription?: TableAutoScalingDescription;
	}
	export interface UpdateTableReplicaAutoScalingOutputFormProperties {
	}
	export function CreateUpdateTableReplicaAutoScalingOutputFormGroup() {
		return new FormGroup<UpdateTableReplicaAutoScalingOutputFormProperties>({
		});

	}

	export interface UpdateTableReplicaAutoScalingInput {

		/** Minimum items: 1 */
		GlobalSecondaryIndexUpdates?: Array<GlobalSecondaryIndexAutoScalingUpdate>;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: string;

		/** Represents the auto scaling settings to be modified for a global table or global secondary index. */
		ProvisionedWriteCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;

		/** Minimum items: 1 */
		ReplicaUpdates?: Array<ReplicaAutoScalingUpdate>;
	}
	export interface UpdateTableReplicaAutoScalingInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTableReplicaAutoScalingInputFormGroup() {
		return new FormGroup<UpdateTableReplicaAutoScalingInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
		});

	}


	/** Represents the auto scaling settings of a global secondary index for a global table that will be modified. */
	export interface GlobalSecondaryIndexAutoScalingUpdate {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName?: string | null;

		/** Represents the auto scaling settings to be modified for a global table or global secondary index. */
		ProvisionedWriteCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
	}

	/** Represents the auto scaling settings of a global secondary index for a global table that will be modified. */
	export interface GlobalSecondaryIndexAutoScalingUpdateFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateGlobalSecondaryIndexAutoScalingUpdateFormGroup() {
		return new FormGroup<GlobalSecondaryIndexAutoScalingUpdateFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
		});

	}


	/** Represents the auto scaling settings of a replica that will be modified. */
	export interface ReplicaAutoScalingUpdate {

		/** Required */
		RegionName: string;
		ReplicaGlobalSecondaryIndexUpdates?: Array<ReplicaGlobalSecondaryIndexAutoScalingUpdate>;

		/** Represents the auto scaling settings to be modified for a global table or global secondary index. */
		ReplicaProvisionedReadCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
	}

	/** Represents the auto scaling settings of a replica that will be modified. */
	export interface ReplicaAutoScalingUpdateFormProperties {

		/** Required */
		RegionName: FormControl<string | null | undefined>,
	}
	export function CreateReplicaAutoScalingUpdateFormGroup() {
		return new FormGroup<ReplicaAutoScalingUpdateFormProperties>({
			RegionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the auto scaling settings of a global secondary index for a replica that will be modified. */
	export interface ReplicaGlobalSecondaryIndexAutoScalingUpdate {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName?: string | null;

		/** Represents the auto scaling settings to be modified for a global table or global secondary index. */
		ProvisionedReadCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
	}

	/** Represents the auto scaling settings of a global secondary index for a replica that will be modified. */
	export interface ReplicaGlobalSecondaryIndexAutoScalingUpdateFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateReplicaGlobalSecondaryIndexAutoScalingUpdateFormGroup() {
		return new FormGroup<ReplicaGlobalSecondaryIndexAutoScalingUpdateFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
		});

	}

	export interface UpdateTimeToLiveOutput {

		/** Represents the settings used to enable or disable Time to Live (TTL) for the specified table. */
		TimeToLiveSpecification?: TimeToLiveSpecification;
	}
	export interface UpdateTimeToLiveOutputFormProperties {
	}
	export function CreateUpdateTimeToLiveOutputFormGroup() {
		return new FormGroup<UpdateTimeToLiveOutputFormProperties>({
		});

	}


	/** Represents the settings used to enable or disable Time to Live (TTL) for the specified table. */
	export interface TimeToLiveSpecification {

		/** Required */
		Enabled: boolean;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		AttributeName: string;
	}

	/** Represents the settings used to enable or disable Time to Live (TTL) for the specified table. */
	export interface TimeToLiveSpecificationFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		AttributeName: FormControl<string | null | undefined>,
	}
	export function CreateTimeToLiveSpecificationFormGroup() {
		return new FormGroup<TimeToLiveSpecificationFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
		});

	}


	/** Represents the input of an <code>UpdateTimeToLive</code> operation. */
	export interface UpdateTimeToLiveInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: string;

		/**
		 * Represents the settings used to enable or disable Time to Live (TTL) for the specified table.
		 * Required
		 */
		TimeToLiveSpecification: TimeToLiveSpecification;
	}

	/** Represents the input of an <code>UpdateTimeToLive</code> operation. */
	export interface UpdateTimeToLiveInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTimeToLiveInputFormGroup() {
		return new FormGroup<UpdateTimeToLiveInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
		});

	}

	export enum AttributeAction { ADD = 0, PUT = 1, DELETE = 2 }

	export enum ScalarAttributeType { S = 0, N = 1, B = 2 }


	/** <p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
	export interface AttributeValue {
		S?: string | null;
		N?: string | null;
		B?: string | null;
		SS?: Array<string>;
		NS?: Array<string>;
		BS?: Array<string>;
		M?: MapAttributeValue;
		L?: Array<AttributeValue>;
		NULL?: boolean | null;
		BOOL?: boolean | null;
	}

	/** <p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
	export interface AttributeValueFormProperties {
		S: FormControl<string | null | undefined>,
		N: FormControl<string | null | undefined>,
		B: FormControl<string | null | undefined>,
		NULL: FormControl<boolean | null | undefined>,
		BOOL: FormControl<boolean | null | undefined>,
	}
	export function CreateAttributeValueFormGroup() {
		return new FormGroup<AttributeValueFormProperties>({
			S: new FormControl<string | null | undefined>(undefined),
			N: new FormControl<string | null | undefined>(undefined),
			B: new FormControl<string | null | undefined>(undefined),
			NULL: new FormControl<boolean | null | undefined>(undefined),
			BOOL: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface MapAttributeValue {
	}
	export interface MapAttributeValueFormProperties {
	}
	export function CreateMapAttributeValueFormGroup() {
		return new FormGroup<MapAttributeValueFormProperties>({
		});

	}


	/** <p>For the <code>UpdateItem</code> operation, represents the attributes to be modified, the action to perform on each, and the new value for each.</p> <note> <p>You cannot use <code>UpdateItem</code> to update any primary key attributes. Instead, you will need to delete the item, and then use <code>PutItem</code> to create a new item with new attributes.</p> </note> <p>Attribute values cannot be null; string and binary type attributes must have lengths greater than zero; and set type attributes must not be empty. Requests with empty values will be rejected with a <code>ValidationException</code> exception.</p> */
	export interface AttributeValueUpdate {

		/** <p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
		Value?: AttributeValue;
		Action?: AttributeAction | null;
	}

	/** <p>For the <code>UpdateItem</code> operation, represents the attributes to be modified, the action to perform on each, and the new value for each.</p> <note> <p>You cannot use <code>UpdateItem</code> to update any primary key attributes. Instead, you will need to delete the item, and then use <code>PutItem</code> to create a new item with new attributes.</p> </note> <p>Attribute values cannot be null; string and binary type attributes must have lengths greater than zero; and set type attributes must not be empty. Requests with empty values will be rejected with a <code>ValidationException</code> exception.</p> */
	export interface AttributeValueUpdateFormProperties {
		Action: FormControl<AttributeAction | null | undefined>,
	}
	export function CreateAttributeValueUpdateFormGroup() {
		return new FormGroup<AttributeValueUpdateFormProperties>({
			Action: new FormControl<AttributeAction | null | undefined>(undefined),
		});

	}

	export enum BackupStatus { CREATING = 0, DELETED = 1, AVAILABLE = 2 }

	export enum BackupType { USER = 0, SYSTEM = 1, AWS_BACKUP = 2 }

	export enum BackupTypeFilter { USER = 0, SYSTEM = 1, AWS_BACKUP = 2, ALL = 3 }


	/** <p>Determines the level of detail about provisioned throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
	export enum ReturnConsumedCapacity { INDEXES = 0, TOTAL = 1, NONE = 2 }


	/** <p>Represents a set of primary keys and, for each key, the attributes to retrieve from the table.</p> <p>For each primary key, you must provide <i>all</i> of the key attributes. For example, with a simple primary key, you only need to provide the partition key. For a composite primary key, you must provide <i>both</i> the partition key and the sort key.</p> */
	export interface KeysAndAttributes {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		Keys: Array<Key>;

		/** Minimum items: 1 */
		AttributesToGet?: Array<string>;
		ConsistentRead?: boolean | null;
		ProjectionExpression?: string | null;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
	}

	/** <p>Represents a set of primary keys and, for each key, the attributes to retrieve from the table.</p> <p>For each primary key, you must provide <i>all</i> of the key attributes. For example, with a simple primary key, you only need to provide the partition key. For a composite primary key, you must provide <i>both</i> the partition key and the sort key.</p> */
	export interface KeysAndAttributesFormProperties {
		ConsistentRead: FormControl<boolean | null | undefined>,
		ProjectionExpression: FormControl<string | null | undefined>,
	}
	export function CreateKeysAndAttributesFormGroup() {
		return new FormGroup<KeysAndAttributesFormProperties>({
			ConsistentRead: new FormControl<boolean | null | undefined>(undefined),
			ProjectionExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReturnItemCollectionMetrics { SIZE = 0, NONE = 1 }


	/** Represents an operation to perform - either <code>DeleteItem</code> or <code>PutItem</code>. You can only request one of these operations, not both, in a single <code>WriteRequest</code>. If you do need to perform both of these operations, you need to provide two separate <code>WriteRequest</code> objects. */
	export interface WriteRequest {

		/** Represents a request to perform a <code>PutItem</code> operation on an item. */
		PutRequest?: PutRequest;

		/** Represents a request to perform a <code>DeleteItem</code> operation on an item. */
		DeleteRequest?: DeleteRequest;
	}

	/** Represents an operation to perform - either <code>DeleteItem</code> or <code>PutItem</code>. You can only request one of these operations, not both, in a single <code>WriteRequest</code>. If you do need to perform both of these operations, you need to provide two separate <code>WriteRequest</code> objects. */
	export interface WriteRequestFormProperties {
	}
	export function CreateWriteRequestFormGroup() {
		return new FormGroup<WriteRequestFormProperties>({
		});

	}


	/** Represents a request to perform a <code>PutItem</code> operation on an item. */
	export interface PutRequest {

		/** Required */
		Item: PutItemInputAttributeMap;
	}

	/** Represents a request to perform a <code>PutItem</code> operation on an item. */
	export interface PutRequestFormProperties {
	}
	export function CreatePutRequestFormGroup() {
		return new FormGroup<PutRequestFormProperties>({
		});

	}


	/** Represents a request to perform a <code>DeleteItem</code> operation on an item. */
	export interface DeleteRequest {

		/** Required */
		Key: Key;
	}

	/** Represents a request to perform a <code>DeleteItem</code> operation on an item. */
	export interface DeleteRequestFormProperties {
	}
	export function CreateDeleteRequestFormGroup() {
		return new FormGroup<DeleteRequestFormProperties>({
		});

	}

	export enum BillingMode { PROVISIONED = 0, PAY_PER_REQUEST = 1 }

	export enum ComparisonOperator { EQ = 0, NE = 1, IN = 2, LE = 3, LT = 4, GE = 5, GT = 6, BETWEEN = 7, NOT_NULL = 8, NULL = 9, CONTAINS = 10, NOT_CONTAINS = 11, BEGINS_WITH = 12 }


	/** <p>Represents the selection criteria for a <code>Query</code> or <code>Scan</code> operation:</p> <ul> <li> <p>For a <code>Query</code> operation, <code>Condition</code> is used for specifying the <code>KeyConditions</code> to use when querying a table or an index. For <code>KeyConditions</code>, only the following comparison operators are supported:</p> <p> <code>EQ | LE | LT | GE | GT | BEGINS_WITH | BETWEEN</code> </p> <p> <code>Condition</code> is also used in a <code>QueryFilter</code>, which evaluates the query results and returns only the desired values.</p> </li> <li> <p>For a <code>Scan</code> operation, <code>Condition</code> is used in a <code>ScanFilter</code>, which evaluates the scan results and returns only the desired values.</p> </li> </ul> */
	export interface Condition {
		AttributeValueList?: Array<AttributeValue>;

		/** Required */
		ComparisonOperator: ComparisonOperator;
	}

	/** <p>Represents the selection criteria for a <code>Query</code> or <code>Scan</code> operation:</p> <ul> <li> <p>For a <code>Query</code> operation, <code>Condition</code> is used for specifying the <code>KeyConditions</code> to use when querying a table or an index. For <code>KeyConditions</code>, only the following comparison operators are supported:</p> <p> <code>EQ | LE | LT | GE | GT | BEGINS_WITH | BETWEEN</code> </p> <p> <code>Condition</code> is also used in a <code>QueryFilter</code>, which evaluates the query results and returns only the desired values.</p> </li> <li> <p>For a <code>Scan</code> operation, <code>Condition</code> is used in a <code>ScanFilter</code>, which evaluates the scan results and returns only the desired values.</p> </li> </ul> */
	export interface ConditionFormProperties {

		/** Required */
		ComparisonOperator: FormControl<ComparisonOperator | null | undefined>,
	}
	export function CreateConditionFormGroup() {
		return new FormGroup<ConditionFormProperties>({
			ComparisonOperator: new FormControl<ComparisonOperator | null | undefined>(undefined, [Validators.required]),
		});

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
		Exists?: boolean | null;
		ComparisonOperator?: ComparisonOperator | null;
		AttributeValueList?: Array<AttributeValue>;
	}

	/** <p>Represents a condition to be compared with an attribute value. This condition can be used with <code>DeleteItem</code>, <code>PutItem</code>, or <code>UpdateItem</code> operations; if the comparison evaluates to true, the operation succeeds; if not, the operation fails. You can use <code>ExpectedAttributeValue</code> in one of two different ways:</p> <ul> <li> <p>Use <code>AttributeValueList</code> to specify one or more values to compare against an attribute. Use <code>ComparisonOperator</code> to specify how you want to perform the comparison. If the comparison evaluates to true, then the conditional operation succeeds.</p> </li> <li> <p>Use <code>Value</code> to specify a value that DynamoDB will compare against an attribute. If the values match, then <code>ExpectedAttributeValue</code> evaluates to true and the conditional operation succeeds. Optionally, you can also set <code>Exists</code> to false, indicating that you <i>do not</i> expect to find the attribute value in the table. In this case, the conditional operation succeeds only if the comparison evaluates to false.</p> </li> </ul> <p> <code>Value</code> and <code>Exists</code> are incompatible with <code>AttributeValueList</code> and <code>ComparisonOperator</code>. Note that if you use both sets of parameters at once, DynamoDB will return a <code>ValidationException</code> exception.</p> */
	export interface ExpectedAttributeValueFormProperties {
		Exists: FormControl<boolean | null | undefined>,
		ComparisonOperator: FormControl<ComparisonOperator | null | undefined>,
	}
	export function CreateExpectedAttributeValueFormGroup() {
		return new FormGroup<ExpectedAttributeValueFormProperties>({
			Exists: new FormControl<boolean | null | undefined>(undefined),
			ComparisonOperator: new FormControl<ComparisonOperator | null | undefined>(undefined),
		});

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
		BatchGetItem(RequestItems: string | null | undefined, requestBody: BatchGetItemInput): Observable<BatchGetItemOutput> {
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
		ListContributorInsights(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListContributorInsightsInput): Observable<ListContributorInsightsOutput> {
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
		ListTables(Limit: string | null | undefined, ExclusiveStartTableName: string | null | undefined, requestBody: ListTablesInput): Observable<ListTablesOutput> {
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
		Query(Limit: string | null | undefined, ExclusiveStartKey: string | null | undefined, requestBody: QueryInput): Observable<QueryOutput> {
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
		Scan(Limit: string | null | undefined, ExclusiveStartKey: string | null | undefined, requestBody: ScanInput): Observable<ScanOutput> {
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

