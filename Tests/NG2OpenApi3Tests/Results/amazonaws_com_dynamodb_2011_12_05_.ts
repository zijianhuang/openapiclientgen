import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchGetItemOutput {

		/** Table names and the respective item attributes from the tables. */
		Responses?: BatchGetResponseMap;
		UnprocessedKeys?: BatchGetRequestMap;
	}
	export interface BatchGetItemOutputFormProperties {
	}
	export function CreateBatchGetItemOutputFormGroup() {
		return new FormGroup<BatchGetItemOutputFormProperties>({
		});

	}


	/** Table names and the respective item attributes from the tables. */
	export interface BatchGetResponseMap {
	}

	/** Table names and the respective item attributes from the tables. */
	export interface BatchGetResponseMapFormProperties {
	}
	export function CreateBatchGetResponseMapFormGroup() {
		return new FormGroup<BatchGetResponseMapFormProperties>({
		});

	}


	/** A map of the table name and corresponding items to get by primary key. While requesting items, each table name can be invoked only once per operation. */
	export interface BatchGetRequestMap {
	}

	/** A map of the table name and corresponding items to get by primary key. While requesting items, each table name can be invoked only once per operation. */
	export interface BatchGetRequestMapFormProperties {
	}
	export function CreateBatchGetRequestMapFormGroup() {
		return new FormGroup<BatchGetRequestMapFormProperties>({
		});

	}

	export interface BatchGetItemInput {

		/**
		 * A map of the table name and corresponding items to get by primary key. While requesting items, each table name can be invoked only once per operation.
		 * Required
		 */
		RequestItems: BatchGetRequestMap;
	}
	export interface BatchGetItemInputFormProperties {
	}
	export function CreateBatchGetItemInputFormGroup() {
		return new FormGroup<BatchGetItemInputFormProperties>({
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


	/** A container for <code>BatchWriteItem</code> response */
	export interface BatchWriteItemOutput {
		Responses?: BatchWriteResponseMap;
		UnprocessedItems?: BatchWriteItemRequestMap;
	}

	/** A container for <code>BatchWriteItem</code> response */
	export interface BatchWriteItemOutputFormProperties {
	}
	export function CreateBatchWriteItemOutputFormGroup() {
		return new FormGroup<BatchWriteItemOutputFormProperties>({
		});

	}

	export interface BatchWriteResponseMap {
	}
	export interface BatchWriteResponseMapFormProperties {
	}
	export function CreateBatchWriteResponseMapFormGroup() {
		return new FormGroup<BatchWriteResponseMapFormProperties>({
		});

	}


	/** <p>A map of table name to list-of-write-requests.</p> <p>Key: The table name corresponding to the list of requests</p> <p>Value: Essentially a list of request items. Each request item could contain either a <code>PutRequest</code> or <code>DeleteRequest</code>. Never both.</p> */
	export interface BatchWriteItemRequestMap {
	}

	/** <p>A map of table name to list-of-write-requests.</p> <p>Key: The table name corresponding to the list of requests</p> <p>Value: Essentially a list of request items. Each request item could contain either a <code>PutRequest</code> or <code>DeleteRequest</code>. Never both.</p> */
	export interface BatchWriteItemRequestMapFormProperties {
	}
	export function CreateBatchWriteItemRequestMapFormGroup() {
		return new FormGroup<BatchWriteItemRequestMapFormProperties>({
		});

	}

	export interface BatchWriteItemInput {

		/** Required */
		RequestItems: BatchWriteItemRequestMap;
	}
	export interface BatchWriteItemInputFormProperties {
	}
	export function CreateBatchWriteItemInputFormGroup() {
		return new FormGroup<BatchWriteItemInputFormProperties>({
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

	export interface CreateTableOutput {
		TableDescription?: TableDescription;
	}
	export interface CreateTableOutputFormProperties {
	}
	export function CreateCreateTableOutputFormGroup() {
		return new FormGroup<CreateTableOutputFormProperties>({
		});

	}

	export interface TableDescription {
		TableName?: string;

		/** The KeySchema identifies the primary key as a one attribute primary key (hash) or a composite two attribute (hash-and-range) primary key. Single attribute primary keys have one index value: a <code>HashKeyElement</code>. A composite hash-and-range primary key contains two attribute values: a <code>HashKeyElement</code> and a <code>RangeKeyElement</code>. */
		KeySchema?: KeySchema;
		TableStatus?: TableDescriptionTableStatus | null;
		CreationDateTime?: Date | null;
		ProvisionedThroughput?: ProvisionedThroughputDescription;
		TableSizeBytes?: number | null;
		ItemCount?: number | null;
	}
	export interface TableDescriptionFormProperties {
		TableName: FormControl<string | null | undefined>,
		TableStatus: FormControl<TableDescriptionTableStatus | null | undefined>,
		CreationDateTime: FormControl<Date | null | undefined>,
		TableSizeBytes: FormControl<number | null | undefined>,
		ItemCount: FormControl<number | null | undefined>,
	}
	export function CreateTableDescriptionFormGroup() {
		return new FormGroup<TableDescriptionFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined),
			TableStatus: new FormControl<TableDescriptionTableStatus | null | undefined>(undefined),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined),
			TableSizeBytes: new FormControl<number | null | undefined>(undefined),
			ItemCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The KeySchema identifies the primary key as a one attribute primary key (hash) or a composite two attribute (hash-and-range) primary key. Single attribute primary keys have one index value: a <code>HashKeyElement</code>. A composite hash-and-range primary key contains two attribute values: a <code>HashKeyElement</code> and a <code>RangeKeyElement</code>. */
	export interface KeySchema {

		/** Required */
		HashKeyElement: KeySchemaElement;
		RangeKeyElement?: KeySchemaElement;
	}

	/** The KeySchema identifies the primary key as a one attribute primary key (hash) or a composite two attribute (hash-and-range) primary key. Single attribute primary keys have one index value: a <code>HashKeyElement</code>. A composite hash-and-range primary key contains two attribute values: a <code>HashKeyElement</code> and a <code>RangeKeyElement</code>. */
	export interface KeySchemaFormProperties {
	}
	export function CreateKeySchemaFormGroup() {
		return new FormGroup<KeySchemaFormProperties>({
		});

	}


	/** <code>KeySchemaElement</code> is the primary key (hash or hash-and-range) structure for the table. */
	export interface KeySchemaElement {

		/** Required */
		AttributeName: string;

		/** Required */
		AttributeType: ScalarAttributeType;
	}

	/** <code>KeySchemaElement</code> is the primary key (hash or hash-and-range) structure for the table. */
	export interface KeySchemaElementFormProperties {

		/** Required */
		AttributeName: FormControl<string | null | undefined>,

		/** Required */
		AttributeType: FormControl<ScalarAttributeType | null | undefined>,
	}
	export function CreateKeySchemaElementFormGroup() {
		return new FormGroup<KeySchemaElementFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AttributeType: new FormControl<ScalarAttributeType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ScalarAttributeType { S = 0, N = 1, B = 2 }

	export enum TableDescriptionTableStatus { CREATING = 0, UPDATING = 1, DELETING = 2, ACTIVE = 3 }

	export interface ProvisionedThroughputDescription {
		LastIncreaseDateTime?: Date | null;
		LastDecreaseDateTime?: Date | null;

		/** Minimum: 1 */
		NumberOfDecreasesToday?: number | null;

		/** Minimum: 1 */
		ReadCapacityUnits?: number | null;

		/** Minimum: 1 */
		WriteCapacityUnits?: number | null;
	}
	export interface ProvisionedThroughputDescriptionFormProperties {
		LastIncreaseDateTime: FormControl<Date | null | undefined>,
		LastDecreaseDateTime: FormControl<Date | null | undefined>,

		/** Minimum: 1 */
		NumberOfDecreasesToday: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		ReadCapacityUnits: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		WriteCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateProvisionedThroughputDescriptionFormGroup() {
		return new FormGroup<ProvisionedThroughputDescriptionFormProperties>({
			LastIncreaseDateTime: new FormControl<Date | null | undefined>(undefined),
			LastDecreaseDateTime: new FormControl<Date | null | undefined>(undefined),
			NumberOfDecreasesToday: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			ReadCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			WriteCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface CreateTableInput {

		/** Required */
		TableName: string;

		/**
		 * The KeySchema identifies the primary key as a one attribute primary key (hash) or a composite two attribute (hash-and-range) primary key. Single attribute primary keys have one index value: a <code>HashKeyElement</code>. A composite hash-and-range primary key contains two attribute values: a <code>HashKeyElement</code> and a <code>RangeKeyElement</code>.
		 * Required
		 */
		KeySchema: KeySchema;

		/**
		 * Provisioned throughput reserves the required read and write resources for your table in terms of <code>ReadCapacityUnits</code> and <code>WriteCapacityUnits</code>. Values for provisioned throughput depend upon your expected read/write rates, item size, and consistency. Provide the expected number of read and write operations, assuming an item size of 1k and strictly consistent reads. For 2k item size, double the value. For 3k, triple the value, etc. Eventually-consistent reads consume half the resources of strictly consistent reads.
		 * Required
		 */
		ProvisionedThroughput: ProvisionedThroughput;
	}
	export interface CreateTableInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateCreateTableInputFormGroup() {
		return new FormGroup<CreateTableInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provisioned throughput reserves the required read and write resources for your table in terms of <code>ReadCapacityUnits</code> and <code>WriteCapacityUnits</code>. Values for provisioned throughput depend upon your expected read/write rates, item size, and consistency. Provide the expected number of read and write operations, assuming an item size of 1k and strictly consistent reads. For 2k item size, double the value. For 3k, triple the value, etc. Eventually-consistent reads consume half the resources of strictly consistent reads. */
	export interface ProvisionedThroughput {

		/** Required */
		ReadCapacityUnits: number;

		/** Required */
		WriteCapacityUnits: number;
	}

	/** Provisioned throughput reserves the required read and write resources for your table in terms of <code>ReadCapacityUnits</code> and <code>WriteCapacityUnits</code>. Values for provisioned throughput depend upon your expected read/write rates, item size, and consistency. Provide the expected number of read and write operations, assuming an item size of 1k and strictly consistent reads. For 2k item size, double the value. For 3k, triple the value, etc. Eventually-consistent reads consume half the resources of strictly consistent reads. */
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

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
		});

	}

	export interface DeleteItemOutput {
		Attributes?: AttributeMap;

		/** The number of Capacity Units of the provisioned throughput of the table consumed during the operation. <code>GetItem</code>, <code>BatchGetItem</code>, <code>BatchWriteItem</code>, <code>Query</code>, and <code>Scan</code> operations consume <code>ReadCapacityUnits</code>, while <code>PutItem</code>, <code>UpdateItem</code>, and <code>DeleteItem</code> operations consume <code>WriteCapacityUnits</code>. */
		ConsumedCapacityUnits?: number | null;
	}
	export interface DeleteItemOutputFormProperties {

		/** The number of Capacity Units of the provisioned throughput of the table consumed during the operation. <code>GetItem</code>, <code>BatchGetItem</code>, <code>BatchWriteItem</code>, <code>Query</code>, and <code>Scan</code> operations consume <code>ReadCapacityUnits</code>, while <code>PutItem</code>, <code>UpdateItem</code>, and <code>DeleteItem</code> operations consume <code>WriteCapacityUnits</code>. */
		ConsumedCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateDeleteItemOutputFormGroup() {
		return new FormGroup<DeleteItemOutputFormProperties>({
			ConsumedCapacityUnits: new FormControl<number | null | undefined>(undefined),
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

	export interface DeleteItemInput {

		/** Required */
		TableName: string;

		/**
		 * The primary key that uniquely identifies each item in a table. A primary key can be a one attribute (hash) primary key or a two attribute (hash-and-range) primary key.
		 * Required
		 */
		Key: Key;

		/** Designates an attribute for a conditional modification. The <code>Expected</code> parameter allows you to provide an attribute name, and whether or not Amazon DynamoDB should check to see if the attribute has a particular value before modifying it. */
		Expected?: ExpectedAttributeMap;

		/** <p>Use this parameter if you want to get the attribute name-value pairs before or after they are modified. For <code>PUT</code> operations, the possible parameter values are <code>NONE</code> (default) or <code>ALL_OLD</code>. For update operations, the possible parameter values are <code>NONE</code> (default) or <code>ALL_OLD</code>, <code>UPDATED_OLD</code>, <code>ALL_NEW</code> or <code>UPDATED_NEW</code>.</p> <ul> <li><code>NONE</code>: Nothing is returned.</li> <li><code>ALL_OLD</code>: Returns the attributes of the item as they were before the operation.</li> <li><code>UPDATED_OLD</code>: Returns the values of the updated attributes, only, as they were before the operation.</li> <li><code>ALL_NEW</code>: Returns all the attributes and their new values after the operation.</li> <li><code>UPDATED_NEW</code>: Returns the values of the updated attributes, only, as they are after the operation.</li> </ul> */
		ReturnValues?: DeleteItemInputReturnValues | null;
	}
	export interface DeleteItemInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,

		/** <p>Use this parameter if you want to get the attribute name-value pairs before or after they are modified. For <code>PUT</code> operations, the possible parameter values are <code>NONE</code> (default) or <code>ALL_OLD</code>. For update operations, the possible parameter values are <code>NONE</code> (default) or <code>ALL_OLD</code>, <code>UPDATED_OLD</code>, <code>ALL_NEW</code> or <code>UPDATED_NEW</code>.</p> <ul> <li><code>NONE</code>: Nothing is returned.</li> <li><code>ALL_OLD</code>: Returns the attributes of the item as they were before the operation.</li> <li><code>UPDATED_OLD</code>: Returns the values of the updated attributes, only, as they were before the operation.</li> <li><code>ALL_NEW</code>: Returns all the attributes and their new values after the operation.</li> <li><code>UPDATED_NEW</code>: Returns the values of the updated attributes, only, as they are after the operation.</li> </ul> */
		ReturnValues: FormControl<DeleteItemInputReturnValues | null | undefined>,
	}
	export function CreateDeleteItemInputFormGroup() {
		return new FormGroup<DeleteItemInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReturnValues: new FormControl<DeleteItemInputReturnValues | null | undefined>(undefined),
		});

	}


	/** The primary key that uniquely identifies each item in a table. A primary key can be a one attribute (hash) primary key or a two attribute (hash-and-range) primary key. */
	export interface Key {

		/** Required */
		HashKeyElement: AttributeValue;
		RangeKeyElement?: AttributeValue;
	}

	/** The primary key that uniquely identifies each item in a table. A primary key can be a one attribute (hash) primary key or a two attribute (hash-and-range) primary key. */
	export interface KeyFormProperties {
	}
	export function CreateKeyFormGroup() {
		return new FormGroup<KeyFormProperties>({
		});

	}


	/** AttributeValue can be <code>String</code>, <code>Number</code>, <code>Binary</code>, <code>StringSet</code>, <code>NumberSet</code>, <code>BinarySet</code>. */
	export interface AttributeValue {
		S?: string;
		N?: string;
		B?: string;
		SS?: Array<string>;
		NS?: Array<string>;
		BS?: Array<string>;
	}

	/** AttributeValue can be <code>String</code>, <code>Number</code>, <code>Binary</code>, <code>StringSet</code>, <code>NumberSet</code>, <code>BinarySet</code>. */
	export interface AttributeValueFormProperties {
		S: FormControl<string | null | undefined>,
		N: FormControl<string | null | undefined>,
		B: FormControl<string | null | undefined>,
	}
	export function CreateAttributeValueFormGroup() {
		return new FormGroup<AttributeValueFormProperties>({
			S: new FormControl<string | null | undefined>(undefined),
			N: new FormControl<string | null | undefined>(undefined),
			B: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Designates an attribute for a conditional modification. The <code>Expected</code> parameter allows you to provide an attribute name, and whether or not Amazon DynamoDB should check to see if the attribute has a particular value before modifying it. */
	export interface ExpectedAttributeMap {
	}

	/** Designates an attribute for a conditional modification. The <code>Expected</code> parameter allows you to provide an attribute name, and whether or not Amazon DynamoDB should check to see if the attribute has a particular value before modifying it. */
	export interface ExpectedAttributeMapFormProperties {
	}
	export function CreateExpectedAttributeMapFormGroup() {
		return new FormGroup<ExpectedAttributeMapFormProperties>({
		});

	}

	export enum DeleteItemInputReturnValues { NONE = 0, ALL_OLD = 1, UPDATED_OLD = 2, ALL_NEW = 3, UPDATED_NEW = 4 }

	export interface ConditionalCheckFailedException {
	}
	export interface ConditionalCheckFailedExceptionFormProperties {
	}
	export function CreateConditionalCheckFailedExceptionFormGroup() {
		return new FormGroup<ConditionalCheckFailedExceptionFormProperties>({
		});

	}

	export interface DeleteTableOutput {
		TableDescription?: TableDescription;
	}
	export interface DeleteTableOutputFormProperties {
	}
	export function CreateDeleteTableOutputFormGroup() {
		return new FormGroup<DeleteTableOutputFormProperties>({
		});

	}

	export interface DeleteTableInput {

		/** Required */
		TableName: string;
	}
	export interface DeleteTableInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTableInputFormGroup() {
		return new FormGroup<DeleteTableInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeTableOutput {
		Table?: TableDescription;
	}
	export interface DescribeTableOutputFormProperties {
	}
	export function CreateDescribeTableOutputFormGroup() {
		return new FormGroup<DescribeTableOutputFormProperties>({
		});

	}

	export interface DescribeTableInput {

		/** Required */
		TableName: string;
	}
	export interface DescribeTableInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTableInputFormGroup() {
		return new FormGroup<DescribeTableInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetItemOutput {
		Item?: AttributeMap;

		/** The number of Capacity Units of the provisioned throughput of the table consumed during the operation. <code>GetItem</code>, <code>BatchGetItem</code>, <code>BatchWriteItem</code>, <code>Query</code>, and <code>Scan</code> operations consume <code>ReadCapacityUnits</code>, while <code>PutItem</code>, <code>UpdateItem</code>, and <code>DeleteItem</code> operations consume <code>WriteCapacityUnits</code>. */
		ConsumedCapacityUnits?: number | null;
	}
	export interface GetItemOutputFormProperties {

		/** The number of Capacity Units of the provisioned throughput of the table consumed during the operation. <code>GetItem</code>, <code>BatchGetItem</code>, <code>BatchWriteItem</code>, <code>Query</code>, and <code>Scan</code> operations consume <code>ReadCapacityUnits</code>, while <code>PutItem</code>, <code>UpdateItem</code>, and <code>DeleteItem</code> operations consume <code>WriteCapacityUnits</code>. */
		ConsumedCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateGetItemOutputFormGroup() {
		return new FormGroup<GetItemOutputFormProperties>({
			ConsumedCapacityUnits: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetItemInput {

		/** Required */
		TableName: string;

		/**
		 * The primary key that uniquely identifies each item in a table. A primary key can be a one attribute (hash) primary key or a two attribute (hash-and-range) primary key.
		 * Required
		 */
		Key: Key;

		/**
		 * List of <code>Attribute</code> names. If attribute names are not specified then all attributes will be returned. If some attributes are not found, they will not appear in the result.
		 * Minimum items: 1
		 */
		AttributesToGet?: Array<string>;

		/** If set to <code>true</code>, then a consistent read is issued. Otherwise eventually-consistent is used. */
		ConsistentRead?: boolean | null;
	}
	export interface GetItemInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,

		/** If set to <code>true</code>, then a consistent read is issued. Otherwise eventually-consistent is used. */
		ConsistentRead: FormControl<boolean | null | undefined>,
	}
	export function CreateGetItemInputFormGroup() {
		return new FormGroup<GetItemInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConsistentRead: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListTablesOutput {
		TableNames?: Array<string>;
		LastEvaluatedTableName?: string;
	}
	export interface ListTablesOutputFormProperties {
		LastEvaluatedTableName: FormControl<string | null | undefined>,
	}
	export function CreateListTablesOutputFormGroup() {
		return new FormGroup<ListTablesOutputFormProperties>({
			LastEvaluatedTableName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTablesInput {
		ExclusiveStartTableName?: string;

		/**
		 * A number of maximum table names to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit?: number | null;
	}
	export interface ListTablesInputFormProperties {
		ExclusiveStartTableName: FormControl<string | null | undefined>,

		/**
		 * A number of maximum table names to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListTablesInputFormGroup() {
		return new FormGroup<ListTablesInputFormProperties>({
			ExclusiveStartTableName: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface PutItemOutput {
		Attributes?: AttributeMap;

		/** The number of Capacity Units of the provisioned throughput of the table consumed during the operation. <code>GetItem</code>, <code>BatchGetItem</code>, <code>BatchWriteItem</code>, <code>Query</code>, and <code>Scan</code> operations consume <code>ReadCapacityUnits</code>, while <code>PutItem</code>, <code>UpdateItem</code>, and <code>DeleteItem</code> operations consume <code>WriteCapacityUnits</code>. */
		ConsumedCapacityUnits?: number | null;
	}
	export interface PutItemOutputFormProperties {

		/** The number of Capacity Units of the provisioned throughput of the table consumed during the operation. <code>GetItem</code>, <code>BatchGetItem</code>, <code>BatchWriteItem</code>, <code>Query</code>, and <code>Scan</code> operations consume <code>ReadCapacityUnits</code>, while <code>PutItem</code>, <code>UpdateItem</code>, and <code>DeleteItem</code> operations consume <code>WriteCapacityUnits</code>. */
		ConsumedCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreatePutItemOutputFormGroup() {
		return new FormGroup<PutItemOutputFormProperties>({
			ConsumedCapacityUnits: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutItemInput {

		/** Required */
		TableName: string;

		/**
		 * A map of the attributes for the item, and must include the primary key values that define the item. Other attribute name-value pairs can be provided for the item.
		 * Required
		 */
		Item: PutItemInputAttributeMap;

		/** Designates an attribute for a conditional modification. The <code>Expected</code> parameter allows you to provide an attribute name, and whether or not Amazon DynamoDB should check to see if the attribute has a particular value before modifying it. */
		Expected?: ExpectedAttributeMap;

		/** <p>Use this parameter if you want to get the attribute name-value pairs before or after they are modified. For <code>PUT</code> operations, the possible parameter values are <code>NONE</code> (default) or <code>ALL_OLD</code>. For update operations, the possible parameter values are <code>NONE</code> (default) or <code>ALL_OLD</code>, <code>UPDATED_OLD</code>, <code>ALL_NEW</code> or <code>UPDATED_NEW</code>.</p> <ul> <li><code>NONE</code>: Nothing is returned.</li> <li><code>ALL_OLD</code>: Returns the attributes of the item as they were before the operation.</li> <li><code>UPDATED_OLD</code>: Returns the values of the updated attributes, only, as they were before the operation.</li> <li><code>ALL_NEW</code>: Returns all the attributes and their new values after the operation.</li> <li><code>UPDATED_NEW</code>: Returns the values of the updated attributes, only, as they are after the operation.</li> </ul> */
		ReturnValues?: DeleteItemInputReturnValues | null;
	}
	export interface PutItemInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,

		/** <p>Use this parameter if you want to get the attribute name-value pairs before or after they are modified. For <code>PUT</code> operations, the possible parameter values are <code>NONE</code> (default) or <code>ALL_OLD</code>. For update operations, the possible parameter values are <code>NONE</code> (default) or <code>ALL_OLD</code>, <code>UPDATED_OLD</code>, <code>ALL_NEW</code> or <code>UPDATED_NEW</code>.</p> <ul> <li><code>NONE</code>: Nothing is returned.</li> <li><code>ALL_OLD</code>: Returns the attributes of the item as they were before the operation.</li> <li><code>UPDATED_OLD</code>: Returns the values of the updated attributes, only, as they were before the operation.</li> <li><code>ALL_NEW</code>: Returns all the attributes and their new values after the operation.</li> <li><code>UPDATED_NEW</code>: Returns the values of the updated attributes, only, as they are after the operation.</li> </ul> */
		ReturnValues: FormControl<DeleteItemInputReturnValues | null | undefined>,
	}
	export function CreatePutItemInputFormGroup() {
		return new FormGroup<PutItemInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReturnValues: new FormControl<DeleteItemInputReturnValues | null | undefined>(undefined),
		});

	}


	/** A map of the attributes for the item, and must include the primary key values that define the item. Other attribute name-value pairs can be provided for the item. */
	export interface PutItemInputAttributeMap {
	}

	/** A map of the attributes for the item, and must include the primary key values that define the item. Other attribute name-value pairs can be provided for the item. */
	export interface PutItemInputAttributeMapFormProperties {
	}
	export function CreatePutItemInputAttributeMapFormGroup() {
		return new FormGroup<PutItemInputAttributeMapFormProperties>({
		});

	}

	export interface QueryOutput {
		Items?: Array<AttributeMap>;
		Count?: number | null;
		LastEvaluatedKey?: Key;

		/** The number of Capacity Units of the provisioned throughput of the table consumed during the operation. <code>GetItem</code>, <code>BatchGetItem</code>, <code>BatchWriteItem</code>, <code>Query</code>, and <code>Scan</code> operations consume <code>ReadCapacityUnits</code>, while <code>PutItem</code>, <code>UpdateItem</code>, and <code>DeleteItem</code> operations consume <code>WriteCapacityUnits</code>. */
		ConsumedCapacityUnits?: number | null;
	}
	export interface QueryOutputFormProperties {
		Count: FormControl<number | null | undefined>,

		/** The number of Capacity Units of the provisioned throughput of the table consumed during the operation. <code>GetItem</code>, <code>BatchGetItem</code>, <code>BatchWriteItem</code>, <code>Query</code>, and <code>Scan</code> operations consume <code>ReadCapacityUnits</code>, while <code>PutItem</code>, <code>UpdateItem</code>, and <code>DeleteItem</code> operations consume <code>WriteCapacityUnits</code>. */
		ConsumedCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateQueryOutputFormGroup() {
		return new FormGroup<QueryOutputFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			ConsumedCapacityUnits: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface QueryInput {

		/** Required */
		TableName: string;

		/**
		 * List of <code>Attribute</code> names. If attribute names are not specified then all attributes will be returned. If some attributes are not found, they will not appear in the result.
		 * Minimum items: 1
		 */
		AttributesToGet?: Array<string>;
		Limit?: number | null;

		/** If set to <code>true</code>, then a consistent read is issued. Otherwise eventually-consistent is used. */
		ConsistentRead?: boolean | null;
		Count?: boolean | null;

		/** Required */
		HashKeyValue: AttributeValue;
		RangeKeyCondition?: Condition;
		ScanIndexForward?: boolean | null;
		ExclusiveStartKey?: Key;
	}
	export interface QueryInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,

		/** If set to <code>true</code>, then a consistent read is issued. Otherwise eventually-consistent is used. */
		ConsistentRead: FormControl<boolean | null | undefined>,
		Count: FormControl<boolean | null | undefined>,
		ScanIndexForward: FormControl<boolean | null | undefined>,
	}
	export function CreateQueryInputFormGroup() {
		return new FormGroup<QueryInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			ConsistentRead: new FormControl<boolean | null | undefined>(undefined),
			Count: new FormControl<boolean | null | undefined>(undefined),
			ScanIndexForward: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Condition {

		/** A list of attribute values to be used with a comparison operator for a scan or query operation. For comparisons that require more than one value, such as a <code>BETWEEN</code> comparison, the AttributeValueList contains two attribute values and the comparison operator. */
		AttributeValueList?: Array<AttributeValue>;

		/**
		 * <p>A comparison operator is an enumeration of several operations:</p> <ul> <li><code>EQ</code> for <em>equal</em>.</li> <li><code>NE</code> for <em>not equal</em>.</li> <li><code>IN</code> checks for exact matches.</li> <li><code>LE</code> for <em>less than or equal to</em>.</li> <li><code>LT</code> for <em>less than</em>.</li> <li><code>GE</code> for <em>greater than or equal to</em>.</li> <li><code>GT</code> for <em>greater than</em>.</li> <li><code>BETWEEN</code> for <em>between</em>.</li> <li><code>NOT_NULL</code> for <em>exists</em>.</li> <li><code>NULL</code> for <em>not exists</em>.</li> <li><code>CONTAINS</code> for substring or value in a set.</li> <li><code>NOT_CONTAINS</code> for absence of a substring or absence of a value in a set.</li> <li><code>BEGINS_WITH</code> for a substring prefix.</li> </ul> <p>Scan operations support all available comparison operators.</p> <p>Query operations support a subset of the available comparison operators: EQ, LE, LT, GE, GT, BETWEEN, and BEGINS_WITH.</p>
		 * Required
		 */
		ComparisonOperator: ConditionComparisonOperator;
	}
	export interface ConditionFormProperties {

		/**
		 * <p>A comparison operator is an enumeration of several operations:</p> <ul> <li><code>EQ</code> for <em>equal</em>.</li> <li><code>NE</code> for <em>not equal</em>.</li> <li><code>IN</code> checks for exact matches.</li> <li><code>LE</code> for <em>less than or equal to</em>.</li> <li><code>LT</code> for <em>less than</em>.</li> <li><code>GE</code> for <em>greater than or equal to</em>.</li> <li><code>GT</code> for <em>greater than</em>.</li> <li><code>BETWEEN</code> for <em>between</em>.</li> <li><code>NOT_NULL</code> for <em>exists</em>.</li> <li><code>NULL</code> for <em>not exists</em>.</li> <li><code>CONTAINS</code> for substring or value in a set.</li> <li><code>NOT_CONTAINS</code> for absence of a substring or absence of a value in a set.</li> <li><code>BEGINS_WITH</code> for a substring prefix.</li> </ul> <p>Scan operations support all available comparison operators.</p> <p>Query operations support a subset of the available comparison operators: EQ, LE, LT, GE, GT, BETWEEN, and BEGINS_WITH.</p>
		 * Required
		 */
		ComparisonOperator: FormControl<ConditionComparisonOperator | null | undefined>,
	}
	export function CreateConditionFormGroup() {
		return new FormGroup<ConditionFormProperties>({
			ComparisonOperator: new FormControl<ConditionComparisonOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConditionComparisonOperator { EQ = 0, NE = 1, IN = 2, LE = 3, LT = 4, GE = 5, GT = 6, BETWEEN = 7, NOT_NULL = 8, NULL = 9, CONTAINS = 10, NOT_CONTAINS = 11, BEGINS_WITH = 12 }

	export interface ScanOutput {
		Items?: Array<AttributeMap>;
		Count?: number | null;
		ScannedCount?: number | null;
		LastEvaluatedKey?: Key;

		/** The number of Capacity Units of the provisioned throughput of the table consumed during the operation. <code>GetItem</code>, <code>BatchGetItem</code>, <code>BatchWriteItem</code>, <code>Query</code>, and <code>Scan</code> operations consume <code>ReadCapacityUnits</code>, while <code>PutItem</code>, <code>UpdateItem</code>, and <code>DeleteItem</code> operations consume <code>WriteCapacityUnits</code>. */
		ConsumedCapacityUnits?: number | null;
	}
	export interface ScanOutputFormProperties {
		Count: FormControl<number | null | undefined>,
		ScannedCount: FormControl<number | null | undefined>,

		/** The number of Capacity Units of the provisioned throughput of the table consumed during the operation. <code>GetItem</code>, <code>BatchGetItem</code>, <code>BatchWriteItem</code>, <code>Query</code>, and <code>Scan</code> operations consume <code>ReadCapacityUnits</code>, while <code>PutItem</code>, <code>UpdateItem</code>, and <code>DeleteItem</code> operations consume <code>WriteCapacityUnits</code>. */
		ConsumedCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateScanOutputFormGroup() {
		return new FormGroup<ScanOutputFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			ScannedCount: new FormControl<number | null | undefined>(undefined),
			ConsumedCapacityUnits: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScanInput {

		/** Required */
		TableName: string;

		/**
		 * List of <code>Attribute</code> names. If attribute names are not specified then all attributes will be returned. If some attributes are not found, they will not appear in the result.
		 * Minimum items: 1
		 */
		AttributesToGet?: Array<string>;
		Limit?: number | null;
		Count?: boolean | null;
		ScanFilter?: FilterConditionMap;
		ExclusiveStartKey?: Key;
	}
	export interface ScanInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		Count: FormControl<boolean | null | undefined>,
	}
	export function CreateScanInputFormGroup() {
		return new FormGroup<ScanInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			Count: new FormControl<boolean | null | undefined>(undefined),
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

	export interface UpdateItemOutput {
		Attributes?: AttributeMap;

		/** The number of Capacity Units of the provisioned throughput of the table consumed during the operation. <code>GetItem</code>, <code>BatchGetItem</code>, <code>BatchWriteItem</code>, <code>Query</code>, and <code>Scan</code> operations consume <code>ReadCapacityUnits</code>, while <code>PutItem</code>, <code>UpdateItem</code>, and <code>DeleteItem</code> operations consume <code>WriteCapacityUnits</code>. */
		ConsumedCapacityUnits?: number | null;
	}
	export interface UpdateItemOutputFormProperties {

		/** The number of Capacity Units of the provisioned throughput of the table consumed during the operation. <code>GetItem</code>, <code>BatchGetItem</code>, <code>BatchWriteItem</code>, <code>Query</code>, and <code>Scan</code> operations consume <code>ReadCapacityUnits</code>, while <code>PutItem</code>, <code>UpdateItem</code>, and <code>DeleteItem</code> operations consume <code>WriteCapacityUnits</code>. */
		ConsumedCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateUpdateItemOutputFormGroup() {
		return new FormGroup<UpdateItemOutputFormProperties>({
			ConsumedCapacityUnits: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateItemInput {

		/** Required */
		TableName: string;

		/**
		 * The primary key that uniquely identifies each item in a table. A primary key can be a one attribute (hash) primary key or a two attribute (hash-and-range) primary key.
		 * Required
		 */
		Key: Key;

		/**
		 * Map of attribute name to the new value and action for the update. The attribute names specify the attributes to modify, and cannot contain any primary key attributes.
		 * Required
		 */
		AttributeUpdates: AttributeUpdates;

		/** Designates an attribute for a conditional modification. The <code>Expected</code> parameter allows you to provide an attribute name, and whether or not Amazon DynamoDB should check to see if the attribute has a particular value before modifying it. */
		Expected?: ExpectedAttributeMap;

		/** <p>Use this parameter if you want to get the attribute name-value pairs before or after they are modified. For <code>PUT</code> operations, the possible parameter values are <code>NONE</code> (default) or <code>ALL_OLD</code>. For update operations, the possible parameter values are <code>NONE</code> (default) or <code>ALL_OLD</code>, <code>UPDATED_OLD</code>, <code>ALL_NEW</code> or <code>UPDATED_NEW</code>.</p> <ul> <li><code>NONE</code>: Nothing is returned.</li> <li><code>ALL_OLD</code>: Returns the attributes of the item as they were before the operation.</li> <li><code>UPDATED_OLD</code>: Returns the values of the updated attributes, only, as they were before the operation.</li> <li><code>ALL_NEW</code>: Returns all the attributes and their new values after the operation.</li> <li><code>UPDATED_NEW</code>: Returns the values of the updated attributes, only, as they are after the operation.</li> </ul> */
		ReturnValues?: DeleteItemInputReturnValues | null;
	}
	export interface UpdateItemInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,

		/** <p>Use this parameter if you want to get the attribute name-value pairs before or after they are modified. For <code>PUT</code> operations, the possible parameter values are <code>NONE</code> (default) or <code>ALL_OLD</code>. For update operations, the possible parameter values are <code>NONE</code> (default) or <code>ALL_OLD</code>, <code>UPDATED_OLD</code>, <code>ALL_NEW</code> or <code>UPDATED_NEW</code>.</p> <ul> <li><code>NONE</code>: Nothing is returned.</li> <li><code>ALL_OLD</code>: Returns the attributes of the item as they were before the operation.</li> <li><code>UPDATED_OLD</code>: Returns the values of the updated attributes, only, as they were before the operation.</li> <li><code>ALL_NEW</code>: Returns all the attributes and their new values after the operation.</li> <li><code>UPDATED_NEW</code>: Returns the values of the updated attributes, only, as they are after the operation.</li> </ul> */
		ReturnValues: FormControl<DeleteItemInputReturnValues | null | undefined>,
	}
	export function CreateUpdateItemInputFormGroup() {
		return new FormGroup<UpdateItemInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReturnValues: new FormControl<DeleteItemInputReturnValues | null | undefined>(undefined),
		});

	}


	/** Map of attribute name to the new value and action for the update. The attribute names specify the attributes to modify, and cannot contain any primary key attributes. */
	export interface AttributeUpdates {
	}

	/** Map of attribute name to the new value and action for the update. The attribute names specify the attributes to modify, and cannot contain any primary key attributes. */
	export interface AttributeUpdatesFormProperties {
	}
	export function CreateAttributeUpdatesFormGroup() {
		return new FormGroup<AttributeUpdatesFormProperties>({
		});

	}

	export interface UpdateTableOutput {
		TableDescription?: TableDescription;
	}
	export interface UpdateTableOutputFormProperties {
	}
	export function CreateUpdateTableOutputFormGroup() {
		return new FormGroup<UpdateTableOutputFormProperties>({
		});

	}

	export interface UpdateTableInput {

		/** Required */
		TableName: string;

		/**
		 * Provisioned throughput reserves the required read and write resources for your table in terms of <code>ReadCapacityUnits</code> and <code>WriteCapacityUnits</code>. Values for provisioned throughput depend upon your expected read/write rates, item size, and consistency. Provide the expected number of read and write operations, assuming an item size of 1k and strictly consistent reads. For 2k item size, double the value. For 3k, triple the value, etc. Eventually-consistent reads consume half the resources of strictly consistent reads.
		 * Required
		 */
		ProvisionedThroughput: ProvisionedThroughput;
	}
	export interface UpdateTableInputFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTableInputFormGroup() {
		return new FormGroup<UpdateTableInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The type of action for an item update operation. Only use the add action for numbers or sets; the specified value is added to the existing value. If a set of values is specified, the values are added to the existing set. Adds the specified attribute. If the attribute exists, it is replaced by the new value. If no value is specified, this removes the attribute and its value. If a set of values is specified, then the values in the specified set are removed from the old set. */
	export enum AttributeAction { ADD = 0, PUT = 1, DELETE = 2 }


	/** Specifies the attribute to update and how to perform the update. Possible values: <code>PUT</code> (default), <code>ADD</code> or <code>DELETE</code>. */
	export interface AttributeValueUpdate {

		/** AttributeValue can be <code>String</code>, <code>Number</code>, <code>Binary</code>, <code>StringSet</code>, <code>NumberSet</code>, <code>BinarySet</code>. */
		Value?: AttributeValue;

		/** The type of action for an item update operation. Only use the add action for numbers or sets; the specified value is added to the existing value. If a set of values is specified, the values are added to the existing set. Adds the specified attribute. If the attribute exists, it is replaced by the new value. If no value is specified, this removes the attribute and its value. If a set of values is specified, then the values in the specified set are removed from the old set. */
		Action?: AttributeAction | null;
	}

	/** Specifies the attribute to update and how to perform the update. Possible values: <code>PUT</code> (default), <code>ADD</code> or <code>DELETE</code>. */
	export interface AttributeValueUpdateFormProperties {

		/** The type of action for an item update operation. Only use the add action for numbers or sets; the specified value is added to the existing value. If a set of values is specified, the values are added to the existing set. Adds the specified attribute. If the attribute exists, it is replaced by the new value. If no value is specified, this removes the attribute and its value. If a set of values is specified, then the values in the specified set are removed from the old set. */
		Action: FormControl<AttributeAction | null | undefined>,
	}
	export function CreateAttributeValueUpdateFormGroup() {
		return new FormGroup<AttributeValueUpdateFormProperties>({
			Action: new FormControl<AttributeAction | null | undefined>(undefined),
		});

	}

	export interface KeysAndAttributes {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		Keys: Array<Key>;

		/**
		 * List of <code>Attribute</code> names. If attribute names are not specified then all attributes will be returned. If some attributes are not found, they will not appear in the result.
		 * Minimum items: 1
		 */
		AttributesToGet?: Array<string>;

		/** If set to <code>true</code>, then a consistent read is issued. Otherwise eventually-consistent is used. */
		ConsistentRead?: boolean | null;
	}
	export interface KeysAndAttributesFormProperties {

		/** If set to <code>true</code>, then a consistent read is issued. Otherwise eventually-consistent is used. */
		ConsistentRead: FormControl<boolean | null | undefined>,
	}
	export function CreateKeysAndAttributesFormGroup() {
		return new FormGroup<KeysAndAttributesFormProperties>({
			ConsistentRead: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The item attributes from a response in a specific table, along with the read resources consumed on the table during the request. */
	export interface BatchResponse {
		Items?: Array<AttributeMap>;

		/** The number of Capacity Units of the provisioned throughput of the table consumed during the operation. <code>GetItem</code>, <code>BatchGetItem</code>, <code>BatchWriteItem</code>, <code>Query</code>, and <code>Scan</code> operations consume <code>ReadCapacityUnits</code>, while <code>PutItem</code>, <code>UpdateItem</code>, and <code>DeleteItem</code> operations consume <code>WriteCapacityUnits</code>. */
		ConsumedCapacityUnits?: number | null;
	}

	/** The item attributes from a response in a specific table, along with the read resources consumed on the table during the request. */
	export interface BatchResponseFormProperties {

		/** The number of Capacity Units of the provisioned throughput of the table consumed during the operation. <code>GetItem</code>, <code>BatchGetItem</code>, <code>BatchWriteItem</code>, <code>Query</code>, and <code>Scan</code> operations consume <code>ReadCapacityUnits</code>, while <code>PutItem</code>, <code>UpdateItem</code>, and <code>DeleteItem</code> operations consume <code>WriteCapacityUnits</code>. */
		ConsumedCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateBatchResponseFormGroup() {
		return new FormGroup<BatchResponseFormProperties>({
			ConsumedCapacityUnits: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This structure is a Union of PutRequest and DeleteRequest. It can contain exactly one of <code>PutRequest</code> or <code>DeleteRequest</code>. Never Both. This is enforced in the code. */
	export interface WriteRequest {

		/** A container for a Put BatchWrite request */
		PutRequest?: PutRequest;

		/** A container for a Delete BatchWrite request */
		DeleteRequest?: DeleteRequest;
	}

	/** This structure is a Union of PutRequest and DeleteRequest. It can contain exactly one of <code>PutRequest</code> or <code>DeleteRequest</code>. Never Both. This is enforced in the code. */
	export interface WriteRequestFormProperties {
	}
	export function CreateWriteRequestFormGroup() {
		return new FormGroup<WriteRequestFormProperties>({
		});

	}


	/** A container for a Put BatchWrite request */
	export interface PutRequest {

		/** Required */
		Item: PutItemInputAttributeMap;
	}

	/** A container for a Put BatchWrite request */
	export interface PutRequestFormProperties {
	}
	export function CreatePutRequestFormGroup() {
		return new FormGroup<PutRequestFormProperties>({
		});

	}


	/** A container for a Delete BatchWrite request */
	export interface DeleteRequest {

		/** Required */
		Key: Key;
	}

	/** A container for a Delete BatchWrite request */
	export interface DeleteRequestFormProperties {
	}
	export function CreateDeleteRequestFormGroup() {
		return new FormGroup<DeleteRequestFormProperties>({
		});

	}

	export interface BatchWriteResponse {

		/** The number of Capacity Units of the provisioned throughput of the table consumed during the operation. <code>GetItem</code>, <code>BatchGetItem</code>, <code>BatchWriteItem</code>, <code>Query</code>, and <code>Scan</code> operations consume <code>ReadCapacityUnits</code>, while <code>PutItem</code>, <code>UpdateItem</code>, and <code>DeleteItem</code> operations consume <code>WriteCapacityUnits</code>. */
		ConsumedCapacityUnits?: number | null;
	}
	export interface BatchWriteResponseFormProperties {

		/** The number of Capacity Units of the provisioned throughput of the table consumed during the operation. <code>GetItem</code>, <code>BatchGetItem</code>, <code>BatchWriteItem</code>, <code>Query</code>, and <code>Scan</code> operations consume <code>ReadCapacityUnits</code>, while <code>PutItem</code>, <code>UpdateItem</code>, and <code>DeleteItem</code> operations consume <code>WriteCapacityUnits</code>. */
		ConsumedCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateBatchWriteResponseFormGroup() {
		return new FormGroup<BatchWriteResponseFormProperties>({
			ConsumedCapacityUnits: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>A comparison operator is an enumeration of several operations:</p> <ul> <li><code>EQ</code> for <em>equal</em>.</li> <li><code>NE</code> for <em>not equal</em>.</li> <li><code>IN</code> checks for exact matches.</li> <li><code>LE</code> for <em>less than or equal to</em>.</li> <li><code>LT</code> for <em>less than</em>.</li> <li><code>GE</code> for <em>greater than or equal to</em>.</li> <li><code>GT</code> for <em>greater than</em>.</li> <li><code>BETWEEN</code> for <em>between</em>.</li> <li><code>NOT_NULL</code> for <em>exists</em>.</li> <li><code>NULL</code> for <em>not exists</em>.</li> <li><code>CONTAINS</code> for substring or value in a set.</li> <li><code>NOT_CONTAINS</code> for absence of a substring or absence of a value in a set.</li> <li><code>BEGINS_WITH</code> for a substring prefix.</li> </ul> <p>Scan operations support all available comparison operators.</p> <p>Query operations support a subset of the available comparison operators: EQ, LE, LT, GE, GT, BETWEEN, and BEGINS_WITH.</p> */
	export enum ComparisonOperator { EQ = 0, NE = 1, IN = 2, LE = 3, LT = 4, GE = 5, GT = 6, BETWEEN = 7, NOT_NULL = 8, NULL = 9, CONTAINS = 10, NOT_CONTAINS = 11, BEGINS_WITH = 12 }


	/** <p>Use this parameter if you want to get the attribute name-value pairs before or after they are modified. For <code>PUT</code> operations, the possible parameter values are <code>NONE</code> (default) or <code>ALL_OLD</code>. For update operations, the possible parameter values are <code>NONE</code> (default) or <code>ALL_OLD</code>, <code>UPDATED_OLD</code>, <code>ALL_NEW</code> or <code>UPDATED_NEW</code>.</p> <ul> <li><code>NONE</code>: Nothing is returned.</li> <li><code>ALL_OLD</code>: Returns the attributes of the item as they were before the operation.</li> <li><code>UPDATED_OLD</code>: Returns the values of the updated attributes, only, as they were before the operation.</li> <li><code>ALL_NEW</code>: Returns all the attributes and their new values after the operation.</li> <li><code>UPDATED_NEW</code>: Returns the values of the updated attributes, only, as they are after the operation.</li> </ul> */
	export enum ReturnValue { NONE = 0, ALL_OLD = 1, UPDATED_OLD = 2, ALL_NEW = 3, UPDATED_NEW = 4 }


	/** Allows you to provide an attribute name, and whether or not Amazon DynamoDB should check to see if the attribute value already exists; or if the attribute value exists and has a particular value before changing it. */
	export interface ExpectedAttributeValue {
		Value?: AttributeValue;
		Exists?: boolean | null;
	}

	/** Allows you to provide an attribute name, and whether or not Amazon DynamoDB should check to see if the attribute value already exists; or if the attribute value exists and has a particular value before changing it. */
	export interface ExpectedAttributeValueFormProperties {
		Exists: FormControl<boolean | null | undefined>,
	}
	export function CreateExpectedAttributeValueFormGroup() {
		return new FormGroup<ExpectedAttributeValueFormProperties>({
			Exists: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum TableStatus { CREATING = 0, UPDATING = 1, DELETING = 2, ACTIVE = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Retrieves the attributes for multiple items from multiple tables using their primary keys.</p> <p>The maximum number of item attributes that can be retrieved for a single operation is 100. Also, the number of items retrieved is constrained by a 1 MB the size limit. If the response size limit is exceeded or a partial result is returned due to an internal processing failure, Amazon DynamoDB returns an <code>UnprocessedKeys</code> value so you can retry the operation starting with the next item to get.</p> <p>Amazon DynamoDB automatically adjusts the number of items returned per page to enforce this limit. For example, even if you ask to retrieve 100 items, but each individual item is 50k in size, the system returns 20 items and an appropriate <code>UnprocessedKeys</code> value so you can get the next page of results. If necessary, your application needs its own logic to assemble the pages of results into one set.</p>
		 * Post #X-Amz-Target=DynamoDB_20111205.BatchGetItem
		 * @param {string} RequestItems Pagination token
		 * @return {BatchGetItemOutput} Success
		 */
		BatchGetItem(RequestItems: string | null | undefined, requestBody: BatchGetItemInput): Observable<BatchGetItemOutput> {
			return this.http.post<BatchGetItemOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20111205.BatchGetItem?RequestItems=' + (RequestItems == null ? '' : encodeURIComponent(RequestItems)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Allows to execute a batch of Put and/or Delete Requests for many tables in a single call. A total of 25 requests are allowed.</p> <p>There are no transaction guarantees provided by this API. It does not allow conditional puts nor does it support return values.</p>
		 * Post #X-Amz-Target=DynamoDB_20111205.BatchWriteItem
		 * @return {BatchWriteItemOutput} Success
		 */
		BatchWriteItem(requestBody: BatchWriteItemInput): Observable<BatchWriteItemOutput> {
			return this.http.post<BatchWriteItemOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20111205.BatchWriteItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds a new table to your account.</p> <p>The table name must be unique among those associated with the AWS Account issuing the request, and the AWS Region that receives the request (e.g. <code>us-east-1</code>).</p> <p>The <code>CreateTable</code> operation triggers an asynchronous workflow to begin creating the table. Amazon DynamoDB immediately returns the state of the table (<code>CREATING</code>) until the table is in the <code>ACTIVE</code> state. Once the table is in the <code>ACTIVE</code> state, you can perform data plane operations.</p>
		 * Post #X-Amz-Target=DynamoDB_20111205.CreateTable
		 * @return {CreateTableOutput} Success
		 */
		CreateTable(requestBody: CreateTableInput): Observable<CreateTableOutput> {
			return this.http.post<CreateTableOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20111205.CreateTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a single item in a table by primary key.</p> <p>You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p>
		 * Post #X-Amz-Target=DynamoDB_20111205.DeleteItem
		 * @return {DeleteItemOutput} Success
		 */
		DeleteItem(requestBody: DeleteItemInput): Observable<DeleteItemOutput> {
			return this.http.post<DeleteItemOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20111205.DeleteItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a table and all of its items.</p> <p>If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states then Amazon DynamoDB returns a <code>ResourceInUseException</code>. If the specified table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
		 * Post #X-Amz-Target=DynamoDB_20111205.DeleteTable
		 * @return {DeleteTableOutput} Success
		 */
		DeleteTable(requestBody: DeleteTableInput): Observable<DeleteTableOutput> {
			return this.http.post<DeleteTableOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20111205.DeleteTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves information about the table, including the current status of the table, the primary key schema and when the table was created.</p> <p>If the table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
		 * Post #X-Amz-Target=DynamoDB_20111205.DescribeTable
		 * @return {DescribeTableOutput} Success
		 */
		DescribeTable(requestBody: DescribeTableInput): Observable<DescribeTableOutput> {
			return this.http.post<DescribeTableOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20111205.DescribeTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a set of Attributes for an item that matches the primary key.</p> <p>The <code>GetItem</code> operation provides an eventually-consistent read by default. If eventually-consistent reads are not acceptable for your application, use <code>ConsistentRead</code>. Although this operation might take longer than a standard read, it always returns the last updated value.</p>
		 * Post #X-Amz-Target=DynamoDB_20111205.GetItem
		 * @return {GetItemOutput} Success
		 */
		GetItem(requestBody: GetItemInput): Observable<GetItemOutput> {
			return this.http.post<GetItemOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20111205.GetItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a paginated list of table names created by the AWS Account of the caller in the AWS Region (e.g. <code>us-east-1</code>).
		 * Post #X-Amz-Target=DynamoDB_20111205.ListTables
		 * @param {string} Limit Pagination limit
		 * @param {string} ExclusiveStartTableName Pagination token
		 * @return {ListTablesOutput} Success
		 */
		ListTables(Limit: string | null | undefined, ExclusiveStartTableName: string | null | undefined, requestBody: ListTablesInput): Observable<ListTablesOutput> {
			return this.http.post<ListTablesOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20111205.ListTables?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&ExclusiveStartTableName=' + (ExclusiveStartTableName == null ? '' : encodeURIComponent(ExclusiveStartTableName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new item, or replaces an old item with a new item (including all the attributes).</p> <p>If an item already exists in the specified table with the same primary key, the new item completely replaces the existing item. You can perform a conditional put (insert a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values.</p>
		 * Post #X-Amz-Target=DynamoDB_20111205.PutItem
		 * @return {PutItemOutput} Success
		 */
		PutItem(requestBody: PutItemInput): Observable<PutItemOutput> {
			return this.http.post<PutItemOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20111205.PutItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the values of one or more items and its attributes by primary key (composite primary key, only).</p> <p>Narrow the scope of the query using comparison operators on the <code>RangeKeyValue</code> of the composite key. Use the <code>ScanIndexForward</code> parameter to get results in forward or reverse order by range key.</p>
		 * Post #X-Amz-Target=DynamoDB_20111205.Query
		 * @param {string} Limit Pagination limit
		 * @param {string} ExclusiveStartKey Pagination token
		 * @return {QueryOutput} Success
		 */
		Query(Limit: string | null | undefined, ExclusiveStartKey: string | null | undefined, requestBody: QueryInput): Observable<QueryOutput> {
			return this.http.post<QueryOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20111205.Query?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&ExclusiveStartKey=' + (ExclusiveStartKey == null ? '' : encodeURIComponent(ExclusiveStartKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves one or more items and its attributes by performing a full scan of a table.</p> <p>Provide a <code>ScanFilter</code> to get more specific results.</p>
		 * Post #X-Amz-Target=DynamoDB_20111205.Scan
		 * @param {string} Limit Pagination limit
		 * @param {string} ExclusiveStartKey Pagination token
		 * @return {ScanOutput} Success
		 */
		Scan(Limit: string | null | undefined, ExclusiveStartKey: string | null | undefined, requestBody: ScanInput): Observable<ScanOutput> {
			return this.http.post<ScanOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20111205.Scan?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&ExclusiveStartKey=' + (ExclusiveStartKey == null ? '' : encodeURIComponent(ExclusiveStartKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Edits an existing item's attributes.</p> <p>You can perform a conditional update (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p>
		 * Post #X-Amz-Target=DynamoDB_20111205.UpdateItem
		 * @return {UpdateItemOutput} Success
		 */
		UpdateItem(requestBody: UpdateItemInput): Observable<UpdateItemOutput> {
			return this.http.post<UpdateItemOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20111205.UpdateItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the provisioned throughput for the given table.</p> <p>Setting the throughput for a table helps you manage performance and is part of the Provisioned Throughput feature of Amazon DynamoDB.</p>
		 * Post #X-Amz-Target=DynamoDB_20111205.UpdateTable
		 * @return {UpdateTableOutput} Success
		 */
		UpdateTable(requestBody: UpdateTableInput): Observable<UpdateTableOutput> {
			return this.http.post<UpdateTableOutput>(this.baseUri + '#X-Amz-Target=DynamoDB_20111205.UpdateTable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum BatchGetItemX_Amz_Target { 'DynamoDB_20111205.BatchGetItem' = 0 }

	export enum BatchWriteItemX_Amz_Target { 'DynamoDB_20111205.BatchWriteItem' = 0 }

	export enum CreateTableX_Amz_Target { 'DynamoDB_20111205.CreateTable' = 0 }

	export enum DeleteItemX_Amz_Target { 'DynamoDB_20111205.DeleteItem' = 0 }

	export enum DeleteTableX_Amz_Target { 'DynamoDB_20111205.DeleteTable' = 0 }

	export enum DescribeTableX_Amz_Target { 'DynamoDB_20111205.DescribeTable' = 0 }

	export enum GetItemX_Amz_Target { 'DynamoDB_20111205.GetItem' = 0 }

	export enum ListTablesX_Amz_Target { 'DynamoDB_20111205.ListTables' = 0 }

	export enum PutItemX_Amz_Target { 'DynamoDB_20111205.PutItem' = 0 }

	export enum QueryX_Amz_Target { 'DynamoDB_20111205.Query' = 0 }

	export enum ScanX_Amz_Target { 'DynamoDB_20111205.Scan' = 0 }

	export enum UpdateItemX_Amz_Target { 'DynamoDB_20111205.UpdateItem' = 0 }

	export enum UpdateTableX_Amz_Target { 'DynamoDB_20111205.UpdateTable' = 0 }

}

