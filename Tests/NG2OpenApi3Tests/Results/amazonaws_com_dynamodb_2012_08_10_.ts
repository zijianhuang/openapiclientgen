import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchExecuteStatementOutput {
		Responses?: Array<BatchStatementResponse>;
		ConsumedCapacity?: Array<ConsumedCapacity>;
	}
	export interface BatchExecuteStatementOutputFormProperties {
	}
	export function CreateBatchExecuteStatementOutputFormGroup() {
		return new FormGroup<BatchExecuteStatementOutputFormProperties>({
		});

	}


	/**  A PartiQL batch statement response..  */
	export interface BatchStatementResponse {
		Error?: BatchStatementError;
		TableName?: string;
		Item?: AttributeMap;
	}

	/**  A PartiQL batch statement response..  */
	export interface BatchStatementResponseFormProperties {
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateBatchStatementResponseFormGroup() {
		return new FormGroup<BatchStatementResponseFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  An error associated with a statement in a PartiQL batch that was run.  */
	export interface BatchStatementError {
		Code?: BatchStatementErrorCodeEnum;
		Message?: string;
		Item?: AttributeMap;
	}

	/**  An error associated with a statement in a PartiQL batch that was run.  */
	export interface BatchStatementErrorFormProperties {
		Code: FormControl<BatchStatementErrorCodeEnum | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateBatchStatementErrorFormGroup() {
		return new FormGroup<BatchStatementErrorFormProperties>({
			Code: new FormControl<BatchStatementErrorCodeEnum | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BatchStatementErrorCodeEnum { ConditionalCheckFailed = 0, ItemCollectionSizeLimitExceeded = 1, RequestLimitExceeded = 2, ValidationError = 3, ProvisionedThroughputExceeded = 4, TransactionConflict = 5, ThrottlingError = 6, InternalServerError = 7, ResourceNotFound = 8, AccessDenied = 9, DuplicateItem = 10 }

	export interface AttributeMap {
	}
	export interface AttributeMapFormProperties {
	}
	export function CreateAttributeMapFormGroup() {
		return new FormGroup<AttributeMapFormProperties>({
		});

	}


	/** The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>. */
	export interface ConsumedCapacity {
		TableName?: string;
		CapacityUnits?: number | null;
		ReadCapacityUnits?: number | null;
		WriteCapacityUnits?: number | null;
		Table?: Capacity;
		LocalSecondaryIndexes?: SecondaryIndexesCapacityMap;
		GlobalSecondaryIndexes?: SecondaryIndexesCapacityMap;
	}

	/** The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>. */
	export interface ConsumedCapacityFormProperties {
		TableName: FormControl<string | null | undefined>,
		CapacityUnits: FormControl<number | null | undefined>,
		ReadCapacityUnits: FormControl<number | null | undefined>,
		WriteCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateConsumedCapacityFormGroup() {
		return new FormGroup<ConsumedCapacityFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined),
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

	export interface BatchExecuteStatementInput {

		/** Required */
		Statements: Array<BatchStatementRequest>;

		/** <p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchExecuteStatementInputReturnConsumedCapacity | null;
	}
	export interface BatchExecuteStatementInputFormProperties {

		/** <p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity: FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>,
	}
	export function CreateBatchExecuteStatementInputFormGroup() {
		return new FormGroup<BatchExecuteStatementInputFormProperties>({
			ReturnConsumedCapacity: new FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>(undefined),
		});

	}


	/**  A PartiQL batch statement request.  */
	export interface BatchStatementRequest {

		/** Required */
		Statement: string;
		Parameters?: Array<AttributeValue>;
		ConsistentRead?: boolean | null;
		ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure;
	}

	/**  A PartiQL batch statement request.  */
	export interface BatchStatementRequestFormProperties {

		/** Required */
		Statement: FormControl<string | null | undefined>,
		ConsistentRead: FormControl<boolean | null | undefined>,
		ReturnValuesOnConditionCheckFailure: FormControl<ReturnValuesOnConditionCheckFailure | null | undefined>,
	}
	export function CreateBatchStatementRequestFormGroup() {
		return new FormGroup<BatchStatementRequestFormProperties>({
			Statement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConsistentRead: new FormControl<boolean | null | undefined>(undefined),
			ReturnValuesOnConditionCheckFailure: new FormControl<ReturnValuesOnConditionCheckFailure | null | undefined>(undefined),
		});

	}


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

	export enum ReturnValuesOnConditionCheckFailure { ALL_OLD = 0, NONE = 1 }

	export enum BatchExecuteStatementInputReturnConsumedCapacity { INDEXES = 0, TOTAL = 1, NONE = 2 }

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


	/** Represents the input of a <code>BatchGetItem</code> operation. */
	export interface BatchGetItemInput {

		/** Required */
		RequestItems: BatchGetRequestMap;

		/** <p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchExecuteStatementInputReturnConsumedCapacity | null;
	}

	/** Represents the input of a <code>BatchGetItem</code> operation. */
	export interface BatchGetItemInputFormProperties {

		/** <p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity: FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>,
	}
	export function CreateBatchGetItemInputFormGroup() {
		return new FormGroup<BatchGetItemInputFormProperties>({
			ReturnConsumedCapacity: new FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>(undefined),
		});

	}

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

		/** <p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchExecuteStatementInputReturnConsumedCapacity | null;
		ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
	}

	/** Represents the input of a <code>BatchWriteItem</code> operation. */
	export interface BatchWriteItemInputFormProperties {

		/** <p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity: FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>,
		ReturnItemCollectionMetrics: FormControl<ReturnItemCollectionMetrics | null | undefined>,
	}
	export function CreateBatchWriteItemInputFormGroup() {
		return new FormGroup<BatchWriteItemInputFormProperties>({
			ReturnConsumedCapacity: new FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>(undefined),
			ReturnItemCollectionMetrics: new FormControl<ReturnItemCollectionMetrics | null | undefined>(undefined),
		});

	}

	export enum ReturnItemCollectionMetrics { SIZE = 0, NONE = 1 }

	export interface ItemCollectionSizeLimitExceededException {
	}
	export interface ItemCollectionSizeLimitExceededExceptionFormProperties {
	}
	export function CreateItemCollectionSizeLimitExceededExceptionFormGroup() {
		return new FormGroup<ItemCollectionSizeLimitExceededExceptionFormProperties>({
		});

	}

	export interface CreateBackupOutput {
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

		/** Required */
		BackupArn: string;

		/** Required */
		BackupName: string;
		BackupSizeBytes?: number | null;

		/** Required */
		BackupStatus: BackupStatus;

		/** Required */
		BackupType: BackupType;

		/** Required */
		BackupCreationDateTime: Date;
		BackupExpiryDateTime?: Date;
	}

	/** Contains the details of the backup created for the table. */
	export interface BackupDetailsFormProperties {

		/** Required */
		BackupArn: FormControl<string | null | undefined>,

		/** Required */
		BackupName: FormControl<string | null | undefined>,
		BackupSizeBytes: FormControl<number | null | undefined>,

		/** Required */
		BackupStatus: FormControl<BackupStatus | null | undefined>,

		/** Required */
		BackupType: FormControl<BackupType | null | undefined>,

		/** Required */
		BackupCreationDateTime: FormControl<Date | null | undefined>,
		BackupExpiryDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateBackupDetailsFormGroup() {
		return new FormGroup<BackupDetailsFormProperties>({
			BackupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BackupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BackupSizeBytes: new FormControl<number | null | undefined>(undefined),
			BackupStatus: new FormControl<BackupStatus | null | undefined>(undefined, [Validators.required]),
			BackupType: new FormControl<BackupType | null | undefined>(undefined, [Validators.required]),
			BackupCreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			BackupExpiryDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum BackupStatus { CREATING = 0, DELETED = 1, AVAILABLE = 2 }

	export enum BackupType { USER = 0, SYSTEM = 1, AWS_BACKUP = 2 }

	export interface CreateBackupInput {

		/** Required */
		TableName: string;

		/** Required */
		BackupName: string;
	}
	export interface CreateBackupInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,

		/** Required */
		BackupName: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackupInputFormGroup() {
		return new FormGroup<CreateBackupInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BackupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		GlobalTableArn?: string;
		CreationDateTime?: Date;
		GlobalTableStatus?: GlobalTableStatus;
		GlobalTableName?: string;
	}

	/** Contains details about the global table. */
	export interface GlobalTableDescriptionFormProperties {
		GlobalTableArn: FormControl<string | null | undefined>,
		CreationDateTime: FormControl<Date | null | undefined>,
		GlobalTableStatus: FormControl<GlobalTableStatus | null | undefined>,
		GlobalTableName: FormControl<string | null | undefined>,
	}
	export function CreateGlobalTableDescriptionFormGroup() {
		return new FormGroup<GlobalTableDescriptionFormProperties>({
			GlobalTableArn: new FormControl<string | null | undefined>(undefined),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined),
			GlobalTableStatus: new FormControl<GlobalTableStatus | null | undefined>(undefined),
			GlobalTableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the details of the replica. */
	export interface ReplicaDescription {
		RegionName?: string;
		ReplicaStatus?: ReplicaStatus;
		ReplicaStatusDescription?: string;
		ReplicaStatusPercentProgress?: string;
		KMSMasterKeyId?: string;
		ProvisionedThroughputOverride?: ProvisionedThroughputOverride;
		GlobalSecondaryIndexes?: Array<ReplicaGlobalSecondaryIndexDescription>;
		ReplicaInaccessibleDateTime?: Date;

		/** Contains details of the table class. */
		ReplicaTableClassSummary?: TableClassSummary;
	}

	/** Contains the details of the replica. */
	export interface ReplicaDescriptionFormProperties {
		RegionName: FormControl<string | null | undefined>,
		ReplicaStatus: FormControl<ReplicaStatus | null | undefined>,
		ReplicaStatusDescription: FormControl<string | null | undefined>,
		ReplicaStatusPercentProgress: FormControl<string | null | undefined>,
		KMSMasterKeyId: FormControl<string | null | undefined>,
		ReplicaInaccessibleDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateReplicaDescriptionFormGroup() {
		return new FormGroup<ReplicaDescriptionFormProperties>({
			RegionName: new FormControl<string | null | undefined>(undefined),
			ReplicaStatus: new FormControl<ReplicaStatus | null | undefined>(undefined),
			ReplicaStatusDescription: new FormControl<string | null | undefined>(undefined),
			ReplicaStatusPercentProgress: new FormControl<string | null | undefined>(undefined),
			KMSMasterKeyId: new FormControl<string | null | undefined>(undefined),
			ReplicaInaccessibleDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ReplicaStatus { CREATING = 0, CREATION_FAILED = 1, UPDATING = 2, DELETING = 3, ACTIVE = 4, REGION_DISABLED = 5, INACCESSIBLE_ENCRYPTION_CREDENTIALS = 6 }


	/** Replica-specific provisioned throughput settings. If not specified, uses the source table's provisioned throughput settings. */
	export interface ProvisionedThroughputOverride {
		ReadCapacityUnits?: number | null;
	}

	/** Replica-specific provisioned throughput settings. If not specified, uses the source table's provisioned throughput settings. */
	export interface ProvisionedThroughputOverrideFormProperties {
		ReadCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateProvisionedThroughputOverrideFormGroup() {
		return new FormGroup<ProvisionedThroughputOverrideFormProperties>({
			ReadCapacityUnits: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the properties of a replica global secondary index. */
	export interface ReplicaGlobalSecondaryIndexDescription {
		IndexName?: string;
		ProvisionedThroughputOverride?: ProvisionedThroughputOverride;
	}

	/** Represents the properties of a replica global secondary index. */
	export interface ReplicaGlobalSecondaryIndexDescriptionFormProperties {
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateReplicaGlobalSecondaryIndexDescriptionFormGroup() {
		return new FormGroup<ReplicaGlobalSecondaryIndexDescriptionFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details of the table class. */
	export interface TableClassSummary {
		TableClass?: TableClass;
		LastUpdateDateTime?: Date;
	}

	/** Contains details of the table class. */
	export interface TableClassSummaryFormProperties {
		TableClass: FormControl<TableClass | null | undefined>,
		LastUpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateTableClassSummaryFormGroup() {
		return new FormGroup<TableClassSummaryFormProperties>({
			TableClass: new FormControl<TableClass | null | undefined>(undefined),
			LastUpdateDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum TableClass { STANDARD = 0, STANDARD_INFREQUENT_ACCESS = 1 }

	export enum GlobalTableStatus { CREATING = 0, ACTIVE = 1, DELETING = 2, UPDATING = 3 }

	export interface CreateGlobalTableInput {

		/** Required */
		GlobalTableName: string;

		/** Required */
		ReplicationGroup: Array<Replica>;
	}
	export interface CreateGlobalTableInputFormProperties {

		/** Required */
		GlobalTableName: FormControl<string | null | undefined>,
	}
	export function CreateCreateGlobalTableInputFormGroup() {
		return new FormGroup<CreateGlobalTableInputFormProperties>({
			GlobalTableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the properties of a replica. */
	export interface Replica {
		RegionName?: string;
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
		TableName?: string;
		KeySchema?: Array<KeySchemaElement>;
		TableStatus?: TableStatus;
		CreationDateTime?: Date;
		ProvisionedThroughput?: ProvisionedThroughputDescription;
		TableSizeBytes?: number | null;
		ItemCount?: number | null;
		TableArn?: string;
		TableId?: string;
		BillingModeSummary?: BillingModeSummary;
		LocalSecondaryIndexes?: Array<LocalSecondaryIndexDescription>;
		GlobalSecondaryIndexes?: Array<GlobalSecondaryIndexDescription>;
		StreamSpecification?: StreamSpecification;
		LatestStreamLabel?: string;
		LatestStreamArn?: string;
		GlobalTableVersion?: string;
		Replicas?: Array<ReplicaDescription>;
		RestoreSummary?: RestoreSummary;
		SSEDescription?: SSEDescription;
		ArchivalSummary?: ArchivalSummary;
		TableClassSummary?: TableClassSummary;
		DeletionProtectionEnabled?: boolean | null;
	}

	/** Represents the properties of a table. */
	export interface TableDescriptionFormProperties {
		TableName: FormControl<string | null | undefined>,
		TableStatus: FormControl<TableStatus | null | undefined>,
		CreationDateTime: FormControl<Date | null | undefined>,
		TableSizeBytes: FormControl<number | null | undefined>,
		ItemCount: FormControl<number | null | undefined>,
		TableArn: FormControl<string | null | undefined>,
		TableId: FormControl<string | null | undefined>,
		LatestStreamLabel: FormControl<string | null | undefined>,
		LatestStreamArn: FormControl<string | null | undefined>,
		GlobalTableVersion: FormControl<string | null | undefined>,
		DeletionProtectionEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateTableDescriptionFormGroup() {
		return new FormGroup<TableDescriptionFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined),
			TableStatus: new FormControl<TableStatus | null | undefined>(undefined),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined),
			TableSizeBytes: new FormControl<number | null | undefined>(undefined),
			ItemCount: new FormControl<number | null | undefined>(undefined),
			TableArn: new FormControl<string | null | undefined>(undefined),
			TableId: new FormControl<string | null | undefined>(undefined),
			LatestStreamLabel: new FormControl<string | null | undefined>(undefined),
			LatestStreamArn: new FormControl<string | null | undefined>(undefined),
			GlobalTableVersion: new FormControl<string | null | undefined>(undefined),
			DeletionProtectionEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents an attribute for describing the key schema for the table and indexes. */
	export interface AttributeDefinition {

		/** Required */
		AttributeName: string;

		/** Required */
		AttributeType: ScalarAttributeType;
	}

	/** Represents an attribute for describing the key schema for the table and indexes. */
	export interface AttributeDefinitionFormProperties {

		/** Required */
		AttributeName: FormControl<string | null | undefined>,

		/** Required */
		AttributeType: FormControl<ScalarAttributeType | null | undefined>,
	}
	export function CreateAttributeDefinitionFormGroup() {
		return new FormGroup<AttributeDefinitionFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AttributeType: new FormControl<ScalarAttributeType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ScalarAttributeType { S = 0, N = 1, B = 2 }


	/** <p>Represents <i>a single element</i> of a key schema. A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index.</p> <p>A <code>KeySchemaElement</code> represents exactly one attribute of the primary key. For example, a simple primary key would be represented by one <code>KeySchemaElement</code> (for the partition key). A composite primary key would require one <code>KeySchemaElement</code> for the partition key, and another <code>KeySchemaElement</code> for the sort key.</p> <p>A <code>KeySchemaElement</code> must be a scalar, top-level attribute (not a nested attribute). The data type must be one of String, Number, or Binary. The attribute cannot be nested within a List or a Map.</p> */
	export interface KeySchemaElement {

		/** Required */
		AttributeName: string;

		/** Required */
		KeyType: KeyType;
	}

	/** <p>Represents <i>a single element</i> of a key schema. A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index.</p> <p>A <code>KeySchemaElement</code> represents exactly one attribute of the primary key. For example, a simple primary key would be represented by one <code>KeySchemaElement</code> (for the partition key). A composite primary key would require one <code>KeySchemaElement</code> for the partition key, and another <code>KeySchemaElement</code> for the sort key.</p> <p>A <code>KeySchemaElement</code> must be a scalar, top-level attribute (not a nested attribute). The data type must be one of String, Number, or Binary. The attribute cannot be nested within a List or a Map.</p> */
	export interface KeySchemaElementFormProperties {

		/** Required */
		AttributeName: FormControl<string | null | undefined>,

		/** Required */
		KeyType: FormControl<KeyType | null | undefined>,
	}
	export function CreateKeySchemaElementFormGroup() {
		return new FormGroup<KeySchemaElementFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyType: new FormControl<KeyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum KeyType { HASH = 0, RANGE = 1 }

	export enum TableStatus { CREATING = 0, UPDATING = 1, DELETING = 2, ACTIVE = 3, INACCESSIBLE_ENCRYPTION_CREDENTIALS = 4, ARCHIVING = 5, ARCHIVED = 6 }


	/** Represents the provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases. */
	export interface ProvisionedThroughputDescription {
		LastIncreaseDateTime?: Date;
		LastDecreaseDateTime?: Date;
		NumberOfDecreasesToday?: number | null;
		ReadCapacityUnits?: number | null;
		WriteCapacityUnits?: number | null;
	}

	/** Represents the provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases. */
	export interface ProvisionedThroughputDescriptionFormProperties {
		LastIncreaseDateTime: FormControl<Date | null | undefined>,
		LastDecreaseDateTime: FormControl<Date | null | undefined>,
		NumberOfDecreasesToday: FormControl<number | null | undefined>,
		ReadCapacityUnits: FormControl<number | null | undefined>,
		WriteCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateProvisionedThroughputDescriptionFormGroup() {
		return new FormGroup<ProvisionedThroughputDescriptionFormProperties>({
			LastIncreaseDateTime: new FormControl<Date | null | undefined>(undefined),
			LastDecreaseDateTime: new FormControl<Date | null | undefined>(undefined),
			NumberOfDecreasesToday: new FormControl<number | null | undefined>(undefined),
			ReadCapacityUnits: new FormControl<number | null | undefined>(undefined),
			WriteCapacityUnits: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Contains the details for the read/write capacity mode. This page talks about <code>PROVISIONED</code> and <code>PAY_PER_REQUEST</code> billing modes. For more information about these modes, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html">Read/write capacity mode</a>.</p> <note> <p>You may need to switch to on-demand mode at least once in order to return a <code>BillingModeSummary</code> response.</p> </note> */
	export interface BillingModeSummary {
		BillingMode?: BillingMode;
		LastUpdateToPayPerRequestDateTime?: Date;
	}

	/** <p>Contains the details for the read/write capacity mode. This page talks about <code>PROVISIONED</code> and <code>PAY_PER_REQUEST</code> billing modes. For more information about these modes, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html">Read/write capacity mode</a>.</p> <note> <p>You may need to switch to on-demand mode at least once in order to return a <code>BillingModeSummary</code> response.</p> </note> */
	export interface BillingModeSummaryFormProperties {
		BillingMode: FormControl<BillingMode | null | undefined>,
		LastUpdateToPayPerRequestDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateBillingModeSummaryFormGroup() {
		return new FormGroup<BillingModeSummaryFormProperties>({
			BillingMode: new FormControl<BillingMode | null | undefined>(undefined),
			LastUpdateToPayPerRequestDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum BillingMode { PROVISIONED = 0, PAY_PER_REQUEST = 1 }


	/** Represents the properties of a local secondary index. */
	export interface LocalSecondaryIndexDescription {
		IndexName?: string;
		KeySchema?: Array<KeySchemaElement>;
		Projection?: Projection;
		IndexSizeBytes?: number | null;
		ItemCount?: number | null;
		IndexArn?: string;
	}

	/** Represents the properties of a local secondary index. */
	export interface LocalSecondaryIndexDescriptionFormProperties {
		IndexName: FormControl<string | null | undefined>,
		IndexSizeBytes: FormControl<number | null | undefined>,
		ItemCount: FormControl<number | null | undefined>,
		IndexArn: FormControl<string | null | undefined>,
	}
	export function CreateLocalSecondaryIndexDescriptionFormGroup() {
		return new FormGroup<LocalSecondaryIndexDescriptionFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined),
			IndexSizeBytes: new FormControl<number | null | undefined>(undefined),
			ItemCount: new FormControl<number | null | undefined>(undefined),
			IndexArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. */
	export interface Projection {
		ProjectionType?: ProjectionType;
		NonKeyAttributes?: Array<string>;
	}

	/** Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. */
	export interface ProjectionFormProperties {
		ProjectionType: FormControl<ProjectionType | null | undefined>,
	}
	export function CreateProjectionFormGroup() {
		return new FormGroup<ProjectionFormProperties>({
			ProjectionType: new FormControl<ProjectionType | null | undefined>(undefined),
		});

	}

	export enum ProjectionType { ALL = 0, KEYS_ONLY = 1, INCLUDE = 2 }


	/** Represents the properties of a global secondary index. */
	export interface GlobalSecondaryIndexDescription {
		IndexName?: string;
		KeySchema?: Array<KeySchemaElement>;
		Projection?: Projection;
		IndexStatus?: IndexStatus;
		Backfilling?: boolean | null;
		ProvisionedThroughput?: ProvisionedThroughputDescription;
		IndexSizeBytes?: number | null;
		ItemCount?: number | null;
		IndexArn?: string;
	}

	/** Represents the properties of a global secondary index. */
	export interface GlobalSecondaryIndexDescriptionFormProperties {
		IndexName: FormControl<string | null | undefined>,
		IndexStatus: FormControl<IndexStatus | null | undefined>,
		Backfilling: FormControl<boolean | null | undefined>,
		IndexSizeBytes: FormControl<number | null | undefined>,
		ItemCount: FormControl<number | null | undefined>,
		IndexArn: FormControl<string | null | undefined>,
	}
	export function CreateGlobalSecondaryIndexDescriptionFormGroup() {
		return new FormGroup<GlobalSecondaryIndexDescriptionFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined),
			IndexStatus: new FormControl<IndexStatus | null | undefined>(undefined),
			Backfilling: new FormControl<boolean | null | undefined>(undefined),
			IndexSizeBytes: new FormControl<number | null | undefined>(undefined),
			ItemCount: new FormControl<number | null | undefined>(undefined),
			IndexArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IndexStatus { CREATING = 0, UPDATING = 1, DELETING = 2, ACTIVE = 3 }


	/** Represents the DynamoDB Streams configuration for a table in DynamoDB. */
	export interface StreamSpecification {

		/** Required */
		StreamEnabled: boolean;
		StreamViewType?: StreamViewType;
	}

	/** Represents the DynamoDB Streams configuration for a table in DynamoDB. */
	export interface StreamSpecificationFormProperties {

		/** Required */
		StreamEnabled: FormControl<boolean | null | undefined>,
		StreamViewType: FormControl<StreamViewType | null | undefined>,
	}
	export function CreateStreamSpecificationFormGroup() {
		return new FormGroup<StreamSpecificationFormProperties>({
			StreamEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			StreamViewType: new FormControl<StreamViewType | null | undefined>(undefined),
		});

	}

	export enum StreamViewType { NEW_IMAGE = 0, OLD_IMAGE = 1, NEW_AND_OLD_IMAGES = 2, KEYS_ONLY = 3 }


	/** Contains details for the restore. */
	export interface RestoreSummary {
		SourceBackupArn?: string;
		SourceTableArn?: string;

		/** Required */
		RestoreDateTime: Date;

		/** Required */
		RestoreInProgress: boolean;
	}

	/** Contains details for the restore. */
	export interface RestoreSummaryFormProperties {
		SourceBackupArn: FormControl<string | null | undefined>,
		SourceTableArn: FormControl<string | null | undefined>,

		/** Required */
		RestoreDateTime: FormControl<Date | null | undefined>,

		/** Required */
		RestoreInProgress: FormControl<boolean | null | undefined>,
	}
	export function CreateRestoreSummaryFormGroup() {
		return new FormGroup<RestoreSummaryFormProperties>({
			SourceBackupArn: new FormControl<string | null | undefined>(undefined),
			SourceTableArn: new FormControl<string | null | undefined>(undefined),
			RestoreDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			RestoreInProgress: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The description of the server-side encryption status on the specified table. */
	export interface SSEDescription {
		Status?: SSEStatus;
		SSEType?: SSEType;
		KMSMasterKeyArn?: string;
		InaccessibleEncryptionDateTime?: Date;
	}

	/** The description of the server-side encryption status on the specified table. */
	export interface SSEDescriptionFormProperties {
		Status: FormControl<SSEStatus | null | undefined>,
		SSEType: FormControl<SSEType | null | undefined>,
		KMSMasterKeyArn: FormControl<string | null | undefined>,
		InaccessibleEncryptionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateSSEDescriptionFormGroup() {
		return new FormGroup<SSEDescriptionFormProperties>({
			Status: new FormControl<SSEStatus | null | undefined>(undefined),
			SSEType: new FormControl<SSEType | null | undefined>(undefined),
			KMSMasterKeyArn: new FormControl<string | null | undefined>(undefined),
			InaccessibleEncryptionDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum SSEStatus { ENABLING = 0, ENABLED = 1, DISABLING = 2, DISABLED = 3, UPDATING = 4 }

	export enum SSEType { AES256 = 0, KMS = 1 }


	/** Contains details of a table archival operation. */
	export interface ArchivalSummary {
		ArchivalDateTime?: Date;
		ArchivalReason?: string;
		ArchivalBackupArn?: string;
	}

	/** Contains details of a table archival operation. */
	export interface ArchivalSummaryFormProperties {
		ArchivalDateTime: FormControl<Date | null | undefined>,
		ArchivalReason: FormControl<string | null | undefined>,
		ArchivalBackupArn: FormControl<string | null | undefined>,
	}
	export function CreateArchivalSummaryFormGroup() {
		return new FormGroup<ArchivalSummaryFormProperties>({
			ArchivalDateTime: new FormControl<Date | null | undefined>(undefined),
			ArchivalReason: new FormControl<string | null | undefined>(undefined),
			ArchivalBackupArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>CreateTable</code> operation. */
	export interface CreateTableInput {

		/** Required */
		AttributeDefinitions: Array<AttributeDefinition>;

		/** Required */
		TableName: string;

		/** Required */
		KeySchema: Array<KeySchemaElement>;
		LocalSecondaryIndexes?: Array<LocalSecondaryIndex>;
		GlobalSecondaryIndexes?: Array<GlobalSecondaryIndex>;
		BillingMode?: BillingMode;
		ProvisionedThroughput?: ProvisionedThroughput;
		StreamSpecification?: StreamSpecification;
		SSESpecification?: SSESpecification;
		Tags?: Array<Tag>;
		TableClass?: TableClass;
		DeletionProtectionEnabled?: boolean | null;
	}

	/** Represents the input of a <code>CreateTable</code> operation. */
	export interface CreateTableInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
		BillingMode: FormControl<BillingMode | null | undefined>,
		TableClass: FormControl<TableClass | null | undefined>,
		DeletionProtectionEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateTableInputFormGroup() {
		return new FormGroup<CreateTableInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BillingMode: new FormControl<BillingMode | null | undefined>(undefined),
			TableClass: new FormControl<TableClass | null | undefined>(undefined),
			DeletionProtectionEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents the properties of a local secondary index. */
	export interface LocalSecondaryIndex {

		/** Required */
		IndexName: string;

		/** Required */
		KeySchema: Array<KeySchemaElement>;

		/** Required */
		Projection: Projection;
	}

	/** Represents the properties of a local secondary index. */
	export interface LocalSecondaryIndexFormProperties {

		/** Required */
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateLocalSecondaryIndexFormGroup() {
		return new FormGroup<LocalSecondaryIndexFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the properties of a global secondary index. */
	export interface GlobalSecondaryIndex {

		/** Required */
		IndexName: string;

		/** Required */
		KeySchema: Array<KeySchemaElement>;

		/** Required */
		Projection: Projection;
		ProvisionedThroughput?: ProvisionedThroughput;
	}

	/** Represents the properties of a global secondary index. */
	export interface GlobalSecondaryIndexFormProperties {

		/** Required */
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateGlobalSecondaryIndexFormGroup() {
		return new FormGroup<GlobalSecondaryIndexFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
	export interface ProvisionedThroughput {

		/** Required */
		ReadCapacityUnits: number;

		/** Required */
		WriteCapacityUnits: number;
	}

	/** <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
	export interface ProvisionedThroughputFormProperties {

		/** Required */
		ReadCapacityUnits: FormControl<number | null | undefined>,

		/** Required */
		WriteCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateProvisionedThroughputFormGroup() {
		return new FormGroup<ProvisionedThroughputFormProperties>({
			ReadCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			WriteCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the settings used to enable server-side encryption. */
	export interface SSESpecification {
		Enabled?: boolean | null;
		SSEType?: SSEType;
		KMSMasterKeyId?: string;
	}

	/** Represents the settings used to enable server-side encryption. */
	export interface SSESpecificationFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		SSEType: FormControl<SSEType | null | undefined>,
		KMSMasterKeyId: FormControl<string | null | undefined>,
	}
	export function CreateSSESpecificationFormGroup() {
		return new FormGroup<SSESpecificationFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			SSEType: new FormControl<SSEType | null | undefined>(undefined),
			KMSMasterKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a single DynamoDB table. </p> <p>Amazon Web Services-assigned tag names and values are automatically assigned the <code>aws:</code> prefix, which the user cannot assign. Amazon Web Services-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix <code>user:</code> in the Cost Allocation Report. You cannot backdate the application of a tag.</p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** <p>Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a single DynamoDB table. </p> <p>Amazon Web Services-assigned tag names and values are automatically assigned the <code>aws:</code> prefix, which the user cannot assign. Amazon Web Services-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix <code>user:</code> in the Cost Allocation Report. You cannot backdate the application of a tag.</p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		BackupDetails?: BackupDetails;
		SourceTableDetails?: SourceTableDetails;
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

		/** Required */
		TableName: string;

		/** Required */
		TableId: string;
		TableArn?: string;
		TableSizeBytes?: number | null;

		/** Required */
		KeySchema: Array<KeySchemaElement>;

		/** Required */
		TableCreationDateTime: Date;

		/** Required */
		ProvisionedThroughput: ProvisionedThroughput;
		ItemCount?: number | null;
		BillingMode?: BillingMode;
	}

	/** Contains the details of the table when the backup was created.  */
	export interface SourceTableDetailsFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,

		/** Required */
		TableId: FormControl<string | null | undefined>,
		TableArn: FormControl<string | null | undefined>,
		TableSizeBytes: FormControl<number | null | undefined>,

		/** Required */
		TableCreationDateTime: FormControl<Date | null | undefined>,
		ItemCount: FormControl<number | null | undefined>,
		BillingMode: FormControl<BillingMode | null | undefined>,
	}
	export function CreateSourceTableDetailsFormGroup() {
		return new FormGroup<SourceTableDetailsFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableArn: new FormControl<string | null | undefined>(undefined),
			TableSizeBytes: new FormControl<number | null | undefined>(undefined),
			TableCreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ItemCount: new FormControl<number | null | undefined>(undefined),
			BillingMode: new FormControl<BillingMode | null | undefined>(undefined),
		});

	}


	/** Contains the details of the features enabled on the table when the backup was created. For example, LSIs, GSIs, streams, TTL.  */
	export interface SourceTableFeatureDetails {
		LocalSecondaryIndexes?: Array<LocalSecondaryIndexInfo>;
		GlobalSecondaryIndexes?: Array<GlobalSecondaryIndexInfo>;
		StreamDescription?: StreamSpecification;
		TimeToLiveDescription?: TimeToLiveDescription;
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
		IndexName?: string;
		KeySchema?: Array<KeySchemaElement>;
		Projection?: Projection;
	}

	/** Represents the properties of a local secondary index for the table when the backup was created. */
	export interface LocalSecondaryIndexInfoFormProperties {
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateLocalSecondaryIndexInfoFormGroup() {
		return new FormGroup<LocalSecondaryIndexInfoFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the properties of a global secondary index for the table when the backup was created. */
	export interface GlobalSecondaryIndexInfo {
		IndexName?: string;
		KeySchema?: Array<KeySchemaElement>;
		Projection?: Projection;
		ProvisionedThroughput?: ProvisionedThroughput;
	}

	/** Represents the properties of a global secondary index for the table when the backup was created. */
	export interface GlobalSecondaryIndexInfoFormProperties {
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateGlobalSecondaryIndexInfoFormGroup() {
		return new FormGroup<GlobalSecondaryIndexInfoFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The description of the Time to Live (TTL) status on the specified table.  */
	export interface TimeToLiveDescription {
		TimeToLiveStatus?: TimeToLiveStatus;
		AttributeName?: string;
	}

	/** The description of the Time to Live (TTL) status on the specified table.  */
	export interface TimeToLiveDescriptionFormProperties {
		TimeToLiveStatus: FormControl<TimeToLiveStatus | null | undefined>,
		AttributeName: FormControl<string | null | undefined>,
	}
	export function CreateTimeToLiveDescriptionFormGroup() {
		return new FormGroup<TimeToLiveDescriptionFormProperties>({
			TimeToLiveStatus: new FormControl<TimeToLiveStatus | null | undefined>(undefined),
			AttributeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TimeToLiveStatus { ENABLING = 0, DISABLING = 1, ENABLED = 2, DISABLED = 3 }

	export interface DeleteBackupInput {

		/** Required */
		BackupArn: string;
	}
	export interface DeleteBackupInputFormProperties {

		/** Required */
		BackupArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBackupInputFormGroup() {
		return new FormGroup<DeleteBackupInputFormProperties>({
			BackupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		ConsumedCapacity?: ConsumedCapacity;
		ItemCollectionMetrics?: ItemCollectionMetrics;
	}

	/** Represents the output of a <code>DeleteItem</code> operation. */
	export interface DeleteItemOutputFormProperties {
	}
	export function CreateDeleteItemOutputFormGroup() {
		return new FormGroup<DeleteItemOutputFormProperties>({
		});

	}


	/** Information about item collections, if any, that were affected by the operation. <code>ItemCollectionMetrics</code> is only returned if the request asked for it. If the table does not have any local secondary indexes, this information is not returned in the response. */
	export interface ItemCollectionMetrics {
		ItemCollectionKey?: ItemCollectionKeyAttributeMap;
		SizeEstimateRangeGB?: Array<number> | null;
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

		/** Required */
		TableName: string;

		/** Required */
		Key: Key;
		Expected?: ExpectedAttributeMap;
		ConditionalOperator?: ConditionalOperator;
		ReturnValues?: ReturnValue;

		/** <p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchExecuteStatementInputReturnConsumedCapacity | null;
		ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
		ConditionExpression?: string;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
		ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure;
	}

	/** Represents the input of a <code>DeleteItem</code> operation. */
	export interface DeleteItemInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
		ConditionalOperator: FormControl<ConditionalOperator | null | undefined>,
		ReturnValues: FormControl<ReturnValue | null | undefined>,

		/** <p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity: FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>,
		ReturnItemCollectionMetrics: FormControl<ReturnItemCollectionMetrics | null | undefined>,
		ConditionExpression: FormControl<string | null | undefined>,
		ReturnValuesOnConditionCheckFailure: FormControl<ReturnValuesOnConditionCheckFailure | null | undefined>,
	}
	export function CreateDeleteItemInputFormGroup() {
		return new FormGroup<DeleteItemInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConditionalOperator: new FormControl<ConditionalOperator | null | undefined>(undefined),
			ReturnValues: new FormControl<ReturnValue | null | undefined>(undefined),
			ReturnConsumedCapacity: new FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>(undefined),
			ReturnItemCollectionMetrics: new FormControl<ReturnItemCollectionMetrics | null | undefined>(undefined),
			ConditionExpression: new FormControl<string | null | undefined>(undefined),
			ReturnValuesOnConditionCheckFailure: new FormControl<ReturnValuesOnConditionCheckFailure | null | undefined>(undefined),
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

	export enum ConditionalOperator { AND = 0, OR = 1 }

	export enum ReturnValue { NONE = 0, ALL_OLD = 1, UPDATED_OLD = 2, ALL_NEW = 3, UPDATED_NEW = 4 }

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

		/** Required */
		TableName: string;
	}

	/** Represents the input of a <code>DeleteTable</code> operation. */
	export interface DeleteTableInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTableInputFormGroup() {
		return new FormGroup<DeleteTableInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeBackupOutput {
		BackupDescription?: BackupDescription;
	}
	export interface DescribeBackupOutputFormProperties {
	}
	export function CreateDescribeBackupOutputFormGroup() {
		return new FormGroup<DescribeBackupOutputFormProperties>({
		});

	}

	export interface DescribeBackupInput {

		/** Required */
		BackupArn: string;
	}
	export interface DescribeBackupInputFormProperties {

		/** Required */
		BackupArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBackupInputFormGroup() {
		return new FormGroup<DescribeBackupInputFormProperties>({
			BackupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeContinuousBackupsOutput {
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
		ContinuousBackupsStatus: ContinuousBackupsStatus;
		PointInTimeRecoveryDescription?: PointInTimeRecoveryDescription;
	}

	/** Represents the continuous backups and point in time recovery settings on the table. */
	export interface ContinuousBackupsDescriptionFormProperties {

		/** Required */
		ContinuousBackupsStatus: FormControl<ContinuousBackupsStatus | null | undefined>,
	}
	export function CreateContinuousBackupsDescriptionFormGroup() {
		return new FormGroup<ContinuousBackupsDescriptionFormProperties>({
			ContinuousBackupsStatus: new FormControl<ContinuousBackupsStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ContinuousBackupsStatus { ENABLED = 0, DISABLED = 1 }


	/** The description of the point in time settings applied to the table. */
	export interface PointInTimeRecoveryDescription {
		PointInTimeRecoveryStatus?: ContinuousBackupsStatus;
		EarliestRestorableDateTime?: Date;
		LatestRestorableDateTime?: Date;
	}

	/** The description of the point in time settings applied to the table. */
	export interface PointInTimeRecoveryDescriptionFormProperties {
		PointInTimeRecoveryStatus: FormControl<ContinuousBackupsStatus | null | undefined>,
		EarliestRestorableDateTime: FormControl<Date | null | undefined>,
		LatestRestorableDateTime: FormControl<Date | null | undefined>,
	}
	export function CreatePointInTimeRecoveryDescriptionFormGroup() {
		return new FormGroup<PointInTimeRecoveryDescriptionFormProperties>({
			PointInTimeRecoveryStatus: new FormControl<ContinuousBackupsStatus | null | undefined>(undefined),
			EarliestRestorableDateTime: new FormControl<Date | null | undefined>(undefined),
			LatestRestorableDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeContinuousBackupsInput {

		/** Required */
		TableName: string;
	}
	export interface DescribeContinuousBackupsInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeContinuousBackupsInputFormGroup() {
		return new FormGroup<DescribeContinuousBackupsInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeContributorInsightsOutput {
		TableName?: string;
		IndexName?: string;
		ContributorInsightsRuleList?: Array<string>;
		ContributorInsightsStatus?: ContributorInsightsStatus;
		LastUpdateDateTime?: Date;
		FailureException?: FailureException;
	}
	export interface DescribeContributorInsightsOutputFormProperties {
		TableName: FormControl<string | null | undefined>,
		IndexName: FormControl<string | null | undefined>,
		ContributorInsightsStatus: FormControl<ContributorInsightsStatus | null | undefined>,
		LastUpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeContributorInsightsOutputFormGroup() {
		return new FormGroup<DescribeContributorInsightsOutputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined),
			IndexName: new FormControl<string | null | undefined>(undefined),
			ContributorInsightsStatus: new FormControl<ContributorInsightsStatus | null | undefined>(undefined),
			LastUpdateDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ContributorInsightsStatus { ENABLING = 0, ENABLED = 1, DISABLING = 2, DISABLED = 3, FAILED = 4 }


	/** Represents a failure a contributor insights operation. */
	export interface FailureException {
		ExceptionName?: string;
		ExceptionDescription?: string;
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

		/** Required */
		TableName: string;
		IndexName?: string;
	}
	export interface DescribeContributorInsightsInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeContributorInsightsInputFormGroup() {
		return new FormGroup<DescribeContributorInsightsInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexName: new FormControl<string | null | undefined>(undefined),
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

	export interface DescribeExportOutput {
		ExportDescription?: ExportDescription;
	}
	export interface DescribeExportOutputFormProperties {
	}
	export function CreateDescribeExportOutputFormGroup() {
		return new FormGroup<DescribeExportOutputFormProperties>({
		});

	}


	/** Represents the properties of the exported table. */
	export interface ExportDescription {
		ExportArn?: string;
		ExportStatus?: ExportStatus;
		StartTime?: Date;
		EndTime?: Date;
		ExportManifest?: string;
		TableArn?: string;
		TableId?: string;
		ExportTime?: Date;
		ClientToken?: string;
		S3Bucket?: string;
		S3BucketOwner?: string;
		S3Prefix?: string;
		S3SseAlgorithm?: SSEType;
		S3SseKmsKeyId?: string;
		FailureCode?: string;
		FailureMessage?: string;
		ExportFormat?: ExportFormat;
		BilledSizeBytes?: number | null;
		ItemCount?: number | null;
	}

	/** Represents the properties of the exported table. */
	export interface ExportDescriptionFormProperties {
		ExportArn: FormControl<string | null | undefined>,
		ExportStatus: FormControl<ExportStatus | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		ExportManifest: FormControl<string | null | undefined>,
		TableArn: FormControl<string | null | undefined>,
		TableId: FormControl<string | null | undefined>,
		ExportTime: FormControl<Date | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
		S3Bucket: FormControl<string | null | undefined>,
		S3BucketOwner: FormControl<string | null | undefined>,
		S3Prefix: FormControl<string | null | undefined>,
		S3SseAlgorithm: FormControl<SSEType | null | undefined>,
		S3SseKmsKeyId: FormControl<string | null | undefined>,
		FailureCode: FormControl<string | null | undefined>,
		FailureMessage: FormControl<string | null | undefined>,
		ExportFormat: FormControl<ExportFormat | null | undefined>,
		BilledSizeBytes: FormControl<number | null | undefined>,
		ItemCount: FormControl<number | null | undefined>,
	}
	export function CreateExportDescriptionFormGroup() {
		return new FormGroup<ExportDescriptionFormProperties>({
			ExportArn: new FormControl<string | null | undefined>(undefined),
			ExportStatus: new FormControl<ExportStatus | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			ExportManifest: new FormControl<string | null | undefined>(undefined),
			TableArn: new FormControl<string | null | undefined>(undefined),
			TableId: new FormControl<string | null | undefined>(undefined),
			ExportTime: new FormControl<Date | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			S3Bucket: new FormControl<string | null | undefined>(undefined),
			S3BucketOwner: new FormControl<string | null | undefined>(undefined),
			S3Prefix: new FormControl<string | null | undefined>(undefined),
			S3SseAlgorithm: new FormControl<SSEType | null | undefined>(undefined),
			S3SseKmsKeyId: new FormControl<string | null | undefined>(undefined),
			FailureCode: new FormControl<string | null | undefined>(undefined),
			FailureMessage: new FormControl<string | null | undefined>(undefined),
			ExportFormat: new FormControl<ExportFormat | null | undefined>(undefined),
			BilledSizeBytes: new FormControl<number | null | undefined>(undefined),
			ItemCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ExportStatus { IN_PROGRESS = 0, COMPLETED = 1, FAILED = 2 }

	export enum ExportFormat { DYNAMODB_JSON = 0, ION = 1 }

	export interface DescribeExportInput {

		/** Required */
		ExportArn: string;
	}
	export interface DescribeExportInputFormProperties {

		/** Required */
		ExportArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeExportInputFormGroup() {
		return new FormGroup<DescribeExportInputFormProperties>({
			ExportArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExportNotFoundException {
	}
	export interface ExportNotFoundExceptionFormProperties {
	}
	export function CreateExportNotFoundExceptionFormGroup() {
		return new FormGroup<ExportNotFoundExceptionFormProperties>({
		});

	}

	export interface DescribeGlobalTableOutput {
		GlobalTableDescription?: GlobalTableDescription;
	}
	export interface DescribeGlobalTableOutputFormProperties {
	}
	export function CreateDescribeGlobalTableOutputFormGroup() {
		return new FormGroup<DescribeGlobalTableOutputFormProperties>({
		});

	}

	export interface DescribeGlobalTableInput {

		/** Required */
		GlobalTableName: string;
	}
	export interface DescribeGlobalTableInputFormProperties {

		/** Required */
		GlobalTableName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGlobalTableInputFormGroup() {
		return new FormGroup<DescribeGlobalTableInputFormProperties>({
			GlobalTableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		GlobalTableName?: string;
		ReplicaSettings?: Array<ReplicaSettingsDescription>;
	}
	export interface DescribeGlobalTableSettingsOutputFormProperties {
		GlobalTableName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGlobalTableSettingsOutputFormGroup() {
		return new FormGroup<DescribeGlobalTableSettingsOutputFormProperties>({
			GlobalTableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the properties of a replica. */
	export interface ReplicaSettingsDescription {

		/** Required */
		RegionName: string;
		ReplicaStatus?: ReplicaStatus;
		ReplicaBillingModeSummary?: BillingModeSummary;
		ReplicaProvisionedReadCapacityUnits?: number | null;
		ReplicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
		ReplicaProvisionedWriteCapacityUnits?: number | null;
		ReplicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
		ReplicaGlobalSecondaryIndexSettings?: Array<ReplicaGlobalSecondaryIndexSettingsDescription>;

		/** Contains details of the table class. */
		ReplicaTableClassSummary?: TableClassSummary;
	}

	/** Represents the properties of a replica. */
	export interface ReplicaSettingsDescriptionFormProperties {

		/** Required */
		RegionName: FormControl<string | null | undefined>,
		ReplicaStatus: FormControl<ReplicaStatus | null | undefined>,
		ReplicaProvisionedReadCapacityUnits: FormControl<number | null | undefined>,
		ReplicaProvisionedWriteCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateReplicaSettingsDescriptionFormGroup() {
		return new FormGroup<ReplicaSettingsDescriptionFormProperties>({
			RegionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplicaStatus: new FormControl<ReplicaStatus | null | undefined>(undefined),
			ReplicaProvisionedReadCapacityUnits: new FormControl<number | null | undefined>(undefined),
			ReplicaProvisionedWriteCapacityUnits: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the auto scaling settings for a global table or global secondary index. */
	export interface AutoScalingSettingsDescription {
		MinimumUnits?: number | null;
		MaximumUnits?: number | null;
		AutoScalingDisabled?: boolean | null;
		AutoScalingRoleArn?: string;
		ScalingPolicies?: Array<AutoScalingPolicyDescription>;
	}

	/** Represents the auto scaling settings for a global table or global secondary index. */
	export interface AutoScalingSettingsDescriptionFormProperties {
		MinimumUnits: FormControl<number | null | undefined>,
		MaximumUnits: FormControl<number | null | undefined>,
		AutoScalingDisabled: FormControl<boolean | null | undefined>,
		AutoScalingRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateAutoScalingSettingsDescriptionFormGroup() {
		return new FormGroup<AutoScalingSettingsDescriptionFormProperties>({
			MinimumUnits: new FormControl<number | null | undefined>(undefined),
			MaximumUnits: new FormControl<number | null | undefined>(undefined),
			AutoScalingDisabled: new FormControl<boolean | null | undefined>(undefined),
			AutoScalingRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the properties of the scaling policy. */
	export interface AutoScalingPolicyDescription {
		PolicyName?: string;
		TargetTrackingScalingPolicyConfiguration?: AutoScalingTargetTrackingScalingPolicyConfigurationDescription;
	}

	/** Represents the properties of the scaling policy. */
	export interface AutoScalingPolicyDescriptionFormProperties {
		PolicyName: FormControl<string | null | undefined>,
	}
	export function CreateAutoScalingPolicyDescriptionFormGroup() {
		return new FormGroup<AutoScalingPolicyDescriptionFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined),
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

		/** Required */
		IndexName: string;
		IndexStatus?: IndexStatus;
		ProvisionedReadCapacityUnits?: number | null;
		ProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
		ProvisionedWriteCapacityUnits?: number | null;
		ProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
	}

	/** Represents the properties of a global secondary index. */
	export interface ReplicaGlobalSecondaryIndexSettingsDescriptionFormProperties {

		/** Required */
		IndexName: FormControl<string | null | undefined>,
		IndexStatus: FormControl<IndexStatus | null | undefined>,
		ProvisionedReadCapacityUnits: FormControl<number | null | undefined>,
		ProvisionedWriteCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateReplicaGlobalSecondaryIndexSettingsDescriptionFormGroup() {
		return new FormGroup<ReplicaGlobalSecondaryIndexSettingsDescriptionFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexStatus: new FormControl<IndexStatus | null | undefined>(undefined),
			ProvisionedReadCapacityUnits: new FormControl<number | null | undefined>(undefined),
			ProvisionedWriteCapacityUnits: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeGlobalTableSettingsInput {

		/** Required */
		GlobalTableName: string;
	}
	export interface DescribeGlobalTableSettingsInputFormProperties {

		/** Required */
		GlobalTableName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGlobalTableSettingsInputFormGroup() {
		return new FormGroup<DescribeGlobalTableSettingsInputFormProperties>({
			GlobalTableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeImportOutput {

		/** Required */
		ImportTableDescription: ImportTableDescription;
	}
	export interface DescribeImportOutputFormProperties {
	}
	export function CreateDescribeImportOutputFormGroup() {
		return new FormGroup<DescribeImportOutputFormProperties>({
		});

	}


	/**  Represents the properties of the table being imported into.  */
	export interface ImportTableDescription {
		ImportArn?: string;
		ImportStatus?: ImportStatus;
		TableArn?: string;
		TableId?: string;
		ClientToken?: string;
		S3BucketSource?: S3BucketSource;
		ErrorCount?: number | null;
		CloudWatchLogGroupArn?: string;
		InputFormat?: InputFormat;
		InputFormatOptions?: InputFormatOptions;
		InputCompressionType?: InputCompressionType;
		TableCreationParameters?: TableCreationParameters;
		StartTime?: Date;
		EndTime?: Date;
		ProcessedSizeBytes?: number | null;
		ProcessedItemCount?: number | null;
		ImportedItemCount?: number | null;
		FailureCode?: string;
		FailureMessage?: string;
	}

	/**  Represents the properties of the table being imported into.  */
	export interface ImportTableDescriptionFormProperties {
		ImportArn: FormControl<string | null | undefined>,
		ImportStatus: FormControl<ImportStatus | null | undefined>,
		TableArn: FormControl<string | null | undefined>,
		TableId: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
		ErrorCount: FormControl<number | null | undefined>,
		CloudWatchLogGroupArn: FormControl<string | null | undefined>,
		InputFormat: FormControl<InputFormat | null | undefined>,
		InputCompressionType: FormControl<InputCompressionType | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		ProcessedSizeBytes: FormControl<number | null | undefined>,
		ProcessedItemCount: FormControl<number | null | undefined>,
		ImportedItemCount: FormControl<number | null | undefined>,
		FailureCode: FormControl<string | null | undefined>,
		FailureMessage: FormControl<string | null | undefined>,
	}
	export function CreateImportTableDescriptionFormGroup() {
		return new FormGroup<ImportTableDescriptionFormProperties>({
			ImportArn: new FormControl<string | null | undefined>(undefined),
			ImportStatus: new FormControl<ImportStatus | null | undefined>(undefined),
			TableArn: new FormControl<string | null | undefined>(undefined),
			TableId: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			ErrorCount: new FormControl<number | null | undefined>(undefined),
			CloudWatchLogGroupArn: new FormControl<string | null | undefined>(undefined),
			InputFormat: new FormControl<InputFormat | null | undefined>(undefined),
			InputCompressionType: new FormControl<InputCompressionType | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			ProcessedSizeBytes: new FormControl<number | null | undefined>(undefined),
			ProcessedItemCount: new FormControl<number | null | undefined>(undefined),
			ImportedItemCount: new FormControl<number | null | undefined>(undefined),
			FailureCode: new FormControl<string | null | undefined>(undefined),
			FailureMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImportStatus { IN_PROGRESS = 0, COMPLETED = 1, CANCELLING = 2, CANCELLED = 3, FAILED = 4 }


	/**  The S3 bucket that is being imported from.  */
	export interface S3BucketSource {
		S3BucketOwner?: string;

		/** Required */
		S3Bucket: string;
		S3KeyPrefix?: string;
	}

	/**  The S3 bucket that is being imported from.  */
	export interface S3BucketSourceFormProperties {
		S3BucketOwner: FormControl<string | null | undefined>,

		/** Required */
		S3Bucket: FormControl<string | null | undefined>,
		S3KeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateS3BucketSourceFormGroup() {
		return new FormGroup<S3BucketSourceFormProperties>({
			S3BucketOwner: new FormControl<string | null | undefined>(undefined),
			S3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InputFormat { DYNAMODB_JSON = 0, ION = 1, CSV = 2 }


	/**  The format options for the data that was imported into the target table. There is one value, CsvOption. */
	export interface InputFormatOptions {
		Csv?: CsvOptions;
	}

	/**  The format options for the data that was imported into the target table. There is one value, CsvOption. */
	export interface InputFormatOptionsFormProperties {
	}
	export function CreateInputFormatOptionsFormGroup() {
		return new FormGroup<InputFormatOptionsFormProperties>({
		});

	}


	/**  Processing options for the CSV file being imported.  */
	export interface CsvOptions {
		Delimiter?: string;
		HeaderList?: Array<string>;
	}

	/**  Processing options for the CSV file being imported.  */
	export interface CsvOptionsFormProperties {
		Delimiter: FormControl<string | null | undefined>,
	}
	export function CreateCsvOptionsFormGroup() {
		return new FormGroup<CsvOptionsFormProperties>({
			Delimiter: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InputCompressionType { GZIP = 0, ZSTD = 1, NONE = 2 }


	/**  The parameters for the table created as part of the import operation.  */
	export interface TableCreationParameters {

		/** Required */
		TableName: string;

		/** Required */
		AttributeDefinitions: Array<AttributeDefinition>;

		/** Required */
		KeySchema: Array<KeySchemaElement>;
		BillingMode?: BillingMode;

		/** <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> */
		ProvisionedThroughput?: ProvisionedThroughput;

		/** Represents the settings used to enable server-side encryption. */
		SSESpecification?: SSESpecification;
		GlobalSecondaryIndexes?: Array<GlobalSecondaryIndex>;
	}

	/**  The parameters for the table created as part of the import operation.  */
	export interface TableCreationParametersFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
		BillingMode: FormControl<BillingMode | null | undefined>,
	}
	export function CreateTableCreationParametersFormGroup() {
		return new FormGroup<TableCreationParametersFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BillingMode: new FormControl<BillingMode | null | undefined>(undefined),
		});

	}

	export interface DescribeImportInput {

		/** Required */
		ImportArn: string;
	}
	export interface DescribeImportInputFormProperties {

		/** Required */
		ImportArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeImportInputFormGroup() {
		return new FormGroup<DescribeImportInputFormProperties>({
			ImportArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportNotFoundException {
	}
	export interface ImportNotFoundExceptionFormProperties {
	}
	export function CreateImportNotFoundExceptionFormGroup() {
		return new FormGroup<ImportNotFoundExceptionFormProperties>({
		});

	}

	export interface DescribeKinesisStreamingDestinationOutput {
		TableName?: string;
		KinesisDataStreamDestinations?: Array<KinesisDataStreamDestination>;
	}
	export interface DescribeKinesisStreamingDestinationOutputFormProperties {
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeKinesisStreamingDestinationOutputFormGroup() {
		return new FormGroup<DescribeKinesisStreamingDestinationOutputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a Kinesis data stream destination. */
	export interface KinesisDataStreamDestination {
		StreamArn?: string;
		DestinationStatus?: DestinationStatus;
		DestinationStatusDescription?: string;
	}

	/** Describes a Kinesis data stream destination. */
	export interface KinesisDataStreamDestinationFormProperties {
		StreamArn: FormControl<string | null | undefined>,
		DestinationStatus: FormControl<DestinationStatus | null | undefined>,
		DestinationStatusDescription: FormControl<string | null | undefined>,
	}
	export function CreateKinesisDataStreamDestinationFormGroup() {
		return new FormGroup<KinesisDataStreamDestinationFormProperties>({
			StreamArn: new FormControl<string | null | undefined>(undefined),
			DestinationStatus: new FormControl<DestinationStatus | null | undefined>(undefined),
			DestinationStatusDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DestinationStatus { ENABLING = 0, ACTIVE = 1, DISABLING = 2, DISABLED = 3, ENABLE_FAILED = 4 }

	export interface DescribeKinesisStreamingDestinationInput {

		/** Required */
		TableName: string;
	}
	export interface DescribeKinesisStreamingDestinationInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeKinesisStreamingDestinationInputFormGroup() {
		return new FormGroup<DescribeKinesisStreamingDestinationInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the output of a <code>DescribeLimits</code> operation. */
	export interface DescribeLimitsOutput {
		AccountMaxReadCapacityUnits?: number | null;
		AccountMaxWriteCapacityUnits?: number | null;
		TableMaxReadCapacityUnits?: number | null;
		TableMaxWriteCapacityUnits?: number | null;
	}

	/** Represents the output of a <code>DescribeLimits</code> operation. */
	export interface DescribeLimitsOutputFormProperties {
		AccountMaxReadCapacityUnits: FormControl<number | null | undefined>,
		AccountMaxWriteCapacityUnits: FormControl<number | null | undefined>,
		TableMaxReadCapacityUnits: FormControl<number | null | undefined>,
		TableMaxWriteCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateDescribeLimitsOutputFormGroup() {
		return new FormGroup<DescribeLimitsOutputFormProperties>({
			AccountMaxReadCapacityUnits: new FormControl<number | null | undefined>(undefined),
			AccountMaxWriteCapacityUnits: new FormControl<number | null | undefined>(undefined),
			TableMaxReadCapacityUnits: new FormControl<number | null | undefined>(undefined),
			TableMaxWriteCapacityUnits: new FormControl<number | null | undefined>(undefined),
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

		/** Required */
		TableName: string;
	}

	/** Represents the input of a <code>DescribeTable</code> operation. */
	export interface DescribeTableInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTableInputFormGroup() {
		return new FormGroup<DescribeTableInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeTableReplicaAutoScalingOutput {
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
		TableName?: string;
		TableStatus?: TableStatus;
		Replicas?: Array<ReplicaAutoScalingDescription>;
	}

	/** Represents the auto scaling configuration for a global table. */
	export interface TableAutoScalingDescriptionFormProperties {
		TableName: FormControl<string | null | undefined>,
		TableStatus: FormControl<TableStatus | null | undefined>,
	}
	export function CreateTableAutoScalingDescriptionFormGroup() {
		return new FormGroup<TableAutoScalingDescriptionFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined),
			TableStatus: new FormControl<TableStatus | null | undefined>(undefined),
		});

	}


	/** Represents the auto scaling settings of the replica. */
	export interface ReplicaAutoScalingDescription {
		RegionName?: string;
		GlobalSecondaryIndexes?: Array<ReplicaGlobalSecondaryIndexAutoScalingDescription>;

		/** Represents the auto scaling settings for a global table or global secondary index. */
		ReplicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

		/** Represents the auto scaling settings for a global table or global secondary index. */
		ReplicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
		ReplicaStatus?: ReplicaStatus;
	}

	/** Represents the auto scaling settings of the replica. */
	export interface ReplicaAutoScalingDescriptionFormProperties {
		RegionName: FormControl<string | null | undefined>,
		ReplicaStatus: FormControl<ReplicaStatus | null | undefined>,
	}
	export function CreateReplicaAutoScalingDescriptionFormGroup() {
		return new FormGroup<ReplicaAutoScalingDescriptionFormProperties>({
			RegionName: new FormControl<string | null | undefined>(undefined),
			ReplicaStatus: new FormControl<ReplicaStatus | null | undefined>(undefined),
		});

	}


	/** Represents the auto scaling configuration for a replica global secondary index. */
	export interface ReplicaGlobalSecondaryIndexAutoScalingDescription {
		IndexName?: string;
		IndexStatus?: IndexStatus;

		/** Represents the auto scaling settings for a global table or global secondary index. */
		ProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

		/** Represents the auto scaling settings for a global table or global secondary index. */
		ProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
	}

	/** Represents the auto scaling configuration for a replica global secondary index. */
	export interface ReplicaGlobalSecondaryIndexAutoScalingDescriptionFormProperties {
		IndexName: FormControl<string | null | undefined>,
		IndexStatus: FormControl<IndexStatus | null | undefined>,
	}
	export function CreateReplicaGlobalSecondaryIndexAutoScalingDescriptionFormGroup() {
		return new FormGroup<ReplicaGlobalSecondaryIndexAutoScalingDescriptionFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined),
			IndexStatus: new FormControl<IndexStatus | null | undefined>(undefined),
		});

	}

	export interface DescribeTableReplicaAutoScalingInput {

		/** Required */
		TableName: string;
	}
	export interface DescribeTableReplicaAutoScalingInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTableReplicaAutoScalingInputFormGroup() {
		return new FormGroup<DescribeTableReplicaAutoScalingInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeTimeToLiveOutput {
		TimeToLiveDescription?: TimeToLiveDescription;
	}
	export interface DescribeTimeToLiveOutputFormProperties {
	}
	export function CreateDescribeTimeToLiveOutputFormGroup() {
		return new FormGroup<DescribeTimeToLiveOutputFormProperties>({
		});

	}

	export interface DescribeTimeToLiveInput {

		/** Required */
		TableName: string;
	}
	export interface DescribeTimeToLiveInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTimeToLiveInputFormGroup() {
		return new FormGroup<DescribeTimeToLiveInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface KinesisStreamingDestinationOutput {
		TableName?: string;
		StreamArn?: string;
		DestinationStatus?: DestinationStatus;
	}
	export interface KinesisStreamingDestinationOutputFormProperties {
		TableName: FormControl<string | null | undefined>,
		StreamArn: FormControl<string | null | undefined>,
		DestinationStatus: FormControl<DestinationStatus | null | undefined>,
	}
	export function CreateKinesisStreamingDestinationOutputFormGroup() {
		return new FormGroup<KinesisStreamingDestinationOutputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined),
			StreamArn: new FormControl<string | null | undefined>(undefined),
			DestinationStatus: new FormControl<DestinationStatus | null | undefined>(undefined),
		});

	}

	export interface KinesisStreamingDestinationInput {

		/** Required */
		TableName: string;

		/** Required */
		StreamArn: string;
	}
	export interface KinesisStreamingDestinationInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,

		/** Required */
		StreamArn: FormControl<string | null | undefined>,
	}
	export function CreateKinesisStreamingDestinationInputFormGroup() {
		return new FormGroup<KinesisStreamingDestinationInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StreamArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExecuteStatementOutput {
		Items?: Array<AttributeMap>;
		NextToken?: string;

		/** The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>. */
		ConsumedCapacity?: ConsumedCapacity;
		LastEvaluatedKey?: Key;
	}
	export interface ExecuteStatementOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateExecuteStatementOutputFormGroup() {
		return new FormGroup<ExecuteStatementOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExecuteStatementInput {

		/** Required */
		Statement: string;
		Parameters?: Array<AttributeValue>;
		ConsistentRead?: boolean | null;
		NextToken?: string;

		/** <p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchExecuteStatementInputReturnConsumedCapacity | null;
		Limit?: number | null;
		ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure;
	}
	export interface ExecuteStatementInputFormProperties {

		/** Required */
		Statement: FormControl<string | null | undefined>,
		ConsistentRead: FormControl<boolean | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** <p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity: FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		ReturnValuesOnConditionCheckFailure: FormControl<ReturnValuesOnConditionCheckFailure | null | undefined>,
	}
	export function CreateExecuteStatementInputFormGroup() {
		return new FormGroup<ExecuteStatementInputFormProperties>({
			Statement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConsistentRead: new FormControl<boolean | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			ReturnConsumedCapacity: new FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			ReturnValuesOnConditionCheckFailure: new FormControl<ReturnValuesOnConditionCheckFailure | null | undefined>(undefined),
		});

	}

	export interface DuplicateItemException {
	}
	export interface DuplicateItemExceptionFormProperties {
	}
	export function CreateDuplicateItemExceptionFormGroup() {
		return new FormGroup<DuplicateItemExceptionFormProperties>({
		});

	}

	export interface ExecuteTransactionOutput {
		Responses?: Array<ItemResponse>;
		ConsumedCapacity?: Array<ConsumedCapacity>;
	}
	export interface ExecuteTransactionOutputFormProperties {
	}
	export function CreateExecuteTransactionOutputFormGroup() {
		return new FormGroup<ExecuteTransactionOutputFormProperties>({
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

	export interface ExecuteTransactionInput {

		/** Required */
		TransactStatements: Array<ParameterizedStatement>;
		ClientRequestToken?: string;
		ReturnConsumedCapacity?: BatchExecuteStatementInputReturnConsumedCapacity;
	}
	export interface ExecuteTransactionInputFormProperties {
		ClientRequestToken: FormControl<string | null | undefined>,
		ReturnConsumedCapacity: FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>,
	}
	export function CreateExecuteTransactionInputFormGroup() {
		return new FormGroup<ExecuteTransactionInputFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			ReturnConsumedCapacity: new FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>(undefined),
		});

	}


	/**  Represents a PartiQL statment that uses parameters.  */
	export interface ParameterizedStatement {

		/** Required */
		Statement: string;
		Parameters?: Array<AttributeValue>;
		ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure;
	}

	/**  Represents a PartiQL statment that uses parameters.  */
	export interface ParameterizedStatementFormProperties {

		/** Required */
		Statement: FormControl<string | null | undefined>,
		ReturnValuesOnConditionCheckFailure: FormControl<ReturnValuesOnConditionCheckFailure | null | undefined>,
	}
	export function CreateParameterizedStatementFormGroup() {
		return new FormGroup<ParameterizedStatementFormProperties>({
			Statement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReturnValuesOnConditionCheckFailure: new FormControl<ReturnValuesOnConditionCheckFailure | null | undefined>(undefined),
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

	export interface ExportTableToPointInTimeOutput {
		ExportDescription?: ExportDescription;
	}
	export interface ExportTableToPointInTimeOutputFormProperties {
	}
	export function CreateExportTableToPointInTimeOutputFormGroup() {
		return new FormGroup<ExportTableToPointInTimeOutputFormProperties>({
		});

	}

	export interface ExportTableToPointInTimeInput {

		/** Required */
		TableArn: string;
		ExportTime?: Date;
		ClientToken?: string;

		/** Required */
		S3Bucket: string;
		S3BucketOwner?: string;
		S3Prefix?: string;
		S3SseAlgorithm?: SSEType;
		S3SseKmsKeyId?: string;
		ExportFormat?: ExportFormat;
	}
	export interface ExportTableToPointInTimeInputFormProperties {

		/** Required */
		TableArn: FormControl<string | null | undefined>,
		ExportTime: FormControl<Date | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		S3Bucket: FormControl<string | null | undefined>,
		S3BucketOwner: FormControl<string | null | undefined>,
		S3Prefix: FormControl<string | null | undefined>,
		S3SseAlgorithm: FormControl<SSEType | null | undefined>,
		S3SseKmsKeyId: FormControl<string | null | undefined>,
		ExportFormat: FormControl<ExportFormat | null | undefined>,
	}
	export function CreateExportTableToPointInTimeInputFormGroup() {
		return new FormGroup<ExportTableToPointInTimeInputFormProperties>({
			TableArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExportTime: new FormControl<Date | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			S3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3BucketOwner: new FormControl<string | null | undefined>(undefined),
			S3Prefix: new FormControl<string | null | undefined>(undefined),
			S3SseAlgorithm: new FormControl<SSEType | null | undefined>(undefined),
			S3SseKmsKeyId: new FormControl<string | null | undefined>(undefined),
			ExportFormat: new FormControl<ExportFormat | null | undefined>(undefined),
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

	export interface InvalidExportTimeException {
	}
	export interface InvalidExportTimeExceptionFormProperties {
	}
	export function CreateInvalidExportTimeExceptionFormGroup() {
		return new FormGroup<InvalidExportTimeExceptionFormProperties>({
		});

	}

	export interface ExportConflictException {
	}
	export interface ExportConflictExceptionFormProperties {
	}
	export function CreateExportConflictExceptionFormGroup() {
		return new FormGroup<ExportConflictExceptionFormProperties>({
		});

	}


	/** Represents the output of a <code>GetItem</code> operation. */
	export interface GetItemOutput {
		Item?: AttributeMap;
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

		/** Required */
		TableName: string;

		/** Required */
		Key: Key;
		AttributesToGet?: Array<string>;
		ConsistentRead?: boolean | null;

		/** <p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchExecuteStatementInputReturnConsumedCapacity | null;
		ProjectionExpression?: string;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
	}

	/** Represents the input of a <code>GetItem</code> operation. */
	export interface GetItemInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
		ConsistentRead: FormControl<boolean | null | undefined>,

		/** <p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity: FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>,
		ProjectionExpression: FormControl<string | null | undefined>,
	}
	export function CreateGetItemInputFormGroup() {
		return new FormGroup<GetItemInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConsistentRead: new FormControl<boolean | null | undefined>(undefined),
			ReturnConsumedCapacity: new FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>(undefined),
			ProjectionExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportTableOutput {

		/** Required */
		ImportTableDescription: ImportTableDescription;
	}
	export interface ImportTableOutputFormProperties {
	}
	export function CreateImportTableOutputFormGroup() {
		return new FormGroup<ImportTableOutputFormProperties>({
		});

	}

	export interface ImportTableInput {
		ClientToken?: string;

		/** Required */
		S3BucketSource: S3BucketSource;

		/** Required */
		InputFormat: InputFormat;
		InputFormatOptions?: InputFormatOptions;
		InputCompressionType?: InputCompressionType;

		/** Required */
		TableCreationParameters: TableCreationParameters;
	}
	export interface ImportTableInputFormProperties {
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		InputFormat: FormControl<InputFormat | null | undefined>,
		InputCompressionType: FormControl<InputCompressionType | null | undefined>,
	}
	export function CreateImportTableInputFormGroup() {
		return new FormGroup<ImportTableInputFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			InputFormat: new FormControl<InputFormat | null | undefined>(undefined, [Validators.required]),
			InputCompressionType: new FormControl<InputCompressionType | null | undefined>(undefined),
		});

	}

	export interface ImportConflictException {
	}
	export interface ImportConflictExceptionFormProperties {
	}
	export function CreateImportConflictExceptionFormGroup() {
		return new FormGroup<ImportConflictExceptionFormProperties>({
		});

	}

	export interface ListBackupsOutput {
		BackupSummaries?: Array<BackupSummary>;
		LastEvaluatedBackupArn?: string;
	}
	export interface ListBackupsOutputFormProperties {
		LastEvaluatedBackupArn: FormControl<string | null | undefined>,
	}
	export function CreateListBackupsOutputFormGroup() {
		return new FormGroup<ListBackupsOutputFormProperties>({
			LastEvaluatedBackupArn: new FormControl<string | null | undefined>(undefined),
		});

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
		BackupStatus?: BackupStatus;
		BackupType?: BackupType;
		BackupSizeBytes?: number | null;
	}

	/** Contains details for the backup. */
	export interface BackupSummaryFormProperties {
		TableName: FormControl<string | null | undefined>,
		TableId: FormControl<string | null | undefined>,
		TableArn: FormControl<string | null | undefined>,
		BackupArn: FormControl<string | null | undefined>,
		BackupName: FormControl<string | null | undefined>,
		BackupCreationDateTime: FormControl<Date | null | undefined>,
		BackupExpiryDateTime: FormControl<Date | null | undefined>,
		BackupStatus: FormControl<BackupStatus | null | undefined>,
		BackupType: FormControl<BackupType | null | undefined>,
		BackupSizeBytes: FormControl<number | null | undefined>,
	}
	export function CreateBackupSummaryFormGroup() {
		return new FormGroup<BackupSummaryFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined),
			TableId: new FormControl<string | null | undefined>(undefined),
			TableArn: new FormControl<string | null | undefined>(undefined),
			BackupArn: new FormControl<string | null | undefined>(undefined),
			BackupName: new FormControl<string | null | undefined>(undefined),
			BackupCreationDateTime: new FormControl<Date | null | undefined>(undefined),
			BackupExpiryDateTime: new FormControl<Date | null | undefined>(undefined),
			BackupStatus: new FormControl<BackupStatus | null | undefined>(undefined),
			BackupType: new FormControl<BackupType | null | undefined>(undefined),
			BackupSizeBytes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListBackupsInput {
		TableName?: string;
		Limit?: number | null;
		TimeRangeLowerBound?: Date;
		TimeRangeUpperBound?: Date;
		ExclusiveStartBackupArn?: string;
		BackupType?: BackupTypeFilter;
	}
	export interface ListBackupsInputFormProperties {
		TableName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		TimeRangeLowerBound: FormControl<Date | null | undefined>,
		TimeRangeUpperBound: FormControl<Date | null | undefined>,
		ExclusiveStartBackupArn: FormControl<string | null | undefined>,
		BackupType: FormControl<BackupTypeFilter | null | undefined>,
	}
	export function CreateListBackupsInputFormGroup() {
		return new FormGroup<ListBackupsInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			TimeRangeLowerBound: new FormControl<Date | null | undefined>(undefined),
			TimeRangeUpperBound: new FormControl<Date | null | undefined>(undefined),
			ExclusiveStartBackupArn: new FormControl<string | null | undefined>(undefined),
			BackupType: new FormControl<BackupTypeFilter | null | undefined>(undefined),
		});

	}

	export enum BackupTypeFilter { USER = 0, SYSTEM = 1, AWS_BACKUP = 2, ALL = 3 }

	export interface ListContributorInsightsOutput {
		ContributorInsightsSummaries?: Array<ContributorInsightsSummary>;
		NextToken?: string;
	}
	export interface ListContributorInsightsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListContributorInsightsOutputFormGroup() {
		return new FormGroup<ListContributorInsightsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Contributor Insights summary entry. */
	export interface ContributorInsightsSummary {
		TableName?: string;
		IndexName?: string;
		ContributorInsightsStatus?: ContributorInsightsStatus;
	}

	/** Represents a Contributor Insights summary entry. */
	export interface ContributorInsightsSummaryFormProperties {
		TableName: FormControl<string | null | undefined>,
		IndexName: FormControl<string | null | undefined>,
		ContributorInsightsStatus: FormControl<ContributorInsightsStatus | null | undefined>,
	}
	export function CreateContributorInsightsSummaryFormGroup() {
		return new FormGroup<ContributorInsightsSummaryFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined),
			IndexName: new FormControl<string | null | undefined>(undefined),
			ContributorInsightsStatus: new FormControl<ContributorInsightsStatus | null | undefined>(undefined),
		});

	}

	export interface ListContributorInsightsInput {
		TableName?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListContributorInsightsInputFormProperties {
		TableName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListContributorInsightsInputFormGroup() {
		return new FormGroup<ListContributorInsightsInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListExportsOutput {
		ExportSummaries?: Array<ExportSummary>;
		NextToken?: string;
	}
	export interface ListExportsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExportsOutputFormGroup() {
		return new FormGroup<ListExportsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about an export task. */
	export interface ExportSummary {
		ExportArn?: string;
		ExportStatus?: ExportStatus;
	}

	/** Summary information about an export task. */
	export interface ExportSummaryFormProperties {
		ExportArn: FormControl<string | null | undefined>,
		ExportStatus: FormControl<ExportStatus | null | undefined>,
	}
	export function CreateExportSummaryFormGroup() {
		return new FormGroup<ExportSummaryFormProperties>({
			ExportArn: new FormControl<string | null | undefined>(undefined),
			ExportStatus: new FormControl<ExportStatus | null | undefined>(undefined),
		});

	}

	export interface ListExportsInput {
		TableArn?: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListExportsInputFormProperties {
		TableArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExportsInputFormGroup() {
		return new FormGroup<ListExportsInputFormProperties>({
			TableArn: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGlobalTablesOutput {
		GlobalTables?: Array<GlobalTable>;
		LastEvaluatedGlobalTableName?: string;
	}
	export interface ListGlobalTablesOutputFormProperties {
		LastEvaluatedGlobalTableName: FormControl<string | null | undefined>,
	}
	export function CreateListGlobalTablesOutputFormGroup() {
		return new FormGroup<ListGlobalTablesOutputFormProperties>({
			LastEvaluatedGlobalTableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the properties of a global table. */
	export interface GlobalTable {
		GlobalTableName?: string;
		ReplicationGroup?: Array<Replica>;
	}

	/** Represents the properties of a global table. */
	export interface GlobalTableFormProperties {
		GlobalTableName: FormControl<string | null | undefined>,
	}
	export function CreateGlobalTableFormGroup() {
		return new FormGroup<GlobalTableFormProperties>({
			GlobalTableName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGlobalTablesInput {
		ExclusiveStartGlobalTableName?: string;
		Limit?: number | null;
		RegionName?: string;
	}
	export interface ListGlobalTablesInputFormProperties {
		ExclusiveStartGlobalTableName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		RegionName: FormControl<string | null | undefined>,
	}
	export function CreateListGlobalTablesInputFormGroup() {
		return new FormGroup<ListGlobalTablesInputFormProperties>({
			ExclusiveStartGlobalTableName: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			RegionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListImportsOutput {
		ImportSummaryList?: Array<ImportSummary>;
		NextToken?: string;
	}
	export interface ListImportsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImportsOutputFormGroup() {
		return new FormGroup<ListImportsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Summary information about the source file for the import.  */
	export interface ImportSummary {
		ImportArn?: string;
		ImportStatus?: ImportStatus;
		TableArn?: string;
		S3BucketSource?: S3BucketSource;
		CloudWatchLogGroupArn?: string;
		InputFormat?: InputFormat;
		StartTime?: Date;
		EndTime?: Date;
	}

	/**  Summary information about the source file for the import.  */
	export interface ImportSummaryFormProperties {
		ImportArn: FormControl<string | null | undefined>,
		ImportStatus: FormControl<ImportStatus | null | undefined>,
		TableArn: FormControl<string | null | undefined>,
		CloudWatchLogGroupArn: FormControl<string | null | undefined>,
		InputFormat: FormControl<InputFormat | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateImportSummaryFormGroup() {
		return new FormGroup<ImportSummaryFormProperties>({
			ImportArn: new FormControl<string | null | undefined>(undefined),
			ImportStatus: new FormControl<ImportStatus | null | undefined>(undefined),
			TableArn: new FormControl<string | null | undefined>(undefined),
			CloudWatchLogGroupArn: new FormControl<string | null | undefined>(undefined),
			InputFormat: new FormControl<InputFormat | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListImportsInput {
		TableArn?: string;
		PageSize?: number | null;
		NextToken?: string;
	}
	export interface ListImportsInputFormProperties {
		TableArn: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImportsInputFormGroup() {
		return new FormGroup<ListImportsInputFormProperties>({
			TableArn: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>ListTables</code> operation. */
	export interface ListTablesOutput {
		TableNames?: Array<string>;
		LastEvaluatedTableName?: string;
	}

	/** Represents the output of a <code>ListTables</code> operation. */
	export interface ListTablesOutputFormProperties {
		LastEvaluatedTableName: FormControl<string | null | undefined>,
	}
	export function CreateListTablesOutputFormGroup() {
		return new FormGroup<ListTablesOutputFormProperties>({
			LastEvaluatedTableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>ListTables</code> operation. */
	export interface ListTablesInput {
		ExclusiveStartTableName?: string;
		Limit?: number | null;
	}

	/** Represents the input of a <code>ListTables</code> operation. */
	export interface ListTablesInputFormProperties {
		ExclusiveStartTableName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListTablesInputFormGroup() {
		return new FormGroup<ListTablesInputFormProperties>({
			ExclusiveStartTableName: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsOfResourceOutput {
		Tags?: Array<Tag>;
		NextToken?: string;
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

		/** Required */
		ResourceArn: string;
		NextToken?: string;
	}
	export interface ListTagsOfResourceInputFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsOfResourceInputFormGroup() {
		return new FormGroup<ListTagsOfResourceInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>PutItem</code> operation. */
	export interface PutItemOutput {
		Attributes?: AttributeMap;
		ConsumedCapacity?: ConsumedCapacity;
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

		/** Required */
		TableName: string;

		/** Required */
		Item: PutItemInputAttributeMap;
		Expected?: ExpectedAttributeMap;
		ReturnValues?: ReturnValue;

		/** <p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchExecuteStatementInputReturnConsumedCapacity | null;
		ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
		ConditionalOperator?: ConditionalOperator;
		ConditionExpression?: string;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
		ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure;
	}

	/** Represents the input of a <code>PutItem</code> operation. */
	export interface PutItemInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
		ReturnValues: FormControl<ReturnValue | null | undefined>,

		/** <p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity: FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>,
		ReturnItemCollectionMetrics: FormControl<ReturnItemCollectionMetrics | null | undefined>,
		ConditionalOperator: FormControl<ConditionalOperator | null | undefined>,
		ConditionExpression: FormControl<string | null | undefined>,
		ReturnValuesOnConditionCheckFailure: FormControl<ReturnValuesOnConditionCheckFailure | null | undefined>,
	}
	export function CreatePutItemInputFormGroup() {
		return new FormGroup<PutItemInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReturnValues: new FormControl<ReturnValue | null | undefined>(undefined),
			ReturnConsumedCapacity: new FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>(undefined),
			ReturnItemCollectionMetrics: new FormControl<ReturnItemCollectionMetrics | null | undefined>(undefined),
			ConditionalOperator: new FormControl<ConditionalOperator | null | undefined>(undefined),
			ConditionExpression: new FormControl<string | null | undefined>(undefined),
			ReturnValuesOnConditionCheckFailure: new FormControl<ReturnValuesOnConditionCheckFailure | null | undefined>(undefined),
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

		/** Required */
		TableName: string;
		IndexName?: string;
		Select?: Select;
		AttributesToGet?: Array<string>;
		Limit?: number | null;
		ConsistentRead?: boolean | null;
		KeyConditions?: KeyConditions;
		QueryFilter?: FilterConditionMap;
		ConditionalOperator?: ConditionalOperator;
		ScanIndexForward?: boolean | null;
		ExclusiveStartKey?: Key;

		/** <p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchExecuteStatementInputReturnConsumedCapacity | null;
		ProjectionExpression?: string;
		FilterExpression?: string;
		KeyConditionExpression?: string;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
	}

	/** Represents the input of a <code>Query</code> operation. */
	export interface QueryInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
		IndexName: FormControl<string | null | undefined>,
		Select: FormControl<Select | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		ConsistentRead: FormControl<boolean | null | undefined>,
		ConditionalOperator: FormControl<ConditionalOperator | null | undefined>,
		ScanIndexForward: FormControl<boolean | null | undefined>,

		/** <p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity: FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>,
		ProjectionExpression: FormControl<string | null | undefined>,
		FilterExpression: FormControl<string | null | undefined>,
		KeyConditionExpression: FormControl<string | null | undefined>,
	}
	export function CreateQueryInputFormGroup() {
		return new FormGroup<QueryInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexName: new FormControl<string | null | undefined>(undefined),
			Select: new FormControl<Select | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			ConsistentRead: new FormControl<boolean | null | undefined>(undefined),
			ConditionalOperator: new FormControl<ConditionalOperator | null | undefined>(undefined),
			ScanIndexForward: new FormControl<boolean | null | undefined>(undefined),
			ReturnConsumedCapacity: new FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>(undefined),
			ProjectionExpression: new FormControl<string | null | undefined>(undefined),
			FilterExpression: new FormControl<string | null | undefined>(undefined),
			KeyConditionExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Select { ALL_ATTRIBUTES = 0, ALL_PROJECTED_ATTRIBUTES = 1, SPECIFIC_ATTRIBUTES = 2, COUNT = 3 }

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
		TableDescription?: TableDescription;
	}
	export interface RestoreTableFromBackupOutputFormProperties {
	}
	export function CreateRestoreTableFromBackupOutputFormGroup() {
		return new FormGroup<RestoreTableFromBackupOutputFormProperties>({
		});

	}

	export interface RestoreTableFromBackupInput {

		/** Required */
		TargetTableName: string;

		/** Required */
		BackupArn: string;
		BillingModeOverride?: BillingMode;
		GlobalSecondaryIndexOverride?: Array<GlobalSecondaryIndex>;
		LocalSecondaryIndexOverride?: Array<LocalSecondaryIndex>;
		ProvisionedThroughputOverride?: ProvisionedThroughput;
		SSESpecificationOverride?: SSESpecification;
	}
	export interface RestoreTableFromBackupInputFormProperties {

		/** Required */
		TargetTableName: FormControl<string | null | undefined>,

		/** Required */
		BackupArn: FormControl<string | null | undefined>,
		BillingModeOverride: FormControl<BillingMode | null | undefined>,
	}
	export function CreateRestoreTableFromBackupInputFormGroup() {
		return new FormGroup<RestoreTableFromBackupInputFormProperties>({
			TargetTableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BackupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BillingModeOverride: new FormControl<BillingMode | null | undefined>(undefined),
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
		TableDescription?: TableDescription;
	}
	export interface RestoreTableToPointInTimeOutputFormProperties {
	}
	export function CreateRestoreTableToPointInTimeOutputFormGroup() {
		return new FormGroup<RestoreTableToPointInTimeOutputFormProperties>({
		});

	}

	export interface RestoreTableToPointInTimeInput {
		SourceTableArn?: string;
		SourceTableName?: string;

		/** Required */
		TargetTableName: string;
		UseLatestRestorableTime?: boolean | null;
		RestoreDateTime?: Date;
		BillingModeOverride?: BillingMode;
		GlobalSecondaryIndexOverride?: Array<GlobalSecondaryIndex>;
		LocalSecondaryIndexOverride?: Array<LocalSecondaryIndex>;
		ProvisionedThroughputOverride?: ProvisionedThroughput;
		SSESpecificationOverride?: SSESpecification;
	}
	export interface RestoreTableToPointInTimeInputFormProperties {
		SourceTableArn: FormControl<string | null | undefined>,
		SourceTableName: FormControl<string | null | undefined>,

		/** Required */
		TargetTableName: FormControl<string | null | undefined>,
		UseLatestRestorableTime: FormControl<boolean | null | undefined>,
		RestoreDateTime: FormControl<Date | null | undefined>,
		BillingModeOverride: FormControl<BillingMode | null | undefined>,
	}
	export function CreateRestoreTableToPointInTimeInputFormGroup() {
		return new FormGroup<RestoreTableToPointInTimeInputFormProperties>({
			SourceTableArn: new FormControl<string | null | undefined>(undefined),
			SourceTableName: new FormControl<string | null | undefined>(undefined),
			TargetTableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UseLatestRestorableTime: new FormControl<boolean | null | undefined>(undefined),
			RestoreDateTime: new FormControl<Date | null | undefined>(undefined),
			BillingModeOverride: new FormControl<BillingMode | null | undefined>(undefined),
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


	/** Represents the output of a <code>Scan</code> operation. */
	export interface ScanOutput {
		Items?: Array<AttributeMap>;
		Count?: number | null;
		ScannedCount?: number | null;
		LastEvaluatedKey?: Key;
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

		/** Required */
		TableName: string;
		IndexName?: string;
		AttributesToGet?: Array<string>;
		Limit?: number | null;
		Select?: Select;
		ScanFilter?: FilterConditionMap;
		ConditionalOperator?: ConditionalOperator;
		ExclusiveStartKey?: Key;

		/** <p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchExecuteStatementInputReturnConsumedCapacity | null;
		TotalSegments?: number | null;
		Segment?: number | null;
		ProjectionExpression?: string;
		FilterExpression?: string;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
		ConsistentRead?: boolean | null;
	}

	/** Represents the input of a <code>Scan</code> operation. */
	export interface ScanInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
		IndexName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		Select: FormControl<Select | null | undefined>,
		ConditionalOperator: FormControl<ConditionalOperator | null | undefined>,

		/** <p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity: FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>,
		TotalSegments: FormControl<number | null | undefined>,
		Segment: FormControl<number | null | undefined>,
		ProjectionExpression: FormControl<string | null | undefined>,
		FilterExpression: FormControl<string | null | undefined>,
		ConsistentRead: FormControl<boolean | null | undefined>,
	}
	export function CreateScanInputFormGroup() {
		return new FormGroup<ScanInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexName: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			Select: new FormControl<Select | null | undefined>(undefined),
			ConditionalOperator: new FormControl<ConditionalOperator | null | undefined>(undefined),
			ReturnConsumedCapacity: new FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>(undefined),
			TotalSegments: new FormControl<number | null | undefined>(undefined),
			Segment: new FormControl<number | null | undefined>(undefined),
			ProjectionExpression: new FormControl<string | null | undefined>(undefined),
			FilterExpression: new FormControl<string | null | undefined>(undefined),
			ConsistentRead: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TagResourceInput {

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceInputFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TransactGetItemsOutput {
		ConsumedCapacity?: Array<ConsumedCapacity>;
		Responses?: Array<ItemResponse>;
	}
	export interface TransactGetItemsOutputFormProperties {
	}
	export function CreateTransactGetItemsOutputFormGroup() {
		return new FormGroup<TransactGetItemsOutputFormProperties>({
		});

	}

	export interface TransactGetItemsInput {

		/** Required */
		TransactItems: Array<TransactGetItem>;
		ReturnConsumedCapacity?: BatchExecuteStatementInputReturnConsumedCapacity;
	}
	export interface TransactGetItemsInputFormProperties {
		ReturnConsumedCapacity: FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>,
	}
	export function CreateTransactGetItemsInputFormGroup() {
		return new FormGroup<TransactGetItemsInputFormProperties>({
			ReturnConsumedCapacity: new FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>(undefined),
		});

	}


	/** Specifies an item to be retrieved as part of the transaction. */
	export interface TransactGetItem {

		/** Required */
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

		/** Required */
		TableName: string;
		ProjectionExpression?: string;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
	}

	/** Specifies an item and related attribute values to retrieve in a <code>TransactGetItem</code> object. */
	export interface GetFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
		ProjectionExpression: FormControl<string | null | undefined>,
	}
	export function CreateGetFormGroup() {
		return new FormGroup<GetFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProjectionExpression: new FormControl<string | null | undefined>(undefined),
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

		/** Required */
		TransactItems: Array<TransactWriteItem>;

		/** <p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchExecuteStatementInputReturnConsumedCapacity | null;
		ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
		ClientRequestToken?: string;
	}
	export interface TransactWriteItemsInputFormProperties {

		/** <p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity: FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>,
		ReturnItemCollectionMetrics: FormControl<ReturnItemCollectionMetrics | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateTransactWriteItemsInputFormGroup() {
		return new FormGroup<TransactWriteItemsInputFormProperties>({
			ReturnConsumedCapacity: new FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>(undefined),
			ReturnItemCollectionMetrics: new FormControl<ReturnItemCollectionMetrics | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of requests that can perform update, put, delete, or check operations on multiple items in one or more tables atomically. */
	export interface TransactWriteItem {
		ConditionCheck?: ConditionCheck;
		Put?: Put;
		Delete?: Delete;
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

		/** Required */
		TableName: string;

		/** Required */
		ConditionExpression: string;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
		ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure;
	}

	/** Represents a request to perform a check that an item exists or to check the condition of specific attributes of the item. */
	export interface ConditionCheckFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,

		/** Required */
		ConditionExpression: FormControl<string | null | undefined>,
		ReturnValuesOnConditionCheckFailure: FormControl<ReturnValuesOnConditionCheckFailure | null | undefined>,
	}
	export function CreateConditionCheckFormGroup() {
		return new FormGroup<ConditionCheckFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConditionExpression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReturnValuesOnConditionCheckFailure: new FormControl<ReturnValuesOnConditionCheckFailure | null | undefined>(undefined),
		});

	}


	/** Represents a request to perform a <code>PutItem</code> operation. */
	export interface Put {

		/** Required */
		Item: PutItemInputAttributeMap;

		/** Required */
		TableName: string;
		ConditionExpression?: string;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
		ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure;
	}

	/** Represents a request to perform a <code>PutItem</code> operation. */
	export interface PutFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
		ConditionExpression: FormControl<string | null | undefined>,
		ReturnValuesOnConditionCheckFailure: FormControl<ReturnValuesOnConditionCheckFailure | null | undefined>,
	}
	export function CreatePutFormGroup() {
		return new FormGroup<PutFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConditionExpression: new FormControl<string | null | undefined>(undefined),
			ReturnValuesOnConditionCheckFailure: new FormControl<ReturnValuesOnConditionCheckFailure | null | undefined>(undefined),
		});

	}


	/** Represents a request to perform a <code>DeleteItem</code> operation. */
	export interface Delete {

		/** Required */
		Key: Key;

		/** Required */
		TableName: string;
		ConditionExpression?: string;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
		ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure;
	}

	/** Represents a request to perform a <code>DeleteItem</code> operation. */
	export interface DeleteFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
		ConditionExpression: FormControl<string | null | undefined>,
		ReturnValuesOnConditionCheckFailure: FormControl<ReturnValuesOnConditionCheckFailure | null | undefined>,
	}
	export function CreateDeleteFormGroup() {
		return new FormGroup<DeleteFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConditionExpression: new FormControl<string | null | undefined>(undefined),
			ReturnValuesOnConditionCheckFailure: new FormControl<ReturnValuesOnConditionCheckFailure | null | undefined>(undefined),
		});

	}


	/** Represents a request to perform an <code>UpdateItem</code> operation. */
	export interface Update {

		/** Required */
		Key: Key;

		/** Required */
		UpdateExpression: string;

		/** Required */
		TableName: string;
		ConditionExpression?: string;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
		ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure;
	}

	/** Represents a request to perform an <code>UpdateItem</code> operation. */
	export interface UpdateFormProperties {

		/** Required */
		UpdateExpression: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
		ConditionExpression: FormControl<string | null | undefined>,
		ReturnValuesOnConditionCheckFailure: FormControl<ReturnValuesOnConditionCheckFailure | null | undefined>,
	}
	export function CreateUpdateFormGroup() {
		return new FormGroup<UpdateFormProperties>({
			UpdateExpression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConditionExpression: new FormControl<string | null | undefined>(undefined),
			ReturnValuesOnConditionCheckFailure: new FormControl<ReturnValuesOnConditionCheckFailure | null | undefined>(undefined),
		});

	}

	export interface UntagResourceInput {

		/** Required */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceInputFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateContinuousBackupsOutput {
		ContinuousBackupsDescription?: ContinuousBackupsDescription;
	}
	export interface UpdateContinuousBackupsOutputFormProperties {
	}
	export function CreateUpdateContinuousBackupsOutputFormGroup() {
		return new FormGroup<UpdateContinuousBackupsOutputFormProperties>({
		});

	}

	export interface UpdateContinuousBackupsInput {

		/** Required */
		TableName: string;

		/** Required */
		PointInTimeRecoverySpecification: PointInTimeRecoverySpecification;
	}
	export interface UpdateContinuousBackupsInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateContinuousBackupsInputFormGroup() {
		return new FormGroup<UpdateContinuousBackupsInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		TableName?: string;
		IndexName?: string;
		ContributorInsightsStatus?: ContributorInsightsStatus;
	}
	export interface UpdateContributorInsightsOutputFormProperties {
		TableName: FormControl<string | null | undefined>,
		IndexName: FormControl<string | null | undefined>,
		ContributorInsightsStatus: FormControl<ContributorInsightsStatus | null | undefined>,
	}
	export function CreateUpdateContributorInsightsOutputFormGroup() {
		return new FormGroup<UpdateContributorInsightsOutputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined),
			IndexName: new FormControl<string | null | undefined>(undefined),
			ContributorInsightsStatus: new FormControl<ContributorInsightsStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateContributorInsightsInput {

		/** Required */
		TableName: string;
		IndexName?: string;

		/** Required */
		ContributorInsightsAction: ContributorInsightsAction;
	}
	export interface UpdateContributorInsightsInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
		IndexName: FormControl<string | null | undefined>,

		/** Required */
		ContributorInsightsAction: FormControl<ContributorInsightsAction | null | undefined>,
	}
	export function CreateUpdateContributorInsightsInputFormGroup() {
		return new FormGroup<UpdateContributorInsightsInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IndexName: new FormControl<string | null | undefined>(undefined),
			ContributorInsightsAction: new FormControl<ContributorInsightsAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ContributorInsightsAction { ENABLE = 0, DISABLE = 1 }

	export interface UpdateGlobalTableOutput {
		GlobalTableDescription?: GlobalTableDescription;
	}
	export interface UpdateGlobalTableOutputFormProperties {
	}
	export function CreateUpdateGlobalTableOutputFormGroup() {
		return new FormGroup<UpdateGlobalTableOutputFormProperties>({
		});

	}

	export interface UpdateGlobalTableInput {

		/** Required */
		GlobalTableName: string;

		/** Required */
		ReplicaUpdates: Array<ReplicaUpdate>;
	}
	export interface UpdateGlobalTableInputFormProperties {

		/** Required */
		GlobalTableName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGlobalTableInputFormGroup() {
		return new FormGroup<UpdateGlobalTableInputFormProperties>({
			GlobalTableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Represents one of the following:</p> <ul> <li> <p>A new replica to be added to an existing global table.</p> </li> <li> <p>New parameters for an existing replica.</p> </li> <li> <p>An existing replica to be removed from an existing global table.</p> </li> </ul> */
	export interface ReplicaUpdate {
		Create?: CreateReplicaAction;
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
		GlobalTableName?: string;
		ReplicaSettings?: Array<ReplicaSettingsDescription>;
	}
	export interface UpdateGlobalTableSettingsOutputFormProperties {
		GlobalTableName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGlobalTableSettingsOutputFormGroup() {
		return new FormGroup<UpdateGlobalTableSettingsOutputFormProperties>({
			GlobalTableName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGlobalTableSettingsInput {

		/** Required */
		GlobalTableName: string;
		GlobalTableBillingMode?: BillingMode;
		GlobalTableProvisionedWriteCapacityUnits?: number | null;
		GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
		GlobalTableGlobalSecondaryIndexSettingsUpdate?: Array<GlobalTableGlobalSecondaryIndexSettingsUpdate>;
		ReplicaSettingsUpdate?: Array<ReplicaSettingsUpdate>;
	}
	export interface UpdateGlobalTableSettingsInputFormProperties {

		/** Required */
		GlobalTableName: FormControl<string | null | undefined>,
		GlobalTableBillingMode: FormControl<BillingMode | null | undefined>,
		GlobalTableProvisionedWriteCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateUpdateGlobalTableSettingsInputFormGroup() {
		return new FormGroup<UpdateGlobalTableSettingsInputFormProperties>({
			GlobalTableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GlobalTableBillingMode: new FormControl<BillingMode | null | undefined>(undefined),
			GlobalTableProvisionedWriteCapacityUnits: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the auto scaling settings to be modified for a global table or global secondary index. */
	export interface AutoScalingSettingsUpdate {
		MinimumUnits?: number | null;
		MaximumUnits?: number | null;
		AutoScalingDisabled?: boolean | null;
		AutoScalingRoleArn?: string;
		ScalingPolicyUpdate?: AutoScalingPolicyUpdate;
	}

	/** Represents the auto scaling settings to be modified for a global table or global secondary index. */
	export interface AutoScalingSettingsUpdateFormProperties {
		MinimumUnits: FormControl<number | null | undefined>,
		MaximumUnits: FormControl<number | null | undefined>,
		AutoScalingDisabled: FormControl<boolean | null | undefined>,
		AutoScalingRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateAutoScalingSettingsUpdateFormGroup() {
		return new FormGroup<AutoScalingSettingsUpdateFormProperties>({
			MinimumUnits: new FormControl<number | null | undefined>(undefined),
			MaximumUnits: new FormControl<number | null | undefined>(undefined),
			AutoScalingDisabled: new FormControl<boolean | null | undefined>(undefined),
			AutoScalingRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the auto scaling policy to be modified. */
	export interface AutoScalingPolicyUpdate {
		PolicyName?: string;

		/** Required */
		TargetTrackingScalingPolicyConfiguration: AutoScalingTargetTrackingScalingPolicyConfigurationUpdate;
	}

	/** Represents the auto scaling policy to be modified. */
	export interface AutoScalingPolicyUpdateFormProperties {
		PolicyName: FormControl<string | null | undefined>,
	}
	export function CreateAutoScalingPolicyUpdateFormGroup() {
		return new FormGroup<AutoScalingPolicyUpdateFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined),
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

		/** Required */
		IndexName: string;
		ProvisionedWriteCapacityUnits?: number | null;
		ProvisionedWriteCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
	}

	/** Represents the settings of a global secondary index for a global table that will be modified. */
	export interface GlobalTableGlobalSecondaryIndexSettingsUpdateFormProperties {

		/** Required */
		IndexName: FormControl<string | null | undefined>,
		ProvisionedWriteCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateGlobalTableGlobalSecondaryIndexSettingsUpdateFormGroup() {
		return new FormGroup<GlobalTableGlobalSecondaryIndexSettingsUpdateFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProvisionedWriteCapacityUnits: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the settings for a global table in a Region that will be modified. */
	export interface ReplicaSettingsUpdate {

		/** Required */
		RegionName: string;
		ReplicaProvisionedReadCapacityUnits?: number | null;
		ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
		ReplicaGlobalSecondaryIndexSettingsUpdate?: Array<ReplicaGlobalSecondaryIndexSettingsUpdate>;
		ReplicaTableClass?: TableClass;
	}

	/** Represents the settings for a global table in a Region that will be modified. */
	export interface ReplicaSettingsUpdateFormProperties {

		/** Required */
		RegionName: FormControl<string | null | undefined>,
		ReplicaProvisionedReadCapacityUnits: FormControl<number | null | undefined>,
		ReplicaTableClass: FormControl<TableClass | null | undefined>,
	}
	export function CreateReplicaSettingsUpdateFormGroup() {
		return new FormGroup<ReplicaSettingsUpdateFormProperties>({
			RegionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplicaProvisionedReadCapacityUnits: new FormControl<number | null | undefined>(undefined),
			ReplicaTableClass: new FormControl<TableClass | null | undefined>(undefined),
		});

	}


	/** Represents the settings of a global secondary index for a global table that will be modified. */
	export interface ReplicaGlobalSecondaryIndexSettingsUpdate {

		/** Required */
		IndexName: string;
		ProvisionedReadCapacityUnits?: number | null;
		ProvisionedReadCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
	}

	/** Represents the settings of a global secondary index for a global table that will be modified. */
	export interface ReplicaGlobalSecondaryIndexSettingsUpdateFormProperties {

		/** Required */
		IndexName: FormControl<string | null | undefined>,
		ProvisionedReadCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateReplicaGlobalSecondaryIndexSettingsUpdateFormGroup() {
		return new FormGroup<ReplicaGlobalSecondaryIndexSettingsUpdateFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProvisionedReadCapacityUnits: new FormControl<number | null | undefined>(undefined),
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
		ConsumedCapacity?: ConsumedCapacity;
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

		/** Required */
		TableName: string;

		/** Required */
		Key: Key;
		AttributeUpdates?: AttributeUpdates;
		Expected?: ExpectedAttributeMap;
		ConditionalOperator?: ConditionalOperator;
		ReturnValues?: ReturnValue;

		/** <p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity?: BatchExecuteStatementInputReturnConsumedCapacity | null;
		ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
		UpdateExpression?: string;
		ConditionExpression?: string;
		ExpressionAttributeNames?: ExpressionAttributeNameMap;
		ExpressionAttributeValues?: ExpressionAttributeValueMap;
		ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure;
	}

	/** Represents the input of an <code>UpdateItem</code> operation. */
	export interface UpdateItemInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
		ConditionalOperator: FormControl<ConditionalOperator | null | undefined>,
		ReturnValues: FormControl<ReturnValue | null | undefined>,

		/** <p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
		ReturnConsumedCapacity: FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>,
		ReturnItemCollectionMetrics: FormControl<ReturnItemCollectionMetrics | null | undefined>,
		UpdateExpression: FormControl<string | null | undefined>,
		ConditionExpression: FormControl<string | null | undefined>,
		ReturnValuesOnConditionCheckFailure: FormControl<ReturnValuesOnConditionCheckFailure | null | undefined>,
	}
	export function CreateUpdateItemInputFormGroup() {
		return new FormGroup<UpdateItemInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConditionalOperator: new FormControl<ConditionalOperator | null | undefined>(undefined),
			ReturnValues: new FormControl<ReturnValue | null | undefined>(undefined),
			ReturnConsumedCapacity: new FormControl<BatchExecuteStatementInputReturnConsumedCapacity | null | undefined>(undefined),
			ReturnItemCollectionMetrics: new FormControl<ReturnItemCollectionMetrics | null | undefined>(undefined),
			UpdateExpression: new FormControl<string | null | undefined>(undefined),
			ConditionExpression: new FormControl<string | null | undefined>(undefined),
			ReturnValuesOnConditionCheckFailure: new FormControl<ReturnValuesOnConditionCheckFailure | null | undefined>(undefined),
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

		/** Required */
		TableName: string;
		BillingMode?: BillingMode;
		ProvisionedThroughput?: ProvisionedThroughput;
		GlobalSecondaryIndexUpdates?: Array<GlobalSecondaryIndexUpdate>;
		StreamSpecification?: StreamSpecification;
		SSESpecification?: SSESpecification;
		ReplicaUpdates?: Array<ReplicationGroupUpdate>;
		TableClass?: TableClass;
		DeletionProtectionEnabled?: boolean | null;
	}

	/** Represents the input of an <code>UpdateTable</code> operation. */
	export interface UpdateTableInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
		BillingMode: FormControl<BillingMode | null | undefined>,
		TableClass: FormControl<TableClass | null | undefined>,
		DeletionProtectionEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateTableInputFormGroup() {
		return new FormGroup<UpdateTableInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BillingMode: new FormControl<BillingMode | null | undefined>(undefined),
			TableClass: new FormControl<TableClass | null | undefined>(undefined),
			DeletionProtectionEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Represents one of the following:</p> <ul> <li> <p>A new global secondary index to be added to an existing table.</p> </li> <li> <p>New provisioned throughput parameters for an existing global secondary index.</p> </li> <li> <p>An existing global secondary index to be removed from an existing table.</p> </li> </ul> */
	export interface GlobalSecondaryIndexUpdate {
		Update?: UpdateGlobalSecondaryIndexAction;
		Create?: CreateGlobalSecondaryIndexAction;
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

		/** Required */
		IndexName: string;

		/** Required */
		ProvisionedThroughput: ProvisionedThroughput;
	}

	/** Represents the new provisioned throughput settings to be applied to a global secondary index. */
	export interface UpdateGlobalSecondaryIndexActionFormProperties {

		/** Required */
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGlobalSecondaryIndexActionFormGroup() {
		return new FormGroup<UpdateGlobalSecondaryIndexActionFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a new global secondary index to be added to an existing table. */
	export interface CreateGlobalSecondaryIndexAction {

		/** Required */
		IndexName: string;

		/** Required */
		KeySchema: Array<KeySchemaElement>;

		/** Required */
		Projection: Projection;
		ProvisionedThroughput?: ProvisionedThroughput;
	}

	/** Represents a new global secondary index to be added to an existing table. */
	export interface CreateGlobalSecondaryIndexActionFormProperties {

		/** Required */
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateCreateGlobalSecondaryIndexActionFormGroup() {
		return new FormGroup<CreateGlobalSecondaryIndexActionFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a global secondary index to be deleted from an existing table. */
	export interface DeleteGlobalSecondaryIndexAction {

		/** Required */
		IndexName: string;
	}

	/** Represents a global secondary index to be deleted from an existing table. */
	export interface DeleteGlobalSecondaryIndexActionFormProperties {

		/** Required */
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGlobalSecondaryIndexActionFormGroup() {
		return new FormGroup<DeleteGlobalSecondaryIndexActionFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Represents one of the following:</p> <ul> <li> <p>A new replica to be added to an existing regional table or global table. This request invokes the <code>CreateTableReplica</code> action in the destination Region.</p> </li> <li> <p>New parameters for an existing replica. This request invokes the <code>UpdateTable</code> action in the destination Region.</p> </li> <li> <p>An existing replica to be deleted. The request invokes the <code>DeleteTableReplica</code> action in the destination Region, deleting the replica and all if its items in the destination Region.</p> </li> </ul> <note> <p>When you manually remove a table or global table replica, you do not automatically remove any associated scalable targets, scaling policies, or CloudWatch alarms.</p> </note> */
	export interface ReplicationGroupUpdate {
		Create?: CreateReplicationGroupMemberAction;
		Update?: UpdateReplicationGroupMemberAction;
		Delete?: DeleteReplicationGroupMemberAction;
	}

	/** <p>Represents one of the following:</p> <ul> <li> <p>A new replica to be added to an existing regional table or global table. This request invokes the <code>CreateTableReplica</code> action in the destination Region.</p> </li> <li> <p>New parameters for an existing replica. This request invokes the <code>UpdateTable</code> action in the destination Region.</p> </li> <li> <p>An existing replica to be deleted. The request invokes the <code>DeleteTableReplica</code> action in the destination Region, deleting the replica and all if its items in the destination Region.</p> </li> </ul> <note> <p>When you manually remove a table or global table replica, you do not automatically remove any associated scalable targets, scaling policies, or CloudWatch alarms.</p> </note> */
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
		KMSMasterKeyId?: string;
		ProvisionedThroughputOverride?: ProvisionedThroughputOverride;
		GlobalSecondaryIndexes?: Array<ReplicaGlobalSecondaryIndex>;
		TableClassOverride?: TableClass;
	}

	/** Represents a replica to be created. */
	export interface CreateReplicationGroupMemberActionFormProperties {

		/** Required */
		RegionName: FormControl<string | null | undefined>,
		KMSMasterKeyId: FormControl<string | null | undefined>,
		TableClassOverride: FormControl<TableClass | null | undefined>,
	}
	export function CreateCreateReplicationGroupMemberActionFormGroup() {
		return new FormGroup<CreateReplicationGroupMemberActionFormProperties>({
			RegionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KMSMasterKeyId: new FormControl<string | null | undefined>(undefined),
			TableClassOverride: new FormControl<TableClass | null | undefined>(undefined),
		});

	}


	/** Represents the properties of a replica global secondary index. */
	export interface ReplicaGlobalSecondaryIndex {

		/** Required */
		IndexName: string;
		ProvisionedThroughputOverride?: ProvisionedThroughputOverride;
	}

	/** Represents the properties of a replica global secondary index. */
	export interface ReplicaGlobalSecondaryIndexFormProperties {

		/** Required */
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateReplicaGlobalSecondaryIndexFormGroup() {
		return new FormGroup<ReplicaGlobalSecondaryIndexFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a replica to be modified. */
	export interface UpdateReplicationGroupMemberAction {

		/** Required */
		RegionName: string;
		KMSMasterKeyId?: string;
		ProvisionedThroughputOverride?: ProvisionedThroughputOverride;
		GlobalSecondaryIndexes?: Array<ReplicaGlobalSecondaryIndex>;
		TableClassOverride?: TableClass;
	}

	/** Represents a replica to be modified. */
	export interface UpdateReplicationGroupMemberActionFormProperties {

		/** Required */
		RegionName: FormControl<string | null | undefined>,
		KMSMasterKeyId: FormControl<string | null | undefined>,
		TableClassOverride: FormControl<TableClass | null | undefined>,
	}
	export function CreateUpdateReplicationGroupMemberActionFormGroup() {
		return new FormGroup<UpdateReplicationGroupMemberActionFormProperties>({
			RegionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KMSMasterKeyId: new FormControl<string | null | undefined>(undefined),
			TableClassOverride: new FormControl<TableClass | null | undefined>(undefined),
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
		TableAutoScalingDescription?: TableAutoScalingDescription;
	}
	export interface UpdateTableReplicaAutoScalingOutputFormProperties {
	}
	export function CreateUpdateTableReplicaAutoScalingOutputFormGroup() {
		return new FormGroup<UpdateTableReplicaAutoScalingOutputFormProperties>({
		});

	}

	export interface UpdateTableReplicaAutoScalingInput {
		GlobalSecondaryIndexUpdates?: Array<GlobalSecondaryIndexAutoScalingUpdate>;

		/** Required */
		TableName: string;

		/** Represents the auto scaling settings to be modified for a global table or global secondary index. */
		ProvisionedWriteCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
		ReplicaUpdates?: Array<ReplicaAutoScalingUpdate>;
	}
	export interface UpdateTableReplicaAutoScalingInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTableReplicaAutoScalingInputFormGroup() {
		return new FormGroup<UpdateTableReplicaAutoScalingInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the auto scaling settings of a global secondary index for a global table that will be modified. */
	export interface GlobalSecondaryIndexAutoScalingUpdate {
		IndexName?: string;

		/** Represents the auto scaling settings to be modified for a global table or global secondary index. */
		ProvisionedWriteCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
	}

	/** Represents the auto scaling settings of a global secondary index for a global table that will be modified. */
	export interface GlobalSecondaryIndexAutoScalingUpdateFormProperties {
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateGlobalSecondaryIndexAutoScalingUpdateFormGroup() {
		return new FormGroup<GlobalSecondaryIndexAutoScalingUpdateFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined),
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
		IndexName?: string;

		/** Represents the auto scaling settings to be modified for a global table or global secondary index. */
		ProvisionedReadCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
	}

	/** Represents the auto scaling settings of a global secondary index for a replica that will be modified. */
	export interface ReplicaGlobalSecondaryIndexAutoScalingUpdateFormProperties {
		IndexName: FormControl<string | null | undefined>,
	}
	export function CreateReplicaGlobalSecondaryIndexAutoScalingUpdateFormGroup() {
		return new FormGroup<ReplicaGlobalSecondaryIndexAutoScalingUpdateFormProperties>({
			IndexName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTimeToLiveOutput {
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

		/** Required */
		AttributeName: string;
	}

	/** Represents the settings used to enable or disable Time to Live (TTL) for the specified table. */
	export interface TimeToLiveSpecificationFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,

		/** Required */
		AttributeName: FormControl<string | null | undefined>,
	}
	export function CreateTimeToLiveSpecificationFormGroup() {
		return new FormGroup<TimeToLiveSpecificationFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input of an <code>UpdateTimeToLive</code> operation. */
	export interface UpdateTimeToLiveInput {

		/** Required */
		TableName: string;

		/** Required */
		TimeToLiveSpecification: TimeToLiveSpecification;
	}

	/** Represents the input of an <code>UpdateTimeToLive</code> operation. */
	export interface UpdateTimeToLiveInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTimeToLiveInputFormGroup() {
		return new FormGroup<UpdateTimeToLiveInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AttributeAction { ADD = 0, PUT = 1, DELETE = 2 }


	/** <p>For the <code>UpdateItem</code> operation, represents the attributes to be modified, the action to perform on each, and the new value for each.</p> <note> <p>You cannot use <code>UpdateItem</code> to update any primary key attributes. Instead, you will need to delete the item, and then use <code>PutItem</code> to create a new item with new attributes.</p> </note> <p>Attribute values cannot be null; string and binary type attributes must have lengths greater than zero; and set type attributes must not be empty. Requests with empty values will be rejected with a <code>ValidationException</code> exception.</p> */
	export interface AttributeValueUpdate {
		Value?: AttributeValue;
		Action?: AttributeAction;
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


	/** <p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul> */
	export enum ReturnConsumedCapacity { INDEXES = 0, TOTAL = 1, NONE = 2 }


	/** <p>Represents a set of primary keys and, for each key, the attributes to retrieve from the table.</p> <p>For each primary key, you must provide <i>all</i> of the key attributes. For example, with a simple primary key, you only need to provide the partition key. For a composite primary key, you must provide <i>both</i> the partition key and the sort key.</p> */
	export interface KeysAndAttributes {

		/** Required */
		Keys: Array<Key>;
		AttributesToGet?: Array<string>;
		ConsistentRead?: boolean | null;
		ProjectionExpression?: string;
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


	/** Represents an operation to perform - either <code>DeleteItem</code> or <code>PutItem</code>. You can only request one of these operations, not both, in a single <code>WriteRequest</code>. If you do need to perform both of these operations, you need to provide two separate <code>WriteRequest</code> objects. */
	export interface WriteRequest {
		PutRequest?: PutRequest;
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


	/** <p>Represents a condition to be compared with an attribute value. This condition can be used with <code>DeleteItem</code>, <code>PutItem</code>, or <code>UpdateItem</code> operations; if the comparison evaluates to true, the operation succeeds; if not, the operation fails. You can use <code>ExpectedAttributeValue</code> in one of two different ways:</p> <ul> <li> <p>Use <code>AttributeValueList</code> to specify one or more values to compare against an attribute. Use <code>ComparisonOperator</code> to specify how you want to perform the comparison. If the comparison evaluates to true, then the conditional operation succeeds.</p> </li> <li> <p>Use <code>Value</code> to specify a value that DynamoDB will compare against an attribute. If the values match, then <code>ExpectedAttributeValue</code> evaluates to true and the conditional operation succeeds. Optionally, you can also set <code>Exists</code> to false, indicating that you <i>do not</i> expect to find the attribute value in the table. In this case, the conditional operation succeeds only if the comparison evaluates to false.</p> </li> </ul> <p> <code>Value</code> and <code>Exists</code> are incompatible with <code>AttributeValueList</code> and <code>ComparisonOperator</code>. Note that if you use both sets of parameters at once, DynamoDB will return a <code>ValidationException</code> exception.</p> */
	export interface ExpectedAttributeValue {
		Value?: AttributeValue;
		Exists?: boolean | null;
		ComparisonOperator?: ComparisonOperator;
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

	export enum S3SseAlgorithm { AES256 = 0, KMS = 1 }

	export enum PointInTimeRecoveryStatus { ENABLED = 0, DISABLED = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>This operation allows you to perform batch reads or writes on data stored in DynamoDB, using PartiQL. Each read statement in a <code>BatchExecuteStatement</code> must specify an equality condition on all key attributes. This enforces that each <code>SELECT</code> statement in a batch returns at most a single item.</p> <note> <p>The entire batch must consist of either read statements or write statements, you cannot mix both in one batch.</p> </note> <important> <p>A HTTP 200 response does not mean that all statements in the BatchExecuteStatement succeeded. Error details for individual statements can be found under the <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchStatementResponse.html#DDB-Type-BatchStatementResponse-Error">Error</a> field of the <code>BatchStatementResponse</code> for each statement.</p> </important>
		 * Post #X-Amz-Target=DynamoDB_20120810.BatchExecuteStatement
		 * @return {BatchExecuteStatementOutput} Success
		 */
		BatchExecuteStatement(requestBody: BatchExecuteStatementInput): Observable<BatchExecuteStatementOutput> {
			return this.http.post<BatchExecuteStatementOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.BatchExecuteStatement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>The <code>BatchGetItem</code> operation returns the attributes of one or more items from one or more tables. You identify requested items by primary key.</p> <p>A single operation can retrieve up to 16 MB of data, which can contain as many as 100 items. <code>BatchGetItem</code> returns a partial result if the response size limit is exceeded, the table's provisioned throughput is exceeded, more than 1MB per partition is requested, or an internal processing failure occurs. If a partial result is returned, the operation returns a value for <code>UnprocessedKeys</code>. You can use this value to retry the operation starting with the next item to get.</p> <important> <p>If you request more than 100 items, <code>BatchGetItem</code> returns a <code>ValidationException</code> with the message "Too many items requested for the BatchGetItem call."</p> </important> <p>For example, if you ask to retrieve 100 items, but each individual item is 300 KB in size, the system returns 52 items (so as not to exceed the 16 MB limit). It also returns an appropriate <code>UnprocessedKeys</code> value so you can get the next page of results. If desired, your application can include its own logic to assemble the pages of results into one dataset.</p> <p>If <i>none</i> of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then <code>BatchGetItem</code> returns a <code>ProvisionedThroughputExceededException</code>. If <i>at least one</i> of the items is successfully processed, then <code>BatchGetItem</code> completes successfully, while returning the keys of the unread items in <code>UnprocessedKeys</code>.</p> <important> <p>If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, <i>we strongly recommend that you use an exponential backoff algorithm</i>. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#BatchOperations">Batch Operations and Error Handling</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> </important> <p>By default, <code>BatchGetItem</code> performs eventually consistent reads on every table in the request. If you want strongly consistent reads instead, you can set <code>ConsistentRead</code> to <code>true</code> for any or all tables.</p> <p>In order to minimize response latency, <code>BatchGetItem</code> may retrieve items in parallel.</p> <p>When designing your application, keep in mind that DynamoDB does not return items in any particular order. To help parse the response by item, include the primary key values for the items in your request in the <code>ProjectionExpression</code> parameter.</p> <p>If a requested item does not exist, it is not returned in the result. Requests for nonexistent items consume the minimum read capacity units according to the type of read. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#CapacityUnitCalculations">Working with Tables</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
		 * Post #X-Amz-Target=DynamoDB_20120810.BatchGetItem
		 * @param {string} RequestItems Pagination token
		 * @return {BatchGetItemOutput} Success
		 */
		BatchGetItem(RequestItems: string | null | undefined, requestBody: BatchGetItemInput): Observable<BatchGetItemOutput> {
			return this.http.post<BatchGetItemOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.BatchGetItem?RequestItems=' + (RequestItems == null ? '' : encodeURIComponent(RequestItems)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>The <code>BatchWriteItem</code> operation puts or deletes multiple items in one or more tables. A single call to <code>BatchWriteItem</code> can transmit up to 16MB of data over the network, consisting of up to 25 item put or delete operations. While individual items can be up to 400 KB once stored, it's important to note that an item's representation might be greater than 400KB while being sent in DynamoDB's JSON format for the API call. For more details on this distinction, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html">Naming Rules and Data Types</a>.</p> <note> <p> <code>BatchWriteItem</code> cannot update items. If you perform a <code>BatchWriteItem</code> operation on an existing item, that item's values will be overwritten by the operation and it will appear like it was updated. To update items, we recommend you use the <code>UpdateItem</code> action.</p> </note> <p>The individual <code>PutItem</code> and <code>DeleteItem</code> operations specified in <code>BatchWriteItem</code> are atomic; however <code>BatchWriteItem</code> as a whole is not. If any requested operations fail because the table's provisioned throughput is exceeded or an internal processing failure occurs, the failed operations are returned in the <code>UnprocessedItems</code> response parameter. You can investigate and optionally resend the requests. Typically, you would call <code>BatchWriteItem</code> in a loop. Each iteration would check for unprocessed items and submit a new <code>BatchWriteItem</code> request with those unprocessed items until all items have been processed.</p> <p>If <i>none</i> of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then <code>BatchWriteItem</code> returns a <code>ProvisionedThroughputExceededException</code>.</p> <important> <p>If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, <i>we strongly recommend that you use an exponential backoff algorithm</i>. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#Programming.Errors.BatchOperations">Batch Operations and Error Handling</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> </important> <p>With <code>BatchWriteItem</code>, you can efficiently write or delete large amounts of data, such as from Amazon EMR, or copy data from another database into DynamoDB. In order to improve performance with these large-scale operations, <code>BatchWriteItem</code> does not behave in the same way as individual <code>PutItem</code> and <code>DeleteItem</code> calls would. For example, you cannot specify conditions on individual put and delete requests, and <code>BatchWriteItem</code> does not return deleted items in the response.</p> <p>If you use a programming language that supports concurrency, you can use threads to write items in parallel. Your application must include the necessary logic to manage the threads. With languages that don't support threading, you must update or delete the specified items one at a time. In both situations, <code>BatchWriteItem</code> performs the specified put and delete operations in parallel, giving you the power of the thread pool approach without having to introduce complexity into your application.</p> <p>Parallel processing reduces latency, but each specified put and delete request consumes the same number of write capacity units whether it is processed in parallel or not. Delete operations on nonexistent items consume one write capacity unit.</p> <p>If one or more of the following is true, DynamoDB rejects the entire batch write operation:</p> <ul> <li> <p>One or more tables specified in the <code>BatchWriteItem</code> request does not exist.</p> </li> <li> <p>Primary key attributes specified on an item in the request do not match those in the corresponding table's primary key schema.</p> </li> <li> <p>You try to perform multiple operations on the same item in the same <code>BatchWriteItem</code> request. For example, you cannot put and delete the same item in the same <code>BatchWriteItem</code> request. </p> </li> <li> <p> Your request contains at least two items with identical hash and range keys (which essentially is two put operations). </p> </li> <li> <p>There are more than 25 requests in the batch.</p> </li> <li> <p>Any individual item in a batch exceeds 400 KB.</p> </li> <li> <p>The total request size exceeds 16 MB.</p> </li> </ul>
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
		 * <p>Creates a global table from an existing table. A global table creates a replication relationship between two or more DynamoDB tables with the same table name in the provided Regions. </p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important> <p>If you want to add a new replica table to a global table, each of the following conditions must be true:</p> <ul> <li> <p>The table must have the same primary key as all of the other replicas.</p> </li> <li> <p>The table must have the same name as all of the other replicas.</p> </li> <li> <p>The table must have DynamoDB Streams enabled, with the stream containing both the new and the old images of the item.</p> </li> <li> <p>None of the replica tables in the global table can contain any data.</p> </li> </ul> <p> If global secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The global secondary indexes must have the same name. </p> </li> <li> <p> The global secondary indexes must have the same hash key and sort key (if present). </p> </li> </ul> <p> If local secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The local secondary indexes must have the same name. </p> </li> <li> <p> The local secondary indexes must have the same hash key and sort key (if present). </p> </li> </ul> <important> <p> Write capacity settings should be set consistently across your replica tables and secondary indexes. DynamoDB strongly recommends enabling auto scaling to manage the write capacity settings for all of your global tables replicas and indexes. </p> <p> If you prefer to manage write capacity settings manually, you should provision equal replicated write capacity units to your replica tables. You should also provision equal replicated write capacity units to matching secondary indexes across your global table. </p> </important>
		 * Post #X-Amz-Target=DynamoDB_20120810.CreateGlobalTable
		 * @return {CreateGlobalTableOutput} Success
		 */
		CreateGlobalTable(requestBody: CreateGlobalTableInput): Observable<CreateGlobalTableOutput> {
			return this.http.post<CreateGlobalTableOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.CreateGlobalTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>The <code>CreateTable</code> operation adds a new table to your account. In an Amazon Web Services account, table names must be unique within each Region. That is, you can have two tables with same name if you create the tables in different Regions.</p> <p> <code>CreateTable</code> is an asynchronous operation. Upon receiving a <code>CreateTable</code> request, DynamoDB immediately returns a response with a <code>TableStatus</code> of <code>CREATING</code>. After the table is created, DynamoDB sets the <code>TableStatus</code> to <code>ACTIVE</code>. You can perform read and write operations only on an <code>ACTIVE</code> table. </p> <p>You can optionally define secondary indexes on the new table, as part of the <code>CreateTable</code> operation. If you want to create multiple tables with secondary indexes on them, you must create the tables sequentially. Only one table with secondary indexes can be in the <code>CREATING</code> state at any given time.</p> <p>You can use the <code>DescribeTable</code> action to check the table status.</p>
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
		 * <p>The <code>DeleteTable</code> operation deletes a table and all of its items. After a <code>DeleteTable</code> request, the specified table is in the <code>DELETING</code> state until DynamoDB completes the deletion. If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states, then DynamoDB returns a <code>ResourceInUseException</code>. If the specified table does not exist, DynamoDB returns a <code>ResourceNotFoundException</code>. If table is already in the <code>DELETING</code> state, no error is returned. </p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important> <note> <p>DynamoDB might continue to accept data read and write operations, such as <code>GetItem</code> and <code>PutItem</code>, on a table in the <code>DELETING</code> state until the table deletion is complete.</p> </note> <p>When you delete a table, any indexes on that table are also deleted.</p> <p>If you have DynamoDB Streams enabled on the table, then the corresponding stream on that table goes into the <code>DISABLED</code> state, and the stream is automatically deleted after 24 hours.</p> <p>Use the <code>DescribeTable</code> action to check the status of the table. </p>
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
		 * Returns information about contributor insights for a given table or global secondary index.
		 * Post #X-Amz-Target=DynamoDB_20120810.DescribeContributorInsights
		 * @return {DescribeContributorInsightsOutput} Success
		 */
		DescribeContributorInsights(requestBody: DescribeContributorInsightsInput): Observable<DescribeContributorInsightsOutput> {
			return this.http.post<DescribeContributorInsightsOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.DescribeContributorInsights', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the regional endpoint information. For more information on policy permissions, please see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/inter-network-traffic-privacy.html#inter-network-traffic-DescribeEndpoints">Internetwork traffic privacy</a>.
		 * Post #X-Amz-Target=DynamoDB_20120810.DescribeEndpoints
		 * @return {DescribeEndpointsResponse} Success
		 */
		DescribeEndpoints(requestBody: DescribeEndpointsRequest): Observable<DescribeEndpointsResponse> {
			return this.http.post<DescribeEndpointsResponse>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.DescribeEndpoints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes an existing table export.
		 * Post #X-Amz-Target=DynamoDB_20120810.DescribeExport
		 * @return {DescribeExportOutput} Success
		 */
		DescribeExport(requestBody: DescribeExportInput): Observable<DescribeExportOutput> {
			return this.http.post<DescribeExportOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.DescribeExport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the specified global table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>
		 * Post #X-Amz-Target=DynamoDB_20120810.DescribeGlobalTable
		 * @return {DescribeGlobalTableOutput} Success
		 */
		DescribeGlobalTable(requestBody: DescribeGlobalTableInput): Observable<DescribeGlobalTableOutput> {
			return this.http.post<DescribeGlobalTableOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes Region-specific settings for a global table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>
		 * Post #X-Amz-Target=DynamoDB_20120810.DescribeGlobalTableSettings
		 * @return {DescribeGlobalTableSettingsOutput} Success
		 */
		DescribeGlobalTableSettings(requestBody: DescribeGlobalTableSettingsInput): Observable<DescribeGlobalTableSettingsOutput> {
			return this.http.post<DescribeGlobalTableSettingsOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTableSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Represents the properties of the import.
		 * Post #X-Amz-Target=DynamoDB_20120810.DescribeImport
		 * @return {DescribeImportOutput} Success
		 */
		DescribeImport(requestBody: DescribeImportInput): Observable<DescribeImportOutput> {
			return this.http.post<DescribeImportOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.DescribeImport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the status of Kinesis streaming.
		 * Post #X-Amz-Target=DynamoDB_20120810.DescribeKinesisStreamingDestination
		 * @return {DescribeKinesisStreamingDestinationOutput} Success
		 */
		DescribeKinesisStreamingDestination(requestBody: DescribeKinesisStreamingDestinationInput): Observable<DescribeKinesisStreamingDestinationOutput> {
			return this.http.post<DescribeKinesisStreamingDestinationOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.DescribeKinesisStreamingDestination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the current provisioned-capacity quotas for your Amazon Web Services account in a Region, both for the Region as a whole and for any one DynamoDB table that you create there.</p> <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum read capacity units and write capacity units that you can provision across all of your DynamoDB tables in a given Region. Also, there are per-table quotas that apply when you create a table there. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> page in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p>Although you can increase these quotas by filing a case at <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support Center</a>, obtaining the increase is not instantaneous. The <code>DescribeLimits</code> action lets you write code to compare the capacity you are currently using to those quotas imposed by your account so that you have enough time to apply for an increase before you hit a quota.</p> <p>For example, you could use one of the Amazon Web Services SDKs to do the following:</p> <ol> <li> <p>Call <code>DescribeLimits</code> for a particular Region to obtain your current account quotas on provisioned capacity there.</p> </li> <li> <p>Create a variable to hold the aggregate read capacity units provisioned for all your tables in that Region, and one to hold the aggregate write capacity units. Zero them both.</p> </li> <li> <p>Call <code>ListTables</code> to obtain a list of all your DynamoDB tables.</p> </li> <li> <p>For each table name listed by <code>ListTables</code>, do the following:</p> <ul> <li> <p>Call <code>DescribeTable</code> with the table name.</p> </li> <li> <p>Use the data returned by <code>DescribeTable</code> to add the read capacity units and write capacity units provisioned for the table itself to your variables.</p> </li> <li> <p>If the table has one or more global secondary indexes (GSIs), loop over these GSIs and add their provisioned capacity values to your variables as well.</p> </li> </ul> </li> <li> <p>Report the account quotas for that Region returned by <code>DescribeLimits</code>, along with the total current provisioned capacity levels you have calculated.</p> </li> </ol> <p>This will let you see whether you are getting close to your account-level quotas.</p> <p>The per-table quotas apply only when you are creating a new table. They restrict the sum of the provisioned capacity of the new table itself and all its global secondary indexes.</p> <p>For existing tables and their GSIs, DynamoDB doesn't let you increase provisioned capacity extremely rapidly, but the only quota that applies is that the aggregate provisioned capacity over all your tables and GSIs cannot exceed either of the per-account quotas.</p> <note> <p> <code>DescribeLimits</code> should only be called periodically. You can expect throttling errors if you call it more than once in a minute.</p> </note> <p>The <code>DescribeLimits</code> Request element has no content.</p>
		 * Post #X-Amz-Target=DynamoDB_20120810.DescribeLimits
		 * @return {DescribeLimitsOutput} Success
		 */
		DescribeLimits(requestBody: DescribeLimitsInput): Observable<DescribeLimitsOutput> {
			return this.http.post<DescribeLimitsOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.DescribeLimits', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the table, including the current status of the table, when it was created, the primary key schema, and any indexes on the table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important> <note> <p>If you issue a <code>DescribeTable</code> request immediately after a <code>CreateTable</code> request, DynamoDB might return a <code>ResourceNotFoundException</code>. This is because <code>DescribeTable</code> uses an eventually consistent query, and the metadata for your table might not be available at that moment. Wait for a few seconds, and then try the <code>DescribeTable</code> request again.</p> </note>
		 * Post #X-Amz-Target=DynamoDB_20120810.DescribeTable
		 * @return {DescribeTableOutput} Success
		 */
		DescribeTable(requestBody: DescribeTableInput): Observable<DescribeTableOutput> {
			return this.http.post<DescribeTableOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.DescribeTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes auto scaling settings across replicas of the global table at once.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables.</p> </important>
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
		 * Stops replication from the DynamoDB table to the Kinesis data stream. This is done without deleting either of the resources.
		 * Post #X-Amz-Target=DynamoDB_20120810.DisableKinesisStreamingDestination
		 * @return {KinesisStreamingDestinationOutput} Success
		 */
		DisableKinesisStreamingDestination(requestBody: KinesisStreamingDestinationInput): Observable<KinesisStreamingDestinationOutput> {
			return this.http.post<KinesisStreamingDestinationOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.DisableKinesisStreamingDestination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts table data replication to the specified Kinesis data stream at a timestamp chosen during the enable workflow. If this operation doesn't return results immediately, use DescribeKinesisStreamingDestination to check if streaming to the Kinesis data stream is ACTIVE.
		 * Post #X-Amz-Target=DynamoDB_20120810.EnableKinesisStreamingDestination
		 * @return {KinesisStreamingDestinationOutput} Success
		 */
		EnableKinesisStreamingDestination(requestBody: KinesisStreamingDestinationInput): Observable<KinesisStreamingDestinationOutput> {
			return this.http.post<KinesisStreamingDestinationOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.EnableKinesisStreamingDestination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This operation allows you to perform reads and singleton writes on data stored in DynamoDB, using PartiQL.</p> <p>For PartiQL reads (<code>SELECT</code> statement), if the total number of processed items exceeds the maximum dataset size limit of 1 MB, the read stops and results are returned to the user as a <code>LastEvaluatedKey</code> value to continue the read in a subsequent operation. If the filter criteria in <code>WHERE</code> clause does not match any data, the read will return an empty result set.</p> <p>A single <code>SELECT</code> statement response can return up to the maximum number of items (if using the Limit parameter) or a maximum of 1 MB of data (and then apply any filtering to the results using <code>WHERE</code> clause). If <code>LastEvaluatedKey</code> is present in the response, you need to paginate the result set. If <code>NextToken</code> is present, you need to paginate the result set and include <code>NextToken</code>.</p>
		 * Post #X-Amz-Target=DynamoDB_20120810.ExecuteStatement
		 * @return {ExecuteStatementOutput} Success
		 */
		ExecuteStatement(requestBody: ExecuteStatementInput): Observable<ExecuteStatementOutput> {
			return this.http.post<ExecuteStatementOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.ExecuteStatement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This operation allows you to perform transactional reads or writes on data stored in DynamoDB, using PartiQL.</p> <note> <p>The entire transaction must consist of either read statements or write statements, you cannot mix both in one transaction. The EXISTS function is an exception and can be used to check the condition of specific attributes of the item in a similar manner to <code>ConditionCheck</code> in the <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/transaction-apis.html#transaction-apis-txwriteitems">TransactWriteItems</a> API.</p> </note>
		 * Post #X-Amz-Target=DynamoDB_20120810.ExecuteTransaction
		 * @return {ExecuteTransactionOutput} Success
		 */
		ExecuteTransaction(requestBody: ExecuteTransactionInput): Observable<ExecuteTransactionOutput> {
			return this.http.post<ExecuteTransactionOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.ExecuteTransaction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Exports table data to an S3 bucket. The table must have point in time recovery enabled, and you can export data from any time within the point in time recovery window.
		 * Post #X-Amz-Target=DynamoDB_20120810.ExportTableToPointInTime
		 * @return {ExportTableToPointInTimeOutput} Success
		 */
		ExportTableToPointInTime(requestBody: ExportTableToPointInTimeInput): Observable<ExportTableToPointInTimeOutput> {
			return this.http.post<ExportTableToPointInTimeOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.ExportTableToPointInTime', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Imports table data from an S3 bucket.
		 * Post #X-Amz-Target=DynamoDB_20120810.ImportTable
		 * @return {ImportTableOutput} Success
		 */
		ImportTable(requestBody: ImportTableInput): Observable<ImportTableOutput> {
			return this.http.post<ImportTableOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.ImportTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>List backups associated with an Amazon Web Services account. To list backups for a given table, specify <code>TableName</code>. <code>ListBackups</code> returns a paginated list of results with at most 1 MB worth of items in a page. You can also specify a maximum number of entries to be returned in a page.</p> <p>In the request, start time is inclusive, but end time is exclusive. Note that these boundaries are for the time at which the original backup was requested.</p> <p>You can call <code>ListBackups</code> a maximum of five times per second.</p>
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
		 * Lists completed exports within the past 90 days.
		 * Post #X-Amz-Target=DynamoDB_20120810.ListExports
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListExportsOutput} Success
		 */
		ListExports(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListExportsInput): Observable<ListExportsOutput> {
			return this.http.post<ListExportsOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.ListExports?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists all global tables that have a replica in the specified Region.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>
		 * Post #X-Amz-Target=DynamoDB_20120810.ListGlobalTables
		 * @return {ListGlobalTablesOutput} Success
		 */
		ListGlobalTables(requestBody: ListGlobalTablesInput): Observable<ListGlobalTablesOutput> {
			return this.http.post<ListGlobalTablesOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.ListGlobalTables', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists completed imports within the past 90 days.
		 * Post #X-Amz-Target=DynamoDB_20120810.ListImports
		 * @param {string} PageSize Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListImportsOutput} Success
		 */
		ListImports(PageSize: string | null | undefined, NextToken: string | null | undefined, requestBody: ListImportsInput): Observable<ListImportsOutput> {
			return this.http.post<ListImportsOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.ListImports?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Creates a new item, or replaces an old item with a new item. If an item that has the same primary key as the new item already exists in the specified table, the new item completely replaces the existing item. You can perform a conditional put operation (add a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values. You can return the item's attribute values in the same operation, using the <code>ReturnValues</code> parameter.</p> <p>When you add an item, the primary key attributes are the only required attributes. </p> <p>Empty String and Binary attribute values are allowed. Attribute values of type String and Binary must have a length greater than zero if the attribute is used as a key attribute for a table or index. Set type attributes cannot be empty. </p> <p>Invalid Requests with empty values will be rejected with a <code>ValidationException</code> exception.</p> <note> <p>To prevent a new item from replacing an existing item, use a conditional expression that contains the <code>attribute_not_exists</code> function with the name of the attribute being used as the partition key for the table. Since every record must contain that attribute, the <code>attribute_not_exists</code> function will only succeed if no matching item exists.</p> </note> <p>For more information about <code>PutItem</code>, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html">Working with Items</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
		 * Post #X-Amz-Target=DynamoDB_20120810.PutItem
		 * @return {PutItemOutput} Success
		 */
		PutItem(requestBody: PutItemInput): Observable<PutItemOutput> {
			return this.http.post<PutItemOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.PutItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>You must provide the name of the partition key attribute and a single value for that attribute. <code>Query</code> returns all items with that partition key value. Optionally, you can provide a sort key attribute and use a comparison operator to refine the search results.</p> <p>Use the <code>KeyConditionExpression</code> parameter to provide a specific value for the partition key. The <code>Query</code> operation will return all of the items from the table or index with that partition key value. You can optionally narrow the scope of the <code>Query</code> operation by specifying a sort key value and a comparison operator in <code>KeyConditionExpression</code>. To further refine the <code>Query</code> results, you can optionally provide a <code>FilterExpression</code>. A <code>FilterExpression</code> determines which items within the results should be returned to you. All of the other results are discarded. </p> <p> A <code>Query</code> operation always returns a result set. If no matching items are found, the result set will be empty. Queries that do not return results consume the minimum number of read capacity units for that type of read operation. </p> <note> <p> DynamoDB calculates the number of read capacity units consumed based on item size, not on the amount of data that is returned to an application. The number of capacity units consumed will be the same whether you request all of the attributes (the default behavior) or just some of them (using a projection expression). The number will also be the same whether or not you use a <code>FilterExpression</code>. </p> </note> <p> <code>Query</code> results are always sorted by the sort key value. If the data type of the sort key is Number, the results are returned in numeric order; otherwise, the results are returned in order of UTF-8 bytes. By default, the sort order is ascending. To reverse the order, set the <code>ScanIndexForward</code> parameter to false. </p> <p> A single <code>Query</code> operation will read up to the maximum number of items set (if using the <code>Limit</code> parameter) or a maximum of 1 MB of data and then apply any filtering to the results using <code>FilterExpression</code>. If <code>LastEvaluatedKey</code> is present in the response, you will need to paginate the result set. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.Pagination">Paginating the Results</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p> <p> <code>FilterExpression</code> is applied after a <code>Query</code> finishes, but before the results are returned. A <code>FilterExpression</code> cannot contain partition key or sort key attributes. You need to specify those attributes in the <code>KeyConditionExpression</code>. </p> <note> <p> A <code>Query</code> operation can return an empty result set and a <code>LastEvaluatedKey</code> if all the items read for the page of results are filtered out. </p> </note> <p>You can query a table, a local secondary index, or a global secondary index. For a query on a table or on a local secondary index, you can set the <code>ConsistentRead</code> parameter to <code>true</code> and obtain a strongly consistent result. Global secondary indexes support eventually consistent reads only, so do not specify <code>ConsistentRead</code> when querying a global secondary index.</p>
		 * Post #X-Amz-Target=DynamoDB_20120810.Query
		 * @param {string} Limit Pagination limit
		 * @param {string} ExclusiveStartKey Pagination token
		 * @return {QueryOutput} Success
		 */
		Query(Limit: string | null | undefined, ExclusiveStartKey: string | null | undefined, requestBody: QueryInput): Observable<QueryOutput> {
			return this.http.post<QueryOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.Query?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&ExclusiveStartKey=' + (ExclusiveStartKey == null ? '' : encodeURIComponent(ExclusiveStartKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new table from an existing backup. Any number of users can execute up to 50 concurrent restores (any type of restore) in a given account. </p> <p>You can call <code>RestoreTableFromBackup</code> at a maximum rate of 10 times per second.</p> <p>You must manually set up the following on the restored table:</p> <ul> <li> <p>Auto scaling policies</p> </li> <li> <p>IAM policies</p> </li> <li> <p>Amazon CloudWatch metrics and alarms</p> </li> <li> <p>Tags</p> </li> <li> <p>Stream settings</p> </li> <li> <p>Time to Live (TTL) settings</p> </li> </ul>
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
		 * <p>The <code>Scan</code> operation returns one or more items and item attributes by accessing every item in a table or a secondary index. To have DynamoDB return fewer items, you can provide a <code>FilterExpression</code> operation.</p> <p>If the total size of scanned items exceeds the maximum dataset size limit of 1 MB, the scan completes and results are returned to the user. The <code>LastEvaluatedKey</code> value is also returned and the requestor can use the <code>LastEvaluatedKey</code> to continue the scan in a subsequent operation. Each scan response also includes number of items that were scanned (ScannedCount) as part of the request. If using a <code>FilterExpression</code>, a scan result can result in no items meeting the criteria and the <code>Count</code> will result in zero. If you did not use a <code>FilterExpression</code> in the scan request, then <code>Count</code> is the same as <code>ScannedCount</code>.</p> <note> <p> <code>Count</code> and <code>ScannedCount</code> only return the count of items specific to a single scan request and, unless the table is less than 1MB, do not represent the total number of items in the table. </p> </note> <p>A single <code>Scan</code> operation first reads up to the maximum number of items set (if using the <code>Limit</code> parameter) or a maximum of 1 MB of data and then applies any filtering to the results if a <code>FilterExpression</code> is provided. If <code>LastEvaluatedKey</code> is present in the response, pagination is required to complete the full table scan. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.Pagination">Paginating the Results</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p> <code>Scan</code> operations proceed sequentially; however, for faster performance on a large table or secondary index, applications can request a parallel <code>Scan</code> operation by providing the <code>Segment</code> and <code>TotalSegments</code> parameters. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.ParallelScan">Parallel Scan</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p>By default, a <code>Scan</code> uses eventually consistent reads when accessing the items in a table. Therefore, the results from an eventually consistent <code>Scan</code> may not include the latest item changes at the time the scan iterates through each item in the table. If you require a strongly consistent read of each item as the scan iterates through the items in the table, you can set the <code>ConsistentRead</code> parameter to true. Strong consistency only relates to the consistency of the read at the item level.</p> <note> <p> DynamoDB does not provide snapshot isolation for a scan operation when the <code>ConsistentRead</code> parameter is set to true. Thus, a DynamoDB scan operation does not guarantee that all reads in a scan see a consistent snapshot of the table when the scan operation was requested. </p> </note>
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
		 * <p> <code>TransactGetItems</code> is a synchronous operation that atomically retrieves multiple items from one or more tables (but not from indexes) in a single account and Region. A <code>TransactGetItems</code> call can contain up to 100 <code>TransactGetItem</code> objects, each of which contains a <code>Get</code> structure that specifies an item to retrieve from a table in the account and Region. A call to <code>TransactGetItems</code> cannot retrieve items from tables in more than one Amazon Web Services account or Region. The aggregate size of the items in the transaction cannot exceed 4 MB.</p> <p>DynamoDB rejects the entire <code>TransactGetItems</code> request if any of the following is true:</p> <ul> <li> <p>A conflicting operation is in the process of updating an item to be read.</p> </li> <li> <p>There is insufficient provisioned capacity for the transaction to be completed.</p> </li> <li> <p>There is a user error, such as an invalid data format.</p> </li> <li> <p>The aggregate size of the items in the transaction exceeded 4 MB.</p> </li> </ul>
		 * Post #X-Amz-Target=DynamoDB_20120810.TransactGetItems
		 * @return {TransactGetItemsOutput} Success
		 */
		TransactGetItems(requestBody: TransactGetItemsInput): Observable<TransactGetItemsOutput> {
			return this.http.post<TransactGetItemsOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.TransactGetItems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <code>TransactWriteItems</code> is a synchronous write operation that groups up to 100 action requests. These actions can target items in different tables, but not in different Amazon Web Services accounts or Regions, and no two actions can target the same item. For example, you cannot both <code>ConditionCheck</code> and <code>Update</code> the same item. The aggregate size of the items in the transaction cannot exceed 4 MB.</p> <p>The actions are completed atomically so that either all of them succeed, or all of them fail. They are defined by the following objects:</p> <ul> <li> <p> <code>Put</code>  —   Initiates a <code>PutItem</code> operation to write a new item. This structure specifies the primary key of the item to be written, the name of the table to write it in, an optional condition expression that must be satisfied for the write to succeed, a list of the item's attributes, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>Update</code>  —   Initiates an <code>UpdateItem</code> operation to update an existing item. This structure specifies the primary key of the item to be updated, the name of the table where it resides, an optional condition expression that must be satisfied for the update to succeed, an expression that defines one or more attributes to be updated, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>Delete</code>  —   Initiates a <code>DeleteItem</code> operation to delete an existing item. This structure specifies the primary key of the item to be deleted, the name of the table where it resides, an optional condition expression that must be satisfied for the deletion to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>ConditionCheck</code>  —   Applies a condition to an item that is not being modified by the transaction. This structure specifies the primary key of the item to be checked, the name of the table where it resides, a condition expression that must be satisfied for the transaction to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> </ul> <p>DynamoDB rejects the entire <code>TransactWriteItems</code> request if any of the following is true:</p> <ul> <li> <p>A condition in one of the condition expressions is not met.</p> </li> <li> <p>An ongoing operation is in the process of updating the same item.</p> </li> <li> <p>There is insufficient provisioned capacity for the transaction to be completed.</p> </li> <li> <p>An item size becomes too large (bigger than 400 KB), a local secondary index (LSI) becomes too large, or a similar validation error occurs because of changes made by the transaction.</p> </li> <li> <p>The aggregate size of the items in the transaction exceeds 4 MB.</p> </li> <li> <p>There is a user error, such as an invalid data format.</p> </li> </ul>
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
		 * Updates the status for contributor insights for a specific table or index. CloudWatch Contributor Insights for DynamoDB graphs display the partition key and (if applicable) sort key of frequently accessed items and frequently throttled items in plaintext. If you require the use of Amazon Web Services Key Management Service (KMS) to encrypt this table’s partition key and sort key data with an Amazon Web Services managed key or customer managed key, you should not enable CloudWatch Contributor Insights for DynamoDB for this table.
		 * Post #X-Amz-Target=DynamoDB_20120810.UpdateContributorInsights
		 * @return {UpdateContributorInsightsOutput} Success
		 */
		UpdateContributorInsights(requestBody: UpdateContributorInsightsInput): Observable<UpdateContributorInsightsOutput> {
			return this.http.post<UpdateContributorInsightsOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.UpdateContributorInsights', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds or removes replicas in the specified global table. The global table must already exist to be able to use this operation. Any replica to be added must be empty, have the same name as the global table, have the same key schema, have DynamoDB Streams enabled, and have the same provisioned and maximum write capacity units.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important> <note> <p> This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29</a> of global tables. If you are using global tables <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21</a> you can use <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html">DescribeTable</a> instead. </p> <p> Although you can use <code>UpdateGlobalTable</code> to add replicas and remove replicas in a single request, for simplicity we recommend that you issue separate requests for adding or removing replicas. </p> </note> <p> If global secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The global secondary indexes must have the same name. </p> </li> <li> <p> The global secondary indexes must have the same hash key and sort key (if present). </p> </li> <li> <p> The global secondary indexes must have the same provisioned and maximum write capacity units. </p> </li> </ul>
		 * Post #X-Amz-Target=DynamoDB_20120810.UpdateGlobalTable
		 * @return {UpdateGlobalTableOutput} Success
		 */
		UpdateGlobalTable(requestBody: UpdateGlobalTableInput): Observable<UpdateGlobalTableOutput> {
			return this.http.post<UpdateGlobalTableOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates settings for a global table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>
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
		 * <p>Modifies the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important> <p>You can only perform one of the following operations at once:</p> <ul> <li> <p>Modify the provisioned throughput settings of the table.</p> </li> <li> <p>Remove a global secondary index from the table.</p> </li> <li> <p>Create a new global secondary index on the table. After the index begins backfilling, you can use <code>UpdateTable</code> to perform other operations.</p> </li> </ul> <p> <code>UpdateTable</code> is an asynchronous operation; while it is executing, the table status changes from <code>ACTIVE</code> to <code>UPDATING</code>. While it is <code>UPDATING</code>, you cannot issue another <code>UpdateTable</code> request. When the table returns to the <code>ACTIVE</code> state, the <code>UpdateTable</code> operation is complete.</p>
		 * Post #X-Amz-Target=DynamoDB_20120810.UpdateTable
		 * @return {UpdateTableOutput} Success
		 */
		UpdateTable(requestBody: UpdateTableInput): Observable<UpdateTableOutput> {
			return this.http.post<UpdateTableOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20120810.UpdateTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates auto scaling settings on your global tables at once.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important>
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

	export enum BatchExecuteStatementX_Amz_Target { 'DynamoDB_20120810.BatchExecuteStatement' = 0 }

	export enum BatchGetItemX_Amz_Target { 'DynamoDB_20120810.BatchGetItem' = 0 }

	export enum BatchWriteItemX_Amz_Target { 'DynamoDB_20120810.BatchWriteItem' = 0 }

	export enum CreateBackupX_Amz_Target { 'DynamoDB_20120810.CreateBackup' = 0 }

	export enum CreateGlobalTableX_Amz_Target { 'DynamoDB_20120810.CreateGlobalTable' = 0 }

	export enum CreateTableX_Amz_Target { 'DynamoDB_20120810.CreateTable' = 0 }

	export enum DeleteBackupX_Amz_Target { 'DynamoDB_20120810.DeleteBackup' = 0 }

	export enum DeleteItemX_Amz_Target { 'DynamoDB_20120810.DeleteItem' = 0 }

	export enum DeleteTableX_Amz_Target { 'DynamoDB_20120810.DeleteTable' = 0 }

	export enum DescribeBackupX_Amz_Target { 'DynamoDB_20120810.DescribeBackup' = 0 }

	export enum DescribeContinuousBackupsX_Amz_Target { 'DynamoDB_20120810.DescribeContinuousBackups' = 0 }

	export enum DescribeContributorInsightsX_Amz_Target { 'DynamoDB_20120810.DescribeContributorInsights' = 0 }

	export enum DescribeEndpointsX_Amz_Target { 'DynamoDB_20120810.DescribeEndpoints' = 0 }

	export enum DescribeExportX_Amz_Target { 'DynamoDB_20120810.DescribeExport' = 0 }

	export enum DescribeGlobalTableX_Amz_Target { 'DynamoDB_20120810.DescribeGlobalTable' = 0 }

	export enum DescribeGlobalTableSettingsX_Amz_Target { 'DynamoDB_20120810.DescribeGlobalTableSettings' = 0 }

	export enum DescribeImportX_Amz_Target { 'DynamoDB_20120810.DescribeImport' = 0 }

	export enum DescribeKinesisStreamingDestinationX_Amz_Target { 'DynamoDB_20120810.DescribeKinesisStreamingDestination' = 0 }

	export enum DescribeLimitsX_Amz_Target { 'DynamoDB_20120810.DescribeLimits' = 0 }

	export enum DescribeTableX_Amz_Target { 'DynamoDB_20120810.DescribeTable' = 0 }

	export enum DescribeTableReplicaAutoScalingX_Amz_Target { 'DynamoDB_20120810.DescribeTableReplicaAutoScaling' = 0 }

	export enum DescribeTimeToLiveX_Amz_Target { 'DynamoDB_20120810.DescribeTimeToLive' = 0 }

	export enum DisableKinesisStreamingDestinationX_Amz_Target { 'DynamoDB_20120810.DisableKinesisStreamingDestination' = 0 }

	export enum EnableKinesisStreamingDestinationX_Amz_Target { 'DynamoDB_20120810.EnableKinesisStreamingDestination' = 0 }

	export enum ExecuteStatementX_Amz_Target { 'DynamoDB_20120810.ExecuteStatement' = 0 }

	export enum ExecuteTransactionX_Amz_Target { 'DynamoDB_20120810.ExecuteTransaction' = 0 }

	export enum ExportTableToPointInTimeX_Amz_Target { 'DynamoDB_20120810.ExportTableToPointInTime' = 0 }

	export enum GetItemX_Amz_Target { 'DynamoDB_20120810.GetItem' = 0 }

	export enum ImportTableX_Amz_Target { 'DynamoDB_20120810.ImportTable' = 0 }

	export enum ListBackupsX_Amz_Target { 'DynamoDB_20120810.ListBackups' = 0 }

	export enum ListContributorInsightsX_Amz_Target { 'DynamoDB_20120810.ListContributorInsights' = 0 }

	export enum ListExportsX_Amz_Target { 'DynamoDB_20120810.ListExports' = 0 }

	export enum ListGlobalTablesX_Amz_Target { 'DynamoDB_20120810.ListGlobalTables' = 0 }

	export enum ListImportsX_Amz_Target { 'DynamoDB_20120810.ListImports' = 0 }

	export enum ListTablesX_Amz_Target { 'DynamoDB_20120810.ListTables' = 0 }

	export enum ListTagsOfResourceX_Amz_Target { 'DynamoDB_20120810.ListTagsOfResource' = 0 }

	export enum PutItemX_Amz_Target { 'DynamoDB_20120810.PutItem' = 0 }

	export enum QueryX_Amz_Target { 'DynamoDB_20120810.Query' = 0 }

	export enum RestoreTableFromBackupX_Amz_Target { 'DynamoDB_20120810.RestoreTableFromBackup' = 0 }

	export enum RestoreTableToPointInTimeX_Amz_Target { 'DynamoDB_20120810.RestoreTableToPointInTime' = 0 }

	export enum ScanX_Amz_Target { 'DynamoDB_20120810.Scan' = 0 }

	export enum TagResourceX_Amz_Target { 'DynamoDB_20120810.TagResource' = 0 }

	export enum TransactGetItemsX_Amz_Target { 'DynamoDB_20120810.TransactGetItems' = 0 }

	export enum TransactWriteItemsX_Amz_Target { 'DynamoDB_20120810.TransactWriteItems' = 0 }

	export enum UntagResourceX_Amz_Target { 'DynamoDB_20120810.UntagResource' = 0 }

	export enum UpdateContinuousBackupsX_Amz_Target { 'DynamoDB_20120810.UpdateContinuousBackups' = 0 }

	export enum UpdateContributorInsightsX_Amz_Target { 'DynamoDB_20120810.UpdateContributorInsights' = 0 }

	export enum UpdateGlobalTableX_Amz_Target { 'DynamoDB_20120810.UpdateGlobalTable' = 0 }

	export enum UpdateGlobalTableSettingsX_Amz_Target { 'DynamoDB_20120810.UpdateGlobalTableSettings' = 0 }

	export enum UpdateItemX_Amz_Target { 'DynamoDB_20120810.UpdateItem' = 0 }

	export enum UpdateTableX_Amz_Target { 'DynamoDB_20120810.UpdateTable' = 0 }

	export enum UpdateTableReplicaAutoScalingX_Amz_Target { 'DynamoDB_20120810.UpdateTableReplicaAutoScaling' = 0 }

	export enum UpdateTimeToLiveX_Amz_Target { 'DynamoDB_20120810.UpdateTimeToLive' = 0 }

}

