import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * AWS access key (see
	 * [AWS Security
	 * Credentials](https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html)).
	 */
	export interface AwsAccessKey {

		/** Required. AWS access key ID. */
		accessKeyId?: string | null;

		/**
		 * Required. AWS secret access key. This field is not returned in RPC
		 * responses.
		 */
		secretAccessKey?: string | null;
	}


	/**
	 * An AwsS3Data resource can be a data source, but not a data sink.
	 * In an AwsS3Data resource, an object's name is the S3 object's key name.
	 */
	export interface AwsS3Data {

		/**
		 * AWS access key (see
		 * [AWS Security
		 * Credentials](https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html)).
		 */
		awsAccessKey?: AwsAccessKey | null;

		/**
		 * Required. S3 Bucket name (see
		 * [Creating a
		 * bucket](https://docs.aws.amazon.com/AmazonS3/latest/dev/create-bucket-get-location-example.html)).
		 */
		bucketName?: string | null;
	}


	/**
	 * An AzureBlobStorageData resource can be a data source, but not a data sink.
	 * An AzureBlobStorageData resource represents one Azure container. The storage
	 * account determines the [Azure
	 * endpoint](https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account#storage-account-endpoints).
	 * In an AzureBlobStorageData resource, a blobs's name is the [Azure Blob
	 * Storage blob's key
	 * name](https://docs.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata#blob-names).
	 */
	export interface AzureBlobStorageData {

		/** Azure credentials */
		azureCredentials?: AzureCredentials | null;

		/** Required. The container to transfer from the Azure Storage account. */
		container?: string | null;

		/** Required. The name of the Azure Storage account. */
		storageAccount?: string | null;
	}


	/** Azure credentials */
	export interface AzureCredentials {

		/**
		 * Required. Azure shared access signature. (see
		 * [Grant limited access to Azure Storage resources using shared access
		 * signatures
		 * (SAS)](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview)).
		 */
		sasToken?: string | null;
	}


	/**
	 * Represents a whole or partial calendar date, e.g. a birthday. The time of day
	 * and time zone are either specified elsewhere or are not significant. The date
	 * is relative to the Proleptic Gregorian Calendar. This can represent:
	 * * A full date, with non-zero year, month and day values
	 * * A month and day value, with a zero year, e.g. an anniversary
	 * * A year on its own, with zero month and day values
	 * * A year and month value, with a zero day, e.g. a credit card expiration date
	 * Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
	 */
	export interface Date {

		/**
		 * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
		 * if specifying a year by itself or a year and month where the day is not
		 * significant.
		 */
		day?: number | null;

		/**
		 * Month of year. Must be from 1 to 12, or 0 if specifying a year without a
		 * month and day.
		 */
		month?: number | null;

		/**
		 * Year of date. Must be from 1 to 9999, or 0 if specifying a date without
		 * a year.
		 */
		year?: number | null;
	}


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}


	/** An entry describing an error that has occurred. */
	export interface ErrorLogEntry {

		/** A list of messages that carry the error details. */
		errorDetails?: Array<string> | null;

		/**
		 * Required. A URL that refers to the target (a data source, a data sink,
		 * or an object) with which the error is associated.
		 */
		url?: string | null;
	}


	/**
	 * A summary of errors by error code, plus a count and sample error log
	 * entries.
	 */
	export interface ErrorSummary {

		/** Required. */
		errorCode?: ErrorSummaryErrorCode | null;

		/** Required. Count of this type of error. */
		errorCount?: string | null;

		/**
		 * Error samples.
		 * At most 5 error log entries will be recorded for a given
		 * error code for a single transfer operation.
		 */
		errorLogEntries?: Array<ErrorLogEntry> | null;
	}

	export enum ErrorSummaryErrorCode { OK = 0, CANCELLED = 1, UNKNOWN = 2, INVALID_ARGUMENT = 3, DEADLINE_EXCEEDED = 4, NOT_FOUND = 5, ALREADY_EXISTS = 6, PERMISSION_DENIED = 7, UNAUTHENTICATED = 8, RESOURCE_EXHAUSTED = 9, FAILED_PRECONDITION = 10, ABORTED = 11, OUT_OF_RANGE = 12, UNIMPLEMENTED = 13, INTERNAL = 14, UNAVAILABLE = 15, DATA_LOSS = 16 }


	/**
	 * In a GcsData resource, an object's name is the Cloud Storage object's
	 * name and its "last modification time" refers to the object's `updated`
	 * property of Cloud Storage objects, which changes when the content or the
	 * metadata of the object is updated.
	 */
	export interface GcsData {

		/**
		 * Required. Cloud Storage bucket name (see
		 * [Bucket Name
		 * Requirements](https://cloud.google.com/storage/docs/naming#requirements)).
		 */
		bucketName?: string | null;
	}


	/** Google service account */
	export interface GoogleServiceAccount {

		/** Email address of the service account. */
		accountEmail?: string | null;
	}


	/**
	 * An HttpData resource specifies a list of objects on the web to be transferred
	 * over HTTP.  The information of the objects to be transferred is contained in
	 * a file referenced by a URL. The first line in the file must be
	 * `"TsvHttpData-1.0"`, which specifies the format of the file.  Subsequent
	 * lines specify the information of the list of objects, one object per list
	 * entry. Each entry has the following tab-delimited fields:
	 * * **HTTP URL** — The location of the object.
	 * * **Length** — The size of the object in bytes.
	 * * **MD5** — The base64-encoded MD5 hash of the object.
	 * For an example of a valid TSV file, see
	 * [Transferring data from
	 * URLs](https://cloud.google.com/storage-transfer/docs/create-url-list).
	 * When transferring data based on a URL list, keep the following in mind:
	 * * When an object located at `http(s)://hostname:port/<URL-path>` is
	 * transferred to a data sink, the name of the object at the data sink is
	 * `<hostname>/<URL-path>`.
	 * * If the specified size of an object does not match the actual size of the
	 * object fetched, the object will not be transferred.
	 * * If the specified MD5 does not match the MD5 computed from the transferred
	 * bytes, the object transfer will fail. For more information, see
	 * [Generating MD5
	 * hashes](https://cloud.google.com/storage-transfer/docs/create-url-list#md5)
	 * * Ensure that each URL you specify is publicly accessible. For
	 * example, in Cloud Storage you can
	 * [share an object publicly]
	 * (https://cloud.google.com/storage/docs/cloud-console#_sharingdata) and get
	 * a link to it.
	 * * Storage Transfer Service obeys `robots.txt` rules and requires the source
	 * HTTP server to support `Range` requests and to return a `Content-Length`
	 * header in each response.
	 * * ObjectConditions have no effect when filtering objects to transfer.
	 */
	export interface HttpData {

		/**
		 * Required. The URL that points to the file that stores the object list
		 * entries. This file must allow public access.  Currently, only URLs with
		 * HTTP and HTTPS schemes are supported.
		 */
		listUrl?: string | null;
	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation> | null;
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
		done?: boolean | null;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status | null;

		/** Represents the transfer operation object. */
		metadata?: {[id: string]: any } | null;

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should have the format of `transferOperations/some/unique/name`. */
		name?: string | null;

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
		response?: {[id: string]: any } | null;
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
		code?: number | null;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string> | null;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string | null;
	}


	/** Response from ListTransferJobs. */
	export interface ListTransferJobsResponse {

		/** The list next page token. */
		nextPageToken?: string | null;

		/** A list of transfer jobs. */
		transferJobs?: Array<TransferJob> | null;
	}


	/**
	 * This resource represents the configuration of a transfer job that runs
	 * periodically.
	 */
	export interface TransferJob {

		/** Output only. The time that the transfer job was created. */
		creationTime?: string | null;

		/** Output only. The time that the transfer job was deleted. */
		deletionTime?: string | null;

		/**
		 * A description provided by the user for the job. Its max length is 1024
		 * bytes when Unicode-encoded.
		 */
		description?: string | null;

		/** Output only. The time that the transfer job was last modified. */
		lastModificationTime?: string | null;

		/**
		 * A unique name (within the transfer project) assigned when the job is
		 * created.  If this field is empty in a CreateTransferJobRequest, Storage
		 * Transfer Service will assign a unique name. Otherwise, the specified name
		 * is used as the unique name for this job.
		 * If the specified name is in use by a job, the creation request fails with
		 * an ALREADY_EXISTS error.
		 * This name must start with `"transferJobs/"` prefix and end with a letter or
		 * a number, and should be no more than 128 characters.
		 * Example: `"transferJobs/[A-Za-z0-9-._~]*[A-Za-z0-9]$"`
		 * Invalid job names will fail with an
		 * INVALID_ARGUMENT error.
		 */
		name?: string | null;

		/**
		 * Specification to configure notifications published to Cloud Pub/Sub.
		 * Notifications will be published to the customer-provided topic using the
		 * following `PubsubMessage.attributes`:
		 * * `"eventType"`: one of the EventType values
		 * * `"payloadFormat"`: one of the PayloadFormat values
		 * * `"projectId"`: the project_id of the
		 * `TransferOperation`
		 * * `"transferJobName"`: the
		 * transfer_job_name of the
		 * `TransferOperation`
		 * * `"transferOperationName"`: the name of the
		 * `TransferOperation`
		 * The `PubsubMessage.data` will contain a TransferOperation resource
		 * formatted according to the specified `PayloadFormat`.
		 */
		notificationConfig?: NotificationConfig | null;

		/** The ID of the Google Cloud Platform Project that owns the job. */
		projectId?: string | null;

		/** Transfers can be scheduled to recur or to run just once. */
		schedule?: Schedule | null;

		/**
		 * Status of the job. This value MUST be specified for
		 * `CreateTransferJobRequests`.
		 * **Note:** The effect of the new job status takes place during a subsequent
		 * job run. For example, if you change the job status from
		 * ENABLED to DISABLED, and an operation
		 * spawned by the transfer is running, the status change would not affect the
		 * current operation.
		 */
		status?: TransferJobStatus | null;

		/** Configuration for running a transfer. */
		transferSpec?: TransferSpec | null;
	}


	/**
	 * Specification to configure notifications published to Cloud Pub/Sub.
	 * Notifications will be published to the customer-provided topic using the
	 * following `PubsubMessage.attributes`:
	 * * `"eventType"`: one of the EventType values
	 * * `"payloadFormat"`: one of the PayloadFormat values
	 * * `"projectId"`: the project_id of the
	 * `TransferOperation`
	 * * `"transferJobName"`: the
	 * transfer_job_name of the
	 * `TransferOperation`
	 * * `"transferOperationName"`: the name of the
	 * `TransferOperation`
	 * The `PubsubMessage.data` will contain a TransferOperation resource
	 * formatted according to the specified `PayloadFormat`.
	 */
	export interface NotificationConfig {

		/**
		 * Event types for which a notification is desired. If empty, send
		 * notifications for all event types.
		 */
		eventTypes?: Array<string> | null;

		/** Required. The desired format of the notification message payloads. */
		payloadFormat?: NotificationConfigPayloadFormat | null;

		/**
		 * Required. The `Topic.name` of the Cloud Pub/Sub topic to which to publish
		 * notifications. Must be of the format: `projects/{project}/topics/{topic}`.
		 * Not matching this format will result in an
		 * INVALID_ARGUMENT error.
		 */
		pubsubTopic?: string | null;
	}

	export enum NotificationConfigPayloadFormat { PAYLOAD_FORMAT_UNSPECIFIED = 0, NONE = 1, JSON = 2 }


	/** Transfers can be scheduled to recur or to run just once. */
	export interface Schedule {

		/**
		 * Represents a whole or partial calendar date, e.g. a birthday. The time of day
		 * and time zone are either specified elsewhere or are not significant. The date
		 * is relative to the Proleptic Gregorian Calendar. This can represent:
		 * * A full date, with non-zero year, month and day values
		 * * A month and day value, with a zero year, e.g. an anniversary
		 * * A year on its own, with zero month and day values
		 * * A year and month value, with a zero day, e.g. a credit card expiration date
		 * Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
		 */
		scheduleEndDate?: Date | null;

		/**
		 * Represents a whole or partial calendar date, e.g. a birthday. The time of day
		 * and time zone are either specified elsewhere or are not significant. The date
		 * is relative to the Proleptic Gregorian Calendar. This can represent:
		 * * A full date, with non-zero year, month and day values
		 * * A month and day value, with a zero year, e.g. an anniversary
		 * * A year on its own, with zero month and day values
		 * * A year and month value, with a zero day, e.g. a credit card expiration date
		 * Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
		 */
		scheduleStartDate?: Date | null;

		/**
		 * Represents a time of day. The date and time zone are either not significant
		 * or are specified elsewhere. An API may choose to allow leap seconds. Related
		 * types are google.type.Date and `google.protobuf.Timestamp`.
		 */
		startTimeOfDay?: TimeOfDay | null;
	}


	/**
	 * Represents a time of day. The date and time zone are either not significant
	 * or are specified elsewhere. An API may choose to allow leap seconds. Related
	 * types are google.type.Date and `google.protobuf.Timestamp`.
	 */
	export interface TimeOfDay {

		/**
		 * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose
		 * to allow the value "24:00:00" for scenarios like business closing time.
		 */
		hours?: number | null;

		/** Minutes of hour of day. Must be from 0 to 59. */
		minutes?: number | null;

		/** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
		nanos?: number | null;

		/**
		 * Seconds of minutes of the time. Must normally be from 0 to 59. An API may
		 * allow the value 60 if it allows leap-seconds.
		 */
		seconds?: number | null;
	}

	export enum TransferJobStatus { STATUS_UNSPECIFIED = 0, ENABLED = 1, DISABLED = 2, DELETED = 3 }


	/** Configuration for running a transfer. */
	export interface TransferSpec {

		/**
		 * An AwsS3Data resource can be a data source, but not a data sink.
		 * In an AwsS3Data resource, an object's name is the S3 object's key name.
		 */
		awsS3DataSource?: AwsS3Data | null;

		/**
		 * An AzureBlobStorageData resource can be a data source, but not a data sink.
		 * An AzureBlobStorageData resource represents one Azure container. The storage
		 * account determines the [Azure
		 * endpoint](https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account#storage-account-endpoints).
		 * In an AzureBlobStorageData resource, a blobs's name is the [Azure Blob
		 * Storage blob's key
		 * name](https://docs.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata#blob-names).
		 */
		azureBlobStorageDataSource?: AzureBlobStorageData | null;

		/**
		 * In a GcsData resource, an object's name is the Cloud Storage object's
		 * name and its "last modification time" refers to the object's `updated`
		 * property of Cloud Storage objects, which changes when the content or the
		 * metadata of the object is updated.
		 */
		gcsDataSink?: GcsData | null;

		/**
		 * In a GcsData resource, an object's name is the Cloud Storage object's
		 * name and its "last modification time" refers to the object's `updated`
		 * property of Cloud Storage objects, which changes when the content or the
		 * metadata of the object is updated.
		 */
		gcsDataSource?: GcsData | null;

		/**
		 * An HttpData resource specifies a list of objects on the web to be transferred
		 * over HTTP.  The information of the objects to be transferred is contained in
		 * a file referenced by a URL. The first line in the file must be
		 * `"TsvHttpData-1.0"`, which specifies the format of the file.  Subsequent
		 * lines specify the information of the list of objects, one object per list
		 * entry. Each entry has the following tab-delimited fields:
		 * * **HTTP URL** — The location of the object.
		 * * **Length** — The size of the object in bytes.
		 * * **MD5** — The base64-encoded MD5 hash of the object.
		 * For an example of a valid TSV file, see
		 * [Transferring data from
		 * URLs](https://cloud.google.com/storage-transfer/docs/create-url-list).
		 * When transferring data based on a URL list, keep the following in mind:
		 * * When an object located at `http(s)://hostname:port/<URL-path>` is
		 * transferred to a data sink, the name of the object at the data sink is
		 * `<hostname>/<URL-path>`.
		 * * If the specified size of an object does not match the actual size of the
		 * object fetched, the object will not be transferred.
		 * * If the specified MD5 does not match the MD5 computed from the transferred
		 * bytes, the object transfer will fail. For more information, see
		 * [Generating MD5
		 * hashes](https://cloud.google.com/storage-transfer/docs/create-url-list#md5)
		 * * Ensure that each URL you specify is publicly accessible. For
		 * example, in Cloud Storage you can
		 * [share an object publicly]
		 * (https://cloud.google.com/storage/docs/cloud-console#_sharingdata) and get
		 * a link to it.
		 * * Storage Transfer Service obeys `robots.txt` rules and requires the source
		 * HTTP server to support `Range` requests and to return a `Content-Length`
		 * header in each response.
		 * * ObjectConditions have no effect when filtering objects to transfer.
		 */
		httpDataSource?: HttpData | null;

		/**
		 * Conditions that determine which objects will be transferred. Applies only
		 * to S3 and Cloud Storage objects.
		 * The "last modification time" refers to the time of the
		 * last change to the object's content or metadata — specifically, this is
		 * the `updated` property of Cloud Storage objects and the `LastModified`
		 * field of S3 objects.
		 */
		objectConditions?: ObjectConditions | null;

		/**
		 * TransferOptions uses three boolean parameters to define the actions
		 * to be performed on objects in a transfer.
		 */
		transferOptions?: TransferOptions | null;
	}


	/**
	 * Conditions that determine which objects will be transferred. Applies only
	 * to S3 and Cloud Storage objects.
	 * The "last modification time" refers to the time of the
	 * last change to the object's content or metadata — specifically, this is
	 * the `updated` property of Cloud Storage objects and the `LastModified`
	 * field of S3 objects.
	 */
	export interface ObjectConditions {

		/**
		 * `exclude_prefixes` must follow the requirements described for
		 * include_prefixes.
		 * The max size of `exclude_prefixes` is 1000.
		 */
		excludePrefixes?: Array<string> | null;

		/**
		 * If `include_prefixes` is specified, objects that satisfy the object
		 * conditions must have names that start with one of the `include_prefixes`
		 * and that do not start with any of the exclude_prefixes. If
		 * `include_prefixes` is not specified, all objects except those that have
		 * names starting with one of the `exclude_prefixes` must satisfy the object
		 * conditions.
		 * Requirements:
		 * * Each include-prefix and exclude-prefix can contain any sequence of
		 * Unicode characters, to a max length of 1024 bytes when UTF8-encoded,
		 * and must not contain Carriage Return or Line Feed characters.  Wildcard
		 * matching and regular expression matching are not supported.
		 * * Each include-prefix and exclude-prefix must omit the leading slash.
		 * For example, to include the `requests.gz` object in a transfer from
		 * `s3://my-aws-bucket/logs/y=2015/requests.gz`, specify the include
		 * prefix as `logs/y=2015/requests.gz`.
		 * * None of the include-prefix or the exclude-prefix values can be empty,
		 * if specified.
		 * * Each include-prefix must include a distinct portion of the object
		 * namespace. No include-prefix may be a prefix of another
		 * include-prefix.
		 * * Each exclude-prefix must exclude a distinct portion of the object
		 * namespace. No exclude-prefix may be a prefix of another
		 * exclude-prefix.
		 * * If `include_prefixes` is specified, then each exclude-prefix must start
		 * with the value of a path explicitly included by `include_prefixes`.
		 * The max size of `include_prefixes` is 1000.
		 */
		includePrefixes?: Array<string> | null;

		/**
		 * If specified, only objects with a "last modification time" before this
		 * timestamp and objects that don't have a "last modification time" will be
		 * transferred.
		 */
		lastModifiedBefore?: string | null;

		/**
		 * If specified, only objects with a "last modification time" on or after
		 * this timestamp and objects that don't have a "last modification time" are
		 * transferred.
		 * The `last_modified_since` and `last_modified_before` fields can be used
		 * together for chunked data processing. For example, consider a script that
		 * processes each day's worth of data at a time. For that you'd set each
		 * of the fields as follows:
		 * *  `last_modified_since` to the start of the day
		 * *  `last_modified_before` to the end of the day
		 */
		lastModifiedSince?: string | null;

		/**
		 * If specified, only objects with a "last modification time" on or after
		 * `NOW` - `max_time_elapsed_since_last_modification` and objects that don't
		 * have a "last modification time" are transferred.
		 * For each TransferOperation started by this TransferJob,
		 * `NOW` refers to the start_time of the
		 * `TransferOperation`.
		 */
		maxTimeElapsedSinceLastModification?: string | null;

		/**
		 * If specified, only objects with a "last modification time" before
		 * `NOW` - `min_time_elapsed_since_last_modification` and objects that don't
		 * have a "last modification time" are transferred.
		 * For each TransferOperation started by this TransferJob, `NOW`
		 * refers to the start_time of the
		 * `TransferOperation`.
		 */
		minTimeElapsedSinceLastModification?: string | null;
	}


	/**
	 * TransferOptions uses three boolean parameters to define the actions
	 * to be performed on objects in a transfer.
	 */
	export interface TransferOptions {

		/**
		 * Whether objects should be deleted from the source after they are
		 * transferred to the sink.
		 * **Note:** This option and delete_objects_unique_in_sink are mutually
		 * exclusive.
		 */
		deleteObjectsFromSourceAfterTransfer?: boolean | null;

		/**
		 * Whether objects that exist only in the sink should be deleted.
		 * **Note:** This option and delete_objects_from_source_after_transfer are
		 * mutually exclusive.
		 */
		deleteObjectsUniqueInSink?: boolean | null;

		/** Whether overwriting objects that already exist in the sink is allowed. */
		overwriteObjectsAlreadyExistingInSink?: boolean | null;
	}


	/** Request passed to PauseTransferOperation. */
	export interface PauseTransferOperationRequest {
	}


	/** Request passed to ResumeTransferOperation. */
	export interface ResumeTransferOperationRequest {
	}


	/** A collection of counters that report the progress of a transfer operation. */
	export interface TransferCounters {

		/** Bytes that are copied to the data sink. */
		bytesCopiedToSink?: string | null;

		/** Bytes that are deleted from the data sink. */
		bytesDeletedFromSink?: string | null;

		/** Bytes that are deleted from the data source. */
		bytesDeletedFromSource?: string | null;

		/** Bytes that failed to be deleted from the data sink. */
		bytesFailedToDeleteFromSink?: string | null;

		/**
		 * Bytes found in the data source that are scheduled to be transferred,
		 * excluding any that are filtered based on object conditions or skipped due
		 * to sync.
		 */
		bytesFoundFromSource?: string | null;

		/** Bytes found only in the data sink that are scheduled to be deleted. */
		bytesFoundOnlyFromSink?: string | null;

		/**
		 * Bytes in the data source that failed to be transferred or that failed to
		 * be deleted after being transferred.
		 */
		bytesFromSourceFailed?: string | null;

		/**
		 * Bytes in the data source that are not transferred because they already
		 * exist in the data sink.
		 */
		bytesFromSourceSkippedBySync?: string | null;

		/** Objects that are copied to the data sink. */
		objectsCopiedToSink?: string | null;

		/** Objects that are deleted from the data sink. */
		objectsDeletedFromSink?: string | null;

		/** Objects that are deleted from the data source. */
		objectsDeletedFromSource?: string | null;

		/** Objects that failed to be deleted from the data sink. */
		objectsFailedToDeleteFromSink?: string | null;

		/**
		 * Objects found in the data source that are scheduled to be transferred,
		 * excluding any that are filtered based on object conditions or skipped due
		 * to sync.
		 */
		objectsFoundFromSource?: string | null;

		/** Objects found only in the data sink that are scheduled to be deleted. */
		objectsFoundOnlyFromSink?: string | null;

		/**
		 * Objects in the data source that failed to be transferred or that failed
		 * to be deleted after being transferred.
		 */
		objectsFromSourceFailed?: string | null;

		/**
		 * Objects in the data source that are not transferred because they already
		 * exist in the data sink.
		 */
		objectsFromSourceSkippedBySync?: string | null;
	}


	/** A description of the execution of a transfer. */
	export interface TransferOperation {

		/** A collection of counters that report the progress of a transfer operation. */
		counters?: TransferCounters | null;

		/** End time of this transfer execution. */
		endTime?: string | null;

		/** Summarizes errors encountered with sample error log entries. */
		errorBreakdowns?: Array<ErrorSummary> | null;

		/** A globally unique ID assigned by the system. */
		name?: string | null;

		/**
		 * Specification to configure notifications published to Cloud Pub/Sub.
		 * Notifications will be published to the customer-provided topic using the
		 * following `PubsubMessage.attributes`:
		 * * `"eventType"`: one of the EventType values
		 * * `"payloadFormat"`: one of the PayloadFormat values
		 * * `"projectId"`: the project_id of the
		 * `TransferOperation`
		 * * `"transferJobName"`: the
		 * transfer_job_name of the
		 * `TransferOperation`
		 * * `"transferOperationName"`: the name of the
		 * `TransferOperation`
		 * The `PubsubMessage.data` will contain a TransferOperation resource
		 * formatted according to the specified `PayloadFormat`.
		 */
		notificationConfig?: NotificationConfig | null;

		/** The ID of the Google Cloud Platform Project that owns the operation. */
		projectId?: string | null;

		/** Start time of this transfer execution. */
		startTime?: string | null;

		/** Status of the transfer operation. */
		status?: TransferOperationStatus | null;

		/** The name of the transfer job that triggers this transfer operation. */
		transferJobName?: string | null;

		/** Configuration for running a transfer. */
		transferSpec?: TransferSpec | null;
	}

	export enum TransferOperationStatus { STATUS_UNSPECIFIED = 0, IN_PROGRESS = 1, PAUSED = 2, SUCCESS = 3, FAILED = 4, ABORTED = 5, QUEUED = 6 }


	/** Request passed to UpdateTransferJob. */
	export interface UpdateTransferJobRequest {

		/**
		 * Required. The ID of the Google Cloud Platform Console project that owns the
		 * job.
		 */
		projectId?: string | null;

		/**
		 * This resource represents the configuration of a transfer job that runs
		 * periodically.
		 */
		transferJob?: TransferJob | null;

		/**
		 * The field mask of the fields in `transferJob` that are to be updated in
		 * this request.  Fields in `transferJob` that can be updated are:
		 * description,
		 * transfer_spec,
		 * notification_config, and
		 * status.  To update the `transfer_spec` of the job, a
		 * complete transfer specification must be provided. An incomplete
		 * specification missing any required fields will be rejected with the error
		 * INVALID_ARGUMENT.
		 */
		updateTransferJobFieldMask?: string | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the Google service account that is used by Storage Transfer
		 * Service to access buckets in the project where transfers
		 * run or in other projects. Each Google service account is associated
		 * with one Google Cloud Platform Console project. Users
		 * should add this service account to the Google Cloud Storage bucket
		 * ACLs to grant access to Storage Transfer Service. This service
		 * account is created and owned by Storage Transfer Service and can
		 * only be used by Storage Transfer Service.
		 * Get v1/googleServiceAccounts/{projectId}
		 * @param {string} projectId Required. The ID of the Google Cloud Platform Console project that the
		 * Google service account is associated with.
		 * @return {void} Successful response
		 */
		Storagetransfer_googleServiceAccounts_get(projectId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/googleServiceAccounts/' + (projectId == null ? '' : encodeURIComponent(projectId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists transfer jobs.
		 * Get v1/transferJobs
		 * @param {string} filter Required. A list of query parameters specified as JSON text in the form of:
		 * {"project<span>_</span>id":"my_project_id",
		 *  "job_names":["jobid1","jobid2",...],
		 *  "job_statuses":["status1","status2",...]}.
		 * Since `job_names` and `job_statuses` support multiple values, their values
		 * must be specified with array notation. `project`<span>`_`</span>`id` is
		 * required.  `job_names` and `job_statuses` are optional.  The valid values
		 * for `job_statuses` are case-insensitive:
		 * ENABLED,
		 * DISABLED, and
		 * DELETED.
		 * @param {number} pageSize The list page size. The max allowed value is 256.
		 * @param {string} pageToken The list page token.
		 * @return {void} Successful response
		 */
		Storagetransfer_transferJobs_list(filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/transferJobs?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a transfer job that runs periodically.
		 * Post v1/transferJobs
		 * @return {void} Successful response
		 */
		Storagetransfer_transferJobs_create(requestBody: TransferJob): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/transferJobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a transfer job.
		 * Get v1/{jobName}
		 * @param {string} jobName Required. The job to get.
		 * @param {string} projectId Required. The ID of the Google Cloud Platform Console project that owns the
		 * job.
		 * @return {void} Successful response
		 */
		Storagetransfer_transferJobs_get(jobName: string, projectId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a transfer job. Updating a job's transfer spec does not affect
		 * transfer operations that are running already. Updating a job's schedule
		 * is not allowed.
		 * **Note:** The job's status field can be modified
		 * using this RPC (for example, to set a job's status to
		 * DELETED,
		 * DISABLED, or
		 * ENABLED).
		 * Patch v1/{jobName}
		 * @param {string} jobName Required. The name of job to update.
		 * @return {void} Successful response
		 */
		Storagetransfer_transferJobs_patch(jobName: string, requestBody: UpdateTransferJobRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (jobName == null ? '' : encodeURIComponent(jobName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the latest state of a long-running operation.  Clients can use this
		 * method to poll the operation result at intervals as recommended by the API
		 * service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {void} Successful response
		 */
		Storagetransfer_transferOperations_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels a transfer. Use the get method to check whether the cancellation succeeded or whether the operation completed despite cancellation.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {void} Successful response
		 */
		Storagetransfer_transferOperations_cancel(name: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Pauses a transfer operation.
		 * Post v1/{name}:pause
		 * @param {string} name Required. The name of the transfer operation.
		 * @return {void} Successful response
		 */
		Storagetransfer_transferOperations_pause(name: string, requestBody: PauseTransferOperationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':pause', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Resumes a transfer operation that is paused.
		 * Post v1/{name}:resume
		 * @param {string} name Required. The name of the transfer operation.
		 * @return {void} Successful response
		 */
		Storagetransfer_transferOperations_resume(name: string, requestBody: ResumeTransferOperationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':resume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

