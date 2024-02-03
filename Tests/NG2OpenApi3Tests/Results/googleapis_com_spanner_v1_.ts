import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Autoscaling config for an instance. */
	export interface AutoscalingConfig {

		/** The autoscaling limits for the instance. Users can define the minimum and maximum compute capacity allocated to the instance, and the autoscaler will only scale within that range. Users can either use nodes or processing units to specify the limits, but should use the same unit to set both the min_limit and max_limit. */
		autoscalingLimits?: AutoscalingLimits;

		/** The autoscaling targets for an instance. */
		autoscalingTargets?: AutoscalingTargets;
	}

	/** Autoscaling config for an instance. */
	export interface AutoscalingConfigFormProperties {
	}
	export function CreateAutoscalingConfigFormGroup() {
		return new FormGroup<AutoscalingConfigFormProperties>({
		});

	}


	/** The autoscaling limits for the instance. Users can define the minimum and maximum compute capacity allocated to the instance, and the autoscaler will only scale within that range. Users can either use nodes or processing units to specify the limits, but should use the same unit to set both the min_limit and max_limit. */
	export interface AutoscalingLimits {

		/** Maximum number of nodes allocated to the instance. If set, this number should be greater than or equal to min_nodes. */
		maxNodes?: number | null;

		/** Maximum number of processing units allocated to the instance. If set, this number should be multiples of 1000 and be greater than or equal to min_processing_units. */
		maxProcessingUnits?: number | null;

		/** Minimum number of nodes allocated to the instance. If set, this number should be greater than or equal to 1. */
		minNodes?: number | null;

		/** Minimum number of processing units allocated to the instance. If set, this number should be multiples of 1000. */
		minProcessingUnits?: number | null;
	}

	/** The autoscaling limits for the instance. Users can define the minimum and maximum compute capacity allocated to the instance, and the autoscaler will only scale within that range. Users can either use nodes or processing units to specify the limits, but should use the same unit to set both the min_limit and max_limit. */
	export interface AutoscalingLimitsFormProperties {

		/** Maximum number of nodes allocated to the instance. If set, this number should be greater than or equal to min_nodes. */
		maxNodes: FormControl<number | null | undefined>,

		/** Maximum number of processing units allocated to the instance. If set, this number should be multiples of 1000 and be greater than or equal to min_processing_units. */
		maxProcessingUnits: FormControl<number | null | undefined>,

		/** Minimum number of nodes allocated to the instance. If set, this number should be greater than or equal to 1. */
		minNodes: FormControl<number | null | undefined>,

		/** Minimum number of processing units allocated to the instance. If set, this number should be multiples of 1000. */
		minProcessingUnits: FormControl<number | null | undefined>,
	}
	export function CreateAutoscalingLimitsFormGroup() {
		return new FormGroup<AutoscalingLimitsFormProperties>({
			maxNodes: new FormControl<number | null | undefined>(undefined),
			maxProcessingUnits: new FormControl<number | null | undefined>(undefined),
			minNodes: new FormControl<number | null | undefined>(undefined),
			minProcessingUnits: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The autoscaling targets for an instance. */
	export interface AutoscalingTargets {

		/** Required. The target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance. This number is on a scale from 0 (no utilization) to 100 (full utilization). The valid range is [10, 90] inclusive. */
		highPriorityCpuUtilizationPercent?: number | null;

		/** Required. The target storage utilization percentage that the autoscaler should be trying to achieve for the instance. This number is on a scale from 0 (no utilization) to 100 (full utilization). The valid range is [10, 99] inclusive. */
		storageUtilizationPercent?: number | null;
	}

	/** The autoscaling targets for an instance. */
	export interface AutoscalingTargetsFormProperties {

		/** Required. The target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance. This number is on a scale from 0 (no utilization) to 100 (full utilization). The valid range is [10, 90] inclusive. */
		highPriorityCpuUtilizationPercent: FormControl<number | null | undefined>,

		/** Required. The target storage utilization percentage that the autoscaler should be trying to achieve for the instance. This number is on a scale from 0 (no utilization) to 100 (full utilization). The valid range is [10, 99] inclusive. */
		storageUtilizationPercent: FormControl<number | null | undefined>,
	}
	export function CreateAutoscalingTargetsFormGroup() {
		return new FormGroup<AutoscalingTargetsFormProperties>({
			highPriorityCpuUtilizationPercent: new FormControl<number | null | undefined>(undefined),
			storageUtilizationPercent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A backup of a Cloud Spanner database. */
	export interface Backup {

		/** Output only. The time the CreateBackup request is received. If the request does not specify `version_time`, the `version_time` of the backup will be equivalent to the `create_time`. */
		createTime?: string | null;

		/** Required for the CreateBackup operation. Name of the database from which this backup was created. This needs to be in the same instance as the backup. Values are of the form `projects//instances//databases/`. */
		database?: string | null;

		/** Output only. The database dialect information for the backup. */
		databaseDialect?: BackupDatabaseDialect | null;

		/** Encryption information for a Cloud Spanner database or backup. */
		encryptionInfo?: EncryptionInfo;

		/** Required for the CreateBackup operation. The expiration time of the backup, with microseconds granularity that must be at least 6 hours and at most 366 days from the time the CreateBackup request is processed. Once the `expire_time` has passed, the backup is eligible to be automatically deleted by Cloud Spanner to free the resources used by the backup. */
		expireTime?: string | null;

		/** Output only. The max allowed expiration time of the backup, with microseconds granularity. A backup's expiration time can be configured in multiple APIs: CreateBackup, UpdateBackup, CopyBackup. When updating or copying an existing backup, the expiration time specified must be less than `Backup.max_expire_time`. */
		maxExpireTime?: string | null;

		/** Output only for the CreateBackup operation. Required for the UpdateBackup operation. A globally unique identifier for the backup which cannot be changed. Values are of the form `projects//instances//backups/a-z*[a-z0-9]` The final segment of the name must be between 2 and 60 characters in length. The backup is stored in the location(s) specified in the instance configuration of the instance containing the backup, identified by the prefix of the backup name of the form `projects//instances/`. */
		name?: string | null;

		/** Output only. The names of the destination backups being created by copying this source backup. The backup names are of the form `projects//instances//backups/`. Referencing backups may exist in different instances. The existence of any referencing backup prevents the backup from being deleted. When the copy operation is done (either successfully completed or cancelled or the destination backup is deleted), the reference to the backup is removed. */
		referencingBackups?: Array<string>;

		/** Output only. The names of the restored databases that reference the backup. The database names are of the form `projects//instances//databases/`. Referencing databases may exist in different instances. The existence of any referencing database prevents the backup from being deleted. When a restored database from the backup enters the `READY` state, the reference to the backup is removed. */
		referencingDatabases?: Array<string>;

		/** Output only. Size of the backup in bytes. */
		sizeBytes?: string | null;

		/** Output only. The current state of the backup. */
		state?: BackupState | null;

		/** The backup will contain an externally consistent copy of the database at the timestamp specified by `version_time`. If `version_time` is not specified, the system will set `version_time` to the `create_time` of the backup. */
		versionTime?: string | null;
	}

	/** A backup of a Cloud Spanner database. */
	export interface BackupFormProperties {

		/** Output only. The time the CreateBackup request is received. If the request does not specify `version_time`, the `version_time` of the backup will be equivalent to the `create_time`. */
		createTime: FormControl<string | null | undefined>,

		/** Required for the CreateBackup operation. Name of the database from which this backup was created. This needs to be in the same instance as the backup. Values are of the form `projects//instances//databases/`. */
		database: FormControl<string | null | undefined>,

		/** Output only. The database dialect information for the backup. */
		databaseDialect: FormControl<BackupDatabaseDialect | null | undefined>,

		/** Required for the CreateBackup operation. The expiration time of the backup, with microseconds granularity that must be at least 6 hours and at most 366 days from the time the CreateBackup request is processed. Once the `expire_time` has passed, the backup is eligible to be automatically deleted by Cloud Spanner to free the resources used by the backup. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. The max allowed expiration time of the backup, with microseconds granularity. A backup's expiration time can be configured in multiple APIs: CreateBackup, UpdateBackup, CopyBackup. When updating or copying an existing backup, the expiration time specified must be less than `Backup.max_expire_time`. */
		maxExpireTime: FormControl<string | null | undefined>,

		/** Output only for the CreateBackup operation. Required for the UpdateBackup operation. A globally unique identifier for the backup which cannot be changed. Values are of the form `projects//instances//backups/a-z*[a-z0-9]` The final segment of the name must be between 2 and 60 characters in length. The backup is stored in the location(s) specified in the instance configuration of the instance containing the backup, identified by the prefix of the backup name of the form `projects//instances/`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Size of the backup in bytes. */
		sizeBytes: FormControl<string | null | undefined>,

		/** Output only. The current state of the backup. */
		state: FormControl<BackupState | null | undefined>,

		/** The backup will contain an externally consistent copy of the database at the timestamp specified by `version_time`. If `version_time` is not specified, the system will set `version_time` to the `create_time` of the backup. */
		versionTime: FormControl<string | null | undefined>,
	}
	export function CreateBackupFormGroup() {
		return new FormGroup<BackupFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			database: new FormControl<string | null | undefined>(undefined),
			databaseDialect: new FormControl<BackupDatabaseDialect | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			maxExpireTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sizeBytes: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<BackupState | null | undefined>(undefined),
			versionTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BackupDatabaseDialect { DATABASE_DIALECT_UNSPECIFIED = 'DATABASE_DIALECT_UNSPECIFIED', GOOGLE_STANDARD_SQL = 'GOOGLE_STANDARD_SQL', POSTGRESQL = 'POSTGRESQL' }


	/** Encryption information for a Cloud Spanner database or backup. */
	export interface EncryptionInfo {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		encryptionStatus?: Status;

		/** Output only. The type of encryption. */
		encryptionType?: EncryptionInfoEncryptionType | null;

		/** Output only. A Cloud KMS key version that is being used to protect the database or backup. */
		kmsKeyVersion?: string | null;
	}

	/** Encryption information for a Cloud Spanner database or backup. */
	export interface EncryptionInfoFormProperties {

		/** Output only. The type of encryption. */
		encryptionType: FormControl<EncryptionInfoEncryptionType | null | undefined>,

		/** Output only. A Cloud KMS key version that is being used to protect the database or backup. */
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

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
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

	export enum EncryptionInfoEncryptionType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', GOOGLE_DEFAULT_ENCRYPTION = 'GOOGLE_DEFAULT_ENCRYPTION', CUSTOMER_MANAGED_ENCRYPTION = 'CUSTOMER_MANAGED_ENCRYPTION' }

	export enum BackupState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', READY = 'READY' }


	/** Information about a backup. */
	export interface BackupInfo {

		/** Name of the backup. */
		backup?: string | null;

		/** The time the CreateBackup request was received. */
		createTime?: string | null;

		/** Name of the database the backup was created from. */
		sourceDatabase?: string | null;

		/** The backup contains an externally consistent copy of `source_database` at the timestamp specified by `version_time`. If the CreateBackup request did not specify `version_time`, the `version_time` of the backup is equivalent to the `create_time`. */
		versionTime?: string | null;
	}

	/** Information about a backup. */
	export interface BackupInfoFormProperties {

		/** Name of the backup. */
		backup: FormControl<string | null | undefined>,

		/** The time the CreateBackup request was received. */
		createTime: FormControl<string | null | undefined>,

		/** Name of the database the backup was created from. */
		sourceDatabase: FormControl<string | null | undefined>,

		/** The backup contains an externally consistent copy of `source_database` at the timestamp specified by `version_time`. If the CreateBackup request did not specify `version_time`, the `version_time` of the backup is equivalent to the `create_time`. */
		versionTime: FormControl<string | null | undefined>,
	}
	export function CreateBackupInfoFormGroup() {
		return new FormGroup<BackupInfoFormProperties>({
			backup: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			sourceDatabase: new FormControl<string | null | undefined>(undefined),
			versionTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for BatchCreateSessions. */
	export interface BatchCreateSessionsRequest {

		/** Required. The number of sessions to be created in this batch call. The API may return fewer than the requested number of sessions. If a specific number of sessions are desired, the client can make additional calls to BatchCreateSessions (adjusting session_count as necessary). */
		sessionCount?: number | null;

		/** A session in the Cloud Spanner API. */
		sessionTemplate?: Session;
	}

	/** The request for BatchCreateSessions. */
	export interface BatchCreateSessionsRequestFormProperties {

		/** Required. The number of sessions to be created in this batch call. The API may return fewer than the requested number of sessions. If a specific number of sessions are desired, the client can make additional calls to BatchCreateSessions (adjusting session_count as necessary). */
		sessionCount: FormControl<number | null | undefined>,
	}
	export function CreateBatchCreateSessionsRequestFormGroup() {
		return new FormGroup<BatchCreateSessionsRequestFormProperties>({
			sessionCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A session in the Cloud Spanner API. */
	export interface Session {

		/** Output only. The approximate timestamp when the session is last used. It is typically earlier than the actual last use time. */
		approximateLastUseTime?: string | null;

		/** Output only. The timestamp when the session is created. */
		createTime?: string | null;

		/** The database role which created this session. */
		creatorRole?: string | null;

		/** The labels for the session. * Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. * Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. * No more than 64 labels can be associated with a given session. See https://goo.gl/xmQnxf for more information on and examples of labels. */
		labels?: {[id: string]: string };

		/** Output only. The name of the session. This is always system-assigned. */
		name?: string | null;
	}

	/** A session in the Cloud Spanner API. */
	export interface SessionFormProperties {

		/** Output only. The approximate timestamp when the session is last used. It is typically earlier than the actual last use time. */
		approximateLastUseTime: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the session is created. */
		createTime: FormControl<string | null | undefined>,

		/** The database role which created this session. */
		creatorRole: FormControl<string | null | undefined>,

		/** The labels for the session. * Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. * Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. * No more than 64 labels can be associated with a given session. See https://goo.gl/xmQnxf for more information on and examples of labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The name of the session. This is always system-assigned. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSessionFormGroup() {
		return new FormGroup<SessionFormProperties>({
			approximateLastUseTime: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			creatorRole: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for BatchCreateSessions. */
	export interface BatchCreateSessionsResponse {

		/** The freshly created sessions. */
		session?: Array<Session>;
	}

	/** The response for BatchCreateSessions. */
	export interface BatchCreateSessionsResponseFormProperties {
	}
	export function CreateBatchCreateSessionsResponseFormGroup() {
		return new FormGroup<BatchCreateSessionsResponseFormProperties>({
		});

	}


	/** The request for BatchWrite. */
	export interface BatchWriteRequest {

		/** Required. The groups of mutations to be applied. */
		mutationGroups?: Array<MutationGroup>;

		/** Common request options for various APIs. */
		requestOptions?: RequestOptions;
	}

	/** The request for BatchWrite. */
	export interface BatchWriteRequestFormProperties {
	}
	export function CreateBatchWriteRequestFormGroup() {
		return new FormGroup<BatchWriteRequestFormProperties>({
		});

	}


	/** A group of mutations to be committed together. Related mutations should be placed in a group. For example, two mutations inserting rows with the same primary key prefix in both parent and child tables are related. */
	export interface MutationGroup {

		/** Required. The mutations in this group. */
		mutations?: Array<Mutation>;
	}

	/** A group of mutations to be committed together. Related mutations should be placed in a group. For example, two mutations inserting rows with the same primary key prefix in both parent and child tables are related. */
	export interface MutationGroupFormProperties {
	}
	export function CreateMutationGroupFormGroup() {
		return new FormGroup<MutationGroupFormProperties>({
		});

	}


	/** A modification to one or more Cloud Spanner rows. Mutations can be applied to a Cloud Spanner database by sending them in a Commit call. */
	export interface Mutation {

		/** Arguments to delete operations. */
		delete?: Delete;

		/** Arguments to insert, update, insert_or_update, and replace operations. */
		insert?: Write;

		/** Arguments to insert, update, insert_or_update, and replace operations. */
		insertOrUpdate?: Write;

		/** Arguments to insert, update, insert_or_update, and replace operations. */
		replace?: Write;

		/** Arguments to insert, update, insert_or_update, and replace operations. */
		update?: Write;
	}

	/** A modification to one or more Cloud Spanner rows. Mutations can be applied to a Cloud Spanner database by sending them in a Commit call. */
	export interface MutationFormProperties {
	}
	export function CreateMutationFormGroup() {
		return new FormGroup<MutationFormProperties>({
		});

	}


	/** Arguments to delete operations. */
	export interface Delete {

		/** `KeySet` defines a collection of Cloud Spanner keys and/or key ranges. All the keys are expected to be in the same table or index. The keys need not be sorted in any particular way. If the same key is specified multiple times in the set (for example if two ranges, two keys, or a key and a range overlap), Cloud Spanner behaves as if the key were only specified once. */
		keySet?: KeySet;

		/** Required. The table whose rows will be deleted. */
		table?: string | null;
	}

	/** Arguments to delete operations. */
	export interface DeleteFormProperties {

		/** Required. The table whose rows will be deleted. */
		table: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFormGroup() {
		return new FormGroup<DeleteFormProperties>({
			table: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `KeySet` defines a collection of Cloud Spanner keys and/or key ranges. All the keys are expected to be in the same table or index. The keys need not be sorted in any particular way. If the same key is specified multiple times in the set (for example if two ranges, two keys, or a key and a range overlap), Cloud Spanner behaves as if the key were only specified once. */
	export interface KeySet {

		/** For convenience `all` can be set to `true` to indicate that this `KeySet` matches all keys in the table or index. Note that any keys specified in `keys` or `ranges` are only yielded once. */
		all?: boolean | null;

		/** A list of specific keys. Entries in `keys` should have exactly as many elements as there are columns in the primary or index key with which this `KeySet` is used. Individual key values are encoded as described here. */
		keys?: Array<string>;

		/** A list of key ranges. See KeyRange for more information about key range specifications. */
		ranges?: Array<KeyRange>;
	}

	/** `KeySet` defines a collection of Cloud Spanner keys and/or key ranges. All the keys are expected to be in the same table or index. The keys need not be sorted in any particular way. If the same key is specified multiple times in the set (for example if two ranges, two keys, or a key and a range overlap), Cloud Spanner behaves as if the key were only specified once. */
	export interface KeySetFormProperties {

		/** For convenience `all` can be set to `true` to indicate that this `KeySet` matches all keys in the table or index. Note that any keys specified in `keys` or `ranges` are only yielded once. */
		all: FormControl<boolean | null | undefined>,
	}
	export function CreateKeySetFormGroup() {
		return new FormGroup<KeySetFormProperties>({
			all: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** KeyRange represents a range of rows in a table or index. A range has a start key and an end key. These keys can be open or closed, indicating if the range includes rows with that key. Keys are represented by lists, where the ith value in the list corresponds to the ith component of the table or index primary key. Individual values are encoded as described here. For example, consider the following table definition: CREATE TABLE UserEvents ( UserName STRING(MAX), EventDate STRING(10) ) PRIMARY KEY(UserName, EventDate); The following keys name rows in this table: "Bob", "2014-09-23" Since the `UserEvents` table's `PRIMARY KEY` clause names two columns, each `UserEvents` key has two elements; the first is the `UserName`, and the second is the `EventDate`. Key ranges with multiple components are interpreted lexicographically by component using the table or index key's declared sort order. For example, the following range returns all events for user `"Bob"` that occurred in the year 2015: "start_closed": ["Bob", "2015-01-01"] "end_closed": ["Bob", "2015-12-31"] Start and end keys can omit trailing key components. This affects the inclusion and exclusion of rows that exactly match the provided key components: if the key is closed, then rows that exactly match the provided components are included; if the key is open, then rows that exactly match are not included. For example, the following range includes all events for `"Bob"` that occurred during and after the year 2000: "start_closed": ["Bob", "2000-01-01"] "end_closed": ["Bob"] The next example retrieves all events for `"Bob"`: "start_closed": ["Bob"] "end_closed": ["Bob"] To retrieve events before the year 2000: "start_closed": ["Bob"] "end_open": ["Bob", "2000-01-01"] The following range includes all rows in the table: "start_closed": [] "end_closed": [] This range returns all users whose `UserName` begins with any character from A to C: "start_closed": ["A"] "end_open": ["D"] This range returns all users whose `UserName` begins with B: "start_closed": ["B"] "end_open": ["C"] Key ranges honor column sort order. For example, suppose a table is defined as follows: CREATE TABLE DescendingSortedTable { Key INT64, ... ) PRIMARY KEY(Key DESC); The following range retrieves all rows with key values between 1 and 100 inclusive: "start_closed": ["100"] "end_closed": ["1"] Note that 100 is passed as the start, and 1 is passed as the end, because `Key` is a descending column in the schema. */
	export interface KeyRange {

		/** If the end is closed, then the range includes all rows whose first `len(end_closed)` key columns exactly match `end_closed`. */
		endClosed?: Array<string>;

		/** If the end is open, then the range excludes rows whose first `len(end_open)` key columns exactly match `end_open`. */
		endOpen?: Array<string>;

		/** If the start is closed, then the range includes all rows whose first `len(start_closed)` key columns exactly match `start_closed`. */
		startClosed?: Array<string>;

		/** If the start is open, then the range excludes rows whose first `len(start_open)` key columns exactly match `start_open`. */
		startOpen?: Array<string>;
	}

	/** KeyRange represents a range of rows in a table or index. A range has a start key and an end key. These keys can be open or closed, indicating if the range includes rows with that key. Keys are represented by lists, where the ith value in the list corresponds to the ith component of the table or index primary key. Individual values are encoded as described here. For example, consider the following table definition: CREATE TABLE UserEvents ( UserName STRING(MAX), EventDate STRING(10) ) PRIMARY KEY(UserName, EventDate); The following keys name rows in this table: "Bob", "2014-09-23" Since the `UserEvents` table's `PRIMARY KEY` clause names two columns, each `UserEvents` key has two elements; the first is the `UserName`, and the second is the `EventDate`. Key ranges with multiple components are interpreted lexicographically by component using the table or index key's declared sort order. For example, the following range returns all events for user `"Bob"` that occurred in the year 2015: "start_closed": ["Bob", "2015-01-01"] "end_closed": ["Bob", "2015-12-31"] Start and end keys can omit trailing key components. This affects the inclusion and exclusion of rows that exactly match the provided key components: if the key is closed, then rows that exactly match the provided components are included; if the key is open, then rows that exactly match are not included. For example, the following range includes all events for `"Bob"` that occurred during and after the year 2000: "start_closed": ["Bob", "2000-01-01"] "end_closed": ["Bob"] The next example retrieves all events for `"Bob"`: "start_closed": ["Bob"] "end_closed": ["Bob"] To retrieve events before the year 2000: "start_closed": ["Bob"] "end_open": ["Bob", "2000-01-01"] The following range includes all rows in the table: "start_closed": [] "end_closed": [] This range returns all users whose `UserName` begins with any character from A to C: "start_closed": ["A"] "end_open": ["D"] This range returns all users whose `UserName` begins with B: "start_closed": ["B"] "end_open": ["C"] Key ranges honor column sort order. For example, suppose a table is defined as follows: CREATE TABLE DescendingSortedTable { Key INT64, ... ) PRIMARY KEY(Key DESC); The following range retrieves all rows with key values between 1 and 100 inclusive: "start_closed": ["100"] "end_closed": ["1"] Note that 100 is passed as the start, and 1 is passed as the end, because `Key` is a descending column in the schema. */
	export interface KeyRangeFormProperties {
	}
	export function CreateKeyRangeFormGroup() {
		return new FormGroup<KeyRangeFormProperties>({
		});

	}


	/** Arguments to insert, update, insert_or_update, and replace operations. */
	export interface Write {

		/** The names of the columns in table to be written. The list of columns must contain enough columns to allow Cloud Spanner to derive values for all primary key columns in the row(s) to be modified. */
		columns?: Array<string>;

		/** Required. The table whose rows will be written. */
		table?: string | null;

		/** The values to be written. `values` can contain more than one list of values. If it does, then multiple rows are written, one for each entry in `values`. Each list in `values` must have exactly as many entries as there are entries in columns above. Sending multiple lists is equivalent to sending multiple `Mutation`s, each containing one `values` entry and repeating table and columns. Individual values in each list are encoded as described here. */
		values?: Array<string>;
	}

	/** Arguments to insert, update, insert_or_update, and replace operations. */
	export interface WriteFormProperties {

		/** Required. The table whose rows will be written. */
		table: FormControl<string | null | undefined>,
	}
	export function CreateWriteFormGroup() {
		return new FormGroup<WriteFormProperties>({
			table: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Common request options for various APIs. */
	export interface RequestOptions {

		/** Priority for the request. */
		priority?: RequestOptionsPriority | null;

		/** A per-request tag which can be applied to queries or reads, used for statistics collection. Both request_tag and transaction_tag can be specified for a read or query that belongs to a transaction. This field is ignored for requests where it's not applicable (e.g. CommitRequest). Legal characters for `request_tag` values are all printable characters (ASCII 32 - 126) and the length of a request_tag is limited to 50 characters. Values that exceed this limit are truncated. Any leading underscore (_) characters will be removed from the string. */
		requestTag?: string | null;

		/** A tag used for statistics collection about this transaction. Both request_tag and transaction_tag can be specified for a read or query that belongs to a transaction. The value of transaction_tag should be the same for all requests belonging to the same transaction. If this request doesn't belong to any transaction, transaction_tag will be ignored. Legal characters for `transaction_tag` values are all printable characters (ASCII 32 - 126) and the length of a transaction_tag is limited to 50 characters. Values that exceed this limit are truncated. Any leading underscore (_) characters will be removed from the string. */
		transactionTag?: string | null;
	}

	/** Common request options for various APIs. */
	export interface RequestOptionsFormProperties {

		/** Priority for the request. */
		priority: FormControl<RequestOptionsPriority | null | undefined>,

		/** A per-request tag which can be applied to queries or reads, used for statistics collection. Both request_tag and transaction_tag can be specified for a read or query that belongs to a transaction. This field is ignored for requests where it's not applicable (e.g. CommitRequest). Legal characters for `request_tag` values are all printable characters (ASCII 32 - 126) and the length of a request_tag is limited to 50 characters. Values that exceed this limit are truncated. Any leading underscore (_) characters will be removed from the string. */
		requestTag: FormControl<string | null | undefined>,

		/** A tag used for statistics collection about this transaction. Both request_tag and transaction_tag can be specified for a read or query that belongs to a transaction. The value of transaction_tag should be the same for all requests belonging to the same transaction. If this request doesn't belong to any transaction, transaction_tag will be ignored. Legal characters for `transaction_tag` values are all printable characters (ASCII 32 - 126) and the length of a transaction_tag is limited to 50 characters. Values that exceed this limit are truncated. Any leading underscore (_) characters will be removed from the string. */
		transactionTag: FormControl<string | null | undefined>,
	}
	export function CreateRequestOptionsFormGroup() {
		return new FormGroup<RequestOptionsFormProperties>({
			priority: new FormControl<RequestOptionsPriority | null | undefined>(undefined),
			requestTag: new FormControl<string | null | undefined>(undefined),
			transactionTag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RequestOptionsPriority { PRIORITY_UNSPECIFIED = 'PRIORITY_UNSPECIFIED', PRIORITY_LOW = 'PRIORITY_LOW', PRIORITY_MEDIUM = 'PRIORITY_MEDIUM', PRIORITY_HIGH = 'PRIORITY_HIGH' }


	/** The result of applying a batch of mutations. */
	export interface BatchWriteResponse {

		/** The commit timestamp of the transaction that applied this batch. Present if `status` is `OK`, absent otherwise. */
		commitTimestamp?: string | null;

		/** The mutation groups applied in this batch. The values index into the `mutation_groups` field in the corresponding `BatchWriteRequest`. */
		indexes?: Array<number>;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: Status;
	}

	/** The result of applying a batch of mutations. */
	export interface BatchWriteResponseFormProperties {

		/** The commit timestamp of the transaction that applied this batch. Present if `status` is `OK`, absent otherwise. */
		commitTimestamp: FormControl<string | null | undefined>,
	}
	export function CreateBatchWriteResponseFormGroup() {
		return new FormGroup<BatchWriteResponseFormProperties>({
			commitTimestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for BeginTransaction. */
	export interface BeginTransactionRequest {

		/** Transactions: Each session can have at most one active transaction at a time (note that standalone reads and queries use a transaction internally and do count towards the one transaction limit). After the active transaction is completed, the session can immediately be re-used for the next transaction. It is not necessary to create a new session for each transaction. Transaction modes: Cloud Spanner supports three transaction modes: 1. Locking read-write. This type of transaction is the only way to write data into Cloud Spanner. These transactions rely on pessimistic locking and, if necessary, two-phase commit. Locking read-write transactions may abort, requiring the application to retry. 2. Snapshot read-only. Snapshot read-only transactions provide guaranteed consistency across several reads, but do not allow writes. Snapshot read-only transactions can be configured to read at timestamps in the past, or configured to perform a strong read (where Spanner will select a timestamp such that the read is guaranteed to see the effects of all transactions that have committed before the start of the read). Snapshot read-only transactions do not need to be committed. Queries on change streams must be performed with the snapshot read-only transaction mode, specifying a strong read. Please see TransactionOptions.ReadOnly.strong for more details. 3. Partitioned DML. This type of transaction is used to execute a single Partitioned DML statement. Partitioned DML partitions the key space and runs the DML statement over each partition in parallel using separate, internal transactions that commit independently. Partitioned DML transactions do not need to be committed. For transactions that only read, snapshot read-only transactions provide simpler semantics and are almost always faster. In particular, read-only transactions do not take locks, so they do not conflict with read-write transactions. As a consequence of not taking locks, they also do not abort, so retry loops are not needed. Transactions may only read-write data in a single database. They may, however, read-write data in different tables within that database. Locking read-write transactions: Locking transactions may be used to atomically read-modify-write data anywhere in a database. This type of transaction is externally consistent. Clients should attempt to minimize the amount of time a transaction is active. Faster transactions commit with higher probability and cause less contention. Cloud Spanner attempts to keep read locks active as long as the transaction continues to do reads, and the transaction has not been terminated by Commit or Rollback. Long periods of inactivity at the client may cause Cloud Spanner to release a transaction's locks and abort it. Conceptually, a read-write transaction consists of zero or more reads or SQL statements followed by Commit. At any time before Commit, the client can send a Rollback request to abort the transaction. Semantics: Cloud Spanner can commit the transaction if all read locks it acquired are still valid at commit time, and it is able to acquire write locks for all writes. Cloud Spanner can abort the transaction for any reason. If a commit attempt returns `ABORTED`, Cloud Spanner guarantees that the transaction has not modified any user data in Cloud Spanner. Unless the transaction commits, Cloud Spanner makes no guarantees about how long the transaction's locks were held for. It is an error to use Cloud Spanner locks for any sort of mutual exclusion other than between Cloud Spanner transactions themselves. Retrying aborted transactions: When a transaction aborts, the application can choose to retry the whole transaction again. To maximize the chances of successfully committing the retry, the client should execute the retry in the same session as the original attempt. The original session's lock priority increases with each consecutive abort, meaning that each attempt has a slightly better chance of success than the previous. Under some circumstances (for example, many transactions attempting to modify the same row(s)), a transaction can abort many times in a short period before successfully committing. Thus, it is not a good idea to cap the number of retries a transaction can attempt; instead, it is better to limit the total amount of time spent retrying. Idle transactions: A transaction is considered idle if it has no outstanding reads or SQL queries and has not started a read or SQL query within the last 10 seconds. Idle transactions can be aborted by Cloud Spanner so that they don't hold on to locks indefinitely. If an idle transaction is aborted, the commit will fail with error `ABORTED`. If this behavior is undesirable, periodically executing a simple SQL query in the transaction (for example, `SELECT 1`) prevents the transaction from becoming idle. Snapshot read-only transactions: Snapshot read-only transactions provides a simpler method than locking read-write transactions for doing several consistent reads. However, this type of transaction does not support writes. Snapshot transactions do not take locks. Instead, they work by choosing a Cloud Spanner timestamp, then executing all reads at that timestamp. Since they do not acquire locks, they do not block concurrent read-write transactions. Unlike locking read-write transactions, snapshot read-only transactions never abort. They can fail if the chosen read timestamp is garbage collected; however, the default garbage collection policy is generous enough that most applications do not need to worry about this in practice. Snapshot read-only transactions do not need to call Commit or Rollback (and in fact are not permitted to do so). To execute a snapshot transaction, the client specifies a timestamp bound, which tells Cloud Spanner how to choose a read timestamp. The types of timestamp bound are: - Strong (the default). - Bounded staleness. - Exact staleness. If the Cloud Spanner database to be read is geographically distributed, stale read-only transactions can execute more quickly than strong or read-write transactions, because they are able to execute far from the leader replica. Each type of timestamp bound is discussed in detail below. Strong: Strong reads are guaranteed to see the effects of all transactions that have committed before the start of the read. Furthermore, all rows yielded by a single read are consistent with each other -- if any part of the read observes a transaction, all parts of the read see the transaction. Strong reads are not repeatable: two consecutive strong read-only transactions might return inconsistent results if there are concurrent writes. If consistency across reads is required, the reads should be executed within a transaction or at an exact read timestamp. Queries on change streams (see below for more details) must also specify the strong read timestamp bound. See TransactionOptions.ReadOnly.strong. Exact staleness: These timestamp bounds execute reads at a user-specified timestamp. Reads at a timestamp are guaranteed to see a consistent prefix of the global transaction history: they observe modifications done by all transactions with a commit timestamp less than or equal to the read timestamp, and observe none of the modifications done by transactions with a larger commit timestamp. They will block until all conflicting transactions that may be assigned commit timestamps <= the read timestamp have finished. The timestamp can either be expressed as an absolute Cloud Spanner commit timestamp or a staleness relative to the current time. These modes do not require a "negotiation phase" to pick a timestamp. As a result, they execute slightly faster than the equivalent boundedly stale concurrency modes. On the other hand, boundedly stale reads usually return fresher results. See TransactionOptions.ReadOnly.read_timestamp and TransactionOptions.ReadOnly.exact_staleness. Bounded staleness: Bounded staleness modes allow Cloud Spanner to pick the read timestamp, subject to a user-provided staleness bound. Cloud Spanner chooses the newest timestamp within the staleness bound that allows execution of the reads at the closest available replica without blocking. All rows yielded are consistent with each other -- if any part of the read observes a transaction, all parts of the read see the transaction. Boundedly stale reads are not repeatable: two stale reads, even if they use the same staleness bound, can execute at different timestamps and thus return inconsistent results. Boundedly stale reads execute in two phases: the first phase negotiates a timestamp among all replicas needed to serve the read. In the second phase, reads are executed at the negotiated timestamp. As a result of the two phase execution, bounded staleness reads are usually a little slower than comparable exact staleness reads. However, they are typically able to return fresher results, and are more likely to execute at the closest replica. Because the timestamp negotiation requires up-front knowledge of which rows will be read, it can only be used with single-use read-only transactions. See TransactionOptions.ReadOnly.max_staleness and TransactionOptions.ReadOnly.min_read_timestamp. Old read timestamps and garbage collection: Cloud Spanner continuously garbage collects deleted and overwritten data in the background to reclaim storage space. This process is known as "version GC". By default, version GC reclaims versions after they are one hour old. Because of this, Cloud Spanner cannot perform reads at read timestamps more than one hour in the past. This restriction also applies to in-progress reads and/or SQL queries whose timestamp become too old while executing. Reads and SQL queries with too-old read timestamps fail with the error `FAILED_PRECONDITION`. You can configure and extend the `VERSION_RETENTION_PERIOD` of a database up to a period as long as one week, which allows Cloud Spanner to perform reads up to one week in the past. Querying change Streams: A Change Stream is a schema object that can be configured to watch data changes on the entire database, a set of tables, or a set of columns in a database. When a change stream is created, Spanner automatically defines a corresponding SQL Table-Valued Function (TVF) that can be used to query the change records in the associated change stream using the ExecuteStreamingSql API. The name of the TVF for a change stream is generated from the name of the change stream: READ_. All queries on change stream TVFs must be executed using the ExecuteStreamingSql API with a single-use read-only transaction with a strong read-only timestamp_bound. The change stream TVF allows users to specify the start_timestamp and end_timestamp for the time range of interest. All change records within the retention period is accessible using the strong read-only timestamp_bound. All other TransactionOptions are invalid for change stream queries. In addition, if TransactionOptions.read_only.return_read_timestamp is set to true, a special value of 2^63 - 2 will be returned in the Transaction message that describes the transaction, instead of a valid read timestamp. This special value should be discarded and not used for any subsequent queries. Please see https://cloud.google.com/spanner/docs/change-streams for more details on how to query the change stream TVFs. Partitioned DML transactions: Partitioned DML transactions are used to execute DML statements with a different execution strategy that provides different, and often better, scalability properties for large, table-wide operations than DML in a ReadWrite transaction. Smaller scoped statements, such as an OLTP workload, should prefer using ReadWrite transactions. Partitioned DML partitions the keyspace and runs the DML statement on each partition in separate, internal transactions. These transactions commit automatically when complete, and run independently from one another. To reduce lock contention, this execution strategy only acquires read locks on rows that match the WHERE clause of the statement. Additionally, the smaller per-partition transactions hold locks for less time. That said, Partitioned DML is not a drop-in replacement for standard DML used in ReadWrite transactions. - The DML statement must be fully-partitionable. Specifically, the statement must be expressible as the union of many statements which each access only a single row of the table. - The statement is not applied atomically to all rows of the table. Rather, the statement is applied atomically to partitions of the table, in independent transactions. Secondary index rows are updated atomically with the base table rows. - Partitioned DML does not guarantee exactly-once execution semantics against a partition. The statement will be applied at least once to each partition. It is strongly recommended that the DML statement should be idempotent to avoid unexpected results. For instance, it is potentially dangerous to run a statement such as `UPDATE table SET column = column + 1` as it could be run multiple times against some rows. - The partitions are committed automatically - there is no support for Commit or Rollback. If the call returns an error, or if the client issuing the ExecuteSql call dies, it is possible that some rows had the statement executed on them successfully. It is also possible that statement was never executed against other rows. - Partitioned DML transactions may only contain the execution of a single DML statement via ExecuteSql or ExecuteStreamingSql. - If any error is encountered during the execution of the partitioned DML operation (for instance, a UNIQUE INDEX violation, division by zero, or a value that cannot be stored due to schema constraints), then the operation is stopped at that point and an error is returned. It is possible that at this point, some partitions have been committed (or even committed multiple times), and other partitions have not been run at all. Given the above, Partitioned DML is good fit for large, database-wide, operations that are idempotent, such as deleting old rows from a very large table. */
		options?: TransactionOptions;

		/** Common request options for various APIs. */
		requestOptions?: RequestOptions;
	}

	/** The request for BeginTransaction. */
	export interface BeginTransactionRequestFormProperties {
	}
	export function CreateBeginTransactionRequestFormGroup() {
		return new FormGroup<BeginTransactionRequestFormProperties>({
		});

	}


	/** Transactions: Each session can have at most one active transaction at a time (note that standalone reads and queries use a transaction internally and do count towards the one transaction limit). After the active transaction is completed, the session can immediately be re-used for the next transaction. It is not necessary to create a new session for each transaction. Transaction modes: Cloud Spanner supports three transaction modes: 1. Locking read-write. This type of transaction is the only way to write data into Cloud Spanner. These transactions rely on pessimistic locking and, if necessary, two-phase commit. Locking read-write transactions may abort, requiring the application to retry. 2. Snapshot read-only. Snapshot read-only transactions provide guaranteed consistency across several reads, but do not allow writes. Snapshot read-only transactions can be configured to read at timestamps in the past, or configured to perform a strong read (where Spanner will select a timestamp such that the read is guaranteed to see the effects of all transactions that have committed before the start of the read). Snapshot read-only transactions do not need to be committed. Queries on change streams must be performed with the snapshot read-only transaction mode, specifying a strong read. Please see TransactionOptions.ReadOnly.strong for more details. 3. Partitioned DML. This type of transaction is used to execute a single Partitioned DML statement. Partitioned DML partitions the key space and runs the DML statement over each partition in parallel using separate, internal transactions that commit independently. Partitioned DML transactions do not need to be committed. For transactions that only read, snapshot read-only transactions provide simpler semantics and are almost always faster. In particular, read-only transactions do not take locks, so they do not conflict with read-write transactions. As a consequence of not taking locks, they also do not abort, so retry loops are not needed. Transactions may only read-write data in a single database. They may, however, read-write data in different tables within that database. Locking read-write transactions: Locking transactions may be used to atomically read-modify-write data anywhere in a database. This type of transaction is externally consistent. Clients should attempt to minimize the amount of time a transaction is active. Faster transactions commit with higher probability and cause less contention. Cloud Spanner attempts to keep read locks active as long as the transaction continues to do reads, and the transaction has not been terminated by Commit or Rollback. Long periods of inactivity at the client may cause Cloud Spanner to release a transaction's locks and abort it. Conceptually, a read-write transaction consists of zero or more reads or SQL statements followed by Commit. At any time before Commit, the client can send a Rollback request to abort the transaction. Semantics: Cloud Spanner can commit the transaction if all read locks it acquired are still valid at commit time, and it is able to acquire write locks for all writes. Cloud Spanner can abort the transaction for any reason. If a commit attempt returns `ABORTED`, Cloud Spanner guarantees that the transaction has not modified any user data in Cloud Spanner. Unless the transaction commits, Cloud Spanner makes no guarantees about how long the transaction's locks were held for. It is an error to use Cloud Spanner locks for any sort of mutual exclusion other than between Cloud Spanner transactions themselves. Retrying aborted transactions: When a transaction aborts, the application can choose to retry the whole transaction again. To maximize the chances of successfully committing the retry, the client should execute the retry in the same session as the original attempt. The original session's lock priority increases with each consecutive abort, meaning that each attempt has a slightly better chance of success than the previous. Under some circumstances (for example, many transactions attempting to modify the same row(s)), a transaction can abort many times in a short period before successfully committing. Thus, it is not a good idea to cap the number of retries a transaction can attempt; instead, it is better to limit the total amount of time spent retrying. Idle transactions: A transaction is considered idle if it has no outstanding reads or SQL queries and has not started a read or SQL query within the last 10 seconds. Idle transactions can be aborted by Cloud Spanner so that they don't hold on to locks indefinitely. If an idle transaction is aborted, the commit will fail with error `ABORTED`. If this behavior is undesirable, periodically executing a simple SQL query in the transaction (for example, `SELECT 1`) prevents the transaction from becoming idle. Snapshot read-only transactions: Snapshot read-only transactions provides a simpler method than locking read-write transactions for doing several consistent reads. However, this type of transaction does not support writes. Snapshot transactions do not take locks. Instead, they work by choosing a Cloud Spanner timestamp, then executing all reads at that timestamp. Since they do not acquire locks, they do not block concurrent read-write transactions. Unlike locking read-write transactions, snapshot read-only transactions never abort. They can fail if the chosen read timestamp is garbage collected; however, the default garbage collection policy is generous enough that most applications do not need to worry about this in practice. Snapshot read-only transactions do not need to call Commit or Rollback (and in fact are not permitted to do so). To execute a snapshot transaction, the client specifies a timestamp bound, which tells Cloud Spanner how to choose a read timestamp. The types of timestamp bound are: - Strong (the default). - Bounded staleness. - Exact staleness. If the Cloud Spanner database to be read is geographically distributed, stale read-only transactions can execute more quickly than strong or read-write transactions, because they are able to execute far from the leader replica. Each type of timestamp bound is discussed in detail below. Strong: Strong reads are guaranteed to see the effects of all transactions that have committed before the start of the read. Furthermore, all rows yielded by a single read are consistent with each other -- if any part of the read observes a transaction, all parts of the read see the transaction. Strong reads are not repeatable: two consecutive strong read-only transactions might return inconsistent results if there are concurrent writes. If consistency across reads is required, the reads should be executed within a transaction or at an exact read timestamp. Queries on change streams (see below for more details) must also specify the strong read timestamp bound. See TransactionOptions.ReadOnly.strong. Exact staleness: These timestamp bounds execute reads at a user-specified timestamp. Reads at a timestamp are guaranteed to see a consistent prefix of the global transaction history: they observe modifications done by all transactions with a commit timestamp less than or equal to the read timestamp, and observe none of the modifications done by transactions with a larger commit timestamp. They will block until all conflicting transactions that may be assigned commit timestamps <= the read timestamp have finished. The timestamp can either be expressed as an absolute Cloud Spanner commit timestamp or a staleness relative to the current time. These modes do not require a "negotiation phase" to pick a timestamp. As a result, they execute slightly faster than the equivalent boundedly stale concurrency modes. On the other hand, boundedly stale reads usually return fresher results. See TransactionOptions.ReadOnly.read_timestamp and TransactionOptions.ReadOnly.exact_staleness. Bounded staleness: Bounded staleness modes allow Cloud Spanner to pick the read timestamp, subject to a user-provided staleness bound. Cloud Spanner chooses the newest timestamp within the staleness bound that allows execution of the reads at the closest available replica without blocking. All rows yielded are consistent with each other -- if any part of the read observes a transaction, all parts of the read see the transaction. Boundedly stale reads are not repeatable: two stale reads, even if they use the same staleness bound, can execute at different timestamps and thus return inconsistent results. Boundedly stale reads execute in two phases: the first phase negotiates a timestamp among all replicas needed to serve the read. In the second phase, reads are executed at the negotiated timestamp. As a result of the two phase execution, bounded staleness reads are usually a little slower than comparable exact staleness reads. However, they are typically able to return fresher results, and are more likely to execute at the closest replica. Because the timestamp negotiation requires up-front knowledge of which rows will be read, it can only be used with single-use read-only transactions. See TransactionOptions.ReadOnly.max_staleness and TransactionOptions.ReadOnly.min_read_timestamp. Old read timestamps and garbage collection: Cloud Spanner continuously garbage collects deleted and overwritten data in the background to reclaim storage space. This process is known as "version GC". By default, version GC reclaims versions after they are one hour old. Because of this, Cloud Spanner cannot perform reads at read timestamps more than one hour in the past. This restriction also applies to in-progress reads and/or SQL queries whose timestamp become too old while executing. Reads and SQL queries with too-old read timestamps fail with the error `FAILED_PRECONDITION`. You can configure and extend the `VERSION_RETENTION_PERIOD` of a database up to a period as long as one week, which allows Cloud Spanner to perform reads up to one week in the past. Querying change Streams: A Change Stream is a schema object that can be configured to watch data changes on the entire database, a set of tables, or a set of columns in a database. When a change stream is created, Spanner automatically defines a corresponding SQL Table-Valued Function (TVF) that can be used to query the change records in the associated change stream using the ExecuteStreamingSql API. The name of the TVF for a change stream is generated from the name of the change stream: READ_. All queries on change stream TVFs must be executed using the ExecuteStreamingSql API with a single-use read-only transaction with a strong read-only timestamp_bound. The change stream TVF allows users to specify the start_timestamp and end_timestamp for the time range of interest. All change records within the retention period is accessible using the strong read-only timestamp_bound. All other TransactionOptions are invalid for change stream queries. In addition, if TransactionOptions.read_only.return_read_timestamp is set to true, a special value of 2^63 - 2 will be returned in the Transaction message that describes the transaction, instead of a valid read timestamp. This special value should be discarded and not used for any subsequent queries. Please see https://cloud.google.com/spanner/docs/change-streams for more details on how to query the change stream TVFs. Partitioned DML transactions: Partitioned DML transactions are used to execute DML statements with a different execution strategy that provides different, and often better, scalability properties for large, table-wide operations than DML in a ReadWrite transaction. Smaller scoped statements, such as an OLTP workload, should prefer using ReadWrite transactions. Partitioned DML partitions the keyspace and runs the DML statement on each partition in separate, internal transactions. These transactions commit automatically when complete, and run independently from one another. To reduce lock contention, this execution strategy only acquires read locks on rows that match the WHERE clause of the statement. Additionally, the smaller per-partition transactions hold locks for less time. That said, Partitioned DML is not a drop-in replacement for standard DML used in ReadWrite transactions. - The DML statement must be fully-partitionable. Specifically, the statement must be expressible as the union of many statements which each access only a single row of the table. - The statement is not applied atomically to all rows of the table. Rather, the statement is applied atomically to partitions of the table, in independent transactions. Secondary index rows are updated atomically with the base table rows. - Partitioned DML does not guarantee exactly-once execution semantics against a partition. The statement will be applied at least once to each partition. It is strongly recommended that the DML statement should be idempotent to avoid unexpected results. For instance, it is potentially dangerous to run a statement such as `UPDATE table SET column = column + 1` as it could be run multiple times against some rows. - The partitions are committed automatically - there is no support for Commit or Rollback. If the call returns an error, or if the client issuing the ExecuteSql call dies, it is possible that some rows had the statement executed on them successfully. It is also possible that statement was never executed against other rows. - Partitioned DML transactions may only contain the execution of a single DML statement via ExecuteSql or ExecuteStreamingSql. - If any error is encountered during the execution of the partitioned DML operation (for instance, a UNIQUE INDEX violation, division by zero, or a value that cannot be stored due to schema constraints), then the operation is stopped at that point and an error is returned. It is possible that at this point, some partitions have been committed (or even committed multiple times), and other partitions have not been run at all. Given the above, Partitioned DML is good fit for large, database-wide, operations that are idempotent, such as deleting old rows from a very large table. */
	export interface TransactionOptions {

		/** Message type to initiate a Partitioned DML transaction. */
		partitionedDml?: PartitionedDml;

		/** Message type to initiate a read-only transaction. */
		readOnly?: ReadOnly;

		/** Message type to initiate a read-write transaction. Currently this transaction type has no options. */
		readWrite?: ReadWrite;
	}

	/** Transactions: Each session can have at most one active transaction at a time (note that standalone reads and queries use a transaction internally and do count towards the one transaction limit). After the active transaction is completed, the session can immediately be re-used for the next transaction. It is not necessary to create a new session for each transaction. Transaction modes: Cloud Spanner supports three transaction modes: 1. Locking read-write. This type of transaction is the only way to write data into Cloud Spanner. These transactions rely on pessimistic locking and, if necessary, two-phase commit. Locking read-write transactions may abort, requiring the application to retry. 2. Snapshot read-only. Snapshot read-only transactions provide guaranteed consistency across several reads, but do not allow writes. Snapshot read-only transactions can be configured to read at timestamps in the past, or configured to perform a strong read (where Spanner will select a timestamp such that the read is guaranteed to see the effects of all transactions that have committed before the start of the read). Snapshot read-only transactions do not need to be committed. Queries on change streams must be performed with the snapshot read-only transaction mode, specifying a strong read. Please see TransactionOptions.ReadOnly.strong for more details. 3. Partitioned DML. This type of transaction is used to execute a single Partitioned DML statement. Partitioned DML partitions the key space and runs the DML statement over each partition in parallel using separate, internal transactions that commit independently. Partitioned DML transactions do not need to be committed. For transactions that only read, snapshot read-only transactions provide simpler semantics and are almost always faster. In particular, read-only transactions do not take locks, so they do not conflict with read-write transactions. As a consequence of not taking locks, they also do not abort, so retry loops are not needed. Transactions may only read-write data in a single database. They may, however, read-write data in different tables within that database. Locking read-write transactions: Locking transactions may be used to atomically read-modify-write data anywhere in a database. This type of transaction is externally consistent. Clients should attempt to minimize the amount of time a transaction is active. Faster transactions commit with higher probability and cause less contention. Cloud Spanner attempts to keep read locks active as long as the transaction continues to do reads, and the transaction has not been terminated by Commit or Rollback. Long periods of inactivity at the client may cause Cloud Spanner to release a transaction's locks and abort it. Conceptually, a read-write transaction consists of zero or more reads or SQL statements followed by Commit. At any time before Commit, the client can send a Rollback request to abort the transaction. Semantics: Cloud Spanner can commit the transaction if all read locks it acquired are still valid at commit time, and it is able to acquire write locks for all writes. Cloud Spanner can abort the transaction for any reason. If a commit attempt returns `ABORTED`, Cloud Spanner guarantees that the transaction has not modified any user data in Cloud Spanner. Unless the transaction commits, Cloud Spanner makes no guarantees about how long the transaction's locks were held for. It is an error to use Cloud Spanner locks for any sort of mutual exclusion other than between Cloud Spanner transactions themselves. Retrying aborted transactions: When a transaction aborts, the application can choose to retry the whole transaction again. To maximize the chances of successfully committing the retry, the client should execute the retry in the same session as the original attempt. The original session's lock priority increases with each consecutive abort, meaning that each attempt has a slightly better chance of success than the previous. Under some circumstances (for example, many transactions attempting to modify the same row(s)), a transaction can abort many times in a short period before successfully committing. Thus, it is not a good idea to cap the number of retries a transaction can attempt; instead, it is better to limit the total amount of time spent retrying. Idle transactions: A transaction is considered idle if it has no outstanding reads or SQL queries and has not started a read or SQL query within the last 10 seconds. Idle transactions can be aborted by Cloud Spanner so that they don't hold on to locks indefinitely. If an idle transaction is aborted, the commit will fail with error `ABORTED`. If this behavior is undesirable, periodically executing a simple SQL query in the transaction (for example, `SELECT 1`) prevents the transaction from becoming idle. Snapshot read-only transactions: Snapshot read-only transactions provides a simpler method than locking read-write transactions for doing several consistent reads. However, this type of transaction does not support writes. Snapshot transactions do not take locks. Instead, they work by choosing a Cloud Spanner timestamp, then executing all reads at that timestamp. Since they do not acquire locks, they do not block concurrent read-write transactions. Unlike locking read-write transactions, snapshot read-only transactions never abort. They can fail if the chosen read timestamp is garbage collected; however, the default garbage collection policy is generous enough that most applications do not need to worry about this in practice. Snapshot read-only transactions do not need to call Commit or Rollback (and in fact are not permitted to do so). To execute a snapshot transaction, the client specifies a timestamp bound, which tells Cloud Spanner how to choose a read timestamp. The types of timestamp bound are: - Strong (the default). - Bounded staleness. - Exact staleness. If the Cloud Spanner database to be read is geographically distributed, stale read-only transactions can execute more quickly than strong or read-write transactions, because they are able to execute far from the leader replica. Each type of timestamp bound is discussed in detail below. Strong: Strong reads are guaranteed to see the effects of all transactions that have committed before the start of the read. Furthermore, all rows yielded by a single read are consistent with each other -- if any part of the read observes a transaction, all parts of the read see the transaction. Strong reads are not repeatable: two consecutive strong read-only transactions might return inconsistent results if there are concurrent writes. If consistency across reads is required, the reads should be executed within a transaction or at an exact read timestamp. Queries on change streams (see below for more details) must also specify the strong read timestamp bound. See TransactionOptions.ReadOnly.strong. Exact staleness: These timestamp bounds execute reads at a user-specified timestamp. Reads at a timestamp are guaranteed to see a consistent prefix of the global transaction history: they observe modifications done by all transactions with a commit timestamp less than or equal to the read timestamp, and observe none of the modifications done by transactions with a larger commit timestamp. They will block until all conflicting transactions that may be assigned commit timestamps <= the read timestamp have finished. The timestamp can either be expressed as an absolute Cloud Spanner commit timestamp or a staleness relative to the current time. These modes do not require a "negotiation phase" to pick a timestamp. As a result, they execute slightly faster than the equivalent boundedly stale concurrency modes. On the other hand, boundedly stale reads usually return fresher results. See TransactionOptions.ReadOnly.read_timestamp and TransactionOptions.ReadOnly.exact_staleness. Bounded staleness: Bounded staleness modes allow Cloud Spanner to pick the read timestamp, subject to a user-provided staleness bound. Cloud Spanner chooses the newest timestamp within the staleness bound that allows execution of the reads at the closest available replica without blocking. All rows yielded are consistent with each other -- if any part of the read observes a transaction, all parts of the read see the transaction. Boundedly stale reads are not repeatable: two stale reads, even if they use the same staleness bound, can execute at different timestamps and thus return inconsistent results. Boundedly stale reads execute in two phases: the first phase negotiates a timestamp among all replicas needed to serve the read. In the second phase, reads are executed at the negotiated timestamp. As a result of the two phase execution, bounded staleness reads are usually a little slower than comparable exact staleness reads. However, they are typically able to return fresher results, and are more likely to execute at the closest replica. Because the timestamp negotiation requires up-front knowledge of which rows will be read, it can only be used with single-use read-only transactions. See TransactionOptions.ReadOnly.max_staleness and TransactionOptions.ReadOnly.min_read_timestamp. Old read timestamps and garbage collection: Cloud Spanner continuously garbage collects deleted and overwritten data in the background to reclaim storage space. This process is known as "version GC". By default, version GC reclaims versions after they are one hour old. Because of this, Cloud Spanner cannot perform reads at read timestamps more than one hour in the past. This restriction also applies to in-progress reads and/or SQL queries whose timestamp become too old while executing. Reads and SQL queries with too-old read timestamps fail with the error `FAILED_PRECONDITION`. You can configure and extend the `VERSION_RETENTION_PERIOD` of a database up to a period as long as one week, which allows Cloud Spanner to perform reads up to one week in the past. Querying change Streams: A Change Stream is a schema object that can be configured to watch data changes on the entire database, a set of tables, or a set of columns in a database. When a change stream is created, Spanner automatically defines a corresponding SQL Table-Valued Function (TVF) that can be used to query the change records in the associated change stream using the ExecuteStreamingSql API. The name of the TVF for a change stream is generated from the name of the change stream: READ_. All queries on change stream TVFs must be executed using the ExecuteStreamingSql API with a single-use read-only transaction with a strong read-only timestamp_bound. The change stream TVF allows users to specify the start_timestamp and end_timestamp for the time range of interest. All change records within the retention period is accessible using the strong read-only timestamp_bound. All other TransactionOptions are invalid for change stream queries. In addition, if TransactionOptions.read_only.return_read_timestamp is set to true, a special value of 2^63 - 2 will be returned in the Transaction message that describes the transaction, instead of a valid read timestamp. This special value should be discarded and not used for any subsequent queries. Please see https://cloud.google.com/spanner/docs/change-streams for more details on how to query the change stream TVFs. Partitioned DML transactions: Partitioned DML transactions are used to execute DML statements with a different execution strategy that provides different, and often better, scalability properties for large, table-wide operations than DML in a ReadWrite transaction. Smaller scoped statements, such as an OLTP workload, should prefer using ReadWrite transactions. Partitioned DML partitions the keyspace and runs the DML statement on each partition in separate, internal transactions. These transactions commit automatically when complete, and run independently from one another. To reduce lock contention, this execution strategy only acquires read locks on rows that match the WHERE clause of the statement. Additionally, the smaller per-partition transactions hold locks for less time. That said, Partitioned DML is not a drop-in replacement for standard DML used in ReadWrite transactions. - The DML statement must be fully-partitionable. Specifically, the statement must be expressible as the union of many statements which each access only a single row of the table. - The statement is not applied atomically to all rows of the table. Rather, the statement is applied atomically to partitions of the table, in independent transactions. Secondary index rows are updated atomically with the base table rows. - Partitioned DML does not guarantee exactly-once execution semantics against a partition. The statement will be applied at least once to each partition. It is strongly recommended that the DML statement should be idempotent to avoid unexpected results. For instance, it is potentially dangerous to run a statement such as `UPDATE table SET column = column + 1` as it could be run multiple times against some rows. - The partitions are committed automatically - there is no support for Commit or Rollback. If the call returns an error, or if the client issuing the ExecuteSql call dies, it is possible that some rows had the statement executed on them successfully. It is also possible that statement was never executed against other rows. - Partitioned DML transactions may only contain the execution of a single DML statement via ExecuteSql or ExecuteStreamingSql. - If any error is encountered during the execution of the partitioned DML operation (for instance, a UNIQUE INDEX violation, division by zero, or a value that cannot be stored due to schema constraints), then the operation is stopped at that point and an error is returned. It is possible that at this point, some partitions have been committed (or even committed multiple times), and other partitions have not been run at all. Given the above, Partitioned DML is good fit for large, database-wide, operations that are idempotent, such as deleting old rows from a very large table. */
	export interface TransactionOptionsFormProperties {
	}
	export function CreateTransactionOptionsFormGroup() {
		return new FormGroup<TransactionOptionsFormProperties>({
		});

	}


	/** Message type to initiate a Partitioned DML transaction. */
	export interface PartitionedDml {
	}

	/** Message type to initiate a Partitioned DML transaction. */
	export interface PartitionedDmlFormProperties {
	}
	export function CreatePartitionedDmlFormGroup() {
		return new FormGroup<PartitionedDmlFormProperties>({
		});

	}


	/** Message type to initiate a read-only transaction. */
	export interface ReadOnly {

		/** Executes all reads at a timestamp that is `exact_staleness` old. The timestamp is chosen soon after the read is started. Guarantees that all writes that have committed more than the specified number of seconds ago are visible. Because Cloud Spanner chooses the exact timestamp, this mode works even if the client's local clock is substantially skewed from Cloud Spanner commit timestamps. Useful for reading at nearby replicas without the distributed timestamp negotiation overhead of `max_staleness`. */
		exactStaleness?: string | null;

		/** Read data at a timestamp >= `NOW - max_staleness` seconds. Guarantees that all writes that have committed more than the specified number of seconds ago are visible. Because Cloud Spanner chooses the exact timestamp, this mode works even if the client's local clock is substantially skewed from Cloud Spanner commit timestamps. Useful for reading the freshest data available at a nearby replica, while bounding the possible staleness if the local replica has fallen behind. Note that this option can only be used in single-use transactions. */
		maxStaleness?: string | null;

		/** Executes all reads at a timestamp >= `min_read_timestamp`. This is useful for requesting fresher data than some previous read, or data that is fresh enough to observe the effects of some previously committed transaction whose timestamp is known. Note that this option can only be used in single-use transactions. A timestamp in RFC3339 UTC \"Zulu\" format, accurate to nanoseconds. Example: `"2014-10-02T15:01:23.045123456Z"`. */
		minReadTimestamp?: string | null;

		/** Executes all reads at the given timestamp. Unlike other modes, reads at a specific timestamp are repeatable; the same read at the same timestamp always returns the same data. If the timestamp is in the future, the read will block until the specified timestamp, modulo the read's deadline. Useful for large scale consistent reads such as mapreduces, or for coordinating many reads against a consistent snapshot of the data. A timestamp in RFC3339 UTC \"Zulu\" format, accurate to nanoseconds. Example: `"2014-10-02T15:01:23.045123456Z"`. */
		readTimestamp?: string | null;

		/** If true, the Cloud Spanner-selected read timestamp is included in the Transaction message that describes the transaction. */
		returnReadTimestamp?: boolean | null;

		/** Read at a timestamp where all previously committed transactions are visible. */
		strong?: boolean | null;
	}

	/** Message type to initiate a read-only transaction. */
	export interface ReadOnlyFormProperties {

		/** Executes all reads at a timestamp that is `exact_staleness` old. The timestamp is chosen soon after the read is started. Guarantees that all writes that have committed more than the specified number of seconds ago are visible. Because Cloud Spanner chooses the exact timestamp, this mode works even if the client's local clock is substantially skewed from Cloud Spanner commit timestamps. Useful for reading at nearby replicas without the distributed timestamp negotiation overhead of `max_staleness`. */
		exactStaleness: FormControl<string | null | undefined>,

		/** Read data at a timestamp >= `NOW - max_staleness` seconds. Guarantees that all writes that have committed more than the specified number of seconds ago are visible. Because Cloud Spanner chooses the exact timestamp, this mode works even if the client's local clock is substantially skewed from Cloud Spanner commit timestamps. Useful for reading the freshest data available at a nearby replica, while bounding the possible staleness if the local replica has fallen behind. Note that this option can only be used in single-use transactions. */
		maxStaleness: FormControl<string | null | undefined>,

		/** Executes all reads at a timestamp >= `min_read_timestamp`. This is useful for requesting fresher data than some previous read, or data that is fresh enough to observe the effects of some previously committed transaction whose timestamp is known. Note that this option can only be used in single-use transactions. A timestamp in RFC3339 UTC \"Zulu\" format, accurate to nanoseconds. Example: `"2014-10-02T15:01:23.045123456Z"`. */
		minReadTimestamp: FormControl<string | null | undefined>,

		/** Executes all reads at the given timestamp. Unlike other modes, reads at a specific timestamp are repeatable; the same read at the same timestamp always returns the same data. If the timestamp is in the future, the read will block until the specified timestamp, modulo the read's deadline. Useful for large scale consistent reads such as mapreduces, or for coordinating many reads against a consistent snapshot of the data. A timestamp in RFC3339 UTC \"Zulu\" format, accurate to nanoseconds. Example: `"2014-10-02T15:01:23.045123456Z"`. */
		readTimestamp: FormControl<string | null | undefined>,

		/** If true, the Cloud Spanner-selected read timestamp is included in the Transaction message that describes the transaction. */
		returnReadTimestamp: FormControl<boolean | null | undefined>,

		/** Read at a timestamp where all previously committed transactions are visible. */
		strong: FormControl<boolean | null | undefined>,
	}
	export function CreateReadOnlyFormGroup() {
		return new FormGroup<ReadOnlyFormProperties>({
			exactStaleness: new FormControl<string | null | undefined>(undefined),
			maxStaleness: new FormControl<string | null | undefined>(undefined),
			minReadTimestamp: new FormControl<string | null | undefined>(undefined),
			readTimestamp: new FormControl<string | null | undefined>(undefined),
			returnReadTimestamp: new FormControl<boolean | null | undefined>(undefined),
			strong: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Message type to initiate a read-write transaction. Currently this transaction type has no options. */
	export interface ReadWrite {

		/** Read lock mode for the transaction. */
		readLockMode?: ReadWriteReadLockMode | null;
	}

	/** Message type to initiate a read-write transaction. Currently this transaction type has no options. */
	export interface ReadWriteFormProperties {

		/** Read lock mode for the transaction. */
		readLockMode: FormControl<ReadWriteReadLockMode | null | undefined>,
	}
	export function CreateReadWriteFormGroup() {
		return new FormGroup<ReadWriteFormProperties>({
			readLockMode: new FormControl<ReadWriteReadLockMode | null | undefined>(undefined),
		});

	}

	export enum ReadWriteReadLockMode { READ_LOCK_MODE_UNSPECIFIED = 'READ_LOCK_MODE_UNSPECIFIED', PESSIMISTIC = 'PESSIMISTIC', OPTIMISTIC = 'OPTIMISTIC' }


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


	/** Metadata associated with a parent-child relationship appearing in a PlanNode. */
	export interface ChildLink {

		/** The node to which the link points. */
		childIndex?: number | null;

		/** The type of the link. For example, in Hash Joins this could be used to distinguish between the build child and the probe child, or in the case of the child being an output variable, to represent the tag associated with the output variable. */
		type?: string | null;

		/** Only present if the child node is SCALAR and corresponds to an output variable of the parent node. The field carries the name of the output variable. For example, a `TableScan` operator that reads rows from a table will have child links to the `SCALAR` nodes representing the output variables created for each column that is read by the operator. The corresponding `variable` fields will be set to the variable names assigned to the columns. */
		variable?: string | null;
	}

	/** Metadata associated with a parent-child relationship appearing in a PlanNode. */
	export interface ChildLinkFormProperties {

		/** The node to which the link points. */
		childIndex: FormControl<number | null | undefined>,

		/** The type of the link. For example, in Hash Joins this could be used to distinguish between the build child and the probe child, or in the case of the child being an output variable, to represent the tag associated with the output variable. */
		type: FormControl<string | null | undefined>,

		/** Only present if the child node is SCALAR and corresponds to an output variable of the parent node. The field carries the name of the output variable. For example, a `TableScan` operator that reads rows from a table will have child links to the `SCALAR` nodes representing the output variables created for each column that is read by the operator. The corresponding `variable` fields will be set to the variable names assigned to the columns. */
		variable: FormControl<string | null | undefined>,
	}
	export function CreateChildLinkFormGroup() {
		return new FormGroup<ChildLinkFormProperties>({
			childIndex: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			variable: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for Commit. */
	export interface CommitRequest {

		/** The mutations to be executed when this transaction commits. All mutations are applied atomically, in the order they appear in this list. */
		mutations?: Array<Mutation>;

		/** Common request options for various APIs. */
		requestOptions?: RequestOptions;

		/** If `true`, then statistics related to the transaction will be included in the CommitResponse. Default value is `false`. */
		returnCommitStats?: boolean | null;

		/** Transactions: Each session can have at most one active transaction at a time (note that standalone reads and queries use a transaction internally and do count towards the one transaction limit). After the active transaction is completed, the session can immediately be re-used for the next transaction. It is not necessary to create a new session for each transaction. Transaction modes: Cloud Spanner supports three transaction modes: 1. Locking read-write. This type of transaction is the only way to write data into Cloud Spanner. These transactions rely on pessimistic locking and, if necessary, two-phase commit. Locking read-write transactions may abort, requiring the application to retry. 2. Snapshot read-only. Snapshot read-only transactions provide guaranteed consistency across several reads, but do not allow writes. Snapshot read-only transactions can be configured to read at timestamps in the past, or configured to perform a strong read (where Spanner will select a timestamp such that the read is guaranteed to see the effects of all transactions that have committed before the start of the read). Snapshot read-only transactions do not need to be committed. Queries on change streams must be performed with the snapshot read-only transaction mode, specifying a strong read. Please see TransactionOptions.ReadOnly.strong for more details. 3. Partitioned DML. This type of transaction is used to execute a single Partitioned DML statement. Partitioned DML partitions the key space and runs the DML statement over each partition in parallel using separate, internal transactions that commit independently. Partitioned DML transactions do not need to be committed. For transactions that only read, snapshot read-only transactions provide simpler semantics and are almost always faster. In particular, read-only transactions do not take locks, so they do not conflict with read-write transactions. As a consequence of not taking locks, they also do not abort, so retry loops are not needed. Transactions may only read-write data in a single database. They may, however, read-write data in different tables within that database. Locking read-write transactions: Locking transactions may be used to atomically read-modify-write data anywhere in a database. This type of transaction is externally consistent. Clients should attempt to minimize the amount of time a transaction is active. Faster transactions commit with higher probability and cause less contention. Cloud Spanner attempts to keep read locks active as long as the transaction continues to do reads, and the transaction has not been terminated by Commit or Rollback. Long periods of inactivity at the client may cause Cloud Spanner to release a transaction's locks and abort it. Conceptually, a read-write transaction consists of zero or more reads or SQL statements followed by Commit. At any time before Commit, the client can send a Rollback request to abort the transaction. Semantics: Cloud Spanner can commit the transaction if all read locks it acquired are still valid at commit time, and it is able to acquire write locks for all writes. Cloud Spanner can abort the transaction for any reason. If a commit attempt returns `ABORTED`, Cloud Spanner guarantees that the transaction has not modified any user data in Cloud Spanner. Unless the transaction commits, Cloud Spanner makes no guarantees about how long the transaction's locks were held for. It is an error to use Cloud Spanner locks for any sort of mutual exclusion other than between Cloud Spanner transactions themselves. Retrying aborted transactions: When a transaction aborts, the application can choose to retry the whole transaction again. To maximize the chances of successfully committing the retry, the client should execute the retry in the same session as the original attempt. The original session's lock priority increases with each consecutive abort, meaning that each attempt has a slightly better chance of success than the previous. Under some circumstances (for example, many transactions attempting to modify the same row(s)), a transaction can abort many times in a short period before successfully committing. Thus, it is not a good idea to cap the number of retries a transaction can attempt; instead, it is better to limit the total amount of time spent retrying. Idle transactions: A transaction is considered idle if it has no outstanding reads or SQL queries and has not started a read or SQL query within the last 10 seconds. Idle transactions can be aborted by Cloud Spanner so that they don't hold on to locks indefinitely. If an idle transaction is aborted, the commit will fail with error `ABORTED`. If this behavior is undesirable, periodically executing a simple SQL query in the transaction (for example, `SELECT 1`) prevents the transaction from becoming idle. Snapshot read-only transactions: Snapshot read-only transactions provides a simpler method than locking read-write transactions for doing several consistent reads. However, this type of transaction does not support writes. Snapshot transactions do not take locks. Instead, they work by choosing a Cloud Spanner timestamp, then executing all reads at that timestamp. Since they do not acquire locks, they do not block concurrent read-write transactions. Unlike locking read-write transactions, snapshot read-only transactions never abort. They can fail if the chosen read timestamp is garbage collected; however, the default garbage collection policy is generous enough that most applications do not need to worry about this in practice. Snapshot read-only transactions do not need to call Commit or Rollback (and in fact are not permitted to do so). To execute a snapshot transaction, the client specifies a timestamp bound, which tells Cloud Spanner how to choose a read timestamp. The types of timestamp bound are: - Strong (the default). - Bounded staleness. - Exact staleness. If the Cloud Spanner database to be read is geographically distributed, stale read-only transactions can execute more quickly than strong or read-write transactions, because they are able to execute far from the leader replica. Each type of timestamp bound is discussed in detail below. Strong: Strong reads are guaranteed to see the effects of all transactions that have committed before the start of the read. Furthermore, all rows yielded by a single read are consistent with each other -- if any part of the read observes a transaction, all parts of the read see the transaction. Strong reads are not repeatable: two consecutive strong read-only transactions might return inconsistent results if there are concurrent writes. If consistency across reads is required, the reads should be executed within a transaction or at an exact read timestamp. Queries on change streams (see below for more details) must also specify the strong read timestamp bound. See TransactionOptions.ReadOnly.strong. Exact staleness: These timestamp bounds execute reads at a user-specified timestamp. Reads at a timestamp are guaranteed to see a consistent prefix of the global transaction history: they observe modifications done by all transactions with a commit timestamp less than or equal to the read timestamp, and observe none of the modifications done by transactions with a larger commit timestamp. They will block until all conflicting transactions that may be assigned commit timestamps <= the read timestamp have finished. The timestamp can either be expressed as an absolute Cloud Spanner commit timestamp or a staleness relative to the current time. These modes do not require a "negotiation phase" to pick a timestamp. As a result, they execute slightly faster than the equivalent boundedly stale concurrency modes. On the other hand, boundedly stale reads usually return fresher results. See TransactionOptions.ReadOnly.read_timestamp and TransactionOptions.ReadOnly.exact_staleness. Bounded staleness: Bounded staleness modes allow Cloud Spanner to pick the read timestamp, subject to a user-provided staleness bound. Cloud Spanner chooses the newest timestamp within the staleness bound that allows execution of the reads at the closest available replica without blocking. All rows yielded are consistent with each other -- if any part of the read observes a transaction, all parts of the read see the transaction. Boundedly stale reads are not repeatable: two stale reads, even if they use the same staleness bound, can execute at different timestamps and thus return inconsistent results. Boundedly stale reads execute in two phases: the first phase negotiates a timestamp among all replicas needed to serve the read. In the second phase, reads are executed at the negotiated timestamp. As a result of the two phase execution, bounded staleness reads are usually a little slower than comparable exact staleness reads. However, they are typically able to return fresher results, and are more likely to execute at the closest replica. Because the timestamp negotiation requires up-front knowledge of which rows will be read, it can only be used with single-use read-only transactions. See TransactionOptions.ReadOnly.max_staleness and TransactionOptions.ReadOnly.min_read_timestamp. Old read timestamps and garbage collection: Cloud Spanner continuously garbage collects deleted and overwritten data in the background to reclaim storage space. This process is known as "version GC". By default, version GC reclaims versions after they are one hour old. Because of this, Cloud Spanner cannot perform reads at read timestamps more than one hour in the past. This restriction also applies to in-progress reads and/or SQL queries whose timestamp become too old while executing. Reads and SQL queries with too-old read timestamps fail with the error `FAILED_PRECONDITION`. You can configure and extend the `VERSION_RETENTION_PERIOD` of a database up to a period as long as one week, which allows Cloud Spanner to perform reads up to one week in the past. Querying change Streams: A Change Stream is a schema object that can be configured to watch data changes on the entire database, a set of tables, or a set of columns in a database. When a change stream is created, Spanner automatically defines a corresponding SQL Table-Valued Function (TVF) that can be used to query the change records in the associated change stream using the ExecuteStreamingSql API. The name of the TVF for a change stream is generated from the name of the change stream: READ_. All queries on change stream TVFs must be executed using the ExecuteStreamingSql API with a single-use read-only transaction with a strong read-only timestamp_bound. The change stream TVF allows users to specify the start_timestamp and end_timestamp for the time range of interest. All change records within the retention period is accessible using the strong read-only timestamp_bound. All other TransactionOptions are invalid for change stream queries. In addition, if TransactionOptions.read_only.return_read_timestamp is set to true, a special value of 2^63 - 2 will be returned in the Transaction message that describes the transaction, instead of a valid read timestamp. This special value should be discarded and not used for any subsequent queries. Please see https://cloud.google.com/spanner/docs/change-streams for more details on how to query the change stream TVFs. Partitioned DML transactions: Partitioned DML transactions are used to execute DML statements with a different execution strategy that provides different, and often better, scalability properties for large, table-wide operations than DML in a ReadWrite transaction. Smaller scoped statements, such as an OLTP workload, should prefer using ReadWrite transactions. Partitioned DML partitions the keyspace and runs the DML statement on each partition in separate, internal transactions. These transactions commit automatically when complete, and run independently from one another. To reduce lock contention, this execution strategy only acquires read locks on rows that match the WHERE clause of the statement. Additionally, the smaller per-partition transactions hold locks for less time. That said, Partitioned DML is not a drop-in replacement for standard DML used in ReadWrite transactions. - The DML statement must be fully-partitionable. Specifically, the statement must be expressible as the union of many statements which each access only a single row of the table. - The statement is not applied atomically to all rows of the table. Rather, the statement is applied atomically to partitions of the table, in independent transactions. Secondary index rows are updated atomically with the base table rows. - Partitioned DML does not guarantee exactly-once execution semantics against a partition. The statement will be applied at least once to each partition. It is strongly recommended that the DML statement should be idempotent to avoid unexpected results. For instance, it is potentially dangerous to run a statement such as `UPDATE table SET column = column + 1` as it could be run multiple times against some rows. - The partitions are committed automatically - there is no support for Commit or Rollback. If the call returns an error, or if the client issuing the ExecuteSql call dies, it is possible that some rows had the statement executed on them successfully. It is also possible that statement was never executed against other rows. - Partitioned DML transactions may only contain the execution of a single DML statement via ExecuteSql or ExecuteStreamingSql. - If any error is encountered during the execution of the partitioned DML operation (for instance, a UNIQUE INDEX violation, division by zero, or a value that cannot be stored due to schema constraints), then the operation is stopped at that point and an error is returned. It is possible that at this point, some partitions have been committed (or even committed multiple times), and other partitions have not been run at all. Given the above, Partitioned DML is good fit for large, database-wide, operations that are idempotent, such as deleting old rows from a very large table. */
		singleUseTransaction?: TransactionOptions;

		/** Commit a previously-started transaction. */
		transactionId?: string | null;
	}

	/** The request for Commit. */
	export interface CommitRequestFormProperties {

		/** If `true`, then statistics related to the transaction will be included in the CommitResponse. Default value is `false`. */
		returnCommitStats: FormControl<boolean | null | undefined>,

		/** Commit a previously-started transaction. */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateCommitRequestFormGroup() {
		return new FormGroup<CommitRequestFormProperties>({
			returnCommitStats: new FormControl<boolean | null | undefined>(undefined),
			transactionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for Commit. */
	export interface CommitResponse {

		/** Additional statistics about a commit. */
		commitStats?: CommitStats;

		/** The Cloud Spanner timestamp at which the transaction committed. */
		commitTimestamp?: string | null;
	}

	/** The response for Commit. */
	export interface CommitResponseFormProperties {

		/** The Cloud Spanner timestamp at which the transaction committed. */
		commitTimestamp: FormControl<string | null | undefined>,
	}
	export function CreateCommitResponseFormGroup() {
		return new FormGroup<CommitResponseFormProperties>({
			commitTimestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional statistics about a commit. */
	export interface CommitStats {

		/** The total number of mutations for the transaction. Knowing the `mutation_count` value can help you maximize the number of mutations in a transaction and minimize the number of API round trips. You can also monitor this value to prevent transactions from exceeding the system [limit](https://cloud.google.com/spanner/quotas#limits_for_creating_reading_updating_and_deleting_data). If the number of mutations exceeds the limit, the server returns [INVALID_ARGUMENT](https://cloud.google.com/spanner/docs/reference/rest/v1/Code#ENUM_VALUES.INVALID_ARGUMENT). */
		mutationCount?: string | null;
	}

	/** Additional statistics about a commit. */
	export interface CommitStatsFormProperties {

		/** The total number of mutations for the transaction. Knowing the `mutation_count` value can help you maximize the number of mutations in a transaction and minimize the number of API round trips. You can also monitor this value to prevent transactions from exceeding the system [limit](https://cloud.google.com/spanner/quotas#limits_for_creating_reading_updating_and_deleting_data). If the number of mutations exceeds the limit, the server returns [INVALID_ARGUMENT](https://cloud.google.com/spanner/docs/reference/rest/v1/Code#ENUM_VALUES.INVALID_ARGUMENT). */
		mutationCount: FormControl<string | null | undefined>,
	}
	export function CreateCommitStatsFormGroup() {
		return new FormGroup<CommitStatsFormProperties>({
			mutationCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A message representing context for a KeyRangeInfo, including a label, value, unit, and severity. */
	export interface ContextValue {

		/** A message representing a user-facing string whose value may need to be translated before being displayed. */
		label?: LocalizedString;

		/** The severity of this context. */
		severity?: ContextValueSeverity | null;

		/** The unit of the context value. */
		unit?: string | null;

		/** The value for the context. */
		value?: number | null;
	}

	/** A message representing context for a KeyRangeInfo, including a label, value, unit, and severity. */
	export interface ContextValueFormProperties {

		/** The severity of this context. */
		severity: FormControl<ContextValueSeverity | null | undefined>,

		/** The unit of the context value. */
		unit: FormControl<string | null | undefined>,

		/** The value for the context. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateContextValueFormGroup() {
		return new FormGroup<ContextValueFormProperties>({
			severity: new FormControl<ContextValueSeverity | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A message representing a user-facing string whose value may need to be translated before being displayed. */
	export interface LocalizedString {

		/** A map of arguments used when creating the localized message. Keys represent parameter names which may be used by the localized version when substituting dynamic values. */
		args?: {[id: string]: string };

		/** The canonical English version of this message. If no token is provided or the front-end has no message associated with the token, this text will be displayed as-is. */
		message?: string | null;

		/** The token identifying the message, e.g. 'METRIC_READ_CPU'. This should be unique within the service. */
		token?: string | null;
	}

	/** A message representing a user-facing string whose value may need to be translated before being displayed. */
	export interface LocalizedStringFormProperties {

		/** A map of arguments used when creating the localized message. Keys represent parameter names which may be used by the localized version when substituting dynamic values. */
		args: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical English version of this message. If no token is provided or the front-end has no message associated with the token, this text will be displayed as-is. */
		message: FormControl<string | null | undefined>,

		/** The token identifying the message, e.g. 'METRIC_READ_CPU'. This should be unique within the service. */
		token: FormControl<string | null | undefined>,
	}
	export function CreateLocalizedStringFormGroup() {
		return new FormGroup<LocalizedStringFormProperties>({
			args: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContextValueSeverity { SEVERITY_UNSPECIFIED = 'SEVERITY_UNSPECIFIED', INFO = 'INFO', WARNING = 'WARNING', ERROR = 'ERROR', FATAL = 'FATAL' }


	/** Encryption configuration for the copied backup. */
	export interface CopyBackupEncryptionConfig {

		/** Required. The encryption type of the backup. */
		encryptionType?: CopyBackupEncryptionConfigEncryptionType | null;

		/** Optional. The Cloud KMS key that will be used to protect the backup. This field should be set only when encryption_type is `CUSTOMER_MANAGED_ENCRYPTION`. Values are of the form `projects//locations//keyRings//cryptoKeys/`. */
		kmsKeyName?: string | null;
	}

	/** Encryption configuration for the copied backup. */
	export interface CopyBackupEncryptionConfigFormProperties {

		/** Required. The encryption type of the backup. */
		encryptionType: FormControl<CopyBackupEncryptionConfigEncryptionType | null | undefined>,

		/** Optional. The Cloud KMS key that will be used to protect the backup. This field should be set only when encryption_type is `CUSTOMER_MANAGED_ENCRYPTION`. Values are of the form `projects//locations//keyRings//cryptoKeys/`. */
		kmsKeyName: FormControl<string | null | undefined>,
	}
	export function CreateCopyBackupEncryptionConfigFormGroup() {
		return new FormGroup<CopyBackupEncryptionConfigFormProperties>({
			encryptionType: new FormControl<CopyBackupEncryptionConfigEncryptionType | null | undefined>(undefined),
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CopyBackupEncryptionConfigEncryptionType { ENCRYPTION_TYPE_UNSPECIFIED = 'ENCRYPTION_TYPE_UNSPECIFIED', USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION = 'USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION', GOOGLE_DEFAULT_ENCRYPTION = 'GOOGLE_DEFAULT_ENCRYPTION', CUSTOMER_MANAGED_ENCRYPTION = 'CUSTOMER_MANAGED_ENCRYPTION' }


	/** Metadata type for the operation returned by CopyBackup. */
	export interface CopyBackupMetadata {

		/** The time at which cancellation of CopyBackup operation was received. Operations.CancelOperation starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelTime?: string | null;

		/** The name of the backup being created through the copy operation. Values are of the form `projects//instances//backups/`. */
		name?: string | null;

		/** Encapsulates progress related information for a Cloud Spanner long running operation. */
		progress?: OperationProgress;

		/** The name of the source backup that is being copied. Values are of the form `projects//instances//backups/`. */
		sourceBackup?: string | null;
	}

	/** Metadata type for the operation returned by CopyBackup. */
	export interface CopyBackupMetadataFormProperties {

		/** The time at which cancellation of CopyBackup operation was received. Operations.CancelOperation starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelTime: FormControl<string | null | undefined>,

		/** The name of the backup being created through the copy operation. Values are of the form `projects//instances//backups/`. */
		name: FormControl<string | null | undefined>,

		/** The name of the source backup that is being copied. Values are of the form `projects//instances//backups/`. */
		sourceBackup: FormControl<string | null | undefined>,
	}
	export function CreateCopyBackupMetadataFormGroup() {
		return new FormGroup<CopyBackupMetadataFormProperties>({
			cancelTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sourceBackup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates progress related information for a Cloud Spanner long running operation. */
	export interface OperationProgress {

		/** If set, the time at which this operation failed or was completed successfully. */
		endTime?: string | null;

		/** Percent completion of the operation. Values are between 0 and 100 inclusive. */
		progressPercent?: number | null;

		/** Time the request was received. */
		startTime?: string | null;
	}

	/** Encapsulates progress related information for a Cloud Spanner long running operation. */
	export interface OperationProgressFormProperties {

		/** If set, the time at which this operation failed or was completed successfully. */
		endTime: FormControl<string | null | undefined>,

		/** Percent completion of the operation. Values are between 0 and 100 inclusive. */
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

		/** Required. The id of the backup copy. The `backup_id` appended to `parent` forms the full backup_uri of the form `projects//instances//backups/`. */
		backupId?: string | null;

		/** Encryption configuration for the copied backup. */
		encryptionConfig?: CopyBackupEncryptionConfig;

		/** Required. The expiration time of the backup in microsecond granularity. The expiration time must be at least 6 hours and at most 366 days from the `create_time` of the source backup. Once the `expire_time` has passed, the backup is eligible to be automatically deleted by Cloud Spanner to free the resources used by the backup. */
		expireTime?: string | null;

		/** Required. The source backup to be copied. The source backup needs to be in READY state for it to be copied. Once CopyBackup is in progress, the source backup cannot be deleted or cleaned up on expiration until CopyBackup is finished. Values are of the form: `projects//instances//backups/`. */
		sourceBackup?: string | null;
	}

	/** The request for CopyBackup. */
	export interface CopyBackupRequestFormProperties {

		/** Required. The id of the backup copy. The `backup_id` appended to `parent` forms the full backup_uri of the form `projects//instances//backups/`. */
		backupId: FormControl<string | null | undefined>,

		/** Required. The expiration time of the backup in microsecond granularity. The expiration time must be at least 6 hours and at most 366 days from the `create_time` of the source backup. Once the `expire_time` has passed, the backup is eligible to be automatically deleted by Cloud Spanner to free the resources used by the backup. */
		expireTime: FormControl<string | null | undefined>,

		/** Required. The source backup to be copied. The source backup needs to be in READY state for it to be copied. Once CopyBackup is in progress, the source backup cannot be deleted or cleaned up on expiration until CopyBackup is finished. Values are of the form: `projects//instances//backups/`. */
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

		/** The time at which cancellation of this operation was received. Operations.CancelOperation starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelTime?: string | null;

		/** The name of the database the backup is created from. */
		database?: string | null;

		/** The name of the backup being created. */
		name?: string | null;

		/** Encapsulates progress related information for a Cloud Spanner long running operation. */
		progress?: OperationProgress;
	}

	/** Metadata type for the operation returned by CreateBackup. */
	export interface CreateBackupMetadataFormProperties {

		/** The time at which cancellation of this operation was received. Operations.CancelOperation starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelTime: FormControl<string | null | undefined>,

		/** The name of the database the backup is created from. */
		database: FormControl<string | null | undefined>,

		/** The name of the backup being created. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackupMetadataFormGroup() {
		return new FormGroup<CreateBackupMetadataFormProperties>({
			cancelTime: new FormControl<string | null | undefined>(undefined),
			database: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata type for the operation returned by CreateDatabase. */
	export interface CreateDatabaseMetadata {

		/** The database being created. */
		database?: string | null;
	}

	/** Metadata type for the operation returned by CreateDatabase. */
	export interface CreateDatabaseMetadataFormProperties {

		/** The database being created. */
		database: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatabaseMetadataFormGroup() {
		return new FormGroup<CreateDatabaseMetadataFormProperties>({
			database: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for CreateDatabase. */
	export interface CreateDatabaseRequest {

		/** Required. A `CREATE DATABASE` statement, which specifies the ID of the new database. The database ID must conform to the regular expression `a-z*[a-z0-9]` and be between 2 and 30 characters in length. If the database ID is a reserved word or if it contains a hyphen, the database ID must be enclosed in backticks (`` ` ``). */
		createStatement?: string | null;

		/** Optional. The dialect of the Cloud Spanner Database. */
		databaseDialect?: BackupDatabaseDialect | null;

		/** Encryption configuration for a Cloud Spanner database. */
		encryptionConfig?: EncryptionConfig;

		/** Optional. A list of DDL statements to run inside the newly created database. Statements can create tables, indexes, etc. These statements execute atomically with the creation of the database: if there is an error in any statement, the database is not created. */
		extraStatements?: Array<string>;

		/** Optional. Proto descriptors used by CREATE/ALTER PROTO BUNDLE statements in 'extra_statements' above. Contains a protobuf-serialized [google.protobuf.FileDescriptorSet](https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/descriptor.proto). To generate it, [install](https://grpc.io/docs/protoc-installation/) and run `protoc` with --include_imports and --descriptor_set_out. For example, to generate for moon/shot/app.proto, run """ $protoc --proto_path=/app_path --proto_path=/lib_path \ --include_imports \ --descriptor_set_out=descriptors.data \ moon/shot/app.proto """ For more details, see protobuffer [self description](https://developers.google.com/protocol-buffers/docs/techniques#self-description). */
		protoDescriptors?: string | null;
	}

	/** The request for CreateDatabase. */
	export interface CreateDatabaseRequestFormProperties {

		/** Required. A `CREATE DATABASE` statement, which specifies the ID of the new database. The database ID must conform to the regular expression `a-z*[a-z0-9]` and be between 2 and 30 characters in length. If the database ID is a reserved word or if it contains a hyphen, the database ID must be enclosed in backticks (`` ` ``). */
		createStatement: FormControl<string | null | undefined>,

		/** Optional. The dialect of the Cloud Spanner Database. */
		databaseDialect: FormControl<BackupDatabaseDialect | null | undefined>,

		/** Optional. Proto descriptors used by CREATE/ALTER PROTO BUNDLE statements in 'extra_statements' above. Contains a protobuf-serialized [google.protobuf.FileDescriptorSet](https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/descriptor.proto). To generate it, [install](https://grpc.io/docs/protoc-installation/) and run `protoc` with --include_imports and --descriptor_set_out. For example, to generate for moon/shot/app.proto, run """ $protoc --proto_path=/app_path --proto_path=/lib_path \ --include_imports \ --descriptor_set_out=descriptors.data \ moon/shot/app.proto """ For more details, see protobuffer [self description](https://developers.google.com/protocol-buffers/docs/techniques#self-description). */
		protoDescriptors: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatabaseRequestFormGroup() {
		return new FormGroup<CreateDatabaseRequestFormProperties>({
			createStatement: new FormControl<string | null | undefined>(undefined),
			databaseDialect: new FormControl<BackupDatabaseDialect | null | undefined>(undefined),
			protoDescriptors: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encryption configuration for a Cloud Spanner database. */
	export interface EncryptionConfig {

		/** The Cloud KMS key to be used for encrypting and decrypting the database. Values are of the form `projects//locations//keyRings//cryptoKeys/`. */
		kmsKeyName?: string | null;
	}

	/** Encryption configuration for a Cloud Spanner database. */
	export interface EncryptionConfigFormProperties {

		/** The Cloud KMS key to be used for encrypting and decrypting the database. Values are of the form `projects//locations//keyRings//cryptoKeys/`. */
		kmsKeyName: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionConfigFormGroup() {
		return new FormGroup<EncryptionConfigFormProperties>({
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata type for the operation returned by CreateInstanceConfig. */
	export interface CreateInstanceConfigMetadata {

		/** The time at which this operation was cancelled. */
		cancelTime?: string | null;

		/** A possible configuration for a Cloud Spanner instance. Configurations define the geographic placement of nodes and their replication. */
		instanceConfig?: InstanceConfig;

		/** Encapsulates progress related information for a Cloud Spanner long running instance operations. */
		progress?: InstanceOperationProgress;
	}

	/** Metadata type for the operation returned by CreateInstanceConfig. */
	export interface CreateInstanceConfigMetadataFormProperties {

		/** The time at which this operation was cancelled. */
		cancelTime: FormControl<string | null | undefined>,
	}
	export function CreateCreateInstanceConfigMetadataFormGroup() {
		return new FormGroup<CreateInstanceConfigMetadataFormProperties>({
			cancelTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A possible configuration for a Cloud Spanner instance. Configurations define the geographic placement of nodes and their replication. */
	export interface InstanceConfig {

		/** Base configuration name, e.g. projects//instanceConfigs/nam3, based on which this configuration is created. Only set for user managed configurations. `base_config` must refer to a configuration of type GOOGLE_MANAGED in the same project as this configuration. */
		baseConfig?: string | null;

		/** Output only. Whether this instance config is a Google or User Managed Configuration. */
		configType?: InstanceConfigConfigType | null;

		/** The name of this instance configuration as it appears in UIs. */
		displayName?: string | null;

		/** etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a instance config from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform instance config updates in order to avoid race conditions: An etag is returned in the response which contains instance configs, and systems are expected to put that etag in the request to update instance config to ensure that their change will be applied to the same version of the instance config. If no etag is provided in the call to update instance config, then the existing instance config is overwritten blindly. */
		etag?: string | null;

		/** Output only. Describes whether free instances are available to be created in this instance config. */
		freeInstanceAvailability?: InstanceConfigFreeInstanceAvailability | null;

		/** Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. Cloud Labels can be used to filter collections of resources. They can be used to control how resource metrics are aggregated. And they can be used as arguments to policy management rules (e.g. route, firewall, load balancing, etc.). * Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `a-z{0,62}`. * Label values must be between 0 and 63 characters long and must conform to the regular expression `[a-z0-9_-]{0,63}`. * No more than 64 labels can be associated with a given resource. See https://goo.gl/xmQnxf for more information on and examples of labels. If you plan to use labels in your own code, please note that additional characters may be allowed in the future. Therefore, you are advised to use an internal label representation, such as JSON, which doesn't rely upon specific characters being disallowed. For example, representing labels as the string: name + "_" + value would prove problematic if we were to allow "_" in a future release. */
		labels?: {[id: string]: string };

		/** Allowed values of the "default_leader" schema option for databases in instances that use this instance configuration. */
		leaderOptions?: Array<string>;

		/** A unique identifier for the instance configuration. Values are of the form `projects//instanceConfigs/a-z*`. */
		name?: string | null;

		/** Output only. The available optional replicas to choose from for user managed configurations. Populated for Google managed configurations. */
		optionalReplicas?: Array<ReplicaInfo>;

		/** Output only. If true, the instance config is being created or updated. If false, there are no ongoing operations for the instance config. */
		reconciling?: boolean | null;

		/** The geographic placement of nodes in this instance configuration and their replication properties. */
		replicas?: Array<ReplicaInfo>;

		/** Output only. The current instance config state. Applicable only for USER_MANAGED configs. */
		state?: BackupState | null;
	}

	/** A possible configuration for a Cloud Spanner instance. Configurations define the geographic placement of nodes and their replication. */
	export interface InstanceConfigFormProperties {

		/** Base configuration name, e.g. projects//instanceConfigs/nam3, based on which this configuration is created. Only set for user managed configurations. `base_config` must refer to a configuration of type GOOGLE_MANAGED in the same project as this configuration. */
		baseConfig: FormControl<string | null | undefined>,

		/** Output only. Whether this instance config is a Google or User Managed Configuration. */
		configType: FormControl<InstanceConfigConfigType | null | undefined>,

		/** The name of this instance configuration as it appears in UIs. */
		displayName: FormControl<string | null | undefined>,

		/** etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a instance config from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform instance config updates in order to avoid race conditions: An etag is returned in the response which contains instance configs, and systems are expected to put that etag in the request to update instance config to ensure that their change will be applied to the same version of the instance config. If no etag is provided in the call to update instance config, then the existing instance config is overwritten blindly. */
		etag: FormControl<string | null | undefined>,

		/** Output only. Describes whether free instances are available to be created in this instance config. */
		freeInstanceAvailability: FormControl<InstanceConfigFreeInstanceAvailability | null | undefined>,

		/** Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. Cloud Labels can be used to filter collections of resources. They can be used to control how resource metrics are aggregated. And they can be used as arguments to policy management rules (e.g. route, firewall, load balancing, etc.). * Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `a-z{0,62}`. * Label values must be between 0 and 63 characters long and must conform to the regular expression `[a-z0-9_-]{0,63}`. * No more than 64 labels can be associated with a given resource. See https://goo.gl/xmQnxf for more information on and examples of labels. If you plan to use labels in your own code, please note that additional characters may be allowed in the future. Therefore, you are advised to use an internal label representation, such as JSON, which doesn't rely upon specific characters being disallowed. For example, representing labels as the string: name + "_" + value would prove problematic if we were to allow "_" in a future release. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** A unique identifier for the instance configuration. Values are of the form `projects//instanceConfigs/a-z*`. */
		name: FormControl<string | null | undefined>,

		/** Output only. If true, the instance config is being created or updated. If false, there are no ongoing operations for the instance config. */
		reconciling: FormControl<boolean | null | undefined>,

		/** Output only. The current instance config state. Applicable only for USER_MANAGED configs. */
		state: FormControl<BackupState | null | undefined>,
	}
	export function CreateInstanceConfigFormGroup() {
		return new FormGroup<InstanceConfigFormProperties>({
			baseConfig: new FormControl<string | null | undefined>(undefined),
			configType: new FormControl<InstanceConfigConfigType | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			freeInstanceAvailability: new FormControl<InstanceConfigFreeInstanceAvailability | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reconciling: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<BackupState | null | undefined>(undefined),
		});

	}

	export enum InstanceConfigConfigType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', GOOGLE_MANAGED = 'GOOGLE_MANAGED', USER_MANAGED = 'USER_MANAGED' }

	export enum InstanceConfigFreeInstanceAvailability { FREE_INSTANCE_AVAILABILITY_UNSPECIFIED = 'FREE_INSTANCE_AVAILABILITY_UNSPECIFIED', AVAILABLE = 'AVAILABLE', UNSUPPORTED = 'UNSUPPORTED', DISABLED = 'DISABLED', QUOTA_EXCEEDED = 'QUOTA_EXCEEDED' }

	export interface ReplicaInfo {

		/** If true, this location is designated as the default leader location where leader replicas are placed. See the [region types documentation](https://cloud.google.com/spanner/docs/instances#region_types) for more details. */
		defaultLeaderLocation?: boolean | null;

		/** The location of the serving resources, e.g. "us-central1". */
		location?: string | null;

		/** The type of replica. */
		type?: ReplicaInfoType | null;
	}
	export interface ReplicaInfoFormProperties {

		/** If true, this location is designated as the default leader location where leader replicas are placed. See the [region types documentation](https://cloud.google.com/spanner/docs/instances#region_types) for more details. */
		defaultLeaderLocation: FormControl<boolean | null | undefined>,

		/** The location of the serving resources, e.g. "us-central1". */
		location: FormControl<string | null | undefined>,

		/** The type of replica. */
		type: FormControl<ReplicaInfoType | null | undefined>,
	}
	export function CreateReplicaInfoFormGroup() {
		return new FormGroup<ReplicaInfoFormProperties>({
			defaultLeaderLocation: new FormControl<boolean | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ReplicaInfoType | null | undefined>(undefined),
		});

	}

	export enum ReplicaInfoType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', READ_WRITE = 'READ_WRITE', READ_ONLY = 'READ_ONLY', WITNESS = 'WITNESS' }


	/** Encapsulates progress related information for a Cloud Spanner long running instance operations. */
	export interface InstanceOperationProgress {

		/** If set, the time at which this operation failed or was completed successfully. */
		endTime?: string | null;

		/** Percent completion of the operation. Values are between 0 and 100 inclusive. */
		progressPercent?: number | null;

		/** Time the request was received. */
		startTime?: string | null;
	}

	/** Encapsulates progress related information for a Cloud Spanner long running instance operations. */
	export interface InstanceOperationProgressFormProperties {

		/** If set, the time at which this operation failed or was completed successfully. */
		endTime: FormControl<string | null | undefined>,

		/** Percent completion of the operation. Values are between 0 and 100 inclusive. */
		progressPercent: FormControl<number | null | undefined>,

		/** Time the request was received. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateInstanceOperationProgressFormGroup() {
		return new FormGroup<InstanceOperationProgressFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			progressPercent: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for CreateInstanceConfigRequest. */
	export interface CreateInstanceConfigRequest {

		/** A possible configuration for a Cloud Spanner instance. Configurations define the geographic placement of nodes and their replication. */
		instanceConfig?: InstanceConfig;

		/** Required. The ID of the instance config to create. Valid identifiers are of the form `custom-[-a-z0-9]*[a-z0-9]` and must be between 2 and 64 characters in length. The `custom-` prefix is required to avoid name conflicts with Google managed configurations. */
		instanceConfigId?: string | null;

		/** An option to validate, but not actually execute, a request, and provide the same response. */
		validateOnly?: boolean | null;
	}

	/** The request for CreateInstanceConfigRequest. */
	export interface CreateInstanceConfigRequestFormProperties {

		/** Required. The ID of the instance config to create. Valid identifiers are of the form `custom-[-a-z0-9]*[a-z0-9]` and must be between 2 and 64 characters in length. The `custom-` prefix is required to avoid name conflicts with Google managed configurations. */
		instanceConfigId: FormControl<string | null | undefined>,

		/** An option to validate, but not actually execute, a request, and provide the same response. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateInstanceConfigRequestFormGroup() {
		return new FormGroup<CreateInstanceConfigRequestFormProperties>({
			instanceConfigId: new FormControl<string | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Metadata type for the operation returned by CreateInstance. */
	export interface CreateInstanceMetadata {

		/** The time at which this operation was cancelled. If set, this operation is in the process of undoing itself (which is guaranteed to succeed) and cannot be cancelled again. */
		cancelTime?: string | null;

		/** The time at which this operation failed or was completed successfully. */
		endTime?: string | null;

		/** An isolated set of Cloud Spanner resources on which databases can be hosted. */
		instance?: Instance;

		/** The time at which the CreateInstance request was received. */
		startTime?: string | null;
	}

	/** Metadata type for the operation returned by CreateInstance. */
	export interface CreateInstanceMetadataFormProperties {

		/** The time at which this operation was cancelled. If set, this operation is in the process of undoing itself (which is guaranteed to succeed) and cannot be cancelled again. */
		cancelTime: FormControl<string | null | undefined>,

		/** The time at which this operation failed or was completed successfully. */
		endTime: FormControl<string | null | undefined>,

		/** The time at which the CreateInstance request was received. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateCreateInstanceMetadataFormGroup() {
		return new FormGroup<CreateInstanceMetadataFormProperties>({
			cancelTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An isolated set of Cloud Spanner resources on which databases can be hosted. */
	export interface Instance {

		/** Autoscaling config for an instance. */
		autoscalingConfig?: AutoscalingConfig;

		/** Required. The name of the instance's configuration. Values are of the form `projects//instanceConfigs/`. See also InstanceConfig and ListInstanceConfigs. */
		config?: string | null;

		/** Output only. The time at which the instance was created. */
		createTime?: string | null;

		/** Required. The descriptive name for this instance as it appears in UIs. Must be unique per project and between 4 and 30 characters in length. */
		displayName?: string | null;

		/** Deprecated. This field is not populated. */
		endpointUris?: Array<string>;

		/** Free instance specific metadata that is kept even after an instance has been upgraded for tracking purposes. */
		freeInstanceMetadata?: FreeInstanceMetadata;

		/** The `InstanceType` of the current instance. */
		instanceType?: InstanceInstanceType | null;

		/** Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. Cloud Labels can be used to filter collections of resources. They can be used to control how resource metrics are aggregated. And they can be used as arguments to policy management rules (e.g. route, firewall, load balancing, etc.). * Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `a-z{0,62}`. * Label values must be between 0 and 63 characters long and must conform to the regular expression `[a-z0-9_-]{0,63}`. * No more than 64 labels can be associated with a given resource. See https://goo.gl/xmQnxf for more information on and examples of labels. If you plan to use labels in your own code, please note that additional characters may be allowed in the future. And so you are advised to use an internal label representation, such as JSON, which doesn't rely upon specific characters being disallowed. For example, representing labels as the string: name + "_" + value would prove problematic if we were to allow "_" in a future release. */
		labels?: {[id: string]: string };

		/** Required. A unique identifier for the instance, which cannot be changed after the instance is created. Values are of the form `projects//instances/a-z*[a-z0-9]`. The final segment of the name must be between 2 and 64 characters in length. */
		name?: string | null;

		/** The number of nodes allocated to this instance. At most one of either node_count or processing_units should be present in the message. Users can set the node_count field to specify the target number of nodes allocated to the instance. This may be zero in API responses for instances that are not yet in state `READY`. See [the documentation](https://cloud.google.com/spanner/docs/compute-capacity) for more information about nodes and processing units. */
		nodeCount?: number | null;

		/** The number of processing units allocated to this instance. At most one of processing_units or node_count should be present in the message. Users can set the processing_units field to specify the target number of processing units allocated to the instance. This may be zero in API responses for instances that are not yet in state `READY`. See [the documentation](https://cloud.google.com/spanner/docs/compute-capacity) for more information about nodes and processing units. */
		processingUnits?: number | null;

		/** Output only. The current instance state. For CreateInstance, the state must be either omitted or set to `CREATING`. For UpdateInstance, the state must be either omitted or set to `READY`. */
		state?: BackupState | null;

		/** Output only. The time at which the instance was most recently updated. */
		updateTime?: string | null;
	}

	/** An isolated set of Cloud Spanner resources on which databases can be hosted. */
	export interface InstanceFormProperties {

		/** Required. The name of the instance's configuration. Values are of the form `projects//instanceConfigs/`. See also InstanceConfig and ListInstanceConfigs. */
		config: FormControl<string | null | undefined>,

		/** Output only. The time at which the instance was created. */
		createTime: FormControl<string | null | undefined>,

		/** Required. The descriptive name for this instance as it appears in UIs. Must be unique per project and between 4 and 30 characters in length. */
		displayName: FormControl<string | null | undefined>,

		/** The `InstanceType` of the current instance. */
		instanceType: FormControl<InstanceInstanceType | null | undefined>,

		/** Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. Cloud Labels can be used to filter collections of resources. They can be used to control how resource metrics are aggregated. And they can be used as arguments to policy management rules (e.g. route, firewall, load balancing, etc.). * Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `a-z{0,62}`. * Label values must be between 0 and 63 characters long and must conform to the regular expression `[a-z0-9_-]{0,63}`. * No more than 64 labels can be associated with a given resource. See https://goo.gl/xmQnxf for more information on and examples of labels. If you plan to use labels in your own code, please note that additional characters may be allowed in the future. And so you are advised to use an internal label representation, such as JSON, which doesn't rely upon specific characters being disallowed. For example, representing labels as the string: name + "_" + value would prove problematic if we were to allow "_" in a future release. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. A unique identifier for the instance, which cannot be changed after the instance is created. Values are of the form `projects//instances/a-z*[a-z0-9]`. The final segment of the name must be between 2 and 64 characters in length. */
		name: FormControl<string | null | undefined>,

		/** The number of nodes allocated to this instance. At most one of either node_count or processing_units should be present in the message. Users can set the node_count field to specify the target number of nodes allocated to the instance. This may be zero in API responses for instances that are not yet in state `READY`. See [the documentation](https://cloud.google.com/spanner/docs/compute-capacity) for more information about nodes and processing units. */
		nodeCount: FormControl<number | null | undefined>,

		/** The number of processing units allocated to this instance. At most one of processing_units or node_count should be present in the message. Users can set the processing_units field to specify the target number of processing units allocated to the instance. This may be zero in API responses for instances that are not yet in state `READY`. See [the documentation](https://cloud.google.com/spanner/docs/compute-capacity) for more information about nodes and processing units. */
		processingUnits: FormControl<number | null | undefined>,

		/** Output only. The current instance state. For CreateInstance, the state must be either omitted or set to `CREATING`. For UpdateInstance, the state must be either omitted or set to `READY`. */
		state: FormControl<BackupState | null | undefined>,

		/** Output only. The time at which the instance was most recently updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			config: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<InstanceInstanceType | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nodeCount: new FormControl<number | null | undefined>(undefined),
			processingUnits: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<BackupState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Free instance specific metadata that is kept even after an instance has been upgraded for tracking purposes. */
	export interface FreeInstanceMetadata {

		/** Specifies the expiration behavior of a free instance. The default of ExpireBehavior is `REMOVE_AFTER_GRACE_PERIOD`. This can be modified during or after creation, and before expiration. */
		expireBehavior?: FreeInstanceMetadataExpireBehavior | null;

		/** Output only. Timestamp after which the instance will either be upgraded or scheduled for deletion after a grace period. ExpireBehavior is used to choose between upgrading or scheduling the free instance for deletion. This timestamp is set during the creation of a free instance. */
		expireTime?: string | null;

		/** Output only. If present, the timestamp at which the free instance was upgraded to a provisioned instance. */
		upgradeTime?: string | null;
	}

	/** Free instance specific metadata that is kept even after an instance has been upgraded for tracking purposes. */
	export interface FreeInstanceMetadataFormProperties {

		/** Specifies the expiration behavior of a free instance. The default of ExpireBehavior is `REMOVE_AFTER_GRACE_PERIOD`. This can be modified during or after creation, and before expiration. */
		expireBehavior: FormControl<FreeInstanceMetadataExpireBehavior | null | undefined>,

		/** Output only. Timestamp after which the instance will either be upgraded or scheduled for deletion after a grace period. ExpireBehavior is used to choose between upgrading or scheduling the free instance for deletion. This timestamp is set during the creation of a free instance. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. If present, the timestamp at which the free instance was upgraded to a provisioned instance. */
		upgradeTime: FormControl<string | null | undefined>,
	}
	export function CreateFreeInstanceMetadataFormGroup() {
		return new FormGroup<FreeInstanceMetadataFormProperties>({
			expireBehavior: new FormControl<FreeInstanceMetadataExpireBehavior | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			upgradeTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FreeInstanceMetadataExpireBehavior { EXPIRE_BEHAVIOR_UNSPECIFIED = 'EXPIRE_BEHAVIOR_UNSPECIFIED', FREE_TO_PROVISIONED = 'FREE_TO_PROVISIONED', REMOVE_AFTER_GRACE_PERIOD = 'REMOVE_AFTER_GRACE_PERIOD' }

	export enum InstanceInstanceType { INSTANCE_TYPE_UNSPECIFIED = 'INSTANCE_TYPE_UNSPECIFIED', PROVISIONED = 'PROVISIONED', FREE_INSTANCE = 'FREE_INSTANCE' }


	/** The request for CreateInstance. */
	export interface CreateInstanceRequest {

		/** An isolated set of Cloud Spanner resources on which databases can be hosted. */
		instance?: Instance;

		/** Required. The ID of the instance to create. Valid identifiers are of the form `a-z*[a-z0-9]` and must be between 2 and 64 characters in length. */
		instanceId?: string | null;
	}

	/** The request for CreateInstance. */
	export interface CreateInstanceRequestFormProperties {

		/** Required. The ID of the instance to create. Valid identifiers are of the form `a-z*[a-z0-9]` and must be between 2 and 64 characters in length. */
		instanceId: FormControl<string | null | undefined>,
	}
	export function CreateCreateInstanceRequestFormGroup() {
		return new FormGroup<CreateInstanceRequestFormProperties>({
			instanceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for CreateSession. */
	export interface CreateSessionRequest {

		/** A session in the Cloud Spanner API. */
		session?: Session;
	}

	/** The request for CreateSession. */
	export interface CreateSessionRequestFormProperties {
	}
	export function CreateCreateSessionRequestFormGroup() {
		return new FormGroup<CreateSessionRequestFormProperties>({
		});

	}


	/** A Cloud Spanner database. */
	export interface Database {

		/** Output only. If exists, the time at which the database creation started. */
		createTime?: string | null;

		/** Output only. The dialect of the Cloud Spanner Database. */
		databaseDialect?: BackupDatabaseDialect | null;

		/** Output only. The read-write region which contains the database's leader replicas. This is the same as the value of default_leader database option set using DatabaseAdmin.CreateDatabase or DatabaseAdmin.UpdateDatabaseDdl. If not explicitly set, this is empty. */
		defaultLeader?: string | null;

		/** Output only. Earliest timestamp at which older versions of the data can be read. This value is continuously updated by Cloud Spanner and becomes stale the moment it is queried. If you are using this value to recover data, make sure to account for the time from the moment when the value is queried to the moment when you initiate the recovery. */
		earliestVersionTime?: string | null;

		/** Whether drop protection is enabled for this database. Defaults to false, if not set. For more details, please see how to [prevent accidental database deletion](https://cloud.google.com/spanner/docs/prevent-database-deletion). */
		enableDropProtection?: boolean | null;

		/** Encryption configuration for a Cloud Spanner database. */
		encryptionConfig?: EncryptionConfig;

		/** Output only. For databases that are using customer managed encryption, this field contains the encryption information for the database, such as all Cloud KMS key versions that are in use. The `encryption_status' field inside of each `EncryptionInfo` is not populated. For databases that are using Google default or other types of encryption, this field is empty. This field is propagated lazily from the backend. There might be a delay from when a key version is being used and when it appears in this field. */
		encryptionInfo?: Array<EncryptionInfo>;

		/** Required. The name of the database. Values are of the form `projects//instances//databases/`, where `` is as specified in the `CREATE DATABASE` statement. This name can be passed to other API methods to identify the database. */
		name?: string | null;

		/** Output only. If true, the database is being updated. If false, there are no ongoing update operations for the database. */
		reconciling?: boolean | null;

		/** Information about the database restore. */
		restoreInfo?: RestoreInfo;

		/** Output only. The current database state. */
		state?: DatabaseState | null;

		/** Output only. The period in which Cloud Spanner retains all versions of data for the database. This is the same as the value of version_retention_period database option set using UpdateDatabaseDdl. Defaults to 1 hour, if not set. */
		versionRetentionPeriod?: string | null;
	}

	/** A Cloud Spanner database. */
	export interface DatabaseFormProperties {

		/** Output only. If exists, the time at which the database creation started. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The dialect of the Cloud Spanner Database. */
		databaseDialect: FormControl<BackupDatabaseDialect | null | undefined>,

		/** Output only. The read-write region which contains the database's leader replicas. This is the same as the value of default_leader database option set using DatabaseAdmin.CreateDatabase or DatabaseAdmin.UpdateDatabaseDdl. If not explicitly set, this is empty. */
		defaultLeader: FormControl<string | null | undefined>,

		/** Output only. Earliest timestamp at which older versions of the data can be read. This value is continuously updated by Cloud Spanner and becomes stale the moment it is queried. If you are using this value to recover data, make sure to account for the time from the moment when the value is queried to the moment when you initiate the recovery. */
		earliestVersionTime: FormControl<string | null | undefined>,

		/** Whether drop protection is enabled for this database. Defaults to false, if not set. For more details, please see how to [prevent accidental database deletion](https://cloud.google.com/spanner/docs/prevent-database-deletion). */
		enableDropProtection: FormControl<boolean | null | undefined>,

		/** Required. The name of the database. Values are of the form `projects//instances//databases/`, where `` is as specified in the `CREATE DATABASE` statement. This name can be passed to other API methods to identify the database. */
		name: FormControl<string | null | undefined>,

		/** Output only. If true, the database is being updated. If false, there are no ongoing update operations for the database. */
		reconciling: FormControl<boolean | null | undefined>,

		/** Output only. The current database state. */
		state: FormControl<DatabaseState | null | undefined>,

		/** Output only. The period in which Cloud Spanner retains all versions of data for the database. This is the same as the value of version_retention_period database option set using UpdateDatabaseDdl. Defaults to 1 hour, if not set. */
		versionRetentionPeriod: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseFormGroup() {
		return new FormGroup<DatabaseFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			databaseDialect: new FormControl<BackupDatabaseDialect | null | undefined>(undefined),
			defaultLeader: new FormControl<string | null | undefined>(undefined),
			earliestVersionTime: new FormControl<string | null | undefined>(undefined),
			enableDropProtection: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reconciling: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<DatabaseState | null | undefined>(undefined),
			versionRetentionPeriod: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the database restore. */
	export interface RestoreInfo {

		/** Information about a backup. */
		backupInfo?: BackupInfo;

		/** The type of the restore source. */
		sourceType?: RestoreInfoSourceType | null;
	}

	/** Information about the database restore. */
	export interface RestoreInfoFormProperties {

		/** The type of the restore source. */
		sourceType: FormControl<RestoreInfoSourceType | null | undefined>,
	}
	export function CreateRestoreInfoFormGroup() {
		return new FormGroup<RestoreInfoFormProperties>({
			sourceType: new FormControl<RestoreInfoSourceType | null | undefined>(undefined),
		});

	}

	export enum RestoreInfoSourceType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', BACKUP = 'BACKUP' }

	export enum DatabaseState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', READY = 'READY', READY_OPTIMIZING = 'READY_OPTIMIZING' }


	/** A Cloud Spanner database role. */
	export interface DatabaseRole {

		/** Required. The name of the database role. Values are of the form `projects//instances//databases//databaseRoles/` where `` is as specified in the `CREATE ROLE` DDL statement. */
		name?: string | null;
	}

	/** A Cloud Spanner database role. */
	export interface DatabaseRoleFormProperties {

		/** Required. The name of the database role. Values are of the form `projects//instances//databases//databaseRoles/` where `` is as specified in the `CREATE ROLE` DDL statement. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseRoleFormGroup() {
		return new FormGroup<DatabaseRoleFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Action information extracted from a DDL statement. This proto is used to display the brief info of the DDL statement for the operation UpdateDatabaseDdl. */
	export interface DdlStatementActionInfo {

		/** The action for the DDL statement, e.g. CREATE, ALTER, DROP, GRANT, etc. This field is a non-empty string. */
		action?: string | null;

		/** The entity name(s) being operated on the DDL statement. E.g. 1. For statement "CREATE TABLE t1(...)", `entity_names` = ["t1"]. 2. For statement "GRANT ROLE r1, r2 ...", `entity_names` = ["r1", "r2"]. 3. For statement "ANALYZE", `entity_names` = []. */
		entityNames?: Array<string>;

		/** The entity type for the DDL statement, e.g. TABLE, INDEX, VIEW, etc. This field can be empty string for some DDL statement, e.g. for statement "ANALYZE", `entity_type` = "". */
		entityType?: string | null;
	}

	/** Action information extracted from a DDL statement. This proto is used to display the brief info of the DDL statement for the operation UpdateDatabaseDdl. */
	export interface DdlStatementActionInfoFormProperties {

		/** The action for the DDL statement, e.g. CREATE, ALTER, DROP, GRANT, etc. This field is a non-empty string. */
		action: FormControl<string | null | undefined>,

		/** The entity type for the DDL statement, e.g. TABLE, INDEX, VIEW, etc. This field can be empty string for some DDL statement, e.g. for statement "ANALYZE", `entity_type` = "". */
		entityType: FormControl<string | null | undefined>,
	}
	export function CreateDdlStatementActionInfoFormGroup() {
		return new FormGroup<DdlStatementActionInfoFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			entityType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A message representing a derived metric. */
	export interface DerivedMetric {

		/** A message representing a user-facing string whose value may need to be translated before being displayed. */
		denominator?: LocalizedString;

		/** A message representing a user-facing string whose value may need to be translated before being displayed. */
		numerator?: LocalizedString;
	}

	/** A message representing a derived metric. */
	export interface DerivedMetricFormProperties {
	}
	export function CreateDerivedMetricFormGroup() {
		return new FormGroup<DerivedMetricFormProperties>({
		});

	}


	/** A message representing the key visualizer diagnostic messages. */
	export interface DiagnosticMessage {

		/** A message representing a user-facing string whose value may need to be translated before being displayed. */
		info?: LocalizedString;

		/** A message representing a user-facing string whose value may need to be translated before being displayed. */
		metric?: LocalizedString;

		/** Whether this message is specific only for the current metric. By default Diagnostics are shown for all metrics, regardless which metric is the currently selected metric in the UI. However occasionally a metric will generate so many messages that the resulting visual clutter becomes overwhelming. In this case setting this to true, will show the diagnostic messages for that metric only if it is the currently selected metric. */
		metricSpecific?: boolean | null;

		/** The severity of the diagnostic message. */
		severity?: ContextValueSeverity | null;

		/** A message representing a user-facing string whose value may need to be translated before being displayed. */
		shortMessage?: LocalizedString;
	}

	/** A message representing the key visualizer diagnostic messages. */
	export interface DiagnosticMessageFormProperties {

		/** Whether this message is specific only for the current metric. By default Diagnostics are shown for all metrics, regardless which metric is the currently selected metric in the UI. However occasionally a metric will generate so many messages that the resulting visual clutter becomes overwhelming. In this case setting this to true, will show the diagnostic messages for that metric only if it is the currently selected metric. */
		metricSpecific: FormControl<boolean | null | undefined>,

		/** The severity of the diagnostic message. */
		severity: FormControl<ContextValueSeverity | null | undefined>,
	}
	export function CreateDiagnosticMessageFormGroup() {
		return new FormGroup<DiagnosticMessageFormProperties>({
			metricSpecific: new FormControl<boolean | null | undefined>(undefined),
			severity: new FormControl<ContextValueSeverity | null | undefined>(undefined),
		});

	}


	/** The DirectedReadOptions can be used to indicate which replicas or regions should be used for non-transactional reads or queries. DirectedReadOptions may only be specified for a read-only transaction, otherwise the API will return an `INVALID_ARGUMENT` error. */
	export interface DirectedReadOptions {

		/** An ExcludeReplicas contains a repeated set of ReplicaSelection that should be excluded from serving requests. */
		excludeReplicas?: ExcludeReplicas;

		/** An IncludeReplicas contains a repeated set of ReplicaSelection which indicates the order in which replicas should be considered. */
		includeReplicas?: IncludeReplicas;
	}

	/** The DirectedReadOptions can be used to indicate which replicas or regions should be used for non-transactional reads or queries. DirectedReadOptions may only be specified for a read-only transaction, otherwise the API will return an `INVALID_ARGUMENT` error. */
	export interface DirectedReadOptionsFormProperties {
	}
	export function CreateDirectedReadOptionsFormGroup() {
		return new FormGroup<DirectedReadOptionsFormProperties>({
		});

	}


	/** An ExcludeReplicas contains a repeated set of ReplicaSelection that should be excluded from serving requests. */
	export interface ExcludeReplicas {

		/** The directed read replica selector. */
		replicaSelections?: Array<ReplicaSelection>;
	}

	/** An ExcludeReplicas contains a repeated set of ReplicaSelection that should be excluded from serving requests. */
	export interface ExcludeReplicasFormProperties {
	}
	export function CreateExcludeReplicasFormGroup() {
		return new FormGroup<ExcludeReplicasFormProperties>({
		});

	}


	/** The directed read replica selector. Callers must provide one or more of the following fields for replica selection: * `location` - The location must be one of the regions within the multi-region configuration of your database. * `type` - The type of the replica. Some examples of using replica_selectors are: * `location:us-east1` --> The "us-east1" replica(s) of any available type will be used to process the request. * `type:READ_ONLY` --> The "READ_ONLY" type replica(s) in nearest . available location will be used to process the request. * `location:us-east1 type:READ_ONLY` --> The "READ_ONLY" type replica(s) in location "us-east1" will be used to process the request. */
	export interface ReplicaSelection {

		/** The location or region of the serving requests, e.g. "us-east1". */
		location?: string | null;

		/** The type of replica. */
		type?: ReplicaSelectionType | null;
	}

	/** The directed read replica selector. Callers must provide one or more of the following fields for replica selection: * `location` - The location must be one of the regions within the multi-region configuration of your database. * `type` - The type of the replica. Some examples of using replica_selectors are: * `location:us-east1` --> The "us-east1" replica(s) of any available type will be used to process the request. * `type:READ_ONLY` --> The "READ_ONLY" type replica(s) in nearest . available location will be used to process the request. * `location:us-east1 type:READ_ONLY` --> The "READ_ONLY" type replica(s) in location "us-east1" will be used to process the request. */
	export interface ReplicaSelectionFormProperties {

		/** The location or region of the serving requests, e.g. "us-east1". */
		location: FormControl<string | null | undefined>,

		/** The type of replica. */
		type: FormControl<ReplicaSelectionType | null | undefined>,
	}
	export function CreateReplicaSelectionFormGroup() {
		return new FormGroup<ReplicaSelectionFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ReplicaSelectionType | null | undefined>(undefined),
		});

	}

	export enum ReplicaSelectionType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', READ_WRITE = 'READ_WRITE', READ_ONLY = 'READ_ONLY' }


	/** An IncludeReplicas contains a repeated set of ReplicaSelection which indicates the order in which replicas should be considered. */
	export interface IncludeReplicas {

		/** If true, Spanner will not route requests to a replica outside the include_replicas list when all of the specified replicas are unavailable or unhealthy. Default value is `false`. */
		autoFailoverDisabled?: boolean | null;

		/** The directed read replica selector. */
		replicaSelections?: Array<ReplicaSelection>;
	}

	/** An IncludeReplicas contains a repeated set of ReplicaSelection which indicates the order in which replicas should be considered. */
	export interface IncludeReplicasFormProperties {

		/** If true, Spanner will not route requests to a replica outside the include_replicas list when all of the specified replicas are unavailable or unhealthy. Default value is `false`. */
		autoFailoverDisabled: FormControl<boolean | null | undefined>,
	}
	export function CreateIncludeReplicasFormGroup() {
		return new FormGroup<IncludeReplicasFormProperties>({
			autoFailoverDisabled: new FormControl<boolean | null | undefined>(undefined),
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


	/** The request for ExecuteBatchDml. */
	export interface ExecuteBatchDmlRequest {

		/** Common request options for various APIs. */
		requestOptions?: RequestOptions;

		/** Required. A per-transaction sequence number used to identify this request. This field makes each request idempotent such that if the request is received multiple times, at most one will succeed. The sequence number must be monotonically increasing within the transaction. If a request arrives for the first time with an out-of-order sequence number, the transaction may be aborted. Replays of previously handled requests will yield the same response as the first execution. */
		seqno?: string | null;

		/** Required. The list of statements to execute in this batch. Statements are executed serially, such that the effects of statement `i` are visible to statement `i+1`. Each statement must be a DML statement. Execution stops at the first failed statement; the remaining statements are not executed. Callers must provide at least one statement. */
		statements?: Array<Statement>;

		/** This message is used to select the transaction in which a Read or ExecuteSql call runs. See TransactionOptions for more information about transactions. */
		transaction?: TransactionSelector;
	}

	/** The request for ExecuteBatchDml. */
	export interface ExecuteBatchDmlRequestFormProperties {

		/** Required. A per-transaction sequence number used to identify this request. This field makes each request idempotent such that if the request is received multiple times, at most one will succeed. The sequence number must be monotonically increasing within the transaction. If a request arrives for the first time with an out-of-order sequence number, the transaction may be aborted. Replays of previously handled requests will yield the same response as the first execution. */
		seqno: FormControl<string | null | undefined>,
	}
	export function CreateExecuteBatchDmlRequestFormGroup() {
		return new FormGroup<ExecuteBatchDmlRequestFormProperties>({
			seqno: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single DML statement. */
	export interface Statement {

		/** It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings. In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types. */
		paramTypes?: {[id: string]: Type };

		/** Parameter names and values that bind to placeholders in the DML string. A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names can contain letters, numbers, and underscores. Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example: `"WHERE id > @msg_id AND id < @msg_id + 100"` It is an error to execute a SQL statement with unbound parameters. */
		params?: {[id: string]: any };

		/** Required. The DML string. */
		sql?: string | null;
	}

	/** A single DML statement. */
	export interface StatementFormProperties {

		/** It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings. In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types. */
		paramTypes: FormControl<{[id: string]: Type } | null | undefined>,

		/** Parameter names and values that bind to placeholders in the DML string. A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names can contain letters, numbers, and underscores. Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example: `"WHERE id > @msg_id AND id < @msg_id + 100"` It is an error to execute a SQL statement with unbound parameters. */
		params: FormControl<{[id: string]: any } | null | undefined>,

		/** Required. The DML string. */
		sql: FormControl<string | null | undefined>,
	}
	export function CreateStatementFormGroup() {
		return new FormGroup<StatementFormProperties>({
			paramTypes: new FormControl<{[id: string]: Type } | null | undefined>(undefined),
			params: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			sql: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `Type` indicates the type of a Cloud Spanner value, as might be stored in a table cell or returned from an SQL query. */
	export interface Type {

		/** `Type` indicates the type of a Cloud Spanner value, as might be stored in a table cell or returned from an SQL query. */
		arrayElementType?: Type;

		/** Required. The TypeCode for this type. */
		code?: TypeCode | null;

		/** If code == PROTO or code == ENUM, then `proto_type_fqn` is the fully qualified name of the proto type representing the proto/enum definition. */
		protoTypeFqn?: string | null;

		/** `StructType` defines the fields of a STRUCT type. */
		structType?: StructType;

		/** The TypeAnnotationCode that disambiguates SQL type that Spanner will use to represent values of this type during query processing. This is necessary for some type codes because a single TypeCode can be mapped to different SQL types depending on the SQL dialect. type_annotation typically is not needed to process the content of a value (it doesn't affect serialization) and clients can ignore it on the read path. */
		typeAnnotation?: TypeTypeAnnotation | null;
	}

	/** `Type` indicates the type of a Cloud Spanner value, as might be stored in a table cell or returned from an SQL query. */
	export interface TypeFormProperties {

		/** Required. The TypeCode for this type. */
		code: FormControl<TypeCode | null | undefined>,

		/** If code == PROTO or code == ENUM, then `proto_type_fqn` is the fully qualified name of the proto type representing the proto/enum definition. */
		protoTypeFqn: FormControl<string | null | undefined>,

		/** The TypeAnnotationCode that disambiguates SQL type that Spanner will use to represent values of this type during query processing. This is necessary for some type codes because a single TypeCode can be mapped to different SQL types depending on the SQL dialect. type_annotation typically is not needed to process the content of a value (it doesn't affect serialization) and clients can ignore it on the read path. */
		typeAnnotation: FormControl<TypeTypeAnnotation | null | undefined>,
	}
	export function CreateTypeFormGroup() {
		return new FormGroup<TypeFormProperties>({
			code: new FormControl<TypeCode | null | undefined>(undefined),
			protoTypeFqn: new FormControl<string | null | undefined>(undefined),
			typeAnnotation: new FormControl<TypeTypeAnnotation | null | undefined>(undefined),
		});

	}

	export enum TypeCode { TYPE_CODE_UNSPECIFIED = 'TYPE_CODE_UNSPECIFIED', BOOL = 'BOOL', INT64 = 'INT64', FLOAT64 = 'FLOAT64', TIMESTAMP = 'TIMESTAMP', DATE = 'DATE', STRING = 'STRING', BYTES = 'BYTES', ARRAY = 'ARRAY', STRUCT = 'STRUCT', NUMERIC = 'NUMERIC', JSON = 'JSON', PROTO = 'PROTO', ENUM = 'ENUM' }


	/** `StructType` defines the fields of a STRUCT type. */
	export interface StructType {

		/** The list of fields that make up this struct. Order is significant, because values of this struct type are represented as lists, where the order of field values matches the order of fields in the StructType. In turn, the order of fields matches the order of columns in a read request, or the order of fields in the `SELECT` clause of a query. */
		fields?: Array<Field>;
	}

	/** `StructType` defines the fields of a STRUCT type. */
	export interface StructTypeFormProperties {
	}
	export function CreateStructTypeFormGroup() {
		return new FormGroup<StructTypeFormProperties>({
		});

	}


	/** Message representing a single field of a struct. */
	export interface Field {

		/** The name of the field. For reads, this is the column name. For SQL queries, it is the column alias (e.g., `"Word"` in the query `"SELECT 'hello' AS Word"`), or the column name (e.g., `"ColName"` in the query `"SELECT ColName FROM Table"`). Some columns might have an empty name (e.g., `"SELECT UPPER(ColName)"`). Note that a query result can contain multiple fields with the same name. */
		name?: string | null;

		/** `Type` indicates the type of a Cloud Spanner value, as might be stored in a table cell or returned from an SQL query. */
		type?: Type;
	}

	/** Message representing a single field of a struct. */
	export interface FieldFormProperties {

		/** The name of the field. For reads, this is the column name. For SQL queries, it is the column alias (e.g., `"Word"` in the query `"SELECT 'hello' AS Word"`), or the column name (e.g., `"ColName"` in the query `"SELECT ColName FROM Table"`). Some columns might have an empty name (e.g., `"SELECT UPPER(ColName)"`). Note that a query result can contain multiple fields with the same name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateFieldFormGroup() {
		return new FormGroup<FieldFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TypeTypeAnnotation { TYPE_ANNOTATION_CODE_UNSPECIFIED = 'TYPE_ANNOTATION_CODE_UNSPECIFIED', PG_NUMERIC = 'PG_NUMERIC', PG_JSONB = 'PG_JSONB' }


	/** This message is used to select the transaction in which a Read or ExecuteSql call runs. See TransactionOptions for more information about transactions. */
	export interface TransactionSelector {

		/** Transactions: Each session can have at most one active transaction at a time (note that standalone reads and queries use a transaction internally and do count towards the one transaction limit). After the active transaction is completed, the session can immediately be re-used for the next transaction. It is not necessary to create a new session for each transaction. Transaction modes: Cloud Spanner supports three transaction modes: 1. Locking read-write. This type of transaction is the only way to write data into Cloud Spanner. These transactions rely on pessimistic locking and, if necessary, two-phase commit. Locking read-write transactions may abort, requiring the application to retry. 2. Snapshot read-only. Snapshot read-only transactions provide guaranteed consistency across several reads, but do not allow writes. Snapshot read-only transactions can be configured to read at timestamps in the past, or configured to perform a strong read (where Spanner will select a timestamp such that the read is guaranteed to see the effects of all transactions that have committed before the start of the read). Snapshot read-only transactions do not need to be committed. Queries on change streams must be performed with the snapshot read-only transaction mode, specifying a strong read. Please see TransactionOptions.ReadOnly.strong for more details. 3. Partitioned DML. This type of transaction is used to execute a single Partitioned DML statement. Partitioned DML partitions the key space and runs the DML statement over each partition in parallel using separate, internal transactions that commit independently. Partitioned DML transactions do not need to be committed. For transactions that only read, snapshot read-only transactions provide simpler semantics and are almost always faster. In particular, read-only transactions do not take locks, so they do not conflict with read-write transactions. As a consequence of not taking locks, they also do not abort, so retry loops are not needed. Transactions may only read-write data in a single database. They may, however, read-write data in different tables within that database. Locking read-write transactions: Locking transactions may be used to atomically read-modify-write data anywhere in a database. This type of transaction is externally consistent. Clients should attempt to minimize the amount of time a transaction is active. Faster transactions commit with higher probability and cause less contention. Cloud Spanner attempts to keep read locks active as long as the transaction continues to do reads, and the transaction has not been terminated by Commit or Rollback. Long periods of inactivity at the client may cause Cloud Spanner to release a transaction's locks and abort it. Conceptually, a read-write transaction consists of zero or more reads or SQL statements followed by Commit. At any time before Commit, the client can send a Rollback request to abort the transaction. Semantics: Cloud Spanner can commit the transaction if all read locks it acquired are still valid at commit time, and it is able to acquire write locks for all writes. Cloud Spanner can abort the transaction for any reason. If a commit attempt returns `ABORTED`, Cloud Spanner guarantees that the transaction has not modified any user data in Cloud Spanner. Unless the transaction commits, Cloud Spanner makes no guarantees about how long the transaction's locks were held for. It is an error to use Cloud Spanner locks for any sort of mutual exclusion other than between Cloud Spanner transactions themselves. Retrying aborted transactions: When a transaction aborts, the application can choose to retry the whole transaction again. To maximize the chances of successfully committing the retry, the client should execute the retry in the same session as the original attempt. The original session's lock priority increases with each consecutive abort, meaning that each attempt has a slightly better chance of success than the previous. Under some circumstances (for example, many transactions attempting to modify the same row(s)), a transaction can abort many times in a short period before successfully committing. Thus, it is not a good idea to cap the number of retries a transaction can attempt; instead, it is better to limit the total amount of time spent retrying. Idle transactions: A transaction is considered idle if it has no outstanding reads or SQL queries and has not started a read or SQL query within the last 10 seconds. Idle transactions can be aborted by Cloud Spanner so that they don't hold on to locks indefinitely. If an idle transaction is aborted, the commit will fail with error `ABORTED`. If this behavior is undesirable, periodically executing a simple SQL query in the transaction (for example, `SELECT 1`) prevents the transaction from becoming idle. Snapshot read-only transactions: Snapshot read-only transactions provides a simpler method than locking read-write transactions for doing several consistent reads. However, this type of transaction does not support writes. Snapshot transactions do not take locks. Instead, they work by choosing a Cloud Spanner timestamp, then executing all reads at that timestamp. Since they do not acquire locks, they do not block concurrent read-write transactions. Unlike locking read-write transactions, snapshot read-only transactions never abort. They can fail if the chosen read timestamp is garbage collected; however, the default garbage collection policy is generous enough that most applications do not need to worry about this in practice. Snapshot read-only transactions do not need to call Commit or Rollback (and in fact are not permitted to do so). To execute a snapshot transaction, the client specifies a timestamp bound, which tells Cloud Spanner how to choose a read timestamp. The types of timestamp bound are: - Strong (the default). - Bounded staleness. - Exact staleness. If the Cloud Spanner database to be read is geographically distributed, stale read-only transactions can execute more quickly than strong or read-write transactions, because they are able to execute far from the leader replica. Each type of timestamp bound is discussed in detail below. Strong: Strong reads are guaranteed to see the effects of all transactions that have committed before the start of the read. Furthermore, all rows yielded by a single read are consistent with each other -- if any part of the read observes a transaction, all parts of the read see the transaction. Strong reads are not repeatable: two consecutive strong read-only transactions might return inconsistent results if there are concurrent writes. If consistency across reads is required, the reads should be executed within a transaction or at an exact read timestamp. Queries on change streams (see below for more details) must also specify the strong read timestamp bound. See TransactionOptions.ReadOnly.strong. Exact staleness: These timestamp bounds execute reads at a user-specified timestamp. Reads at a timestamp are guaranteed to see a consistent prefix of the global transaction history: they observe modifications done by all transactions with a commit timestamp less than or equal to the read timestamp, and observe none of the modifications done by transactions with a larger commit timestamp. They will block until all conflicting transactions that may be assigned commit timestamps <= the read timestamp have finished. The timestamp can either be expressed as an absolute Cloud Spanner commit timestamp or a staleness relative to the current time. These modes do not require a "negotiation phase" to pick a timestamp. As a result, they execute slightly faster than the equivalent boundedly stale concurrency modes. On the other hand, boundedly stale reads usually return fresher results. See TransactionOptions.ReadOnly.read_timestamp and TransactionOptions.ReadOnly.exact_staleness. Bounded staleness: Bounded staleness modes allow Cloud Spanner to pick the read timestamp, subject to a user-provided staleness bound. Cloud Spanner chooses the newest timestamp within the staleness bound that allows execution of the reads at the closest available replica without blocking. All rows yielded are consistent with each other -- if any part of the read observes a transaction, all parts of the read see the transaction. Boundedly stale reads are not repeatable: two stale reads, even if they use the same staleness bound, can execute at different timestamps and thus return inconsistent results. Boundedly stale reads execute in two phases: the first phase negotiates a timestamp among all replicas needed to serve the read. In the second phase, reads are executed at the negotiated timestamp. As a result of the two phase execution, bounded staleness reads are usually a little slower than comparable exact staleness reads. However, they are typically able to return fresher results, and are more likely to execute at the closest replica. Because the timestamp negotiation requires up-front knowledge of which rows will be read, it can only be used with single-use read-only transactions. See TransactionOptions.ReadOnly.max_staleness and TransactionOptions.ReadOnly.min_read_timestamp. Old read timestamps and garbage collection: Cloud Spanner continuously garbage collects deleted and overwritten data in the background to reclaim storage space. This process is known as "version GC". By default, version GC reclaims versions after they are one hour old. Because of this, Cloud Spanner cannot perform reads at read timestamps more than one hour in the past. This restriction also applies to in-progress reads and/or SQL queries whose timestamp become too old while executing. Reads and SQL queries with too-old read timestamps fail with the error `FAILED_PRECONDITION`. You can configure and extend the `VERSION_RETENTION_PERIOD` of a database up to a period as long as one week, which allows Cloud Spanner to perform reads up to one week in the past. Querying change Streams: A Change Stream is a schema object that can be configured to watch data changes on the entire database, a set of tables, or a set of columns in a database. When a change stream is created, Spanner automatically defines a corresponding SQL Table-Valued Function (TVF) that can be used to query the change records in the associated change stream using the ExecuteStreamingSql API. The name of the TVF for a change stream is generated from the name of the change stream: READ_. All queries on change stream TVFs must be executed using the ExecuteStreamingSql API with a single-use read-only transaction with a strong read-only timestamp_bound. The change stream TVF allows users to specify the start_timestamp and end_timestamp for the time range of interest. All change records within the retention period is accessible using the strong read-only timestamp_bound. All other TransactionOptions are invalid for change stream queries. In addition, if TransactionOptions.read_only.return_read_timestamp is set to true, a special value of 2^63 - 2 will be returned in the Transaction message that describes the transaction, instead of a valid read timestamp. This special value should be discarded and not used for any subsequent queries. Please see https://cloud.google.com/spanner/docs/change-streams for more details on how to query the change stream TVFs. Partitioned DML transactions: Partitioned DML transactions are used to execute DML statements with a different execution strategy that provides different, and often better, scalability properties for large, table-wide operations than DML in a ReadWrite transaction. Smaller scoped statements, such as an OLTP workload, should prefer using ReadWrite transactions. Partitioned DML partitions the keyspace and runs the DML statement on each partition in separate, internal transactions. These transactions commit automatically when complete, and run independently from one another. To reduce lock contention, this execution strategy only acquires read locks on rows that match the WHERE clause of the statement. Additionally, the smaller per-partition transactions hold locks for less time. That said, Partitioned DML is not a drop-in replacement for standard DML used in ReadWrite transactions. - The DML statement must be fully-partitionable. Specifically, the statement must be expressible as the union of many statements which each access only a single row of the table. - The statement is not applied atomically to all rows of the table. Rather, the statement is applied atomically to partitions of the table, in independent transactions. Secondary index rows are updated atomically with the base table rows. - Partitioned DML does not guarantee exactly-once execution semantics against a partition. The statement will be applied at least once to each partition. It is strongly recommended that the DML statement should be idempotent to avoid unexpected results. For instance, it is potentially dangerous to run a statement such as `UPDATE table SET column = column + 1` as it could be run multiple times against some rows. - The partitions are committed automatically - there is no support for Commit or Rollback. If the call returns an error, or if the client issuing the ExecuteSql call dies, it is possible that some rows had the statement executed on them successfully. It is also possible that statement was never executed against other rows. - Partitioned DML transactions may only contain the execution of a single DML statement via ExecuteSql or ExecuteStreamingSql. - If any error is encountered during the execution of the partitioned DML operation (for instance, a UNIQUE INDEX violation, division by zero, or a value that cannot be stored due to schema constraints), then the operation is stopped at that point and an error is returned. It is possible that at this point, some partitions have been committed (or even committed multiple times), and other partitions have not been run at all. Given the above, Partitioned DML is good fit for large, database-wide, operations that are idempotent, such as deleting old rows from a very large table. */
		begin?: TransactionOptions;

		/** Execute the read or SQL query in a previously-started transaction. */
		id?: string | null;

		/** Transactions: Each session can have at most one active transaction at a time (note that standalone reads and queries use a transaction internally and do count towards the one transaction limit). After the active transaction is completed, the session can immediately be re-used for the next transaction. It is not necessary to create a new session for each transaction. Transaction modes: Cloud Spanner supports three transaction modes: 1. Locking read-write. This type of transaction is the only way to write data into Cloud Spanner. These transactions rely on pessimistic locking and, if necessary, two-phase commit. Locking read-write transactions may abort, requiring the application to retry. 2. Snapshot read-only. Snapshot read-only transactions provide guaranteed consistency across several reads, but do not allow writes. Snapshot read-only transactions can be configured to read at timestamps in the past, or configured to perform a strong read (where Spanner will select a timestamp such that the read is guaranteed to see the effects of all transactions that have committed before the start of the read). Snapshot read-only transactions do not need to be committed. Queries on change streams must be performed with the snapshot read-only transaction mode, specifying a strong read. Please see TransactionOptions.ReadOnly.strong for more details. 3. Partitioned DML. This type of transaction is used to execute a single Partitioned DML statement. Partitioned DML partitions the key space and runs the DML statement over each partition in parallel using separate, internal transactions that commit independently. Partitioned DML transactions do not need to be committed. For transactions that only read, snapshot read-only transactions provide simpler semantics and are almost always faster. In particular, read-only transactions do not take locks, so they do not conflict with read-write transactions. As a consequence of not taking locks, they also do not abort, so retry loops are not needed. Transactions may only read-write data in a single database. They may, however, read-write data in different tables within that database. Locking read-write transactions: Locking transactions may be used to atomically read-modify-write data anywhere in a database. This type of transaction is externally consistent. Clients should attempt to minimize the amount of time a transaction is active. Faster transactions commit with higher probability and cause less contention. Cloud Spanner attempts to keep read locks active as long as the transaction continues to do reads, and the transaction has not been terminated by Commit or Rollback. Long periods of inactivity at the client may cause Cloud Spanner to release a transaction's locks and abort it. Conceptually, a read-write transaction consists of zero or more reads or SQL statements followed by Commit. At any time before Commit, the client can send a Rollback request to abort the transaction. Semantics: Cloud Spanner can commit the transaction if all read locks it acquired are still valid at commit time, and it is able to acquire write locks for all writes. Cloud Spanner can abort the transaction for any reason. If a commit attempt returns `ABORTED`, Cloud Spanner guarantees that the transaction has not modified any user data in Cloud Spanner. Unless the transaction commits, Cloud Spanner makes no guarantees about how long the transaction's locks were held for. It is an error to use Cloud Spanner locks for any sort of mutual exclusion other than between Cloud Spanner transactions themselves. Retrying aborted transactions: When a transaction aborts, the application can choose to retry the whole transaction again. To maximize the chances of successfully committing the retry, the client should execute the retry in the same session as the original attempt. The original session's lock priority increases with each consecutive abort, meaning that each attempt has a slightly better chance of success than the previous. Under some circumstances (for example, many transactions attempting to modify the same row(s)), a transaction can abort many times in a short period before successfully committing. Thus, it is not a good idea to cap the number of retries a transaction can attempt; instead, it is better to limit the total amount of time spent retrying. Idle transactions: A transaction is considered idle if it has no outstanding reads or SQL queries and has not started a read or SQL query within the last 10 seconds. Idle transactions can be aborted by Cloud Spanner so that they don't hold on to locks indefinitely. If an idle transaction is aborted, the commit will fail with error `ABORTED`. If this behavior is undesirable, periodically executing a simple SQL query in the transaction (for example, `SELECT 1`) prevents the transaction from becoming idle. Snapshot read-only transactions: Snapshot read-only transactions provides a simpler method than locking read-write transactions for doing several consistent reads. However, this type of transaction does not support writes. Snapshot transactions do not take locks. Instead, they work by choosing a Cloud Spanner timestamp, then executing all reads at that timestamp. Since they do not acquire locks, they do not block concurrent read-write transactions. Unlike locking read-write transactions, snapshot read-only transactions never abort. They can fail if the chosen read timestamp is garbage collected; however, the default garbage collection policy is generous enough that most applications do not need to worry about this in practice. Snapshot read-only transactions do not need to call Commit or Rollback (and in fact are not permitted to do so). To execute a snapshot transaction, the client specifies a timestamp bound, which tells Cloud Spanner how to choose a read timestamp. The types of timestamp bound are: - Strong (the default). - Bounded staleness. - Exact staleness. If the Cloud Spanner database to be read is geographically distributed, stale read-only transactions can execute more quickly than strong or read-write transactions, because they are able to execute far from the leader replica. Each type of timestamp bound is discussed in detail below. Strong: Strong reads are guaranteed to see the effects of all transactions that have committed before the start of the read. Furthermore, all rows yielded by a single read are consistent with each other -- if any part of the read observes a transaction, all parts of the read see the transaction. Strong reads are not repeatable: two consecutive strong read-only transactions might return inconsistent results if there are concurrent writes. If consistency across reads is required, the reads should be executed within a transaction or at an exact read timestamp. Queries on change streams (see below for more details) must also specify the strong read timestamp bound. See TransactionOptions.ReadOnly.strong. Exact staleness: These timestamp bounds execute reads at a user-specified timestamp. Reads at a timestamp are guaranteed to see a consistent prefix of the global transaction history: they observe modifications done by all transactions with a commit timestamp less than or equal to the read timestamp, and observe none of the modifications done by transactions with a larger commit timestamp. They will block until all conflicting transactions that may be assigned commit timestamps <= the read timestamp have finished. The timestamp can either be expressed as an absolute Cloud Spanner commit timestamp or a staleness relative to the current time. These modes do not require a "negotiation phase" to pick a timestamp. As a result, they execute slightly faster than the equivalent boundedly stale concurrency modes. On the other hand, boundedly stale reads usually return fresher results. See TransactionOptions.ReadOnly.read_timestamp and TransactionOptions.ReadOnly.exact_staleness. Bounded staleness: Bounded staleness modes allow Cloud Spanner to pick the read timestamp, subject to a user-provided staleness bound. Cloud Spanner chooses the newest timestamp within the staleness bound that allows execution of the reads at the closest available replica without blocking. All rows yielded are consistent with each other -- if any part of the read observes a transaction, all parts of the read see the transaction. Boundedly stale reads are not repeatable: two stale reads, even if they use the same staleness bound, can execute at different timestamps and thus return inconsistent results. Boundedly stale reads execute in two phases: the first phase negotiates a timestamp among all replicas needed to serve the read. In the second phase, reads are executed at the negotiated timestamp. As a result of the two phase execution, bounded staleness reads are usually a little slower than comparable exact staleness reads. However, they are typically able to return fresher results, and are more likely to execute at the closest replica. Because the timestamp negotiation requires up-front knowledge of which rows will be read, it can only be used with single-use read-only transactions. See TransactionOptions.ReadOnly.max_staleness and TransactionOptions.ReadOnly.min_read_timestamp. Old read timestamps and garbage collection: Cloud Spanner continuously garbage collects deleted and overwritten data in the background to reclaim storage space. This process is known as "version GC". By default, version GC reclaims versions after they are one hour old. Because of this, Cloud Spanner cannot perform reads at read timestamps more than one hour in the past. This restriction also applies to in-progress reads and/or SQL queries whose timestamp become too old while executing. Reads and SQL queries with too-old read timestamps fail with the error `FAILED_PRECONDITION`. You can configure and extend the `VERSION_RETENTION_PERIOD` of a database up to a period as long as one week, which allows Cloud Spanner to perform reads up to one week in the past. Querying change Streams: A Change Stream is a schema object that can be configured to watch data changes on the entire database, a set of tables, or a set of columns in a database. When a change stream is created, Spanner automatically defines a corresponding SQL Table-Valued Function (TVF) that can be used to query the change records in the associated change stream using the ExecuteStreamingSql API. The name of the TVF for a change stream is generated from the name of the change stream: READ_. All queries on change stream TVFs must be executed using the ExecuteStreamingSql API with a single-use read-only transaction with a strong read-only timestamp_bound. The change stream TVF allows users to specify the start_timestamp and end_timestamp for the time range of interest. All change records within the retention period is accessible using the strong read-only timestamp_bound. All other TransactionOptions are invalid for change stream queries. In addition, if TransactionOptions.read_only.return_read_timestamp is set to true, a special value of 2^63 - 2 will be returned in the Transaction message that describes the transaction, instead of a valid read timestamp. This special value should be discarded and not used for any subsequent queries. Please see https://cloud.google.com/spanner/docs/change-streams for more details on how to query the change stream TVFs. Partitioned DML transactions: Partitioned DML transactions are used to execute DML statements with a different execution strategy that provides different, and often better, scalability properties for large, table-wide operations than DML in a ReadWrite transaction. Smaller scoped statements, such as an OLTP workload, should prefer using ReadWrite transactions. Partitioned DML partitions the keyspace and runs the DML statement on each partition in separate, internal transactions. These transactions commit automatically when complete, and run independently from one another. To reduce lock contention, this execution strategy only acquires read locks on rows that match the WHERE clause of the statement. Additionally, the smaller per-partition transactions hold locks for less time. That said, Partitioned DML is not a drop-in replacement for standard DML used in ReadWrite transactions. - The DML statement must be fully-partitionable. Specifically, the statement must be expressible as the union of many statements which each access only a single row of the table. - The statement is not applied atomically to all rows of the table. Rather, the statement is applied atomically to partitions of the table, in independent transactions. Secondary index rows are updated atomically with the base table rows. - Partitioned DML does not guarantee exactly-once execution semantics against a partition. The statement will be applied at least once to each partition. It is strongly recommended that the DML statement should be idempotent to avoid unexpected results. For instance, it is potentially dangerous to run a statement such as `UPDATE table SET column = column + 1` as it could be run multiple times against some rows. - The partitions are committed automatically - there is no support for Commit or Rollback. If the call returns an error, or if the client issuing the ExecuteSql call dies, it is possible that some rows had the statement executed on them successfully. It is also possible that statement was never executed against other rows. - Partitioned DML transactions may only contain the execution of a single DML statement via ExecuteSql or ExecuteStreamingSql. - If any error is encountered during the execution of the partitioned DML operation (for instance, a UNIQUE INDEX violation, division by zero, or a value that cannot be stored due to schema constraints), then the operation is stopped at that point and an error is returned. It is possible that at this point, some partitions have been committed (or even committed multiple times), and other partitions have not been run at all. Given the above, Partitioned DML is good fit for large, database-wide, operations that are idempotent, such as deleting old rows from a very large table. */
		singleUse?: TransactionOptions;
	}

	/** This message is used to select the transaction in which a Read or ExecuteSql call runs. See TransactionOptions for more information about transactions. */
	export interface TransactionSelectorFormProperties {

		/** Execute the read or SQL query in a previously-started transaction. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateTransactionSelectorFormGroup() {
		return new FormGroup<TransactionSelectorFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for ExecuteBatchDml. Contains a list of ResultSet messages, one for each DML statement that has successfully executed, in the same order as the statements in the request. If a statement fails, the status in the response body identifies the cause of the failure. To check for DML statements that failed, use the following approach: 1. Check the status in the response message. The google.rpc.Code enum value `OK` indicates that all statements were executed successfully. 2. If the status was not `OK`, check the number of result sets in the response. If the response contains `N` ResultSet messages, then statement `N+1` in the request failed. Example 1: * Request: 5 DML statements, all executed successfully. * Response: 5 ResultSet messages, with the status `OK`. Example 2: * Request: 5 DML statements. The third statement has a syntax error. * Response: 2 ResultSet messages, and a syntax error (`INVALID_ARGUMENT`) status. The number of ResultSet messages indicates that the third statement failed, and the fourth and fifth statements were not executed. */
	export interface ExecuteBatchDmlResponse {

		/** One ResultSet for each statement in the request that ran successfully, in the same order as the statements in the request. Each ResultSet does not contain any rows. The ResultSetStats in each ResultSet contain the number of rows modified by the statement. Only the first ResultSet in the response contains valid ResultSetMetadata. */
		resultSets?: Array<ResultSet>;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: Status;
	}

	/** The response for ExecuteBatchDml. Contains a list of ResultSet messages, one for each DML statement that has successfully executed, in the same order as the statements in the request. If a statement fails, the status in the response body identifies the cause of the failure. To check for DML statements that failed, use the following approach: 1. Check the status in the response message. The google.rpc.Code enum value `OK` indicates that all statements were executed successfully. 2. If the status was not `OK`, check the number of result sets in the response. If the response contains `N` ResultSet messages, then statement `N+1` in the request failed. Example 1: * Request: 5 DML statements, all executed successfully. * Response: 5 ResultSet messages, with the status `OK`. Example 2: * Request: 5 DML statements. The third statement has a syntax error. * Response: 2 ResultSet messages, and a syntax error (`INVALID_ARGUMENT`) status. The number of ResultSet messages indicates that the third statement failed, and the fourth and fifth statements were not executed. */
	export interface ExecuteBatchDmlResponseFormProperties {
	}
	export function CreateExecuteBatchDmlResponseFormGroup() {
		return new FormGroup<ExecuteBatchDmlResponseFormProperties>({
		});

	}


	/** Results from Read or ExecuteSql. */
	export interface ResultSet {

		/** Metadata about a ResultSet or PartialResultSet. */
		metadata?: ResultSetMetadata;

		/** Each element in `rows` is a row whose format is defined by metadata.row_type. The ith element in each row matches the ith field in metadata.row_type. Elements are encoded based on type as described here. */
		rows?: Array<string>;

		/** Additional statistics about a ResultSet or PartialResultSet. */
		stats?: ResultSetStats;
	}

	/** Results from Read or ExecuteSql. */
	export interface ResultSetFormProperties {
	}
	export function CreateResultSetFormGroup() {
		return new FormGroup<ResultSetFormProperties>({
		});

	}


	/** Metadata about a ResultSet or PartialResultSet. */
	export interface ResultSetMetadata {

		/** `StructType` defines the fields of a STRUCT type. */
		rowType?: StructType;

		/** A transaction. */
		transaction?: Transaction;

		/** `StructType` defines the fields of a STRUCT type. */
		undeclaredParameters?: StructType;
	}

	/** Metadata about a ResultSet or PartialResultSet. */
	export interface ResultSetMetadataFormProperties {
	}
	export function CreateResultSetMetadataFormGroup() {
		return new FormGroup<ResultSetMetadataFormProperties>({
		});

	}


	/** A transaction. */
	export interface Transaction {

		/** `id` may be used to identify the transaction in subsequent Read, ExecuteSql, Commit, or Rollback calls. Single-use read-only transactions do not have IDs, because single-use transactions do not support multiple requests. */
		id?: string | null;

		/** For snapshot read-only transactions, the read timestamp chosen for the transaction. Not returned by default: see TransactionOptions.ReadOnly.return_read_timestamp. A timestamp in RFC3339 UTC \"Zulu\" format, accurate to nanoseconds. Example: `"2014-10-02T15:01:23.045123456Z"`. */
		readTimestamp?: string | null;
	}

	/** A transaction. */
	export interface TransactionFormProperties {

		/** `id` may be used to identify the transaction in subsequent Read, ExecuteSql, Commit, or Rollback calls. Single-use read-only transactions do not have IDs, because single-use transactions do not support multiple requests. */
		id: FormControl<string | null | undefined>,

		/** For snapshot read-only transactions, the read timestamp chosen for the transaction. Not returned by default: see TransactionOptions.ReadOnly.return_read_timestamp. A timestamp in RFC3339 UTC \"Zulu\" format, accurate to nanoseconds. Example: `"2014-10-02T15:01:23.045123456Z"`. */
		readTimestamp: FormControl<string | null | undefined>,
	}
	export function CreateTransactionFormGroup() {
		return new FormGroup<TransactionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			readTimestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional statistics about a ResultSet or PartialResultSet. */
	export interface ResultSetStats {

		/** Contains an ordered list of nodes appearing in the query plan. */
		queryPlan?: QueryPlan;

		/** Aggregated statistics from the execution of the query. Only present when the query is profiled. For example, a query could return the statistics as follows: { "rows_returned": "3", "elapsed_time": "1.22 secs", "cpu_time": "1.19 secs" } */
		queryStats?: {[id: string]: any };

		/** Standard DML returns an exact count of rows that were modified. */
		rowCountExact?: string | null;

		/** Partitioned DML does not offer exactly-once semantics, so it returns a lower bound of the rows modified. */
		rowCountLowerBound?: string | null;
	}

	/** Additional statistics about a ResultSet or PartialResultSet. */
	export interface ResultSetStatsFormProperties {

		/** Aggregated statistics from the execution of the query. Only present when the query is profiled. For example, a query could return the statistics as follows: { "rows_returned": "3", "elapsed_time": "1.22 secs", "cpu_time": "1.19 secs" } */
		queryStats: FormControl<{[id: string]: any } | null | undefined>,

		/** Standard DML returns an exact count of rows that were modified. */
		rowCountExact: FormControl<string | null | undefined>,

		/** Partitioned DML does not offer exactly-once semantics, so it returns a lower bound of the rows modified. */
		rowCountLowerBound: FormControl<string | null | undefined>,
	}
	export function CreateResultSetStatsFormGroup() {
		return new FormGroup<ResultSetStatsFormProperties>({
			queryStats: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			rowCountExact: new FormControl<string | null | undefined>(undefined),
			rowCountLowerBound: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains an ordered list of nodes appearing in the query plan. */
	export interface QueryPlan {

		/** The nodes in the query plan. Plan nodes are returned in pre-order starting with the plan root. Each PlanNode's `id` corresponds to its index in `plan_nodes`. */
		planNodes?: Array<PlanNode>;

		/** Output of query advisor analysis. */
		queryAdvice?: QueryAdvisorResult;
	}

	/** Contains an ordered list of nodes appearing in the query plan. */
	export interface QueryPlanFormProperties {
	}
	export function CreateQueryPlanFormGroup() {
		return new FormGroup<QueryPlanFormProperties>({
		});

	}


	/** Node information for nodes appearing in a QueryPlan.plan_nodes. */
	export interface PlanNode {

		/** List of child node `index`es and their relationship to this parent. */
		childLinks?: Array<ChildLink>;

		/** The display name for the node. */
		displayName?: string | null;

		/** The execution statistics associated with the node, contained in a group of key-value pairs. Only present if the plan was returned as a result of a profile query. For example, number of executions, number of rows/time per execution etc. */
		executionStats?: {[id: string]: any };

		/** The `PlanNode`'s index in node list. */
		index?: number | null;

		/** Used to determine the type of node. May be needed for visualizing different kinds of nodes differently. For example, If the node is a SCALAR node, it will have a condensed representation which can be used to directly embed a description of the node in its parent. */
		kind?: PlanNodeKind | null;

		/** Attributes relevant to the node contained in a group of key-value pairs. For example, a Parameter Reference node could have the following information in its metadata: { "parameter_reference": "param1", "parameter_type": "array" } */
		metadata?: {[id: string]: any };

		/** Condensed representation of a node and its subtree. Only present for `SCALAR` PlanNode(s). */
		shortRepresentation?: ShortRepresentation;
	}

	/** Node information for nodes appearing in a QueryPlan.plan_nodes. */
	export interface PlanNodeFormProperties {

		/** The display name for the node. */
		displayName: FormControl<string | null | undefined>,

		/** The execution statistics associated with the node, contained in a group of key-value pairs. Only present if the plan was returned as a result of a profile query. For example, number of executions, number of rows/time per execution etc. */
		executionStats: FormControl<{[id: string]: any } | null | undefined>,

		/** The `PlanNode`'s index in node list. */
		index: FormControl<number | null | undefined>,

		/** Used to determine the type of node. May be needed for visualizing different kinds of nodes differently. For example, If the node is a SCALAR node, it will have a condensed representation which can be used to directly embed a description of the node in its parent. */
		kind: FormControl<PlanNodeKind | null | undefined>,

		/** Attributes relevant to the node contained in a group of key-value pairs. For example, a Parameter Reference node could have the following information in its metadata: { "parameter_reference": "param1", "parameter_type": "array" } */
		metadata: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreatePlanNodeFormGroup() {
		return new FormGroup<PlanNodeFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			executionStats: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<PlanNodeKind | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	export enum PlanNodeKind { KIND_UNSPECIFIED = 'KIND_UNSPECIFIED', RELATIONAL = 'RELATIONAL', SCALAR = 'SCALAR' }


	/** Condensed representation of a node and its subtree. Only present for `SCALAR` PlanNode(s). */
	export interface ShortRepresentation {

		/** A string representation of the expression subtree rooted at this node. */
		description?: string | null;

		/** A mapping of (subquery variable name) -> (subquery node id) for cases where the `description` string of this node references a `SCALAR` subquery contained in the expression subtree rooted at this node. The referenced `SCALAR` subquery may not necessarily be a direct child of this node. */
		subqueries?: {[id: string]: number };
	}

	/** Condensed representation of a node and its subtree. Only present for `SCALAR` PlanNode(s). */
	export interface ShortRepresentationFormProperties {

		/** A string representation of the expression subtree rooted at this node. */
		description: FormControl<string | null | undefined>,

		/** A mapping of (subquery variable name) -> (subquery node id) for cases where the `description` string of this node references a `SCALAR` subquery contained in the expression subtree rooted at this node. The referenced `SCALAR` subquery may not necessarily be a direct child of this node. */
		subqueries: FormControl<{[id: string]: number } | null | undefined>,
	}
	export function CreateShortRepresentationFormGroup() {
		return new FormGroup<ShortRepresentationFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			subqueries: new FormControl<{[id: string]: number } | null | undefined>(undefined),
		});

	}


	/** Output of query advisor analysis. */
	export interface QueryAdvisorResult {

		/** Optional. Index Recommendation for a query. This is an optional field and the recommendation will only be available when the recommendation guarantees significant improvement in query performance. */
		indexAdvice?: Array<IndexAdvice>;
	}

	/** Output of query advisor analysis. */
	export interface QueryAdvisorResultFormProperties {
	}
	export function CreateQueryAdvisorResultFormGroup() {
		return new FormGroup<QueryAdvisorResultFormProperties>({
		});

	}


	/** Recommendation to add new indexes to run queries more efficiently. */
	export interface IndexAdvice {

		/** Optional. DDL statements to add new indexes that will improve the query. */
		ddl?: Array<string>;

		/** Optional. Estimated latency improvement factor. For example if the query currently takes 500 ms to run and the estimated latency with new indexes is 100 ms this field will be 5. */
		improvementFactor?: number | null;
	}

	/** Recommendation to add new indexes to run queries more efficiently. */
	export interface IndexAdviceFormProperties {

		/** Optional. Estimated latency improvement factor. For example if the query currently takes 500 ms to run and the estimated latency with new indexes is 100 ms this field will be 5. */
		improvementFactor: FormControl<number | null | undefined>,
	}
	export function CreateIndexAdviceFormGroup() {
		return new FormGroup<IndexAdviceFormProperties>({
			improvementFactor: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The request for ExecuteSql and ExecuteStreamingSql. */
	export interface ExecuteSqlRequest {

		/** If this is for a partitioned query and this field is set to `true`, the request is executed with Spanner Data Boost independent compute resources. If the field is set to `true` but the request does not set `partition_token`, the API returns an `INVALID_ARGUMENT` error. */
		dataBoostEnabled?: boolean | null;

		/** The DirectedReadOptions can be used to indicate which replicas or regions should be used for non-transactional reads or queries. DirectedReadOptions may only be specified for a read-only transaction, otherwise the API will return an `INVALID_ARGUMENT` error. */
		directedReadOptions?: DirectedReadOptions;

		/** It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings. In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types. */
		paramTypes?: {[id: string]: Type };

		/** Parameter names and values that bind to placeholders in the SQL string. A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names must conform to the naming requirements of identifiers as specified at https://cloud.google.com/spanner/docs/lexical#identifiers. Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example: `"WHERE id > @msg_id AND id < @msg_id + 100"` It is an error to execute a SQL statement with unbound parameters. */
		params?: {[id: string]: any };

		/** If present, results will be restricted to the specified partition previously created using PartitionQuery(). There must be an exact match for the values of fields common to this message and the PartitionQueryRequest message used to create this partition_token. */
		partitionToken?: string | null;

		/** Used to control the amount of debugging information returned in ResultSetStats. If partition_token is set, query_mode can only be set to QueryMode.NORMAL. */
		queryMode?: ExecuteSqlRequestQueryMode | null;

		/** Query optimizer configuration. */
		queryOptions?: QueryOptions;

		/** Common request options for various APIs. */
		requestOptions?: RequestOptions;

		/** If this request is resuming a previously interrupted SQL statement execution, `resume_token` should be copied from the last PartialResultSet yielded before the interruption. Doing this enables the new SQL statement execution to resume where the last one left off. The rest of the request parameters must exactly match the request that yielded this token. */
		resumeToken?: string | null;

		/** A per-transaction sequence number used to identify this request. This field makes each request idempotent such that if the request is received multiple times, at most one will succeed. The sequence number must be monotonically increasing within the transaction. If a request arrives for the first time with an out-of-order sequence number, the transaction may be aborted. Replays of previously handled requests will yield the same response as the first execution. Required for DML statements. Ignored for queries. */
		seqno?: string | null;

		/** Required. The SQL string. */
		sql?: string | null;

		/** This message is used to select the transaction in which a Read or ExecuteSql call runs. See TransactionOptions for more information about transactions. */
		transaction?: TransactionSelector;
	}

	/** The request for ExecuteSql and ExecuteStreamingSql. */
	export interface ExecuteSqlRequestFormProperties {

		/** If this is for a partitioned query and this field is set to `true`, the request is executed with Spanner Data Boost independent compute resources. If the field is set to `true` but the request does not set `partition_token`, the API returns an `INVALID_ARGUMENT` error. */
		dataBoostEnabled: FormControl<boolean | null | undefined>,

		/** It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings. In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types. */
		paramTypes: FormControl<{[id: string]: Type } | null | undefined>,

		/** Parameter names and values that bind to placeholders in the SQL string. A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names must conform to the naming requirements of identifiers as specified at https://cloud.google.com/spanner/docs/lexical#identifiers. Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example: `"WHERE id > @msg_id AND id < @msg_id + 100"` It is an error to execute a SQL statement with unbound parameters. */
		params: FormControl<{[id: string]: any } | null | undefined>,

		/** If present, results will be restricted to the specified partition previously created using PartitionQuery(). There must be an exact match for the values of fields common to this message and the PartitionQueryRequest message used to create this partition_token. */
		partitionToken: FormControl<string | null | undefined>,

		/** Used to control the amount of debugging information returned in ResultSetStats. If partition_token is set, query_mode can only be set to QueryMode.NORMAL. */
		queryMode: FormControl<ExecuteSqlRequestQueryMode | null | undefined>,

		/** If this request is resuming a previously interrupted SQL statement execution, `resume_token` should be copied from the last PartialResultSet yielded before the interruption. Doing this enables the new SQL statement execution to resume where the last one left off. The rest of the request parameters must exactly match the request that yielded this token. */
		resumeToken: FormControl<string | null | undefined>,

		/** A per-transaction sequence number used to identify this request. This field makes each request idempotent such that if the request is received multiple times, at most one will succeed. The sequence number must be monotonically increasing within the transaction. If a request arrives for the first time with an out-of-order sequence number, the transaction may be aborted. Replays of previously handled requests will yield the same response as the first execution. Required for DML statements. Ignored for queries. */
		seqno: FormControl<string | null | undefined>,

		/** Required. The SQL string. */
		sql: FormControl<string | null | undefined>,
	}
	export function CreateExecuteSqlRequestFormGroup() {
		return new FormGroup<ExecuteSqlRequestFormProperties>({
			dataBoostEnabled: new FormControl<boolean | null | undefined>(undefined),
			paramTypes: new FormControl<{[id: string]: Type } | null | undefined>(undefined),
			params: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			partitionToken: new FormControl<string | null | undefined>(undefined),
			queryMode: new FormControl<ExecuteSqlRequestQueryMode | null | undefined>(undefined),
			resumeToken: new FormControl<string | null | undefined>(undefined),
			seqno: new FormControl<string | null | undefined>(undefined),
			sql: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExecuteSqlRequestQueryMode { NORMAL = 'NORMAL', PLAN = 'PLAN', PROFILE = 'PROFILE' }


	/** Query optimizer configuration. */
	export interface QueryOptions {

		/** An option to control the selection of optimizer statistics package. This parameter allows individual queries to use a different query optimizer statistics package. Specifying `latest` as a value instructs Cloud Spanner to use the latest generated statistics package. If not specified, Cloud Spanner uses the statistics package set at the database level options, or the latest package if the database option is not set. The statistics package requested by the query has to be exempt from garbage collection. This can be achieved with the following DDL statement: ``` ALTER STATISTICS SET OPTIONS (allow_gc=false) ``` The list of available statistics packages can be queried from `INFORMATION_SCHEMA.SPANNER_STATISTICS`. Executing a SQL statement with an invalid optimizer statistics package or with a statistics package that allows garbage collection fails with an `INVALID_ARGUMENT` error. */
		optimizerStatisticsPackage?: string | null;

		/** An option to control the selection of optimizer version. This parameter allows individual queries to pick different query optimizer versions. Specifying `latest` as a value instructs Cloud Spanner to use the latest supported query optimizer version. If not specified, Cloud Spanner uses the optimizer version set at the database level options. Any other positive integer (from the list of supported optimizer versions) overrides the default optimizer version for query execution. The list of supported optimizer versions can be queried from SPANNER_SYS.SUPPORTED_OPTIMIZER_VERSIONS. Executing a SQL statement with an invalid optimizer version fails with an `INVALID_ARGUMENT` error. See https://cloud.google.com/spanner/docs/query-optimizer/manage-query-optimizer for more information on managing the query optimizer. The `optimizer_version` statement hint has precedence over this setting. */
		optimizerVersion?: string | null;
	}

	/** Query optimizer configuration. */
	export interface QueryOptionsFormProperties {

		/** An option to control the selection of optimizer statistics package. This parameter allows individual queries to use a different query optimizer statistics package. Specifying `latest` as a value instructs Cloud Spanner to use the latest generated statistics package. If not specified, Cloud Spanner uses the statistics package set at the database level options, or the latest package if the database option is not set. The statistics package requested by the query has to be exempt from garbage collection. This can be achieved with the following DDL statement: ``` ALTER STATISTICS SET OPTIONS (allow_gc=false) ``` The list of available statistics packages can be queried from `INFORMATION_SCHEMA.SPANNER_STATISTICS`. Executing a SQL statement with an invalid optimizer statistics package or with a statistics package that allows garbage collection fails with an `INVALID_ARGUMENT` error. */
		optimizerStatisticsPackage: FormControl<string | null | undefined>,

		/** An option to control the selection of optimizer version. This parameter allows individual queries to pick different query optimizer versions. Specifying `latest` as a value instructs Cloud Spanner to use the latest supported query optimizer version. If not specified, Cloud Spanner uses the optimizer version set at the database level options. Any other positive integer (from the list of supported optimizer versions) overrides the default optimizer version for query execution. The list of supported optimizer versions can be queried from SPANNER_SYS.SUPPORTED_OPTIMIZER_VERSIONS. Executing a SQL statement with an invalid optimizer version fails with an `INVALID_ARGUMENT` error. See https://cloud.google.com/spanner/docs/query-optimizer/manage-query-optimizer for more information on managing the query optimizer. The `optimizer_version` statement hint has precedence over this setting. */
		optimizerVersion: FormControl<string | null | undefined>,
	}
	export function CreateQueryOptionsFormGroup() {
		return new FormGroup<QueryOptionsFormProperties>({
			optimizerStatisticsPackage: new FormControl<string | null | undefined>(undefined),
			optimizerVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for GetDatabaseDdl. */
	export interface GetDatabaseDdlResponse {

		/** Proto descriptors stored in the database. Contains a protobuf-serialized [google.protobuf.FileDescriptorSet](https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/descriptor.proto). For more details, see protobuffer [self description](https://developers.google.com/protocol-buffers/docs/techniques#self-description). */
		protoDescriptors?: string | null;

		/** A list of formatted DDL statements defining the schema of the database specified in the request. */
		statements?: Array<string>;
	}

	/** The response for GetDatabaseDdl. */
	export interface GetDatabaseDdlResponseFormProperties {

		/** Proto descriptors stored in the database. Contains a protobuf-serialized [google.protobuf.FileDescriptorSet](https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/descriptor.proto). For more details, see protobuffer [self description](https://developers.google.com/protocol-buffers/docs/techniques#self-description). */
		protoDescriptors: FormControl<string | null | undefined>,
	}
	export function CreateGetDatabaseDdlResponseFormGroup() {
		return new FormGroup<GetDatabaseDdlResponseFormProperties>({
			protoDescriptors: new FormControl<string | null | undefined>(undefined),
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

		/** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		requestedPolicyVersion?: number | null;
	}

	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GetPolicyOptionsFormProperties {

		/** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		requestedPolicyVersion: FormControl<number | null | undefined>,
	}
	export function CreateGetPolicyOptionsFormGroup() {
		return new FormGroup<GetPolicyOptionsFormProperties>({
			requestedPolicyVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A message representing a (sparse) collection of hot keys for specific key buckets. */
	export interface IndexedHotKey {

		/** A (sparse) mapping from key bucket index to the index of the specific hot row key for that key bucket. The index of the hot row key can be translated to the actual row key via the ScanData.VisualizationData.indexed_keys repeated field. */
		sparseHotKeys?: {[id: string]: number };
	}

	/** A message representing a (sparse) collection of hot keys for specific key buckets. */
	export interface IndexedHotKeyFormProperties {

		/** A (sparse) mapping from key bucket index to the index of the specific hot row key for that key bucket. The index of the hot row key can be translated to the actual row key via the ScanData.VisualizationData.indexed_keys repeated field. */
		sparseHotKeys: FormControl<{[id: string]: number } | null | undefined>,
	}
	export function CreateIndexedHotKeyFormGroup() {
		return new FormGroup<IndexedHotKeyFormProperties>({
			sparseHotKeys: new FormControl<{[id: string]: number } | null | undefined>(undefined),
		});

	}


	/** A message representing a (sparse) collection of KeyRangeInfos for specific key buckets. */
	export interface IndexedKeyRangeInfos {

		/** A (sparse) mapping from key bucket index to the KeyRangeInfos for that key bucket. */
		keyRangeInfos?: {[id: string]: KeyRangeInfos };
	}

	/** A message representing a (sparse) collection of KeyRangeInfos for specific key buckets. */
	export interface IndexedKeyRangeInfosFormProperties {

		/** A (sparse) mapping from key bucket index to the KeyRangeInfos for that key bucket. */
		keyRangeInfos: FormControl<{[id: string]: KeyRangeInfos } | null | undefined>,
	}
	export function CreateIndexedKeyRangeInfosFormGroup() {
		return new FormGroup<IndexedKeyRangeInfosFormProperties>({
			keyRangeInfos: new FormControl<{[id: string]: KeyRangeInfos } | null | undefined>(undefined),
		});

	}


	/** A message representing a list of specific information for multiple key ranges. */
	export interface KeyRangeInfos {

		/** The list individual KeyRangeInfos. */
		infos?: Array<KeyRangeInfo>;

		/** The total size of the list of all KeyRangeInfos. This may be larger than the number of repeated messages above. If that is the case, this number may be used to determine how many are not being shown. */
		totalSize?: number | null;
	}

	/** A message representing a list of specific information for multiple key ranges. */
	export interface KeyRangeInfosFormProperties {

		/** The total size of the list of all KeyRangeInfos. This may be larger than the number of repeated messages above. If that is the case, this number may be used to determine how many are not being shown. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateKeyRangeInfosFormGroup() {
		return new FormGroup<KeyRangeInfosFormProperties>({
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A message representing information for a key range (possibly one key). */
	export interface KeyRangeInfo {

		/** The list of context values for this key range. */
		contextValues?: Array<ContextValue>;

		/** The index of the end key in indexed_keys. */
		endKeyIndex?: number | null;

		/** A message representing a user-facing string whose value may need to be translated before being displayed. */
		info?: LocalizedString;

		/** The number of keys this range covers. */
		keysCount?: string | null;

		/** A message representing a user-facing string whose value may need to be translated before being displayed. */
		metric?: LocalizedString;

		/** The index of the start key in indexed_keys. */
		startKeyIndex?: number | null;

		/** The time offset. This is the time since the start of the time interval. */
		timeOffset?: string | null;

		/** A message representing a user-facing string whose value may need to be translated before being displayed. */
		unit?: LocalizedString;

		/** The value of the metric. */
		value?: number | null;
	}

	/** A message representing information for a key range (possibly one key). */
	export interface KeyRangeInfoFormProperties {

		/** The index of the end key in indexed_keys. */
		endKeyIndex: FormControl<number | null | undefined>,

		/** The number of keys this range covers. */
		keysCount: FormControl<string | null | undefined>,

		/** The index of the start key in indexed_keys. */
		startKeyIndex: FormControl<number | null | undefined>,

		/** The time offset. This is the time since the start of the time interval. */
		timeOffset: FormControl<string | null | undefined>,

		/** The value of the metric. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateKeyRangeInfoFormGroup() {
		return new FormGroup<KeyRangeInfoFormProperties>({
			endKeyIndex: new FormControl<number | null | undefined>(undefined),
			keysCount: new FormControl<string | null | undefined>(undefined),
			startKeyIndex: new FormControl<number | null | undefined>(undefined),
			timeOffset: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response for ListBackupOperations. */
	export interface ListBackupOperationsResponse {

		/** `next_page_token` can be sent in a subsequent ListBackupOperations call to fetch more of the matching metadata. */
		nextPageToken?: string | null;

		/** The list of matching backup long-running operations. Each operation's name will be prefixed by the backup's name. The operation's metadata field type `metadata.type_url` describes the type of the metadata. Operations returned include those that are pending or have completed/failed/canceled within the last 7 days. Operations returned are ordered by `operation.metadata.value.progress.start_time` in descending order starting from the most recently started operation. */
		operations?: Array<Operation>;
	}

	/** The response for ListBackupOperations. */
	export interface ListBackupOperationsResponseFormProperties {

		/** `next_page_token` can be sent in a subsequent ListBackupOperations call to fetch more of the matching metadata. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBackupOperationsResponseFormGroup() {
		return new FormGroup<ListBackupOperationsResponseFormProperties>({
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


	/** The response for ListBackups. */
	export interface ListBackupsResponse {

		/** The list of matching backups. Backups returned are ordered by `create_time` in descending order, starting from the most recent `create_time`. */
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


	/** The response for ListDatabaseOperations. */
	export interface ListDatabaseOperationsResponse {

		/** `next_page_token` can be sent in a subsequent ListDatabaseOperations call to fetch more of the matching metadata. */
		nextPageToken?: string | null;

		/** The list of matching database long-running operations. Each operation's name will be prefixed by the database's name. The operation's metadata field type `metadata.type_url` describes the type of the metadata. */
		operations?: Array<Operation>;
	}

	/** The response for ListDatabaseOperations. */
	export interface ListDatabaseOperationsResponseFormProperties {

		/** `next_page_token` can be sent in a subsequent ListDatabaseOperations call to fetch more of the matching metadata. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatabaseOperationsResponseFormGroup() {
		return new FormGroup<ListDatabaseOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for ListDatabaseRoles. */
	export interface ListDatabaseRolesResponse {

		/** Database roles that matched the request. */
		databaseRoles?: Array<DatabaseRole>;

		/** `next_page_token` can be sent in a subsequent ListDatabaseRoles call to fetch more of the matching roles. */
		nextPageToken?: string | null;
	}

	/** The response for ListDatabaseRoles. */
	export interface ListDatabaseRolesResponseFormProperties {

		/** `next_page_token` can be sent in a subsequent ListDatabaseRoles call to fetch more of the matching roles. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatabaseRolesResponseFormGroup() {
		return new FormGroup<ListDatabaseRolesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for ListDatabases. */
	export interface ListDatabasesResponse {

		/** Databases that matched the request. */
		databases?: Array<Database>;

		/** `next_page_token` can be sent in a subsequent ListDatabases call to fetch more of the matching databases. */
		nextPageToken?: string | null;
	}

	/** The response for ListDatabases. */
	export interface ListDatabasesResponseFormProperties {

		/** `next_page_token` can be sent in a subsequent ListDatabases call to fetch more of the matching databases. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatabasesResponseFormGroup() {
		return new FormGroup<ListDatabasesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for ListInstanceConfigOperations. */
	export interface ListInstanceConfigOperationsResponse {

		/** `next_page_token` can be sent in a subsequent ListInstanceConfigOperations call to fetch more of the matching metadata. */
		nextPageToken?: string | null;

		/** The list of matching instance config long-running operations. Each operation's name will be prefixed by the instance config's name. The operation's metadata field type `metadata.type_url` describes the type of the metadata. */
		operations?: Array<Operation>;
	}

	/** The response for ListInstanceConfigOperations. */
	export interface ListInstanceConfigOperationsResponseFormProperties {

		/** `next_page_token` can be sent in a subsequent ListInstanceConfigOperations call to fetch more of the matching metadata. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListInstanceConfigOperationsResponseFormGroup() {
		return new FormGroup<ListInstanceConfigOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for ListInstanceConfigs. */
	export interface ListInstanceConfigsResponse {

		/** The list of requested instance configurations. */
		instanceConfigs?: Array<InstanceConfig>;

		/** `next_page_token` can be sent in a subsequent ListInstanceConfigs call to fetch more of the matching instance configurations. */
		nextPageToken?: string | null;
	}

	/** The response for ListInstanceConfigs. */
	export interface ListInstanceConfigsResponseFormProperties {

		/** `next_page_token` can be sent in a subsequent ListInstanceConfigs call to fetch more of the matching instance configurations. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListInstanceConfigsResponseFormGroup() {
		return new FormGroup<ListInstanceConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for ListInstances. */
	export interface ListInstancesResponse {

		/** The list of requested instances. */
		instances?: Array<Instance>;

		/** `next_page_token` can be sent in a subsequent ListInstances call to fetch more of the matching instances. */
		nextPageToken?: string | null;

		/** The list of unreachable instances. It includes the names of instances whose metadata could not be retrieved within instance_deadline. */
		unreachable?: Array<string>;
	}

	/** The response for ListInstances. */
	export interface ListInstancesResponseFormProperties {

		/** `next_page_token` can be sent in a subsequent ListInstances call to fetch more of the matching instances. */
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


	/** Response method from the ListScans method. */
	export interface ListScansResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** Available scans based on the list query parameters. */
		scans?: Array<Scan>;
	}

	/** Response method from the ListScans method. */
	export interface ListScansResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListScansResponseFormGroup() {
		return new FormGroup<ListScansResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Scan is a structure which describes Cloud Key Visualizer scan information. */
	export interface Scan {

		/** Additional information provided by the implementer. */
		details?: {[id: string]: any };

		/** The upper bound for when the scan is defined. */
		endTime?: string | null;

		/** The unique name of the scan, specific to the Database service implementing this interface. */
		name?: string | null;

		/** ScanData contains Cloud Key Visualizer scan data used by the caller to construct a visualization. */
		scanData?: ScanData;

		/** A range of time (inclusive) for when the scan is defined. The lower bound for when the scan is defined. */
		startTime?: string | null;
	}

	/** Scan is a structure which describes Cloud Key Visualizer scan information. */
	export interface ScanFormProperties {

		/** Additional information provided by the implementer. */
		details: FormControl<{[id: string]: any } | null | undefined>,

		/** The upper bound for when the scan is defined. */
		endTime: FormControl<string | null | undefined>,

		/** The unique name of the scan, specific to the Database service implementing this interface. */
		name: FormControl<string | null | undefined>,

		/** A range of time (inclusive) for when the scan is defined. The lower bound for when the scan is defined. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateScanFormGroup() {
		return new FormGroup<ScanFormProperties>({
			details: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ScanData contains Cloud Key Visualizer scan data used by the caller to construct a visualization. */
	export interface ScanData {
		data?: VisualizationData;

		/** The upper bound for when the contained data is defined. */
		endTime?: string | null;

		/** A range of time (inclusive) for when the contained data is defined. The lower bound for when the contained data is defined. */
		startTime?: string | null;
	}

	/** ScanData contains Cloud Key Visualizer scan data used by the caller to construct a visualization. */
	export interface ScanDataFormProperties {

		/** The upper bound for when the contained data is defined. */
		endTime: FormControl<string | null | undefined>,

		/** A range of time (inclusive) for when the contained data is defined. The lower bound for when the contained data is defined. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateScanDataFormGroup() {
		return new FormGroup<ScanDataFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VisualizationData {

		/** The token signifying the end of a data_source. */
		dataSourceEndToken?: string | null;

		/** The token delimiting a datasource name from the rest of a key in a data_source. */
		dataSourceSeparatorToken?: string | null;

		/** The list of messages (info, alerts, ...) */
		diagnosticMessages?: Array<DiagnosticMessage>;

		/** We discretize the entire keyspace into buckets. Assuming each bucket has an inclusive keyrange and covers keys from k(i) ... k(n). In this case k(n) would be an end key for a given range. end_key_string is the collection of all such end keys */
		endKeyStrings?: Array<string>;

		/** Whether this scan contains PII. */
		hasPii?: boolean | null;

		/** Keys of key ranges that contribute significantly to a given metric Can be thought of as heavy hitters. */
		indexedKeys?: Array<string>;

		/** The token delimiting the key prefixes. */
		keySeparator?: string | null;

		/** The unit for the key: e.g. 'key' or 'chunk'. */
		keyUnit?: VisualizationDataKeyUnit | null;

		/** The list of data objects for each metric. */
		metrics?: Array<Metric>;

		/** The list of extracted key prefix nodes used in the key prefix hierarchy. */
		prefixNodes?: Array<PrefixNode>;
	}
	export interface VisualizationDataFormProperties {

		/** The token signifying the end of a data_source. */
		dataSourceEndToken: FormControl<string | null | undefined>,

		/** The token delimiting a datasource name from the rest of a key in a data_source. */
		dataSourceSeparatorToken: FormControl<string | null | undefined>,

		/** Whether this scan contains PII. */
		hasPii: FormControl<boolean | null | undefined>,

		/** The token delimiting the key prefixes. */
		keySeparator: FormControl<string | null | undefined>,

		/** The unit for the key: e.g. 'key' or 'chunk'. */
		keyUnit: FormControl<VisualizationDataKeyUnit | null | undefined>,
	}
	export function CreateVisualizationDataFormGroup() {
		return new FormGroup<VisualizationDataFormProperties>({
			dataSourceEndToken: new FormControl<string | null | undefined>(undefined),
			dataSourceSeparatorToken: new FormControl<string | null | undefined>(undefined),
			hasPii: new FormControl<boolean | null | undefined>(undefined),
			keySeparator: new FormControl<string | null | undefined>(undefined),
			keyUnit: new FormControl<VisualizationDataKeyUnit | null | undefined>(undefined),
		});

	}

	export enum VisualizationDataKeyUnit { KEY_UNIT_UNSPECIFIED = 'KEY_UNIT_UNSPECIFIED', KEY = 'KEY', CHUNK = 'CHUNK' }


	/** A message representing the actual monitoring data, values for each key bucket over time, of a metric. */
	export interface Metric {

		/** The aggregation function used to aggregate each key bucket */
		aggregation?: MetricAggregation | null;

		/** A message representing a user-facing string whose value may need to be translated before being displayed. */
		category?: LocalizedString;

		/** A message representing a derived metric. */
		derived?: DerivedMetric;

		/** A message representing a user-facing string whose value may need to be translated before being displayed. */
		displayLabel?: LocalizedString;

		/** Whether the metric has any non-zero data. */
		hasNonzeroData?: boolean | null;

		/** The value that is considered hot for the metric. On a per metric basis hotness signals high utilization and something that might potentially be a cause for concern by the end user. hot_value is used to calibrate and scale visual color scales. */
		hotValue?: number | null;

		/** The (sparse) mapping from time index to an IndexedHotKey message, representing those time intervals for which there are hot keys. */
		indexedHotKeys?: {[id: string]: IndexedHotKey };

		/** The (sparse) mapping from time interval index to an IndexedKeyRangeInfos message, representing those time intervals for which there are informational messages concerning key ranges. */
		indexedKeyRangeInfos?: {[id: string]: IndexedKeyRangeInfos };

		/** A message representing a user-facing string whose value may need to be translated before being displayed. */
		info?: LocalizedString;

		/** A message representing a matrix of floats. */
		matrix?: MetricMatrix;

		/** A message representing a user-facing string whose value may need to be translated before being displayed. */
		unit?: LocalizedString;

		/** Whether the metric is visible to the end user. */
		visible?: boolean | null;
	}

	/** A message representing the actual monitoring data, values for each key bucket over time, of a metric. */
	export interface MetricFormProperties {

		/** The aggregation function used to aggregate each key bucket */
		aggregation: FormControl<MetricAggregation | null | undefined>,

		/** Whether the metric has any non-zero data. */
		hasNonzeroData: FormControl<boolean | null | undefined>,

		/** The value that is considered hot for the metric. On a per metric basis hotness signals high utilization and something that might potentially be a cause for concern by the end user. hot_value is used to calibrate and scale visual color scales. */
		hotValue: FormControl<number | null | undefined>,

		/** The (sparse) mapping from time index to an IndexedHotKey message, representing those time intervals for which there are hot keys. */
		indexedHotKeys: FormControl<{[id: string]: IndexedHotKey } | null | undefined>,

		/** The (sparse) mapping from time interval index to an IndexedKeyRangeInfos message, representing those time intervals for which there are informational messages concerning key ranges. */
		indexedKeyRangeInfos: FormControl<{[id: string]: IndexedKeyRangeInfos } | null | undefined>,

		/** Whether the metric is visible to the end user. */
		visible: FormControl<boolean | null | undefined>,
	}
	export function CreateMetricFormGroup() {
		return new FormGroup<MetricFormProperties>({
			aggregation: new FormControl<MetricAggregation | null | undefined>(undefined),
			hasNonzeroData: new FormControl<boolean | null | undefined>(undefined),
			hotValue: new FormControl<number | null | undefined>(undefined),
			indexedHotKeys: new FormControl<{[id: string]: IndexedHotKey } | null | undefined>(undefined),
			indexedKeyRangeInfos: new FormControl<{[id: string]: IndexedKeyRangeInfos } | null | undefined>(undefined),
			visible: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum MetricAggregation { AGGREGATION_UNSPECIFIED = 'AGGREGATION_UNSPECIFIED', MAX = 'MAX', SUM = 'SUM' }


	/** A message representing a matrix of floats. */
	export interface MetricMatrix {

		/** The rows of the matrix. */
		rows?: Array<MetricMatrixRow>;
	}

	/** A message representing a matrix of floats. */
	export interface MetricMatrixFormProperties {
	}
	export function CreateMetricMatrixFormGroup() {
		return new FormGroup<MetricMatrixFormProperties>({
		});

	}


	/** A message representing a row of a matrix of floats. */
	export interface MetricMatrixRow {

		/** The columns of the row. */
		cols?: Array<number>;
	}

	/** A message representing a row of a matrix of floats. */
	export interface MetricMatrixRowFormProperties {
	}
	export function CreateMetricMatrixRowFormGroup() {
		return new FormGroup<MetricMatrixRowFormProperties>({
		});

	}


	/** A message representing a key prefix node in the key prefix hierarchy. for eg. Bigtable keyspaces are lexicographically ordered mappings of keys to values. Keys often have a shared prefix structure where users use the keys to organize data. Eg ///employee In this case Keysight will possibly use one node for a company and reuse it for all employees that fall under the company. Doing so improves legibility in the UI. */
	export interface PrefixNode {

		/** Whether this corresponds to a data_source name. */
		dataSourceNode?: boolean | null;

		/** The depth in the prefix hierarchy. */
		depth?: number | null;

		/** The index of the end key bucket of the range that this node spans. */
		endIndex?: number | null;

		/** The index of the start key bucket of the range that this node spans. */
		startIndex?: number | null;

		/** The string represented by the prefix node. */
		word?: string | null;
	}

	/** A message representing a key prefix node in the key prefix hierarchy. for eg. Bigtable keyspaces are lexicographically ordered mappings of keys to values. Keys often have a shared prefix structure where users use the keys to organize data. Eg ///employee In this case Keysight will possibly use one node for a company and reuse it for all employees that fall under the company. Doing so improves legibility in the UI. */
	export interface PrefixNodeFormProperties {

		/** Whether this corresponds to a data_source name. */
		dataSourceNode: FormControl<boolean | null | undefined>,

		/** The depth in the prefix hierarchy. */
		depth: FormControl<number | null | undefined>,

		/** The index of the end key bucket of the range that this node spans. */
		endIndex: FormControl<number | null | undefined>,

		/** The index of the start key bucket of the range that this node spans. */
		startIndex: FormControl<number | null | undefined>,

		/** The string represented by the prefix node. */
		word: FormControl<string | null | undefined>,
	}
	export function CreatePrefixNodeFormGroup() {
		return new FormGroup<PrefixNodeFormProperties>({
			dataSourceNode: new FormControl<boolean | null | undefined>(undefined),
			depth: new FormControl<number | null | undefined>(undefined),
			endIndex: new FormControl<number | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for ListSessions. */
	export interface ListSessionsResponse {

		/** `next_page_token` can be sent in a subsequent ListSessions call to fetch more of the matching sessions. */
		nextPageToken?: string | null;

		/** The list of requested sessions. */
		sessions?: Array<Session>;
	}

	/** The response for ListSessions. */
	export interface ListSessionsResponseFormProperties {

		/** `next_page_token` can be sent in a subsequent ListSessions call to fetch more of the matching sessions. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSessionsResponseFormGroup() {
		return new FormGroup<ListSessionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata type for the long-running operation used to track the progress of optimizations performed on a newly restored database. This long-running operation is automatically created by the system after the successful completion of a database restore, and cannot be cancelled. */
	export interface OptimizeRestoredDatabaseMetadata {

		/** Name of the restored database being optimized. */
		name?: string | null;

		/** Encapsulates progress related information for a Cloud Spanner long running operation. */
		progress?: OperationProgress;
	}

	/** Metadata type for the long-running operation used to track the progress of optimizations performed on a newly restored database. This long-running operation is automatically created by the system after the successful completion of a database restore, and cannot be cancelled. */
	export interface OptimizeRestoredDatabaseMetadataFormProperties {

		/** Name of the restored database being optimized. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOptimizeRestoredDatabaseMetadataFormGroup() {
		return new FormGroup<OptimizeRestoredDatabaseMetadataFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Partial results from a streaming read or SQL query. Streaming reads and SQL queries better tolerate large result sets, large rows, and large values, but are a little trickier to consume. */
	export interface PartialResultSet {

		/** If true, then the final value in values is chunked, and must be combined with more values from subsequent `PartialResultSet`s to obtain a complete field value. */
		chunkedValue?: boolean | null;

		/** Metadata about a ResultSet or PartialResultSet. */
		metadata?: ResultSetMetadata;

		/** Streaming calls might be interrupted for a variety of reasons, such as TCP connection loss. If this occurs, the stream of results can be resumed by re-sending the original request and including `resume_token`. Note that executing any other transaction in the same session invalidates the token. */
		resumeToken?: string | null;

		/** Additional statistics about a ResultSet or PartialResultSet. */
		stats?: ResultSetStats;

		/** A streamed result set consists of a stream of values, which might be split into many `PartialResultSet` messages to accommodate large rows and/or large values. Every N complete values defines a row, where N is equal to the number of entries in metadata.row_type.fields. Most values are encoded based on type as described here. It is possible that the last value in values is "chunked", meaning that the rest of the value is sent in subsequent `PartialResultSet`(s). This is denoted by the chunked_value field. Two or more chunked values can be merged to form a complete value as follows: * `bool/number/null`: cannot be chunked * `string`: concatenate the strings * `list`: concatenate the lists. If the last element in a list is a `string`, `list`, or `object`, merge it with the first element in the next list by applying these rules recursively. * `object`: concatenate the (field name, field value) pairs. If a field name is duplicated, then apply these rules recursively to merge the field values. Some examples of merging: # Strings are concatenated. "foo", "bar" => "foobar" # Lists of non-strings are concatenated. [2, 3], [4] => [2, 3, 4] # Lists are concatenated, but the last and first elements are merged # because they are strings. ["a", "b"], ["c", "d"] => ["a", "bc", "d"] # Lists are concatenated, but the last and first elements are merged # because they are lists. Recursively, the last and first elements # of the inner lists are merged because they are strings. ["a", ["b", "c"]], [["d"], "e"] => ["a", ["b", "cd"], "e"] # Non-overlapping object fields are combined. {"a": "1"}, {"b": "2"} => {"a": "1", "b": 2"} # Overlapping object fields are merged. {"a": "1"}, {"a": "2"} => {"a": "12"} # Examples of merging objects containing lists of strings. {"a": ["1"]}, {"a": ["2"]} => {"a": ["12"]} For a more complete example, suppose a streaming SQL query is yielding a result set whose rows contain a single string field. The following `PartialResultSet`s might be yielded: { "metadata": { ... } "values": ["Hello", "W"] "chunked_value": true "resume_token": "Af65..." } { "values": ["orl"] "chunked_value": true } { "values": ["d"] "resume_token": "Zx1B..." } This sequence of `PartialResultSet`s encodes two rows, one containing the field value `"Hello"`, and a second containing the field value `"World" = "W" + "orl" + "d"`. Not all `PartialResultSet`s contain a `resume_token`. Execution can only be resumed from a previously yielded `resume_token`. For the above sequence of `PartialResultSet`s, resuming the query with `"resume_token": "Af65..."` will yield results from the `PartialResultSet` with value `["orl"]`. */
		values?: Array<string>;
	}

	/** Partial results from a streaming read or SQL query. Streaming reads and SQL queries better tolerate large result sets, large rows, and large values, but are a little trickier to consume. */
	export interface PartialResultSetFormProperties {

		/** If true, then the final value in values is chunked, and must be combined with more values from subsequent `PartialResultSet`s to obtain a complete field value. */
		chunkedValue: FormControl<boolean | null | undefined>,

		/** Streaming calls might be interrupted for a variety of reasons, such as TCP connection loss. If this occurs, the stream of results can be resumed by re-sending the original request and including `resume_token`. Note that executing any other transaction in the same session invalidates the token. */
		resumeToken: FormControl<string | null | undefined>,
	}
	export function CreatePartialResultSetFormGroup() {
		return new FormGroup<PartialResultSetFormProperties>({
			chunkedValue: new FormControl<boolean | null | undefined>(undefined),
			resumeToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information returned for each partition returned in a PartitionResponse. */
	export interface Partition {

		/** This token can be passed to Read, StreamingRead, ExecuteSql, or ExecuteStreamingSql requests to restrict the results to those identified by this partition token. */
		partitionToken?: string | null;
	}

	/** Information returned for each partition returned in a PartitionResponse. */
	export interface PartitionFormProperties {

		/** This token can be passed to Read, StreamingRead, ExecuteSql, or ExecuteStreamingSql requests to restrict the results to those identified by this partition token. */
		partitionToken: FormControl<string | null | undefined>,
	}
	export function CreatePartitionFormGroup() {
		return new FormGroup<PartitionFormProperties>({
			partitionToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options for a PartitionQueryRequest and PartitionReadRequest. */
	export interface PartitionOptions {

		/** **Note:** This hint is currently ignored by PartitionQuery and PartitionRead requests. The desired maximum number of partitions to return. For example, this may be set to the number of workers available. The default for this option is currently 10,000. The maximum value is currently 200,000. This is only a hint. The actual number of partitions returned may be smaller or larger than this maximum count request. */
		maxPartitions?: string | null;

		/** **Note:** This hint is currently ignored by PartitionQuery and PartitionRead requests. The desired data size for each partition generated. The default for this option is currently 1 GiB. This is only a hint. The actual size of each partition may be smaller or larger than this size request. */
		partitionSizeBytes?: string | null;
	}

	/** Options for a PartitionQueryRequest and PartitionReadRequest. */
	export interface PartitionOptionsFormProperties {

		/** **Note:** This hint is currently ignored by PartitionQuery and PartitionRead requests. The desired maximum number of partitions to return. For example, this may be set to the number of workers available. The default for this option is currently 10,000. The maximum value is currently 200,000. This is only a hint. The actual number of partitions returned may be smaller or larger than this maximum count request. */
		maxPartitions: FormControl<string | null | undefined>,

		/** **Note:** This hint is currently ignored by PartitionQuery and PartitionRead requests. The desired data size for each partition generated. The default for this option is currently 1 GiB. This is only a hint. The actual size of each partition may be smaller or larger than this size request. */
		partitionSizeBytes: FormControl<string | null | undefined>,
	}
	export function CreatePartitionOptionsFormGroup() {
		return new FormGroup<PartitionOptionsFormProperties>({
			maxPartitions: new FormControl<string | null | undefined>(undefined),
			partitionSizeBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for PartitionQuery */
	export interface PartitionQueryRequest {

		/** It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings. In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL query parameters. See the definition of Type for more information about SQL types. */
		paramTypes?: {[id: string]: Type };

		/** Parameter names and values that bind to placeholders in the SQL string. A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names can contain letters, numbers, and underscores. Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example: `"WHERE id > @msg_id AND id < @msg_id + 100"` It is an error to execute a SQL statement with unbound parameters. */
		params?: {[id: string]: any };

		/** Options for a PartitionQueryRequest and PartitionReadRequest. */
		partitionOptions?: PartitionOptions;

		/** Required. The query request to generate partitions for. The request will fail if the query is not root partitionable. For a query to be root partitionable, it needs to satisfy a few conditions. For example, if the query execution plan contains a distributed union operator, then it must be the first operator in the plan. For more information about other conditions, see [Read data in parallel](https://cloud.google.com/spanner/docs/reads#read_data_in_parallel). The query request must not contain DML commands, such as INSERT, UPDATE, or DELETE. Use ExecuteStreamingSql with a PartitionedDml transaction for large, partition-friendly DML operations. */
		sql?: string | null;

		/** This message is used to select the transaction in which a Read or ExecuteSql call runs. See TransactionOptions for more information about transactions. */
		transaction?: TransactionSelector;
	}

	/** The request for PartitionQuery */
	export interface PartitionQueryRequestFormProperties {

		/** It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings. In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL query parameters. See the definition of Type for more information about SQL types. */
		paramTypes: FormControl<{[id: string]: Type } | null | undefined>,

		/** Parameter names and values that bind to placeholders in the SQL string. A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names can contain letters, numbers, and underscores. Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example: `"WHERE id > @msg_id AND id < @msg_id + 100"` It is an error to execute a SQL statement with unbound parameters. */
		params: FormControl<{[id: string]: any } | null | undefined>,

		/** Required. The query request to generate partitions for. The request will fail if the query is not root partitionable. For a query to be root partitionable, it needs to satisfy a few conditions. For example, if the query execution plan contains a distributed union operator, then it must be the first operator in the plan. For more information about other conditions, see [Read data in parallel](https://cloud.google.com/spanner/docs/reads#read_data_in_parallel). The query request must not contain DML commands, such as INSERT, UPDATE, or DELETE. Use ExecuteStreamingSql with a PartitionedDml transaction for large, partition-friendly DML operations. */
		sql: FormControl<string | null | undefined>,
	}
	export function CreatePartitionQueryRequestFormGroup() {
		return new FormGroup<PartitionQueryRequestFormProperties>({
			paramTypes: new FormControl<{[id: string]: Type } | null | undefined>(undefined),
			params: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			sql: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for PartitionRead */
	export interface PartitionReadRequest {

		/** The columns of table to be returned for each row matching this request. */
		columns?: Array<string>;

		/** If non-empty, the name of an index on table. This index is used instead of the table primary key when interpreting key_set and sorting result rows. See key_set for further information. */
		index?: string | null;

		/** `KeySet` defines a collection of Cloud Spanner keys and/or key ranges. All the keys are expected to be in the same table or index. The keys need not be sorted in any particular way. If the same key is specified multiple times in the set (for example if two ranges, two keys, or a key and a range overlap), Cloud Spanner behaves as if the key were only specified once. */
		keySet?: KeySet;

		/** Options for a PartitionQueryRequest and PartitionReadRequest. */
		partitionOptions?: PartitionOptions;

		/** Required. The name of the table in the database to be read. */
		table?: string | null;

		/** This message is used to select the transaction in which a Read or ExecuteSql call runs. See TransactionOptions for more information about transactions. */
		transaction?: TransactionSelector;
	}

	/** The request for PartitionRead */
	export interface PartitionReadRequestFormProperties {

		/** If non-empty, the name of an index on table. This index is used instead of the table primary key when interpreting key_set and sorting result rows. See key_set for further information. */
		index: FormControl<string | null | undefined>,

		/** Required. The name of the table in the database to be read. */
		table: FormControl<string | null | undefined>,
	}
	export function CreatePartitionReadRequestFormGroup() {
		return new FormGroup<PartitionReadRequestFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for PartitionQuery or PartitionRead */
	export interface PartitionResponse {

		/** Partitions created by this request. */
		partitions?: Array<Partition>;

		/** A transaction. */
		transaction?: Transaction;
	}

	/** The response for PartitionQuery or PartitionRead */
	export interface PartitionResponseFormProperties {
	}
	export function CreatePartitionResponseFormGroup() {
		return new FormGroup<PartitionResponseFormProperties>({
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


	/** The request for Read and StreamingRead. */
	export interface ReadRequest {

		/** Required. The columns of table to be returned for each row matching this request. */
		columns?: Array<string>;

		/** If this is for a partitioned read and this field is set to `true`, the request is executed with Spanner Data Boost independent compute resources. If the field is set to `true` but the request does not set `partition_token`, the API returns an `INVALID_ARGUMENT` error. */
		dataBoostEnabled?: boolean | null;

		/** The DirectedReadOptions can be used to indicate which replicas or regions should be used for non-transactional reads or queries. DirectedReadOptions may only be specified for a read-only transaction, otherwise the API will return an `INVALID_ARGUMENT` error. */
		directedReadOptions?: DirectedReadOptions;

		/** If non-empty, the name of an index on table. This index is used instead of the table primary key when interpreting key_set and sorting result rows. See key_set for further information. */
		index?: string | null;

		/** `KeySet` defines a collection of Cloud Spanner keys and/or key ranges. All the keys are expected to be in the same table or index. The keys need not be sorted in any particular way. If the same key is specified multiple times in the set (for example if two ranges, two keys, or a key and a range overlap), Cloud Spanner behaves as if the key were only specified once. */
		keySet?: KeySet;

		/** If greater than zero, only the first `limit` rows are yielded. If `limit` is zero, the default is no limit. A limit cannot be specified if `partition_token` is set. */
		limit?: string | null;

		/** If present, results will be restricted to the specified partition previously created using PartitionRead(). There must be an exact match for the values of fields common to this message and the PartitionReadRequest message used to create this partition_token. */
		partitionToken?: string | null;

		/** Common request options for various APIs. */
		requestOptions?: RequestOptions;

		/** If this request is resuming a previously interrupted read, `resume_token` should be copied from the last PartialResultSet yielded before the interruption. Doing this enables the new read to resume where the last read left off. The rest of the request parameters must exactly match the request that yielded this token. */
		resumeToken?: string | null;

		/** Required. The name of the table in the database to be read. */
		table?: string | null;

		/** This message is used to select the transaction in which a Read or ExecuteSql call runs. See TransactionOptions for more information about transactions. */
		transaction?: TransactionSelector;
	}

	/** The request for Read and StreamingRead. */
	export interface ReadRequestFormProperties {

		/** If this is for a partitioned read and this field is set to `true`, the request is executed with Spanner Data Boost independent compute resources. If the field is set to `true` but the request does not set `partition_token`, the API returns an `INVALID_ARGUMENT` error. */
		dataBoostEnabled: FormControl<boolean | null | undefined>,

		/** If non-empty, the name of an index on table. This index is used instead of the table primary key when interpreting key_set and sorting result rows. See key_set for further information. */
		index: FormControl<string | null | undefined>,

		/** If greater than zero, only the first `limit` rows are yielded. If `limit` is zero, the default is no limit. A limit cannot be specified if `partition_token` is set. */
		limit: FormControl<string | null | undefined>,

		/** If present, results will be restricted to the specified partition previously created using PartitionRead(). There must be an exact match for the values of fields common to this message and the PartitionReadRequest message used to create this partition_token. */
		partitionToken: FormControl<string | null | undefined>,

		/** If this request is resuming a previously interrupted read, `resume_token` should be copied from the last PartialResultSet yielded before the interruption. Doing this enables the new read to resume where the last read left off. The rest of the request parameters must exactly match the request that yielded this token. */
		resumeToken: FormControl<string | null | undefined>,

		/** Required. The name of the table in the database to be read. */
		table: FormControl<string | null | undefined>,
	}
	export function CreateReadRequestFormGroup() {
		return new FormGroup<ReadRequestFormProperties>({
			dataBoostEnabled: new FormControl<boolean | null | undefined>(undefined),
			index: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<string | null | undefined>(undefined),
			partitionToken: new FormControl<string | null | undefined>(undefined),
			resumeToken: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encryption configuration for the restored database. */
	export interface RestoreDatabaseEncryptionConfig {

		/** Required. The encryption type of the restored database. */
		encryptionType?: CopyBackupEncryptionConfigEncryptionType | null;

		/** Optional. The Cloud KMS key that will be used to encrypt/decrypt the restored database. This field should be set only when encryption_type is `CUSTOMER_MANAGED_ENCRYPTION`. Values are of the form `projects//locations//keyRings//cryptoKeys/`. */
		kmsKeyName?: string | null;
	}

	/** Encryption configuration for the restored database. */
	export interface RestoreDatabaseEncryptionConfigFormProperties {

		/** Required. The encryption type of the restored database. */
		encryptionType: FormControl<CopyBackupEncryptionConfigEncryptionType | null | undefined>,

		/** Optional. The Cloud KMS key that will be used to encrypt/decrypt the restored database. This field should be set only when encryption_type is `CUSTOMER_MANAGED_ENCRYPTION`. Values are of the form `projects//locations//keyRings//cryptoKeys/`. */
		kmsKeyName: FormControl<string | null | undefined>,
	}
	export function CreateRestoreDatabaseEncryptionConfigFormGroup() {
		return new FormGroup<RestoreDatabaseEncryptionConfigFormProperties>({
			encryptionType: new FormControl<CopyBackupEncryptionConfigEncryptionType | null | undefined>(undefined),
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata type for the long-running operation returned by RestoreDatabase. */
	export interface RestoreDatabaseMetadata {

		/** Information about a backup. */
		backupInfo?: BackupInfo;

		/** The time at which cancellation of this operation was received. Operations.CancelOperation starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelTime?: string | null;

		/** Name of the database being created and restored to. */
		name?: string | null;

		/** If exists, the name of the long-running operation that will be used to track the post-restore optimization process to optimize the performance of the restored database, and remove the dependency on the restore source. The name is of the form `projects//instances//databases//operations/` where the is the name of database being created and restored to. The metadata type of the long-running operation is OptimizeRestoredDatabaseMetadata. This long-running operation will be automatically created by the system after the RestoreDatabase long-running operation completes successfully. This operation will not be created if the restore was not successful. */
		optimizeDatabaseOperationName?: string | null;

		/** Encapsulates progress related information for a Cloud Spanner long running operation. */
		progress?: OperationProgress;

		/** The type of the restore source. */
		sourceType?: RestoreInfoSourceType | null;
	}

	/** Metadata type for the long-running operation returned by RestoreDatabase. */
	export interface RestoreDatabaseMetadataFormProperties {

		/** The time at which cancellation of this operation was received. Operations.CancelOperation starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelTime: FormControl<string | null | undefined>,

		/** Name of the database being created and restored to. */
		name: FormControl<string | null | undefined>,

		/** If exists, the name of the long-running operation that will be used to track the post-restore optimization process to optimize the performance of the restored database, and remove the dependency on the restore source. The name is of the form `projects//instances//databases//operations/` where the is the name of database being created and restored to. The metadata type of the long-running operation is OptimizeRestoredDatabaseMetadata. This long-running operation will be automatically created by the system after the RestoreDatabase long-running operation completes successfully. This operation will not be created if the restore was not successful. */
		optimizeDatabaseOperationName: FormControl<string | null | undefined>,

		/** The type of the restore source. */
		sourceType: FormControl<RestoreInfoSourceType | null | undefined>,
	}
	export function CreateRestoreDatabaseMetadataFormGroup() {
		return new FormGroup<RestoreDatabaseMetadataFormProperties>({
			cancelTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			optimizeDatabaseOperationName: new FormControl<string | null | undefined>(undefined),
			sourceType: new FormControl<RestoreInfoSourceType | null | undefined>(undefined),
		});

	}


	/** The request for RestoreDatabase. */
	export interface RestoreDatabaseRequest {

		/** Name of the backup from which to restore. Values are of the form `projects//instances//backups/`. */
		backup?: string | null;

		/** Required. The id of the database to create and restore to. This database must not already exist. The `database_id` appended to `parent` forms the full database name of the form `projects//instances//databases/`. */
		databaseId?: string | null;

		/** Encryption configuration for the restored database. */
		encryptionConfig?: RestoreDatabaseEncryptionConfig;
	}

	/** The request for RestoreDatabase. */
	export interface RestoreDatabaseRequestFormProperties {

		/** Name of the backup from which to restore. Values are of the form `projects//instances//backups/`. */
		backup: FormControl<string | null | undefined>,

		/** Required. The id of the database to create and restore to. This database must not already exist. The `database_id` appended to `parent` forms the full database name of the form `projects//instances//databases/`. */
		databaseId: FormControl<string | null | undefined>,
	}
	export function CreateRestoreDatabaseRequestFormGroup() {
		return new FormGroup<RestoreDatabaseRequestFormProperties>({
			backup: new FormControl<string | null | undefined>(undefined),
			databaseId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for Rollback. */
	export interface RollbackRequest {

		/** Required. The transaction to roll back. */
		transactionId?: string | null;
	}

	/** The request for Rollback. */
	export interface RollbackRequestFormProperties {

		/** Required. The transaction to roll back. */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateRollbackRequestFormGroup() {
		return new FormGroup<RollbackRequestFormProperties>({
			transactionId: new FormControl<string | null | undefined>(undefined),
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

		/** REQUIRED: The set of permissions to check for 'resource'. Permissions with wildcards (such as '*', 'spanner.*', 'spanner.instances.*') are not allowed. */
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


	/** Metadata type for the operation returned by UpdateDatabaseDdl. */
	export interface UpdateDatabaseDdlMetadata {

		/** The brief action info for the DDL statements. `actions[i]` is the brief info for `statements[i]`. */
		actions?: Array<DdlStatementActionInfo>;

		/** Reports the commit timestamps of all statements that have succeeded so far, where `commit_timestamps[i]` is the commit timestamp for the statement `statements[i]`. */
		commitTimestamps?: Array<string>;

		/** The database being modified. */
		database?: string | null;

		/** The progress of the UpdateDatabaseDdl operations. All DDL statements will have continuously updating progress, and `progress[i]` is the operation progress for `statements[i]`. Also, `progress[i]` will have start time and end time populated with commit timestamp of operation, as well as a progress of 100% once the operation has completed. */
		progress?: Array<OperationProgress>;

		/** For an update this list contains all the statements. For an individual statement, this list contains only that statement. */
		statements?: Array<string>;

		/** Output only. When true, indicates that the operation is throttled e.g. due to resource constraints. When resources become available the operation will resume and this field will be false again. */
		throttled?: boolean | null;
	}

	/** Metadata type for the operation returned by UpdateDatabaseDdl. */
	export interface UpdateDatabaseDdlMetadataFormProperties {

		/** The database being modified. */
		database: FormControl<string | null | undefined>,

		/** Output only. When true, indicates that the operation is throttled e.g. due to resource constraints. When resources become available the operation will resume and this field will be false again. */
		throttled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDatabaseDdlMetadataFormGroup() {
		return new FormGroup<UpdateDatabaseDdlMetadataFormProperties>({
			database: new FormControl<string | null | undefined>(undefined),
			throttled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Enqueues the given DDL statements to be applied, in order but not necessarily all at once, to the database schema at some point (or points) in the future. The server checks that the statements are executable (syntactically valid, name tables that exist, etc.) before enqueueing them, but they may still fail upon later execution (e.g., if a statement from another batch of statements is applied first and it conflicts in some way, or if there is some data-related problem like a `NULL` value in a column to which `NOT NULL` would be added). If a statement fails, all subsequent statements in the batch are automatically cancelled. Each batch of statements is assigned a name which can be used with the Operations API to monitor progress. See the operation_id field for more details. */
	export interface UpdateDatabaseDdlRequest {

		/** If empty, the new update request is assigned an automatically-generated operation ID. Otherwise, `operation_id` is used to construct the name of the resulting Operation. Specifying an explicit operation ID simplifies determining whether the statements were executed in the event that the UpdateDatabaseDdl call is replayed, or the return value is otherwise lost: the database and `operation_id` fields can be combined to form the name of the resulting longrunning.Operation: `/operations/`. `operation_id` should be unique within the database, and must be a valid identifier: `a-z*`. Note that automatically-generated operation IDs always begin with an underscore. If the named operation already exists, UpdateDatabaseDdl returns `ALREADY_EXISTS`. */
		operationId?: string | null;

		/** Optional. Proto descriptors used by CREATE/ALTER PROTO BUNDLE statements. Contains a protobuf-serialized [google.protobuf.FileDescriptorSet](https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/descriptor.proto). To generate it, [install](https://grpc.io/docs/protoc-installation/) and run `protoc` with --include_imports and --descriptor_set_out. For example, to generate for moon/shot/app.proto, run """ $protoc --proto_path=/app_path --proto_path=/lib_path \ --include_imports \ --descriptor_set_out=descriptors.data \ moon/shot/app.proto """ For more details, see protobuffer [self description](https://developers.google.com/protocol-buffers/docs/techniques#self-description). */
		protoDescriptors?: string | null;

		/** Required. DDL statements to be applied to the database. */
		statements?: Array<string>;
	}

	/** Enqueues the given DDL statements to be applied, in order but not necessarily all at once, to the database schema at some point (or points) in the future. The server checks that the statements are executable (syntactically valid, name tables that exist, etc.) before enqueueing them, but they may still fail upon later execution (e.g., if a statement from another batch of statements is applied first and it conflicts in some way, or if there is some data-related problem like a `NULL` value in a column to which `NOT NULL` would be added). If a statement fails, all subsequent statements in the batch are automatically cancelled. Each batch of statements is assigned a name which can be used with the Operations API to monitor progress. See the operation_id field for more details. */
	export interface UpdateDatabaseDdlRequestFormProperties {

		/** If empty, the new update request is assigned an automatically-generated operation ID. Otherwise, `operation_id` is used to construct the name of the resulting Operation. Specifying an explicit operation ID simplifies determining whether the statements were executed in the event that the UpdateDatabaseDdl call is replayed, or the return value is otherwise lost: the database and `operation_id` fields can be combined to form the name of the resulting longrunning.Operation: `/operations/`. `operation_id` should be unique within the database, and must be a valid identifier: `a-z*`. Note that automatically-generated operation IDs always begin with an underscore. If the named operation already exists, UpdateDatabaseDdl returns `ALREADY_EXISTS`. */
		operationId: FormControl<string | null | undefined>,

		/** Optional. Proto descriptors used by CREATE/ALTER PROTO BUNDLE statements. Contains a protobuf-serialized [google.protobuf.FileDescriptorSet](https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/descriptor.proto). To generate it, [install](https://grpc.io/docs/protoc-installation/) and run `protoc` with --include_imports and --descriptor_set_out. For example, to generate for moon/shot/app.proto, run """ $protoc --proto_path=/app_path --proto_path=/lib_path \ --include_imports \ --descriptor_set_out=descriptors.data \ moon/shot/app.proto """ For more details, see protobuffer [self description](https://developers.google.com/protocol-buffers/docs/techniques#self-description). */
		protoDescriptors: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDatabaseDdlRequestFormGroup() {
		return new FormGroup<UpdateDatabaseDdlRequestFormProperties>({
			operationId: new FormControl<string | null | undefined>(undefined),
			protoDescriptors: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata type for the operation returned by UpdateDatabase. */
	export interface UpdateDatabaseMetadata {

		/** The time at which this operation was cancelled. If set, this operation is in the process of undoing itself (which is best-effort). */
		cancelTime?: string | null;

		/** Encapsulates progress related information for a Cloud Spanner long running operation. */
		progress?: OperationProgress;

		/** The request for UpdateDatabase. */
		request?: UpdateDatabaseRequest;
	}

	/** Metadata type for the operation returned by UpdateDatabase. */
	export interface UpdateDatabaseMetadataFormProperties {

		/** The time at which this operation was cancelled. If set, this operation is in the process of undoing itself (which is best-effort). */
		cancelTime: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDatabaseMetadataFormGroup() {
		return new FormGroup<UpdateDatabaseMetadataFormProperties>({
			cancelTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for UpdateDatabase. */
	export interface UpdateDatabaseRequest {

		/** A Cloud Spanner database. */
		database?: Database;

		/** Required. The list of fields to update. Currently, only `enable_drop_protection` field can be updated. */
		updateMask?: string | null;
	}

	/** The request for UpdateDatabase. */
	export interface UpdateDatabaseRequestFormProperties {

		/** Required. The list of fields to update. Currently, only `enable_drop_protection` field can be updated. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDatabaseRequestFormGroup() {
		return new FormGroup<UpdateDatabaseRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata type for the operation returned by UpdateInstanceConfig. */
	export interface UpdateInstanceConfigMetadata {

		/** The time at which this operation was cancelled. */
		cancelTime?: string | null;

		/** A possible configuration for a Cloud Spanner instance. Configurations define the geographic placement of nodes and their replication. */
		instanceConfig?: InstanceConfig;

		/** Encapsulates progress related information for a Cloud Spanner long running instance operations. */
		progress?: InstanceOperationProgress;
	}

	/** Metadata type for the operation returned by UpdateInstanceConfig. */
	export interface UpdateInstanceConfigMetadataFormProperties {

		/** The time at which this operation was cancelled. */
		cancelTime: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInstanceConfigMetadataFormGroup() {
		return new FormGroup<UpdateInstanceConfigMetadataFormProperties>({
			cancelTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for UpdateInstanceConfigRequest. */
	export interface UpdateInstanceConfigRequest {

		/** A possible configuration for a Cloud Spanner instance. Configurations define the geographic placement of nodes and their replication. */
		instanceConfig?: InstanceConfig;

		/** Required. A mask specifying which fields in InstanceConfig should be updated. The field mask must always be specified; this prevents any future fields in InstanceConfig from being erased accidentally by clients that do not know about them. Only display_name and labels can be updated. */
		updateMask?: string | null;

		/** An option to validate, but not actually execute, a request, and provide the same response. */
		validateOnly?: boolean | null;
	}

	/** The request for UpdateInstanceConfigRequest. */
	export interface UpdateInstanceConfigRequestFormProperties {

		/** Required. A mask specifying which fields in InstanceConfig should be updated. The field mask must always be specified; this prevents any future fields in InstanceConfig from being erased accidentally by clients that do not know about them. Only display_name and labels can be updated. */
		updateMask: FormControl<string | null | undefined>,

		/** An option to validate, but not actually execute, a request, and provide the same response. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateInstanceConfigRequestFormGroup() {
		return new FormGroup<UpdateInstanceConfigRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Metadata type for the operation returned by UpdateInstance. */
	export interface UpdateInstanceMetadata {

		/** The time at which this operation was cancelled. If set, this operation is in the process of undoing itself (which is guaranteed to succeed) and cannot be cancelled again. */
		cancelTime?: string | null;

		/** The time at which this operation failed or was completed successfully. */
		endTime?: string | null;

		/** An isolated set of Cloud Spanner resources on which databases can be hosted. */
		instance?: Instance;

		/** The time at which UpdateInstance request was received. */
		startTime?: string | null;
	}

	/** Metadata type for the operation returned by UpdateInstance. */
	export interface UpdateInstanceMetadataFormProperties {

		/** The time at which this operation was cancelled. If set, this operation is in the process of undoing itself (which is guaranteed to succeed) and cannot be cancelled again. */
		cancelTime: FormControl<string | null | undefined>,

		/** The time at which this operation failed or was completed successfully. */
		endTime: FormControl<string | null | undefined>,

		/** The time at which UpdateInstance request was received. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInstanceMetadataFormGroup() {
		return new FormGroup<UpdateInstanceMetadataFormProperties>({
			cancelTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for UpdateInstance. */
	export interface UpdateInstanceRequest {

		/** Required. A mask specifying which fields in Instance should be updated. The field mask must always be specified; this prevents any future fields in Instance from being erased accidentally by clients that do not know about them. */
		fieldMask?: string | null;

		/** An isolated set of Cloud Spanner resources on which databases can be hosted. */
		instance?: Instance;
	}

	/** The request for UpdateInstance. */
	export interface UpdateInstanceRequestFormProperties {

		/** Required. A mask specifying which fields in Instance should be updated. The field mask must always be specified; this prevents any future fields in Instance from being erased accidentally by clients that do not know about them. */
		fieldMask: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInstanceRequestFormGroup() {
		return new FormGroup<UpdateInstanceRequestFormProperties>({
			fieldMask: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Drops (aka deletes) a Cloud Spanner database. Completed backups for the database will be retained according to their `expire_time`. Note: Cloud Spanner might continue to accept requests for a few seconds after the database has been deleted.
		 * Delete v1/{database}
		 * @param {string} database Required. The database to be dropped.
		 * @return {Empty} Successful response
		 */
		Spanner_projects_instances_databases_dropDatabase(database: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (database == null ? '' : encodeURIComponent(database)), {});
		}

		/**
		 * Returns the schema of a Cloud Spanner database as a list of formatted DDL statements. This method does not show pending schema updates, those may be queried using the Operations API.
		 * Get v1/{database}/ddl
		 * @param {string} database Required. The database whose schema we wish to get. Values are of the form `projects//instances//databases/`
		 * @return {GetDatabaseDdlResponse} Successful response
		 */
		Spanner_projects_instances_databases_getDdl(database: string): Observable<GetDatabaseDdlResponse> {
			return this.http.get<GetDatabaseDdlResponse>(this.baseUri + 'v1/' + (database == null ? '' : encodeURIComponent(database)) + '/ddl', {});
		}

		/**
		 * Updates the schema of a Cloud Spanner database by creating/altering/dropping tables, columns, indexes, etc. The returned long-running operation will have a name of the format `/operations/` and can be used to track execution of the schema change(s). The metadata field type is UpdateDatabaseDdlMetadata. The operation has no response.
		 * Patch v1/{database}/ddl
		 * @param {string} database Required. The database to update.
		 * @return {Operation} Successful response
		 */
		Spanner_projects_instances_databases_updateDdl(database: string, requestBody: UpdateDatabaseDdlRequest): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (database == null ? '' : encodeURIComponent(database)) + '/ddl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all sessions in a given database.
		 * Get v1/{database}/sessions
		 * @param {string} database Required. The database in which to list sessions.
		 * @param {string} filter An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `labels.key` where key is the name of a label Some examples of using filters are: * `labels.env:*` --> The session has the label "env". * `labels.env:dev` --> The session has the label "env" and the value of the label contains the string "dev".
		 * @param {number} pageSize Number of sessions to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
		 * @param {string} pageToken If non-empty, `page_token` should contain a next_page_token from a previous ListSessionsResponse.
		 * @return {ListSessionsResponse} Successful response
		 */
		Spanner_projects_instances_databases_sessions_list(database: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSessionsResponse> {
			return this.http.get<ListSessionsResponse>(this.baseUri + 'v1/' + (database == null ? '' : encodeURIComponent(database)) + '/sessions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new session. A session can be used to perform transactions that read and/or modify data in a Cloud Spanner database. Sessions are meant to be reused for many consecutive transactions. Sessions can only execute one transaction at a time. To execute multiple concurrent read-write/write-only transactions, create multiple sessions. Note that standalone reads and queries use a transaction internally, and count toward the one transaction limit. Active sessions use additional server resources, so it is a good idea to delete idle and unneeded sessions. Aside from explicit deletes, Cloud Spanner may delete sessions for which no operations are sent for more than an hour. If a session is deleted, requests to it return `NOT_FOUND`. Idle sessions can be kept alive by sending a trivial SQL query periodically, e.g., `"SELECT 1"`.
		 * Post v1/{database}/sessions
		 * @param {string} database Required. The database in which the new session is created.
		 * @return {Session} Successful response
		 */
		Spanner_projects_instances_databases_sessions_create(database: string, requestBody: CreateSessionRequest): Observable<Session> {
			return this.http.post<Session>(this.baseUri + 'v1/' + (database == null ? '' : encodeURIComponent(database)) + '/sessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates multiple new sessions. This API can be used to initialize a session cache on the clients. See https://goo.gl/TgSFN2 for best practices on session cache management.
		 * Post v1/{database}/sessions:batchCreate
		 * @param {string} database Required. The database in which the new sessions are created.
		 * @return {BatchCreateSessionsResponse} Successful response
		 */
		Spanner_projects_instances_databases_sessions_batchCreate(database: string, requestBody: BatchCreateSessionsRequest): Observable<BatchCreateSessionsResponse> {
			return this.http.post<BatchCreateSessionsResponse>(this.baseUri + 'v1/' + (database == null ? '' : encodeURIComponent(database)) + '/sessions:batchCreate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @param {string} etag Used for optimistic concurrency control as a way to help prevent simultaneous deletes of an instance config from overwriting each other. If not empty, the API only deletes the instance config when the etag provided matches the current status of the requested instance config. Otherwise, deletes the instance config without checking the current status of the requested instance config.
		 * @param {boolean} validateOnly An option to validate, but not actually execute, a request, and provide the same response.
		 * @return {Empty} Successful response
		 */
		Spanner_projects_instances_operations_delete(name: string, etag: string | null | undefined, validateOnly: boolean | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&etag=' + (etag == null ? '' : encodeURIComponent(etag)) + '&validateOnly=' + validateOnly, {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Spanner_projects_instances_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Updates a Cloud Spanner database. The returned long-running operation can be used to track the progress of updating the database. If the named database does not exist, returns `NOT_FOUND`. While the operation is pending: * The database's reconciling field is set to true. * Cancelling the operation is best-effort. If the cancellation succeeds, the operation metadata's cancel_time is set, the updates are reverted, and the operation terminates with a `CANCELLED` status. * New UpdateDatabase requests will return a `FAILED_PRECONDITION` error until the pending operation is done (returns successfully or with error). * Reading the database via the API continues to give the pre-request values. Upon completion of the returned operation: * The new values are in effect and readable via the API. * The database's reconciling field becomes false. The returned long-running operation will have a name of the format `projects//instances//databases//operations/` and can be used to track the database modification. The metadata field type is UpdateDatabaseMetadata. The response field type is Database, if successful.
		 * Patch v1/{name}
		 * @param {string} name Required. The name of the database. Values are of the form `projects//instances//databases/`, where `` is as specified in the `CREATE DATABASE` statement. This name can be passed to other API methods to identify the database.
		 * @param {string} updateMask Required. The list of fields to update. Currently, only `enable_drop_protection` field can be updated.
		 * @return {Operation} Successful response
		 */
		Spanner_projects_instances_databases_patch(name: string, updateMask: string | null | undefined, requestBody: Database): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request a specific scan with Database-specific data for Cloud Key Visualizer.
		 * Get v1/{name}/scans
		 * @param {string} name Required. The unique name of the scan containing the requested information, specific to the Database service implementing this interface.
		 * @param {string} endTime The upper bound for the time range to retrieve Scan data for.
		 * @param {string} startTime These fields restrict the Database-specific information returned in the `Scan.data` field. If a `View` is provided that does not include the `Scan.data` field, these are ignored. This range of time must be entirely contained within the defined time range of the targeted scan. The lower bound for the time range to retrieve Scan data for.
		 * @param {Spanner_projects_instances_databases_getScansView} view Specifies which parts of the Scan should be returned in the response. Note, if left unspecified, the FULL view is assumed.
		 * @return {Scan} Successful response
		 */
		Spanner_projects_instances_databases_getScans(name: string, endTime: string | null | undefined, startTime: string | null | undefined, view: Spanner_projects_instances_databases_getScansView | null | undefined): Observable<Scan> {
			return this.http.get<Scan>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/scans&endTime=' + (endTime == null ? '' : encodeURIComponent(endTime)) + '&startTime=' + (startTime == null ? '' : encodeURIComponent(startTime)) + '&view=' + view, {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Spanner_projects_instances_operations_cancel(name: string): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', null, {});
		}

		/**
		 * Return available scans given a Database-specific resource name.
		 * Get v1/{parent}
		 * @param {string} parent Required. The unique name of the parent resource, specific to the Database service implementing this interface.
		 * @param {string} filter A filter expression to restrict the results based on information present in the available Scan collection. The filter applies to all fields within the Scan message except for `data`.
		 * @param {number} pageSize The maximum number of items to return.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @param {Spanner_projects_instances_databases_getScansView} view Specifies which parts of the Scan should be returned in the response. Note, only the SUMMARY view (the default) is currently supported for ListScans.
		 * @return {ListScansResponse} Successful response
		 */
		Spanner_scans_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Spanner_projects_instances_databases_getScansView | null | undefined): Observable<ListScansResponse> {
			return this.http.get<ListScansResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Lists the backup long-running operations in the given instance. A backup operation has a name of the form `projects//instances//backups//operations/`. The long-running operation metadata field type `metadata.type_url` describes the type of the metadata. Operations returned include those that have completed/failed/canceled within the last 7 days, and pending operations. Operations returned are ordered by `operation.metadata.value.progress.start_time` in descending order starting from the most recently started operation.
		 * Get v1/{parent}/backupOperations
		 * @param {string} parent Required. The instance of the backup operations. Values are of the form `projects//instances/`.
		 * @param {string} filter An expression that filters the list of returned backup operations. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`. Colon `:` is the contains operator. Filter rules are not case sensitive. The following fields in the operation are eligible for filtering: * `name` - The name of the long-running operation * `done` - False if the operation is in progress, else true. * `metadata.@type` - the type of metadata. For example, the type string for CreateBackupMetadata is `type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata`. * `metadata.` - any field in metadata.value. `metadata.@type` must be specified first if filtering on metadata fields. * `error` - Error associated with the long-running operation. * `response.@type` - the type of response. * `response.` - any field in response.value. You can combine multiple expressions by enclosing each expression in parentheses. By default, expressions are combined with AND logic, but you can specify AND, OR, and NOT logic explicitly. Here are a few examples: * `done:true` - The operation is complete. * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata) AND` \ `metadata.database:prod` - Returns operations where: * The operation's metadata type is CreateBackupMetadata. * The source database name of backup contains the string "prod". * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata) AND` \ `(metadata.name:howl) AND` \ `(metadata.progress.start_time < \"2018-03-28T14:50:00Z\") AND` \ `(error:*)` - Returns operations where: * The operation's metadata type is CreateBackupMetadata. * The backup name contains the string "howl". * The operation started before 2018-03-28T14:50:00Z. * The operation resulted in an error. * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CopyBackupMetadata) AND` \ `(metadata.source_backup:test) AND` \ `(metadata.progress.start_time < \"2022-01-18T14:50:00Z\") AND` \ `(error:*)` - Returns operations where: * The operation's metadata type is CopyBackupMetadata. * The source backup name contains the string "test". * The operation started before 2022-01-18T14:50:00Z. * The operation resulted in an error. * `((metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata) AND` \ `(metadata.database:test_db)) OR` \ `((metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CopyBackupMetadata) AND` \ `(metadata.source_backup:test_bkp)) AND` \ `(error:*)` - Returns operations where: * The operation's metadata matches either of criteria: * The operation's metadata type is CreateBackupMetadata AND the source database name of the backup contains the string "test_db" * The operation's metadata type is CopyBackupMetadata AND the source backup name contains the string "test_bkp" * The operation resulted in an error.
		 * @param {number} pageSize Number of operations to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
		 * @param {string} pageToken If non-empty, `page_token` should contain a next_page_token from a previous ListBackupOperationsResponse to the same `parent` and with the same `filter`.
		 * @return {ListBackupOperationsResponse} Successful response
		 */
		Spanner_projects_instances_backupOperations_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListBackupOperationsResponse> {
			return this.http.get<ListBackupOperationsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/backupOperations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists completed and pending backups. Backups returned are ordered by `create_time` in descending order, starting from the most recent `create_time`.
		 * Get v1/{parent}/backups
		 * @param {string} parent Required. The instance to list backups from. Values are of the form `projects//instances/`.
		 * @param {string} filter An expression that filters the list of returned backups. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`. Colon `:` is the contains operator. Filter rules are not case sensitive. The following fields in the Backup are eligible for filtering: * `name` * `database` * `state` * `create_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `expire_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `version_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `size_bytes` You can combine multiple expressions by enclosing each expression in parentheses. By default, expressions are combined with AND logic, but you can specify AND, OR, and NOT logic explicitly. Here are a few examples: * `name:Howl` - The backup's name contains the string "howl". * `database:prod` - The database's name contains the string "prod". * `state:CREATING` - The backup is pending creation. * `state:READY` - The backup is fully created and ready for use. * `(name:howl) AND (create_time < \"2018-03-28T14:50:00Z\")` - The backup name contains the string "howl" and `create_time` of the backup is before 2018-03-28T14:50:00Z. * `expire_time < \"2018-03-28T14:50:00Z\"` - The backup `expire_time` is before 2018-03-28T14:50:00Z. * `size_bytes > 10000000000` - The backup's size is greater than 10GB
		 * @param {number} pageSize Number of backups to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
		 * @param {string} pageToken If non-empty, `page_token` should contain a next_page_token from a previous ListBackupsResponse to the same `parent` and with the same `filter`.
		 * @return {ListBackupsResponse} Successful response
		 */
		Spanner_projects_instances_backups_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListBackupsResponse> {
			return this.http.get<ListBackupsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/backups&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts creating a new Cloud Spanner Backup. The returned backup long-running operation will have a name of the format `projects//instances//backups//operations/` and can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup. There can be only one pending backup creation per database. Backup creation of different databases can run concurrently.
		 * Post v1/{parent}/backups
		 * @param {string} parent Required. The name of the instance in which the backup will be created. This must be the same instance that contains the database the backup will be created from. The backup will be stored in the location(s) specified in the instance configuration of this instance. Values are of the form `projects//instances/`.
		 * @param {string} backupId Required. The id of the backup to be created. The `backup_id` appended to `parent` forms the full backup name of the form `projects//instances//backups/`.
		 * @param {Spanner_projects_instances_backups_createEncryptionConfig_encryptionType} encryptionConfig_encryptionType Required. The encryption type of the backup.
		 * @param {string} encryptionConfig_kmsKeyName Optional. The Cloud KMS key that will be used to protect the backup. This field should be set only when encryption_type is `CUSTOMER_MANAGED_ENCRYPTION`. Values are of the form `projects//locations//keyRings//cryptoKeys/`.
		 * @return {Operation} Successful response
		 */
		Spanner_projects_instances_backups_create(parent: string, backupId: string | null | undefined, encryptionConfig_encryptionType: Spanner_projects_instances_backups_createEncryptionConfig_encryptionType | null | undefined, encryptionConfig_kmsKeyName: string | null | undefined, requestBody: Backup): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/backups&backupId=' + (backupId == null ? '' : encodeURIComponent(backupId)) + '&encryptionConfig_encryptionType=' + encryptionConfig_encryptionType + '&encryptionConfig_kmsKeyName=' + (encryptionConfig_kmsKeyName == null ? '' : encodeURIComponent(encryptionConfig_kmsKeyName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts copying a Cloud Spanner Backup. The returned backup long-running operation will have a name of the format `projects//instances//backups//operations/` and can be used to track copying of the backup. The operation is associated with the destination backup. The metadata field type is CopyBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the copying and delete the destination backup. Concurrent CopyBackup requests can run on the same source backup.
		 * Post v1/{parent}/backups:copy
		 * @param {string} parent Required. The name of the destination instance that will contain the backup copy. Values are of the form: `projects//instances/`.
		 * @return {Operation} Successful response
		 */
		Spanner_projects_instances_backups_copy(parent: string, requestBody: CopyBackupRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/backups:copy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists database longrunning-operations. A database operation has a name of the form `projects//instances//databases//operations/`. The long-running operation metadata field type `metadata.type_url` describes the type of the metadata. Operations returned include those that have completed/failed/canceled within the last 7 days, and pending operations.
		 * Get v1/{parent}/databaseOperations
		 * @param {string} parent Required. The instance of the database operations. Values are of the form `projects//instances/`.
		 * @param {string} filter An expression that filters the list of returned operations. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`. Colon `:` is the contains operator. Filter rules are not case sensitive. The following fields in the Operation are eligible for filtering: * `name` - The name of the long-running operation * `done` - False if the operation is in progress, else true. * `metadata.@type` - the type of metadata. For example, the type string for RestoreDatabaseMetadata is `type.googleapis.com/google.spanner.admin.database.v1.RestoreDatabaseMetadata`. * `metadata.` - any field in metadata.value. `metadata.@type` must be specified first, if filtering on metadata fields. * `error` - Error associated with the long-running operation. * `response.@type` - the type of response. * `response.` - any field in response.value. You can combine multiple expressions by enclosing each expression in parentheses. By default, expressions are combined with AND logic. However, you can specify AND, OR, and NOT logic explicitly. Here are a few examples: * `done:true` - The operation is complete. * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.RestoreDatabaseMetadata) AND` \ `(metadata.source_type:BACKUP) AND` \ `(metadata.backup_info.backup:backup_howl) AND` \ `(metadata.name:restored_howl) AND` \ `(metadata.progress.start_time < \"2018-03-28T14:50:00Z\") AND` \ `(error:*)` - Return operations where: * The operation's metadata type is RestoreDatabaseMetadata. * The database is restored from a backup. * The backup name contains "backup_howl". * The restored database's name contains "restored_howl". * The operation started before 2018-03-28T14:50:00Z. * The operation resulted in an error.
		 * @param {number} pageSize Number of operations to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
		 * @param {string} pageToken If non-empty, `page_token` should contain a next_page_token from a previous ListDatabaseOperationsResponse to the same `parent` and with the same `filter`.
		 * @return {ListDatabaseOperationsResponse} Successful response
		 */
		Spanner_projects_instances_databaseOperations_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDatabaseOperationsResponse> {
			return this.http.get<ListDatabaseOperationsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/databaseOperations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists Cloud Spanner database roles.
		 * Get v1/{parent}/databaseRoles
		 * @param {string} parent Required. The database whose roles should be listed. Values are of the form `projects//instances//databases/`.
		 * @param {number} pageSize Number of database roles to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
		 * @param {string} pageToken If non-empty, `page_token` should contain a next_page_token from a previous ListDatabaseRolesResponse.
		 * @return {ListDatabaseRolesResponse} Successful response
		 */
		Spanner_projects_instances_databases_databaseRoles_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDatabaseRolesResponse> {
			return this.http.get<ListDatabaseRolesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/databaseRoles&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists Cloud Spanner databases.
		 * Get v1/{parent}/databases
		 * @param {string} parent Required. The instance whose databases should be listed. Values are of the form `projects//instances/`.
		 * @param {number} pageSize Number of databases to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
		 * @param {string} pageToken If non-empty, `page_token` should contain a next_page_token from a previous ListDatabasesResponse.
		 * @return {ListDatabasesResponse} Successful response
		 */
		Spanner_projects_instances_databases_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDatabasesResponse> {
			return this.http.get<ListDatabasesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/databases&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Cloud Spanner database and starts to prepare it for serving. The returned long-running operation will have a name of the format `/operations/` and can be used to track preparation of the database. The metadata field type is CreateDatabaseMetadata. The response field type is Database, if successful.
		 * Post v1/{parent}/databases
		 * @param {string} parent Required. The name of the instance that will serve the new database. Values are of the form `projects//instances/`.
		 * @return {Operation} Successful response
		 */
		Spanner_projects_instances_databases_create(parent: string, requestBody: CreateDatabaseRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/databases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a new database by restoring from a completed backup. The new database must be in the same project and in an instance with the same instance configuration as the instance containing the backup. The returned database long-running operation has a name of the format `projects//instances//databases//operations/`, and can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreDatabaseMetadata. The response type is Database, if successful. Cancelling the returned operation will stop the restore and delete the database. There can be only one database being restored into an instance at a time. Once the restore operation completes, a new restore operation can be initiated, without waiting for the optimize operation associated with the first restore to complete.
		 * Post v1/{parent}/databases:restore
		 * @param {string} parent Required. The name of the instance in which to create the restored database. This instance must be in the same project and have the same instance configuration as the instance containing the source backup. Values are of the form `projects//instances/`.
		 * @return {Operation} Successful response
		 */
		Spanner_projects_instances_databases_restore(parent: string, requestBody: RestoreDatabaseRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/databases:restore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the user-managed instance config long-running operations in the given project. An instance config operation has a name of the form `projects//instanceConfigs//operations/`. The long-running operation metadata field type `metadata.type_url` describes the type of the metadata. Operations returned include those that have completed/failed/canceled within the last 7 days, and pending operations. Operations returned are ordered by `operation.metadata.value.start_time` in descending order starting from the most recently started operation.
		 * Get v1/{parent}/instanceConfigOperations
		 * @param {string} parent Required. The project of the instance config operations. Values are of the form `projects/`.
		 * @param {string} filter An expression that filters the list of returned operations. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`. Colon `:` is the contains operator. Filter rules are not case sensitive. The following fields in the Operation are eligible for filtering: * `name` - The name of the long-running operation * `done` - False if the operation is in progress, else true. * `metadata.@type` - the type of metadata. For example, the type string for CreateInstanceConfigMetadata is `type.googleapis.com/google.spanner.admin.instance.v1.CreateInstanceConfigMetadata`. * `metadata.` - any field in metadata.value. `metadata.@type` must be specified first, if filtering on metadata fields. * `error` - Error associated with the long-running operation. * `response.@type` - the type of response. * `response.` - any field in response.value. You can combine multiple expressions by enclosing each expression in parentheses. By default, expressions are combined with AND logic. However, you can specify AND, OR, and NOT logic explicitly. Here are a few examples: * `done:true` - The operation is complete. * `(metadata.@type=` \ `type.googleapis.com/google.spanner.admin.instance.v1.CreateInstanceConfigMetadata) AND` \ `(metadata.instance_config.name:custom-config) AND` \ `(metadata.progress.start_time < \"2021-03-28T14:50:00Z\") AND` \ `(error:*)` - Return operations where: * The operation's metadata type is CreateInstanceConfigMetadata. * The instance config name contains "custom-config". * The operation started before 2021-03-28T14:50:00Z. * The operation resulted in an error.
		 * @param {number} pageSize Number of operations to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
		 * @param {string} pageToken If non-empty, `page_token` should contain a next_page_token from a previous ListInstanceConfigOperationsResponse to the same `parent` and with the same `filter`.
		 * @return {ListInstanceConfigOperationsResponse} Successful response
		 */
		Spanner_projects_instanceConfigOperations_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListInstanceConfigOperationsResponse> {
			return this.http.get<ListInstanceConfigOperationsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instanceConfigOperations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists the supported instance configurations for a given project.
		 * Get v1/{parent}/instanceConfigs
		 * @param {string} parent Required. The name of the project for which a list of supported instance configurations is requested. Values are of the form `projects/`.
		 * @param {number} pageSize Number of instance configurations to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
		 * @param {string} pageToken If non-empty, `page_token` should contain a next_page_token from a previous ListInstanceConfigsResponse.
		 * @return {ListInstanceConfigsResponse} Successful response
		 */
		Spanner_projects_instanceConfigs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListInstanceConfigsResponse> {
			return this.http.get<ListInstanceConfigsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instanceConfigs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an instance config and begins preparing it to be used. The returned long-running operation can be used to track the progress of preparing the new instance config. The instance config name is assigned by the caller. If the named instance config already exists, `CreateInstanceConfig` returns `ALREADY_EXISTS`. Immediately after the request returns: * The instance config is readable via the API, with all requested attributes. The instance config's reconciling field is set to true. Its state is `CREATING`. While the operation is pending: * Cancelling the operation renders the instance config immediately unreadable via the API. * Except for deleting the creating resource, all other attempts to modify the instance config are rejected. Upon completion of the returned operation: * Instances can be created using the instance configuration. * The instance config's reconciling field becomes false. Its state becomes `READY`. The returned long-running operation will have a name of the format `/operations/` and can be used to track creation of the instance config. The metadata field type is CreateInstanceConfigMetadata. The response field type is InstanceConfig, if successful. Authorization requires `spanner.instanceConfigs.create` permission on the resource parent.
		 * Post v1/{parent}/instanceConfigs
		 * @param {string} parent Required. The name of the project in which to create the instance config. Values are of the form `projects/`.
		 * @return {Operation} Successful response
		 */
		Spanner_projects_instanceConfigs_create(parent: string, requestBody: CreateInstanceConfigRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instanceConfigs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all instances in the given project.
		 * Get v1/{parent}/instances
		 * @param {string} parent Required. The name of the project for which a list of instances is requested. Values are of the form `projects/`.
		 * @param {string} filter An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `name` * `display_name` * `labels.key` where key is the name of a label Some examples of using filters are: * `name:*` --> The instance has a name. * `name:Howl` --> The instance's name contains the string "howl". * `name:HOWL` --> Equivalent to above. * `NAME:howl` --> Equivalent to above. * `labels.env:*` --> The instance has the label "env". * `labels.env:dev` --> The instance has the label "env" and the value of the label contains the string "dev". * `name:howl labels.env:dev` --> The instance's name contains "howl" and it has the label "env" with its value containing "dev".
		 * @param {string} instanceDeadline Deadline used while retrieving metadata for instances. Instances whose metadata cannot be retrieved within this deadline will be added to unreachable in ListInstancesResponse.
		 * @param {number} pageSize Number of instances to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
		 * @param {string} pageToken If non-empty, `page_token` should contain a next_page_token from a previous ListInstancesResponse.
		 * @return {ListInstancesResponse} Successful response
		 */
		Spanner_projects_instances_list(parent: string, filter: string | null | undefined, instanceDeadline: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListInstancesResponse> {
			return this.http.get<ListInstancesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&instanceDeadline=' + (instanceDeadline == null ? '' : encodeURIComponent(instanceDeadline)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an instance and begins preparing it to begin serving. The returned long-running operation can be used to track the progress of preparing the new instance. The instance name is assigned by the caller. If the named instance already exists, `CreateInstance` returns `ALREADY_EXISTS`. Immediately upon completion of this request: * The instance is readable via the API, with all requested attributes but no allocated resources. Its state is `CREATING`. Until completion of the returned operation: * Cancelling the operation renders the instance immediately unreadable via the API. * The instance can be deleted. * All other attempts to modify the instance are rejected. Upon completion of the returned operation: * Billing for all successfully-allocated resources begins (some types may have lower than the requested levels). * Databases can be created in the instance. * The instance's allocated resource levels are readable via the API. * The instance's state becomes `READY`. The returned long-running operation will have a name of the format `/operations/` and can be used to track creation of the instance. The metadata field type is CreateInstanceMetadata. The response field type is Instance, if successful.
		 * Post v1/{parent}/instances
		 * @param {string} parent Required. The name of the project in which to create the instance. Values are of the form `projects/`.
		 * @return {Operation} Successful response
		 */
		Spanner_projects_instances_create(parent: string, requestBody: CreateInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a database or backup resource. Returns an empty policy if a database or backup exists but does not have a policy set. Authorization requires `spanner.databases.getIamPolicy` permission on resource. For backups, authorization requires `spanner.backups.getIamPolicy` permission on resource.
		 * Post v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The Cloud Spanner resource for which the policy is being retrieved. The format is `projects//instances/` for instance resources and `projects//instances//databases/` for database resources.
		 * @return {Policy} Successful response
		 */
		Spanner_projects_instances_databases_getIamPolicy(resource: string, requestBody: GetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the access control policy on a database or backup resource. Replaces any existing policy. Authorization requires `spanner.databases.setIamPolicy` permission on resource. For backups, authorization requires `spanner.backups.setIamPolicy` permission on resource.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The Cloud Spanner resource for which the policy is being set. The format is `projects//instances/` for instance resources and `projects//instances//databases/` for databases resources.
		 * @return {Policy} Successful response
		 */
		Spanner_projects_instances_databases_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that the caller has on the specified database or backup resource. Attempting this RPC on a non-existent Cloud Spanner database will result in a NOT_FOUND error if the user has `spanner.databases.list` permission on the containing Cloud Spanner instance. Otherwise returns an empty set of permissions. Calling this method on a backup that does not exist will result in a NOT_FOUND error if the user has `spanner.backups.list` permission on the containing instance.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The Cloud Spanner resource for which permissions are being tested. The format is `projects//instances/` for instance resources and `projects//instances//databases/` for database resources.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Spanner_projects_instances_databases_databaseRoles_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Batches the supplied mutation groups in a collection of efficient transactions. All mutations in a group are committed atomically. However, mutations across groups can be committed non-atomically in an unspecified order and thus, they must be independent of each other. Partial failure is possible, i.e., some groups may have been committed successfully, while some may have failed. The results of individual batches are streamed into the response as the batches are applied. BatchWrite requests are not replay protected, meaning that each mutation group may be applied more than once. Replays of non-idempotent mutations may have undesirable effects. For example, replays of an insert mutation may produce an already exists error or if you use generated or commit timestamp-based keys, it may result in additional rows being added to the mutation's table. We recommend structuring your mutation groups to be idempotent to avoid this issue.
		 * Post v1/{session}:batchWrite
		 * @param {string} session Required. The session in which the batch request is to be run.
		 * @return {BatchWriteResponse} Successful response
		 */
		Spanner_projects_instances_databases_sessions_batchWrite(session: string, requestBody: BatchWriteRequest): Observable<BatchWriteResponse> {
			return this.http.post<BatchWriteResponse>(this.baseUri + 'v1/' + (session == null ? '' : encodeURIComponent(session)) + ':batchWrite', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Begins a new transaction. This step can often be skipped: Read, ExecuteSql and Commit can begin a new transaction as a side-effect.
		 * Post v1/{session}:beginTransaction
		 * @param {string} session Required. The session in which the transaction runs.
		 * @return {Transaction} Successful response
		 */
		Spanner_projects_instances_databases_sessions_beginTransaction(session: string, requestBody: BeginTransactionRequest): Observable<Transaction> {
			return this.http.post<Transaction>(this.baseUri + 'v1/' + (session == null ? '' : encodeURIComponent(session)) + ':beginTransaction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Commits a transaction. The request includes the mutations to be applied to rows in the database. `Commit` might return an `ABORTED` error. This can occur at any time; commonly, the cause is conflicts with concurrent transactions. However, it can also happen for a variety of other reasons. If `Commit` returns `ABORTED`, the caller should re-attempt the transaction from the beginning, re-using the same session. On very rare occasions, `Commit` might return `UNKNOWN`. This can happen, for example, if the client job experiences a 1+ hour networking failure. At that point, Cloud Spanner has lost track of the transaction outcome and we recommend that you perform another read from the database to see the state of things as they are now.
		 * Post v1/{session}:commit
		 * @param {string} session Required. The session in which the transaction to be committed is running.
		 * @return {CommitResponse} Successful response
		 */
		Spanner_projects_instances_databases_sessions_commit(session: string, requestBody: CommitRequest): Observable<CommitResponse> {
			return this.http.post<CommitResponse>(this.baseUri + 'v1/' + (session == null ? '' : encodeURIComponent(session)) + ':commit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Executes a batch of SQL DML statements. This method allows many statements to be run with lower latency than submitting them sequentially with ExecuteSql. Statements are executed in sequential order. A request can succeed even if a statement fails. The ExecuteBatchDmlResponse.status field in the response provides information about the statement that failed. Clients must inspect this field to determine whether an error occurred. Execution stops after the first failed statement; the remaining statements are not executed.
		 * Post v1/{session}:executeBatchDml
		 * @param {string} session Required. The session in which the DML statements should be performed.
		 * @return {ExecuteBatchDmlResponse} Successful response
		 */
		Spanner_projects_instances_databases_sessions_executeBatchDml(session: string, requestBody: ExecuteBatchDmlRequest): Observable<ExecuteBatchDmlResponse> {
			return this.http.post<ExecuteBatchDmlResponse>(this.baseUri + 'v1/' + (session == null ? '' : encodeURIComponent(session)) + ':executeBatchDml', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Executes an SQL statement, returning all results in a single reply. This method cannot be used to return a result set larger than 10 MiB; if the query yields more data than that, the query fails with a `FAILED_PRECONDITION` error. Operations inside read-write transactions might return `ABORTED`. If this occurs, the application should restart the transaction from the beginning. See Transaction for more details. Larger result sets can be fetched in streaming fashion by calling ExecuteStreamingSql instead.
		 * Post v1/{session}:executeSql
		 * @param {string} session Required. The session in which the SQL query should be performed.
		 * @return {ResultSet} Successful response
		 */
		Spanner_projects_instances_databases_sessions_executeSql(session: string, requestBody: ExecuteSqlRequest): Observable<ResultSet> {
			return this.http.post<ResultSet>(this.baseUri + 'v1/' + (session == null ? '' : encodeURIComponent(session)) + ':executeSql', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Like ExecuteSql, except returns the result set as a stream. Unlike ExecuteSql, there is no limit on the size of the returned result set. However, no individual row in the result set can exceed 100 MiB, and no column value can exceed 10 MiB.
		 * Post v1/{session}:executeStreamingSql
		 * @param {string} session Required. The session in which the SQL query should be performed.
		 * @return {PartialResultSet} Successful response
		 */
		Spanner_projects_instances_databases_sessions_executeStreamingSql(session: string, requestBody: ExecuteSqlRequest): Observable<PartialResultSet> {
			return this.http.post<PartialResultSet>(this.baseUri + 'v1/' + (session == null ? '' : encodeURIComponent(session)) + ':executeStreamingSql', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a set of partition tokens that can be used to execute a query operation in parallel. Each of the returned partition tokens can be used by ExecuteStreamingSql to specify a subset of the query result to read. The same session and read-only transaction must be used by the PartitionQueryRequest used to create the partition tokens and the ExecuteSqlRequests that use the partition tokens. Partition tokens become invalid when the session used to create them is deleted, is idle for too long, begins a new transaction, or becomes too old. When any of these happen, it is not possible to resume the query, and the whole operation must be restarted from the beginning.
		 * Post v1/{session}:partitionQuery
		 * @param {string} session Required. The session used to create the partitions.
		 * @return {PartitionResponse} Successful response
		 */
		Spanner_projects_instances_databases_sessions_partitionQuery(session: string, requestBody: PartitionQueryRequest): Observable<PartitionResponse> {
			return this.http.post<PartitionResponse>(this.baseUri + 'v1/' + (session == null ? '' : encodeURIComponent(session)) + ':partitionQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a set of partition tokens that can be used to execute a read operation in parallel. Each of the returned partition tokens can be used by StreamingRead to specify a subset of the read result to read. The same session and read-only transaction must be used by the PartitionReadRequest used to create the partition tokens and the ReadRequests that use the partition tokens. There are no ordering guarantees on rows returned among the returned partition tokens, or even within each individual StreamingRead call issued with a partition_token. Partition tokens become invalid when the session used to create them is deleted, is idle for too long, begins a new transaction, or becomes too old. When any of these happen, it is not possible to resume the read, and the whole operation must be restarted from the beginning.
		 * Post v1/{session}:partitionRead
		 * @param {string} session Required. The session used to create the partitions.
		 * @return {PartitionResponse} Successful response
		 */
		Spanner_projects_instances_databases_sessions_partitionRead(session: string, requestBody: PartitionReadRequest): Observable<PartitionResponse> {
			return this.http.post<PartitionResponse>(this.baseUri + 'v1/' + (session == null ? '' : encodeURIComponent(session)) + ':partitionRead', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reads rows from the database using key lookups and scans, as a simple key/value style alternative to ExecuteSql. This method cannot be used to return a result set larger than 10 MiB; if the read matches more data than that, the read fails with a `FAILED_PRECONDITION` error. Reads inside read-write transactions might return `ABORTED`. If this occurs, the application should restart the transaction from the beginning. See Transaction for more details. Larger result sets can be yielded in streaming fashion by calling StreamingRead instead.
		 * Post v1/{session}:read
		 * @param {string} session Required. The session in which the read should be performed.
		 * @return {ResultSet} Successful response
		 */
		Spanner_projects_instances_databases_sessions_read(session: string, requestBody: ReadRequest): Observable<ResultSet> {
			return this.http.post<ResultSet>(this.baseUri + 'v1/' + (session == null ? '' : encodeURIComponent(session)) + ':read', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Rolls back a transaction, releasing any locks it holds. It is a good idea to call this for any transaction that includes one or more Read or ExecuteSql requests and ultimately decides not to commit. `Rollback` returns `OK` if it successfully aborts the transaction, the transaction was already aborted, or the transaction is not found. `Rollback` never returns `ABORTED`.
		 * Post v1/{session}:rollback
		 * @param {string} session Required. The session in which the transaction to roll back is running.
		 * @return {Empty} Successful response
		 */
		Spanner_projects_instances_databases_sessions_rollback(session: string, requestBody: RollbackRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (session == null ? '' : encodeURIComponent(session)) + ':rollback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Like Read, except returns the result set as a stream. Unlike Read, there is no limit on the size of the returned result set. However, no individual row in the result set can exceed 100 MiB, and no column value can exceed 10 MiB.
		 * Post v1/{session}:streamingRead
		 * @param {string} session Required. The session in which the read should be performed.
		 * @return {PartialResultSet} Successful response
		 */
		Spanner_projects_instances_databases_sessions_streamingRead(session: string, requestBody: ReadRequest): Observable<PartialResultSet> {
			return this.http.post<PartialResultSet>(this.baseUri + 'v1/' + (session == null ? '' : encodeURIComponent(session)) + ':streamingRead', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Spanner_projects_instances_databases_getScansView { VIEW_UNSPECIFIED = 'VIEW_UNSPECIFIED', SUMMARY = 'SUMMARY', FULL = 'FULL' }

	export enum Spanner_projects_instances_backups_createEncryptionConfig_encryptionType { ENCRYPTION_TYPE_UNSPECIFIED = 'ENCRYPTION_TYPE_UNSPECIFIED', USE_DATABASE_ENCRYPTION = 'USE_DATABASE_ENCRYPTION', GOOGLE_DEFAULT_ENCRYPTION = 'GOOGLE_DEFAULT_ENCRYPTION', CUSTOMER_MANAGED_ENCRYPTION = 'CUSTOMER_MANAGED_ENCRYPTION' }

}

