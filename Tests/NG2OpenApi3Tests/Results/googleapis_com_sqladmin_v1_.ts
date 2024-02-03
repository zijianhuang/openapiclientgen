import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An entry for an Access Control list. */
	export interface AclEntry {

		/** The time when this access control entry expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
		expirationTime?: string | null;

		/** This is always `sql#aclEntry`. */
		kind?: string | null;

		/** Optional. A label to identify this entry. */
		name?: string | null;

		/** The allowlisted value for the access control list. */
		value?: string | null;
	}

	/** An entry for an Access Control list. */
	export interface AclEntryFormProperties {

		/** The time when this access control entry expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
		expirationTime: FormControl<string | null | undefined>,

		/** This is always `sql#aclEntry`. */
		kind: FormControl<string | null | undefined>,

		/** Optional. A label to identify this entry. */
		name: FormControl<string | null | undefined>,

		/** The allowlisted value for the access control list. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAclEntryFormGroup() {
		return new FormGroup<AclEntryFormProperties>({
			expirationTime: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies options for controlling advanced machine features. */
	export interface AdvancedMachineFeatures {

		/** The number of threads per physical core. */
		threadsPerCore?: number | null;
	}

	/** Specifies options for controlling advanced machine features. */
	export interface AdvancedMachineFeaturesFormProperties {

		/** The number of threads per physical core. */
		threadsPerCore: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedMachineFeaturesFormGroup() {
		return new FormGroup<AdvancedMachineFeaturesFormProperties>({
			threadsPerCore: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An Admin API warning message. */
	export interface ApiWarning {

		/** Code to uniquely identify the warning type. */
		code?: ApiWarningCode | null;

		/** The warning message. */
		message?: string | null;

		/** The region name for REGION_UNREACHABLE warning. */
		region?: string | null;
	}

	/** An Admin API warning message. */
	export interface ApiWarningFormProperties {

		/** Code to uniquely identify the warning type. */
		code: FormControl<ApiWarningCode | null | undefined>,

		/** The warning message. */
		message: FormControl<string | null | undefined>,

		/** The region name for REGION_UNREACHABLE warning. */
		region: FormControl<string | null | undefined>,
	}
	export function CreateApiWarningFormGroup() {
		return new FormGroup<ApiWarningFormProperties>({
			code: new FormControl<ApiWarningCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApiWarningCode { SQL_API_WARNING_CODE_UNSPECIFIED = 'SQL_API_WARNING_CODE_UNSPECIFIED', REGION_UNREACHABLE = 'REGION_UNREACHABLE', MAX_RESULTS_EXCEEDS_LIMIT = 'MAX_RESULTS_EXCEEDS_LIMIT', COMPROMISED_CREDENTIALS = 'COMPROMISED_CREDENTIALS', INTERNAL_STATE_FAILURE = 'INTERNAL_STATE_FAILURE' }


	/** Database instance backup configuration. */
	export interface BackupConfiguration {

		/** We currently only support backup retention by specifying the number of backups we will retain. */
		backupRetentionSettings?: BackupRetentionSettings;

		/** (MySQL only) Whether binary log is enabled. If backup configuration is disabled, binarylog must be disabled as well. */
		binaryLogEnabled?: boolean | null;

		/** Whether this configuration is enabled. */
		enabled?: boolean | null;

		/** This is always `sql#backupConfiguration`. */
		kind?: string | null;

		/** Location of the backup */
		location?: string | null;

		/** Whether point in time recovery is enabled. */
		pointInTimeRecoveryEnabled?: boolean | null;

		/** Reserved for future use. */
		replicationLogArchivingEnabled?: boolean | null;

		/** Start time for the daily backup configuration in UTC timezone in the 24 hour format - `HH:MM`. */
		startTime?: string | null;

		/** The number of days of transaction logs we retain for point in time restore, from 1-7. */
		transactionLogRetentionDays?: number | null;
	}

	/** Database instance backup configuration. */
	export interface BackupConfigurationFormProperties {

		/** (MySQL only) Whether binary log is enabled. If backup configuration is disabled, binarylog must be disabled as well. */
		binaryLogEnabled: FormControl<boolean | null | undefined>,

		/** Whether this configuration is enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/** This is always `sql#backupConfiguration`. */
		kind: FormControl<string | null | undefined>,

		/** Location of the backup */
		location: FormControl<string | null | undefined>,

		/** Whether point in time recovery is enabled. */
		pointInTimeRecoveryEnabled: FormControl<boolean | null | undefined>,

		/** Reserved for future use. */
		replicationLogArchivingEnabled: FormControl<boolean | null | undefined>,

		/** Start time for the daily backup configuration in UTC timezone in the 24 hour format - `HH:MM`. */
		startTime: FormControl<string | null | undefined>,

		/** The number of days of transaction logs we retain for point in time restore, from 1-7. */
		transactionLogRetentionDays: FormControl<number | null | undefined>,
	}
	export function CreateBackupConfigurationFormGroup() {
		return new FormGroup<BackupConfigurationFormProperties>({
			binaryLogEnabled: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			pointInTimeRecoveryEnabled: new FormControl<boolean | null | undefined>(undefined),
			replicationLogArchivingEnabled: new FormControl<boolean | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			transactionLogRetentionDays: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** We currently only support backup retention by specifying the number of backups we will retain. */
	export interface BackupRetentionSettings {

		/** Depending on the value of retention_unit, this is used to determine if a backup needs to be deleted. If retention_unit is 'COUNT', we will retain this many backups. */
		retainedBackups?: number | null;

		/** The unit that 'retained_backups' represents. */
		retentionUnit?: BackupRetentionSettingsRetentionUnit | null;
	}

	/** We currently only support backup retention by specifying the number of backups we will retain. */
	export interface BackupRetentionSettingsFormProperties {

		/** Depending on the value of retention_unit, this is used to determine if a backup needs to be deleted. If retention_unit is 'COUNT', we will retain this many backups. */
		retainedBackups: FormControl<number | null | undefined>,

		/** The unit that 'retained_backups' represents. */
		retentionUnit: FormControl<BackupRetentionSettingsRetentionUnit | null | undefined>,
	}
	export function CreateBackupRetentionSettingsFormGroup() {
		return new FormGroup<BackupRetentionSettingsFormProperties>({
			retainedBackups: new FormControl<number | null | undefined>(undefined),
			retentionUnit: new FormControl<BackupRetentionSettingsRetentionUnit | null | undefined>(undefined),
		});

	}

	export enum BackupRetentionSettingsRetentionUnit { RETENTION_UNIT_UNSPECIFIED = 'RETENTION_UNIT_UNSPECIFIED', COUNT = 'COUNT' }


	/** Backup context. */
	export interface BackupContext {

		/** The identifier of the backup. */
		backupId?: string | null;

		/** This is always `sql#backupContext`. */
		kind?: string | null;
	}

	/** Backup context. */
	export interface BackupContextFormProperties {

		/** The identifier of the backup. */
		backupId: FormControl<string | null | undefined>,

		/** This is always `sql#backupContext`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateBackupContextFormGroup() {
		return new FormGroup<BackupContextFormProperties>({
			backupId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Backup Reencryption Config */
	export interface BackupReencryptionConfig {

		/** Backup re-encryption limit */
		backupLimit?: number | null;

		/** Type of backups users want to re-encrypt. */
		backupType?: BackupReencryptionConfigBackupType | null;
	}

	/** Backup Reencryption Config */
	export interface BackupReencryptionConfigFormProperties {

		/** Backup re-encryption limit */
		backupLimit: FormControl<number | null | undefined>,

		/** Type of backups users want to re-encrypt. */
		backupType: FormControl<BackupReencryptionConfigBackupType | null | undefined>,
	}
	export function CreateBackupReencryptionConfigFormGroup() {
		return new FormGroup<BackupReencryptionConfigFormProperties>({
			backupLimit: new FormControl<number | null | undefined>(undefined),
			backupType: new FormControl<BackupReencryptionConfigBackupType | null | undefined>(undefined),
		});

	}

	export enum BackupReencryptionConfigBackupType { BACKUP_TYPE_UNSPECIFIED = 'BACKUP_TYPE_UNSPECIFIED', AUTOMATED = 'AUTOMATED', ON_DEMAND = 'ON_DEMAND' }


	/** A BackupRun resource. */
	export interface BackupRun {

		/** Specifies the kind of backup, PHYSICAL or DEFAULT_SNAPSHOT. */
		backupKind?: BackupRunBackupKind | null;

		/** The description of this run, only applicable to on-demand backups. */
		description?: string | null;

		/** Disk encryption configuration for an instance. */
		diskEncryptionConfiguration?: DiskEncryptionConfiguration;

		/** Disk encryption status for an instance. */
		diskEncryptionStatus?: DiskEncryptionStatus;

		/** The time the backup operation completed in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
		endTime?: string | null;

		/** The time the run was enqueued in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
		enqueuedTime?: string | null;

		/** Database instance operation error. */
		error?: OperationError;

		/** The identifier for this backup run. Unique only for a specific Cloud SQL instance. */
		id?: string | null;

		/** Name of the database instance. */
		instance?: string | null;

		/** This is always `sql#backupRun`. */
		kind?: string | null;

		/** Location of the backups. */
		location?: string | null;

		/** The URI of this resource. */
		selfLink?: string | null;

		/** The time the backup operation actually started in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
		startTime?: string | null;

		/** The status of this run. */
		status?: BackupRunStatus | null;

		/** Backup time zone to prevent restores to an instance with a different time zone. Now relevant only for SQL Server. */
		timeZone?: string | null;

		/** The type of this run; can be either "AUTOMATED" or "ON_DEMAND" or "FINAL". This field defaults to "ON_DEMAND" and is ignored, when specified for insert requests. */
		type?: BackupRunType | null;

		/** The start time of the backup window during which this the backup was attempted in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
		windowStartTime?: string | null;
	}

	/** A BackupRun resource. */
	export interface BackupRunFormProperties {

		/** Specifies the kind of backup, PHYSICAL or DEFAULT_SNAPSHOT. */
		backupKind: FormControl<BackupRunBackupKind | null | undefined>,

		/** The description of this run, only applicable to on-demand backups. */
		description: FormControl<string | null | undefined>,

		/** The time the backup operation completed in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
		endTime: FormControl<string | null | undefined>,

		/** The time the run was enqueued in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
		enqueuedTime: FormControl<string | null | undefined>,

		/** The identifier for this backup run. Unique only for a specific Cloud SQL instance. */
		id: FormControl<string | null | undefined>,

		/** Name of the database instance. */
		instance: FormControl<string | null | undefined>,

		/** This is always `sql#backupRun`. */
		kind: FormControl<string | null | undefined>,

		/** Location of the backups. */
		location: FormControl<string | null | undefined>,

		/** The URI of this resource. */
		selfLink: FormControl<string | null | undefined>,

		/** The time the backup operation actually started in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
		startTime: FormControl<string | null | undefined>,

		/** The status of this run. */
		status: FormControl<BackupRunStatus | null | undefined>,

		/** Backup time zone to prevent restores to an instance with a different time zone. Now relevant only for SQL Server. */
		timeZone: FormControl<string | null | undefined>,

		/** The type of this run; can be either "AUTOMATED" or "ON_DEMAND" or "FINAL". This field defaults to "ON_DEMAND" and is ignored, when specified for insert requests. */
		type: FormControl<BackupRunType | null | undefined>,

		/** The start time of the backup window during which this the backup was attempted in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
		windowStartTime: FormControl<string | null | undefined>,
	}
	export function CreateBackupRunFormGroup() {
		return new FormGroup<BackupRunFormProperties>({
			backupKind: new FormControl<BackupRunBackupKind | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			enqueuedTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<BackupRunStatus | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<BackupRunType | null | undefined>(undefined),
			windowStartTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BackupRunBackupKind { SQL_BACKUP_KIND_UNSPECIFIED = 'SQL_BACKUP_KIND_UNSPECIFIED', SNAPSHOT = 'SNAPSHOT', PHYSICAL = 'PHYSICAL' }


	/** Disk encryption configuration for an instance. */
	export interface DiskEncryptionConfiguration {

		/** This is always `sql#diskEncryptionConfiguration`. */
		kind?: string | null;

		/** Resource name of KMS key for disk encryption */
		kmsKeyName?: string | null;
	}

	/** Disk encryption configuration for an instance. */
	export interface DiskEncryptionConfigurationFormProperties {

		/** This is always `sql#diskEncryptionConfiguration`. */
		kind: FormControl<string | null | undefined>,

		/** Resource name of KMS key for disk encryption */
		kmsKeyName: FormControl<string | null | undefined>,
	}
	export function CreateDiskEncryptionConfigurationFormGroup() {
		return new FormGroup<DiskEncryptionConfigurationFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Disk encryption status for an instance. */
	export interface DiskEncryptionStatus {

		/** This is always `sql#diskEncryptionStatus`. */
		kind?: string | null;

		/** KMS key version used to encrypt the Cloud SQL instance resource */
		kmsKeyVersionName?: string | null;
	}

	/** Disk encryption status for an instance. */
	export interface DiskEncryptionStatusFormProperties {

		/** This is always `sql#diskEncryptionStatus`. */
		kind: FormControl<string | null | undefined>,

		/** KMS key version used to encrypt the Cloud SQL instance resource */
		kmsKeyVersionName: FormControl<string | null | undefined>,
	}
	export function CreateDiskEncryptionStatusFormGroup() {
		return new FormGroup<DiskEncryptionStatusFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			kmsKeyVersionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Database instance operation error. */
	export interface OperationError {

		/** Identifies the specific error that occurred. */
		code?: string | null;

		/** This is always `sql#operationError`. */
		kind?: string | null;

		/** Additional information about the error encountered. */
		message?: string | null;
	}

	/** Database instance operation error. */
	export interface OperationErrorFormProperties {

		/** Identifies the specific error that occurred. */
		code: FormControl<string | null | undefined>,

		/** This is always `sql#operationError`. */
		kind: FormControl<string | null | undefined>,

		/** Additional information about the error encountered. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateOperationErrorFormGroup() {
		return new FormGroup<OperationErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BackupRunStatus { SQL_BACKUP_RUN_STATUS_UNSPECIFIED = 'SQL_BACKUP_RUN_STATUS_UNSPECIFIED', ENQUEUED = 'ENQUEUED', OVERDUE = 'OVERDUE', RUNNING = 'RUNNING', FAILED = 'FAILED', SUCCESSFUL = 'SUCCESSFUL', SKIPPED = 'SKIPPED', DELETION_PENDING = 'DELETION_PENDING', DELETION_FAILED = 'DELETION_FAILED', DELETED = 'DELETED' }

	export enum BackupRunType { SQL_BACKUP_RUN_TYPE_UNSPECIFIED = 'SQL_BACKUP_RUN_TYPE_UNSPECIFIED', AUTOMATED = 'AUTOMATED', ON_DEMAND = 'ON_DEMAND' }


	/** Backup run list results. */
	export interface BackupRunsListResponse {

		/** A list of backup runs in reverse chronological order of the enqueued time. */
		items?: Array<BackupRun>;

		/** This is always `sql#backupRunsList`. */
		kind?: string | null;

		/** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken?: string | null;
	}

	/** Backup run list results. */
	export interface BackupRunsListResponseFormProperties {

		/** This is always `sql#backupRunsList`. */
		kind: FormControl<string | null | undefined>,

		/** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateBackupRunsListResponseFormGroup() {
		return new FormGroup<BackupRunsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Binary log coordinates. */
	export interface BinLogCoordinates {

		/** Name of the binary log file for a Cloud SQL instance. */
		binLogFileName?: string | null;

		/** Position (offset) within the binary log file. */
		binLogPosition?: string | null;

		/** This is always `sql#binLogCoordinates`. */
		kind?: string | null;
	}

	/** Binary log coordinates. */
	export interface BinLogCoordinatesFormProperties {

		/** Name of the binary log file for a Cloud SQL instance. */
		binLogFileName: FormControl<string | null | undefined>,

		/** Position (offset) within the binary log file. */
		binLogPosition: FormControl<string | null | undefined>,

		/** This is always `sql#binLogCoordinates`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateBinLogCoordinatesFormGroup() {
		return new FormGroup<BinLogCoordinatesFormProperties>({
			binLogFileName: new FormControl<string | null | undefined>(undefined),
			binLogPosition: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Database instance clone context. */
	export interface CloneContext {

		/** The name of the allocated ip range for the private ip Cloud SQL instance. For example: "google-managed-services-default". If set, the cloned instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])?. Reserved for future use. */
		allocatedIpRange?: string | null;

		/** Binary log coordinates. */
		binLogCoordinates?: BinLogCoordinates;

		/** (SQL Server only) Clone only the specified databases from the source instance. Clone all databases if empty. */
		databaseNames?: Array<string>;

		/** Name of the Cloud SQL instance to be created as a clone. */
		destinationInstanceName?: string | null;

		/** This is always `sql#cloneContext`. */
		kind?: string | null;

		/** Reserved for future use. */
		pitrTimestampMs?: string | null;

		/** Timestamp, if specified, identifies the time to which the source instance is cloned. */
		pointInTime?: string | null;

		/** Optional. (Point-in-time recovery for PostgreSQL only) Clone to an instance in the specified zone. If no zone is specified, clone to the same zone as the source instance. */
		preferredZone?: string | null;
	}

	/** Database instance clone context. */
	export interface CloneContextFormProperties {

		/** The name of the allocated ip range for the private ip Cloud SQL instance. For example: "google-managed-services-default". If set, the cloned instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])?. Reserved for future use. */
		allocatedIpRange: FormControl<string | null | undefined>,

		/** Name of the Cloud SQL instance to be created as a clone. */
		destinationInstanceName: FormControl<string | null | undefined>,

		/** This is always `sql#cloneContext`. */
		kind: FormControl<string | null | undefined>,

		/** Reserved for future use. */
		pitrTimestampMs: FormControl<string | null | undefined>,

		/** Timestamp, if specified, identifies the time to which the source instance is cloned. */
		pointInTime: FormControl<string | null | undefined>,

		/** Optional. (Point-in-time recovery for PostgreSQL only) Clone to an instance in the specified zone. If no zone is specified, clone to the same zone as the source instance. */
		preferredZone: FormControl<string | null | undefined>,
	}
	export function CreateCloneContextFormGroup() {
		return new FormGroup<CloneContextFormProperties>({
			allocatedIpRange: new FormControl<string | null | undefined>(undefined),
			destinationInstanceName: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			pitrTimestampMs: new FormControl<string | null | undefined>(undefined),
			pointInTime: new FormControl<string | null | undefined>(undefined),
			preferredZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Connect settings retrieval response. */
	export interface ConnectSettings {

		/** `SECOND_GEN`: Cloud SQL database instance. `EXTERNAL`: A database server that is not managed by Google. This property is read-only; use the `tier` property in the `settings` object to determine the database type. */
		backendType?: ConnectSettingsBackendType | null;

		/** The database engine type and version. The `databaseVersion` field cannot be changed after instance creation. MySQL instances: `MYSQL_8_0`, `MYSQL_5_7` (default), or `MYSQL_5_6`. PostgreSQL instances: `POSTGRES_9_6`, `POSTGRES_10`, `POSTGRES_11`, `POSTGRES_12` (default), `POSTGRES_13`, or `POSTGRES_14`. SQL Server instances: `SQLSERVER_2017_STANDARD` (default), `SQLSERVER_2017_ENTERPRISE`, `SQLSERVER_2017_EXPRESS`, `SQLSERVER_2017_WEB`, `SQLSERVER_2019_STANDARD`, `SQLSERVER_2019_ENTERPRISE`, `SQLSERVER_2019_EXPRESS`, or `SQLSERVER_2019_WEB`. */
		databaseVersion?: ConnectSettingsDatabaseVersion | null;

		/** The dns name of the instance. */
		dnsName?: string | null;

		/** The assigned IP addresses for the instance. */
		ipAddresses?: Array<IpMapping>;

		/** This is always `sql#connectSettings`. */
		kind?: string | null;

		/** Whether PSC connectivity is enabled for this instance. */
		pscEnabled?: boolean | null;

		/** The cloud region for the instance. For example, `us-central1`, `europe-west1`. The region cannot be changed after instance creation. */
		region?: string | null;

		/** SslCerts Resource */
		serverCaCert?: SslCert;
	}

	/** Connect settings retrieval response. */
	export interface ConnectSettingsFormProperties {

		/** `SECOND_GEN`: Cloud SQL database instance. `EXTERNAL`: A database server that is not managed by Google. This property is read-only; use the `tier` property in the `settings` object to determine the database type. */
		backendType: FormControl<ConnectSettingsBackendType | null | undefined>,

		/** The database engine type and version. The `databaseVersion` field cannot be changed after instance creation. MySQL instances: `MYSQL_8_0`, `MYSQL_5_7` (default), or `MYSQL_5_6`. PostgreSQL instances: `POSTGRES_9_6`, `POSTGRES_10`, `POSTGRES_11`, `POSTGRES_12` (default), `POSTGRES_13`, or `POSTGRES_14`. SQL Server instances: `SQLSERVER_2017_STANDARD` (default), `SQLSERVER_2017_ENTERPRISE`, `SQLSERVER_2017_EXPRESS`, `SQLSERVER_2017_WEB`, `SQLSERVER_2019_STANDARD`, `SQLSERVER_2019_ENTERPRISE`, `SQLSERVER_2019_EXPRESS`, or `SQLSERVER_2019_WEB`. */
		databaseVersion: FormControl<ConnectSettingsDatabaseVersion | null | undefined>,

		/** The dns name of the instance. */
		dnsName: FormControl<string | null | undefined>,

		/** This is always `sql#connectSettings`. */
		kind: FormControl<string | null | undefined>,

		/** Whether PSC connectivity is enabled for this instance. */
		pscEnabled: FormControl<boolean | null | undefined>,

		/** The cloud region for the instance. For example, `us-central1`, `europe-west1`. The region cannot be changed after instance creation. */
		region: FormControl<string | null | undefined>,
	}
	export function CreateConnectSettingsFormGroup() {
		return new FormGroup<ConnectSettingsFormProperties>({
			backendType: new FormControl<ConnectSettingsBackendType | null | undefined>(undefined),
			databaseVersion: new FormControl<ConnectSettingsDatabaseVersion | null | undefined>(undefined),
			dnsName: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			pscEnabled: new FormControl<boolean | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConnectSettingsBackendType { SQL_BACKEND_TYPE_UNSPECIFIED = 'SQL_BACKEND_TYPE_UNSPECIFIED', FIRST_GEN = 'FIRST_GEN', SECOND_GEN = 'SECOND_GEN', EXTERNAL = 'EXTERNAL' }

	export enum ConnectSettingsDatabaseVersion { SQL_DATABASE_VERSION_UNSPECIFIED = 'SQL_DATABASE_VERSION_UNSPECIFIED', MYSQL_5_1 = 'MYSQL_5_1', MYSQL_5_5 = 'MYSQL_5_5', MYSQL_5_6 = 'MYSQL_5_6', MYSQL_5_7 = 'MYSQL_5_7', SQLSERVER_2017_STANDARD = 'SQLSERVER_2017_STANDARD', SQLSERVER_2017_ENTERPRISE = 'SQLSERVER_2017_ENTERPRISE', SQLSERVER_2017_EXPRESS = 'SQLSERVER_2017_EXPRESS', SQLSERVER_2017_WEB = 'SQLSERVER_2017_WEB', POSTGRES_9_6 = 'POSTGRES_9_6', POSTGRES_10 = 'POSTGRES_10', POSTGRES_11 = 'POSTGRES_11', POSTGRES_12 = 'POSTGRES_12', POSTGRES_13 = 'POSTGRES_13', POSTGRES_14 = 'POSTGRES_14', POSTGRES_15 = 'POSTGRES_15', MYSQL_8_0 = 'MYSQL_8_0', MYSQL_8_0_18 = 'MYSQL_8_0_18', MYSQL_8_0_26 = 'MYSQL_8_0_26', MYSQL_8_0_27 = 'MYSQL_8_0_27', MYSQL_8_0_28 = 'MYSQL_8_0_28', MYSQL_8_0_29 = 'MYSQL_8_0_29', MYSQL_8_0_30 = 'MYSQL_8_0_30', MYSQL_8_0_31 = 'MYSQL_8_0_31', MYSQL_8_0_32 = 'MYSQL_8_0_32', MYSQL_8_0_33 = 'MYSQL_8_0_33', MYSQL_8_0_34 = 'MYSQL_8_0_34', MYSQL_8_0_35 = 'MYSQL_8_0_35', MYSQL_8_0_36 = 'MYSQL_8_0_36', SQLSERVER_2019_STANDARD = 'SQLSERVER_2019_STANDARD', SQLSERVER_2019_ENTERPRISE = 'SQLSERVER_2019_ENTERPRISE', SQLSERVER_2019_EXPRESS = 'SQLSERVER_2019_EXPRESS', SQLSERVER_2019_WEB = 'SQLSERVER_2019_WEB', SQLSERVER_2022_STANDARD = 'SQLSERVER_2022_STANDARD', SQLSERVER_2022_ENTERPRISE = 'SQLSERVER_2022_ENTERPRISE', SQLSERVER_2022_EXPRESS = 'SQLSERVER_2022_EXPRESS', SQLSERVER_2022_WEB = 'SQLSERVER_2022_WEB' }


	/** Database instance IP mapping */
	export interface IpMapping {

		/** The IP address assigned. */
		ipAddress?: string | null;

		/** The due time for this IP to be retired in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. This field is only available when the IP is scheduled to be retired. */
		timeToRetire?: string | null;

		/** The type of this IP address. A `PRIMARY` address is a public address that can accept incoming connections. A `PRIVATE` address is a private address that can accept incoming connections. An `OUTGOING` address is the source address of connections originating from the instance, if supported. */
		type?: IpMappingType | null;
	}

	/** Database instance IP mapping */
	export interface IpMappingFormProperties {

		/** The IP address assigned. */
		ipAddress: FormControl<string | null | undefined>,

		/** The due time for this IP to be retired in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. This field is only available when the IP is scheduled to be retired. */
		timeToRetire: FormControl<string | null | undefined>,

		/** The type of this IP address. A `PRIMARY` address is a public address that can accept incoming connections. A `PRIVATE` address is a private address that can accept incoming connections. An `OUTGOING` address is the source address of connections originating from the instance, if supported. */
		type: FormControl<IpMappingType | null | undefined>,
	}
	export function CreateIpMappingFormGroup() {
		return new FormGroup<IpMappingFormProperties>({
			ipAddress: new FormControl<string | null | undefined>(undefined),
			timeToRetire: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<IpMappingType | null | undefined>(undefined),
		});

	}

	export enum IpMappingType { SQL_IP_ADDRESS_TYPE_UNSPECIFIED = 'SQL_IP_ADDRESS_TYPE_UNSPECIFIED', PRIMARY = 'PRIMARY', OUTGOING = 'OUTGOING', PRIVATE = 'PRIVATE', MIGRATED_1ST_GEN = 'MIGRATED_1ST_GEN' }


	/** SslCerts Resource */
	export interface SslCert {

		/** PEM representation. */
		cert?: string | null;

		/** Serial number, as extracted from the certificate. */
		certSerialNumber?: string | null;

		/** User supplied name. Constrained to [a-zA-Z.-_ ]+. */
		commonName?: string | null;

		/** The time when the certificate was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z` */
		createTime?: string | null;

		/** The time when the certificate expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
		expirationTime?: string | null;

		/** Name of the database instance. */
		instance?: string | null;

		/** This is always `sql#sslCert`. */
		kind?: string | null;

		/** The URI of this resource. */
		selfLink?: string | null;

		/** Sha1 Fingerprint. */
		sha1Fingerprint?: string | null;
	}

	/** SslCerts Resource */
	export interface SslCertFormProperties {

		/** PEM representation. */
		cert: FormControl<string | null | undefined>,

		/** Serial number, as extracted from the certificate. */
		certSerialNumber: FormControl<string | null | undefined>,

		/** User supplied name. Constrained to [a-zA-Z.-_ ]+. */
		commonName: FormControl<string | null | undefined>,

		/** The time when the certificate was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z` */
		createTime: FormControl<string | null | undefined>,

		/** The time when the certificate expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
		expirationTime: FormControl<string | null | undefined>,

		/** Name of the database instance. */
		instance: FormControl<string | null | undefined>,

		/** This is always `sql#sslCert`. */
		kind: FormControl<string | null | undefined>,

		/** The URI of this resource. */
		selfLink: FormControl<string | null | undefined>,

		/** Sha1 Fingerprint. */
		sha1Fingerprint: FormControl<string | null | undefined>,
	}
	export function CreateSslCertFormGroup() {
		return new FormGroup<SslCertFormProperties>({
			cert: new FormControl<string | null | undefined>(undefined),
			certSerialNumber: new FormControl<string | null | undefined>(undefined),
			commonName: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			expirationTime: new FormControl<string | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			sha1Fingerprint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data cache configurations. */
	export interface DataCacheConfig {

		/** Whether data cache is enabled for the instance. */
		dataCacheEnabled?: boolean | null;
	}

	/** Data cache configurations. */
	export interface DataCacheConfigFormProperties {

		/** Whether data cache is enabled for the instance. */
		dataCacheEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateDataCacheConfigFormGroup() {
		return new FormGroup<DataCacheConfigFormProperties>({
			dataCacheEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a SQL database on the Cloud SQL instance. */
	export interface Database {

		/** The Cloud SQL charset value. */
		charset?: string | null;

		/** The Cloud SQL collation value. */
		collation?: string | null;

		/** This field is deprecated and will be removed from a future version of the API. */
		etag?: string | null;

		/** The name of the Cloud SQL instance. This does not include the project ID. */
		instance?: string | null;

		/** This is always `sql#database`. */
		kind?: string | null;

		/** The name of the database in the Cloud SQL instance. This does not include the project ID or instance name. */
		name?: string | null;

		/** The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable. */
		project?: string | null;

		/** The URI of this resource. */
		selfLink?: string | null;

		/** Represents a Sql Server database on the Cloud SQL instance. */
		sqlserverDatabaseDetails?: SqlServerDatabaseDetails;
	}

	/** Represents a SQL database on the Cloud SQL instance. */
	export interface DatabaseFormProperties {

		/** The Cloud SQL charset value. */
		charset: FormControl<string | null | undefined>,

		/** The Cloud SQL collation value. */
		collation: FormControl<string | null | undefined>,

		/** This field is deprecated and will be removed from a future version of the API. */
		etag: FormControl<string | null | undefined>,

		/** The name of the Cloud SQL instance. This does not include the project ID. */
		instance: FormControl<string | null | undefined>,

		/** This is always `sql#database`. */
		kind: FormControl<string | null | undefined>,

		/** The name of the database in the Cloud SQL instance. This does not include the project ID or instance name. */
		name: FormControl<string | null | undefined>,

		/** The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable. */
		project: FormControl<string | null | undefined>,

		/** The URI of this resource. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseFormGroup() {
		return new FormGroup<DatabaseFormProperties>({
			charset: new FormControl<string | null | undefined>(undefined),
			collation: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Sql Server database on the Cloud SQL instance. */
	export interface SqlServerDatabaseDetails {

		/** The version of SQL Server with which the database is to be made compatible */
		compatibilityLevel?: number | null;

		/** The recovery model of a SQL Server database */
		recoveryModel?: string | null;
	}

	/** Represents a Sql Server database on the Cloud SQL instance. */
	export interface SqlServerDatabaseDetailsFormProperties {

		/** The version of SQL Server with which the database is to be made compatible */
		compatibilityLevel: FormControl<number | null | undefined>,

		/** The recovery model of a SQL Server database */
		recoveryModel: FormControl<string | null | undefined>,
	}
	export function CreateSqlServerDatabaseDetailsFormGroup() {
		return new FormGroup<SqlServerDatabaseDetailsFormProperties>({
			compatibilityLevel: new FormControl<number | null | undefined>(undefined),
			recoveryModel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Database flags for Cloud SQL instances. */
	export interface DatabaseFlags {

		/** The name of the flag. These flags are passed at instance startup, so include both server options and system variables. Flags are specified with underscores, not hyphens. For more information, see [Configuring Database Flags](https://cloud.google.com/sql/docs/mysql/flags) in the Cloud SQL documentation. */
		name?: string | null;

		/** The value of the flag. Boolean flags are set to `on` for true and `off` for false. This field must be omitted if the flag doesn't take a value. */
		value?: string | null;
	}

	/** Database flags for Cloud SQL instances. */
	export interface DatabaseFlagsFormProperties {

		/** The name of the flag. These flags are passed at instance startup, so include both server options and system variables. Flags are specified with underscores, not hyphens. For more information, see [Configuring Database Flags](https://cloud.google.com/sql/docs/mysql/flags) in the Cloud SQL documentation. */
		name: FormControl<string | null | undefined>,

		/** The value of the flag. Boolean flags are set to `on` for true and `off` for false. This field must be omitted if the flag doesn't take a value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseFlagsFormGroup() {
		return new FormGroup<DatabaseFlagsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Cloud SQL instance resource. */
	export interface DatabaseInstance {

		/** Output only. List all maintenance versions applicable on the instance */
		availableMaintenanceVersions?: Array<string>;

		/** The backend type. `SECOND_GEN`: Cloud SQL database instance. `EXTERNAL`: A database server that is not managed by Google. This property is read-only; use the `tier` property in the `settings` object to determine the database type. */
		backendType?: ConnectSettingsBackendType | null;

		/** Connection name of the Cloud SQL instance used in connection strings. */
		connectionName?: string | null;

		/** Output only. The time when the instance was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
		createTime?: string | null;

		/** The current disk usage of the instance in bytes. This property has been deprecated. Use the "cloudsql.googleapis.com/database/disk/bytes_used" metric in Cloud Monitoring API instead. Please see [this announcement](https://groups.google.com/d/msg/google-cloud-sql-announce/I_7-F9EBhT0/BtvFtdFeAgAJ) for details. */
		currentDiskSize?: string | null;

		/** Output only. Stores the current database version running on the instance including minor version such as `MYSQL_8_0_18`. */
		databaseInstalledVersion?: string | null;

		/** The database engine type and version. The `databaseVersion` field cannot be changed after instance creation. */
		databaseVersion?: ConnectSettingsDatabaseVersion | null;

		/** Disk encryption configuration for an instance. */
		diskEncryptionConfiguration?: DiskEncryptionConfiguration;

		/** Disk encryption status for an instance. */
		diskEncryptionStatus?: DiskEncryptionStatus;

		/** Output only. The dns name of the instance. */
		dnsName?: string | null;

		/** This field is deprecated and will be removed from a future version of the API. Use the `settings.settingsVersion` field instead. */
		etag?: string | null;

		/** The name and status of the failover replica. */
		failoverReplica?: DatabaseInstanceFailoverReplica;

		/** The Compute Engine zone that the instance is currently serving from. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary zone. WARNING: Changing this might restart the instance. */
		gceZone?: string | null;

		/** The instance type. */
		instanceType?: DatabaseInstanceInstanceType | null;

		/** The assigned IP addresses for the instance. */
		ipAddresses?: Array<IpMapping>;

		/** The IPv6 address assigned to the instance. (Deprecated) This property was applicable only to First Generation instances. */
		ipv6Address?: string | null;

		/** This is always `sql#instance`. */
		kind?: string | null;

		/** The current software version on the instance. */
		maintenanceVersion?: string | null;

		/** The name of the instance which will act as primary in the replication setup. */
		masterInstanceName?: string | null;

		/** The maximum disk size of the instance in bytes. */
		maxDiskSize?: string | null;

		/** Name of the Cloud SQL instance. This does not include the project ID. */
		name?: string | null;

		/** On-premises instance configuration. */
		onPremisesConfiguration?: OnPremisesConfiguration;

		/** This message wraps up the information written by out-of-disk detection job. */
		outOfDiskReport?: SqlOutOfDiskReport;

		/** Output only. DEPRECATED: please use write_endpoint instead. */
		primaryDnsName?: string | null;

		/** The project ID of the project containing the Cloud SQL instance. The Google apps domain is prefixed if applicable. */
		project?: string | null;

		/** Output only. The link to service attachment of PSC instance. */
		pscServiceAttachmentLink?: string | null;

		/** The geographical region. Can be: * `us-central` (`FIRST_GEN` instances only) * `us-central1` (`SECOND_GEN` instances only) * `asia-east1` or `europe-west1`. Defaults to `us-central` or `us-central1` depending on the instance type. The region cannot be changed after instance creation. */
		region?: string | null;

		/** Read-replica configuration for connecting to the primary instance. */
		replicaConfiguration?: ReplicaConfiguration;

		/** The replicas of the instance. */
		replicaNames?: Array<string>;

		/** Initial root password. Use only on creation. You must set root passwords before you can connect to PostgreSQL instances. */
		rootPassword?: string | null;

		/** The status indicating if instance satisfiesPzs. Reserved for future use. */
		satisfiesPzs?: boolean | null;

		/** Any scheduled maintenance for this instance. */
		scheduledMaintenance?: SqlScheduledMaintenance;

		/** The Compute Engine zone that the failover instance is currently serving from for a regional instance. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary/failover zone. */
		secondaryGceZone?: string | null;

		/** The URI of this resource. */
		selfLink?: string | null;

		/** SslCerts Resource */
		serverCaCert?: SslCert;

		/** The service account email address assigned to the instance.\This property is read-only. */
		serviceAccountEmailAddress?: string | null;

		/** Database instance settings. */
		settings?: Settings;
		sqlNetworkArchitecture?: DatabaseInstanceSqlNetworkArchitecture | null;

		/** The current serving state of the Cloud SQL instance. */
		state?: DatabaseInstanceState | null;

		/** If the instance state is SUSPENDED, the reason for the suspension. */
		suspensionReason?: Array<string>;

		/** Output only. The dns name of the primary instance in a replication group. */
		writeEndpoint?: string | null;
	}

	/** A Cloud SQL instance resource. */
	export interface DatabaseInstanceFormProperties {

		/** The backend type. `SECOND_GEN`: Cloud SQL database instance. `EXTERNAL`: A database server that is not managed by Google. This property is read-only; use the `tier` property in the `settings` object to determine the database type. */
		backendType: FormControl<ConnectSettingsBackendType | null | undefined>,

		/** Connection name of the Cloud SQL instance used in connection strings. */
		connectionName: FormControl<string | null | undefined>,

		/** Output only. The time when the instance was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
		createTime: FormControl<string | null | undefined>,

		/** The current disk usage of the instance in bytes. This property has been deprecated. Use the "cloudsql.googleapis.com/database/disk/bytes_used" metric in Cloud Monitoring API instead. Please see [this announcement](https://groups.google.com/d/msg/google-cloud-sql-announce/I_7-F9EBhT0/BtvFtdFeAgAJ) for details. */
		currentDiskSize: FormControl<string | null | undefined>,

		/** Output only. Stores the current database version running on the instance including minor version such as `MYSQL_8_0_18`. */
		databaseInstalledVersion: FormControl<string | null | undefined>,

		/** The database engine type and version. The `databaseVersion` field cannot be changed after instance creation. */
		databaseVersion: FormControl<ConnectSettingsDatabaseVersion | null | undefined>,

		/** Output only. The dns name of the instance. */
		dnsName: FormControl<string | null | undefined>,

		/** This field is deprecated and will be removed from a future version of the API. Use the `settings.settingsVersion` field instead. */
		etag: FormControl<string | null | undefined>,

		/** The Compute Engine zone that the instance is currently serving from. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary zone. WARNING: Changing this might restart the instance. */
		gceZone: FormControl<string | null | undefined>,

		/** The instance type. */
		instanceType: FormControl<DatabaseInstanceInstanceType | null | undefined>,

		/** The IPv6 address assigned to the instance. (Deprecated) This property was applicable only to First Generation instances. */
		ipv6Address: FormControl<string | null | undefined>,

		/** This is always `sql#instance`. */
		kind: FormControl<string | null | undefined>,

		/** The current software version on the instance. */
		maintenanceVersion: FormControl<string | null | undefined>,

		/** The name of the instance which will act as primary in the replication setup. */
		masterInstanceName: FormControl<string | null | undefined>,

		/** The maximum disk size of the instance in bytes. */
		maxDiskSize: FormControl<string | null | undefined>,

		/** Name of the Cloud SQL instance. This does not include the project ID. */
		name: FormControl<string | null | undefined>,

		/** Output only. DEPRECATED: please use write_endpoint instead. */
		primaryDnsName: FormControl<string | null | undefined>,

		/** The project ID of the project containing the Cloud SQL instance. The Google apps domain is prefixed if applicable. */
		project: FormControl<string | null | undefined>,

		/** Output only. The link to service attachment of PSC instance. */
		pscServiceAttachmentLink: FormControl<string | null | undefined>,

		/** The geographical region. Can be: * `us-central` (`FIRST_GEN` instances only) * `us-central1` (`SECOND_GEN` instances only) * `asia-east1` or `europe-west1`. Defaults to `us-central` or `us-central1` depending on the instance type. The region cannot be changed after instance creation. */
		region: FormControl<string | null | undefined>,

		/** Initial root password. Use only on creation. You must set root passwords before you can connect to PostgreSQL instances. */
		rootPassword: FormControl<string | null | undefined>,

		/** The status indicating if instance satisfiesPzs. Reserved for future use. */
		satisfiesPzs: FormControl<boolean | null | undefined>,

		/** The Compute Engine zone that the failover instance is currently serving from for a regional instance. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary/failover zone. */
		secondaryGceZone: FormControl<string | null | undefined>,

		/** The URI of this resource. */
		selfLink: FormControl<string | null | undefined>,

		/** The service account email address assigned to the instance.\This property is read-only. */
		serviceAccountEmailAddress: FormControl<string | null | undefined>,
		sqlNetworkArchitecture: FormControl<DatabaseInstanceSqlNetworkArchitecture | null | undefined>,

		/** The current serving state of the Cloud SQL instance. */
		state: FormControl<DatabaseInstanceState | null | undefined>,

		/** Output only. The dns name of the primary instance in a replication group. */
		writeEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseInstanceFormGroup() {
		return new FormGroup<DatabaseInstanceFormProperties>({
			backendType: new FormControl<ConnectSettingsBackendType | null | undefined>(undefined),
			connectionName: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			currentDiskSize: new FormControl<string | null | undefined>(undefined),
			databaseInstalledVersion: new FormControl<string | null | undefined>(undefined),
			databaseVersion: new FormControl<ConnectSettingsDatabaseVersion | null | undefined>(undefined),
			dnsName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			gceZone: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<DatabaseInstanceInstanceType | null | undefined>(undefined),
			ipv6Address: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			maintenanceVersion: new FormControl<string | null | undefined>(undefined),
			masterInstanceName: new FormControl<string | null | undefined>(undefined),
			maxDiskSize: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			primaryDnsName: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			pscServiceAttachmentLink: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			rootPassword: new FormControl<string | null | undefined>(undefined),
			satisfiesPzs: new FormControl<boolean | null | undefined>(undefined),
			secondaryGceZone: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			serviceAccountEmailAddress: new FormControl<string | null | undefined>(undefined),
			sqlNetworkArchitecture: new FormControl<DatabaseInstanceSqlNetworkArchitecture | null | undefined>(undefined),
			state: new FormControl<DatabaseInstanceState | null | undefined>(undefined),
			writeEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DatabaseInstanceFailoverReplica {

		/** The availability status of the failover replica. A false status indicates that the failover replica is out of sync. The primary instance can only failover to the failover replica when the status is true. */
		available?: boolean | null;

		/** The name of the failover replica. If specified at instance creation, a failover replica is created for the instance. The name doesn't include the project ID. */
		name?: string | null;
	}
	export interface DatabaseInstanceFailoverReplicaFormProperties {

		/** The availability status of the failover replica. A false status indicates that the failover replica is out of sync. The primary instance can only failover to the failover replica when the status is true. */
		available: FormControl<boolean | null | undefined>,

		/** The name of the failover replica. If specified at instance creation, a failover replica is created for the instance. The name doesn't include the project ID. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseInstanceFailoverReplicaFormGroup() {
		return new FormGroup<DatabaseInstanceFailoverReplicaFormProperties>({
			available: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DatabaseInstanceInstanceType { SQL_INSTANCE_TYPE_UNSPECIFIED = 'SQL_INSTANCE_TYPE_UNSPECIFIED', CLOUD_SQL_INSTANCE = 'CLOUD_SQL_INSTANCE', ON_PREMISES_INSTANCE = 'ON_PREMISES_INSTANCE', READ_REPLICA_INSTANCE = 'READ_REPLICA_INSTANCE' }


	/** On-premises instance configuration. */
	export interface OnPremisesConfiguration {

		/** PEM representation of the trusted CA's x509 certificate. */
		caCertificate?: string | null;

		/** PEM representation of the replica's x509 certificate. */
		clientCertificate?: string | null;

		/** PEM representation of the replica's private key. The corresponsing public key is encoded in the client's certificate. */
		clientKey?: string | null;

		/** The dump file to create the Cloud SQL replica. */
		dumpFilePath?: string | null;

		/** The host and port of the on-premises instance in host:port format */
		hostPort?: string | null;

		/** This is always `sql#onPremisesConfiguration`. */
		kind?: string | null;

		/** The password for connecting to on-premises instance. */
		password?: string | null;

		/** Reference to another Cloud SQL instance. */
		sourceInstance?: InstanceReference;

		/** The username for connecting to on-premises instance. */
		username?: string | null;
	}

	/** On-premises instance configuration. */
	export interface OnPremisesConfigurationFormProperties {

		/** PEM representation of the trusted CA's x509 certificate. */
		caCertificate: FormControl<string | null | undefined>,

		/** PEM representation of the replica's x509 certificate. */
		clientCertificate: FormControl<string | null | undefined>,

		/** PEM representation of the replica's private key. The corresponsing public key is encoded in the client's certificate. */
		clientKey: FormControl<string | null | undefined>,

		/** The dump file to create the Cloud SQL replica. */
		dumpFilePath: FormControl<string | null | undefined>,

		/** The host and port of the on-premises instance in host:port format */
		hostPort: FormControl<string | null | undefined>,

		/** This is always `sql#onPremisesConfiguration`. */
		kind: FormControl<string | null | undefined>,

		/** The password for connecting to on-premises instance. */
		password: FormControl<string | null | undefined>,

		/** The username for connecting to on-premises instance. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateOnPremisesConfigurationFormGroup() {
		return new FormGroup<OnPremisesConfigurationFormProperties>({
			caCertificate: new FormControl<string | null | undefined>(undefined),
			clientCertificate: new FormControl<string | null | undefined>(undefined),
			clientKey: new FormControl<string | null | undefined>(undefined),
			dumpFilePath: new FormControl<string | null | undefined>(undefined),
			hostPort: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reference to another Cloud SQL instance. */
	export interface InstanceReference {

		/** The name of the Cloud SQL instance being referenced. This does not include the project ID. */
		name?: string | null;

		/** The project ID of the Cloud SQL instance being referenced. The default is the same project ID as the instance references it. */
		project?: string | null;

		/** The region of the Cloud SQL instance being referenced. */
		region?: string | null;
	}

	/** Reference to another Cloud SQL instance. */
	export interface InstanceReferenceFormProperties {

		/** The name of the Cloud SQL instance being referenced. This does not include the project ID. */
		name: FormControl<string | null | undefined>,

		/** The project ID of the Cloud SQL instance being referenced. The default is the same project ID as the instance references it. */
		project: FormControl<string | null | undefined>,

		/** The region of the Cloud SQL instance being referenced. */
		region: FormControl<string | null | undefined>,
	}
	export function CreateInstanceReferenceFormGroup() {
		return new FormGroup<InstanceReferenceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This message wraps up the information written by out-of-disk detection job. */
	export interface SqlOutOfDiskReport {

		/** The minimum recommended increase size in GigaBytes This field is consumed by the frontend * Writers: * the proactive database wellness job for OOD. * Readers: */
		sqlMinRecommendedIncreaseSizeGb?: number | null;

		/** This field represents the state generated by the proactive database wellness job for OutOfDisk issues. * Writers: * the proactive database wellness job for OOD. * Readers: * the proactive database wellness job */
		sqlOutOfDiskState?: SqlOutOfDiskReportSqlOutOfDiskState | null;
	}

	/** This message wraps up the information written by out-of-disk detection job. */
	export interface SqlOutOfDiskReportFormProperties {

		/** The minimum recommended increase size in GigaBytes This field is consumed by the frontend * Writers: * the proactive database wellness job for OOD. * Readers: */
		sqlMinRecommendedIncreaseSizeGb: FormControl<number | null | undefined>,

		/** This field represents the state generated by the proactive database wellness job for OutOfDisk issues. * Writers: * the proactive database wellness job for OOD. * Readers: * the proactive database wellness job */
		sqlOutOfDiskState: FormControl<SqlOutOfDiskReportSqlOutOfDiskState | null | undefined>,
	}
	export function CreateSqlOutOfDiskReportFormGroup() {
		return new FormGroup<SqlOutOfDiskReportFormProperties>({
			sqlMinRecommendedIncreaseSizeGb: new FormControl<number | null | undefined>(undefined),
			sqlOutOfDiskState: new FormControl<SqlOutOfDiskReportSqlOutOfDiskState | null | undefined>(undefined),
		});

	}

	export enum SqlOutOfDiskReportSqlOutOfDiskState { SQL_OUT_OF_DISK_STATE_UNSPECIFIED = 'SQL_OUT_OF_DISK_STATE_UNSPECIFIED', NORMAL = 'NORMAL', SOFT_SHUTDOWN = 'SOFT_SHUTDOWN' }


	/** Read-replica configuration for connecting to the primary instance. */
	export interface ReplicaConfiguration {

		/** Optional. Specifies if a SQL Server replica is a cascadable replica. A cascadable replica is a SQL Server cross region replica that supports replica(s) under it. */
		cascadableReplica?: boolean | null;

		/** Specifies if the replica is the failover target. If the field is set to `true`, the replica will be designated as a failover replica. In case the primary instance fails, the replica instance will be promoted as the new primary instance. Only one replica can be specified as failover target, and the replica has to be in different zone with the primary instance. */
		failoverTarget?: boolean | null;

		/** This is always `sql#replicaConfiguration`. */
		kind?: string | null;

		/** Read-replica configuration specific to MySQL databases. */
		mysqlReplicaConfiguration?: MySqlReplicaConfiguration;
	}

	/** Read-replica configuration for connecting to the primary instance. */
	export interface ReplicaConfigurationFormProperties {

		/** Optional. Specifies if a SQL Server replica is a cascadable replica. A cascadable replica is a SQL Server cross region replica that supports replica(s) under it. */
		cascadableReplica: FormControl<boolean | null | undefined>,

		/** Specifies if the replica is the failover target. If the field is set to `true`, the replica will be designated as a failover replica. In case the primary instance fails, the replica instance will be promoted as the new primary instance. Only one replica can be specified as failover target, and the replica has to be in different zone with the primary instance. */
		failoverTarget: FormControl<boolean | null | undefined>,

		/** This is always `sql#replicaConfiguration`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateReplicaConfigurationFormGroup() {
		return new FormGroup<ReplicaConfigurationFormProperties>({
			cascadableReplica: new FormControl<boolean | null | undefined>(undefined),
			failoverTarget: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Read-replica configuration specific to MySQL databases. */
	export interface MySqlReplicaConfiguration {

		/** PEM representation of the trusted CA's x509 certificate. */
		caCertificate?: string | null;

		/** PEM representation of the replica's x509 certificate. */
		clientCertificate?: string | null;

		/** PEM representation of the replica's private key. The corresponsing public key is encoded in the client's certificate. */
		clientKey?: string | null;

		/** Seconds to wait between connect retries. MySQL's default is 60 seconds. */
		connectRetryInterval?: number | null;

		/** Path to a SQL dump file in Google Cloud Storage from which the replica instance is to be created. The URI is in the form gs://bucketName/fileName. Compressed gzip files (.gz) are also supported. Dumps have the binlog co-ordinates from which replication begins. This can be accomplished by setting --master-data to 1 when using mysqldump. */
		dumpFilePath?: string | null;

		/** This is always `sql#mysqlReplicaConfiguration`. */
		kind?: string | null;

		/** Interval in milliseconds between replication heartbeats. */
		masterHeartbeatPeriod?: string | null;

		/** The password for the replication connection. */
		password?: string | null;

		/** A list of permissible ciphers to use for SSL encryption. */
		sslCipher?: string | null;

		/** The username for the replication connection. */
		username?: string | null;

		/** Whether or not to check the primary instance's Common Name value in the certificate that it sends during the SSL handshake. */
		verifyServerCertificate?: boolean | null;
	}

	/** Read-replica configuration specific to MySQL databases. */
	export interface MySqlReplicaConfigurationFormProperties {

		/** PEM representation of the trusted CA's x509 certificate. */
		caCertificate: FormControl<string | null | undefined>,

		/** PEM representation of the replica's x509 certificate. */
		clientCertificate: FormControl<string | null | undefined>,

		/** PEM representation of the replica's private key. The corresponsing public key is encoded in the client's certificate. */
		clientKey: FormControl<string | null | undefined>,

		/** Seconds to wait between connect retries. MySQL's default is 60 seconds. */
		connectRetryInterval: FormControl<number | null | undefined>,

		/** Path to a SQL dump file in Google Cloud Storage from which the replica instance is to be created. The URI is in the form gs://bucketName/fileName. Compressed gzip files (.gz) are also supported. Dumps have the binlog co-ordinates from which replication begins. This can be accomplished by setting --master-data to 1 when using mysqldump. */
		dumpFilePath: FormControl<string | null | undefined>,

		/** This is always `sql#mysqlReplicaConfiguration`. */
		kind: FormControl<string | null | undefined>,

		/** Interval in milliseconds between replication heartbeats. */
		masterHeartbeatPeriod: FormControl<string | null | undefined>,

		/** The password for the replication connection. */
		password: FormControl<string | null | undefined>,

		/** A list of permissible ciphers to use for SSL encryption. */
		sslCipher: FormControl<string | null | undefined>,

		/** The username for the replication connection. */
		username: FormControl<string | null | undefined>,

		/** Whether or not to check the primary instance's Common Name value in the certificate that it sends during the SSL handshake. */
		verifyServerCertificate: FormControl<boolean | null | undefined>,
	}
	export function CreateMySqlReplicaConfigurationFormGroup() {
		return new FormGroup<MySqlReplicaConfigurationFormProperties>({
			caCertificate: new FormControl<string | null | undefined>(undefined),
			clientCertificate: new FormControl<string | null | undefined>(undefined),
			clientKey: new FormControl<string | null | undefined>(undefined),
			connectRetryInterval: new FormControl<number | null | undefined>(undefined),
			dumpFilePath: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			masterHeartbeatPeriod: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			sslCipher: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			verifyServerCertificate: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Any scheduled maintenance for this instance. */
	export interface SqlScheduledMaintenance {
		canDefer?: boolean | null;

		/** If the scheduled maintenance can be rescheduled. */
		canReschedule?: boolean | null;

		/** Maintenance cannot be rescheduled to start beyond this deadline. */
		scheduleDeadlineTime?: string | null;

		/** The start time of any upcoming scheduled maintenance for this instance. */
		startTime?: string | null;
	}

	/** Any scheduled maintenance for this instance. */
	export interface SqlScheduledMaintenanceFormProperties {
		canDefer: FormControl<boolean | null | undefined>,

		/** If the scheduled maintenance can be rescheduled. */
		canReschedule: FormControl<boolean | null | undefined>,

		/** Maintenance cannot be rescheduled to start beyond this deadline. */
		scheduleDeadlineTime: FormControl<string | null | undefined>,

		/** The start time of any upcoming scheduled maintenance for this instance. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateSqlScheduledMaintenanceFormGroup() {
		return new FormGroup<SqlScheduledMaintenanceFormProperties>({
			canDefer: new FormControl<boolean | null | undefined>(undefined),
			canReschedule: new FormControl<boolean | null | undefined>(undefined),
			scheduleDeadlineTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Database instance settings. */
	export interface Settings {

		/** The activation policy specifies when the instance is activated; it is applicable only when the instance state is RUNNABLE. Valid values: * `ALWAYS`: The instance is on, and remains so even in the absence of connection requests. * `NEVER`: The instance is off; it is not activated, even if a connection request arrives. */
		activationPolicy?: SettingsActivationPolicy | null;

		/** Active Directory configuration, relevant only for Cloud SQL for SQL Server. */
		activeDirectoryConfig?: SqlActiveDirectoryConfig;

		/** Specifies options for controlling advanced machine features. */
		advancedMachineFeatures?: AdvancedMachineFeatures;

		/** The App Engine app IDs that can access this instance. (Deprecated) Applied to First Generation instances only. */
		authorizedGaeApplications?: Array<string>;

		/** Availability type. Potential values: * `ZONAL`: The instance serves data from only one zone. Outages in that zone affect data accessibility. * `REGIONAL`: The instance can serve data from more than one zone in a region (it is highly available)./ For more information, see [Overview of the High Availability Configuration](https://cloud.google.com/sql/docs/mysql/high-availability). */
		availabilityType?: SettingsAvailabilityType | null;

		/** Database instance backup configuration. */
		backupConfiguration?: BackupConfiguration;

		/** The name of server Instance collation. */
		collation?: string | null;

		/** Specifies if connections must use Cloud SQL connectors. Option values include the following: `NOT_REQUIRED` (Cloud SQL instances can be connected without Cloud SQL Connectors) and `REQUIRED` (Only allow connections that use Cloud SQL Connectors). Note that using REQUIRED disables all existing authorized networks. If this field is not specified when creating a new instance, NOT_REQUIRED is used. If this field is not specified when patching or updating an existing instance, it is left unchanged in the instance. */
		connectorEnforcement?: SettingsConnectorEnforcement | null;

		/** Configuration specific to read replica instances. Indicates whether database flags for crash-safe replication are enabled. This property was only applicable to First Generation instances. */
		crashSafeReplicationEnabled?: boolean | null;

		/** Data cache configurations. */
		dataCacheConfig?: DataCacheConfig;

		/** The size of data disk, in GB. The data disk size minimum is 10GB. */
		dataDiskSizeGb?: string | null;

		/** The type of data disk: `PD_SSD` (default) or `PD_HDD`. Not used for First Generation instances. */
		dataDiskType?: SettingsDataDiskType | null;

		/** The database flags passed to the instance at startup. */
		databaseFlags?: Array<DatabaseFlags>;

		/** Configuration specific to read replica instances. Indicates whether replication is enabled or not. WARNING: Changing this restarts the instance. */
		databaseReplicationEnabled?: boolean | null;

		/** Configuration to protect against accidental instance deletion. */
		deletionProtectionEnabled?: boolean | null;

		/** Deny maintenance periods */
		denyMaintenancePeriods?: Array<DenyMaintenancePeriod>;

		/** Optional. The edition of the instance. */
		edition?: SettingsEdition | null;

		/** Insights configuration. This specifies when Cloud SQL Insights feature is enabled and optional configuration. */
		insightsConfig?: InsightsConfig;

		/** IP Management configuration. */
		ipConfiguration?: IpConfiguration;

		/** This is always `sql#settings`. */
		kind?: string | null;

		/** Preferred location. This specifies where a Cloud SQL instance is located. Note that if the preferred location is not available, the instance will be located as close as possible within the region. Only one location may be specified. */
		locationPreference?: LocationPreference;

		/** Maintenance window. This specifies when a Cloud SQL instance is restarted for system maintenance purposes. */
		maintenanceWindow?: MaintenanceWindow;

		/** Database instance local user password validation policy */
		passwordValidationPolicy?: PasswordValidationPolicy;

		/** The pricing plan for this instance. This can be either `PER_USE` or `PACKAGE`. Only `PER_USE` is supported for Second Generation instances. */
		pricingPlan?: SettingsPricingPlan | null;

		/** The type of replication this instance uses. This can be either `ASYNCHRONOUS` or `SYNCHRONOUS`. (Deprecated) This property was only applicable to First Generation instances. */
		replicationType?: SettingsReplicationType | null;

		/** The version of instance settings. This is a required field for update method to make sure concurrent updates are handled properly. During update, use the most recent settingsVersion value for this instance and do not try to update this value. */
		settingsVersion?: string | null;

		/** SQL Server specific audit configuration. */
		sqlServerAuditConfig?: SqlServerAuditConfig;

		/** Configuration to increase storage size automatically. The default value is true. */
		storageAutoResize?: boolean | null;

		/** The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit. */
		storageAutoResizeLimit?: string | null;

		/** The tier (or machine type) for this instance, for example `db-custom-1-3840`. WARNING: Changing this restarts the instance. */
		tier?: string | null;

		/** Server timezone, relevant only for Cloud SQL for SQL Server. */
		timeZone?: string | null;

		/** User-provided labels, represented as a dictionary where each label is a single key value pair. */
		userLabels?: {[id: string]: string };
	}

	/** Database instance settings. */
	export interface SettingsFormProperties {

		/** The activation policy specifies when the instance is activated; it is applicable only when the instance state is RUNNABLE. Valid values: * `ALWAYS`: The instance is on, and remains so even in the absence of connection requests. * `NEVER`: The instance is off; it is not activated, even if a connection request arrives. */
		activationPolicy: FormControl<SettingsActivationPolicy | null | undefined>,

		/** Availability type. Potential values: * `ZONAL`: The instance serves data from only one zone. Outages in that zone affect data accessibility. * `REGIONAL`: The instance can serve data from more than one zone in a region (it is highly available)./ For more information, see [Overview of the High Availability Configuration](https://cloud.google.com/sql/docs/mysql/high-availability). */
		availabilityType: FormControl<SettingsAvailabilityType | null | undefined>,

		/** The name of server Instance collation. */
		collation: FormControl<string | null | undefined>,

		/** Specifies if connections must use Cloud SQL connectors. Option values include the following: `NOT_REQUIRED` (Cloud SQL instances can be connected without Cloud SQL Connectors) and `REQUIRED` (Only allow connections that use Cloud SQL Connectors). Note that using REQUIRED disables all existing authorized networks. If this field is not specified when creating a new instance, NOT_REQUIRED is used. If this field is not specified when patching or updating an existing instance, it is left unchanged in the instance. */
		connectorEnforcement: FormControl<SettingsConnectorEnforcement | null | undefined>,

		/** Configuration specific to read replica instances. Indicates whether database flags for crash-safe replication are enabled. This property was only applicable to First Generation instances. */
		crashSafeReplicationEnabled: FormControl<boolean | null | undefined>,

		/** The size of data disk, in GB. The data disk size minimum is 10GB. */
		dataDiskSizeGb: FormControl<string | null | undefined>,

		/** The type of data disk: `PD_SSD` (default) or `PD_HDD`. Not used for First Generation instances. */
		dataDiskType: FormControl<SettingsDataDiskType | null | undefined>,

		/** Configuration specific to read replica instances. Indicates whether replication is enabled or not. WARNING: Changing this restarts the instance. */
		databaseReplicationEnabled: FormControl<boolean | null | undefined>,

		/** Configuration to protect against accidental instance deletion. */
		deletionProtectionEnabled: FormControl<boolean | null | undefined>,

		/** Optional. The edition of the instance. */
		edition: FormControl<SettingsEdition | null | undefined>,

		/** This is always `sql#settings`. */
		kind: FormControl<string | null | undefined>,

		/** The pricing plan for this instance. This can be either `PER_USE` or `PACKAGE`. Only `PER_USE` is supported for Second Generation instances. */
		pricingPlan: FormControl<SettingsPricingPlan | null | undefined>,

		/** The type of replication this instance uses. This can be either `ASYNCHRONOUS` or `SYNCHRONOUS`. (Deprecated) This property was only applicable to First Generation instances. */
		replicationType: FormControl<SettingsReplicationType | null | undefined>,

		/** The version of instance settings. This is a required field for update method to make sure concurrent updates are handled properly. During update, use the most recent settingsVersion value for this instance and do not try to update this value. */
		settingsVersion: FormControl<string | null | undefined>,

		/** Configuration to increase storage size automatically. The default value is true. */
		storageAutoResize: FormControl<boolean | null | undefined>,

		/** The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit. */
		storageAutoResizeLimit: FormControl<string | null | undefined>,

		/** The tier (or machine type) for this instance, for example `db-custom-1-3840`. WARNING: Changing this restarts the instance. */
		tier: FormControl<string | null | undefined>,

		/** Server timezone, relevant only for Cloud SQL for SQL Server. */
		timeZone: FormControl<string | null | undefined>,

		/** User-provided labels, represented as a dictionary where each label is a single key value pair. */
		userLabels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSettingsFormGroup() {
		return new FormGroup<SettingsFormProperties>({
			activationPolicy: new FormControl<SettingsActivationPolicy | null | undefined>(undefined),
			availabilityType: new FormControl<SettingsAvailabilityType | null | undefined>(undefined),
			collation: new FormControl<string | null | undefined>(undefined),
			connectorEnforcement: new FormControl<SettingsConnectorEnforcement | null | undefined>(undefined),
			crashSafeReplicationEnabled: new FormControl<boolean | null | undefined>(undefined),
			dataDiskSizeGb: new FormControl<string | null | undefined>(undefined),
			dataDiskType: new FormControl<SettingsDataDiskType | null | undefined>(undefined),
			databaseReplicationEnabled: new FormControl<boolean | null | undefined>(undefined),
			deletionProtectionEnabled: new FormControl<boolean | null | undefined>(undefined),
			edition: new FormControl<SettingsEdition | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			pricingPlan: new FormControl<SettingsPricingPlan | null | undefined>(undefined),
			replicationType: new FormControl<SettingsReplicationType | null | undefined>(undefined),
			settingsVersion: new FormControl<string | null | undefined>(undefined),
			storageAutoResize: new FormControl<boolean | null | undefined>(undefined),
			storageAutoResizeLimit: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
			userLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum SettingsActivationPolicy { SQL_ACTIVATION_POLICY_UNSPECIFIED = 'SQL_ACTIVATION_POLICY_UNSPECIFIED', ALWAYS = 'ALWAYS', NEVER = 'NEVER', ON_DEMAND = 'ON_DEMAND' }


	/** Active Directory configuration, relevant only for Cloud SQL for SQL Server. */
	export interface SqlActiveDirectoryConfig {

		/** The name of the domain (e.g., mydomain.com). */
		domain?: string | null;

		/** This is always sql#activeDirectoryConfig. */
		kind?: string | null;
	}

	/** Active Directory configuration, relevant only for Cloud SQL for SQL Server. */
	export interface SqlActiveDirectoryConfigFormProperties {

		/** The name of the domain (e.g., mydomain.com). */
		domain: FormControl<string | null | undefined>,

		/** This is always sql#activeDirectoryConfig. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateSqlActiveDirectoryConfigFormGroup() {
		return new FormGroup<SqlActiveDirectoryConfigFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SettingsAvailabilityType { SQL_AVAILABILITY_TYPE_UNSPECIFIED = 'SQL_AVAILABILITY_TYPE_UNSPECIFIED', ZONAL = 'ZONAL', REGIONAL = 'REGIONAL' }

	export enum SettingsConnectorEnforcement { CONNECTOR_ENFORCEMENT_UNSPECIFIED = 'CONNECTOR_ENFORCEMENT_UNSPECIFIED', NOT_REQUIRED = 'NOT_REQUIRED', REQUIRED = 'REQUIRED' }

	export enum SettingsDataDiskType { SQL_DATA_DISK_TYPE_UNSPECIFIED = 'SQL_DATA_DISK_TYPE_UNSPECIFIED', PD_SSD = 'PD_SSD', PD_HDD = 'PD_HDD', OBSOLETE_LOCAL_SSD = 'OBSOLETE_LOCAL_SSD' }


	/** Deny maintenance Periods. This specifies a date range during when all CSA rollout will be denied. */
	export interface DenyMaintenancePeriod {

		/** "deny maintenance period" end date. If the year of the end date is empty, the year of the start date also must be empty. In this case, it means the no maintenance interval recurs every year. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01 */
		endDate?: string | null;

		/** "deny maintenance period" start date. If the year of the start date is empty, the year of the end date also must be empty. In this case, it means the deny maintenance period recurs every year. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01 */
		startDate?: string | null;

		/** Time in UTC when the "deny maintenance period" starts on start_date and ends on end_date. The time is in format: HH:mm:SS, i.e., 00:00:00 */
		time?: string | null;
	}

	/** Deny maintenance Periods. This specifies a date range during when all CSA rollout will be denied. */
	export interface DenyMaintenancePeriodFormProperties {

		/** "deny maintenance period" end date. If the year of the end date is empty, the year of the start date also must be empty. In this case, it means the no maintenance interval recurs every year. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01 */
		endDate: FormControl<string | null | undefined>,

		/** "deny maintenance period" start date. If the year of the start date is empty, the year of the end date also must be empty. In this case, it means the deny maintenance period recurs every year. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01 */
		startDate: FormControl<string | null | undefined>,

		/** Time in UTC when the "deny maintenance period" starts on start_date and ends on end_date. The time is in format: HH:mm:SS, i.e., 00:00:00 */
		time: FormControl<string | null | undefined>,
	}
	export function CreateDenyMaintenancePeriodFormGroup() {
		return new FormGroup<DenyMaintenancePeriodFormProperties>({
			endDate: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SettingsEdition { EDITION_UNSPECIFIED = 'EDITION_UNSPECIFIED', ENTERPRISE = 'ENTERPRISE', ENTERPRISE_PLUS = 'ENTERPRISE_PLUS' }


	/** Insights configuration. This specifies when Cloud SQL Insights feature is enabled and optional configuration. */
	export interface InsightsConfig {

		/** Whether Query Insights feature is enabled. */
		queryInsightsEnabled?: boolean | null;

		/** Number of query execution plans captured by Insights per minute for all queries combined. Default is 5. */
		queryPlansPerMinute?: number | null;

		/** Maximum query length stored in bytes. Default value: 1024 bytes. Range: 256-4500 bytes. Query length more than this field value will be truncated to this value. When unset, query length will be the default value. Changing query length will restart the database. */
		queryStringLength?: number | null;

		/** Whether Query Insights will record application tags from query when enabled. */
		recordApplicationTags?: boolean | null;

		/** Whether Query Insights will record client address when enabled. */
		recordClientAddress?: boolean | null;
	}

	/** Insights configuration. This specifies when Cloud SQL Insights feature is enabled and optional configuration. */
	export interface InsightsConfigFormProperties {

		/** Whether Query Insights feature is enabled. */
		queryInsightsEnabled: FormControl<boolean | null | undefined>,

		/** Number of query execution plans captured by Insights per minute for all queries combined. Default is 5. */
		queryPlansPerMinute: FormControl<number | null | undefined>,

		/** Maximum query length stored in bytes. Default value: 1024 bytes. Range: 256-4500 bytes. Query length more than this field value will be truncated to this value. When unset, query length will be the default value. Changing query length will restart the database. */
		queryStringLength: FormControl<number | null | undefined>,

		/** Whether Query Insights will record application tags from query when enabled. */
		recordApplicationTags: FormControl<boolean | null | undefined>,

		/** Whether Query Insights will record client address when enabled. */
		recordClientAddress: FormControl<boolean | null | undefined>,
	}
	export function CreateInsightsConfigFormGroup() {
		return new FormGroup<InsightsConfigFormProperties>({
			queryInsightsEnabled: new FormControl<boolean | null | undefined>(undefined),
			queryPlansPerMinute: new FormControl<number | null | undefined>(undefined),
			queryStringLength: new FormControl<number | null | undefined>(undefined),
			recordApplicationTags: new FormControl<boolean | null | undefined>(undefined),
			recordClientAddress: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** IP Management configuration. */
	export interface IpConfiguration {

		/** The name of the allocated ip range for the private ip Cloud SQL instance. For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?.` */
		allocatedIpRange?: string | null;

		/** The list of external networks that are allowed to connect to the instance using the IP. In 'CIDR' notation, also known as 'slash' notation (for example: `157.197.200.0/24`). */
		authorizedNetworks?: Array<AclEntry>;

		/** Controls connectivity to private IP instances from Google services, such as BigQuery. */
		enablePrivatePathForGoogleCloudServices?: boolean | null;

		/** Whether the instance is assigned a public IP address or not. */
		ipv4Enabled?: boolean | null;

		/** The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, `/projects/myProject/global/networks/default`. This setting can be updated, but it cannot be removed after it is set. */
		privateNetwork?: string | null;

		/** PSC settings for a Cloud SQL instance. */
		pscConfig?: PscConfig;

		/** Use `ssl_mode` instead for MySQL and PostgreSQL. SQL Server uses this flag. Whether SSL/TLS connections over IP are enforced. If set to false, then allow both non-SSL/non-TLS and SSL/TLS connections. For SSL/TLS connections, the client certificate won't be verified. If set to true, then only allow connections encrypted with SSL/TLS and with valid client certificates. If you want to enforce SSL/TLS without enforcing the requirement for valid client certificates, then use the `ssl_mode` flag instead of the `require_ssl` flag. */
		requireSsl?: boolean | null;

		/** Specify how SSL/TLS is enforced in database connections. MySQL and PostgreSQL use the `ssl_mode` flag. If you must use the `require_ssl` flag for backward compatibility, then only the following value pairs are valid: * `ssl_mode=ALLOW_UNENCRYPTED_AND_ENCRYPTED` and `require_ssl=false` * `ssl_mode=ENCRYPTED_ONLY` and `require_ssl=false` * `ssl_mode=TRUSTED_CLIENT_CERTIFICATE_REQUIRED` and `require_ssl=true` The value of `ssl_mode` gets priority over the value of `require_ssl`. For example, for the pair `ssl_mode=ENCRYPTED_ONLY` and `require_ssl=false`, the `ssl_mode=ENCRYPTED_ONLY` means only accept SSL connections, while the `require_ssl=false` means accept both non-SSL and SSL connections. MySQL and PostgreSQL databases respect `ssl_mode` in this case and accept only SSL connections. SQL Server uses the `require_ssl` flag. You can set the value for this flag to `true` or `false`. */
		sslMode?: IpConfigurationSslMode | null;
	}

	/** IP Management configuration. */
	export interface IpConfigurationFormProperties {

		/** The name of the allocated ip range for the private ip Cloud SQL instance. For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?.` */
		allocatedIpRange: FormControl<string | null | undefined>,

		/** Controls connectivity to private IP instances from Google services, such as BigQuery. */
		enablePrivatePathForGoogleCloudServices: FormControl<boolean | null | undefined>,

		/** Whether the instance is assigned a public IP address or not. */
		ipv4Enabled: FormControl<boolean | null | undefined>,

		/** The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, `/projects/myProject/global/networks/default`. This setting can be updated, but it cannot be removed after it is set. */
		privateNetwork: FormControl<string | null | undefined>,

		/** Use `ssl_mode` instead for MySQL and PostgreSQL. SQL Server uses this flag. Whether SSL/TLS connections over IP are enforced. If set to false, then allow both non-SSL/non-TLS and SSL/TLS connections. For SSL/TLS connections, the client certificate won't be verified. If set to true, then only allow connections encrypted with SSL/TLS and with valid client certificates. If you want to enforce SSL/TLS without enforcing the requirement for valid client certificates, then use the `ssl_mode` flag instead of the `require_ssl` flag. */
		requireSsl: FormControl<boolean | null | undefined>,

		/** Specify how SSL/TLS is enforced in database connections. MySQL and PostgreSQL use the `ssl_mode` flag. If you must use the `require_ssl` flag for backward compatibility, then only the following value pairs are valid: * `ssl_mode=ALLOW_UNENCRYPTED_AND_ENCRYPTED` and `require_ssl=false` * `ssl_mode=ENCRYPTED_ONLY` and `require_ssl=false` * `ssl_mode=TRUSTED_CLIENT_CERTIFICATE_REQUIRED` and `require_ssl=true` The value of `ssl_mode` gets priority over the value of `require_ssl`. For example, for the pair `ssl_mode=ENCRYPTED_ONLY` and `require_ssl=false`, the `ssl_mode=ENCRYPTED_ONLY` means only accept SSL connections, while the `require_ssl=false` means accept both non-SSL and SSL connections. MySQL and PostgreSQL databases respect `ssl_mode` in this case and accept only SSL connections. SQL Server uses the `require_ssl` flag. You can set the value for this flag to `true` or `false`. */
		sslMode: FormControl<IpConfigurationSslMode | null | undefined>,
	}
	export function CreateIpConfigurationFormGroup() {
		return new FormGroup<IpConfigurationFormProperties>({
			allocatedIpRange: new FormControl<string | null | undefined>(undefined),
			enablePrivatePathForGoogleCloudServices: new FormControl<boolean | null | undefined>(undefined),
			ipv4Enabled: new FormControl<boolean | null | undefined>(undefined),
			privateNetwork: new FormControl<string | null | undefined>(undefined),
			requireSsl: new FormControl<boolean | null | undefined>(undefined),
			sslMode: new FormControl<IpConfigurationSslMode | null | undefined>(undefined),
		});

	}


	/** PSC settings for a Cloud SQL instance. */
	export interface PscConfig {

		/** Optional. The list of consumer projects that are allow-listed for PSC connections to this instance. This instance can be connected to with PSC from any network in these projects. Each consumer project in this list may be represented by a project number (numeric) or by a project id (alphanumeric). */
		allowedConsumerProjects?: Array<string>;

		/** Whether PSC connectivity is enabled for this instance. */
		pscEnabled?: boolean | null;
	}

	/** PSC settings for a Cloud SQL instance. */
	export interface PscConfigFormProperties {

		/** Whether PSC connectivity is enabled for this instance. */
		pscEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePscConfigFormGroup() {
		return new FormGroup<PscConfigFormProperties>({
			pscEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum IpConfigurationSslMode { SSL_MODE_UNSPECIFIED = 'SSL_MODE_UNSPECIFIED', ALLOW_UNENCRYPTED_AND_ENCRYPTED = 'ALLOW_UNENCRYPTED_AND_ENCRYPTED', ENCRYPTED_ONLY = 'ENCRYPTED_ONLY', TRUSTED_CLIENT_CERTIFICATE_REQUIRED = 'TRUSTED_CLIENT_CERTIFICATE_REQUIRED' }


	/** Preferred location. This specifies where a Cloud SQL instance is located. Note that if the preferred location is not available, the instance will be located as close as possible within the region. Only one location may be specified. */
	export interface LocationPreference {

		/** The App Engine application to follow, it must be in the same region as the Cloud SQL instance. WARNING: Changing this might restart the instance. */
		followGaeApplication?: string | null;

		/** This is always `sql#locationPreference`. */
		kind?: string | null;

		/** The preferred Compute Engine zone for the secondary/failover (for example: us-central1-a, us-central1-b, etc.). To disable this field, set it to 'no_secondary_zone'. */
		secondaryZone?: string | null;

		/** The preferred Compute Engine zone (for example: us-central1-a, us-central1-b, etc.). WARNING: Changing this might restart the instance. */
		zone?: string | null;
	}

	/** Preferred location. This specifies where a Cloud SQL instance is located. Note that if the preferred location is not available, the instance will be located as close as possible within the region. Only one location may be specified. */
	export interface LocationPreferenceFormProperties {

		/** The App Engine application to follow, it must be in the same region as the Cloud SQL instance. WARNING: Changing this might restart the instance. */
		followGaeApplication: FormControl<string | null | undefined>,

		/** This is always `sql#locationPreference`. */
		kind: FormControl<string | null | undefined>,

		/** The preferred Compute Engine zone for the secondary/failover (for example: us-central1-a, us-central1-b, etc.). To disable this field, set it to 'no_secondary_zone'. */
		secondaryZone: FormControl<string | null | undefined>,

		/** The preferred Compute Engine zone (for example: us-central1-a, us-central1-b, etc.). WARNING: Changing this might restart the instance. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateLocationPreferenceFormGroup() {
		return new FormGroup<LocationPreferenceFormProperties>({
			followGaeApplication: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			secondaryZone: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Maintenance window. This specifies when a Cloud SQL instance is restarted for system maintenance purposes. */
	export interface MaintenanceWindow {

		/** day of week (1-7), starting on Monday. */
		day?: number | null;

		/** hour of day - 0 to 23. */
		hour?: number | null;

		/** This is always `sql#maintenanceWindow`. */
		kind?: string | null;

		/** Maintenance timing setting: `canary` (Earlier) or `stable` (Later). [Learn more](https://cloud.google.com/sql/docs/mysql/instance-settings#maintenance-timing-2ndgen). */
		updateTrack?: MaintenanceWindowUpdateTrack | null;
	}

	/** Maintenance window. This specifies when a Cloud SQL instance is restarted for system maintenance purposes. */
	export interface MaintenanceWindowFormProperties {

		/** day of week (1-7), starting on Monday. */
		day: FormControl<number | null | undefined>,

		/** hour of day - 0 to 23. */
		hour: FormControl<number | null | undefined>,

		/** This is always `sql#maintenanceWindow`. */
		kind: FormControl<string | null | undefined>,

		/** Maintenance timing setting: `canary` (Earlier) or `stable` (Later). [Learn more](https://cloud.google.com/sql/docs/mysql/instance-settings#maintenance-timing-2ndgen). */
		updateTrack: FormControl<MaintenanceWindowUpdateTrack | null | undefined>,
	}
	export function CreateMaintenanceWindowFormGroup() {
		return new FormGroup<MaintenanceWindowFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			hour: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			updateTrack: new FormControl<MaintenanceWindowUpdateTrack | null | undefined>(undefined),
		});

	}

	export enum MaintenanceWindowUpdateTrack { SQL_UPDATE_TRACK_UNSPECIFIED = 'SQL_UPDATE_TRACK_UNSPECIFIED', canary = 'canary', stable = 'stable', week5 = 'week5' }


	/** Database instance local user password validation policy */
	export interface PasswordValidationPolicy {

		/** The complexity of the password. */
		complexity?: PasswordValidationPolicyComplexity | null;

		/** Disallow credentials that have been previously compromised by a public data breach. */
		disallowCompromisedCredentials?: boolean | null;

		/** Disallow username as a part of the password. */
		disallowUsernameSubstring?: boolean | null;

		/** Whether the password policy is enabled or not. */
		enablePasswordPolicy?: boolean | null;

		/** Minimum number of characters allowed. */
		minLength?: number | null;

		/** Minimum interval after which the password can be changed. This flag is only supported for PostgreSQL. */
		passwordChangeInterval?: string | null;

		/** Number of previous passwords that cannot be reused. */
		reuseInterval?: number | null;
	}

	/** Database instance local user password validation policy */
	export interface PasswordValidationPolicyFormProperties {

		/** The complexity of the password. */
		complexity: FormControl<PasswordValidationPolicyComplexity | null | undefined>,

		/** Disallow credentials that have been previously compromised by a public data breach. */
		disallowCompromisedCredentials: FormControl<boolean | null | undefined>,

		/** Disallow username as a part of the password. */
		disallowUsernameSubstring: FormControl<boolean | null | undefined>,

		/** Whether the password policy is enabled or not. */
		enablePasswordPolicy: FormControl<boolean | null | undefined>,

		/** Minimum number of characters allowed. */
		minLength: FormControl<number | null | undefined>,

		/** Minimum interval after which the password can be changed. This flag is only supported for PostgreSQL. */
		passwordChangeInterval: FormControl<string | null | undefined>,

		/** Number of previous passwords that cannot be reused. */
		reuseInterval: FormControl<number | null | undefined>,
	}
	export function CreatePasswordValidationPolicyFormGroup() {
		return new FormGroup<PasswordValidationPolicyFormProperties>({
			complexity: new FormControl<PasswordValidationPolicyComplexity | null | undefined>(undefined),
			disallowCompromisedCredentials: new FormControl<boolean | null | undefined>(undefined),
			disallowUsernameSubstring: new FormControl<boolean | null | undefined>(undefined),
			enablePasswordPolicy: new FormControl<boolean | null | undefined>(undefined),
			minLength: new FormControl<number | null | undefined>(undefined),
			passwordChangeInterval: new FormControl<string | null | undefined>(undefined),
			reuseInterval: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PasswordValidationPolicyComplexity { COMPLEXITY_UNSPECIFIED = 'COMPLEXITY_UNSPECIFIED', COMPLEXITY_DEFAULT = 'COMPLEXITY_DEFAULT' }

	export enum SettingsPricingPlan { SQL_PRICING_PLAN_UNSPECIFIED = 'SQL_PRICING_PLAN_UNSPECIFIED', PACKAGE = 'PACKAGE', PER_USE = 'PER_USE' }

	export enum SettingsReplicationType { SQL_REPLICATION_TYPE_UNSPECIFIED = 'SQL_REPLICATION_TYPE_UNSPECIFIED', SYNCHRONOUS = 'SYNCHRONOUS', ASYNCHRONOUS = 'ASYNCHRONOUS' }


	/** SQL Server specific audit configuration. */
	export interface SqlServerAuditConfig {

		/** The name of the destination bucket (e.g., gs://mybucket). */
		bucket?: string | null;

		/** This is always sql#sqlServerAuditConfig */
		kind?: string | null;

		/** How long to keep generated audit files. */
		retentionInterval?: string | null;

		/** How often to upload generated audit files. */
		uploadInterval?: string | null;
	}

	/** SQL Server specific audit configuration. */
	export interface SqlServerAuditConfigFormProperties {

		/** The name of the destination bucket (e.g., gs://mybucket). */
		bucket: FormControl<string | null | undefined>,

		/** This is always sql#sqlServerAuditConfig */
		kind: FormControl<string | null | undefined>,

		/** How long to keep generated audit files. */
		retentionInterval: FormControl<string | null | undefined>,

		/** How often to upload generated audit files. */
		uploadInterval: FormControl<string | null | undefined>,
	}
	export function CreateSqlServerAuditConfigFormGroup() {
		return new FormGroup<SqlServerAuditConfigFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			retentionInterval: new FormControl<string | null | undefined>(undefined),
			uploadInterval: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DatabaseInstanceSqlNetworkArchitecture { SQL_NETWORK_ARCHITECTURE_UNSPECIFIED = 'SQL_NETWORK_ARCHITECTURE_UNSPECIFIED', NEW_NETWORK_ARCHITECTURE = 'NEW_NETWORK_ARCHITECTURE', OLD_NETWORK_ARCHITECTURE = 'OLD_NETWORK_ARCHITECTURE' }

	export enum DatabaseInstanceState { SQL_INSTANCE_STATE_UNSPECIFIED = 'SQL_INSTANCE_STATE_UNSPECIFIED', RUNNABLE = 'RUNNABLE', SUSPENDED = 'SUSPENDED', PENDING_DELETE = 'PENDING_DELETE', PENDING_CREATE = 'PENDING_CREATE', MAINTENANCE = 'MAINTENANCE', FAILED = 'FAILED', ONLINE_MAINTENANCE = 'ONLINE_MAINTENANCE' }


	/** Database list response. */
	export interface DatabasesListResponse {

		/** List of database resources in the instance. */
		items?: Array<Database>;

		/** This is always `sql#databasesList`. */
		kind?: string | null;
	}

	/** Database list response. */
	export interface DatabasesListResponseFormProperties {

		/** This is always `sql#databasesList`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateDatabasesListResponseFormGroup() {
		return new FormGroup<DatabasesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This context is used to demote an existing standalone instance to be a Cloud SQL read replica for an external database server. */
	export interface DemoteContext {

		/** This is always `sql#demoteContext`. */
		kind?: string | null;

		/** Required. The name of the instance which acts as the on-premises primary instance in the replication setup. */
		sourceRepresentativeInstanceName?: string | null;
	}

	/** This context is used to demote an existing standalone instance to be a Cloud SQL read replica for an external database server. */
	export interface DemoteContextFormProperties {

		/** This is always `sql#demoteContext`. */
		kind: FormControl<string | null | undefined>,

		/** Required. The name of the instance which acts as the on-premises primary instance in the replication setup. */
		sourceRepresentativeInstanceName: FormControl<string | null | undefined>,
	}
	export function CreateDemoteContextFormGroup() {
		return new FormGroup<DemoteContextFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			sourceRepresentativeInstanceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Read-replica configuration for connecting to the on-premises primary instance. */
	export interface DemoteMasterConfiguration {

		/** This is always `sql#demoteMasterConfiguration`. */
		kind?: string | null;

		/** Read-replica configuration specific to MySQL databases. */
		mysqlReplicaConfiguration?: DemoteMasterMySqlReplicaConfiguration;
	}

	/** Read-replica configuration for connecting to the on-premises primary instance. */
	export interface DemoteMasterConfigurationFormProperties {

		/** This is always `sql#demoteMasterConfiguration`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateDemoteMasterConfigurationFormGroup() {
		return new FormGroup<DemoteMasterConfigurationFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Read-replica configuration specific to MySQL databases. */
	export interface DemoteMasterMySqlReplicaConfiguration {

		/** PEM representation of the trusted CA's x509 certificate. */
		caCertificate?: string | null;

		/** PEM representation of the replica's x509 certificate. */
		clientCertificate?: string | null;

		/** PEM representation of the replica's private key. The corresponsing public key is encoded in the client's certificate. The format of the replica's private key can be either PKCS #1 or PKCS #8. */
		clientKey?: string | null;

		/** This is always `sql#demoteMasterMysqlReplicaConfiguration`. */
		kind?: string | null;

		/** The password for the replication connection. */
		password?: string | null;

		/** The username for the replication connection. */
		username?: string | null;
	}

	/** Read-replica configuration specific to MySQL databases. */
	export interface DemoteMasterMySqlReplicaConfigurationFormProperties {

		/** PEM representation of the trusted CA's x509 certificate. */
		caCertificate: FormControl<string | null | undefined>,

		/** PEM representation of the replica's x509 certificate. */
		clientCertificate: FormControl<string | null | undefined>,

		/** PEM representation of the replica's private key. The corresponsing public key is encoded in the client's certificate. The format of the replica's private key can be either PKCS #1 or PKCS #8. */
		clientKey: FormControl<string | null | undefined>,

		/** This is always `sql#demoteMasterMysqlReplicaConfiguration`. */
		kind: FormControl<string | null | undefined>,

		/** The password for the replication connection. */
		password: FormControl<string | null | undefined>,

		/** The username for the replication connection. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateDemoteMasterMySqlReplicaConfigurationFormGroup() {
		return new FormGroup<DemoteMasterMySqlReplicaConfigurationFormProperties>({
			caCertificate: new FormControl<string | null | undefined>(undefined),
			clientCertificate: new FormControl<string | null | undefined>(undefined),
			clientKey: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Database instance demote primary instance context. */
	export interface DemoteMasterContext {

		/** This is always `sql#demoteMasterContext`. */
		kind?: string | null;

		/** The name of the instance which will act as on-premises primary instance in the replication setup. */
		masterInstanceName?: string | null;

		/** Read-replica configuration for connecting to the on-premises primary instance. */
		replicaConfiguration?: DemoteMasterConfiguration;

		/** Flag to skip replication setup on the instance. */
		skipReplicationSetup?: boolean | null;

		/** Verify the GTID consistency for demote operation. Default value: `True`. Setting this flag to `false` enables you to bypass the GTID consistency check between on-premises primary instance and Cloud SQL instance during the demotion operation but also exposes you to the risk of future replication failures. Change the value only if you know the reason for the GTID divergence and are confident that doing so will not cause any replication issues. */
		verifyGtidConsistency?: boolean | null;
	}

	/** Database instance demote primary instance context. */
	export interface DemoteMasterContextFormProperties {

		/** This is always `sql#demoteMasterContext`. */
		kind: FormControl<string | null | undefined>,

		/** The name of the instance which will act as on-premises primary instance in the replication setup. */
		masterInstanceName: FormControl<string | null | undefined>,

		/** Flag to skip replication setup on the instance. */
		skipReplicationSetup: FormControl<boolean | null | undefined>,

		/** Verify the GTID consistency for demote operation. Default value: `True`. Setting this flag to `false` enables you to bypass the GTID consistency check between on-premises primary instance and Cloud SQL instance during the demotion operation but also exposes you to the risk of future replication failures. Change the value only if you know the reason for the GTID divergence and are confident that doing so will not cause any replication issues. */
		verifyGtidConsistency: FormControl<boolean | null | undefined>,
	}
	export function CreateDemoteMasterContextFormGroup() {
		return new FormGroup<DemoteMasterContextFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			masterInstanceName: new FormControl<string | null | undefined>(undefined),
			skipReplicationSetup: new FormControl<boolean | null | undefined>(undefined),
			verifyGtidConsistency: new FormControl<boolean | null | undefined>(undefined),
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


	/** Database instance export context. */
	export interface ExportContext {

		/** Options for exporting BAK files (SQL Server-only) */
		bakExportOptions?: ExportContextBakExportOptions;

		/** Options for exporting data as CSV. `MySQL` and `PostgreSQL` instances only. */
		csvExportOptions?: ExportContextCsvExportOptions;

		/** Databases to be exported. `MySQL instances:` If `fileType` is `SQL` and no database is specified, all databases are exported, except for the `mysql` system database. If `fileType` is `CSV`, you can specify one database, either by using this property or by using the `csvExportOptions.selectQuery` property, which takes precedence over this property. `PostgreSQL instances:` You must specify one database to be exported. If `fileType` is `CSV`, this database must match the one specified in the `csvExportOptions.selectQuery` property. `SQL Server instances:` You must specify one database to be exported, and the `fileType` must be `BAK`. */
		databases?: Array<string>;

		/** The file type for the specified uri. */
		fileType?: ExportContextFileType | null;

		/** This is always `sql#exportContext`. */
		kind?: string | null;

		/** Option for export offload. */
		offload?: boolean | null;

		/** Options for exporting data as SQL statements. */
		sqlExportOptions?: ExportContextSqlExportOptions;

		/** The path to the file in Google Cloud Storage where the export will be stored. The URI is in the form `gs://bucketName/fileName`. If the file already exists, the request succeeds, but the operation fails. If `fileType` is `SQL` and the filename ends with .gz, the contents are compressed. */
		uri?: string | null;
	}

	/** Database instance export context. */
	export interface ExportContextFormProperties {

		/** The file type for the specified uri. */
		fileType: FormControl<ExportContextFileType | null | undefined>,

		/** This is always `sql#exportContext`. */
		kind: FormControl<string | null | undefined>,

		/** Option for export offload. */
		offload: FormControl<boolean | null | undefined>,

		/** The path to the file in Google Cloud Storage where the export will be stored. The URI is in the form `gs://bucketName/fileName`. If the file already exists, the request succeeds, but the operation fails. If `fileType` is `SQL` and the filename ends with .gz, the contents are compressed. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateExportContextFormGroup() {
		return new FormGroup<ExportContextFormProperties>({
			fileType: new FormControl<ExportContextFileType | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			offload: new FormControl<boolean | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExportContextBakExportOptions {

		/** Type of this bak file will be export, FULL or DIFF, SQL Server only */
		bakType?: ExportContextBakExportOptionsBakType | null;

		/** Deprecated: copy_only is deprecated. Use differential_base instead */
		copyOnly?: boolean | null;

		/** Whether or not the backup can be used as a differential base copy_only backup can not be served as differential base */
		differentialBase?: boolean | null;

		/** Option for specifying how many stripes to use for the export. If blank, and the value of the striped field is true, the number of stripes is automatically chosen. */
		stripeCount?: number | null;

		/** Whether or not the export should be striped. */
		striped?: boolean | null;
	}
	export interface ExportContextBakExportOptionsFormProperties {

		/** Type of this bak file will be export, FULL or DIFF, SQL Server only */
		bakType: FormControl<ExportContextBakExportOptionsBakType | null | undefined>,

		/** Deprecated: copy_only is deprecated. Use differential_base instead */
		copyOnly: FormControl<boolean | null | undefined>,

		/** Whether or not the backup can be used as a differential base copy_only backup can not be served as differential base */
		differentialBase: FormControl<boolean | null | undefined>,

		/** Option for specifying how many stripes to use for the export. If blank, and the value of the striped field is true, the number of stripes is automatically chosen. */
		stripeCount: FormControl<number | null | undefined>,

		/** Whether or not the export should be striped. */
		striped: FormControl<boolean | null | undefined>,
	}
	export function CreateExportContextBakExportOptionsFormGroup() {
		return new FormGroup<ExportContextBakExportOptionsFormProperties>({
			bakType: new FormControl<ExportContextBakExportOptionsBakType | null | undefined>(undefined),
			copyOnly: new FormControl<boolean | null | undefined>(undefined),
			differentialBase: new FormControl<boolean | null | undefined>(undefined),
			stripeCount: new FormControl<number | null | undefined>(undefined),
			striped: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ExportContextBakExportOptionsBakType { BAK_TYPE_UNSPECIFIED = 'BAK_TYPE_UNSPECIFIED', FULL = 'FULL', DIFF = 'DIFF', TLOG = 'TLOG' }

	export interface ExportContextCsvExportOptions {

		/** Specifies the character that should appear before a data character that needs to be escaped. */
		escapeCharacter?: string | null;

		/** Specifies the character that separates columns within each row (line) of the file. */
		fieldsTerminatedBy?: string | null;

		/** This is used to separate lines. If a line does not contain all fields, the rest of the columns are set to their default values. */
		linesTerminatedBy?: string | null;

		/** Specifies the quoting character to be used when a data value is quoted. */
		quoteCharacter?: string | null;

		/** The select query used to extract the data. */
		selectQuery?: string | null;
	}
	export interface ExportContextCsvExportOptionsFormProperties {

		/** Specifies the character that should appear before a data character that needs to be escaped. */
		escapeCharacter: FormControl<string | null | undefined>,

		/** Specifies the character that separates columns within each row (line) of the file. */
		fieldsTerminatedBy: FormControl<string | null | undefined>,

		/** This is used to separate lines. If a line does not contain all fields, the rest of the columns are set to their default values. */
		linesTerminatedBy: FormControl<string | null | undefined>,

		/** Specifies the quoting character to be used when a data value is quoted. */
		quoteCharacter: FormControl<string | null | undefined>,

		/** The select query used to extract the data. */
		selectQuery: FormControl<string | null | undefined>,
	}
	export function CreateExportContextCsvExportOptionsFormGroup() {
		return new FormGroup<ExportContextCsvExportOptionsFormProperties>({
			escapeCharacter: new FormControl<string | null | undefined>(undefined),
			fieldsTerminatedBy: new FormControl<string | null | undefined>(undefined),
			linesTerminatedBy: new FormControl<string | null | undefined>(undefined),
			quoteCharacter: new FormControl<string | null | undefined>(undefined),
			selectQuery: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExportContextFileType { SQL_FILE_TYPE_UNSPECIFIED = 'SQL_FILE_TYPE_UNSPECIFIED', SQL = 'SQL', CSV = 'CSV', BAK = 'BAK' }

	export interface ExportContextSqlExportOptions {

		/** Options for exporting from MySQL. */
		mysqlExportOptions?: ExportContextSqlExportOptionsMysqlExportOptions;

		/** Export only schemas. */
		schemaOnly?: boolean | null;

		/** Tables to export, or that were exported, from the specified database. If you specify tables, specify one and only one database. For PostgreSQL instances, you can specify only one table. */
		tables?: Array<string>;
	}
	export interface ExportContextSqlExportOptionsFormProperties {

		/** Export only schemas. */
		schemaOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateExportContextSqlExportOptionsFormGroup() {
		return new FormGroup<ExportContextSqlExportOptionsFormProperties>({
			schemaOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ExportContextSqlExportOptionsMysqlExportOptions {

		/** Option to include SQL statement required to set up replication. If set to `1`, the dump file includes a CHANGE MASTER TO statement with the binary log coordinates, and --set-gtid-purged is set to ON. If set to `2`, the CHANGE MASTER TO statement is written as a SQL comment and has no effect. If set to any value other than `1`, --set-gtid-purged is set to OFF. */
		masterData?: number | null;
	}
	export interface ExportContextSqlExportOptionsMysqlExportOptionsFormProperties {

		/** Option to include SQL statement required to set up replication. If set to `1`, the dump file includes a CHANGE MASTER TO statement with the binary log coordinates, and --set-gtid-purged is set to ON. If set to `2`, the CHANGE MASTER TO statement is written as a SQL comment and has no effect. If set to any value other than `1`, --set-gtid-purged is set to OFF. */
		masterData: FormControl<number | null | undefined>,
	}
	export function CreateExportContextSqlExportOptionsMysqlExportOptionsFormGroup() {
		return new FormGroup<ExportContextSqlExportOptionsMysqlExportOptionsFormProperties>({
			masterData: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Database instance failover context. */
	export interface FailoverContext {

		/** This is always `sql#failoverContext`. */
		kind?: string | null;

		/** The current settings version of this instance. Request will be rejected if this version doesn't match the current settings version. */
		settingsVersion?: string | null;
	}

	/** Database instance failover context. */
	export interface FailoverContextFormProperties {

		/** This is always `sql#failoverContext`. */
		kind: FormControl<string | null | undefined>,

		/** The current settings version of this instance. Request will be rejected if this version doesn't match the current settings version. */
		settingsVersion: FormControl<string | null | undefined>,
	}
	export function CreateFailoverContextFormGroup() {
		return new FormGroup<FailoverContextFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			settingsVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A flag resource. */
	export interface Flag {

		/** Use this field if only certain integers are accepted. Can be combined with min_value and max_value to add additional values. */
		allowedIntValues?: Array<string>;

		/** For `STRING` flags, a list of strings that the value can be set to. */
		allowedStringValues?: Array<string>;

		/** The database version this flag applies to. Can be MySQL instances: `MYSQL_8_0`, `MYSQL_8_0_18`, `MYSQL_8_0_26`, `MYSQL_5_7`, or `MYSQL_5_6`. PostgreSQL instances: `POSTGRES_9_6`, `POSTGRES_10`, `POSTGRES_11` or `POSTGRES_12`. SQL Server instances: `SQLSERVER_2017_STANDARD`, `SQLSERVER_2017_ENTERPRISE`, `SQLSERVER_2017_EXPRESS`, `SQLSERVER_2017_WEB`, `SQLSERVER_2019_STANDARD`, `SQLSERVER_2019_ENTERPRISE`, `SQLSERVER_2019_EXPRESS`, or `SQLSERVER_2019_WEB`. See [the complete list](/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion). */
		appliesTo?: Array<ConnectSettingsDatabaseVersion>;

		/** Whether or not the flag is considered in beta. */
		inBeta?: boolean | null;

		/** This is always `sql#flag`. */
		kind?: string | null;

		/** For `INTEGER` flags, the maximum allowed value. */
		maxValue?: string | null;

		/** For `INTEGER` flags, the minimum allowed value. */
		minValue?: string | null;

		/** This is the name of the flag. Flag names always use underscores, not hyphens, for example: `max_allowed_packet` */
		name?: string | null;

		/** Indicates whether changing this flag will trigger a database restart. Only applicable to Second Generation instances. */
		requiresRestart?: boolean | null;

		/** The type of the flag. Flags are typed to being `BOOLEAN`, `STRING`, `INTEGER` or `NONE`. `NONE` is used for flags that do not take a value, such as `skip_grant_tables`. */
		type?: FlagType | null;
	}

	/** A flag resource. */
	export interface FlagFormProperties {

		/** Whether or not the flag is considered in beta. */
		inBeta: FormControl<boolean | null | undefined>,

		/** This is always `sql#flag`. */
		kind: FormControl<string | null | undefined>,

		/** For `INTEGER` flags, the maximum allowed value. */
		maxValue: FormControl<string | null | undefined>,

		/** For `INTEGER` flags, the minimum allowed value. */
		minValue: FormControl<string | null | undefined>,

		/** This is the name of the flag. Flag names always use underscores, not hyphens, for example: `max_allowed_packet` */
		name: FormControl<string | null | undefined>,

		/** Indicates whether changing this flag will trigger a database restart. Only applicable to Second Generation instances. */
		requiresRestart: FormControl<boolean | null | undefined>,

		/** The type of the flag. Flags are typed to being `BOOLEAN`, `STRING`, `INTEGER` or `NONE`. `NONE` is used for flags that do not take a value, such as `skip_grant_tables`. */
		type: FormControl<FlagType | null | undefined>,
	}
	export function CreateFlagFormGroup() {
		return new FormGroup<FlagFormProperties>({
			inBeta: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			maxValue: new FormControl<string | null | undefined>(undefined),
			minValue: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			requiresRestart: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<FlagType | null | undefined>(undefined),
		});

	}

	export enum FlagType { SQL_FLAG_TYPE_UNSPECIFIED = 'SQL_FLAG_TYPE_UNSPECIFIED', BOOLEAN = 'BOOLEAN', STRING = 'STRING', INTEGER = 'INTEGER', NONE = 'NONE', MYSQL_TIMEZONE_OFFSET = 'MYSQL_TIMEZONE_OFFSET', FLOAT = 'FLOAT', REPEATED_STRING = 'REPEATED_STRING' }


	/** Flags list response. */
	export interface FlagsListResponse {

		/** List of flags. */
		items?: Array<Flag>;

		/** This is always `sql#flagsList`. */
		kind?: string | null;
	}

	/** Flags list response. */
	export interface FlagsListResponseFormProperties {

		/** This is always `sql#flagsList`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateFlagsListResponseFormGroup() {
		return new FormGroup<FlagsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Ephemeral certificate creation request. */
	export interface GenerateEphemeralCertRequest {

		/** Optional. Access token to include in the signed certificate. */
		access_token?: string | null;

		/** PEM encoded public key to include in the signed certificate. */
		public_key?: string | null;

		/** Optional. Optional snapshot read timestamp to trade freshness for performance. */
		readTime?: string | null;

		/** Optional. If set, it will contain the cert valid duration. */
		validDuration?: string | null;
	}

	/** Ephemeral certificate creation request. */
	export interface GenerateEphemeralCertRequestFormProperties {

		/** Optional. Access token to include in the signed certificate. */
		access_token: FormControl<string | null | undefined>,

		/** PEM encoded public key to include in the signed certificate. */
		public_key: FormControl<string | null | undefined>,

		/** Optional. Optional snapshot read timestamp to trade freshness for performance. */
		readTime: FormControl<string | null | undefined>,

		/** Optional. If set, it will contain the cert valid duration. */
		validDuration: FormControl<string | null | undefined>,
	}
	export function CreateGenerateEphemeralCertRequestFormGroup() {
		return new FormGroup<GenerateEphemeralCertRequestFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined),
			public_key: new FormControl<string | null | undefined>(undefined),
			readTime: new FormControl<string | null | undefined>(undefined),
			validDuration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Ephemeral certificate creation request. */
	export interface GenerateEphemeralCertResponse {

		/** SslCerts Resource */
		ephemeralCert?: SslCert;
	}

	/** Ephemeral certificate creation request. */
	export interface GenerateEphemeralCertResponseFormProperties {
	}
	export function CreateGenerateEphemeralCertResponseFormGroup() {
		return new FormGroup<GenerateEphemeralCertResponseFormProperties>({
		});

	}


	/** Database instance import context. */
	export interface ImportContext {

		/** Import parameters specific to SQL Server .BAK files */
		bakImportOptions?: ImportContextBakImportOptions;

		/** Options for importing data as CSV. */
		csvImportOptions?: ImportContextCsvImportOptions;

		/** The target database for the import. If `fileType` is `SQL`, this field is required only if the import file does not specify a database, and is overridden by any database specification in the import file. If `fileType` is `CSV`, one database must be specified. */
		database?: string | null;

		/** The file type for the specified uri.\`SQL`: The file contains SQL statements. \`CSV`: The file contains CSV data. */
		fileType?: ExportContextFileType | null;

		/** The PostgreSQL user for this import operation. PostgreSQL instances only. */
		importUser?: string | null;

		/** This is always `sql#importContext`. */
		kind?: string | null;

		/** Path to the import file in Cloud Storage, in the form `gs://bucketName/fileName`. Compressed gzip files (.gz) are supported when `fileType` is `SQL`. The instance must have write permissions to the bucket and read access to the file. */
		uri?: string | null;
	}

	/** Database instance import context. */
	export interface ImportContextFormProperties {

		/** The target database for the import. If `fileType` is `SQL`, this field is required only if the import file does not specify a database, and is overridden by any database specification in the import file. If `fileType` is `CSV`, one database must be specified. */
		database: FormControl<string | null | undefined>,

		/** The file type for the specified uri.\`SQL`: The file contains SQL statements. \`CSV`: The file contains CSV data. */
		fileType: FormControl<ExportContextFileType | null | undefined>,

		/** The PostgreSQL user for this import operation. PostgreSQL instances only. */
		importUser: FormControl<string | null | undefined>,

		/** This is always `sql#importContext`. */
		kind: FormControl<string | null | undefined>,

		/** Path to the import file in Cloud Storage, in the form `gs://bucketName/fileName`. Compressed gzip files (.gz) are supported when `fileType` is `SQL`. The instance must have write permissions to the bucket and read access to the file. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateImportContextFormGroup() {
		return new FormGroup<ImportContextFormProperties>({
			database: new FormControl<string | null | undefined>(undefined),
			fileType: new FormControl<ExportContextFileType | null | undefined>(undefined),
			importUser: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportContextBakImportOptions {

		/** Type of the bak content, FULL or DIFF */
		bakType?: ExportContextBakExportOptionsBakType | null;
		encryptionOptions?: ImportContextBakImportOptionsEncryptionOptions;

		/** Whether or not the backup importing will restore database with NORECOVERY option Applies only to Cloud SQL for SQL Server. */
		noRecovery?: boolean | null;

		/** Whether or not the backup importing request will just bring database online without downloading Bak content only one of "no_recovery" and "recovery_only" can be true otherwise error will return. Applies only to Cloud SQL for SQL Server. */
		recoveryOnly?: boolean | null;

		/** Optional. The timestamp when the import should stop. This timestamp is in the [RFC 3339](https://tools.ietf.org/html/rfc3339) format (for example, `2023-10-01T16:19:00.094`). This field is equivalent to the STOPAT keyword and applies to Cloud SQL for SQL Server only. */
		stopAt?: string | null;

		/** Optional. The marked transaction where the import should stop. This field is equivalent to the STOPATMARK keyword and applies to Cloud SQL for SQL Server only. */
		stopAtMark?: string | null;

		/** Whether or not the backup set being restored is striped. Applies only to Cloud SQL for SQL Server. */
		striped?: boolean | null;
	}
	export interface ImportContextBakImportOptionsFormProperties {

		/** Type of the bak content, FULL or DIFF */
		bakType: FormControl<ExportContextBakExportOptionsBakType | null | undefined>,

		/** Whether or not the backup importing will restore database with NORECOVERY option Applies only to Cloud SQL for SQL Server. */
		noRecovery: FormControl<boolean | null | undefined>,

		/** Whether or not the backup importing request will just bring database online without downloading Bak content only one of "no_recovery" and "recovery_only" can be true otherwise error will return. Applies only to Cloud SQL for SQL Server. */
		recoveryOnly: FormControl<boolean | null | undefined>,

		/** Optional. The timestamp when the import should stop. This timestamp is in the [RFC 3339](https://tools.ietf.org/html/rfc3339) format (for example, `2023-10-01T16:19:00.094`). This field is equivalent to the STOPAT keyword and applies to Cloud SQL for SQL Server only. */
		stopAt: FormControl<string | null | undefined>,

		/** Optional. The marked transaction where the import should stop. This field is equivalent to the STOPATMARK keyword and applies to Cloud SQL for SQL Server only. */
		stopAtMark: FormControl<string | null | undefined>,

		/** Whether or not the backup set being restored is striped. Applies only to Cloud SQL for SQL Server. */
		striped: FormControl<boolean | null | undefined>,
	}
	export function CreateImportContextBakImportOptionsFormGroup() {
		return new FormGroup<ImportContextBakImportOptionsFormProperties>({
			bakType: new FormControl<ExportContextBakExportOptionsBakType | null | undefined>(undefined),
			noRecovery: new FormControl<boolean | null | undefined>(undefined),
			recoveryOnly: new FormControl<boolean | null | undefined>(undefined),
			stopAt: new FormControl<string | null | undefined>(undefined),
			stopAtMark: new FormControl<string | null | undefined>(undefined),
			striped: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ImportContextBakImportOptionsEncryptionOptions {

		/** Path to the Certificate (.cer) in Cloud Storage, in the form `gs://bucketName/fileName`. The instance must have write permissions to the bucket and read access to the file. */
		certPath?: string | null;

		/** Password that encrypts the private key */
		pvkPassword?: string | null;

		/** Path to the Certificate Private Key (.pvk) in Cloud Storage, in the form `gs://bucketName/fileName`. The instance must have write permissions to the bucket and read access to the file. */
		pvkPath?: string | null;
	}
	export interface ImportContextBakImportOptionsEncryptionOptionsFormProperties {

		/** Path to the Certificate (.cer) in Cloud Storage, in the form `gs://bucketName/fileName`. The instance must have write permissions to the bucket and read access to the file. */
		certPath: FormControl<string | null | undefined>,

		/** Password that encrypts the private key */
		pvkPassword: FormControl<string | null | undefined>,

		/** Path to the Certificate Private Key (.pvk) in Cloud Storage, in the form `gs://bucketName/fileName`. The instance must have write permissions to the bucket and read access to the file. */
		pvkPath: FormControl<string | null | undefined>,
	}
	export function CreateImportContextBakImportOptionsEncryptionOptionsFormGroup() {
		return new FormGroup<ImportContextBakImportOptionsEncryptionOptionsFormProperties>({
			certPath: new FormControl<string | null | undefined>(undefined),
			pvkPassword: new FormControl<string | null | undefined>(undefined),
			pvkPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportContextCsvImportOptions {

		/** The columns to which CSV data is imported. If not specified, all columns of the database table are loaded with CSV data. */
		columns?: Array<string>;

		/** Specifies the character that should appear before a data character that needs to be escaped. */
		escapeCharacter?: string | null;

		/** Specifies the character that separates columns within each row (line) of the file. */
		fieldsTerminatedBy?: string | null;

		/** This is used to separate lines. If a line does not contain all fields, the rest of the columns are set to their default values. */
		linesTerminatedBy?: string | null;

		/** Specifies the quoting character to be used when a data value is quoted. */
		quoteCharacter?: string | null;

		/** The table to which CSV data is imported. */
		table?: string | null;
	}
	export interface ImportContextCsvImportOptionsFormProperties {

		/** Specifies the character that should appear before a data character that needs to be escaped. */
		escapeCharacter: FormControl<string | null | undefined>,

		/** Specifies the character that separates columns within each row (line) of the file. */
		fieldsTerminatedBy: FormControl<string | null | undefined>,

		/** This is used to separate lines. If a line does not contain all fields, the rest of the columns are set to their default values. */
		linesTerminatedBy: FormControl<string | null | undefined>,

		/** Specifies the quoting character to be used when a data value is quoted. */
		quoteCharacter: FormControl<string | null | undefined>,

		/** The table to which CSV data is imported. */
		table: FormControl<string | null | undefined>,
	}
	export function CreateImportContextCsvImportOptionsFormGroup() {
		return new FormGroup<ImportContextCsvImportOptionsFormProperties>({
			escapeCharacter: new FormControl<string | null | undefined>(undefined),
			fieldsTerminatedBy: new FormControl<string | null | undefined>(undefined),
			linesTerminatedBy: new FormControl<string | null | undefined>(undefined),
			quoteCharacter: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Database instance clone request. */
	export interface InstancesCloneRequest {

		/** Database instance clone context. */
		cloneContext?: CloneContext;
	}

	/** Database instance clone request. */
	export interface InstancesCloneRequestFormProperties {
	}
	export function CreateInstancesCloneRequestFormGroup() {
		return new FormGroup<InstancesCloneRequestFormProperties>({
		});

	}


	/** Database demote primary instance request. */
	export interface InstancesDemoteMasterRequest {

		/** Database instance demote primary instance context. */
		demoteMasterContext?: DemoteMasterContext;
	}

	/** Database demote primary instance request. */
	export interface InstancesDemoteMasterRequestFormProperties {
	}
	export function CreateInstancesDemoteMasterRequestFormGroup() {
		return new FormGroup<InstancesDemoteMasterRequestFormProperties>({
		});

	}


	/** This request is used to demote an existing standalone instance to be a Cloud SQL read replica for an external database server. */
	export interface InstancesDemoteRequest {

		/** This context is used to demote an existing standalone instance to be a Cloud SQL read replica for an external database server. */
		demoteContext?: DemoteContext;
	}

	/** This request is used to demote an existing standalone instance to be a Cloud SQL read replica for an external database server. */
	export interface InstancesDemoteRequestFormProperties {
	}
	export function CreateInstancesDemoteRequestFormGroup() {
		return new FormGroup<InstancesDemoteRequestFormProperties>({
		});

	}


	/** Database instance export request. */
	export interface InstancesExportRequest {

		/** Database instance export context. */
		exportContext?: ExportContext;
	}

	/** Database instance export request. */
	export interface InstancesExportRequestFormProperties {
	}
	export function CreateInstancesExportRequestFormGroup() {
		return new FormGroup<InstancesExportRequestFormProperties>({
		});

	}


	/** Instance failover request. */
	export interface InstancesFailoverRequest {

		/** Database instance failover context. */
		failoverContext?: FailoverContext;
	}

	/** Instance failover request. */
	export interface InstancesFailoverRequestFormProperties {
	}
	export function CreateInstancesFailoverRequestFormGroup() {
		return new FormGroup<InstancesFailoverRequestFormProperties>({
		});

	}


	/** Database instance import request. */
	export interface InstancesImportRequest {

		/** Database instance import context. */
		importContext?: ImportContext;
	}

	/** Database instance import request. */
	export interface InstancesImportRequestFormProperties {
	}
	export function CreateInstancesImportRequestFormGroup() {
		return new FormGroup<InstancesImportRequestFormProperties>({
		});

	}


	/** Database instances list response. */
	export interface InstancesListResponse {

		/** List of database instance resources. */
		items?: Array<DatabaseInstance>;

		/** This is always `sql#instancesList`. */
		kind?: string | null;

		/** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken?: string | null;

		/** List of warnings that occurred while handling the request. */
		warnings?: Array<ApiWarning>;
	}

	/** Database instances list response. */
	export interface InstancesListResponseFormProperties {

		/** This is always `sql#instancesList`. */
		kind: FormControl<string | null | undefined>,

		/** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateInstancesListResponseFormGroup() {
		return new FormGroup<InstancesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Instances ListServerCas response. */
	export interface InstancesListServerCasResponse {
		activeVersion?: string | null;

		/** List of server CA certificates for the instance. */
		certs?: Array<SslCert>;

		/** This is always `sql#instancesListServerCas`. */
		kind?: string | null;
	}

	/** Instances ListServerCas response. */
	export interface InstancesListServerCasResponseFormProperties {
		activeVersion: FormControl<string | null | undefined>,

		/** This is always `sql#instancesListServerCas`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateInstancesListServerCasResponseFormGroup() {
		return new FormGroup<InstancesListServerCasResponseFormProperties>({
			activeVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Database Instance reencrypt request. */
	export interface InstancesReencryptRequest {

		/** Backup Reencryption Config */
		backupReencryptionConfig?: BackupReencryptionConfig;
	}

	/** Database Instance reencrypt request. */
	export interface InstancesReencryptRequestFormProperties {
	}
	export function CreateInstancesReencryptRequestFormGroup() {
		return new FormGroup<InstancesReencryptRequestFormProperties>({
		});

	}


	/** Database instance restore backup request. */
	export interface InstancesRestoreBackupRequest {

		/** Database instance restore from backup context. Backup context contains source instance id and project id. */
		restoreBackupContext?: RestoreBackupContext;
	}

	/** Database instance restore backup request. */
	export interface InstancesRestoreBackupRequestFormProperties {
	}
	export function CreateInstancesRestoreBackupRequestFormGroup() {
		return new FormGroup<InstancesRestoreBackupRequestFormProperties>({
		});

	}


	/** Database instance restore from backup context. Backup context contains source instance id and project id. */
	export interface RestoreBackupContext {

		/** The ID of the backup run to restore from. */
		backupRunId?: string | null;

		/** The ID of the instance that the backup was taken from. */
		instanceId?: string | null;

		/** This is always `sql#restoreBackupContext`. */
		kind?: string | null;

		/** The full project ID of the source instance. */
		project?: string | null;
	}

	/** Database instance restore from backup context. Backup context contains source instance id and project id. */
	export interface RestoreBackupContextFormProperties {

		/** The ID of the backup run to restore from. */
		backupRunId: FormControl<string | null | undefined>,

		/** The ID of the instance that the backup was taken from. */
		instanceId: FormControl<string | null | undefined>,

		/** This is always `sql#restoreBackupContext`. */
		kind: FormControl<string | null | undefined>,

		/** The full project ID of the source instance. */
		project: FormControl<string | null | undefined>,
	}
	export function CreateRestoreBackupContextFormGroup() {
		return new FormGroup<RestoreBackupContextFormProperties>({
			backupRunId: new FormControl<string | null | undefined>(undefined),
			instanceId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Rotate server CA request. */
	export interface InstancesRotateServerCaRequest {

		/** Instance rotate server CA context. */
		rotateServerCaContext?: RotateServerCaContext;
	}

	/** Rotate server CA request. */
	export interface InstancesRotateServerCaRequestFormProperties {
	}
	export function CreateInstancesRotateServerCaRequestFormGroup() {
		return new FormGroup<InstancesRotateServerCaRequestFormProperties>({
		});

	}


	/** Instance rotate server CA context. */
	export interface RotateServerCaContext {

		/** This is always `sql#rotateServerCaContext`. */
		kind?: string | null;

		/** The fingerprint of the next version to be rotated to. If left unspecified, will be rotated to the most recently added server CA version. */
		nextVersion?: string | null;
	}

	/** Instance rotate server CA context. */
	export interface RotateServerCaContextFormProperties {

		/** This is always `sql#rotateServerCaContext`. */
		kind: FormControl<string | null | undefined>,

		/** The fingerprint of the next version to be rotated to. If left unspecified, will be rotated to the most recently added server CA version. */
		nextVersion: FormControl<string | null | undefined>,
	}
	export function CreateRotateServerCaContextFormGroup() {
		return new FormGroup<RotateServerCaContextFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Instance truncate log request. */
	export interface InstancesTruncateLogRequest {

		/** Database Instance truncate log context. */
		truncateLogContext?: TruncateLogContext;
	}

	/** Instance truncate log request. */
	export interface InstancesTruncateLogRequestFormProperties {
	}
	export function CreateInstancesTruncateLogRequestFormGroup() {
		return new FormGroup<InstancesTruncateLogRequestFormProperties>({
		});

	}


	/** Database Instance truncate log context. */
	export interface TruncateLogContext {

		/** This is always `sql#truncateLogContext`. */
		kind?: string | null;

		/** The type of log to truncate. Valid values are `MYSQL_GENERAL_TABLE` and `MYSQL_SLOW_TABLE`. */
		logType?: string | null;
	}

	/** Database Instance truncate log context. */
	export interface TruncateLogContextFormProperties {

		/** This is always `sql#truncateLogContext`. */
		kind: FormControl<string | null | undefined>,

		/** The type of log to truncate. Valid values are `MYSQL_GENERAL_TABLE` and `MYSQL_SLOW_TABLE`. */
		logType: FormControl<string | null | undefined>,
	}
	export function CreateTruncateLogContextFormGroup() {
		return new FormGroup<TruncateLogContextFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			logType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** MySQL-specific external server sync settings. */
	export interface MySqlSyncConfig {

		/** Flags to use for the initial dump. */
		initialSyncFlags?: Array<SyncFlags>;
	}

	/** MySQL-specific external server sync settings. */
	export interface MySqlSyncConfigFormProperties {
	}
	export function CreateMySqlSyncConfigFormGroup() {
		return new FormGroup<MySqlSyncConfigFormProperties>({
		});

	}


	/** Initial sync flags for certain Cloud SQL APIs. Currently used for the MySQL external server initial dump. */
	export interface SyncFlags {

		/** The name of the flag. */
		name?: string | null;

		/** The value of the flag. This field must be omitted if the flag doesn't take a value. */
		value?: string | null;
	}

	/** Initial sync flags for certain Cloud SQL APIs. Currently used for the MySQL external server initial dump. */
	export interface SyncFlagsFormProperties {

		/** The name of the flag. */
		name: FormControl<string | null | undefined>,

		/** The value of the flag. This field must be omitted if the flag doesn't take a value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSyncFlagsFormGroup() {
		return new FormGroup<SyncFlagsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Operation resource. For successful operations that return an Operation resource, only the fields relevant to the operation are populated in the resource. */
	export interface Operation {

		/** An Admin API warning message. */
		apiWarning?: ApiWarning;

		/** Backup context. */
		backupContext?: BackupContext;

		/** The time this operation finished in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
		endTime?: string | null;

		/** Database instance operation errors list wrapper. */
		error?: OperationErrors;

		/** Database instance export context. */
		exportContext?: ExportContext;

		/** Database instance import context. */
		importContext?: ImportContext;

		/** The time this operation was enqueued in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
		insertTime?: string | null;

		/** This is always `sql#operation`. */
		kind?: string | null;

		/** An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation. */
		name?: string | null;

		/** The type of the operation. Valid values are: * `CREATE` * `DELETE` * `UPDATE` * `RESTART` * `IMPORT` * `EXPORT` * `BACKUP_VOLUME` * `RESTORE_VOLUME` * `CREATE_USER` * `DELETE_USER` * `CREATE_DATABASE` * `DELETE_DATABASE` */
		operationType?: OperationOperationType | null;

		/** The URI of this resource. */
		selfLink?: string | null;

		/** The time this operation actually started in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
		startTime?: string | null;

		/** The status of an operation. */
		status?: OperationStatus | null;

		/** Name of the database instance related to this operation. */
		targetId?: string | null;
		targetLink?: string | null;

		/** The project ID of the target instance related to this operation. */
		targetProject?: string | null;

		/** The email address of the user who initiated this operation. */
		user?: string | null;
	}

	/** An Operation resource. For successful operations that return an Operation resource, only the fields relevant to the operation are populated in the resource. */
	export interface OperationFormProperties {

		/** The time this operation finished in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
		endTime: FormControl<string | null | undefined>,

		/** The time this operation was enqueued in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
		insertTime: FormControl<string | null | undefined>,

		/** This is always `sql#operation`. */
		kind: FormControl<string | null | undefined>,

		/** An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation. */
		name: FormControl<string | null | undefined>,

		/** The type of the operation. Valid values are: * `CREATE` * `DELETE` * `UPDATE` * `RESTART` * `IMPORT` * `EXPORT` * `BACKUP_VOLUME` * `RESTORE_VOLUME` * `CREATE_USER` * `DELETE_USER` * `CREATE_DATABASE` * `DELETE_DATABASE` */
		operationType: FormControl<OperationOperationType | null | undefined>,

		/** The URI of this resource. */
		selfLink: FormControl<string | null | undefined>,

		/** The time this operation actually started in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
		startTime: FormControl<string | null | undefined>,

		/** The status of an operation. */
		status: FormControl<OperationStatus | null | undefined>,

		/** Name of the database instance related to this operation. */
		targetId: FormControl<string | null | undefined>,
		targetLink: FormControl<string | null | undefined>,

		/** The project ID of the target instance related to this operation. */
		targetProject: FormControl<string | null | undefined>,

		/** The email address of the user who initiated this operation. */
		user: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			insertTime: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<OperationOperationType | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<OperationStatus | null | undefined>(undefined),
			targetId: new FormControl<string | null | undefined>(undefined),
			targetLink: new FormControl<string | null | undefined>(undefined),
			targetProject: new FormControl<string | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Database instance operation errors list wrapper. */
	export interface OperationErrors {

		/** The list of errors encountered while processing this operation. */
		errors?: Array<OperationError>;

		/** This is always `sql#operationErrors`. */
		kind?: string | null;
	}

	/** Database instance operation errors list wrapper. */
	export interface OperationErrorsFormProperties {

		/** This is always `sql#operationErrors`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOperationErrorsFormGroup() {
		return new FormGroup<OperationErrorsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OperationOperationType { SQL_OPERATION_TYPE_UNSPECIFIED = 'SQL_OPERATION_TYPE_UNSPECIFIED', IMPORT = 'IMPORT', EXPORT = 'EXPORT', CREATE = 'CREATE', UPDATE = 'UPDATE', DELETE = 'DELETE', RESTART = 'RESTART', BACKUP = 'BACKUP', SNAPSHOT = 'SNAPSHOT', BACKUP_VOLUME = 'BACKUP_VOLUME', DELETE_VOLUME = 'DELETE_VOLUME', RESTORE_VOLUME = 'RESTORE_VOLUME', INJECT_USER = 'INJECT_USER', CLONE = 'CLONE', STOP_REPLICA = 'STOP_REPLICA', START_REPLICA = 'START_REPLICA', PROMOTE_REPLICA = 'PROMOTE_REPLICA', CREATE_REPLICA = 'CREATE_REPLICA', CREATE_USER = 'CREATE_USER', DELETE_USER = 'DELETE_USER', UPDATE_USER = 'UPDATE_USER', CREATE_DATABASE = 'CREATE_DATABASE', DELETE_DATABASE = 'DELETE_DATABASE', UPDATE_DATABASE = 'UPDATE_DATABASE', FAILOVER = 'FAILOVER', DELETE_BACKUP = 'DELETE_BACKUP', RECREATE_REPLICA = 'RECREATE_REPLICA', TRUNCATE_LOG = 'TRUNCATE_LOG', DEMOTE_MASTER = 'DEMOTE_MASTER', MAINTENANCE = 'MAINTENANCE', ENABLE_PRIVATE_IP = 'ENABLE_PRIVATE_IP', DEFER_MAINTENANCE = 'DEFER_MAINTENANCE', CREATE_CLONE = 'CREATE_CLONE', RESCHEDULE_MAINTENANCE = 'RESCHEDULE_MAINTENANCE', START_EXTERNAL_SYNC = 'START_EXTERNAL_SYNC', LOG_CLEANUP = 'LOG_CLEANUP', AUTO_RESTART = 'AUTO_RESTART', REENCRYPT = 'REENCRYPT', SWITCHOVER = 'SWITCHOVER' }

	export enum OperationStatus { SQL_OPERATION_STATUS_UNSPECIFIED = 'SQL_OPERATION_STATUS_UNSPECIFIED', PENDING = 'PENDING', RUNNING = 'RUNNING', DONE = 'DONE' }


	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelRequested?: boolean | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusDetail?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelRequested: FormControl<boolean | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Human-readable status of the operation, if any. */
		statusDetail: FormControl<string | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			cancelRequested: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			statusDetail: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Operations list response. */
	export interface OperationsListResponse {

		/** List of operation resources. */
		items?: Array<Operation>;

		/** This is always `sql#operationsList`. */
		kind?: string | null;

		/** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken?: string | null;
	}

	/** Operations list response. */
	export interface OperationsListResponseFormProperties {

		/** This is always `sql#operationsList`. */
		kind: FormControl<string | null | undefined>,

		/** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateOperationsListResponseFormGroup() {
		return new FormGroup<OperationsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Read-only password status. */
	export interface PasswordStatus {

		/** If true, user does not have login privileges. */
		locked?: boolean | null;

		/** The expiration time of the current password. */
		passwordExpirationTime?: string | null;
	}

	/** Read-only password status. */
	export interface PasswordStatusFormProperties {

		/** If true, user does not have login privileges. */
		locked: FormControl<boolean | null | undefined>,

		/** The expiration time of the current password. */
		passwordExpirationTime: FormControl<string | null | undefined>,
	}
	export function CreatePasswordStatusFormGroup() {
		return new FormGroup<PasswordStatusFormProperties>({
			locked: new FormControl<boolean | null | undefined>(undefined),
			passwordExpirationTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Perform disk shrink context. */
	export interface PerformDiskShrinkContext {

		/** The target disk shrink size in GigaBytes. */
		targetSizeGb?: string | null;
	}

	/** Perform disk shrink context. */
	export interface PerformDiskShrinkContextFormProperties {

		/** The target disk shrink size in GigaBytes. */
		targetSizeGb: FormControl<string | null | undefined>,
	}
	export function CreatePerformDiskShrinkContextFormGroup() {
		return new FormGroup<PerformDiskShrinkContextFormProperties>({
			targetSizeGb: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Reschedule {

		/** Required. The type of the reschedule. */
		rescheduleType?: RescheduleRescheduleType | null;

		/** Optional. Timestamp when the maintenance shall be rescheduled to if reschedule_type=SPECIFIC_TIME, in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
		scheduleTime?: string | null;
	}
	export interface RescheduleFormProperties {

		/** Required. The type of the reschedule. */
		rescheduleType: FormControl<RescheduleRescheduleType | null | undefined>,

		/** Optional. Timestamp when the maintenance shall be rescheduled to if reschedule_type=SPECIFIC_TIME, in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
		scheduleTime: FormControl<string | null | undefined>,
	}
	export function CreateRescheduleFormGroup() {
		return new FormGroup<RescheduleFormProperties>({
			rescheduleType: new FormControl<RescheduleRescheduleType | null | undefined>(undefined),
			scheduleTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RescheduleRescheduleType { RESCHEDULE_TYPE_UNSPECIFIED = 'RESCHEDULE_TYPE_UNSPECIFIED', IMMEDIATE = 'IMMEDIATE', NEXT_AVAILABLE_WINDOW = 'NEXT_AVAILABLE_WINDOW', SPECIFIC_TIME = 'SPECIFIC_TIME' }


	/** External primary instance migration setting error/warning. */
	export interface SqlExternalSyncSettingError {

		/** Additional information about the error encountered. */
		detail?: string | null;

		/** Can be `sql#externalSyncSettingError` or `sql#externalSyncSettingWarning`. */
		kind?: string | null;

		/** Identifies the specific error that occurred. */
		type?: SqlExternalSyncSettingErrorType | null;
	}

	/** External primary instance migration setting error/warning. */
	export interface SqlExternalSyncSettingErrorFormProperties {

		/** Additional information about the error encountered. */
		detail: FormControl<string | null | undefined>,

		/** Can be `sql#externalSyncSettingError` or `sql#externalSyncSettingWarning`. */
		kind: FormControl<string | null | undefined>,

		/** Identifies the specific error that occurred. */
		type: FormControl<SqlExternalSyncSettingErrorType | null | undefined>,
	}
	export function CreateSqlExternalSyncSettingErrorFormGroup() {
		return new FormGroup<SqlExternalSyncSettingErrorFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SqlExternalSyncSettingErrorType | null | undefined>(undefined),
		});

	}

	export enum SqlExternalSyncSettingErrorType { SQL_EXTERNAL_SYNC_SETTING_ERROR_TYPE_UNSPECIFIED = 'SQL_EXTERNAL_SYNC_SETTING_ERROR_TYPE_UNSPECIFIED', CONNECTION_FAILURE = 'CONNECTION_FAILURE', BINLOG_NOT_ENABLED = 'BINLOG_NOT_ENABLED', INCOMPATIBLE_DATABASE_VERSION = 'INCOMPATIBLE_DATABASE_VERSION', REPLICA_ALREADY_SETUP = 'REPLICA_ALREADY_SETUP', INSUFFICIENT_PRIVILEGE = 'INSUFFICIENT_PRIVILEGE', UNSUPPORTED_MIGRATION_TYPE = 'UNSUPPORTED_MIGRATION_TYPE', NO_PGLOGICAL_INSTALLED = 'NO_PGLOGICAL_INSTALLED', PGLOGICAL_NODE_ALREADY_EXISTS = 'PGLOGICAL_NODE_ALREADY_EXISTS', INVALID_WAL_LEVEL = 'INVALID_WAL_LEVEL', INVALID_SHARED_PRELOAD_LIBRARY = 'INVALID_SHARED_PRELOAD_LIBRARY', INSUFFICIENT_MAX_REPLICATION_SLOTS = 'INSUFFICIENT_MAX_REPLICATION_SLOTS', INSUFFICIENT_MAX_WAL_SENDERS = 'INSUFFICIENT_MAX_WAL_SENDERS', INSUFFICIENT_MAX_WORKER_PROCESSES = 'INSUFFICIENT_MAX_WORKER_PROCESSES', UNSUPPORTED_EXTENSIONS = 'UNSUPPORTED_EXTENSIONS', INVALID_RDS_LOGICAL_REPLICATION = 'INVALID_RDS_LOGICAL_REPLICATION', INVALID_LOGGING_SETUP = 'INVALID_LOGGING_SETUP', INVALID_DB_PARAM = 'INVALID_DB_PARAM', UNSUPPORTED_GTID_MODE = 'UNSUPPORTED_GTID_MODE', SQLSERVER_AGENT_NOT_RUNNING = 'SQLSERVER_AGENT_NOT_RUNNING', UNSUPPORTED_TABLE_DEFINITION = 'UNSUPPORTED_TABLE_DEFINITION', UNSUPPORTED_DEFINER = 'UNSUPPORTED_DEFINER', SQLSERVER_SERVERNAME_MISMATCH = 'SQLSERVER_SERVERNAME_MISMATCH', PRIMARY_ALREADY_SETUP = 'PRIMARY_ALREADY_SETUP', UNSUPPORTED_BINLOG_FORMAT = 'UNSUPPORTED_BINLOG_FORMAT', BINLOG_RETENTION_SETTING = 'BINLOG_RETENTION_SETTING', UNSUPPORTED_STORAGE_ENGINE = 'UNSUPPORTED_STORAGE_ENGINE', LIMITED_SUPPORT_TABLES = 'LIMITED_SUPPORT_TABLES', EXISTING_DATA_IN_REPLICA = 'EXISTING_DATA_IN_REPLICA', MISSING_OPTIONAL_PRIVILEGES = 'MISSING_OPTIONAL_PRIVILEGES', RISKY_BACKUP_ADMIN_PRIVILEGE = 'RISKY_BACKUP_ADMIN_PRIVILEGE', INSUFFICIENT_GCS_PERMISSIONS = 'INSUFFICIENT_GCS_PERMISSIONS', INVALID_FILE_INFO = 'INVALID_FILE_INFO', UNSUPPORTED_DATABASE_SETTINGS = 'UNSUPPORTED_DATABASE_SETTINGS', MYSQL_PARALLEL_IMPORT_INSUFFICIENT_PRIVILEGE = 'MYSQL_PARALLEL_IMPORT_INSUFFICIENT_PRIVILEGE', LOCAL_INFILE_OFF = 'LOCAL_INFILE_OFF', TURN_ON_PITR_AFTER_PROMOTE = 'TURN_ON_PITR_AFTER_PROMOTE', INCOMPATIBLE_DATABASE_MINOR_VERSION = 'INCOMPATIBLE_DATABASE_MINOR_VERSION', SOURCE_MAX_SUBSCRIPTIONS = 'SOURCE_MAX_SUBSCRIPTIONS', UNABLE_TO_VERIFY_DEFINERS = 'UNABLE_TO_VERIFY_DEFINERS' }


	/** Instance get disk shrink config response. */
	export interface SqlInstancesGetDiskShrinkConfigResponse {

		/** This is always `sql#getDiskShrinkConfig`. */
		kind?: string | null;

		/** Additional message to customers. */
		message?: string | null;

		/** The minimum size to which a disk can be shrunk in GigaBytes. */
		minimalTargetSizeGb?: string | null;
	}

	/** Instance get disk shrink config response. */
	export interface SqlInstancesGetDiskShrinkConfigResponseFormProperties {

		/** This is always `sql#getDiskShrinkConfig`. */
		kind: FormControl<string | null | undefined>,

		/** Additional message to customers. */
		message: FormControl<string | null | undefined>,

		/** The minimum size to which a disk can be shrunk in GigaBytes. */
		minimalTargetSizeGb: FormControl<string | null | undefined>,
	}
	export function CreateSqlInstancesGetDiskShrinkConfigResponseFormGroup() {
		return new FormGroup<SqlInstancesGetDiskShrinkConfigResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			minimalTargetSizeGb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Instance get latest recovery time response. */
	export interface SqlInstancesGetLatestRecoveryTimeResponse {

		/** This is always `sql#getLatestRecoveryTime`. */
		kind?: string | null;

		/** Timestamp, identifies the latest recovery time of the source instance. */
		latestRecoveryTime?: string | null;
	}

	/** Instance get latest recovery time response. */
	export interface SqlInstancesGetLatestRecoveryTimeResponseFormProperties {

		/** This is always `sql#getLatestRecoveryTime`. */
		kind: FormControl<string | null | undefined>,

		/** Timestamp, identifies the latest recovery time of the source instance. */
		latestRecoveryTime: FormControl<string | null | undefined>,
	}
	export function CreateSqlInstancesGetLatestRecoveryTimeResponseFormGroup() {
		return new FormGroup<SqlInstancesGetLatestRecoveryTimeResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			latestRecoveryTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reschedule options for maintenance windows. */
	export interface SqlInstancesRescheduleMaintenanceRequestBody {
		reschedule?: Reschedule;
	}

	/** Reschedule options for maintenance windows. */
	export interface SqlInstancesRescheduleMaintenanceRequestBodyFormProperties {
	}
	export function CreateSqlInstancesRescheduleMaintenanceRequestBodyFormGroup() {
		return new FormGroup<SqlInstancesRescheduleMaintenanceRequestBodyFormProperties>({
		});

	}


	/** Instance reset replica size request. */
	export interface SqlInstancesResetReplicaSizeRequest {
	}

	/** Instance reset replica size request. */
	export interface SqlInstancesResetReplicaSizeRequestFormProperties {
	}
	export function CreateSqlInstancesResetReplicaSizeRequestFormGroup() {
		return new FormGroup<SqlInstancesResetReplicaSizeRequestFormProperties>({
		});

	}


	/** Instance start external sync request. */
	export interface SqlInstancesStartExternalSyncRequest {

		/** MySQL-specific external server sync settings. */
		mysqlSyncConfig?: MySqlSyncConfig;

		/** Whether to skip the verification step (VESS). */
		skipVerification?: boolean | null;

		/** External sync mode. */
		syncMode?: SqlInstancesStartExternalSyncRequestSyncMode | null;

		/** Optional. Parallel level for initial data sync. Currently only applicable for MySQL. */
		syncParallelLevel?: SqlInstancesStartExternalSyncRequestSyncParallelLevel | null;
	}

	/** Instance start external sync request. */
	export interface SqlInstancesStartExternalSyncRequestFormProperties {

		/** Whether to skip the verification step (VESS). */
		skipVerification: FormControl<boolean | null | undefined>,

		/** External sync mode. */
		syncMode: FormControl<SqlInstancesStartExternalSyncRequestSyncMode | null | undefined>,

		/** Optional. Parallel level for initial data sync. Currently only applicable for MySQL. */
		syncParallelLevel: FormControl<SqlInstancesStartExternalSyncRequestSyncParallelLevel | null | undefined>,
	}
	export function CreateSqlInstancesStartExternalSyncRequestFormGroup() {
		return new FormGroup<SqlInstancesStartExternalSyncRequestFormProperties>({
			skipVerification: new FormControl<boolean | null | undefined>(undefined),
			syncMode: new FormControl<SqlInstancesStartExternalSyncRequestSyncMode | null | undefined>(undefined),
			syncParallelLevel: new FormControl<SqlInstancesStartExternalSyncRequestSyncParallelLevel | null | undefined>(undefined),
		});

	}

	export enum SqlInstancesStartExternalSyncRequestSyncMode { EXTERNAL_SYNC_MODE_UNSPECIFIED = 'EXTERNAL_SYNC_MODE_UNSPECIFIED', ONLINE = 'ONLINE', OFFLINE = 'OFFLINE' }

	export enum SqlInstancesStartExternalSyncRequestSyncParallelLevel { EXTERNAL_SYNC_PARALLEL_LEVEL_UNSPECIFIED = 'EXTERNAL_SYNC_PARALLEL_LEVEL_UNSPECIFIED', MIN = 'MIN', OPTIMAL = 'OPTIMAL', MAX = 'MAX' }


	/** Instance verify external sync settings request. */
	export interface SqlInstancesVerifyExternalSyncSettingsRequest {

		/** MySQL-specific external server sync settings. */
		mysqlSyncConfig?: MySqlSyncConfig;

		/** External sync mode */
		syncMode?: SqlInstancesStartExternalSyncRequestSyncMode | null;

		/** Flag to enable verifying connection only */
		verifyConnectionOnly?: boolean | null;

		/** Optional. Flag to verify settings required by replication setup only */
		verifyReplicationOnly?: boolean | null;
	}

	/** Instance verify external sync settings request. */
	export interface SqlInstancesVerifyExternalSyncSettingsRequestFormProperties {

		/** External sync mode */
		syncMode: FormControl<SqlInstancesStartExternalSyncRequestSyncMode | null | undefined>,

		/** Flag to enable verifying connection only */
		verifyConnectionOnly: FormControl<boolean | null | undefined>,

		/** Optional. Flag to verify settings required by replication setup only */
		verifyReplicationOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateSqlInstancesVerifyExternalSyncSettingsRequestFormGroup() {
		return new FormGroup<SqlInstancesVerifyExternalSyncSettingsRequestFormProperties>({
			syncMode: new FormControl<SqlInstancesStartExternalSyncRequestSyncMode | null | undefined>(undefined),
			verifyConnectionOnly: new FormControl<boolean | null | undefined>(undefined),
			verifyReplicationOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Instance verify external sync settings response. */
	export interface SqlInstancesVerifyExternalSyncSettingsResponse {

		/** List of migration violations. */
		errors?: Array<SqlExternalSyncSettingError>;

		/** This is always `sql#migrationSettingErrorList`. */
		kind?: string | null;

		/** List of migration warnings. */
		warnings?: Array<SqlExternalSyncSettingError>;
	}

	/** Instance verify external sync settings response. */
	export interface SqlInstancesVerifyExternalSyncSettingsResponseFormProperties {

		/** This is always `sql#migrationSettingErrorList`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateSqlInstancesVerifyExternalSyncSettingsResponseFormGroup() {
		return new FormGroup<SqlInstancesVerifyExternalSyncSettingsResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Sql Server user on the Cloud SQL instance. */
	export interface SqlServerUserDetails {

		/** If the user has been disabled */
		disabled?: boolean | null;

		/** The server roles for this user */
		serverRoles?: Array<string>;
	}

	/** Represents a Sql Server user on the Cloud SQL instance. */
	export interface SqlServerUserDetailsFormProperties {

		/** If the user has been disabled */
		disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateSqlServerUserDetailsFormGroup() {
		return new FormGroup<SqlServerUserDetailsFormProperties>({
			disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** SslCertDetail. */
	export interface SslCertDetail {

		/** SslCerts Resource */
		certInfo?: SslCert;

		/** The private key for the client cert, in pem format. Keep private in order to protect your security. */
		certPrivateKey?: string | null;
	}

	/** SslCertDetail. */
	export interface SslCertDetailFormProperties {

		/** The private key for the client cert, in pem format. Keep private in order to protect your security. */
		certPrivateKey: FormControl<string | null | undefined>,
	}
	export function CreateSslCertDetailFormGroup() {
		return new FormGroup<SslCertDetailFormProperties>({
			certPrivateKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SslCerts create ephemeral certificate request. */
	export interface SslCertsCreateEphemeralRequest {

		/** Access token to include in the signed certificate. */
		access_token?: string | null;

		/** PEM encoded public key to include in the signed certificate. */
		public_key?: string | null;
	}

	/** SslCerts create ephemeral certificate request. */
	export interface SslCertsCreateEphemeralRequestFormProperties {

		/** Access token to include in the signed certificate. */
		access_token: FormControl<string | null | undefined>,

		/** PEM encoded public key to include in the signed certificate. */
		public_key: FormControl<string | null | undefined>,
	}
	export function CreateSslCertsCreateEphemeralRequestFormGroup() {
		return new FormGroup<SslCertsCreateEphemeralRequestFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined),
			public_key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SslCerts insert request. */
	export interface SslCertsInsertRequest {

		/** User supplied name. Must be a distinct name from the other certificates for this instance. */
		commonName?: string | null;
	}

	/** SslCerts insert request. */
	export interface SslCertsInsertRequestFormProperties {

		/** User supplied name. Must be a distinct name from the other certificates for this instance. */
		commonName: FormControl<string | null | undefined>,
	}
	export function CreateSslCertsInsertRequestFormGroup() {
		return new FormGroup<SslCertsInsertRequestFormProperties>({
			commonName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SslCert insert response. */
	export interface SslCertsInsertResponse {

		/** SslCertDetail. */
		clientCert?: SslCertDetail;

		/** This is always `sql#sslCertsInsert`. */
		kind?: string | null;

		/** An Operation resource. For successful operations that return an Operation resource, only the fields relevant to the operation are populated in the resource. */
		operation?: Operation;

		/** SslCerts Resource */
		serverCaCert?: SslCert;
	}

	/** SslCert insert response. */
	export interface SslCertsInsertResponseFormProperties {

		/** This is always `sql#sslCertsInsert`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateSslCertsInsertResponseFormGroup() {
		return new FormGroup<SslCertsInsertResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SslCerts list response. */
	export interface SslCertsListResponse {

		/** List of client certificates for the instance. */
		items?: Array<SslCert>;

		/** This is always `sql#sslCertsList`. */
		kind?: string | null;
	}

	/** SslCerts list response. */
	export interface SslCertsListResponseFormProperties {

		/** This is always `sql#sslCertsList`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateSslCertsListResponseFormGroup() {
		return new FormGroup<SslCertsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Google Cloud SQL service tier resource. */
	export interface Tier {

		/** The maximum disk size of this tier in bytes. */
		DiskQuota?: string | null;

		/** The maximum RAM usage of this tier in bytes. */
		RAM?: string | null;

		/** This is always `sql#tier`. */
		kind?: string | null;

		/** The applicable regions for this tier. */
		region?: Array<string>;

		/** An identifier for the machine type, for example, `db-custom-1-3840`. For related information, see [Pricing](/sql/pricing). */
		tier?: string | null;
	}

	/** A Google Cloud SQL service tier resource. */
	export interface TierFormProperties {

		/** The maximum disk size of this tier in bytes. */
		DiskQuota: FormControl<string | null | undefined>,

		/** The maximum RAM usage of this tier in bytes. */
		RAM: FormControl<string | null | undefined>,

		/** This is always `sql#tier`. */
		kind: FormControl<string | null | undefined>,

		/** An identifier for the machine type, for example, `db-custom-1-3840`. For related information, see [Pricing](/sql/pricing). */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateTierFormGroup() {
		return new FormGroup<TierFormProperties>({
			DiskQuota: new FormControl<string | null | undefined>(undefined),
			RAM: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Tiers list response. */
	export interface TiersListResponse {

		/** List of tiers. */
		items?: Array<Tier>;

		/** This is always `sql#tiersList`. */
		kind?: string | null;
	}

	/** Tiers list response. */
	export interface TiersListResponseFormProperties {

		/** This is always `sql#tiersList`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateTiersListResponseFormGroup() {
		return new FormGroup<TiersListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Cloud SQL user resource. */
	export interface User {

		/** Dual password status for the user. */
		dualPasswordType?: UserDualPasswordType | null;

		/** This field is deprecated and will be removed from a future version of the API. */
		etag?: string | null;

		/** Optional. The host from which the user can connect. For `insert` operations, host defaults to an empty string. For `update` operations, host is specified as part of the request URL. The host name cannot be updated after insertion. For a MySQL instance, it's required; for a PostgreSQL or SQL Server instance, it's optional. */
		host?: string | null;

		/** The name of the Cloud SQL instance. This does not include the project ID. Can be omitted for `update` because it is already specified on the URL. */
		instance?: string | null;

		/** This is always `sql#user`. */
		kind?: string | null;

		/** The name of the user in the Cloud SQL instance. Can be omitted for `update` because it is already specified in the URL. */
		name?: string | null;

		/** The password for the user. */
		password?: string | null;

		/** User level password validation policy. */
		passwordPolicy?: UserPasswordValidationPolicy;

		/** The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable. Can be omitted for `update` because it is already specified on the URL. */
		project?: string | null;

		/** Represents a Sql Server user on the Cloud SQL instance. */
		sqlserverUserDetails?: SqlServerUserDetails;

		/** The user type. It determines the method to authenticate the user during login. The default is the database's built-in user type. */
		type?: UserType | null;
	}

	/** A Cloud SQL user resource. */
	export interface UserFormProperties {

		/** Dual password status for the user. */
		dualPasswordType: FormControl<UserDualPasswordType | null | undefined>,

		/** This field is deprecated and will be removed from a future version of the API. */
		etag: FormControl<string | null | undefined>,

		/** Optional. The host from which the user can connect. For `insert` operations, host defaults to an empty string. For `update` operations, host is specified as part of the request URL. The host name cannot be updated after insertion. For a MySQL instance, it's required; for a PostgreSQL or SQL Server instance, it's optional. */
		host: FormControl<string | null | undefined>,

		/** The name of the Cloud SQL instance. This does not include the project ID. Can be omitted for `update` because it is already specified on the URL. */
		instance: FormControl<string | null | undefined>,

		/** This is always `sql#user`. */
		kind: FormControl<string | null | undefined>,

		/** The name of the user in the Cloud SQL instance. Can be omitted for `update` because it is already specified in the URL. */
		name: FormControl<string | null | undefined>,

		/** The password for the user. */
		password: FormControl<string | null | undefined>,

		/** The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable. Can be omitted for `update` because it is already specified on the URL. */
		project: FormControl<string | null | undefined>,

		/** The user type. It determines the method to authenticate the user during login. The default is the database's built-in user type. */
		type: FormControl<UserType | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			dualPasswordType: new FormControl<UserDualPasswordType | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<UserType | null | undefined>(undefined),
		});

	}

	export enum UserDualPasswordType { DUAL_PASSWORD_TYPE_UNSPECIFIED = 'DUAL_PASSWORD_TYPE_UNSPECIFIED', NO_MODIFY_DUAL_PASSWORD = 'NO_MODIFY_DUAL_PASSWORD', NO_DUAL_PASSWORD = 'NO_DUAL_PASSWORD', DUAL_PASSWORD = 'DUAL_PASSWORD' }


	/** User level password validation policy. */
	export interface UserPasswordValidationPolicy {

		/** Number of failed login attempts allowed before user get locked. */
		allowedFailedAttempts?: number | null;

		/** If true, failed login attempts check will be enabled. */
		enableFailedAttemptsCheck?: boolean | null;

		/** If true, the user must specify the current password before changing the password. This flag is supported only for MySQL. */
		enablePasswordVerification?: boolean | null;

		/** Expiration duration after password is updated. */
		passwordExpirationDuration?: string | null;

		/** Read-only password status. */
		status?: PasswordStatus;
	}

	/** User level password validation policy. */
	export interface UserPasswordValidationPolicyFormProperties {

		/** Number of failed login attempts allowed before user get locked. */
		allowedFailedAttempts: FormControl<number | null | undefined>,

		/** If true, failed login attempts check will be enabled. */
		enableFailedAttemptsCheck: FormControl<boolean | null | undefined>,

		/** If true, the user must specify the current password before changing the password. This flag is supported only for MySQL. */
		enablePasswordVerification: FormControl<boolean | null | undefined>,

		/** Expiration duration after password is updated. */
		passwordExpirationDuration: FormControl<string | null | undefined>,
	}
	export function CreateUserPasswordValidationPolicyFormGroup() {
		return new FormGroup<UserPasswordValidationPolicyFormProperties>({
			allowedFailedAttempts: new FormControl<number | null | undefined>(undefined),
			enableFailedAttemptsCheck: new FormControl<boolean | null | undefined>(undefined),
			enablePasswordVerification: new FormControl<boolean | null | undefined>(undefined),
			passwordExpirationDuration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UserType { BUILT_IN = 'BUILT_IN', CLOUD_IAM_USER = 'CLOUD_IAM_USER', CLOUD_IAM_SERVICE_ACCOUNT = 'CLOUD_IAM_SERVICE_ACCOUNT', CLOUD_IAM_GROUP = 'CLOUD_IAM_GROUP', CLOUD_IAM_GROUP_USER = 'CLOUD_IAM_GROUP_USER', CLOUD_IAM_GROUP_SERVICE_ACCOUNT = 'CLOUD_IAM_GROUP_SERVICE_ACCOUNT' }


	/** User list response. */
	export interface UsersListResponse {

		/** List of user resources in the instance. */
		items?: Array<User>;

		/** This is always `sql#usersList`. */
		kind?: string | null;

		/** Unused. */
		nextPageToken?: string | null;
	}

	/** User list response. */
	export interface UsersListResponseFormProperties {

		/** This is always `sql#usersList`. */
		kind: FormControl<string | null | undefined>,

		/** Unused. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateUsersListResponseFormGroup() {
		return new FormGroup<UsersListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all available database flags for Cloud SQL instances.
		 * Get v1/flags
		 * @param {string} databaseVersion Database type and version you want to retrieve flags for. By default, this method returns flags for all database types and versions.
		 * @return {FlagsListResponse} Successful response
		 */
		Sql_flags_list(databaseVersion: string | null | undefined): Observable<FlagsListResponse> {
			return this.http.get<FlagsListResponse>(this.baseUri + 'v1/flags?databaseVersion=' + (databaseVersion == null ? '' : encodeURIComponent(databaseVersion)), {});
		}

		/**
		 * Lists instances under a given project.
		 * Get v1/projects/{project}/instances
		 * @param {string} project Project ID of the project for which to list Cloud SQL instances.
		 * @param {string} filter A filter expression that filters resources listed in the response. The expression is in the form of field:value. For example, 'instanceType:CLOUD_SQL_INSTANCE'. Fields can be nested as needed as per their JSON representation, such as 'settings.userLabels.auto_start:true'. Multiple filter queries are space-separated. For example. 'state:RUNNABLE instanceType:CLOUD_SQL_INSTANCE'. By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly.
		 * @param {number} maxResults The maximum number of instances to return. The service may return fewer than this value. If unspecified, at most 500 instances are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
		 * @param {string} pageToken A previously-returned page token representing part of the larger set of results to view.
		 * @return {InstancesListResponse} Successful response
		 */
		Sql_instances_list(project: string, filter: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<InstancesListResponse> {
			return this.http.get<InstancesListResponse>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Cloud SQL instance.
		 * Post v1/projects/{project}/instances
		 * @param {string} project Project ID of the project to which the newly created Cloud SQL instances should belong.
		 * @return {Operation} Successful response
		 */
		Sql_instances_insert(project: string, requestBody: DatabaseInstance): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Cloud SQL instance.
		 * Delete v1/projects/{project}/instances/{instance}
		 * @param {string} project Project ID of the project that contains the instance to be deleted.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {Operation} Successful response
		 */
		Sql_instances_delete(project: string, instance: string): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)), {});
		}

		/**
		 * Retrieves a resource containing information about a Cloud SQL instance.
		 * Get v1/projects/{project}/instances/{instance}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @return {DatabaseInstance} Successful response
		 */
		Sql_instances_get(project: string, instance: string): Observable<DatabaseInstance> {
			return this.http.get<DatabaseInstance>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)), {});
		}

		/**
		 * Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method supports patch semantics.
		 * Patch v1/projects/{project}/instances/{instance}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {Operation} Successful response
		 */
		Sql_instances_patch(project: string, instance: string, requestBody: DatabaseInstance): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.
		 * Put v1/projects/{project}/instances/{instance}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {Operation} Successful response
		 */
		Sql_instances_update(project: string, instance: string, requestBody: DatabaseInstance): Observable<Operation> {
			return this.http.put<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in.
		 * Post v1/projects/{project}/instances/{instance}/addServerCa
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {Operation} Successful response
		 */
		Sql_instances_addServerCa(project: string, instance: string): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/addServerCa', null, {});
		}

		/**
		 * Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.
		 * Get v1/projects/{project}/instances/{instance}/backupRuns
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID, or "-" for all instances. This does not include the project ID.
		 * @param {number} maxResults Maximum number of backup runs per response.
		 * @param {string} pageToken A previously-returned page token representing part of the larger set of results to view.
		 * @return {BackupRunsListResponse} Successful response
		 */
		Sql_backupRuns_list(project: string, instance: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<BackupRunsListResponse> {
			return this.http.get<BackupRunsListResponse>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/backupRuns&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new backup run on demand.
		 * Post v1/projects/{project}/instances/{instance}/backupRuns
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {Operation} Successful response
		 */
		Sql_backupRuns_insert(project: string, instance: string, requestBody: BackupRun): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/backupRuns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the backup taken by a backup run.
		 * Delete v1/projects/{project}/instances/{instance}/backupRuns/{id}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @param {string} id The ID of the backup run to delete. To find a backup run ID, use the [list](https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1/backupRuns/list) method.
		 * @return {Operation} Successful response
		 */
		Sql_backupRuns_delete(project: string, instance: string, id: string): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/backupRuns/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves a resource containing information about a backup run.
		 * Get v1/projects/{project}/instances/{instance}/backupRuns/{id}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @param {string} id The ID of this backup run.
		 * @return {BackupRun} Successful response
		 */
		Sql_backupRuns_get(project: string, instance: string, id: string): Observable<BackupRun> {
			return this.http.get<BackupRun>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/backupRuns/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart.
		 * Post v1/projects/{project}/instances/{instance}/clone
		 * @param {string} project Project ID of the source as well as the clone Cloud SQL instance.
		 * @param {string} instance The ID of the Cloud SQL instance to be cloned (source). This does not include the project ID.
		 * @return {Operation} Successful response
		 */
		Sql_instances_clone(project: string, instance: string, requestBody: InstancesCloneRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/clone', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves connect settings about a Cloud SQL instance.
		 * Get v1/projects/{project}/instances/{instance}/connectSettings
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @param {string} readTime Optional. Optional snapshot read timestamp to trade freshness for performance.
		 * @return {ConnectSettings} Successful response
		 */
		Sql_connect_get(project: string, instance: string, readTime: string | null | undefined): Observable<ConnectSettings> {
			return this.http.get<ConnectSettings>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/connectSettings&readTime=' + (readTime == null ? '' : encodeURIComponent(readTime)), {});
		}

		/**
		 * Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
		 * Post v1/projects/{project}/instances/{instance}/createEphemeral
		 * @param {string} project Project ID of the Cloud SQL project.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {SslCert} Successful response
		 */
		Sql_sslCerts_createEphemeral(project: string, instance: string, requestBody: SslCertsCreateEphemeralRequest): Observable<SslCert> {
			return this.http.post<SslCert>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/createEphemeral', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists databases in the specified Cloud SQL instance.
		 * Get v1/projects/{project}/instances/{instance}/databases
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {DatabasesListResponse} Successful response
		 */
		Sql_databases_list(project: string, instance: string): Observable<DatabasesListResponse> {
			return this.http.get<DatabasesListResponse>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/databases', {});
		}

		/**
		 * Inserts a resource containing information about a database inside a Cloud SQL instance. **Note:** You can't modify the default character set and collation.
		 * Post v1/projects/{project}/instances/{instance}/databases
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @return {Operation} Successful response
		 */
		Sql_databases_insert(project: string, instance: string, requestBody: Database): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/databases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a database from a Cloud SQL instance.
		 * Delete v1/projects/{project}/instances/{instance}/databases/{database}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @param {string} database Name of the database to be deleted in the instance.
		 * @return {Operation} Successful response
		 */
		Sql_databases_delete(project: string, instance: string, database: string): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/databases/' + (database == null ? '' : encodeURIComponent(database)), {});
		}

		/**
		 * Retrieves a resource containing information about a database inside a Cloud SQL instance.
		 * Get v1/projects/{project}/instances/{instance}/databases/{database}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @param {string} database Name of the database in the instance.
		 * @return {Database} Successful response
		 */
		Sql_databases_get(project: string, instance: string, database: string): Observable<Database> {
			return this.http.get<Database>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/databases/' + (database == null ? '' : encodeURIComponent(database)), {});
		}

		/**
		 * Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.
		 * Patch v1/projects/{project}/instances/{instance}/databases/{database}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @param {string} database Name of the database to be updated in the instance.
		 * @return {Operation} Successful response
		 */
		Sql_databases_patch(project: string, instance: string, database: string, requestBody: Database): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/databases/' + (database == null ? '' : encodeURIComponent(database)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a resource containing information about a database inside a Cloud SQL instance.
		 * Put v1/projects/{project}/instances/{instance}/databases/{database}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @param {string} database Name of the database to be updated in the instance.
		 * @return {Operation} Successful response
		 */
		Sql_databases_update(project: string, instance: string, database: string, requestBody: Database): Observable<Operation> {
			return this.http.put<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/databases/' + (database == null ? '' : encodeURIComponent(database)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server.
		 * Post v1/projects/{project}/instances/{instance}/demote
		 * @param {string} project Required. ID of the project that contains the instance.
		 * @param {string} instance Required. Cloud SQL instance name.
		 * @return {Operation} Successful response
		 */
		Sql_instances_demote(project: string, instance: string, requestBody: InstancesDemoteRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/demote', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.
		 * Post v1/projects/{project}/instances/{instance}/demoteMaster
		 * @param {string} project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance name.
		 * @return {Operation} Successful response
		 */
		Sql_instances_demoteMaster(project: string, instance: string, requestBody: InstancesDemoteMasterRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/demoteMaster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.
		 * Post v1/projects/{project}/instances/{instance}/export
		 * @param {string} project Project ID of the project that contains the instance to be exported.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {Operation} Successful response
		 */
		Sql_instances_export(project: string, instance: string, requestBody: InstancesExportRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/export', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. Users are then rerouted to the new primary. For more information, see the [Overview of high availability](https://cloud.google.com/sql/docs/mysql/high-availability) page in the Cloud SQL documentation. If using Legacy HA (MySQL only), this causes the instance to failover to its failover replica instance.
		 * Post v1/projects/{project}/instances/{instance}/failover
		 * @param {string} project ID of the project that contains the read replica.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {Operation} Successful response
		 */
		Sql_instances_failover(project: string, instance: string, requestBody: InstancesFailoverRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/failover', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Disk Shrink Config for a given instance.
		 * Get v1/projects/{project}/instances/{instance}/getDiskShrinkConfig
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {SqlInstancesGetDiskShrinkConfigResponse} Successful response
		 */
		Sql_projects_instances_getDiskShrinkConfig(project: string, instance: string): Observable<SqlInstancesGetDiskShrinkConfigResponse> {
			return this.http.get<SqlInstancesGetDiskShrinkConfigResponse>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/getDiskShrinkConfig', {});
		}

		/**
		 * Get Latest Recovery Time for a given instance.
		 * Get v1/projects/{project}/instances/{instance}/getLatestRecoveryTime
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {SqlInstancesGetLatestRecoveryTimeResponse} Successful response
		 */
		Sql_projects_instances_getLatestRecoveryTime(project: string, instance: string): Observable<SqlInstancesGetLatestRecoveryTimeResponse> {
			return this.http.get<SqlInstancesGetLatestRecoveryTimeResponse>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/getLatestRecoveryTime', {});
		}

		/**
		 * Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.
		 * Post v1/projects/{project}/instances/{instance}/import
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {Operation} Successful response
		 */
		Sql_instances_import(project: string, instance: string, requestBody: InstancesImportRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out.
		 * Get v1/projects/{project}/instances/{instance}/listServerCas
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {InstancesListServerCasResponse} Successful response
		 */
		Sql_instances_listServerCas(project: string, instance: string): Observable<InstancesListServerCasResponse> {
			return this.http.get<InstancesListServerCasResponse>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/listServerCas', {});
		}

		/**
		 * Perform Disk Shrink on primary instance.
		 * Post v1/projects/{project}/instances/{instance}/performDiskShrink
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {Operation} Successful response
		 */
		Sql_projects_instances_performDiskShrink(project: string, instance: string, requestBody: PerformDiskShrinkContext): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/performDiskShrink', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Promotes the read replica instance to be a stand-alone Cloud SQL instance. Using this operation might cause your instance to restart.
		 * Post v1/projects/{project}/instances/{instance}/promoteReplica
		 * @param {string} project ID of the project that contains the read replica.
		 * @param {string} instance Cloud SQL read replica instance name.
		 * @param {boolean} failover Set to true if the promote operation should attempt to re-add the original primary as a replica when it comes back online. Otherwise, if this value is false or not set, the original primary will be a standalone instance.
		 * @return {Operation} Successful response
		 */
		Sql_instances_promoteReplica(project: string, instance: string, failover: boolean | null | undefined): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/promoteReplica&failover=' + failover, null, {});
		}

		/**
		 * Reencrypt CMEK instance with latest key version.
		 * Post v1/projects/{project}/instances/{instance}/reencrypt
		 * @param {string} project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {Operation} Successful response
		 */
		Sql_instances_reencrypt(project: string, instance: string, requestBody: InstancesReencryptRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/reencrypt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reschedules the maintenance on the given instance.
		 * Post v1/projects/{project}/instances/{instance}/rescheduleMaintenance
		 * @param {string} project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {Operation} Successful response
		 */
		Sql_projects_instances_rescheduleMaintenance(project: string, instance: string, requestBody: SqlInstancesRescheduleMaintenanceRequestBody): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/rescheduleMaintenance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reset Replica Size to primary instance disk size.
		 * Post v1/projects/{project}/instances/{instance}/resetReplicaSize
		 * @param {string} project ID of the project that contains the read replica.
		 * @param {string} instance Cloud SQL read replica instance name.
		 * @return {Operation} Successful response
		 */
		Sql_projects_instances_resetReplicaSize(project: string, instance: string, requestBody: SqlInstancesResetReplicaSizeRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/resetReplicaSize', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes all client certificates and generates a new server SSL certificate for the instance.
		 * Post v1/projects/{project}/instances/{instance}/resetSslConfig
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {Operation} Successful response
		 */
		Sql_instances_resetSslConfig(project: string, instance: string): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/resetSslConfig', null, {});
		}

		/**
		 * Restarts a Cloud SQL instance.
		 * Post v1/projects/{project}/instances/{instance}/restart
		 * @param {string} project Project ID of the project that contains the instance to be restarted.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {Operation} Successful response
		 */
		Sql_instances_restart(project: string, instance: string): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/restart', null, {});
		}

		/**
		 * Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.
		 * Post v1/projects/{project}/instances/{instance}/restoreBackup
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {Operation} Successful response
		 */
		Sql_instances_restoreBackup(project: string, instance: string, requestBody: InstancesRestoreBackupRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/restoreBackup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method.
		 * Post v1/projects/{project}/instances/{instance}/rotateServerCa
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {Operation} Successful response
		 */
		Sql_instances_rotateServerCa(project: string, instance: string, requestBody: InstancesRotateServerCaRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/rotateServerCa', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the current SSL certificates for the instance.
		 * Get v1/projects/{project}/instances/{instance}/sslCerts
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {SslCertsListResponse} Successful response
		 */
		Sql_sslCerts_list(project: string, instance: string): Observable<SslCertsListResponse> {
			return this.http.get<SslCertsListResponse>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/sslCerts', {});
		}

		/**
		 * Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.
		 * Post v1/projects/{project}/instances/{instance}/sslCerts
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {SslCertsInsertResponse} Successful response
		 */
		Sql_sslCerts_insert(project: string, instance: string, requestBody: SslCertsInsertRequest): Observable<SslCertsInsertResponse> {
			return this.http.post<SslCertsInsertResponse>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/sslCerts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.
		 * Delete v1/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @param {string} sha1Fingerprint Sha1 FingerPrint.
		 * @return {Operation} Successful response
		 */
		Sql_sslCerts_delete(project: string, instance: string, sha1Fingerprint: string): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/sslCerts/' + (sha1Fingerprint == null ? '' : encodeURIComponent(sha1Fingerprint)), {});
		}

		/**
		 * Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.
		 * Get v1/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @param {string} sha1Fingerprint Sha1 FingerPrint.
		 * @return {SslCert} Successful response
		 */
		Sql_sslCerts_get(project: string, instance: string, sha1Fingerprint: string): Observable<SslCert> {
			return this.http.get<SslCert>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/sslCerts/' + (sha1Fingerprint == null ? '' : encodeURIComponent(sha1Fingerprint)), {});
		}

		/**
		 * Start External primary instance migration.
		 * Post v1/projects/{project}/instances/{instance}/startExternalSync
		 * @param {string} project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {Operation} Successful response
		 */
		Sql_projects_instances_startExternalSync(project: string, instance: string, requestBody: SqlInstancesStartExternalSyncRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/startExternalSync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts the replication in the read replica instance.
		 * Post v1/projects/{project}/instances/{instance}/startReplica
		 * @param {string} project ID of the project that contains the read replica.
		 * @param {string} instance Cloud SQL read replica instance name.
		 * @return {Operation} Successful response
		 */
		Sql_instances_startReplica(project: string, instance: string): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/startReplica', null, {});
		}

		/**
		 * Stops the replication in the read replica instance.
		 * Post v1/projects/{project}/instances/{instance}/stopReplica
		 * @param {string} project ID of the project that contains the read replica.
		 * @param {string} instance Cloud SQL read replica instance name.
		 * @return {Operation} Successful response
		 */
		Sql_instances_stopReplica(project: string, instance: string): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/stopReplica', null, {});
		}

		/**
		 * Switches over from the primary instance to the replica instance.
		 * Post v1/projects/{project}/instances/{instance}/switchover
		 * @param {string} project ID of the project that contains the replica.
		 * @param {string} instance Cloud SQL read replica instance name.
		 * @param {string} dbTimeout Optional. (MySQL only) Cloud SQL instance operations timeout, which is a sum of all database operations. Default value is 10 minutes and can be modified to a maximum value of 24 hours.
		 * @return {Operation} Successful response
		 */
		Sql_instances_switchover(project: string, instance: string, dbTimeout: string | null | undefined): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/switchover&dbTimeout=' + (dbTimeout == null ? '' : encodeURIComponent(dbTimeout)), null, {});
		}

		/**
		 * Truncate MySQL general and slow query log tables MySQL only.
		 * Post v1/projects/{project}/instances/{instance}/truncateLog
		 * @param {string} project Project ID of the Cloud SQL project.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {Operation} Successful response
		 */
		Sql_instances_truncateLog(project: string, instance: string, requestBody: InstancesTruncateLogRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/truncateLog', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a user from a Cloud SQL instance.
		 * Delete v1/projects/{project}/instances/{instance}/users
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @param {string} host Host of the user in the instance.
		 * @param {string} name Name of the user in the instance.
		 * @return {Operation} Successful response
		 */
		Sql_users_delete(project: string, instance: string, host: string | null | undefined, name: string | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/users&host=' + (host == null ? '' : encodeURIComponent(host)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Lists users in the specified Cloud SQL instance.
		 * Get v1/projects/{project}/instances/{instance}/users
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @return {UsersListResponse} Successful response
		 */
		Sql_users_list(project: string, instance: string): Observable<UsersListResponse> {
			return this.http.get<UsersListResponse>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/users', {});
		}

		/**
		 * Creates a new user in a Cloud SQL instance.
		 * Post v1/projects/{project}/instances/{instance}/users
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @return {Operation} Successful response
		 */
		Sql_users_insert(project: string, instance: string, requestBody: User): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing user in a Cloud SQL instance.
		 * Put v1/projects/{project}/instances/{instance}/users
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @param {string} host Optional. Host of the user in the instance.
		 * @param {string} name Name of the user in the instance.
		 * @return {Operation} Successful response
		 */
		Sql_users_update(project: string, instance: string, host: string | null | undefined, name: string | null | undefined, requestBody: User): Observable<Operation> {
			return this.http.put<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/users&host=' + (host == null ? '' : encodeURIComponent(host)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a resource containing information about a user.
		 * Get v1/projects/{project}/instances/{instance}/users/{name}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @param {string} name User of the instance.
		 * @param {string} host Host of a user of the instance.
		 * @return {User} Successful response
		 */
		Sql_users_get(project: string, instance: string, name: string, host: string | null | undefined): Observable<User> {
			return this.http.get<User>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/users/' + (name == null ? '' : encodeURIComponent(name)) + '&host=' + (host == null ? '' : encodeURIComponent(host)), {});
		}

		/**
		 * Verify External primary instance external sync settings.
		 * Post v1/projects/{project}/instances/{instance}/verifyExternalSyncSettings
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {SqlInstancesVerifyExternalSyncSettingsResponse} Successful response
		 */
		Sql_projects_instances_verifyExternalSyncSettings(project: string, instance: string, requestBody: SqlInstancesVerifyExternalSyncSettingsRequest): Observable<SqlInstancesVerifyExternalSyncSettingsResponse> {
			return this.http.post<SqlInstancesVerifyExternalSyncSettingsResponse>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/verifyExternalSyncSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
		 * Post v1/projects/{project}/instances/{instance}:generateEphemeralCert
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {GenerateEphemeralCertResponse} Successful response
		 */
		Sql_connect_generateEphemeral(project: string, instance: string, requestBody: GenerateEphemeralCertRequest): Observable<GenerateEphemeralCertResponse> {
			return this.http.post<GenerateEphemeralCertResponse>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + ':generateEphemeralCert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.
		 * Get v1/projects/{project}/operations
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @param {number} maxResults Maximum number of operations per response.
		 * @param {string} pageToken A previously-returned page token representing part of the larger set of results to view.
		 * @return {OperationsListResponse} Successful response
		 */
		Sql_operations_list(project: string, instance: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<OperationsListResponse> {
			return this.http.get<OperationsListResponse>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/operations&instance=' + (instance == null ? '' : encodeURIComponent(instance)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Retrieves an instance operation that has been performed on an instance.
		 * Get v1/projects/{project}/operations/{operation}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} operation Instance operation ID.
		 * @return {Operation} Successful response
		 */
		Sql_operations_get(project: string, operation: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/operations/' + (operation == null ? '' : encodeURIComponent(operation)), {});
		}

		/**
		 * Cancels an instance operation that has been performed on an instance.
		 * Post v1/projects/{project}/operations/{operation}/cancel
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} operation Instance operation ID.
		 * @return {Empty} Successful response
		 */
		Sql_operations_cancel(project: string, operation: string): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/operations/' + (operation == null ? '' : encodeURIComponent(operation)) + '/cancel', null, {});
		}

		/**
		 * Lists all available machine types (tiers) for Cloud SQL, for example, `db-custom-1-3840`. For more information, see https://cloud.google.com/sql/pricing.
		 * Get v1/projects/{project}/tiers
		 * @param {string} project Project ID of the project for which to list tiers.
		 * @return {TiersListResponse} Successful response
		 */
		Sql_tiers_list(project: string): Observable<TiersListResponse> {
			return this.http.get<TiersListResponse>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/tiers', {});
		}
	}

}

