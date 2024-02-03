import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Obsolete in favor of ApproximateReportedProgress and ApproximateSplitRequest. */
	export interface ApproximateProgress {

		/** Obsolete. */
		percentComplete?: number | null;

		/** Position defines a position within a collection of data. The value can be either the end position, a key (used with ordered collections), a byte offset, or a record index. */
		position?: Position;

		/** Obsolete. */
		remainingTime?: string | null;
	}

	/** Obsolete in favor of ApproximateReportedProgress and ApproximateSplitRequest. */
	export interface ApproximateProgressFormProperties {

		/** Obsolete. */
		percentComplete: FormControl<number | null | undefined>,

		/** Obsolete. */
		remainingTime: FormControl<string | null | undefined>,
	}
	export function CreateApproximateProgressFormGroup() {
		return new FormGroup<ApproximateProgressFormProperties>({
			percentComplete: new FormControl<number | null | undefined>(undefined),
			remainingTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Position defines a position within a collection of data. The value can be either the end position, a key (used with ordered collections), a byte offset, or a record index. */
	export interface Position {

		/** Position is a byte offset. */
		byteOffset?: string | null;

		/** A position that encapsulates an inner position and an index for the inner position. A ConcatPosition can be used by a reader of a source that encapsulates a set of other sources. */
		concatPosition?: ConcatPosition;

		/** Position is past all other positions. Also useful for the end position of an unbounded range. */
		end?: boolean | null;

		/** Position is a string key, ordered lexicographically. */
		key?: string | null;

		/** Position is a record index. */
		recordIndex?: string | null;

		/** CloudPosition is a base64 encoded BatchShufflePosition (with FIXED sharding). */
		shufflePosition?: string | null;
	}

	/** Position defines a position within a collection of data. The value can be either the end position, a key (used with ordered collections), a byte offset, or a record index. */
	export interface PositionFormProperties {

		/** Position is a byte offset. */
		byteOffset: FormControl<string | null | undefined>,

		/** Position is past all other positions. Also useful for the end position of an unbounded range. */
		end: FormControl<boolean | null | undefined>,

		/** Position is a string key, ordered lexicographically. */
		key: FormControl<string | null | undefined>,

		/** Position is a record index. */
		recordIndex: FormControl<string | null | undefined>,

		/** CloudPosition is a base64 encoded BatchShufflePosition (with FIXED sharding). */
		shufflePosition: FormControl<string | null | undefined>,
	}
	export function CreatePositionFormGroup() {
		return new FormGroup<PositionFormProperties>({
			byteOffset: new FormControl<string | null | undefined>(undefined),
			end: new FormControl<boolean | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			recordIndex: new FormControl<string | null | undefined>(undefined),
			shufflePosition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A position that encapsulates an inner position and an index for the inner position. A ConcatPosition can be used by a reader of a source that encapsulates a set of other sources. */
	export interface ConcatPosition {

		/** Index of the inner source. */
		index?: number | null;

		/** Position defines a position within a collection of data. The value can be either the end position, a key (used with ordered collections), a byte offset, or a record index. */
		position?: Position;
	}

	/** A position that encapsulates an inner position and an index for the inner position. A ConcatPosition can be used by a reader of a source that encapsulates a set of other sources. */
	export interface ConcatPositionFormProperties {

		/** Index of the inner source. */
		index: FormControl<number | null | undefined>,
	}
	export function CreateConcatPositionFormGroup() {
		return new FormGroup<ConcatPositionFormProperties>({
			index: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A progress measurement of a WorkItem by a worker. */
	export interface ApproximateReportedProgress {

		/** Represents the level of parallelism in a WorkItem's input, reported by the worker. */
		consumedParallelism?: ReportedParallelism;

		/** Completion as fraction of the input consumed, from 0.0 (beginning, nothing consumed), to 1.0 (end of the input, entire input consumed). */
		fractionConsumed?: number | null;

		/** Position defines a position within a collection of data. The value can be either the end position, a key (used with ordered collections), a byte offset, or a record index. */
		position?: Position;

		/** Represents the level of parallelism in a WorkItem's input, reported by the worker. */
		remainingParallelism?: ReportedParallelism;
	}

	/** A progress measurement of a WorkItem by a worker. */
	export interface ApproximateReportedProgressFormProperties {

		/** Completion as fraction of the input consumed, from 0.0 (beginning, nothing consumed), to 1.0 (end of the input, entire input consumed). */
		fractionConsumed: FormControl<number | null | undefined>,
	}
	export function CreateApproximateReportedProgressFormGroup() {
		return new FormGroup<ApproximateReportedProgressFormProperties>({
			fractionConsumed: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the level of parallelism in a WorkItem's input, reported by the worker. */
	export interface ReportedParallelism {

		/** Specifies whether the parallelism is infinite. If true, "value" is ignored. Infinite parallelism means the service will assume that the work item can always be split into more non-empty work items by dynamic splitting. This is a work-around for lack of support for infinity by the current JSON-based Java RPC stack. */
		isInfinite?: boolean | null;

		/** Specifies the level of parallelism in case it is finite. */
		value?: number | null;
	}

	/** Represents the level of parallelism in a WorkItem's input, reported by the worker. */
	export interface ReportedParallelismFormProperties {

		/** Specifies whether the parallelism is infinite. If true, "value" is ignored. Infinite parallelism means the service will assume that the work item can always be split into more non-empty work items by dynamic splitting. This is a work-around for lack of support for infinity by the current JSON-based Java RPC stack. */
		isInfinite: FormControl<boolean | null | undefined>,

		/** Specifies the level of parallelism in case it is finite. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateReportedParallelismFormGroup() {
		return new FormGroup<ReportedParallelismFormProperties>({
			isInfinite: new FormControl<boolean | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A suggestion by the service to the worker to dynamically split the WorkItem. */
	export interface ApproximateSplitRequest {

		/** A fraction at which to split the work item, from 0.0 (beginning of the input) to 1.0 (end of the input). */
		fractionConsumed?: number | null;

		/** The fraction of the remainder of work to split the work item at, from 0.0 (split at the current position) to 1.0 (end of the input). */
		fractionOfRemainder?: number | null;

		/** Position defines a position within a collection of data. The value can be either the end position, a key (used with ordered collections), a byte offset, or a record index. */
		position?: Position;
	}

	/** A suggestion by the service to the worker to dynamically split the WorkItem. */
	export interface ApproximateSplitRequestFormProperties {

		/** A fraction at which to split the work item, from 0.0 (beginning of the input) to 1.0 (end of the input). */
		fractionConsumed: FormControl<number | null | undefined>,

		/** The fraction of the remainder of work to split the work item at, from 0.0 (split at the current position) to 1.0 (end of the input). */
		fractionOfRemainder: FormControl<number | null | undefined>,
	}
	export function CreateApproximateSplitRequestFormGroup() {
		return new FormGroup<ApproximateSplitRequestFormProperties>({
			fractionConsumed: new FormControl<number | null | undefined>(undefined),
			fractionOfRemainder: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A structured message reporting an autoscaling decision made by the Dataflow service. */
	export interface AutoscalingEvent {

		/** The current number of workers the job has. */
		currentNumWorkers?: string | null;

		/** A rich message format, including a human readable string, a key for identifying the message, and structured data associated with the message for programmatic consumption. */
		description?: StructuredMessage;

		/** The type of autoscaling event to report. */
		eventType?: AutoscalingEventEventType | null;

		/** The target number of workers the worker pool wants to resize to use. */
		targetNumWorkers?: string | null;

		/** The time this event was emitted to indicate a new target or current num_workers value. */
		time?: string | null;

		/** A short and friendly name for the worker pool this event refers to. */
		workerPool?: string | null;
	}

	/** A structured message reporting an autoscaling decision made by the Dataflow service. */
	export interface AutoscalingEventFormProperties {

		/** The current number of workers the job has. */
		currentNumWorkers: FormControl<string | null | undefined>,

		/** The type of autoscaling event to report. */
		eventType: FormControl<AutoscalingEventEventType | null | undefined>,

		/** The target number of workers the worker pool wants to resize to use. */
		targetNumWorkers: FormControl<string | null | undefined>,

		/** The time this event was emitted to indicate a new target or current num_workers value. */
		time: FormControl<string | null | undefined>,

		/** A short and friendly name for the worker pool this event refers to. */
		workerPool: FormControl<string | null | undefined>,
	}
	export function CreateAutoscalingEventFormGroup() {
		return new FormGroup<AutoscalingEventFormProperties>({
			currentNumWorkers: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<AutoscalingEventEventType | null | undefined>(undefined),
			targetNumWorkers: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<string | null | undefined>(undefined),
			workerPool: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A rich message format, including a human readable string, a key for identifying the message, and structured data associated with the message for programmatic consumption. */
	export interface StructuredMessage {

		/** Identifier for this message type. Used by external systems to internationalize or personalize message. */
		messageKey?: string | null;

		/** Human-readable version of message. */
		messageText?: string | null;

		/** The structured data associated with this message. */
		parameters?: Array<Parameter>;
	}

	/** A rich message format, including a human readable string, a key for identifying the message, and structured data associated with the message for programmatic consumption. */
	export interface StructuredMessageFormProperties {

		/** Identifier for this message type. Used by external systems to internationalize or personalize message. */
		messageKey: FormControl<string | null | undefined>,

		/** Human-readable version of message. */
		messageText: FormControl<string | null | undefined>,
	}
	export function CreateStructuredMessageFormGroup() {
		return new FormGroup<StructuredMessageFormProperties>({
			messageKey: new FormControl<string | null | undefined>(undefined),
			messageText: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Structured data associated with this message. */
	export interface Parameter {

		/** Key or name for this parameter. */
		key?: string | null;

		/** Value for this parameter. */
		value?: any;
	}

	/** Structured data associated with this message. */
	export interface ParameterFormProperties {

		/** Key or name for this parameter. */
		key: FormControl<string | null | undefined>,

		/** Value for this parameter. */
		value: FormControl<any | null | undefined>,
	}
	export function CreateParameterFormGroup() {
		return new FormGroup<ParameterFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

	export enum AutoscalingEventEventType { TYPE_UNKNOWN = 'TYPE_UNKNOWN', TARGET_NUM_WORKERS_CHANGED = 'TARGET_NUM_WORKERS_CHANGED', CURRENT_NUM_WORKERS_CHANGED = 'CURRENT_NUM_WORKERS_CHANGED', ACTUATION_FAILURE = 'ACTUATION_FAILURE', NO_CHANGE = 'NO_CHANGE' }


	/** Settings for WorkerPool autoscaling. */
	export interface AutoscalingSettings {

		/** The algorithm to use for autoscaling. */
		algorithm?: AutoscalingSettingsAlgorithm | null;

		/** The maximum number of workers to cap scaling at. */
		maxNumWorkers?: number | null;
	}

	/** Settings for WorkerPool autoscaling. */
	export interface AutoscalingSettingsFormProperties {

		/** The algorithm to use for autoscaling. */
		algorithm: FormControl<AutoscalingSettingsAlgorithm | null | undefined>,

		/** The maximum number of workers to cap scaling at. */
		maxNumWorkers: FormControl<number | null | undefined>,
	}
	export function CreateAutoscalingSettingsFormGroup() {
		return new FormGroup<AutoscalingSettingsFormProperties>({
			algorithm: new FormControl<AutoscalingSettingsAlgorithm | null | undefined>(undefined),
			maxNumWorkers: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AutoscalingSettingsAlgorithm { AUTOSCALING_ALGORITHM_UNKNOWN = 'AUTOSCALING_ALGORITHM_UNKNOWN', AUTOSCALING_ALGORITHM_NONE = 'AUTOSCALING_ALGORITHM_NONE', AUTOSCALING_ALGORITHM_BASIC = 'AUTOSCALING_ALGORITHM_BASIC' }


	/** Exponential buckets where the growth factor between buckets is `2**(2**-scale)`. e.g. for `scale=1` growth factor is `2**(2**(-1))=sqrt(2)`. `n` buckets will have the following boundaries. - 0th: [0, gf) - i in [1, n-1]: [gf^(i), gf^(i+1)) */
	export interface Base2Exponent {

		/** Must be greater than 0. */
		numberOfBuckets?: number | null;

		/** Must be between -3 and 3. This forces the growth factor of the bucket boundaries to be between `2^(1/8)` and `256`. */
		scale?: number | null;
	}

	/** Exponential buckets where the growth factor between buckets is `2**(2**-scale)`. e.g. for `scale=1` growth factor is `2**(2**(-1))=sqrt(2)`. `n` buckets will have the following boundaries. - 0th: [0, gf) - i in [1, n-1]: [gf^(i), gf^(i+1)) */
	export interface Base2ExponentFormProperties {

		/** Must be greater than 0. */
		numberOfBuckets: FormControl<number | null | undefined>,

		/** Must be between -3 and 3. This forces the growth factor of the bucket boundaries to be between `2^(1/8)` and `256`. */
		scale: FormControl<number | null | undefined>,
	}
	export function CreateBase2ExponentFormGroup() {
		return new FormGroup<Base2ExponentFormProperties>({
			numberOfBuckets: new FormControl<number | null | undefined>(undefined),
			scale: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Metadata for a BigQuery connector used by the job. */
	export interface BigQueryIODetails {

		/** Dataset accessed in the connection. */
		dataset?: string | null;

		/** Project accessed in the connection. */
		projectId?: string | null;

		/** Query used to access data in the connection. */
		query?: string | null;

		/** Table accessed in the connection. */
		table?: string | null;
	}

	/** Metadata for a BigQuery connector used by the job. */
	export interface BigQueryIODetailsFormProperties {

		/** Dataset accessed in the connection. */
		dataset: FormControl<string | null | undefined>,

		/** Project accessed in the connection. */
		projectId: FormControl<string | null | undefined>,

		/** Query used to access data in the connection. */
		query: FormControl<string | null | undefined>,

		/** Table accessed in the connection. */
		table: FormControl<string | null | undefined>,
	}
	export function CreateBigQueryIODetailsFormGroup() {
		return new FormGroup<BigQueryIODetailsFormProperties>({
			dataset: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for a Cloud Bigtable connector used by the job. */
	export interface BigTableIODetails {

		/** InstanceId accessed in the connection. */
		instanceId?: string | null;

		/** ProjectId accessed in the connection. */
		projectId?: string | null;

		/** TableId accessed in the connection. */
		tableId?: string | null;
	}

	/** Metadata for a Cloud Bigtable connector used by the job. */
	export interface BigTableIODetailsFormProperties {

		/** InstanceId accessed in the connection. */
		instanceId: FormControl<string | null | undefined>,

		/** ProjectId accessed in the connection. */
		projectId: FormControl<string | null | undefined>,

		/** TableId accessed in the connection. */
		tableId: FormControl<string | null | undefined>,
	}
	export function CreateBigTableIODetailsFormGroup() {
		return new FormGroup<BigTableIODetailsFormProperties>({
			instanceId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			tableId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `BucketOptions` describes the bucket boundaries used in the histogram. */
	export interface BucketOptions {

		/** Exponential buckets where the growth factor between buckets is `2**(2**-scale)`. e.g. for `scale=1` growth factor is `2**(2**(-1))=sqrt(2)`. `n` buckets will have the following boundaries. - 0th: [0, gf) - i in [1, n-1]: [gf^(i), gf^(i+1)) */
		exponential?: Base2Exponent;

		/** Linear buckets with the following boundaries for indices in 0 to n-1. - i in [0, n-1]: [start + (i)*width, start + (i+1)*width) */
		linear?: Linear;
	}

	/** `BucketOptions` describes the bucket boundaries used in the histogram. */
	export interface BucketOptionsFormProperties {
	}
	export function CreateBucketOptionsFormGroup() {
		return new FormGroup<BucketOptionsFormProperties>({
		});

	}


	/** Linear buckets with the following boundaries for indices in 0 to n-1. - i in [0, n-1]: [start + (i)*width, start + (i+1)*width) */
	export interface Linear {

		/** Must be greater than 0. */
		numberOfBuckets?: number | null;

		/** Lower bound of the first bucket. */
		start?: number | null;

		/** Distance between bucket boundaries. Must be greater than 0. */
		width?: number | null;
	}

	/** Linear buckets with the following boundaries for indices in 0 to n-1. - i in [0, n-1]: [start + (i)*width, start + (i+1)*width) */
	export interface LinearFormProperties {

		/** Must be greater than 0. */
		numberOfBuckets: FormControl<number | null | undefined>,

		/** Lower bound of the first bucket. */
		start: FormControl<number | null | undefined>,

		/** Distance between bucket boundaries. Must be greater than 0. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateLinearFormGroup() {
		return new FormGroup<LinearFormProperties>({
			numberOfBuckets: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Modeled after information exposed by /proc/stat. */
	export interface CPUTime {

		/** Average CPU utilization rate (% non-idle cpu / second) since previous sample. */
		rate?: number | null;

		/** Timestamp of the measurement. */
		timestamp?: string | null;

		/** Total active CPU time across all cores (ie., non-idle) in milliseconds since start-up. */
		totalMs?: string | null;
	}

	/** Modeled after information exposed by /proc/stat. */
	export interface CPUTimeFormProperties {

		/** Average CPU utilization rate (% non-idle cpu / second) since previous sample. */
		rate: FormControl<number | null | undefined>,

		/** Timestamp of the measurement. */
		timestamp: FormControl<string | null | undefined>,

		/** Total active CPU time across all cores (ie., non-idle) in milliseconds since start-up. */
		totalMs: FormControl<string | null | undefined>,
	}
	export function CreateCPUTimeFormGroup() {
		return new FormGroup<CPUTimeFormProperties>({
			rate: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			totalMs: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of an interstitial value between transforms in an execution stage. */
	export interface ComponentSource {

		/** Dataflow service generated name for this source. */
		name?: string | null;

		/** User name for the original user transform or collection with which this source is most closely associated. */
		originalTransformOrCollection?: string | null;

		/** Human-readable name for this transform; may be user or system generated. */
		userName?: string | null;
	}

	/** Description of an interstitial value between transforms in an execution stage. */
	export interface ComponentSourceFormProperties {

		/** Dataflow service generated name for this source. */
		name: FormControl<string | null | undefined>,

		/** User name for the original user transform or collection with which this source is most closely associated. */
		originalTransformOrCollection: FormControl<string | null | undefined>,

		/** Human-readable name for this transform; may be user or system generated. */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateComponentSourceFormGroup() {
		return new FormGroup<ComponentSourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			originalTransformOrCollection: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of a transform executed as part of an execution stage. */
	export interface ComponentTransform {

		/** Dataflow service generated name for this source. */
		name?: string | null;

		/** User name for the original user transform with which this transform is most closely associated. */
		originalTransform?: string | null;

		/** Human-readable name for this transform; may be user or system generated. */
		userName?: string | null;
	}

	/** Description of a transform executed as part of an execution stage. */
	export interface ComponentTransformFormProperties {

		/** Dataflow service generated name for this source. */
		name: FormControl<string | null | undefined>,

		/** User name for the original user transform with which this transform is most closely associated. */
		originalTransform: FormControl<string | null | undefined>,

		/** Human-readable name for this transform; may be user or system generated. */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateComponentTransformFormGroup() {
		return new FormGroup<ComponentTransformFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			originalTransform: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** All configuration data for a particular Computation. */
	export interface ComputationTopology {

		/** The ID of the computation. */
		computationId?: string | null;

		/** The inputs to the computation. */
		inputs?: Array<StreamLocation>;

		/** The key ranges processed by the computation. */
		keyRanges?: Array<KeyRangeLocation>;

		/** The outputs from the computation. */
		outputs?: Array<StreamLocation>;

		/** The state family values. */
		stateFamilies?: Array<StateFamilyConfig>;

		/** The system stage name. */
		systemStageName?: string | null;
	}

	/** All configuration data for a particular Computation. */
	export interface ComputationTopologyFormProperties {

		/** The ID of the computation. */
		computationId: FormControl<string | null | undefined>,

		/** The system stage name. */
		systemStageName: FormControl<string | null | undefined>,
	}
	export function CreateComputationTopologyFormGroup() {
		return new FormGroup<ComputationTopologyFormProperties>({
			computationId: new FormControl<string | null | undefined>(undefined),
			systemStageName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a stream of data, either as input to be processed or as output of a streaming Dataflow job. */
	export interface StreamLocation {

		/** Identifies the location of a custom souce. */
		customSourceLocation?: CustomSourceLocation;

		/** Identifies a pubsub location to use for transferring data into or out of a streaming Dataflow job. */
		pubsubLocation?: PubsubLocation;

		/** Identifies the location of a streaming side input. */
		sideInputLocation?: StreamingSideInputLocation;

		/** Identifies the location of a streaming computation stage, for stage-to-stage communication. */
		streamingStageLocation?: StreamingStageLocation;
	}

	/** Describes a stream of data, either as input to be processed or as output of a streaming Dataflow job. */
	export interface StreamLocationFormProperties {
	}
	export function CreateStreamLocationFormGroup() {
		return new FormGroup<StreamLocationFormProperties>({
		});

	}


	/** Identifies the location of a custom souce. */
	export interface CustomSourceLocation {

		/** Whether this source is stateful. */
		stateful?: boolean | null;
	}

	/** Identifies the location of a custom souce. */
	export interface CustomSourceLocationFormProperties {

		/** Whether this source is stateful. */
		stateful: FormControl<boolean | null | undefined>,
	}
	export function CreateCustomSourceLocationFormGroup() {
		return new FormGroup<CustomSourceLocationFormProperties>({
			stateful: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Identifies a pubsub location to use for transferring data into or out of a streaming Dataflow job. */
	export interface PubsubLocation {

		/** Indicates whether the pipeline allows late-arriving data. */
		dropLateData?: boolean | null;

		/** If true, then this location represents dynamic topics. */
		dynamicDestinations?: boolean | null;

		/** If set, contains a pubsub label from which to extract record ids. If left empty, record deduplication will be strictly best effort. */
		idLabel?: string | null;

		/** A pubsub subscription, in the form of "pubsub.googleapis.com/subscriptions//" */
		subscription?: string | null;

		/** If set, contains a pubsub label from which to extract record timestamps. If left empty, record timestamps will be generated upon arrival. */
		timestampLabel?: string | null;

		/** A pubsub topic, in the form of "pubsub.googleapis.com/topics//" */
		topic?: string | null;

		/** If set, specifies the pubsub subscription that will be used for tracking custom time timestamps for watermark estimation. */
		trackingSubscription?: string | null;

		/** If true, then the client has requested to get pubsub attributes. */
		withAttributes?: boolean | null;
	}

	/** Identifies a pubsub location to use for transferring data into or out of a streaming Dataflow job. */
	export interface PubsubLocationFormProperties {

		/** Indicates whether the pipeline allows late-arriving data. */
		dropLateData: FormControl<boolean | null | undefined>,

		/** If true, then this location represents dynamic topics. */
		dynamicDestinations: FormControl<boolean | null | undefined>,

		/** If set, contains a pubsub label from which to extract record ids. If left empty, record deduplication will be strictly best effort. */
		idLabel: FormControl<string | null | undefined>,

		/** A pubsub subscription, in the form of "pubsub.googleapis.com/subscriptions//" */
		subscription: FormControl<string | null | undefined>,

		/** If set, contains a pubsub label from which to extract record timestamps. If left empty, record timestamps will be generated upon arrival. */
		timestampLabel: FormControl<string | null | undefined>,

		/** A pubsub topic, in the form of "pubsub.googleapis.com/topics//" */
		topic: FormControl<string | null | undefined>,

		/** If set, specifies the pubsub subscription that will be used for tracking custom time timestamps for watermark estimation. */
		trackingSubscription: FormControl<string | null | undefined>,

		/** If true, then the client has requested to get pubsub attributes. */
		withAttributes: FormControl<boolean | null | undefined>,
	}
	export function CreatePubsubLocationFormGroup() {
		return new FormGroup<PubsubLocationFormProperties>({
			dropLateData: new FormControl<boolean | null | undefined>(undefined),
			dynamicDestinations: new FormControl<boolean | null | undefined>(undefined),
			idLabel: new FormControl<string | null | undefined>(undefined),
			subscription: new FormControl<string | null | undefined>(undefined),
			timestampLabel: new FormControl<string | null | undefined>(undefined),
			topic: new FormControl<string | null | undefined>(undefined),
			trackingSubscription: new FormControl<string | null | undefined>(undefined),
			withAttributes: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Identifies the location of a streaming side input. */
	export interface StreamingSideInputLocation {

		/** Identifies the state family where this side input is stored. */
		stateFamily?: string | null;

		/** Identifies the particular side input within the streaming Dataflow job. */
		tag?: string | null;
	}

	/** Identifies the location of a streaming side input. */
	export interface StreamingSideInputLocationFormProperties {

		/** Identifies the state family where this side input is stored. */
		stateFamily: FormControl<string | null | undefined>,

		/** Identifies the particular side input within the streaming Dataflow job. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateStreamingSideInputLocationFormGroup() {
		return new FormGroup<StreamingSideInputLocationFormProperties>({
			stateFamily: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies the location of a streaming computation stage, for stage-to-stage communication. */
	export interface StreamingStageLocation {

		/** Identifies the particular stream within the streaming Dataflow job. */
		streamId?: string | null;
	}

	/** Identifies the location of a streaming computation stage, for stage-to-stage communication. */
	export interface StreamingStageLocationFormProperties {

		/** Identifies the particular stream within the streaming Dataflow job. */
		streamId: FormControl<string | null | undefined>,
	}
	export function CreateStreamingStageLocationFormGroup() {
		return new FormGroup<StreamingStageLocationFormProperties>({
			streamId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Location information for a specific key-range of a sharded computation. Currently we only support UTF-8 character splits to simplify encoding into JSON. */
	export interface KeyRangeLocation {

		/** The name of the data disk where data for this range is stored. This name is local to the Google Cloud Platform project and uniquely identifies the disk within that project, for example "myproject-1014-104817-4c2-harness-0-disk-1". */
		dataDisk?: string | null;

		/** The physical location of this range assignment to be used for streaming computation cross-worker message delivery. */
		deliveryEndpoint?: string | null;

		/** DEPRECATED. The location of the persistent state for this range, as a persistent directory in the worker local filesystem. */
		deprecatedPersistentDirectory?: string | null;

		/** The end (exclusive) of the key range. */
		end?: string | null;

		/** The start (inclusive) of the key range. */
		start?: string | null;
	}

	/** Location information for a specific key-range of a sharded computation. Currently we only support UTF-8 character splits to simplify encoding into JSON. */
	export interface KeyRangeLocationFormProperties {

		/** The name of the data disk where data for this range is stored. This name is local to the Google Cloud Platform project and uniquely identifies the disk within that project, for example "myproject-1014-104817-4c2-harness-0-disk-1". */
		dataDisk: FormControl<string | null | undefined>,

		/** The physical location of this range assignment to be used for streaming computation cross-worker message delivery. */
		deliveryEndpoint: FormControl<string | null | undefined>,

		/** DEPRECATED. The location of the persistent state for this range, as a persistent directory in the worker local filesystem. */
		deprecatedPersistentDirectory: FormControl<string | null | undefined>,

		/** The end (exclusive) of the key range. */
		end: FormControl<string | null | undefined>,

		/** The start (inclusive) of the key range. */
		start: FormControl<string | null | undefined>,
	}
	export function CreateKeyRangeLocationFormGroup() {
		return new FormGroup<KeyRangeLocationFormProperties>({
			dataDisk: new FormControl<string | null | undefined>(undefined),
			deliveryEndpoint: new FormControl<string | null | undefined>(undefined),
			deprecatedPersistentDirectory: new FormControl<string | null | undefined>(undefined),
			end: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** State family configuration. */
	export interface StateFamilyConfig {

		/** If true, this family corresponds to a read operation. */
		isRead?: boolean | null;

		/** The state family value. */
		stateFamily?: string | null;
	}

	/** State family configuration. */
	export interface StateFamilyConfigFormProperties {

		/** If true, this family corresponds to a read operation. */
		isRead: FormControl<boolean | null | undefined>,

		/** The state family value. */
		stateFamily: FormControl<string | null | undefined>,
	}
	export function CreateStateFamilyConfigFormGroup() {
		return new FormGroup<StateFamilyConfigFormProperties>({
			isRead: new FormControl<boolean | null | undefined>(undefined),
			stateFamily: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container Spec. */
	export interface ContainerSpec {

		/** The environment values to be set at runtime for flex template. */
		defaultEnvironment?: FlexTemplateRuntimeEnvironment;

		/** Name of the docker container image. E.g., gcr.io/project/some-image */
		image?: string | null;

		/** Cloud Storage path to self-signed certificate of private registry. */
		imageRepositoryCertPath?: string | null;

		/** Secret Manager secret id for password to authenticate to private registry. */
		imageRepositoryPasswordSecretId?: string | null;

		/** Secret Manager secret id for username to authenticate to private registry. */
		imageRepositoryUsernameSecretId?: string | null;

		/** Metadata describing a template. */
		metadata?: TemplateMetadata;

		/** SDK Information. */
		sdkInfo?: SDKInfo;
	}

	/** Container Spec. */
	export interface ContainerSpecFormProperties {

		/** Name of the docker container image. E.g., gcr.io/project/some-image */
		image: FormControl<string | null | undefined>,

		/** Cloud Storage path to self-signed certificate of private registry. */
		imageRepositoryCertPath: FormControl<string | null | undefined>,

		/** Secret Manager secret id for password to authenticate to private registry. */
		imageRepositoryPasswordSecretId: FormControl<string | null | undefined>,

		/** Secret Manager secret id for username to authenticate to private registry. */
		imageRepositoryUsernameSecretId: FormControl<string | null | undefined>,
	}
	export function CreateContainerSpecFormGroup() {
		return new FormGroup<ContainerSpecFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
			imageRepositoryCertPath: new FormControl<string | null | undefined>(undefined),
			imageRepositoryPasswordSecretId: new FormControl<string | null | undefined>(undefined),
			imageRepositoryUsernameSecretId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The environment values to be set at runtime for flex template. */
	export interface FlexTemplateRuntimeEnvironment {

		/** Additional experiment flags for the job. */
		additionalExperiments?: Array<string>;

		/** Additional user labels to be specified for the job. Keys and values must follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1kg", "count": "3" }. */
		additionalUserLabels?: {[id: string]: string };

		/** The algorithm to use for autoscaling */
		autoscalingAlgorithm?: AutoscalingSettingsAlgorithm | null;

		/** Worker disk size, in gigabytes. */
		diskSizeGb?: number | null;

		/** If true, when processing time is spent almost entirely on garbage collection (GC), saves a heap dump before ending the thread or process. If false, ends the thread or process without saving a heap dump. Does not save a heap dump when the Java Virtual Machine (JVM) has an out of memory error during processing. The location of the heap file is either echoed back to the user, or the user is given the opportunity to download the heap file. */
		dumpHeapOnOom?: boolean | null;

		/** If true serial port logging will be enabled for the launcher VM. */
		enableLauncherVmSerialPortLogging?: boolean | null;

		/** Whether to enable Streaming Engine for the job. */
		enableStreamingEngine?: boolean | null;

		/** Set FlexRS goal for the job. https://cloud.google.com/dataflow/docs/guides/flexrs */
		flexrsGoal?: FlexTemplateRuntimeEnvironmentFlexrsGoal | null;

		/** Configuration for VM IPs. */
		ipConfiguration?: FlexTemplateRuntimeEnvironmentIpConfiguration | null;

		/** Name for the Cloud KMS key for the job. Key format is: projects//locations//keyRings//cryptoKeys/ */
		kmsKeyName?: string | null;

		/** The machine type to use for launching the job. The default is n1-standard-1. */
		launcherMachineType?: string | null;

		/** The machine type to use for the job. Defaults to the value from the template if not specified. */
		machineType?: string | null;

		/** The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. */
		maxWorkers?: number | null;

		/** Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default". */
		network?: string | null;

		/** The initial number of Google Compute Engine instances for the job. */
		numWorkers?: number | null;

		/** Cloud Storage bucket (directory) to upload heap dumps to. Enabling this field implies that `dump_heap_on_oom` is set to true. */
		saveHeapDumpsToGcsPath?: string | null;

		/** Docker registry location of container image to use for the 'worker harness. Default is the container for the version of the SDK. Note this field is only valid for portable pipelines. */
		sdkContainerImage?: string | null;

		/** The email address of the service account to run the job as. */
		serviceAccountEmail?: string | null;

		/** The Cloud Storage path for staging local files. Must be a valid Cloud Storage URL, beginning with `gs://`. */
		stagingLocation?: string | null;

		/** Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL. */
		subnetwork?: string | null;

		/** The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`. */
		tempLocation?: string | null;

		/** The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane's region. */
		workerRegion?: string | null;

		/** The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane's region is chosen based on available capacity. If both `worker_zone` and `zone` are set, `worker_zone` takes precedence. */
		workerZone?: string | null;

		/** The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence. */
		zone?: string | null;
	}

	/** The environment values to be set at runtime for flex template. */
	export interface FlexTemplateRuntimeEnvironmentFormProperties {

		/** Additional user labels to be specified for the job. Keys and values must follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1kg", "count": "3" }. */
		additionalUserLabels: FormControl<{[id: string]: string } | null | undefined>,

		/** The algorithm to use for autoscaling */
		autoscalingAlgorithm: FormControl<AutoscalingSettingsAlgorithm | null | undefined>,

		/** Worker disk size, in gigabytes. */
		diskSizeGb: FormControl<number | null | undefined>,

		/** If true, when processing time is spent almost entirely on garbage collection (GC), saves a heap dump before ending the thread or process. If false, ends the thread or process without saving a heap dump. Does not save a heap dump when the Java Virtual Machine (JVM) has an out of memory error during processing. The location of the heap file is either echoed back to the user, or the user is given the opportunity to download the heap file. */
		dumpHeapOnOom: FormControl<boolean | null | undefined>,

		/** If true serial port logging will be enabled for the launcher VM. */
		enableLauncherVmSerialPortLogging: FormControl<boolean | null | undefined>,

		/** Whether to enable Streaming Engine for the job. */
		enableStreamingEngine: FormControl<boolean | null | undefined>,

		/** Set FlexRS goal for the job. https://cloud.google.com/dataflow/docs/guides/flexrs */
		flexrsGoal: FormControl<FlexTemplateRuntimeEnvironmentFlexrsGoal | null | undefined>,

		/** Configuration for VM IPs. */
		ipConfiguration: FormControl<FlexTemplateRuntimeEnvironmentIpConfiguration | null | undefined>,

		/** Name for the Cloud KMS key for the job. Key format is: projects//locations//keyRings//cryptoKeys/ */
		kmsKeyName: FormControl<string | null | undefined>,

		/** The machine type to use for launching the job. The default is n1-standard-1. */
		launcherMachineType: FormControl<string | null | undefined>,

		/** The machine type to use for the job. Defaults to the value from the template if not specified. */
		machineType: FormControl<string | null | undefined>,

		/** The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. */
		maxWorkers: FormControl<number | null | undefined>,

		/** Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default". */
		network: FormControl<string | null | undefined>,

		/** The initial number of Google Compute Engine instances for the job. */
		numWorkers: FormControl<number | null | undefined>,

		/** Cloud Storage bucket (directory) to upload heap dumps to. Enabling this field implies that `dump_heap_on_oom` is set to true. */
		saveHeapDumpsToGcsPath: FormControl<string | null | undefined>,

		/** Docker registry location of container image to use for the 'worker harness. Default is the container for the version of the SDK. Note this field is only valid for portable pipelines. */
		sdkContainerImage: FormControl<string | null | undefined>,

		/** The email address of the service account to run the job as. */
		serviceAccountEmail: FormControl<string | null | undefined>,

		/** The Cloud Storage path for staging local files. Must be a valid Cloud Storage URL, beginning with `gs://`. */
		stagingLocation: FormControl<string | null | undefined>,

		/** Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL. */
		subnetwork: FormControl<string | null | undefined>,

		/** The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`. */
		tempLocation: FormControl<string | null | undefined>,

		/** The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane's region. */
		workerRegion: FormControl<string | null | undefined>,

		/** The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane's region is chosen based on available capacity. If both `worker_zone` and `zone` are set, `worker_zone` takes precedence. */
		workerZone: FormControl<string | null | undefined>,

		/** The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateFlexTemplateRuntimeEnvironmentFormGroup() {
		return new FormGroup<FlexTemplateRuntimeEnvironmentFormProperties>({
			additionalUserLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			autoscalingAlgorithm: new FormControl<AutoscalingSettingsAlgorithm | null | undefined>(undefined),
			diskSizeGb: new FormControl<number | null | undefined>(undefined),
			dumpHeapOnOom: new FormControl<boolean | null | undefined>(undefined),
			enableLauncherVmSerialPortLogging: new FormControl<boolean | null | undefined>(undefined),
			enableStreamingEngine: new FormControl<boolean | null | undefined>(undefined),
			flexrsGoal: new FormControl<FlexTemplateRuntimeEnvironmentFlexrsGoal | null | undefined>(undefined),
			ipConfiguration: new FormControl<FlexTemplateRuntimeEnvironmentIpConfiguration | null | undefined>(undefined),
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
			launcherMachineType: new FormControl<string | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			maxWorkers: new FormControl<number | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			numWorkers: new FormControl<number | null | undefined>(undefined),
			saveHeapDumpsToGcsPath: new FormControl<string | null | undefined>(undefined),
			sdkContainerImage: new FormControl<string | null | undefined>(undefined),
			serviceAccountEmail: new FormControl<string | null | undefined>(undefined),
			stagingLocation: new FormControl<string | null | undefined>(undefined),
			subnetwork: new FormControl<string | null | undefined>(undefined),
			tempLocation: new FormControl<string | null | undefined>(undefined),
			workerRegion: new FormControl<string | null | undefined>(undefined),
			workerZone: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FlexTemplateRuntimeEnvironmentFlexrsGoal { FLEXRS_UNSPECIFIED = 'FLEXRS_UNSPECIFIED', FLEXRS_SPEED_OPTIMIZED = 'FLEXRS_SPEED_OPTIMIZED', FLEXRS_COST_OPTIMIZED = 'FLEXRS_COST_OPTIMIZED' }

	export enum FlexTemplateRuntimeEnvironmentIpConfiguration { WORKER_IP_UNSPECIFIED = 'WORKER_IP_UNSPECIFIED', WORKER_IP_PUBLIC = 'WORKER_IP_PUBLIC', WORKER_IP_PRIVATE = 'WORKER_IP_PRIVATE' }


	/** Metadata describing a template. */
	export interface TemplateMetadata {

		/** Optional. A description of the template. */
		description?: string | null;

		/** Required. The name of the template. */
		name?: string | null;

		/** The parameters for the template. */
		parameters?: Array<ParameterMetadata>;
	}

	/** Metadata describing a template. */
	export interface TemplateMetadataFormProperties {

		/** Optional. A description of the template. */
		description: FormControl<string | null | undefined>,

		/** Required. The name of the template. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTemplateMetadataFormGroup() {
		return new FormGroup<TemplateMetadataFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for a specific parameter. */
	export interface ParameterMetadata {

		/** Optional. Additional metadata for describing this parameter. */
		customMetadata?: {[id: string]: string };

		/** Optional. The default values will pre-populate the parameter with the given value from the proto. If default_value is left empty, the parameter will be populated with a default of the relevant type, e.g. false for a boolean. */
		defaultValue?: string | null;

		/** Optional. The options shown when ENUM ParameterType is specified. */
		enumOptions?: Array<ParameterMetadataEnumOption>;

		/** Optional. Specifies a group name for this parameter to be rendered under. Group header text will be rendered exactly as specified in this field. Only considered when parent_name is NOT provided. */
		groupName?: string | null;

		/** Required. The help text to display for the parameter. */
		helpText?: string | null;

		/** Optional. Whether the parameter is optional. Defaults to false. */
		isOptional?: boolean | null;

		/** Required. The label to display for the parameter. */
		label?: string | null;

		/** Required. The name of the parameter. */
		name?: string | null;

		/** Optional. The type of the parameter. Used for selecting input picker. */
		paramType?: ParameterMetadataParamType | null;

		/** Optional. Specifies the name of the parent parameter. Used in conjunction with 'parent_trigger_values' to make this parameter conditional (will only be rendered conditionally). Should be mappable to a ParameterMetadata.name field. */
		parentName?: string | null;

		/** Optional. The value(s) of the 'parent_name' parameter which will trigger this parameter to be shown. If left empty, ANY non-empty value in parent_name will trigger this parameter to be shown. Only considered when this parameter is conditional (when 'parent_name' has been provided). */
		parentTriggerValues?: Array<string>;

		/** Optional. Regexes that the parameter must match. */
		regexes?: Array<string>;
	}

	/** Metadata for a specific parameter. */
	export interface ParameterMetadataFormProperties {

		/** Optional. Additional metadata for describing this parameter. */
		customMetadata: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The default values will pre-populate the parameter with the given value from the proto. If default_value is left empty, the parameter will be populated with a default of the relevant type, e.g. false for a boolean. */
		defaultValue: FormControl<string | null | undefined>,

		/** Optional. Specifies a group name for this parameter to be rendered under. Group header text will be rendered exactly as specified in this field. Only considered when parent_name is NOT provided. */
		groupName: FormControl<string | null | undefined>,

		/** Required. The help text to display for the parameter. */
		helpText: FormControl<string | null | undefined>,

		/** Optional. Whether the parameter is optional. Defaults to false. */
		isOptional: FormControl<boolean | null | undefined>,

		/** Required. The label to display for the parameter. */
		label: FormControl<string | null | undefined>,

		/** Required. The name of the parameter. */
		name: FormControl<string | null | undefined>,

		/** Optional. The type of the parameter. Used for selecting input picker. */
		paramType: FormControl<ParameterMetadataParamType | null | undefined>,

		/** Optional. Specifies the name of the parent parameter. Used in conjunction with 'parent_trigger_values' to make this parameter conditional (will only be rendered conditionally). Should be mappable to a ParameterMetadata.name field. */
		parentName: FormControl<string | null | undefined>,
	}
	export function CreateParameterMetadataFormGroup() {
		return new FormGroup<ParameterMetadataFormProperties>({
			customMetadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			defaultValue: new FormControl<string | null | undefined>(undefined),
			groupName: new FormControl<string | null | undefined>(undefined),
			helpText: new FormControl<string | null | undefined>(undefined),
			isOptional: new FormControl<boolean | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			paramType: new FormControl<ParameterMetadataParamType | null | undefined>(undefined),
			parentName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ParameterMetadataEnumOption specifies the option shown in the enum form. */
	export interface ParameterMetadataEnumOption {

		/** Optional. The description to display for the enum option. */
		description?: string | null;

		/** Optional. The label to display for the enum option. */
		label?: string | null;

		/** Required. The value of the enum option. */
		value?: string | null;
	}

	/** ParameterMetadataEnumOption specifies the option shown in the enum form. */
	export interface ParameterMetadataEnumOptionFormProperties {

		/** Optional. The description to display for the enum option. */
		description: FormControl<string | null | undefined>,

		/** Optional. The label to display for the enum option. */
		label: FormControl<string | null | undefined>,

		/** Required. The value of the enum option. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateParameterMetadataEnumOptionFormGroup() {
		return new FormGroup<ParameterMetadataEnumOptionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ParameterMetadataParamType { DEFAULT = 'DEFAULT', TEXT = 'TEXT', GCS_READ_BUCKET = 'GCS_READ_BUCKET', GCS_WRITE_BUCKET = 'GCS_WRITE_BUCKET', GCS_READ_FILE = 'GCS_READ_FILE', GCS_WRITE_FILE = 'GCS_WRITE_FILE', GCS_READ_FOLDER = 'GCS_READ_FOLDER', GCS_WRITE_FOLDER = 'GCS_WRITE_FOLDER', PUBSUB_TOPIC = 'PUBSUB_TOPIC', PUBSUB_SUBSCRIPTION = 'PUBSUB_SUBSCRIPTION', BIGQUERY_TABLE = 'BIGQUERY_TABLE', JAVASCRIPT_UDF_FILE = 'JAVASCRIPT_UDF_FILE', SERVICE_ACCOUNT = 'SERVICE_ACCOUNT', MACHINE_TYPE = 'MACHINE_TYPE', KMS_KEY_NAME = 'KMS_KEY_NAME', WORKER_REGION = 'WORKER_REGION', WORKER_ZONE = 'WORKER_ZONE', BOOLEAN = 'BOOLEAN', ENUM = 'ENUM', NUMBER = 'NUMBER' }


	/** SDK Information. */
	export interface SDKInfo {

		/** Required. The SDK Language. */
		language?: SDKInfoLanguage | null;

		/** Optional. The SDK version. */
		version?: string | null;
	}

	/** SDK Information. */
	export interface SDKInfoFormProperties {

		/** Required. The SDK Language. */
		language: FormControl<SDKInfoLanguage | null | undefined>,

		/** Optional. The SDK version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateSDKInfoFormGroup() {
		return new FormGroup<SDKInfoFormProperties>({
			language: new FormControl<SDKInfoLanguage | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SDKInfoLanguage { UNKNOWN = 'UNKNOWN', JAVA = 'JAVA', PYTHON = 'PYTHON', GO = 'GO' }


	/** CounterMetadata includes all static non-name non-value counter attributes. */
	export interface CounterMetadata {

		/** Human-readable description of the counter semantics. */
		description?: string | null;

		/** Counter aggregation kind. */
		kind?: CounterMetadataKind | null;

		/** A string referring to the unit type. */
		otherUnits?: string | null;

		/** System defined Units, see above enum. */
		standardUnits?: CounterMetadataStandardUnits | null;
	}

	/** CounterMetadata includes all static non-name non-value counter attributes. */
	export interface CounterMetadataFormProperties {

		/** Human-readable description of the counter semantics. */
		description: FormControl<string | null | undefined>,

		/** Counter aggregation kind. */
		kind: FormControl<CounterMetadataKind | null | undefined>,

		/** A string referring to the unit type. */
		otherUnits: FormControl<string | null | undefined>,

		/** System defined Units, see above enum. */
		standardUnits: FormControl<CounterMetadataStandardUnits | null | undefined>,
	}
	export function CreateCounterMetadataFormGroup() {
		return new FormGroup<CounterMetadataFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<CounterMetadataKind | null | undefined>(undefined),
			otherUnits: new FormControl<string | null | undefined>(undefined),
			standardUnits: new FormControl<CounterMetadataStandardUnits | null | undefined>(undefined),
		});

	}

	export enum CounterMetadataKind { INVALID = 'INVALID', SUM = 'SUM', MAX = 'MAX', MIN = 'MIN', MEAN = 'MEAN', OR = 'OR', AND = 'AND', SET = 'SET', DISTRIBUTION = 'DISTRIBUTION', LATEST_VALUE = 'LATEST_VALUE' }

	export enum CounterMetadataStandardUnits { BYTES = 'BYTES', BYTES_PER_SEC = 'BYTES_PER_SEC', MILLISECONDS = 'MILLISECONDS', MICROSECONDS = 'MICROSECONDS', NANOSECONDS = 'NANOSECONDS', TIMESTAMP_MSEC = 'TIMESTAMP_MSEC', TIMESTAMP_USEC = 'TIMESTAMP_USEC', TIMESTAMP_NSEC = 'TIMESTAMP_NSEC' }


	/** Identifies a counter within a per-job namespace. Counters whose structured names are the same get merged into a single value for the job. */
	export interface CounterStructuredName {

		/** Name of the optimized step being executed by the workers. */
		componentStepName?: string | null;

		/** Name of the stage. An execution step contains multiple component steps. */
		executionStepName?: string | null;

		/** Index of an input collection that's being read from/written to as a side input. The index identifies a step's side inputs starting by 1 (e.g. the first side input has input_index 1, the third has input_index 3). Side inputs are identified by a pair of (original_step_name, input_index). This field helps uniquely identify them. */
		inputIndex?: number | null;

		/** Counter name. Not necessarily globally-unique, but unique within the context of the other fields. Required. */
		name?: string | null;

		/** One of the standard Origins defined above. */
		origin?: CounterStructuredNameOrigin | null;

		/** A string containing a more specific namespace of the counter's origin. */
		originNamespace?: string | null;

		/** The step name requesting an operation, such as GBK. I.e. the ParDo causing a read/write from shuffle to occur, or a read from side inputs. */
		originalRequestingStepName?: string | null;

		/** System generated name of the original step in the user's graph, before optimization. */
		originalStepName?: string | null;

		/** Portion of this counter, either key or value. */
		portion?: CounterStructuredNamePortion | null;

		/** ID of a particular worker. */
		workerId?: string | null;
	}

	/** Identifies a counter within a per-job namespace. Counters whose structured names are the same get merged into a single value for the job. */
	export interface CounterStructuredNameFormProperties {

		/** Name of the optimized step being executed by the workers. */
		componentStepName: FormControl<string | null | undefined>,

		/** Name of the stage. An execution step contains multiple component steps. */
		executionStepName: FormControl<string | null | undefined>,

		/** Index of an input collection that's being read from/written to as a side input. The index identifies a step's side inputs starting by 1 (e.g. the first side input has input_index 1, the third has input_index 3). Side inputs are identified by a pair of (original_step_name, input_index). This field helps uniquely identify them. */
		inputIndex: FormControl<number | null | undefined>,

		/** Counter name. Not necessarily globally-unique, but unique within the context of the other fields. Required. */
		name: FormControl<string | null | undefined>,

		/** One of the standard Origins defined above. */
		origin: FormControl<CounterStructuredNameOrigin | null | undefined>,

		/** A string containing a more specific namespace of the counter's origin. */
		originNamespace: FormControl<string | null | undefined>,

		/** The step name requesting an operation, such as GBK. I.e. the ParDo causing a read/write from shuffle to occur, or a read from side inputs. */
		originalRequestingStepName: FormControl<string | null | undefined>,

		/** System generated name of the original step in the user's graph, before optimization. */
		originalStepName: FormControl<string | null | undefined>,

		/** Portion of this counter, either key or value. */
		portion: FormControl<CounterStructuredNamePortion | null | undefined>,

		/** ID of a particular worker. */
		workerId: FormControl<string | null | undefined>,
	}
	export function CreateCounterStructuredNameFormGroup() {
		return new FormGroup<CounterStructuredNameFormProperties>({
			componentStepName: new FormControl<string | null | undefined>(undefined),
			executionStepName: new FormControl<string | null | undefined>(undefined),
			inputIndex: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<CounterStructuredNameOrigin | null | undefined>(undefined),
			originNamespace: new FormControl<string | null | undefined>(undefined),
			originalRequestingStepName: new FormControl<string | null | undefined>(undefined),
			originalStepName: new FormControl<string | null | undefined>(undefined),
			portion: new FormControl<CounterStructuredNamePortion | null | undefined>(undefined),
			workerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CounterStructuredNameOrigin { SYSTEM = 'SYSTEM', USER = 'USER' }

	export enum CounterStructuredNamePortion { ALL = 'ALL', KEY = 'KEY', VALUE = 'VALUE' }


	/** A single message which encapsulates structured name and metadata for a given counter. */
	export interface CounterStructuredNameAndMetadata {

		/** CounterMetadata includes all static non-name non-value counter attributes. */
		metadata?: CounterMetadata;

		/** Identifies a counter within a per-job namespace. Counters whose structured names are the same get merged into a single value for the job. */
		name?: CounterStructuredName;
	}

	/** A single message which encapsulates structured name and metadata for a given counter. */
	export interface CounterStructuredNameAndMetadataFormProperties {
	}
	export function CreateCounterStructuredNameAndMetadataFormGroup() {
		return new FormGroup<CounterStructuredNameAndMetadataFormProperties>({
		});

	}


	/** An update to a Counter sent from a worker. */
	export interface CounterUpdate {

		/** Boolean value for And, Or. */
		boolean?: boolean | null;

		/** True if this counter is reported as the total cumulative aggregate value accumulated since the worker started working on this WorkItem. By default this is false, indicating that this counter is reported as a delta. */
		cumulative?: boolean | null;

		/** A metric value representing a distribution. */
		distribution?: DistributionUpdate;

		/** Floating point value for Sum, Max, Min. */
		floatingPoint?: number | null;

		/** A metric value representing a list of floating point numbers. */
		floatingPointList?: FloatingPointList;

		/** A representation of a floating point mean metric contribution. */
		floatingPointMean?: FloatingPointMean;

		/** A representation of an int64, n, that is immune to precision loss when encoded in JSON. */
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

		/** The service-generated short identifier for this counter. The short_id -> (name, metadata) mapping is constant for the lifetime of a job. */
		shortId?: string | null;

		/** A metric value representing a list of strings. */
		stringList?: StringList;

		/** A single message which encapsulates structured name and metadata for a given counter. */
		structuredNameAndMetadata?: CounterStructuredNameAndMetadata;
	}

	/** An update to a Counter sent from a worker. */
	export interface CounterUpdateFormProperties {

		/** Boolean value for And, Or. */
		boolean: FormControl<boolean | null | undefined>,

		/** True if this counter is reported as the total cumulative aggregate value accumulated since the worker started working on this WorkItem. By default this is false, indicating that this counter is reported as a delta. */
		cumulative: FormControl<boolean | null | undefined>,

		/** Floating point value for Sum, Max, Min. */
		floatingPoint: FormControl<number | null | undefined>,

		/** Value for internally-defined counters used by the Dataflow service. */
		internal: FormControl<any | null | undefined>,

		/** The service-generated short identifier for this counter. The short_id -> (name, metadata) mapping is constant for the lifetime of a job. */
		shortId: FormControl<string | null | undefined>,
	}
	export function CreateCounterUpdateFormGroup() {
		return new FormGroup<CounterUpdateFormProperties>({
			boolean: new FormControl<boolean | null | undefined>(undefined),
			cumulative: new FormControl<boolean | null | undefined>(undefined),
			floatingPoint: new FormControl<number | null | undefined>(undefined),
			internal: new FormControl<any | null | undefined>(undefined),
			shortId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A metric value representing a distribution. */
	export interface DistributionUpdate {

		/** A representation of an int64, n, that is immune to precision loss when encoded in JSON. */
		count?: SplitInt64;

		/** Histogram of value counts for a distribution. Buckets have an inclusive lower bound and exclusive upper bound and use "1,2,5 bucketing": The first bucket range is from [0,1) and all subsequent bucket boundaries are powers of ten multiplied by 1, 2, or 5. Thus, bucket boundaries are 0, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, ... Negative values are not supported. */
		histogram?: Histogram;

		/** A representation of an int64, n, that is immune to precision loss when encoded in JSON. */
		max?: SplitInt64;

		/** A representation of an int64, n, that is immune to precision loss when encoded in JSON. */
		min?: SplitInt64;

		/** A representation of an int64, n, that is immune to precision loss when encoded in JSON. */
		sum?: SplitInt64;

		/** Use a double since the sum of squares is likely to overflow int64. */
		sumOfSquares?: number | null;
	}

	/** A metric value representing a distribution. */
	export interface DistributionUpdateFormProperties {

		/** Use a double since the sum of squares is likely to overflow int64. */
		sumOfSquares: FormControl<number | null | undefined>,
	}
	export function CreateDistributionUpdateFormGroup() {
		return new FormGroup<DistributionUpdateFormProperties>({
			sumOfSquares: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A representation of an int64, n, that is immune to precision loss when encoded in JSON. */
	export interface SplitInt64 {

		/** The high order bits, including the sign: n >> 32. */
		highBits?: number | null;

		/** The low order bits: n & 0xffffffff. */
		lowBits?: number | null;
	}

	/** A representation of an int64, n, that is immune to precision loss when encoded in JSON. */
	export interface SplitInt64FormProperties {

		/** The high order bits, including the sign: n >> 32. */
		highBits: FormControl<number | null | undefined>,

		/** The low order bits: n & 0xffffffff. */
		lowBits: FormControl<number | null | undefined>,
	}
	export function CreateSplitInt64FormGroup() {
		return new FormGroup<SplitInt64FormProperties>({
			highBits: new FormControl<number | null | undefined>(undefined),
			lowBits: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Histogram of value counts for a distribution. Buckets have an inclusive lower bound and exclusive upper bound and use "1,2,5 bucketing": The first bucket range is from [0,1) and all subsequent bucket boundaries are powers of ten multiplied by 1, 2, or 5. Thus, bucket boundaries are 0, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, ... Negative values are not supported. */
	export interface Histogram {

		/** Counts of values in each bucket. For efficiency, prefix and trailing buckets with count = 0 are elided. Buckets can store the full range of values of an unsigned long, with ULLONG_MAX falling into the 59th bucket with range [1e19, 2e19). */
		bucketCounts?: Array<string>;

		/** Starting index of first stored bucket. The non-inclusive upper-bound of the ith bucket is given by: pow(10,(i-first_bucket_offset)/3) * (1,2,5)[(i-first_bucket_offset)%3] */
		firstBucketOffset?: number | null;
	}

	/** Histogram of value counts for a distribution. Buckets have an inclusive lower bound and exclusive upper bound and use "1,2,5 bucketing": The first bucket range is from [0,1) and all subsequent bucket boundaries are powers of ten multiplied by 1, 2, or 5. Thus, bucket boundaries are 0, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, ... Negative values are not supported. */
	export interface HistogramFormProperties {

		/** Starting index of first stored bucket. The non-inclusive upper-bound of the ith bucket is given by: pow(10,(i-first_bucket_offset)/3) * (1,2,5)[(i-first_bucket_offset)%3] */
		firstBucketOffset: FormControl<number | null | undefined>,
	}
	export function CreateHistogramFormGroup() {
		return new FormGroup<HistogramFormProperties>({
			firstBucketOffset: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A metric value representing a list of floating point numbers. */
	export interface FloatingPointList {

		/** Elements of the list. */
		elements?: Array<number>;
	}

	/** A metric value representing a list of floating point numbers. */
	export interface FloatingPointListFormProperties {
	}
	export function CreateFloatingPointListFormGroup() {
		return new FormGroup<FloatingPointListFormProperties>({
		});

	}


	/** A representation of a floating point mean metric contribution. */
	export interface FloatingPointMean {

		/** A representation of an int64, n, that is immune to precision loss when encoded in JSON. */
		count?: SplitInt64;

		/** The sum of all values being aggregated. */
		sum?: number | null;
	}

	/** A representation of a floating point mean metric contribution. */
	export interface FloatingPointMeanFormProperties {

		/** The sum of all values being aggregated. */
		sum: FormControl<number | null | undefined>,
	}
	export function CreateFloatingPointMeanFormGroup() {
		return new FormGroup<FloatingPointMeanFormProperties>({
			sum: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A metric value representing temporal values of a variable. */
	export interface IntegerGauge {

		/** The time at which this value was measured. Measured as msecs from epoch. */
		timestamp?: string | null;

		/** A representation of an int64, n, that is immune to precision loss when encoded in JSON. */
		value?: SplitInt64;
	}

	/** A metric value representing temporal values of a variable. */
	export interface IntegerGaugeFormProperties {

		/** The time at which this value was measured. Measured as msecs from epoch. */
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateIntegerGaugeFormGroup() {
		return new FormGroup<IntegerGaugeFormProperties>({
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A metric value representing a list of integers. */
	export interface IntegerList {

		/** Elements of the list. */
		elements?: Array<SplitInt64>;
	}

	/** A metric value representing a list of integers. */
	export interface IntegerListFormProperties {
	}
	export function CreateIntegerListFormGroup() {
		return new FormGroup<IntegerListFormProperties>({
		});

	}


	/** A representation of an integer mean metric contribution. */
	export interface IntegerMean {

		/** A representation of an int64, n, that is immune to precision loss when encoded in JSON. */
		count?: SplitInt64;

		/** A representation of an int64, n, that is immune to precision loss when encoded in JSON. */
		sum?: SplitInt64;
	}

	/** A representation of an integer mean metric contribution. */
	export interface IntegerMeanFormProperties {
	}
	export function CreateIntegerMeanFormGroup() {
		return new FormGroup<IntegerMeanFormProperties>({
		});

	}


	/** Basic metadata about a counter. */
	export interface NameAndKind {

		/** Counter aggregation kind. */
		kind?: CounterMetadataKind | null;

		/** Name of the counter. */
		name?: string | null;
	}

	/** Basic metadata about a counter. */
	export interface NameAndKindFormProperties {

		/** Counter aggregation kind. */
		kind: FormControl<CounterMetadataKind | null | undefined>,

		/** Name of the counter. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateNameAndKindFormGroup() {
		return new FormGroup<NameAndKindFormProperties>({
			kind: new FormControl<CounterMetadataKind | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A metric value representing a list of strings. */
	export interface StringList {

		/** Elements of the list. */
		elements?: Array<string>;
	}

	/** A metric value representing a list of strings. */
	export interface StringListFormProperties {
	}
	export function CreateStringListFormGroup() {
		return new FormGroup<StringListFormProperties>({
		});

	}


	/** A request to create a Cloud Dataflow job from a template. */
	export interface CreateJobFromTemplateRequest {

		/** The environment values to set at runtime. */
		environment?: RuntimeEnvironment;

		/** Required. A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with `gs://`. */
		gcsPath?: string | null;

		/** Required. The job name to use for the created job. */
		jobName?: string | null;

		/** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. */
		location?: string | null;

		/** The runtime parameters to pass to the job. */
		parameters?: {[id: string]: string };
	}

	/** A request to create a Cloud Dataflow job from a template. */
	export interface CreateJobFromTemplateRequestFormProperties {

		/** Required. A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with `gs://`. */
		gcsPath: FormControl<string | null | undefined>,

		/** Required. The job name to use for the created job. */
		jobName: FormControl<string | null | undefined>,

		/** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. */
		location: FormControl<string | null | undefined>,

		/** The runtime parameters to pass to the job. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateJobFromTemplateRequestFormGroup() {
		return new FormGroup<CreateJobFromTemplateRequestFormProperties>({
			gcsPath: new FormControl<string | null | undefined>(undefined),
			jobName: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The environment values to set at runtime. */
	export interface RuntimeEnvironment {

		/** Optional. Additional experiment flags for the job, specified with the `--experiments` option. */
		additionalExperiments?: Array<string>;

		/** Optional. Additional user labels to be specified for the job. Keys and values should follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1kg", "count": "3" }. */
		additionalUserLabels?: {[id: string]: string };

		/** Optional. Whether to bypass the safety checks for the job's temporary directory. Use with caution. */
		bypassTempDirValidation?: boolean | null;

		/** Optional. The disk size, in gigabytes, to use on each remote Compute Engine worker instance. */
		diskSizeGb?: number | null;

		/** Optional. Whether to enable Streaming Engine for the job. */
		enableStreamingEngine?: boolean | null;

		/** Optional. Configuration for VM IPs. */
		ipConfiguration?: FlexTemplateRuntimeEnvironmentIpConfiguration | null;

		/** Optional. Name for the Cloud KMS key for the job. Key format is: projects//locations//keyRings//cryptoKeys/ */
		kmsKeyName?: string | null;

		/** Optional. The machine type to use for the job. Defaults to the value from the template if not specified. */
		machineType?: string | null;

		/** Optional. The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. The default value is 1. */
		maxWorkers?: number | null;

		/** Optional. Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default". */
		network?: string | null;

		/** Optional. The initial number of Google Compute Engine instances for the job. The default value is 11. */
		numWorkers?: number | null;

		/** Optional. The email address of the service account to run the job as. */
		serviceAccountEmail?: string | null;

		/** Optional. Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL. */
		subnetwork?: string | null;

		/** Required. The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`. */
		tempLocation?: string | null;

		/** Required. The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane's region. */
		workerRegion?: string | null;

		/** Optional. The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane's region is chosen based on available capacity. If both `worker_zone` and `zone` are set, `worker_zone` takes precedence. */
		workerZone?: string | null;

		/** Optional. The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence. */
		zone?: string | null;
	}

	/** The environment values to set at runtime. */
	export interface RuntimeEnvironmentFormProperties {

		/** Optional. Additional user labels to be specified for the job. Keys and values should follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1kg", "count": "3" }. */
		additionalUserLabels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Whether to bypass the safety checks for the job's temporary directory. Use with caution. */
		bypassTempDirValidation: FormControl<boolean | null | undefined>,

		/** Optional. The disk size, in gigabytes, to use on each remote Compute Engine worker instance. */
		diskSizeGb: FormControl<number | null | undefined>,

		/** Optional. Whether to enable Streaming Engine for the job. */
		enableStreamingEngine: FormControl<boolean | null | undefined>,

		/** Optional. Configuration for VM IPs. */
		ipConfiguration: FormControl<FlexTemplateRuntimeEnvironmentIpConfiguration | null | undefined>,

		/** Optional. Name for the Cloud KMS key for the job. Key format is: projects//locations//keyRings//cryptoKeys/ */
		kmsKeyName: FormControl<string | null | undefined>,

		/** Optional. The machine type to use for the job. Defaults to the value from the template if not specified. */
		machineType: FormControl<string | null | undefined>,

		/** Optional. The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. The default value is 1. */
		maxWorkers: FormControl<number | null | undefined>,

		/** Optional. Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default". */
		network: FormControl<string | null | undefined>,

		/** Optional. The initial number of Google Compute Engine instances for the job. The default value is 11. */
		numWorkers: FormControl<number | null | undefined>,

		/** Optional. The email address of the service account to run the job as. */
		serviceAccountEmail: FormControl<string | null | undefined>,

		/** Optional. Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL. */
		subnetwork: FormControl<string | null | undefined>,

		/** Required. The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`. */
		tempLocation: FormControl<string | null | undefined>,

		/** Required. The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane's region. */
		workerRegion: FormControl<string | null | undefined>,

		/** Optional. The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane's region is chosen based on available capacity. If both `worker_zone` and `zone` are set, `worker_zone` takes precedence. */
		workerZone: FormControl<string | null | undefined>,

		/** Optional. The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateRuntimeEnvironmentFormGroup() {
		return new FormGroup<RuntimeEnvironmentFormProperties>({
			additionalUserLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			bypassTempDirValidation: new FormControl<boolean | null | undefined>(undefined),
			diskSizeGb: new FormControl<number | null | undefined>(undefined),
			enableStreamingEngine: new FormControl<boolean | null | undefined>(undefined),
			ipConfiguration: new FormControl<FlexTemplateRuntimeEnvironmentIpConfiguration | null | undefined>(undefined),
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			maxWorkers: new FormControl<number | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			numWorkers: new FormControl<number | null | undefined>(undefined),
			serviceAccountEmail: new FormControl<string | null | undefined>(undefined),
			subnetwork: new FormControl<string | null | undefined>(undefined),
			tempLocation: new FormControl<string | null | undefined>(undefined),
			workerRegion: new FormControl<string | null | undefined>(undefined),
			workerZone: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data disk assignment for a given VM instance. */
	export interface DataDiskAssignment {

		/** Mounted data disks. The order is important a data disk's 0-based index in this list defines which persistent directory the disk is mounted to, for example the list of { "myproject-1014-104817-4c2-harness-0-disk-0" }, { "myproject-1014-104817-4c2-harness-0-disk-1" }. */
		dataDisks?: Array<string>;

		/** VM instance name the data disks mounted to, for example "myproject-1014-104817-4c2-harness-0". */
		vmInstance?: string | null;
	}

	/** Data disk assignment for a given VM instance. */
	export interface DataDiskAssignmentFormProperties {

		/** VM instance name the data disks mounted to, for example "myproject-1014-104817-4c2-harness-0". */
		vmInstance: FormControl<string | null | undefined>,
	}
	export function CreateDataDiskAssignmentFormGroup() {
		return new FormGroup<DataDiskAssignmentFormProperties>({
			vmInstance: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration options for sampling elements. */
	export interface DataSamplingConfig {

		/** List of given sampling behaviors to enable. For example, specifying behaviors = [ALWAYS_ON] samples in-flight elements but does not sample exceptions. Can be used to specify multiple behaviors like, behaviors = [ALWAYS_ON, EXCEPTIONS] for specifying periodic sampling and exception sampling. If DISABLED is in the list, then sampling will be disabled and ignore the other given behaviors. Ordering does not matter. */
		behaviors?: Array<string>;
	}

	/** Configuration options for sampling elements. */
	export interface DataSamplingConfigFormProperties {
	}
	export function CreateDataSamplingConfigFormGroup() {
		return new FormGroup<DataSamplingConfigFormProperties>({
		});

	}


	/** Contains per-worker telemetry about the data sampling feature. */
	export interface DataSamplingReport {

		/** Optional. Delta of bytes written to file from previous report. */
		bytesWrittenDelta?: string | null;

		/** Optional. Delta of bytes sampled from previous report. */
		elementsSampledBytes?: string | null;

		/** Optional. Delta of number of elements sampled from previous report. */
		elementsSampledCount?: string | null;

		/** Optional. Delta of number of samples taken from user code exceptions from previous report. */
		exceptionsSampledCount?: string | null;

		/** Optional. Delta of number of PCollections sampled from previous report. */
		pcollectionsSampledCount?: string | null;

		/** Optional. Delta of errors counts from persisting the samples from previous report. */
		persistenceErrorsCount?: string | null;

		/** Optional. Delta of errors counts from retrieving, or translating the samples from previous report. */
		translationErrorsCount?: string | null;
	}

	/** Contains per-worker telemetry about the data sampling feature. */
	export interface DataSamplingReportFormProperties {

		/** Optional. Delta of bytes written to file from previous report. */
		bytesWrittenDelta: FormControl<string | null | undefined>,

		/** Optional. Delta of bytes sampled from previous report. */
		elementsSampledBytes: FormControl<string | null | undefined>,

		/** Optional. Delta of number of elements sampled from previous report. */
		elementsSampledCount: FormControl<string | null | undefined>,

		/** Optional. Delta of number of samples taken from user code exceptions from previous report. */
		exceptionsSampledCount: FormControl<string | null | undefined>,

		/** Optional. Delta of number of PCollections sampled from previous report. */
		pcollectionsSampledCount: FormControl<string | null | undefined>,

		/** Optional. Delta of errors counts from persisting the samples from previous report. */
		persistenceErrorsCount: FormControl<string | null | undefined>,

		/** Optional. Delta of errors counts from retrieving, or translating the samples from previous report. */
		translationErrorsCount: FormControl<string | null | undefined>,
	}
	export function CreateDataSamplingReportFormGroup() {
		return new FormGroup<DataSamplingReportFormProperties>({
			bytesWrittenDelta: new FormControl<string | null | undefined>(undefined),
			elementsSampledBytes: new FormControl<string | null | undefined>(undefined),
			elementsSampledCount: new FormControl<string | null | undefined>(undefined),
			exceptionsSampledCount: new FormControl<string | null | undefined>(undefined),
			pcollectionsSampledCount: new FormControl<string | null | undefined>(undefined),
			persistenceErrorsCount: new FormControl<string | null | undefined>(undefined),
			translationErrorsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary statistics for a population of values. HistogramValue contains a sequence of buckets and gives a count of values that fall into each bucket. Bucket boundares are defined by a formula and bucket widths are either fixed or exponentially increasing. */
	export interface DataflowHistogramValue {

		/** Optional. The number of values in each bucket of the histogram, as described in `bucket_options`. `bucket_counts` should contain N values, where N is the number of buckets specified in `bucket_options`. If `bucket_counts` has fewer than N values, the remaining values are assumed to be 0. */
		bucketCounts?: Array<string>;

		/** `BucketOptions` describes the bucket boundaries used in the histogram. */
		bucketOptions?: BucketOptions;

		/** Number of values recorded in this histogram. */
		count?: string | null;

		/** Statistics for the underflow and overflow bucket. */
		outlierStats?: OutlierStats;
	}

	/** Summary statistics for a population of values. HistogramValue contains a sequence of buckets and gives a count of values that fall into each bucket. Bucket boundares are defined by a formula and bucket widths are either fixed or exponentially increasing. */
	export interface DataflowHistogramValueFormProperties {

		/** Number of values recorded in this histogram. */
		count: FormControl<string | null | undefined>,
	}
	export function CreateDataflowHistogramValueFormGroup() {
		return new FormGroup<DataflowHistogramValueFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Statistics for the underflow and overflow bucket. */
	export interface OutlierStats {

		/** Number of values that are larger than the upper bound of the largest bucket. */
		overflowCount?: string | null;

		/** Mean of values in the overflow bucket. */
		overflowMean?: number | null;

		/** Number of values that are smaller than the lower bound of the smallest bucket. */
		underflowCount?: string | null;

		/** Mean of values in the undeflow bucket. */
		underflowMean?: number | null;
	}

	/** Statistics for the underflow and overflow bucket. */
	export interface OutlierStatsFormProperties {

		/** Number of values that are larger than the upper bound of the largest bucket. */
		overflowCount: FormControl<string | null | undefined>,

		/** Mean of values in the overflow bucket. */
		overflowMean: FormControl<number | null | undefined>,

		/** Number of values that are smaller than the lower bound of the smallest bucket. */
		underflowCount: FormControl<string | null | undefined>,

		/** Mean of values in the undeflow bucket. */
		underflowMean: FormControl<number | null | undefined>,
	}
	export function CreateOutlierStatsFormGroup() {
		return new FormGroup<OutlierStatsFormProperties>({
			overflowCount: new FormControl<string | null | undefined>(undefined),
			overflowMean: new FormControl<number | null | undefined>(undefined),
			underflowCount: new FormControl<string | null | undefined>(undefined),
			underflowMean: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Metadata for a Datastore connector used by the job. */
	export interface DatastoreIODetails {

		/** Namespace used in the connection. */
		namespace?: string | null;

		/** ProjectId accessed in the connection. */
		projectId?: string | null;
	}

	/** Metadata for a Datastore connector used by the job. */
	export interface DatastoreIODetailsFormProperties {

		/** Namespace used in the connection. */
		namespace: FormControl<string | null | undefined>,

		/** ProjectId accessed in the connection. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateDatastoreIODetailsFormGroup() {
		return new FormGroup<DatastoreIODetailsFormProperties>({
			namespace: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes any options that have an effect on the debugging of pipelines. */
	export interface DebugOptions {

		/** Configuration options for sampling elements. */
		dataSampling?: DataSamplingConfig;

		/** When true, enables the logging of the literal hot key to the user's Cloud Logging. */
		enableHotKeyLogging?: boolean | null;
	}

	/** Describes any options that have an effect on the debugging of pipelines. */
	export interface DebugOptionsFormProperties {

		/** When true, enables the logging of the literal hot key to the user's Cloud Logging. */
		enableHotKeyLogging: FormControl<boolean | null | undefined>,
	}
	export function CreateDebugOptionsFormGroup() {
		return new FormGroup<DebugOptionsFormProperties>({
			enableHotKeyLogging: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response from deleting a snapshot. */
	export interface DeleteSnapshotResponse {
	}

	/** Response from deleting a snapshot. */
	export interface DeleteSnapshotResponseFormProperties {
	}
	export function CreateDeleteSnapshotResponseFormGroup() {
		return new FormGroup<DeleteSnapshotResponseFormProperties>({
		});

	}


	/** Specification of one of the bundles produced as a result of splitting a Source (e.g. when executing a SourceSplitRequest, or when splitting an active task using WorkItemStatus.dynamic_source_split), relative to the source being split. */
	export interface DerivedSource {

		/** What source to base the produced source on (if any). */
		derivationMode?: DerivedSourceDerivationMode | null;

		/** A source that records can be read and decoded from. */
		source?: Source;
	}

	/** Specification of one of the bundles produced as a result of splitting a Source (e.g. when executing a SourceSplitRequest, or when splitting an active task using WorkItemStatus.dynamic_source_split), relative to the source being split. */
	export interface DerivedSourceFormProperties {

		/** What source to base the produced source on (if any). */
		derivationMode: FormControl<DerivedSourceDerivationMode | null | undefined>,
	}
	export function CreateDerivedSourceFormGroup() {
		return new FormGroup<DerivedSourceFormProperties>({
			derivationMode: new FormControl<DerivedSourceDerivationMode | null | undefined>(undefined),
		});

	}

	export enum DerivedSourceDerivationMode { SOURCE_DERIVATION_MODE_UNKNOWN = 'SOURCE_DERIVATION_MODE_UNKNOWN', SOURCE_DERIVATION_MODE_INDEPENDENT = 'SOURCE_DERIVATION_MODE_INDEPENDENT', SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT = 'SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT', SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT = 'SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT' }


	/** A source that records can be read and decoded from. */
	export interface Source {

		/** While splitting, sources may specify the produced bundles as differences against another source, in order to save backend-side memory and allow bigger jobs. For details, see SourceSplitRequest. To support this use case, the full set of parameters of the source is logically obtained by taking the latest explicitly specified value of each parameter in the order: base_specs (later items win), spec (overrides anything in base_specs). */
		baseSpecs?: Array<string>;

		/** The codec to use to decode data read from the source. */
		codec?: {[id: string]: any };

		/** Setting this value to true hints to the framework that the source doesn't need splitting, and using SourceSplitRequest on it would yield SOURCE_SPLIT_OUTCOME_USE_CURRENT. E.g. a file splitter may set this to true when splitting a single file into a set of byte ranges of appropriate size, and set this to false when splitting a filepattern into individual files. However, for efficiency, a file splitter may decide to produce file subranges directly from the filepattern to avoid a splitting round-trip. See SourceSplitRequest for an overview of the splitting process. This field is meaningful only in the Source objects populated by the user (e.g. when filling in a DerivedSource). Source objects supplied by the framework to the user don't have this field populated. */
		doesNotNeedSplitting?: boolean | null;

		/** Metadata about a Source useful for automatically optimizing and tuning the pipeline, etc. */
		metadata?: SourceMetadata;

		/** The source to read from, plus its parameters. */
		spec?: {[id: string]: any };
	}

	/** A source that records can be read and decoded from. */
	export interface SourceFormProperties {

		/** The codec to use to decode data read from the source. */
		codec: FormControl<{[id: string]: any } | null | undefined>,

		/** Setting this value to true hints to the framework that the source doesn't need splitting, and using SourceSplitRequest on it would yield SOURCE_SPLIT_OUTCOME_USE_CURRENT. E.g. a file splitter may set this to true when splitting a single file into a set of byte ranges of appropriate size, and set this to false when splitting a filepattern into individual files. However, for efficiency, a file splitter may decide to produce file subranges directly from the filepattern to avoid a splitting round-trip. See SourceSplitRequest for an overview of the splitting process. This field is meaningful only in the Source objects populated by the user (e.g. when filling in a DerivedSource). Source objects supplied by the framework to the user don't have this field populated. */
		doesNotNeedSplitting: FormControl<boolean | null | undefined>,

		/** The source to read from, plus its parameters. */
		spec: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
			codec: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			doesNotNeedSplitting: new FormControl<boolean | null | undefined>(undefined),
			spec: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Metadata about a Source useful for automatically optimizing and tuning the pipeline, etc. */
	export interface SourceMetadata {

		/** An estimate of the total size (in bytes) of the data that would be read from this source. This estimate is in terms of external storage size, before any decompression or other processing done by the reader. */
		estimatedSizeBytes?: string | null;

		/** Specifies that the size of this source is known to be infinite (this is a streaming source). */
		infinite?: boolean | null;

		/** Whether this source is known to produce key/value pairs with the (encoded) keys in lexicographically sorted order. */
		producesSortedKeys?: boolean | null;
	}

	/** Metadata about a Source useful for automatically optimizing and tuning the pipeline, etc. */
	export interface SourceMetadataFormProperties {

		/** An estimate of the total size (in bytes) of the data that would be read from this source. This estimate is in terms of external storage size, before any decompression or other processing done by the reader. */
		estimatedSizeBytes: FormControl<string | null | undefined>,

		/** Specifies that the size of this source is known to be infinite (this is a streaming source). */
		infinite: FormControl<boolean | null | undefined>,

		/** Whether this source is known to produce key/value pairs with the (encoded) keys in lexicographically sorted order. */
		producesSortedKeys: FormControl<boolean | null | undefined>,
	}
	export function CreateSourceMetadataFormGroup() {
		return new FormGroup<SourceMetadataFormProperties>({
			estimatedSizeBytes: new FormControl<string | null | undefined>(undefined),
			infinite: new FormControl<boolean | null | undefined>(undefined),
			producesSortedKeys: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes the data disk used by a workflow job. */
	export interface Disk {

		/** Disk storage type, as defined by Google Compute Engine. This must be a disk type appropriate to the project and zone in which the workers will run. If unknown or unspecified, the service will attempt to choose a reasonable default. For example, the standard persistent disk type is a resource name typically ending in "pd-standard". If SSD persistent disks are available, the resource name typically ends with "pd-ssd". The actual valid values are defined the Google Compute Engine API, not by the Cloud Dataflow API; consult the Google Compute Engine documentation for more information about determining the set of available disk types for a particular project and zone. Google Compute Engine Disk types are local to a particular project in a particular zone, and so the resource name will typically look something like this: compute.googleapis.com/projects/project-id/zones/zone/diskTypes/pd-standard */
		diskType?: string | null;

		/** Directory in a VM where disk is mounted. */
		mountPoint?: string | null;

		/** Size of disk in GB. If zero or unspecified, the service will attempt to choose a reasonable default. */
		sizeGb?: number | null;
	}

	/** Describes the data disk used by a workflow job. */
	export interface DiskFormProperties {

		/** Disk storage type, as defined by Google Compute Engine. This must be a disk type appropriate to the project and zone in which the workers will run. If unknown or unspecified, the service will attempt to choose a reasonable default. For example, the standard persistent disk type is a resource name typically ending in "pd-standard". If SSD persistent disks are available, the resource name typically ends with "pd-ssd". The actual valid values are defined the Google Compute Engine API, not by the Cloud Dataflow API; consult the Google Compute Engine documentation for more information about determining the set of available disk types for a particular project and zone. Google Compute Engine Disk types are local to a particular project in a particular zone, and so the resource name will typically look something like this: compute.googleapis.com/projects/project-id/zones/zone/diskTypes/pd-standard */
		diskType: FormControl<string | null | undefined>,

		/** Directory in a VM where disk is mounted. */
		mountPoint: FormControl<string | null | undefined>,

		/** Size of disk in GB. If zero or unspecified, the service will attempt to choose a reasonable default. */
		sizeGb: FormControl<number | null | undefined>,
	}
	export function CreateDiskFormGroup() {
		return new FormGroup<DiskFormProperties>({
			diskType: new FormControl<string | null | undefined>(undefined),
			mountPoint: new FormControl<string | null | undefined>(undefined),
			sizeGb: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Data provided with a pipeline or transform to provide descriptive info. */
	export interface DisplayData {

		/** Contains value if the data is of a boolean type. */
		boolValue?: boolean | null;

		/** Contains value if the data is of duration type. */
		durationValue?: string | null;

		/** Contains value if the data is of float type. */
		floatValue?: number | null;

		/** Contains value if the data is of int64 type. */
		int64Value?: string | null;

		/** Contains value if the data is of java class type. */
		javaClassValue?: string | null;

		/** The key identifying the display data. This is intended to be used as a label for the display data when viewed in a dax monitoring system. */
		key?: string | null;

		/** An optional label to display in a dax UI for the element. */
		label?: string | null;

		/** The namespace for the key. This is usually a class name or programming language namespace (i.e. python module) which defines the display data. This allows a dax monitoring system to specially handle the data and perform custom rendering. */
		namespace?: string | null;

		/** A possible additional shorter value to display. For example a java_class_name_value of com.mypackage.MyDoFn will be stored with MyDoFn as the short_str_value and com.mypackage.MyDoFn as the java_class_name value. short_str_value can be displayed and java_class_name_value will be displayed as a tooltip. */
		shortStrValue?: string | null;

		/** Contains value if the data is of string type. */
		strValue?: string | null;

		/** Contains value if the data is of timestamp type. */
		timestampValue?: string | null;

		/** An optional full URL. */
		url?: string | null;
	}

	/** Data provided with a pipeline or transform to provide descriptive info. */
	export interface DisplayDataFormProperties {

		/** Contains value if the data is of a boolean type. */
		boolValue: FormControl<boolean | null | undefined>,

		/** Contains value if the data is of duration type. */
		durationValue: FormControl<string | null | undefined>,

		/** Contains value if the data is of float type. */
		floatValue: FormControl<number | null | undefined>,

		/** Contains value if the data is of int64 type. */
		int64Value: FormControl<string | null | undefined>,

		/** Contains value if the data is of java class type. */
		javaClassValue: FormControl<string | null | undefined>,

		/** The key identifying the display data. This is intended to be used as a label for the display data when viewed in a dax monitoring system. */
		key: FormControl<string | null | undefined>,

		/** An optional label to display in a dax UI for the element. */
		label: FormControl<string | null | undefined>,

		/** The namespace for the key. This is usually a class name or programming language namespace (i.e. python module) which defines the display data. This allows a dax monitoring system to specially handle the data and perform custom rendering. */
		namespace: FormControl<string | null | undefined>,

		/** A possible additional shorter value to display. For example a java_class_name_value of com.mypackage.MyDoFn will be stored with MyDoFn as the short_str_value and com.mypackage.MyDoFn as the java_class_name value. short_str_value can be displayed and java_class_name_value will be displayed as a tooltip. */
		shortStrValue: FormControl<string | null | undefined>,

		/** Contains value if the data is of string type. */
		strValue: FormControl<string | null | undefined>,

		/** Contains value if the data is of timestamp type. */
		timestampValue: FormControl<string | null | undefined>,

		/** An optional full URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateDisplayDataFormGroup() {
		return new FormGroup<DisplayDataFormProperties>({
			boolValue: new FormControl<boolean | null | undefined>(undefined),
			durationValue: new FormControl<string | null | undefined>(undefined),
			floatValue: new FormControl<number | null | undefined>(undefined),
			int64Value: new FormControl<string | null | undefined>(undefined),
			javaClassValue: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			shortStrValue: new FormControl<string | null | undefined>(undefined),
			strValue: new FormControl<string | null | undefined>(undefined),
			timestampValue: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** When a task splits using WorkItemStatus.dynamic_source_split, this message describes the two parts of the split relative to the description of the current task's input. */
	export interface DynamicSourceSplit {

		/** Specification of one of the bundles produced as a result of splitting a Source (e.g. when executing a SourceSplitRequest, or when splitting an active task using WorkItemStatus.dynamic_source_split), relative to the source being split. */
		primary?: DerivedSource;

		/** Specification of one of the bundles produced as a result of splitting a Source (e.g. when executing a SourceSplitRequest, or when splitting an active task using WorkItemStatus.dynamic_source_split), relative to the source being split. */
		residual?: DerivedSource;
	}

	/** When a task splits using WorkItemStatus.dynamic_source_split, this message describes the two parts of the split relative to the description of the current task's input. */
	export interface DynamicSourceSplitFormProperties {
	}
	export function CreateDynamicSourceSplitFormGroup() {
		return new FormGroup<DynamicSourceSplitFormProperties>({
		});

	}


	/** Describes the environment in which a Dataflow Job runs. */
	export interface Environment {

		/** The type of cluster manager API to use. If unknown or unspecified, the service will attempt to choose a reasonable default. This should be in the form of the API service name, e.g. "compute.googleapis.com". */
		clusterManagerApiService?: string | null;

		/** The dataset for the current project where various workflow related tables are stored. The supported resource type is: Google BigQuery: bigquery.googleapis.com/{dataset} */
		dataset?: string | null;

		/** Describes any options that have an effect on the debugging of pipelines. */
		debugOptions?: DebugOptions;

		/** The list of experiments to enable. This field should be used for SDK related experiments and not for service related experiments. The proper field for service related experiments is service_options. */
		experiments?: Array<string>;

		/** Which Flexible Resource Scheduling mode to run in. */
		flexResourceSchedulingGoal?: FlexTemplateRuntimeEnvironmentFlexrsGoal | null;

		/** Experimental settings. */
		internalExperiments?: {[id: string]: any };

		/** The Cloud Dataflow SDK pipeline options specified by the user. These options are passed through the service and are used to recreate the SDK pipeline options on the worker in a language agnostic and platform independent way. */
		sdkPipelineOptions?: {[id: string]: any };

		/** Identity to run virtual machines as. Defaults to the default account. */
		serviceAccountEmail?: string | null;

		/** If set, contains the Cloud KMS key identifier used to encrypt data at rest, AKA a Customer Managed Encryption Key (CMEK). Format: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY */
		serviceKmsKeyName?: string | null;

		/** The list of service options to enable. This field should be used for service related experiments only. These experiments, when graduating to GA, should be replaced by dedicated fields or become default (i.e. always on). */
		serviceOptions?: Array<string>;

		/** Output only. The shuffle mode used for the job. */
		shuffleMode?: EnvironmentShuffleMode | null;

		/** Optional. Specifies the Streaming Engine message processing guarantees. Reduces cost and latency but might result in duplicate messages committed to storage. Designed to run simple mapping streaming ETL jobs at the lowest cost. For example, Change Data Capture (CDC) to BigQuery is a canonical use case. */
		streamingMode?: EnvironmentStreamingMode | null;

		/** The prefix of the resources the system should use for temporary storage. The system will append the suffix "/temp-{JOBNAME} to this resource prefix, where {JOBNAME} is the value of the job_name field. The resulting bucket and object prefix is used as the prefix of the resources used to store temporary data needed during the job execution. NOTE: This will override the value in taskrunner_settings. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object} */
		tempStoragePrefix?: string | null;

		/** Output only. Whether the job uses the Streaming Engine resource-based billing model. */
		useStreamingEngineResourceBasedBilling?: boolean | null;

		/** A description of the process that generated the request. */
		userAgent?: {[id: string]: any };

		/** A structure describing which components and their versions of the service are required in order to run the job. */
		version?: {[id: string]: any };

		/** The worker pools. At least one "harness" worker pool must be specified in order for the job to have workers. */
		workerPools?: Array<WorkerPool>;

		/** The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane's region. */
		workerRegion?: string | null;

		/** The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane's region is chosen based on available capacity. */
		workerZone?: string | null;
	}

	/** Describes the environment in which a Dataflow Job runs. */
	export interface EnvironmentFormProperties {

		/** The type of cluster manager API to use. If unknown or unspecified, the service will attempt to choose a reasonable default. This should be in the form of the API service name, e.g. "compute.googleapis.com". */
		clusterManagerApiService: FormControl<string | null | undefined>,

		/** The dataset for the current project where various workflow related tables are stored. The supported resource type is: Google BigQuery: bigquery.googleapis.com/{dataset} */
		dataset: FormControl<string | null | undefined>,

		/** Which Flexible Resource Scheduling mode to run in. */
		flexResourceSchedulingGoal: FormControl<FlexTemplateRuntimeEnvironmentFlexrsGoal | null | undefined>,

		/** Experimental settings. */
		internalExperiments: FormControl<{[id: string]: any } | null | undefined>,

		/** The Cloud Dataflow SDK pipeline options specified by the user. These options are passed through the service and are used to recreate the SDK pipeline options on the worker in a language agnostic and platform independent way. */
		sdkPipelineOptions: FormControl<{[id: string]: any } | null | undefined>,

		/** Identity to run virtual machines as. Defaults to the default account. */
		serviceAccountEmail: FormControl<string | null | undefined>,

		/** If set, contains the Cloud KMS key identifier used to encrypt data at rest, AKA a Customer Managed Encryption Key (CMEK). Format: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY */
		serviceKmsKeyName: FormControl<string | null | undefined>,

		/** Output only. The shuffle mode used for the job. */
		shuffleMode: FormControl<EnvironmentShuffleMode | null | undefined>,

		/** Optional. Specifies the Streaming Engine message processing guarantees. Reduces cost and latency but might result in duplicate messages committed to storage. Designed to run simple mapping streaming ETL jobs at the lowest cost. For example, Change Data Capture (CDC) to BigQuery is a canonical use case. */
		streamingMode: FormControl<EnvironmentStreamingMode | null | undefined>,

		/** The prefix of the resources the system should use for temporary storage. The system will append the suffix "/temp-{JOBNAME} to this resource prefix, where {JOBNAME} is the value of the job_name field. The resulting bucket and object prefix is used as the prefix of the resources used to store temporary data needed during the job execution. NOTE: This will override the value in taskrunner_settings. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object} */
		tempStoragePrefix: FormControl<string | null | undefined>,

		/** Output only. Whether the job uses the Streaming Engine resource-based billing model. */
		useStreamingEngineResourceBasedBilling: FormControl<boolean | null | undefined>,

		/** A description of the process that generated the request. */
		userAgent: FormControl<{[id: string]: any } | null | undefined>,

		/** A structure describing which components and their versions of the service are required in order to run the job. */
		version: FormControl<{[id: string]: any } | null | undefined>,

		/** The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane's region. */
		workerRegion: FormControl<string | null | undefined>,

		/** The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane's region is chosen based on available capacity. */
		workerZone: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentFormGroup() {
		return new FormGroup<EnvironmentFormProperties>({
			clusterManagerApiService: new FormControl<string | null | undefined>(undefined),
			dataset: new FormControl<string | null | undefined>(undefined),
			flexResourceSchedulingGoal: new FormControl<FlexTemplateRuntimeEnvironmentFlexrsGoal | null | undefined>(undefined),
			internalExperiments: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			sdkPipelineOptions: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			serviceAccountEmail: new FormControl<string | null | undefined>(undefined),
			serviceKmsKeyName: new FormControl<string | null | undefined>(undefined),
			shuffleMode: new FormControl<EnvironmentShuffleMode | null | undefined>(undefined),
			streamingMode: new FormControl<EnvironmentStreamingMode | null | undefined>(undefined),
			tempStoragePrefix: new FormControl<string | null | undefined>(undefined),
			useStreamingEngineResourceBasedBilling: new FormControl<boolean | null | undefined>(undefined),
			userAgent: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			version: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			workerRegion: new FormControl<string | null | undefined>(undefined),
			workerZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnvironmentShuffleMode { SHUFFLE_MODE_UNSPECIFIED = 'SHUFFLE_MODE_UNSPECIFIED', VM_BASED = 'VM_BASED', SERVICE_BASED = 'SERVICE_BASED' }

	export enum EnvironmentStreamingMode { STREAMING_MODE_UNSPECIFIED = 'STREAMING_MODE_UNSPECIFIED', STREAMING_MODE_EXACTLY_ONCE = 'STREAMING_MODE_EXACTLY_ONCE', STREAMING_MODE_AT_LEAST_ONCE = 'STREAMING_MODE_AT_LEAST_ONCE' }


	/** Describes one particular pool of Cloud Dataflow workers to be instantiated by the Cloud Dataflow service in order to perform the computations required by a job. Note that a workflow job may use multiple pools, in order to match the various computational requirements of the various stages of the job. */
	export interface WorkerPool {

		/** Settings for WorkerPool autoscaling. */
		autoscalingSettings?: AutoscalingSettings;

		/** Data disks that are used by a VM in this workflow. */
		dataDisks?: Array<Disk>;

		/** The default package set to install. This allows the service to select a default set of packages which are useful to worker harnesses written in a particular language. */
		defaultPackageSet?: WorkerPoolDefaultPackageSet | null;

		/** Size of root disk for VMs, in GB. If zero or unspecified, the service will attempt to choose a reasonable default. */
		diskSizeGb?: number | null;

		/** Fully qualified source image for disks. */
		diskSourceImage?: string | null;

		/** Type of root disk for VMs. If empty or unspecified, the service will attempt to choose a reasonable default. */
		diskType?: string | null;

		/** Configuration for VM IPs. */
		ipConfiguration?: FlexTemplateRuntimeEnvironmentIpConfiguration | null;

		/** The kind of the worker pool; currently only `harness` and `shuffle` are supported. */
		kind?: string | null;

		/** Machine type (e.g. "n1-standard-1"). If empty or unspecified, the service will attempt to choose a reasonable default. */
		machineType?: string | null;

		/** Metadata to set on the Google Compute Engine VMs. */
		metadata?: {[id: string]: string };

		/** Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default". */
		network?: string | null;

		/** The number of threads per worker harness. If empty or unspecified, the service will choose a number of threads (according to the number of cores on the selected machine type for batch, or 1 by convention for streaming). */
		numThreadsPerWorker?: number | null;

		/** Number of Google Compute Engine workers in this pool needed to execute the job. If zero or unspecified, the service will attempt to choose a reasonable default. */
		numWorkers?: number | null;

		/** The action to take on host maintenance, as defined by the Google Compute Engine API. */
		onHostMaintenance?: string | null;

		/** Packages to be installed on workers. */
		packages?: Array<Package>;

		/** Extra arguments for this worker pool. */
		poolArgs?: {[id: string]: any };

		/** Set of SDK harness containers needed to execute this pipeline. This will only be set in the Fn API path. For non-cross-language pipelines this should have only one entry. Cross-language pipelines will have two or more entries. */
		sdkHarnessContainerImages?: Array<SdkHarnessContainerImage>;

		/** Subnetwork to which VMs will be assigned, if desired. Expected to be of the form "regions/REGION/subnetworks/SUBNETWORK". */
		subnetwork?: string | null;

		/** Taskrunner configuration settings. */
		taskrunnerSettings?: TaskRunnerSettings;

		/** Sets the policy for determining when to turndown worker pool. Allowed values are: `TEARDOWN_ALWAYS`, `TEARDOWN_ON_SUCCESS`, and `TEARDOWN_NEVER`. `TEARDOWN_ALWAYS` means workers are always torn down regardless of whether the job succeeds. `TEARDOWN_ON_SUCCESS` means workers are torn down if the job succeeds. `TEARDOWN_NEVER` means the workers are never torn down. If the workers are not torn down by the service, they will continue to run and use Google Compute Engine VM resources in the user's project until they are explicitly terminated by the user. Because of this, Google recommends using the `TEARDOWN_ALWAYS` policy except for small, manually supervised test jobs. If unknown or unspecified, the service will attempt to choose a reasonable default. */
		teardownPolicy?: WorkerPoolTeardownPolicy | null;

		/** Required. Docker container image that executes the Cloud Dataflow worker harness, residing in Google Container Registry. Deprecated for the Fn API path. Use sdk_harness_container_images instead. */
		workerHarnessContainerImage?: string | null;

		/** Zone to run the worker pools in. If empty or unspecified, the service will attempt to choose a reasonable default. */
		zone?: string | null;
	}

	/** Describes one particular pool of Cloud Dataflow workers to be instantiated by the Cloud Dataflow service in order to perform the computations required by a job. Note that a workflow job may use multiple pools, in order to match the various computational requirements of the various stages of the job. */
	export interface WorkerPoolFormProperties {

		/** The default package set to install. This allows the service to select a default set of packages which are useful to worker harnesses written in a particular language. */
		defaultPackageSet: FormControl<WorkerPoolDefaultPackageSet | null | undefined>,

		/** Size of root disk for VMs, in GB. If zero or unspecified, the service will attempt to choose a reasonable default. */
		diskSizeGb: FormControl<number | null | undefined>,

		/** Fully qualified source image for disks. */
		diskSourceImage: FormControl<string | null | undefined>,

		/** Type of root disk for VMs. If empty or unspecified, the service will attempt to choose a reasonable default. */
		diskType: FormControl<string | null | undefined>,

		/** Configuration for VM IPs. */
		ipConfiguration: FormControl<FlexTemplateRuntimeEnvironmentIpConfiguration | null | undefined>,

		/** The kind of the worker pool; currently only `harness` and `shuffle` are supported. */
		kind: FormControl<string | null | undefined>,

		/** Machine type (e.g. "n1-standard-1"). If empty or unspecified, the service will attempt to choose a reasonable default. */
		machineType: FormControl<string | null | undefined>,

		/** Metadata to set on the Google Compute Engine VMs. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default". */
		network: FormControl<string | null | undefined>,

		/** The number of threads per worker harness. If empty or unspecified, the service will choose a number of threads (according to the number of cores on the selected machine type for batch, or 1 by convention for streaming). */
		numThreadsPerWorker: FormControl<number | null | undefined>,

		/** Number of Google Compute Engine workers in this pool needed to execute the job. If zero or unspecified, the service will attempt to choose a reasonable default. */
		numWorkers: FormControl<number | null | undefined>,

		/** The action to take on host maintenance, as defined by the Google Compute Engine API. */
		onHostMaintenance: FormControl<string | null | undefined>,

		/** Extra arguments for this worker pool. */
		poolArgs: FormControl<{[id: string]: any } | null | undefined>,

		/** Subnetwork to which VMs will be assigned, if desired. Expected to be of the form "regions/REGION/subnetworks/SUBNETWORK". */
		subnetwork: FormControl<string | null | undefined>,

		/** Sets the policy for determining when to turndown worker pool. Allowed values are: `TEARDOWN_ALWAYS`, `TEARDOWN_ON_SUCCESS`, and `TEARDOWN_NEVER`. `TEARDOWN_ALWAYS` means workers are always torn down regardless of whether the job succeeds. `TEARDOWN_ON_SUCCESS` means workers are torn down if the job succeeds. `TEARDOWN_NEVER` means the workers are never torn down. If the workers are not torn down by the service, they will continue to run and use Google Compute Engine VM resources in the user's project until they are explicitly terminated by the user. Because of this, Google recommends using the `TEARDOWN_ALWAYS` policy except for small, manually supervised test jobs. If unknown or unspecified, the service will attempt to choose a reasonable default. */
		teardownPolicy: FormControl<WorkerPoolTeardownPolicy | null | undefined>,

		/** Required. Docker container image that executes the Cloud Dataflow worker harness, residing in Google Container Registry. Deprecated for the Fn API path. Use sdk_harness_container_images instead. */
		workerHarnessContainerImage: FormControl<string | null | undefined>,

		/** Zone to run the worker pools in. If empty or unspecified, the service will attempt to choose a reasonable default. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateWorkerPoolFormGroup() {
		return new FormGroup<WorkerPoolFormProperties>({
			defaultPackageSet: new FormControl<WorkerPoolDefaultPackageSet | null | undefined>(undefined),
			diskSizeGb: new FormControl<number | null | undefined>(undefined),
			diskSourceImage: new FormControl<string | null | undefined>(undefined),
			diskType: new FormControl<string | null | undefined>(undefined),
			ipConfiguration: new FormControl<FlexTemplateRuntimeEnvironmentIpConfiguration | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			numThreadsPerWorker: new FormControl<number | null | undefined>(undefined),
			numWorkers: new FormControl<number | null | undefined>(undefined),
			onHostMaintenance: new FormControl<string | null | undefined>(undefined),
			poolArgs: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			subnetwork: new FormControl<string | null | undefined>(undefined),
			teardownPolicy: new FormControl<WorkerPoolTeardownPolicy | null | undefined>(undefined),
			workerHarnessContainerImage: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WorkerPoolDefaultPackageSet { DEFAULT_PACKAGE_SET_UNKNOWN = 'DEFAULT_PACKAGE_SET_UNKNOWN', DEFAULT_PACKAGE_SET_NONE = 'DEFAULT_PACKAGE_SET_NONE', DEFAULT_PACKAGE_SET_JAVA = 'DEFAULT_PACKAGE_SET_JAVA', DEFAULT_PACKAGE_SET_PYTHON = 'DEFAULT_PACKAGE_SET_PYTHON' }


	/** The packages that must be installed in order for a worker to run the steps of the Cloud Dataflow job that will be assigned to its worker pool. This is the mechanism by which the Cloud Dataflow SDK causes code to be loaded onto the workers. For example, the Cloud Dataflow Java SDK might use this to install jars containing the user's code and all of the various dependencies (libraries, data files, etc.) required in order for that code to run. */
	export interface Package {

		/** The resource to read the package from. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket} bucket.storage.googleapis.com/ */
		location?: string | null;

		/** The name of the package. */
		name?: string | null;
	}

	/** The packages that must be installed in order for a worker to run the steps of the Cloud Dataflow job that will be assigned to its worker pool. This is the mechanism by which the Cloud Dataflow SDK causes code to be loaded onto the workers. For example, the Cloud Dataflow Java SDK might use this to install jars containing the user's code and all of the various dependencies (libraries, data files, etc.) required in order for that code to run. */
	export interface PackageFormProperties {

		/** The resource to read the package from. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket} bucket.storage.googleapis.com/ */
		location: FormControl<string | null | undefined>,

		/** The name of the package. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePackageFormGroup() {
		return new FormGroup<PackageFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines an SDK harness container for executing Dataflow pipelines. */
	export interface SdkHarnessContainerImage {

		/** The set of capabilities enumerated in the above Environment proto. See also [beam_runner_api.proto](https://github.com/apache/beam/blob/master/model/pipeline/src/main/proto/org/apache/beam/model/pipeline/v1/beam_runner_api.proto) */
		capabilities?: Array<string>;

		/** A docker container image that resides in Google Container Registry. */
		containerImage?: string | null;

		/** Environment ID for the Beam runner API proto Environment that corresponds to the current SDK Harness. */
		environmentId?: string | null;

		/** If true, recommends the Dataflow service to use only one core per SDK container instance with this image. If false (or unset) recommends using more than one core per SDK container instance with this image for efficiency. Note that Dataflow service may choose to override this property if needed. */
		useSingleCorePerContainer?: boolean | null;
	}

	/** Defines an SDK harness container for executing Dataflow pipelines. */
	export interface SdkHarnessContainerImageFormProperties {

		/** A docker container image that resides in Google Container Registry. */
		containerImage: FormControl<string | null | undefined>,

		/** Environment ID for the Beam runner API proto Environment that corresponds to the current SDK Harness. */
		environmentId: FormControl<string | null | undefined>,

		/** If true, recommends the Dataflow service to use only one core per SDK container instance with this image. If false (or unset) recommends using more than one core per SDK container instance with this image for efficiency. Note that Dataflow service may choose to override this property if needed. */
		useSingleCorePerContainer: FormControl<boolean | null | undefined>,
	}
	export function CreateSdkHarnessContainerImageFormGroup() {
		return new FormGroup<SdkHarnessContainerImageFormProperties>({
			containerImage: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			useSingleCorePerContainer: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Taskrunner configuration settings. */
	export interface TaskRunnerSettings {

		/** Whether to also send taskrunner log info to stderr. */
		alsologtostderr?: boolean | null;

		/** The location on the worker for task-specific subdirectories. */
		baseTaskDir?: string | null;

		/** The base URL for the taskrunner to use when accessing Google Cloud APIs. When workers access Google Cloud APIs, they logically do so via relative URLs. If this field is specified, it supplies the base URL to use for resolving these relative URLs. The normative algorithm used is defined by RFC 1808, "Relative Uniform Resource Locators". If not specified, the default value is "http://www.googleapis.com/" */
		baseUrl?: string | null;

		/** The file to store preprocessing commands in. */
		commandlinesFileName?: string | null;

		/** Whether to continue taskrunner if an exception is hit. */
		continueOnException?: boolean | null;

		/** The API version of endpoint, e.g. "v1b3" */
		dataflowApiVersion?: string | null;

		/** The command to launch the worker harness. */
		harnessCommand?: string | null;

		/** The suggested backend language. */
		languageHint?: string | null;

		/** The directory on the VM to store logs. */
		logDir?: string | null;

		/** Whether to send taskrunner log info to Google Compute Engine VM serial console. */
		logToSerialconsole?: boolean | null;

		/** Indicates where to put logs. If this is not specified, the logs will not be uploaded. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object} */
		logUploadLocation?: string | null;

		/** The OAuth2 scopes to be requested by the taskrunner in order to access the Cloud Dataflow API. */
		oauthScopes?: Array<string>;

		/** Provides data to pass through to the worker harness. */
		parallelWorkerSettings?: WorkerSettings;

		/** The streaming worker main class name. */
		streamingWorkerMainClass?: string | null;

		/** The UNIX group ID on the worker VM to use for tasks launched by taskrunner; e.g. "wheel". */
		taskGroup?: string | null;

		/** The UNIX user ID on the worker VM to use for tasks launched by taskrunner; e.g. "root". */
		taskUser?: string | null;

		/** The prefix of the resources the taskrunner should use for temporary storage. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object} */
		tempStoragePrefix?: string | null;

		/** The ID string of the VM. */
		vmId?: string | null;

		/** The file to store the workflow in. */
		workflowFileName?: string | null;
	}

	/** Taskrunner configuration settings. */
	export interface TaskRunnerSettingsFormProperties {

		/** Whether to also send taskrunner log info to stderr. */
		alsologtostderr: FormControl<boolean | null | undefined>,

		/** The location on the worker for task-specific subdirectories. */
		baseTaskDir: FormControl<string | null | undefined>,

		/** The base URL for the taskrunner to use when accessing Google Cloud APIs. When workers access Google Cloud APIs, they logically do so via relative URLs. If this field is specified, it supplies the base URL to use for resolving these relative URLs. The normative algorithm used is defined by RFC 1808, "Relative Uniform Resource Locators". If not specified, the default value is "http://www.googleapis.com/" */
		baseUrl: FormControl<string | null | undefined>,

		/** The file to store preprocessing commands in. */
		commandlinesFileName: FormControl<string | null | undefined>,

		/** Whether to continue taskrunner if an exception is hit. */
		continueOnException: FormControl<boolean | null | undefined>,

		/** The API version of endpoint, e.g. "v1b3" */
		dataflowApiVersion: FormControl<string | null | undefined>,

		/** The command to launch the worker harness. */
		harnessCommand: FormControl<string | null | undefined>,

		/** The suggested backend language. */
		languageHint: FormControl<string | null | undefined>,

		/** The directory on the VM to store logs. */
		logDir: FormControl<string | null | undefined>,

		/** Whether to send taskrunner log info to Google Compute Engine VM serial console. */
		logToSerialconsole: FormControl<boolean | null | undefined>,

		/** Indicates where to put logs. If this is not specified, the logs will not be uploaded. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object} */
		logUploadLocation: FormControl<string | null | undefined>,

		/** The streaming worker main class name. */
		streamingWorkerMainClass: FormControl<string | null | undefined>,

		/** The UNIX group ID on the worker VM to use for tasks launched by taskrunner; e.g. "wheel". */
		taskGroup: FormControl<string | null | undefined>,

		/** The UNIX user ID on the worker VM to use for tasks launched by taskrunner; e.g. "root". */
		taskUser: FormControl<string | null | undefined>,

		/** The prefix of the resources the taskrunner should use for temporary storage. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object} */
		tempStoragePrefix: FormControl<string | null | undefined>,

		/** The ID string of the VM. */
		vmId: FormControl<string | null | undefined>,

		/** The file to store the workflow in. */
		workflowFileName: FormControl<string | null | undefined>,
	}
	export function CreateTaskRunnerSettingsFormGroup() {
		return new FormGroup<TaskRunnerSettingsFormProperties>({
			alsologtostderr: new FormControl<boolean | null | undefined>(undefined),
			baseTaskDir: new FormControl<string | null | undefined>(undefined),
			baseUrl: new FormControl<string | null | undefined>(undefined),
			commandlinesFileName: new FormControl<string | null | undefined>(undefined),
			continueOnException: new FormControl<boolean | null | undefined>(undefined),
			dataflowApiVersion: new FormControl<string | null | undefined>(undefined),
			harnessCommand: new FormControl<string | null | undefined>(undefined),
			languageHint: new FormControl<string | null | undefined>(undefined),
			logDir: new FormControl<string | null | undefined>(undefined),
			logToSerialconsole: new FormControl<boolean | null | undefined>(undefined),
			logUploadLocation: new FormControl<string | null | undefined>(undefined),
			streamingWorkerMainClass: new FormControl<string | null | undefined>(undefined),
			taskGroup: new FormControl<string | null | undefined>(undefined),
			taskUser: new FormControl<string | null | undefined>(undefined),
			tempStoragePrefix: new FormControl<string | null | undefined>(undefined),
			vmId: new FormControl<string | null | undefined>(undefined),
			workflowFileName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides data to pass through to the worker harness. */
	export interface WorkerSettings {

		/** The base URL for accessing Google Cloud APIs. When workers access Google Cloud APIs, they logically do so via relative URLs. If this field is specified, it supplies the base URL to use for resolving these relative URLs. The normative algorithm used is defined by RFC 1808, "Relative Uniform Resource Locators". If not specified, the default value is "http://www.googleapis.com/" */
		baseUrl?: string | null;

		/** Whether to send work progress updates to the service. */
		reportingEnabled?: boolean | null;

		/** The Cloud Dataflow service path relative to the root URL, for example, "dataflow/v1b3/projects". */
		servicePath?: string | null;

		/** The Shuffle service path relative to the root URL, for example, "shuffle/v1beta1". */
		shuffleServicePath?: string | null;

		/** The prefix of the resources the system should use for temporary storage. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object} */
		tempStoragePrefix?: string | null;

		/** The ID of the worker running this pipeline. */
		workerId?: string | null;
	}

	/** Provides data to pass through to the worker harness. */
	export interface WorkerSettingsFormProperties {

		/** The base URL for accessing Google Cloud APIs. When workers access Google Cloud APIs, they logically do so via relative URLs. If this field is specified, it supplies the base URL to use for resolving these relative URLs. The normative algorithm used is defined by RFC 1808, "Relative Uniform Resource Locators". If not specified, the default value is "http://www.googleapis.com/" */
		baseUrl: FormControl<string | null | undefined>,

		/** Whether to send work progress updates to the service. */
		reportingEnabled: FormControl<boolean | null | undefined>,

		/** The Cloud Dataflow service path relative to the root URL, for example, "dataflow/v1b3/projects". */
		servicePath: FormControl<string | null | undefined>,

		/** The Shuffle service path relative to the root URL, for example, "shuffle/v1beta1". */
		shuffleServicePath: FormControl<string | null | undefined>,

		/** The prefix of the resources the system should use for temporary storage. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object} */
		tempStoragePrefix: FormControl<string | null | undefined>,

		/** The ID of the worker running this pipeline. */
		workerId: FormControl<string | null | undefined>,
	}
	export function CreateWorkerSettingsFormGroup() {
		return new FormGroup<WorkerSettingsFormProperties>({
			baseUrl: new FormControl<string | null | undefined>(undefined),
			reportingEnabled: new FormControl<boolean | null | undefined>(undefined),
			servicePath: new FormControl<string | null | undefined>(undefined),
			shuffleServicePath: new FormControl<string | null | undefined>(undefined),
			tempStoragePrefix: new FormControl<string | null | undefined>(undefined),
			workerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WorkerPoolTeardownPolicy { TEARDOWN_POLICY_UNKNOWN = 'TEARDOWN_POLICY_UNKNOWN', TEARDOWN_ALWAYS = 'TEARDOWN_ALWAYS', TEARDOWN_ON_SUCCESS = 'TEARDOWN_ON_SUCCESS', TEARDOWN_NEVER = 'TEARDOWN_NEVER' }


	/** A message describing the state of a particular execution stage. */
	export interface ExecutionStageState {

		/** The time at which the stage transitioned to this state. */
		currentStateTime?: string | null;

		/** The name of the execution stage. */
		executionStageName?: string | null;

		/** Executions stage states allow the same set of values as JobState. */
		executionStageState?: ExecutionStageStateExecutionStageState | null;
	}

	/** A message describing the state of a particular execution stage. */
	export interface ExecutionStageStateFormProperties {

		/** The time at which the stage transitioned to this state. */
		currentStateTime: FormControl<string | null | undefined>,

		/** The name of the execution stage. */
		executionStageName: FormControl<string | null | undefined>,

		/** Executions stage states allow the same set of values as JobState. */
		executionStageState: FormControl<ExecutionStageStateExecutionStageState | null | undefined>,
	}
	export function CreateExecutionStageStateFormGroup() {
		return new FormGroup<ExecutionStageStateFormProperties>({
			currentStateTime: new FormControl<string | null | undefined>(undefined),
			executionStageName: new FormControl<string | null | undefined>(undefined),
			executionStageState: new FormControl<ExecutionStageStateExecutionStageState | null | undefined>(undefined),
		});

	}

	export enum ExecutionStageStateExecutionStageState { JOB_STATE_UNKNOWN = 'JOB_STATE_UNKNOWN', JOB_STATE_STOPPED = 'JOB_STATE_STOPPED', JOB_STATE_RUNNING = 'JOB_STATE_RUNNING', JOB_STATE_DONE = 'JOB_STATE_DONE', JOB_STATE_FAILED = 'JOB_STATE_FAILED', JOB_STATE_CANCELLED = 'JOB_STATE_CANCELLED', JOB_STATE_UPDATED = 'JOB_STATE_UPDATED', JOB_STATE_DRAINING = 'JOB_STATE_DRAINING', JOB_STATE_DRAINED = 'JOB_STATE_DRAINED', JOB_STATE_PENDING = 'JOB_STATE_PENDING', JOB_STATE_CANCELLING = 'JOB_STATE_CANCELLING', JOB_STATE_QUEUED = 'JOB_STATE_QUEUED', JOB_STATE_RESOURCE_CLEANING_UP = 'JOB_STATE_RESOURCE_CLEANING_UP' }


	/** Description of the composing transforms, names/ids, and input/outputs of a stage of execution. Some composing transforms and sources may have been generated by the Dataflow service during execution planning. */
	export interface ExecutionStageSummary {

		/** Collections produced and consumed by component transforms of this stage. */
		componentSource?: Array<ComponentSource>;

		/** Transforms that comprise this execution stage. */
		componentTransform?: Array<ComponentTransform>;

		/** Dataflow service generated id for this stage. */
		id?: string | null;

		/** Input sources for this stage. */
		inputSource?: Array<StageSource>;

		/** Type of transform this stage is executing. */
		kind?: ExecutionStageSummaryKind | null;

		/** Dataflow service generated name for this stage. */
		name?: string | null;

		/** Output sources for this stage. */
		outputSource?: Array<StageSource>;

		/** Other stages that must complete before this stage can run. */
		prerequisiteStage?: Array<string>;
	}

	/** Description of the composing transforms, names/ids, and input/outputs of a stage of execution. Some composing transforms and sources may have been generated by the Dataflow service during execution planning. */
	export interface ExecutionStageSummaryFormProperties {

		/** Dataflow service generated id for this stage. */
		id: FormControl<string | null | undefined>,

		/** Type of transform this stage is executing. */
		kind: FormControl<ExecutionStageSummaryKind | null | undefined>,

		/** Dataflow service generated name for this stage. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateExecutionStageSummaryFormGroup() {
		return new FormGroup<ExecutionStageSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<ExecutionStageSummaryKind | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of an input or output of an execution stage. */
	export interface StageSource {

		/** Dataflow service generated name for this source. */
		name?: string | null;

		/** User name for the original user transform or collection with which this source is most closely associated. */
		originalTransformOrCollection?: string | null;

		/** Size of the source, if measurable. */
		sizeBytes?: string | null;

		/** Human-readable name for this source; may be user or system generated. */
		userName?: string | null;
	}

	/** Description of an input or output of an execution stage. */
	export interface StageSourceFormProperties {

		/** Dataflow service generated name for this source. */
		name: FormControl<string | null | undefined>,

		/** User name for the original user transform or collection with which this source is most closely associated. */
		originalTransformOrCollection: FormControl<string | null | undefined>,

		/** Size of the source, if measurable. */
		sizeBytes: FormControl<string | null | undefined>,

		/** Human-readable name for this source; may be user or system generated. */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateStageSourceFormGroup() {
		return new FormGroup<StageSourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			originalTransformOrCollection: new FormControl<string | null | undefined>(undefined),
			sizeBytes: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExecutionStageSummaryKind { UNKNOWN_KIND = 'UNKNOWN_KIND', PAR_DO_KIND = 'PAR_DO_KIND', GROUP_BY_KEY_KIND = 'GROUP_BY_KEY_KIND', FLATTEN_KIND = 'FLATTEN_KIND', READ_KIND = 'READ_KIND', WRITE_KIND = 'WRITE_KIND', CONSTANT_KIND = 'CONSTANT_KIND', SINGLETON_KIND = 'SINGLETON_KIND', SHUFFLE_KIND = 'SHUFFLE_KIND' }


	/** Indicates which [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) failed to respond to a request for data. */
	export interface FailedLocation {

		/** The name of the [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that failed to respond. */
		name?: string | null;
	}

	/** Indicates which [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) failed to respond to a request for data. */
	export interface FailedLocationFormProperties {

		/** The name of the [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that failed to respond. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateFailedLocationFormGroup() {
		return new FormGroup<FailedLocationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for a File connector used by the job. */
	export interface FileIODetails {

		/** File Pattern used to access files by the connector. */
		filePattern?: string | null;
	}

	/** Metadata for a File connector used by the job. */
	export interface FileIODetailsFormProperties {

		/** File Pattern used to access files by the connector. */
		filePattern: FormControl<string | null | undefined>,
	}
	export function CreateFileIODetailsFormGroup() {
		return new FormGroup<FileIODetailsFormProperties>({
			filePattern: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An instruction that copies its inputs (zero or more) to its (single) output. */
	export interface FlattenInstruction {

		/** Describes the inputs to the flatten instruction. */
		inputs?: Array<InstructionInput>;
	}

	/** An instruction that copies its inputs (zero or more) to its (single) output. */
	export interface FlattenInstructionFormProperties {
	}
	export function CreateFlattenInstructionFormGroup() {
		return new FormGroup<FlattenInstructionFormProperties>({
		});

	}


	/** An input of an instruction, as a reference to an output of a producer instruction. */
	export interface InstructionInput {

		/** The output index (origin zero) within the producer. */
		outputNum?: number | null;

		/** The index (origin zero) of the parallel instruction that produces the output to be consumed by this input. This index is relative to the list of instructions in this input's instruction's containing MapTask. */
		producerInstructionIndex?: number | null;
	}

	/** An input of an instruction, as a reference to an output of a producer instruction. */
	export interface InstructionInputFormProperties {

		/** The output index (origin zero) within the producer. */
		outputNum: FormControl<number | null | undefined>,

		/** The index (origin zero) of the parallel instruction that produces the output to be consumed by this input. This index is relative to the list of instructions in this input's instruction's containing MapTask. */
		producerInstructionIndex: FormControl<number | null | undefined>,
	}
	export function CreateInstructionInputFormGroup() {
		return new FormGroup<InstructionInputFormProperties>({
			outputNum: new FormControl<number | null | undefined>(undefined),
			producerInstructionIndex: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request to get updated debug configuration for component. */
	export interface GetDebugConfigRequest {

		/** The internal component id for which debug configuration is requested. */
		componentId?: string | null;

		/** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. */
		location?: string | null;

		/** The worker id, i.e., VM hostname. */
		workerId?: string | null;
	}

	/** Request to get updated debug configuration for component. */
	export interface GetDebugConfigRequestFormProperties {

		/** The internal component id for which debug configuration is requested. */
		componentId: FormControl<string | null | undefined>,

		/** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. */
		location: FormControl<string | null | undefined>,

		/** The worker id, i.e., VM hostname. */
		workerId: FormControl<string | null | undefined>,
	}
	export function CreateGetDebugConfigRequestFormGroup() {
		return new FormGroup<GetDebugConfigRequestFormProperties>({
			componentId: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			workerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to a get debug configuration request. */
	export interface GetDebugConfigResponse {

		/** The encoded debug configuration for the requested component. */
		config?: string | null;
	}

	/** Response to a get debug configuration request. */
	export interface GetDebugConfigResponseFormProperties {

		/** The encoded debug configuration for the requested component. */
		config: FormControl<string | null | undefined>,
	}
	export function CreateGetDebugConfigResponseFormGroup() {
		return new FormGroup<GetDebugConfigResponseFormProperties>({
			config: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to a GetTemplate request. */
	export interface GetTemplateResponse {

		/** Metadata describing a template. */
		metadata?: TemplateMetadata;

		/** RuntimeMetadata describing a runtime environment. */
		runtimeMetadata?: RuntimeMetadata;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: Status;

		/** Template Type. */
		templateType?: GetTemplateResponseTemplateType | null;
	}

	/** The response to a GetTemplate request. */
	export interface GetTemplateResponseFormProperties {

		/** Template Type. */
		templateType: FormControl<GetTemplateResponseTemplateType | null | undefined>,
	}
	export function CreateGetTemplateResponseFormGroup() {
		return new FormGroup<GetTemplateResponseFormProperties>({
			templateType: new FormControl<GetTemplateResponseTemplateType | null | undefined>(undefined),
		});

	}


	/** RuntimeMetadata describing a runtime environment. */
	export interface RuntimeMetadata {

		/** The parameters for the template. */
		parameters?: Array<ParameterMetadata>;

		/** SDK Information. */
		sdkInfo?: SDKInfo;
	}

	/** RuntimeMetadata describing a runtime environment. */
	export interface RuntimeMetadataFormProperties {
	}
	export function CreateRuntimeMetadataFormGroup() {
		return new FormGroup<RuntimeMetadataFormProperties>({
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

	export enum GetTemplateResponseTemplateType { UNKNOWN = 'UNKNOWN', LEGACY = 'LEGACY', FLEX = 'FLEX' }


	/** Information useful for debugging a hot key detection. */
	export interface HotKeyDebuggingInfo {

		/** Debugging information for each detected hot key. Keyed by a hash of the key. */
		detectedHotKeys?: {[id: string]: HotKeyInfo };
	}

	/** Information useful for debugging a hot key detection. */
	export interface HotKeyDebuggingInfoFormProperties {

		/** Debugging information for each detected hot key. Keyed by a hash of the key. */
		detectedHotKeys: FormControl<{[id: string]: HotKeyInfo } | null | undefined>,
	}
	export function CreateHotKeyDebuggingInfoFormGroup() {
		return new FormGroup<HotKeyDebuggingInfoFormProperties>({
			detectedHotKeys: new FormControl<{[id: string]: HotKeyInfo } | null | undefined>(undefined),
		});

	}


	/** Information about a hot key. */
	export interface HotKeyInfo {

		/** The age of the hot key measured from when it was first detected. */
		hotKeyAge?: string | null;

		/** A detected hot key that is causing limited parallelism. This field will be populated only if the following flag is set to true: "--enable_hot_key_logging". */
		key?: string | null;

		/** If true, then the above key is truncated and cannot be deserialized. This occurs if the key above is populated and the key size is >5MB. */
		keyTruncated?: boolean | null;
	}

	/** Information about a hot key. */
	export interface HotKeyInfoFormProperties {

		/** The age of the hot key measured from when it was first detected. */
		hotKeyAge: FormControl<string | null | undefined>,

		/** A detected hot key that is causing limited parallelism. This field will be populated only if the following flag is set to true: "--enable_hot_key_logging". */
		key: FormControl<string | null | undefined>,

		/** If true, then the above key is truncated and cannot be deserialized. This occurs if the key above is populated and the key size is >5MB. */
		keyTruncated: FormControl<boolean | null | undefined>,
	}
	export function CreateHotKeyInfoFormGroup() {
		return new FormGroup<HotKeyInfoFormProperties>({
			hotKeyAge: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			keyTruncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Proto describing a hot key detected on a given WorkItem. */
	export interface HotKeyDetection {

		/** The age of the hot key measured from when it was first detected. */
		hotKeyAge?: string | null;

		/** System-defined name of the step containing this hot key. Unique across the workflow. */
		systemName?: string | null;

		/** User-provided name of the step that contains this hot key. */
		userStepName?: string | null;
	}

	/** Proto describing a hot key detected on a given WorkItem. */
	export interface HotKeyDetectionFormProperties {

		/** The age of the hot key measured from when it was first detected. */
		hotKeyAge: FormControl<string | null | undefined>,

		/** System-defined name of the step containing this hot key. Unique across the workflow. */
		systemName: FormControl<string | null | undefined>,

		/** User-provided name of the step that contains this hot key. */
		userStepName: FormControl<string | null | undefined>,
	}
	export function CreateHotKeyDetectionFormGroup() {
		return new FormGroup<HotKeyDetectionFormProperties>({
			hotKeyAge: new FormControl<string | null | undefined>(undefined),
			systemName: new FormControl<string | null | undefined>(undefined),
			userStepName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An output of an instruction. */
	export interface InstructionOutput {

		/** The codec to use to encode data being written via this output. */
		codec?: {[id: string]: any };

		/** The user-provided name of this output. */
		name?: string | null;

		/** For system-generated byte and mean byte metrics, certain instructions should only report the key size. */
		onlyCountKeyBytes?: boolean | null;

		/** For system-generated byte and mean byte metrics, certain instructions should only report the value size. */
		onlyCountValueBytes?: boolean | null;

		/** System-defined name for this output in the original workflow graph. Outputs that do not contribute to an original instruction do not set this. */
		originalName?: string | null;

		/** System-defined name of this output. Unique across the workflow. */
		systemName?: string | null;
	}

	/** An output of an instruction. */
	export interface InstructionOutputFormProperties {

		/** The codec to use to encode data being written via this output. */
		codec: FormControl<{[id: string]: any } | null | undefined>,

		/** The user-provided name of this output. */
		name: FormControl<string | null | undefined>,

		/** For system-generated byte and mean byte metrics, certain instructions should only report the key size. */
		onlyCountKeyBytes: FormControl<boolean | null | undefined>,

		/** For system-generated byte and mean byte metrics, certain instructions should only report the value size. */
		onlyCountValueBytes: FormControl<boolean | null | undefined>,

		/** System-defined name for this output in the original workflow graph. Outputs that do not contribute to an original instruction do not set this. */
		originalName: FormControl<string | null | undefined>,

		/** System-defined name of this output. Unique across the workflow. */
		systemName: FormControl<string | null | undefined>,
	}
	export function CreateInstructionOutputFormGroup() {
		return new FormGroup<InstructionOutputFormProperties>({
			codec: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			onlyCountKeyBytes: new FormControl<boolean | null | undefined>(undefined),
			onlyCountValueBytes: new FormControl<boolean | null | undefined>(undefined),
			originalName: new FormControl<string | null | undefined>(undefined),
			systemName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a job to be run by the Cloud Dataflow service. Do not enter confidential information when you supply string values using the API. */
	export interface Job {

		/** The client's unique identifier of the job, re-used across retried attempts. If this field is set, the service will ensure its uniqueness. The request to create a job will fail if the service has knowledge of a previously submitted job with the same client's ID and job name. The caller may use this field to ensure idempotence of job creation across retried attempts to create a job. By default, the field is empty and, in that case, the service ignores it. */
		clientRequestId?: string | null;

		/** The timestamp when the job was initially created. Immutable and set by the Cloud Dataflow service. */
		createTime?: string | null;

		/** If this is specified, the job's initial state is populated from the given snapshot. */
		createdFromSnapshotId?: string | null;

		/** The current state of the job. Jobs are created in the `JOB_STATE_STOPPED` state unless otherwise specified. A job in the `JOB_STATE_RUNNING` state may asynchronously enter a terminal state. After a job has reached a terminal state, no further state updates may be made. This field might be mutated by the Dataflow service; callers cannot mutate it. */
		currentState?: ExecutionStageStateExecutionStageState | null;

		/** The timestamp associated with the current state. */
		currentStateTime?: string | null;

		/** Describes the environment in which a Dataflow Job runs. */
		environment?: Environment;

		/** Additional information about how a Cloud Dataflow job will be executed that isn't contained in the submitted job. */
		executionInfo?: JobExecutionInfo;

		/** The unique ID of this job. This field is set by the Dataflow service when the job is created, and is immutable for the life of the job. */
		id?: string | null;

		/** Metadata available primarily for filtering jobs. Will be included in the ListJob response and Job SUMMARY view. */
		jobMetadata?: JobMetadata;

		/** User-defined labels for this job. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p{Ll}\p{Lo}{0,62} * Values must conform to regexp: [\p{Ll}\p{Lo}\p{N}_-]{0,63} * Both keys and values are additionally constrained to be <= 128 bytes in size. */
		labels?: {[id: string]: string };

		/** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. */
		location?: string | null;

		/** The user-specified Dataflow job name. Only one active job with a given name can exist in a project within one region at any given time. Jobs in different regions can have the same name. If a caller attempts to create a job with the same name as an active job that already exists, the attempt returns the existing job. The name must match the regular expression `[a-z]([-a-z0-9]{0,1022}[a-z0-9])?` */
		name?: string | null;

		/** A descriptive representation of submitted pipeline as well as the executed form. This data is provided by the Dataflow service for ease of visualizing the pipeline and interpreting Dataflow provided metrics. */
		pipelineDescription?: PipelineDescription;

		/** The ID of the Google Cloud project that the job belongs to. */
		projectId?: string | null;

		/** If this job is an update of an existing job, this field is the job ID of the job it replaced. When sending a `CreateJobRequest`, you can update a job by specifying it here. The job named here is stopped, and its intermediate state is transferred to this job. */
		replaceJobId?: string | null;

		/** If another job is an update of this job (and thus, this job is in `JOB_STATE_UPDATED`), this field contains the ID of that job. */
		replacedByJobId?: string | null;

		/** The job's requested state. Applies to `UpdateJob` requests. Set `requested_state` with `UpdateJob` requests to switch between the states `JOB_STATE_STOPPED` and `JOB_STATE_RUNNING`. You can also use `UpdateJob` requests to change a job's state from `JOB_STATE_RUNNING` to `JOB_STATE_CANCELLED`, `JOB_STATE_DONE`, or `JOB_STATE_DRAINED`. These states irrevocably terminate the job if it hasn't already reached a terminal state. This field has no effect on `CreateJob` requests. */
		requestedState?: ExecutionStageStateExecutionStageState | null;

		/** Additional job parameters that can only be updated during runtime using the projects.jobs.update method. These fields have no effect when specified during job creation. */
		runtimeUpdatableParams?: RuntimeUpdatableParams;

		/** Output only. Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests. */
		satisfiesPzi?: boolean | null;

		/** Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests. */
		satisfiesPzs?: boolean | null;

		/** This field may be mutated by the Cloud Dataflow service; callers cannot mutate it. */
		stageStates?: Array<ExecutionStageState>;

		/** The timestamp when the job was started (transitioned to JOB_STATE_PENDING). Flexible resource scheduling jobs are started with some delay after job creation, so start_time is unset before start and is updated when the job is started by the Cloud Dataflow service. For other jobs, start_time always equals to create_time and is immutable and set by the Cloud Dataflow service. */
		startTime?: string | null;

		/** Exactly one of step or steps_location should be specified. The top-level steps that constitute the entire job. Only retrieved with JOB_VIEW_ALL. */
		steps?: Array<Step>;

		/** The Cloud Storage location where the steps are stored. */
		stepsLocation?: string | null;

		/** A set of files the system should be aware of that are used for temporary storage. These temporary files will be removed on job completion. No duplicates are allowed. No file patterns are supported. The supported files are: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object} */
		tempFiles?: Array<string>;

		/** The map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. */
		transformNameMapping?: {[id: string]: string };

		/** The type of Dataflow job. */
		type?: JobType | null;
	}

	/** Defines a job to be run by the Cloud Dataflow service. Do not enter confidential information when you supply string values using the API. */
	export interface JobFormProperties {

		/** The client's unique identifier of the job, re-used across retried attempts. If this field is set, the service will ensure its uniqueness. The request to create a job will fail if the service has knowledge of a previously submitted job with the same client's ID and job name. The caller may use this field to ensure idempotence of job creation across retried attempts to create a job. By default, the field is empty and, in that case, the service ignores it. */
		clientRequestId: FormControl<string | null | undefined>,

		/** The timestamp when the job was initially created. Immutable and set by the Cloud Dataflow service. */
		createTime: FormControl<string | null | undefined>,

		/** If this is specified, the job's initial state is populated from the given snapshot. */
		createdFromSnapshotId: FormControl<string | null | undefined>,

		/** The current state of the job. Jobs are created in the `JOB_STATE_STOPPED` state unless otherwise specified. A job in the `JOB_STATE_RUNNING` state may asynchronously enter a terminal state. After a job has reached a terminal state, no further state updates may be made. This field might be mutated by the Dataflow service; callers cannot mutate it. */
		currentState: FormControl<ExecutionStageStateExecutionStageState | null | undefined>,

		/** The timestamp associated with the current state. */
		currentStateTime: FormControl<string | null | undefined>,

		/** The unique ID of this job. This field is set by the Dataflow service when the job is created, and is immutable for the life of the job. */
		id: FormControl<string | null | undefined>,

		/** User-defined labels for this job. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p{Ll}\p{Lo}{0,62} * Values must conform to regexp: [\p{Ll}\p{Lo}\p{N}_-]{0,63} * Both keys and values are additionally constrained to be <= 128 bytes in size. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. */
		location: FormControl<string | null | undefined>,

		/** The user-specified Dataflow job name. Only one active job with a given name can exist in a project within one region at any given time. Jobs in different regions can have the same name. If a caller attempts to create a job with the same name as an active job that already exists, the attempt returns the existing job. The name must match the regular expression `[a-z]([-a-z0-9]{0,1022}[a-z0-9])?` */
		name: FormControl<string | null | undefined>,

		/** The ID of the Google Cloud project that the job belongs to. */
		projectId: FormControl<string | null | undefined>,

		/** If this job is an update of an existing job, this field is the job ID of the job it replaced. When sending a `CreateJobRequest`, you can update a job by specifying it here. The job named here is stopped, and its intermediate state is transferred to this job. */
		replaceJobId: FormControl<string | null | undefined>,

		/** If another job is an update of this job (and thus, this job is in `JOB_STATE_UPDATED`), this field contains the ID of that job. */
		replacedByJobId: FormControl<string | null | undefined>,

		/** The job's requested state. Applies to `UpdateJob` requests. Set `requested_state` with `UpdateJob` requests to switch between the states `JOB_STATE_STOPPED` and `JOB_STATE_RUNNING`. You can also use `UpdateJob` requests to change a job's state from `JOB_STATE_RUNNING` to `JOB_STATE_CANCELLED`, `JOB_STATE_DONE`, or `JOB_STATE_DRAINED`. These states irrevocably terminate the job if it hasn't already reached a terminal state. This field has no effect on `CreateJob` requests. */
		requestedState: FormControl<ExecutionStageStateExecutionStageState | null | undefined>,

		/** Output only. Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests. */
		satisfiesPzi: FormControl<boolean | null | undefined>,

		/** Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests. */
		satisfiesPzs: FormControl<boolean | null | undefined>,

		/** The timestamp when the job was started (transitioned to JOB_STATE_PENDING). Flexible resource scheduling jobs are started with some delay after job creation, so start_time is unset before start and is updated when the job is started by the Cloud Dataflow service. For other jobs, start_time always equals to create_time and is immutable and set by the Cloud Dataflow service. */
		startTime: FormControl<string | null | undefined>,

		/** The Cloud Storage location where the steps are stored. */
		stepsLocation: FormControl<string | null | undefined>,

		/** The map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. */
		transformNameMapping: FormControl<{[id: string]: string } | null | undefined>,

		/** The type of Dataflow job. */
		type: FormControl<JobType | null | undefined>,
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			clientRequestId: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			createdFromSnapshotId: new FormControl<string | null | undefined>(undefined),
			currentState: new FormControl<ExecutionStageStateExecutionStageState | null | undefined>(undefined),
			currentStateTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			replaceJobId: new FormControl<string | null | undefined>(undefined),
			replacedByJobId: new FormControl<string | null | undefined>(undefined),
			requestedState: new FormControl<ExecutionStageStateExecutionStageState | null | undefined>(undefined),
			satisfiesPzi: new FormControl<boolean | null | undefined>(undefined),
			satisfiesPzs: new FormControl<boolean | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			stepsLocation: new FormControl<string | null | undefined>(undefined),
			transformNameMapping: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<JobType | null | undefined>(undefined),
		});

	}


	/** Additional information about how a Cloud Dataflow job will be executed that isn't contained in the submitted job. */
	export interface JobExecutionInfo {

		/** A mapping from each stage to the information about that stage. */
		stages?: {[id: string]: JobExecutionStageInfo };
	}

	/** Additional information about how a Cloud Dataflow job will be executed that isn't contained in the submitted job. */
	export interface JobExecutionInfoFormProperties {

		/** A mapping from each stage to the information about that stage. */
		stages: FormControl<{[id: string]: JobExecutionStageInfo } | null | undefined>,
	}
	export function CreateJobExecutionInfoFormGroup() {
		return new FormGroup<JobExecutionInfoFormProperties>({
			stages: new FormControl<{[id: string]: JobExecutionStageInfo } | null | undefined>(undefined),
		});

	}


	/** Contains information about how a particular google.dataflow.v1beta3.Step will be executed. */
	export interface JobExecutionStageInfo {

		/** The steps associated with the execution stage. Note that stages may have several steps, and that a given step might be run by more than one stage. */
		stepName?: Array<string>;
	}

	/** Contains information about how a particular google.dataflow.v1beta3.Step will be executed. */
	export interface JobExecutionStageInfoFormProperties {
	}
	export function CreateJobExecutionStageInfoFormGroup() {
		return new FormGroup<JobExecutionStageInfoFormProperties>({
		});

	}


	/** Metadata available primarily for filtering jobs. Will be included in the ListJob response and Job SUMMARY view. */
	export interface JobMetadata {

		/** Identification of a Cloud Bigtable source used in the Dataflow job. */
		bigTableDetails?: Array<BigTableIODetails>;

		/** Identification of a BigQuery source used in the Dataflow job. */
		bigqueryDetails?: Array<BigQueryIODetails>;

		/** Identification of a Datastore source used in the Dataflow job. */
		datastoreDetails?: Array<DatastoreIODetails>;

		/** Identification of a File source used in the Dataflow job. */
		fileDetails?: Array<FileIODetails>;

		/** Identification of a Pub/Sub source used in the Dataflow job. */
		pubsubDetails?: Array<PubSubIODetails>;

		/** The version of the SDK used to run the job. */
		sdkVersion?: SdkVersion;

		/** Identification of a Spanner source used in the Dataflow job. */
		spannerDetails?: Array<SpannerIODetails>;

		/** List of display properties to help UI filter jobs. */
		userDisplayProperties?: {[id: string]: string };
	}

	/** Metadata available primarily for filtering jobs. Will be included in the ListJob response and Job SUMMARY view. */
	export interface JobMetadataFormProperties {

		/** List of display properties to help UI filter jobs. */
		userDisplayProperties: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateJobMetadataFormGroup() {
		return new FormGroup<JobMetadataFormProperties>({
			userDisplayProperties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Metadata for a Pub/Sub connector used by the job. */
	export interface PubSubIODetails {

		/** Subscription used in the connection. */
		subscription?: string | null;

		/** Topic accessed in the connection. */
		topic?: string | null;
	}

	/** Metadata for a Pub/Sub connector used by the job. */
	export interface PubSubIODetailsFormProperties {

		/** Subscription used in the connection. */
		subscription: FormControl<string | null | undefined>,

		/** Topic accessed in the connection. */
		topic: FormControl<string | null | undefined>,
	}
	export function CreatePubSubIODetailsFormGroup() {
		return new FormGroup<PubSubIODetailsFormProperties>({
			subscription: new FormControl<string | null | undefined>(undefined),
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The version of the SDK used to run the job. */
	export interface SdkVersion {

		/** Output only. Known bugs found in this SDK version. */
		bugs?: Array<SdkBug>;

		/** The support status for this SDK version. */
		sdkSupportStatus?: SdkVersionSdkSupportStatus | null;

		/** The version of the SDK used to run the job. */
		version?: string | null;

		/** A readable string describing the version of the SDK. */
		versionDisplayName?: string | null;
	}

	/** The version of the SDK used to run the job. */
	export interface SdkVersionFormProperties {

		/** The support status for this SDK version. */
		sdkSupportStatus: FormControl<SdkVersionSdkSupportStatus | null | undefined>,

		/** The version of the SDK used to run the job. */
		version: FormControl<string | null | undefined>,

		/** A readable string describing the version of the SDK. */
		versionDisplayName: FormControl<string | null | undefined>,
	}
	export function CreateSdkVersionFormGroup() {
		return new FormGroup<SdkVersionFormProperties>({
			sdkSupportStatus: new FormControl<SdkVersionSdkSupportStatus | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			versionDisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A bug found in the Dataflow SDK. */
	export interface SdkBug {

		/** Output only. How severe the SDK bug is. */
		severity?: SdkBugSeverity | null;

		/** Output only. Describes the impact of this SDK bug. */
		type?: SdkBugType | null;

		/** Output only. Link to more information on the bug. */
		uri?: string | null;
	}

	/** A bug found in the Dataflow SDK. */
	export interface SdkBugFormProperties {

		/** Output only. How severe the SDK bug is. */
		severity: FormControl<SdkBugSeverity | null | undefined>,

		/** Output only. Describes the impact of this SDK bug. */
		type: FormControl<SdkBugType | null | undefined>,

		/** Output only. Link to more information on the bug. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateSdkBugFormGroup() {
		return new FormGroup<SdkBugFormProperties>({
			severity: new FormControl<SdkBugSeverity | null | undefined>(undefined),
			type: new FormControl<SdkBugType | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SdkBugSeverity { SEVERITY_UNSPECIFIED = 'SEVERITY_UNSPECIFIED', NOTICE = 'NOTICE', WARNING = 'WARNING', SEVERE = 'SEVERE' }

	export enum SdkBugType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', GENERAL = 'GENERAL', PERFORMANCE = 'PERFORMANCE', DATALOSS = 'DATALOSS' }

	export enum SdkVersionSdkSupportStatus { UNKNOWN = 'UNKNOWN', SUPPORTED = 'SUPPORTED', STALE = 'STALE', DEPRECATED = 'DEPRECATED', UNSUPPORTED = 'UNSUPPORTED' }


	/** Metadata for a Spanner connector used by the job. */
	export interface SpannerIODetails {

		/** DatabaseId accessed in the connection. */
		databaseId?: string | null;

		/** InstanceId accessed in the connection. */
		instanceId?: string | null;

		/** ProjectId accessed in the connection. */
		projectId?: string | null;
	}

	/** Metadata for a Spanner connector used by the job. */
	export interface SpannerIODetailsFormProperties {

		/** DatabaseId accessed in the connection. */
		databaseId: FormControl<string | null | undefined>,

		/** InstanceId accessed in the connection. */
		instanceId: FormControl<string | null | undefined>,

		/** ProjectId accessed in the connection. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateSpannerIODetailsFormGroup() {
		return new FormGroup<SpannerIODetailsFormProperties>({
			databaseId: new FormControl<string | null | undefined>(undefined),
			instanceId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A descriptive representation of submitted pipeline as well as the executed form. This data is provided by the Dataflow service for ease of visualizing the pipeline and interpreting Dataflow provided metrics. */
	export interface PipelineDescription {

		/** Pipeline level display data. */
		displayData?: Array<DisplayData>;

		/** Description of each stage of execution of the pipeline. */
		executionPipelineStage?: Array<ExecutionStageSummary>;

		/** Description of each transform in the pipeline and collections between them. */
		originalPipelineTransform?: Array<TransformSummary>;

		/** A hash value of the submitted pipeline portable graph step names if exists. */
		stepNamesHash?: string | null;
	}

	/** A descriptive representation of submitted pipeline as well as the executed form. This data is provided by the Dataflow service for ease of visualizing the pipeline and interpreting Dataflow provided metrics. */
	export interface PipelineDescriptionFormProperties {

		/** A hash value of the submitted pipeline portable graph step names if exists. */
		stepNamesHash: FormControl<string | null | undefined>,
	}
	export function CreatePipelineDescriptionFormGroup() {
		return new FormGroup<PipelineDescriptionFormProperties>({
			stepNamesHash: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of the type, names/ids, and input/outputs for a transform. */
	export interface TransformSummary {

		/** Transform-specific display data. */
		displayData?: Array<DisplayData>;

		/** SDK generated id of this transform instance. */
		id?: string | null;

		/** User names for all collection inputs to this transform. */
		inputCollectionName?: Array<string>;

		/** Type of transform. */
		kind?: ExecutionStageSummaryKind | null;

		/** User provided name for this transform instance. */
		name?: string | null;

		/** User names for all collection outputs to this transform. */
		outputCollectionName?: Array<string>;
	}

	/** Description of the type, names/ids, and input/outputs for a transform. */
	export interface TransformSummaryFormProperties {

		/** SDK generated id of this transform instance. */
		id: FormControl<string | null | undefined>,

		/** Type of transform. */
		kind: FormControl<ExecutionStageSummaryKind | null | undefined>,

		/** User provided name for this transform instance. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTransformSummaryFormGroup() {
		return new FormGroup<TransformSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<ExecutionStageSummaryKind | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional job parameters that can only be updated during runtime using the projects.jobs.update method. These fields have no effect when specified during job creation. */
	export interface RuntimeUpdatableParams {

		/** The maximum number of workers to cap autoscaling at. This field is currently only supported for Streaming Engine jobs. */
		maxNumWorkers?: number | null;

		/** The minimum number of workers to scale down to. This field is currently only supported for Streaming Engine jobs. */
		minNumWorkers?: number | null;

		/** Target worker utilization, compared against the aggregate utilization of the worker pool by autoscaler, to determine upscaling and downscaling when absent other constraints such as backlog. */
		workerUtilizationHint?: number | null;
	}

	/** Additional job parameters that can only be updated during runtime using the projects.jobs.update method. These fields have no effect when specified during job creation. */
	export interface RuntimeUpdatableParamsFormProperties {

		/** The maximum number of workers to cap autoscaling at. This field is currently only supported for Streaming Engine jobs. */
		maxNumWorkers: FormControl<number | null | undefined>,

		/** The minimum number of workers to scale down to. This field is currently only supported for Streaming Engine jobs. */
		minNumWorkers: FormControl<number | null | undefined>,

		/** Target worker utilization, compared against the aggregate utilization of the worker pool by autoscaler, to determine upscaling and downscaling when absent other constraints such as backlog. */
		workerUtilizationHint: FormControl<number | null | undefined>,
	}
	export function CreateRuntimeUpdatableParamsFormGroup() {
		return new FormGroup<RuntimeUpdatableParamsFormProperties>({
			maxNumWorkers: new FormControl<number | null | undefined>(undefined),
			minNumWorkers: new FormControl<number | null | undefined>(undefined),
			workerUtilizationHint: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Defines a particular step within a Cloud Dataflow job. A job consists of multiple steps, each of which performs some specific operation as part of the overall job. Data is typically passed from one step to another as part of the job. **Note:** The properties of this object are not stable and might change. Here's an example of a sequence of steps which together implement a Map-Reduce job: * Read a collection of data from some source, parsing the collection's elements. * Validate the elements. * Apply a user-defined function to map each element to some value and extract an element-specific key value. * Group elements with the same key into a single element with that key, transforming a multiply-keyed collection into a uniquely-keyed collection. * Write the elements out to some data sink. Note that the Cloud Dataflow service may be used to run many different types of jobs, not just Map-Reduce. */
	export interface Step {

		/** The kind of step in the Cloud Dataflow job. */
		kind?: string | null;

		/** The name that identifies the step. This must be unique for each step with respect to all other steps in the Cloud Dataflow job. */
		name?: string | null;

		/** Named properties associated with the step. Each kind of predefined step has its own required set of properties. Must be provided on Create. Only retrieved with JOB_VIEW_ALL. */
		properties?: {[id: string]: any };
	}

	/** Defines a particular step within a Cloud Dataflow job. A job consists of multiple steps, each of which performs some specific operation as part of the overall job. Data is typically passed from one step to another as part of the job. **Note:** The properties of this object are not stable and might change. Here's an example of a sequence of steps which together implement a Map-Reduce job: * Read a collection of data from some source, parsing the collection's elements. * Validate the elements. * Apply a user-defined function to map each element to some value and extract an element-specific key value. * Group elements with the same key into a single element with that key, transforming a multiply-keyed collection into a uniquely-keyed collection. * Write the elements out to some data sink. Note that the Cloud Dataflow service may be used to run many different types of jobs, not just Map-Reduce. */
	export interface StepFormProperties {

		/** The kind of step in the Cloud Dataflow job. */
		kind: FormControl<string | null | undefined>,

		/** The name that identifies the step. This must be unique for each step with respect to all other steps in the Cloud Dataflow job. */
		name: FormControl<string | null | undefined>,

		/** Named properties associated with the step. Each kind of predefined step has its own required set of properties. Must be provided on Create. Only retrieved with JOB_VIEW_ALL. */
		properties: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateStepFormGroup() {
		return new FormGroup<StepFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	export enum JobType { JOB_TYPE_UNKNOWN = 'JOB_TYPE_UNKNOWN', JOB_TYPE_BATCH = 'JOB_TYPE_BATCH', JOB_TYPE_STREAMING = 'JOB_TYPE_STREAMING' }


	/** Information about the execution of a job. */
	export interface JobExecutionDetails {

		/** If present, this response does not contain all requested tasks. To obtain the next page of results, repeat the request with page_token set to this value. */
		nextPageToken?: string | null;

		/** The stages of the job execution. */
		stages?: Array<StageSummary>;
	}

	/** Information about the execution of a job. */
	export interface JobExecutionDetailsFormProperties {

		/** If present, this response does not contain all requested tasks. To obtain the next page of results, repeat the request with page_token set to this value. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateJobExecutionDetailsFormGroup() {
		return new FormGroup<JobExecutionDetailsFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a particular execution stage of a job. */
	export interface StageSummary {

		/** End time of this stage. If the work item is completed, this is the actual end time of the stage. Otherwise, it is the predicted end time. */
		endTime?: string | null;

		/** Metrics for this stage. */
		metrics?: Array<MetricUpdate>;

		/** Information about the progress of some component of job execution. */
		progress?: ProgressTimeseries;

		/** ID of this stage */
		stageId?: string | null;

		/** Start time of this stage. */
		startTime?: string | null;

		/** State of this stage. */
		state?: StageSummaryState | null;

		/** Summarized straggler identification details. */
		stragglerSummary?: StragglerSummary;
	}

	/** Information about a particular execution stage of a job. */
	export interface StageSummaryFormProperties {

		/** End time of this stage. If the work item is completed, this is the actual end time of the stage. Otherwise, it is the predicted end time. */
		endTime: FormControl<string | null | undefined>,

		/** ID of this stage */
		stageId: FormControl<string | null | undefined>,

		/** Start time of this stage. */
		startTime: FormControl<string | null | undefined>,

		/** State of this stage. */
		state: FormControl<StageSummaryState | null | undefined>,
	}
	export function CreateStageSummaryFormGroup() {
		return new FormGroup<StageSummaryFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			stageId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<StageSummaryState | null | undefined>(undefined),
		});

	}


	/** Describes the state of a metric. */
	export interface MetricUpdate {

		/** True if this metric is reported as the total cumulative aggregate value accumulated since the worker started working on this WorkItem. By default this is false, indicating that this metric is reported as a delta that is not associated with any WorkItem. */
		cumulative?: boolean | null;

		/** A struct value describing properties of a distribution of numeric values. */
		distribution?: any;

		/** A struct value describing properties of a Gauge. Metrics of gauge type show the value of a metric across time, and is aggregated based on the newest value. */
		gauge?: any;

		/** Worker-computed aggregate value for internal use by the Dataflow service. */
		internal?: any;

		/** Metric aggregation kind. The possible metric aggregation kinds are "Sum", "Max", "Min", "Mean", "Set", "And", "Or", and "Distribution". The specified aggregation kind is case-insensitive. If omitted, this is not an aggregated value but instead a single metric sample value. */
		kind?: string | null;

		/** Worker-computed aggregate value for the "Mean" aggregation kind. This holds the count of the aggregated values and is used in combination with mean_sum above to obtain the actual mean aggregate value. The only possible value type is Long. */
		meanCount?: any;

		/** Worker-computed aggregate value for the "Mean" aggregation kind. This holds the sum of the aggregated values and is used in combination with mean_count below to obtain the actual mean aggregate value. The only possible value types are Long and Double. */
		meanSum?: any;

		/** Identifies a metric, by describing the source which generated the metric. */
		name?: MetricStructuredName;

		/** Worker-computed aggregate value for aggregation kinds "Sum", "Max", "Min", "And", and "Or". The possible value types are Long, Double, and Boolean. */
		scalar?: any;

		/** Worker-computed aggregate value for the "Set" aggregation kind. The only possible value type is a list of Values whose type can be Long, Double, or String, according to the metric's type. All Values in the list must be of the same type. */
		set?: any;

		/** Timestamp associated with the metric value. Optional when workers are reporting work progress; it will be filled in responses from the metrics API. */
		updateTime?: string | null;
	}

	/** Describes the state of a metric. */
	export interface MetricUpdateFormProperties {

		/** True if this metric is reported as the total cumulative aggregate value accumulated since the worker started working on this WorkItem. By default this is false, indicating that this metric is reported as a delta that is not associated with any WorkItem. */
		cumulative: FormControl<boolean | null | undefined>,

		/** A struct value describing properties of a distribution of numeric values. */
		distribution: FormControl<any | null | undefined>,

		/** A struct value describing properties of a Gauge. Metrics of gauge type show the value of a metric across time, and is aggregated based on the newest value. */
		gauge: FormControl<any | null | undefined>,

		/** Worker-computed aggregate value for internal use by the Dataflow service. */
		internal: FormControl<any | null | undefined>,

		/** Metric aggregation kind. The possible metric aggregation kinds are "Sum", "Max", "Min", "Mean", "Set", "And", "Or", and "Distribution". The specified aggregation kind is case-insensitive. If omitted, this is not an aggregated value but instead a single metric sample value. */
		kind: FormControl<string | null | undefined>,

		/** Worker-computed aggregate value for the "Mean" aggregation kind. This holds the count of the aggregated values and is used in combination with mean_sum above to obtain the actual mean aggregate value. The only possible value type is Long. */
		meanCount: FormControl<any | null | undefined>,

		/** Worker-computed aggregate value for the "Mean" aggregation kind. This holds the sum of the aggregated values and is used in combination with mean_count below to obtain the actual mean aggregate value. The only possible value types are Long and Double. */
		meanSum: FormControl<any | null | undefined>,

		/** Worker-computed aggregate value for aggregation kinds "Sum", "Max", "Min", "And", and "Or". The possible value types are Long, Double, and Boolean. */
		scalar: FormControl<any | null | undefined>,

		/** Worker-computed aggregate value for the "Set" aggregation kind. The only possible value type is a list of Values whose type can be Long, Double, or String, according to the metric's type. All Values in the list must be of the same type. */
		set: FormControl<any | null | undefined>,

		/** Timestamp associated with the metric value. Optional when workers are reporting work progress; it will be filled in responses from the metrics API. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateMetricUpdateFormGroup() {
		return new FormGroup<MetricUpdateFormProperties>({
			cumulative: new FormControl<boolean | null | undefined>(undefined),
			distribution: new FormControl<any | null | undefined>(undefined),
			gauge: new FormControl<any | null | undefined>(undefined),
			internal: new FormControl<any | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			meanCount: new FormControl<any | null | undefined>(undefined),
			meanSum: new FormControl<any | null | undefined>(undefined),
			scalar: new FormControl<any | null | undefined>(undefined),
			set: new FormControl<any | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies a metric, by describing the source which generated the metric. */
	export interface MetricStructuredName {

		/** Zero or more labeled fields which identify the part of the job this metric is associated with, such as the name of a step or collection. For example, built-in counters associated with steps will have context['step'] = . Counters associated with PCollections in the SDK will have context['pcollection'] = . */
		context?: {[id: string]: string };

		/** Worker-defined metric name. */
		name?: string | null;

		/** Origin (namespace) of metric name. May be blank for user-define metrics; will be "dataflow" for metrics defined by the Dataflow service or SDK. */
		origin?: string | null;
	}

	/** Identifies a metric, by describing the source which generated the metric. */
	export interface MetricStructuredNameFormProperties {

		/** Zero or more labeled fields which identify the part of the job this metric is associated with, such as the name of a step or collection. For example, built-in counters associated with steps will have context['step'] = . Counters associated with PCollections in the SDK will have context['pcollection'] = . */
		context: FormControl<{[id: string]: string } | null | undefined>,

		/** Worker-defined metric name. */
		name: FormControl<string | null | undefined>,

		/** Origin (namespace) of metric name. May be blank for user-define metrics; will be "dataflow" for metrics defined by the Dataflow service or SDK. */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateMetricStructuredNameFormGroup() {
		return new FormGroup<MetricStructuredNameFormProperties>({
			context: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the progress of some component of job execution. */
	export interface ProgressTimeseries {

		/** The current progress of the component, in the range [0,1]. */
		currentProgress?: number | null;

		/** History of progress for the component. Points are sorted by time. */
		dataPoints?: Array<Point>;
	}

	/** Information about the progress of some component of job execution. */
	export interface ProgressTimeseriesFormProperties {

		/** The current progress of the component, in the range [0,1]. */
		currentProgress: FormControl<number | null | undefined>,
	}
	export function CreateProgressTimeseriesFormGroup() {
		return new FormGroup<ProgressTimeseriesFormProperties>({
			currentProgress: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A point in the timeseries. */
	export interface Point {

		/** The timestamp of the point. */
		time?: string | null;

		/** The value of the point. */
		value?: number | null;
	}

	/** A point in the timeseries. */
	export interface PointFormProperties {

		/** The timestamp of the point. */
		time: FormControl<string | null | undefined>,

		/** The value of the point. */
		value: FormControl<number | null | undefined>,
	}
	export function CreatePointFormGroup() {
		return new FormGroup<PointFormProperties>({
			time: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum StageSummaryState { EXECUTION_STATE_UNKNOWN = 'EXECUTION_STATE_UNKNOWN', EXECUTION_STATE_NOT_STARTED = 'EXECUTION_STATE_NOT_STARTED', EXECUTION_STATE_RUNNING = 'EXECUTION_STATE_RUNNING', EXECUTION_STATE_SUCCEEDED = 'EXECUTION_STATE_SUCCEEDED', EXECUTION_STATE_FAILED = 'EXECUTION_STATE_FAILED', EXECUTION_STATE_CANCELLED = 'EXECUTION_STATE_CANCELLED' }


	/** Summarized straggler identification details. */
	export interface StragglerSummary {

		/** The most recent stragglers. */
		recentStragglers?: Array<Straggler>;

		/** Aggregated counts of straggler causes, keyed by the string representation of the StragglerCause enum. */
		stragglerCauseCount?: {[id: string]: string };

		/** The total count of stragglers. */
		totalStragglerCount?: string | null;
	}

	/** Summarized straggler identification details. */
	export interface StragglerSummaryFormProperties {

		/** Aggregated counts of straggler causes, keyed by the string representation of the StragglerCause enum. */
		stragglerCauseCount: FormControl<{[id: string]: string } | null | undefined>,

		/** The total count of stragglers. */
		totalStragglerCount: FormControl<string | null | undefined>,
	}
	export function CreateStragglerSummaryFormGroup() {
		return new FormGroup<StragglerSummaryFormProperties>({
			stragglerCauseCount: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			totalStragglerCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information for a straggler. */
	export interface Straggler {

		/** Information useful for straggler identification and debugging. */
		batchStraggler?: StragglerInfo;

		/** Information useful for streaming straggler identification and debugging. */
		streamingStraggler?: StreamingStragglerInfo;
	}

	/** Information for a straggler. */
	export interface StragglerFormProperties {
	}
	export function CreateStragglerFormGroup() {
		return new FormGroup<StragglerFormProperties>({
		});

	}


	/** Information useful for straggler identification and debugging. */
	export interface StragglerInfo {

		/** The straggler causes, keyed by the string representation of the StragglerCause enum and contains specialized debugging information for each straggler cause. */
		causes?: {[id: string]: StragglerDebuggingInfo };

		/** The time when the work item attempt became a straggler. */
		startTime?: string | null;
	}

	/** Information useful for straggler identification and debugging. */
	export interface StragglerInfoFormProperties {

		/** The straggler causes, keyed by the string representation of the StragglerCause enum and contains specialized debugging information for each straggler cause. */
		causes: FormControl<{[id: string]: StragglerDebuggingInfo } | null | undefined>,

		/** The time when the work item attempt became a straggler. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateStragglerInfoFormGroup() {
		return new FormGroup<StragglerInfoFormProperties>({
			causes: new FormControl<{[id: string]: StragglerDebuggingInfo } | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information useful for debugging a straggler. Each type will provide specialized debugging information relevant for a particular cause. The StragglerDebuggingInfo will be 1:1 mapping to the StragglerCause enum. */
	export interface StragglerDebuggingInfo {

		/** Information useful for debugging a hot key detection. */
		hotKey?: HotKeyDebuggingInfo;
	}

	/** Information useful for debugging a straggler. Each type will provide specialized debugging information relevant for a particular cause. The StragglerDebuggingInfo will be 1:1 mapping to the StragglerCause enum. */
	export interface StragglerDebuggingInfoFormProperties {
	}
	export function CreateStragglerDebuggingInfoFormGroup() {
		return new FormGroup<StragglerDebuggingInfoFormProperties>({
		});

	}


	/** Information useful for streaming straggler identification and debugging. */
	export interface StreamingStragglerInfo {

		/** The event-time watermark lag at the time of the straggler detection. */
		dataWatermarkLag?: string | null;

		/** End time of this straggler. */
		endTime?: string | null;

		/** Start time of this straggler. */
		startTime?: string | null;

		/** The system watermark lag at the time of the straggler detection. */
		systemWatermarkLag?: string | null;

		/** Name of the worker where the straggler was detected. */
		workerName?: string | null;
	}

	/** Information useful for streaming straggler identification and debugging. */
	export interface StreamingStragglerInfoFormProperties {

		/** The event-time watermark lag at the time of the straggler detection. */
		dataWatermarkLag: FormControl<string | null | undefined>,

		/** End time of this straggler. */
		endTime: FormControl<string | null | undefined>,

		/** Start time of this straggler. */
		startTime: FormControl<string | null | undefined>,

		/** The system watermark lag at the time of the straggler detection. */
		systemWatermarkLag: FormControl<string | null | undefined>,

		/** Name of the worker where the straggler was detected. */
		workerName: FormControl<string | null | undefined>,
	}
	export function CreateStreamingStragglerInfoFormGroup() {
		return new FormGroup<StreamingStragglerInfoFormProperties>({
			dataWatermarkLag: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			systemWatermarkLag: new FormControl<string | null | undefined>(undefined),
			workerName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A particular message pertaining to a Dataflow job. */
	export interface JobMessage {

		/** Deprecated. */
		id?: string | null;

		/** Importance level of the message. */
		messageImportance?: JobMessageMessageImportance | null;

		/** The text of the message. */
		messageText?: string | null;

		/** The timestamp of the message. */
		time?: string | null;
	}

	/** A particular message pertaining to a Dataflow job. */
	export interface JobMessageFormProperties {

		/** Deprecated. */
		id: FormControl<string | null | undefined>,

		/** Importance level of the message. */
		messageImportance: FormControl<JobMessageMessageImportance | null | undefined>,

		/** The text of the message. */
		messageText: FormControl<string | null | undefined>,

		/** The timestamp of the message. */
		time: FormControl<string | null | undefined>,
	}
	export function CreateJobMessageFormGroup() {
		return new FormGroup<JobMessageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			messageImportance: new FormControl<JobMessageMessageImportance | null | undefined>(undefined),
			messageText: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JobMessageMessageImportance { JOB_MESSAGE_IMPORTANCE_UNKNOWN = 'JOB_MESSAGE_IMPORTANCE_UNKNOWN', JOB_MESSAGE_DEBUG = 'JOB_MESSAGE_DEBUG', JOB_MESSAGE_DETAILED = 'JOB_MESSAGE_DETAILED', JOB_MESSAGE_BASIC = 'JOB_MESSAGE_BASIC', JOB_MESSAGE_WARNING = 'JOB_MESSAGE_WARNING', JOB_MESSAGE_ERROR = 'JOB_MESSAGE_ERROR' }


	/** JobMetrics contains a collection of metrics describing the detailed progress of a Dataflow job. Metrics correspond to user-defined and system-defined metrics in the job. For more information, see [Dataflow job metrics] (https://cloud.google.com/dataflow/docs/guides/using-monitoring-intf). This resource captures only the most recent values of each metric; time-series data can be queried for them (under the same metric names) from Cloud Monitoring. */
	export interface JobMetrics {

		/** Timestamp as of which metric values are current. */
		metricTime?: string | null;

		/** All metrics for this job. */
		metrics?: Array<MetricUpdate>;
	}

	/** JobMetrics contains a collection of metrics describing the detailed progress of a Dataflow job. Metrics correspond to user-defined and system-defined metrics in the job. For more information, see [Dataflow job metrics] (https://cloud.google.com/dataflow/docs/guides/using-monitoring-intf). This resource captures only the most recent values of each metric; time-series data can be queried for them (under the same metric names) from Cloud Monitoring. */
	export interface JobMetricsFormProperties {

		/** Timestamp as of which metric values are current. */
		metricTime: FormControl<string | null | undefined>,
	}
	export function CreateJobMetricsFormGroup() {
		return new FormGroup<JobMetricsFormProperties>({
			metricTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data disk assignment information for a specific key-range of a sharded computation. Currently we only support UTF-8 character splits to simplify encoding into JSON. */
	export interface KeyRangeDataDiskAssignment {

		/** The name of the data disk where data for this range is stored. This name is local to the Google Cloud Platform project and uniquely identifies the disk within that project, for example "myproject-1014-104817-4c2-harness-0-disk-1". */
		dataDisk?: string | null;

		/** The end (exclusive) of the key range. */
		end?: string | null;

		/** The start (inclusive) of the key range. */
		start?: string | null;
	}

	/** Data disk assignment information for a specific key-range of a sharded computation. Currently we only support UTF-8 character splits to simplify encoding into JSON. */
	export interface KeyRangeDataDiskAssignmentFormProperties {

		/** The name of the data disk where data for this range is stored. This name is local to the Google Cloud Platform project and uniquely identifies the disk within that project, for example "myproject-1014-104817-4c2-harness-0-disk-1". */
		dataDisk: FormControl<string | null | undefined>,

		/** The end (exclusive) of the key range. */
		end: FormControl<string | null | undefined>,

		/** The start (inclusive) of the key range. */
		start: FormControl<string | null | undefined>,
	}
	export function CreateKeyRangeDataDiskAssignmentFormGroup() {
		return new FormGroup<KeyRangeDataDiskAssignmentFormProperties>({
			dataDisk: new FormControl<string | null | undefined>(undefined),
			end: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Launch FlexTemplate Parameter. */
	export interface LaunchFlexTemplateParameter {

		/** Container Spec. */
		containerSpec?: ContainerSpec;

		/** Cloud Storage path to a file with json serialized ContainerSpec as content. */
		containerSpecGcsPath?: string | null;

		/** The environment values to be set at runtime for flex template. */
		environment?: FlexTemplateRuntimeEnvironment;

		/** Required. The job name to use for the created job. For update job request, job name should be same as the existing running job. */
		jobName?: string | null;

		/** Launch options for this flex template job. This is a common set of options across languages and templates. This should not be used to pass job parameters. */
		launchOptions?: {[id: string]: string };

		/** The parameters for FlexTemplate. Ex. {"num_workers":"5"} */
		parameters?: {[id: string]: string };

		/** Use this to pass transform_name_mappings for streaming update jobs. Ex:{"oldTransformName":"newTransformName",...}' */
		transformNameMappings?: {[id: string]: string };

		/** Set this to true if you are sending a request to update a running streaming job. When set, the job name should be the same as the running job. */
		update?: boolean | null;
	}

	/** Launch FlexTemplate Parameter. */
	export interface LaunchFlexTemplateParameterFormProperties {

		/** Cloud Storage path to a file with json serialized ContainerSpec as content. */
		containerSpecGcsPath: FormControl<string | null | undefined>,

		/** Required. The job name to use for the created job. For update job request, job name should be same as the existing running job. */
		jobName: FormControl<string | null | undefined>,

		/** Launch options for this flex template job. This is a common set of options across languages and templates. This should not be used to pass job parameters. */
		launchOptions: FormControl<{[id: string]: string } | null | undefined>,

		/** The parameters for FlexTemplate. Ex. {"num_workers":"5"} */
		parameters: FormControl<{[id: string]: string } | null | undefined>,

		/** Use this to pass transform_name_mappings for streaming update jobs. Ex:{"oldTransformName":"newTransformName",...}' */
		transformNameMappings: FormControl<{[id: string]: string } | null | undefined>,

		/** Set this to true if you are sending a request to update a running streaming job. When set, the job name should be the same as the running job. */
		update: FormControl<boolean | null | undefined>,
	}
	export function CreateLaunchFlexTemplateParameterFormGroup() {
		return new FormGroup<LaunchFlexTemplateParameterFormProperties>({
			containerSpecGcsPath: new FormControl<string | null | undefined>(undefined),
			jobName: new FormControl<string | null | undefined>(undefined),
			launchOptions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			transformNameMappings: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			update: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A request to launch a Cloud Dataflow job from a FlexTemplate. */
	export interface LaunchFlexTemplateRequest {

		/** Launch FlexTemplate Parameter. */
		launchParameter?: LaunchFlexTemplateParameter;

		/** If true, the request is validated but not actually executed. Defaults to false. */
		validateOnly?: boolean | null;
	}

	/** A request to launch a Cloud Dataflow job from a FlexTemplate. */
	export interface LaunchFlexTemplateRequestFormProperties {

		/** If true, the request is validated but not actually executed. Defaults to false. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateLaunchFlexTemplateRequestFormGroup() {
		return new FormGroup<LaunchFlexTemplateRequestFormProperties>({
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response to the request to launch a job from Flex Template. */
	export interface LaunchFlexTemplateResponse {

		/** Defines a job to be run by the Cloud Dataflow service. Do not enter confidential information when you supply string values using the API. */
		job?: Job;
	}

	/** Response to the request to launch a job from Flex Template. */
	export interface LaunchFlexTemplateResponseFormProperties {
	}
	export function CreateLaunchFlexTemplateResponseFormGroup() {
		return new FormGroup<LaunchFlexTemplateResponseFormProperties>({
		});

	}


	/** Parameters to provide to the template being launched. Note that the [metadata in the pipeline code] (https://cloud.google.com/dataflow/docs/guides/templates/creating-templates#metadata) determines which runtime parameters are valid. */
	export interface LaunchTemplateParameters {

		/** The environment values to set at runtime. */
		environment?: RuntimeEnvironment;

		/** Required. The job name to use for the created job. The name must match the regular expression `[a-z]([-a-z0-9]{0,1022}[a-z0-9])?` */
		jobName?: string | null;

		/** The runtime parameters to pass to the job. */
		parameters?: {[id: string]: string };

		/** Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. */
		transformNameMapping?: {[id: string]: string };

		/** If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state. */
		update?: boolean | null;
	}

	/** Parameters to provide to the template being launched. Note that the [metadata in the pipeline code] (https://cloud.google.com/dataflow/docs/guides/templates/creating-templates#metadata) determines which runtime parameters are valid. */
	export interface LaunchTemplateParametersFormProperties {

		/** Required. The job name to use for the created job. The name must match the regular expression `[a-z]([-a-z0-9]{0,1022}[a-z0-9])?` */
		jobName: FormControl<string | null | undefined>,

		/** The runtime parameters to pass to the job. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,

		/** Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. */
		transformNameMapping: FormControl<{[id: string]: string } | null | undefined>,

		/** If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state. */
		update: FormControl<boolean | null | undefined>,
	}
	export function CreateLaunchTemplateParametersFormGroup() {
		return new FormGroup<LaunchTemplateParametersFormProperties>({
			jobName: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			transformNameMapping: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			update: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response to the request to launch a template. */
	export interface LaunchTemplateResponse {

		/** Defines a job to be run by the Cloud Dataflow service. Do not enter confidential information when you supply string values using the API. */
		job?: Job;
	}

	/** Response to the request to launch a template. */
	export interface LaunchTemplateResponseFormProperties {
	}
	export function CreateLaunchTemplateResponseFormGroup() {
		return new FormGroup<LaunchTemplateResponseFormProperties>({
		});

	}


	/** Request to lease WorkItems. */
	export interface LeaseWorkItemRequest {

		/** The current timestamp at the worker. */
		currentWorkerTime?: string | null;

		/** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job. */
		location?: string | null;

		/** The initial lease period. */
		requestedLeaseDuration?: string | null;

		/** Untranslated bag-of-bytes WorkRequest from UnifiedWorker. */
		unifiedWorkerRequest?: {[id: string]: any };

		/** Filter for WorkItem type. */
		workItemTypes?: Array<string>;

		/** Worker capabilities. WorkItems might be limited to workers with specific capabilities. */
		workerCapabilities?: Array<string>;

		/** Identifies the worker leasing work -- typically the ID of the virtual machine running the worker. */
		workerId?: string | null;
	}

	/** Request to lease WorkItems. */
	export interface LeaseWorkItemRequestFormProperties {

		/** The current timestamp at the worker. */
		currentWorkerTime: FormControl<string | null | undefined>,

		/** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job. */
		location: FormControl<string | null | undefined>,

		/** The initial lease period. */
		requestedLeaseDuration: FormControl<string | null | undefined>,

		/** Untranslated bag-of-bytes WorkRequest from UnifiedWorker. */
		unifiedWorkerRequest: FormControl<{[id: string]: any } | null | undefined>,

		/** Identifies the worker leasing work -- typically the ID of the virtual machine running the worker. */
		workerId: FormControl<string | null | undefined>,
	}
	export function CreateLeaseWorkItemRequestFormGroup() {
		return new FormGroup<LeaseWorkItemRequestFormProperties>({
			currentWorkerTime: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			requestedLeaseDuration: new FormControl<string | null | undefined>(undefined),
			unifiedWorkerRequest: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			workerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to a request to lease WorkItems. */
	export interface LeaseWorkItemResponse {

		/** Untranslated bag-of-bytes WorkResponse for UnifiedWorker. */
		unifiedWorkerResponse?: {[id: string]: any };

		/** A list of the leased WorkItems. */
		workItems?: Array<WorkItem>;
	}

	/** Response to a request to lease WorkItems. */
	export interface LeaseWorkItemResponseFormProperties {

		/** Untranslated bag-of-bytes WorkResponse for UnifiedWorker. */
		unifiedWorkerResponse: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateLeaseWorkItemResponseFormGroup() {
		return new FormGroup<LeaseWorkItemResponseFormProperties>({
			unifiedWorkerResponse: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** WorkItem represents basic information about a WorkItem to be executed in the cloud. */
	export interface WorkItem {

		/** Work item-specific configuration as an opaque blob. */
		configuration?: string | null;

		/** Identifies this WorkItem. */
		id?: string | null;

		/** The initial index to use when reporting the status of the WorkItem. */
		initialReportIndex?: string | null;

		/** Identifies the workflow job this WorkItem belongs to. */
		jobId?: string | null;

		/** Time when the lease on this Work will expire. */
		leaseExpireTime?: string | null;

		/** MapTask consists of an ordered set of instructions, each of which describes one particular low-level operation for the worker to perform in order to accomplish the MapTask's WorkItem. Each instruction must appear in the list before any instructions which depends on its output. */
		mapTask?: MapTask;

		/** Any required packages that need to be fetched in order to execute this WorkItem. */
		packages?: Array<Package>;

		/** Identifies the cloud project this WorkItem belongs to. */
		projectId?: string | null;

		/** Recommended reporting interval. */
		reportStatusInterval?: string | null;

		/** Describes a particular function to invoke. */
		seqMapTask?: SeqMapTask;

		/** A task which consists of a shell command for the worker to execute. */
		shellTask?: ShellTask;

		/** A work item that represents the different operations that can be performed on a user-defined Source specification. */
		sourceOperationTask?: SourceOperationRequest;

		/** A task which describes what action should be performed for the specified streaming computation ranges. */
		streamingComputationTask?: StreamingComputationTask;

		/** A task that carries configuration information for streaming computations. */
		streamingConfigTask?: StreamingConfigTask;

		/** A task which initializes part of a streaming Dataflow job. */
		streamingSetupTask?: StreamingSetupTask;
	}

	/** WorkItem represents basic information about a WorkItem to be executed in the cloud. */
	export interface WorkItemFormProperties {

		/** Work item-specific configuration as an opaque blob. */
		configuration: FormControl<string | null | undefined>,

		/** Identifies this WorkItem. */
		id: FormControl<string | null | undefined>,

		/** The initial index to use when reporting the status of the WorkItem. */
		initialReportIndex: FormControl<string | null | undefined>,

		/** Identifies the workflow job this WorkItem belongs to. */
		jobId: FormControl<string | null | undefined>,

		/** Time when the lease on this Work will expire. */
		leaseExpireTime: FormControl<string | null | undefined>,

		/** Identifies the cloud project this WorkItem belongs to. */
		projectId: FormControl<string | null | undefined>,

		/** Recommended reporting interval. */
		reportStatusInterval: FormControl<string | null | undefined>,
	}
	export function CreateWorkItemFormGroup() {
		return new FormGroup<WorkItemFormProperties>({
			configuration: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			initialReportIndex: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			leaseExpireTime: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			reportStatusInterval: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** MapTask consists of an ordered set of instructions, each of which describes one particular low-level operation for the worker to perform in order to accomplish the MapTask's WorkItem. Each instruction must appear in the list before any instructions which depends on its output. */
	export interface MapTask {

		/** Counter prefix that can be used to prefix counters. Not currently used in Dataflow. */
		counterPrefix?: string | null;

		/** The instructions in the MapTask. */
		instructions?: Array<ParallelInstruction>;

		/** System-defined name of the stage containing this MapTask. Unique across the workflow. */
		stageName?: string | null;

		/** System-defined name of this MapTask. Unique across the workflow. */
		systemName?: string | null;
	}

	/** MapTask consists of an ordered set of instructions, each of which describes one particular low-level operation for the worker to perform in order to accomplish the MapTask's WorkItem. Each instruction must appear in the list before any instructions which depends on its output. */
	export interface MapTaskFormProperties {

		/** Counter prefix that can be used to prefix counters. Not currently used in Dataflow. */
		counterPrefix: FormControl<string | null | undefined>,

		/** System-defined name of the stage containing this MapTask. Unique across the workflow. */
		stageName: FormControl<string | null | undefined>,

		/** System-defined name of this MapTask. Unique across the workflow. */
		systemName: FormControl<string | null | undefined>,
	}
	export function CreateMapTaskFormGroup() {
		return new FormGroup<MapTaskFormProperties>({
			counterPrefix: new FormControl<string | null | undefined>(undefined),
			stageName: new FormControl<string | null | undefined>(undefined),
			systemName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a particular operation comprising a MapTask. */
	export interface ParallelInstruction {

		/** An instruction that copies its inputs (zero or more) to its (single) output. */
		flatten?: FlattenInstruction;

		/** User-provided name of this operation. */
		name?: string | null;

		/** System-defined name for the operation in the original workflow graph. */
		originalName?: string | null;

		/** Describes the outputs of the instruction. */
		outputs?: Array<InstructionOutput>;

		/** An instruction that does a ParDo operation. Takes one main input and zero or more side inputs, and produces zero or more outputs. Runs user code. */
		parDo?: ParDoInstruction;

		/** An instruction that does a partial group-by-key. One input and one output. */
		partialGroupByKey?: PartialGroupByKeyInstruction;

		/** An instruction that reads records. Takes no inputs, produces one output. */
		read?: ReadInstruction;

		/** System-defined name of this operation. Unique across the workflow. */
		systemName?: string | null;

		/** An instruction that writes records. Takes one input, produces no outputs. */
		write?: WriteInstruction;
	}

	/** Describes a particular operation comprising a MapTask. */
	export interface ParallelInstructionFormProperties {

		/** User-provided name of this operation. */
		name: FormControl<string | null | undefined>,

		/** System-defined name for the operation in the original workflow graph. */
		originalName: FormControl<string | null | undefined>,

		/** System-defined name of this operation. Unique across the workflow. */
		systemName: FormControl<string | null | undefined>,
	}
	export function CreateParallelInstructionFormGroup() {
		return new FormGroup<ParallelInstructionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			originalName: new FormControl<string | null | undefined>(undefined),
			systemName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An instruction that does a ParDo operation. Takes one main input and zero or more side inputs, and produces zero or more outputs. Runs user code. */
	export interface ParDoInstruction {

		/** An input of an instruction, as a reference to an output of a producer instruction. */
		input?: InstructionInput;

		/** Information about each of the outputs, if user_fn is a MultiDoFn. */
		multiOutputInfos?: Array<MultiOutputInfo>;

		/** The number of outputs. */
		numOutputs?: number | null;

		/** Zero or more side inputs. */
		sideInputs?: Array<SideInputInfo>;

		/** The user function to invoke. */
		userFn?: {[id: string]: any };
	}

	/** An instruction that does a ParDo operation. Takes one main input and zero or more side inputs, and produces zero or more outputs. Runs user code. */
	export interface ParDoInstructionFormProperties {

		/** The number of outputs. */
		numOutputs: FormControl<number | null | undefined>,

		/** The user function to invoke. */
		userFn: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateParDoInstructionFormGroup() {
		return new FormGroup<ParDoInstructionFormProperties>({
			numOutputs: new FormControl<number | null | undefined>(undefined),
			userFn: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Information about an output of a multi-output DoFn. */
	export interface MultiOutputInfo {

		/** The id of the tag the user code will emit to this output by; this should correspond to the tag of some SideInputInfo. */
		tag?: string | null;
	}

	/** Information about an output of a multi-output DoFn. */
	export interface MultiOutputInfoFormProperties {

		/** The id of the tag the user code will emit to this output by; this should correspond to the tag of some SideInputInfo. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateMultiOutputInfoFormGroup() {
		return new FormGroup<MultiOutputInfoFormProperties>({
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a side input of a DoFn or an input of a SeqDoFn. */
	export interface SideInputInfo {

		/** How to interpret the source element(s) as a side input value. */
		kind?: {[id: string]: any };

		/** The source(s) to read element(s) from to get the value of this side input. If more than one source, then the elements are taken from the sources, in the specified order if order matters. At least one source is required. */
		sources?: Array<Source>;

		/** The id of the tag the user code will access this side input by; this should correspond to the tag of some MultiOutputInfo. */
		tag?: string | null;
	}

	/** Information about a side input of a DoFn or an input of a SeqDoFn. */
	export interface SideInputInfoFormProperties {

		/** How to interpret the source element(s) as a side input value. */
		kind: FormControl<{[id: string]: any } | null | undefined>,

		/** The id of the tag the user code will access this side input by; this should correspond to the tag of some MultiOutputInfo. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateSideInputInfoFormGroup() {
		return new FormGroup<SideInputInfoFormProperties>({
			kind: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An instruction that does a partial group-by-key. One input and one output. */
	export interface PartialGroupByKeyInstruction {

		/** An input of an instruction, as a reference to an output of a producer instruction. */
		input?: InstructionInput;

		/** The codec to use for interpreting an element in the input PTable. */
		inputElementCodec?: {[id: string]: any };

		/** If this instruction includes a combining function this is the name of the intermediate store between the GBK and the CombineValues. */
		originalCombineValuesInputStoreName?: string | null;

		/** If this instruction includes a combining function, this is the name of the CombineValues instruction lifted into this instruction. */
		originalCombineValuesStepName?: string | null;

		/** Zero or more side inputs. */
		sideInputs?: Array<SideInputInfo>;

		/** The value combining function to invoke. */
		valueCombiningFn?: {[id: string]: any };
	}

	/** An instruction that does a partial group-by-key. One input and one output. */
	export interface PartialGroupByKeyInstructionFormProperties {

		/** The codec to use for interpreting an element in the input PTable. */
		inputElementCodec: FormControl<{[id: string]: any } | null | undefined>,

		/** If this instruction includes a combining function this is the name of the intermediate store between the GBK and the CombineValues. */
		originalCombineValuesInputStoreName: FormControl<string | null | undefined>,

		/** If this instruction includes a combining function, this is the name of the CombineValues instruction lifted into this instruction. */
		originalCombineValuesStepName: FormControl<string | null | undefined>,

		/** The value combining function to invoke. */
		valueCombiningFn: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreatePartialGroupByKeyInstructionFormGroup() {
		return new FormGroup<PartialGroupByKeyInstructionFormProperties>({
			inputElementCodec: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			originalCombineValuesInputStoreName: new FormControl<string | null | undefined>(undefined),
			originalCombineValuesStepName: new FormControl<string | null | undefined>(undefined),
			valueCombiningFn: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** An instruction that reads records. Takes no inputs, produces one output. */
	export interface ReadInstruction {

		/** A source that records can be read and decoded from. */
		source?: Source;
	}

	/** An instruction that reads records. Takes no inputs, produces one output. */
	export interface ReadInstructionFormProperties {
	}
	export function CreateReadInstructionFormGroup() {
		return new FormGroup<ReadInstructionFormProperties>({
		});

	}


	/** An instruction that writes records. Takes one input, produces no outputs. */
	export interface WriteInstruction {

		/** An input of an instruction, as a reference to an output of a producer instruction. */
		input?: InstructionInput;

		/** A sink that records can be encoded and written to. */
		sink?: Sink;
	}

	/** An instruction that writes records. Takes one input, produces no outputs. */
	export interface WriteInstructionFormProperties {
	}
	export function CreateWriteInstructionFormGroup() {
		return new FormGroup<WriteInstructionFormProperties>({
		});

	}


	/** A sink that records can be encoded and written to. */
	export interface Sink {

		/** The codec to use to encode data written to the sink. */
		codec?: {[id: string]: any };

		/** The sink to write to, plus its parameters. */
		spec?: {[id: string]: any };
	}

	/** A sink that records can be encoded and written to. */
	export interface SinkFormProperties {

		/** The codec to use to encode data written to the sink. */
		codec: FormControl<{[id: string]: any } | null | undefined>,

		/** The sink to write to, plus its parameters. */
		spec: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateSinkFormGroup() {
		return new FormGroup<SinkFormProperties>({
			codec: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			spec: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Describes a particular function to invoke. */
	export interface SeqMapTask {

		/** Information about each of the inputs. */
		inputs?: Array<SideInputInfo>;

		/** The user-provided name of the SeqDo operation. */
		name?: string | null;

		/** Information about each of the outputs. */
		outputInfos?: Array<SeqMapTaskOutputInfo>;

		/** System-defined name of the stage containing the SeqDo operation. Unique across the workflow. */
		stageName?: string | null;

		/** System-defined name of the SeqDo operation. Unique across the workflow. */
		systemName?: string | null;

		/** The user function to invoke. */
		userFn?: {[id: string]: any };
	}

	/** Describes a particular function to invoke. */
	export interface SeqMapTaskFormProperties {

		/** The user-provided name of the SeqDo operation. */
		name: FormControl<string | null | undefined>,

		/** System-defined name of the stage containing the SeqDo operation. Unique across the workflow. */
		stageName: FormControl<string | null | undefined>,

		/** System-defined name of the SeqDo operation. Unique across the workflow. */
		systemName: FormControl<string | null | undefined>,

		/** The user function to invoke. */
		userFn: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateSeqMapTaskFormGroup() {
		return new FormGroup<SeqMapTaskFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			stageName: new FormControl<string | null | undefined>(undefined),
			systemName: new FormControl<string | null | undefined>(undefined),
			userFn: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Information about an output of a SeqMapTask. */
	export interface SeqMapTaskOutputInfo {

		/** A sink that records can be encoded and written to. */
		sink?: Sink;

		/** The id of the TupleTag the user code will tag the output value by. */
		tag?: string | null;
	}

	/** Information about an output of a SeqMapTask. */
	export interface SeqMapTaskOutputInfoFormProperties {

		/** The id of the TupleTag the user code will tag the output value by. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateSeqMapTaskOutputInfoFormGroup() {
		return new FormGroup<SeqMapTaskOutputInfoFormProperties>({
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A task which consists of a shell command for the worker to execute. */
	export interface ShellTask {

		/** The shell command to run. */
		command?: string | null;

		/** Exit code for the task. */
		exitCode?: number | null;
	}

	/** A task which consists of a shell command for the worker to execute. */
	export interface ShellTaskFormProperties {

		/** The shell command to run. */
		command: FormControl<string | null | undefined>,

		/** Exit code for the task. */
		exitCode: FormControl<number | null | undefined>,
	}
	export function CreateShellTaskFormGroup() {
		return new FormGroup<ShellTaskFormProperties>({
			command: new FormControl<string | null | undefined>(undefined),
			exitCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A work item that represents the different operations that can be performed on a user-defined Source specification. */
	export interface SourceOperationRequest {

		/** A request to compute the SourceMetadata of a Source. */
		getMetadata?: SourceGetMetadataRequest;

		/** User-provided name of the Read instruction for this source. */
		name?: string | null;

		/** System-defined name for the Read instruction for this source in the original workflow graph. */
		originalName?: string | null;

		/** Represents the operation to split a high-level Source specification into bundles (parts for parallel processing). At a high level, splitting of a source into bundles happens as follows: SourceSplitRequest is applied to the source. If it returns SOURCE_SPLIT_OUTCOME_USE_CURRENT, no further splitting happens and the source is used "as is". Otherwise, splitting is applied recursively to each produced DerivedSource. As an optimization, for any Source, if its does_not_need_splitting is true, the framework assumes that splitting this source would return SOURCE_SPLIT_OUTCOME_USE_CURRENT, and doesn't initiate a SourceSplitRequest. This applies both to the initial source being split and to bundles produced from it. */
		split?: SourceSplitRequest;

		/** System-defined name of the stage containing the source operation. Unique across the workflow. */
		stageName?: string | null;

		/** System-defined name of the Read instruction for this source. Unique across the workflow. */
		systemName?: string | null;
	}

	/** A work item that represents the different operations that can be performed on a user-defined Source specification. */
	export interface SourceOperationRequestFormProperties {

		/** User-provided name of the Read instruction for this source. */
		name: FormControl<string | null | undefined>,

		/** System-defined name for the Read instruction for this source in the original workflow graph. */
		originalName: FormControl<string | null | undefined>,

		/** System-defined name of the stage containing the source operation. Unique across the workflow. */
		stageName: FormControl<string | null | undefined>,

		/** System-defined name of the Read instruction for this source. Unique across the workflow. */
		systemName: FormControl<string | null | undefined>,
	}
	export function CreateSourceOperationRequestFormGroup() {
		return new FormGroup<SourceOperationRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			originalName: new FormControl<string | null | undefined>(undefined),
			stageName: new FormControl<string | null | undefined>(undefined),
			systemName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to compute the SourceMetadata of a Source. */
	export interface SourceGetMetadataRequest {

		/** A source that records can be read and decoded from. */
		source?: Source;
	}

	/** A request to compute the SourceMetadata of a Source. */
	export interface SourceGetMetadataRequestFormProperties {
	}
	export function CreateSourceGetMetadataRequestFormGroup() {
		return new FormGroup<SourceGetMetadataRequestFormProperties>({
		});

	}


	/** Represents the operation to split a high-level Source specification into bundles (parts for parallel processing). At a high level, splitting of a source into bundles happens as follows: SourceSplitRequest is applied to the source. If it returns SOURCE_SPLIT_OUTCOME_USE_CURRENT, no further splitting happens and the source is used "as is". Otherwise, splitting is applied recursively to each produced DerivedSource. As an optimization, for any Source, if its does_not_need_splitting is true, the framework assumes that splitting this source would return SOURCE_SPLIT_OUTCOME_USE_CURRENT, and doesn't initiate a SourceSplitRequest. This applies both to the initial source being split and to bundles produced from it. */
	export interface SourceSplitRequest {

		/** Hints for splitting a Source into bundles (parts for parallel processing) using SourceSplitRequest. */
		options?: SourceSplitOptions;

		/** A source that records can be read and decoded from. */
		source?: Source;
	}

	/** Represents the operation to split a high-level Source specification into bundles (parts for parallel processing). At a high level, splitting of a source into bundles happens as follows: SourceSplitRequest is applied to the source. If it returns SOURCE_SPLIT_OUTCOME_USE_CURRENT, no further splitting happens and the source is used "as is". Otherwise, splitting is applied recursively to each produced DerivedSource. As an optimization, for any Source, if its does_not_need_splitting is true, the framework assumes that splitting this source would return SOURCE_SPLIT_OUTCOME_USE_CURRENT, and doesn't initiate a SourceSplitRequest. This applies both to the initial source being split and to bundles produced from it. */
	export interface SourceSplitRequestFormProperties {
	}
	export function CreateSourceSplitRequestFormGroup() {
		return new FormGroup<SourceSplitRequestFormProperties>({
		});

	}


	/** Hints for splitting a Source into bundles (parts for parallel processing) using SourceSplitRequest. */
	export interface SourceSplitOptions {

		/** The source should be split into a set of bundles where the estimated size of each is approximately this many bytes. */
		desiredBundleSizeBytes?: string | null;

		/** DEPRECATED in favor of desired_bundle_size_bytes. */
		desiredShardSizeBytes?: string | null;
	}

	/** Hints for splitting a Source into bundles (parts for parallel processing) using SourceSplitRequest. */
	export interface SourceSplitOptionsFormProperties {

		/** The source should be split into a set of bundles where the estimated size of each is approximately this many bytes. */
		desiredBundleSizeBytes: FormControl<string | null | undefined>,

		/** DEPRECATED in favor of desired_bundle_size_bytes. */
		desiredShardSizeBytes: FormControl<string | null | undefined>,
	}
	export function CreateSourceSplitOptionsFormGroup() {
		return new FormGroup<SourceSplitOptionsFormProperties>({
			desiredBundleSizeBytes: new FormControl<string | null | undefined>(undefined),
			desiredShardSizeBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A task which describes what action should be performed for the specified streaming computation ranges. */
	export interface StreamingComputationTask {

		/** Contains ranges of a streaming computation this task should apply to. */
		computationRanges?: Array<StreamingComputationRanges>;

		/** Describes the set of data disks this task should apply to. */
		dataDisks?: Array<MountedDataDisk>;

		/** A type of streaming computation task. */
		taskType?: StreamingComputationTaskTaskType | null;
	}

	/** A task which describes what action should be performed for the specified streaming computation ranges. */
	export interface StreamingComputationTaskFormProperties {

		/** A type of streaming computation task. */
		taskType: FormControl<StreamingComputationTaskTaskType | null | undefined>,
	}
	export function CreateStreamingComputationTaskFormGroup() {
		return new FormGroup<StreamingComputationTaskFormProperties>({
			taskType: new FormControl<StreamingComputationTaskTaskType | null | undefined>(undefined),
		});

	}


	/** Describes full or partial data disk assignment information of the computation ranges. */
	export interface StreamingComputationRanges {

		/** The ID of the computation. */
		computationId?: string | null;

		/** Data disk assignments for ranges from this computation. */
		rangeAssignments?: Array<KeyRangeDataDiskAssignment>;
	}

	/** Describes full or partial data disk assignment information of the computation ranges. */
	export interface StreamingComputationRangesFormProperties {

		/** The ID of the computation. */
		computationId: FormControl<string | null | undefined>,
	}
	export function CreateStreamingComputationRangesFormGroup() {
		return new FormGroup<StreamingComputationRangesFormProperties>({
			computationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes mounted data disk. */
	export interface MountedDataDisk {

		/** The name of the data disk. This name is local to the Google Cloud Platform project and uniquely identifies the disk within that project, for example "myproject-1014-104817-4c2-harness-0-disk-1". */
		dataDisk?: string | null;
	}

	/** Describes mounted data disk. */
	export interface MountedDataDiskFormProperties {

		/** The name of the data disk. This name is local to the Google Cloud Platform project and uniquely identifies the disk within that project, for example "myproject-1014-104817-4c2-harness-0-disk-1". */
		dataDisk: FormControl<string | null | undefined>,
	}
	export function CreateMountedDataDiskFormGroup() {
		return new FormGroup<MountedDataDiskFormProperties>({
			dataDisk: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StreamingComputationTaskTaskType { STREAMING_COMPUTATION_TASK_UNKNOWN = 'STREAMING_COMPUTATION_TASK_UNKNOWN', STREAMING_COMPUTATION_TASK_STOP = 'STREAMING_COMPUTATION_TASK_STOP', STREAMING_COMPUTATION_TASK_START = 'STREAMING_COMPUTATION_TASK_START' }


	/** A task that carries configuration information for streaming computations. */
	export interface StreamingConfigTask {

		/** Chunk size for commit streams from the harness to windmill. */
		commitStreamChunkSizeBytes?: string | null;

		/** Chunk size for get data streams from the harness to windmill. */
		getDataStreamChunkSizeBytes?: string | null;

		/** Maximum size for work item commit supported windmill storage layer. */
		maxWorkItemCommitBytes?: string | null;

		/** Set of computation configuration information. */
		streamingComputationConfigs?: Array<StreamingComputationConfig>;

		/** Map from user step names to state families. */
		userStepToStateFamilyNameMap?: {[id: string]: string };

		/** If present, the worker must use this endpoint to communicate with Windmill Service dispatchers, otherwise the worker must continue to use whatever endpoint it had been using. */
		windmillServiceEndpoint?: string | null;

		/** If present, the worker must use this port to communicate with Windmill Service dispatchers. Only applicable when windmill_service_endpoint is specified. */
		windmillServicePort?: string | null;
	}

	/** A task that carries configuration information for streaming computations. */
	export interface StreamingConfigTaskFormProperties {

		/** Chunk size for commit streams from the harness to windmill. */
		commitStreamChunkSizeBytes: FormControl<string | null | undefined>,

		/** Chunk size for get data streams from the harness to windmill. */
		getDataStreamChunkSizeBytes: FormControl<string | null | undefined>,

		/** Maximum size for work item commit supported windmill storage layer. */
		maxWorkItemCommitBytes: FormControl<string | null | undefined>,

		/** Map from user step names to state families. */
		userStepToStateFamilyNameMap: FormControl<{[id: string]: string } | null | undefined>,

		/** If present, the worker must use this endpoint to communicate with Windmill Service dispatchers, otherwise the worker must continue to use whatever endpoint it had been using. */
		windmillServiceEndpoint: FormControl<string | null | undefined>,

		/** If present, the worker must use this port to communicate with Windmill Service dispatchers. Only applicable when windmill_service_endpoint is specified. */
		windmillServicePort: FormControl<string | null | undefined>,
	}
	export function CreateStreamingConfigTaskFormGroup() {
		return new FormGroup<StreamingConfigTaskFormProperties>({
			commitStreamChunkSizeBytes: new FormControl<string | null | undefined>(undefined),
			getDataStreamChunkSizeBytes: new FormControl<string | null | undefined>(undefined),
			maxWorkItemCommitBytes: new FormControl<string | null | undefined>(undefined),
			userStepToStateFamilyNameMap: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			windmillServiceEndpoint: new FormControl<string | null | undefined>(undefined),
			windmillServicePort: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration information for a single streaming computation. */
	export interface StreamingComputationConfig {

		/** Unique identifier for this computation. */
		computationId?: string | null;

		/** Instructions that comprise the computation. */
		instructions?: Array<ParallelInstruction>;

		/** Stage name of this computation. */
		stageName?: string | null;

		/** System defined name for this computation. */
		systemName?: string | null;

		/** Map from user name of stateful transforms in this stage to their state family. */
		transformUserNameToStateFamily?: {[id: string]: string };
	}

	/** Configuration information for a single streaming computation. */
	export interface StreamingComputationConfigFormProperties {

		/** Unique identifier for this computation. */
		computationId: FormControl<string | null | undefined>,

		/** Stage name of this computation. */
		stageName: FormControl<string | null | undefined>,

		/** System defined name for this computation. */
		systemName: FormControl<string | null | undefined>,

		/** Map from user name of stateful transforms in this stage to their state family. */
		transformUserNameToStateFamily: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStreamingComputationConfigFormGroup() {
		return new FormGroup<StreamingComputationConfigFormProperties>({
			computationId: new FormControl<string | null | undefined>(undefined),
			stageName: new FormControl<string | null | undefined>(undefined),
			systemName: new FormControl<string | null | undefined>(undefined),
			transformUserNameToStateFamily: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A task which initializes part of a streaming Dataflow job. */
	export interface StreamingSetupTask {

		/** The user has requested drain. */
		drain?: boolean | null;

		/** The TCP port on which the worker should listen for messages from other streaming computation workers. */
		receiveWorkPort?: number | null;

		/** Streaming appliance snapshot configuration. */
		snapshotConfig?: StreamingApplianceSnapshotConfig;

		/** Global topology of the streaming Dataflow job, including all computations and their sharded locations. */
		streamingComputationTopology?: TopologyConfig;

		/** The TCP port used by the worker to communicate with the Dataflow worker harness. */
		workerHarnessPort?: number | null;
	}

	/** A task which initializes part of a streaming Dataflow job. */
	export interface StreamingSetupTaskFormProperties {

		/** The user has requested drain. */
		drain: FormControl<boolean | null | undefined>,

		/** The TCP port on which the worker should listen for messages from other streaming computation workers. */
		receiveWorkPort: FormControl<number | null | undefined>,

		/** The TCP port used by the worker to communicate with the Dataflow worker harness. */
		workerHarnessPort: FormControl<number | null | undefined>,
	}
	export function CreateStreamingSetupTaskFormGroup() {
		return new FormGroup<StreamingSetupTaskFormProperties>({
			drain: new FormControl<boolean | null | undefined>(undefined),
			receiveWorkPort: new FormControl<number | null | undefined>(undefined),
			workerHarnessPort: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Streaming appliance snapshot configuration. */
	export interface StreamingApplianceSnapshotConfig {

		/** Indicates which endpoint is used to import appliance state. */
		importStateEndpoint?: string | null;

		/** If set, indicates the snapshot id for the snapshot being performed. */
		snapshotId?: string | null;
	}

	/** Streaming appliance snapshot configuration. */
	export interface StreamingApplianceSnapshotConfigFormProperties {

		/** Indicates which endpoint is used to import appliance state. */
		importStateEndpoint: FormControl<string | null | undefined>,

		/** If set, indicates the snapshot id for the snapshot being performed. */
		snapshotId: FormControl<string | null | undefined>,
	}
	export function CreateStreamingApplianceSnapshotConfigFormGroup() {
		return new FormGroup<StreamingApplianceSnapshotConfigFormProperties>({
			importStateEndpoint: new FormControl<string | null | undefined>(undefined),
			snapshotId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Global topology of the streaming Dataflow job, including all computations and their sharded locations. */
	export interface TopologyConfig {

		/** The computations associated with a streaming Dataflow job. */
		computations?: Array<ComputationTopology>;

		/** The disks assigned to a streaming Dataflow job. */
		dataDiskAssignments?: Array<DataDiskAssignment>;

		/** The size (in bits) of keys that will be assigned to source messages. */
		forwardingKeyBits?: number | null;

		/** Version number for persistent state. */
		persistentStateVersion?: number | null;

		/** Maps user stage names to stable computation names. */
		userStageToComputationNameMap?: {[id: string]: string };
	}

	/** Global topology of the streaming Dataflow job, including all computations and their sharded locations. */
	export interface TopologyConfigFormProperties {

		/** The size (in bits) of keys that will be assigned to source messages. */
		forwardingKeyBits: FormControl<number | null | undefined>,

		/** Version number for persistent state. */
		persistentStateVersion: FormControl<number | null | undefined>,

		/** Maps user stage names to stable computation names. */
		userStageToComputationNameMap: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTopologyConfigFormGroup() {
		return new FormGroup<TopologyConfigFormProperties>({
			forwardingKeyBits: new FormControl<number | null | undefined>(undefined),
			persistentStateVersion: new FormControl<number | null | undefined>(undefined),
			userStageToComputationNameMap: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Response to a request to list job messages. */
	export interface ListJobMessagesResponse {

		/** Autoscaling events in ascending timestamp order. */
		autoscalingEvents?: Array<AutoscalingEvent>;

		/** Messages in ascending timestamp order. */
		jobMessages?: Array<JobMessage>;

		/** The token to obtain the next page of results if there are more. */
		nextPageToken?: string | null;
	}

	/** Response to a request to list job messages. */
	export interface ListJobMessagesResponseFormProperties {

		/** The token to obtain the next page of results if there are more. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobMessagesResponseFormGroup() {
		return new FormGroup<ListJobMessagesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to a request to list Cloud Dataflow jobs in a project. This might be a partial response, depending on the page size in the ListJobsRequest. However, if the project does not have any jobs, an instance of ListJobsResponse is not returned and the requests's response body is empty {}. */
	export interface ListJobsResponse {

		/** Zero or more messages describing the [regional endpoints] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that failed to respond. */
		failedLocation?: Array<FailedLocation>;

		/** A subset of the requested job information. */
		jobs?: Array<Job>;

		/** Set if there may be more results than fit in this response. */
		nextPageToken?: string | null;
	}

	/** Response to a request to list Cloud Dataflow jobs in a project. This might be a partial response, depending on the page size in the ListJobsRequest. However, if the project does not have any jobs, an instance of ListJobsResponse is not returned and the requests's response body is empty {}. */
	export interface ListJobsResponseFormProperties {

		/** Set if there may be more results than fit in this response. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsResponseFormGroup() {
		return new FormGroup<ListJobsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of snapshots. */
	export interface ListSnapshotsResponse {

		/** Returned snapshots. */
		snapshots?: Array<Snapshot>;
	}

	/** List of snapshots. */
	export interface ListSnapshotsResponseFormProperties {
	}
	export function CreateListSnapshotsResponseFormGroup() {
		return new FormGroup<ListSnapshotsResponseFormProperties>({
		});

	}


	/** Represents a snapshot of a job. */
	export interface Snapshot {

		/** The time this snapshot was created. */
		creationTime?: string | null;

		/** User specified description of the snapshot. Maybe empty. */
		description?: string | null;

		/** The disk byte size of the snapshot. Only available for snapshots in READY state. */
		diskSizeBytes?: string | null;

		/** The unique ID of this snapshot. */
		id?: string | null;

		/** The project this snapshot belongs to. */
		projectId?: string | null;

		/** Pub/Sub snapshot metadata. */
		pubsubMetadata?: Array<PubsubSnapshotMetadata>;

		/** Cloud region where this snapshot lives in, e.g., "us-central1". */
		region?: string | null;

		/** The job this snapshot was created from. */
		sourceJobId?: string | null;

		/** State of the snapshot. */
		state?: SnapshotState | null;

		/** The time after which this snapshot will be automatically deleted. */
		ttl?: string | null;
	}

	/** Represents a snapshot of a job. */
	export interface SnapshotFormProperties {

		/** The time this snapshot was created. */
		creationTime: FormControl<string | null | undefined>,

		/** User specified description of the snapshot. Maybe empty. */
		description: FormControl<string | null | undefined>,

		/** The disk byte size of the snapshot. Only available for snapshots in READY state. */
		diskSizeBytes: FormControl<string | null | undefined>,

		/** The unique ID of this snapshot. */
		id: FormControl<string | null | undefined>,

		/** The project this snapshot belongs to. */
		projectId: FormControl<string | null | undefined>,

		/** Cloud region where this snapshot lives in, e.g., "us-central1". */
		region: FormControl<string | null | undefined>,

		/** The job this snapshot was created from. */
		sourceJobId: FormControl<string | null | undefined>,

		/** State of the snapshot. */
		state: FormControl<SnapshotState | null | undefined>,

		/** The time after which this snapshot will be automatically deleted. */
		ttl: FormControl<string | null | undefined>,
	}
	export function CreateSnapshotFormGroup() {
		return new FormGroup<SnapshotFormProperties>({
			creationTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			diskSizeBytes: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			sourceJobId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<SnapshotState | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Pubsub snapshot. */
	export interface PubsubSnapshotMetadata {

		/** The expire time of the Pubsub snapshot. */
		expireTime?: string | null;

		/** The name of the Pubsub snapshot. */
		snapshotName?: string | null;

		/** The name of the Pubsub topic. */
		topicName?: string | null;
	}

	/** Represents a Pubsub snapshot. */
	export interface PubsubSnapshotMetadataFormProperties {

		/** The expire time of the Pubsub snapshot. */
		expireTime: FormControl<string | null | undefined>,

		/** The name of the Pubsub snapshot. */
		snapshotName: FormControl<string | null | undefined>,

		/** The name of the Pubsub topic. */
		topicName: FormControl<string | null | undefined>,
	}
	export function CreatePubsubSnapshotMetadataFormGroup() {
		return new FormGroup<PubsubSnapshotMetadataFormProperties>({
			expireTime: new FormControl<string | null | undefined>(undefined),
			snapshotName: new FormControl<string | null | undefined>(undefined),
			topicName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SnapshotState { UNKNOWN_SNAPSHOT_STATE = 'UNKNOWN_SNAPSHOT_STATE', PENDING = 'PENDING', RUNNING = 'RUNNING', READY = 'READY', FAILED = 'FAILED', DELETED = 'DELETED' }


	/** Information about the memory usage of a worker or a container within a worker. */
	export interface MemInfo {

		/** Instantenous memory limit in bytes. */
		currentLimitBytes?: string | null;

		/** Number of Out of Memory (OOM) events recorded since the previous measurement. */
		currentOoms?: string | null;

		/** Instantenous memory (RSS) size in bytes. */
		currentRssBytes?: string | null;

		/** Timestamp of the measurement. */
		timestamp?: string | null;

		/** Total memory (RSS) usage since start up in GB * ms. */
		totalGbMs?: string | null;
	}

	/** Information about the memory usage of a worker or a container within a worker. */
	export interface MemInfoFormProperties {

		/** Instantenous memory limit in bytes. */
		currentLimitBytes: FormControl<string | null | undefined>,

		/** Number of Out of Memory (OOM) events recorded since the previous measurement. */
		currentOoms: FormControl<string | null | undefined>,

		/** Instantenous memory (RSS) size in bytes. */
		currentRssBytes: FormControl<string | null | undefined>,

		/** Timestamp of the measurement. */
		timestamp: FormControl<string | null | undefined>,

		/** Total memory (RSS) usage since start up in GB * ms. */
		totalGbMs: FormControl<string | null | undefined>,
	}
	export function CreateMemInfoFormGroup() {
		return new FormGroup<MemInfoFormProperties>({
			currentLimitBytes: new FormControl<string | null | undefined>(undefined),
			currentOoms: new FormControl<string | null | undefined>(undefined),
			currentRssBytes: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			totalGbMs: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metric short id is returned to the user alongside an offset into ReportWorkItemStatusRequest */
	export interface MetricShortId {

		/** The index of the corresponding metric in the ReportWorkItemStatusRequest. Required. */
		metricIndex?: number | null;

		/** The service-generated short identifier for the metric. */
		shortId?: string | null;
	}

	/** The metric short id is returned to the user alongside an offset into ReportWorkItemStatusRequest */
	export interface MetricShortIdFormProperties {

		/** The index of the corresponding metric in the ReportWorkItemStatusRequest. Required. */
		metricIndex: FormControl<number | null | undefined>,

		/** The service-generated short identifier for the metric. */
		shortId: FormControl<string | null | undefined>,
	}
	export function CreateMetricShortIdFormGroup() {
		return new FormGroup<MetricShortIdFormProperties>({
			metricIndex: new FormControl<number | null | undefined>(undefined),
			shortId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The value of a metric along with its name and labels. */
	export interface MetricValue {

		/** Base name for this metric. */
		metric?: string | null;

		/** Optional. Set of metric labels for this metric. */
		metricLabels?: {[id: string]: string };

		/** Summary statistics for a population of values. HistogramValue contains a sequence of buckets and gives a count of values that fall into each bucket. Bucket boundares are defined by a formula and bucket widths are either fixed or exponentially increasing. */
		valueHistogram?: DataflowHistogramValue;

		/** Integer value of this metric. */
		valueInt64?: string | null;
	}

	/** The value of a metric along with its name and labels. */
	export interface MetricValueFormProperties {

		/** Base name for this metric. */
		metric: FormControl<string | null | undefined>,

		/** Optional. Set of metric labels for this metric. */
		metricLabels: FormControl<{[id: string]: string } | null | undefined>,

		/** Integer value of this metric. */
		valueInt64: FormControl<string | null | undefined>,
	}
	export function CreateMetricValueFormGroup() {
		return new FormGroup<MetricValueFormProperties>({
			metric: new FormControl<string | null | undefined>(undefined),
			metricLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			valueInt64: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metrics for a particular unfused step and namespace. A metric is uniquely identified by the `metrics_namespace`, `original_step`, `metric name` and `metric_labels`. */
	export interface PerStepNamespaceMetrics {

		/** Optional. Metrics that are recorded for this namespace and unfused step. */
		metricValues?: Array<MetricValue>;

		/** The namespace of these metrics on the worker. */
		metricsNamespace?: string | null;

		/** The original system name of the unfused step that these metrics are reported from. */
		originalStep?: string | null;
	}

	/** Metrics for a particular unfused step and namespace. A metric is uniquely identified by the `metrics_namespace`, `original_step`, `metric name` and `metric_labels`. */
	export interface PerStepNamespaceMetricsFormProperties {

		/** The namespace of these metrics on the worker. */
		metricsNamespace: FormControl<string | null | undefined>,

		/** The original system name of the unfused step that these metrics are reported from. */
		originalStep: FormControl<string | null | undefined>,
	}
	export function CreatePerStepNamespaceMetricsFormGroup() {
		return new FormGroup<PerStepNamespaceMetricsFormProperties>({
			metricsNamespace: new FormControl<string | null | undefined>(undefined),
			originalStep: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Per worker metrics. */
	export interface PerWorkerMetrics {

		/** Optional. Metrics for a particular unfused step and namespace. */
		perStepNamespaceMetrics?: Array<PerStepNamespaceMetrics>;
	}

	/** Per worker metrics. */
	export interface PerWorkerMetricsFormProperties {
	}
	export function CreatePerWorkerMetricsFormGroup() {
		return new FormGroup<PerWorkerMetricsFormProperties>({
		});

	}


	/** Request to report the status of WorkItems. */
	export interface ReportWorkItemStatusRequest {

		/** The current timestamp at the worker. */
		currentWorkerTime?: string | null;

		/** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job. */
		location?: string | null;

		/** Untranslated bag-of-bytes WorkProgressUpdateRequest from UnifiedWorker. */
		unifiedWorkerRequest?: {[id: string]: any };

		/** The order is unimportant, except that the order of the WorkItemServiceState messages in the ReportWorkItemStatusResponse corresponds to the order of WorkItemStatus messages here. */
		workItemStatuses?: Array<WorkItemStatus>;

		/** The ID of the worker reporting the WorkItem status. If this does not match the ID of the worker which the Dataflow service believes currently has the lease on the WorkItem, the report will be dropped (with an error response). */
		workerId?: string | null;
	}

	/** Request to report the status of WorkItems. */
	export interface ReportWorkItemStatusRequestFormProperties {

		/** The current timestamp at the worker. */
		currentWorkerTime: FormControl<string | null | undefined>,

		/** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job. */
		location: FormControl<string | null | undefined>,

		/** Untranslated bag-of-bytes WorkProgressUpdateRequest from UnifiedWorker. */
		unifiedWorkerRequest: FormControl<{[id: string]: any } | null | undefined>,

		/** The ID of the worker reporting the WorkItem status. If this does not match the ID of the worker which the Dataflow service believes currently has the lease on the WorkItem, the report will be dropped (with an error response). */
		workerId: FormControl<string | null | undefined>,
	}
	export function CreateReportWorkItemStatusRequestFormGroup() {
		return new FormGroup<ReportWorkItemStatusRequestFormProperties>({
			currentWorkerTime: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			unifiedWorkerRequest: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			workerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Conveys a worker's progress through the work described by a WorkItem. */
	export interface WorkItemStatus {

		/** True if the WorkItem was completed (successfully or unsuccessfully). */
		completed?: boolean | null;

		/** Worker output counters for this WorkItem. */
		counterUpdates?: Array<CounterUpdate>;

		/** When a task splits using WorkItemStatus.dynamic_source_split, this message describes the two parts of the split relative to the description of the current task's input. */
		dynamicSourceSplit?: DynamicSourceSplit;

		/** Specifies errors which occurred during processing. If errors are provided, and completed = true, then the WorkItem is considered to have failed. */
		errors?: Array<Status>;

		/** DEPRECATED in favor of counter_updates. */
		metricUpdates?: Array<MetricUpdate>;

		/** Obsolete in favor of ApproximateReportedProgress and ApproximateSplitRequest. */
		progress?: ApproximateProgress;

		/** The report index. When a WorkItem is leased, the lease will contain an initial report index. When a WorkItem's status is reported to the system, the report should be sent with that report index, and the response will contain the index the worker should use for the next report. Reports received with unexpected index values will be rejected by the service. In order to preserve idempotency, the worker should not alter the contents of a report, even if the worker must submit the same report multiple times before getting back a response. The worker should not submit a subsequent report until the response for the previous report had been received from the service. */
		reportIndex?: string | null;

		/** A progress measurement of a WorkItem by a worker. */
		reportedProgress?: ApproximateReportedProgress;

		/** Amount of time the worker requests for its lease. */
		requestedLeaseDuration?: string | null;

		/** DEPRECATED in favor of DynamicSourceSplit. */
		sourceFork?: SourceFork;

		/** The result of a SourceOperationRequest, specified in ReportWorkItemStatusRequest.source_operation when the work item is completed. */
		sourceOperationResponse?: SourceOperationResponse;

		/** Position defines a position within a collection of data. The value can be either the end position, a key (used with ordered collections), a byte offset, or a record index. */
		stopPosition?: Position;

		/** Total time the worker spent being throttled by external systems. */
		totalThrottlerWaitTimeSeconds?: number | null;

		/** Identifies the WorkItem. */
		workItemId?: string | null;
	}

	/** Conveys a worker's progress through the work described by a WorkItem. */
	export interface WorkItemStatusFormProperties {

		/** True if the WorkItem was completed (successfully or unsuccessfully). */
		completed: FormControl<boolean | null | undefined>,

		/** The report index. When a WorkItem is leased, the lease will contain an initial report index. When a WorkItem's status is reported to the system, the report should be sent with that report index, and the response will contain the index the worker should use for the next report. Reports received with unexpected index values will be rejected by the service. In order to preserve idempotency, the worker should not alter the contents of a report, even if the worker must submit the same report multiple times before getting back a response. The worker should not submit a subsequent report until the response for the previous report had been received from the service. */
		reportIndex: FormControl<string | null | undefined>,

		/** Amount of time the worker requests for its lease. */
		requestedLeaseDuration: FormControl<string | null | undefined>,

		/** Total time the worker spent being throttled by external systems. */
		totalThrottlerWaitTimeSeconds: FormControl<number | null | undefined>,

		/** Identifies the WorkItem. */
		workItemId: FormControl<string | null | undefined>,
	}
	export function CreateWorkItemStatusFormGroup() {
		return new FormGroup<WorkItemStatusFormProperties>({
			completed: new FormControl<boolean | null | undefined>(undefined),
			reportIndex: new FormControl<string | null | undefined>(undefined),
			requestedLeaseDuration: new FormControl<string | null | undefined>(undefined),
			totalThrottlerWaitTimeSeconds: new FormControl<number | null | undefined>(undefined),
			workItemId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DEPRECATED in favor of DynamicSourceSplit. */
	export interface SourceFork {

		/** DEPRECATED in favor of DerivedSource. */
		primary?: SourceSplitShard;

		/** Specification of one of the bundles produced as a result of splitting a Source (e.g. when executing a SourceSplitRequest, or when splitting an active task using WorkItemStatus.dynamic_source_split), relative to the source being split. */
		primarySource?: DerivedSource;

		/** DEPRECATED in favor of DerivedSource. */
		residual?: SourceSplitShard;

		/** Specification of one of the bundles produced as a result of splitting a Source (e.g. when executing a SourceSplitRequest, or when splitting an active task using WorkItemStatus.dynamic_source_split), relative to the source being split. */
		residualSource?: DerivedSource;
	}

	/** DEPRECATED in favor of DynamicSourceSplit. */
	export interface SourceForkFormProperties {
	}
	export function CreateSourceForkFormGroup() {
		return new FormGroup<SourceForkFormProperties>({
		});

	}


	/** DEPRECATED in favor of DerivedSource. */
	export interface SourceSplitShard {

		/** DEPRECATED */
		derivationMode?: DerivedSourceDerivationMode | null;

		/** A source that records can be read and decoded from. */
		source?: Source;
	}

	/** DEPRECATED in favor of DerivedSource. */
	export interface SourceSplitShardFormProperties {

		/** DEPRECATED */
		derivationMode: FormControl<DerivedSourceDerivationMode | null | undefined>,
	}
	export function CreateSourceSplitShardFormGroup() {
		return new FormGroup<SourceSplitShardFormProperties>({
			derivationMode: new FormControl<DerivedSourceDerivationMode | null | undefined>(undefined),
		});

	}


	/** The result of a SourceOperationRequest, specified in ReportWorkItemStatusRequest.source_operation when the work item is completed. */
	export interface SourceOperationResponse {

		/** The result of a SourceGetMetadataOperation. */
		getMetadata?: SourceGetMetadataResponse;

		/** The response to a SourceSplitRequest. */
		split?: SourceSplitResponse;
	}

	/** The result of a SourceOperationRequest, specified in ReportWorkItemStatusRequest.source_operation when the work item is completed. */
	export interface SourceOperationResponseFormProperties {
	}
	export function CreateSourceOperationResponseFormGroup() {
		return new FormGroup<SourceOperationResponseFormProperties>({
		});

	}


	/** The result of a SourceGetMetadataOperation. */
	export interface SourceGetMetadataResponse {

		/** Metadata about a Source useful for automatically optimizing and tuning the pipeline, etc. */
		metadata?: SourceMetadata;
	}

	/** The result of a SourceGetMetadataOperation. */
	export interface SourceGetMetadataResponseFormProperties {
	}
	export function CreateSourceGetMetadataResponseFormGroup() {
		return new FormGroup<SourceGetMetadataResponseFormProperties>({
		});

	}


	/** The response to a SourceSplitRequest. */
	export interface SourceSplitResponse {

		/** If outcome is SPLITTING_HAPPENED, then this is a list of bundles into which the source was split. Otherwise this field is ignored. This list can be empty, which means the source represents an empty input. */
		bundles?: Array<DerivedSource>;

		/** Indicates whether splitting happened and produced a list of bundles. If this is USE_CURRENT_SOURCE_AS_IS, the current source should be processed "as is" without splitting. "bundles" is ignored in this case. If this is SPLITTING_HAPPENED, then "bundles" contains a list of bundles into which the source was split. */
		outcome?: SourceSplitResponseOutcome | null;

		/** DEPRECATED in favor of bundles. */
		shards?: Array<SourceSplitShard>;
	}

	/** The response to a SourceSplitRequest. */
	export interface SourceSplitResponseFormProperties {

		/** Indicates whether splitting happened and produced a list of bundles. If this is USE_CURRENT_SOURCE_AS_IS, the current source should be processed "as is" without splitting. "bundles" is ignored in this case. If this is SPLITTING_HAPPENED, then "bundles" contains a list of bundles into which the source was split. */
		outcome: FormControl<SourceSplitResponseOutcome | null | undefined>,
	}
	export function CreateSourceSplitResponseFormGroup() {
		return new FormGroup<SourceSplitResponseFormProperties>({
			outcome: new FormControl<SourceSplitResponseOutcome | null | undefined>(undefined),
		});

	}

	export enum SourceSplitResponseOutcome { SOURCE_SPLIT_OUTCOME_UNKNOWN = 'SOURCE_SPLIT_OUTCOME_UNKNOWN', SOURCE_SPLIT_OUTCOME_USE_CURRENT = 'SOURCE_SPLIT_OUTCOME_USE_CURRENT', SOURCE_SPLIT_OUTCOME_SPLITTING_HAPPENED = 'SOURCE_SPLIT_OUTCOME_SPLITTING_HAPPENED' }


	/** Response from a request to report the status of WorkItems. */
	export interface ReportWorkItemStatusResponse {

		/** Untranslated bag-of-bytes WorkProgressUpdateResponse for UnifiedWorker. */
		unifiedWorkerResponse?: {[id: string]: any };

		/** A set of messages indicating the service-side state for each WorkItem whose status was reported, in the same order as the WorkItemStatus messages in the ReportWorkItemStatusRequest which resulting in this response. */
		workItemServiceStates?: Array<WorkItemServiceState>;
	}

	/** Response from a request to report the status of WorkItems. */
	export interface ReportWorkItemStatusResponseFormProperties {

		/** Untranslated bag-of-bytes WorkProgressUpdateResponse for UnifiedWorker. */
		unifiedWorkerResponse: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateReportWorkItemStatusResponseFormGroup() {
		return new FormGroup<ReportWorkItemStatusResponseFormProperties>({
			unifiedWorkerResponse: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The Dataflow service's idea of the current state of a WorkItem being processed by a worker. */
	export interface WorkItemServiceState {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		completeWorkStatus?: Status;

		/** Other data returned by the service, specific to the particular worker harness. */
		harnessData?: {[id: string]: any };

		/** Proto describing a hot key detected on a given WorkItem. */
		hotKeyDetection?: HotKeyDetection;

		/** Time at which the current lease will expire. */
		leaseExpireTime?: string | null;

		/** The short ids that workers should use in subsequent metric updates. Workers should strive to use short ids whenever possible, but it is ok to request the short_id again if a worker lost track of it (e.g. if the worker is recovering from a crash). NOTE: it is possible that the response may have short ids for a subset of the metrics. */
		metricShortId?: Array<MetricShortId>;

		/** The index value to use for the next report sent by the worker. Note: If the report call fails for whatever reason, the worker should reuse this index for subsequent report attempts. */
		nextReportIndex?: string | null;

		/** New recommended reporting interval. */
		reportStatusInterval?: string | null;

		/** A suggestion by the service to the worker to dynamically split the WorkItem. */
		splitRequest?: ApproximateSplitRequest;

		/** Obsolete in favor of ApproximateReportedProgress and ApproximateSplitRequest. */
		suggestedStopPoint?: ApproximateProgress;

		/** Position defines a position within a collection of data. The value can be either the end position, a key (used with ordered collections), a byte offset, or a record index. */
		suggestedStopPosition?: Position;
	}

	/** The Dataflow service's idea of the current state of a WorkItem being processed by a worker. */
	export interface WorkItemServiceStateFormProperties {

		/** Other data returned by the service, specific to the particular worker harness. */
		harnessData: FormControl<{[id: string]: any } | null | undefined>,

		/** Time at which the current lease will expire. */
		leaseExpireTime: FormControl<string | null | undefined>,

		/** The index value to use for the next report sent by the worker. Note: If the report call fails for whatever reason, the worker should reuse this index for subsequent report attempts. */
		nextReportIndex: FormControl<string | null | undefined>,

		/** New recommended reporting interval. */
		reportStatusInterval: FormControl<string | null | undefined>,
	}
	export function CreateWorkItemServiceStateFormGroup() {
		return new FormGroup<WorkItemServiceStateFormProperties>({
			harnessData: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			leaseExpireTime: new FormControl<string | null | undefined>(undefined),
			nextReportIndex: new FormControl<string | null | undefined>(undefined),
			reportStatusInterval: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Worker metrics exported from workers. This contains resource utilization metrics accumulated from a variety of sources. For more information, see go/df-resource-signals. */
	export interface ResourceUtilizationReport {

		/** Per container information. Key: container name. */
		containers?: {[id: string]: ResourceUtilizationReport };

		/** CPU utilization samples. */
		cpuTime?: Array<CPUTime>;

		/** Memory utilization samples. */
		memoryInfo?: Array<MemInfo>;
	}

	/** Worker metrics exported from workers. This contains resource utilization metrics accumulated from a variety of sources. For more information, see go/df-resource-signals. */
	export interface ResourceUtilizationReportFormProperties {

		/** Per container information. Key: container name. */
		containers: FormControl<{[id: string]: ResourceUtilizationReport } | null | undefined>,
	}
	export function CreateResourceUtilizationReportFormGroup() {
		return new FormGroup<ResourceUtilizationReportFormProperties>({
			containers: new FormControl<{[id: string]: ResourceUtilizationReport } | null | undefined>(undefined),
		});

	}


	/** Service-side response to WorkerMessage reporting resource utilization. */
	export interface ResourceUtilizationReportResponse {
	}

	/** Service-side response to WorkerMessage reporting resource utilization. */
	export interface ResourceUtilizationReportResponseFormProperties {
	}
	export function CreateResourceUtilizationReportResponseFormGroup() {
		return new FormGroup<ResourceUtilizationReportResponseFormProperties>({
		});

	}


	/** Request to send encoded debug information. Next ID: 8 */
	export interface SendDebugCaptureRequest {

		/** The internal component id for which debug information is sent. */
		componentId?: string | null;

		/** The encoded debug information. */
		data?: string | null;

		/** Format for the data field above (id=5). */
		dataFormat?: SendDebugCaptureRequestDataFormat | null;

		/** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. */
		location?: string | null;

		/** The worker id, i.e., VM hostname. */
		workerId?: string | null;
	}

	/** Request to send encoded debug information. Next ID: 8 */
	export interface SendDebugCaptureRequestFormProperties {

		/** The internal component id for which debug information is sent. */
		componentId: FormControl<string | null | undefined>,

		/** The encoded debug information. */
		data: FormControl<string | null | undefined>,

		/** Format for the data field above (id=5). */
		dataFormat: FormControl<SendDebugCaptureRequestDataFormat | null | undefined>,

		/** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. */
		location: FormControl<string | null | undefined>,

		/** The worker id, i.e., VM hostname. */
		workerId: FormControl<string | null | undefined>,
	}
	export function CreateSendDebugCaptureRequestFormGroup() {
		return new FormGroup<SendDebugCaptureRequestFormProperties>({
			componentId: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			dataFormat: new FormControl<SendDebugCaptureRequestDataFormat | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			workerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SendDebugCaptureRequestDataFormat { DATA_FORMAT_UNSPECIFIED = 'DATA_FORMAT_UNSPECIFIED', RAW = 'RAW', JSON = 'JSON', ZLIB = 'ZLIB', BROTLI = 'BROTLI' }


	/** Response to a send capture request. nothing */
	export interface SendDebugCaptureResponse {
	}

	/** Response to a send capture request. nothing */
	export interface SendDebugCaptureResponseFormProperties {
	}
	export function CreateSendDebugCaptureResponseFormGroup() {
		return new FormGroup<SendDebugCaptureResponseFormProperties>({
		});

	}


	/** A request for sending worker messages to the service. */
	export interface SendWorkerMessagesRequest {

		/** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job. */
		location?: string | null;

		/** The WorkerMessages to send. */
		workerMessages?: Array<WorkerMessage>;
	}

	/** A request for sending worker messages to the service. */
	export interface SendWorkerMessagesRequestFormProperties {

		/** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateSendWorkerMessagesRequestFormGroup() {
		return new FormGroup<SendWorkerMessagesRequestFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** WorkerMessage provides information to the backend about a worker. */
	export interface WorkerMessage {

		/** Contains per-worker telemetry about the data sampling feature. */
		dataSamplingReport?: DataSamplingReport;

		/** Labels are used to group WorkerMessages. For example, a worker_message about a particular container might have the labels: { "JOB_ID": "2015-04-22", "WORKER_ID": "wordcount-vm-2015…" "CONTAINER_TYPE": "worker", "CONTAINER_ID": "ac1234def"} Label tags typically correspond to Label enum values. However, for ease of development other strings can be used as tags. LABEL_UNSPECIFIED should not be used here. */
		labels?: {[id: string]: string };

		/** Per worker metrics. */
		perWorkerMetrics?: PerWorkerMetrics;

		/** Contains per-user worker telemetry used in streaming autoscaling. */
		streamingScalingReport?: StreamingScalingReport;

		/** The timestamp of the worker_message. */
		time?: string | null;

		/** WorkerHealthReport contains information about the health of a worker. The VM should be identified by the labels attached to the WorkerMessage that this health ping belongs to. */
		workerHealthReport?: WorkerHealthReport;

		/** A report of an event in a worker's lifecycle. The proto contains one event, because the worker is expected to asynchronously send each message immediately after the event. Due to this asynchrony, messages may arrive out of order (or missing), and it is up to the consumer to interpret. The timestamp of the event is in the enclosing WorkerMessage proto. */
		workerLifecycleEvent?: WorkerLifecycleEvent;

		/** A message code is used to report status and error messages to the service. The message codes are intended to be machine readable. The service will take care of translating these into user understandable messages if necessary. Example use cases: 1. Worker processes reporting successful startup. 2. Worker processes reporting specific errors (e.g. package staging failure). */
		workerMessageCode?: WorkerMessageCode;

		/** Worker metrics exported from workers. This contains resource utilization metrics accumulated from a variety of sources. For more information, see go/df-resource-signals. */
		workerMetrics?: ResourceUtilizationReport;

		/** Shutdown notification from workers. This is to be sent by the shutdown script of the worker VM so that the backend knows that the VM is being shut down. */
		workerShutdownNotice?: WorkerShutdownNotice;

		/** Contains information about the thread scaling information of a worker. */
		workerThreadScalingReport?: WorkerThreadScalingReport;
	}

	/** WorkerMessage provides information to the backend about a worker. */
	export interface WorkerMessageFormProperties {

		/** Labels are used to group WorkerMessages. For example, a worker_message about a particular container might have the labels: { "JOB_ID": "2015-04-22", "WORKER_ID": "wordcount-vm-2015…" "CONTAINER_TYPE": "worker", "CONTAINER_ID": "ac1234def"} Label tags typically correspond to Label enum values. However, for ease of development other strings can be used as tags. LABEL_UNSPECIFIED should not be used here. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The timestamp of the worker_message. */
		time: FormControl<string | null | undefined>,
	}
	export function CreateWorkerMessageFormGroup() {
		return new FormGroup<WorkerMessageFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			time: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains per-user worker telemetry used in streaming autoscaling. */
	export interface StreamingScalingReport {

		/** Current acive bundle count. */
		activeBundleCount?: number | null;

		/** Current acive thread count. */
		activeThreadCount?: number | null;

		/** Maximum bundle count limit. */
		maximumBundleCount?: number | null;

		/** Maximum bytes count limit. */
		maximumBytesCount?: number | null;

		/** Maximum thread count limit. */
		maximumThreadCount?: number | null;

		/** Current outstanding bytes count. */
		outstandingBytesCount?: number | null;
	}

	/** Contains per-user worker telemetry used in streaming autoscaling. */
	export interface StreamingScalingReportFormProperties {

		/** Current acive bundle count. */
		activeBundleCount: FormControl<number | null | undefined>,

		/** Current acive thread count. */
		activeThreadCount: FormControl<number | null | undefined>,

		/** Maximum bundle count limit. */
		maximumBundleCount: FormControl<number | null | undefined>,

		/** Maximum bytes count limit. */
		maximumBytesCount: FormControl<number | null | undefined>,

		/** Maximum thread count limit. */
		maximumThreadCount: FormControl<number | null | undefined>,

		/** Current outstanding bytes count. */
		outstandingBytesCount: FormControl<number | null | undefined>,
	}
	export function CreateStreamingScalingReportFormGroup() {
		return new FormGroup<StreamingScalingReportFormProperties>({
			activeBundleCount: new FormControl<number | null | undefined>(undefined),
			activeThreadCount: new FormControl<number | null | undefined>(undefined),
			maximumBundleCount: new FormControl<number | null | undefined>(undefined),
			maximumBytesCount: new FormControl<number | null | undefined>(undefined),
			maximumThreadCount: new FormControl<number | null | undefined>(undefined),
			outstandingBytesCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** WorkerHealthReport contains information about the health of a worker. The VM should be identified by the labels attached to the WorkerMessage that this health ping belongs to. */
	export interface WorkerHealthReport {

		/** Message describing any unusual health reports. */
		msg?: string | null;

		/** The pods running on the worker. See: http://kubernetes.io/v1.1/docs/api-reference/v1/definitions.html#_v1_pod This field is used by the worker to send the status of the indvidual containers running on each worker. */
		pods?: Array<string>;

		/** The interval at which the worker is sending health reports. The default value of 0 should be interpreted as the field is not being explicitly set by the worker. */
		reportInterval?: string | null;

		/** Code to describe a specific reason, if known, that a VM has reported broken state. */
		vmBrokenCode?: string | null;

		/** Whether the VM is in a permanently broken state. Broken VMs should be abandoned or deleted ASAP to avoid assigning or completing any work. */
		vmIsBroken?: boolean | null;

		/** Whether the VM is currently healthy. */
		vmIsHealthy?: boolean | null;

		/** The time the VM was booted. */
		vmStartupTime?: string | null;
	}

	/** WorkerHealthReport contains information about the health of a worker. The VM should be identified by the labels attached to the WorkerMessage that this health ping belongs to. */
	export interface WorkerHealthReportFormProperties {

		/** Message describing any unusual health reports. */
		msg: FormControl<string | null | undefined>,

		/** The interval at which the worker is sending health reports. The default value of 0 should be interpreted as the field is not being explicitly set by the worker. */
		reportInterval: FormControl<string | null | undefined>,

		/** Code to describe a specific reason, if known, that a VM has reported broken state. */
		vmBrokenCode: FormControl<string | null | undefined>,

		/** Whether the VM is in a permanently broken state. Broken VMs should be abandoned or deleted ASAP to avoid assigning or completing any work. */
		vmIsBroken: FormControl<boolean | null | undefined>,

		/** Whether the VM is currently healthy. */
		vmIsHealthy: FormControl<boolean | null | undefined>,

		/** The time the VM was booted. */
		vmStartupTime: FormControl<string | null | undefined>,
	}
	export function CreateWorkerHealthReportFormGroup() {
		return new FormGroup<WorkerHealthReportFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined),
			reportInterval: new FormControl<string | null | undefined>(undefined),
			vmBrokenCode: new FormControl<string | null | undefined>(undefined),
			vmIsBroken: new FormControl<boolean | null | undefined>(undefined),
			vmIsHealthy: new FormControl<boolean | null | undefined>(undefined),
			vmStartupTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A report of an event in a worker's lifecycle. The proto contains one event, because the worker is expected to asynchronously send each message immediately after the event. Due to this asynchrony, messages may arrive out of order (or missing), and it is up to the consumer to interpret. The timestamp of the event is in the enclosing WorkerMessage proto. */
	export interface WorkerLifecycleEvent {

		/** The start time of this container. All events will report this so that events can be grouped together across container/VM restarts. */
		containerStartTime?: string | null;

		/** The event being reported. */
		event?: WorkerLifecycleEventEvent | null;

		/** Other stats that can accompany an event. E.g. { "downloaded_bytes" : "123456" } */
		metadata?: {[id: string]: string };
	}

	/** A report of an event in a worker's lifecycle. The proto contains one event, because the worker is expected to asynchronously send each message immediately after the event. Due to this asynchrony, messages may arrive out of order (or missing), and it is up to the consumer to interpret. The timestamp of the event is in the enclosing WorkerMessage proto. */
	export interface WorkerLifecycleEventFormProperties {

		/** The start time of this container. All events will report this so that events can be grouped together across container/VM restarts. */
		containerStartTime: FormControl<string | null | undefined>,

		/** The event being reported. */
		event: FormControl<WorkerLifecycleEventEvent | null | undefined>,

		/** Other stats that can accompany an event. E.g. { "downloaded_bytes" : "123456" } */
		metadata: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateWorkerLifecycleEventFormGroup() {
		return new FormGroup<WorkerLifecycleEventFormProperties>({
			containerStartTime: new FormControl<string | null | undefined>(undefined),
			event: new FormControl<WorkerLifecycleEventEvent | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum WorkerLifecycleEventEvent { UNKNOWN_EVENT = 'UNKNOWN_EVENT', OS_START = 'OS_START', CONTAINER_START = 'CONTAINER_START', NETWORK_UP = 'NETWORK_UP', STAGING_FILES_DOWNLOAD_START = 'STAGING_FILES_DOWNLOAD_START', STAGING_FILES_DOWNLOAD_FINISH = 'STAGING_FILES_DOWNLOAD_FINISH', SDK_INSTALL_START = 'SDK_INSTALL_START', SDK_INSTALL_FINISH = 'SDK_INSTALL_FINISH' }


	/** A message code is used to report status and error messages to the service. The message codes are intended to be machine readable. The service will take care of translating these into user understandable messages if necessary. Example use cases: 1. Worker processes reporting successful startup. 2. Worker processes reporting specific errors (e.g. package staging failure). */
	export interface WorkerMessageCode {

		/** The code is a string intended for consumption by a machine that identifies the type of message being sent. Examples: 1. "HARNESS_STARTED" might be used to indicate the worker harness has started. 2. "GCS_DOWNLOAD_ERROR" might be used to indicate an error downloading a Cloud Storage file as part of the boot process of one of the worker containers. This is a string and not an enum to make it easy to add new codes without waiting for an API change. */
		code?: string | null;

		/** Parameters contains specific information about the code. This is a struct to allow parameters of different types. Examples: 1. For a "HARNESS_STARTED" message parameters might provide the name of the worker and additional data like timing information. 2. For a "GCS_DOWNLOAD_ERROR" parameters might contain fields listing the Cloud Storage objects being downloaded and fields containing errors. In general complex data structures should be avoided. If a worker needs to send a specific and complicated data structure then please consider defining a new proto and adding it to the data oneof in WorkerMessageResponse. Conventions: Parameters should only be used for information that isn't typically passed as a label. hostname and other worker identifiers should almost always be passed as labels since they will be included on most messages. */
		parameters?: {[id: string]: any };
	}

	/** A message code is used to report status and error messages to the service. The message codes are intended to be machine readable. The service will take care of translating these into user understandable messages if necessary. Example use cases: 1. Worker processes reporting successful startup. 2. Worker processes reporting specific errors (e.g. package staging failure). */
	export interface WorkerMessageCodeFormProperties {

		/** The code is a string intended for consumption by a machine that identifies the type of message being sent. Examples: 1. "HARNESS_STARTED" might be used to indicate the worker harness has started. 2. "GCS_DOWNLOAD_ERROR" might be used to indicate an error downloading a Cloud Storage file as part of the boot process of one of the worker containers. This is a string and not an enum to make it easy to add new codes without waiting for an API change. */
		code: FormControl<string | null | undefined>,

		/** Parameters contains specific information about the code. This is a struct to allow parameters of different types. Examples: 1. For a "HARNESS_STARTED" message parameters might provide the name of the worker and additional data like timing information. 2. For a "GCS_DOWNLOAD_ERROR" parameters might contain fields listing the Cloud Storage objects being downloaded and fields containing errors. In general complex data structures should be avoided. If a worker needs to send a specific and complicated data structure then please consider defining a new proto and adding it to the data oneof in WorkerMessageResponse. Conventions: Parameters should only be used for information that isn't typically passed as a label. hostname and other worker identifiers should almost always be passed as labels since they will be included on most messages. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateWorkerMessageCodeFormGroup() {
		return new FormGroup<WorkerMessageCodeFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Shutdown notification from workers. This is to be sent by the shutdown script of the worker VM so that the backend knows that the VM is being shut down. */
	export interface WorkerShutdownNotice {

		/** The reason for the worker shutdown. Current possible values are: "UNKNOWN": shutdown reason is unknown. "PREEMPTION": shutdown reason is preemption. Other possible reasons may be added in the future. */
		reason?: string | null;
	}

	/** Shutdown notification from workers. This is to be sent by the shutdown script of the worker VM so that the backend knows that the VM is being shut down. */
	export interface WorkerShutdownNoticeFormProperties {

		/** The reason for the worker shutdown. Current possible values are: "UNKNOWN": shutdown reason is unknown. "PREEMPTION": shutdown reason is preemption. Other possible reasons may be added in the future. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateWorkerShutdownNoticeFormGroup() {
		return new FormGroup<WorkerShutdownNoticeFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the thread scaling information of a worker. */
	export interface WorkerThreadScalingReport {

		/** Current number of active threads in a worker. */
		currentThreadCount?: number | null;
	}

	/** Contains information about the thread scaling information of a worker. */
	export interface WorkerThreadScalingReportFormProperties {

		/** Current number of active threads in a worker. */
		currentThreadCount: FormControl<number | null | undefined>,
	}
	export function CreateWorkerThreadScalingReportFormGroup() {
		return new FormGroup<WorkerThreadScalingReportFormProperties>({
			currentThreadCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response to the worker messages. */
	export interface SendWorkerMessagesResponse {

		/** The servers response to the worker messages. */
		workerMessageResponses?: Array<WorkerMessageResponse>;
	}

	/** The response to the worker messages. */
	export interface SendWorkerMessagesResponseFormProperties {
	}
	export function CreateSendWorkerMessagesResponseFormGroup() {
		return new FormGroup<SendWorkerMessagesResponseFormProperties>({
		});

	}


	/** A worker_message response allows the server to pass information to the sender. */
	export interface WorkerMessageResponse {

		/** WorkerHealthReportResponse contains information returned to the worker in response to a health ping. */
		workerHealthReportResponse?: WorkerHealthReportResponse;

		/** Service-side response to WorkerMessage reporting resource utilization. */
		workerMetricsResponse?: ResourceUtilizationReportResponse;

		/** Service-side response to WorkerMessage issuing shutdown notice. */
		workerShutdownNoticeResponse?: WorkerShutdownNoticeResponse;

		/** Contains the thread scaling recommendation for a worker from the backend. */
		workerThreadScalingReportResponse?: WorkerThreadScalingReportResponse;
	}

	/** A worker_message response allows the server to pass information to the sender. */
	export interface WorkerMessageResponseFormProperties {
	}
	export function CreateWorkerMessageResponseFormGroup() {
		return new FormGroup<WorkerMessageResponseFormProperties>({
		});

	}


	/** WorkerHealthReportResponse contains information returned to the worker in response to a health ping. */
	export interface WorkerHealthReportResponse {

		/** A positive value indicates the worker should change its reporting interval to the specified value. The default value of zero means no change in report rate is requested by the server. */
		reportInterval?: string | null;
	}

	/** WorkerHealthReportResponse contains information returned to the worker in response to a health ping. */
	export interface WorkerHealthReportResponseFormProperties {

		/** A positive value indicates the worker should change its reporting interval to the specified value. The default value of zero means no change in report rate is requested by the server. */
		reportInterval: FormControl<string | null | undefined>,
	}
	export function CreateWorkerHealthReportResponseFormGroup() {
		return new FormGroup<WorkerHealthReportResponseFormProperties>({
			reportInterval: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Service-side response to WorkerMessage issuing shutdown notice. */
	export interface WorkerShutdownNoticeResponse {
	}

	/** Service-side response to WorkerMessage issuing shutdown notice. */
	export interface WorkerShutdownNoticeResponseFormProperties {
	}
	export function CreateWorkerShutdownNoticeResponseFormGroup() {
		return new FormGroup<WorkerShutdownNoticeResponseFormProperties>({
		});

	}


	/** Contains the thread scaling recommendation for a worker from the backend. */
	export interface WorkerThreadScalingReportResponse {

		/** Recommended number of threads for a worker. */
		recommendedThreadCount?: number | null;
	}

	/** Contains the thread scaling recommendation for a worker from the backend. */
	export interface WorkerThreadScalingReportResponseFormProperties {

		/** Recommended number of threads for a worker. */
		recommendedThreadCount: FormControl<number | null | undefined>,
	}
	export function CreateWorkerThreadScalingReportResponseFormGroup() {
		return new FormGroup<WorkerThreadScalingReportResponseFormProperties>({
			recommendedThreadCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request to create a snapshot of a job. */
	export interface SnapshotJobRequest {

		/** User specified description of the snapshot. Maybe empty. */
		description?: string | null;

		/** The location that contains this job. */
		location?: string | null;

		/** If true, perform snapshots for sources which support this. */
		snapshotSources?: boolean | null;

		/** TTL for the snapshot. */
		ttl?: string | null;
	}

	/** Request to create a snapshot of a job. */
	export interface SnapshotJobRequestFormProperties {

		/** User specified description of the snapshot. Maybe empty. */
		description: FormControl<string | null | undefined>,

		/** The location that contains this job. */
		location: FormControl<string | null | undefined>,

		/** If true, perform snapshots for sources which support this. */
		snapshotSources: FormControl<boolean | null | undefined>,

		/** TTL for the snapshot. */
		ttl: FormControl<string | null | undefined>,
	}
	export function CreateSnapshotJobRequestFormGroup() {
		return new FormGroup<SnapshotJobRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			snapshotSources: new FormControl<boolean | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the workers and work items within a stage. */
	export interface StageExecutionDetails {

		/** If present, this response does not contain all requested tasks. To obtain the next page of results, repeat the request with page_token set to this value. */
		nextPageToken?: string | null;

		/** Workers that have done work on the stage. */
		workers?: Array<WorkerDetails>;
	}

	/** Information about the workers and work items within a stage. */
	export interface StageExecutionDetailsFormProperties {

		/** If present, this response does not contain all requested tasks. To obtain the next page of results, repeat the request with page_token set to this value. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateStageExecutionDetailsFormGroup() {
		return new FormGroup<StageExecutionDetailsFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a worker */
	export interface WorkerDetails {

		/** Work items processed by this worker, sorted by time. */
		workItems?: Array<WorkItemDetails>;

		/** Name of this worker */
		workerName?: string | null;
	}

	/** Information about a worker */
	export interface WorkerDetailsFormProperties {

		/** Name of this worker */
		workerName: FormControl<string | null | undefined>,
	}
	export function CreateWorkerDetailsFormGroup() {
		return new FormGroup<WorkerDetailsFormProperties>({
			workerName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an individual work item execution. */
	export interface WorkItemDetails {

		/** Attempt ID of this work item */
		attemptId?: string | null;

		/** End time of this work item attempt. If the work item is completed, this is the actual end time of the work item. Otherwise, it is the predicted end time. */
		endTime?: string | null;

		/** Metrics for this work item. */
		metrics?: Array<MetricUpdate>;

		/** Information about the progress of some component of job execution. */
		progress?: ProgressTimeseries;

		/** Start time of this work item attempt. */
		startTime?: string | null;

		/** State of this work item. */
		state?: StageSummaryState | null;

		/** Information useful for straggler identification and debugging. */
		stragglerInfo?: StragglerInfo;

		/** Name of this work item. */
		taskId?: string | null;
	}

	/** Information about an individual work item execution. */
	export interface WorkItemDetailsFormProperties {

		/** Attempt ID of this work item */
		attemptId: FormControl<string | null | undefined>,

		/** End time of this work item attempt. If the work item is completed, this is the actual end time of the work item. Otherwise, it is the predicted end time. */
		endTime: FormControl<string | null | undefined>,

		/** Start time of this work item attempt. */
		startTime: FormControl<string | null | undefined>,

		/** State of this work item. */
		state: FormControl<StageSummaryState | null | undefined>,

		/** Name of this work item. */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateWorkItemDetailsFormGroup() {
		return new FormGroup<WorkItemDetailsFormProperties>({
			attemptId: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<StageSummaryState | null | undefined>(undefined),
			taskId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Send a worker_message to the service.
		 * Post v1b3/projects/{projectId}/WorkerMessages
		 * @param {string} projectId The project to send the WorkerMessages to.
		 * @return {SendWorkerMessagesResponse} Successful response
		 */
		Dataflow_projects_workerMessages(projectId: string, requestBody: SendWorkerMessagesRequest): Observable<SendWorkerMessagesResponse> {
			return this.http.post<SendWorkerMessagesResponse>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/WorkerMessages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, because you can only get the list of jobs that are running in `us-central1`. `projects.locations.jobs.list` and `projects.jobs.list` support filtering the list of jobs by name. Filtering by name isn't supported by `projects.jobs.aggregated`.
		 * Get v1b3/projects/{projectId}/jobs
		 * @param {string} projectId The project which owns the jobs.
		 * @param {Dataflow_projects_jobs_listFilter} filter The kind of filter to use.
		 * @param {string} location The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
		 * @param {string} name Optional. The job name.
		 * @param {number} pageSize If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.
		 * @param {string} pageToken Set this to the 'next_page_token' field of a previous response to request additional results in a long list.
		 * @param {Dataflow_projects_jobs_listView} view Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews.
		 * @return {ListJobsResponse} Successful response
		 */
		Dataflow_projects_jobs_list(projectId: string, filter: Dataflow_projects_jobs_listFilter | null | undefined, location: string | null | undefined, name: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Dataflow_projects_jobs_listView | null | undefined): Observable<ListJobsResponse> {
			return this.http.get<ListJobsResponse>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs&filter=' + filter + '&location=' + (location == null ? '' : encodeURIComponent(location)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
		 * Post v1b3/projects/{projectId}/jobs
		 * @param {string} projectId The ID of the Cloud Platform project that the job belongs to.
		 * @param {string} location The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
		 * @param {string} replaceJobId Deprecated. This field is now in the Job message.
		 * @param {Dataflow_projects_jobs_listView} view The level of information requested in response.
		 * @return {Job} Successful response
		 */
		Dataflow_projects_jobs_create(projectId: string, location: string | null | undefined, replaceJobId: string | null | undefined, view: Dataflow_projects_jobs_listView | null | undefined, requestBody: Job): Observable<Job> {
			return this.http.post<Job>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs&location=' + (location == null ? '' : encodeURIComponent(location)) + '&replaceJobId=' + (replaceJobId == null ? '' : encodeURIComponent(replaceJobId)) + '&view=' + view, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
		 * Get v1b3/projects/{projectId}/jobs/{jobId}
		 * @param {string} projectId The ID of the Cloud Platform project that the job belongs to.
		 * @param {string} jobId The job ID.
		 * @param {string} location The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
		 * @param {Dataflow_projects_jobs_listView} view The level of information requested in response.
		 * @return {Job} Successful response
		 */
		Dataflow_projects_jobs_get(projectId: string, jobId: string, location: string | null | undefined, view: Dataflow_projects_jobs_listView | null | undefined): Observable<Job> {
			return this.http.get<Job>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&location=' + (location == null ? '' : encodeURIComponent(location)) + '&view=' + view, {});
		}

		/**
		 * Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
		 * Put v1b3/projects/{projectId}/jobs/{jobId}
		 * @param {string} projectId The ID of the Cloud Platform project that the job belongs to.
		 * @param {string} jobId The job ID.
		 * @param {string} location The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
		 * @param {string} updateMask The list of fields to update relative to Job. If empty, only RequestedJobState will be considered for update. If the FieldMask is not empty and RequestedJobState is none/empty, The fields specified in the update mask will be the only ones considered for update. If both RequestedJobState and update_mask are specified, an error will be returned as we cannot update both state and mask.
		 * @return {Job} Successful response
		 */
		Dataflow_projects_jobs_update(projectId: string, jobId: string, location: string | null | undefined, updateMask: string | null | undefined, requestBody: Job): Observable<Job> {
			return this.http.put<Job>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&location=' + (location == null ? '' : encodeURIComponent(location)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get encoded debug configuration for component. Not cacheable.
		 * Post v1b3/projects/{projectId}/jobs/{jobId}/debug/getConfig
		 * @param {string} projectId The project id.
		 * @param {string} jobId The job id.
		 * @return {GetDebugConfigResponse} Successful response
		 */
		Dataflow_projects_jobs_debug_getConfig(projectId: string, jobId: string, requestBody: GetDebugConfigRequest): Observable<GetDebugConfigResponse> {
			return this.http.post<GetDebugConfigResponse>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/debug/getConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Send encoded debug capture data for component.
		 * Post v1b3/projects/{projectId}/jobs/{jobId}/debug/sendCapture
		 * @param {string} projectId The project id.
		 * @param {string} jobId The job id.
		 * @return {SendDebugCaptureResponse} Successful response
		 */
		Dataflow_projects_jobs_debug_sendCapture(projectId: string, jobId: string, requestBody: SendDebugCaptureRequest): Observable<SendDebugCaptureResponse> {
			return this.http.post<SendDebugCaptureResponse>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/debug/sendCapture', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
		 * Get v1b3/projects/{projectId}/jobs/{jobId}/messages
		 * @param {string} projectId A project id.
		 * @param {string} jobId The job to get messages about.
		 * @param {string} endTime Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available).
		 * @param {string} location The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
		 * @param {JobMessageMessageImportance} minimumImportance Filter to only get messages with importance >= level
		 * @param {number} pageSize If specified, determines the maximum number of messages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
		 * @param {string} pageToken If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
		 * @param {string} startTime If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages).
		 * @return {ListJobMessagesResponse} Successful response
		 */
		Dataflow_projects_jobs_messages_list(projectId: string, jobId: string, endTime: string | null | undefined, location: string | null | undefined, minimumImportance: JobMessageMessageImportance | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, startTime: string | null | undefined): Observable<ListJobMessagesResponse> {
			return this.http.get<ListJobMessagesResponse>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/messages&endTime=' + (endTime == null ? '' : encodeURIComponent(endTime)) + '&location=' + (location == null ? '' : encodeURIComponent(location)) + '&minimumImportance=' + minimumImportance + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startTime=' + (startTime == null ? '' : encodeURIComponent(startTime)), {});
		}

		/**
		 * Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
		 * Get v1b3/projects/{projectId}/jobs/{jobId}/metrics
		 * @param {string} projectId A project id.
		 * @param {string} jobId The job to get metrics for.
		 * @param {string} location The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
		 * @param {string} startTime Return only metric data that has changed since this time. Default is to return all information about all metrics for the job.
		 * @return {JobMetrics} Successful response
		 */
		Dataflow_projects_jobs_getMetrics(projectId: string, jobId: string, location: string | null | undefined, startTime: string | null | undefined): Observable<JobMetrics> {
			return this.http.get<JobMetrics>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/metrics&location=' + (location == null ? '' : encodeURIComponent(location)) + '&startTime=' + (startTime == null ? '' : encodeURIComponent(startTime)), {});
		}

		/**
		 * Leases a dataflow WorkItem to run.
		 * Post v1b3/projects/{projectId}/jobs/{jobId}/workItems:lease
		 * @param {string} projectId Identifies the project this worker belongs to.
		 * @param {string} jobId Identifies the workflow job this worker belongs to.
		 * @return {LeaseWorkItemResponse} Successful response
		 */
		Dataflow_projects_jobs_workItems_lease(projectId: string, jobId: string, requestBody: LeaseWorkItemRequest): Observable<LeaseWorkItemResponse> {
			return this.http.post<LeaseWorkItemResponse>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/workItems:lease', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reports the status of dataflow WorkItems leased by a worker.
		 * Post v1b3/projects/{projectId}/jobs/{jobId}/workItems:reportStatus
		 * @param {string} projectId The project which owns the WorkItem's job.
		 * @param {string} jobId The job which the WorkItem is part of.
		 * @return {ReportWorkItemStatusResponse} Successful response
		 */
		Dataflow_projects_jobs_workItems_reportStatus(projectId: string, jobId: string, requestBody: ReportWorkItemStatusRequest): Observable<ReportWorkItemStatusResponse> {
			return this.http.post<ReportWorkItemStatusResponse>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/workItems:reportStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Snapshot the state of a streaming job.
		 * Post v1b3/projects/{projectId}/jobs/{jobId}:snapshot
		 * @param {string} projectId The project which owns the job to be snapshotted.
		 * @param {string} jobId The job to be snapshotted.
		 * @return {Snapshot} Successful response
		 */
		Dataflow_projects_jobs_snapshot(projectId: string, jobId: string, requestBody: SnapshotJobRequest): Observable<Snapshot> {
			return this.http.post<Snapshot>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + ':snapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the jobs of a project across all regions. **Note:** This method doesn't support filtering the list of jobs by name.
		 * Get v1b3/projects/{projectId}/jobs:aggregated
		 * @param {string} projectId The project which owns the jobs.
		 * @param {Dataflow_projects_jobs_listFilter} filter The kind of filter to use.
		 * @param {string} location The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
		 * @param {string} name Optional. The job name.
		 * @param {number} pageSize If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.
		 * @param {string} pageToken Set this to the 'next_page_token' field of a previous response to request additional results in a long list.
		 * @param {Dataflow_projects_jobs_listView} view Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews.
		 * @return {ListJobsResponse} Successful response
		 */
		Dataflow_projects_jobs_aggregated(projectId: string, filter: Dataflow_projects_jobs_listFilter | null | undefined, location: string | null | undefined, name: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Dataflow_projects_jobs_listView | null | undefined): Observable<ListJobsResponse> {
			return this.http.get<ListJobsResponse>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs:aggregated&filter=' + filter + '&location=' + (location == null ? '' : encodeURIComponent(location)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Send a worker_message to the service.
		 * Post v1b3/projects/{projectId}/locations/{location}/WorkerMessages
		 * @param {string} projectId The project to send the WorkerMessages to.
		 * @param {string} location The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job.
		 * @return {SendWorkerMessagesResponse} Successful response
		 */
		Dataflow_projects_locations_workerMessages(projectId: string, location: string, requestBody: SendWorkerMessagesRequest): Observable<SendWorkerMessagesResponse> {
			return this.http.post<SendWorkerMessagesResponse>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/WorkerMessages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Launch a job with a FlexTemplate.
		 * Post v1b3/projects/{projectId}/locations/{location}/flexTemplates:launch
		 * @param {string} projectId Required. The ID of the Cloud Platform project that the job belongs to.
		 * @param {string} location Required. The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. E.g., us-central1, us-west1.
		 * @return {LaunchFlexTemplateResponse} Successful response
		 */
		Dataflow_projects_locations_flexTemplates_launch(projectId: string, location: string, requestBody: LaunchFlexTemplateRequest): Observable<LaunchFlexTemplateResponse> {
			return this.http.post<LaunchFlexTemplateResponse>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/flexTemplates:launch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, because you can only get the list of jobs that are running in `us-central1`. `projects.locations.jobs.list` and `projects.jobs.list` support filtering the list of jobs by name. Filtering by name isn't supported by `projects.jobs.aggregated`.
		 * Get v1b3/projects/{projectId}/locations/{location}/jobs
		 * @param {string} projectId The project which owns the jobs.
		 * @param {string} location The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
		 * @param {Dataflow_projects_jobs_listFilter} filter The kind of filter to use.
		 * @param {string} name Optional. The job name.
		 * @param {number} pageSize If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.
		 * @param {string} pageToken Set this to the 'next_page_token' field of a previous response to request additional results in a long list.
		 * @param {Dataflow_projects_jobs_listView} view Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews.
		 * @return {ListJobsResponse} Successful response
		 */
		Dataflow_projects_locations_jobs_list(projectId: string, location: string, filter: Dataflow_projects_jobs_listFilter | null | undefined, name: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Dataflow_projects_jobs_listView | null | undefined): Observable<ListJobsResponse> {
			return this.http.get<ListJobsResponse>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs&filter=' + filter + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
		 * Post v1b3/projects/{projectId}/locations/{location}/jobs
		 * @param {string} projectId The ID of the Cloud Platform project that the job belongs to.
		 * @param {string} location The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
		 * @param {string} replaceJobId Deprecated. This field is now in the Job message.
		 * @param {Dataflow_projects_jobs_listView} view The level of information requested in response.
		 * @return {Job} Successful response
		 */
		Dataflow_projects_locations_jobs_create(projectId: string, location: string, replaceJobId: string | null | undefined, view: Dataflow_projects_jobs_listView | null | undefined, requestBody: Job): Observable<Job> {
			return this.http.post<Job>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs&replaceJobId=' + (replaceJobId == null ? '' : encodeURIComponent(replaceJobId)) + '&view=' + view, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
		 * Get v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}
		 * @param {string} projectId The ID of the Cloud Platform project that the job belongs to.
		 * @param {string} location The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
		 * @param {string} jobId The job ID.
		 * @param {Dataflow_projects_jobs_listView} view The level of information requested in response.
		 * @return {Job} Successful response
		 */
		Dataflow_projects_locations_jobs_get(projectId: string, location: string, jobId: string, view: Dataflow_projects_jobs_listView | null | undefined): Observable<Job> {
			return this.http.get<Job>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&view=' + view, {});
		}

		/**
		 * Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
		 * Put v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}
		 * @param {string} projectId The ID of the Cloud Platform project that the job belongs to.
		 * @param {string} location The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
		 * @param {string} jobId The job ID.
		 * @param {string} updateMask The list of fields to update relative to Job. If empty, only RequestedJobState will be considered for update. If the FieldMask is not empty and RequestedJobState is none/empty, The fields specified in the update mask will be the only ones considered for update. If both RequestedJobState and update_mask are specified, an error will be returned as we cannot update both state and mask.
		 * @return {Job} Successful response
		 */
		Dataflow_projects_locations_jobs_update(projectId: string, location: string, jobId: string, updateMask: string | null | undefined, requestBody: Job): Observable<Job> {
			return this.http.put<Job>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get encoded debug configuration for component. Not cacheable.
		 * Post v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/getConfig
		 * @param {string} projectId The project id.
		 * @param {string} location The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
		 * @param {string} jobId The job id.
		 * @return {GetDebugConfigResponse} Successful response
		 */
		Dataflow_projects_locations_jobs_debug_getConfig(projectId: string, location: string, jobId: string, requestBody: GetDebugConfigRequest): Observable<GetDebugConfigResponse> {
			return this.http.post<GetDebugConfigResponse>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/debug/getConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Send encoded debug capture data for component.
		 * Post v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/sendCapture
		 * @param {string} projectId The project id.
		 * @param {string} location The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
		 * @param {string} jobId The job id.
		 * @return {SendDebugCaptureResponse} Successful response
		 */
		Dataflow_projects_locations_jobs_debug_sendCapture(projectId: string, location: string, jobId: string, requestBody: SendDebugCaptureRequest): Observable<SendDebugCaptureResponse> {
			return this.http.post<SendDebugCaptureResponse>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/debug/sendCapture', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
		 * Get v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/executionDetails
		 * @param {string} projectId A project id.
		 * @param {string} location The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
		 * @param {string} jobId The job to get execution details for.
		 * @param {number} pageSize If specified, determines the maximum number of stages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
		 * @param {string} pageToken If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
		 * @return {JobExecutionDetails} Successful response
		 */
		Dataflow_projects_locations_jobs_getExecutionDetails(projectId: string, location: string, jobId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<JobExecutionDetails> {
			return this.http.get<JobExecutionDetails>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/executionDetails&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
		 * Get v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/messages
		 * @param {string} projectId A project id.
		 * @param {string} location The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
		 * @param {string} jobId The job to get messages about.
		 * @param {string} endTime Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available).
		 * @param {JobMessageMessageImportance} minimumImportance Filter to only get messages with importance >= level
		 * @param {number} pageSize If specified, determines the maximum number of messages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
		 * @param {string} pageToken If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
		 * @param {string} startTime If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages).
		 * @return {ListJobMessagesResponse} Successful response
		 */
		Dataflow_projects_locations_jobs_messages_list(projectId: string, location: string, jobId: string, endTime: string | null | undefined, minimumImportance: JobMessageMessageImportance | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, startTime: string | null | undefined): Observable<ListJobMessagesResponse> {
			return this.http.get<ListJobMessagesResponse>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/messages&endTime=' + (endTime == null ? '' : encodeURIComponent(endTime)) + '&minimumImportance=' + minimumImportance + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startTime=' + (startTime == null ? '' : encodeURIComponent(startTime)), {});
		}

		/**
		 * Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
		 * Get v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/metrics
		 * @param {string} projectId A project id.
		 * @param {string} location The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
		 * @param {string} jobId The job to get metrics for.
		 * @param {string} startTime Return only metric data that has changed since this time. Default is to return all information about all metrics for the job.
		 * @return {JobMetrics} Successful response
		 */
		Dataflow_projects_locations_jobs_getMetrics(projectId: string, location: string, jobId: string, startTime: string | null | undefined): Observable<JobMetrics> {
			return this.http.get<JobMetrics>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/metrics&startTime=' + (startTime == null ? '' : encodeURIComponent(startTime)), {});
		}

		/**
		 * Lists snapshots.
		 * Get v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/snapshots
		 * @param {string} projectId The project ID to list snapshots for.
		 * @param {string} location The location to list snapshots in.
		 * @param {string} jobId If specified, list snapshots created from this job.
		 * @return {ListSnapshotsResponse} Successful response
		 */
		Dataflow_projects_locations_jobs_snapshots_list(projectId: string, location: string, jobId: string): Observable<ListSnapshotsResponse> {
			return this.http.get<ListSnapshotsResponse>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/snapshots', {});
		}

		/**
		 * Request detailed information about the execution status of a stage of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
		 * Get v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/stages/{stageId}/executionDetails
		 * @param {string} projectId A project id.
		 * @param {string} location The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
		 * @param {string} jobId The job to get execution details for.
		 * @param {string} stageId The stage for which to fetch information.
		 * @param {string} endTime Upper time bound of work items to include, by start time.
		 * @param {number} pageSize If specified, determines the maximum number of work items to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
		 * @param {string} pageToken If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
		 * @param {string} startTime Lower time bound of work items to include, by start time.
		 * @return {StageExecutionDetails} Successful response
		 */
		Dataflow_projects_locations_jobs_stages_getExecutionDetails(projectId: string, location: string, jobId: string, stageId: string, endTime: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, startTime: string | null | undefined): Observable<StageExecutionDetails> {
			return this.http.get<StageExecutionDetails>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/stages/' + (stageId == null ? '' : encodeURIComponent(stageId)) + '/executionDetails&endTime=' + (endTime == null ? '' : encodeURIComponent(endTime)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startTime=' + (startTime == null ? '' : encodeURIComponent(startTime)), {});
		}

		/**
		 * Leases a dataflow WorkItem to run.
		 * Post v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:lease
		 * @param {string} projectId Identifies the project this worker belongs to.
		 * @param {string} location The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.
		 * @param {string} jobId Identifies the workflow job this worker belongs to.
		 * @return {LeaseWorkItemResponse} Successful response
		 */
		Dataflow_projects_locations_jobs_workItems_lease(projectId: string, location: string, jobId: string, requestBody: LeaseWorkItemRequest): Observable<LeaseWorkItemResponse> {
			return this.http.post<LeaseWorkItemResponse>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/workItems:lease', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reports the status of dataflow WorkItems leased by a worker.
		 * Post v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:reportStatus
		 * @param {string} projectId The project which owns the WorkItem's job.
		 * @param {string} location The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.
		 * @param {string} jobId The job which the WorkItem is part of.
		 * @return {ReportWorkItemStatusResponse} Successful response
		 */
		Dataflow_projects_locations_jobs_workItems_reportStatus(projectId: string, location: string, jobId: string, requestBody: ReportWorkItemStatusRequest): Observable<ReportWorkItemStatusResponse> {
			return this.http.post<ReportWorkItemStatusResponse>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/workItems:reportStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Snapshot the state of a streaming job.
		 * Post v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}:snapshot
		 * @param {string} projectId The project which owns the job to be snapshotted.
		 * @param {string} location The location that contains this job.
		 * @param {string} jobId The job to be snapshotted.
		 * @return {Snapshot} Successful response
		 */
		Dataflow_projects_locations_jobs_snapshot(projectId: string, location: string, jobId: string, requestBody: SnapshotJobRequest): Observable<Snapshot> {
			return this.http.post<Snapshot>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + ':snapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists snapshots.
		 * Get v1b3/projects/{projectId}/locations/{location}/snapshots
		 * @param {string} projectId The project ID to list snapshots for.
		 * @param {string} location The location to list snapshots in.
		 * @param {string} jobId If specified, list snapshots created from this job.
		 * @return {ListSnapshotsResponse} Successful response
		 */
		Dataflow_projects_locations_snapshots_list(projectId: string, location: string, jobId: string | null | undefined): Observable<ListSnapshotsResponse> {
			return this.http.get<ListSnapshotsResponse>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/snapshots&jobId=' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}

		/**
		 * Deletes a snapshot.
		 * Delete v1b3/projects/{projectId}/locations/{location}/snapshots/{snapshotId}
		 * @param {string} projectId The ID of the Cloud Platform project that the snapshot belongs to.
		 * @param {string} location The location that contains this snapshot.
		 * @param {string} snapshotId The ID of the snapshot.
		 * @return {DeleteSnapshotResponse} Successful response
		 */
		Dataflow_projects_locations_snapshots_delete(projectId: string, location: string, snapshotId: string): Observable<DeleteSnapshotResponse> {
			return this.http.delete<DeleteSnapshotResponse>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/snapshots/' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)), {});
		}

		/**
		 * Gets information about a snapshot.
		 * Get v1b3/projects/{projectId}/locations/{location}/snapshots/{snapshotId}
		 * @param {string} projectId The ID of the Cloud Platform project that the snapshot belongs to.
		 * @param {string} location The location that contains this snapshot.
		 * @param {string} snapshotId The ID of the snapshot.
		 * @return {Snapshot} Successful response
		 */
		Dataflow_projects_locations_snapshots_get(projectId: string, location: string, snapshotId: string): Observable<Snapshot> {
			return this.http.get<Snapshot>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/snapshots/' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)), {});
		}

		/**
		 * Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
		 * Post v1b3/projects/{projectId}/locations/{location}/templates
		 * @param {string} projectId Required. The ID of the Cloud Platform project that the job belongs to.
		 * @param {string} location The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
		 * @return {Job} Successful response
		 */
		Dataflow_projects_locations_templates_create(projectId: string, location: string, requestBody: CreateJobFromTemplateRequest): Observable<Job> {
			return this.http.post<Job>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/templates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the template associated with a template.
		 * Get v1b3/projects/{projectId}/locations/{location}/templates:get
		 * @param {string} projectId Required. The ID of the Cloud Platform project that the job belongs to.
		 * @param {string} location The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
		 * @param {string} gcsPath Required. A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.
		 * @param {Dataflow_projects_locations_templates_getView} view The view to retrieve. Defaults to METADATA_ONLY.
		 * @return {GetTemplateResponse} Successful response
		 */
		Dataflow_projects_locations_templates_get(projectId: string, location: string, gcsPath: string | null | undefined, view: Dataflow_projects_locations_templates_getView | null | undefined): Observable<GetTemplateResponse> {
			return this.http.get<GetTemplateResponse>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/templates:get&gcsPath=' + (gcsPath == null ? '' : encodeURIComponent(gcsPath)) + '&view=' + view, {});
		}

		/**
		 * Launch a template.
		 * Post v1b3/projects/{projectId}/locations/{location}/templates:launch
		 * @param {string} projectId Required. The ID of the Cloud Platform project that the job belongs to.
		 * @param {string} location The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
		 * @param {string} dynamicTemplate_gcsPath Path to dynamic template spec file on Cloud Storage. The file must be a Json serialized DynamicTemplateFieSpec object.
		 * @param {string} dynamicTemplate_stagingLocation Cloud Storage path for staging dependencies. Must be a valid Cloud Storage URL, beginning with `gs://`.
		 * @param {string} gcsPath A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.
		 * @param {boolean} validateOnly If true, the request is validated but not actually executed. Defaults to false.
		 * @return {LaunchTemplateResponse} Successful response
		 */
		Dataflow_projects_locations_templates_launch(projectId: string, location: string, dynamicTemplate_gcsPath: string | null | undefined, dynamicTemplate_stagingLocation: string | null | undefined, gcsPath: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: LaunchTemplateParameters): Observable<LaunchTemplateResponse> {
			return this.http.post<LaunchTemplateResponse>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/templates:launch&dynamicTemplate_gcsPath=' + (dynamicTemplate_gcsPath == null ? '' : encodeURIComponent(dynamicTemplate_gcsPath)) + '&dynamicTemplate_stagingLocation=' + (dynamicTemplate_stagingLocation == null ? '' : encodeURIComponent(dynamicTemplate_stagingLocation)) + '&gcsPath=' + (gcsPath == null ? '' : encodeURIComponent(gcsPath)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a snapshot.
		 * Delete v1b3/projects/{projectId}/snapshots
		 * @param {string} projectId The ID of the Cloud Platform project that the snapshot belongs to.
		 * @param {string} location The location that contains this snapshot.
		 * @param {string} snapshotId The ID of the snapshot.
		 * @return {DeleteSnapshotResponse} Successful response
		 */
		Dataflow_projects_deleteSnapshots(projectId: string, location: string | null | undefined, snapshotId: string | null | undefined): Observable<DeleteSnapshotResponse> {
			return this.http.delete<DeleteSnapshotResponse>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/snapshots&location=' + (location == null ? '' : encodeURIComponent(location)) + '&snapshotId=' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)), {});
		}

		/**
		 * Lists snapshots.
		 * Get v1b3/projects/{projectId}/snapshots
		 * @param {string} projectId The project ID to list snapshots for.
		 * @param {string} jobId If specified, list snapshots created from this job.
		 * @param {string} location The location to list snapshots in.
		 * @return {ListSnapshotsResponse} Successful response
		 */
		Dataflow_projects_snapshots_list(projectId: string, jobId: string | null | undefined, location: string | null | undefined): Observable<ListSnapshotsResponse> {
			return this.http.get<ListSnapshotsResponse>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/snapshots&jobId=' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&location=' + (location == null ? '' : encodeURIComponent(location)), {});
		}

		/**
		 * Gets information about a snapshot.
		 * Get v1b3/projects/{projectId}/snapshots/{snapshotId}
		 * @param {string} projectId The ID of the Cloud Platform project that the snapshot belongs to.
		 * @param {string} snapshotId The ID of the snapshot.
		 * @param {string} location The location that contains this snapshot.
		 * @return {Snapshot} Successful response
		 */
		Dataflow_projects_snapshots_get(projectId: string, snapshotId: string, location: string | null | undefined): Observable<Snapshot> {
			return this.http.get<Snapshot>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/snapshots/' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)) + '&location=' + (location == null ? '' : encodeURIComponent(location)), {});
		}

		/**
		 * Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
		 * Post v1b3/projects/{projectId}/templates
		 * @param {string} projectId Required. The ID of the Cloud Platform project that the job belongs to.
		 * @return {Job} Successful response
		 */
		Dataflow_projects_templates_create(projectId: string, requestBody: CreateJobFromTemplateRequest): Observable<Job> {
			return this.http.post<Job>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/templates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the template associated with a template.
		 * Get v1b3/projects/{projectId}/templates:get
		 * @param {string} projectId Required. The ID of the Cloud Platform project that the job belongs to.
		 * @param {string} gcsPath Required. A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.
		 * @param {string} location The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
		 * @param {Dataflow_projects_locations_templates_getView} view The view to retrieve. Defaults to METADATA_ONLY.
		 * @return {GetTemplateResponse} Successful response
		 */
		Dataflow_projects_templates_get(projectId: string, gcsPath: string | null | undefined, location: string | null | undefined, view: Dataflow_projects_locations_templates_getView | null | undefined): Observable<GetTemplateResponse> {
			return this.http.get<GetTemplateResponse>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/templates:get&gcsPath=' + (gcsPath == null ? '' : encodeURIComponent(gcsPath)) + '&location=' + (location == null ? '' : encodeURIComponent(location)) + '&view=' + view, {});
		}

		/**
		 * Launch a template.
		 * Post v1b3/projects/{projectId}/templates:launch
		 * @param {string} projectId Required. The ID of the Cloud Platform project that the job belongs to.
		 * @param {string} dynamicTemplate_gcsPath Path to dynamic template spec file on Cloud Storage. The file must be a Json serialized DynamicTemplateFieSpec object.
		 * @param {string} dynamicTemplate_stagingLocation Cloud Storage path for staging dependencies. Must be a valid Cloud Storage URL, beginning with `gs://`.
		 * @param {string} gcsPath A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.
		 * @param {string} location The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
		 * @param {boolean} validateOnly If true, the request is validated but not actually executed. Defaults to false.
		 * @return {LaunchTemplateResponse} Successful response
		 */
		Dataflow_projects_templates_launch(projectId: string, dynamicTemplate_gcsPath: string | null | undefined, dynamicTemplate_stagingLocation: string | null | undefined, gcsPath: string | null | undefined, location: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: LaunchTemplateParameters): Observable<LaunchTemplateResponse> {
			return this.http.post<LaunchTemplateResponse>(this.baseUri + 'v1b3/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/templates:launch&dynamicTemplate_gcsPath=' + (dynamicTemplate_gcsPath == null ? '' : encodeURIComponent(dynamicTemplate_gcsPath)) + '&dynamicTemplate_stagingLocation=' + (dynamicTemplate_stagingLocation == null ? '' : encodeURIComponent(dynamicTemplate_stagingLocation)) + '&gcsPath=' + (gcsPath == null ? '' : encodeURIComponent(gcsPath)) + '&location=' + (location == null ? '' : encodeURIComponent(location)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Dataflow_projects_jobs_listFilter { UNKNOWN = 'UNKNOWN', ALL = 'ALL', TERMINATED = 'TERMINATED', ACTIVE = 'ACTIVE' }

	export enum Dataflow_projects_jobs_listView { JOB_VIEW_UNKNOWN = 'JOB_VIEW_UNKNOWN', JOB_VIEW_SUMMARY = 'JOB_VIEW_SUMMARY', JOB_VIEW_ALL = 'JOB_VIEW_ALL', JOB_VIEW_DESCRIPTION = 'JOB_VIEW_DESCRIPTION' }

	export enum Dataflow_projects_locations_templates_getView { METADATA_ONLY = 'METADATA_ONLY' }

}

