import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A configuration object describing how Cloud Bigtable should treat traffic from a particular end user application. */
	export interface AppProfile {

		/** Long form description of the use case for this AppProfile. */
		description?: string | null;

		/** Strongly validated etag for optimistic concurrency control. Preserve the value returned from `GetAppProfile` when calling `UpdateAppProfile` to fail the request if there has been a modification in the mean time. The `update_mask` of the request need not include `etag` for this protection to apply. See [Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag) and [RFC 7232](https://tools.ietf.org/html/rfc7232#section-2.3) for more details. */
		etag?: string | null;

		/** Read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes consistency to improve availability. */
		multiClusterRoutingUseAny?: MultiClusterRoutingUseAny;

		/** The unique name of the app profile. Values are of the form `projects/{project}/instances/{instance}/appProfiles/_a-zA-Z0-9*`. */
		name?: string | null;

		/** This field has been deprecated in favor of `standard_isolation.priority`. If you set this field, `standard_isolation.priority` will be set instead. The priority of requests sent using this app profile. */
		priority?: AppProfilePriority | null;

		/** Unconditionally routes all read/write requests to a specific cluster. This option preserves read-your-writes consistency but does not improve availability. */
		singleClusterRouting?: SingleClusterRouting;

		/** Standard options for isolating this app profile's traffic from other use cases. */
		standardIsolation?: StandardIsolation;
	}

	/** A configuration object describing how Cloud Bigtable should treat traffic from a particular end user application. */
	export interface AppProfileFormProperties {

		/** Long form description of the use case for this AppProfile. */
		description: FormControl<string | null | undefined>,

		/** Strongly validated etag for optimistic concurrency control. Preserve the value returned from `GetAppProfile` when calling `UpdateAppProfile` to fail the request if there has been a modification in the mean time. The `update_mask` of the request need not include `etag` for this protection to apply. See [Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag) and [RFC 7232](https://tools.ietf.org/html/rfc7232#section-2.3) for more details. */
		etag: FormControl<string | null | undefined>,

		/** The unique name of the app profile. Values are of the form `projects/{project}/instances/{instance}/appProfiles/_a-zA-Z0-9*`. */
		name: FormControl<string | null | undefined>,

		/** This field has been deprecated in favor of `standard_isolation.priority`. If you set this field, `standard_isolation.priority` will be set instead. The priority of requests sent using this app profile. */
		priority: FormControl<AppProfilePriority | null | undefined>,
	}
	export function CreateAppProfileFormGroup() {
		return new FormGroup<AppProfileFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<AppProfilePriority | null | undefined>(undefined),
		});

	}


	/** Read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes consistency to improve availability. */
	export interface MultiClusterRoutingUseAny {

		/** The set of clusters to route to. The order is ignored; clusters will be tried in order of distance. If left empty, all clusters are eligible. */
		clusterIds?: Array<string>;
	}

	/** Read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes consistency to improve availability. */
	export interface MultiClusterRoutingUseAnyFormProperties {
	}
	export function CreateMultiClusterRoutingUseAnyFormGroup() {
		return new FormGroup<MultiClusterRoutingUseAnyFormProperties>({
		});

	}

	export enum AppProfilePriority { PRIORITY_UNSPECIFIED = 'PRIORITY_UNSPECIFIED', PRIORITY_LOW = 'PRIORITY_LOW', PRIORITY_MEDIUM = 'PRIORITY_MEDIUM', PRIORITY_HIGH = 'PRIORITY_HIGH' }


	/** Unconditionally routes all read/write requests to a specific cluster. This option preserves read-your-writes consistency but does not improve availability. */
	export interface SingleClusterRouting {

		/** Whether or not `CheckAndMutateRow` and `ReadModifyWriteRow` requests are allowed by this app profile. It is unsafe to send these requests to the same table/row/column in multiple clusters. */
		allowTransactionalWrites?: boolean | null;

		/** The cluster to which read/write requests should be routed. */
		clusterId?: string | null;
	}

	/** Unconditionally routes all read/write requests to a specific cluster. This option preserves read-your-writes consistency but does not improve availability. */
	export interface SingleClusterRoutingFormProperties {

		/** Whether or not `CheckAndMutateRow` and `ReadModifyWriteRow` requests are allowed by this app profile. It is unsafe to send these requests to the same table/row/column in multiple clusters. */
		allowTransactionalWrites: FormControl<boolean | null | undefined>,

		/** The cluster to which read/write requests should be routed. */
		clusterId: FormControl<string | null | undefined>,
	}
	export function CreateSingleClusterRoutingFormGroup() {
		return new FormGroup<SingleClusterRoutingFormProperties>({
			allowTransactionalWrites: new FormControl<boolean | null | undefined>(undefined),
			clusterId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Standard options for isolating this app profile's traffic from other use cases. */
	export interface StandardIsolation {

		/** The priority of requests sent using this app profile. */
		priority?: AppProfilePriority | null;
	}

	/** Standard options for isolating this app profile's traffic from other use cases. */
	export interface StandardIsolationFormProperties {

		/** The priority of requests sent using this app profile. */
		priority: FormControl<AppProfilePriority | null | undefined>,
	}
	export function CreateStandardIsolationFormGroup() {
		return new FormGroup<StandardIsolationFormProperties>({
			priority: new FormControl<AppProfilePriority | null | undefined>(undefined),
		});

	}


	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface AuditConfig {

		/** The configuration for logging of each type of permission. */
		auditLogConfigs?: Array<AuditLogConfig>;

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service?: string | null;
	}

	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface AuditConfigFormProperties {

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateAuditConfigFormGroup() {
		return new FormGroup<AuditConfigFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface AuditLogConfig {

		/** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
		exemptedMembers?: Array<string>;

		/** The log type that this config enables. */
		logType?: AuditLogConfigLogType | null;
	}

	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface AuditLogConfigFormProperties {

		/** The log type that this config enables. */
		logType: FormControl<AuditLogConfigLogType | null | undefined>,
	}
	export function CreateAuditLogConfigFormGroup() {
		return new FormGroup<AuditLogConfigFormProperties>({
			logType: new FormControl<AuditLogConfigLogType | null | undefined>(undefined),
		});

	}

	export enum AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 'LOG_TYPE_UNSPECIFIED', ADMIN_READ = 'ADMIN_READ', DATA_WRITE = 'DATA_WRITE', DATA_READ = 'DATA_READ' }


	/** Limits for the number of nodes a Cluster can autoscale up/down to. */
	export interface AutoscalingLimits {

		/**
		 * Required. Maximum number of nodes to scale up to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxServeNodes?: number | null;

		/**
		 * Required. Minimum number of nodes to scale down to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minServeNodes?: number | null;
	}

	/** Limits for the number of nodes a Cluster can autoscale up/down to. */
	export interface AutoscalingLimitsFormProperties {

		/**
		 * Required. Maximum number of nodes to scale up to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxServeNodes: FormControl<number | null | undefined>,

		/**
		 * Required. Minimum number of nodes to scale down to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minServeNodes: FormControl<number | null | undefined>,
	}
	export function CreateAutoscalingLimitsFormGroup() {
		return new FormGroup<AutoscalingLimitsFormProperties>({
			maxServeNodes: new FormControl<number | null | undefined>(undefined),
			minServeNodes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The Autoscaling targets for a Cluster. These determine the recommended nodes. */
	export interface AutoscalingTargets {

		/**
		 * The cpu utilization that the Autoscaler should be trying to achieve. This number is on a scale from 0 (no utilization) to 100 (total utilization), and is limited between 10 and 80, otherwise it will return INVALID_ARGUMENT error.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cpuUtilizationPercent?: number | null;

		/**
		 * The storage utilization that the Autoscaler should be trying to achieve. This number is limited between 2560 (2.5TiB) and 5120 (5TiB) for a SSD cluster and between 8192 (8TiB) and 16384 (16TiB) for an HDD cluster, otherwise it will return INVALID_ARGUMENT error. If this value is set to 0, it will be treated as if it were set to the default value: 2560 for SSD, 8192 for HDD.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		storageUtilizationGibPerNode?: number | null;
	}

	/** The Autoscaling targets for a Cluster. These determine the recommended nodes. */
	export interface AutoscalingTargetsFormProperties {

		/**
		 * The cpu utilization that the Autoscaler should be trying to achieve. This number is on a scale from 0 (no utilization) to 100 (total utilization), and is limited between 10 and 80, otherwise it will return INVALID_ARGUMENT error.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cpuUtilizationPercent: FormControl<number | null | undefined>,

		/**
		 * The storage utilization that the Autoscaler should be trying to achieve. This number is limited between 2560 (2.5TiB) and 5120 (5TiB) for a SSD cluster and between 8192 (8TiB) and 16384 (16TiB) for an HDD cluster, otherwise it will return INVALID_ARGUMENT error. If this value is set to 0, it will be treated as if it were set to the default value: 2560 for SSD, 8192 for HDD.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		storageUtilizationGibPerNode: FormControl<number | null | undefined>,
	}
	export function CreateAutoscalingTargetsFormGroup() {
		return new FormGroup<AutoscalingTargetsFormProperties>({
			cpuUtilizationPercent: new FormControl<number | null | undefined>(undefined),
			storageUtilizationGibPerNode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A backup of a Cloud Bigtable table. */
	export interface Backup {

		/** Encryption information for a given resource. If this resource is protected with customer managed encryption, the in-use Cloud Key Management Service (Cloud KMS) key version is specified along with its status. */
		encryptionInfo?: EncryptionInfo;

		/** Output only. `end_time` is the time that the backup was finished. The row data in the backup will be no newer than this timestamp. */
		endTime?: string | null;

		/** Required. The expiration time of the backup, with microseconds granularity that must be at least 6 hours and at most 90 days from the time the request is received. Once the `expire_time` has passed, Cloud Bigtable will delete the backup and free the resources used by the backup. */
		expireTime?: string | null;

		/** A globally unique identifier for the backup which cannot be changed. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}/ backups/_a-zA-Z0-9*` The final segment of the name must be between 1 and 50 characters in length. The backup is stored in the cluster identified by the prefix of the backup name of the form `projects/{project}/instances/{instance}/clusters/{cluster}`. */
		name?: string | null;

		/** Output only. Size of the backup in bytes. */
		sizeBytes?: string | null;

		/** Output only. Name of the backup from which this backup was copied. If a backup is not created by copying a backup, this field will be empty. Values are of the form: projects//instances//backups/. */
		sourceBackup?: string | null;

		/** Required. Immutable. Name of the table from which this backup was created. This needs to be in the same instance as the backup. Values are of the form `projects/{project}/instances/{instance}/tables/{source_table}`. */
		sourceTable?: string | null;

		/** Output only. `start_time` is the time that the backup was started (i.e. approximately the time the CreateBackup request is received). The row data in this backup will be no older than this timestamp. */
		startTime?: string | null;

		/** Output only. The current state of the backup. */
		state?: BackupState | null;
	}

	/** A backup of a Cloud Bigtable table. */
	export interface BackupFormProperties {

		/** Output only. `end_time` is the time that the backup was finished. The row data in the backup will be no newer than this timestamp. */
		endTime: FormControl<string | null | undefined>,

		/** Required. The expiration time of the backup, with microseconds granularity that must be at least 6 hours and at most 90 days from the time the request is received. Once the `expire_time` has passed, Cloud Bigtable will delete the backup and free the resources used by the backup. */
		expireTime: FormControl<string | null | undefined>,

		/** A globally unique identifier for the backup which cannot be changed. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}/ backups/_a-zA-Z0-9*` The final segment of the name must be between 1 and 50 characters in length. The backup is stored in the cluster identified by the prefix of the backup name of the form `projects/{project}/instances/{instance}/clusters/{cluster}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Size of the backup in bytes. */
		sizeBytes: FormControl<string | null | undefined>,

		/** Output only. Name of the backup from which this backup was copied. If a backup is not created by copying a backup, this field will be empty. Values are of the form: projects//instances//backups/. */
		sourceBackup: FormControl<string | null | undefined>,

		/** Required. Immutable. Name of the table from which this backup was created. This needs to be in the same instance as the backup. Values are of the form `projects/{project}/instances/{instance}/tables/{source_table}`. */
		sourceTable: FormControl<string | null | undefined>,

		/** Output only. `start_time` is the time that the backup was started (i.e. approximately the time the CreateBackup request is received). The row data in this backup will be no older than this timestamp. */
		startTime: FormControl<string | null | undefined>,

		/** Output only. The current state of the backup. */
		state: FormControl<BackupState | null | undefined>,
	}
	export function CreateBackupFormGroup() {
		return new FormGroup<BackupFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sizeBytes: new FormControl<string | null | undefined>(undefined),
			sourceBackup: new FormControl<string | null | undefined>(undefined),
			sourceTable: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<BackupState | null | undefined>(undefined),
		});

	}


	/** Encryption information for a given resource. If this resource is protected with customer managed encryption, the in-use Cloud Key Management Service (Cloud KMS) key version is specified along with its status. */
	export interface EncryptionInfo {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		encryptionStatus?: Status;

		/** Output only. The type of encryption used to protect this resource. */
		encryptionType?: EncryptionInfoEncryptionType | null;

		/** Output only. The version of the Cloud KMS key specified in the parent cluster that is in use for the data underlying this table. */
		kmsKeyVersion?: string | null;
	}

	/** Encryption information for a given resource. If this resource is protected with customer managed encryption, the in-use Cloud Key Management Service (Cloud KMS) key version is specified along with its status. */
	export interface EncryptionInfoFormProperties {

		/** Output only. The type of encryption used to protect this resource. */
		encryptionType: FormControl<EncryptionInfoEncryptionType | null | undefined>,

		/** Output only. The version of the Cloud KMS key specified in the parent cluster that is in use for the data underlying this table. */
		kmsKeyVersion: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionInfoFormGroup() {
		return new FormGroup<EncryptionInfoFormProperties>({
			encryptionType: new FormControl<EncryptionInfoEncryptionType | null | undefined>(undefined),
			kmsKeyVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

	export enum EncryptionInfoEncryptionType { ENCRYPTION_TYPE_UNSPECIFIED = 'ENCRYPTION_TYPE_UNSPECIFIED', GOOGLE_DEFAULT_ENCRYPTION = 'GOOGLE_DEFAULT_ENCRYPTION', CUSTOMER_MANAGED_ENCRYPTION = 'CUSTOMER_MANAGED_ENCRYPTION' }

	export enum BackupState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', READY = 'READY' }


	/** Information about a backup. */
	export interface BackupInfo {

		/** Output only. Name of the backup. */
		backup?: string | null;

		/** Output only. This time that the backup was finished. Row data in the backup will be no newer than this timestamp. */
		endTime?: string | null;

		/** Output only. Name of the backup from which this backup was copied. If a backup is not created by copying a backup, this field will be empty. Values are of the form: projects//instances//backups/. */
		sourceBackup?: string | null;

		/** Output only. Name of the table the backup was created from. */
		sourceTable?: string | null;

		/** Output only. The time that the backup was started. Row data in the backup will be no older than this timestamp. */
		startTime?: string | null;
	}

	/** Information about a backup. */
	export interface BackupInfoFormProperties {

		/** Output only. Name of the backup. */
		backup: FormControl<string | null | undefined>,

		/** Output only. This time that the backup was finished. Row data in the backup will be no newer than this timestamp. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Name of the backup from which this backup was copied. If a backup is not created by copying a backup, this field will be empty. Values are of the form: projects//instances//backups/. */
		sourceBackup: FormControl<string | null | undefined>,

		/** Output only. Name of the table the backup was created from. */
		sourceTable: FormControl<string | null | undefined>,

		/** Output only. The time that the backup was started. Row data in the backup will be no older than this timestamp. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateBackupInfoFormGroup() {
		return new FormGroup<BackupInfoFormProperties>({
			backup: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			sourceBackup: new FormControl<string | null | undefined>(undefined),
			sourceTable: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Associates `members`, or principals, with a `role`. */
	export interface Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. */
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


	/** Change stream configuration. */
	export interface ChangeStreamConfig {

		/** How long the change stream should be retained. Change stream data older than the retention period will not be returned when reading the change stream from the table. Values must be at least 1 day and at most 7 days, and will be truncated to microsecond granularity. */
		retentionPeriod?: string | null;
	}

	/** Change stream configuration. */
	export interface ChangeStreamConfigFormProperties {

		/** How long the change stream should be retained. Change stream data older than the retention period will not be returned when reading the change stream from the table. Values must be at least 1 day and at most 7 days, and will be truncated to microsecond granularity. */
		retentionPeriod: FormControl<string | null | undefined>,
	}
	export function CreateChangeStreamConfigFormGroup() {
		return new FormGroup<ChangeStreamConfigFormProperties>({
			retentionPeriod: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency */
	export interface CheckConsistencyRequest {

		/** Required. The token created using GenerateConsistencyToken for the Table. */
		consistencyToken?: string | null;

		/** Checks that all writes before the consistency token was generated is replicated in every cluster and readable. */
		standardReadRemoteWrites?: StandardReadRemoteWrites;
	}

	/** Request message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency */
	export interface CheckConsistencyRequestFormProperties {

		/** Required. The token created using GenerateConsistencyToken for the Table. */
		consistencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCheckConsistencyRequestFormGroup() {
		return new FormGroup<CheckConsistencyRequestFormProperties>({
			consistencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Checks that all writes before the consistency token was generated is replicated in every cluster and readable. */
	export interface StandardReadRemoteWrites {
	}

	/** Checks that all writes before the consistency token was generated is replicated in every cluster and readable. */
	export interface StandardReadRemoteWritesFormProperties {
	}
	export function CreateStandardReadRemoteWritesFormGroup() {
		return new FormGroup<StandardReadRemoteWritesFormProperties>({
		});

	}


	/** Response message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency */
	export interface CheckConsistencyResponse {

		/** True only if the token is consistent. A token is consistent if replication has caught up with the restrictions specified in the request. */
		consistent?: boolean | null;
	}

	/** Response message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency */
	export interface CheckConsistencyResponseFormProperties {

		/** True only if the token is consistent. A token is consistent if replication has caught up with the restrictions specified in the request. */
		consistent: FormControl<boolean | null | undefined>,
	}
	export function CreateCheckConsistencyResponseFormGroup() {
		return new FormGroup<CheckConsistencyResponseFormProperties>({
			consistent: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance. */
	export interface Cluster {

		/** Configuration for a cluster. */
		clusterConfig?: ClusterConfig;

		/** Immutable. The type of storage used by this cluster to serve its parent instance's tables, unless explicitly overridden. */
		defaultStorageType?: ClusterDefaultStorageType | null;

		/** Cloud Key Management Service (Cloud KMS) settings for a CMEK-protected cluster. */
		encryptionConfig?: EncryptionConfig;

		/** Immutable. The location where this cluster's nodes and storage reside. For best performance, clients should be located as close as possible to this cluster. Currently only zones are supported, so values should be of the form `projects/{project}/locations/{zone}`. */
		location?: string | null;

		/** The unique name of the cluster. Values are of the form `projects/{project}/instances/{instance}/clusters/a-z*`. */
		name?: string | null;

		/**
		 * The number of nodes in the cluster. If no value is set, Cloud Bigtable automatically allocates nodes based on your data footprint and optimized for 50% storage utilization.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		serveNodes?: number | null;

		/** Output only. The current state of the cluster. */
		state?: ClusterState | null;
	}

	/** A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance. */
	export interface ClusterFormProperties {

		/** Immutable. The type of storage used by this cluster to serve its parent instance's tables, unless explicitly overridden. */
		defaultStorageType: FormControl<ClusterDefaultStorageType | null | undefined>,

		/** Immutable. The location where this cluster's nodes and storage reside. For best performance, clients should be located as close as possible to this cluster. Currently only zones are supported, so values should be of the form `projects/{project}/locations/{zone}`. */
		location: FormControl<string | null | undefined>,

		/** The unique name of the cluster. Values are of the form `projects/{project}/instances/{instance}/clusters/a-z*`. */
		name: FormControl<string | null | undefined>,

		/**
		 * The number of nodes in the cluster. If no value is set, Cloud Bigtable automatically allocates nodes based on your data footprint and optimized for 50% storage utilization.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		serveNodes: FormControl<number | null | undefined>,

		/** Output only. The current state of the cluster. */
		state: FormControl<ClusterState | null | undefined>,
	}
	export function CreateClusterFormGroup() {
		return new FormGroup<ClusterFormProperties>({
			defaultStorageType: new FormControl<ClusterDefaultStorageType | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serveNodes: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<ClusterState | null | undefined>(undefined),
		});

	}


	/** Configuration for a cluster. */
	export interface ClusterConfig {

		/** Autoscaling config for a cluster. */
		clusterAutoscalingConfig?: ClusterAutoscalingConfig;
	}

	/** Configuration for a cluster. */
	export interface ClusterConfigFormProperties {
	}
	export function CreateClusterConfigFormGroup() {
		return new FormGroup<ClusterConfigFormProperties>({
		});

	}


	/** Autoscaling config for a cluster. */
	export interface ClusterAutoscalingConfig {

		/** Limits for the number of nodes a Cluster can autoscale up/down to. */
		autoscalingLimits?: AutoscalingLimits;

		/** The Autoscaling targets for a Cluster. These determine the recommended nodes. */
		autoscalingTargets?: AutoscalingTargets;
	}

	/** Autoscaling config for a cluster. */
	export interface ClusterAutoscalingConfigFormProperties {
	}
	export function CreateClusterAutoscalingConfigFormGroup() {
		return new FormGroup<ClusterAutoscalingConfigFormProperties>({
		});

	}

	export enum ClusterDefaultStorageType { STORAGE_TYPE_UNSPECIFIED = 'STORAGE_TYPE_UNSPECIFIED', SSD = 'SSD', HDD = 'HDD' }


	/** Cloud Key Management Service (Cloud KMS) settings for a CMEK-protected cluster. */
	export interface EncryptionConfig {

		/** Describes the Cloud KMS encryption key that will be used to protect the destination Bigtable cluster. The requirements for this key are: 1) The Cloud Bigtable service account associated with the project that contains this cluster must be granted the `cloudkms.cryptoKeyEncrypterDecrypter` role on the CMEK key. 2) Only regional keys can be used and the region of the CMEK key must match the region of the cluster. Values are of the form `projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}` */
		kmsKeyName?: string | null;
	}

	/** Cloud Key Management Service (Cloud KMS) settings for a CMEK-protected cluster. */
	export interface EncryptionConfigFormProperties {

		/** Describes the Cloud KMS encryption key that will be used to protect the destination Bigtable cluster. The requirements for this key are: 1) The Cloud Bigtable service account associated with the project that contains this cluster must be granted the `cloudkms.cryptoKeyEncrypterDecrypter` role on the CMEK key. 2) Only regional keys can be used and the region of the CMEK key must match the region of the cluster. Values are of the form `projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}` */
		kmsKeyName: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionConfigFormGroup() {
		return new FormGroup<EncryptionConfigFormProperties>({
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClusterState { STATE_NOT_KNOWN = 'STATE_NOT_KNOWN', READY = 'READY', CREATING = 'CREATING', RESIZING = 'RESIZING', DISABLED = 'DISABLED' }


	/** A set of columns within a table which share a common configuration. */
	export interface ColumnFamily {

		/** Rule for determining which cells to delete during garbage collection. */
		gcRule?: GcRule;

		/** Approximate statistics related to a single column family within a table. This information may change rapidly, interpreting these values at a point in time may already preset out-of-date information. Everything below is approximate, unless otherwise specified. */
		stats?: ColumnFamilyStats;
	}

	/** A set of columns within a table which share a common configuration. */
	export interface ColumnFamilyFormProperties {
	}
	export function CreateColumnFamilyFormGroup() {
		return new FormGroup<ColumnFamilyFormProperties>({
		});

	}


	/** Rule for determining which cells to delete during garbage collection. */
	export interface GcRule {

		/** A GcRule which deletes cells matching all of the given rules. */
		intersection?: Intersection;

		/** Delete cells in a column older than the given age. Values must be at least one millisecond, and will be truncated to microsecond granularity. */
		maxAge?: string | null;

		/**
		 * Delete all cells in a column except the most recent N.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxNumVersions?: number | null;

		/** A GcRule which deletes cells matching any of the given rules. */
		union?: Union;
	}

	/** Rule for determining which cells to delete during garbage collection. */
	export interface GcRuleFormProperties {

		/** Delete cells in a column older than the given age. Values must be at least one millisecond, and will be truncated to microsecond granularity. */
		maxAge: FormControl<string | null | undefined>,

		/**
		 * Delete all cells in a column except the most recent N.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxNumVersions: FormControl<number | null | undefined>,
	}
	export function CreateGcRuleFormGroup() {
		return new FormGroup<GcRuleFormProperties>({
			maxAge: new FormControl<string | null | undefined>(undefined),
			maxNumVersions: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A GcRule which deletes cells matching all of the given rules. */
	export interface Intersection {

		/** Only delete cells which would be deleted by every element of `rules`. */
		rules?: Array<GcRule>;
	}

	/** A GcRule which deletes cells matching all of the given rules. */
	export interface IntersectionFormProperties {
	}
	export function CreateIntersectionFormGroup() {
		return new FormGroup<IntersectionFormProperties>({
		});

	}


	/** A GcRule which deletes cells matching any of the given rules. */
	export interface Union {

		/** Delete cells which would be deleted by any element of `rules`. */
		rules?: Array<GcRule>;
	}

	/** A GcRule which deletes cells matching any of the given rules. */
	export interface UnionFormProperties {
	}
	export function CreateUnionFormGroup() {
		return new FormGroup<UnionFormProperties>({
		});

	}


	/** Approximate statistics related to a single column family within a table. This information may change rapidly, interpreting these values at a point in time may already preset out-of-date information. Everything below is approximate, unless otherwise specified. */
	export interface ColumnFamilyStats {

		/**
		 * How many cells are present per column qualifier in this column family, averaged over all rows containing any column in the column family. e.g. For column family "family" in a table with 3 rows: * A row with 3 cells in "family:col" and 1 cell in "other:col" (3 cells / 1 column in "family") * A row with 1 cell in "family:col", 7 cells in "family:other_col", and 7 cells in "other:data" (8 cells / 2 columns in "family") * A row with 3 cells in "other:col" (0 columns in "family", "family" not present) would report (3 + 8 + 0)/(1 + 2 + 0) = 3.66 in this field.
		 * Type: double
		 */
		averageCellsPerColumn?: number | null;

		/**
		 * How many column qualifiers are present in this column family, averaged over all rows in the table. e.g. For column family "family" in a table with 3 rows: * A row with cells in "family:col" and "other:col" (1 column in "family") * A row with cells in "family:col", "family:other_col", and "other:data" (2 columns in "family") * A row with cells in "other:col" (0 columns in "family", "family" not present) would report (1 + 2 + 0)/3 = 1.5 in this field.
		 * Type: double
		 */
		averageColumnsPerRow?: number | null;

		/** How much space the data in the column family occupies. This is roughly how many bytes would be needed to read the contents of the entire column family (e.g. by streaming all contents out). */
		logicalDataBytes?: string | null;
	}

	/** Approximate statistics related to a single column family within a table. This information may change rapidly, interpreting these values at a point in time may already preset out-of-date information. Everything below is approximate, unless otherwise specified. */
	export interface ColumnFamilyStatsFormProperties {

		/**
		 * How many cells are present per column qualifier in this column family, averaged over all rows containing any column in the column family. e.g. For column family "family" in a table with 3 rows: * A row with 3 cells in "family:col" and 1 cell in "other:col" (3 cells / 1 column in "family") * A row with 1 cell in "family:col", 7 cells in "family:other_col", and 7 cells in "other:data" (8 cells / 2 columns in "family") * A row with 3 cells in "other:col" (0 columns in "family", "family" not present) would report (3 + 8 + 0)/(1 + 2 + 0) = 3.66 in this field.
		 * Type: double
		 */
		averageCellsPerColumn: FormControl<number | null | undefined>,

		/**
		 * How many column qualifiers are present in this column family, averaged over all rows in the table. e.g. For column family "family" in a table with 3 rows: * A row with cells in "family:col" and "other:col" (1 column in "family") * A row with cells in "family:col", "family:other_col", and "other:data" (2 columns in "family") * A row with cells in "other:col" (0 columns in "family", "family" not present) would report (1 + 2 + 0)/3 = 1.5 in this field.
		 * Type: double
		 */
		averageColumnsPerRow: FormControl<number | null | undefined>,

		/** How much space the data in the column family occupies. This is roughly how many bytes would be needed to read the contents of the entire column family (e.g. by streaming all contents out). */
		logicalDataBytes: FormControl<string | null | undefined>,
	}
	export function CreateColumnFamilyStatsFormGroup() {
		return new FormGroup<ColumnFamilyStatsFormProperties>({
			averageCellsPerColumn: new FormControl<number | null | undefined>(undefined),
			averageColumnsPerRow: new FormControl<number | null | undefined>(undefined),
			logicalDataBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata type for the google.longrunning.Operation returned by CopyBackup. */
	export interface CopyBackupMetadata {

		/** The name of the backup being created through the copy operation. Values are of the form `projects//instances//clusters//backups/`. */
		name?: string | null;

		/** Encapsulates progress related information for a Cloud Bigtable long running operation. */
		progress?: OperationProgress;

		/** Information about a backup. */
		sourceBackupInfo?: BackupInfo;
	}

	/** Metadata type for the google.longrunning.Operation returned by CopyBackup. */
	export interface CopyBackupMetadataFormProperties {

		/** The name of the backup being created through the copy operation. Values are of the form `projects//instances//clusters//backups/`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCopyBackupMetadataFormGroup() {
		return new FormGroup<CopyBackupMetadataFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates progress related information for a Cloud Bigtable long running operation. */
	export interface OperationProgress {

		/** If set, the time at which this operation failed or was completed successfully. */
		endTime?: string | null;

		/**
		 * Percent completion of the operation. Values are between 0 and 100 inclusive.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		progressPercent?: number | null;

		/** Time the request was received. */
		startTime?: string | null;
	}

	/** Encapsulates progress related information for a Cloud Bigtable long running operation. */
	export interface OperationProgressFormProperties {

		/** If set, the time at which this operation failed or was completed successfully. */
		endTime: FormControl<string | null | undefined>,

		/**
		 * Percent completion of the operation. Values are between 0 and 100 inclusive.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		progressPercent: FormControl<number | null | undefined>,

		/** Time the request was received. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateOperationProgressFormGroup() {
		return new FormGroup<OperationProgressFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			progressPercent: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for CopyBackup. */
	export interface CopyBackupRequest {

		/** Required. The id of the new backup. The `backup_id` along with `parent` are combined as {parent}/backups/{backup_id} to create the full backup name, of the form: `projects/{project}/instances/{instance}/clusters/{cluster}/backups/{backup_id}`. This string must be between 1 and 50 characters in length and match the regex _a-zA-Z0-9*. */
		backupId?: string | null;

		/** Required. Required. The expiration time of the copied backup with microsecond granularity that must be at least 6 hours and at most 30 days from the time the request is received. Once the `expire_time` has passed, Cloud Bigtable will delete the backup and free the resources used by the backup. */
		expireTime?: string | null;

		/** Required. The source backup to be copied from. The source backup needs to be in READY state for it to be copied. Copying a copied backup is not allowed. Once CopyBackup is in progress, the source backup cannot be deleted or cleaned up on expiration until CopyBackup is finished. Values are of the form: `projects//instances//clusters//backups/`. */
		sourceBackup?: string | null;
	}

	/** The request for CopyBackup. */
	export interface CopyBackupRequestFormProperties {

		/** Required. The id of the new backup. The `backup_id` along with `parent` are combined as {parent}/backups/{backup_id} to create the full backup name, of the form: `projects/{project}/instances/{instance}/clusters/{cluster}/backups/{backup_id}`. This string must be between 1 and 50 characters in length and match the regex _a-zA-Z0-9*. */
		backupId: FormControl<string | null | undefined>,

		/** Required. Required. The expiration time of the copied backup with microsecond granularity that must be at least 6 hours and at most 30 days from the time the request is received. Once the `expire_time` has passed, Cloud Bigtable will delete the backup and free the resources used by the backup. */
		expireTime: FormControl<string | null | undefined>,

		/** Required. The source backup to be copied from. The source backup needs to be in READY state for it to be copied. Copying a copied backup is not allowed. Once CopyBackup is in progress, the source backup cannot be deleted or cleaned up on expiration until CopyBackup is finished. Values are of the form: `projects//instances//clusters//backups/`. */
		sourceBackup: FormControl<string | null | undefined>,
	}
	export function CreateCopyBackupRequestFormGroup() {
		return new FormGroup<CopyBackupRequestFormProperties>({
			backupId: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			sourceBackup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata type for the operation returned by CreateBackup. */
	export interface CreateBackupMetadata {

		/** If set, the time at which this operation finished or was cancelled. */
		endTime?: string | null;

		/** The name of the backup being created. */
		name?: string | null;

		/** The name of the table the backup is created from. */
		sourceTable?: string | null;

		/** The time at which this operation started. */
		startTime?: string | null;
	}

	/** Metadata type for the operation returned by CreateBackup. */
	export interface CreateBackupMetadataFormProperties {

		/** If set, the time at which this operation finished or was cancelled. */
		endTime: FormControl<string | null | undefined>,

		/** The name of the backup being created. */
		name: FormControl<string | null | undefined>,

		/** The name of the table the backup is created from. */
		sourceTable: FormControl<string | null | undefined>,

		/** The time at which this operation started. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackupMetadataFormGroup() {
		return new FormGroup<CreateBackupMetadataFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sourceTable: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata for the Operation returned by CreateCluster. */
	export interface CreateClusterMetadata {

		/** The time at which the operation failed or was completed successfully. */
		finishTime?: string | null;

		/** Request message for BigtableInstanceAdmin.CreateCluster. */
		originalRequest?: CreateClusterRequest;

		/** The time at which the original request was received. */
		requestTime?: string | null;

		/** Keys: the full `name` of each table that existed in the instance when CreateCluster was first called, i.e. `projects//instances//tables/`. Any table added to the instance by a later API call will be created in the new cluster by that API call, not this one. Values: information on how much of a table's data has been copied to the newly-created cluster so far. */
		tables?: {[id: string]: TableProgress };
	}

	/** The metadata for the Operation returned by CreateCluster. */
	export interface CreateClusterMetadataFormProperties {

		/** The time at which the operation failed or was completed successfully. */
		finishTime: FormControl<string | null | undefined>,

		/** The time at which the original request was received. */
		requestTime: FormControl<string | null | undefined>,

		/** Keys: the full `name` of each table that existed in the instance when CreateCluster was first called, i.e. `projects//instances//tables/`. Any table added to the instance by a later API call will be created in the new cluster by that API call, not this one. Values: information on how much of a table's data has been copied to the newly-created cluster so far. */
		tables: FormControl<{[id: string]: TableProgress } | null | undefined>,
	}
	export function CreateCreateClusterMetadataFormGroup() {
		return new FormGroup<CreateClusterMetadataFormProperties>({
			finishTime: new FormControl<string | null | undefined>(undefined),
			requestTime: new FormControl<string | null | undefined>(undefined),
			tables: new FormControl<{[id: string]: TableProgress } | null | undefined>(undefined),
		});

	}


	/** Request message for BigtableInstanceAdmin.CreateCluster. */
	export interface CreateClusterRequest {

		/** A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance. */
		cluster?: Cluster;

		/** Required. The ID to be used when referring to the new cluster within its instance, e.g., just `mycluster` rather than `projects/myproject/instances/myinstance/clusters/mycluster`. */
		clusterId?: string | null;

		/** Required. The unique name of the instance in which to create the new cluster. Values are of the form `projects/{project}/instances/{instance}`. */
		parent?: string | null;
	}

	/** Request message for BigtableInstanceAdmin.CreateCluster. */
	export interface CreateClusterRequestFormProperties {

		/** Required. The ID to be used when referring to the new cluster within its instance, e.g., just `mycluster` rather than `projects/myproject/instances/myinstance/clusters/mycluster`. */
		clusterId: FormControl<string | null | undefined>,

		/** Required. The unique name of the instance in which to create the new cluster. Values are of the form `projects/{project}/instances/{instance}`. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateCreateClusterRequestFormGroup() {
		return new FormGroup<CreateClusterRequestFormProperties>({
			clusterId: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Progress info for copying a table's data to the new cluster. */
	export interface TableProgress {

		/** Estimate of the number of bytes copied so far for this table. This will eventually reach 'estimated_size_bytes' unless the table copy is CANCELLED. */
		estimatedCopiedBytes?: string | null;

		/** Estimate of the size of the table to be copied. */
		estimatedSizeBytes?: string | null;
		state?: TableProgressState | null;
	}

	/** Progress info for copying a table's data to the new cluster. */
	export interface TableProgressFormProperties {

		/** Estimate of the number of bytes copied so far for this table. This will eventually reach 'estimated_size_bytes' unless the table copy is CANCELLED. */
		estimatedCopiedBytes: FormControl<string | null | undefined>,

		/** Estimate of the size of the table to be copied. */
		estimatedSizeBytes: FormControl<string | null | undefined>,
		state: FormControl<TableProgressState | null | undefined>,
	}
	export function CreateTableProgressFormGroup() {
		return new FormGroup<TableProgressFormProperties>({
			estimatedCopiedBytes: new FormControl<string | null | undefined>(undefined),
			estimatedSizeBytes: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<TableProgressState | null | undefined>(undefined),
		});

	}

	export enum TableProgressState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PENDING = 'PENDING', COPYING = 'COPYING', COMPLETED = 'COMPLETED', CANCELLED = 'CANCELLED' }


	/** The metadata for the Operation returned by CreateInstance. */
	export interface CreateInstanceMetadata {

		/** The time at which the operation failed or was completed successfully. */
		finishTime?: string | null;

		/** Request message for BigtableInstanceAdmin.CreateInstance. */
		originalRequest?: CreateInstanceRequest;

		/** The time at which the original request was received. */
		requestTime?: string | null;
	}

	/** The metadata for the Operation returned by CreateInstance. */
	export interface CreateInstanceMetadataFormProperties {

		/** The time at which the operation failed or was completed successfully. */
		finishTime: FormControl<string | null | undefined>,

		/** The time at which the original request was received. */
		requestTime: FormControl<string | null | undefined>,
	}
	export function CreateCreateInstanceMetadataFormGroup() {
		return new FormGroup<CreateInstanceMetadataFormProperties>({
			finishTime: new FormControl<string | null | undefined>(undefined),
			requestTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for BigtableInstanceAdmin.CreateInstance. */
	export interface CreateInstanceRequest {

		/** Required. The clusters to be created within the instance, mapped by desired cluster ID, e.g., just `mycluster` rather than `projects/myproject/instances/myinstance/clusters/mycluster`. Fields marked `OutputOnly` must be left blank. */
		clusters?: {[id: string]: Cluster };

		/** A collection of Bigtable Tables and the resources that serve them. All tables in an instance are served from all Clusters in the instance. */
		instance?: Instance;

		/** Required. The ID to be used when referring to the new instance within its project, e.g., just `myinstance` rather than `projects/myproject/instances/myinstance`. */
		instanceId?: string | null;

		/** Required. The unique name of the project in which to create the new instance. Values are of the form `projects/{project}`. */
		parent?: string | null;
	}

	/** Request message for BigtableInstanceAdmin.CreateInstance. */
	export interface CreateInstanceRequestFormProperties {

		/** Required. The clusters to be created within the instance, mapped by desired cluster ID, e.g., just `mycluster` rather than `projects/myproject/instances/myinstance/clusters/mycluster`. Fields marked `OutputOnly` must be left blank. */
		clusters: FormControl<{[id: string]: Cluster } | null | undefined>,

		/** Required. The ID to be used when referring to the new instance within its project, e.g., just `myinstance` rather than `projects/myproject/instances/myinstance`. */
		instanceId: FormControl<string | null | undefined>,

		/** Required. The unique name of the project in which to create the new instance. Values are of the form `projects/{project}`. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateCreateInstanceRequestFormGroup() {
		return new FormGroup<CreateInstanceRequestFormProperties>({
			clusters: new FormControl<{[id: string]: Cluster } | null | undefined>(undefined),
			instanceId: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of Bigtable Tables and the resources that serve them. All tables in an instance are served from all Clusters in the instance. */
	export interface Instance {

		/** Output only. A commit timestamp representing when this Instance was created. For instances created before this field was added (August 2021), this value is `seconds: 0, nanos: 1`. */
		createTime?: string | null;

		/** Required. The descriptive name for this instance as it appears in UIs. Can be changed at any time, but should be kept globally unique to avoid confusion. */
		displayName?: string | null;

		/** Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. They can be used to filter resources and aggregate metrics. * Label keys must be between 1 and 63 characters long and must conform to the regular expression: `\p{Ll}\p{Lo}{0,62}`. * Label values must be between 0 and 63 characters long and must conform to the regular expression: `[\p{Ll}\p{Lo}\p{N}_-]{0,63}`. * No more than 64 labels can be associated with a given resource. * Keys and values must both be under 128 bytes. */
		labels?: {[id: string]: string };

		/** The unique name of the instance. Values are of the form `projects/{project}/instances/a-z+[a-z0-9]`. */
		name?: string | null;

		/** Output only. Reserved for future use. */
		satisfiesPzs?: boolean | null;

		/** Output only. The current state of the instance. */
		state?: InstanceState | null;

		/** The type of the instance. Defaults to `PRODUCTION`. */
		type?: InstanceType | null;
	}

	/** A collection of Bigtable Tables and the resources that serve them. All tables in an instance are served from all Clusters in the instance. */
	export interface InstanceFormProperties {

		/** Output only. A commit timestamp representing when this Instance was created. For instances created before this field was added (August 2021), this value is `seconds: 0, nanos: 1`. */
		createTime: FormControl<string | null | undefined>,

		/** Required. The descriptive name for this instance as it appears in UIs. Can be changed at any time, but should be kept globally unique to avoid confusion. */
		displayName: FormControl<string | null | undefined>,

		/** Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. They can be used to filter resources and aggregate metrics. * Label keys must be between 1 and 63 characters long and must conform to the regular expression: `\p{Ll}\p{Lo}{0,62}`. * Label values must be between 0 and 63 characters long and must conform to the regular expression: `[\p{Ll}\p{Lo}\p{N}_-]{0,63}`. * No more than 64 labels can be associated with a given resource. * Keys and values must both be under 128 bytes. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The unique name of the instance. Values are of the form `projects/{project}/instances/a-z+[a-z0-9]`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Reserved for future use. */
		satisfiesPzs: FormControl<boolean | null | undefined>,

		/** Output only. The current state of the instance. */
		state: FormControl<InstanceState | null | undefined>,

		/** The type of the instance. Defaults to `PRODUCTION`. */
		type: FormControl<InstanceType | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			satisfiesPzs: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<InstanceState | null | undefined>(undefined),
			type: new FormControl<InstanceType | null | undefined>(undefined),
		});

	}

	export enum InstanceState { STATE_NOT_KNOWN = 'STATE_NOT_KNOWN', READY = 'READY', CREATING = 'CREATING' }

	export enum InstanceType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', PRODUCTION = 'PRODUCTION', DEVELOPMENT = 'DEVELOPMENT' }


	/** Request message for google.bigtable.admin.v2.BigtableTableAdmin.CreateTable */
	export interface CreateTableRequest {

		/** The optional list of row keys that will be used to initially split the table into several tablets (tablets are similar to HBase regions). Given two split keys, `s1` and `s2`, three tablets will be created, spanning the key ranges: `[, s1), [s1, s2), [s2, )`. Example: * Row keys := `["a", "apple", "custom", "customer_1", "customer_2",` `"other", "zz"]` * initial_split_keys := `["apple", "customer_1", "customer_2", "other"]` * Key assignment: - Tablet 1 `[, apple) => {"a"}.` - Tablet 2 `[apple, customer_1) => {"apple", "custom"}.` - Tablet 3 `[customer_1, customer_2) => {"customer_1"}.` - Tablet 4 `[customer_2, other) => {"customer_2"}.` - Tablet 5 `[other, ) => {"other", "zz"}.` */
		initialSplits?: Array<Split>;

		/** A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster. */
		table?: Table;

		/** Required. The name by which the new table should be referred to within the parent instance, e.g., `foobar` rather than `{parent}/tables/foobar`. Maximum 50 characters. */
		tableId?: string | null;
	}

	/** Request message for google.bigtable.admin.v2.BigtableTableAdmin.CreateTable */
	export interface CreateTableRequestFormProperties {

		/** Required. The name by which the new table should be referred to within the parent instance, e.g., `foobar` rather than `{parent}/tables/foobar`. Maximum 50 characters. */
		tableId: FormControl<string | null | undefined>,
	}
	export function CreateCreateTableRequestFormGroup() {
		return new FormGroup<CreateTableRequestFormProperties>({
			tableId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An initial split point for a newly created table. */
	export interface Split {

		/** Row key to use as an initial tablet boundary. */
		key?: string | null;
	}

	/** An initial split point for a newly created table. */
	export interface SplitFormProperties {

		/** Row key to use as an initial tablet boundary. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateSplitFormGroup() {
		return new FormGroup<SplitFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster. */
	export interface Table {

		/** Change stream configuration. */
		changeStreamConfig?: ChangeStreamConfig;

		/** Output only. Map from cluster ID to per-cluster table state. If it could not be determined whether or not the table has data in a particular cluster (for example, if its zone is unavailable), then there will be an entry for the cluster with UNKNOWN `replication_status`. Views: `REPLICATION_VIEW`, `ENCRYPTION_VIEW`, `FULL` */
		clusterStates?: {[id: string]: ClusterState };

		/** The column families configured for this table, mapped by column family ID. Views: `SCHEMA_VIEW`, `STATS_VIEW`, `FULL` */
		columnFamilies?: {[id: string]: ColumnFamily };

		/** Set to true to make the table protected against data loss. i.e. deleting the following resources through Admin APIs are prohibited: * The table. * The column families in the table. * The instance containing the table. Note one can still delete the data stored in the table through Data APIs. */
		deletionProtection?: boolean | null;

		/** Immutable. The granularity (i.e. `MILLIS`) at which timestamps are stored in this table. Timestamps not matching the granularity will be rejected. If unspecified at creation time, the value will be set to `MILLIS`. Views: `SCHEMA_VIEW`, `FULL`. */
		granularity?: TableGranularity | null;

		/** The unique name of the table. Values are of the form `projects/{project}/instances/{instance}/tables/_a-zA-Z0-9*`. Views: `NAME_ONLY`, `SCHEMA_VIEW`, `REPLICATION_VIEW`, `STATS_VIEW`, `FULL` */
		name?: string | null;

		/** Information about a table restore. */
		restoreInfo?: RestoreInfo;

		/** Approximate statistics related to a table. These statistics are calculated infrequently, while simultaneously, data in the table can change rapidly. Thus the values reported here (e.g. row count) are very likely out-of date, even the instant they are received in this API. Thus, only treat these values as approximate. IMPORTANT: Everything below is approximate, unless otherwise specified. */
		stats?: TableStats;
	}

	/** A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster. */
	export interface TableFormProperties {

		/** Output only. Map from cluster ID to per-cluster table state. If it could not be determined whether or not the table has data in a particular cluster (for example, if its zone is unavailable), then there will be an entry for the cluster with UNKNOWN `replication_status`. Views: `REPLICATION_VIEW`, `ENCRYPTION_VIEW`, `FULL` */
		clusterStates: FormControl<{[id: string]: ClusterState } | null | undefined>,

		/** The column families configured for this table, mapped by column family ID. Views: `SCHEMA_VIEW`, `STATS_VIEW`, `FULL` */
		columnFamilies: FormControl<{[id: string]: ColumnFamily } | null | undefined>,

		/** Set to true to make the table protected against data loss. i.e. deleting the following resources through Admin APIs are prohibited: * The table. * The column families in the table. * The instance containing the table. Note one can still delete the data stored in the table through Data APIs. */
		deletionProtection: FormControl<boolean | null | undefined>,

		/** Immutable. The granularity (i.e. `MILLIS`) at which timestamps are stored in this table. Timestamps not matching the granularity will be rejected. If unspecified at creation time, the value will be set to `MILLIS`. Views: `SCHEMA_VIEW`, `FULL`. */
		granularity: FormControl<TableGranularity | null | undefined>,

		/** The unique name of the table. Values are of the form `projects/{project}/instances/{instance}/tables/_a-zA-Z0-9*`. Views: `NAME_ONLY`, `SCHEMA_VIEW`, `REPLICATION_VIEW`, `STATS_VIEW`, `FULL` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTableFormGroup() {
		return new FormGroup<TableFormProperties>({
			clusterStates: new FormControl<{[id: string]: ClusterState } | null | undefined>(undefined),
			columnFamilies: new FormControl<{[id: string]: ColumnFamily } | null | undefined>(undefined),
			deletionProtection: new FormControl<boolean | null | undefined>(undefined),
			granularity: new FormControl<TableGranularity | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TableGranularity { TIMESTAMP_GRANULARITY_UNSPECIFIED = 'TIMESTAMP_GRANULARITY_UNSPECIFIED', MILLIS = 'MILLIS' }


	/** Information about a table restore. */
	export interface RestoreInfo {

		/** Information about a backup. */
		backupInfo?: BackupInfo;

		/** The type of the restore source. */
		sourceType?: RestoreInfoSourceType | null;
	}

	/** Information about a table restore. */
	export interface RestoreInfoFormProperties {

		/** The type of the restore source. */
		sourceType: FormControl<RestoreInfoSourceType | null | undefined>,
	}
	export function CreateRestoreInfoFormGroup() {
		return new FormGroup<RestoreInfoFormProperties>({
			sourceType: new FormControl<RestoreInfoSourceType | null | undefined>(undefined),
		});

	}

	export enum RestoreInfoSourceType { RESTORE_SOURCE_TYPE_UNSPECIFIED = 'RESTORE_SOURCE_TYPE_UNSPECIFIED', BACKUP = 'BACKUP' }


	/** Approximate statistics related to a table. These statistics are calculated infrequently, while simultaneously, data in the table can change rapidly. Thus the values reported here (e.g. row count) are very likely out-of date, even the instant they are received in this API. Thus, only treat these values as approximate. IMPORTANT: Everything below is approximate, unless otherwise specified. */
	export interface TableStats {

		/**
		 * How many cells are present per column (column family, column qualifier) combinations, averaged over all columns in all rows in the table. e.g. A table with 2 rows: * A row with 3 cells in "family:col" and 1 cell in "other:col" (4 cells / 2 columns) * A row with 1 cell in "family:col", 7 cells in "family:other_col", and 7 cells in "other:data" (15 cells / 3 columns) would report (4 + 15)/(2 + 3) = 3.8 in this field.
		 * Type: double
		 */
		averageCellsPerColumn?: number | null;

		/**
		 * How many (column family, column qualifier) combinations are present per row in the table, averaged over all rows in the table. e.g. A table with 2 rows: * A row with cells in "family:col" and "other:col" (2 distinct columns) * A row with cells in "family:col", "family:other_col", and "other:data" (3 distinct columns) would report (2 + 3)/2 = 2.5 in this field.
		 * Type: double
		 */
		averageColumnsPerRow?: number | null;

		/** This is roughly how many bytes would be needed to read the entire table (e.g. by streaming all contents out). */
		logicalDataBytes?: string | null;

		/** How many rows are in the table. */
		rowCount?: string | null;
	}

	/** Approximate statistics related to a table. These statistics are calculated infrequently, while simultaneously, data in the table can change rapidly. Thus the values reported here (e.g. row count) are very likely out-of date, even the instant they are received in this API. Thus, only treat these values as approximate. IMPORTANT: Everything below is approximate, unless otherwise specified. */
	export interface TableStatsFormProperties {

		/**
		 * How many cells are present per column (column family, column qualifier) combinations, averaged over all columns in all rows in the table. e.g. A table with 2 rows: * A row with 3 cells in "family:col" and 1 cell in "other:col" (4 cells / 2 columns) * A row with 1 cell in "family:col", 7 cells in "family:other_col", and 7 cells in "other:data" (15 cells / 3 columns) would report (4 + 15)/(2 + 3) = 3.8 in this field.
		 * Type: double
		 */
		averageCellsPerColumn: FormControl<number | null | undefined>,

		/**
		 * How many (column family, column qualifier) combinations are present per row in the table, averaged over all rows in the table. e.g. A table with 2 rows: * A row with cells in "family:col" and "other:col" (2 distinct columns) * A row with cells in "family:col", "family:other_col", and "other:data" (3 distinct columns) would report (2 + 3)/2 = 2.5 in this field.
		 * Type: double
		 */
		averageColumnsPerRow: FormControl<number | null | undefined>,

		/** This is roughly how many bytes would be needed to read the entire table (e.g. by streaming all contents out). */
		logicalDataBytes: FormControl<string | null | undefined>,

		/** How many rows are in the table. */
		rowCount: FormControl<string | null | undefined>,
	}
	export function CreateTableStatsFormGroup() {
		return new FormGroup<TableStatsFormProperties>({
			averageCellsPerColumn: new FormControl<number | null | undefined>(undefined),
			averageColumnsPerRow: new FormControl<number | null | undefined>(undefined),
			logicalDataBytes: new FormControl<string | null | undefined>(undefined),
			rowCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange */
	export interface DropRowRangeRequest {

		/** Delete all rows in the table. Setting this to false is a no-op. */
		deleteAllDataFromTable?: boolean | null;

		/** Delete all rows that start with this row key prefix. Prefix cannot be zero length. */
		rowKeyPrefix?: string | null;
	}

	/** Request message for google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange */
	export interface DropRowRangeRequestFormProperties {

		/** Delete all rows in the table. Setting this to false is a no-op. */
		deleteAllDataFromTable: FormControl<boolean | null | undefined>,

		/** Delete all rows that start with this row key prefix. Prefix cannot be zero length. */
		rowKeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateDropRowRangeRequestFormGroup() {
		return new FormGroup<DropRowRangeRequestFormProperties>({
			deleteAllDataFromTable: new FormControl<boolean | null | undefined>(undefined),
			rowKeyPrefix: new FormControl<string | null | undefined>(undefined),
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


	/** Request message for google.bigtable.admin.v2.BigtableTableAdmin.GenerateConsistencyToken */
	export interface GenerateConsistencyTokenRequest {
	}

	/** Request message for google.bigtable.admin.v2.BigtableTableAdmin.GenerateConsistencyToken */
	export interface GenerateConsistencyTokenRequestFormProperties {
	}
	export function CreateGenerateConsistencyTokenRequestFormGroup() {
		return new FormGroup<GenerateConsistencyTokenRequestFormProperties>({
		});

	}


	/** Response message for google.bigtable.admin.v2.BigtableTableAdmin.GenerateConsistencyToken */
	export interface GenerateConsistencyTokenResponse {

		/** The generated consistency token. */
		consistencyToken?: string | null;
	}

	/** Response message for google.bigtable.admin.v2.BigtableTableAdmin.GenerateConsistencyToken */
	export interface GenerateConsistencyTokenResponseFormProperties {

		/** The generated consistency token. */
		consistencyToken: FormControl<string | null | undefined>,
	}
	export function CreateGenerateConsistencyTokenResponseFormGroup() {
		return new FormGroup<GenerateConsistencyTokenResponseFormProperties>({
			consistencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `GetIamPolicy` method. */
	export interface GetIamPolicyRequest {

		/** Encapsulates settings provided to GetIamPolicy. */
		options?: GetPolicyOptions;
	}

	/** Request message for `GetIamPolicy` method. */
	export interface GetIamPolicyRequestFormProperties {
	}
	export function CreateGetIamPolicyRequestFormGroup() {
		return new FormGroup<GetIamPolicyRequestFormProperties>({
		});

	}


	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GetPolicyOptions {

		/**
		 * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedPolicyVersion?: number | null;
	}

	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GetPolicyOptionsFormProperties {

		/**
		 * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedPolicyVersion: FormControl<number | null | undefined>,
	}
	export function CreateGetPolicyOptionsFormGroup() {
		return new FormGroup<GetPolicyOptionsFormProperties>({
			requestedPolicyVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A tablet is a defined by a start and end key and is explained in https://cloud.google.com/bigtable/docs/overview#architecture and https://cloud.google.com/bigtable/docs/performance#optimization. A Hot tablet is a tablet that exhibits high average cpu usage during the time interval from start time to end time. */
	export interface HotTablet {

		/** Tablet End Key (inclusive). */
		endKey?: string | null;

		/** Output only. The end time of the hot tablet. */
		endTime?: string | null;

		/** The unique name of the hot tablet. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}/hotTablets/[a-zA-Z0-9_-]*`. */
		name?: string | null;

		/**
		 * Output only. The average CPU usage spent by a node on this tablet over the start_time to end_time time range. The percentage is the amount of CPU used by the node to serve the tablet, from 0% (tablet was not interacted with) to 100% (the node spent all cycles serving the hot tablet).
		 * Type: float
		 */
		nodeCpuUsagePercent?: number | null;

		/** Tablet Start Key (inclusive). */
		startKey?: string | null;

		/** Output only. The start time of the hot tablet. */
		startTime?: string | null;

		/** Name of the table that contains the tablet. Values are of the form `projects/{project}/instances/{instance}/tables/_a-zA-Z0-9*`. */
		tableName?: string | null;
	}

	/** A tablet is a defined by a start and end key and is explained in https://cloud.google.com/bigtable/docs/overview#architecture and https://cloud.google.com/bigtable/docs/performance#optimization. A Hot tablet is a tablet that exhibits high average cpu usage during the time interval from start time to end time. */
	export interface HotTabletFormProperties {

		/** Tablet End Key (inclusive). */
		endKey: FormControl<string | null | undefined>,

		/** Output only. The end time of the hot tablet. */
		endTime: FormControl<string | null | undefined>,

		/** The unique name of the hot tablet. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}/hotTablets/[a-zA-Z0-9_-]*`. */
		name: FormControl<string | null | undefined>,

		/**
		 * Output only. The average CPU usage spent by a node on this tablet over the start_time to end_time time range. The percentage is the amount of CPU used by the node to serve the tablet, from 0% (tablet was not interacted with) to 100% (the node spent all cycles serving the hot tablet).
		 * Type: float
		 */
		nodeCpuUsagePercent: FormControl<number | null | undefined>,

		/** Tablet Start Key (inclusive). */
		startKey: FormControl<string | null | undefined>,

		/** Output only. The start time of the hot tablet. */
		startTime: FormControl<string | null | undefined>,

		/** Name of the table that contains the tablet. Values are of the form `projects/{project}/instances/{instance}/tables/_a-zA-Z0-9*`. */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateHotTabletFormGroup() {
		return new FormGroup<HotTabletFormProperties>({
			endKey: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nodeCpuUsagePercent: new FormControl<number | null | undefined>(undefined),
			startKey: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for BigtableInstanceAdmin.ListAppProfiles. */
	export interface ListAppProfilesResponse {

		/** The list of requested app profiles. */
		appProfiles?: Array<AppProfile>;

		/** Locations from which AppProfile information could not be retrieved, due to an outage or some other transient condition. AppProfiles from these locations may be missing from `app_profiles`. Values are of the form `projects//locations/` */
		failedLocations?: Array<string>;

		/** Set if not all app profiles could be returned in a single response. Pass this value to `page_token` in another request to get the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for BigtableInstanceAdmin.ListAppProfiles. */
	export interface ListAppProfilesResponseFormProperties {

		/** Set if not all app profiles could be returned in a single response. Pass this value to `page_token` in another request to get the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppProfilesResponseFormGroup() {
		return new FormGroup<ListAppProfilesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for ListBackups. */
	export interface ListBackupsResponse {

		/** The list of matching backups. */
		backups?: Array<Backup>;

		/** `next_page_token` can be sent in a subsequent ListBackups call to fetch more of the matching backups. */
		nextPageToken?: string | null;
	}

	/** The response for ListBackups. */
	export interface ListBackupsResponseFormProperties {

		/** `next_page_token` can be sent in a subsequent ListBackups call to fetch more of the matching backups. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBackupsResponseFormGroup() {
		return new FormGroup<ListBackupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for BigtableInstanceAdmin.ListClusters. */
	export interface ListClustersResponse {

		/** The list of requested clusters. */
		clusters?: Array<Cluster>;

		/** Locations from which Cluster information could not be retrieved, due to an outage or some other transient condition. Clusters from these locations may be missing from `clusters`, or may only have partial information returned. Values are of the form `projects//locations/` */
		failedLocations?: Array<string>;

		/** DEPRECATED: This field is unused and ignored. */
		nextPageToken?: string | null;
	}

	/** Response message for BigtableInstanceAdmin.ListClusters. */
	export interface ListClustersResponseFormProperties {

		/** DEPRECATED: This field is unused and ignored. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListClustersResponseFormGroup() {
		return new FormGroup<ListClustersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for BigtableInstanceAdmin.ListHotTablets. */
	export interface ListHotTabletsResponse {

		/** List of hot tablets in the tables of the requested cluster that fall within the requested time range. Hot tablets are ordered by node cpu usage percent. If there are multiple hot tablets that correspond to the same tablet within a 15-minute interval, only the hot tablet with the highest node cpu usage will be included in the response. */
		hotTablets?: Array<HotTablet>;

		/** Set if not all hot tablets could be returned in a single response. Pass this value to `page_token` in another request to get the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for BigtableInstanceAdmin.ListHotTablets. */
	export interface ListHotTabletsResponseFormProperties {

		/** Set if not all hot tablets could be returned in a single response. Pass this value to `page_token` in another request to get the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListHotTabletsResponseFormGroup() {
		return new FormGroup<ListHotTabletsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for BigtableInstanceAdmin.ListInstances. */
	export interface ListInstancesResponse {

		/** Locations from which Instance information could not be retrieved, due to an outage or some other transient condition. Instances whose Clusters are all in one of the failed locations may be missing from `instances`, and Instances with at least one Cluster in a failed location may only have partial information returned. Values are of the form `projects//locations/` */
		failedLocations?: Array<string>;

		/** The list of requested instances. */
		instances?: Array<Instance>;

		/** DEPRECATED: This field is unused and ignored. */
		nextPageToken?: string | null;
	}

	/** Response message for BigtableInstanceAdmin.ListInstances. */
	export interface ListInstancesResponseFormProperties {

		/** DEPRECATED: This field is unused and ignored. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListInstancesResponseFormGroup() {
		return new FormGroup<ListInstancesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents a Google Cloud location. */
	export interface Location {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName?: string | null;

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string | null;

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata?: {[id: string]: any };

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name?: string | null;
	}

	/** A resource that represents a Google Cloud location. */
	export interface LocationFormProperties {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName: FormControl<string | null | undefined>,

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId: FormControl<string | null | undefined>,

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
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


	/** Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables */
	export interface ListTablesResponse {

		/** Set if not all tables could be returned in a single response. Pass this value to `page_token` in another request to get the next page of results. */
		nextPageToken?: string | null;

		/** The tables present in the requested instance. */
		tables?: Array<Table>;
	}

	/** Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables */
	export interface ListTablesResponseFormProperties {

		/** Set if not all tables could be returned in a single response. Pass this value to `page_token` in another request to get the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTablesResponseFormGroup() {
		return new FormGroup<ListTablesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A create, update, or delete of a particular column family. */
	export interface Modification {

		/** A set of columns within a table which share a common configuration. */
		create?: ColumnFamily;

		/** Drop (delete) the column family with the given ID, or fail if no such family exists. */
		drop?: boolean | null;

		/** The ID of the column family to be modified. */
		id?: string | null;

		/** A set of columns within a table which share a common configuration. */
		update?: ColumnFamily;
	}

	/** A create, update, or delete of a particular column family. */
	export interface ModificationFormProperties {

		/** Drop (delete) the column family with the given ID, or fail if no such family exists. */
		drop: FormControl<boolean | null | undefined>,

		/** The ID of the column family to be modified. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateModificationFormGroup() {
		return new FormGroup<ModificationFormProperties>({
			drop: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for google.bigtable.admin.v2.BigtableTableAdmin.ModifyColumnFamilies */
	export interface ModifyColumnFamiliesRequest {

		/** Required. Modifications to be atomically applied to the specified table's families. Entries are applied in order, meaning that earlier modifications can be masked by later ones (in the case of repeated updates to the same family, for example). */
		modifications?: Array<Modification>;
	}

	/** Request message for google.bigtable.admin.v2.BigtableTableAdmin.ModifyColumnFamilies */
	export interface ModifyColumnFamiliesRequestFormProperties {
	}
	export function CreateModifyColumnFamiliesRequestFormGroup() {
		return new FormGroup<ModifyColumnFamiliesRequestFormProperties>({
		});

	}


	/** Metadata type for the long-running operation used to track the progress of optimizations performed on a newly restored table. This long-running operation is automatically created by the system after the successful completion of a table restore, and cannot be cancelled. */
	export interface OptimizeRestoredTableMetadata {

		/** Name of the restored table being optimized. */
		name?: string | null;

		/** Encapsulates progress related information for a Cloud Bigtable long running operation. */
		progress?: OperationProgress;
	}

	/** Metadata type for the long-running operation used to track the progress of optimizations performed on a newly restored table. This long-running operation is automatically created by the system after the successful completion of a table restore, and cannot be cancelled. */
	export interface OptimizeRestoredTableMetadataFormProperties {

		/** Name of the restored table being optimized. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOptimizeRestoredTableMetadataFormGroup() {
		return new FormGroup<OptimizeRestoredTableMetadataFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata for the Operation returned by PartialUpdateCluster. */
	export interface PartialUpdateClusterMetadata {

		/** The time at which the operation failed or was completed successfully. */
		finishTime?: string | null;

		/** Request message for BigtableInstanceAdmin.PartialUpdateCluster. */
		originalRequest?: PartialUpdateClusterRequest;

		/** The time at which the original request was received. */
		requestTime?: string | null;
	}

	/** The metadata for the Operation returned by PartialUpdateCluster. */
	export interface PartialUpdateClusterMetadataFormProperties {

		/** The time at which the operation failed or was completed successfully. */
		finishTime: FormControl<string | null | undefined>,

		/** The time at which the original request was received. */
		requestTime: FormControl<string | null | undefined>,
	}
	export function CreatePartialUpdateClusterMetadataFormGroup() {
		return new FormGroup<PartialUpdateClusterMetadataFormProperties>({
			finishTime: new FormControl<string | null | undefined>(undefined),
			requestTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for BigtableInstanceAdmin.PartialUpdateCluster. */
	export interface PartialUpdateClusterRequest {

		/** A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance. */
		cluster?: Cluster;

		/** Required. The subset of Cluster fields which should be replaced. */
		updateMask?: string | null;
	}

	/** Request message for BigtableInstanceAdmin.PartialUpdateCluster. */
	export interface PartialUpdateClusterRequestFormProperties {

		/** Required. The subset of Cluster fields which should be replaced. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreatePartialUpdateClusterRequestFormGroup() {
		return new FormGroup<PartialUpdateClusterRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for BigtableInstanceAdmin.PartialUpdateInstance. */
	export interface PartialUpdateInstanceRequest {

		/** A collection of Bigtable Tables and the resources that serve them. All tables in an instance are served from all Clusters in the instance. */
		instance?: Instance;

		/** Required. The subset of Instance fields which should be replaced. Must be explicitly set. */
		updateMask?: string | null;
	}

	/** Request message for BigtableInstanceAdmin.PartialUpdateInstance. */
	export interface PartialUpdateInstanceRequestFormProperties {

		/** Required. The subset of Instance fields which should be replaced. Must be explicitly set. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreatePartialUpdateInstanceRequestFormGroup() {
		return new FormGroup<PartialUpdateInstanceRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface Policy {

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<AuditConfig>;

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


	/** Metadata type for the long-running operation returned by RestoreTable. */
	export interface RestoreTableMetadata {

		/** Information about a backup. */
		backupInfo?: BackupInfo;

		/** Name of the table being created and restored to. */
		name?: string | null;

		/** If exists, the name of the long-running operation that will be used to track the post-restore optimization process to optimize the performance of the restored table. The metadata type of the long-running operation is OptimizeRestoreTableMetadata. The response type is Empty. This long-running operation may be automatically created by the system if applicable after the RestoreTable long-running operation completes successfully. This operation may not be created if the table is already optimized or the restore was not successful. */
		optimizeTableOperationName?: string | null;

		/** Encapsulates progress related information for a Cloud Bigtable long running operation. */
		progress?: OperationProgress;

		/** The type of the restore source. */
		sourceType?: RestoreInfoSourceType | null;
	}

	/** Metadata type for the long-running operation returned by RestoreTable. */
	export interface RestoreTableMetadataFormProperties {

		/** Name of the table being created and restored to. */
		name: FormControl<string | null | undefined>,

		/** If exists, the name of the long-running operation that will be used to track the post-restore optimization process to optimize the performance of the restored table. The metadata type of the long-running operation is OptimizeRestoreTableMetadata. The response type is Empty. This long-running operation may be automatically created by the system if applicable after the RestoreTable long-running operation completes successfully. This operation may not be created if the table is already optimized or the restore was not successful. */
		optimizeTableOperationName: FormControl<string | null | undefined>,

		/** The type of the restore source. */
		sourceType: FormControl<RestoreInfoSourceType | null | undefined>,
	}
	export function CreateRestoreTableMetadataFormGroup() {
		return new FormGroup<RestoreTableMetadataFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			optimizeTableOperationName: new FormControl<string | null | undefined>(undefined),
			sourceType: new FormControl<RestoreInfoSourceType | null | undefined>(undefined),
		});

	}


	/** The request for RestoreTable. */
	export interface RestoreTableRequest {

		/** Name of the backup from which to restore. Values are of the form `projects//instances//clusters//backups/`. */
		backup?: string | null;

		/** Required. The id of the table to create and restore to. This table must not already exist. The `table_id` appended to `parent` forms the full table name of the form `projects//instances//tables/`. */
		tableId?: string | null;
	}

	/** The request for RestoreTable. */
	export interface RestoreTableRequestFormProperties {

		/** Name of the backup from which to restore. Values are of the form `projects//instances//clusters//backups/`. */
		backup: FormControl<string | null | undefined>,

		/** Required. The id of the table to create and restore to. This table must not already exist. The `table_id` appended to `parent` forms the full table name of the form `projects//instances//tables/`. */
		tableId: FormControl<string | null | undefined>,
	}
	export function CreateRestoreTableRequestFormGroup() {
		return new FormGroup<RestoreTableRequestFormProperties>({
			backup: new FormControl<string | null | undefined>(undefined),
			tableId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: Policy;

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask?: string | null;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequestFormProperties {

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateSetIamPolicyRequestFormGroup() {
		return new FormGroup<SetIamPolicyRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
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


	/** Metadata type for the operation returned by google.bigtable.admin.v2.BigtableTableAdmin.UndeleteTable. */
	export interface UndeleteTableMetadata {

		/** If set, the time at which this operation finished or was cancelled. */
		endTime?: string | null;

		/** The name of the table being restored. */
		name?: string | null;

		/** The time at which this operation started. */
		startTime?: string | null;
	}

	/** Metadata type for the operation returned by google.bigtable.admin.v2.BigtableTableAdmin.UndeleteTable. */
	export interface UndeleteTableMetadataFormProperties {

		/** If set, the time at which this operation finished or was cancelled. */
		endTime: FormControl<string | null | undefined>,

		/** The name of the table being restored. */
		name: FormControl<string | null | undefined>,

		/** The time at which this operation started. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateUndeleteTableMetadataFormGroup() {
		return new FormGroup<UndeleteTableMetadataFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for google.bigtable.admin.v2.BigtableTableAdmin.UndeleteTable */
	export interface UndeleteTableRequest {
	}

	/** Request message for google.bigtable.admin.v2.BigtableTableAdmin.UndeleteTable */
	export interface UndeleteTableRequestFormProperties {
	}
	export function CreateUndeleteTableRequestFormGroup() {
		return new FormGroup<UndeleteTableRequestFormProperties>({
		});

	}


	/** The metadata for the Operation returned by UpdateAppProfile. */
	export interface UpdateAppProfileMetadata {
	}

	/** The metadata for the Operation returned by UpdateAppProfile. */
	export interface UpdateAppProfileMetadataFormProperties {
	}
	export function CreateUpdateAppProfileMetadataFormGroup() {
		return new FormGroup<UpdateAppProfileMetadataFormProperties>({
		});

	}


	/** The metadata for the Operation returned by UpdateCluster. */
	export interface UpdateClusterMetadata {

		/** The time at which the operation failed or was completed successfully. */
		finishTime?: string | null;

		/** A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance. */
		originalRequest?: Cluster;

		/** The time at which the original request was received. */
		requestTime?: string | null;
	}

	/** The metadata for the Operation returned by UpdateCluster. */
	export interface UpdateClusterMetadataFormProperties {

		/** The time at which the operation failed or was completed successfully. */
		finishTime: FormControl<string | null | undefined>,

		/** The time at which the original request was received. */
		requestTime: FormControl<string | null | undefined>,
	}
	export function CreateUpdateClusterMetadataFormGroup() {
		return new FormGroup<UpdateClusterMetadataFormProperties>({
			finishTime: new FormControl<string | null | undefined>(undefined),
			requestTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata for the Operation returned by UpdateInstance. */
	export interface UpdateInstanceMetadata {

		/** The time at which the operation failed or was completed successfully. */
		finishTime?: string | null;

		/** Request message for BigtableInstanceAdmin.PartialUpdateInstance. */
		originalRequest?: PartialUpdateInstanceRequest;

		/** The time at which the original request was received. */
		requestTime?: string | null;
	}

	/** The metadata for the Operation returned by UpdateInstance. */
	export interface UpdateInstanceMetadataFormProperties {

		/** The time at which the operation failed or was completed successfully. */
		finishTime: FormControl<string | null | undefined>,

		/** The time at which the original request was received. */
		requestTime: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInstanceMetadataFormGroup() {
		return new FormGroup<UpdateInstanceMetadataFormProperties>({
			finishTime: new FormControl<string | null | undefined>(undefined),
			requestTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata type for the operation returned by UpdateTable. */
	export interface UpdateTableMetadata {

		/** If set, the time at which this operation finished or was canceled. */
		endTime?: string | null;

		/** The name of the table being updated. */
		name?: string | null;

		/** The time at which this operation started. */
		startTime?: string | null;
	}

	/** Metadata type for the operation returned by UpdateTable. */
	export interface UpdateTableMetadataFormProperties {

		/** If set, the time at which this operation finished or was canceled. */
		endTime: FormControl<string | null | undefined>,

		/** The name of the table being updated. */
		name: FormControl<string | null | undefined>,

		/** The time at which this operation started. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTableMetadataFormGroup() {
		return new FormGroup<UpdateTableMetadataFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Permanently deletes a specified table and all of its data.
		 * Delete v2/{name}
		 * @param {string} name Required. The unique name of the table to be deleted. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.
		 * @param {boolean} ignoreWarnings Required. If true, ignore safety checks when deleting the app profile.
		 * @return {Empty} Successful response
		 */
		Bigtableadmin_projects_instances_tables_delete(name: string, ignoreWarnings: boolean | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&ignoreWarnings=' + ignoreWarnings, {});
		}

		/**
		 * Gets information about a location.
		 * Get v2/{name}
		 * @param {string} name Resource name for the location.
		 * @param {Bigtableadmin_projects_locations_getView} view The view to be applied to the returned table's fields. Defaults to `SCHEMA_VIEW` if unspecified.
		 * @return {Location} Successful response
		 */
		Bigtableadmin_projects_locations_get(name: string, view: Bigtableadmin_projects_locations_getView | null | undefined): Observable<Location> {
			return this.http.get<Location>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&view=' + view, {});
		}

		/**
		 * Updates a specified table.
		 * Patch v2/{name}
		 * @param {string} name The unique name of the table. Values are of the form `projects/{project}/instances/{instance}/tables/_a-zA-Z0-9*`. Views: `NAME_ONLY`, `SCHEMA_VIEW`, `REPLICATION_VIEW`, `STATS_VIEW`, `FULL`
		 * @param {string} updateMask Required. The list of fields to update. A mask specifying which fields (e.g. `change_stream_config`) in the `table` field should be updated. This mask is relative to the `table` field, not to the request message. The wildcard (*) path is currently not supported. Currently UpdateTable is only supported for the following fields: * `change_stream_config` * `change_stream_config.retention_period` * `deletion_protection` If `column_families` is set in `update_mask`, it will return an UNIMPLEMENTED error.
		 * @return {Operation} Successful response
		 */
		Bigtableadmin_projects_instances_tables_patch(name: string, updateMask: string | null | undefined, requestBody: Table): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a cluster within an instance. Note that UpdateCluster does not support updating cluster_config.cluster_autoscaling_config. In order to update it, you must use PartialUpdateCluster.
		 * Put v2/{name}
		 * @param {string} name The unique name of the cluster. Values are of the form `projects/{project}/instances/{instance}/clusters/a-z*`.
		 * @return {Operation} Successful response
		 */
		Bigtableadmin_projects_instances_clusters_update(name: string, requestBody: Cluster): Observable<Operation> {
			return this.http.put<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v2/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Bigtableadmin_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v2/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Bigtableadmin_operations_projects_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v2/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Bigtableadmin_operations_cancel(name: string): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', null, {});
		}

		/**
		 * Checks replication consistency based on a consistency token, that is, if replication has caught up based on the conditions specified in the token and the check request.
		 * Post v2/{name}:checkConsistency
		 * @param {string} name Required. The unique name of the Table for which to check replication consistency. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.
		 * @return {CheckConsistencyResponse} Successful response
		 */
		Bigtableadmin_projects_instances_tables_checkConsistency(name: string, requestBody: CheckConsistencyRequest): Observable<CheckConsistencyResponse> {
			return this.http.post<CheckConsistencyResponse>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':checkConsistency', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Permanently drop/delete a row range from a specified table. The request can specify whether to delete all rows in a table, or only those that match a particular prefix.
		 * Post v2/{name}:dropRowRange
		 * @param {string} name Required. The unique name of the table on which to drop a range of rows. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.
		 * @return {Empty} Successful response
		 */
		Bigtableadmin_projects_instances_tables_dropRowRange(name: string, requestBody: DropRowRangeRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':dropRowRange', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generates a consistency token for a Table, which can be used in CheckConsistency to check whether mutations to the table that finished before this call started have been replicated. The tokens will be available for 90 days.
		 * Post v2/{name}:generateConsistencyToken
		 * @param {string} name Required. The unique name of the Table for which to create a consistency token. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.
		 * @return {GenerateConsistencyTokenResponse} Successful response
		 */
		Bigtableadmin_projects_instances_tables_generateConsistencyToken(name: string, requestBody: GenerateConsistencyTokenRequest): Observable<GenerateConsistencyTokenResponse> {
			return this.http.post<GenerateConsistencyTokenResponse>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':generateConsistencyToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Performs a series of column family modifications on the specified table. Either all or none of the modifications will occur before this method returns, but data requests received prior to that point may see a table where only some modifications have taken effect.
		 * Post v2/{name}:modifyColumnFamilies
		 * @param {string} name Required. The unique name of the table whose families should be modified. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.
		 * @return {Table} Successful response
		 */
		Bigtableadmin_projects_instances_tables_modifyColumnFamilies(name: string, requestBody: ModifyColumnFamiliesRequest): Observable<Table> {
			return this.http.post<Table>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':modifyColumnFamilies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restores a specified table which was accidentally deleted.
		 * Post v2/{name}:undelete
		 * @param {string} name Required. The unique name of the table to be restored. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.
		 * @return {Operation} Successful response
		 */
		Bigtableadmin_projects_instances_tables_undelete(name: string, requestBody: UndeleteTableRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':undelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about app profiles in an instance.
		 * Get v2/{parent}/appProfiles
		 * @param {string} parent Required. The unique name of the instance for which a list of app profiles is requested. Values are of the form `projects/{project}/instances/{instance}`. Use `{instance} = '-'` to list AppProfiles for all Instances in a project, e.g., `projects/myproject/instances/-`.
		 * @param {number} pageSize Maximum number of results per page. A page_size of zero lets the server choose the number of items to return. A page_size which is strictly positive will return at most that many items. A negative page_size will cause an error. Following the first request, subsequent paginated calls are not required to pass a page_size. If a page_size is set in subsequent calls, it must match the page_size given in the first request.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The value of `next_page_token` returned by a previous call.
		 * @return {ListAppProfilesResponse} Successful response
		 */
		Bigtableadmin_projects_instances_appProfiles_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAppProfilesResponse> {
			return this.http.get<ListAppProfilesResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/appProfiles&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an app profile within an instance.
		 * Post v2/{parent}/appProfiles
		 * @param {string} parent Required. The unique name of the instance in which to create the new app profile. Values are of the form `projects/{project}/instances/{instance}`.
		 * @param {string} appProfileId Required. The ID to be used when referring to the new app profile within its instance, e.g., just `myprofile` rather than `projects/myproject/instances/myinstance/appProfiles/myprofile`.
		 * @param {boolean} ignoreWarnings If true, ignore safety checks when creating the app profile.
		 * @return {AppProfile} Successful response
		 */
		Bigtableadmin_projects_instances_appProfiles_create(parent: string, appProfileId: string | null | undefined, ignoreWarnings: boolean | null | undefined, requestBody: AppProfile): Observable<AppProfile> {
			return this.http.post<AppProfile>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/appProfiles&appProfileId=' + (appProfileId == null ? '' : encodeURIComponent(appProfileId)) + '&ignoreWarnings=' + ignoreWarnings, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Cloud Bigtable backups. Returns both completed and pending backups.
		 * Get v2/{parent}/backups
		 * @param {string} parent Required. The cluster to list backups from. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}`. Use `{cluster} = '-'` to list backups for all clusters in an instance, e.g., `projects/{project}/instances/{instance}/clusters/-`.
		 * @param {string} filter A filter expression that filters backups listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be <, >, <=, >=, !=, =, or :. Colon ':' represents a HAS operator which is roughly synonymous with equality. Filter rules are case insensitive. The fields eligible for filtering are: * `name` * `source_table` * `state` * `start_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `end_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `expire_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `size_bytes` To filter on multiple expressions, provide each separate expression within parentheses. By default, each expression is an AND expression. However, you can include AND, OR, and NOT expressions explicitly. Some examples of using filters are: * `name:"exact"` --> The backup's name is the string "exact". * `name:howl` --> The backup's name contains the string "howl". * `source_table:prod` --> The source_table's name contains the string "prod". * `state:CREATING` --> The backup is pending creation. * `state:READY` --> The backup is fully created and ready for use. * `(name:howl) AND (start_time < \"2018-03-28T14:50:00Z\")` --> The backup name contains the string "howl" and start_time of the backup is before 2018-03-28T14:50:00Z. * `size_bytes > 10000000000` --> The backup's size is greater than 10GB
		 * @param {string} orderBy An expression for specifying the sort order of the results of the request. The string value should specify one or more fields in Backup. The full syntax is described at https://aip.dev/132#ordering. Fields supported are: * name * source_table * expire_time * start_time * end_time * size_bytes * state For example, "start_time". The default sorting order is ascending. To specify descending order for the field, a suffix " desc" should be appended to the field name. For example, "start_time desc". Redundant space characters in the syntax are insigificant. If order_by is empty, results will be sorted by `start_time` in descending order starting from the most recently created backup.
		 * @param {number} pageSize Number of backups to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken If non-empty, `page_token` should contain a next_page_token from a previous ListBackupsResponse to the same `parent` and with the same `filter`.
		 * @return {ListBackupsResponse} Successful response
		 */
		Bigtableadmin_projects_instances_clusters_backups_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListBackupsResponse> {
			return this.http.get<ListBackupsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/backups&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts creating a new Cloud Bigtable Backup. The returned backup long-running operation can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup.
		 * Post v2/{parent}/backups
		 * @param {string} parent Required. This must be one of the clusters in the instance in which this table is located. The backup will be stored in this cluster. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}`.
		 * @param {string} backupId Required. The id of the backup to be created. The `backup_id` along with the parent `parent` are combined as {parent}/backups/{backup_id} to create the full backup name, of the form: `projects/{project}/instances/{instance}/clusters/{cluster}/backups/{backup_id}`. This string must be between 1 and 50 characters in length and match the regex _a-zA-Z0-9*.
		 * @return {Operation} Successful response
		 */
		Bigtableadmin_projects_instances_clusters_backups_create(parent: string, backupId: string | null | undefined, requestBody: Backup): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/backups&backupId=' + (backupId == null ? '' : encodeURIComponent(backupId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Copy a Cloud Bigtable backup to a new backup in the destination cluster located in the destination instance and project.
		 * Post v2/{parent}/backups:copy
		 * @param {string} parent Required. The name of the destination cluster that will contain the backup copy. The cluster must already exists. Values are of the form: `projects/{project}/instances/{instance}/clusters/{cluster}`.
		 * @return {Operation} Successful response
		 */
		Bigtableadmin_projects_instances_clusters_backups_copy(parent: string, requestBody: CopyBackupRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/backups:copy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about clusters in an instance.
		 * Get v2/{parent}/clusters
		 * @param {string} parent Required. The unique name of the instance for which a list of clusters is requested. Values are of the form `projects/{project}/instances/{instance}`. Use `{instance} = '-'` to list Clusters for all Instances in a project, e.g., `projects/myproject/instances/-`.
		 * @param {string} pageToken DEPRECATED: This field is unused and ignored.
		 * @return {ListClustersResponse} Successful response
		 */
		Bigtableadmin_projects_instances_clusters_list(parent: string, pageToken: string | null | undefined): Observable<ListClustersResponse> {
			return this.http.get<ListClustersResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/clusters&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a cluster within an instance. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.
		 * Post v2/{parent}/clusters
		 * @param {string} parent Required. The unique name of the instance in which to create the new cluster. Values are of the form `projects/{project}/instances/{instance}`.
		 * @param {string} clusterId Required. The ID to be used when referring to the new cluster within its instance, e.g., just `mycluster` rather than `projects/myproject/instances/myinstance/clusters/mycluster`.
		 * @return {Operation} Successful response
		 */
		Bigtableadmin_projects_instances_clusters_create(parent: string, clusterId: string | null | undefined, requestBody: Cluster): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/clusters&clusterId=' + (clusterId == null ? '' : encodeURIComponent(clusterId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists hot tablets in a cluster, within the time range provided. Hot tablets are ordered based on CPU usage.
		 * Get v2/{parent}/hotTablets
		 * @param {string} parent Required. The cluster name to list hot tablets. Value is in the following form: `projects/{project}/instances/{instance}/clusters/{cluster}`.
		 * @param {string} endTime The end time to list hot tablets.
		 * @param {number} pageSize Maximum number of results per page. A page_size that is empty or zero lets the server choose the number of items to return. A page_size which is strictly positive will return at most that many items. A negative page_size will cause an error. Following the first request, subsequent paginated calls do not need a page_size field. If a page_size is set in subsequent calls, it must match the page_size given in the first request.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The value of `next_page_token` returned by a previous call.
		 * @param {string} startTime The start time to list hot tablets. The hot tablets in the response will have start times between the requested start time and end time. Start time defaults to Now if it is unset, and end time defaults to Now - 24 hours if it is unset. The start time should be less than the end time, and the maximum allowed time range between start time and end time is 48 hours. Start time and end time should have values between Now and Now - 14 days.
		 * @return {ListHotTabletsResponse} Successful response
		 */
		Bigtableadmin_projects_instances_clusters_hotTablets_list(parent: string, endTime: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, startTime: string | null | undefined): Observable<ListHotTabletsResponse> {
			return this.http.get<ListHotTabletsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/hotTablets&endTime=' + (endTime == null ? '' : encodeURIComponent(endTime)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startTime=' + (startTime == null ? '' : encodeURIComponent(startTime)), {});
		}

		/**
		 * Lists information about instances in a project.
		 * Get v2/{parent}/instances
		 * @param {string} parent Required. The unique name of the project for which a list of instances is requested. Values are of the form `projects/{project}`.
		 * @param {string} pageToken DEPRECATED: This field is unused and ignored.
		 * @return {ListInstancesResponse} Successful response
		 */
		Bigtableadmin_projects_instances_list(parent: string, pageToken: string | null | undefined): Observable<ListInstancesResponse> {
			return this.http.get<ListInstancesResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create an instance within a project. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.
		 * Post v2/{parent}/instances
		 * @param {string} parent Required. The unique name of the project in which to create the new instance. Values are of the form `projects/{project}`.
		 * @return {Operation} Successful response
		 */
		Bigtableadmin_projects_instances_create(parent: string, requestBody: CreateInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all tables served from a specified instance.
		 * Get v2/{parent}/tables
		 * @param {string} parent Required. The unique name of the instance for which tables should be listed. Values are of the form `projects/{project}/instances/{instance}`.
		 * @param {number} pageSize Maximum number of results per page. A page_size of zero lets the server choose the number of items to return. A page_size which is strictly positive will return at most that many items. A negative page_size will cause an error. Following the first request, subsequent paginated calls are not required to pass a page_size. If a page_size is set in subsequent calls, it must match the page_size given in the first request.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The value of `next_page_token` returned by a previous call.
		 * @param {Bigtableadmin_projects_locations_getView} view The view to be applied to the returned tables' fields. Only NAME_ONLY view (default), REPLICATION_VIEW and ENCRYPTION_VIEW are supported.
		 * @return {ListTablesResponse} Successful response
		 */
		Bigtableadmin_projects_instances_tables_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Bigtableadmin_projects_locations_getView | null | undefined): Observable<ListTablesResponse> {
			return this.http.get<ListTablesResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tables&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Creates a new table in the specified instance. The table can be created with a full set of initial column families, specified in the request.
		 * Post v2/{parent}/tables
		 * @param {string} parent Required. The unique name of the instance in which to create the table. Values are of the form `projects/{project}/instances/{instance}`.
		 * @return {Table} Successful response
		 */
		Bigtableadmin_projects_instances_tables_create(parent: string, requestBody: CreateTableRequest): Observable<Table> {
			return this.http.post<Table>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tables', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a new table by restoring from a completed backup. The returned table long-running operation can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreTableMetadata. The response type is Table, if successful.
		 * Post v2/{parent}/tables:restore
		 * @param {string} parent Required. The name of the instance in which to create the restored table. Values are of the form `projects//instances/`.
		 * @return {Operation} Successful response
		 */
		Bigtableadmin_projects_instances_tables_restore(parent: string, requestBody: RestoreTableRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tables:restore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a Table or Backup resource. Returns an empty policy if the resource exists but does not have a policy set.
		 * Post v2/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Bigtableadmin_projects_instances_tables_getIamPolicy(resource: string, requestBody: GetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the access control policy on a Table or Backup resource. Replaces any existing policy.
		 * Post v2/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Bigtableadmin_projects_instances_tables_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that the caller has on the specified Table or Backup resource.
		 * Post v2/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Bigtableadmin_projects_instances_tables_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Bigtableadmin_projects_locations_getView { VIEW_UNSPECIFIED = 'VIEW_UNSPECIFIED', NAME_ONLY = 'NAME_ONLY', SCHEMA_VIEW = 'SCHEMA_VIEW', REPLICATION_VIEW = 'REPLICATION_VIEW', ENCRYPTION_VIEW = 'ENCRYPTION_VIEW', STATS_VIEW = 'STATS_VIEW', FULL = 'FULL' }

}

