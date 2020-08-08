import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Represents the output of a <code>DescribeStream</code> operation. */
	export interface DescribeStreamOutput {

		/** Represents all of the data describing a particular stream. */
		StreamDescription?: StreamDescription;
	}


	/** Represents all of the data describing a particular stream. */
	export interface StreamDescription {
		StreamArn?: string;
		StreamLabel?: string;
		StreamStatus?: StreamDescriptionStreamStatus;
		StreamViewType?: StreamDescriptionStreamViewType;
		CreationRequestDateTime?: Date;
		TableName?: string;
		KeySchema?: Array<KeySchemaElement>;
		Shards?: Array<Shard>;
		LastEvaluatedShardId?: string;
	}

	export enum StreamDescriptionStreamStatus { ENABLING = 0, ENABLED = 1, DISABLING = 2, DISABLED = 3 }

	export enum StreamDescriptionStreamViewType { NEW_IMAGE = 0, OLD_IMAGE = 1, NEW_AND_OLD_IMAGES = 2, KEYS_ONLY = 3 }


	/** <p>Represents <i>a single element</i> of a key schema. A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index.</p> <p>A <code>KeySchemaElement</code> represents exactly one attribute of the primary key. For example, a simple primary key (partition key) would be represented by one <code>KeySchemaElement</code>. A composite primary key (partition key and sort key) would require one <code>KeySchemaElement</code> for the partition key, and another <code>KeySchemaElement</code> for the sort key.</p> <note> <p>The partition key of an item is also known as its <i>hash attribute</i>. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.</p> <p>The sort key of an item is also known as its <i>range attribute</i>. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.</p> </note> */
	export interface KeySchemaElement {
		AttributeName: string;
		KeyType: KeySchemaElementKeyType;
	}

	export enum KeySchemaElementKeyType { HASH = 0, RANGE = 1 }


	/** A uniquely identified group of stream records within a stream. */
	export interface Shard {
		ShardId?: string;

		/** The beginning and ending sequence numbers for the stream records contained within a shard. */
		SequenceNumberRange?: SequenceNumberRange;
		ParentShardId?: string;
	}


	/** The beginning and ending sequence numbers for the stream records contained within a shard. */
	export interface SequenceNumberRange {
		StartingSequenceNumber?: string;
		EndingSequenceNumber?: string;
	}


	/** Represents the input of a <code>DescribeStream</code> operation. */
	export interface DescribeStreamInput {
		StreamArn: string;
		Limit?: number;
		ExclusiveStartShardId?: string;
	}


	/** The operation tried to access a nonexistent stream. */
	export interface ResourceNotFoundException {
		message?: string;
	}


	/** An error occurred on the server side. */
	export interface InternalServerError {
		message?: string;
	}


	/** Represents the output of a <code>GetRecords</code> operation. */
	export interface GetRecordsOutput {
		Records?: Array<Record>;
		NextShardIterator?: string;
	}


	/** A description of a unique event within a stream. */
	export interface Record {
		eventID?: string;
		eventName?: RecordEventName;
		eventVersion?: string;
		eventSource?: string;
		awsRegion?: string;

		/** A description of a single data modification that was performed on an item in a DynamoDB table. */
		dynamodb?: StreamRecord;

		/** Contains details about the type of identity that made the request. */
		userIdentity?: Identity;
	}

	export enum RecordEventName { INSERT = 0, MODIFY = 1, REMOVE = 2 }


	/** A description of a single data modification that was performed on an item in a DynamoDB table. */
	export interface StreamRecord {
		ApproximateCreationDateTime?: Date;
		Keys?: AttributeMap;
		NewImage?: AttributeMap;
		OldImage?: AttributeMap;
		SequenceNumber?: string;
		SizeBytes?: number;
		StreamViewType?: StreamDescriptionStreamViewType;
	}

	export interface AttributeMap {
	}


	/** Contains details about the type of identity that made the request. */
	export interface Identity {
		PrincipalId?: string;
		Type?: string;
	}


	/** Represents the input of a <code>GetRecords</code> operation. */
	export interface GetRecordsInput {
		ShardIterator: string;
		Limit?: number;
	}


	/** Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests and use exponential backoff. For more information, go to <a href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#APIRetries">Error Retries and Exponential Backoff</a> in the <i>Amazon DynamoDB Developer Guide</i>. */
	export interface LimitExceededException {
		message?: string;
	}


	/** The shard iterator has expired and can no longer be used to retrieve stream records. A shard iterator expires 15 minutes after it is retrieved using the <code>GetShardIterator</code> action. */
	export interface ExpiredIteratorException {
		message?: string;
	}


	/** <p>The operation attempted to read past the oldest stream record in a shard.</p> <p>In DynamoDB Streams, there is a 24 hour limit on data retention. Stream records whose age exceeds this limit are subject to removal (trimming) from the stream. You might receive a TrimmedDataAccessException if:</p> <ul> <li><p>You request a shard iterator with a sequence number older than the trim point (24 hours).</p> </li> <li><p>You obtain a shard iterator, but before you use the iterator in a <code>GetRecords</code> request, a stream record in the shard exceeds the 24 hour period and is trimmed. This causes the iterator to access a record that no longer exists.</p> </li> </ul> */
	export interface TrimmedDataAccessException {
		message?: string;
	}


	/** Represents the output of a <code>GetShardIterator</code> operation. */
	export interface GetShardIteratorOutput {
		ShardIterator?: string;
	}


	/** Represents the input of a <code>GetShardIterator</code> operation. */
	export interface GetShardIteratorInput {
		StreamArn: string;
		ShardId: string;
		ShardIteratorType: GetShardIteratorInputShardIteratorType;
		SequenceNumber?: string;
	}

	export enum GetShardIteratorInputShardIteratorType { TRIM_HORIZON = 0, LATEST = 1, AT_SEQUENCE_NUMBER = 2, AFTER_SEQUENCE_NUMBER = 3 }


	/** Represents the output of a <code>ListStreams</code> operation. */
	export interface ListStreamsOutput {
		Streams?: Array<Stream>;
		LastEvaluatedStreamArn?: string;
	}


	/** Represents all of the data describing a particular stream. */
	export interface Stream {
		StreamArn?: string;
		TableName?: string;
		StreamLabel?: string;
	}


	/** Represents the input of a <code>ListStreams</code> operation. */
	export interface ListStreamsInput {
		TableName?: string;
		Limit?: number;
		ExclusiveStartStreamArn?: string;
	}


	/** <p>Represents the data for an attribute. You can set one, and only one, of the elements.</p> <p>Each attribute in an item is a name-value pair. An attribute can be single-valued or multi-valued set. For example, a book item can have title and authors attributes. Each book has one title but can have many authors. The multi-valued attribute is a set; duplicate values are not allowed.</p> */
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

	export enum DescribeStreamX_Amz_Target { DynamoDBStreams_20120810_DescribeStream = 0 }

	export enum GetRecordsX_Amz_Target { DynamoDBStreams_20120810_GetRecords = 0 }

	export enum GetShardIteratorX_Amz_Target { DynamoDBStreams_20120810_GetShardIterator = 0 }

	export enum ListStreamsX_Amz_Target { DynamoDBStreams_20120810_ListStreams = 0 }

}

