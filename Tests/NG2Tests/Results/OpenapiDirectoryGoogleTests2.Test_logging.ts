import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Options that change functionality of a sink exporting data to BigQuery. */
	export interface BigQueryOptions {

		/** Optional. Whether to use BigQuery's partition tables. By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone. */
		usePartitionedTables?: boolean;

		/** Output only. True if new timestamp column based partitioning is in use, false if legacy ingestion-time partitioning is in use. All new sinks will have this field set true and will use timestamp column based partitioning. If use_partitioned_tables is false, this value has no meaning and will be false. Legacy sinks using partitioned tables will have this field set to false. */
		usesTimestampColumnPartitioning?: boolean;
	}


	/** BucketOptions describes the bucket boundaries used to create a histogram for the distribution. The buckets can be in a linear sequence, an exponential sequence, or each bucket can be specified explicitly. BucketOptions does not include the number of values in each bucket.A bucket has an inclusive lower bound and exclusive upper bound for the values that are counted for that bucket. The upper bound of a bucket must be strictly greater than the lower bound. The sequence of N buckets for a distribution consists of an underflow bucket (number 0), zero or more finite buckets (number 1 through N - 2) and an overflow bucket (number N - 1). The buckets are contiguous: the lower bound of bucket i (i > 0) is the same as the upper bound of bucket i - 1. The buckets span the whole range of finite values: lower bound of the underflow bucket is -infinity and the upper bound of the overflow bucket is +infinity. The finite buckets are so-called because both bounds are finite. */
	export interface BucketOptions {

		/** Specifies a set of buckets with arbitrary widths.There are size(bounds) + 1 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): boundsi  Lower bound (1 <= i < N); boundsi - 1The bounds field must contain at least one element. If bounds has only one element, then there are no finite buckets, and that single element is the common boundary of the overflow and underflow buckets. */
		explicitBuckets?: Explicit;

		/** Specifies an exponential sequence of buckets that have a width that is proportional to the value of the lower bound. Each bucket represents a constant relative uncertainty on a specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): scale * (growth_factor ^ i).  Lower bound (1 <= i < N): scale * (growth_factor ^ (i - 1)). */
		exponentialBuckets?: Exponential;

		/** Specifies a linear sequence of buckets that all have the same width (except overflow and underflow). Each bucket represents a constant absolute uncertainty on the specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): offset + (width * i).  Lower bound (1 <= i < N): offset + (width * (i - 1)). */
		linearBuckets?: Linear;
	}


	/** Specifies a set of buckets with arbitrary widths.There are size(bounds) + 1 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): boundsi  Lower bound (1 <= i < N); boundsi - 1The bounds field must contain at least one element. If bounds has only one element, then there are no finite buckets, and that single element is the common boundary of the overflow and underflow buckets. */
	export interface Explicit {

		/** The values must be monotonically increasing. */
		bounds?: Array<number>;
	}


	/** Specifies an exponential sequence of buckets that have a width that is proportional to the value of the lower bound. Each bucket represents a constant relative uncertainty on a specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): scale * (growth_factor ^ i).  Lower bound (1 <= i < N): scale * (growth_factor ^ (i - 1)). */
	export interface Exponential {

		/** Must be greater than 1. */
		growthFactor?: number;

		/** Must be greater than 0. */
		numFiniteBuckets?: number;

		/** Must be greater than 0. */
		scale?: number;
	}


	/** Specifies a linear sequence of buckets that all have the same width (except overflow and underflow). Each bucket represents a constant absolute uncertainty on the specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): offset + (width * i).  Lower bound (1 <= i < N): offset + (width * (i - 1)). */
	export interface Linear {

		/** Must be greater than 0. */
		numFiniteBuckets?: number;

		/** Lower bound of the first bucket. */
		offset?: number;

		/** Must be greater than 0. */
		width?: number;
	}


	/** Describes the customer-managed encryption key (CMEK) settings associated with a project, folder, organization, billing account, or flexible resource.Note: CMEK for the Logs Router can currently only be configured for GCP organizations. Once configured, it applies to all projects and folders in the GCP organization.See Enabling CMEK for Logs Router for more information. */
	export interface CmekSettings {

		/** The resource name for the configured Cloud KMS key.KMS key name format:  "projects/PROJECT_ID/locations/LOCATION/keyRings/KEYRING/cryptoKeys/KEY"For example:  "projects/my-project-id/locations/my-region/keyRings/key-ring-name/cryptoKeys/key-name"To enable CMEK for the Logs Router, set this field to a valid kms_key_name for which the associated service account has the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key.The Cloud KMS key used by the Log Router can be updated by changing the kms_key_name to a new valid key name. Encryption operations that are in progress will be completed with the key that was in use when they started. Decryption operations will be completed using the key that was used at the time of encryption unless access to that key has been revoked.To disable CMEK for the Logs Router, set this field to an empty string.See Enabling CMEK for Logs Router for more information. */
		kmsKeyName?: string;

		/** Output only. The resource name of the CMEK settings. */
		name?: string;

		/** Output only. The service account that will be used by the Logs Router to access your Cloud KMS key.Before enabling CMEK for Logs Router, you must first assign the role roles/cloudkms.cryptoKeyEncrypterDecrypter to the service account that the Logs Router will use to access your Cloud KMS key. Use GetCmekSettings to obtain the service account ID.See Enabling CMEK for Logs Router for more information. */
		serviceAccountId?: string;
	}


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:
	 * service Foo {
	 *   rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 * }
	 * The JSON representation for Empty is empty JSON object {}.
	 */
	export interface Empty {
	}


	/** A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message. */
	export interface HttpRequest {

		/** The number of HTTP response bytes inserted into cache. Set only when a cache fill was attempted. */
		cacheFillBytes?: string;

		/** Whether or not an entity was served from cache (with or without validation). */
		cacheHit?: boolean;

		/** Whether or not a cache lookup was attempted. */
		cacheLookup?: boolean;

		/** Whether or not the response was validated with the origin server before being served from cache. This field is only meaningful if cache_hit is True. */
		cacheValidatedWithOriginServer?: boolean;

		/** The request processing latency on the server, from the time the request was received until the response was sent. */
		latency?: string;

		/** Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket" */
		protocol?: string;

		/** The referer URL of the request, as defined in HTTP/1.1 Header Field Definitions (http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). */
		referer?: string;

		/** The IP address (IPv4 or IPv6) of the client that issued the HTTP request. Examples: "192.168.1.1", "FE80::0202:B3FF:FE1E:8329". */
		remoteIp?: string;

		/** The request method. Examples: "GET", "HEAD", "PUT", "POST". */
		requestMethod?: string;

		/** The size of the HTTP request message in bytes, including the request headers and the request body. */
		requestSize?: string;

		/** The scheme (http, https), the host name, the path and the query portion of the URL that was requested. Example: "http://example.com/some/info?color=red". */
		requestUrl?: string;

		/** The size of the HTTP response message sent back to the client, in bytes, including the response headers and the response body. */
		responseSize?: string;

		/** The IP address (IPv4 or IPv6) of the origin server that the request was sent to. */
		serverIp?: string;

		/** The response code indicating the status of response. Examples: 200, 404. */
		status?: number;

		/**
		 * The user agent sent by the client. Example: "Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET
		 * CLR 1.0.3705)".
		 */
		userAgent?: string;
	}


	/** A description of a label. */
	export interface LabelDescriptor {

		/** A human-readable description for the label. */
		description?: string;

		/** The label key. */
		key?: string;

		/** The type of data that can be assigned to the label. */
		valueType?: LabelDescriptorValueType;
	}

	export enum LabelDescriptorValueType { STRING = 0, BOOL = 1, INT64 = 2 }


	/** The response from ListBuckets (Beta). */
	export interface ListBucketsResponse {

		/** A list of buckets. */
		buckets?: Array<LogBucket>;

		/** If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken. */
		nextPageToken?: string;
	}


	/** Describes a repository of logs (Beta). */
	export interface LogBucket {

		/** Output only. The creation timestamp of the bucket. This is not set for any of the default buckets. */
		createTime?: string;

		/** Describes this bucket. */
		description?: string;

		/** Output only. The bucket lifecycle state. */
		lifecycleState?: LogBucketLifecycleState;

		/** The resource name of the bucket. For example: "projects/my-project-id/locations/my-location/buckets/my-bucket-id The supported locations are:  "global"  "us-central1"For the location of global it is unspecified where logs are actually stored. Once a bucket has been created, the location can not be changed. */
		name?: string;

		/** Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used. */
		retentionDays?: number;

		/** Output only. The last update timestamp of the bucket. */
		updateTime?: string;
	}

	export enum LogBucketLifecycleState { LIFECYCLE_STATE_UNSPECIFIED = 0, ACTIVE = 1, DELETE_REQUESTED = 2 }


	/** Result returned from ListExclusions. */
	export interface ListExclusionsResponse {

		/** A list of exclusions. */
		exclusions?: Array<LogExclusion>;

		/** If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken. */
		nextPageToken?: string;
	}


	/** Specifies a set of log entries that are not to be stored in Logging. If your GCP resource receives a large volume of logs, you can use exclusions to reduce your chargeable logs. Exclusions are processed after log sinks, so you can export log entries before they are excluded. Note that organization-level and folder-level exclusions don't apply to child resources, and that you can't exclude audit log entries. */
	export interface LogExclusion {

		/** Output only. The creation timestamp of the exclusion.This field may not be present for older exclusions. */
		createTime?: string;

		/** Optional. A description of this exclusion. */
		description?: string;

		/** Optional. If set to True, then this exclusion is disabled and it does not exclude any log entries. You can update an exclusion to change the value of this field. */
		disabled?: boolean;

		/** Required. An advanced logs filter that matches the log entries to be excluded. By using the sample function, you can exclude less than 100% of the matching log entries. For example, the following query matches 99% of low-severity log entries from Google Cloud Storage buckets:"resource.type=gcs_bucket severity<ERROR sample(insertId, 0.99)" */
		filter?: string;

		/** Required. A client-assigned identifier, such as "load-balancer-exclusion". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric. */
		name?: string;

		/** Output only. The last update timestamp of the exclusion.This field may not be present for older exclusions. */
		updateTime?: string;
	}


	/** The parameters to ListLogEntries. */
	export interface ListLogEntriesRequest {

		/** Optional. A filter that chooses which log entries to return. See Advanced Logs Queries. Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in resource_names. Referencing a parent resource that is not listed in resource_names will cause the filter to return no results. The maximum length of the filter is 20000 characters. */
		filter?: string;

		/** Optional. How the results should be sorted. Presently, the only permitted values are "timestamp asc" (default) and "timestamp desc". The first option returns entries in order of increasing values of LogEntry.timestamp (oldest first), and the second option returns entries in order of decreasing timestamps (newest first). Entries with equal timestamps are returned in order of their insert_id values. */
		orderBy?: string;

		/** Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of next_page_token in the response indicates that more results might be available. */
		pageSize?: number;

		/** Optional. If present, then retrieve the next batch of results from the preceding call to this method. page_token must be the value of next_page_token from the previous response. The values of other method parameters should be identical to those in the previous call. */
		pageToken?: string;

		/** Optional. Deprecated. Use resource_names instead. One or more project identifiers or project numbers from which to retrieve log entries. Example: "my-project-1A". */
		projectIds?: Array<string>;

		/**
		 * Required. Names of one or more parent resources from which to retrieve log entries:
		 * "projects/[PROJECT_ID]"
		 * "organizations/[ORGANIZATION_ID]"
		 * "billingAccounts/[BILLING_ACCOUNT_ID]"
		 * "folders/[FOLDER_ID]"
		 * Projects listed in the project_ids field are added to this list.
		 */
		resourceNames?: Array<string>;
	}


	/** Result returned from ListLogEntries. */
	export interface ListLogEntriesResponse {

		/** A list of log entries. If entries is empty, nextPageToken may still be returned, indicating that more entries may exist. See nextPageToken for more information. */
		entries?: Array<LogEntry>;

		/** If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.If a value for next_page_token appears and the entries field is empty, it means that the search found no log entries so far but it did not have time to search all the possible log entries. Retry the method with this value for page_token to continue the search. Alternatively, consider speeding up the search by changing your filter to specify a single log name or resource type, or to narrow the time range of the search. */
		nextPageToken?: string;
	}


	/** An individual entry in a log. */
	export interface LogEntry {

		/** A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message. */
		httpRequest?: HttpRequest;

		/** Optional. A unique identifier for the log entry. If you provide a value, then Logging considers other log entries in the same project, with the same timestamp, and with the same insert_id to be duplicates which are removed in a single query result. However, there are no guarantees of de-duplication in the export of logs.If the insert_id is omitted when writing a log entry, the Logging API  assigns its own unique identifier in this field.In queries, the insert_id is also used to order log entries that have the same log_name and timestamp values. */
		insertId?: string;

		/** The log entry payload, represented as a structure that is expressed as a JSON object. */
		jsonPayload?: {[id: string]: any };

		/** Optional. A set of user-defined (key, value) data that provides additional information about the log entry. */
		labels?: {[id: string]: any };

		/**
		 * Required. The resource name of the log to which this log entry belongs:
		 * "projects/[PROJECT_ID]/logs/[LOG_ID]"
		 * "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
		 * "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
		 * "folders/[FOLDER_ID]/logs/[LOG_ID]"
		 * A project number may be used in place of PROJECT_ID. The project number is translated to its corresponding PROJECT_ID internally and the log_name field will contain PROJECT_ID in queries and exports.[LOG_ID] must be URL-encoded within log_name. Example: "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". [LOG_ID] must be less than 512 characters long and can only include the following characters: upper and lower case alphanumeric characters, forward-slash, underscore, hyphen, and period.For backward compatibility, if log_name begins with a forward-slash, such as /projects/..., then the log entry is ingested as usual but the forward-slash is removed. Listing the log entry will not show the leading slash and filtering for a log name with a leading slash will never return any results.
		 */
		logName?: string;

		/** Auxiliary metadata for a MonitoredResource object. MonitoredResource objects contain the minimum set of information to uniquely identify a monitored resource instance. There is some other useful auxiliary metadata. Monitoring and Logging use an ingestion pipeline to extract metadata for cloud resources of all types, and store the metadata in this message. */
		metadata?: MonitoredResourceMetadata;

		/** Additional information about a potentially long-running operation with which a log entry is associated. */
		operation?: LogEntryOperation;

		/** The log entry payload, represented as a protocol buffer. Some Google Cloud Platform services use this field for their log entry payloads.The following protocol buffer types are supported; user-defined types are not supported:"type.googleapis.com/google.cloud.audit.AuditLog"  "type.googleapis.com/google.appengine.logging.v1.RequestLog" */
		protoPayload?: {[id: string]: any };

		/** Output only. The time the log entry was received by Logging. */
		receiveTimestamp?: string;

		/**
		 * An object representing a resource that can be used for monitoring, logging, billing, or other purposes. Examples include virtual machine instances, databases, and storage devices such as disks. The type field identifies a MonitoredResourceDescriptor object that describes the resource's schema. Information in the labels field identifies the actual resource and its attributes according to the schema. For example, a particular Compute Engine VM instance could be represented by the following object, because the MonitoredResourceDescriptor for "gce_instance" has labels "instance_id" and "zone":
		 * { "type": "gce_instance",
		 * "labels": { "instance_id": "12345678901234",
		 * "zone": "us-central1-a" }}
		 */
		resource?: MonitoredResource;

		/** Optional. The severity of the log entry. The default value is LogSeverity.DEFAULT. */
		severity?: LogEntrySeverity;

		/** Additional information about the source code location that produced the log entry. */
		sourceLocation?: LogEntrySourceLocation;

		/** Optional. The span ID within the trace associated with the log entry.For Trace spans, this is the same format that the Trace API v2 uses: a 16-character hexadecimal encoding of an 8-byte array, such as 000000000000004a. */
		spanId?: string;

		/** The log entry payload, represented as a Unicode string (UTF-8). */
		textPayload?: string;

		/** Optional. The time the event described by the log entry occurred. This time is used to compute the log entry's age and to enforce the logs retention period. If this field is omitted in a new log entry, then Logging assigns it the current time. Timestamps have nanosecond accuracy, but trailing zeros in the fractional seconds might be omitted when the timestamp is displayed.Incoming log entries must have timestamps that don't exceed the logs retention period in the past, and that don't exceed 24 hours in the future. Log entries outside those time boundaries aren't ingested by Logging. */
		timestamp?: string;

		/** Optional. Resource name of the trace associated with the log entry, if any. If it contains a relative resource name, the name is assumed to be relative to //tracing.googleapis.com. Example: projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824 */
		trace?: string;

		/** Optional. The sampling decision of the trace associated with the log entry.True means that the trace resource name in the trace field was sampled for storage in a trace backend. False means that the trace was not sampled for storage when this log entry was written, or the sampling decision was unknown at the time. A non-sampled trace value is still useful as a request correlation identifier. The default is False. */
		traceSampled?: boolean;
	}


	/** Auxiliary metadata for a MonitoredResource object. MonitoredResource objects contain the minimum set of information to uniquely identify a monitored resource instance. There is some other useful auxiliary metadata. Monitoring and Logging use an ingestion pipeline to extract metadata for cloud resources of all types, and store the metadata in this message. */
	export interface MonitoredResourceMetadata {

		/**
		 * Output only. Values for predefined system metadata labels. System labels are a kind of metadata extracted by Google, including "machine_image", "vpc", "subnet_id", "security_group", "name", etc. System label values can be only strings, Boolean values, or a list of strings. For example:
		 * { "name": "my-test-instance",
		 * "security_group": ["a", "b", "c"],
		 * "spot_instance": false }
		 */
		systemLabels?: {[id: string]: any };

		/** Output only. A map of user-defined metadata labels. */
		userLabels?: {[id: string]: any };
	}


	/** Additional information about a potentially long-running operation with which a log entry is associated. */
	export interface LogEntryOperation {

		/** Optional. Set this to True if this is the first log entry in the operation. */
		first?: boolean;

		/** Optional. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation. */
		id?: string;

		/** Optional. Set this to True if this is the last log entry in the operation. */
		last?: boolean;

		/** Optional. An arbitrary producer identifier. The combination of id and producer must be globally unique. Examples for producer: "MyDivision.MyBigCompany.com", "github.com/MyProject/MyApplication". */
		producer?: string;
	}


	/**
	 * An object representing a resource that can be used for monitoring, logging, billing, or other purposes. Examples include virtual machine instances, databases, and storage devices such as disks. The type field identifies a MonitoredResourceDescriptor object that describes the resource's schema. Information in the labels field identifies the actual resource and its attributes according to the schema. For example, a particular Compute Engine VM instance could be represented by the following object, because the MonitoredResourceDescriptor for "gce_instance" has labels "instance_id" and "zone":
	 * { "type": "gce_instance",
	 *   "labels": { "instance_id": "12345678901234",
	 *               "zone": "us-central1-a" }}
	 */
	export interface MonitoredResource {

		/** Required. Values for all of the labels listed in the associated monitored resource descriptor. For example, Compute Engine VM instances use the labels "project_id", "instance_id", and "zone". */
		labels?: {[id: string]: any };

		/** Required. The monitored resource type. This field must match the type field of a MonitoredResourceDescriptor object. For example, the type of a Compute Engine VM instance is gce_instance. */
		type?: string;
	}

	export enum LogEntrySeverity { DEFAULT = 0, DEBUG = 1, INFO = 2, NOTICE = 3, WARNING = 4, ERROR = 5, CRITICAL = 6, ALERT = 7, EMERGENCY = 8 }


	/** Additional information about the source code location that produced the log entry. */
	export interface LogEntrySourceLocation {

		/** Optional. Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name. */
		file?: string;

		/** Optional. Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information may be used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: qual.if.ied.Class.method (Java), dir/package.func (Go), function (Python). */
		function?: string;

		/** Optional. Line within the source file. 1-based; 0 indicates no line number available. */
		line?: string;
	}


	/** Result returned from ListLogMetrics. */
	export interface ListLogMetricsResponse {

		/** A list of logs-based metrics. */
		metrics?: Array<LogMetric>;

		/** If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken. */
		nextPageToken?: string;
	}


	/** Describes a logs-based metric. The value of the metric is the number of log entries that match a logs filter in a given time interval.Logs-based metric can also be used to extract values from logs and create a a distribution of the values. The distribution records the statistics of the extracted values along with an optional histogram of the values as specified by the bucket options. */
	export interface LogMetric {

		/** BucketOptions describes the bucket boundaries used to create a histogram for the distribution. The buckets can be in a linear sequence, an exponential sequence, or each bucket can be specified explicitly. BucketOptions does not include the number of values in each bucket.A bucket has an inclusive lower bound and exclusive upper bound for the values that are counted for that bucket. The upper bound of a bucket must be strictly greater than the lower bound. The sequence of N buckets for a distribution consists of an underflow bucket (number 0), zero or more finite buckets (number 1 through N - 2) and an overflow bucket (number N - 1). The buckets are contiguous: the lower bound of bucket i (i > 0) is the same as the upper bound of bucket i - 1. The buckets span the whole range of finite values: lower bound of the underflow bucket is -infinity and the upper bound of the overflow bucket is +infinity. The finite buckets are so-called because both bounds are finite. */
		bucketOptions?: BucketOptions;

		/** Output only. The creation timestamp of the metric.This field may not be present for older metrics. */
		createTime?: string;

		/** Optional. A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters. */
		description?: string;

		/**
		 * Required. An advanced logs filter which is used to match log entries. Example:
		 * "resource.type=gae_app AND severity>=ERROR"
		 * The maximum length of the filter is 20000 characters.
		 */
		filter?: string;

		/** Optional. A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value. Each label key specified in the LabelDescriptor must have an associated extractor expression in this map. The syntax of the extractor expression is the same as for the value_extractor field.The extracted value is converted to the type defined in the label descriptor. If the either the extraction or the type conversion fails, the label will have a default value. The default value for a string label is an empty string, for an integer label its 0, and for a boolean label its false.Note that there are upper bounds on the maximum number of labels and the number of active time series that are allowed in a project. */
		labelExtractors?: {[id: string]: any };

		/** Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable. */
		metricDescriptor?: MetricDescriptor;

		/** Required. The client-assigned metric identifier. Examples: "error_count", "nginx/requests".Metric identifiers are limited to 100 characters and can include only the following characters: A-Z, a-z, 0-9, and the special characters _-.,+!*',()%/. The forward-slash character (/) denotes a hierarchy of name pieces, and it cannot be the first character of the name.The metric identifier in this field must not be URL-encoded (https://en.wikipedia.org/wiki/Percent-encoding). However, when the metric identifier appears as the [METRIC_ID] part of a metric_name API parameter, then the metric identifier must be URL-encoded. Example: "projects/my-project/metrics/nginx%2Frequests". */
		name?: string;

		/** Output only. The last update timestamp of the metric.This field may not be present for older metrics. */
		updateTime?: string;

		/** Optional. A value_extractor is required when using a distribution logs-based metric to extract the values to record from a log entry. Two functions are supported for value extraction: EXTRACT(field) or REGEXP_EXTRACT(field, regex). The argument are:  1. field: The name of the log entry field from which the value is to be  extracted.  2. regex: A regular expression using the Google RE2 syntax  (https://github.com/google/re2/wiki/Syntax) with a single capture  group to extract data from the specified log entry field. The value  of the field is converted to a string before applying the regex.  It is an error to specify a regex that does not include exactly one  capture group.The result of the extraction must be convertible to a double type, as the distribution always records double values. If either the extraction or the conversion to double fails, then those values are not recorded in the distribution.Example: REGEXP_EXTRACT(jsonPayload.request, ".*quantity=(\d+).*") */
		valueExtractor?: string;

		/** Deprecated. The API version that created or updated this metric. The v2 format is used by default and cannot be changed. */
		version?: LogMetricVersion;
	}


	/** Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable. */
	export interface MetricDescriptor {

		/** A detailed description of the metric, which can be used in documentation. */
		description?: string;

		/** A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example "Request count". This field is optional but it is recommended to be set for any metrics associated with user-visible concepts, such as Quota. */
		displayName?: string;

		/** The set of labels that can be used to describe a specific instance of this metric type. For example, the appengine.googleapis.com/http/server/response_latencies metric type has a label for the HTTP response code, response_code, so you can look at latencies for successful responses or just for responses that failed. */
		labels?: Array<LabelDescriptor>;

		/** Optional. The launch stage of the metric definition. */
		launchStage?: MetricDescriptorLaunchStage;

		/** Additional annotations that can be used to guide the usage of a metric. */
		metadata?: MetricDescriptorMetadata;

		/** Whether the metric records instantaneous values, changes to a value, etc. Some combinations of metric_kind and value_type might not be supported. */
		metricKind?: MetricDescriptorMetricKind;

		/** Read-only. If present, then a time series, which is identified partially by a metric type and a MonitoredResourceDescriptor, that is associated with this metric type can only be associated with one of the monitored resource types listed here. */
		monitoredResourceTypes?: Array<string>;

		/** The resource name of the metric descriptor. */
		name?: string;

		/**
		 * The metric type, including its DNS name prefix. The type is not URL-encoded. All user-defined metric types have the DNS name custom.googleapis.com or external.googleapis.com. Metric types should use a natural hierarchical grouping. For example:
		 * "custom.googleapis.com/invoice/paid/amount"
		 * "external.googleapis.com/prometheus/up"
		 * "appengine.googleapis.com/http/server/response_latencies"
		 */
		type?: string;

		/**
		 * The units in which the metric value is reported. It is only applicable if the value_type is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of the stored metric values.Different systems may scale the values to be more easily displayed (so a value of 0.02KBy might be displayed as 20By, and a value of 3523KBy might be displayed as 3.5MBy). However, if the unit is KBy, then the value of the metric is always in thousands of bytes, no matter how it may be displayed..If you want a custom metric to record the exact number of CPU-seconds used by a job, you can create an INT64 CUMULATIVE metric whose unit is s{CPU} (or equivalently 1s{CPU} or just s). If the job uses 12,005 CPU-seconds, then the value is written as 12005.Alternatively, if you want a custom metric to record data in a more granular way, you can create a DOUBLE CUMULATIVE metric whose unit is ks{CPU}, and then write the value 12.005 (which is 12005/1000), or use Kis{CPU} and write 11.723 (which is 12005/1024).The supported units are a subset of The Unified Code for Units of Measure (http://unitsofmeasure.org/ucum.html) standard:Basic units (UNIT)
		 * bit bit
		 * By byte
		 * s second
		 * min minute
		 * h hour
		 * d dayPrefixes (PREFIX)
		 * k kilo (10^3)
		 * M mega (10^6)
		 * G giga (10^9)
		 * T tera (10^12)
		 * P peta (10^15)
		 * E exa (10^18)
		 * Z zetta (10^21)
		 * Y yotta (10^24)
		 * m milli (10^-3)
		 * u micro (10^-6)
		 * n nano (10^-9)
		 * p pico (10^-12)
		 * f femto (10^-15)
		 * a atto (10^-18)
		 * z zepto (10^-21)
		 * y yocto (10^-24)
		 * Ki kibi (2^10)
		 * Mi mebi (2^20)
		 * Gi gibi (2^30)
		 * Ti tebi (2^40)
		 * Pi pebi (2^50)GrammarThe grammar also includes these connectors:
		 * / division or ratio (as an infix operator). For examples,  kBy/{email} or MiBy/10ms (although you should almost never  have /s in a metric unit; rates should always be computed at  query time from the underlying cumulative or delta value).
		 * . multiplication or composition (as an infix operator). For  examples, GBy.d or k{watt}.h.The grammar for a unit is as follows:
		 * Expression = Component { "." Component } { "/" Component } ;
		 * Component = ( [ PREFIX ] UNIT | "%" ) [ Annotation ]
		 * | Annotation
		 * | "1"
		 * ;
		 * Annotation = "{" NAME "}" ;
		 * Notes:
		 * Annotation is just a comment if it follows a UNIT. If the annotation  is used alone, then the unit is equivalent to 1. For examples,  {request}/s == 1/s, By{transmitted}/s == By/s.
		 * NAME is a sequence of non-blank printable ASCII characters not  containing { or }.
		 * 1 represents a unitary dimensionless  unit (https://en.wikipedia.org/wiki/Dimensionless_quantity) of 1, such  as in 1/s. It is typically used when none of the basic units are  appropriate. For example, "new users per day" can be represented as  1/d or {new-users}/d (and a metric value 5 would mean "5 new  users). Alternatively, "thousands of page views per day" would be  represented as 1000/d or k1/d or k{page_views}/d (and a metric  value of 5.3 would mean "5300 page views per day").
		 * % represents dimensionless value of 1/100, and annotates values giving  a percentage (so the metric values are typically in the range of 0..100,  and a metric value 3 means "3 percent").
		 * 10^2.% indicates a metric contains a ratio, typically in the range  0..1, that will be multiplied by 100 and displayed as a percentage  (so a metric value 0.03 means "3 percent").
		 */
		unit?: string;

		/** Whether the measurement is an integer, a floating-point number, etc. Some combinations of metric_kind and value_type might not be supported. */
		valueType?: MetricDescriptorValueType;
	}

	export enum MetricDescriptorLaunchStage { LAUNCH_STAGE_UNSPECIFIED = 0, UNIMPLEMENTED = 1, PRELAUNCH = 2, EARLY_ACCESS = 3, ALPHA = 4, BETA = 5, GA = 6, DEPRECATED = 7 }


	/** Additional annotations that can be used to guide the usage of a metric. */
	export interface MetricDescriptorMetadata {

		/** The delay of data points caused by ingestion. Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors. */
		ingestDelay?: string;

		/** Deprecated. Must use the MetricDescriptor.launch_stage instead. */
		launchStage?: MetricDescriptorLaunchStage;

		/** The sampling period of metric data points. For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period. */
		samplePeriod?: string;
	}

	export enum MetricDescriptorMetricKind { METRIC_KIND_UNSPECIFIED = 0, GAUGE = 1, DELTA = 2, CUMULATIVE = 3 }

	export enum MetricDescriptorValueType { VALUE_TYPE_UNSPECIFIED = 0, BOOL = 1, INT64 = 2, DOUBLE = 3, STRING = 4, DISTRIBUTION = 5, MONEY = 6 }

	export enum LogMetricVersion { V2 = 0, V1 = 1 }


	/** Result returned from ListLogs. */
	export interface ListLogsResponse {

		/** A list of log names. For example, "projects/my-project/logs/syslog" or "organizations/123/logs/cloudresourcemanager.googleapis.com%2Factivity". */
		logNames?: Array<string>;

		/** If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken. */
		nextPageToken?: string;
	}


	/** Result returned from ListMonitoredResourceDescriptors. */
	export interface ListMonitoredResourceDescriptorsResponse {

		/** If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken. */
		nextPageToken?: string;

		/** A list of resource descriptors. */
		resourceDescriptors?: Array<MonitoredResourceDescriptor>;
	}


	/** An object that describes the schema of a MonitoredResource object using a type name and a set of labels. For example, the monitored resource descriptor for Google Compute Engine VM instances has a type of "gce_instance" and specifies the use of the labels "instance_id" and "zone" to identify particular VM instances.Different APIs can support different monitored resource types. APIs generally provide a list method that returns the monitored resource descriptors used by the API. */
	export interface MonitoredResourceDescriptor {

		/** Optional. A detailed description of the monitored resource type that might be used in documentation. */
		description?: string;

		/** Optional. A concise name for the monitored resource type that might be displayed in user interfaces. It should be a Title Cased Noun Phrase, without any article or other determiners. For example, "Google Cloud SQL Database". */
		displayName?: string;

		/** Required. A set of labels used to describe instances of this monitored resource type. For example, an individual Google Cloud SQL database is identified by values for the labels "database_id" and "zone". */
		labels?: Array<LabelDescriptor>;

		/** Optional. The launch stage of the monitored resource definition. */
		launchStage?: MetricDescriptorLaunchStage;

		/** Optional. The resource name of the monitored resource descriptor: "projects/{project_id}/monitoredResourceDescriptors/{type}" where {type} is the value of the type field in this object and {project_id} is a project ID that provides API-specific context for accessing the type. APIs that do not use project information can use the resource name format "monitoredResourceDescriptors/{type}". */
		name?: string;

		/** Required. The monitored resource type. For example, the type "cloudsql_database" represents databases in Google Cloud SQL. The maximum length of this value is 256 characters. */
		type?: string;
	}


	/** Result returned from ListSinks. */
	export interface ListSinksResponse {

		/** If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken. */
		nextPageToken?: string;

		/** A list of sinks. */
		sinks?: Array<LogSink>;
	}


	/** Describes a sink used to export log entries to one of the following destinations in any project: a Cloud Storage bucket, a BigQuery dataset, or a Cloud Pub/Sub topic. A logs filter controls which log entries are exported. The sink must be created within a project, organization, billing account, or folder. */
	export interface LogSink {

		/** Options that change functionality of a sink exporting data to BigQuery. */
		bigqueryOptions?: BigQueryOptions;

		/** Output only. The creation timestamp of the sink.This field may not be present for older sinks. */
		createTime?: string;

		/** Optional. A description of this sink. The maximum length of the description is 8000 characters. */
		description?: string;

		/**
		 * Required. The export destination:
		 * "storage.googleapis.com/[GCS_BUCKET]"
		 * "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]"
		 * "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]"
		 * The sink's writer_identity, set when the sink is created, must have permission to write to the destination or else the log entries are not exported. For more information, see Exporting Logs with Sinks.
		 */
		destination?: string;

		/** Optional. If set to True, then this sink is disabled and it does not export any log entries. */
		disabled?: boolean;

		/**
		 * Optional. An advanced logs filter. The only exported log entries are those that are in the resource owning the sink and that match the filter. For example:
		 * logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity>=ERROR
		 */
		filter?: string;

		/**
		 * Optional. This field applies only to sinks owned by organizations and folders. If the field is false, the default, only the logs owned by the sink's parent resource are available for export. If the field is true, then logs from all the projects, folders, and billing accounts contained in the sink's parent resource are also available for export. Whether a particular log entry from the children is exported depends on the sink's filter expression. For example, if this field is true, then the filter resource.type=gce_instance would export all Compute Engine VM instance log entries from all projects in the sink's parent. To only export entries from certain child projects, filter on the project part of the log name:
		 * logName:("projects/test-project1/" OR "projects/test-project2/") AND
		 * resource.type=gce_instance
		 */
		includeChildren?: boolean;

		/** Required. The client-assigned sink identifier, unique within the project. Example: "my-syslog-errors-to-pubsub". Sink identifiers are limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, and periods. First character has to be alphanumeric. */
		name?: string;

		/** Deprecated. The log entry format to use for this sink's exported log entries. The v2 format is used by default and cannot be changed. */
		outputVersionFormat?: LogSinkOutputVersionFormat;

		/** Output only. The last update timestamp of the sink.This field may not be present for older sinks. */
		updateTime?: string;

		/** Output only. An IAM identity&mdash;a service account or group&mdash;under which Logging writes the exported log entries to the sink's destination. This field is set by sinks.create and sinks.update based on the value of unique_writer_identity in those methods.Until you grant this identity write-access to the destination, log entry exports from this sink will fail. For more information, see Granting Access for a Resource. Consult the destination service's documentation to determine the appropriate IAM roles to assign to the identity. */
		writerIdentity?: string;
	}

	export enum LogSinkOutputVersionFormat { VERSION_FORMAT_UNSPECIFIED = 0, V2 = 1, V1 = 2 }


	/** Application log line emitted while processing a request. */
	export interface LogLine {

		/** App-provided log message. */
		logMessage?: string;

		/** Severity of this log entry. */
		severity?: LogEntrySeverity;

		/** Specifies a location in a source code file. */
		sourceLocation?: SourceLocation;

		/** Approximate time when this log entry was made. */
		time?: string;
	}


	/** Specifies a location in a source code file. */
	export interface SourceLocation {

		/** Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name. */
		file?: string;

		/** Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information is used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: qual.if.ied.Class.method (Java), dir/package.func (Go), function (Python). */
		functionName?: string;

		/** Line within the source file. */
		line?: string;
	}


	/** Complete log information about a single HTTP request to an App Engine application. */
	export interface RequestLog {

		/** App Engine release version. */
		appEngineRelease?: string;

		/** Application that handled this request. */
		appId?: string;

		/** An indication of the relative cost of serving this request. */
		cost?: number;

		/** Time when the request finished. */
		endTime?: string;

		/** Whether this request is finished or active. */
		finished?: boolean;

		/** Whether this is the first RequestLog entry for this request. If an active request has several RequestLog entries written to Stackdriver Logging, then this field will be set for one of them. */
		first?: boolean;

		/** Internet host and port number of the resource being requested. */
		host?: string;

		/** HTTP version of request. Example: "HTTP/1.1". */
		httpVersion?: string;

		/** An identifier for the instance that handled the request. */
		instanceId?: string;

		/** If the instance processing this request belongs to a manually scaled module, then this is the 0-based index of the instance. Otherwise, this value is -1. */
		instanceIndex?: number;

		/** Origin IP address. */
		ip?: string;

		/** Latency of the request. */
		latency?: string;

		/** A list of log lines emitted by the application while serving this request. */
		line?: Array<LogLine>;

		/** Number of CPU megacycles used to process request. */
		megaCycles?: string;

		/** Request method. Example: "GET", "HEAD", "PUT", "POST", "DELETE". */
		method?: string;

		/** Module of the application that handled this request. */
		moduleId?: string;

		/** The logged-in user who made the request.Most likely, this is the part of the user's email before the @ sign. The field value is the same for different requests from the same user, but different users can have similar names. This information is also available to the application via the App Engine Users API.This field will be populated starting with App Engine 1.9.21. */
		nickname?: string;

		/** Time this request spent in the pending request queue. */
		pendingTime?: string;

		/** Referrer URL of request. */
		referrer?: string;

		/** Globally unique identifier for a request, which is based on the request start time. Request IDs for requests which started later will compare greater as strings than those for requests which started earlier. */
		requestId?: string;

		/** Contains the path and query portion of the URL that was requested. For example, if the URL was "http://example.com/app?name=val", the resource would be "/app?name=val". The fragment identifier, which is identified by the # character, is not included. */
		resource?: string;

		/** Size in bytes sent back to client by request. */
		responseSize?: string;

		/** Source code for the application that handled this request. There can be more than one source reference per deployed application if source code is distributed among multiple repositories. */
		sourceReference?: Array<SourceReference>;

		/** Time when the request started. */
		startTime?: string;

		/** HTTP response status code. Example: 200, 404. */
		status?: number;

		/** Task name of the request, in the case of an offline request. */
		taskName?: string;

		/** Queue name of the request, in the case of an offline request. */
		taskQueueName?: string;

		/** Stackdriver Trace identifier for this request. */
		traceId?: string;

		/** If true, the value in the 'trace_id' field was sampled for storage in a trace backend. */
		traceSampled?: boolean;

		/** File or class that handled the request. */
		urlMapEntry?: string;

		/** User agent that made the request. */
		userAgent?: string;

		/** Version of the application that handled this request. */
		versionId?: string;

		/** Whether this was a loading request for the instance. */
		wasLoadingRequest?: boolean;
	}


	/** A reference to a particular snapshot of the source tree used to build and deploy an application. */
	export interface SourceReference {

		/** Optional. A URI string identifying the repository. Example: "https://github.com/GoogleCloudPlatform/kubernetes.git" */
		repository?: string;

		/** The canonical and persistent identifier of the deployed revision. Example (git): "0035781c50ec7aa23385dc841529ce8a4b70db1b" */
		revisionId?: string;
	}


	/** The parameters to WriteLogEntries. */
	export interface WriteLogEntriesRequest {

		/** Optional. If true, the request should expect normal response, but the entries won't be persisted nor exported. Useful for checking whether the logging API endpoints are working properly before sending valuable data. */
		dryRun?: boolean;

		/** Required. The log entries to send to Logging. The order of log entries in this list does not matter. Values supplied in this method's log_name, resource, and labels fields are copied into those log entries in this list that do not include values for their corresponding fields. For more information, see the LogEntry type.If the timestamp or insert_id fields are missing in log entries, then this method supplies the current time or a unique identifier, respectively. The supplied values are chosen so that, among the log entries that did not supply their own values, the entries earlier in the list will sort before the entries later in the list. See the entries.list method.Log entries with timestamps that are more than the logs retention period in the past or more than 24 hours in the future will not be available when calling entries.list. However, those log entries can still be exported with LogSinks.To improve throughput and to avoid exceeding the quota limit for calls to entries.write, you should try to include several log entries in this list, rather than calling this method for each individual log entry. */
		entries?: Array<LogEntry>;

		/** Optional. Default labels that are added to the labels field of all log entries in entries. If a log entry already has a label with the same key as a label in this parameter, then the log entry's label is not changed. See LogEntry. */
		labels?: {[id: string]: any };

		/**
		 * Optional. A default log resource name that is assigned to all log entries in entries that do not specify a value for log_name:
		 * "projects/[PROJECT_ID]/logs/[LOG_ID]"
		 * "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
		 * "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
		 * "folders/[FOLDER_ID]/logs/[LOG_ID]"
		 * [LOG_ID] must be URL-encoded. For example:
		 * "projects/my-project-id/logs/syslog"
		 * "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity"
		 * The permission logging.logEntries.create is needed on each project, organization, billing account, or folder that is receiving new log entries, whether the resource is specified in logName or in an individual log entry.
		 */
		logName?: string;

		/** Optional. Whether valid entries should be written even if some other entries fail due to INVALID_ARGUMENT or PERMISSION_DENIED errors. If any entry is not written, then the response status is the error associated with one of the failed entries and the response includes error details keyed by the entries' zero-based index in the entries.write method. */
		partialSuccess?: boolean;

		/**
		 * An object representing a resource that can be used for monitoring, logging, billing, or other purposes. Examples include virtual machine instances, databases, and storage devices such as disks. The type field identifies a MonitoredResourceDescriptor object that describes the resource's schema. Information in the labels field identifies the actual resource and its attributes according to the schema. For example, a particular Compute Engine VM instance could be represented by the following object, because the MonitoredResourceDescriptor for "gce_instance" has labels "instance_id" and "zone":
		 * { "type": "gce_instance",
		 * "labels": { "instance_id": "12345678901234",
		 * "zone": "us-central1-a" }}
		 */
		resource?: MonitoredResource;
	}


	/** Result returned from WriteLogEntries. */
	export interface WriteLogEntriesResponse {
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists log entries. Use this method to retrieve log entries that originated from a project/folder/organization/billing account. For ways to export log entries, see Exporting Logs.
		 * Post v2/entries:list
		 * @return {void} Successful response
		 */
		Logging_entries_list(requestBody: ListLogEntriesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/entries:list', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Writes log entries to Logging. This API method is the only way to send log entries to Logging. This method is used, directly or indirectly, by the Logging agent (fluentd) and all logging libraries configured to use Logging. A single request may contain log entries for a maximum of 1000 different resources (projects, organizations, billing accounts or folders)
		 * Post v2/entries:write
		 * @return {void} Successful response
		 */
		Logging_entries_write(requestBody: WriteLogEntriesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/entries:write', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the descriptors for monitored resource types used by Logging.
		 * Get v2/monitoredResourceDescriptors
		 * @param {number} pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
		 * @param {string} pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
		 * @return {void} Successful response
		 */
		Logging_monitoredResourceDescriptors_list(pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/monitoredResourceDescriptors?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.
		 * Delete v2/{logName}
		 * @param {string} logName Required. The resource name of the log to delete:
		 * "projects/[PROJECT_ID]/logs/[LOG_ID]"
		 * "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
		 * "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
		 * "folders/[FOLDER_ID]/logs/[LOG_ID]"
		 * [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
		 * @return {void} Successful response
		 */
		Logging_logs_delete(logName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/' + (logName == null ? '' : encodeURIComponent(logName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a logs-based metric.
		 * Delete v2/{metricName}
		 * @param {string} metricName Required. The resource name of the metric to delete:
		 * "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
		 * @return {void} Successful response
		 */
		Logging_projects_metrics_delete(metricName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/' + (metricName == null ? '' : encodeURIComponent(metricName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a logs-based metric.
		 * Get v2/{metricName}
		 * @param {string} metricName Required. The resource name of the desired metric:
		 * "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
		 * @return {void} Successful response
		 */
		Logging_projects_metrics_get(metricName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (metricName == null ? '' : encodeURIComponent(metricName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates or updates a logs-based metric.
		 * Put v2/{metricName}
		 * @param {string} metricName Required. The resource name of the metric to update:
		 * "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
		 * The updated metric must be provided in the request and it's name field must be the same as [METRIC_ID] If the metric does not exist in [PROJECT_ID], then a new metric is created.
		 * @return {void} Successful response
		 */
		Logging_projects_metrics_update(metricName: string, requestBody: LogMetric): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v2/' + (metricName == null ? '' : encodeURIComponent(metricName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an exclusion.
		 * Delete v2/{name}
		 * @param {string} name Required. The resource name of an existing exclusion to delete:
		 * "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
		 * "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
		 * "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
		 * "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
		 * Example: "projects/my-project-id/exclusions/my-exclusion-id".
		 * @return {void} Successful response
		 */
		Logging_organizations_exclusions_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the description of an exclusion.
		 * Get v2/{name}
		 * @param {string} name Required. The resource name of an existing exclusion:
		 * "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
		 * "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
		 * "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
		 * "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
		 * Example: "projects/my-project-id/exclusions/my-exclusion-id".
		 * @return {void} Successful response
		 */
		Logging_organizations_exclusions_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Changes one or more properties of an existing exclusion.
		 * Patch v2/{name}
		 * @param {string} name Required. The resource name of the exclusion to update:
		 * "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
		 * "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
		 * "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
		 * "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
		 * Example: "projects/my-project-id/exclusions/my-exclusion-id".
		 * @param {string} updateMask Required. A non-empty list of fields to change in the existing exclusion. New values for the fields are taken from the corresponding fields in the LogExclusion included in this request. Fields not mentioned in update_mask are not changed and are ignored in the request.For example, to change the filter and description of an exclusion, specify an update_mask of "filter,description".
		 * @return {void} Successful response
		 */
		Logging_organizations_exclusions_patch(name: string, updateMask: string, requestBody: LogExclusion): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the Logs Router CMEK settings for the given resource.Note: CMEK for the Logs Router can currently only be configured for GCP organizations. Once configured, it applies to all projects and folders in the GCP organization.See Enabling CMEK for Logs Router for more information.
		 * Get v2/{name}/cmekSettings
		 * @param {string} name Required. The resource for which to retrieve CMEK settings.
		 * "projects/[PROJECT_ID]/cmekSettings"
		 * "organizations/[ORGANIZATION_ID]/cmekSettings"
		 * "billingAccounts/[BILLING_ACCOUNT_ID]/cmekSettings"
		 * "folders/[FOLDER_ID]/cmekSettings"
		 * Example: "organizations/12345/cmekSettings".Note: CMEK for the Logs Router can currently only be configured for GCP organizations. Once configured, it applies to all projects and folders in the GCP organization.
		 * @return {void} Successful response
		 */
		Logging_organizations_getCmekSettings(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '/cmekSettings', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the Logs Router CMEK settings for the given resource.Note: CMEK for the Logs Router can currently only be configured for GCP organizations. Once configured, it applies to all projects and folders in the GCP organization.UpdateCmekSettings will fail if 1) kms_key_name is invalid, or 2) the associated service account does not have the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key, or 3) access to the key is disabled.See Enabling CMEK for Logs Router for more information.
		 * Patch v2/{name}/cmekSettings
		 * @param {string} name Required. The resource name for the CMEK settings to update.
		 * "projects/[PROJECT_ID]/cmekSettings"
		 * "organizations/[ORGANIZATION_ID]/cmekSettings"
		 * "billingAccounts/[BILLING_ACCOUNT_ID]/cmekSettings"
		 * "folders/[FOLDER_ID]/cmekSettings"
		 * Example: "organizations/12345/cmekSettings".Note: CMEK for the Logs Router can currently only be configured for GCP organizations. Once configured, it applies to all projects and folders in the GCP organization.
		 * @param {string} updateMask Optional. Field mask identifying which fields from cmek_settings should be updated. A field will be overwritten if and only if it is in the update mask. Output only fields cannot be updated.See FieldMask for more information.Example: "updateMask=kmsKeyName"
		 * @return {void} Successful response
		 */
		Logging_organizations_updateCmekSettings(name: string, updateMask: string, requestBody: CmekSettings): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '/cmekSettings&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists buckets (Beta).
		 * Get v2/{parent}/buckets
		 * @param {string} parent Required. The parent resource whose buckets are to be listed:
		 * "projects/[PROJECT_ID]/locations/[LOCATION_ID]"
		 * "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]"
		 * "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]"
		 * "folders/[FOLDER_ID]/locations/[LOCATION_ID]"
		 * Note: The locations portion of the resource must be specified, but supplying the character - in place of LOCATION_ID will return all buckets.
		 * @param {number} pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
		 * @param {string} pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
		 * @return {void} Successful response
		 */
		Logging_organizations_locations_buckets_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/buckets&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all the exclusions in a parent resource.
		 * Get v2/{parent}/exclusions
		 * @param {string} parent Required. The parent resource whose exclusions are to be listed.
		 * "projects/[PROJECT_ID]"
		 * "organizations/[ORGANIZATION_ID]"
		 * "billingAccounts/[BILLING_ACCOUNT_ID]"
		 * "folders/[FOLDER_ID]"
		 * @param {number} pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
		 * @param {string} pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
		 * @return {void} Successful response
		 */
		Logging_organizations_exclusions_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/exclusions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new exclusion in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource.
		 * Post v2/{parent}/exclusions
		 * @param {string} parent Required. The parent resource in which to create the exclusion:
		 * "projects/[PROJECT_ID]"
		 * "organizations/[ORGANIZATION_ID]"
		 * "billingAccounts/[BILLING_ACCOUNT_ID]"
		 * "folders/[FOLDER_ID]"
		 * Examples: "projects/my-logging-project", "organizations/123456789".
		 * @return {void} Successful response
		 */
		Logging_organizations_exclusions_create(parent: string, requestBody: LogExclusion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/exclusions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
		 * Get v2/{parent}/logs
		 * @param {string} parent Required. The resource name that owns the logs:
		 * "projects/[PROJECT_ID]"
		 * "organizations/[ORGANIZATION_ID]"
		 * "billingAccounts/[BILLING_ACCOUNT_ID]"
		 * "folders/[FOLDER_ID]"
		 * @param {number} pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
		 * @param {string} pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
		 * @return {void} Successful response
		 */
		Logging_logs_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/logs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists logs-based metrics.
		 * Get v2/{parent}/metrics
		 * @param {string} parent Required. The name of the project containing the metrics:
		 * "projects/[PROJECT_ID]"
		 * @param {number} pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
		 * @param {string} pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
		 * @return {void} Successful response
		 */
		Logging_projects_metrics_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/metrics&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a logs-based metric.
		 * Post v2/{parent}/metrics
		 * @param {string} parent Required. The resource name of the project in which to create the metric:
		 * "projects/[PROJECT_ID]"
		 * The new metric must be provided in the request.
		 * @return {void} Successful response
		 */
		Logging_projects_metrics_create(parent: string, requestBody: LogMetric): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/metrics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists sinks.
		 * Get v2/{parent}/sinks
		 * @param {string} parent Required. The parent resource whose sinks are to be listed:
		 * "projects/[PROJECT_ID]"
		 * "organizations/[ORGANIZATION_ID]"
		 * "billingAccounts/[BILLING_ACCOUNT_ID]"
		 * "folders/[FOLDER_ID]"
		 * @param {number} pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
		 * @param {string} pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
		 * @return {void} Successful response
		 */
		Logging_sinks_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sinks&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
		 * Post v2/{parent}/sinks
		 * @param {string} parent Required. The resource in which to create the sink:
		 * "projects/[PROJECT_ID]"
		 * "organizations/[ORGANIZATION_ID]"
		 * "billingAccounts/[BILLING_ACCOUNT_ID]"
		 * "folders/[FOLDER_ID]"
		 * Examples: "projects/my-logging-project", "organizations/123456789".
		 * @param {boolean} uniqueWriterIdentity Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from the new sink. For more information, see writer_identity in LogSink.
		 * @return {void} Successful response
		 */
		Logging_sinks_create(parent: string, uniqueWriterIdentity: boolean, requestBody: LogSink): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sinks&uniqueWriterIdentity=' + uniqueWriterIdentity, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
		 * Delete v2/{sinkName}
		 * @param {string} sinkName Required. The full resource name of the sink to delete, including the parent resource and the sink identifier:
		 * "projects/[PROJECT_ID]/sinks/[SINK_ID]"
		 * "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
		 * "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
		 * "folders/[FOLDER_ID]/sinks/[SINK_ID]"
		 * Example: "projects/my-project-id/sinks/my-sink-id".
		 * @return {void} Successful response
		 */
		Logging_sinks_delete(sinkName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/' + (sinkName == null ? '' : encodeURIComponent(sinkName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a sink.
		 * Get v2/{sinkName}
		 * @param {string} sinkName Required. The resource name of the sink:
		 * "projects/[PROJECT_ID]/sinks/[SINK_ID]"
		 * "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
		 * "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
		 * "folders/[FOLDER_ID]/sinks/[SINK_ID]"
		 * Example: "projects/my-project-id/sinks/my-sink-id".
		 * @return {void} Successful response
		 */
		Logging_sinks_get(sinkName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (sinkName == null ? '' : encodeURIComponent(sinkName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field.
		 * Patch v2/{sinkName}
		 * @param {string} sinkName Required. The full resource name of the sink to update, including the parent resource and the sink identifier:
		 * "projects/[PROJECT_ID]/sinks/[SINK_ID]"
		 * "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
		 * "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
		 * "folders/[FOLDER_ID]/sinks/[SINK_ID]"
		 * Example: "projects/my-project-id/sinks/my-sink-id".
		 * @param {boolean} uniqueWriterIdentity Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field:
		 * If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity.
		 * If the old value is false and the new value is true, then writer_identity is changed to a unique service account.
		 * It is an error if the old value is true and the new value is set to false or defaulted to false.
		 * @param {string} updateMask Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskExample: updateMask=filter.
		 * @return {void} Successful response
		 */
		Logging_organizations_sinks_patch(sinkName: string, uniqueWriterIdentity: boolean, updateMask: string, requestBody: LogSink): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v2/' + (sinkName == null ? '' : encodeURIComponent(sinkName)) + '&uniqueWriterIdentity=' + uniqueWriterIdentity + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field.
		 * Put v2/{sinkName}
		 * @param {string} sinkName Required. The full resource name of the sink to update, including the parent resource and the sink identifier:
		 * "projects/[PROJECT_ID]/sinks/[SINK_ID]"
		 * "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
		 * "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
		 * "folders/[FOLDER_ID]/sinks/[SINK_ID]"
		 * Example: "projects/my-project-id/sinks/my-sink-id".
		 * @param {boolean} uniqueWriterIdentity Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field:
		 * If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity.
		 * If the old value is false and the new value is true, then writer_identity is changed to a unique service account.
		 * It is an error if the old value is true and the new value is set to false or defaulted to false.
		 * @param {string} updateMask Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskExample: updateMask=filter.
		 * @return {void} Successful response
		 */
		Logging_sinks_update(sinkName: string, uniqueWriterIdentity: boolean, updateMask: string, requestBody: LogSink): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v2/' + (sinkName == null ? '' : encodeURIComponent(sinkName)) + '&uniqueWriterIdentity=' + uniqueWriterIdentity + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

