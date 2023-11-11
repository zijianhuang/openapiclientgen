import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Information for connecting over HTTP(s). */
	export interface Addressable {
		url?: string | null;
	}


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
		auditLogConfigs?: Array<AuditLogConfig> | null;

		/**
		 * Specifies a service that will be enabled for audit logging.
		 * For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
		 * `allServices` is a special value that covers all services.
		 */
		service?: string | null;
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
		exemptedMembers?: Array<string> | null;

		/** The log type that this config enables. */
		logType?: AuditLogConfigLogType | null;
	}

	export enum AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 0, ADMIN_READ = 1, DATA_WRITE = 2, DATA_READ = 3 }


	/**
	 * A domain that a user has been authorized to administer. To authorize use
	 * of a domain, verify ownership via
	 * [Webmaster Central](https://www.google.com/webmasters/verification/home).
	 */
	export interface AuthorizedDomain {

		/** Relative name of the domain authorized for use. Example: `example.com`. */
		id?: string | null;

		/**
		 * Read only. Full path to the `AuthorizedDomain` resource in the API.
		 * Example: `apps/myapp/authorizedDomains/example.com`.
		 */
		name?: string | null;
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
		condition?: Expr | null;

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
		members?: Array<string> | null;

		/**
		 * Role that is assigned to `members`.
		 * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
		 */
		role?: string | null;
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
		description?: string | null;

		/**
		 * Textual representation of an expression in Common Expression Language
		 * syntax.
		 */
		expression?: string | null;

		/**
		 * Optional. String indicating the location of the expression for error
		 * reporting, e.g. a file name and a position in the file.
		 */
		location?: string | null;

		/**
		 * Optional. Title for the expression, i.e. a short string describing
		 * its purpose. This can be used e.g. in UIs which allow to enter the
		 * expression.
		 */
		title?: string | null;
	}


	/**
	 * Cloud Run fully managed: not supported
	 * Cloud Run for Anthos: supported
	 * ConfigMapEnvSource selects a ConfigMap to populate the environment
	 * variables with.
	 * The contents of the target ConfigMap's Data field will represent the
	 * key-value pairs as environment variables.
	 */
	export interface ConfigMapEnvSource {

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * LocalObjectReference contains enough information to let you locate the
		 * referenced object inside the same namespace.
		 */
		localObjectReference?: LocalObjectReference | null;

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * The ConfigMap to select from.
		 */
		name?: string | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Specify whether the ConfigMap must be defined
		 */
		optional?: boolean | null;
	}


	/**
	 * Cloud Run fully managed: not supported
	 * Cloud Run for Anthos: supported
	 * LocalObjectReference contains enough information to let you locate the
	 * referenced object inside the same namespace.
	 */
	export interface LocalObjectReference {

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Name of the referent.
		 * More info:
		 * https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
		 */
		name?: string | null;
	}


	/**
	 * Cloud Run fully managed: not supported
	 * Cloud Run for Anthos: supported
	 * Selects a key from a ConfigMap.
	 */
	export interface ConfigMapKeySelector {

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * The key to select.
		 */
		key?: string | null;

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * LocalObjectReference contains enough information to let you locate the
		 * referenced object inside the same namespace.
		 */
		localObjectReference?: LocalObjectReference | null;

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * The ConfigMap to select from.
		 */
		name?: string | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Specify whether the ConfigMap or its key must be defined
		 */
		optional?: boolean | null;
	}


	/**
	 * Cloud Run fully managed: not supported
	 * Cloud Run for Anthos: supported
	 * Adapts a ConfigMap into a volume.
	 * The contents of the target ConfigMap's Data field will be presented in a
	 * volume as files using the keys in the Data field as the file names, unless
	 * the items element is populated with specific mappings of keys to paths.
	 */
	export interface ConfigMapVolumeSource {

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Mode bits to use on created files by default. Must be a value between 0 and
		 * 0777. Defaults to 0644. Directories within the path are not affected by
		 * this setting. This might be in conflict with other options that affect the
		 * file mode, like fsGroup, and the result can be other mode bits set.
		 */
		defaultMode?: number | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * If unspecified, each key-value pair in the Data field of the referenced
		 * Secret will be projected into the volume as a file whose name is the
		 * key and content is the value. If specified, the listed keys will be
		 * projected into the specified paths, and unlisted keys will not be
		 * present. If a key is specified which is not present in the Secret,
		 * the volume setup will error unless it is marked optional.
		 */
		items?: Array<KeyToPath> | null;

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Name of the config.
		 */
		name?: string | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Specify whether the Secret or its keys must be defined.
		 */
		optional?: boolean | null;
	}


	/**
	 * Cloud Run fully managed: not supported
	 * Cloud Run for Anthos: supported
	 * Maps a string key to a path within a volume.
	 */
	export interface KeyToPath {

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * The key to project.
		 */
		key?: string | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Mode bits to use on this file, must be a value between 0 and 0777. If not
		 * specified, the volume defaultMode will be used. This might be in conflict
		 * with other options that affect the file mode, like fsGroup, and the result
		 * can be other mode bits set.
		 */
		mode?: number | null;

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * The relative path of the file to map the key to.
		 * May not be an absolute path.
		 * May not contain the path element '..'.
		 * May not start with the string '..'.
		 */
		path?: string | null;
	}


	/**
	 * Configuration represents the "floating HEAD" of a linear history of
	 * Revisions, and optionally how the containers those revisions reference are
	 * built. Users create new Revisions by updating the Configuration's spec. The
	 * "latest created" revision's name is available under status, as is the "latest
	 * ready" revision's name. See also:
	 * https://github.com/knative/serving/blob/master/docs/spec/overview.md#configuration
	 */
	export interface Configuration {

		/** The API version for this call such as "serving.knative.dev/v1". */
		apiVersion?: string | null;

		/** The kind of resource, in this case always "Configuration". */
		kind?: string | null;

		/**
		 * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all
		 * persisted resources must have, which includes all objects users must create.
		 */
		metadata?: ObjectMeta | null;

		/**
		 * ConfigurationSpec holds the desired state of the Configuration (from the
		 * client).
		 */
		spec?: ConfigurationSpec | null;

		/**
		 * ConfigurationStatus communicates the observed state of the Configuration
		 * (from the controller).
		 */
		status?: ConfigurationStatus | null;
	}


	/**
	 * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all
	 * persisted resources must have, which includes all objects users must create.
	 */
	export interface ObjectMeta {

		/**
		 * (Optional)
		 * Annotations is an unstructured key value map stored with a resource that
		 * may be set by external tools to store and retrieve arbitrary metadata. They
		 * are not queryable and should be preserved when modifying objects. More
		 * info: http://kubernetes.io/docs/user-guide/annotations
		 */
		annotations?: {[id: string]: string } | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * The name of the cluster which the object belongs to.
		 * This is used to distinguish resources with same name and namespace in
		 * different clusters. This field is not set anywhere right now and apiserver
		 * is going to ignore it if set in create or update request.
		 */
		clusterName?: string | null;

		/**
		 * (Optional)
		 * CreationTimestamp is a timestamp representing the server time when this
		 * object was created. It is not guaranteed to be set in happens-before order
		 * across separate operations. Clients may not set this value. It is
		 * represented in RFC3339 form and is in UTC.
		 * Populated by the system.
		 * Read-only.
		 * Null for lists.
		 * More info:
		 * https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
		 */
		creationTimestamp?: string | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Number of seconds allowed for this object to gracefully terminate before
		 * it will be removed from the system. Only set when deletionTimestamp is also
		 * set. May only be shortened. Read-only.
		 */
		deletionGracePeriodSeconds?: number | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * DeletionTimestamp is RFC 3339 date and time at which this resource will be
		 * deleted. This field is set by the server when a graceful deletion is
		 * requested by the user, and is not directly settable by a client. The
		 * resource is expected to be deleted (no longer visible from resource lists,
		 * and not reachable by name) after the time in this field, once the
		 * finalizers list is empty. As long as the finalizers list contains items,
		 * deletion is blocked. Once the deletionTimestamp is set, this value may not
		 * be unset or be set further into the future, although it may be shortened or
		 * the resource may be deleted prior to this time. For example, a user may
		 * request that a pod is deleted in 30 seconds. The Kubelet will react by
		 * sending a graceful termination signal to the containers in the pod. After
		 * that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL)
		 * to the container and after cleanup, remove the pod from the API. In the
		 * presence of network partitions, this object may still exist after this
		 * timestamp, until an administrator or automated process can determine the
		 * resource is fully terminated.
		 * If not set, graceful deletion of the object has not been requested.
		 * Populated by the system when a graceful deletion is requested.
		 * Read-only.
		 * More info:
		 * https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
		 */
		deletionTimestamp?: string | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Must be empty before the object is deleted from the registry. Each entry
		 * is an identifier for the responsible component that will remove the entry
		 * from the list. If the deletionTimestamp of the object is non-nil, entries
		 * in this list can only be removed.
		 * +patchStrategy=merge
		 */
		finalizers?: Array<string> | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * GenerateName is an optional prefix, used by the server, to generate a
		 * unique name ONLY IF the Name field has not been provided. If this field is
		 * used, the name returned to the client will be different than the name
		 * passed. This value will also be combined with a unique suffix. The provided
		 * value has the same validation rules as the Name field, and may be truncated
		 * by the length of the suffix required to make the value unique on the
		 * server.
		 * If this field is specified and the generated name exists, the server will
		 * NOT return a 409 - instead, it will either return 201 Created or 500 with
		 * Reason ServerTimeout indicating a unique name could not be found in the
		 * time allotted, and the client should retry (optionally after the time
		 * indicated in the Retry-After header).
		 * Applied only if Name is not specified.
		 * More info:
		 * https://git.k8s.io/community/contributors/devel/api-conventions.md#idempotency
		 * string generateName = 2;
		 */
		generateName?: string | null;

		/**
		 * (Optional)
		 * A sequence number representing a specific generation of the desired state.
		 * Populated by the system. Read-only.
		 */
		generation?: number | null;

		/**
		 * (Optional)
		 * Map of string keys and values that can be used to organize and categorize
		 * (scope and select) objects. May match selectors of replication controllers
		 * and routes.
		 * More info: http://kubernetes.io/docs/user-guide/labels
		 */
		labels?: {[id: string]: string } | null;

		/**
		 * Name must be unique within a namespace, within a Cloud Run region.
		 * Is required when creating
		 * resources, although some resources may allow a client to request the
		 * generation of an appropriate name automatically. Name is primarily intended
		 * for creation idempotence and configuration definition. Cannot be updated.
		 * More info: http://kubernetes.io/docs/user-guide/identifiers#names
		 * +optional
		 */
		name?: string | null;

		/**
		 * Namespace defines the space within each name must be unique, within a
		 * Cloud Run region. In Cloud Run the namespace must be equal to either the
		 * project ID or project number.
		 */
		namespace?: string | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * List of objects that own this object. If ALL objects in the list have
		 * been deleted, this object will be garbage collected.
		 */
		ownerReferences?: Array<OwnerReference> | null;

		/**
		 * (Optional)
		 * An opaque value that represents the internal version of this object that
		 * can be used by clients to determine when objects have changed. May be used
		 * for optimistic concurrency, change detection, and the watch operation on a
		 * resource or set of resources. Clients must treat these values as opaque and
		 * passed unmodified back to the server. They may only be valid for a
		 * particular resource or set of resources.
		 * Populated by the system.
		 * Read-only.
		 * Value must be treated as opaque by clients and .
		 * More info:
		 * https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency
		 */
		resourceVersion?: string | null;

		/**
		 * (Optional)
		 * SelfLink is a URL representing this object.
		 * Populated by the system.
		 * Read-only.
		 * string selfLink = 4;
		 */
		selfLink?: string | null;

		/**
		 * (Optional)
		 * UID is the unique in time and space value for this object. It is typically
		 * generated by the server on successful creation of a resource and is not
		 * allowed to change on PUT operations.
		 * Populated by the system.
		 * Read-only.
		 * More info: http://kubernetes.io/docs/user-guide/identifiers#uids
		 */
		uid?: string | null;
	}


	/**
	 * OwnerReference contains enough information to let you identify an owning
	 * object. Currently, an owning object must be in the same namespace, so there
	 * is no namespace field.
	 */
	export interface OwnerReference {

		/** API version of the referent. */
		apiVersion?: string | null;

		/**
		 * If true, AND if the owner has the "foregroundDeletion" finalizer, then
		 * the owner cannot be deleted from the key-value store until this
		 * reference is removed.
		 * Defaults to false.
		 * To set this field, a user needs "delete" permission of the owner,
		 * otherwise 422 (Unprocessable Entity) will be returned.
		 * +optional
		 */
		blockOwnerDeletion?: boolean | null;

		/**
		 * If true, this reference points to the managing controller.
		 * +optional
		 */
		controller?: boolean | null;

		/**
		 * Kind of the referent.
		 * More info:
		 * https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
		 */
		kind?: string | null;

		/**
		 * Name of the referent.
		 * More info: http://kubernetes.io/docs/user-guide/identifiers#names
		 */
		name?: string | null;

		/**
		 * UID of the referent.
		 * More info: http://kubernetes.io/docs/user-guide/identifiers#uids
		 */
		uid?: string | null;
	}


	/**
	 * ConfigurationSpec holds the desired state of the Configuration (from the
	 * client).
	 */
	export interface ConfigurationSpec {

		/**
		 * RevisionTemplateSpec describes the data a revision should have when created
		 * from a template. Based on:
		 * https://github.com/kubernetes/api/blob/e771f807/core/v1/types.go#L3179-L3190
		 */
		template?: RevisionTemplate | null;
	}


	/**
	 * RevisionTemplateSpec describes the data a revision should have when created
	 * from a template. Based on:
	 * https://github.com/kubernetes/api/blob/e771f807/core/v1/types.go#L3179-L3190
	 */
	export interface RevisionTemplate {

		/**
		 * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all
		 * persisted resources must have, which includes all objects users must create.
		 */
		metadata?: ObjectMeta | null;

		/** RevisionSpec holds the desired state of the Revision (from the client). */
		spec?: RevisionSpec | null;
	}


	/** RevisionSpec holds the desired state of the Revision (from the client). */
	export interface RevisionSpec {

		/**
		 * (Optional)
		 * ContainerConcurrency specifies the maximum allowed in-flight (concurrent)
		 * requests per container instance of the Revision.
		 * Cloud Run fully managed: supported, defaults to 80
		 * Cloud Run for Anthos: supported, defaults to 0, which means concurrency
		 * to the application is not limited, and the system decides the
		 * target concurrency for the autoscaler.
		 */
		containerConcurrency?: number | null;

		/**
		 * Containers holds the single container that defines the unit of execution
		 * for this Revision. In the context of a Revision, we disallow a number of
		 * fields on this Container, including: name and lifecycle.
		 * In Cloud Run, only a single container may be provided.
		 * The runtime contract is documented here:
		 * https://github.com/knative/serving/blob/master/docs/runtime-contract.md
		 */
		containers?: Array<Container> | null;

		/**
		 * Email address of the IAM service account associated with the revision
		 * of the service. The service account represents the identity of the
		 * running revision, and determines what permissions the revision has. If
		 * not provided, the revision will use the project's default service account.
		 */
		serviceAccountName?: string | null;

		/**
		 * TimeoutSeconds holds the max duration the instance is allowed for
		 * responding to a request.
		 * Not currently used by Cloud Run.
		 */
		timeoutSeconds?: number | null;
		volumes?: Array<Volume> | null;
	}


	/**
	 * A single application container.
	 * This specifies both the container to run, the command to run in the container
	 * and the arguments to supply to it.
	 * Note that additional arguments may be supplied by the system to the container
	 * at runtime.
	 */
	export interface Container {

		/**
		 * (Optional)
		 * Cloud Run fully managed: supported
		 * Cloud Run for Anthos: supported
		 * Arguments to the entrypoint.
		 * The docker image's CMD is used if this is not provided.
		 * Variable references $(VAR_NAME) are expanded using the container's
		 * environment. If a variable cannot be resolved, the reference in the input
		 * string will be unchanged. The $(VAR_NAME) syntax can be escaped with a
		 * double $$, ie: $$(VAR_NAME). Escaped references will never be expanded,
		 * regardless of whether the variable exists or not.
		 * More info:
		 * https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
		 */
		args?: Array<string> | null;
		command?: Array<string> | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: supported
		 * Cloud Run for Anthos: supported
		 * List of environment variables to set in the container.
		 */
		env?: Array<EnvVar> | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * List of sources to populate environment variables in the container.
		 * The keys defined within a source must be a C_IDENTIFIER. All invalid keys
		 * will be reported as an event when the container is starting. When a key
		 * exists in multiple sources, the value associated with the last source will
		 * take precedence. Values defined by an Env with a duplicate key will take
		 * precedence. Cannot be updated.
		 */
		envFrom?: Array<EnvFromSource> | null;

		/**
		 * Cloud Run fully managed: only supports containers from Google Container
		 * Registry
		 * Cloud Run for Anthos: supported
		 * URL of the Container image.
		 * More info: https://kubernetes.io/docs/concepts/containers/images
		 */
		image?: string | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Image pull policy.
		 * One of Always, Never, IfNotPresent.
		 * Defaults to Always if :latest tag is specified, or IfNotPresent otherwise.
		 * More info:
		 * https://kubernetes.io/docs/concepts/containers/images#updating-images
		 */
		imagePullPolicy?: string | null;

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Probe describes a health check to be performed against a container to
		 * determine whether it is alive or ready to receive traffic.
		 */
		livenessProbe?: Probe | null;

		/**
		 * (Optional)
		 * Name of the container specified as a DNS_LABEL.
		 */
		name?: string | null;

		/**
		 * (Optional)
		 * List of ports to expose from the container. Only a single port can be
		 * specified. The specified ports must be listening on all interfaces
		 * (0.0.0.0) within the container to be accessible.
		 * If omitted, a port number will be chosen and passed to the container
		 * through the PORT environment variable for the container to listen on.
		 */
		ports?: Array<ContainerPort> | null;

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Probe describes a health check to be performed against a container to
		 * determine whether it is alive or ready to receive traffic.
		 */
		readinessProbe?: Probe | null;

		/** ResourceRequirements describes the compute resource requirements. */
		resources?: ResourceRequirements | null;

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * SecurityContext holds security configuration that will be applied to a
		 * container. Some fields are present in both SecurityContext and
		 * PodSecurityContext.  When both are set, the values in SecurityContext take
		 * precedence.
		 */
		securityContext?: SecurityContext | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Path at which the file to which the container's termination
		 * message will be written is mounted into the container's filesystem. Message
		 * written is intended to be brief final status, such as an assertion failure
		 * message. Will be truncated by the node if greater than 4096 bytes. The
		 * total message length across all containers will be limited to 12kb.
		 * Defaults to /dev/termination-log.
		 */
		terminationMessagePath?: string | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Indicate how the termination message should be populated. File will use the
		 * contents of terminationMessagePath to populate the container status message
		 * on both success and failure. FallbackToLogsOnError will use the last chunk
		 * of container log output if the termination message file is empty and the
		 * container exited with an error. The log output is limited to 2048 bytes or
		 * 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
		 */
		terminationMessagePolicy?: string | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Pod volumes to mount into the container's filesystem.
		 */
		volumeMounts?: Array<VolumeMount> | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Container's working directory.
		 * If not specified, the container runtime's default will be used, which
		 * might be configured in the container image.
		 */
		workingDir?: string | null;
	}


	/** EnvVar represents an environment variable present in a Container. */
	export interface EnvVar {

		/** Name of the environment variable. Must be a C_IDENTIFIER. */
		name?: string | null;

		/**
		 * (Optional)
		 * Variable references $(VAR_NAME) are expanded
		 * using the previous defined environment variables in the container and
		 * any route environment variables. If a variable cannot be resolved,
		 * the reference in the input string will be unchanged. The $(VAR_NAME)
		 * syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped
		 * references will never be expanded, regardless of whether the variable
		 * exists or not.
		 * Defaults to "".
		 */
		value?: string | null;

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * EnvVarSource represents a source for the value of an EnvVar.
		 */
		valueFrom?: EnvVarSource | null;
	}


	/**
	 * Cloud Run fully managed: not supported
	 * Cloud Run for Anthos: supported
	 * EnvVarSource represents a source for the value of an EnvVar.
	 */
	export interface EnvVarSource {

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Selects a key from a ConfigMap.
		 */
		configMapKeyRef?: ConfigMapKeySelector | null;

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * SecretKeySelector selects a key of a Secret.
		 */
		secretKeyRef?: SecretKeySelector | null;
	}


	/**
	 * Cloud Run fully managed: not supported
	 * Cloud Run for Anthos: supported
	 * SecretKeySelector selects a key of a Secret.
	 */
	export interface SecretKeySelector {

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * The key of the secret to select from.  Must be a valid secret key.
		 */
		key?: string | null;

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * LocalObjectReference contains enough information to let you locate the
		 * referenced object inside the same namespace.
		 */
		localObjectReference?: LocalObjectReference | null;

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * The name of the secret in the pod's namespace to select from.
		 */
		name?: string | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Specify whether the Secret or its key must be defined
		 */
		optional?: boolean | null;
	}


	/**
	 * Cloud Run fully managed: not supported
	 * Cloud Run for Anthos: supported
	 * EnvFromSource represents the source of a set of ConfigMaps
	 */
	export interface EnvFromSource {

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * ConfigMapEnvSource selects a ConfigMap to populate the environment
		 * variables with.
		 * The contents of the target ConfigMap's Data field will represent the
		 * key-value pairs as environment variables.
		 */
		configMapRef?: ConfigMapEnvSource | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * An optional identifier to prepend to each key in the ConfigMap. Must be a
		 * C_IDENTIFIER.
		 */
		prefix?: string | null;

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * SecretEnvSource selects a Secret to populate the environment
		 * variables with.
		 * The contents of the target Secret's Data field will represent the
		 * key-value pairs as environment variables.
		 */
		secretRef?: SecretEnvSource | null;
	}


	/**
	 * Cloud Run fully managed: not supported
	 * Cloud Run for Anthos: supported
	 * SecretEnvSource selects a Secret to populate the environment
	 * variables with.
	 * The contents of the target Secret's Data field will represent the
	 * key-value pairs as environment variables.
	 */
	export interface SecretEnvSource {

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * LocalObjectReference contains enough information to let you locate the
		 * referenced object inside the same namespace.
		 */
		localObjectReference?: LocalObjectReference | null;

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * The Secret to select from.
		 */
		name?: string | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Specify whether the Secret must be defined
		 */
		optional?: boolean | null;
	}


	/**
	 * Cloud Run fully managed: not supported
	 * Cloud Run for Anthos: supported
	 * Probe describes a health check to be performed against a container to
	 * determine whether it is alive or ready to receive traffic.
	 */
	export interface Probe {

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * ExecAction describes a "run in container" action.
		 */
		exec?: ExecAction | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Minimum consecutive failures for the probe to be considered failed after
		 * having succeeded. Defaults to 3. Minimum value is 1.
		 */
		failureThreshold?: number | null;

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * HTTPGetAction describes an action based on HTTP Get requests.
		 */
		httpGet?: HTTPGetAction | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Number of seconds after the container has started before liveness probes
		 * are initiated. More info:
		 * https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
		 */
		initialDelaySeconds?: number | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * How often (in seconds) to perform the probe.
		 * Default to 10 seconds. Minimum value is 1.
		 */
		periodSeconds?: number | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Minimum consecutive successes for the probe to be considered successful
		 * after having failed. Defaults to 1. Must be 1 for liveness. Minimum value
		 * is 1.
		 */
		successThreshold?: number | null;

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * TCPSocketAction describes an action based on opening a socket
		 */
		tcpSocket?: TCPSocketAction | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Number of seconds after which the probe times out.
		 * Defaults to 1 second. Minimum value is 1.
		 * More info:
		 * https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
		 */
		timeoutSeconds?: number | null;
	}


	/**
	 * Cloud Run fully managed: not supported
	 * Cloud Run for Anthos: supported
	 * ExecAction describes a "run in container" action.
	 */
	export interface ExecAction {

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Command is the command line to execute inside the container, the working
		 * directory for the command  is root ('/') in the container's filesystem. The
		 * command is simply exec'd, it is not run inside a shell, so traditional
		 * shell instructions ('|', etc) won't work. To use a shell, you need to
		 * explicitly call out to that shell. Exit status of 0 is treated as
		 * live/healthy and non-zero is unhealthy.
		 */
		command?: string | null;
	}


	/**
	 * Cloud Run fully managed: not supported
	 * Cloud Run for Anthos: supported
	 * HTTPGetAction describes an action based on HTTP Get requests.
	 */
	export interface HTTPGetAction {

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Host name to connect to, defaults to the pod IP. You probably want to set
		 * "Host" in httpHeaders instead.
		 */
		host?: string | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Custom headers to set in the request. HTTP allows repeated headers.
		 */
		httpHeaders?: Array<HTTPHeader> | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Path to access on the HTTP server.
		 */
		path?: string | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Scheme to use for connecting to the host.
		 * Defaults to HTTP.
		 */
		scheme?: string | null;
	}


	/**
	 * Cloud Run fully managed: not supported
	 * Cloud Run for Anthos: supported
	 * HTTPHeader describes a custom header to be used in HTTP probes
	 */
	export interface HTTPHeader {

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * The header field name
		 */
		name?: string | null;

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * The header field value
		 */
		value?: string | null;
	}


	/**
	 * Cloud Run fully managed: not supported
	 * Cloud Run for Anthos: supported
	 * TCPSocketAction describes an action based on opening a socket
	 */
	export interface TCPSocketAction {

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Optional: Host name to connect to, defaults to the pod IP.
		 */
		host?: string | null;

		/**
		 * IntOrString is a type that can hold an int32 or a string.  When used in
		 * JSON or YAML marshalling and unmarshalling, it produces or consumes the
		 * inner type.  This allows you to have, for example, a JSON field that can
		 * accept a name or number.
		 */
		port?: IntOrString | null;
	}


	/**
	 * IntOrString is a type that can hold an int32 or a string.  When used in
	 * JSON or YAML marshalling and unmarshalling, it produces or consumes the
	 * inner type.  This allows you to have, for example, a JSON field that can
	 * accept a name or number.
	 */
	export interface IntOrString {

		/** The int value. */
		intVal?: number | null;

		/** The string value. */
		strVal?: string | null;

		/** The type of the value. */
		type?: number | null;
	}


	/** ContainerPort represents a network port in a single container. */
	export interface ContainerPort {

		/**
		 * (Optional)
		 * Port number the container listens on.
		 * This must be a valid port number, 0 < x < 65536.
		 */
		containerPort?: number | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * If specified, used to specify which protocol to use.
		 * Allowed values are "http1" and "h2c".
		 */
		name?: string | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Protocol for port. Must be "TCP".
		 * Defaults to "TCP".
		 */
		protocol?: string | null;
	}


	/** ResourceRequirements describes the compute resource requirements. */
	export interface ResourceRequirements {

		/**
		 * (Optional)
		 * Cloud Run fully managed: Only memory and CPU are supported. Note: The only
		 * supported value for CPU is '1'.
		 * Cloud Run for Anthos: supported
		 * Limits describes the maximum amount of compute resources allowed.
		 * The values of the map is string form of the 'quantity' k8s type:
		 * https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go
		 */
		limits?: {[id: string]: string } | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: Only memory and CPU are supported. Note: The only
		 * supported value for CPU is '1'.
		 * Cloud Run for Anthos: supported
		 * Requests describes the minimum amount of compute resources required.
		 * If Requests is omitted for a container, it defaults to Limits if that is
		 * explicitly specified, otherwise to an implementation-defined value.
		 * The values of the map is string form of the 'quantity' k8s type:
		 * https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go
		 */
		requests?: {[id: string]: string } | null;
	}


	/**
	 * Cloud Run fully managed: not supported
	 * Cloud Run for Anthos: supported
	 * SecurityContext holds security configuration that will be applied to a
	 * container. Some fields are present in both SecurityContext and
	 * PodSecurityContext.  When both are set, the values in SecurityContext take
	 * precedence.
	 */
	export interface SecurityContext {

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * The UID to run the entrypoint of the container process.
		 * Defaults to user specified in image metadata if unspecified.
		 * May also be set in PodSecurityContext.  If set in both SecurityContext and
		 * PodSecurityContext, the value specified in SecurityContext takes
		 * precedence.
		 */
		runAsUser?: number | null;
	}


	/**
	 * Cloud Run fully managed: not supported
	 * Cloud Run for Anthos: supported
	 * VolumeMount describes a mounting of a Volume within a container.
	 */
	export interface VolumeMount {

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Path within the container at which the volume should be mounted.  Must
		 * not contain ':'.
		 */
		mountPath?: string | null;

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * This must match the Name of a Volume.
		 */
		name?: string | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Only true is accepted.
		 * Defaults to true.
		 */
		readOnly?: boolean | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Path within the volume from which the container's volume should be mounted.
		 * Defaults to "" (volume's root).
		 */
		subPath?: string | null;
	}


	/**
	 * Cloud Run fully managed: not supported
	 * Cloud Run for Anthos: supported
	 * Volume represents a named volume in a container.
	 */
	export interface Volume {

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Adapts a ConfigMap into a volume.
		 * The contents of the target ConfigMap's Data field will be presented in a
		 * volume as files using the keys in the Data field as the file names, unless
		 * the items element is populated with specific mappings of keys to paths.
		 */
		configMap?: ConfigMapVolumeSource | null;

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Volume's name.
		 */
		name?: string | null;

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * The contents of the target Secret's Data field will be presented in a volume
		 * as files using the keys in the Data field as the file names.
		 */
		secret?: SecretVolumeSource | null;
	}


	/**
	 * Cloud Run fully managed: not supported
	 * Cloud Run for Anthos: supported
	 * The contents of the target Secret's Data field will be presented in a volume
	 * as files using the keys in the Data field as the file names.
	 */
	export interface SecretVolumeSource {

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Mode bits to use on created files by default. Must be a value between 0 and
		 * 0777. Defaults to 0644. Directories within the path are not affected by
		 * this setting. This might be in conflict with other options that affect the
		 * file mode, like fsGroup, and the result can be other mode bits set.
		 */
		defaultMode?: number | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * If unspecified, each key-value pair in the Data field of the referenced
		 * Secret will be projected into the volume as a file whose name is the
		 * key and content is the value. If specified, the listed keys will be
		 * projected into the specified paths, and unlisted keys will not be
		 * present. If a key is specified which is not present in the Secret,
		 * the volume setup will error unless it is marked optional.
		 */
		items?: Array<KeyToPath> | null;

		/**
		 * (Optional)
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Specify whether the Secret or its keys must be defined.
		 */
		optional?: boolean | null;

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run for Anthos: supported
		 * Name of the secret in the container's namespace to use.
		 */
		secretName?: string | null;
	}


	/**
	 * ConfigurationStatus communicates the observed state of the Configuration
	 * (from the controller).
	 */
	export interface ConfigurationStatus {

		/**
		 * Conditions communicates information about ongoing/complete
		 * reconciliation processes that bring the "spec" inline with the observed
		 * state of the world.
		 */
		conditions?: Array<GoogleCloudRunV1Condition> | null;

		/**
		 * LatestCreatedRevisionName is the last revision that was created from this
		 * Configuration. It might not be ready yet, for that use
		 * LatestReadyRevisionName.
		 */
		latestCreatedRevisionName?: string | null;

		/**
		 * LatestReadyRevisionName holds the name of the latest Revision stamped out
		 * from this Configuration that has had its "Ready" condition become "True".
		 */
		latestReadyRevisionName?: string | null;

		/**
		 * ObservedGeneration is the 'Generation' of the Configuration that
		 * was last processed by the controller. The observed generation is updated
		 * even if the controller failed to process the spec and create the Revision.
		 * Clients polling for completed reconciliation should poll until
		 * observedGeneration = metadata.generation, and the Ready condition's status
		 * is True or False.
		 */
		observedGeneration?: number | null;
	}


	/** Condition defines a generic condition for a Resource */
	export interface GoogleCloudRunV1Condition {

		/** Optional. Last time the condition transitioned from one status to another. */
		lastTransitionTime?: string | null;

		/** Optional. Human readable message indicating details about the current status. */
		message?: string | null;

		/** Optional. One-word CamelCase reason for the condition's last transition. */
		reason?: string | null;

		/** Optional. How to interpret failures of this condition, one of Error, Warning, Info */
		severity?: string | null;

		/** Status of the condition, one of True, False, Unknown. */
		status?: string | null;

		/**
		 * type is used to communicate the status of the reconciliation process.
		 * See also:
		 * https://github.com/knative/serving/blob/master/docs/spec/errors.md#error-conditions-and-reporting
		 * Types common to all resources include:
		 * * "Ready": True when the Resource is ready.
		 */
		type?: string | null;
	}


	/** Resource to hold the state and status of a user's domain mapping. */
	export interface DomainMapping {

		/** The API version for this call such as "domains.cloudrun.com/v1". */
		apiVersion?: string | null;

		/** The kind of resource, in this case "DomainMapping". */
		kind?: string | null;

		/**
		 * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all
		 * persisted resources must have, which includes all objects users must create.
		 */
		metadata?: ObjectMeta | null;

		/** The desired state of the Domain Mapping. */
		spec?: DomainMappingSpec | null;

		/** The current state of the Domain Mapping. */
		status?: DomainMappingStatus | null;
	}


	/** The desired state of the Domain Mapping. */
	export interface DomainMappingSpec {

		/** The mode of the certificate. */
		certificateMode?: DomainMappingSpecCertificateMode | null;

		/**
		 * If set, the mapping will override any mapping set before this spec was set.
		 * It is recommended that the user leaves this empty to receive an error
		 * warning about a potential conflict and only set it once the respective UI
		 * has given such a warning.
		 */
		forceOverride?: boolean | null;

		/**
		 * The name of the Knative Route that this DomainMapping applies to.
		 * The route must exist.
		 */
		routeName?: string | null;
	}

	export enum DomainMappingSpecCertificateMode { CERTIFICATE_MODE_UNSPECIFIED = 0, NONE = 1, AUTOMATIC = 2 }


	/** The current state of the Domain Mapping. */
	export interface DomainMappingStatus {

		/**
		 * Array of observed DomainMappingConditions, indicating the current state
		 * of the DomainMapping.
		 */
		conditions?: Array<GoogleCloudRunV1Condition> | null;

		/** The name of the route that the mapping currently points to. */
		mappedRouteName?: string | null;

		/**
		 * ObservedGeneration is the 'Generation' of the DomainMapping that
		 * was last processed by the controller.
		 * Clients polling for completed reconciliation should poll until
		 * observedGeneration = metadata.generation and the Ready condition's status
		 * is True or False.
		 */
		observedGeneration?: number | null;

		/**
		 * The resource records required to configure this domain mapping. These
		 * records must be added to the domain's DNS configuration in order to
		 * serve the application via this domain mapping.
		 */
		resourceRecords?: Array<ResourceRecord> | null;
	}


	/** A DNS resource record. */
	export interface ResourceRecord {

		/**
		 * Relative name of the object affected by this record. Only applicable for
		 * `CNAME` records. Example: 'www'.
		 */
		name?: string | null;

		/**
		 * Data for this record. Values vary by record type, as defined in RFC 1035
		 * (section 5) and RFC 1034 (section 3.6.1).
		 */
		rrdata?: string | null;

		/** Resource record type. Example: `AAAA`. */
		type?: ResourceRecordType | null;
	}

	export enum ResourceRecordType { RECORD_TYPE_UNSPECIFIED = 0, A = 1, AAAA = 2, CNAME = 3 }


	/** A list of Authorized Domains. */
	export interface ListAuthorizedDomainsResponse {

		/** The authorized domains belonging to the user. */
		domains?: Array<AuthorizedDomain> | null;

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string | null;
	}


	/** ListConfigurationsResponse is a list of Configuration resources. */
	export interface ListConfigurationsResponse {

		/** The API version for this call such as "serving.knative.dev/v1". */
		apiVersion?: string | null;

		/** List of Configurations. */
		items?: Array<Configuration> | null;

		/** The kind of this resource, in this case "ConfigurationList". */
		kind?: string | null;

		/**
		 * ListMeta describes metadata that synthetic resources must have, including
		 * lists and various status objects. A resource may have only one of
		 * {ObjectMeta, ListMeta}.
		 */
		metadata?: ListMeta | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string> | null;
	}


	/**
	 * ListMeta describes metadata that synthetic resources must have, including
	 * lists and various status objects. A resource may have only one of
	 * {ObjectMeta, ListMeta}.
	 */
	export interface ListMeta {

		/**
		 * continue may be set if the user set a limit on the number of items
		 * returned, and indicates that the server has more data available. The value
		 * is opaque and may be used to issue another request to the endpoint that
		 * served this list to retrieve the next set of available objects. Continuing
		 * a list may not be possible if the server configuration has changed or more
		 * than a few minutes have passed. The resourceVersion field returned when
		 * using this continue value will be identical to the value in the first
		 * response.
		 */
		continue?: string | null;

		/**
		 * String that identifies the server's internal version of this object that
		 * can be used by clients to determine when objects have changed. Value must
		 * be treated as opaque by clients and passed unmodified back to the server.
		 * Populated by the system.
		 * Read-only.
		 * More info:
		 * https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency
		 * +optional
		 */
		resourceVersion?: string | null;

		/**
		 * SelfLink is a URL representing this object.
		 * Populated by the system.
		 * Read-only.
		 * +optional
		 */
		selfLink?: string | null;
	}


	/** ListDomainMappingsResponse is a list of DomainMapping resources. */
	export interface ListDomainMappingsResponse {

		/** The API version for this call such as "domains.cloudrun.com/v1". */
		apiVersion?: string | null;

		/** List of DomainMappings. */
		items?: Array<DomainMapping> | null;

		/** The kind of this resource, in this case "DomainMappingList". */
		kind?: string | null;

		/**
		 * ListMeta describes metadata that synthetic resources must have, including
		 * lists and various status objects. A resource may have only one of
		 * {ObjectMeta, ListMeta}.
		 */
		metadata?: ListMeta | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string> | null;
	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location> | null;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}


	/** A resource that represents Google Cloud Platform location. */
	export interface Location {

		/**
		 * The friendly name for this location, typically a nearby city name.
		 * For example, "Tokyo".
		 */
		displayName?: string | null;

		/**
		 * Cross-service attributes for the location. For example
		 * {"cloud.googleapis.com/region": "us-east1"}
		 */
		labels?: {[id: string]: string } | null;

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string | null;

		/**
		 * Service-specific metadata. For example the available capacity at the given
		 * location.
		 */
		metadata?: {[id: string]: any } | null;

		/**
		 * Resource name for the location, which may vary between implementations.
		 * For example: `"projects/example-project/locations/us-east1"`
		 */
		name?: string | null;
	}


	/** ListRevisionsResponse is a list of Revision resources. */
	export interface ListRevisionsResponse {

		/** The API version for this call such as "serving.knative.dev/v1". */
		apiVersion?: string | null;

		/** List of Revisions. */
		items?: Array<Revision> | null;

		/** The kind of this resource, in this case "RevisionList". */
		kind?: string | null;

		/**
		 * ListMeta describes metadata that synthetic resources must have, including
		 * lists and various status objects. A resource may have only one of
		 * {ObjectMeta, ListMeta}.
		 */
		metadata?: ListMeta | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string> | null;
	}


	/**
	 * Revision is an immutable snapshot of code and configuration.  A revision
	 * references a container image. Revisions are created by updates to a
	 * Configuration.
	 * See also:
	 * https://github.com/knative/serving/blob/master/docs/spec/overview.md#revision
	 */
	export interface Revision {

		/** The API version for this call such as "serving.knative.dev/v1". */
		apiVersion?: string | null;

		/** The kind of this resource, in this case "Revision". */
		kind?: string | null;

		/**
		 * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all
		 * persisted resources must have, which includes all objects users must create.
		 */
		metadata?: ObjectMeta | null;

		/** RevisionSpec holds the desired state of the Revision (from the client). */
		spec?: RevisionSpec | null;

		/**
		 * RevisionStatus communicates the observed state of the Revision (from the
		 * controller).
		 */
		status?: RevisionStatus | null;
	}


	/**
	 * RevisionStatus communicates the observed state of the Revision (from the
	 * controller).
	 */
	export interface RevisionStatus {

		/**
		 * Conditions communicates information about ongoing/complete
		 * reconciliation processes that bring the "spec" inline with the observed
		 * state of the world.
		 * As a Revision is being prepared, it will incrementally
		 * update conditions. Revision-specific conditions include:
		 * * "ResourcesAvailable": True when underlying resources have been
		 * provisioned.
		 * * "ContainerHealthy": True when the Revision readiness check completes.
		 * * "Active": True when the Revision may receive traffic.
		 */
		conditions?: Array<GoogleCloudRunV1Condition> | null;

		/**
		 * ImageDigest holds the resolved digest for the image specified
		 * within .Spec.Container.Image. The digest is resolved during the creation
		 * of Revision. This field holds the digest value regardless of whether
		 * a tag or digest was originally specified in the Container object.
		 */
		imageDigest?: string | null;

		/**
		 * Specifies the generated logging url for this particular revision
		 * based on the revision url template specified in the controller's config.
		 * +optional
		 */
		logUrl?: string | null;

		/**
		 * ObservedGeneration is the 'Generation' of the Revision that
		 * was last processed by the controller.
		 * Clients polling for completed reconciliation should poll until
		 * observedGeneration = metadata.generation, and the Ready condition's status
		 * is True or False.
		 */
		observedGeneration?: number | null;

		/** Not currently used by Cloud Run. */
		serviceName?: string | null;
	}


	/** ListRoutesResponse is a list of Route resources. */
	export interface ListRoutesResponse {

		/** The API version for this call such as "serving.knative.dev/v1". */
		apiVersion?: string | null;

		/** List of Routes. */
		items?: Array<Route> | null;

		/** The kind of this resource, in this case always "RouteList". */
		kind?: string | null;

		/**
		 * ListMeta describes metadata that synthetic resources must have, including
		 * lists and various status objects. A resource may have only one of
		 * {ObjectMeta, ListMeta}.
		 */
		metadata?: ListMeta | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string> | null;
	}


	/**
	 * Route is responsible for configuring ingress over a collection of Revisions.
	 * Some of the Revisions a Route distributes traffic over may be specified by
	 * referencing the Configuration responsible for creating them; in these cases
	 * the Route is additionally responsible for monitoring the Configuration for
	 * "latest ready" revision changes, and smoothly rolling out latest revisions.
	 * See also:
	 * https://github.com/knative/serving/blob/master/docs/spec/overview.md#route
	 * Cloud Run currently supports referencing a single Configuration to
	 * automatically deploy the "latest ready" Revision from that Configuration.
	 */
	export interface Route {

		/** The API version for this call such as "serving.knative.dev/v1". */
		apiVersion?: string | null;

		/** The kind of this resource, in this case always "Route". */
		kind?: string | null;

		/**
		 * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all
		 * persisted resources must have, which includes all objects users must create.
		 */
		metadata?: ObjectMeta | null;

		/** RouteSpec holds the desired state of the Route (from the client). */
		spec?: RouteSpec | null;

		/**
		 * RouteStatus communicates the observed state of the Route (from the
		 * controller).
		 */
		status?: RouteStatus | null;
	}


	/** RouteSpec holds the desired state of the Route (from the client). */
	export interface RouteSpec {

		/**
		 * Traffic specifies how to distribute traffic over a collection of Knative
		 * Revisions and Configurations.
		 * Cloud Run currently supports a single configurationName.
		 */
		traffic?: Array<TrafficTarget> | null;
	}


	/** TrafficTarget holds a single entry of the routing table for a Route. */
	export interface TrafficTarget {

		/**
		 * ConfigurationName of a configuration to whose latest revision we will
		 * send this portion of traffic. When the "status.latestReadyRevisionName"
		 * of the referenced configuration changes, we will automatically migrate
		 * traffic from the prior "latest ready" revision to the new one. This field
		 * is never set in Route's status, only its spec. This is mutually exclusive
		 * with RevisionName.
		 * Cloud Run currently supports a single ConfigurationName.
		 */
		configurationName?: string | null;

		/**
		 * LatestRevision may be optionally provided to indicate that the latest
		 * ready Revision of the Configuration should be used for this traffic
		 * target. When provided LatestRevision must be true if RevisionName is
		 * empty; it must be false when RevisionName is non-empty.
		 * +optional
		 */
		latestRevision?: boolean | null;

		/**
		 * Percent specifies percent of the traffic to this Revision or Configuration.
		 * This defaults to zero if unspecified.
		 * Cloud Run currently requires 100 percent for a single ConfigurationName
		 * TrafficTarget entry.
		 */
		percent?: number | null;

		/**
		 * RevisionName of a specific revision to which to send this portion of
		 * traffic. This is mutually exclusive with ConfigurationName.
		 * Providing RevisionName in spec is not currently supported by Cloud Run.
		 */
		revisionName?: string | null;

		/**
		 * Tag is optionally used to expose a dedicated url for referencing
		 * this target exclusively.
		 * Not currently supported in Cloud Run.
		 * +optional
		 */
		tag?: string | null;

		/**
		 * Output only. URL displays the URL for accessing tagged traffic targets. URL
		 * is displayed in status, and is disallowed on spec. URL must contain a
		 * scheme (e.g. http://) and a hostname, but may not contain anything else
		 * (e.g. basic auth, url path, etc.
		 * Not currently supported in Cloud Run.
		 */
		url?: string | null;
	}


	/**
	 * RouteStatus communicates the observed state of the Route (from the
	 * controller).
	 */
	export interface RouteStatus {

		/** Information for connecting over HTTP(s). */
		address?: Addressable | null;

		/**
		 * Conditions communicates information about ongoing/complete
		 * reconciliation processes that bring the "spec" inline with the observed
		 * state of the world.
		 */
		conditions?: Array<GoogleCloudRunV1Condition> | null;

		/**
		 * ObservedGeneration is the 'Generation' of the Route that
		 * was last processed by the controller.
		 * Clients polling for completed reconciliation should poll until
		 * observedGeneration = metadata.generation and the Ready condition's status
		 * is True or False.
		 * Note that providing a trafficTarget that only has a configurationName will
		 * result in a Route that does not increment either its metadata.generation or
		 * its observedGeneration, as new "latest ready" revisions from the
		 * Configuration are processed without an update to the Route's spec.
		 */
		observedGeneration?: number | null;

		/**
		 * Traffic holds the configured traffic distribution.
		 * These entries will always contain RevisionName references.
		 * When ConfigurationName appears in the spec, this will hold the
		 * LatestReadyRevisionName that we last observed.
		 */
		traffic?: Array<TrafficTarget> | null;

		/**
		 * URL holds the url that will distribute traffic over the provided traffic
		 * targets. It generally has the form:
		 * https://{route-hash}-{project-hash}-{cluster-level-suffix}.a.run.app
		 */
		url?: string | null;
	}


	/** A list of Service resources. */
	export interface ListServicesResponse {

		/** The API version for this call such as "serving.knative.dev/v1". */
		apiVersion?: string | null;

		/** List of Services. */
		items?: Array<Service> | null;

		/** The kind of this resource, in this case "ServiceList". */
		kind?: string | null;

		/**
		 * ListMeta describes metadata that synthetic resources must have, including
		 * lists and various status objects. A resource may have only one of
		 * {ObjectMeta, ListMeta}.
		 */
		metadata?: ListMeta | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string> | null;
	}


	/**
	 * Service acts as a top-level container that manages a set of Routes and
	 * Configurations which implement a network service. Service exists to provide a
	 * singular abstraction which can be access controlled, reasoned about, and
	 * which encapsulates software lifecycle decisions such as rollout policy and
	 * team resource ownership. Service acts only as an orchestrator of the
	 * underlying Routes and Configurations (much as a kubernetes Deployment
	 * orchestrates ReplicaSets).
	 * The Service's controller will track the statuses of its owned Configuration
	 * and Route, reflecting their statuses and conditions as its own.
	 * See also:
	 * https://github.com/knative/serving/blob/master/docs/spec/overview.md#service
	 */
	export interface Service {

		/** The API version for this call such as "serving.knative.dev/v1". */
		apiVersion?: string | null;

		/** The kind of resource, in this case "Service". */
		kind?: string | null;

		/**
		 * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all
		 * persisted resources must have, which includes all objects users must create.
		 */
		metadata?: ObjectMeta | null;

		/**
		 * ServiceSpec holds the desired state of the Route (from the client), which
		 * is used to manipulate the underlying Route and Configuration(s).
		 */
		spec?: ServiceSpec | null;

		/** The current state of the Service. Output only. */
		status?: ServiceStatus | null;
	}


	/**
	 * ServiceSpec holds the desired state of the Route (from the client), which
	 * is used to manipulate the underlying Route and Configuration(s).
	 */
	export interface ServiceSpec {

		/**
		 * RevisionTemplateSpec describes the data a revision should have when created
		 * from a template. Based on:
		 * https://github.com/kubernetes/api/blob/e771f807/core/v1/types.go#L3179-L3190
		 */
		template?: RevisionTemplate | null;

		/**
		 * Traffic specifies how to distribute traffic over a collection of Knative
		 * Revisions and Configurations.
		 */
		traffic?: Array<TrafficTarget> | null;
	}


	/** The current state of the Service. Output only. */
	export interface ServiceStatus {

		/** Information for connecting over HTTP(s). */
		address?: Addressable | null;

		/**
		 * Conditions communicates information about ongoing/complete
		 * reconciliation processes that bring the "spec" inline with the observed
		 * state of the world.
		 * Service-specific conditions include:
		 * * "ConfigurationsReady": true when the underlying Configuration is ready.
		 * * "RoutesReady": true when the underlying Route is ready.
		 * * "Ready": true when both the underlying Route and Configuration are
		 * ready.
		 */
		conditions?: Array<GoogleCloudRunV1Condition> | null;

		/**
		 * From ConfigurationStatus.
		 * LatestCreatedRevisionName is the last revision that was created from this
		 * Service's Configuration. It might not be ready yet, for that use
		 * LatestReadyRevisionName.
		 */
		latestCreatedRevisionName?: string | null;

		/**
		 * From ConfigurationStatus.
		 * LatestReadyRevisionName holds the name of the latest Revision stamped out
		 * from this Service's Configuration that has had its "Ready" condition become
		 * "True".
		 */
		latestReadyRevisionName?: string | null;

		/**
		 * ObservedGeneration is the 'Generation' of the Route that
		 * was last processed by the controller.
		 * Clients polling for completed reconciliation should poll until
		 * observedGeneration = metadata.generation and the Ready condition's status
		 * is True or False.
		 */
		observedGeneration?: number | null;

		/**
		 * From RouteStatus.
		 * Traffic holds the configured traffic distribution.
		 * These entries will always contain RevisionName references.
		 * When ConfigurationName appears in the spec, this will hold the
		 * LatestReadyRevisionName that we last observed.
		 */
		traffic?: Array<TrafficTarget> | null;

		/**
		 * From RouteStatus.
		 * URL holds the url that will distribute traffic over the provided traffic
		 * targets. It generally has the form
		 * https://{route-hash}-{project-hash}-{cluster-level-suffix}.a.run.app
		 */
		url?: string | null;
	}


	/**
	 * Cloud Run fully managed: not supported
	 * Cloud Run on GKE: supported
	 * Namespace provides a scope for Names.
	 * Use of multiple namespaces is optional.
	 */
	export interface Namespace {

		/**
		 * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all
		 * persisted resources must have, which includes all objects users must create.
		 */
		metadata?: ObjectMeta | null;

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run on GKE: supported
		 * NamespaceSpec describes the attributes on a Namespace.
		 */
		spec?: NamespaceSpec | null;

		/**
		 * Cloud Run fully managed: not supported
		 * Cloud Run on GKE: supported
		 * NamespaceStatus is information about the current status of a Namespace.
		 */
		status?: NamespaceStatus | null;
	}


	/**
	 * Cloud Run fully managed: not supported
	 * Cloud Run on GKE: supported
	 * NamespaceSpec describes the attributes on a Namespace.
	 */
	export interface NamespaceSpec {

		/**
		 * Finalizers is an opaque list of values that must be empty to permanently
		 * remove object from storage. More info:
		 * https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
		 */
		finalizers?: Array<string> | null;
	}


	/**
	 * Cloud Run fully managed: not supported
	 * Cloud Run on GKE: supported
	 * NamespaceStatus is information about the current status of a Namespace.
	 */
	export interface NamespaceStatus {

		/**
		 * Phase is the current lifecycle phase of the namespace.
		 * More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
		 */
		phase?: string | null;
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
		auditConfigs?: Array<AuditConfig> | null;

		/**
		 * Associates a list of `members` to a `role`. Optionally, may specify a
		 * `condition` that determines how and when the `bindings` are applied. Each
		 * of the `bindings` must contain at least one member.
		 */
		bindings?: Array<Binding> | null;

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
		etag?: string | null;

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
		version?: number | null;
	}


	/**
	 * Cloud Run fully managed: not supported
	 * Cloud Run on GKE: supported
	 * Secret holds secret data of a certain type. The total bytes of the values in
	 * the Data field must be less than MaxSecretSize bytes.
	 */
	export interface Secret {

		/**
		 * Data contains the secret data. Each key must consist of alphanumeric
		 * characters, '-', '_' or '.'. The serialized form of the secret data is a
		 * base64 encoded string, representing the arbitrary (possibly non-string)
		 * data value here. Described in https://tools.ietf.org/html/rfc4648#section-4
		 */
		data?: {[id: string]: string } | null;

		/**
		 * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all
		 * persisted resources must have, which includes all objects users must create.
		 */
		metadata?: ObjectMeta | null;

		/**
		 * stringData allows specifying non-binary secret data in string form.
		 * It is provided as a write-only convenience method.
		 * All keys and values are merged into the data field on write, overwriting
		 * any existing values. It is never output when reading from the API.
		 * +k8s:conversion-gen=false
		 */
		stringData?: {[id: string]: string } | null;

		/** Used to facilitate programmatic handling of secret data. */
		type?: string | null;
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
		policy?: Policy | null;

		/**
		 * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
		 * the fields in the mask will be modified. If no mask is provided, the
		 * following default mask is used:
		 * `paths: "bindings, etag"`
		 */
		updateMask?: string | null;
	}


	/** Status is a return value for calls that don't return other objects */
	export interface Status {

		/**
		 * Suggested HTTP return code for this status, 0 if not set.
		 * +optional
		 */
		code?: number | null;

		/**
		 * StatusDetails is a set of additional properties that MAY be set by the
		 * server to provide additional information about a response. The Reason
		 * field of a Status object defines what attributes will be set. Clients
		 * must ignore fields that do not match the defined type of each attribute,
		 * and should assume that any attribute may be empty, invalid, or under
		 * defined.
		 */
		details?: StatusDetails | null;

		/**
		 * A human-readable description of the status of this operation.
		 * +optional
		 */
		message?: string | null;

		/**
		 * ListMeta describes metadata that synthetic resources must have, including
		 * lists and various status objects. A resource may have only one of
		 * {ObjectMeta, ListMeta}.
		 */
		metadata?: ListMeta | null;

		/**
		 * A machine-readable description of why this operation is in the
		 * "Failure" status. If this value is empty there
		 * is no information available. A Reason clarifies an HTTP status
		 * code but does not override it.
		 * +optional
		 */
		reason?: string | null;

		/**
		 * Status of the operation.
		 * One of: "Success" or "Failure".
		 * More info:
		 * https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
		 * +optional
		 */
		status?: string | null;
	}


	/**
	 * StatusDetails is a set of additional properties that MAY be set by the
	 * server to provide additional information about a response. The Reason
	 * field of a Status object defines what attributes will be set. Clients
	 * must ignore fields that do not match the defined type of each attribute,
	 * and should assume that any attribute may be empty, invalid, or under
	 * defined.
	 */
	export interface StatusDetails {

		/**
		 * The Causes array includes more details associated with the StatusReason
		 * failure. Not all StatusReasons may provide detailed causes.
		 * +optional
		 */
		causes?: Array<StatusCause> | null;

		/**
		 * The group attribute of the resource associated with the status
		 * StatusReason. +optional
		 */
		group?: string | null;

		/**
		 * The kind attribute of the resource associated with the status StatusReason.
		 * On some operations may differ from the requested resource Kind.
		 * More info:
		 * https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
		 * +optional
		 */
		kind?: string | null;

		/**
		 * The name attribute of the resource associated with the status StatusReason
		 * (when there is a single name which can be described).
		 * +optional
		 */
		name?: string | null;

		/**
		 * If specified, the time in seconds before the operation should be retried.
		 * Some errors may indicate the client must take an alternate action - for
		 * those errors this field may indicate how long to wait before taking the
		 * alternate action. +optional
		 */
		retryAfterSeconds?: number | null;

		/**
		 * UID of the resource.
		 * (when there is a single resource which can be described).
		 * More info: http://kubernetes.io/docs/user-guide/identifiers#uids
		 * +optional
		 */
		uid?: string | null;
	}


	/**
	 * StatusCause provides more information about an api.Status failure, including
	 * cases when multiple errors are encountered.
	 */
	export interface StatusCause {

		/**
		 * The field of the resource that has caused this error, as named by its JSON
		 * serialization. May include dot and postfix notation for nested attributes.
		 * Arrays are zero-indexed.  Fields may appear more than once in an array of
		 * causes due to fields having multiple errors.
		 * Optional.
		 * Examples:
		 * "name" - the field "name" on the current resource
		 * "items[0].name" - the field "name" on the first array entry in "items"
		 * +optional
		 */
		field?: string | null;

		/**
		 * A human-readable description of the cause of the error.  This field may be
		 * presented as-is to a reader.
		 * +optional
		 */
		message?: string | null;

		/**
		 * A machine-readable description of the cause of the error. If this value is
		 * empty there is no information available.
		 * +optional
		 */
		reason?: string | null;
	}


	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequest {

		/**
		 * The set of permissions to check for the `resource`. Permissions with
		 * wildcards (such as '*' or 'storage.*') are not allowed. For more
		 * information see
		 * [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
		 */
		permissions?: Array<string> | null;
	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/**
		 * A subset of `TestPermissionsRequest.permissions` that the caller is
		 * allowed.
		 */
		permissions?: Array<string> | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Rpc to get information about a secret.
		 * Get api/v1/{name}
		 * @param {string} name Required. The name of the secret being retrieved. If needed, replace
		 * {namespace_id} with the project ID.
		 * @return {void} Successful response
		 */
		Run_api_v1_namespaces_secrets_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Rpc to update a namespace.
		 * Patch api/v1/{name}
		 * @param {string} name Required. The name of the namespace being retrieved. If needed, replace
		 * {namespace_id} with the project ID.
		 * @param {string} updateMask Required. Indicates which fields in the provided namespace to update.
		 * This field is currently unused.
		 * @return {void} Successful response
		 */
		Run_api_v1_namespaces_patch(name: string, updateMask: string, requestBody: Namespace): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'api/v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Rpc to replace a secret.
		 * Only the spec and metadata labels and annotations are modifiable. After
		 * the Update request, Cloud Run will work to make the 'status'
		 * match the requested 'spec'.
		 * May provide metadata.resourceVersion to enforce update from last read for
		 * optimistic concurrency control.
		 * Put api/v1/{name}
		 * @param {string} name Required. The name of the secret being retrieved. If needed, replace
		 * {namespace_id} with the project ID.
		 * @return {void} Successful response
		 */
		Run_api_v1_namespaces_secrets_replaceSecret(name: string, requestBody: Secret): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new secret.
		 * Post api/v1/{parent}/secrets
		 * @param {string} parent Required. The project ID or project number in which this secret should
		 * be created.
		 * @return {void} Successful response
		 */
		Run_api_v1_namespaces_secrets_create(parent: string, requestBody: Secret): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/secrets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a domain mapping.
		 * Delete apis/domains.cloudrun.com/v1/{name}
		 * @param {string} name The name of the domain mapping to delete.
		 * For Cloud Run (fully managed), replace {namespace_id} with the project ID
		 * or number.
		 * @param {string} apiVersion Cloud Run currently ignores this parameter.
		 * @param {string} kind Cloud Run currently ignores this parameter.
		 * @param {string} propagationPolicy Specifies the propagation policy of delete. Cloud Run currently ignores
		 * this setting, and deletes in the background. Please see
		 * kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for
		 * more information.
		 * @return {void} Successful response
		 */
		Run_namespaces_domainmappings_delete(name: string, apiVersion: string, kind: string, propagationPolicy: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'apis/domains.cloudrun.com/v1/' + (name == null ? '' : encodeURIComponent(name)) + '&apiVersion=' + (apiVersion == null ? '' : encodeURIComponent(apiVersion)) + '&kind=' + (kind == null ? '' : encodeURIComponent(kind)) + '&propagationPolicy=' + (propagationPolicy == null ? '' : encodeURIComponent(propagationPolicy)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get information about a domain mapping.
		 * Get apis/domains.cloudrun.com/v1/{name}
		 * @param {string} name The name of the domain mapping to retrieve.
		 * For Cloud Run (fully managed), replace {namespace_id} with the project ID
		 * or number.
		 * @return {void} Successful response
		 */
		Run_namespaces_domainmappings_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'apis/domains.cloudrun.com/v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List authorized domains.
		 * Get apis/domains.cloudrun.com/v1/{parent}/authorizeddomains
		 * @param {string} parent Name of the parent Application resource. Example: `apps/myapp`.
		 * @param {number} pageSize Maximum results to return per page.
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {void} Successful response
		 */
		Run_namespaces_authorizeddomains_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'apis/domains.cloudrun.com/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/authorizeddomains&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List domain mappings.
		 * Get apis/domains.cloudrun.com/v1/{parent}/domainmappings
		 * @param {string} parent The namespace from which the domain mappings should be listed.
		 * For Cloud Run (fully managed), replace {namespace_id} with the project ID
		 * or number.
		 * @param {string} _continue Optional encoded string to continue paging.
		 * @param {string} fieldSelector Allows to filter resources based on a specific value for a field name.
		 * Send this in a query string format. i.e. 'metadata.name%3Dlorem'.
		 * Not currently used by Cloud Run.
		 * @param {boolean} includeUninitialized Not currently used by Cloud Run.
		 * @param {string} labelSelector Allows to filter resources based on a label. Supported operations are
		 * =, !=, exists, in, and notIn.
		 * @param {number} limit The maximum number of records that should be returned.
		 * @param {string} resourceVersion The baseline resource version from which the list or watch operation should
		 * start. Not currently used by Cloud Run.
		 * @param {boolean} watch Flag that indicates that the client expects to watch this resource as well.
		 * Not currently used by Cloud Run.
		 * @return {void} Successful response
		 */
		Run_namespaces_domainmappings_list(parent: string, _continue: string, fieldSelector: string, includeUninitialized: boolean, labelSelector: string, limit: number, resourceVersion: string, watch: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'apis/domains.cloudrun.com/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/domainmappings&_continue=' + (_continue == null ? '' : encodeURIComponent(_continue)) + '&fieldSelector=' + (fieldSelector == null ? '' : encodeURIComponent(fieldSelector)) + '&includeUninitialized=' + includeUninitialized + '&labelSelector=' + (labelSelector == null ? '' : encodeURIComponent(labelSelector)) + '&limit=' + limit + '&resourceVersion=' + (resourceVersion == null ? '' : encodeURIComponent(resourceVersion)) + '&watch=' + watch, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new domain mapping.
		 * Post apis/domains.cloudrun.com/v1/{parent}/domainmappings
		 * @param {string} parent The namespace in which the domain mapping should be created.
		 * For Cloud Run (fully managed), replace {namespace_id} with the project ID
		 * or number.
		 * @return {void} Successful response
		 */
		Run_namespaces_domainmappings_create(parent: string, requestBody: DomainMapping): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apis/domains.cloudrun.com/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/domainmappings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a service.
		 * This will cause the Service to stop serving traffic and will delete the
		 * child entities like Routes, Configurations and Revisions.
		 * Delete apis/serving.knative.dev/v1/{name}
		 * @param {string} name The name of the service to delete.
		 * For Cloud Run (fully managed), replace {namespace_id} with the project ID
		 * or number.
		 * @param {string} apiVersion Cloud Run currently ignores this parameter.
		 * @param {string} kind Cloud Run currently ignores this parameter.
		 * @param {string} propagationPolicy Specifies the propagation policy of delete. Cloud Run currently ignores
		 * this setting, and deletes in the background. Please see
		 * kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for
		 * more information.
		 * @return {void} Successful response
		 */
		Run_namespaces_services_delete(name: string, apiVersion: string, kind: string, propagationPolicy: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'apis/serving.knative.dev/v1/' + (name == null ? '' : encodeURIComponent(name)) + '&apiVersion=' + (apiVersion == null ? '' : encodeURIComponent(apiVersion)) + '&kind=' + (kind == null ? '' : encodeURIComponent(kind)) + '&propagationPolicy=' + (propagationPolicy == null ? '' : encodeURIComponent(propagationPolicy)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get information about a service.
		 * Get apis/serving.knative.dev/v1/{name}
		 * @param {string} name The name of the service to retrieve.
		 * For Cloud Run (fully managed), replace {namespace_id} with the project ID
		 * or number.
		 * @return {void} Successful response
		 */
		Run_namespaces_services_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'apis/serving.knative.dev/v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Replace a service.
		 * Only the spec and metadata labels and annotations are modifiable. After
		 * the Update request, Cloud Run will work to make the 'status'
		 * match the requested 'spec'.
		 * May provide metadata.resourceVersion to enforce update from last read for
		 * optimistic concurrency control.
		 * Put apis/serving.knative.dev/v1/{name}
		 * @param {string} name The name of the service being replaced.
		 * For Cloud Run (fully managed), replace {namespace_id} with the project ID
		 * or number.
		 * @return {void} Successful response
		 */
		Run_namespaces_services_replaceService(name: string, requestBody: Service): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'apis/serving.knative.dev/v1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List configurations.
		 * Get apis/serving.knative.dev/v1/{parent}/configurations
		 * @param {string} parent The namespace from which the configurations should be listed.
		 * For Cloud Run (fully managed), replace {namespace_id} with the project ID
		 * or number.
		 * @param {string} _continue Optional encoded string to continue paging.
		 * @param {string} fieldSelector Allows to filter resources based on a specific value for a field name.
		 * Send this in a query string format. i.e. 'metadata.name%3Dlorem'.
		 * Not currently used by Cloud Run.
		 * @param {boolean} includeUninitialized Not currently used by Cloud Run.
		 * @param {string} labelSelector Allows to filter resources based on a label. Supported operations are
		 * =, !=, exists, in, and notIn.
		 * @param {number} limit The maximum number of records that should be returned.
		 * @param {string} resourceVersion The baseline resource version from which the list or watch operation should
		 * start. Not currently used by Cloud Run.
		 * @param {boolean} watch Flag that indicates that the client expects to watch this resource as well.
		 * Not currently used by Cloud Run.
		 * @return {void} Successful response
		 */
		Run_namespaces_configurations_list(parent: string, _continue: string, fieldSelector: string, includeUninitialized: boolean, labelSelector: string, limit: number, resourceVersion: string, watch: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'apis/serving.knative.dev/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/configurations&_continue=' + (_continue == null ? '' : encodeURIComponent(_continue)) + '&fieldSelector=' + (fieldSelector == null ? '' : encodeURIComponent(fieldSelector)) + '&includeUninitialized=' + includeUninitialized + '&labelSelector=' + (labelSelector == null ? '' : encodeURIComponent(labelSelector)) + '&limit=' + limit + '&resourceVersion=' + (resourceVersion == null ? '' : encodeURIComponent(resourceVersion)) + '&watch=' + watch, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List revisions.
		 * Get apis/serving.knative.dev/v1/{parent}/revisions
		 * @param {string} parent The namespace from which the revisions should be listed.
		 * For Cloud Run (fully managed), replace {namespace_id} with the project ID
		 * or number.
		 * @param {string} _continue Optional encoded string to continue paging.
		 * @param {string} fieldSelector Allows to filter resources based on a specific value for a field name.
		 * Send this in a query string format. i.e. 'metadata.name%3Dlorem'.
		 * Not currently used by Cloud Run.
		 * @param {boolean} includeUninitialized Not currently used by Cloud Run.
		 * @param {string} labelSelector Allows to filter resources based on a label. Supported operations are
		 * =, !=, exists, in, and notIn.
		 * @param {number} limit The maximum number of records that should be returned.
		 * @param {string} resourceVersion The baseline resource version from which the list or watch operation should
		 * start. Not currently used by Cloud Run.
		 * @param {boolean} watch Flag that indicates that the client expects to watch this resource as well.
		 * Not currently used by Cloud Run.
		 * @return {void} Successful response
		 */
		Run_namespaces_revisions_list(parent: string, _continue: string, fieldSelector: string, includeUninitialized: boolean, labelSelector: string, limit: number, resourceVersion: string, watch: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'apis/serving.knative.dev/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/revisions&_continue=' + (_continue == null ? '' : encodeURIComponent(_continue)) + '&fieldSelector=' + (fieldSelector == null ? '' : encodeURIComponent(fieldSelector)) + '&includeUninitialized=' + includeUninitialized + '&labelSelector=' + (labelSelector == null ? '' : encodeURIComponent(labelSelector)) + '&limit=' + limit + '&resourceVersion=' + (resourceVersion == null ? '' : encodeURIComponent(resourceVersion)) + '&watch=' + watch, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List routes.
		 * Get apis/serving.knative.dev/v1/{parent}/routes
		 * @param {string} parent The namespace from which the routes should be listed.
		 * For Cloud Run (fully managed), replace {namespace_id} with the project ID
		 * or number.
		 * @param {string} _continue Optional encoded string to continue paging.
		 * @param {string} fieldSelector Allows to filter resources based on a specific value for a field name.
		 * Send this in a query string format. i.e. 'metadata.name%3Dlorem'.
		 * Not currently used by Cloud Run.
		 * @param {boolean} includeUninitialized Not currently used by Cloud Run.
		 * @param {string} labelSelector Allows to filter resources based on a label. Supported operations are
		 * =, !=, exists, in, and notIn.
		 * @param {number} limit The maximum number of records that should be returned.
		 * @param {string} resourceVersion The baseline resource version from which the list or watch operation should
		 * start. Not currently used by Cloud Run.
		 * @param {boolean} watch Flag that indicates that the client expects to watch this resource as well.
		 * Not currently used by Cloud Run.
		 * @return {void} Successful response
		 */
		Run_namespaces_routes_list(parent: string, _continue: string, fieldSelector: string, includeUninitialized: boolean, labelSelector: string, limit: number, resourceVersion: string, watch: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'apis/serving.knative.dev/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/routes&_continue=' + (_continue == null ? '' : encodeURIComponent(_continue)) + '&fieldSelector=' + (fieldSelector == null ? '' : encodeURIComponent(fieldSelector)) + '&includeUninitialized=' + includeUninitialized + '&labelSelector=' + (labelSelector == null ? '' : encodeURIComponent(labelSelector)) + '&limit=' + limit + '&resourceVersion=' + (resourceVersion == null ? '' : encodeURIComponent(resourceVersion)) + '&watch=' + watch, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List services.
		 * Get apis/serving.knative.dev/v1/{parent}/services
		 * @param {string} parent The namespace from which the services should be listed.
		 * For Cloud Run (fully managed), replace {namespace_id} with the project ID
		 * or number.
		 * @param {string} _continue Optional encoded string to continue paging.
		 * @param {string} fieldSelector Allows to filter resources based on a specific value for a field name.
		 * Send this in a query string format. i.e. 'metadata.name%3Dlorem'.
		 * Not currently used by Cloud Run.
		 * @param {boolean} includeUninitialized Not currently used by Cloud Run.
		 * @param {string} labelSelector Allows to filter resources based on a label. Supported operations are
		 * =, !=, exists, in, and notIn.
		 * @param {number} limit The maximum number of records that should be returned.
		 * @param {string} resourceVersion The baseline resource version from which the list or watch operation should
		 * start. Not currently used by Cloud Run.
		 * @param {boolean} watch Flag that indicates that the client expects to watch this resource as well.
		 * Not currently used by Cloud Run.
		 * @return {void} Successful response
		 */
		Run_namespaces_services_list(parent: string, _continue: string, fieldSelector: string, includeUninitialized: boolean, labelSelector: string, limit: number, resourceVersion: string, watch: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'apis/serving.knative.dev/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services&_continue=' + (_continue == null ? '' : encodeURIComponent(_continue)) + '&fieldSelector=' + (fieldSelector == null ? '' : encodeURIComponent(fieldSelector)) + '&includeUninitialized=' + includeUninitialized + '&labelSelector=' + (labelSelector == null ? '' : encodeURIComponent(labelSelector)) + '&limit=' + limit + '&resourceVersion=' + (resourceVersion == null ? '' : encodeURIComponent(resourceVersion)) + '&watch=' + watch, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a service.
		 * Post apis/serving.knative.dev/v1/{parent}/services
		 * @param {string} parent The namespace in which the service should be created.
		 * For Cloud Run (fully managed), replace {namespace_id} with the project ID
		 * or number.
		 * @return {void} Successful response
		 */
		Run_namespaces_services_create(parent: string, requestBody: Service): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apis/serving.knative.dev/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a domain mapping.
		 * Delete v1/{name}
		 * @param {string} name The name of the domain mapping to delete.
		 * For Cloud Run (fully managed), replace {namespace_id} with the project ID
		 * or number.
		 * @param {string} apiVersion Cloud Run currently ignores this parameter.
		 * @param {string} kind Cloud Run currently ignores this parameter.
		 * @param {string} propagationPolicy Specifies the propagation policy of delete. Cloud Run currently ignores
		 * this setting, and deletes in the background. Please see
		 * kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for
		 * more information.
		 * @return {void} Successful response
		 */
		Run_projects_locations_domainmappings_delete(name: string, apiVersion: string, kind: string, propagationPolicy: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&apiVersion=' + (apiVersion == null ? '' : encodeURIComponent(apiVersion)) + '&kind=' + (kind == null ? '' : encodeURIComponent(kind)) + '&propagationPolicy=' + (propagationPolicy == null ? '' : encodeURIComponent(propagationPolicy)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Rpc to get information about a secret.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the secret being retrieved. If needed, replace
		 * {namespace_id} with the project ID.
		 * @return {void} Successful response
		 */
		Run_projects_locations_secrets_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Rpc to update a namespace.
		 * Patch v1/{name}
		 * @param {string} name Required. The name of the namespace being retrieved. If needed, replace
		 * {namespace_id} with the project ID.
		 * @param {string} updateMask Required. Indicates which fields in the provided namespace to update.
		 * This field is currently unused.
		 * @return {void} Successful response
		 */
		Run_projects_locations_namespaces_patch(name: string, updateMask: string, requestBody: Namespace): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Rpc to replace a secret.
		 * Only the spec and metadata labels and annotations are modifiable. After
		 * the Update request, Cloud Run will work to make the 'status'
		 * match the requested 'spec'.
		 * May provide metadata.resourceVersion to enforce update from last read for
		 * optimistic concurrency control.
		 * Put v1/{name}
		 * @param {string} name Required. The name of the secret being retrieved. If needed, replace
		 * {namespace_id} with the project ID.
		 * @return {void} Successful response
		 */
		Run_projects_locations_secrets_replaceSecret(name: string, requestBody: Secret): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		Run_projects_locations_list(name: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List authorized domains.
		 * Get v1/{parent}/authorizeddomains
		 * @param {string} parent Name of the parent Application resource. Example: `apps/myapp`.
		 * @param {number} pageSize Maximum results to return per page.
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {void} Successful response
		 */
		Run_projects_locations_authorizeddomains_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/authorizeddomains&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List configurations.
		 * Get v1/{parent}/configurations
		 * @param {string} parent The namespace from which the configurations should be listed.
		 * For Cloud Run (fully managed), replace {namespace_id} with the project ID
		 * or number.
		 * @param {string} _continue Optional encoded string to continue paging.
		 * @param {string} fieldSelector Allows to filter resources based on a specific value for a field name.
		 * Send this in a query string format. i.e. 'metadata.name%3Dlorem'.
		 * Not currently used by Cloud Run.
		 * @param {boolean} includeUninitialized Not currently used by Cloud Run.
		 * @param {string} labelSelector Allows to filter resources based on a label. Supported operations are
		 * =, !=, exists, in, and notIn.
		 * @param {number} limit The maximum number of records that should be returned.
		 * @param {string} resourceVersion The baseline resource version from which the list or watch operation should
		 * start. Not currently used by Cloud Run.
		 * @param {boolean} watch Flag that indicates that the client expects to watch this resource as well.
		 * Not currently used by Cloud Run.
		 * @return {void} Successful response
		 */
		Run_projects_locations_configurations_list(parent: string, _continue: string, fieldSelector: string, includeUninitialized: boolean, labelSelector: string, limit: number, resourceVersion: string, watch: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/configurations&_continue=' + (_continue == null ? '' : encodeURIComponent(_continue)) + '&fieldSelector=' + (fieldSelector == null ? '' : encodeURIComponent(fieldSelector)) + '&includeUninitialized=' + includeUninitialized + '&labelSelector=' + (labelSelector == null ? '' : encodeURIComponent(labelSelector)) + '&limit=' + limit + '&resourceVersion=' + (resourceVersion == null ? '' : encodeURIComponent(resourceVersion)) + '&watch=' + watch, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List domain mappings.
		 * Get v1/{parent}/domainmappings
		 * @param {string} parent The namespace from which the domain mappings should be listed.
		 * For Cloud Run (fully managed), replace {namespace_id} with the project ID
		 * or number.
		 * @param {string} _continue Optional encoded string to continue paging.
		 * @param {string} fieldSelector Allows to filter resources based on a specific value for a field name.
		 * Send this in a query string format. i.e. 'metadata.name%3Dlorem'.
		 * Not currently used by Cloud Run.
		 * @param {boolean} includeUninitialized Not currently used by Cloud Run.
		 * @param {string} labelSelector Allows to filter resources based on a label. Supported operations are
		 * =, !=, exists, in, and notIn.
		 * @param {number} limit The maximum number of records that should be returned.
		 * @param {string} resourceVersion The baseline resource version from which the list or watch operation should
		 * start. Not currently used by Cloud Run.
		 * @param {boolean} watch Flag that indicates that the client expects to watch this resource as well.
		 * Not currently used by Cloud Run.
		 * @return {void} Successful response
		 */
		Run_projects_locations_domainmappings_list(parent: string, _continue: string, fieldSelector: string, includeUninitialized: boolean, labelSelector: string, limit: number, resourceVersion: string, watch: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/domainmappings&_continue=' + (_continue == null ? '' : encodeURIComponent(_continue)) + '&fieldSelector=' + (fieldSelector == null ? '' : encodeURIComponent(fieldSelector)) + '&includeUninitialized=' + includeUninitialized + '&labelSelector=' + (labelSelector == null ? '' : encodeURIComponent(labelSelector)) + '&limit=' + limit + '&resourceVersion=' + (resourceVersion == null ? '' : encodeURIComponent(resourceVersion)) + '&watch=' + watch, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new domain mapping.
		 * Post v1/{parent}/domainmappings
		 * @param {string} parent The namespace in which the domain mapping should be created.
		 * For Cloud Run (fully managed), replace {namespace_id} with the project ID
		 * or number.
		 * @return {void} Successful response
		 */
		Run_projects_locations_domainmappings_create(parent: string, requestBody: DomainMapping): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/domainmappings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List revisions.
		 * Get v1/{parent}/revisions
		 * @param {string} parent The namespace from which the revisions should be listed.
		 * For Cloud Run (fully managed), replace {namespace_id} with the project ID
		 * or number.
		 * @param {string} _continue Optional encoded string to continue paging.
		 * @param {string} fieldSelector Allows to filter resources based on a specific value for a field name.
		 * Send this in a query string format. i.e. 'metadata.name%3Dlorem'.
		 * Not currently used by Cloud Run.
		 * @param {boolean} includeUninitialized Not currently used by Cloud Run.
		 * @param {string} labelSelector Allows to filter resources based on a label. Supported operations are
		 * =, !=, exists, in, and notIn.
		 * @param {number} limit The maximum number of records that should be returned.
		 * @param {string} resourceVersion The baseline resource version from which the list or watch operation should
		 * start. Not currently used by Cloud Run.
		 * @param {boolean} watch Flag that indicates that the client expects to watch this resource as well.
		 * Not currently used by Cloud Run.
		 * @return {void} Successful response
		 */
		Run_projects_locations_revisions_list(parent: string, _continue: string, fieldSelector: string, includeUninitialized: boolean, labelSelector: string, limit: number, resourceVersion: string, watch: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/revisions&_continue=' + (_continue == null ? '' : encodeURIComponent(_continue)) + '&fieldSelector=' + (fieldSelector == null ? '' : encodeURIComponent(fieldSelector)) + '&includeUninitialized=' + includeUninitialized + '&labelSelector=' + (labelSelector == null ? '' : encodeURIComponent(labelSelector)) + '&limit=' + limit + '&resourceVersion=' + (resourceVersion == null ? '' : encodeURIComponent(resourceVersion)) + '&watch=' + watch, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List routes.
		 * Get v1/{parent}/routes
		 * @param {string} parent The namespace from which the routes should be listed.
		 * For Cloud Run (fully managed), replace {namespace_id} with the project ID
		 * or number.
		 * @param {string} _continue Optional encoded string to continue paging.
		 * @param {string} fieldSelector Allows to filter resources based on a specific value for a field name.
		 * Send this in a query string format. i.e. 'metadata.name%3Dlorem'.
		 * Not currently used by Cloud Run.
		 * @param {boolean} includeUninitialized Not currently used by Cloud Run.
		 * @param {string} labelSelector Allows to filter resources based on a label. Supported operations are
		 * =, !=, exists, in, and notIn.
		 * @param {number} limit The maximum number of records that should be returned.
		 * @param {string} resourceVersion The baseline resource version from which the list or watch operation should
		 * start. Not currently used by Cloud Run.
		 * @param {boolean} watch Flag that indicates that the client expects to watch this resource as well.
		 * Not currently used by Cloud Run.
		 * @return {void} Successful response
		 */
		Run_projects_locations_routes_list(parent: string, _continue: string, fieldSelector: string, includeUninitialized: boolean, labelSelector: string, limit: number, resourceVersion: string, watch: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/routes&_continue=' + (_continue == null ? '' : encodeURIComponent(_continue)) + '&fieldSelector=' + (fieldSelector == null ? '' : encodeURIComponent(fieldSelector)) + '&includeUninitialized=' + includeUninitialized + '&labelSelector=' + (labelSelector == null ? '' : encodeURIComponent(labelSelector)) + '&limit=' + limit + '&resourceVersion=' + (resourceVersion == null ? '' : encodeURIComponent(resourceVersion)) + '&watch=' + watch, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new secret.
		 * Post v1/{parent}/secrets
		 * @param {string} parent Required. The project ID or project number in which this secret should
		 * be created.
		 * @return {void} Successful response
		 */
		Run_projects_locations_secrets_create(parent: string, requestBody: Secret): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/secrets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List services.
		 * Get v1/{parent}/services
		 * @param {string} parent The namespace from which the services should be listed.
		 * For Cloud Run (fully managed), replace {namespace_id} with the project ID
		 * or number.
		 * @param {string} _continue Optional encoded string to continue paging.
		 * @param {string} fieldSelector Allows to filter resources based on a specific value for a field name.
		 * Send this in a query string format. i.e. 'metadata.name%3Dlorem'.
		 * Not currently used by Cloud Run.
		 * @param {boolean} includeUninitialized Not currently used by Cloud Run.
		 * @param {string} labelSelector Allows to filter resources based on a label. Supported operations are
		 * =, !=, exists, in, and notIn.
		 * @param {number} limit The maximum number of records that should be returned.
		 * @param {string} resourceVersion The baseline resource version from which the list or watch operation should
		 * start. Not currently used by Cloud Run.
		 * @param {boolean} watch Flag that indicates that the client expects to watch this resource as well.
		 * Not currently used by Cloud Run.
		 * @return {void} Successful response
		 */
		Run_projects_locations_services_list(parent: string, _continue: string, fieldSelector: string, includeUninitialized: boolean, labelSelector: string, limit: number, resourceVersion: string, watch: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services&_continue=' + (_continue == null ? '' : encodeURIComponent(_continue)) + '&fieldSelector=' + (fieldSelector == null ? '' : encodeURIComponent(fieldSelector)) + '&includeUninitialized=' + includeUninitialized + '&labelSelector=' + (labelSelector == null ? '' : encodeURIComponent(labelSelector)) + '&limit=' + limit + '&resourceVersion=' + (resourceVersion == null ? '' : encodeURIComponent(resourceVersion)) + '&watch=' + watch, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a service.
		 * Post v1/{parent}/services
		 * @param {string} parent The namespace in which the service should be created.
		 * For Cloud Run (fully managed), replace {namespace_id} with the project ID
		 * or number.
		 * @return {void} Successful response
		 */
		Run_projects_locations_services_create(parent: string, requestBody: Service): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the IAM Access Control policy currently in effect for the given
		 * Cloud Run service. This result does not include any inherited policies.
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
		Run_projects_locations_services_getIamPolicy(resource: string, options_requestedPolicyVersion: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the IAM Access control policy for the specified Service. Overwrites
		 * any existing policy.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Run_projects_locations_services_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns permissions that a caller has on the specified Project.
		 * There are no permissions required for making this API call.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Run_projects_locations_services_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

