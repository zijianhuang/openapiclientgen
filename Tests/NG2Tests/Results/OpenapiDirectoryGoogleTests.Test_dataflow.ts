import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Obsolete in favor of ApproximateReportedProgress and ApproximateSplitRequest. */
	export interface ApproximateProgress {

		/** Obsolete. */
		percentComplete?: number;

		/**
		 * Position defines a position within a collection of data.  The value
		 * can be either the end position, a key (used with ordered
		 * collections), a byte offset, or a record index.
		 */
		position?: Position;

		/** Obsolete. */
		remainingTime?: string;
	}


	/**
	 * Position defines a position within a collection of data.  The value
	 * can be either the end position, a key (used with ordered
	 * collections), a byte offset, or a record index.
	 */
	export interface Position {

		/** Position is a byte offset. */
		byteOffset?: string;

		/**
		 * A position that encapsulates an inner position and an index for the inner
		 * position. A ConcatPosition can be used by a reader of a source that
		 * encapsulates a set of other sources.
		 */
		concatPosition?: ConcatPosition;

		/**
		 * Position is past all other positions. Also useful for the end
		 * position of an unbounded range.
		 */
		end?: boolean;

		/** Position is a string key, ordered lexicographically. */
		key?: string;

		/** Position is a record index. */
		recordIndex?: string;

		/**
		 * CloudPosition is a base64 encoded BatchShufflePosition (with FIXED
		 * sharding).
		 */
		shufflePosition?: string;
	}


	/**
	 * A position that encapsulates an inner position and an index for the inner
	 * position. A ConcatPosition can be used by a reader of a source that
	 * encapsulates a set of other sources.
	 */
	export interface ConcatPosition {

		/** Index of the inner source. */
		index?: number;

		/**
		 * Position defines a position within a collection of data.  The value
		 * can be either the end position, a key (used with ordered
		 * collections), a byte offset, or a record index.
		 */
		position?: Position;
	}


	/** A progress measurement of a WorkItem by a worker. */
	export interface ApproximateReportedProgress {

		/**
		 * Represents the level of parallelism in a WorkItem's input,
		 * reported by the worker.
		 */
		consumedParallelism?: ReportedParallelism;

		/**
		 * Completion as fraction of the input consumed, from 0.0 (beginning, nothing
		 * consumed), to 1.0 (end of the input, entire input consumed).
		 */
		fractionConsumed?: number;

		/**
		 * Position defines a position within a collection of data.  The value
		 * can be either the end position, a key (used with ordered
		 * collections), a byte offset, or a record index.
		 */
		position?: Position;

		/**
		 * Represents the level of parallelism in a WorkItem's input,
		 * reported by the worker.
		 */
		remainingParallelism?: ReportedParallelism;
	}


	/**
	 * Represents the level of parallelism in a WorkItem's input,
	 * reported by the worker.
	 */
	export interface ReportedParallelism {

		/**
		 * Specifies whether the parallelism is infinite. If true, "value" is
		 * ignored.
		 * Infinite parallelism means the service will assume that the work item
		 * can always be split into more non-empty work items by dynamic splitting.
		 * This is a work-around for lack of support for infinity by the current
		 * JSON-based Java RPC stack.
		 */
		isInfinite?: boolean;

		/** Specifies the level of parallelism in case it is finite. */
		value?: number;
	}


	/** A suggestion by the service to the worker to dynamically split the WorkItem. */
	export interface ApproximateSplitRequest {

		/**
		 * A fraction at which to split the work item, from 0.0 (beginning of the
		 * input) to 1.0 (end of the input).
		 */
		fractionConsumed?: number;

		/**
		 * The fraction of the remainder of work to split the work item at, from 0.0
		 * (split at the current position) to 1.0 (end of the input).
		 */
		fractionOfRemainder?: number;

		/**
		 * Position defines a position within a collection of data.  The value
		 * can be either the end position, a key (used with ordered
		 * collections), a byte offset, or a record index.
		 */
		position?: Position;
	}


	/**
	 * A structured message reporting an autoscaling decision made by the Dataflow
	 * service.
	 */
	export interface AutoscalingEvent {

		/** The current number of workers the job has. */
		currentNumWorkers?: string;

		/**
		 * A rich message format, including a human readable string, a key for
		 * identifying the message, and structured data associated with the message for
		 * programmatic consumption.
		 */
		description?: StructuredMessage;

		/** The type of autoscaling event to report. */
		eventType?: AutoscalingEventEventType;

		/** The target number of workers the worker pool wants to resize to use. */
		targetNumWorkers?: string;

		/**
		 * The time this event was emitted to indicate a new target or current
		 * num_workers value.
		 */
		time?: string;

		/**
		 * A short and friendly name for the worker pool this event refers to,
		 * populated from the value of PoolStageRelation::user_pool_name.
		 */
		workerPool?: string;
	}


	/**
	 * A rich message format, including a human readable string, a key for
	 * identifying the message, and structured data associated with the message for
	 * programmatic consumption.
	 */
	export interface StructuredMessage {

		/**
		 * Identifier for this message type.  Used by external systems to
		 * internationalize or personalize message.
		 */
		messageKey?: string;

		/** Human-readable version of message. */
		messageText?: string;

		/** The structured data associated with this message. */
		parameters?: Array<Parameter>;
	}


	/** Structured data associated with this message. */
	export interface Parameter {

		/** Key or name for this parameter. */
		key?: string;

		/** Value for this parameter. */
		value?: any;
	}

	export enum AutoscalingEventEventType { TYPE_UNKNOWN = 0, TARGET_NUM_WORKERS_CHANGED = 1, CURRENT_NUM_WORKERS_CHANGED = 2, ACTUATION_FAILURE = 3, NO_CHANGE = 4 }


	/** Settings for WorkerPool autoscaling. */
	export interface AutoscalingSettings {

		/** The algorithm to use for autoscaling. */
		algorithm?: AutoscalingSettingsAlgorithm;

		/** The maximum number of workers to cap scaling at. */
		maxNumWorkers?: number;
	}

	export enum AutoscalingSettingsAlgorithm { AUTOSCALING_ALGORITHM_UNKNOWN = 0, AUTOSCALING_ALGORITHM_NONE = 1, AUTOSCALING_ALGORITHM_BASIC = 2 }


	/** Metadata for a BigQuery connector used by the job. */
	export interface BigQueryIODetails {

		/** Dataset accessed in the connection. */
		dataset?: string;

		/** Project accessed in the connection. */
		projectId?: string;

		/** Query used to access data in the connection. */
		query?: string;

		/** Table accessed in the connection. */
		table?: string;
	}


	/** Metadata for a BigTable connector used by the job. */
	export interface BigTableIODetails {

		/** InstanceId accessed in the connection. */
		instanceId?: string;

		/** ProjectId accessed in the connection. */
		projectId?: string;

		/** TableId accessed in the connection. */
		tableId?: string;
	}


	/** Modeled after information exposed by /proc/stat. */
	export interface CPUTime {

		/**
		 * Average CPU utilization rate (% non-idle cpu / second) since previous
		 * sample.
		 */
		rate?: number;

		/** Timestamp of the measurement. */
		timestamp?: string;

		/**
		 * Total active CPU time across all cores (ie., non-idle) in milliseconds
		 * since start-up.
		 */
		totalMs?: string;
	}


	/**
	 * Description of an interstitial value between transforms in an execution
	 * stage.
	 */
	export interface ComponentSource {

		/** Dataflow service generated name for this source. */
		name?: string;

		/**
		 * User name for the original user transform or collection with which this
		 * source is most closely associated.
		 */
		originalTransformOrCollection?: string;

		/** Human-readable name for this transform; may be user or system generated. */
		userName?: string;
	}


	/** Description of a transform executed as part of an execution stage. */
	export interface ComponentTransform {

		/** Dataflow service generated name for this source. */
		name?: string;

		/**
		 * User name for the original user transform with which this transform is
		 * most closely associated.
		 */
		originalTransform?: string;

		/** Human-readable name for this transform; may be user or system generated. */
		userName?: string;
	}


	/** All configuration data for a particular Computation. */
	export interface ComputationTopology {

		/** The ID of the computation. */
		computationId?: string;

		/** The inputs to the computation. */
		inputs?: Array<StreamLocation>;

		/** The key ranges processed by the computation. */
		keyRanges?: Array<KeyRangeLocation>;

		/** The outputs from the computation. */
		outputs?: Array<StreamLocation>;

		/** The state family values. */
		stateFamilies?: Array<StateFamilyConfig>;

		/** The system stage name. */
		systemStageName?: string;
	}


	/**
	 * Describes a stream of data, either as input to be processed or as
	 * output of a streaming Dataflow job.
	 */
	export interface StreamLocation {

		/** Identifies the location of a custom souce. */
		customSourceLocation?: CustomSourceLocation;

		/**
		 * Identifies a pubsub location to use for transferring data into or
		 * out of a streaming Dataflow job.
		 */
		pubsubLocation?: PubsubLocation;

		/** Identifies the location of a streaming side input. */
		sideInputLocation?: StreamingSideInputLocation;

		/**
		 * Identifies the location of a streaming computation stage, for
		 * stage-to-stage communication.
		 */
		streamingStageLocation?: StreamingStageLocation;
	}


	/** Identifies the location of a custom souce. */
	export interface CustomSourceLocation {

		/** Whether this source is stateful. */
		stateful?: boolean;
	}


	/**
	 * Identifies a pubsub location to use for transferring data into or
	 * out of a streaming Dataflow job.
	 */
	export interface PubsubLocation {

		/** Indicates whether the pipeline allows late-arriving data. */
		dropLateData?: boolean;

		/**
		 * If set, contains a pubsub label from which to extract record ids.
		 * If left empty, record deduplication will be strictly best effort.
		 */
		idLabel?: string;

		/**
		 * A pubsub subscription, in the form of
		 * "pubsub.googleapis.com/subscriptions/<project-id>/<subscription-name>"
		 */
		subscription?: string;

		/**
		 * If set, contains a pubsub label from which to extract record timestamps.
		 * If left empty, record timestamps will be generated upon arrival.
		 */
		timestampLabel?: string;

		/**
		 * A pubsub topic, in the form of
		 * "pubsub.googleapis.com/topics/<project-id>/<topic-name>"
		 */
		topic?: string;

		/**
		 * If set, specifies the pubsub subscription that will be used for tracking
		 * custom time timestamps for watermark estimation.
		 */
		trackingSubscription?: string;

		/** If true, then the client has requested to get pubsub attributes. */
		withAttributes?: boolean;
	}


	/** Identifies the location of a streaming side input. */
	export interface StreamingSideInputLocation {

		/** Identifies the state family where this side input is stored. */
		stateFamily?: string;

		/** Identifies the particular side input within the streaming Dataflow job. */
		tag?: string;
	}


	/**
	 * Identifies the location of a streaming computation stage, for
	 * stage-to-stage communication.
	 */
	export interface StreamingStageLocation {

		/**
		 * Identifies the particular stream within the streaming Dataflow
		 * job.
		 */
		streamId?: string;
	}


	/**
	 * Location information for a specific key-range of a sharded computation.
	 * Currently we only support UTF-8 character splits to simplify encoding into
	 * JSON.
	 */
	export interface KeyRangeLocation {

		/**
		 * The name of the data disk where data for this range is stored.
		 * This name is local to the Google Cloud Platform project and uniquely
		 * identifies the disk within that project, for example
		 * "myproject-1014-104817-4c2-harness-0-disk-1".
		 */
		dataDisk?: string;

		/**
		 * The physical location of this range assignment to be used for
		 * streaming computation cross-worker message delivery.
		 */
		deliveryEndpoint?: string;

		/**
		 * DEPRECATED. The location of the persistent state for this range, as a
		 * persistent directory in the worker local filesystem.
		 */
		deprecatedPersistentDirectory?: string;

		/** The end (exclusive) of the key range. */
		end?: string;

		/** The start (inclusive) of the key range. */
		start?: string;
	}


	/** State family configuration. */
	export interface StateFamilyConfig {

		/** If true, this family corresponds to a read operation. */
		isRead?: boolean;

		/** The state family value. */
		stateFamily?: string;
	}


	/** Container Spec. */
	export interface ContainerSpec {

		/** Name of the docker container image. E.g., gcr.io/project/some-image */
		image?: string;

		/** Metadata describing a template. */
		metadata?: TemplateMetadata;

		/** SDK Information. */
		sdkInfo?: SDKInfo;
	}


	/** Metadata describing a template. */
	export interface TemplateMetadata {

		/** Optional. A description of the template. */
		description?: string;

		/** Required. The name of the template. */
		name?: string;

		/** The parameters for the template. */
		parameters?: Array<ParameterMetadata>;
	}


	/** Metadata for a specific parameter. */
	export interface ParameterMetadata {

		/** Required. The help text to display for the parameter. */
		helpText?: string;

		/** Optional. Whether the parameter is optional. Defaults to false. */
		isOptional?: boolean;

		/** Required. The label to display for the parameter. */
		label?: string;

		/** Required. The name of the parameter. */
		name?: string;

		/**
		 * Optional. The type of the parameter.
		 * Used for selecting input picker.
		 */
		paramType?: ParameterMetadataParamType;

		/** Optional. Regexes that the parameter must match. */
		regexes?: Array<string>;
	}

	export enum ParameterMetadataParamType { DEFAULT = 0, TEXT = 1, GCS_READ_BUCKET = 2, GCS_WRITE_BUCKET = 3, GCS_READ_FILE = 4, GCS_WRITE_FILE = 5, GCS_READ_FOLDER = 6, GCS_WRITE_FOLDER = 7, PUBSUB_TOPIC = 8, PUBSUB_SUBSCRIPTION = 9 }


	/** SDK Information. */
	export interface SDKInfo {

		/** Required. The SDK Language. */
		language?: SDKInfoLanguage;

		/** Optional. The SDK version. */
		version?: string;
	}

	export enum SDKInfoLanguage { UNKNOWN = 0, JAVA = 1, PYTHON = 2 }


	/** CounterMetadata includes all static non-name non-value counter attributes. */
	export interface CounterMetadata {

		/** Human-readable description of the counter semantics. */
		description?: string;

		/** Counter aggregation kind. */
		kind?: CounterMetadataKind;

		/** A string referring to the unit type. */
		otherUnits?: string;

		/** System defined Units, see above enum. */
		standardUnits?: CounterMetadataStandardUnits;
	}

	export enum CounterMetadataKind { INVALID = 0, SUM = 1, MAX = 2, MIN = 3, MEAN = 4, OR = 5, AND = 6, SET = 7, DISTRIBUTION = 8, LATEST_VALUE = 9 }

	export enum CounterMetadataStandardUnits { BYTES = 0, BYTES_PER_SEC = 1, MILLISECONDS = 2, MICROSECONDS = 3, NANOSECONDS = 4, TIMESTAMP_MSEC = 5, TIMESTAMP_USEC = 6, TIMESTAMP_NSEC = 7 }


	/**
	 * Identifies a counter within a per-job namespace. Counters whose structured
	 * names are the same get merged into a single value for the job.
	 */
	export interface CounterStructuredName {

		/** Name of the optimized step being executed by the workers. */
		componentStepName?: string;

		/** Name of the stage. An execution step contains multiple component steps. */
		executionStepName?: string;

		/**
		 * Index of an input collection that's being read from/written to as a side
		 * input.
		 * The index identifies a step's side inputs starting by 1 (e.g. the first
		 * side input has input_index 1, the third has input_index 3).
		 * Side inputs are identified by a pair of (original_step_name, input_index).
		 * This field helps uniquely identify them.
		 */
		inputIndex?: number;

		/**
		 * Counter name. Not necessarily globally-unique, but unique within the
		 * context of the other fields.
		 * Required.
		 */
		name?: string;

		/** One of the standard Origins defined above. */
		origin?: CounterStructuredNameOrigin;

		/** A string containing a more specific namespace of the counter's origin. */
		originNamespace?: string;

		/**
		 * The step name requesting an operation, such as GBK.
		 * I.e. the ParDo causing a read/write from shuffle to occur, or a
		 * read from side inputs.
		 */
		originalRequestingStepName?: string;

		/**
		 * System generated name of the original step in the user's graph, before
		 * optimization.
		 */
		originalStepName?: string;

		/** Portion of this counter, either key or value. */
		portion?: CounterStructuredNamePortion;

		/** ID of a particular worker. */
		workerId?: string;
	}

	export enum CounterStructuredNameOrigin { SYSTEM = 0, USER = 1 }

	export enum CounterStructuredNamePortion { ALL = 0, KEY = 1, VALUE = 2 }


	/**
	 * A single message which encapsulates structured name and metadata for a given
	 * counter.
	 */
	export interface CounterStructuredNameAndMetadata {

		/** CounterMetadata includes all static non-name non-value counter attributes. */
		metadata?: CounterMetadata;

		/**
		 * Identifies a counter within a per-job namespace. Counters whose structured
		 * names are the same get merged into a single value for the job.
		 */
		name?: CounterStructuredName;
	}


	/** An update to a Counter sent from a worker. */
	export interface CounterUpdate {

		/** Boolean value for And, Or. */
		boolean?: boolean;

		/**
		 * True if this counter is reported as the total cumulative aggregate
		 * value accumulated since the worker started working on this WorkItem.
		 * By default this is false, indicating that this counter is reported
		 * as a delta.
		 */
		cumulative?: boolean;

		/** A metric value representing a distribution. */
		distribution?: DistributionUpdate;

		/** Floating point value for Sum, Max, Min. */
		floatingPoint?: number;

		/** A metric value representing a list of floating point numbers. */
		floatingPointList?: FloatingPointList;

		/** A representation of a floating point mean metric contribution. */
		floatingPointMean?: FloatingPointMean;

		/**
		 * A representation of an int64, n, that is immune to precision loss when
		 * encoded in JSON.
		 */
		integer?: SplitInt64;

		/** A metric value representing temporal values of a variable. */
		integerGauge?: IntegerGauge;

		/** A metric value representing a list of integers. */
		integerList?: IntegerList;

		/** A representation of an integer mean metric contribution. */
		integerMean?: IntegerMean;

		/** Value for internally-defined counters used by the Dataflow service. */
		internal?: any;

		/** Basic metadata about a counter. */
		nameAndKind?: NameAndKind;

		/**
		 * The service-generated short identifier for this counter.
		 * The short_id -> (name, metadata) mapping is constant for the lifetime of
		 * a job.
		 */
		shortId?: string;

		/** A metric value representing a list of strings. */
		stringList?: StringList;

		/**
		 * A single message which encapsulates structured name and metadata for a given
		 * counter.
		 */
		structuredNameAndMetadata?: CounterStructuredNameAndMetadata;
	}


	/** A metric value representing a distribution. */
	export interface DistributionUpdate {

		/**
		 * A representation of an int64, n, that is immune to precision loss when
		 * encoded in JSON.
		 */
		count?: SplitInt64;

		/**
		 * Histogram of value counts for a distribution.
		 * Buckets have an inclusive lower bound and exclusive upper bound and use
		 * "1,2,5 bucketing": The first bucket range is from [0,1) and all subsequent
		 * bucket boundaries are powers of ten multiplied by 1, 2, or 5. Thus, bucket
		 * boundaries are 0, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, ...
		 * Negative values are not supported.
		 */
		histogram?: Histogram;

		/**
		 * A representation of an int64, n, that is immune to precision loss when
		 * encoded in JSON.
		 */
		max?: SplitInt64;

		/**
		 * A representation of an int64, n, that is immune to precision loss when
		 * encoded in JSON.
		 */
		min?: SplitInt64;

		/**
		 * A representation of an int64, n, that is immune to precision loss when
		 * encoded in JSON.
		 */
		sum?: SplitInt64;

		/** Use a double since the sum of squares is likely to overflow int64. */
		sumOfSquares?: number;
	}


	/**
	 * A representation of an int64, n, that is immune to precision loss when
	 * encoded in JSON.
	 */
	export interface SplitInt64 {

		/** The high order bits, including the sign: n >> 32. */
		highBits?: number;

		/** The low order bits: n & 0xffffffff. */
		lowBits?: string;
	}


	/**
	 * Histogram of value counts for a distribution.
	 * Buckets have an inclusive lower bound and exclusive upper bound and use
	 * "1,2,5 bucketing": The first bucket range is from [0,1) and all subsequent
	 * bucket boundaries are powers of ten multiplied by 1, 2, or 5. Thus, bucket
	 * boundaries are 0, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, ...
	 * Negative values are not supported.
	 */
	export interface Histogram {

		/**
		 * Counts of values in each bucket. For efficiency, prefix and trailing
		 * buckets with count = 0 are elided. Buckets can store the full range of
		 * values of an unsigned long, with ULLONG_MAX falling into the 59th bucket
		 * with range [1e19, 2e19).
		 */
		bucketCounts?: Array<string>;

		/**
		 * Starting index of first stored bucket. The non-inclusive upper-bound of
		 * the ith bucket is given by:
		 * pow(10,(i-first_bucket_offset)/3) * (1,2,5)[(i-first_bucket_offset)%3]
		 */
		firstBucketOffset?: number;
	}


	/** A metric value representing a list of floating point numbers. */
	export interface FloatingPointList {

		/** Elements of the list. */
		elements?: Array<number>;
	}


	/** A representation of a floating point mean metric contribution. */
	export interface FloatingPointMean {

		/**
		 * A representation of an int64, n, that is immune to precision loss when
		 * encoded in JSON.
		 */
		count?: SplitInt64;

		/** The sum of all values being aggregated. */
		sum?: number;
	}


	/** A metric value representing temporal values of a variable. */
	export interface IntegerGauge {

		/** The time at which this value was measured. Measured as msecs from epoch. */
		timestamp?: string;

		/**
		 * A representation of an int64, n, that is immune to precision loss when
		 * encoded in JSON.
		 */
		value?: SplitInt64;
	}


	/** A metric value representing a list of integers. */
	export interface IntegerList {

		/** Elements of the list. */
		elements?: Array<SplitInt64>;
	}


	/** A representation of an integer mean metric contribution. */
	export interface IntegerMean {

		/**
		 * A representation of an int64, n, that is immune to precision loss when
		 * encoded in JSON.
		 */
		count?: SplitInt64;

		/**
		 * A representation of an int64, n, that is immune to precision loss when
		 * encoded in JSON.
		 */
		sum?: SplitInt64;
	}


	/** Basic metadata about a counter. */
	export interface NameAndKind {

		/** Counter aggregation kind. */
		kind?: CounterMetadataKind;

		/** Name of the counter. */
		name?: string;
	}


	/** A metric value representing a list of strings. */
	export interface StringList {

		/** Elements of the list. */
		elements?: Array<string>;
	}


	/** A request to create a Cloud Dataflow job from a template. */
	export interface CreateJobFromTemplateRequest {

		/** The environment values to set at runtime. */
		environment?: RuntimeEnvironment;

		/**
		 * Required. A Cloud Storage path to the template from which to
		 * create the job.
		 * Must be a valid Cloud Storage URL, beginning with `gs://`.
		 */
		gcsPath?: string;

		/** Required. The job name to use for the created job. */
		jobName?: string;

		/**
		 * The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to
		 * which to direct the request.
		 */
		location?: string;

		/** The runtime parameters to pass to the job. */
		parameters?: {[id: string]: string };
	}


	/** The environment values to set at runtime. */
	export interface RuntimeEnvironment {

		/** Additional experiment flags for the job. */
		additionalExperiments?: Array<string>;

		/**
		 * Additional user labels to be specified for the job.
		 * Keys and values should follow the restrictions specified in the [labeling
		 * restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions)
		 * page.
		 */
		additionalUserLabels?: {[id: string]: string };

		/**
		 * Whether to bypass the safety checks for the job's temporary directory.
		 * Use with caution.
		 */
		bypassTempDirValidation?: boolean;

		/** Configuration for VM IPs. */
		ipConfiguration?: RuntimeEnvironmentIpConfiguration;

		/**
		 * Optional. Name for the Cloud KMS key for the job.
		 * Key format is:
		 * projects/<project>/locations/<location>/keyRings/<keyring>/cryptoKeys/<key>
		 */
		kmsKeyName?: string;

		/**
		 * The machine type to use for the job. Defaults to the value from the
		 * template if not specified.
		 */
		machineType?: string;

		/**
		 * The maximum number of Google Compute Engine instances to be made
		 * available to your pipeline during execution, from 1 to 1000.
		 */
		maxWorkers?: number;

		/**
		 * Network to which VMs will be assigned.  If empty or unspecified,
		 * the service will use the network "default".
		 */
		network?: string;

		/** The initial number of Google Compute Engine instnaces for the job. */
		numWorkers?: number;

		/** The email address of the service account to run the job as. */
		serviceAccountEmail?: string;

		/**
		 * Subnetwork to which VMs will be assigned, if desired.  Expected to be of
		 * the form "regions/REGION/subnetworks/SUBNETWORK".
		 */
		subnetwork?: string;

		/**
		 * The Cloud Storage path to use for temporary files.
		 * Must be a valid Cloud Storage URL, beginning with `gs://`.
		 */
		tempLocation?: string;

		/**
		 * The Compute Engine region
		 * (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in
		 * which worker processing should occur, e.g. "us-west1". Mutually exclusive
		 * with worker_zone. If neither worker_region nor worker_zone is specified,
		 * default to the control plane's region.
		 */
		workerRegion?: string;

		/**
		 * The Compute Engine zone
		 * (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in
		 * which worker processing should occur, e.g. "us-west1-a". Mutually exclusive
		 * with worker_region. If neither worker_region nor worker_zone is specified,
		 * a zone in the control plane's region is chosen based on available capacity.
		 * If both `worker_zone` and `zone` are set, `worker_zone` takes precedence.
		 */
		workerZone?: string;

		/**
		 * The Compute Engine [availability
		 * zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones)
		 * for launching worker instances to run your pipeline.
		 * In the future, worker_zone will take precedence.
		 */
		zone?: string;
	}

	export enum RuntimeEnvironmentIpConfiguration { WORKER_IP_UNSPECIFIED = 0, WORKER_IP_PUBLIC = 1, WORKER_IP_PRIVATE = 2 }


	/** Data disk assignment for a given VM instance. */
	export interface DataDiskAssignment {

		/**
		 * Mounted data disks. The order is important a data disk's 0-based index in
		 * this list defines which persistent directory the disk is mounted to, for
		 * example the list of { "myproject-1014-104817-4c2-harness-0-disk-0" },
		 * { "myproject-1014-104817-4c2-harness-0-disk-1" }.
		 */
		dataDisks?: Array<string>;

		/**
		 * VM instance name the data disks mounted to, for example
		 * "myproject-1014-104817-4c2-harness-0".
		 */
		vmInstance?: string;
	}


	/** Metadata for a Datastore connector used by the job. */
	export interface DatastoreIODetails {

		/** Namespace used in the connection. */
		namespace?: string;

		/** ProjectId accessed in the connection. */
		projectId?: string;
	}


	/** Response from deleting a snapshot. */
	export interface DeleteSnapshotResponse {
	}


	/**
	 * Specification of one of the bundles produced as a result of splitting
	 * a Source (e.g. when executing a SourceSplitRequest, or when
	 * splitting an active task using WorkItemStatus.dynamic_source_split),
	 * relative to the source being split.
	 */
	export interface DerivedSource {

		/** What source to base the produced source on (if any). */
		derivationMode?: DerivedSourceDerivationMode;

		/** A source that records can be read and decoded from. */
		source?: Source;
	}

	export enum DerivedSourceDerivationMode { SOURCE_DERIVATION_MODE_UNKNOWN = 0, SOURCE_DERIVATION_MODE_INDEPENDENT = 1, SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT = 2, SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT = 3 }


	/** A source that records can be read and decoded from. */
	export interface Source {

		/**
		 * While splitting, sources may specify the produced bundles
		 * as differences against another source, in order to save backend-side
		 * memory and allow bigger jobs. For details, see SourceSplitRequest.
		 * To support this use case, the full set of parameters of the source
		 * is logically obtained by taking the latest explicitly specified value
		 * of each parameter in the order:
		 * base_specs (later items win), spec (overrides anything in base_specs).
		 */
		baseSpecs?: Array<string>;

		/** The codec to use to decode data read from the source. */
		codec?: {[id: string]: any };

		/**
		 * Setting this value to true hints to the framework that the source
		 * doesn't need splitting, and using SourceSplitRequest on it would
		 * yield SOURCE_SPLIT_OUTCOME_USE_CURRENT.
		 * E.g. a file splitter may set this to true when splitting a single file
		 * into a set of byte ranges of appropriate size, and set this
		 * to false when splitting a filepattern into individual files.
		 * However, for efficiency, a file splitter may decide to produce
		 * file subranges directly from the filepattern to avoid a splitting
		 * round-trip.
		 * See SourceSplitRequest for an overview of the splitting process.
		 * This field is meaningful only in the Source objects populated
		 * by the user (e.g. when filling in a DerivedSource).
		 * Source objects supplied by the framework to the user don't have
		 * this field populated.
		 */
		doesNotNeedSplitting?: boolean;

		/**
		 * Metadata about a Source useful for automatically optimizing
		 * and tuning the pipeline, etc.
		 */
		metadata?: SourceMetadata;

		/** The source to read from, plus its parameters. */
		spec?: {[id: string]: any };
	}


	/**
	 * Metadata about a Source useful for automatically optimizing
	 * and tuning the pipeline, etc.
	 */
	export interface SourceMetadata {

		/**
		 * An estimate of the total size (in bytes) of the data that would be
		 * read from this source.  This estimate is in terms of external storage
		 * size, before any decompression or other processing done by the reader.
		 */
		estimatedSizeBytes?: string;

		/**
		 * Specifies that the size of this source is known to be infinite
		 * (this is a streaming source).
		 */
		infinite?: boolean;

		/**
		 * Whether this source is known to produce key/value pairs with
		 * the (encoded) keys in lexicographically sorted order.
		 */
		producesSortedKeys?: boolean;
	}


	/** Describes the data disk used by a workflow job. */
	export interface Disk {

		/**
		 * Disk storage type, as defined by Google Compute Engine.  This
		 * must be a disk type appropriate to the project and zone in which
		 * the workers will run.  If unknown or unspecified, the service
		 * will attempt to choose a reasonable default.
		 * For example, the standard persistent disk type is a resource name
		 * typically ending in "pd-standard".  If SSD persistent disks are
		 * available, the resource name typically ends with "pd-ssd".  The
		 * actual valid values are defined the Google Compute Engine API,
		 * not by the Cloud Dataflow API; consult the Google Compute Engine
		 * documentation for more information about determining the set of
		 * available disk types for a particular project and zone.
		 * Google Compute Engine Disk types are local to a particular
		 * project in a particular zone, and so the resource name will
		 * typically look something like this:
		 * compute.googleapis.com/projects/project-id/zones/zone/diskTypes/pd-standard
		 */
		diskType?: string;

		/** Directory in a VM where disk is mounted. */
		mountPoint?: string;

		/**
		 * Size of disk in GB.  If zero or unspecified, the service will
		 * attempt to choose a reasonable default.
		 */
		sizeGb?: number;
	}


	/** Data provided with a pipeline or transform to provide descriptive info. */
	export interface DisplayData {

		/** Contains value if the data is of a boolean type. */
		boolValue?: boolean;

		/** Contains value if the data is of duration type. */
		durationValue?: string;

		/** Contains value if the data is of float type. */
		floatValue?: number;

		/** Contains value if the data is of int64 type. */
		int64Value?: string;

		/** Contains value if the data is of java class type. */
		javaClassValue?: string;

		/**
		 * The key identifying the display data.
		 * This is intended to be used as a label for the display data
		 * when viewed in a dax monitoring system.
		 */
		key?: string;

		/** An optional label to display in a dax UI for the element. */
		label?: string;

		/**
		 * The namespace for the key. This is usually a class name or programming
		 * language namespace (i.e. python module) which defines the display data.
		 * This allows a dax monitoring system to specially handle the data
		 * and perform custom rendering.
		 */
		namespace?: string;

		/**
		 * A possible additional shorter value to display.
		 * For example a java_class_name_value of com.mypackage.MyDoFn
		 * will be stored with MyDoFn as the short_str_value and
		 * com.mypackage.MyDoFn as the java_class_name value.
		 * short_str_value can be displayed and java_class_name_value
		 * will be displayed as a tooltip.
		 */
		shortStrValue?: string;

		/** Contains value if the data is of string type. */
		strValue?: string;

		/** Contains value if the data is of timestamp type. */
		timestampValue?: string;

		/** An optional full URL. */
		url?: string;
	}


	/**
	 * When a task splits using WorkItemStatus.dynamic_source_split, this
	 * message describes the two parts of the split relative to the
	 * description of the current task's input.
	 */
	export interface DynamicSourceSplit {

		/**
		 * Specification of one of the bundles produced as a result of splitting
		 * a Source (e.g. when executing a SourceSplitRequest, or when
		 * splitting an active task using WorkItemStatus.dynamic_source_split),
		 * relative to the source being split.
		 */
		primary?: DerivedSource;

		/**
		 * Specification of one of the bundles produced as a result of splitting
		 * a Source (e.g. when executing a SourceSplitRequest, or when
		 * splitting an active task using WorkItemStatus.dynamic_source_split),
		 * relative to the source being split.
		 */
		residual?: DerivedSource;
	}


	/** Describes the environment in which a Dataflow Job runs. */
	export interface Environment {

		/**
		 * The type of cluster manager API to use.  If unknown or
		 * unspecified, the service will attempt to choose a reasonable
		 * default.  This should be in the form of the API service name,
		 * e.g. "compute.googleapis.com".
		 */
		clusterManagerApiService?: string;

		/**
		 * The dataset for the current project where various workflow
		 * related tables are stored.
		 * The supported resource type is:
		 * Google BigQuery:
		 * bigquery.googleapis.com/{dataset}
		 */
		dataset?: string;

		/** The list of experiments to enable. */
		experiments?: Array<string>;

		/** Which Flexible Resource Scheduling mode to run in. */
		flexResourceSchedulingGoal?: EnvironmentFlexResourceSchedulingGoal;

		/** Experimental settings. */
		internalExperiments?: {[id: string]: any };

		/**
		 * The Cloud Dataflow SDK pipeline options specified by the user. These
		 * options are passed through the service and are used to recreate the
		 * SDK pipeline options on the worker in a language agnostic and platform
		 * independent way.
		 */
		sdkPipelineOptions?: {[id: string]: any };

		/** Identity to run virtual machines as. Defaults to the default account. */
		serviceAccountEmail?: string;

		/**
		 * If set, contains the Cloud KMS key identifier used to encrypt data
		 * at rest, AKA a Customer Managed Encryption Key (CMEK).
		 * Format:
		 * projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY
		 */
		serviceKmsKeyName?: string;

		/**
		 * The prefix of the resources the system should use for temporary
		 * storage.  The system will append the suffix "/temp-{JOBNAME} to
		 * this resource prefix, where {JOBNAME} is the value of the
		 * job_name field.  The resulting bucket and object prefix is used
		 * as the prefix of the resources used to store temporary data
		 * needed during the job execution.  NOTE: This will override the
		 * value in taskrunner_settings.
		 * The supported resource type is:
		 * Google Cloud Storage:
		 * storage.googleapis.com/{bucket}/{object}
		 * bucket.storage.googleapis.com/{object}
		 */
		tempStoragePrefix?: string;

		/** A description of the process that generated the request. */
		userAgent?: {[id: string]: any };

		/**
		 * A structure describing which components and their versions of the service
		 * are required in order to run the job.
		 */
		version?: {[id: string]: any };

		/**
		 * The worker pools. At least one "harness" worker pool must be
		 * specified in order for the job to have workers.
		 */
		workerPools?: Array<WorkerPool>;

		/**
		 * The Compute Engine region
		 * (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in
		 * which worker processing should occur, e.g. "us-west1". Mutually exclusive
		 * with worker_zone. If neither worker_region nor worker_zone is specified,
		 * default to the control plane's region.
		 */
		workerRegion?: string;

		/**
		 * The Compute Engine zone
		 * (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in
		 * which worker processing should occur, e.g. "us-west1-a". Mutually exclusive
		 * with worker_region. If neither worker_region nor worker_zone is specified,
		 * a zone in the control plane's region is chosen based on available capacity.
		 */
		workerZone?: string;
	}

	export enum EnvironmentFlexResourceSchedulingGoal { FLEXRS_UNSPECIFIED = 0, FLEXRS_SPEED_OPTIMIZED = 1, FLEXRS_COST_OPTIMIZED = 2 }


	/**
	 * Describes one particular pool of Cloud Dataflow workers to be
	 * instantiated by the Cloud Dataflow service in order to perform the
	 * computations required by a job.  Note that a workflow job may use
	 * multiple pools, in order to match the various computational
	 * requirements of the various stages of the job.
	 */
	export interface WorkerPool {

		/** Settings for WorkerPool autoscaling. */
		autoscalingSettings?: AutoscalingSettings;

		/** Data disks that are used by a VM in this workflow. */
		dataDisks?: Array<Disk>;

		/**
		 * The default package set to install.  This allows the service to
		 * select a default set of packages which are useful to worker
		 * harnesses written in a particular language.
		 */
		defaultPackageSet?: WorkerPoolDefaultPackageSet;

		/**
		 * Size of root disk for VMs, in GB.  If zero or unspecified, the service will
		 * attempt to choose a reasonable default.
		 */
		diskSizeGb?: number;

		/** Fully qualified source image for disks. */
		diskSourceImage?: string;

		/**
		 * Type of root disk for VMs.  If empty or unspecified, the service will
		 * attempt to choose a reasonable default.
		 */
		diskType?: string;

		/** Configuration for VM IPs. */
		ipConfiguration?: RuntimeEnvironmentIpConfiguration;

		/**
		 * The kind of the worker pool; currently only `harness` and `shuffle`
		 * are supported.
		 */
		kind?: string;

		/**
		 * Machine type (e.g. "n1-standard-1").  If empty or unspecified, the
		 * service will attempt to choose a reasonable default.
		 */
		machineType?: string;

		/** Metadata to set on the Google Compute Engine VMs. */
		metadata?: {[id: string]: string };

		/**
		 * Network to which VMs will be assigned.  If empty or unspecified,
		 * the service will use the network "default".
		 */
		network?: string;

		/**
		 * The number of threads per worker harness. If empty or unspecified, the
		 * service will choose a number of threads (according to the number of cores
		 * on the selected machine type for batch, or 1 by convention for streaming).
		 */
		numThreadsPerWorker?: number;

		/**
		 * Number of Google Compute Engine workers in this pool needed to
		 * execute the job.  If zero or unspecified, the service will
		 * attempt to choose a reasonable default.
		 */
		numWorkers?: number;

		/**
		 * The action to take on host maintenance, as defined by the Google
		 * Compute Engine API.
		 */
		onHostMaintenance?: string;

		/** Packages to be installed on workers. */
		packages?: Array<Package>;

		/** Extra arguments for this worker pool. */
		poolArgs?: {[id: string]: any };

		/**
		 * Set of SDK harness containers needed to execute this pipeline. This will
		 * only be set in the Fn API path. For non-cross-language pipelines this
		 * should have only one entry. Cross-language pipelines will have two or more
		 * entries.
		 */
		sdkHarnessContainerImages?: Array<SdkHarnessContainerImage>;

		/**
		 * Subnetwork to which VMs will be assigned, if desired.  Expected to be of
		 * the form "regions/REGION/subnetworks/SUBNETWORK".
		 */
		subnetwork?: string;

		/** Taskrunner configuration settings. */
		taskrunnerSettings?: TaskRunnerSettings;

		/**
		 * Sets the policy for determining when to turndown worker pool.
		 * Allowed values are: `TEARDOWN_ALWAYS`, `TEARDOWN_ON_SUCCESS`, and
		 * `TEARDOWN_NEVER`.
		 * `TEARDOWN_ALWAYS` means workers are always torn down regardless of whether
		 * the job succeeds. `TEARDOWN_ON_SUCCESS` means workers are torn down
		 * if the job succeeds. `TEARDOWN_NEVER` means the workers are never torn
		 * down.
		 * If the workers are not torn down by the service, they will
		 * continue to run and use Google Compute Engine VM resources in the
		 * user's project until they are explicitly terminated by the user.
		 * Because of this, Google recommends using the `TEARDOWN_ALWAYS`
		 * policy except for small, manually supervised test jobs.
		 * If unknown or unspecified, the service will attempt to choose a reasonable
		 * default.
		 */
		teardownPolicy?: WorkerPoolTeardownPolicy;

		/**
		 * Required. Docker container image that executes the Cloud Dataflow worker
		 * harness, residing in Google Container Registry.
		 * Deprecated for the Fn API path. Use sdk_harness_container_images instead.
		 */
		workerHarnessContainerImage?: string;

		/**
		 * Zone to run the worker pools in.  If empty or unspecified, the service
		 * will attempt to choose a reasonable default.
		 */
		zone?: string;
	}

	export enum WorkerPoolDefaultPackageSet { DEFAULT_PACKAGE_SET_UNKNOWN = 0, DEFAULT_PACKAGE_SET_NONE = 1, DEFAULT_PACKAGE_SET_JAVA = 2, DEFAULT_PACKAGE_SET_PYTHON = 3 }


	/**
	 * The packages that must be installed in order for a worker to run the
	 * steps of the Cloud Dataflow job that will be assigned to its worker
	 * pool.
	 * This is the mechanism by which the Cloud Dataflow SDK causes code to
	 * be loaded onto the workers. For example, the Cloud Dataflow Java SDK
	 * might use this to install jars containing the user's code and all of the
	 * various dependencies (libraries, data files, etc.) required in order
	 * for that code to run.
	 */
	export interface Package {

		/**
		 * The resource to read the package from. The supported resource type is:
		 * Google Cloud Storage:
		 * storage.googleapis.com/{bucket}
		 * bucket.storage.googleapis.com/
		 */
		location?: string;

		/** The name of the package. */
		name?: string;
	}


	/** Defines a SDK harness container for executing Dataflow pipelines. */
	export interface SdkHarnessContainerImage {

		/** A docker container image that resides in Google Container Registry. */
		containerImage?: string;

		/**
		 * If true, recommends the Dataflow service to use only one core per SDK
		 * container instance with this image. If false (or unset) recommends using
		 * more than one core per SDK container instance with this image for
		 * efficiency. Note that Dataflow service may choose to override this property
		 * if needed.
		 */
		useSingleCorePerContainer?: boolean;
	}


	/** Taskrunner configuration settings. */
	export interface TaskRunnerSettings {

		/** Whether to also send taskrunner log info to stderr. */
		alsologtostderr?: boolean;

		/** The location on the worker for task-specific subdirectories. */
		baseTaskDir?: string;

		/**
		 * The base URL for the taskrunner to use when accessing Google Cloud APIs.
		 * When workers access Google Cloud APIs, they logically do so via
		 * relative URLs.  If this field is specified, it supplies the base
		 * URL to use for resolving these relative URLs.  The normative
		 * algorithm used is defined by RFC 1808, "Relative Uniform Resource
		 * Locators".
		 * If not specified, the default value is "http://www.googleapis.com/"
		 */
		baseUrl?: string;

		/** The file to store preprocessing commands in. */
		commandlinesFileName?: string;

		/** Whether to continue taskrunner if an exception is hit. */
		continueOnException?: boolean;

		/** The API version of endpoint, e.g. "v1b3" */
		dataflowApiVersion?: string;

		/** The command to launch the worker harness. */
		harnessCommand?: string;

		/** The suggested backend language. */
		languageHint?: string;

		/** The directory on the VM to store logs. */
		logDir?: string;

		/**
		 * Whether to send taskrunner log info to Google Compute Engine VM serial
		 * console.
		 */
		logToSerialconsole?: boolean;

		/**
		 * Indicates where to put logs.  If this is not specified, the logs
		 * will not be uploaded.
		 * The supported resource type is:
		 * Google Cloud Storage:
		 * storage.googleapis.com/{bucket}/{object}
		 * bucket.storage.googleapis.com/{object}
		 */
		logUploadLocation?: string;

		/**
		 * The OAuth2 scopes to be requested by the taskrunner in order to
		 * access the Cloud Dataflow API.
		 */
		oauthScopes?: Array<string>;

		/** Provides data to pass through to the worker harness. */
		parallelWorkerSettings?: WorkerSettings;

		/** The streaming worker main class name. */
		streamingWorkerMainClass?: string;

		/**
		 * The UNIX group ID on the worker VM to use for tasks launched by
		 * taskrunner; e.g. "wheel".
		 */
		taskGroup?: string;

		/**
		 * The UNIX user ID on the worker VM to use for tasks launched by
		 * taskrunner; e.g. "root".
		 */
		taskUser?: string;

		/**
		 * The prefix of the resources the taskrunner should use for
		 * temporary storage.
		 * The supported resource type is:
		 * Google Cloud Storage:
		 * storage.googleapis.com/{bucket}/{object}
		 * bucket.storage.googleapis.com/{object}
		 */
		tempStoragePrefix?: string;

		/** The ID string of the VM. */
		vmId?: string;

		/** The file to store the workflow in. */
		workflowFileName?: string;
	}


	/** Provides data to pass through to the worker harness. */
	export interface WorkerSettings {

		/**
		 * The base URL for accessing Google Cloud APIs.
		 * When workers access Google Cloud APIs, they logically do so via
		 * relative URLs.  If this field is specified, it supplies the base
		 * URL to use for resolving these relative URLs.  The normative
		 * algorithm used is defined by RFC 1808, "Relative Uniform Resource
		 * Locators".
		 * If not specified, the default value is "http://www.googleapis.com/"
		 */
		baseUrl?: string;

		/** Whether to send work progress updates to the service. */
		reportingEnabled?: boolean;

		/**
		 * The Cloud Dataflow service path relative to the root URL, for example,
		 * "dataflow/v1b3/projects".
		 */
		servicePath?: string;

		/**
		 * The Shuffle service path relative to the root URL, for example,
		 * "shuffle/v1beta1".
		 */
		shuffleServicePath?: string;

		/**
		 * The prefix of the resources the system should use for temporary
		 * storage.
		 * The supported resource type is:
		 * Google Cloud Storage:
		 * storage.googleapis.com/{bucket}/{object}
		 * bucket.storage.googleapis.com/{object}
		 */
		tempStoragePrefix?: string;

		/** The ID of the worker running this pipeline. */
		workerId?: string;
	}

	export enum WorkerPoolTeardownPolicy { TEARDOWN_POLICY_UNKNOWN = 0, TEARDOWN_ALWAYS = 1, TEARDOWN_ON_SUCCESS = 2, TEARDOWN_NEVER = 3 }


	/** A message describing the state of a particular execution stage. */
	export interface ExecutionStageState {

		/** The time at which the stage transitioned to this state. */
		currentStateTime?: string;

		/** The name of the execution stage. */
		executionStageName?: string;

		/** Executions stage states allow the same set of values as JobState. */
		executionStageState?: ExecutionStageStateExecutionStageState;
	}

	export enum ExecutionStageStateExecutionStageState { JOB_STATE_UNKNOWN = 0, JOB_STATE_STOPPED = 1, JOB_STATE_RUNNING = 2, JOB_STATE_DONE = 3, JOB_STATE_FAILED = 4, JOB_STATE_CANCELLED = 5, JOB_STATE_UPDATED = 6, JOB_STATE_DRAINING = 7, JOB_STATE_DRAINED = 8, JOB_STATE_PENDING = 9, JOB_STATE_CANCELLING = 10, JOB_STATE_QUEUED = 11 }


	/**
	 * Description of the composing transforms, names/ids, and input/outputs of a
	 * stage of execution.  Some composing transforms and sources may have been
	 * generated by the Dataflow service during execution planning.
	 */
	export interface ExecutionStageSummary {

		/** Collections produced and consumed by component transforms of this stage. */
		componentSource?: Array<ComponentSource>;

		/** Transforms that comprise this execution stage. */
		componentTransform?: Array<ComponentTransform>;

		/** Dataflow service generated id for this stage. */
		id?: string;

		/** Input sources for this stage. */
		inputSource?: Array<StageSource>;

		/** Type of tranform this stage is executing. */
		kind?: ExecutionStageSummaryKind;

		/** Dataflow service generated name for this stage. */
		name?: string;

		/** Output sources for this stage. */
		outputSource?: Array<StageSource>;
	}


	/** Description of an input or output of an execution stage. */
	export interface StageSource {

		/** Dataflow service generated name for this source. */
		name?: string;

		/**
		 * User name for the original user transform or collection with which this
		 * source is most closely associated.
		 */
		originalTransformOrCollection?: string;

		/** Size of the source, if measurable. */
		sizeBytes?: string;

		/** Human-readable name for this source; may be user or system generated. */
		userName?: string;
	}

	export enum ExecutionStageSummaryKind { UNKNOWN_KIND = 0, PAR_DO_KIND = 1, GROUP_BY_KEY_KIND = 2, FLATTEN_KIND = 3, READ_KIND = 4, WRITE_KIND = 5, CONSTANT_KIND = 6, SINGLETON_KIND = 7, SHUFFLE_KIND = 8 }


	/**
	 * Indicates which [regional endpoint]
	 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) failed
	 * to respond to a request for data.
	 */
	export interface FailedLocation {

		/**
		 * The name of the [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * failed to respond.
		 */
		name?: string;
	}


	/** Metadata for a File connector used by the job. */
	export interface FileIODetails {

		/** File Pattern used to access files by the connector. */
		filePattern?: string;
	}


	/** An instruction that copies its inputs (zero or more) to its (single) output. */
	export interface FlattenInstruction {

		/** Describes the inputs to the flatten instruction. */
		inputs?: Array<InstructionInput>;
	}


	/**
	 * An input of an instruction, as a reference to an output of a
	 * producer instruction.
	 */
	export interface InstructionInput {

		/** The output index (origin zero) within the producer. */
		outputNum?: number;

		/**
		 * The index (origin zero) of the parallel instruction that produces
		 * the output to be consumed by this input.  This index is relative
		 * to the list of instructions in this input's instruction's
		 * containing MapTask.
		 */
		producerInstructionIndex?: number;
	}


	/** Request to get updated debug configuration for component. */
	export interface GetDebugConfigRequest {

		/**
		 * The internal component id for which debug configuration is
		 * requested.
		 */
		componentId?: string;

		/**
		 * The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * contains the job specified by job_id.
		 */
		location?: string;

		/** The worker id, i.e., VM hostname. */
		workerId?: string;
	}


	/** Response to a get debug configuration request. */
	export interface GetDebugConfigResponse {

		/** The encoded debug configuration for the requested component. */
		config?: string;
	}


	/** The response to a GetTemplate request. */
	export interface GetTemplateResponse {

		/** Metadata describing a template. */
		metadata?: TemplateMetadata;

		/** RuntimeMetadata describing a runtime environment. */
		runtimeMetadata?: RuntimeMetadata;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		status?: Status;

		/** Template Type. */
		templateType?: GetTemplateResponseTemplateType;
	}


	/** RuntimeMetadata describing a runtime environment. */
	export interface RuntimeMetadata {

		/** The parameters for the template. */
		parameters?: Array<ParameterMetadata>;

		/** SDK Information. */
		sdkInfo?: SDKInfo;
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
		code?: number;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string>;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string;
	}

	export enum GetTemplateResponseTemplateType { UNKNOWN = 0, LEGACY = 1, FLEX = 2 }


	/** Proto describing a hot key detected on a given WorkItem. */
	export interface HotKeyDetection {

		/** The age of the hot key measured from when it was first detected. */
		hotKeyAge?: string;

		/**
		 * System-defined name of the step containing this hot key.
		 * Unique across the workflow.
		 */
		systemName?: string;

		/** User-provided name of the step that contains this hot key. */
		userStepName?: string;
	}


	/** An output of an instruction. */
	export interface InstructionOutput {

		/** The codec to use to encode data being written via this output. */
		codec?: {[id: string]: any };

		/** The user-provided name of this output. */
		name?: string;

		/**
		 * For system-generated byte and mean byte metrics, certain instructions
		 * should only report the key size.
		 */
		onlyCountKeyBytes?: boolean;

		/**
		 * For system-generated byte and mean byte metrics, certain instructions
		 * should only report the value size.
		 */
		onlyCountValueBytes?: boolean;

		/**
		 * System-defined name for this output in the original workflow graph.
		 * Outputs that do not contribute to an original instruction do not set this.
		 */
		originalName?: string;

		/**
		 * System-defined name of this output.
		 * Unique across the workflow.
		 */
		systemName?: string;
	}


	/** Defines a job to be run by the Cloud Dataflow service. */
	export interface Job {

		/**
		 * The client's unique identifier of the job, re-used across retried attempts.
		 * If this field is set, the service will ensure its uniqueness.
		 * The request to create a job will fail if the service has knowledge of a
		 * previously submitted job with the same client's ID and job name.
		 * The caller may use this field to ensure idempotence of job
		 * creation across retried attempts to create a job.
		 * By default, the field is empty and, in that case, the service ignores it.
		 */
		clientRequestId?: string;

		/**
		 * The timestamp when the job was initially created. Immutable and set by the
		 * Cloud Dataflow service.
		 */
		createTime?: string;

		/**
		 * If this is specified, the job's initial state is populated from the given
		 * snapshot.
		 */
		createdFromSnapshotId?: string;

		/**
		 * The current state of the job.
		 * Jobs are created in the `JOB_STATE_STOPPED` state unless otherwise
		 * specified.
		 * A job in the `JOB_STATE_RUNNING` state may asynchronously enter a
		 * terminal state. After a job has reached a terminal state, no
		 * further state updates may be made.
		 * This field may be mutated by the Cloud Dataflow service;
		 * callers cannot mutate it.
		 */
		currentState?: ExecutionStageStateExecutionStageState;

		/** The timestamp associated with the current state. */
		currentStateTime?: string;

		/** Describes the environment in which a Dataflow Job runs. */
		environment?: Environment;

		/**
		 * Additional information about how a Cloud Dataflow job will be executed that
		 * isn't contained in the submitted job.
		 */
		executionInfo?: JobExecutionInfo;

		/**
		 * The unique ID of this job.
		 * This field is set by the Cloud Dataflow service when the Job is
		 * created, and is immutable for the life of the job.
		 */
		id?: string;

		/**
		 * Metadata available primarily for filtering jobs. Will be included in the
		 * ListJob response and Job SUMMARY view.
		 */
		jobMetadata?: JobMetadata;

		/**
		 * User-defined labels for this job.
		 * The labels map can contain no more than 64 entries.  Entries of the labels
		 * map are UTF8 strings that comply with the following restrictions:
		 * * Keys must conform to regexp:  \p{Ll}\p{Lo}{0,62}
		 * * Values must conform to regexp:  [\p{Ll}\p{Lo}\p{N}_-]{0,63}
		 * * Both keys and values are additionally constrained to be <= 128 bytes in
		 * size.
		 */
		labels?: {[id: string]: string };

		/**
		 * The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * contains this job.
		 */
		location?: string;

		/**
		 * The user-specified Cloud Dataflow job name.
		 * Only one Job with a given name may exist in a project at any
		 * given time. If a caller attempts to create a Job with the same
		 * name as an already-existing Job, the attempt returns the
		 * existing Job.
		 * The name must match the regular expression
		 * `[a-z]([-a-z0-9]{0,38}[a-z0-9])?`
		 */
		name?: string;

		/**
		 * A descriptive representation of submitted pipeline as well as the executed
		 * form.  This data is provided by the Dataflow service for ease of visualizing
		 * the pipeline and interpreting Dataflow provided metrics.
		 */
		pipelineDescription?: PipelineDescription;

		/** The ID of the Cloud Platform project that the job belongs to. */
		projectId?: string;

		/**
		 * If this job is an update of an existing job, this field is the job ID
		 * of the job it replaced.
		 * When sending a `CreateJobRequest`, you can update a job by specifying it
		 * here. The job named here is stopped, and its intermediate state is
		 * transferred to this job.
		 */
		replaceJobId?: string;

		/**
		 * If another job is an update of this job (and thus, this job is in
		 * `JOB_STATE_UPDATED`), this field contains the ID of that job.
		 */
		replacedByJobId?: string;

		/**
		 * The job's requested state.
		 * `UpdateJob` may be used to switch between the `JOB_STATE_STOPPED` and
		 * `JOB_STATE_RUNNING` states, by setting requested_state.  `UpdateJob` may
		 * also be used to directly set a job's requested state to
		 * `JOB_STATE_CANCELLED` or `JOB_STATE_DONE`, irrevocably terminating the
		 * job if it has not already reached a terminal state.
		 */
		requestedState?: ExecutionStageStateExecutionStageState;

		/**
		 * This field may be mutated by the Cloud Dataflow service;
		 * callers cannot mutate it.
		 */
		stageStates?: Array<ExecutionStageState>;

		/**
		 * The timestamp when the job was started (transitioned to JOB_STATE_PENDING).
		 * Flexible resource scheduling jobs are started with some delay after job
		 * creation, so start_time is unset before start and is updated when the
		 * job is started by the Cloud Dataflow service. For other jobs, start_time
		 * always equals to create_time and is immutable and set by the Cloud Dataflow
		 * service.
		 */
		startTime?: string;

		/**
		 * Exactly one of step or steps_location should be specified.
		 * The top-level steps that constitute the entire job.
		 */
		steps?: Array<Step>;

		/** The GCS location where the steps are stored. */
		stepsLocation?: string;

		/**
		 * A set of files the system should be aware of that are used
		 * for temporary storage. These temporary files will be
		 * removed on job completion.
		 * No duplicates are allowed.
		 * No file patterns are supported.
		 * The supported files are:
		 * Google Cloud Storage:
		 * storage.googleapis.com/{bucket}/{object}
		 * bucket.storage.googleapis.com/{object}
		 */
		tempFiles?: Array<string>;

		/**
		 * The map of transform name prefixes of the job to be replaced to the
		 * corresponding name prefixes of the new job.
		 */
		transformNameMapping?: {[id: string]: string };

		/** The type of Cloud Dataflow job. */
		type?: JobType;
	}


	/**
	 * Additional information about how a Cloud Dataflow job will be executed that
	 * isn't contained in the submitted job.
	 */
	export interface JobExecutionInfo {

		/** A mapping from each stage to the information about that stage. */
		stages?: {[id: string]: JobExecutionStageInfo };
	}


	/**
	 * Contains information about how a particular
	 * google.dataflow.v1beta3.Step will be executed.
	 */
	export interface JobExecutionStageInfo {

		/**
		 * The steps associated with the execution stage.
		 * Note that stages may have several steps, and that a given step
		 * might be run by more than one stage.
		 */
		stepName?: Array<string>;
	}


	/**
	 * Metadata available primarily for filtering jobs. Will be included in the
	 * ListJob response and Job SUMMARY view.
	 */
	export interface JobMetadata {

		/** Identification of a BigTable source used in the Dataflow job. */
		bigTableDetails?: Array<BigTableIODetails>;

		/** Identification of a BigQuery source used in the Dataflow job. */
		bigqueryDetails?: Array<BigQueryIODetails>;

		/** Identification of a Datastore source used in the Dataflow job. */
		datastoreDetails?: Array<DatastoreIODetails>;

		/** Identification of a File source used in the Dataflow job. */
		fileDetails?: Array<FileIODetails>;

		/** Identification of a PubSub source used in the Dataflow job. */
		pubsubDetails?: Array<PubSubIODetails>;

		/** The version of the SDK used to run the job. */
		sdkVersion?: SdkVersion;

		/** Identification of a Spanner source used in the Dataflow job. */
		spannerDetails?: Array<SpannerIODetails>;
	}


	/** Metadata for a PubSub connector used by the job. */
	export interface PubSubIODetails {

		/** Subscription used in the connection. */
		subscription?: string;

		/** Topic accessed in the connection. */
		topic?: string;
	}


	/** The version of the SDK used to run the job. */
	export interface SdkVersion {

		/** The support status for this SDK version. */
		sdkSupportStatus?: SdkVersionSdkSupportStatus;

		/** The version of the SDK used to run the job. */
		version?: string;

		/** A readable string describing the version of the SDK. */
		versionDisplayName?: string;
	}

	export enum SdkVersionSdkSupportStatus { UNKNOWN = 0, SUPPORTED = 1, STALE = 2, DEPRECATED = 3, UNSUPPORTED = 4 }


	/** Metadata for a Spanner connector used by the job. */
	export interface SpannerIODetails {

		/** DatabaseId accessed in the connection. */
		databaseId?: string;

		/** InstanceId accessed in the connection. */
		instanceId?: string;

		/** ProjectId accessed in the connection. */
		projectId?: string;
	}


	/**
	 * A descriptive representation of submitted pipeline as well as the executed
	 * form.  This data is provided by the Dataflow service for ease of visualizing
	 * the pipeline and interpreting Dataflow provided metrics.
	 */
	export interface PipelineDescription {

		/** Pipeline level display data. */
		displayData?: Array<DisplayData>;

		/** Description of each stage of execution of the pipeline. */
		executionPipelineStage?: Array<ExecutionStageSummary>;

		/** Description of each transform in the pipeline and collections between them. */
		originalPipelineTransform?: Array<TransformSummary>;
	}


	/** Description of the type, names/ids, and input/outputs for a transform. */
	export interface TransformSummary {

		/** Transform-specific display data. */
		displayData?: Array<DisplayData>;

		/** SDK generated id of this transform instance. */
		id?: string;

		/** User names for all collection inputs to this transform. */
		inputCollectionName?: Array<string>;

		/** Type of transform. */
		kind?: ExecutionStageSummaryKind;

		/** User provided name for this transform instance. */
		name?: string;

		/** User  names for all collection outputs to this transform. */
		outputCollectionName?: Array<string>;
	}


	/**
	 * Defines a particular step within a Cloud Dataflow job.
	 * A job consists of multiple steps, each of which performs some
	 * specific operation as part of the overall job.  Data is typically
	 * passed from one step to another as part of the job.
	 * Here's an example of a sequence of steps which together implement a
	 * Map-Reduce job:
	 *   * Read a collection of data from some source, parsing the
	 *     collection's elements.
	 *   * Validate the elements.
	 *   * Apply a user-defined function to map each element to some value
	 *     and extract an element-specific key value.
	 *   * Group elements with the same key into a single element with
	 *     that key, transforming a multiply-keyed collection into a
	 *     uniquely-keyed collection.
	 *   * Write the elements out to some data sink.
	 * Note that the Cloud Dataflow service may be used to run many different
	 * types of jobs, not just Map-Reduce.
	 */
	export interface Step {

		/** The kind of step in the Cloud Dataflow job. */
		kind?: string;

		/**
		 * The name that identifies the step. This must be unique for each
		 * step with respect to all other steps in the Cloud Dataflow job.
		 */
		name?: string;

		/**
		 * Named properties associated with the step. Each kind of
		 * predefined step has its own required set of properties.
		 * Must be provided on Create.  Only retrieved with JOB_VIEW_ALL.
		 */
		properties?: {[id: string]: any };
	}

	export enum JobType { JOB_TYPE_UNKNOWN = 0, JOB_TYPE_BATCH = 1, JOB_TYPE_STREAMING = 2 }


	/** A particular message pertaining to a Dataflow job. */
	export interface JobMessage {

		/** Deprecated. */
		id?: string;

		/** Importance level of the message. */
		messageImportance?: JobMessageMessageImportance;

		/** The text of the message. */
		messageText?: string;

		/** The timestamp of the message. */
		time?: string;
	}

	export enum JobMessageMessageImportance { JOB_MESSAGE_IMPORTANCE_UNKNOWN = 0, JOB_MESSAGE_DEBUG = 1, JOB_MESSAGE_DETAILED = 2, JOB_MESSAGE_BASIC = 3, JOB_MESSAGE_WARNING = 4, JOB_MESSAGE_ERROR = 5 }


	/**
	 * JobMetrics contains a collection of metrics describing the detailed progress
	 * of a Dataflow job. Metrics correspond to user-defined and system-defined
	 * metrics in the job.
	 * This resource captures only the most recent values of each metric;
	 * time-series data can be queried for them (under the same metric names)
	 * from Cloud Monitoring.
	 */
	export interface JobMetrics {

		/** Timestamp as of which metric values are current. */
		metricTime?: string;

		/** All metrics for this job. */
		metrics?: Array<MetricUpdate>;
	}


	/** Describes the state of a metric. */
	export interface MetricUpdate {

		/**
		 * True if this metric is reported as the total cumulative aggregate
		 * value accumulated since the worker started working on this WorkItem.
		 * By default this is false, indicating that this metric is reported
		 * as a delta that is not associated with any WorkItem.
		 */
		cumulative?: boolean;

		/** A struct value describing properties of a distribution of numeric values. */
		distribution?: any;

		/**
		 * A struct value describing properties of a Gauge.
		 * Metrics of gauge type show the value of a metric across time, and is
		 * aggregated based on the newest value.
		 */
		gauge?: any;

		/**
		 * Worker-computed aggregate value for internal use by the Dataflow
		 * service.
		 */
		internal?: any;

		/**
		 * Metric aggregation kind.  The possible metric aggregation kinds are
		 * "Sum", "Max", "Min", "Mean", "Set", "And", "Or", and "Distribution".
		 * The specified aggregation kind is case-insensitive.
		 * If omitted, this is not an aggregated value but instead
		 * a single metric sample value.
		 */
		kind?: string;

		/**
		 * Worker-computed aggregate value for the "Mean" aggregation kind.
		 * This holds the count of the aggregated values and is used in combination
		 * with mean_sum above to obtain the actual mean aggregate value.
		 * The only possible value type is Long.
		 */
		meanCount?: any;

		/**
		 * Worker-computed aggregate value for the "Mean" aggregation kind.
		 * This holds the sum of the aggregated values and is used in combination
		 * with mean_count below to obtain the actual mean aggregate value.
		 * The only possible value types are Long and Double.
		 */
		meanSum?: any;

		/**
		 * Identifies a metric, by describing the source which generated the
		 * metric.
		 */
		name?: MetricStructuredName;

		/**
		 * Worker-computed aggregate value for aggregation kinds "Sum", "Max", "Min",
		 * "And", and "Or".  The possible value types are Long, Double, and Boolean.
		 */
		scalar?: any;

		/**
		 * Worker-computed aggregate value for the "Set" aggregation kind.  The only
		 * possible value type is a list of Values whose type can be Long, Double,
		 * or String, according to the metric's type.  All Values in the list must
		 * be of the same type.
		 */
		set?: any;

		/**
		 * Timestamp associated with the metric value. Optional when workers are
		 * reporting work progress; it will be filled in responses from the
		 * metrics API.
		 */
		updateTime?: string;
	}


	/**
	 * Identifies a metric, by describing the source which generated the
	 * metric.
	 */
	export interface MetricStructuredName {

		/**
		 * Zero or more labeled fields which identify the part of the job this
		 * metric is associated with, such as the name of a step or collection.
		 * For example, built-in counters associated with steps will have
		 * context['step'] = <step-name>. Counters associated with PCollections
		 * in the SDK will have context['pcollection'] = <pcollection-name>.
		 */
		context?: {[id: string]: string };

		/** Worker-defined metric name. */
		name?: string;

		/**
		 * Origin (namespace) of metric name. May be blank for user-define metrics;
		 * will be "dataflow" for metrics defined by the Dataflow service or SDK.
		 */
		origin?: string;
	}


	/**
	 * Data disk assignment information for a specific key-range of a sharded
	 * computation.
	 * Currently we only support UTF-8 character splits to simplify encoding into
	 * JSON.
	 */
	export interface KeyRangeDataDiskAssignment {

		/**
		 * The name of the data disk where data for this range is stored.
		 * This name is local to the Google Cloud Platform project and uniquely
		 * identifies the disk within that project, for example
		 * "myproject-1014-104817-4c2-harness-0-disk-1".
		 */
		dataDisk?: string;

		/** The end (exclusive) of the key range. */
		end?: string;

		/** The start (inclusive) of the key range. */
		start?: string;
	}


	/** Launch FlexTemplate Parameter. */
	export interface LaunchFlexTemplateParameter {

		/** Container Spec. */
		containerSpec?: ContainerSpec;

		/** Gcs path to a file with json serialized ContainerSpec as content. */
		containerSpecGcsPath?: string;

		/** Required. The job name to use for the created job. */
		jobName?: string;

		/**
		 * The parameters for FlexTemplate.
		 * Ex. {"num_workers":"5"}
		 */
		parameters?: {[id: string]: string };
	}


	/** A request to launch a Cloud Dataflow job from a FlexTemplate. */
	export interface LaunchFlexTemplateRequest {

		/** Launch FlexTemplate Parameter. */
		launchParameter?: LaunchFlexTemplateParameter;

		/**
		 * If true, the request is validated but not actually executed.
		 * Defaults to false.
		 */
		validateOnly?: boolean;
	}


	/** Response to the request to launch a job from Flex Template. */
	export interface LaunchFlexTemplateResponse {

		/** Defines a job to be run by the Cloud Dataflow service. */
		job?: Job;
	}


	/** Parameters to provide to the template being launched. */
	export interface LaunchTemplateParameters {

		/** The environment values to set at runtime. */
		environment?: RuntimeEnvironment;

		/** Required. The job name to use for the created job. */
		jobName?: string;

		/** The runtime parameters to pass to the job. */
		parameters?: {[id: string]: string };

		/**
		 * Only applicable when updating a pipeline. Map of transform name prefixes of
		 * the job to be replaced to the corresponding name prefixes of the new job.
		 */
		transformNameMapping?: {[id: string]: string };

		/**
		 * If set, replace the existing pipeline with the name specified by jobName
		 * with this pipeline, preserving state.
		 */
		update?: boolean;
	}


	/** Response to the request to launch a template. */
	export interface LaunchTemplateResponse {

		/** Defines a job to be run by the Cloud Dataflow service. */
		job?: Job;
	}


	/** Request to lease WorkItems. */
	export interface LeaseWorkItemRequest {

		/** The current timestamp at the worker. */
		currentWorkerTime?: string;

		/**
		 * The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * contains the WorkItem's job.
		 */
		location?: string;

		/** The initial lease period. */
		requestedLeaseDuration?: string;

		/** Untranslated bag-of-bytes WorkRequest from UnifiedWorker. */
		unifiedWorkerRequest?: {[id: string]: any };

		/** Filter for WorkItem type. */
		workItemTypes?: Array<string>;

		/**
		 * Worker capabilities. WorkItems might be limited to workers with specific
		 * capabilities.
		 */
		workerCapabilities?: Array<string>;

		/**
		 * Identifies the worker leasing work -- typically the ID of the
		 * virtual machine running the worker.
		 */
		workerId?: string;
	}


	/** Response to a request to lease WorkItems. */
	export interface LeaseWorkItemResponse {

		/** Untranslated bag-of-bytes WorkResponse for UnifiedWorker. */
		unifiedWorkerResponse?: {[id: string]: any };

		/** A list of the leased WorkItems. */
		workItems?: Array<WorkItem>;
	}


	/**
	 * WorkItem represents basic information about a WorkItem to be executed
	 * in the cloud.
	 */
	export interface WorkItem {

		/** Work item-specific configuration as an opaque blob. */
		configuration?: string;

		/** Identifies this WorkItem. */
		id?: string;

		/** The initial index to use when reporting the status of the WorkItem. */
		initialReportIndex?: string;

		/** Identifies the workflow job this WorkItem belongs to. */
		jobId?: string;

		/** Time when the lease on this Work will expire. */
		leaseExpireTime?: string;

		/**
		 * MapTask consists of an ordered set of instructions, each of which
		 * describes one particular low-level operation for the worker to
		 * perform in order to accomplish the MapTask's WorkItem.
		 * Each instruction must appear in the list before any instructions which
		 * depends on its output.
		 */
		mapTask?: MapTask;

		/**
		 * Any required packages that need to be fetched in order to execute
		 * this WorkItem.
		 */
		packages?: Array<Package>;

		/** Identifies the cloud project this WorkItem belongs to. */
		projectId?: string;

		/** Recommended reporting interval. */
		reportStatusInterval?: string;

		/** Describes a particular function to invoke. */
		seqMapTask?: SeqMapTask;

		/** A task which consists of a shell command for the worker to execute. */
		shellTask?: ShellTask;

		/**
		 * A work item that represents the different operations that can be
		 * performed on a user-defined Source specification.
		 */
		sourceOperationTask?: SourceOperationRequest;

		/**
		 * A task which describes what action should be performed for the specified
		 * streaming computation ranges.
		 */
		streamingComputationTask?: StreamingComputationTask;

		/** A task that carries configuration information for streaming computations. */
		streamingConfigTask?: StreamingConfigTask;

		/** A task which initializes part of a streaming Dataflow job. */
		streamingSetupTask?: StreamingSetupTask;
	}


	/**
	 * MapTask consists of an ordered set of instructions, each of which
	 * describes one particular low-level operation for the worker to
	 * perform in order to accomplish the MapTask's WorkItem.
	 * Each instruction must appear in the list before any instructions which
	 * depends on its output.
	 */
	export interface MapTask {

		/**
		 * Counter prefix that can be used to prefix counters. Not currently used in
		 * Dataflow.
		 */
		counterPrefix?: string;

		/** The instructions in the MapTask. */
		instructions?: Array<ParallelInstruction>;

		/**
		 * System-defined name of the stage containing this MapTask.
		 * Unique across the workflow.
		 */
		stageName?: string;

		/**
		 * System-defined name of this MapTask.
		 * Unique across the workflow.
		 */
		systemName?: string;
	}


	/** Describes a particular operation comprising a MapTask. */
	export interface ParallelInstruction {

		/** An instruction that copies its inputs (zero or more) to its (single) output. */
		flatten?: FlattenInstruction;

		/** User-provided name of this operation. */
		name?: string;

		/** System-defined name for the operation in the original workflow graph. */
		originalName?: string;

		/** Describes the outputs of the instruction. */
		outputs?: Array<InstructionOutput>;

		/**
		 * An instruction that does a ParDo operation.
		 * Takes one main input and zero or more side inputs, and produces
		 * zero or more outputs.
		 * Runs user code.
		 */
		parDo?: ParDoInstruction;

		/**
		 * An instruction that does a partial group-by-key.
		 * One input and one output.
		 */
		partialGroupByKey?: PartialGroupByKeyInstruction;

		/**
		 * An instruction that reads records.
		 * Takes no inputs, produces one output.
		 */
		read?: ReadInstruction;

		/**
		 * System-defined name of this operation.
		 * Unique across the workflow.
		 */
		systemName?: string;

		/**
		 * An instruction that writes records.
		 * Takes one input, produces no outputs.
		 */
		write?: WriteInstruction;
	}


	/**
	 * An instruction that does a ParDo operation.
	 * Takes one main input and zero or more side inputs, and produces
	 * zero or more outputs.
	 * Runs user code.
	 */
	export interface ParDoInstruction {

		/**
		 * An input of an instruction, as a reference to an output of a
		 * producer instruction.
		 */
		input?: InstructionInput;

		/** Information about each of the outputs, if user_fn is a  MultiDoFn. */
		multiOutputInfos?: Array<MultiOutputInfo>;

		/** The number of outputs. */
		numOutputs?: number;

		/** Zero or more side inputs. */
		sideInputs?: Array<SideInputInfo>;

		/** The user function to invoke. */
		userFn?: {[id: string]: any };
	}


	/** Information about an output of a multi-output DoFn. */
	export interface MultiOutputInfo {

		/**
		 * The id of the tag the user code will emit to this output by; this
		 * should correspond to the tag of some SideInputInfo.
		 */
		tag?: string;
	}


	/** Information about a side input of a DoFn or an input of a SeqDoFn. */
	export interface SideInputInfo {

		/** How to interpret the source element(s) as a side input value. */
		kind?: {[id: string]: any };

		/**
		 * The source(s) to read element(s) from to get the value of this side input.
		 * If more than one source, then the elements are taken from the
		 * sources, in the specified order if order matters.
		 * At least one source is required.
		 */
		sources?: Array<Source>;

		/**
		 * The id of the tag the user code will access this side input by;
		 * this should correspond to the tag of some MultiOutputInfo.
		 */
		tag?: string;
	}


	/**
	 * An instruction that does a partial group-by-key.
	 * One input and one output.
	 */
	export interface PartialGroupByKeyInstruction {

		/**
		 * An input of an instruction, as a reference to an output of a
		 * producer instruction.
		 */
		input?: InstructionInput;

		/** The codec to use for interpreting an element in the input PTable. */
		inputElementCodec?: {[id: string]: any };

		/**
		 * If this instruction includes a combining function this is the name of the
		 * intermediate store between the GBK and the CombineValues.
		 */
		originalCombineValuesInputStoreName?: string;

		/**
		 * If this instruction includes a combining function, this is the name of the
		 * CombineValues instruction lifted into this instruction.
		 */
		originalCombineValuesStepName?: string;

		/** Zero or more side inputs. */
		sideInputs?: Array<SideInputInfo>;

		/** The value combining function to invoke. */
		valueCombiningFn?: {[id: string]: any };
	}


	/**
	 * An instruction that reads records.
	 * Takes no inputs, produces one output.
	 */
	export interface ReadInstruction {

		/** A source that records can be read and decoded from. */
		source?: Source;
	}


	/**
	 * An instruction that writes records.
	 * Takes one input, produces no outputs.
	 */
	export interface WriteInstruction {

		/**
		 * An input of an instruction, as a reference to an output of a
		 * producer instruction.
		 */
		input?: InstructionInput;

		/** A sink that records can be encoded and written to. */
		sink?: Sink;
	}


	/** A sink that records can be encoded and written to. */
	export interface Sink {

		/** The codec to use to encode data written to the sink. */
		codec?: {[id: string]: any };

		/** The sink to write to, plus its parameters. */
		spec?: {[id: string]: any };
	}


	/** Describes a particular function to invoke. */
	export interface SeqMapTask {

		/** Information about each of the inputs. */
		inputs?: Array<SideInputInfo>;

		/** The user-provided name of the SeqDo operation. */
		name?: string;

		/** Information about each of the outputs. */
		outputInfos?: Array<SeqMapTaskOutputInfo>;

		/**
		 * System-defined name of the stage containing the SeqDo operation.
		 * Unique across the workflow.
		 */
		stageName?: string;

		/**
		 * System-defined name of the SeqDo operation.
		 * Unique across the workflow.
		 */
		systemName?: string;

		/** The user function to invoke. */
		userFn?: {[id: string]: any };
	}


	/** Information about an output of a SeqMapTask. */
	export interface SeqMapTaskOutputInfo {

		/** A sink that records can be encoded and written to. */
		sink?: Sink;

		/** The id of the TupleTag the user code will tag the output value by. */
		tag?: string;
	}


	/** A task which consists of a shell command for the worker to execute. */
	export interface ShellTask {

		/** The shell command to run. */
		command?: string;

		/** Exit code for the task. */
		exitCode?: number;
	}


	/**
	 * A work item that represents the different operations that can be
	 * performed on a user-defined Source specification.
	 */
	export interface SourceOperationRequest {

		/** A request to compute the SourceMetadata of a Source. */
		getMetadata?: SourceGetMetadataRequest;

		/** User-provided name of the Read instruction for this source. */
		name?: string;

		/**
		 * System-defined name for the Read instruction for this source
		 * in the original workflow graph.
		 */
		originalName?: string;

		/**
		 * Represents the operation to split a high-level Source specification
		 * into bundles (parts for parallel processing).
		 * At a high level, splitting of a source into bundles happens as follows:
		 * SourceSplitRequest is applied to the source. If it returns
		 * SOURCE_SPLIT_OUTCOME_USE_CURRENT, no further splitting happens and the source
		 * is used "as is". Otherwise, splitting is applied recursively to each
		 * produced DerivedSource.
		 * As an optimization, for any Source, if its does_not_need_splitting is
		 * true, the framework assumes that splitting this source would return
		 * SOURCE_SPLIT_OUTCOME_USE_CURRENT, and doesn't initiate a SourceSplitRequest.
		 * This applies both to the initial source being split and to bundles
		 * produced from it.
		 */
		split?: SourceSplitRequest;

		/**
		 * System-defined name of the stage containing the source operation.
		 * Unique across the workflow.
		 */
		stageName?: string;

		/**
		 * System-defined name of the Read instruction for this source.
		 * Unique across the workflow.
		 */
		systemName?: string;
	}


	/** A request to compute the SourceMetadata of a Source. */
	export interface SourceGetMetadataRequest {

		/** A source that records can be read and decoded from. */
		source?: Source;
	}


	/**
	 * Represents the operation to split a high-level Source specification
	 * into bundles (parts for parallel processing).
	 * At a high level, splitting of a source into bundles happens as follows:
	 * SourceSplitRequest is applied to the source. If it returns
	 * SOURCE_SPLIT_OUTCOME_USE_CURRENT, no further splitting happens and the source
	 * is used "as is". Otherwise, splitting is applied recursively to each
	 * produced DerivedSource.
	 * As an optimization, for any Source, if its does_not_need_splitting is
	 * true, the framework assumes that splitting this source would return
	 * SOURCE_SPLIT_OUTCOME_USE_CURRENT, and doesn't initiate a SourceSplitRequest.
	 * This applies both to the initial source being split and to bundles
	 * produced from it.
	 */
	export interface SourceSplitRequest {

		/**
		 * Hints for splitting a Source into bundles (parts for parallel
		 * processing) using SourceSplitRequest.
		 */
		options?: SourceSplitOptions;

		/** A source that records can be read and decoded from. */
		source?: Source;
	}


	/**
	 * Hints for splitting a Source into bundles (parts for parallel
	 * processing) using SourceSplitRequest.
	 */
	export interface SourceSplitOptions {

		/**
		 * The source should be split into a set of bundles where the estimated size
		 * of each is approximately this many bytes.
		 */
		desiredBundleSizeBytes?: string;

		/** DEPRECATED in favor of desired_bundle_size_bytes. */
		desiredShardSizeBytes?: string;
	}


	/**
	 * A task which describes what action should be performed for the specified
	 * streaming computation ranges.
	 */
	export interface StreamingComputationTask {

		/** Contains ranges of a streaming computation this task should apply to. */
		computationRanges?: Array<StreamingComputationRanges>;

		/** Describes the set of data disks this task should apply to. */
		dataDisks?: Array<MountedDataDisk>;

		/** A type of streaming computation task. */
		taskType?: StreamingComputationTaskTaskType;
	}


	/**
	 * Describes full or partial data disk assignment information of the computation
	 * ranges.
	 */
	export interface StreamingComputationRanges {

		/** The ID of the computation. */
		computationId?: string;

		/** Data disk assignments for ranges from this computation. */
		rangeAssignments?: Array<KeyRangeDataDiskAssignment>;
	}


	/** Describes mounted data disk. */
	export interface MountedDataDisk {

		/**
		 * The name of the data disk.
		 * This name is local to the Google Cloud Platform project and uniquely
		 * identifies the disk within that project, for example
		 * "myproject-1014-104817-4c2-harness-0-disk-1".
		 */
		dataDisk?: string;
	}

	export enum StreamingComputationTaskTaskType { STREAMING_COMPUTATION_TASK_UNKNOWN = 0, STREAMING_COMPUTATION_TASK_STOP = 1, STREAMING_COMPUTATION_TASK_START = 2 }


	/** A task that carries configuration information for streaming computations. */
	export interface StreamingConfigTask {

		/** Chunk size for commit streams from the harness to windmill. */
		commitStreamChunkSizeBytes?: string;

		/** Chunk size for get data streams from the harness to windmill. */
		getDataStreamChunkSizeBytes?: string;

		/** Maximum size for work item commit supported windmill storage layer. */
		maxWorkItemCommitBytes?: string;

		/** Set of computation configuration information. */
		streamingComputationConfigs?: Array<StreamingComputationConfig>;

		/** Map from user step names to state families. */
		userStepToStateFamilyNameMap?: {[id: string]: string };

		/**
		 * If present, the worker must use this endpoint to communicate with Windmill
		 * Service dispatchers, otherwise the worker must continue to use whatever
		 * endpoint it had been using.
		 */
		windmillServiceEndpoint?: string;

		/**
		 * If present, the worker must use this port to communicate with Windmill
		 * Service dispatchers. Only applicable when windmill_service_endpoint is
		 * specified.
		 */
		windmillServicePort?: string;
	}


	/** Configuration information for a single streaming computation. */
	export interface StreamingComputationConfig {

		/** Unique identifier for this computation. */
		computationId?: string;

		/** Instructions that comprise the computation. */
		instructions?: Array<ParallelInstruction>;

		/** Stage name of this computation. */
		stageName?: string;

		/** System defined name for this computation. */
		systemName?: string;

		/**
		 * Map from user name of stateful transforms in this stage to their state
		 * family.
		 */
		transformUserNameToStateFamily?: {[id: string]: string };
	}


	/** A task which initializes part of a streaming Dataflow job. */
	export interface StreamingSetupTask {

		/** The user has requested drain. */
		drain?: boolean;

		/**
		 * The TCP port on which the worker should listen for messages from
		 * other streaming computation workers.
		 */
		receiveWorkPort?: number;

		/** Streaming appliance snapshot configuration. */
		snapshotConfig?: StreamingApplianceSnapshotConfig;

		/**
		 * Global topology of the streaming Dataflow job, including all
		 * computations and their sharded locations.
		 */
		streamingComputationTopology?: TopologyConfig;

		/**
		 * The TCP port used by the worker to communicate with the Dataflow
		 * worker harness.
		 */
		workerHarnessPort?: number;
	}


	/** Streaming appliance snapshot configuration. */
	export interface StreamingApplianceSnapshotConfig {

		/** Indicates which endpoint is used to import appliance state. */
		importStateEndpoint?: string;

		/** If set, indicates the snapshot id for the snapshot being performed. */
		snapshotId?: string;
	}


	/**
	 * Global topology of the streaming Dataflow job, including all
	 * computations and their sharded locations.
	 */
	export interface TopologyConfig {

		/** The computations associated with a streaming Dataflow job. */
		computations?: Array<ComputationTopology>;

		/** The disks assigned to a streaming Dataflow job. */
		dataDiskAssignments?: Array<DataDiskAssignment>;

		/** The size (in bits) of keys that will be assigned to source messages. */
		forwardingKeyBits?: number;

		/** Version number for persistent state. */
		persistentStateVersion?: number;

		/** Maps user stage names to stable computation names. */
		userStageToComputationNameMap?: {[id: string]: string };
	}


	/** Response to a request to list job messages. */
	export interface ListJobMessagesResponse {

		/** Autoscaling events in ascending timestamp order. */
		autoscalingEvents?: Array<AutoscalingEvent>;

		/** Messages in ascending timestamp order. */
		jobMessages?: Array<JobMessage>;

		/** The token to obtain the next page of results if there are more. */
		nextPageToken?: string;
	}


	/**
	 * Response to a request to list Cloud Dataflow jobs in a project. This might
	 * be a partial response, depending on the page size in the ListJobsRequest.
	 * However, if the project does not have any jobs, an instance of
	 * ListJobsResponse is not returned and the requests's response
	 * body is empty {}.
	 */
	export interface ListJobsResponse {

		/**
		 * Zero or more messages describing the [regional endpoints]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * failed to respond.
		 */
		failedLocation?: Array<FailedLocation>;

		/** A subset of the requested job information. */
		jobs?: Array<Job>;

		/** Set if there may be more results than fit in this response. */
		nextPageToken?: string;
	}


	/** List of snapshots. */
	export interface ListSnapshotsResponse {

		/** Returned snapshots. */
		snapshots?: Array<Snapshot>;
	}


	/** Represents a snapshot of a job. */
	export interface Snapshot {

		/** The time this snapshot was created. */
		creationTime?: string;

		/** User specified description of the snapshot. Maybe empty. */
		description?: string;

		/**
		 * The disk byte size of the snapshot. Only available for snapshots in READY
		 * state.
		 */
		diskSizeBytes?: string;

		/** The unique ID of this snapshot. */
		id?: string;

		/** The project this snapshot belongs to. */
		projectId?: string;

		/** PubSub snapshot metadata. */
		pubsubMetadata?: Array<PubsubSnapshotMetadata>;

		/** The job this snapshot was created from. */
		sourceJobId?: string;

		/** State of the snapshot. */
		state?: SnapshotState;

		/** The time after which this snapshot will be automatically deleted. */
		ttl?: string;
	}


	/** Represents a Pubsub snapshot. */
	export interface PubsubSnapshotMetadata {

		/** The expire time of the Pubsub snapshot. */
		expireTime?: string;

		/** The name of the Pubsub snapshot. */
		snapshotName?: string;

		/** The name of the Pubsub topic. */
		topicName?: string;
	}

	export enum SnapshotState { UNKNOWN_SNAPSHOT_STATE = 0, PENDING = 1, RUNNING = 2, READY = 3, FAILED = 4, DELETED = 5 }


	/**
	 * Information about the memory usage of a worker or a container within a
	 * worker.
	 */
	export interface MemInfo {

		/** Instantenous memory limit in bytes. */
		currentLimitBytes?: string;

		/** Instantenous memory (RSS) size in bytes. */
		currentRssBytes?: string;

		/** Timestamp of the measurement. */
		timestamp?: string;

		/** Total memory (RSS) usage since start up in GB * ms. */
		totalGbMs?: string;
	}


	/**
	 * The metric short id is returned to the user alongside an offset into
	 * ReportWorkItemStatusRequest
	 */
	export interface MetricShortId {

		/**
		 * The index of the corresponding metric in
		 * the ReportWorkItemStatusRequest. Required.
		 */
		metricIndex?: number;

		/** The service-generated short identifier for the metric. */
		shortId?: string;
	}


	/** Request to report the status of WorkItems. */
	export interface ReportWorkItemStatusRequest {

		/** The current timestamp at the worker. */
		currentWorkerTime?: string;

		/**
		 * The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * contains the WorkItem's job.
		 */
		location?: string;

		/** Untranslated bag-of-bytes WorkProgressUpdateRequest from UnifiedWorker. */
		unifiedWorkerRequest?: {[id: string]: any };

		/**
		 * The order is unimportant, except that the order of the
		 * WorkItemServiceState messages in the ReportWorkItemStatusResponse
		 * corresponds to the order of WorkItemStatus messages here.
		 */
		workItemStatuses?: Array<WorkItemStatus>;

		/**
		 * The ID of the worker reporting the WorkItem status.  If this
		 * does not match the ID of the worker which the Dataflow service
		 * believes currently has the lease on the WorkItem, the report
		 * will be dropped (with an error response).
		 */
		workerId?: string;
	}


	/** Conveys a worker's progress through the work described by a WorkItem. */
	export interface WorkItemStatus {

		/** True if the WorkItem was completed (successfully or unsuccessfully). */
		completed?: boolean;

		/** Worker output counters for this WorkItem. */
		counterUpdates?: Array<CounterUpdate>;

		/**
		 * When a task splits using WorkItemStatus.dynamic_source_split, this
		 * message describes the two parts of the split relative to the
		 * description of the current task's input.
		 */
		dynamicSourceSplit?: DynamicSourceSplit;

		/**
		 * Specifies errors which occurred during processing.  If errors are
		 * provided, and completed = true, then the WorkItem is considered
		 * to have failed.
		 */
		errors?: Array<Status>;

		/** DEPRECATED in favor of counter_updates. */
		metricUpdates?: Array<MetricUpdate>;

		/** Obsolete in favor of ApproximateReportedProgress and ApproximateSplitRequest. */
		progress?: ApproximateProgress;

		/**
		 * The report index.  When a WorkItem is leased, the lease will
		 * contain an initial report index.  When a WorkItem's status is
		 * reported to the system, the report should be sent with
		 * that report index, and the response will contain the index the
		 * worker should use for the next report.  Reports received with
		 * unexpected index values will be rejected by the service.
		 * In order to preserve idempotency, the worker should not alter the
		 * contents of a report, even if the worker must submit the same
		 * report multiple times before getting back a response.  The worker
		 * should not submit a subsequent report until the response for the
		 * previous report had been received from the service.
		 */
		reportIndex?: string;

		/** A progress measurement of a WorkItem by a worker. */
		reportedProgress?: ApproximateReportedProgress;

		/** Amount of time the worker requests for its lease. */
		requestedLeaseDuration?: string;

		/** DEPRECATED in favor of DynamicSourceSplit. */
		sourceFork?: SourceFork;

		/**
		 * The result of a SourceOperationRequest, specified in
		 * ReportWorkItemStatusRequest.source_operation when the work item
		 * is completed.
		 */
		sourceOperationResponse?: SourceOperationResponse;

		/**
		 * Position defines a position within a collection of data.  The value
		 * can be either the end position, a key (used with ordered
		 * collections), a byte offset, or a record index.
		 */
		stopPosition?: Position;

		/** Total time the worker spent being throttled by external systems. */
		totalThrottlerWaitTimeSeconds?: number;

		/** Identifies the WorkItem. */
		workItemId?: string;
	}


	/** DEPRECATED in favor of DynamicSourceSplit. */
	export interface SourceFork {

		/** DEPRECATED in favor of DerivedSource. */
		primary?: SourceSplitShard;

		/**
		 * Specification of one of the bundles produced as a result of splitting
		 * a Source (e.g. when executing a SourceSplitRequest, or when
		 * splitting an active task using WorkItemStatus.dynamic_source_split),
		 * relative to the source being split.
		 */
		primarySource?: DerivedSource;

		/** DEPRECATED in favor of DerivedSource. */
		residual?: SourceSplitShard;

		/**
		 * Specification of one of the bundles produced as a result of splitting
		 * a Source (e.g. when executing a SourceSplitRequest, or when
		 * splitting an active task using WorkItemStatus.dynamic_source_split),
		 * relative to the source being split.
		 */
		residualSource?: DerivedSource;
	}


	/** DEPRECATED in favor of DerivedSource. */
	export interface SourceSplitShard {

		/** DEPRECATED */
		derivationMode?: DerivedSourceDerivationMode;

		/** A source that records can be read and decoded from. */
		source?: Source;
	}


	/**
	 * The result of a SourceOperationRequest, specified in
	 * ReportWorkItemStatusRequest.source_operation when the work item
	 * is completed.
	 */
	export interface SourceOperationResponse {

		/** The result of a SourceGetMetadataOperation. */
		getMetadata?: SourceGetMetadataResponse;

		/** The response to a SourceSplitRequest. */
		split?: SourceSplitResponse;
	}


	/** The result of a SourceGetMetadataOperation. */
	export interface SourceGetMetadataResponse {

		/**
		 * Metadata about a Source useful for automatically optimizing
		 * and tuning the pipeline, etc.
		 */
		metadata?: SourceMetadata;
	}


	/** The response to a SourceSplitRequest. */
	export interface SourceSplitResponse {

		/**
		 * If outcome is SPLITTING_HAPPENED, then this is a list of bundles
		 * into which the source was split. Otherwise this field is ignored.
		 * This list can be empty, which means the source represents an empty input.
		 */
		bundles?: Array<DerivedSource>;

		/**
		 * Indicates whether splitting happened and produced a list of bundles.
		 * If this is USE_CURRENT_SOURCE_AS_IS, the current source should
		 * be processed "as is" without splitting. "bundles" is ignored in this case.
		 * If this is SPLITTING_HAPPENED, then "bundles" contains a list of
		 * bundles into which the source was split.
		 */
		outcome?: SourceSplitResponseOutcome;

		/** DEPRECATED in favor of bundles. */
		shards?: Array<SourceSplitShard>;
	}

	export enum SourceSplitResponseOutcome { SOURCE_SPLIT_OUTCOME_UNKNOWN = 0, SOURCE_SPLIT_OUTCOME_USE_CURRENT = 1, SOURCE_SPLIT_OUTCOME_SPLITTING_HAPPENED = 2 }


	/** Response from a request to report the status of WorkItems. */
	export interface ReportWorkItemStatusResponse {

		/** Untranslated bag-of-bytes WorkProgressUpdateResponse for UnifiedWorker. */
		unifiedWorkerResponse?: {[id: string]: any };

		/**
		 * A set of messages indicating the service-side state for each
		 * WorkItem whose status was reported, in the same order as the
		 * WorkItemStatus messages in the ReportWorkItemStatusRequest which
		 * resulting in this response.
		 */
		workItemServiceStates?: Array<WorkItemServiceState>;
	}


	/**
	 * The Dataflow service's idea of the current state of a WorkItem
	 * being processed by a worker.
	 */
	export interface WorkItemServiceState {

		/**
		 * Other data returned by the service, specific to the particular
		 * worker harness.
		 */
		harnessData?: {[id: string]: any };

		/** Proto describing a hot key detected on a given WorkItem. */
		hotKeyDetection?: HotKeyDetection;

		/** Time at which the current lease will expire. */
		leaseExpireTime?: string;

		/**
		 * The short ids that workers should use in subsequent metric updates.
		 * Workers should strive to use short ids whenever possible, but it is ok
		 * to request the short_id again if a worker lost track of it
		 * (e.g. if the worker is recovering from a crash).
		 * NOTE: it is possible that the response may have short ids for a subset
		 * of the metrics.
		 */
		metricShortId?: Array<MetricShortId>;

		/**
		 * The index value to use for the next report sent by the worker.
		 * Note: If the report call fails for whatever reason, the worker should
		 * reuse this index for subsequent report attempts.
		 */
		nextReportIndex?: string;

		/** New recommended reporting interval. */
		reportStatusInterval?: string;

		/** A suggestion by the service to the worker to dynamically split the WorkItem. */
		splitRequest?: ApproximateSplitRequest;

		/** Obsolete in favor of ApproximateReportedProgress and ApproximateSplitRequest. */
		suggestedStopPoint?: ApproximateProgress;

		/**
		 * Position defines a position within a collection of data.  The value
		 * can be either the end position, a key (used with ordered
		 * collections), a byte offset, or a record index.
		 */
		suggestedStopPosition?: Position;
	}


	/**
	 * Worker metrics exported from workers. This contains resource utilization
	 * metrics accumulated from a variety of sources. For more information, see
	 * go/df-resource-signals.
	 */
	export interface ResourceUtilizationReport {

		/**
		 * Per container information.
		 * Key: container name.
		 */
		containers?: {[id: string]: ResourceUtilizationReport };

		/** CPU utilization samples. */
		cpuTime?: Array<CPUTime>;

		/** Memory utilization samples. */
		memoryInfo?: Array<MemInfo>;
	}


	/** Service-side response to WorkerMessage reporting resource utilization. */
	export interface ResourceUtilizationReportResponse {
	}


	/** Request to send encoded debug information. */
	export interface SendDebugCaptureRequest {

		/** The internal component id for which debug information is sent. */
		componentId?: string;

		/** The encoded debug information. */
		data?: string;

		/**
		 * The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * contains the job specified by job_id.
		 */
		location?: string;

		/** The worker id, i.e., VM hostname. */
		workerId?: string;
	}


	/**
	 * Response to a send capture request.
	 * nothing
	 */
	export interface SendDebugCaptureResponse {
	}


	/** A request for sending worker messages to the service. */
	export interface SendWorkerMessagesRequest {

		/**
		 * The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * contains the job.
		 */
		location?: string;

		/** The WorkerMessages to send. */
		workerMessages?: Array<WorkerMessage>;
	}


	/** WorkerMessage provides information to the backend about a worker. */
	export interface WorkerMessage {

		/**
		 * Labels are used to group WorkerMessages.
		 * For example, a worker_message about a particular container
		 * might have the labels:
		 * { "JOB_ID": "2015-04-22",
		 * "WORKER_ID": "wordcount-vm-2015…"
		 * "CONTAINER_TYPE": "worker",
		 * "CONTAINER_ID": "ac1234def"}
		 * Label tags typically correspond to Label enum values. However, for ease
		 * of development other strings can be used as tags. LABEL_UNSPECIFIED should
		 * not be used here.
		 */
		labels?: {[id: string]: string };

		/** The timestamp of the worker_message. */
		time?: string;

		/**
		 * WorkerHealthReport contains information about the health of a worker.
		 * The VM should be identified by the labels attached to the WorkerMessage that
		 * this health ping belongs to.
		 */
		workerHealthReport?: WorkerHealthReport;

		/**
		 * A report of an event in a worker's lifecycle.
		 * The proto contains one event, because the worker is expected to
		 * asynchronously send each message immediately after the event.
		 * Due to this asynchrony, messages may arrive out of order (or missing), and it
		 * is up to the consumer to interpret.
		 * The timestamp of the event is in the enclosing WorkerMessage proto.
		 */
		workerLifecycleEvent?: WorkerLifecycleEvent;

		/**
		 * A message code is used to report status and error messages to the service.
		 * The message codes are intended to be machine readable. The service will
		 * take care of translating these into user understandable messages if
		 * necessary.
		 * Example use cases:
		 * 1. Worker processes reporting successful startup.
		 * 2. Worker processes reporting specific errors (e.g. package staging
		 * failure).
		 */
		workerMessageCode?: WorkerMessageCode;

		/**
		 * Worker metrics exported from workers. This contains resource utilization
		 * metrics accumulated from a variety of sources. For more information, see
		 * go/df-resource-signals.
		 */
		workerMetrics?: ResourceUtilizationReport;

		/**
		 * Shutdown notification from workers. This is to be sent by the shutdown
		 * script of the worker VM so that the backend knows that the VM is being
		 * shut down.
		 */
		workerShutdownNotice?: WorkerShutdownNotice;
	}


	/**
	 * WorkerHealthReport contains information about the health of a worker.
	 * The VM should be identified by the labels attached to the WorkerMessage that
	 * this health ping belongs to.
	 */
	export interface WorkerHealthReport {

		/** A message describing any unusual health reports. */
		msg?: string;

		/**
		 * The pods running on the worker. See:
		 * http://kubernetes.io/v1.1/docs/api-reference/v1/definitions.html#_v1_pod
		 * This field is used by the worker to send the status of the indvidual
		 * containers running on each worker.
		 */
		pods?: Array<string>;

		/**
		 * The interval at which the worker is sending health reports.
		 * The default value of 0 should be interpreted as the field is not being
		 * explicitly set by the worker.
		 */
		reportInterval?: string;

		/**
		 * Whether the VM is in a permanently broken state.
		 * Broken VMs should be abandoned or deleted ASAP to avoid assigning or
		 * completing any work.
		 */
		vmIsBroken?: boolean;

		/** Whether the VM is currently healthy. */
		vmIsHealthy?: boolean;

		/** The time the VM was booted. */
		vmStartupTime?: string;
	}


	/**
	 * A report of an event in a worker's lifecycle.
	 * The proto contains one event, because the worker is expected to
	 * asynchronously send each message immediately after the event.
	 * Due to this asynchrony, messages may arrive out of order (or missing), and it
	 * is up to the consumer to interpret.
	 * The timestamp of the event is in the enclosing WorkerMessage proto.
	 */
	export interface WorkerLifecycleEvent {

		/**
		 * The start time of this container. All events will report this so that
		 * events can be grouped together across container/VM restarts.
		 */
		containerStartTime?: string;

		/** The event being reported. */
		event?: WorkerLifecycleEventEvent;

		/**
		 * Other stats that can accompany an event. E.g.
		 * { "downloaded_bytes" : "123456" }
		 */
		metadata?: {[id: string]: string };
	}

	export enum WorkerLifecycleEventEvent { UNKNOWN_EVENT = 0, OS_START = 1, CONTAINER_START = 2, NETWORK_UP = 3, STAGING_FILES_DOWNLOAD_START = 4, STAGING_FILES_DOWNLOAD_FINISH = 5, SDK_INSTALL_START = 6, SDK_INSTALL_FINISH = 7 }


	/**
	 * A message code is used to report status and error messages to the service.
	 * The message codes are intended to be machine readable. The service will
	 * take care of translating these into user understandable messages if
	 * necessary.
	 * Example use cases:
	 *   1. Worker processes reporting successful startup.
	 *   2. Worker processes reporting specific errors (e.g. package staging
	 *      failure).
	 */
	export interface WorkerMessageCode {

		/**
		 * The code is a string intended for consumption by a machine that identifies
		 * the type of message being sent.
		 * Examples:
		 * 1. "HARNESS_STARTED" might be used to indicate the worker harness has
		 * started.
		 * 2. "GCS_DOWNLOAD_ERROR" might be used to indicate an error downloading
		 * a GCS file as part of the boot process of one of the worker containers.
		 * This is a string and not an enum to make it easy to add new codes without
		 * waiting for an API change.
		 */
		code?: string;

		/**
		 * Parameters contains specific information about the code.
		 * This is a struct to allow parameters of different types.
		 * Examples:
		 * 1. For a "HARNESS_STARTED" message parameters might provide the name
		 * of the worker and additional data like timing information.
		 * 2. For a "GCS_DOWNLOAD_ERROR" parameters might contain fields listing
		 * the GCS objects being downloaded and fields containing errors.
		 * In general complex data structures should be avoided. If a worker
		 * needs to send a specific and complicated data structure then please
		 * consider defining a new proto and adding it to the data oneof in
		 * WorkerMessageResponse.
		 * Conventions:
		 * Parameters should only be used for information that isn't typically passed
		 * as a label.
		 * hostname and other worker identifiers should almost always be passed
		 * as labels since they will be included on most messages.
		 */
		parameters?: {[id: string]: any };
	}


	/**
	 * Shutdown notification from workers. This is to be sent by the shutdown
	 * script of the worker VM so that the backend knows that the VM is being
	 * shut down.
	 */
	export interface WorkerShutdownNotice {

		/**
		 * The reason for the worker shutdown.
		 * Current possible values are:
		 * "UNKNOWN": shutdown reason is unknown.
		 * "PREEMPTION": shutdown reason is preemption.
		 * Other possible reasons may be added in the future.
		 */
		reason?: string;
	}


	/** The response to the worker messages. */
	export interface SendWorkerMessagesResponse {

		/** The servers response to the worker messages. */
		workerMessageResponses?: Array<WorkerMessageResponse>;
	}


	/**
	 * A worker_message response allows the server to pass information to the
	 * sender.
	 */
	export interface WorkerMessageResponse {

		/**
		 * WorkerHealthReportResponse contains information returned to the worker
		 * in response to a health ping.
		 */
		workerHealthReportResponse?: WorkerHealthReportResponse;

		/** Service-side response to WorkerMessage reporting resource utilization. */
		workerMetricsResponse?: ResourceUtilizationReportResponse;

		/** Service-side response to WorkerMessage issuing shutdown notice. */
		workerShutdownNoticeResponse?: WorkerShutdownNoticeResponse;
	}


	/**
	 * WorkerHealthReportResponse contains information returned to the worker
	 * in response to a health ping.
	 */
	export interface WorkerHealthReportResponse {

		/**
		 * A positive value indicates the worker should change its reporting interval
		 * to the specified value.
		 * The default value of zero means no change in report rate is requested by
		 * the server.
		 */
		reportInterval?: string;
	}


	/** Service-side response to WorkerMessage issuing shutdown notice. */
	export interface WorkerShutdownNoticeResponse {
	}


	/** Request to create a snapshot of a job. */
	export interface SnapshotJobRequest {

		/** User specified description of the snapshot. Maybe empty. */
		description?: string;

		/** The location that contains this job. */
		location?: string;

		/** If true, perform snapshots for sources which support this. */
		snapshotSources?: boolean;

		/** TTL for the snapshot. */
		ttl?: string;
	}


	/** Response to the validation request. */
	export interface ValidateResponse {

		/** Will be empty if validation succeeds. */
		errorMessage?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Send a worker_message to the service.
		 * Post v1b3/projects/{projectId}/WorkerMessages
		 * @param {string} projectId The project to send the WorkerMessages to.
		 * @return {void} Successful response
		 */
		Dataflow_projects_workerMessages(projectId: string, requestBody: SendWorkerMessagesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/WorkerMessages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List the jobs of a project.
		 * To list the jobs of a project in a region, we recommend using
		 * `projects.locations.jobs.get` with a [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To
		 * list the all jobs across all regions, use `projects.jobs.aggregated`. Using
		 * `projects.jobs.list` is not recommended, as you can only get the list of
		 * jobs that are running in `us-central1`.
		 * Get v1b3/projects/{projectId}/jobs
		 * @param {string} projectId The project which owns the jobs.
		 * @param {Dataflow_projects_jobs_listFilter} filter The kind of filter to use.
		 * @param {string} location The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * contains this job.
		 * @param {number} pageSize If there are many jobs, limit response to at most this many.
		 * The actual number of jobs returned will be the lesser of max_responses
		 * and an unspecified server-defined limit.
		 * @param {string} pageToken Set this to the 'next_page_token' field of a previous response
		 * to request additional results in a long list.
		 * @param {Dataflow_projects_jobs_listView} view Level of information requested in response. Default is `JOB_VIEW_SUMMARY`.
		 * @return {void} Successful response
		 */
		Dataflow_projects_jobs_list(projectId: string, filter: Dataflow_projects_jobs_listFilter, location: string, pageSize: number, pageToken: string, view: Dataflow_projects_jobs_listView): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs&filter=' + filter + '&location=' + (location == null ? '' : encodeURIComponent(location)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a Cloud Dataflow job.
		 * To create a job, we recommend using `projects.locations.jobs.create` with a
		 * [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using
		 * `projects.jobs.create` is not recommended, as your job will always start
		 * in `us-central1`.
		 * Post v1b3/projects/{projectId}/jobs
		 * @param {string} projectId The ID of the Cloud Platform project that the job belongs to.
		 * @param {string} location The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * contains this job.
		 * @param {string} replaceJobId Deprecated. This field is now in the Job message.
		 * @param {Dataflow_projects_jobs_listView} view The level of information requested in response.
		 * @return {void} Successful response
		 */
		Dataflow_projects_jobs_create(projectId: string, location: string, replaceJobId: string, view: Dataflow_projects_jobs_listView, requestBody: Job): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs&location=' + (location == null ? '' : encodeURIComponent(location)) + '&replaceJobId=' + (replaceJobId == null ? '' : encodeURIComponent(replaceJobId)) + '&view=' + view, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the state of the specified Cloud Dataflow job.
		 * To get the state of a job, we recommend using `projects.locations.jobs.get`
		 * with a [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using
		 * `projects.jobs.get` is not recommended, as you can only get the state of
		 * jobs that are running in `us-central1`.
		 * Get v1b3/projects/{projectId}/jobs/{jobId}
		 * @param {string} projectId The ID of the Cloud Platform project that the job belongs to.
		 * @param {string} jobId The job ID.
		 * @param {string} location The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * contains this job.
		 * @param {Dataflow_projects_jobs_listView} view The level of information requested in response.
		 * @return {void} Successful response
		 */
		Dataflow_projects_jobs_get(projectId: string, jobId: string, location: string, view: Dataflow_projects_jobs_listView): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&location=' + (location == null ? '' : encodeURIComponent(location)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the state of an existing Cloud Dataflow job.
		 * To update the state of an existing job, we recommend using
		 * `projects.locations.jobs.update` with a [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using
		 * `projects.jobs.update` is not recommended, as you can only update the state
		 * of jobs that are running in `us-central1`.
		 * Put v1b3/projects/{projectId}/jobs/{jobId}
		 * @param {string} projectId The ID of the Cloud Platform project that the job belongs to.
		 * @param {string} jobId The job ID.
		 * @param {string} location The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * contains this job.
		 * @return {void} Successful response
		 */
		Dataflow_projects_jobs_update(projectId: string, jobId: string, location: string, requestBody: Job): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&location=' + (location == null ? '' : encodeURIComponent(location)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get encoded debug configuration for component. Not cacheable.
		 * Post v1b3/projects/{projectId}/jobs/{jobId}/debug/getConfig
		 * @param {string} projectId The project id.
		 * @param {string} jobId The job id.
		 * @return {void} Successful response
		 */
		Dataflow_projects_jobs_debug_getConfig(projectId: string, jobId: string, requestBody: GetDebugConfigRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/debug/getConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Send encoded debug capture data for component.
		 * Post v1b3/projects/{projectId}/jobs/{jobId}/debug/sendCapture
		 * @param {string} projectId The project id.
		 * @param {string} jobId The job id.
		 * @return {void} Successful response
		 */
		Dataflow_projects_jobs_debug_sendCapture(projectId: string, jobId: string, requestBody: SendDebugCaptureRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/debug/sendCapture', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request the job status.
		 * To request the status of a job, we recommend using
		 * `projects.locations.jobs.messages.list` with a [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using
		 * `projects.jobs.messages.list` is not recommended, as you can only request
		 * the status of jobs that are running in `us-central1`.
		 * Get v1b3/projects/{projectId}/jobs/{jobId}/messages
		 * @param {string} projectId A project id.
		 * @param {string} jobId The job to get messages about.
		 * @param {string} endTime Return only messages with timestamps < end_time. The default is now
		 * (i.e. return up to the latest messages available).
		 * @param {string} location The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * contains the job specified by job_id.
		 * @param {JobMessageMessageImportance} minimumImportance Filter to only get messages with importance >= level
		 * @param {number} pageSize If specified, determines the maximum number of messages to
		 * return.  If unspecified, the service may choose an appropriate
		 * default, or may return an arbitrarily large number of results.
		 * @param {string} pageToken If supplied, this should be the value of next_page_token returned
		 * by an earlier call. This will cause the next page of results to
		 * be returned.
		 * @param {string} startTime If specified, return only messages with timestamps >= start_time.
		 * The default is the job creation time (i.e. beginning of messages).
		 * @return {void} Successful response
		 */
		Dataflow_projects_jobs_messages_list(projectId: string, jobId: string, endTime: string, location: string, minimumImportance: JobMessageMessageImportance, pageSize: number, pageToken: string, startTime: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/messages&endTime=' + (endTime == null ? '' : encodeURIComponent(endTime)) + '&location=' + (location == null ? '' : encodeURIComponent(location)) + '&minimumImportance=' + minimumImportance + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startTime=' + (startTime == null ? '' : encodeURIComponent(startTime)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request the job status.
		 * To request the status of a job, we recommend using
		 * `projects.locations.jobs.getMetrics` with a [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using
		 * `projects.jobs.getMetrics` is not recommended, as you can only request the
		 * status of jobs that are running in `us-central1`.
		 * Get v1b3/projects/{projectId}/jobs/{jobId}/metrics
		 * @param {string} projectId A project id.
		 * @param {string} jobId The job to get messages for.
		 * @param {string} location The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * contains the job specified by job_id.
		 * @param {string} startTime Return only metric data that has changed since this time.
		 * Default is to return all information about all metrics for the job.
		 * @return {void} Successful response
		 */
		Dataflow_projects_jobs_getMetrics(projectId: string, jobId: string, location: string, startTime: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/metrics&location=' + (location == null ? '' : encodeURIComponent(location)) + '&startTime=' + (startTime == null ? '' : encodeURIComponent(startTime)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Leases a dataflow WorkItem to run.
		 * Post v1b3/projects/{projectId}/jobs/{jobId}/workItems:lease
		 * @param {string} projectId Identifies the project this worker belongs to.
		 * @param {string} jobId Identifies the workflow job this worker belongs to.
		 * @return {void} Successful response
		 */
		Dataflow_projects_jobs_workItems_lease(projectId: string, jobId: string, requestBody: LeaseWorkItemRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/workItems:lease', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reports the status of dataflow WorkItems leased by a worker.
		 * Post v1b3/projects/{projectId}/jobs/{jobId}/workItems:reportStatus
		 * @param {string} projectId The project which owns the WorkItem's job.
		 * @param {string} jobId The job which the WorkItem is part of.
		 * @return {void} Successful response
		 */
		Dataflow_projects_jobs_workItems_reportStatus(projectId: string, jobId: string, requestBody: ReportWorkItemStatusRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/workItems:reportStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Snapshot the state of a streaming job.
		 * Post v1b3/projects/{projectId}/jobs/{jobId}:snapshot
		 * @param {string} projectId The project which owns the job to be snapshotted.
		 * @param {string} jobId The job to be snapshotted.
		 * @return {void} Successful response
		 */
		Dataflow_projects_jobs_snapshot(projectId: string, jobId: string, requestBody: SnapshotJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + ':snapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List the jobs of a project across all regions.
		 * Get v1b3/projects/{projectId}/jobs:aggregated
		 * @param {string} projectId The project which owns the jobs.
		 * @param {Dataflow_projects_jobs_listFilter} filter The kind of filter to use.
		 * @param {string} location The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * contains this job.
		 * @param {number} pageSize If there are many jobs, limit response to at most this many.
		 * The actual number of jobs returned will be the lesser of max_responses
		 * and an unspecified server-defined limit.
		 * @param {string} pageToken Set this to the 'next_page_token' field of a previous response
		 * to request additional results in a long list.
		 * @param {Dataflow_projects_jobs_listView} view Level of information requested in response. Default is `JOB_VIEW_SUMMARY`.
		 * @return {void} Successful response
		 */
		Dataflow_projects_jobs_aggregated(projectId: string, filter: Dataflow_projects_jobs_listFilter, location: string, pageSize: number, pageToken: string, view: Dataflow_projects_jobs_listView): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs:aggregated&filter=' + filter + '&location=' + (location == null ? '' : encodeURIComponent(location)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Send a worker_message to the service.
		 * Post v1b3/projects/{projectId}/locations/{location}/WorkerMessages
		 * @param {string} projectId The project to send the WorkerMessages to.
		 * @param {string} location The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * contains the job.
		 * @return {void} Successful response
		 */
		Dataflow_projects_locations_workerMessages(projectId: string, location: string, requestBody: SendWorkerMessagesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/WorkerMessages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Launch a job with a FlexTemplate.
		 * Post v1b3/projects/{projectId}/locations/{location}/flexTemplates:launch
		 * @param {string} projectId Required. The ID of the Cloud Platform project that the job belongs to.
		 * @param {string} location Required. The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to
		 * which to direct the request. E.g., us-central1, us-west1.
		 * @return {void} Successful response
		 */
		Dataflow_projects_locations_flexTemplates_launch(projectId: string, location: string, requestBody: LaunchFlexTemplateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/flexTemplates:launch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List the jobs of a project.
		 * To list the jobs of a project in a region, we recommend using
		 * `projects.locations.jobs.get` with a [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To
		 * list the all jobs across all regions, use `projects.jobs.aggregated`. Using
		 * `projects.jobs.list` is not recommended, as you can only get the list of
		 * jobs that are running in `us-central1`.
		 * Get v1b3/projects/{projectId}/locations/{location}/jobs
		 * @param {string} projectId The project which owns the jobs.
		 * @param {string} location The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * contains this job.
		 * @param {Dataflow_projects_jobs_listFilter} filter The kind of filter to use.
		 * @param {number} pageSize If there are many jobs, limit response to at most this many.
		 * The actual number of jobs returned will be the lesser of max_responses
		 * and an unspecified server-defined limit.
		 * @param {string} pageToken Set this to the 'next_page_token' field of a previous response
		 * to request additional results in a long list.
		 * @param {Dataflow_projects_jobs_listView} view Level of information requested in response. Default is `JOB_VIEW_SUMMARY`.
		 * @return {void} Successful response
		 */
		Dataflow_projects_locations_jobs_list(projectId: string, location: string, filter: Dataflow_projects_jobs_listFilter, pageSize: number, pageToken: string, view: Dataflow_projects_jobs_listView): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs&filter=' + filter + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a Cloud Dataflow job.
		 * To create a job, we recommend using `projects.locations.jobs.create` with a
		 * [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using
		 * `projects.jobs.create` is not recommended, as your job will always start
		 * in `us-central1`.
		 * Post v1b3/projects/{projectId}/locations/{location}/jobs
		 * @param {string} projectId The ID of the Cloud Platform project that the job belongs to.
		 * @param {string} location The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * contains this job.
		 * @param {string} replaceJobId Deprecated. This field is now in the Job message.
		 * @param {Dataflow_projects_jobs_listView} view The level of information requested in response.
		 * @return {void} Successful response
		 */
		Dataflow_projects_locations_jobs_create(projectId: string, location: string, replaceJobId: string, view: Dataflow_projects_jobs_listView, requestBody: Job): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs&replaceJobId=' + (replaceJobId == null ? '' : encodeURIComponent(replaceJobId)) + '&view=' + view, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the state of the specified Cloud Dataflow job.
		 * To get the state of a job, we recommend using `projects.locations.jobs.get`
		 * with a [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using
		 * `projects.jobs.get` is not recommended, as you can only get the state of
		 * jobs that are running in `us-central1`.
		 * Get v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}
		 * @param {string} projectId The ID of the Cloud Platform project that the job belongs to.
		 * @param {string} location The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * contains this job.
		 * @param {string} jobId The job ID.
		 * @param {Dataflow_projects_jobs_listView} view The level of information requested in response.
		 * @return {void} Successful response
		 */
		Dataflow_projects_locations_jobs_get(projectId: string, location: string, jobId: string, view: Dataflow_projects_jobs_listView): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the state of an existing Cloud Dataflow job.
		 * To update the state of an existing job, we recommend using
		 * `projects.locations.jobs.update` with a [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using
		 * `projects.jobs.update` is not recommended, as you can only update the state
		 * of jobs that are running in `us-central1`.
		 * Put v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}
		 * @param {string} projectId The ID of the Cloud Platform project that the job belongs to.
		 * @param {string} location The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * contains this job.
		 * @param {string} jobId The job ID.
		 * @return {void} Successful response
		 */
		Dataflow_projects_locations_jobs_update(projectId: string, location: string, jobId: string, requestBody: Job): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get encoded debug configuration for component. Not cacheable.
		 * Post v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/getConfig
		 * @param {string} projectId The project id.
		 * @param {string} location The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * contains the job specified by job_id.
		 * @param {string} jobId The job id.
		 * @return {void} Successful response
		 */
		Dataflow_projects_locations_jobs_debug_getConfig(projectId: string, location: string, jobId: string, requestBody: GetDebugConfigRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/debug/getConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Send encoded debug capture data for component.
		 * Post v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/sendCapture
		 * @param {string} projectId The project id.
		 * @param {string} location The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * contains the job specified by job_id.
		 * @param {string} jobId The job id.
		 * @return {void} Successful response
		 */
		Dataflow_projects_locations_jobs_debug_sendCapture(projectId: string, location: string, jobId: string, requestBody: SendDebugCaptureRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/debug/sendCapture', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request the job status.
		 * To request the status of a job, we recommend using
		 * `projects.locations.jobs.messages.list` with a [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using
		 * `projects.jobs.messages.list` is not recommended, as you can only request
		 * the status of jobs that are running in `us-central1`.
		 * Get v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/messages
		 * @param {string} projectId A project id.
		 * @param {string} location The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * contains the job specified by job_id.
		 * @param {string} jobId The job to get messages about.
		 * @param {string} endTime Return only messages with timestamps < end_time. The default is now
		 * (i.e. return up to the latest messages available).
		 * @param {JobMessageMessageImportance} minimumImportance Filter to only get messages with importance >= level
		 * @param {number} pageSize If specified, determines the maximum number of messages to
		 * return.  If unspecified, the service may choose an appropriate
		 * default, or may return an arbitrarily large number of results.
		 * @param {string} pageToken If supplied, this should be the value of next_page_token returned
		 * by an earlier call. This will cause the next page of results to
		 * be returned.
		 * @param {string} startTime If specified, return only messages with timestamps >= start_time.
		 * The default is the job creation time (i.e. beginning of messages).
		 * @return {void} Successful response
		 */
		Dataflow_projects_locations_jobs_messages_list(projectId: string, location: string, jobId: string, endTime: string, minimumImportance: JobMessageMessageImportance, pageSize: number, pageToken: string, startTime: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/messages&endTime=' + (endTime == null ? '' : encodeURIComponent(endTime)) + '&minimumImportance=' + minimumImportance + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startTime=' + (startTime == null ? '' : encodeURIComponent(startTime)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request the job status.
		 * To request the status of a job, we recommend using
		 * `projects.locations.jobs.getMetrics` with a [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using
		 * `projects.jobs.getMetrics` is not recommended, as you can only request the
		 * status of jobs that are running in `us-central1`.
		 * Get v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/metrics
		 * @param {string} projectId A project id.
		 * @param {string} location The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * contains the job specified by job_id.
		 * @param {string} jobId The job to get messages for.
		 * @param {string} startTime Return only metric data that has changed since this time.
		 * Default is to return all information about all metrics for the job.
		 * @return {void} Successful response
		 */
		Dataflow_projects_locations_jobs_getMetrics(projectId: string, location: string, jobId: string, startTime: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/metrics&startTime=' + (startTime == null ? '' : encodeURIComponent(startTime)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists snapshots.
		 * Get v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/snapshots
		 * @param {string} projectId The project ID to list snapshots for.
		 * @param {string} location The location to list snapshots in.
		 * @param {string} jobId If specified, list snapshots created from this job.
		 * @return {void} Successful response
		 */
		Dataflow_projects_locations_jobs_snapshots_list(projectId: string, location: string, jobId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/snapshots', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Leases a dataflow WorkItem to run.
		 * Post v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:lease
		 * @param {string} projectId Identifies the project this worker belongs to.
		 * @param {string} location The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * contains the WorkItem's job.
		 * @param {string} jobId Identifies the workflow job this worker belongs to.
		 * @return {void} Successful response
		 */
		Dataflow_projects_locations_jobs_workItems_lease(projectId: string, location: string, jobId: string, requestBody: LeaseWorkItemRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/workItems:lease', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reports the status of dataflow WorkItems leased by a worker.
		 * Post v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:reportStatus
		 * @param {string} projectId The project which owns the WorkItem's job.
		 * @param {string} location The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
		 * contains the WorkItem's job.
		 * @param {string} jobId The job which the WorkItem is part of.
		 * @return {void} Successful response
		 */
		Dataflow_projects_locations_jobs_workItems_reportStatus(projectId: string, location: string, jobId: string, requestBody: ReportWorkItemStatusRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/workItems:reportStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Snapshot the state of a streaming job.
		 * Post v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}:snapshot
		 * @param {string} projectId The project which owns the job to be snapshotted.
		 * @param {string} location The location that contains this job.
		 * @param {string} jobId The job to be snapshotted.
		 * @return {void} Successful response
		 */
		Dataflow_projects_locations_jobs_snapshot(projectId: string, location: string, jobId: string, requestBody: SnapshotJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + ':snapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists snapshots.
		 * Get v1b3/projects/{projectId}/locations/{location}/snapshots
		 * @param {string} projectId The project ID to list snapshots for.
		 * @param {string} location The location to list snapshots in.
		 * @param {string} jobId If specified, list snapshots created from this job.
		 * @return {void} Successful response
		 */
		Dataflow_projects_locations_snapshots_list(projectId: string, location: string, jobId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/snapshots&jobId=' + (jobId == null ? '' : encodeURIComponent(jobId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a snapshot.
		 * Delete v1b3/projects/{projectId}/locations/{location}/snapshots/{snapshotId}
		 * @param {string} projectId The ID of the Cloud Platform project that the snapshot belongs to.
		 * @param {string} location The location that contains this snapshot.
		 * @param {string} snapshotId The ID of the snapshot.
		 * @return {void} Successful response
		 */
		Dataflow_projects_locations_snapshots_delete(projectId: string, location: string, snapshotId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/snapshots/' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a snapshot.
		 * Get v1b3/projects/{projectId}/locations/{location}/snapshots/{snapshotId}
		 * @param {string} projectId The ID of the Cloud Platform project that the snapshot belongs to.
		 * @param {string} location The location that contains this snapshot.
		 * @param {string} snapshotId The ID of the snapshot.
		 * @return {void} Successful response
		 */
		Dataflow_projects_locations_snapshots_get(projectId: string, location: string, snapshotId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/snapshots/' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Validates a GoogleSQL query for Cloud Dataflow syntax. Will always
		 * confirm the given query parses correctly, and if able to look up
		 * schema information from DataCatalog, will validate that the query
		 * analyzes properly as well.
		 * Get v1b3/projects/{projectId}/locations/{location}/sql:validate
		 * @param {string} projectId Required. The ID of the Cloud Platform project that the job belongs to.
		 * @param {string} location The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to
		 * which to direct the request.
		 * @param {string} query The sql query to validate.
		 * @return {void} Successful response
		 */
		Dataflow_projects_locations_sql_validate(projectId: string, location: string, query: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/sql:validate&query=' + (query == null ? '' : encodeURIComponent(query)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a Cloud Dataflow job from a template.
		 * Post v1b3/projects/{projectId}/locations/{location}/templates
		 * @param {string} projectId Required. The ID of the Cloud Platform project that the job belongs to.
		 * @param {string} location The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to
		 * which to direct the request.
		 * @return {void} Successful response
		 */
		Dataflow_projects_locations_templates_create(projectId: string, location: string, requestBody: CreateJobFromTemplateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/templates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the template associated with a template.
		 * Get v1b3/projects/{projectId}/locations/{location}/templates:get
		 * @param {string} projectId Required. The ID of the Cloud Platform project that the job belongs to.
		 * @param {string} location The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to
		 * which to direct the request.
		 * @param {string} gcsPath Required. A Cloud Storage path to the template from which to
		 * create the job.
		 * Must be valid Cloud Storage URL, beginning with 'gs://'.
		 * @param {Dataflow_projects_locations_templates_getView} view The view to retrieve. Defaults to METADATA_ONLY.
		 * @return {void} Successful response
		 */
		Dataflow_projects_locations_templates_get(projectId: string, location: string, gcsPath: string, view: Dataflow_projects_locations_templates_getView): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/templates:get&gcsPath=' + (gcsPath == null ? '' : encodeURIComponent(gcsPath)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Launch a template.
		 * Post v1b3/projects/{projectId}/locations/{location}/templates:launch
		 * @param {string} projectId Required. The ID of the Cloud Platform project that the job belongs to.
		 * @param {string} location The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to
		 * which to direct the request.
		 * @param {string} dynamicTemplate_gcsPath Path to dynamic template spec file on GCS.
		 * The file must be a Json serialized DynamicTemplateFieSpec object.
		 * @param {string} dynamicTemplate_stagingLocation Cloud Storage path for staging dependencies.
		 * Must be a valid Cloud Storage URL, beginning with `gs://`.
		 * @param {string} gcsPath A Cloud Storage path to the template from which to create
		 * the job.
		 * Must be valid Cloud Storage URL, beginning with 'gs://'.
		 * @param {boolean} validateOnly If true, the request is validated but not actually executed.
		 * Defaults to false.
		 * @return {void} Successful response
		 */
		Dataflow_projects_locations_templates_launch(projectId: string, location: string, dynamicTemplate_gcsPath: string, dynamicTemplate_stagingLocation: string, gcsPath: string, validateOnly: boolean, requestBody: LaunchTemplateParameters): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/templates:launch&dynamicTemplate_gcsPath=' + (dynamicTemplate_gcsPath == null ? '' : encodeURIComponent(dynamicTemplate_gcsPath)) + '&dynamicTemplate_stagingLocation=' + (dynamicTemplate_stagingLocation == null ? '' : encodeURIComponent(dynamicTemplate_stagingLocation)) + '&gcsPath=' + (gcsPath == null ? '' : encodeURIComponent(gcsPath)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a snapshot.
		 * Delete v1b3/projects/{projectId}/snapshots
		 * @param {string} projectId The ID of the Cloud Platform project that the snapshot belongs to.
		 * @param {string} location The location that contains this snapshot.
		 * @param {string} snapshotId The ID of the snapshot.
		 * @return {void} Successful response
		 */
		Dataflow_projects_deleteSnapshots(projectId: string, location: string, snapshotId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/snapshots&location=' + (location == null ? '' : encodeURIComponent(location)) + '&snapshotId=' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists snapshots.
		 * Get v1b3/projects/{projectId}/snapshots
		 * @param {string} projectId The project ID to list snapshots for.
		 * @param {string} jobId If specified, list snapshots created from this job.
		 * @param {string} location The location to list snapshots in.
		 * @return {void} Successful response
		 */
		Dataflow_projects_snapshots_list(projectId: string, jobId: string, location: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/snapshots&jobId=' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&location=' + (location == null ? '' : encodeURIComponent(location)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a snapshot.
		 * Get v1b3/projects/{projectId}/snapshots/{snapshotId}
		 * @param {string} projectId The ID of the Cloud Platform project that the snapshot belongs to.
		 * @param {string} snapshotId The ID of the snapshot.
		 * @param {string} location The location that contains this snapshot.
		 * @return {void} Successful response
		 */
		Dataflow_projects_snapshots_get(projectId: string, snapshotId: string, location: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/snapshots/' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)) + '&location=' + (location == null ? '' : encodeURIComponent(location)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a Cloud Dataflow job from a template.
		 * Post v1b3/projects/{projectId}/templates
		 * @param {string} projectId Required. The ID of the Cloud Platform project that the job belongs to.
		 * @return {void} Successful response
		 */
		Dataflow_projects_templates_create(projectId: string, requestBody: CreateJobFromTemplateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/templates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the template associated with a template.
		 * Get v1b3/projects/{projectId}/templates:get
		 * @param {string} projectId Required. The ID of the Cloud Platform project that the job belongs to.
		 * @param {string} gcsPath Required. A Cloud Storage path to the template from which to
		 * create the job.
		 * Must be valid Cloud Storage URL, beginning with 'gs://'.
		 * @param {string} location The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to
		 * which to direct the request.
		 * @param {Dataflow_projects_locations_templates_getView} view The view to retrieve. Defaults to METADATA_ONLY.
		 * @return {void} Successful response
		 */
		Dataflow_projects_templates_get(projectId: string, gcsPath: string, location: string, view: Dataflow_projects_locations_templates_getView): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/templates:get&gcsPath=' + (gcsPath == null ? '' : encodeURIComponent(gcsPath)) + '&location=' + (location == null ? '' : encodeURIComponent(location)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Launch a template.
		 * Post v1b3/projects/{projectId}/templates:launch
		 * @param {string} projectId Required. The ID of the Cloud Platform project that the job belongs to.
		 * @param {string} dynamicTemplate_gcsPath Path to dynamic template spec file on GCS.
		 * The file must be a Json serialized DynamicTemplateFieSpec object.
		 * @param {string} dynamicTemplate_stagingLocation Cloud Storage path for staging dependencies.
		 * Must be a valid Cloud Storage URL, beginning with `gs://`.
		 * @param {string} gcsPath A Cloud Storage path to the template from which to create
		 * the job.
		 * Must be valid Cloud Storage URL, beginning with 'gs://'.
		 * @param {string} location The [regional endpoint]
		 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to
		 * which to direct the request.
		 * @param {boolean} validateOnly If true, the request is validated but not actually executed.
		 * Defaults to false.
		 * @return {void} Successful response
		 */
		Dataflow_projects_templates_launch(projectId: string, dynamicTemplate_gcsPath: string, dynamicTemplate_stagingLocation: string, gcsPath: string, location: string, validateOnly: boolean, requestBody: LaunchTemplateParameters): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/templates:launch&dynamicTemplate_gcsPath=' + (dynamicTemplate_gcsPath == null ? '' : encodeURIComponent(dynamicTemplate_gcsPath)) + '&dynamicTemplate_stagingLocation=' + (dynamicTemplate_stagingLocation == null ? '' : encodeURIComponent(dynamicTemplate_stagingLocation)) + '&gcsPath=' + (gcsPath == null ? '' : encodeURIComponent(gcsPath)) + '&location=' + (location == null ? '' : encodeURIComponent(location)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Dataflow_projects_jobs_listFilter { UNKNOWN = 0, ALL = 1, TERMINATED = 2, ACTIVE = 3 }

	export enum Dataflow_projects_jobs_listView { JOB_VIEW_UNKNOWN = 0, JOB_VIEW_SUMMARY = 1, JOB_VIEW_ALL = 2, JOB_VIEW_DESCRIPTION = 3 }

	export enum Dataflow_projects_locations_templates_getView { METADATA_ONLY = 0 }

}

