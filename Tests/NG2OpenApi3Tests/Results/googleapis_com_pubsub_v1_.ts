import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Request for the Acknowledge method. */
	export interface AcknowledgeRequest {

		/** Required. The acknowledgment ID for the messages being acknowledged that was returned by the Pub/Sub system in the `Pull` response. Must not be empty. */
		ackIds?: Array<string>;
	}

	/** Request for the Acknowledge method. */
	export interface AcknowledgeRequestFormProperties {
	}
	export function CreateAcknowledgeRequestFormGroup() {
		return new FormGroup<AcknowledgeRequestFormProperties>({
		});

	}


	/** Configuration for writing message data in Avro format. Message payloads and metadata will be written to files as an Avro binary. */
	export interface AvroConfig {

		/** Optional. When true, write the subscription name, message_id, publish_time, attributes, and ordering_key as additional fields in the output. The subscription name, message_id, and publish_time fields are put in their own fields while all other message properties other than data (for example, an ordering_key, if present) are added as entries in the attributes map. */
		writeMetadata?: boolean | null;
	}

	/** Configuration for writing message data in Avro format. Message payloads and metadata will be written to files as an Avro binary. */
	export interface AvroConfigFormProperties {

		/** Optional. When true, write the subscription name, message_id, publish_time, attributes, and ordering_key as additional fields in the output. The subscription name, message_id, and publish_time fields are put in their own fields while all other message properties other than data (for example, an ordering_key, if present) are added as entries in the attributes map. */
		writeMetadata: FormControl<boolean | null | undefined>,
	}
	export function CreateAvroConfigFormGroup() {
		return new FormGroup<AvroConfigFormProperties>({
			writeMetadata: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for a BigQuery subscription. */
	export interface BigQueryConfig {

		/** Optional. When true and use_topic_schema is true, any fields that are a part of the topic schema that are not part of the BigQuery table schema are dropped when writing to BigQuery. Otherwise, the schemas must be kept in sync and any messages with extra fields are not written and remain in the subscription's backlog. */
		dropUnknownFields?: boolean | null;

		/** Output only. An output-only field that indicates whether or not the subscription can receive messages. */
		state?: BigQueryConfigState | null;

		/** Optional. The name of the table to which to write data, of the form {projectId}.{datasetId}.{tableId} */
		table?: string | null;

		/** Optional. When true, use the BigQuery table's schema as the columns to write to in BigQuery. `use_table_schema` and `use_topic_schema` cannot be enabled at the same time. */
		useTableSchema?: boolean | null;

		/** Optional. When true, use the topic's schema as the columns to write to in BigQuery, if it exists. `use_topic_schema` and `use_table_schema` cannot be enabled at the same time. */
		useTopicSchema?: boolean | null;

		/** Optional. When true, write the subscription name, message_id, publish_time, attributes, and ordering_key to additional columns in the table. The subscription name, message_id, and publish_time fields are put in their own columns while all other message properties (other than data) are written to a JSON object in the attributes column. */
		writeMetadata?: boolean | null;
	}

	/** Configuration for a BigQuery subscription. */
	export interface BigQueryConfigFormProperties {

		/** Optional. When true and use_topic_schema is true, any fields that are a part of the topic schema that are not part of the BigQuery table schema are dropped when writing to BigQuery. Otherwise, the schemas must be kept in sync and any messages with extra fields are not written and remain in the subscription's backlog. */
		dropUnknownFields: FormControl<boolean | null | undefined>,

		/** Output only. An output-only field that indicates whether or not the subscription can receive messages. */
		state: FormControl<BigQueryConfigState | null | undefined>,

		/** Optional. The name of the table to which to write data, of the form {projectId}.{datasetId}.{tableId} */
		table: FormControl<string | null | undefined>,

		/** Optional. When true, use the BigQuery table's schema as the columns to write to in BigQuery. `use_table_schema` and `use_topic_schema` cannot be enabled at the same time. */
		useTableSchema: FormControl<boolean | null | undefined>,

		/** Optional. When true, use the topic's schema as the columns to write to in BigQuery, if it exists. `use_topic_schema` and `use_table_schema` cannot be enabled at the same time. */
		useTopicSchema: FormControl<boolean | null | undefined>,

		/** Optional. When true, write the subscription name, message_id, publish_time, attributes, and ordering_key to additional columns in the table. The subscription name, message_id, and publish_time fields are put in their own columns while all other message properties (other than data) are written to a JSON object in the attributes column. */
		writeMetadata: FormControl<boolean | null | undefined>,
	}
	export function CreateBigQueryConfigFormGroup() {
		return new FormGroup<BigQueryConfigFormProperties>({
			dropUnknownFields: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<BigQueryConfigState | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			useTableSchema: new FormControl<boolean | null | undefined>(undefined),
			useTopicSchema: new FormControl<boolean | null | undefined>(undefined),
			writeMetadata: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum BigQueryConfigState { STATE_UNSPECIFIED = 0, ACTIVE = 1, PERMISSION_DENIED = 2, NOT_FOUND = 3, SCHEMA_MISMATCH = 4, IN_TRANSIT_LOCATION_RESTRICTION = 5 }


	/** Associates `members`, or principals, with a `role`. */
	export interface Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
		members?: Array<string>;

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role?: string | null;
	}

	/** Associates `members`, or principals, with a `role`. */
	export interface BindingFormProperties {

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateBindingFormGroup() {
		return new FormGroup<BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface Expr {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description?: string | null;

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression?: string | null;

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location?: string | null;

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title?: string | null;
	}

	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface ExprFormProperties {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description: FormControl<string | null | undefined>,

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression: FormControl<string | null | undefined>,

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location: FormControl<string | null | undefined>,

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateExprFormGroup() {
		return new FormGroup<ExprFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for a Cloud Storage subscription. */
	export interface CloudStorageConfig {

		/** Configuration for writing message data in Avro format. Message payloads and metadata will be written to files as an Avro binary. */
		avroConfig?: AvroConfig;

		/** Required. User-provided name for the Cloud Storage bucket. The bucket must be created by the user. The bucket name must be without any prefix like "gs://". See the [bucket naming requirements] (https://cloud.google.com/storage/docs/buckets#naming). */
		bucket?: string | null;

		/** Optional. User-provided prefix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming). */
		filenamePrefix?: string | null;

		/** Optional. User-provided suffix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming). Must not end in "/". */
		filenameSuffix?: string | null;

		/** Optional. The maximum bytes that can be written to a Cloud Storage file before a new file is created. Min 1 KB, max 10 GiB. The max_bytes limit may be exceeded in cases where messages are larger than the limit. */
		maxBytes?: string | null;

		/** Optional. The maximum duration that can elapse before a new Cloud Storage file is created. Min 1 minute, max 10 minutes, default 5 minutes. May not exceed the subscription's acknowledgement deadline. */
		maxDuration?: string | null;

		/** Output only. An output-only field that indicates whether or not the subscription can receive messages. */
		state?: CloudStorageConfigState | null;

		/** Configuration for writing message data in text format. Message payloads will be written to files as raw text, separated by a newline. */
		textConfig?: TextConfig;
	}

	/** Configuration for a Cloud Storage subscription. */
	export interface CloudStorageConfigFormProperties {

		/** Required. User-provided name for the Cloud Storage bucket. The bucket must be created by the user. The bucket name must be without any prefix like "gs://". See the [bucket naming requirements] (https://cloud.google.com/storage/docs/buckets#naming). */
		bucket: FormControl<string | null | undefined>,

		/** Optional. User-provided prefix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming). */
		filenamePrefix: FormControl<string | null | undefined>,

		/** Optional. User-provided suffix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming). Must not end in "/". */
		filenameSuffix: FormControl<string | null | undefined>,

		/** Optional. The maximum bytes that can be written to a Cloud Storage file before a new file is created. Min 1 KB, max 10 GiB. The max_bytes limit may be exceeded in cases where messages are larger than the limit. */
		maxBytes: FormControl<string | null | undefined>,

		/** Optional. The maximum duration that can elapse before a new Cloud Storage file is created. Min 1 minute, max 10 minutes, default 5 minutes. May not exceed the subscription's acknowledgement deadline. */
		maxDuration: FormControl<string | null | undefined>,

		/** Output only. An output-only field that indicates whether or not the subscription can receive messages. */
		state: FormControl<CloudStorageConfigState | null | undefined>,
	}
	export function CreateCloudStorageConfigFormGroup() {
		return new FormGroup<CloudStorageConfigFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			filenamePrefix: new FormControl<string | null | undefined>(undefined),
			filenameSuffix: new FormControl<string | null | undefined>(undefined),
			maxBytes: new FormControl<string | null | undefined>(undefined),
			maxDuration: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<CloudStorageConfigState | null | undefined>(undefined),
		});

	}

	export enum CloudStorageConfigState { STATE_UNSPECIFIED = 0, ACTIVE = 1, PERMISSION_DENIED = 2, NOT_FOUND = 3, IN_TRANSIT_LOCATION_RESTRICTION = 4 }


	/** Configuration for writing message data in text format. Message payloads will be written to files as raw text, separated by a newline. */
	export interface TextConfig {
	}

	/** Configuration for writing message data in text format. Message payloads will be written to files as raw text, separated by a newline. */
	export interface TextConfigFormProperties {
	}
	export function CreateTextConfigFormGroup() {
		return new FormGroup<TextConfigFormProperties>({
		});

	}


	/** Request for CommitSchema method. */
	export interface CommitSchemaRequest {

		/** A schema resource. */
		schema?: Schema;
	}

	/** Request for CommitSchema method. */
	export interface CommitSchemaRequestFormProperties {
	}
	export function CreateCommitSchemaRequestFormGroup() {
		return new FormGroup<CommitSchemaRequestFormProperties>({
		});

	}


	/** A schema resource. */
	export interface Schema {

		/** The definition of the schema. This should contain a string representing the full definition of the schema that is a valid schema definition of the type specified in `type`. */
		definition?: string | null;

		/** Required. Name of the schema. Format is `projects/{project}/schemas/{schema}`. */
		name?: string | null;

		/** Output only. The timestamp that the revision was created. */
		revisionCreateTime?: string | null;

		/** Output only. Immutable. The revision ID of the schema. */
		revisionId?: string | null;

		/** The type of the schema definition. */
		type?: SchemaType | null;
	}

	/** A schema resource. */
	export interface SchemaFormProperties {

		/** The definition of the schema. This should contain a string representing the full definition of the schema that is a valid schema definition of the type specified in `type`. */
		definition: FormControl<string | null | undefined>,

		/** Required. Name of the schema. Format is `projects/{project}/schemas/{schema}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The timestamp that the revision was created. */
		revisionCreateTime: FormControl<string | null | undefined>,

		/** Output only. Immutable. The revision ID of the schema. */
		revisionId: FormControl<string | null | undefined>,

		/** The type of the schema definition. */
		type: FormControl<SchemaType | null | undefined>,
	}
	export function CreateSchemaFormGroup() {
		return new FormGroup<SchemaFormProperties>({
			definition: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			revisionCreateTime: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SchemaType | null | undefined>(undefined),
		});

	}

	export enum SchemaType { TYPE_UNSPECIFIED = 0, PROTOCOL_BUFFER = 1, AVRO = 2 }


	/** Request for the `CreateSnapshot` method. */
	export interface CreateSnapshotRequest {

		/** Optional. See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels). */
		labels?: {[id: string]: string };

		/** Required. The subscription whose backlog the snapshot retains. Specifically, the created snapshot is guaranteed to retain: (a) The existing backlog on the subscription. More precisely, this is defined as the messages in the subscription's backlog that are unacknowledged upon the successful completion of the `CreateSnapshot` request; as well as: (b) Any messages published to the subscription's topic following the successful completion of the CreateSnapshot request. Format is `projects/{project}/subscriptions/{sub}`. */
		subscription?: string | null;
	}

	/** Request for the `CreateSnapshot` method. */
	export interface CreateSnapshotRequestFormProperties {

		/** Optional. See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels). */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The subscription whose backlog the snapshot retains. Specifically, the created snapshot is guaranteed to retain: (a) The existing backlog on the subscription. More precisely, this is defined as the messages in the subscription's backlog that are unacknowledged upon the successful completion of the `CreateSnapshot` request; as well as: (b) Any messages published to the subscription's topic following the successful completion of the CreateSnapshot request. Format is `projects/{project}/subscriptions/{sub}`. */
		subscription: FormControl<string | null | undefined>,
	}
	export function CreateCreateSnapshotRequestFormGroup() {
		return new FormGroup<CreateSnapshotRequestFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			subscription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dead lettering is done on a best effort basis. The same message might be dead lettered multiple times. If validation on any of the fields fails at subscription creation/updation, the create/update subscription request will fail. */
	export interface DeadLetterPolicy {

		/** Optional. The name of the topic to which dead letter messages should be published. Format is `projects/{project}/topics/{topic}`.The Pub/Sub service account associated with the enclosing subscription's parent project (i.e., service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Publish() to this topic. The operation will fail if the topic does not exist. Users should ensure that there is a subscription attached to this topic since messages published to a topic with no subscriptions are lost. */
		deadLetterTopic?: string | null;

		/** Optional. The maximum number of delivery attempts for any message. The value must be between 5 and 100. The number of delivery attempts is defined as 1 + (the sum of number of NACKs and number of times the acknowledgement deadline has been exceeded for the message). A NACK is any call to ModifyAckDeadline with a 0 deadline. Note that client libraries may automatically extend ack_deadlines. This field will be honored on a best effort basis. If this parameter is 0, a default value of 5 is used. */
		maxDeliveryAttempts?: number | null;
	}

	/** Dead lettering is done on a best effort basis. The same message might be dead lettered multiple times. If validation on any of the fields fails at subscription creation/updation, the create/update subscription request will fail. */
	export interface DeadLetterPolicyFormProperties {

		/** Optional. The name of the topic to which dead letter messages should be published. Format is `projects/{project}/topics/{topic}`.The Pub/Sub service account associated with the enclosing subscription's parent project (i.e., service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Publish() to this topic. The operation will fail if the topic does not exist. Users should ensure that there is a subscription attached to this topic since messages published to a topic with no subscriptions are lost. */
		deadLetterTopic: FormControl<string | null | undefined>,

		/** Optional. The maximum number of delivery attempts for any message. The value must be between 5 and 100. The number of delivery attempts is defined as 1 + (the sum of number of NACKs and number of times the acknowledgement deadline has been exceeded for the message). A NACK is any call to ModifyAckDeadline with a 0 deadline. Note that client libraries may automatically extend ack_deadlines. This field will be honored on a best effort basis. If this parameter is 0, a default value of 5 is used. */
		maxDeliveryAttempts: FormControl<number | null | undefined>,
	}
	export function CreateDeadLetterPolicyFormGroup() {
		return new FormGroup<DeadLetterPolicyFormProperties>({
			deadLetterTopic: new FormControl<string | null | undefined>(undefined),
			maxDeliveryAttempts: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response for the DetachSubscription method. Reserved for future use. */
	export interface DetachSubscriptionResponse {
	}

	/** Response for the DetachSubscription method. Reserved for future use. */
	export interface DetachSubscriptionResponseFormProperties {
	}
	export function CreateDetachSubscriptionResponseFormGroup() {
		return new FormGroup<DetachSubscriptionResponseFormProperties>({
		});

	}


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


	/** A policy that specifies the conditions for resource expiration (i.e., automatic resource deletion). */
	export interface ExpirationPolicy {

		/** Optional. Specifies the "time-to-live" duration for an associated resource. The resource expires if it is not active for a period of `ttl`. The definition of "activity" depends on the type of the associated resource. The minimum and maximum allowed values for `ttl` depend on the type of the associated resource, as well. If `ttl` is not set, the associated resource never expires. */
		ttl?: string | null;
	}

	/** A policy that specifies the conditions for resource expiration (i.e., automatic resource deletion). */
	export interface ExpirationPolicyFormProperties {

		/** Optional. Specifies the "time-to-live" duration for an associated resource. The resource expires if it is not active for a period of `ttl`. The definition of "activity" depends on the type of the associated resource. The minimum and maximum allowed values for `ttl` depend on the type of the associated resource, as well. If `ttl` is not set, the associated resource never expires. */
		ttl: FormControl<string | null | undefined>,
	}
	export function CreateExpirationPolicyFormGroup() {
		return new FormGroup<ExpirationPolicyFormProperties>({
			ttl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `ListSchemaRevisions` method. */
	export interface ListSchemaRevisionsResponse {

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The revisions of the schema. */
		schemas?: Array<Schema>;
	}

	/** Response for the `ListSchemaRevisions` method. */
	export interface ListSchemaRevisionsResponseFormProperties {

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSchemaRevisionsResponseFormGroup() {
		return new FormGroup<ListSchemaRevisionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `ListSchemas` method. */
	export interface ListSchemasResponse {

		/** If not empty, indicates that there may be more schemas that match the request; this value should be passed in a new `ListSchemasRequest`. */
		nextPageToken?: string | null;

		/** The resulting schemas. */
		schemas?: Array<Schema>;
	}

	/** Response for the `ListSchemas` method. */
	export interface ListSchemasResponseFormProperties {

		/** If not empty, indicates that there may be more schemas that match the request; this value should be passed in a new `ListSchemasRequest`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSchemasResponseFormGroup() {
		return new FormGroup<ListSchemasResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `ListSnapshots` method. */
	export interface ListSnapshotsResponse {

		/** Optional. If not empty, indicates that there may be more snapshot that match the request; this value should be passed in a new `ListSnapshotsRequest`. */
		nextPageToken?: string | null;

		/** Optional. The resulting snapshots. */
		snapshots?: Array<Snapshot>;
	}

	/** Response for the `ListSnapshots` method. */
	export interface ListSnapshotsResponseFormProperties {

		/** Optional. If not empty, indicates that there may be more snapshot that match the request; this value should be passed in a new `ListSnapshotsRequest`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSnapshotsResponseFormGroup() {
		return new FormGroup<ListSnapshotsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A snapshot resource. Snapshots are used in [Seek](https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot. */
	export interface Snapshot {

		/** Optional. The snapshot is guaranteed to exist up until this time. A newly-created snapshot expires no later than 7 days from the time of its creation. Its exact lifetime is determined at creation by the existing backlog in the source subscription. Specifically, the lifetime of the snapshot is `7 days - (age of oldest unacked message in the subscription)`. For example, consider a subscription whose oldest unacked message is 3 days old. If a snapshot is created from this subscription, the snapshot -- which will always capture this 3-day-old backlog as long as the snapshot exists -- will expire in 4 days. The service will refuse to create a snapshot that would expire in less than 1 hour after creation. */
		expireTime?: string | null;

		/** Optional. See [Creating and managing labels] (https://cloud.google.com/pubsub/docs/labels). */
		labels?: {[id: string]: string };

		/** Optional. The name of the snapshot. */
		name?: string | null;

		/** Optional. The name of the topic from which this snapshot is retaining messages. */
		topic?: string | null;
	}

	/** A snapshot resource. Snapshots are used in [Seek](https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot. */
	export interface SnapshotFormProperties {

		/** Optional. The snapshot is guaranteed to exist up until this time. A newly-created snapshot expires no later than 7 days from the time of its creation. Its exact lifetime is determined at creation by the existing backlog in the source subscription. Specifically, the lifetime of the snapshot is `7 days - (age of oldest unacked message in the subscription)`. For example, consider a subscription whose oldest unacked message is 3 days old. If a snapshot is created from this subscription, the snapshot -- which will always capture this 3-day-old backlog as long as the snapshot exists -- will expire in 4 days. The service will refuse to create a snapshot that would expire in less than 1 hour after creation. */
		expireTime: FormControl<string | null | undefined>,

		/** Optional. See [Creating and managing labels] (https://cloud.google.com/pubsub/docs/labels). */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The name of the snapshot. */
		name: FormControl<string | null | undefined>,

		/** Optional. The name of the topic from which this snapshot is retaining messages. */
		topic: FormControl<string | null | undefined>,
	}
	export function CreateSnapshotFormGroup() {
		return new FormGroup<SnapshotFormProperties>({
			expireTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `ListSubscriptions` method. */
	export interface ListSubscriptionsResponse {

		/** Optional. If not empty, indicates that there may be more subscriptions that match the request; this value should be passed in a new `ListSubscriptionsRequest` to get more subscriptions. */
		nextPageToken?: string | null;

		/** Optional. The subscriptions that match the request. */
		subscriptions?: Array<Subscription>;
	}

	/** Response for the `ListSubscriptions` method. */
	export interface ListSubscriptionsResponseFormProperties {

		/** Optional. If not empty, indicates that there may be more subscriptions that match the request; this value should be passed in a new `ListSubscriptionsRequest` to get more subscriptions. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSubscriptionsResponseFormGroup() {
		return new FormGroup<ListSubscriptionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A subscription resource. If none of `push_config`, `bigquery_config`, or `cloud_storage_config` is set, then the subscriber will pull and ack messages using API methods. At most one of these fields may be set. */
	export interface Subscription {

		/** Optional. The approximate amount of time (on a best-effort basis) Pub/Sub waits for the subscriber to acknowledge receipt before resending the message. In the interval after the message is delivered and before it is acknowledged, it is considered to be _outstanding_. During that time period, the message will not be redelivered (on a best-effort basis). For pull subscriptions, this value is used as the initial value for the ack deadline. To override this value for a given message, call `ModifyAckDeadline` with the corresponding `ack_id` if using non-streaming pull or send the `ack_id` in a `StreamingModifyAckDeadlineRequest` if using streaming pull. The minimum custom deadline you can specify is 10 seconds. The maximum custom deadline you can specify is 600 seconds (10 minutes). If this parameter is 0, a default value of 10 seconds is used. For push delivery, this value is also used to set the request timeout for the call to the push endpoint. If the subscriber never acknowledges the message, the Pub/Sub system will eventually redeliver the message. */
		ackDeadlineSeconds?: number | null;

		/** Configuration for a BigQuery subscription. */
		bigqueryConfig?: BigQueryConfig;

		/** Configuration for a Cloud Storage subscription. */
		cloudStorageConfig?: CloudStorageConfig;

		/** Dead lettering is done on a best effort basis. The same message might be dead lettered multiple times. If validation on any of the fields fails at subscription creation/updation, the create/update subscription request will fail. */
		deadLetterPolicy?: DeadLetterPolicy;

		/** Optional. Indicates whether the subscription is detached from its topic. Detached subscriptions don't receive messages from their topic and don't retain any backlog. `Pull` and `StreamingPull` requests will return FAILED_PRECONDITION. If the subscription is a push subscription, pushes to the endpoint will not be made. */
		detached?: boolean | null;

		/** Optional. If true, Pub/Sub provides the following guarantees for the delivery of a message with a given value of `message_id` on this subscription: * The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires. * An acknowledged message will not be resent to a subscriber. Note that subscribers may still receive multiple copies of a message when `enable_exactly_once_delivery` is true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct `message_id` values. */
		enableExactlyOnceDelivery?: boolean | null;

		/** Optional. If true, messages published with the same `ordering_key` in `PubsubMessage` will be delivered to the subscribers in the order in which they are received by the Pub/Sub system. Otherwise, they may be delivered in any order. */
		enableMessageOrdering?: boolean | null;

		/** A policy that specifies the conditions for resource expiration (i.e., automatic resource deletion). */
		expirationPolicy?: ExpirationPolicy;

		/** Optional. An expression written in the Pub/Sub [filter language](https://cloud.google.com/pubsub/docs/filtering). If non-empty, then only `PubsubMessage`s whose `attributes` field matches the filter are delivered on this subscription. If empty, then no messages are filtered out. */
		filter?: string | null;

		/** Optional. See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels). */
		labels?: {[id: string]: string };

		/** Optional. How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published. If `retain_acked_messages` is true, then this also configures the retention of acknowledged messages, and thus configures how far back in time a `Seek` can be done. Defaults to 7 days. Cannot be more than 7 days or less than 10 minutes. */
		messageRetentionDuration?: string | null;

		/** Required. The name of the subscription. It must have the format `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`. */
		name?: string | null;

		/** Configuration for a push delivery endpoint. */
		pushConfig?: PushConfig;

		/** Optional. Indicates whether to retain acknowledged messages. If true, then messages are not expunged from the subscription's backlog, even if they are acknowledged, until they fall out of the `message_retention_duration` window. This must be true if you would like to [`Seek` to a timestamp] (https://cloud.google.com/pubsub/docs/replay-overview#seek_to_a_time) in the past to replay previously-acknowledged messages. */
		retainAckedMessages?: boolean | null;

		/** A policy that specifies how Pub/Sub retries message delivery. Retry delay will be exponential based on provided minimum and maximum backoffs. https://en.wikipedia.org/wiki/Exponential_backoff. RetryPolicy will be triggered on NACKs or acknowledgement deadline exceeded events for a given message. Retry Policy is implemented on a best effort basis. At times, the delay between consecutive deliveries may not match the configuration. That is, delay can be more or less than configured backoff. */
		retryPolicy?: RetryPolicy;

		/** Output only. An output-only field indicating whether or not the subscription can receive messages. */
		state?: SubscriptionState | null;

		/** Required. The name of the topic from which this subscription is receiving messages. Format is `projects/{project}/topics/{topic}`. The value of this field will be `_deleted-topic_` if the topic has been deleted. */
		topic?: string | null;

		/** Output only. Indicates the minimum duration for which a message is retained after it is published to the subscription's topic. If this field is set, messages published to the subscription's topic in the last `topic_message_retention_duration` are always available to subscribers. See the `message_retention_duration` field in `Topic`. This field is set only in responses from the server; it is ignored if it is set in any requests. */
		topicMessageRetentionDuration?: string | null;
	}

	/** A subscription resource. If none of `push_config`, `bigquery_config`, or `cloud_storage_config` is set, then the subscriber will pull and ack messages using API methods. At most one of these fields may be set. */
	export interface SubscriptionFormProperties {

		/** Optional. The approximate amount of time (on a best-effort basis) Pub/Sub waits for the subscriber to acknowledge receipt before resending the message. In the interval after the message is delivered and before it is acknowledged, it is considered to be _outstanding_. During that time period, the message will not be redelivered (on a best-effort basis). For pull subscriptions, this value is used as the initial value for the ack deadline. To override this value for a given message, call `ModifyAckDeadline` with the corresponding `ack_id` if using non-streaming pull or send the `ack_id` in a `StreamingModifyAckDeadlineRequest` if using streaming pull. The minimum custom deadline you can specify is 10 seconds. The maximum custom deadline you can specify is 600 seconds (10 minutes). If this parameter is 0, a default value of 10 seconds is used. For push delivery, this value is also used to set the request timeout for the call to the push endpoint. If the subscriber never acknowledges the message, the Pub/Sub system will eventually redeliver the message. */
		ackDeadlineSeconds: FormControl<number | null | undefined>,

		/** Optional. Indicates whether the subscription is detached from its topic. Detached subscriptions don't receive messages from their topic and don't retain any backlog. `Pull` and `StreamingPull` requests will return FAILED_PRECONDITION. If the subscription is a push subscription, pushes to the endpoint will not be made. */
		detached: FormControl<boolean | null | undefined>,

		/** Optional. If true, Pub/Sub provides the following guarantees for the delivery of a message with a given value of `message_id` on this subscription: * The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires. * An acknowledged message will not be resent to a subscriber. Note that subscribers may still receive multiple copies of a message when `enable_exactly_once_delivery` is true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct `message_id` values. */
		enableExactlyOnceDelivery: FormControl<boolean | null | undefined>,

		/** Optional. If true, messages published with the same `ordering_key` in `PubsubMessage` will be delivered to the subscribers in the order in which they are received by the Pub/Sub system. Otherwise, they may be delivered in any order. */
		enableMessageOrdering: FormControl<boolean | null | undefined>,

		/** Optional. An expression written in the Pub/Sub [filter language](https://cloud.google.com/pubsub/docs/filtering). If non-empty, then only `PubsubMessage`s whose `attributes` field matches the filter are delivered on this subscription. If empty, then no messages are filtered out. */
		filter: FormControl<string | null | undefined>,

		/** Optional. See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels). */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published. If `retain_acked_messages` is true, then this also configures the retention of acknowledged messages, and thus configures how far back in time a `Seek` can be done. Defaults to 7 days. Cannot be more than 7 days or less than 10 minutes. */
		messageRetentionDuration: FormControl<string | null | undefined>,

		/** Required. The name of the subscription. It must have the format `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`. */
		name: FormControl<string | null | undefined>,

		/** Optional. Indicates whether to retain acknowledged messages. If true, then messages are not expunged from the subscription's backlog, even if they are acknowledged, until they fall out of the `message_retention_duration` window. This must be true if you would like to [`Seek` to a timestamp] (https://cloud.google.com/pubsub/docs/replay-overview#seek_to_a_time) in the past to replay previously-acknowledged messages. */
		retainAckedMessages: FormControl<boolean | null | undefined>,

		/** Output only. An output-only field indicating whether or not the subscription can receive messages. */
		state: FormControl<SubscriptionState | null | undefined>,

		/** Required. The name of the topic from which this subscription is receiving messages. Format is `projects/{project}/topics/{topic}`. The value of this field will be `_deleted-topic_` if the topic has been deleted. */
		topic: FormControl<string | null | undefined>,

		/** Output only. Indicates the minimum duration for which a message is retained after it is published to the subscription's topic. If this field is set, messages published to the subscription's topic in the last `topic_message_retention_duration` are always available to subscribers. See the `message_retention_duration` field in `Topic`. This field is set only in responses from the server; it is ignored if it is set in any requests. */
		topicMessageRetentionDuration: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			ackDeadlineSeconds: new FormControl<number | null | undefined>(undefined),
			detached: new FormControl<boolean | null | undefined>(undefined),
			enableExactlyOnceDelivery: new FormControl<boolean | null | undefined>(undefined),
			enableMessageOrdering: new FormControl<boolean | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			messageRetentionDuration: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			retainAckedMessages: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<SubscriptionState | null | undefined>(undefined),
			topic: new FormControl<string | null | undefined>(undefined),
			topicMessageRetentionDuration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for a push delivery endpoint. */
	export interface PushConfig {

		/** Optional. Endpoint configuration attributes that can be used to control different aspects of the message delivery. The only currently supported attribute is `x-goog-version`, which you can use to change the format of the pushed message. This attribute indicates the version of the data expected by the endpoint. This controls the shape of the pushed message (i.e., its fields and metadata). If not present during the `CreateSubscription` call, it will default to the version of the Pub/Sub API used to make such call. If not present in a `ModifyPushConfig` call, its value will not be changed. `GetSubscription` calls will always return a valid version, even if the subscription was created without this attribute. The only supported values for the `x-goog-version` attribute are: * `v1beta1`: uses the push format defined in the v1beta1 Pub/Sub API. * `v1` or `v1beta2`: uses the push format defined in the v1 Pub/Sub API. For example: `attributes { "x-goog-version": "v1" }` */
		attributes?: {[id: string]: string };

		/** Sets the `data` field as the HTTP body for delivery. */
		noWrapper?: NoWrapper;

		/** Contains information needed for generating an [OpenID Connect token](https://developers.google.com/identity/protocols/OpenIDConnect). */
		oidcToken?: OidcToken;

		/** The payload to the push endpoint is in the form of the JSON representation of a PubsubMessage (https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#pubsubmessage). */
		pubsubWrapper?: PubsubWrapper;

		/** Optional. A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use `https://example.com/push`. */
		pushEndpoint?: string | null;
	}

	/** Configuration for a push delivery endpoint. */
	export interface PushConfigFormProperties {

		/** Optional. Endpoint configuration attributes that can be used to control different aspects of the message delivery. The only currently supported attribute is `x-goog-version`, which you can use to change the format of the pushed message. This attribute indicates the version of the data expected by the endpoint. This controls the shape of the pushed message (i.e., its fields and metadata). If not present during the `CreateSubscription` call, it will default to the version of the Pub/Sub API used to make such call. If not present in a `ModifyPushConfig` call, its value will not be changed. `GetSubscription` calls will always return a valid version, even if the subscription was created without this attribute. The only supported values for the `x-goog-version` attribute are: * `v1beta1`: uses the push format defined in the v1beta1 Pub/Sub API. * `v1` or `v1beta2`: uses the push format defined in the v1 Pub/Sub API. For example: `attributes { "x-goog-version": "v1" }` */
		attributes: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use `https://example.com/push`. */
		pushEndpoint: FormControl<string | null | undefined>,
	}
	export function CreatePushConfigFormGroup() {
		return new FormGroup<PushConfigFormProperties>({
			attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			pushEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sets the `data` field as the HTTP body for delivery. */
	export interface NoWrapper {

		/** Optional. When true, writes the Pub/Sub message metadata to `x-goog-pubsub-:` headers of the HTTP request. Writes the Pub/Sub message attributes to `:` headers of the HTTP request. */
		writeMetadata?: boolean | null;
	}

	/** Sets the `data` field as the HTTP body for delivery. */
	export interface NoWrapperFormProperties {

		/** Optional. When true, writes the Pub/Sub message metadata to `x-goog-pubsub-:` headers of the HTTP request. Writes the Pub/Sub message attributes to `:` headers of the HTTP request. */
		writeMetadata: FormControl<boolean | null | undefined>,
	}
	export function CreateNoWrapperFormGroup() {
		return new FormGroup<NoWrapperFormProperties>({
			writeMetadata: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information needed for generating an [OpenID Connect token](https://developers.google.com/identity/protocols/OpenIDConnect). */
	export interface OidcToken {

		/** Optional. Audience to be used when generating OIDC token. The audience claim identifies the recipients that the JWT is intended for. The audience value is a single case-sensitive string. Having multiple values (array) for the audience field is not supported. More info about the OIDC JWT token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3 Note: if not specified, the Push endpoint URL will be used. */
		audience?: string | null;

		/** Optional. [Service account email](https://cloud.google.com/iam/docs/service-accounts) used for generating the OIDC token. For more information on setting up authentication, see [Push subscriptions](https://cloud.google.com/pubsub/docs/push). */
		serviceAccountEmail?: string | null;
	}

	/** Contains information needed for generating an [OpenID Connect token](https://developers.google.com/identity/protocols/OpenIDConnect). */
	export interface OidcTokenFormProperties {

		/** Optional. Audience to be used when generating OIDC token. The audience claim identifies the recipients that the JWT is intended for. The audience value is a single case-sensitive string. Having multiple values (array) for the audience field is not supported. More info about the OIDC JWT token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3 Note: if not specified, the Push endpoint URL will be used. */
		audience: FormControl<string | null | undefined>,

		/** Optional. [Service account email](https://cloud.google.com/iam/docs/service-accounts) used for generating the OIDC token. For more information on setting up authentication, see [Push subscriptions](https://cloud.google.com/pubsub/docs/push). */
		serviceAccountEmail: FormControl<string | null | undefined>,
	}
	export function CreateOidcTokenFormGroup() {
		return new FormGroup<OidcTokenFormProperties>({
			audience: new FormControl<string | null | undefined>(undefined),
			serviceAccountEmail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The payload to the push endpoint is in the form of the JSON representation of a PubsubMessage (https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#pubsubmessage). */
	export interface PubsubWrapper {
	}

	/** The payload to the push endpoint is in the form of the JSON representation of a PubsubMessage (https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#pubsubmessage). */
	export interface PubsubWrapperFormProperties {
	}
	export function CreatePubsubWrapperFormGroup() {
		return new FormGroup<PubsubWrapperFormProperties>({
		});

	}


	/** A policy that specifies how Pub/Sub retries message delivery. Retry delay will be exponential based on provided minimum and maximum backoffs. https://en.wikipedia.org/wiki/Exponential_backoff. RetryPolicy will be triggered on NACKs or acknowledgement deadline exceeded events for a given message. Retry Policy is implemented on a best effort basis. At times, the delay between consecutive deliveries may not match the configuration. That is, delay can be more or less than configured backoff. */
	export interface RetryPolicy {

		/** Optional. The maximum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 600 seconds. */
		maximumBackoff?: string | null;

		/** Optional. The minimum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 10 seconds. */
		minimumBackoff?: string | null;
	}

	/** A policy that specifies how Pub/Sub retries message delivery. Retry delay will be exponential based on provided minimum and maximum backoffs. https://en.wikipedia.org/wiki/Exponential_backoff. RetryPolicy will be triggered on NACKs or acknowledgement deadline exceeded events for a given message. Retry Policy is implemented on a best effort basis. At times, the delay between consecutive deliveries may not match the configuration. That is, delay can be more or less than configured backoff. */
	export interface RetryPolicyFormProperties {

		/** Optional. The maximum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 600 seconds. */
		maximumBackoff: FormControl<string | null | undefined>,

		/** Optional. The minimum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 10 seconds. */
		minimumBackoff: FormControl<string | null | undefined>,
	}
	export function CreateRetryPolicyFormGroup() {
		return new FormGroup<RetryPolicyFormProperties>({
			maximumBackoff: new FormControl<string | null | undefined>(undefined),
			minimumBackoff: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SubscriptionState { STATE_UNSPECIFIED = 0, ACTIVE = 1, RESOURCE_ERROR = 2 }


	/** Response for the `ListTopicSnapshots` method. */
	export interface ListTopicSnapshotsResponse {

		/** Optional. If not empty, indicates that there may be more snapshots that match the request; this value should be passed in a new `ListTopicSnapshotsRequest` to get more snapshots. */
		nextPageToken?: string | null;

		/** Optional. The names of the snapshots that match the request. */
		snapshots?: Array<string>;
	}

	/** Response for the `ListTopicSnapshots` method. */
	export interface ListTopicSnapshotsResponseFormProperties {

		/** Optional. If not empty, indicates that there may be more snapshots that match the request; this value should be passed in a new `ListTopicSnapshotsRequest` to get more snapshots. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTopicSnapshotsResponseFormGroup() {
		return new FormGroup<ListTopicSnapshotsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `ListTopicSubscriptions` method. */
	export interface ListTopicSubscriptionsResponse {

		/** Optional. If not empty, indicates that there may be more subscriptions that match the request; this value should be passed in a new `ListTopicSubscriptionsRequest` to get more subscriptions. */
		nextPageToken?: string | null;

		/** Optional. The names of subscriptions attached to the topic specified in the request. */
		subscriptions?: Array<string>;
	}

	/** Response for the `ListTopicSubscriptions` method. */
	export interface ListTopicSubscriptionsResponseFormProperties {

		/** Optional. If not empty, indicates that there may be more subscriptions that match the request; this value should be passed in a new `ListTopicSubscriptionsRequest` to get more subscriptions. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTopicSubscriptionsResponseFormGroup() {
		return new FormGroup<ListTopicSubscriptionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `ListTopics` method. */
	export interface ListTopicsResponse {

		/** Optional. If not empty, indicates that there may be more topics that match the request; this value should be passed in a new `ListTopicsRequest`. */
		nextPageToken?: string | null;

		/** Optional. The resulting topics. */
		topics?: Array<Topic>;
	}

	/** Response for the `ListTopics` method. */
	export interface ListTopicsResponseFormProperties {

		/** Optional. If not empty, indicates that there may be more topics that match the request; this value should be passed in a new `ListTopicsRequest`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTopicsResponseFormGroup() {
		return new FormGroup<ListTopicsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A topic resource. */
	export interface Topic {

		/** Optional. The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic. The expected format is `projects/locations/keyRings/cryptoKeys/*`. */
		kmsKeyName?: string | null;

		/** Optional. See [Creating and managing labels] (https://cloud.google.com/pubsub/docs/labels). */
		labels?: {[id: string]: string };

		/** Optional. Indicates the minimum duration to retain a message after it is published to the topic. If this field is set, messages published to the topic in the last `message_retention_duration` are always available to subscribers. For instance, it allows any attached subscription to [seek to a timestamp](https://cloud.google.com/pubsub/docs/replay-overview#seek_to_a_time) that is up to `message_retention_duration` in the past. If this field is not set, message retention is controlled by settings on individual subscriptions. Cannot be more than 31 days or less than 10 minutes. */
		messageRetentionDuration?: string | null;

		/** A policy constraining the storage of messages published to the topic. */
		messageStoragePolicy?: MessageStoragePolicy;

		/** Required. The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`. */
		name?: string | null;

		/** Optional. Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests. */
		satisfiesPzs?: boolean | null;

		/** Settings for validating messages published against a schema. */
		schemaSettings?: SchemaSettings;
	}

	/** A topic resource. */
	export interface TopicFormProperties {

		/** Optional. The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic. The expected format is `projects/locations/keyRings/cryptoKeys/*`. */
		kmsKeyName: FormControl<string | null | undefined>,

		/** Optional. See [Creating and managing labels] (https://cloud.google.com/pubsub/docs/labels). */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Indicates the minimum duration to retain a message after it is published to the topic. If this field is set, messages published to the topic in the last `message_retention_duration` are always available to subscribers. For instance, it allows any attached subscription to [seek to a timestamp](https://cloud.google.com/pubsub/docs/replay-overview#seek_to_a_time) that is up to `message_retention_duration` in the past. If this field is not set, message retention is controlled by settings on individual subscriptions. Cannot be more than 31 days or less than 10 minutes. */
		messageRetentionDuration: FormControl<string | null | undefined>,

		/** Required. The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`. */
		name: FormControl<string | null | undefined>,

		/** Optional. Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests. */
		satisfiesPzs: FormControl<boolean | null | undefined>,
	}
	export function CreateTopicFormGroup() {
		return new FormGroup<TopicFormProperties>({
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			messageRetentionDuration: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			satisfiesPzs: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A policy constraining the storage of messages published to the topic. */
	export interface MessageStoragePolicy {

		/** Optional. A list of IDs of Google Cloud regions where messages that are published to the topic may be persisted in storage. Messages published by publishers running in non-allowed Google Cloud regions (or running outside of Google Cloud altogether) are routed for storage in one of the allowed regions. An empty list means that no regions are allowed, and is not a valid configuration. */
		allowedPersistenceRegions?: Array<string>;

		/** Optional. If true, `allowed_persistence_regions` is also used to enforce in-transit guarantees for messages. That is, Pub/Sub will fail Publish operations on this topic and subscribe operations on any subscription attached to this topic in any region that is not in `allowed_persistence_regions`. */
		enforceInTransit?: boolean | null;
	}

	/** A policy constraining the storage of messages published to the topic. */
	export interface MessageStoragePolicyFormProperties {

		/** Optional. If true, `allowed_persistence_regions` is also used to enforce in-transit guarantees for messages. That is, Pub/Sub will fail Publish operations on this topic and subscribe operations on any subscription attached to this topic in any region that is not in `allowed_persistence_regions`. */
		enforceInTransit: FormControl<boolean | null | undefined>,
	}
	export function CreateMessageStoragePolicyFormGroup() {
		return new FormGroup<MessageStoragePolicyFormProperties>({
			enforceInTransit: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Settings for validating messages published against a schema. */
	export interface SchemaSettings {

		/** Optional. The encoding of messages validated against `schema`. */
		encoding?: SchemaSettingsEncoding | null;

		/** Optional. The minimum (inclusive) revision allowed for validating messages. If empty or not present, allow any revision to be validated against last_revision or any revision created before. */
		firstRevisionId?: string | null;

		/** Optional. The maximum (inclusive) revision allowed for validating messages. If empty or not present, allow any revision to be validated against first_revision or any revision created after. */
		lastRevisionId?: string | null;

		/** Required. The name of the schema that messages published should be validated against. Format is `projects/{project}/schemas/{schema}`. The value of this field will be `_deleted-schema_` if the schema has been deleted. */
		schema?: string | null;
	}

	/** Settings for validating messages published against a schema. */
	export interface SchemaSettingsFormProperties {

		/** Optional. The encoding of messages validated against `schema`. */
		encoding: FormControl<SchemaSettingsEncoding | null | undefined>,

		/** Optional. The minimum (inclusive) revision allowed for validating messages. If empty or not present, allow any revision to be validated against last_revision or any revision created before. */
		firstRevisionId: FormControl<string | null | undefined>,

		/** Optional. The maximum (inclusive) revision allowed for validating messages. If empty or not present, allow any revision to be validated against first_revision or any revision created after. */
		lastRevisionId: FormControl<string | null | undefined>,

		/** Required. The name of the schema that messages published should be validated against. Format is `projects/{project}/schemas/{schema}`. The value of this field will be `_deleted-schema_` if the schema has been deleted. */
		schema: FormControl<string | null | undefined>,
	}
	export function CreateSchemaSettingsFormGroup() {
		return new FormGroup<SchemaSettingsFormProperties>({
			encoding: new FormControl<SchemaSettingsEncoding | null | undefined>(undefined),
			firstRevisionId: new FormControl<string | null | undefined>(undefined),
			lastRevisionId: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SchemaSettingsEncoding { ENCODING_UNSPECIFIED = 0, JSON = 1, BINARY = 2 }


	/** Request for the ModifyAckDeadline method. */
	export interface ModifyAckDeadlineRequest {

		/** Required. The new ack deadline with respect to the time this request was sent to the Pub/Sub system. For example, if the value is 10, the new ack deadline will expire 10 seconds after the `ModifyAckDeadline` call was made. Specifying zero might immediately make the message available for delivery to another subscriber client. This typically results in an increase in the rate of message redeliveries (that is, duplicates). The minimum deadline you can specify is 0 seconds. The maximum deadline you can specify is 600 seconds (10 minutes). */
		ackDeadlineSeconds?: number | null;

		/** Required. List of acknowledgment IDs. */
		ackIds?: Array<string>;
	}

	/** Request for the ModifyAckDeadline method. */
	export interface ModifyAckDeadlineRequestFormProperties {

		/** Required. The new ack deadline with respect to the time this request was sent to the Pub/Sub system. For example, if the value is 10, the new ack deadline will expire 10 seconds after the `ModifyAckDeadline` call was made. Specifying zero might immediately make the message available for delivery to another subscriber client. This typically results in an increase in the rate of message redeliveries (that is, duplicates). The minimum deadline you can specify is 0 seconds. The maximum deadline you can specify is 600 seconds (10 minutes). */
		ackDeadlineSeconds: FormControl<number | null | undefined>,
	}
	export function CreateModifyAckDeadlineRequestFormGroup() {
		return new FormGroup<ModifyAckDeadlineRequestFormProperties>({
			ackDeadlineSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request for the ModifyPushConfig method. */
	export interface ModifyPushConfigRequest {

		/** Configuration for a push delivery endpoint. */
		pushConfig?: PushConfig;
	}

	/** Request for the ModifyPushConfig method. */
	export interface ModifyPushConfigRequestFormProperties {
	}
	export function CreateModifyPushConfigRequestFormGroup() {
		return new FormGroup<ModifyPushConfigRequestFormProperties>({
		});

	}


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface Policy {

		/** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
		bindings?: Array<Binding>;

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag?: string | null;

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface PolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version: FormControl<number | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request for the Publish method. */
	export interface PublishRequest {

		/** Required. The messages to publish. */
		messages?: Array<PubsubMessage>;
	}

	/** Request for the Publish method. */
	export interface PublishRequestFormProperties {
	}
	export function CreatePublishRequestFormGroup() {
		return new FormGroup<PublishRequestFormProperties>({
		});

	}


	/** A message that is published by publishers and consumed by subscribers. The message must contain either a non-empty data field or at least one attribute. Note that client libraries represent this object differently depending on the language. See the corresponding [client library documentation](https://cloud.google.com/pubsub/docs/reference/libraries) for more information. See [quotas and limits] (https://cloud.google.com/pubsub/quotas) for more information about message limits. */
	export interface PubsubMessage {

		/** Optional. Attributes for this message. If this field is empty, the message must contain non-empty data. This can be used to filter messages on the subscription. */
		attributes?: {[id: string]: string };

		/** Optional. The message data field. If this field is empty, the message must contain at least one attribute. */
		data?: string | null;

		/** Optional. ID of this message, assigned by the server when the message is published. Guaranteed to be unique within the topic. This value may be read by a subscriber that receives a `PubsubMessage` via a `Pull` call or a push delivery. It must not be populated by the publisher in a `Publish` call. */
		messageId?: string | null;

		/** Optional. If non-empty, identifies related messages for which publish order should be respected. If a `Subscription` has `enable_message_ordering` set to `true`, messages published with the same non-empty `ordering_key` value will be delivered to subscribers in the order in which they are received by the Pub/Sub system. All `PubsubMessage`s published in a given `PublishRequest` must specify the same `ordering_key` value. For more information, see [ordering messages](https://cloud.google.com/pubsub/docs/ordering). */
		orderingKey?: string | null;

		/** Optional. The time at which the message was published, populated by the server when it receives the `Publish` call. It must not be populated by the publisher in a `Publish` call. */
		publishTime?: string | null;
	}

	/** A message that is published by publishers and consumed by subscribers. The message must contain either a non-empty data field or at least one attribute. Note that client libraries represent this object differently depending on the language. See the corresponding [client library documentation](https://cloud.google.com/pubsub/docs/reference/libraries) for more information. See [quotas and limits] (https://cloud.google.com/pubsub/quotas) for more information about message limits. */
	export interface PubsubMessageFormProperties {

		/** Optional. Attributes for this message. If this field is empty, the message must contain non-empty data. This can be used to filter messages on the subscription. */
		attributes: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The message data field. If this field is empty, the message must contain at least one attribute. */
		data: FormControl<string | null | undefined>,

		/** Optional. ID of this message, assigned by the server when the message is published. Guaranteed to be unique within the topic. This value may be read by a subscriber that receives a `PubsubMessage` via a `Pull` call or a push delivery. It must not be populated by the publisher in a `Publish` call. */
		messageId: FormControl<string | null | undefined>,

		/** Optional. If non-empty, identifies related messages for which publish order should be respected. If a `Subscription` has `enable_message_ordering` set to `true`, messages published with the same non-empty `ordering_key` value will be delivered to subscribers in the order in which they are received by the Pub/Sub system. All `PubsubMessage`s published in a given `PublishRequest` must specify the same `ordering_key` value. For more information, see [ordering messages](https://cloud.google.com/pubsub/docs/ordering). */
		orderingKey: FormControl<string | null | undefined>,

		/** Optional. The time at which the message was published, populated by the server when it receives the `Publish` call. It must not be populated by the publisher in a `Publish` call. */
		publishTime: FormControl<string | null | undefined>,
	}
	export function CreatePubsubMessageFormGroup() {
		return new FormGroup<PubsubMessageFormProperties>({
			attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			messageId: new FormControl<string | null | undefined>(undefined),
			orderingKey: new FormControl<string | null | undefined>(undefined),
			publishTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `Publish` method. */
	export interface PublishResponse {

		/** Optional. The server-assigned ID of each published message, in the same order as the messages in the request. IDs are guaranteed to be unique within the topic. */
		messageIds?: Array<string>;
	}

	/** Response for the `Publish` method. */
	export interface PublishResponseFormProperties {
	}
	export function CreatePublishResponseFormGroup() {
		return new FormGroup<PublishResponseFormProperties>({
		});

	}


	/** Request for the `Pull` method. */
	export interface PullRequest {

		/** Required. The maximum number of messages to return for this request. Must be a positive integer. The Pub/Sub system may return fewer than the number specified. */
		maxMessages?: number | null;

		/** Optional. If this field set to true, the system will respond immediately even if it there are no messages available to return in the `Pull` response. Otherwise, the system may wait (for a bounded amount of time) until at least one message is available, rather than returning no messages. Warning: setting this field to `true` is discouraged because it adversely impacts the performance of `Pull` operations. We recommend that users do not set this field. */
		returnImmediately?: boolean | null;
	}

	/** Request for the `Pull` method. */
	export interface PullRequestFormProperties {

		/** Required. The maximum number of messages to return for this request. Must be a positive integer. The Pub/Sub system may return fewer than the number specified. */
		maxMessages: FormControl<number | null | undefined>,

		/** Optional. If this field set to true, the system will respond immediately even if it there are no messages available to return in the `Pull` response. Otherwise, the system may wait (for a bounded amount of time) until at least one message is available, rather than returning no messages. Warning: setting this field to `true` is discouraged because it adversely impacts the performance of `Pull` operations. We recommend that users do not set this field. */
		returnImmediately: FormControl<boolean | null | undefined>,
	}
	export function CreatePullRequestFormGroup() {
		return new FormGroup<PullRequestFormProperties>({
			maxMessages: new FormControl<number | null | undefined>(undefined),
			returnImmediately: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response for the `Pull` method. */
	export interface PullResponse {

		/** Optional. Received Pub/Sub messages. The list will be empty if there are no more messages available in the backlog, or if no messages could be returned before the request timeout. For JSON, the response can be entirely empty. The Pub/Sub system may return fewer than the `maxMessages` requested even if there are more messages available in the backlog. */
		receivedMessages?: Array<ReceivedMessage>;
	}

	/** Response for the `Pull` method. */
	export interface PullResponseFormProperties {
	}
	export function CreatePullResponseFormGroup() {
		return new FormGroup<PullResponseFormProperties>({
		});

	}


	/** A message and its corresponding acknowledgment ID. */
	export interface ReceivedMessage {

		/** Optional. This ID can be used to acknowledge the received message. */
		ackId?: string | null;

		/** Optional. The approximate number of times that Pub/Sub has attempted to deliver the associated message to a subscriber. More precisely, this is 1 + (number of NACKs) + (number of ack_deadline exceeds) for this message. A NACK is any call to ModifyAckDeadline with a 0 deadline. An ack_deadline exceeds event is whenever a message is not acknowledged within ack_deadline. Note that ack_deadline is initially Subscription.ackDeadlineSeconds, but may get extended automatically by the client library. Upon the first delivery of a given message, `delivery_attempt` will have a value of 1. The value is calculated at best effort and is approximate. If a DeadLetterPolicy is not set on the subscription, this will be 0. */
		deliveryAttempt?: number | null;

		/** A message that is published by publishers and consumed by subscribers. The message must contain either a non-empty data field or at least one attribute. Note that client libraries represent this object differently depending on the language. See the corresponding [client library documentation](https://cloud.google.com/pubsub/docs/reference/libraries) for more information. See [quotas and limits] (https://cloud.google.com/pubsub/quotas) for more information about message limits. */
		message?: PubsubMessage;
	}

	/** A message and its corresponding acknowledgment ID. */
	export interface ReceivedMessageFormProperties {

		/** Optional. This ID can be used to acknowledge the received message. */
		ackId: FormControl<string | null | undefined>,

		/** Optional. The approximate number of times that Pub/Sub has attempted to deliver the associated message to a subscriber. More precisely, this is 1 + (number of NACKs) + (number of ack_deadline exceeds) for this message. A NACK is any call to ModifyAckDeadline with a 0 deadline. An ack_deadline exceeds event is whenever a message is not acknowledged within ack_deadline. Note that ack_deadline is initially Subscription.ackDeadlineSeconds, but may get extended automatically by the client library. Upon the first delivery of a given message, `delivery_attempt` will have a value of 1. The value is calculated at best effort and is approximate. If a DeadLetterPolicy is not set on the subscription, this will be 0. */
		deliveryAttempt: FormControl<number | null | undefined>,
	}
	export function CreateReceivedMessageFormGroup() {
		return new FormGroup<ReceivedMessageFormProperties>({
			ackId: new FormControl<string | null | undefined>(undefined),
			deliveryAttempt: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request for the `RollbackSchema` method. */
	export interface RollbackSchemaRequest {

		/** Required. The revision ID to roll back to. It must be a revision of the same schema. Example: c7cfa2a8 */
		revisionId?: string | null;
	}

	/** Request for the `RollbackSchema` method. */
	export interface RollbackSchemaRequestFormProperties {

		/** Required. The revision ID to roll back to. It must be a revision of the same schema. Example: c7cfa2a8 */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateRollbackSchemaRequestFormGroup() {
		return new FormGroup<RollbackSchemaRequestFormProperties>({
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for the `Seek` method. */
	export interface SeekRequest {

		/** Optional. The snapshot to seek to. The snapshot's topic must be the same as that of the provided subscription. Format is `projects/{project}/snapshots/{snap}`. */
		snapshot?: string | null;

		/** Optional. The time to seek to. Messages retained in the subscription that were published before this time are marked as acknowledged, and messages retained in the subscription that were published after this time are marked as unacknowledged. Note that this operation affects only those messages retained in the subscription (configured by the combination of `message_retention_duration` and `retain_acked_messages`). For example, if `time` corresponds to a point before the message retention window (or to a point before the system's notion of the subscription creation time), only retained messages will be marked as unacknowledged, and already-expunged messages will not be restored. */
		time?: string | null;
	}

	/** Request for the `Seek` method. */
	export interface SeekRequestFormProperties {

		/** Optional. The snapshot to seek to. The snapshot's topic must be the same as that of the provided subscription. Format is `projects/{project}/snapshots/{snap}`. */
		snapshot: FormControl<string | null | undefined>,

		/** Optional. The time to seek to. Messages retained in the subscription that were published before this time are marked as acknowledged, and messages retained in the subscription that were published after this time are marked as unacknowledged. Note that this operation affects only those messages retained in the subscription (configured by the combination of `message_retention_duration` and `retain_acked_messages`). For example, if `time` corresponds to a point before the message retention window (or to a point before the system's notion of the subscription creation time), only retained messages will be marked as unacknowledged, and already-expunged messages will not be restored. */
		time: FormControl<string | null | undefined>,
	}
	export function CreateSeekRequestFormGroup() {
		return new FormGroup<SeekRequestFormProperties>({
			snapshot: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `Seek` method (this response is empty). */
	export interface SeekResponse {
	}

	/** Response for the `Seek` method (this response is empty). */
	export interface SeekResponseFormProperties {
	}
	export function CreateSeekResponseFormGroup() {
		return new FormGroup<SeekResponseFormProperties>({
		});

	}


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: Policy;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequestFormProperties {
	}
	export function CreateSetIamPolicyRequestFormGroup() {
		return new FormGroup<SetIamPolicyRequestFormProperties>({
		});

	}


	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequest {

		/** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
		permissions?: Array<string>;
	}

	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequestFormProperties {
	}
	export function CreateTestIamPermissionsRequestFormGroup() {
		return new FormGroup<TestIamPermissionsRequestFormProperties>({
		});

	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
		permissions?: Array<string>;
	}

	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponseFormProperties {
	}
	export function CreateTestIamPermissionsResponseFormGroup() {
		return new FormGroup<TestIamPermissionsResponseFormProperties>({
		});

	}


	/** Request for the UpdateSnapshot method. */
	export interface UpdateSnapshotRequest {

		/** A snapshot resource. Snapshots are used in [Seek](https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot. */
		snapshot?: Snapshot;

		/** Required. Indicates which fields in the provided snapshot to update. Must be specified and non-empty. */
		updateMask?: string | null;
	}

	/** Request for the UpdateSnapshot method. */
	export interface UpdateSnapshotRequestFormProperties {

		/** Required. Indicates which fields in the provided snapshot to update. Must be specified and non-empty. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSnapshotRequestFormGroup() {
		return new FormGroup<UpdateSnapshotRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for the UpdateSubscription method. */
	export interface UpdateSubscriptionRequest {

		/** A subscription resource. If none of `push_config`, `bigquery_config`, or `cloud_storage_config` is set, then the subscriber will pull and ack messages using API methods. At most one of these fields may be set. */
		subscription?: Subscription;

		/** Required. Indicates which fields in the provided subscription to update. Must be specified and non-empty. */
		updateMask?: string | null;
	}

	/** Request for the UpdateSubscription method. */
	export interface UpdateSubscriptionRequestFormProperties {

		/** Required. Indicates which fields in the provided subscription to update. Must be specified and non-empty. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSubscriptionRequestFormGroup() {
		return new FormGroup<UpdateSubscriptionRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for the UpdateTopic method. */
	export interface UpdateTopicRequest {

		/** A topic resource. */
		topic?: Topic;

		/** Required. Indicates which fields in the provided topic to update. Must be specified and non-empty. Note that if `update_mask` contains "message_storage_policy" but the `message_storage_policy` is not set in the `topic` provided above, then the updated value is determined by the policy configured at the project or organization level. */
		updateMask?: string | null;
	}

	/** Request for the UpdateTopic method. */
	export interface UpdateTopicRequestFormProperties {

		/** Required. Indicates which fields in the provided topic to update. Must be specified and non-empty. Note that if `update_mask` contains "message_storage_policy" but the `message_storage_policy` is not set in the `topic` provided above, then the updated value is determined by the policy configured at the project or organization level. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTopicRequestFormGroup() {
		return new FormGroup<UpdateTopicRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for the `ValidateMessage` method. */
	export interface ValidateMessageRequest {

		/** The encoding expected for messages */
		encoding?: SchemaSettingsEncoding | null;

		/** Message to validate against the provided `schema_spec`. */
		message?: string | null;

		/** Name of the schema against which to validate. Format is `projects/{project}/schemas/{schema}`. */
		name?: string | null;

		/** A schema resource. */
		schema?: Schema;
	}

	/** Request for the `ValidateMessage` method. */
	export interface ValidateMessageRequestFormProperties {

		/** The encoding expected for messages */
		encoding: FormControl<SchemaSettingsEncoding | null | undefined>,

		/** Message to validate against the provided `schema_spec`. */
		message: FormControl<string | null | undefined>,

		/** Name of the schema against which to validate. Format is `projects/{project}/schemas/{schema}`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateValidateMessageRequestFormGroup() {
		return new FormGroup<ValidateMessageRequestFormProperties>({
			encoding: new FormControl<SchemaSettingsEncoding | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `ValidateMessage` method. Empty for now. */
	export interface ValidateMessageResponse {
	}

	/** Response for the `ValidateMessage` method. Empty for now. */
	export interface ValidateMessageResponseFormProperties {
	}
	export function CreateValidateMessageResponseFormGroup() {
		return new FormGroup<ValidateMessageResponseFormProperties>({
		});

	}


	/** Request for the `ValidateSchema` method. */
	export interface ValidateSchemaRequest {

		/** A schema resource. */
		schema?: Schema;
	}

	/** Request for the `ValidateSchema` method. */
	export interface ValidateSchemaRequestFormProperties {
	}
	export function CreateValidateSchemaRequestFormGroup() {
		return new FormGroup<ValidateSchemaRequestFormProperties>({
		});

	}


	/** Response for the `ValidateSchema` method. Empty for now. */
	export interface ValidateSchemaResponse {
	}

	/** Response for the `ValidateSchema` method. Empty for now. */
	export interface ValidateSchemaResponseFormProperties {
	}
	export function CreateValidateSchemaResponseFormGroup() {
		return new FormGroup<ValidateSchemaResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a schema.
		 * Delete v1/{name}
		 * @param {string} name Required. Name of the schema to delete. Format is `projects/{project}/schemas/{schema}`.
		 * @return {Empty} Successful response
		 */
		Pubsub_projects_schemas_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets a schema.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the schema to get. Format is `projects/{project}/schemas/{schema}`.
		 * @param {Pubsub_projects_schemas_getView} view The set of fields to return in the response. If not set, returns a Schema with all fields filled out. Set to `BASIC` to omit the `definition`.
		 * @return {Schema} Successful response
		 */
		Pubsub_projects_schemas_get(name: string, view: Pubsub_projects_schemas_getView | null | undefined): Observable<Schema> {
			return this.http.get<Schema>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&view=' + view, {});
		}

		/**
		 * Updates an existing topic. Note that certain properties of a topic are not modifiable.
		 * Patch v1/{name}
		 * @param {string} name Required. The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
		 * @return {Topic} Successful response
		 */
		Pubsub_projects_topics_patch(name: string, requestBody: UpdateTopicRequest): Observable<Topic> {
			return this.http.patch<Topic>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates the given topic with the given name. See the [resource name rules] (https://cloud.google.com/pubsub/docs/pubsub-basics#resource_names).
		 * Put v1/{name}
		 * @param {string} name Required. The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
		 * @return {Topic} Successful response
		 */
		Pubsub_projects_topics_create(name: string, requestBody: Topic): Observable<Topic> {
			return this.http.put<Topic>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Commits a new schema revision to an existing schema.
		 * Post v1/{name}:commit
		 * @param {string} name Required. The name of the schema we are revising. Format is `projects/{project}/schemas/{schema}`.
		 * @return {Schema} Successful response
		 */
		Pubsub_projects_schemas_commit(name: string, requestBody: CommitSchemaRequest): Observable<Schema> {
			return this.http.post<Schema>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':commit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specific schema revision.
		 * Delete v1/{name}:deleteRevision
		 * @param {string} name Required. The name of the schema revision to be deleted, with a revision ID explicitly included. Example: `projects/123/schemas/my-schema@c7cfa2a8`
		 * @param {string} revisionId Optional. This field is deprecated and should not be used for specifying the revision ID. The revision ID should be specified via the `name` parameter.
		 * @return {Schema} Successful response
		 */
		Pubsub_projects_schemas_deleteRevision(name: string, revisionId: string | null | undefined): Observable<Schema> {
			return this.http.delete<Schema>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':deleteRevision&revisionId=' + (revisionId == null ? '' : encodeURIComponent(revisionId)), {});
		}

		/**
		 * Lists all schema revisions for the named schema.
		 * Get v1/{name}:listRevisions
		 * @param {string} name Required. The name of the schema to list revisions for.
		 * @param {number} pageSize The maximum number of revisions to return per page.
		 * @param {string} pageToken The page token, received from a previous ListSchemaRevisions call. Provide this to retrieve the subsequent page.
		 * @param {Pubsub_projects_schemas_getView} view The set of Schema fields to return in the response. If not set, returns Schemas with `name` and `type`, but not `definition`. Set to `FULL` to retrieve all fields.
		 * @return {ListSchemaRevisionsResponse} Successful response
		 */
		Pubsub_projects_schemas_listRevisions(name: string, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Pubsub_projects_schemas_getView | null | undefined): Observable<ListSchemaRevisionsResponse> {
			return this.http.get<ListSchemaRevisionsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':listRevisions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Creates a new schema revision that is a copy of the provided revision_id.
		 * Post v1/{name}:rollback
		 * @param {string} name Required. The schema being rolled back with revision id.
		 * @return {Schema} Successful response
		 */
		Pubsub_projects_schemas_rollback(name: string, requestBody: RollbackSchemaRequest): Observable<Schema> {
			return this.http.post<Schema>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':rollback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists schemas in a project.
		 * Get v1/{parent}/schemas
		 * @param {string} parent Required. The name of the project in which to list schemas. Format is `projects/{project-id}`.
		 * @param {number} pageSize Maximum number of schemas to return.
		 * @param {string} pageToken The value returned by the last `ListSchemasResponse`; indicates that this is a continuation of a prior `ListSchemas` call, and that the system should return the next page of data.
		 * @param {Pubsub_projects_schemas_getView} view The set of Schema fields to return in the response. If not set, returns Schemas with `name` and `type`, but not `definition`. Set to `FULL` to retrieve all fields.
		 * @return {ListSchemasResponse} Successful response
		 */
		Pubsub_projects_schemas_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Pubsub_projects_schemas_getView | null | undefined): Observable<ListSchemasResponse> {
			return this.http.get<ListSchemasResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/schemas&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Creates a schema.
		 * Post v1/{parent}/schemas
		 * @param {string} parent Required. The name of the project in which to create the schema. Format is `projects/{project-id}`.
		 * @param {string} schemaId The ID to use for the schema, which will become the final component of the schema's resource name. See https://cloud.google.com/pubsub/docs/pubsub-basics#resource_names for resource name constraints.
		 * @return {Schema} Successful response
		 */
		Pubsub_projects_schemas_create(parent: string, schemaId: string | null | undefined, requestBody: Schema): Observable<Schema> {
			return this.http.post<Schema>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/schemas&schemaId=' + (schemaId == null ? '' : encodeURIComponent(schemaId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates a schema.
		 * Post v1/{parent}/schemas:validate
		 * @param {string} parent Required. The name of the project in which to validate schemas. Format is `projects/{project-id}`.
		 * @return {ValidateSchemaResponse} Successful response
		 */
		Pubsub_projects_schemas_validate(parent: string, requestBody: ValidateSchemaRequest): Observable<ValidateSchemaResponse> {
			return this.http.post<ValidateSchemaResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/schemas:validate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates a message against a schema.
		 * Post v1/{parent}/schemas:validateMessage
		 * @param {string} parent Required. The name of the project in which to validate schemas. Format is `projects/{project-id}`.
		 * @return {ValidateMessageResponse} Successful response
		 */
		Pubsub_projects_schemas_validateMessage(parent: string, requestBody: ValidateMessageRequest): Observable<ValidateMessageResponse> {
			return this.http.post<ValidateMessageResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/schemas:validateMessage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the existing snapshots. Snapshots are used in [Seek]( https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
		 * Get v1/{project}/snapshots
		 * @param {string} project Required. The name of the project in which to list snapshots. Format is `projects/{project-id}`.
		 * @param {number} pageSize Optional. Maximum number of snapshots to return.
		 * @param {string} pageToken Optional. The value returned by the last `ListSnapshotsResponse`; indicates that this is a continuation of a prior `ListSnapshots` call, and that the system should return the next page of data.
		 * @return {ListSnapshotsResponse} Successful response
		 */
		Pubsub_projects_snapshots_list(project: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSnapshotsResponse> {
			return this.http.get<ListSnapshotsResponse>(this.baseUri + 'v1/' + (project == null ? '' : encodeURIComponent(project)) + '/snapshots&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists matching subscriptions.
		 * Get v1/{project}/subscriptions
		 * @param {string} project Required. The name of the project in which to list subscriptions. Format is `projects/{project-id}`.
		 * @param {number} pageSize Optional. Maximum number of subscriptions to return.
		 * @param {string} pageToken Optional. The value returned by the last `ListSubscriptionsResponse`; indicates that this is a continuation of a prior `ListSubscriptions` call, and that the system should return the next page of data.
		 * @return {ListSubscriptionsResponse} Successful response
		 */
		Pubsub_projects_subscriptions_list(project: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSubscriptionsResponse> {
			return this.http.get<ListSubscriptionsResponse>(this.baseUri + 'v1/' + (project == null ? '' : encodeURIComponent(project)) + '/subscriptions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists matching topics.
		 * Get v1/{project}/topics
		 * @param {string} project Required. The name of the project in which to list topics. Format is `projects/{project-id}`.
		 * @param {number} pageSize Optional. Maximum number of topics to return.
		 * @param {string} pageToken Optional. The value returned by the last `ListTopicsResponse`; indicates that this is a continuation of a prior `ListTopics` call, and that the system should return the next page of data.
		 * @return {ListTopicsResponse} Successful response
		 */
		Pubsub_projects_topics_list(project: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTopicsResponse> {
			return this.http.get<ListTopicsResponse>(this.baseUri + 'v1/' + (project == null ? '' : encodeURIComponent(project)) + '/topics&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {Policy} Successful response
		 */
		Pubsub_projects_topics_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Pubsub_projects_topics_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Pubsub_projects_topics_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes an existing snapshot. Snapshots are used in [Seek] (https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot. When the snapshot is deleted, all messages retained in the snapshot are immediately dropped. After a snapshot is deleted, a new one may be created with the same name, but the new one has no association with the old snapshot or its subscription, unless the same subscription is specified.
		 * Delete v1/{snapshot}
		 * @param {string} snapshot Required. The name of the snapshot to delete. Format is `projects/{project}/snapshots/{snap}`.
		 * @return {Empty} Successful response
		 */
		Pubsub_projects_snapshots_delete(snapshot: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (snapshot == null ? '' : encodeURIComponent(snapshot)), {});
		}

		/**
		 * Gets the configuration details of a snapshot. Snapshots are used in [Seek](https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
		 * Get v1/{snapshot}
		 * @param {string} snapshot Required. The name of the snapshot to get. Format is `projects/{project}/snapshots/{snap}`.
		 * @return {Snapshot} Successful response
		 */
		Pubsub_projects_snapshots_get(snapshot: string): Observable<Snapshot> {
			return this.http.get<Snapshot>(this.baseUri + 'v1/' + (snapshot == null ? '' : encodeURIComponent(snapshot)), {});
		}

		/**
		 * Deletes an existing subscription. All messages retained in the subscription are immediately dropped. Calls to `Pull` after deletion will return `NOT_FOUND`. After a subscription is deleted, a new one may be created with the same name, but the new one has no association with the old subscription or its topic unless the same topic is specified.
		 * Delete v1/{subscription}
		 * @param {string} subscription Required. The subscription to delete. Format is `projects/{project}/subscriptions/{sub}`.
		 * @return {Empty} Successful response
		 */
		Pubsub_projects_subscriptions_delete(subscription: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (subscription == null ? '' : encodeURIComponent(subscription)), {});
		}

		/**
		 * Gets the configuration details of a subscription.
		 * Get v1/{subscription}
		 * @param {string} subscription Required. The name of the subscription to get. Format is `projects/{project}/subscriptions/{sub}`.
		 * @return {Subscription} Successful response
		 */
		Pubsub_projects_subscriptions_get(subscription: string): Observable<Subscription> {
			return this.http.get<Subscription>(this.baseUri + 'v1/' + (subscription == null ? '' : encodeURIComponent(subscription)), {});
		}

		/**
		 * Acknowledges the messages associated with the `ack_ids` in the `AcknowledgeRequest`. The Pub/Sub system can remove the relevant messages from the subscription. Acknowledging a message whose ack deadline has expired may succeed, but such a message may be redelivered later. Acknowledging a message more than once will not result in an error.
		 * Post v1/{subscription}:acknowledge
		 * @param {string} subscription Required. The subscription whose message is being acknowledged. Format is `projects/{project}/subscriptions/{sub}`.
		 * @return {Empty} Successful response
		 */
		Pubsub_projects_subscriptions_acknowledge(subscription: string, requestBody: AcknowledgeRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (subscription == null ? '' : encodeURIComponent(subscription)) + ':acknowledge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Detaches a subscription from this topic. All messages retained in the subscription are dropped. Subsequent `Pull` and `StreamingPull` requests will return FAILED_PRECONDITION. If the subscription is a push subscription, pushes to the endpoint will stop.
		 * Post v1/{subscription}:detach
		 * @param {string} subscription Required. The subscription to detach. Format is `projects/{project}/subscriptions/{subscription}`.
		 * @return {DetachSubscriptionResponse} Successful response
		 */
		Pubsub_projects_subscriptions_detach(subscription: string): Observable<DetachSubscriptionResponse> {
			return this.http.post<DetachSubscriptionResponse>(this.baseUri + 'v1/' + (subscription == null ? '' : encodeURIComponent(subscription)) + ':detach', null, {});
		}

		/**
		 * Modifies the ack deadline for a specific message. This method is useful to indicate that more time is needed to process a message by the subscriber, or to make the message available for redelivery if the processing was interrupted. Note that this does not modify the subscription-level `ackDeadlineSeconds` used for subsequent messages.
		 * Post v1/{subscription}:modifyAckDeadline
		 * @param {string} subscription Required. The name of the subscription. Format is `projects/{project}/subscriptions/{sub}`.
		 * @return {Empty} Successful response
		 */
		Pubsub_projects_subscriptions_modifyAckDeadline(subscription: string, requestBody: ModifyAckDeadlineRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (subscription == null ? '' : encodeURIComponent(subscription)) + ':modifyAckDeadline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the `PushConfig` for a specified subscription. This may be used to change a push subscription to a pull one (signified by an empty `PushConfig`) or vice versa, or change the endpoint URL and other attributes of a push subscription. Messages will accumulate for delivery continuously through the call regardless of changes to the `PushConfig`.
		 * Post v1/{subscription}:modifyPushConfig
		 * @param {string} subscription Required. The name of the subscription. Format is `projects/{project}/subscriptions/{sub}`.
		 * @return {Empty} Successful response
		 */
		Pubsub_projects_subscriptions_modifyPushConfig(subscription: string, requestBody: ModifyPushConfigRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (subscription == null ? '' : encodeURIComponent(subscription)) + ':modifyPushConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Pulls messages from the server.
		 * Post v1/{subscription}:pull
		 * @param {string} subscription Required. The subscription from which messages should be pulled. Format is `projects/{project}/subscriptions/{sub}`.
		 * @return {PullResponse} Successful response
		 */
		Pubsub_projects_subscriptions_pull(subscription: string, requestBody: PullRequest): Observable<PullResponse> {
			return this.http.post<PullResponse>(this.baseUri + 'v1/' + (subscription == null ? '' : encodeURIComponent(subscription)) + ':pull', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Seeks an existing subscription to a point in time or to a given snapshot, whichever is provided in the request. Snapshots are used in [Seek] (https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot. Note that both the subscription and the snapshot must be on the same topic.
		 * Post v1/{subscription}:seek
		 * @param {string} subscription Required. The subscription to affect.
		 * @return {SeekResponse} Successful response
		 */
		Pubsub_projects_subscriptions_seek(subscription: string, requestBody: SeekRequest): Observable<SeekResponse> {
			return this.http.post<SeekResponse>(this.baseUri + 'v1/' + (subscription == null ? '' : encodeURIComponent(subscription)) + ':seek', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the topic with the given name. Returns `NOT_FOUND` if the topic does not exist. After a topic is deleted, a new topic may be created with the same name; this is an entirely new topic with none of the old configuration or subscriptions. Existing subscriptions to this topic are not deleted, but their `topic` field is set to `_deleted-topic_`.
		 * Delete v1/{topic}
		 * @param {string} topic Required. Name of the topic to delete. Format is `projects/{project}/topics/{topic}`.
		 * @return {Empty} Successful response
		 */
		Pubsub_projects_topics_delete(topic: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (topic == null ? '' : encodeURIComponent(topic)), {});
		}

		/**
		 * Gets the configuration of a topic.
		 * Get v1/{topic}
		 * @param {string} topic Required. The name of the topic to get. Format is `projects/{project}/topics/{topic}`.
		 * @return {Topic} Successful response
		 */
		Pubsub_projects_topics_get(topic: string): Observable<Topic> {
			return this.http.get<Topic>(this.baseUri + 'v1/' + (topic == null ? '' : encodeURIComponent(topic)), {});
		}

		/**
		 * Lists the names of the snapshots on this topic. Snapshots are used in [Seek](https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
		 * Get v1/{topic}/snapshots
		 * @param {string} topic Required. The name of the topic that snapshots are attached to. Format is `projects/{project}/topics/{topic}`.
		 * @param {number} pageSize Optional. Maximum number of snapshot names to return.
		 * @param {string} pageToken Optional. The value returned by the last `ListTopicSnapshotsResponse`; indicates that this is a continuation of a prior `ListTopicSnapshots` call, and that the system should return the next page of data.
		 * @return {ListTopicSnapshotsResponse} Successful response
		 */
		Pubsub_projects_topics_snapshots_list(topic: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTopicSnapshotsResponse> {
			return this.http.get<ListTopicSnapshotsResponse>(this.baseUri + 'v1/' + (topic == null ? '' : encodeURIComponent(topic)) + '/snapshots&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists the names of the attached subscriptions on this topic.
		 * Get v1/{topic}/subscriptions
		 * @param {string} topic Required. The name of the topic that subscriptions are attached to. Format is `projects/{project}/topics/{topic}`.
		 * @param {number} pageSize Optional. Maximum number of subscription names to return.
		 * @param {string} pageToken Optional. The value returned by the last `ListTopicSubscriptionsResponse`; indicates that this is a continuation of a prior `ListTopicSubscriptions` call, and that the system should return the next page of data.
		 * @return {ListTopicSubscriptionsResponse} Successful response
		 */
		Pubsub_projects_topics_subscriptions_list(topic: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTopicSubscriptionsResponse> {
			return this.http.get<ListTopicSubscriptionsResponse>(this.baseUri + 'v1/' + (topic == null ? '' : encodeURIComponent(topic)) + '/subscriptions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic does not exist.
		 * Post v1/{topic}:publish
		 * @param {string} topic Required. The messages in the request will be published on this topic. Format is `projects/{project}/topics/{topic}`.
		 * @return {PublishResponse} Successful response
		 */
		Pubsub_projects_topics_publish(topic: string, requestBody: PublishRequest): Observable<PublishResponse> {
			return this.http.post<PublishResponse>(this.baseUri + 'v1/' + (topic == null ? '' : encodeURIComponent(topic)) + ':publish', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Pubsub_projects_schemas_getView { SCHEMA_VIEW_UNSPECIFIED = 0, BASIC = 1, FULL = 2 }

}

