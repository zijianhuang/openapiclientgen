import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Describes a BigQuery dataset that was created by a link. */
	export interface BigQueryDataset {

		/** Output only. The full resource name of the BigQuery dataset. The DATASET_ID will match the ID of the link, so the link must match the naming restrictions of BigQuery datasets (alphanumeric characters and underscores only).The dataset will have a resource path of "bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID" */
		datasetId?: string | null;
	}

	/** Describes a BigQuery dataset that was created by a link. */
	export interface BigQueryDatasetFormProperties {

		/** Output only. The full resource name of the BigQuery dataset. The DATASET_ID will match the ID of the link, so the link must match the naming restrictions of BigQuery datasets (alphanumeric characters and underscores only).The dataset will have a resource path of "bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID" */
		datasetId: FormControl<string | null | undefined>,
	}
	export function CreateBigQueryDatasetFormGroup() {
		return new FormGroup<BigQueryDatasetFormProperties>({
			datasetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options that change functionality of a sink exporting data to BigQuery. */
	export interface BigQueryOptions {

		/** Optional. Whether to use BigQuery's partition tables (https://cloud.google.com/bigquery/docs/partitioned-tables). By default, Cloud Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax (https://cloud.google.com/bigquery/docs/querying-partitioned-tables) has to be used instead. In both cases, tables are sharded based on UTC timezone. */
		usePartitionedTables?: boolean | null;

		/** Output only. True if new timestamp column based partitioning is in use, false if legacy ingress-time partitioning is in use.All new sinks will have this field set true and will use timestamp column based partitioning. If use_partitioned_tables is false, this value has no meaning and will be false. Legacy sinks using partitioned tables will have this field set to false. */
		usesTimestampColumnPartitioning?: boolean | null;
	}

	/** Options that change functionality of a sink exporting data to BigQuery. */
	export interface BigQueryOptionsFormProperties {

		/** Optional. Whether to use BigQuery's partition tables (https://cloud.google.com/bigquery/docs/partitioned-tables). By default, Cloud Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax (https://cloud.google.com/bigquery/docs/querying-partitioned-tables) has to be used instead. In both cases, tables are sharded based on UTC timezone. */
		usePartitionedTables: FormControl<boolean | null | undefined>,

		/** Output only. True if new timestamp column based partitioning is in use, false if legacy ingress-time partitioning is in use.All new sinks will have this field set true and will use timestamp column based partitioning. If use_partitioned_tables is false, this value has no meaning and will be false. Legacy sinks using partitioned tables will have this field set to false. */
		usesTimestampColumnPartitioning: FormControl<boolean | null | undefined>,
	}
	export function CreateBigQueryOptionsFormGroup() {
		return new FormGroup<BigQueryOptionsFormProperties>({
			usePartitionedTables: new FormControl<boolean | null | undefined>(undefined),
			usesTimestampColumnPartitioning: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Metadata for LongRunningUpdateBucket Operations. */
	export interface BucketMetadata {

		/** The parameters to CreateBucket. */
		createBucketRequest?: CreateBucketRequest;

		/** The end time of an operation. */
		endTime?: string | null;

		/** The create time of an operation. */
		startTime?: string | null;

		/** Output only. State of an operation. */
		state?: BucketMetadataState | null;

		/** The parameters to UpdateBucket. */
		updateBucketRequest?: UpdateBucketRequest;
	}

	/** Metadata for LongRunningUpdateBucket Operations. */
	export interface BucketMetadataFormProperties {

		/** The end time of an operation. */
		endTime: FormControl<string | null | undefined>,

		/** The create time of an operation. */
		startTime: FormControl<string | null | undefined>,

		/** Output only. State of an operation. */
		state: FormControl<BucketMetadataState | null | undefined>,
	}
	export function CreateBucketMetadataFormGroup() {
		return new FormGroup<BucketMetadataFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<BucketMetadataState | null | undefined>(undefined),
		});

	}


	/** The parameters to CreateBucket. */
	export interface CreateBucketRequest {

		/** Describes a repository in which log entries are stored. */
		bucket?: LogBucket;

		/** Required. A client-assigned identifier such as "my-bucket". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. */
		bucketId?: string | null;

		/** Required. The resource in which to create the log bucket: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example:"projects/my-project/locations/global" */
		parent?: string | null;
	}

	/** The parameters to CreateBucket. */
	export interface CreateBucketRequestFormProperties {

		/** Required. A client-assigned identifier such as "my-bucket". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. */
		bucketId: FormControl<string | null | undefined>,

		/** Required. The resource in which to create the log bucket: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example:"projects/my-project/locations/global" */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateCreateBucketRequestFormGroup() {
		return new FormGroup<CreateBucketRequestFormProperties>({
			bucketId: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a repository in which log entries are stored. */
	export interface LogBucket {

		/** Optional. Whether log analytics is enabled for this bucket.Once enabled, log analytics features cannot be disabled. */
		analyticsEnabled?: boolean | null;

		/** Describes the customer-managed encryption key (CMEK) settings associated with a project, folder, organization, billing account, or flexible resource.Note: CMEK for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information. */
		cmekSettings?: CmekSettings;

		/** Output only. The creation timestamp of the bucket. This is not set for any of the default buckets. */
		createTime?: string | null;

		/** Optional. Describes this bucket. */
		description?: string | null;

		/** Optional. A list of indexed fields and related configuration data. */
		indexConfigs?: Array<IndexConfig>;

		/** Output only. The bucket lifecycle state. */
		lifecycleState?: LogBucketLifecycleState | null;

		/** Optional. Whether the bucket is locked.The retention period on a locked bucket cannot be changed. Locked buckets may only be deleted if they are empty. */
		locked?: boolean | null;

		/** Output only. The resource name of the bucket.For example:projects/my-project/locations/global/buckets/my-bucketFor a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support)For the location of global it is unspecified where log entries are actually stored.After a bucket has been created, the location cannot be changed. */
		name?: string | null;

		/** Optional. Log entry field paths that are denied access in this bucket.The following fields and their children are eligible: textPayload, jsonPayload, protoPayload, httpRequest, labels, sourceLocation.Restricting a repeated field will restrict all values. Adding a parent will block all child fields. (e.g. foo.bar will block foo.bar.baz) */
		restrictedFields?: Array<string>;

		/**
		 * Optional. Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionDays?: number | null;

		/** Output only. The last update timestamp of the bucket. */
		updateTime?: string | null;
	}

	/** Describes a repository in which log entries are stored. */
	export interface LogBucketFormProperties {

		/** Optional. Whether log analytics is enabled for this bucket.Once enabled, log analytics features cannot be disabled. */
		analyticsEnabled: FormControl<boolean | null | undefined>,

		/** Output only. The creation timestamp of the bucket. This is not set for any of the default buckets. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Describes this bucket. */
		description: FormControl<string | null | undefined>,

		/** Output only. The bucket lifecycle state. */
		lifecycleState: FormControl<LogBucketLifecycleState | null | undefined>,

		/** Optional. Whether the bucket is locked.The retention period on a locked bucket cannot be changed. Locked buckets may only be deleted if they are empty. */
		locked: FormControl<boolean | null | undefined>,

		/** Output only. The resource name of the bucket.For example:projects/my-project/locations/global/buckets/my-bucketFor a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support)For the location of global it is unspecified where log entries are actually stored.After a bucket has been created, the location cannot be changed. */
		name: FormControl<string | null | undefined>,

		/**
		 * Optional. Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionDays: FormControl<number | null | undefined>,

		/** Output only. The last update timestamp of the bucket. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateLogBucketFormGroup() {
		return new FormGroup<LogBucketFormProperties>({
			analyticsEnabled: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lifecycleState: new FormControl<LogBucketLifecycleState | null | undefined>(undefined),
			locked: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			retentionDays: new FormControl<number | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the customer-managed encryption key (CMEK) settings associated with a project, folder, organization, billing account, or flexible resource.Note: CMEK for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information. */
	export interface CmekSettings {

		/** Optional. The resource name for the configured Cloud KMS key.KMS key name format: "projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]" For example:"projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key"To enable CMEK for the Log Router, set this field to a valid kms_key_name for which the associated service account has the needed cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.The Cloud KMS key used by the Log Router can be updated by changing the kms_key_name to a new valid key name or disabled by setting the key name to an empty string. Encryption operations that are in progress will be completed with the key that was in use when they started. Decryption operations will be completed using the key that was used at the time of encryption unless access to that key has been revoked.To disable CMEK for the Log Router, set this field to an empty string.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information. */
		kmsKeyName?: string | null;

		/** Output only. The CryptoKeyVersion resource name for the configured Cloud KMS key.KMS key name format: "projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]/cryptoKeyVersions/[VERSION]" For example:"projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key/cryptoKeyVersions/1"This is a read-only field used to convey the specific configured CryptoKeyVersion of kms_key that has been configured. It will be populated in cases where the CMEK settings are bound to a single key version.If this field is populated, the kms_key is tied to a specific CryptoKeyVersion. */
		kmsKeyVersionName?: string | null;

		/** Output only. The resource name of the CMEK settings. */
		name?: string | null;

		/** Output only. The service account that will be used by the Log Router to access your Cloud KMS key.Before enabling CMEK for Log Router, you must first assign the cloudkms.cryptoKeyEncrypterDecrypter role to the service account that the Log Router will use to access your Cloud KMS key. Use GetCmekSettings to obtain the service account ID.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information. */
		serviceAccountId?: string | null;
	}

	/** Describes the customer-managed encryption key (CMEK) settings associated with a project, folder, organization, billing account, or flexible resource.Note: CMEK for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information. */
	export interface CmekSettingsFormProperties {

		/** Optional. The resource name for the configured Cloud KMS key.KMS key name format: "projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]" For example:"projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key"To enable CMEK for the Log Router, set this field to a valid kms_key_name for which the associated service account has the needed cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.The Cloud KMS key used by the Log Router can be updated by changing the kms_key_name to a new valid key name or disabled by setting the key name to an empty string. Encryption operations that are in progress will be completed with the key that was in use when they started. Decryption operations will be completed using the key that was used at the time of encryption unless access to that key has been revoked.To disable CMEK for the Log Router, set this field to an empty string.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information. */
		kmsKeyName: FormControl<string | null | undefined>,

		/** Output only. The CryptoKeyVersion resource name for the configured Cloud KMS key.KMS key name format: "projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]/cryptoKeyVersions/[VERSION]" For example:"projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key/cryptoKeyVersions/1"This is a read-only field used to convey the specific configured CryptoKeyVersion of kms_key that has been configured. It will be populated in cases where the CMEK settings are bound to a single key version.If this field is populated, the kms_key is tied to a specific CryptoKeyVersion. */
		kmsKeyVersionName: FormControl<string | null | undefined>,

		/** Output only. The resource name of the CMEK settings. */
		name: FormControl<string | null | undefined>,

		/** Output only. The service account that will be used by the Log Router to access your Cloud KMS key.Before enabling CMEK for Log Router, you must first assign the cloudkms.cryptoKeyEncrypterDecrypter role to the service account that the Log Router will use to access your Cloud KMS key. Use GetCmekSettings to obtain the service account ID.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information. */
		serviceAccountId: FormControl<string | null | undefined>,
	}
	export function CreateCmekSettingsFormGroup() {
		return new FormGroup<CmekSettingsFormProperties>({
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
			kmsKeyVersionName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serviceAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for an indexed field. */
	export interface IndexConfig {

		/** Output only. The timestamp when the index was last modified.This is used to return the timestamp, and will be ignored if supplied during update. */
		createTime?: string | null;

		/** Required. The LogEntry field path to index.Note that some paths are automatically indexed, and other paths are not eligible for indexing. See indexing documentation( https://cloud.google.com/logging/docs/view/advanced-queries#indexed-fields) for details.For example: jsonPayload.request.status */
		fieldPath?: string | null;

		/** Required. The type of data in this index. */
		type?: IndexConfigType | null;
	}

	/** Configuration for an indexed field. */
	export interface IndexConfigFormProperties {

		/** Output only. The timestamp when the index was last modified.This is used to return the timestamp, and will be ignored if supplied during update. */
		createTime: FormControl<string | null | undefined>,

		/** Required. The LogEntry field path to index.Note that some paths are automatically indexed, and other paths are not eligible for indexing. See indexing documentation( https://cloud.google.com/logging/docs/view/advanced-queries#indexed-fields) for details.For example: jsonPayload.request.status */
		fieldPath: FormControl<string | null | undefined>,

		/** Required. The type of data in this index. */
		type: FormControl<IndexConfigType | null | undefined>,
	}
	export function CreateIndexConfigFormGroup() {
		return new FormGroup<IndexConfigFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			fieldPath: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<IndexConfigType | null | undefined>(undefined),
		});

	}

	export enum IndexConfigType { INDEX_TYPE_UNSPECIFIED = 'INDEX_TYPE_UNSPECIFIED', INDEX_TYPE_STRING = 'INDEX_TYPE_STRING', INDEX_TYPE_INTEGER = 'INDEX_TYPE_INTEGER' }

	export enum LogBucketLifecycleState { LIFECYCLE_STATE_UNSPECIFIED = 'LIFECYCLE_STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', DELETE_REQUESTED = 'DELETE_REQUESTED', UPDATING = 'UPDATING', CREATING = 'CREATING', FAILED = 'FAILED' }

	export enum BucketMetadataState { OPERATION_STATE_UNSPECIFIED = 'OPERATION_STATE_UNSPECIFIED', OPERATION_STATE_SCHEDULED = 'OPERATION_STATE_SCHEDULED', OPERATION_STATE_WAITING_FOR_PERMISSIONS = 'OPERATION_STATE_WAITING_FOR_PERMISSIONS', OPERATION_STATE_RUNNING = 'OPERATION_STATE_RUNNING', OPERATION_STATE_SUCCEEDED = 'OPERATION_STATE_SUCCEEDED', OPERATION_STATE_FAILED = 'OPERATION_STATE_FAILED', OPERATION_STATE_CANCELLED = 'OPERATION_STATE_CANCELLED', OPERATION_STATE_PENDING = 'OPERATION_STATE_PENDING' }


	/** The parameters to UpdateBucket. */
	export interface UpdateBucketRequest {

		/** Describes a repository in which log entries are stored. */
		bucket?: LogBucket;

		/** Required. The full resource name of the bucket to update. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket" */
		name?: string | null;

		/** Required. Field mask that specifies the fields in bucket that need an update. A bucket field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see: https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=retention_days */
		updateMask?: string | null;
	}

	/** The parameters to UpdateBucket. */
	export interface UpdateBucketRequestFormProperties {

		/** Required. The full resource name of the bucket to update. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket" */
		name: FormControl<string | null | undefined>,

		/** Required. Field mask that specifies the fields in bucket that need an update. A bucket field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see: https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=retention_days */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBucketRequestFormGroup() {
		return new FormGroup<UpdateBucketRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** BucketOptions describes the bucket boundaries used to create a histogram for the distribution. The buckets can be in a linear sequence, an exponential sequence, or each bucket can be specified explicitly. BucketOptions does not include the number of values in each bucket.A bucket has an inclusive lower bound and exclusive upper bound for the values that are counted for that bucket. The upper bound of a bucket must be strictly greater than the lower bound. The sequence of N buckets for a distribution consists of an underflow bucket (number 0), zero or more finite buckets (number 1 through N - 2) and an overflow bucket (number N - 1). The buckets are contiguous: the lower bound of bucket i (i > 0) is the same as the upper bound of bucket i - 1. The buckets span the whole range of finite values: lower bound of the underflow bucket is -infinity and the upper bound of the overflow bucket is +infinity. The finite buckets are so-called because both bounds are finite. */
	export interface BucketOptions {

		/** Specifies a set of buckets with arbitrary widths.There are size(bounds) + 1 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): boundsi Lower bound (1 <= i < N); boundsi - 1The bounds field must contain at least one element. If bounds has only one element, then there are no finite buckets, and that single element is the common boundary of the overflow and underflow buckets. */
		explicitBuckets?: Explicit;

		/** Specifies an exponential sequence of buckets that have a width that is proportional to the value of the lower bound. Each bucket represents a constant relative uncertainty on a specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): scale * (growth_factor ^ i).Lower bound (1 <= i < N): scale * (growth_factor ^ (i - 1)). */
		exponentialBuckets?: Exponential;

		/** Specifies a linear sequence of buckets that all have the same width (except overflow and underflow). Each bucket represents a constant absolute uncertainty on the specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): offset + (width * i).Lower bound (1 <= i < N): offset + (width * (i - 1)). */
		linearBuckets?: Linear;
	}

	/** BucketOptions describes the bucket boundaries used to create a histogram for the distribution. The buckets can be in a linear sequence, an exponential sequence, or each bucket can be specified explicitly. BucketOptions does not include the number of values in each bucket.A bucket has an inclusive lower bound and exclusive upper bound for the values that are counted for that bucket. The upper bound of a bucket must be strictly greater than the lower bound. The sequence of N buckets for a distribution consists of an underflow bucket (number 0), zero or more finite buckets (number 1 through N - 2) and an overflow bucket (number N - 1). The buckets are contiguous: the lower bound of bucket i (i > 0) is the same as the upper bound of bucket i - 1. The buckets span the whole range of finite values: lower bound of the underflow bucket is -infinity and the upper bound of the overflow bucket is +infinity. The finite buckets are so-called because both bounds are finite. */
	export interface BucketOptionsFormProperties {
	}
	export function CreateBucketOptionsFormGroup() {
		return new FormGroup<BucketOptionsFormProperties>({
		});

	}


	/** Specifies a set of buckets with arbitrary widths.There are size(bounds) + 1 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): boundsi Lower bound (1 <= i < N); boundsi - 1The bounds field must contain at least one element. If bounds has only one element, then there are no finite buckets, and that single element is the common boundary of the overflow and underflow buckets. */
	export interface Explicit {

		/** The values must be monotonically increasing. */
		bounds?: Array<number>;
	}

	/** Specifies a set of buckets with arbitrary widths.There are size(bounds) + 1 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): boundsi Lower bound (1 <= i < N); boundsi - 1The bounds field must contain at least one element. If bounds has only one element, then there are no finite buckets, and that single element is the common boundary of the overflow and underflow buckets. */
	export interface ExplicitFormProperties {
	}
	export function CreateExplicitFormGroup() {
		return new FormGroup<ExplicitFormProperties>({
		});

	}


	/** Specifies an exponential sequence of buckets that have a width that is proportional to the value of the lower bound. Each bucket represents a constant relative uncertainty on a specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): scale * (growth_factor ^ i).Lower bound (1 <= i < N): scale * (growth_factor ^ (i - 1)). */
	export interface Exponential {

		/**
		 * Must be greater than 1.
		 * Type: double
		 */
		growthFactor?: number | null;

		/**
		 * Must be greater than 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numFiniteBuckets?: number | null;

		/**
		 * Must be greater than 0.
		 * Type: double
		 */
		scale?: number | null;
	}

	/** Specifies an exponential sequence of buckets that have a width that is proportional to the value of the lower bound. Each bucket represents a constant relative uncertainty on a specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): scale * (growth_factor ^ i).Lower bound (1 <= i < N): scale * (growth_factor ^ (i - 1)). */
	export interface ExponentialFormProperties {

		/**
		 * Must be greater than 1.
		 * Type: double
		 */
		growthFactor: FormControl<number | null | undefined>,

		/**
		 * Must be greater than 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numFiniteBuckets: FormControl<number | null | undefined>,

		/**
		 * Must be greater than 0.
		 * Type: double
		 */
		scale: FormControl<number | null | undefined>,
	}
	export function CreateExponentialFormGroup() {
		return new FormGroup<ExponentialFormProperties>({
			growthFactor: new FormControl<number | null | undefined>(undefined),
			numFiniteBuckets: new FormControl<number | null | undefined>(undefined),
			scale: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies a linear sequence of buckets that all have the same width (except overflow and underflow). Each bucket represents a constant absolute uncertainty on the specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): offset + (width * i).Lower bound (1 <= i < N): offset + (width * (i - 1)). */
	export interface Linear {

		/**
		 * Must be greater than 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numFiniteBuckets?: number | null;

		/**
		 * Lower bound of the first bucket.
		 * Type: double
		 */
		offset?: number | null;

		/**
		 * Must be greater than 0.
		 * Type: double
		 */
		width?: number | null;
	}

	/** Specifies a linear sequence of buckets that all have the same width (except overflow and underflow). Each bucket represents a constant absolute uncertainty on the specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): offset + (width * i).Lower bound (1 <= i < N): offset + (width * (i - 1)). */
	export interface LinearFormProperties {

		/**
		 * Must be greater than 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numFiniteBuckets: FormControl<number | null | undefined>,

		/**
		 * Lower bound of the first bucket.
		 * Type: double
		 */
		offset: FormControl<number | null | undefined>,

		/**
		 * Must be greater than 0.
		 * Type: double
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateLinearFormGroup() {
		return new FormGroup<LinearFormProperties>({
			numFiniteBuckets: new FormControl<number | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequestFormProperties {
	}
	export function CreateCancelOperationRequestFormGroup() {
		return new FormGroup<CancelOperationRequestFormProperties>({
		});

	}


	/** Metadata for CopyLogEntries long running operations. */
	export interface CopyLogEntriesMetadata {

		/** Identifies whether the user has requested cancellation of the operation. */
		cancellationRequested?: boolean | null;

		/** The end time of an operation. */
		endTime?: string | null;

		/**
		 * Estimated progress of the operation (0 - 100%).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		progress?: number | null;

		/** The parameters to CopyLogEntries. */
		request?: CopyLogEntriesRequest;

		/** The create time of an operation. */
		startTime?: string | null;

		/** Output only. State of an operation. */
		state?: BucketMetadataState | null;

		/** The IAM identity of a service account that must be granted access to the destination.If the service account is not granted permission to the destination within an hour, the operation will be cancelled.For example: "serviceAccount:foo@bar.com" */
		writerIdentity?: string | null;
	}

	/** Metadata for CopyLogEntries long running operations. */
	export interface CopyLogEntriesMetadataFormProperties {

		/** Identifies whether the user has requested cancellation of the operation. */
		cancellationRequested: FormControl<boolean | null | undefined>,

		/** The end time of an operation. */
		endTime: FormControl<string | null | undefined>,

		/**
		 * Estimated progress of the operation (0 - 100%).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		progress: FormControl<number | null | undefined>,

		/** The create time of an operation. */
		startTime: FormControl<string | null | undefined>,

		/** Output only. State of an operation. */
		state: FormControl<BucketMetadataState | null | undefined>,

		/** The IAM identity of a service account that must be granted access to the destination.If the service account is not granted permission to the destination within an hour, the operation will be cancelled.For example: "serviceAccount:foo@bar.com" */
		writerIdentity: FormControl<string | null | undefined>,
	}
	export function CreateCopyLogEntriesMetadataFormGroup() {
		return new FormGroup<CopyLogEntriesMetadataFormProperties>({
			cancellationRequested: new FormControl<boolean | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			progress: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<BucketMetadataState | null | undefined>(undefined),
			writerIdentity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters to CopyLogEntries. */
	export interface CopyLogEntriesRequest {

		/** Required. Destination to which to copy log entries. */
		destination?: string | null;

		/** Optional. A filter specifying which log entries to copy. The filter must be no more than 20k characters. An empty filter matches all log entries. */
		filter?: string | null;

		/** Required. Log bucket from which to copy log entries.For example:"projects/my-project/locations/global/buckets/my-source-bucket" */
		name?: string | null;
	}

	/** The parameters to CopyLogEntries. */
	export interface CopyLogEntriesRequestFormProperties {

		/** Required. Destination to which to copy log entries. */
		destination: FormControl<string | null | undefined>,

		/** Optional. A filter specifying which log entries to copy. The filter must be no more than 20k characters. An empty filter matches all log entries. */
		filter: FormControl<string | null | undefined>,

		/** Required. Log bucket from which to copy log entries.For example:"projects/my-project/locations/global/buckets/my-source-bucket" */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCopyLogEntriesRequestFormGroup() {
		return new FormGroup<CopyLogEntriesRequestFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response type for CopyLogEntries long running operations. */
	export interface CopyLogEntriesResponse {

		/** Number of log entries copied. */
		logEntriesCopiedCount?: string | null;
	}

	/** Response type for CopyLogEntries long running operations. */
	export interface CopyLogEntriesResponseFormProperties {

		/** Number of log entries copied. */
		logEntriesCopiedCount: FormControl<string | null | undefined>,
	}
	export function CreateCopyLogEntriesResponseFormGroup() {
		return new FormGroup<CopyLogEntriesResponseFormProperties>({
			logEntriesCopiedCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters to CreateLink. */
	export interface CreateLinkRequest {

		/** Describes a link connected to an analytics enabled bucket. */
		link?: Link;

		/** Required. The ID to use for the link. The link_id can have up to 100 characters. A valid link_id must only have alphanumeric characters and underscores within it. */
		linkId?: string | null;

		/** Required. The full resource name of the bucket to create a link for. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" */
		parent?: string | null;
	}

	/** The parameters to CreateLink. */
	export interface CreateLinkRequestFormProperties {

		/** Required. The ID to use for the link. The link_id can have up to 100 characters. A valid link_id must only have alphanumeric characters and underscores within it. */
		linkId: FormControl<string | null | undefined>,

		/** Required. The full resource name of the bucket to create a link for. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateCreateLinkRequestFormGroup() {
		return new FormGroup<CreateLinkRequestFormProperties>({
			linkId: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a link connected to an analytics enabled bucket. */
	export interface Link {

		/** Describes a BigQuery dataset that was created by a link. */
		bigqueryDataset?: BigQueryDataset;

		/** Output only. The creation timestamp of the link. */
		createTime?: string | null;

		/** Optional. Describes this link.The maximum length of the description is 8000 characters. */
		description?: string | null;

		/** Output only. The resource lifecycle state. */
		lifecycleState?: LogBucketLifecycleState | null;

		/** Output only. The resource name of the link. The name can have up to 100 characters. A valid link id (at the end of the link name) must only have alphanumeric characters and underscores within it. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" For example:`projects/my-project/locations/global/buckets/my-bucket/links/my_link */
		name?: string | null;
	}

	/** Describes a link connected to an analytics enabled bucket. */
	export interface LinkFormProperties {

		/** Output only. The creation timestamp of the link. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Describes this link.The maximum length of the description is 8000 characters. */
		description: FormControl<string | null | undefined>,

		/** Output only. The resource lifecycle state. */
		lifecycleState: FormControl<LogBucketLifecycleState | null | undefined>,

		/** Output only. The resource name of the link. The name can have up to 100 characters. A valid link id (at the end of the link name) must only have alphanumeric characters and underscores within it. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" For example:`projects/my-project/locations/global/buckets/my-bucket/links/my_link */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLinkFormGroup() {
		return new FormGroup<LinkFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lifecycleState: new FormControl<LogBucketLifecycleState | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the custom _Default sink configuration that is used to override the built-in _Default sink configuration in newly created resource containers, such as projects or folders. */
	export interface DefaultSinkConfig {

		/** Optional. Specifies the set of exclusions to be added to the _Default sink in newly created resource containers. */
		exclusions?: Array<LogExclusion>;

		/** Optional. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries). The only exported log entries are those that are in the resource owning the sink and that match the filter.For example:logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity>=ERRORTo match all logs, don't add exclusions and use the following line as the value of filter:logName:*Cannot be empty or unset when the value of mode is OVERWRITE. */
		filter?: string | null;

		/** Required. Determines the behavior to apply to the built-in _Default sink inclusion filter.Exclusions are always appended, as built-in _Default sinks have no exclusions. */
		mode?: DefaultSinkConfigMode | null;
	}

	/** Describes the custom _Default sink configuration that is used to override the built-in _Default sink configuration in newly created resource containers, such as projects or folders. */
	export interface DefaultSinkConfigFormProperties {

		/** Optional. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries). The only exported log entries are those that are in the resource owning the sink and that match the filter.For example:logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity>=ERRORTo match all logs, don't add exclusions and use the following line as the value of filter:logName:*Cannot be empty or unset when the value of mode is OVERWRITE. */
		filter: FormControl<string | null | undefined>,

		/** Required. Determines the behavior to apply to the built-in _Default sink inclusion filter.Exclusions are always appended, as built-in _Default sinks have no exclusions. */
		mode: FormControl<DefaultSinkConfigMode | null | undefined>,
	}
	export function CreateDefaultSinkConfigFormGroup() {
		return new FormGroup<DefaultSinkConfigFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<DefaultSinkConfigMode | null | undefined>(undefined),
		});

	}


	/** Specifies a set of log entries that are filtered out by a sink. If your Google Cloud resource receives a large volume of log entries, you can use exclusions to reduce your chargeable logs. Note that exclusions on organization-level and folder-level sinks don't apply to child resources. Note also that you cannot modify the _Required sink or exclude logs from it. */
	export interface LogExclusion {

		/** Output only. The creation timestamp of the exclusion.This field may not be present for older exclusions. */
		createTime?: string | null;

		/** Optional. A description of this exclusion. */
		description?: string | null;

		/** Optional. If set to True, then this exclusion is disabled and it does not exclude any log entries. You can update an exclusion to change the value of this field. */
		disabled?: boolean | null;

		/** Required. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries) that matches the log entries to be excluded. By using the sample function (https://cloud.google.com/logging/docs/view/advanced-queries#sample), you can exclude less than 100% of the matching log entries.For example, the following query matches 99% of low-severity log entries from Google Cloud Storage buckets:resource.type=gcs_bucket severity<ERROR sample(insertId, 0.99) */
		filter?: string | null;

		/** Output only. A client-assigned identifier, such as "load-balancer-exclusion". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric. */
		name?: string | null;

		/** Output only. The last update timestamp of the exclusion.This field may not be present for older exclusions. */
		updateTime?: string | null;
	}

	/** Specifies a set of log entries that are filtered out by a sink. If your Google Cloud resource receives a large volume of log entries, you can use exclusions to reduce your chargeable logs. Note that exclusions on organization-level and folder-level sinks don't apply to child resources. Note also that you cannot modify the _Required sink or exclude logs from it. */
	export interface LogExclusionFormProperties {

		/** Output only. The creation timestamp of the exclusion.This field may not be present for older exclusions. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. A description of this exclusion. */
		description: FormControl<string | null | undefined>,

		/** Optional. If set to True, then this exclusion is disabled and it does not exclude any log entries. You can update an exclusion to change the value of this field. */
		disabled: FormControl<boolean | null | undefined>,

		/** Required. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries) that matches the log entries to be excluded. By using the sample function (https://cloud.google.com/logging/docs/view/advanced-queries#sample), you can exclude less than 100% of the matching log entries.For example, the following query matches 99% of low-severity log entries from Google Cloud Storage buckets:resource.type=gcs_bucket severity<ERROR sample(insertId, 0.99) */
		filter: FormControl<string | null | undefined>,

		/** Output only. A client-assigned identifier, such as "load-balancer-exclusion". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric. */
		name: FormControl<string | null | undefined>,

		/** Output only. The last update timestamp of the exclusion.This field may not be present for older exclusions. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateLogExclusionFormGroup() {
		return new FormGroup<LogExclusionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DefaultSinkConfigMode { FILTER_WRITE_MODE_UNSPECIFIED = 'FILTER_WRITE_MODE_UNSPECIFIED', APPEND = 'APPEND', OVERWRITE = 'OVERWRITE' }


	/** The parameters to DeleteLink. */
	export interface DeleteLinkRequest {

		/** Required. The full resource name of the link to delete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" */
		name?: string | null;
	}

	/** The parameters to DeleteLink. */
	export interface DeleteLinkRequestFormProperties {

		/** Required. The full resource name of the link to delete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLinkRequestFormGroup() {
		return new FormGroup<DeleteLinkRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }  */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }  */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message. */
	export interface HttpRequest {

		/** The number of HTTP response bytes inserted into cache. Set only when a cache fill was attempted. */
		cacheFillBytes?: string | null;

		/** Whether or not an entity was served from cache (with or without validation). */
		cacheHit?: boolean | null;

		/** Whether or not a cache lookup was attempted. */
		cacheLookup?: boolean | null;

		/** Whether or not the response was validated with the origin server before being served from cache. This field is only meaningful if cache_hit is True. */
		cacheValidatedWithOriginServer?: boolean | null;

		/** The request processing latency on the server, from the time the request was received until the response was sent. */
		latency?: string | null;

		/** Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket" */
		protocol?: string | null;

		/** The referer URL of the request, as defined in HTTP/1.1 Header Field Definitions (https://datatracker.ietf.org/doc/html/rfc2616#section-14.36). */
		referer?: string | null;

		/** The IP address (IPv4 or IPv6) of the client that issued the HTTP request. This field can include port information. Examples: "192.168.1.1", "10.0.0.1:80", "FE80::0202:B3FF:FE1E:8329". */
		remoteIp?: string | null;

		/** The request method. Examples: "GET", "HEAD", "PUT", "POST". */
		requestMethod?: string | null;

		/** The size of the HTTP request message in bytes, including the request headers and the request body. */
		requestSize?: string | null;

		/** The scheme (http, https), the host name, the path and the query portion of the URL that was requested. Example: "http://example.com/some/info?color=red". */
		requestUrl?: string | null;

		/** The size of the HTTP response message sent back to the client, in bytes, including the response headers and the response body. */
		responseSize?: string | null;

		/** The IP address (IPv4 or IPv6) of the origin server that the request was sent to. This field can include port information. Examples: "192.168.1.1", "10.0.0.1:80", "FE80::0202:B3FF:FE1E:8329". */
		serverIp?: string | null;

		/**
		 * The response code indicating the status of response. Examples: 200, 404.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;

		/** The user agent sent by the client. Example: "Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)". */
		userAgent?: string | null;
	}

	/** A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message. */
	export interface HttpRequestFormProperties {

		/** The number of HTTP response bytes inserted into cache. Set only when a cache fill was attempted. */
		cacheFillBytes: FormControl<string | null | undefined>,

		/** Whether or not an entity was served from cache (with or without validation). */
		cacheHit: FormControl<boolean | null | undefined>,

		/** Whether or not a cache lookup was attempted. */
		cacheLookup: FormControl<boolean | null | undefined>,

		/** Whether or not the response was validated with the origin server before being served from cache. This field is only meaningful if cache_hit is True. */
		cacheValidatedWithOriginServer: FormControl<boolean | null | undefined>,

		/** The request processing latency on the server, from the time the request was received until the response was sent. */
		latency: FormControl<string | null | undefined>,

		/** Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket" */
		protocol: FormControl<string | null | undefined>,

		/** The referer URL of the request, as defined in HTTP/1.1 Header Field Definitions (https://datatracker.ietf.org/doc/html/rfc2616#section-14.36). */
		referer: FormControl<string | null | undefined>,

		/** The IP address (IPv4 or IPv6) of the client that issued the HTTP request. This field can include port information. Examples: "192.168.1.1", "10.0.0.1:80", "FE80::0202:B3FF:FE1E:8329". */
		remoteIp: FormControl<string | null | undefined>,

		/** The request method. Examples: "GET", "HEAD", "PUT", "POST". */
		requestMethod: FormControl<string | null | undefined>,

		/** The size of the HTTP request message in bytes, including the request headers and the request body. */
		requestSize: FormControl<string | null | undefined>,

		/** The scheme (http, https), the host name, the path and the query portion of the URL that was requested. Example: "http://example.com/some/info?color=red". */
		requestUrl: FormControl<string | null | undefined>,

		/** The size of the HTTP response message sent back to the client, in bytes, including the response headers and the response body. */
		responseSize: FormControl<string | null | undefined>,

		/** The IP address (IPv4 or IPv6) of the origin server that the request was sent to. This field can include port information. Examples: "192.168.1.1", "10.0.0.1:80", "FE80::0202:B3FF:FE1E:8329". */
		serverIp: FormControl<string | null | undefined>,

		/**
		 * The response code indicating the status of response. Examples: 200, 404.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/** The user agent sent by the client. Example: "Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)". */
		userAgent: FormControl<string | null | undefined>,
	}
	export function CreateHttpRequestFormGroup() {
		return new FormGroup<HttpRequestFormProperties>({
			cacheFillBytes: new FormControl<string | null | undefined>(undefined),
			cacheHit: new FormControl<boolean | null | undefined>(undefined),
			cacheLookup: new FormControl<boolean | null | undefined>(undefined),
			cacheValidatedWithOriginServer: new FormControl<boolean | null | undefined>(undefined),
			latency: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			referer: new FormControl<string | null | undefined>(undefined),
			remoteIp: new FormControl<string | null | undefined>(undefined),
			requestMethod: new FormControl<string | null | undefined>(undefined),
			requestSize: new FormControl<string | null | undefined>(undefined),
			requestUrl: new FormControl<string | null | undefined>(undefined),
			responseSize: new FormControl<string | null | undefined>(undefined),
			serverIp: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			userAgent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A description of a label. */
	export interface LabelDescriptor {

		/** A human-readable description for the label. */
		description?: string | null;

		/** The label key. */
		key?: string | null;

		/** The type of data that can be assigned to the label. */
		valueType?: LabelDescriptorValueType | null;
	}

	/** A description of a label. */
	export interface LabelDescriptorFormProperties {

		/** A human-readable description for the label. */
		description: FormControl<string | null | undefined>,

		/** The label key. */
		key: FormControl<string | null | undefined>,

		/** The type of data that can be assigned to the label. */
		valueType: FormControl<LabelDescriptorValueType | null | undefined>,
	}
	export function CreateLabelDescriptorFormGroup() {
		return new FormGroup<LabelDescriptorFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			valueType: new FormControl<LabelDescriptorValueType | null | undefined>(undefined),
		});

	}

	export enum LabelDescriptorValueType { STRING = 'STRING', BOOL = 'BOOL', INT64 = 'INT64' }


	/** Metadata for long running Link operations. */
	export interface LinkMetadata {

		/** The parameters to CreateLink. */
		createLinkRequest?: CreateLinkRequest;

		/** The parameters to DeleteLink. */
		deleteLinkRequest?: DeleteLinkRequest;

		/** The end time of an operation. */
		endTime?: string | null;

		/** The start time of an operation. */
		startTime?: string | null;

		/** Output only. State of an operation. */
		state?: BucketMetadataState | null;
	}

	/** Metadata for long running Link operations. */
	export interface LinkMetadataFormProperties {

		/** The end time of an operation. */
		endTime: FormControl<string | null | undefined>,

		/** The start time of an operation. */
		startTime: FormControl<string | null | undefined>,

		/** Output only. State of an operation. */
		state: FormControl<BucketMetadataState | null | undefined>,
	}
	export function CreateLinkMetadataFormGroup() {
		return new FormGroup<LinkMetadataFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<BucketMetadataState | null | undefined>(undefined),
		});

	}


	/** The response from ListBuckets. */
	export interface ListBucketsResponse {

		/** A list of buckets. */
		buckets?: Array<LogBucket>;

		/** If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken. */
		nextPageToken?: string | null;
	}

	/** The response from ListBuckets. */
	export interface ListBucketsResponseFormProperties {

		/** If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBucketsResponseFormGroup() {
		return new FormGroup<ListBucketsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result returned from ListExclusions. */
	export interface ListExclusionsResponse {

		/** A list of exclusions. */
		exclusions?: Array<LogExclusion>;

		/** If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken. */
		nextPageToken?: string | null;
	}

	/** Result returned from ListExclusions. */
	export interface ListExclusionsResponseFormProperties {

		/** If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListExclusionsResponseFormGroup() {
		return new FormGroup<ListExclusionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response from ListLinks. */
	export interface ListLinksResponse {

		/** A list of links. */
		links?: Array<Link>;

		/** If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken. */
		nextPageToken?: string | null;
	}

	/** The response from ListLinks. */
	export interface ListLinksResponseFormProperties {

		/** If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLinksResponseFormGroup() {
		return new FormGroup<ListLinksResponseFormProperties>({
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

		/** The canonical id for this location. For example: "us-east1". */
		locationId?: string | null;

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata?: {[id: string]: any };

		/** Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1" */
		name?: string | null;
	}

	/** A resource that represents a Google Cloud location. */
	export interface LocationFormProperties {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName: FormControl<string | null | undefined>,

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical id for this location. For example: "us-east1". */
		locationId: FormControl<string | null | undefined>,

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1" */
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


	/** The parameters to ListLogEntries. */
	export interface ListLogEntriesRequest {

		/** Optional. A filter that chooses which log entries to return. For more information, see Logging query language (https://cloud.google.com/logging/docs/view/logging-query-language).Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in resource_names. Referencing a parent resource that is not listed in resource_names will cause the filter to return no results. The maximum length of a filter is 20,000 characters. */
		filter?: string | null;

		/** Optional. How the results should be sorted. Presently, the only permitted values are "timestamp asc" (default) and "timestamp desc". The first option returns entries in order of increasing values of LogEntry.timestamp (oldest first), and the second option returns entries in order of decreasing timestamps (newest first). Entries with equal timestamps are returned in order of their insert_id values. */
		orderBy?: string | null;

		/**
		 * Optional. The maximum number of results to return from this request. Default is 50. If the value is negative, the request is rejected.The presence of next_page_token in the response indicates that more results might be available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize?: number | null;

		/** Optional. If present, then retrieve the next batch of results from the preceding call to this method. page_token must be the value of next_page_token from the previous response. The values of other method parameters should be identical to those in the previous call. */
		pageToken?: string | null;

		/** Optional. Deprecated. Use resource_names instead. One or more project identifiers or project numbers from which to retrieve log entries. Example: "my-project-1A". */
		projectIds?: Array<string>;

		/** Required. Names of one or more parent resources from which to retrieve log entries: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]May alternatively be one or more views: projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]Projects listed in the project_ids field are added to this list. A maximum of 100 resources may be specified in a single request. */
		resourceNames?: Array<string>;
	}

	/** The parameters to ListLogEntries. */
	export interface ListLogEntriesRequestFormProperties {

		/** Optional. A filter that chooses which log entries to return. For more information, see Logging query language (https://cloud.google.com/logging/docs/view/logging-query-language).Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in resource_names. Referencing a parent resource that is not listed in resource_names will cause the filter to return no results. The maximum length of a filter is 20,000 characters. */
		filter: FormControl<string | null | undefined>,

		/** Optional. How the results should be sorted. Presently, the only permitted values are "timestamp asc" (default) and "timestamp desc". The first option returns entries in order of increasing values of LogEntry.timestamp (oldest first), and the second option returns entries in order of decreasing timestamps (newest first). Entries with equal timestamps are returned in order of their insert_id values. */
		orderBy: FormControl<string | null | undefined>,

		/**
		 * Optional. The maximum number of results to return from this request. Default is 50. If the value is negative, the request is rejected.The presence of next_page_token in the response indicates that more results might be available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize: FormControl<number | null | undefined>,

		/** Optional. If present, then retrieve the next batch of results from the preceding call to this method. page_token must be the value of next_page_token from the previous response. The values of other method parameters should be identical to those in the previous call. */
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLogEntriesRequestFormGroup() {
		return new FormGroup<ListLogEntriesRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			orderBy: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result returned from ListLogEntries. */
	export interface ListLogEntriesResponse {

		/** A list of log entries. If entries is empty, nextPageToken may still be returned, indicating that more entries may exist. See nextPageToken for more information. */
		entries?: Array<LogEntry>;

		/** If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.If a value for next_page_token appears and the entries field is empty, it means that the search found no log entries so far but it did not have time to search all the possible log entries. Retry the method with this value for page_token to continue the search. Alternatively, consider speeding up the search by changing your filter to specify a single log name or resource type, or to narrow the time range of the search. */
		nextPageToken?: string | null;
	}

	/** Result returned from ListLogEntries. */
	export interface ListLogEntriesResponseFormProperties {

		/** If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.If a value for next_page_token appears and the entries field is empty, it means that the search found no log entries so far but it did not have time to search all the possible log entries. Retry the method with this value for page_token to continue the search. Alternatively, consider speeding up the search by changing your filter to specify a single log name or resource type, or to narrow the time range of the search. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLogEntriesResponseFormGroup() {
		return new FormGroup<ListLogEntriesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An individual entry in a log. */
	export interface LogEntry {

		/** Output only. The Error Reporting (https://cloud.google.com/error-reporting) error groups associated with this LogEntry. Error Reporting sets the values for this field during error group creation.For more information, see View error details( https://cloud.google.com/error-reporting/docs/viewing-errors#view_error_details)This field isn't available during log routing (https://cloud.google.com/logging/docs/routing/overview) */
		errorGroups?: Array<LogErrorGroup>;

		/** A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message. */
		httpRequest?: HttpRequest;

		/** Optional. A unique identifier for the log entry. If you provide a value, then Logging considers other log entries in the same project, with the same timestamp, and with the same insert_id to be duplicates which are removed in a single query result. However, there are no guarantees of de-duplication in the export of logs.If the insert_id is omitted when writing a log entry, the Logging API assigns its own unique identifier in this field.In queries, the insert_id is also used to order log entries that have the same log_name and timestamp values. */
		insertId?: string | null;

		/** The log entry payload, represented as a structure that is expressed as a JSON object. */
		jsonPayload?: {[id: string]: any };

		/** Optional. A map of key, value pairs that provides additional information about the log entry. The labels can be user-defined or system-defined.User-defined labels are arbitrary key, value pairs that you can use to classify logs.System-defined labels are defined by GCP services for platform logs. They have two components - a service namespace component and the attribute name. For example: compute.googleapis.com/resource_name.Cloud Logging truncates label keys that exceed 512 B and label values that exceed 64 KB upon their associated log entry being written. The truncation is indicated by an ellipsis at the end of the character string. */
		labels?: {[id: string]: string };

		/** Required. The resource name of the log to which this log entry belongs: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" A project number may be used in place of PROJECT_ID. The project number is translated to its corresponding PROJECT_ID internally and the log_name field will contain PROJECT_ID in queries and exports.[LOG_ID] must be URL-encoded within log_name. Example: "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity".[LOG_ID] must be less than 512 characters long and can only include the following characters: upper and lower case alphanumeric characters, forward-slash, underscore, hyphen, and period.For backward compatibility, if log_name begins with a forward-slash, such as /projects/..., then the log entry is processed as usual, but the forward-slash is removed. Listing the log entry will not show the leading slash and filtering for a log name with a leading slash will never return any results. */
		logName?: string | null;

		/** Auxiliary metadata for a MonitoredResource object. MonitoredResource objects contain the minimum set of information to uniquely identify a monitored resource instance. There is some other useful auxiliary metadata. Monitoring and Logging use an ingestion pipeline to extract metadata for cloud resources of all types, and store the metadata in this message. */
		metadata?: MonitoredResourceMetadata;

		/** Additional information about a potentially long-running operation with which a log entry is associated. */
		operation?: LogEntryOperation;

		/** The log entry payload, represented as a protocol buffer. Some Google Cloud Platform services use this field for their log entry payloads.The following protocol buffer types are supported; user-defined types are not supported:"type.googleapis.com/google.cloud.audit.AuditLog" "type.googleapis.com/google.appengine.logging.v1.RequestLog" */
		protoPayload?: {[id: string]: any };

		/** Output only. The time the log entry was received by Logging. */
		receiveTimestamp?: string | null;

		/** An object representing a resource that can be used for monitoring, logging, billing, or other purposes. Examples include virtual machine instances, databases, and storage devices such as disks. The type field identifies a MonitoredResourceDescriptor object that describes the resource's schema. Information in the labels field identifies the actual resource and its attributes according to the schema. For example, a particular Compute Engine VM instance could be represented by the following object, because the MonitoredResourceDescriptor for "gce_instance" has labels "project_id", "instance_id" and "zone": { "type": "gce_instance", "labels": { "project_id": "my-project", "instance_id": "12345678901234", "zone": "us-central1-a" }} */
		resource?: MonitoredResource;

		/** Optional. The severity of the log entry. The default value is LogSeverity.DEFAULT. */
		severity?: LogEntrySeverity | null;

		/** Additional information about the source code location that produced the log entry. */
		sourceLocation?: LogEntrySourceLocation;

		/** Optional. The ID of the Cloud Trace (https://cloud.google.com/trace) span associated with the current operation in which the log is being written. For example, if a span has the REST resource name of "projects/some-project/traces/some-trace/spans/some-span-id", then the span_id field is "some-span-id".A Span (https://cloud.google.com/trace/docs/reference/v2/rest/v2/projects.traces/batchWrite#Span) represents a single operation within a trace. Whereas a trace may involve multiple different microservices running on multiple different machines, a span generally corresponds to a single logical operation being performed in a single instance of a microservice on one specific machine. Spans are the nodes within the tree that is a trace.Applications that are instrumented for tracing (https://cloud.google.com/trace/docs/setup) will generally assign a new, unique span ID on each incoming request. It is also common to create and record additional spans corresponding to internal processing elements as well as issuing requests to dependencies.The span ID is expected to be a 16-character, hexadecimal encoding of an 8-byte array and should not be zero. It should be unique within the trace and should, ideally, be generated in a manner that is uniformly random.Example values: 000000000000004a 7a2190356c3fc94b 0000f00300090021 d39223e101960076 */
		spanId?: string | null;

		/** Additional information used to correlate multiple log entries. Used when a single LogEntry would exceed the Google Cloud Logging size limit and is split across multiple log entries. */
		split?: LogSplit;

		/** The log entry payload, represented as a Unicode string (UTF-8). */
		textPayload?: string | null;

		/** Optional. The time the event described by the log entry occurred. This time is used to compute the log entry's age and to enforce the logs retention period. If this field is omitted in a new log entry, then Logging assigns it the current time. Timestamps have nanosecond accuracy, but trailing zeros in the fractional seconds might be omitted when the timestamp is displayed.Incoming log entries must have timestamps that don't exceed the logs retention period (https://cloud.google.com/logging/quotas#logs_retention_periods) in the past, and that don't exceed 24 hours in the future. Log entries outside those time boundaries are rejected by Logging. */
		timestamp?: string | null;

		/** Optional. The REST resource name of the trace being written to Cloud Trace (https://cloud.google.com/trace) in association with this log entry. For example, if your trace data is stored in the Cloud project "my-trace-project" and if the service that is creating the log entry receives a trace header that includes the trace ID "12345", then the service should use "projects/my-trace-project/traces/12345".The trace field provides the link between logs and traces. By using this field, you can navigate from a log entry to a trace. */
		trace?: string | null;

		/** Optional. The sampling decision of the span associated with the log entry at the time the log entry was created. This field corresponds to the sampled flag in the W3C trace-context specification (https://www.w3.org/TR/trace-context/#sampled-flag). A non-sampled trace value is still useful as a request correlation identifier. The default is False. */
		traceSampled?: boolean | null;
	}

	/** An individual entry in a log. */
	export interface LogEntryFormProperties {

		/** Optional. A unique identifier for the log entry. If you provide a value, then Logging considers other log entries in the same project, with the same timestamp, and with the same insert_id to be duplicates which are removed in a single query result. However, there are no guarantees of de-duplication in the export of logs.If the insert_id is omitted when writing a log entry, the Logging API assigns its own unique identifier in this field.In queries, the insert_id is also used to order log entries that have the same log_name and timestamp values. */
		insertId: FormControl<string | null | undefined>,

		/** The log entry payload, represented as a structure that is expressed as a JSON object. */
		jsonPayload: FormControl<{[id: string]: any } | null | undefined>,

		/** Optional. A map of key, value pairs that provides additional information about the log entry. The labels can be user-defined or system-defined.User-defined labels are arbitrary key, value pairs that you can use to classify logs.System-defined labels are defined by GCP services for platform logs. They have two components - a service namespace component and the attribute name. For example: compute.googleapis.com/resource_name.Cloud Logging truncates label keys that exceed 512 B and label values that exceed 64 KB upon their associated log entry being written. The truncation is indicated by an ellipsis at the end of the character string. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The resource name of the log to which this log entry belongs: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" A project number may be used in place of PROJECT_ID. The project number is translated to its corresponding PROJECT_ID internally and the log_name field will contain PROJECT_ID in queries and exports.[LOG_ID] must be URL-encoded within log_name. Example: "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity".[LOG_ID] must be less than 512 characters long and can only include the following characters: upper and lower case alphanumeric characters, forward-slash, underscore, hyphen, and period.For backward compatibility, if log_name begins with a forward-slash, such as /projects/..., then the log entry is processed as usual, but the forward-slash is removed. Listing the log entry will not show the leading slash and filtering for a log name with a leading slash will never return any results. */
		logName: FormControl<string | null | undefined>,

		/** The log entry payload, represented as a protocol buffer. Some Google Cloud Platform services use this field for their log entry payloads.The following protocol buffer types are supported; user-defined types are not supported:"type.googleapis.com/google.cloud.audit.AuditLog" "type.googleapis.com/google.appengine.logging.v1.RequestLog" */
		protoPayload: FormControl<{[id: string]: any } | null | undefined>,

		/** Output only. The time the log entry was received by Logging. */
		receiveTimestamp: FormControl<string | null | undefined>,

		/** Optional. The severity of the log entry. The default value is LogSeverity.DEFAULT. */
		severity: FormControl<LogEntrySeverity | null | undefined>,

		/** Optional. The ID of the Cloud Trace (https://cloud.google.com/trace) span associated with the current operation in which the log is being written. For example, if a span has the REST resource name of "projects/some-project/traces/some-trace/spans/some-span-id", then the span_id field is "some-span-id".A Span (https://cloud.google.com/trace/docs/reference/v2/rest/v2/projects.traces/batchWrite#Span) represents a single operation within a trace. Whereas a trace may involve multiple different microservices running on multiple different machines, a span generally corresponds to a single logical operation being performed in a single instance of a microservice on one specific machine. Spans are the nodes within the tree that is a trace.Applications that are instrumented for tracing (https://cloud.google.com/trace/docs/setup) will generally assign a new, unique span ID on each incoming request. It is also common to create and record additional spans corresponding to internal processing elements as well as issuing requests to dependencies.The span ID is expected to be a 16-character, hexadecimal encoding of an 8-byte array and should not be zero. It should be unique within the trace and should, ideally, be generated in a manner that is uniformly random.Example values: 000000000000004a 7a2190356c3fc94b 0000f00300090021 d39223e101960076 */
		spanId: FormControl<string | null | undefined>,

		/** The log entry payload, represented as a Unicode string (UTF-8). */
		textPayload: FormControl<string | null | undefined>,

		/** Optional. The time the event described by the log entry occurred. This time is used to compute the log entry's age and to enforce the logs retention period. If this field is omitted in a new log entry, then Logging assigns it the current time. Timestamps have nanosecond accuracy, but trailing zeros in the fractional seconds might be omitted when the timestamp is displayed.Incoming log entries must have timestamps that don't exceed the logs retention period (https://cloud.google.com/logging/quotas#logs_retention_periods) in the past, and that don't exceed 24 hours in the future. Log entries outside those time boundaries are rejected by Logging. */
		timestamp: FormControl<string | null | undefined>,

		/** Optional. The REST resource name of the trace being written to Cloud Trace (https://cloud.google.com/trace) in association with this log entry. For example, if your trace data is stored in the Cloud project "my-trace-project" and if the service that is creating the log entry receives a trace header that includes the trace ID "12345", then the service should use "projects/my-trace-project/traces/12345".The trace field provides the link between logs and traces. By using this field, you can navigate from a log entry to a trace. */
		trace: FormControl<string | null | undefined>,

		/** Optional. The sampling decision of the span associated with the log entry at the time the log entry was created. This field corresponds to the sampled flag in the W3C trace-context specification (https://www.w3.org/TR/trace-context/#sampled-flag). A non-sampled trace value is still useful as a request correlation identifier. The default is False. */
		traceSampled: FormControl<boolean | null | undefined>,
	}
	export function CreateLogEntryFormGroup() {
		return new FormGroup<LogEntryFormProperties>({
			insertId: new FormControl<string | null | undefined>(undefined),
			jsonPayload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			logName: new FormControl<string | null | undefined>(undefined),
			protoPayload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			receiveTimestamp: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<LogEntrySeverity | null | undefined>(undefined),
			spanId: new FormControl<string | null | undefined>(undefined),
			textPayload: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			trace: new FormControl<string | null | undefined>(undefined),
			traceSampled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains metadata that associates the LogEntry to Error Reporting error groups. */
	export interface LogErrorGroup {

		/** The id is a unique identifier for a particular error group; it is the last part of the error group resource name: /project/[PROJECT_ID]/errors/[ERROR_GROUP_ID]. Example: COShysOX0r_51QE. The id is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see Google Cloud Privacy Notice (https://cloud.google.com/terms/cloud-privacy-notice). */
		id?: string | null;
	}

	/** Contains metadata that associates the LogEntry to Error Reporting error groups. */
	export interface LogErrorGroupFormProperties {

		/** The id is a unique identifier for a particular error group; it is the last part of the error group resource name: /project/[PROJECT_ID]/errors/[ERROR_GROUP_ID]. Example: COShysOX0r_51QE. The id is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see Google Cloud Privacy Notice (https://cloud.google.com/terms/cloud-privacy-notice). */
		id: FormControl<string | null | undefined>,
	}
	export function CreateLogErrorGroupFormGroup() {
		return new FormGroup<LogErrorGroupFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Auxiliary metadata for a MonitoredResource object. MonitoredResource objects contain the minimum set of information to uniquely identify a monitored resource instance. There is some other useful auxiliary metadata. Monitoring and Logging use an ingestion pipeline to extract metadata for cloud resources of all types, and store the metadata in this message. */
	export interface MonitoredResourceMetadata {

		/** Output only. Values for predefined system metadata labels. System labels are a kind of metadata extracted by Google, including "machine_image", "vpc", "subnet_id", "security_group", "name", etc. System label values can be only strings, Boolean values, or a list of strings. For example: { "name": "my-test-instance", "security_group": ["a", "b", "c"], "spot_instance": false } */
		systemLabels?: {[id: string]: any };

		/** Output only. A map of user-defined metadata labels. */
		userLabels?: {[id: string]: string };
	}

	/** Auxiliary metadata for a MonitoredResource object. MonitoredResource objects contain the minimum set of information to uniquely identify a monitored resource instance. There is some other useful auxiliary metadata. Monitoring and Logging use an ingestion pipeline to extract metadata for cloud resources of all types, and store the metadata in this message. */
	export interface MonitoredResourceMetadataFormProperties {

		/** Output only. Values for predefined system metadata labels. System labels are a kind of metadata extracted by Google, including "machine_image", "vpc", "subnet_id", "security_group", "name", etc. System label values can be only strings, Boolean values, or a list of strings. For example: { "name": "my-test-instance", "security_group": ["a", "b", "c"], "spot_instance": false } */
		systemLabels: FormControl<{[id: string]: any } | null | undefined>,

		/** Output only. A map of user-defined metadata labels. */
		userLabels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateMonitoredResourceMetadataFormGroup() {
		return new FormGroup<MonitoredResourceMetadataFormProperties>({
			systemLabels: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			userLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Additional information about a potentially long-running operation with which a log entry is associated. */
	export interface LogEntryOperation {

		/** Optional. Set this to True if this is the first log entry in the operation. */
		first?: boolean | null;

		/** Optional. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation. */
		id?: string | null;

		/** Optional. Set this to True if this is the last log entry in the operation. */
		last?: boolean | null;

		/** Optional. An arbitrary producer identifier. The combination of id and producer must be globally unique. Examples for producer: "MyDivision.MyBigCompany.com", "github.com/MyProject/MyApplication". */
		producer?: string | null;
	}

	/** Additional information about a potentially long-running operation with which a log entry is associated. */
	export interface LogEntryOperationFormProperties {

		/** Optional. Set this to True if this is the first log entry in the operation. */
		first: FormControl<boolean | null | undefined>,

		/** Optional. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation. */
		id: FormControl<string | null | undefined>,

		/** Optional. Set this to True if this is the last log entry in the operation. */
		last: FormControl<boolean | null | undefined>,

		/** Optional. An arbitrary producer identifier. The combination of id and producer must be globally unique. Examples for producer: "MyDivision.MyBigCompany.com", "github.com/MyProject/MyApplication". */
		producer: FormControl<string | null | undefined>,
	}
	export function CreateLogEntryOperationFormGroup() {
		return new FormGroup<LogEntryOperationFormProperties>({
			first: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last: new FormControl<boolean | null | undefined>(undefined),
			producer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing a resource that can be used for monitoring, logging, billing, or other purposes. Examples include virtual machine instances, databases, and storage devices such as disks. The type field identifies a MonitoredResourceDescriptor object that describes the resource's schema. Information in the labels field identifies the actual resource and its attributes according to the schema. For example, a particular Compute Engine VM instance could be represented by the following object, because the MonitoredResourceDescriptor for "gce_instance" has labels "project_id", "instance_id" and "zone": { "type": "gce_instance", "labels": { "project_id": "my-project", "instance_id": "12345678901234", "zone": "us-central1-a" }}  */
	export interface MonitoredResource {

		/** Required. Values for all of the labels listed in the associated monitored resource descriptor. For example, Compute Engine VM instances use the labels "project_id", "instance_id", and "zone". */
		labels?: {[id: string]: string };

		/** Required. The monitored resource type. This field must match the type field of a MonitoredResourceDescriptor object. For example, the type of a Compute Engine VM instance is gce_instance. Some descriptors include the service name in the type; for example, the type of a Datastream stream is datastream.googleapis.com/Stream. */
		type?: string | null;
	}

	/** An object representing a resource that can be used for monitoring, logging, billing, or other purposes. Examples include virtual machine instances, databases, and storage devices such as disks. The type field identifies a MonitoredResourceDescriptor object that describes the resource's schema. Information in the labels field identifies the actual resource and its attributes according to the schema. For example, a particular Compute Engine VM instance could be represented by the following object, because the MonitoredResourceDescriptor for "gce_instance" has labels "project_id", "instance_id" and "zone": { "type": "gce_instance", "labels": { "project_id": "my-project", "instance_id": "12345678901234", "zone": "us-central1-a" }}  */
	export interface MonitoredResourceFormProperties {

		/** Required. Values for all of the labels listed in the associated monitored resource descriptor. For example, Compute Engine VM instances use the labels "project_id", "instance_id", and "zone". */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The monitored resource type. This field must match the type field of a MonitoredResourceDescriptor object. For example, the type of a Compute Engine VM instance is gce_instance. Some descriptors include the service name in the type; for example, the type of a Datastream stream is datastream.googleapis.com/Stream. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMonitoredResourceFormGroup() {
		return new FormGroup<MonitoredResourceFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LogEntrySeverity { DEFAULT = 'DEFAULT', DEBUG = 'DEBUG', INFO = 'INFO', NOTICE = 'NOTICE', WARNING = 'WARNING', ERROR = 'ERROR', CRITICAL = 'CRITICAL', ALERT = 'ALERT', EMERGENCY = 'EMERGENCY' }


	/** Additional information about the source code location that produced the log entry. */
	export interface LogEntrySourceLocation {

		/** Optional. Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name. */
		file?: string | null;

		/** Optional. Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information may be used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: qual.if.ied.Class.method (Java), dir/package.func (Go), function (Python). */
		function?: string | null;

		/** Optional. Line within the source file. 1-based; 0 indicates no line number available. */
		line?: string | null;
	}

	/** Additional information about the source code location that produced the log entry. */
	export interface LogEntrySourceLocationFormProperties {

		/** Optional. Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name. */
		file: FormControl<string | null | undefined>,

		/** Optional. Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information may be used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: qual.if.ied.Class.method (Java), dir/package.func (Go), function (Python). */
		function: FormControl<string | null | undefined>,

		/** Optional. Line within the source file. 1-based; 0 indicates no line number available. */
		line: FormControl<string | null | undefined>,
	}
	export function CreateLogEntrySourceLocationFormGroup() {
		return new FormGroup<LogEntrySourceLocationFormProperties>({
			file: new FormControl<string | null | undefined>(undefined),
			function: new FormControl<string | null | undefined>(undefined),
			line: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional information used to correlate multiple log entries. Used when a single LogEntry would exceed the Google Cloud Logging size limit and is split across multiple log entries. */
	export interface LogSplit {

		/**
		 * The index of this LogEntry in the sequence of split log entries. Log entries are given |index| values 0, 1, ..., n-1 for a sequence of n log entries.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index?: number | null;

		/**
		 * The total number of log entries that the original LogEntry was split into.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalSplits?: number | null;

		/** A globally unique identifier for all log entries in a sequence of split log entries. All log entries with the same |LogSplit.uid| are assumed to be part of the same sequence of split log entries. */
		uid?: string | null;
	}

	/** Additional information used to correlate multiple log entries. Used when a single LogEntry would exceed the Google Cloud Logging size limit and is split across multiple log entries. */
	export interface LogSplitFormProperties {

		/**
		 * The index of this LogEntry in the sequence of split log entries. Log entries are given |index| values 0, 1, ..., n-1 for a sequence of n log entries.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: FormControl<number | null | undefined>,

		/**
		 * The total number of log entries that the original LogEntry was split into.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalSplits: FormControl<number | null | undefined>,

		/** A globally unique identifier for all log entries in a sequence of split log entries. All log entries with the same |LogSplit.uid| are assumed to be part of the same sequence of split log entries. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateLogSplitFormGroup() {
		return new FormGroup<LogSplitFormProperties>({
			index: new FormControl<number | null | undefined>(undefined),
			totalSplits: new FormControl<number | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result returned from ListLogMetrics. */
	export interface ListLogMetricsResponse {

		/** A list of logs-based metrics. */
		metrics?: Array<LogMetric>;

		/** If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken. */
		nextPageToken?: string | null;
	}

	/** Result returned from ListLogMetrics. */
	export interface ListLogMetricsResponseFormProperties {

		/** If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLogMetricsResponseFormGroup() {
		return new FormGroup<ListLogMetricsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a logs-based metric. The value of the metric is the number of log entries that match a logs filter in a given time interval.Logs-based metrics can also be used to extract values from logs and create a distribution of the values. The distribution records the statistics of the extracted values along with an optional histogram of the values as specified by the bucket options. */
	export interface LogMetric {

		/** Optional. The resource name of the Log Bucket that owns the Log Metric. Only Log Buckets in projects are supported. The bucket has to be in the same project as the metric.For example:projects/my-project/locations/global/buckets/my-bucketIf empty, then the Log Metric is considered a non-Bucket Log Metric. */
		bucketName?: string | null;

		/** BucketOptions describes the bucket boundaries used to create a histogram for the distribution. The buckets can be in a linear sequence, an exponential sequence, or each bucket can be specified explicitly. BucketOptions does not include the number of values in each bucket.A bucket has an inclusive lower bound and exclusive upper bound for the values that are counted for that bucket. The upper bound of a bucket must be strictly greater than the lower bound. The sequence of N buckets for a distribution consists of an underflow bucket (number 0), zero or more finite buckets (number 1 through N - 2) and an overflow bucket (number N - 1). The buckets are contiguous: the lower bound of bucket i (i > 0) is the same as the upper bound of bucket i - 1. The buckets span the whole range of finite values: lower bound of the underflow bucket is -infinity and the upper bound of the overflow bucket is +infinity. The finite buckets are so-called because both bounds are finite. */
		bucketOptions?: BucketOptions;

		/** Output only. The creation timestamp of the metric.This field may not be present for older metrics. */
		createTime?: string | null;

		/** Optional. A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters. */
		description?: string | null;

		/** Optional. If set to True, then this metric is disabled and it does not generate any points. */
		disabled?: boolean | null;

		/** Required. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced_filters) which is used to match log entries. Example: "resource.type=gae_app AND severity>=ERROR" The maximum length of the filter is 20000 characters. */
		filter?: string | null;

		/** Optional. A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value. Each label key specified in the LabelDescriptor must have an associated extractor expression in this map. The syntax of the extractor expression is the same as for the value_extractor field.The extracted value is converted to the type defined in the label descriptor. If either the extraction or the type conversion fails, the label will have a default value. The default value for a string label is an empty string, for an integer label its 0, and for a boolean label its false.Note that there are upper bounds on the maximum number of labels and the number of active time series that are allowed in a project. */
		labelExtractors?: {[id: string]: string };

		/** Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable. */
		metricDescriptor?: MetricDescriptor;

		/** Required. The client-assigned metric identifier. Examples: "error_count", "nginx/requests".Metric identifiers are limited to 100 characters and can include only the following characters: A-Z, a-z, 0-9, and the special characters _-.,+!*',()%/. The forward-slash character (/) denotes a hierarchy of name pieces, and it cannot be the first character of the name.This field is the [METRIC_ID] part of a metric resource name in the format "projects/PROJECT_ID/metrics/METRIC_ID". Example: If the resource name of a metric is "projects/my-project/metrics/nginx%2Frequests", this field's value is "nginx/requests". */
		name?: string | null;

		/** Output only. The last update timestamp of the metric.This field may not be present for older metrics. */
		updateTime?: string | null;

		/** Optional. A value_extractor is required when using a distribution logs-based metric to extract the values to record from a log entry. Two functions are supported for value extraction: EXTRACT(field) or REGEXP_EXTRACT(field, regex). The arguments are: field: The name of the log entry field from which the value is to be extracted. regex: A regular expression using the Google RE2 syntax (https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified log entry field. The value of the field is converted to a string before applying the regex. It is an error to specify a regex that does not include exactly one capture group.The result of the extraction must be convertible to a double type, as the distribution always records double values. If either the extraction or the conversion to double fails, then those values are not recorded in the distribution.Example: REGEXP_EXTRACT(jsonPayload.request, ".*quantity=(\d+).*") */
		valueExtractor?: string | null;

		/** Deprecated. The API version that created or updated this metric. The v2 format is used by default and cannot be changed. */
		version?: LogMetricVersion | null;
	}

	/** Describes a logs-based metric. The value of the metric is the number of log entries that match a logs filter in a given time interval.Logs-based metrics can also be used to extract values from logs and create a distribution of the values. The distribution records the statistics of the extracted values along with an optional histogram of the values as specified by the bucket options. */
	export interface LogMetricFormProperties {

		/** Optional. The resource name of the Log Bucket that owns the Log Metric. Only Log Buckets in projects are supported. The bucket has to be in the same project as the metric.For example:projects/my-project/locations/global/buckets/my-bucketIf empty, then the Log Metric is considered a non-Bucket Log Metric. */
		bucketName: FormControl<string | null | undefined>,

		/** Output only. The creation timestamp of the metric.This field may not be present for older metrics. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters. */
		description: FormControl<string | null | undefined>,

		/** Optional. If set to True, then this metric is disabled and it does not generate any points. */
		disabled: FormControl<boolean | null | undefined>,

		/** Required. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced_filters) which is used to match log entries. Example: "resource.type=gae_app AND severity>=ERROR" The maximum length of the filter is 20000 characters. */
		filter: FormControl<string | null | undefined>,

		/** Optional. A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value. Each label key specified in the LabelDescriptor must have an associated extractor expression in this map. The syntax of the extractor expression is the same as for the value_extractor field.The extracted value is converted to the type defined in the label descriptor. If either the extraction or the type conversion fails, the label will have a default value. The default value for a string label is an empty string, for an integer label its 0, and for a boolean label its false.Note that there are upper bounds on the maximum number of labels and the number of active time series that are allowed in a project. */
		labelExtractors: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The client-assigned metric identifier. Examples: "error_count", "nginx/requests".Metric identifiers are limited to 100 characters and can include only the following characters: A-Z, a-z, 0-9, and the special characters _-.,+!*',()%/. The forward-slash character (/) denotes a hierarchy of name pieces, and it cannot be the first character of the name.This field is the [METRIC_ID] part of a metric resource name in the format "projects/PROJECT_ID/metrics/METRIC_ID". Example: If the resource name of a metric is "projects/my-project/metrics/nginx%2Frequests", this field's value is "nginx/requests". */
		name: FormControl<string | null | undefined>,

		/** Output only. The last update timestamp of the metric.This field may not be present for older metrics. */
		updateTime: FormControl<string | null | undefined>,

		/** Optional. A value_extractor is required when using a distribution logs-based metric to extract the values to record from a log entry. Two functions are supported for value extraction: EXTRACT(field) or REGEXP_EXTRACT(field, regex). The arguments are: field: The name of the log entry field from which the value is to be extracted. regex: A regular expression using the Google RE2 syntax (https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified log entry field. The value of the field is converted to a string before applying the regex. It is an error to specify a regex that does not include exactly one capture group.The result of the extraction must be convertible to a double type, as the distribution always records double values. If either the extraction or the conversion to double fails, then those values are not recorded in the distribution.Example: REGEXP_EXTRACT(jsonPayload.request, ".*quantity=(\d+).*") */
		valueExtractor: FormControl<string | null | undefined>,

		/** Deprecated. The API version that created or updated this metric. The v2 format is used by default and cannot be changed. */
		version: FormControl<LogMetricVersion | null | undefined>,
	}
	export function CreateLogMetricFormGroup() {
		return new FormGroup<LogMetricFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			labelExtractors: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			valueExtractor: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<LogMetricVersion | null | undefined>(undefined),
		});

	}


	/** Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable. */
	export interface MetricDescriptor {

		/** A detailed description of the metric, which can be used in documentation. */
		description?: string | null;

		/** A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example "Request count". This field is optional but it is recommended to be set for any metrics associated with user-visible concepts, such as Quota. */
		displayName?: string | null;

		/** The set of labels that can be used to describe a specific instance of this metric type. For example, the appengine.googleapis.com/http/server/response_latencies metric type has a label for the HTTP response code, response_code, so you can look at latencies for successful responses or just for responses that failed. */
		labels?: Array<LabelDescriptor>;

		/** Optional. The launch stage of the metric definition. */
		launchStage?: MetricDescriptorLaunchStage | null;

		/** Additional annotations that can be used to guide the usage of a metric. */
		metadata?: MetricDescriptorMetadata;

		/** Whether the metric records instantaneous values, changes to a value, etc. Some combinations of metric_kind and value_type might not be supported. */
		metricKind?: MetricDescriptorMetricKind | null;

		/** Read-only. If present, then a time series, which is identified partially by a metric type and a MonitoredResourceDescriptor, that is associated with this metric type can only be associated with one of the monitored resource types listed here. */
		monitoredResourceTypes?: Array<string>;

		/** The resource name of the metric descriptor. */
		name?: string | null;

		/** The metric type, including its DNS name prefix. The type is not URL-encoded. All user-defined metric types have the DNS name custom.googleapis.com or external.googleapis.com. Metric types should use a natural hierarchical grouping. For example: "custom.googleapis.com/invoice/paid/amount" "external.googleapis.com/prometheus/up" "appengine.googleapis.com/http/server/response_latencies" */
		type?: string | null;

		/** The units in which the metric value is reported. It is only applicable if the value_type is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of the stored metric values.Different systems might scale the values to be more easily displayed (so a value of 0.02kBy might be displayed as 20By, and a value of 3523kBy might be displayed as 3.5MBy). However, if the unit is kBy, then the value of the metric is always in thousands of bytes, no matter how it might be displayed.If you want a custom metric to record the exact number of CPU-seconds used by a job, you can create an INT64 CUMULATIVE metric whose unit is s{CPU} (or equivalently 1s{CPU} or just s). If the job uses 12,005 CPU-seconds, then the value is written as 12005.Alternatively, if you want a custom metric to record data in a more granular way, you can create a DOUBLE CUMULATIVE metric whose unit is ks{CPU}, and then write the value 12.005 (which is 12005/1000), or use Kis{CPU} and write 11.723 (which is 12005/1024).The supported units are a subset of The Unified Code for Units of Measure (https://unitsofmeasure.org/ucum.html) standard:Basic units (UNIT) bit bit By byte s second min minute h hour d day 1 dimensionlessPrefixes (PREFIX) k kilo (10^3) M mega (10^6) G giga (10^9) T tera (10^12) P peta (10^15) E exa (10^18) Z zetta (10^21) Y yotta (10^24) m milli (10^-3) u micro (10^-6) n nano (10^-9) p pico (10^-12) f femto (10^-15) a atto (10^-18) z zepto (10^-21) y yocto (10^-24) Ki kibi (2^10) Mi mebi (2^20) Gi gibi (2^30) Ti tebi (2^40) Pi pebi (2^50)GrammarThe grammar also includes these connectors: / division or ratio (as an infix operator). For examples, kBy/{email} or MiBy/10ms (although you should almost never have /s in a metric unit; rates should always be computed at query time from the underlying cumulative or delta value). . multiplication or composition (as an infix operator). For examples, GBy.d or k{watt}.h.The grammar for a unit is as follows: Expression = Component { "." Component } { "/" Component } ; Component = ( [ PREFIX ] UNIT | "%" ) [ Annotation ] | Annotation | "1" ; Annotation = "{" NAME "}" ; Notes: Annotation is just a comment if it follows a UNIT. If the annotation is used alone, then the unit is equivalent to 1. For examples, {request}/s == 1/s, By{transmitted}/s == By/s. NAME is a sequence of non-blank printable ASCII characters not containing { or }. 1 represents a unitary dimensionless unit (https://en.wikipedia.org/wiki/Dimensionless_quantity) of 1, such as in 1/s. It is typically used when none of the basic units are appropriate. For example, "new users per day" can be represented as 1/d or {new-users}/d (and a metric value 5 would mean "5 new users). Alternatively, "thousands of page views per day" would be represented as 1000/d or k1/d or k{page_views}/d (and a metric value of 5.3 would mean "5300 page views per day"). % represents dimensionless value of 1/100, and annotates values giving a percentage (so the metric values are typically in the range of 0..100, and a metric value 3 means "3 percent"). 10^2.% indicates a metric contains a ratio, typically in the range 0..1, that will be multiplied by 100 and displayed as a percentage (so a metric value 0.03 means "3 percent"). */
		unit?: string | null;

		/** Whether the measurement is an integer, a floating-point number, etc. Some combinations of metric_kind and value_type might not be supported. */
		valueType?: MetricDescriptorValueType | null;
	}

	/** Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable. */
	export interface MetricDescriptorFormProperties {

		/** A detailed description of the metric, which can be used in documentation. */
		description: FormControl<string | null | undefined>,

		/** A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example "Request count". This field is optional but it is recommended to be set for any metrics associated with user-visible concepts, such as Quota. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. The launch stage of the metric definition. */
		launchStage: FormControl<MetricDescriptorLaunchStage | null | undefined>,

		/** Whether the metric records instantaneous values, changes to a value, etc. Some combinations of metric_kind and value_type might not be supported. */
		metricKind: FormControl<MetricDescriptorMetricKind | null | undefined>,

		/** The resource name of the metric descriptor. */
		name: FormControl<string | null | undefined>,

		/** The metric type, including its DNS name prefix. The type is not URL-encoded. All user-defined metric types have the DNS name custom.googleapis.com or external.googleapis.com. Metric types should use a natural hierarchical grouping. For example: "custom.googleapis.com/invoice/paid/amount" "external.googleapis.com/prometheus/up" "appengine.googleapis.com/http/server/response_latencies" */
		type: FormControl<string | null | undefined>,

		/** The units in which the metric value is reported. It is only applicable if the value_type is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of the stored metric values.Different systems might scale the values to be more easily displayed (so a value of 0.02kBy might be displayed as 20By, and a value of 3523kBy might be displayed as 3.5MBy). However, if the unit is kBy, then the value of the metric is always in thousands of bytes, no matter how it might be displayed.If you want a custom metric to record the exact number of CPU-seconds used by a job, you can create an INT64 CUMULATIVE metric whose unit is s{CPU} (or equivalently 1s{CPU} or just s). If the job uses 12,005 CPU-seconds, then the value is written as 12005.Alternatively, if you want a custom metric to record data in a more granular way, you can create a DOUBLE CUMULATIVE metric whose unit is ks{CPU}, and then write the value 12.005 (which is 12005/1000), or use Kis{CPU} and write 11.723 (which is 12005/1024).The supported units are a subset of The Unified Code for Units of Measure (https://unitsofmeasure.org/ucum.html) standard:Basic units (UNIT) bit bit By byte s second min minute h hour d day 1 dimensionlessPrefixes (PREFIX) k kilo (10^3) M mega (10^6) G giga (10^9) T tera (10^12) P peta (10^15) E exa (10^18) Z zetta (10^21) Y yotta (10^24) m milli (10^-3) u micro (10^-6) n nano (10^-9) p pico (10^-12) f femto (10^-15) a atto (10^-18) z zepto (10^-21) y yocto (10^-24) Ki kibi (2^10) Mi mebi (2^20) Gi gibi (2^30) Ti tebi (2^40) Pi pebi (2^50)GrammarThe grammar also includes these connectors: / division or ratio (as an infix operator). For examples, kBy/{email} or MiBy/10ms (although you should almost never have /s in a metric unit; rates should always be computed at query time from the underlying cumulative or delta value). . multiplication or composition (as an infix operator). For examples, GBy.d or k{watt}.h.The grammar for a unit is as follows: Expression = Component { "." Component } { "/" Component } ; Component = ( [ PREFIX ] UNIT | "%" ) [ Annotation ] | Annotation | "1" ; Annotation = "{" NAME "}" ; Notes: Annotation is just a comment if it follows a UNIT. If the annotation is used alone, then the unit is equivalent to 1. For examples, {request}/s == 1/s, By{transmitted}/s == By/s. NAME is a sequence of non-blank printable ASCII characters not containing { or }. 1 represents a unitary dimensionless unit (https://en.wikipedia.org/wiki/Dimensionless_quantity) of 1, such as in 1/s. It is typically used when none of the basic units are appropriate. For example, "new users per day" can be represented as 1/d or {new-users}/d (and a metric value 5 would mean "5 new users). Alternatively, "thousands of page views per day" would be represented as 1000/d or k1/d or k{page_views}/d (and a metric value of 5.3 would mean "5300 page views per day"). % represents dimensionless value of 1/100, and annotates values giving a percentage (so the metric values are typically in the range of 0..100, and a metric value 3 means "3 percent"). 10^2.% indicates a metric contains a ratio, typically in the range 0..1, that will be multiplied by 100 and displayed as a percentage (so a metric value 0.03 means "3 percent"). */
		unit: FormControl<string | null | undefined>,

		/** Whether the measurement is an integer, a floating-point number, etc. Some combinations of metric_kind and value_type might not be supported. */
		valueType: FormControl<MetricDescriptorValueType | null | undefined>,
	}
	export function CreateMetricDescriptorFormGroup() {
		return new FormGroup<MetricDescriptorFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			launchStage: new FormControl<MetricDescriptorLaunchStage | null | undefined>(undefined),
			metricKind: new FormControl<MetricDescriptorMetricKind | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			valueType: new FormControl<MetricDescriptorValueType | null | undefined>(undefined),
		});

	}

	export enum MetricDescriptorLaunchStage { LAUNCH_STAGE_UNSPECIFIED = 'LAUNCH_STAGE_UNSPECIFIED', UNIMPLEMENTED = 'UNIMPLEMENTED', PRELAUNCH = 'PRELAUNCH', EARLY_ACCESS = 'EARLY_ACCESS', ALPHA = 'ALPHA', BETA = 'BETA', GA = 'GA', DEPRECATED = 'DEPRECATED' }


	/** Additional annotations that can be used to guide the usage of a metric. */
	export interface MetricDescriptorMetadata {

		/** The delay of data points caused by ingestion. Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors. */
		ingestDelay?: string | null;

		/** Deprecated. Must use the MetricDescriptor.launch_stage instead. */
		launchStage?: MetricDescriptorLaunchStage | null;

		/** The sampling period of metric data points. For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period. */
		samplePeriod?: string | null;
	}

	/** Additional annotations that can be used to guide the usage of a metric. */
	export interface MetricDescriptorMetadataFormProperties {

		/** The delay of data points caused by ingestion. Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors. */
		ingestDelay: FormControl<string | null | undefined>,

		/** Deprecated. Must use the MetricDescriptor.launch_stage instead. */
		launchStage: FormControl<MetricDescriptorLaunchStage | null | undefined>,

		/** The sampling period of metric data points. For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period. */
		samplePeriod: FormControl<string | null | undefined>,
	}
	export function CreateMetricDescriptorMetadataFormGroup() {
		return new FormGroup<MetricDescriptorMetadataFormProperties>({
			ingestDelay: new FormControl<string | null | undefined>(undefined),
			launchStage: new FormControl<MetricDescriptorLaunchStage | null | undefined>(undefined),
			samplePeriod: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MetricDescriptorMetricKind { METRIC_KIND_UNSPECIFIED = 'METRIC_KIND_UNSPECIFIED', GAUGE = 'GAUGE', DELTA = 'DELTA', CUMULATIVE = 'CUMULATIVE' }

	export enum MetricDescriptorValueType { VALUE_TYPE_UNSPECIFIED = 'VALUE_TYPE_UNSPECIFIED', BOOL = 'BOOL', INT64 = 'INT64', DOUBLE = 'DOUBLE', STRING = 'STRING', DISTRIBUTION = 'DISTRIBUTION', MONEY = 'MONEY' }

	export enum LogMetricVersion { V2 = 'V2', V1 = 'V1' }


	/** Result returned from ListLogs. */
	export interface ListLogsResponse {

		/** A list of log names. For example, "projects/my-project/logs/syslog" or "organizations/123/logs/cloudresourcemanager.googleapis.com%2Factivity". */
		logNames?: Array<string>;

		/** If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken. */
		nextPageToken?: string | null;
	}

	/** Result returned from ListLogs. */
	export interface ListLogsResponseFormProperties {

		/** If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLogsResponseFormGroup() {
		return new FormGroup<ListLogsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result returned from ListMonitoredResourceDescriptors. */
	export interface ListMonitoredResourceDescriptorsResponse {

		/** If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken. */
		nextPageToken?: string | null;

		/** A list of resource descriptors. */
		resourceDescriptors?: Array<MonitoredResourceDescriptor>;
	}

	/** Result returned from ListMonitoredResourceDescriptors. */
	export interface ListMonitoredResourceDescriptorsResponseFormProperties {

		/** If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListMonitoredResourceDescriptorsResponseFormGroup() {
		return new FormGroup<ListMonitoredResourceDescriptorsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that describes the schema of a MonitoredResource object using a type name and a set of labels. For example, the monitored resource descriptor for Google Compute Engine VM instances has a type of "gce_instance" and specifies the use of the labels "instance_id" and "zone" to identify particular VM instances.Different APIs can support different monitored resource types. APIs generally provide a list method that returns the monitored resource descriptors used by the API. */
	export interface MonitoredResourceDescriptor {

		/** Optional. A detailed description of the monitored resource type that might be used in documentation. */
		description?: string | null;

		/** Optional. A concise name for the monitored resource type that might be displayed in user interfaces. It should be a Title Cased Noun Phrase, without any article or other determiners. For example, "Google Cloud SQL Database". */
		displayName?: string | null;

		/** Required. A set of labels used to describe instances of this monitored resource type. For example, an individual Google Cloud SQL database is identified by values for the labels "database_id" and "zone". */
		labels?: Array<LabelDescriptor>;

		/** Optional. The launch stage of the monitored resource definition. */
		launchStage?: MetricDescriptorLaunchStage | null;

		/** Optional. The resource name of the monitored resource descriptor: "projects/{project_id}/monitoredResourceDescriptors/{type}" where {type} is the value of the type field in this object and {project_id} is a project ID that provides API-specific context for accessing the type. APIs that do not use project information can use the resource name format "monitoredResourceDescriptors/{type}". */
		name?: string | null;

		/** Required. The monitored resource type. For example, the type "cloudsql_database" represents databases in Google Cloud SQL. For a list of types, see Monitored resource types (https://cloud.google.com/monitoring/api/resources) and Logging resource types (https://cloud.google.com/logging/docs/api/v2/resource-list). */
		type?: string | null;
	}

	/** An object that describes the schema of a MonitoredResource object using a type name and a set of labels. For example, the monitored resource descriptor for Google Compute Engine VM instances has a type of "gce_instance" and specifies the use of the labels "instance_id" and "zone" to identify particular VM instances.Different APIs can support different monitored resource types. APIs generally provide a list method that returns the monitored resource descriptors used by the API. */
	export interface MonitoredResourceDescriptorFormProperties {

		/** Optional. A detailed description of the monitored resource type that might be used in documentation. */
		description: FormControl<string | null | undefined>,

		/** Optional. A concise name for the monitored resource type that might be displayed in user interfaces. It should be a Title Cased Noun Phrase, without any article or other determiners. For example, "Google Cloud SQL Database". */
		displayName: FormControl<string | null | undefined>,

		/** Optional. The launch stage of the monitored resource definition. */
		launchStage: FormControl<MetricDescriptorLaunchStage | null | undefined>,

		/** Optional. The resource name of the monitored resource descriptor: "projects/{project_id}/monitoredResourceDescriptors/{type}" where {type} is the value of the type field in this object and {project_id} is a project ID that provides API-specific context for accessing the type. APIs that do not use project information can use the resource name format "monitoredResourceDescriptors/{type}". */
		name: FormControl<string | null | undefined>,

		/** Required. The monitored resource type. For example, the type "cloudsql_database" represents databases in Google Cloud SQL. For a list of types, see Monitored resource types (https://cloud.google.com/monitoring/api/resources) and Logging resource types (https://cloud.google.com/logging/docs/api/v2/resource-list). */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMonitoredResourceDescriptorFormGroup() {
		return new FormGroup<MonitoredResourceDescriptorFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			launchStage: new FormControl<MetricDescriptorLaunchStage | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
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

		/** If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available. */
		done?: boolean | null;

		/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse. */
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


	/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
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

	/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
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


	/** The response from ListRecentQueries. */
	export interface ListRecentQueriesResponse {

		/** If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken. */
		nextPageToken?: string | null;

		/** A list of recent queries. */
		recentQueries?: Array<RecentQuery>;

		/** The unreachable resources. Each resource can be either 1) a saved query if a specific query is unreachable or 2) a location if a specific location is unreachable. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/recentQueries/[QUERY_ID]" "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example:"projects/my-project/locations/global/recentQueries/12345678" "projects/my-project/locations/global"If there are unreachable resources, the response will first return pages that contain recent queries, and then return pages that contain the unreachable resources. */
		unreachable?: Array<string>;
	}

	/** The response from ListRecentQueries. */
	export interface ListRecentQueriesResponseFormProperties {

		/** If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecentQueriesResponseFormGroup() {
		return new FormGroup<ListRecentQueriesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a recent query executed on the Logs Explorer or Log Analytics page within the last ~ 30 days. */
	export interface RecentQuery {

		/** Output only. The timestamp when this query was last run. */
		lastRunTime?: string | null;

		/** Describes a Cloud Logging query that can be run in Logs Explorer UI or via the logging API.In addition to the query itself, additional information may be stored to capture the display configuration and other UI state used in association with analysis of query results. */
		loggingQuery?: LoggingQuery;

		/** Output only. Resource name of the recent query.In the format: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/recentQueries/[QUERY_ID]" For a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support)The QUERY_ID is a system generated alphanumeric ID. */
		name?: string | null;

		/** Describes an analytics query that can be run in the Log Analytics page of Google Cloud console.Preview: This is a preview feature and may be subject to change before final release. */
		opsAnalyticsQuery?: OpsAnalyticsQuery;
	}

	/** Describes a recent query executed on the Logs Explorer or Log Analytics page within the last ~ 30 days. */
	export interface RecentQueryFormProperties {

		/** Output only. The timestamp when this query was last run. */
		lastRunTime: FormControl<string | null | undefined>,

		/** Output only. Resource name of the recent query.In the format: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/recentQueries/[QUERY_ID]" For a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support)The QUERY_ID is a system generated alphanumeric ID. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRecentQueryFormGroup() {
		return new FormGroup<RecentQueryFormProperties>({
			lastRunTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a Cloud Logging query that can be run in Logs Explorer UI or via the logging API.In addition to the query itself, additional information may be stored to capture the display configuration and other UI state used in association with analysis of query results. */
	export interface LoggingQuery {

		/** Required. An advanced query using the Logging Query Language (https://cloud.google.com/logging/docs/view/logging-query-language). The maximum length of the filter is 20000 characters. */
		filter?: string | null;

		/**
		 * Characters will be counted from the end of the string.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		summaryFieldEnd?: number | null;

		/**
		 * Characters will be counted from the start of the string.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		summaryFieldStart?: number | null;

		/** Optional. The set of summary fields to display for this saved query. */
		summaryFields?: Array<SummaryField>;
	}

	/** Describes a Cloud Logging query that can be run in Logs Explorer UI or via the logging API.In addition to the query itself, additional information may be stored to capture the display configuration and other UI state used in association with analysis of query results. */
	export interface LoggingQueryFormProperties {

		/** Required. An advanced query using the Logging Query Language (https://cloud.google.com/logging/docs/view/logging-query-language). The maximum length of the filter is 20000 characters. */
		filter: FormControl<string | null | undefined>,

		/**
		 * Characters will be counted from the end of the string.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		summaryFieldEnd: FormControl<number | null | undefined>,

		/**
		 * Characters will be counted from the start of the string.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		summaryFieldStart: FormControl<number | null | undefined>,
	}
	export function CreateLoggingQueryFormGroup() {
		return new FormGroup<LoggingQueryFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			summaryFieldEnd: new FormControl<number | null | undefined>(undefined),
			summaryFieldStart: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A field from the LogEntry that is added to the summary line (https://cloud.google.com/logging/docs/view/logs-explorer-interface#add-summary-fields) for a query in the Logs Explorer. */
	export interface SummaryField {

		/** Optional. The field from the LogEntry to include in the summary line, for example resource.type or jsonPayload.name. */
		field?: string | null;
	}

	/** A field from the LogEntry that is added to the summary line (https://cloud.google.com/logging/docs/view/logs-explorer-interface#add-summary-fields) for a query in the Logs Explorer. */
	export interface SummaryFieldFormProperties {

		/** Optional. The field from the LogEntry to include in the summary line, for example resource.type or jsonPayload.name. */
		field: FormControl<string | null | undefined>,
	}
	export function CreateSummaryFieldFormGroup() {
		return new FormGroup<SummaryFieldFormProperties>({
			field: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an analytics query that can be run in the Log Analytics page of Google Cloud console.Preview: This is a preview feature and may be subject to change before final release. */
	export interface OpsAnalyticsQuery {

		/** Required. A logs analytics SQL query, which generally follows BigQuery format.This is the SQL query that appears in the Log Analytics UI's query editor. */
		sqlQueryText?: string | null;
	}

	/** Describes an analytics query that can be run in the Log Analytics page of Google Cloud console.Preview: This is a preview feature and may be subject to change before final release. */
	export interface OpsAnalyticsQueryFormProperties {

		/** Required. A logs analytics SQL query, which generally follows BigQuery format.This is the SQL query that appears in the Log Analytics UI's query editor. */
		sqlQueryText: FormControl<string | null | undefined>,
	}
	export function CreateOpsAnalyticsQueryFormGroup() {
		return new FormGroup<OpsAnalyticsQueryFormProperties>({
			sqlQueryText: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response from ListSavedQueries. */
	export interface ListSavedQueriesResponse {

		/** If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken. */
		nextPageToken?: string | null;

		/** A list of saved queries. */
		savedQueries?: Array<SavedQuery>;

		/** The unreachable resources. It can be either 1) a saved query if a specific query is unreachable or 2) a location if a specific location is unreachabe. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example: "projects/my-project/locations/global/savedQueries/12345678" "projects/my-project/locations/global" If there are unreachable resources, the response will first return pages that contain saved queries, and then return pages that contain the unreachable resources. */
		unreachable?: Array<string>;
	}

	/** The response from ListSavedQueries. */
	export interface ListSavedQueriesResponseFormProperties {

		/** If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSavedQueriesResponseFormGroup() {
		return new FormGroup<ListSavedQueriesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a query that has been saved by a user. */
	export interface SavedQuery {

		/** Output only. The timestamp when the saved query was created. */
		createTime?: string | null;

		/** Optional. A human readable description of the saved query. */
		description?: string | null;

		/** Optional. The user specified title for the SavedQuery. */
		displayName?: string | null;

		/** Describes a Cloud Logging query that can be run in Logs Explorer UI or via the logging API.In addition to the query itself, additional information may be stored to capture the display configuration and other UI state used in association with analysis of query results. */
		loggingQuery?: LoggingQuery;

		/** Output only. Resource name of the saved query.In the format: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" For a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support#bucket-regions)After the saved query is created, the location cannot be changed.If the user doesn't provide a QUERY_ID, the system will generate an alphanumeric ID. */
		name?: string | null;

		/** Describes an analytics query that can be run in the Log Analytics page of Google Cloud console.Preview: This is a preview feature and may be subject to change before final release. */
		opsAnalyticsQuery?: OpsAnalyticsQuery;

		/** Output only. The timestamp when the saved query was last updated. */
		updateTime?: string | null;
	}

	/** Describes a query that has been saved by a user. */
	export interface SavedQueryFormProperties {

		/** Output only. The timestamp when the saved query was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. A human readable description of the saved query. */
		description: FormControl<string | null | undefined>,

		/** Optional. The user specified title for the SavedQuery. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Resource name of the saved query.In the format: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" For a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support#bucket-regions)After the saved query is created, the location cannot be changed.If the user doesn't provide a QUERY_ID, the system will generate an alphanumeric ID. */
		name: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the saved query was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateSavedQueryFormGroup() {
		return new FormGroup<SavedQueryFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result returned from ListSinks. */
	export interface ListSinksResponse {

		/** If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken. */
		nextPageToken?: string | null;

		/** A list of sinks. */
		sinks?: Array<LogSink>;
	}

	/** Result returned from ListSinks. */
	export interface ListSinksResponseFormProperties {

		/** If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSinksResponseFormGroup() {
		return new FormGroup<ListSinksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a sink used to export log entries to one of the following destinations: a Cloud Logging log bucket, a Cloud Storage bucket, a BigQuery dataset, a Pub/Sub topic, a Cloud project.A logs filter controls which log entries are exported. The sink must be created within a project, organization, billing account, or folder. */
	export interface LogSink {

		/** Options that change functionality of a sink exporting data to BigQuery. */
		bigqueryOptions?: BigQueryOptions;

		/** Output only. The creation timestamp of the sink.This field may not be present for older sinks. */
		createTime?: string | null;

		/** Optional. A description of this sink.The maximum length of the description is 8000 characters. */
		description?: string | null;

		/** Required. The export destination: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" "logging.googleapis.com/projects/[PROJECT_ID]" "logging.googleapis.com/projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" The sink's writer_identity, set when the sink is created, must have permission to write to the destination or else the log entries are not exported. For more information, see Exporting Logs with Sinks (https://cloud.google.com/logging/docs/api/tasks/exporting-logs). */
		destination?: string | null;

		/** Optional. If set to true, then this sink is disabled and it does not export any log entries. */
		disabled?: boolean | null;

		/** Optional. Log entries that match any of these exclusion filters will not be exported.If a log entry is matched by both filter and one of exclusion_filters it will not be exported. */
		exclusions?: Array<LogExclusion>;

		/** Optional. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries). The only exported log entries are those that are in the resource owning the sink and that match the filter.For example:logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity>=ERROR */
		filter?: string | null;

		/** Optional. This field applies only to sinks owned by organizations and folders. If the field is false, the default, only the logs owned by the sink's parent resource are available for export. If the field is true, then log entries from all the projects, folders, and billing accounts contained in the sink's parent resource are also available for export. Whether a particular log entry from the children is exported depends on the sink's filter expression.For example, if this field is true, then the filter resource.type=gce_instance would export all Compute Engine VM instance log entries from all projects in the sink's parent.To only export entries from certain child projects, filter on the project part of the log name:logName:("projects/test-project1/" OR "projects/test-project2/") AND resource.type=gce_instance */
		includeChildren?: boolean | null;

		/** Output only. The client-assigned sink identifier, unique within the project.For example: "my-syslog-errors-to-pubsub".Sink identifiers are limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, periods.First character has to be alphanumeric. */
		name?: string | null;

		/** Deprecated. This field is unused. */
		outputVersionFormat?: LogSinkOutputVersionFormat | null;

		/** Output only. The last update timestamp of the sink.This field may not be present for older sinks. */
		updateTime?: string | null;

		/** Output only. An IAM identity—a service account or group—under which Cloud Logging writes the exported log entries to the sink's destination. This field is either set by specifying custom_writer_identity or set automatically by sinks.create and sinks.update based on the value of unique_writer_identity in those methods.Until you grant this identity write-access to the destination, log entry exports from this sink will fail. For more information, see Granting Access for a Resource (https://cloud.google.com/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource). Consult the destination service's documentation to determine the appropriate IAM roles to assign to the identity.Sinks that have a destination that is a log bucket in the same project as the sink cannot have a writer_identity and no additional permissions are required. */
		writerIdentity?: string | null;
	}

	/** Describes a sink used to export log entries to one of the following destinations: a Cloud Logging log bucket, a Cloud Storage bucket, a BigQuery dataset, a Pub/Sub topic, a Cloud project.A logs filter controls which log entries are exported. The sink must be created within a project, organization, billing account, or folder. */
	export interface LogSinkFormProperties {

		/** Output only. The creation timestamp of the sink.This field may not be present for older sinks. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. A description of this sink.The maximum length of the description is 8000 characters. */
		description: FormControl<string | null | undefined>,

		/** Required. The export destination: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" "logging.googleapis.com/projects/[PROJECT_ID]" "logging.googleapis.com/projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" The sink's writer_identity, set when the sink is created, must have permission to write to the destination or else the log entries are not exported. For more information, see Exporting Logs with Sinks (https://cloud.google.com/logging/docs/api/tasks/exporting-logs). */
		destination: FormControl<string | null | undefined>,

		/** Optional. If set to true, then this sink is disabled and it does not export any log entries. */
		disabled: FormControl<boolean | null | undefined>,

		/** Optional. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries). The only exported log entries are those that are in the resource owning the sink and that match the filter.For example:logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity>=ERROR */
		filter: FormControl<string | null | undefined>,

		/** Optional. This field applies only to sinks owned by organizations and folders. If the field is false, the default, only the logs owned by the sink's parent resource are available for export. If the field is true, then log entries from all the projects, folders, and billing accounts contained in the sink's parent resource are also available for export. Whether a particular log entry from the children is exported depends on the sink's filter expression.For example, if this field is true, then the filter resource.type=gce_instance would export all Compute Engine VM instance log entries from all projects in the sink's parent.To only export entries from certain child projects, filter on the project part of the log name:logName:("projects/test-project1/" OR "projects/test-project2/") AND resource.type=gce_instance */
		includeChildren: FormControl<boolean | null | undefined>,

		/** Output only. The client-assigned sink identifier, unique within the project.For example: "my-syslog-errors-to-pubsub".Sink identifiers are limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, periods.First character has to be alphanumeric. */
		name: FormControl<string | null | undefined>,

		/** Deprecated. This field is unused. */
		outputVersionFormat: FormControl<LogSinkOutputVersionFormat | null | undefined>,

		/** Output only. The last update timestamp of the sink.This field may not be present for older sinks. */
		updateTime: FormControl<string | null | undefined>,

		/** Output only. An IAM identity—a service account or group—under which Cloud Logging writes the exported log entries to the sink's destination. This field is either set by specifying custom_writer_identity or set automatically by sinks.create and sinks.update based on the value of unique_writer_identity in those methods.Until you grant this identity write-access to the destination, log entry exports from this sink will fail. For more information, see Granting Access for a Resource (https://cloud.google.com/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource). Consult the destination service's documentation to determine the appropriate IAM roles to assign to the identity.Sinks that have a destination that is a log bucket in the same project as the sink cannot have a writer_identity and no additional permissions are required. */
		writerIdentity: FormControl<string | null | undefined>,
	}
	export function CreateLogSinkFormGroup() {
		return new FormGroup<LogSinkFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			includeChildren: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			outputVersionFormat: new FormControl<LogSinkOutputVersionFormat | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			writerIdentity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LogSinkOutputVersionFormat { VERSION_FORMAT_UNSPECIFIED = 'VERSION_FORMAT_UNSPECIFIED', V2 = 'V2', V1 = 'V1' }


	/** The response from ListViews. */
	export interface ListViewsResponse {

		/** If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken. */
		nextPageToken?: string | null;

		/** A list of views. */
		views?: Array<LogView>;
	}

	/** The response from ListViews. */
	export interface ListViewsResponseFormProperties {

		/** If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListViewsResponseFormGroup() {
		return new FormGroup<ListViewsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a view over log entries in a bucket. */
	export interface LogView {

		/** Output only. The creation timestamp of the view. */
		createTime?: string | null;

		/** Optional. Describes this view. */
		description?: string | null;

		/** Optional. Filter that restricts which log entries in a bucket are visible in this view.Filters must be logical conjunctions that use the AND operator, and they can use any of the following qualifiers: SOURCE(), which specifies a project, folder, organization, or billing account of origin. resource.type, which specifies the resource type. LOG_ID(), which identifies the log.They can also use the negations of these qualifiers with the NOT operator.For example:SOURCE("projects/myproject") AND resource.type = "gce_instance" AND NOT LOG_ID("stdout") */
		filter?: string | null;

		/** Output only. The resource name of the view.For example:projects/my-project/locations/global/buckets/my-bucket/views/my-view */
		name?: string | null;

		/** Output only. The last update timestamp of the view. */
		updateTime?: string | null;
	}

	/** Describes a view over log entries in a bucket. */
	export interface LogViewFormProperties {

		/** Output only. The creation timestamp of the view. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Describes this view. */
		description: FormControl<string | null | undefined>,

		/** Optional. Filter that restricts which log entries in a bucket are visible in this view.Filters must be logical conjunctions that use the AND operator, and they can use any of the following qualifiers: SOURCE(), which specifies a project, folder, organization, or billing account of origin. resource.type, which specifies the resource type. LOG_ID(), which identifies the log.They can also use the negations of these qualifiers with the NOT operator.For example:SOURCE("projects/myproject") AND resource.type = "gce_instance" AND NOT LOG_ID("stdout") */
		filter: FormControl<string | null | undefined>,

		/** Output only. The resource name of the view.For example:projects/my-project/locations/global/buckets/my-bucket/views/my-view */
		name: FormControl<string | null | undefined>,

		/** Output only. The last update timestamp of the view. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateLogViewFormGroup() {
		return new FormGroup<LogViewFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Cloud Logging specific location metadata. */
	export interface LocationMetadata {

		/** Indicates whether or not Log Analytics features are supported in the given location. */
		logAnalyticsEnabled?: boolean | null;
	}

	/** Cloud Logging specific location metadata. */
	export interface LocationMetadataFormProperties {

		/** Indicates whether or not Log Analytics features are supported in the given location. */
		logAnalyticsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateLocationMetadataFormGroup() {
		return new FormGroup<LocationMetadataFormProperties>({
			logAnalyticsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Application log line emitted while processing a request. */
	export interface LogLine {

		/** App-provided log message. */
		logMessage?: string | null;

		/** Severity of this log entry. */
		severity?: LogEntrySeverity | null;

		/** Specifies a location in a source code file. */
		sourceLocation?: SourceLocation;

		/** Approximate time when this log entry was made. */
		time?: string | null;
	}

	/** Application log line emitted while processing a request. */
	export interface LogLineFormProperties {

		/** App-provided log message. */
		logMessage: FormControl<string | null | undefined>,

		/** Severity of this log entry. */
		severity: FormControl<LogEntrySeverity | null | undefined>,

		/** Approximate time when this log entry was made. */
		time: FormControl<string | null | undefined>,
	}
	export function CreateLogLineFormGroup() {
		return new FormGroup<LogLineFormProperties>({
			logMessage: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<LogEntrySeverity | null | undefined>(undefined),
			time: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a location in a source code file. */
	export interface SourceLocation {

		/** Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name. */
		file?: string | null;

		/** Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information is used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: qual.if.ied.Class.method (Java), dir/package.func (Go), function (Python). */
		functionName?: string | null;

		/** Line within the source file. */
		line?: string | null;
	}

	/** Specifies a location in a source code file. */
	export interface SourceLocationFormProperties {

		/** Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name. */
		file: FormControl<string | null | undefined>,

		/** Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information is used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: qual.if.ied.Class.method (Java), dir/package.func (Go), function (Python). */
		functionName: FormControl<string | null | undefined>,

		/** Line within the source file. */
		line: FormControl<string | null | undefined>,
	}
	export function CreateSourceLocationFormGroup() {
		return new FormGroup<SourceLocationFormProperties>({
			file: new FormControl<string | null | undefined>(undefined),
			functionName: new FormControl<string | null | undefined>(undefined),
			line: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Complete log information about a single HTTP request to an App Engine application. */
	export interface RequestLog {

		/** App Engine release version. */
		appEngineRelease?: string | null;

		/** Application that handled this request. */
		appId?: string | null;

		/**
		 * An indication of the relative cost of serving this request.
		 * Type: double
		 */
		cost?: number | null;

		/** Time when the request finished. */
		endTime?: string | null;

		/** Whether this request is finished or active. */
		finished?: boolean | null;

		/** Whether this is the first RequestLog entry for this request. If an active request has several RequestLog entries written to Stackdriver Logging, then this field will be set for one of them. */
		first?: boolean | null;

		/** Internet host and port number of the resource being requested. */
		host?: string | null;

		/** HTTP version of request. Example: "HTTP/1.1". */
		httpVersion?: string | null;

		/** An identifier for the instance that handled the request. */
		instanceId?: string | null;

		/**
		 * If the instance processing this request belongs to a manually scaled module, then this is the 0-based index of the instance. Otherwise, this value is -1.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		instanceIndex?: number | null;

		/** Origin IP address. */
		ip?: string | null;

		/** Latency of the request. */
		latency?: string | null;

		/** A list of log lines emitted by the application while serving this request. */
		line?: Array<LogLine>;

		/** Number of CPU megacycles used to process request. */
		megaCycles?: string | null;

		/** Request method. Example: "GET", "HEAD", "PUT", "POST", "DELETE". */
		method?: string | null;

		/** Module of the application that handled this request. */
		moduleId?: string | null;

		/** The logged-in user who made the request.Most likely, this is the part of the user's email before the @ sign. The field value is the same for different requests from the same user, but different users can have similar names. This information is also available to the application via the App Engine Users API.This field will be populated starting with App Engine 1.9.21. */
		nickname?: string | null;

		/** Time this request spent in the pending request queue. */
		pendingTime?: string | null;

		/** Referrer URL of request. */
		referrer?: string | null;

		/** Globally unique identifier for a request, which is based on the request start time. Request IDs for requests which started later will compare greater as strings than those for requests which started earlier. */
		requestId?: string | null;

		/** Contains the path and query portion of the URL that was requested. For example, if the URL was "http://example.com/app?name=val", the resource would be "/app?name=val". The fragment identifier, which is identified by the # character, is not included. */
		resource?: string | null;

		/** Size in bytes sent back to client by request. */
		responseSize?: string | null;

		/** Source code for the application that handled this request. There can be more than one source reference per deployed application if source code is distributed among multiple repositories. */
		sourceReference?: Array<SourceReference>;

		/** Stackdriver Trace span identifier for this request. */
		spanId?: string | null;

		/** Time when the request started. */
		startTime?: string | null;

		/**
		 * HTTP response status code. Example: 200, 404.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;

		/** Task name of the request, in the case of an offline request. */
		taskName?: string | null;

		/** Queue name of the request, in the case of an offline request. */
		taskQueueName?: string | null;

		/** Stackdriver Trace identifier for this request. */
		traceId?: string | null;

		/** If true, the value in the 'trace_id' field was sampled for storage in a trace backend. */
		traceSampled?: boolean | null;

		/** File or class that handled the request. */
		urlMapEntry?: string | null;

		/** User agent that made the request. */
		userAgent?: string | null;

		/** Version of the application that handled this request. */
		versionId?: string | null;

		/** Whether this was a loading request for the instance. */
		wasLoadingRequest?: boolean | null;
	}

	/** Complete log information about a single HTTP request to an App Engine application. */
	export interface RequestLogFormProperties {

		/** App Engine release version. */
		appEngineRelease: FormControl<string | null | undefined>,

		/** Application that handled this request. */
		appId: FormControl<string | null | undefined>,

		/**
		 * An indication of the relative cost of serving this request.
		 * Type: double
		 */
		cost: FormControl<number | null | undefined>,

		/** Time when the request finished. */
		endTime: FormControl<string | null | undefined>,

		/** Whether this request is finished or active. */
		finished: FormControl<boolean | null | undefined>,

		/** Whether this is the first RequestLog entry for this request. If an active request has several RequestLog entries written to Stackdriver Logging, then this field will be set for one of them. */
		first: FormControl<boolean | null | undefined>,

		/** Internet host and port number of the resource being requested. */
		host: FormControl<string | null | undefined>,

		/** HTTP version of request. Example: "HTTP/1.1". */
		httpVersion: FormControl<string | null | undefined>,

		/** An identifier for the instance that handled the request. */
		instanceId: FormControl<string | null | undefined>,

		/**
		 * If the instance processing this request belongs to a manually scaled module, then this is the 0-based index of the instance. Otherwise, this value is -1.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		instanceIndex: FormControl<number | null | undefined>,

		/** Origin IP address. */
		ip: FormControl<string | null | undefined>,

		/** Latency of the request. */
		latency: FormControl<string | null | undefined>,

		/** Number of CPU megacycles used to process request. */
		megaCycles: FormControl<string | null | undefined>,

		/** Request method. Example: "GET", "HEAD", "PUT", "POST", "DELETE". */
		method: FormControl<string | null | undefined>,

		/** Module of the application that handled this request. */
		moduleId: FormControl<string | null | undefined>,

		/** The logged-in user who made the request.Most likely, this is the part of the user's email before the @ sign. The field value is the same for different requests from the same user, but different users can have similar names. This information is also available to the application via the App Engine Users API.This field will be populated starting with App Engine 1.9.21. */
		nickname: FormControl<string | null | undefined>,

		/** Time this request spent in the pending request queue. */
		pendingTime: FormControl<string | null | undefined>,

		/** Referrer URL of request. */
		referrer: FormControl<string | null | undefined>,

		/** Globally unique identifier for a request, which is based on the request start time. Request IDs for requests which started later will compare greater as strings than those for requests which started earlier. */
		requestId: FormControl<string | null | undefined>,

		/** Contains the path and query portion of the URL that was requested. For example, if the URL was "http://example.com/app?name=val", the resource would be "/app?name=val". The fragment identifier, which is identified by the # character, is not included. */
		resource: FormControl<string | null | undefined>,

		/** Size in bytes sent back to client by request. */
		responseSize: FormControl<string | null | undefined>,

		/** Stackdriver Trace span identifier for this request. */
		spanId: FormControl<string | null | undefined>,

		/** Time when the request started. */
		startTime: FormControl<string | null | undefined>,

		/**
		 * HTTP response status code. Example: 200, 404.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/** Task name of the request, in the case of an offline request. */
		taskName: FormControl<string | null | undefined>,

		/** Queue name of the request, in the case of an offline request. */
		taskQueueName: FormControl<string | null | undefined>,

		/** Stackdriver Trace identifier for this request. */
		traceId: FormControl<string | null | undefined>,

		/** If true, the value in the 'trace_id' field was sampled for storage in a trace backend. */
		traceSampled: FormControl<boolean | null | undefined>,

		/** File or class that handled the request. */
		urlMapEntry: FormControl<string | null | undefined>,

		/** User agent that made the request. */
		userAgent: FormControl<string | null | undefined>,

		/** Version of the application that handled this request. */
		versionId: FormControl<string | null | undefined>,

		/** Whether this was a loading request for the instance. */
		wasLoadingRequest: FormControl<boolean | null | undefined>,
	}
	export function CreateRequestLogFormGroup() {
		return new FormGroup<RequestLogFormProperties>({
			appEngineRelease: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			cost: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			finished: new FormControl<boolean | null | undefined>(undefined),
			first: new FormControl<boolean | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			httpVersion: new FormControl<string | null | undefined>(undefined),
			instanceId: new FormControl<string | null | undefined>(undefined),
			instanceIndex: new FormControl<number | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
			latency: new FormControl<string | null | undefined>(undefined),
			megaCycles: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			moduleId: new FormControl<string | null | undefined>(undefined),
			nickname: new FormControl<string | null | undefined>(undefined),
			pendingTime: new FormControl<string | null | undefined>(undefined),
			referrer: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
			responseSize: new FormControl<string | null | undefined>(undefined),
			spanId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			taskName: new FormControl<string | null | undefined>(undefined),
			taskQueueName: new FormControl<string | null | undefined>(undefined),
			traceId: new FormControl<string | null | undefined>(undefined),
			traceSampled: new FormControl<boolean | null | undefined>(undefined),
			urlMapEntry: new FormControl<string | null | undefined>(undefined),
			userAgent: new FormControl<string | null | undefined>(undefined),
			versionId: new FormControl<string | null | undefined>(undefined),
			wasLoadingRequest: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A reference to a particular snapshot of the source tree used to build and deploy an application. */
	export interface SourceReference {

		/** Optional. A URI string identifying the repository. Example: "https://github.com/GoogleCloudPlatform/kubernetes.git" */
		repository?: string | null;

		/** The canonical and persistent identifier of the deployed revision. Example (git): "0035781c50ec7aa23385dc841529ce8a4b70db1b" */
		revisionId?: string | null;
	}

	/** A reference to a particular snapshot of the source tree used to build and deploy an application. */
	export interface SourceReferenceFormProperties {

		/** Optional. A URI string identifying the repository. Example: "https://github.com/GoogleCloudPlatform/kubernetes.git" */
		repository: FormControl<string | null | undefined>,

		/** The canonical and persistent identifier of the deployed revision. Example (git): "0035781c50ec7aa23385dc841529ce8a4b70db1b" */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateSourceReferenceFormGroup() {
		return new FormGroup<SourceReferenceFormProperties>({
			repository: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the settings associated with a project, folder, organization, or billing account. */
	export interface Settings {

		/** Describes the custom _Default sink configuration that is used to override the built-in _Default sink configuration in newly created resource containers, such as projects or folders. */
		defaultSinkConfig?: DefaultSinkConfig;

		/** Optional. If set to true, the _Default sink in newly created projects and folders will created in a disabled state. This can be used to automatically disable log storage if there is already an aggregated sink configured in the hierarchy. The _Default sink can be re-enabled manually if needed. */
		disableDefaultSink?: boolean | null;

		/** Optional. The resource name for the configured Cloud KMS key.KMS key name format: "projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]" For example:"projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key"To enable CMEK, set this field to a valid kms_key_name for which the associated service account has the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key.The Cloud KMS key used by the Log Router can be updated by changing the kms_key_name to a new valid key name.To disable CMEK for the Log Router, set this field to an empty string.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information. */
		kmsKeyName?: string | null;

		/** Output only. The service account that will be used by the Log Router to access your Cloud KMS key.Before enabling CMEK, you must first assign the role roles/cloudkms.cryptoKeyEncrypterDecrypter to the service account that will be used to access your Cloud KMS key. Use GetSettings to obtain the service account ID.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information. */
		kmsServiceAccountId?: string | null;

		/** Output only. The service account for the given resource container, such as project or folder. Log sinks use this service account as their writer_identity if no custom service account is provided in the request when calling the create sink method. */
		loggingServiceAccountId?: string | null;

		/** Output only. The resource name of the settings. */
		name?: string | null;

		/** Optional. The storage location for the _Default and _Required log buckets of newly created projects and folders, unless the storage location is explicitly provided.Example value: europe-west1.Note: this setting does not affect the location of resources where a location is explicitly provided when created, such as custom log buckets. */
		storageLocation?: string | null;
	}

	/** Describes the settings associated with a project, folder, organization, or billing account. */
	export interface SettingsFormProperties {

		/** Optional. If set to true, the _Default sink in newly created projects and folders will created in a disabled state. This can be used to automatically disable log storage if there is already an aggregated sink configured in the hierarchy. The _Default sink can be re-enabled manually if needed. */
		disableDefaultSink: FormControl<boolean | null | undefined>,

		/** Optional. The resource name for the configured Cloud KMS key.KMS key name format: "projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]" For example:"projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key"To enable CMEK, set this field to a valid kms_key_name for which the associated service account has the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key.The Cloud KMS key used by the Log Router can be updated by changing the kms_key_name to a new valid key name.To disable CMEK for the Log Router, set this field to an empty string.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information. */
		kmsKeyName: FormControl<string | null | undefined>,

		/** Output only. The service account that will be used by the Log Router to access your Cloud KMS key.Before enabling CMEK, you must first assign the role roles/cloudkms.cryptoKeyEncrypterDecrypter to the service account that will be used to access your Cloud KMS key. Use GetSettings to obtain the service account ID.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information. */
		kmsServiceAccountId: FormControl<string | null | undefined>,

		/** Output only. The service account for the given resource container, such as project or folder. Log sinks use this service account as their writer_identity if no custom service account is provided in the request when calling the create sink method. */
		loggingServiceAccountId: FormControl<string | null | undefined>,

		/** Output only. The resource name of the settings. */
		name: FormControl<string | null | undefined>,

		/** Optional. The storage location for the _Default and _Required log buckets of newly created projects and folders, unless the storage location is explicitly provided.Example value: europe-west1.Note: this setting does not affect the location of resources where a location is explicitly provided when created, such as custom log buckets. */
		storageLocation: FormControl<string | null | undefined>,
	}
	export function CreateSettingsFormGroup() {
		return new FormGroup<SettingsFormProperties>({
			disableDefaultSink: new FormControl<boolean | null | undefined>(undefined),
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
			kmsServiceAccountId: new FormControl<string | null | undefined>(undefined),
			loggingServiceAccountId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			storageLocation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about entries that were omitted from the session. */
	export interface SuppressionInfo {

		/** The reason that entries were omitted from the session. */
		reason?: SuppressionInfoReason | null;

		/**
		 * A lower bound on the count of entries omitted due to reason.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		suppressedCount?: number | null;
	}

	/** Information about entries that were omitted from the session. */
	export interface SuppressionInfoFormProperties {

		/** The reason that entries were omitted from the session. */
		reason: FormControl<SuppressionInfoReason | null | undefined>,

		/**
		 * A lower bound on the count of entries omitted due to reason.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		suppressedCount: FormControl<number | null | undefined>,
	}
	export function CreateSuppressionInfoFormGroup() {
		return new FormGroup<SuppressionInfoFormProperties>({
			reason: new FormControl<SuppressionInfoReason | null | undefined>(undefined),
			suppressedCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SuppressionInfoReason { REASON_UNSPECIFIED = 'REASON_UNSPECIFIED', RATE_LIMIT = 'RATE_LIMIT', NOT_CONSUMED = 'NOT_CONSUMED' }


	/** The parameters to TailLogEntries. */
	export interface TailLogEntriesRequest {

		/** Optional. The amount of time to buffer log entries at the server before being returned to prevent out of order results due to late arriving log entries. Valid values are between 0-60000 milliseconds. Defaults to 2000 milliseconds. */
		bufferWindow?: string | null;

		/** Optional. Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in resource_names. Referencing a parent resource that is not listed in resource_names will cause the filter to return no results. The maximum length of a filter is 20,000 characters. */
		filter?: string | null;

		/** Required. Name of a parent resource from which to retrieve log entries: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]May alternatively be one or more views: projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] */
		resourceNames?: Array<string>;
	}

	/** The parameters to TailLogEntries. */
	export interface TailLogEntriesRequestFormProperties {

		/** Optional. The amount of time to buffer log entries at the server before being returned to prevent out of order results due to late arriving log entries. Valid values are between 0-60000 milliseconds. Defaults to 2000 milliseconds. */
		bufferWindow: FormControl<string | null | undefined>,

		/** Optional. Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in resource_names. Referencing a parent resource that is not listed in resource_names will cause the filter to return no results. The maximum length of a filter is 20,000 characters. */
		filter: FormControl<string | null | undefined>,
	}
	export function CreateTailLogEntriesRequestFormGroup() {
		return new FormGroup<TailLogEntriesRequestFormProperties>({
			bufferWindow: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result returned from TailLogEntries. */
	export interface TailLogEntriesResponse {

		/** A list of log entries. Each response in the stream will order entries with increasing values of LogEntry.timestamp. Ordering is not guaranteed between separate responses. */
		entries?: Array<LogEntry>;

		/** If entries that otherwise would have been included in the session were not sent back to the client, counts of relevant entries omitted from the session with the reason that they were not included. There will be at most one of each reason per response. The counts represent the number of suppressed entries since the last streamed response. */
		suppressionInfo?: Array<SuppressionInfo>;
	}

	/** Result returned from TailLogEntries. */
	export interface TailLogEntriesResponseFormProperties {
	}
	export function CreateTailLogEntriesResponseFormGroup() {
		return new FormGroup<TailLogEntriesResponseFormProperties>({
		});

	}


	/** The parameters to UndeleteBucket. */
	export interface UndeleteBucketRequest {
	}

	/** The parameters to UndeleteBucket. */
	export interface UndeleteBucketRequestFormProperties {
	}
	export function CreateUndeleteBucketRequestFormGroup() {
		return new FormGroup<UndeleteBucketRequestFormProperties>({
		});

	}


	/** The parameters to WriteLogEntries. */
	export interface WriteLogEntriesRequest {

		/** Optional. If true, the request should expect normal response, but the entries won't be persisted nor exported. Useful for checking whether the logging API endpoints are working properly before sending valuable data. */
		dryRun?: boolean | null;

		/** Required. The log entries to send to Logging. The order of log entries in this list does not matter. Values supplied in this method's log_name, resource, and labels fields are copied into those log entries in this list that do not include values for their corresponding fields. For more information, see the LogEntry type.If the timestamp or insert_id fields are missing in log entries, then this method supplies the current time or a unique identifier, respectively. The supplied values are chosen so that, among the log entries that did not supply their own values, the entries earlier in the list will sort before the entries later in the list. See the entries.list method.Log entries with timestamps that are more than the logs retention period (https://cloud.google.com/logging/quotas) in the past or more than 24 hours in the future will not be available when calling entries.list. However, those log entries can still be exported with LogSinks (https://cloud.google.com/logging/docs/api/tasks/exporting-logs).To improve throughput and to avoid exceeding the quota limit (https://cloud.google.com/logging/quotas) for calls to entries.write, you should try to include several log entries in this list, rather than calling this method for each individual log entry. */
		entries?: Array<LogEntry>;

		/** Optional. Default labels that are added to the labels field of all log entries in entries. If a log entry already has a label with the same key as a label in this parameter, then the log entry's label is not changed. See LogEntry. */
		labels?: {[id: string]: string };

		/** Optional. A default log resource name that is assigned to all log entries in entries that do not specify a value for log_name: projects/[PROJECT_ID]/logs/[LOG_ID] organizations/[ORGANIZATION_ID]/logs/[LOG_ID] billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID] folders/[FOLDER_ID]/logs/[LOG_ID][LOG_ID] must be URL-encoded. For example: "projects/my-project-id/logs/syslog" "organizations/123/logs/cloudaudit.googleapis.com%2Factivity" The permission logging.logEntries.create is needed on each project, organization, billing account, or folder that is receiving new log entries, whether the resource is specified in logName or in an individual log entry. */
		logName?: string | null;

		/** Optional. Whether a batch's valid entries should be written even if some other entry failed due to a permanent error such as INVALID_ARGUMENT or PERMISSION_DENIED. If any entry failed, then the response status is the response status of one of the failed entries. The response will include error details in WriteLogEntriesPartialErrors.log_entry_errors keyed by the entries' zero-based index in the entries. Failed requests for which no entries are written will not include per-entry errors. */
		partialSuccess?: boolean | null;

		/** An object representing a resource that can be used for monitoring, logging, billing, or other purposes. Examples include virtual machine instances, databases, and storage devices such as disks. The type field identifies a MonitoredResourceDescriptor object that describes the resource's schema. Information in the labels field identifies the actual resource and its attributes according to the schema. For example, a particular Compute Engine VM instance could be represented by the following object, because the MonitoredResourceDescriptor for "gce_instance" has labels "project_id", "instance_id" and "zone": { "type": "gce_instance", "labels": { "project_id": "my-project", "instance_id": "12345678901234", "zone": "us-central1-a" }} */
		resource?: MonitoredResource;
	}

	/** The parameters to WriteLogEntries. */
	export interface WriteLogEntriesRequestFormProperties {

		/** Optional. If true, the request should expect normal response, but the entries won't be persisted nor exported. Useful for checking whether the logging API endpoints are working properly before sending valuable data. */
		dryRun: FormControl<boolean | null | undefined>,

		/** Optional. Default labels that are added to the labels field of all log entries in entries. If a log entry already has a label with the same key as a label in this parameter, then the log entry's label is not changed. See LogEntry. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. A default log resource name that is assigned to all log entries in entries that do not specify a value for log_name: projects/[PROJECT_ID]/logs/[LOG_ID] organizations/[ORGANIZATION_ID]/logs/[LOG_ID] billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID] folders/[FOLDER_ID]/logs/[LOG_ID][LOG_ID] must be URL-encoded. For example: "projects/my-project-id/logs/syslog" "organizations/123/logs/cloudaudit.googleapis.com%2Factivity" The permission logging.logEntries.create is needed on each project, organization, billing account, or folder that is receiving new log entries, whether the resource is specified in logName or in an individual log entry. */
		logName: FormControl<string | null | undefined>,

		/** Optional. Whether a batch's valid entries should be written even if some other entry failed due to a permanent error such as INVALID_ARGUMENT or PERMISSION_DENIED. If any entry failed, then the response status is the response status of one of the failed entries. The response will include error details in WriteLogEntriesPartialErrors.log_entry_errors keyed by the entries' zero-based index in the entries. Failed requests for which no entries are written will not include per-entry errors. */
		partialSuccess: FormControl<boolean | null | undefined>,
	}
	export function CreateWriteLogEntriesRequestFormGroup() {
		return new FormGroup<WriteLogEntriesRequestFormProperties>({
			dryRun: new FormControl<boolean | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			logName: new FormControl<string | null | undefined>(undefined),
			partialSuccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Result returned from WriteLogEntries. */
	export interface WriteLogEntriesResponse {
	}

	/** Result returned from WriteLogEntries. */
	export interface WriteLogEntriesResponseFormProperties {
	}
	export function CreateWriteLogEntriesResponseFormGroup() {
		return new FormGroup<WriteLogEntriesResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Copies a set of log entries from a log bucket to a Cloud Storage bucket.
		 * Post v2/entries:copy
		 * @return {Operation} Successful response
		 */
		V2Entries_copyPost(requestBody: CopyLogEntriesRequest, headersHandler?: () => HttpHeaders): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/entries:copy', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists log entries. Use this method to retrieve log entries that originated from a project/folder/organization/billing account. For ways to export log entries, see Exporting Logs (https://cloud.google.com/logging/docs/export).
		 * Post v2/entries:list
		 * @return {ListLogEntriesResponse} Successful response
		 */
		V2Entries_listPost(requestBody: ListLogEntriesRequest, headersHandler?: () => HttpHeaders): Observable<ListLogEntriesResponse> {
			return this.http.post<ListLogEntriesResponse>(this.baseUri + 'v2/entries:list', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Streaming read of log entries as they are received. Until the stream is terminated, it will continue reading logs.
		 * Post v2/entries:tail
		 * @return {TailLogEntriesResponse} Successful response
		 */
		V2Entries_tailPost(requestBody: TailLogEntriesRequest, headersHandler?: () => HttpHeaders): Observable<TailLogEntriesResponse> {
			return this.http.post<TailLogEntriesResponse>(this.baseUri + 'v2/entries:tail', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Writes log entries to Logging. This API method is the only way to send log entries to Logging. This method is used, directly or indirectly, by the Logging agent (fluentd) and all logging libraries configured to use Logging. A single request may contain log entries for a maximum of 1000 different resource names (projects, organizations, billing accounts or folders), where the resource name for a log entry is determined from its logName field.
		 * Post v2/entries:write
		 * @return {WriteLogEntriesResponse} Successful response
		 */
		V2Entries_writePost(requestBody: WriteLogEntriesRequest, headersHandler?: () => HttpHeaders): Observable<WriteLogEntriesResponse> {
			return this.http.post<WriteLogEntriesResponse>(this.baseUri + 'v2/entries:write', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists the descriptors for monitored resource types used by Logging.
		 * Get v2/monitoredResourceDescriptors
		 * @param {number} pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
		 * @return {ListMonitoredResourceDescriptorsResponse} Successful response
		 */
		V2MonitoredResourceDescriptorsGetByPageSizeAndPageToken(pageSize: number | null | undefined, pageToken: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListMonitoredResourceDescriptorsResponse> {
			return this.http.get<ListMonitoredResourceDescriptorsResponse>(this.baseUri + 'v2/monitoredResourceDescriptors?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes all the log entries in a log for the _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.
		 * Delete v2/{logName}
		 * @param {string} logName Required. The resource name of the log to delete: projects/[PROJECT_ID]/logs/[LOG_ID] organizations/[ORGANIZATION_ID]/logs/[LOG_ID] billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID] folders/[FOLDER_ID]/logs/[LOG_ID][LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/123/logs/cloudaudit.googleapis.com%2Factivity".For more information about log names, see LogEntry.
		 * @return {Empty} Successful response
		 */
		V2_logNameDelete(logName: string, headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v2/' + (logName == null ? '' : encodeURIComponent(logName)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes a logs-based metric.
		 * Delete v2/{metricName}
		 * @param {string} metricName Required. The resource name of the metric to delete: "projects/[PROJECT_ID]/metrics/[METRIC_ID]" 
		 * @return {Empty} Successful response
		 */
		V2_metricNameDelete(metricName: string, headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v2/' + (metricName == null ? '' : encodeURIComponent(metricName)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a logs-based metric.
		 * Get v2/{metricName}
		 * @param {string} metricName Required. The resource name of the desired metric: "projects/[PROJECT_ID]/metrics/[METRIC_ID]" 
		 * @return {LogMetric} Successful response
		 */
		V2_metricNameGet(metricName: string, headersHandler?: () => HttpHeaders): Observable<LogMetric> {
			return this.http.get<LogMetric>(this.baseUri + 'v2/' + (metricName == null ? '' : encodeURIComponent(metricName)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates or updates a logs-based metric.
		 * Put v2/{metricName}
		 * @param {string} metricName Required. The resource name of the metric to update: "projects/[PROJECT_ID]/metrics/[METRIC_ID]" The updated metric must be provided in the request and it's name field must be the same as [METRIC_ID] If the metric does not exist in [PROJECT_ID], then a new metric is created.
		 * @return {LogMetric} Successful response
		 */
		V2_metricNamePut(metricName: string, requestBody: LogMetric, headersHandler?: () => HttpHeaders): Observable<LogMetric> {
			return this.http.put<LogMetric>(this.baseUri + 'v2/' + (metricName == null ? '' : encodeURIComponent(metricName)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes an existing SavedQuery that was created by the user making the request.
		 * Delete v2/{name}
		 * @param {string} name Required. The full resource name of the saved query to delete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" For example: "projects/my-project/locations/global/savedQueries/my-saved-query" 
		 * @return {Empty} Successful response
		 */
		V2_nameDelete(name: string, headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v2/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		V2_nameGet(name: string, headersHandler?: () => HttpHeaders): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates a view on a log bucket. This method replaces the value of the filter field from the existing view with the corresponding value from the new view. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can update the view. If this occurs, please try again in a few minutes.
		 * Patch v2/{name}
		 * @param {string} name Required. The full resource name of the view to update "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket/views/my-view"
		 * @param {string} updateMask Optional. Field mask that specifies the fields in view that need an update. A field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=filter
		 * @return {LogView} Successful response
		 */
		V2_namePatchByUpdateMask(name: string, updateMask: string | null | undefined, requestBody: LogView, headersHandler?: () => HttpHeaders): Observable<LogView> {
			return this.http.patch<LogView>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Gets the Logging CMEK settings for the given resource.Note: CMEK for the Log Router can be configured for Google Cloud projects, folders, organizations, and billing accounts. Once configured for an organization, it applies to all projects and folders in the Google Cloud organization.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
		 * Get v2/{name}/cmekSettings
		 * @param {string} name Required. The resource for which to retrieve CMEK settings. "projects/[PROJECT_ID]/cmekSettings" "organizations/[ORGANIZATION_ID]/cmekSettings" "billingAccounts/[BILLING_ACCOUNT_ID]/cmekSettings" "folders/[FOLDER_ID]/cmekSettings" For example:"organizations/12345/cmekSettings"Note: CMEK for the Log Router can be configured for Google Cloud projects, folders, organizations, and billing accounts. Once configured for an organization, it applies to all projects and folders in the Google Cloud organization.
		 * @return {CmekSettings} Successful response
		 */
		V2_nameCmekSettingsGet(name: string, headersHandler?: () => HttpHeaders): Observable<CmekSettings> {
			return this.http.get<CmekSettings>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '/cmekSettings', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates the Log Router CMEK settings for the given resource.Note: CMEK for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.UpdateCmekSettings fails when any of the following are true: The value of kms_key_name is invalid. The associated service account doesn't have the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key. Access to the key is disabled.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
		 * Patch v2/{name}/cmekSettings
		 * @param {string} name Required. The resource name for the CMEK settings to update. "projects/[PROJECT_ID]/cmekSettings" "organizations/[ORGANIZATION_ID]/cmekSettings" "billingAccounts/[BILLING_ACCOUNT_ID]/cmekSettings" "folders/[FOLDER_ID]/cmekSettings" For example:"organizations/12345/cmekSettings"Note: CMEK for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.
		 * @param {string} updateMask Optional. Field mask identifying which fields from cmek_settings should be updated. A field will be overwritten if and only if it is in the update mask. Output only fields cannot be updated.See FieldMask for more information.For example: "updateMask=kmsKeyName"
		 * @return {CmekSettings} Successful response
		 */
		V2_nameCmekSettingsPatchByUpdateMask(name: string, updateMask: string | null | undefined, requestBody: CmekSettings, headersHandler?: () => HttpHeaders): Observable<CmekSettings> {
			return this.http.patch<CmekSettings>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '/cmekSettings&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v2/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		V2_nameLocationsGetByFilterAndPageSizeAndPageToken(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
		 * Get v2/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		V2_nameOperationsGetByFilterAndPageSizeAndPageToken(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the settings for the given resource.Note: Settings can be retrieved for Google Cloud projects, folders, organizations, and billing accounts.See View default resource settings for Logging (https://cloud.google.com/logging/docs/default-settings#view-org-settings) for more information.
		 * Get v2/{name}/settings
		 * @param {string} name Required. The resource for which to retrieve settings. "projects/[PROJECT_ID]/settings" "organizations/[ORGANIZATION_ID]/settings" "billingAccounts/[BILLING_ACCOUNT_ID]/settings" "folders/[FOLDER_ID]/settings" For example:"organizations/12345/settings"Note: Settings can be retrieved for Google Cloud projects, folders, organizations, and billing accounts.
		 * @return {Settings} Successful response
		 */
		V2_nameSettingsGet(name: string, headersHandler?: () => HttpHeaders): Observable<Settings> {
			return this.http.get<Settings>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '/settings', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates the settings for the given resource. This method applies to all feature configurations for organization and folders.UpdateSettings fails when any of the following are true: The value of storage_location either isn't supported by Logging or violates the location OrgPolicy. The default_sink_config field is set, but it has an unspecified filter write mode. The value of kms_key_name is invalid. The associated service account doesn't have the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key. Access to the key is disabled.See Configure default settings for organizations and folders (https://cloud.google.com/logging/docs/default-settings) for more information.
		 * Patch v2/{name}/settings
		 * @param {string} name Required. The resource name for the settings to update. "organizations/[ORGANIZATION_ID]/settings" For example:"organizations/12345/settings"
		 * @param {string} updateMask Optional. Field mask identifying which fields from settings should be updated. A field will be overwritten if and only if it is in the update mask. Output only fields cannot be updated.See FieldMask for more information.For example: "updateMask=kmsKeyName"
		 * @return {Settings} Successful response
		 */
		V2_nameSettingsPatchByUpdateMask(name: string, updateMask: string | null | undefined, requestBody: Settings, headersHandler?: () => HttpHeaders): Observable<Settings> {
			return this.http.patch<Settings>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '/settings&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
		 * Post v2/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		V2_name_cancelPost(name: string, requestBody: CancelOperationRequest, headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Undeletes a log bucket. A bucket that has been deleted can be undeleted within the grace period of 7 days.
		 * Post v2/{name}:undelete
		 * @param {string} name Required. The full resource name of the bucket to undelete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
		 * @return {Empty} Successful response
		 */
		V2_name_undeletePost(name: string, requestBody: UndeleteBucketRequest, headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':undelete', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates a log bucket asynchronously.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.
		 * Post v2/{name}:updateAsync
		 * @param {string} name Required. The full resource name of the bucket to update. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
		 * @param {string} updateMask Required. Field mask that specifies the fields in bucket that need an update. A bucket field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see: https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=retention_days
		 * @return {Operation} Successful response
		 */
		V2_name_updateAsyncPostByUpdateMask(name: string, updateMask: string | null | undefined, requestBody: LogBucket, headersHandler?: () => HttpHeaders): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':updateAsync&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists log buckets.
		 * Get v2/{parent}/buckets
		 * @param {string} parent Required. The parent resource whose buckets are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" Note: The locations portion of the resource must be specified, but supplying the character - in place of LOCATION_ID will return all buckets.
		 * @param {number} pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
		 * @return {ListBucketsResponse} Successful response
		 */
		V2_parentBucketsGetByPageSizeAndPageToken(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListBucketsResponse> {
			return this.http.get<ListBucketsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/buckets&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a log bucket that can be used to store log entries. After a bucket has been created, the bucket's location cannot be changed.
		 * Post v2/{parent}/buckets
		 * @param {string} parent Required. The resource in which to create the log bucket: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example:"projects/my-project/locations/global"
		 * @param {string} bucketId Required. A client-assigned identifier such as "my-bucket". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods.
		 * @return {LogBucket} Successful response
		 */
		V2_parentBucketsPostByBucketId(parent: string, bucketId: string | null | undefined, requestBody: LogBucket, headersHandler?: () => HttpHeaders): Observable<LogBucket> {
			return this.http.post<LogBucket>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/buckets&bucketId=' + (bucketId == null ? '' : encodeURIComponent(bucketId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a log bucket asynchronously that can be used to store log entries.After a bucket has been created, the bucket's location cannot be changed.
		 * Post v2/{parent}/buckets:createAsync
		 * @param {string} parent Required. The resource in which to create the log bucket: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example:"projects/my-project/locations/global"
		 * @param {string} bucketId Required. A client-assigned identifier such as "my-bucket". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods.
		 * @return {Operation} Successful response
		 */
		V2_parentBuckets_createAsyncPostByBucketId(parent: string, bucketId: string | null | undefined, requestBody: LogBucket, headersHandler?: () => HttpHeaders): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/buckets:createAsync&bucketId=' + (bucketId == null ? '' : encodeURIComponent(bucketId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists all the exclusions on the _Default sink in a parent resource.
		 * Get v2/{parent}/exclusions
		 * @param {string} parent Required. The parent resource whose exclusions are to be listed. "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" 
		 * @param {number} pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
		 * @return {ListExclusionsResponse} Successful response
		 */
		V2_parentExclusionsGetByPageSizeAndPageToken(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListExclusionsResponse> {
			return this.http.get<ListExclusionsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/exclusions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a new exclusion in the _Default sink in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource.
		 * Post v2/{parent}/exclusions
		 * @param {string} parent Required. The parent resource in which to create the exclusion: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" For examples:"projects/my-logging-project" "organizations/123456789"
		 * @return {LogExclusion} Successful response
		 */
		V2_parentExclusionsPost(parent: string, requestBody: LogExclusion, headersHandler?: () => HttpHeaders): Observable<LogExclusion> {
			return this.http.post<LogExclusion>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/exclusions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists links.
		 * Get v2/{parent}/links
		 * @param {string} parent Required. The parent resource whose links are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" 
		 * @param {number} pageSize Optional. The maximum number of results to return from this request.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response.
		 * @return {ListLinksResponse} Successful response
		 */
		V2_parentLinksGetByPageSizeAndPageToken(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListLinksResponse> {
			return this.http.get<ListLinksResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/links&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Asynchronously creates a linked dataset in BigQuery which makes it possible to use BigQuery to read the logs stored in the log bucket. A log bucket may currently only contain one link.
		 * Post v2/{parent}/links
		 * @param {string} parent Required. The full resource name of the bucket to create a link for. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" 
		 * @param {string} linkId Required. The ID to use for the link. The link_id can have up to 100 characters. A valid link_id must only have alphanumeric characters and underscores within it.
		 * @return {Operation} Successful response
		 */
		V2_parentLinksPostByLinkId(parent: string, linkId: string | null | undefined, requestBody: Link, headersHandler?: () => HttpHeaders): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/links&linkId=' + (linkId == null ? '' : encodeURIComponent(linkId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
		 * Get v2/{parent}/logs
		 * @param {string} parent Required. The resource name to list logs for: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]
		 * @param {number} pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
		 * @param {Array<string>} resourceNames Optional. List of resource names to list logs for: projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]To support legacy queries, it could also be: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]The resource name in the parent field is added to this list.
		 * @return {ListLogsResponse} Successful response
		 */
		V2_parentLogsGetByPageSizeAndPageTokenAndResourceNames(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, resourceNames: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListLogsResponse> {
			return this.http.get<ListLogsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/logs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&' + resourceNames?.map(z => `resourceNames=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists logs-based metrics.
		 * Get v2/{parent}/metrics
		 * @param {string} parent Required. The name of the project containing the metrics: "projects/[PROJECT_ID]" 
		 * @param {number} pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
		 * @return {ListLogMetricsResponse} Successful response
		 */
		V2_parentMetricsGetByPageSizeAndPageToken(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListLogMetricsResponse> {
			return this.http.get<ListLogMetricsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/metrics&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a logs-based metric.
		 * Post v2/{parent}/metrics
		 * @param {string} parent Required. The resource name of the project in which to create the metric: "projects/[PROJECT_ID]" The new metric must be provided in the request.
		 * @return {LogMetric} Successful response
		 */
		V2_parentMetricsPost(parent: string, requestBody: LogMetric, headersHandler?: () => HttpHeaders): Observable<LogMetric> {
			return this.http.post<LogMetric>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/metrics', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists the RecentQueries that were created by the user making the request.
		 * Get v2/{parent}/recentQueries
		 * @param {string} parent Required. The resource to which the listed queries belong. "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" For example:projects/my-project/locations/us-central1Note: The location portion of the resource must be specified, but supplying the character - in place of LOCATION_ID will return all recent queries.
		 * @param {number} pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
		 * @return {ListRecentQueriesResponse} Successful response
		 */
		V2_parentRecentQueriesGetByPageSizeAndPageToken(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListRecentQueriesResponse> {
			return this.http.get<ListRecentQueriesResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/recentQueries&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists the SavedQueries that were created by the user making the request.
		 * Get v2/{parent}/savedQueries
		 * @param {string} parent Required. The resource to which the listed queries belong. "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" For example: "projects/my-project/locations/us-central1" Note: The locations portion of the resource must be specified. To get a list of all saved queries, a wildcard character - can be used for LOCATION_ID, for example: "projects/my-project/locations/-" 
		 * @param {number} pageSize Optional. The maximum number of results to return from this request.Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
		 * @return {ListSavedQueriesResponse} Successful response
		 */
		V2_parentSavedQueriesGetByPageSizeAndPageToken(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListSavedQueriesResponse> {
			return this.http.get<ListSavedQueriesResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/savedQueries&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a new SavedQuery for the user making the request.
		 * Post v2/{parent}/savedQueries
		 * @param {string} parent Required. The parent resource in which to create the saved query: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" For example: "projects/my-project/locations/global" "organizations/123456789/locations/us-central1" 
		 * @param {string} savedQueryId Optional. The ID to use for the saved query, which will become the final component of the saved query's resource name.If the saved_query_id is not provided, the system will generate an alphanumeric ID.The saved_query_id is limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, periods.First character has to be alphanumeric.
		 * @return {SavedQuery} Successful response
		 */
		V2_parentSavedQueriesPostBySavedQueryId(parent: string, savedQueryId: string | null | undefined, requestBody: SavedQuery, headersHandler?: () => HttpHeaders): Observable<SavedQuery> {
			return this.http.post<SavedQuery>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/savedQueries&savedQueryId=' + (savedQueryId == null ? '' : encodeURIComponent(savedQueryId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists sinks.
		 * Get v2/{parent}/sinks
		 * @param {string} parent Required. The parent resource whose sinks are to be listed: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" 
		 * @param {number} pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
		 * @return {ListSinksResponse} Successful response
		 */
		V2_parentSinksGetByPageSizeAndPageToken(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListSinksResponse> {
			return this.http.get<ListSinksResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sinks&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a sink that exports specified log entries to a destination. The export begins upon ingress, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
		 * Post v2/{parent}/sinks
		 * @param {string} parent Required. The resource in which to create the sink: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" For examples:"projects/my-project" "organizations/123456789"
		 * @param {string} customWriterIdentity Optional. A service account provided by the caller that will be used to write the log entries. The format must be serviceAccount:some@email. This field can only be specified if you are routing logs to a destination outside this sink's project. If not specified, a Logging service account will automatically be generated.
		 * @param {boolean} uniqueWriterIdentity Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Cloud Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents) used by the sinks with the same parent. For more information, see writer_identity in LogSink.
		 * @return {LogSink} Successful response
		 */
		V2_parentSinksPostByCustomWriterIdentityAndUniqueWriterIdentity(parent: string, customWriterIdentity: string | null | undefined, uniqueWriterIdentity: boolean | null | undefined, requestBody: LogSink, headersHandler?: () => HttpHeaders): Observable<LogSink> {
			return this.http.post<LogSink>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sinks&customWriterIdentity=' + (customWriterIdentity == null ? '' : encodeURIComponent(customWriterIdentity)) + '&uniqueWriterIdentity=' + uniqueWriterIdentity, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists views on a log bucket.
		 * Get v2/{parent}/views
		 * @param {string} parent Required. The bucket whose views are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" 
		 * @param {number} pageSize Optional. The maximum number of results to return from this request.Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
		 * @return {ListViewsResponse} Successful response
		 */
		V2_parentViewsGetByPageSizeAndPageToken(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListViewsResponse> {
			return this.http.get<ListViewsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/views&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a view over log entries in a log bucket. A bucket may contain a maximum of 30 views.
		 * Post v2/{parent}/views
		 * @param {string} parent Required. The bucket in which to create the view `"projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"` For example:"projects/my-project/locations/global/buckets/my-bucket"
		 * @param {string} viewId Required. A client-assigned identifier such as "my-view". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods.
		 * @return {LogView} Successful response
		 */
		V2_parentViewsPostByViewId(parent: string, viewId: string | null | undefined, requestBody: LogView, headersHandler?: () => HttpHeaders): Observable<LogView> {
			return this.http.post<LogView>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/views&viewId=' + (viewId == null ? '' : encodeURIComponent(viewId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
		 * Delete v2/{sinkName}
		 * @param {string} sinkName Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"
		 * @return {Empty} Successful response
		 */
		V2_sinkNameDelete(sinkName: string, headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v2/' + (sinkName == null ? '' : encodeURIComponent(sinkName)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a sink.
		 * Get v2/{sinkName}
		 * @param {string} sinkName Required. The resource name of the sink: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"
		 * @return {LogSink} Successful response
		 */
		V2_sinkNameGet(sinkName: string, headersHandler?: () => HttpHeaders): Observable<LogSink> {
			return this.http.get<LogSink>(this.baseUri + 'v2/' + (sinkName == null ? '' : encodeURIComponent(sinkName)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.
		 * Patch v2/{sinkName}
		 * @param {string} sinkName Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"
		 * @param {string} customWriterIdentity Optional. A service account provided by the caller that will be used to write the log entries. The format must be serviceAccount:some@email. This field can only be specified if you are routing logs to a destination outside this sink's project. If not specified, a Logging service account will automatically be generated.
		 * @param {boolean} uniqueWriterIdentity Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents) owned by Cloud Logging. It is an error if the old value is true and the new value is set to false or defaulted to false.
		 * @param {string} updateMask Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:destination,filter,includeChildrenAt some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=filter
		 * @return {LogSink} Successful response
		 */
		V2_sinkNamePatchByCustomWriterIdentityAndUniqueWriterIdentityAndUpdateMask(sinkName: string, customWriterIdentity: string | null | undefined, uniqueWriterIdentity: boolean | null | undefined, updateMask: string | null | undefined, requestBody: LogSink, headersHandler?: () => HttpHeaders): Observable<LogSink> {
			return this.http.patch<LogSink>(this.baseUri + 'v2/' + (sinkName == null ? '' : encodeURIComponent(sinkName)) + '&customWriterIdentity=' + (customWriterIdentity == null ? '' : encodeURIComponent(customWriterIdentity)) + '&uniqueWriterIdentity=' + uniqueWriterIdentity + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.
		 * Put v2/{sinkName}
		 * @param {string} sinkName Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"
		 * @param {string} customWriterIdentity Optional. A service account provided by the caller that will be used to write the log entries. The format must be serviceAccount:some@email. This field can only be specified if you are routing logs to a destination outside this sink's project. If not specified, a Logging service account will automatically be generated.
		 * @param {boolean} uniqueWriterIdentity Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents) owned by Cloud Logging. It is an error if the old value is true and the new value is set to false or defaulted to false.
		 * @param {string} updateMask Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:destination,filter,includeChildrenAt some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=filter
		 * @return {LogSink} Successful response
		 */
		V2_sinkNamePutByCustomWriterIdentityAndUniqueWriterIdentityAndUpdateMask(sinkName: string, customWriterIdentity: string | null | undefined, uniqueWriterIdentity: boolean | null | undefined, updateMask: string | null | undefined, requestBody: LogSink, headersHandler?: () => HttpHeaders): Observable<LogSink> {
			return this.http.put<LogSink>(this.baseUri + 'v2/' + (sinkName == null ? '' : encodeURIComponent(sinkName)) + '&customWriterIdentity=' + (customWriterIdentity == null ? '' : encodeURIComponent(customWriterIdentity)) + '&uniqueWriterIdentity=' + uniqueWriterIdentity + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

}

