import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateSignalingChannelOutput {
		ChannelARN?: string | null;
	}


	/** A key and value pair that is associated with the specified signaling channel. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export interface InvalidArgumentException {
	}

	export interface ClientLimitExceededException {
	}

	export interface AccountChannelLimitExceededException {
	}

	export interface ResourceInUseException {
	}

	export interface AccessDeniedException {
	}

	export interface TagsPerResourceExceededLimitException {
	}

	export interface CreateStreamOutput {
		StreamARN?: string | null;
	}

	export interface AccountStreamLimitExceededException {
	}

	export interface DeviceStreamLimitExceededException {
	}

	export interface InvalidDeviceException {
	}

	export interface DeleteSignalingChannelOutput {
	}

	export interface ResourceNotFoundException {
	}

	export interface VersionMismatchException {
	}

	export interface DeleteStreamOutput {
	}

	export interface NotAuthorizedException {
	}

	export interface DescribeSignalingChannelOutput {

		/** A structure that encapsulates a signaling channel's metadata and properties. */
		ChannelInfo?: ChannelInfo | null;
	}


	/** A structure that encapsulates a signaling channel's metadata and properties. */
	export interface ChannelInfo {
		ChannelName?: string | null;
		ChannelARN?: string | null;
		ChannelType?: ChannelInfoChannelType | null;
		ChannelStatus?: ChannelInfoChannelStatus | null;
		CreationTime?: Date | null;

		/** A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type. */
		SingleMasterConfiguration?: SingleMasterConfiguration | null;
		Version?: string | null;
	}

	export enum ChannelInfoChannelType { SINGLE_MASTER = 0 }

	export enum ChannelInfoChannelStatus { CREATING = 0, ACTIVE = 1, UPDATING = 2, DELETING = 3 }


	/** A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type. */
	export interface SingleMasterConfiguration {
		MessageTtlSeconds?: number | null;
	}

	export interface DescribeStreamOutput {

		/** An object describing a Kinesis video stream. */
		StreamInfo?: StreamInfo | null;
	}


	/** An object describing a Kinesis video stream. */
	export interface StreamInfo {
		DeviceName?: string | null;
		StreamName?: string | null;
		StreamARN?: string | null;
		MediaType?: string | null;
		KmsKeyId?: string | null;
		Version?: string | null;
		Status?: ChannelInfoChannelStatus | null;
		CreationTime?: Date | null;
		DataRetentionInHours?: number | null;
	}

	export interface GetDataEndpointOutput {
		DataEndpoint?: string | null;
	}

	export interface GetSignalingChannelEndpointOutput {
		ResourceEndpointList?: Array<ResourceEndpointListItem> | null;
	}


	/** An object that describes the endpoint of the signaling channel returned by the <code>GetSignalingChannelEndpoint</code> API. */
	export interface ResourceEndpointListItem {
		Protocol?: ResourceEndpointListItemProtocol | null;
		ResourceEndpoint?: string | null;
	}

	export enum ResourceEndpointListItemProtocol { WSS = 0, HTTPS = 1 }

	export enum ChannelProtocol { WSS = 0, HTTPS = 1 }

	export enum ChannelRole { MASTER = 0, VIEWER = 1 }

	export interface ListSignalingChannelsOutput {
		ChannelInfoList?: Array<ChannelInfo> | null;
		NextToken?: string | null;
	}

	export enum ComparisonOperator { BEGINS_WITH = 0 }

	export interface ListStreamsOutput {
		StreamInfoList?: Array<StreamInfo> | null;
		NextToken?: string | null;
	}

	export interface ListTagsForResourceOutput {
		NextToken?: string | null;
		Tags?: ResourceTags | null;
	}

	export interface ResourceTags {
	}

	export interface ListTagsForStreamOutput {
		NextToken?: string | null;
		Tags?: ResourceTags | null;
	}

	export interface InvalidResourceFormatException {
	}

	export interface TagResourceOutput {
	}

	export interface TagStreamOutput {
	}

	export interface UntagResourceOutput {
	}

	export interface UntagStreamOutput {
	}

	export interface UpdateDataRetentionOutput {
	}

	export interface UpdateSignalingChannelOutput {
	}

	export interface UpdateStreamOutput {
	}

	export enum APIName { PUT_MEDIA = 0, GET_MEDIA = 1, LIST_FRAGMENTS = 2, GET_MEDIA_FOR_FRAGMENT_LIST = 3, GET_HLS_STREAMING_SESSION_URL = 4, GET_DASH_STREAMING_SESSION_URL = 5, GET_CLIP = 6 }

	export enum ChannelType { SINGLE_MASTER = 0 }

	export enum Status { CREATING = 0, ACTIVE = 1, UPDATING = 2, DELETING = 3 }


	/** An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>. */
	export interface ChannelNameCondition {
		ComparisonOperator?: ComparisonOperator | null;
		ComparisonValue?: string | null;
	}

	export interface CreateSignalingChannelInput {
		ChannelName: string;
		ChannelType?: ChannelInfoChannelType | null;

		/** A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type. */
		SingleMasterConfiguration?: SingleMasterConfiguration | null;
		Tags?: Array<Tag> | null;
	}

	export interface CreateStreamInput {
		DeviceName?: string | null;
		StreamName: string;
		MediaType?: string | null;
		KmsKeyId?: string | null;
		DataRetentionInHours?: number | null;
		Tags?: ResourceTags | null;
	}

	export interface DeleteSignalingChannelInput {
		ChannelARN: string;
		CurrentVersion?: string | null;
	}

	export interface DeleteStreamInput {
		StreamARN: string;
		CurrentVersion?: string | null;
	}

	export interface DescribeSignalingChannelInput {
		ChannelName?: string | null;
		ChannelARN?: string | null;
	}

	export interface DescribeStreamInput {
		StreamName?: string | null;
		StreamARN?: string | null;
	}

	export interface GetDataEndpointInput {
		StreamName?: string | null;
		StreamARN?: string | null;
		APIName: APIName;
	}


	/** An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type.  */
	export interface SingleMasterChannelEndpointConfiguration {
		Protocols?: Array<ChannelProtocol> | null;
		Role?: ChannelRole | null;
	}

	export interface GetSignalingChannelEndpointInput {
		ChannelARN: string;

		/** An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type. */
		SingleMasterChannelEndpointConfiguration?: SingleMasterChannelEndpointConfiguration | null;
	}

	export interface ListSignalingChannelsInput {
		MaxResults?: number | null;
		NextToken?: string | null;

		/** An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>. */
		ChannelNameCondition?: ChannelNameCondition | null;
	}


	/** Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix.  */
	export interface StreamNameCondition {
		ComparisonOperator?: ComparisonOperator | null;
		ComparisonValue?: string | null;
	}

	export interface ListStreamsInput {
		MaxResults?: number | null;
		NextToken?: string | null;

		/** Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix. */
		StreamNameCondition?: StreamNameCondition | null;
	}

	export interface ListTagsForResourceInput {
		NextToken?: string | null;
		ResourceARN: string;
	}

	export interface ListTagsForStreamInput {
		NextToken?: string | null;
		StreamARN?: string | null;
		StreamName?: string | null;
	}

	export interface TagResourceInput {
		ResourceARN: string;
		Tags: Array<Tag>;
	}

	export interface TagStreamInput {
		StreamARN?: string | null;
		StreamName?: string | null;
		Tags: ResourceTags;
	}

	export interface UntagResourceInput {
		ResourceARN: string;
		TagKeyList: Array<string>;
	}

	export interface UntagStreamInput {
		StreamARN?: string | null;
		StreamName?: string | null;
		TagKeyList: Array<string>;
	}

	export enum UpdateDataRetentionOperation { INCREASE_DATA_RETENTION = 0, DECREASE_DATA_RETENTION = 1 }

	export interface UpdateDataRetentionInput {
		StreamName?: string | null;
		StreamARN?: string | null;
		CurrentVersion: string;
		Operation: UpdateDataRetentionOperation;
		DataRetentionChangeInHours: number;
	}

	export interface UpdateSignalingChannelInput {
		ChannelARN: string;
		CurrentVersion: string;

		/** A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type. */
		SingleMasterConfiguration?: SingleMasterConfiguration | null;
	}

	export interface UpdateStreamInput {
		StreamName?: string | null;
		StreamARN?: string | null;
		CurrentVersion: string;
		DeviceName?: string | null;
		MediaType?: string | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a signaling channel. </p> <p> <code>CreateSignalingChannel</code> is an asynchronous operation.</p>
		 * Post createSignalingChannel
		 * @return {CreateSignalingChannelOutput} Success
		 */
		CreateSignalingChannel(requestBody: CreateSignalingChannelPostBody): Observable<CreateSignalingChannelOutput> {
			return this.http.post<CreateSignalingChannelOutput>(this.baseUri + 'createSignalingChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new Kinesis video stream. </p> <p>When you create a new stream, Kinesis Video Streams assigns it a version number. When you change the stream's metadata, Kinesis Video Streams updates the version. </p> <p> <code>CreateStream</code> is an asynchronous operation.</p> <p>For information about how the service works, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-it-works.html">How it Works</a>. </p> <p>You must have permissions for the <code>KinesisVideo:CreateStream</code> action.</p>
		 * Post createStream
		 * @return {CreateStreamOutput} Success
		 */
		CreateStream(requestBody: CreateStreamPostBody): Observable<CreateStreamOutput> {
			return this.http.post<CreateStreamOutput>(this.baseUri + 'createStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specified signaling channel. <code>DeleteSignalingChannel</code> is an asynchronous operation. If you don't specify the channel's current version, the most recent version is deleted.
		 * Post deleteSignalingChannel
		 * @return {DeleteSignalingChannelOutput} Success
		 */
		DeleteSignalingChannel(requestBody: DeleteSignalingChannelPostBody): Observable<DeleteSignalingChannelOutput> {
			return this.http.post<DeleteSignalingChannelOutput>(this.baseUri + 'deleteSignalingChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a Kinesis video stream and the data contained in the stream. </p> <p>This method marks the stream for deletion, and makes the data in the stream inaccessible immediately.</p> <p> </p> <p> To ensure that you have the latest version of the stream before deleting it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p>This operation requires permission for the <code>KinesisVideo:DeleteStream</code> action.</p>
		 * Post deleteStream
		 * @return {DeleteStreamOutput} Success
		 */
		DeleteStream(requestBody: DeleteStreamPostBody): Observable<DeleteStreamOutput> {
			return this.http.post<DeleteStreamOutput>(this.baseUri + 'deleteStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the most current information about the signaling channel. You must specify either the name or the Amazon Resource Name (ARN) of the channel that you want to describe.
		 * Post describeSignalingChannel
		 * @return {DescribeSignalingChannelOutput} Success
		 */
		DescribeSignalingChannel(requestBody: DescribeSignalingChannelPostBody): Observable<DescribeSignalingChannelOutput> {
			return this.http.post<DescribeSignalingChannelOutput>(this.baseUri + 'describeSignalingChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the most current information about the specified stream. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
		 * Post describeStream
		 * @return {DescribeStreamOutput} Success
		 */
		DescribeStream(requestBody: DescribeStreamPostBody): Observable<DescribeStreamOutput> {
			return this.http.post<DescribeStreamOutput>(this.baseUri + 'describeStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets an endpoint for a specified stream for either reading or writing. Use this endpoint in your application to read from the specified stream (using the <code>GetMedia</code> or <code>GetMediaForFragmentList</code> operations) or write to it (using the <code>PutMedia</code> operation). </p> <note> <p>The returned endpoint does not have the API name appended. The client needs to add the API name to the returned endpoint.</p> </note> <p>In the request, specify the stream either by <code>StreamName</code> or <code>StreamARN</code>.</p>
		 * Post getDataEndpoint
		 * @return {GetDataEndpointOutput} Success
		 */
		GetDataEndpoint(requestBody: GetDataEndpointPostBody): Observable<GetDataEndpointOutput> {
			return this.http.post<GetDataEndpointOutput>(this.baseUri + 'getDataEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides an endpoint for the specified signaling channel to send and receive messages. This API uses the <code>SingleMasterChannelEndpointConfiguration</code> input parameter, which consists of the <code>Protocols</code> and <code>Role</code> properties.</p> <p> <code>Protocols</code> is used to determine the communication mechanism. For example, if you specify <code>WSS</code> as the protocol, this API produces a secure websocket endpoint. If you specify <code>HTTPS</code> as the protocol, this API generates an HTTPS endpoint. </p> <p> <code>Role</code> determines the messaging permissions. A <code>MASTER</code> role results in this API generating an endpoint that a client can use to communicate with any of the viewers on the channel. A <code>VIEWER</code> role results in this API generating an endpoint that a client can use to communicate only with a <code>MASTER</code>. </p>
		 * Post getSignalingChannelEndpoint
		 * @return {GetSignalingChannelEndpointOutput} Success
		 */
		GetSignalingChannelEndpoint(requestBody: GetSignalingChannelEndpointPostBody): Observable<GetSignalingChannelEndpointOutput> {
			return this.http.post<GetSignalingChannelEndpointOutput>(this.baseUri + 'getSignalingChannelEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of <code>ChannelInfo</code> objects. Each object describes a signaling channel. To retrieve only those channels that satisfy a specific condition, you can specify a <code>ChannelNameCondition</code>.
		 * Post listSignalingChannels
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSignalingChannelsOutput} Success
		 */
		ListSignalingChannels(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListSignalingChannelsPostBody): Observable<ListSignalingChannelsOutput> {
			return this.http.post<ListSignalingChannelsOutput>(this.baseUri + 'listSignalingChannels?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of <code>StreamInfo</code> objects. Each object describes a stream. To retrieve only streams that satisfy a specific condition, you can specify a <code>StreamNameCondition</code>.
		 * Post listStreams
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListStreamsOutput} Success
		 */
		ListStreams(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListStreamsPostBody): Observable<ListStreamsOutput> {
			return this.http.post<ListStreamsOutput>(this.baseUri + 'listStreams?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of tags associated with the specified signaling channel.
		 * Post ListTagsForResource
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourcePostBody): Observable<ListTagsForResourceOutput> {
			return this.http.post<ListTagsForResourceOutput>(this.baseUri + 'ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of tags associated with the specified stream.</p> <p>In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p>
		 * Post listTagsForStream
		 * @return {ListTagsForStreamOutput} Success
		 */
		ListTagsForStream(requestBody: ListTagsForStreamPostBody): Observable<ListTagsForStreamOutput> {
			return this.http.post<ListTagsForStreamOutput>(this.baseUri + 'listTagsForStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds one or more tags to a signaling channel. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>.
		 * Post TagResource
		 * @return {TagResourceOutput} Success
		 */
		TagResource(requestBody: TagResourcePostBody): Observable<TagResourceOutput> {
			return this.http.post<TagResourceOutput>(this.baseUri + 'TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds one or more tags to a stream. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p> <p>You must provide either the <code>StreamName</code> or the <code>StreamARN</code>.</p> <p>This operation requires permission for the <code>KinesisVideo:TagStream</code> action.</p> <p>Kinesis video streams support up to 50 tags.</p>
		 * Post tagStream
		 * @return {TagStreamOutput} Success
		 */
		TagStream(requestBody: TagStreamPostBody): Observable<TagStreamOutput> {
			return this.http.post<TagStreamOutput>(this.baseUri + 'tagStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from a signaling channel. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.
		 * Post UntagResource
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(requestBody: UntagResourcePostBody): Observable<UntagResourceOutput> {
			return this.http.post<UntagResourceOutput>(this.baseUri + 'UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes one or more tags from a stream. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.</p> <p>In the request, you must provide the <code>StreamName</code> or <code>StreamARN</code>.</p>
		 * Post untagStream
		 * @return {UntagStreamOutput} Success
		 */
		UntagStream(requestBody: UntagStreamPostBody): Observable<UntagStreamOutput> {
			return this.http.post<UntagStreamOutput>(this.baseUri + 'untagStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Increases or decreases the stream's data retention period by the value that you specify. To indicate whether you want to increase or decrease the data retention period, specify the <code>Operation</code> parameter in the request body. In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p> <note> <p>The retention period that you specify replaces the current value.</p> </note> <p>This operation requires permission for the <code>KinesisVideo:UpdateDataRetention</code> action.</p> <p>Changing the data retention period affects the data in the stream as follows:</p> <ul> <li> <p>If the data retention period is increased, existing data is retained for the new retention period. For example, if the data retention period is increased from one hour to seven hours, all existing data is retained for seven hours.</p> </li> <li> <p>If the data retention period is decreased, existing data is retained for the new retention period. For example, if the data retention period is decreased from seven hours to one hour, all existing data is retained for one hour, and any data older than one hour is deleted immediately.</p> </li> </ul>
		 * Post updateDataRetention
		 * @return {UpdateDataRetentionOutput} Success
		 */
		UpdateDataRetention(requestBody: UpdateDataRetentionPostBody): Observable<UpdateDataRetentionOutput> {
			return this.http.post<UpdateDataRetentionOutput>(this.baseUri + 'updateDataRetention', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the existing signaling channel. This is an asynchronous operation and takes time to complete. </p> <p>If the <code>MessageTtlSeconds</code> value is updated (either increased or reduced), it only applies to new messages sent via this channel after it's been updated. Existing messages are still expired as per the previous <code>MessageTtlSeconds</code> value.</p>
		 * Post updateSignalingChannel
		 * @return {UpdateSignalingChannelOutput} Success
		 */
		UpdateSignalingChannel(requestBody: UpdateSignalingChannelPostBody): Observable<UpdateSignalingChannelOutput> {
			return this.http.post<UpdateSignalingChannelOutput>(this.baseUri + 'updateSignalingChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates stream metadata, such as the device name and media type.</p> <p>You must provide the stream name or the Amazon Resource Name (ARN) of the stream.</p> <p>To make sure that you have the latest version of the stream before updating it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p> <code>UpdateStream</code> is an asynchronous operation, and takes time to complete.</p>
		 * Post updateStream
		 * @return {UpdateStreamOutput} Success
		 */
		UpdateStream(requestBody: UpdateStreamPostBody): Observable<UpdateStreamOutput> {
			return this.http.post<UpdateStreamOutput>(this.baseUri + 'updateStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateSignalingChannelPostBody {

		/**
		 * A name for the signaling channel that you are creating. It must be unique for each AWS account and AWS Region.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ChannelName: string;

		/** A type of the signaling channel that you are creating. Currently, <code>SINGLE_MASTER</code> is the only supported channel type. */
		ChannelType?: ChannelInfoChannelType | null;

		/** A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type. */
		SingleMasterConfiguration?: CreateSignalingChannelPostBodySingleMasterConfiguration | null;

		/**
		 * A set of tags (key-value pairs) that you want to associate with this channel.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag> | null;
	}

	export interface CreateSignalingChannelPostBodySingleMasterConfiguration {
		MessageTtlSeconds?: number | null;
	}

	export interface CreateStreamPostBody {

		/**
		 * <p>The name of the device that is writing to the stream. </p> <note> <p>In the current implementation, Kinesis Video Streams does not use this name.</p> </note>
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		DeviceName?: string | null;

		/**
		 * <p>A name for the stream that you are creating.</p> <p>The stream name is an identifier for the stream, and must be unique for each account and region.</p>
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		StreamName: string;

		/**
		 * <p>The media type of the stream. Consumers of the stream can use this information when processing the stream. For more information about media types, see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">Media Types</a>. If you choose to specify the <code>MediaType</code>, see <a href="https://tools.ietf.org/html/rfc6838#section-4.2">Naming Requirements</a> for guidelines.</p> <p>Example valid values include "video/h264" and "video/h264,audio/aac".</p> <p>This parameter is optional; the default value is <code>null</code> (or empty in JSON).</p>
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [\w\-\.\+]+/[\w\-\.\+]+(,[\w\-\.\+]+/[\w\-\.\+]+)*
		 */
		MediaType?: string | null;

		/**
		 * <p>The ID of the AWS Key Management Service (AWS KMS) key that you want Kinesis Video Streams to use to encrypt stream data.</p> <p>If no key ID is specified, the default, Kinesis Video-managed key (<code>aws/kinesisvideo</code>) is used.</p> <p> For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">DescribeKey</a>. </p>
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: .+
		 */
		KmsKeyId?: string | null;

		/**
		 * <p>The number of hours that you want to retain the data in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream.</p> <p>The default value is 0, indicating that the stream does not persist data.</p> <p>When the <code>DataRetentionInHours</code> value is 0, consumers can still consume the fragments that remain in the service host buffer, which has a retention time limit of 5 minutes and a retention memory limit of 200 MB. Fragments are removed from the buffer when either limit is reached.</p>
		 * Minimum: 0
		 */
		DataRetentionInHours?: number | null;

		/** A list of tags to associate with the specified stream. Each tag is a key-value pair (the value is optional). */
		Tags?: {[id: string]: string } | null;
	}

	export interface DeleteSignalingChannelPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the signaling channel that you want to delete.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		ChannelARN: string;

		/**
		 * The current version of the signaling channel that you want to delete. You can obtain the current version by invoking the <code>DescribeSignalingChannel</code> or <code>ListSignalingChannels</code> API operations.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9]+
		 */
		CurrentVersion?: string | null;
	}

	export interface DeleteStreamPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the stream that you want to delete.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		StreamARN: string;

		/**
		 * <p>Optional: The version of the stream that you want to delete. </p> <p>Specify the version as a safeguard to ensure that your are deleting the correct stream. To get the stream version, use the <code>DescribeStream</code> API.</p> <p>If not specified, only the <code>CreationTime</code> is checked before deleting the stream.</p>
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9]+
		 */
		CurrentVersion?: string | null;
	}

	export interface DescribeSignalingChannelPostBody {

		/**
		 * The name of the signaling channel that you want to describe.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ChannelName?: string | null;

		/**
		 * The ARN of the signaling channel that you want to describe.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		ChannelARN?: string | null;
	}

	export interface DescribeStreamPostBody {

		/**
		 * The name of the stream.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		StreamName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the stream.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		StreamARN?: string | null;
	}

	export interface GetDataEndpointPostBody {

		/**
		 * The name of the stream that you want to get the endpoint for. You must specify either this parameter or a <code>StreamARN</code> in the request.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		StreamName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the stream that you want to get the endpoint for. You must specify either this parameter or a <code>StreamName</code> in the request.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		StreamARN?: string | null;

		/**
		 * The name of the API action for which to get an endpoint.
		 * Required
		 */
		APIName: APIName;
	}

	export interface GetSignalingChannelEndpointPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the signalling channel for which you want to get an endpoint.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		ChannelARN: string;

		/** An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type. */
		SingleMasterChannelEndpointConfiguration?: GetSignalingChannelEndpointPostBodySingleMasterChannelEndpointConfiguration | null;
	}

	export interface GetSignalingChannelEndpointPostBodySingleMasterChannelEndpointConfiguration {
		Protocols?: Array<ChannelProtocol> | null;
		Role?: ChannelRole | null;
	}

	export interface ListSignalingChannelsPostBody {

		/**
		 * The maximum number of channels to return in the response. The default is 500.
		 * Minimum: 1
		 * Maximum: 10000
		 */
		MaxResults?: number | null;

		/**
		 * If you specify this parameter, when the result of a <code>ListSignalingChannels</code> operation is truncated, the call returns the <code>NextToken</code> in the response. To get another batch of channels, provide this token in your next request.
		 * Max length: 512
		 * Min length: 0
		 * Pattern: [a-zA-Z0-9+/=]*
		 */
		NextToken?: string | null;

		/** An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>. */
		ChannelNameCondition?: ListSignalingChannelsPostBodyChannelNameCondition | null;
	}

	export interface ListSignalingChannelsPostBodyChannelNameCondition {
		ComparisonOperator?: ComparisonOperator | null;
		ComparisonValue?: string | null;
	}

	export interface ListStreamsPostBody {

		/**
		 * The maximum number of streams to return in the response. The default is 10,000.
		 * Minimum: 1
		 * Maximum: 10000
		 */
		MaxResults?: number | null;

		/**
		 * If you specify this parameter, when the result of a <code>ListStreams</code> operation is truncated, the call returns the <code>NextToken</code> in the response. To get another batch of streams, provide this token in your next request.
		 * Max length: 512
		 * Min length: 0
		 * Pattern: [a-zA-Z0-9+/=]*
		 */
		NextToken?: string | null;

		/** Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix. */
		StreamNameCondition?: ListStreamsPostBodyStreamNameCondition | null;
	}

	export interface ListStreamsPostBodyStreamNameCondition {
		ComparisonOperator?: ComparisonOperator | null;
		ComparisonValue?: string | null;
	}

	export interface ListTagsForResourcePostBody {

		/**
		 * If you specify this parameter and the result of a <code>ListTagsForResource</code> call is truncated, the response includes a token that you can use in the next request to fetch the next batch of tags.
		 * Max length: 512
		 * Min length: 0
		 * Pattern: [a-zA-Z0-9+/=]*
		 */
		NextToken?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the signaling channel for which you want to list tags.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		ResourceARN: string;
	}

	export interface ListTagsForStreamPostBody {

		/**
		 * If you specify this parameter and the result of a <code>ListTagsForStream</code> call is truncated, the response includes a token that you can use in the next request to fetch the next batch of tags.
		 * Max length: 512
		 * Min length: 0
		 * Pattern: [a-zA-Z0-9+/=]*
		 */
		NextToken?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the stream that you want to list tags for.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		StreamARN?: string | null;

		/**
		 * The name of the stream that you want to list tags for.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		StreamName?: string | null;
	}

	export interface TagResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the signaling channel to which you want to add tags.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		ResourceARN: string;

		/**
		 * A list of tags to associate with the specified signaling channel. Each tag is a key-value pair.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags: Array<Tag>;
	}

	export interface TagStreamPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource that you want to add the tag or tags to.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		StreamARN?: string | null;

		/**
		 * The name of the stream that you want to add the tag or tags to.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		StreamName?: string | null;

		/**
		 * A list of tags to associate with the specified stream. Each tag is a key-value pair (the value is optional).
		 * Required
		 */
		Tags: {[id: string]: string };
	}

	export interface UntagResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the signaling channel from which you want to remove tags.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		ResourceARN: string;

		/**
		 * A list of the keys of the tags that you want to remove.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagKeyList: Array<string>;
	}

	export interface UntagStreamPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the stream that you want to remove tags from.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		StreamARN?: string | null;

		/**
		 * The name of the stream that you want to remove tags from.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		StreamName?: string | null;

		/**
		 * A list of the keys of the tags that you want to remove.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagKeyList: Array<string>;
	}

	export interface UpdateDataRetentionPostBody {

		/**
		 * The name of the stream whose retention period you want to change.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		StreamName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the stream whose retention period you want to change.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		StreamARN?: string | null;

		/**
		 * The version of the stream whose retention period you want to change. To get the version, call either the <code>DescribeStream</code> or the <code>ListStreams</code> API.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9]+
		 */
		CurrentVersion: string;

		/**
		 * Indicates whether you want to increase or decrease the retention period.
		 * Required
		 */
		Operation: UpdateDataRetentionOperation;

		/**
		 * The retention period, in hours. The value you specify replaces the current value. The maximum value for this parameter is 87600 (ten years).
		 * Required
		 * Minimum: 1
		 */
		DataRetentionChangeInHours: number;
	}

	export interface UpdateSignalingChannelPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the signaling channel that you want to update.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		ChannelARN: string;

		/**
		 * The current version of the signaling channel that you want to update.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9]+
		 */
		CurrentVersion: string;

		/** A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type. */
		SingleMasterConfiguration?: UpdateSignalingChannelPostBodySingleMasterConfiguration | null;
	}

	export interface UpdateSignalingChannelPostBodySingleMasterConfiguration {
		MessageTtlSeconds?: number | null;
	}

	export interface UpdateStreamPostBody {

		/**
		 * <p>The name of the stream whose metadata you want to update.</p> <p>The stream name is an identifier for the stream, and must be unique for each account and region.</p>
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		StreamName?: string | null;

		/**
		 * The ARN of the stream whose metadata you want to update.
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		StreamARN?: string | null;

		/**
		 * The version of the stream whose metadata you want to update.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9]+
		 */
		CurrentVersion: string;

		/**
		 * <p>The name of the device that is writing to the stream. </p> <note> <p> In the current implementation, Kinesis Video Streams does not use this name. </p> </note>
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		DeviceName?: string | null;

		/**
		 * <p>The stream's media type. Use <code>MediaType</code> to specify the type of content that the stream contains to the consumers of the stream. For more information about media types, see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">Media Types</a>. If you choose to specify the <code>MediaType</code>, see <a href="https://tools.ietf.org/html/rfc6838#section-4.2">Naming Requirements</a>.</p> <p>To play video on the console, you must specify the correct video type. For example, if the video in the stream is H.264, specify <code>video/h264</code> as the <code>MediaType</code>.</p>
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [\w\-\.\+]+/[\w\-\.\+]+(,[\w\-\.\+]+/[\w\-\.\+]+)*
		 */
		MediaType?: string | null;
	}

}

