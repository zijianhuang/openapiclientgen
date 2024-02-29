import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Request for the Acknowledge method. */
	export interface AcknowledgeRequest {

		/** The acknowledgment ID for the messages being acknowledged that was returned by the Pub/Sub system in the `Pull` response. Must not be empty. */
		ackIds?: Array<string>;
	}

	/** Request for the Acknowledge method. */
	export interface AcknowledgeRequestFormProperties {
	}
	export function CreateAcknowledgeRequestFormGroup() {
		return new FormGroup<AcknowledgeRequestFormProperties>({
		});

	}


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


	/** Response for the `ListSubscriptions` method. */
	export interface ListSubscriptionsResponse {

		/** If not empty, indicates that there may be more subscriptions that match the request; this value should be passed in a new `ListSubscriptionsRequest` to get more subscriptions. */
		nextPageToken?: string | null;

		/** The subscriptions that match the request. */
		subscriptions?: Array<Subscription>;
	}

	/** Response for the `ListSubscriptions` method. */
	export interface ListSubscriptionsResponseFormProperties {

		/** If not empty, indicates that there may be more subscriptions that match the request; this value should be passed in a new `ListSubscriptionsRequest` to get more subscriptions. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSubscriptionsResponseFormGroup() {
		return new FormGroup<ListSubscriptionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A subscription resource. */
	export interface Subscription {

		/**
		 * This value is the maximum time after a subscriber receives a message before the subscriber should acknowledge the message. After message delivery but before the ack deadline expires and before the message is acknowledged, it is an outstanding message and will not be delivered again during that time (on a best-effort basis). For pull subscriptions, this value is used as the initial value for the ack deadline. To override this value for a given message, call `ModifyAckDeadline` with the corresponding `ack_id` if using pull. The maximum custom deadline you can specify is 600 seconds (10 minutes). For push delivery, this value is also used to set the request timeout for the call to the push endpoint. If the subscriber never acknowledges the message, the Pub/Sub system will eventually redeliver the message. If this parameter is 0, a default value of 10 seconds is used.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ackDeadlineSeconds?: number | null;

		/** The name of the subscription. It must have the format `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`. */
		name?: string | null;

		/** Configuration for a push delivery endpoint. */
		pushConfig?: PushConfig;

		/** The name of the topic from which this subscription is receiving messages. The value of this field will be `_deleted-topic_` if the topic has been deleted. */
		topic?: string | null;
	}

	/** A subscription resource. */
	export interface SubscriptionFormProperties {

		/**
		 * This value is the maximum time after a subscriber receives a message before the subscriber should acknowledge the message. After message delivery but before the ack deadline expires and before the message is acknowledged, it is an outstanding message and will not be delivered again during that time (on a best-effort basis). For pull subscriptions, this value is used as the initial value for the ack deadline. To override this value for a given message, call `ModifyAckDeadline` with the corresponding `ack_id` if using pull. The maximum custom deadline you can specify is 600 seconds (10 minutes). For push delivery, this value is also used to set the request timeout for the call to the push endpoint. If the subscriber never acknowledges the message, the Pub/Sub system will eventually redeliver the message. If this parameter is 0, a default value of 10 seconds is used.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ackDeadlineSeconds: FormControl<number | null | undefined>,

		/** The name of the subscription. It must have the format `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`. */
		name: FormControl<string | null | undefined>,

		/** The name of the topic from which this subscription is receiving messages. The value of this field will be `_deleted-topic_` if the topic has been deleted. */
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

		/** Endpoint configuration attributes. Every endpoint has a set of API supported attributes that can be used to control different aspects of the message delivery. The currently supported attribute is `x-goog-version`, which you can use to change the format of the push message. This attribute indicates the version of the data expected by the endpoint. This controls the shape of the envelope (i.e. its fields and metadata). The endpoint version is based on the version of the Pub/Sub API. If not present during the `CreateSubscription` call, it will default to the version of the API used to make such call. If not present during a `ModifyPushConfig` call, its value will not be changed. `GetSubscription` calls will always return a valid version, even if the subscription was created without this attribute. The possible values for this attribute are: * `v1beta1`: uses the push format defined in the v1beta1 Pub/Sub API. * `v1` or `v1beta2`: uses the push format defined in the v1 Pub/Sub API. */
		attributes?: {[id: string]: string };

		/** Contains information needed for generating an [OpenID Connect token](https://developers.google.com/identity/protocols/OpenIDConnect). */
		oidcToken?: OidcToken;

		/** A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use "https://example.com/push". */
		pushEndpoint?: string | null;
	}

	/** Configuration for a push delivery endpoint. */
	export interface PushConfigFormProperties {

		/** Endpoint configuration attributes. Every endpoint has a set of API supported attributes that can be used to control different aspects of the message delivery. The currently supported attribute is `x-goog-version`, which you can use to change the format of the push message. This attribute indicates the version of the data expected by the endpoint. This controls the shape of the envelope (i.e. its fields and metadata). The endpoint version is based on the version of the Pub/Sub API. If not present during the `CreateSubscription` call, it will default to the version of the API used to make such call. If not present during a `ModifyPushConfig` call, its value will not be changed. `GetSubscription` calls will always return a valid version, even if the subscription was created without this attribute. The possible values for this attribute are: * `v1beta1`: uses the push format defined in the v1beta1 Pub/Sub API. * `v1` or `v1beta2`: uses the push format defined in the v1 Pub/Sub API. */
		attributes: FormControl<{[id: string]: string } | null | undefined>,

		/** A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use "https://example.com/push". */
		pushEndpoint: FormControl<string | null | undefined>,
	}
	export function CreatePushConfigFormGroup() {
		return new FormGroup<PushConfigFormProperties>({
			attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			pushEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information needed for generating an [OpenID Connect token](https://developers.google.com/identity/protocols/OpenIDConnect). */
	export interface OidcToken {

		/** Audience to be used when generating OIDC token. The audience claim identifies the recipients that the JWT is intended for. The audience value is a single case-sensitive string. Having multiple values (array) for the audience field is not supported. More info about the OIDC JWT token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3 Note: if not specified, the Push endpoint URL will be used. */
		audience?: string | null;

		/** [Service account email](https://cloud.google.com/iam/docs/service-accounts) to be used for generating the OIDC token. The caller (for CreateSubscription, UpdateSubscription, and ModifyPushConfig RPCs) must have the iam.serviceAccounts.actAs permission for the service account. */
		serviceAccountEmail?: string | null;
	}

	/** Contains information needed for generating an [OpenID Connect token](https://developers.google.com/identity/protocols/OpenIDConnect). */
	export interface OidcTokenFormProperties {

		/** Audience to be used when generating OIDC token. The audience claim identifies the recipients that the JWT is intended for. The audience value is a single case-sensitive string. Having multiple values (array) for the audience field is not supported. More info about the OIDC JWT token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3 Note: if not specified, the Push endpoint URL will be used. */
		audience: FormControl<string | null | undefined>,

		/** [Service account email](https://cloud.google.com/iam/docs/service-accounts) to be used for generating the OIDC token. The caller (for CreateSubscription, UpdateSubscription, and ModifyPushConfig RPCs) must have the iam.serviceAccounts.actAs permission for the service account. */
		serviceAccountEmail: FormControl<string | null | undefined>,
	}
	export function CreateOidcTokenFormGroup() {
		return new FormGroup<OidcTokenFormProperties>({
			audience: new FormControl<string | null | undefined>(undefined),
			serviceAccountEmail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `ListTopicSubscriptions` method. */
	export interface ListTopicSubscriptionsResponse {

		/** If not empty, indicates that there may be more subscriptions that match the request; this value should be passed in a new `ListTopicSubscriptionsRequest` to get more subscriptions. */
		nextPageToken?: string | null;

		/** The names of the subscriptions that match the request. */
		subscriptions?: Array<string>;
	}

	/** Response for the `ListTopicSubscriptions` method. */
	export interface ListTopicSubscriptionsResponseFormProperties {

		/** If not empty, indicates that there may be more subscriptions that match the request; this value should be passed in a new `ListTopicSubscriptionsRequest` to get more subscriptions. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTopicSubscriptionsResponseFormGroup() {
		return new FormGroup<ListTopicSubscriptionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `ListTopics` method. */
	export interface ListTopicsResponse {

		/** If not empty, indicates that there may be more topics that match the request; this value should be passed in a new `ListTopicsRequest`. */
		nextPageToken?: string | null;

		/** The resulting topics. */
		topics?: Array<Topic>;
	}

	/** Response for the `ListTopics` method. */
	export interface ListTopicsResponseFormProperties {

		/** If not empty, indicates that there may be more topics that match the request; this value should be passed in a new `ListTopicsRequest`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTopicsResponseFormGroup() {
		return new FormGroup<ListTopicsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A topic resource. */
	export interface Topic {

		/** The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`. */
		name?: string | null;
	}

	/** A topic resource. */
	export interface TopicFormProperties {

		/** The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTopicFormGroup() {
		return new FormGroup<TopicFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for the ModifyAckDeadline method. */
	export interface ModifyAckDeadlineRequest {

		/**
		 * The new ack deadline with respect to the time this request was sent to the Pub/Sub system. Must be >= 0. For example, if the value is 10, the new ack deadline will expire 10 seconds after the `ModifyAckDeadline` call was made. Specifying zero may immediately make the message available for another pull request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ackDeadlineSeconds?: number | null;

		/** The acknowledgment ID. Either this or ack_ids must be populated, but not both. */
		ackId?: string | null;

		/** List of acknowledgment IDs. */
		ackIds?: Array<string>;
	}

	/** Request for the ModifyAckDeadline method. */
	export interface ModifyAckDeadlineRequestFormProperties {

		/**
		 * The new ack deadline with respect to the time this request was sent to the Pub/Sub system. Must be >= 0. For example, if the value is 10, the new ack deadline will expire 10 seconds after the `ModifyAckDeadline` call was made. Specifying zero may immediately make the message available for another pull request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ackDeadlineSeconds: FormControl<number | null | undefined>,

		/** The acknowledgment ID. Either this or ack_ids must be populated, but not both. */
		ackId: FormControl<string | null | undefined>,
	}
	export function CreateModifyAckDeadlineRequestFormGroup() {
		return new FormGroup<ModifyAckDeadlineRequestFormProperties>({
			ackDeadlineSeconds: new FormControl<number | null | undefined>(undefined),
			ackId: new FormControl<string | null | undefined>(undefined),
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

		/**
		 * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface PolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/**
		 * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

		/** The messages to publish. */
		messages?: Array<PubsubMessage>;
	}

	/** Request for the Publish method. */
	export interface PublishRequestFormProperties {
	}
	export function CreatePublishRequestFormGroup() {
		return new FormGroup<PublishRequestFormProperties>({
		});

	}


	/** A message data and its attributes. The message payload must not be empty; it must contain either a non-empty data field, or at least one attribute. */
	export interface PubsubMessage {

		/** Optional attributes for this message. */
		attributes?: {[id: string]: string };

		/** The message payload. For JSON requests, the value of this field must be [base64-encoded](https://tools.ietf.org/html/rfc4648). */
		data?: string | null;

		/** ID of this message, assigned by the server when the message is published. Guaranteed to be unique within the topic. This value may be read by a subscriber that receives a `PubsubMessage` via a `Pull` call or a push delivery. It must not be populated by the publisher in a `Publish` call. */
		messageId?: string | null;

		/** The time at which the message was published, populated by the server when it receives the `Publish` call. It must not be populated by the publisher in a `Publish` call. */
		publishTime?: string | null;
	}

	/** A message data and its attributes. The message payload must not be empty; it must contain either a non-empty data field, or at least one attribute. */
	export interface PubsubMessageFormProperties {

		/** Optional attributes for this message. */
		attributes: FormControl<{[id: string]: string } | null | undefined>,

		/** The message payload. For JSON requests, the value of this field must be [base64-encoded](https://tools.ietf.org/html/rfc4648). */
		data: FormControl<string | null | undefined>,

		/** ID of this message, assigned by the server when the message is published. Guaranteed to be unique within the topic. This value may be read by a subscriber that receives a `PubsubMessage` via a `Pull` call or a push delivery. It must not be populated by the publisher in a `Publish` call. */
		messageId: FormControl<string | null | undefined>,

		/** The time at which the message was published, populated by the server when it receives the `Publish` call. It must not be populated by the publisher in a `Publish` call. */
		publishTime: FormControl<string | null | undefined>,
	}
	export function CreatePubsubMessageFormGroup() {
		return new FormGroup<PubsubMessageFormProperties>({
			attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			messageId: new FormControl<string | null | undefined>(undefined),
			publishTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `Publish` method. */
	export interface PublishResponse {

		/** The server-assigned ID of each published message, in the same order as the messages in the request. IDs are guaranteed to be unique within the topic. */
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

		/**
		 * The maximum number of messages returned for this request. The Pub/Sub system may return fewer than the number specified.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxMessages?: number | null;

		/** Optional. If this is specified as true the system will respond immediately even if it is not able to return a message in the `Pull` response. Otherwise the system is allowed to wait until at least one message is available rather than returning no messages. The client may cancel the request if it does not wish to wait any longer for the response. Warning: setting this field to `true` is discouraged because it adversely impacts the performance of `Pull` operations. We recommend that users do not set this field. */
		returnImmediately?: boolean | null;
	}

	/** Request for the `Pull` method. */
	export interface PullRequestFormProperties {

		/**
		 * The maximum number of messages returned for this request. The Pub/Sub system may return fewer than the number specified.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxMessages: FormControl<number | null | undefined>,

		/** Optional. If this is specified as true the system will respond immediately even if it is not able to return a message in the `Pull` response. Otherwise the system is allowed to wait until at least one message is available rather than returning no messages. The client may cancel the request if it does not wish to wait any longer for the response. Warning: setting this field to `true` is discouraged because it adversely impacts the performance of `Pull` operations. We recommend that users do not set this field. */
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

		/** Received Pub/Sub messages. The Pub/Sub system will return zero messages if there are no more available in the backlog. The Pub/Sub system may return fewer than the `maxMessages` requested even if there are more messages available in the backlog. */
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

		/** This ID can be used to acknowledge the received message. */
		ackId?: string | null;

		/** A message data and its attributes. The message payload must not be empty; it must contain either a non-empty data field, or at least one attribute. */
		message?: PubsubMessage;
	}

	/** A message and its corresponding acknowledgment ID. */
	export interface ReceivedMessageFormProperties {

		/** This ID can be used to acknowledge the received message. */
		ackId: FormControl<string | null | undefined>,
	}
	export function CreateReceivedMessageFormGroup() {
		return new FormGroup<ReceivedMessageFormProperties>({
			ackId: new FormControl<string | null | undefined>(undefined),
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates the given topic with the given name.
		 * Put v1beta2/{name}
		 * @param {string} name The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
		 * @return {Topic} Successful response
		 */
		Pubsub_projects_topics_create(name: string, requestBody: Topic): Observable<Topic> {
			return this.http.put<Topic>(this.baseUri + 'v1beta2/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists matching subscriptions.
		 * Get v1beta2/{project}/subscriptions
		 * @param {string} project The name of the cloud project that subscriptions belong to.
		 * @param {number} pageSize Maximum number of subscriptions to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The value returned by the last `ListSubscriptionsResponse`; indicates that this is a continuation of a prior `ListSubscriptions` call, and that the system should return the next page of data.
		 * @return {ListSubscriptionsResponse} Successful response
		 */
		Pubsub_projects_subscriptions_list(project: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSubscriptionsResponse> {
			return this.http.get<ListSubscriptionsResponse>(this.baseUri + 'v1beta2/' + (project == null ? '' : encodeURIComponent(project)) + '/subscriptions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists matching topics.
		 * Get v1beta2/{project}/topics
		 * @param {string} project The name of the cloud project that topics belong to.
		 * @param {number} pageSize Maximum number of topics to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The value returned by the last `ListTopicsResponse`; indicates that this is a continuation of a prior `ListTopics` call, and that the system should return the next page of data.
		 * @return {ListTopicsResponse} Successful response
		 */
		Pubsub_projects_topics_list(project: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTopicsResponse> {
			return this.http.get<ListTopicsResponse>(this.baseUri + 'v1beta2/' + (project == null ? '' : encodeURIComponent(project)) + '/topics&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1beta2/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Policy} Successful response
		 */
		Pubsub_projects_topics_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1beta2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1beta2/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Pubsub_projects_topics_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1beta2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1beta2/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Pubsub_projects_topics_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1beta2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to `Pull` after deletion will return `NOT_FOUND`. After a subscription is deleted, a new one may be created with the same name, but the new one has no association with the old subscription, or its topic unless the same topic is specified.
		 * Delete v1beta2/{subscription}
		 * @param {string} subscription The subscription to delete.
		 * @return {Empty} Successful response
		 */
		Pubsub_projects_subscriptions_delete(subscription: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1beta2/' + (subscription == null ? '' : encodeURIComponent(subscription)), {});
		}

		/**
		 * Gets the configuration details of a subscription.
		 * Get v1beta2/{subscription}
		 * @param {string} subscription The name of the subscription to get.
		 * @return {Subscription} Successful response
		 */
		Pubsub_projects_subscriptions_get(subscription: string): Observable<Subscription> {
			return this.http.get<Subscription>(this.baseUri + 'v1beta2/' + (subscription == null ? '' : encodeURIComponent(subscription)), {});
		}

		/**
		 * Acknowledges the messages associated with the `ack_ids` in the `AcknowledgeRequest`. The Pub/Sub system can remove the relevant messages from the subscription. Acknowledging a message whose ack deadline has expired may succeed, but such a message may be redelivered later. Acknowledging a message more than once will not result in an error.
		 * Post v1beta2/{subscription}:acknowledge
		 * @param {string} subscription The subscription whose message is being acknowledged.
		 * @return {Empty} Successful response
		 */
		Pubsub_projects_subscriptions_acknowledge(subscription: string, requestBody: AcknowledgeRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta2/' + (subscription == null ? '' : encodeURIComponent(subscription)) + ':acknowledge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the ack deadline for a specific message. This method is useful to indicate that more time is needed to process a message by the subscriber, or to make the message available for redelivery if the processing was interrupted. Note that this does not modify the subscription-level `ackDeadlineSeconds` used for subsequent messages.
		 * Post v1beta2/{subscription}:modifyAckDeadline
		 * @param {string} subscription The name of the subscription.
		 * @return {Empty} Successful response
		 */
		Pubsub_projects_subscriptions_modifyAckDeadline(subscription: string, requestBody: ModifyAckDeadlineRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta2/' + (subscription == null ? '' : encodeURIComponent(subscription)) + ':modifyAckDeadline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the `PushConfig` for a specified subscription. This may be used to change a push subscription to a pull one (signified by an empty `PushConfig`) or vice versa, or change the endpoint URL and other attributes of a push subscription. Messages will accumulate for delivery continuously through the call regardless of changes to the `PushConfig`.
		 * Post v1beta2/{subscription}:modifyPushConfig
		 * @param {string} subscription The name of the subscription.
		 * @return {Empty} Successful response
		 */
		Pubsub_projects_subscriptions_modifyPushConfig(subscription: string, requestBody: ModifyPushConfigRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta2/' + (subscription == null ? '' : encodeURIComponent(subscription)) + ':modifyPushConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The server may return `UNAVAILABLE` if there are too many concurrent pull requests pending for the given subscription.
		 * Post v1beta2/{subscription}:pull
		 * @param {string} subscription The subscription from which messages should be pulled.
		 * @return {PullResponse} Successful response
		 */
		Pubsub_projects_subscriptions_pull(subscription: string, requestBody: PullRequest): Observable<PullResponse> {
			return this.http.post<PullResponse>(this.baseUri + 'v1beta2/' + (subscription == null ? '' : encodeURIComponent(subscription)) + ':pull', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the topic with the given name. Returns `NOT_FOUND` if the topic does not exist. After a topic is deleted, a new topic may be created with the same name; this is an entirely new topic with none of the old configuration or subscriptions. Existing subscriptions to this topic are not deleted, but their `topic` field is set to `_deleted-topic_`.
		 * Delete v1beta2/{topic}
		 * @param {string} topic Name of the topic to delete.
		 * @return {Empty} Successful response
		 */
		Pubsub_projects_topics_delete(topic: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1beta2/' + (topic == null ? '' : encodeURIComponent(topic)), {});
		}

		/**
		 * Gets the configuration of a topic.
		 * Get v1beta2/{topic}
		 * @param {string} topic The name of the topic to get.
		 * @return {Topic} Successful response
		 */
		Pubsub_projects_topics_get(topic: string): Observable<Topic> {
			return this.http.get<Topic>(this.baseUri + 'v1beta2/' + (topic == null ? '' : encodeURIComponent(topic)), {});
		}

		/**
		 * Lists the name of the subscriptions for this topic.
		 * Get v1beta2/{topic}/subscriptions
		 * @param {string} topic The name of the topic that subscriptions are attached to.
		 * @param {number} pageSize Maximum number of subscription names to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The value returned by the last `ListTopicSubscriptionsResponse`; indicates that this is a continuation of a prior `ListTopicSubscriptions` call, and that the system should return the next page of data.
		 * @return {ListTopicSubscriptionsResponse} Successful response
		 */
		Pubsub_projects_topics_subscriptions_list(topic: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTopicSubscriptionsResponse> {
			return this.http.get<ListTopicSubscriptionsResponse>(this.baseUri + 'v1beta2/' + (topic == null ? '' : encodeURIComponent(topic)) + '/subscriptions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic does not exist. The message payload must not be empty; it must contain either a non-empty data field, or at least one attribute.
		 * Post v1beta2/{topic}:publish
		 * @param {string} topic The messages in the request will be published on this topic.
		 * @return {PublishResponse} Successful response
		 */
		Pubsub_projects_topics_publish(topic: string, requestBody: PublishRequest): Observable<PublishResponse> {
			return this.http.post<PublishResponse>(this.baseUri + 'v1beta2/' + (topic == null ? '' : encodeURIComponent(topic)) + ':publish', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

