import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.
	 * If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted.
	 * Example Policy with multiple AuditConfigs:
	 * { "audit_configs": [ { "service": "allServices" "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:foo@gmail.com" ] }, { "log_type": "DATA_WRITE", }, { "log_type": "ADMIN_READ", } ] }, { "service": "fooservice.googleapis.com" "audit_log_configs": [ { "log_type": "DATA_READ", }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:bar@gmail.com" ] } ] } ] }
	 * For fooservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts foo@gmail.com from DATA_READ logging, and bar@gmail.com from DATA_WRITE logging.
	 */
	export interface AuditConfig {

		/** The configuration for logging of each type of permission. */
		auditLogConfigs?: Array<AuditLogConfig> | null;
		exemptedMembers?: Array<string> | null;

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service?: string | null;
	}


	/**
	 * Provides the configuration for logging a type of permissions. Example:
	 * { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:foo@gmail.com" ] }, { "log_type": "DATA_WRITE", } ] }
	 * This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting foo@gmail.com from DATA_READ logging.
	 */
	export interface AuditLogConfig {

		/** Specifies the identities that do not cause logging for this type of permission. Follows the same format of [Binding.members][]. */
		exemptedMembers?: Array<string> | null;

		/** The log type that this config enables. */
		logType?: string | null;
	}


	/** Authorization-related information used by Cloud Audit Logging. */
	export interface AuthorizationLoggingOptions {

		/** The type of the permission that was checked. */
		permissionType?: string | null;
	}


	/** Associates `members` with a `role`. */
	export interface Binding {

		/**
		 * Represents an expression text. Example:
		 * title: "User account presence" description: "Determines whether the request has a user account" expression: "size(request.user) > 0"
		 */
		condition?: Expr | null;

		/**
		 * Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:
		 * * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account.
		 * * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account.
		 * * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@gmail.com` .
		 * * `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`.
		 * * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`.
		 * * `domain:{domain}`: A Google Apps domain name that represents all the users of that domain. For example, `google.com` or `example.com`.
		 */
		members?: Array<string> | null;

		/** Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role?: string | null;
	}


	/**
	 * Represents an expression text. Example:
	 * title: "User account presence" description: "Determines whether the request has a user account" expression: "size(request.user) > 0"
	 */
	export interface Expr {

		/** An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description?: string | null;

		/**
		 * Textual representation of an expression in Common Expression Language syntax.
		 * The application context of the containing message determines which well-known feature set of CEL is supported.
		 */
		expression?: string | null;

		/** An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location?: string | null;

		/** An optional title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title?: string | null;
	}


	/** A condition to be met. */
	export interface Condition {

		/** Trusted attributes supplied by the IAM system. */
		iam?: string | null;

		/** An operator to apply the subject with. */
		op?: string | null;

		/** Trusted attributes discharged by the service. */
		svc?: string | null;

		/** Trusted attributes supplied by any service that owns resources and uses the IAM system for access control. */
		sys?: string | null;

		/** DEPRECATED. Use 'values' instead. */
		value?: string | null;

		/** The objects of the condition. This is mutually exclusive with 'value'. */
		values?: Array<string> | null;
	}

	export interface ConfigFile {

		/** The contents of the file. */
		content?: string | null;
	}

	export interface Deployment {

		/** An optional user-provided description of the deployment. */
		description?: string | null;

		/**
		 * Provides a fingerprint to use in requests to modify a deployment, such as update(), stop(), and cancelPreview() requests. A fingerprint is a randomly generated value that must be provided with update(), stop(), and cancelPreview() requests to perform optimistic locking. This ensures optimistic concurrency so that only one request happens at a time.
		 * The fingerprint is initially generated by Deployment Manager and changes after every request to modify data. To get the latest fingerprint value, perform a get() request to a deployment.
		 */
		fingerprint?: string | null;
		id?: string | null;

		/** Output only. Creation timestamp in RFC3339 text format. */
		insertTime?: string | null;

		/** Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])? Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)? */
		labels?: Array<DeploymentLabelEntry> | null;

		/** Output only. URL of the manifest representing the last manifest that was successfully deployed. */
		manifest?: string | null;

		/** Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. */
		name?: string | null;

		/** An Operation resource, used to manage asynchronous API requests. (== resource_for v1.globalOperations ==) (== resource_for beta.globalOperations ==) (== resource_for v1.regionOperations ==) (== resource_for beta.regionOperations ==) (== resource_for v1.zoneOperations ==) (== resource_for beta.zoneOperations ==) */
		operation?: Operation | null;

		/** Output only. Server defined URL for the resource. */
		selfLink?: string | null;
		target?: TargetConfiguration | null;
		update?: DeploymentUpdate | null;

		/** Output only. Update timestamp in RFC3339 text format. */
		updateTime?: string | null;
	}

	export interface DeploymentLabelEntry {
		key?: string | null;
		value?: string | null;
	}


	/** An Operation resource, used to manage asynchronous API requests. (== resource_for v1.globalOperations ==) (== resource_for beta.globalOperations ==) (== resource_for v1.regionOperations ==) (== resource_for beta.regionOperations ==) (== resource_for v1.zoneOperations ==) (== resource_for beta.zoneOperations ==) */
	export interface Operation {

		/** [Output Only] The value of `requestId` if you provided it in the request. Not present otherwise. */
		clientOperationId?: string | null;

		/** [Deprecated] This field is deprecated. */
		creationTimestamp?: string | null;

		/** [Output Only] A textual description of the operation, which is set when the operation is created. */
		description?: string | null;

		/** [Output Only] The time that this operation was completed. This value is in RFC3339 text format. */
		endTime?: string | null;

		/** [Output Only] If errors are generated during processing of the operation, this field will be populated. */
		error?: OperationError | null;

		/** [Output Only] If the operation fails, this field contains the HTTP error message that was returned, such as NOT FOUND. */
		httpErrorMessage?: string | null;

		/** [Output Only] If the operation fails, this field contains the HTTP error status code that was returned. For example, a 404 means the resource was not found. */
		httpErrorStatusCode?: number | null;

		/** [Output Only] The unique identifier for the resource. This identifier is defined by the server. */
		id?: string | null;

		/** [Output Only] The time that this operation was requested. This value is in RFC3339 text format. */
		insertTime?: string | null;

		/** [Output Only] Type of the resource. Always compute#operation for Operation resources. */
		kind?: string | null;

		/** [Output Only] Name of the resource. */
		name?: string | null;

		/** [Output Only] The type of operation, such as insert, update, or delete, and so on. */
		operationType?: string | null;

		/** [Output Only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess when the operation will be complete. This number should monotonically increase as the operation progresses. */
		progress?: number | null;

		/** [Output Only] The URL of the region where the operation resides. Only available when performing regional operations. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body. */
		region?: string | null;

		/** [Output Only] Server-defined URL for the resource. */
		selfLink?: string | null;

		/** [Output Only] The time that this operation was started by the server. This value is in RFC3339 text format. */
		startTime?: string | null;

		/** [Output Only] The status of the operation, which can be one of the following: PENDING, RUNNING, or DONE. */
		status?: string | null;

		/** [Output Only] An optional textual description of the current status of the operation. */
		statusMessage?: string | null;

		/** [Output Only] The unique target ID, which identifies a specific incarnation of the target resource. */
		targetId?: string | null;

		/** [Output Only] The URL of the resource that the operation modifies. For operations related to creating a snapshot, this points to the persistent disk that the snapshot was created from. */
		targetLink?: string | null;

		/** [Output Only] User who requested the operation, for example: user@example.com. */
		user?: string | null;

		/** [Output Only] If warning messages are generated during processing of the operation, this field will be populated. */
		OperationWarnings?: Array<OperationWarnings> | null;

		/** [Output Only] The URL of the zone where the operation resides. Only available when performing per-zone operations. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body. */
		zone?: string | null;
	}

	export interface OperationError {

		/** [Output Only] The array of errors encountered while processing this operation. */
		OperationErrorErrors?: Array<OperationErrorErrors> | null;
	}

	export interface OperationErrorErrors {

		/** [Output Only] The error type identifier for this error. */
		code?: string | null;

		/** [Output Only] Indicates the field in the request that caused the error. This property is optional. */
		location?: string | null;

		/** [Output Only] An optional, human-readable error message. */
		message?: string | null;
	}

	export interface OperationWarnings {

		/** [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response. */
		code?: string | null;

		/**
		 * [Output Only] Metadata about this warning in key: value format. For example:
		 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
		 */
		OperationWarningsData?: Array<OperationWarningsData> | null;

		/** [Output Only] A human-readable description of the warning code. */
		message?: string | null;
	}

	export interface OperationWarningsData {

		/** [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding). */
		key?: string | null;

		/** [Output Only] A warning data value corresponding to the key. */
		value?: string | null;
	}

	export interface TargetConfiguration {
		config?: ConfigFile | null;

		/** Specifies any files to import for this configuration. This can be used to import templates or other files. For example, you might import a text file in order to use the file in a template. */
		imports?: Array<ImportFile> | null;
	}

	export interface ImportFile {

		/** The contents of the file. */
		content?: string | null;

		/** The name of the file. */
		name?: string | null;
	}

	export interface DeploymentUpdate {

		/** Output only. An optional user-provided description of the deployment after the current update has been applied. */
		description?: string | null;

		/** Output only. Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])? Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)? */
		labels?: Array<DeploymentUpdateLabelEntry> | null;

		/** Output only. URL of the manifest representing the update configuration of this deployment. */
		manifest?: string | null;
	}

	export interface DeploymentUpdateLabelEntry {
		key?: string | null;
		value?: string | null;
	}

	export interface DeploymentsCancelPreviewRequest {

		/**
		 * Specifies a fingerprint for cancelPreview() requests. A fingerprint is a randomly generated value that must be provided in cancelPreview() requests to perform optimistic locking. This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to make a new update request while another user attempts to cancel a preview, this would prevent one of the requests).
		 * The fingerprint is initially generated by Deployment Manager and changes after every request to modify a deployment. To get the latest fingerprint value, perform a get() request on the deployment.
		 */
		fingerprint?: string | null;
	}


	/** A response containing a partial list of deployments and a page token used to build the next request if the request has been truncated. */
	export interface DeploymentsListResponse {

		/** Output only. The deployments contained in this response. */
		deployments?: Array<Deployment> | null;

		/** Output only. A token used to continue a truncated list request. */
		nextPageToken?: string | null;
	}

	export interface DeploymentsStopRequest {

		/**
		 * Specifies a fingerprint for stop() requests. A fingerprint is a randomly generated value that must be provided in stop() requests to perform optimistic locking. This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to make a new update request while another user attempts to stop an ongoing update request, this would prevent a collision).
		 * The fingerprint is initially generated by Deployment Manager and changes after every request to modify a deployment. To get the latest fingerprint value, perform a get() request on the deployment.
		 */
		fingerprint?: string | null;
	}

	export interface GlobalSetPolicyRequest {

		/** Flatten Policy to create a backward compatible wire-format. Deprecated. Use 'policy' to specify bindings. */
		bindings?: Array<Binding> | null;

		/** Flatten Policy to create a backward compatible wire-format. Deprecated. Use 'policy' to specify the etag. */
		etag?: string | null;

		/**
		 * Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources.
		 * A `Policy` consists of a list of `bindings`. A `binding` binds a list of `members` to a `role`, where the members can be user accounts, Google groups, Google domains, and service accounts. A `role` is a named list of permissions defined by IAM.
		 * **JSON Example**
		 * { "bindings": [ { "role": "roles/owner", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-other-app@appspot.gserviceaccount.com" ] }, { "role": "roles/viewer", "members": ["user:sean@example.com"] } ] }
		 * **YAML Example**
		 * bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-other-app@appspot.gserviceaccount.com role: roles/owner - members: - user:sean@example.com role: roles/viewer
		 * For a description of IAM and its features, see the [IAM developer's guide](https://cloud.google.com/iam/docs).
		 */
		policy?: Policy | null;
	}


	/**
	 * Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources.
	 * A `Policy` consists of a list of `bindings`. A `binding` binds a list of `members` to a `role`, where the members can be user accounts, Google groups, Google domains, and service accounts. A `role` is a named list of permissions defined by IAM.
	 * **JSON Example**
	 * { "bindings": [ { "role": "roles/owner", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-other-app@appspot.gserviceaccount.com" ] }, { "role": "roles/viewer", "members": ["user:sean@example.com"] } ] }
	 * **YAML Example**
	 * bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-other-app@appspot.gserviceaccount.com role: roles/owner - members: - user:sean@example.com role: roles/viewer
	 * For a description of IAM and its features, see the [IAM developer's guide](https://cloud.google.com/iam/docs).
	 */
	export interface Policy {

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<AuditConfig> | null;

		/** Associates a list of `members` to a `role`. `bindings` with no members will result in an error. */
		bindings?: Array<Binding> | null;

		/**
		 * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.
		 * If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten blindly.
		 */
		etag?: string | null;
		iamOwned?: boolean | null;

		/** If more than one rule is specified, the rules are applied in the following manner: - All matching LOG rules are always applied. - If any DENY/DENY_WITH_LOG rule matches, permission is denied. Logging will be applied if one or more matching rule requires logging. - Otherwise, if any ALLOW/ALLOW_WITH_LOG rule matches, permission is granted. Logging will be applied if one or more matching rule requires logging. - Otherwise, if no rule applies, permission is denied. */
		rules?: Array<Rule> | null;

		/** Deprecated. */
		version?: number | null;
	}


	/** A rule to be applied in a Policy. */
	export interface Rule {

		/** Required */
		action?: string | null;

		/** Additional restrictions that must be met. All conditions must pass for the rule to match. */
		conditions?: Array<Condition> | null;

		/** Human-readable description of the rule. */
		description?: string | null;

		/** If one or more 'in' clauses are specified, the rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in at least one of these entries. */
		ins?: Array<string> | null;

		/** The config returned to callers of tech.iam.IAM.CheckPolicy for any entries that match the LOG action. */
		logConfigs?: Array<LogConfig> | null;

		/** If one or more 'not_in' clauses are specified, the rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in none of the entries. */
		notIns?: Array<string> | null;

		/** A permission is a string of form '..' (e.g., 'storage.buckets.list'). A value of '*' matches all permissions, and a verb part of '*' (e.g., 'storage.buckets.*') matches all verbs. */
		permissions?: Array<string> | null;
	}


	/** Specifies what kind of log the caller must write */
	export interface LogConfig {

		/** Write a Cloud Audit log */
		cloudAudit?: LogConfigCloudAuditOptions | null;

		/**
		 * Increment a streamz counter with the specified metric and field names.
		 * Metric names should start with a '/', generally be lowercase-only, and end in "_count". Field names should not contain an initial slash. The actual exported metric names will have "/iam/policy" prepended.
		 * Field names correspond to IAM request parameters and field values are their respective values.
		 * Supported field names: - "authority", which is "[token]" if IAMContext.token is present, otherwise the value of IAMContext.authority_selector if present, and otherwise a representation of IAMContext.principal; or - "iam_principal", a representation of IAMContext.principal even if a token or authority selector is present; or - "" (empty string), resulting in a counter with no fields.
		 * Examples: counter { metric: "/debug_access_count" field: "iam_principal" } ==> increment counter /iam/policy/backend_debug_access_count {iam_principal=[value of IAMContext.principal]}
		 * At this time we do not support multiple field names (though this may be supported in the future).
		 */
		counter?: LogConfigCounterOptions | null;

		/** Write a Data Access (Gin) log */
		dataAccess?: LogConfigDataAccessOptions | null;
	}


	/** Write a Cloud Audit log */
	export interface LogConfigCloudAuditOptions {

		/** Authorization-related information used by Cloud Audit Logging. */
		authorizationLoggingOptions?: AuthorizationLoggingOptions | null;

		/** The log_name to populate in the Cloud Audit Record. */
		logName?: string | null;
	}


	/**
	 * Increment a streamz counter with the specified metric and field names.
	 * Metric names should start with a '/', generally be lowercase-only, and end in "_count". Field names should not contain an initial slash. The actual exported metric names will have "/iam/policy" prepended.
	 * Field names correspond to IAM request parameters and field values are their respective values.
	 * Supported field names: - "authority", which is "[token]" if IAMContext.token is present, otherwise the value of IAMContext.authority_selector if present, and otherwise a representation of IAMContext.principal; or - "iam_principal", a representation of IAMContext.principal even if a token or authority selector is present; or - "" (empty string), resulting in a counter with no fields.
	 * Examples: counter { metric: "/debug_access_count" field: "iam_principal" } ==> increment counter /iam/policy/backend_debug_access_count {iam_principal=[value of IAMContext.principal]}
	 * At this time we do not support multiple field names (though this may be supported in the future).
	 */
	export interface LogConfigCounterOptions {

		/** The field value to attribute. */
		field?: string | null;

		/** The metric to update. */
		metric?: string | null;
	}


	/** Write a Data Access (Gin) log */
	export interface LogConfigDataAccessOptions {

		/**
		 * Whether Gin logging should happen in a fail-closed manner at the caller. This is relevant only in the LocalIAM implementation, for now.
		 * NOTE: Logging to Gin in a fail-closed manner is currently unsupported while work is being done to satisfy the requirements of go/345. Currently, setting LOG_FAIL_CLOSED mode will have no effect, but still exists because there is active work being done to support it (b/115874152).
		 */
		logMode?: string | null;
	}

	export interface Manifest {
		config?: ConfigFile | null;

		/** Output only. The fully-expanded configuration file, including any templates and references. */
		expandedConfig?: string | null;
		id?: string | null;

		/** Output only. The imported files for this manifest. */
		imports?: Array<ImportFile> | null;

		/** Output only. Creation timestamp in RFC3339 text format. */
		insertTime?: string | null;

		/** Output only. The YAML layout for this manifest. */
		layout?: string | null;

		/**
		 * Output only.
		 * The name of the manifest.
		 */
		name?: string | null;

		/** Output only. Self link for the manifest. */
		selfLink?: string | null;
	}


	/** A response containing a partial list of manifests and a page token used to build the next request if the request has been truncated. */
	export interface ManifestsListResponse {

		/** Output only. Manifests contained in this list response. */
		manifests?: Array<Manifest> | null;

		/** Output only. A token used to continue a truncated list request. */
		nextPageToken?: string | null;
	}


	/** A response containing a partial list of operations and a page token used to build the next request if the request has been truncated. */
	export interface OperationsListResponse {

		/** Output only. A token used to continue a truncated list request. */
		nextPageToken?: string | null;

		/** Output only. Operations contained in this list response. */
		operations?: Array<Operation> | null;
	}

	export interface Resource {

		/** The access controls set on the resource. */
		accessControl?: ResourceAccessControl | null;

		/** Output only. The evaluated properties of the resource with references expanded. Returned as serialized YAML. */
		finalProperties?: string | null;
		id?: string | null;

		/** Output only. Creation timestamp in RFC3339 text format. */
		insertTime?: string | null;

		/** Output only. URL of the manifest representing the current configuration of this resource. */
		manifest?: string | null;

		/** Output only. The name of the resource as it appears in the YAML config. */
		name?: string | null;

		/** Output only. The current properties of the resource before any references have been filled in. Returned as serialized YAML. */
		properties?: string | null;

		/** Output only. The type of the resource, for example compute.v1.instance, or cloudfunctions.v1beta1.function. */
		type?: string | null;
		update?: ResourceUpdate | null;

		/** Output only. Update timestamp in RFC3339 text format. */
		updateTime?: string | null;

		/** Output only. The URL of the actual resource. */
		url?: string | null;

		/** Output only. If warning messages are generated during processing of this resource, this field will be populated. */
		ResourceWarnings?: Array<ResourceWarnings> | null;
	}


	/** The access controls set on the resource. */
	export interface ResourceAccessControl {

		/** The GCP IAM Policy to set on the resource. */
		gcpIamPolicy?: string | null;
	}

	export interface ResourceUpdate {

		/** The access controls set on the resource. */
		accessControl?: ResourceAccessControl | null;

		/** Output only. If errors are generated during update of the resource, this field will be populated. */
		error?: ResourceUpdateError | null;

		/** Output only. The expanded properties of the resource with reference values expanded. Returned as serialized YAML. */
		finalProperties?: string | null;

		/** Output only. The intent of the resource: PREVIEW, UPDATE, or CANCEL. */
		intent?: string | null;

		/** Output only. URL of the manifest representing the update configuration of this resource. */
		manifest?: string | null;

		/** Output only. The set of updated properties for this resource, before references are expanded. Returned as serialized YAML. */
		properties?: string | null;

		/** Output only. The state of the resource. */
		state?: string | null;

		/** Output only. If warning messages are generated during processing of this resource, this field will be populated. */
		ResourceUpdateWarnings?: Array<ResourceUpdateWarnings> | null;
	}

	export interface ResourceUpdateError {

		/** [Output Only] The array of errors encountered while processing this operation. */
		ResourceUpdateErrorErrors?: Array<ResourceUpdateErrorErrors> | null;
	}

	export interface ResourceUpdateErrorErrors {

		/** [Output Only] The error type identifier for this error. */
		code?: string | null;

		/** [Output Only] Indicates the field in the request that caused the error. This property is optional. */
		location?: string | null;

		/** [Output Only] An optional, human-readable error message. */
		message?: string | null;
	}

	export interface ResourceUpdateWarnings {

		/** [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response. */
		code?: string | null;

		/**
		 * [Output Only] Metadata about this warning in key: value format. For example:
		 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
		 */
		ResourceUpdateWarningsData?: Array<ResourceUpdateWarningsData> | null;

		/** [Output Only] A human-readable description of the warning code. */
		message?: string | null;
	}

	export interface ResourceUpdateWarningsData {

		/** [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding). */
		key?: string | null;

		/** [Output Only] A warning data value corresponding to the key. */
		value?: string | null;
	}

	export interface ResourceWarnings {

		/** [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response. */
		code?: string | null;

		/**
		 * [Output Only] Metadata about this warning in key: value format. For example:
		 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
		 */
		ResourceWarningsData?: Array<ResourceWarningsData> | null;

		/** [Output Only] A human-readable description of the warning code. */
		message?: string | null;
	}

	export interface ResourceWarningsData {

		/** [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding). */
		key?: string | null;

		/** [Output Only] A warning data value corresponding to the key. */
		value?: string | null;
	}


	/** A response containing a partial list of resources and a page token used to build the next request if the request has been truncated. */
	export interface ResourcesListResponse {

		/** A token used to continue a truncated list request. */
		nextPageToken?: string | null;

		/** Resources contained in this list response. */
		resources?: Array<Resource> | null;
	}

	export interface TestPermissionsRequest {

		/** The set of permissions to check for the 'resource'. Permissions with wildcards (such as '*' or 'storage.*') are not allowed. */
		permissions?: Array<string> | null;
	}

	export interface TestPermissionsResponse {

		/** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
		permissions?: Array<string> | null;
	}


	/** A resource type supported by Deployment Manager. */
	export interface Type {
		id?: string | null;

		/** Output only. Creation timestamp in RFC3339 text format. */
		insertTime?: string | null;

		/** Name of the type. */
		name?: string | null;

		/** An Operation resource, used to manage asynchronous API requests. (== resource_for v1.globalOperations ==) (== resource_for beta.globalOperations ==) (== resource_for v1.regionOperations ==) (== resource_for beta.regionOperations ==) (== resource_for v1.zoneOperations ==) (== resource_for beta.zoneOperations ==) */
		operation?: Operation | null;

		/** Output only. Server defined URL for the resource. */
		selfLink?: string | null;
	}


	/** A response that returns all Types supported by Deployment Manager */
	export interface TypesListResponse {

		/** A token used to continue a truncated list request. */
		nextPageToken?: string | null;

		/** Output only. A list of resource types supported by Deployment Manager. */
		types?: Array<Type> | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all deployments for a given project.
		 * Get {project}/global/deployments
		 * @param {string} project The project ID for this request.
		 * @param {string} filter A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <.
		 * For example, if you are filtering Compute Engine instances, you can exclude instances named example-instance by specifying name != example-instance.
		 * You can also filter nested fields. For example, you could specify scheduling.automaticRestart = false to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels.
		 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake"). By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. For example, (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true).
		 * @param {number} maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
		 * @param {string} orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
		 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
		 * Currently, only sorting by name or creationTimestamp desc is supported.
		 * @param {string} pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
		 * @return {void} Successful response
		 */
		Deploymentmanager_deployments_list(project: string, filter: string | null | undefined, maxResults: number | null | undefined, orderBy: string | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxResults=' + maxResults + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a deployment and all of the resources described by the deployment manifest.
		 * Post {project}/global/deployments
		 * @param {string} project The project ID for this request.
		 * @param {Deploymentmanager_deployments_insertCreatePolicy} createPolicy Sets the policy to use for creating new resources.
		 * @param {boolean} preview If set to true, creates a deployment and creates "shell" resources but does not actually instantiate these resources. This allows you to preview what your deployment looks like. After previewing a deployment, you can deploy your resources by making a request with the update() method or you can use the cancelPreview() method to cancel the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
		 * @return {void} Successful response
		 */
		Deploymentmanager_deployments_insert(project: string, createPolicy: Deploymentmanager_deployments_insertCreatePolicy | null | undefined, preview: boolean | null | undefined, requestBody: Deployment): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments&createPolicy=' + createPolicy + '&preview=' + preview + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a deployment and all of the resources in the deployment.
		 * Delete {project}/global/deployments/{deployment}
		 * @param {string} project The project ID for this request.
		 * @param {string} deployment The name of the deployment for this request.
		 * @param {Deploymentmanager_deployments_deleteDeletePolicy} deletePolicy Sets the policy to use for deleting resources.
		 * @return {void} Successful response
		 */
		Deploymentmanager_deployments_delete(project: string, deployment: string, deletePolicy: Deploymentmanager_deployments_deleteDeletePolicy | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)) + '&deletePolicy=' + deletePolicy + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a specific deployment.
		 * Get {project}/global/deployments/{deployment}
		 * @param {string} project The project ID for this request.
		 * @param {string} deployment The name of the deployment for this request.
		 * @return {void} Successful response
		 */
		Deploymentmanager_deployments_get(project: string, deployment: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a deployment and all of the resources described by the deployment manifest. This method supports patch semantics.
		 * Patch {project}/global/deployments/{deployment}
		 * @param {string} project The project ID for this request.
		 * @param {string} deployment The name of the deployment for this request.
		 * @param {Deploymentmanager_deployments_insertCreatePolicy} createPolicy Sets the policy to use for creating new resources.
		 * @param {Deploymentmanager_deployments_deleteDeletePolicy} deletePolicy Sets the policy to use for deleting resources.
		 * @param {boolean} preview If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a target.config with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the update() or you can cancelPreview() to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
		 * @return {void} Successful response
		 */
		Deploymentmanager_deployments_patch(project: string, deployment: string, createPolicy: Deploymentmanager_deployments_insertCreatePolicy | null | undefined, deletePolicy: Deploymentmanager_deployments_deleteDeletePolicy | null | undefined, preview: boolean | null | undefined, requestBody: Deployment): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)) + '&createPolicy=' + createPolicy + '&deletePolicy=' + deletePolicy + '&preview=' + preview + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a deployment and all of the resources described by the deployment manifest.
		 * Put {project}/global/deployments/{deployment}
		 * @param {string} project The project ID for this request.
		 * @param {string} deployment The name of the deployment for this request.
		 * @param {Deploymentmanager_deployments_insertCreatePolicy} createPolicy Sets the policy to use for creating new resources.
		 * @param {Deploymentmanager_deployments_deleteDeletePolicy} deletePolicy Sets the policy to use for deleting resources.
		 * @param {boolean} preview If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a target.config with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the update() or you can cancelPreview() to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
		 * @return {void} Successful response
		 */
		Deploymentmanager_deployments_update(project: string, deployment: string, createPolicy: Deploymentmanager_deployments_insertCreatePolicy | null | undefined, deletePolicy: Deploymentmanager_deployments_deleteDeletePolicy | null | undefined, preview: boolean | null | undefined, requestBody: Deployment): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)) + '&createPolicy=' + createPolicy + '&deletePolicy=' + deletePolicy + '&preview=' + preview + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels and removes the preview currently associated with the deployment.
		 * Post {project}/global/deployments/{deployment}/cancelPreview
		 * @param {string} project The project ID for this request.
		 * @param {string} deployment The name of the deployment for this request.
		 * @return {void} Successful response
		 */
		Deploymentmanager_deployments_cancelPreview(project: string, deployment: string, requestBody: DeploymentsCancelPreviewRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)) + '/cancelPreview', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all manifests for a given deployment.
		 * Get {project}/global/deployments/{deployment}/manifests
		 * @param {string} project The project ID for this request.
		 * @param {string} deployment The name of the deployment for this request.
		 * @param {string} filter A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <.
		 * For example, if you are filtering Compute Engine instances, you can exclude instances named example-instance by specifying name != example-instance.
		 * You can also filter nested fields. For example, you could specify scheduling.automaticRestart = false to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels.
		 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake"). By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. For example, (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true).
		 * @param {number} maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
		 * @param {string} orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
		 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
		 * Currently, only sorting by name or creationTimestamp desc is supported.
		 * @param {string} pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
		 * @return {void} Successful response
		 */
		Deploymentmanager_manifests_list(project: string, deployment: string, filter: string | null | undefined, maxResults: number | null | undefined, orderBy: string | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)) + '/manifests&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxResults=' + maxResults + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a specific manifest.
		 * Get {project}/global/deployments/{deployment}/manifests/{manifest}
		 * @param {string} project The project ID for this request.
		 * @param {string} deployment The name of the deployment for this request.
		 * @param {string} manifest The name of the manifest for this request.
		 * @return {void} Successful response
		 */
		Deploymentmanager_manifests_get(project: string, deployment: string, manifest: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)) + '/manifests/' + (manifest == null ? '' : encodeURIComponent(manifest)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all resources in a given deployment.
		 * Get {project}/global/deployments/{deployment}/resources
		 * @param {string} project The project ID for this request.
		 * @param {string} deployment The name of the deployment for this request.
		 * @param {string} filter A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <.
		 * For example, if you are filtering Compute Engine instances, you can exclude instances named example-instance by specifying name != example-instance.
		 * You can also filter nested fields. For example, you could specify scheduling.automaticRestart = false to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels.
		 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake"). By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. For example, (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true).
		 * @param {number} maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
		 * @param {string} orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
		 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
		 * Currently, only sorting by name or creationTimestamp desc is supported.
		 * @param {string} pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
		 * @return {void} Successful response
		 */
		Deploymentmanager_resources_list(project: string, deployment: string, filter: string | null | undefined, maxResults: number | null | undefined, orderBy: string | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)) + '/resources&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxResults=' + maxResults + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a single resource.
		 * Get {project}/global/deployments/{deployment}/resources/{resource}
		 * @param {string} project The project ID for this request.
		 * @param {string} deployment The name of the deployment for this request.
		 * @param {string} resource The name of the resource for this request.
		 * @return {void} Successful response
		 */
		Deploymentmanager_resources_get(project: string, deployment: string, resource: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)) + '/resources/' + (resource == null ? '' : encodeURIComponent(resource)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.
		 * Post {project}/global/deployments/{deployment}/stop
		 * @param {string} project The project ID for this request.
		 * @param {string} deployment The name of the deployment for this request.
		 * @return {void} Successful response
		 */
		Deploymentmanager_deployments_stop(project: string, deployment: string, requestBody: DeploymentsStopRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)) + '/stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
		 * Get {project}/global/deployments/{resource}/getIamPolicy
		 * @param {string} project Project ID for this request.
		 * @param {string} resource Name or id of the resource for this request.
		 * @return {void} Successful response
		 */
		Deploymentmanager_deployments_getIamPolicy(project: string, resource: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (resource == null ? '' : encodeURIComponent(resource)) + '/getIamPolicy', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy.
		 * Post {project}/global/deployments/{resource}/setIamPolicy
		 * @param {string} project Project ID for this request.
		 * @param {string} resource Name or id of the resource for this request.
		 * @return {void} Successful response
		 */
		Deploymentmanager_deployments_setIamPolicy(project: string, resource: string, requestBody: GlobalSetPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (resource == null ? '' : encodeURIComponent(resource)) + '/setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns permissions that a caller has on the specified resource.
		 * Post {project}/global/deployments/{resource}/testIamPermissions
		 * @param {string} project Project ID for this request.
		 * @param {string} resource Name or id of the resource for this request.
		 * @return {void} Successful response
		 */
		Deploymentmanager_deployments_testIamPermissions(project: string, resource: string, requestBody: TestPermissionsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/global/deployments/' + (resource == null ? '' : encodeURIComponent(resource)) + '/testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all operations for a project.
		 * Get {project}/global/operations
		 * @param {string} project The project ID for this request.
		 * @param {string} filter A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <.
		 * For example, if you are filtering Compute Engine instances, you can exclude instances named example-instance by specifying name != example-instance.
		 * You can also filter nested fields. For example, you could specify scheduling.automaticRestart = false to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels.
		 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake"). By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. For example, (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true).
		 * @param {number} maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
		 * @param {string} orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
		 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
		 * Currently, only sorting by name or creationTimestamp desc is supported.
		 * @param {string} pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
		 * @return {void} Successful response
		 */
		Deploymentmanager_operations_list(project: string, filter: string | null | undefined, maxResults: number | null | undefined, orderBy: string | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/global/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxResults=' + maxResults + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a specific operation.
		 * Get {project}/global/operations/{operation}
		 * @param {string} project The project ID for this request.
		 * @param {string} operation The name of the operation for this request.
		 * @return {void} Successful response
		 */
		Deploymentmanager_operations_get(project: string, operation: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/global/operations/' + (operation == null ? '' : encodeURIComponent(operation)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all resource types for Deployment Manager.
		 * Get {project}/global/types
		 * @param {string} project The project ID for this request.
		 * @param {string} filter A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <.
		 * For example, if you are filtering Compute Engine instances, you can exclude instances named example-instance by specifying name != example-instance.
		 * You can also filter nested fields. For example, you could specify scheduling.automaticRestart = false to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels.
		 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake"). By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. For example, (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true).
		 * @param {number} maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
		 * @param {string} orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
		 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
		 * Currently, only sorting by name or creationTimestamp desc is supported.
		 * @param {string} pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
		 * @return {void} Successful response
		 */
		Deploymentmanager_types_list(project: string, filter: string | null | undefined, maxResults: number | null | undefined, orderBy: string | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (project == null ? '' : encodeURIComponent(project)) + '/global/types&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxResults=' + maxResults + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', { observe: 'response', responseType: 'text' });
		}
	}

	export enum Deploymentmanager_deployments_insertCreatePolicy { ACQUIRE = 0, CREATE_OR_ACQUIRE = 1 }

	export enum Deploymentmanager_deployments_deleteDeletePolicy { ABANDON = 0, DELETE = 1 }

}

