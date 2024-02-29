import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** AuthorizedNetwork contains metadata for an authorized network. */
	export interface AuthorizedNetwork {

		/** CIDR range for one authorzied network of the instance. */
		cidrRange?: string | null;
	}

	/** AuthorizedNetwork contains metadata for an authorized network. */
	export interface AuthorizedNetworkFormProperties {

		/** CIDR range for one authorzied network of the instance. */
		cidrRange: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizedNetworkFormGroup() {
		return new FormGroup<AuthorizedNetworkFormProperties>({
			cidrRange: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message describing the user-specified automated backup policy. All fields in the automated backup policy are optional. Defaults for each field are provided if they are not set. */
	export interface AutomatedBackupPolicy {

		/** The length of the time window during which a backup can be taken. If a backup does not succeed within this time window, it will be canceled and considered failed. The backup window must be at least 5 minutes long. There is no upper bound on the window. If not set, it defaults to 1 hour. */
		backupWindow?: string | null;

		/** Whether automated automated backups are enabled. If not set, defaults to true. */
		enabled?: boolean | null;

		/** EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key). */
		encryptionConfig?: EncryptionConfig;

		/** Labels to apply to backups created using this configuration. */
		labels?: {[id: string]: string };

		/** The location where the backup will be stored. Currently, the only supported option is to store the backup in the same region as the cluster. If empty, defaults to the region of the cluster. */
		location?: string | null;

		/** A quantity based policy specifies that a certain number of the most recent successful backups should be retained. */
		quantityBasedRetention?: QuantityBasedRetention;

		/** A time based retention policy specifies that all backups within a certain time period should be retained. */
		timeBasedRetention?: TimeBasedRetention;

		/** A weekly schedule starts a backup at prescribed start times within a day, for the specified days of the week. The weekly schedule message is flexible and can be used to create many types of schedules. For example, to have a daily backup that starts at 22:00, configure the `start_times` field to have one element "22:00" and the `days_of_week` field to have all seven days of the week. */
		weeklySchedule?: WeeklySchedule;
	}

	/** Message describing the user-specified automated backup policy. All fields in the automated backup policy are optional. Defaults for each field are provided if they are not set. */
	export interface AutomatedBackupPolicyFormProperties {

		/** The length of the time window during which a backup can be taken. If a backup does not succeed within this time window, it will be canceled and considered failed. The backup window must be at least 5 minutes long. There is no upper bound on the window. If not set, it defaults to 1 hour. */
		backupWindow: FormControl<string | null | undefined>,

		/** Whether automated automated backups are enabled. If not set, defaults to true. */
		enabled: FormControl<boolean | null | undefined>,

		/** Labels to apply to backups created using this configuration. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The location where the backup will be stored. Currently, the only supported option is to store the backup in the same region as the cluster. If empty, defaults to the region of the cluster. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateAutomatedBackupPolicyFormGroup() {
		return new FormGroup<AutomatedBackupPolicyFormProperties>({
			backupWindow: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key). */
	export interface EncryptionConfig {

		/** The fully-qualified resource name of the KMS key. Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME] */
		kmsKeyName?: string | null;
	}

	/** EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key). */
	export interface EncryptionConfigFormProperties {

		/** The fully-qualified resource name of the KMS key. Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME] */
		kmsKeyName: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionConfigFormGroup() {
		return new FormGroup<EncryptionConfigFormProperties>({
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A quantity based policy specifies that a certain number of the most recent successful backups should be retained. */
	export interface QuantityBasedRetention {

		/**
		 * The number of backups to retain.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;
	}

	/** A quantity based policy specifies that a certain number of the most recent successful backups should be retained. */
	export interface QuantityBasedRetentionFormProperties {

		/**
		 * The number of backups to retain.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
	}
	export function CreateQuantityBasedRetentionFormGroup() {
		return new FormGroup<QuantityBasedRetentionFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A time based retention policy specifies that all backups within a certain time period should be retained. */
	export interface TimeBasedRetention {

		/** The retention period. */
		retentionPeriod?: string | null;
	}

	/** A time based retention policy specifies that all backups within a certain time period should be retained. */
	export interface TimeBasedRetentionFormProperties {

		/** The retention period. */
		retentionPeriod: FormControl<string | null | undefined>,
	}
	export function CreateTimeBasedRetentionFormGroup() {
		return new FormGroup<TimeBasedRetentionFormProperties>({
			retentionPeriod: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A weekly schedule starts a backup at prescribed start times within a day, for the specified days of the week. The weekly schedule message is flexible and can be used to create many types of schedules. For example, to have a daily backup that starts at 22:00, configure the `start_times` field to have one element "22:00" and the `days_of_week` field to have all seven days of the week. */
	export interface WeeklySchedule {

		/** The days of the week to perform a backup. If this field is left empty, the default of every day of the week is used. */
		daysOfWeek?: Array<string>;

		/** The times during the day to start a backup. The start times are assumed to be in UTC and to be an exact hour (e.g., 04:00:00). If no start times are provided, a single fixed start time is chosen arbitrarily. */
		startTimes?: Array<GoogleTypeTimeOfDay>;
	}

	/** A weekly schedule starts a backup at prescribed start times within a day, for the specified days of the week. The weekly schedule message is flexible and can be used to create many types of schedules. For example, to have a daily backup that starts at 22:00, configure the `start_times` field to have one element "22:00" and the `days_of_week` field to have all seven days of the week. */
	export interface WeeklyScheduleFormProperties {
	}
	export function CreateWeeklyScheduleFormGroup() {
		return new FormGroup<WeeklyScheduleFormProperties>({
		});

	}


	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface GoogleTypeTimeOfDay {

		/**
		 * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		hours?: number | null;

		/**
		 * Minutes of hour of day. Must be from 0 to 59.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minutes?: number | null;

		/**
		 * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nanos?: number | null;

		/**
		 * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds?: number | null;
	}

	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface GoogleTypeTimeOfDayFormProperties {

		/**
		 * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		hours: FormControl<number | null | undefined>,

		/**
		 * Minutes of hour of day. Must be from 0 to 59.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minutes: FormControl<number | null | undefined>,

		/**
		 * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nanos: FormControl<number | null | undefined>,

		/**
		 * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds: FormControl<number | null | undefined>,
	}
	export function CreateGoogleTypeTimeOfDayFormGroup() {
		return new FormGroup<GoogleTypeTimeOfDayFormProperties>({
			hours: new FormControl<number | null | undefined>(undefined),
			minutes: new FormControl<number | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Message describing Backup object */
	export interface Backup {

		/** Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128 */
		annotations?: {[id: string]: string };

		/** Required. The full resource name of the backup source cluster (e.g., projects/{project}/locations/{region}/clusters/{cluster_id}). */
		clusterName?: string | null;

		/** Output only. The system-generated UID of the cluster which was used to create this resource. */
		clusterUid?: string | null;

		/** Output only. Create time stamp */
		createTime?: string | null;

		/** Output only. The database engine major version of the cluster this backup was created from. Any restored cluster created from this backup will have the same database version. */
		databaseVersion?: BackupDatabaseVersion | null;

		/** Output only. Delete time stamp */
		deleteTime?: string | null;

		/** User-provided description of the backup. */
		description?: string | null;

		/** User-settable and human-readable display name for the Backup. */
		displayName?: string | null;

		/** EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key). */
		encryptionConfig?: EncryptionConfig;

		/** EncryptionInfo describes the encryption information of a cluster or a backup. */
		encryptionInfo?: EncryptionInfo;

		/** For Resource freshness validation (https://google.aip.dev/154) */
		etag?: string | null;

		/** A backup's position in a quantity-based retention queue, of backups with the same source cluster and type, with length, retention, specified by the backup's retention policy. Once the position is greater than the retention, the backup is eligible to be garbage collected. Example: 5 backups from the same source cluster and type with a quantity-based retention of 3 and denoted by backup_id (position, retention). Safe: backup_5 (1, 3), backup_4, (2, 3), backup_3 (3, 3). Awaiting garbage collection: backup_2 (4, 3), backup_1 (5, 3) */
		expiryQuantity?: QuantityBasedExpiry;

		/** Output only. The time at which after the backup is eligible to be garbage collected. It is the duration specified by the backup's retention policy, added to the backup's create_time. */
		expiryTime?: string | null;

		/** Labels as key value pairs */
		labels?: {[id: string]: string };

		/** Output only. The name of the backup resource with the format: * projects/{project}/locations/{region}/backups/{backup_id} where the cluster and backup ID segments should satisfy the regex expression `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`, e.g. 1-63 characters of lowercase letters, numbers, and dashes, starting with a letter, and ending with a letter or number. For more details see https://google.aip.dev/122. The prefix of the backup resource name is the name of the parent resource: * projects/{project}/locations/{region} */
		name?: string | null;

		/** Output only. Reconciling (https://google.aip.dev/128#reconciliation), if true, indicates that the service is actively updating the resource. This can happen due to user-triggered updates or system actions like failover or maintenance. */
		reconciling?: boolean | null;

		/** Output only. Reserved for future use. */
		satisfiesPzs?: boolean | null;

		/** Output only. The size of the backup in bytes. */
		sizeBytes?: string | null;

		/** Output only. The current state of the backup. */
		state?: BackupState | null;

		/** The backup type, which suggests the trigger for the backup. */
		type?: BackupType | null;

		/** Output only. The system-generated UID of the resource. The UID is assigned when the resource is created, and it is retained until it is deleted. */
		uid?: string | null;

		/** Output only. Update time stamp */
		updateTime?: string | null;
	}

	/** Message describing Backup object */
	export interface BackupFormProperties {

		/** Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128 */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The full resource name of the backup source cluster (e.g., projects/{project}/locations/{region}/clusters/{cluster_id}). */
		clusterName: FormControl<string | null | undefined>,

		/** Output only. The system-generated UID of the cluster which was used to create this resource. */
		clusterUid: FormControl<string | null | undefined>,

		/** Output only. Create time stamp */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The database engine major version of the cluster this backup was created from. Any restored cluster created from this backup will have the same database version. */
		databaseVersion: FormControl<BackupDatabaseVersion | null | undefined>,

		/** Output only. Delete time stamp */
		deleteTime: FormControl<string | null | undefined>,

		/** User-provided description of the backup. */
		description: FormControl<string | null | undefined>,

		/** User-settable and human-readable display name for the Backup. */
		displayName: FormControl<string | null | undefined>,

		/** For Resource freshness validation (https://google.aip.dev/154) */
		etag: FormControl<string | null | undefined>,

		/** Output only. The time at which after the backup is eligible to be garbage collected. It is the duration specified by the backup's retention policy, added to the backup's create_time. */
		expiryTime: FormControl<string | null | undefined>,

		/** Labels as key value pairs */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The name of the backup resource with the format: * projects/{project}/locations/{region}/backups/{backup_id} where the cluster and backup ID segments should satisfy the regex expression `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`, e.g. 1-63 characters of lowercase letters, numbers, and dashes, starting with a letter, and ending with a letter or number. For more details see https://google.aip.dev/122. The prefix of the backup resource name is the name of the parent resource: * projects/{project}/locations/{region} */
		name: FormControl<string | null | undefined>,

		/** Output only. Reconciling (https://google.aip.dev/128#reconciliation), if true, indicates that the service is actively updating the resource. This can happen due to user-triggered updates or system actions like failover or maintenance. */
		reconciling: FormControl<boolean | null | undefined>,

		/** Output only. Reserved for future use. */
		satisfiesPzs: FormControl<boolean | null | undefined>,

		/** Output only. The size of the backup in bytes. */
		sizeBytes: FormControl<string | null | undefined>,

		/** Output only. The current state of the backup. */
		state: FormControl<BackupState | null | undefined>,

		/** The backup type, which suggests the trigger for the backup. */
		type: FormControl<BackupType | null | undefined>,

		/** Output only. The system-generated UID of the resource. The UID is assigned when the resource is created, and it is retained until it is deleted. */
		uid: FormControl<string | null | undefined>,

		/** Output only. Update time stamp */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateBackupFormGroup() {
		return new FormGroup<BackupFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clusterName: new FormControl<string | null | undefined>(undefined),
			clusterUid: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			databaseVersion: new FormControl<BackupDatabaseVersion | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			expiryTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reconciling: new FormControl<boolean | null | undefined>(undefined),
			satisfiesPzs: new FormControl<boolean | null | undefined>(undefined),
			sizeBytes: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<BackupState | null | undefined>(undefined),
			type: new FormControl<BackupType | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BackupDatabaseVersion { DATABASE_VERSION_UNSPECIFIED = 'DATABASE_VERSION_UNSPECIFIED', POSTGRES_13 = 'POSTGRES_13', POSTGRES_14 = 'POSTGRES_14', POSTGRES_15 = 'POSTGRES_15' }


	/** EncryptionInfo describes the encryption information of a cluster or a backup. */
	export interface EncryptionInfo {

		/** Output only. Type of encryption. */
		encryptionType?: EncryptionInfoEncryptionType | null;

		/** Output only. Cloud KMS key versions that are being used to protect the database or the backup. */
		kmsKeyVersions?: Array<string>;
	}

	/** EncryptionInfo describes the encryption information of a cluster or a backup. */
	export interface EncryptionInfoFormProperties {

		/** Output only. Type of encryption. */
		encryptionType: FormControl<EncryptionInfoEncryptionType | null | undefined>,
	}
	export function CreateEncryptionInfoFormGroup() {
		return new FormGroup<EncryptionInfoFormProperties>({
			encryptionType: new FormControl<EncryptionInfoEncryptionType | null | undefined>(undefined),
		});

	}

	export enum EncryptionInfoEncryptionType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', GOOGLE_DEFAULT_ENCRYPTION = 'GOOGLE_DEFAULT_ENCRYPTION', CUSTOMER_MANAGED_ENCRYPTION = 'CUSTOMER_MANAGED_ENCRYPTION' }


	/** A backup's position in a quantity-based retention queue, of backups with the same source cluster and type, with length, retention, specified by the backup's retention policy. Once the position is greater than the retention, the backup is eligible to be garbage collected. Example: 5 backups from the same source cluster and type with a quantity-based retention of 3 and denoted by backup_id (position, retention). Safe: backup_5 (1, 3), backup_4, (2, 3), backup_3 (3, 3). Awaiting garbage collection: backup_2 (4, 3), backup_1 (5, 3) */
	export interface QuantityBasedExpiry {

		/**
		 * Output only. The backup's position among its backups with the same source cluster and type, by descending chronological order create time(i.e. newest first).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionCount?: number | null;

		/**
		 * Output only. The length of the quantity-based queue, specified by the backup's retention policy.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalRetentionCount?: number | null;
	}

	/** A backup's position in a quantity-based retention queue, of backups with the same source cluster and type, with length, retention, specified by the backup's retention policy. Once the position is greater than the retention, the backup is eligible to be garbage collected. Example: 5 backups from the same source cluster and type with a quantity-based retention of 3 and denoted by backup_id (position, retention). Safe: backup_5 (1, 3), backup_4, (2, 3), backup_3 (3, 3). Awaiting garbage collection: backup_2 (4, 3), backup_1 (5, 3) */
	export interface QuantityBasedExpiryFormProperties {

		/**
		 * Output only. The backup's position among its backups with the same source cluster and type, by descending chronological order create time(i.e. newest first).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionCount: FormControl<number | null | undefined>,

		/**
		 * Output only. The length of the quantity-based queue, specified by the backup's retention policy.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalRetentionCount: FormControl<number | null | undefined>,
	}
	export function CreateQuantityBasedExpiryFormGroup() {
		return new FormGroup<QuantityBasedExpiryFormProperties>({
			retentionCount: new FormControl<number | null | undefined>(undefined),
			totalRetentionCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BackupState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', READY = 'READY', CREATING = 'CREATING', FAILED = 'FAILED', DELETING = 'DELETING' }

	export enum BackupType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', ON_DEMAND = 'ON_DEMAND', AUTOMATED = 'AUTOMATED', CONTINUOUS = 'CONTINUOUS' }


	/** Message describing a BackupSource. */
	export interface BackupSource {

		/** Required. The name of the backup resource with the format: * projects/{project}/locations/{region}/backups/{backup_id} */
		backupName?: string | null;

		/** Output only. The system-generated UID of the backup which was used to create this resource. The UID is generated when the backup is created, and it is retained until the backup is deleted. */
		backupUid?: string | null;
	}

	/** Message describing a BackupSource. */
	export interface BackupSourceFormProperties {

		/** Required. The name of the backup resource with the format: * projects/{project}/locations/{region}/backups/{backup_id} */
		backupName: FormControl<string | null | undefined>,

		/** Output only. The system-generated UID of the backup which was used to create this resource. The UID is generated when the backup is created, and it is retained until the backup is deleted. */
		backupUid: FormControl<string | null | undefined>,
	}
	export function CreateBackupSourceFormGroup() {
		return new FormGroup<BackupSourceFormProperties>({
			backupName: new FormControl<string | null | undefined>(undefined),
			backupUid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Client connection configuration */
	export interface ClientConnectionConfig {

		/** Optional. Configuration to enforce connectors only (ex: AuthProxy) connections to the database. */
		requireConnectors?: boolean | null;

		/** SSL configuration. */
		sslConfig?: SslConfig;
	}

	/** Client connection configuration */
	export interface ClientConnectionConfigFormProperties {

		/** Optional. Configuration to enforce connectors only (ex: AuthProxy) connections to the database. */
		requireConnectors: FormControl<boolean | null | undefined>,
	}
	export function CreateClientConnectionConfigFormGroup() {
		return new FormGroup<ClientConnectionConfigFormProperties>({
			requireConnectors: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** SSL configuration. */
	export interface SslConfig {

		/** Optional. Certificate Authority (CA) source. Only CA_SOURCE_MANAGED is supported currently, and is the default value. */
		caSource?: SslConfigCaSource | null;

		/** Optional. SSL mode. Specifies client-server SSL/TLS connection behavior. */
		sslMode?: SslConfigSslMode | null;
	}

	/** SSL configuration. */
	export interface SslConfigFormProperties {

		/** Optional. Certificate Authority (CA) source. Only CA_SOURCE_MANAGED is supported currently, and is the default value. */
		caSource: FormControl<SslConfigCaSource | null | undefined>,

		/** Optional. SSL mode. Specifies client-server SSL/TLS connection behavior. */
		sslMode: FormControl<SslConfigSslMode | null | undefined>,
	}
	export function CreateSslConfigFormGroup() {
		return new FormGroup<SslConfigFormProperties>({
			caSource: new FormControl<SslConfigCaSource | null | undefined>(undefined),
			sslMode: new FormControl<SslConfigSslMode | null | undefined>(undefined),
		});

	}

	export enum SslConfigCaSource { CA_SOURCE_UNSPECIFIED = 'CA_SOURCE_UNSPECIFIED', CA_SOURCE_MANAGED = 'CA_SOURCE_MANAGED' }

	export enum SslConfigSslMode { SSL_MODE_UNSPECIFIED = 'SSL_MODE_UNSPECIFIED', SSL_MODE_ALLOW = 'SSL_MODE_ALLOW', SSL_MODE_REQUIRE = 'SSL_MODE_REQUIRE', SSL_MODE_VERIFY_CA = 'SSL_MODE_VERIFY_CA', ALLOW_UNENCRYPTED_AND_ENCRYPTED = 'ALLOW_UNENCRYPTED_AND_ENCRYPTED', ENCRYPTED_ONLY = 'ENCRYPTED_ONLY' }


	/** Operation metadata returned by the CLH during resource state reconciliation. */
	export interface CloudControl2SharedOperationsReconciliationOperationMetadata {

		/** DEPRECATED. Use exclusive_action instead. */
		deleteResource?: boolean | null;

		/** Excluisive action returned by the CLH. */
		exclusiveAction?: CloudControl2SharedOperationsReconciliationOperationMetadataExclusiveAction | null;
	}

	/** Operation metadata returned by the CLH during resource state reconciliation. */
	export interface CloudControl2SharedOperationsReconciliationOperationMetadataFormProperties {

		/** DEPRECATED. Use exclusive_action instead. */
		deleteResource: FormControl<boolean | null | undefined>,

		/** Excluisive action returned by the CLH. */
		exclusiveAction: FormControl<CloudControl2SharedOperationsReconciliationOperationMetadataExclusiveAction | null | undefined>,
	}
	export function CreateCloudControl2SharedOperationsReconciliationOperationMetadataFormGroup() {
		return new FormGroup<CloudControl2SharedOperationsReconciliationOperationMetadataFormProperties>({
			deleteResource: new FormControl<boolean | null | undefined>(undefined),
			exclusiveAction: new FormControl<CloudControl2SharedOperationsReconciliationOperationMetadataExclusiveAction | null | undefined>(undefined),
		});

	}

	export enum CloudControl2SharedOperationsReconciliationOperationMetadataExclusiveAction { UNKNOWN_REPAIR_ACTION = 'UNKNOWN_REPAIR_ACTION', DELETE = 'DELETE', RETRY = 'RETRY' }


	/** A cluster is a collection of regional AlloyDB resources. It can include a primary instance and one or more read pool instances. All cluster resources share a storage layer, which scales as needed. */
	export interface Cluster {

		/** Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128 */
		annotations?: {[id: string]: string };

		/** Message describing the user-specified automated backup policy. All fields in the automated backup policy are optional. Defaults for each field are provided if they are not set. */
		automatedBackupPolicy?: AutomatedBackupPolicy;

		/** Message describing a BackupSource. */
		backupSource?: BackupSource;

		/** Output only. The type of the cluster. This is an output-only field and it's populated at the Cluster creation time or the Cluster promotion time. The cluster type is determined by which RPC was used to create the cluster (i.e. `CreateCluster` vs. `CreateSecondaryCluster` */
		clusterType?: ClusterClusterType | null;

		/** ContinuousBackupConfig describes the continuous backups recovery configurations of a cluster. */
		continuousBackupConfig?: ContinuousBackupConfig;

		/** ContinuousBackupInfo describes the continuous backup properties of a cluster. */
		continuousBackupInfo?: ContinuousBackupInfo;

		/** Output only. Create time stamp */
		createTime?: string | null;

		/** Optional. The database engine major version. This is an optional field and it is populated at the Cluster creation time. If a database version is not supplied at cluster creation time, then a default database version will be used. */
		databaseVersion?: BackupDatabaseVersion | null;

		/** Output only. Delete time stamp */
		deleteTime?: string | null;

		/** User-settable and human-readable display name for the Cluster. */
		displayName?: string | null;

		/** EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key). */
		encryptionConfig?: EncryptionConfig;

		/** EncryptionInfo describes the encryption information of a cluster or a backup. */
		encryptionInfo?: EncryptionInfo;

		/** For Resource freshness validation (https://google.aip.dev/154) */
		etag?: string | null;

		/** The username/password for a database user. Used for specifying initial users at cluster creation time. */
		initialUser?: UserPassword;

		/** Labels as key value pairs */
		labels?: {[id: string]: string };

		/** Subset of the source instance configuration that is available when reading the cluster resource. */
		migrationSource?: MigrationSource;

		/** Output only. The name of the cluster resource with the format: * projects/{project}/locations/{region}/clusters/{cluster_id} where the cluster ID segment should satisfy the regex expression `[a-z0-9-]+`. For more details see https://google.aip.dev/122. The prefix of the cluster resource name is the name of the parent resource: * projects/{project}/locations/{region} */
		name?: string | null;

		/** Required. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: "projects/{project}/global/networks/{network_id}". This is required to create a cluster. Deprecated, use network_config.network instead. */
		network?: string | null;

		/** Metadata related to network configuration. */
		networkConfig?: NetworkConfig;

		/** Configuration for the primary cluster. It has the list of clusters that are replicating from this cluster. This should be set if and only if the cluster is of type PRIMARY. */
		primaryConfig?: PrimaryConfig;

		/** Output only. Reconciling (https://google.aip.dev/128#reconciliation). Set to true if the current state of Cluster does not match the user's intended state, and the service is actively updating the resource to reconcile them. This can happen due to user-triggered updates or system actions like failover or maintenance. */
		reconciling?: boolean | null;

		/** Output only. Reserved for future use. */
		satisfiesPzs?: boolean | null;

		/** Configuration information for the secondary cluster. This should be set if and only if the cluster is of type SECONDARY. */
		secondaryConfig?: SecondaryConfig;

		/** SSL configuration. */
		sslConfig?: SslConfig;

		/** Output only. The current serving state of the cluster. */
		state?: ClusterState | null;

		/** Output only. The system-generated UID of the resource. The UID is assigned when the resource is created, and it is retained until it is deleted. */
		uid?: string | null;

		/** Output only. Update time stamp */
		updateTime?: string | null;
	}

	/** A cluster is a collection of regional AlloyDB resources. It can include a primary instance and one or more read pool instances. All cluster resources share a storage layer, which scales as needed. */
	export interface ClusterFormProperties {

		/** Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128 */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The type of the cluster. This is an output-only field and it's populated at the Cluster creation time or the Cluster promotion time. The cluster type is determined by which RPC was used to create the cluster (i.e. `CreateCluster` vs. `CreateSecondaryCluster` */
		clusterType: FormControl<ClusterClusterType | null | undefined>,

		/** Output only. Create time stamp */
		createTime: FormControl<string | null | undefined>,

		/** Optional. The database engine major version. This is an optional field and it is populated at the Cluster creation time. If a database version is not supplied at cluster creation time, then a default database version will be used. */
		databaseVersion: FormControl<BackupDatabaseVersion | null | undefined>,

		/** Output only. Delete time stamp */
		deleteTime: FormControl<string | null | undefined>,

		/** User-settable and human-readable display name for the Cluster. */
		displayName: FormControl<string | null | undefined>,

		/** For Resource freshness validation (https://google.aip.dev/154) */
		etag: FormControl<string | null | undefined>,

		/** Labels as key value pairs */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The name of the cluster resource with the format: * projects/{project}/locations/{region}/clusters/{cluster_id} where the cluster ID segment should satisfy the regex expression `[a-z0-9-]+`. For more details see https://google.aip.dev/122. The prefix of the cluster resource name is the name of the parent resource: * projects/{project}/locations/{region} */
		name: FormControl<string | null | undefined>,

		/** Required. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: "projects/{project}/global/networks/{network_id}". This is required to create a cluster. Deprecated, use network_config.network instead. */
		network: FormControl<string | null | undefined>,

		/** Output only. Reconciling (https://google.aip.dev/128#reconciliation). Set to true if the current state of Cluster does not match the user's intended state, and the service is actively updating the resource to reconcile them. This can happen due to user-triggered updates or system actions like failover or maintenance. */
		reconciling: FormControl<boolean | null | undefined>,

		/** Output only. Reserved for future use. */
		satisfiesPzs: FormControl<boolean | null | undefined>,

		/** Output only. The current serving state of the cluster. */
		state: FormControl<ClusterState | null | undefined>,

		/** Output only. The system-generated UID of the resource. The UID is assigned when the resource is created, and it is retained until it is deleted. */
		uid: FormControl<string | null | undefined>,

		/** Output only. Update time stamp */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateClusterFormGroup() {
		return new FormGroup<ClusterFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clusterType: new FormControl<ClusterClusterType | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			databaseVersion: new FormControl<BackupDatabaseVersion | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			reconciling: new FormControl<boolean | null | undefined>(undefined),
			satisfiesPzs: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<ClusterState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClusterClusterType { CLUSTER_TYPE_UNSPECIFIED = 'CLUSTER_TYPE_UNSPECIFIED', PRIMARY = 'PRIMARY', SECONDARY = 'SECONDARY' }


	/** ContinuousBackupConfig describes the continuous backups recovery configurations of a cluster. */
	export interface ContinuousBackupConfig {

		/** Whether ContinuousBackup is enabled. */
		enabled?: boolean | null;

		/** EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key). */
		encryptionConfig?: EncryptionConfig;

		/**
		 * The number of days that are eligible to restore from using PITR. To support the entire recovery window, backups and logs are retained for one day more than the recovery window. If not set, defaults to 14 days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		recoveryWindowDays?: number | null;
	}

	/** ContinuousBackupConfig describes the continuous backups recovery configurations of a cluster. */
	export interface ContinuousBackupConfigFormProperties {

		/** Whether ContinuousBackup is enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * The number of days that are eligible to restore from using PITR. To support the entire recovery window, backups and logs are retained for one day more than the recovery window. If not set, defaults to 14 days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		recoveryWindowDays: FormControl<number | null | undefined>,
	}
	export function CreateContinuousBackupConfigFormGroup() {
		return new FormGroup<ContinuousBackupConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			recoveryWindowDays: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** ContinuousBackupInfo describes the continuous backup properties of a cluster. */
	export interface ContinuousBackupInfo {

		/** Output only. The earliest restorable time that can be restored to. Output only field. */
		earliestRestorableTime?: string | null;

		/** Output only. When ContinuousBackup was most recently enabled. Set to null if ContinuousBackup is not enabled. */
		enabledTime?: string | null;

		/** EncryptionInfo describes the encryption information of a cluster or a backup. */
		encryptionInfo?: EncryptionInfo;

		/** Output only. Days of the week on which a continuous backup is taken. Output only field. Ignored if passed into the request. */
		schedule?: Array<string>;
	}

	/** ContinuousBackupInfo describes the continuous backup properties of a cluster. */
	export interface ContinuousBackupInfoFormProperties {

		/** Output only. The earliest restorable time that can be restored to. Output only field. */
		earliestRestorableTime: FormControl<string | null | undefined>,

		/** Output only. When ContinuousBackup was most recently enabled. Set to null if ContinuousBackup is not enabled. */
		enabledTime: FormControl<string | null | undefined>,
	}
	export function CreateContinuousBackupInfoFormGroup() {
		return new FormGroup<ContinuousBackupInfoFormProperties>({
			earliestRestorableTime: new FormControl<string | null | undefined>(undefined),
			enabledTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The username/password for a database user. Used for specifying initial users at cluster creation time. */
	export interface UserPassword {

		/** The initial password for the user. */
		password?: string | null;

		/** The database username. */
		user?: string | null;
	}

	/** The username/password for a database user. Used for specifying initial users at cluster creation time. */
	export interface UserPasswordFormProperties {

		/** The initial password for the user. */
		password: FormControl<string | null | undefined>,

		/** The database username. */
		user: FormControl<string | null | undefined>,
	}
	export function CreateUserPasswordFormGroup() {
		return new FormGroup<UserPasswordFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Subset of the source instance configuration that is available when reading the cluster resource. */
	export interface MigrationSource {

		/** Output only. The host and port of the on-premises instance in host:port format */
		hostPort?: string | null;

		/** Output only. Place holder for the external source identifier(e.g DMS job name) that created the cluster. */
		referenceId?: string | null;

		/** Output only. Type of migration source. */
		sourceType?: MigrationSourceSourceType | null;
	}

	/** Subset of the source instance configuration that is available when reading the cluster resource. */
	export interface MigrationSourceFormProperties {

		/** Output only. The host and port of the on-premises instance in host:port format */
		hostPort: FormControl<string | null | undefined>,

		/** Output only. Place holder for the external source identifier(e.g DMS job name) that created the cluster. */
		referenceId: FormControl<string | null | undefined>,

		/** Output only. Type of migration source. */
		sourceType: FormControl<MigrationSourceSourceType | null | undefined>,
	}
	export function CreateMigrationSourceFormGroup() {
		return new FormGroup<MigrationSourceFormProperties>({
			hostPort: new FormControl<string | null | undefined>(undefined),
			referenceId: new FormControl<string | null | undefined>(undefined),
			sourceType: new FormControl<MigrationSourceSourceType | null | undefined>(undefined),
		});

	}

	export enum MigrationSourceSourceType { MIGRATION_SOURCE_TYPE_UNSPECIFIED = 'MIGRATION_SOURCE_TYPE_UNSPECIFIED', DMS = 'DMS' }


	/** Metadata related to network configuration. */
	export interface NetworkConfig {

		/** Optional. Name of the allocated IP range for the private IP AlloyDB cluster, for example: "google-managed-services-default". If set, the instance IPs for this cluster will be created in the allocated range. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?`. Field name is intended to be consistent with Cloud SQL. */
		allocatedIpRange?: string | null;

		/** Optional. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: "projects/{project_number}/global/networks/{network_id}". This is required to create a cluster. */
		network?: string | null;
	}

	/** Metadata related to network configuration. */
	export interface NetworkConfigFormProperties {

		/** Optional. Name of the allocated IP range for the private IP AlloyDB cluster, for example: "google-managed-services-default". If set, the instance IPs for this cluster will be created in the allocated range. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?`. Field name is intended to be consistent with Cloud SQL. */
		allocatedIpRange: FormControl<string | null | undefined>,

		/** Optional. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: "projects/{project_number}/global/networks/{network_id}". This is required to create a cluster. */
		network: FormControl<string | null | undefined>,
	}
	export function CreateNetworkConfigFormGroup() {
		return new FormGroup<NetworkConfigFormProperties>({
			allocatedIpRange: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for the primary cluster. It has the list of clusters that are replicating from this cluster. This should be set if and only if the cluster is of type PRIMARY. */
	export interface PrimaryConfig {

		/** Output only. Names of the clusters that are replicating from this cluster. */
		secondaryClusterNames?: Array<string>;
	}

	/** Configuration for the primary cluster. It has the list of clusters that are replicating from this cluster. This should be set if and only if the cluster is of type PRIMARY. */
	export interface PrimaryConfigFormProperties {
	}
	export function CreatePrimaryConfigFormGroup() {
		return new FormGroup<PrimaryConfigFormProperties>({
		});

	}


	/** Configuration information for the secondary cluster. This should be set if and only if the cluster is of type SECONDARY. */
	export interface SecondaryConfig {

		/** The name of the primary cluster name with the format: * projects/{project}/locations/{region}/clusters/{cluster_id} */
		primaryClusterName?: string | null;
	}

	/** Configuration information for the secondary cluster. This should be set if and only if the cluster is of type SECONDARY. */
	export interface SecondaryConfigFormProperties {

		/** The name of the primary cluster name with the format: * projects/{project}/locations/{region}/clusters/{cluster_id} */
		primaryClusterName: FormControl<string | null | undefined>,
	}
	export function CreateSecondaryConfigFormGroup() {
		return new FormGroup<SecondaryConfigFormProperties>({
			primaryClusterName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClusterState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', READY = 'READY', STOPPED = 'STOPPED', EMPTY = 'EMPTY', CREATING = 'CREATING', DELETING = 'DELETING', FAILED = 'FAILED', BOOTSTRAPPING = 'BOOTSTRAPPING', MAINTENANCE = 'MAINTENANCE', PROMOTING = 'PROMOTING' }


	/** ConnectionInfo singleton resource. https://google.aip.dev/156 */
	export interface ConnectionInfo {

		/** Output only. The unique ID of the Instance. */
		instanceUid?: string | null;

		/** Output only. The private network IP address for the Instance. This is the default IP for the instance and is always created (even if enable_public_ip is set). This is the connection endpoint for an end-user application. */
		ipAddress?: string | null;

		/** The name of the ConnectionInfo singleton resource, e.g.: projects/{project}/locations/{location}/clusters/instances/connectionInfo This field currently has no semantic meaning. */
		name?: string | null;

		/** Output only. The pem-encoded chain that may be used to verify the X.509 certificate. Expected to be in issuer-to-root order according to RFC 5246. */
		pemCertificateChain?: Array<string>;

		/** Output only. The public IP addresses for the Instance. This is available ONLY when enable_public_ip is set. This is the connection endpoint for an end-user application. */
		publicIpAddress?: string | null;
	}

	/** ConnectionInfo singleton resource. https://google.aip.dev/156 */
	export interface ConnectionInfoFormProperties {

		/** Output only. The unique ID of the Instance. */
		instanceUid: FormControl<string | null | undefined>,

		/** Output only. The private network IP address for the Instance. This is the default IP for the instance and is always created (even if enable_public_ip is set). This is the connection endpoint for an end-user application. */
		ipAddress: FormControl<string | null | undefined>,

		/** The name of the ConnectionInfo singleton resource, e.g.: projects/{project}/locations/{location}/clusters/instances/connectionInfo This field currently has no semantic meaning. */
		name: FormControl<string | null | undefined>,

		/** Output only. The public IP addresses for the Instance. This is available ONLY when enable_public_ip is set. This is the connection endpoint for an end-user application. */
		publicIpAddress: FormControl<string | null | undefined>,
	}
	export function CreateConnectionInfoFormGroup() {
		return new FormGroup<ConnectionInfoFormProperties>({
			instanceUid: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			publicIpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message describing a ContinuousBackupSource. */
	export interface ContinuousBackupSource {

		/** Required. The source cluster from which to restore. This cluster must have continuous backup enabled for this operation to succeed. For the required format, see the comment on the Cluster.name field. */
		cluster?: string | null;

		/** Required. The point in time to restore to. */
		pointInTime?: string | null;
	}

	/** Message describing a ContinuousBackupSource. */
	export interface ContinuousBackupSourceFormProperties {

		/** Required. The source cluster from which to restore. This cluster must have continuous backup enabled for this operation to succeed. For the required format, see the comment on the Cluster.name field. */
		cluster: FormControl<string | null | undefined>,

		/** Required. The point in time to restore to. */
		pointInTime: FormControl<string | null | undefined>,
	}
	export function CreateContinuousBackupSourceFormGroup() {
		return new FormGroup<ContinuousBackupSourceFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			pointInTime: new FormControl<string | null | undefined>(undefined),
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


	/** Message for triggering failover on an Instance */
	export interface FailoverInstanceRequest {

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;

		/** Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the failover. */
		validateOnly?: boolean | null;
	}

	/** Message for triggering failover on an Instance */
	export interface FailoverInstanceRequestFormProperties {

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,

		/** Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the failover. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateFailoverInstanceRequestFormGroup() {
		return new FormGroup<FailoverInstanceRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Message for requests to generate a client certificate signed by the Cluster CA. */
	export interface GenerateClientCertificateRequest {

		/** Optional. An optional hint to the endpoint to generate the client certificate with the requested duration. The duration can be from 1 hour to 24 hours. The endpoint may or may not honor the hint. If the hint is left unspecified or is not honored, then the endpoint will pick an appropriate default duration. */
		certDuration?: string | null;

		/** Optional. A pem-encoded X.509 certificate signing request (CSR). It is recommended to use public_key instead. */
		pemCsr?: string | null;

		/** Optional. The public key from the client. */
		publicKey?: string | null;

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;

		/** Optional. An optional hint to the endpoint to generate a client ceritificate that can be used by AlloyDB connectors to exchange additional metadata with the server after TLS handshake. */
		useMetadataExchange?: boolean | null;
	}

	/** Message for requests to generate a client certificate signed by the Cluster CA. */
	export interface GenerateClientCertificateRequestFormProperties {

		/** Optional. An optional hint to the endpoint to generate the client certificate with the requested duration. The duration can be from 1 hour to 24 hours. The endpoint may or may not honor the hint. If the hint is left unspecified or is not honored, then the endpoint will pick an appropriate default duration. */
		certDuration: FormControl<string | null | undefined>,

		/** Optional. A pem-encoded X.509 certificate signing request (CSR). It is recommended to use public_key instead. */
		pemCsr: FormControl<string | null | undefined>,

		/** Optional. The public key from the client. */
		publicKey: FormControl<string | null | undefined>,

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,

		/** Optional. An optional hint to the endpoint to generate a client ceritificate that can be used by AlloyDB connectors to exchange additional metadata with the server after TLS handshake. */
		useMetadataExchange: FormControl<boolean | null | undefined>,
	}
	export function CreateGenerateClientCertificateRequestFormGroup() {
		return new FormGroup<GenerateClientCertificateRequestFormProperties>({
			certDuration: new FormControl<string | null | undefined>(undefined),
			pemCsr: new FormControl<string | null | undefined>(undefined),
			publicKey: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			useMetadataExchange: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Message returned by a GenerateClientCertificate operation. */
	export interface GenerateClientCertificateResponse {

		/** Optional. The pem-encoded cluster ca X.509 certificate. */
		caCert?: string | null;

		/** Output only. The pem-encoded, signed X.509 certificate. */
		pemCertificate?: string | null;

		/** Output only. The pem-encoded chain that may be used to verify the X.509 certificate. Expected to be in issuer-to-root order according to RFC 5246. */
		pemCertificateChain?: Array<string>;
	}

	/** Message returned by a GenerateClientCertificate operation. */
	export interface GenerateClientCertificateResponseFormProperties {

		/** Optional. The pem-encoded cluster ca X.509 certificate. */
		caCert: FormControl<string | null | undefined>,

		/** Output only. The pem-encoded, signed X.509 certificate. */
		pemCertificate: FormControl<string | null | undefined>,
	}
	export function CreateGenerateClientCertificateResponseFormGroup() {
		return new FormGroup<GenerateClientCertificateResponseFormProperties>({
			caCert: new FormControl<string | null | undefined>(undefined),
			pemCertificate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Locations.ListLocations. */
	export interface GoogleCloudLocationListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<GoogleCloudLocationLocation>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for Locations.ListLocations. */
	export interface GoogleCloudLocationListLocationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudLocationListLocationsResponseFormGroup() {
		return new FormGroup<GoogleCloudLocationListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents a Google Cloud location. */
	export interface GoogleCloudLocationLocation {

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
	export interface GoogleCloudLocationLocationFormProperties {

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
	export function CreateGoogleCloudLocationLocationFormGroup() {
		return new FormGroup<GoogleCloudLocationLocationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for triggering fault injection on an instance */
	export interface InjectFaultRequest {

		/** Required. The type of fault to be injected in an instance. */
		faultType?: InjectFaultRequestFaultType | null;

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;

		/** Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the fault injection. */
		validateOnly?: boolean | null;
	}

	/** Message for triggering fault injection on an instance */
	export interface InjectFaultRequestFormProperties {

		/** Required. The type of fault to be injected in an instance. */
		faultType: FormControl<InjectFaultRequestFaultType | null | undefined>,

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,

		/** Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the fault injection. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateInjectFaultRequestFormGroup() {
		return new FormGroup<InjectFaultRequestFormProperties>({
			faultType: new FormControl<InjectFaultRequestFaultType | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum InjectFaultRequestFaultType { FAULT_TYPE_UNSPECIFIED = 'FAULT_TYPE_UNSPECIFIED', STOP_VM = 'STOP_VM' }


	/** An Instance is a computing unit that an end customer can connect to. It's the main unit of computing resources in AlloyDB. */
	export interface Instance {

		/** Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128 */
		annotations?: {[id: string]: string };

		/** Availability type of an Instance. If empty, defaults to REGIONAL for primary instances. For read pools, availability_type is always UNSPECIFIED. Instances in the read pools are evenly distributed across available zones within the region (i.e. read pools with more than one node will have a node in at least two zones). */
		availabilityType?: InstanceAvailabilityType | null;

		/** Client connection configuration */
		clientConnectionConfig?: ClientConnectionConfig;

		/** Output only. Create time stamp */
		createTime?: string | null;

		/** Database flags. Set at instance level. * They are copied from primary instance on read instance creation. * Read instances can set new or override existing flags that are relevant for reads, e.g. for enabling columnar cache on a read instance. Flags set on read instance may or may not be present on primary. This is a list of "key": "value" pairs. "key": The name of the flag. These flags are passed at instance setup time, so include both server options and system variables for Postgres. Flags are specified with underscores, not hyphens. "value": The value of the flag. Booleans are set to **on** for true and **off** for false. This field must be omitted if the flag doesn't take a value. */
		databaseFlags?: {[id: string]: string };

		/** Output only. Delete time stamp */
		deleteTime?: string | null;

		/** User-settable and human-readable display name for the Instance. */
		displayName?: string | null;

		/** For Resource freshness validation (https://google.aip.dev/154) */
		etag?: string | null;

		/** The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity. */
		gceZone?: string | null;

		/** Required. The type of the instance. Specified at creation time. */
		instanceType?: InstanceInstanceType | null;

		/** Output only. The IP address for the Instance. This is the connection endpoint for an end-user application. */
		ipAddress?: string | null;

		/** Labels as key value pairs */
		labels?: {[id: string]: string };

		/** MachineConfig describes the configuration of a machine. */
		machineConfig?: MachineConfig;

		/** Output only. The name of the instance resource with the format: * projects/{project}/locations/{region}/clusters/{cluster_id}/instances/{instance_id} where the cluster and instance ID segments should satisfy the regex expression `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`, e.g. 1-63 characters of lowercase letters, numbers, and dashes, starting with a letter, and ending with a letter or number. For more details see https://google.aip.dev/122. The prefix of the instance resource name is the name of the parent resource: * projects/{project}/locations/{region}/clusters/{cluster_id} */
		name?: string | null;

		/** Metadata related to instance level network configuration. */
		networkConfig?: InstanceNetworkConfig;

		/** Output only. List of available read-only VMs in this instance, including the standby for a PRIMARY instance. */
		nodes?: Array<Node>;

		/** QueryInsights Instance specific configuration. */
		queryInsightsConfig?: QueryInsightsInstanceConfig;

		/** Configuration for a read pool instance. */
		readPoolConfig?: ReadPoolConfig;

		/** Output only. Reconciling (https://google.aip.dev/128#reconciliation). Set to true if the current state of Instance does not match the user's intended state, and the service is actively updating the resource to reconcile them. This can happen due to user-triggered updates or system actions like failover or maintenance. */
		reconciling?: boolean | null;

		/** Output only. Reserved for future use. */
		satisfiesPzs?: boolean | null;

		/** Output only. The current serving state of the instance. */
		state?: InstanceState | null;

		/** Output only. The system-generated UID of the resource. The UID is assigned when the resource is created, and it is retained until it is deleted. */
		uid?: string | null;

		/** Policy to be used while updating the instance. */
		updatePolicy?: UpdatePolicy;

		/** Output only. Update time stamp */
		updateTime?: string | null;

		/** Details of a single node in the instance. Nodes in an AlloyDB instance are ephemereal, they can change during update, failover, autohealing and resize operations. */
		writableNode?: Node;
	}

	/** An Instance is a computing unit that an end customer can connect to. It's the main unit of computing resources in AlloyDB. */
	export interface InstanceFormProperties {

		/** Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128 */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Availability type of an Instance. If empty, defaults to REGIONAL for primary instances. For read pools, availability_type is always UNSPECIFIED. Instances in the read pools are evenly distributed across available zones within the region (i.e. read pools with more than one node will have a node in at least two zones). */
		availabilityType: FormControl<InstanceAvailabilityType | null | undefined>,

		/** Output only. Create time stamp */
		createTime: FormControl<string | null | undefined>,

		/** Database flags. Set at instance level. * They are copied from primary instance on read instance creation. * Read instances can set new or override existing flags that are relevant for reads, e.g. for enabling columnar cache on a read instance. Flags set on read instance may or may not be present on primary. This is a list of "key": "value" pairs. "key": The name of the flag. These flags are passed at instance setup time, so include both server options and system variables for Postgres. Flags are specified with underscores, not hyphens. "value": The value of the flag. Booleans are set to **on** for true and **off** for false. This field must be omitted if the flag doesn't take a value. */
		databaseFlags: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Delete time stamp */
		deleteTime: FormControl<string | null | undefined>,

		/** User-settable and human-readable display name for the Instance. */
		displayName: FormControl<string | null | undefined>,

		/** For Resource freshness validation (https://google.aip.dev/154) */
		etag: FormControl<string | null | undefined>,

		/** The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity. */
		gceZone: FormControl<string | null | undefined>,

		/** Required. The type of the instance. Specified at creation time. */
		instanceType: FormControl<InstanceInstanceType | null | undefined>,

		/** Output only. The IP address for the Instance. This is the connection endpoint for an end-user application. */
		ipAddress: FormControl<string | null | undefined>,

		/** Labels as key value pairs */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The name of the instance resource with the format: * projects/{project}/locations/{region}/clusters/{cluster_id}/instances/{instance_id} where the cluster and instance ID segments should satisfy the regex expression `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`, e.g. 1-63 characters of lowercase letters, numbers, and dashes, starting with a letter, and ending with a letter or number. For more details see https://google.aip.dev/122. The prefix of the instance resource name is the name of the parent resource: * projects/{project}/locations/{region}/clusters/{cluster_id} */
		name: FormControl<string | null | undefined>,

		/** Output only. Reconciling (https://google.aip.dev/128#reconciliation). Set to true if the current state of Instance does not match the user's intended state, and the service is actively updating the resource to reconcile them. This can happen due to user-triggered updates or system actions like failover or maintenance. */
		reconciling: FormControl<boolean | null | undefined>,

		/** Output only. Reserved for future use. */
		satisfiesPzs: FormControl<boolean | null | undefined>,

		/** Output only. The current serving state of the instance. */
		state: FormControl<InstanceState | null | undefined>,

		/** Output only. The system-generated UID of the resource. The UID is assigned when the resource is created, and it is retained until it is deleted. */
		uid: FormControl<string | null | undefined>,

		/** Output only. Update time stamp */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			availabilityType: new FormControl<InstanceAvailabilityType | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			databaseFlags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			gceZone: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<InstanceInstanceType | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reconciling: new FormControl<boolean | null | undefined>(undefined),
			satisfiesPzs: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<InstanceState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InstanceAvailabilityType { AVAILABILITY_TYPE_UNSPECIFIED = 'AVAILABILITY_TYPE_UNSPECIFIED', ZONAL = 'ZONAL', REGIONAL = 'REGIONAL' }

	export enum InstanceInstanceType { INSTANCE_TYPE_UNSPECIFIED = 'INSTANCE_TYPE_UNSPECIFIED', PRIMARY = 'PRIMARY', READ_POOL = 'READ_POOL', SECONDARY = 'SECONDARY' }


	/** MachineConfig describes the configuration of a machine. */
	export interface MachineConfig {

		/**
		 * The number of CPU's in the VM instance.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cpuCount?: number | null;
	}

	/** MachineConfig describes the configuration of a machine. */
	export interface MachineConfigFormProperties {

		/**
		 * The number of CPU's in the VM instance.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cpuCount: FormControl<number | null | undefined>,
	}
	export function CreateMachineConfigFormGroup() {
		return new FormGroup<MachineConfigFormProperties>({
			cpuCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Metadata related to instance level network configuration. */
	export interface InstanceNetworkConfig {

		/** Optional. A list of external network authorized to access this instance. */
		authorizedExternalNetworks?: Array<AuthorizedNetwork>;

		/** Optional. Enabling public ip for the instance. */
		enablePublicIp?: boolean | null;
	}

	/** Metadata related to instance level network configuration. */
	export interface InstanceNetworkConfigFormProperties {

		/** Optional. Enabling public ip for the instance. */
		enablePublicIp: FormControl<boolean | null | undefined>,
	}
	export function CreateInstanceNetworkConfigFormGroup() {
		return new FormGroup<InstanceNetworkConfigFormProperties>({
			enablePublicIp: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Details of a single node in the instance. Nodes in an AlloyDB instance are ephemereal, they can change during update, failover, autohealing and resize operations. */
	export interface Node {

		/** The identifier of the VM e.g. "test-read-0601-407e52be-ms3l". */
		id?: string | null;

		/** The private IP address of the VM e.g. "10.57.0.34". */
		ip?: string | null;

		/** Determined by state of the compute VM and postgres-service health. Compute VM state can have values listed in https://cloud.google.com/compute/docs/instances/instance-life-cycle and postgres-service health can have values: HEALTHY and UNHEALTHY. */
		state?: string | null;

		/** The Compute Engine zone of the VM e.g. "us-central1-b". */
		zoneId?: string | null;
	}

	/** Details of a single node in the instance. Nodes in an AlloyDB instance are ephemereal, they can change during update, failover, autohealing and resize operations. */
	export interface NodeFormProperties {

		/** The identifier of the VM e.g. "test-read-0601-407e52be-ms3l". */
		id: FormControl<string | null | undefined>,

		/** The private IP address of the VM e.g. "10.57.0.34". */
		ip: FormControl<string | null | undefined>,

		/** Determined by state of the compute VM and postgres-service health. Compute VM state can have values listed in https://cloud.google.com/compute/docs/instances/instance-life-cycle and postgres-service health can have values: HEALTHY and UNHEALTHY. */
		state: FormControl<string | null | undefined>,

		/** The Compute Engine zone of the VM e.g. "us-central1-b". */
		zoneId: FormControl<string | null | undefined>,
	}
	export function CreateNodeFormGroup() {
		return new FormGroup<NodeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			zoneId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** QueryInsights Instance specific configuration. */
	export interface QueryInsightsInstanceConfig {

		/**
		 * Number of query execution plans captured by Insights per minute for all queries combined. The default value is 5. Any integer between 0 and 20 is considered valid.
		 * Type: uint, 0 to 4,294,967,295
		 */
		queryPlansPerMinute?: number | null;

		/**
		 * Query string length. The default value is 1024. Any integer between 256 and 4500 is considered valid.
		 * Type: uint, 0 to 4,294,967,295
		 */
		queryStringLength?: number | null;

		/** Record application tags for an instance. This flag is turned "on" by default. */
		recordApplicationTags?: boolean | null;

		/** Record client address for an instance. Client address is PII information. This flag is turned "on" by default. */
		recordClientAddress?: boolean | null;
	}

	/** QueryInsights Instance specific configuration. */
	export interface QueryInsightsInstanceConfigFormProperties {

		/**
		 * Number of query execution plans captured by Insights per minute for all queries combined. The default value is 5. Any integer between 0 and 20 is considered valid.
		 * Type: uint, 0 to 4,294,967,295
		 */
		queryPlansPerMinute: FormControl<number | null | undefined>,

		/**
		 * Query string length. The default value is 1024. Any integer between 256 and 4500 is considered valid.
		 * Type: uint, 0 to 4,294,967,295
		 */
		queryStringLength: FormControl<number | null | undefined>,

		/** Record application tags for an instance. This flag is turned "on" by default. */
		recordApplicationTags: FormControl<boolean | null | undefined>,

		/** Record client address for an instance. Client address is PII information. This flag is turned "on" by default. */
		recordClientAddress: FormControl<boolean | null | undefined>,
	}
	export function CreateQueryInsightsInstanceConfigFormGroup() {
		return new FormGroup<QueryInsightsInstanceConfigFormProperties>({
			queryPlansPerMinute: new FormControl<number | null | undefined>(undefined),
			queryStringLength: new FormControl<number | null | undefined>(undefined),
			recordApplicationTags: new FormControl<boolean | null | undefined>(undefined),
			recordClientAddress: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for a read pool instance. */
	export interface ReadPoolConfig {

		/**
		 * Read capacity, i.e. number of nodes in a read pool instance.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nodeCount?: number | null;
	}

	/** Configuration for a read pool instance. */
	export interface ReadPoolConfigFormProperties {

		/**
		 * Read capacity, i.e. number of nodes in a read pool instance.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nodeCount: FormControl<number | null | undefined>,
	}
	export function CreateReadPoolConfigFormGroup() {
		return new FormGroup<ReadPoolConfigFormProperties>({
			nodeCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum InstanceState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', READY = 'READY', STOPPED = 'STOPPED', CREATING = 'CREATING', DELETING = 'DELETING', MAINTENANCE = 'MAINTENANCE', FAILED = 'FAILED', BOOTSTRAPPING = 'BOOTSTRAPPING', PROMOTING = 'PROMOTING' }


	/** Policy to be used while updating the instance. */
	export interface UpdatePolicy {

		/** Mode for updating the instance. */
		mode?: UpdatePolicyMode | null;
	}

	/** Policy to be used while updating the instance. */
	export interface UpdatePolicyFormProperties {

		/** Mode for updating the instance. */
		mode: FormControl<UpdatePolicyMode | null | undefined>,
	}
	export function CreateUpdatePolicyFormGroup() {
		return new FormGroup<UpdatePolicyFormProperties>({
			mode: new FormControl<UpdatePolicyMode | null | undefined>(undefined),
		});

	}

	export enum UpdatePolicyMode { MODE_UNSPECIFIED = 'MODE_UNSPECIFIED', DEFAULT = 'DEFAULT', FORCE_APPLY = 'FORCE_APPLY' }


	/** Restrictions on INTEGER type values. */
	export interface IntegerRestrictions {

		/** The maximum value that can be specified, if applicable. */
		maxValue?: string | null;

		/** The minimum value that can be specified, if applicable. */
		minValue?: string | null;
	}

	/** Restrictions on INTEGER type values. */
	export interface IntegerRestrictionsFormProperties {

		/** The maximum value that can be specified, if applicable. */
		maxValue: FormControl<string | null | undefined>,

		/** The minimum value that can be specified, if applicable. */
		minValue: FormControl<string | null | undefined>,
	}
	export function CreateIntegerRestrictionsFormGroup() {
		return new FormGroup<IntegerRestrictionsFormProperties>({
			maxValue: new FormControl<string | null | undefined>(undefined),
			minValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for response to listing Backups */
	export interface ListBackupsResponse {

		/** The list of Backup */
		backups?: Array<Backup>;

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Message for response to listing Backups */
	export interface ListBackupsResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBackupsResponseFormGroup() {
		return new FormGroup<ListBackupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for response to listing Clusters */
	export interface ListClustersResponse {

		/** The list of Cluster */
		clusters?: Array<Cluster>;

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Message for response to listing Clusters */
	export interface ListClustersResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListClustersResponseFormGroup() {
		return new FormGroup<ListClustersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for response to listing Instances */
	export interface ListInstancesResponse {

		/** The list of Instance */
		instances?: Array<Instance>;

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Message for response to listing Instances */
	export interface ListInstancesResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListInstancesResponseFormGroup() {
		return new FormGroup<ListInstancesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
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


	/** Message for response to listing SupportedDatabaseFlags. */
	export interface ListSupportedDatabaseFlagsResponse {

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** The list of SupportedDatabaseFlags. */
		supportedDatabaseFlags?: Array<SupportedDatabaseFlag>;
	}

	/** Message for response to listing SupportedDatabaseFlags. */
	export interface ListSupportedDatabaseFlagsResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSupportedDatabaseFlagsResponseFormGroup() {
		return new FormGroup<ListSupportedDatabaseFlagsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SupportedDatabaseFlag gives general information about a database flag, like type and allowed values. This is a static value that is defined on the server side, and it cannot be modified by callers. To set the Database flags on a particular Instance, a caller should modify the Instance.database_flags field. */
	export interface SupportedDatabaseFlag {

		/** Whether the database flag accepts multiple values. If true, a comma-separated list of stringified values may be specified. */
		acceptsMultipleValues?: boolean | null;

		/** The name of the database flag, e.g. "max_allowed_packets". The is a possibly key for the Instance.database_flags map field. */
		flagName?: string | null;

		/** Restrictions on INTEGER type values. */
		integerRestrictions?: IntegerRestrictions;

		/** The name of the flag resource, following Google Cloud conventions, e.g.: * projects/{project}/locations/{location}/flags/{flag} This field currently has no semantic meaning. */
		name?: string | null;

		/** Whether setting or updating this flag on an Instance requires a database restart. If a flag that requires database restart is set, the backend will automatically restart the database (making sure to satisfy any availability SLO's). */
		requiresDbRestart?: boolean | null;

		/** Restrictions on STRING type values */
		stringRestrictions?: StringRestrictions;

		/** Major database engine versions for which this flag is supported. */
		supportedDbVersions?: Array<BackupDatabaseVersion>;
		valueType?: SupportedDatabaseFlagValueType | null;
	}

	/** SupportedDatabaseFlag gives general information about a database flag, like type and allowed values. This is a static value that is defined on the server side, and it cannot be modified by callers. To set the Database flags on a particular Instance, a caller should modify the Instance.database_flags field. */
	export interface SupportedDatabaseFlagFormProperties {

		/** Whether the database flag accepts multiple values. If true, a comma-separated list of stringified values may be specified. */
		acceptsMultipleValues: FormControl<boolean | null | undefined>,

		/** The name of the database flag, e.g. "max_allowed_packets". The is a possibly key for the Instance.database_flags map field. */
		flagName: FormControl<string | null | undefined>,

		/** The name of the flag resource, following Google Cloud conventions, e.g.: * projects/{project}/locations/{location}/flags/{flag} This field currently has no semantic meaning. */
		name: FormControl<string | null | undefined>,

		/** Whether setting or updating this flag on an Instance requires a database restart. If a flag that requires database restart is set, the backend will automatically restart the database (making sure to satisfy any availability SLO's). */
		requiresDbRestart: FormControl<boolean | null | undefined>,
		valueType: FormControl<SupportedDatabaseFlagValueType | null | undefined>,
	}
	export function CreateSupportedDatabaseFlagFormGroup() {
		return new FormGroup<SupportedDatabaseFlagFormProperties>({
			acceptsMultipleValues: new FormControl<boolean | null | undefined>(undefined),
			flagName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			requiresDbRestart: new FormControl<boolean | null | undefined>(undefined),
			valueType: new FormControl<SupportedDatabaseFlagValueType | null | undefined>(undefined),
		});

	}


	/** Restrictions on STRING type values */
	export interface StringRestrictions {

		/** The list of allowed values, if bounded. This field will be empty if there is a unbounded number of allowed values. */
		allowedValues?: Array<string>;
	}

	/** Restrictions on STRING type values */
	export interface StringRestrictionsFormProperties {
	}
	export function CreateStringRestrictionsFormGroup() {
		return new FormGroup<StringRestrictionsFormProperties>({
		});

	}

	export enum SupportedDatabaseFlagValueType { VALUE_TYPE_UNSPECIFIED = 'VALUE_TYPE_UNSPECIFIED', STRING = 'STRING', INTEGER = 'INTEGER', FLOAT = 'FLOAT', NONE = 'NONE' }


	/** Message for response to listing Users */
	export interface ListUsersResponse {

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;

		/** The list of User */
		users?: Array<User>;
	}

	/** Message for response to listing Users */
	export interface ListUsersResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsersResponseFormGroup() {
		return new FormGroup<ListUsersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message describing User object. */
	export interface User {

		/** Optional. List of database roles this user has. The database role strings are subject to the PostgreSQL naming conventions. */
		databaseRoles?: Array<string>;

		/** Output only. Name of the resource in the form of projects/{project}/locations/{location}/cluster/{cluster}/users/{user}. */
		name?: string | null;

		/** Input only. Password for the user. */
		password?: string | null;

		/** Optional. Type of this user. */
		userType?: UserUserType | null;
	}

	/** Message describing User object. */
	export interface UserFormProperties {

		/** Output only. Name of the resource in the form of projects/{project}/locations/{location}/cluster/{cluster}/users/{user}. */
		name: FormControl<string | null | undefined>,

		/** Input only. Password for the user. */
		password: FormControl<string | null | undefined>,

		/** Optional. Type of this user. */
		userType: FormControl<UserUserType | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			userType: new FormControl<UserUserType | null | undefined>(undefined),
		});

	}

	export enum UserUserType { USER_TYPE_UNSPECIFIED = 'USER_TYPE_UNSPECIFIED', ALLOYDB_BUILT_IN = 'ALLOYDB_BUILT_IN', ALLOYDB_IAM_USER = 'ALLOYDB_IAM_USER' }


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


	/** Message for promoting a Cluster */
	export interface PromoteClusterRequest {

		/** Optional. The current etag of the Cluster. If an etag is provided and does not match the current etag of the Cluster, deletion will be blocked and an ABORTED error will be returned. */
		etag?: string | null;

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;

		/** Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the delete. */
		validateOnly?: boolean | null;
	}

	/** Message for promoting a Cluster */
	export interface PromoteClusterRequestFormProperties {

		/** Optional. The current etag of the Cluster. If an etag is provided and does not match the current etag of the Cluster, deletion will be blocked and an ABORTED error will be returned. */
		etag: FormControl<string | null | undefined>,

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,

		/** Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the delete. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreatePromoteClusterRequestFormGroup() {
		return new FormGroup<PromoteClusterRequestFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RestartInstanceRequest {

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;

		/** Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the restart. */
		validateOnly?: boolean | null;
	}
	export interface RestartInstanceRequestFormProperties {

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,

		/** Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the restart. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateRestartInstanceRequestFormGroup() {
		return new FormGroup<RestartInstanceRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Message for restoring a Cluster from a backup or another cluster at a given point in time. */
	export interface RestoreClusterRequest {

		/** Message describing a BackupSource. */
		backupSource?: BackupSource;

		/** A cluster is a collection of regional AlloyDB resources. It can include a primary instance and one or more read pool instances. All cluster resources share a storage layer, which scales as needed. */
		cluster?: Cluster;

		/** Required. ID of the requesting object. */
		clusterId?: string | null;

		/** Message describing a ContinuousBackupSource. */
		continuousBackupSource?: ContinuousBackupSource;

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;

		/** Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the import request. */
		validateOnly?: boolean | null;
	}

	/** Message for restoring a Cluster from a backup or another cluster at a given point in time. */
	export interface RestoreClusterRequestFormProperties {

		/** Required. ID of the requesting object. */
		clusterId: FormControl<string | null | undefined>,

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,

		/** Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the import request. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateRestoreClusterRequestFormGroup() {
		return new FormGroup<RestoreClusterRequestFormProperties>({
			clusterId: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for availability of database instance */
	export interface StorageDatabasecenterPartnerapiV1mainAvailabilityConfiguration {

		/** Availability type. Potential values: * `ZONAL`: The instance serves data from only one zone. Outages in that zone affect data accessibility. * `REGIONAL`: The instance can serve data from more than one zone in a region (it is highly available). */
		availabilityType?: StorageDatabasecenterPartnerapiV1mainAvailabilityConfigurationAvailabilityType | null;
		externalReplicaConfigured?: boolean | null;
		promotableReplicaConfigured?: boolean | null;
	}

	/** Configuration for availability of database instance */
	export interface StorageDatabasecenterPartnerapiV1mainAvailabilityConfigurationFormProperties {

		/** Availability type. Potential values: * `ZONAL`: The instance serves data from only one zone. Outages in that zone affect data accessibility. * `REGIONAL`: The instance can serve data from more than one zone in a region (it is highly available). */
		availabilityType: FormControl<StorageDatabasecenterPartnerapiV1mainAvailabilityConfigurationAvailabilityType | null | undefined>,
		externalReplicaConfigured: FormControl<boolean | null | undefined>,
		promotableReplicaConfigured: FormControl<boolean | null | undefined>,
	}
	export function CreateStorageDatabasecenterPartnerapiV1mainAvailabilityConfigurationFormGroup() {
		return new FormGroup<StorageDatabasecenterPartnerapiV1mainAvailabilityConfigurationFormProperties>({
			availabilityType: new FormControl<StorageDatabasecenterPartnerapiV1mainAvailabilityConfigurationAvailabilityType | null | undefined>(undefined),
			externalReplicaConfigured: new FormControl<boolean | null | undefined>(undefined),
			promotableReplicaConfigured: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum StorageDatabasecenterPartnerapiV1mainAvailabilityConfigurationAvailabilityType { AVAILABILITY_TYPE_UNSPECIFIED = 'AVAILABILITY_TYPE_UNSPECIFIED', ZONAL = 'ZONAL', REGIONAL = 'REGIONAL', MULTI_REGIONAL = 'MULTI_REGIONAL', AVAILABILITY_TYPE_OTHER = 'AVAILABILITY_TYPE_OTHER' }


	/** Configuration for automatic backups */
	export interface StorageDatabasecenterPartnerapiV1mainBackupConfiguration {

		/** Whether customer visible automated backups are enabled on the instance. */
		automatedBackupEnabled?: boolean | null;
		backupRetentionSettings?: StorageDatabasecenterPartnerapiV1mainRetentionSettings;

		/** Whether point-in-time recovery is enabled. This is optional field, if the database service does not have this feature or metadata is not available in control plane, this can be omitted. */
		pointInTimeRecoveryEnabled?: boolean | null;
	}

	/** Configuration for automatic backups */
	export interface StorageDatabasecenterPartnerapiV1mainBackupConfigurationFormProperties {

		/** Whether customer visible automated backups are enabled on the instance. */
		automatedBackupEnabled: FormControl<boolean | null | undefined>,

		/** Whether point-in-time recovery is enabled. This is optional field, if the database service does not have this feature or metadata is not available in control plane, this can be omitted. */
		pointInTimeRecoveryEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateStorageDatabasecenterPartnerapiV1mainBackupConfigurationFormGroup() {
		return new FormGroup<StorageDatabasecenterPartnerapiV1mainBackupConfigurationFormProperties>({
			automatedBackupEnabled: new FormControl<boolean | null | undefined>(undefined),
			pointInTimeRecoveryEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StorageDatabasecenterPartnerapiV1mainRetentionSettings {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		quantityBasedRetention?: number | null;

		/** The unit that 'retained_backups' represents. */
		retentionUnit?: StorageDatabasecenterPartnerapiV1mainRetentionSettingsRetentionUnit | null;
		timeBasedRetention?: string | null;
	}
	export interface StorageDatabasecenterPartnerapiV1mainRetentionSettingsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		quantityBasedRetention: FormControl<number | null | undefined>,

		/** The unit that 'retained_backups' represents. */
		retentionUnit: FormControl<StorageDatabasecenterPartnerapiV1mainRetentionSettingsRetentionUnit | null | undefined>,
		timeBasedRetention: FormControl<string | null | undefined>,
	}
	export function CreateStorageDatabasecenterPartnerapiV1mainRetentionSettingsFormGroup() {
		return new FormGroup<StorageDatabasecenterPartnerapiV1mainRetentionSettingsFormProperties>({
			quantityBasedRetention: new FormControl<number | null | undefined>(undefined),
			retentionUnit: new FormControl<StorageDatabasecenterPartnerapiV1mainRetentionSettingsRetentionUnit | null | undefined>(undefined),
			timeBasedRetention: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StorageDatabasecenterPartnerapiV1mainRetentionSettingsRetentionUnit { RETENTION_UNIT_UNSPECIFIED = 'RETENTION_UNIT_UNSPECIFIED', COUNT = 'COUNT', TIME = 'TIME', RETENTION_UNIT_OTHER = 'RETENTION_UNIT_OTHER' }


	/** A backup run. */
	export interface StorageDatabasecenterPartnerapiV1mainBackupRun {

		/** The time the backup operation completed. REQUIRED */
		endTime?: string | null;

		/** An error that occurred during a backup creation operation. */
		error?: StorageDatabasecenterPartnerapiV1mainOperationError;

		/** The time the backup operation started. REQUIRED */
		startTime?: string | null;

		/** The status of this run. REQUIRED */
		status?: StorageDatabasecenterPartnerapiV1mainBackupRunStatus | null;
	}

	/** A backup run. */
	export interface StorageDatabasecenterPartnerapiV1mainBackupRunFormProperties {

		/** The time the backup operation completed. REQUIRED */
		endTime: FormControl<string | null | undefined>,

		/** The time the backup operation started. REQUIRED */
		startTime: FormControl<string | null | undefined>,

		/** The status of this run. REQUIRED */
		status: FormControl<StorageDatabasecenterPartnerapiV1mainBackupRunStatus | null | undefined>,
	}
	export function CreateStorageDatabasecenterPartnerapiV1mainBackupRunFormGroup() {
		return new FormGroup<StorageDatabasecenterPartnerapiV1mainBackupRunFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<StorageDatabasecenterPartnerapiV1mainBackupRunStatus | null | undefined>(undefined),
		});

	}


	/** An error that occurred during a backup creation operation. */
	export interface StorageDatabasecenterPartnerapiV1mainOperationError {

		/** Identifies the specific error that occurred. REQUIRED */
		code?: string | null;

		/** Additional information about the error encountered. REQUIRED */
		message?: string | null;
	}

	/** An error that occurred during a backup creation operation. */
	export interface StorageDatabasecenterPartnerapiV1mainOperationErrorFormProperties {

		/** Identifies the specific error that occurred. REQUIRED */
		code: FormControl<string | null | undefined>,

		/** Additional information about the error encountered. REQUIRED */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStorageDatabasecenterPartnerapiV1mainOperationErrorFormGroup() {
		return new FormGroup<StorageDatabasecenterPartnerapiV1mainOperationErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StorageDatabasecenterPartnerapiV1mainBackupRunStatus { STATUS_UNSPECIFIED = 'STATUS_UNSPECIFIED', SUCCESSFUL = 'SUCCESSFUL', FAILED = 'FAILED' }


	/** Contains compliance information about a security standard indicating unmet recommendations. */
	export interface StorageDatabasecenterPartnerapiV1mainCompliance {

		/** Industry-wide compliance standards or benchmarks, such as CIS, PCI, and OWASP. */
		standard?: string | null;

		/** Version of the standard or benchmark, for example, 1.1 */
		version?: string | null;
	}

	/** Contains compliance information about a security standard indicating unmet recommendations. */
	export interface StorageDatabasecenterPartnerapiV1mainComplianceFormProperties {

		/** Industry-wide compliance standards or benchmarks, such as CIS, PCI, and OWASP. */
		standard: FormControl<string | null | undefined>,

		/** Version of the standard or benchmark, for example, 1.1 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateStorageDatabasecenterPartnerapiV1mainComplianceFormGroup() {
		return new FormGroup<StorageDatabasecenterPartnerapiV1mainComplianceFormProperties>({
			standard: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DatabaseResourceFeed is the top level proto to be used to ingest different database resource level events into Condor platform. */
	export interface StorageDatabasecenterPartnerapiV1mainDatabaseResourceFeed {

		/** Required. Timestamp when feed is generated. */
		feedTimestamp?: string | null;

		/** Required. Type feed to be ingested into condor */
		feedType?: StorageDatabasecenterPartnerapiV1mainDatabaseResourceFeedFeedType | null;

		/** Common model for database resource health signal data. */
		resourceHealthSignalData?: StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalData;

		/** DatabaseResourceId will serve as primary key for any resource ingestion event. */
		resourceId?: StorageDatabasecenterPartnerapiV1mainDatabaseResourceId;

		/** Common model for database resource instance metadata. */
		resourceMetadata?: StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadata;
	}

	/** DatabaseResourceFeed is the top level proto to be used to ingest different database resource level events into Condor platform. */
	export interface StorageDatabasecenterPartnerapiV1mainDatabaseResourceFeedFormProperties {

		/** Required. Timestamp when feed is generated. */
		feedTimestamp: FormControl<string | null | undefined>,

		/** Required. Type feed to be ingested into condor */
		feedType: FormControl<StorageDatabasecenterPartnerapiV1mainDatabaseResourceFeedFeedType | null | undefined>,
	}
	export function CreateStorageDatabasecenterPartnerapiV1mainDatabaseResourceFeedFormGroup() {
		return new FormGroup<StorageDatabasecenterPartnerapiV1mainDatabaseResourceFeedFormProperties>({
			feedTimestamp: new FormControl<string | null | undefined>(undefined),
			feedType: new FormControl<StorageDatabasecenterPartnerapiV1mainDatabaseResourceFeedFeedType | null | undefined>(undefined),
		});

	}

	export enum StorageDatabasecenterPartnerapiV1mainDatabaseResourceFeedFeedType { FEEDTYPE_UNSPECIFIED = 'FEEDTYPE_UNSPECIFIED', RESOURCE_METADATA = 'RESOURCE_METADATA', OBSERVABILITY_DATA = 'OBSERVABILITY_DATA', SECURITY_FINDING_DATA = 'SECURITY_FINDING_DATA' }


	/** Common model for database resource health signal data. */
	export interface StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalData {

		/** Any other additional metadata */
		additionalMetadata?: {[id: string]: any };

		/** Industry standards associated with this signal; if this signal is an issue, that could be a violation of the associated industry standard(s). For example, AUTO_BACKUP_DISABLED signal is associated with CIS GCP 1.1, CIS GCP 1.2, CIS GCP 1.3, NIST 800-53 and ISO-27001 compliance standards. If a database resource does not have automated backup enable, it will violate these following industry standards. */
		compliance?: Array<StorageDatabasecenterPartnerapiV1mainCompliance>;

		/** Description associated with signal */
		description?: string | null;

		/** Required. The last time at which the event described by this signal took place */
		eventTime?: string | null;

		/** The external-uri of the signal, using which more information about this signal can be obtained. In GCP, this will take user to SCC page to get more details about signals. */
		externalUri?: string | null;

		/** Required. The name of the signal, ex: PUBLIC_SQL_INSTANCE, SQL_LOG_ERROR_VERBOSITY etc. */
		name?: string | null;

		/** Cloud provider name. Ex: GCP/AWS/Azure/OnPrem/SelfManaged */
		provider?: StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalDataProvider | null;

		/** Closest parent container of this resource. In GCP, 'container' refers to a Cloud Resource Manager project. It must be resource name of a Cloud Resource Manager project with the format of "provider//", such as "projects/123". For GCP provided resources, number should be project number. */
		resourceContainer?: string | null;

		/** Required. Database resource name associated with the signal. Resource name to follow CAIS resource_name format as noted here go/condor-common-datamodel */
		resourceName?: string | null;

		/** Required. The class of the signal, such as if it's a THREAT or VULNERABILITY. */
		signalClass?: StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalDataSignalClass | null;

		/** Required. Unique identifier for the signal. This is an unique id which would be mainatined by partner to identify a signal. */
		signalId?: string | null;

		/** Required. Type of signal, for example, `AVAILABLE_IN_MULTIPLE_ZONES`, `LOGGING_MOST_ERRORS`, etc. */
		signalType?: StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalDataSignalType | null;
		state?: StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalDataState | null;
	}

	/** Common model for database resource health signal data. */
	export interface StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalDataFormProperties {

		/** Any other additional metadata */
		additionalMetadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Description associated with signal */
		description: FormControl<string | null | undefined>,

		/** Required. The last time at which the event described by this signal took place */
		eventTime: FormControl<string | null | undefined>,

		/** The external-uri of the signal, using which more information about this signal can be obtained. In GCP, this will take user to SCC page to get more details about signals. */
		externalUri: FormControl<string | null | undefined>,

		/** Required. The name of the signal, ex: PUBLIC_SQL_INSTANCE, SQL_LOG_ERROR_VERBOSITY etc. */
		name: FormControl<string | null | undefined>,

		/** Cloud provider name. Ex: GCP/AWS/Azure/OnPrem/SelfManaged */
		provider: FormControl<StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalDataProvider | null | undefined>,

		/** Closest parent container of this resource. In GCP, 'container' refers to a Cloud Resource Manager project. It must be resource name of a Cloud Resource Manager project with the format of "provider//", such as "projects/123". For GCP provided resources, number should be project number. */
		resourceContainer: FormControl<string | null | undefined>,

		/** Required. Database resource name associated with the signal. Resource name to follow CAIS resource_name format as noted here go/condor-common-datamodel */
		resourceName: FormControl<string | null | undefined>,

		/** Required. The class of the signal, such as if it's a THREAT or VULNERABILITY. */
		signalClass: FormControl<StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalDataSignalClass | null | undefined>,

		/** Required. Unique identifier for the signal. This is an unique id which would be mainatined by partner to identify a signal. */
		signalId: FormControl<string | null | undefined>,

		/** Required. Type of signal, for example, `AVAILABLE_IN_MULTIPLE_ZONES`, `LOGGING_MOST_ERRORS`, etc. */
		signalType: FormControl<StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalDataSignalType | null | undefined>,
		state: FormControl<StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalDataState | null | undefined>,
	}
	export function CreateStorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalDataFormGroup() {
		return new FormGroup<StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalDataFormProperties>({
			additionalMetadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			eventTime: new FormControl<string | null | undefined>(undefined),
			externalUri: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalDataProvider | null | undefined>(undefined),
			resourceContainer: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			signalClass: new FormControl<StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalDataSignalClass | null | undefined>(undefined),
			signalId: new FormControl<string | null | undefined>(undefined),
			signalType: new FormControl<StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalDataSignalType | null | undefined>(undefined),
			state: new FormControl<StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalDataState | null | undefined>(undefined),
		});

	}

	export enum StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalDataProvider { PROVIDER_UNSPECIFIED = 'PROVIDER_UNSPECIFIED', GCP = 'GCP', AWS = 'AWS', AZURE = 'AZURE', ONPREM = 'ONPREM', SELFMANAGED = 'SELFMANAGED', PROVIDER_OTHER = 'PROVIDER_OTHER' }

	export enum StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalDataSignalClass { CLASS_UNSPECIFIED = 'CLASS_UNSPECIFIED', THREAT = 'THREAT', VULNERABILITY = 'VULNERABILITY', MISCONFIGURATION = 'MISCONFIGURATION', OBSERVATION = 'OBSERVATION', ERROR = 'ERROR' }

	export enum StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalDataSignalType { SIGNAL_TYPE_UNSPECIFIED = 'SIGNAL_TYPE_UNSPECIFIED', SIGNAL_TYPE_NOT_PROTECTED_BY_AUTOMATIC_FAILOVER = 'SIGNAL_TYPE_NOT_PROTECTED_BY_AUTOMATIC_FAILOVER', SIGNAL_TYPE_GROUP_NOT_REPLICATING_ACROSS_REGIONS = 'SIGNAL_TYPE_GROUP_NOT_REPLICATING_ACROSS_REGIONS', SIGNAL_TYPE_NOT_AVAILABLE_IN_MULTIPLE_ZONES = 'SIGNAL_TYPE_NOT_AVAILABLE_IN_MULTIPLE_ZONES', SIGNAL_TYPE_NOT_AVAILABLE_IN_MULTIPLE_REGIONS = 'SIGNAL_TYPE_NOT_AVAILABLE_IN_MULTIPLE_REGIONS', SIGNAL_TYPE_NO_PROMOTABLE_REPLICA = 'SIGNAL_TYPE_NO_PROMOTABLE_REPLICA', SIGNAL_TYPE_NO_AUTOMATED_BACKUP_POLICY = 'SIGNAL_TYPE_NO_AUTOMATED_BACKUP_POLICY', SIGNAL_TYPE_SHORT_BACKUP_RETENTION = 'SIGNAL_TYPE_SHORT_BACKUP_RETENTION', SIGNAL_TYPE_LAST_BACKUP_FAILED = 'SIGNAL_TYPE_LAST_BACKUP_FAILED', SIGNAL_TYPE_LAST_BACKUP_OLD = 'SIGNAL_TYPE_LAST_BACKUP_OLD', SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_2_0 = 'SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_2_0', SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_3 = 'SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_3', SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_2 = 'SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_2', SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_1 = 'SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_1', SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_0 = 'SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_0', SIGNAL_TYPE_VIOLATES_NIST_800_53 = 'SIGNAL_TYPE_VIOLATES_NIST_800_53', SIGNAL_TYPE_VIOLATES_ISO_27001 = 'SIGNAL_TYPE_VIOLATES_ISO_27001', SIGNAL_TYPE_VIOLATES_PCI_DSS_V3_2_1 = 'SIGNAL_TYPE_VIOLATES_PCI_DSS_V3_2_1', SIGNAL_TYPE_LOGS_NOT_OPTIMIZED_FOR_TROUBLESHOOTING = 'SIGNAL_TYPE_LOGS_NOT_OPTIMIZED_FOR_TROUBLESHOOTING', SIGNAL_TYPE_QUERY_DURATIONS_NOT_LOGGED = 'SIGNAL_TYPE_QUERY_DURATIONS_NOT_LOGGED', SIGNAL_TYPE_VERBOSE_ERROR_LOGGING = 'SIGNAL_TYPE_VERBOSE_ERROR_LOGGING', SIGNAL_TYPE_QUERY_LOCK_WAITS_NOT_LOGGED = 'SIGNAL_TYPE_QUERY_LOCK_WAITS_NOT_LOGGED', SIGNAL_TYPE_LOGGING_MOST_ERRORS = 'SIGNAL_TYPE_LOGGING_MOST_ERRORS', SIGNAL_TYPE_LOGGING_ONLY_CRITICAL_ERRORS = 'SIGNAL_TYPE_LOGGING_ONLY_CRITICAL_ERRORS', SIGNAL_TYPE_MINIMAL_ERROR_LOGGING = 'SIGNAL_TYPE_MINIMAL_ERROR_LOGGING', SIGNAL_TYPE_QUERY_STATISTICS_LOGGED = 'SIGNAL_TYPE_QUERY_STATISTICS_LOGGED', SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_CLIENT_HOSTNAME = 'SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_CLIENT_HOSTNAME', SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_PARSER_STATISTICS = 'SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_PARSER_STATISTICS', SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_PLANNER_STATISTICS = 'SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_PLANNER_STATISTICS', SIGNAL_TYPE_NOT_LOGGING_ONLY_DDL_STATEMENTS = 'SIGNAL_TYPE_NOT_LOGGING_ONLY_DDL_STATEMENTS', SIGNAL_TYPE_LOGGING_QUERY_STATISTICS = 'SIGNAL_TYPE_LOGGING_QUERY_STATISTICS', SIGNAL_TYPE_NOT_LOGGING_TEMPORARY_FILES = 'SIGNAL_TYPE_NOT_LOGGING_TEMPORARY_FILES', SIGNAL_TYPE_CONNECTION_MAX_NOT_CONFIGURED = 'SIGNAL_TYPE_CONNECTION_MAX_NOT_CONFIGURED', SIGNAL_TYPE_USER_OPTIONS_CONFIGURED = 'SIGNAL_TYPE_USER_OPTIONS_CONFIGURED', SIGNAL_TYPE_EXPOSED_TO_PUBLIC_ACCESS = 'SIGNAL_TYPE_EXPOSED_TO_PUBLIC_ACCESS', SIGNAL_TYPE_UNENCRYPTED_CONNECTIONS = 'SIGNAL_TYPE_UNENCRYPTED_CONNECTIONS', SIGNAL_TYPE_NO_ROOT_PASSWORD = 'SIGNAL_TYPE_NO_ROOT_PASSWORD', SIGNAL_TYPE_WEAK_ROOT_PASSWORD = 'SIGNAL_TYPE_WEAK_ROOT_PASSWORD', SIGNAL_TYPE_ENCRYPTION_KEY_NOT_CUSTOMER_MANAGED = 'SIGNAL_TYPE_ENCRYPTION_KEY_NOT_CUSTOMER_MANAGED', SIGNAL_TYPE_SERVER_AUTHENTICATION_NOT_REQUIRED = 'SIGNAL_TYPE_SERVER_AUTHENTICATION_NOT_REQUIRED', SIGNAL_TYPE_EXPOSED_BY_OWNERSHIP_CHAINING = 'SIGNAL_TYPE_EXPOSED_BY_OWNERSHIP_CHAINING', SIGNAL_TYPE_EXPOSED_TO_EXTERNAL_SCRIPTS = 'SIGNAL_TYPE_EXPOSED_TO_EXTERNAL_SCRIPTS', SIGNAL_TYPE_EXPOSED_TO_LOCAL_DATA_LOADS = 'SIGNAL_TYPE_EXPOSED_TO_LOCAL_DATA_LOADS', SIGNAL_TYPE_CONNECTION_ATTEMPTS_NOT_LOGGED = 'SIGNAL_TYPE_CONNECTION_ATTEMPTS_NOT_LOGGED', SIGNAL_TYPE_DISCONNECTIONS_NOT_LOGGED = 'SIGNAL_TYPE_DISCONNECTIONS_NOT_LOGGED', SIGNAL_TYPE_LOGGING_EXCESSIVE_STATEMENT_INFO = 'SIGNAL_TYPE_LOGGING_EXCESSIVE_STATEMENT_INFO', SIGNAL_TYPE_EXPOSED_TO_REMOTE_ACCESS = 'SIGNAL_TYPE_EXPOSED_TO_REMOTE_ACCESS', SIGNAL_TYPE_DATABASE_NAMES_EXPOSED = 'SIGNAL_TYPE_DATABASE_NAMES_EXPOSED', SIGNAL_TYPE_SENSITIVE_TRACE_INFO_NOT_MASKED = 'SIGNAL_TYPE_SENSITIVE_TRACE_INFO_NOT_MASKED', SIGNAL_TYPE_PUBLIC_IP_ENABLED = 'SIGNAL_TYPE_PUBLIC_IP_ENABLED' }

	export enum StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalDataState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', RESOLVED = 'RESOLVED', MUTED = 'MUTED' }


	/** DatabaseResourceId will serve as primary key for any resource ingestion event. */
	export interface StorageDatabasecenterPartnerapiV1mainDatabaseResourceId {

		/** Required. Cloud provider name. Ex: GCP/AWS/Azure/OnPrem/SelfManaged */
		provider?: StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalDataProvider | null;

		/** Optional. Needs to be used only when the provider is PROVIDER_OTHER. */
		providerDescription?: string | null;

		/** Required. The type of resource this ID is identifying. Ex alloydb.googleapis.com/Cluster, alloydb.googleapis.com/Instance, spanner.googleapis.com/Instance REQUIRED Please refer go/condor-common-datamodel */
		resourceType?: string | null;

		/** Required. A service-local token that distinguishes this resource from other resources within the same service. */
		uniqueId?: string | null;
	}

	/** DatabaseResourceId will serve as primary key for any resource ingestion event. */
	export interface StorageDatabasecenterPartnerapiV1mainDatabaseResourceIdFormProperties {

		/** Required. Cloud provider name. Ex: GCP/AWS/Azure/OnPrem/SelfManaged */
		provider: FormControl<StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalDataProvider | null | undefined>,

		/** Optional. Needs to be used only when the provider is PROVIDER_OTHER. */
		providerDescription: FormControl<string | null | undefined>,

		/** Required. The type of resource this ID is identifying. Ex alloydb.googleapis.com/Cluster, alloydb.googleapis.com/Instance, spanner.googleapis.com/Instance REQUIRED Please refer go/condor-common-datamodel */
		resourceType: FormControl<string | null | undefined>,

		/** Required. A service-local token that distinguishes this resource from other resources within the same service. */
		uniqueId: FormControl<string | null | undefined>,
	}
	export function CreateStorageDatabasecenterPartnerapiV1mainDatabaseResourceIdFormGroup() {
		return new FormGroup<StorageDatabasecenterPartnerapiV1mainDatabaseResourceIdFormProperties>({
			provider: new FormControl<StorageDatabasecenterPartnerapiV1mainDatabaseResourceHealthSignalDataProvider | null | undefined>(undefined),
			providerDescription: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			uniqueId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Common model for database resource instance metadata. */
	export interface StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadata {

		/** Configuration for availability of database instance */
		availabilityConfiguration?: StorageDatabasecenterPartnerapiV1mainAvailabilityConfiguration;

		/** Configuration for automatic backups */
		backupConfiguration?: StorageDatabasecenterPartnerapiV1mainBackupConfiguration;

		/** A backup run. */
		backupRun?: StorageDatabasecenterPartnerapiV1mainBackupRun;

		/** The creation time of the resource, i.e. the time when resource is created and recorded in partner service. */
		creationTime?: string | null;

		/** Current state of the instance. */
		currentState?: StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadataCurrentState | null;

		/** Any custom metadata associated with the resource (a JSON field) */
		customMetadata?: {[id: string]: any };

		/** The state that the instance is expected to be in. For example, an instance state can transition to UNHEALTHY due to wrong patch update, while the expected state will remain at the HEALTHY. */
		expectedState?: StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadataCurrentState | null;

		/** DatabaseResourceId will serve as primary key for any resource ingestion event. */
		id?: StorageDatabasecenterPartnerapiV1mainDatabaseResourceId;

		/** The type of the instance. Specified at creation time. */
		instanceType?: StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadataInstanceType | null;

		/** The resource location. REQUIRED */
		location?: string | null;

		/** DatabaseResourceId will serve as primary key for any resource ingestion event. */
		primaryResourceId?: StorageDatabasecenterPartnerapiV1mainDatabaseResourceId;

		/** Product specification for Condor resources. */
		product?: StorageDatabasecenterProtoCommonProduct;

		/** Closest parent Cloud Resource Manager container of this resource. It must be resource name of a Cloud Resource Manager project with the format of "/", such as "projects/123". For GCP provided resources, number should be project number. */
		resourceContainer?: string | null;

		/** Required. Different from DatabaseResourceId.unique_id, a resource name can be reused over time. That is, after a resource named "ABC" is deleted, the name "ABC" can be used to to create a new resource within the same source. Resource name to follow CAIS resource_name format as noted here go/condor-common-datamodel */
		resourceName?: string | null;

		/** The time at which the resource was updated and recorded at partner service. */
		updationTime?: string | null;

		/** User-provided labels, represented as a dictionary where each label is a single key value pair. */
		userLabels?: {[id: string]: string };
	}

	/** Common model for database resource instance metadata. */
	export interface StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadataFormProperties {

		/** The creation time of the resource, i.e. the time when resource is created and recorded in partner service. */
		creationTime: FormControl<string | null | undefined>,

		/** Current state of the instance. */
		currentState: FormControl<StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadataCurrentState | null | undefined>,

		/** Any custom metadata associated with the resource (a JSON field) */
		customMetadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The state that the instance is expected to be in. For example, an instance state can transition to UNHEALTHY due to wrong patch update, while the expected state will remain at the HEALTHY. */
		expectedState: FormControl<StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadataCurrentState | null | undefined>,

		/** The type of the instance. Specified at creation time. */
		instanceType: FormControl<StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadataInstanceType | null | undefined>,

		/** The resource location. REQUIRED */
		location: FormControl<string | null | undefined>,

		/** Closest parent Cloud Resource Manager container of this resource. It must be resource name of a Cloud Resource Manager project with the format of "/", such as "projects/123". For GCP provided resources, number should be project number. */
		resourceContainer: FormControl<string | null | undefined>,

		/** Required. Different from DatabaseResourceId.unique_id, a resource name can be reused over time. That is, after a resource named "ABC" is deleted, the name "ABC" can be used to to create a new resource within the same source. Resource name to follow CAIS resource_name format as noted here go/condor-common-datamodel */
		resourceName: FormControl<string | null | undefined>,

		/** The time at which the resource was updated and recorded at partner service. */
		updationTime: FormControl<string | null | undefined>,

		/** User-provided labels, represented as a dictionary where each label is a single key value pair. */
		userLabels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadataFormGroup() {
		return new FormGroup<StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadataFormProperties>({
			creationTime: new FormControl<string | null | undefined>(undefined),
			currentState: new FormControl<StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadataCurrentState | null | undefined>(undefined),
			customMetadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			expectedState: new FormControl<StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadataCurrentState | null | undefined>(undefined),
			instanceType: new FormControl<StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadataInstanceType | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			resourceContainer: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			updationTime: new FormControl<string | null | undefined>(undefined),
			userLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadataCurrentState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', HEALTHY = 'HEALTHY', UNHEALTHY = 'UNHEALTHY', SUSPENDED = 'SUSPENDED', DELETED = 'DELETED', STATE_OTHER = 'STATE_OTHER' }

	export enum StorageDatabasecenterPartnerapiV1mainDatabaseResourceMetadataInstanceType { INSTANCE_TYPE_UNSPECIFIED = 'INSTANCE_TYPE_UNSPECIFIED', SUB_RESOURCE_TYPE_UNSPECIFIED = 'SUB_RESOURCE_TYPE_UNSPECIFIED', PRIMARY = 'PRIMARY', SECONDARY = 'SECONDARY', READ_REPLICA = 'READ_REPLICA', OTHER = 'OTHER', SUB_RESOURCE_TYPE_PRIMARY = 'SUB_RESOURCE_TYPE_PRIMARY', SUB_RESOURCE_TYPE_SECONDARY = 'SUB_RESOURCE_TYPE_SECONDARY', SUB_RESOURCE_TYPE_READ_REPLICA = 'SUB_RESOURCE_TYPE_READ_REPLICA', SUB_RESOURCE_TYPE_OTHER = 'SUB_RESOURCE_TYPE_OTHER' }


	/** Product specification for Condor resources. */
	export interface StorageDatabasecenterProtoCommonProduct {

		/** The specific engine that the underlying database is running. */
		engine?: StorageDatabasecenterProtoCommonProductEngine | null;

		/** Type of specific database product. It could be CloudSQL, AlloyDB etc.. */
		type?: StorageDatabasecenterProtoCommonProductType | null;

		/** Version of the underlying database engine. Example values: For MySQL, it could be "8.0", "5.7" etc.. For Postgres, it could be "14", "15" etc.. */
		version?: string | null;
	}

	/** Product specification for Condor resources. */
	export interface StorageDatabasecenterProtoCommonProductFormProperties {

		/** The specific engine that the underlying database is running. */
		engine: FormControl<StorageDatabasecenterProtoCommonProductEngine | null | undefined>,

		/** Type of specific database product. It could be CloudSQL, AlloyDB etc.. */
		type: FormControl<StorageDatabasecenterProtoCommonProductType | null | undefined>,

		/** Version of the underlying database engine. Example values: For MySQL, it could be "8.0", "5.7" etc.. For Postgres, it could be "14", "15" etc.. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateStorageDatabasecenterProtoCommonProductFormGroup() {
		return new FormGroup<StorageDatabasecenterProtoCommonProductFormProperties>({
			engine: new FormControl<StorageDatabasecenterProtoCommonProductEngine | null | undefined>(undefined),
			type: new FormControl<StorageDatabasecenterProtoCommonProductType | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StorageDatabasecenterProtoCommonProductEngine { ENGINE_UNSPECIFIED = 'ENGINE_UNSPECIFIED', ENGINE_MYSQL = 'ENGINE_MYSQL', MYSQL = 'MYSQL', ENGINE_POSTGRES = 'ENGINE_POSTGRES', POSTGRES = 'POSTGRES', ENGINE_SQL_SERVER = 'ENGINE_SQL_SERVER', SQL_SERVER = 'SQL_SERVER', ENGINE_NATIVE = 'ENGINE_NATIVE', NATIVE = 'NATIVE', ENGINE_CLOUD_SPANNER_WITH_POSTGRES_DIALECT = 'ENGINE_CLOUD_SPANNER_WITH_POSTGRES_DIALECT', SPANGRES = 'SPANGRES', ENGINE_OTHER = 'ENGINE_OTHER' }

	export enum StorageDatabasecenterProtoCommonProductType { PRODUCT_TYPE_UNSPECIFIED = 'PRODUCT_TYPE_UNSPECIFIED', PRODUCT_TYPE_CLOUD_SQL = 'PRODUCT_TYPE_CLOUD_SQL', CLOUD_SQL = 'CLOUD_SQL', PRODUCT_TYPE_ALLOYDB = 'PRODUCT_TYPE_ALLOYDB', ALLOYDB = 'ALLOYDB', PRODUCT_TYPE_SPANNER = 'PRODUCT_TYPE_SPANNER', SPANNER = 'SPANNER', PRODUCT_TYPE_ON_PREM = 'PRODUCT_TYPE_ON_PREM', ON_PREM = 'ON_PREM', PRODUCT_TYPE_OTHER = 'PRODUCT_TYPE_OTHER' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1beta/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {boolean} validateOnly Optional. If set, the backend validates the request, but doesn't actually execute it.
		 * @return {Empty} Successful response
		 */
		Alloydb_projects_locations_operations_delete(name: string, requestId: string | null | undefined, validateOnly: boolean | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&validateOnly=' + validateOnly, {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1beta/{name}
		 * @param {string} name The name of the operation resource.
		 * @param {Alloydb_projects_locations_operations_getView} view The view of the instance to return.
		 * @return {Operation} Successful response
		 */
		Alloydb_projects_locations_operations_get(name: string, view: Alloydb_projects_locations_operations_getView | null | undefined): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + '&view=' + view, {});
		}

		/**
		 * Updates the parameters of a single User.
		 * Patch v1beta/{name}
		 * @param {string} name Output only. Name of the resource in the form of projects/{project}/locations/{location}/cluster/{cluster}/users/{user}.
		 * @param {boolean} allowMissing Optional. Allow missing fields in the update mask.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} updateMask Optional. Field mask is used to specify the fields to be overwritten in the User resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
		 * @param {boolean} validateOnly Optional. If set, the backend validates the request, but doesn't actually execute it.
		 * @return {User} Successful response
		 */
		Alloydb_projects_locations_clusters_users_patch(name: string, allowMissing: boolean | null | undefined, requestId: string | null | undefined, updateMask: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: User): Observable<User> {
			return this.http.patch<User>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + '&allowMissing=' + allowMissing + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1beta/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {GoogleCloudLocationListLocationsResponse} Successful response
		 */
		Alloydb_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudLocationListLocationsResponse> {
			return this.http.get<GoogleCloudLocationListLocationsResponse>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1beta/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Alloydb_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1beta/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Alloydb_projects_locations_operations_cancel(name: string): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', null, {});
		}

		/**
		 * Forces a Failover for a highly available instance. Failover promotes the HA standby instance as the new primary. Imperative only.
		 * Post v1beta/{name}:failover
		 * @param {string} name Required. The name of the resource. For the required format, see the comment on the Instance.name field.
		 * @return {Operation} Successful response
		 */
		Alloydb_projects_locations_clusters_instances_failover(name: string, requestBody: FailoverInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + ':failover', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Injects fault in an instance. Imperative only.
		 * Post v1beta/{name}:injectFault
		 * @param {string} name Required. The name of the resource. For the required format, see the comment on the Instance.name field.
		 * @return {Operation} Successful response
		 */
		Alloydb_projects_locations_clusters_instances_injectFault(name: string, requestBody: InjectFaultRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + ':injectFault', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Promotes a SECONDARY cluster. This turns down replication from the PRIMARY cluster and promotes a secondary cluster into its own standalone cluster. Imperative only.
		 * Post v1beta/{name}:promote
		 * @param {string} name Required. The name of the resource. For the required format, see the comment on the Cluster.name field
		 * @return {Operation} Successful response
		 */
		Alloydb_projects_locations_clusters_promote(name: string, requestBody: PromoteClusterRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + ':promote', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restart an Instance in a cluster. Imperative only.
		 * Post v1beta/{name}:restart
		 * @param {string} name Required. The name of the resource. For the required format, see the comment on the Instance.name field.
		 * @return {Operation} Successful response
		 */
		Alloydb_projects_locations_clusters_instances_restart(name: string, requestBody: RestartInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + ':restart', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Backups in a given project and location.
		 * Get v1beta/{parent}/backups
		 * @param {string} parent Required. Parent value for ListBackupsRequest
		 * @param {string} filter Filtering results
		 * @param {string} orderBy Hint for how to order the results
		 * @param {number} pageSize Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A token identifying a page of results the server should return.
		 * @return {ListBackupsResponse} Successful response
		 */
		Alloydb_projects_locations_backups_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListBackupsResponse> {
			return this.http.get<ListBackupsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/backups&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Backup in a given project and location.
		 * Post v1beta/{parent}/backups
		 * @param {string} parent Required. Value for parent.
		 * @param {string} backupId Required. ID of the requesting object.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {boolean} validateOnly Optional. If set, the backend validates the request, but doesn't actually execute it.
		 * @return {Operation} Successful response
		 */
		Alloydb_projects_locations_backups_create(parent: string, backupId: string | null | undefined, requestId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: Backup): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/backups&backupId=' + (backupId == null ? '' : encodeURIComponent(backupId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Clusters in a given project and location.
		 * Get v1beta/{parent}/clusters
		 * @param {string} parent Required. The name of the parent resource. For the required format, see the comment on the Cluster.name field. Additionally, you can perform an aggregated list operation by specifying a value with the following format: * projects/{project}/locations/-
		 * @param {string} filter Optional. Filtering results
		 * @param {string} orderBy Optional. Hint for how to order the results
		 * @param {number} pageSize Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A token identifying a page of results the server should return.
		 * @return {ListClustersResponse} Successful response
		 */
		Alloydb_projects_locations_clusters_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListClustersResponse> {
			return this.http.get<ListClustersResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/clusters&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Cluster in a given project and location.
		 * Post v1beta/{parent}/clusters
		 * @param {string} parent Required. The location of the new cluster. For the required format, see the comment on the Cluster.name field.
		 * @param {string} clusterId Required. ID of the requesting object.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {boolean} validateOnly Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the create request.
		 * @return {Operation} Successful response
		 */
		Alloydb_projects_locations_clusters_create(parent: string, clusterId: string | null | undefined, requestId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: Cluster): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/clusters&clusterId=' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a cluster of type SECONDARY in the given location using the primary cluster as the source.
		 * Post v1beta/{parent}/clusters:createsecondary
		 * @param {string} parent Required. The location of the new cluster. For the required format, see the comment on the Cluster.name field.
		 * @param {string} clusterId Required. ID of the requesting object (the secondary cluster).
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {boolean} validateOnly Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the create request.
		 * @return {Operation} Successful response
		 */
		Alloydb_projects_locations_clusters_createsecondary(parent: string, clusterId: string | null | undefined, requestId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: Cluster): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/clusters:createsecondary&clusterId=' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster.
		 * Post v1beta/{parent}/clusters:restore
		 * @param {string} parent Required. The name of the parent resource. For the required format, see the comment on the Cluster.name field.
		 * @return {Operation} Successful response
		 */
		Alloydb_projects_locations_clusters_restore(parent: string, requestBody: RestoreClusterRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/clusters:restore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get instance metadata used for a connection.
		 * Get v1beta/{parent}/connectionInfo
		 * @param {string} parent Required. The name of the parent resource. The required format is: projects/{project}/locations/{location}/clusters/{cluster}/instances/{instance}
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {ConnectionInfo} Successful response
		 */
		Alloydb_projects_locations_clusters_instances_getConnectionInfo(parent: string, requestId: string | null | undefined): Observable<ConnectionInfo> {
			return this.http.get<ConnectionInfo>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/connectionInfo&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), {});
		}

		/**
		 * Lists Instances in a given project and location.
		 * Get v1beta/{parent}/instances
		 * @param {string} parent Required. The name of the parent resource. For the required format, see the comment on the Instance.name field. Additionally, you can perform an aggregated list operation by specifying a value with one of the following formats: * projects/{project}/locations/-/clusters/- * projects/{project}/locations/{region}/clusters/-
		 * @param {string} filter Optional. Filtering results
		 * @param {string} orderBy Optional. Hint for how to order the results
		 * @param {number} pageSize Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A token identifying a page of results the server should return.
		 * @return {ListInstancesResponse} Successful response
		 */
		Alloydb_projects_locations_clusters_instances_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListInstancesResponse> {
			return this.http.get<ListInstancesResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Instance in a given project and location.
		 * Post v1beta/{parent}/instances
		 * @param {string} parent Required. The name of the parent resource. For the required format, see the comment on the Instance.name field.
		 * @param {string} instanceId Required. ID of the requesting object.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {boolean} validateOnly Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the create request.
		 * @return {Operation} Successful response
		 */
		Alloydb_projects_locations_clusters_instances_create(parent: string, instanceId: string | null | undefined, requestId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: Instance): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&instanceId=' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new SECONDARY Instance in a given project and location.
		 * Post v1beta/{parent}/instances:createsecondary
		 * @param {string} parent Required. The name of the parent resource. For the required format, see the comment on the Instance.name field.
		 * @param {string} instanceId Required. ID of the requesting object.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {boolean} validateOnly Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the create request.
		 * @return {Operation} Successful response
		 */
		Alloydb_projects_locations_clusters_instances_createsecondary(parent: string, instanceId: string | null | undefined, requestId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: Instance): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances:createsecondary&instanceId=' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists SupportedDatabaseFlags for a given project and location.
		 * Get v1beta/{parent}/supportedDatabaseFlags
		 * @param {string} parent Required. The name of the parent resource. The required format is: * projects/{project}/locations/{location} Regardless of the parent specified here, as long it is contains a valid project and location, the service will return a static list of supported flags resources. Note that we do not yet support region-specific flags.
		 * @param {number} pageSize Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A token identifying a page of results the server should return.
		 * @return {ListSupportedDatabaseFlagsResponse} Successful response
		 */
		Alloydb_projects_locations_supportedDatabaseFlags_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSupportedDatabaseFlagsResponse> {
			return this.http.get<ListSupportedDatabaseFlagsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/supportedDatabaseFlags&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists Users in a given project and location.
		 * Get v1beta/{parent}/users
		 * @param {string} parent Required. Parent value for ListUsersRequest
		 * @param {string} filter Optional. Filtering results
		 * @param {string} orderBy Optional. Hint for how to order the results
		 * @param {number} pageSize Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A token identifying a page of results the server should return.
		 * @return {ListUsersResponse} Successful response
		 */
		Alloydb_projects_locations_clusters_users_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListUsersResponse> {
			return this.http.get<ListUsersResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/users&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new User in a given project, location, and cluster.
		 * Post v1beta/{parent}/users
		 * @param {string} parent Required. Value for parent.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} userId Required. ID of the requesting object.
		 * @param {boolean} validateOnly Optional. If set, the backend validates the request, but doesn't actually execute it.
		 * @return {User} Successful response
		 */
		Alloydb_projects_locations_clusters_users_create(parent: string, requestId: string | null | undefined, userId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: User): Observable<User> {
			return this.http.post<User>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/users&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generate a client certificate signed by a Cluster CA. The sole purpose of this endpoint is to support AlloyDB connectors and the Auth Proxy client. The endpoint's behavior is subject to change without notice, so do not rely on its behavior remaining constant. Future changes will not break AlloyDB connectors or the Auth Proxy client.
		 * Post v1beta/{parent}:generateClientCertificate
		 * @param {string} parent Required. The name of the parent resource. The required format is: * projects/{project}/locations/{location}/clusters/{cluster}
		 * @return {GenerateClientCertificateResponse} Successful response
		 */
		Alloydb_projects_locations_clusters_generateClientCertificate(parent: string, requestBody: GenerateClientCertificateRequest): Observable<GenerateClientCertificateResponse> {
			return this.http.post<GenerateClientCertificateResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + ':generateClientCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Alloydb_projects_locations_operations_getView { INSTANCE_VIEW_UNSPECIFIED = 'INSTANCE_VIEW_UNSPECIFIED', INSTANCE_VIEW_BASIC = 'INSTANCE_VIEW_BASIC', INSTANCE_VIEW_FULL = 'INSTANCE_VIEW_FULL' }

}

