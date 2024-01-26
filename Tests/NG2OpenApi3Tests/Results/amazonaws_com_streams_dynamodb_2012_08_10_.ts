import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents the output of a <code>DescribeStream</code> operation. */
	export interface DescribeStreamOutput {
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
		StreamArn?: string;
		StreamLabel?: string;
		StreamStatus?: StreamStatus;
		StreamViewType?: StreamViewType;
		CreationRequestDateTime?: Date;
		TableName?: string;
		KeySchema?: Array<KeySchemaElement>;
		Shards?: Array<Shard>;
		LastEvaluatedShardId?: string;
	}

	/** Represents all of the data describing a particular stream. */
	export interface StreamDescriptionFormProperties {
		StreamArn: FormControl<string | null | undefined>,
		StreamLabel: FormControl<string | null | undefined>,
		StreamStatus: FormControl<StreamStatus | null | undefined>,
		StreamViewType: FormControl<StreamViewType | null | undefined>,
		CreationRequestDateTime: FormControl<Date | null | undefined>,
		TableName: FormControl<string | null | undefined>,
		LastEvaluatedShardId: FormControl<string | null | undefined>,
	}
	export function CreateStreamDescriptionFormGroup() {
		return new FormGroup<StreamDescriptionFormProperties>({
			StreamArn: new FormControl<string | null | undefined>(undefined),
			StreamLabel: new FormControl<string | null | undefined>(undefined),
			StreamStatus: new FormControl<StreamStatus | null | undefined>(undefined),
			StreamViewType: new FormControl<StreamViewType | null | undefined>(undefined),
			CreationRequestDateTime: new FormControl<Date | null | undefined>(undefined),
			TableName: new FormControl<string | null | undefined>(undefined),
			LastEvaluatedShardId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StreamStatus { ENABLING = 0, ENABLED = 1, DISABLING = 2, DISABLED = 3 }

	export enum StreamViewType { NEW_IMAGE = 0, OLD_IMAGE = 1, NEW_AND_OLD_IMAGES = 2, KEYS_ONLY = 3 }


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


	/** A uniquely identified group of stream records within a stream. */
	export interface Shard {
		ShardId?: string;
		SequenceNumberRange?: SequenceNumberRange;
		ParentShardId?: string;
	}

	/** A uniquely identified group of stream records within a stream. */
	export interface ShardFormProperties {
		ShardId: FormControl<string | null | undefined>,
		ParentShardId: FormControl<string | null | undefined>,
	}
	export function CreateShardFormGroup() {
		return new FormGroup<ShardFormProperties>({
			ShardId: new FormControl<string | null | undefined>(undefined),
			ParentShardId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The beginning and ending sequence numbers for the stream records contained within a shard. */
	export interface SequenceNumberRange {
		StartingSequenceNumber?: string;
		EndingSequenceNumber?: string;
	}

	/** The beginning and ending sequence numbers for the stream records contained within a shard. */
	export interface SequenceNumberRangeFormProperties {
		StartingSequenceNumber: FormControl<string | null | undefined>,
		EndingSequenceNumber: FormControl<string | null | undefined>,
	}
	export function CreateSequenceNumberRangeFormGroup() {
		return new FormGroup<SequenceNumberRangeFormProperties>({
			StartingSequenceNumber: new FormControl<string | null | undefined>(undefined),
			EndingSequenceNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>DescribeStream</code> operation. */
	export interface DescribeStreamInput {

		/** Required */
		StreamArn: string;
		Limit?: number | null;
		ExclusiveStartShardId?: string;
	}

	/** Represents the input of a <code>DescribeStream</code> operation. */
	export interface DescribeStreamInputFormProperties {

		/** Required */
		StreamArn: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		ExclusiveStartShardId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStreamInputFormGroup() {
		return new FormGroup<DescribeStreamInputFormProperties>({
			StreamArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			ExclusiveStartShardId: new FormControl<string | null | undefined>(undefined),
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

	export interface InternalServerError {
	}
	export interface InternalServerErrorFormProperties {
	}
	export function CreateInternalServerErrorFormGroup() {
		return new FormGroup<InternalServerErrorFormProperties>({
		});

	}


	/** Represents the output of a <code>GetRecords</code> operation. */
	export interface GetRecordsOutput {
		Records?: Array<Record>;
		NextShardIterator?: string;
	}

	/** Represents the output of a <code>GetRecords</code> operation. */
	export interface GetRecordsOutputFormProperties {
		NextShardIterator: FormControl<string | null | undefined>,
	}
	export function CreateGetRecordsOutputFormGroup() {
		return new FormGroup<GetRecordsOutputFormProperties>({
			NextShardIterator: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A description of a unique event within a stream. */
	export interface Record {
		eventID?: string;
		eventName?: OperationType;
		eventVersion?: string;
		eventSource?: string;
		awsRegion?: string;
		dynamodb?: StreamRecord;
		userIdentity?: Identity;
	}

	/** A description of a unique event within a stream. */
	export interface RecordFormProperties {
		eventID: FormControl<string | null | undefined>,
		eventName: FormControl<OperationType | null | undefined>,
		eventVersion: FormControl<string | null | undefined>,
		eventSource: FormControl<string | null | undefined>,
		awsRegion: FormControl<string | null | undefined>,
	}
	export function CreateRecordFormGroup() {
		return new FormGroup<RecordFormProperties>({
			eventID: new FormControl<string | null | undefined>(undefined),
			eventName: new FormControl<OperationType | null | undefined>(undefined),
			eventVersion: new FormControl<string | null | undefined>(undefined),
			eventSource: new FormControl<string | null | undefined>(undefined),
			awsRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OperationType { INSERT = 0, MODIFY = 1, REMOVE = 2 }


	/** A description of a single data modification that was performed on an item in a DynamoDB table. */
	export interface StreamRecord {
		ApproximateCreationDateTime?: Date;
		Keys?: AttributeMap;
		NewImage?: AttributeMap;
		OldImage?: AttributeMap;
		SequenceNumber?: string;
		SizeBytes?: number | null;
		StreamViewType?: StreamViewType;
	}

	/** A description of a single data modification that was performed on an item in a DynamoDB table. */
	export interface StreamRecordFormProperties {
		ApproximateCreationDateTime: FormControl<Date | null | undefined>,
		SequenceNumber: FormControl<string | null | undefined>,
		SizeBytes: FormControl<number | null | undefined>,
		StreamViewType: FormControl<StreamViewType | null | undefined>,
	}
	export function CreateStreamRecordFormGroup() {
		return new FormGroup<StreamRecordFormProperties>({
			ApproximateCreationDateTime: new FormControl<Date | null | undefined>(undefined),
			SequenceNumber: new FormControl<string | null | undefined>(undefined),
			SizeBytes: new FormControl<number | null | undefined>(undefined),
			StreamViewType: new FormControl<StreamViewType | null | undefined>(undefined),
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
		PrincipalId?: string;
		Type?: string;
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

		/** Required */
		ShardIterator: string;
		Limit?: number | null;
	}

	/** Represents the input of a <code>GetRecords</code> operation. */
	export interface GetRecordsInputFormProperties {

		/** Required */
		ShardIterator: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateGetRecordsInputFormGroup() {
		return new FormGroup<GetRecordsInputFormProperties>({
			ShardIterator: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
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

	export interface ExpiredIteratorException {
	}
	export interface ExpiredIteratorExceptionFormProperties {
	}
	export function CreateExpiredIteratorExceptionFormGroup() {
		return new FormGroup<ExpiredIteratorExceptionFormProperties>({
		});

	}

	export interface TrimmedDataAccessException {
	}
	export interface TrimmedDataAccessExceptionFormProperties {
	}
	export function CreateTrimmedDataAccessExceptionFormGroup() {
		return new FormGroup<TrimmedDataAccessExceptionFormProperties>({
		});

	}


	/** Represents the output of a <code>GetShardIterator</code> operation. */
	export interface GetShardIteratorOutput {
		ShardIterator?: string;
	}

	/** Represents the output of a <code>GetShardIterator</code> operation. */
	export interface GetShardIteratorOutputFormProperties {
		ShardIterator: FormControl<string | null | undefined>,
	}
	export function CreateGetShardIteratorOutputFormGroup() {
		return new FormGroup<GetShardIteratorOutputFormProperties>({
			ShardIterator: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>GetShardIterator</code> operation. */
	export interface GetShardIteratorInput {

		/** Required */
		StreamArn: string;

		/** Required */
		ShardId: string;

		/** Required */
		ShardIteratorType: ShardIteratorType;
		SequenceNumber?: string;
	}

	/** Represents the input of a <code>GetShardIterator</code> operation. */
	export interface GetShardIteratorInputFormProperties {

		/** Required */
		StreamArn: FormControl<string | null | undefined>,

		/** Required */
		ShardId: FormControl<string | null | undefined>,

		/** Required */
		ShardIteratorType: FormControl<ShardIteratorType | null | undefined>,
		SequenceNumber: FormControl<string | null | undefined>,
	}
	export function CreateGetShardIteratorInputFormGroup() {
		return new FormGroup<GetShardIteratorInputFormProperties>({
			StreamArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ShardId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ShardIteratorType: new FormControl<ShardIteratorType | null | undefined>(undefined, [Validators.required]),
			SequenceNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ShardIteratorType { TRIM_HORIZON = 0, LATEST = 1, AT_SEQUENCE_NUMBER = 2, AFTER_SEQUENCE_NUMBER = 3 }


	/** Represents the output of a <code>ListStreams</code> operation. */
	export interface ListStreamsOutput {
		Streams?: Array<Stream>;
		LastEvaluatedStreamArn?: string;
	}

	/** Represents the output of a <code>ListStreams</code> operation. */
	export interface ListStreamsOutputFormProperties {
		LastEvaluatedStreamArn: FormControl<string | null | undefined>,
	}
	export function CreateListStreamsOutputFormGroup() {
		return new FormGroup<ListStreamsOutputFormProperties>({
			LastEvaluatedStreamArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents all of the data describing a particular stream. */
	export interface Stream {
		StreamArn?: string;
		TableName?: string;
		StreamLabel?: string;
	}

	/** Represents all of the data describing a particular stream. */
	export interface StreamFormProperties {
		StreamArn: FormControl<string | null | undefined>,
		TableName: FormControl<string | null | undefined>,
		StreamLabel: FormControl<string | null | undefined>,
	}
	export function CreateStreamFormGroup() {
		return new FormGroup<StreamFormProperties>({
			StreamArn: new FormControl<string | null | undefined>(undefined),
			TableName: new FormControl<string | null | undefined>(undefined),
			StreamLabel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>ListStreams</code> operation. */
	export interface ListStreamsInput {
		TableName?: string;
		Limit?: number | null;
		ExclusiveStartStreamArn?: string;
	}

	/** Represents the input of a <code>ListStreams</code> operation. */
	export interface ListStreamsInputFormProperties {
		TableName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		ExclusiveStartStreamArn: FormControl<string | null | undefined>,
	}
	export function CreateListStreamsInputFormGroup() {
		return new FormGroup<ListStreamsInputFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			ExclusiveStartStreamArn: new FormControl<string | null | undefined>(undefined),
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

