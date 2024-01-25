import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents the output of a <code>DescribeStream</code> operation. */
	export interface DescribeStreamOutput {

		/** Represents all of the data describing a particular stream. */
		StreamDescription?: StreamDescription;
	}

	/** Represents the output of a <code>DescribeStream</code> operation. */
	export interface DescribeStreamOutputFormProperties {
	}
	export function CreateDescribeStreamOutputFormGroup() {
		return new FormGroup<DescribeStreamOutputFormProperties>({
		});

	}


	/** Represents all of the data describing a particular stream. */
	export interface StreamDescription {

		/**
		 * Max length: 1024
		 * Min length: 37
		 */
		StreamArn?: string | null;
		StreamLabel?: string | null;
		StreamStatus?: StreamDescriptionStreamStatus | null;
		StreamViewType?: StreamDescriptionStreamViewType | null;
		CreationRequestDateTime?: Date | null;

		/**
		 * Max length: 255
		 * Min length: 3
		 */
		TableName?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		KeySchema?: Array<KeySchemaElement>;
		Shards?: Array<Shard>;

		/**
		 * Max length: 65
		 * Min length: 28
		 */
		LastEvaluatedShardId?: string | null;
	}

	/** Represents all of the data describing a particular stream. */
	export interface StreamDescriptionFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 37
		 */
		StreamArn: FormControl<string | null | undefined>,
		StreamLabel: FormControl<string | null | undefined>,
		StreamStatus: FormControl<StreamDescriptionStreamStatus | null | undefined>,
		StreamViewType: FormControl<StreamDescriptionStreamViewType | null | undefined>,
		CreationRequestDateTime: FormControl<Date | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 3
		 */
		TableName: FormControl<string | null | undefined>,

		/**
		 * Max length: 65
		 * Min length: 28
		 */
		LastEvaluatedShardId: FormControl<string | null | undefined>,
	}
	export function CreateStreamDescriptionFormGroup() {
		return new FormGroup<StreamDescriptionFormProperties>({
			StreamArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(37), Validators.maxLength(1024)]),
			StreamLabel: new FormControl<string | null | undefined>(undefined),
			StreamStatus: new FormControl<StreamDescriptionStreamStatus | null | undefined>(undefined),
			StreamViewType: new FormControl<StreamDescriptionStreamViewType | null | undefined>(undefined),
			CreationRequestDateTime: new FormControl<Date | null | undefined>(undefined),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(255), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			LastEvaluatedShardId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(28), Validators.maxLength(65)]),
		});

	}

	export enum StreamDescriptionStreamStatus { ENABLING = 0, ENABLED = 1, DISABLING = 2, DISABLED = 3 }

	export enum StreamDescriptionStreamViewType { NEW_IMAGE = 0, OLD_IMAGE = 1, NEW_AND_OLD_IMAGES = 2, KEYS_ONLY = 3 }


	/** <p>Represents <i>a single element</i> of a key schema. A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index.</p> <p>A <code>KeySchemaElement</code> represents exactly one attribute of the primary key. For example, a simple primary key (partition key) would be represented by one <code>KeySchemaElement</code>. A composite primary key (partition key and sort key) would require one <code>KeySchemaElement</code> for the partition key, and another <code>KeySchemaElement</code> for the sort key.</p> <note> <p>The partition key of an item is also known as its <i>hash attribute</i>. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.</p> <p>The sort key of an item is also known as its <i>range attribute</i>. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.</p> </note> */
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

	/** <p>Represents <i>a single element</i> of a key schema. A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index.</p> <p>A <code>KeySchemaElement</code> represents exactly one attribute of the primary key. For example, a simple primary key (partition key) would be represented by one <code>KeySchemaElement</code>. A composite primary key (partition key and sort key) would require one <code>KeySchemaElement</code> for the partition key, and another <code>KeySchemaElement</code> for the sort key.</p> <note> <p>The partition key of an item is also known as its <i>hash attribute</i>. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.</p> <p>The sort key of an item is also known as its <i>range attribute</i>. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.</p> </note> */
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
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			KeyType: new FormControl<KeySchemaElementKeyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum KeySchemaElementKeyType { HASH = 0, RANGE = 1 }


	/** A uniquely identified group of stream records within a stream. */
	export interface Shard {

		/**
		 * Max length: 65
		 * Min length: 28
		 */
		ShardId?: string | null;

		/** The beginning and ending sequence numbers for the stream records contained within a shard. */
		SequenceNumberRange?: SequenceNumberRange;

		/**
		 * Max length: 65
		 * Min length: 28
		 */
		ParentShardId?: string | null;
	}

	/** A uniquely identified group of stream records within a stream. */
	export interface ShardFormProperties {

		/**
		 * Max length: 65
		 * Min length: 28
		 */
		ShardId: FormControl<string | null | undefined>,

		/**
		 * Max length: 65
		 * Min length: 28
		 */
		ParentShardId: FormControl<string | null | undefined>,
	}
	export function CreateShardFormGroup() {
		return new FormGroup<ShardFormProperties>({
			ShardId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(28), Validators.maxLength(65)]),
			ParentShardId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(28), Validators.maxLength(65)]),
		});

	}


	/** The beginning and ending sequence numbers for the stream records contained within a shard. */
	export interface SequenceNumberRange {

		/**
		 * Max length: 40
		 * Min length: 21
		 */
		StartingSequenceNumber?: string | null;

		/**
		 * Max length: 40
		 * Min length: 21
		 */
		EndingSequenceNumber?: string | null;
	}

	/** The beginning and ending sequence numbers for the stream records contained within a shard. */
	export interface SequenceNumberRangeFormProperties {

		/**
		 * Max length: 40
		 * Min length: 21
		 */
		StartingSequenceNumber: FormControl<string | null | undefined>,

		/**
		 * Max length: 40
		 * Min length: 21
		 */
		EndingSequenceNumber: FormControl<string | null | undefined>,
	}
	export function CreateSequenceNumberRangeFormGroup() {
		return new FormGroup<SequenceNumberRangeFormProperties>({
			StartingSequenceNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(21), Validators.maxLength(40)]),
			EndingSequenceNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(21), Validators.maxLength(40)]),
		});

	}


	/** Represents the input of a <code>DescribeStream</code> operation. */
	export interface DescribeStreamInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 37
		 */
		StreamArn: string;

		/** Minimum: 1 */
		Limit?: number | null;

		/**
		 * Max length: 65
		 * Min length: 28
		 */
		ExclusiveStartShardId?: string | null;
	}

	/** Represents the input of a <code>DescribeStream</code> operation. */
	export interface DescribeStreamInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 37
		 */
		StreamArn: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		Limit: FormControl<number | null | undefined>,

		/**
		 * Max length: 65
		 * Min length: 28
		 */
		ExclusiveStartShardId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStreamInputFormGroup() {
		return new FormGroup<DescribeStreamInputFormProperties>({
			StreamArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(37), Validators.maxLength(1024)]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			ExclusiveStartShardId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(28), Validators.maxLength(65)]),
		});

	}


	/** The operation tried to access a nonexistent stream. */
	export interface ResourceNotFoundException {
		message?: string | null;
	}

	/** The operation tried to access a nonexistent stream. */
	export interface ResourceNotFoundExceptionFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error occurred on the server side. */
	export interface InternalServerError {
		message?: string | null;
	}

	/** An error occurred on the server side. */
	export interface InternalServerErrorFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateInternalServerErrorFormGroup() {
		return new FormGroup<InternalServerErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>GetRecords</code> operation. */
	export interface GetRecordsOutput {
		Records?: Array<Record>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextShardIterator?: string | null;
	}

	/** Represents the output of a <code>GetRecords</code> operation. */
	export interface GetRecordsOutputFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextShardIterator: FormControl<string | null | undefined>,
	}
	export function CreateGetRecordsOutputFormGroup() {
		return new FormGroup<GetRecordsOutputFormProperties>({
			NextShardIterator: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}


	/** A description of a unique event within a stream. */
	export interface Record {
		eventID?: string | null;
		eventName?: RecordEventName | null;
		eventVersion?: string | null;
		eventSource?: string | null;
		awsRegion?: string | null;

		/** A description of a single data modification that was performed on an item in a DynamoDB table. */
		dynamodb?: StreamRecord;

		/** Contains details about the type of identity that made the request. */
		userIdentity?: Identity;
	}

	/** A description of a unique event within a stream. */
	export interface RecordFormProperties {
		eventID: FormControl<string | null | undefined>,
		eventName: FormControl<RecordEventName | null | undefined>,
		eventVersion: FormControl<string | null | undefined>,
		eventSource: FormControl<string | null | undefined>,
		awsRegion: FormControl<string | null | undefined>,
	}
	export function CreateRecordFormGroup() {
		return new FormGroup<RecordFormProperties>({
			eventID: new FormControl<string | null | undefined>(undefined),
			eventName: new FormControl<RecordEventName | null | undefined>(undefined),
			eventVersion: new FormControl<string | null | undefined>(undefined),
			eventSource: new FormControl<string | null | undefined>(undefined),
			awsRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RecordEventName { INSERT = 0, MODIFY = 1, REMOVE = 2 }


	/** A description of a single data modification that was performed on an item in a DynamoDB table. */
	export interface StreamRecord {
		ApproximateCreationDateTime?: Date | null;
		Keys?: AttributeMap;
		NewImage?: AttributeMap;
		OldImage?: AttributeMap;

		/**
		 * Max length: 40
		 * Min length: 21
		 */
		SequenceNumber?: string | null;

		/** Minimum: 1 */
		SizeBytes?: number | null;
		StreamViewType?: StreamDescriptionStreamViewType | null;
	}

	/** A description of a single data modification that was performed on an item in a DynamoDB table. */
	export interface StreamRecordFormProperties {
		ApproximateCreationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Max length: 40
		 * Min length: 21
		 */
		SequenceNumber: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		SizeBytes: FormControl<number | null | undefined>,
		StreamViewType: FormControl<StreamDescriptionStreamViewType | null | undefined>,
	}
	export function CreateStreamRecordFormGroup() {
		return new FormGroup<StreamRecordFormProperties>({
			ApproximateCreationDateTime: new FormControl<Date | null | undefined>(undefined),
			SequenceNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(21), Validators.maxLength(40)]),
			SizeBytes: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			StreamViewType: new FormControl<StreamDescriptionStreamViewType | null | undefined>(undefined),
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


	/** Contains details about the type of identity that made the request. */
	export interface Identity {
		PrincipalId?: string | null;
		Type?: string | null;
	}

	/** Contains details about the type of identity that made the request. */
	export interface IdentityFormProperties {
		PrincipalId: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateIdentityFormGroup() {
		return new FormGroup<IdentityFormProperties>({
			PrincipalId: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>GetRecords</code> operation. */
	export interface GetRecordsInput {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ShardIterator: string;

		/** Minimum: 1 */
		Limit?: number | null;
	}

	/** Represents the input of a <code>GetRecords</code> operation. */
	export interface GetRecordsInputFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ShardIterator: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateGetRecordsInputFormGroup() {
		return new FormGroup<GetRecordsInputFormProperties>({
			ShardIterator: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests and use exponential backoff. For more information, go to <a href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#APIRetries">Error Retries and Exponential Backoff</a> in the <i>Amazon DynamoDB Developer Guide</i>. */
	export interface LimitExceededException {
		message?: string | null;
	}

	/** Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests and use exponential backoff. For more information, go to <a href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#APIRetries">Error Retries and Exponential Backoff</a> in the <i>Amazon DynamoDB Developer Guide</i>. */
	export interface LimitExceededExceptionFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The shard iterator has expired and can no longer be used to retrieve stream records. A shard iterator expires 15 minutes after it is retrieved using the <code>GetShardIterator</code> action. */
	export interface ExpiredIteratorException {
		message?: string | null;
	}

	/** The shard iterator has expired and can no longer be used to retrieve stream records. A shard iterator expires 15 minutes after it is retrieved using the <code>GetShardIterator</code> action. */
	export interface ExpiredIteratorExceptionFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateExpiredIteratorExceptionFormGroup() {
		return new FormGroup<ExpiredIteratorExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The operation attempted to read past the oldest stream record in a shard.</p> <p>In DynamoDB Streams, there is a 24 hour limit on data retention. Stream records whose age exceeds this limit are subject to removal (trimming) from the stream. You might receive a TrimmedDataAccessException if:</p> <ul> <li><p>You request a shard iterator with a sequence number older than the trim point (24 hours).</p> </li> <li><p>You obtain a shard iterator, but before you use the iterator in a <code>GetRecords</code> request, a stream record in the shard exceeds the 24 hour period and is trimmed. This causes the iterator to access a record that no longer exists.</p> </li> </ul> */
	export interface TrimmedDataAccessException {
		message?: string | null;
	}

	/** <p>The operation attempted to read past the oldest stream record in a shard.</p> <p>In DynamoDB Streams, there is a 24 hour limit on data retention. Stream records whose age exceeds this limit are subject to removal (trimming) from the stream. You might receive a TrimmedDataAccessException if:</p> <ul> <li><p>You request a shard iterator with a sequence number older than the trim point (24 hours).</p> </li> <li><p>You obtain a shard iterator, but before you use the iterator in a <code>GetRecords</code> request, a stream record in the shard exceeds the 24 hour period and is trimmed. This causes the iterator to access a record that no longer exists.</p> </li> </ul> */
	export interface TrimmedDataAccessExceptionFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateTrimmedDataAccessExceptionFormGroup() {
		return new FormGroup<TrimmedDataAccessExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>GetShardIterator</code> operation. */
	export interface GetShardIteratorOutput {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ShardIterator?: string | null;
	}

	/** Represents the output of a <code>GetShardIterator</code> operation. */
	export interface GetShardIteratorOutputFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		ShardIterator: FormControl<string | null | undefined>,
	}
	export function CreateGetShardIteratorOutputFormGroup() {
		return new FormGroup<GetShardIteratorOutputFormProperties>({
			ShardIterator: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}


	/** Represents the input of a <code>GetShardIterator</code> operation. */
	export interface GetShardIteratorInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 37
		 */
		StreamArn: string;

		/**
		 * Required
		 * Max length: 65
		 * Min length: 28
		 */
		ShardId: string;

		/** Required */
		ShardIteratorType: GetShardIteratorInputShardIteratorType;

		/**
		 * Max length: 40
		 * Min length: 21
		 */
		SequenceNumber?: string | null;
	}

	/** Represents the input of a <code>GetShardIterator</code> operation. */
	export interface GetShardIteratorInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 37
		 */
		StreamArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 65
		 * Min length: 28
		 */
		ShardId: FormControl<string | null | undefined>,

		/** Required */
		ShardIteratorType: FormControl<GetShardIteratorInputShardIteratorType | null | undefined>,

		/**
		 * Max length: 40
		 * Min length: 21
		 */
		SequenceNumber: FormControl<string | null | undefined>,
	}
	export function CreateGetShardIteratorInputFormGroup() {
		return new FormGroup<GetShardIteratorInputFormProperties>({
			StreamArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(37), Validators.maxLength(1024)]),
			ShardId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(28), Validators.maxLength(65)]),
			ShardIteratorType: new FormControl<GetShardIteratorInputShardIteratorType | null | undefined>(undefined, [Validators.required]),
			SequenceNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(21), Validators.maxLength(40)]),
		});

	}

	export enum GetShardIteratorInputShardIteratorType { TRIM_HORIZON = 0, LATEST = 1, AT_SEQUENCE_NUMBER = 2, AFTER_SEQUENCE_NUMBER = 3 }


	/** Represents the output of a <code>ListStreams</code> operation. */
	export interface ListStreamsOutput {
		Streams?: Array<Stream>;

		/**
		 * Max length: 1024
		 * Min length: 37
		 */
		LastEvaluatedStreamArn?: string | null;
	}

	/** Represents the output of a <code>ListStreams</code> operation. */
	export interface ListStreamsOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 37
		 */
		LastEvaluatedStreamArn: FormControl<string | null | undefined>,
	}
	export function CreateListStreamsOutputFormGroup() {
		return new FormGroup<ListStreamsOutputFormProperties>({
			LastEvaluatedStreamArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(37), Validators.maxLength(1024)]),
		});

	}


	/** Represents all of the data describing a particular stream. */
	export interface Stream {

		/**
		 * Max length: 1024
		 * Min length: 37
		 */
		StreamArn?: string | null;

		/**
		 * Max length: 255
		 * Min length: 3
		 */
		TableName?: string | null;
		StreamLabel?: string | null;
	}

	/** Represents all of the data describing a particular stream. */
	export interface StreamFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 37
		 */
		StreamArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 3
		 */
		TableName: FormControl<string | null | undefined>,
		StreamLabel: FormControl<string | null | undefined>,
	}
	export function CreateStreamFormGroup() {
		return new FormGroup<StreamFormProperties>({
			StreamArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(37), Validators.maxLength(1024)]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(255), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			StreamLabel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>ListStreams</code> operation. */
	export interface ListStreamsInput {

		/**
		 * Max length: 255
		 * Min length: 3
		 */
		TableName?: string | null;

		/** Minimum: 1 */
		Limit?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 37
		 */
		ExclusiveStartStreamArn?: string | null;
	}

	/** Represents the input of a <code>ListStreams</code> operation. */
	export interface ListStreamsInputFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 */
		TableName: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		Limit: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 37
		 */
		ExclusiveStartStreamArn: FormControl<string | null | undefined>,
	}
	export function CreateListStreamsInputFormGroup() {
		return new FormGroup<ListStreamsInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(255), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			ExclusiveStartStreamArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(37), Validators.maxLength(1024)]),
		});

	}


	/** <p>Represents the data for an attribute. You can set one, and only one, of the elements.</p> <p>Each attribute in an item is a name-value pair. An attribute can be single-valued or multi-valued set. For example, a book item can have title and authors attributes. Each book has one title but can have many authors. The multi-valued attribute is a set; duplicate values are not allowed.</p> */
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

	/** <p>Represents the data for an attribute. You can set one, and only one, of the elements.</p> <p>Each attribute in an item is a name-value pair. An attribute can be single-valued or multi-valued set. For example, a book item can have title and authors attributes. Each book has one title but can have many authors. The multi-valued attribute is a set; duplicate values are not allowed.</p> */
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

	export enum ShardIteratorType { TRIM_HORIZON = 0, LATEST = 1, AT_SEQUENCE_NUMBER = 2, AFTER_SEQUENCE_NUMBER = 3 }

	export enum KeyType { HASH = 0, RANGE = 1 }

	export enum OperationType { INSERT = 0, MODIFY = 1, REMOVE = 2 }

	export enum StreamStatus { ENABLING = 0, ENABLED = 1, DISABLING = 2, DISABLED = 3 }

	export enum StreamViewType { NEW_IMAGE = 0, OLD_IMAGE = 1, NEW_AND_OLD_IMAGES = 2, KEYS_ONLY = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Returns information about a stream, including the current status of the stream, its Amazon Resource Name (ARN), the composition of its shards, and its corresponding DynamoDB table.</p> <note> <p>You can call <code>DescribeStream</code> at a maximum rate of 10 times per second.</p> </note> <p>Each shard in the stream has a <code>SequenceNumberRange</code> associated with it. If the <code>SequenceNumberRange</code> has a <code>StartingSequenceNumber</code> but no <code>EndingSequenceNumber</code>, then the shard is still open (able to receive more stream records). If both <code>StartingSequenceNumber</code> and <code>EndingSequenceNumber</code> are present, then that shard is closed and can no longer receive more data.</p>
		 * Post #X-Amz-Target=DynamoDBStreams_20120810.DescribeStream
		 * @return {DescribeStreamOutput} Success
		 */
		DescribeStream(requestBody: DescribeStreamInput): Observable<DescribeStreamOutput> {
			return this.http.post<DescribeStreamOutput>(this.baseUri + '#X-Amz-Target=DynamoDBStreams_20120810.DescribeStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the stream records from a given shard.</p> <p>Specify a shard iterator using the <code>ShardIterator</code> parameter. The shard iterator specifies the position in the shard from which you want to start reading stream records sequentially. If there are no stream records available in the portion of the shard that the iterator points to, <code>GetRecords</code> returns an empty list. Note that it might take multiple calls to get to a portion of the shard that contains stream records.</p> <note> <p> <code>GetRecords</code> can retrieve a maximum of 1 MB of data or 1000 stream records, whichever comes first.</p> </note>
		 * Post #X-Amz-Target=DynamoDBStreams_20120810.GetRecords
		 * @return {GetRecordsOutput} Success
		 */
		GetRecords(requestBody: GetRecordsInput): Observable<GetRecordsOutput> {
			return this.http.post<GetRecordsOutput>(this.baseUri + '#X-Amz-Target=DynamoDBStreams_20120810.GetRecords', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a shard iterator. A shard iterator provides information about how to retrieve the stream records from within a shard. Use the shard iterator in a subsequent <code>GetRecords</code> request to read the stream records from the shard.</p> <note> <p>A shard iterator expires 15 minutes after it is returned to the requester.</p> </note>
		 * Post #X-Amz-Target=DynamoDBStreams_20120810.GetShardIterator
		 * @return {GetShardIteratorOutput} Success
		 */
		GetShardIterator(requestBody: GetShardIteratorInput): Observable<GetShardIteratorOutput> {
			return this.http.post<GetShardIteratorOutput>(this.baseUri + '#X-Amz-Target=DynamoDBStreams_20120810.GetShardIterator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns an array of stream ARNs associated with the current account and endpoint. If the <code>TableName</code> parameter is present, then <code>ListStreams</code> will return only the streams ARNs for that table.</p> <note> <p>You can call <code>ListStreams</code> at a maximum rate of 5 times per second.</p> </note>
		 * Post #X-Amz-Target=DynamoDBStreams_20120810.ListStreams
		 * @return {ListStreamsOutput} Success
		 */
		ListStreams(requestBody: ListStreamsInput): Observable<ListStreamsOutput> {
			return this.http.post<ListStreamsOutput>(this.baseUri + '#X-Amz-Target=DynamoDBStreams_20120810.ListStreams', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum DescribeStreamX_Amz_Target { 'DynamoDBStreams_20120810.DescribeStream' = 0 }

	export enum GetRecordsX_Amz_Target { 'DynamoDBStreams_20120810.GetRecords' = 0 }

	export enum GetShardIteratorX_Amz_Target { 'DynamoDBStreams_20120810.GetShardIterator' = 0 }

	export enum ListStreamsX_Amz_Target { 'DynamoDBStreams_20120810.ListStreams' = 0 }

}

