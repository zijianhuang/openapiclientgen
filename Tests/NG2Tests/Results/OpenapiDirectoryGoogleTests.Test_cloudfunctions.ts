import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * Specifies the audit configuration for a service.
	 * The configuration determines which permission types are logged, and what
	 * identities, if any, are exempted from logging.
	 * An AuditConfig must have one or more AuditLogConfigs.
	 * If there are AuditConfigs for both `allServices` and a specific service,
	 * the union of the two AuditConfigs is used for that service: the log_types
	 * specified in each AuditConfig are enabled, and the exempted_members in each
	 * AuditLogConfig are exempted.
	 * Example Policy with multiple AuditConfigs:
	 *     {
	 *       "audit_configs": [
	 *         {
	 *           "service": "allServices"
	 *           "audit_log_configs": [
	 *             {
	 *               "log_type": "DATA_READ",
	 *               "exempted_members": [
	 *                 "user:jose@example.com"
	 *               ]
	 *             },
	 *             {
	 *               "log_type": "DATA_WRITE",
	 *             },
	 *             {
	 *               "log_type": "ADMIN_READ",
	 *             }
	 *           ]
	 *         },
	 *         {
	 *           "service": "sampleservice.googleapis.com"
	 *           "audit_log_configs": [
	 *             {
	 *               "log_type": "DATA_READ",
	 *             },
	 *             {
	 *               "log_type": "DATA_WRITE",
	 *               "exempted_members": [
	 *                 "user:aliya@example.com"
	 *               ]
	 *             }
	 *           ]
	 *         }
	 *       ]
	 *     }
	 * For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ
	 * logging. It also exempts jose@example.com from DATA_READ logging, and
	 * aliya@example.com from DATA_WRITE logging.
	 */
	export interface AuditConfig {

		/** The configuration for logging of each type of permission. */
		auditLogConfigs?: Array<AuditLogConfig>;

		/**
		 * Specifies a service that will be enabled for audit logging.
		 * For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
		 * `allServices` is a special value that covers all services.
		 */
		service?: string;
	}


	/**
	 * Provides the configuration for logging a type of permissions.
	 * Example:
	 *     {
	 *       "audit_log_configs": [
	 *         {
	 *           "log_type": "DATA_READ",
	 *           "exempted_members": [
	 *             "user:jose@example.com"
	 *           ]
	 *         },
	 *         {
	 *           "log_type": "DATA_WRITE",
	 *         }
	 *       ]
	 *     }
	 * This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting
	 * jose@example.com from DATA_READ logging.
	 */
	export interface AuditLogConfig {

		/**
		 * Specifies the identities that do not cause logging for this type of
		 * permission.
		 * Follows the same format of Binding.members.
		 */
		exemptedMembers?: Array<string>;

		/** The log type that this config enables. */
		logType?: AuditLogConfigLogType;
	}

	export enum AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 0, ADMIN_READ = 1, DATA_WRITE = 2, DATA_READ = 3 }


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


	/** Request for the `CallFunction` method. */
	export interface CallFunctionRequest {

		/** Required. Input to be passed to the function. */
		data?: string;
	}


	/** Response of `CallFunction` method. */
	export interface CallFunctionResponse {

		/**
		 * Either system or user-function generated error. Set if execution
		 * was not successful.
		 */
		error?: string;

		/** Execution id of function invocation. */
		executionId?: string;

		/**
		 * Result populated for successful execution of synchronous function. Will
		 * not be populated if function does not return a result through context.
		 */
		result?: string;
	}


	/**
	 * Describes a Cloud Function that contains user computation executed in
	 * response to an event. It encapsulate function and triggers configurations.
	 */
	export interface CloudFunction {

		/**
		 * The amount of memory in MB available for a function.
		 * Defaults to 256MB.
		 */
		availableMemoryMb?: number;

		/** User-provided description of a function. */
		description?: string;

		/**
		 * The name of the function (as defined in source code) that will be
		 * executed. Defaults to the resource name suffix, if not specified. For
		 * backward compatibility, if function with given name is not found, then the
		 * system will try to use function named "function".
		 * For Node.js this is name of a function exported by the module specified
		 * in `source_location`.
		 */
		entryPoint?: string;

		/** Environment variables that shall be available during function execution. */
		environmentVariables?: {[id: string]: any };

		/**
		 * Describes EventTrigger, used to request events be sent from another
		 * service.
		 */
		eventTrigger?: EventTrigger;

		/** Describes HttpsTrigger, could be used to connect web hooks to function. */
		httpsTrigger?: HttpsTrigger;

		/**
		 * The ingress settings for the function, controlling what traffic can reach
		 * it.
		 */
		ingressSettings?: CloudFunctionIngressSettings;

		/** Labels associated with this Cloud Function. */
		labels?: {[id: string]: any };

		/**
		 * The limit on the maximum number of function instances that may coexist at a
		 * given time.
		 */
		maxInstances?: number;

		/**
		 * A user-defined name of the function. Function names must be unique
		 * globally and match pattern `projects/locations/functions/*`
		 */
		name?: string;

		/**
		 * The VPC Network that this cloud function can connect to. It can be
		 * either the fully-qualified URI, or the short name of the network resource.
		 * If the short network name is used, the network must belong to the same
		 * project. Otherwise, it must belong to a project within the same
		 * organization. The format of this field is either
		 * `projects/{project}/global/networks/{network}` or `{network}`, where
		 * {project} is a project id where the network is defined, and {network} is
		 * the short name of the network.
		 * This field is mutually exclusive with `vpc_connector` and will be replaced
		 * by it.
		 * See [the VPC documentation](https://cloud.google.com/compute/docs/vpc) for
		 * more information on connecting Cloud projects.
		 */
		network?: string;

		/**
		 * The runtime in which to run the function. Required when deploying a new
		 * function, optional when updating an existing function. For a complete
		 * list of possible choices, see the
		 * [`gcloud` command
		 * reference](/sdk/gcloud/reference/functions/deploy#--runtime).
		 */
		runtime?: string;

		/**
		 * The email of the function's service account. If empty, defaults to
		 * `{project_id}@appspot.gserviceaccount.com`.
		 */
		serviceAccountEmail?: string;

		/**
		 * The Google Cloud Storage URL, starting with gs://, pointing to the zip
		 * archive which contains the function.
		 */
		sourceArchiveUrl?: string;

		/**
		 * Describes SourceRepository, used to represent parameters related to
		 * source repository where a function is hosted.
		 */
		sourceRepository?: SourceRepository;

		/**
		 * The Google Cloud Storage signed URL used for source uploading, generated
		 * by google.cloud.functions.v1.GenerateUploadUrl
		 */
		sourceUploadUrl?: string;

		/** Output only. Status of the function deployment. */
		status?: CloudFunctionStatus;

		/**
		 * The function execution timeout. Execution is considered failed and
		 * can be terminated if the function is not completed at the end of the
		 * timeout period. Defaults to 60 seconds.
		 */
		timeout?: string;

		/** Output only. The last update timestamp of a Cloud Function. */
		updateTime?: string;

		/**
		 * Output only. The version identifier of the Cloud Function. Each deployment attempt
		 * results in a new version of a function being created.
		 */
		versionId?: string;

		/**
		 * The VPC Network Connector that this cloud function can connect to. It can
		 * be either the fully-qualified URI, or the short name of the network
		 * connector resource. The format of this field is
		 * `projects/locations/connectors/*`
		 * This field is mutually exclusive with `network` field and will eventually
		 * replace it.
		 * See [the VPC documentation](https://cloud.google.com/compute/docs/vpc) for
		 * more information on connecting Cloud projects.
		 */
		vpcConnector?: string;

		/**
		 * The egress settings for the connector, controlling what traffic is diverted
		 * through it.
		 */
		vpcConnectorEgressSettings?: CloudFunctionVpcConnectorEgressSettings;
	}


	/**
	 * Describes EventTrigger, used to request events be sent from another
	 * service.
	 */
	export interface EventTrigger {

		/**
		 * Required. The type of event to observe. For example:
		 * `providers/cloud.storage/eventTypes/object.change` and
		 * `providers/cloud.pubsub/eventTypes/topic.publish`.
		 * Event types match pattern `providers/eventTypes/*.*`.
		 * The pattern contains:
		 * 1. namespace: For example, `cloud.storage` and
		 * `google.firebase.analytics`.
		 * 2. resource type: The type of resource on which event occurs. For
		 * example, the Google Cloud Storage API includes the type `object`.
		 * 3. action: The action that generates the event. For example, action for
		 * a Google Cloud Storage Object is 'change'.
		 * These parts are lower case.
		 */
		eventType?: string;

		/**
		 * Describes the policy in case of function's execution failure.
		 * If empty, then defaults to ignoring failures (i.e. not retrying them).
		 */
		failurePolicy?: FailurePolicy;

		/**
		 * Required. The resource(s) from which to observe events, for example,
		 * `projects/_/buckets/myBucket`.
		 * Not all syntactically correct values are accepted by all services. For
		 * example:
		 * 1. The authorization model must support it. Google Cloud Functions
		 * only allows EventTriggers to be deployed that observe resources in the
		 * same project as the `CloudFunction`.
		 * 2. The resource type must match the pattern expected for an
		 * `event_type`. For example, an `EventTrigger` that has an
		 * `event_type` of "google.pubsub.topic.publish" should have a resource
		 * that matches Google Cloud Pub/Sub topics.
		 * Additionally, some services may support short names when creating an
		 * `EventTrigger`. These will always be returned in the normalized "long"
		 * format.
		 * See each *service's* documentation for supported formats.
		 */
		resource?: string;

		/**
		 * The hostname of the service that should be observed.
		 * If no string is provided, the default service implementing the API will
		 * be used. For example, `storage.googleapis.com` is the default for all
		 * event types in the `google.storage` namespace.
		 */
		service?: string;
	}


	/**
	 * Describes the policy in case of function's execution failure.
	 * If empty, then defaults to ignoring failures (i.e. not retrying them).
	 */
	export interface FailurePolicy {

		/**
		 * Describes the retry policy in case of function's execution failure.
		 * A function execution will be retried on any failure.
		 * A failed execution will be retried up to 7 days with an exponential backoff
		 * (capped at 10 seconds).
		 * Retried execution is charged as any other execution.
		 */
		retry?: Retry;
	}


	/**
	 * Describes the retry policy in case of function's execution failure.
	 * A function execution will be retried on any failure.
	 * A failed execution will be retried up to 7 days with an exponential backoff
	 * (capped at 10 seconds).
	 * Retried execution is charged as any other execution.
	 */
	export interface Retry {
	}


	/** Describes HttpsTrigger, could be used to connect web hooks to function. */
	export interface HttpsTrigger {

		/** Output only. The deployed url for the function. */
		url?: string;
	}

	export enum CloudFunctionIngressSettings { INGRESS_SETTINGS_UNSPECIFIED = 0, ALLOW_ALL = 1, ALLOW_INTERNAL_ONLY = 2 }


	/**
	 * Describes SourceRepository, used to represent parameters related to
	 * source repository where a function is hosted.
	 */
	export interface SourceRepository {

		/**
		 * Output only. The URL pointing to the hosted repository where the function
		 * were defined at the time of deployment. It always points to a specific
		 * commit in the format described above.
		 */
		deployedUrl?: string;

		/**
		 * The URL pointing to the hosted repository where the function is defined.
		 * There are supported Cloud Source Repository URLs in the following
		 * formats:
		 * To refer to a specific commit:
		 * `https://source.developers.google.com/projects/repos/revisions/paths/*`
		 * To refer to a moveable alias (branch):
		 * `https://source.developers.google.com/projects/repos/moveable-aliases/paths/*`
		 * In particular, to refer to HEAD use `master` moveable alias.
		 * To refer to a specific fixed alias (tag):
		 * `https://source.developers.google.com/projects/repos/fixed-aliases/paths/*`
		 * You may omit `paths/*` if you want to use the main directory.
		 */
		url?: string;
	}

	export enum CloudFunctionStatus { CLOUD_FUNCTION_STATUS_UNSPECIFIED = 0, ACTIVE = 1, OFFLINE = 2, DEPLOY_IN_PROGRESS = 3, DELETE_IN_PROGRESS = 4, UNKNOWN = 5 }

	export enum CloudFunctionVpcConnectorEgressSettings { VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED = 0, PRIVATE_RANGES_ONLY = 1, ALL_TRAFFIC = 2 }


	/** Request of `GenerateDownloadUrl` method. */
	export interface GenerateDownloadUrlRequest {

		/**
		 * The optional version of function. If not set, default, current version
		 * is used.
		 */
		versionId?: string;
	}


	/** Response of `GenerateDownloadUrl` method. */
	export interface GenerateDownloadUrlResponse {

		/**
		 * The generated Google Cloud Storage signed URL that should be used for
		 * function source code download.
		 */
		downloadUrl?: string;
	}


	/** Request of `GenerateSourceUploadUrl` method. */
	export interface GenerateUploadUrlRequest {
	}


	/** Response of `GenerateSourceUploadUrl` method. */
	export interface GenerateUploadUrlResponse {

		/**
		 * The generated Google Cloud Storage signed URL that should be used for a
		 * function source code upload. The uploaded file should be a zip archive
		 * which contains a function.
		 */
		uploadUrl?: string;
	}


	/** Response for the `ListFunctions` method. */
	export interface ListFunctionsResponse {

		/** The functions that match the request. */
		functions?: Array<CloudFunction>;

		/**
		 * If not empty, indicates that there may be more functions that match
		 * the request; this value should be passed in a new
		 * google.cloud.functions.v1.ListFunctionsRequest
		 * to get more functions.
		 */
		nextPageToken?: string;

		/**
		 * Locations that could not be reached. The response does not include any
		 * functions from these locations.
		 */
		unreachable?: Array<string>;
	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string;
	}


	/** A resource that represents Google Cloud Platform location. */
	export interface Location {

		/**
		 * The friendly name for this location, typically a nearby city name.
		 * For example, "Tokyo".
		 */
		displayName?: string;

		/**
		 * Cross-service attributes for the location. For example
		 * {"cloud.googleapis.com/region": "us-east1"}
		 */
		labels?: {[id: string]: any };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string;

		/**
		 * Service-specific metadata. For example the available capacity at the given
		 * location.
		 */
		metadata?: {[id: string]: any };

		/**
		 * Resource name for the location, which may vary between implementations.
		 * For example: `"projects/example-project/locations/us-east1"`
		 */
		name?: string;
	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}


	/**
	 * This resource represents a long-running operation that is the result of a
	 * network API call.
	 */
	export interface Operation {

		/**
		 * If the value is `false`, it means the operation is still in progress.
		 * If `true`, the operation is completed, and either `error` or `response` is
		 * available.
		 */
		done?: boolean;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status;

		/**
		 * Service-specific metadata associated with the operation.  It typically
		 * contains progress information and common metadata such as create time.
		 * Some services might not provide such metadata.  Any method that returns a
		 * long-running operation should document the metadata type, if any.
		 */
		metadata?: {[id: string]: any };

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name?: string;

		/**
		 * The normal response of the operation in case of success.  If the original
		 * method returns no data on success, such as `Delete`, the response is
		 * `google.protobuf.Empty`.  If the original method is standard
		 * `Get`/`Create`/`Update`, the response should be the resource.  For other
		 * methods, the response should have the type `XxxResponse`, where `Xxx`
		 * is the original method name.  For example, if the original method name
		 * is `TakeSnapshot()`, the inferred response type is
		 * `TakeSnapshotResponse`.
		 */
		response?: {[id: string]: any };
	}


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string>;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string;
	}


	/** Metadata describing an Operation */
	export interface OperationMetadataV1 {

		/** The original request that started the operation. */
		request?: {[id: string]: any };

		/**
		 * Target of the operation - for example
		 * projects/project-1/locations/region-1/functions/function-1
		 */
		target?: string;

		/** Type of operation. */
		type?: OperationMetadataV1Type;

		/** The last update timestamp of the operation. */
		updateTime?: string;

		/**
		 * Version id of the function created or updated by an API call.
		 * This field is only populated for Create and Update operations.
		 */
		versionId?: string;
	}

	export enum OperationMetadataV1Type { OPERATION_UNSPECIFIED = 0, CREATE_FUNCTION = 1, UPDATE_FUNCTION = 2, DELETE_FUNCTION = 3 }


	/** Metadata describing an Operation */
	export interface OperationMetadataV1Beta2 {

		/** The original request that started the operation. */
		request?: {[id: string]: any };

		/**
		 * Target of the operation - for example
		 * projects/project-1/locations/region-1/functions/function-1
		 */
		target?: string;

		/** Type of operation. */
		type?: OperationMetadataV1Type;

		/** The last update timestamp of the operation. */
		updateTime?: string;

		/**
		 * Version id of the function created or updated by an API call.
		 * This field is only populated for Create and Update operations.
		 */
		versionId?: string;
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

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<AuditConfig>;

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

		/**
		 * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
		 * the fields in the mask will be modified. If no mask is provided, the
		 * following default mask is used:
		 * paths: "bindings, etag"
		 * This field is only used by Cloud IAM.
		 */
		updateMask?: string;
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists operations that match the specified filter in the request. If the
		 * server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * NOTE: the `name` binding allows API services to override the binding
		 * to use different resource name schemes, such as `users/operations`. To
		 * override the binding, API services can add a binding such as
		 * `"/v1/{name=users/*}/operations"` to their service configuration.
		 * For backwards compatibility, the default name includes the operations
		 * collection id, however overriding users must ensure the name binding
		 * is the parent resource, without the operations collection id.
		 * Get v1/operations
		 * @param {string} filter Required. A filter for matching the requested operations.<br><br> The supported formats of <b>filter</b> are:<br> To query for a specific function: <code>project:*,location:*,function:*</code><br> To query for all of the latest operations for a project: <code>project:*,latest:true</code>
		 * @param {string} name Must not be set.
		 * @param {number} pageSize The maximum number of records that should be returned.<br> Requested page size cannot exceed 100. If not set, the default page size is 100.<br><br> Pagination is only supported when querying for a specific function.
		 * @param {string} pageToken Token identifying which result to start with, which is returned by a previous list call.<br><br> Pagination is only supported when querying for a specific function.
		 * @return {void} Successful response
		 */
		Cloudfunctions_operations_list(filter: string, name: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/operations?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new function. If a function with the given name already exists in
		 * the specified project, the long running operation will return
		 * `ALREADY_EXISTS` error.
		 * Post v1/{location}/functions
		 * @param {string} location Required. The project and location in which the function should be created, specified
		 * in the format `projects/locations/*`
		 * @return {void} Successful response
		 */
		Cloudfunctions_projects_locations_functions_create(location: string, requestBody: CloudFunction): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (location == null ? '' : encodeURIComponent(location)) + '/functions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a function with the given name from the specified project. If the
		 * given function is used by some trigger, the trigger will be updated to
		 * remove this function.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the function which should be deleted.
		 * @return {void} Successful response
		 */
		Cloudfunctions_projects_locations_functions_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a function with the given name from the requested project.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the function which details should be obtained.
		 * @return {void} Successful response
		 */
		Cloudfunctions_projects_locations_functions_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates existing function.
		 * Patch v1/{name}
		 * @param {string} name A user-defined name of the function. Function names must be unique
		 * globally and match pattern `projects/locations/functions/*`
		 * @param {string} updateMask Required list of fields to be updated in this request.
		 * @return {void} Successful response
		 */
		Cloudfunctions_projects_locations_functions_patch(name: string, updateMask: string, requestBody: CloudFunction): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {void} Successful response
		 */
		Cloudfunctions_projects_locations_list(name: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Synchronously invokes a deployed Cloud Function. To be used for testing
		 * purposes as very limited traffic is allowed. For more information on
		 * the actual limits, refer to
		 * [Rate Limits](https://cloud.google.com/functions/quotas#rate_limits).
		 * Post v1/{name}:call
		 * @param {string} name Required. The name of the function to be called.
		 * @return {void} Successful response
		 */
		Cloudfunctions_projects_locations_functions_call(name: string, requestBody: CallFunctionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':call', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a signed URL for downloading deployed function source code.
		 * The URL is only valid for a limited period and should be used within
		 * minutes after generation.
		 * For more information about the signed URL usage see:
		 * https://cloud.google.com/storage/docs/access-control/signed-urls
		 * Post v1/{name}:generateDownloadUrl
		 * @param {string} name The name of function for which source code Google Cloud Storage signed
		 * URL should be generated.
		 * @return {void} Successful response
		 */
		Cloudfunctions_projects_locations_functions_generateDownloadUrl(name: string, requestBody: GenerateDownloadUrlRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':generateDownloadUrl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of functions that belong to the requested project.
		 * Get v1/{parent}/functions
		 * @param {string} parent The project and location from which the function should be listed,
		 * specified in the format `projects/locations/*`
		 * If you want to list functions in all locations, use "-" in place of a
		 * location. When listing functions in all locations, if one or more
		 * location(s) are unreachable, the response will contain functions from all
		 * reachable locations along with the names of any unreachable locations.
		 * @param {number} pageSize Maximum number of functions to return per call.
		 * @param {string} pageToken The value returned by the last
		 * `ListFunctionsResponse`; indicates that
		 * this is a continuation of a prior `ListFunctions` call, and that the
		 * system should return the next page of data.
		 * @return {void} Successful response
		 */
		Cloudfunctions_projects_locations_functions_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/functions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a signed URL for uploading a function source code.
		 * For more information about the signed URL usage see:
		 * https://cloud.google.com/storage/docs/access-control/signed-urls.
		 * Once the function source code upload is complete, the used signed
		 * URL should be provided in CreateFunction or UpdateFunction request
		 * as a reference to the function source code.
		 * When uploading source code to the generated signed URL, please follow
		 * these restrictions:
		 * * Source file type should be a zip file.
		 * * Source file size should not exceed 100MB limit.
		 * * No credentials should be attached - the signed URLs provide access to the
		 * target bucket using internal service identity; if credentials were
		 * attached, the identity from the credentials would be used, but that
		 * identity does not have permissions to upload files to the URL.
		 * When making a HTTP PUT request, these two headers need to be specified:
		 * * `content-type: application/zip`
		 * * `x-goog-content-length-range: 0,104857600`
		 * And this header SHOULD NOT be specified:
		 * * `Authorization: Bearer YOUR_TOKEN`
		 * Post v1/{parent}/functions:generateUploadUrl
		 * @param {string} parent The project and location in which the Google Cloud Storage signed URL
		 * should be generated, specified in the format `projects/locations/*`.
		 * @return {void} Successful response
		 */
		Cloudfunctions_projects_locations_functions_generateUploadUrl(parent: string, requestBody: GenerateUploadUrlRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/functions:generateUploadUrl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the IAM access control policy for a function.
		 * Returns an empty policy if the function exists and does not have a policy
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
		Cloudfunctions_projects_locations_functions_getIamPolicy(resource: string, options_requestedPolicyVersion: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the IAM access control policy on the specified function.
		 * Replaces any existing policy.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Cloudfunctions_projects_locations_functions_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Tests the specified permissions against the IAM access control policy
		 * for a function.
		 * If the function does not exist, this will return an empty set of
		 * permissions, not a NOT_FOUND error.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Cloudfunctions_projects_locations_functions_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

