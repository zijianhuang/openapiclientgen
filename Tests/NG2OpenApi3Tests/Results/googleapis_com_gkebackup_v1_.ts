import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

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

	export enum AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 0, ADMIN_READ = 1, DATA_WRITE = 2, DATA_READ = 3 }


	/** Represents a request to perform a single point-in-time capture of some portion of the state of a GKE cluster, the record of the backup operation itself, and an anchor for the underlying artifacts that comprise the Backup (the config backup and VolumeBackups). Next id: 29 */
	export interface Backup {

		/** Output only. If True, all namespaces were included in the Backup. */
		allNamespaces?: boolean | null;

		/** Information about the GKE cluster from which this Backup was created. */
		clusterMetadata?: ClusterMetadata;

		/** Output only. Completion time of the Backup */
		completeTime?: string | null;

		/** Output only. The size of the config backup in bytes. */
		configBackupSizeBytes?: string | null;

		/** Output only. Whether or not the Backup contains Kubernetes Secrets. Controlled by the parent BackupPlan's include_secrets value. */
		containsSecrets?: boolean | null;

		/** Output only. Whether or not the Backup contains volume data. Controlled by the parent BackupPlan's include_volume_data value. */
		containsVolumeData?: boolean | null;

		/** Output only. The timestamp when this Backup resource was created. */
		createTime?: string | null;

		/** Optional. Minimum age for this Backup (in days). If this field is set to a non-zero value, the Backup will be "locked" against deletion (either manual or automatic deletion) for the number of days provided (measured from the creation time of the Backup). MUST be an integer value between 0-90 (inclusive). Defaults to parent BackupPlan's backup_delete_lock_days setting and may only be increased (either at creation time or in a subsequent update). */
		deleteLockDays?: number | null;

		/** Output only. The time at which an existing delete lock will expire for this backup (calculated from create_time + delete_lock_days). */
		deleteLockExpireTime?: string | null;

		/** Optional. User specified descriptive string for this Backup. */
		description?: string | null;

		/** Defined a customer managed encryption key that will be used to encrypt Backup artifacts. */
		encryptionKey?: EncryptionKey;

		/** Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a backup from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform backup updates in order to avoid race conditions: An `etag` is returned in the response to `GetBackup`, and systems are expected to put that etag in the request to `UpdateBackup` or `DeleteBackup` to ensure that their change will be applied to the same version of the resource. */
		etag?: string | null;

		/** Optional. A set of custom labels supplied by user. */
		labels?: {[id: string]: string };

		/** Output only. This flag indicates whether this Backup resource was created manually by a user or via a schedule in the BackupPlan. A value of True means that the Backup was created manually. */
		manual?: boolean | null;

		/** Output only. The fully qualified name of the Backup. `projects/locations/backupPlans/backups/*` */
		name?: string | null;

		/** Output only. The total number of Kubernetes Pods contained in the Backup. */
		podCount?: number | null;

		/** Output only. The total number of Kubernetes resources included in the Backup. */
		resourceCount?: number | null;

		/** Optional. The age (in days) after which this Backup will be automatically deleted. Must be an integer value >= 0: - If 0, no automatic deletion will occur for this Backup. - If not 0, this must be >= delete_lock_days and <= 365. Once a Backup is created, this value may only be increased. Defaults to the parent BackupPlan's backup_retain_days value. */
		retainDays?: number | null;

		/** Output only. The time at which this Backup will be automatically deleted (calculated from create_time + retain_days). */
		retainExpireTime?: string | null;

		/** A list of namespaced Kubernetes resources. */
		selectedApplications?: NamespacedNames;

		/** A list of Kubernetes Namespaces */
		selectedNamespaces?: Namespaces;

		/** Output only. The total size of the Backup in bytes = config backup size + sum(volume backup sizes) */
		sizeBytes?: string | null;

		/** Output only. Current state of the Backup */
		state?: BackupState | null;

		/** Output only. Human-readable description of why the backup is in the current `state`. */
		stateReason?: string | null;

		/** Output only. Server generated global unique identifier of [UUID4](https://en.wikipedia.org/wiki/Universally_unique_identifier) */
		uid?: string | null;

		/** Output only. The timestamp when this Backup resource was last updated. */
		updateTime?: string | null;

		/** Output only. The total number of volume backups contained in the Backup. */
		volumeCount?: number | null;
	}

	/** Represents a request to perform a single point-in-time capture of some portion of the state of a GKE cluster, the record of the backup operation itself, and an anchor for the underlying artifacts that comprise the Backup (the config backup and VolumeBackups). Next id: 29 */
	export interface BackupFormProperties {

		/** Output only. If True, all namespaces were included in the Backup. */
		allNamespaces: FormControl<boolean | null | undefined>,

		/** Output only. Completion time of the Backup */
		completeTime: FormControl<string | null | undefined>,

		/** Output only. The size of the config backup in bytes. */
		configBackupSizeBytes: FormControl<string | null | undefined>,

		/** Output only. Whether or not the Backup contains Kubernetes Secrets. Controlled by the parent BackupPlan's include_secrets value. */
		containsSecrets: FormControl<boolean | null | undefined>,

		/** Output only. Whether or not the Backup contains volume data. Controlled by the parent BackupPlan's include_volume_data value. */
		containsVolumeData: FormControl<boolean | null | undefined>,

		/** Output only. The timestamp when this Backup resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Minimum age for this Backup (in days). If this field is set to a non-zero value, the Backup will be "locked" against deletion (either manual or automatic deletion) for the number of days provided (measured from the creation time of the Backup). MUST be an integer value between 0-90 (inclusive). Defaults to parent BackupPlan's backup_delete_lock_days setting and may only be increased (either at creation time or in a subsequent update). */
		deleteLockDays: FormControl<number | null | undefined>,

		/** Output only. The time at which an existing delete lock will expire for this backup (calculated from create_time + delete_lock_days). */
		deleteLockExpireTime: FormControl<string | null | undefined>,

		/** Optional. User specified descriptive string for this Backup. */
		description: FormControl<string | null | undefined>,

		/** Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a backup from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform backup updates in order to avoid race conditions: An `etag` is returned in the response to `GetBackup`, and systems are expected to put that etag in the request to `UpdateBackup` or `DeleteBackup` to ensure that their change will be applied to the same version of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Optional. A set of custom labels supplied by user. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. This flag indicates whether this Backup resource was created manually by a user or via a schedule in the BackupPlan. A value of True means that the Backup was created manually. */
		manual: FormControl<boolean | null | undefined>,

		/** Output only. The fully qualified name of the Backup. `projects/locations/backupPlans/backups/*` */
		name: FormControl<string | null | undefined>,

		/** Output only. The total number of Kubernetes Pods contained in the Backup. */
		podCount: FormControl<number | null | undefined>,

		/** Output only. The total number of Kubernetes resources included in the Backup. */
		resourceCount: FormControl<number | null | undefined>,

		/** Optional. The age (in days) after which this Backup will be automatically deleted. Must be an integer value >= 0: - If 0, no automatic deletion will occur for this Backup. - If not 0, this must be >= delete_lock_days and <= 365. Once a Backup is created, this value may only be increased. Defaults to the parent BackupPlan's backup_retain_days value. */
		retainDays: FormControl<number | null | undefined>,

		/** Output only. The time at which this Backup will be automatically deleted (calculated from create_time + retain_days). */
		retainExpireTime: FormControl<string | null | undefined>,

		/** Output only. The total size of the Backup in bytes = config backup size + sum(volume backup sizes) */
		sizeBytes: FormControl<string | null | undefined>,

		/** Output only. Current state of the Backup */
		state: FormControl<BackupState | null | undefined>,

		/** Output only. Human-readable description of why the backup is in the current `state`. */
		stateReason: FormControl<string | null | undefined>,

		/** Output only. Server generated global unique identifier of [UUID4](https://en.wikipedia.org/wiki/Universally_unique_identifier) */
		uid: FormControl<string | null | undefined>,

		/** Output only. The timestamp when this Backup resource was last updated. */
		updateTime: FormControl<string | null | undefined>,

		/** Output only. The total number of volume backups contained in the Backup. */
		volumeCount: FormControl<number | null | undefined>,
	}
	export function CreateBackupFormGroup() {
		return new FormGroup<BackupFormProperties>({
			allNamespaces: new FormControl<boolean | null | undefined>(undefined),
			completeTime: new FormControl<string | null | undefined>(undefined),
			configBackupSizeBytes: new FormControl<string | null | undefined>(undefined),
			containsSecrets: new FormControl<boolean | null | undefined>(undefined),
			containsVolumeData: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteLockDays: new FormControl<number | null | undefined>(undefined),
			deleteLockExpireTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			manual: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			podCount: new FormControl<number | null | undefined>(undefined),
			resourceCount: new FormControl<number | null | undefined>(undefined),
			retainDays: new FormControl<number | null | undefined>(undefined),
			retainExpireTime: new FormControl<string | null | undefined>(undefined),
			sizeBytes: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<BackupState | null | undefined>(undefined),
			stateReason: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			volumeCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about the GKE cluster from which this Backup was created. */
	export interface ClusterMetadata {

		/** Output only. Anthos version */
		anthosVersion?: string | null;

		/** Output only. A list of the Backup for GKE CRD versions found in the cluster. */
		backupCrdVersions?: {[id: string]: string };

		/** Output only. The source cluster from which this Backup was created. Valid formats: - `projects/locations/clusters/*` - `projects/zones/clusters/*` This is inherited from the parent BackupPlan's cluster field. */
		cluster?: string | null;

		/** Output only. GKE version */
		gkeVersion?: string | null;

		/** Output only. The Kubernetes server version of the source cluster. */
		k8sVersion?: string | null;
	}

	/** Information about the GKE cluster from which this Backup was created. */
	export interface ClusterMetadataFormProperties {

		/** Output only. Anthos version */
		anthosVersion: FormControl<string | null | undefined>,

		/** Output only. A list of the Backup for GKE CRD versions found in the cluster. */
		backupCrdVersions: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The source cluster from which this Backup was created. Valid formats: - `projects/locations/clusters/*` - `projects/zones/clusters/*` This is inherited from the parent BackupPlan's cluster field. */
		cluster: FormControl<string | null | undefined>,

		/** Output only. GKE version */
		gkeVersion: FormControl<string | null | undefined>,

		/** Output only. The Kubernetes server version of the source cluster. */
		k8sVersion: FormControl<string | null | undefined>,
	}
	export function CreateClusterMetadataFormGroup() {
		return new FormGroup<ClusterMetadataFormProperties>({
			anthosVersion: new FormControl<string | null | undefined>(undefined),
			backupCrdVersions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			cluster: new FormControl<string | null | undefined>(undefined),
			gkeVersion: new FormControl<string | null | undefined>(undefined),
			k8sVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defined a customer managed encryption key that will be used to encrypt Backup artifacts. */
	export interface EncryptionKey {

		/** Optional. Google Cloud KMS encryption key. Format: `projects/locations/keyRings/cryptoKeys/*` */
		gcpKmsEncryptionKey?: string | null;
	}

	/** Defined a customer managed encryption key that will be used to encrypt Backup artifacts. */
	export interface EncryptionKeyFormProperties {

		/** Optional. Google Cloud KMS encryption key. Format: `projects/locations/keyRings/cryptoKeys/*` */
		gcpKmsEncryptionKey: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionKeyFormGroup() {
		return new FormGroup<EncryptionKeyFormProperties>({
			gcpKmsEncryptionKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of namespaced Kubernetes resources. */
	export interface NamespacedNames {

		/** Optional. A list of namespaced Kubernetes resources. */
		namespacedNames?: Array<NamespacedName>;
	}

	/** A list of namespaced Kubernetes resources. */
	export interface NamespacedNamesFormProperties {
	}
	export function CreateNamespacedNamesFormGroup() {
		return new FormGroup<NamespacedNamesFormProperties>({
		});

	}


	/** A reference to a namespaced resource in Kubernetes. */
	export interface NamespacedName {

		/** Optional. The name of the Kubernetes resource. */
		name?: string | null;

		/** Optional. The Namespace of the Kubernetes resource. */
		namespace?: string | null;
	}

	/** A reference to a namespaced resource in Kubernetes. */
	export interface NamespacedNameFormProperties {

		/** Optional. The name of the Kubernetes resource. */
		name: FormControl<string | null | undefined>,

		/** Optional. The Namespace of the Kubernetes resource. */
		namespace: FormControl<string | null | undefined>,
	}
	export function CreateNamespacedNameFormGroup() {
		return new FormGroup<NamespacedNameFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of Kubernetes Namespaces */
	export interface Namespaces {

		/** Optional. A list of Kubernetes Namespaces */
		namespaces?: Array<string>;
	}

	/** A list of Kubernetes Namespaces */
	export interface NamespacesFormProperties {
	}
	export function CreateNamespacesFormGroup() {
		return new FormGroup<NamespacesFormProperties>({
		});

	}

	export enum BackupState { STATE_UNSPECIFIED = 0, CREATING = 1, IN_PROGRESS = 2, SUCCEEDED = 3, FAILED = 4, DELETING = 5 }


	/** BackupConfig defines the configuration of Backups created via this BackupPlan. */
	export interface BackupConfig {

		/** If True, include all namespaced resources */
		allNamespaces?: boolean | null;

		/** Defined a customer managed encryption key that will be used to encrypt Backup artifacts. */
		encryptionKey?: EncryptionKey;

		/** Optional. This flag specifies whether Kubernetes Secret resources should be included when they fall into the scope of Backups. Default: False */
		includeSecrets?: boolean | null;

		/** Optional. This flag specifies whether volume data should be backed up when PVCs are included in the scope of a Backup. Default: False */
		includeVolumeData?: boolean | null;

		/** A list of namespaced Kubernetes resources. */
		selectedApplications?: NamespacedNames;

		/** A list of Kubernetes Namespaces */
		selectedNamespaces?: Namespaces;
	}

	/** BackupConfig defines the configuration of Backups created via this BackupPlan. */
	export interface BackupConfigFormProperties {

		/** If True, include all namespaced resources */
		allNamespaces: FormControl<boolean | null | undefined>,

		/** Optional. This flag specifies whether Kubernetes Secret resources should be included when they fall into the scope of Backups. Default: False */
		includeSecrets: FormControl<boolean | null | undefined>,

		/** Optional. This flag specifies whether volume data should be backed up when PVCs are included in the scope of a Backup. Default: False */
		includeVolumeData: FormControl<boolean | null | undefined>,
	}
	export function CreateBackupConfigFormGroup() {
		return new FormGroup<BackupConfigFormProperties>({
			allNamespaces: new FormControl<boolean | null | undefined>(undefined),
			includeSecrets: new FormControl<boolean | null | undefined>(undefined),
			includeVolumeData: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Defines the configuration and scheduling for a "line" of Backups. */
	export interface BackupPlan {

		/** BackupConfig defines the configuration of Backups created via this BackupPlan. */
		backupConfig?: BackupConfig;

		/** Defines scheduling parameters for automatically creating Backups via this BackupPlan. */
		backupSchedule?: Schedule;

		/** Required. Immutable. The source cluster from which Backups will be created via this BackupPlan. Valid formats: - `projects/locations/clusters/*` - `projects/zones/clusters/*` */
		cluster?: string | null;

		/** Output only. The timestamp when this BackupPlan resource was created. */
		createTime?: string | null;

		/** Optional. This flag indicates whether this BackupPlan has been deactivated. Setting this field to True locks the BackupPlan such that no further updates will be allowed (except deletes), including the deactivated field itself. It also prevents any new Backups from being created via this BackupPlan (including scheduled Backups). Default: False */
		deactivated?: boolean | null;

		/** Optional. User specified descriptive string for this BackupPlan. */
		description?: string | null;

		/** Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a backup plan from overwriting each other. It is strongly suggested that systems make use of the 'etag' in the read-modify-write cycle to perform BackupPlan updates in order to avoid race conditions: An `etag` is returned in the response to `GetBackupPlan`, and systems are expected to put that etag in the request to `UpdateBackupPlan` or `DeleteBackupPlan` to ensure that their change will be applied to the same version of the resource. */
		etag?: string | null;

		/** Optional. A set of custom labels supplied by user. */
		labels?: {[id: string]: string };

		/** Output only. The full name of the BackupPlan resource. Format: `projects/locations/backupPlans/*` */
		name?: string | null;

		/** Output only. The number of Kubernetes Pods backed up in the last successful Backup created via this BackupPlan. */
		protectedPodCount?: number | null;

		/** RetentionPolicy defines a Backup retention policy for a BackupPlan. */
		retentionPolicy?: RetentionPolicy;

		/** Output only. State of the BackupPlan. This State field reflects the various stages a BackupPlan can be in during the Create operation. It will be set to "DEACTIVATED" if the BackupPlan is deactivated on an Update */
		state?: BackupPlanState | null;

		/** Output only. Human-readable description of why BackupPlan is in the current `state` */
		stateReason?: string | null;

		/** Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format. */
		uid?: string | null;

		/** Output only. The timestamp when this BackupPlan resource was last updated. */
		updateTime?: string | null;
	}

	/** Defines the configuration and scheduling for a "line" of Backups. */
	export interface BackupPlanFormProperties {

		/** Required. Immutable. The source cluster from which Backups will be created via this BackupPlan. Valid formats: - `projects/locations/clusters/*` - `projects/zones/clusters/*` */
		cluster: FormControl<string | null | undefined>,

		/** Output only. The timestamp when this BackupPlan resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. This flag indicates whether this BackupPlan has been deactivated. Setting this field to True locks the BackupPlan such that no further updates will be allowed (except deletes), including the deactivated field itself. It also prevents any new Backups from being created via this BackupPlan (including scheduled Backups). Default: False */
		deactivated: FormControl<boolean | null | undefined>,

		/** Optional. User specified descriptive string for this BackupPlan. */
		description: FormControl<string | null | undefined>,

		/** Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a backup plan from overwriting each other. It is strongly suggested that systems make use of the 'etag' in the read-modify-write cycle to perform BackupPlan updates in order to avoid race conditions: An `etag` is returned in the response to `GetBackupPlan`, and systems are expected to put that etag in the request to `UpdateBackupPlan` or `DeleteBackupPlan` to ensure that their change will be applied to the same version of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Optional. A set of custom labels supplied by user. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The full name of the BackupPlan resource. Format: `projects/locations/backupPlans/*` */
		name: FormControl<string | null | undefined>,

		/** Output only. The number of Kubernetes Pods backed up in the last successful Backup created via this BackupPlan. */
		protectedPodCount: FormControl<number | null | undefined>,

		/** Output only. State of the BackupPlan. This State field reflects the various stages a BackupPlan can be in during the Create operation. It will be set to "DEACTIVATED" if the BackupPlan is deactivated on an Update */
		state: FormControl<BackupPlanState | null | undefined>,

		/** Output only. Human-readable description of why BackupPlan is in the current `state` */
		stateReason: FormControl<string | null | undefined>,

		/** Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The timestamp when this BackupPlan resource was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateBackupPlanFormGroup() {
		return new FormGroup<BackupPlanFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deactivated: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			protectedPodCount: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<BackupPlanState | null | undefined>(undefined),
			stateReason: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines scheduling parameters for automatically creating Backups via this BackupPlan. */
	export interface Schedule {

		/** Optional. A standard [cron](https://wikipedia.com/wiki/cron) string that defines a repeating schedule for creating Backups via this BackupPlan. This is mutually exclusive with the rpo_config field since at most one schedule can be defined for a BackupPlan. If this is defined, then backup_retain_days must also be defined. Default (empty): no automatic backup creation will occur. */
		cronSchedule?: string | null;

		/** Optional. This flag denotes whether automatic Backup creation is paused for this BackupPlan. Default: False */
		paused?: boolean | null;
	}

	/** Defines scheduling parameters for automatically creating Backups via this BackupPlan. */
	export interface ScheduleFormProperties {

		/** Optional. A standard [cron](https://wikipedia.com/wiki/cron) string that defines a repeating schedule for creating Backups via this BackupPlan. This is mutually exclusive with the rpo_config field since at most one schedule can be defined for a BackupPlan. If this is defined, then backup_retain_days must also be defined. Default (empty): no automatic backup creation will occur. */
		cronSchedule: FormControl<string | null | undefined>,

		/** Optional. This flag denotes whether automatic Backup creation is paused for this BackupPlan. Default: False */
		paused: FormControl<boolean | null | undefined>,
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
			cronSchedule: new FormControl<string | null | undefined>(undefined),
			paused: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** RetentionPolicy defines a Backup retention policy for a BackupPlan. */
	export interface RetentionPolicy {

		/** Optional. Minimum age for Backups created via this BackupPlan (in days). This field MUST be an integer value between 0-90 (inclusive). A Backup created under this BackupPlan will NOT be deletable until it reaches Backup's (create_time + backup_delete_lock_days). Updating this field of a BackupPlan does NOT affect existing Backups under it. Backups created AFTER a successful update will inherit the new value. Default: 0 (no delete blocking) */
		backupDeleteLockDays?: number | null;

		/** Optional. The default maximum age of a Backup created via this BackupPlan. This field MUST be an integer value >= 0 and <= 365. If specified, a Backup created under this BackupPlan will be automatically deleted after its age reaches (create_time + backup_retain_days). If not specified, Backups created under this BackupPlan will NOT be subject to automatic deletion. Updating this field does NOT affect existing Backups under it. Backups created AFTER a successful update will automatically pick up the new value. NOTE: backup_retain_days must be >= backup_delete_lock_days. If cron_schedule is defined, then this must be <= 360 * the creation interval. If rpo_config is defined, then this must be <= 360 * target_rpo_minutes / (1440minutes/day). Default: 0 (no automatic deletion) */
		backupRetainDays?: number | null;

		/** Optional. This flag denotes whether the retention policy of this BackupPlan is locked. If set to True, no further update is allowed on this policy, including the `locked` field itself. Default: False */
		locked?: boolean | null;
	}

	/** RetentionPolicy defines a Backup retention policy for a BackupPlan. */
	export interface RetentionPolicyFormProperties {

		/** Optional. Minimum age for Backups created via this BackupPlan (in days). This field MUST be an integer value between 0-90 (inclusive). A Backup created under this BackupPlan will NOT be deletable until it reaches Backup's (create_time + backup_delete_lock_days). Updating this field of a BackupPlan does NOT affect existing Backups under it. Backups created AFTER a successful update will inherit the new value. Default: 0 (no delete blocking) */
		backupDeleteLockDays: FormControl<number | null | undefined>,

		/** Optional. The default maximum age of a Backup created via this BackupPlan. This field MUST be an integer value >= 0 and <= 365. If specified, a Backup created under this BackupPlan will be automatically deleted after its age reaches (create_time + backup_retain_days). If not specified, Backups created under this BackupPlan will NOT be subject to automatic deletion. Updating this field does NOT affect existing Backups under it. Backups created AFTER a successful update will automatically pick up the new value. NOTE: backup_retain_days must be >= backup_delete_lock_days. If cron_schedule is defined, then this must be <= 360 * the creation interval. If rpo_config is defined, then this must be <= 360 * target_rpo_minutes / (1440minutes/day). Default: 0 (no automatic deletion) */
		backupRetainDays: FormControl<number | null | undefined>,

		/** Optional. This flag denotes whether the retention policy of this BackupPlan is locked. If set to True, no further update is allowed on this policy, including the `locked` field itself. Default: False */
		locked: FormControl<boolean | null | undefined>,
	}
	export function CreateRetentionPolicyFormGroup() {
		return new FormGroup<RetentionPolicyFormProperties>({
			backupDeleteLockDays: new FormControl<number | null | undefined>(undefined),
			backupRetainDays: new FormControl<number | null | undefined>(undefined),
			locked: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum BackupPlanState { STATE_UNSPECIFIED = 0, CLUSTER_PENDING = 1, PROVISIONING = 2, READY = 3, FAILED = 4, DEACTIVATED = 5, DELETING = 6 }


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


	/** Defines the scope of cluster-scoped resources to restore. Some group kinds are not reasonable choices for a restore, and will cause an error if selected here. Any scope selection that would restore "all valid" resources automatically excludes these group kinds. - gkebackup.gke.io/BackupJob - gkebackup.gke.io/RestoreJob - metrics.k8s.io/NodeMetrics - migration.k8s.io/StorageState - migration.k8s.io/StorageVersionMigration - Node - snapshot.storage.k8s.io/VolumeSnapshotContent - storage.k8s.io/CSINode Some group kinds are driven by restore configuration elsewhere, and will cause an error if selected here. - Namespace - PersistentVolume */
	export interface ClusterResourceRestoreScope {

		/** Optional. If True, all valid cluster-scoped resources will be restored. Mutually exclusive to any other field in the message. */
		allGroupKinds?: boolean | null;

		/** Optional. A list of cluster-scoped resource group kinds to NOT restore from the backup. If specified, all valid cluster-scoped resources will be restored except for those specified in the list. Mutually exclusive to any other field in the message. */
		excludedGroupKinds?: Array<GroupKind>;

		/** Optional. If True, no cluster-scoped resources will be restored. This has the same restore scope as if the message is not defined. Mutually exclusive to any other field in the message. */
		noGroupKinds?: boolean | null;

		/** Optional. A list of cluster-scoped resource group kinds to restore from the backup. If specified, only the selected resources will be restored. Mutually exclusive to any other field in the message. */
		selectedGroupKinds?: Array<GroupKind>;
	}

	/** Defines the scope of cluster-scoped resources to restore. Some group kinds are not reasonable choices for a restore, and will cause an error if selected here. Any scope selection that would restore "all valid" resources automatically excludes these group kinds. - gkebackup.gke.io/BackupJob - gkebackup.gke.io/RestoreJob - metrics.k8s.io/NodeMetrics - migration.k8s.io/StorageState - migration.k8s.io/StorageVersionMigration - Node - snapshot.storage.k8s.io/VolumeSnapshotContent - storage.k8s.io/CSINode Some group kinds are driven by restore configuration elsewhere, and will cause an error if selected here. - Namespace - PersistentVolume */
	export interface ClusterResourceRestoreScopeFormProperties {

		/** Optional. If True, all valid cluster-scoped resources will be restored. Mutually exclusive to any other field in the message. */
		allGroupKinds: FormControl<boolean | null | undefined>,

		/** Optional. If True, no cluster-scoped resources will be restored. This has the same restore scope as if the message is not defined. Mutually exclusive to any other field in the message. */
		noGroupKinds: FormControl<boolean | null | undefined>,
	}
	export function CreateClusterResourceRestoreScopeFormGroup() {
		return new FormGroup<ClusterResourceRestoreScopeFormProperties>({
			allGroupKinds: new FormControl<boolean | null | undefined>(undefined),
			noGroupKinds: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** This is a direct map to the Kubernetes GroupKind type [GroupKind](https://godoc.org/k8s.io/apimachinery/pkg/runtime/schema#GroupKind) and is used for identifying specific "types" of resources to restore. */
	export interface GroupKind {

		/** Optional. API group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Note: use empty string for core API group */
		resourceGroup?: string | null;

		/** Optional. Kind of a Kubernetes resource, must be in UpperCamelCase (PascalCase) and singular form. E.g. "CustomResourceDefinition", "StorageClass", etc. */
		resourceKind?: string | null;
	}

	/** This is a direct map to the Kubernetes GroupKind type [GroupKind](https://godoc.org/k8s.io/apimachinery/pkg/runtime/schema#GroupKind) and is used for identifying specific "types" of resources to restore. */
	export interface GroupKindFormProperties {

		/** Optional. API group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Note: use empty string for core API group */
		resourceGroup: FormControl<string | null | undefined>,

		/** Optional. Kind of a Kubernetes resource, must be in UpperCamelCase (PascalCase) and singular form. E.g. "CustomResourceDefinition", "StorageClass", etc. */
		resourceKind: FormControl<string | null | undefined>,
	}
	export function CreateGroupKindFormGroup() {
		return new FormGroup<GroupKindFormProperties>({
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			resourceKind: new FormControl<string | null | undefined>(undefined),
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


	/** The request message for Operations.CancelOperation. */
	export interface GoogleLongrunningCancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface GoogleLongrunningCancelOperationRequestFormProperties {
	}
	export function CreateGoogleLongrunningCancelOperationRequestFormGroup() {
		return new FormGroup<GoogleLongrunningCancelOperationRequestFormProperties>({
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<GoogleLongrunningOperation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleLongrunningListOperationsResponseFormGroup() {
		return new FormGroup<GoogleLongrunningListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpcStatus;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleLongrunningOperationFormGroup() {
		return new FormGroup<GoogleLongrunningOperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatus {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGoogleRpcStatusFormGroup() {
		return new FormGroup<GoogleRpcStatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListBackupPlans. */
	export interface ListBackupPlansResponse {

		/** The list of BackupPlans matching the given criteria. */
		backupPlans?: Array<BackupPlan>;

		/** A token which may be sent as page_token in a subsequent `ListBackupPlans` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for ListBackupPlans. */
	export interface ListBackupPlansResponseFormProperties {

		/** A token which may be sent as page_token in a subsequent `ListBackupPlans` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBackupPlansResponseFormGroup() {
		return new FormGroup<ListBackupPlansResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListBackups. */
	export interface ListBackupsResponse {

		/** The list of Backups matching the given criteria. */
		backups?: Array<Backup>;

		/** A token which may be sent as page_token in a subsequent `ListBackups` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return. */
		nextPageToken?: string | null;
	}

	/** Response message for ListBackups. */
	export interface ListBackupsResponseFormProperties {

		/** A token which may be sent as page_token in a subsequent `ListBackups` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBackupsResponseFormGroup() {
		return new FormGroup<ListBackupsResponseFormProperties>({
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


	/** Response message for ListRestorePlans. */
	export interface ListRestorePlansResponse {

		/** A token which may be sent as page_token in a subsequent `ListRestorePlans` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return. */
		nextPageToken?: string | null;

		/** The list of RestorePlans matching the given criteria. */
		restorePlans?: Array<RestorePlan>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for ListRestorePlans. */
	export interface ListRestorePlansResponseFormProperties {

		/** A token which may be sent as page_token in a subsequent `ListRestorePlans` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListRestorePlansResponseFormGroup() {
		return new FormGroup<ListRestorePlansResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration of a potential series of Restore operations to be performed against Backups belong to a particular BackupPlan. Next id: 13 */
	export interface RestorePlan {

		/** Required. Immutable. A reference to the BackupPlan from which Backups may be used as the source for Restores created via this RestorePlan. Format: `projects/locations/backupPlans/*`. */
		backupPlan?: string | null;

		/** Required. Immutable. The target cluster into which Restores created via this RestorePlan will restore data. NOTE: the cluster's region must be the same as the RestorePlan. Valid formats: - `projects/locations/clusters/*` - `projects/zones/clusters/*` */
		cluster?: string | null;

		/** Output only. The timestamp when this RestorePlan resource was created. */
		createTime?: string | null;

		/** Optional. User specified descriptive string for this RestorePlan. */
		description?: string | null;

		/** Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a restore from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform restore updates in order to avoid race conditions: An `etag` is returned in the response to `GetRestorePlan`, and systems are expected to put that etag in the request to `UpdateRestorePlan` or `DeleteRestorePlan` to ensure that their change will be applied to the same version of the resource. */
		etag?: string | null;

		/** Optional. A set of custom labels supplied by user. */
		labels?: {[id: string]: string };

		/** Output only. The full name of the RestorePlan resource. Format: `projects/locations/restorePlans/*`. */
		name?: string | null;

		/** Configuration of a restore. Next id: 14 */
		restoreConfig?: RestoreConfig;

		/** Output only. State of the RestorePlan. This State field reflects the various stages a RestorePlan can be in during the Create operation. */
		state?: RestorePlanState | null;

		/** Output only. Human-readable description of why RestorePlan is in the current `state` */
		stateReason?: string | null;

		/** Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format. */
		uid?: string | null;

		/** Output only. The timestamp when this RestorePlan resource was last updated. */
		updateTime?: string | null;
	}

	/** The configuration of a potential series of Restore operations to be performed against Backups belong to a particular BackupPlan. Next id: 13 */
	export interface RestorePlanFormProperties {

		/** Required. Immutable. A reference to the BackupPlan from which Backups may be used as the source for Restores created via this RestorePlan. Format: `projects/locations/backupPlans/*`. */
		backupPlan: FormControl<string | null | undefined>,

		/** Required. Immutable. The target cluster into which Restores created via this RestorePlan will restore data. NOTE: the cluster's region must be the same as the RestorePlan. Valid formats: - `projects/locations/clusters/*` - `projects/zones/clusters/*` */
		cluster: FormControl<string | null | undefined>,

		/** Output only. The timestamp when this RestorePlan resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. User specified descriptive string for this RestorePlan. */
		description: FormControl<string | null | undefined>,

		/** Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a restore from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform restore updates in order to avoid race conditions: An `etag` is returned in the response to `GetRestorePlan`, and systems are expected to put that etag in the request to `UpdateRestorePlan` or `DeleteRestorePlan` to ensure that their change will be applied to the same version of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Optional. A set of custom labels supplied by user. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The full name of the RestorePlan resource. Format: `projects/locations/restorePlans/*`. */
		name: FormControl<string | null | undefined>,

		/** Output only. State of the RestorePlan. This State field reflects the various stages a RestorePlan can be in during the Create operation. */
		state: FormControl<RestorePlanState | null | undefined>,

		/** Output only. Human-readable description of why RestorePlan is in the current `state` */
		stateReason: FormControl<string | null | undefined>,

		/** Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The timestamp when this RestorePlan resource was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateRestorePlanFormGroup() {
		return new FormGroup<RestorePlanFormProperties>({
			backupPlan: new FormControl<string | null | undefined>(undefined),
			cluster: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<RestorePlanState | null | undefined>(undefined),
			stateReason: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration of a restore. Next id: 14 */
	export interface RestoreConfig {

		/** Restore all namespaced resources in the Backup if set to "True". Specifying this field to "False" is an error. */
		allNamespaces?: boolean | null;

		/** Optional. Defines the behavior for handling the situation where cluster-scoped resources being restored already exist in the target cluster. This MUST be set to a value other than CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED if cluster_resource_restore_scope is not empty. */
		clusterResourceConflictPolicy?: RestoreConfigClusterResourceConflictPolicy | null;

		/** Defines the scope of cluster-scoped resources to restore. Some group kinds are not reasonable choices for a restore, and will cause an error if selected here. Any scope selection that would restore "all valid" resources automatically excludes these group kinds. - gkebackup.gke.io/BackupJob - gkebackup.gke.io/RestoreJob - metrics.k8s.io/NodeMetrics - migration.k8s.io/StorageState - migration.k8s.io/StorageVersionMigration - Node - snapshot.storage.k8s.io/VolumeSnapshotContent - storage.k8s.io/CSINode Some group kinds are driven by restore configuration elsewhere, and will cause an error if selected here. - Namespace - PersistentVolume */
		clusterResourceRestoreScope?: ClusterResourceRestoreScope;

		/** A list of Kubernetes Namespaces */
		excludedNamespaces?: Namespaces;

		/** Optional. Defines the behavior for handling the situation where sets of namespaced resources being restored already exist in the target cluster. This MUST be set to a value other than NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED. */
		namespacedResourceRestoreMode?: RestoreConfigNamespacedResourceRestoreMode | null;

		/** Do not restore any namespaced resources if set to "True". Specifying this field to "False" is not allowed. */
		noNamespaces?: boolean | null;

		/** A list of namespaced Kubernetes resources. */
		selectedApplications?: NamespacedNames;

		/** A list of Kubernetes Namespaces */
		selectedNamespaces?: Namespaces;

		/** Optional. A list of transformation rules to be applied against Kubernetes resources as they are selected for restoration from a Backup. Rules are executed in order defined - this order matters, as changes made by a rule may impact the filtering logic of subsequent rules. An empty list means no substitution will occur. */
		substitutionRules?: Array<SubstitutionRule>;

		/** Optional. A list of transformation rules to be applied against Kubernetes resources as they are selected for restoration from a Backup. Rules are executed in order defined - this order matters, as changes made by a rule may impact the filtering logic of subsequent rules. An empty list means no transformation will occur. */
		transformationRules?: Array<TransformationRule>;

		/** Optional. Specifies the mechanism to be used to restore volume data. Default: VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED (will be treated as NO_VOLUME_DATA_RESTORATION). */
		volumeDataRestorePolicy?: RestoreConfigVolumeDataRestorePolicy | null;
	}

	/** Configuration of a restore. Next id: 14 */
	export interface RestoreConfigFormProperties {

		/** Restore all namespaced resources in the Backup if set to "True". Specifying this field to "False" is an error. */
		allNamespaces: FormControl<boolean | null | undefined>,

		/** Optional. Defines the behavior for handling the situation where cluster-scoped resources being restored already exist in the target cluster. This MUST be set to a value other than CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED if cluster_resource_restore_scope is not empty. */
		clusterResourceConflictPolicy: FormControl<RestoreConfigClusterResourceConflictPolicy | null | undefined>,

		/** Optional. Defines the behavior for handling the situation where sets of namespaced resources being restored already exist in the target cluster. This MUST be set to a value other than NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED. */
		namespacedResourceRestoreMode: FormControl<RestoreConfigNamespacedResourceRestoreMode | null | undefined>,

		/** Do not restore any namespaced resources if set to "True". Specifying this field to "False" is not allowed. */
		noNamespaces: FormControl<boolean | null | undefined>,

		/** Optional. Specifies the mechanism to be used to restore volume data. Default: VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED (will be treated as NO_VOLUME_DATA_RESTORATION). */
		volumeDataRestorePolicy: FormControl<RestoreConfigVolumeDataRestorePolicy | null | undefined>,
	}
	export function CreateRestoreConfigFormGroup() {
		return new FormGroup<RestoreConfigFormProperties>({
			allNamespaces: new FormControl<boolean | null | undefined>(undefined),
			clusterResourceConflictPolicy: new FormControl<RestoreConfigClusterResourceConflictPolicy | null | undefined>(undefined),
			namespacedResourceRestoreMode: new FormControl<RestoreConfigNamespacedResourceRestoreMode | null | undefined>(undefined),
			noNamespaces: new FormControl<boolean | null | undefined>(undefined),
			volumeDataRestorePolicy: new FormControl<RestoreConfigVolumeDataRestorePolicy | null | undefined>(undefined),
		});

	}

	export enum RestoreConfigClusterResourceConflictPolicy { CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED = 0, USE_EXISTING_VERSION = 1, USE_BACKUP_VERSION = 2 }

	export enum RestoreConfigNamespacedResourceRestoreMode { NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED = 0, DELETE_AND_RESTORE = 1, FAIL_ON_CONFLICT = 2 }


	/** A transformation rule to be applied against Kubernetes resources as they are selected for restoration from a Backup. A rule contains both filtering logic (which resources are subject to substitution) and substitution logic. */
	export interface SubstitutionRule {

		/** Optional. This is the new value to set for any fields that pass the filtering and selection criteria. To remove a value from a Kubernetes resource, either leave this field unspecified, or set it to the empty string (""). */
		newValue?: string | null;

		/** Optional. (Filtering parameter) This is a [regular expression] (https://en.wikipedia.org/wiki/Regular_expression) that is compared against the fields matched by the target_json_path expression (and must also have passed the previous filters). Substitution will not be performed against fields whose value does not match this expression. If this field is NOT specified, then ALL fields matched by the target_json_path expression will undergo substitution. Note that an empty (e.g., "", rather than unspecified) value for this field will only match empty fields. */
		originalValuePattern?: string | null;

		/** Optional. (Filtering parameter) Any resource subject to substitution must belong to one of the listed "types". If this field is not provided, no type filtering will be performed (all resources of all types matching previous filtering parameters will be candidates for substitution). */
		targetGroupKinds?: Array<GroupKind>;

		/** Required. This is a [JSONPath] (https://kubernetes.io/docs/reference/kubectl/jsonpath/) expression that matches specific fields of candidate resources and it operates as both a filtering parameter (resources that are not matched with this expression will not be candidates for substitution) as well as a field identifier (identifies exactly which fields out of the candidate resources will be modified). */
		targetJsonPath?: string | null;

		/** Optional. (Filtering parameter) Any resource subject to substitution must be contained within one of the listed Kubernetes Namespace in the Backup. If this field is not provided, no namespace filtering will be performed (all resources in all Namespaces, including all cluster-scoped resources, will be candidates for substitution). To mix cluster-scoped and namespaced resources in the same rule, use an empty string ("") as one of the target namespaces. */
		targetNamespaces?: Array<string>;
	}

	/** A transformation rule to be applied against Kubernetes resources as they are selected for restoration from a Backup. A rule contains both filtering logic (which resources are subject to substitution) and substitution logic. */
	export interface SubstitutionRuleFormProperties {

		/** Optional. This is the new value to set for any fields that pass the filtering and selection criteria. To remove a value from a Kubernetes resource, either leave this field unspecified, or set it to the empty string (""). */
		newValue: FormControl<string | null | undefined>,

		/** Optional. (Filtering parameter) This is a [regular expression] (https://en.wikipedia.org/wiki/Regular_expression) that is compared against the fields matched by the target_json_path expression (and must also have passed the previous filters). Substitution will not be performed against fields whose value does not match this expression. If this field is NOT specified, then ALL fields matched by the target_json_path expression will undergo substitution. Note that an empty (e.g., "", rather than unspecified) value for this field will only match empty fields. */
		originalValuePattern: FormControl<string | null | undefined>,

		/** Required. This is a [JSONPath] (https://kubernetes.io/docs/reference/kubectl/jsonpath/) expression that matches specific fields of candidate resources and it operates as both a filtering parameter (resources that are not matched with this expression will not be candidates for substitution) as well as a field identifier (identifies exactly which fields out of the candidate resources will be modified). */
		targetJsonPath: FormControl<string | null | undefined>,
	}
	export function CreateSubstitutionRuleFormGroup() {
		return new FormGroup<SubstitutionRuleFormProperties>({
			newValue: new FormControl<string | null | undefined>(undefined),
			originalValuePattern: new FormControl<string | null | undefined>(undefined),
			targetJsonPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A transformation rule to be applied against Kubernetes resources as they are selected for restoration from a Backup. A rule contains both filtering logic (which resources are subject to transform) and transformation logic. */
	export interface TransformationRule {

		/** Optional. The description is a user specified string description of the transformation rule. */
		description?: string | null;

		/** Required. A list of transformation rule actions to take against candidate resources. Actions are executed in order defined - this order matters, as they could potentially interfere with each other and the first operation could affect the outcome of the second operation. */
		fieldActions?: Array<TransformationRuleAction>;

		/** ResourceFilter specifies matching criteria to limit the scope of a change to a specific set of kubernetes resources that are selected for restoration from a backup. */
		resourceFilter?: ResourceFilter;
	}

	/** A transformation rule to be applied against Kubernetes resources as they are selected for restoration from a Backup. A rule contains both filtering logic (which resources are subject to transform) and transformation logic. */
	export interface TransformationRuleFormProperties {

		/** Optional. The description is a user specified string description of the transformation rule. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateTransformationRuleFormGroup() {
		return new FormGroup<TransformationRuleFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** TransformationRuleAction defines a TransformationRule action based on the JSON Patch RFC (https://www.rfc-editor.org/rfc/rfc6902) */
	export interface TransformationRuleAction {

		/** Optional. A string containing a JSON Pointer value that references the location in the target document to move the value from. */
		fromPath?: string | null;

		/** Required. op specifies the operation to perform. */
		op?: TransformationRuleActionOp | null;

		/** Optional. A string containing a JSON-Pointer value that references a location within the target document where the operation is performed. */
		path?: string | null;

		/** Optional. A string that specifies the desired value in string format to use for transformation. */
		value?: string | null;
	}

	/** TransformationRuleAction defines a TransformationRule action based on the JSON Patch RFC (https://www.rfc-editor.org/rfc/rfc6902) */
	export interface TransformationRuleActionFormProperties {

		/** Optional. A string containing a JSON Pointer value that references the location in the target document to move the value from. */
		fromPath: FormControl<string | null | undefined>,

		/** Required. op specifies the operation to perform. */
		op: FormControl<TransformationRuleActionOp | null | undefined>,

		/** Optional. A string containing a JSON-Pointer value that references a location within the target document where the operation is performed. */
		path: FormControl<string | null | undefined>,

		/** Optional. A string that specifies the desired value in string format to use for transformation. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTransformationRuleActionFormGroup() {
		return new FormGroup<TransformationRuleActionFormProperties>({
			fromPath: new FormControl<string | null | undefined>(undefined),
			op: new FormControl<TransformationRuleActionOp | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TransformationRuleActionOp { OP_UNSPECIFIED = 0, REMOVE = 1, MOVE = 2, COPY = 3, ADD = 4, TEST = 5, REPLACE = 6 }


	/** ResourceFilter specifies matching criteria to limit the scope of a change to a specific set of kubernetes resources that are selected for restoration from a backup. */
	export interface ResourceFilter {

		/** Optional. (Filtering parameter) Any resource subject to transformation must belong to one of the listed "types". If this field is not provided, no type filtering will be performed (all resources of all types matching previous filtering parameters will be candidates for transformation). */
		groupKinds?: Array<GroupKind>;

		/** Optional. This is a [JSONPath] (https://github.com/json-path/JsonPath/blob/master/README.md) expression that matches specific fields of candidate resources and it operates as a filtering parameter (resources that are not matched with this expression will not be candidates for transformation). */
		jsonPath?: string | null;

		/** Optional. (Filtering parameter) Any resource subject to transformation must be contained within one of the listed Kubernetes Namespace in the Backup. If this field is not provided, no namespace filtering will be performed (all resources in all Namespaces, including all cluster-scoped resources, will be candidates for transformation). */
		namespaces?: Array<string>;
	}

	/** ResourceFilter specifies matching criteria to limit the scope of a change to a specific set of kubernetes resources that are selected for restoration from a backup. */
	export interface ResourceFilterFormProperties {

		/** Optional. This is a [JSONPath] (https://github.com/json-path/JsonPath/blob/master/README.md) expression that matches specific fields of candidate resources and it operates as a filtering parameter (resources that are not matched with this expression will not be candidates for transformation). */
		jsonPath: FormControl<string | null | undefined>,
	}
	export function CreateResourceFilterFormGroup() {
		return new FormGroup<ResourceFilterFormProperties>({
			jsonPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RestoreConfigVolumeDataRestorePolicy { VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED = 0, RESTORE_VOLUME_DATA_FROM_BACKUP = 1, REUSE_VOLUME_HANDLE_FROM_BACKUP = 2, NO_VOLUME_DATA_RESTORATION = 3 }

	export enum RestorePlanState { STATE_UNSPECIFIED = 0, CLUSTER_PENDING = 1, READY = 2, FAILED = 3, DELETING = 4 }


	/** Response message for ListRestores. */
	export interface ListRestoresResponse {

		/** A token which may be sent as page_token in a subsequent `ListRestores` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return. */
		nextPageToken?: string | null;

		/** The list of Restores matching the given criteria. */
		restores?: Array<Restore>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for ListRestores. */
	export interface ListRestoresResponseFormProperties {

		/** A token which may be sent as page_token in a subsequent `ListRestores` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListRestoresResponseFormGroup() {
		return new FormGroup<ListRestoresResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents both a request to Restore some portion of a Backup into a target GKE cluster and a record of the restore operation itself. Next id: 20 */
	export interface Restore {

		/** Required. Immutable. A reference to the Backup used as the source from which this Restore will restore. Note that this Backup must be a sub-resource of the RestorePlan's backup_plan. Format: `projects/locations/backupPlans/backups/*`. */
		backup?: string | null;

		/** Output only. The target cluster into which this Restore will restore data. Valid formats: - `projects/locations/clusters/*` - `projects/zones/clusters/*` Inherited from parent RestorePlan's cluster value. */
		cluster?: string | null;

		/** Output only. Timestamp of when the restore operation completed. */
		completeTime?: string | null;

		/** Output only. The timestamp when this Restore resource was created. */
		createTime?: string | null;

		/** User specified descriptive string for this Restore. */
		description?: string | null;

		/** Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a restore from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform restore updates in order to avoid race conditions: An `etag` is returned in the response to `GetRestore`, and systems are expected to put that etag in the request to `UpdateRestore` or `DeleteRestore` to ensure that their change will be applied to the same version of the resource. */
		etag?: string | null;

		/** A set of custom labels supplied by user. */
		labels?: {[id: string]: string };

		/** Output only. The full name of the Restore resource. Format: `projects/locations/restorePlans/restores/*` */
		name?: string | null;

		/** Output only. Number of resources excluded during the restore execution. */
		resourcesExcludedCount?: number | null;

		/** Output only. Number of resources that failed to be restored during the restore execution. */
		resourcesFailedCount?: number | null;

		/** Output only. Number of resources restored during the restore execution. */
		resourcesRestoredCount?: number | null;

		/** Configuration of a restore. Next id: 14 */
		restoreConfig?: RestoreConfig;

		/** Output only. The current state of the Restore. */
		state?: BackupState | null;

		/** Output only. Human-readable description of why the Restore is in its current state. */
		stateReason?: string | null;

		/** Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format. */
		uid?: string | null;

		/** Output only. The timestamp when this Restore resource was last updated. */
		updateTime?: string | null;

		/** Output only. Number of volumes restored during the restore execution. */
		volumesRestoredCount?: number | null;
	}

	/** Represents both a request to Restore some portion of a Backup into a target GKE cluster and a record of the restore operation itself. Next id: 20 */
	export interface RestoreFormProperties {

		/** Required. Immutable. A reference to the Backup used as the source from which this Restore will restore. Note that this Backup must be a sub-resource of the RestorePlan's backup_plan. Format: `projects/locations/backupPlans/backups/*`. */
		backup: FormControl<string | null | undefined>,

		/** Output only. The target cluster into which this Restore will restore data. Valid formats: - `projects/locations/clusters/*` - `projects/zones/clusters/*` Inherited from parent RestorePlan's cluster value. */
		cluster: FormControl<string | null | undefined>,

		/** Output only. Timestamp of when the restore operation completed. */
		completeTime: FormControl<string | null | undefined>,

		/** Output only. The timestamp when this Restore resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** User specified descriptive string for this Restore. */
		description: FormControl<string | null | undefined>,

		/** Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a restore from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform restore updates in order to avoid race conditions: An `etag` is returned in the response to `GetRestore`, and systems are expected to put that etag in the request to `UpdateRestore` or `DeleteRestore` to ensure that their change will be applied to the same version of the resource. */
		etag: FormControl<string | null | undefined>,

		/** A set of custom labels supplied by user. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The full name of the Restore resource. Format: `projects/locations/restorePlans/restores/*` */
		name: FormControl<string | null | undefined>,

		/** Output only. Number of resources excluded during the restore execution. */
		resourcesExcludedCount: FormControl<number | null | undefined>,

		/** Output only. Number of resources that failed to be restored during the restore execution. */
		resourcesFailedCount: FormControl<number | null | undefined>,

		/** Output only. Number of resources restored during the restore execution. */
		resourcesRestoredCount: FormControl<number | null | undefined>,

		/** Output only. The current state of the Restore. */
		state: FormControl<BackupState | null | undefined>,

		/** Output only. Human-readable description of why the Restore is in its current state. */
		stateReason: FormControl<string | null | undefined>,

		/** Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The timestamp when this Restore resource was last updated. */
		updateTime: FormControl<string | null | undefined>,

		/** Output only. Number of volumes restored during the restore execution. */
		volumesRestoredCount: FormControl<number | null | undefined>,
	}
	export function CreateRestoreFormGroup() {
		return new FormGroup<RestoreFormProperties>({
			backup: new FormControl<string | null | undefined>(undefined),
			cluster: new FormControl<string | null | undefined>(undefined),
			completeTime: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourcesExcludedCount: new FormControl<number | null | undefined>(undefined),
			resourcesFailedCount: new FormControl<number | null | undefined>(undefined),
			resourcesRestoredCount: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<BackupState | null | undefined>(undefined),
			stateReason: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			volumesRestoredCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for ListVolumeBackups. */
	export interface ListVolumeBackupsResponse {

		/** A token which may be sent as page_token in a subsequent `ListVolumeBackups` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return. */
		nextPageToken?: string | null;

		/** The list of VolumeBackups matching the given criteria. */
		volumeBackups?: Array<VolumeBackup>;
	}

	/** Response message for ListVolumeBackups. */
	export interface ListVolumeBackupsResponseFormProperties {

		/** A token which may be sent as page_token in a subsequent `ListVolumeBackups` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListVolumeBackupsResponseFormGroup() {
		return new FormGroup<ListVolumeBackupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the backup of a specific persistent volume as a component of a Backup - both the record of the operation and a pointer to the underlying storage-specific artifacts. Next id: 14 */
	export interface VolumeBackup {

		/** Output only. The timestamp when the associated underlying volume backup operation completed. */
		completeTime?: string | null;

		/** Output only. The timestamp when this VolumeBackup resource was created. */
		createTime?: string | null;

		/** Output only. The minimum size of the disk to which this VolumeBackup can be restored. */
		diskSizeBytes?: string | null;

		/** Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a volume backup from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform volume backup updates in order to avoid race conditions. */
		etag?: string | null;

		/** Output only. The format used for the volume backup. */
		format?: VolumeBackupFormat | null;

		/** Output only. The full name of the VolumeBackup resource. Format: `projects/locations/backupPlans/backups/volumeBackups/*`. */
		name?: string | null;

		/** A reference to a namespaced resource in Kubernetes. */
		sourcePvc?: NamespacedName;

		/** Output only. The current state of this VolumeBackup. */
		state?: VolumeBackupState | null;

		/** Output only. A human readable message explaining why the VolumeBackup is in its current state. */
		stateMessage?: string | null;

		/** Output only. The aggregate size of the underlying artifacts associated with this VolumeBackup in the backup storage. This may change over time when multiple backups of the same volume share the same backup storage location. In particular, this is likely to increase in size when the immediately preceding backup of the same volume is deleted. */
		storageBytes?: string | null;

		/** Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format. */
		uid?: string | null;

		/** Output only. The timestamp when this VolumeBackup resource was last updated. */
		updateTime?: string | null;

		/** Output only. A storage system-specific opaque handle to the underlying volume backup. */
		volumeBackupHandle?: string | null;
	}

	/** Represents the backup of a specific persistent volume as a component of a Backup - both the record of the operation and a pointer to the underlying storage-specific artifacts. Next id: 14 */
	export interface VolumeBackupFormProperties {

		/** Output only. The timestamp when the associated underlying volume backup operation completed. */
		completeTime: FormControl<string | null | undefined>,

		/** Output only. The timestamp when this VolumeBackup resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The minimum size of the disk to which this VolumeBackup can be restored. */
		diskSizeBytes: FormControl<string | null | undefined>,

		/** Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a volume backup from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform volume backup updates in order to avoid race conditions. */
		etag: FormControl<string | null | undefined>,

		/** Output only. The format used for the volume backup. */
		format: FormControl<VolumeBackupFormat | null | undefined>,

		/** Output only. The full name of the VolumeBackup resource. Format: `projects/locations/backupPlans/backups/volumeBackups/*`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The current state of this VolumeBackup. */
		state: FormControl<VolumeBackupState | null | undefined>,

		/** Output only. A human readable message explaining why the VolumeBackup is in its current state. */
		stateMessage: FormControl<string | null | undefined>,

		/** Output only. The aggregate size of the underlying artifacts associated with this VolumeBackup in the backup storage. This may change over time when multiple backups of the same volume share the same backup storage location. In particular, this is likely to increase in size when the immediately preceding backup of the same volume is deleted. */
		storageBytes: FormControl<string | null | undefined>,

		/** Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The timestamp when this VolumeBackup resource was last updated. */
		updateTime: FormControl<string | null | undefined>,

		/** Output only. A storage system-specific opaque handle to the underlying volume backup. */
		volumeBackupHandle: FormControl<string | null | undefined>,
	}
	export function CreateVolumeBackupFormGroup() {
		return new FormGroup<VolumeBackupFormProperties>({
			completeTime: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			diskSizeBytes: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<VolumeBackupFormat | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<VolumeBackupState | null | undefined>(undefined),
			stateMessage: new FormControl<string | null | undefined>(undefined),
			storageBytes: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			volumeBackupHandle: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VolumeBackupFormat { VOLUME_BACKUP_FORMAT_UNSPECIFIED = 0, GCE_PERSISTENT_DISK = 1 }

	export enum VolumeBackupState { STATE_UNSPECIFIED = 0, CREATING = 1, SNAPSHOTTING = 2, UPLOADING = 3, SUCCEEDED = 4, FAILED = 5, DELETING = 6 }


	/** Response message for ListVolumeRestores. */
	export interface ListVolumeRestoresResponse {

		/** A token which may be sent as page_token in a subsequent `ListVolumeRestores` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return. */
		nextPageToken?: string | null;

		/** The list of VolumeRestores matching the given criteria. */
		volumeRestores?: Array<VolumeRestore>;
	}

	/** Response message for ListVolumeRestores. */
	export interface ListVolumeRestoresResponseFormProperties {

		/** A token which may be sent as page_token in a subsequent `ListVolumeRestores` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListVolumeRestoresResponseFormGroup() {
		return new FormGroup<ListVolumeRestoresResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the operation of restoring a volume from a VolumeBackup. Next id: 13 */
	export interface VolumeRestore {

		/** Output only. The timestamp when the associated underlying volume restoration completed. */
		completeTime?: string | null;

		/** Output only. The timestamp when this VolumeRestore resource was created. */
		createTime?: string | null;

		/** Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a volume restore from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform volume restore updates in order to avoid race conditions. */
		etag?: string | null;

		/** Output only. Full name of the VolumeRestore resource. Format: `projects/locations/restorePlans/restores/volumeRestores/*` */
		name?: string | null;

		/** Output only. The current state of this VolumeRestore. */
		state?: VolumeRestoreState | null;

		/** Output only. A human readable message explaining why the VolumeRestore is in its current state. */
		stateMessage?: string | null;

		/** A reference to a namespaced resource in Kubernetes. */
		targetPvc?: NamespacedName;

		/** Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format. */
		uid?: string | null;

		/** Output only. The timestamp when this VolumeRestore resource was last updated. */
		updateTime?: string | null;

		/** Output only. The full name of the VolumeBackup from which the volume will be restored. Format: `projects/locations/backupPlans/backups/volumeBackups/*`. */
		volumeBackup?: string | null;

		/** Output only. A storage system-specific opaque handler to the underlying volume created for the target PVC from the volume backup. */
		volumeHandle?: string | null;

		/** Output only. The type of volume provisioned */
		volumeType?: VolumeRestoreVolumeType | null;
	}

	/** Represents the operation of restoring a volume from a VolumeBackup. Next id: 13 */
	export interface VolumeRestoreFormProperties {

		/** Output only. The timestamp when the associated underlying volume restoration completed. */
		completeTime: FormControl<string | null | undefined>,

		/** Output only. The timestamp when this VolumeRestore resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a volume restore from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform volume restore updates in order to avoid race conditions. */
		etag: FormControl<string | null | undefined>,

		/** Output only. Full name of the VolumeRestore resource. Format: `projects/locations/restorePlans/restores/volumeRestores/*` */
		name: FormControl<string | null | undefined>,

		/** Output only. The current state of this VolumeRestore. */
		state: FormControl<VolumeRestoreState | null | undefined>,

		/** Output only. A human readable message explaining why the VolumeRestore is in its current state. */
		stateMessage: FormControl<string | null | undefined>,

		/** Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The timestamp when this VolumeRestore resource was last updated. */
		updateTime: FormControl<string | null | undefined>,

		/** Output only. The full name of the VolumeBackup from which the volume will be restored. Format: `projects/locations/backupPlans/backups/volumeBackups/*`. */
		volumeBackup: FormControl<string | null | undefined>,

		/** Output only. A storage system-specific opaque handler to the underlying volume created for the target PVC from the volume backup. */
		volumeHandle: FormControl<string | null | undefined>,

		/** Output only. The type of volume provisioned */
		volumeType: FormControl<VolumeRestoreVolumeType | null | undefined>,
	}
	export function CreateVolumeRestoreFormGroup() {
		return new FormGroup<VolumeRestoreFormProperties>({
			completeTime: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<VolumeRestoreState | null | undefined>(undefined),
			stateMessage: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			volumeBackup: new FormControl<string | null | undefined>(undefined),
			volumeHandle: new FormControl<string | null | undefined>(undefined),
			volumeType: new FormControl<VolumeRestoreVolumeType | null | undefined>(undefined),
		});

	}

	export enum VolumeRestoreState { STATE_UNSPECIFIED = 0, CREATING = 1, RESTORING = 2, SUCCEEDED = 3, FAILED = 4, DELETING = 5 }

	export enum VolumeRestoreVolumeType { VOLUME_TYPE_UNSPECIFIED = 0, GCE_PERSISTENT_DISK = 1 }


	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation?: boolean | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage: FormControl<string | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes an existing Restore.
		 * Delete v1/{name}
		 * @param {string} name Required. Full name of the Restore Format: `projects/locations/restorePlans/restores/*`
		 * @param {string} etag Optional. If provided, this value must match the current value of the target Restore's etag field or the request is rejected.
		 * @param {boolean} force Optional. If set to true, any VolumeRestores below this restore will also be deleted. Otherwise, the request will only succeed if the restore has no VolumeRestores.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Gkebackup_projects_locations_restorePlans_restores_delete(name: string, etag: string | null | undefined, force: boolean | null | undefined): Observable<GoogleLongrunningOperation> {
			return this.http.delete<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&etag=' + (etag == null ? '' : encodeURIComponent(etag)) + '&force=' + force, {});
		}

		/**
		 * Retrieve the details of a single VolumeRestore.
		 * Get v1/{name}
		 * @param {string} name Required. Full name of the VolumeRestore resource. Format: `projects/locations/restorePlans/restores/volumeRestores/*`
		 * @return {VolumeRestore} Successful response
		 */
		Gkebackup_projects_locations_restorePlans_restores_volumeRestores_get(name: string): Observable<VolumeRestore> {
			return this.http.get<VolumeRestore>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Update a Restore.
		 * Patch v1/{name}
		 * @param {string} name Output only. The full name of the Restore resource. Format: `projects/locations/restorePlans/restores/*`
		 * @param {string} updateMask Optional. This is used to specify the fields to be overwritten in the Restore targeted for update. The values for each of these updated fields will be taken from the `restore` provided with this request. Field names are relative to the root of the resource. If no `update_mask` is provided, all fields in `restore` will be written to the target Restore resource. Note that OUTPUT_ONLY and IMMUTABLE fields in `restore` are ignored and are not used to update the target Restore.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Gkebackup_projects_locations_restorePlans_restores_patch(name: string, updateMask: string | null | undefined, requestBody: Restore): Observable<GoogleLongrunningOperation> {
			return this.http.patch<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Gkebackup_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {GoogleLongrunningListOperationsResponse} Successful response
		 */
		Gkebackup_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleLongrunningListOperationsResponse> {
			return this.http.get<GoogleLongrunningListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Gkebackup_projects_locations_operations_cancel(name: string, requestBody: GoogleLongrunningCancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists BackupPlans in a given location.
		 * Get v1/{parent}/backupPlans
		 * @param {string} parent Required. The location that contains the BackupPlans to list. Format: `projects/locations/*`
		 * @param {string} filter Optional. Field match expression used to filter the results.
		 * @param {string} orderBy Optional. Field by which to sort the results.
		 * @param {number} pageSize Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried.
		 * @param {string} pageToken Optional. The value of next_page_token received from a previous `ListBackupPlans` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListBackupPlans` must match the call that provided the page token.
		 * @return {ListBackupPlansResponse} Successful response
		 */
		Gkebackup_projects_locations_backupPlans_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListBackupPlansResponse> {
			return this.http.get<ListBackupPlansResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/backupPlans&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new BackupPlan in a given location.
		 * Post v1/{parent}/backupPlans
		 * @param {string} parent Required. The location within which to create the BackupPlan. Format: `projects/locations/*`
		 * @param {string} backupPlanId Required. The client-provided short name for the BackupPlan resource. This name must: - be between 1 and 63 characters long (inclusive) - consist of only lower-case ASCII letters, numbers, and dashes - start with a lower-case letter - end with a lower-case letter or number - be unique within the set of BackupPlans in this location
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Gkebackup_projects_locations_backupPlans_create(parent: string, backupPlanId: string | null | undefined, requestBody: BackupPlan): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/backupPlans&backupPlanId=' + (backupPlanId == null ? '' : encodeURIComponent(backupPlanId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Backups for a given BackupPlan.
		 * Get v1/{parent}/backups
		 * @param {string} parent Required. The BackupPlan that contains the Backups to list. Format: `projects/locations/backupPlans/*`
		 * @param {string} filter Optional. Field match expression used to filter the results.
		 * @param {string} orderBy Optional. Field by which to sort the results.
		 * @param {number} pageSize Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried.
		 * @param {string} pageToken Optional. The value of next_page_token received from a previous `ListBackups` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListBackups` must match the call that provided the page token.
		 * @return {ListBackupsResponse} Successful response
		 */
		Gkebackup_projects_locations_backupPlans_backups_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListBackupsResponse> {
			return this.http.get<ListBackupsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/backups&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Backup for the given BackupPlan.
		 * Post v1/{parent}/backups
		 * @param {string} parent Required. The BackupPlan within which to create the Backup. Format: `projects/locations/backupPlans/*`
		 * @param {string} backupId Optional. The client-provided short name for the Backup resource. This name must: - be between 1 and 63 characters long (inclusive) - consist of only lower-case ASCII letters, numbers, and dashes - start with a lower-case letter - end with a lower-case letter or number - be unique within the set of Backups in this BackupPlan
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Gkebackup_projects_locations_backupPlans_backups_create(parent: string, backupId: string | null | undefined, requestBody: Backup): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/backups&backupId=' + (backupId == null ? '' : encodeURIComponent(backupId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists RestorePlans in a given location.
		 * Get v1/{parent}/restorePlans
		 * @param {string} parent Required. The location that contains the RestorePlans to list. Format: `projects/locations/*`
		 * @param {string} filter Optional. Field match expression used to filter the results.
		 * @param {string} orderBy Optional. Field by which to sort the results.
		 * @param {number} pageSize Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried.
		 * @param {string} pageToken Optional. The value of next_page_token received from a previous `ListRestorePlans` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListRestorePlans` must match the call that provided the page token.
		 * @return {ListRestorePlansResponse} Successful response
		 */
		Gkebackup_projects_locations_restorePlans_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListRestorePlansResponse> {
			return this.http.get<ListRestorePlansResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/restorePlans&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new RestorePlan in a given location.
		 * Post v1/{parent}/restorePlans
		 * @param {string} parent Required. The location within which to create the RestorePlan. Format: `projects/locations/*`
		 * @param {string} restorePlanId Required. The client-provided short name for the RestorePlan resource. This name must: - be between 1 and 63 characters long (inclusive) - consist of only lower-case ASCII letters, numbers, and dashes - start with a lower-case letter - end with a lower-case letter or number - be unique within the set of RestorePlans in this location
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Gkebackup_projects_locations_restorePlans_create(parent: string, restorePlanId: string | null | undefined, requestBody: RestorePlan): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/restorePlans&restorePlanId=' + (restorePlanId == null ? '' : encodeURIComponent(restorePlanId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Restores for a given RestorePlan.
		 * Get v1/{parent}/restores
		 * @param {string} parent Required. The RestorePlan that contains the Restores to list. Format: `projects/locations/restorePlans/*`
		 * @param {string} filter Optional. Field match expression used to filter the results.
		 * @param {string} orderBy Optional. Field by which to sort the results.
		 * @param {number} pageSize Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried.
		 * @param {string} pageToken Optional. The value of next_page_token received from a previous `ListRestores` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListRestores` must match the call that provided the page token.
		 * @return {ListRestoresResponse} Successful response
		 */
		Gkebackup_projects_locations_restorePlans_restores_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListRestoresResponse> {
			return this.http.get<ListRestoresResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/restores&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Restore for the given RestorePlan.
		 * Post v1/{parent}/restores
		 * @param {string} parent Required. The RestorePlan within which to create the Restore. Format: `projects/locations/restorePlans/*`
		 * @param {string} restoreId Required. The client-provided short name for the Restore resource. This name must: - be between 1 and 63 characters long (inclusive) - consist of only lower-case ASCII letters, numbers, and dashes - start with a lower-case letter - end with a lower-case letter or number - be unique within the set of Restores in this RestorePlan.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Gkebackup_projects_locations_restorePlans_restores_create(parent: string, restoreId: string | null | undefined, requestBody: Restore): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/restores&restoreId=' + (restoreId == null ? '' : encodeURIComponent(restoreId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the VolumeBackups for a given Backup.
		 * Get v1/{parent}/volumeBackups
		 * @param {string} parent Required. The Backup that contains the VolumeBackups to list. Format: `projects/locations/backupPlans/backups/*`
		 * @param {string} filter Optional. Field match expression used to filter the results.
		 * @param {string} orderBy Optional. Field by which to sort the results.
		 * @param {number} pageSize Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried.
		 * @param {string} pageToken Optional. The value of next_page_token received from a previous `ListVolumeBackups` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListVolumeBackups` must match the call that provided the page token.
		 * @return {ListVolumeBackupsResponse} Successful response
		 */
		Gkebackup_projects_locations_backupPlans_backups_volumeBackups_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListVolumeBackupsResponse> {
			return this.http.get<ListVolumeBackupsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/volumeBackups&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists the VolumeRestores for a given Restore.
		 * Get v1/{parent}/volumeRestores
		 * @param {string} parent Required. The Restore that contains the VolumeRestores to list. Format: `projects/locations/restorePlans/restores/*`
		 * @param {string} filter Optional. Field match expression used to filter the results.
		 * @param {string} orderBy Optional. Field by which to sort the results.
		 * @param {number} pageSize Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried.
		 * @param {string} pageToken Optional. The value of next_page_token received from a previous `ListVolumeRestores` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListVolumeRestores` must match the call that provided the page token.
		 * @return {ListVolumeRestoresResponse} Successful response
		 */
		Gkebackup_projects_locations_restorePlans_restores_volumeRestores_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListVolumeRestoresResponse> {
			return this.http.get<ListVolumeRestoresResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/volumeRestores&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {Policy} Successful response
		 */
		Gkebackup_projects_locations_restorePlans_restores_volumeRestores_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Gkebackup_projects_locations_restorePlans_restores_volumeRestores_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Gkebackup_projects_locations_restorePlans_restores_volumeRestores_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

