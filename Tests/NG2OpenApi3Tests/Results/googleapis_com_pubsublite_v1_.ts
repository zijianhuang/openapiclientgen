import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequestFormProperties {
	}
	export function CreateCancelOperationRequestFormGroup() {
		return new FormGroup<CancelOperationRequestFormProperties>({
		});

	}


	/** The throughput capacity configuration for each partition. */
	export interface Capacity {

		/** Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16. */
		publishMibPerSec?: number | null;

		/** Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 32. */
		subscribeMibPerSec?: number | null;
	}

	/** The throughput capacity configuration for each partition. */
	export interface CapacityFormProperties {

		/** Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16. */
		publishMibPerSec: FormControl<number | null | undefined>,

		/** Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 32. */
		subscribeMibPerSec: FormControl<number | null | undefined>,
	}
	export function CreateCapacityFormGroup() {
		return new FormGroup<CapacityFormProperties>({
			publishMibPerSec: new FormControl<number | null | undefined>(undefined),
			subscribeMibPerSec: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request for CommitCursor. */
	export interface CommitCursorRequest {

		/** A cursor that describes the position of a message within a topic partition. */
		cursor?: Cursor;

		/** The partition for which to update the cursor. Partitions are zero indexed, so `partition` must be in the range [0, topic.num_partitions). */
		partition?: string | null;
	}

	/** Request for CommitCursor. */
	export interface CommitCursorRequestFormProperties {

		/** The partition for which to update the cursor. Partitions are zero indexed, so `partition` must be in the range [0, topic.num_partitions). */
		partition: FormControl<string | null | undefined>,
	}
	export function CreateCommitCursorRequestFormGroup() {
		return new FormGroup<CommitCursorRequestFormProperties>({
			partition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A cursor that describes the position of a message within a topic partition. */
	export interface Cursor {

		/** The offset of a message within a topic partition. Must be greater than or equal 0. */
		offset?: string | null;
	}

	/** A cursor that describes the position of a message within a topic partition. */
	export interface CursorFormProperties {

		/** The offset of a message within a topic partition. Must be greater than or equal 0. */
		offset: FormControl<string | null | undefined>,
	}
	export function CreateCursorFormGroup() {
		return new FormGroup<CursorFormProperties>({
			offset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for CommitCursor. */
	export interface CommitCursorResponse {
	}

	/** Response for CommitCursor. */
	export interface CommitCursorResponseFormProperties {
	}
	export function CreateCommitCursorResponseFormGroup() {
		return new FormGroup<CommitCursorResponseFormProperties>({
		});

	}


	/** Compute the current head cursor for a partition. */
	export interface ComputeHeadCursorRequest {

		/** Required. The partition for which we should compute the head cursor. */
		partition?: string | null;
	}

	/** Compute the current head cursor for a partition. */
	export interface ComputeHeadCursorRequestFormProperties {

		/** Required. The partition for which we should compute the head cursor. */
		partition: FormControl<string | null | undefined>,
	}
	export function CreateComputeHeadCursorRequestFormGroup() {
		return new FormGroup<ComputeHeadCursorRequestFormProperties>({
			partition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response containing the head cursor for the requested topic and partition. */
	export interface ComputeHeadCursorResponse {

		/** A cursor that describes the position of a message within a topic partition. */
		headCursor?: Cursor;
	}

	/** Response containing the head cursor for the requested topic and partition. */
	export interface ComputeHeadCursorResponseFormProperties {
	}
	export function CreateComputeHeadCursorResponseFormGroup() {
		return new FormGroup<ComputeHeadCursorResponseFormProperties>({
		});

	}


	/** Compute statistics about a range of messages in a given topic and partition. */
	export interface ComputeMessageStatsRequest {

		/** A cursor that describes the position of a message within a topic partition. */
		endCursor?: Cursor;

		/** Required. The partition for which we should compute message stats. */
		partition?: string | null;

		/** A cursor that describes the position of a message within a topic partition. */
		startCursor?: Cursor;
	}

	/** Compute statistics about a range of messages in a given topic and partition. */
	export interface ComputeMessageStatsRequestFormProperties {

		/** Required. The partition for which we should compute message stats. */
		partition: FormControl<string | null | undefined>,
	}
	export function CreateComputeMessageStatsRequestFormGroup() {
		return new FormGroup<ComputeMessageStatsRequestFormProperties>({
			partition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response containing stats for messages in the requested topic and partition. */
	export interface ComputeMessageStatsResponse {

		/** The number of quota bytes accounted to these messages. */
		messageBytes?: string | null;

		/** The count of messages. */
		messageCount?: string | null;

		/** The minimum event timestamp across these messages. For the purposes of this computation, if a message does not have an event time, we use the publish time. The timestamp will be unset if there are no messages. */
		minimumEventTime?: string | null;

		/** The minimum publish timestamp across these messages. Note that publish timestamps within a partition are not guaranteed to be non-decreasing. The timestamp will be unset if there are no messages. */
		minimumPublishTime?: string | null;
	}

	/** Response containing stats for messages in the requested topic and partition. */
	export interface ComputeMessageStatsResponseFormProperties {

		/** The number of quota bytes accounted to these messages. */
		messageBytes: FormControl<string | null | undefined>,

		/** The count of messages. */
		messageCount: FormControl<string | null | undefined>,

		/** The minimum event timestamp across these messages. For the purposes of this computation, if a message does not have an event time, we use the publish time. The timestamp will be unset if there are no messages. */
		minimumEventTime: FormControl<string | null | undefined>,

		/** The minimum publish timestamp across these messages. Note that publish timestamps within a partition are not guaranteed to be non-decreasing. The timestamp will be unset if there are no messages. */
		minimumPublishTime: FormControl<string | null | undefined>,
	}
	export function CreateComputeMessageStatsResponseFormGroup() {
		return new FormGroup<ComputeMessageStatsResponseFormProperties>({
			messageBytes: new FormControl<string | null | undefined>(undefined),
			messageCount: new FormControl<string | null | undefined>(undefined),
			minimumEventTime: new FormControl<string | null | undefined>(undefined),
			minimumPublishTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Compute the corresponding cursor for a publish or event time in a topic partition. */
	export interface ComputeTimeCursorRequest {

		/** Required. The partition for which we should compute the cursor. */
		partition?: string | null;

		/** A target publish or event time. Can be used for seeking to or retrieving the corresponding cursor. */
		target?: TimeTarget;
	}

	/** Compute the corresponding cursor for a publish or event time in a topic partition. */
	export interface ComputeTimeCursorRequestFormProperties {

		/** Required. The partition for which we should compute the cursor. */
		partition: FormControl<string | null | undefined>,
	}
	export function CreateComputeTimeCursorRequestFormGroup() {
		return new FormGroup<ComputeTimeCursorRequestFormProperties>({
			partition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A target publish or event time. Can be used for seeking to or retrieving the corresponding cursor. */
	export interface TimeTarget {

		/** Request the cursor of the first message with event time greater than or equal to `event_time`. If messages are missing an event time, the publish time is used as a fallback. As event times are user supplied, subsequent messages may have event times less than `event_time` and should be filtered by the client, if necessary. */
		eventTime?: string | null;

		/** Request the cursor of the first message with publish time greater than or equal to `publish_time`. All messages thereafter are guaranteed to have publish times >= `publish_time`. */
		publishTime?: string | null;
	}

	/** A target publish or event time. Can be used for seeking to or retrieving the corresponding cursor. */
	export interface TimeTargetFormProperties {

		/** Request the cursor of the first message with event time greater than or equal to `event_time`. If messages are missing an event time, the publish time is used as a fallback. As event times are user supplied, subsequent messages may have event times less than `event_time` and should be filtered by the client, if necessary. */
		eventTime: FormControl<string | null | undefined>,

		/** Request the cursor of the first message with publish time greater than or equal to `publish_time`. All messages thereafter are guaranteed to have publish times >= `publish_time`. */
		publishTime: FormControl<string | null | undefined>,
	}
	export function CreateTimeTargetFormGroup() {
		return new FormGroup<TimeTargetFormProperties>({
			eventTime: new FormControl<string | null | undefined>(undefined),
			publishTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response containing the cursor corresponding to a publish or event time in a topic partition. */
	export interface ComputeTimeCursorResponse {

		/** A cursor that describes the position of a message within a topic partition. */
		cursor?: Cursor;
	}

	/** Response containing the cursor corresponding to a publish or event time in a topic partition. */
	export interface ComputeTimeCursorResponseFormProperties {
	}
	export function CreateComputeTimeCursorResponseFormGroup() {
		return new FormGroup<ComputeTimeCursorResponseFormProperties>({
		});

	}


	/** The settings for a subscription's message delivery. */
	export interface DeliveryConfig {

		/** The DeliveryRequirement for this subscription. */
		deliveryRequirement?: DeliveryConfigDeliveryRequirement | null;
	}

	/** The settings for a subscription's message delivery. */
	export interface DeliveryConfigFormProperties {

		/** The DeliveryRequirement for this subscription. */
		deliveryRequirement: FormControl<DeliveryConfigDeliveryRequirement | null | undefined>,
	}
	export function CreateDeliveryConfigFormGroup() {
		return new FormGroup<DeliveryConfigFormProperties>({
			deliveryRequirement: new FormControl<DeliveryConfigDeliveryRequirement | null | undefined>(undefined),
		});

	}

	export enum DeliveryConfigDeliveryRequirement { DELIVERY_REQUIREMENT_UNSPECIFIED = 0, DELIVER_IMMEDIATELY = 1, DELIVER_AFTER_STORED = 2 }


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Configuration for a Pub/Sub Lite subscription that writes messages to a destination. User subscriber clients must not connect to this subscription. */
	export interface ExportConfig {

		/** Output only. The current state of the export, which may be different to the desired state due to errors. This field is output only. */
		currentState?: ExportConfigCurrentState | null;

		/** Optional. The name of an optional Pub/Sub Lite topic to publish messages that can not be exported to the destination. For example, the message can not be published to the Pub/Sub service because it does not satisfy the constraints documented at https://cloud.google.com/pubsub/docs/publisher. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id}. Must be within the same project and location as the subscription. The topic may be changed or removed. */
		deadLetterTopic?: string | null;

		/** The desired state of this export. Setting this to values other than `ACTIVE` and `PAUSED` will result in an error. */
		desiredState?: ExportConfigCurrentState | null;

		/** Configuration for exporting to a Pub/Sub topic. */
		pubsubConfig?: PubSubConfig;
	}

	/** Configuration for a Pub/Sub Lite subscription that writes messages to a destination. User subscriber clients must not connect to this subscription. */
	export interface ExportConfigFormProperties {

		/** Output only. The current state of the export, which may be different to the desired state due to errors. This field is output only. */
		currentState: FormControl<ExportConfigCurrentState | null | undefined>,

		/** Optional. The name of an optional Pub/Sub Lite topic to publish messages that can not be exported to the destination. For example, the message can not be published to the Pub/Sub service because it does not satisfy the constraints documented at https://cloud.google.com/pubsub/docs/publisher. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id}. Must be within the same project and location as the subscription. The topic may be changed or removed. */
		deadLetterTopic: FormControl<string | null | undefined>,

		/** The desired state of this export. Setting this to values other than `ACTIVE` and `PAUSED` will result in an error. */
		desiredState: FormControl<ExportConfigCurrentState | null | undefined>,
	}
	export function CreateExportConfigFormGroup() {
		return new FormGroup<ExportConfigFormProperties>({
			currentState: new FormControl<ExportConfigCurrentState | null | undefined>(undefined),
			deadLetterTopic: new FormControl<string | null | undefined>(undefined),
			desiredState: new FormControl<ExportConfigCurrentState | null | undefined>(undefined),
		});

	}

	export enum ExportConfigCurrentState { STATE_UNSPECIFIED = 0, ACTIVE = 1, PAUSED = 2, PERMISSION_DENIED = 3, NOT_FOUND = 4 }


	/** Configuration for exporting to a Pub/Sub topic. */
	export interface PubSubConfig {

		/** The name of the Pub/Sub topic. Structured like: projects/{project_number}/topics/{topic_id}. The topic may be changed. */
		topic?: string | null;
	}

	/** Configuration for exporting to a Pub/Sub topic. */
	export interface PubSubConfigFormProperties {

		/** The name of the Pub/Sub topic. Structured like: projects/{project_number}/topics/{topic_id}. The topic may be changed. */
		topic: FormControl<string | null | undefined>,
	}
	export function CreatePubSubConfigFormGroup() {
		return new FormGroup<PubSubConfigFormProperties>({
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListPartitionCursors */
	export interface ListPartitionCursorsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The partition cursors from this request. */
		partitionCursors?: Array<PartitionCursor>;
	}

	/** Response for ListPartitionCursors */
	export interface ListPartitionCursorsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPartitionCursorsResponseFormGroup() {
		return new FormGroup<ListPartitionCursorsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A pair of a Cursor and the partition it is for. */
	export interface PartitionCursor {

		/** A cursor that describes the position of a message within a topic partition. */
		cursor?: Cursor;

		/** The partition this is for. */
		partition?: string | null;
	}

	/** A pair of a Cursor and the partition it is for. */
	export interface PartitionCursorFormProperties {

		/** The partition this is for. */
		partition: FormControl<string | null | undefined>,
	}
	export function CreatePartitionCursorFormGroup() {
		return new FormGroup<PartitionCursorFormProperties>({
			partition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListReservationTopics. */
	export interface ListReservationTopicsResponse {

		/** A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results. */
		nextPageToken?: string | null;

		/** The names of topics attached to the reservation. The order of the topics is unspecified. */
		topics?: Array<string>;
	}

	/** Response for ListReservationTopics. */
	export interface ListReservationTopicsResponseFormProperties {

		/** A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListReservationTopicsResponseFormGroup() {
		return new FormGroup<ListReservationTopicsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListReservations. */
	export interface ListReservationsResponse {

		/** A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results. */
		nextPageToken?: string | null;

		/** The list of reservation in the requested parent. The order of the reservations is unspecified. */
		reservations?: Array<Reservation>;
	}

	/** Response for ListReservations. */
	export interface ListReservationsResponseFormProperties {

		/** A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListReservationsResponseFormGroup() {
		return new FormGroup<ListReservationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata about a reservation resource. */
	export interface Reservation {

		/** The name of the reservation. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id} */
		name?: string | null;

		/** The reserved throughput capacity. Every unit of throughput capacity is equivalent to 1 MiB/s of published messages or 2 MiB/s of subscribed messages. Any topics which are declared as using capacity from a Reservation will consume resources from this reservation instead of being charged individually. */
		throughputCapacity?: string | null;
	}

	/** Metadata about a reservation resource. */
	export interface ReservationFormProperties {

		/** The name of the reservation. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id} */
		name: FormControl<string | null | undefined>,

		/** The reserved throughput capacity. Every unit of throughput capacity is equivalent to 1 MiB/s of published messages or 2 MiB/s of subscribed messages. Any topics which are declared as using capacity from a Reservation will consume resources from this reservation instead of being charged individually. */
		throughputCapacity: FormControl<string | null | undefined>,
	}
	export function CreateReservationFormGroup() {
		return new FormGroup<ReservationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			throughputCapacity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListSubscriptions. */
	export interface ListSubscriptionsResponse {

		/** A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results. */
		nextPageToken?: string | null;

		/** The list of subscriptions in the requested parent. The order of the subscriptions is unspecified. */
		subscriptions?: Array<Subscription>;
	}

	/** Response for ListSubscriptions. */
	export interface ListSubscriptionsResponseFormProperties {

		/** A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSubscriptionsResponseFormGroup() {
		return new FormGroup<ListSubscriptionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata about a subscription resource. */
	export interface Subscription {

		/** The settings for a subscription's message delivery. */
		deliveryConfig?: DeliveryConfig;

		/** Configuration for a Pub/Sub Lite subscription that writes messages to a destination. User subscriber clients must not connect to this subscription. */
		exportConfig?: ExportConfig;

		/** The name of the subscription. Structured like: projects/{project_number}/locations/{location}/subscriptions/{subscription_id} */
		name?: string | null;

		/** The name of the topic this subscription is attached to. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id} */
		topic?: string | null;
	}

	/** Metadata about a subscription resource. */
	export interface SubscriptionFormProperties {

		/** The name of the subscription. Structured like: projects/{project_number}/locations/{location}/subscriptions/{subscription_id} */
		name: FormControl<string | null | undefined>,

		/** The name of the topic this subscription is attached to. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id} */
		topic: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListTopicSubscriptions. */
	export interface ListTopicSubscriptionsResponse {

		/** A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results. */
		nextPageToken?: string | null;

		/** The names of subscriptions attached to the topic. The order of the subscriptions is unspecified. */
		subscriptions?: Array<string>;
	}

	/** Response for ListTopicSubscriptions. */
	export interface ListTopicSubscriptionsResponseFormProperties {

		/** A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTopicSubscriptionsResponseFormGroup() {
		return new FormGroup<ListTopicSubscriptionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListTopics. */
	export interface ListTopicsResponse {

		/** A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results. */
		nextPageToken?: string | null;

		/** The list of topic in the requested parent. The order of the topics is unspecified. */
		topics?: Array<Topic>;
	}

	/** Response for ListTopics. */
	export interface ListTopicsResponseFormProperties {

		/** A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTopicsResponseFormGroup() {
		return new FormGroup<ListTopicsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata about a topic resource. */
	export interface Topic {

		/** The name of the topic. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id} */
		name?: string | null;

		/** The settings for a topic's partitions. */
		partitionConfig?: PartitionConfig;

		/** The settings for this topic's Reservation usage. */
		reservationConfig?: ReservationConfig;

		/** The settings for a topic's message retention. */
		retentionConfig?: RetentionConfig;
	}

	/** Metadata about a topic resource. */
	export interface TopicFormProperties {

		/** The name of the topic. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTopicFormGroup() {
		return new FormGroup<TopicFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The settings for a topic's partitions. */
	export interface PartitionConfig {

		/** The throughput capacity configuration for each partition. */
		capacity?: Capacity;

		/** The number of partitions in the topic. Must be at least 1. Once a topic has been created the number of partitions can be increased but not decreased. Message ordering is not guaranteed across a topic resize. For more information see https://cloud.google.com/pubsub/lite/docs/topics#scaling_capacity */
		count?: string | null;

		/** DEPRECATED: Use capacity instead which can express a superset of configurations. Every partition in the topic is allocated throughput equivalent to `scale` times the standard partition throughput (4 MiB/s). This is also reflected in the cost of this topic; a topic with `scale` of 2 and count of 10 is charged for 20 partitions. This value must be in the range [1,4]. */
		scale?: number | null;
	}

	/** The settings for a topic's partitions. */
	export interface PartitionConfigFormProperties {

		/** The number of partitions in the topic. Must be at least 1. Once a topic has been created the number of partitions can be increased but not decreased. Message ordering is not guaranteed across a topic resize. For more information see https://cloud.google.com/pubsub/lite/docs/topics#scaling_capacity */
		count: FormControl<string | null | undefined>,

		/** DEPRECATED: Use capacity instead which can express a superset of configurations. Every partition in the topic is allocated throughput equivalent to `scale` times the standard partition throughput (4 MiB/s). This is also reflected in the cost of this topic; a topic with `scale` of 2 and count of 10 is charged for 20 partitions. This value must be in the range [1,4]. */
		scale: FormControl<number | null | undefined>,
	}
	export function CreatePartitionConfigFormGroup() {
		return new FormGroup<PartitionConfigFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			scale: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The settings for this topic's Reservation usage. */
	export interface ReservationConfig {

		/** The Reservation to use for this topic's throughput capacity. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id} */
		throughputReservation?: string | null;
	}

	/** The settings for this topic's Reservation usage. */
	export interface ReservationConfigFormProperties {

		/** The Reservation to use for this topic's throughput capacity. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id} */
		throughputReservation: FormControl<string | null | undefined>,
	}
	export function CreateReservationConfigFormGroup() {
		return new FormGroup<ReservationConfigFormProperties>({
			throughputReservation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The settings for a topic's message retention. */
	export interface RetentionConfig {

		/** The provisioned storage, in bytes, per partition. If the number of bytes stored in any of the topic's partitions grows beyond this value, older messages will be dropped to make room for newer ones, regardless of the value of `period`. */
		perPartitionBytes?: string | null;

		/** How long a published message is retained. If unset, messages will be retained as long as the bytes retained for each partition is below `per_partition_bytes`. */
		period?: string | null;
	}

	/** The settings for a topic's message retention. */
	export interface RetentionConfigFormProperties {

		/** The provisioned storage, in bytes, per partition. If the number of bytes stored in any of the topic's partitions grows beyond this value, older messages will be dropped to make room for newer ones, regardless of the value of `period`. */
		perPartitionBytes: FormControl<string | null | undefined>,

		/** How long a published message is retained. If unset, messages will be retained as long as the bytes retained for each partition is below `per_partition_bytes`. */
		period: FormControl<string | null | undefined>,
	}
	export function CreateRetentionConfigFormGroup() {
		return new FormGroup<RetentionConfigFormProperties>({
			perPartitionBytes: new FormControl<string | null | undefined>(undefined),
			period: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for long running operations. */
	export interface OperationMetadata {

		/** The time the operation was created. */
		createTime?: string | null;

		/** The time the operation finished running. Not set if the operation has not completed. */
		endTime?: string | null;

		/** Resource path for the target of the operation. For example, targets of seeks are subscription resources, structured like: projects/{project_number}/locations/{location}/subscriptions/{subscription_id} */
		target?: string | null;

		/** Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Metadata for long running operations. */
	export interface OperationMetadataFormProperties {

		/** The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** The time the operation finished running. Not set if the operation has not completed. */
		endTime: FormControl<string | null | undefined>,

		/** Resource path for the target of the operation. For example, targets of seeks are subscription resources, structured like: projects/{project_number}/locations/{location}/subscriptions/{subscription_id} */
		target: FormControl<string | null | undefined>,

		/** Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for SeekSubscription. */
	export interface SeekSubscriptionRequest {

		/** Seek to a named position with respect to the message backlog. */
		namedTarget?: SeekSubscriptionRequestNamedTarget | null;

		/** A target publish or event time. Can be used for seeking to or retrieving the corresponding cursor. */
		timeTarget?: TimeTarget;
	}

	/** Request for SeekSubscription. */
	export interface SeekSubscriptionRequestFormProperties {

		/** Seek to a named position with respect to the message backlog. */
		namedTarget: FormControl<SeekSubscriptionRequestNamedTarget | null | undefined>,
	}
	export function CreateSeekSubscriptionRequestFormGroup() {
		return new FormGroup<SeekSubscriptionRequestFormProperties>({
			namedTarget: new FormControl<SeekSubscriptionRequestNamedTarget | null | undefined>(undefined),
		});

	}

	export enum SeekSubscriptionRequestNamedTarget { NAMED_TARGET_UNSPECIFIED = 0, TAIL = 1, HEAD = 2 }


	/** Response for SeekSubscription long running operation. */
	export interface SeekSubscriptionResponse {
	}

	/** Response for SeekSubscription long running operation. */
	export interface SeekSubscriptionResponseFormProperties {
	}
	export function CreateSeekSubscriptionResponseFormGroup() {
		return new FormGroup<SeekSubscriptionResponseFormProperties>({
		});

	}


	/** Response for GetTopicPartitions. */
	export interface TopicPartitions {

		/** The number of partitions in the topic. */
		partitionCount?: string | null;
	}

	/** Response for GetTopicPartitions. */
	export interface TopicPartitionsFormProperties {

		/** The number of partitions in the topic. */
		partitionCount: FormControl<string | null | undefined>,
	}
	export function CreateTopicPartitionsFormGroup() {
		return new FormGroup<TopicPartitionsFormProperties>({
			partitionCount: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes the specified topic.
		 * Delete v1/admin/{name}
		 * @param {string} name Required. The name of the topic to delete.
		 * @return {Empty} Successful response
		 */
		Pubsublite_admin_projects_locations_topics_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/admin/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Returns the topic configuration.
		 * Get v1/admin/{name}
		 * @param {string} name Required. The name of the topic whose configuration to return.
		 * @return {Topic} Successful response
		 */
		Pubsublite_admin_projects_locations_topics_get(name: string): Observable<Topic> {
			return this.http.get<Topic>(this.baseUri + 'v1/admin/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates properties of the specified topic.
		 * Patch v1/admin/{name}
		 * @param {string} name The name of the topic. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id}
		 * @param {string} updateMask Required. A mask specifying the topic fields to change.
		 * @return {Topic} Successful response
		 */
		Pubsublite_admin_projects_locations_topics_patch(name: string, updateMask: string | null | undefined, requestBody: Topic): Observable<Topic> {
			return this.http.patch<Topic>(this.baseUri + 'v1/admin/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/admin/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Pubsublite_admin_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/admin/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns the partition information for the requested topic.
		 * Get v1/admin/{name}/partitions
		 * @param {string} name Required. The topic whose partition information to return.
		 * @return {TopicPartitions} Successful response
		 */
		Pubsublite_admin_projects_locations_topics_getPartitions(name: string): Observable<TopicPartitions> {
			return this.http.get<TopicPartitions>(this.baseUri + 'v1/admin/' + (name == null ? '' : encodeURIComponent(name)) + '/partitions', {});
		}

		/**
		 * Lists the subscriptions attached to the specified topic.
		 * Get v1/admin/{name}/subscriptions
		 * @param {string} name Required. The name of the topic whose subscriptions to list.
		 * @param {number} pageSize The maximum number of subscriptions to return. The service may return fewer than this value. If unset or zero, all subscriptions for the given topic will be returned.
		 * @param {string} pageToken A page token, received from a previous `ListTopicSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopicSubscriptions` must match the call that provided the page token.
		 * @return {ListTopicSubscriptionsResponse} Successful response
		 */
		Pubsublite_admin_projects_locations_topics_subscriptions_list(name: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTopicSubscriptionsResponse> {
			return this.http.get<ListTopicSubscriptionsResponse>(this.baseUri + 'v1/admin/' + (name == null ? '' : encodeURIComponent(name)) + '/subscriptions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists the topics attached to the specified reservation.
		 * Get v1/admin/{name}/topics
		 * @param {string} name Required. The name of the reservation whose topics to list. Structured like: projects/{project_number}/locations/{location}/reservations/{reservation_id}
		 * @param {number} pageSize The maximum number of topics to return. The service may return fewer than this value. If unset or zero, all topics for the given reservation will be returned.
		 * @param {string} pageToken A page token, received from a previous `ListReservationTopics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReservationTopics` must match the call that provided the page token.
		 * @return {ListReservationTopicsResponse} Successful response
		 */
		Pubsublite_admin_projects_locations_reservations_topics_list(name: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListReservationTopicsResponse> {
			return this.http.get<ListReservationTopicsResponse>(this.baseUri + 'v1/admin/' + (name == null ? '' : encodeURIComponent(name)) + '/topics&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/admin/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Pubsublite_admin_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/admin/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Performs an out-of-band seek for a subscription to a specified target, which may be timestamps or named positions within the message backlog. Seek translates these targets to cursors for each partition and orchestrates subscribers to start consuming messages from these seek cursors. If an operation is returned, the seek has been registered and subscribers will eventually receive messages from the seek cursors (i.e. eventual consistency), as long as they are using a minimum supported client library version and not a system that tracks cursors independently of Pub/Sub Lite (e.g. Apache Beam, Dataflow, Spark). The seek operation will fail for unsupported clients. If clients would like to know when subscribers react to the seek (or not), they can poll the operation. The seek operation will succeed and complete once subscribers are ready to receive messages from the seek cursors for all partitions of the topic. This means that the seek operation will not complete until all subscribers come online. If the previous seek operation has not yet completed, it will be aborted and the new invocation of seek will supersede it.
		 * Post v1/admin/{name}:seek
		 * @param {string} name Required. The name of the subscription to seek.
		 * @return {Operation} Successful response
		 */
		Pubsublite_admin_projects_locations_subscriptions_seek(name: string, requestBody: SeekSubscriptionRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/admin/' + (name == null ? '' : encodeURIComponent(name)) + ':seek', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of reservations for the given project.
		 * Get v1/admin/{parent}/reservations
		 * @param {string} parent Required. The parent whose reservations are to be listed. Structured like `projects/{project_number}/locations/{location}`.
		 * @param {number} pageSize The maximum number of reservations to return. The service may return fewer than this value. If unset or zero, all reservations for the parent will be returned.
		 * @param {string} pageToken A page token, received from a previous `ListReservations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReservations` must match the call that provided the page token.
		 * @return {ListReservationsResponse} Successful response
		 */
		Pubsublite_admin_projects_locations_reservations_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListReservationsResponse> {
			return this.http.get<ListReservationsResponse>(this.baseUri + 'v1/admin/' + (parent == null ? '' : encodeURIComponent(parent)) + '/reservations&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new reservation.
		 * Post v1/admin/{parent}/reservations
		 * @param {string} parent Required. The parent location in which to create the reservation. Structured like `projects/{project_number}/locations/{location}`.
		 * @param {string} reservationId Required. The ID to use for the reservation, which will become the final component of the reservation's name. This value is structured like: `my-reservation-name`.
		 * @return {Reservation} Successful response
		 */
		Pubsublite_admin_projects_locations_reservations_create(parent: string, reservationId: string | null | undefined, requestBody: Reservation): Observable<Reservation> {
			return this.http.post<Reservation>(this.baseUri + 'v1/admin/' + (parent == null ? '' : encodeURIComponent(parent)) + '/reservations&reservationId=' + (reservationId == null ? '' : encodeURIComponent(reservationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of subscriptions for the given project.
		 * Get v1/admin/{parent}/subscriptions
		 * @param {string} parent Required. The parent whose subscriptions are to be listed. Structured like `projects/{project_number}/locations/{location}`.
		 * @param {number} pageSize The maximum number of subscriptions to return. The service may return fewer than this value. If unset or zero, all subscriptions for the parent will be returned.
		 * @param {string} pageToken A page token, received from a previous `ListSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptions` must match the call that provided the page token.
		 * @return {ListSubscriptionsResponse} Successful response
		 */
		Pubsublite_admin_projects_locations_subscriptions_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSubscriptionsResponse> {
			return this.http.get<ListSubscriptionsResponse>(this.baseUri + 'v1/admin/' + (parent == null ? '' : encodeURIComponent(parent)) + '/subscriptions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new subscription.
		 * Post v1/admin/{parent}/subscriptions
		 * @param {string} parent Required. The parent location in which to create the subscription. Structured like `projects/{project_number}/locations/{location}`.
		 * @param {boolean} skipBacklog If true, the newly created subscription will only receive messages published after the subscription was created. Otherwise, the entire message backlog will be received on the subscription. Defaults to false.
		 * @param {string} subscriptionId Required. The ID to use for the subscription, which will become the final component of the subscription's name. This value is structured like: `my-sub-name`.
		 * @return {Subscription} Successful response
		 */
		Pubsublite_admin_projects_locations_subscriptions_create(parent: string, skipBacklog: boolean | null | undefined, subscriptionId: string | null | undefined, requestBody: Subscription): Observable<Subscription> {
			return this.http.post<Subscription>(this.baseUri + 'v1/admin/' + (parent == null ? '' : encodeURIComponent(parent)) + '/subscriptions&skipBacklog=' + skipBacklog + '&subscriptionId=' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of topics for the given project.
		 * Get v1/admin/{parent}/topics
		 * @param {string} parent Required. The parent whose topics are to be listed. Structured like `projects/{project_number}/locations/{location}`.
		 * @param {number} pageSize The maximum number of topics to return. The service may return fewer than this value. If unset or zero, all topics for the parent will be returned.
		 * @param {string} pageToken A page token, received from a previous `ListTopics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopics` must match the call that provided the page token.
		 * @return {ListTopicsResponse} Successful response
		 */
		Pubsublite_admin_projects_locations_topics_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTopicsResponse> {
			return this.http.get<ListTopicsResponse>(this.baseUri + 'v1/admin/' + (parent == null ? '' : encodeURIComponent(parent)) + '/topics&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new topic.
		 * Post v1/admin/{parent}/topics
		 * @param {string} parent Required. The parent location in which to create the topic. Structured like `projects/{project_number}/locations/{location}`.
		 * @param {string} topicId Required. The ID to use for the topic, which will become the final component of the topic's name. This value is structured like: `my-topic-name`.
		 * @return {Topic} Successful response
		 */
		Pubsublite_admin_projects_locations_topics_create(parent: string, topicId: string | null | undefined, requestBody: Topic): Observable<Topic> {
			return this.http.post<Topic>(this.baseUri + 'v1/admin/' + (parent == null ? '' : encodeURIComponent(parent)) + '/topics&topicId=' + (topicId == null ? '' : encodeURIComponent(topicId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all committed cursor information for a subscription.
		 * Get v1/cursor/{parent}/cursors
		 * @param {string} parent Required. The subscription for which to retrieve cursors. Structured like `projects/{project_number}/locations/{location}/subscriptions/{subscription_id}`.
		 * @param {number} pageSize The maximum number of cursors to return. The service may return fewer than this value. If unset or zero, all cursors for the parent will be returned.
		 * @param {string} pageToken A page token, received from a previous `ListPartitionCursors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPartitionCursors` must match the call that provided the page token.
		 * @return {ListPartitionCursorsResponse} Successful response
		 */
		Pubsublite_cursor_projects_locations_subscriptions_cursors_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPartitionCursorsResponse> {
			return this.http.get<ListPartitionCursorsResponse>(this.baseUri + 'v1/cursor/' + (parent == null ? '' : encodeURIComponent(parent)) + '/cursors&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Updates the committed cursor.
		 * Post v1/cursor/{subscription}:commitCursor
		 * @param {string} subscription The subscription for which to update the cursor.
		 * @return {CommitCursorResponse} Successful response
		 */
		Pubsublite_cursor_projects_locations_subscriptions_commitCursor(subscription: string, requestBody: CommitCursorRequest): Observable<CommitCursorResponse> {
			return this.http.post<CommitCursorResponse>(this.baseUri + 'v1/cursor/' + (subscription == null ? '' : encodeURIComponent(subscription)) + ':commitCursor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Compute the head cursor for the partition. The head cursor's offset is guaranteed to be less than or equal to all messages which have not yet been acknowledged as published, and greater than the offset of any message whose publish has already been acknowledged. It is zero if there have never been messages in the partition.
		 * Post v1/topicStats/{topic}:computeHeadCursor
		 * @param {string} topic Required. The topic for which we should compute the head cursor.
		 * @return {ComputeHeadCursorResponse} Successful response
		 */
		Pubsublite_topicStats_projects_locations_topics_computeHeadCursor(topic: string, requestBody: ComputeHeadCursorRequest): Observable<ComputeHeadCursorResponse> {
			return this.http.post<ComputeHeadCursorResponse>(this.baseUri + 'v1/topicStats/' + (topic == null ? '' : encodeURIComponent(topic)) + ':computeHeadCursor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Compute statistics about a range of messages in a given topic and partition.
		 * Post v1/topicStats/{topic}:computeMessageStats
		 * @param {string} topic Required. The topic for which we should compute message stats.
		 * @return {ComputeMessageStatsResponse} Successful response
		 */
		Pubsublite_topicStats_projects_locations_topics_computeMessageStats(topic: string, requestBody: ComputeMessageStatsRequest): Observable<ComputeMessageStatsResponse> {
			return this.http.post<ComputeMessageStatsResponse>(this.baseUri + 'v1/topicStats/' + (topic == null ? '' : encodeURIComponent(topic)) + ':computeMessageStats', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Compute the corresponding cursor for a publish or event time in a topic partition.
		 * Post v1/topicStats/{topic}:computeTimeCursor
		 * @param {string} topic Required. The topic for which we should compute the cursor.
		 * @return {ComputeTimeCursorResponse} Successful response
		 */
		Pubsublite_topicStats_projects_locations_topics_computeTimeCursor(topic: string, requestBody: ComputeTimeCursorRequest): Observable<ComputeTimeCursorResponse> {
			return this.http.post<ComputeTimeCursorResponse>(this.baseUri + 'v1/topicStats/' + (topic == null ? '' : encodeURIComponent(topic)) + ':computeTimeCursor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

