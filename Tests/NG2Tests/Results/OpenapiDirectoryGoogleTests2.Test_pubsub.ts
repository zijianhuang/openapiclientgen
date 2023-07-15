import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Request for the Acknowledge method. */
	export interface AcknowledgeRequest {

		/**
		 * Required. The acknowledgment ID for the messages being acknowledged that was returned
		 * by the Pub/Sub system in the `Pull` response. Must not be empty.
		 */
		ackIds?: Array<string>;
	}


	/** Associates `members` with a `role`. */
	export interface Binding {

		/**
		 * Represents a textual expression in the Common Expression Language (CEL)
		 * syntax. CEL is a C-like expression language. The syntax and semantics of CEL
		 * are documented at https://github.com/google/cel-spec.
		 * Example (Comparison):
		 * title: "Summary size limit"
		 * description: "Determines if a summary is less than 100 chars"
		 * expression: "document.summary.size() < 100"
		 * Example (Equality):
		 * title: "Requestor is owner"
		 * description: "Determines if requestor is the document owner"
		 * expression: "document.owner == request.auth.claims.email"
		 * Example (Logic):
		 * title: "Public documents"
		 * description: "Determine whether the document should be publicly visible"
		 * expression: "document.type != 'private' && document.type != 'internal'"
		 * Example (Data Manipulation):
		 * title: "Notification string"
		 * description: "Create a notification string with a timestamp."
		 * expression: "'New message received at ' + string(document.create_time)"
		 * The exact variables and functions that may be referenced within an expression
		 * are determined by the service that evaluates it. See the service
		 * documentation for additional information.
		 */
		condition?: Expr;

		/**
		 * Specifies the identities requesting access for a Cloud Platform resource.
		 * `members` can have the following values:
		 * * `allUsers`: A special identifier that represents anyone who is
		 * on the internet; with or without a Google account.
		 * * `allAuthenticatedUsers`: A special identifier that represents anyone
		 * who is authenticated with a Google account or a service account.
		 * * `user:{emailid}`: An email address that represents a specific Google
		 * account. For example, `alice@example.com` .
		 * * `serviceAccount:{emailid}`: An email address that represents a service
		 * account. For example, `my-other-app@appspot.gserviceaccount.com`.
		 * * `group:{emailid}`: An email address that represents a Google group.
		 * For example, `admins@example.com`.
		 * * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique
		 * identifier) representing a user that has been recently deleted. For
		 * example, `alice@example.com?uid=123456789012345678901`. If the user is
		 * recovered, this value reverts to `user:{emailid}` and the recovered user
		 * retains the role in the binding.
		 * * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus
		 * unique identifier) representing a service account that has been recently
		 * deleted. For example,
		 * `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`.
		 * If the service account is undeleted, this value reverts to
		 * `serviceAccount:{emailid}` and the undeleted service account retains the
		 * role in the binding.
		 * * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique
		 * identifier) representing a Google group that has been recently
		 * deleted. For example, `admins@example.com?uid=123456789012345678901`. If
		 * the group is recovered, this value reverts to `group:{emailid}` and the
		 * recovered group retains the role in the binding.
		 * * `domain:{domain}`: The G Suite domain (primary) that represents all the
		 * users of that domain. For example, `google.com` or `example.com`.
		 */
		members?: Array<string>;

		/**
		 * Role that is assigned to `members`.
		 * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
		 */
		role?: string;
	}


	/**
	 * Represents a textual expression in the Common Expression Language (CEL)
	 * syntax. CEL is a C-like expression language. The syntax and semantics of CEL
	 * are documented at https://github.com/google/cel-spec.
	 * Example (Comparison):
	 *     title: "Summary size limit"
	 *     description: "Determines if a summary is less than 100 chars"
	 *     expression: "document.summary.size() < 100"
	 * Example (Equality):
	 *     title: "Requestor is owner"
	 *     description: "Determines if requestor is the document owner"
	 *     expression: "document.owner == request.auth.claims.email"
	 * Example (Logic):
	 *     title: "Public documents"
	 *     description: "Determine whether the document should be publicly visible"
	 *     expression: "document.type != 'private' && document.type != 'internal'"
	 * Example (Data Manipulation):
	 *     title: "Notification string"
	 *     description: "Create a notification string with a timestamp."
	 *     expression: "'New message received at ' + string(document.create_time)"
	 * The exact variables and functions that may be referenced within an expression
	 * are determined by the service that evaluates it. See the service
	 * documentation for additional information.
	 */
	export interface Expr {

		/**
		 * Optional. Description of the expression. This is a longer text which
		 * describes the expression, e.g. when hovered over it in a UI.
		 */
		description?: string;

		/**
		 * Textual representation of an expression in Common Expression Language
		 * syntax.
		 */
		expression?: string;

		/**
		 * Optional. String indicating the location of the expression for error
		 * reporting, e.g. a file name and a position in the file.
		 */
		location?: string;

		/**
		 * Optional. Title for the expression, i.e. a short string describing
		 * its purpose. This can be used e.g. in UIs which allow to enter the
		 * expression.
		 */
		title?: string;
	}


	/** Request for the `CreateSnapshot` method. */
	export interface CreateSnapshotRequest {

		/**
		 * See <a href="https://cloud.google.com/pubsub/docs/labels"> Creating and
		 * managing labels</a>.
		 */
		labels?: {[id: string]: string };

		/**
		 * Required. The subscription whose backlog the snapshot retains.
		 * Specifically, the created snapshot is guaranteed to retain:
		 * (a) The existing backlog on the subscription. More precisely, this is
		 * defined as the messages in the subscription's backlog that are
		 * unacknowledged upon the successful completion of the
		 * `CreateSnapshot` request; as well as:
		 * (b) Any messages published to the subscription's topic following the
		 * successful completion of the CreateSnapshot request.
		 * Format is `projects/{project}/subscriptions/{sub}`.
		 */
		subscription?: string;
	}


	/**
	 * Dead lettering is done on a best effort basis. The same message might be
	 * dead lettered multiple times.
	 * If validation on any of the fields fails at subscription creation/updation,
	 * the create/update subscription request will fail.
	 */
	export interface DeadLetterPolicy {

		/**
		 * The name of the topic to which dead letter messages should be published.
		 * Format is `projects/{project}/topics/{topic}`.The Cloud Pub/Sub service
		 * account associated with the enclosing subscription's parent project (i.e.,
		 * service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have
		 * permission to Publish() to this topic.
		 * The operation will fail if the topic does not exist.
		 * Users should ensure that there is a subscription attached to this topic
		 * since messages published to a topic with no subscriptions are lost.
		 */
		deadLetterTopic?: string;

		/**
		 * The maximum number of delivery attempts for any message. The value must be
		 * between 5 and 100.
		 * The number of delivery attempts is defined as 1 + (the sum of number of
		 * NACKs and number of times the acknowledgement deadline has been exceeded
		 * for the message).
		 * A NACK is any call to ModifyAckDeadline with a 0 deadline. Note that
		 * client libraries may automatically extend ack_deadlines.
		 * This field will be honored on a best effort basis.
		 * If this parameter is 0, a default value of 5 is used.
		 */
		maxDeliveryAttempts?: number;
	}


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}


	/**
	 * A policy that specifies the conditions for resource expiration (i.e.,
	 * automatic resource deletion).
	 */
	export interface ExpirationPolicy {

		/**
		 * Specifies the "time-to-live" duration for an associated resource. The
		 * resource expires if it is not active for a period of `ttl`. The definition
		 * of "activity" depends on the type of the associated resource. The minimum
		 * and maximum allowed values for `ttl` depend on the type of the associated
		 * resource, as well. If `ttl` is not set, the associated resource never
		 * expires.
		 */
		ttl?: string;
	}


	/** Response for the `ListSnapshots` method. */
	export interface ListSnapshotsResponse {

		/**
		 * If not empty, indicates that there may be more snapshot that match the
		 * request; this value should be passed in a new `ListSnapshotsRequest`.
		 */
		nextPageToken?: string;

		/** The resulting snapshots. */
		snapshots?: Array<Snapshot>;
	}


	/**
	 * A snapshot resource. Snapshots are used in
	 * <a href="https://cloud.google.com/pubsub/docs/replay-overview">Seek</a>
	 * operations, which allow
	 * you to manage message acknowledgments in bulk. That is, you can set the
	 * acknowledgment state of messages in an existing subscription to the state
	 * captured by a snapshot.
	 */
	export interface Snapshot {

		/**
		 * The snapshot is guaranteed to exist up until this time.
		 * A newly-created snapshot expires no later than 7 days from the time of its
		 * creation. Its exact lifetime is determined at creation by the existing
		 * backlog in the source subscription. Specifically, the lifetime of the
		 * snapshot is `7 days - (age of oldest unacked message in the subscription)`.
		 * For example, consider a subscription whose oldest unacked message is 3 days
		 * old. If a snapshot is created from this subscription, the snapshot -- which
		 * will always capture this 3-day-old backlog as long as the snapshot
		 * exists -- will expire in 4 days. The service will refuse to create a
		 * snapshot that would expire in less than 1 hour after creation.
		 */
		expireTime?: string;

		/**
		 * See <a href="https://cloud.google.com/pubsub/docs/labels"> Creating and
		 * managing labels</a>.
		 */
		labels?: {[id: string]: string };

		/** The name of the snapshot. */
		name?: string;

		/** The name of the topic from which this snapshot is retaining messages. */
		topic?: string;
	}


	/** Response for the `ListSubscriptions` method. */
	export interface ListSubscriptionsResponse {

		/**
		 * If not empty, indicates that there may be more subscriptions that match
		 * the request; this value should be passed in a new
		 * `ListSubscriptionsRequest` to get more subscriptions.
		 */
		nextPageToken?: string;

		/** The subscriptions that match the request. */
		subscriptions?: Array<Subscription>;
	}


	/** A subscription resource. */
	export interface Subscription {

		/**
		 * The approximate amount of time (on a best-effort basis) Pub/Sub waits for
		 * the subscriber to acknowledge receipt before resending the message. In the
		 * interval after the message is delivered and before it is acknowledged, it
		 * is considered to be <i>outstanding</i>. During that time period, the
		 * message will not be redelivered (on a best-effort basis).
		 * For pull subscriptions, this value is used as the initial value for the ack
		 * deadline. To override this value for a given message, call
		 * `ModifyAckDeadline` with the corresponding `ack_id` if using
		 * non-streaming pull or send the `ack_id` in a
		 * `StreamingModifyAckDeadlineRequest` if using streaming pull.
		 * The minimum custom deadline you can specify is 10 seconds.
		 * The maximum custom deadline you can specify is 600 seconds (10 minutes).
		 * If this parameter is 0, a default value of 10 seconds is used.
		 * For push delivery, this value is also used to set the request timeout for
		 * the call to the push endpoint.
		 * If the subscriber never acknowledges the message, the Pub/Sub
		 * system will eventually redeliver the message.
		 */
		ackDeadlineSeconds?: number;

		/**
		 * Dead lettering is done on a best effort basis. The same message might be
		 * dead lettered multiple times.
		 * If validation on any of the fields fails at subscription creation/updation,
		 * the create/update subscription request will fail.
		 */
		deadLetterPolicy?: DeadLetterPolicy;

		/**
		 * A policy that specifies the conditions for resource expiration (i.e.,
		 * automatic resource deletion).
		 */
		expirationPolicy?: ExpirationPolicy;

		/**
		 * See <a href="https://cloud.google.com/pubsub/docs/labels"> Creating and
		 * managing labels</a>.
		 */
		labels?: {[id: string]: string };

		/**
		 * How long to retain unacknowledged messages in the subscription's backlog,
		 * from the moment a message is published.
		 * If `retain_acked_messages` is true, then this also configures the retention
		 * of acknowledged messages, and thus configures how far back in time a `Seek`
		 * can be done. Defaults to 7 days. Cannot be more than 7 days or less than 10
		 * minutes.
		 */
		messageRetentionDuration?: string;

		/**
		 * Required. The name of the subscription. It must have the format
		 * `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must
		 * start with a letter, and contain only letters (`[A-Za-z]`), numbers
		 * (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`),
		 * plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters
		 * in length, and it must not start with `"goog"`.
		 */
		name?: string;

		/** Configuration for a push delivery endpoint. */
		pushConfig?: PushConfig;

		/**
		 * Indicates whether to retain acknowledged messages. If true, then
		 * messages are not expunged from the subscription's backlog, even if they are
		 * acknowledged, until they fall out of the `message_retention_duration`
		 * window. This must be true if you would like to
		 * <a
		 * href="https://cloud.google.com/pubsub/docs/replay-overview#seek_to_a_time">
		 * Seek to a timestamp</a>.
		 */
		retainAckedMessages?: boolean;

		/**
		 * Required. The name of the topic from which this subscription is receiving messages.
		 * Format is `projects/{project}/topics/{topic}`.
		 * The value of this field will be `_deleted-topic_` if the topic has been
		 * deleted.
		 */
		topic?: string;
	}


	/** Configuration for a push delivery endpoint. */
	export interface PushConfig {

		/**
		 * Endpoint configuration attributes that can be used to control different
		 * aspects of the message delivery.
		 * The only currently supported attribute is `x-goog-version`, which you can
		 * use to change the format of the pushed message. This attribute
		 * indicates the version of the data expected by the endpoint. This
		 * controls the shape of the pushed message (i.e., its fields and metadata).
		 * If not present during the `CreateSubscription` call, it will default to
		 * the version of the Pub/Sub API used to make such call. If not present in a
		 * `ModifyPushConfig` call, its value will not be changed. `GetSubscription`
		 * calls will always return a valid version, even if the subscription was
		 * created without this attribute.
		 * The only supported values for the `x-goog-version` attribute are:
		 * * `v1beta1`: uses the push format defined in the v1beta1 Pub/Sub API.
		 * * `v1` or `v1beta2`: uses the push format defined in the v1 Pub/Sub API.
		 * For example:
		 * <pre><code>attributes { "x-goog-version": "v1" } </code></pre>
		 */
		attributes?: {[id: string]: string };

		/**
		 * Contains information needed for generating an
		 * [OpenID Connect
		 * token](https://developers.google.com/identity/protocols/OpenIDConnect).
		 */
		oidcToken?: OidcToken;

		/**
		 * A URL locating the endpoint to which messages should be pushed.
		 * For example, a Webhook endpoint might use "https://example.com/push".
		 */
		pushEndpoint?: string;
	}


	/**
	 * Contains information needed for generating an
	 * [OpenID Connect
	 * token](https://developers.google.com/identity/protocols/OpenIDConnect).
	 */
	export interface OidcToken {

		/**
		 * Audience to be used when generating OIDC token. The audience claim
		 * identifies the recipients that the JWT is intended for. The audience
		 * value is a single case-sensitive string. Having multiple values (array)
		 * for the audience field is not supported. More info about the OIDC JWT
		 * token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3
		 * Note: if not specified, the Push endpoint URL will be used.
		 */
		audience?: string;

		/**
		 * [Service account
		 * email](https://cloud.google.com/iam/docs/service-accounts)
		 * to be used for generating the OIDC token. The caller (for
		 * CreateSubscription, UpdateSubscription, and ModifyPushConfig RPCs) must
		 * have the iam.serviceAccounts.actAs permission for the service account.
		 */
		serviceAccountEmail?: string;
	}


	/** Response for the `ListTopicSnapshots` method. */
	export interface ListTopicSnapshotsResponse {

		/**
		 * If not empty, indicates that there may be more snapshots that match
		 * the request; this value should be passed in a new
		 * `ListTopicSnapshotsRequest` to get more snapshots.
		 */
		nextPageToken?: string;

		/** The names of the snapshots that match the request. */
		snapshots?: Array<string>;
	}


	/** Response for the `ListTopicSubscriptions` method. */
	export interface ListTopicSubscriptionsResponse {

		/**
		 * If not empty, indicates that there may be more subscriptions that match
		 * the request; this value should be passed in a new
		 * `ListTopicSubscriptionsRequest` to get more subscriptions.
		 */
		nextPageToken?: string;

		/** The names of the subscriptions that match the request. */
		subscriptions?: Array<string>;
	}


	/** Response for the `ListTopics` method. */
	export interface ListTopicsResponse {

		/**
		 * If not empty, indicates that there may be more topics that match the
		 * request; this value should be passed in a new `ListTopicsRequest`.
		 */
		nextPageToken?: string;

		/** The resulting topics. */
		topics?: Array<Topic>;
	}


	/** A topic resource. */
	export interface Topic {

		/**
		 * The resource name of the Cloud KMS CryptoKey to be used to protect access
		 * to messages published on this topic.
		 * The expected format is `projects/locations/keyRings/cryptoKeys/*`.
		 */
		kmsKeyName?: string;

		/**
		 * See <a href="https://cloud.google.com/pubsub/docs/labels"> Creating and
		 * managing labels</a>.
		 */
		labels?: {[id: string]: string };
		messageStoragePolicy?: MessageStoragePolicy;

		/**
		 * Required. The name of the topic. It must have the format
		 * `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter,
		 * and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`),
		 * underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent
		 * signs (`%`). It must be between 3 and 255 characters in length, and it
		 * must not start with `"goog"`.
		 */
		name?: string;
	}

	export interface MessageStoragePolicy {

		/**
		 * A list of IDs of GCP regions where messages that are published to the topic
		 * may be persisted in storage. Messages published by publishers running in
		 * non-allowed GCP regions (or running outside of GCP altogether) will be
		 * routed for storage in one of the allowed regions. An empty list means that
		 * no regions are allowed, and is not a valid configuration.
		 */
		allowedPersistenceRegions?: Array<string>;
	}


	/** Request for the ModifyAckDeadline method. */
	export interface ModifyAckDeadlineRequest {

		/**
		 * Required. The new ack deadline with respect to the time this request was sent to
		 * the Pub/Sub system. For example, if the value is 10, the new
		 * ack deadline will expire 10 seconds after the `ModifyAckDeadline` call
		 * was made. Specifying zero might immediately make the message available for
		 * delivery to another subscriber client. This typically results in an
		 * increase in the rate of message redeliveries (that is, duplicates).
		 * The minimum deadline you can specify is 0 seconds.
		 * The maximum deadline you can specify is 600 seconds (10 minutes).
		 */
		ackDeadlineSeconds?: number;

		/** Required. List of acknowledgment IDs. */
		ackIds?: Array<string>;
	}


	/** Request for the ModifyPushConfig method. */
	export interface ModifyPushConfigRequest {

		/** Configuration for a push delivery endpoint. */
		pushConfig?: PushConfig;
	}


	/**
	 * An Identity and Access Management (IAM) policy, which specifies access
	 * controls for Google Cloud resources.
	 * A `Policy` is a collection of `bindings`. A `binding` binds one or more
	 * `members` to a single `role`. Members can be user accounts, service accounts,
	 * Google groups, and domains (such as G Suite). A `role` is a named list of
	 * permissions; each `role` can be an IAM predefined role or a user-created
	 * custom role.
	 * Optionally, a `binding` can specify a `condition`, which is a logical
	 * expression that allows access to a resource only if the expression evaluates
	 * to `true`. A condition can add constraints based on attributes of the
	 * request, the resource, or both.
	 * **JSON example:**
	 *     {
	 *       "bindings": [
	 *         {
	 *           "role": "roles/resourcemanager.organizationAdmin",
	 *           "members": [
	 *             "user:mike@example.com",
	 *             "group:admins@example.com",
	 *             "domain:google.com",
	 *             "serviceAccount:my-project-id@appspot.gserviceaccount.com"
	 *           ]
	 *         },
	 *         {
	 *           "role": "roles/resourcemanager.organizationViewer",
	 *           "members": ["user:eve@example.com"],
	 *           "condition": {
	 *             "title": "expirable access",
	 *             "description": "Does not grant access after Sep 2020",
	 *             "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')",
	 *           }
	 *         }
	 *       ],
	 *       "etag": "BwWWja0YfJA=",
	 *       "version": 3
	 *     }
	 * **YAML example:**
	 *     bindings:
	 *     - members:
	 *       - user:mike@example.com
	 *       - group:admins@example.com
	 *       - domain:google.com
	 *       - serviceAccount:my-project-id@appspot.gserviceaccount.com
	 *       role: roles/resourcemanager.organizationAdmin
	 *     - members:
	 *       - user:eve@example.com
	 *       role: roles/resourcemanager.organizationViewer
	 *       condition:
	 *         title: expirable access
	 *         description: Does not grant access after Sep 2020
	 *         expression: request.time < timestamp('2020-10-01T00:00:00.000Z')
	 *     - etag: BwWWja0YfJA=
	 *     - version: 3
	 * For a description of IAM and its features, see the
	 * [IAM documentation](https://cloud.google.com/iam/docs/).
	 */
	export interface Policy {

		/**
		 * Associates a list of `members` to a `role`. Optionally, may specify a
		 * `condition` that determines how and when the `bindings` are applied. Each
		 * of the `bindings` must contain at least one member.
		 */
		bindings?: Array<Binding>;

		/**
		 * `etag` is used for optimistic concurrency control as a way to help
		 * prevent simultaneous updates of a policy from overwriting each other.
		 * It is strongly suggested that systems make use of the `etag` in the
		 * read-modify-write cycle to perform policy updates in order to avoid race
		 * conditions: An `etag` is returned in the response to `getIamPolicy`, and
		 * systems are expected to put that etag in the request to `setIamPolicy` to
		 * ensure that their change will be applied to the same version of the policy.
		 * **Important:** If you use IAM Conditions, you must include the `etag` field
		 * whenever you call `setIamPolicy`. If you omit this field, then IAM allows
		 * you to overwrite a version `3` policy with a version `1` policy, and all of
		 * the conditions in the version `3` policy are lost.
		 */
		etag?: string;

		/**
		 * Specifies the format of the policy.
		 * Valid values are `0`, `1`, and `3`. Requests that specify an invalid value
		 * are rejected.
		 * Any operation that affects conditional role bindings must specify version
		 * `3`. This requirement applies to the following operations:
		 * * Getting a policy that includes a conditional role binding
		 * * Adding a conditional role binding to a policy
		 * * Changing a conditional role binding in a policy
		 * * Removing any role binding, with or without a condition, from a policy
		 * that includes conditions
		 * **Important:** If you use IAM Conditions, you must include the `etag` field
		 * whenever you call `setIamPolicy`. If you omit this field, then IAM allows
		 * you to overwrite a version `3` policy with a version `1` policy, and all of
		 * the conditions in the version `3` policy are lost.
		 * If a policy does not include any conditions, operations on that policy may
		 * specify any valid version or leave the field unset.
		 */
		version?: number;
	}


	/** Request for the Publish method. */
	export interface PublishRequest {

		/** Required. The messages to publish. */
		messages?: Array<PubsubMessage>;
	}


	/**
	 * A message that is published by publishers and consumed by subscribers. The
	 * message must contain either a non-empty data field or at least one attribute.
	 * Note that client libraries represent this object differently
	 * depending on the language. See the corresponding
	 * <a href="https://cloud.google.com/pubsub/docs/reference/libraries">client
	 * library documentation</a> for more information. See
	 * <a href="https://cloud.google.com/pubsub/quotas">Quotas and limits</a>
	 * for more information about message limits.
	 */
	export interface PubsubMessage {

		/**
		 * Attributes for this message. If this field is empty, the message must
		 * contain non-empty data.
		 */
		attributes?: {[id: string]: string };

		/**
		 * The message data field. If this field is empty, the message must contain
		 * at least one attribute.
		 */
		data?: string;

		/**
		 * ID of this message, assigned by the server when the message is published.
		 * Guaranteed to be unique within the topic. This value may be read by a
		 * subscriber that receives a `PubsubMessage` via a `Pull` call or a push
		 * delivery. It must not be populated by the publisher in a `Publish` call.
		 */
		messageId?: string;

		/**
		 * The time at which the message was published, populated by the server when
		 * it receives the `Publish` call. It must not be populated by the
		 * publisher in a `Publish` call.
		 */
		publishTime?: string;
	}


	/** Response for the `Publish` method. */
	export interface PublishResponse {

		/**
		 * The server-assigned ID of each published message, in the same order as
		 * the messages in the request. IDs are guaranteed to be unique within
		 * the topic.
		 */
		messageIds?: Array<string>;
	}


	/** Request for the `Pull` method. */
	export interface PullRequest {

		/**
		 * Required. The maximum number of messages to return for this request. Must be a
		 * positive integer. The Pub/Sub system may return fewer than the number
		 * specified.
		 */
		maxMessages?: number;

		/**
		 * Optional. If this field set to true, the system will respond immediately even if
		 * it there are no messages available to return in the `Pull` response.
		 * Otherwise, the system may wait (for a bounded amount of time) until at
		 * least one message is available, rather than returning no messages. Warning:
		 * setting this field to `true` is discouraged because it adversely impacts
		 * the performance of `Pull` operations. We recommend that users do not set
		 * this field.
		 */
		returnImmediately?: boolean;
	}


	/** Response for the `Pull` method. */
	export interface PullResponse {

		/**
		 * Received Pub/Sub messages. The list will be empty if there are no more
		 * messages available in the backlog. For JSON, the response can be entirely
		 * empty. The Pub/Sub system may return fewer than the `maxMessages` requested
		 * even if there are more messages available in the backlog.
		 */
		receivedMessages?: Array<ReceivedMessage>;
	}


	/** A message and its corresponding acknowledgment ID. */
	export interface ReceivedMessage {

		/** This ID can be used to acknowledge the received message. */
		ackId?: string;

		/**
		 * Delivery attempt counter is 1 + (the sum of number of NACKs and number of
		 * ack_deadline exceeds) for this message.
		 * A NACK is any call to ModifyAckDeadline with a 0 deadline. An ack_deadline
		 * exceeds event is whenever a message is not acknowledged within
		 * ack_deadline. Note that ack_deadline is initially
		 * Subscription.ackDeadlineSeconds, but may get extended automatically by
		 * the client library.
		 * The first delivery of a given message will have this value as 1. The value
		 * is calculated at best effort and is approximate.
		 * If a DeadLetterPolicy is not set on the subscription, this will be 0.
		 * <b>EXPERIMENTAL:</b> This feature is part of a closed alpha release. This
		 * API might be changed in backward-incompatible ways and is not recommended
		 * for production use. It is not subject to any SLA or deprecation policy.
		 */
		deliveryAttempt?: number;

		/**
		 * A message that is published by publishers and consumed by subscribers. The
		 * message must contain either a non-empty data field or at least one attribute.
		 * Note that client libraries represent this object differently
		 * depending on the language. See the corresponding
		 * <a href="https://cloud.google.com/pubsub/docs/reference/libraries">client
		 * library documentation</a> for more information. See
		 * <a href="https://cloud.google.com/pubsub/quotas">Quotas and limits</a>
		 * for more information about message limits.
		 */
		message?: PubsubMessage;
	}


	/** Request for the `Seek` method. */
	export interface SeekRequest {

		/**
		 * The snapshot to seek to. The snapshot's topic must be the same as that of
		 * the provided subscription.
		 * Format is `projects/{project}/snapshots/{snap}`.
		 */
		snapshot?: string;

		/**
		 * The time to seek to.
		 * Messages retained in the subscription that were published before this
		 * time are marked as acknowledged, and messages retained in the
		 * subscription that were published after this time are marked as
		 * unacknowledged. Note that this operation affects only those messages
		 * retained in the subscription (configured by the combination of
		 * `message_retention_duration` and `retain_acked_messages`). For example,
		 * if `time` corresponds to a point before the message retention
		 * window (or to a point before the system's notion of the subscription
		 * creation time), only retained messages will be marked as unacknowledged,
		 * and already-expunged messages will not be restored.
		 */
		time?: string;
	}


	/** Response for the `Seek` method (this response is empty). */
	export interface SeekResponse {
	}


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/**
		 * An Identity and Access Management (IAM) policy, which specifies access
		 * controls for Google Cloud resources.
		 * A `Policy` is a collection of `bindings`. A `binding` binds one or more
		 * `members` to a single `role`. Members can be user accounts, service accounts,
		 * Google groups, and domains (such as G Suite). A `role` is a named list of
		 * permissions; each `role` can be an IAM predefined role or a user-created
		 * custom role.
		 * Optionally, a `binding` can specify a `condition`, which is a logical
		 * expression that allows access to a resource only if the expression evaluates
		 * to `true`. A condition can add constraints based on attributes of the
		 * request, the resource, or both.
		 * **JSON example:**
		 * {
		 * "bindings": [
		 * {
		 * "role": "roles/resourcemanager.organizationAdmin",
		 * "members": [
		 * "user:mike@example.com",
		 * "group:admins@example.com",
		 * "domain:google.com",
		 * "serviceAccount:my-project-id@appspot.gserviceaccount.com"
		 * ]
		 * },
		 * {
		 * "role": "roles/resourcemanager.organizationViewer",
		 * "members": ["user:eve@example.com"],
		 * "condition": {
		 * "title": "expirable access",
		 * "description": "Does not grant access after Sep 2020",
		 * "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')",
		 * }
		 * }
		 * ],
		 * "etag": "BwWWja0YfJA=",
		 * "version": 3
		 * }
		 * **YAML example:**
		 * bindings:
		 * - members:
		 * - user:mike@example.com
		 * - group:admins@example.com
		 * - domain:google.com
		 * - serviceAccount:my-project-id@appspot.gserviceaccount.com
		 * role: roles/resourcemanager.organizationAdmin
		 * - members:
		 * - user:eve@example.com
		 * role: roles/resourcemanager.organizationViewer
		 * condition:
		 * title: expirable access
		 * description: Does not grant access after Sep 2020
		 * expression: request.time < timestamp('2020-10-01T00:00:00.000Z')
		 * - etag: BwWWja0YfJA=
		 * - version: 3
		 * For a description of IAM and its features, see the
		 * [IAM documentation](https://cloud.google.com/iam/docs/).
		 */
		policy?: Policy;
	}


	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequest {

		/**
		 * The set of permissions to check for the `resource`. Permissions with
		 * wildcards (such as '*' or 'storage.*') are not allowed. For more
		 * information see
		 * [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
		 */
		permissions?: Array<string>;
	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/**
		 * A subset of `TestPermissionsRequest.permissions` that the caller is
		 * allowed.
		 */
		permissions?: Array<string>;
	}


	/** Request for the UpdateSnapshot method. */
	export interface UpdateSnapshotRequest {

		/**
		 * A snapshot resource. Snapshots are used in
		 * <a href="https://cloud.google.com/pubsub/docs/replay-overview">Seek</a>
		 * operations, which allow
		 * you to manage message acknowledgments in bulk. That is, you can set the
		 * acknowledgment state of messages in an existing subscription to the state
		 * captured by a snapshot.
		 */
		snapshot?: Snapshot;

		/**
		 * Required. Indicates which fields in the provided snapshot to update.
		 * Must be specified and non-empty.
		 */
		updateMask?: string;
	}


	/** Request for the UpdateSubscription method. */
	export interface UpdateSubscriptionRequest {

		/** A subscription resource. */
		subscription?: Subscription;

		/**
		 * Required. Indicates which fields in the provided subscription to update.
		 * Must be specified and non-empty.
		 */
		updateMask?: string;
	}


	/** Request for the UpdateTopic method. */
	export interface UpdateTopicRequest {

		/** A topic resource. */
		topic?: Topic;

		/**
		 * Required. Indicates which fields in the provided topic to update. Must be specified
		 * and non-empty. Note that if `update_mask` contains
		 * "message_storage_policy" but the `message_storage_policy` is not set in
		 * the `topic` provided above, then the updated value is determined by the
		 * policy configured at the project or organization level.
		 */
		updateMask?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Updates an existing topic. Note that certain properties of a
		 * topic are not modifiable.
		 * Patch v1/{name}
		 * @param {string} name Required. The name of the topic. It must have the format
		 * `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter,
		 * and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`),
		 * underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent
		 * signs (`%`). It must be between 3 and 255 characters in length, and it
		 * must not start with `"goog"`.
		 * @return {void} Successful response
		 */
		Pubsub_projects_topics_patch(name: string, requestBody: UpdateTopicRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates the given topic with the given name. See the
		 * <a href="https://cloud.google.com/pubsub/docs/admin#resource_names">
		 * resource name rules</a>.
		 * Put v1/{name}
		 * @param {string} name Required. The name of the topic. It must have the format
		 * `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter,
		 * and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`),
		 * underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent
		 * signs (`%`). It must be between 3 and 255 characters in length, and it
		 * must not start with `"goog"`.
		 * @return {void} Successful response
		 */
		Pubsub_projects_topics_create(name: string, requestBody: Topic): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the existing snapshots. Snapshots are used in
		 * <a href="https://cloud.google.com/pubsub/docs/replay-overview">Seek</a>
		 * operations, which allow
		 * you to manage message acknowledgments in bulk. That is, you can set the
		 * acknowledgment state of messages in an existing subscription to the state
		 * captured by a snapshot.
		 * Get v1/{project}/snapshots
		 * @param {string} project Required. The name of the project in which to list snapshots.
		 * Format is `projects/{project-id}`.
		 * @param {number} pageSize Maximum number of snapshots to return.
		 * @param {string} pageToken The value returned by the last `ListSnapshotsResponse`; indicates that this
		 * is a continuation of a prior `ListSnapshots` call, and that the system
		 * should return the next page of data.
		 * @return {void} Successful response
		 */
		Pubsub_projects_snapshots_list(project: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (project == null ? '' : encodeURIComponent(project)) + '/snapshots&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists matching subscriptions.
		 * Get v1/{project}/subscriptions
		 * @param {string} project Required. The name of the project in which to list subscriptions.
		 * Format is `projects/{project-id}`.
		 * @param {number} pageSize Maximum number of subscriptions to return.
		 * @param {string} pageToken The value returned by the last `ListSubscriptionsResponse`; indicates that
		 * this is a continuation of a prior `ListSubscriptions` call, and that the
		 * system should return the next page of data.
		 * @return {void} Successful response
		 */
		Pubsub_projects_subscriptions_list(project: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (project == null ? '' : encodeURIComponent(project)) + '/subscriptions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists matching topics.
		 * Get v1/{project}/topics
		 * @param {string} project Required. The name of the project in which to list topics.
		 * Format is `projects/{project-id}`.
		 * @param {number} pageSize Maximum number of topics to return.
		 * @param {string} pageToken The value returned by the last `ListTopicsResponse`; indicates that this is
		 * a continuation of a prior `ListTopics` call, and that the system should
		 * return the next page of data.
		 * @return {void} Successful response
		 */
		Pubsub_projects_topics_list(project: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (project == null ? '' : encodeURIComponent(project)) + '/topics&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the access control policy for a resource.
		 * Returns an empty policy if the resource exists and does not have a policy
		 * set.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested.
		 * See the operation documentation for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The policy format version to be returned.
		 * Valid values are 0, 1, and 3. Requests specifying an invalid value will be
		 * rejected.
		 * Requests for policies with any conditional bindings must specify version 3.
		 * Policies without any conditional bindings may specify any valid value or
		 * leave the field unset.
		 * @return {void} Successful response
		 */
		Pubsub_projects_topics_getIamPolicy(resource: string, options_requestedPolicyVersion: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any
		 * existing policy.
		 * Can return Public Errors: NOT_FOUND, INVALID_ARGUMENT and PERMISSION_DENIED
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Pubsub_projects_topics_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns permissions that a caller has on the specified resource.
		 * If the resource does not exist, this will return an empty set of
		 * permissions, not a NOT_FOUND error.
		 * Note: This operation is designed to be used for building permission-aware
		 * UIs and command-line tools, not for authorization checking. This operation
		 * may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Pubsub_projects_topics_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes an existing snapshot. Snapshots are used in
		 * <a href="https://cloud.google.com/pubsub/docs/replay-overview">Seek</a>
		 * operations, which allow
		 * you to manage message acknowledgments in bulk. That is, you can set the
		 * acknowledgment state of messages in an existing subscription to the state
		 * captured by a snapshot.<br><br>
		 * When the snapshot is deleted, all messages retained in the snapshot
		 * are immediately dropped. After a snapshot is deleted, a new one may be
		 * created with the same name, but the new one has no association with the old
		 * snapshot or its subscription, unless the same subscription is specified.
		 * Delete v1/{snapshot}
		 * @param {string} snapshot Required. The name of the snapshot to delete.
		 * Format is `projects/{project}/snapshots/{snap}`.
		 * @return {void} Successful response
		 */
		Pubsub_projects_snapshots_delete(snapshot: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (snapshot == null ? '' : encodeURIComponent(snapshot)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the configuration details of a snapshot. Snapshots are used in
		 * <a href="https://cloud.google.com/pubsub/docs/replay-overview">Seek</a>
		 * operations, which allow you to manage message acknowledgments in bulk. That
		 * is, you can set the acknowledgment state of messages in an existing
		 * subscription to the state captured by a snapshot.
		 * Get v1/{snapshot}
		 * @param {string} snapshot Required. The name of the snapshot to get.
		 * Format is `projects/{project}/snapshots/{snap}`.
		 * @return {void} Successful response
		 */
		Pubsub_projects_snapshots_get(snapshot: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (snapshot == null ? '' : encodeURIComponent(snapshot)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an existing subscription. All messages retained in the subscription
		 * are immediately dropped. Calls to `Pull` after deletion will return
		 * `NOT_FOUND`. After a subscription is deleted, a new one may be created with
		 * the same name, but the new one has no association with the old
		 * subscription or its topic unless the same topic is specified.
		 * Delete v1/{subscription}
		 * @param {string} subscription Required. The subscription to delete.
		 * Format is `projects/{project}/subscriptions/{sub}`.
		 * @return {void} Successful response
		 */
		Pubsub_projects_subscriptions_delete(subscription: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (subscription == null ? '' : encodeURIComponent(subscription)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the configuration details of a subscription.
		 * Get v1/{subscription}
		 * @param {string} subscription Required. The name of the subscription to get.
		 * Format is `projects/{project}/subscriptions/{sub}`.
		 * @return {void} Successful response
		 */
		Pubsub_projects_subscriptions_get(subscription: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (subscription == null ? '' : encodeURIComponent(subscription)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Acknowledges the messages associated with the `ack_ids` in the
		 * `AcknowledgeRequest`. The Pub/Sub system can remove the relevant messages
		 * from the subscription.
		 * Acknowledging a message whose ack deadline has expired may succeed,
		 * but such a message may be redelivered later. Acknowledging a message more
		 * than once will not result in an error.
		 * Post v1/{subscription}:acknowledge
		 * @param {string} subscription Required. The subscription whose message is being acknowledged.
		 * Format is `projects/{project}/subscriptions/{sub}`.
		 * @return {void} Successful response
		 */
		Pubsub_projects_subscriptions_acknowledge(subscription: string, requestBody: AcknowledgeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (subscription == null ? '' : encodeURIComponent(subscription)) + ':acknowledge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies the ack deadline for a specific message. This method is useful
		 * to indicate that more time is needed to process a message by the
		 * subscriber, or to make the message available for redelivery if the
		 * processing was interrupted. Note that this does not modify the
		 * subscription-level `ackDeadlineSeconds` used for subsequent messages.
		 * Post v1/{subscription}:modifyAckDeadline
		 * @param {string} subscription Required. The name of the subscription.
		 * Format is `projects/{project}/subscriptions/{sub}`.
		 * @return {void} Successful response
		 */
		Pubsub_projects_subscriptions_modifyAckDeadline(subscription: string, requestBody: ModifyAckDeadlineRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (subscription == null ? '' : encodeURIComponent(subscription)) + ':modifyAckDeadline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies the `PushConfig` for a specified subscription.
		 * This may be used to change a push subscription to a pull one (signified by
		 * an empty `PushConfig`) or vice versa, or change the endpoint URL and other
		 * attributes of a push subscription. Messages will accumulate for delivery
		 * continuously through the call regardless of changes to the `PushConfig`.
		 * Post v1/{subscription}:modifyPushConfig
		 * @param {string} subscription Required. The name of the subscription.
		 * Format is `projects/{project}/subscriptions/{sub}`.
		 * @return {void} Successful response
		 */
		Pubsub_projects_subscriptions_modifyPushConfig(subscription: string, requestBody: ModifyPushConfigRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (subscription == null ? '' : encodeURIComponent(subscription)) + ':modifyPushConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Pulls messages from the server. The server may return `UNAVAILABLE` if
		 * there are too many concurrent pull requests pending for the given
		 * subscription.
		 * Post v1/{subscription}:pull
		 * @param {string} subscription Required. The subscription from which messages should be pulled.
		 * Format is `projects/{project}/subscriptions/{sub}`.
		 * @return {void} Successful response
		 */
		Pubsub_projects_subscriptions_pull(subscription: string, requestBody: PullRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (subscription == null ? '' : encodeURIComponent(subscription)) + ':pull', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Seeks an existing subscription to a point in time or to a given snapshot,
		 * whichever is provided in the request. Snapshots are used in
		 * <a href="https://cloud.google.com/pubsub/docs/replay-overview">Seek</a>
		 * operations, which allow
		 * you to manage message acknowledgments in bulk. That is, you can set the
		 * acknowledgment state of messages in an existing subscription to the state
		 * captured by a snapshot. Note that both the subscription and the snapshot
		 * must be on the same topic.
		 * Post v1/{subscription}:seek
		 * @param {string} subscription Required. The subscription to affect.
		 * @return {void} Successful response
		 */
		Pubsub_projects_subscriptions_seek(subscription: string, requestBody: SeekRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (subscription == null ? '' : encodeURIComponent(subscription)) + ':seek', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the topic with the given name. Returns `NOT_FOUND` if the topic
		 * does not exist. After a topic is deleted, a new topic may be created with
		 * the same name; this is an entirely new topic with none of the old
		 * configuration or subscriptions. Existing subscriptions to this topic are
		 * not deleted, but their `topic` field is set to `_deleted-topic_`.
		 * Delete v1/{topic}
		 * @param {string} topic Required. Name of the topic to delete.
		 * Format is `projects/{project}/topics/{topic}`.
		 * @return {void} Successful response
		 */
		Pubsub_projects_topics_delete(topic: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (topic == null ? '' : encodeURIComponent(topic)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the configuration of a topic.
		 * Get v1/{topic}
		 * @param {string} topic Required. The name of the topic to get.
		 * Format is `projects/{project}/topics/{topic}`.
		 * @return {void} Successful response
		 */
		Pubsub_projects_topics_get(topic: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (topic == null ? '' : encodeURIComponent(topic)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the names of the snapshots on this topic. Snapshots are used in
		 * <a href="https://cloud.google.com/pubsub/docs/replay-overview">Seek</a>
		 * operations, which allow
		 * you to manage message acknowledgments in bulk. That is, you can set the
		 * acknowledgment state of messages in an existing subscription to the state
		 * captured by a snapshot.
		 * Get v1/{topic}/snapshots
		 * @param {string} topic Required. The name of the topic that snapshots are attached to.
		 * Format is `projects/{project}/topics/{topic}`.
		 * @param {number} pageSize Maximum number of snapshot names to return.
		 * @param {string} pageToken The value returned by the last `ListTopicSnapshotsResponse`; indicates
		 * that this is a continuation of a prior `ListTopicSnapshots` call, and
		 * that the system should return the next page of data.
		 * @return {void} Successful response
		 */
		Pubsub_projects_topics_snapshots_list(topic: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (topic == null ? '' : encodeURIComponent(topic)) + '/snapshots&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the names of the subscriptions on this topic.
		 * Get v1/{topic}/subscriptions
		 * @param {string} topic Required. The name of the topic that subscriptions are attached to.
		 * Format is `projects/{project}/topics/{topic}`.
		 * @param {number} pageSize Maximum number of subscription names to return.
		 * @param {string} pageToken The value returned by the last `ListTopicSubscriptionsResponse`; indicates
		 * that this is a continuation of a prior `ListTopicSubscriptions` call, and
		 * that the system should return the next page of data.
		 * @return {void} Successful response
		 */
		Pubsub_projects_topics_subscriptions_list(topic: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (topic == null ? '' : encodeURIComponent(topic)) + '/subscriptions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic
		 * does not exist.
		 * Post v1/{topic}:publish
		 * @param {string} topic Required. The messages in the request will be published on this topic.
		 * Format is `projects/{project}/topics/{topic}`.
		 * @return {void} Successful response
		 */
		Pubsub_projects_topics_publish(topic: string, requestBody: PublishRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (topic == null ? '' : encodeURIComponent(topic)) + ':publish', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

