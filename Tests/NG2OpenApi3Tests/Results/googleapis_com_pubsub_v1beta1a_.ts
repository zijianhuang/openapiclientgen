import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Request for the Acknowledge method. */
	export interface AcknowledgeRequest {

		/** The acknowledgment ID for the message being acknowledged. This was returned by the Pub/Sub system in the Pull response. */
		ackId?: Array<string>;

		/** The subscription whose message is being acknowledged. */
		subscription?: string | null;
	}

	/** Request for the Acknowledge method. */
	export interface AcknowledgeRequestFormProperties {

		/** The subscription whose message is being acknowledged. */
		subscription: FormControl<string | null | undefined>,
	}
	export function CreateAcknowledgeRequestFormGroup() {
		return new FormGroup<AcknowledgeRequestFormProperties>({
			subscription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An empty message that you can re-use to avoid defining duplicated empty messages in your project. A typical example is to use it as argument or the return value of a service API. For instance: service Foo { rpc Bar (proto2.Empty) returns (proto2.Empty) { }; }; BEGIN GOOGLE-INTERNAL The difference between this one and net/rpc/empty-message.proto is that 1) The generated message here is in proto2 C++ API. 2) The proto2.Empty has minimum dependencies (no message_set or net/rpc dependencies) END GOOGLE-INTERNAL */
	export interface Empty {
	}

	/** An empty message that you can re-use to avoid defining duplicated empty messages in your project. A typical example is to use it as argument or the return value of a service API. For instance: service Foo { rpc Bar (proto2.Empty) returns (proto2.Empty) { }; }; BEGIN GOOGLE-INTERNAL The difference between this one and net/rpc/empty-message.proto is that 1) The generated message here is in proto2 C++ API. 2) The proto2.Empty has minimum dependencies (no message_set or net/rpc dependencies) END GOOGLE-INTERNAL */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** A key-value pair applied to a given object. */
	export interface Label {

		/** The key of a label is a syntactically valid URL (as per RFC 1738) with the "scheme" and initial slashes omitted and with the additional restrictions noted below. Each key should be globally unique. The "host" portion is called the "namespace" and is not necessarily resolvable to a network endpoint. Instead, the namespace indicates what system or entity defines the semantics of the label. Namespaces do not restrict the set of objects to which a label may be associated. Keys are defined by the following grammar: key = hostname "/" kpath kpath = ksegment *[ "/" ksegment ] ksegment = alphadigit | *[ alphadigit | "-" | "_" | "." ] where "hostname" and "alphadigit" are defined as in RFC 1738. Example key: spanner.google.com/universe */
		key?: string | null;

		/** An integer value. */
		numValue?: string | null;

		/** A string value. */
		strValue?: string | null;
	}

	/** A key-value pair applied to a given object. */
	export interface LabelFormProperties {

		/** The key of a label is a syntactically valid URL (as per RFC 1738) with the "scheme" and initial slashes omitted and with the additional restrictions noted below. Each key should be globally unique. The "host" portion is called the "namespace" and is not necessarily resolvable to a network endpoint. Instead, the namespace indicates what system or entity defines the semantics of the label. Namespaces do not restrict the set of objects to which a label may be associated. Keys are defined by the following grammar: key = hostname "/" kpath kpath = ksegment *[ "/" ksegment ] ksegment = alphadigit | *[ alphadigit | "-" | "_" | "." ] where "hostname" and "alphadigit" are defined as in RFC 1738. Example key: spanner.google.com/universe */
		key: FormControl<string | null | undefined>,

		/** An integer value. */
		numValue: FormControl<string | null | undefined>,

		/** A string value. */
		strValue: FormControl<string | null | undefined>,
	}
	export function CreateLabelFormGroup() {
		return new FormGroup<LabelFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			numValue: new FormControl<string | null | undefined>(undefined),
			strValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the ListSubscriptions method. */
	export interface ListSubscriptionsResponse {

		/** If not empty, indicates that there are more subscriptions that match the request and this value should be passed to the next ListSubscriptionsRequest to continue. */
		nextPageToken?: string | null;

		/** The subscriptions that match the request. */
		subscription?: Array<Subscription>;
	}

	/** Response for the ListSubscriptions method. */
	export interface ListSubscriptionsResponseFormProperties {

		/** If not empty, indicates that there are more subscriptions that match the request and this value should be passed to the next ListSubscriptionsRequest to continue. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSubscriptionsResponseFormGroup() {
		return new FormGroup<ListSubscriptionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A subscription resource. */
	export interface Subscription {

		/** For either push or pull delivery, the value is the maximum time after a subscriber receives a message before the subscriber should acknowledge or Nack the message. If the Ack deadline for a message passes without an Ack or a Nack, the Pub/Sub system will eventually redeliver the message. If a subscriber acknowledges after the deadline, the Pub/Sub system may accept the Ack, but it is possible that the message has been already delivered again. Multiple Acks to the message are allowed and will succeed. For push delivery, this value is used to set the request timeout for the call to the push endpoint. For pull delivery, this value is used as the initial value for the Ack deadline. It may be overridden for each message using its corresponding ack_id with ModifyAckDeadline. While a message is outstanding (i.e. it has been delivered to a pull subscriber and the subscriber has not yet Acked or Nacked), the Pub/Sub system will not deliver that message to another pull subscriber (on a best-effort basis). */
		ackDeadlineSeconds?: number | null;

		/** Name of the subscription. */
		name?: string | null;

		/** Configuration for a push delivery endpoint. */
		pushConfig?: PushConfig;

		/** The name of the topic from which this subscription is receiving messages. */
		topic?: string | null;
	}

	/** A subscription resource. */
	export interface SubscriptionFormProperties {

		/** For either push or pull delivery, the value is the maximum time after a subscriber receives a message before the subscriber should acknowledge or Nack the message. If the Ack deadline for a message passes without an Ack or a Nack, the Pub/Sub system will eventually redeliver the message. If a subscriber acknowledges after the deadline, the Pub/Sub system may accept the Ack, but it is possible that the message has been already delivered again. Multiple Acks to the message are allowed and will succeed. For push delivery, this value is used to set the request timeout for the call to the push endpoint. For pull delivery, this value is used as the initial value for the Ack deadline. It may be overridden for each message using its corresponding ack_id with ModifyAckDeadline. While a message is outstanding (i.e. it has been delivered to a pull subscriber and the subscriber has not yet Acked or Nacked), the Pub/Sub system will not deliver that message to another pull subscriber (on a best-effort basis). */
		ackDeadlineSeconds: FormControl<number | null | undefined>,

		/** Name of the subscription. */
		name: FormControl<string | null | undefined>,

		/** The name of the topic from which this subscription is receiving messages. */
		topic: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			ackDeadlineSeconds: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for a push delivery endpoint. */
	export interface PushConfig {

		/** A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use "https://example.com/push". */
		pushEndpoint?: string | null;
	}

	/** Configuration for a push delivery endpoint. */
	export interface PushConfigFormProperties {

		/** A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use "https://example.com/push". */
		pushEndpoint: FormControl<string | null | undefined>,
	}
	export function CreatePushConfigFormGroup() {
		return new FormGroup<PushConfigFormProperties>({
			pushEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the ListTopics method. */
	export interface ListTopicsResponse {

		/** If not empty, indicates that there are more topics that match the request, and this value should be passed to the next ListTopicsRequest to continue. */
		nextPageToken?: string | null;

		/** The resulting topics. */
		topic?: Array<Topic>;
	}

	/** Response for the ListTopics method. */
	export interface ListTopicsResponseFormProperties {

		/** If not empty, indicates that there are more topics that match the request, and this value should be passed to the next ListTopicsRequest to continue. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTopicsResponseFormGroup() {
		return new FormGroup<ListTopicsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A topic resource. */
	export interface Topic {

		/** Name of the topic. */
		name?: string | null;
	}

	/** A topic resource. */
	export interface TopicFormProperties {

		/** Name of the topic. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTopicFormGroup() {
		return new FormGroup<TopicFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for the ModifyAckDeadline method. */
	export interface ModifyAckDeadlineRequest {

		/** The new ack deadline with respect to the time this request was sent to the Pub/Sub system. Must be >= 0. For example, if the value is 10, the new ack deadline will expire 10 seconds after the ModifyAckDeadline call was made. Specifying zero may immediately make the message available for another pull request. */
		ackDeadlineSeconds?: number | null;

		/** The acknowledgment ID. Either this or ack_ids must be populated, not both. */
		ackId?: string | null;

		/** List of acknowledgment IDs. Either this field or ack_id should be populated, not both. */
		ackIds?: Array<string>;

		/** Next Index: 5 The name of the subscription from which messages are being pulled. */
		subscription?: string | null;
	}

	/** Request for the ModifyAckDeadline method. */
	export interface ModifyAckDeadlineRequestFormProperties {

		/** The new ack deadline with respect to the time this request was sent to the Pub/Sub system. Must be >= 0. For example, if the value is 10, the new ack deadline will expire 10 seconds after the ModifyAckDeadline call was made. Specifying zero may immediately make the message available for another pull request. */
		ackDeadlineSeconds: FormControl<number | null | undefined>,

		/** The acknowledgment ID. Either this or ack_ids must be populated, not both. */
		ackId: FormControl<string | null | undefined>,

		/** Next Index: 5 The name of the subscription from which messages are being pulled. */
		subscription: FormControl<string | null | undefined>,
	}
	export function CreateModifyAckDeadlineRequestFormGroup() {
		return new FormGroup<ModifyAckDeadlineRequestFormProperties>({
			ackDeadlineSeconds: new FormControl<number | null | undefined>(undefined),
			ackId: new FormControl<string | null | undefined>(undefined),
			subscription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for the ModifyPushConfig method. */
	export interface ModifyPushConfigRequest {

		/** Configuration for a push delivery endpoint. */
		pushConfig?: PushConfig;

		/** The name of the subscription. */
		subscription?: string | null;
	}

	/** Request for the ModifyPushConfig method. */
	export interface ModifyPushConfigRequestFormProperties {

		/** The name of the subscription. */
		subscription: FormControl<string | null | undefined>,
	}
	export function CreateModifyPushConfigRequestFormGroup() {
		return new FormGroup<ModifyPushConfigRequestFormProperties>({
			subscription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for the PublishBatch method. */
	export interface PublishBatchRequest {

		/** The messages to publish. */
		messages?: Array<PubsubMessage>;

		/** The messages in the request will be published on this topic. */
		topic?: string | null;
	}

	/** Request for the PublishBatch method. */
	export interface PublishBatchRequestFormProperties {

		/** The messages in the request will be published on this topic. */
		topic: FormControl<string | null | undefined>,
	}
	export function CreatePublishBatchRequestFormGroup() {
		return new FormGroup<PublishBatchRequestFormProperties>({
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A message data and its labels. */
	export interface PubsubMessage {

		/** The message payload. */
		data?: string | null;

		/** Optional list of labels for this message. Keys in this collection must be unique. */
		label?: Array<Label>;

		/** ID of this message assigned by the server at publication time. Guaranteed to be unique within the topic. This value may be read by a subscriber that receives a PubsubMessage via a Pull call or a push delivery. It must not be populated by a publisher in a Publish call. */
		messageId?: string | null;

		/** The time at which the message was published. The time is milliseconds since the UNIX epoch. */
		publishTime?: string | null;
	}

	/** A message data and its labels. */
	export interface PubsubMessageFormProperties {

		/** The message payload. */
		data: FormControl<string | null | undefined>,

		/** ID of this message assigned by the server at publication time. Guaranteed to be unique within the topic. This value may be read by a subscriber that receives a PubsubMessage via a Pull call or a push delivery. It must not be populated by a publisher in a Publish call. */
		messageId: FormControl<string | null | undefined>,

		/** The time at which the message was published. The time is milliseconds since the UNIX epoch. */
		publishTime: FormControl<string | null | undefined>,
	}
	export function CreatePubsubMessageFormGroup() {
		return new FormGroup<PubsubMessageFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			messageId: new FormControl<string | null | undefined>(undefined),
			publishTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the PublishBatch method. */
	export interface PublishBatchResponse {

		/** The server-assigned ID of each published message, in the same order as the messages in the request. IDs are guaranteed to be unique within the topic. */
		messageIds?: Array<string>;
	}

	/** Response for the PublishBatch method. */
	export interface PublishBatchResponseFormProperties {
	}
	export function CreatePublishBatchResponseFormGroup() {
		return new FormGroup<PublishBatchResponseFormProperties>({
		});

	}


	/** Request for the Publish method. */
	export interface PublishRequest {

		/** A message data and its labels. */
		message?: PubsubMessage;

		/** The message in the request will be published on this topic. */
		topic?: string | null;
	}

	/** Request for the Publish method. */
	export interface PublishRequestFormProperties {

		/** The message in the request will be published on this topic. */
		topic: FormControl<string | null | undefined>,
	}
	export function CreatePublishRequestFormGroup() {
		return new FormGroup<PublishRequestFormProperties>({
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event indicating a received message or truncation event. */
	export interface PubsubEvent {

		/** Indicates that this subscription has been deleted. (Note that pull subscribers will always receive NOT_FOUND in response in their pull request on the subscription, rather than seeing this boolean.) */
		deleted?: boolean | null;

		/** A message data and its labels. */
		message?: PubsubMessage;

		/** The subscription that received the event. */
		subscription?: string | null;

		/** Indicates that this subscription has been truncated. */
		truncated?: boolean | null;
	}

	/** An event indicating a received message or truncation event. */
	export interface PubsubEventFormProperties {

		/** Indicates that this subscription has been deleted. (Note that pull subscribers will always receive NOT_FOUND in response in their pull request on the subscription, rather than seeing this boolean.) */
		deleted: FormControl<boolean | null | undefined>,

		/** The subscription that received the event. */
		subscription: FormControl<string | null | undefined>,

		/** Indicates that this subscription has been truncated. */
		truncated: FormControl<boolean | null | undefined>,
	}
	export function CreatePubsubEventFormGroup() {
		return new FormGroup<PubsubEventFormProperties>({
			deleted: new FormControl<boolean | null | undefined>(undefined),
			subscription: new FormControl<string | null | undefined>(undefined),
			truncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request for the PullBatch method. */
	export interface PullBatchRequest {

		/** The maximum number of PubsubEvents returned for this request. The Pub/Sub system may return fewer than the number of events specified. */
		maxEvents?: number | null;

		/** If this is specified as true the system will respond immediately even if it is not able to return a message in the Pull response. Otherwise the system is allowed to wait until at least one message is available rather than returning no messages. The client may cancel the request if it does not wish to wait any longer for the response. */
		returnImmediately?: boolean | null;

		/** The subscription from which messages should be pulled. */
		subscription?: string | null;
	}

	/** Request for the PullBatch method. */
	export interface PullBatchRequestFormProperties {

		/** The maximum number of PubsubEvents returned for this request. The Pub/Sub system may return fewer than the number of events specified. */
		maxEvents: FormControl<number | null | undefined>,

		/** If this is specified as true the system will respond immediately even if it is not able to return a message in the Pull response. Otherwise the system is allowed to wait until at least one message is available rather than returning no messages. The client may cancel the request if it does not wish to wait any longer for the response. */
		returnImmediately: FormControl<boolean | null | undefined>,

		/** The subscription from which messages should be pulled. */
		subscription: FormControl<string | null | undefined>,
	}
	export function CreatePullBatchRequestFormGroup() {
		return new FormGroup<PullBatchRequestFormProperties>({
			maxEvents: new FormControl<number | null | undefined>(undefined),
			returnImmediately: new FormControl<boolean | null | undefined>(undefined),
			subscription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the PullBatch method. */
	export interface PullBatchResponse {

		/** Received Pub/Sub messages or status events. The Pub/Sub system will return zero messages if there are no more messages available in the backlog. The Pub/Sub system may return fewer than the max_events requested even if there are more messages available in the backlog. */
		pullResponses?: Array<PullResponse>;
	}

	/** Response for the PullBatch method. */
	export interface PullBatchResponseFormProperties {
	}
	export function CreatePullBatchResponseFormGroup() {
		return new FormGroup<PullBatchResponseFormProperties>({
		});

	}


	/** Either a PubsubMessage or a truncation event. One of these two must be populated. */
	export interface PullResponse {

		/** This ID must be used to acknowledge the received event or message. */
		ackId?: string | null;

		/** An event indicating a received message or truncation event. */
		pubsubEvent?: PubsubEvent;
	}

	/** Either a PubsubMessage or a truncation event. One of these two must be populated. */
	export interface PullResponseFormProperties {

		/** This ID must be used to acknowledge the received event or message. */
		ackId: FormControl<string | null | undefined>,
	}
	export function CreatePullResponseFormGroup() {
		return new FormGroup<PullResponseFormProperties>({
			ackId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for the Pull method. */
	export interface PullRequest {

		/** If this is specified as true the system will respond immediately even if it is not able to return a message in the Pull response. Otherwise the system is allowed to wait until at least one message is available rather than returning FAILED_PRECONDITION. The client may cancel the request if it does not wish to wait any longer for the response. */
		returnImmediately?: boolean | null;

		/** The subscription from which a message should be pulled. */
		subscription?: string | null;
	}

	/** Request for the Pull method. */
	export interface PullRequestFormProperties {

		/** If this is specified as true the system will respond immediately even if it is not able to return a message in the Pull response. Otherwise the system is allowed to wait until at least one message is available rather than returning FAILED_PRECONDITION. The client may cancel the request if it does not wish to wait any longer for the response. */
		returnImmediately: FormControl<boolean | null | undefined>,

		/** The subscription from which a message should be pulled. */
		subscription: FormControl<string | null | undefined>,
	}
	export function CreatePullRequestFormGroup() {
		return new FormGroup<PullRequestFormProperties>({
			returnImmediately: new FormControl<boolean | null | undefined>(undefined),
			subscription: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists matching subscriptions.
		 * Get v1beta1a/subscriptions
		 * @param {number} maxResults Maximum number of subscriptions to return.
		 * @param {string} pageToken The value obtained in the last ListSubscriptionsResponse for continuation.
		 * @param {string} query A valid label query expression.
		 * @return {ListSubscriptionsResponse} Successful response
		 */
		Pubsub_subscriptions_list(maxResults: number | null | undefined, pageToken: string | null | undefined, query: string | null | undefined): Observable<ListSubscriptionsResponse> {
			return this.http.get<ListSubscriptionsResponse>(this.baseUri + 'v1beta1a/subscriptions?maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * Creates a subscription on a given topic for a given subscriber. If the subscription already exists, returns ALREADY_EXISTS. If the corresponding topic doesn't exist, returns NOT_FOUND. If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic.
		 * Post v1beta1a/subscriptions
		 * @return {Subscription} Successful response
		 */
		Pubsub_subscriptions_create(requestBody: Subscription): Observable<Subscription> {
			return this.http.post<Subscription>(this.baseUri + 'v1beta1a/subscriptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Acknowledges a particular received message: the Pub/Sub system can remove the given message from the subscription. Acknowledging a message whose Ack deadline has expired may succeed, but the message could have been already redelivered. Acknowledging a message more than once will not result in an error. This is only used for messages received via pull.
		 * Post v1beta1a/subscriptions/acknowledge
		 * @return {Empty} Successful response
		 */
		Pubsub_subscriptions_acknowledge(requestBody: AcknowledgeRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta1a/subscriptions/acknowledge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the Ack deadline for a message received from a pull request.
		 * Post v1beta1a/subscriptions/modifyAckDeadline
		 * @return {Empty} Successful response
		 */
		Pubsub_subscriptions_modifyAckDeadline(requestBody: ModifyAckDeadlineRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta1a/subscriptions/modifyAckDeadline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the PushConfig for a specified subscription. This method can be used to suspend the flow of messages to an endpoint by clearing the PushConfig field in the request. Messages will be accumulated for delivery even if no push configuration is defined or while the configuration is modified.
		 * Post v1beta1a/subscriptions/modifyPushConfig
		 * @return {Empty} Successful response
		 */
		Pubsub_subscriptions_modifyPushConfig(requestBody: ModifyPushConfigRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta1a/subscriptions/modifyPushConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Pulls a single message from the server. If return_immediately is true, and no messages are available in the subscription, this method returns FAILED_PRECONDITION. The system is free to return an UNAVAILABLE error if no messages are available in a reasonable amount of time (to reduce system load).
		 * Post v1beta1a/subscriptions/pull
		 * @return {PullResponse} Successful response
		 */
		Pubsub_subscriptions_pull(requestBody: PullRequest): Observable<PullResponse> {
			return this.http.post<PullResponse>(this.baseUri + 'v1beta1a/subscriptions/pull', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The system is free to return UNAVAILABLE if there are too many pull requests outstanding for the given subscription.
		 * Post v1beta1a/subscriptions/pullBatch
		 * @return {PullBatchResponse} Successful response
		 */
		Pubsub_subscriptions_pullBatch(requestBody: PullBatchRequest): Observable<PullBatchResponse> {
			return this.http.post<PullBatchResponse>(this.baseUri + 'v1beta1a/subscriptions/pullBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to Pull after deletion will return NOT_FOUND.
		 * Delete v1beta1a/subscriptions/{subscription}
		 * @param {string} subscription The subscription to delete.
		 * @return {Empty} Successful response
		 */
		Pubsub_subscriptions_delete(subscription: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1beta1a/subscriptions/' + (subscription == null ? '' : encodeURIComponent(subscription)), {});
		}

		/**
		 * Gets the configuration details of a subscription.
		 * Get v1beta1a/subscriptions/{subscription}
		 * @param {string} subscription The name of the subscription to get.
		 * @return {Subscription} Successful response
		 */
		Pubsub_subscriptions_get(subscription: string): Observable<Subscription> {
			return this.http.get<Subscription>(this.baseUri + 'v1beta1a/subscriptions/' + (subscription == null ? '' : encodeURIComponent(subscription)), {});
		}

		/**
		 * Lists matching topics.
		 * Get v1beta1a/topics
		 * @param {number} maxResults Maximum number of topics to return.
		 * @param {string} pageToken The value obtained in the last ListTopicsResponse for continuation.
		 * @param {string} query A valid label query expression.
		 * @return {ListTopicsResponse} Successful response
		 */
		Pubsub_topics_list(maxResults: number | null | undefined, pageToken: string | null | undefined, query: string | null | undefined): Observable<ListTopicsResponse> {
			return this.http.get<ListTopicsResponse>(this.baseUri + 'v1beta1a/topics?maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * Creates the given topic with the given name.
		 * Post v1beta1a/topics
		 * @return {Topic} Successful response
		 */
		Pubsub_topics_create(requestBody: Topic): Observable<Topic> {
			return this.http.post<Topic>(this.baseUri + 'v1beta1a/topics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a message to the topic. Returns NOT_FOUND if the topic does not exist.
		 * Post v1beta1a/topics/publish
		 * @return {Empty} Successful response
		 */
		Pubsub_topics_publish(requestBody: PublishRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta1a/topics/publish', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds one or more messages to the topic. Returns NOT_FOUND if the topic does not exist.
		 * Post v1beta1a/topics/publishBatch
		 * @return {PublishBatchResponse} Successful response
		 */
		Pubsub_topics_publishBatch(requestBody: PublishBatchRequest): Observable<PublishBatchResponse> {
			return this.http.post<PublishBatchResponse>(this.baseUri + 'v1beta1a/topics/publishBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the topic with the given name. Returns NOT_FOUND if the topic does not exist. After a topic is deleted, a new topic may be created with the same name.
		 * Delete v1beta1a/topics/{topic}
		 * @param {string} topic Name of the topic to delete.
		 * @return {Empty} Successful response
		 */
		Pubsub_topics_delete(topic: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1beta1a/topics/' + (topic == null ? '' : encodeURIComponent(topic)), {});
		}

		/**
		 * Gets the configuration of a topic. Since the topic only has the name attribute, this method is only useful to check the existence of a topic. If other attributes are added in the future, they will be returned here.
		 * Get v1beta1a/topics/{topic}
		 * @param {string} topic The name of the topic to get.
		 * @return {Topic} Successful response
		 */
		Pubsub_topics_get(topic: string): Observable<Topic> {
			return this.http.get<Topic>(this.baseUri + 'v1beta1a/topics/' + (topic == null ? '' : encodeURIComponent(topic)), {});
		}
	}

}

